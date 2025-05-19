var YE=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var LN=YE((Ht,zt)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Cs=[],yn=()=>{},JE=()=>!1,el=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ku=t=>t.startsWith("onUpdate:"),rt=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},XE=Object.prototype.hasOwnProperty,ke=(t,e)=>XE.call(t,e),ie=Array.isArray,Ps=t=>go(t)==="[object Map]",tl=t=>go(t)==="[object Set]",Uf=t=>go(t)==="[object Date]",de=t=>typeof t=="function",Ye=t=>typeof t=="string",In=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",jm=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),Bm=Object.prototype.toString,go=t=>Bm.call(t),ZE=t=>go(t).slice(8,-1),qm=t=>go(t)==="[object Object]",Du=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xi=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eT=/-(\w)/g,tn=nl(t=>t.replace(eT,(e,n)=>n?n.toUpperCase():"")),tT=/\B([A-Z])/g,os=nl(t=>t.replace(tT,"-$1").toLowerCase()),rl=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),oc=nl(t=>t?`on${rl(t)}`:""),mr=(t,e)=>!Object.is(t,e),oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nT=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let $f;const sl=()=>$f||($f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?oT(r):xu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||xe(t))return t}const rT=/;(?![^(]*\))/g,sT=/:([^]+)/,iT=/\/\*[^]*?\*\//g;function oT(t){const e={};return t.replace(iT,"").split(rT).forEach(n=>{if(n){const r=n.split(sT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vt(t){let e="";if(Ye(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Vt(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lT=Pu(aT);function zm(t){return!!t||t===""}function cT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=il(t[r],e[r]);return n}function il(t,e){if(t===e)return!0;let n=Uf(t),r=Uf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=In(t),r=In(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?cT(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!il(t[o],e[o]))return!1}}return String(t)===String(e)}function uT(t,e){return t.findIndex(n=>il(n,e))}const Wm=t=>!!(t&&t.__v_isRef===!0),it=t=>Ye(t)?t:t==null?"":ie(t)||xe(t)&&(t.toString===Bm||!de(t.toString))?Wm(t)?it(t.value):JSON.stringify(t,Km,2):String(t),Km=(t,e)=>Wm(e)?Km(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ac(r,i)+" =>"]=s,n),{})}:tl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ac(n))}:In(e)?ac(e):xe(e)&&!ie(e)&&!qm(e)?String(e):e,ac=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qm(t){return new Gm(t)}function Ym(){return Ct}function hT(t,e=!1){Ct&&Ct.cleanups.push(t)}let Fe;const lc=new WeakSet;class Jm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lc.has(this)&&(lc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jf(this),eg(this);const e=Fe,n=on;Fe=this,on=!0;try{return this.fn()}finally{tg(this),Fe=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nc(this)&&this.run()}get dirty(){return Nc(this)}}let Xm=0,Vi,Ni;function Zm(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=Vi,Vi=t}function Vu(){Xm++}function Nu(){if(--Xm>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vi;){let e=Vi;for(Vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function eg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mu(r),fT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Nc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ng(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gi))return;t.globalVersion=Gi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Nc(t)){t.flags&=-3;return}const n=Fe,r=on;Fe=t,on=!0;try{eg(t);const s=t.fn(t._value);(e.version===0||mr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,on=r,tg(t),t.flags&=-3}}function Mu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const rg=[];function Cr(){rg.push(on),on=!1}function Pr(){const t=rg.pop();on=t===void 0?!0:t}function jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Gi=0;class dT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!on||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new dT(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Gi++,this.notify(e)}notify(e){Vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nu()}}}function sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ia=new WeakMap,Gr=Symbol(""),Mc=Symbol(""),Qi=Symbol("");function Tt(t,e,n){if(on&&Fe){let r=Ia.get(t);r||Ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Lu),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=Ia.get(t);if(!o){Gi++;return}const l=c=>{c&&c.trigger()};if(Vu(),e==="clear")o.forEach(l);else{const c=ie(t),u=c&&Du(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===Qi||!In(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Gr)),Ps(t)&&l(o.get(Mc)));break;case"delete":c||(l(o.get(Gr)),Ps(t)&&l(o.get(Mc)));break;case"set":Ps(t)&&l(o.get(Gr));break}}Nu()}function pT(t,e){const n=Ia.get(t);return n&&n.get(e)}function ys(t){const e=Ie(t);return e===t?e:(Tt(e,"iterate",Qi),Xt(t)?e:e.map(wt))}function ol(t){return Tt(t=Ie(t),"iterate",Qi),t}const mT={__proto__:null,[Symbol.iterator](){return cc(this,Symbol.iterator,wt)},concat(...t){return ys(this).concat(...t.map(e=>ie(e)?ys(e):e))},entries(){return cc(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return Cn(this,"find",t,e,wt,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return uc(this,"includes",t)},indexOf(...t){return uc(this,"indexOf",t)},join(t){return ys(this).join(t)},lastIndexOf(...t){return uc(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return Bf(this,"reduce",t,e)},reduceRight(t,...e){return Bf(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return ys(this).toReversed()},toSorted(t){return ys(this).toSorted(t)},toSpliced(...t){return ys(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return cc(this,"values",wt)}};function cc(t,e,n){const r=ol(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const gT=Array.prototype;function Cn(t,e,n,r,s,i){const o=ol(t),l=o!==t&&!Xt(t),c=o[e];if(c!==gT[e]){const d=c.apply(t,i);return l?wt(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,wt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Bf(t,e,n,r){const s=ol(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,wt(l),c,t)}),s[e](i,...r)}function uc(t,e,n){const r=Ie(t);Tt(r,"iterate",Qi);const s=r[e](...n);return(s===-1||s===!1)&&$u(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Ei(t,e,n=[]){Cr(),Vu();const r=Ie(t)[e].apply(t,n);return Nu(),Pr(),r}const _T=Pu("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function yT(t){In(t)||(t=String(t));const e=Ie(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?CT:ug:i?cg:lg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=mT[n]))return c;if(n==="hasOwnProperty")return yT}const l=Reflect.get(e,n,Ke(e)?e:r);return(In(n)?ig.has(n):_T(n))||(s||Tt(e,"get",n),i)?l:Ke(l)?o&&Du(n)?l:l.value:xe(l)?s?fg(l):Qs(l):l}}class ag extends og{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jr(i);if(!Xt(r)&&!Jr(r)&&(i=Ie(i),r=Ie(r)),!ie(e)&&Ke(i)&&!Ke(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&Du(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ie(s)&&(o?mr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!In(n)||!ig.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ie(e)?"length":Gr),Reflect.ownKeys(e)}}class vT extends og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ET=new ag,TT=new vT,wT=new ag(!0),Lc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function IT(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Lc:e?Fc:wt;return!e&&Tt(i,"iterate",c?Mc:Gr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bT(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(mr(s,l)&&Tt(o,"get",s),Tt(o,"get",l));const{has:c}=Yo(o),u=e?Lc:t?Fc:wt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ie(s),"iterate",Gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(mr(s,l)&&Tt(o,"has",s),Tt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?Lc:t?Fc:wt;return!t&&Tt(c,"iterate",Gr),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return rt(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!Xt(s)&&!Jr(s)&&(s=Ie(s));const i=Ie(this);return Yo(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Jr(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=Yo(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?mr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=Yo(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Dn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=IT(s,t,e)}),n}function Fu(t,e){const n=bT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const AT={get:Fu(!1,!1)},RT={get:Fu(!1,!0)},ST={get:Fu(!0,!1)},lg=new WeakMap,cg=new WeakMap,ug=new WeakMap,CT=new WeakMap;function PT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kT(t){return t.__v_skip||!Object.isExtensible(t)?0:PT(ZE(t))}function Qs(t){return Jr(t)?t:Uu(t,!1,ET,AT,lg)}function hg(t){return Uu(t,!1,wT,RT,cg)}function fg(t){return Uu(t,!0,TT,ST,ug)}function Uu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=kT(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Ln(t){return Jr(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function $u(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function al(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Hm(t,"__v_skip",!0),t}const wt=t=>xe(t)?Qs(t):t,Fc=t=>xe(t)?fg(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Be(t){return dg(t,!1)}function OT(t){return dg(t,!0)}function dg(t,e){return Ke(t)?t:new DT(t,e)}class DT{constructor(e,n){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Jr(e);e=r?e:Ie(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function Fn(t){return Ke(t)?t.value:t}const xT={get:(t,e,n)=>e==="__v_raw"?t:Fn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pg(t){return Ln(t)?t:new Proxy(t,xT)}function VT(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=mg(t,n);return e}class NT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pT(Ie(this._object),this._key)}}class MT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function LT(t,e,n){return Ke(t)?t:de(t)?new MT(t):xe(t)&&arguments.length>1?mg(t,e,n):Be(t)}function mg(t,e,n){const r=t[e];return Ke(r)?r:new NT(t,e,n)}class FT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Zm(this,!0),!0}get value(){const e=this.dep.track();return ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function UT(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new FT(r,s,n)}const Xo={},ba=new WeakMap;let qr;function $T(t,e=!1,n=qr){if(n){let r=ba.get(n);r||ba.set(n,r=[]),r.push(t)}}function jT(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:Xt(D)||s===!1||s===0?xn(D,1):xn(D);let f,d,m,_,A=!1,O=!1;if(Ke(t)?(d=()=>t.value,A=Xt(t)):Ln(t)?(d=()=>u(t),A=!0):ie(t)?(O=!0,A=t.some(D=>Ln(D)||Xt(D)),d=()=>t.map(D=>{if(Ke(D))return D.value;if(Ln(D))return u(D);if(de(D))return c?c(D,2):D()})):de(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Cr();try{m()}finally{Pr()}}const D=qr;qr=f;try{return c?c(t,3,[_]):t(_)}finally{qr=D}}:d=yn,e&&s){const D=d,q=s===!0?1/0:s;d=()=>xn(D(),q)}const x=Ym(),H=()=>{f.stop(),x&&x.active&&Ou(x.effects,f)};if(i&&e){const D=e;e=(...q)=>{D(...q),H()}}let j=O?new Array(t.length).fill(Xo):Xo;const N=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const q=f.run();if(s||A||(O?q.some((te,R)=>mr(te,j[R])):mr(q,j))){m&&m();const te=qr;qr=f;try{const R=[q,j===Xo?void 0:O&&j[0]===Xo?[]:j,_];c?c(e,3,R):e(...R),j=q}finally{qr=te}}}else f.run()};return l&&l(N),f=new Jm(d),f.scheduler=o?()=>o(N,!1):N,_=D=>$T(D,!1,f),m=f.onStop=()=>{const D=ba.get(f);if(D){if(c)c(D,4);else for(const q of D)q();ba.delete(f)}},e?r?N(!0):j=f.run():o?o(N.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function xn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))xn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if(tl(t)||Ps(t))t.forEach(r=>{xn(r,e,n)});else if(qm(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(t,e,n,r){try{return r?t(...r):t()}catch(s){ll(s,e,n)}}function an(t,e,n,r){if(de(t)){const s=_o(t,e,n,r);return s&&jm(s)&&s.catch(i=>{ll(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function ll(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){Cr(),_o(i,null,10,[t,c,u]),Pr();return}}BT(t,n,s,r,o)}function BT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let mn=-1;const ks=[];let or=null,Es=0;const gg=Promise.resolve();let Aa=null;function yo(t){const e=Aa||gg;return t?e.then(this?t.bind(this):t):e}function qT(t){let e=mn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=Yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ju(t){if(!(t.flags&1)){const e=Yi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=Yi(n)?Pt.push(t):Pt.splice(qT(e),0,t),t.flags|=1,_g()}}function _g(){Aa||(Aa=gg.then(vg))}function HT(t){ie(t)?ks.push(...t):or&&t.id===-1?or.splice(Es+1,0,t):t.flags&1||(ks.push(t),t.flags|=1),_g()}function qf(t,e,n=mn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yg(t){if(ks.length){const e=[...new Set(ks)].sort((n,r)=>Yi(n)-Yi(r));if(ks.length=0,or){or.push(...e);return}for(or=e,Es=0;Es<or.length;Es++){const n=or[Es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}or=null,Es=0}}const Yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vg(t){try{for(mn=0;mn<Pt.length;mn++){const e=Pt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<Pt.length;mn++){const e=Pt[mn];e&&(e.flags&=-2)}mn=-1,Pt.length=0,yg(),Aa=null,(Pt.length||ks.length)&&vg()}}let kt=null,Eg=null;function Ra(t){const e=kt;return kt=t,Eg=t&&t.type.__scopeId||null,e}function We(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ed(-1);const i=Ra(e);let o;try{o=t(...s)}finally{Ra(i),r._d&&ed(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function je(t,e){if(kt===null)return t;const n=dl(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Cr(),an(c,n,8,[t.el,l,t,e]),Pr())}}const zT=Symbol("_vte"),Tg=t=>t.__isTeleport,ar=Symbol("_leaveCb"),Zo=Symbol("_enterCb");function wg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{t.isMounted=!0}),Og(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],Ig={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},bg=t=>{const e=t.subTree;return e.component?bg(e.component):e},WT={name:"BaseTransition",props:Ig,setup(t,{slots:e}){const n=t_(),r=wg();return()=>{const s=e.default&&Bu(e.default(),!0);if(!s||!s.length)return;const i=Ag(s),o=Ie(t),{mode:l}=o;if(r.isLeaving)return hc(i);const c=Hf(i);if(!c)return hc(i);let u=Ji(c,o,r,n,d=>u=d);c.type!==Nt&&Xr(c,u);let f=n.subTree&&Hf(n.subTree);if(f&&f.type!==Nt&&!zr(c,f)&&bg(n).type!==Nt){let d=Ji(f,o,r,n);if(Xr(f,d),l==="out-in"&&c.type!==Nt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},hc(i);l==="in-out"&&c.type!==Nt?d.delayLeave=(m,_,A)=>{const O=Rg(r,f);O[String(f.key)]=f,m[ar]=()=>{_(),m[ar]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Ag(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nt){e=n;break}}return e}const KT=WT;function Rg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ji(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:_,onAfterLeave:A,onLeaveCancelled:O,onBeforeAppear:x,onAppear:H,onAfterAppear:j,onAppearCancelled:N}=e,D=String(t.key),q=Rg(n,t),te=(y,w)=>{y&&an(y,r,9,w)},R=(y,w)=>{const S=w[1];te(y,w),ie(y)?y.every(b=>b.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:l,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=x||c;else return;y[ar]&&y[ar](!0);const S=q[D];S&&zr(t,S)&&S.el[ar]&&S.el[ar](),te(w,[y])},enter(y){let w=u,S=f,b=d;if(!n.isMounted)if(i)w=H||u,S=j||f,b=N||d;else return;let E=!1;const Ce=y[Zo]=Je=>{E||(E=!0,Je?te(b,[y]):te(S,[y]),v.delayedLeave&&v.delayedLeave(),y[Zo]=void 0)};w?R(w,[y,Ce]):Ce()},leave(y,w){const S=String(t.key);if(y[Zo]&&y[Zo](!0),n.isUnmounting)return w();te(m,[y]);let b=!1;const E=y[ar]=Ce=>{b||(b=!0,w(),Ce?te(O,[y]):te(A,[y]),y[ar]=void 0,q[S]===t&&delete q[S])};q[S]=t,_?R(_,[y,E]):E()},clone(y){const w=Ji(y,e,n,r,s);return s&&s(w),w}};return v}function hc(t){if(cl(t))return t=Tr(t),t.children=null,t}function Hf(t){if(!cl(t))return Tg(t.type)&&t.children?Ag(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Xr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&s++,r=r.concat(Bu(o.children,e,l))):(e||o.type!==Nt)&&r.push(l!=null?Tr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sg(t,e){return de(t)?rt({name:t.name},e,{setup:t}):t}function Cg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sa(t,e,n,r,s=!1){if(ie(t)){t.forEach((A,O)=>Sa(A,e&&(ie(e)?e[O]:e),n,r,s));return}if(Mi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?dl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,d=l.setupState,m=Ie(d),_=d===Ne?()=>!1:A=>ke(m,A);if(u!=null&&u!==c&&(Ye(u)?(f[u]=null,_(u)&&(d[u]=null)):Ke(u)&&(u.value=null)),de(c))_o(c,l,12,[o,f]);else{const A=Ye(c),O=Ke(c);if(A||O){const x=()=>{if(t.f){const H=A?_(c)?d[c]:f[c]:c.value;s?ie(H)&&Ou(H,i):ie(H)?H.includes(i)||H.push(i):A?(f[c]=[i],_(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else A?(f[c]=o,_(c)&&(d[c]=o)):O&&(c.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Ut(x,n)):x()}}}sl().requestIdleCallback;sl().cancelIdleCallback;const Mi=t=>!!t.type.__asyncLoader,cl=t=>t.type.__isKeepAlive;function GT(t,e){Pg(t,"a",e)}function QT(t,e){Pg(t,"da",e)}function Pg(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ul(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cl(s.parent.vnode)&&YT(r,e,n,s),s=s.parent}}function YT(t,e,n,r){const s=ul(e,t,r,!0);qu(()=>{Ou(r[e],s)},n)}function ul(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cr();const l=Eo(n),c=an(e,n,t,o);return l(),Pr(),c});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=ot)=>{(!eo||t==="sp")&&ul(t,(...r)=>e(...r),n)},JT=Wn("bm"),Kn=Wn("m"),XT=Wn("bu"),kg=Wn("u"),Og=Wn("bum"),qu=Wn("um"),ZT=Wn("sp"),ew=Wn("rtg"),tw=Wn("rtc");function nw(t,e=ot){ul("ec",t,e)}const Dg="components";function Ys(t,e){return Vg(Dg,t,!0,e)||t}const xg=Symbol.for("v-ndc");function rw(t){return Ye(t)?Vg(Dg,t,!1)||t:t||xg}function Vg(t,e,n=!0,r=!1){const s=kt||ot;if(s){const i=s.type;{const l=zw(i,!1);if(l&&(l===e||l===tn(e)||l===rl(tn(e))))return i}const o=zf(s[t]||i[t],e)||zf(s.appContext[t],e);return!o&&r?i:o}}function zf(t,e){return t&&(t[e]||t[tn(e)]||t[rl(tn(e))])}function Xi(t,e,n,r){let s;const i=n,o=ie(t);if(o||Ye(t)){const l=o&&Ln(t);let c=!1;l&&(c=!Xt(t),t=ol(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?wt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Uc=t=>t?n_(t)?dl(t):Uc(t.parent):null,Li=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uc(t.parent),$root:t=>Uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mg(t),$forceUpdate:t=>t.f||(t.f=()=>{ju(t.update)}),$nextTick:t=>t.n||(t.n=yo.bind(t.proxy)),$watch:t=>Aw.bind(t)}),fc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ke(t,e),sw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==Ne&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ne&&ke(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const f=Li[e];let d,m;if(f)return e==="$attrs"&&Tt(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==Ne&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&ke(t,o)||fc(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(Li,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wf(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $c=!0;function iw(t){const e=Mg(t),n=t.proxy,r=t.ctx;$c=!1,e.beforeCreate&&Kf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:_,updated:A,activated:O,deactivated:x,beforeDestroy:H,beforeUnmount:j,destroyed:N,unmounted:D,render:q,renderTracked:te,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:S,components:b,directives:E,filters:Ce}=e;if(u&&ow(u,r,null),o)for(const he in o){const Ee=o[he];de(Ee)&&(r[he]=Ee.bind(n))}if(s){const he=s.call(n,n);xe(he)&&(t.data=Qs(he))}if($c=!0,i)for(const he in i){const Ee=i[he],Lt=de(Ee)?Ee.bind(n,n):de(Ee.get)?Ee.get.bind(n,n):yn,nn=!de(Ee)&&de(Ee.set)?Ee.set.bind(n):yn,Wt=ft({get:Lt,set:nn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:He=>Wt.value=He})}if(l)for(const he in l)Ng(l[he],r,n,he);if(c){const he=de(c)?c.call(n):c;Reflect.ownKeys(he).forEach(Ee=>{aa(Ee,he[Ee])})}f&&Kf(f,t,"c");function De(he,Ee){ie(Ee)?Ee.forEach(Lt=>he(Lt.bind(n))):Ee&&he(Ee.bind(n))}if(De(JT,d),De(Kn,m),De(XT,_),De(kg,A),De(GT,O),De(QT,x),De(nw,v),De(tw,te),De(ew,R),De(Og,j),De(qu,D),De(ZT,y),ie(w))if(w.length){const he=t.exposed||(t.exposed={});w.forEach(Ee=>{Object.defineProperty(he,Ee,{get:()=>n[Ee],set:Lt=>n[Ee]=Lt})})}else t.exposed||(t.exposed={});q&&t.render===yn&&(t.render=q),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),E&&(t.directives=E),y&&Cg(t)}function ow(t,e,n=yn){ie(t)&&(t=jc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Kf(t,e,n){an(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ng(t,e,n,r){let s=r.includes(".")?Yg(n,r):()=>n[r];if(Ye(t)){const i=e[t];de(i)&&Yr(s,i)}else if(de(t))Yr(s,t.bind(n));else if(xe(t))if(ie(t))t.forEach(i=>Ng(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Yr(s,i,t)}}function Mg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ca(c,u,o,!0)),Ca(c,e,o)),xe(e)&&i.set(e,c),c}function Ca(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ca(t,i,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=aw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const aw={data:Gf,props:Qf,emits:Qf,methods:Ai,computed:Ai,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ai,directives:Ai,watch:cw,provide:Gf,inject:lw};function Gf(t,e){return e?t?function(){return rt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function lw(t,e){return Ai(jc(t),jc(e))}function jc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ai(t,e){return t?rt(Object.create(null),t,e):e}function Qf(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:rt(Object.create(null),Wf(t),Wf(e??{})):e}function cw(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Lg(){return{app:null,config:{isNativeTag:JE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uw=0;function hw(t,e){return function(r,s=null){de(r)||(r=rt({},r)),s!=null&&!xe(s)&&(s=null);const i=Lg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:uw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kw,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(u,...d)):de(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const _=u._ceVNode||ye(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,dl(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(an(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Qr;Qr=u;try{return f()}finally{Qr=d}}};return u}}let Qr=null;function aa(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=ot||kt;if(r||Qr){const s=Qr?Qr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function fw(){return!!(ot||kt||Qr)}const Fg={},Ug=()=>Object.create(Fg),$g=t=>Object.getPrototypeOf(t)===Fg;function dw(t,e,n,r=!1){const s={},i=Ug();t.propsDefaults=Object.create(null),jg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(hl(t.emitsOptions,m))continue;const _=e[m];if(c)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const A=tn(m);s[A]=Bc(c,l,A,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{jg(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!ke(e,d)&&((f=os(d))===d||!ke(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Bc(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!ke(e,d))&&(delete i[d],u=!0)}u&&Dn(t.attrs,"set","")}function jg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(xi(c))continue;const u=e[c];let f;s&&ke(s,f=tn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:hl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||Ne;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Bc(s,c,d,u[d],t,!ke(u,d))}}return o}function Bc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Eo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===os(n))&&(r=!0))}return r}const mw=new WeakMap;function Bg(t,e,n=!1){const r=n?mw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!de(t)){const f=d=>{c=!0;const[m,_]=Bg(d,e,!0);rt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return xe(t)&&r.set(t,Cs),Cs;if(ie(i))for(let f=0;f<i.length;f++){const d=tn(i[f]);Yf(d)&&(o[d]=Ne)}else if(i)for(const f in i){const d=tn(f);if(Yf(d)){const m=i[f],_=o[d]=ie(m)||de(m)?{type:m}:rt({},m),A=_.type;let O=!1,x=!0;if(ie(A))for(let H=0;H<A.length;++H){const j=A[H],N=de(j)&&j.name;if(N==="Boolean"){O=!0;break}else N==="String"&&(x=!1)}else O=de(A)&&A.name==="Boolean";_[0]=O,_[1]=x,(O||ke(_,"default"))&&l.push(d)}}const u=[o,l];return xe(t)&&r.set(t,u),u}function Yf(t){return t[0]!=="$"&&!xi(t)}const qg=t=>t[0]==="_"||t==="$stable",Hu=t=>ie(t)?t.map(_n):[_n(t)],gw=(t,e,n)=>{if(e._n)return e;const r=We((...s)=>Hu(e(...s)),n);return r._c=!1,r},Hg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qg(s))continue;const i=t[s];if(de(i))e[s]=gw(s,i,r);else if(i!=null){const o=Hu(i);e[s]=()=>o}}},zg=(t,e)=>{const n=Hu(e);t.slots.default=()=>n},Wg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},_w=(t,e,n)=>{const r=t.slots=Ug();if(t.vnode.shapeFlag&32){const s=e._;s?(Wg(r,e,n),n&&Hm(r,"_",s,!0)):Hg(e,r)}else e&&zg(t,e)},yw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Wg(s,e,n):(i=!e.$stable,Hg(e,s)),o=e}else e&&(zg(t,e),o={default:1});if(i)for(const l in s)!qg(l)&&o[l]==null&&delete s[l]},Ut=Dw;function vw(t){return Ew(t)}function Ew(t,e){const n=sl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:_=yn,insertStaticContent:A}=t,O=(T,I,P,L=null,B=null,U=null,Q=void 0,K=null,W=!!I.dynamicChildren)=>{if(T===I)return;T&&!zr(T,I)&&(L=M(T),He(T,B,U,!0),T=null),I.patchFlag===-2&&(W=!1,I.dynamicChildren=null);const{type:z,ref:oe,shapeFlag:J}=I;switch(z){case fl:x(T,I,P,L);break;case Nt:H(T,I,P,L);break;case la:T==null&&j(I,P,L,Q);break;case It:b(T,I,P,L,B,U,Q,K,W);break;default:J&1?q(T,I,P,L,B,U,Q,K,W):J&6?E(T,I,P,L,B,U,Q,K,W):(J&64||J&128)&&z.process(T,I,P,L,B,U,Q,K,W,ne)}oe!=null&&B&&Sa(oe,T&&T.ref,U,I||T,!I)},x=(T,I,P,L)=>{if(T==null)r(I.el=l(I.children),P,L);else{const B=I.el=T.el;I.children!==T.children&&u(B,I.children)}},H=(T,I,P,L)=>{T==null?r(I.el=c(I.children||""),P,L):I.el=T.el},j=(T,I,P,L)=>{[T.el,T.anchor]=A(T.children,I,P,L,T.el,T.anchor)},N=({el:T,anchor:I},P,L)=>{let B;for(;T&&T!==I;)B=m(T),r(T,P,L),T=B;r(I,P,L)},D=({el:T,anchor:I})=>{let P;for(;T&&T!==I;)P=m(T),s(T),T=P;s(I)},q=(T,I,P,L,B,U,Q,K,W)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),T==null?te(I,P,L,B,U,Q,K,W):y(T,I,B,U,Q,K,W)},te=(T,I,P,L,B,U,Q,K)=>{let W,z;const{props:oe,shapeFlag:J,transition:re,dirs:ue}=T;if(W=T.el=o(T.type,U,oe&&oe.is,oe),J&8?f(W,T.children):J&16&&v(T.children,W,null,L,B,dc(T,U),Q,K),ue&&Ur(T,null,L,"created"),R(W,T,T.scopeId,Q,L),oe){for(const ge in oe)ge!=="value"&&!xi(ge)&&i(W,ge,null,oe[ge],U,L);"value"in oe&&i(W,"value",null,oe.value,U),(z=oe.onVnodeBeforeMount)&&dn(z,L,T)}ue&&Ur(T,null,L,"beforeMount");const ae=Tw(B,re);ae&&re.beforeEnter(W),r(W,I,P),((z=oe&&oe.onVnodeMounted)||ae||ue)&&Ut(()=>{z&&dn(z,L,T),ae&&re.enter(W),ue&&Ur(T,null,L,"mounted")},B)},R=(T,I,P,L,B)=>{if(P&&_(T,P),L)for(let U=0;U<L.length;U++)_(T,L[U]);if(B){let U=B.subTree;if(I===U||Xg(U.type)&&(U.ssContent===I||U.ssFallback===I)){const Q=B.vnode;R(T,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},v=(T,I,P,L,B,U,Q,K,W=0)=>{for(let z=W;z<T.length;z++){const oe=T[z]=K?lr(T[z]):_n(T[z]);O(null,oe,I,P,L,B,U,Q,K)}},y=(T,I,P,L,B,U,Q)=>{const K=I.el=T.el;let{patchFlag:W,dynamicChildren:z,dirs:oe}=I;W|=T.patchFlag&16;const J=T.props||Ne,re=I.props||Ne;let ue;if(P&&$r(P,!1),(ue=re.onVnodeBeforeUpdate)&&dn(ue,P,I,T),oe&&Ur(I,T,P,"beforeUpdate"),P&&$r(P,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&f(K,""),z?w(T.dynamicChildren,z,K,P,L,dc(I,B),U):Q||Ee(T,I,K,null,P,L,dc(I,B),U,!1),W>0){if(W&16)S(K,J,re,P,B);else if(W&2&&J.class!==re.class&&i(K,"class",null,re.class,B),W&4&&i(K,"style",J.style,re.style,B),W&8){const ae=I.dynamicProps;for(let ge=0;ge<ae.length;ge++){const be=ae[ge],mt=J[be],lt=re[be];(lt!==mt||be==="value")&&i(K,be,mt,lt,B,P)}}W&1&&T.children!==I.children&&f(K,I.children)}else!Q&&z==null&&S(K,J,re,P,B);((ue=re.onVnodeUpdated)||oe)&&Ut(()=>{ue&&dn(ue,P,I,T),oe&&Ur(I,T,P,"updated")},L)},w=(T,I,P,L,B,U,Q)=>{for(let K=0;K<I.length;K++){const W=T[K],z=I[K],oe=W.el&&(W.type===It||!zr(W,z)||W.shapeFlag&70)?d(W.el):P;O(W,z,oe,null,L,B,U,Q,!0)}},S=(T,I,P,L,B)=>{if(I!==P){if(I!==Ne)for(const U in I)!xi(U)&&!(U in P)&&i(T,U,I[U],null,B,L);for(const U in P){if(xi(U))continue;const Q=P[U],K=I[U];Q!==K&&U!=="value"&&i(T,U,K,Q,B,L)}"value"in P&&i(T,"value",I.value,P.value,B)}},b=(T,I,P,L,B,U,Q,K,W)=>{const z=I.el=T?T.el:l(""),oe=I.anchor=T?T.anchor:l("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ue}=I;ue&&(K=K?K.concat(ue):ue),T==null?(r(z,P,L),r(oe,P,L),v(I.children||[],P,oe,B,U,Q,K,W)):J>0&&J&64&&re&&T.dynamicChildren?(w(T.dynamicChildren,re,P,B,U,Q,K),(I.key!=null||B&&I===B.subTree)&&Kg(T,I,!0)):Ee(T,I,P,oe,B,U,Q,K,W)},E=(T,I,P,L,B,U,Q,K,W)=>{I.slotScopeIds=K,T==null?I.shapeFlag&512?B.ctx.activate(I,P,L,Q,W):Ce(I,P,L,B,U,Q,W):Je(T,I,W)},Ce=(T,I,P,L,B,U,Q)=>{const K=T.component=$w(T,L,B);if(cl(T)&&(K.ctx.renderer=ne),jw(K,!1,Q),K.asyncDep){if(B&&B.registerDep(K,De,Q),!T.el){const W=K.subTree=ye(Nt);H(null,W,I,P)}}else De(K,T,I,P,B,U,Q)},Je=(T,I,P)=>{const L=I.component=T.component;if(kw(T,I,P))if(L.asyncDep&&!L.asyncResolved){he(L,I,P);return}else L.next=I,L.update();else I.el=T.el,L.vnode=I},De=(T,I,P,L,B,U,Q)=>{const K=()=>{if(T.isMounted){let{next:J,bu:re,u:ue,parent:ae,vnode:ge}=T;{const gt=Gg(T);if(gt){J&&(J.el=ge.el,he(T,J,Q)),gt.asyncDep.then(()=>{T.isUnmounted||K()});return}}let be=J,mt;$r(T,!1),J?(J.el=ge.el,he(T,J,Q)):J=ge,re&&oa(re),(mt=J.props&&J.props.onVnodeBeforeUpdate)&&dn(mt,ae,J,ge),$r(T,!0);const lt=Xf(T),Kt=T.subTree;T.subTree=lt,O(Kt,lt,d(Kt.el),M(Kt),T,B,U),J.el=lt.el,be===null&&Ow(T,lt.el),ue&&Ut(ue,B),(mt=J.props&&J.props.onVnodeUpdated)&&Ut(()=>dn(mt,ae,J,ge),B)}else{let J;const{el:re,props:ue}=I,{bm:ae,m:ge,parent:be,root:mt,type:lt}=T,Kt=Mi(I);$r(T,!1),ae&&oa(ae),!Kt&&(J=ue&&ue.onVnodeBeforeMount)&&dn(J,be,I),$r(T,!0);{mt.ce&&mt.ce._injectChildStyle(lt);const gt=T.subTree=Xf(T);O(null,gt,P,L,T,B,U),I.el=gt.el}if(ge&&Ut(ge,B),!Kt&&(J=ue&&ue.onVnodeMounted)){const gt=I;Ut(()=>dn(J,be,gt),B)}(I.shapeFlag&256||be&&Mi(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Ut(T.a,B),T.isMounted=!0,I=P=L=null}};T.scope.on();const W=T.effect=new Jm(K);T.scope.off();const z=T.update=W.run.bind(W),oe=T.job=W.runIfDirty.bind(W);oe.i=T,oe.id=T.uid,W.scheduler=()=>ju(oe),$r(T,!0),z()},he=(T,I,P)=>{I.component=T;const L=T.vnode.props;T.vnode=I,T.next=null,pw(T,I.props,L,P),yw(T,I.children,P),Cr(),qf(T),Pr()},Ee=(T,I,P,L,B,U,Q,K,W=!1)=>{const z=T&&T.children,oe=T?T.shapeFlag:0,J=I.children,{patchFlag:re,shapeFlag:ue}=I;if(re>0){if(re&128){nn(z,J,P,L,B,U,Q,K,W);return}else if(re&256){Lt(z,J,P,L,B,U,Q,K,W);return}}ue&8?(oe&16&&Dt(z,B,U),J!==z&&f(P,J)):oe&16?ue&16?nn(z,J,P,L,B,U,Q,K,W):Dt(z,B,U,!0):(oe&8&&f(P,""),ue&16&&v(J,P,L,B,U,Q,K,W))},Lt=(T,I,P,L,B,U,Q,K,W)=>{T=T||Cs,I=I||Cs;const z=T.length,oe=I.length,J=Math.min(z,oe);let re;for(re=0;re<J;re++){const ue=I[re]=W?lr(I[re]):_n(I[re]);O(T[re],ue,P,null,B,U,Q,K,W)}z>oe?Dt(T,B,U,!0,!1,J):v(I,P,L,B,U,Q,K,W,J)},nn=(T,I,P,L,B,U,Q,K,W)=>{let z=0;const oe=I.length;let J=T.length-1,re=oe-1;for(;z<=J&&z<=re;){const ue=T[z],ae=I[z]=W?lr(I[z]):_n(I[z]);if(zr(ue,ae))O(ue,ae,P,null,B,U,Q,K,W);else break;z++}for(;z<=J&&z<=re;){const ue=T[J],ae=I[re]=W?lr(I[re]):_n(I[re]);if(zr(ue,ae))O(ue,ae,P,null,B,U,Q,K,W);else break;J--,re--}if(z>J){if(z<=re){const ue=re+1,ae=ue<oe?I[ue].el:L;for(;z<=re;)O(null,I[z]=W?lr(I[z]):_n(I[z]),P,ae,B,U,Q,K,W),z++}}else if(z>re)for(;z<=J;)He(T[z],B,U,!0),z++;else{const ue=z,ae=z,ge=new Map;for(z=ae;z<=re;z++){const ct=I[z]=W?lr(I[z]):_n(I[z]);ct.key!=null&&ge.set(ct.key,z)}let be,mt=0;const lt=re-ae+1;let Kt=!1,gt=0;const Jn=new Array(lt);for(z=0;z<lt;z++)Jn[z]=0;for(z=ue;z<=J;z++){const ct=T[z];if(mt>=lt){He(ct,B,U,!0);continue}let Gt;if(ct.key!=null)Gt=ge.get(ct.key);else for(be=ae;be<=re;be++)if(Jn[be-ae]===0&&zr(ct,I[be])){Gt=be;break}Gt===void 0?He(ct,B,U,!0):(Jn[Gt-ae]=z+1,Gt>=gt?gt=Gt:Kt=!0,O(ct,I[Gt],P,null,B,U,Q,K,W),mt++)}const ai=Kt?ww(Jn):Cs;for(be=ai.length-1,z=lt-1;z>=0;z--){const ct=ae+z,Gt=I[ct],Vo=ct+1<oe?I[ct+1].el:L;Jn[z]===0?O(null,Gt,P,Vo,B,U,Q,K,W):Kt&&(be<0||z!==ai[be]?Wt(Gt,P,Vo,2):be--)}}},Wt=(T,I,P,L,B=null)=>{const{el:U,type:Q,transition:K,children:W,shapeFlag:z}=T;if(z&6){Wt(T.component.subTree,I,P,L);return}if(z&128){T.suspense.move(I,P,L);return}if(z&64){Q.move(T,I,P,ne);return}if(Q===It){r(U,I,P);for(let J=0;J<W.length;J++)Wt(W[J],I,P,L);r(T.anchor,I,P);return}if(Q===la){N(T,I,P);return}if(L!==2&&z&1&&K)if(L===0)K.beforeEnter(U),r(U,I,P),Ut(()=>K.enter(U),B);else{const{leave:J,delayLeave:re,afterLeave:ue}=K,ae=()=>r(U,I,P),ge=()=>{J(U,()=>{ae(),ue&&ue()})};re?re(U,ae,ge):ge()}else r(U,I,P)},He=(T,I,P,L=!1,B=!1)=>{const{type:U,props:Q,ref:K,children:W,dynamicChildren:z,shapeFlag:oe,patchFlag:J,dirs:re,cacheIndex:ue}=T;if(J===-2&&(B=!1),K!=null&&Sa(K,null,P,T,!0),ue!=null&&(I.renderCache[ue]=void 0),oe&256){I.ctx.deactivate(T);return}const ae=oe&1&&re,ge=!Mi(T);let be;if(ge&&(be=Q&&Q.onVnodeBeforeUnmount)&&dn(be,I,T),oe&6)fn(T.component,P,L);else{if(oe&128){T.suspense.unmount(P,L);return}ae&&Ur(T,null,I,"beforeUnmount"),oe&64?T.type.remove(T,I,P,ne,L):z&&!z.hasOnce&&(U!==It||J>0&&J&64)?Dt(z,I,P,!1,!0):(U===It&&J&384||!B&&oe&16)&&Dt(W,I,P),L&&ze(T)}(ge&&(be=Q&&Q.onVnodeUnmounted)||ae)&&Ut(()=>{be&&dn(be,I,T),ae&&Ur(T,null,I,"unmounted")},P)},ze=T=>{const{type:I,el:P,anchor:L,transition:B}=T;if(I===It){Yn(P,L);return}if(I===la){D(T);return}const U=()=>{s(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:K}=B,W=()=>Q(P,U);K?K(T.el,U,W):W()}else U()},Yn=(T,I)=>{let P;for(;T!==I;)P=m(T),s(T),T=P;s(I)},fn=(T,I,P)=>{const{bum:L,scope:B,job:U,subTree:Q,um:K,m:W,a:z}=T;Jf(W),Jf(z),L&&oa(L),B.stop(),U&&(U.flags|=8,He(Q,T,I,P)),K&&Ut(K,I),Ut(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Dt=(T,I,P,L=!1,B=!1,U=0)=>{for(let Q=U;Q<T.length;Q++)He(T[Q],I,P,L,B)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=m(T.anchor||T.el),P=I&&I[zT];return P?m(P):I};let X=!1;const Y=(T,I,P)=>{T==null?I._vnode&&He(I._vnode,null,null,!0):O(I._vnode||null,T,I,null,null,null,P),I._vnode=T,X||(X=!0,qf(),yg(),X=!1)},ne={p:O,um:He,m:Wt,r:ze,mt:Ce,mc:v,pc:Ee,pbc:w,n:M,o:t};return{render:Y,hydrate:void 0,createApp:hw(Y)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Tw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kg(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=lr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Kg(o,l)),l.type===fl&&(l.el=o.el)}}function ww(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gg(e)}function Jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Iw=Symbol.for("v-scx"),bw=()=>Zt(Iw);function Yr(t,e,n){return Qg(t,e,n)}function Qg(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if(eo){if(i==="sync"){const _=bw();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=yn,_.resume=yn,_.pause=yn,_}}const f=ot;l.call=(_,A,O)=>an(_,f,A,O);let d=!1;i==="post"?l.scheduler=_=>{Ut(_,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(_,A)=>{A?_():ju(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=jT(t,e,l);return eo&&(u?u.push(m):c&&m()),m}function Aw(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Yg(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Eo(this),l=Qg(s,i.bind(r),n);return o(),l}function Yg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Rw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${os(e)}Modifiers`];function Sw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Rw(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ye(f)?f.trim():f)),o.number&&(s=n.map(wa)));let l,c=r[l=oc(e)]||r[l=oc(tn(e))];!c&&i&&(c=r[l=oc(os(e))]),c&&an(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,an(u,t,6,s)}}function Jg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!de(t)){const c=u=>{const f=Jg(u,e,!0);f&&(l=!0,rt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):rt(o,i),xe(t)&&r.set(t,o),o)}function hl(t,e){return!t||!el(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,os(e))||ke(t,e))}function Xf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:_,ctx:A,inheritAttrs:O}=t,x=Ra(t);let H,j;try{if(n.shapeFlag&4){const D=s||r,q=D;H=_n(u.call(q,D,f,d,_,m,A)),j=l}else{const D=e;H=_n(D.length>1?D(d,{attrs:l,slots:o,emit:c}):D(d,null)),j=e.props?l:Cw(l)}}catch(D){Fi.length=0,ll(D,t,1),H=ye(Nt)}let N=H;if(j&&O!==!1){const D=Object.keys(j),{shapeFlag:q}=N;D.length&&q&7&&(i&&D.some(ku)&&(j=Pw(j,i)),N=Tr(N,j,!1,!0))}return n.dirs&&(N=Tr(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Xr(N,n.transition),H=N,Ra(x),H}const Cw=t=>{let e;for(const n in t)(n==="class"||n==="style"||el(n))&&((e||(e={}))[n]=t[n]);return e},Pw=(t,e)=>{const n={};for(const r in t)(!ku(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!hl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Zf(r,o,u):!0:!!o;return!1}function Zf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hl(n,i))return!0}return!1}function Ow({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xg=t=>t.__isSuspense;function Dw(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):HT(t)}const It=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),Fi=[];let Bt=null;function me(t=!1){Fi.push(Bt=t?null:[])}function xw(){Fi.pop(),Bt=Fi[Fi.length-1]||null}let Zi=1;function ed(t,e=!1){Zi+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Zg(t){return t.dynamicChildren=Zi>0?Bt||Cs:null,xw(),Zi>0&&Bt&&Bt.push(t),t}function ve(t,e,n,r,s,i){return Zg(C(t,e,n,r,s,i,!0))}function vo(t,e,n,r,s){return Zg(ye(t,e,n,r,s,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function zr(t,e){return t.type===e.type&&t.key===e.key}const e_=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Ke(t)||de(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&e_(e),ref:e&&ca(e),scopeId:Eg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return l?(zu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Zi>0&&!o&&Bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bt.push(c),c}const ye=Vw;function Vw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xg)&&(t=Nt),Pa(t)){const l=Tr(t,e,!0);return n&&zu(l,n),Zi>0&&!i&&Bt&&(l.shapeFlag&6?Bt[Bt.indexOf(t)]=l:Bt.push(l)),l.patchFlag=-2,l}if(Ww(t)&&(t=t.__vccOpts),e){e=Nw(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=Vt(l)),xe(c)&&($u(c)&&!ie(c)&&(c=rt({},c)),e.style=xu(c))}const o=Ye(t)?1:Xg(t)?128:Tg(t)?64:xe(t)?4:de(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Nw(t){return t?$u(t)||$g(t)?rt({},t):t:null}function Tr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Lw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&e_(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tr(t.ssContent),ssFallback:t.ssFallback&&Tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Xr(f,c.clone(f)),f}function Me(t=" ",e=0){return ye(fl,null,t,e)}function Mw(t,e){const n=ye(la,null,t);return n.staticCount=e,n}function Jt(t="",e=!1){return e?(me(),vo(Nt,null,t)):ye(Nt,null,t)}function _n(t){return t==null||typeof t=="boolean"?ye(Nt):ie(t)?ye(It,null,t.slice()):Pa(t)?lr(t):ye(fl,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tr(t)}function zu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$g(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vt([e.class,r.class]));else if(s==="style")e.style=xu([e.style,r.style]);else if(el(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){an(t,e,7,[n,r])}const Fw=Lg();let Uw=0;function $w(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fw,i={uid:Uw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bg(r,s),emitsOptions:Jg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sw.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const t_=()=>ot||kt;let ka,qc;{const t=sl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),qc=e("__VUE_SSR_SETTERS__",n=>eo=n)}const Eo=t=>{const e=ot;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},td=()=>{ot&&ot.scope.off(),ka(null)};function n_(t){return t.vnode.shapeFlag&4}let eo=!1;function jw(t,e=!1,n=!1){e&&qc(e);const{props:r,children:s}=t.vnode,i=n_(t);dw(t,r,i,e),_w(t,s,n);const o=i?Bw(t,e):void 0;return e&&qc(!1),o}function Bw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sw);const{setup:r}=n;if(r){Cr();const s=t.setupContext=r.length>1?Hw(t):null,i=Eo(t),o=_o(r,t,0,[t.props,s]),l=jm(o);if(Pr(),i(),(l||t.sp)&&!Mi(t)&&Cg(t),l){if(o.then(td,td),e)return o.then(c=>{nd(t,c)}).catch(c=>{ll(c,t,0)});t.asyncDep=o}else nd(t,o)}else r_(t)}function nd(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=pg(e)),r_(t)}function r_(t,e,n){const r=t.type;t.render||(t.render=r.render||yn);{const s=Eo(t);Cr();try{iw(t)}finally{Pr(),s()}}}const qw={get(t,e){return Tt(t,"get",""),t[e]}};function Hw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qw),slots:t.slots,emit:t.emit,expose:e}}function dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pg(al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}})):t.proxy}function zw(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Ww(t){return de(t)&&"__vccOpts"in t}const ft=(t,e)=>UT(t,e,eo);function Wu(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ie(e)?Pa(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pa(n)&&(n=[n]),ye(t,e,n))}const Kw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hc;const rd=typeof window<"u"&&window.trustedTypes;if(rd)try{Hc=rd.createPolicy("vue",{createHTML:t=>t})}catch{}const s_=Hc?t=>Hc.createHTML(t):t=>t,Gw="http://www.w3.org/2000/svg",Qw="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,sd=kn&&kn.createElement("template"),Yw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(Gw,t):e==="mathml"?kn.createElementNS(Qw,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{sd.innerHTML=s_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=sd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",Ti="animation",Ms=Symbol("_vtc"),i_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},o_=rt({},Ig,i_),Jw=t=>(t.displayName="Transition",t.props=o_,t),jn=Jw((t,{slots:e})=>Wu(KT,a_(t),e)),jr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},id=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function a_(t){const e={};for(const b in t)b in i_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,A=Xw(s),O=A&&A[0],x=A&&A[1],{onBeforeEnter:H,onEnter:j,onEnterCancelled:N,onLeave:D,onLeaveCancelled:q,onBeforeAppear:te=H,onAppear:R=j,onAppearCancelled:v=N}=e,y=(b,E,Ce,Je)=>{b._enterCancelled=Je,sr(b,E?f:l),sr(b,E?u:o),Ce&&Ce()},w=(b,E)=>{b._isLeaving=!1,sr(b,d),sr(b,_),sr(b,m),E&&E()},S=b=>(E,Ce)=>{const Je=b?R:j,De=()=>y(E,b,Ce);jr(Je,[E,De]),od(()=>{sr(E,b?c:i),pn(E,b?f:l),id(Je)||ad(E,r,O,De)})};return rt(e,{onBeforeEnter(b){jr(H,[b]),pn(b,i),pn(b,o)},onBeforeAppear(b){jr(te,[b]),pn(b,c),pn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,E){b._isLeaving=!0;const Ce=()=>w(b,E);pn(b,d),b._enterCancelled?(pn(b,m),zc()):(zc(),pn(b,m)),od(()=>{b._isLeaving&&(sr(b,d),pn(b,_),id(D)||ad(b,r,x,Ce))}),jr(D,[b,Ce])},onEnterCancelled(b){y(b,!1,void 0,!0),jr(N,[b])},onAppearCancelled(b){y(b,!0,void 0,!0),jr(v,[b])},onLeaveCancelled(b){w(b),jr(q,[b])}})}function Xw(t){if(t==null)return null;if(xe(t))return[pc(t.enter),pc(t.leave)];{const e=pc(t);return[e,e]}}function pc(t){return nT(t)}function pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ms]||(t[Ms]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ms];n&&(n.delete(e),n.size||(t[Ms]=void 0))}function od(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zw=0;function ad(t,e,n,r){const s=t._endId=++Zw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=l_(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function l_(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=ld(s,i),l=r(`${Ti}Delay`),c=r(`${Ti}Duration`),u=ld(l,c);let f=null,d=0,m=0;e===tr?o>0&&(f=tr,d=o,m=i.length):e===Ti?u>0&&(f=Ti,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?tr:Ti:null,m=f?f===tr?i.length:c.length:0);const _=f===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:_}}function ld(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>cd(n)+cd(t[r])))}function cd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zc(){return document.body.offsetHeight}function eI(t,e,n){const r=t[Ms];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oa=Symbol("_vod"),c_=Symbol("_vsh"),Vn={beforeMount(t,{value:e},{transition:n}){t[Oa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wi(t,!0),r.enter(t)):r.leave(t,()=>{wi(t,!1)}):wi(t,e))},beforeUnmount(t,{value:e}){wi(t,e)}};function wi(t,e){t.style.display=e?t[Oa]:"none",t[c_]=!e}const tI=Symbol(""),nI=/(^|;)\s*display\s*:/;function rI(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ua(r,l,"")}else for(const o in e)n[o]==null&&ua(r,o,"");for(const o in n)o==="display"&&(i=!0),ua(r,o,n[o])}else if(s){if(e!==n){const o=r[tI];o&&(n+=";"+o),r.cssText=n,i=nI.test(n)}}else e&&t.removeAttribute("style");Oa in t&&(t[Oa]=i?r.display:"",t[c_]&&(r.display="none"))}const ud=/\s*!important$/;function ua(t,e,n){if(ie(n))n.forEach(r=>ua(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sI(t,e);ud.test(n)?t.setProperty(os(r),n.replace(ud,""),"important"):t[r]=n}}const hd=["Webkit","Moz","ms"],mc={};function sI(t,e){const n=mc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return mc[e]=r;r=rl(r);for(let s=0;s<hd.length;s++){const i=hd[s]+r;if(i in t)return mc[e]=i}return e}const fd="http://www.w3.org/1999/xlink";function dd(t,e,n,r,s,i=lT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(fd,e.slice(6,e.length)):t.setAttributeNS(fd,e,n):n==null||i&&!zm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function pd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?s_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Wr(t,e,n,r){t.addEventListener(e,n,r)}function iI(t,e,n,r){t.removeEventListener(e,n,r)}const md=Symbol("_vei");function oI(t,e,n,r,s=null){const i=t[md]||(t[md]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=aI(e);if(r){const u=i[e]=uI(r,s);Wr(t,l,u,c)}else o&&(iI(t,l,o,c),i[e]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function aI(t){let e;if(gd.test(t)){e={};let r;for(;r=t.match(gd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let gc=0;const lI=Promise.resolve(),cI=()=>gc||(lI.then(()=>gc=0),gc=Date.now());function uI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(hI(r,n.value),e,5,[r])};return n.value=t,n.attached=cI(),n}function hI(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?eI(t,r,o):e==="style"?rI(t,n,r):el(e)?ku(e)||oI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dI(t,e,r,o))?(pd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?pd(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dd(t,e,r,o))};function dI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_d(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _d(e)&&Ye(n)?!1:e in t}const u_=new WeakMap,h_=new WeakMap,Da=Symbol("_moveCb"),yd=Symbol("_enterCb"),pI=t=>(delete t.props.mode,t),mI=pI({name:"TransitionGroup",props:rt({},o_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=t_(),r=wg();let s,i;return kg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!EI(s[0].el,n.vnode.el,o))return;s.forEach(_I),s.forEach(yI);const l=s.filter(vI);zc(),l.forEach(c=>{const u=c.el,f=u.style;pn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const d=u[Da]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",d),u[Da]=null,sr(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=Ie(t),l=a_(o);let c=o.tag||It;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Xr(f,Ji(f,l,r,n)),u_.set(f,f.el.getBoundingClientRect()))}i=e.default?Bu(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Xr(f,Ji(f,l,r,n))}return ye(c,null,i)}}}),gI=mI;function _I(t){const e=t.el;e[Da]&&e[Da](),e[yd]&&e[yd]()}function yI(t){h_.set(t,t.el.getBoundingClientRect())}function vI(t){const e=u_.get(t),n=h_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function EI(t,e,n){const r=t.cloneNode(),s=t[Ms];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=l_(r);return i.removeChild(r),o}const xa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>oa(e,n):e};function TI(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),jt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Os]=xa(s);const i=r||s.props&&s.props.type==="number";Wr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=wa(l)),t[Os](l)}),n&&Wr(t,"change",()=>{t.value=t.value.trim()}),e||(Wr(t,"compositionstart",TI),Wr(t,"compositionend",vd),Wr(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Os]=xa(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?wa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Wc={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=tl(e);Wr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wa(Va(o)):Va(o));t[Os](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,yo(()=>{t._assigning=!1})}),t[Os]=xa(r)},mounted(t,{value:e}){Ed(t,e)},beforeUpdate(t,e,n){t[Os]=xa(n)},updated(t,{value:e}){t._assigning||Ed(t,e)}};function Ed(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!tl(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Va(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=uT(e,l)>-1}else o.selected=e.has(l);else if(il(Va(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Va(t){return"_value"in t?t._value:t.value}const wI=["ctrl","shift","alt","meta"],II={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wI.some(n=>t[`${n}Key`]&&!e.includes(n))},$t=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=II[e[o]];if(l&&l(s,e))return}return t(s,...i)})},bI=rt({patchProp:fI},Yw);let Td;function AI(){return Td||(Td=vw(bI))}const RI=(...t)=>{const e=AI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=CI(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,SI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function SI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function CI(t){return Ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let f_;const pl=t=>f_=t,d_=Symbol();function Kc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ui||(Ui={}));function PI(){const t=Qm(!0),e=t.run(()=>Be({}));let n=[],r=[];const s=al({install(i){pl(s),s._a=i,i.provide(d_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const p_=()=>{};function wd(t,e,n,r=p_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ym()&&hT(s),s}function vs(t,...e){t.slice().forEach(n=>{n(...e)})}const kI=t=>t(),Id=Symbol(),_c=Symbol();function Gc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kc(s)&&Kc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Ln(r)?t[n]=Gc(s,r):t[n]=r}return t}const OI=Symbol();function DI(t){return!Kc(t)||!Object.prototype.hasOwnProperty.call(t,OI)}const{assign:ir}=Object;function xI(t){return!!(Ke(t)&&t.effect)}function VI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=VT(n.state.value[t]);return ir(f,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=al(ft(()=>{pl(n);const _=n._s.get(t);return o[m].call(_,_)})),d),{}))}return c=m_(t,u,e,n,r,!0),c}function m_(t,e,n={},r,s,i){let o;const l=ir({actions:{}},n),c={deep:!0};let u,f,d=[],m=[],_;const A=r.state.value[t];!i&&!A&&(r.state.value[t]={}),Be({});let O;function x(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Ui.patchFunction,storeId:t,events:_}):(Gc(r.state.value[t],v),y={type:Ui.patchObject,payload:v,storeId:t,events:_});const w=O=Symbol();yo().then(()=>{O===w&&(u=!0)}),f=!0,vs(d,y,r.state.value[t])}const H=i?function(){const{state:y}=n,w=y?y():{};this.$patch(S=>{ir(S,w)})}:p_;function j(){o.stop(),d=[],m=[],r._s.delete(t)}const N=(v,y="")=>{if(Id in v)return v[_c]=y,v;const w=function(){pl(r);const S=Array.from(arguments),b=[],E=[];function Ce(he){b.push(he)}function Je(he){E.push(he)}vs(m,{args:S,name:w[_c],store:q,after:Ce,onError:Je});let De;try{De=v.apply(this&&this.$id===t?this:q,S)}catch(he){throw vs(E,he),he}return De instanceof Promise?De.then(he=>(vs(b,he),he)).catch(he=>(vs(E,he),Promise.reject(he))):(vs(b,De),De)};return w[Id]=!0,w[_c]=y,w},D={_p:r,$id:t,$onAction:wd.bind(null,m),$patch:x,$reset:H,$subscribe(v,y={}){const w=wd(d,v,y.detached,()=>S()),S=o.run(()=>Yr(()=>r.state.value[t],b=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:Ui.direct,events:_},b)},ir({},c,y)));return w},$dispose:j},q=Qs(D);r._s.set(t,q);const R=(r._a&&r._a.runWithContext||kI)(()=>r._e.run(()=>(o=Qm()).run(()=>e({action:N}))));for(const v in R){const y=R[v];if(Ke(y)&&!xI(y)||Ln(y))i||(A&&DI(y)&&(Ke(y)?y.value=A[v]:Gc(y,A[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const w=N(y,v);R[v]=w,l.actions[v]=y}}return ir(q,R),ir(Ie(q),R),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:v=>{x(y=>{ir(y,v)})}}),r._p.forEach(v=>{ir(q,o.run(()=>v({store:q,app:r._a,pinia:r,options:l})))}),A&&i&&n.hydrate&&n.hydrate(q.$state,A),u=!0,f=!0,q}/*! #__NO_SIDE_EFFECTS__ */function g_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=fw();return o=o||(c?Zt(d_,null):null),o&&pl(o),o=f_,o._s.has(t)||(s?m_(t,e,r,o):VI(t,r,o)),o._s.get(t)}return i.$id=t,i}function __(t){const e=Ie(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=ft({get:()=>t[r],set(i){t[r]=i}}):(Ke(s)||Ln(s))&&(n[r]=LT(t,r))}return n}const kr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},NI={name:"App",components:{}};function MI(t,e,n,r,s,i){const o=Ys("router-view");return me(),vo(o)}const LI=kr(NI,[["render",MI]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function FI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const Pe=Object.assign;function yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const $i=()=>{},ln=Array.isArray,v_=/#/g,UI=/&/g,$I=/\//g,jI=/=/g,BI=/\?/g,E_=/\+/g,qI=/%5B/g,HI=/%5D/g,T_=/%5E/g,zI=/%60/g,w_=/%7B/g,WI=/%7C/g,I_=/%7D/g,KI=/%20/g;function Ku(t){return encodeURI(""+t).replace(WI,"|").replace(qI,"[").replace(HI,"]")}function GI(t){return Ku(t).replace(w_,"{").replace(I_,"}").replace(T_,"^")}function Qc(t){return Ku(t).replace(E_,"%2B").replace(KI,"+").replace(v_,"%23").replace(UI,"%26").replace(zI,"`").replace(w_,"{").replace(I_,"}").replace(T_,"^")}function QI(t){return Qc(t).replace(jI,"%3D")}function YI(t){return Ku(t).replace(v_,"%23").replace(BI,"%3F")}function JI(t){return t==null?"":YI(t).replace($I,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const XI=/\/$/,ZI=t=>t.replace(XI,"");function vc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function eb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ls(e.matched[r],n.matched[s])&&b_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function b_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nb(t[n],e[n]))return!1;return!0}function nb(t,e){return ln(t)?Ad(t,e):ln(e)?Ad(e,t):t===e}function Ad(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ji||(ji={}));function sb(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZI(t)}const ib=/^[^#]+#/;function ob(t,e){return t.replace(ib,"#")+e}function ab(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ml=()=>({left:window.scrollX,top:window.scrollY});function lb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ab(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Rd(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function cb(t,e){Yc.set(t,e)}function ub(t){const e=Yc.get(t);return Yc.delete(t),e}let hb=()=>location.protocol+"//"+location.host;function A_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),bd(c,"")}return bd(n,t)+r+s}function fb(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=A_(t,location),A=n.value,O=e.value;let x=0;if(m){if(n.value=_,e.value=m,o&&o===A){o=null;return}x=O?m.position-O.position:0}else r(_);s.forEach(H=>{H(n.value,A,{delta:x,type:no.pop,direction:x?x>0?ji.forward:ji.back:ji.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:ml()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Sd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ml():null}}function db(t){const{history:e,location:n}=window,r={value:A_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:hb()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){const f=Pe({},e.state,Sd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Pe({},s.value,e.state,{forward:c,scroll:ml()});i(f.current,f,!0);const d=Pe({},Sd(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pb(t){t=sb(t);const e=db(t),n=fb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:ob.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mb(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}const S_=Symbol("");var Cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cd||(Cd={}));function Fs(t,e){return Pe(new Error,{type:t,[S_]:!0},e)}function Pn(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const Pd="[^/]+?",gb={sensitive:!1,strict:!1,start:!0,end:!0},_b=/[.+*?^${}()[\]/\\]/g;function yb(t,e){const n=Pe({},gb,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(_b,"\\$&"),_+=40;else if(m.type===1){const{value:A,repeatable:O,optional:x,regexp:H}=m;i.push({name:A,repeatable:O,optional:x});const j=H||Pd;if(j!==Pd){_+=10;try{new RegExp(`(${j})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${j}): `+D.message)}}let N=O?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;d||(N=x&&u.length<2?`(?:/${N})`:"/"+N),x&&(N+="?"),s+=N,_+=20,x&&(_+=-8),O&&(_+=-20),j===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",A=i[m-1];d[A.name]=_&&A.repeatable?_.split("/"):_}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:A,repeatable:O,optional:x}=_,H=A in u?u[A]:"";if(ln(H)&&!O)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const j=ln(H)?H.join("/"):H;if(!j)if(x)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=j}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function C_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(kd(r))return 1;if(kd(s))return-1}return s.length-r.length}function kd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Eb={type:0,value:""},Tb=/[a-zA-Z0-9_]/;function wb(t){if(!t)return[[]];if(t==="/")return[[Eb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Tb.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function Ib(t,e,n){const r=yb(wb(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bb(t,e){const n=[],r=new Map;e=Vd({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,_){const A=!_,O=Dd(d);O.aliasOf=_&&_.record;const x=Vd(e,d),H=[O];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of D)H.push(Dd(Pe({},O,{components:_?_.record.components:O.components,path:q,aliasOf:_?_.record:O})))}let j,N;for(const D of H){const{path:q}=D;if(m&&q[0]!=="/"){const te=m.record.path,R=te[te.length-1]==="/"?"":"/";D.path=m.record.path+(q&&R+q)}if(j=Ib(D,m,x),_?_.alias.push(j):(N=N||j,N!==j&&N.alias.push(j),A&&d.name&&!xd(j)&&o(d.name)),P_(j)&&c(j),O.children){const te=O.children;for(let R=0;R<te.length;R++)i(te[R],j,_&&_.children[R])}_=_||j}return N?()=>{o(N)}:$i}function o(d){if(R_(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=Sb(d,n);n.splice(m,0,d),d.record.name&&!xd(d)&&r.set(d.record.name,d)}function u(d,m){let _,A={},O,x;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw Fs(1,{location:d});x=_.record.name,A=Pe(Od(m.params,_.keys.filter(N=>!N.optional).concat(_.parent?_.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&Od(d.params,_.keys.map(N=>N.name))),O=_.stringify(A)}else if(d.path!=null)O=d.path,_=n.find(N=>N.re.test(O)),_&&(A=_.parse(O),x=_.record.name);else{if(_=m.name?r.get(m.name):n.find(N=>N.re.test(m.path)),!_)throw Fs(1,{location:d,currentLocation:m});x=_.record.name,A=Pe({},m.params,d.params),O=_.stringify(A)}const H=[];let j=_;for(;j;)H.unshift(j.record),j=j.parent;return{name:x,path:O,params:A,matched:H,meta:Rb(H)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Dd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ab(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ab(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rb(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Vd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;C_(t,e[i])<0?r=i:n=i+1}const s=Cb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cb(t){let e=t;for(;e=e.parent;)if(P_(e)&&C_(t,e)===0)return e}function P_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Pb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(E_," "),o=i.indexOf("="),l=to(o<0?i:i.slice(0,o)),c=o<0?null:to(i.slice(o+1));if(l in e){let u=e[l];ln(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Nd(t){let e="";for(let n in t){const r=t[n];if(n=QI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(i=>i&&Qc(i)):[r&&Qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ob=Symbol(""),Md=Symbol(""),gl=Symbol(""),Gu=Symbol(""),Jc=Symbol("");function Ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Fs(4,{from:n,to:e})):m instanceof Error?c(m):mb(m)?c(Fs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Ec(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(y_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(cr(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=FI(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const _=(d.__vccOpts||d)[e];return _&&cr(_,n,r,o,l,s)()}))}}return i}function Ld(t){const e=Zt(gl),n=Zt(Gu),r=ft(()=>{const c=Fn(t.to);return e.resolve(c)}),s=ft(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Ls.bind(null,f));if(m>-1)return m;const _=Fd(c[u-2]);return u>1&&Fd(f)===_&&d[d.length-1].path!==_?d.findIndex(Ls.bind(null,c[u-2])):m}),i=ft(()=>s.value>-1&&Nb(n.params,r.value.params)),o=ft(()=>s.value>-1&&s.value===n.matched.length-1&&b_(n.params,r.value.params));function l(c={}){if(Vb(c)){const u=e[Fn(t.replace)?"replace":"push"](Fn(t.to)).catch($i);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Db(t){return t.length===1?t[0]:t}const xb=Sg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ld,setup(t,{slots:e}){const n=Qs(Ld(t)),{options:r}=Zt(gl),s=ft(()=>({[Ud(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ud(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Db(e.default(n));return t.custom?i:Wu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k_=xb;function Vb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ud=(t,e,n)=>t??e??n,Mb=Sg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Jc),s=ft(()=>t.route||r.value),i=Zt(Md,0),o=ft(()=>{let u=Fn(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=ft(()=>s.value.matched[o.value]);aa(Md,ft(()=>o.value+1)),aa(Ob,l),aa(Jc,s);const c=Be();return Yr(()=>[c.value,l.value,t.name],([u,f,d],[m,_,A])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ls(f,_)||!m)&&(f.enterCallbacks[d]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return $d(n.default,{Component:m,route:u});const _=d.props[f],A=_?_===!0?u.params:typeof _=="function"?_(u):_:null,x=Wu(m,Pe({},A,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return $d(n.default,{Component:x,route:u})||x}}});function $d(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lb=Mb;function Fb(t){const e=bb(t.routes,t),n=t.parseQuery||Pb,r=t.stringifyQuery||Nd,s=t.history,i=Ii(),o=Ii(),l=Ii(),c=OT(nr);let u=nr;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=yc.bind(null,M=>""+M),d=yc.bind(null,JI),m=yc.bind(null,to);function _(M,X){let Y,ne;return R_(M)?(Y=e.getRecordMatcher(M),ne=X):ne=M,e.addRoute(ne,Y)}function A(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function O(){return e.getRoutes().map(M=>M.record)}function x(M){return!!e.getRecordMatcher(M)}function H(M,X){if(X=Pe({},X||c.value),typeof M=="string"){const P=vc(n,M,X.path),L=e.resolve({path:P.path},X),B=s.createHref(P.fullPath);return Pe(P,L,{params:m(L.params),hash:to(P.hash),redirectedFrom:void 0,href:B})}let Y;if(M.path!=null)Y=Pe({},M,{path:vc(n,M.path,X.path).path});else{const P=Pe({},M.params);for(const L in P)P[L]==null&&delete P[L];Y=Pe({},M,{params:d(P)}),X.params=d(X.params)}const ne=e.resolve(Y,X),Re=M.hash||"";ne.params=f(m(ne.params));const T=eb(r,Pe({},M,{hash:GI(Re),path:ne.path})),I=s.createHref(T);return Pe({fullPath:T,hash:Re,query:r===Nd?kb(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:I})}function j(M){return typeof M=="string"?vc(n,M,c.value.path):Pe({},M)}function N(M,X){if(u!==M)return Fs(8,{from:X,to:M})}function D(M){return R(M)}function q(M){return D(Pe(j(M),{replace:!0}))}function te(M){const X=M.matched[M.matched.length-1];if(X&&X.redirect){const{redirect:Y}=X;let ne=typeof Y=="function"?Y(M):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=j(ne):{path:ne},ne.params={}),Pe({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function R(M,X){const Y=u=H(M),ne=c.value,Re=M.state,T=M.force,I=M.replace===!0,P=te(Y);if(P)return R(Pe(j(P),{state:typeof P=="object"?Pe({},Re,P.state):Re,force:T,replace:I}),X||Y);const L=Y;L.redirectedFrom=X;let B;return!T&&tb(r,ne,Y)&&(B=Fs(16,{to:L,from:ne}),Wt(ne,ne,!0,!1)),(B?Promise.resolve(B):w(L,ne)).catch(U=>Pn(U)?Pn(U,2)?U:nn(U):Ee(U,L,ne)).then(U=>{if(U){if(Pn(U,2))return R(Pe({replace:I},j(U.to),{state:typeof U.to=="object"?Pe({},Re,U.to.state):Re,force:T}),X||L)}else U=b(L,ne,!0,I,Re);return S(L,ne,U),U})}function v(M,X){const Y=N(M,X);return Y?Promise.reject(Y):Promise.resolve()}function y(M){const X=Yn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function w(M,X){let Y;const[ne,Re,T]=Ub(M,X);Y=Ec(ne.reverse(),"beforeRouteLeave",M,X);for(const P of ne)P.leaveGuards.forEach(L=>{Y.push(cr(L,M,X))});const I=v.bind(null,M,X);return Y.push(I),Dt(Y).then(()=>{Y=[];for(const P of i.list())Y.push(cr(P,M,X));return Y.push(I),Dt(Y)}).then(()=>{Y=Ec(Re,"beforeRouteUpdate",M,X);for(const P of Re)P.updateGuards.forEach(L=>{Y.push(cr(L,M,X))});return Y.push(I),Dt(Y)}).then(()=>{Y=[];for(const P of T)if(P.beforeEnter)if(ln(P.beforeEnter))for(const L of P.beforeEnter)Y.push(cr(L,M,X));else Y.push(cr(P.beforeEnter,M,X));return Y.push(I),Dt(Y)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Y=Ec(T,"beforeRouteEnter",M,X,y),Y.push(I),Dt(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(cr(P,M,X));return Y.push(I),Dt(Y)}).catch(P=>Pn(P,8)?P:Promise.reject(P))}function S(M,X,Y){l.list().forEach(ne=>y(()=>ne(M,X,Y)))}function b(M,X,Y,ne,Re){const T=N(M,X);if(T)return T;const I=X===nr,P=Ts?history.state:{};Y&&(ne||I?s.replace(M.fullPath,Pe({scroll:I&&P&&P.scroll},Re)):s.push(M.fullPath,Re)),c.value=M,Wt(M,X,Y,I),nn()}let E;function Ce(){E||(E=s.listen((M,X,Y)=>{if(!fn.listening)return;const ne=H(M),Re=te(ne);if(Re){R(Pe(Re,{replace:!0,force:!0}),ne).catch($i);return}u=ne;const T=c.value;Ts&&cb(Rd(T.fullPath,Y.delta),ml()),w(ne,T).catch(I=>Pn(I,12)?I:Pn(I,2)?(R(Pe(j(I.to),{force:!0}),ne).then(P=>{Pn(P,20)&&!Y.delta&&Y.type===no.pop&&s.go(-1,!1)}).catch($i),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ee(I,ne,T))).then(I=>{I=I||b(ne,T,!1),I&&(Y.delta&&!Pn(I,8)?s.go(-Y.delta,!1):Y.type===no.pop&&Pn(I,20)&&s.go(-1,!1)),S(ne,T,I)}).catch($i)}))}let Je=Ii(),De=Ii(),he;function Ee(M,X,Y){nn(M);const ne=De.list();return ne.length?ne.forEach(Re=>Re(M,X,Y)):console.error(M),Promise.reject(M)}function Lt(){return he&&c.value!==nr?Promise.resolve():new Promise((M,X)=>{Je.add([M,X])})}function nn(M){return he||(he=!M,Ce(),Je.list().forEach(([X,Y])=>M?Y(M):X()),Je.reset()),M}function Wt(M,X,Y,ne){const{scrollBehavior:Re}=t;if(!Ts||!Re)return Promise.resolve();const T=!Y&&ub(Rd(M.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return yo().then(()=>Re(M,X,T)).then(I=>I&&lb(I)).catch(I=>Ee(I,M,X))}const He=M=>s.go(M);let ze;const Yn=new Set,fn={currentRoute:c,listening:!0,addRoute:_,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:O,resolve:H,options:t,push:D,replace:q,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:De.add,isReady:Lt,install(M){const X=this;M.component("RouterLink",k_),M.component("RouterView",Lb),M.config.globalProperties.$router=X,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Fn(c)}),Ts&&!ze&&c.value===nr&&(ze=!0,D(s.location).catch(Re=>{}));const Y={};for(const Re in nr)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});M.provide(gl,X),M.provide(Gu,hg(Y)),M.provide(Jc,c);const ne=M.unmount;Yn.add(M),M.unmount=function(){Yn.delete(M),Yn.size<1&&(u=nr,E&&E(),E=null,c.value=nr,ze=!1,he=!1),ne()}}};function Dt(M){return M.reduce((X,Y)=>X.then(()=>y(Y)),Promise.resolve())}return fn}function Ub(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ls(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ls(u,c))||s.push(c))}return[n,r,s]}function O_(){return Zt(gl)}function D_(t){return Zt(Gu)}const $b=()=>{};var jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},V_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[f],n[d],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new Bb;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qb=function(t){const e=x_(t);return V_.encodeByteArray(e,!0)},Na=function(t){return qb(t).replace(/\./g,"")},N_=function(t){try{return V_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=()=>Hb().__FIREBASE_DEFAULTS__,Wb=()=>{if(typeof process>"u"||typeof jd>"u")return;const t=jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&N_(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return $b()||zb()||Wb()||Kb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M_=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gb=t=>{const e=M_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L_=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},F_=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Na(JSON.stringify(n)),Na(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Xb(){var t;const e=(t=_l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nA(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rA(){return!Xb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sA(){try{return typeof indexedDB=="object"}catch{return!1}}function iA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oA,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,l,r)}}function aA(t,e){return t.replace(lA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lA=/\{\$([^}]+)}/g;function cA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uA(t,e){const n=new hA(t,e);return n.subscribe.bind(n)}class hA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tc),s.error===void 0&&(s.error=Tc),s.complete===void 0&&(s.complete=Tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return t.endsWith(".cloudworkstations.dev")}async function U_(t){return(await fetch(t,{credentials:"include"})).ok}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(t){return t===Hr?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const _A={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},yA=Te.INFO,vA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},EA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=yA,this._logHandler=EA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const TA=(t,e)=>e.some(n=>t instanceof n);let qd,Hd;function wA(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IA(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $_=new WeakMap,Xc=new WeakMap,j_=new WeakMap,wc=new WeakMap,Yu=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$_.set(n,t)}).catch(()=>{}),Yu.set(e,t),e}function AA(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||j_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RA(t){Zc=t(Zc)}function SA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return j_.set(r,e.sort?e.sort():[e]),gr(r)}:IA().includes(t)?function(...e){return t.apply(Ic(this),e),gr($_.get(this))}:function(...e){return gr(t.apply(Ic(this),e))}}function CA(t){return typeof t=="function"?SA(t):(t instanceof IDBTransaction&&AA(t),TA(t,wA())?new Proxy(t,Zc):t)}function gr(t){if(t instanceof IDBRequest)return bA(t);if(wc.has(t))return wc.get(t);const e=CA(t);return e!==t&&(wc.set(t,e),Yu.set(e,t)),e}const Ic=t=>Yu.get(t);function PA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gr(o.result),c.oldVersion,c.newVersion,gr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const kA=["get","getKey","getAll","getAllKeys","count"],OA=["put","add","delete","clear"],bc=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return bc.set(e,i),i}RA(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Wd="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Qu("@firebase/app"),VA="@firebase/app-compat",NA="@firebase/analytics-compat",MA="@firebase/analytics",LA="@firebase/app-check-compat",FA="@firebase/app-check",UA="@firebase/auth",$A="@firebase/auth-compat",jA="@firebase/database",BA="@firebase/data-connect",qA="@firebase/database-compat",HA="@firebase/functions",zA="@firebase/functions-compat",WA="@firebase/installations",KA="@firebase/installations-compat",GA="@firebase/messaging",QA="@firebase/messaging-compat",YA="@firebase/performance",JA="@firebase/performance-compat",XA="@firebase/remote-config",ZA="@firebase/remote-config-compat",e0="@firebase/storage",t0="@firebase/storage-compat",n0="@firebase/firestore",r0="@firebase/vertexai",s0="@firebase/firestore-compat",i0="firebase",o0="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="[DEFAULT]",a0={[eu]:"fire-core",[VA]:"fire-core-compat",[MA]:"fire-analytics",[NA]:"fire-analytics-compat",[FA]:"fire-app-check",[LA]:"fire-app-check-compat",[UA]:"fire-auth",[$A]:"fire-auth-compat",[jA]:"fire-rtdb",[BA]:"fire-data-connect",[qA]:"fire-rtdb-compat",[HA]:"fire-fn",[zA]:"fire-fn-compat",[WA]:"fire-iid",[KA]:"fire-iid-compat",[GA]:"fire-fcm",[QA]:"fire-fcm-compat",[YA]:"fire-perf",[JA]:"fire-perf-compat",[XA]:"fire-rc",[ZA]:"fire-rc-compat",[e0]:"fire-gcs",[t0]:"fire-gcs-compat",[n0]:"fire-fst",[s0]:"fire-fst-compat",[r0]:"fire-vertex","fire-js":"fire-js",[i0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map,l0=new Map,nu=new Map;function Kd(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(nu.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of Ma.values())Kd(n,t);for(const n of l0.values())Kd(n,t);return!0}function Ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new To("app","Firebase",c0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=o0;function B_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=L_()),!n)throw _r.create("no-options");const i=Ma.get(s);if(i){if(Zr(n,i.options)&&Zr(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new gA(s);for(const c of nu.values())o.addComponent(c);const l=new u0(n,r,o);return Ma.set(s,l),l}function q_(t=tu){const e=Ma.get(t);if(!e&&t===tu&&L_())return B_();if(!e)throw _r.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let s=(r=a0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Us(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebase-heartbeat-database",f0=1,ro="firebase-heartbeat-store";let Ac=null;function H_(){return Ac||(Ac=PA(h0,f0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function d0(t){try{const n=(await H_()).transaction(ro),r=await n.objectStore(ro).get(z_(t));return await n.done,r}catch(e){if(e instanceof Gn)Bn.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Gd(t,e){try{const r=(await H_()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,z_(t)),await r.done}catch(n){if(n instanceof Gn)Bn.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function z_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=1024,m0=30;class g0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>m0){const o=v0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qd(),{heartbeatsToSend:r,unsentEntries:s}=_0(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Qd(){return new Date().toISOString().substring(0,10)}function _0(t,e=p0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sA()?iA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yd(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}function v0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){Us(new es("platform-logger",e=>new DA(e),"PRIVATE")),Us(new es("heartbeat",e=>new g0(e),"PRIVATE")),yr(eu,Wd,t),yr(eu,Wd,"esm2017"),yr("fire-js","")}E0("");var T0="firebase",w0="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(T0,w0,"app");var Jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,W_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(w,S,b){for(var E=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)E[Ce-2]=arguments[Ce];return v.prototype[S].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)w[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)w[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],S=R.g[2];var b=R.g[3],E=v+(b^y&(S^b))+w[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=b+(S^v&(y^S))+w[1]+3905402710&4294967295,b=v+(E<<12&4294967295|E>>>20),E=S+(y^b&(v^y))+w[2]+606105819&4294967295,S=b+(E<<17&4294967295|E>>>15),E=y+(v^S&(b^v))+w[3]+3250441966&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(b^y&(S^b))+w[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(S^v&(y^S))+w[5]+1200080426&4294967295,b=v+(E<<12&4294967295|E>>>20),E=S+(y^b&(v^y))+w[6]+2821735955&4294967295,S=b+(E<<17&4294967295|E>>>15),E=y+(v^S&(b^v))+w[7]+4249261313&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(b^y&(S^b))+w[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(S^v&(y^S))+w[9]+2336552879&4294967295,b=v+(E<<12&4294967295|E>>>20),E=S+(y^b&(v^y))+w[10]+4294925233&4294967295,S=b+(E<<17&4294967295|E>>>15),E=y+(v^S&(b^v))+w[11]+2304563134&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(b^y&(S^b))+w[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(S^v&(y^S))+w[13]+4254626195&4294967295,b=v+(E<<12&4294967295|E>>>20),E=S+(y^b&(v^y))+w[14]+2792965006&4294967295,S=b+(E<<17&4294967295|E>>>15),E=y+(v^S&(b^v))+w[15]+1236535329&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(S^b&(y^S))+w[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^S&(v^y))+w[6]+3225465664&4294967295,b=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(b^v))+w[11]+643717713&4294967295,S=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(S^b))+w[0]+3921069994&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^b&(y^S))+w[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^S&(v^y))+w[10]+38016083&4294967295,b=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(b^v))+w[15]+3634488961&4294967295,S=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(S^b))+w[4]+3889429448&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^b&(y^S))+w[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^S&(v^y))+w[14]+3275163606&4294967295,b=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(b^v))+w[3]+4107603335&4294967295,S=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(S^b))+w[8]+1163531501&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^b&(y^S))+w[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^S&(v^y))+w[2]+4243563512&4294967295,b=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(b^v))+w[7]+1735328473&4294967295,S=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(S^b))+w[12]+2368359562&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(y^S^b)+w[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^S)+w[8]+2272392833&4294967295,b=v+(E<<11&4294967295|E>>>21),E=S+(b^v^y)+w[11]+1839030562&4294967295,S=b+(E<<16&4294967295|E>>>16),E=y+(S^b^v)+w[14]+4259657740&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^b)+w[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^S)+w[4]+1272893353&4294967295,b=v+(E<<11&4294967295|E>>>21),E=S+(b^v^y)+w[7]+4139469664&4294967295,S=b+(E<<16&4294967295|E>>>16),E=y+(S^b^v)+w[10]+3200236656&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^b)+w[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^S)+w[0]+3936430074&4294967295,b=v+(E<<11&4294967295|E>>>21),E=S+(b^v^y)+w[3]+3572445317&4294967295,S=b+(E<<16&4294967295|E>>>16),E=y+(S^b^v)+w[6]+76029189&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^b)+w[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^S)+w[12]+3873151461&4294967295,b=v+(E<<11&4294967295|E>>>21),E=S+(b^v^y)+w[15]+530742520&4294967295,S=b+(E<<16&4294967295|E>>>16),E=y+(S^b^v)+w[2]+3299628645&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(S^(y|~b))+w[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~S))+w[7]+1126891415&4294967295,b=v+(E<<10&4294967295|E>>>22),E=S+(v^(b|~y))+w[14]+2878612391&4294967295,S=b+(E<<15&4294967295|E>>>17),E=y+(b^(S|~v))+w[5]+4237533241&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~b))+w[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~S))+w[3]+2399980690&4294967295,b=v+(E<<10&4294967295|E>>>22),E=S+(v^(b|~y))+w[10]+4293915773&4294967295,S=b+(E<<15&4294967295|E>>>17),E=y+(b^(S|~v))+w[1]+2240044497&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~b))+w[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~S))+w[15]+4264355552&4294967295,b=v+(E<<10&4294967295|E>>>22),E=S+(v^(b|~y))+w[6]+2734768916&4294967295,S=b+(E<<15&4294967295|E>>>17),E=y+(b^(S|~v))+w[13]+1309151649&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~b))+w[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~S))+w[11]+3174756917&4294967295,b=v+(E<<10&4294967295|E>>>22),E=S+(v^(b|~y))+w[2]+718787259&4294967295,S=b+(E<<15&4294967295|E>>>17),E=y+(b^(S|~v))+w[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,w=this.B,S=this.h,b=0;b<v;){if(S==0)for(;b<=y;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<v;)if(w[S++]=R.charCodeAt(b++),S==this.blockSize){s(this,w),S=0;break}}else for(;b<v;)if(w[S++]=R[b++],S==this.blockSize){s(this,w),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)R[y++]=this.g[v]>>>w&255;return R};function i(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],w=!0,S=R.length-1;0<=S;S--){var b=R[S]|0;w&&b==v||(y[S]=b,w=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return x(u(-R));for(var v=[],y=1,w=0;R>=y;w++)v[w]=R/y|0,y*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return x(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=d,S=0;S<R.length;S+=8){var b=Math.min(8,R.length-S),E=parseInt(R.substring(S,S+b),v);8>b?(b=u(Math.pow(v,b)),w=w.j(b).add(u(E))):(w=w.j(y),w=w.add(u(E)))}return w}var d=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);R+=(0<=w?w:4294967296+w)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(A(this))return"0";if(O(this))return"-"+x(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,w="";;){var S=D(y,v).g;y=H(y,S.j(v));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=S,A(y))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function A(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function O(R){return R.h==-1}t.l=function(R){return R=H(this,R),O(R)?-1:A(R)?0:1};function x(R){for(var v=R.g.length,y=[],w=0;w<v;w++)y[w]=~R.g[w];return new o(y,~R.h).add(m)}t.abs=function(){return O(this)?x(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],w=0,S=0;S<=v;S++){var b=w+(this.i(S)&65535)+(R.i(S)&65535),E=(b>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);w=E>>>16,b&=65535,E&=65535,y[S]=E<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function H(R,v){return R.add(x(v))}t.j=function(R){if(A(this)||A(R))return d;if(O(this))return O(R)?x(this).j(x(R)):x(x(this).j(R));if(O(R))return x(this.j(x(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var S=0;S<R.g.length;S++){var b=this.i(w)>>>16,E=this.i(w)&65535,Ce=R.i(S)>>>16,Je=R.i(S)&65535;y[2*w+2*S]+=E*Je,j(y,2*w+2*S),y[2*w+2*S+1]+=b*Je,j(y,2*w+2*S+1),y[2*w+2*S+1]+=E*Ce,j(y,2*w+2*S+1),y[2*w+2*S+2]+=b*Ce,j(y,2*w+2*S+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function j(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function N(R,v){this.g=R,this.h=v}function D(R,v){if(A(v))throw Error("division by zero");if(A(R))return new N(d,d);if(O(R))return v=D(x(R),v),new N(x(v.g),x(v.h));if(O(v))return v=D(R,x(v)),new N(x(v.g),v.h);if(30<R.g.length){if(O(R)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=v;0>=w.l(R);)y=q(y),w=q(w);var S=te(y,1),b=te(w,1);for(w=te(w,2),y=te(y,2);!A(w);){var E=b.add(w);0>=E.l(R)&&(S=S.add(y),b=E),w=te(w,1),y=te(y,1)}return v=H(R,S.j(v)),new N(S,v)}for(S=d;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=u(y),E=b.j(v);O(E)||0<E.l(R);)y-=w,b=u(y),E=b.j(v);A(b)&&(b=m),S=S.add(b),R=H(R,E)}return new N(S,R)}t.A=function(R){return D(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&R.i(w);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|R.i(w);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^R.i(w);return new o(y,this.h^R.h)};function q(R){for(var v=R.g.length+1,y=[],w=0;w<v;w++)y[w]=R.i(w)<<1|R.i(w-1)>>>31;return new o(y,R.h)}function te(R,v){var y=v>>5;v%=32;for(var w=R.g.length-y,S=[],b=0;b<w;b++)S[b]=0<v?R.i(b+y)>>>v|R.i(b+y+1)<<32-v:R.i(b+y);return new o(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,W_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,vr=o}).apply(typeof Jd<"u"?Jd:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K_,Ci,G_,ha,ru,Q_,Y_,J_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in p))break e;p=p[k]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,g=!1,k={next:function(){if(!g&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,k,V){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[k].apply(g,G)}}function O(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function x(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const k=a.length||0,V=g.length||0;a.length=k+V;for(let G=0;G<V;G++)a[k+G]=g[G]}else a.push(g)}}class H{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var q=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function te(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function R(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let p,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(p in g)a[p]=g[p];for(let V=0;V<y.length;V++)p=y[V],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function S(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ce{constructor(){this.h=this.g=null}add(h,p){const g=Je.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Je=new H(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Ee=!1,Lt=new Ce,nn=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(Wt)}};var Wt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){b(p)}var h=Je;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function fn(a,h){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(q){e:{try{D(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}A(fn,ze);var Dt={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(a,h,p,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=k,this.key=++X,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,p,g,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=I(a,h,g,k);return-1<G?(h=a[G],p||(h.fa=!1)):(h=new Y(h,this.src,V,!!g,k),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var g=a.g[p],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(ne(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function I(a,h,p,g){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==g)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function B(a,h,p,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],p,g,k);return null}return p=ue(p),a&&a[M]?a.K(h,p,u(g)?!!g.capture:!1,k):U(a,h,p,!1,g,k)}function U(a,h,p,g,k,V){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Ve=J(a);if(Ve||(a[P]=Ve=new Re(a)),p=Ve.add(h,p,g,G,V),p.proxy)return p;if(g=Q(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)Yn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(z(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Q(){function a(p){return h.call(a.src,a.listener,p)}const h=oe;return a}function K(a,h,p,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],p,g,k);else g=u(g)?!!g.capture:!!g,p=ue(p),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=I(V,p,g,k),-1<p&&(ne(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,p,g,k)),(p=-1<a?h[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])T(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(z(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=J(h))?(T(p,a),p.h==0&&(p.src=null,h[P]=null)):ne(a)}}}function z(a){return a in L?L[a]:L[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new fn(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&W(a),a=p.call(g,h)}return a}function J(a){return a=a[P],a instanceof Re?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ae(){He.call(this),this.i=new Re(this),this.M=this,this.F=null}A(ae,He),ae.prototype[M]=!0,ae.prototype.removeEventListener=function(a,h,p,g){K(this,a,h,p,g)};function ge(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ze(h,a);else if(h instanceof ze)h.target=h.target||a;else{var k=h;h=new ze(g,a),w(h,k)}if(k=!0,p)for(var V=p.length-1;0<=V;V--){var G=h.g=p[V];k=be(G,g,!0,h)&&k}if(G=h.g=a,k=be(G,g,!0,h)&&k,k=be(G,g,!1,h)&&k,p)for(V=0;V<p.length;V++)G=h.g=p[V],k=be(G,g,!1,h)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)ne(p[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},ae.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function be(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==p){var Ve=G.listener,ut=G.ha||G.src;G.fa&&T(a.i,G),k=Ve.call(ut,g)!==!1&&k}}return k&&!g.defaultPrevented}function mt(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function lt(a){a.g=mt(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Kt extends He{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){He.call(this),this.h=a,this.g={}}A(gt,He);var Jn=[];function ai(a){te(a.g,function(h,p){this.g.hasOwnProperty(p)&&W(h)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),ai(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ct=l.JSON.stringify,Gt=l.JSON.parse,Vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function zl(){}zl.prototype.h=null;function Kh(a){return a.h||(a.h=a.i())}function Gh(){}var li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wl(){ze.call(this,"d")}A(Wl,ze);function Kl(){ze.call(this,"c")}A(Kl,ze);var Nr={},Qh=null;function No(){return Qh=Qh||new ae}Nr.La="serverreachability";function Yh(a){ze.call(this,Nr.La,a)}A(Yh,ze);function ci(a){const h=No();ge(h,new Yh(h))}Nr.STAT_EVENT="statevent";function Jh(a,h){ze.call(this,Nr.STAT_EVENT,a),this.stat=h}A(Jh,ze);function Rt(a){const h=No();ge(h,new Jh(h,a))}Nr.Ma="timingevent";function Xh(a,h){ze.call(this,Nr.Ma,a),this.size=h}A(Xh,ze);function ui(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function SE(a,h,p,g,k,V){a.info(function(){if(a.g)if(V)for(var G="",Ve=V.split("&"),ut=0;ut<Ve.length;ut++){var Se=Ve[ut].split("=");if(1<Se.length){var _t=Se[0];Se=Se[1];var yt=_t.split("_");G=2<=yt.length&&yt[1]=="type"?G+(_t+"="+Se+"&"):G+(_t+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+p+`
`+G})}function CE(a,h,p,g,k,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+p+`
`+V+" "+G})}function ps(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+kE(a,p)+(g?" "+g:"")})}function PE(a,h){a.info(function(){return"TIMEOUT: "+h})}hi.prototype.info=function(){};function kE(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return ct(p)}catch{return h}}var Mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gl;function Lo(){}A(Lo,zl),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Gl=new Lo;function Xn(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ef}function ef(){this.i=null,this.g="",this.h=!1}var tf={},Ql={};function Yl(a,h,p){a.L=1,a.v=jo(Rn(h)),a.m=p,a.P=!0,nf(a,null)}function nf(a,h){a.F=Date.now(),Fo(a),a.A=Rn(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),_f(p.i,"t",g),a.C=0,p=a.j.J,a.h=new ef,a.g=Nf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Kt(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Jn[0]=k.toString()),k=Jn);for(var V=0;V<k.length;V++){var G=B(p,k[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ci(),SE(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Sn(this.g);var h=this.g.Ba();const _s=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||bf(this.g)))){this.J||yt!=4||h==7||(h==8||0>=_s?ci(3):ci(2)),Jl(this);var p=this.g.Z();this.X=p;t:if(rf(this)){var g=bf(this.g);a="";var k=g.length,V=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),fi(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,CE(this.i,this.u,this.A,this.l,this.R,yt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ut=this.g;if((Ve=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ve)){var Se=Ve;break t}}Se=null}if(p=Se)ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xl(this,p);else{this.o=!1,this.s=3,Rt(12),Mr(this),fi(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<G.length;)if(rn=OE(this,G),rn==Ql){yt==4&&(this.s=4,Rt(14),p=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==tf){this.s=4,Rt(15),ps(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else ps(this.i,this.l,rn,null),Xl(this,rn);if(rf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,Rt(16),p=!1),this.o=this.o&&p,!p)ps(this.i,this.l,G,"[Invalid Chunked Response]"),Mr(this),fi(this);else if(0<G.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),sc(_t),_t.M=!0,Rt(11))}}else ps(this.i,this.l,G,null),Xl(this,G);yt==4&&Mr(this),this.o&&!this.J&&(yt==4?Of(this.j,this):(this.o=!1,Fo(this)))}else GE(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Mr(this),fi(this)}}}catch{}finally{}};function rf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function OE(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?Ql:(p=Number(h.substring(p,g)),isNaN(p)?tf:(g+=1,g+p>h.length?Ql:(h=h.slice(g,g+p),a.C=g+p,h)))}Xn.prototype.cancel=function(){this.J=!0,Mr(this)};function Fo(a){a.S=Date.now()+a.I,sf(a,a.I)}function sf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ui(m(a.ba,a),h)}function Jl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(PE(this.i,this.A),this.L!=2&&(ci(),Rt(17)),Mr(this),this.s=2,fi(this)):sf(this,this.S-a)};function fi(a){a.j.G==0||a.J||Of(a.j,a)}function Mr(a){Jl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ai(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xl(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Zl(p.h,a))){if(!a.K&&Zl(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ko(p),zo(p);else break e;rc(p),Rt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=ui(m(p.Za,p),6e3));if(1>=lf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Fr(p,11)}else if((a.K||p.g==a)&&Ko(p),!j(h))for(k=p.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const _t=Se[3];_t!=null&&(p.la=_t,p.j.info("VER="+p.la));const yt=Se[4];yt!=null&&(p.Aa=yt,p.j.info("SVER="+p.Aa));const _s=Se[5];_s!=null&&typeof _s=="number"&&0<_s&&(g=1.5*_s,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const rn=a.g;if(rn){const Qo=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var V=g.h;V.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ec(V,V.h),V.h=null))}if(g.D){const ic=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;ic&&(g.ya=ic,Ue(g.I,g.D,ic))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var G=a;if(g.qa=Vf(g,g.J?g.ia:null,g.W),G.K){cf(g.h,G);var Ve=G,ut=g.L;ut&&(Ve.I=ut),Ve.B&&(Jl(Ve),Fo(Ve)),g.g=G}else Pf(g);0<p.i.length&&Wo(p)}else Se[0]!="stop"&&Se[0]!="close"||Fr(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Fr(p,7):nc(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}ci(4)}catch{}}var DE=class{constructor(a,h){this.g=a,this.map=h}};function of(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function af(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lf(a){return a.h?1:a.g?a.g.size:0}function Zl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ec(a,h){a.g?a.g.add(h):a.h=h}function cf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}of.prototype.cancel=function(){if(this.i=uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function uf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return O(a.i)}function xE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function VE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function hf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=VE(a),g=xE(a),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],p&&p[V],a)}var ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NE(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),k=null;if(0<=g){var V=a[p].substring(0,g);k=a[p].substring(g+1)}else V=a[p];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Uo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var h=a.i,p=new mi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),df(this,p),this.m=a.m}else a&&(h=String(a).match(ff))?(this.h=!1,Uo(this,h[1]||"",!0),this.o=di(h[2]||""),this.g=di(h[3]||"",!0),$o(this,h[4]),this.l=di(h[5]||"",!0),df(this,h[6]||"",!0),this.m=di(h[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(pi(h,pf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(pi(h,pf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(pi(p,p.charAt(0)=="/"?FE:LE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",pi(p,$E)),a.join("")};function Rn(a){return new Lr(a)}function Uo(a,h,p){a.j=p?di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function df(a,h,p){h instanceof mi?(a.i=h,jE(a.i,a.h)):(p||(h=pi(h,UE)),a.i=new mi(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function jo(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,ME),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ME(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pf=/[#\/\?@]/g,LE=/[#\?:]/g,FE=/[#\?]/g,UE=/[#\?@]/g,$E=/#/g;function mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&NE(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=mi.prototype,t.add=function(a,h){Zn(this),this.i=null,a=ms(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function mf(a,h){Zn(a),h=ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function gf(a,h){return Zn(a),h=ms(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(p,g){p.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const k=a[g];for(let V=0;V<k.length;V++)p.push(h[g])}return p},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")gf(this,a)&&(h=h.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=ms(this,a),gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function _f(a,h,p){mf(a,h),0<p.length&&(a.i=null,a.g.set(ms(a,h),O(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var k=V;G[g]!==""&&(k+="="+encodeURIComponent(String(G[g]))),a.push(k)}}return this.i=a.join("&")};function ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jE(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(p,g){var k=g.toLowerCase();g!=k&&(mf(this,g),_f(this,k,p))},a)),a.j=h}function BE(a,h){const p=new hi;if(l.Image){const g=new Image;g.onload=_(er,p,"TestLoadImage: loaded",!0,h,g),g.onerror=_(er,p,"TestLoadImage: error",!1,h,g),g.onabort=_(er,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(er,p,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function qE(a,h){const p=new hi,g=new AbortController,k=setTimeout(()=>{g.abort(),er(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?er(p,"TestPingServer: ok",!0,h):er(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),er(p,"TestPingServer: error",!1,h)})}function er(a,h,p,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(p)}catch{}}function HE(){this.g=new Vo}function zE(a,h,p){const g=p||"";try{hf(a,function(k,V){let G=k;u(k)&&(G=ct(k)),h.push(g+V+"="+encodeURIComponent(G))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Bo,zl),Bo.prototype.g=function(){return new qo(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function qo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(qo,ae),t=qo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?gi(this):_i(this),this.readyState==3&&yf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gi(this))},t.Qa=function(a){this.g&&(this.response=a,gi(this))},t.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vf(a){let h="";return te(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function tc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=vf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function Qe(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Qe,ae);var WE=/^https?$/i,KE=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gl.g(),this.v=this.o?Kh(this.o):Kh(Gl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Ef(this,V);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)p.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())p.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(KE,h,void 0))||g||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of p)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{If(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Ef(this,V)}};function Ef(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Tf(a),Ho(a)}function Tf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wf(this):this.bb())},t.bb=function(){wf(this)};function wf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)mt(a.Ea,0,a);else if(ge(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=G===0){var k=String(a.D).match(ff)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!WE.test(k?k.toLowerCase():"")}p=g}if(p)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var V=2<Sn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Tf(a)}}finally{Ho(a)}}}}function Ho(a,h){if(a.g){If(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{p.onreadystatechange=g}catch{}}}function If(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Gt(h)}};function bf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function GE(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var p=S(a[g]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[k]||[];h[k]=V,V.push(p)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Af(a){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,a),this.cb=yi("retryDelaySeedMs",1e4,a),this.Wa=yi("forwardChannelMaxRetries",2,a),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new of(a&&a.concurrentRequestLimit),this.Da=new HE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Af.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){Rt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Vf(this,null,this.W),Wo(this)};function nc(a){if(Rf(a),a.G==3){var h=a.U++,p=Rn(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),vi(a,p),h=new Xn(a,a.j,h),h.L=2,h.v=jo(Rn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Nf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fo(h)}xf(a)}function zo(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function Rf(a){zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wo(a){if(!af(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||nn(),Ee||(he(),Ee=!0),Lt.add(h,a),a.B=0}}function QE(a,h){return lf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ui(m(a.Ga,a,h),Df(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Cf(this,k,h),p=Rn(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),vi(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(vf(V)))+"&"+h:this.m&&tc(p,this.m,V)),ec(this.h,k),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),k.T=!0,Yl(k,p,null)):Yl(k,p,h),this.G=2}}else this.G==3&&(a?Sf(this,a):this.i.length==0||af(this.h)||Sf(this))};function Sf(a,h){var p;h?p=h.l:p=a.U++;const g=Rn(a.I);Ue(g,"SID",a.K),Ue(g,"RID",p),Ue(g,"AID",a.T),vi(a,g),a.m&&a.o&&tc(g,a.m,a.o),p=new Xn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Cf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ec(a.h,p),Yl(p,g,h)}function vi(a,h){a.H&&te(a.H,function(p,g){Ue(h,g,p)}),a.l&&hf({},function(p,g){Ue(h,g,p)})}function Cf(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const G=["count="+p];V==-1?0<p?(V=k[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ve=!0;for(let ut=0;ut<p;ut++){let Se=k[ut].g;const _t=k[ut].map;if(Se-=V,0>Se)V=Math.max(0,k[ut].g-100),Ve=!1;else try{zE(_t,G,"req"+Se+"_")}catch{g&&g(_t)}}if(Ve){g=G.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function Pf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||nn(),Ee||(he(),Ee=!0),Lt.add(h,a),a.v=0}}function rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ui(m(a.Fa,a),Df(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,kf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ui(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),zo(this),kf(this))};function sc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function kf(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),vi(a,h),a.m&&a.o&&tc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=jo(Rn(h)),p.m=null,p.P=!0,nf(p,a)}t.Za=function(){this.C!=null&&(this.C=null,zo(this),rc(this),Rt(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Of(a,h){var p=null;if(a.g==h){Ko(a),sc(a),a.g=null;var g=2}else if(Zl(a.h,h))p=h.D,cf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=No(),ge(g,new Xh(g,p)),Wo(a)}else Pf(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&QE(a,h)||g==2&&rc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),k){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function Df(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Fr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const k=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Uo(g,"https"),jo(g),k?BE(g.toString(),p):qE(g.toString(),p)}else Rt(2);a.G=0,a.l&&a.l.sa(h),xf(a),Rf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function xf(a){if(a.G=0,a.ka=[],a.l){const h=uf(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Vf(a,h,p){var g=p instanceof Lr?Rn(p):new Lr(p);if(g.g!="")h&&(g.g=h+"."+g.g),$o(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new Lr(null);g&&Uo(V,g),h&&(V.g=h),k&&$o(V,k),p&&(V.l=p),g=V}return p=a.D,h=a.ya,p&&h&&Ue(g,p,h),Ue(g,"VER",a.la),vi(a,g),g}function Nf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new Bo({eb:p})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mf(){}t=Mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){ae.call(this),this.g=new Af(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!j(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new gs(this)}A(Ft,ae),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){nc(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ct(a),a=p);h.i.push(new DE(h.Ya++,a)),h.G==3&&Wo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,Ft.aa.N.call(this)};function Lf(a){Wl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Lf,Wl);function Ff(){Kl.call(this),this.status=1}A(Ff,Kl);function gs(a){this.g=a}A(gs,Mf),gs.prototype.ua=function(){ge(this.g,"a")},gs.prototype.ta=function(a){ge(this.g,new Lf(a))},gs.prototype.sa=function(a){ge(this.g,new Ff)},gs.prototype.ra=function(){ge(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,J_=function(){return new Go},Y_=function(){return No()},Q_=Nr,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,ha=Mo,Zh.COMPLETE="complete",G_=Zh,Gh.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ci=Gh,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,K_=Qe}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});const Xd="@firebase/firestore",Zd="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Qu("@firebase/firestore");function ws(){return ts.logLevel}function Z(t,...e){if(ts.logLevel<=Te.DEBUG){const n=e.map(Xu);ts.debug(`Firestore (${Xs}): ${t}`,...n)}}function qn(t,...e){if(ts.logLevel<=Te.ERROR){const n=e.map(Xu);ts.error(`Firestore (${Xs}): ${t}`,...n)}}function $s(t,...e){if(ts.logLevel<=Te.WARN){const n=e.map(Xu);ts.warn(`Firestore (${Xs}): ${t}`,...n)}}function Xu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,X_(t,r,n)}function X_(t,e,n){let r=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||X_(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class b0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class A0{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class R0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class S0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new R0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ep{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ep(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ep(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=P0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function su(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=ey(),o=k0(i.encode(tp(t,n)),i.encode(tp(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function tp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function k0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=-62135596800,rp=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rp);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<np)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rp}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-np;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new tt(0,0))}static max(){return new fe(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):su(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class qe extends gn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const O0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends gn{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return O0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sp}static keyField(){return new dt([sp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(qe.fromString(e))}static fromName(e){return new se(qe.fromString(e).popFirst(5))}static empty(){return new se(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new qe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=-1;function D0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new wr(s,se.empty(),e)}function x0(t){return new wr(t.readTime,t.key,so)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(fe.min(),se.empty(),so)}static max(){return new wr(fe.max(),se.empty(),so)}}function V0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==N0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function L0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ei(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}vl.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=-1;function El(t){return t==null}function La(t){return t===0&&1/t==-1/0}function F0(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="";function U0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ip(e)),e=$0(t.get(n),e);return ip(e)}function $0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ny:n+="";break;default:n+=i}}return n}function ip(t){return t+ny+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ap(this.data.getIterator())}getIteratorFrom(e){return new ap(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class ap{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new nt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sy("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const j0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=j0.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="server_timestamp",oy="__type__",ay="__previous_value__",ly="__local_write_time__";function eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[oy])===null||n===void 0?void 0:n.stringValue)===iy}function Tl(t){const e=t.mapValue.fields[ay];return eh(e)?Tl(e):e}function io(t){const e=Ir(t.mapValue.fields[ly].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Fa="(default)";class oo{constructor(e,n){this.projectId=e,this.database=n||Fa}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database===Fa}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="__type__",q0="__max__",na={mapValue:{}},uy="__vector__",Ua="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eh(t)?4:z0(t)?9007199254740991:H0(t)?10:11:ce(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),l=Ir(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?La(o)===La(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(op(o)!==op(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return ce(52216,{left:t})}}function ao(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return lp(t.timestampValue,e.timestampValue);case 4:return lp(io(t),io(e));case 5:return su(t.stringValue,e.stringValue);case 6:return function(i,o){const l=br(i),c=br(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=_e(l[u],c[u]);if(f!==0)return f}return _e(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=_e(Xe(i.latitude),Xe(o.latitude));return l!==0?l:_e(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const d=i.fields||{},m=o.fields||{},_=(l=d[Ua])===null||l===void 0?void 0:l.arrayValue,A=(c=m[Ua])===null||c===void 0?void 0:c.arrayValue,O=_e(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:cp(_,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=su(c[d],f[d]);if(m!==0)return m;const _=Bs(l[c[d]],u[f[d]]);if(_!==0)return _}return _e(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ce(23264,{Pe:n})}}function lp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ir(t),r=Ir(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function cp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function qs(t){return iu(t)}function iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=iu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${iu(n.fields[o])}`;return s+"}"}(t.mapValue):ce(61005,{value:t})}function fa(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tl(t);return e?16+fa(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Or(r.fields,(i,o)=>{s+=i.length+fa(o)}),s}(t.mapValue);default:throw ce(13486,{value:t})}}function up(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"integerValue"in t}function th(t){return!!t&&"arrayValue"in t}function hp(t){return!!t&&"nullValue"in t}function fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function H0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[cy])===null||n===void 0?void 0:n.stringValue)===uy}function Bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===q0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Bi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Or(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(Bi(this.value))}}function hy(t){const e=[];return Or(t.fields,(n,r)=>{const s=new dt([n]);if(da(r)){const i=hy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,fe.min(),fe.min(),fe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,fe.min(),fe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,fe.min(),fe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.position=e,this.inclusive=n}}function dp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function W0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{}class et extends fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new G0(e,n,r):n==="array-contains"?new J0(e,r):n==="in"?new X0(e,r):n==="not-in"?new Z0(e,r):n==="array-contains-any"?new eR(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Q0(e,r):new Y0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bs(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends fy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new cn(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function dy(t){return t.op==="and"}function py(t){return K0(t)&&dy(t)}function K0(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function au(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(py(t))return t.filters.map(e=>au(e)).join(",");{const e=t.filters.map(n=>au(n)).join(",");return`${t.op}(${e})`}}function my(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&my(o,s.filters[l]),!0):!1}(t,e):void ce(19439)}function gy(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(gy).join(" ,")+"}"}(t):"Filter"}class G0 extends et{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Q0 extends et{constructor(e,n){super(e,"in",n),this.keys=_y("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Y0 extends et{constructor(e,n){super(e,"not-in",n),this.keys=_y("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _y(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class J0 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return th(n)&&ao(n.arrayValue,this.value)}}class X0 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class Z0 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ao(this.value.arrayValue,n)}}class eR extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ao(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function mp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tR(t,e,n,r,s,i,o)}function nh(t){const e=pe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.Ie=n}return e.Ie}function rh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!my(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pp(t.startAt,e.startAt)&&pp(t.endAt,e.endAt)}function lu(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function nR(t,e,n,r,s,i,o,l){return new ti(t,e,n,r,s,i,o,l)}function sh(t){return new ti(t)}function gp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yy(t){return t.collectionGroup!==null}function qi(t){const e=pe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(dt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new lo(i,r))}),n.has(dt.keyField().canonicalString())||e.Ee.push(new lo(dt.keyField(),r))}return e.Ee}function vn(t){const e=pe(t);return e.de||(e.de=rR(e,qi(t))),e.de}function rR(t,e){if(t.limitType==="F")return mp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)});const n=t.endAt?new $a(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $a(t.startAt.position,t.startAt.inclusive):null;return mp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cu(t,e){const n=t.filters.concat([e]);return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uu(t,e,n){return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wl(t,e){return rh(vn(t),vn(e))&&t.limitType===e.limitType}function vy(t){return`${nh(vn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gy(s)).join(", ")}]`),El(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qs(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,qi(r),s)||r.endAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,qi(r),s))}(t,e)}function sR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ey(t){return(e,n)=>{let r=!1;for(const s of qi(t)){const i=iR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Bs(c,u):ce(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ry(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new Ge(se.comparator);function Hn(){return oR}const Ty=new Ge(se.comparator);function Pi(...t){let e=Ty;for(const n of t)e=e.insert(n.key,n);return e}function wy(t){let e=Ty;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Hi()}function Iy(){return Hi()}function Hi(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const aR=new Ge(se.comparator),lR=new nt(se.comparator);function we(...t){let e=lR;for(const n of t)e=e.add(n);return e}const cR=new nt(_e);function uR(){return cR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function by(t){return{integerValue:""+t}}function hR(t,e){return F0(e)?by(e):ih(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this._=void 0}}function fR(t,e,n){return t instanceof ja?function(s,i){const o={fields:{[oy]:{stringValue:iy},[ly]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eh(i)&&(i=Tl(i)),i&&(o.fields[ay]=i),{mapValue:o}}(n,e):t instanceof co?Ry(t,e):t instanceof uo?Sy(t,e):function(s,i){const o=Ay(s,i),l=_p(o)+_p(s.Re);return ou(o)&&ou(s.Re)?by(l):ih(s.serializer,l)}(t,e)}function dR(t,e,n){return t instanceof co?Ry(t,e):t instanceof uo?Sy(t,e):n}function Ay(t,e){return t instanceof Ba?function(r){return ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ja extends bl{}class co extends bl{constructor(e){super(),this.elements=e}}function Ry(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class uo extends bl{constructor(e){super(),this.elements=e}}function Sy(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Ba extends bl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function _p(t){return Xe(t.integerValue||t.doubleValue)}function Cy(t){return th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof co&&s instanceof co||r instanceof uo&&s instanceof uo?js(r.elements,s.elements,bn):r instanceof Ba&&s instanceof Ba?bn(r.Re,s.Re):r instanceof ja&&s instanceof ja}(t.transform,e.transform)}class mR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Al{}function Py(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oh(t.key,en.none()):new Io(t.key,t.data,en.none());{const n=t.data,r=Mt.empty();let s=new nt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new qt(s.toArray()),en.none())}}function gR(t,e,n){t instanceof Io?function(s,i,o){const l=s.value.clone(),c=vp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!pa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=vp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ky(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof Io?function(i,o,l,c){if(!pa(i.precondition,o))return l;const u=i.value.clone(),f=Ep(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,l,c){if(!pa(i.precondition,o))return l;const u=Ep(i.fieldTransforms,c,o),f=o.data;return f.setAll(ky(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return pa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _R(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ay(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&js(r,s,(i,o)=>pR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Al{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends Al{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ky(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vp(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,dR(o,l,n[s]))}return r}function Ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fR(i,o,e))}return r}class oh extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yR extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Iy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Py(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,r)=>yp(n,r))&&js(this.baseMutations,e.baseMutations,(n,r)=>yp(n,r))}}class ah{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return aR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ah(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ae;function wR(t){switch(t){case F.OK:return ce(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function Oy(t){if(t===void 0)return qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ze.OK:return F.OK;case Ze.CANCELLED:return F.CANCELLED;case Ze.UNKNOWN:return F.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return F.INTERNAL;case Ze.UNAVAILABLE:return F.UNAVAILABLE;case Ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ze.NOT_FOUND:return F.NOT_FOUND;case Ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ze.ABORTED:return F.ABORTED;case Ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ze.DATA_LOSS:return F.DATA_LOSS;default:return ce(39323,{code:t})}}(Ae=Ze||(Ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new vr([4294967295,4294967295],0);function Tp(t){const e=ey().encode(t),n=new W_;return n.update(e),new Uint8Array(n.digest())}function wp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,r],0),new vr([s,i],0)]}class lh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=vr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(vr.fromNumber(r)));return s.compare(IR)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Tp(e),[r,s]=wp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Tp(e),[r,s]=wp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(fe.min(),s,new Ge(_e),Hn(),we())}}class bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bo(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Dy{constructor(e,n){this.targetId=e,this.Ce=n}}class xy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ip{constructor(){this.Fe=0,this.Me=bp(),this.xe=pt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=we(),n=we(),r=we();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new bo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=bp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class bR{constructor(e){this.ze=e,this.je=new Map,this.He=Hn(),this.Je=ra(),this.Ye=ra(),this.Ze=new Ge(_e)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(lu(i))if(r===0){const o=new se(i.path);this.tt(n,o,bt.newNoDocument(o,fe.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(c){if(c instanceof sy)return $s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lh(o,s,i)}catch(c){return $s(c instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&lu(l.target)){const c=new se(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,bt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=we();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Rl(e,n,this.Ze,this.He,r);return this.He=Hn(),this.Je=ra(),this.Ye=ra(),this.Ze=new Ge(_e),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ip,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new nt(_e),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(_e),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ip),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ra(){return new Ge(se.comparator)}function bp(){return new Ge(se.comparator)}const AR={asc:"ASCENDING",desc:"DESCENDING"},RR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class CR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||El(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PR(t,e){return qa(t,e.toTimestamp())}function En(t){return Oe(!!t,49232),fe.fromTimestamp(function(n){const r=Ir(n);return new tt(r.seconds,r.nanos)}(t))}function ch(t,e){return fu(t,e).canonicalString()}function fu(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ny(t){const e=qe.fromString(t);return Oe($y(e),10190,{key:e.toString()}),e}function du(t,e){return ch(t.databaseId,e.path)}function Rc(t,e){const n=Ny(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Ly(n))}function My(t,e){return ch(t.databaseId,e)}function kR(t){const e=Ny(t);return e.length===4?qe.emptyPath():Ly(e)}function pu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ly(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ap(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function OR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:Oy(u.code);return new ee(f,u.message||"")}(o);n=new xy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):fe.min(),l=new Mt({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ma(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?En(r.readTime):fe.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ma([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new ma([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TR(s,i),l=r.targetId;n=new Dy(l,o)}}return n}function DR(t,e){let n;if(e instanceof Io)n={update:Ap(t,e.key,e.value)};else if(e instanceof oh)n={delete:du(t,e.key)};else if(e instanceof Dr)n={update:Ap(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof yR))return ce(16599,{ft:e.type});n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ce(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:PR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(t,e.precondition)),n}function xR(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(fe.min())&&(o=En(i)),new mR(o,s.transformResults||[])}(n,e))):[]}function VR(t,e){return{documents:[My(t,e.path)]}}function NR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=My(t,s);const i=function(u){if(u.length!==0)return Uy(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:bs(m.field),direction:FR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function MR(t){let e=kR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=Fy(d);return m instanceof cn&&py(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new lo(As(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,El(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,_=d.values||[];return new $a(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,_=d.values||[];return new $a(_,m)}(n.endAt)),nR(e,s,o,i,l,"F",c,u)}function LR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(As(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>Fy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(n.compositeFilter.op))}(t):ce(30097,{filter:t})}function FR(t){return AR[t]}function UR(t){return RR[t]}function $R(t){return SR[t]}function bs(t){return{fieldPath:t.canonicalString()}}function As(t){return dt.fromServerFormat(t.fieldPath)}function Uy(t){return t instanceof et?function(n){if(n.op==="=="){if(fp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NAN"}};if(hp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NAN"}};if(hp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(n.field),op:UR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>Uy(s));return r.length===1?r[0]:{compositeFilter:{op:$R(n.op),filters:r}}}(t):ce(54877,{filter:t})}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $y(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.wt=e}}function qR(t){const e=MR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.yn=new zR}addToCollectionParentIndex(e,n){return this.yn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(wr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jy=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(jy,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Hs(0)}static ir(){return new Hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LruGarbageCollector",WR=1048576;function Cp([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class KR{constructor(e){this.cr=e,this.buffer=new nt(Cp),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){Z(Sp,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?Z(Sp,"Ignoring IndexedDB error during garbage collection: ",n):await Zs(n)}await this.Ir(3e5)})}}class QR{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(vl.le);const r=new KR(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Rp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rp):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ws()<=Te.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function YR(t,e){return new QR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,qt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Pi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Hn();const o=Hi(),l=function(){return Hi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Dr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),zi(f.mutation,u,f.mutation.getFieldMask(),tt.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return l.set(u,new XR(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Hi();let s=new Ge((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||qt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=Iy();f.forEach(m=>{if(!i.has(m)){const _=Py(n.get(m),r.get(m));_!==null&&d.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Kr());let l=so,c=i;return o.next(u=>$.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(f=>({batchId:l,changes:wy(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Pi();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const u=function(d,m){return new ti(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,bt.newInvalidDocument(f)))});let l=Pi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&zi(f.mutation,u,qt.empty(),tt.now()),Il(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return $.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:qR(s.bundledQuery),readTime:En(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.overlays=new Ge(se.comparator),this.Or=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Kr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return $.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ER(n,r));let i=this.Or.get(n);i===void 0&&(i=we(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Nr=new nt(st.Br),this.Lr=new nt(st.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new st(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new se(new qe([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new se(new qe([])),r=new st(n,e),s=new st(n,e+1);let i=we();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return se.comparator(e.key,n.key)||_e(e.Gr,n.Gr)}static kr(e,n){return _e(e.Gr,n.Gr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new nt(st.Br)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.zr=this.zr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Zu:this.Jn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const l=this.jr(o.Gr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(_e);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],l=>{r=r.add(l.Gr)})}),$.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new st(new se(i),0);let l=new nt(_e);return this.zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Gr)),!0)},o),$.resolve(this.Jr(l))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return $.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new st(n,0),s=this.zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Zr=e,this.docs=function(){return new Ge(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hn();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||V0(x0(f),r)<=0||(s.has(f.key)||Il(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}Xr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iS(this)}getSize(e){return $.resolve(this.size)}}class iS extends JR{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.persistence=e,this.ei=new as(n=>nh(n),rh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.ti=0,this.ni=new uh,this.targetCount=0,this.ri=Hs.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),$.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.ar(n),$.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.ii={},this.overlays={},this.si=new vl(0),this.oi=!1,this.oi=!0,this._i=new nS,this.referenceDelegate=e(this),this.ai=new oS(this),this.indexManager=new HR,this.remoteDocumentCache=function(s){return new sS(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new BR(n),this.ci=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new rS(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new aS(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return $.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class aS extends M0{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Ti=new uh,this.Ii=null}static Ei(e){return new hh(e)}get di(){if(this.Ii)return this.Ii;throw ce(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,r=>{const s=se.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return $.or([()=>$.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.Ri=new as(r=>U0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=YR(this,n)}static Ei(e,n){return new Ha(e,n)}li(){}hi(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return $.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),$.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fa(e.data.value)),n}gr(e,n,r){return $.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return rA()?8:L0(At())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lS;return this.fs(e,n,o).next(l=>{if(i.result=l,this.Is)return this.gs(e,n,o,l.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(ws()<=Te.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),$.resolve()):(ws()<=Te.DEBUG&&Z("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ws()<=Te.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):$.resolve())}Rs(e,n){if(gp(n))return $.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uu(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.As.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ps(n,l);return this.ys(n,u,o,c.readTime)?this.Rs(e,uu(n,null,"F")):this.ws(e,u,n,c)}))})))}Vs(e,n,r,s){return gp(n)||s.isEqual(fe.min())?$.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?$.resolve(null):(ws()<=Te.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(n)),this.ws(e,o,n,D0(s,so)).next(l=>l))})}ps(e,n){let r=new nt(Ey(e));return n.forEach((s,i)=>{Il(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return ws()<=Te.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Is(n)),this.As.getDocumentsMatchingQuery(e,n,wr.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="LocalStore",uS=3e8;class hS{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Ge(_e),this.Ds=new as(i=>nh(i),rh),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZR(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function fS(t,e,n,r){return new hS(t,e,n,r)}async function qy(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:l}))})})}function dS(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let _=$.resolve();return m.forEach(A=>{_=_.next(()=>f.getEntry(c,A)).next(O=>{const x=u.docVersions.get(A);Oe(x!==null,48541),O.version.compareTo(x)<0&&(d.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hy(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function pS(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const l=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.ai.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.ai.addMatchingKeys(i,f.addedDocuments,d)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(pt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(d,_),function(O,x,H){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=uS?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(m,_,f)&&l.push(n.ai.updateTargetData(i,_))});let c=Hn(),u=we();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(mS(i,o,e.documentUpdates).next(f=>{c=f.xs,u=f.Os})),!r.isEqual(fe.min())){const f=n.ai.getLastRemoteSnapshotVersion(i).next(d=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ss=s,i))}function mS(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z(dh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{xs:o,Os:s}})}function gS(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _S(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function mu(t,e,n){const r=pe(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ei(o))throw o;Z(dh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function Pp(t,e,n){const r=pe(t);let s=fe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=pe(c),m=d.Ds.get(f);return m!==void 0?$.resolve(d.Ss.get(m)):d.ai.getTargetData(u,f)}(r,o,vn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:we())).next(l=>(yS(r,sR(e),l),{documents:l,Ns:i})))}function yS(t,e,n){let r=t.vs.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class kp{constructor(){this.activeTargetIds=uR()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vS{constructor(){this.So=new kp,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="ConnectivityMonitor";class Dp{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){Z(Op,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){Z(Op,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=null;function gu(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="RestConnection",TS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wS{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Fa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=gu(),l=this.$o(e,n.toUriEncodedString());Z(Sc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(c,s,i);const{host:u}=new URL(l),f=yl(u);return this.Ko(e,l,c,r,f).then(d=>(Z(Sc,`Received RPC '${e}' ${o}: `,d),d),d=>{throw $s(Sc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=TS[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class bS extends wS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s,i){const o=gu();return new Promise((l,c)=>{const u=new K_;u.setWithCredentials(!0),u.listenOnce(G_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ha.NO_ERROR:const d=u.getResponseJson();Z(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case ha.TIMEOUT:Z(vt,`RPC '${e}' ${o} timed out`),c(new ee(F.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const m=u.getStatus();if(Z(vt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const O=function(H){const j=H.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(j)>=0?j:F.UNKNOWN}(A.status);c(new ee(O,A.message))}else c(new ee(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ee(F.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{s_:e,streamId:o,o_:u.getLastErrorCode(),__:u.getLastError()})}}finally{Z(vt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}a_(e,n,r){const s=gu(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=J_(),l=Y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(vt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);let m=!1,_=!1;const A=new IS({Go:x=>{_?Z(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(Z(vt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),Z(vt,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},zo:()=>d.close()}),O=(x,H,j)=>{x.listen(H,N=>{try{j(N)}catch(D){setTimeout(()=>{throw D},0)}})};return O(d,Ci.EventType.OPEN,()=>{_||(Z(vt,`RPC '${e}' stream ${s} transport opened.`),A.t_())}),O(d,Ci.EventType.CLOSE,()=>{_||(_=!0,Z(vt,`RPC '${e}' stream ${s} transport closed`),A.r_())}),O(d,Ci.EventType.ERROR,x=>{_||(_=!0,$s(vt,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),A.r_(new ee(F.UNAVAILABLE,"The operation could not be completed")))}),O(d,Ci.EventType.MESSAGE,x=>{var H;if(!_){const j=x.data[0];Oe(!!j,16349);const N=j,D=(N==null?void 0:N.error)||((H=N[0])===null||H===void 0?void 0:H.error);if(D){Z(vt,`RPC '${e}' stream ${s} received error:`,D);const q=D.status;let te=function(y){const w=Ze[y];if(w!==void 0)return Oy(w)}(q),R=D.message;te===void 0&&(te=F.INTERNAL,R="Unknown error status: "+q+" with message "+D.message),_=!0,A.r_(new ee(te,R)),d.close()}else Z(vt,`RPC '${e}' stream ${s} received:`,j),A.i_(j)}}),O(l,Q_.STAT_EVENT,x=>{x.stat===ru.PROXY?Z(vt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ru.NOPROXY&&Z(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.n_()},0),A}}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return new CR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="PersistentStream";class Wy{constructor(e,n,r,s,i,o,l,c){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new zy(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ee(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return Z(xp,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(Z(xp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends Wy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=OR(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?En(o.readTime):fe.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=pu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=lu(c)?{documents:VR(i,c)}:{query:NR(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Vy(i,o.resumeToken);const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=qa(i,o.snapshotVersion.toTimestamp());const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=LR(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.F_(n)}}class RS extends Wy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=xR(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=pu(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DR(this.serializer,r))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{}class CS extends SS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,fu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(F.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(e,fu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(F.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(qn(n),this.ea=!1):Z("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="RemoteStore";class kS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{ls(this)&&(Z(ns,"Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.aa.add(4),await Ao(u),u.la.set("Unknown"),u.aa.delete(4),await Cl(u)}(this))})}),this.la=new PS(r,s)}}async function Cl(t){if(ls(t))for(const e of t.ua)await e(!0)}async function Ao(t){for(const e of t.ua)await e(!1)}function Ky(t,e){const n=pe(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),_h(n)?gh(n):ni(n).b_()&&mh(n,e))}function ph(t,e){const n=pe(t),r=ni(n);n._a.delete(e),r.b_()&&Gy(n,e),n._a.size===0&&(r.b_()?r.v_():ls(n)&&n.la.set("Unknown"))}function mh(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ni(t).U_(e)}function Gy(t,e){t.ha.Ke(e),ni(t).K_(e)}function gh(t){t.ha=new bR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ni(t).start(),t.la.ta()}function _h(t){return ls(t)&&!ni(t).w_()&&t._a.size>0}function ls(t){return pe(t).aa.size===0}function Qy(t){t.ha=void 0}async function OS(t){t.la.set("Online")}async function DS(t){t._a.forEach((e,n)=>{mh(t,e)})}async function xS(t,e){Qy(t),_h(t)?(t.la.ia(e),gh(t)):t.la.set("Unknown")}async function VS(t,e,n){if(t.la.set("Online"),e instanceof xy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s._a.delete(l),s.ha.removeTarget(l))}(t,e)}catch(r){Z(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await za(t,r)}else if(e instanceof ma?t.ha.Xe(e):e instanceof Dy?t.ha.ot(e):t.ha.nt(e),!n.isEqual(fe.min()))try{const r=await Hy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ha.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i._a.get(u);f&&i._a.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i._a.get(c);if(!f)return;i._a.set(c,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Gy(i,c);const d=new pr(f.target,c,u,f.sequenceNumber);mh(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(ns,"Failed to raise snapshot:",r),await za(t,r)}}async function za(t,e,n){if(!ei(e))throw e;t.aa.add(1),await Ao(t),t.la.set("Offline"),n||(n=()=>Hy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(ns,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Cl(t)})}function Yy(t,e){return e().catch(n=>za(t,n,e))}async function Pl(t){const e=pe(t),n=Rr(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Zu;for(;NS(e);)try{const s=await gS(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,MS(e,s)}catch(s){await za(e,s)}Jy(e)&&Xy(e)}function NS(t){return ls(t)&&t.oa.length<10}function MS(t,e){t.oa.push(e);const n=Rr(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Jy(t){return ls(t)&&!Rr(t).w_()&&t.oa.length>0}function Xy(t){Rr(t).start()}async function LS(t){Rr(t).H_()}async function FS(t){const e=Rr(t);for(const n of t.oa)e.G_(n.mutations)}async function US(t,e,n){const r=t.oa.shift(),s=ah.from(r,e,n);await Yy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pl(t)}async function $S(t,e){e&&Rr(t).W_&&await async function(r,s){if(function(o){return wR(o)&&o!==F.ABORTED}(s.code)){const i=r.oa.shift();Rr(r).D_(),await Yy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pl(r)}}(t,e),Jy(t)&&Xy(t)}async function Vp(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Z(ns,"RemoteStore received new credentials");const r=ls(n);n.aa.add(3),await Ao(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Cl(n)}async function jS(t,e){const n=pe(t);e?(n.aa.delete(2),await Cl(n)):e||(n.aa.add(2),await Ao(n),n.la.set("Unknown"))}function ni(t){return t.Pa||(t.Pa=function(n,r,s){const i=pe(n);return i.Y_(),new AS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:OS.bind(null,t),Jo:DS.bind(null,t),Zo:xS.bind(null,t),Q_:VS.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),_h(t)?gh(t):t.la.set("Unknown")):(await t.Pa.stop(),Qy(t))})),t.Pa}function Rr(t){return t.Ta||(t.Ta=function(n,r,s){const i=pe(n);return i.Y_(),new RS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:LS.bind(null,t),Zo:$S.bind(null,t),z_:FS.bind(null,t),j_:US.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Pl(t)):(await t.Ta.stop(),t.oa.length>0&&(Z(ns,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new yh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(qn("AsyncQueue",`${e}: ${t}`),ei(t))return new ee(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static emptySet(e){return new Ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Pi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.Ia=new Ge(se.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ce(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new zs(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class qS{constructor(){this.queries=Mp(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Mp(),i.forEach((o,l)=>{for(const c of l.Ra)c.onError(r)})})(this,new ee(F.ABORTED,"Firestore shutting down"))}}function Mp(){return new as(t=>vy(t),wl)}async function Zy(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new BS,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vh(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Eh(n)}async function ev(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Ra)l.pa(s)&&(r=!0);o.Aa=s}}r&&Eh(n)}function zS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Eh(t){t.fa.forEach(e=>{e.next()})}var _u,Lp;(Lp=_u||(_u={})).ya="default",Lp.Cache="cache";class tv{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==_u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=we(),this.mutatedKeys=we(),this.Ua=Ey(e),this.Ka=new Ds(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Np,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),_=Il(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?A!==O&&(r.track({type:3,doc:_}),x=!0):this.ja(m,_)||(r.track({type:2,doc:_}),x=!0,(c&&this.Ua(_,c)>0||u&&this.Ua(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(c||u)&&(l=!0)),x&&(_?(o=o.add(_),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:l,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,d)=>function(_,A){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Vt:x})}};return O(_)-O(A)}(f.type,d.type)||this.Ua(f.doc,d.doc)),this.Ha(r),s=s!=null&&s;const l=n&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,u=c!==this.Qa;return this.Qa=c,o.length!==0||u?{snapshot:new zs(this.query,e.Ka,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Np,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=we(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new rv(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new nv(r))}),n}Xa(e){this.qa=e.Ns,this.$a=we();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return zs.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Th="SyncEngine";class KS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GS{constructor(e){this.key=e,this.tu=!1}}class QS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new as(l=>vy(l),wl),this.iu=new Map,this.su=new Set,this.ou=new Ge(se.comparator),this._u=new Map,this.au=new uh,this.uu={},this.cu=new Map,this.lu=Hs.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function YS(t,e,n=!0){const r=cv(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await sv(r,e,n,!0),s}async function JS(t,e){const n=cv(t);await sv(n,e,!0,!1)}async function sv(t,e,n,r){const s=await _S(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await XS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ky(t.remoteStore,s),l}async function XS(t,e,n,r,s){t.Pu=(d,m,_)=>async function(O,x,H,j){let N=x.view.Ga(H);N.ys&&(N=await Pp(O.localStore,x.query,!1).then(({documents:R})=>x.view.Ga(R,N)));const D=j&&j.targetChanges.get(x.targetId),q=j&&j.targetMismatches.get(x.targetId)!=null,te=x.view.applyChanges(N,O.isPrimaryClient,D,q);return Up(O,x.targetId,te.Ya),te.snapshot}(t,d,m,_);const i=await Pp(t.localStore,e,!0),o=new WS(e,i.Ns),l=o.Ga(i.documents),c=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Up(t,n,u.Ya);const f=new KS(e,n,o);return t.ru.set(e,f),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function ZS(t,e,n){const r=pe(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!wl(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ph(r.remoteStore,s.targetId),yu(r,s.targetId)}).catch(Zs)):(yu(r,s.targetId),await mu(r.localStore,s.targetId,!0))}async function eC(t,e){const n=pe(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ph(n.remoteStore,r.targetId))}async function tC(t,e,n){const r=lC(t);try{const s=await function(o,l){const c=pe(o),u=tt.now(),f=l.reduce((_,A)=>_.add(A.key),we());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Hn(),O=we();return c.Cs.getEntries(_,f).next(x=>{A=x,A.forEach((H,j)=>{j.isValidDocument()||(O=O.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,A)).next(x=>{d=x;const H=[];for(const j of l){const N=_R(j,d.get(j.key).overlayedDocument);N!=null&&H.push(new Dr(j.key,N,hy(N.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,H,l)}).next(x=>{m=x;const H=x.applyToLocalDocumentSet(d,O);return c.documentOverlayCache.saveOverlays(_,x.batchId,H)})}).then(()=>({batchId:m.batchId,changes:wy(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.uu[o.currentUser.toKey()];u||(u=new Ge(_e)),u=u.insert(l,c),o.uu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ro(r,s.changes),await Pl(r.remoteStore)}catch(s){const i=vh(s,"Failed to persist write");n.reject(i)}}async function iv(t,e){const n=pe(t);try{const r=await pS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Oe(o.tu,14607):s.removedDocuments.size>0&&(Oe(o.tu,42227),o.tu=!1))}),await Ro(n,r,e)}catch(r){await Zs(r)}}function Fp(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const l=o.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.Ra)m.ga(l)&&(u=!0)}),u&&Eh(c)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nC(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Ge(se.comparator);o=o.insert(i,bt.newNoDocument(i,fe.min()));const l=we().add(i),c=new Rl(fe.min(),new Map,new Ge(_e),o,l);await iv(r,c),r.ou=r.ou.remove(i),r._u.delete(e),wh(r)}else await mu(r.localStore,e,!1).then(()=>yu(r,e,n)).catch(Zs)}async function rC(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await dS(n.localStore,e);av(n,r,null),ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await Zs(s)}}async function sC(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Oe(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);av(r,e,n),ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await Zs(s)}}function ov(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function av(t,e,n){const r=pe(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function yu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||lv(t,r)})}function lv(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(ph(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),wh(t))}function Up(t,e,n){for(const r of n)r instanceof nv?(t.au.addReference(r.key,e),iC(t,r)):r instanceof rv?(Z(Th,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||lv(t,r.key)):ce(19791,{Iu:r})}function iC(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(Z(Th,"New document in limbo: "+n),t.su.add(r),wh(t))}function wh(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new se(qe.fromString(e)),r=t.lu.next();t._u.set(r,new GS(n)),t.ou=t.ou.insert(n,r),Ky(t.remoteStore,new pr(vn(sh(n.path)),r,"TargetPurposeLimboResolution",vl.le))}}async function Ro(t,e,n){const r=pe(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((l,c)=>{o.push(r.Pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=fh.Ps(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(u,m=>$.forEach(m.ls,_=>f.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>$.forEach(m.hs,_=>f.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!ei(d))throw d;Z(dh,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=f.Ss.get(m),A=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(A);f.Ss=f.Ss.insert(m,O)}}}(r.localStore,i))}async function oC(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Z(Th,"User change. New user:",e.toKey());const r=await qy(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(l=>{l.forEach(c=>{c.reject(new ee(F.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Ms)}}function aC(t,e){const n=pe(t),r=n._u.get(e);if(r&&r.tu)return we().add(r.key);{let s=we();const i=n.iu.get(e);if(!i)return s;for(const o of i){const l=n.ru.get(o);s=s.unionWith(l.view.Wa)}return s}}function cv(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nC.bind(null,e),e.nu.Q_=HS.bind(null,e.eventManager),e.nu.Tu=zS.bind(null,e.eventManager),e}function lC(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sC.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return fS(this.persistence,new cS,e.initialUser,this.serializer)}Ru(e){return new By(hh.Ei,this.serializer)}Au(e){return new vS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class cC extends Wa{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Oe(this.persistence.referenceDelegate instanceof Ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GR(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new By(r=>Ha.Ei(r,n),this.serializer)}}class vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oC.bind(null,this.syncEngine),await jS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qS}()}createDatastore(e){const n=Sl(e.databaseInfo.databaseId),r=function(i){return new bS(i)}(e.databaseInfo);return function(i,o,l,c){return new CS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new kS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fp(this.syncEngine,n,0),function(){return Dp.C()?new Dp:new ES}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const d=new QS(s,i,o,l,c,u);return f&&(d.hu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);Z(ns,"RemoteStore shutting down."),i.aa.add(5),await Ao(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vu.provider={build:()=>new vu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="FirestoreClient";class uC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=ty.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hC(t);Z(Sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vp(e.remoteStore,s)),t._onlineComponents=e}async function hC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Sr,"Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Wa)}}else Z(Sr,"Using default OfflineComponentProvider"),await Pc(t,new cC(void 0));return t._offlineComponents}async function hv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Sr,"Using user provided OnlineComponentProvider"),await $p(t,t._uninitializedComponentsProvider._online)):(Z(Sr,"Using default OnlineComponentProvider"),await $p(t,new vu))),t._onlineComponents}function fC(t){return hv(t).then(e=>e.syncEngine)}async function fv(t){const e=await hv(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=ZS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eC.bind(null,e.syncEngine),n}function dC(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new uv({next:m=>{f.yu(),o.enqueueAndForget(()=>ev(i,d));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ee(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new tv(sh(l.path),f,{includeMetadataChanges:!0,Fa:!0});return Zy(i,d)}(await fv(t),t.asyncQueue,e,n,r)),r.promise}function pC(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new uv({next:m=>{f.yu(),o.enqueueAndForget(()=>ev(i,d)),m.fromCache&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new tv(l,f,{includeMetadataChanges:!0,Fa:!0});return Zy(i,d)}(await fv(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e,n){if(!n)throw new ee(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new ee(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bp(t){if(!se.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qp(t){if(se.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kl(t);throw new ee(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="firestore.googleapis.com",Hp=!0;class zp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mv,this.ssl=Hp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WR)throw new ee(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I0;switch(r.type){case"firstParty":return new S0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),jp.delete(n),r.terminate())}(this),Promise.resolve()}}function gC(t,e,n,r={}){var s;t=un(t,Ol);const i=yl(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&U_(`https://${c}`),o.host!==mv&&o.host!==c&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Zr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Et.MOCK_USER;else{f=Yb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ee(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Et(m)}t._authCredentials=new b0(new Z_(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cs(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Er extends cs{constructor(e,n,r){super(e,n,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new se(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Wp(t,e,...n){if(t=at(t),pv("collection","path",e),t instanceof Ol){const r=qe.fromString(e,...n);return qp(r),new Er(t,null,r)}{if(!(t instanceof Ot||t instanceof Er))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return qp(r),new Er(t.firestore,null,r)}}function Rs(t,e,...n){if(t=at(t),arguments.length===1&&(e=ty.newId()),pv("doc","path",e),t instanceof Ol){const r=qe.fromString(e,...n);return Bp(r),new Ot(t,null,new se(r))}{if(!(t instanceof Ot||t instanceof Er))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Bp(r),new Ot(t.firestore,t instanceof Er?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="AsyncQueue";class Gp{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new zy(this,"async_queue_retry"),this.ju=()=>{const r=Cc();r&&Z(Kp,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Un;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!ei(e))throw e;Z(Kp,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,qn("INTERNAL UNHANDLED ERROR: ",Qp(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=yh.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ce(47125,{ec:Qp(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function Qp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class us extends Ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gp(e),this._firestoreClient=void 0,await e}}}function _C(t,e){const n=typeof t=="object"?t:q_(),r=typeof t=="string"?t:Fa,s=Ju(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gb("firestore");i&&gC(s,...i)}return s}function Ih(t){if(t._terminated)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yC(t),t._firestoreClient}function yC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new B0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new uC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(pt.fromBase64String(e))}catch(n){throw new ee(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=/^__.*__$/;class EC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class gv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{oc:t})}}class Sh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ka(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(_v(this.oc)&&vC.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class TC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sl(e)}dc(e,n,r,s=!1){return new Sh({oc:e,methodName:n,Ec:r,path:dt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xl(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new TC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yv(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);Ch("Data must be an object, but it was:",o,r);const l=vv(r,o);let c,u;if(i.merge)c=new qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Eu(e,d,n);if(!o.contains(m))throw new ee(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Tv(f,m)||f.push(m)}c=new qt(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new EC(new Mt(l),c,u)}class Vl extends bh{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vl}}function wC(t,e,n,r){const s=t.dc(1,e,n);Ch("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Or(r,(c,u)=>{const f=Ph(e,c,n);u=at(u);const d=s.hc(f);if(u instanceof Vl)i.push(f);else{const m=So(u,d);m!=null&&(i.push(f),o.set(f,m))}});const l=new qt(i);return new gv(o,l,s.fieldTransforms)}function IC(t,e,n,r,s,i){const o=t.dc(1,e,n),l=[Eu(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Eu(e,i[m])),c.push(i[m+1]);const u=[],f=Mt.empty();for(let m=l.length-1;m>=0;--m)if(!Tv(u,l[m])){const _=l[m];let A=c[m];A=at(A);const O=o.hc(_);if(A instanceof Vl)u.push(_);else{const x=So(A,O);x!=null&&(u.push(_),f.set(_,x))}}const d=new qt(u);return new gv(f,d,o.fieldTransforms)}function bC(t,e,n,r=!1){return So(n,t.dc(r?4:3,e))}function So(t,e){if(Ev(t=at(t)))return Ch("Unsupported field value:",e,t),vv(t,e);if(t instanceof bh)return function(r,s){if(!_v(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=So(l,s.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Ah)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ws)return{bytesValue:Vy(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ch(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rh)return function(o,l){return{mapValue:{fields:{[cy]:{stringValue:uy},[Ua]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Tc("VectorValues must only contain numeric values.");return ih(l.serializer,u)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${kl(r)}`)}(t,e)}function vv(t,e){const n={};return ry(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(r,s)=>{const i=So(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ev(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Ah||t instanceof Ws||t instanceof Ot||t instanceof bh||t instanceof Rh)}function Ch(t,e,n){if(!Ev(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=kl(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Eu(t,e,n){if((e=at(e))instanceof Dl)return e._internalPath;if(typeof e=="string")return Ph(t,e);throw Ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const AC=new RegExp("[~\\*/\\[\\]]");function Ph(t,e,n){if(e.search(AC)>=0)throw Ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch{throw Ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(F.INVALID_ARGUMENT,l+t+c)}function Tv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RC extends wv{data(){return super.data()}}function Nl(t,e){return typeof e=="string"?Ph(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kh{}class Iv extends kh{}function CC(t,e,...n){let r=[];e instanceof kh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Oh).length,l=i.filter(c=>c instanceof Ml).length;if(o>1||o>0&&l>0)throw new ee(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ml extends Iv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ml(e,n,r)}_apply(e){const n=this._parse(e);return bv(e._query,n),new cs(e.firestore,e.converter,cu(e._query,n))}_parse(e){const n=xl(e.firestore);return function(i,o,l,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ee(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jp(d,f);const A=[];for(const O of d)A.push(Yp(c,i,O));m={arrayValue:{values:A}}}else m=Yp(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jp(d,f),m=bC(l,o,d,f==="in"||f==="not-in");return et.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function PC(t,e,n){const r=e,s=Nl("where",t);return Ml._create(s,r,n)}class Oh extends kh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Oh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)bv(o,c),o=cu(o,c)}(e._query,n),new cs(e.firestore,e.converter,cu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dh extends Iv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lo(i,o)}(e._query,this._field,this._direction);return new cs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ti(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function kC(t,e="asc"){const n=e,r=Nl("orderBy",t);return Dh._create(r,n)}function Yp(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new ee(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yy(e)&&n.indexOf("/")!==-1)throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!se.isDocumentKey(r))throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return up(t,new se(r))}if(n instanceof Ot)return up(t,n._key);throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kl(n)}.`)}function Jp(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OC{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Or(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ua].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new Rh(i)}convertGeoPoint(e){return new Ah(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Oe($y(r),9688,{name:e});const s=new oo(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rv extends wv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ga extends Rv{data(e={}){return super.data(e)}}class DC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ga(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:xC(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){t=un(t,Ot);const e=un(t.firestore,us);return dC(Ih(e),t._key).then(n=>FC(e,t,n))}class Sv extends OC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function VC(t){t=un(t,cs);const e=un(t.firestore,us),n=Ih(e),r=new Sv(e);return SC(t._query),pC(n,t._query).then(s=>new DC(e,r,t,s))}function NC(t,e,n){t=un(t,Ot);const r=un(t.firestore,us),s=Av(t.converter,e);return Ll(r,[yv(xl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function Zp(t,e,n,...r){t=un(t,Ot);const s=un(t.firestore,us),i=xl(s);let o;return o=typeof(e=at(e))=="string"||e instanceof Dl?IC(i,"updateDoc",t._key,e,n,r):wC(i,"updateDoc",t._key,e),Ll(s,[o.toMutation(t._key,en.exists(!0))])}function MC(t){return Ll(un(t.firestore,us),[new oh(t._key,en.none())])}function LC(t,e){const n=un(t.firestore,us),r=Rs(t),s=Av(t.converter,e);return Ll(n,[yv(xl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Ll(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>tC(await fC(r),s,i)),i.promise}(Ih(t),e)}function FC(t,e,n){const r=n.docs.get(e._key),s=new Sv(t);return new Rv(t,s,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Xs=s})(Js),Us(new es("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new us(new A0(r.getProvider("auth-internal")),new C0(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),yr(Xd,Zd,e),yr(Xd,Zd,"esm2017")})();function xh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UC=Cv,Pv=new To("auth","Firebase",Cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Qu("@firebase/auth");function $C(t,...e){Ga.logLevel<=Te.WARN&&Ga.warn(`Auth (${Js}): ${t}`,...e)}function _a(t,...e){Ga.logLevel<=Te.ERROR&&Ga.error(`Auth (${Js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Vh(t,...e)}function Tn(t,...e){return Vh(t,...e)}function kv(t,e,n){const r=Object.assign(Object.assign({},UC()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return kv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function le(t,e,...n){if(!t)throw Vh(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function zn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jC(){return em()==="http:"||em()==="https:"}function em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jC()||eA()||"connection"in navigator)?navigator.onLine:!0}function qC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jb()||tA()}get(){return BC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WC=new Co(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,s={}){return Dv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Zb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&yl(t.emulatorConfig.host)&&(u.credentials="include"),Ov.fetch()(await xv(t,t.config.apiHost,n,l),u)})}async function Dv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HC),e);try{const s=new GC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ia(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kv(t,f,u);hn(t,f)}}catch(s){if(s instanceof Gn)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function Po(t,e,n,r,s={}){const i=await Vr(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function xv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`;return zC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function KC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),WC.get())})}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}function tm(t){return t!==void 0&&t.enterprise!==void 0}class QC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YC(t,e){return Vr(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function Qa(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=Mh(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wi(kc(s.auth_time)),issuedAtTime:Wi(kc(s.iat)),expirationTime:Wi(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function Mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=N_(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nm(t){const e=Mh(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&ZC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ho(t,Qa(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vv(i.providerUserInfo):[],l=nP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function tP(t){const e=at(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vv(t){return t.map(e=>{var{providerId:n}=e,r=xh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){const n=await Dv(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await xv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sP(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=nm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return tP(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await ho(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:D,isAnonymous:q,providerData:te,stsTokenManager:R}=n;le(N&&R,e,"internal-error");const v=xs.fromJSON(this.name,R);le(typeof N=="string",e,"internal-error"),rr(d,e.name),rr(m,e.name),le(typeof D=="boolean",e,"internal-error"),le(typeof q=="boolean",e,"internal-error"),rr(_,e.name),rr(A,e.name),rr(O,e.name),rr(x,e.name),rr(H,e.name),rr(j,e.name);const y=new sn({uid:N,auth:e,email:m,emailVerified:D,displayName:d,isAnonymous:q,photoURL:A,phoneNumber:_,tenantId:O,stsTokenManager:v,createdAt:H,lastLoginAt:j});return te&&Array.isArray(te)&&(y.providerData=te.map(w=>Object.assign({},w))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ya(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xs;l.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Map;function Mn(t){zn(t instanceof Function,"Expected a class definition");let e=rm.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nv.type="NONE";const sm=Nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qa(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Mn(sm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(sm);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await Qa(e,{idToken:f}).catch(()=>{});if(!m)break;d=await sn._fromGetAccountInfoResponse(e,m,f)}else d=sn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jv(e))return"Blackberry";if(Bv(e))return"Webos";if(Lv(e))return"Safari";if((e.includes("chrome/")||Fv(e))&&!e.includes("edge/"))return"Chrome";if($v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mv(t=At()){return/firefox\//i.test(t)}function Lv(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fv(t=At()){return/crios\//i.test(t)}function Uv(t=At()){return/iemobile/i.test(t)}function $v(t=At()){return/android/i.test(t)}function jv(t=At()){return/blackberry/i.test(t)}function Bv(t=At()){return/webos/i.test(t)}function Lh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iP(t=At()){var e;return Lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oP(){return nA()&&document.documentMode===10}function qv(t=At()){return Lh(t)||$v(t)||Bv(t)||jv(t)||/windows phone/i.test(t)||Uv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e=[]){let n;switch(t){case"Browser":n=im(At());break;case"Worker":n=`${im(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=6;class uP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new om(this),this.idTokenSubscription=new om(this),this.beforeStateQueue=new aP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qa(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject($n(this));const n=e?at(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lP(this),n=new uP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hs(t){return at(t)}class om{constructor(e){this.auth=e,this.observer=null,this.addObserver=uA(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fP(t){Fl=t}function zv(t){return Fl.loadJS(t)}function dP(){return Fl.recaptchaEnterpriseScript}function pP(){return Fl.gapiScript}function mP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gP{constructor(){this.enterprise=new _P}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _P{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yP="recaptcha-enterprise",Wv="NO_RECAPTCHA";class vP{constructor(e){this.type=yP,this.auth=hs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{YC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new QC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;tm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Wv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&tm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=dP();c.length!==0&&(c+=l),zv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function am(t,e,n,r=!1,s=!1){const i=new vP(t);let o;if(s)o=Wv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Iu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await am(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await am(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t,e){const n=Ju(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zr(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function TP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=hs(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kv(e),{host:o,port:l}=IP(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Zr(u,r.config.emulator)&&Zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bP(),yl(o)&&U_(`${i}//${o}${c}`)}function Kv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IP(t){const e=Kv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function AP(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function CP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends Fh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,n,"signInWithPassword",RP);case"emailLink":return SP(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,r,"signUpPassword",AP);case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="http://localhost";class rs extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OP(t){const e=Ri(Si(t)).link,n=e?Ri(Si(e)).deep_link_id:null,r=Ri(Si(t)).deep_link_id;return(r?Ri(Si(r)).link:null)||r||n||e||t}class Uh{constructor(e){var n,r,s,i,o,l;const c=Ri(Si(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,d=kP((s=c.mode)!==null&&s!==void 0?s:null);le(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OP(e);try{return new Uh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uh.parseLink(n);return le(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ko{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ko{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ko{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return Po(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=cm(r);return new ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cm(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ja(e,n,r,s)}}function Qv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,i,e,r):i})}async function xP(t,e,n=!1){const r=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject($n(r));const s="reauthenticate";try{const i=await ho(t,Qv(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Mh(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e,n=!1){if(Yt(t.app))return Promise.reject($n(t));const r="signIn",s=await Qv(t,r,e),i=await ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NP(t,e){return Yv(hs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t){const e=hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MP(t,e,n){if(Yt(t.app))return Promise.reject($n(t));const r=hs(t),o=await Iu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jv(t),c}),l=await ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LP(t,e,n){return Yt(t.app)?Promise.reject($n(t)):NP(at(t),ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jv(t),r})}function FP(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function UP(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function Xv(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function $P(t){return at(t).signOut()}const Xa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=1e3,BP=10;class eE extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const qP=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await HP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=$h("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function WP(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function KP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QP(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebaseLocalStorageDb",YP=1,Za="firebaseLocalStorage",iE="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function JP(){const t=indexedDB.deleteDatabase(sE);return new Oo(t).toPromise()}function bu(){const t=indexedDB.open(sE,YP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:iE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await JP(),e(await bu()))})})}async function um(t,e,n){const r=$l(t,!0).put({[iE]:e,value:n});return new Oo(r).toPromise()}async function XP(t,e){const n=$l(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=$l(t,!0).delete(e);return new Oo(n).toPromise()}const ZP=800,e1=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(QP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KP(),!this.activeServiceWorker)return;this.sender=new zP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await um(e,Xa,"1"),await hm(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>um(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$l(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const t1=oE;new Co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){return e?Mn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r1(t){return Yv(t.auth,new jh(t),t.bypassAuthState)}function s1(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),VP(n,new jh(t),t.bypassAuthState)}async function i1(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),xP(n,new jh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return i1;case"reauthViaPopup":case"reauthViaRedirect":return s1;default:hn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Co(2e3,1e4);class Ss extends aE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=$h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="pendingRedirect",va=new Map;class l1 extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await c1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c1(t,e){const n=f1(e),r=h1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function u1(t,e){va.set(t._key(),e)}function h1(t){return Mn(t._redirectPersistence)}function f1(t){return ya(a1,t.config.apiKey,t.name)}async function d1(t,e,n=!1){if(Yt(t.app))return Promise.reject($n(t));const r=hs(t),s=n1(r,e),o=await new l1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(e))}saveEventToCache(e){this.cachedEventUids.add(fm(e)),this.lastProcessedEventTime=Date.now()}}function fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function E1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _1(t);for(const n of e)try{if(T1(n))return}catch{}hn(t,"unauthorized-domain")}function T1(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v1.test(n))return!1;if(y1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new Co(3e4,6e4);function dm(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var r,s,i;function o(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(Tn(t,"network-request-failed"))},timeout:w1.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=mP("iframefcb");return wn()[l]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},zv(`${pP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function b1(t){return Ea=Ea||I1(t),Ea}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Co(5e3,15e3),R1="__/auth/iframe",S1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,S1):`https://${t.config.authDomain}/${R1}`,r={apiKey:e.apiKey,appName:t.name,v:Js},s=P1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wo(r).slice(1)}`}async function O1(t){const e=await b1(t),n=wn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:k1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},A1.get());function c(){wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,V1=600,N1="_blank",M1="http://localhost";class pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(t,e,n,r=x1,s=V1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},D1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(l=Fv(u)?N1:n),Mv(u)&&(e=e||M1,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,A])=>`${m}${_}=${A},`,"");if(iP(u)&&l!=="_self")return F1(e||"",l),new pm(null);const d=window.open(e||"",l,f);le(d,t,"popup-blocked");try{d.focus()}catch{}return new pm(d)}function F1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="__/auth/handler",$1="emulator/auth/handler",j1=encodeURIComponent("fac");async function mm(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:s};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ko){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${j1}=${encodeURIComponent(c)}`:"";return`${B1(t)}?${wo(l).slice(1)}${u}`}function B1({config:t}){return t.emulator?Nh(t,$1):`https://${t.authDomain}/${U1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="webStorageSupport";class q1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=d1,this._overrideRedirectResult=u1}async _openPopup(e,n,r,s){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await mm(e,n,r,Tu(),s);return L1(e,o,$h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mm(e,n,r,Tu(),s);return WP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O1(e),r=new m1(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qv()||Lv()||Lh()}}const H1=q1;var gm="@firebase/auth",_m="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K1(t){Us(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hv(t)},u=new hP(r,s,i,c);return TP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new es("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(r=>new z1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(gm,_m,W1(t)),yr(gm,_m,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=5*60,Q1=F_("authIdTokenMaxAge")||G1;let ym=null;const Y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q1)return;const s=n==null?void 0:n.token;ym!==s&&(ym=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J1(t=q_()){const e=Ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EP(t,{popupRedirectResolver:H1,persistence:[t1,qP,nE]}),r=F_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Y1(i.toString());UP(n,o,()=>o(n.currentUser)),FP(n,l=>o(l))}}const s=M_("auth");return s&&wP(n,`http://${s}`),n}function X1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",X1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K1("Browser");const Z1={apiKey:"AIzaSyAH7Qc8QkTR8AWBOxptwHH6IxIXpIx-c00",authDomain:"calisteniarg-f3d40.firebaseapp.com",projectId:"calisteniarg-f3d40",storageBucket:"calisteniarg-f3d40.firebasestorage.app",messagingSenderId:"641759769239",appId:"1:641759769239:web:9e4d3ffdd5dc9645f56fd2"},cE=B_(Z1),Br=_C(cE),Di=J1(cE),si=g_("profile",{state:()=>({profile:{id:null,email:"",nickname:"",routines:[],charge:!1}}),actions:{async loadProfile(t,e){if(!t)throw new Error("UID de usuario inválido");const n=Rs(Br,"profiles",t);try{const r=await Xp(n);if(r.exists()){const s=r.data();this.profile={id:t,email:s.email,nickname:s.nickname||"",routines:[]}}else await NC(n,{idUser:t,email:e,nickname:""}),this.profile={id:t,email:e,nickname:"",routines:[]}}catch(r){throw console.error("Error al cargar o crear el perfil:",r),r}},async setNickname(t){if(!this.profile.id)throw new Error("Usuario no autenticado");const e=Rs(Br,"profiles",this.profile.id);try{await Zp(e,{nickname:t}),this.profile.nickname=t}catch(n){throw console.error("Error al actualizar el nickname:",n),n}},async getRutinas(){if(console.log("GetRutinas()"),!this.profile.id)throw new Error("Usuario no autenticado");const t=Wp(Br,"routines"),e=[PC("idUser","==",this.profile.id),kC("fechaCreacion","desc")],n=CC(t,...e);try{const r=await VC(n),s=[];r.forEach(i=>{s.push({id:i.id,...i.data()})}),this.profile.routines=s}catch(r){throw console.error("Error al obtener las rutinas:",r),r}},async getRutina(t){try{const e=Rs(Br,"routines",t),n=await Xp(e);return n.exists()?{id:n.id,...n.data()}:(console.warn(`No se encontró la rutina con ID: ${t}`),null)}catch(e){throw console.error(`Error al obtener la rutina con ID ${t}:`,e),e}},getRutinaLocal(t){return this.profile.routines.find(e=>e.id===t)},async deleteRutina(t){try{this.profile.routines=this.profile.routines.filter(e=>e.id!==t),await MC(Rs(Br,"routines",t))}catch(e){throw console.error("Error al eliminar la rutina:",e),e}},async updateRutina(t){if(!t.id)throw new Error("Rutina sin ID");const e=Rs(Br,"routines",t.id),{id:n,...r}=t;try{console.log("Antes del horror:",t),await Zp(e,r);const s=this.profile.routines.findIndex(i=>i.id===t.id);s!==-1&&this.profile.routines.splice(s,1,t)}catch(s){throw console.error("Error al actualizar la rutina:",s),s}},async createRutinaFirebase(t){const e={...t,fechaCreacion:new Date().toISOString(),idUser:this.profile.id};try{const n=await LC(Wp(Br,"routines"),e),r={id:n.id,...e};return this.profile.routines.unshift(r),n}catch(n){throw console.error("Error al crear la rutina en Firebase:",n),n}}},getters:{getNickname:t=>t.profile.nickname,getUserRoutines:t=>t.profile.routines}}),jl=g_("user",{state:()=>({user:null}),actions:{initAuthListener(){Xv(Di,async t=>{const e=si();t?(this.user={email:t.email,id:t.uid},await e.loadProfile(t.uid,t.email),console.log("Sesión iniciada. Perfil")):(this.user=null,e.$reset())})},async register(t,e){try{return await MP(Di,t,e),{ok:!0,message:"Registration successful!"}}catch(n){return console.error("Error en registro:",n.message),{ok:!1,message:this.translateFirebaseError(n.code)}}},async login(t,e){try{return await LP(Di,t,e),{ok:!0,message:"Login successful!"}}catch(n){return console.error("Error en login:",n.message),{ok:!1,message:this.translateFirebaseError(n.code)}}},translateFirebaseError(t){return t?(console.log(t),{"auth/email-already-in-use":"El email ya esta en uso.","auth/invalid-credential":"Credenciales inválidas.","auth/user-not-found":"No existe una cuenta con ese correo.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos fallidos.","auth/network-request-failed":"Problema de conexión.","auth/invalid-email":"El formato del email no es válido."}[t]||"Error de autenticación. Intentá nuevamente."):"Error desconocido."},async logout(){try{await $P(Di),this.user=null,this.$router.push("/")}catch(t){console.error("Error en logout:",t.message)}},generateDefaultUsername(t){if(!t||typeof t!="string")return"";const e=t.indexOf("@");return e!==-1?t.substring(0,e):t}}}),ek={__name:"NotifierComponent",props:{message:String,type:String},setup(t){const e=t,n=ft(()=>e.type==="success"?"bg-success":"bg-danger");return(r,s)=>(me(),vo(jn,{name:"fade-slide",mode:"out-in",onAfterLeave:s[0]||(s[0]=i=>r.$emit("after-leave"))},{default:We(()=>[je(C("div",{class:Vt(["notifier p-3 rounded text-light",n.value])},it(t.message),3),[[Vn,t.message]])]),_:1}))}},uE=kr(ek,[["__scopeId","data-v-c66f5abe"]]),tk={class:"w-100 m-auto d-flex justify-content-center align-items-center"},nk={class:"d-flex justify-content-between"},rk={class:"mb-3 text-start"},sk={class:"mb-3 text-start"},ik={class:"text-start mt-3 text-light"},ok={__name:"LoginPage",setup(t){const e=Be(""),n=Be(""),r=Be(!1),s=Be(!1),i=Be({message:"",type:""}),o=jl(),l=async()=>{i.value={message:"",type:""},s.value=!1;try{const u=await o.login(e.value,n.value);u.ok?(i.value={message:"¡Inicio de sesión exitoso!",type:"success"},s.value=!0,setTimeout(()=>{s.value=!1,o.$router.push("/dashboard")},2e3)):(i.value={message:u.message,type:"error"},s.value=!0,setTimeout(()=>{s.value=!1},2e3))}catch(u){console.error("Unexpected error:",u),i.value={message:"Error inesperado. Intentá de nuevo.",type:"error"},s.value=!0}},c=()=>{i.value={message:"",type:""}};return Kn(()=>{r.value=!0}),(u,f)=>{const d=Ys("router-link");return me(),ve("main",tk,[ye(jn,{name:"fade-slide-login",mode:"out-in"},{default:We(()=>[je(C("form",{class:"form-login p-4 rounded shadow",onSubmit:$t(l,["prevent"])},[C("div",nk,[f[3]||(f[3]=C("h2",{class:"text-center ms-3 mb-4 fw-bold text-light"},[Me("Login "),C("i",{class:"bi bi-person-check"})],-1)),ye(d,{class:"text-decoration-none",to:"/"},{default:We(()=>f[2]||(f[2]=[C("button",{type:"button",class:"btn-exit btn btn-outline-light"},[C("i",{class:"bi bi-x"})],-1)])),_:1})]),C("div",rk,[f[4]||(f[4]=C("label",{for:"inputEmail",class:"form-label text-light"},"Email",-1)),je(C("input",{required:"","onUpdate:modelValue":f[0]||(f[0]=m=>e.value=m),type:"email",class:"form-control",id:"inputEmail",placeholder:"Ej: leomessi@gmail.com"},null,512),[[jt,e.value]])]),C("div",sk,[f[5]||(f[5]=C("label",{for:"inputPassword",class:"form-label text-light"},"Contraseña",-1)),je(C("input",{required:"","onUpdate:modelValue":f[1]||(f[1]=m=>n.value=m),type:"password",class:"form-control",id:"inputPassword",placeholder:"*********"},null,512),[[jt,n.value]])]),f[8]||(f[8]=C("button",{class:"btn-login btn w-100 py-2 text-light",type:"submit"},[Me("Iniciar Sesion "),C("i",{class:"bi bi-send-fill"})],-1)),je(ye(uE,{message:i.value.message,type:i.value.type,onAfterLeave:c},null,8,["message","type"]),[[Vn,s.value]]),C("p",ik,[f[7]||(f[7]=Me(" ¿Todavia no tenes una cuenta? ")),ye(d,{to:"/register"},{default:We(()=>f[6]||(f[6]=[Me("Registrate")])),_:1})])],544),[[Vn,r.value]])]),_:1})])}}},ak={class:"w-100 m-auto d-flex justify-content-center align-items-center"},lk={class:"d-flex justify-content-between"},ck={class:"mb-3 text-start"},uk={class:"mb-3 text-start"},hk={class:"mb-3 text-start"},fk={class:"text-start mt-3 text-light"},dk={__name:"RegisterPage",setup(t){const e=Be(""),n=Be(""),r=Be(""),s=Be(!1),i=Be(!1),o=Be({message:"",type:""}),l=jl(),c=async()=>{if(o.value={message:"",type:""},i.value=!1,n.value!==r.value){r.value="",o.value={message:"Las contraseñas no coinciden.",type:"error"},i.value=!0;return}try{const f=await l.register(e.value,n.value);f.ok?(o.value={message:f.message,type:"success"},setTimeout(()=>{i.value=!1,l.$router.push("/dashboard")},2e3)):(o.value={message:f.message,type:"error"},setTimeout(()=>{i.value=!1},2e3))}catch(f){console.error("Unexpected error:",f),o.value={message:"Error inesperado. Intentá de nuevo.",type:"error"}}i.value=!0},u=()=>{o.value={message:"",type:""}};return Kn(()=>{s.value=!0}),(f,d)=>{const m=Ys("router-link");return me(),ve("main",ak,[ye(jn,{name:"fade-slide-register",mode:"out-in"},{default:We(()=>[je(C("form",{class:"form-register p-4 rounded shadow",onSubmit:$t(c,["prevent"])},[C("div",lk,[d[4]||(d[4]=C("h2",{class:"text-center ms-3 mb-4 fw-bold text-light"},[Me("Registro "),C("i",{class:"bi bi-person-add"})],-1)),ye(m,{class:"text-decoration-none",to:"/"},{default:We(()=>d[3]||(d[3]=[C("button",{type:"button",class:"btn-exit btn btn-outline-light"},[C("i",{class:"bi bi-x"})],-1)])),_:1})]),C("div",ck,[d[5]||(d[5]=C("label",{for:"inputEmail",class:"form-label text-light"},"Email",-1)),je(C("input",{required:"","onUpdate:modelValue":d[0]||(d[0]=_=>e.value=_),type:"email",class:"form-control",id:"inputEmail",placeholder:"Ej: leomessi@gmail.com"},null,512),[[jt,e.value]])]),C("div",uk,[d[6]||(d[6]=C("label",{for:"inputPassword",class:"form-label text-light"},"Contraseña",-1)),je(C("input",{required:"","onUpdate:modelValue":d[1]||(d[1]=_=>n.value=_),type:"password",class:"form-control",id:"inputPassword",placeholder:"**********"},null,512),[[jt,n.value]])]),C("div",hk,[d[7]||(d[7]=C("label",{for:"confirmPassword",class:"form-label text-light"},"Confirmar contraseña",-1)),je(C("input",{required:"","onUpdate:modelValue":d[2]||(d[2]=_=>r.value=_),type:"password",class:"form-control",id:"confirmPassword",placeholder:"**********"},null,512),[[jt,r.value]])]),d[10]||(d[10]=C("button",{class:"btn-register btn w-100 py-2 text-light",type:"submit"},[Me(" Registrarse "),C("i",{class:"bi bi-send-fill"})],-1)),je(ye(uE,{message:o.value.message,type:o.value.type,onAfterLeave:u},null,8,["message","type"]),[[Vn,i.value]]),C("p",fk,[d[9]||(d[9]=Me(" ¿Ya tenes tu cuenta? ")),ye(m,{to:"/login",class:"login"},{default:We(()=>d[8]||(d[8]=[Me("Inicia sesion")])),_:1})])],544),[[Vn,s.value]])]),_:1})])}}},pk={class:"d-flex"},mk={class:"d-flex flex-column align-items-center"},gk={class:"username-container text-center font-weight-medium"},_k=["title"],yk={class:"h5"},vk={class:"nav text-center nav-pills flex-column mb-auto"},Ek={class:"nav-item"},Tk={class:"nav-item"},wk={class:"nav-item d-flex justify-content-center"},Ik={key:0,class:"heather p-2 w-100 nav-mobile"},bk={__name:"SideBarComponent",setup(t){const e=Be(!1),n=Be(window.innerWidth<768),r=si(),s=jl(),{profile:i}=__(r),o=()=>s.logout(),l=()=>{e.value=!e.value},c=()=>{n.value=window.innerWidth<768,n.value||(e.value=!1)},u=f=>{if(!n.value)return;const d=document.querySelector(".sidebar-profile");e.value&&d&&!d.contains(f.target)&&(e.value=!1)};return Kn(()=>{window.addEventListener("resize",c),document.addEventListener("click",u)}),qu(()=>{window.removeEventListener("resize",c),document.removeEventListener("click",u)}),(f,d)=>{const m=Ys("router-link");return me(),ve("div",pk,[ye(jn,{name:"slide-fade"},{default:We(()=>[!n.value||e.value?(me(),ve("div",{key:0,class:Vt(["sidebar-profile flex-column flex-shrink-0 px-1 text-bg-dark",{"mobile-mode":n.value}])},[C("div",mk,[n.value?Jt("",!0):(me(),vo(m,{key:0,to:"/dashboard",class:"h3 mb-1 text-light"},{default:We(()=>d[0]||(d[0]=[C("i",{class:"bi bi-house"},null,-1)])),_:1})),C("div",gk,[C("p",{class:"ellipsis my-0",title:Fn(i).nickname},[C("span",yk," #"+it(Fn(i).nickname||"Usuario"),1)],8,_k)])]),d[6]||(d[6]=C("hr",null,null,-1)),C("ul",vk,[C("li",Ek,[ye(m,{to:"/dashboard/my-workouts",class:"nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none"},{default:We(()=>d[1]||(d[1]=[C("i",{class:"bi bi-clipboard-check"},null,-1),Me(" Mis Rutinas ")])),_:1})]),d[4]||(d[4]=C("hr",null,null,-1)),C("li",Tk,[ye(m,{to:"/dashboard/my-profile",class:"nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none"},{default:We(()=>d[2]||(d[2]=[C("i",{class:"bi bi-person-circle"},null,-1),Me(" Mi Perfil ")])),_:1})]),d[5]||(d[5]=C("hr",null,null,-1)),C("li",wk,[C("button",{class:"nav-link d-flex flex-column justify-content-center align-items-center text-light px-1",onClick:$t(o,["prevent"])},d[3]||(d[3]=[C("i",{class:"bi bi-box-arrow-right"},null,-1),Me(" Cerrar Sesion ")]))])])],2)):Jt("",!0)]),_:1}),ye(jn,{name:"fade"},{default:We(()=>[n.value&&e.value?(me(),ve("div",{key:0,class:"darkSide",onClick:l})):Jt("",!0)]),_:1}),n.value?(me(),ve("header",Ik,[ye(m,{to:"/dashboard",class:"h2 mb-0 d-flex gap-2"},{default:We(()=>d[7]||(d[7]=[C("i",{class:"bi bi-house"},null,-1)])),_:1}),C("button",{class:"btn btn-outline-info",onClick:$t(l,["stop"])},d[8]||(d[8]=[C("i",{class:"bi bi-list"},null,-1)]))])):Jt("",!0)])}}},Ak=kr(bk,[["__scopeId","data-v-fe246c5e"]]),Rk={class:"w-100"},Sk={__name:"DashboardPage",setup(t){const e=si(),{profile:n}=__(e);return Kn(()=>{console.log(n),n&&console.log("Onmounted: profile",n)}),(r,s)=>{const i=Ys("router-view");return me(),ve("div",Rk,[ye(Ak),ye(i,null,{default:We(({Component:o})=>[ye(jn,{name:"route-fade",mode:"out-in",class:"w-100 h-100 d-flex justify-content-center align-items-center"},{default:We(()=>[(me(),vo(rw(o)))]),_:2},1024)]),_:1})])}}},Ck=kr(Sk,[["__scopeId","data-v-6233ec35"]]),Pk={class:"vh-100 w-100 d-flex align-items-center justify-content-center title-container"},kk={class:"auth-links"},vm={__name:"UnregistredPage",setup(t){return(e,n)=>{const r=Ys("router-link");return me(),ve("div",Pk,[n[2]||(n[2]=C("h2",null,[Me(" my workout app "),C("span",null,"my workout app"),C("span",null,"my workout app"),C("span",null,"Train Smart")],-1)),ye(jn,{name:"fade-slide-nav",appear:""},{default:We(()=>[C("nav",kk,[ye(r,{to:"/login",class:"btn px-4"},{default:We(()=>n[0]||(n[0]=[Me("Login")])),_:1}),ye(r,{to:"/register",class:"btn px-4"},{default:We(()=>n[1]||(n[1]=[Me("Register")])),_:1})])]),_:1})])}}},Ok={props:["rutina"]},Dk={class:"px-2 py-1 rounded-xl shadow-md"},xk={class:"text-start text-sm text-gray-500"},Vk={class:"mb-1"},Nk={class:"d-flex justify-content-between align-items-baseline"},Mk={class:"h5 text-lg text-start font-semibold mb-2"},Lk={class:"h5 text-sm text-end text-gray-400 mb-2"},Fk={class:"space-y-2 list-unstyled"},Uk={class:"font-medium mb-4"},$k={class:"text-sm mt-2 d-flex justify-content-center gap-5 align-items-baseline"},jk={class:"d-flex flex-column"},Bk={class:"d-flex flex-column"},qk={key:0},Hk={key:1},zk={class:"d-flex flex-column"},Wk={key:0},Kk={key:1},Gk={key:0,class:"mb-0"};function Qk(t,e,n,r,s,i){return me(),ve("div",Dk,[C("div",xk,[C("p",Vk," Descanso entre bloques: "+it(n.rutina.descansoBloques)+"s ",1),C("p",null," Descanso entre series: "+it(n.rutina.descansoSeries)+"s ",1)]),e[7]||(e[7]=C("hr",null,null,-1)),(me(!0),ve(It,null,Xi(n.rutina.bloques,(o,l)=>(me(),ve("div",{key:l,class:"my-3"},[C("div",Nk,[C("p",Mk,it(l+1)+"° Bloque ",1),C("p",Lk,it(o.series)+" Series",1)]),C("ul",Fk,[(me(!0),ve(It,null,Xi(o.ejercicios,(c,u)=>(me(),ve("li",{key:u,class:"p-3 rounded"},[C("div",Uk,[C("h4",null,it(c.nombre),1)]),C("div",$k,[C("div",jk,[e[0]||(e[0]=C("span",null,"Reps",-1)),e[1]||(e[1]=Me()),C("span",null,it(c.repeticiones),1)]),C("div",Bk,[e[2]||(e[2]=C("span",null,"Tiempo",-1)),e[3]||(e[3]=Me()),c.tiempo!=0?(me(),ve("span",qk,it(c.tiempo)+"s",1)):(me(),ve("span",Hk,"-"))]),C("div",zk,[e[4]||(e[4]=C("span",null,"Esfuerzo",-1)),e[5]||(e[5]=Me()),c.esfuerzo?(me(),ve("span",Wk,it(c.esfuerzo)+" RIR",1)):(me(),ve("span",Kk,"-"))])]),u!=o.ejercicios.length-1?(me(),ve("hr",Gk)):Jt("",!0)]))),128)),e[6]||(e[6]=C("hr",{class:"mb-0"},null,-1))])]))),128))])}const Yk=kr(Ok,[["render",Qk]]),Jk={class:"my-workouts"},Xk={class:"routines-container"},Zk={class:"text-center mb-3"},eO={class:"d-flex justify-content-center justify-content-md-start ms-md-5 mb-3"},tO={class:"d-flex align-items-baseline text-start"},nO={key:0,class:"loader"},rO={class:"absolute d-flex justify-content-between top-2 left-0 text-sm text-gray-500"},sO={class:"text-center font-weight-medium my-2"},iO=["title"],oO={class:"d-flex justify-content-between align-items-center text-gray-700"},aO=["title"],lO=["innerHTML"],cO={key:0,class:"difficulty-text"},uO=["innerHTML"],hO={key:0,class:"difficulty-text"},fO=["onClick"],dO={key:0,class:"mini-menu"},pO=["onClick"],mO=["onClick"],gO=["onClick"],_O=["onClick"],yO={key:3,class:"edit-resume-container"},vO=["onClick"],EO=["onClick"],TO=["onClick"],wO=["onClick"],IO={__name:"MyWorkoutsPage",setup(t){const e=si(),n=Be(!0),r=Be(window.innerWidth<768),s=Be(new Map),i=Be([]);D_();const o=O_(),l=Be(null),c={"Muy facil":1,Facil:2,Intermedia:3,Dificil:4,"Muy dificil":5},u=Be("fechaCreacionDesc"),f=ft(()=>e.getUserRoutines),d=ft(()=>[...f.value].sort((N,D)=>{if(u.value==="fechaCreacionDesc")return new Date(D.fechaCreacion)-new Date(N.fechaCreacion);if(u.value==="fechaCreacionAsc")return new Date(N.fechaCreacion)-new Date(D.fechaCreacion);{const q=c[N.dificultad]||0,te=c[D.dificultad]||0;return u.value==="asc"?q-te:te-q}}));Yr(l,N=>{N!==null?window.addEventListener("click",m):window.removeEventListener("click",m)}),Kn(async()=>{window.scrollTo({top:0,behavior:"smooth"})}),Yr(()=>e.profile.id,async N=>{if(N){n.value=!0;try{e.getUserRoutines.length===0?await e.getRutinas():n.value=!1}catch(D){console.error("Error al cargar rutinas:",D)}finally{n.value=!1}}},{immediate:!0});const m=N=>{const D=document.querySelector(".dropdown-menu-container");l.value!==null&&!(D!=null&&D.contains(N.target))&&(l.value=null)};function _(N){const D=i.value.indexOf(N);D!==-1?i.value.splice(D,1):(i.value.push(N),yo(()=>{setTimeout(()=>{const q=s.value.get(N);q==null||q.scrollIntoView({behavior:"smooth",block:"start"})},300)}))}async function A(N){if(!confirm("¿Estás seguro de que querés eliminar esta rutina?")){console.log("Eliminar cancelado");return}try{const D=i.value.indexOf(N);D!==-1&&i.value.splice(D,1),await e.deleteRutina(N),n.value=!1}catch(D){console.log("Error al borrar la rutina.",D)}}function O(N){o.push({path:"/dashboard/form-routine",query:{id:N.id}})}async function x(N){n.value=!0;const D={...JSON.parse(JSON.stringify(N)),nombre:N.nombre+" (copia)"};delete D.id,delete D.fechaCreacion;try{const q=await e.createRutinaFirebase(D);n.value=!1,_(q.id)}catch(q){console.error("Error copiando rutina:",q),n.value=!1}}const H=N=>(N.bloques||[]).reduce((D,q)=>D+(q.series||1),0),j=N=>"⚡️".repeat(c[N]||0);return(N,D)=>(me(),ve("div",Jk,[C("div",Xk,[D[15]||(D[15]=C("h1",{class:"my-md-5 mb-3"},[Me("Mis Rutinas "),C("i",{class:"bi bi-clipboard-check"})],-1)),C("div",Zk,[ye(Fn(k_),{to:"/dashboard/form-routine",class:"btn btn-outline-danger px-5 d-flex gap-2 justify-content-center align-items-baseline",id:"add-routine"},{default:We(()=>D[2]||(D[2]=[C("i",{class:"bi bi-plus-circle-fill"},null,-1),Me(" Agregar Rutina ")])),_:1})]),je(C("div",eO,[C("div",tO,[D[4]||(D[4]=C("label",{for:"orderBy",class:"me-2"},"Ordenar por",-1)),je(C("select",{"onUpdate:modelValue":D[0]||(D[0]=q=>u.value=q),id:"orderBy",class:"p-2 m-2 rounded bg-dark text-white"},D[3]||(D[3]=[C("option",{value:"fechaCreacionDesc"},"Más Reciente",-1),C("option",{value:"fechaCreacionAsc"},"Más Antigua",-1),C("option",{value:"asc"},"De más fácil",-1),C("option",{value:"desc"},"De más difícil",-1)]),512),[[Wc,u.value]])])],512),[[Vn,f.value.length>0]]),n.value||f.value.length===0&&n.value?(me(),ve("div",nO)):Jt("",!0),je(C("div",null,[ye(gI,{name:"fade-item",tag:"ul",class:Vt(["routine-resumen",{"column-layout":i.value.length>0}])},{default:We(()=>[(me(!0),ve(It,null,Xi(d.value,q=>(me(),ve("li",{key:q.id,ref_for:!0,ref:te=>s.value.set(q.id,te),class:Vt(["mb-1 routine-card",{expanded:i.value.includes(q.id)}])},[C("div",rO,[C("h6",{class:Vt({h5:i.value.includes(q.id)})},it(q.bloques.length)+" Bloques",3),C("h6",{class:Vt({h5:i.value.includes(q.id)})},it(H(q))+" Series ",3)]),C("div",sO,[C("h3",{class:"ellipsis",title:q.nombre},it(q.nombre),9,iO)]),ye(jn,{name:"expand-fade"},{default:We(()=>[je(ye(Yk,{rutina:q},null,8,["rutina"]),[[Vn,i.value.includes(q.id)]])]),_:2},1024),C("div",oO,[r.value?(me(),ve("h6",{key:0,class:Vt(["mb-0 difficulty-container",{"h4 d-flex flex-column":i.value.includes(q.id)}]),title:q.dificultad},[C("span",{class:"difficulty-icons",innerHTML:j(q.dificultad)},null,8,lO),r.value||i.value.includes(q.id)?(me(),ve("span",cO," ("+it(q.dificultad)+") ",1)):Jt("",!0)],10,aO)):(me(),ve("h6",{key:1,class:Vt({h4:i.value.includes(q.id)})},[C("span",{class:"difficulty-icons",innerHTML:j(q.dificultad)},null,8,uO),r.value||i.value.includes(q.id)?(me(),ve("span",hO," ("+it(q.dificultad)+") ",1)):Jt("",!0)],2)),r.value&&!i.value.includes(q.id)?(me(),ve("div",{key:2,class:"dropdown-menu-container",onClick:D[1]||(D[1]=$t(()=>{},["stop"]))},[C("span",{onClick:$t(te=>l.value=l.value===q.id?null:q.id,["stop"])},D[5]||(D[5]=[C("i",{class:"bi bi-three-dots-vertical"},null,-1)]),8,fO),ye(jn,{name:"fade-item"},{default:We(()=>[l.value===q.id?(me(),ve("ul",dO,[C("li",{onClick:te=>_(q.id)},D[6]||(D[6]=[C("i",{class:"bi bi-arrows-angle-expand"},null,-1)]),8,pO),C("li",{onClick:$t(te=>O(q),["stop"])},D[7]||(D[7]=[C("i",{class:"bi bi-pencil-square"},null,-1)]),8,mO),C("li",{onClick:$t(te=>A(q.id),["stop"])},D[8]||(D[8]=[C("i",{class:"bi bi-trash3"},null,-1)]),8,gO),C("li",{onClick:$t(te=>x(q),["stop"])},D[9]||(D[9]=[C("i",{class:"bi bi-copy"},null,-1)]),8,_O)])):Jt("",!0)]),_:2},1024)])):(me(),ve("div",yO,[C("span",{onClick:te=>_(q.id)},D[10]||(D[10]=[C("i",{class:"bi bi-arrows-angle-expand"},null,-1)]),8,vO),C("span",{onClick:$t(te=>O(q),["stop"])},D[11]||(D[11]=[C("i",{class:"bi bi-pencil-square"},null,-1)]),8,EO),C("span",{onClick:$t(te=>A(q.id),["stop"])},D[12]||(D[12]=[C("i",{class:"bi bi-trash3"},null,-1)]),8,TO),C("span",{onClick:$t(te=>x(q),["stop"])},D[13]||(D[13]=[C("i",{class:"bi bi-copy"},null,-1)]),8,wO)]))])],2))),128))]),_:1},8,["class"])],512),[[Vn,d.value.length>0]]),je(C("div",null,D[14]||(D[14]=[C("h5",null,"No hay rutinas guardadas aún.",-1)]),512),[[Vn,d.value.length===0&&!n.value]])])]))}},bO=kr(IO,[["__scopeId","data-v-bb3412c4"]]),AO={class:"contenedor"},RO={class:"info-container"},SO={class:"w-100 mb-4 justify-content-center d-flex align-items-end gap-3"},CO={class:"text-start w-100"},PO={class:"w-100"},kO={class:"text-start"},OO=["value"],DO={__name:"ProfilePage",setup(t){const e=si(),n=ft(()=>e.profile),r=Be("");Kn(async()=>{r.value=n.value.nickname});const s=async()=>{try{e.setNickname(r.value),alert("Nombre de usuario actualizado correctamente")}catch(i){console.error("Error al actualizar nickname:",i),alert("Ocurrió un error al guardar.")}};return(i,o)=>(me(),ve("div",AO,[o[3]||(o[3]=C("h1",{class:"my-md-5"},[Me("Mi Perfil "),C("i",{class:"bi bi-person-circle"})],-1)),C("div",RO,[C("div",SO,[C("div",CO,[o[1]||(o[1]=C("label",{for:"username",class:"form-label"},"Nombre de Usuario",-1)),je(C("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),spellcheck:"false",autocomplete:"off",id:"username",class:"form-control"},null,512),[[jt,r.value]])]),C("div",null,[C("button",{class:Vt(["btn btn-outline-success btn-guardar",r.value===n.value.nickname?"disabled":""]),onClick:s},"Guardar",2)])]),C("div",PO,[C("div",kO,[o[2]||(o[2]=C("label",{for:"email",class:"form-label"},"Email",-1)),C("input",{type:"text",value:n.value.email,id:"email",class:"form-control",readonly:"",disabled:""},null,8,OO)])])])]))}},xO=kr(DO,[["__scopeId","data-v-dd43bd1b"]]);var hE=typeof global=="object"&&global&&global.Object===Object&&global,VO=typeof self=="object"&&self&&self.Object===Object&&self,An=hE||VO||Function("return this")(),Ks=An.Symbol,fE=Object.prototype,NO=fE.hasOwnProperty,MO=fE.toString,bi=Ks?Ks.toStringTag:void 0;function LO(t){var e=NO.call(t,bi),n=t[bi];try{t[bi]=void 0;var r=!0}catch{}var s=MO.call(t);return r&&(e?t[bi]=n:delete t[bi]),s}var FO=Object.prototype,UO=FO.toString;function $O(t){return UO.call(t)}var jO="[object Null]",BO="[object Undefined]",Em=Ks?Ks.toStringTag:void 0;function Do(t){return t==null?t===void 0?BO:jO:Em&&Em in Object(t)?LO(t):$O(t)}function xo(t){return t!=null&&typeof t=="object"}var Bh=Array.isArray;function Bl(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var qO="[object AsyncFunction]",HO="[object Function]",zO="[object GeneratorFunction]",WO="[object Proxy]";function dE(t){if(!Bl(t))return!1;var e=Do(t);return e==HO||e==zO||e==qO||e==WO}var Dc=An["__core-js_shared__"],Tm=function(){var t=/[^.]+$/.exec(Dc&&Dc.keys&&Dc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function KO(t){return!!Tm&&Tm in t}var GO=Function.prototype,QO=GO.toString;function fs(t){if(t!=null){try{return QO.call(t)}catch{}try{return t+""}catch{}}return""}var YO=/[\\^$.*+?()[\]{}|]/g,JO=/^\[object .+?Constructor\]$/,XO=Function.prototype,ZO=Object.prototype,eD=XO.toString,tD=ZO.hasOwnProperty,nD=RegExp("^"+eD.call(tD).replace(YO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rD(t){if(!Bl(t)||KO(t))return!1;var e=dE(t)?nD:JO;return e.test(fs(t))}function sD(t,e){return t==null?void 0:t[e]}function ds(t,e){var n=sD(t,e);return rD(n)?n:void 0}var Au=ds(An,"WeakMap"),wm=Object.create,iD=function(){function t(){}return function(e){if(!Bl(e))return{};if(wm)return wm(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Im=function(){try{var t=ds(Object,"defineProperty");return t({},"",{}),t}catch{}}();function oD(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var aD=9007199254740991,lD=/^(?:0|[1-9]\d*)$/;function cD(t,e){var n=typeof t;return e=e??aD,!!e&&(n=="number"||n!="symbol"&&lD.test(t))&&t>-1&&t%1==0&&t<e}function uD(t,e,n){e=="__proto__"&&Im?Im(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function pE(t,e){return t===e||t!==t&&e!==e}var hD=Object.prototype,fD=hD.hasOwnProperty;function dD(t,e,n){var r=t[e];(!(fD.call(t,e)&&pE(r,n))||n===void 0&&!(e in t))&&uD(t,e,n)}var pD=9007199254740991;function mE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=pD}function mD(t){return t!=null&&mE(t.length)&&!dE(t)}var gD=Object.prototype;function gE(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||gD;return t===n}function _D(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var yD="[object Arguments]";function bm(t){return xo(t)&&Do(t)==yD}var _E=Object.prototype,vD=_E.hasOwnProperty,ED=_E.propertyIsEnumerable,TD=bm(function(){return arguments}())?bm:function(t){return xo(t)&&vD.call(t,"callee")&&!ED.call(t,"callee")};function wD(){return!1}var yE=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Am=yE&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,ID=Am&&Am.exports===yE,Rm=ID?An.Buffer:void 0,bD=Rm?Rm.isBuffer:void 0,vE=bD||wD,AD="[object Arguments]",RD="[object Array]",SD="[object Boolean]",CD="[object Date]",PD="[object Error]",kD="[object Function]",OD="[object Map]",DD="[object Number]",xD="[object Object]",VD="[object RegExp]",ND="[object Set]",MD="[object String]",LD="[object WeakMap]",FD="[object ArrayBuffer]",UD="[object DataView]",$D="[object Float32Array]",jD="[object Float64Array]",BD="[object Int8Array]",qD="[object Int16Array]",HD="[object Int32Array]",zD="[object Uint8Array]",WD="[object Uint8ClampedArray]",KD="[object Uint16Array]",GD="[object Uint32Array]",$e={};$e[$D]=$e[jD]=$e[BD]=$e[qD]=$e[HD]=$e[zD]=$e[WD]=$e[KD]=$e[GD]=!0;$e[AD]=$e[RD]=$e[FD]=$e[SD]=$e[UD]=$e[CD]=$e[PD]=$e[kD]=$e[OD]=$e[DD]=$e[xD]=$e[VD]=$e[ND]=$e[MD]=$e[LD]=!1;function QD(t){return xo(t)&&mE(t.length)&&!!$e[Do(t)]}function qh(t){return function(e){return t(e)}}var EE=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Ki=EE&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,YD=Ki&&Ki.exports===EE,xc=YD&&hE.process,Gs=function(){try{var t=Ki&&Ki.require&&Ki.require("util").types;return t||xc&&xc.binding&&xc.binding("util")}catch{}}(),Sm=Gs&&Gs.isTypedArray,JD=Sm?qh(Sm):QD,XD=Object.prototype,ZD=XD.hasOwnProperty;function ex(t,e){var n=Bh(t),r=!n&&TD(t),s=!n&&!r&&vE(t),i=!n&&!r&&!s&&JD(t),o=n||r||s||i,l=o?_D(t.length,String):[],c=l.length;for(var u in t)ZD.call(t,u)&&!(o&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||cD(u,c)))&&l.push(u);return l}function TE(t,e){return function(n){return t(e(n))}}var tx=TE(Object.keys,Object),nx=Object.prototype,rx=nx.hasOwnProperty;function sx(t){if(!gE(t))return tx(t);var e=[];for(var n in Object(t))rx.call(t,n)&&n!="constructor"&&e.push(n);return e}function ix(t){return mD(t)?ex(t):sx(t)}var po=ds(Object,"create");function ox(){this.__data__=po?po(null):{},this.size=0}function ax(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var lx="__lodash_hash_undefined__",cx=Object.prototype,ux=cx.hasOwnProperty;function hx(t){var e=this.__data__;if(po){var n=e[t];return n===lx?void 0:n}return ux.call(e,t)?e[t]:void 0}var fx=Object.prototype,dx=fx.hasOwnProperty;function px(t){var e=this.__data__;return po?e[t]!==void 0:dx.call(e,t)}var mx="__lodash_hash_undefined__";function gx(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=po&&e===void 0?mx:e,this}function is(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}is.prototype.clear=ox;is.prototype.delete=ax;is.prototype.get=hx;is.prototype.has=px;is.prototype.set=gx;function _x(){this.__data__=[],this.size=0}function ql(t,e){for(var n=t.length;n--;)if(pE(t[n][0],e))return n;return-1}var yx=Array.prototype,vx=yx.splice;function Ex(t){var e=this.__data__,n=ql(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():vx.call(e,n,1),--this.size,!0}function Tx(t){var e=this.__data__,n=ql(e,t);return n<0?void 0:e[n][1]}function wx(t){return ql(this.__data__,t)>-1}function Ix(t,e){var n=this.__data__,r=ql(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Qn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qn.prototype.clear=_x;Qn.prototype.delete=Ex;Qn.prototype.get=Tx;Qn.prototype.has=wx;Qn.prototype.set=Ix;var mo=ds(An,"Map");function bx(){this.size=0,this.__data__={hash:new is,map:new(mo||Qn),string:new is}}function Ax(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Hl(t,e){var n=t.__data__;return Ax(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Rx(t){var e=Hl(this,t).delete(t);return this.size-=e?1:0,e}function Sx(t){return Hl(this,t).get(t)}function Cx(t){return Hl(this,t).has(t)}function Px(t,e){var n=Hl(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function ii(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ii.prototype.clear=bx;ii.prototype.delete=Rx;ii.prototype.get=Sx;ii.prototype.has=Cx;ii.prototype.set=Px;function kx(t,e){for(var n=-1,r=e.length,s=t.length;++n<r;)t[s+n]=e[n];return t}var Ox=TE(Object.getPrototypeOf,Object);function Dx(){this.__data__=new Qn,this.size=0}function xx(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Vx(t){return this.__data__.get(t)}function Nx(t){return this.__data__.has(t)}var Mx=200;function Lx(t,e){var n=this.__data__;if(n instanceof Qn){var r=n.__data__;if(!mo||r.length<Mx-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ii(r)}return n.set(t,e),this.size=n.size,this}function oi(t){var e=this.__data__=new Qn(t);this.size=e.size}oi.prototype.clear=Dx;oi.prototype.delete=xx;oi.prototype.get=Vx;oi.prototype.has=Nx;oi.prototype.set=Lx;var wE=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Cm=wE&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,Fx=Cm&&Cm.exports===wE,Pm=Fx?An.Buffer:void 0;Pm&&Pm.allocUnsafe;function Ux(t,e){return t.slice()}function $x(t,e){for(var n=-1,r=t==null?0:t.length,s=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[s++]=o)}return i}function jx(){return[]}var Bx=Object.prototype,qx=Bx.propertyIsEnumerable,km=Object.getOwnPropertySymbols,Hx=km?function(t){return t==null?[]:(t=Object(t),$x(km(t),function(e){return qx.call(t,e)}))}:jx;function zx(t,e,n){var r=e(t);return Bh(t)?r:kx(r,n(t))}function Wx(t){return zx(t,ix,Hx)}var Ru=ds(An,"DataView"),Su=ds(An,"Promise"),Cu=ds(An,"Set"),Om="[object Map]",Kx="[object Object]",Dm="[object Promise]",xm="[object Set]",Vm="[object WeakMap]",Nm="[object DataView]",Gx=fs(Ru),Qx=fs(mo),Yx=fs(Su),Jx=fs(Cu),Xx=fs(Au),On=Do;(Ru&&On(new Ru(new ArrayBuffer(1)))!=Nm||mo&&On(new mo)!=Om||Su&&On(Su.resolve())!=Dm||Cu&&On(new Cu)!=xm||Au&&On(new Au)!=Vm)&&(On=function(t){var e=Do(t),n=e==Kx?t.constructor:void 0,r=n?fs(n):"";if(r)switch(r){case Gx:return Nm;case Qx:return Om;case Yx:return Dm;case Jx:return xm;case Xx:return Vm}return e});var Zx=Object.prototype,eV=Zx.hasOwnProperty;function tV(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&eV.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Mm=An.Uint8Array;function Hh(t){var e=new t.constructor(t.byteLength);return new Mm(e).set(new Mm(t)),e}function nV(t,e){var n=Hh(t.buffer);return new t.constructor(n,t.byteOffset,t.byteLength)}var rV=/\w*$/;function sV(t){var e=new t.constructor(t.source,rV.exec(t));return e.lastIndex=t.lastIndex,e}var Lm=Ks?Ks.prototype:void 0,Fm=Lm?Lm.valueOf:void 0;function iV(t){return Fm?Object(Fm.call(t)):{}}function oV(t,e){var n=Hh(t.buffer);return new t.constructor(n,t.byteOffset,t.length)}var aV="[object Boolean]",lV="[object Date]",cV="[object Map]",uV="[object Number]",hV="[object RegExp]",fV="[object Set]",dV="[object String]",pV="[object Symbol]",mV="[object ArrayBuffer]",gV="[object DataView]",_V="[object Float32Array]",yV="[object Float64Array]",vV="[object Int8Array]",EV="[object Int16Array]",TV="[object Int32Array]",wV="[object Uint8Array]",IV="[object Uint8ClampedArray]",bV="[object Uint16Array]",AV="[object Uint32Array]";function RV(t,e,n){var r=t.constructor;switch(e){case mV:return Hh(t);case aV:case lV:return new r(+t);case gV:return nV(t);case _V:case yV:case vV:case EV:case TV:case wV:case IV:case bV:case AV:return oV(t);case cV:return new r;case uV:case dV:return new r(t);case hV:return sV(t);case fV:return new r;case pV:return iV(t)}}function SV(t){return typeof t.constructor=="function"&&!gE(t)?iD(Ox(t)):{}}var CV="[object Map]";function PV(t){return xo(t)&&On(t)==CV}var Um=Gs&&Gs.isMap,kV=Um?qh(Um):PV,OV="[object Set]";function DV(t){return xo(t)&&On(t)==OV}var $m=Gs&&Gs.isSet,xV=$m?qh($m):DV,IE="[object Arguments]",VV="[object Array]",NV="[object Boolean]",MV="[object Date]",LV="[object Error]",bE="[object Function]",FV="[object GeneratorFunction]",UV="[object Map]",$V="[object Number]",AE="[object Object]",jV="[object RegExp]",BV="[object Set]",qV="[object String]",HV="[object Symbol]",zV="[object WeakMap]",WV="[object ArrayBuffer]",KV="[object DataView]",GV="[object Float32Array]",QV="[object Float64Array]",YV="[object Int8Array]",JV="[object Int16Array]",XV="[object Int32Array]",ZV="[object Uint8Array]",eN="[object Uint8ClampedArray]",tN="[object Uint16Array]",nN="[object Uint32Array]",Le={};Le[IE]=Le[VV]=Le[WV]=Le[KV]=Le[NV]=Le[MV]=Le[GV]=Le[QV]=Le[YV]=Le[JV]=Le[XV]=Le[UV]=Le[$V]=Le[AE]=Le[jV]=Le[BV]=Le[qV]=Le[HV]=Le[ZV]=Le[eN]=Le[tN]=Le[nN]=!0;Le[LV]=Le[bE]=Le[zV]=!1;function Ta(t,e,n,r,s,i){var o;if(o!==void 0)return o;if(!Bl(t))return t;var l=Bh(t);if(l)o=tV(t);else{var c=On(t),u=c==bE||c==FV;if(vE(t))return Ux(t);if(c==AE||c==IE||u&&!s)o=u?{}:SV(t);else{if(!Le[c])return s?t:{};o=RV(t,c)}}i||(i=new oi);var f=i.get(t);if(f)return f;i.set(t,o),xV(t)?t.forEach(function(_){o.add(Ta(_,e,n,_,t,i))}):kV(t)&&t.forEach(function(_,A){o.set(A,Ta(_,e,n,A,t,i))});var d=Wx,m=l?void 0:d(t);return oD(m||t,function(_,A){m&&(A=_,_=t[A]),dD(o,A,Ta(_,e,n,A,t,i))}),o}var rN=1,sN=4;function iN(t){return Ta(t,rN|sN)}const oN={class:"add-routine-form"},aN={class:"text-center mb-4"},lN={class:"mb-3 text-start"},cN={class:"mb-3 flex-column d-flex justify-content-center align-items-start col-md-3"},uN={class:"mb-3 text-start d-flex justify-content-start gap-5 align-items-center"},hN={class:"mb-3 text-start d-flex justify-content-start gap-5 align-items-center"},fN={class:"mb-3 d-flex justify-content-between align-items-baseline"},dN={class:"text-start m-0"},pN={class:"d-flex flex-column align-items-center justify-content-center col-md-2"},mN=["onUpdate:modelValue","id"],gN={class:"row w-100 d-flex flex-column justify-content-center gap-3"},_N={class:"w-100 mb-2"},yN=["onUpdate:modelValue","id"],vN={class:"setting-exercise"},EN={class:"col-md-3 mb-2 text-center"},TN=["onUpdate:modelValue","id"],wN={class:"col-md-3 text-center"},IN=["onUpdate:modelValue","id"],bN={class:"col-md-3 text-center"},AN=["onUpdate:modelValue","id"],RN={class:"d-flex w-100 justify-content-center gap-2"},SN=["onClick"],CN=["onClick"],PN={class:"btns-set-bloque"},kN=["onClick"],ON={key:0,class:"loader-form"},DN={__name:"FormRoutine",props:{rutinaParaEditar:Object},setup(t){const e=si(),n=D_(),r=O_(),s=Be(!1),i=Qs({nombre:"",dificultad:"Intermedia",descansoBloques:60,descansoSeries:60,bloques:[{series:3,ejercicios:[{nombre:"",repeticiones:1,tiempo:0,esfuerzo:0}]}]});Kn(async()=>{window.scrollTo({top:0,behavior:"smooth"});const _=n.query.id;if(_)try{const A=e.getRutinaLocal(_);A?Object.assign(i,iN(A)):console.warn(`No se encontró la rutina con ID: ${_}`)}catch(A){console.error("Error al cargar la rutina para editar:",A)}});const o=()=>{r.push("/dashboard/my-workouts")},l=async()=>{s.value=!0;try{i.id?await e.updateRutina({...i}):await e.createRutinaFirebase({...i}),s.value=!1,r.push("/dashboard/my-workouts")}catch(_){console.error("Error al guardar la rutina:",_)}},c=()=>{i.bloques.push({series:3,ejercicios:[{nombre:"",repeticiones:1,tiempo:0,esfuerzo:0}]})},u=_=>{i.bloques.splice(_,1)},f=_=>{i.bloques[_].ejercicios.push({nombre:"",repeticiones:1,tiempo:0,esfuerzo:0})},d=(_,A)=>{i.bloques[_].ejercicios.splice(A,1)},m=_=>_===null||_===""||_===void 0?"input-alert":"";return(_,A)=>(me(),ve("div",oN,[C("h2",aN,it(i.id?"Editar Rutina":"Agregar Nueva Rutina"),1),C("form",{onSubmit:$t(l,["prevent"]),class:"p-2 p-md-4"},[C("div",lN,[A[4]||(A[4]=C("label",{for:"nombre",class:"form-label"},"Nombre",-1)),je(C("input",{type:"text","onUpdate:modelValue":A[0]||(A[0]=O=>i.nombre=O),spellcheck:"false",autocomplete:"on",class:Vt(["form-control",m(i.nombre)]),id:"nombre",required:""},null,2),[[jt,i.nombre]])]),C("div",cN,[A[6]||(A[6]=C("label",{for:"dificultad",class:"form-label"},"Dificultad",-1)),je(C("select",{"onUpdate:modelValue":A[1]||(A[1]=O=>i.dificultad=O),class:"form-select text-info input-difficulty",id:"dificultad",required:""},A[5]||(A[5]=[Mw('<option value="Muy facil" data-v-942c9ba2>Muy fácil</option><option value="Facil" data-v-942c9ba2>Fácil</option><option value="Intermedia" data-v-942c9ba2>Intermedia</option><option value="Dificil" data-v-942c9ba2>Difícil</option><option value="Muy dificil" data-v-942c9ba2>Muy difícil</option>',5)]),512),[[Wc,i.dificultad]])]),C("div",uN,[A[7]||(A[7]=C("label",{for:"descansoBloques",class:"form-label w-50 mb-0"}," Descanso entre Bloques ",-1)),je(C("input",{type:"number","onUpdate:modelValue":A[2]||(A[2]=O=>i.descansoBloques=O),class:"form-control input-number",id:"descansoBloques"},null,512),[[jt,i.descansoBloques]])]),C("div",hN,[A[8]||(A[8]=C("label",{for:"descansoSeries",class:"form-label w-50 mb-0"},"Descanso entre Series",-1)),je(C("input",{type:"number","onUpdate:modelValue":A[3]||(A[3]=O=>i.descansoSeries=O),class:"form-control input-number",id:"descansoSeries"},null,512),[[jt,i.descansoSeries]])]),(me(!0),ve(It,null,Xi(i.bloques,(O,x)=>(me(),ve("div",{key:x,class:"bloque-container mb-3 px-2 pt-2 pb-3 rounded text-start"},[C("div",fN,[C("h5",dN,it(x+1)+"° Bloque",1),C("div",pN,[A[9]||(A[9]=C("label",{for:"series-bloque-{{ index }}",class:"form-label mb-1"},"Series",-1)),je(C("input",{type:"number","onUpdate:modelValue":H=>O.series=H,class:"form-control input-number",id:"series-bloque-"+x,min:"1"},null,8,mN),[[jt,O.series]])])]),(me(!0),ve(It,null,Xi(O.ejercicios,(H,j)=>(me(),ve("div",{key:j,class:"ejercicio-container p-2 d-flex flex-column align-items-center gap-3"},[C("div",gN,[C("div",_N,[A[10]||(A[10]=C("label",{for:"ejercicio-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Ejercicio",-1)),je(C("input",{type:"text","onUpdate:modelValue":N=>H.nombre=N,spellcheck:"false",autocomplete:"on",required:"",class:Vt(["form-control",m(i.nombre)]),id:"ejercicio-"+x+"-"+j},null,10,yN),[[jt,H.nombre]])])]),C("div",vN,[C("div",EN,[A[11]||(A[11]=C("label",{for:"reps-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Reps",-1)),je(C("input",{type:"number","onUpdate:modelValue":N=>H.repeticiones=N,class:"form-control input-number",id:"reps-"+x+"-"+j,min:"1"},null,8,TN),[[jt,H.repeticiones]])]),C("div",wN,[A[12]||(A[12]=C("label",{for:"tiempo-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Tiempo",-1)),je(C("input",{type:"number","onUpdate:modelValue":N=>H.tiempo=N,class:"form-control input-number",id:"tiempo-"+x+"-"+j,min:"0"},null,8,IN),[[jt,H.tiempo]])]),C("div",bN,[A[14]||(A[14]=C("label",{for:"esfuerzo-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Esfuerzo",-1)),je(C("select",{"onUpdate:modelValue":N=>H.esfuerzo=N,class:"form-select text-info input-rir",id:"esfuerzo-"+x+"-"+j},A[13]||(A[13]=[C("option",{select:"",value:""},"-",-1),C("option",{value:"1"},"RIR 1",-1),C("option",{value:"2"},"RIR 2",-1),C("option",{value:"3"},"RIR 3",-1)]),8,AN),[[Wc,H.esfuerzo]])])]),C("div",RN,[C("button",{type:"button",onClick:N=>f(x),class:"btn btn-outline-info"},A[15]||(A[15]=[C("i",{class:"bi bi-plus-circle-fill"},null,-1),Me(" Ejercicio ")]),8,SN),j>0?(me(),ve("button",{key:0,type:"button",onClick:N=>d(x,j),class:"btn btn-outline-danger delete-exercise"},A[16]||(A[16]=[C("i",{class:"bi bi-trash-fill"},null,-1),Me(" Ejercicio ")]),8,CN)):Jt("",!0)])]))),128)),C("div",PN,[x>0?(me(),ve("button",{key:0,type:"button",onClick:H=>u(x),class:"btn btn-outline-danger"},A[17]||(A[17]=[C("i",{class:"bi bi-trash-fill"},null,-1),Me(" Bloque ")]),8,kN)):Jt("",!0)])]))),128)),C("div",{class:"text-center d-flex flex-column align-items-center"},[C("button",{type:"button",onClick:c,class:"btn btn-outline-info"},A[18]||(A[18]=[C("i",{class:"bi bi-plus-circle-fill"},null,-1),Me(" Agregar Bloque ")]))]),A[21]||(A[21]=C("hr",null,null,-1)),s.value?(me(),ve("div",ON)):Jt("",!0),C("div",{class:"text-center d-flex btns-set-routine flex-column align-items-center"},[A[20]||(A[20]=C("button",{type:"submit",class:"btn btn-success mt-0"},[C("i",{class:"bi bi-box-arrow-down"}),Me(" Guardar rutina ")],-1)),C("button",{type:"button",onClick:o,class:"btn btn-danger mt-3"},A[19]||(A[19]=[C("i",{class:"bi bi-x-circle"},null,-1),Me(" Cancelar ")]))])],32)]))}},xN=kr(DN,[["__scopeId","data-v-942c9ba2"]]),VN=[{path:"my-workout-app/register",component:dk},{path:"my-workout-app/login",component:ok},{path:"my-workout-app/dashboard",component:Ck,children:[{path:"",redirect:"my-workout-app/dashboard/my-workouts"},{path:"/dashboard/my-workouts",component:bO},{path:"/dashboard/my-profile",component:xO},{path:"/dashboard/form-routine",component:xN}],meta:{requiresAuth:!0}},{path:"my-workout-app/unregistred",component:vm},{path:"my-workout-app/:pathMatch(.*)*",component:vm}],zh=Fb({history:pb(),routes:VN});let Vc=null;function NN(){return new Promise(t=>{Vc!==null?t(Vc):Xv(Di,e=>{Vc=e,t(e)})})}zh.beforeEach(async(t,e,n)=>{const r=await NN();if(t.path==="/login"&&r)return n("/dashboard");if(t.matched.some(s=>s.meta.requiresAuth)&&!r)return n("/login");n()});const Wh=RI(LI),RE=PI();RE.use(({store:t})=>{t.$router=al(zh)});Wh.use(RE);Wh.use(zh);const MN=jl();MN.initAuthListener();Wh.mount("#app")});export default LN();
