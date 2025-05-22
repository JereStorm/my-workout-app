var QE=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var XN=QE((Ht,zt)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Ps=[],vn=()=>{},YE=()=>!1,el=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ku=t=>t.startsWith("onUpdate:"),it=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},JE=Object.prototype.hasOwnProperty,ke=(t,e)=>JE.call(t,e),ie=Array.isArray,ks=t=>go(t)==="[object Map]",tl=t=>go(t)==="[object Set]",$f=t=>go(t)==="[object Date]",me=t=>typeof t=="function",Je=t=>typeof t=="string",bn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",jm=t=>(De(t)||me(t))&&me(t.then)&&me(t.catch),Bm=Object.prototype.toString,go=t=>Bm.call(t),XE=t=>go(t).slice(8,-1),qm=t=>go(t)==="[object Object]",xu=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vi=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ZE=/-(\w)/g,nn=nl(t=>t.replace(ZE,(e,n)=>n?n.toUpperCase():"")),eT=/\B([A-Z])/g,as=nl(t=>t.replace(eT,"-$1").toLowerCase()),rl=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),oc=nl(t=>t?`on${rl(t)}`:""),gr=(t,e)=>!Object.is(t,e),oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},tT=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let jf;const sl=()=>jf||(jf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Du(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?iT(r):Du(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||De(t))return t}const nT=/;(?![^(]*\))/g,rT=/:([^]+)/,sT=/\/\*[^]*?\*\//g;function iT(t){const e={};return t.replace(sT,"").split(nT).forEach(n=>{if(n){const r=n.split(rT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vt(t){let e="";if(Je(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Vt(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aT=Pu(oT);function zm(t){return!!t||t===""}function lT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=il(t[r],e[r]);return n}function il(t,e){if(t===e)return!0;let n=$f(t),r=$f(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=bn(t),r=bn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?lT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!il(t[o],e[o]))return!1}}return String(t)===String(e)}function cT(t,e){return t.findIndex(n=>il(n,e))}const Wm=t=>!!(t&&t.__v_isRef===!0),We=t=>Je(t)?t:t==null?"":ie(t)||De(t)&&(t.toString===Bm||!me(t.toString))?Wm(t)?We(t.value):JSON.stringify(t,Km,2):String(t),Km=(t,e)=>Wm(e)?Km(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ac(r,i)+" =>"]=s,n),{})}:tl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ac(n))}:bn(e)?ac(e):De(e)&&!ie(e)&&!qm(e)?String(e):e,ac=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qm(t){return new Gm(t)}function Ym(){return Ct}function uT(t,e=!1){Ct&&Ct.cleanups.push(t)}let Le;const lc=new WeakSet;class Jm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lc.has(this)&&(lc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bf(this),eg(this);const e=Le,n=an;Le=this,an=!0;try{return this.fn()}finally{tg(this),Le=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,Bf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nc(this)&&this.run()}get dirty(){return Nc(this)}}let Xm=0,Ni,Mi;function Zm(t,e=!1){if(t.flags|=8,e){t.next=Mi,Mi=t;return}t.next=Ni,Ni=t}function Vu(){Xm++}function Nu(){if(--Xm>0)return;if(Mi){let e=Mi;for(Mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ni;){let e=Ni;for(Ni=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function eg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mu(r),hT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Nc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ng(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi))return;t.globalVersion=Qi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Nc(t)){t.flags&=-3;return}const n=Le,r=an;Le=t,an=!0;try{eg(t);const s=t.fn(t._value);(e.version===0||gr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,an=r,tg(t),t.flags&=-3}}function Mu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const rg=[];function Or(){rg.push(an),an=!1}function xr(){const t=rg.pop();an=t===void 0?!0:t}function Bf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Qi=0;class fT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!an||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new fT(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){Vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nu()}}}function sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ia=new WeakMap,Yr=Symbol(""),Mc=Symbol(""),Yi=Symbol("");function wt(t,e,n){if(an&&Le){let r=Ia.get(t);r||Ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Lu),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=Ia.get(t);if(!o){Qi++;return}const l=c=>{c&&c.trigger()};if(Vu(),e==="clear")o.forEach(l);else{const c=ie(t),u=c&&xu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Yi||!bn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Yi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Yr)),ks(t)&&l(o.get(Mc)));break;case"delete":c||(l(o.get(Yr)),ks(t)&&l(o.get(Mc)));break;case"set":ks(t)&&l(o.get(Yr));break}}Nu()}function dT(t,e){const n=Ia.get(t);return n&&n.get(e)}function vs(t){const e=Ie(t);return e===t?e:(wt(e,"iterate",Yi),Zt(t)?e:e.map(It))}function ol(t){return wt(t=Ie(t),"iterate",Yi),t}const pT={__proto__:null,[Symbol.iterator](){return cc(this,Symbol.iterator,It)},concat(...t){return vs(this).concat(...t.map(e=>ie(e)?vs(e):e))},entries(){return cc(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return Pn(this,"every",t,e,void 0,arguments)},filter(t,e){return Pn(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return Pn(this,"find",t,e,It,arguments)},findIndex(t,e){return Pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pn(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return Pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return uc(this,"includes",t)},indexOf(...t){return uc(this,"indexOf",t)},join(t){return vs(this).join(t)},lastIndexOf(...t){return uc(this,"lastIndexOf",t)},map(t,e){return Pn(this,"map",t,e,void 0,arguments)},pop(){return Ti(this,"pop")},push(...t){return Ti(this,"push",t)},reduce(t,...e){return qf(this,"reduce",t,e)},reduceRight(t,...e){return qf(this,"reduceRight",t,e)},shift(){return Ti(this,"shift")},some(t,e){return Pn(this,"some",t,e,void 0,arguments)},splice(...t){return Ti(this,"splice",t)},toReversed(){return vs(this).toReversed()},toSorted(t){return vs(this).toSorted(t)},toSpliced(...t){return vs(this).toSpliced(...t)},unshift(...t){return Ti(this,"unshift",t)},values(){return cc(this,"values",It)}};function cc(t,e,n){const r=ol(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const mT=Array.prototype;function Pn(t,e,n,r,s,i){const o=ol(t),l=o!==t&&!Zt(t),c=o[e];if(c!==mT[e]){const p=c.apply(t,i);return l?It(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,It(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function qf(t,e,n,r){const s=ol(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,It(l),c,t)}),s[e](i,...r)}function uc(t,e,n){const r=Ie(t);wt(r,"iterate",Yi);const s=r[e](...n);return(s===-1||s===!1)&&$u(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Ti(t,e,n=[]){Or(),Vu();const r=Ie(t)[e].apply(t,n);return Nu(),xr(),r}const gT=Pu("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function _T(t){bn(t)||(t=String(t));const e=Ie(this);return wt(e,"has",t),e.hasOwnProperty(t)}class og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ST:ug:i?cg:lg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=pT[n]))return c;if(n==="hasOwnProperty")return _T}const l=Reflect.get(e,n,Ge(e)?e:r);return(bn(n)?ig.has(n):gT(n))||(s||wt(e,"get",n),i)?l:Ge(l)?o&&xu(n)?l:l.value:De(l)?s?fg(l):Ys(l):l}}class ag extends og{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Xr(i);if(!Zt(r)&&!Xr(r)&&(i=Ie(i),r=Ie(r)),!ie(e)&&Ge(i)&&!Ge(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&xu(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ge(e)?e:s);return e===Ie(s)&&(o?gr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!bn(n)||!ig.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",ie(e)?"length":Yr),Reflect.ownKeys(e)}}class yT extends og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vT=new ag,ET=new yT,TT=new ag(!0),Lc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function wT(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ks(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Lc:e?Fc:It;return!e&&wt(i,"iterate",c?Mc:Yr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function IT(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(gr(s,l)&&wt(o,"get",s),wt(o,"get",l));const{has:c}=Yo(o),u=e?Lc:t?Fc:It;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&wt(Ie(s),"iterate",Yr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(gr(s,l)&&wt(o,"has",s),wt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?Lc:t?Fc:It;return!t&&wt(c,"iterate",Yr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return it(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!Zt(s)&&!Xr(s)&&(s=Ie(s));const i=Ie(this);return Yo(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!Xr(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=Yo(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?gr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=Yo(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Dn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wT(s,t,e)}),n}function Fu(t,e){const n=IT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const bT={get:Fu(!1,!1)},AT={get:Fu(!1,!0)},RT={get:Fu(!0,!1)},lg=new WeakMap,cg=new WeakMap,ug=new WeakMap,ST=new WeakMap;function CT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PT(t){return t.__v_skip||!Object.isExtensible(t)?0:CT(XE(t))}function Ys(t){return Xr(t)?t:Uu(t,!1,vT,bT,lg)}function hg(t){return Uu(t,!1,TT,AT,cg)}function fg(t){return Uu(t,!0,ET,RT,ug)}function Uu(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=PT(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Fn(t){return Xr(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function $u(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function al(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Hm(t,"__v_skip",!0),t}const It=t=>De(t)?Ys(t):t,Fc=t=>De(t)?fg(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function Fe(t){return dg(t,!1)}function kT(t){return dg(t,!0)}function dg(t,e){return Ge(t)?t:new OT(t,e)}class OT{constructor(e,n){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||Xr(e);e=r?e:Ie(e),gr(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function Wt(t){return Ge(t)?t.value:t}const xT={get:(t,e,n)=>e==="__v_raw"?t:Wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pg(t){return Fn(t)?t:new Proxy(t,xT)}function DT(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=mg(t,n);return e}class VT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dT(Ie(this._object),this._key)}}class NT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function MT(t,e,n){return Ge(t)?t:me(t)?new NT(t):De(t)&&arguments.length>1?mg(t,e,n):Fe(t)}function mg(t,e,n){const r=t[e];return Ge(r)?r:new VT(t,e,n)}class LT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Zm(this,!0),!0}get value(){const e=this.dep.track();return ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FT(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new LT(r,s,n)}const Xo={},ba=new WeakMap;let zr;function UT(t,e=!1,n=zr){if(n){let r=ba.get(n);r||ba.set(n,r=[]),r.push(t)}}function $T(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=O=>s?O:Zt(O)||s===!1||s===0?Vn(O,1):Vn(O);let f,p,m,_,C=!1,D=!1;if(Ge(t)?(p=()=>t.value,C=Zt(t)):Fn(t)?(p=()=>u(t),C=!0):ie(t)?(D=!0,C=t.some(O=>Fn(O)||Zt(O)),p=()=>t.map(O=>{if(Ge(O))return O.value;if(Fn(O))return u(O);if(me(O))return c?c(O,2):O()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Or();try{m()}finally{xr()}}const O=zr;zr=f;try{return c?c(t,3,[_]):t(_)}finally{zr=O}}:p=vn,e&&s){const O=p,L=s===!0?1/0:s;p=()=>Vn(O(),L)}const M=Ym(),$=()=>{f.stop(),M&&M.active&&Ou(M.effects,f)};if(i&&e){const O=e;e=(...L)=>{O(...L),$()}}let x=D?new Array(t.length).fill(Xo):Xo;const N=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const L=f.run();if(s||C||(D?L.some((J,A)=>gr(J,x[A])):gr(L,x))){m&&m();const J=zr;zr=f;try{const A=[L,x===Xo?void 0:D&&x[0]===Xo?[]:x,_];c?c(e,3,A):e(...A),x=L}finally{zr=J}}}else f.run()};return l&&l(N),f=new Jm(p),f.scheduler=o?()=>o(N,!1):N,_=O=>UT(O,!1,f),m=f.onStop=()=>{const O=ba.get(f);if(O){if(c)c(O,4);else for(const L of O)L();ba.delete(f)}},e?r?N(!0):x=f.run():o?o(N.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function Vn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ge(t))Vn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(tl(t)||ks(t))t.forEach(r=>{Vn(r,e,n)});else if(qm(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(t,e,n,r){try{return r?t(...r):t()}catch(s){ll(s,e,n)}}function ln(t,e,n,r){if(me(t)){const s=_o(t,e,n,r);return s&&jm(s)&&s.catch(i=>{ll(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function ll(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Or(),_o(i,null,10,[t,c,u]),xr();return}}jT(t,n,s,r,o)}function jT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let gn=-1;const Os=[];let ar=null,Ts=0;const gg=Promise.resolve();let Aa=null;function yo(t){const e=Aa||gg;return t?e.then(this?t.bind(this):t):e}function BT(t){let e=gn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=Ji(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ju(t){if(!(t.flags&1)){const e=Ji(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=Ji(n)?Pt.push(t):Pt.splice(BT(e),0,t),t.flags|=1,_g()}}function _g(){Aa||(Aa=gg.then(vg))}function qT(t){ie(t)?Os.push(...t):ar&&t.id===-1?ar.splice(Ts+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),_g()}function Hf(t,e,n=gn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yg(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>Ji(n)-Ji(r));if(Os.length=0,ar){ar.push(...e);return}for(ar=e,Ts=0;Ts<ar.length;Ts++){const n=ar[Ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,Ts=0}}const Ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vg(t){try{for(gn=0;gn<Pt.length;gn++){const e=Pt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Pt.length;gn++){const e=Pt[gn];e&&(e.flags&=-2)}gn=-1,Pt.length=0,yg(),Aa=null,(Pt.length||Os.length)&&vg()}}let kt=null,Eg=null;function Ra(t){const e=kt;return kt=t,Eg=t&&t.type.__scopeId||null,e}function Ke(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&td(-1);const i=Ra(e);let o;try{o=t(...s)}finally{Ra(i),r._d&&td(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Be(t,e){if(kt===null)return t;const n=dl(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Or(),ln(c,n,8,[t.el,l,t,e]),xr())}}const HT=Symbol("_vte"),Tg=t=>t.__isTeleport,lr=Symbol("_leaveCb"),Zo=Symbol("_enterCb");function wg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{t.isMounted=!0}),Og(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],Ig={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},bg=t=>{const e=t.subTree;return e.component?bg(e.component):e},zT={name:"BaseTransition",props:Ig,setup(t,{slots:e}){const n=t_(),r=wg();return()=>{const s=e.default&&Bu(e.default(),!0);if(!s||!s.length)return;const i=Ag(s),o=Ie(t),{mode:l}=o;if(r.isLeaving)return hc(i);const c=zf(i);if(!c)return hc(i);let u=Xi(c,o,r,n,p=>u=p);c.type!==Nt&&Zr(c,u);let f=n.subTree&&zf(n.subTree);if(f&&f.type!==Nt&&!Kr(c,f)&&bg(n).type!==Nt){let p=Xi(f,o,r,n);if(Zr(f,p),l==="out-in"&&c.type!==Nt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},hc(i);l==="in-out"&&c.type!==Nt?p.delayLeave=(m,_,C)=>{const D=Rg(r,f);D[String(f.key)]=f,m[lr]=()=>{_(),m[lr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Ag(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nt){e=n;break}}return e}const WT=zT;function Rg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Xi(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:C,onLeaveCancelled:D,onBeforeAppear:M,onAppear:$,onAfterAppear:x,onAppearCancelled:N}=e,O=String(t.key),L=Rg(n,t),J=(y,w)=>{y&&ln(y,r,9,w)},A=(y,w)=>{const R=w[1];J(y,w),ie(y)?y.every(b=>b.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=M||c;else return;y[lr]&&y[lr](!0);const R=L[O];R&&Kr(t,R)&&R.el[lr]&&R.el[lr](),J(w,[y])},enter(y){let w=u,R=f,b=p;if(!n.isMounted)if(i)w=$||u,R=x||f,b=N||p;else return;let E=!1;const Ce=y[Zo]=Xe=>{E||(E=!0,Xe?J(b,[y]):J(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Zo]=void 0)};w?A(w,[y,Ce]):Ce()},leave(y,w){const R=String(t.key);if(y[Zo]&&y[Zo](!0),n.isUnmounting)return w();J(m,[y]);let b=!1;const E=y[lr]=Ce=>{b||(b=!0,w(),Ce?J(D,[y]):J(C,[y]),y[lr]=void 0,L[R]===t&&delete L[R])};L[R]=t,_?A(_,[y,E]):E()},clone(y){const w=Xi(y,e,n,r,s);return s&&s(w),w}};return v}function hc(t){if(cl(t))return t=br(t),t.children=null,t}function zf(t){if(!cl(t))return Tg(t.type)&&t.children?Ag(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function Zr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===nt?(o.patchFlag&128&&s++,r=r.concat(Bu(o.children,e,l))):(e||o.type!==Nt)&&r.push(l!=null?br(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sg(t,e){return me(t)?it({name:t.name},e,{setup:t}):t}function Cg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sa(t,e,n,r,s=!1){if(ie(t)){t.forEach((C,D)=>Sa(C,e&&(ie(e)?e[D]:e),n,r,s));return}if(Li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?dl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,m=Ie(p),_=p===Ne?()=>!1:C=>ke(m,C);if(u!=null&&u!==c&&(Je(u)?(f[u]=null,_(u)&&(p[u]=null)):Ge(u)&&(u.value=null)),me(c))_o(c,l,12,[o,f]);else{const C=Je(c),D=Ge(c);if(C||D){const M=()=>{if(t.f){const $=C?_(c)?p[c]:f[c]:c.value;s?ie($)&&Ou($,i):ie($)?$.includes(i)||$.push(i):C?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=o,_(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(f[t.k]=o))};o?(M.id=-1,Ut(M,n)):M()}}}sl().requestIdleCallback;sl().cancelIdleCallback;const Li=t=>!!t.type.__asyncLoader,cl=t=>t.type.__isKeepAlive;function KT(t,e){Pg(t,"a",e)}function GT(t,e){Pg(t,"da",e)}function Pg(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ul(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cl(s.parent.vnode)&&QT(r,e,n,s),s=s.parent}}function QT(t,e,n,r){const s=ul(e,t,r,!0);qu(()=>{Ou(r[e],s)},n)}function ul(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Or();const l=Eo(n),c=ln(e,n,t,o);return l(),xr(),c});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=at)=>{(!eo||t==="sp")&&ul(t,(...r)=>e(...r),n)},YT=Wn("bm"),Kn=Wn("m"),JT=Wn("bu"),kg=Wn("u"),Og=Wn("bum"),qu=Wn("um"),XT=Wn("sp"),ZT=Wn("rtg"),ew=Wn("rtc");function tw(t,e=at){ul("ec",t,e)}const xg="components";function Js(t,e){return Vg(xg,t,!0,e)||t}const Dg=Symbol.for("v-ndc");function nw(t){return Je(t)?Vg(xg,t,!1)||t:t||Dg}function Vg(t,e,n=!0,r=!1){const s=kt||at;if(s){const i=s.type;{const l=Hw(i,!1);if(l&&(l===e||l===nn(e)||l===rl(nn(e))))return i}const o=Wf(s[t]||i[t],e)||Wf(s.appContext[t],e);return!o&&r?i:o}}function Wf(t,e){return t&&(t[e]||t[nn(e)]||t[rl(nn(e))])}function _r(t,e,n,r){let s;const i=n,o=ie(t);if(o||Je(t)){const l=o&&Fn(t);let c=!1;l&&(c=!Zt(t),t=ol(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?It(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Uc=t=>t?n_(t)?dl(t):Uc(t.parent):null,Fi=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uc(t.parent),$root:t=>Uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mg(t),$forceUpdate:t=>t.f||(t.f=()=>{ju(t.update)}),$nextTick:t=>t.n||(t.n=yo.bind(t.proxy)),$watch:t=>bw.bind(t)}),fc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ke(t,e),rw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==Ne&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ne&&ke(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const f=Fi[e];let p,m;if(f)return e==="$attrs"&&wt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==Ne&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&ke(t,o)||fc(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(Fi,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kf(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $c=!0;function sw(t){const e=Mg(t),n=t.proxy,r=t.ctx;$c=!1,e.beforeCreate&&Gf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:M,beforeDestroy:$,beforeUnmount:x,destroyed:N,unmounted:O,render:L,renderTracked:J,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:R,components:b,directives:E,filters:Ce}=e;if(u&&iw(u,r,null),o)for(const fe in o){const Ee=o[fe];me(Ee)&&(r[fe]=Ee.bind(n))}if(s){const fe=s.call(n,n);De(fe)&&(t.data=Ys(fe))}if($c=!0,i)for(const fe in i){const Ee=i[fe],Lt=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):vn,rn=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):vn,Kt=dt({get:Lt,set:rn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:He=>Kt.value=He})}if(l)for(const fe in l)Ng(l[fe],r,n,fe);if(c){const fe=me(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(Ee=>{aa(Ee,fe[Ee])})}f&&Gf(f,t,"c");function xe(fe,Ee){ie(Ee)?Ee.forEach(Lt=>fe(Lt.bind(n))):Ee&&fe(Ee.bind(n))}if(xe(YT,p),xe(Kn,m),xe(JT,_),xe(kg,C),xe(KT,D),xe(GT,M),xe(tw,v),xe(ew,J),xe(ZT,A),xe(Og,x),xe(qu,O),xe(XT,y),ie(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(Ee=>{Object.defineProperty(fe,Ee,{get:()=>n[Ee],set:Lt=>n[Ee]=Lt})})}else t.exposed||(t.exposed={});L&&t.render===vn&&(t.render=L),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),E&&(t.directives=E),y&&Cg(t)}function iw(t,e,n=vn){ie(t)&&(t=jc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gf(t,e,n){ln(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ng(t,e,n,r){let s=r.includes(".")?Yg(n,r):()=>n[r];if(Je(t)){const i=e[t];me(i)&&yr(s,i)}else if(me(t))yr(s,t.bind(n));else if(De(t))if(ie(t))t.forEach(i=>Ng(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&yr(s,i,t)}}function Mg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ca(c,u,o,!0)),Ca(c,e,o)),De(e)&&i.set(e,c),c}function Ca(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ca(t,i,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=ow[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ow={data:Qf,props:Yf,emits:Yf,methods:Ri,computed:Ri,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ri,directives:Ri,watch:lw,provide:Qf,inject:aw};function Qf(t,e){return e?t?function(){return it(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function aw(t,e){return Ri(jc(t),jc(e))}function jc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?it(Object.create(null),t,e):e}function Yf(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:it(Object.create(null),Kf(t),Kf(e??{})):e}function lw(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Lg(){return{app:null,config:{isNativeTag:YE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cw=0;function uw(t,e){return function(r,s=null){me(r)||(r=it({},r)),s!=null&&!De(s)&&(s=null);const i=Lg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:cw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ww,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&me(f.install)?(o.add(f),f.install(u,...p)):me(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const _=u._ceVNode||ve(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,dl(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(ln(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Jr;Jr=u;try{return f()}finally{Jr=p}}};return u}}let Jr=null;function aa(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=at||kt;if(r||Jr){const s=Jr?Jr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function hw(){return!!(at||kt||Jr)}const Fg={},Ug=()=>Object.create(Fg),$g=t=>Object.getPrototypeOf(t)===Fg;function fw(t,e,n,r=!1){const s={},i=Ug();t.propsDefaults=Object.create(null),jg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(hl(t.emitsOptions,m))continue;const _=e[m];if(c)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const C=nn(m);s[C]=Bc(c,l,C,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{jg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=as(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Bc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function jg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Vi(c))continue;const u=e[c];let f;s&&ke(s,f=nn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:hl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Bc(s,c,p,u[p],t,!ke(u,p))}}return o}function Bc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Eo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===as(n))&&(r=!0))}return r}const pw=new WeakMap;function Bg(t,e,n=!1){const r=n?pw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const f=p=>{c=!0;const[m,_]=Bg(p,e,!0);it(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return De(t)&&r.set(t,Ps),Ps;if(ie(i))for(let f=0;f<i.length;f++){const p=nn(i[f]);Jf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=nn(f);if(Jf(p)){const m=i[f],_=o[p]=ie(m)||me(m)?{type:m}:it({},m),C=_.type;let D=!1,M=!0;if(ie(C))for(let $=0;$<C.length;++$){const x=C[$],N=me(x)&&x.name;if(N==="Boolean"){D=!0;break}else N==="String"&&(M=!1)}else D=me(C)&&C.name==="Boolean";_[0]=D,_[1]=M,(D||ke(_,"default"))&&l.push(p)}}const u=[o,l];return De(t)&&r.set(t,u),u}function Jf(t){return t[0]!=="$"&&!Vi(t)}const qg=t=>t[0]==="_"||t==="$stable",Hu=t=>ie(t)?t.map(yn):[yn(t)],mw=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>Hu(e(...s)),n);return r._c=!1,r},Hg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qg(s))continue;const i=t[s];if(me(i))e[s]=mw(s,i,r);else if(i!=null){const o=Hu(i);e[s]=()=>o}}},zg=(t,e)=>{const n=Hu(e);t.slots.default=()=>n},Wg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},gw=(t,e,n)=>{const r=t.slots=Ug();if(t.vnode.shapeFlag&32){const s=e._;s?(Wg(r,e,n),n&&Hm(r,"_",s,!0)):Hg(e,r)}else e&&zg(t,e)},_w=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Wg(s,e,n):(i=!e.$stable,Hg(e,s)),o=e}else e&&(zg(t,e),o={default:1});if(i)for(const l in s)!qg(l)&&o[l]==null&&delete s[l]},Ut=Ow;function yw(t){return vw(t)}function vw(t,e){const n=sl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=vn,insertStaticContent:C}=t,D=(T,I,P,U=null,H=null,B=null,Q=void 0,K=null,W=!!I.dynamicChildren)=>{if(T===I)return;T&&!Kr(T,I)&&(U=F(T),He(T,H,B,!0),T=null),I.patchFlag===-2&&(W=!1,I.dynamicChildren=null);const{type:z,ref:oe,shapeFlag:X}=I;switch(z){case fl:M(T,I,P,U);break;case Nt:$(T,I,P,U);break;case la:T==null&&x(I,P,U,Q);break;case nt:b(T,I,P,U,H,B,Q,K,W);break;default:X&1?L(T,I,P,U,H,B,Q,K,W):X&6?E(T,I,P,U,H,B,Q,K,W):(X&64||X&128)&&z.process(T,I,P,U,H,B,Q,K,W,ne)}oe!=null&&H&&Sa(oe,T&&T.ref,B,I||T,!I)},M=(T,I,P,U)=>{if(T==null)r(I.el=l(I.children),P,U);else{const H=I.el=T.el;I.children!==T.children&&u(H,I.children)}},$=(T,I,P,U)=>{T==null?r(I.el=c(I.children||""),P,U):I.el=T.el},x=(T,I,P,U)=>{[T.el,T.anchor]=C(T.children,I,P,U,T.el,T.anchor)},N=({el:T,anchor:I},P,U)=>{let H;for(;T&&T!==I;)H=m(T),r(T,P,U),T=H;r(I,P,U)},O=({el:T,anchor:I})=>{let P;for(;T&&T!==I;)P=m(T),s(T),T=P;s(I)},L=(T,I,P,U,H,B,Q,K,W)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),T==null?J(I,P,U,H,B,Q,K,W):y(T,I,H,B,Q,K,W)},J=(T,I,P,U,H,B,Q,K)=>{let W,z;const{props:oe,shapeFlag:X,transition:re,dirs:he}=T;if(W=T.el=o(T.type,B,oe&&oe.is,oe),X&8?f(W,T.children):X&16&&v(T.children,W,null,U,H,dc(T,B),Q,K),he&&jr(T,null,U,"created"),A(W,T,T.scopeId,Q,U),oe){for(const _e in oe)_e!=="value"&&!Vi(_e)&&i(W,_e,null,oe[_e],B,U);"value"in oe&&i(W,"value",null,oe.value,B),(z=oe.onVnodeBeforeMount)&&pn(z,U,T)}he&&jr(T,null,U,"beforeMount");const ae=Ew(H,re);ae&&re.beforeEnter(W),r(W,I,P),((z=oe&&oe.onVnodeMounted)||ae||he)&&Ut(()=>{z&&pn(z,U,T),ae&&re.enter(W),he&&jr(T,null,U,"mounted")},H)},A=(T,I,P,U,H)=>{if(P&&_(T,P),U)for(let B=0;B<U.length;B++)_(T,U[B]);if(H){let B=H.subTree;if(I===B||Xg(B.type)&&(B.ssContent===I||B.ssFallback===I)){const Q=H.vnode;A(T,Q,Q.scopeId,Q.slotScopeIds,H.parent)}}},v=(T,I,P,U,H,B,Q,K,W=0)=>{for(let z=W;z<T.length;z++){const oe=T[z]=K?cr(T[z]):yn(T[z]);D(null,oe,I,P,U,H,B,Q,K)}},y=(T,I,P,U,H,B,Q)=>{const K=I.el=T.el;let{patchFlag:W,dynamicChildren:z,dirs:oe}=I;W|=T.patchFlag&16;const X=T.props||Ne,re=I.props||Ne;let he;if(P&&Br(P,!1),(he=re.onVnodeBeforeUpdate)&&pn(he,P,I,T),oe&&jr(I,T,P,"beforeUpdate"),P&&Br(P,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&f(K,""),z?w(T.dynamicChildren,z,K,P,U,dc(I,H),B):Q||Ee(T,I,K,null,P,U,dc(I,H),B,!1),W>0){if(W&16)R(K,X,re,P,H);else if(W&2&&X.class!==re.class&&i(K,"class",null,re.class,H),W&4&&i(K,"style",X.style,re.style,H),W&8){const ae=I.dynamicProps;for(let _e=0;_e<ae.length;_e++){const be=ae[_e],gt=X[be],ct=re[be];(ct!==gt||be==="value")&&i(K,be,gt,ct,H,P)}}W&1&&T.children!==I.children&&f(K,I.children)}else!Q&&z==null&&R(K,X,re,P,H);((he=re.onVnodeUpdated)||oe)&&Ut(()=>{he&&pn(he,P,I,T),oe&&jr(I,T,P,"updated")},U)},w=(T,I,P,U,H,B,Q)=>{for(let K=0;K<I.length;K++){const W=T[K],z=I[K],oe=W.el&&(W.type===nt||!Kr(W,z)||W.shapeFlag&70)?p(W.el):P;D(W,z,oe,null,U,H,B,Q,!0)}},R=(T,I,P,U,H)=>{if(I!==P){if(I!==Ne)for(const B in I)!Vi(B)&&!(B in P)&&i(T,B,I[B],null,H,U);for(const B in P){if(Vi(B))continue;const Q=P[B],K=I[B];Q!==K&&B!=="value"&&i(T,B,K,Q,H,U)}"value"in P&&i(T,"value",I.value,P.value,H)}},b=(T,I,P,U,H,B,Q,K,W)=>{const z=I.el=T?T.el:l(""),oe=I.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:he}=I;he&&(K=K?K.concat(he):he),T==null?(r(z,P,U),r(oe,P,U),v(I.children||[],P,oe,H,B,Q,K,W)):X>0&&X&64&&re&&T.dynamicChildren?(w(T.dynamicChildren,re,P,H,B,Q,K),(I.key!=null||H&&I===H.subTree)&&Kg(T,I,!0)):Ee(T,I,P,oe,H,B,Q,K,W)},E=(T,I,P,U,H,B,Q,K,W)=>{I.slotScopeIds=K,T==null?I.shapeFlag&512?H.ctx.activate(I,P,U,Q,W):Ce(I,P,U,H,B,Q,W):Xe(T,I,W)},Ce=(T,I,P,U,H,B,Q)=>{const K=T.component=Uw(T,U,H);if(cl(T)&&(K.ctx.renderer=ne),$w(K,!1,Q),K.asyncDep){if(H&&H.registerDep(K,xe,Q),!T.el){const W=K.subTree=ve(Nt);$(null,W,I,P)}}else xe(K,T,I,P,H,B,Q)},Xe=(T,I,P)=>{const U=I.component=T.component;if(Pw(T,I,P))if(U.asyncDep&&!U.asyncResolved){fe(U,I,P);return}else U.next=I,U.update();else I.el=T.el,U.vnode=I},xe=(T,I,P,U,H,B,Q)=>{const K=()=>{if(T.isMounted){let{next:X,bu:re,u:he,parent:ae,vnode:_e}=T;{const _t=Gg(T);if(_t){X&&(X.el=_e.el,fe(T,X,Q)),_t.asyncDep.then(()=>{T.isUnmounted||K()});return}}let be=X,gt;Br(T,!1),X?(X.el=_e.el,fe(T,X,Q)):X=_e,re&&oa(re),(gt=X.props&&X.props.onVnodeBeforeUpdate)&&pn(gt,ae,X,_e),Br(T,!0);const ct=Zf(T),Gt=T.subTree;T.subTree=ct,D(Gt,ct,p(Gt.el),F(Gt),T,H,B),X.el=ct.el,be===null&&kw(T,ct.el),he&&Ut(he,H),(gt=X.props&&X.props.onVnodeUpdated)&&Ut(()=>pn(gt,ae,X,_e),H)}else{let X;const{el:re,props:he}=I,{bm:ae,m:_e,parent:be,root:gt,type:ct}=T,Gt=Li(I);Br(T,!1),ae&&oa(ae),!Gt&&(X=he&&he.onVnodeBeforeMount)&&pn(X,be,I),Br(T,!0);{gt.ce&&gt.ce._injectChildStyle(ct);const _t=T.subTree=Zf(T);D(null,_t,P,U,T,H,B),I.el=_t.el}if(_e&&Ut(_e,H),!Gt&&(X=he&&he.onVnodeMounted)){const _t=I;Ut(()=>pn(X,be,_t),H)}(I.shapeFlag&256||be&&Li(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Ut(T.a,H),T.isMounted=!0,I=P=U=null}};T.scope.on();const W=T.effect=new Jm(K);T.scope.off();const z=T.update=W.run.bind(W),oe=T.job=W.runIfDirty.bind(W);oe.i=T,oe.id=T.uid,W.scheduler=()=>ju(oe),Br(T,!0),z()},fe=(T,I,P)=>{I.component=T;const U=T.vnode.props;T.vnode=I,T.next=null,dw(T,I.props,U,P),_w(T,I.children,P),Or(),Hf(T),xr()},Ee=(T,I,P,U,H,B,Q,K,W=!1)=>{const z=T&&T.children,oe=T?T.shapeFlag:0,X=I.children,{patchFlag:re,shapeFlag:he}=I;if(re>0){if(re&128){rn(z,X,P,U,H,B,Q,K,W);return}else if(re&256){Lt(z,X,P,U,H,B,Q,K,W);return}}he&8?(oe&16&&xt(z,H,B),X!==z&&f(P,X)):oe&16?he&16?rn(z,X,P,U,H,B,Q,K,W):xt(z,H,B,!0):(oe&8&&f(P,""),he&16&&v(X,P,U,H,B,Q,K,W))},Lt=(T,I,P,U,H,B,Q,K,W)=>{T=T||Ps,I=I||Ps;const z=T.length,oe=I.length,X=Math.min(z,oe);let re;for(re=0;re<X;re++){const he=I[re]=W?cr(I[re]):yn(I[re]);D(T[re],he,P,null,H,B,Q,K,W)}z>oe?xt(T,H,B,!0,!1,X):v(I,P,U,H,B,Q,K,W,X)},rn=(T,I,P,U,H,B,Q,K,W)=>{let z=0;const oe=I.length;let X=T.length-1,re=oe-1;for(;z<=X&&z<=re;){const he=T[z],ae=I[z]=W?cr(I[z]):yn(I[z]);if(Kr(he,ae))D(he,ae,P,null,H,B,Q,K,W);else break;z++}for(;z<=X&&z<=re;){const he=T[X],ae=I[re]=W?cr(I[re]):yn(I[re]);if(Kr(he,ae))D(he,ae,P,null,H,B,Q,K,W);else break;X--,re--}if(z>X){if(z<=re){const he=re+1,ae=he<oe?I[he].el:U;for(;z<=re;)D(null,I[z]=W?cr(I[z]):yn(I[z]),P,ae,H,B,Q,K,W),z++}}else if(z>re)for(;z<=X;)He(T[z],H,B,!0),z++;else{const he=z,ae=z,_e=new Map;for(z=ae;z<=re;z++){const ut=I[z]=W?cr(I[z]):yn(I[z]);ut.key!=null&&_e.set(ut.key,z)}let be,gt=0;const ct=re-ae+1;let Gt=!1,_t=0;const Xn=new Array(ct);for(z=0;z<ct;z++)Xn[z]=0;for(z=he;z<=X;z++){const ut=T[z];if(gt>=ct){He(ut,H,B,!0);continue}let Qt;if(ut.key!=null)Qt=_e.get(ut.key);else for(be=ae;be<=re;be++)if(Xn[be-ae]===0&&Kr(ut,I[be])){Qt=be;break}Qt===void 0?He(ut,H,B,!0):(Xn[Qt-ae]=z+1,Qt>=_t?_t=Qt:Gt=!0,D(ut,I[Qt],P,null,H,B,Q,K,W),gt++)}const li=Gt?Tw(Xn):Ps;for(be=li.length-1,z=ct-1;z>=0;z--){const ut=ae+z,Qt=I[ut],Vo=ut+1<oe?I[ut+1].el:U;Xn[z]===0?D(null,Qt,P,Vo,H,B,Q,K,W):Gt&&(be<0||z!==li[be]?Kt(Qt,P,Vo,2):be--)}}},Kt=(T,I,P,U,H=null)=>{const{el:B,type:Q,transition:K,children:W,shapeFlag:z}=T;if(z&6){Kt(T.component.subTree,I,P,U);return}if(z&128){T.suspense.move(I,P,U);return}if(z&64){Q.move(T,I,P,ne);return}if(Q===nt){r(B,I,P);for(let X=0;X<W.length;X++)Kt(W[X],I,P,U);r(T.anchor,I,P);return}if(Q===la){N(T,I,P);return}if(U!==2&&z&1&&K)if(U===0)K.beforeEnter(B),r(B,I,P),Ut(()=>K.enter(B),H);else{const{leave:X,delayLeave:re,afterLeave:he}=K,ae=()=>r(B,I,P),_e=()=>{X(B,()=>{ae(),he&&he()})};re?re(B,ae,_e):_e()}else r(B,I,P)},He=(T,I,P,U=!1,H=!1)=>{const{type:B,props:Q,ref:K,children:W,dynamicChildren:z,shapeFlag:oe,patchFlag:X,dirs:re,cacheIndex:he}=T;if(X===-2&&(H=!1),K!=null&&Sa(K,null,P,T,!0),he!=null&&(I.renderCache[he]=void 0),oe&256){I.ctx.deactivate(T);return}const ae=oe&1&&re,_e=!Li(T);let be;if(_e&&(be=Q&&Q.onVnodeBeforeUnmount)&&pn(be,I,T),oe&6)dn(T.component,P,U);else{if(oe&128){T.suspense.unmount(P,U);return}ae&&jr(T,null,I,"beforeUnmount"),oe&64?T.type.remove(T,I,P,ne,U):z&&!z.hasOnce&&(B!==nt||X>0&&X&64)?xt(z,I,P,!1,!0):(B===nt&&X&384||!H&&oe&16)&&xt(W,I,P),U&&ze(T)}(_e&&(be=Q&&Q.onVnodeUnmounted)||ae)&&Ut(()=>{be&&pn(be,I,T),ae&&jr(T,null,I,"unmounted")},P)},ze=T=>{const{type:I,el:P,anchor:U,transition:H}=T;if(I===nt){Jn(P,U);return}if(I===la){O(T);return}const B=()=>{s(P),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(T.shapeFlag&1&&H&&!H.persisted){const{leave:Q,delayLeave:K}=H,W=()=>Q(P,B);K?K(T.el,B,W):W()}else B()},Jn=(T,I)=>{let P;for(;T!==I;)P=m(T),s(T),T=P;s(I)},dn=(T,I,P)=>{const{bum:U,scope:H,job:B,subTree:Q,um:K,m:W,a:z}=T;Xf(W),Xf(z),U&&oa(U),H.stop(),B&&(B.flags|=8,He(Q,T,I,P)),K&&Ut(K,I),Ut(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},xt=(T,I,P,U=!1,H=!1,B=0)=>{for(let Q=B;Q<T.length;Q++)He(T[Q],I,P,U,H)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=m(T.anchor||T.el),P=I&&I[HT];return P?m(P):I};let Z=!1;const Y=(T,I,P)=>{T==null?I._vnode&&He(I._vnode,null,null,!0):D(I._vnode||null,T,I,null,null,null,P),I._vnode=T,Z||(Z=!0,Hf(),yg(),Z=!1)},ne={p:D,um:He,m:Kt,r:ze,mt:Ce,mc:v,pc:Ee,pbc:w,n:F,o:t};return{render:Y,hydrate:void 0,createApp:uw(Y)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ew(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kg(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Kg(o,l)),l.type===fl&&(l.el=o.el)}}function Tw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gg(e)}function Xf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ww=Symbol.for("v-scx"),Iw=()=>en(ww);function yr(t,e,n){return Qg(t,e,n)}function Qg(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=it({},n),c=e&&r||!e&&i!=="post";let u;if(eo){if(i==="sync"){const _=Iw();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=vn,_.resume=vn,_.pause=vn,_}}const f=at;l.call=(_,C,D)=>ln(_,f,C,D);let p=!1;i==="post"?l.scheduler=_=>{Ut(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():ju(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=$T(t,e,l);return eo&&(u?u.push(m):c&&m()),m}function bw(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Yg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Eo(this),l=Qg(s,i.bind(r),n);return o(),l}function Yg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Aw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${as(e)}Modifiers`];function Rw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Aw(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(wa)));let l,c=r[l=oc(e)]||r[l=oc(nn(e))];!c&&i&&(c=r[l=oc(as(e))]),c&&ln(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ln(u,t,6,s)}}function Jg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=u=>{const f=Jg(u,e,!0);f&&(l=!0,it(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):it(o,i),De(t)&&r.set(t,o),o)}function hl(t,e){return!t||!el(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,as(e))||ke(t,e))}function Zf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,M=Ra(t);let $,x;try{if(n.shapeFlag&4){const O=s||r,L=O;$=yn(u.call(L,O,f,p,_,m,C)),x=l}else{const O=e;$=yn(O.length>1?O(p,{attrs:l,slots:o,emit:c}):O(p,null)),x=e.props?l:Sw(l)}}catch(O){Ui.length=0,ll(O,t,1),$=ve(Nt)}let N=$;if(x&&D!==!1){const O=Object.keys(x),{shapeFlag:L}=N;O.length&&L&7&&(i&&O.some(ku)&&(x=Cw(x,i)),N=br(N,x,!1,!0))}return n.dirs&&(N=br(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Zr(N,n.transition),$=N,Ra(M),$}const Sw=t=>{let e;for(const n in t)(n==="class"||n==="style"||el(n))&&((e||(e={}))[n]=t[n]);return e},Cw=(t,e)=>{const n={};for(const r in t)(!ku(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ed(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!hl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?ed(r,o,u):!0:!!o;return!1}function ed(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hl(n,i))return!0}return!1}function kw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xg=t=>t.__isSuspense;function Ow(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):qT(t)}const nt=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),Ui=[];let Bt=null;function le(t=!1){Ui.push(Bt=t?null:[])}function xw(){Ui.pop(),Bt=Ui[Ui.length-1]||null}let Zi=1;function td(t,e=!1){Zi+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Zg(t){return t.dynamicChildren=Zi>0?Bt||Ps:null,xw(),Zi>0&&Bt&&Bt.push(t),t}function de(t,e,n,r,s,i){return Zg(S(t,e,n,r,s,i,!0))}function vo(t,e,n,r,s){return Zg(ve(t,e,n,r,s,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function Kr(t,e){return t.type===e.type&&t.key===e.key}const e_=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ge(t)||me(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,r=0,s=null,i=t===nt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&e_(e),ref:e&&ca(e),scopeId:Eg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return l?(zu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Zi>0&&!o&&Bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bt.push(c),c}const ve=Dw;function Dw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dg)&&(t=Nt),Pa(t)){const l=br(t,e,!0);return n&&zu(l,n),Zi>0&&!i&&Bt&&(l.shapeFlag&6?Bt[Bt.indexOf(t)]=l:Bt.push(l)),l.patchFlag=-2,l}if(zw(t)&&(t=t.__vccOpts),e){e=Vw(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Vt(l)),De(c)&&($u(c)&&!ie(c)&&(c=it({},c)),e.style=Du(c))}const o=Je(t)?1:Xg(t)?128:Tg(t)?64:De(t)?4:me(t)?2:0;return S(t,e,n,r,s,o,i,!0)}function Vw(t){return t?$u(t)||$g(t)?it({},t):t:null}function br(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Mw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&e_(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&br(t.ssContent),ssFallback:t.ssFallback&&br(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Zr(f,c.clone(f)),f}function Ue(t=" ",e=0){return ve(fl,null,t,e)}function Nw(t,e){const n=ve(la,null,t);return n.staticCount=e,n}function Xt(t="",e=!1){return e?(le(),vo(Nt,null,t)):ve(Nt,null,t)}function yn(t){return t==null||typeof t=="boolean"?ve(Nt):ie(t)?ve(nt,null,t.slice()):Pa(t)?cr(t):ve(fl,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:br(t)}function zu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$g(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Ue(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vt([e.class,r.class]));else if(s==="style")e.style=Du([e.style,r.style]);else if(el(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){ln(t,e,7,[n,r])}const Lw=Lg();let Fw=0;function Uw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Lw,i={uid:Fw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bg(r,s),emitsOptions:Jg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rw.bind(null,i),t.ce&&t.ce(i),i}let at=null;const t_=()=>at||kt;let ka,qc;{const t=sl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>at=n),qc=e("__VUE_SSR_SETTERS__",n=>eo=n)}const Eo=t=>{const e=at;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},nd=()=>{at&&at.scope.off(),ka(null)};function n_(t){return t.vnode.shapeFlag&4}let eo=!1;function $w(t,e=!1,n=!1){e&&qc(e);const{props:r,children:s}=t.vnode,i=n_(t);fw(t,r,i,e),gw(t,s,n);const o=i?jw(t,e):void 0;return e&&qc(!1),o}function jw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rw);const{setup:r}=n;if(r){Or();const s=t.setupContext=r.length>1?qw(t):null,i=Eo(t),o=_o(r,t,0,[t.props,s]),l=jm(o);if(xr(),i(),(l||t.sp)&&!Li(t)&&Cg(t),l){if(o.then(nd,nd),e)return o.then(c=>{rd(t,c)}).catch(c=>{ll(c,t,0)});t.asyncDep=o}else rd(t,o)}else r_(t)}function rd(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=pg(e)),r_(t)}function r_(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=Eo(t);Or();try{sw(t)}finally{xr(),s()}}}const Bw={get(t,e){return wt(t,"get",""),t[e]}};function qw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bw),slots:t.slots,emit:t.emit,expose:e}}function dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pg(al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}})):t.proxy}function Hw(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function zw(t){return me(t)&&"__vccOpts"in t}const dt=(t,e)=>FT(t,e,eo);function Wu(t,e,n){const r=arguments.length;return r===2?De(e)&&!ie(e)?Pa(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pa(n)&&(n=[n]),ve(t,e,n))}const Ww="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hc;const sd=typeof window<"u"&&window.trustedTypes;if(sd)try{Hc=sd.createPolicy("vue",{createHTML:t=>t})}catch{}const s_=Hc?t=>Hc.createHTML(t):t=>t,Kw="http://www.w3.org/2000/svg",Gw="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,id=On&&On.createElement("template"),Qw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(Kw,t):e==="mathml"?On.createElementNS(Gw,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{id.innerHTML=s_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=id.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",wi="animation",Ls=Symbol("_vtc"),i_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},o_=it({},Ig,i_),Yw=t=>(t.displayName="Transition",t.props=o_,t),jn=Yw((t,{slots:e})=>Wu(WT,a_(t),e)),qr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},od=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function a_(t){const e={};for(const b in t)b in i_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=Jw(s),D=C&&C[0],M=C&&C[1],{onBeforeEnter:$,onEnter:x,onEnterCancelled:N,onLeave:O,onLeaveCancelled:L,onBeforeAppear:J=$,onAppear:A=x,onAppearCancelled:v=N}=e,y=(b,E,Ce,Xe)=>{b._enterCancelled=Xe,ir(b,E?f:l),ir(b,E?u:o),Ce&&Ce()},w=(b,E)=>{b._isLeaving=!1,ir(b,p),ir(b,_),ir(b,m),E&&E()},R=b=>(E,Ce)=>{const Xe=b?A:x,xe=()=>y(E,b,Ce);qr(Xe,[E,xe]),ad(()=>{ir(E,b?c:i),mn(E,b?f:l),od(Xe)||ld(E,r,D,xe)})};return it(e,{onBeforeEnter(b){qr($,[b]),mn(b,i),mn(b,o)},onBeforeAppear(b){qr(J,[b]),mn(b,c),mn(b,u)},onEnter:R(!1),onAppear:R(!0),onLeave(b,E){b._isLeaving=!0;const Ce=()=>w(b,E);mn(b,p),b._enterCancelled?(mn(b,m),zc()):(zc(),mn(b,m)),ad(()=>{b._isLeaving&&(ir(b,p),mn(b,_),od(O)||ld(b,r,M,Ce))}),qr(O,[b,Ce])},onEnterCancelled(b){y(b,!1,void 0,!0),qr(N,[b])},onAppearCancelled(b){y(b,!0,void 0,!0),qr(v,[b])},onLeaveCancelled(b){w(b),qr(L,[b])}})}function Jw(t){if(t==null)return null;if(De(t))return[pc(t.enter),pc(t.leave)];{const e=pc(t);return[e,e]}}function pc(t){return tT(t)}function mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ls]||(t[Ls]=new Set)).add(e)}function ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ls];n&&(n.delete(e),n.size||(t[Ls]=void 0))}function ad(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xw=0;function ld(t,e,n,r){const s=t._endId=++Xw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=l_(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,m)}function l_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${nr}Delay`),i=r(`${nr}Duration`),o=cd(s,i),l=r(`${wi}Delay`),c=r(`${wi}Duration`),u=cd(l,c);let f=null,p=0,m=0;e===nr?o>0&&(f=nr,p=o,m=i.length):e===wi?u>0&&(f=wi,p=u,m=c.length):(p=Math.max(o,u),f=p>0?o>u?nr:wi:null,m=f?f===nr?i.length:c.length:0);const _=f===nr&&/\b(transform|all)(,|$)/.test(r(`${nr}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function cd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ud(n)+ud(t[r])))}function ud(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zc(){return document.body.offsetHeight}function Zw(t,e,n){const r=t[Ls];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oa=Symbol("_vod"),c_=Symbol("_vsh"),Nn={beforeMount(t,{value:e},{transition:n}){t[Oa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ii(t,!0),r.enter(t)):r.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t[Oa]:"none",t[c_]=!e}const eI=Symbol(""),tI=/(^|;)\s*display\s*:/;function nI(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ua(r,l,"")}else for(const o in e)n[o]==null&&ua(r,o,"");for(const o in n)o==="display"&&(i=!0),ua(r,o,n[o])}else if(s){if(e!==n){const o=r[eI];o&&(n+=";"+o),r.cssText=n,i=tI.test(n)}}else e&&t.removeAttribute("style");Oa in t&&(t[Oa]=i?r.display:"",t[c_]&&(r.display="none"))}const hd=/\s*!important$/;function ua(t,e,n){if(ie(n))n.forEach(r=>ua(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rI(t,e);hd.test(n)?t.setProperty(as(r),n.replace(hd,""),"important"):t[r]=n}}const fd=["Webkit","Moz","ms"],mc={};function rI(t,e){const n=mc[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return mc[e]=r;r=rl(r);for(let s=0;s<fd.length;s++){const i=fd[s]+r;if(i in t)return mc[e]=i}return e}const dd="http://www.w3.org/1999/xlink";function pd(t,e,n,r,s,i=aT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n):n==null||i&&!zm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bn(n)?String(n):n)}function md(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?s_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function sI(t,e,n,r){t.removeEventListener(e,n,r)}const gd=Symbol("_vei");function iI(t,e,n,r,s=null){const i=t[gd]||(t[gd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=oI(e);if(r){const u=i[e]=cI(r,s);Gr(t,l,u,c)}else o&&(sI(t,l,o,c),i[e]=void 0)}}const _d=/(?:Once|Passive|Capture)$/;function oI(t){let e;if(_d.test(t)){e={};let r;for(;r=t.match(_d);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let gc=0;const aI=Promise.resolve(),lI=()=>gc||(aI.then(()=>gc=0),gc=Date.now());function cI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(uI(r,n.value),e,5,[r])};return n.value=t,n.attached=lI(),n}function uI(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Zw(t,r,o):e==="style"?nI(t,n,r):el(e)?ku(e)||iI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fI(t,e,r,o))?(md(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?md(t,nn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pd(t,e,r,o))};function fI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yd(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yd(e)&&Je(n)?!1:e in t}const u_=new WeakMap,h_=new WeakMap,xa=Symbol("_moveCb"),vd=Symbol("_enterCb"),dI=t=>(delete t.props.mode,t),pI=dI({name:"TransitionGroup",props:it({},o_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=t_(),r=wg();let s,i;return kg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!vI(s[0].el,n.vnode.el,o))return;s.forEach(gI),s.forEach(_I);const l=s.filter(yI);zc(),l.forEach(c=>{const u=c.el,f=u.style;mn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[xa]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[xa]=null,ir(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),l=a_(o);let c=o.tag||nt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Zr(f,Xi(f,l,r,n)),u_.set(f,f.el.getBoundingClientRect()))}i=e.default?Bu(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Zr(f,Xi(f,l,r,n))}return ve(c,null,i)}}}),mI=pI;function gI(t){const e=t.el;e[xa]&&e[xa](),e[vd]&&e[vd]()}function _I(t){h_.set(t,t.el.getBoundingClientRect())}function yI(t){const e=u_.get(t),n=h_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function vI(t,e,n){const r=t.cloneNode(),s=t[Ls];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=l_(r);return i.removeChild(r),o}const Da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>oa(e,n):e};function EI(t){t.target.composing=!0}function Ed(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xs=Symbol("_assign"),jt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xs]=Da(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=wa(l)),t[xs](l)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",EI),Gr(t,"compositionend",Ed),Gr(t,"change",Ed))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[xs]=Da(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?wa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Wc={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=tl(e);Gr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wa(Va(o)):Va(o));t[xs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,yo(()=>{t._assigning=!1})}),t[xs]=Da(r)},mounted(t,{value:e}){Td(t,e)},beforeUpdate(t,e,n){t[xs]=Da(n)},updated(t,{value:e}){t._assigning||Td(t,e)}};function Td(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!tl(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Va(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=cT(e,l)>-1}else o.selected=e.has(l);else if(il(Va(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Va(t){return"_value"in t?t._value:t.value}const TI=["ctrl","shift","alt","meta"],wI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TI.some(n=>t[`${n}Key`]&&!e.includes(n))},$t=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=wI[e[o]];if(l&&l(s,e))return}return t(s,...i)})},II=it({patchProp:hI},Qw);let wd;function bI(){return wd||(wd=yw(II))}const AI=(...t)=>{const e=bI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=SI(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,RI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function SI(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let f_;const pl=t=>f_=t,d_=Symbol();function Kc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function CI(){const t=Qm(!0),e=t.run(()=>Fe({}));let n=[],r=[];const s=al({install(i){pl(s),s._a=i,i.provide(d_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const p_=()=>{};function Id(t,e,n,r=p_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ym()&&uT(s),s}function Es(t,...e){t.slice().forEach(n=>{n(...e)})}const PI=t=>t(),bd=Symbol(),_c=Symbol();function Gc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kc(s)&&Kc(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!Fn(r)?t[n]=Gc(s,r):t[n]=r}return t}const kI=Symbol();function OI(t){return!Kc(t)||!Object.prototype.hasOwnProperty.call(t,kI)}const{assign:or}=Object;function xI(t){return!!(Ge(t)&&t.effect)}function DI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=DT(n.state.value[t]);return or(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=al(dt(()=>{pl(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=m_(t,u,e,n,r,!0),c}function m_(t,e,n={},r,s,i){let o;const l=or({actions:{}},n),c={deep:!0};let u,f,p=[],m=[],_;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Fe({});let D;function M(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:$i.patchFunction,storeId:t,events:_}):(Gc(r.state.value[t],v),y={type:$i.patchObject,payload:v,storeId:t,events:_});const w=D=Symbol();yo().then(()=>{D===w&&(u=!0)}),f=!0,Es(p,y,r.state.value[t])}const $=i?function(){const{state:y}=n,w=y?y():{};this.$patch(R=>{or(R,w)})}:p_;function x(){o.stop(),p=[],m=[],r._s.delete(t)}const N=(v,y="")=>{if(bd in v)return v[_c]=y,v;const w=function(){pl(r);const R=Array.from(arguments),b=[],E=[];function Ce(fe){b.push(fe)}function Xe(fe){E.push(fe)}Es(m,{args:R,name:w[_c],store:L,after:Ce,onError:Xe});let xe;try{xe=v.apply(this&&this.$id===t?this:L,R)}catch(fe){throw Es(E,fe),fe}return xe instanceof Promise?xe.then(fe=>(Es(b,fe),fe)).catch(fe=>(Es(E,fe),Promise.reject(fe))):(Es(b,xe),xe)};return w[bd]=!0,w[_c]=y,w},O={_p:r,$id:t,$onAction:Id.bind(null,m),$patch:M,$reset:$,$subscribe(v,y={}){const w=Id(p,v,y.detached,()=>R()),R=o.run(()=>yr(()=>r.state.value[t],b=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:$i.direct,events:_},b)},or({},c,y)));return w},$dispose:x},L=Ys(O);r._s.set(t,L);const A=(r._a&&r._a.runWithContext||PI)(()=>r._e.run(()=>(o=Qm()).run(()=>e({action:N}))));for(const v in A){const y=A[v];if(Ge(y)&&!xI(y)||Fn(y))i||(C&&OI(y)&&(Ge(y)?y.value=C[v]:Gc(y,C[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const w=N(y,v);A[v]=w,l.actions[v]=y}}return or(L,A),or(Ie(L),A),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:v=>{M(y=>{or(y,v)})}}),r._p.forEach(v=>{or(L,o.run(()=>v({store:L,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(L.$state,C),u=!0,f=!0,L}/*! #__NO_SIDE_EFFECTS__ */function g_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=hw();return o=o||(c?en(d_,null):null),o&&pl(o),o=f_,o._s.has(t)||(s?m_(t,e,r,o):DI(t,r,o)),o._s.get(t)}return i.$id=t,i}function __(t){const e=Ie(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=dt({get:()=>t[r],set(i){t[r]=i}}):(Ge(s)||Fn(s))&&(n[r]=MT(t,r))}return n}const Gn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},VI={name:"App",components:{}};function NI(t,e,n,r,s,i){const o=Js("router-view");return le(),vo(o)}const MI=Gn(VI,[["render",NI]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function LI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const Pe=Object.assign;function yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const ji=()=>{},cn=Array.isArray,v_=/#/g,FI=/&/g,UI=/\//g,$I=/=/g,jI=/\?/g,E_=/\+/g,BI=/%5B/g,qI=/%5D/g,T_=/%5E/g,HI=/%60/g,w_=/%7B/g,zI=/%7C/g,I_=/%7D/g,WI=/%20/g;function Ku(t){return encodeURI(""+t).replace(zI,"|").replace(BI,"[").replace(qI,"]")}function KI(t){return Ku(t).replace(w_,"{").replace(I_,"}").replace(T_,"^")}function Qc(t){return Ku(t).replace(E_,"%2B").replace(WI,"+").replace(v_,"%23").replace(FI,"%26").replace(HI,"`").replace(w_,"{").replace(I_,"}").replace(T_,"^")}function GI(t){return Qc(t).replace($I,"%3D")}function QI(t){return Ku(t).replace(v_,"%23").replace(jI,"%3F")}function YI(t){return t==null?"":QI(t).replace(UI,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JI=/\/$/,XI=t=>t.replace(JI,"");function vc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=nb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function ZI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fs(e.matched[r],n.matched[s])&&b_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function b_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tb(t[n],e[n]))return!1;return!0}function tb(t,e){return cn(t)?Rd(t,e):cn(e)?Rd(e,t):t===e}function Rd(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var Bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bi||(Bi={}));function rb(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XI(t)}const sb=/^[^#]+#/;function ib(t,e){return t.replace(sb,"#")+e}function ob(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ml=()=>({left:window.scrollX,top:window.scrollY});function ab(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ob(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sd(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function lb(t,e){Yc.set(t,e)}function cb(t){const e=Yc.get(t);return Yc.delete(t),e}let ub=()=>location.protocol+"//"+location.host;function A_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ad(c,"")}return Ad(n,t)+r+s}function hb(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=A_(t,location),C=n.value,D=e.value;let M=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}M=D?m.position-D.position:0}else r(_);s.forEach($=>{$(n.value,C,{delta:M,type:no.pop,direction:M?M>0?Bi.forward:Bi.back:Bi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:ml()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Cd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ml():null}}function fb(t){const{history:e,location:n}=window,r={value:A_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:ub()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){const f=Pe({},e.state,Cd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Pe({},s.value,e.state,{forward:c,scroll:ml()});i(f.current,f,!0);const p=Pe({},Cd(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function db(t){t=rb(t);const e=fb(t),n=hb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:ib.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),db(t)}function mb(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}const S_=Symbol("");var Pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pd||(Pd={}));function Us(t,e){return Pe(new Error,{type:t,[S_]:!0},e)}function kn(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const kd="[^/]+?",gb={sensitive:!1,strict:!1,start:!0,end:!0},_b=/[.+*?^${}()[\]/\\]/g;function yb(t,e){const n=Pe({},gb,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(_b,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:M,regexp:$}=m;i.push({name:C,repeatable:D,optional:M});const x=$||kd;if(x!==kd){_+=10;try{new RegExp(`(${x})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${x}): `+O.message)}}let N=D?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(N=M&&u.length<2?`(?:/${N})`:"/"+N),M&&(N+="?"),s+=N,_+=20,M&&(_+=-8),D&&(_+=-20),x===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:M}=_,$=C in u?u[C]:"";if(cn($)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const x=cn($)?$.join("/"):$;if(!x)if(M)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function C_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Od(r))return 1;if(Od(s))return-1}return s.length-r.length}function Od(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Eb={type:0,value:""},Tb=/[a-zA-Z0-9_]/;function wb(t){if(!t)return[[]];if(t==="/")return[[Eb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Tb.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Ib(t,e,n){const r=yb(wb(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bb(t,e){const n=[],r=new Map;e=Nd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=Dd(p);D.aliasOf=_&&_.record;const M=Nd(e,p),$=[D];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const L of O)$.push(Dd(Pe({},D,{components:_?_.record.components:D.components,path:L,aliasOf:_?_.record:D})))}let x,N;for(const O of $){const{path:L}=O;if(m&&L[0]!=="/"){const J=m.record.path,A=J[J.length-1]==="/"?"":"/";O.path=m.record.path+(L&&A+L)}if(x=Ib(O,m,M),_?_.alias.push(x):(N=N||x,N!==x&&N.alias.push(x),C&&p.name&&!Vd(x)&&o(p.name)),P_(x)&&c(x),D.children){const J=D.children;for(let A=0;A<J.length;A++)i(J[A],x,_&&_.children[A])}_=_||x}return N?()=>{o(N)}:ji}function o(p){if(R_(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=Sb(p,n);n.splice(m,0,p),p.record.name&&!Vd(p)&&r.set(p.record.name,p)}function u(p,m){let _,C={},D,M;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Us(1,{location:p});M=_.record.name,C=Pe(xd(m.params,_.keys.filter(N=>!N.optional).concat(_.parent?_.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&xd(p.params,_.keys.map(N=>N.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find(N=>N.re.test(D)),_&&(C=_.parse(D),M=_.record.name);else{if(_=m.name?r.get(m.name):n.find(N=>N.re.test(m.path)),!_)throw Us(1,{location:p,currentLocation:m});M=_.record.name,C=Pe({},m.params,p.params),D=_.stringify(C)}const $=[];let x=_;for(;x;)$.unshift(x.record),x=x.parent;return{name:M,path:D,params:C,matched:$,meta:Rb($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Dd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ab(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ab(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rb(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Nd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;C_(t,e[i])<0?r=i:n=i+1}const s=Cb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cb(t){let e=t;for(;e=e.parent;)if(P_(e)&&C_(t,e)===0)return e}function P_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Pb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(E_," "),o=i.indexOf("="),l=to(o<0?i:i.slice(0,o)),c=o<0?null:to(i.slice(o+1));if(l in e){let u=e[l];cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Md(t){let e="";for(let n in t){const r=t[n];if(n=GI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(i=>i&&Qc(i)):[r&&Qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ob=Symbol(""),Ld=Symbol(""),gl=Symbol(""),Gu=Symbol(""),Jc=Symbol("");function bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Us(4,{from:n,to:e})):m instanceof Error?c(m):mb(m)?c(Us(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Ec(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(y_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(ur(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=LI(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&ur(_,n,r,o,l,s)()}))}}return i}function Fd(t){const e=en(gl),n=en(Gu),r=dt(()=>{const c=Wt(t.to);return e.resolve(c)}),s=dt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Fs.bind(null,f));if(m>-1)return m;const _=Ud(c[u-2]);return u>1&&Ud(f)===_&&p[p.length-1].path!==_?p.findIndex(Fs.bind(null,c[u-2])):m}),i=dt(()=>s.value>-1&&Nb(n.params,r.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&b_(n.params,r.value.params));function l(c={}){if(Vb(c)){const u=e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(ji);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function xb(t){return t.length===1?t[0]:t}const Db=Sg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fd,setup(t,{slots:e}){const n=Ys(Fd(t)),{options:r}=en(gl),s=dt(()=>({[$d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xb(e.default(n));return t.custom?i:Wu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k_=Db;function Vb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ud(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $d=(t,e,n)=>t??e??n,Mb=Sg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Jc),s=dt(()=>t.route||r.value),i=en(Ld,0),o=dt(()=>{let u=Wt(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=dt(()=>s.value.matched[o.value]);aa(Ld,dt(()=>o.value+1)),aa(Ob,l),aa(Jc,s);const c=Fe();return yr(()=>[c.value,l.value,t.name],([u,f,p],[m,_,C])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Fs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return jd(n.default,{Component:m,route:u});const _=p.props[f],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,M=Wu(m,Pe({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return jd(n.default,{Component:M,route:u})||M}}});function jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lb=Mb;function Fb(t){const e=bb(t.routes,t),n=t.parseQuery||Pb,r=t.stringifyQuery||Md,s=t.history,i=bi(),o=bi(),l=bi(),c=kT(rr);let u=rr;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=yc.bind(null,F=>""+F),p=yc.bind(null,YI),m=yc.bind(null,to);function _(F,Z){let Y,ne;return R_(F)?(Y=e.getRecordMatcher(F),ne=Z):ne=F,e.addRoute(ne,Y)}function C(F){const Z=e.getRecordMatcher(F);Z&&e.removeRoute(Z)}function D(){return e.getRoutes().map(F=>F.record)}function M(F){return!!e.getRecordMatcher(F)}function $(F,Z){if(Z=Pe({},Z||c.value),typeof F=="string"){const P=vc(n,F,Z.path),U=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Pe(P,U,{params:m(U.params),hash:to(P.hash),redirectedFrom:void 0,href:H})}let Y;if(F.path!=null)Y=Pe({},F,{path:vc(n,F.path,Z.path).path});else{const P=Pe({},F.params);for(const U in P)P[U]==null&&delete P[U];Y=Pe({},F,{params:p(P)}),Z.params=p(Z.params)}const ne=e.resolve(Y,Z),Re=F.hash||"";ne.params=f(m(ne.params));const T=ZI(r,Pe({},F,{hash:KI(Re),path:ne.path})),I=s.createHref(T);return Pe({fullPath:T,hash:Re,query:r===Md?kb(F.query):F.query||{}},ne,{redirectedFrom:void 0,href:I})}function x(F){return typeof F=="string"?vc(n,F,c.value.path):Pe({},F)}function N(F,Z){if(u!==F)return Us(8,{from:Z,to:F})}function O(F){return A(F)}function L(F){return O(Pe(x(F),{replace:!0}))}function J(F){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ne=typeof Y=="function"?Y(F):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=x(ne):{path:ne},ne.params={}),Pe({query:F.query,hash:F.hash,params:ne.path!=null?{}:F.params},ne)}}function A(F,Z){const Y=u=$(F),ne=c.value,Re=F.state,T=F.force,I=F.replace===!0,P=J(Y);if(P)return A(Pe(x(P),{state:typeof P=="object"?Pe({},Re,P.state):Re,force:T,replace:I}),Z||Y);const U=Y;U.redirectedFrom=Z;let H;return!T&&eb(r,ne,Y)&&(H=Us(16,{to:U,from:ne}),Kt(ne,ne,!0,!1)),(H?Promise.resolve(H):w(U,ne)).catch(B=>kn(B)?kn(B,2)?B:rn(B):Ee(B,U,ne)).then(B=>{if(B){if(kn(B,2))return A(Pe({replace:I},x(B.to),{state:typeof B.to=="object"?Pe({},Re,B.to.state):Re,force:T}),Z||U)}else B=b(U,ne,!0,I,Re);return R(U,ne,B),B})}function v(F,Z){const Y=N(F,Z);return Y?Promise.reject(Y):Promise.resolve()}function y(F){const Z=Jn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(F):F()}function w(F,Z){let Y;const[ne,Re,T]=Ub(F,Z);Y=Ec(ne.reverse(),"beforeRouteLeave",F,Z);for(const P of ne)P.leaveGuards.forEach(U=>{Y.push(ur(U,F,Z))});const I=v.bind(null,F,Z);return Y.push(I),xt(Y).then(()=>{Y=[];for(const P of i.list())Y.push(ur(P,F,Z));return Y.push(I),xt(Y)}).then(()=>{Y=Ec(Re,"beforeRouteUpdate",F,Z);for(const P of Re)P.updateGuards.forEach(U=>{Y.push(ur(U,F,Z))});return Y.push(I),xt(Y)}).then(()=>{Y=[];for(const P of T)if(P.beforeEnter)if(cn(P.beforeEnter))for(const U of P.beforeEnter)Y.push(ur(U,F,Z));else Y.push(ur(P.beforeEnter,F,Z));return Y.push(I),xt(Y)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),Y=Ec(T,"beforeRouteEnter",F,Z,y),Y.push(I),xt(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(ur(P,F,Z));return Y.push(I),xt(Y)}).catch(P=>kn(P,8)?P:Promise.reject(P))}function R(F,Z,Y){l.list().forEach(ne=>y(()=>ne(F,Z,Y)))}function b(F,Z,Y,ne,Re){const T=N(F,Z);if(T)return T;const I=Z===rr,P=ws?history.state:{};Y&&(ne||I?s.replace(F.fullPath,Pe({scroll:I&&P&&P.scroll},Re)):s.push(F.fullPath,Re)),c.value=F,Kt(F,Z,Y,I),rn()}let E;function Ce(){E||(E=s.listen((F,Z,Y)=>{if(!dn.listening)return;const ne=$(F),Re=J(ne);if(Re){A(Pe(Re,{replace:!0,force:!0}),ne).catch(ji);return}u=ne;const T=c.value;ws&&lb(Sd(T.fullPath,Y.delta),ml()),w(ne,T).catch(I=>kn(I,12)?I:kn(I,2)?(A(Pe(x(I.to),{force:!0}),ne).then(P=>{kn(P,20)&&!Y.delta&&Y.type===no.pop&&s.go(-1,!1)}).catch(ji),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ee(I,ne,T))).then(I=>{I=I||b(ne,T,!1),I&&(Y.delta&&!kn(I,8)?s.go(-Y.delta,!1):Y.type===no.pop&&kn(I,20)&&s.go(-1,!1)),R(ne,T,I)}).catch(ji)}))}let Xe=bi(),xe=bi(),fe;function Ee(F,Z,Y){rn(F);const ne=xe.list();return ne.length?ne.forEach(Re=>Re(F,Z,Y)):console.error(F),Promise.reject(F)}function Lt(){return fe&&c.value!==rr?Promise.resolve():new Promise((F,Z)=>{Xe.add([F,Z])})}function rn(F){return fe||(fe=!F,Ce(),Xe.list().forEach(([Z,Y])=>F?Y(F):Z()),Xe.reset()),F}function Kt(F,Z,Y,ne){const{scrollBehavior:Re}=t;if(!ws||!Re)return Promise.resolve();const T=!Y&&cb(Sd(F.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return yo().then(()=>Re(F,Z,T)).then(I=>I&&ab(I)).catch(I=>Ee(I,F,Z))}const He=F=>s.go(F);let ze;const Jn=new Set,dn={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:D,resolve:$,options:t,push:O,replace:L,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:xe.add,isReady:Lt,install(F){const Z=this;F.component("RouterLink",k_),F.component("RouterView",Lb),F.config.globalProperties.$router=Z,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(c)}),ws&&!ze&&c.value===rr&&(ze=!0,O(s.location).catch(Re=>{}));const Y={};for(const Re in rr)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});F.provide(gl,Z),F.provide(Gu,hg(Y)),F.provide(Jc,c);const ne=F.unmount;Jn.add(F),F.unmount=function(){Jn.delete(F),Jn.size<1&&(u=rr,E&&E(),E=null,c.value=rr,ze=!1,fe=!1),ne()}}};function xt(F){return F.reduce((Z,Y)=>Z.then(()=>y(Y)),Promise.resolve())}return dn}function Ub(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Fs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Fs(u,c))||s.push(c))}return[n,r,s]}function Qu(){return en(gl)}function O_(t){return en(Gu)}const $b=()=>{};var Bd={};/**
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
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Bb;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qb=function(t){const e=x_(t);return D_.encodeByteArray(e,!0)},Na=function(t){return qb(t).replace(/\./g,"")},V_=function(t){try{return D_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const zb=()=>Hb().__FIREBASE_DEFAULTS__,Wb=()=>{if(typeof process>"u"||typeof Bd>"u")return;const t=Bd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&V_(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return $b()||zb()||Wb()||Kb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},N_=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gb=t=>{const e=N_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},M_=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},L_=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */const oA="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oA,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,l,r)}}function aA(t,e){return t.replace(lA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lA=/\{\$([^}]+)}/g;function cA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qd(i)&&qd(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qd(t){return t!==null&&typeof t=="object"}/**
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
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uA(t,e){const n=new hA(t,e);return n.subscribe.bind(n)}class hA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tc),s.error===void 0&&(s.error=Tc),s.complete===void 0&&(s.complete=Tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function yl(t){return t.endsWith(".cloudworkstations.dev")}async function F_(t){return(await fetch(t,{credentials:"include"})).ok}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class dA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(t){return t===Wr?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const _A={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},yA=Te.INFO,vA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},EA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=yA,this._logHandler=EA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const TA=(t,e)=>e.some(n=>t instanceof n);let Hd,zd;function wA(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IA(){return zd||(zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,Xc=new WeakMap,$_=new WeakMap,wc=new WeakMap,Ju=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U_.set(n,t)}).catch(()=>{}),Ju.set(e,t),e}function AA(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RA(t){Zc=t(Zc)}function SA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return $_.set(r,e.sort?e.sort():[e]),vr(r)}:IA().includes(t)?function(...e){return t.apply(Ic(this),e),vr(U_.get(this))}:function(...e){return vr(t.apply(Ic(this),e))}}function CA(t){return typeof t=="function"?SA(t):(t instanceof IDBTransaction&&AA(t),TA(t,wA())?new Proxy(t,Zc):t)}function vr(t){if(t instanceof IDBRequest)return bA(t);if(wc.has(t))return wc.get(t);const e=CA(t);return e!==t&&(wc.set(t,e),Ju.set(e,t)),e}const Ic=t=>Ju.get(t);function PA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const kA=["get","getKey","getAll","getAllKeys","count"],OA=["put","add","delete","clear"],bc=new Map;function Wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return bc.set(e,i),i}RA(t=>({...t,get:(e,n,r)=>Wd(e,n)||t.get(e,n,r),has:(e,n)=>!!Wd(e,n)||t.has(e,n)}));/**
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
 */class xA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Kd="0.12.1";/**
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
 */const Bn=new Yu("@firebase/app"),VA="@firebase/app-compat",NA="@firebase/analytics-compat",MA="@firebase/analytics",LA="@firebase/app-check-compat",FA="@firebase/app-check",UA="@firebase/auth",$A="@firebase/auth-compat",jA="@firebase/database",BA="@firebase/data-connect",qA="@firebase/database-compat",HA="@firebase/functions",zA="@firebase/functions-compat",WA="@firebase/installations",KA="@firebase/installations-compat",GA="@firebase/messaging",QA="@firebase/messaging-compat",YA="@firebase/performance",JA="@firebase/performance-compat",XA="@firebase/remote-config",ZA="@firebase/remote-config-compat",e0="@firebase/storage",t0="@firebase/storage-compat",n0="@firebase/firestore",r0="@firebase/vertexai",s0="@firebase/firestore-compat",i0="firebase",o0="11.7.1";/**
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
 */const Ma=new Map,l0=new Map,nu=new Map;function Gd(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(nu.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of Ma.values())Gd(n,t);for(const n of l0.values())Gd(n,t);return!0}function Xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const c0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new To("app","Firebase",c0);/**
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
 */class u0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=o0;function j_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=M_()),!n)throw Er.create("no-options");const i=Ma.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new gA(s);for(const c of nu.values())o.addComponent(c);const l=new u0(n,r,o);return Ma.set(s,l),l}function B_(t=tu){const e=Ma.get(t);if(!e&&t===tu&&M_())return j_();if(!e)throw Er.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let s=(r=a0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}$s(new ts(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const h0="firebase-heartbeat-database",f0=1,ro="firebase-heartbeat-store";let Ac=null;function q_(){return Ac||(Ac=PA(h0,f0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function d0(t){try{const n=(await q_()).transaction(ro),r=await n.objectStore(ro).get(H_(t));return await n.done,r}catch(e){if(e instanceof Qn)Bn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Qd(t,e){try{const r=(await q_()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,H_(t)),await r.done}catch(n){if(n instanceof Qn)Bn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function H_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p0=1024,m0=30;class g0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>m0){const o=v0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yd(),{heartbeatsToSend:r,unsentEntries:s}=_0(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Yd(){return new Date().toISOString().substring(0,10)}function _0(t,e=p0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sA()?iA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}function v0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function E0(t){$s(new ts("platform-logger",e=>new xA(e),"PRIVATE")),$s(new ts("heartbeat",e=>new g0(e),"PRIVATE")),Tr(eu,Kd,t),Tr(eu,Kd,"esm2017"),Tr("fire-js","")}E0("");var T0="firebase",w0="11.7.1";/**
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
 */Tr(T0,w0,"app");var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,z_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.D=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(w,R,b){for(var E=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)E[Ce-2]=arguments[Ce];return v.prototype[R].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)w[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)w[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],R=A.g[2];var b=A.g[3],E=v+(b^y&(R^b))+w[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=b+(R^v&(y^R))+w[1]+3905402710&4294967295,b=v+(E<<12&4294967295|E>>>20),E=R+(y^b&(v^y))+w[2]+606105819&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(v^R&(b^v))+w[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(b^y&(R^b))+w[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(R^v&(y^R))+w[5]+1200080426&4294967295,b=v+(E<<12&4294967295|E>>>20),E=R+(y^b&(v^y))+w[6]+2821735955&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(v^R&(b^v))+w[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(b^y&(R^b))+w[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(R^v&(y^R))+w[9]+2336552879&4294967295,b=v+(E<<12&4294967295|E>>>20),E=R+(y^b&(v^y))+w[10]+4294925233&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(v^R&(b^v))+w[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(b^y&(R^b))+w[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=b+(R^v&(y^R))+w[13]+4254626195&4294967295,b=v+(E<<12&4294967295|E>>>20),E=R+(y^b&(v^y))+w[14]+2792965006&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(v^R&(b^v))+w[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^b&(y^R))+w[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(v^y))+w[6]+3225465664&4294967295,b=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(b^v))+w[11]+643717713&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(R^b))+w[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^b&(y^R))+w[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(v^y))+w[10]+38016083&4294967295,b=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(b^v))+w[15]+3634488961&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(R^b))+w[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^b&(y^R))+w[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(v^y))+w[14]+3275163606&4294967295,b=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(b^v))+w[3]+4107603335&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(R^b))+w[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^b&(y^R))+w[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(v^y))+w[2]+4243563512&4294967295,b=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(b^v))+w[7]+1735328473&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^v&(R^b))+w[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^b)+w[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^R)+w[8]+2272392833&4294967295,b=v+(E<<11&4294967295|E>>>21),E=R+(b^v^y)+w[11]+1839030562&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^v)+w[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^b)+w[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^R)+w[4]+1272893353&4294967295,b=v+(E<<11&4294967295|E>>>21),E=R+(b^v^y)+w[7]+4139469664&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^v)+w[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^b)+w[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^R)+w[0]+3936430074&4294967295,b=v+(E<<11&4294967295|E>>>21),E=R+(b^v^y)+w[3]+3572445317&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^v)+w[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^b)+w[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=b+(v^y^R)+w[12]+3873151461&4294967295,b=v+(E<<11&4294967295|E>>>21),E=R+(b^v^y)+w[15]+530742520&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^v)+w[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~b))+w[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~R))+w[7]+1126891415&4294967295,b=v+(E<<10&4294967295|E>>>22),E=R+(v^(b|~y))+w[14]+2878612391&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~v))+w[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~b))+w[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~R))+w[3]+2399980690&4294967295,b=v+(E<<10&4294967295|E>>>22),E=R+(v^(b|~y))+w[10]+4293915773&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~v))+w[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~b))+w[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~R))+w[15]+4264355552&4294967295,b=v+(E<<10&4294967295|E>>>22),E=R+(v^(b|~y))+w[6]+2734768916&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~v))+w[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~b))+w[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=b+(y^(v|~R))+w[11]+3174756917&4294967295,b=v+(E<<10&4294967295|E>>>22),E=R+(v^(b|~y))+w[2]+718787259&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~v))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var y=v-this.blockSize,w=this.B,R=this.h,b=0;b<v;){if(R==0)for(;b<=y;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<v;)if(w[R++]=A.charCodeAt(b++),R==this.blockSize){s(this,w),R=0;break}}else for(;b<v;)if(w[R++]=A[b++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var y=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.u(A),A=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)A[y++]=this.g[v]>>>w&255;return A};function i(A,v){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function o(A,v){this.h=v;for(var y=[],w=!0,R=A.length-1;0<=R;R--){var b=A[R]|0;w&&b==v||(y[R]=b,w=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?i(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return M(u(-A));for(var v=[],y=1,w=0;A>=y;w++)v[w]=A/y|0,y*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return M(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=p,R=0;R<A.length;R+=8){var b=Math.min(8,A.length-R),E=parseInt(A.substring(R,R+b),v);8>b?(b=u(Math.pow(v,b)),w=w.j(b).add(u(E))):(w=w.j(y),w=w.add(u(E)))}return w}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-M(this).m();for(var A=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);A+=(0<=w?w:4294967296+w)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(D(this))return"-"+M(this).toString(A);for(var v=u(Math.pow(A,6)),y=this,w="";;){var R=O(y,v).g;y=$(y,R.j(v));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=R,C(y))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=$(this,A),D(A)?-1:C(A)?0:1};function M(A){for(var v=A.g.length,y=[],w=0;w<v;w++)y[w]=~A.g[w];return new o(y,~A.h).add(m)}t.abs=function(){return D(this)?M(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],w=0,R=0;R<=v;R++){var b=w+(this.i(R)&65535)+(A.i(R)&65535),E=(b>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);w=E>>>16,b&=65535,E&=65535,y[R]=E<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function $(A,v){return A.add(M(v))}t.j=function(A){if(C(this)||C(A))return p;if(D(this))return D(A)?M(this).j(M(A)):M(M(this).j(A));if(D(A))return M(this.j(M(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<A.g.length;R++){var b=this.i(w)>>>16,E=this.i(w)&65535,Ce=A.i(R)>>>16,Xe=A.i(R)&65535;y[2*w+2*R]+=E*Xe,x(y,2*w+2*R),y[2*w+2*R+1]+=b*Xe,x(y,2*w+2*R+1),y[2*w+2*R+1]+=E*Ce,x(y,2*w+2*R+1),y[2*w+2*R+2]+=b*Ce,x(y,2*w+2*R+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function x(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function N(A,v){this.g=A,this.h=v}function O(A,v){if(C(v))throw Error("division by zero");if(C(A))return new N(p,p);if(D(A))return v=O(M(A),v),new N(M(v.g),M(v.h));if(D(v))return v=O(A,M(v)),new N(M(v.g),v.h);if(30<A.g.length){if(D(A)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=v;0>=w.l(A);)y=L(y),w=L(w);var R=J(y,1),b=J(w,1);for(w=J(w,2),y=J(y,2);!C(w);){var E=b.add(w);0>=E.l(A)&&(R=R.add(y),b=E),w=J(w,1),y=J(y,1)}return v=$(A,R.j(v)),new N(R,v)}for(R=p;0<=A.l(v);){for(y=Math.max(1,Math.floor(A.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=u(y),E=b.j(v);D(E)||0<E.l(A);)y-=w,b=u(y),E=b.j(v);C(b)&&(b=m),R=R.add(b),A=$(A,E)}return new N(R,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&A.i(w);return new o(y,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|A.i(w);return new o(y,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^A.i(w);return new o(y,this.h^A.h)};function L(A){for(var v=A.g.length+1,y=[],w=0;w<v;w++)y[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(y,A.h)}function J(A,v){var y=v>>5;v%=32;for(var w=A.g.length-y,R=[],b=0;b<w;b++)R[b]=0<v?A.i(b+y)>>>v|A.i(b+y+1)<<32-v:A.i(b+y);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,z_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,wr=o}).apply(typeof Xd<"u"?Xd:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W_,Pi,K_,ha,ru,G_,Q_,Y_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,V){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[k].apply(g,G)}}function D(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function M(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const k=a.length||0,V=g.length||0;a.length=k+V;for(let G=0;G<V;G++)a[k+G]=g[G]}else a.push(g)}}class ${constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var L=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function J(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function A(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let V=0;V<y.length;V++)d=y[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ce{constructor(){this.h=this.g=null}add(h,d){const g=Xe.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Xe=new $(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ee=!1,Lt=new Ce,rn=()=>{const a=l.Promise.resolve(void 0);fe=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){b(d)}var h=Xe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function dn(a,h){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{O(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}C(dn,ze);var xt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,d,g,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=I(a,h,g,k);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new Y(h,this.src,V,!!g,k),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(ne(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,h,d,g){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),U={};function H(a,h,d,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)H(a,h[V],d,g,k);return null}return d=he(d),a&&a[F]?a.K(h,d,u(g)?!!g.capture:!1,k):B(a,h,d,!1,g,k)}function B(a,h,d,g,k,V){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Ve=X(a);if(Ve||(a[P]=Ve=new Re(a)),d=Ve.add(h,d,g,G,V),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Jn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(z(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=oe;return a}function K(a,h,d,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],d,g,k);else g=u(g)?!!g.capture:!!g,d=he(d),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=I(V,d,g,k),-1<d&&(ne(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,d,g,k)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])T(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(z(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=X(h))?(T(d,a),d.h==0&&(d.src=null,h[P]=null)):ne(a)}}}function z(a){return a in U?U[a]:U[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new dn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function X(a){return a=a[P],a instanceof Re?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ae(){He.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ae,He),ae.prototype[F]=!0,ae.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function _e(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ze(h,a);else if(h instanceof ze)h.target=h.target||a;else{var k=h;h=new ze(g,a),w(h,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var G=h.g=d[V];k=be(G,g,!0,h)&&k}if(G=h.g=a,k=be(G,g,!0,h)&&k,k=be(G,g,!1,h)&&k,d)for(V=0;V<d.length;V++)G=h.g=d[V],k=be(G,g,!1,h)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ne(d[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ae.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function be(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==d){var Ve=G.listener,ht=G.ha||G.src;G.fa&&T(a.i,G),k=Ve.call(ht,g)!==!1&&k}}return k&&!g.defaultPrevented}function gt(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ct(a){a.g=gt(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Gt extends He{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){He.call(this),this.h=a,this.g={}}C(_t,He);var Xn=[];function li(a){J(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),li(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=l.JSON.stringify,Qt=l.JSON.parse,Vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function zl(){}zl.prototype.h=null;function Gh(a){return a.h||(a.h=a.i())}function Qh(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wl(){ze.call(this,"d")}C(Wl,ze);function Kl(){ze.call(this,"c")}C(Kl,ze);var Lr={},Yh=null;function No(){return Yh=Yh||new ae}Lr.La="serverreachability";function Jh(a){ze.call(this,Lr.La,a)}C(Jh,ze);function ui(a){const h=No();_e(h,new Jh(h))}Lr.STAT_EVENT="statevent";function Xh(a,h){ze.call(this,Lr.STAT_EVENT,a),this.stat=h}C(Xh,ze);function Rt(a){const h=No();_e(h,new Xh(h,a))}Lr.Ma="timingevent";function Zh(a,h){ze.call(this,Lr.Ma,a),this.size=h}C(Zh,ze);function hi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function fi(){this.g=!0}fi.prototype.xa=function(){this.g=!1};function RE(a,h,d,g,k,V){a.info(function(){if(a.g)if(V)for(var G="",Ve=V.split("&"),ht=0;ht<Ve.length;ht++){var Se=Ve[ht].split("=");if(1<Se.length){var yt=Se[0];Se=Se[1];var vt=yt.split("_");G=2<=vt.length&&vt[1]=="type"?G+(yt+"="+Se+"&"):G+(yt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+G})}function SE(a,h,d,g,k,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+V+" "+G})}function ms(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PE(a,d)+(g?" "+g:"")})}function CE(a,h){a.info(function(){return"TIMEOUT: "+h})}fi.prototype.info=function(){};function PE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return ut(d)}catch{return h}}var Mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ef={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gl;function Lo(){}C(Lo,zl),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Gl=new Lo;function Zn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tf}function tf(){this.i=null,this.g="",this.h=!1}var nf={},Ql={};function Yl(a,h,d){a.L=1,a.v=jo(Sn(h)),a.m=d,a.P=!0,rf(a,null)}function rf(a,h){a.F=Date.now(),Fo(a),a.A=Sn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),yf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new tf,a.g=Mf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Gt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Xn[0]=k.toString()),k=Xn);for(var V=0;V<k.length;V++){var G=H(d,k[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ui(),RE(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Cn(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=Cn(this.g);var h=this.g.Ba();const ys=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Af(this.g)))){this.J||vt!=4||h==7||(h==8||0>=ys?ui(3):ui(2)),Jl(this);var d=this.g.Z();this.X=d;t:if(sf(this)){var g=Af(this.g);a="";var k=g.length,V=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),di(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,SE(this.i,this.u,this.A,this.l,this.R,vt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ht=this.g;if((Ve=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ve)){var Se=Ve;break t}}Se=null}if(d=Se)ms(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xl(this,d);else{this.o=!1,this.s=3,Rt(12),Fr(this),di(this);break e}}if(this.P){d=!0;let sn;for(;!this.J&&this.C<G.length;)if(sn=kE(this,G),sn==Ql){vt==4&&(this.s=4,Rt(14),d=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==nf){this.s=4,Rt(15),ms(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else ms(this.i,this.l,sn,null),Xl(this,sn);if(sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||G.length!=0||this.h.h||(this.s=1,Rt(16),d=!1),this.o=this.o&&d,!d)ms(this.i,this.l,G,"[Invalid Chunked Response]"),Fr(this),di(this);else if(0<G.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),sc(yt),yt.M=!0,Rt(11))}}else ms(this.i,this.l,G,null),Xl(this,G);vt==4&&Fr(this),this.o&&!this.J&&(vt==4?xf(this.j,this):(this.o=!1,Fo(this)))}else KE(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Fr(this),di(this)}}}catch{}finally{}};function sf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Ql:(d=Number(h.substring(d,g)),isNaN(d)?nf:(g+=1,g+d>h.length?Ql:(h=h.slice(g,g+d),a.C=g+d,h)))}Zn.prototype.cancel=function(){this.J=!0,Fr(this)};function Fo(a){a.S=Date.now()+a.I,of(a,a.I)}function of(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=hi(m(a.ba,a),h)}function Jl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(CE(this.i,this.A),this.L!=2&&(ui(),Rt(17)),Fr(this),this.s=2,di(this)):of(this,this.S-a)};function di(a){a.j.G==0||a.J||xf(a.j,a)}function Fr(a){Jl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,li(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Zl(d.h,a))){if(!a.K&&Zl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ko(d),zo(d);else break e;rc(d),Rt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=hi(m(d.Za,d),6e3));if(1>=cf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $r(d,11)}else if((a.K||d.g==a)&&Ko(d),!x(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const yt=Se[3];yt!=null&&(d.la=yt,d.j.info("VER="+d.la));const vt=Se[4];vt!=null&&(d.Aa=vt,d.j.info("SVER="+d.Aa));const ys=Se[5];ys!=null&&typeof ys=="number"&&0<ys&&(g=1.5*ys,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const sn=a.g;if(sn){const Qo=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var V=g.h;V.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ec(V,V.h),V.h=null))}if(g.D){const ic=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;ic&&(g.ya=ic,$e(g.I,g.D,ic))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=Nf(g,g.J?g.ia:null,g.W),G.K){uf(g.h,G);var Ve=G,ht=g.L;ht&&(Ve.I=ht),Ve.B&&(Jl(Ve),Fo(Ve)),g.g=G}else kf(g);0<d.i.length&&Wo(d)}else Se[0]!="stop"&&Se[0]!="close"||$r(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?$r(d,7):nc(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}ui(4)}catch{}}var OE=class{constructor(a,h){this.g=a,this.map=h}};function af(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cf(a){return a.h?1:a.g?a.g.size:0}function Zl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ec(a,h){a.g?a.g.add(h):a.h=h}function uf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}af.prototype.cancel=function(){if(this.i=hf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return D(a.i)}function xE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function DE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function ff(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=DE(a),g=xE(a),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],d&&d[V],a)}var df=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var V=a[d].substring(0,g);k=a[d].substring(g+1)}else V=a[d];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Uo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var h=a.i,d=new gi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),pf(this,d),this.m=a.m}else a&&(h=String(a).match(df))?(this.h=!1,Uo(this,h[1]||"",!0),this.o=pi(h[2]||""),this.g=pi(h[3]||"",!0),$o(this,h[4]),this.l=pi(h[5]||"",!0),pf(this,h[6]||"",!0),this.m=pi(h[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}Ur.prototype.toString=function(){var a=[],h=this.j;h&&a.push(mi(h,mf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(mi(h,mf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mi(d,d.charAt(0)=="/"?LE:ME,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mi(d,UE)),a.join("")};function Sn(a){return new Ur(a)}function Uo(a,h,d){a.j=d?pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function pf(a,h,d){h instanceof gi?(a.i=h,$E(a.i,a.h)):(d||(h=mi(h,FE)),a.i=new gi(h,a.h))}function $e(a,h,d){a.i.set(h,d)}function jo(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,NE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mf=/[#\/\?@]/g,ME=/[#\?:]/g,LE=/[#\?]/g,FE=/[#\?@]/g,UE=/#/g;function gi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&VE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=gi.prototype,t.add=function(a,h){er(this),this.i=null,a=gs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function gf(a,h){er(a),h=gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _f(a,h){return er(a),h=gs(a,h),a.g.has(h)}t.forEach=function(a,h){er(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let V=0;V<k.length;V++)d.push(h[g])}return d},t.V=function(a){er(this);let h=[];if(typeof a=="string")_f(this,a)&&(h=h.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return er(this),this.i=null,a=gs(this,a),_f(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function yf(a,h,d){gf(a,h),0<d.length&&(a.i=null,a.g.set(gs(a,h),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var k=V;G[g]!==""&&(k+="="+encodeURIComponent(String(G[g]))),a.push(k)}}return this.i=a.join("&")};function gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $E(a,h){h&&!a.j&&(er(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(gf(this,g),yf(this,k,d))},a)),a.j=h}function jE(a,h){const d=new fi;if(l.Image){const g=new Image;g.onload=_(tr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(tr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(tr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(tr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function BE(a,h){const d=new fi,g=new AbortController,k=setTimeout(()=>{g.abort(),tr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?tr(d,"TestPingServer: ok",!0,h):tr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),tr(d,"TestPingServer: error",!1,h)})}function tr(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function qE(){this.g=new Vo}function HE(a,h,d){const g=d||"";try{ff(a,function(k,V){let G=k;u(k)&&(G=ut(k)),h.push(g+V+"="+encodeURIComponent(G))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Bo,zl),Bo.prototype.g=function(){return new qo(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function qo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qo,ae),t=qo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function vf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_i(this):yi(this),this.readyState==3&&vf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_i(this))},t.Qa=function(a){this.g&&(this.response=a,_i(this))},t.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,yi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ef(a){let h="";return J(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function tc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ef(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):$e(a,h,d))}function Ye(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ye,ae);var zE=/^https?$/i,WE=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gl.g(),this.v=this.o?Gh(this.o):Gh(Gl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Tf(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(WE,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of d)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Tf(this,V)}};function Tf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,wf(a),Ho(a)}function wf(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?If(this):this.bb())},t.bb=function(){If(this)};function If(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)gt(a.Ea,0,a);else if(_e(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var k=String(a.D).match(df)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!zE.test(k?k.toLowerCase():"")}d=g}if(d)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<Cn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",wf(a)}}finally{Ho(a)}}}}function Ho(a,h){if(a.g){bf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{d.onreadystatechange=g}catch{}}}function bf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Qt(h)}};function Af(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KE(a){const h={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(x(a[g]))continue;var d=R(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[k]||[];h[k]=V,V.push(d)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Rf(a){this.Aa=0,this.i=[],this.j=new fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new af(a&&a.concurrentRequestLimit),this.Da=new qE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Nf(this,null,this.W),Wo(this)};function nc(a){if(Sf(a),a.G==3){var h=a.U++,d=Sn(a.I);if($e(d,"SID",a.K),$e(d,"RID",h),$e(d,"TYPE","terminate"),Ei(a,d),h=new Zn(a,a.j,h),h.L=2,h.v=jo(Sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Mf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fo(h)}Vf(a)}function zo(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function Sf(a){zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wo(a){if(!lf(a.h)&&!a.s){a.s=!0;var h=a.Ga;fe||rn(),Ee||(fe(),Ee=!0),Lt.add(h,a),a.B=0}}function GE(a,h){return cf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=hi(m(a.Ga,a,h),Df(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Zn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Pf(this,k,h),d=Sn(this.I),$e(d,"RID",a),$e(d,"CVER",22),this.D&&$e(d,"X-HTTP-Session-Id",this.D),Ei(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Ef(V)))+"&"+h:this.m&&tc(d,this.m,V)),ec(this.h,k),this.Ua&&$e(d,"TYPE","init"),this.P?($e(d,"$req",h),$e(d,"SID","null"),k.T=!0,Yl(k,d,null)):Yl(k,d,h),this.G=2}}else this.G==3&&(a?Cf(this,a):this.i.length==0||lf(this.h)||Cf(this))};function Cf(a,h){var d;h?d=h.l:d=a.U++;const g=Sn(a.I);$e(g,"SID",a.K),$e(g,"RID",d),$e(g,"AID",a.T),Ei(a,g),a.m&&a.o&&tc(g,a.m,a.o),d=new Zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Pf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ec(a.h,d),Yl(d,g,h)}function Ei(a,h){a.H&&J(a.H,function(d,g){$e(h,g,d)}),a.l&&ff({},function(d,g){$e(h,g,d)})}function Pf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const G=["count="+d];V==-1?0<d?(V=k[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ve=!0;for(let ht=0;ht<d;ht++){let Se=k[ht].g;const yt=k[ht].map;if(Se-=V,0>Se)V=Math.max(0,k[ht].g-100),Ve=!1;else try{HE(yt,G,"req"+Se+"_")}catch{g&&g(yt)}}if(Ve){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function kf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;fe||rn(),Ee||(fe(),Ee=!0),Lt.add(h,a),a.v=0}}function rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=hi(m(a.Fa,a),Df(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Of(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=hi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),zo(this),Of(this))};function sc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Of(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);$e(h,"RID","rpc"),$e(h,"SID",a.K),$e(h,"AID",a.T),$e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(h,"TO",a.ja),$e(h,"TYPE","xmlhttp"),Ei(a,h),a.m&&a.o&&tc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jo(Sn(h)),d.m=null,d.P=!0,rf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,zo(this),rc(this),Rt(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xf(a,h){var d=null;if(a.g==h){Ko(a),sc(a),a.g=null;var g=2}else if(Zl(a.h,h))d=h.D,uf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=No(),_e(g,new Zh(g,d)),Wo(a)}else kf(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&GE(a,h)||g==2&&rc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Df(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new Ur(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Uo(g,"https"),jo(g),k?jE(g.toString(),d):BE(g.toString(),d)}else Rt(2);a.G=0,a.l&&a.l.sa(h),Vf(a),Sf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Vf(a){if(a.G=0,a.ka=[],a.l){const h=hf(a.h);(h.length!=0||a.i.length!=0)&&(M(a.ka,h),M(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Nf(a,h,d){var g=d instanceof Ur?Sn(d):new Ur(d);if(g.g!="")h&&(g.g=h+"."+g.g),$o(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new Ur(null);g&&Uo(V,g),h&&(V.g=h),k&&$o(V,k),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&$e(g,d,h),$e(g,"VER",a.la),Ei(a,g),g}function Mf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ye(new Bo({eb:d})):new Ye(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lf(){}t=Lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){ae.call(this),this.g=new Rf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}C(Ft,ae),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){nc(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ut(a),a=d);h.i.push(new OE(h.Ya++,a)),h.G==3&&Wo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,Ft.aa.N.call(this)};function Ff(a){Wl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Ff,Wl);function Uf(){Kl.call(this),this.status=1}C(Uf,Kl);function _s(a){this.g=a}C(_s,Lf),_s.prototype.ua=function(){_e(this.g,"a")},_s.prototype.ta=function(a){_e(this.g,new Ff(a))},_s.prototype.sa=function(a){_e(this.g,new Uf)},_s.prototype.ra=function(){_e(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Y_=function(){return new Go},Q_=function(){return No()},G_=Lr,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,ha=Mo,ef.COMPLETE="complete",K_=ef,Qh.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Pi=Qh,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,W_=Ye}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});const Zd="@firebase/firestore",ep="4.7.12";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Zs="11.7.0";/**
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
 */const ns=new Yu("@firebase/firestore");function Is(){return ns.logLevel}function ee(t,...e){if(ns.logLevel<=Te.DEBUG){const n=e.map(Zu);ns.debug(`Firestore (${Zs}): ${t}`,...n)}}function qn(t,...e){if(ns.logLevel<=Te.ERROR){const n=e.map(Zu);ns.error(`Firestore (${Zs}): ${t}`,...n)}}function js(t,...e){if(ns.logLevel<=Te.WARN){const n=e.map(Zu);ns.warn(`Firestore (${Zs}): ${t}`,...n)}}function Zu(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,J_(t,r,n)}function J_(t,e,n){let r=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||J_(e,s,r)}function ge(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class X_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class b0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class A0{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new X_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class R0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class S0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new R0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new tp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new tp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Z_(){return new TextEncoder}/**
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
 */class ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=P0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function su(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=Z_(),o=k0(i.encode(np(t,n)),i.encode(np(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function np(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function k0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const rp=-62135596800,sp=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sp);return new rt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<rp)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sp}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-rp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new rt(0,0))}static max(){return new pe(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ip="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):su(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class qe extends _n{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const O0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends _n{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return O0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ip}static keyField(){return new pt([ip])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */const so=-1;function x0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Ar(s,se.empty(),e)}function D0(t){return new Ar(t.readTime,t.key,so)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(pe.min(),se.empty(),so)}static max(){return new Ar(pe.max(),se.empty(),so)}}function V0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */async function ei(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==N0)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function L0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const eh=-1;function El(t){return t==null}function La(t){return t===0&&1/t==-1/0}function F0(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ty="";function U0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=op(e)),e=$0(t.get(n),e);return op(e)}function $0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ty:n+="";break;default:n+=i}}return n}function op(t){return t+ty+""}/**
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
 */function ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lp(this.data.getIterator())}getIteratorFrom(e){return new lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new st(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ry extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ry("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const j0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=j0.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */const sy="server_timestamp",iy="__type__",oy="__previous_value__",ay="__local_write_time__";function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[iy])===null||n===void 0?void 0:n.stringValue)===sy}function Tl(t){const e=t.mapValue.fields[oy];return th(e)?Tl(e):e}function io(t){const e=Rr(t.mapValue.fields[ay].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */const ly="__type__",q0="__max__",na={mapValue:{}},cy="__vector__",Ua="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:z0(t)?9007199254740991:H0(t)?10:11:ue(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?La(o)===La(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ap(o)!==ap(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!An(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function ao(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return cp(t.timestampValue,e.timestampValue);case 4:return cp(io(t),io(e));case 5:return su(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ye(l[u],c[u]);if(f!==0)return f}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Ze(i.latitude),Ze(o.latitude));return l!==0?l:ye(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return up(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},_=(l=p[Ua])===null||l===void 0?void 0:l.arrayValue,C=(c=m[Ua])===null||c===void 0?void 0:c.arrayValue,D=ye(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:up(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=su(c[p],f[p]);if(m!==0)return m;const _=qs(l[c[p]],u[f[p]]);if(_!==0)return _}return ye(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Rr(t),r=Rr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function up(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Hs(t){return iu(t)}function iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=iu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${iu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function fa(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tl(t);return e?16+fa(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Dr(r.fields,(i,o)=>{s+=i.length+fa(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function hp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"integerValue"in t}function nh(t){return!!t&&"arrayValue"in t}function fp(t){return!!t&&"nullValue"in t}function dp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function H0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ly])===null||n===void 0?void 0:n.stringValue)===cy}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===q0}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(qi(this.value))}}function uy(t){const e=[];return Dr(t.fields,(n,r)=>{const s=new pt([n]);if(da(r)){const i=uy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,pe.min(),pe.min(),pe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,pe.min(),pe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,pe.min(),pe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $a{constructor(e,n){this.position=e,this.inclusive=n}}function pp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hy{}class tt extends hy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new G0(e,n,r):n==="array-contains"?new J0(e,r):n==="in"?new X0(e,r):n==="not-in"?new Z0(e,r):n==="array-contains-any"?new eR(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Q0(e,r):new Y0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends hy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new un(e,n)}matches(e){return fy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function fy(t){return t.op==="and"}function dy(t){return K0(t)&&fy(t)}function K0(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function au(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(dy(t))return t.filters.map(e=>au(e)).join(",");{const e=t.filters.map(n=>au(n)).join(",");return`${t.op}(${e})`}}function py(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&py(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function my(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(my).join(" ,")+"}"}(t):"Filter"}class G0 extends tt{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Q0 extends tt{constructor(e,n){super(e,"in",n),this.keys=gy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Y0 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=gy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class J0 extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nh(n)&&ao(n.arrayValue,this.value)}}class X0 extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class Z0 extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ao(this.value.arrayValue,n)}}class eR extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ao(this.value.arrayValue,r))}}/**
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
 */class tR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function gp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tR(t,e,n,r,s,i,o)}function rh(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.Ie=n}return e.Ie}function sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mp(t.startAt,e.startAt)&&mp(t.endAt,e.endAt)}function lu(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ni{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function nR(t,e,n,r,s,i,o,l){return new ni(t,e,n,r,s,i,o,l)}function ih(t){return new ni(t)}function _p(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _y(t){return t.collectionGroup!==null}function Hi(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new lo(i,r))}),n.has(pt.keyField().canonicalString())||e.Ee.push(new lo(pt.keyField(),r))}return e.Ee}function En(t){const e=ge(t);return e.de||(e.de=rR(e,Hi(t))),e.de}function rR(t,e){if(t.limitType==="F")return gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)});const n=t.endAt?new $a(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $a(t.startAt.position,t.startAt.inclusive):null;return gp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cu(t,e){const n=t.filters.concat([e]);return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uu(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wl(t,e){return sh(En(t),En(e))&&t.limitType===e.limitType}function yy(t){return`${rh(En(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>my(s)).join(", ")}]`),El(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hs(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=pp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Hi(r),s)||r.endAt&&!function(o,l,c){const u=pp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Hi(r),s))}(t,e)}function sR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vy(t){return(e,n)=>{let r=!1;for(const s of Hi(t)){const i=iR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?qs(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ny(this.inner)}size(){return this.innerSize}}/**
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
 */const oR=new Qe(se.comparator);function Hn(){return oR}const Ey=new Qe(se.comparator);function ki(...t){let e=Ey;for(const n of t)e=e.insert(n.key,n);return e}function Ty(t){let e=Ey;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return zi()}function wy(){return zi()}function zi(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const aR=new Qe(se.comparator),lR=new st(se.comparator);function we(...t){let e=lR;for(const n of t)e=e.add(n);return e}const cR=new st(ye);function uR(){return cR}/**
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
 */function oh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function Iy(t){return{integerValue:""+t}}function hR(t,e){return F0(e)?Iy(e):oh(t,e)}/**
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
 */class bl{constructor(){this._=void 0}}function fR(t,e,n){return t instanceof ja?function(s,i){const o={fields:{[iy]:{stringValue:sy},[ay]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&th(i)&&(i=Tl(i)),i&&(o.fields[oy]=i),{mapValue:o}}(n,e):t instanceof co?Ay(t,e):t instanceof uo?Ry(t,e):function(s,i){const o=by(s,i),l=yp(o)+yp(s.Re);return ou(o)&&ou(s.Re)?Iy(l):oh(s.serializer,l)}(t,e)}function dR(t,e,n){return t instanceof co?Ay(t,e):t instanceof uo?Ry(t,e):n}function by(t,e){return t instanceof Ba?function(r){return ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ja extends bl{}class co extends bl{constructor(e){super(),this.elements=e}}function Ay(t,e){const n=Sy(e);for(const r of t.elements)n.some(s=>An(s,r))||n.push(r);return{arrayValue:{values:n}}}class uo extends bl{constructor(e){super(),this.elements=e}}function Ry(t,e){let n=Sy(e);for(const r of t.elements)n=n.filter(s=>!An(s,r));return{arrayValue:{values:n}}}class Ba extends bl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function yp(t){return Ze(t.integerValue||t.doubleValue)}function Sy(t){return nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof co&&s instanceof co||r instanceof uo&&s instanceof uo?Bs(r.elements,s.elements,An):r instanceof Ba&&s instanceof Ba?An(r.Re,s.Re):r instanceof ja&&s instanceof ja}(t.transform,e.transform)}class mR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Al{}function Cy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ah(t.key,tn.none()):new Io(t.key,t.data,tn.none());{const n=t.data,r=Mt.empty();let s=new st(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(t.key,r,new qt(s.toArray()),tn.none())}}function gR(t,e,n){t instanceof Io?function(s,i,o){const l=s.value.clone(),c=Ep(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(s,i,o){if(!pa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ep(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Py(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof Io?function(i,o,l,c){if(!pa(i.precondition,o))return l;const u=i.value.clone(),f=Tp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,o,l,c){if(!pa(i.precondition,o))return l;const u=Tp(i.fieldTransforms,c,o),f=o.data;return f.setAll(Py(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return pa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _R(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=by(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function vp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bs(r,s,(i,o)=>pR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Al{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Al{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Py(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ep(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,dR(o,l,n[s]))}return r}function Tp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fR(i,o,e))}return r}class ah extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yR extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Cy(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>vp(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>vp(n,r))}}class lh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return aR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lh(e,n,r,s)}}/**
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
 */var et,Ae;function wR(t){switch(t){case j.OK:return ue(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function ky(t){if(t===void 0)return qn("GRPC error has no .code"),j.UNKNOWN;switch(t){case et.OK:return j.OK;case et.CANCELLED:return j.CANCELLED;case et.UNKNOWN:return j.UNKNOWN;case et.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case et.INTERNAL:return j.INTERNAL;case et.UNAVAILABLE:return j.UNAVAILABLE;case et.UNAUTHENTICATED:return j.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case et.NOT_FOUND:return j.NOT_FOUND;case et.ALREADY_EXISTS:return j.ALREADY_EXISTS;case et.PERMISSION_DENIED:return j.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case et.ABORTED:return j.ABORTED;case et.OUT_OF_RANGE:return j.OUT_OF_RANGE;case et.UNIMPLEMENTED:return j.UNIMPLEMENTED;case et.DATA_LOSS:return j.DATA_LOSS;default:return ue(39323,{code:t})}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const IR=new wr([4294967295,4294967295],0);function wp(t){const e=Z_().encode(t),n=new z_;return n.update(e),new Uint8Array(n.digest())}function Ip(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class ch{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oi(`Invalid padding: ${n}`);if(r<0)throw new Oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=wr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(IR)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=wp(e),[r,s]=Ip(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ch(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=wp(e),[r,s]=Ip(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(pe.min(),s,new Qe(ye),Hn(),we())}}class bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bo(r,n,we(),we(),we())}}/**
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
 */class ma{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Oy{constructor(e,n){this.targetId=e,this.Ce=n}}class xy{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bp{constructor(){this.Fe=0,this.Me=Ap(),this.xe=mt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=we(),n=we(),r=we();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new bo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Ap()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class bR{constructor(e){this.ze=e,this.je=new Map,this.He=Hn(),this.Je=ra(),this.Ye=ra(),this.Ze=new Qe(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(lu(i))if(r===0){const o=new se(i.path);this.tt(n,o,bt.newNoDocument(o,pe.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof ry)return js("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ch(o,s,i)}catch(c){return js(c instanceof Oi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&lu(l.target)){const c=new se(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,bt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=we();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Rl(e,n,this.Ze,this.He,r);return this.He=Hn(),this.Je=ra(),this.Ye=ra(),this.Ze=new Qe(ye),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new bp,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new st(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new st(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new bp),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ra(){return new Qe(se.comparator)}function Ap(){return new Qe(se.comparator)}const AR={asc:"ASCENDING",desc:"DESCENDING"},RR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class CR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||El(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PR(t,e){return qa(t,e.toTimestamp())}function Tn(t){return Oe(!!t,49232),pe.fromTimestamp(function(n){const r=Rr(n);return new rt(r.seconds,r.nanos)}(t))}function uh(t,e){return fu(t,e).canonicalString()}function fu(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vy(t){const e=qe.fromString(t);return Oe(Uy(e),10190,{key:e.toString()}),e}function du(t,e){return uh(t.databaseId,e.path)}function Rc(t,e){const n=Vy(e);if(n.get(1)!==t.databaseId.projectId)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(My(n))}function Ny(t,e){return uh(t.databaseId,e)}function kR(t){const e=Vy(t);return e.length===4?qe.emptyPath():My(e)}function pu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function My(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rp(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function OR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),mt.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),mt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?j.UNKNOWN:ky(u.code);return new te(f,u.message||"")}(o);n=new xy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):pe.min(),l=new Mt({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ma(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?Tn(r.readTime):pe.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ma([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new ma([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TR(s,i),l=r.targetId;n=new Oy(l,o)}}return n}function xR(t,e){let n;if(e instanceof Io)n={update:Rp(t,e.key,e.value)};else if(e instanceof ah)n={delete:du(t,e.key)};else if(e instanceof Vr)n={update:Rp(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof yR))return ue(16599,{ft:e.type});n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:PR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function DR(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(pe.min())&&(o=Tn(i)),new mR(o,s.transformResults||[])}(n,e))):[]}function VR(t,e){return{documents:[Ny(t,e.path)]}}function NR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ny(t,s);const i=function(u){if(u.length!==0)return Fy(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:As(m.field),direction:FR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function MR(t){let e=kR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=Ly(p);return m instanceof un&&dy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new lo(Rs(C.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,El(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new $a(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new $a(_,m)}(n.endAt)),nR(e,s,o,i,l,"F",c,u)}function LR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ly(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Ly(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function FR(t){return AR[t]}function UR(t){return RR[t]}function $R(t){return SR[t]}function As(t){return{fieldPath:t.canonicalString()}}function Rs(t){return pt.fromServerFormat(t.fieldPath)}function Fy(t){return t instanceof tt?function(n){if(n.op==="=="){if(dp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(fp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(fp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:UR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>Fy(s));return r.length===1?r[0]:{compositeFilter:{op:$R(n.op),filters:r}}}(t):ue(54877,{filter:t})}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HR{constructor(){this.yn=new zR}addToCollectionParentIndex(e,n){return this.yn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Ar.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(qe.comparator)).toArray()}}/**
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
 */const Sp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$y=41943040;class Dt{static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt($y,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */class zs{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new zs(0)}static ir(){return new zs(-1)}}/**
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
 */const Cp="LruGarbageCollector",WR=1048576;function Pp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class KR{constructor(e){this.cr=e,this.buffer=new st(Pp),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ee(Cp,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?ee(Cp,"Ignoring IndexedDB error during garbage collection: ",n):await ei(n)}await this.Ir(3e5)})}}class QR{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return q.resolve(vl.le);const r=new KR(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Sp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sp):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Is()<=Te.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function YR(t,e){return new QR(t,e)}/**
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
 */class JR{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wi(r.mutation,s,qt.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ki();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Hn();const o=zi(),l=function(){return zi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Vr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Wi(f.mutation,u,f.mutation.getFieldMask(),rt.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new XR(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zi();let s=new Qe((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||qt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=wy();f.forEach(m=>{if(!i.has(m)){const _=Cy(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Qr());let l=so,c=i;return o.next(u=>q.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(f=>({batchId:l,changes:Ty(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ki();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,m){return new ni(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,bt.newInvalidDocument(f)))});let l=ki();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Wi(f.mutation,u,qt.empty(),rt.now()),Il(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class eS{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return q.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:qR(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),q.resolve()}}/**
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
 */class tS{constructor(){this.overlays=new Qe(se.comparator),this.Or=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Qr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return q.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ER(n,r));let i=this.Or.get(n);i===void 0&&(i=we(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
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
 */class nS{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class hh{constructor(){this.Nr=new st(ot.Br),this.Lr=new st(ot.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new ot(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new se(new qe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new se(new qe([])),r=new ot(n,e),s=new ot(n,e+1);let i=we();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return se.comparator(e.key,n.key)||ye(e.Gr,n.Gr)}static kr(e,n){return ye(e.Gr,n.Gr)||se.comparator(e.key,n.key)}}/**
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
 */class rS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new st(ot.Br)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.zr=this.zr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?eh:this.Jn-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const l=this.jr(o.Gr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ye);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],l=>{r=r.add(l.Gr)})}),q.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new ot(new se(i),0);let l=new st(ye);return this.zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Gr)),!0)},o),q.resolve(this.Jr(l))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return q.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new ot(n,0),s=this.zr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sS{constructor(e){this.Zr=e,this.docs=function(){return new Qe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hn();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||V0(D0(f),r)<=0||(s.has(f.key)||Il(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}Xr(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iS(this)}getSize(e){return q.resolve(this.size)}}class iS extends JR{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class oS{constructor(e){this.persistence=e,this.ei=new ls(n=>rh(n),sh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.ti=0,this.ni=new hh,this.targetCount=0,this.ri=zs.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),q.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.ar(n),q.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.ni.containsKey(n))}}/**
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
 */class jy{constructor(e,n){this.ii={},this.overlays={},this.si=new vl(0),this.oi=!1,this.oi=!0,this._i=new nS,this.referenceDelegate=e(this),this.ai=new oS(this),this.indexManager=new HR,this.remoteDocumentCache=function(s){return new sS(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new BR(n),this.ci=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new rS(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new aS(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return q.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class aS extends M0{constructor(e){super(),this.currentSequenceNumber=e}}class fh{constructor(e){this.persistence=e,this.Ti=new hh,this.Ii=null}static Ei(e){return new fh(e)}get di(){if(this.Ii)return this.Ii;throw ue(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.di,r=>{const s=se.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return q.or([()=>q.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.Ri=new ls(r=>U0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=YR(this,n)}static Ei(e,n){return new Ha(e,n)}li(){}hi(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return q.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?q.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),q.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fa(e.data.value)),n}gr(e,n,r){return q.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class dh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dh(e,n.fromCache,r,s)}}/**
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
 */class cS{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return rA()?8:L0(At())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lS;return this.fs(e,n,o).next(l=>{if(i.result=l,this.Is)return this.gs(e,n,o,l.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(Is()<=Te.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),q.resolve()):(Is()<=Te.DEBUG&&ee("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Is()<=Te.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):q.resolve())}Rs(e,n){if(_p(n))return q.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uu(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.As.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ps(n,l);return this.ys(n,u,o,c.readTime)?this.Rs(e,uu(n,null,"F")):this.ws(e,u,n,c)}))})))}Vs(e,n,r,s){return _p(n)||s.isEqual(pe.min())?q.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?q.resolve(null):(Is()<=Te.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.ws(e,o,n,x0(s,so)).next(l=>l))})}ps(e,n){let r=new st(vy(e));return n.forEach((s,i)=>{Il(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return Is()<=Te.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",bs(n)),this.As.getDocumentsMatchingQuery(e,n,Ar.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ph="LocalStore",uS=3e8;class hS{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Qe(ye),this.Ds=new ls(i=>rh(i),sh),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZR(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function fS(t,e,n,r){return new hS(t,e,n,r)}async function By(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:l}))})})}function dS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let _=q.resolve();return m.forEach(C=>{_=_.next(()=>f.getEntry(c,C)).next(D=>{const M=u.docVersions.get(C);Oe(M!==null,48541),D.version.compareTo(M)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),f.addEntry(D)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qy(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function pS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,M,$){return D.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=uS?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,_,f)&&l.push(n.ai.updateTargetData(i,_))});let c=Hn(),u=we();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(mS(i,o,e.documentUpdates).next(f=>{c=f.xs,u=f.Os})),!r.isEqual(pe.min())){const f=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ss=s,i))}function mS(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee(ph,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{xs:o,Os:s}})}function gS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=eh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _S(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function mu(t,e,n){const r=ge(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ti(o))throw o;ee(ph,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function kp(t,e,n){const r=ge(t);let s=pe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=ge(c),m=p.Ds.get(f);return m!==void 0?q.resolve(p.Ss.get(m)):p.ai.getTargetData(u,f)}(r,o,En(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:we())).next(l=>(yS(r,sR(e),l),{documents:l,Ns:i})))}function yS(t,e,n){let r=t.vs.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Op{constructor(){this.activeTargetIds=uR()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vS{constructor(){this.So=new Op,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Op,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const xp="ConnectivityMonitor";class Dp{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ee(xp,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ee(xp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Sc="RestConnection",TS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wS{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Fa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=gu(),l=this.$o(e,n.toUriEncodedString());ee(Sc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(c,s,i);const{host:u}=new URL(l),f=yl(u);return this.Ko(e,l,c,r,f).then(p=>(ee(Sc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw js(Sc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=TS[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */const Et="WebChannelConnection";class bS extends wS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s,i){const o=gu();return new Promise((l,c)=>{const u=new W_;u.setWithCredentials(!0),u.listenOnce(K_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ha.NO_ERROR:const p=u.getResponseJson();ee(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ha.TIMEOUT:ee(Et,`RPC '${e}' ${o} timed out`),c(new te(j.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const m=u.getStatus();if(ee(Et,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const D=function($){const x=$.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(C.status);c(new te(D,C.message))}else c(new te(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new te(j.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{s_:e,streamId:o,o_:u.getLastErrorCode(),__:u.getLastError()})}}finally{ee(Et,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ee(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}a_(e,n,r){const s=gu(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Y_(),l=Q_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ee(Et,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,_=!1;const C=new IS({Go:M=>{_?ee(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(m||(ee(Et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(Et,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},zo:()=>p.close()}),D=(M,$,x)=>{M.listen($,N=>{try{x(N)}catch(O){setTimeout(()=>{throw O},0)}})};return D(p,Pi.EventType.OPEN,()=>{_||(ee(Et,`RPC '${e}' stream ${s} transport opened.`),C.t_())}),D(p,Pi.EventType.CLOSE,()=>{_||(_=!0,ee(Et,`RPC '${e}' stream ${s} transport closed`),C.r_())}),D(p,Pi.EventType.ERROR,M=>{_||(_=!0,js(Et,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),C.r_(new te(j.UNAVAILABLE,"The operation could not be completed")))}),D(p,Pi.EventType.MESSAGE,M=>{var $;if(!_){const x=M.data[0];Oe(!!x,16349);const N=x,O=(N==null?void 0:N.error)||(($=N[0])===null||$===void 0?void 0:$.error);if(O){ee(Et,`RPC '${e}' stream ${s} received error:`,O);const L=O.status;let J=function(y){const w=et[y];if(w!==void 0)return ky(w)}(L),A=O.message;J===void 0&&(J=j.INTERNAL,A="Unknown error status: "+L+" with message "+O.message),_=!0,C.r_(new te(J,A)),p.close()}else ee(Et,`RPC '${e}' stream ${s} received:`,x),C.i_(x)}}),D(l,G_.STAT_EVENT,M=>{M.stat===ru.PROXY?ee(Et,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===ru.NOPROXY&&ee(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function Cc(){return typeof document<"u"?document:null}/**
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
 */class Hy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Vp="PersistentStream";class zy{constructor(e,n,r,s,i,o,l,c){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Hy(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new te(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ee(Vp,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(ee(Vp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends zy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=OR(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Tn(o.readTime):pe.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=pu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=lu(c)?{documents:VR(i,c)}:{query:NR(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Dy(i,o.resumeToken);const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=qa(i,o.snapshotVersion.toTimestamp());const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=LR(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.F_(n)}}class RS extends zy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=DR(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=pu(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xR(this.serializer,r))};this.F_(n)}}/**
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
 */class SS{}class CS extends SS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,fu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(j.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(e,fu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(j.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(qn(n),this.ea=!1):ee("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const rs="RemoteStore";class kS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{cs(this)&&(ee(rs,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.aa.add(4),await Ao(u),u.la.set("Unknown"),u.aa.delete(4),await Cl(u)}(this))})}),this.la=new PS(r,s)}}async function Cl(t){if(cs(t))for(const e of t.ua)await e(!0)}async function Ao(t){for(const e of t.ua)await e(!1)}function Wy(t,e){const n=ge(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),yh(n)?_h(n):ri(n).b_()&&gh(n,e))}function mh(t,e){const n=ge(t),r=ri(n);n._a.delete(e),r.b_()&&Ky(n,e),n._a.size===0&&(r.b_()?r.v_():cs(n)&&n.la.set("Unknown"))}function gh(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ri(t).U_(e)}function Ky(t,e){t.ha.Ke(e),ri(t).K_(e)}function _h(t){t.ha=new bR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ri(t).start(),t.la.ta()}function yh(t){return cs(t)&&!ri(t).w_()&&t._a.size>0}function cs(t){return ge(t).aa.size===0}function Gy(t){t.ha=void 0}async function OS(t){t.la.set("Online")}async function xS(t){t._a.forEach((e,n)=>{gh(t,e)})}async function DS(t,e){Gy(t),yh(t)?(t.la.ia(e),_h(t)):t.la.set("Unknown")}async function VS(t,e,n){if(t.la.set("Online"),e instanceof xy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s._a.delete(l),s.ha.removeTarget(l))}(t,e)}catch(r){ee(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await za(t,r)}else if(e instanceof ma?t.ha.Xe(e):e instanceof Oy?t.ha.ot(e):t.ha.nt(e),!n.isEqual(pe.min()))try{const r=await qy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ha.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i._a.get(u);f&&i._a.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i._a.get(c);if(!f)return;i._a.set(c,f.withResumeToken(mt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ky(i,c);const p=new mr(f.target,c,u,f.sequenceNumber);gh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(rs,"Failed to raise snapshot:",r),await za(t,r)}}async function za(t,e,n){if(!ti(e))throw e;t.aa.add(1),await Ao(t),t.la.set("Offline"),n||(n=()=>qy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(rs,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Cl(t)})}function Qy(t,e){return e().catch(n=>za(t,n,e))}async function Pl(t){const e=ge(t),n=Pr(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:eh;for(;NS(e);)try{const s=await gS(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,MS(e,s)}catch(s){await za(e,s)}Yy(e)&&Jy(e)}function NS(t){return cs(t)&&t.oa.length<10}function MS(t,e){t.oa.push(e);const n=Pr(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Yy(t){return cs(t)&&!Pr(t).w_()&&t.oa.length>0}function Jy(t){Pr(t).start()}async function LS(t){Pr(t).H_()}async function FS(t){const e=Pr(t);for(const n of t.oa)e.G_(n.mutations)}async function US(t,e,n){const r=t.oa.shift(),s=lh.from(r,e,n);await Qy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pl(t)}async function $S(t,e){e&&Pr(t).W_&&await async function(r,s){if(function(o){return wR(o)&&o!==j.ABORTED}(s.code)){const i=r.oa.shift();Pr(r).D_(),await Qy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pl(r)}}(t,e),Yy(t)&&Jy(t)}async function Np(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(rs,"RemoteStore received new credentials");const r=cs(n);n.aa.add(3),await Ao(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Cl(n)}async function jS(t,e){const n=ge(t);e?(n.aa.delete(2),await Cl(n)):e||(n.aa.add(2),await Ao(n),n.la.set("Unknown"))}function ri(t){return t.Pa||(t.Pa=function(n,r,s){const i=ge(n);return i.Y_(),new AS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:OS.bind(null,t),Jo:xS.bind(null,t),Zo:DS.bind(null,t),Q_:VS.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),yh(t)?_h(t):t.la.set("Unknown")):(await t.Pa.stop(),Gy(t))})),t.Pa}function Pr(t){return t.Ta||(t.Ta=function(n,r,s){const i=ge(n);return i.Y_(),new RS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:LS.bind(null,t),Zo:$S.bind(null,t),z_:FS.bind(null,t),j_:US.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Pl(t)):(await t.Ta.stop(),t.oa.length>0&&(ee(rs,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class vh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new vh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(qn("AsyncQueue",`${e}: ${t}`),ti(t))return new te(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{static emptySet(e){return new Ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ki(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Mp{constructor(){this.Ia=new Qe(se.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ws(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class BS{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class qS{constructor(){this.queries=Lp(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Lp(),i.forEach((o,l)=>{for(const c of l.Ra)c.onError(r)})})(this,new te(j.ABORTED,"Firestore shutting down"))}}function Lp(){return new ls(t=>yy(t),wl)}async function Xy(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new BS,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Eh(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Th(n)}async function Zy(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Ra)l.pa(s)&&(r=!0);o.Aa=s}}r&&Th(n)}function zS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Th(t){t.fa.forEach(e=>{e.next()})}var _u,Fp;(Fp=_u||(_u={})).ya="default",Fp.Cache="cache";class ev{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==_u.Cache}}/**
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
 */class tv{constructor(e){this.key=e}}class nv{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=we(),this.mutatedKeys=we(),this.Ua=vy(e),this.Ka=new Ds(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Mp,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=Il(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let M=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),M=!0):this.ja(m,_)||(r.track({type:2,doc:_}),M=!0,(c&&this.Ua(_,c)>0||u&&this.Ua(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),M=!0):m&&!_&&(r.track({type:1,doc:m}),M=!0,(c||u)&&(l=!0)),M&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:l,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(_,C){const D=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:M})}};return D(_)-D(C)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(r),s=s!=null&&s;const l=n&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,u=c!==this.Qa;return this.Qa=c,o.length!==0||u?{snapshot:new Ws(this.query,e.Ka,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Mp,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=we(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new nv(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new tv(r))}),n}Xa(e){this.qa=e.Ns,this.$a=we();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return Ws.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const wh="SyncEngine";class KS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GS{constructor(e){this.key=e,this.tu=!1}}class QS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new ls(l=>yy(l),wl),this.iu=new Map,this.su=new Set,this.ou=new Qe(se.comparator),this._u=new Map,this.au=new hh,this.uu={},this.cu=new Map,this.lu=zs.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function YS(t,e,n=!0){const r=lv(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await rv(r,e,n,!0),s}async function JS(t,e){const n=lv(t);await rv(n,e,!0,!1)}async function rv(t,e,n,r){const s=await _S(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await XS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wy(t.remoteStore,s),l}async function XS(t,e,n,r,s){t.Pu=(p,m,_)=>async function(D,M,$,x){let N=M.view.Ga($);N.ys&&(N=await kp(D.localStore,M.query,!1).then(({documents:A})=>M.view.Ga(A,N)));const O=x&&x.targetChanges.get(M.targetId),L=x&&x.targetMismatches.get(M.targetId)!=null,J=M.view.applyChanges(N,D.isPrimaryClient,O,L);return $p(D,M.targetId,J.Ya),J.snapshot}(t,p,m,_);const i=await kp(t.localStore,e,!0),o=new WS(e,i.Ns),l=o.Ga(i.documents),c=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$p(t,n,u.Ya);const f=new KS(e,n,o);return t.ru.set(e,f),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function ZS(t,e,n){const r=ge(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!wl(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&mh(r.remoteStore,s.targetId),yu(r,s.targetId)}).catch(ei)):(yu(r,s.targetId),await mu(r.localStore,s.targetId,!0))}async function eC(t,e){const n=ge(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mh(n.remoteStore,r.targetId))}async function tC(t,e,n){const r=lC(t);try{const s=await function(o,l){const c=ge(o),u=rt.now(),f=l.reduce((_,C)=>_.add(C.key),we());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Hn(),D=we();return c.Cs.getEntries(_,f).next(M=>{C=M,C.forEach(($,x)=>{x.isValidDocument()||(D=D.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(M=>{p=M;const $=[];for(const x of l){const N=_R(x,p.get(x.key).overlayedDocument);N!=null&&$.push(new Vr(x.key,N,uy(N.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,$,l)}).next(M=>{m=M;const $=M.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(_,M.batchId,$)})}).then(()=>({batchId:m.batchId,changes:Ty(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.uu[o.currentUser.toKey()];u||(u=new Qe(ye)),u=u.insert(l,c),o.uu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ro(r,s.changes),await Pl(r.remoteStore)}catch(s){const i=Eh(s,"Failed to persist write");n.reject(i)}}async function sv(t,e){const n=ge(t);try{const r=await pS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Oe(o.tu,14607):s.removedDocuments.size>0&&(Oe(o.tu,42227),o.tu=!1))}),await Ro(n,r,e)}catch(r){await ei(r)}}function Up(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const l=o.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.Ra)m.ga(l)&&(u=!0)}),u&&Th(c)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nC(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Qe(se.comparator);o=o.insert(i,bt.newNoDocument(i,pe.min()));const l=we().add(i),c=new Rl(pe.min(),new Map,new Qe(ye),o,l);await sv(r,c),r.ou=r.ou.remove(i),r._u.delete(e),Ih(r)}else await mu(r.localStore,e,!1).then(()=>yu(r,e,n)).catch(ei)}async function rC(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await dS(n.localStore,e);ov(n,r,null),iv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await ei(s)}}async function sC(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Oe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);ov(r,e,n),iv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await ei(s)}}function iv(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function ov(t,e,n){const r=ge(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function yu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||av(t,r)})}function av(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(mh(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Ih(t))}function $p(t,e,n){for(const r of n)r instanceof tv?(t.au.addReference(r.key,e),iC(t,r)):r instanceof nv?(ee(wh,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||av(t,r.key)):ue(19791,{Iu:r})}function iC(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(ee(wh,"New document in limbo: "+n),t.su.add(r),Ih(t))}function Ih(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new se(qe.fromString(e)),r=t.lu.next();t._u.set(r,new GS(n)),t.ou=t.ou.insert(n,r),Wy(t.remoteStore,new mr(En(ih(n.path)),r,"TargetPurposeLimboResolution",vl.le))}}async function Ro(t,e,n){const r=ge(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((l,c)=>{o.push(r.Pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=dh.Ps(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(c,u){const f=ge(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.ls,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>q.forEach(m.hs,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!ti(p))throw p;ee(ph,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ss.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);f.Ss=f.Ss.insert(m,D)}}}(r.localStore,i))}async function oC(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(wh,"User change. New user:",e.toKey());const r=await By(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(l=>{l.forEach(c=>{c.reject(new te(j.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Ms)}}function aC(t,e){const n=ge(t),r=n._u.get(e);if(r&&r.tu)return we().add(r.key);{let s=we();const i=n.iu.get(e);if(!i)return s;for(const o of i){const l=n.ru.get(o);s=s.unionWith(l.view.Wa)}return s}}function lv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nC.bind(null,e),e.nu.Q_=HS.bind(null,e.eventManager),e.nu.Tu=zS.bind(null,e.eventManager),e}function lC(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sC.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return fS(this.persistence,new cS,e.initialUser,this.serializer)}Ru(e){return new jy(fh.Ei,this.serializer)}Au(e){return new vS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class cC extends Wa{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Oe(this.persistence.referenceDelegate instanceof Ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GR(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new jy(r=>Ha.Ei(r,n),this.serializer)}}class vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oC.bind(null,this.syncEngine),await jS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qS}()}createDatastore(e){const n=Sl(e.databaseInfo.databaseId),r=function(i){return new bS(i)}(e.databaseInfo);return function(i,o,l,c){return new CS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new kS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Up(this.syncEngine,n,0),function(){return Dp.C()?new Dp:new ES}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new QS(s,i,o,l,c,u);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ee(rs,"RemoteStore shutting down."),i.aa.add(5),await Ao(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vu.provider={build:()=>new vu};/**
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
 */class cv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const kr="FirestoreClient";class uC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Eh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),ee(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await By(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hC(t);ee(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Np(e.remoteStore,s)),t._onlineComponents=e}async function hC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(kr,"Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;js("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Wa)}}else ee(kr,"Using default OfflineComponentProvider"),await Pc(t,new cC(void 0));return t._offlineComponents}async function uv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(kr,"Using user provided OnlineComponentProvider"),await jp(t,t._uninitializedComponentsProvider._online)):(ee(kr,"Using default OnlineComponentProvider"),await jp(t,new vu))),t._onlineComponents}function fC(t){return uv(t).then(e=>e.syncEngine)}async function hv(t){const e=await uv(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=ZS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eC.bind(null,e.syncEngine),n}function dC(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new cv({next:m=>{f.yu(),o.enqueueAndForget(()=>Zy(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new te(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new te(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ev(ih(l.path),f,{includeMetadataChanges:!0,Fa:!0});return Xy(i,p)}(await hv(t),t.asyncQueue,e,n,r)),r.promise}function pC(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new cv({next:m=>{f.yu(),o.enqueueAndForget(()=>Zy(i,p)),m.fromCache&&c.source==="server"?u.reject(new te(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ev(l,f,{includeMetadataChanges:!0,Fa:!0});return Xy(i,p)}(await hv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bp=new Map;/**
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
 */function dv(t,e,n){if(!n)throw new te(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new te(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qp(t){if(!se.isDocumentKey(t))throw new te(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(se.isDocumentKey(t))throw new te(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kl(t);throw new te(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const pv="firestore.googleapis.com",zp=!0;class Wp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pv,this.ssl=zp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:zp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$y;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WR)throw new te(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I0;switch(r.type){case"firstParty":return new S0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Bp.delete(n),r.terminate())}(this),Promise.resolve()}}function gC(t,e,n,r={}){var s;t=hn(t,Ol);const i=yl(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&F_(`https://${c}`),o.host!==pv&&o.host!==c&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!es(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Tt.MOCK_USER;else{f=Yb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new te(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Tt(m)}t._authCredentials=new b0(new X_(f,p))}}/**
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
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Ir extends us{constructor(e,n,r){super(e,n,ih(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new se(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Kp(t,e,...n){if(t=lt(t),dv("collection","path",e),t instanceof Ol){const r=qe.fromString(e,...n);return Hp(r),new Ir(t,null,r)}{if(!(t instanceof Ot||t instanceof Ir))throw new te(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Hp(r),new Ir(t.firestore,null,r)}}function Ss(t,e,...n){if(t=lt(t),arguments.length===1&&(e=ey.newId()),dv("doc","path",e),t instanceof Ol){const r=qe.fromString(e,...n);return qp(r),new Ot(t,null,new se(r))}{if(!(t instanceof Ot||t instanceof Ir))throw new te(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return qp(r),new Ot(t.firestore,t instanceof Ir?t.converter:null,new se(r))}}/**
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
 */const Gp="AsyncQueue";class Qp{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Hy(this,"async_queue_retry"),this.ju=()=>{const r=Cc();r&&ee(Gp,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Un;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!ti(e))throw e;ee(Gp,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,qn("INTERNAL UNHANDLED ERROR: ",Yp(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=vh.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ue(47125,{ec:Yp(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function Yp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class hs extends Ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qp(e),this._firestoreClient=void 0,await e}}}function _C(t,e){const n=typeof t=="object"?t:B_(),r=typeof t=="string"?t:Fa,s=Xu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gb("firestore");i&&gC(s,...i)}return s}function bh(t){if(t._terminated)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yC(t),t._firestoreClient}function yC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new B0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new uC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(mt.fromBase64String(e))}catch(n){throw new te(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ah{constructor(e){this._methodName=e}}/**
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
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class Sh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const vC=/^__.*__$/;class EC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class mv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{oc:t})}}class Ch{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ka(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(gv(this.oc)&&vC.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class TC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sl(e)}dc(e,n,r,s=!1){return new Ch({oc:e,methodName:n,Ec:r,path:pt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new TC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _v(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);Ph("Data must be an object, but it was:",o,r);const l=yv(r,o);let c,u;if(i.merge)c=new qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Eu(e,p,n);if(!o.contains(m))throw new te(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ev(f,m)||f.push(m)}c=new qt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new EC(new Mt(l),c,u)}class Vl extends Ah{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vl}}function wC(t,e,n,r){const s=t.dc(1,e,n);Ph("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Dr(r,(c,u)=>{const f=kh(e,c,n);u=lt(u);const p=s.hc(f);if(u instanceof Vl)i.push(f);else{const m=So(u,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new qt(i);return new mv(o,l,s.fieldTransforms)}function IC(t,e,n,r,s,i){const o=t.dc(1,e,n),l=[Eu(e,r,n)],c=[s];if(i.length%2!=0)throw new te(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Eu(e,i[m])),c.push(i[m+1]);const u=[],f=Mt.empty();for(let m=l.length-1;m>=0;--m)if(!Ev(u,l[m])){const _=l[m];let C=c[m];C=lt(C);const D=o.hc(_);if(C instanceof Vl)u.push(_);else{const M=So(C,D);M!=null&&(u.push(_),f.set(_,M))}}const p=new qt(u);return new mv(f,p,o.fieldTransforms)}function bC(t,e,n,r=!1){return So(n,t.dc(r?4:3,e))}function So(t,e){if(vv(t=lt(t)))return Ph("Unsupported field value:",e,t),yv(t,e);if(t instanceof Ah)return function(r,s){if(!gv(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=So(l,s.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Rh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:Dy(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sh)return function(o,l){return{mapValue:{fields:{[ly]:{stringValue:cy},[Ua]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Tc("VectorValues must only contain numeric values.");return oh(l.serializer,u)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${kl(r)}`)}(t,e)}function yv(t,e){const n={};return ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,s)=>{const i=So(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Rh||t instanceof Ks||t instanceof Ot||t instanceof Ah||t instanceof Sh)}function Ph(t,e,n){if(!vv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=kl(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Eu(t,e,n){if((e=lt(e))instanceof xl)return e._internalPath;if(typeof e=="string")return kh(t,e);throw Ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const AC=new RegExp("[~\\*/\\[\\]]");function kh(t,e,n){if(e.search(AC)>=0)throw Ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xl(...e.split("."))._internalPath}catch{throw Ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(j.INVALID_ARGUMENT,l+t+c)}function Ev(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Tv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RC extends Tv{data(){return super.data()}}function Nl(t,e){return typeof e=="string"?kh(t,e):e instanceof xl?e._internalPath:e._delegate._internalPath}/**
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
 */function SC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oh{}class wv extends Oh{}function CC(t,e,...n){let r=[];e instanceof Oh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof xh).length,l=i.filter(c=>c instanceof Ml).length;if(o>1||o>0&&l>0)throw new te(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ml extends wv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ml(e,n,r)}_apply(e){const n=this._parse(e);return Iv(e._query,n),new us(e.firestore,e.converter,cu(e._query,n))}_parse(e){const n=Dl(e.firestore);return function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new te(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Xp(p,f);const C=[];for(const D of p)C.push(Jp(c,i,D));m={arrayValue:{values:C}}}else m=Jp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Xp(p,f),m=bC(l,o,p,f==="in"||f==="not-in");return tt.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function PC(t,e,n){const r=e,s=Nl("where",t);return Ml._create(s,r,n)}class xh extends Oh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Iv(o,c),o=cu(o,c)}(e._query,n),new us(e.firestore,e.converter,cu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dh extends wv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lo(i,o)}(e._query,this._field,this._direction);return new us(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ni(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function kC(t,e="asc"){const n=e,r=Nl("orderBy",t);return Dh._create(r,n)}function Jp(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new te(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_y(e)&&n.indexOf("/")!==-1)throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!se.isDocumentKey(r))throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hp(t,new se(r))}if(n instanceof Ot)return hp(t,n._key);throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kl(n)}.`)}function Xp(t,e){if(!Array.isArray(t)||t.length===0)throw new te(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OC{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ua].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Sh(i)}convertGeoPoint(e){return new Rh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Oe(Uy(r),9688,{name:e});const s=new oo(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bv(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Av extends Tv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ga extends Av{data(e={}){return super.data(e)}}class xC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ga(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:DC(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
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
 */function Zp(t){t=hn(t,Ot);const e=hn(t.firestore,hs);return dC(bh(e),t._key).then(n=>FC(e,t,n))}class Rv extends OC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function VC(t){t=hn(t,us);const e=hn(t.firestore,hs),n=bh(e),r=new Rv(e);return SC(t._query),pC(n,t._query).then(s=>new xC(e,r,t,s))}function NC(t,e,n){t=hn(t,Ot);const r=hn(t.firestore,hs),s=bv(t.converter,e);return Ll(r,[_v(Dl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function em(t,e,n,...r){t=hn(t,Ot);const s=hn(t.firestore,hs),i=Dl(s);let o;return o=typeof(e=lt(e))=="string"||e instanceof xl?IC(i,"updateDoc",t._key,e,n,r):wC(i,"updateDoc",t._key,e),Ll(s,[o.toMutation(t._key,tn.exists(!0))])}function MC(t){return Ll(hn(t.firestore,hs),[new ah(t._key,tn.none())])}function LC(t,e){const n=hn(t.firestore,hs),r=Ss(t),s=bv(t.converter,e);return Ll(n,[_v(Dl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function Ll(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>tC(await fC(r),s,i)),i.promise}(bh(t),e)}function FC(t,e,n){const r=n.docs.get(e._key),s=new Rv(t);return new Av(t,s,e._key,r,new xi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Zs=s})(Xs),$s(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new hs(new A0(r.getProvider("auth-internal")),new C0(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tr(Zd,ep,e),Tr(Zd,ep,"esm2017")})();function Vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UC=Sv,Cv=new To("auth","Firebase",Sv());/**
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
 */const Ga=new Yu("@firebase/auth");function $C(t,...e){Ga.logLevel<=Te.WARN&&Ga.warn(`Auth (${Xs}): ${t}`,...e)}function _a(t,...e){Ga.logLevel<=Te.ERROR&&Ga.error(`Auth (${Xs}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Nh(t,...e)}function wn(t,...e){return Nh(t,...e)}function Pv(t,e,n){const r=Object.assign(Object.assign({},UC()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Pv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cv.create(t,...e)}function ce(t,e,...n){if(!t)throw Nh(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function zn(t,e){t||Mn(e)}/**
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
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jC(){return tm()==="http:"||tm()==="https:"}function tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Mh(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WC=new Co(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,s={}){return Ov(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Zb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&yl(t.emulatorConfig.host)&&(u.credentials="include"),kv.fetch()(await xv(t,t.config.apiHost,n,l),u)})}async function Ov(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HC),e);try{const s=new GC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ia(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pv(t,f,u);fn(t,f)}}catch(s){if(s instanceof Qn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Po(t,e,n,r,s={}){const i=await Mr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function xv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mh(t.config,s):`${t.config.apiScheme}://${s}`;return zC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function KC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),WC.get())})}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function nm(t){return t!==void 0&&t.enterprise!==void 0}class QC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YC(t,e){return Mr(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function JC(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function Qa(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Lh(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ki(kc(s.auth_time)),issuedAtTime:Ki(kc(s.iat)),expirationTime:Ki(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function Lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=V_(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rm(t){const e=Lh(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&ZC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ho(t,Qa(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dv(i.providerUserInfo):[],l=nP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function tP(t){const e=lt(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rP(t,e){const n=await Ov(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await xv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sP(t,e){return Mr(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return tP(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await ho(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:L,providerData:J,stsTokenManager:A}=n;ce(N&&A,e,"internal-error");const v=Vs.fromJSON(this.name,A);ce(typeof N=="string",e,"internal-error"),sr(p,e.name),sr(m,e.name),ce(typeof O=="boolean",e,"internal-error"),ce(typeof L=="boolean",e,"internal-error"),sr(_,e.name),sr(C,e.name),sr(D,e.name),sr(M,e.name),sr($,e.name),sr(x,e.name);const y=new on({uid:N,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:L,photoURL:C,phoneNumber:_,tenantId:D,stsTokenManager:v,createdAt:$,lastLoginAt:x});return J&&Array.isArray(J)&&(y.providerData=J.map(w=>Object.assign({},w))),M&&(y._redirectEventId=M),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ya(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Vs;l.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const sm=new Map;function Ln(t){zn(t instanceof Function,"Expected a class definition");let e=sm.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sm.set(t,e),e)}/**
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
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vv.type="NONE";const im=Vv;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qa(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Ln(im),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(im);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Qa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ns(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ns(i,e,r))}}/**
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
 */function om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($v(e))return"Blackberry";if(jv(e))return"Webos";if(Mv(e))return"Safari";if((e.includes("chrome/")||Lv(e))&&!e.includes("edge/"))return"Chrome";if(Uv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nv(t=At()){return/firefox\//i.test(t)}function Mv(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lv(t=At()){return/crios\//i.test(t)}function Fv(t=At()){return/iemobile/i.test(t)}function Uv(t=At()){return/android/i.test(t)}function $v(t=At()){return/blackberry/i.test(t)}function jv(t=At()){return/webos/i.test(t)}function Fh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iP(t=At()){var e;return Fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oP(){return nA()&&document.documentMode===10}function Bv(t=At()){return Fh(t)||Uv(t)||jv(t)||$v(t)||/windows phone/i.test(t)||Fv(t)}/**
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
 */function qv(t,e=[]){let n;switch(t){case"Browser":n=om(At());break;case"Worker":n=`${om(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */async function lP(t,e={}){return Mr(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
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
 */class hP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new aP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qa(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject($n(this));const n=e?lt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lP(this),n=new uP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fs(t){return lt(t)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=uA(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fP(t){Fl=t}function Hv(t){return Fl.loadJS(t)}function dP(){return Fl.recaptchaEnterpriseScript}function pP(){return Fl.gapiScript}function mP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gP{constructor(){this.enterprise=new _P}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _P{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yP="recaptcha-enterprise",zv="NO_RECAPTCHA";class vP{constructor(e){this.type=yP,this.auth=fs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{YC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new QC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;nm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(zv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&nm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=dP();c.length!==0&&(c+=l),Hv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function lm(t,e,n,r=!1,s=!1){const i=new vP(t);let o;if(s)o=zv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Iu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await lm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function EP(t,e){const n=Xu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function TP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=fs(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wv(e),{host:o,port:l}=IP(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(es(u,r.config.emulator)&&es(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bP(),yl(o)&&F_(`${i}//${o}${c}`)}function Wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IP(t){const e=Wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cm(o)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function AP(t,e){return Mr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RP(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
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
 */async function SP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function CP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class fo extends Uh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,n,"signInWithPassword",RP);case"emailLink":return SP(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,r,"signUpPassword",AP);case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const PP="http://localhost";class ss extends Uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
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
 */function kP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OP(t){const e=Si(Ci(t)).link,n=e?Si(Ci(e)).deep_link_id:null,r=Si(Ci(t)).deep_link_id;return(r?Si(Ci(r)).link:null)||r||n||e||t}class $h{constructor(e){var n,r,s,i,o,l;const c=Si(Ci(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=kP((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OP(e);try{return new $h(n)}catch{return null}}}/**
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
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$h.parseLink(n);return ce(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends Kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends ko{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class dr extends ko{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class pr extends ko{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function xP(t,e){return Po(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=um(r);return new is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=um(r);return new is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ja extends Qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ja(e,n,r,s)}}function Gv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,i,e,r):i})}async function DP(t,e,n=!1){const r=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
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
 */async function VP(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject($n(r));const s="reauthenticate";try{const i=await ho(t,Gv(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Lh(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
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
 */async function Qv(t,e,n=!1){if(Jt(t.app))return Promise.reject($n(t));const r="signIn",s=await Gv(t,r,e),i=await is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NP(t,e){return Qv(fs(t),e)}/**
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
 */async function Yv(t){const e=fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MP(t,e,n){if(Jt(t.app))return Promise.reject($n(t));const r=fs(t),o=await Iu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yv(t),c}),l=await is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LP(t,e,n){return Jt(t.app)?Promise.reject($n(t)):NP(lt(t),si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yv(t),r})}function FP(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function UP(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function Jv(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function $P(t){return lt(t).signOut()}const Xa="__sak";/**
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
 */class Xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jP=1e3,BP=10;class Zv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const qP=Zv;/**
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
 */class eE extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eE.type="SESSION";const tE=eE;/**
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
 */function jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=jh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function WP(t){In().location.href=t}/**
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
 */function nE(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function KP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QP(){return nE()?self:null}/**
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
 */const rE="firebaseLocalStorageDb",YP=1,Za="firebaseLocalStorage",sE="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function JP(){const t=indexedDB.deleteDatabase(rE);return new Oo(t).toPromise()}function bu(){const t=indexedDB.open(rE,YP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:sE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await JP(),e(await bu()))})})}async function hm(t,e,n){const r=$l(t,!0).put({[sE]:e,value:n});return new Oo(r).toPromise()}async function XP(t,e){const n=$l(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function fm(t,e){const n=$l(t,!0).delete(e);return new Oo(n).toPromise()}const ZP=800,e1=3;class iE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(QP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KP(),!this.activeServiceWorker)return;this.sender=new zP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await hm(e,Xa,"1"),await fm(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$l(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iE.type="LOCAL";const t1=iE;new Co(3e4,6e4);/**
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
 */function n1(t,e){return e?Ln(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bh extends Uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r1(t){return Qv(t.auth,new Bh(t),t.bypassAuthState)}function s1(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),VP(n,new Bh(t),t.bypassAuthState)}async function i1(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),DP(n,new Bh(t),t.bypassAuthState)}/**
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
 */class oE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return i1;case"reauthViaPopup":case"reauthViaRedirect":return s1;default:fn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o1=new Co(2e3,1e4);class Cs extends oE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}Cs.currentPopupAction=null;/**
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
 */const a1="pendingRedirect",va=new Map;class l1 extends oE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await c1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c1(t,e){const n=f1(e),r=h1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function u1(t,e){va.set(t._key(),e)}function h1(t){return Ln(t._redirectPersistence)}function f1(t){return ya(a1,t.config.apiKey,t.name)}async function d1(t,e,n=!1){if(Jt(t.app))return Promise.reject($n(t));const r=fs(t),s=n1(r,e),o=await new l1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const p1=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aE(t);default:return!1}}/**
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
 */async function _1(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
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
 */const y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function E1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _1(t);for(const n of e)try{if(T1(n))return}catch{}fn(t,"unauthorized-domain")}function T1(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v1.test(n))return!1;if(y1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const w1=new Co(3e4,6e4);function pm(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var r,s,i;function o(){pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pm(),n(wn(t,"network-request-failed"))},timeout:w1.get()})}if(!((s=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const l=mP("iframefcb");return In()[l]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},Hv(`${pP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function b1(t){return Ea=Ea||I1(t),Ea}/**
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
 */const A1=new Co(5e3,15e3),R1="__/auth/iframe",S1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mh(e,S1):`https://${t.config.authDomain}/${R1}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},s=P1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wo(r).slice(1)}`}async function O1(t){const e=await b1(t),n=In().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:k1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=In().setTimeout(()=>{i(o)},A1.get());function c(){In().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,V1=600,N1="_blank",M1="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(t,e,n,r=D1,s=V1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},x1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(l=Lv(u)?N1:n),Nv(u)&&(e=e||M1,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(iP(u)&&l!=="_self")return F1(e||"",l),new mm(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new mm(p)}function F1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const U1="__/auth/handler",$1="emulator/auth/handler",j1=encodeURIComponent("fac");async function gm(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:s};if(e instanceof Kv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${j1}=${encodeURIComponent(c)}`:"";return`${B1(t)}?${wo(l).slice(1)}${u}`}function B1({config:t}){return t.emulator?Mh(t,$1):`https://${t.authDomain}/${U1}`}/**
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
 */const Oc="webStorageSupport";class q1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tE,this._completeRedirectFn=d1,this._overrideRedirectResult=u1}async _openPopup(e,n,r,s){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gm(e,n,r,Tu(),s);return L1(e,o,jh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await gm(e,n,r,Tu(),s);return WP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O1(e),r=new m1(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bv()||Mv()||Fh()}}const H1=q1;var _m="@firebase/auth",ym="1.10.2";/**
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
 */class z1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K1(t){$s(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(t)},u=new hP(r,s,i,c);return TP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new ts("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new z1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(_m,ym,W1(t)),Tr(_m,ym,"esm2017")}/**
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
 */const G1=5*60,Q1=L_("authIdTokenMaxAge")||G1;let vm=null;const Y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q1)return;const s=n==null?void 0:n.token;vm!==s&&(vm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J1(t=B_()){const e=Xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EP(t,{popupRedirectResolver:H1,persistence:[t1,qP,tE]}),r=L_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Y1(i.toString());UP(n,o,()=>o(n.currentUser)),FP(n,l=>o(l))}}const s=N_("auth");return s&&wP(n,`http://${s}`),n}function X1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",X1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K1("Browser");const Z1={apiKey:"AIzaSyAH7Qc8QkTR8AWBOxptwHH6IxIXpIx-c00",authDomain:"calisteniarg-f3d40.firebaseapp.com",projectId:"calisteniarg-f3d40",storageBucket:"calisteniarg-f3d40.firebasestorage.app",messagingSenderId:"641759769239",appId:"1:641759769239:web:9e4d3ffdd5dc9645f56fd2"},lE=j_(Z1),Hr=_C(lE),Di=J1(lE),ii=g_("profile",{state:()=>({profile:{id:null,email:"",nickname:"",routines:[],charge:!1}}),actions:{async loadProfile(t,e){if(!t)throw new Error("UID de usuario inválido");const n=Ss(Hr,"profiles",t);try{const r=await Zp(n);if(r.exists()){const s=r.data();this.profile={id:t,email:s.email,nickname:s.nickname||"",routines:[]}}else await NC(n,{idUser:t,email:e,nickname:""}),this.profile={id:t,email:e,nickname:"",routines:[]};this.getRutinas()}catch(r){throw console.error("Error al cargar o crear el perfil:",r),r}},async setNickname(t){if(!this.profile.id)throw new Error("Usuario no autenticado");const e=Ss(Hr,"profiles",this.profile.id);try{await em(e,{nickname:t}),this.profile.nickname=t}catch(n){throw console.error("Error al actualizar el nickname:",n),n}},async getRutinas(){if(console.log("GetRutinas()"),!this.profile.id)throw new Error("Usuario no autenticado");const t=Kp(Hr,"routines"),e=[PC("idUser","==",this.profile.id),kC("fechaCreacion","desc")],n=CC(t,...e);try{const r=await VC(n),s=[];r.forEach(i=>{s.push({id:i.id,...i.data()})}),this.profile.routines=s}catch(r){throw console.error("Error al obtener las rutinas:",r),r}},async getRutina(t){try{const e=Ss(Hr,"routines",t),n=await Zp(e);return n.exists()?{id:n.id,...n.data()}:(console.warn(`No se encontró la rutina con ID: ${t}`),null)}catch(e){throw console.error(`Error al obtener la rutina con ID ${t}:`,e),e}},getRutinaLocal(t){return this.profile.routines.find(e=>e.id===t)},async deleteRutina(t){try{this.profile.routines=this.profile.routines.filter(e=>e.id!==t),await MC(Ss(Hr,"routines",t))}catch(e){throw console.error("Error al eliminar la rutina:",e),e}},async updateRutina(t){if(!t.id)throw new Error("Rutina sin ID");const e=Ss(Hr,"routines",t.id),{id:n,...r}=t;try{console.log("Antes del horror:",t),await em(e,r);const s=this.profile.routines.findIndex(i=>i.id===t.id);s!==-1&&this.profile.routines.splice(s,1,t)}catch(s){throw console.error("Error al actualizar la rutina:",s),s}},async createRutinaFirebase(t){const e={...t,fechaCreacion:new Date().toISOString(),idUser:this.profile.id};try{const n=await LC(Kp(Hr,"routines"),e),r={id:n.id,...e};return this.profile.routines.unshift(r),n}catch(n){throw console.error("Error al crear la rutina en Firebase:",n),n}}},getters:{getNickname:t=>t.profile.nickname,getUserRoutines:t=>t.profile.routines}}),jl=g_("user",{state:()=>({user:null}),actions:{initAuthListener(){Jv(Di,async t=>{const e=ii();t?(this.user={email:t.email,id:t.uid},await e.loadProfile(t.uid,t.email),console.log("Sesión iniciada. Perfil")):(this.user=null,e.$reset())})},async register(t,e){try{return await MP(Di,t,e),{ok:!0,message:"Registration successful!"}}catch(n){return console.error("Error en registro:",n.message),{ok:!1,message:this.translateFirebaseError(n.code)}}},async login(t,e){try{return await LP(Di,t,e),{ok:!0,message:"Login successful!"}}catch(n){return console.error("Error en login:",n.message),{ok:!1,message:this.translateFirebaseError(n.code)}}},translateFirebaseError(t){return t?(console.log(t),{"auth/email-already-in-use":"El email ya esta en uso.","auth/invalid-credential":"Credenciales inválidas.","auth/user-not-found":"No existe una cuenta con ese correo.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos fallidos.","auth/network-request-failed":"Problema de conexión.","auth/invalid-email":"El formato del email no es válido."}[t]||"Error de autenticación. Intentá nuevamente."):"Error desconocido."},async logout(){try{await $P(Di),this.user=null}catch(t){console.error("Error en logout:",t.message)}},generateDefaultUsername(t){if(!t||typeof t!="string")return"";const e=t.indexOf("@");return e!==-1?t.substring(0,e):t}}}),ek={__name:"NotifierComponent",props:{message:String,type:String},setup(t){const e=t,n=dt(()=>e.type==="success"?"bg-success":"bg-danger");return(r,s)=>(le(),vo(jn,{name:"fade-slide",mode:"out-in",onAfterLeave:s[0]||(s[0]=i=>r.$emit("after-leave"))},{default:Ke(()=>[Be(S("div",{class:Vt(["notifier p-3 rounded text-light",n.value])},We(t.message),3),[[Nn,t.message]])]),_:1}))}},cE=Gn(ek,[["__scopeId","data-v-c66f5abe"]]),tk={class:"w-100 mb-auto mt-5 mx-auto mt-md-auto d-flex justify-content-center align-items-center"},nk={class:"d-flex justify-content-between"},rk={class:"mb-3 text-start"},sk={class:"mb-3 text-start"},ik={class:"text-start mt-3 text-light"},ok={__name:"LoginPage",setup(t){const e=Fe(""),n=Fe(""),r=Fe(!1),s=Fe(!1),i=Fe({message:"",type:""}),o=jl(),l=async()=>{i.value={message:"",type:""},s.value=!1;try{const u=await o.login(e.value,n.value);u.ok?(i.value={message:"¡Inicio de sesión exitoso!",type:"success"},s.value=!0,setTimeout(()=>{s.value=!1,o.$router.push("/dashboard")},2e3)):(i.value={message:u.message,type:"error"},s.value=!0,setTimeout(()=>{s.value=!1},2e3))}catch(u){console.error("Unexpected error:",u),i.value={message:"Error inesperado. Intentá de nuevo.",type:"error"},s.value=!0}},c=()=>{i.value={message:"",type:""}};return Kn(()=>{r.value=!0}),(u,f)=>{const p=Js("router-link");return le(),de("main",tk,[ve(jn,{name:"fade-slide-login",mode:"out-in"},{default:Ke(()=>[Be(S("form",{class:"form-login p-4 rounded shadow",onSubmit:$t(l,["prevent"])},[S("div",nk,[f[3]||(f[3]=S("h2",{class:"text-center ms-3 mb-4 fw-bold text-light"},[Ue("Login "),S("i",{class:"bi bi-person-check"})],-1)),ve(p,{class:"text-decoration-none",to:"/"},{default:Ke(()=>f[2]||(f[2]=[S("button",{type:"button",class:"btn-exit btn btn-outline-light"},[S("i",{class:"bi bi-x"})],-1)])),_:1})]),S("div",rk,[f[4]||(f[4]=S("label",{for:"inputEmail",class:"form-label text-light"},"Email",-1)),Be(S("input",{required:"","onUpdate:modelValue":f[0]||(f[0]=m=>e.value=m),type:"email",class:"form-control text-light",id:"inputEmail",placeholder:"Ej: leomessi@gmail.com"},null,512),[[jt,e.value]])]),S("div",sk,[f[5]||(f[5]=S("label",{for:"inputPassword",class:"form-label text-light"},"Contraseña",-1)),Be(S("input",{required:"","onUpdate:modelValue":f[1]||(f[1]=m=>n.value=m),type:"password",class:"form-control text-light",id:"inputPassword",placeholder:"*********"},null,512),[[jt,n.value]])]),f[8]||(f[8]=S("button",{class:"btn-login btn w-100 py-2 text-light",type:"submit"},[Ue("Iniciar Sesion "),S("i",{class:"bi bi-send-fill"})],-1)),Be(ve(cE,{message:i.value.message,type:i.value.type,onAfterLeave:c},null,8,["message","type"]),[[Nn,s.value]]),S("p",ik,[f[7]||(f[7]=Ue(" ¿Todavia no tenes una cuenta? ")),ve(p,{to:"/register"},{default:Ke(()=>f[6]||(f[6]=[Ue("Registrate")])),_:1})])],544),[[Nn,r.value]])]),_:1})])}}},ak={class:"w-100 mb-auto mt-5 mx-auto mt-md-auto d-flex justify-content-center align-items-center"},lk={class:"d-flex justify-content-between"},ck={class:"mb-3 text-start"},uk={class:"mb-3 text-start"},hk={class:"mb-3 text-start"},fk={class:"text-start mt-3 text-light"},dk={__name:"RegisterPage",setup(t){const e=Fe(""),n=Fe(""),r=Fe(""),s=Fe(!1),i=Fe(!1),o=Fe({message:"",type:""}),l=jl(),c=async()=>{if(o.value={message:"",type:""},i.value=!1,n.value!==r.value){r.value="",o.value={message:"Las contraseñas no coinciden.",type:"error"},i.value=!0;return}try{const f=await l.register(e.value,n.value);f.ok?(o.value={message:f.message,type:"success"},setTimeout(()=>{i.value=!1,l.$router.push("/dashboard")},2e3)):(o.value={message:f.message,type:"error"},setTimeout(()=>{i.value=!1},2e3))}catch(f){console.error("Unexpected error:",f),o.value={message:"Error inesperado. Intentá de nuevo.",type:"error"}}i.value=!0},u=()=>{o.value={message:"",type:""}};return Kn(()=>{s.value=!0}),(f,p)=>{const m=Js("router-link");return le(),de("main",ak,[ve(jn,{name:"fade-slide-register",mode:"out-in"},{default:Ke(()=>[Be(S("form",{class:"form-register p-4 rounded shadow",onSubmit:$t(c,["prevent"])},[S("div",lk,[p[4]||(p[4]=S("h2",{class:"text-center ms-3 mb-4 fw-bold text-light"},[Ue("Registro "),S("i",{class:"bi bi-person-add"})],-1)),ve(m,{class:"text-decoration-none",to:"/"},{default:Ke(()=>p[3]||(p[3]=[S("button",{type:"button",class:"btn-exit btn btn-outline-light"},[S("i",{class:"bi bi-x"})],-1)])),_:1})]),S("div",ck,[p[5]||(p[5]=S("label",{for:"inputEmail",class:"form-label text-light"},"Email",-1)),Be(S("input",{required:"","onUpdate:modelValue":p[0]||(p[0]=_=>e.value=_),type:"email",class:"form-control text-light",id:"inputEmail",placeholder:"Ej: leomessi@gmail.com"},null,512),[[jt,e.value]])]),S("div",uk,[p[6]||(p[6]=S("label",{for:"inputPassword",class:"form-label text-light"},"Contraseña",-1)),Be(S("input",{required:"","onUpdate:modelValue":p[1]||(p[1]=_=>n.value=_),type:"password",class:"form-control text-light",id:"inputPassword",placeholder:"**********"},null,512),[[jt,n.value]])]),S("div",hk,[p[7]||(p[7]=S("label",{for:"confirmPassword",class:"form-label text-light"},"Confirmar contraseña",-1)),Be(S("input",{required:"","onUpdate:modelValue":p[2]||(p[2]=_=>r.value=_),type:"password",class:"form-control text-light",id:"confirmPassword",placeholder:"**********"},null,512),[[jt,r.value]])]),p[10]||(p[10]=S("button",{class:"btn-register btn w-100 py-2 text-light",type:"submit"},[Ue(" Registrarse "),S("i",{class:"bi bi-send-fill"})],-1)),Be(ve(cE,{message:o.value.message,type:o.value.type,onAfterLeave:u},null,8,["message","type"]),[[Nn,i.value]]),S("p",fk,[p[9]||(p[9]=Ue(" ¿Ya tenes tu cuenta? ")),ve(m,{to:"/login",class:"login"},{default:Ke(()=>p[8]||(p[8]=[Ue("Inicia sesion")])),_:1})])],544),[[Nn,s.value]])]),_:1})])}}},pk={class:"d-flex"},mk={class:"d-flex flex-column align-items-center"},gk={class:"username-container text-center font-weight-medium"},_k=["title"],yk={class:"h5"},vk={class:"nav text-center nav-pills flex-column mb-auto"},Ek={class:"nav-item"},Tk={class:"nav-item"},wk={class:"nav-item d-flex justify-content-center"},Ik={key:0,class:"heather p-2 w-100 nav-mobile"},bk={__name:"SideBarComponent",setup(t){const e=Fe(!1),n=Fe(window.innerWidth<768),r=ii(),s=jl(),i=Qu(),{profile:o}=__(r),l=async()=>{await s.logout(),i.push({name:"Unregistred"})},c=()=>{e.value=!e.value},u=()=>{n.value=window.innerWidth<768,n.value||(e.value=!1)},f=p=>{if(!n.value)return;const m=document.querySelector(".sidebar-profile");e.value&&m&&!m.contains(p.target)&&(e.value=!1)};return Kn(()=>{window.addEventListener("resize",u),document.addEventListener("click",f)}),qu(()=>{window.removeEventListener("resize",u),document.removeEventListener("click",f)}),(p,m)=>{const _=Js("router-link");return le(),de("div",pk,[ve(jn,{name:"slide-fade"},{default:Ke(()=>[!n.value||e.value?(le(),de("div",{key:0,class:Vt(["sidebar-profile flex-column flex-shrink-0 px-1 text-bg-dark",{"mobile-mode":n.value}])},[S("div",mk,[n.value?Xt("",!0):(le(),vo(_,{key:0,to:{name:"MyWorkouts"},class:"h3 mb-1 text-light router-link-active"},{default:Ke(()=>m[0]||(m[0]=[S("i",{class:"bi bi-house"},null,-1)])),_:1})),S("div",gk,[S("p",{class:"ellipsis my-0",title:Wt(o).nickname},[S("span",yk," #"+We(Wt(o).nickname||"Usuario"),1)],8,_k)])]),m[6]||(m[6]=S("hr",null,null,-1)),S("ul",vk,[S("li",Ek,[ve(_,{to:{name:"MyWorkouts"},class:"nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none"},{default:Ke(()=>m[1]||(m[1]=[S("i",{class:"bi bi-clipboard-check"},null,-1),Ue(" Mis Rutinas ")])),_:1})]),m[4]||(m[4]=S("hr",null,null,-1)),S("li",Tk,[ve(_,{to:{name:"MyProfile"},class:"nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none"},{default:Ke(()=>m[2]||(m[2]=[S("i",{class:"bi bi-person-circle"},null,-1),Ue(" Mi Perfil ")])),_:1})]),m[5]||(m[5]=S("hr",null,null,-1)),S("li",wk,[S("button",{class:"nav-link d-flex flex-column justify-content-center align-items-center text-light px-1",onClick:$t(l,["prevent"])},m[3]||(m[3]=[S("i",{class:"bi bi-box-arrow-right"},null,-1),Ue(" Cerrar Sesion ")]))])])],2)):Xt("",!0)]),_:1}),ve(jn,{name:"fade"},{default:Ke(()=>[n.value&&e.value?(le(),de("div",{key:0,class:"darkSide",onClick:c})):Xt("",!0)]),_:1}),n.value?(le(),de("header",Ik,[ve(_,{to:{name:"MyWorkouts"},class:"h2 mb-0 d-flex gap-2 router-link-active"},{default:Ke(()=>m[7]||(m[7]=[S("i",{class:"bi bi-house"},null,-1)])),_:1}),S("button",{class:"btn btn-outline-info",onClick:$t(c,["stop"])},m[8]||(m[8]=[S("i",{class:"bi bi-list"},null,-1)]))])):Xt("",!0)])}}},Ak=Gn(bk,[["__scopeId","data-v-19c520c1"]]),Rk={class:"w-100"},Sk={__name:"DashboardPage",setup(t){const e=ii(),{profile:n}=__(e);return Kn(()=>{console.log(n),n&&console.log("Onmounted: profile",n)}),(r,s)=>{const i=Js("router-view");return le(),de("div",Rk,[ve(Ak),ve(i,null,{default:Ke(({Component:o})=>[ve(jn,{name:"route-fade",mode:"out-in",class:"w-100 h-100 d-flex justify-content-center align-items-center"},{default:Ke(()=>[(le(),vo(nw(o)))]),_:2},1024)]),_:1})])}}},Ck=Gn(Sk,[["__scopeId","data-v-6233ec35"]]),Pk={class:"w-100 d-flex align-items-center justify-content-center title-container"},kk={class:"split-text-container mb-md-5 me-2"},Ok={class:"mobile-title d-md-none d-flex flex-column align-items-center justify-content-center text-center"},xk={class:"mobile-part from-left"},Dk=["data-text"],Vk={class:"mobile-part from-right"},Nk=["data-text"],Mk={class:"mobile-part from-bottom"},Lk=["data-text"],Fk={class:"auth-links"},Uk={__name:"UnregistredPage",setup(t){const e="MY".split(""),n="WORKOUT".split(""),r="APP".split("");return(s,i)=>{const o=Js("router-link");return le(),de("div",Pk,[S("div",kk,[i[0]||(i[0]=S("div",{class:"desktop-title-container d-none d-md-block"},[S("span",{class:"text-part left desktop-title aurora-title","data-text":"MY"},"MY"),S("span",{class:"text-part right desktop-title aurora-title","data-text":"Workout"},"Workout"),S("span",{class:"text-part right desktop-title aurora-title","data-text":"App"},"App")],-1)),S("div",Ok,[S("div",xk,[(le(!0),de(nt,null,_r(Wt(e),(l,c)=>(le(),de("span",{key:"my"+c,class:"aurora-title","data-text":l},We(l),9,Dk))),128))]),S("div",Vk,[(le(!0),de(nt,null,_r(Wt(n),(l,c)=>(le(),de("span",{key:"workout"+c,class:"aurora-title","data-text":l},We(l),9,Nk))),128))]),S("div",Mk,[(le(!0),de(nt,null,_r(Wt(r),(l,c)=>(le(),de("span",{key:"app"+c,class:"aurora-title","data-text":l},We(l),9,Lk))),128))])])]),ve(jn,{name:"fade-slide-nav",appear:""},{default:Ke(()=>[S("nav",Fk,[ve(o,{to:"/login",class:"btn px-4"},{default:Ke(()=>i[1]||(i[1]=[Ue("Login")])),_:1}),ve(o,{to:"/register",class:"btn px-4"},{default:Ke(()=>i[2]||(i[2]=[Ue("Register")])),_:1})])]),_:1})])}}},$k=Gn(Uk,[["__scopeId","data-v-0a0a3ba6"]]),jk={props:["rutina"]},Bk={class:"px-2 py-1 rounded-xl shadow-md"},qk={class:"text-start text-sm text-gray-500"},Hk={class:"mb-1"},zk={class:"d-flex justify-content-between align-items-baseline"},Wk={class:"h5 text-lg text-start font-semibold mb-2"},Kk={class:"h5 text-sm text-end text-gray-400 mb-2"},Gk={class:"space-y-2 list-unstyled"},Qk={class:"font-medium mb-4"},Yk={class:"text-sm mt-2 d-flex justify-content-center gap-5 align-items-baseline"},Jk={class:"d-flex flex-column"},Xk={class:"d-flex flex-column"},Zk={key:0},eO={key:1},tO={class:"d-flex flex-column"},nO={key:0},rO={key:1},sO={key:0,class:"mb-0"};function iO(t,e,n,r,s,i){return le(),de("div",Bk,[S("div",qk,[S("p",Hk," Descanso entre bloques: "+We(n.rutina.descansoBloques)+"s ",1),S("p",null," Descanso entre series: "+We(n.rutina.descansoSeries)+"s ",1)]),e[7]||(e[7]=S("hr",null,null,-1)),(le(!0),de(nt,null,_r(n.rutina.bloques,(o,l)=>(le(),de("div",{key:l,class:"my-3"},[S("div",zk,[S("p",Wk,We(l+1)+"° Bloque ",1),S("p",Kk,We(o.series)+" Series",1)]),S("ul",Gk,[(le(!0),de(nt,null,_r(o.ejercicios,(c,u)=>(le(),de("li",{key:u,class:"p-3 rounded"},[S("div",Qk,[S("h4",null,We(c.nombre),1)]),S("div",Yk,[S("div",Jk,[e[0]||(e[0]=S("span",null,"Reps",-1)),e[1]||(e[1]=Ue()),S("span",null,We(c.repeticiones),1)]),S("div",Xk,[e[2]||(e[2]=S("span",null,"Tiempo",-1)),e[3]||(e[3]=Ue()),c.tiempo!=0?(le(),de("span",Zk,We(c.tiempo)+"s",1)):(le(),de("span",eO,"-"))]),S("div",tO,[e[4]||(e[4]=S("span",null,"Esfuerzo",-1)),e[5]||(e[5]=Ue()),c.esfuerzo?(le(),de("span",nO,We(c.esfuerzo)+" RIR",1)):(le(),de("span",rO,"-"))])]),u!=o.ejercicios.length-1?(le(),de("hr",sO)):Xt("",!0)]))),128)),e[6]||(e[6]=S("hr",{class:"mb-0"},null,-1))])]))),128))])}const oO=Gn(jk,[["render",iO]]),aO={class:"my-workouts"},lO={class:"routines-container"},cO={class:"text-center mb-3"},uO={class:"d-flex justify-content-center justify-content-md-start ms-md-5 mb-3"},hO={class:"d-flex align-items-baseline text-start"},fO={key:0,class:"loader"},dO={class:"absolute d-flex justify-content-between top-2 left-0 text-sm text-gray-500"},pO={class:"text-center font-weight-medium my-2"},mO=["title"],gO={class:"d-flex justify-content-between align-items-center text-gray-700"},_O=["title"],yO=["innerHTML"],vO={key:0,class:"difficulty-text"},EO=["innerHTML"],TO={key:0,class:"difficulty-text"},wO=["onClick"],IO={key:0,class:"mini-menu"},bO=["onClick"],AO=["onClick"],RO=["onClick"],SO=["onClick"],CO={key:3,class:"edit-resume-container"},PO=["onClick"],kO=["onClick"],OO=["onClick"],xO=["onClick"],DO={__name:"MyWorkoutsPage",setup(t){const e=ii(),n=Fe(!0),r=Fe(window.innerWidth<768),s=Fe(new Map),i=Fe([]);O_();const o=Qu(),l=Fe(null),c={"Muy facil":1,Facil:2,Intermedia:3,Dificil:4,"Muy dificil":5},u=Fe("fechaCreacionDesc"),f=dt(()=>e.getUserRoutines),p=dt(()=>[...f.value].sort((N,O)=>{if(u.value==="fechaCreacionDesc")return new Date(O.fechaCreacion)-new Date(N.fechaCreacion);if(u.value==="fechaCreacionAsc")return new Date(N.fechaCreacion)-new Date(O.fechaCreacion);{const L=c[N.dificultad]||0,J=c[O.dificultad]||0;return u.value==="asc"?L-J:J-L}}));yr(l,N=>{N!==null?window.addEventListener("click",m):window.removeEventListener("click",m)}),Kn(async()=>{window.scrollTo({top:0,behavior:"smooth"})}),yr(()=>e.profile.id,async N=>{if(N){n.value=!0;try{e.getUserRoutines.length===0?await e.getRutinas():n.value=!1}catch(O){console.error("Error al cargar rutinas:",O)}finally{n.value=!1}}},{immediate:!0});const m=N=>{const O=document.querySelector(".dropdown-menu-container");l.value!==null&&!(O!=null&&O.contains(N.target))&&(l.value=null)};function _(N){const O=i.value.indexOf(N);O!==-1?i.value.splice(O,1):(i.value.push(N),yo(()=>{setTimeout(()=>{const L=s.value.get(N);L==null||L.scrollIntoView({behavior:"smooth",block:"start"})},300)}))}async function C(N){if(!confirm("¿Estás seguro de que querés eliminar esta rutina?")){console.log("Eliminar cancelado");return}try{const O=i.value.indexOf(N);O!==-1&&i.value.splice(O,1),await e.deleteRutina(N),n.value=!1}catch(O){console.log("Error al borrar la rutina.",O)}}function D(N){o.push({name:"FormRoutine",query:{id:N.id}})}async function M(N){n.value=!0;const O={...JSON.parse(JSON.stringify(N)),nombre:N.nombre+" (copia)"};delete O.id,delete O.fechaCreacion;try{const L=await e.createRutinaFirebase(O);n.value=!1,_(L.id)}catch(L){console.error("Error copiando rutina:",L),n.value=!1}}const $=N=>(N.bloques||[]).reduce((O,L)=>O+(L.series||1),0),x=N=>"⚡️".repeat(c[N]||0);return(N,O)=>(le(),de("div",aO,[S("div",lO,[O[15]||(O[15]=S("h1",{class:"my-md-5 mb-3"},[Ue("Mis Rutinas "),S("i",{class:"bi bi-clipboard-check"})],-1)),S("div",cO,[ve(Wt(k_),{to:"/dashboard/form-routine",class:"btn btn-outline-danger px-5 d-flex gap-2 justify-content-center align-items-baseline",id:"add-routine"},{default:Ke(()=>O[2]||(O[2]=[S("i",{class:"bi bi-plus-circle-fill"},null,-1),Ue(" Agregar Rutina ")])),_:1})]),Be(S("div",uO,[S("div",hO,[O[4]||(O[4]=S("label",{for:"orderBy",class:"me-2"},"Ordenar por",-1)),Be(S("select",{"onUpdate:modelValue":O[0]||(O[0]=L=>u.value=L),id:"orderBy",class:"p-2 m-2 rounded bg-dark text-white"},O[3]||(O[3]=[S("option",{value:"fechaCreacionDesc"},"Más Reciente",-1),S("option",{value:"fechaCreacionAsc"},"Más Antigua",-1),S("option",{value:"asc"},"De más fácil",-1),S("option",{value:"desc"},"De más difícil",-1)]),512),[[Wc,u.value]])])],512),[[Nn,f.value.length>0]]),n.value||f.value.length===0&&n.value?(le(),de("div",fO)):Xt("",!0),Be(S("div",null,[ve(mI,{name:"fade-item",tag:"ul",class:Vt(["routine-resumen",{"column-layout":i.value.length>0}])},{default:Ke(()=>[(le(!0),de(nt,null,_r(p.value,L=>(le(),de("li",{key:L.id,ref_for:!0,ref:J=>s.value.set(L.id,J),class:Vt(["mb-1 routine-card",{expanded:i.value.includes(L.id)}])},[S("div",dO,[S("h6",{class:Vt({h5:i.value.includes(L.id)})},We(L.bloques.length)+" Bloques",3),S("h6",{class:Vt({h5:i.value.includes(L.id)})},We($(L))+" Series ",3)]),S("div",pO,[S("h3",{class:"ellipsis",title:L.nombre},We(L.nombre),9,mO)]),ve(jn,{name:"expand-fade"},{default:Ke(()=>[Be(ve(oO,{rutina:L},null,8,["rutina"]),[[Nn,i.value.includes(L.id)]])]),_:2},1024),S("div",gO,[r.value?(le(),de("h6",{key:0,class:Vt(["mb-0 difficulty-container",{"h4 d-flex flex-column":i.value.includes(L.id)}]),title:L.dificultad},[S("span",{class:"difficulty-icons",innerHTML:x(L.dificultad)},null,8,yO),r.value||i.value.includes(L.id)?(le(),de("span",vO," ("+We(L.dificultad)+") ",1)):Xt("",!0)],10,_O)):(le(),de("h6",{key:1,class:Vt({h4:i.value.includes(L.id)})},[S("span",{class:"difficulty-icons",innerHTML:x(L.dificultad)},null,8,EO),r.value||i.value.includes(L.id)?(le(),de("span",TO," ("+We(L.dificultad)+") ",1)):Xt("",!0)],2)),r.value&&!i.value.includes(L.id)?(le(),de("div",{key:2,class:"dropdown-menu-container",onClick:O[1]||(O[1]=$t(()=>{},["stop"]))},[S("span",{onClick:$t(J=>l.value=l.value===L.id?null:L.id,["stop"])},O[5]||(O[5]=[S("i",{class:"bi bi-three-dots-vertical"},null,-1)]),8,wO),ve(jn,{name:"fade-item"},{default:Ke(()=>[l.value===L.id?(le(),de("ul",IO,[S("li",{onClick:J=>_(L.id)},O[6]||(O[6]=[S("i",{class:"bi bi-arrows-angle-expand"},null,-1)]),8,bO),S("li",{onClick:$t(J=>D(L),["stop"])},O[7]||(O[7]=[S("i",{class:"bi bi-pencil-square"},null,-1)]),8,AO),S("li",{onClick:$t(J=>C(L.id),["stop"])},O[8]||(O[8]=[S("i",{class:"bi bi-trash3"},null,-1)]),8,RO),S("li",{onClick:$t(J=>M(L),["stop"])},O[9]||(O[9]=[S("i",{class:"bi bi-copy"},null,-1)]),8,SO)])):Xt("",!0)]),_:2},1024)])):(le(),de("div",CO,[S("span",{onClick:J=>_(L.id)},O[10]||(O[10]=[S("i",{class:"bi bi-arrows-angle-expand"},null,-1)]),8,PO),S("span",{onClick:$t(J=>D(L),["stop"])},O[11]||(O[11]=[S("i",{class:"bi bi-pencil-square"},null,-1)]),8,kO),S("span",{onClick:$t(J=>C(L.id),["stop"])},O[12]||(O[12]=[S("i",{class:"bi bi-trash3"},null,-1)]),8,OO),S("span",{onClick:$t(J=>M(L),["stop"])},O[13]||(O[13]=[S("i",{class:"bi bi-copy"},null,-1)]),8,xO)]))])],2))),128))]),_:1},8,["class"])],512),[[Nn,p.value.length>0]]),Be(S("div",null,O[14]||(O[14]=[S("h5",null,"No hay rutinas guardadas aún.",-1)]),512),[[Nn,p.value.length===0&&!n.value]])])]))}},VO=Gn(DO,[["__scopeId","data-v-f973fdbf"]]),NO={class:"contenedor"},MO={class:"info-container"},LO={class:"w-100 mb-4 justify-content-center d-flex align-items-end gap-3"},FO={class:"text-start w-100"},UO={class:"w-100"},$O={class:"text-start"},jO=["value"],BO={__name:"ProfilePage",setup(t){const e=ii(),n=dt(()=>e.profile),r=Fe("");Kn(async()=>{r.value=n.value.nickname});const s=async()=>{try{e.setNickname(r.value),alert("Nombre de usuario actualizado correctamente")}catch(i){console.error("Error al actualizar nickname:",i),alert("Ocurrió un error al guardar.")}};return(i,o)=>(le(),de("div",NO,[o[3]||(o[3]=S("h1",{class:"my-md-5"},[Ue("Mi Perfil "),S("i",{class:"bi bi-person-circle"})],-1)),S("div",MO,[S("div",LO,[S("div",FO,[o[1]||(o[1]=S("label",{for:"username",class:"form-label"},"Nombre de Usuario",-1)),Be(S("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),spellcheck:"false",autocomplete:"off",id:"username",class:"form-control"},null,512),[[jt,r.value]])]),S("div",null,[S("button",{class:Vt(["btn btn-outline-success btn-guardar",r.value===n.value.nickname?"disabled":""]),onClick:s},"Guardar",2)])]),S("div",UO,[S("div",$O,[o[2]||(o[2]=S("label",{for:"email",class:"form-label"},"Email",-1)),S("input",{type:"text",value:n.value.email,id:"email",class:"form-control",readonly:"",disabled:""},null,8,jO)])])])]))}},qO=Gn(BO,[["__scopeId","data-v-dd43bd1b"]]);var uE=typeof global=="object"&&global&&global.Object===Object&&global,HO=typeof self=="object"&&self&&self.Object===Object&&self,Rn=uE||HO||Function("return this")(),Gs=Rn.Symbol,hE=Object.prototype,zO=hE.hasOwnProperty,WO=hE.toString,Ai=Gs?Gs.toStringTag:void 0;function KO(t){var e=zO.call(t,Ai),n=t[Ai];try{t[Ai]=void 0;var r=!0}catch{}var s=WO.call(t);return r&&(e?t[Ai]=n:delete t[Ai]),s}var GO=Object.prototype,QO=GO.toString;function YO(t){return QO.call(t)}var JO="[object Null]",XO="[object Undefined]",Em=Gs?Gs.toStringTag:void 0;function xo(t){return t==null?t===void 0?XO:JO:Em&&Em in Object(t)?KO(t):YO(t)}function Do(t){return t!=null&&typeof t=="object"}var qh=Array.isArray;function Bl(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ZO="[object AsyncFunction]",ex="[object Function]",tx="[object GeneratorFunction]",nx="[object Proxy]";function fE(t){if(!Bl(t))return!1;var e=xo(t);return e==ex||e==tx||e==ZO||e==nx}var xc=Rn["__core-js_shared__"],Tm=function(){var t=/[^.]+$/.exec(xc&&xc.keys&&xc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function rx(t){return!!Tm&&Tm in t}var sx=Function.prototype,ix=sx.toString;function ds(t){if(t!=null){try{return ix.call(t)}catch{}try{return t+""}catch{}}return""}var ox=/[\\^$.*+?()[\]{}|]/g,ax=/^\[object .+?Constructor\]$/,lx=Function.prototype,cx=Object.prototype,ux=lx.toString,hx=cx.hasOwnProperty,fx=RegExp("^"+ux.call(hx).replace(ox,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dx(t){if(!Bl(t)||rx(t))return!1;var e=fE(t)?fx:ax;return e.test(ds(t))}function px(t,e){return t==null?void 0:t[e]}function ps(t,e){var n=px(t,e);return dx(n)?n:void 0}var Au=ps(Rn,"WeakMap"),wm=Object.create,mx=function(){function t(){}return function(e){if(!Bl(e))return{};if(wm)return wm(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Im=function(){try{var t=ps(Object,"defineProperty");return t({},"",{}),t}catch{}}();function gx(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var _x=9007199254740991,yx=/^(?:0|[1-9]\d*)$/;function vx(t,e){var n=typeof t;return e=e??_x,!!e&&(n=="number"||n!="symbol"&&yx.test(t))&&t>-1&&t%1==0&&t<e}function Ex(t,e,n){e=="__proto__"&&Im?Im(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function dE(t,e){return t===e||t!==t&&e!==e}var Tx=Object.prototype,wx=Tx.hasOwnProperty;function Ix(t,e,n){var r=t[e];(!(wx.call(t,e)&&dE(r,n))||n===void 0&&!(e in t))&&Ex(t,e,n)}var bx=9007199254740991;function pE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=bx}function Ax(t){return t!=null&&pE(t.length)&&!fE(t)}var Rx=Object.prototype;function mE(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Rx;return t===n}function Sx(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Cx="[object Arguments]";function bm(t){return Do(t)&&xo(t)==Cx}var gE=Object.prototype,Px=gE.hasOwnProperty,kx=gE.propertyIsEnumerable,Ox=bm(function(){return arguments}())?bm:function(t){return Do(t)&&Px.call(t,"callee")&&!kx.call(t,"callee")};function xx(){return!1}var _E=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Am=_E&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,Dx=Am&&Am.exports===_E,Rm=Dx?Rn.Buffer:void 0,Vx=Rm?Rm.isBuffer:void 0,yE=Vx||xx,Nx="[object Arguments]",Mx="[object Array]",Lx="[object Boolean]",Fx="[object Date]",Ux="[object Error]",$x="[object Function]",jx="[object Map]",Bx="[object Number]",qx="[object Object]",Hx="[object RegExp]",zx="[object Set]",Wx="[object String]",Kx="[object WeakMap]",Gx="[object ArrayBuffer]",Qx="[object DataView]",Yx="[object Float32Array]",Jx="[object Float64Array]",Xx="[object Int8Array]",Zx="[object Int16Array]",eD="[object Int32Array]",tD="[object Uint8Array]",nD="[object Uint8ClampedArray]",rD="[object Uint16Array]",sD="[object Uint32Array]",je={};je[Yx]=je[Jx]=je[Xx]=je[Zx]=je[eD]=je[tD]=je[nD]=je[rD]=je[sD]=!0;je[Nx]=je[Mx]=je[Gx]=je[Lx]=je[Qx]=je[Fx]=je[Ux]=je[$x]=je[jx]=je[Bx]=je[qx]=je[Hx]=je[zx]=je[Wx]=je[Kx]=!1;function iD(t){return Do(t)&&pE(t.length)&&!!je[xo(t)]}function Hh(t){return function(e){return t(e)}}var vE=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Gi=vE&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,oD=Gi&&Gi.exports===vE,Dc=oD&&uE.process,Qs=function(){try{var t=Gi&&Gi.require&&Gi.require("util").types;return t||Dc&&Dc.binding&&Dc.binding("util")}catch{}}(),Sm=Qs&&Qs.isTypedArray,aD=Sm?Hh(Sm):iD,lD=Object.prototype,cD=lD.hasOwnProperty;function uD(t,e){var n=qh(t),r=!n&&Ox(t),s=!n&&!r&&yE(t),i=!n&&!r&&!s&&aD(t),o=n||r||s||i,l=o?Sx(t.length,String):[],c=l.length;for(var u in t)cD.call(t,u)&&!(o&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||vx(u,c)))&&l.push(u);return l}function EE(t,e){return function(n){return t(e(n))}}var hD=EE(Object.keys,Object),fD=Object.prototype,dD=fD.hasOwnProperty;function pD(t){if(!mE(t))return hD(t);var e=[];for(var n in Object(t))dD.call(t,n)&&n!="constructor"&&e.push(n);return e}function mD(t){return Ax(t)?uD(t):pD(t)}var po=ps(Object,"create");function gD(){this.__data__=po?po(null):{},this.size=0}function _D(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var yD="__lodash_hash_undefined__",vD=Object.prototype,ED=vD.hasOwnProperty;function TD(t){var e=this.__data__;if(po){var n=e[t];return n===yD?void 0:n}return ED.call(e,t)?e[t]:void 0}var wD=Object.prototype,ID=wD.hasOwnProperty;function bD(t){var e=this.__data__;return po?e[t]!==void 0:ID.call(e,t)}var AD="__lodash_hash_undefined__";function RD(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=po&&e===void 0?AD:e,this}function os(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}os.prototype.clear=gD;os.prototype.delete=_D;os.prototype.get=TD;os.prototype.has=bD;os.prototype.set=RD;function SD(){this.__data__=[],this.size=0}function ql(t,e){for(var n=t.length;n--;)if(dE(t[n][0],e))return n;return-1}var CD=Array.prototype,PD=CD.splice;function kD(t){var e=this.__data__,n=ql(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():PD.call(e,n,1),--this.size,!0}function OD(t){var e=this.__data__,n=ql(e,t);return n<0?void 0:e[n][1]}function xD(t){return ql(this.__data__,t)>-1}function DD(t,e){var n=this.__data__,r=ql(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Yn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Yn.prototype.clear=SD;Yn.prototype.delete=kD;Yn.prototype.get=OD;Yn.prototype.has=xD;Yn.prototype.set=DD;var mo=ps(Rn,"Map");function VD(){this.size=0,this.__data__={hash:new os,map:new(mo||Yn),string:new os}}function ND(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Hl(t,e){var n=t.__data__;return ND(e)?n[typeof e=="string"?"string":"hash"]:n.map}function MD(t){var e=Hl(this,t).delete(t);return this.size-=e?1:0,e}function LD(t){return Hl(this,t).get(t)}function FD(t){return Hl(this,t).has(t)}function UD(t,e){var n=Hl(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function oi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}oi.prototype.clear=VD;oi.prototype.delete=MD;oi.prototype.get=LD;oi.prototype.has=FD;oi.prototype.set=UD;function $D(t,e){for(var n=-1,r=e.length,s=t.length;++n<r;)t[s+n]=e[n];return t}var jD=EE(Object.getPrototypeOf,Object);function BD(){this.__data__=new Yn,this.size=0}function qD(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function HD(t){return this.__data__.get(t)}function zD(t){return this.__data__.has(t)}var WD=200;function KD(t,e){var n=this.__data__;if(n instanceof Yn){var r=n.__data__;if(!mo||r.length<WD-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new oi(r)}return n.set(t,e),this.size=n.size,this}function ai(t){var e=this.__data__=new Yn(t);this.size=e.size}ai.prototype.clear=BD;ai.prototype.delete=qD;ai.prototype.get=HD;ai.prototype.has=zD;ai.prototype.set=KD;var TE=typeof Ht=="object"&&Ht&&!Ht.nodeType&&Ht,Cm=TE&&typeof zt=="object"&&zt&&!zt.nodeType&&zt,GD=Cm&&Cm.exports===TE,Pm=GD?Rn.Buffer:void 0;Pm&&Pm.allocUnsafe;function QD(t,e){return t.slice()}function YD(t,e){for(var n=-1,r=t==null?0:t.length,s=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[s++]=o)}return i}function JD(){return[]}var XD=Object.prototype,ZD=XD.propertyIsEnumerable,km=Object.getOwnPropertySymbols,eV=km?function(t){return t==null?[]:(t=Object(t),YD(km(t),function(e){return ZD.call(t,e)}))}:JD;function tV(t,e,n){var r=e(t);return qh(t)?r:$D(r,n(t))}function nV(t){return tV(t,mD,eV)}var Ru=ps(Rn,"DataView"),Su=ps(Rn,"Promise"),Cu=ps(Rn,"Set"),Om="[object Map]",rV="[object Object]",xm="[object Promise]",Dm="[object Set]",Vm="[object WeakMap]",Nm="[object DataView]",sV=ds(Ru),iV=ds(mo),oV=ds(Su),aV=ds(Cu),lV=ds(Au),xn=xo;(Ru&&xn(new Ru(new ArrayBuffer(1)))!=Nm||mo&&xn(new mo)!=Om||Su&&xn(Su.resolve())!=xm||Cu&&xn(new Cu)!=Dm||Au&&xn(new Au)!=Vm)&&(xn=function(t){var e=xo(t),n=e==rV?t.constructor:void 0,r=n?ds(n):"";if(r)switch(r){case sV:return Nm;case iV:return Om;case oV:return xm;case aV:return Dm;case lV:return Vm}return e});var cV=Object.prototype,uV=cV.hasOwnProperty;function hV(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&uV.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Mm=Rn.Uint8Array;function zh(t){var e=new t.constructor(t.byteLength);return new Mm(e).set(new Mm(t)),e}function fV(t,e){var n=zh(t.buffer);return new t.constructor(n,t.byteOffset,t.byteLength)}var dV=/\w*$/;function pV(t){var e=new t.constructor(t.source,dV.exec(t));return e.lastIndex=t.lastIndex,e}var Lm=Gs?Gs.prototype:void 0,Fm=Lm?Lm.valueOf:void 0;function mV(t){return Fm?Object(Fm.call(t)):{}}function gV(t,e){var n=zh(t.buffer);return new t.constructor(n,t.byteOffset,t.length)}var _V="[object Boolean]",yV="[object Date]",vV="[object Map]",EV="[object Number]",TV="[object RegExp]",wV="[object Set]",IV="[object String]",bV="[object Symbol]",AV="[object ArrayBuffer]",RV="[object DataView]",SV="[object Float32Array]",CV="[object Float64Array]",PV="[object Int8Array]",kV="[object Int16Array]",OV="[object Int32Array]",xV="[object Uint8Array]",DV="[object Uint8ClampedArray]",VV="[object Uint16Array]",NV="[object Uint32Array]";function MV(t,e,n){var r=t.constructor;switch(e){case AV:return zh(t);case _V:case yV:return new r(+t);case RV:return fV(t);case SV:case CV:case PV:case kV:case OV:case xV:case DV:case VV:case NV:return gV(t);case vV:return new r;case EV:case IV:return new r(t);case TV:return pV(t);case wV:return new r;case bV:return mV(t)}}function LV(t){return typeof t.constructor=="function"&&!mE(t)?mx(jD(t)):{}}var FV="[object Map]";function UV(t){return Do(t)&&xn(t)==FV}var Um=Qs&&Qs.isMap,$V=Um?Hh(Um):UV,jV="[object Set]";function BV(t){return Do(t)&&xn(t)==jV}var $m=Qs&&Qs.isSet,qV=$m?Hh($m):BV,wE="[object Arguments]",HV="[object Array]",zV="[object Boolean]",WV="[object Date]",KV="[object Error]",IE="[object Function]",GV="[object GeneratorFunction]",QV="[object Map]",YV="[object Number]",bE="[object Object]",JV="[object RegExp]",XV="[object Set]",ZV="[object String]",eN="[object Symbol]",tN="[object WeakMap]",nN="[object ArrayBuffer]",rN="[object DataView]",sN="[object Float32Array]",iN="[object Float64Array]",oN="[object Int8Array]",aN="[object Int16Array]",lN="[object Int32Array]",cN="[object Uint8Array]",uN="[object Uint8ClampedArray]",hN="[object Uint16Array]",fN="[object Uint32Array]",Me={};Me[wE]=Me[HV]=Me[nN]=Me[rN]=Me[zV]=Me[WV]=Me[sN]=Me[iN]=Me[oN]=Me[aN]=Me[lN]=Me[QV]=Me[YV]=Me[bE]=Me[JV]=Me[XV]=Me[ZV]=Me[eN]=Me[cN]=Me[uN]=Me[hN]=Me[fN]=!0;Me[KV]=Me[IE]=Me[tN]=!1;function Ta(t,e,n,r,s,i){var o;if(o!==void 0)return o;if(!Bl(t))return t;var l=qh(t);if(l)o=hV(t);else{var c=xn(t),u=c==IE||c==GV;if(yE(t))return QD(t);if(c==bE||c==wE||u&&!s)o=u?{}:LV(t);else{if(!Me[c])return s?t:{};o=MV(t,c)}}i||(i=new ai);var f=i.get(t);if(f)return f;i.set(t,o),qV(t)?t.forEach(function(_){o.add(Ta(_,e,n,_,t,i))}):$V(t)&&t.forEach(function(_,C){o.set(C,Ta(_,e,n,C,t,i))});var p=nV,m=l?void 0:p(t);return gx(m||t,function(_,C){m&&(C=_,_=t[C]),Ix(o,C,Ta(_,e,n,C,t,i))}),o}var dN=1,pN=4;function mN(t){return Ta(t,dN|pN)}const gN={class:"add-routine-form"},_N={class:"text-center mb-4"},yN={key:0,class:"loader"},vN={class:"mb-3 text-start"},EN={class:"mb-3 flex-column d-flex justify-content-center align-items-start col-md-3"},TN={class:"mb-3 text-start d-flex justify-content-start gap-5 align-items-center"},wN={class:"d-flex gap-2 align-items-baseline"},IN={class:"descanso-min text-info fw-medium"},bN={class:"mb-3 text-start d-flex justify-content-start gap-5 align-items-center"},AN={class:"d-flex gap-2 align-items-baseline"},RN={class:"descanso-min text-info fw-medium"},SN={class:"mb-3 d-flex justify-content-between align-items-baseline"},CN={class:"text-start m-0"},PN={class:"d-flex flex-column align-items-center justify-content-center col-md-2"},kN=["onUpdate:modelValue","id"],ON={class:"row w-100 d-flex flex-column justify-content-center gap-3"},xN={class:"w-100 mb-2"},DN=["onUpdate:modelValue","id"],VN={class:"setting-exercise"},NN={class:"col-md-3 mb-2 text-center"},MN=["onUpdate:modelValue","id"],LN={class:"col-md-3 text-center"},FN=["onUpdate:modelValue","id"],UN={class:"col-md-3 text-center"},$N=["onUpdate:modelValue","id"],jN={class:"d-flex w-100 justify-content-center gap-2"},BN=["onClick"],qN=["onClick"],HN={class:"btns-set-bloque"},zN=["onClick"],WN={key:0,class:"loader-form"},KN={__name:"FormRoutine",setup(t){const e=ii(),n=O_(),r=Qu(),s=n.query.id,i=Fe(!1),o=Fe(!1),l=Ys({nombre:"",dificultad:"Intermedia",descansoBloques:60,descansoSeries:60,bloques:[{series:3,ejercicios:[{nombre:"",repeticiones:1,tiempo:0,esfuerzo:0}]}]});function c(){if(s){o.value=!0;try{const $=e.getRutinaLocal(s);$?(Object.assign(l,mN($)),o.value=!1):console.warn(`No se encontró la rutina con ID: ${s}`)}catch($){console.error("Error al cargar la rutina para editar:",$)}}}yr(()=>e.getUserRoutines.length,$=>{$>0&&c()}),Kn(async()=>{window.scrollTo({top:0,behavior:"smooth"}),c()});const u=()=>{r.push({name:"MyWorkouts"})},f=async()=>{i.value=!0;try{l.id?await e.updateRutina({...l}):await e.createRutinaFirebase({...l}),i.value=!1,r.push({name:"MyWorkouts"})}catch($){console.error("Error al guardar la rutina:",$)}},p=()=>{l.bloques.push({series:3,ejercicios:[{nombre:"",repeticiones:1,tiempo:0,esfuerzo:0}]})},m=$=>{l.bloques.splice($,1)},_=($,x)=>{l.bloques[$].ejercicios.splice(x+1,0,{nombre:"",repeticiones:1,tiempo:0,esfuerzo:0})},C=($,x)=>{l.bloques[$].ejercicios.splice(x,1)},D=$=>$===null||$===""||$===void 0?"input-alert":"",M=$=>{const x=Math.floor($/60),N=$%60,O=String(x).padStart(2,"0"),L=String(N).padStart(2,"0");return`${O}:${L}`};return($,x)=>(le(),de("div",gN,[S("h2",_N,We(Wt(s)?"Editar Rutina":"Agregar Nueva Rutina"),1),o.value?(le(),de("div",yN)):(le(),de("form",{key:1,onSubmit:$t(f,["prevent"]),class:"p-2 p-md-4"},[S("div",vN,[x[4]||(x[4]=S("label",{for:"nombre",class:"form-label"},"Nombre",-1)),Be(S("input",{type:"text","onUpdate:modelValue":x[0]||(x[0]=N=>l.nombre=N),spellcheck:"false",autocomplete:"on",class:Vt(["form-control",D(l.nombre)]),id:"nombre",required:""},null,2),[[jt,l.nombre]])]),S("div",EN,[x[6]||(x[6]=S("label",{for:"dificultad",class:"form-label"},"Dificultad",-1)),Be(S("select",{"onUpdate:modelValue":x[1]||(x[1]=N=>l.dificultad=N),class:"form-select text-info input-difficulty",id:"dificultad",required:""},x[5]||(x[5]=[Nw('<option value="Muy facil" data-v-0d938cfb>Muy fácil</option><option value="Facil" data-v-0d938cfb>Fácil</option><option value="Intermedia" data-v-0d938cfb>Intermedia</option><option value="Dificil" data-v-0d938cfb>Difícil</option><option value="Muy dificil" data-v-0d938cfb>Muy difícil</option>',5)]),512),[[Wc,l.dificultad]])]),S("div",TN,[x[7]||(x[7]=S("label",{for:"descansoBloques",class:"form-label w-50 mb-0"}," Descanso entre Bloques ",-1)),S("div",wN,[Be(S("input",{type:"number","onUpdate:modelValue":x[2]||(x[2]=N=>l.descansoBloques=N),class:"form-control input-number",id:"descansoBloques"},null,512),[[jt,l.descansoBloques]]),S("span",IN,We(M(l.descansoBloques))+" M ",1)])]),S("div",bN,[x[8]||(x[8]=S("label",{for:"descansoSeries",class:"form-label w-50 mb-0"},"Descanso entre Series",-1)),S("div",AN,[Be(S("input",{type:"number","onUpdate:modelValue":x[3]||(x[3]=N=>l.descansoSeries=N),class:"form-control input-number",id:"descansoSeries"},null,512),[[jt,l.descansoSeries]]),S("span",RN,We(M(l.descansoSeries))+" M ",1)])]),(le(!0),de(nt,null,_r(l.bloques,(N,O)=>(le(),de("div",{key:O,class:"bloque-container mb-3 px-2 pt-2 pb-3 rounded text-start"},[S("div",SN,[S("h5",CN,We(O+1)+"° Bloque",1),S("div",PN,[x[9]||(x[9]=S("label",{for:"series-bloque-{{ index }}",class:"form-label mb-1"},"Series",-1)),Be(S("input",{type:"number","onUpdate:modelValue":L=>N.series=L,class:"form-control input-number",id:"series-bloque-"+O,min:"1"},null,8,kN),[[jt,N.series]])])]),(le(!0),de(nt,null,_r(N.ejercicios,(L,J)=>(le(),de("div",{key:J,class:"ejercicio-container p-2 d-flex flex-column align-items-center gap-3"},[S("div",ON,[S("div",xN,[x[10]||(x[10]=S("label",{for:"ejercicio-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Ejercicio",-1)),Be(S("input",{type:"text","onUpdate:modelValue":A=>L.nombre=A,spellcheck:"false",autocomplete:"on",required:"",class:Vt(["form-control",D(l.nombre)]),id:"ejercicio-"+O+"-"+J},null,10,DN),[[jt,L.nombre]])])]),S("div",VN,[S("div",NN,[x[11]||(x[11]=S("label",{for:"reps-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Reps",-1)),Be(S("input",{type:"number","onUpdate:modelValue":A=>L.repeticiones=A,class:"form-control input-number",id:"reps-"+O+"-"+J,min:"1"},null,8,MN),[[jt,L.repeticiones]])]),S("div",LN,[x[12]||(x[12]=S("label",{for:"tiempo-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Tiempo",-1)),Be(S("input",{type:"number","onUpdate:modelValue":A=>L.tiempo=A,class:"form-control input-number",id:"tiempo-"+O+"-"+J,min:"0"},null,8,FN),[[jt,L.tiempo]])]),S("div",UN,[x[14]||(x[14]=S("label",{for:"esfuerzo-{{ index }}-{{ ejercicioIndex }}",class:"form-label"},"Esfuerzo",-1)),Be(S("select",{"onUpdate:modelValue":A=>L.esfuerzo=A,class:"form-select text-info input-rir",id:"esfuerzo-"+O+"-"+J},x[13]||(x[13]=[S("option",{select:"",value:""},"-",-1),S("option",{value:"1"},"RIR 1",-1),S("option",{value:"2"},"RIR 2",-1),S("option",{value:"3"},"RIR 3",-1)]),8,$N),[[Wc,L.esfuerzo]])])]),S("div",jN,[S("button",{type:"button",onClick:A=>_(O,J),class:"btn btn-outline-info"},x[15]||(x[15]=[S("i",{class:"bi bi-plus-circle-fill"},null,-1),Ue(" Ejercicio ")]),8,BN),J>0?(le(),de("button",{key:0,type:"button",onClick:A=>C(O,J),class:"btn btn-outline-danger delete-exercise"},x[16]||(x[16]=[S("i",{class:"bi bi-trash-fill"},null,-1),Ue(" Ejercicio ")]),8,qN)):Xt("",!0)])]))),128)),S("div",HN,[O>0?(le(),de("button",{key:0,type:"button",onClick:L=>m(O),class:"btn btn-outline-danger"},x[17]||(x[17]=[S("i",{class:"bi bi-trash-fill"},null,-1),Ue(" Bloque ")]),8,zN)):Xt("",!0)])]))),128)),S("div",{class:"text-center d-flex flex-column align-items-center"},[S("button",{type:"button",onClick:p,class:"btn btn-outline-info"},x[18]||(x[18]=[S("i",{class:"bi bi-plus-circle-fill"},null,-1),Ue(" Agregar Bloque ")]))]),x[21]||(x[21]=S("hr",null,null,-1)),i.value?(le(),de("div",WN)):Xt("",!0),S("div",{class:"text-center d-flex btns-set-routine flex-column align-items-center"},[x[20]||(x[20]=S("button",{type:"submit",class:"btn btn-success mt-0"},[S("i",{class:"bi bi-box-arrow-down"}),Ue(" Guardar rutina ")],-1)),S("button",{type:"button",onClick:u,class:"btn btn-danger mt-3"},x[19]||(x[19]=[S("i",{class:"bi bi-x-circle"},null,-1),Ue(" Cancelar ")]))])],32))]))}},GN=Gn(KN,[["__scopeId","data-v-0d938cfb"]]),QN=[{path:"/register",name:"Register",component:dk},{path:"/login",name:"Login",component:ok},{path:"/dashboard",name:"Dashboard",component:Ck,children:[{path:"my-workouts",name:"MyWorkouts",component:VO},{path:"my-profile",name:"MyProfile",component:qO},{path:"form-routine",name:"FormRoutine",component:GN},{path:"",redirect:{name:"MyWorkouts"}}],meta:{requiresAuth:!0}},{path:"/unregistred",name:"Unregistred",component:$k},{path:"/:pathMatch(.*)*",redirect:{name:"Unregistred"}}],Wh=Fb({history:pb("/my-workout-app/"),routes:QN});let Vc=null;function YN(){return new Promise(t=>{Vc!==null?t(Vc):Jv(Di,e=>{Vc=e,t(e)})})}Wh.beforeEach(async(t,e,n)=>{const r=await YN();if(console.log("Middleware routes, to:",t.fullPath),t.path==="/login"&&r)return n("/dashboard");if(t.matched.some(s=>s.meta.requiresAuth)&&!r)return n("/login");n()});const Kh=AI(MI),AE=CI();AE.use(({store:t})=>{t.$router=al(Wh)});Kh.use(AE);Kh.use(Wh);const JN=jl();JN.initAuthListener();Kh.mount("#app")});export default XN();
