(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function H0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Y0={exports:{}},tl={},G0={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),qx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),e2=Symbol.for("react.strict_mode"),t2=Symbol.for("react.profiler"),n2=Symbol.for("react.provider"),r2=Symbol.for("react.context"),i2=Symbol.for("react.forward_ref"),o2=Symbol.for("react.suspense"),s2=Symbol.for("react.memo"),a2=Symbol.for("react.lazy"),yh=Symbol.iterator;function l2(e){return e===null||typeof e!="object"?null:(e=yh&&e[yh]||e["@@iterator"],typeof e=="function"?e:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,Q0={};function Pi(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||K0}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z0(){}Z0.prototype=Pi.prototype;function Of(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||K0}var Mf=Of.prototype=new Z0;Mf.constructor=Of;X0(Mf,Pi.prototype);Mf.isPureReactComponent=!0;var vh=Array.isArray,q0=Object.prototype.hasOwnProperty,If={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)q0.call(t,r)&&!J0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ho,type:e,key:o,ref:s,props:i,_owner:If.current}}function c2(e,t){return{$$typeof:Ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ho}function u2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xh=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u2(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ho:case qx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$l(s,0):r,vh(i)?(n="",e!=null&&(n=e.replace(xh,"$&/")+"/"),Bs(i,t,n,"",function(c){return c})):i!=null&&(zf(i)&&(i=c2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(xh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",vh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+$l(o,a);s+=Bs(o,t,n,l,i)}else if(l=l2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+$l(o,a++),s+=Bs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function f2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Us={transition:null},d2={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Us,ReactCurrentOwner:If};function tg(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Pi;W.Fragment=Jx;W.Profiler=t2;W.PureComponent=Of;W.StrictMode=e2;W.Suspense=o2;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d2;W.act=tg;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=If.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)q0.call(t,l)&&!J0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ho,type:e.type,key:i,ref:o,props:r,_owner:s}};W.createContext=function(e){return e={$$typeof:r2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n2,_context:e},e.Consumer=e};W.createElement=eg;W.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:i2,render:e}};W.isValidElement=zf;W.lazy=function(e){return{$$typeof:a2,_payload:{_status:-1,_result:e},_init:f2}};W.memo=function(e,t){return{$$typeof:s2,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Us.transition;Us.transition={};try{e()}finally{Us.transition=t}};W.unstable_act=tg;W.useCallback=function(e,t){return Ne.current.useCallback(e,t)};W.useContext=function(e){return Ne.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ne.current.useEffect(e,t)};W.useId=function(){return Ne.current.useId()};W.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ne.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};W.useRef=function(e){return Ne.current.useRef(e)};W.useState=function(e){return Ne.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ne.current.useTransition()};W.version="18.3.1";G0.exports=W;var b=G0.exports;const Vt=H0(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2=b,p2=Symbol.for("react.element"),m2=Symbol.for("react.fragment"),g2=Object.prototype.hasOwnProperty,y2=h2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v2={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)g2.call(t,r)&&!v2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:p2,type:e,key:o,ref:s,props:i,_owner:y2.current}}tl.Fragment=m2;tl.jsx=ng;tl.jsxs=ng;Y0.exports=tl;var f=Y0.exports,Gc={},rg={exports:{}},Je={},ig={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var V=R.length;R.push(z);e:for(;0<V;){var F=V-1>>>1,H=R[F];if(0<i(H,z))R[F]=z,R[V]=H,V=F;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],V=R.pop();if(V!==z){R[0]=V;e:for(var F=0,H=R.length,At=H>>>1;F<At;){var _e=2*(F+1)-1,gt=R[_e],ve=_e+1,nt=R[ve];if(0>i(gt,V))ve<H&&0>i(nt,gt)?(R[F]=nt,R[ve]=V,F=ve):(R[F]=gt,R[_e]=V,F=_e);else if(ve<H&&0>i(nt,V))R[F]=nt,R[ve]=V,F=ve;else break e}}return z}function i(R,z){var V=R.sortIndex-z.sortIndex;return V!==0?V:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,h=null,u=3,y=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=R)r(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function w(R){if(x=!1,m(R),!v)if(n(l)!==null)v=!0,X(C);else{var z=n(c);z!==null&&Se(w,z.startTime-R)}}function C(R,z){v=!1,x&&(x=!1,g(T),T=-1),y=!0;var V=u;try{for(m(z),h=n(l);h!==null&&(!(h.expirationTime>z)||R&&!ee());){var F=h.callback;if(typeof F=="function"){h.callback=null,u=h.priorityLevel;var H=F(h.expirationTime<=z);z=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(l)&&r(l),m(z)}else r(l);h=n(l)}if(h!==null)var At=!0;else{var _e=n(c);_e!==null&&Se(w,_e.startTime-z),At=!1}return At}finally{h=null,u=V,y=!1}}var j=!1,E=null,T=-1,O=5,I=-1;function ee(){return!(e.unstable_now()-I<O)}function P(){if(E!==null){var R=e.unstable_now();I=R;var z=!0;try{z=E(!0,R)}finally{z?N():(j=!1,E=null)}}else j=!1}var N;if(typeof p=="function")N=function(){p(P)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,K=J.port2;J.port1.onmessage=P,N=function(){K.postMessage(null)}}else N=function(){k(P,0)};function X(R){E=R,j||(j=!0,N())}function Se(R,z){T=k(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,X(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var V=u;u=z;try{return R()}finally{u=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=u;u=R;try{return z()}finally{u=V}},e.unstable_scheduleCallback=function(R,z,V){var F=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?F+V:F):V=F,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=V+H,R={id:d++,callback:z,priorityLevel:R,startTime:V,expirationTime:H,sortIndex:-1},V>F?(R.sortIndex=V,t(c,R),n(l)===null&&R===n(c)&&(x?(g(T),T=-1):x=!0,Se(w,V-F))):(R.sortIndex=H,t(l,R),v||y||(v=!0,X(C))),R},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(R){var z=u;return function(){var V=u;u=z;try{return R.apply(this,arguments)}finally{u=V}}}})(og);ig.exports=og;var x2=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w2=b,Ze=x2;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,bo={};function Pr(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(bo[e]=t,e=0;e<t.length;e++)sg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,S2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Sh={};function b2(e){return Kc.call(Sh,e)?!0:Kc.call(wh,e)?!1:S2.test(e)?Sh[e]=!0:(wh[e]=!0,!1)}function k2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C2(e,t,n,r){if(t===null||typeof t>"u"||k2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function Nf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Df,Nf);Te[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Df,Nf);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Df,Nf);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ff(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C2(t,n,i,r)&&(n=null),r||i===null?b2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=w2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=bh&&e[bh]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Bl;function Xi(e){if(Bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bl=t&&t[1]||""}return`
`+Bl+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xi(e):""}function P2(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Fr:return"Portal";case Xc:return"Profiler";case _f:return"StrictMode";case Qc:return"Suspense";case Zc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case ag:return(e._context.displayName||"Context")+".Provider";case Vf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $f:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function E2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ug(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j2(e){var t=ug(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=j2(e))}function fg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ug(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jc(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dg(e,t){t=t.checked,t!=null&&Ff(e,"checked",t,!1)}function eu(e,t){dg(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&tu(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ch(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tu(e,t,n){(t!=="number"||pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ph(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Qi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function hg(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,mg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T2=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){T2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function gg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function yg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A2=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(A2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var su=null;function Bf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var au=null,ii=null,oi=null;function jh(e){if(e=Ko(e)){if(typeof au!="function")throw Error(L(280));var t=e.stateNode;t&&(t=sl(t),au(e.stateNode,e.type,t))}}function vg(e){ii?oi?oi.push(e):oi=[e]:ii=e}function xg(){if(ii){var e=ii,t=oi;if(oi=ii=null,jh(e),t)for(e=0;e<t.length;e++)jh(t[e])}}function wg(e,t){return e(t)}function Sg(){}var Hl=!1;function bg(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return wg(e,t,n)}finally{Hl=!1,(ii!==null||oi!==null)&&(Sg(),xg())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var lu=!1;if(tn)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{lu=!1}function L2(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var io=!1,ma=null,ga=!1,cu=null,R2={onError:function(e){io=!0,ma=e}};function O2(e,t,n,r,i,o,s,a,l){io=!1,ma=null,L2.apply(R2,arguments)}function M2(e,t,n,r,i,o,s,a,l){if(O2.apply(this,arguments),io){if(io){var c=ma;io=!1,ma=null}else throw Error(L(198));ga||(ga=!0,cu=c)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Th(e){if(Er(e)!==e)throw Error(L(188))}function I2(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Th(i),e;if(o===r)return Th(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Cg(e){return e=I2(e),e!==null?Pg(e):null}function Pg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pg(e);if(t!==null)return t;e=e.sibling}return null}var Eg=Ze.unstable_scheduleCallback,Ah=Ze.unstable_cancelCallback,z2=Ze.unstable_shouldYield,D2=Ze.unstable_requestPaint,pe=Ze.unstable_now,N2=Ze.unstable_getCurrentPriorityLevel,Uf=Ze.unstable_ImmediatePriority,jg=Ze.unstable_UserBlockingPriority,ya=Ze.unstable_NormalPriority,F2=Ze.unstable_LowPriority,Tg=Ze.unstable_IdlePriority,nl=null,Nt=null;function _2(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:B2,V2=Math.log,$2=Math.LN2;function B2(e){return e>>>=0,e===0?32:31-(V2(e)/$2|0)|0}var us=64,fs=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function va(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Zi(a):(o&=s,o!==0&&(r=Zi(o)))}else s=n&~i,s!==0?r=Zi(s):o!==0&&(r=Zi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function U2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=U2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ag(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function H2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Lg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rg,Hf,Og,Mg,Ig,fu=!1,ds=[],Rn=null,On=null,Mn=null,Po=new Map,Eo=new Map,En=[],Y2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(t.pointerId)}}function Ii(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ko(t),t!==null&&Hf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function G2(e,t,n,r,i){switch(t){case"focusin":return Rn=Ii(Rn,e,t,n,r,i),!0;case"dragenter":return On=Ii(On,e,t,n,r,i),!0;case"mouseover":return Mn=Ii(Mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Po.set(o,Ii(Po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Eo.set(o,Ii(Eo.get(o)||null,e,t,n,r,i)),!0}return!1}function zg(e){var t=lr(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=kg(n),t!==null){e.blockedOn=t,Ig(e.priority,function(){Og(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);su=r,n.target.dispatchEvent(r),su=null}else return t=Ko(n),t!==null&&Hf(t),e.blockedOn=n,!1;t.shift()}return!0}function Rh(e,t,n){Ws(e)&&n.delete(t)}function K2(){fu=!1,Rn!==null&&Ws(Rn)&&(Rn=null),On!==null&&Ws(On)&&(On=null),Mn!==null&&Ws(Mn)&&(Mn=null),Po.forEach(Rh),Eo.forEach(Rh)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,fu||(fu=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,K2)))}function jo(e){function t(i){return zi(i,e)}if(0<ds.length){zi(ds[0],e);for(var n=1;n<ds.length;n++){var r=ds[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&zi(Rn,e),On!==null&&zi(On,e),Mn!==null&&zi(Mn,e),Po.forEach(t),Eo.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&En.shift()}var si=cn.ReactCurrentBatchConfig,xa=!0;function X2(e,t,n,r){var i=q,o=si.transition;si.transition=null;try{q=1,Yf(e,t,n,r)}finally{q=i,si.transition=o}}function Q2(e,t,n,r){var i=q,o=si.transition;si.transition=null;try{q=4,Yf(e,t,n,r)}finally{q=i,si.transition=o}}function Yf(e,t,n,r){if(xa){var i=du(e,t,n,r);if(i===null)nc(e,t,r,wa,n),Lh(e,r);else if(G2(i,e,t,n,r))r.stopPropagation();else if(Lh(e,r),t&4&&-1<Y2.indexOf(e)){for(;i!==null;){var o=Ko(i);if(o!==null&&Rg(o),o=du(e,t,n,r),o===null&&nc(e,t,r,wa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nc(e,t,r,null,n)}}var wa=null;function du(e,t,n,r){if(wa=null,e=Bf(r),e=lr(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wa=e,null}function Dg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N2()){case Uf:return 1;case jg:return 4;case ya:case F2:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var An=null,Gf=null,Hs=null;function Ng(){if(Hs)return Hs;var e,t=Gf,n=t.length,r,i="value"in An?An.value:An.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Hs=i.slice(e,1<r?1-r:void 0)}function Ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function Oh(){return!1}function et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hs:Oh,this.isPropagationStopped=Oh,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=et(Ei),Go=fe({},Ei,{view:0,detail:0}),Z2=et(Go),Gl,Kl,Di,rl=fe({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(Gl=e.screenX-Di.screenX,Kl=e.screenY-Di.screenY):Kl=Gl=0,Di=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),Mh=et(rl),q2=fe({},rl,{dataTransfer:0}),J2=et(q2),ew=fe({},Go,{relatedTarget:0}),Xl=et(ew),tw=fe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),nw=et(tw),rw=fe({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iw=et(rw),ow=fe({},Ei,{data:0}),Ih=et(ow),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lw[e])?!!t[e]:!1}function Xf(){return cw}var uw=fe({},Go,{key:function(e){if(e.key){var t=sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fw=et(uw),dw=fe({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=et(dw),hw=fe({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),pw=et(hw),mw=fe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),gw=et(mw),yw=fe({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vw=et(yw),xw=[9,13,27,32],Qf=tn&&"CompositionEvent"in window,oo=null;tn&&"documentMode"in document&&(oo=document.documentMode);var ww=tn&&"TextEvent"in window&&!oo,Fg=tn&&(!Qf||oo&&8<oo&&11>=oo),Dh=String.fromCharCode(32),Nh=!1;function _g(e,t){switch(e){case"keyup":return xw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Sw(e,t){switch(e){case"compositionend":return Vg(t);case"keypress":return t.which!==32?null:(Nh=!0,Dh);case"textInput":return e=t.data,e===Dh&&Nh?null:e;default:return null}}function bw(e,t){if(Vr)return e==="compositionend"||!Qf&&_g(e,t)?(e=Ng(),Hs=Gf=An=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fg&&t.locale!=="ko"?null:t.data;default:return null}}var kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kw[e.type]:t==="textarea"}function $g(e,t,n,r){vg(r),t=Sa(t,"onChange"),0<t.length&&(n=new Kf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var so=null,To=null;function Cw(e){qg(e,0)}function il(e){var t=Ur(e);if(fg(t))return e}function Pw(e,t){if(e==="change")return t}var Bg=!1;if(tn){var Ql;if(tn){var Zl="oninput"in document;if(!Zl){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Zl=typeof _h.oninput=="function"}Ql=Zl}else Ql=!1;Bg=Ql&&(!document.documentMode||9<document.documentMode)}function Vh(){so&&(so.detachEvent("onpropertychange",Ug),To=so=null)}function Ug(e){if(e.propertyName==="value"&&il(To)){var t=[];$g(t,To,e,Bf(e)),bg(Cw,t)}}function Ew(e,t,n){e==="focusin"?(Vh(),so=t,To=n,so.attachEvent("onpropertychange",Ug)):e==="focusout"&&Vh()}function jw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(To)}function Tw(e,t){if(e==="click")return il(t)}function Aw(e,t){if(e==="input"||e==="change")return il(t)}function Lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Lw;function Ao(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function $h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,t){var n=$h(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Wg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hg(){for(var e=window,t=pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pa(e.document)}return t}function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rw(e){var t=Hg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wg(n.ownerDocument.documentElement,n)){if(r!==null&&Zf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Bh(n,o);var s=Bh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ow=tn&&"documentMode"in document&&11>=document.documentMode,$r=null,hu=null,ao=null,pu=!1;function Uh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||$r==null||$r!==pa(r)||(r=$r,"selectionStart"in r&&Zf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Ao(ao,r)||(ao=r,r=Sa(hu,"onSelect"),0<r.length&&(t=new Kf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionend:ps("Transition","TransitionEnd")},ql={},Yg={};tn&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ol(e){if(ql[e])return ql[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yg)return ql[e]=t[n];return e}var Gg=ol("animationend"),Kg=ol("animationiteration"),Xg=ol("animationstart"),Qg=ol("transitionend"),Zg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Zg.set(e,t),Pr(t,[e])}for(var Jl=0;Jl<Wh.length;Jl++){var ec=Wh[Jl],Mw=ec.toLowerCase(),Iw=ec[0].toUpperCase()+ec.slice(1);Kn(Mw,"on"+Iw)}Kn(Gg,"onAnimationEnd");Kn(Kg,"onAnimationIteration");Kn(Xg,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Qg,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function Hh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M2(r,t,void 0,e),e.currentTarget=null}function qg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Hh(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Hh(i,a,c),o=l}}}if(ga)throw e=cu,ga=!1,cu=null,e}function ne(e,t){var n=t[xu];n===void 0&&(n=t[xu]=new Set);var r=e+"__bubble";n.has(r)||(Jg(t,e,2,!1),n.add(r))}function tc(e,t,n){var r=0;t&&(r|=4),Jg(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[ms]){e[ms]=!0,sg.forEach(function(n){n!=="selectionchange"&&(zw.has(n)||tc(n,!1,e),tc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,tc("selectionchange",!1,t))}}function Jg(e,t,n,r){switch(Dg(t)){case 1:var i=X2;break;case 4:i=Q2;break;default:i=Yf}n=i.bind(null,t,n,e),i=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=lr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bg(function(){var c=o,d=Bf(n),h=[];e:{var u=Zg.get(e);if(u!==void 0){var y=Kf,v=e;switch(e){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":y=fw;break;case"focusin":v="focus",y=Xl;break;case"focusout":v="blur",y=Xl;break;case"beforeblur":case"afterblur":y=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=J2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pw;break;case Gg:case Kg:case Xg:y=nw;break;case Qg:y=gw;break;case"scroll":y=Z2;break;case"wheel":y=vw;break;case"copy":case"cut":case"paste":y=iw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zh}var x=(t&4)!==0,k=!x&&e==="scroll",g=x?u!==null?u+"Capture":null:u;x=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Co(p,g),w!=null&&x.push(Ro(p,w,m)))),k)break;p=p.return}0<x.length&&(u=new y(u,v,null,n,d),h.push({event:u,listeners:x}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",u&&n!==su&&(v=n.relatedTarget||n.fromElement)&&(lr(v)||v[nn]))break e;if((y||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?lr(v):null,v!==null&&(k=Er(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=Mh,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=zh,w="onPointerLeave",g="onPointerEnter",p="pointer"),k=y==null?u:Ur(y),m=v==null?u:Ur(v),u=new x(w,p+"leave",y,n,d),u.target=k,u.relatedTarget=m,w=null,lr(d)===c&&(x=new x(g,p+"enter",v,n,d),x.target=m,x.relatedTarget=k,w=x),k=w,y&&v)t:{for(x=y,g=v,p=0,m=x;m;m=Ar(m))p++;for(m=0,w=g;w;w=Ar(w))m++;for(;0<p-m;)x=Ar(x),p--;for(;0<m-p;)g=Ar(g),m--;for(;p--;){if(x===g||g!==null&&x===g.alternate)break t;x=Ar(x),g=Ar(g)}x=null}else x=null;y!==null&&Yh(h,u,y,x,!1),v!==null&&k!==null&&Yh(h,k,v,x,!0)}}e:{if(u=c?Ur(c):window,y=u.nodeName&&u.nodeName.toLowerCase(),y==="select"||y==="input"&&u.type==="file")var C=Pw;else if(Fh(u))if(Bg)C=Aw;else{C=jw;var j=Ew}else(y=u.nodeName)&&y.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(C=Tw);if(C&&(C=C(e,c))){$g(h,C,n,d);break e}j&&j(e,u,c),e==="focusout"&&(j=u._wrapperState)&&j.controlled&&u.type==="number"&&tu(u,"number",u.value)}switch(j=c?Ur(c):window,e){case"focusin":(Fh(j)||j.contentEditable==="true")&&($r=j,hu=c,ao=null);break;case"focusout":ao=hu=$r=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Uh(h,n,d);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":Uh(h,n,d)}var E;if(Qf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vr?_g(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Fg&&n.locale!=="ko"&&(Vr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vr&&(E=Ng()):(An=d,Gf="value"in An?An.value:An.textContent,Vr=!0)),j=Sa(c,T),0<j.length&&(T=new Ih(T,e,null,n,d),h.push({event:T,listeners:j}),E?T.data=E:(E=Vg(n),E!==null&&(T.data=E)))),(E=ww?Sw(e,n):bw(e,n))&&(c=Sa(c,"onBeforeInput"),0<c.length&&(d=new Ih("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=E))}qg(h,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Co(e,n),o!=null&&r.unshift(Ro(e,o,i)),o=Co(e,t),o!=null&&r.push(Ro(e,o,i))),e=e.return}return r}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Co(n,o),l!=null&&s.unshift(Ro(n,l,a))):i||(l=Co(n,o),l!=null&&s.push(Ro(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dw=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function Gh(e){return(typeof e=="string"?e:""+e).replace(Dw,`
`).replace(Nw,"")}function gs(e,t,n){if(t=Gh(t),Gh(e)!==t&&n)throw Error(L(425))}function ba(){}var mu=null,gu=null;function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,Fw=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(e){return Kh.resolve(null).then(e).catch(Vw)}:vu;function Vw(e){setTimeout(function(){throw e})}function rc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jo(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),It="__reactFiber$"+ji,Oo="__reactProps$"+ji,nn="__reactContainer$"+ji,xu="__reactEvents$"+ji,$w="__reactListeners$"+ji,Bw="__reactHandles$"+ji;function lr(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xh(e);e!==null;){if(n=e[It])return n;e=Xh(e)}return t}e=n,n=e.parentNode}return null}function Ko(e){return e=e[It]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function sl(e){return e[Oo]||null}var wu=[],Wr=-1;function Xn(e){return{current:e}}function ie(e){0>Wr||(e.current=wu[Wr],wu[Wr]=null,Wr--)}function te(e,t){Wr++,wu[Wr]=e.current,e.current=t}var Bn={},Oe=Xn(Bn),We=Xn(!1),vr=Bn;function fi(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function ka(){ie(We),ie(Oe)}function Qh(e,t,n){if(Oe.current!==Bn)throw Error(L(168));te(Oe,t),te(We,n)}function e1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,E2(e)||"Unknown",i));return fe({},n,r)}function Ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,vr=Oe.current,te(Oe,e),te(We,We.current),!0}function Zh(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=e1(e,t,vr),r.__reactInternalMemoizedMergedChildContext=e,ie(We),ie(Oe),te(Oe,e)):ie(We),te(We,n)}var Yt=null,al=!1,ic=!1;function t1(e){Yt===null?Yt=[e]:Yt.push(e)}function Uw(e){al=!0,t1(e)}function Qn(){if(!ic&&Yt!==null){ic=!0;var e=0,t=q;try{var n=Yt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,al=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(e+1)),Eg(Uf,Qn),i}finally{q=t,ic=!1}}return null}var Hr=[],Yr=0,Pa=null,Ea=0,ct=[],ut=0,xr=null,Kt=1,Xt="";function ir(e,t){Hr[Yr++]=Ea,Hr[Yr++]=Pa,Pa=e,Ea=t}function n1(e,t,n){ct[ut++]=Kt,ct[ut++]=Xt,ct[ut++]=xr,xr=e;var r=Kt;e=Xt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Kt=1<<32-kt(t)+i|n<<i|r,Xt=o+e}else Kt=1<<o|n<<i|r,Xt=e}function qf(e){e.return!==null&&(ir(e,1),n1(e,1,0))}function Jf(e){for(;e===Pa;)Pa=Hr[--Yr],Hr[Yr]=null,Ea=Hr[--Yr],Hr[Yr]=null;for(;e===xr;)xr=ct[--ut],ct[ut]=null,Xt=ct[--ut],ct[ut]=null,Kt=ct[--ut],ct[ut]=null}var Qe=null,Xe=null,se=!1,St=null;function r1(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:Kt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bu(e){if(se){var t=Xe;if(t){var n=t;if(!qh(e,t)){if(Su(e))throw Error(L(418));t=In(n.nextSibling);var r=Qe;t&&qh(e,t)?r1(r,n):(e.flags=e.flags&-4097|2,se=!1,Qe=e)}}else{if(Su(e))throw Error(L(418));e.flags=e.flags&-4097|2,se=!1,Qe=e}}}function Jh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function ys(e){if(e!==Qe)return!1;if(!se)return Jh(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yu(e.type,e.memoizedProps)),t&&(t=Xe)){if(Su(e))throw i1(),Error(L(418));for(;t;)r1(e,t),t=In(t.nextSibling)}if(Jh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?In(e.stateNode.nextSibling):null;return!0}function i1(){for(var e=Xe;e;)e=In(e.nextSibling)}function di(){Xe=Qe=null,se=!1}function ed(e){St===null?St=[e]:St.push(e)}var Ww=cn.ReactCurrentBatchConfig;function Ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function vs(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ep(e){var t=e._init;return t(e._payload)}function o1(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Fn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,w){return p===null||p.tag!==6?(p=fc(m,g.mode,w),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,w){var C=m.type;return C===_r?d(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&ep(C)===p.type)?(w=i(p,m.props),w.ref=Ni(g,p,m),w.return=g,w):(w=Js(m.type,m.key,m.props,null,g.mode,w),w.ref=Ni(g,p,m),w.return=g,w)}function c(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=dc(m,g.mode,w),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function d(g,p,m,w,C){return p===null||p.tag!==7?(p=mr(m,g.mode,w,C),p.return=g,p):(p=i(p,m),p.return=g,p)}function h(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fc(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case as:return m=Js(p.type,p.key,p.props,null,g.mode,m),m.ref=Ni(g,null,p),m.return=g,m;case Fr:return p=dc(p,g.mode,m),p.return=g,p;case kn:var w=p._init;return h(g,w(p._payload),m)}if(Qi(p)||Oi(p))return p=mr(p,g.mode,m,null),p.return=g,p;vs(g,p)}return null}function u(g,p,m,w){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case as:return m.key===C?l(g,p,m,w):null;case Fr:return m.key===C?c(g,p,m,w):null;case kn:return C=m._init,u(g,p,C(m._payload),w)}if(Qi(m)||Oi(m))return C!==null?null:d(g,p,m,w,null);vs(g,m)}return null}function y(g,p,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(p,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case as:return g=g.get(w.key===null?m:w.key)||null,l(p,g,w,C);case Fr:return g=g.get(w.key===null?m:w.key)||null,c(p,g,w,C);case kn:var j=w._init;return y(g,p,m,j(w._payload),C)}if(Qi(w)||Oi(w))return g=g.get(m)||null,d(p,g,w,C,null);vs(p,w)}return null}function v(g,p,m,w){for(var C=null,j=null,E=p,T=p=0,O=null;E!==null&&T<m.length;T++){E.index>T?(O=E,E=null):O=E.sibling;var I=u(g,E,m[T],w);if(I===null){E===null&&(E=O);break}e&&E&&I.alternate===null&&t(g,E),p=o(I,p,T),j===null?C=I:j.sibling=I,j=I,E=O}if(T===m.length)return n(g,E),se&&ir(g,T),C;if(E===null){for(;T<m.length;T++)E=h(g,m[T],w),E!==null&&(p=o(E,p,T),j===null?C=E:j.sibling=E,j=E);return se&&ir(g,T),C}for(E=r(g,E);T<m.length;T++)O=y(E,g,T,m[T],w),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?T:O.key),p=o(O,p,T),j===null?C=O:j.sibling=O,j=O);return e&&E.forEach(function(ee){return t(g,ee)}),se&&ir(g,T),C}function x(g,p,m,w){var C=Oi(m);if(typeof C!="function")throw Error(L(150));if(m=C.call(m),m==null)throw Error(L(151));for(var j=C=null,E=p,T=p=0,O=null,I=m.next();E!==null&&!I.done;T++,I=m.next()){E.index>T?(O=E,E=null):O=E.sibling;var ee=u(g,E,I.value,w);if(ee===null){E===null&&(E=O);break}e&&E&&ee.alternate===null&&t(g,E),p=o(ee,p,T),j===null?C=ee:j.sibling=ee,j=ee,E=O}if(I.done)return n(g,E),se&&ir(g,T),C;if(E===null){for(;!I.done;T++,I=m.next())I=h(g,I.value,w),I!==null&&(p=o(I,p,T),j===null?C=I:j.sibling=I,j=I);return se&&ir(g,T),C}for(E=r(g,E);!I.done;T++,I=m.next())I=y(E,g,T,I.value,w),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?T:I.key),p=o(I,p,T),j===null?C=I:j.sibling=I,j=I);return e&&E.forEach(function(P){return t(g,P)}),se&&ir(g,T),C}function k(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===_r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case as:e:{for(var C=m.key,j=p;j!==null;){if(j.key===C){if(C=m.type,C===_r){if(j.tag===7){n(g,j.sibling),p=i(j,m.props.children),p.return=g,g=p;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&ep(C)===j.type){n(g,j.sibling),p=i(j,m.props),p.ref=Ni(g,j,m),p.return=g,g=p;break e}n(g,j);break}else t(g,j);j=j.sibling}m.type===_r?(p=mr(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=Js(m.type,m.key,m.props,null,g.mode,w),w.ref=Ni(g,p,m),w.return=g,g=w)}return s(g);case Fr:e:{for(j=m.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=dc(m,g.mode,w),p.return=g,g=p}return s(g);case kn:return j=m._init,k(g,p,j(m._payload),w)}if(Qi(m))return v(g,p,m,w);if(Oi(m))return x(g,p,m,w);vs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=fc(m,g.mode,w),p.return=g,g=p),s(g)):n(g,p)}return k}var hi=o1(!0),s1=o1(!1),ja=Xn(null),Ta=null,Gr=null,td=null;function nd(){td=Gr=Ta=null}function rd(e){var t=ja.current;ie(ja),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ai(e,t){Ta=e,td=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(td!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(Ta===null)throw Error(L(308));Gr=e,Ta.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var cr=null;function id(e){cr===null?cr=[e]:cr.push(e)}function a1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,id(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,id(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wf(e,n)}}function tp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Aa(e,t,n,r){var i=e.updateQueue;Cn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=c=l=null,a=o;do{var u=a.lane,y=a.eventTime;if((r&u)===u){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(u=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(y,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,u=typeof v=="function"?v.call(y,h,u):v,u==null)break e;h=fe({},h,u);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[a]:u.push(a))}else y={eventTime:y,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=h):d=d.next=y,s|=u;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;u=a,a=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sr|=s,e.lanes=s,e.memoizedState=h}}function np(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Xo={},Ft=Xn(Xo),Mo=Xn(Xo),Io=Xn(Xo);function ur(e){if(e===Xo)throw Error(L(174));return e}function sd(e,t){switch(te(Io,t),te(Mo,e),te(Ft,Xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}ie(Ft),te(Ft,t)}function pi(){ie(Ft),ie(Mo),ie(Io)}function c1(e){ur(Io.current);var t=ur(Ft.current),n=ru(t,e.type);t!==n&&(te(Mo,e),te(Ft,n))}function ad(e){Mo.current===e&&(ie(Ft),ie(Mo))}var ae=Xn(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oc=[];function ld(){for(var e=0;e<oc.length;e++)oc[e]._workInProgressVersionPrimary=null;oc.length=0}var Ks=cn.ReactCurrentDispatcher,sc=cn.ReactCurrentBatchConfig,wr=0,ce=null,xe=null,be=null,Ra=!1,lo=!1,zo=0,Hw=0;function Ae(){throw Error(L(321))}function cd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ud(e,t,n,r,i,o){if(wr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ks.current=e===null||e.memoizedState===null?Xw:Qw,e=n(r,i),lo){o=0;do{if(lo=!1,zo=0,25<=o)throw Error(L(301));o+=1,be=xe=null,t.updateQueue=null,Ks.current=Zw,e=n(r,i)}while(lo)}if(Ks.current=Oa,t=xe!==null&&xe.next!==null,wr=0,be=xe=ce=null,Ra=!1,t)throw Error(L(300));return e}function fd(){var e=zo!==0;return zo=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function pt(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,xe=e;else{if(e===null)throw Error(L(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function Do(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=pt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((wr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,ce.lanes|=d,Sr|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Et(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,Sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lc(e){var t=pt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Et(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function u1(){}function f1(e,t){var n=ce,r=pt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,dd(p1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,No(9,h1.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(L(349));wr&30||d1(n,t,i)}return i}function d1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function h1(e,t,n,r){t.value=n,t.getSnapshot=r,m1(t)&&g1(e)}function p1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function g1(e){var t=rn(e,1);t!==null&&Ct(t,e,1,-1)}function rp(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t.queue=e,e=e.dispatch=Kw.bind(null,ce,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function y1(){return pt().memoizedState}function Xs(e,t,n,r){var i=Rt();ce.flags|=e,i.memoizedState=No(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(xe!==null){var s=xe.memoizedState;if(o=s.destroy,r!==null&&cd(r,s.deps)){i.memoizedState=No(t,n,o,r);return}}ce.flags|=e,i.memoizedState=No(1|t,n,o,r)}function ip(e,t){return Xs(8390656,8,e,t)}function dd(e,t){return ll(2048,8,e,t)}function v1(e,t){return ll(4,2,e,t)}function x1(e,t){return ll(4,4,e,t)}function w1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function S1(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,w1.bind(null,t,e),n)}function hd(){}function b1(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function k1(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return wr&21?(Et(n,t)||(n=Ag(),ce.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Yw(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=sc.transition;sc.transition={};try{e(!1),t()}finally{q=n,sc.transition=r}}function P1(){return pt().memoizedState}function Gw(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E1(e))j1(t,n);else if(n=a1(e,t,n,r),n!==null){var i=De();Ct(n,e,r,i),T1(n,t,r)}}function Kw(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E1(e))j1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,s)){var l=t.interleaved;l===null?(i.next=i,id(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=a1(e,t,i,r),n!==null&&(i=De(),Ct(n,e,r,i),T1(n,t,r))}}function E1(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function j1(e,t){lo=Ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wf(e,n)}}var Oa={readContext:ht,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Xw={readContext:ht,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:ip,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4194308,4,w1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gw.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:rp,useDebugValue:hd,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=rp(!1),t=e[0];return e=Yw.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Rt();if(se){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ce===null)throw Error(L(349));wr&30||d1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ip(p1.bind(null,r,o,e),[e]),r.flags|=2048,No(9,h1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Ce.identifierPrefix;if(se){var n=Xt,r=Kt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qw={readContext:ht,useCallback:b1,useContext:ht,useEffect:dd,useImperativeHandle:S1,useInsertionEffect:v1,useLayoutEffect:x1,useMemo:k1,useReducer:ac,useRef:y1,useState:function(){return ac(Do)},useDebugValue:hd,useDeferredValue:function(e){var t=pt();return C1(t,xe.memoizedState,e)},useTransition:function(){var e=ac(Do)[0],t=pt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:f1,useId:P1,unstable_isNewReconciler:!1},Zw={readContext:ht,useCallback:b1,useContext:ht,useEffect:dd,useImperativeHandle:S1,useInsertionEffect:v1,useLayoutEffect:x1,useMemo:k1,useReducer:lc,useRef:y1,useState:function(){return lc(Do)},useDebugValue:hd,useDeferredValue:function(e){var t=pt();return xe===null?t.memoizedState=e:C1(t,xe.memoizedState,e)},useTransition:function(){var e=lc(Do)[0],t=pt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:f1,useId:P1,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=Nn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(Ct(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=Nn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(Ct(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Nn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zn(e,i,r),t!==null&&(Ct(t,e,r,n),Gs(t,e,r))}};function op(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,o):!0}function A1(e,t,n){var r=!1,i=Bn,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=He(t)?vr:Oe.current,r=t.contextTypes,o=(r=r!=null)?fi(e,i):Bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},od(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=He(t)?vr:Oe.current,i.context=fi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cl.enqueueReplaceState(i,i.state,null),Aa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",r=t;do n+=P2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qw=typeof WeakMap=="function"?WeakMap:Map;function L1(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ia||(Ia=!0,Du=r),Eu(e,t)},n}function R1(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Eu(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ap(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=d4.bind(null,e,t,n),t.then(e,e))}function lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var Jw=cn.ReactCurrentOwner,Be=!1;function ze(e,t,n,r){t.child=e===null?s1(t,null,n,r):hi(t,e.child,n,r)}function up(e,t,n,r,i){n=n.render;var o=t.ref;return ai(t,i),r=ud(e,t,n,r,o,i),n=fd(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(se&&n&&qf(t),t.flags|=1,ze(e,t,r,i),t.child)}function fp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,O1(e,t,o,r,i)):(e=Js(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(s,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=Fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function O1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ao(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,on(e,t,i)}return ju(e,t,n,r,i)}function M1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Xr,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Xr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Xr,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Xr,Ke),Ke|=r;return ze(e,t,i,n),t.child}function I1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ju(e,t,n,r,i){var o=He(n)?vr:Oe.current;return o=fi(t,o),ai(t,i),n=ud(e,t,n,r,o,i),r=fd(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(se&&r&&qf(t),t.flags|=1,ze(e,t,n,i),t.child)}function dp(e,t,n,r,i){if(He(n)){var o=!0;Ca(t)}else o=!1;if(ai(t,i),t.stateNode===null)Qs(e,t),A1(t,n,r),Pu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=He(n)?vr:Oe.current,c=fi(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&sp(t,s,r,c),Cn=!1;var u=t.memoizedState;s.state=u,Aa(t,r,s,i),l=t.memoizedState,a!==r||u!==l||We.current||Cn?(typeof d=="function"&&(Cu(t,n,d,r),l=t.memoizedState),(a=Cn||op(t,n,a,r,u,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,l1(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:xt(t.type,a),s.props=c,h=t.pendingProps,u=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=He(n)?vr:Oe.current,l=fi(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||u!==l)&&sp(t,s,r,l),Cn=!1,u=t.memoizedState,s.state=u,Aa(t,r,s,i);var v=t.memoizedState;a!==h||u!==v||We.current||Cn?(typeof y=="function"&&(Cu(t,n,y,r),v=t.memoizedState),(c=Cn||op(t,n,c,r,u,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),r=!1)}return Tu(e,t,n,r,o,i)}function Tu(e,t,n,r,i,o){I1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Zh(t,n,!1),on(e,t,o);r=t.stateNode,Jw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hi(t,e.child,null,o),t.child=hi(t,null,a,o)):ze(e,t,a,o),t.memoizedState=r.state,i&&Zh(t,n,!0),t.child}function z1(e){var t=e.stateNode;t.pendingContext?Qh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qh(e,t.context,!1),sd(e,t.containerInfo)}function hp(e,t,n,r,i){return di(),ed(i),t.flags|=256,ze(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function D1(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ae,i&1),e===null)return bu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=dl(s,r,0,null),e=mr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lu(n),t.memoizedState=Au,e):pd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return e4(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Fn(a,o):(o=mr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Lu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return o=e.child,e=o.sibling,r=Fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pd(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&ed(r),hi(t,e.child,null,n),e=pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e4(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=cc(Error(L(422))),xs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=dl({mode:"visible",children:r.children},i,0,null),o=mr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hi(t,e.child,null,s),t.child.memoizedState=Lu(s),t.memoizedState=Au,o);if(!(t.mode&1))return xs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=cc(o,r,void 0),xs(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=Ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),Ct(r,e,i,-1))}return wd(),r=cc(Error(L(421))),xs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h4.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=In(i.nextSibling),Qe=t,se=!0,St=null,e!==null&&(ct[ut++]=Kt,ct[ut++]=Xt,ct[ut++]=xr,Kt=e.id,Xt=e.overflow,xr=t),t=pd(t,r.children),t.flags|=4096,t)}function pp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ku(e.return,t,n)}function uc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function N1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,n,t);else if(e.tag===19)pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&La(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uc(t,!0,n,null,o);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t4(e,t,n){switch(t.tag){case 3:z1(t),di();break;case 5:c1(t);break;case 1:He(t.type)&&Ca(t);break;case 4:sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?D1(e,t,n):(te(ae,ae.current&1),e=on(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return N1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,M1(e,t,n)}return on(e,t,n)}var F1,Ru,_1,V1;F1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};_1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ur(Ft.current);var o=null;switch(n){case"input":i=Jc(e,i),r=Jc(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=nu(e,i),r=nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ba)}iu(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ne("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};V1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fi(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n4(e,t,n){var r=t.pendingProps;switch(Jf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return He(t.type)&&ka(),Le(t),null;case 3:return r=t.stateNode,pi(),ie(We),ie(Oe),ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(_u(St),St=null))),Ru(e,t),Le(t),null;case 5:ad(t);var i=ur(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)_1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Le(t),null}if(e=ur(Ft.current),ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[Oo]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)ne(qi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":kh(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":Ph(r,o),ne("invalid",r)}iu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,a,e),i=["children",""+a]):bo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":ls(r),Ch(r,o,!0);break;case"textarea":ls(r),Eh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ba)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[It]=t,e[Oo]=r,F1(e,t,!1,!1),t.stateNode=e;e:{switch(s=ou(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)ne(qi[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":kh(e,r),i=Jc(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Ph(e,r),i=nu(e,r),ne("invalid",e);break;default:i=r}iu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(e,l):typeof l=="number"&&ko(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&Ff(e,o,l,s))}switch(n){case"input":ls(e),Ch(e,r,!1);break;case"textarea":ls(e),Eh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ri(e,!!r.multiple,o,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)V1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ur(Io.current),ur(Ft.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Le(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Xe!==null&&t.mode&1&&!(t.flags&128))i1(),di(),t.flags|=98560,o=!1;else if(o=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[It]=t}else di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else St!==null&&(_u(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?we===0&&(we=3):wd())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return pi(),Ru(e,t),e===null&&Lo(t.stateNode.containerInfo),Le(t),null;case 10:return rd(t.type._context),Le(t),null;case 17:return He(t.type)&&ka(),Le(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fi(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=La(e),s!==null){for(t.flags|=128,Fi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>gi&&(t.flags|=128,r=!0,Fi(o,!1),t.lanes=4194304)}else{if(!r)if(e=La(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!se)return Le(t),null}else 2*pe()-o.renderingStartTime>gi&&n!==1073741824&&(t.flags|=128,r=!0,Fi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return xd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function r4(e,t){switch(Jf(t),t.tag){case 1:return He(t.type)&&ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pi(),ie(We),ie(Oe),ld(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ad(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return pi(),null;case 10:return rd(t.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ws=!1,Re=!1,i4=typeof WeakSet=="function"?WeakSet:Set,M=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ou(e,t,n){try{n()}catch(r){de(e,t,r)}}var mp=!1;function o4(e,t){if(mu=xa,e=Hg(),Zf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,h=e,u=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)u=h,h=y;for(;;){if(h===e)break t;if(u===n&&++c===i&&(a=s),u===o&&++d===r&&(l=s),(y=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:e,selectionRange:n},xa=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:xt(t.type,x),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){de(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=mp,mp=!1,v}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ou(t,n,o)}i=i.next}while(i!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $1(e){var t=e.alternate;t!==null&&(e.alternate=null,$1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Oo],delete t[xu],delete t[$w],delete t[Bw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B1(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ba));else if(r!==4&&(e=e.child,e!==null))for(Iu(e,t,n),e=e.sibling;e!==null;)Iu(e,t,n),e=e.sibling}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}var Pe=null,wt=!1;function dn(e,t,n){for(n=n.child;n!==null;)U1(e,t,n),n=n.sibling}function U1(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Re||Kr(n,t);case 6:var r=Pe,i=wt;Pe=null,dn(e,t,n),Pe=r,wt=i,Pe!==null&&(wt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(wt?(e=Pe,n=n.stateNode,e.nodeType===8?rc(e.parentNode,n):e.nodeType===1&&rc(e,n),jo(e)):rc(Pe,n.stateNode));break;case 4:r=Pe,i=wt,Pe=n.stateNode.containerInfo,wt=!0,dn(e,t,n),Pe=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ou(n,t,s),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!Re&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,t,a)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,dn(e,t,n),Re=r):dn(e,t,n);break;default:dn(e,t,n)}}function yp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i4),t.forEach(function(r){var i=p4.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,wt=!1;break e;case 3:Pe=a.stateNode.containerInfo,wt=!0;break e;case 4:Pe=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Pe===null)throw Error(L(160));U1(o,s,i),Pe=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){de(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)W1(t,e),t=t.sibling}function W1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Lt(e),r&4){try{co(3,e,e.return),ul(3,e)}catch(x){de(e,e.return,x)}try{co(5,e,e.return)}catch(x){de(e,e.return,x)}}break;case 1:vt(t,e),Lt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(vt(t,e),Lt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{ko(i,"")}catch(x){de(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dg(i,o),ou(a,s);var c=ou(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?yg(i,h):d==="dangerouslySetInnerHTML"?mg(i,h):d==="children"?ko(i,h):Ff(i,d,h,c)}switch(a){case"input":eu(i,o);break;case"textarea":hg(i,o);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ri(i,!!o.multiple,y,!1):u!==!!o.multiple&&(o.defaultValue!=null?ri(i,!!o.multiple,o.defaultValue,!0):ri(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oo]=o}catch(x){de(e,e.return,x)}}break;case 6:if(vt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){de(e,e.return,x)}}break;case 3:if(vt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(t.containerInfo)}catch(x){de(e,e.return,x)}break;case 4:vt(t,e),Lt(e);break;case 13:vt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=pe())),r&4&&yp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||d,vt(t,e),Re=c):vt(t,e),Lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(h=M=d;M!==null;){switch(u=M,y=u.child,u.tag){case 0:case 11:case 14:case 15:co(4,u,u.return);break;case 1:Kr(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){r=u,n=u.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){de(r,n,x)}}break;case 5:Kr(u,u.return);break;case 22:if(u.memoizedState!==null){xp(h);continue}}y!==null?(y.return=u,M=y):xp(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gg("display",s))}catch(x){de(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){de(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vt(t,e),Lt(e),r&4&&yp(e);break;case 21:break;default:vt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B1(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var o=gp(e);zu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=gp(e);Iu(e,a,s);break;default:throw Error(L(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s4(e,t,n){M=e,H1(e)}function H1(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ws;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Re;a=ws;var c=Re;if(ws=s,(Re=l)&&!c)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?wp(i):l!==null?(l.return=s,M=l):wp(i);for(;o!==null;)M=o,H1(o),o=o.sibling;M=i,ws=a,Re=c}vp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):vp(e)}}function vp(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&np(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}np(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Re||t.flags&512&&Mu(t)}catch(u){de(t,t.return,u)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function xp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function wp(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(l){de(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){de(t,i,l)}}var o=t.return;try{Mu(t)}catch(l){de(t,o,l)}break;case 5:var s=t.return;try{Mu(t)}catch(l){de(t,s,l)}}}catch(l){de(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var a4=Math.ceil,Ma=cn.ReactCurrentDispatcher,md=cn.ReactCurrentOwner,dt=cn.ReactCurrentBatchConfig,Y=0,Ce=null,ye=null,je=0,Ke=0,Xr=Xn(0),we=0,Fo=null,Sr=0,fl=0,gd=0,uo=null,$e=null,yd=0,gi=1/0,Wt=null,Ia=!1,Du=null,Dn=null,Ss=!1,Ln=null,za=0,fo=0,Nu=null,Zs=-1,qs=0;function De(){return Y&6?pe():Zs!==-1?Zs:Zs=pe()}function Nn(e){return e.mode&1?Y&2&&je!==0?je&-je:Ww.transition!==null?(qs===0&&(qs=Ag()),qs):(e=q,e!==0||(e=window.event,e=e===void 0?16:Dg(e.type)),e):1}function Ct(e,t,n,r){if(50<fo)throw fo=0,Nu=null,Error(L(185));Yo(e,n,r),(!(Y&2)||e!==Ce)&&(e===Ce&&(!(Y&2)&&(fl|=n),we===4&&jn(e,je)),Ye(e,r),n===1&&Y===0&&!(t.mode&1)&&(gi=pe()+500,al&&Qn()))}function Ye(e,t){var n=e.callbackNode;W2(e,t);var r=va(e,e===Ce?je:0);if(r===0)n!==null&&Ah(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ah(n),t===1)e.tag===0?Uw(Sp.bind(null,e)):t1(Sp.bind(null,e)),_w(function(){!(Y&6)&&Qn()}),n=null;else{switch(Lg(r)){case 1:n=Uf;break;case 4:n=jg;break;case 16:n=ya;break;case 536870912:n=Tg;break;default:n=ya}n=J1(n,Y1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Y1(e,t){if(Zs=-1,qs=0,Y&6)throw Error(L(327));var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var r=va(e,e===Ce?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Da(e,r);else{t=r;var i=Y;Y|=2;var o=K1();(Ce!==e||je!==t)&&(Wt=null,gi=pe()+500,pr(e,t));do try{u4();break}catch(a){G1(e,a)}while(1);nd(),Ma.current=o,Y=i,ye!==null?t=0:(Ce=null,je=0,t=we)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=Fu(e,i))),t===1)throw n=Fo,pr(e,0),jn(e,r),Ye(e,pe()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!l4(i)&&(t=Da(e,r),t===2&&(o=uu(e),o!==0&&(r=o,t=Fu(e,o))),t===1))throw n=Fo,pr(e,0),jn(e,r),Ye(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:or(e,$e,Wt);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=yd+500-pe(),10<t)){if(va(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu(or.bind(null,e,$e,Wt),t);break}or(e,$e,Wt);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-kt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a4(r/1960))-r,10<r){e.timeoutHandle=vu(or.bind(null,e,$e,Wt),r);break}or(e,$e,Wt);break;case 5:or(e,$e,Wt);break;default:throw Error(L(329))}}}return Ye(e,pe()),e.callbackNode===n?Y1.bind(null,e):null}function Fu(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=Da(e,t),e!==2&&(t=$e,$e=n,t!==null&&_u(t)),e}function _u(e){$e===null?$e=e:$e.push.apply($e,e)}function l4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~gd,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Sp(e){if(Y&6)throw Error(L(327));li();var t=va(e,0);if(!(t&1))return Ye(e,pe()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=Fu(e,r))}if(n===1)throw n=Fo,pr(e,0),jn(e,t),Ye(e,pe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,$e,Wt),Ye(e,pe()),null}function vd(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(gi=pe()+500,al&&Qn())}}function br(e){Ln!==null&&Ln.tag===0&&!(Y&6)&&li();var t=Y;Y|=1;var n=dt.transition,r=q;try{if(dt.transition=null,q=1,e)return e()}finally{q=r,dt.transition=n,Y=t,!(Y&6)&&Qn()}}function xd(){Ke=Xr.current,ie(Xr)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fw(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:pi(),ie(We),ie(Oe),ld();break;case 5:ad(r);break;case 4:pi();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:rd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Ce=e,ye=e=Fn(e.current,null),je=Ke=t,we=0,Fo=null,gd=fl=Sr=0,$e=uo=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cr=null}return e}function G1(e,t){do{var n=ye;try{if(nd(),Ks.current=Oa,Ra){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ra=!1}if(wr=0,be=xe=ce=null,lo=!1,zo=0,md.current=null,n===null||n.return===null){we=1,Fo=t,ye=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=lp(s);if(y!==null){y.flags&=-257,cp(y,s,a,o,t),y.mode&1&&ap(o,c,t),t=y,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){ap(o,c,t),wd();break e}l=Error(L(426))}}else if(se&&a.mode&1){var k=lp(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),cp(k,s,a,o,t),ed(mi(l,a));break e}}o=l=mi(l,a),we!==4&&(we=2),uo===null?uo=[o]:uo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=L1(o,l,t);tp(o,g);break e;case 1:a=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=R1(o,a,t);tp(o,w);break e}}o=o.return}while(o!==null)}Q1(n)}catch(C){t=C,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function K1(){var e=Ma.current;return Ma.current=Oa,e===null?Oa:e}function wd(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(Sr&268435455)&&!(fl&268435455)||jn(Ce,je)}function Da(e,t){var n=Y;Y|=2;var r=K1();(Ce!==e||je!==t)&&(Wt=null,pr(e,t));do try{c4();break}catch(i){G1(e,i)}while(1);if(nd(),Y=n,Ma.current=r,ye!==null)throw Error(L(261));return Ce=null,je=0,we}function c4(){for(;ye!==null;)X1(ye)}function u4(){for(;ye!==null&&!z2();)X1(ye)}function X1(e){var t=q1(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Q1(e):ye=t,md.current=null}function Q1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r4(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ye=null;return}}else if(n=n4(n,t,Ke),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);we===0&&(we=5)}function or(e,t,n){var r=q,i=dt.transition;try{dt.transition=null,q=1,f4(e,t,n,r)}finally{dt.transition=i,q=r}return null}function f4(e,t,n,r){do li();while(Ln!==null);if(Y&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(H2(e,o),e===Ce&&(ye=Ce=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,J1(ya,function(){return li(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var s=q;q=1;var a=Y;Y|=4,md.current=null,o4(e,n),W1(n,e),Rw(gu),xa=!!mu,gu=mu=null,e.current=n,s4(n),D2(),Y=a,q=s,dt.transition=o}else e.current=n;if(Ss&&(Ss=!1,Ln=e,za=i),o=e.pendingLanes,o===0&&(Dn=null),_2(n.stateNode),Ye(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ia)throw Ia=!1,e=Du,Du=null,e;return za&1&&e.tag!==0&&li(),o=e.pendingLanes,o&1?e===Nu?fo++:(fo=0,Nu=e):fo=0,Qn(),null}function li(){if(Ln!==null){var e=Lg(za),t=dt.transition,n=q;try{if(dt.transition=null,q=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,za=0,Y&6)throw Error(L(331));var i=Y;for(Y|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:co(8,d,o)}var h=d.child;if(h!==null)h.return=d,M=h;else for(;M!==null;){d=M;var u=d.sibling,y=d.return;if($1(d),d===c){M=null;break}if(u!==null){u.return=y,M=u;break}M=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:co(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,M=g;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){s=M;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,M=m;else e:for(s=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(C){de(a,a.return,C)}if(a===s){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(Y=i,Qn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{q=n,dt.transition=t}}return!1}function bp(e,t,n){t=mi(n,t),t=L1(e,t,1),e=zn(e,t,1),t=De(),e!==null&&(Yo(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)bp(e,e,n);else for(;t!==null;){if(t.tag===3){bp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=mi(n,e),e=R1(t,e,1),t=zn(t,e,1),e=De(),t!==null&&(Yo(t,1,e),Ye(t,e));break}}t=t.return}}function d4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(je&n)===n&&(we===4||we===3&&(je&130023424)===je&&500>pe()-yd?pr(e,0):gd|=n),Ye(e,t)}function Z1(e,t){t===0&&(e.mode&1?(t=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):t=1);var n=De();e=rn(e,t),e!==null&&(Yo(e,t,n),Ye(e,n))}function h4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Z1(e,n)}function p4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Z1(e,n)}var q1;q1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,t4(e,t,n);Be=!!(e.flags&131072)}else Be=!1,se&&t.flags&1048576&&n1(t,Ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=fi(t,Oe.current);ai(t,n),i=ud(null,t,r,e,i,n);var o=fd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,Ca(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(t),i.updater=cl,t.stateNode=i,i._reactInternals=t,Pu(t,r,e,n),t=Tu(null,t,r,!0,o,n)):(t.tag=0,se&&o&&qf(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=g4(r),e=xt(r,e),i){case 0:t=ju(null,t,r,e,n);break e;case 1:t=dp(null,t,r,e,n);break e;case 11:t=up(null,t,r,e,n);break e;case 14:t=fp(null,t,r,xt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),dp(e,t,r,i,n);case 3:e:{if(z1(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,l1(e,t),Aa(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mi(Error(L(423)),t),t=hp(e,t,r,n,i);break e}else if(r!==i){i=mi(Error(L(424)),t),t=hp(e,t,r,n,i);break e}else for(Xe=In(t.stateNode.containerInfo.firstChild),Qe=t,se=!0,St=null,n=s1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===i){t=on(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return c1(t),e===null&&bu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,yu(r,i)?s=null:o!==null&&yu(r,o)&&(t.flags|=32),I1(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&bu(t),null;case 13:return D1(e,t,n);case 4:return sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hi(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),up(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,te(ja,r._currentValue),r._currentValue=s,o!==null)if(Et(o.value,s)){if(o.children===i.children&&!We.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Zt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ku(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ku(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ai(t,n),i=ht(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),fp(e,t,r,i,n);case 15:return O1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Qs(e,t),t.tag=1,He(r)?(e=!0,Ca(t)):e=!1,ai(t,n),A1(t,r,i),Pu(t,r,i,n),Tu(null,t,r,!0,e,n);case 19:return N1(e,t,n);case 22:return M1(e,t,n)}throw Error(L(156,t.tag))};function J1(e,t){return Eg(e,t)}function m4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new m4(e,t,n,r)}function Sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g4(e){if(typeof e=="function")return Sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vf)return 11;if(e===$f)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Sd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _r:return mr(n.children,i,o,t);case _f:s=8,i|=8;break;case Xc:return e=ft(12,n,t,i|2),e.elementType=Xc,e.lanes=o,e;case Qc:return e=ft(13,n,t,i),e.elementType=Qc,e.lanes=o,e;case Zc:return e=ft(19,n,t,i),e.elementType=Zc,e.lanes=o,e;case cg:return dl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ag:s=10;break e;case lg:s=9;break e;case Vf:s=11;break e;case $f:s=14;break e;case kn:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ft(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mr(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=ft(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function fc(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function dc(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y4(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bd(e,t,n,r,i,o,s,a,l){return e=new y4(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(o),e}function v4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ey(e){if(!e)return Bn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(He(n))return e1(e,n,t)}return t}function ty(e,t,n,r,i,o,s,a,l){return e=bd(n,r,!0,e,i,o,s,a,l),e.context=ey(null),n=e.current,r=De(),i=Nn(n),o=Zt(r,i),o.callback=t??null,zn(n,o,i),e.current.lanes=i,Yo(e,i,r),Ye(e,r),e}function hl(e,t,n,r){var i=t.current,o=De(),s=Nn(i);return n=ey(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(i,t,s),e!==null&&(Ct(e,i,s,o),Gs(e,i,s)),s}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kd(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function x4(){return null}var ny=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cd(e){this._internalRoot=e}pl.prototype.render=Cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));hl(e,t,null,null)};pl.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){hl(null,e,null,null)}),t[nn]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&zg(e)}};function Pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function w4(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Na(s);o.call(c)}}var s=ty(t,r,e,0,null,!1,!1,"",Cp);return e._reactRootContainer=s,e[nn]=s.current,Lo(e.nodeType===8?e.parentNode:e),br(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Na(l);a.call(c)}}var l=bd(e,0,!1,null,null,!1,!1,"",Cp);return e._reactRootContainer=l,e[nn]=l.current,Lo(e.nodeType===8?e.parentNode:e),br(function(){hl(t,l,n,r)}),l}function gl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Na(s);a.call(l)}}hl(t,s,e,i)}else s=w4(n,t,e,i,r);return Na(s)}Rg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zi(t.pendingLanes);n!==0&&(Wf(t,n|1),Ye(t,pe()),!(Y&6)&&(gi=pe()+500,Qn()))}break;case 13:br(function(){var r=rn(e,1);if(r!==null){var i=De();Ct(r,e,1,i)}}),kd(e,1)}};Hf=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=De();Ct(t,e,134217728,n)}kd(e,134217728)}};Og=function(e){if(e.tag===13){var t=Nn(e),n=rn(e,t);if(n!==null){var r=De();Ct(n,e,t,r)}kd(e,t)}};Mg=function(){return q};Ig=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};au=function(e,t,n){switch(t){case"input":if(eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sl(r);if(!i)throw Error(L(90));fg(r),eu(r,i)}}}break;case"textarea":hg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};wg=vd;Sg=br;var S4={usingClientEntryPoint:!1,Events:[Ko,Ur,sl,vg,xg,vd]},_i={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b4={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cg(e),e===null?null:e.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||x4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{nl=bs.inject(b4),Nt=bs}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S4;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(t))throw Error(L(200));return v4(e,t,null,n)};Je.createRoot=function(e,t){if(!Pd(e))throw Error(L(299));var n=!1,r="",i=ny;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bd(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,Lo(e.nodeType===8?e.parentNode:e),new Cd(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Cg(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return br(e)};Je.hydrate=function(e,t,n){if(!ml(t))throw Error(L(200));return gl(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Pd(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ny;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ty(t,null,e,1,n??null,i,!1,o,s),e[nn]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pl(t)};Je.render=function(e,t,n){if(!ml(t))throw Error(L(200));return gl(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!ml(e))throw Error(L(40));return e._reactRootContainer?(br(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};Je.unstable_batchedUpdates=vd;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return gl(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ry)}catch(e){console.error(e)}}ry(),rg.exports=Je;var k4=rg.exports,Pp=k4;Gc.createRoot=Pp.createRoot,Gc.hydrateRoot=Pp.hydrateRoot;const C4="modulepreload",P4=function(e){return"/"+e},Ep={},E4=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=P4(o),o in Ep)return;Ep[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const h=i[d];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":C4,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var jp="popstate";function j4(e={}){function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Vu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_o(i)}return A4(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T4(){return Math.random().toString(36).substring(2,10)}function Tp(e,t){return{usr:e.state,key:e.key,idx:t}}function Vu(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ti(t):t,state:n,key:t&&t.key||r||T4()}}function _o({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function A4(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a="POP",l=null,c=d();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function d(){return(s.state||{idx:null}).idx}function h(){a="POP";let k=d(),g=k==null?null:k-c;c=k,l&&l({action:a,location:x.location,delta:g})}function u(k,g){a="PUSH";let p=Vu(x.location,k,g);n&&n(p,k),c=d()+1;let m=Tp(p,c),w=x.createHref(p);try{s.pushState(m,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function y(k,g){a="REPLACE";let p=Vu(x.location,k,g);n&&n(p,k),c=d();let m=Tp(p,c),w=x.createHref(p);s.replaceState(m,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(k){return L4(k)}let x={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jp,h),l=k,()=>{i.removeEventListener(jp,h),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:u,replace:y,go(k){return s.go(k)}};return x}function L4(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ue(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:_o(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function iy(e,t,n="/"){return R4(e,t,n,!1)}function R4(e,t,n,r){let i=typeof t=="string"?Ti(t):t,o=sn(i.pathname||"/",n);if(o==null)return null;let s=oy(e);O4(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=U4(o);a=$4(s[l],c,r)}return a}function oy(e,t=[],n=[],r=""){let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let c=qt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ue(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),oy(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:_4(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sy(o.path))i(o,s,l)}),t}function sy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sy(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function O4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:V4(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var M4=/^:[\w-]+$/,I4=3,z4=2,D4=1,N4=10,F4=-2,Ap=e=>e==="*";function _4(e,t){let n=e.split("/"),r=n.length;return n.some(Ap)&&(r+=F4),t&&(r+=z4),n.filter(i=>!Ap(i)).reduce((i,o)=>i+(M4.test(o)?I4:o===""?D4:N4),r)}function V4(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $4(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=Fa({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=Fa({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:qt([o,h.pathname]),pathnameBase:G4(qt([o,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(o=qt([o,h.pathnameBase]))}return s}function Fa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B4(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:h},u)=>{if(d==="*"){let v=a[u]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[u];return h&&!y?c[d]=void 0:c[d]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function B4(e,t=!1,n=!0){jt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function U4(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function sn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W4(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ti(e):e;return{pathname:n?n.startsWith("/")?n:H4(n,t):t,search:K4(r),hash:X4(i)}}function H4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hc(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Y4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ay(e){let t=Y4(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ly(e,t,n,r=!1){let i;typeof e=="string"?i=Ti(e):(i={...e},ue(!i.pathname||!i.pathname.includes("?"),hc("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),hc("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),hc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),h-=1;i.pathname=u.join("/")}a=h>=0?t[h]:"/"}let l=W4(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var qt=e=>e.join("/").replace(/\/\/+/g,"/"),G4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,X4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Q4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var cy=["POST","PUT","PATCH","DELETE"];new Set(cy);var Z4=["GET",...cy];new Set(Z4);var Ai=b.createContext(null);Ai.displayName="DataRouter";var yl=b.createContext(null);yl.displayName="DataRouterState";b.createContext(!1);var uy=b.createContext({isTransitioning:!1});uy.displayName="ViewTransition";var q4=b.createContext(new Map);q4.displayName="Fetchers";var J4=b.createContext(null);J4.displayName="Await";var $t=b.createContext(null);$t.displayName="Navigation";var Qo=b.createContext(null);Qo.displayName="Location";var Bt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Ed=b.createContext(null);Ed.displayName="RouteError";function e5(e,{relative:t}={}){ue(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=b.useContext($t),{hash:i,pathname:o,search:s}=qo(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:qt([n,o])),r.createHref({pathname:a,search:s,hash:i})}function Zo(){return b.useContext(Qo)!=null}function Zn(){return ue(Zo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Qo).location}var fy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dy(e){b.useContext($t).static||b.useLayoutEffect(e)}function vl(){let{isDataRoute:e}=b.useContext(Bt);return e?p5():t5()}function t5(){ue(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(Ai),{basename:t,navigator:n}=b.useContext($t),{matches:r}=b.useContext(Bt),{pathname:i}=Zn(),o=JSON.stringify(ay(r)),s=b.useRef(!1);return dy(()=>{s.current=!0}),b.useCallback((l,c={})=>{if(jt(s.current,fy),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=ly(l,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:qt([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}b.createContext(null);function n5(){let{matches:e}=b.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function qo(e,{relative:t}={}){let{matches:n}=b.useContext(Bt),{pathname:r}=Zn(),i=JSON.stringify(ay(n));return b.useMemo(()=>ly(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function r5(e,t){return hy(e,t)}function hy(e,t,n,r){var g;ue(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=b.useContext($t),{matches:o}=b.useContext(Bt),s=o[o.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let p=d&&d.path||"";py(l,!d||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let h=Zn(),u;if(t){let p=typeof t=="string"?Ti(t):t;ue(c==="/"||((g=p.pathname)==null?void 0:g.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${p.pathname}" was given in the \`location\` prop.`),u=p}else u=h;let y=u.pathname||"/",v=y;if(c!=="/"){let p=c.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=iy(e,{pathname:v});jt(d||x!=null,`No routes matched location "${u.pathname}${u.search}${u.hash}" `),jt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${u.pathname}${u.search}${u.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=l5(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:qt([c,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?c:qt([c,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,r);return t&&k?b.createElement(Qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...u},navigationType:"POP"}},k):k}function i5(){let e=h5(),t=Q4(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:o},"ErrorBoundary")," or"," ",b.createElement("code",{style:o},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,s)}var o5=b.createElement(i5,null),s5=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?b.createElement(Bt.Provider,{value:this.props.routeContext},b.createElement(Ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function a5({routeContext:e,match:t,children:n}){let r=b.useContext(Ai);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Bt.Provider,{value:e},n)}function l5(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let l=i.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);ue(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let s=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let c=i[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:d,errors:h}=n,u=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!h||h[c.route.id]===void 0);if(c.route.lazy||u){s=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,c,d)=>{let h,u=!1,y=null,v=null;n&&(h=o&&c.route.id?o[c.route.id]:void 0,y=c.route.errorElement||o5,s&&(a<0&&d===0?(py("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,v=null):a===d&&(u=!0,v=c.route.hydrateFallbackElement||null)));let x=t.concat(i.slice(0,d+1)),k=()=>{let g;return h?g=y:u?g=v:c.route.Component?g=b.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=l,b.createElement(a5,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?b.createElement(s5,{location:n.location,revalidation:n.revalidation,component:y,error:h,children:k(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):k()},null)}function jd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c5(e){let t=b.useContext(Ai);return ue(t,jd(e)),t}function u5(e){let t=b.useContext(yl);return ue(t,jd(e)),t}function f5(e){let t=b.useContext(Bt);return ue(t,jd(e)),t}function Td(e){let t=f5(e),n=t.matches[t.matches.length-1];return ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function d5(){return Td("useRouteId")}function h5(){var r;let e=b.useContext(Ed),t=u5("useRouteError"),n=Td("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function p5(){let{router:e}=c5("useNavigate"),t=Td("useNavigate"),n=b.useRef(!1);return dy(()=>{n.current=!0}),b.useCallback(async(i,o={})=>{jt(n.current,fy),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Lp={};function py(e,t,n){!t&&!Lp[e]&&(Lp[e]=!0,jt(!1,n))}b.memo(m5);function m5({routes:e,future:t,state:n}){return hy(e,void 0,n,t)}function ea(e){ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function g5({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){ue(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=b.useMemo(()=>({basename:s,navigator:i,static:o,future:{}}),[s,i,o]);typeof n=="string"&&(n=Ti(n));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:u="default"}=n,y=b.useMemo(()=>{let v=sn(l,s);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:u},navigationType:r}},[s,l,c,d,h,u,r]);return jt(y!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:b.createElement($t.Provider,{value:a},b.createElement(Qo.Provider,{children:t,value:y}))}function y5({children:e,location:t}){return r5($u(e),t)}function $u(e,t=[]){let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,$u(r.props.children,o));return}ue(r.type===ea,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=$u(r.props.children,o)),n.push(s)}),n}var ta="get",na="application/x-www-form-urlencoded";function xl(e){return e!=null&&typeof e.tagName=="string"}function v5(e){return xl(e)&&e.tagName.toLowerCase()==="button"}function x5(e){return xl(e)&&e.tagName.toLowerCase()==="form"}function w5(e){return xl(e)&&e.tagName.toLowerCase()==="input"}function S5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b5(e,t){return e.button===0&&(!t||t==="_self")&&!S5(e)}function Bu(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function k5(e,t){let n=Bu(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}var ks=null;function C5(){if(ks===null)try{new FormData(document.createElement("form"),0),ks=!1}catch{ks=!0}return ks}var P5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pc(e){return e!=null&&!P5.has(e)?(jt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${na}"`),null):e}function E5(e,t){let n,r,i,o,s;if(x5(e)){let a=e.getAttribute("action");r=a?sn(a,t):null,n=e.getAttribute("method")||ta,i=pc(e.getAttribute("enctype"))||na,o=new FormData(e)}else if(v5(e)||w5(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?sn(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ta,i=pc(e.getAttribute("formenctype"))||pc(a.getAttribute("enctype"))||na,o=new FormData(a,e),!C5()){let{name:c,type:d,value:h}=e;if(d==="image"){let u=c?`${c}.`:"";o.append(`${u}x`,"0"),o.append(`${u}y`,"0")}else c&&o.append(c,h)}}else{if(xl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ta,r=null,i=na,s=e}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ad(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function j5(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&sn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function T5(e,t){if(e.id in t)return t[e.id];try{let n=await E4(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A5(e){return e!=null&&typeof e.page=="string"}function L5(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function R5(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let s=await T5(o,n);return s.links?s.links():[]}return[]}));return z5(r.flat(1).filter(L5).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Rp(e,t,n,r,i,o){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,c)=>s(l,c)||a(l,c)):o==="data"?t.filter((l,c)=>{var h;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):[]}function O5(e,t,{includeHydrateFallback:n}={}){return M5(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function M5(e){return[...new Set(e)]}function I5(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function z5(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!A5(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let a=JSON.stringify(I5(o));return n.has(a)||(n.add(a),i.push({key:a,link:o})),i},[])}function my(){let e=b.useContext(Ai);return Ad(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function D5(){let e=b.useContext(yl);return Ad(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ld=b.createContext(void 0);Ld.displayName="FrameworkContext";function gy(){let e=b.useContext(Ld);return Ad(e,"You must render this element inside a <HydratedRouter> element"),e}function N5(e,t){let n=b.useContext(Ld),[r,i]=b.useState(!1),[o,s]=b.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:h}=t,u=b.useRef(null);b.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=g=>{g.forEach(p=>{s(p.isIntersecting)})},k=new IntersectionObserver(x,{threshold:.5});return u.current&&k.observe(u.current),()=>{k.disconnect()}}},[e]),b.useEffect(()=>{if(r){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[r]);let y=()=>{i(!0)},v=()=>{i(!1),s(!1)};return n?e!=="intent"?[o,u,{}]:[o,u,{onFocus:Vi(a,y),onBlur:Vi(l,v),onMouseEnter:Vi(c,y),onMouseLeave:Vi(d,v),onTouchStart:Vi(h,y)}]:[!1,u,{}]}function Vi(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function F5({page:e,...t}){let{router:n}=my(),r=b.useMemo(()=>iy(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?b.createElement(V5,{page:e,matches:r,...t}):null}function _5(e){let{manifest:t,routeModules:n}=gy(),[r,i]=b.useState([]);return b.useEffect(()=>{let o=!1;return R5(e,t,n).then(s=>{o||i(s)}),()=>{o=!0}},[e,t,n]),r}function V5({page:e,matches:t,...n}){let r=Zn(),{manifest:i,routeModules:o}=gy(),{basename:s}=my(),{loaderData:a,matches:l}=D5(),c=b.useMemo(()=>Rp(e,t,l,i,r,"data"),[e,t,l,i,r]),d=b.useMemo(()=>Rp(e,t,l,i,r,"assets"),[e,t,l,i,r]),h=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,x=!1;if(t.forEach(g=>{var m;let p=i.routes[g.route.id];!p||!p.hasLoader||(!c.some(w=>w.route.id===g.route.id)&&g.route.id in a&&((m=o[g.route.id])!=null&&m.shouldRevalidate)||p.hasClientLoader?x=!0:v.add(g.route.id))}),v.size===0)return[];let k=j5(e,s,"data");return x&&v.size>0&&k.searchParams.set("_routes",t.filter(g=>v.has(g.route.id)).map(g=>g.route.id).join(",")),[k.pathname+k.search]},[s,a,r,i,c,t,e,o]),u=b.useMemo(()=>O5(d,i),[d,i]),y=_5(d);return b.createElement(b.Fragment,null,h.map(v=>b.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),u.map(v=>b.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),y.map(({key:v,link:x})=>b.createElement("link",{key:v,...x})))}function $5(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var yy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yy&&(window.__reactRouterVersion="7.7.1")}catch{}function B5({basename:e,children:t,window:n}){let r=b.useRef();r.current==null&&(r.current=j4({window:n,v5Compat:!0}));let i=r.current,[o,s]=b.useState({action:i.action,location:i.location}),a=b.useCallback(l=>{b.startTransition(()=>s(l))},[s]);return b.useLayoutEffect(()=>i.listen(a),[i,a]),b.createElement(g5,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xy=b.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:h,...u},y){let{basename:v}=b.useContext($t),x=typeof c=="string"&&vy.test(c),k,g=!1;if(typeof c=="string"&&x&&(k=c,yy))try{let O=new URL(window.location.href),I=c.startsWith("//")?new URL(O.protocol+c):new URL(c),ee=sn(I.pathname,v);I.origin===O.origin&&ee!=null?c=ee+I.search+I.hash:g=!0}catch{jt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=e5(c,{relative:i}),[m,w,C]=N5(r,u),j=Y5(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:h});function E(O){t&&t(O),O.defaultPrevented||j(O)}let T=b.createElement("a",{...u,...C,href:k||p,onClick:g||o?t:E,ref:$5(y,w),target:l,"data-discover":!x&&n==="render"?"true":void 0});return m&&!x?b.createElement(b.Fragment,null,T,b.createElement(F5,{page:p})):T});xy.displayName="Link";var U5=b.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:a,children:l,...c},d){let h=qo(s,{relative:c.relative}),u=Zn(),y=b.useContext(yl),{navigator:v,basename:x}=b.useContext($t),k=y!=null&&q5(h)&&a===!0,g=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,p=u.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(p=p.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase()),m&&x&&(m=sn(m,x)||m);const w=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=p===g||!i&&p.startsWith(g)&&p.charAt(w)==="/",j=m!=null&&(m===g||!i&&m.startsWith(g)&&m.charAt(g.length)==="/"),E={isActive:C,isPending:j,isTransitioning:k},T=C?t:void 0,O;typeof r=="function"?O=r(E):O=[r,C?"active":null,j?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(E):o;return b.createElement(xy,{...c,"aria-current":T,className:O,ref:d,style:I,to:s,viewTransition:a},typeof l=="function"?l(E):l)});U5.displayName="NavLink";var W5=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:s=ta,action:a,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:h,...u},y)=>{let v=Q5(),x=Z5(a,{relative:c}),k=s.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&vy.test(a),p=m=>{if(l&&l(m),m.defaultPrevented)return;m.preventDefault();let w=m.nativeEvent.submitter,C=(w==null?void 0:w.getAttribute("formmethod"))||s;v(w||m.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:i,state:o,relative:c,preventScrollReset:d,viewTransition:h})};return b.createElement("form",{ref:y,method:k,action:x,onSubmit:r?l:p,...u,"data-discover":!g&&e==="render"?"true":void 0})});W5.displayName="Form";function H5(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wy(e){let t=b.useContext(Ai);return ue(t,H5(e)),t}function Y5(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:s}={}){let a=vl(),l=Zn(),c=qo(e,{relative:o});return b.useCallback(d=>{if(b5(d,t)){d.preventDefault();let h=n!==void 0?n:_o(l)===_o(c);a(e,{replace:h,state:r,preventScrollReset:i,relative:o,viewTransition:s})}},[l,a,c,n,r,t,e,i,o,s])}function G5(e){jt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=b.useRef(Bu(e)),n=b.useRef(!1),r=Zn(),i=b.useMemo(()=>k5(r.search,n.current?null:t.current),[r.search]),o=vl(),s=b.useCallback((a,l)=>{const c=Bu(typeof a=="function"?a(new URLSearchParams(i)):a);n.current=!0,o("?"+c,l)},[o,i]);return[i,s]}var K5=0,X5=()=>`__${String(++K5)}__`;function Q5(){let{router:e}=wy("useSubmit"),{basename:t}=b.useContext($t),n=d5();return b.useCallback(async(r,i={})=>{let{action:o,method:s,encType:a,formData:l,body:c}=E5(r,t);if(i.navigate===!1){let d=i.fetcherKey||X5();await e.fetch(d,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function Z5(e,{relative:t}={}){let{basename:n}=b.useContext($t),r=b.useContext(Bt);ue(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...qo(e||".",{relative:t})},s=Zn();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(h=>h).forEach(h=>a.append("index",h));let d=a.toString();o.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:qt([n,o.pathname])),_o(o)}function q5(e,{relative:t}={}){let n=b.useContext(uy);ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=wy("useViewTransitionState"),i=qo(e,{relative:t});if(!n.isTransitioning)return!1;let o=sn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=sn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fa(i.pathname,s)!=null||Fa(i.pathname,o)!=null}var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ue.apply(this,arguments)};function _a(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var re="-ms-",ho="-moz-",Q="-webkit-",Sy="comm",wl="rule",Rd="decl",J5="@import",by="@keyframes",e3="@layer",ky=Math.abs,Od=String.fromCharCode,Uu=Object.assign;function t3(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function Cy(e){return e.trim()}function Ht(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function ra(e,t,n){return e.indexOf(t,n)}function ke(e,t){return e.charCodeAt(t)|0}function yi(e,t,n){return e.slice(t,n)}function Ot(e){return e.length}function Py(e){return e.length}function Ji(e,t){return t.push(e),e}function n3(e,t){return e.map(t).join("")}function Op(e,t){return e.filter(function(n){return!Ht(n,t)})}var Sl=1,vi=1,Ey=0,mt=0,ge=0,Li="";function bl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Sl,column:vi,length:s,return:"",siblings:a}}function wn(e,t){return Uu(bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Lr(e){for(;e.root;)e=wn(e.root,{children:[e]});Ji(e,e.siblings)}function r3(){return ge}function i3(){return ge=mt>0?ke(Li,--mt):0,vi--,ge===10&&(vi=1,Sl--),ge}function Pt(){return ge=mt<Ey?ke(Li,mt++):0,vi++,ge===10&&(vi=1,Sl++),ge}function gr(){return ke(Li,mt)}function ia(){return mt}function kl(e,t){return yi(Li,e,t)}function Wu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o3(e){return Sl=vi=1,Ey=Ot(Li=e),mt=0,[]}function s3(e){return Li="",e}function mc(e){return Cy(kl(mt-1,Hu(e===91?e+2:e===40?e+1:e)))}function a3(e){for(;(ge=gr())&&ge<33;)Pt();return Wu(e)>2||Wu(ge)>3?"":" "}function l3(e,t){for(;--t&&Pt()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return kl(e,ia()+(t<6&&gr()==32&&Pt()==32))}function Hu(e){for(;Pt();)switch(ge){case e:return mt;case 34:case 39:e!==34&&e!==39&&Hu(ge);break;case 40:e===41&&Hu(e);break;case 92:Pt();break}return mt}function c3(e,t){for(;Pt()&&e+ge!==47+10;)if(e+ge===42+42&&gr()===47)break;return"/*"+kl(t,mt-1)+"*"+Od(e===47?e:Pt())}function u3(e){for(;!Wu(gr());)Pt();return kl(e,mt)}function f3(e){return s3(oa("",null,null,null,[""],e=o3(e),0,[0],e))}function oa(e,t,n,r,i,o,s,a,l){for(var c=0,d=0,h=s,u=0,y=0,v=0,x=1,k=1,g=1,p=0,m="",w=i,C=o,j=r,E=m;k;)switch(v=p,p=Pt()){case 40:if(v!=108&&ke(E,h-1)==58){ra(E+=$(mc(p),"&","&\f"),"&\f",ky(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=mc(p);break;case 9:case 10:case 13:case 32:E+=a3(v);break;case 92:E+=l3(ia()-1,7);continue;case 47:switch(gr()){case 42:case 47:Ji(d3(c3(Pt(),ia()),t,n,l),l);break;default:E+="/"}break;case 123*x:a[c++]=Ot(E)*g;case 125*x:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+d:g==-1&&(E=$(E,/\f/g,"")),y>0&&Ot(E)-h&&Ji(y>32?Ip(E+";",r,n,h-1,l):Ip($(E," ","")+";",r,n,h-2,l),l);break;case 59:E+=";";default:if(Ji(j=Mp(E,t,n,c,d,i,a,m,w=[],C=[],h,o),o),p===123)if(d===0)oa(E,t,j,j,w,o,h,a,C);else switch(u===99&&ke(E,3)===110?100:u){case 100:case 108:case 109:case 115:oa(e,j,j,r&&Ji(Mp(e,j,j,0,0,i,a,m,i,w=[],h,C),C),i,C,h,a,r?w:C);break;default:oa(E,j,j,j,[""],C,0,a,C)}}c=d=y=0,x=g=1,m=E="",h=s;break;case 58:h=1+Ot(E),y=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&i3()==125)continue}switch(E+=Od(p),p*x){case 38:g=d>0?1:(E+="\f",-1);break;case 44:a[c++]=(Ot(E)-1)*g,g=1;break;case 64:gr()===45&&(E+=mc(Pt())),u=gr(),d=h=Ot(m=E+=u3(ia())),p++;break;case 45:v===45&&Ot(E)==2&&(x=0)}}return o}function Mp(e,t,n,r,i,o,s,a,l,c,d,h){for(var u=i-1,y=i===0?o:[""],v=Py(y),x=0,k=0,g=0;x<r;++x)for(var p=0,m=yi(e,u+1,u=ky(k=s[x])),w=e;p<v;++p)(w=Cy(k>0?y[p]+" "+m:$(m,/&\f/g,y[p])))&&(l[g++]=w);return bl(e,t,n,i===0?wl:a,l,c,d,h)}function d3(e,t,n,r){return bl(e,t,n,Sy,Od(r3()),yi(e,2,-2),0,r)}function Ip(e,t,n,r,i){return bl(e,t,n,Rd,yi(e,0,r),yi(e,r+1,-1),r,i)}function jy(e,t,n){switch(t3(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return ho+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+ho+e+re+e+e;case 5936:switch(ke(e,t+11)){case 114:return Q+e+re+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+re+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+re+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+re+e+e;case 6165:return Q+e+re+"flex-"+e+e;case 5187:return Q+e+$(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Q+e+re+"flex-item-"+$(e,/flex-|-self/g,"")+(Ht(e,/flex-|baseline/)?"":re+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return Q+e+re+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+re+$(e,"shrink","negative")+e;case 5292:return Q+e+re+$(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+$(e,"-grow","")+Q+e+re+$(e,"grow","positive")+e;case 4554:return Q+$(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Ht(e,/flex-|baseline/))return re+"grid-column-align"+yi(e,t)+e;break;case 2592:case 3360:return re+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ht(r.props,/grid-\w+-end/)})?~ra(e+(n=n[t].value),"span",0)?e:re+$(e,"-start","")+e+re+"grid-row-span:"+(~ra(n,"span",0)?Ht(n,/\d+/):+Ht(n,/\d+/)-+Ht(e,/\d+/))+";":re+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ht(r.props,/grid-\w+-start/)})?e:re+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ot(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+ho+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ra(e,"stretch",0)?jy($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return re+i+":"+o+c+(s?re+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(ke(e,t+6)===121)return $(e,":",":"+Q)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(ke(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+re+"$2box$3")+e;case 100:return $(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Va(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function h3(e,t,n,r){switch(e.type){case e3:if(e.children.length)break;case J5:case Rd:return e.return=e.return||e.value;case Sy:return"";case by:return e.return=e.value+"{"+Va(e.children,r)+"}";case wl:if(!Ot(e.value=e.props.join(",")))return""}return Ot(n=Va(e.children,r))?e.return=e.value+"{"+n+"}":""}function p3(e){var t=Py(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function m3(e){return function(t){t.root||(t=t.return)&&e(t)}}function g3(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rd:e.return=jy(e.value,e.length,n);return;case by:return Va([wn(e,{value:$(e.value,"@","@"+Q)})],r);case wl:if(e.length)return n3(n=e.props,function(i){switch(Ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lr(wn(e,{props:[$(i,/:(read-\w+)/,":"+ho+"$1")]})),Lr(wn(e,{props:[i]})),Uu(e,{props:Op(n,r)});break;case"::placeholder":Lr(wn(e,{props:[$(i,/:(plac\w+)/,":"+Q+"input-$1")]})),Lr(wn(e,{props:[$(i,/:(plac\w+)/,":"+ho+"$1")]})),Lr(wn(e,{props:[$(i,/:(plac\w+)/,re+"input-$1")]})),Lr(wn(e,{props:[i]})),Uu(e,{props:Op(n,r)});break}return""})}}var y3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ty="active",Ay="data-styled-version",Cl="6.1.18",Md=`/*!sc*/
`,$a=typeof window<"u"&&typeof document<"u",v3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Pl=Object.freeze([]),wi=Object.freeze({});function x3(e,t,n){return n===void 0&&(n=wi),e.theme!==n.theme&&e.theme||t||n.theme}var Ly=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),w3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S3=/(^-|-$)/g;function zp(e){return e.replace(w3,"-").replace(S3,"")}var b3=/(a)(d)/gi,Cs=52,Dp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yu(e){var t,n="";for(t=Math.abs(e);t>Cs;t=t/Cs|0)n=Dp(t%Cs)+n;return(Dp(t%Cs)+n).replace(b3,"$1-$2")}var gc,Ry=5381,Qr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oy=function(e){return Qr(Ry,e)};function k3(e){return Yu(Oy(e)>>>0)}function C3(e){return e.displayName||e.name||"Component"}function yc(e){return typeof e=="string"&&!0}var My=typeof Symbol=="function"&&Symbol.for,Iy=My?Symbol.for("react.memo"):60115,P3=My?Symbol.for("react.forward_ref"):60112,E3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T3=((gc={})[P3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gc[Iy]=zy,gc);function Np(e){return("type"in(t=e)&&t.type.$$typeof)===Iy?zy:"$$typeof"in e?T3[e.$$typeof]:E3;var t}var A3=Object.defineProperty,L3=Object.getOwnPropertyNames,Fp=Object.getOwnPropertySymbols,R3=Object.getOwnPropertyDescriptor,O3=Object.getPrototypeOf,_p=Object.prototype;function Dy(e,t,n){if(typeof t!="string"){if(_p){var r=O3(t);r&&r!==_p&&Dy(e,r,n)}var i=L3(t);Fp&&(i=i.concat(Fp(t)));for(var o=Np(e),s=Np(t),a=0;a<i.length;++a){var l=i[a];if(!(l in j3||n&&n[l]||s&&l in s||o&&l in o)){var c=R3(t,l);try{A3(e,l,c)}catch{}}}}return e}function Si(e){return typeof e=="function"}function Id(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vp(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gu(e,t,n){if(n===void 0&&(n=!1),!n&&!Vo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gu(e[r],t[r]);else if(Vo(t))for(var r in t)e[r]=Gu(e[r],t[r]);return e}function zd(e,t){Object.defineProperty(e,"toString",{value:t})}function Jo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M3=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Jo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Md);return n},e}(),sa=new Map,Ba=new Map,aa=1,Ps=function(e){if(sa.has(e))return sa.get(e);for(;Ba.has(aa);)aa++;var t=aa++;return sa.set(e,t),Ba.set(t,e),t},I3=function(e,t){aa=t+1,sa.set(e,t),Ba.set(t,e)},z3="style[".concat(xi,"][").concat(Ay,'="').concat(Cl,'"]'),D3=new RegExp("^".concat(xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),N3=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},F3=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Md),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(D3);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(I3(d,c),N3(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},$p=function(e){for(var t=document.querySelectorAll(z3),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(xi)!==Ty&&(F3(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ny=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(xi,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xi,Ty),r.setAttribute(Ay,Cl);var s=_3();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},V3=function(){function e(t){this.element=Ny(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Jo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$3=function(){function e(t){this.element=Ny(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),B3=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bp=$a,U3={isServer:!$a,useCSSOMInjection:!v3},Fy=function(){function e(t,n,r){t===void 0&&(t=wi),n===void 0&&(n={});var i=this;this.options=Ue(Ue({},U3),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$a&&Bp&&(Bp=!1,$p(this)),zd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(h){var u=function(g){return Ba.get(g)}(h);if(u===void 0)return"continue";var y=o.names.get(u),v=s.getGroup(h);if(y===void 0||!y.size||v.length===0)return"continue";var x="".concat(xi,".g").concat(h,'[id="').concat(u,'"]'),k="";y!==void 0&&y.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),l+="".concat(v).concat(x,'{content:"').concat(k,'"}').concat(Md)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return Ps(t)},e.prototype.rehydrate=function(){!this.server&&$a&&$p(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new B3(i):r?new V3(i):new $3(i)}(this.options),new M3(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ps(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ps(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ps(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),W3=/&/g,H3=/^\s*\/\/.*$/gm;function _y(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_y(n.children,t)),n})}function Y3(e){var t,n,r,i=e===void 0?wi:e,o=i.options,s=o===void 0?wi:o,a=i.plugins,l=a===void 0?Pl:a,c=function(u,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):u},d=l.slice();d.push(function(u){u.type===wl&&u.value.includes("&")&&(u.props[0]=u.props[0].replace(W3,n).replace(r,c))}),s.prefix&&d.push(g3),d.push(h3);var h=function(u,y,v,x){y===void 0&&(y=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=u.replace(H3,""),g=f3(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);s.namespace&&(g=_y(g,s.namespace));var p=[];return Va(g,p3(d.concat(m3(function(m){return p.push(m)})))),p};return h.hash=l.length?l.reduce(function(u,y){return y.name||Jo(15),Qr(u,y.name)},Ry).toString():"",h}var G3=new Fy,Ku=Y3(),Vy=Vt.createContext({shouldForwardProp:void 0,styleSheet:G3,stylis:Ku});Vy.Consumer;Vt.createContext(void 0);function Up(){return b.useContext(Vy)}var K3=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ku);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,zd(this,function(){throw Jo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ku),this.name+t.hash},e}(),X3=function(e){return e>="A"&&e<="Z"};function Wp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;X3(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $y=function(e){return e==null||e===!1||e===""},By=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!$y(o)&&(Array.isArray(o)&&o.isCss||Si(o)?r.push("".concat(Wp(i),":"),o,";"):Vo(o)?r.push.apply(r,_a(_a(["".concat(i," {")],By(o),!1),["}"],!1)):r.push("".concat(Wp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in y3||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yr(e,t,n,r){if($y(e))return[];if(Id(e))return[".".concat(e.styledComponentId)];if(Si(e)){if(!Si(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yr(i,t,n,r)}var o;return e instanceof K3?n?(e.inject(n,r),[e.getName(r)]):[e]:Vo(e)?By(e):Array.isArray(e)?Array.prototype.concat.apply(Pl,e.map(function(s){return yr(s,t,n,r)})):[e.toString()]}function Q3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Si(n)&&!Id(n))return!1}return!0}var Z3=Oy(Cl),q3=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q3(t),this.componentId=n,this.baseHash=Qr(Z3,n),this.baseStyle=r,Fy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fr(i,this.staticRulesId);else{var o=Vp(yr(this.rules,t,n,r)),s=Yu(Qr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=fr(i,s),this.staticRulesId=s}else{for(var l=Qr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var u=Vp(yr(h,t,n,r));l=Qr(l,u+d),c+=u}}if(c){var y=Yu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=fr(i,y)}}return i},e}(),Uy=Vt.createContext(void 0);Uy.Consumer;var vc={};function J3(e,t,n){var r=Id(e),i=e,o=!yc(e),s=t.attrs,a=s===void 0?Pl:s,l=t.componentId,c=l===void 0?function(w,C){var j=typeof w!="string"?"sc":zp(w);vc[j]=(vc[j]||0)+1;var E="".concat(j,"-").concat(k3(Cl+j+vc[j]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(w){return yc(w)?"styled.".concat(w):"Styled(".concat(C3(w),")")}(e):d,u=t.displayName&&t.componentId?"".concat(zp(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(w,C){return x(w,C)&&k(w,C)}}else v=x}var g=new q3(n,u,r?i.componentStyle:void 0);function p(w,C){return function(j,E,T){var O=j.attrs,I=j.componentStyle,ee=j.defaultProps,P=j.foldedComponentIds,N=j.styledComponentId,J=j.target,K=Vt.useContext(Uy),X=Up(),Se=j.shouldForwardProp||X.shouldForwardProp,R=x3(E,K,ee)||wi,z=function(gt,ve,nt){for(var Jn,yt=Ue(Ue({},ve),{className:void 0,theme:nt}),fn=0;fn<gt.length;fn+=1){var rt=Si(Jn=gt[fn])?Jn(yt):Jn;for(var Ut in rt)yt[Ut]=Ut==="className"?fr(yt[Ut],rt[Ut]):Ut==="style"?Ue(Ue({},yt[Ut]),rt[Ut]):rt[Ut]}return ve.className&&(yt.className=fr(yt.className,ve.className)),yt}(O,E,R),V=z.as||J,F={};for(var H in z)z[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&z.theme===R||(H==="forwardedAs"?F.as=z.forwardedAs:Se&&!Se(H,V)||(F[H]=z[H]));var At=function(gt,ve){var nt=Up(),Jn=gt.generateAndInjectStyles(ve,nt.styleSheet,nt.stylis);return Jn}(I,z),_e=fr(P,N);return At&&(_e+=" "+At),z.className&&(_e+=" "+z.className),F[yc(V)&&!Ly.has(V)?"class":"className"]=_e,T&&(F.ref=T),b.createElement(V,F)}(m,w,C)}p.displayName=h;var m=Vt.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=h,m.shouldForwardProp=v,m.foldedComponentIds=r?fr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=u,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var j=[],E=1;E<arguments.length;E++)j[E-1]=arguments[E];for(var T=0,O=j;T<O.length;T++)Gu(C,O[T],!0);return C}({},i.defaultProps,w):w}}),zd(m,function(){return".".concat(m.styledComponentId)}),o&&Dy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Hp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yp=function(e){return Object.assign(e,{isCss:!0})};function eS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Si(e)||Vo(e))return Yp(yr(Hp(Pl,_a([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yr(r):Yp(yr(Hp(r,t)))}function Xu(e,t,n){if(n===void 0&&(n=wi),!t)throw Jo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,eS.apply(void 0,_a([i],o,!1)))};return r.attrs=function(i){return Xu(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xu(e,t,Ue(Ue({},n),i))},r}var Wy=function(e){return Xu(J3,e)},S=Wy;Ly.forEach(function(e){S[e]=Wy(e)});const Dd=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),El=b.createContext({}),Nd=b.createContext(null),jl=typeof document<"u",Fd=jl?b.useLayoutEffect:b.useEffect,Hy=b.createContext({strict:!1}),_d=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),tS="framerAppearId",Yy="data-"+_d(tS);function nS(e,t,n,r){const{visualElement:i}=b.useContext(El),o=b.useContext(Hy),s=b.useContext(Nd),a=b.useContext(Dd).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;b.useInsertionEffect(()=>{c&&c.update(n,s)});const d=b.useRef(!!(n[Yy]&&!window.HandoffComplete));return Fd(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function Zr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function rS(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Zr(n)&&(n.current=r))},[t])}function $o(e){return typeof e=="string"||Array.isArray(e)}function Tl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Vd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$d=["initial",...Vd];function Al(e){return Tl(e.animate)||$d.some(t=>$o(e[t]))}function Gy(e){return!!(Al(e)||e.variants)}function iS(e,t){if(Al(e)){const{initial:n,animate:r}=e;return{initial:n===!1||$o(n)?n:void 0,animate:$o(r)?r:void 0}}return e.inherit!==!1?t:{}}function oS(e){const{initial:t,animate:n}=iS(e,b.useContext(El));return b.useMemo(()=>({initial:t,animate:n}),[Gp(t),Gp(n)])}function Gp(e){return Array.isArray(e)?e.join(" "):e}const Kp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bo={};for(const e in Kp)Bo[e]={isEnabled:t=>Kp[e].some(n=>!!t[n])};function sS(e){for(const t in e)Bo[t]={...Bo[t],...e[t]}}const Ky=b.createContext({}),Xy=b.createContext({}),aS=Symbol.for("motionComponentSymbol");function lS({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&sS(e);function o(a,l){let c;const d={...b.useContext(Dd),...a,layoutId:cS(a)},{isStatic:h}=d,u=oS(a),y=r(a,h);if(!h&&jl){u.visualElement=nS(i,y,d,t);const v=b.useContext(Xy),x=b.useContext(Hy).strict;u.visualElement&&(c=u.visualElement.loadFeatures(d,x,e,v))}return b.createElement(El.Provider,{value:u},c&&u.visualElement?b.createElement(c,{visualElement:u.visualElement,...d}):null,n(i,a,rS(y,u.visualElement,l),y,h,u.visualElement))}const s=b.forwardRef(o);return s[aS]=i,s}function cS({layoutId:e}){const t=b.useContext(Ky).id;return t&&e!==void 0?t+"-"+e:e}function uS(e){function t(r,i={}){return lS(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const fS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bd(e){return typeof e!="string"||e.includes("-")?!1:!!(fS.indexOf(e)>-1||/[A-Z]/.test(e))}const Ua={};function dS(e){Object.assign(Ua,e)}const es=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jr=new Set(es);function Qy(e,{layout:t,layoutId:n}){return jr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ua[e]||e==="opacity")}const Ge=e=>!!(e&&e.getVelocity),hS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pS=es.length;function mS(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<pS;s++){const a=es[s];if(e[a]!==void 0){const l=hS[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Zy=e=>t=>typeof t=="string"&&t.startsWith(e),qy=Zy("--"),Qu=Zy("var(--"),gS=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,yS=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Un=(e,t,n)=>Math.min(Math.max(n,e),t),Tr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},po={...Tr,transform:e=>Un(0,1,e)},Es={...Tr,default:1},mo=e=>Math.round(e*1e5)/1e5,Ll=/(-)?([\d]*\.?[\d])+/g,Jy=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,vS=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ts(e){return typeof e=="string"}const ns=e=>({test:t=>ts(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Sn=ns("deg"),_t=ns("%"),_=ns("px"),xS=ns("vh"),wS=ns("vw"),Xp={..._t,parse:e=>_t.parse(e)/100,transform:e=>_t.transform(e*100)},Qp={...Tr,transform:Math.round},ev={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,size:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,rotate:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:Es,scaleX:Es,scaleY:Es,scaleZ:Es,skew:Sn,skewX:Sn,skewY:Sn,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:po,originX:Xp,originY:Xp,originZ:_,zIndex:Qp,fillOpacity:po,strokeOpacity:po,numOctaves:Qp};function Ud(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,c=!1,d=!0;for(const h in t){const u=t[h];if(qy(h)){o[h]=u;continue}const y=ev[h],v=yS(u,y);if(jr.has(h)){if(l=!0,s[h]=v,!d)continue;u!==(y.default||0)&&(d=!1)}else h.startsWith("origin")?(c=!0,a[h]=v):i[h]=v}if(t.transform||(l||r?i.transform=mS(e.transform,n,d,r):i.transform&&(i.transform="none")),c){const{originX:h="50%",originY:u="50%",originZ:y=0}=a;i.transformOrigin=`${h} ${u} ${y}`}}const Wd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tv(e,t,n){for(const r in t)!Ge(t[r])&&!Qy(r,n)&&(e[r]=t[r])}function SS({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Wd();return Ud(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function bS(e,t,n){const r=e.style||{},i={};return tv(i,r,e),Object.assign(i,SS(e,t,n)),e.transformValues?e.transformValues(i):i}function kS(e,t,n){const r={},i=bS(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const CS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Wa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||CS.has(e)}let nv=e=>!Wa(e);function PS(e){e&&(nv=t=>t.startsWith("on")?!Wa(t):e(t))}try{PS(require("@emotion/is-prop-valid").default)}catch{}function ES(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(nv(i)||n===!0&&Wa(i)||!t&&!Wa(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Zp(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function jS(e,t,n){const r=Zp(t,e.x,e.width),i=Zp(n,e.y,e.height);return`${r} ${i}`}const TS={offset:"stroke-dashoffset",array:"stroke-dasharray"},AS={offset:"strokeDashoffset",array:"strokeDasharray"};function LS(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?TS:AS;e[o.offset]=_.transform(-r);const s=_.transform(t),a=_.transform(n);e[o.array]=`${s} ${a}`}function Hd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},d,h,u){if(Ud(e,c,d,u),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v,dimensions:x}=e;y.transform&&(x&&(v.transform=y.transform),delete y.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=jS(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&LS(y,s,a,l,!1)}const rv=()=>({...Wd(),attrs:{}}),Yd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function RS(e,t,n,r){const i=b.useMemo(()=>{const o=rv();return Hd(o,t,{enableHardwareAcceleration:!1},Yd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};tv(o,e.style,e),i.style={...o,...i.style}}return i}function OS(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Bd(n)?RS:kS)(r,o,s,n),d={...ES(r,typeof n=="string",e),...l,ref:i},{children:h}=r,u=b.useMemo(()=>Ge(h)?h.get():h,[h]);return b.createElement(n,{...d,children:u})}}function iv(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const ov=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sv(e,t,n,r){iv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ov.has(i)?i:_d(i),t.attrs[i])}function Gd(e,t){const{style:n}=e,r={};for(const i in n)(Ge(n[i])||t.style&&Ge(t.style[i])||Qy(i,e))&&(r[i]=n[i]);return r}function av(e,t){const n=Gd(e,t);for(const r in e)if(Ge(e[r])||Ge(t[r])){const i=es.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Kd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Rl(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ha=e=>Array.isArray(e),MS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),IS=e=>Ha(e)?e[e.length-1]||0:e;function la(e){const t=Ge(e)?e.get():e;return MS(t)?t.toValue():t}function zS({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:DS(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const lv=e=>(t,n)=>{const r=b.useContext(El),i=b.useContext(Nd),o=()=>zS(e,t,r,i);return n?o():Rl(o)};function DS(e,t,n,r){const i={},o=r(e,{});for(const u in o)i[u]=la(o[u]);let{initial:s,animate:a}=e;const l=Al(e),c=Gy(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?a:s;return h&&typeof h!="boolean"&&!Tl(h)&&(Array.isArray(h)?h:[h]).forEach(y=>{const v=Kd(e,y);if(!v)return;const{transitionEnd:x,transition:k,...g}=v;for(const p in g){let m=g[p];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[p]=m)}for(const p in x)i[p]=x[p]}),i}const he=e=>e;class qp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function NS(e){let t=new qp,n=new qp,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,c=!1,d=!1)=>{const h=d&&i,u=h?t:n;return c&&s.add(l),u.add(l)&&h&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const d=t.order[c];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const js=["prepare","read","update","preRender","render","postRender"],FS=40;function _S(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=js.reduce((h,u)=>(h[u]=NS(()=>n=!0),h),{}),s=h=>o[h].process(i),a=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,FS),1),i.timestamp=h,i.isProcessing=!0,js.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:js.reduce((h,u)=>{const y=o[u];return h[u]=(v,x=!1,k=!1)=>(n||l(),y.schedule(v,x,k)),h},{}),cancel:h=>js.forEach(u=>o[u].cancel(h)),state:i,steps:o}}const{schedule:Z,cancel:Tt,state:Ee,steps:xc}=_S(typeof requestAnimationFrame<"u"?requestAnimationFrame:he,!0),VS={useVisualState:lv({scrapeMotionValuesFromProps:av,createRenderState:rv,onMount:(e,t,{renderState:n,latestValues:r})=>{Z.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Z.render(()=>{Hd(n,r,{enableHardwareAcceleration:!1},Yd(t.tagName),e.transformTemplate),sv(t,n)})}})},$S={useVisualState:lv({scrapeMotionValuesFromProps:Gd,createRenderState:Wd})};function BS(e,{forwardMotionProps:t=!1},n,r){return{...Bd(e)?VS:$S,preloadedFeatures:n,useRender:OS(t),createVisualElement:r,Component:e}}function Qt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const cv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ol(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const US=e=>t=>cv(t)&&e(t,Ol(t));function Jt(e,t,n,r){return Qt(e,t,US(n),r)}const WS=(e,t)=>n=>t(e(n)),_n=(...e)=>e.reduce(WS);function uv(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Jp=uv("dragHorizontal"),em=uv("dragVertical");function fv(e){let t=!1;if(e==="y")t=em();else if(e==="x")t=Jp();else{const n=Jp(),r=em();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function dv(){const e=fv(!0);return e?(e(),!1):!0}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function tm(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||dv())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&Z.update(()=>a[r](o,s))};return Jt(e.current,n,i,{passive:!e.getProps()[r]})}class HS extends qn{mount(){this.unmount=_n(tm(this.node,!0),tm(this.node,!1))}unmount(){}}class YS extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_n(Qt(this.node.current,"focus",()=>this.onFocus()),Qt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const hv=(e,t)=>t?e===t?!0:hv(e,t.parentElement):!1;function wc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ol(n))}class GS extends qn{constructor(){super(...arguments),this.removeStartListeners=he,this.removeEndListeners=he,this.removeAccessibleListeners=he,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Jt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:h}=this.node.getProps();Z.update(()=>{!h&&!hv(this.node.current,a.target)?d&&d(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Jt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=_n(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||wc("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&Z.update(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=Qt(this.node.current,"keyup",s),wc("down",(a,l)=>{this.startPress(a,l)})},n=Qt(this.node.current,"keydown",t),r=()=>{this.isPressing&&wc("cancel",(o,s)=>this.cancelPress(o,s))},i=Qt(this.node.current,"blur",r);this.removeAccessibleListeners=_n(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Z.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!dv()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Z.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Jt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Qt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=_n(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Zu=new WeakMap,Sc=new WeakMap,KS=e=>{const t=Zu.get(e.target);t&&t(e)},XS=e=>{e.forEach(KS)};function QS({root:e,...t}){const n=e||document;Sc.has(n)||Sc.set(n,{});const r=Sc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(XS,{root:e,...t})),r[i]}function ZS(e,t,n){const r=QS(t);return Zu.set(e,n),r.observe(e),()=>{Zu.delete(e),r.unobserve(e)}}const qS={some:0,all:1};class JS extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:qS[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),u=c?d:h;u&&u(l)};return ZS(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(eb(t,n))&&this.startObserver()}unmount(){}}function eb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const tb={inView:{Feature:JS},tap:{Feature:GS},focus:{Feature:YS},hover:{Feature:HS}};function pv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function nb(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function rb(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ml(e,t,n){const r=e.getProps();return Kd(r,t,n!==void 0?n:r.custom,nb(e),rb(e))}let mv=he,Il=he;const Vn=e=>e*1e3,en=e=>e/1e3,ib={current:!1},gv=e=>Array.isArray(e)&&typeof e[0]=="number";function yv(e){return!!(!e||typeof e=="string"&&vv[e]||gv(e)||Array.isArray(e)&&e.every(yv))}const eo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,vv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:eo([0,.65,.55,1]),circOut:eo([.55,0,1,.45]),backIn:eo([.31,.01,.66,-.59]),backOut:eo([.33,1.53,.69,.99])};function xv(e){if(e)return gv(e)?eo(e):Array.isArray(e)?e.map(xv):vv[e]}function ob(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=xv(a);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function sb(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const wv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ab=1e-7,lb=12;function cb(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=wv(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>ab&&++a<lb);return s}function rs(e,t,n,r){if(e===t&&n===r)return he;const i=o=>cb(o,0,1,e,n);return o=>o===0||o===1?o:wv(i(o),t,r)}const ub=rs(.42,0,1,1),fb=rs(0,0,.58,1),Sv=rs(.42,0,.58,1),db=e=>Array.isArray(e)&&typeof e[0]!="number",bv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,kv=e=>t=>1-e(1-t),Xd=e=>1-Math.sin(Math.acos(e)),Cv=kv(Xd),hb=bv(Xd),Pv=rs(.33,1.53,.69,.99),Qd=kv(Pv),pb=bv(Qd),mb=e=>(e*=2)<1?.5*Qd(e):.5*(2-Math.pow(2,-10*(e-1))),gb={linear:he,easeIn:ub,easeInOut:Sv,easeOut:fb,circIn:Xd,circInOut:hb,circOut:Cv,backIn:Qd,backInOut:pb,backOut:Pv,anticipate:mb},nm=e=>{if(Array.isArray(e)){Il(e.length===4);const[t,n,r,i]=e;return rs(t,n,r,i)}else if(typeof e=="string")return gb[e];return e},Zd=(e,t)=>n=>!!(ts(n)&&vS.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ev=(e,t,n)=>r=>{if(!ts(r))return r;const[i,o,s,a]=r.match(Ll);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},yb=e=>Un(0,255,e),bc={...Tr,transform:e=>Math.round(yb(e))},dr={test:Zd("rgb","red"),parse:Ev("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+bc.transform(e)+", "+bc.transform(t)+", "+bc.transform(n)+", "+mo(po.transform(r))+")"};function vb(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const qu={test:Zd("#"),parse:vb,transform:dr.transform},qr={test:Zd("hsl","hue"),parse:Ev("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+_t.transform(mo(t))+", "+_t.transform(mo(n))+", "+mo(po.transform(r))+")"},Ie={test:e=>dr.test(e)||qu.test(e)||qr.test(e),parse:e=>dr.test(e)?dr.parse(e):qr.test(e)?qr.parse(e):qu.parse(e),transform:e=>ts(e)?e:e.hasOwnProperty("red")?dr.transform(e):qr.transform(e)},le=(e,t,n)=>-n*e+n*t+e;function kc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xb({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=kc(l,a,e+1/3),o=kc(l,a,e),s=kc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Cc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},wb=[qu,dr,qr],Sb=e=>wb.find(t=>t.test(e));function rm(e){const t=Sb(e);let n=t.parse(e);return t===qr&&(n=xb(n)),n}const jv=(e,t)=>{const n=rm(e),r=rm(t),i={...n};return o=>(i.red=Cc(n.red,r.red,o),i.green=Cc(n.green,r.green,o),i.blue=Cc(n.blue,r.blue,o),i.alpha=le(n.alpha,r.alpha,o),dr.transform(i))};function bb(e){var t,n;return isNaN(e)&&ts(e)&&(((t=e.match(Ll))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Jy))===null||n===void 0?void 0:n.length)||0)>0}const Tv={regex:gS,countKey:"Vars",token:"${v}",parse:he},Av={regex:Jy,countKey:"Colors",token:"${c}",parse:Ie.parse},Lv={regex:Ll,countKey:"Numbers",token:"${n}",parse:Tr.parse};function Pc(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Ya(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Pc(n,Tv),Pc(n,Av),Pc(n,Lv),n}function Rv(e){return Ya(e).values}function Ov(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ya(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(Tv.token,s[l]):l<r+n?a=a.replace(Av.token,Ie.transform(s[l])):a=a.replace(Lv.token,mo(s[l]));return a}}const kb=e=>typeof e=="number"?0:e;function Cb(e){const t=Rv(e);return Ov(e)(t.map(kb))}const Wn={test:bb,parse:Rv,createTransformer:Ov,getAnimatableNone:Cb},Mv=(e,t)=>n=>`${n>0?t:e}`;function Iv(e,t){return typeof e=="number"?n=>le(e,t,n):Ie.test(e)?jv(e,t):e.startsWith("var(")?Mv(e,t):Dv(e,t)}const zv=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>Iv(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},Pb=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Iv(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},Dv=(e,t)=>{const n=Wn.createTransformer(t),r=Ya(e),i=Ya(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?_n(zv(r.values,i.values),n):Mv(e,t)},bi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},im=(e,t)=>n=>le(e,t,n);function Eb(e){return typeof e=="number"?im:typeof e=="string"?Ie.test(e)?jv:Dv:Array.isArray(e)?zv:typeof e=="object"?Pb:im}function jb(e,t,n){const r=[],i=n||Eb(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||he:t;a=_n(l,a)}r.push(a)}return r}function zl(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Il(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=jb(t,r,i),a=s.length,l=c=>{let d=0;if(a>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const h=bi(e[d],e[d+1],c);return s[d](h)};return n?c=>l(Un(e[0],e[o-1],c)):l}function Tb(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=bi(0,t,r);e.push(le(n,1,i))}}function Nv(e){const t=[0];return Tb(t,e.length-1),t}function Ab(e,t){return e.map(n=>n*t)}function Lb(e,t){return e.map(()=>t||Sv).splice(0,e.length-1)}function Ga({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=db(r)?r.map(nm):nm(r),o={done:!1,value:t[0]},s=Ab(n&&n.length===t.length?n:Nv(t),e),a=zl(s,t,{ease:Array.isArray(i)?i:Lb(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function qd(e,t){return t?e*(1e3/t):0}const Rb=5;function Fv(e,t,n){const r=Math.max(t-Rb,0);return qd(n-e(r),t-r)}const Ec=.001,Ob=.01,om=10,Mb=.05,Ib=1;function zb({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;mv(e<=Vn(om));let s=1-t;s=Un(Mb,Ib,s),e=Un(Ob,om,en(e)),s<1?(i=c=>{const d=c*s,h=d*e,u=d-n,y=Ju(c,s),v=Math.exp(-h);return Ec-u/y*v},o=c=>{const h=c*s*e,u=h*n+n,y=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-h),x=Ju(Math.pow(c,2),s);return(-i(c)+Ec>0?-1:1)*((u-y)*v)/x}):(i=c=>{const d=Math.exp(-c*e),h=(c-n)*e+1;return-Ec+d*h},o=c=>{const d=Math.exp(-c*e),h=(n-c)*(e*e);return d*h});const a=5/e,l=Nb(i,o,a);if(e=Vn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const Db=12;function Nb(e,t,n){let r=n;for(let i=1;i<Db;i++)r=r-e(r)/t(r);return r}function Ju(e,t){return e*Math.sqrt(1-t*t)}const Fb=["duration","bounce"],_b=["stiffness","damping","mass"];function sm(e,t){return t.some(n=>e[n]!==void 0)}function Vb(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!sm(e,_b)&&sm(e,Fb)){const n=zb(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function _v({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:d,velocity:h,isResolvedFromDuration:u}=Vb({...r,velocity:-en(r.velocity||0)}),y=h||0,v=l/(2*Math.sqrt(a*c)),x=o-i,k=en(Math.sqrt(a/c)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let p;if(v<1){const m=Ju(k,v);p=w=>{const C=Math.exp(-v*k*w);return o-C*((y+v*k*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(v===1)p=m=>o-Math.exp(-k*m)*(x+(y+k*x)*m);else{const m=k*Math.sqrt(v*v-1);p=w=>{const C=Math.exp(-v*k*w),j=Math.min(m*w,300);return o-C*((y+v*k*x)*Math.sinh(j)+m*x*Math.cosh(j))/m}}return{calculatedDuration:u&&d||null,next:m=>{const w=p(m);if(u)s.done=m>=d;else{let C=y;m!==0&&(v<1?C=Fv(p,m,w):C=0);const j=Math.abs(C)<=n,E=Math.abs(o-w)<=t;s.done=j&&E}return s.value=s.done?o:w,s}}}function am({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const h=e[0],u={done:!1,value:h},y=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const k=h+x,g=s===void 0?k:s(k);g!==k&&(x=g-h);const p=T=>-x*Math.exp(-T/r),m=T=>g+p(T),w=T=>{const O=p(T),I=m(T);u.done=Math.abs(O)<=c,u.value=u.done?g:I};let C,j;const E=T=>{y(u.value)&&(C=T,j=_v({keyframes:[u.value,v(u.value)],velocity:Fv(m,T,u.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return E(0),{calculatedDuration:null,next:T=>{let O=!1;return!j&&C===void 0&&(O=!0,w(T),E(T)),C!==void 0&&T>C?j.next(T-C):(!O&&w(T),u)}}}const $b=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Z.update(t,!0),stop:()=>Tt(t),now:()=>Ee.isProcessing?Ee.timestamp:performance.now()}},lm=2e4;function cm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<lm;)t+=n,r=e.next(t);return t>=lm?1/0:t}const Bb={decay:am,inertia:am,tween:Ga,keyframes:Ga,spring:_v};function Ka({autoplay:e=!0,delay:t=0,driver:n=$b,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:d,onUpdate:h,...u}){let y=1,v=!1,x,k;const g=()=>{k=new Promise(F=>{x=F})};g();let p;const m=Bb[i]||Ga;let w;m!==Ga&&typeof r[0]!="number"&&(w=zl([0,100],r,{clamp:!1}),r=[0,100]);const C=m({...u,keyframes:r});let j;a==="mirror"&&(j=m({...u,keyframes:[...r].reverse(),velocity:-(u.velocity||0)}));let E="idle",T=null,O=null,I=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=cm(C));const{calculatedDuration:ee}=C;let P=1/0,N=1/0;ee!==null&&(P=ee+s,N=P*(o+1)-s);let J=0;const K=F=>{if(O===null)return;y>0&&(O=Math.min(O,F)),y<0&&(O=Math.min(F-N/y,O)),T!==null?J=T:J=Math.round(F-O)*y;const H=J-t*(y>=0?1:-1),At=y>=0?H<0:H>N;J=Math.max(H,0),E==="finished"&&T===null&&(J=N);let _e=J,gt=C;if(o){const yt=Math.min(J,N)/P;let fn=Math.floor(yt),rt=yt%1;!rt&&yt>=1&&(rt=1),rt===1&&fn--,fn=Math.min(fn,o+1),!!(fn%2)&&(a==="reverse"?(rt=1-rt,s&&(rt-=s/P)):a==="mirror"&&(gt=j)),_e=Un(0,1,rt)*P}const ve=At?{done:!1,value:r[0]}:gt.next(_e);w&&(ve.value=w(ve.value));let{done:nt}=ve;!At&&ee!==null&&(nt=y>=0?J>=N:J<=0);const Jn=T===null&&(E==="finished"||E==="running"&&nt);return h&&h(ve.value),Jn&&R(),ve},X=()=>{p&&p.stop(),p=void 0},Se=()=>{E="idle",X(),x(),g(),O=I=null},R=()=>{E="finished",d&&d(),X(),x()},z=()=>{if(v)return;p||(p=n(K));const F=p.now();l&&l(),T!==null?O=F-T:(!O||E==="finished")&&(O=F),E==="finished"&&g(),I=O,T=null,E="running",p.start()};e&&z();const V={then(F,H){return k.then(F,H)},get time(){return en(J)},set time(F){F=Vn(F),J=F,T!==null||!p||y===0?T=F:O=p.now()-F/y},get duration(){const F=C.calculatedDuration===null?cm(C):C.calculatedDuration;return en(F)},get speed(){return y},set speed(F){F===y||!p||(y=F,V.time=en(J))},get state(){return E},play:z,pause:()=>{E="paused",T=J},stop:()=>{v=!0,E!=="idle"&&(E="idle",c&&c(),Se())},cancel:()=>{I!==null&&K(I),Se()},complete:()=>{E="finished"},sample:F=>(O=0,K(F))};return V}function Ub(e){let t;return()=>(t===void 0&&(t=e()),t)}const Wb=Ub(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Hb=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ts=10,Yb=2e4,Gb=(e,t)=>t.type==="spring"||e==="backgroundColor"||!yv(t.ease);function Kb(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Wb()&&Hb.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const d=()=>{l=new Promise(m=>{a=m})};d();let{keyframes:h,duration:u=300,ease:y,times:v}=i;if(Gb(t,i)){const m=Ka({...i,repeat:0,delay:0});let w={done:!1,value:h[0]};const C=[];let j=0;for(;!w.done&&j<Yb;)w=m.sample(j),C.push(w.value),j+=Ts;v=void 0,h=C,u=j-Ts,y="linear"}const x=ob(e.owner.current,t,h,{...i,duration:u,ease:y,times:v}),k=()=>{c=!1,x.cancel()},g=()=>{c=!0,Z.update(k),a(),d()};return x.onfinish=()=>{c||(e.set(sb(h,i)),r&&r(),g())},{then(m,w){return l.then(m,w)},attachTimeline(m){return x.timeline=m,x.onfinish=null,he},get time(){return en(x.currentTime||0)},set time(m){x.currentTime=Vn(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return en(u)},play:()=>{s||(x.play(),Tt(k))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const w=Ka({...i,autoplay:!1});e.setWithVelocity(w.sample(m-Ts).value,w.sample(m).value,Ts)}g()},complete:()=>{c||x.finish()},cancel:g}}function Xb({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:he,pause:he,stop:he,then:o=>(o(),Promise.resolve()),cancel:he,complete:he});return t?Ka({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Qb={type:"spring",stiffness:500,damping:25,restSpeed:10},Zb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),qb={type:"keyframes",duration:.8},Jb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ek=(e,{keyframes:t})=>t.length>2?qb:jr.has(e)?e.startsWith("scale")?Zb(t[1]):Qb:Jb,ef=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Wn.test(t)||t==="0")&&!t.startsWith("url(")),tk=new Set(["brightness","contrast","saturate","opacity"]);function nk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ll)||[];if(!r)return e;const i=n.replace(r,"");let o=tk.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const rk=/([a-z-]*)\(.*?\)/g,tf={...Wn,getAnimatableNone:e=>{const t=e.match(rk);return t?t.map(nk).join(" "):e}},ik={...ev,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:tf,WebkitFilter:tf},Jd=e=>ik[e];function Vv(e,t){let n=Jd(e);return n!==tf&&(n=Wn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const $v=e=>/^0[^.\s]+$/.test(e);function ok(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||$v(e)}function sk(e,t,n,r){const i=ef(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?s:o[c-1]),ok(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const d=l[c];o[d]=Vv(t,a)}return o}function ak({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}function eh(e,t){return e[t]||e.default||e}const lk={skipAnimations:!1},th=(e,t,n,r={})=>i=>{const o=eh(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Vn(s);const l=sk(t,e,n,o),c=l[0],d=l[l.length-1],h=ef(e,c),u=ef(e,d);let y={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(ak(o)||(y={...y,...ek(e,y)}),y.duration&&(y.duration=Vn(y.duration)),y.repeatDelay&&(y.repeatDelay=Vn(y.repeatDelay)),!h||!u||ib.current||o.type===!1||lk.skipAnimations)return Xb(y);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Kb(t,e,y);if(v)return v}return Ka(y)};function Xa(e){return!!(Ge(e)&&e.add)}const Bv=e=>/^\-?\d*\.?\d+$/.test(e);function nh(e,t){e.indexOf(t)===-1&&e.push(t)}function rh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ih{constructor(){this.subscriptions=[]}add(t){return nh(this.subscriptions,t),()=>rh(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ck=e=>!isNaN(parseFloat(e)),go={current:void 0};class uk{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Ee;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,Z.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Z.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=ck(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ih);const r=this.events[t].add(n);return t==="change"?()=>{r(),Z.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return go.current&&go.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bt(e,t){return new uk(e,t)}const Uv=e=>t=>t.test(e),fk={test:e=>e==="auto",parse:e=>e},Wv=[Tr,_,_t,Sn,wS,xS,fk],$i=e=>Wv.find(Uv(e)),dk=[...Wv,Ie,Wn],hk=e=>dk.find(Uv(e));function pk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,bt(n))}function mk(e,t){const n=Ml(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=IS(o[s]);pk(e,s,a)}}function gk(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],c=t[l];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Bv(d)||$v(d))?d=parseFloat(d):!hk(d)&&Wn.test(c)&&(d=Vv(l,c)),e.addValue(l,bt(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function yk(e,t){return t?(t[e]||t.default||t).from:void 0}function vk(e,t,n){const r={};for(const i in e){const o=yk(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function xk({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function wk(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Hv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const h in a){const u=e.getValue(h),y=a[h];if(!u||y===void 0||d&&xk(d,h))continue;const v={delay:n,elapsed:0,...eh(o||{},h)};if(window.HandoffAppearAnimations){const g=e.getProps()[Yy];if(g){const p=window.HandoffAppearAnimations(g,h,u,Z);p!==null&&(v.elapsed=p,v.isHandoff=!0)}}let x=!v.isHandoff&&!wk(u,y);if(v.type==="spring"&&(u.getVelocity()||v.velocity)&&(x=!1),u.animation&&(x=!1),x)continue;u.start(th(h,u,y,e.shouldReduceMotion&&jr.has(h)?{type:!1}:v));const k=u.animation;Xa(l)&&(l.add(h),k.then(()=>l.remove(h))),c.push(k)}return s&&Promise.all(c).then(()=>{s&&mk(e,s)}),c}function nf(e,t,n={}){const r=Ml(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Hv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:h}=i;return Sk(e,t,c+l,d,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>c())}else return Promise.all([o(),s(n.delay)])}function Sk(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(bk).forEach((c,d)=>{c.notify("AnimationStart",t),s.push(nf(c,t,{...o,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function bk(e,t){return e.sortNodePosition(t)}function kk(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>nf(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=nf(e,t,n);else{const i=typeof t=="function"?Ml(e,t,n.custom):t;r=Promise.all(Hv(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Ck=[...Vd].reverse(),Pk=Vd.length;function Ek(e){return t=>Promise.all(t.map(({animation:n,options:r})=>kk(e,n,r)))}function jk(e){let t=Ek(e);const n=Ak();let r=!0;const i=(l,c)=>{const d=Ml(e,c);if(d){const{transition:h,transitionEnd:u,...y}=d;l={...l,...y,...u}}return l};function o(l){t=l(e)}function s(l,c){const d=e.getProps(),h=e.getVariantContext(!0)||{},u=[],y=new Set;let v={},x=1/0;for(let g=0;g<Pk;g++){const p=Ck[g],m=n[p],w=d[p]!==void 0?d[p]:h[p],C=$o(w),j=p===c?m.isActive:null;j===!1&&(x=g);let E=w===h[p]&&w!==d[p]&&C;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),m.protectedKeys={...v},!m.isActive&&j===null||!w&&!m.prevProp||Tl(w)||typeof w=="boolean")continue;let O=Tk(m.prevProp,w)||p===c&&m.isActive&&!E&&C||g>x&&C,I=!1;const ee=Array.isArray(w)?w:[w];let P=ee.reduce(i,{});j===!1&&(P={});const{prevResolvedValues:N={}}=m,J={...N,...P},K=X=>{O=!0,y.has(X)&&(I=!0,y.delete(X)),m.needsAnimating[X]=!0};for(const X in J){const Se=P[X],R=N[X];if(v.hasOwnProperty(X))continue;let z=!1;Ha(Se)&&Ha(R)?z=!pv(Se,R):z=Se!==R,z?Se!==void 0?K(X):y.add(X):Se!==void 0&&y.has(X)?K(X):m.protectedKeys[X]=!0}m.prevProp=w,m.prevResolvedValues=P,m.isActive&&(v={...v,...P}),r&&e.blockInitialAnimation&&(O=!1),O&&(!E||I)&&u.push(...ee.map(X=>({animation:X,options:{type:p,...l}})))}if(y.size){const g={};y.forEach(p=>{const m=e.getBaseTarget(p);m!==void 0&&(g[p]=m)}),u.push({animation:g})}let k=!!u.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(u):Promise.resolve()}function a(l,c,d){var h;if(n[l].isActive===c)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(y=>{var v;return(v=y.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const u=s(d,l);for(const y in n)n[y].protectedKeys={};return u}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function Tk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!pv(t,e):!1}function er(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ak(){return{animate:er(!0),whileInView:er(),whileHover:er(),whileTap:er(),whileDrag:er(),whileFocus:er(),exit:er()}}class Lk extends qn{constructor(t){super(t),t.animationState||(t.animationState=jk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Tl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Rk=0;class Ok extends qn{constructor(){super(...arguments),this.id=Rk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Mk={animation:{Feature:Lk},exit:{Feature:Ok}},um=(e,t)=>Math.abs(e-t);function Ik(e,t){const n=um(e.x,t.x),r=um(e.y,t.y);return Math.sqrt(n**2+r**2)}class Yv{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Tc(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,y=Ik(h.offset,{x:0,y:0})>=3;if(!u&&!y)return;const{point:v}=h,{timestamp:x}=Ee;this.history.push({...v,timestamp:x});const{onStart:k,onMove:g}=this.handlers;u||(k&&k(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,h)},this.handlePointerMove=(h,u)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=jc(u,this.transformPagePoint),Z.update(this.updatePoint,!0)},this.handlePointerUp=(h,u)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Tc(h.type==="pointercancel"?this.lastMoveEventInfo:jc(u,this.transformPagePoint),this.history);this.startEvent&&y&&y(h,k),v&&v(h,k)},!cv(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ol(t),a=jc(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ee;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Tc(a,this.history)),this.removeListeners=_n(Jt(this.contextWindow,"pointermove",this.handlePointerMove),Jt(this.contextWindow,"pointerup",this.handlePointerUp),Jt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Tt(this.updatePoint)}}function jc(e,t){return t?{point:t(e.point)}:e}function fm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Tc({point:e},t){return{point:e,delta:fm(e,Gv(t)),offset:fm(e,zk(t)),velocity:Dk(t,.1)}}function zk(e){return e[0]}function Gv(e){return e[e.length-1]}function Dk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Gv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Vn(t)));)n--;if(!r)return{x:0,y:0};const o=en(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function qe(e){return e.max-e.min}function rf(e,t=0,n=.01){return Math.abs(e-t)<=n}function dm(e,t,n,r=.5){e.origin=r,e.originPoint=le(t.min,t.max,e.origin),e.scale=qe(n)/qe(t),(rf(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=le(n.min,n.max,e.origin)-e.originPoint,(rf(e.translate)||isNaN(e.translate))&&(e.translate=0)}function yo(e,t,n,r){dm(e.x,t.x,n.x,r?r.originX:void 0),dm(e.y,t.y,n.y,r?r.originY:void 0)}function hm(e,t,n){e.min=n.min+t.min,e.max=e.min+qe(t)}function Nk(e,t,n){hm(e.x,t.x,n.x),hm(e.y,t.y,n.y)}function pm(e,t,n){e.min=t.min-n.min,e.max=e.min+qe(t)}function vo(e,t,n){pm(e.x,t.x,n.x),pm(e.y,t.y,n.y)}function Fk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?le(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?le(n,e,r.max):Math.min(e,n)),e}function mm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function _k(e,{top:t,left:n,bottom:r,right:i}){return{x:mm(e.x,n,i),y:mm(e.y,t,r)}}function gm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Vk(e,t){return{x:gm(e.x,t.x),y:gm(e.y,t.y)}}function $k(e,t){let n=.5;const r=qe(e),i=qe(t);return i>r?n=bi(t.min,t.max-r,e.min):r>i&&(n=bi(e.min,e.max-i,t.min)),Un(0,1,n)}function Bk(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const of=.35;function Uk(e=of){return e===!1?e=0:e===!0&&(e=of),{x:ym(e,"left","right"),y:ym(e,"top","bottom")}}function ym(e,t,n){return{min:vm(e,t),max:vm(e,n)}}function vm(e,t){return typeof e=="number"?e:e[t]||0}const xm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jr=()=>({x:xm(),y:xm()}),wm=()=>({min:0,max:0}),me=()=>({x:wm(),y:wm()});function lt(e){return[e("x"),e("y")]}function Kv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Wk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Hk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ac(e){return e===void 0||e===1}function sf({scale:e,scaleX:t,scaleY:n}){return!Ac(e)||!Ac(t)||!Ac(n)}function sr(e){return sf(e)||Xv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Xv(e){return Sm(e.x)||Sm(e.y)}function Sm(e){return e&&e!=="0%"}function Qa(e,t,n){const r=e-n,i=t*r;return n+i}function bm(e,t,n,r,i){return i!==void 0&&(e=Qa(e,i,r)),Qa(e,n,r)+t}function af(e,t=0,n=1,r,i){e.min=bm(e.min,t,n,r,i),e.max=bm(e.max,t,n,r,i)}function Qv(e,{x:t,y:n}){af(e.x,t.translate,t.scale,t.originPoint),af(e.y,n.translate,n.scale,n.originPoint)}function Yk(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ei(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Qv(e,s)),r&&sr(o.latestValues)&&ei(e,o.latestValues))}t.x=km(t.x),t.y=km(t.y)}function km(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Pn(e,t){e.min=e.min+t,e.max=e.max+t}function Cm(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=le(e.min,e.max,o);af(e,t[n],t[r],s,t.scale)}const Gk=["x","scaleX","originX"],Kk=["y","scaleY","originY"];function ei(e,t){Cm(e.x,t,Gk),Cm(e.y,t,Kk)}function Zv(e,t){return Kv(Hk(e.getBoundingClientRect(),t))}function Xk(e,t,n){const r=Zv(e,n),{scroll:i}=t;return i&&(Pn(r.x,i.offset.x),Pn(r.y,i.offset.y)),r}const qv=({current:e})=>e?e.ownerDocument.defaultView:null,Qk=new WeakMap;class Zk{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ol(d,"page").point)},o=(d,h)=>{const{drag:u,dragPropagation:y,onDragStart:v}=this.getProps();if(u&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fv(u),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(k=>{let g=this.getAxisMotionValue(k).get()||0;if(_t.test(g)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[k];m&&(g=qe(m)*(parseFloat(g)/100))}}this.originPoint[k]=g}),v&&Z.update(()=>v(d,h),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(d,h)=>{const{dragPropagation:u,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:k}=h;if(y&&this.currentDirection===null){this.currentDirection=qk(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,k),this.updateAxis("y",h.point,k),this.visualElement.render(),x&&x(d,h)},a=(d,h)=>this.stop(d,h),l=()=>lt(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Yv(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:qv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&Z.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!As(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Fk(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Zr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=_k(i.layoutBox,n):this.constraints=!1,this.elastic=Uk(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&lt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Bk(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Zr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Xk(r,i.root,this.visualElement.getTransformPagePoint());let s=Vk(i.layout.layoutBox,o);if(n){const a=n(Wk(s));this.hasMutatedConstraints=!!a,a&&(s=Kv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=lt(d=>{if(!As(d,n,this.currentDirection))return;let h=l&&l[d]||{};s&&(h={min:0,max:0});const u=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:u,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(th(t,r,0,n))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!As(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-le(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Zr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=$k({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lt(s=>{if(!As(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(le(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;Qk.set(this.visualElement,this);const t=this.visualElement.current,n=Jt(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Zr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Qt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(lt(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=of,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function As(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function qk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Jk extends qn{constructor(t){super(t),this.removeGroupControls=he,this.removeListeners=he,this.controls=new Zk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||he}unmount(){this.removeGroupControls(),this.removeListeners()}}const Pm=e=>(t,n)=>{e&&Z.update(()=>e(t,n))};class eC extends qn{constructor(){super(...arguments),this.removePointerDownListener=he}onPointerDown(t){this.session=new Yv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Pm(t),onStart:Pm(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&Z.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Jt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function tC(){const e=b.useContext(Nd);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ca={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Em(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Bi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=Em(e,t.target.x),r=Em(e,t.target.y);return`${n}% ${r}%`}},nC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Wn.parse(e);if(i.length>5)return r;const o=Wn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=le(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}};class rC extends Vt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;dS(iC),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ca.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Z.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Jv(e){const[t,n]=tC(),r=b.useContext(Ky);return Vt.createElement(rC,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Xy),isPresent:t,safeToRemove:n})}const iC={borderRadius:{...Bi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bi,borderTopRightRadius:Bi,borderBottomLeftRadius:Bi,borderBottomRightRadius:Bi,boxShadow:nC},ex=["TopLeft","TopRight","BottomLeft","BottomRight"],oC=ex.length,jm=e=>typeof e=="string"?parseFloat(e):e,Tm=e=>typeof e=="number"||_.test(e);function sC(e,t,n,r,i,o){i?(e.opacity=le(0,n.opacity!==void 0?n.opacity:1,aC(r)),e.opacityExit=le(t.opacity!==void 0?t.opacity:1,0,lC(r))):o&&(e.opacity=le(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<oC;s++){const a=`border${ex[s]}Radius`;let l=Am(t,a),c=Am(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Tm(l)===Tm(c)?(e[a]=Math.max(le(jm(l),jm(c),r),0),(_t.test(c)||_t.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=le(t.rotate||0,n.rotate||0,r))}function Am(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const aC=tx(0,.5,Cv),lC=tx(.5,.95,he);function tx(e,t,n){return r=>r<e?0:r>t?1:n(bi(e,t,r))}function Lm(e,t){e.min=t.min,e.max=t.max}function it(e,t){Lm(e.x,t.x),Lm(e.y,t.y)}function Rm(e,t,n,r,i){return e-=t,e=Qa(e,1/n,r),i!==void 0&&(e=Qa(e,1/i,r)),e}function cC(e,t=0,n=1,r=.5,i,o=e,s=e){if(_t.test(t)&&(t=parseFloat(t),t=le(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=le(o.min,o.max,r);e===o&&(a-=t),e.min=Rm(e.min,t,n,a,i),e.max=Rm(e.max,t,n,a,i)}function Om(e,t,[n,r,i],o,s){cC(e,t[n],t[r],t[i],t.scale,o,s)}const uC=["x","scaleX","originX"],fC=["y","scaleY","originY"];function Mm(e,t,n,r){Om(e.x,t,uC,n?n.x:void 0,r?r.x:void 0),Om(e.y,t,fC,n?n.y:void 0,r?r.y:void 0)}function Im(e){return e.translate===0&&e.scale===1}function nx(e){return Im(e.x)&&Im(e.y)}function dC(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function rx(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function zm(e){return qe(e.x)/qe(e.y)}class hC{constructor(){this.members=[]}add(t){nh(this.members,t),t.scheduleRender()}remove(t){if(rh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Dm(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const pC=(e,t)=>e.depth-t.depth;class mC{constructor(){this.children=[],this.isDirty=!1}add(t){nh(this.children,t),this.isDirty=!0}remove(t){rh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(pC),this.isDirty=!1,this.children.forEach(t)}}function gC(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Tt(r),e(o-t))};return Z.read(r,!0),()=>Tt(r)}function yC(e){window.MotionDebug&&window.MotionDebug.record(e)}function vC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function xC(e,t,n){const r=Ge(e)?e:bt(e);return r.start(th("",r,t,n)),r.animation}const Nm=["","X","Y","Z"],wC={visibility:"hidden"},Fm=1e3;let SC=0;const ar={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ix({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=SC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ar.totalNodes=ar.resolvedTargetDeltas=ar.recalculatedProjection=0,this.nodes.forEach(CC),this.nodes.forEach(AC),this.nodes.forEach(LC),this.nodes.forEach(PC),yC(ar)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new mC)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new ih),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=vC(s),this.instance=s;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let h;const u=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=gC(u,250),ca.hasAnimatedSinceResize&&(ca.hasAnimatedSinceResize=!1,this.nodes.forEach(Vm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:u,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||zC,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=d.getProps(),p=!this.targetLayout||!rx(this.targetLayout,v)||y,m=!u&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||u&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,m);const w={...eh(x,"layout"),onPlay:k,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else u||Vm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RC),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_m);return}this.isUpdating||this.nodes.forEach(jC),this.isUpdating=!1,this.nodes.forEach(TC),this.nodes.forEach(bC),this.nodes.forEach(kC),this.clearAllSnapshots();const a=performance.now();Ee.delta=Un(0,1e3/60,a-Ee.timestamp),Ee.timestamp=a,Ee.isProcessing=!0,xc.update.process(Ee),xc.preRender.process(Ee),xc.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(EC),this.sharedNodes.forEach(OC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!nx(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&(a||sr(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),DC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return me();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Pn(a.x,l.offset.x),Pn(a.y,l.offset.y)),a}removeElementScroll(s){const a=me();it(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:d,options:h}=c;if(c!==this.root&&d&&h.layoutScroll){if(d.isRoot){it(a,s);const{scroll:u}=this.root;u&&(Pn(a.x,-u.offset.x),Pn(a.y,-u.offset.y))}Pn(a.x,d.offset.x),Pn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=me();it(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ei(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),sr(d.latestValues)&&ei(l,d.latestValues)}return sr(this.latestValues)&&ei(l,this.latestValues),l}removeTransform(s){const a=me();it(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!sr(c.latestValues))continue;sf(c.latestValues)&&c.updateSnapshot();const d=me(),h=c.measurePageBox();it(d,h),Mm(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return sr(this.latestValues)&&Mm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:u}=this.options;if(!(!this.layout||!(h||u))){if(this.resolvedRelativeTargetAt=Ee.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),vo(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),it(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Nk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):it(this.target,this.layout.layoutBox),Qv(this.target,this.targetDelta)):it(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),vo(this.relativeTargetOrigin,this.target,y.target),it(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ar.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||sf(this.parent.latestValues)||Xv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(c=!1),c)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;it(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,y=this.treeScale.y;Yk(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Jr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Jr(),this.projectionDeltaWithTransform=Jr());const x=this.projectionTransform;yo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Dm(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==u||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),ar.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},h=Jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=me(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,k=this.getStack(),g=!k||k.members.length<=1,p=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(IC));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const C=w/1e3;$m(h.x,s.x,C),$m(h.y,s.y,C),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vo(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),MC(this.relativeTarget,this.relativeTargetOrigin,u,C),m&&dC(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=me()),it(m,this.relativeTarget)),x&&(this.animationValues=d,sC(d,c,this.latestValues,C,p,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Tt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Z.update(()=>{ca.hasAnimatedSinceResize=!0,this.currentAnimation=xC(0,Fm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&ox(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||me();const h=qe(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+h;const u=qe(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+u}it(a,l),ei(a,d),yo(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new hC),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let d=0;d<Nm.length;d++){const h="rotate"+Nm[d];l[h]&&(c[h]=l[h],s.setStaticValue(h,0))}s.render();for(const d in c)s.setStaticValue(d,c[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wC;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=la(s==null?void 0:s.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=la(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const u=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=Dm(this.projectionDeltaWithTransform,this.treeScale,u),d&&(c.transform=d(u,c.transform));const{x:y,y:v}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=u.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:c.opacity=h===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const x in Ua){if(u[x]===void 0)continue;const{correct:k,applyTo:g}=Ua[x],p=c.transform==="none"?u[x]:k(u[x],h);if(g){const m=g.length;for(let w=0;w<m;w++)c[g[w]]=p}else c[x]=p}return this.options.layoutId&&(c.pointerEvents=h===this?la(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_m),this.root.sharedNodes.clear()}}}function bC(e){e.updateLayout()}function kC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?lt(h=>{const u=s?n.measuredBox[h]:n.layoutBox[h],y=qe(u);u.min=r[h].min,u.max=u.min+y}):ox(o,n.layoutBox,r)&&lt(h=>{const u=s?n.measuredBox[h]:n.layoutBox[h],y=qe(r[h]);u.max=u.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+y)});const a=Jr();yo(a,r,n.layoutBox);const l=Jr();s?yo(l,e.applyTransform(i,!0),n.measuredBox):yo(l,r,n.layoutBox);const c=!nx(a);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:u,layout:y}=h;if(u&&y){const v=me();vo(v,n.layoutBox,u.layoutBox);const x=me();vo(x,r,y.layoutBox),rx(v,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function CC(e){ar.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function PC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function EC(e){e.clearSnapshot()}function _m(e){e.clearMeasurements()}function jC(e){e.isLayoutDirty=!1}function TC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Vm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function AC(e){e.resolveTargetDelta()}function LC(e){e.calcProjection()}function RC(e){e.resetRotation()}function OC(e){e.removeLeadSnapshot()}function $m(e,t,n){e.translate=le(t.translate,0,n),e.scale=le(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Bm(e,t,n,r){e.min=le(t.min,n.min,r),e.max=le(t.max,n.max,r)}function MC(e,t,n,r){Bm(e.x,t.x,n.x,r),Bm(e.y,t.y,n.y,r)}function IC(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const zC={duration:.45,ease:[.4,0,.1,1]},Um=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Wm=Um("applewebkit/")&&!Um("chrome/")?Math.round:he;function Hm(e){e.min=Wm(e.min),e.max=Wm(e.max)}function DC(e){Hm(e.x),Hm(e.y)}function ox(e,t,n){return e==="position"||e==="preserve-aspect"&&!rf(zm(t),zm(n),.2)}const NC=ix({attachResizeListener:(e,t)=>Qt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lc={current:void 0},sx=ix({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lc.current){const e=new NC({});e.mount(window),e.setOptions({layoutScroll:!0}),Lc.current=e}return Lc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),FC={pan:{Feature:eC},drag:{Feature:Jk,ProjectionNode:sx,MeasureLayout:Jv}},_C=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function VC(e){const t=_C.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function lf(e,t,n=1){const[r,i]=VC(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Bv(s)?parseFloat(s):s}else return Qu(i)?lf(i,t,n+1):i}function $C(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Qu(o))return;const s=lf(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Qu(o))continue;const s=lf(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const BC=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ax=e=>BC.has(e),UC=e=>Object.keys(e).some(ax),Ym=e=>e===Tr||e===_,Gm=(e,t)=>parseFloat(e.split(", ")[t]),Km=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Gm(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?Gm(o[1],e):0}},WC=new Set(["x","y","z"]),HC=es.filter(e=>!WC.has(e));function YC(e){const t=[];return HC.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ki={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Km(4,13),y:Km(5,14)};ki.translateX=ki.x;ki.translateY=ki.y;const GC=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=ki[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const d=t.getValue(c);d&&d.jump(a[c]),e[c]=ki[c](l,o)}),e},KC=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(ax);let o=[],s=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],h=$i(d);const u=t[l];let y;if(Ha(u)){const v=u.length,x=u[0]===null?1:0;d=u[x],h=$i(d);for(let k=x;k<v&&u[k]!==null;k++)y?Il($i(u[k])===y):y=$i(u[k])}else y=$i(u);if(h!==y)if(Ym(h)&&Ym(y)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof u=="string"?t[l]=parseFloat(u):Array.isArray(u)&&y===_&&(t[l]=u.map(parseFloat))}else h!=null&&h.transform&&(y!=null&&y.transform)&&(d===0||u===0)?d===0?c.set(y.transform(d)):t[l]=h.transform(u):(s||(o=YC(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(u))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=GC(t,e,a);return o.length&&o.forEach(([d,h])=>{e.getValue(d).set(h)}),e.render(),jl&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function XC(e,t,n,r){return UC(t)?KC(e,t,n,r):{target:t,transitionEnd:r}}const QC=(e,t,n,r)=>{const i=$C(e,t,r);return t=i.target,r=i.transitionEnd,XC(e,t,n,r)},cf={current:null},lx={current:!1};function ZC(){if(lx.current=!0,!!jl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cf.current=e.matches;e.addListener(t),t()}else cf.current=!1}function qC(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Ge(o))e.addValue(i,o),Xa(r)&&r.add(i);else if(Ge(s))e.addValue(i,bt(o,{owner:e})),Xa(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,bt(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Xm=new WeakMap,cx=Object.keys(Bo),JC=cx.length,Qm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],e6=$d.length;class t6{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Z.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Al(n),this.isVariantNode=Gy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const h in d){const u=d[h];a[h]!==void 0&&Ge(u)&&(u.set(a[h],!1),Xa(c)&&c.add(h))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Xm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),lx.current||ZC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xm.delete(this.current),this.projection&&this.projection.unmount(),Tt(this.notifyUpdate),Tt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=jr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Z.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<JC;l++){const c=cx[l],{isEnabled:d,Feature:h,ProjectionNode:u,MeasureLayout:y}=Bo[c];u&&(s=u),d(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:d,dragConstraints:h,layoutScroll:u,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||h&&Zr(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:u,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Qm.length;r++){const i=Qm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=qC(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<e6;r++){const i=$d[r],o=this.props[i];($o(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=bt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Kd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ge(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ih),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ux extends t6{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=vk(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){gk(this,r,s);const a=QC(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function n6(e){return window.getComputedStyle(e)}class r6 extends ux{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(jr.has(n)){const r=Jd(n);return r&&r.default||0}else{const r=n6(t),i=(qy(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Zv(t,n)}build(t,n,r,i){Ud(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Gd(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ge(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){iv(t,n,r,i)}}class i6 extends ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(jr.has(n)){const r=Jd(n);return r&&r.default||0}return n=ov.has(n)?n:_d(n),t.getAttribute(n)}measureInstanceViewportBox(){return me()}scrapeMotionValuesFromProps(t,n){return av(t,n)}build(t,n,r,i){Hd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){sv(t,n,r,i)}mount(t){this.isSVGTag=Yd(t.tagName),super.mount(t)}}const o6=(e,t)=>Bd(e)?new i6(t,{enableHardwareAcceleration:!1}):new r6(t,{enableHardwareAcceleration:!0}),s6={layout:{ProjectionNode:sx,MeasureLayout:Jv}},a6={...Mk,...tb,...FC,...s6},B=uS((e,t)=>BS(e,t,a6,o6));function l6(e){const t=Rl(()=>bt(e)),{isStatic:n}=b.useContext(Dd);if(n){const[,r]=b.useState(e);b.useEffect(()=>t.on("change",r),[])}return t}const c6=e=>e&&typeof e=="object"&&e.mix,u6=e=>c6(e)?e.mix:void 0;function f6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=zl(i,o,{mixer:u6(o[0]),...s});return t?a(r):a}function fx(e,t){const n=l6(t()),r=()=>n.set(t());return r(),Fd(()=>{const i=()=>Z.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Tt(r)}}),n}function d6(e){go.current=[],e();const t=fx(go.current,e);return go.current=void 0,t}function Rr(e,t,n,r){if(typeof e=="function")return d6(e);const i=typeof t=="function"?t:f6(t,n,r);return Array.isArray(e)?Zm(e,i):Zm([e],([o])=>i(o))}function Zm(e,t){const n=Rl(()=>[]);return fx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function h6(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(Il(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const ua=new WeakMap;let bn;function p6(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function m6({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ua.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return p6(e,n)}})})}function g6(e){e.forEach(m6)}function y6(){typeof ResizeObserver>"u"||(bn=new ResizeObserver(g6))}function v6(e,t){bn||y6();const n=h6(e);return n.forEach(r=>{let i=ua.get(r);i||(i=new Set,ua.set(r,i)),i.add(t),bn==null||bn.observe(r)}),()=>{n.forEach(r=>{const i=ua.get(r);i==null||i.delete(t),i!=null&&i.size||bn==null||bn.unobserve(r)})}}const fa=new Set;let xo;function x6(){xo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};fa.forEach(n=>n(t))},window.addEventListener("resize",xo)}function w6(e){return fa.add(e),xo||x6(),()=>{fa.delete(e),!fa.size&&xo&&(xo=void 0)}}function S6(e,t){return typeof e=="function"?w6(e):v6(e,t)}const b6=50,qm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),k6=()=>({time:0,x:qm(),y:qm()}),C6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Jm(e,t,n,r){const i=n[t],{length:o,position:s}=C6[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=bi(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>b6?0:qd(i.current-a,c)}function P6(e,t,n){Jm(e,"x",t,n),Jm(e,"y",t,n),t.time=n}function E6(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const j6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},uf={start:0,center:.5,end:1};function e0(e,t,n=0){let r=0;if(uf[e]!==void 0&&(e=uf[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const T6=[0,0];function A6(e,t,n,r){let i=Array.isArray(e)?e:T6,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,uf[e]?e:"0"]),o=e0(i[0],n,r),s=e0(i[1],t),o-s}const L6={x:0,y:0};function R6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function O6(e,t,n){let{offset:r=j6.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?E6(i,e):L6,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:R6(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const h=r.length;for(let u=0;u<h;u++){const y=A6(r[u],c[s],l[s],a[o]);!d&&y!==t[o].interpolatorOffsets[u]&&(d=!0),t[o].offset[u]=y}d&&(t[o].interpolate=zl(t[o].offset,Nv(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function M6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function I6(e,t,n,r={}){return{measure:()=>M6(e,r.target,n),update:i=>{P6(e,n,i),(r.offset||r.target)&&O6(e,n,r)},notify:()=>t(n)}}const Ui=new WeakMap,t0=new WeakMap,Rc=new WeakMap,n0=e=>e===document.documentElement?window:e;function z6(e,{container:t=document.documentElement,...n}={}){let r=Rc.get(t);r||(r=new Set,Rc.set(t,r));const i=k6(),o=I6(t,e,i,n);if(r.add(o),!Ui.has(t)){const a=()=>{for(const u of r)u.measure()},l=()=>{for(const u of r)u.update(Ee.timestamp)},c=()=>{for(const u of r)u.notify()},d=()=>{Z.read(a,!1,!0),Z.read(l,!1,!0),Z.update(c,!1,!0)};Ui.set(t,d);const h=n0(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&t0.set(t,S6(t,d)),h.addEventListener("scroll",d,{passive:!0})}const s=Ui.get(t);return Z.read(s,!1,!0),()=>{var a;Tt(s);const l=Rc.get(t);if(!l||(l.delete(o),l.size))return;const c=Ui.get(t);Ui.delete(t),c&&(n0(t).removeEventListener("scroll",c),(a=t0.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function r0(e,t){mv(!!(!t||t.current))}const D6=()=>({scrollX:bt(0),scrollY:bt(0),scrollXProgress:bt(0),scrollYProgress:bt(0)});function N6({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Rl(D6);return(n?Fd:b.useEffect)(()=>(r0("target",t),r0("container",e),z6(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function F6(e,t,n){return(t=V6(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i0(Object(n),!0).forEach(function(r){F6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function V6(e){var t=_6(e,"string");return typeof t=="symbol"?t:t+""}const o0=()=>{};let oh={},dx={},hx=null,px={mark:o0,measure:o0};try{typeof window<"u"&&(oh=window),typeof document<"u"&&(dx=document),typeof MutationObserver<"u"&&(hx=MutationObserver),typeof performance<"u"&&(px=performance)}catch{}const{userAgent:s0=""}=oh.navigator||{},Hn=oh,oe=dx,a0=hx,Ls=px;Hn.document;const un=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",mx=~s0.indexOf("MSIE")||~s0.indexOf("Trident/");var $6=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,B6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,gx={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},U6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Me="classic",Dl="duotone",W6="sharp",H6="sharp-duotone",vx=[Me,Dl,W6,H6],Y6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},G6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},K6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),X6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Q6=["fak","fa-kit","fakd","fa-kit-duotone"],l0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Z6=["kit"],q6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},J6=["fak","fakd"],e8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Rs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t8=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],n8=["fak","fa-kit","fakd","fa-kit-duotone"],r8={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},i8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},o8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ff={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},s8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],df=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...t8,...s8],a8=["solid","regular","light","thin","duotone","brands"],xx=[1,2,3,4,5,6,7,8,9,10],l8=xx.concat([11,12,13,14,15,16,17,18,19,20]),c8=[...Object.keys(o8),...a8,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rs.GROUP,Rs.SWAP_OPACITY,Rs.PRIMARY,Rs.SECONDARY].concat(xx.map(e=>"".concat(e,"x"))).concat(l8.map(e=>"w-".concat(e))),u8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const an="___FONT_AWESOME___",hf=16,wx="fa",Sx="svg-inline--fa",kr="data-fa-i2svg",pf="data-fa-pseudo-element",f8="data-fa-pseudo-element-pending",sh="data-prefix",ah="data-icon",u0="fontawesome-i2svg",d8="async",h8=["HTML","HEAD","STYLE","SCRIPT"],bx=(()=>{try{return!0}catch{return!1}})();function is(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Me]}})}const kx=A({},gx);kx[Me]=A(A(A(A({},{"fa-duotone":"duotone"}),gx[Me]),l0.kit),l0["kit-duotone"]);const p8=is(kx),mf=A({},X6);mf[Me]=A(A(A(A({},{duotone:"fad"}),mf[Me]),c0.kit),c0["kit-duotone"]);const f0=is(mf),gf=A({},ff);gf[Me]=A(A({},gf[Me]),e8.kit);const lh=is(gf),yf=A({},i8);yf[Me]=A(A({},yf[Me]),q6.kit);is(yf);const m8=$6,Cx="fa-layers-text",g8=B6,y8=A({},Y6);is(y8);const v8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oc=U6,x8=[...Z6,...c8],wo=Hn.FontAwesomeConfig||{};function w8(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function S8(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}oe&&typeof oe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=S8(w8(n));i!=null&&(wo[r]=i)});const Px={styleDefault:"solid",familyDefault:Me,cssPrefix:wx,replacementClass:Sx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);const Ci=A(A({},Px),wo);Ci.autoReplaceSvg||(Ci.observeMutations=!1);const D={};Object.keys(Px).forEach(e=>{Object.defineProperty(D,e,{enumerable:!0,set:function(t){Ci[e]=t,So.forEach(n=>n(D))},get:function(){return Ci[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){Ci.cssPrefix=e,So.forEach(t=>t(D))},get:function(){return Ci.cssPrefix}});Hn.FontAwesomeConfig=D;const So=[];function b8(e){return So.push(e),()=>{So.splice(So.indexOf(e),1)}}const hn=hf,zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k8(e){if(!e||!un)return;const t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=oe.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return oe.head.insertBefore(t,r),e}const C8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Uo(){let e=12,t="";for(;e-- >0;)t+=C8[Math.random()*62|0];return t}function Ri(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ch(e){return e.classList?Ri(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ex(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P8(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ex(e[n]),'" '),"").trim()}function Nl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function uh(e){return e.size!==zt.size||e.x!==zt.x||e.y!==zt.y||e.rotate!==zt.rotate||e.flipX||e.flipY}function E8(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function j8(e){let{transform:t,width:n=hf,height:r=hf,startCentered:i=!1}=e,o="";return i&&mx?o+="translate(".concat(t.x/hn-n/2,"em, ").concat(t.y/hn-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/hn,"em), calc(-50% + ").concat(t.y/hn,"em)) "):o+="translate(".concat(t.x/hn,"em, ").concat(t.y/hn,"em) "),o+="scale(".concat(t.size/hn*(t.flipX?-1:1),", ").concat(t.size/hn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var T8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function jx(){const e=wx,t=Sx,n=D.cssPrefix,r=D.replacementClass;let i=T8;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let d0=!1;function Mc(){D.autoAddCss&&!d0&&(k8(jx()),d0=!0)}var A8={mixout(){return{dom:{css:jx,insertCss:Mc}}},hooks(){return{beforeDOMElementCreation(){Mc()},beforeI2svg(){Mc()}}}};const ln=Hn||{};ln[an]||(ln[an]={});ln[an].styles||(ln[an].styles={});ln[an].hooks||(ln[an].hooks={});ln[an].shims||(ln[an].shims=[]);var Dt=ln[an];const Tx=[],Ax=function(){oe.removeEventListener("DOMContentLoaded",Ax),Za=1,Tx.map(e=>e())};let Za=!1;un&&(Za=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),Za||oe.addEventListener("DOMContentLoaded",Ax));function L8(e){un&&(Za?setTimeout(e,0):Tx.push(e))}function os(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Ex(e):"<".concat(t," ").concat(P8(n),">").concat(r.map(os).join(""),"</").concat(t,">")}function h0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var R8=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Ic=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?R8(n,i):n,l,c,d;for(r===void 0?(l=1,d=t[o[0]]):(l=0,d=r);l<s;l++)c=o[l],d=a(d,t[c],c,t);return d};function O8(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function vf(e){const t=O8(e);return t.length===1?t[0].toString(16):null}function M8(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function p0(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function xf(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=p0(t);typeof Dt.hooks.addPack=="function"&&!r?Dt.hooks.addPack(e,p0(t)):Dt.styles[e]=A(A({},Dt.styles[e]||{}),i),e==="fas"&&xf("fa",t)}const{styles:Wo,shims:I8}=Dt,Lx=Object.keys(lh),z8=Lx.reduce((e,t)=>(e[t]=Object.keys(lh[t]),e),{});let fh=null,Rx={},Ox={},Mx={},Ix={},zx={};function D8(e){return~x8.indexOf(e)}function N8(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!D8(i)?i:null}const Dx=()=>{const e=r=>Ic(Wo,(i,o,s)=>(i[s]=Ic(o,r,{}),i),{});Rx=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Ox=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),zx=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in Wo||D.autoFetchSvg,n=Ic(I8,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Mx=n.names,Ix=n.unicodes,fh=Fl(D.styleDefault,{family:D.familyDefault})};b8(e=>{fh=Fl(e.styleDefault,{family:D.familyDefault})});Dx();function dh(e,t){return(Rx[e]||{})[t]}function F8(e,t){return(Ox[e]||{})[t]}function hr(e,t){return(zx[e]||{})[t]}function Nx(e){return Mx[e]||{prefix:null,iconName:null}}function _8(e){const t=Ix[e],n=dh("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yn(){return fh}const Fx=()=>({prefix:null,iconName:null,rest:[]});function V8(e){let t=Me;const n=Lx.reduce((r,i)=>(r[i]="".concat(D.cssPrefix,"-").concat(i),r),{});return vx.forEach(r=>{(e.includes(n[r])||e.some(i=>z8[r].includes(i)))&&(t=r)}),t}function Fl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Me}=t,r=p8[n][e];if(n===Dl&&!e)return"fad";const i=f0[n][e]||f0[n][r],o=e in Dt.styles?e:null;return i||o||null}function $8(e){let t=[],n=null;return e.forEach(r=>{const i=N8(D.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function m0(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function _l(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const i=df.concat(n8),o=m0(e.filter(h=>i.includes(h))),s=m0(e.filter(h=>!df.includes(h))),a=o.filter(h=>(r=h,!yx.includes(h))),[l=null]=a,c=V8(o),d=A(A({},$8(s)),{},{prefix:Fl(l,{family:c})});return A(A(A({},d),H8({values:e,family:c,styles:Wo,config:D,canonical:d,givenPrefix:r})),B8(n,r,d))}function B8(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};const o=t==="fa"?Nx(i):{},s=hr(r,i);return i=o.iconName||s||i,r=o.prefix||r,r==="far"&&!Wo.far&&Wo.fas&&!D.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const U8=vx.filter(e=>e!==Me||e!==Dl),W8=Object.keys(ff).filter(e=>e!==Me).map(e=>Object.keys(ff[e])).flat();function H8(e){const{values:t,family:n,canonical:r,givenPrefix:i="",styles:o={},config:s={}}=e,a=n===Dl,l=t.includes("fa-duotone")||t.includes("fad"),c=s.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||c||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&U8.includes(n)&&(Object.keys(o).find(u=>W8.includes(u))||s.autoFetchSvg)){const u=K6.get(n).defaultShortPrefixId;r.prefix=u,r.iconName=hr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Yn()||"fas"),r}class Y8{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]=A(A({},this.definitions[o]||{}),i[o]),xf(o,i[o]);const s=lh[Me][o];s&&xf(s,i[o]),Dx()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(t[o][c]=a)}),t[o][s]=a}),t}}let g0=[],ti={};const ci={},G8=Object.keys(ci);function K8(e,t){let{mixoutsTo:n}=t;return g0=e,ti={},Object.keys(ci).forEach(r=>{G8.indexOf(r)===-1&&delete ci[r]}),g0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{ti[s]||(ti[s]=[]),ti[s].push(o[s])})}r.provides&&r.provides(ci)}),n}function wf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ti[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function Cr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ti[e]||[]).forEach(o=>{o.apply(null,n)})}function Gn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ci[e]?ci[e].apply(null,t):void 0}function Sf(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Yn();if(t)return t=hr(n,t)||t,h0(_x.definitions,n,t)||h0(Dt.styles,n,t)}const _x=new Y8,X8=()=>{D.autoReplaceSvg=!1,D.observeMutations=!1,Cr("noAuto")},Q8={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(Cr("beforeI2svg",e),Gn("pseudoElements2svg",e),Gn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,L8(()=>{q8({autoReplaceSvgRoot:t}),Cr("watch",e)})}},Z8={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Fl(e[0]);return{prefix:n,iconName:hr(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(m8))){const t=_l(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Yn(),iconName:hr(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Yn();return{prefix:t,iconName:hr(t,e)||e}}}},tt={noAuto:X8,config:D,dom:Q8,parse:Z8,library:_x,findIconDefinition:Sf,toHtml:os},q8=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=oe}=e;(Object.keys(Dt.styles).length>0||D.autoFetchSvg)&&un&&D.autoReplaceSvg&&tt.dom.i2svg({node:t})};function Vl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>os(n))}}),Object.defineProperty(e,"node",{get:function(){if(!un)return;const n=oe.createElement("div");return n.innerHTML=e.html,n.children}}),e}function J8(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(uh(s)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Nl(A(A({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function eP(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:s}),children:r}]}]}function hh(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:c,extra:d,watchable:h=!1}=e,{width:u,height:y}=n.found?n:t,v=J6.includes(r),x=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(C=>d.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(d.classes).join(" ");let k={children:[],attributes:A(A({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(y)})};const g=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(u/y*16*.0625,"em")}:{};h&&(k.attributes[kr]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||Uo())},children:[a]}),delete k.attributes.title);const p=A(A({},k),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:A(A({},g),d.styles)}),{children:m,attributes:w}=n.found&&t.found?Gn("generateAbstractMask",p)||{children:[],attributes:{}}:Gn("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=m,p.attributes=w,s?eP(p):J8(p)}function y0(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l=A(A(A({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});a&&(l[kr]="");const c=A({},s.styles);uh(i)&&(c.transform=j8({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Nl(c);d.length>0&&(l.style=d);const h=[];return h.push({tag:"span",attributes:l,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function tP(e){const{content:t,title:n,extra:r}=e,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Nl(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:zc}=Dt;function bf(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Oc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Oc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Oc.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const nP={found:!1,width:512,height:512};function rP(e,t){!bx&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function kf(e,t){let n=t;return t==="fa"&&D.styleDefault!==null&&(t=Yn()),new Promise((r,i)=>{if(n==="fa"){const o=Nx(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&zc[t]&&zc[t][e]){const o=zc[t][e];return r(bf(o))}rP(e,t),r(A(A({},nP),{},{icon:D.showMissingIcons&&e?Gn("missingIconAbstract")||{}:{}}))})}const v0=()=>{},Cf=D.measurePerformance&&Ls&&Ls.mark&&Ls.measure?Ls:{mark:v0,measure:v0},to='FA "6.7.2"',iP=e=>(Cf.mark("".concat(to," ").concat(e," begins")),()=>Vx(e)),Vx=e=>{Cf.mark("".concat(to," ").concat(e," ends")),Cf.measure("".concat(to," ").concat(e),"".concat(to," ").concat(e," begins"),"".concat(to," ").concat(e," ends"))};var ph={begin:iP,end:Vx};const da=()=>{};function x0(e){return typeof(e.getAttribute?e.getAttribute(kr):null)=="string"}function oP(e){const t=e.getAttribute?e.getAttribute(sh):null,n=e.getAttribute?e.getAttribute(ah):null;return t&&n}function sP(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function aP(){return D.autoReplaceSvg===!0?ha.replace:ha[D.autoReplaceSvg]||ha.replace}function lP(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function cP(e){return oe.createElement(e)}function $x(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?lP:cP}=t;if(typeof e=="string")return oe.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild($x(o,{ceFn:n}))}),r}function uP(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ha={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore($x(n),t)}),t.getAttribute(kr)===null&&D.keepOriginalSource){let n=oe.createComment(uP(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ch(t).indexOf(D.replacementClass))return ha.replace(e);const r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===D.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>os(o)).join(`
`);t.setAttribute(kr,""),t.innerHTML=i}};function w0(e){e()}function Bx(e,t){const n=typeof t=="function"?t:da;if(e.length===0)n();else{let r=w0;D.mutateApproach===d8&&(r=Hn.requestAnimationFrame||w0),r(()=>{const i=aP(),o=ph.begin("mutate");e.map(i),o(),n()})}}let mh=!1;function Ux(){mh=!0}function Pf(){mh=!1}let qa=null;function S0(e){if(!a0||!D.observeMutations)return;const{treeCallback:t=da,nodeCallback:n=da,pseudoElementsCallback:r=da,observeMutationsRoot:i=oe}=e;qa=new a0(o=>{if(mh)return;const s=Yn();Ri(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!x0(a.addedNodes[0])&&(D.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&D.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&x0(a.target)&&~v8.indexOf(a.attributeName))if(a.attributeName==="class"&&oP(a.target)){const{prefix:l,iconName:c}=_l(ch(a.target));a.target.setAttribute(sh,l||s),c&&a.target.setAttribute(ah,c)}else sP(a.target)&&n(a.target)})}),un&&qa.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fP(){qa&&qa.disconnect()}function dP(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function hP(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=_l(ch(e));return i.prefix||(i.prefix=Yn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=F8(i.prefix,e.innerText)||dh(i.prefix,vf(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function pP(e){const t=Ri(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Uo()):(t["aria-hidden"]="true",t.focusable="false")),t}function mP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=hP(e),o=pP(e),s=wf("parseNodeAttributes",{},e);let a=t.styleParser?dP(e):[];return A({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o}},s)}const{styles:gP}=Dt;function Wx(e){const t=D.autoReplaceSvg==="nest"?b0(e,{styleParser:!1}):b0(e);return~t.extra.classes.indexOf(Cx)?Gn("generateLayersText",e,t):Gn("generateSvgReplacementMutation",e,t)}function yP(){return[...Q6,...df]}function k0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();const n=oe.documentElement.classList,r=d=>n.add("".concat(u0,"-").concat(d)),i=d=>n.remove("".concat(u0,"-").concat(d)),o=D.autoFetchSvg?yP():yx.concat(Object.keys(gP));o.includes("fa")||o.push("fa");const s=[".".concat(Cx,":not([").concat(kr,"])")].concat(o.map(d=>".".concat(d,":not([").concat(kr,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=Ri(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=ph.begin("onTree"),c=a.reduce((d,h)=>{try{const u=Wx(h);u&&d.push(u)}catch(u){bx||u.name==="MissingIcon"&&console.error(u)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(u=>{Bx(u,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(u=>{l(),h(u)})})}function vP(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wx(e).then(n=>{n&&Bx([n],t)})}function xP(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Sf(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Sf(i||{})),e(r,A(A({},n),{},{mask:i}))}}const wP=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=zt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:c={},styles:d={}}=t;if(!e)return;const{prefix:h,iconName:u,icon:y}=e;return Vl(A({type:"icon"},e),()=>(Cr("beforeDOMElementCreation",{iconDefinition:e,params:t}),D.autoA11y&&(s?c["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(a||Uo()):(c["aria-hidden"]="true",c.focusable="false")),hh({icons:{main:bf(y),mask:i?bf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:A(A({},zt),n),symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:c,styles:d,classes:l}})))};var SP={mixout(){return{icon:xP(wP)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=k0,e.nodeCallback=vP,e}}},provides(e){e.i2svg=function(t){const{node:n=oe,callback:r=()=>{}}=t;return k0(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:c,maskId:d,extra:h}=n;return new Promise((u,y)=>{Promise.all([kf(r,s),c.iconName?kf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[x,k]=v;u([t,hh({icons:{main:x,mask:k},prefix:s,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=Nl(s);a.length>0&&(r.style=a);let l;return uh(o)&&(l=Gn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},bP={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Vl({type:"layer"},()=>{Cr("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},kP={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Vl({type:"counter",content:e},()=>(Cr("beforeDOMElementCreation",{content:e,params:t}),tP({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(D.cssPrefix,"-layers-counter"),...r]}})))}}}},CP={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=zt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return Vl({type:"text",content:e},()=>(Cr("beforeDOMElementCreation",{content:e,params:t}),y0({content:e,transform:A(A({},zt),n),title:r,extra:{attributes:o,styles:s,classes:["".concat(D.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(mx){const l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/l,a=c.height/l}return D.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,y0({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const PP=new RegExp('"',"ug"),C0=[1105920,1112319],P0=A(A(A(A({},{FontAwesome:{normal:"fas",400:"fas"}}),G6),u8),r8),Ef=Object.keys(P0).reduce((e,t)=>(e[t.toLowerCase()]=P0[t],e),{}),EP=Object.keys(Ef).reduce((e,t)=>{const n=Ef[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function jP(e){const t=e.replace(PP,""),n=M8(t,0),r=n>=C0[0]&&n<=C0[1],i=t.length===2?t[0]===t[1]:!1;return{value:vf(i?t[0]:t),isSecondary:r||i}}function TP(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Ef[n]||{})[i]||EP[n]}function E0(e,t){const n="".concat(f8).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=Ri(e.children).filter(u=>u.getAttribute(pf)===t)[0],a=Hn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),c=l.match(g8),d=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&h!=="none"&&h!==""){const u=a.getPropertyValue("content");let y=TP(l,d);const{value:v,isSecondary:x}=jP(u),k=c[0].startsWith("FontAwesome");let g=dh(y,v),p=g;if(k){const m=_8(v);m.iconName&&m.prefix&&(g=m.iconName,y=m.prefix)}if(g&&!x&&(!s||s.getAttribute(sh)!==y||s.getAttribute(ah)!==p)){e.setAttribute(n,p),s&&e.removeChild(s);const m=mP(),{extra:w}=m;w.attributes[pf]=t,kf(g,y).then(C=>{const j=hh(A(A({},m),{},{icons:{main:C,mask:Fx()},prefix:y,iconName:p,extra:w,watchable:!0})),E=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=j.map(T=>os(T)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function AP(e){return Promise.all([E0(e,"::before"),E0(e,"::after")])}function LP(e){return e.parentNode!==document.head&&!~h8.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function j0(e){if(un)return new Promise((t,n)=>{const r=Ri(e.querySelectorAll("*")).filter(LP).map(AP),i=ph.begin("searchPseudoElements");Ux(),Promise.all(r).then(()=>{i(),Pf(),t()}).catch(()=>{i(),Pf(),n()})})}var RP={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=j0,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=oe}=t;D.searchPseudoElements&&j0(n)}}};let T0=!1;var OP={mixout(){return{dom:{unwatch(){Ux(),T0=!0}}}},hooks(){return{bootstrap(){S0(wf("mutationObserverCallbacks",{}))},noAuto(){fP()},watch(e){const{observeMutationsRoot:t}=e;T0?Pf():S0(wf("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const A0=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var MP={mixout(){return{parse:{transform:e=>A0(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=A0(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},u={outer:s,inner:d,path:h};return{tag:"g",attributes:A({},u.outer),children:[{tag:"g",attributes:A({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:A(A({},n.icon.attributes),u.path)}]}]}}}};const Dc={x:0,y:0,width:"100%",height:"100%"};function L0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function IP(e){return e.tag==="g"?e.children:[e]}var zP={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?_l(n.split(" ").map(i=>i.trim())):Fx();return r.prefix||(r.prefix=Yn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:c}=i,{width:d,icon:h}=o,u=E8({transform:a,containerWidth:d,iconWidth:l}),y={tag:"rect",attributes:A(A({},Dc),{},{fill:"white"})},v=c.children?{children:c.children.map(L0)}:{},x={tag:"g",attributes:A({},u.inner),children:[L0(A({tag:c.tag,attributes:A(A({},c.attributes),u.path)},v))]},k={tag:"g",attributes:A({},u.outer),children:[x]},g="mask-".concat(s||Uo()),p="clip-".concat(s||Uo()),m={tag:"mask",attributes:A(A({},Dc),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,k]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:IP(h)},m]};return n.push(w,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(g,")")},Dc)}),{children:n,attributes:r}}}},DP={provides(e){let t=!1;Hn.matchMedia&&(t=Hn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},NP={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},FP=[A8,SP,bP,kP,CP,RP,OP,MP,zP,DP,NP];K8(FP,{mixoutsTo:tt});tt.noAuto;tt.config;tt.library;tt.dom;const jf=tt.parse;tt.findIconDefinition;tt.toHtml;const _P=tt.icon;tt.layer;tt.text;tt.counter;var Hx={exports:{}},VP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$P=VP,BP=$P;function Yx(){}function Gx(){}Gx.resetWarningCache=Yx;var UP=function(){function e(r,i,o,s,a,l){if(l!==BP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gx,resetWarningCache:Yx};return n.PropTypes=n,n};Hx.exports=UP();var WP=Hx.exports;const U=H0(WP);function R0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R0(Object(n),!0).forEach(function(r){ni(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ja(e){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ja(e)}function ni(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function YP(e,t){if(e==null)return{};var n=HP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tf(e){return GP(e)||KP(e)||XP(e)||QP()}function GP(e){if(Array.isArray(e))return Af(e)}function KP(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function XP(e,t){if(e){if(typeof e=="string")return Af(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Af(e,t)}}function Af(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function QP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZP(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,c=e.spinPulse,d=e.spinReverse,h=e.pulse,u=e.fixedWidth,y=e.inverse,v=e.border,x=e.listItem,k=e.flip,g=e.size,p=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":u,"fa-inverse":y,"fa-border":v,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ni(t,"fa-".concat(g),typeof g<"u"&&g!==null),ni(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ni(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ni(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(C){return w[C]?C:null}).filter(function(C){return C})}function qP(e){return e=e-0,e===e}function Kx(e){return qP(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var JP=["style"];function eE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Kx(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[eE(i)]=o:t[i]=o,t},{})}function Xx(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Xx(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=tE(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[Kx(c)]=d}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=YP(n,JP);return i.attrs.style=Mt(Mt({},i.attrs.style),s),e.apply(void 0,[t.tag,Mt(Mt({},i.attrs),a)].concat(Tf(r)))}var Qx=!1;try{Qx=!0}catch{}function nE(){if(!Qx&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function O0(e){if(e&&Ja(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jf.icon)return jf.icon(e);if(e===null)return null;if(e&&Ja(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Nc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ni({},e,t):{}}var M0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},G=Vt.forwardRef(function(e,t){var n=Mt(Mt({},M0),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,c=n.maskId,d=O0(r),h=Nc("classes",[].concat(Tf(ZP(n)),Tf((s||"").split(" ")))),u=Nc("transform",typeof n.transform=="string"?jf.transform(n.transform):n.transform),y=Nc("mask",O0(i)),v=_P(d,Mt(Mt(Mt(Mt({},h),u),y),{},{symbol:o,title:a,titleId:l,maskId:c}));if(!v)return nE("Could not find icon",d),null;var x=v.abstract,k={ref:t};return Object.keys(n).forEach(function(g){M0.hasOwnProperty(g)||(k[g]=n[g])}),rE(x[0],k)});G.displayName="FontAwesomeIcon";G.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};var rE=Xx.bind(null,Vt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const iE={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},oE={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]},sE={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},I0={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"]},aE={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},lE={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},cE=lE,Fc={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},uE={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},z0=uE,Lf={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},fE={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},dE={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},hE=dE,pE={prefix:"fas",iconName:"truck",icon:[640,512,[128666,9951],"f0d1","M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},mE={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},gh=mE,gE={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},yE={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},vE={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},D0=vE,xE={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},wE={prefix:"fas",iconName:"truck-fast",icon:[640,512,["shipping-fast"],"f48b","M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},SE={prefix:"fas",iconName:"percent",icon:[384,512,[62101,62785,"percentage"],"25","M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},bE={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"]},kE={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"]};var Rf=new Map,Os=new WeakMap,N0=0,CE=void 0;function PE(e){return e?(Os.has(e)||(N0+=1,Os.set(e,N0.toString())),Os.get(e)):"0"}function EE(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?PE(e.root):e[t]}`).toString()}function jE(e){const t=EE(e);let n=Rf.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(a=>{var l;const c=a.isIntersecting&&i.some(d=>a.intersectionRatio>=d);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=r.get(a.target))==null||l.forEach(d=>{d(c,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Rf.set(t,n)}return n}function TE(e,t,n={},r=CE){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:s}=jE(n),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),Rf.delete(i))}}function AE({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:a,fallbackInView:l,onChange:c}={}){var d;const[h,u]=b.useState(null),y=b.useRef(c),[v,x]=b.useState({inView:!!a,entry:void 0});y.current=c,b.useEffect(()=>{if(s||!h)return;let m;return m=TE(h,(w,C)=>{x({inView:w,entry:C}),y.current&&y.current(w,C),C.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,h,i,r,o,s,n,l,t]);const k=(d=v.entry)==null?void 0:d.target,g=b.useRef(void 0);!h&&k&&!o&&!s&&g.current!==k&&(g.current=k,x({inView:!!a,entry:void 0}));const p=[u,v.inView,v.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const F0=S.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 90px;
`,LE=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
`,RE=S.div`
  margin-bottom: 2rem;
`,OE=S.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`,ME=S.p`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 300;
  margin-bottom: 1.5rem;
`,IE=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,zE=S.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,_c=S(B.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${e=>e.active?"rgba(47, 84, 131, 0.15)":"rgba(47, 84, 131, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(47, 84, 131, 0.3)":"rgba(47, 84, 131, 0.1)"};
  border-radius: 8px;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`,DE=S.select`
  padding: 0.8rem 1.5rem;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  background: #ffffff;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(47, 84, 131, 0.3);
  }
`,Vc=S.div`
  position: relative;
  display: inline-block;
`,$c=S.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 1rem;
  min-width: 200px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: translateY(${e=>e.isOpen?"0":"-10px"});
  transition: all 0.3s ease;
`,Or=S.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Mr=S.div`
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`,Wi=S.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0;
  cursor: pointer;
  font-size: 0.85rem;
  color: #666666;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2f5483;
  }
`,Hi=S.input`
  margin: 0;
`,NE=S.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,_0=S.input`
  width: 80px;
  padding: 0.3rem 0.5rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 4px;
  font-size: 0.8rem;
  color: #2f5483;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
  }
`,FE=S(B.button)`
  padding: 0.5rem 1rem;
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid rgba(255, 71, 87, 0.2);
  border-radius: 6px;
  color: #ff4757;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 71, 87, 0.15);
  }
`,_E=S.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`,tr=S.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,nr=S.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #ff4757;
  }
`,VE=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Zx=S(B.div)`
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(47, 84, 131, 0.08);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.5));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      opacity: 1;
    }
  }
`,$E=S.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  ${Zx}:hover & img {
    transform: scale(1.05);
  }
`,BE=S.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #2f5483;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,UE=S.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,WE=S.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
`,HE=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`,YE=S.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 300;
  max-height: 4.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 1.5rem;
    background: linear-gradient(to right, transparent, #ffffff);
    pointer-events: none;
  }
`,GE=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,rr=S.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 400;
`,KE=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`,V0=S.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
`,XE=S.div`
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  text-decoration: line-through;
  margin-right: 0.5rem;
`,QE=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #dc3545;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`;const ZE=S.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`,qE=S(B.button)`
  flex: 1;
  background: #2f5483;
  border: none;
  padding: 0.8rem;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #3a6294;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,JE=S(B.button)`
  flex: 1;
  background: transparent;
  border: 1px solid #2f5483;
  padding: 0.8rem;
  color: #2f5483;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,ej=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`,tj=S(B.button)`
  padding: 1rem 2rem;
  border: 2px solid #2f5483;
  background: white;
  color: #2f5483;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,nj=S.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,rj=S.div`
  position: relative;
  z-index: 2;
`,ij=S.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`,oj=S.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,sj=S(B.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;function aj(){const[e,t]=G5(),n=vl(),[r,i]=b.useState([]),[o,s]=b.useState(!0),[a,l]=b.useState(12),[c,d]=b.useState("name"),h=12,[u,y]=b.useState({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),[v,x]=b.useState(null);b.useEffect(()=>{const P=N=>{N.target.closest(".filter-dropdown")||x(null)};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[]),b.useEffect(()=>{fetch("/catalog-products.json").then(P=>P.json()).then(P=>{i(P),s(!1)}).catch(P=>{console.error("Ошибка загрузки товаров:",P),s(!1)})},[]),b.useEffect(()=>{const P=e.get("category"),N=e.get("brand");(P||N)&&(y({categories:P?[P]:[],brands:N?[N]:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),l(12))},[e]),b.useEffect(()=>{l(12)},[u]);const k=(P,N,J)=>{y(K=>{const X={...K};return P==="priceRange"?X.priceRange={...K.priceRange,...N}:J?X[P]=[...K[P],N]:X[P]=K[P].filter(Se=>Se!==N),X}),setCurrentPage(1)};b.useEffect(()=>{const P=new URLSearchParams;u.categories.length>0&&P.set("category",u.categories[0]),u.brands.length>0&&P.set("brand",u.brands[0]),t(P)},[u.categories,u.brands,t]);const g=()=>{y({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),t({}),l(12)},p=(P,N)=>{y(J=>{const K={...J};return P==="priceRange"?K.priceRange={min:"",max:""}:K[P]=J[P].filter(X=>X!==N),K}),setCurrentPage(1)},m=P=>P.filter(N=>!(u.categories.length>0&&!u.categories.includes(N.category)||u.brands.length>0&&!u.brands.includes(N.brand)||u.priceRange.min&&N.price<parseInt(u.priceRange.min)||u.priceRange.max&&N.price>parseInt(u.priceRange.max)||u.phases.length>0&&!u.phases.includes(N.specifications.phases)||u.voltage.length>0&&!u.voltage.includes(N.specifications.voltage)||u.accuracy.length>0&&!u.accuracy.includes(N.specifications.accuracy))),w=P=>{const J=r.map(K=>P==="specifications.phases"?K.specifications.phases:P==="specifications.voltage"?K.specifications.voltage:P==="specifications.accuracy"?K.specifications.accuracy:K[P]).filter(K=>K&&K!==""&&K!=="нет"&&K!=="не требуется"&&K!=="ТМ выход");return[...new Set(J)].sort()},C=m([...r]).sort((P,N)=>{switch(c){case"name":return P.name.localeCompare(N.name);case"price-asc":return P.price-N.price;case"price-desc":return N.price-P.price;default:return 0}}),j=C.slice(0,a),E=a<C.length,T=()=>u.categories.length>0||u.brands.length>0||u.priceRange.min||u.priceRange.max||u.phases.length>0||u.voltage.length>0||u.accuracy.length>0,O=()=>{l(P=>P+h)},I=()=>{alert("Функция заказа под заказ будет добавлена позже. Свяжитесь с нами по телефону для уточнения деталей.")},ee=()=>{if(u.categories.length===1&&u.brands.length===0)return`${u.categories[0]}`;if(u.categories.length===0&&u.brands.length===1)return`Счетчики ${u.brands[0]}`;if(u.categories.length===1&&u.brands.length===1)return`${u.categories[0]} ${u.brands[0]}`;if(u.categories.length>1)return`Категории: ${u.categories.join(", ")}`;if(u.brands.length>1)return`Бренды: ${u.brands.join(", ")}`;if(u.priceRange.min||u.priceRange.max){let P="По цене";return u.priceRange.min&&u.priceRange.max?P=`От ${u.priceRange.min} до ${u.priceRange.max} ₽`:u.priceRange.min?P=`От ${u.priceRange.min} ₽`:u.priceRange.max&&(P=`До ${u.priceRange.max} ₽`),P}if(u.phases.length>0||u.voltage.length>0||u.accuracy.length>0){const P=[];return u.phases.length>0&&P.push(`${u.phases.join(", ")} фаза`),u.voltage.length>0&&P.push(u.voltage.join(", ")),u.accuracy.length>0&&P.push(`Класс ${u.accuracy.join(", ")}`),P.join(", ")}return"Каталог"};return b.useEffect(()=>{const P=ee(),N=T()?`${P} - Счетчики электроэнергии | Стройэнергетика`:"Каталог счетчиков электроэнергии | Стройэнергетика";document.title=N},[u,T]),o?f.jsx(F0,{children:f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"1.2rem",color:"#2f5483"},children:"Загрузка товаров..."})}):f.jsx(F0,{children:f.jsxs(LE,{children:[f.jsxs(RE,{children:[f.jsx(OE,{children:ee()}),f.jsx(ME,{children:T()?`Найдено ${C.length} товаров`:"Широкий выбор счетчиков электроэнергии от ведущих производителей с гарантией качества"})]}),f.jsxs(IE,{children:[f.jsxs(zE,{children:[f.jsxs(Vc,{className:"filter-dropdown",children:[f.jsxs(_c,{active:u.categories.length>0||u.brands.length>0,onClick:()=>x(v==="main"?null:"main"),whileHover:{scale:1.02},children:[f.jsx(G,{icon:Fc}),"Категории и бренды"]}),f.jsxs($c,{isOpen:v==="main",children:[f.jsxs(Or,{children:[f.jsx(Mr,{children:"Категории"}),w("category").map(P=>f.jsxs(Wi,{children:[f.jsx(Hi,{type:"checkbox",checked:u.categories.includes(P),onChange:N=>k("categories",P,N.target.checked)}),P]},P))]}),f.jsxs(Or,{children:[f.jsx(Mr,{children:"Бренды"}),w("brand").map(P=>f.jsxs(Wi,{children:[f.jsx(Hi,{type:"checkbox",checked:u.brands.includes(P),onChange:N=>k("brands",P,N.target.checked)}),P]},P))]})]})]}),f.jsxs(Vc,{className:"filter-dropdown",children:[f.jsxs(_c,{active:u.priceRange.min||u.priceRange.max,onClick:()=>x(v==="price"?null:"price"),whileHover:{scale:1.02},children:[f.jsx(G,{icon:Fc}),"Цена"]}),f.jsx($c,{isOpen:v==="price",children:f.jsxs(Or,{children:[f.jsx(Mr,{children:"Диапазон цен"}),f.jsxs(NE,{children:[f.jsx(_0,{type:"number",placeholder:"От",value:u.priceRange.min,onChange:P=>k("priceRange",{min:P.target.value})}),f.jsx("span",{children:"-"}),f.jsx(_0,{type:"number",placeholder:"До",value:u.priceRange.max,onChange:P=>k("priceRange",{max:P.target.value})})]})]})})]}),f.jsxs(Vc,{className:"filter-dropdown",children:[f.jsxs(_c,{active:u.phases.length>0||u.voltage.length>0||u.accuracy.length>0,onClick:()=>x(v==="specs"?null:"specs"),whileHover:{scale:1.02},children:[f.jsx(G,{icon:Fc}),"Характеристики"]}),f.jsxs($c,{isOpen:v==="specs",children:[f.jsxs(Or,{children:[f.jsx(Mr,{children:"Количество фаз"}),w("specifications.phases").map(P=>f.jsxs(Wi,{children:[f.jsx(Hi,{type:"checkbox",checked:u.phases.includes(P),onChange:N=>k("phases",P,N.target.checked)}),P," фаза"]},P))]}),f.jsxs(Or,{children:[f.jsx(Mr,{children:"Напряжение"}),w("specifications.voltage").map(P=>f.jsxs(Wi,{children:[f.jsx(Hi,{type:"checkbox",checked:u.voltage.includes(P),onChange:N=>k("voltage",P,N.target.checked)}),P]},P))]}),f.jsxs(Or,{children:[f.jsx(Mr,{children:"Класс точности"}),w("specifications.accuracy").map(P=>f.jsxs(Wi,{children:[f.jsx(Hi,{type:"checkbox",checked:u.accuracy.includes(P),onChange:N=>k("accuracy",P,N.target.checked)}),P]},P))]})]})]}),T()&&f.jsx(FE,{onClick:g,whileHover:{scale:1.02},children:"Очистить все"})]}),f.jsxs(DE,{value:c,onChange:P=>d(P.target.value),children:[f.jsx("option",{value:"name",children:"По названию"}),f.jsx("option",{value:"price-asc",children:"По цене (возрастание)"}),f.jsx("option",{value:"price-desc",children:"По цене (убывание)"})]})]}),T()&&f.jsxs(_E,{children:[u.categories.map(P=>f.jsxs(tr,{children:["Категория: ",P,f.jsx(nr,{onClick:()=>p("categories",P),children:"×"})]},`category-${P}`)),u.brands.map(P=>f.jsxs(tr,{children:["Бренд: ",P,f.jsx(nr,{onClick:()=>p("brands",P),children:"×"})]},`brand-${P}`)),u.priceRange.min&&f.jsxs(tr,{children:["Цена от: ",u.priceRange.min," ₽",f.jsx(nr,{onClick:()=>p("priceRange"),children:"×"})]},"price-min"),u.priceRange.max&&f.jsxs(tr,{children:["Цена до: ",u.priceRange.max," ₽",f.jsx(nr,{onClick:()=>p("priceRange"),children:"×"})]},"price-max"),u.phases.map(P=>f.jsxs(tr,{children:[P," фаза",f.jsx(nr,{onClick:()=>p("phases",P),children:"×"})]},`phase-${P}`)),u.voltage.map(P=>f.jsxs(tr,{children:[P,f.jsx(nr,{onClick:()=>p("voltage",P),children:"×"})]},`voltage-${P}`)),u.accuracy.map(P=>f.jsxs(tr,{children:["Класс ",P,f.jsx(nr,{onClick:()=>p("accuracy",P),children:"×"})]},`accuracy-${P}`))]}),f.jsx(VE,{children:j.map((P,N)=>f.jsxs(Zx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:N*.1},children:[f.jsxs($E,{children:[f.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"2rem",fontWeight:"bold"},children:P.brand}),f.jsx(BE,{children:P.brand}),P.discount&&f.jsxs(QE,{children:["-",P.discount,"%"]})]}),f.jsxs(UE,{children:[f.jsx(WE,{children:P.category}),f.jsx(HE,{children:P.name}),f.jsx(YE,{children:P.description}),f.jsxs(GE,{children:[P.specifications.phases&&P.specifications.phases!=="нет"&&f.jsxs(rr,{children:[P.specifications.phases," фаза"]}),P.specifications.voltage&&P.specifications.voltage!=="нет"&&f.jsx(rr,{children:P.specifications.voltage}),P.specifications.accuracy&&P.specifications.accuracy!=="нет"&&f.jsxs(rr,{children:[P.specifications.accuracy," класс"]}),P.specifications.tariffs&&P.specifications.tariffs!=="однотарифный"&&f.jsx(rr,{children:"Многотарифный"}),P.category==="Устройства сбора и передачи данных"&&f.jsxs(f.Fragment,{children:[P.specifications.power_3phase&&f.jsx(rr,{children:"3×230/400В"}),P.specifications.interfaces&&typeof P.specifications.interfaces=="object"&&f.jsx(rr,{children:"Wi-Fi, LTE"}),P.specifications.temperature&&f.jsx(rr,{children:"-40...+55°C"})]})]}),f.jsx(KE,{children:P.originalPrice?f.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[f.jsxs(XE,{children:[P.originalPrice.toLocaleString()," ₽"]}),f.jsxs(V0,{children:[P.price.toLocaleString()," ₽"]})]}):f.jsxs(V0,{children:[P.price.toLocaleString()," ₽"]})}),f.jsxs(ZE,{children:[f.jsxs(qE,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx(G,{icon:gh}),"В корзину"]}),f.jsxs(JE,{onClick:()=>n(`/product/${P.id}`),whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx(G,{icon:hE}),"Подробнее"]})]})]})]},P.id))}),E&&f.jsx(ej,{children:f.jsxs(tj,{onClick:O,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Показать еще ",Math.min(h,C.length-a)," товаров"]})}),f.jsx(nj,{children:f.jsxs(rj,{children:[f.jsx(ij,{children:"Не нашли нужный товар в каталоге?"}),f.jsx(oj,{children:"Организуем под заказ! Мы работаем с ведущими производителями и можем найти любой товар, который вам нужен."}),f.jsx(sj,{onClick:I,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Заказать"})]})})]})})}const lj=S(B.section)`
  height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  background: url('/banner01.jpg') center center/cover no-repeat;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
`,cj=S(B.div)`
  text-align: left;
  z-index: 2;
  padding: 4rem;
  max-width: 600px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,uj=S(B.div)`
  max-width: 600px;
`,fj=S(B.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
`,dj=S(B.p)`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
`,hj=S(B.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 3.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.5));
    border-radius: 3px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
`,Bc=S(B.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.3rem 0;
  font-weight: 400;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
  
  &:before {
    content: "→";
    color: #ffffff;
    font-weight: bold;
    font-size: 1.3rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`,pj=S(B.button)`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  backdrop-filter: blur(8px);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.2);
    
    &:before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  span {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  &:hover span:after {
    transform: translateX(3px);
  }
`,mj=S(B.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  z-index: 2;

  span {
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`,el=S(B.section)`
  padding: 8rem 0;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`,no=S(B.h2)`
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 6rem;
  color: #000000;
  letter-spacing: 0.03em;
  position: relative;
  width: 100%;
  text-transform: none;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      #000000,
      transparent
    );
    opacity: 0.4;
  }
`,gj=S(el)`
  background: #f8f9fa;
  padding: 0;
  width: 100%;
  
  ${no} {
    margin-top: 6rem;
  }
`,yj=S.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
`,pn=S(B.div)`
  background: #ffffff;
  position: relative;
  border: 1px solid rgba(47, 84, 131, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.5));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.03), rgba(47, 84, 131, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.12);
    border: 2px solid rgba(47, 84, 131, 0.2);
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      opacity: 1;
    }
  }
`,mn=S.div`
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  position: relative;
  z-index: 1;
`,gn=S.h3`
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
    transition: width 0.4s ease;
  }
`,yn=S.p`
  color: #000000;
  opacity: 0.8;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  transition: opacity 0.4s ease;
`,vn=S.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`,xn=S(B.button)`
  width: 100%;
  background: #2f5483;
  border: none;
  padding: 1.2rem;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 4px 15px rgba(47, 84, 131, 0.2);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  span {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    stroke: #ffffff;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.3);
    background: #3a6294;
    
    &:before {
      opacity: 1;
    }
    
    span {
      transform: translateX(-2px);
    }
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(47, 84, 131, 0.2);
  }
`,vj=S(el)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,xj=S.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 0;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gt=S(B.div)`
  background: #ffffff;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.5));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.03), rgba(47, 84, 131, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.12);
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      opacity: 1;
    }
  }
`,Ir=S.div`
  width: 60px;
  height: 60px;
  background: rgba(47, 84, 131, 0.05);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin-bottom: 1rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2f5483;
    border-radius: 15px;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }
  
  ${Gt}:hover & {
    transform: scale(1.1);
    
    &:before {
      transform: scale(1);
    }
    
    svg {
      color: #ffffff;
    }
  }
`,zr=S.h3`
  font-size: 1.1rem;
  color: #000000;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  line-height: 1.4;
  position: relative;
  padding-bottom: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
    transition: width 0.4s ease;
  }
  
  ${Gt}:hover & {
    &:after {
      width: 40px;
    }
  }
`,Dr=S.p`
  color: #000000;
  opacity: 0.8;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  transition: opacity 0.4s ease;
  max-width: 90%;
  
  ${Gt}:hover & {
    opacity: 0.9;
  }
`,wj=S.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
`,Tn=S(B.div)`
  position: relative;
  aspect-ratio: 1;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(47, 84, 131, 0.08);
  padding: 2rem;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2f5483;
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(47, 84, 131, 0.15);
    
    &:before {
      transform: translateY(0);
    }
    
    &:after {
      opacity: 1;
    }
  }
`,Yi=S.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #2f5483;
  transition: all 0.4s ease;
  position: relative;
  z-index: 3;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    z-index: -1;
    transform: scale(0.8);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(47, 84, 131, 0.1);
    border-radius: 50%;
    z-index: -1;
    transform: scale(1.2);
    transition: transform 0.4s ease;
  }
  
  ${Tn}:hover & {
    transform: scale(1.1);
    color: #2f5483;
    
    &:before {
      transform: scale(1.1);
    }
    
    &:after {
      transform: scale(1.4);
      border-color: rgba(47, 84, 131, 0.2);
    }
  }
`,Gi=S.h3`
  font-size: 1.1rem;
  color: #000000;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 3;
  transition: color 0.4s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
  }
  
  ${Tn}:hover & {
    color: #ffffff;
    
    &:after {
      width: 60px;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`,Ki=S.p`
  color: #000000;
  line-height: 1.6;
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0;
  opacity: 0.7;
  max-width: 90%;
  transition: all 0.4s ease;
  z-index: 3;
  
  ${Tn}:hover & {
    color: #ffffff;
    opacity: 0.9;
  }
`;function Sj(){const[e,t]=AE({triggerOnce:!0,threshold:.1});return f.jsxs(f.Fragment,{children:[f.jsxs(lj,{children:[f.jsx(cj,{ref:e,initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:f.jsxs(uj,{children:[f.jsx(fj,{children:"Счетчики электроэнергии"}),f.jsx(dj,{children:"Официальный дилер с гарантией качества и профессиональной установкой"}),f.jsxs(hj,{children:[f.jsx(Bc,{children:"Гарантия 5 лет на все модели"}),f.jsx(Bc,{children:"Бесплатная доставка от 10 000 ₽"}),f.jsx(Bc,{children:"Профессиональный монтаж"})]}),f.jsx(pj,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/catalog",children:f.jsx("span",{children:"Смотреть каталог"})})]})}),f.jsx(mj,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 5v14M5 12l7 7 7-7"})})})]}),f.jsxs(gj,{children:[f.jsx(no,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:"Популярные модели"}),f.jsxs(yj,{children:[f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Меркурий"}),f.jsx(gn,{children:"Счетчик электроэнергии Меркурий 201.8"}),f.jsx(yn,{children:"Однофазный многотарифный счетчик с жидкокристаллическим дисплеем"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"2 450 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Энергомера"}),f.jsx(gn,{children:"Счетчик электроэнергии Энергомера CE102M"}),f.jsx(yn,{children:"Однофазный многотарифный счетчик с возможностью дистанционного снятия показаний"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"3 200 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Нева"}),f.jsx(gn,{children:"Счетчик электроэнергии Нева 103"}),f.jsx(yn,{children:"Однофазный однотарифный счетчик с механическим отсчетным устройством"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"1 850 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Меркурий"}),f.jsx(gn,{children:"Счетчик электроэнергии Меркурий 230"}),f.jsx(yn,{children:"Трехфазный многотарифный счетчик с возможностью программирования"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"4 500 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Меркурий"}),f.jsx(gn,{children:"Счетчик электроэнергии Меркурий 201.5"}),f.jsx(yn,{children:"Однофазный однотарифный счетчик с жидкокристаллическим дисплеем"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"2 100 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Энергомера"}),f.jsx(gn,{children:"Счетчик электроэнергии Энергомера CE301"}),f.jsx(yn,{children:"Трехфазный однотарифный счетчик с механическим отсчетным устройством"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"3 800 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Нева"}),f.jsx(gn,{children:"Счетчик электроэнергии Нева 303"}),f.jsx(yn,{children:"Трехфазный многотарифный счетчик с жидкокристаллическим дисплеем"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"4 200 ₽"}),f.jsx(xn,{children:"Купить"})]})]})}),f.jsx(pn,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.7},children:f.jsxs(mn,{children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem",borderRadius:"8px"},children:"Меркурий"}),f.jsx(gn,{children:"Счетчик электроэнергии Меркурий 231"}),f.jsx(yn,{children:"Трехфазный многотарифный счетчик с возможностью дистанционного снятия показаний"})]}),f.jsxs("div",{children:[f.jsx(vn,{children:"5 000 ₽"}),f.jsx(xn,{children:"Купить"})]})]})})]})]}),f.jsxs(vj,{children:[f.jsx(no,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:"Наши преимущества"}),f.jsxs(xj,{children:[f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[f.jsx(Ir,{children:f.jsx(G,{icon:cE})}),f.jsx(zr,{children:"Гарантия качества"}),f.jsx(Dr,{children:"Все счетчики проходят тщательную проверку и имеют официальную гарантию производителя сроком до 5 лет"})]}),f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[f.jsx(Ir,{children:f.jsx(G,{icon:wE})}),f.jsx(zr,{children:"Быстрая доставка"}),f.jsx(Dr,{children:"Доставляем заказы в течение 1-2 дней по всей России с возможностью отслеживания в реальном времени"})]}),f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[f.jsx(Ir,{children:f.jsx(G,{icon:z0})}),f.jsx(zr,{children:"Профессиональный монтаж"}),f.jsx(Dr,{children:"Опытные специалисты выполнят установку и настройку счетчиков с соблюдением всех норм безопасности"})]}),f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[f.jsx(Ir,{children:f.jsx(G,{icon:I0})}),f.jsx(zr,{children:"Поддержка 24/7"}),f.jsx(Dr,{children:"Круглосуточная техническая поддержка и консультации по всем вопросам от квалифицированных специалистов"})]}),f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:[f.jsx(Ir,{children:f.jsx(G,{icon:SE})}),f.jsx(zr,{children:"Выгодные цены"}),f.jsx(Dr,{children:"Регулярные акции, скидки и специальные предложения для постоянных клиентов и оптовых закупок"})]}),f.jsxs(Gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[f.jsx(Ir,{children:f.jsx(G,{icon:aE})}),f.jsx(zr,{children:"Официальный дилер"}),f.jsx(Dr,{children:"Работаем напрямую с производителями, предоставляем все необходимые документы и сертификаты"})]})]})]}),f.jsxs(el,{children:[f.jsx(no,{children:"Как мы работаем"}),f.jsxs(wj,{children:[f.jsxs(Tn,{children:[f.jsx("div",{style:{position:"absolute",top:"-10px",left:"-5px",fontSize:"140px",fontWeight:"bold",color:"rgba(47, 84, 131, 0.08)",zIndex:0,lineHeight:1,pointerEvents:"none"},children:"1"}),f.jsx(Yi,{children:f.jsx(G,{icon:oE})}),f.jsx(Gi,{children:"Заявка"}),f.jsx(Ki,{children:"Оставьте заявку на сайте или позвоните нам"})]}),f.jsxs(Tn,{children:[f.jsx("div",{style:{position:"absolute",top:"-10px",left:"-5px",fontSize:"140px",fontWeight:"bold",color:"rgba(47, 84, 131, 0.08)",zIndex:0,lineHeight:1,pointerEvents:"none"},children:"2"}),f.jsx(Yi,{children:f.jsx(G,{icon:iE})}),f.jsx(Gi,{children:"Консультация"}),f.jsx(Ki,{children:"Получите консультацию от наших специалистов"})]}),f.jsxs(Tn,{children:[f.jsx("div",{style:{position:"absolute",top:"-10px",left:"-5px",fontSize:"140px",fontWeight:"bold",color:"rgba(47, 84, 131, 0.08)",zIndex:0,lineHeight:1,pointerEvents:"none"},children:"3"}),f.jsx(Yi,{children:f.jsx(G,{icon:pE})}),f.jsx(Gi,{children:"Доставка"}),f.jsx(Ki,{children:"Доставим оборудование в удобное для вас время"})]}),f.jsxs(Tn,{children:[f.jsx("div",{style:{position:"absolute",top:"-10px",left:"-5px",fontSize:"140px",fontWeight:"bold",color:"rgba(47, 84, 131, 0.08)",zIndex:0,lineHeight:1,pointerEvents:"none"},children:"4"}),f.jsx(Yi,{children:f.jsx(G,{icon:z0})}),f.jsx(Gi,{children:"Установка"}),f.jsx(Ki,{children:"Профессиональный монтаж и настройка оборудования"})]}),f.jsxs(Tn,{children:[f.jsx("div",{style:{position:"absolute",top:"-10px",left:"-5px",fontSize:"140px",fontWeight:"bold",color:"rgba(47, 84, 131, 0.08)",zIndex:0,lineHeight:1,pointerEvents:"none"},children:"5"}),f.jsx(Yi,{children:f.jsx(G,{icon:I0})}),f.jsx(Gi,{children:"Поддержка"}),f.jsx(Ki,{children:"Обеспечиваем техническую поддержку 24/7"})]})]})]}),f.jsxs(el,{children:[f.jsx(no,{children:"Как нас найти"}),f.jsx("div",{style:{width:"100%",height:"400px",background:"#f0f0f0",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5rem",color:"#2f5483"},children:f.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c&source=constructor&ll=37.6173,55.7558&z=10",width:"100%",height:"100%",frameBorder:"0",style:{border:"none"}})})]})]})}const Ms=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
`,bj=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
`,$0=S.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,B0=S.span`
  color: #999;
`,kj=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Cj=S.div`
  position: relative;
  overflow: hidden;
`,Pj=S(B.div)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  transform-style: preserve-3d;
`,Ej=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2;
`,jj=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Tj=S.div`
  color: #2f5483;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Aj=S(B.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Lj=S.div`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,Rj=S.p`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`,Oj=S(B.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`,Mj=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,Ij=S.div`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,zj=S(B.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`,Dj=S.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,Nj=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Fj=S.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,_j=S.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
`,Vj=S.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,$j=S.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,Bj=S.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
`,Uj=S.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #1e3a5f 0%, #2f5483 100%);
    transform: translateY(-2px);
  }
`,Wj=S(B.div)`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #f8f9fa;
  padding: 3rem 0;
`,Hj=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Yj=S.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,Gj=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Is=S.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2f5483;
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.1);
  }
`,zs=S.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Ds=S.div`
  width: 40px;
  height: 40px;
  background: #2f5483;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-right: 1rem;
`,Ns=S.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Fs=S.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`,Kj=S.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,Xj=S.div`
  position: relative;
  z-index: 2;
`,Qj=S.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`,Zj=S.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,qj=S(B.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,Jj=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,eT=S.div`
  font-size: 1.2rem;
  color: #999;
  text-decoration: line-through;
`,U0=S.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
`,tT=S.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`,nT=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,rT=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,ot=S.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,st=S.span`
  color: #666;
  font-weight: 500;
`,at=S.span`
  color: #333;
  font-weight: 600;
`,iT=S.div`
  margin-bottom: 1.5rem;
`,oT=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,sT=S.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,aT=S.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #555;
  
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background: #2f5483;
    border-radius: 50%;
    flex-shrink: 0;
  }
`,lT=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,cT=S(B.button)`
  flex: 1;
  background: #2f5483;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,uT=S(B.button)`
  flex: 1;
  background: transparent;
  color: #2f5483;
  border: 2px solid #2f5483;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,fT=S.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2f5483;
`,dT=S.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,hT=S.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`,pT=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #2f5483;
`,W0=S.div`
  text-align: center;
  padding: 3rem;
  color: #dc3545;
`;function mT(){const{id:e}=n5(),t=vl(),[n,r]=b.useState(null),[i,o]=b.useState([]),[s,a]=b.useState(!0),[l,c]=b.useState(null),d=b.useRef(null),{scrollYProgress:h}=N6({target:d,offset:["start start","end start"]}),u=Rr(h,[0,1],[0,-100]),y=Rr(h,[0,1],[0,-50]),v=Rr(h,[0,1],[0,-30]),x=Rr(h,[0,1],[0,-20]),k=Rr(h,[0,1],[0,-15]),g=Rr(h,[0,1],[0,-10]);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{try{const T=await(await fetch("/catalog-products.json")).json();o(T);const O=T.find(I=>I.id===parseInt(e));O?r(O):c("Товар не найден")}catch{c("Ошибка загрузки товара")}finally{a(!1)}})()},[e]);const p=()=>{alert("Товар добавлен в корзину!")},m=()=>{alert("Свяжитесь с нами по телефону: +7 (999) 123-45-67")},w=()=>{alert("Для заказа под заказ свяжитесь с нами по телефону: +7 (999) 123-45-67")},C=()=>!n||!i.length?[]:i.filter(E=>E.id!==n.id&&(E.brand===n.brand||E.category===n.category)).slice(0,4);return s?f.jsx(Ms,{children:f.jsx(pT,{children:"Загрузка товара..."})}):l?f.jsx(Ms,{children:f.jsxs(W0,{children:[f.jsx("h2",{children:"Ошибка"}),f.jsx("p",{children:l}),f.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})}):n?f.jsxs(Ms,{ref:d,children:[f.jsxs(bj,{children:[f.jsx($0,{onClick:()=>t("/"),children:"Главная"}),f.jsx(B0,{children:"/"}),f.jsx($0,{onClick:()=>t("/catalog"),children:"Каталог"}),f.jsx(B0,{children:"/"}),f.jsx("span",{children:n.name})]}),f.jsxs(kj,{children:[f.jsx(Cj,{children:f.jsxs(Pj,{style:{y:u},children:[f.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"3rem",fontWeight:"bold"},children:n.brand}),n.discount&&f.jsxs(Ej,{children:["-",n.discount,"%"]})]})}),f.jsxs(jj,{children:[f.jsx(Tj,{children:n.category}),f.jsx(Aj,{style:{y},children:n.name}),f.jsx(Lj,{children:n.type}),f.jsx(Rj,{style:{y:v},children:n.description}),f.jsx(Jj,{children:n.originalPrice?f.jsxs(f.Fragment,{children:[f.jsxs(eT,{children:[n.originalPrice.toLocaleString()," ₽"]}),f.jsxs(U0,{children:[n.price.toLocaleString()," ₽"]})]}):f.jsxs(U0,{children:[n.price.toLocaleString()," ₽"]})}),f.jsxs(lT,{children:[f.jsxs(cT,{onClick:p,whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx(G,{icon:gh}),"Добавить в корзину"]}),f.jsxs(uT,{onClick:m,whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx(G,{icon:Lf}),"Связаться с менеджером"]})]}),f.jsxs(tT,{children:[f.jsx(nT,{children:"Технические характеристики"}),f.jsxs(rT,{children:[n.specifications.phases&&n.specifications.phases!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Фазы:"}),f.jsx(at,{children:n.specifications.phases})]}),n.specifications.voltage&&n.specifications.voltage!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Напряжение:"}),f.jsx(at,{children:n.specifications.voltage})]}),n.specifications.current&&n.specifications.current!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Ток:"}),f.jsx(at,{children:n.specifications.current})]}),n.specifications.accuracy&&n.specifications.accuracy!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Класс точности:"}),f.jsx(at,{children:n.specifications.accuracy})]}),n.specifications.tariffs&&n.specifications.tariffs!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Тарифность:"}),f.jsx(at,{children:n.specifications.tariffs})]}),n.specifications.energy_type&&n.specifications.energy_type!=="нет"&&f.jsxs(ot,{children:[f.jsx(st,{children:"Тип энергии:"}),f.jsx(at,{children:n.specifications.energy_type})]}),n.category==="Устройства сбора и передачи данных"&&f.jsxs(f.Fragment,{children:[n.specifications.power_3phase&&f.jsxs(ot,{children:[f.jsx(st,{children:"Питание 3-фазное:"}),f.jsx(at,{children:n.specifications.power_3phase})]}),n.specifications.power_1phase&&f.jsxs(ot,{children:[f.jsx(st,{children:"Питание 1-фазное:"}),f.jsx(at,{children:n.specifications.power_1phase})]}),n.specifications.consumption&&f.jsxs(ot,{children:[f.jsx(st,{children:"Потребление:"}),f.jsx(at,{children:n.specifications.consumption})]}),n.specifications.dimensions&&f.jsxs(ot,{children:[f.jsx(st,{children:"Размеры:"}),f.jsx(at,{children:n.specifications.dimensions})]}),n.specifications.temperature&&f.jsxs(ot,{children:[f.jsx(st,{children:"Температура:"}),f.jsx(at,{children:n.specifications.temperature})]}),n.specifications.supported_meters&&f.jsxs(ot,{children:[f.jsx(st,{children:"Поддерживаемые счетчики:"}),f.jsx(at,{children:n.specifications.supported_meters})]})]})]})]}),f.jsxs(iT,{children:[f.jsx(oT,{children:"Особенности"}),f.jsx(sT,{children:n.features.map((j,E)=>f.jsx(aT,{children:j},E))})]}),f.jsxs(fT,{children:[f.jsx(dT,{children:"Доставка и гарантия"}),f.jsx(hT,{children:"Бесплатная доставка по Москве и области. Гарантия 2 года. Возможна установка и настройка оборудования."})]})]})]}),n.fullDescription&&f.jsxs(Oj,{style:{y:x},children:[f.jsx(Mj,{children:"Подробное описание"}),f.jsx(Ij,{children:n.fullDescription.split(`
`).map((j,E)=>f.jsx("p",{children:j},E))})]}),(()=>{const j=C();return j.length>0&&f.jsxs(zj,{style:{y:k},children:[f.jsx(Dj,{children:"Похожие товары"}),f.jsx(Nj,{children:j.map(E=>f.jsxs(Fj,{onClick:()=>t(`/product/${E.id}`),children:[f.jsx(_j,{children:f.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"2rem",fontWeight:"bold",borderRadius:"8px"},children:E.brand})}),f.jsx(Vj,{children:E.name}),f.jsx($j,{children:E.type}),f.jsxs(Bj,{children:[E.price.toLocaleString()," ₽"]}),f.jsx(Uj,{children:"Подробнее"})]},E.id))})]})})(),f.jsx(Wj,{style:{y:g},children:f.jsxs(Hj,{children:[f.jsx(Yj,{children:"Почему Стройэнергетика?"}),f.jsxs(Gj,{children:[f.jsxs(Is,{children:[f.jsxs(zs,{children:[f.jsx(Ds,{children:"01"}),f.jsx(Ns,{children:"20+ лет опыта"})]}),f.jsx(Fs,{children:"Более двух десятилетий работы в энергетической отрасли. Мы знаем все о современных технологиях и требованиях рынка."})]}),f.jsxs(Is,{children:[f.jsxs(zs,{children:[f.jsx(Ds,{children:"02"}),f.jsx(Ns,{children:"Сертификация ГОСТ"})]}),f.jsx(Fs,{children:"Все оборудование соответствует российским стандартам качества. Полная сертификация и соответствие требованиям."})]}),f.jsxs(Is,{children:[f.jsxs(zs,{children:[f.jsx(Ds,{children:"03"}),f.jsx(Ns,{children:"Гарантия 16 лет"})]}),f.jsx(Fs,{children:"Максимальная гарантия на оборудование. Мы уверены в качестве наших товаров и защищаем ваши инвестиции."})]}),f.jsxs(Is,{children:[f.jsxs(zs,{children:[f.jsx(Ds,{children:"04"}),f.jsx(Ns,{children:"Техподдержка 24/7"})]}),f.jsx(Fs,{children:"Круглосуточная техническая поддержка. Наши специалисты всегда готовы помочь с любыми вопросами."})]})]})]})}),f.jsx(Kj,{children:f.jsxs(Xj,{children:[f.jsx(Qj,{children:"Не нашли нужный товар в каталоге?"}),f.jsx(Zj,{children:"Организуем под заказ! Мы работаем с ведущими производителями и можем найти любой товар, который вам нужен."}),f.jsx(qj,{onClick:w,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Заказать"})]})})]}):f.jsx(Ms,{children:f.jsxs(W0,{children:[f.jsx("h2",{children:"Товар не найден"}),f.jsx("p",{children:"Запрашиваемый товар не существует"}),f.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})})}const gT=S.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
`,yT=S.div`
  color: #000000;
  font-family: 'Inter', sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 100px;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,vT=S(B.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(47, 84, 131, 0.1);
  z-index: 1000;
`,xT=S.div`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,wT=S.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,ST=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`,bT=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    flex-direction: column;
    gap: 1rem;
  }
`;S.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;const kT=S(B.div)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000000;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    width: auto;
  }
`,CT=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,PT=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ET=S.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  
  &:hover {
    color: #1a2f4b;
  }
`,jT=S(B.button)`
  background: #2f5483;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`,TT=S(B.button)`
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-1px);
  }
`,Uc=S(B.a)`
  color: #666666;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: #2f5483;
  }
`,AT=S.div`
  position: relative;
  display: inline-block;
`,LT=S(B.div)`
  color: #666666;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:hover {
    color: #2f5483;
  }
`,RT=S.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.3s ease;
  padding: 0.5rem 0;
`,Nr=S.a`
  display: block;
  padding: 0.7rem 1rem;
  color: #333333;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 400;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    color: #2f5483;
  }
`;S.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;S(B.a)`
  color: #000000;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.8rem;
  cursor: pointer;
  opacity: 0.9;
  letter-spacing: 0.5px;
  text-transform: none;
  display: flex;
  align-items: center;
  height: 100%;
  
  &:hover {
    opacity: 1;
  }
`;const OT=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,MT=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
`,IT=S.div`
  position: relative;
  display: inline-block;
`,zT=S(B.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2f5483;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`,DT=S.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 0.5rem;
  min-width: 400px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: translateY(${e=>e.isOpen?"0":"-10px"});
  transition: all 0.3s ease;
`,_s=S.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(47, 84, 131, 0.1);
  }
`,NT=S.div`
  position: relative;
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`,FT=S.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333333;
  background: #ffffff;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`,_T=S.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 0.9rem;
`,VT=S.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  display: ${e=>e.show?"block":"none"};
`,$T=S.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(47, 84, 131, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(47, 84, 131, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
`,BT=S.div`
  font-weight: 500;
  color: #2f5483;
  margin-bottom: 0.2rem;
`,UT=S.div`
  font-size: 0.8rem;
  color: #666666;
`;S.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  height: 100%;

  @media (max-width: 1200px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;S.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`;S(B.button)`
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000000;
  font-size: 0.75rem;
  font-weight: 300;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 35px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;S.div`
  font-size: 0.9rem;
  color: #2f5483;
  display: flex;
  align-items: center;
`;S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;S.span`
  font-weight: 400;
`;S.div`
  font-size: 0.9rem;
  color: #2f5483;
  display: flex;
  align-items: center;
`;const WT=S(B.button)`
  position: relative;
  background: #2f5483;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`,HT=S.div`
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
`,YT=S.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`,GT=S.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`,KT=S.footer`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  padding: 6rem 2rem 4rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`,XT=S.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Vs=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,QT=S.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`,ZT=S.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,qT=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Wc=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(5px);

    svg {
      color: #ffffff;
    }
  }
`,JT=S.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Hc=S.div`
  width: 40px;
  height: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
`,Yc=S.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.3));
  }
`,Ve=S.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  
  &:before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #ffffff;
    padding-left: 20px;
    
    &:before {
      opacity: 1;
      left: 0;
    }
  }
`,e7=S.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`,t7=S.div`
  display: flex;
  gap: 1rem;
`,$s=S.a`
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
  }
`;function n7(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,o]=b.useState(""),[s,a]=b.useState(!1),[l,c]=b.useState([]);b.useEffect(()=>{fetch("/catalog-products.json").then(h=>h.json()).then(h=>c(h)).catch(h=>console.error("Ошибка загрузки товаров:",h))},[]),b.useEffect(()=>{const h=u=>{!u.target.closest(".catalog-dropdown")&&e&&t(!1)};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[e]);const d=()=>{if(!i.trim()||i.length<2)return[];const h=i.toLowerCase().trim(),u=[];return l.forEach(v=>{v.name.toLowerCase().includes(h)&&u.push({type:"name",title:v.name,details:`${v.brand} • ${v.category}`,product:v})}),l.forEach(v=>{v.brand.toLowerCase().includes(h)&&u.push({type:"brand",title:v.brand,details:`${v.name} • ${v.category}`,product:v})}),u.filter((v,x,k)=>x===k.findIndex(g=>g.title===v.title&&g.type===v.type)).slice(0,6)};return f.jsx(B5,{children:f.jsx(gT,{children:f.jsxs(yT,{children:[f.jsxs(vT,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[f.jsx(xT,{children:f.jsxs(ST,{children:[f.jsxs(CT,{children:[f.jsx(kT,{children:f.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})}),f.jsxs(ET,{href:"tel:+79991234567",children:[f.jsx(G,{icon:Lf}),"+7 (999) 123-45-67"]})]}),f.jsxs(PT,{children:[f.jsxs(AT,{children:[f.jsxs(LT,{whileHover:{scale:1.02},onClick:()=>r(!n),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:["Клиентам",f.jsx(G,{icon:xE,style:{fontSize:"0.7rem"}})]}),f.jsxs(RT,{isOpen:n,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[f.jsx(Nr,{href:"/services/consultation",children:"Консультация"}),f.jsx(Nr,{href:"/services/delivery",children:"Доставка"}),f.jsx(Nr,{href:"/services/meter-verification",children:"Поверка счетчиков электрической энергии"}),f.jsx(Nr,{href:"/services/transformer-verification",children:"Поверка трансформаторов тока (напряжения)"}),f.jsx(Nr,{href:"/services/installation",children:"Монтаж оборудования"}),f.jsx(Nr,{href:"/services/commissioning",children:"Наладка"})]})]}),f.jsx(Uc,{whileHover:{scale:1.02},children:"Прайс-лист"}),f.jsx(Uc,{whileHover:{scale:1.02},children:"Информация"}),f.jsx(Uc,{whileHover:{scale:1.02},children:"Контакты"}),f.jsx(TT,{whileHover:{scale:1.02},children:"Заказать звонок"}),f.jsx(jT,{whileHover:{scale:1.02},children:"Отправить заявку"})]})]})}),f.jsx(wT,{children:f.jsxs(bT,{children:[f.jsx(OT,{children:f.jsxs(IT,{className:"catalog-dropdown",children:[f.jsxs(zT,{onClick:()=>t(!e),whileHover:{scale:1.02},children:["Каталог товаров",f.jsx(G,{icon:D0})]}),f.jsxs(DT,{isOpen:e,children:[f.jsx(_s,{href:"/catalog",children:"Все товары"}),f.jsx(_s,{href:"/catalog?category=Однофазные счетчики",children:"Однофазные счетчики"}),f.jsx(_s,{href:"/catalog?category=Трехфазные счетчики",children:"Трехфазные счетчики"}),f.jsx(_s,{href:"/catalog?category=Устройства сбора и передачи данных",children:"Устройства сбора и передачи данных"})]})]})}),f.jsxs(MT,{children:[f.jsxs(NT,{children:[f.jsx(_T,{children:f.jsx(G,{icon:D0})}),f.jsx(FT,{type:"text",placeholder:"Поиск товаров...",value:i,onChange:h=>{o(h.target.value),a(h.target.value.length>=2)},onFocus:()=>{i.length>=2&&a(!0)},onBlur:()=>{setTimeout(()=>a(!1),200)}}),f.jsx(VT,{show:s,children:d().map((h,u)=>f.jsxs($T,{onClick:()=>{o(h.title),a(!1)},children:[f.jsx(BT,{children:h.title}),f.jsx(UT,{children:h.details})]},`header-${h.type}-${u}`))})]}),f.jsxs(WT,{whileHover:{scale:1.02},children:[f.jsx(HT,{children:f.jsx(G,{icon:gh})}),f.jsx(YT,{children:"Корзина"}),f.jsx(GT,{children:"3"})]})]})]})})]}),f.jsxs(y5,{children:[f.jsx(ea,{path:"/",element:f.jsx(Sj,{})}),f.jsx(ea,{path:"/catalog",element:f.jsx(aj,{})}),f.jsx(ea,{path:"/product/:id",element:f.jsx(mT,{})})]}),f.jsxs(KT,{children:[f.jsxs(XT,{children:[f.jsxs(Vs,{children:[f.jsx(QT,{children:f.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})}),f.jsx(ZT,{children:"Официальный дилер счетчиков электроэнергии с гарантией качества и профессиональной установкой. Работаем с 2010 года."}),f.jsxs(qT,{children:[f.jsxs(Wc,{children:[f.jsx(G,{icon:Lf}),"+7 (999) 123-45-67"]}),f.jsxs(Wc,{children:[f.jsx(G,{icon:fE}),"info@stroienergetika.ru"]}),f.jsxs(Wc,{children:[f.jsx(G,{icon:gE}),"Пн-Пт: 9:00 - 18:00"]})]}),f.jsxs(JT,{children:[f.jsx(Hc,{children:"VISA"}),f.jsx(Hc,{children:"MC"}),f.jsx(Hc,{children:"MIR"})]})]}),f.jsxs(Vs,{children:[f.jsx(Yc,{children:"О компании"}),f.jsx(Ve,{href:"#",children:"О нас"}),f.jsx(Ve,{href:"#",children:"Сертификаты"}),f.jsx(Ve,{href:"#",children:"Новости"}),f.jsx(Ve,{href:"#",children:"Вакансии"}),f.jsx(Ve,{href:"#",children:"Партнеры"})]}),f.jsxs(Vs,{children:[f.jsx(Yc,{children:"Помощь"}),f.jsx(Ve,{href:"#",children:"Доставка"}),f.jsx(Ve,{href:"#",children:"Оплата"}),f.jsx(Ve,{href:"#",children:"FAQ"}),f.jsx(Ve,{href:"#",children:"Возврат"}),f.jsx(Ve,{href:"#",children:"Гарантия"})]}),f.jsxs(Vs,{children:[f.jsx(Yc,{children:"Контакты"}),f.jsx(Ve,{href:"#",children:"Москва, ул. Примерная, 123"}),f.jsx(Ve,{href:"#",children:"Санкт-Петербург, пр. Невский, 45"}),f.jsx(Ve,{href:"#",children:"Екатеринбург, ул. Ленина, 78"}),f.jsx(Ve,{href:"#",children:"Казань, ул. Баумана, 12"})]})]}),f.jsxs(e7,{children:[f.jsx("div",{children:"© 2024 Стройэнергетика. Все права защищены."}),f.jsxs(t7,{children:[f.jsx($s,{href:"#",children:f.jsx(G,{icon:kE})}),f.jsx($s,{href:"#",children:f.jsx(G,{icon:yE})}),f.jsx($s,{href:"#",children:f.jsx(G,{icon:sE})}),f.jsx($s,{href:"#",children:f.jsx(G,{icon:bE})})]})]})]})]})})})}Gc.createRoot(document.getElementById("root")).render(f.jsx(Vt.StrictMode,{children:f.jsx(n7,{})}));
