(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function E3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L3={exports:{}},tf={},I3={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),cw=Symbol.for("react.portal"),dw=Symbol.for("react.fragment"),uw=Symbol.for("react.strict_mode"),fw=Symbol.for("react.profiler"),pw=Symbol.for("react.provider"),mw=Symbol.for("react.context"),hw=Symbol.for("react.forward_ref"),gw=Symbol.for("react.suspense"),xw=Symbol.for("react.memo"),yw=Symbol.for("react.lazy"),Og=Symbol.iterator;function vw(e){return e===null||typeof e!="object"?null:(e=Og&&e[Og]||e["@@iterator"],typeof e=="function"?e:null)}var M3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A3=Object.assign,$3={};function aa(e,t,n){this.props=e,this.context=t,this.refs=$3,this.updater=n||M3}aa.prototype.isReactComponent={};aa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};aa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function R3(){}R3.prototype=aa.prototype;function Fh(e,t,n){this.props=e,this.context=t,this.refs=$3,this.updater=n||M3}var Vh=Fh.prototype=new R3;Vh.constructor=Fh;A3(Vh,aa.prototype);Vh.isPureReactComponent=!0;var Ng=Array.isArray,O3=Object.prototype.hasOwnProperty,_h={current:null},N3={key:!0,ref:!0,__self:!0,__source:!0};function D3(e,t,n){var i,o={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)O3.call(t,i)&&!N3.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];o.children=d}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:nl,type:e,key:a,ref:s,props:o,_owner:_h.current}}function bw(e,t){return{$$typeof:nl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===nl}function ww(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dg=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ww(""+e.key):t.toString(36)}function _d(e,t,n,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case nl:case cw:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+Wf(s,0):i,Ng(o)?(n="",e!=null&&(n=e.replace(Dg,"$&/")+"/"),_d(o,t,n,"",function(u){return u})):o!=null&&(Bh(o)&&(o=bw(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Dg,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",Ng(e))for(var c=0;c<e.length;c++){a=e[c];var d=i+Wf(a,c);s+=_d(a,t,n,d,o)}else if(d=vw(e),typeof d=="function")for(e=d.call(e),c=0;!(a=e.next()).done;)a=a.value,d=i+Wf(a,c++),s+=_d(a,t,n,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Cl(e,t,n){if(e==null)return e;var i=[],o=0;return _d(e,i,"","",function(a){return t.call(n,a,o++)}),i}function jw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Bd={transition:null},kw={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Bd,ReactCurrentOwner:_h};function F3(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Cl,forEach:function(e,t,n){Cl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cl(e,function(){t++}),t},toArray:function(e){return Cl(e,function(t){return t})||[]},only:function(e){if(!Bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=aa;te.Fragment=dw;te.Profiler=fw;te.PureComponent=Fh;te.StrictMode=uw;te.Suspense=gw;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;te.act=F3;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=A3({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=_h.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)O3.call(t,d)&&!N3.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:nl,type:e.type,key:o,ref:a,props:i,_owner:s}};te.createContext=function(e){return e={$$typeof:mw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pw,_context:e},e.Consumer=e};te.createElement=D3;te.createFactory=function(e){var t=D3.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:hw,render:e}};te.isValidElement=Bh;te.lazy=function(e){return{$$typeof:yw,_payload:{_status:-1,_result:e},_init:jw}};te.memo=function(e,t){return{$$typeof:xw,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Bd.transition;Bd.transition={};try{e()}finally{Bd.transition=t}};te.unstable_act=F3;te.useCallback=function(e,t){return ct.current.useCallback(e,t)};te.useContext=function(e){return ct.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};te.useEffect=function(e,t){return ct.current.useEffect(e,t)};te.useId=function(){return ct.current.useId()};te.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return ct.current.useMemo(e,t)};te.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};te.useRef=function(e){return ct.current.useRef(e)};te.useState=function(e){return ct.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return ct.current.useTransition()};te.version="18.3.1";I3.exports=te;var b=I3.exports;const lt=E3(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=b,Sw=Symbol.for("react.element"),zw=Symbol.for("react.fragment"),Pw=Object.prototype.hasOwnProperty,Tw=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ew={key:!0,ref:!0,__self:!0,__source:!0};function V3(e,t,n){var i,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)Pw.call(t,i)&&!Ew.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Sw,type:e,key:a,ref:s,props:o,_owner:Tw.current}}tf.Fragment=zw;tf.jsx=V3;tf.jsxs=V3;L3.exports=tf;var r=L3.exports,Jp={},_3={exports:{}},St={},B3={exports:{}},H3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,F){var B=$.length;$.push(F);e:for(;0<B;){var V=B-1>>>1,Z=$[V];if(0<o(Z,F))$[V]=F,$[B]=Z,B=V;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var F=$[0],B=$.pop();if(B!==F){$[0]=B;e:for(var V=0,Z=$.length,rt=Z>>>1;V<rt;){var Ae=2*(V+1)-1,Qe=$[Ae],se=Ae+1,qe=$[se];if(0>o(Qe,B))se<Z&&0>o(qe,Qe)?($[V]=qe,$[se]=B,V=se):($[V]=Qe,$[Ae]=B,V=Ae);else if(se<Z&&0>o(qe,B))$[V]=qe,$[se]=B,V=se;else break e}}return F}function o($,F){var B=$.sortIndex-F.sortIndex;return B!==0?B:$.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],f=1,p=null,m=3,x=!1,j=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=$)i(u),F.sortIndex=F.expirationTime,t(d,F);else break;F=n(u)}}function S($){if(w=!1,y($),!j)if(n(d)!==null)j=!0,U(P);else{var F=n(u);F!==null&&ce(S,F.startTime-$)}}function P($,F){j=!1,w&&(w=!1,h(I),I=-1),x=!0;var B=m;try{for(y(F),p=n(d);p!==null&&(!(p.expirationTime>F)||$&&!ne());){var V=p.callback;if(typeof V=="function"){p.callback=null,m=p.priorityLevel;var Z=V(p.expirationTime<=F);F=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(d)&&i(d),y(F)}else i(d);p=n(d)}if(p!==null)var rt=!0;else{var Ae=n(u);Ae!==null&&ce(S,Ae.startTime-F),rt=!1}return rt}finally{p=null,m=B,x=!1}}var E=!1,T=null,I=-1,R=5,D=-1;function ne(){return!(e.unstable_now()-D<R)}function q(){if(T!==null){var $=e.unstable_now();D=$;var F=!0;try{F=T(!0,$)}finally{F?he():(E=!1,T=null)}}else E=!1}var he;if(typeof g=="function")he=function(){g(q)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,J=G.port2;G.port1.onmessage=q,he=function(){J.postMessage(null)}}else he=function(){k(q,0)};function U($){T=$,E||(E=!0,he())}function ce($,F){I=k(function(){$(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){j||x||(j=!0,U(P))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var B=m;m=F;try{return $()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,F){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var B=m;m=$;try{return F()}finally{m=B}},e.unstable_scheduleCallback=function($,F,B){var V=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?V+B:V):B=V,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,$={id:f++,callback:F,priorityLevel:$,startTime:B,expirationTime:Z,sortIndex:-1},B>V?($.sortIndex=B,t(u,$),n(d)===null&&$===n(u)&&(w?(h(I),I=-1):w=!0,ce(S,B-V))):($.sortIndex=Z,t(d,$),j||x||(j=!0,U(P))),$},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function($){var F=m;return function(){var B=m;m=F;try{return $.apply(this,arguments)}finally{m=B}}}})(H3);B3.exports=H3;var Lw=B3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=b,kt=Lw;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U3=new Set,Es={};function Ii(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for(Es[e]=t,e=0;e<t.length;e++)U3.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=Object.prototype.hasOwnProperty,Mw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},Vg={};function Aw(e){return em.call(Vg,e)?!0:em.call(Fg,e)?!1:Mw.test(e)?Vg[e]=!0:(Fg[e]=!0,!1)}function $w(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rw(e,t,n,i){if(t===null||typeof t>"u"||$w(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,i,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Uh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hh,Uh);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hh,Uh);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hh,Uh);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wh(e,t,n,i){var o=Xe.hasOwnProperty(t)?Xe[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rw(t,n,o,i)&&(n=null),i||o===null?Aw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Yn=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),mo=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),W3=Symbol.for("react.provider"),Y3=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),G3=Symbol.for("react.offscreen"),_g=Symbol.iterator;function ga(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Yf;function rs(e){if(Yf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yf=t&&t[1]||""}return`
`+Yf+e}var Gf=!1;function Xf(e,t){if(!e||Gf)return"";Gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=i.stack.split(`
`),s=o.length-1,c=a.length-1;1<=s&&0<=c&&o[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==a[c]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{Gf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rs(e):""}function Ow(e){switch(e.tag){case 5:return rs(e.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 2:case 15:return e=Xf(e.type,!1),e;case 11:return e=Xf(e.type.render,!1),e;case 1:return e=Xf(e.type,!0),e;default:return""}}function im(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ho:return"Fragment";case mo:return"Portal";case tm:return"Profiler";case Yh:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Y3:return(e.displayName||"Context")+".Consumer";case W3:return(e._context.displayName||"Context")+".Provider";case Gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xh:return t=e.displayName||null,t!==null?t:im(e.type)||"Memo";case xr:t=e._payload,e=e._init;try{return im(e(t))}catch{}}return null}function Nw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return im(t);case 8:return t===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X3(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dw(e){var t=X3(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zl(e){e._valueTracker||(e._valueTracker=Dw(e))}function Q3(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=X3(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function om(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bg(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Dr(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function q3(e,t){t=t.checked,t!=null&&Wh(e,"checked",t,!1)}function am(e,t){q3(e,t);var n=Dr(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sm(e,t.type,n):t.hasOwnProperty("defaultValue")&&sm(e,t.type,Dr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sm(e,t,n){(t!=="number"||pu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var is=Array.isArray;function Ao(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Dr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function lm(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ug(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(is(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dr(n)}}function K3(e,t){var n=Dr(t.value),i=Dr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Wg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Z3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cm(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Z3(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pl,J3=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ls(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fw=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(e){Fw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ds[t]=ds[e]})});function ey(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ds.hasOwnProperty(e)&&ds[e]?(""+t).trim():t+"px"}function ty(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=ey(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var Vw=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dm(e,t){if(t){if(Vw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function um(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=null;function Qh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pm=null,$o=null,Ro=null;function Yg(e){if(e=ol(e)){if(typeof pm!="function")throw Error(A(280));var t=e.stateNode;t&&(t=sf(t),pm(e.stateNode,e.type,t))}}function ny(e){$o?Ro?Ro.push(e):Ro=[e]:$o=e}function ry(){if($o){var e=$o,t=Ro;if(Ro=$o=null,Yg(e),t)for(e=0;e<t.length;e++)Yg(t[e])}}function iy(e,t){return e(t)}function oy(){}var Qf=!1;function ay(e,t,n){if(Qf)return e(t,n);Qf=!0;try{return iy(e,t,n)}finally{Qf=!1,($o!==null||Ro!==null)&&(oy(),ry())}}function Is(e,t){var n=e.stateNode;if(n===null)return null;var i=sf(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var mm=!1;if(Fn)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){mm=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{mm=!1}function _w(e,t,n,i,o,a,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var us=!1,mu=null,hu=!1,hm=null,Bw={onError:function(e){us=!0,mu=e}};function Hw(e,t,n,i,o,a,s,c,d){us=!1,mu=null,_w.apply(Bw,arguments)}function Uw(e,t,n,i,o,a,s,c,d){if(Hw.apply(this,arguments),us){if(us){var u=mu;us=!1,mu=null}else throw Error(A(198));hu||(hu=!0,hm=u)}}function Mi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gg(e){if(Mi(e)!==e)throw Error(A(188))}function Ww(e){var t=e.alternate;if(!t){if(t=Mi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Gg(o),e;if(a===i)return Gg(o),t;a=a.sibling}throw Error(A(188))}if(n.return!==i.return)n=o,i=a;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==i)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function ly(e){return e=Ww(e),e!==null?cy(e):null}function cy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cy(e);if(t!==null)return t;e=e.sibling}return null}var dy=kt.unstable_scheduleCallback,Xg=kt.unstable_cancelCallback,Yw=kt.unstable_shouldYield,Gw=kt.unstable_requestPaint,Ie=kt.unstable_now,Xw=kt.unstable_getCurrentPriorityLevel,qh=kt.unstable_ImmediatePriority,uy=kt.unstable_UserBlockingPriority,gu=kt.unstable_NormalPriority,Qw=kt.unstable_LowPriority,fy=kt.unstable_IdlePriority,nf=null,xn=null;function qw(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(nf,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Jw,Kw=Math.log,Zw=Math.LN2;function Jw(e){return e>>>=0,e===0?32:31-(Kw(e)/Zw|0)|0}var Tl=64,El=4194304;function os(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xu(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~o;c!==0?i=os(c):(a&=s,a!==0&&(i=os(a)))}else s=n&~o,s!==0?i=os(s):a!==0&&(i=os(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-qt(t),o=1<<n,i|=e[n],t&=~o;return i}function ej(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tj(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-qt(a),c=1<<s,d=o[s];d===-1?(!(c&n)||c&i)&&(o[s]=ej(c,t)):d<=t&&(e.expiredLanes|=c),a&=~c}}function gm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function py(){var e=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),e}function qf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=n}function nj(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qt(n),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~a}}function Kh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-qt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var fe=0;function my(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hy,Zh,gy,xy,yy,xm=!1,Ll=[],Pr=null,Tr=null,Er=null,Ms=new Map,As=new Map,wr=[],rj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(e,t){switch(e){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ms.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(t.pointerId)}}function ya(e,t,n,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ol(t),t!==null&&Zh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ij(e,t,n,i,o){switch(t){case"focusin":return Pr=ya(Pr,e,t,n,i,o),!0;case"dragenter":return Tr=ya(Tr,e,t,n,i,o),!0;case"mouseover":return Er=ya(Er,e,t,n,i,o),!0;case"pointerover":var a=o.pointerId;return Ms.set(a,ya(Ms.get(a)||null,e,t,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,As.set(a,ya(As.get(a)||null,e,t,n,i,o)),!0}return!1}function vy(e){var t=pi(e.target);if(t!==null){var n=Mi(t);if(n!==null){if(t=n.tag,t===13){if(t=sy(n),t!==null){e.blockedOn=t,yy(e.priority,function(){gy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ym(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fm=i,n.target.dispatchEvent(i),fm=null}else return t=ol(n),t!==null&&Zh(t),e.blockedOn=n,!1;t.shift()}return!0}function qg(e,t,n){Hd(e)&&n.delete(t)}function oj(){xm=!1,Pr!==null&&Hd(Pr)&&(Pr=null),Tr!==null&&Hd(Tr)&&(Tr=null),Er!==null&&Hd(Er)&&(Er=null),Ms.forEach(qg),As.forEach(qg)}function va(e,t){e.blockedOn===t&&(e.blockedOn=null,xm||(xm=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,oj)))}function $s(e){function t(o){return va(o,e)}if(0<Ll.length){va(Ll[0],e);for(var n=1;n<Ll.length;n++){var i=Ll[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Pr!==null&&va(Pr,e),Tr!==null&&va(Tr,e),Er!==null&&va(Er,e),Ms.forEach(t),As.forEach(t),n=0;n<wr.length;n++)i=wr[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)vy(n),n.blockedOn===null&&wr.shift()}var Oo=Yn.ReactCurrentBatchConfig,yu=!0;function aj(e,t,n,i){var o=fe,a=Oo.transition;Oo.transition=null;try{fe=1,Jh(e,t,n,i)}finally{fe=o,Oo.transition=a}}function sj(e,t,n,i){var o=fe,a=Oo.transition;Oo.transition=null;try{fe=4,Jh(e,t,n,i)}finally{fe=o,Oo.transition=a}}function Jh(e,t,n,i){if(yu){var o=ym(e,t,n,i);if(o===null)a0(e,t,i,vu,n),Qg(e,i);else if(ij(o,e,t,n,i))i.stopPropagation();else if(Qg(e,i),t&4&&-1<rj.indexOf(e)){for(;o!==null;){var a=ol(o);if(a!==null&&hy(a),a=ym(e,t,n,i),a===null&&a0(e,t,i,vu,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else a0(e,t,i,null,n)}}var vu=null;function ym(e,t,n,i){if(vu=null,e=Qh(i),e=pi(e),e!==null)if(t=Mi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vu=e,null}function by(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xw()){case qh:return 1;case uy:return 4;case gu:case Qw:return 16;case fy:return 536870912;default:return 16}default:return 16}}var Cr=null,e1=null,Ud=null;function wy(){if(Ud)return Ud;var e,t=e1,n=t.length,i,o="value"in Cr?Cr.value:Cr.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===o[a-i];i++);return Ud=o.slice(e,1<i?1-i:void 0)}function Wd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function Kg(){return!1}function zt(e){function t(n,i,o,a,s){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Il:Kg,this.isPropagationStopped=Kg,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},t1=zt(sa),il=Pe({},sa,{view:0,detail:0}),lj=zt(il),Kf,Zf,ba,rf=Pe({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:n1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(Kf=e.screenX-ba.screenX,Zf=e.screenY-ba.screenY):Zf=Kf=0,ba=e),Kf)},movementY:function(e){return"movementY"in e?e.movementY:Zf}}),Zg=zt(rf),cj=Pe({},rf,{dataTransfer:0}),dj=zt(cj),uj=Pe({},il,{relatedTarget:0}),Jf=zt(uj),fj=Pe({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),pj=zt(fj),mj=Pe({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hj=zt(mj),gj=Pe({},sa,{data:0}),Jg=zt(gj),xj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vj[e])?!!t[e]:!1}function n1(){return bj}var wj=Pe({},il,{key:function(e){if(e.key){var t=xj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:n1,charCode:function(e){return e.type==="keypress"?Wd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jj=zt(wj),kj=Pe({},rf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ex=zt(kj),Cj=Pe({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:n1}),Sj=zt(Cj),zj=Pe({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pj=zt(zj),Tj=Pe({},rf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ej=zt(Tj),Lj=[9,13,27,32],r1=Fn&&"CompositionEvent"in window,fs=null;Fn&&"documentMode"in document&&(fs=document.documentMode);var Ij=Fn&&"TextEvent"in window&&!fs,jy=Fn&&(!r1||fs&&8<fs&&11>=fs),tx=String.fromCharCode(32),nx=!1;function ky(e,t){switch(e){case"keyup":return Lj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var go=!1;function Mj(e,t){switch(e){case"compositionend":return Cy(t);case"keypress":return t.which!==32?null:(nx=!0,tx);case"textInput":return e=t.data,e===tx&&nx?null:e;default:return null}}function Aj(e,t){if(go)return e==="compositionend"||!r1&&ky(e,t)?(e=wy(),Ud=e1=Cr=null,go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jy&&t.locale!=="ko"?null:t.data;default:return null}}var $j={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$j[e.type]:t==="textarea"}function Sy(e,t,n,i){ny(i),t=bu(t,"onChange"),0<t.length&&(n=new t1("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ps=null,Rs=null;function Rj(e){Oy(e,0)}function of(e){var t=vo(e);if(Q3(t))return e}function Oj(e,t){if(e==="change")return t}var zy=!1;if(Fn){var e0;if(Fn){var t0="oninput"in document;if(!t0){var ix=document.createElement("div");ix.setAttribute("oninput","return;"),t0=typeof ix.oninput=="function"}e0=t0}else e0=!1;zy=e0&&(!document.documentMode||9<document.documentMode)}function ox(){ps&&(ps.detachEvent("onpropertychange",Py),Rs=ps=null)}function Py(e){if(e.propertyName==="value"&&of(Rs)){var t=[];Sy(t,Rs,e,Qh(e)),ay(Rj,t)}}function Nj(e,t,n){e==="focusin"?(ox(),ps=t,Rs=n,ps.attachEvent("onpropertychange",Py)):e==="focusout"&&ox()}function Dj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return of(Rs)}function Fj(e,t){if(e==="click")return of(t)}function Vj(e,t){if(e==="input"||e==="change")return of(t)}function _j(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:_j;function Os(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!em.call(t,o)||!en(e[o],t[o]))return!1}return!0}function ax(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sx(e,t){var n=ax(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ax(n)}}function Ty(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ty(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ey(){for(var e=window,t=pu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pu(e.document)}return t}function i1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bj(e){var t=Ey(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ty(n.ownerDocument.documentElement,n)){if(i!==null&&i1(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=sx(n,a);var s=sx(n,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hj=Fn&&"documentMode"in document&&11>=document.documentMode,xo=null,vm=null,ms=null,bm=!1;function lx(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bm||xo==null||xo!==pu(i)||(i=xo,"selectionStart"in i&&i1(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ms&&Os(ms,i)||(ms=i,i=bu(vm,"onSelect"),0<i.length&&(t=new t1("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=xo)))}function Ml(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yo={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},n0={},Ly={};Fn&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function af(e){if(n0[e])return n0[e];if(!yo[e])return e;var t=yo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ly)return n0[e]=t[n];return e}var Iy=af("animationend"),My=af("animationiteration"),Ay=af("animationstart"),$y=af("transitionend"),Ry=new Map,cx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){Ry.set(e,t),Ii(t,[e])}for(var r0=0;r0<cx.length;r0++){var i0=cx[r0],Uj=i0.toLowerCase(),Wj=i0[0].toUpperCase()+i0.slice(1);Yr(Uj,"on"+Wj)}Yr(Iy,"onAnimationEnd");Yr(My,"onAnimationIteration");Yr(Ay,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr($y,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yj=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function dx(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Uw(i,t,void 0,e),e.currentTarget=null}function Oy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==a&&o.isPropagationStopped())break e;dx(o,c,u),a=d}else for(s=0;s<i.length;s++){if(c=i[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==a&&o.isPropagationStopped())break e;dx(o,c,u),a=d}}}if(hu)throw e=hm,hu=!1,hm=null,e}function xe(e,t){var n=t[Sm];n===void 0&&(n=t[Sm]=new Set);var i=e+"__bubble";n.has(i)||(Ny(t,e,2,!1),n.add(i))}function o0(e,t,n){var i=0;t&&(i|=4),Ny(n,e,i,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function Ns(e){if(!e[Al]){e[Al]=!0,U3.forEach(function(n){n!=="selectionchange"&&(Yj.has(n)||o0(n,!1,e),o0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,o0("selectionchange",!1,t))}}function Ny(e,t,n,i){switch(by(t)){case 1:var o=aj;break;case 4:o=sj;break;default:o=Jh}n=o.bind(null,t,n,e),o=void 0,!mm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function a0(e,t,n,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;c!==null;){if(s=pi(c),s===null)return;if(d=s.tag,d===5||d===6){i=a=s;continue e}c=c.parentNode}}i=i.return}ay(function(){var u=a,f=Qh(n),p=[];e:{var m=Ry.get(e);if(m!==void 0){var x=t1,j=e;switch(e){case"keypress":if(Wd(n)===0)break e;case"keydown":case"keyup":x=jj;break;case"focusin":j="focus",x=Jf;break;case"focusout":j="blur",x=Jf;break;case"beforeblur":case"afterblur":x=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sj;break;case Iy:case My:case Ay:x=pj;break;case $y:x=Pj;break;case"scroll":x=lj;break;case"wheel":x=Ej;break;case"copy":case"cut":case"paste":x=hj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ex}var w=(t&4)!==0,k=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var g=u,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Is(g,h),S!=null&&w.push(Ds(g,S,y)))),k)break;g=g.return}0<w.length&&(m=new x(m,j,null,n,f),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==fm&&(j=n.relatedTarget||n.fromElement)&&(pi(j)||j[Vn]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(j=n.relatedTarget||n.toElement,x=u,j=j?pi(j):null,j!==null&&(k=Mi(j),j!==k||j.tag!==5&&j.tag!==6)&&(j=null)):(x=null,j=u),x!==j)){if(w=Zg,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=ex,S="onPointerLeave",h="onPointerEnter",g="pointer"),k=x==null?m:vo(x),y=j==null?m:vo(j),m=new w(S,g+"leave",x,n,f),m.target=k,m.relatedTarget=y,S=null,pi(f)===u&&(w=new w(h,g+"enter",j,n,f),w.target=y,w.relatedTarget=k,S=w),k=S,x&&j)t:{for(w=x,h=j,g=0,y=w;y;y=Oi(y))g++;for(y=0,S=h;S;S=Oi(S))y++;for(;0<g-y;)w=Oi(w),g--;for(;0<y-g;)h=Oi(h),y--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=Oi(w),h=Oi(h)}w=null}else w=null;x!==null&&ux(p,m,x,w,!1),j!==null&&k!==null&&ux(p,k,j,w,!0)}}e:{if(m=u?vo(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var P=Oj;else if(rx(m))if(zy)P=Vj;else{P=Dj;var E=Nj}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Fj);if(P&&(P=P(e,u))){Sy(p,P,n,f);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&sm(m,"number",m.value)}switch(E=u?vo(u):window,e){case"focusin":(rx(E)||E.contentEditable==="true")&&(xo=E,vm=u,ms=null);break;case"focusout":ms=vm=xo=null;break;case"mousedown":bm=!0;break;case"contextmenu":case"mouseup":case"dragend":bm=!1,lx(p,n,f);break;case"selectionchange":if(Hj)break;case"keydown":case"keyup":lx(p,n,f)}var T;if(r1)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else go?ky(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(jy&&n.locale!=="ko"&&(go||I!=="onCompositionStart"?I==="onCompositionEnd"&&go&&(T=wy()):(Cr=f,e1="value"in Cr?Cr.value:Cr.textContent,go=!0)),E=bu(u,I),0<E.length&&(I=new Jg(I,e,null,n,f),p.push({event:I,listeners:E}),T?I.data=T:(T=Cy(n),T!==null&&(I.data=T)))),(T=Ij?Mj(e,n):Aj(e,n))&&(u=bu(u,"onBeforeInput"),0<u.length&&(f=new Jg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=T))}Oy(p,t)})}function Ds(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bu(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Is(e,n),a!=null&&i.unshift(Ds(e,a,o)),a=Is(e,t),a!=null&&i.push(Ds(e,a,o))),e=e.return}return i}function Oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ux(e,t,n,i,o){for(var a=t._reactName,s=[];n!==null&&n!==i;){var c=n,d=c.alternate,u=c.stateNode;if(d!==null&&d===i)break;c.tag===5&&u!==null&&(c=u,o?(d=Is(n,a),d!=null&&s.unshift(Ds(n,d,c))):o||(d=Is(n,a),d!=null&&s.push(Ds(n,d,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gj=/\r\n?/g,Xj=/\u0000|\uFFFD/g;function fx(e){return(typeof e=="string"?e:""+e).replace(Gj,`
`).replace(Xj,"")}function $l(e,t,n){if(t=fx(t),fx(e)!==t&&n)throw Error(A(425))}function wu(){}var wm=null,jm=null;function km(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cm=typeof setTimeout=="function"?setTimeout:void 0,Qj=typeof clearTimeout=="function"?clearTimeout:void 0,px=typeof Promise=="function"?Promise:void 0,qj=typeof queueMicrotask=="function"?queueMicrotask:typeof px<"u"?function(e){return px.resolve(null).then(e).catch(Kj)}:Cm;function Kj(e){setTimeout(function(){throw e})}function s0(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),$s(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);$s(t)}function Lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),mn="__reactFiber$"+la,Fs="__reactProps$"+la,Vn="__reactContainer$"+la,Sm="__reactEvents$"+la,Zj="__reactListeners$"+la,Jj="__reactHandles$"+la;function pi(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mx(e);e!==null;){if(n=e[mn])return n;e=mx(e)}return t}e=n,n=e.parentNode}return null}function ol(e){return e=e[mn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function sf(e){return e[Fs]||null}var zm=[],bo=-1;function Gr(e){return{current:e}}function ve(e){0>bo||(e.current=zm[bo],zm[bo]=null,bo--)}function me(e,t){bo++,zm[bo]=e.current,e.current=t}var Fr={},tt=Gr(Fr),mt=Gr(!1),ki=Fr;function Bo(e,t){var n=e.type.contextTypes;if(!n)return Fr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ht(e){return e=e.childContextTypes,e!=null}function ju(){ve(mt),ve(tt)}function hx(e,t,n){if(tt.current!==Fr)throw Error(A(168));me(tt,t),me(mt,n)}function Dy(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(A(108,Nw(e)||"Unknown",o));return Pe({},n,i)}function ku(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,ki=tt.current,me(tt,e),me(mt,mt.current),!0}function gx(e,t,n){var i=e.stateNode;if(!i)throw Error(A(169));n?(e=Dy(e,t,ki),i.__reactInternalMemoizedMergedChildContext=e,ve(mt),ve(tt),me(tt,e)):ve(mt),me(mt,n)}var Ln=null,lf=!1,l0=!1;function Fy(e){Ln===null?Ln=[e]:Ln.push(e)}function e7(e){lf=!0,Fy(e)}function Xr(){if(!l0&&Ln!==null){l0=!0;var e=0,t=fe;try{var n=Ln;for(fe=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Ln=null,lf=!1}catch(o){throw Ln!==null&&(Ln=Ln.slice(e+1)),dy(qh,Xr),o}finally{fe=t,l0=!1}}return null}var wo=[],jo=0,Cu=null,Su=0,Nt=[],Dt=0,Ci=null,Mn=1,An="";function li(e,t){wo[jo++]=Su,wo[jo++]=Cu,Cu=e,Su=t}function Vy(e,t,n){Nt[Dt++]=Mn,Nt[Dt++]=An,Nt[Dt++]=Ci,Ci=e;var i=Mn;e=An;var o=32-qt(i)-1;i&=~(1<<o),n+=1;var a=32-qt(t)+o;if(30<a){var s=o-o%5;a=(i&(1<<s)-1).toString(32),i>>=s,o-=s,Mn=1<<32-qt(t)+o|n<<o|i,An=a+e}else Mn=1<<a|n<<o|i,An=e}function o1(e){e.return!==null&&(li(e,1),Vy(e,1,0))}function a1(e){for(;e===Cu;)Cu=wo[--jo],wo[jo]=null,Su=wo[--jo],wo[jo]=null;for(;e===Ci;)Ci=Nt[--Dt],Nt[Dt]=null,An=Nt[--Dt],Nt[Dt]=null,Mn=Nt[--Dt],Nt[Dt]=null}var jt=null,wt=null,we=!1,Xt=null;function _y(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xx(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,wt=Lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ci!==null?{id:Mn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,wt=null,!0):!1;default:return!1}}function Pm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tm(e){if(we){var t=wt;if(t){var n=t;if(!xx(e,t)){if(Pm(e))throw Error(A(418));t=Lr(n.nextSibling);var i=jt;t&&xx(e,t)?_y(i,n):(e.flags=e.flags&-4097|2,we=!1,jt=e)}}else{if(Pm(e))throw Error(A(418));e.flags=e.flags&-4097|2,we=!1,jt=e}}}function yx(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Rl(e){if(e!==jt)return!1;if(!we)return yx(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!km(e.type,e.memoizedProps)),t&&(t=wt)){if(Pm(e))throw By(),Error(A(418));for(;t;)_y(e,t),t=Lr(t.nextSibling)}if(yx(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=Lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=jt?Lr(e.stateNode.nextSibling):null;return!0}function By(){for(var e=wt;e;)e=Lr(e.nextSibling)}function Ho(){wt=jt=null,we=!1}function s1(e){Xt===null?Xt=[e]:Xt.push(e)}var t7=Yn.ReactCurrentBatchConfig;function wa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var i=n.stateNode}if(!i)throw Error(A(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=o.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ol(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vx(e){var t=e._init;return t(e._payload)}function Hy(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=$r(h,g),h.index=0,h.sibling=null,h}function a(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function c(h,g,y,S){return g===null||g.tag!==6?(g=h0(y,h.mode,S),g.return=h,g):(g=o(g,y),g.return=h,g)}function d(h,g,y,S){var P=y.type;return P===ho?f(h,g,y.props.children,S,y.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xr&&vx(P)===g.type)?(S=o(g,y.props),S.ref=wa(h,g,y),S.return=h,S):(S=Zd(y.type,y.key,y.props,null,h.mode,S),S.ref=wa(h,g,y),S.return=h,S)}function u(h,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=g0(y,h.mode,S),g.return=h,g):(g=o(g,y.children||[]),g.return=h,g)}function f(h,g,y,S,P){return g===null||g.tag!==7?(g=bi(y,h.mode,S,P),g.return=h,g):(g=o(g,y),g.return=h,g)}function p(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=h0(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:return y=Zd(g.type,g.key,g.props,null,h.mode,y),y.ref=wa(h,null,g),y.return=h,y;case mo:return g=g0(g,h.mode,y),g.return=h,g;case xr:var S=g._init;return p(h,S(g._payload),y)}if(is(g)||ga(g))return g=bi(g,h.mode,y,null),g.return=h,g;Ol(h,g)}return null}function m(h,g,y,S){var P=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:c(h,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return y.key===P?d(h,g,y,S):null;case mo:return y.key===P?u(h,g,y,S):null;case xr:return P=y._init,m(h,g,P(y._payload),S)}if(is(y)||ga(y))return P!==null?null:f(h,g,y,S,null);Ol(h,y)}return null}function x(h,g,y,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,c(g,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sl:return h=h.get(S.key===null?y:S.key)||null,d(g,h,S,P);case mo:return h=h.get(S.key===null?y:S.key)||null,u(g,h,S,P);case xr:var E=S._init;return x(h,g,y,E(S._payload),P)}if(is(S)||ga(S))return h=h.get(y)||null,f(g,h,S,P,null);Ol(g,S)}return null}function j(h,g,y,S){for(var P=null,E=null,T=g,I=g=0,R=null;T!==null&&I<y.length;I++){T.index>I?(R=T,T=null):R=T.sibling;var D=m(h,T,y[I],S);if(D===null){T===null&&(T=R);break}e&&T&&D.alternate===null&&t(h,T),g=a(D,g,I),E===null?P=D:E.sibling=D,E=D,T=R}if(I===y.length)return n(h,T),we&&li(h,I),P;if(T===null){for(;I<y.length;I++)T=p(h,y[I],S),T!==null&&(g=a(T,g,I),E===null?P=T:E.sibling=T,E=T);return we&&li(h,I),P}for(T=i(h,T);I<y.length;I++)R=x(T,h,I,y[I],S),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?I:R.key),g=a(R,g,I),E===null?P=R:E.sibling=R,E=R);return e&&T.forEach(function(ne){return t(h,ne)}),we&&li(h,I),P}function w(h,g,y,S){var P=ga(y);if(typeof P!="function")throw Error(A(150));if(y=P.call(y),y==null)throw Error(A(151));for(var E=P=null,T=g,I=g=0,R=null,D=y.next();T!==null&&!D.done;I++,D=y.next()){T.index>I?(R=T,T=null):R=T.sibling;var ne=m(h,T,D.value,S);if(ne===null){T===null&&(T=R);break}e&&T&&ne.alternate===null&&t(h,T),g=a(ne,g,I),E===null?P=ne:E.sibling=ne,E=ne,T=R}if(D.done)return n(h,T),we&&li(h,I),P;if(T===null){for(;!D.done;I++,D=y.next())D=p(h,D.value,S),D!==null&&(g=a(D,g,I),E===null?P=D:E.sibling=D,E=D);return we&&li(h,I),P}for(T=i(h,T);!D.done;I++,D=y.next())D=x(T,h,I,D.value,S),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?I:D.key),g=a(D,g,I),E===null?P=D:E.sibling=D,E=D);return e&&T.forEach(function(q){return t(h,q)}),we&&li(h,I),P}function k(h,g,y,S){if(typeof y=="object"&&y!==null&&y.type===ho&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:e:{for(var P=y.key,E=g;E!==null;){if(E.key===P){if(P=y.type,P===ho){if(E.tag===7){n(h,E.sibling),g=o(E,y.props.children),g.return=h,h=g;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xr&&vx(P)===E.type){n(h,E.sibling),g=o(E,y.props),g.ref=wa(h,E,y),g.return=h,h=g;break e}n(h,E);break}else t(h,E);E=E.sibling}y.type===ho?(g=bi(y.props.children,h.mode,S,y.key),g.return=h,h=g):(S=Zd(y.type,y.key,y.props,null,h.mode,S),S.ref=wa(h,g,y),S.return=h,h=S)}return s(h);case mo:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=o(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=g0(y,h.mode,S),g.return=h,h=g}return s(h);case xr:return E=y._init,k(h,g,E(y._payload),S)}if(is(y))return j(h,g,y,S);if(ga(y))return w(h,g,y,S);Ol(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=o(g,y),g.return=h,h=g):(n(h,g),g=h0(y,h.mode,S),g.return=h,h=g),s(h)):n(h,g)}return k}var Uo=Hy(!0),Uy=Hy(!1),zu=Gr(null),Pu=null,ko=null,l1=null;function c1(){l1=ko=Pu=null}function d1(e){var t=zu.current;ve(zu),e._currentValue=t}function Em(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function No(e,t){Pu=e,l1=ko=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(l1!==e)if(e={context:e,memoizedValue:t,next:null},ko===null){if(Pu===null)throw Error(A(308));ko=e,Pu.dependencies={lanes:0,firstContext:e}}else ko=ko.next=e;return t}var mi=null;function u1(e){mi===null?mi=[e]:mi.push(e)}function Wy(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,u1(t)):(n.next=o.next,o.next=n),t.interleaved=n,_n(e,i)}function _n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yr=!1;function f1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,_n(e,n)}return o=i.interleaved,o===null?(t.next=t,u1(i)):(t.next=o.next,o.next=t),i.interleaved=t,_n(e,n)}function Yd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kh(e,n)}}function bx(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tu(e,t,n,i){var o=e.updateQueue;yr=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?a=u:s.next=u,s=d;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==s&&(c===null?f.firstBaseUpdate=u:c.next=u,f.lastBaseUpdate=d))}if(a!==null){var p=o.baseState;s=0,f=u=d=null,c=a;do{var m=c.lane,x=c.eventTime;if((i&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,w=c;switch(m=t,x=n,w.tag){case 1:if(j=w.payload,typeof j=="function"){p=j.call(x,p,m);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=w.payload,m=typeof j=="function"?j.call(x,p,m):j,m==null)break e;p=Pe({},p,m);break e;case 2:yr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[c]:m.push(c))}else x={eventTime:x,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(u=f=x,d=p):f=f.next=x,s|=m;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;m=c,c=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(f===null&&(d=p),o.baseState=d,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);zi|=s,e.lanes=s,e.memoizedState=p}}function wx(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(A(191,o));o.call(i)}}}var al={},yn=Gr(al),Vs=Gr(al),_s=Gr(al);function hi(e){if(e===al)throw Error(A(174));return e}function p1(e,t){switch(me(_s,t),me(Vs,e),me(yn,al),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cm(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cm(t,e)}ve(yn),me(yn,t)}function Wo(){ve(yn),ve(Vs),ve(_s)}function Gy(e){hi(_s.current);var t=hi(yn.current),n=cm(t,e.type);t!==n&&(me(Vs,e),me(yn,n))}function m1(e){Vs.current===e&&(ve(yn),ve(Vs))}var ke=Gr(0);function Eu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var c0=[];function h1(){for(var e=0;e<c0.length;e++)c0[e]._workInProgressVersionPrimary=null;c0.length=0}var Gd=Yn.ReactCurrentDispatcher,d0=Yn.ReactCurrentBatchConfig,Si=0,Se=null,Fe=null,_e=null,Lu=!1,hs=!1,Bs=0,n7=0;function Ke(){throw Error(A(321))}function g1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function x1(e,t,n,i,o,a){if(Si=a,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gd.current=e===null||e.memoizedState===null?a7:s7,e=n(i,o),hs){a=0;do{if(hs=!1,Bs=0,25<=a)throw Error(A(301));a+=1,_e=Fe=null,t.updateQueue=null,Gd.current=l7,e=n(i,o)}while(hs)}if(Gd.current=Iu,t=Fe!==null&&Fe.next!==null,Si=0,_e=Fe=Se=null,Lu=!1,t)throw Error(A(300));return e}function y1(){var e=Bs!==0;return Bs=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Se.memoizedState=_e=e:_e=_e.next=e,_e}function Bt(){if(Fe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=_e===null?Se.memoizedState:_e.next;if(t!==null)_e=t,Fe=e;else{if(e===null)throw Error(A(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},_e===null?Se.memoizedState=_e=e:_e=_e.next=e}return _e}function Hs(e,t){return typeof t=="function"?t(e):t}function u0(e){var t=Bt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var i=Fe,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var c=s=null,d=null,u=a;do{var f=u.lane;if((Si&f)===f)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=p,s=i):d=d.next=p,Se.lanes|=f,zi|=f}u=u.next}while(u!==null&&u!==a);d===null?s=i:d.next=c,en(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=d,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Se.lanes|=a,zi|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function f0(e){var t=Bt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);en(a,t.memoizedState)||(ft=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Xy(){}function Qy(e,t){var n=Se,i=Bt(),o=t(),a=!en(i.memoizedState,o);if(a&&(i.memoizedState=o,ft=!0),i=i.queue,v1(Zy.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Us(9,Ky.bind(null,n,i,o,t),void 0,null),He===null)throw Error(A(349));Si&30||qy(n,t,o)}return o}function qy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ky(e,t,n,i){t.value=n,t.getSnapshot=i,Jy(t)&&ev(e)}function Zy(e,t,n){return n(function(){Jy(t)&&ev(e)})}function Jy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function ev(e){var t=_n(e,1);t!==null&&Kt(t,e,1,-1)}function jx(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:e},t.queue=e,e=e.dispatch=o7.bind(null,Se,e),[t.memoizedState,e]}function Us(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function tv(){return Bt().memoizedState}function Xd(e,t,n,i){var o=un();Se.flags|=e,o.memoizedState=Us(1|t,n,void 0,i===void 0?null:i)}function cf(e,t,n,i){var o=Bt();i=i===void 0?null:i;var a=void 0;if(Fe!==null){var s=Fe.memoizedState;if(a=s.destroy,i!==null&&g1(i,s.deps)){o.memoizedState=Us(t,n,a,i);return}}Se.flags|=e,o.memoizedState=Us(1|t,n,a,i)}function kx(e,t){return Xd(8390656,8,e,t)}function v1(e,t){return cf(2048,8,e,t)}function nv(e,t){return cf(4,2,e,t)}function rv(e,t){return cf(4,4,e,t)}function iv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ov(e,t,n){return n=n!=null?n.concat([e]):null,cf(4,4,iv.bind(null,t,e),n)}function b1(){}function av(e,t){var n=Bt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&g1(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sv(e,t){var n=Bt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&g1(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function lv(e,t,n){return Si&21?(en(n,t)||(n=py(),Se.lanes|=n,zi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function r7(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var i=d0.transition;d0.transition={};try{e(!1),t()}finally{fe=n,d0.transition=i}}function cv(){return Bt().memoizedState}function i7(e,t,n){var i=Ar(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dv(e))uv(t,n);else if(n=Wy(e,t,n,i),n!==null){var o=st();Kt(n,e,i,o),fv(n,t,i)}}function o7(e,t,n){var i=Ar(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dv(e))uv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,n);if(o.hasEagerState=!0,o.eagerState=c,en(c,s)){var d=t.interleaved;d===null?(o.next=o,u1(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=Wy(e,t,o,i),n!==null&&(o=st(),Kt(n,e,i,o),fv(n,t,i))}}function dv(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function uv(e,t){hs=Lu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fv(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kh(e,n)}}var Iu={readContext:_t,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},a7={readContext:_t,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:kx,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xd(4194308,4,iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xd(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xd(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=un();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=i7.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:jx,useDebugValue:b1,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=jx(!1),t=e[0];return e=r7.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Se,o=un();if(we){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),He===null)throw Error(A(349));Si&30||qy(i,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,kx(Zy.bind(null,i,a,e),[e]),i.flags|=2048,Us(9,Ky.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=un(),t=He.identifierPrefix;if(we){var n=An,i=Mn;n=(i&~(1<<32-qt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s7={readContext:_t,useCallback:av,useContext:_t,useEffect:v1,useImperativeHandle:ov,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:sv,useReducer:u0,useRef:tv,useState:function(){return u0(Hs)},useDebugValue:b1,useDeferredValue:function(e){var t=Bt();return lv(t,Fe.memoizedState,e)},useTransition:function(){var e=u0(Hs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Xy,useSyncExternalStore:Qy,useId:cv,unstable_isNewReconciler:!1},l7={readContext:_t,useCallback:av,useContext:_t,useEffect:v1,useImperativeHandle:ov,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:sv,useReducer:f0,useRef:tv,useState:function(){return f0(Hs)},useDebugValue:b1,useDeferredValue:function(e){var t=Bt();return Fe===null?t.memoizedState=e:lv(t,Fe.memoizedState,e)},useTransition:function(){var e=f0(Hs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Xy,useSyncExternalStore:Qy,useId:cv,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var df={isMounted:function(e){return(e=e._reactInternals)?Mi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=st(),o=Ar(e),a=Rn(i,o);a.payload=t,n!=null&&(a.callback=n),t=Ir(e,a,o),t!==null&&(Kt(t,e,o,i),Yd(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=st(),o=Ar(e),a=Rn(i,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ir(e,a,o),t!==null&&(Kt(t,e,o,i),Yd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),i=Ar(e),o=Rn(n,i);o.tag=2,t!=null&&(o.callback=t),t=Ir(e,o,i),t!==null&&(Kt(t,e,i,n),Yd(t,e,i))}};function Cx(e,t,n,i,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!Os(n,i)||!Os(o,a):!0}function pv(e,t,n){var i=!1,o=Fr,a=t.contextType;return typeof a=="object"&&a!==null?a=_t(a):(o=ht(t)?ki:tt.current,i=t.contextTypes,a=(i=i!=null)?Bo(e,o):Fr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=df,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sx(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&df.enqueueReplaceState(t,t.state,null)}function Im(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},f1(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=_t(a):(a=ht(t)?ki:tt.current,o.context=Bo(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Lm(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&df.enqueueReplaceState(o,o.state,null),Tu(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yo(e,t){try{var n="",i=t;do n+=Ow(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function p0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c7=typeof WeakMap=="function"?WeakMap:Map;function mv(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Au||(Au=!0,Bm=i),Mm(e,t)},n}function hv(e,t,n){n=Rn(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){Mm(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Mm(e,t),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zx(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new c7;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=k7.bind(null,e,t,n),t.then(e,e))}function Px(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tx(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,Ir(n,t,1))),n.lanes|=1),e)}var d7=Yn.ReactCurrentOwner,ft=!1;function at(e,t,n,i){t.child=e===null?Uy(t,null,n,i):Uo(t,e.child,n,i)}function Ex(e,t,n,i,o){n=n.render;var a=t.ref;return No(t,o),i=x1(e,t,n,i,a,o),n=y1(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bn(e,t,o)):(we&&n&&o1(t),t.flags|=1,at(e,t,i,o),t.child)}function Lx(e,t,n,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!T1(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,gv(e,t,a,i,o)):(e=Zd(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(s,i)&&e.ref===t.ref)return Bn(e,t,o)}return t.flags|=1,e=$r(a,i),e.ref=t.ref,e.return=t,t.child=e}function gv(e,t,n,i,o){if(e!==null){var a=e.memoizedProps;if(Os(a,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,Bn(e,t,o)}return Am(e,t,n,i,o)}function xv(e,t,n){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(So,vt),vt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(So,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,me(So,vt),vt|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,me(So,vt),vt|=i;return at(e,t,o,n),t.child}function yv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Am(e,t,n,i,o){var a=ht(n)?ki:tt.current;return a=Bo(t,a),No(t,o),n=x1(e,t,n,i,a,o),i=y1(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bn(e,t,o)):(we&&i&&o1(t),t.flags|=1,at(e,t,n,o),t.child)}function Ix(e,t,n,i,o){if(ht(n)){var a=!0;ku(t)}else a=!1;if(No(t,o),t.stateNode===null)Qd(e,t),pv(t,n,i),Im(t,n,i,o),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var d=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=ht(n)?ki:tt.current,u=Bo(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||d!==u)&&Sx(t,s,i,u),yr=!1;var m=t.memoizedState;s.state=m,Tu(t,i,s,o),d=t.memoizedState,c!==i||m!==d||mt.current||yr?(typeof f=="function"&&(Lm(t,n,f,i),d=t.memoizedState),(c=yr||Cx(t,n,c,i,m,d,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=u,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Yy(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Yt(t.type,c),s.props=u,p=t.pendingProps,m=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=_t(d):(d=ht(n)?ki:tt.current,d=Bo(t,d));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==p||m!==d)&&Sx(t,s,i,d),yr=!1,m=t.memoizedState,s.state=m,Tu(t,i,s,o);var j=t.memoizedState;c!==p||m!==j||mt.current||yr?(typeof x=="function"&&(Lm(t,n,x,i),j=t.memoizedState),(u=yr||Cx(t,n,u,i,m,j,d)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,j,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,j,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),s.props=i,s.state=j,s.context=d,i=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return $m(e,t,n,i,a,o)}function $m(e,t,n,i,o,a){yv(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&gx(t,n,!1),Bn(e,t,a);i=t.stateNode,d7.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Uo(t,e.child,null,a),t.child=Uo(t,null,c,a)):at(e,t,c,a),t.memoizedState=i.state,o&&gx(t,n,!0),t.child}function vv(e){var t=e.stateNode;t.pendingContext?hx(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hx(e,t.context,!1),p1(e,t.containerInfo)}function Mx(e,t,n,i,o){return Ho(),s1(o),t.flags|=256,at(e,t,n,i),t.child}var Rm={dehydrated:null,treeContext:null,retryLane:0};function Om(e){return{baseLanes:e,cachePool:null,transitions:null}}function bv(e,t,n){var i=t.pendingProps,o=ke.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(ke,o&1),e===null)return Tm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=pf(s,i,0,null),e=bi(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Om(n),t.memoizedState=Rm,e):w1(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return u7(e,t,s,i,c,o,n);if(a){a=i.fallback,s=t.mode,o=e.child,c=o.sibling;var d={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=$r(o,d),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=$r(c,a):(a=bi(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?Om(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Rm,i}return a=e.child,e=a.sibling,i=$r(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function w1(e,t){return t=pf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nl(e,t,n,i){return i!==null&&s1(i),Uo(t,e.child,null,n),e=w1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u7(e,t,n,i,o,a,s){if(n)return t.flags&256?(t.flags&=-257,i=p0(Error(A(422))),Nl(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=pf({mode:"visible",children:i.children},o,0,null),a=bi(a,o,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&Uo(t,e.child,null,s),t.child.memoizedState=Om(s),t.memoizedState=Rm,a);if(!(t.mode&1))return Nl(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,a=Error(A(419)),i=p0(a,i,void 0),Nl(e,t,s,i)}if(c=(s&e.childLanes)!==0,ft||c){if(i=He,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,_n(e,o),Kt(i,e,o,-1))}return P1(),i=p0(Error(A(421))),Nl(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=C7.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,wt=Lr(o.nextSibling),jt=t,we=!0,Xt=null,e!==null&&(Nt[Dt++]=Mn,Nt[Dt++]=An,Nt[Dt++]=Ci,Mn=e.id,An=e.overflow,Ci=t),t=w1(t,i.children),t.flags|=4096,t)}function Ax(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Em(e.return,t,n)}function m0(e,t,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function wv(e,t,n){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(at(e,t,i.children,n),i=ke.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ax(e,n,t);else if(e.tag===19)Ax(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(me(ke,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eu(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),m0(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eu(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}m0(t,!0,n,null,a);break;case"together":m0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qd(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=$r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f7(e,t,n){switch(t.tag){case 3:vv(t),Ho();break;case 5:Gy(t);break;case 1:ht(t.type)&&ku(t);break;case 4:p1(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;me(zu,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?bv(e,t,n):(me(ke,ke.current&1),e=Bn(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return wv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(ke,ke.current),i)break;return null;case 22:case 23:return t.lanes=0,xv(e,t,n)}return Bn(e,t,n)}var jv,Nm,kv,Cv;jv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nm=function(){};kv=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,hi(yn.current);var a=null;switch(n){case"input":o=om(e,o),i=om(e,i),a=[];break;case"select":o=Pe({},o,{value:void 0}),i=Pe({},i,{value:void 0}),a=[];break;case"textarea":o=lm(e,o),i=lm(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=wu)}dm(n,i);var s;n=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var d=i[u];if(c=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(a||(a=[]),a.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(a=a||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Es.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&xe("scroll",e),a||c===d||(a=[])):(a=a||[]).push(u,d))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Cv=function(e,t,n,i){n!==i&&(t.flags|=4)};function ja(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function p7(e,t,n){var i=t.pendingProps;switch(a1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ht(t.type)&&ju(),Ze(t),null;case 3:return i=t.stateNode,Wo(),ve(mt),ve(tt),h1(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xt!==null&&(Wm(Xt),Xt=null))),Nm(e,t),Ze(t),null;case 5:m1(t);var o=hi(_s.current);if(n=t.type,e!==null&&t.stateNode!=null)kv(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(A(166));return Ze(t),null}if(e=hi(yn.current),Rl(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[mn]=t,i[Fs]=a,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(o=0;o<as.length;o++)xe(as[o],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":Bg(i,a),xe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},xe("invalid",i);break;case"textarea":Ug(i,a),xe("invalid",i)}dm(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?i.textContent!==c&&(a.suppressHydrationWarning!==!0&&$l(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&$l(i.textContent,c,e),o=["children",""+c]):Es.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&xe("scroll",i)}switch(n){case"input":zl(i),Hg(i,a,!0);break;case"textarea":zl(i),Wg(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=wu)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Z3(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[mn]=t,e[Fs]=i,jv(e,t,!1,!1),t.stateNode=e;e:{switch(s=um(n,i),n){case"dialog":xe("cancel",e),xe("close",e),o=i;break;case"iframe":case"object":case"embed":xe("load",e),o=i;break;case"video":case"audio":for(o=0;o<as.length;o++)xe(as[o],e);o=i;break;case"source":xe("error",e),o=i;break;case"img":case"image":case"link":xe("error",e),xe("load",e),o=i;break;case"details":xe("toggle",e),o=i;break;case"input":Bg(e,i),o=om(e,i),xe("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=Pe({},i,{value:void 0}),xe("invalid",e);break;case"textarea":Ug(e,i),o=lm(e,i),xe("invalid",e);break;default:o=i}dm(n,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var d=c[a];a==="style"?ty(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&J3(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ls(e,d):typeof d=="number"&&Ls(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Es.hasOwnProperty(a)?d!=null&&a==="onScroll"&&xe("scroll",e):d!=null&&Wh(e,a,d,s))}switch(n){case"input":zl(e),Hg(e,i,!1);break;case"textarea":zl(e),Wg(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Dr(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Ao(e,!!i.multiple,a,!1):i.defaultValue!=null&&Ao(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Cv(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(A(166));if(n=hi(_s.current),hi(yn.current),Rl(t)){if(i=t.stateNode,n=t.memoizedProps,i[mn]=t,(a=i.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:$l(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$l(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mn]=t,t.stateNode=i}return Ze(t),null;case 13:if(ve(ke),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&wt!==null&&t.mode&1&&!(t.flags&128))By(),Ho(),t.flags|=98560,a=!1;else if(a=Rl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[mn]=t}else Ho(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),a=!1}else Xt!==null&&(Wm(Xt),Xt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ve===0&&(Ve=3):P1())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Wo(),Nm(e,t),e===null&&Ns(t.stateNode.containerInfo),Ze(t),null;case 10:return d1(t.type._context),Ze(t),null;case 17:return ht(t.type)&&ju(),Ze(t),null;case 19:if(ve(ke),a=t.memoizedState,a===null)return Ze(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)ja(a,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Eu(e),s!==null){for(t.flags|=128,ja(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>Go&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304)}else{if(!i)if(e=Eu(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!we)return Ze(t),null}else 2*Ie()-a.renderingStartTime>Go&&n!==1073741824&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=ke.current,me(ke,i?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return z1(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?vt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function m7(e,t){switch(a1(t),t.tag){case 1:return ht(t.type)&&ju(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wo(),ve(mt),ve(tt),h1(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return m1(t),null;case 13:if(ve(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Ho()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(ke),null;case 4:return Wo(),null;case 10:return d1(t.type._context),null;case 22:case 23:return z1(),null;case 24:return null;default:return null}}var Dl=!1,et=!1,h7=typeof WeakSet=="function"?WeakSet:Set,N=null;function Co(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ee(e,t,i)}else n.current=null}function Dm(e,t,n){try{n()}catch(i){Ee(e,t,i)}}var $x=!1;function g7(e,t){if(wm=yu,e=Ey(),i1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,c=-1,d=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(c=s+o),p!==a||i!==0&&p.nodeType!==3||(d=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++u===o&&(c=s),m===a&&++f===i&&(d=s),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(jm={focusedElem:e,selectionRange:n},yu=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var w=j.memoizedProps,k=j.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Yt(t.type,w),k);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){Ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return j=$x,$x=!1,j}function gs(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Dm(t,n,a)}o=o.next}while(o!==i)}}function uf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Fm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sv(e){var t=e.alternate;t!==null&&(e.alternate=null,Sv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[Fs],delete t[Sm],delete t[Zj],delete t[Jj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zv(e){return e.tag===5||e.tag===3||e.tag===4}function Rx(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wu));else if(i!==4&&(e=e.child,e!==null))for(Vm(e,t,n),e=e.sibling;e!==null;)Vm(e,t,n),e=e.sibling}function _m(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(_m(e,t,n),e=e.sibling;e!==null;)_m(e,t,n),e=e.sibling}var We=null,Gt=!1;function Xn(e,t,n){for(n=n.child;n!==null;)Pv(e,t,n),n=n.sibling}function Pv(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(nf,n)}catch{}switch(n.tag){case 5:et||Co(n,t);case 6:var i=We,o=Gt;We=null,Xn(e,t,n),We=i,Gt=o,We!==null&&(Gt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Gt?(e=We,n=n.stateNode,e.nodeType===8?s0(e.parentNode,n):e.nodeType===1&&s0(e,n),$s(e)):s0(We,n.stateNode));break;case 4:i=We,o=Gt,We=n.stateNode.containerInfo,Gt=!0,Xn(e,t,n),We=i,Gt=o;break;case 0:case 11:case 14:case 15:if(!et&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Dm(n,t,s),o=o.next}while(o!==i)}Xn(e,t,n);break;case 1:if(!et&&(Co(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){Ee(n,t,c)}Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:n.mode&1?(et=(i=et)||n.memoizedState!==null,Xn(e,t,n),et=i):Xn(e,t,n);break;default:Xn(e,t,n)}}function Ox(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h7),t.forEach(function(i){var o=S7.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:We=c.stateNode,Gt=!1;break e;case 3:We=c.stateNode.containerInfo,Gt=!0;break e;case 4:We=c.stateNode.containerInfo,Gt=!0;break e}c=c.return}if(We===null)throw Error(A(160));Pv(a,s,o),We=null,Gt=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(u){Ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tv(t,e),t=t.sibling}function Tv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),an(e),i&4){try{gs(3,e,e.return),uf(3,e)}catch(w){Ee(e,e.return,w)}try{gs(5,e,e.return)}catch(w){Ee(e,e.return,w)}}break;case 1:Ut(t,e),an(e),i&512&&n!==null&&Co(n,n.return);break;case 5:if(Ut(t,e),an(e),i&512&&n!==null&&Co(n,n.return),e.flags&32){var o=e.stateNode;try{Ls(o,"")}catch(w){Ee(e,e.return,w)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&q3(o,a),um(c,s);var u=um(c,a);for(s=0;s<d.length;s+=2){var f=d[s],p=d[s+1];f==="style"?ty(o,p):f==="dangerouslySetInnerHTML"?J3(o,p):f==="children"?Ls(o,p):Wh(o,f,p,u)}switch(c){case"input":am(o,a);break;case"textarea":K3(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Ao(o,!!a.multiple,x,!1):m!==!!a.multiple&&(a.defaultValue!=null?Ao(o,!!a.multiple,a.defaultValue,!0):Ao(o,!!a.multiple,a.multiple?[]:"",!1))}o[Fs]=a}catch(w){Ee(e,e.return,w)}}break;case 6:if(Ut(t,e),an(e),i&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){Ee(e,e.return,w)}}break;case 3:if(Ut(t,e),an(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(t.containerInfo)}catch(w){Ee(e,e.return,w)}break;case 4:Ut(t,e),an(e);break;case 13:Ut(t,e),an(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(C1=Ie())),i&4&&Ox(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||f,Ut(t,e),et=u):Ut(t,e),an(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(p=N=f;N!==null;){switch(m=N,x=m.child,m.tag){case 0:case 11:case 14:case 15:gs(4,m,m.return);break;case 1:Co(m,m.return);var j=m.stateNode;if(typeof j.componentWillUnmount=="function"){i=m,n=m.return;try{t=i,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(w){Ee(i,n,w)}}break;case 5:Co(m,m.return);break;case 22:if(m.memoizedState!==null){Dx(p);continue}}x!==null?(x.return=m,N=x):Dx(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=p.stateNode,d=p.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=ey("display",s))}catch(w){Ee(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Ee(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),an(e),i&4&&Ox(e);break;case 21:break;default:Ut(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zv(n)){var i=n;break e}n=n.return}throw Error(A(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Ls(o,""),i.flags&=-33);var a=Rx(e);_m(e,a,o);break;case 3:case 4:var s=i.stateNode.containerInfo,c=Rx(e);Vm(e,c,s);break;default:throw Error(A(161))}}catch(d){Ee(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x7(e,t,n){N=e,Ev(e)}function Ev(e,t,n){for(var i=(e.mode&1)!==0;N!==null;){var o=N,a=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||Dl;if(!s){var c=o.alternate,d=c!==null&&c.memoizedState!==null||et;c=Dl;var u=et;if(Dl=s,(et=d)&&!u)for(N=o;N!==null;)s=N,d=s.child,s.tag===22&&s.memoizedState!==null?Fx(o):d!==null?(d.return=s,N=d):Fx(o);for(;a!==null;)N=a,Ev(a),a=a.sibling;N=o,Dl=c,et=u}Nx(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,N=a):Nx(e)}}function Nx(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||uf(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Yt(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&wx(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wx(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&$s(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}et||t.flags&512&&Fm(t)}catch(m){Ee(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Dx(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Fx(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uf(4,t)}catch(d){Ee(t,n,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(d){Ee(t,o,d)}}var a=t.return;try{Fm(t)}catch(d){Ee(t,a,d)}break;case 5:var s=t.return;try{Fm(t)}catch(d){Ee(t,s,d)}}}catch(d){Ee(t,t.return,d)}if(t===e){N=null;break}var c=t.sibling;if(c!==null){c.return=t.return,N=c;break}N=t.return}}var y7=Math.ceil,Mu=Yn.ReactCurrentDispatcher,j1=Yn.ReactCurrentOwner,Vt=Yn.ReactCurrentBatchConfig,re=0,He=null,De=null,Ge=0,vt=0,So=Gr(0),Ve=0,Ws=null,zi=0,ff=0,k1=0,xs=null,ut=null,C1=0,Go=1/0,Pn=null,Au=!1,Bm=null,Mr=null,Fl=!1,Sr=null,$u=0,ys=0,Hm=null,qd=-1,Kd=0;function st(){return re&6?Ie():qd!==-1?qd:qd=Ie()}function Ar(e){return e.mode&1?re&2&&Ge!==0?Ge&-Ge:t7.transition!==null?(Kd===0&&(Kd=py()),Kd):(e=fe,e!==0||(e=window.event,e=e===void 0?16:by(e.type)),e):1}function Kt(e,t,n,i){if(50<ys)throw ys=0,Hm=null,Error(A(185));rl(e,n,i),(!(re&2)||e!==He)&&(e===He&&(!(re&2)&&(ff|=n),Ve===4&&jr(e,Ge)),gt(e,i),n===1&&re===0&&!(t.mode&1)&&(Go=Ie()+500,lf&&Xr()))}function gt(e,t){var n=e.callbackNode;tj(e,t);var i=xu(e,e===He?Ge:0);if(i===0)n!==null&&Xg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Xg(n),t===1)e.tag===0?e7(Vx.bind(null,e)):Fy(Vx.bind(null,e)),qj(function(){!(re&6)&&Xr()}),n=null;else{switch(my(i)){case 1:n=qh;break;case 4:n=uy;break;case 16:n=gu;break;case 536870912:n=fy;break;default:n=gu}n=Nv(n,Lv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lv(e,t){if(qd=-1,Kd=0,re&6)throw Error(A(327));var n=e.callbackNode;if(Do()&&e.callbackNode!==n)return null;var i=xu(e,e===He?Ge:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Ru(e,i);else{t=i;var o=re;re|=2;var a=Mv();(He!==e||Ge!==t)&&(Pn=null,Go=Ie()+500,vi(e,t));do try{w7();break}catch(c){Iv(e,c)}while(1);c1(),Mu.current=a,re=o,De!==null?t=0:(He=null,Ge=0,t=Ve)}if(t!==0){if(t===2&&(o=gm(e),o!==0&&(i=o,t=Um(e,o))),t===1)throw n=Ws,vi(e,0),jr(e,i),gt(e,Ie()),n;if(t===6)jr(e,i);else{if(o=e.current.alternate,!(i&30)&&!v7(o)&&(t=Ru(e,i),t===2&&(a=gm(e),a!==0&&(i=a,t=Um(e,a))),t===1))throw n=Ws,vi(e,0),jr(e,i),gt(e,Ie()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(A(345));case 2:ci(e,ut,Pn);break;case 3:if(jr(e,i),(i&130023424)===i&&(t=C1+500-Ie(),10<t)){if(xu(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){st(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cm(ci.bind(null,e,ut,Pn),t);break}ci(e,ut,Pn);break;case 4:if(jr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-qt(i);a=1<<s,s=t[s],s>o&&(o=s),i&=~a}if(i=o,i=Ie()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*y7(i/1960))-i,10<i){e.timeoutHandle=Cm(ci.bind(null,e,ut,Pn),i);break}ci(e,ut,Pn);break;case 5:ci(e,ut,Pn);break;default:throw Error(A(329))}}}return gt(e,Ie()),e.callbackNode===n?Lv.bind(null,e):null}function Um(e,t){var n=xs;return e.current.memoizedState.isDehydrated&&(vi(e,t).flags|=256),e=Ru(e,t),e!==2&&(t=ut,ut=n,t!==null&&Wm(t)),e}function Wm(e){ut===null?ut=e:ut.push.apply(ut,e)}function v7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!en(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jr(e,t){for(t&=~k1,t&=~ff,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),i=1<<n;e[n]=-1,t&=~i}}function Vx(e){if(re&6)throw Error(A(327));Do();var t=xu(e,0);if(!(t&1))return gt(e,Ie()),null;var n=Ru(e,t);if(e.tag!==0&&n===2){var i=gm(e);i!==0&&(t=i,n=Um(e,i))}if(n===1)throw n=Ws,vi(e,0),jr(e,t),gt(e,Ie()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ci(e,ut,Pn),gt(e,Ie()),null}function S1(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Go=Ie()+500,lf&&Xr())}}function Pi(e){Sr!==null&&Sr.tag===0&&!(re&6)&&Do();var t=re;re|=1;var n=Vt.transition,i=fe;try{if(Vt.transition=null,fe=1,e)return e()}finally{fe=i,Vt.transition=n,re=t,!(re&6)&&Xr()}}function z1(){vt=So.current,ve(So)}function vi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qj(n)),De!==null)for(n=De.return;n!==null;){var i=n;switch(a1(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ju();break;case 3:Wo(),ve(mt),ve(tt),h1();break;case 5:m1(i);break;case 4:Wo();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:d1(i.type._context);break;case 22:case 23:z1()}n=n.return}if(He=e,De=e=$r(e.current,null),Ge=vt=t,Ve=0,Ws=null,k1=ff=zi=0,ut=xs=null,mi!==null){for(t=0;t<mi.length;t++)if(n=mi[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,i.next=s}n.pending=i}mi=null}return e}function Iv(e,t){do{var n=De;try{if(c1(),Gd.current=Iu,Lu){for(var i=Se.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Lu=!1}if(Si=0,_e=Fe=Se=null,hs=!1,Bs=0,j1.current=null,n===null||n.return===null){Ve=1,Ws=t,De=null;break}e:{var a=e,s=n.return,c=n,d=t;if(t=Ge,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,f=c,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Px(s);if(x!==null){x.flags&=-257,Tx(x,s,c,a,t),x.mode&1&&zx(a,u,t),t=x,d=u;var j=t.updateQueue;if(j===null){var w=new Set;w.add(d),t.updateQueue=w}else j.add(d);break e}else{if(!(t&1)){zx(a,u,t),P1();break e}d=Error(A(426))}}else if(we&&c.mode&1){var k=Px(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Tx(k,s,c,a,t),s1(Yo(d,c));break e}}a=d=Yo(d,c),Ve!==4&&(Ve=2),xs===null?xs=[a]:xs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=mv(a,d,t);bx(a,h);break e;case 1:c=d;var g=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mr===null||!Mr.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=hv(a,c,t);bx(a,S);break e}}a=a.return}while(a!==null)}$v(n)}catch(P){t=P,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Mv(){var e=Mu.current;return Mu.current=Iu,e===null?Iu:e}function P1(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),He===null||!(zi&268435455)&&!(ff&268435455)||jr(He,Ge)}function Ru(e,t){var n=re;re|=2;var i=Mv();(He!==e||Ge!==t)&&(Pn=null,vi(e,t));do try{b7();break}catch(o){Iv(e,o)}while(1);if(c1(),re=n,Mu.current=i,De!==null)throw Error(A(261));return He=null,Ge=0,Ve}function b7(){for(;De!==null;)Av(De)}function w7(){for(;De!==null&&!Yw();)Av(De)}function Av(e){var t=Ov(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?$v(e):De=t,j1.current=null}function $v(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m7(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,De=null;return}}else if(n=p7(n,t,vt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ve===0&&(Ve=5)}function ci(e,t,n){var i=fe,o=Vt.transition;try{Vt.transition=null,fe=1,j7(e,t,n,i)}finally{Vt.transition=o,fe=i}return null}function j7(e,t,n,i){do Do();while(Sr!==null);if(re&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nj(e,a),e===He&&(De=He=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,Nv(gu,function(){return Do(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Vt.transition,Vt.transition=null;var s=fe;fe=1;var c=re;re|=4,j1.current=null,g7(e,n),Tv(n,e),Bj(jm),yu=!!wm,jm=wm=null,e.current=n,x7(n),Gw(),re=c,fe=s,Vt.transition=a}else e.current=n;if(Fl&&(Fl=!1,Sr=e,$u=o),a=e.pendingLanes,a===0&&(Mr=null),qw(n.stateNode),gt(e,Ie()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Au)throw Au=!1,e=Bm,Bm=null,e;return $u&1&&e.tag!==0&&Do(),a=e.pendingLanes,a&1?e===Hm?ys++:(ys=0,Hm=e):ys=0,Xr(),null}function Do(){if(Sr!==null){var e=my($u),t=Vt.transition,n=fe;try{if(Vt.transition=null,fe=16>e?16:e,Sr===null)var i=!1;else{if(e=Sr,Sr=null,$u=0,re&6)throw Error(A(331));var o=re;for(re|=4,N=e.current;N!==null;){var a=N,s=a.child;if(N.flags&16){var c=a.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:gs(8,f,a)}var p=f.child;if(p!==null)p.return=f,N=p;else for(;N!==null;){f=N;var m=f.sibling,x=f.return;if(Sv(f),f===u){N=null;break}if(m!==null){m.return=x,N=m;break}N=x}}}var j=a.alternate;if(j!==null){var w=j.child;if(w!==null){j.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}N=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,N=s;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:gs(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,N=h;break e}N=a.return}}var g=e.current;for(N=g;N!==null;){s=N;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,N=y;else e:for(s=g;N!==null;){if(c=N,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:uf(9,c)}}catch(P){Ee(c,c.return,P)}if(c===s){N=null;break e}var S=c.sibling;if(S!==null){S.return=c.return,N=S;break e}N=c.return}}if(re=o,Xr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(nf,e)}catch{}i=!0}return i}finally{fe=n,Vt.transition=t}}return!1}function _x(e,t,n){t=Yo(n,t),t=mv(e,t,1),e=Ir(e,t,1),t=st(),e!==null&&(rl(e,1,t),gt(e,t))}function Ee(e,t,n){if(e.tag===3)_x(e,e,n);else for(;t!==null;){if(t.tag===3){_x(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){e=Yo(n,e),e=hv(t,e,1),t=Ir(t,e,1),e=st(),t!==null&&(rl(t,1,e),gt(t,e));break}}t=t.return}}function k7(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ge&n)===n&&(Ve===4||Ve===3&&(Ge&130023424)===Ge&&500>Ie()-C1?vi(e,0):k1|=n),gt(e,t)}function Rv(e,t){t===0&&(e.mode&1?(t=El,El<<=1,!(El&130023424)&&(El=4194304)):t=1);var n=st();e=_n(e,t),e!==null&&(rl(e,t,n),gt(e,n))}function C7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rv(e,n)}function S7(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(t),Rv(e,n)}var Ov;Ov=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,f7(e,t,n);ft=!!(e.flags&131072)}else ft=!1,we&&t.flags&1048576&&Vy(t,Su,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Qd(e,t),e=t.pendingProps;var o=Bo(t,tt.current);No(t,n),o=x1(null,t,i,e,o,n);var a=y1();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(i)?(a=!0,ku(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,f1(t),o.updater=df,t.stateNode=o,o._reactInternals=t,Im(t,i,e,n),t=$m(null,t,i,!0,a,n)):(t.tag=0,we&&a&&o1(t),at(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Qd(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=P7(i),e=Yt(i,e),o){case 0:t=Am(null,t,i,e,n);break e;case 1:t=Ix(null,t,i,e,n);break e;case 11:t=Ex(null,t,i,e,n);break e;case 14:t=Lx(null,t,i,Yt(i.type,e),n);break e}throw Error(A(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Yt(i,o),Am(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Yt(i,o),Ix(e,t,i,o,n);case 3:e:{if(vv(t),e===null)throw Error(A(387));i=t.pendingProps,a=t.memoizedState,o=a.element,Yy(e,t),Tu(t,i,null,n);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Yo(Error(A(423)),t),t=Mx(e,t,i,n,o);break e}else if(i!==o){o=Yo(Error(A(424)),t),t=Mx(e,t,i,n,o);break e}else for(wt=Lr(t.stateNode.containerInfo.firstChild),jt=t,we=!0,Xt=null,n=Uy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ho(),i===o){t=Bn(e,t,n);break e}at(e,t,i,n)}t=t.child}return t;case 5:return Gy(t),e===null&&Tm(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,km(i,o)?s=null:a!==null&&km(i,a)&&(t.flags|=32),yv(e,t),at(e,t,s,n),t.child;case 6:return e===null&&Tm(t),null;case 13:return bv(e,t,n);case 4:return p1(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Uo(t,null,i,n):at(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Yt(i,o),Ex(e,t,i,o,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,me(zu,i._currentValue),i._currentValue=s,a!==null)if(en(a.value,s)){if(a.children===o.children&&!mt.current){t=Bn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var d=c.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=Rn(-1,n&-n),d.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?d.next=d:(d.next=f.next,f.next=d),u.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Em(a.return,n,t),c.lanes|=n;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(A(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Em(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}at(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,No(t,n),o=_t(o),i=i(o),t.flags|=1,at(e,t,i,n),t.child;case 14:return i=t.type,o=Yt(i,t.pendingProps),o=Yt(i.type,o),Lx(e,t,i,o,n);case 15:return gv(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Yt(i,o),Qd(e,t),t.tag=1,ht(i)?(e=!0,ku(t)):e=!1,No(t,n),pv(t,i,o),Im(t,i,o,n),$m(null,t,i,!0,e,n);case 19:return wv(e,t,n);case 22:return xv(e,t,n)}throw Error(A(156,t.tag))};function Nv(e,t){return dy(e,t)}function z7(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,i){return new z7(e,t,n,i)}function T1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P7(e){if(typeof e=="function")return T1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gh)return 11;if(e===Xh)return 14}return 2}function $r(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zd(e,t,n,i,o,a){var s=2;if(i=e,typeof e=="function")T1(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ho:return bi(n.children,o,a,t);case Yh:s=8,o|=8;break;case tm:return e=Ft(12,n,t,o|2),e.elementType=tm,e.lanes=a,e;case nm:return e=Ft(13,n,t,o),e.elementType=nm,e.lanes=a,e;case rm:return e=Ft(19,n,t,o),e.elementType=rm,e.lanes=a,e;case G3:return pf(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W3:s=10;break e;case Y3:s=9;break e;case Gh:s=11;break e;case Xh:s=14;break e;case xr:s=16,i=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ft(s,n,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function bi(e,t,n,i){return e=Ft(7,e,i,t),e.lanes=n,e}function pf(e,t,n,i){return e=Ft(22,e,i,t),e.elementType=G3,e.lanes=n,e.stateNode={isHidden:!1},e}function h0(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function g0(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T7(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qf(0),this.expirationTimes=qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qf(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function E1(e,t,n,i,o,a,s,c,d){return e=new T7(e,t,n,c,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},f1(a),e}function E7(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Dv(e){if(!e)return Fr;e=e._reactInternals;e:{if(Mi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(ht(n))return Dy(e,n,t)}return t}function Fv(e,t,n,i,o,a,s,c,d){return e=E1(n,i,!0,e,o,a,s,c,d),e.context=Dv(null),n=e.current,i=st(),o=Ar(n),a=Rn(i,o),a.callback=t??null,Ir(n,a,o),e.current.lanes=o,rl(e,o,i),gt(e,i),e}function mf(e,t,n,i){var o=t.current,a=st(),s=Ar(o);return n=Dv(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Ir(o,t,s),e!==null&&(Kt(e,o,s,a),Yd(e,o,s)),s}function Ou(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function L1(e,t){Bx(e,t),(e=e.alternate)&&Bx(e,t)}function L7(){return null}var Vv=typeof reportError=="function"?reportError:function(e){console.error(e)};function I1(e){this._internalRoot=e}hf.prototype.render=I1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));mf(e,t,null,null)};hf.prototype.unmount=I1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pi(function(){mf(null,e,null,null)}),t[Vn]=null}};function hf(e){this._internalRoot=e}hf.prototype.unstable_scheduleHydration=function(e){if(e){var t=xy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wr.length&&t!==0&&t<wr[n].priority;n++);wr.splice(n,0,e),n===0&&vy(e)}};function M1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hx(){}function I7(e,t,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var u=Ou(s);a.call(u)}}var s=Fv(t,i,e,0,null,!1,!1,"",Hx);return e._reactRootContainer=s,e[Vn]=s.current,Ns(e.nodeType===8?e.parentNode:e),Pi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var u=Ou(d);c.call(u)}}var d=E1(e,0,!1,null,null,!1,!1,"",Hx);return e._reactRootContainer=d,e[Vn]=d.current,Ns(e.nodeType===8?e.parentNode:e),Pi(function(){mf(t,d,n,i)}),d}function xf(e,t,n,i,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var c=o;o=function(){var d=Ou(s);c.call(d)}}mf(t,s,e,o)}else s=I7(n,t,e,o,i);return Ou(s)}hy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=os(t.pendingLanes);n!==0&&(Kh(t,n|1),gt(t,Ie()),!(re&6)&&(Go=Ie()+500,Xr()))}break;case 13:Pi(function(){var i=_n(e,1);if(i!==null){var o=st();Kt(i,e,1,o)}}),L1(e,1)}};Zh=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var n=st();Kt(t,e,134217728,n)}L1(e,134217728)}};gy=function(e){if(e.tag===13){var t=Ar(e),n=_n(e,t);if(n!==null){var i=st();Kt(n,e,t,i)}L1(e,t)}};xy=function(){return fe};yy=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};pm=function(e,t,n){switch(t){case"input":if(am(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=sf(i);if(!o)throw Error(A(90));Q3(i),am(i,o)}}}break;case"textarea":K3(e,n);break;case"select":t=n.value,t!=null&&Ao(e,!!n.multiple,t,!1)}};iy=S1;oy=Pi;var M7={usingClientEntryPoint:!1,Events:[ol,vo,sf,ny,ry,S1]},ka={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A7={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ly(e),e===null?null:e.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||L7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{nf=Vl.inject(A7),xn=Vl}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M7;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M1(t))throw Error(A(200));return E7(e,t,null,n)};St.createRoot=function(e,t){if(!M1(e))throw Error(A(299));var n=!1,i="",o=Vv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=E1(e,1,!1,null,null,n,!1,i,o),e[Vn]=t.current,Ns(e.nodeType===8?e.parentNode:e),new I1(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=ly(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return Pi(e)};St.hydrate=function(e,t,n){if(!gf(t))throw Error(A(200));return xf(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!M1(e))throw Error(A(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",s=Vv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fv(t,null,e,1,n??null,o,!1,a,s),e[Vn]=t.current,Ns(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new hf(t)};St.render=function(e,t,n){if(!gf(t))throw Error(A(200));return xf(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!gf(e))throw Error(A(40));return e._reactRootContainer?(Pi(function(){xf(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1};St.unstable_batchedUpdates=S1;St.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gf(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return xf(e,t,n,!1,i)};St.version="18.3.1-next-f1338f8080-20240426";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(e){console.error(e)}}_v(),_3.exports=St;var $7=_3.exports,Ux=$7;Jp.createRoot=Ux.createRoot,Jp.hydrateRoot=Ux.hydrateRoot;const R7="modulepreload",O7=function(e){return"/"+e},Wx={},N7=function(t,n,i){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=O7(a),a in Wx)return;Wx[a]=!0;const s=a.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!i)for(let f=o.length-1;f>=0;f--){const p=o[f];if(p.href===a&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":R7,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a})};var Yx="popstate";function D7(e={}){function t(i,o){let{pathname:a,search:s,hash:c}=i.location;return Ym("",{pathname:a,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Ys(o)}return V7(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function F7(){return Math.random().toString(36).substring(2,10)}function Gx(e,t){return{usr:e.state,key:e.key,idx:t}}function Ym(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ca(t):t,state:n,key:t&&t.key||i||F7()}}function Ys({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ca(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function V7(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,s=o.history,c="POP",d=null,u=f();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function f(){return(s.state||{idx:null}).idx}function p(){c="POP";let k=f(),h=k==null?null:k-u;u=k,d&&d({action:c,location:w.location,delta:h})}function m(k,h){c="PUSH";let g=Ym(w.location,k,h);n&&n(g,k),u=f()+1;let y=Gx(g,u),S=w.createHref(g);try{s.pushState(y,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}a&&d&&d({action:c,location:w.location,delta:1})}function x(k,h){c="REPLACE";let g=Ym(w.location,k,h);n&&n(g,k),u=f();let y=Gx(g,u),S=w.createHref(g);s.replaceState(y,"",S),a&&d&&d({action:c,location:w.location,delta:0})}function j(k){return _7(k)}let w={get action(){return c},get location(){return e(o,s)},listen(k){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Yx,p),d=k,()=>{o.removeEventListener(Yx,p),d=null}},createHref(k){return t(o,k)},createURL:j,encodeLocation(k){let h=j(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:x,go(k){return s.go(k)}};return w}function _7(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ze(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Ys(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Bv(e,t,n="/"){return B7(e,t,n,!1)}function B7(e,t,n,i){let o=typeof t=="string"?ca(t):t,a=Hn(o.pathname||"/",n);if(a==null)return null;let s=Hv(e);H7(s);let c=null;for(let d=0;c==null&&d<s.length;++d){let u=e9(a);c=Z7(s[d],u,i)}return c}function Hv(e,t=[],n=[],i=""){let o=(a,s,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(ze(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let u=On([i,d.relativePath]),f=n.concat(d);a.children&&a.children.length>0&&(ze(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Hv(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:q7(u,a.index),routesMeta:f})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,s);else for(let d of Uv(a.path))o(a,s,d)}),t}function Uv(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let s=Uv(i.join("/")),c=[];return c.push(...s.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...s),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function H7(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K7(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var U7=/^:[\w-]+$/,W7=3,Y7=2,G7=1,X7=10,Q7=-2,Xx=e=>e==="*";function q7(e,t){let n=e.split("/"),i=n.length;return n.some(Xx)&&(i+=Q7),t&&(i+=Y7),n.filter(o=>!Xx(o)).reduce((o,a)=>o+(U7.test(a)?W7:a===""?G7:X7),i)}function K7(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function Z7(e,t,n=!1){let{routesMeta:i}=e,o={},a="/",s=[];for(let c=0;c<i.length;++c){let d=i[c],u=c===i.length-1,f=a==="/"?t:t.slice(a.length)||"/",p=Nu({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},f),m=d.route;if(!p&&u&&n&&!i[i.length-1].route.index&&(p=Nu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:On([a,p.pathname]),pathnameBase:i9(On([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=On([a,p.pathnameBase]))}return s}function Nu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=J7(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((u,{paramName:f,isOptional:p},m)=>{if(f==="*"){let j=c[m]||"";s=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const x=c[m];return p&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function J7(e,t=!1,n=!0){tn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function e9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return tn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function t9(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?ca(e):e;return{pathname:n?n.startsWith("/")?n:n9(n,t):t,search:o9(i),hash:a9(o)}}function n9(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function x0(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function r9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wv(e){let t=r9(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Yv(e,t,n,i=!1){let o;typeof e=="string"?o=ca(e):(o={...e},ze(!o.pathname||!o.pathname.includes("?"),x0("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),x0("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),x0("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,c;if(s==null)c=n;else{let p=t.length-1;if(!i&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}c=p>=0?t[p]:"/"}let d=t9(o,c),u=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(u||f)&&(d.pathname+="/"),d}var On=e=>e.join("/").replace(/\/\/+/g,"/"),i9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function s9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Gv=["POST","PUT","PATCH","DELETE"];new Set(Gv);var l9=["GET",...Gv];new Set(l9);var da=b.createContext(null);da.displayName="DataRouter";var yf=b.createContext(null);yf.displayName="DataRouterState";b.createContext(!1);var Xv=b.createContext({isTransitioning:!1});Xv.displayName="ViewTransition";var c9=b.createContext(new Map);c9.displayName="Fetchers";var d9=b.createContext(null);d9.displayName="Await";var wn=b.createContext(null);wn.displayName="Navigation";var sl=b.createContext(null);sl.displayName="Location";var jn=b.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var A1=b.createContext(null);A1.displayName="RouteError";function u9(e,{relative:t}={}){ze(ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=b.useContext(wn),{hash:o,pathname:a,search:s}=cl(e,{relative:t}),c=a;return n!=="/"&&(c=a==="/"?n:On([n,a])),i.createHref({pathname:c,search:s,hash:o})}function ll(){return b.useContext(sl)!=null}function Qr(){return ze(ll(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(sl).location}var Qv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qv(e){b.useContext(wn).static||b.useLayoutEffect(e)}function on(){let{isDataRoute:e}=b.useContext(jn);return e?S9():f9()}function f9(){ze(ll(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(da),{basename:t,navigator:n}=b.useContext(wn),{matches:i}=b.useContext(jn),{pathname:o}=Qr(),a=JSON.stringify(Wv(i)),s=b.useRef(!1);return qv(()=>{s.current=!0}),b.useCallback((d,u={})=>{if(tn(s.current,Qv),!s.current)return;if(typeof d=="number"){n.go(d);return}let f=Yv(d,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:On([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,o,e])}b.createContext(null);function p9(){let{matches:e}=b.useContext(jn),t=e[e.length-1];return t?t.params:{}}function cl(e,{relative:t}={}){let{matches:n}=b.useContext(jn),{pathname:i}=Qr(),o=JSON.stringify(Wv(n));return b.useMemo(()=>Yv(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function m9(e,t){return Kv(e,t)}function Kv(e,t,n,i){var h;ze(ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(wn),{matches:a}=b.useContext(jn),s=a[a.length-1],c=s?s.params:{},d=s?s.pathname:"/",u=s?s.pathnameBase:"/",f=s&&s.route;{let g=f&&f.path||"";Zv(d,!f||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let p=Qr(),m;if(t){let g=typeof t=="string"?ca(t):t;ze(u==="/"||((h=g.pathname)==null?void 0:h.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${g.pathname}" was given in the \`location\` prop.`),m=g}else m=p;let x=m.pathname||"/",j=x;if(u!=="/"){let g=u.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=Bv(e,{pathname:j});tn(f||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),tn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=v9(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:On([u,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:On([u,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n,i);return t&&k?b.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},k):k}function h9(){let e=C9(),t=s9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:a},"ErrorBoundary")," or"," ",b.createElement("code",{style:a},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,s)}var g9=b.createElement(h9,null),x9=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?b.createElement(jn.Provider,{value:this.props.routeContext},b.createElement(A1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y9({routeContext:e,match:t,children:n}){let i=b.useContext(da);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(jn.Provider,{value:e},n)}function v9(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=n==null?void 0:n.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);ze(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,c=-1;if(n)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:p}=n,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let p,m=!1,x=null,j=null;n&&(p=a&&u.route.id?a[u.route.id]:void 0,x=u.route.errorElement||g9,s&&(c<0&&f===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,j=null):c===f&&(m=!0,j=u.route.hydrateFallbackElement||null)));let w=t.concat(o.slice(0,f+1)),k=()=>{let h;return p?h=x:m?h=j:u.route.Component?h=b.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=d,b.createElement(y9,{match:u,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:h})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?b.createElement(x9,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:k(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):k()},null)}function $1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b9(e){let t=b.useContext(da);return ze(t,$1(e)),t}function w9(e){let t=b.useContext(yf);return ze(t,$1(e)),t}function j9(e){let t=b.useContext(jn);return ze(t,$1(e)),t}function R1(e){let t=j9(e),n=t.matches[t.matches.length-1];return ze(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function k9(){return R1("useRouteId")}function C9(){var i;let e=b.useContext(A1),t=w9("useRouteError"),n=R1("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function S9(){let{router:e}=b9("useNavigate"),t=R1("useNavigate"),n=b.useRef(!1);return qv(()=>{n.current=!0}),b.useCallback(async(o,a={})=>{tn(n.current,Qv),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var Qx={};function Zv(e,t,n){!t&&!Qx[e]&&(Qx[e]=!0,tn(!1,n))}b.memo(z9);function z9({routes:e,future:t,state:n}){return Kv(e,void 0,n,t)}function Te(e){ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P9({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:a=!1}){ze(!ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:s,navigator:o,static:a,future:{}}),[s,o,a]);typeof n=="string"&&(n=ca(n));let{pathname:d="/",search:u="",hash:f="",state:p=null,key:m="default"}=n,x=b.useMemo(()=>{let j=Hn(d,s);return j==null?null:{location:{pathname:j,search:u,hash:f,state:p,key:m},navigationType:i}},[s,d,u,f,p,m,i]);return tn(x!=null,`<Router basename="${s}"> is not able to match the URL "${d}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:b.createElement(wn.Provider,{value:c},b.createElement(sl.Provider,{children:t,value:x}))}function T9({children:e,location:t}){return m9(Gm(e),t)}function Gm(e,t=[]){let n=[];return b.Children.forEach(e,(i,o)=>{if(!b.isValidElement(i))return;let a=[...t,o];if(i.type===b.Fragment){n.push.apply(n,Gm(i.props.children,a));return}ze(i.type===Te,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Gm(i.props.children,a)),n.push(s)}),n}var Jd="get",eu="application/x-www-form-urlencoded";function vf(e){return e!=null&&typeof e.tagName=="string"}function E9(e){return vf(e)&&e.tagName.toLowerCase()==="button"}function L9(e){return vf(e)&&e.tagName.toLowerCase()==="form"}function I9(e){return vf(e)&&e.tagName.toLowerCase()==="input"}function M9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A9(e,t){return e.button===0&&(!t||t==="_self")&&!M9(e)}function Xm(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function $9(e,t){let n=Xm(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(a=>{n.append(o,a)})}),n}var _l=null;function R9(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var O9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function y0(e){return e!=null&&!O9.has(e)?(tn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):e}function N9(e,t){let n,i,o,a,s;if(L9(e)){let c=e.getAttribute("action");i=c?Hn(c,t):null,n=e.getAttribute("method")||Jd,o=y0(e.getAttribute("enctype"))||eu,a=new FormData(e)}else if(E9(e)||I9(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(i=d?Hn(d,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Jd,o=y0(e.getAttribute("formenctype"))||y0(c.getAttribute("enctype"))||eu,a=new FormData(c,e),!R9()){let{name:u,type:f,value:p}=e;if(f==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,p)}}else{if(vf(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Jd,i=null,o=eu,s=e}return a&&o==="text/plain"&&(s=a,a=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:a,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function O1(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function D9(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Hn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function F9(e,t){if(e.id in t)return t[e.id];try{let n=await N7(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function V9(e){return e!=null&&typeof e.page=="string"}function _9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function B9(e,t,n){let i=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let s=await F9(a,n);return s.links?s.links():[]}return[]}));return Y9(i.flat(1).filter(_9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function qx(e,t,n,i,o,a){let s=(d,u)=>n[u]?d.route.id!==n[u].route.id:!0,c=(d,u)=>{var f;return n[u].pathname!==d.pathname||((f=n[u].route.path)==null?void 0:f.endsWith("*"))&&n[u].params["*"]!==d.params["*"]};return a==="assets"?t.filter((d,u)=>s(d,u)||c(d,u)):a==="data"?t.filter((d,u)=>{var p;let f=i.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(s(d,u)||c(d,u))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function H9(e,t,{includeHydrateFallback:n}={}){return U9(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function U9(e){return[...new Set(e)]}function W9(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function Y9(e,t){let n=new Set,i=new Set(t);return e.reduce((o,a)=>{if(t&&!V9(a)&&a.as==="script"&&a.href&&i.has(a.href))return o;let c=JSON.stringify(W9(a));return n.has(c)||(n.add(c),o.push({key:c,link:a})),o},[])}function Jv(){let e=b.useContext(da);return O1(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function G9(){let e=b.useContext(yf);return O1(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var N1=b.createContext(void 0);N1.displayName="FrameworkContext";function e8(){let e=b.useContext(N1);return O1(e,"You must render this element inside a <HydratedRouter> element"),e}function X9(e,t){let n=b.useContext(N1),[i,o]=b.useState(!1),[a,s]=b.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,m=b.useRef(null);b.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=h=>{h.forEach(g=>{s(g.isIntersecting)})},k=new IntersectionObserver(w,{threshold:.5});return m.current&&k.observe(m.current),()=>{k.disconnect()}}},[e]),b.useEffect(()=>{if(i){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[i]);let x=()=>{o(!0)},j=()=>{o(!1),s(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Ca(c,x),onBlur:Ca(d,j),onMouseEnter:Ca(u,x),onMouseLeave:Ca(f,j),onTouchStart:Ca(p,x)}]:[!1,m,{}]}function Ca(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Q9({page:e,...t}){let{router:n}=Jv(),i=b.useMemo(()=>Bv(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?b.createElement(K9,{page:e,matches:i,...t}):null}function q9(e){let{manifest:t,routeModules:n}=e8(),[i,o]=b.useState([]);return b.useEffect(()=>{let a=!1;return B9(e,t,n).then(s=>{a||o(s)}),()=>{a=!0}},[e,t,n]),i}function K9({page:e,matches:t,...n}){let i=Qr(),{manifest:o,routeModules:a}=e8(),{basename:s}=Jv(),{loaderData:c,matches:d}=G9(),u=b.useMemo(()=>qx(e,t,d,o,i,"data"),[e,t,d,o,i]),f=b.useMemo(()=>qx(e,t,d,o,i,"assets"),[e,t,d,o,i]),p=b.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let j=new Set,w=!1;if(t.forEach(h=>{var y;let g=o.routes[h.route.id];!g||!g.hasLoader||(!u.some(S=>S.route.id===h.route.id)&&h.route.id in c&&((y=a[h.route.id])!=null&&y.shouldRevalidate)||g.hasClientLoader?w=!0:j.add(h.route.id))}),j.size===0)return[];let k=D9(e,s,"data");return w&&j.size>0&&k.searchParams.set("_routes",t.filter(h=>j.has(h.route.id)).map(h=>h.route.id).join(",")),[k.pathname+k.search]},[s,c,i,o,u,t,e,a]),m=b.useMemo(()=>H9(f,o),[f,o]),x=q9(f);return b.createElement(b.Fragment,null,p.map(j=>b.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...n})),m.map(j=>b.createElement("link",{key:j,rel:"modulepreload",href:j,...n})),x.map(({key:j,link:w})=>b.createElement("link",{key:j,...w})))}function Z9(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var t8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t8&&(window.__reactRouterVersion="7.7.1")}catch{}function J9({basename:e,children:t,window:n}){let i=b.useRef();i.current==null&&(i.current=D7({window:n,v5Compat:!0}));let o=i.current,[a,s]=b.useState({action:o.action,location:o.location}),c=b.useCallback(d=>{b.startTransition(()=>s(d))},[s]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(P9,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var n8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r8=b.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:a,replace:s,state:c,target:d,to:u,preventScrollReset:f,viewTransition:p,...m},x){let{basename:j}=b.useContext(wn),w=typeof u=="string"&&n8.test(u),k,h=!1;if(typeof u=="string"&&w&&(k=u,t8))try{let R=new URL(window.location.href),D=u.startsWith("//")?new URL(R.protocol+u):new URL(u),ne=Hn(D.pathname,j);D.origin===R.origin&&ne!=null?u=ne+D.search+D.hash:h=!0}catch{tn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=u9(u,{relative:o}),[y,S,P]=X9(i,m),E=rk(u,{replace:s,state:c,target:d,preventScrollReset:f,relative:o,viewTransition:p});function T(R){t&&t(R),R.defaultPrevented||E(R)}let I=b.createElement("a",{...m,...P,href:k||g,onClick:h||a?t:T,ref:Z9(x,S),target:d,"data-discover":!w&&n==="render"?"true":void 0});return y&&!w?b.createElement(b.Fragment,null,I,b.createElement(Q9,{page:g})):I});r8.displayName="Link";var ek=b.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:a,to:s,viewTransition:c,children:d,...u},f){let p=cl(s,{relative:u.relative}),m=Qr(),x=b.useContext(yf),{navigator:j,basename:w}=b.useContext(wn),k=x!=null&&ck(p)&&c===!0,h=j.encodeLocation?j.encodeLocation(p).pathname:p.pathname,g=m.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(g=g.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase()),y&&w&&(y=Hn(y,w)||y);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let P=g===h||!o&&g.startsWith(h)&&g.charAt(S)==="/",E=y!=null&&(y===h||!o&&y.startsWith(h)&&y.charAt(h.length)==="/"),T={isActive:P,isPending:E,isTransitioning:k},I=P?t:void 0,R;typeof i=="function"?R=i(T):R=[i,P?"active":null,E?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(T):a;return b.createElement(r8,{...u,"aria-current":I,className:R,ref:f,style:D,to:s,viewTransition:c},typeof d=="function"?d(T):d)});ek.displayName="NavLink";var tk=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:a,method:s=Jd,action:c,onSubmit:d,relative:u,preventScrollReset:f,viewTransition:p,...m},x)=>{let j=sk(),w=lk(c,{relative:u}),k=s.toLowerCase()==="get"?"get":"post",h=typeof c=="string"&&n8.test(c),g=y=>{if(d&&d(y),y.defaultPrevented)return;y.preventDefault();let S=y.nativeEvent.submitter,P=(S==null?void 0:S.getAttribute("formmethod"))||s;j(S||y.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:o,state:a,relative:u,preventScrollReset:f,viewTransition:p})};return b.createElement("form",{ref:x,method:k,action:w,onSubmit:i?d:g,...m,"data-discover":!h&&e==="render"?"true":void 0})});tk.displayName="Form";function nk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i8(e){let t=b.useContext(da);return ze(t,nk(e)),t}function rk(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:s}={}){let c=on(),d=Qr(),u=cl(e,{relative:a});return b.useCallback(f=>{if(A9(f,t)){f.preventDefault();let p=n!==void 0?n:Ys(d)===Ys(u);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[d,c,u,n,i,t,e,o,a,s])}function ik(e){tn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=b.useRef(Xm(e)),n=b.useRef(!1),i=Qr(),o=b.useMemo(()=>$9(i.search,n.current?null:t.current),[i.search]),a=on(),s=b.useCallback((c,d)=>{const u=Xm(typeof c=="function"?c(new URLSearchParams(o)):c);n.current=!0,a("?"+u,d)},[a,o]);return[o,s]}var ok=0,ak=()=>`__${String(++ok)}__`;function sk(){let{router:e}=i8("useSubmit"),{basename:t}=b.useContext(wn),n=k9();return b.useCallback(async(i,o={})=>{let{action:a,method:s,encType:c,formData:d,body:u}=N9(i,t);if(o.navigate===!1){let f=o.fetcherKey||ak();await e.fetch(f,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:u,formMethod:o.method||s,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:u,formMethod:o.method||s,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function lk(e,{relative:t}={}){let{basename:n}=b.useContext(wn),i=b.useContext(jn);ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...cl(e||".",{relative:t})},s=Qr();if(e==null){a.search=s.search;let c=new URLSearchParams(a.search),d=c.getAll("index");if(d.some(f=>f==="")){c.delete("index"),d.filter(p=>p).forEach(p=>c.append("index",p));let f=c.toString();a.search=f?`?${f}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:On([n,a.pathname])),Ys(a)}function ck(e,{relative:t}={}){let n=b.useContext(Xv);ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=i8("useViewTransitionState"),o=cl(e,{relative:t});if(!n.isTransitioning)return!1;let a=Hn(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=Hn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Nu(o.pathname,s)!=null||Nu(o.pathname,a)!=null}var pt=function(){return pt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},pt.apply(this,arguments)};function Du(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,a;i<o;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}var ye="-ms-",vs="-moz-",ue="-webkit-",o8="comm",bf="rule",D1="decl",dk="@import",a8="@keyframes",uk="@layer",s8=Math.abs,F1=String.fromCharCode,Qm=Object.assign;function fk(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function l8(e){return e.trim()}function Tn(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function tu(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function Xo(e,t,n){return e.slice(t,n)}function fn(e){return e.length}function c8(e){return e.length}function ss(e,t){return t.push(e),e}function pk(e,t){return e.map(t).join("")}function Kx(e,t){return e.filter(function(n){return!Tn(n,t)})}var wf=1,Qo=1,d8=0,Ht=0,Ne=0,ua="";function jf(e,t,n,i,o,a,s,c){return{value:e,root:t,parent:n,type:i,props:o,children:a,line:wf,column:Qo,length:s,return:"",siblings:c}}function mr(e,t){return Qm(jf("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ni(e){for(;e.root;)e=mr(e.root,{children:[e]});ss(e,e.siblings)}function mk(){return Ne}function hk(){return Ne=Ht>0?Be(ua,--Ht):0,Qo--,Ne===10&&(Qo=1,wf--),Ne}function Zt(){return Ne=Ht<d8?Be(ua,Ht++):0,Qo++,Ne===10&&(Qo=1,wf++),Ne}function wi(){return Be(ua,Ht)}function nu(){return Ht}function kf(e,t){return Xo(ua,e,t)}function qm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gk(e){return wf=Qo=1,d8=fn(ua=e),Ht=0,[]}function xk(e){return ua="",e}function v0(e){return l8(kf(Ht-1,Km(e===91?e+2:e===40?e+1:e)))}function yk(e){for(;(Ne=wi())&&Ne<33;)Zt();return qm(e)>2||qm(Ne)>3?"":" "}function vk(e,t){for(;--t&&Zt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return kf(e,nu()+(t<6&&wi()==32&&Zt()==32))}function Km(e){for(;Zt();)switch(Ne){case e:return Ht;case 34:case 39:e!==34&&e!==39&&Km(Ne);break;case 40:e===41&&Km(e);break;case 92:Zt();break}return Ht}function bk(e,t){for(;Zt()&&e+Ne!==47+10;)if(e+Ne===42+42&&wi()===47)break;return"/*"+kf(t,Ht-1)+"*"+F1(e===47?e:Zt())}function wk(e){for(;!qm(wi());)Zt();return kf(e,Ht)}function jk(e){return xk(ru("",null,null,null,[""],e=gk(e),0,[0],e))}function ru(e,t,n,i,o,a,s,c,d){for(var u=0,f=0,p=s,m=0,x=0,j=0,w=1,k=1,h=1,g=0,y="",S=o,P=a,E=i,T=y;k;)switch(j=g,g=Zt()){case 40:if(j!=108&&Be(T,p-1)==58){tu(T+=K(v0(g),"&","&\f"),"&\f",s8(u?c[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:T+=v0(g);break;case 9:case 10:case 13:case 32:T+=yk(j);break;case 92:T+=vk(nu()-1,7);continue;case 47:switch(wi()){case 42:case 47:ss(kk(bk(Zt(),nu()),t,n,d),d);break;default:T+="/"}break;case 123*w:c[u++]=fn(T)*h;case 125*w:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+f:h==-1&&(T=K(T,/\f/g,"")),x>0&&fn(T)-p&&ss(x>32?Jx(T+";",i,n,p-1,d):Jx(K(T," ","")+";",i,n,p-2,d),d);break;case 59:T+=";";default:if(ss(E=Zx(T,t,n,u,f,o,c,y,S=[],P=[],p,a),a),g===123)if(f===0)ru(T,t,E,E,S,a,p,c,P);else switch(m===99&&Be(T,3)===110?100:m){case 100:case 108:case 109:case 115:ru(e,E,E,i&&ss(Zx(e,E,E,0,0,o,c,y,o,S=[],p,P),P),o,P,p,c,i?S:P);break;default:ru(T,E,E,E,[""],P,0,c,P)}}u=f=x=0,w=h=1,y=T="",p=s;break;case 58:p=1+fn(T),x=j;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&hk()==125)continue}switch(T+=F1(g),g*w){case 38:h=f>0?1:(T+="\f",-1);break;case 44:c[u++]=(fn(T)-1)*h,h=1;break;case 64:wi()===45&&(T+=v0(Zt())),m=wi(),f=p=fn(y=T+=wk(nu())),g++;break;case 45:j===45&&fn(T)==2&&(w=0)}}return a}function Zx(e,t,n,i,o,a,s,c,d,u,f,p){for(var m=o-1,x=o===0?a:[""],j=c8(x),w=0,k=0,h=0;w<i;++w)for(var g=0,y=Xo(e,m+1,m=s8(k=s[w])),S=e;g<j;++g)(S=l8(k>0?x[g]+" "+y:K(y,/&\f/g,x[g])))&&(d[h++]=S);return jf(e,t,n,o===0?bf:c,d,u,f,p)}function kk(e,t,n,i){return jf(e,t,n,o8,F1(mk()),Xo(e,2,-2),0,i)}function Jx(e,t,n,i,o){return jf(e,t,n,D1,Xo(e,0,i),Xo(e,i+1,-1),i,o)}function u8(e,t,n){switch(fk(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return vs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+vs+e+ye+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+ye+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+K(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+K(e,/flex-|-self/g,"")+(Tn(e,/flex-|baseline/)?"":ye+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+K(e,"shrink","negative")+e;case 5292:return ue+e+ye+K(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+K(e,"-grow","")+ue+e+ye+K(e,"grow","positive")+e;case 4554:return ue+K(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!Tn(e,/flex-|baseline/))return ye+"grid-column-align"+Xo(e,t)+e;break;case 2592:case 3360:return ye+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,Tn(i.props,/grid-\w+-end/)})?~tu(e+(n=n[t].value),"span",0)?e:ye+K(e,"-start","")+e+ye+"grid-row-span:"+(~tu(n,"span",0)?Tn(n,/\d+/):+Tn(n,/\d+/)-+Tn(e,/\d+/))+";":ye+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return Tn(i.props,/grid-\w+-start/)})?e:ye+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+vs+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~tu(e,"stretch",0)?u8(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,a,s,c,d,u){return ye+o+":"+a+u+(s?ye+o+"-span:"+(c?d:+d-+a)+u:"")+e});case 4949:if(Be(e,t+6)===121)return K(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return K(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function Fu(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Ck(e,t,n,i){switch(e.type){case uk:if(e.children.length)break;case dk:case D1:return e.return=e.return||e.value;case o8:return"";case a8:return e.return=e.value+"{"+Fu(e.children,i)+"}";case bf:if(!fn(e.value=e.props.join(",")))return""}return fn(n=Fu(e.children,i))?e.return=e.value+"{"+n+"}":""}function Sk(e){var t=c8(e);return function(n,i,o,a){for(var s="",c=0;c<t;c++)s+=e[c](n,i,o,a)||"";return s}}function zk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pk(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case D1:e.return=u8(e.value,e.length,n);return;case a8:return Fu([mr(e,{value:K(e.value,"@","@"+ue)})],i);case bf:if(e.length)return pk(n=e.props,function(o){switch(Tn(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(mr(e,{props:[K(o,/:(read-\w+)/,":"+vs+"$1")]})),Ni(mr(e,{props:[o]})),Qm(e,{props:Kx(n,i)});break;case"::placeholder":Ni(mr(e,{props:[K(o,/:(plac\w+)/,":"+ue+"input-$1")]})),Ni(mr(e,{props:[K(o,/:(plac\w+)/,":"+vs+"$1")]})),Ni(mr(e,{props:[K(o,/:(plac\w+)/,ye+"input-$1")]})),Ni(mr(e,{props:[o]})),Qm(e,{props:Kx(n,i)});break}return""})}}var Tk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",f8="active",p8="data-styled-version",Cf="6.1.18",V1=`/*!sc*/
`,Vu=typeof window<"u"&&typeof document<"u",Ek=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Sf=Object.freeze([]),Ko=Object.freeze({});function Lk(e,t,n){return n===void 0&&(n=Ko),e.theme!==n.theme&&e.theme||t||n.theme}var m8=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ik=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mk=/(^-|-$)/g;function e2(e){return e.replace(Ik,"-").replace(Mk,"")}var Ak=/(a)(d)/gi,Bl=52,t2=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zm(e){var t,n="";for(t=Math.abs(e);t>Bl;t=t/Bl|0)n=t2(t%Bl)+n;return(t2(t%Bl)+n).replace(Ak,"$1-$2")}var b0,h8=5381,zo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},g8=function(e){return zo(h8,e)};function $k(e){return Zm(g8(e)>>>0)}function Rk(e){return e.displayName||e.name||"Component"}function w0(e){return typeof e=="string"&&!0}var x8=typeof Symbol=="function"&&Symbol.for,y8=x8?Symbol.for("react.memo"):60115,Ok=x8?Symbol.for("react.forward_ref"):60112,Nk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fk=((b0={})[Ok]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b0[y8]=v8,b0);function n2(e){return("type"in(t=e)&&t.type.$$typeof)===y8?v8:"$$typeof"in e?Fk[e.$$typeof]:Nk;var t}var Vk=Object.defineProperty,_k=Object.getOwnPropertyNames,r2=Object.getOwnPropertySymbols,Bk=Object.getOwnPropertyDescriptor,Hk=Object.getPrototypeOf,i2=Object.prototype;function b8(e,t,n){if(typeof t!="string"){if(i2){var i=Hk(t);i&&i!==i2&&b8(e,i,n)}var o=_k(t);r2&&(o=o.concat(r2(t)));for(var a=n2(e),s=n2(t),c=0;c<o.length;++c){var d=o[c];if(!(d in Dk||n&&n[d]||s&&d in s||a&&d in a)){var u=Bk(t,d);try{Vk(e,d,u)}catch{}}}}return e}function Zo(e){return typeof e=="function"}function _1(e){return typeof e=="object"&&"styledComponentId"in e}function gi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function o2(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function Gs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jm(e,t,n){if(n===void 0&&(n=!1),!n&&!Gs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Jm(e[i],t[i]);else if(Gs(t))for(var i in t)e[i]=Jm(e[i],t[i]);return e}function B1(e,t){Object.defineProperty(e,"toString",{value:t})}function dl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Uk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;t>=a;)if((a<<=1)<0)throw dl(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(c,n[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),a=o+i,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(V1);return n},e}(),iu=new Map,_u=new Map,ou=1,Hl=function(e){if(iu.has(e))return iu.get(e);for(;_u.has(ou);)ou++;var t=ou++;return iu.set(e,t),_u.set(t,e),t},Wk=function(e,t){ou=t+1,iu.set(e,t),_u.set(t,e)},Yk="style[".concat(qo,"][").concat(p8,'="').concat(Cf,'"]'),Gk=new RegExp("^".concat(qo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xk=function(e,t,n){for(var i,o=n.split(","),a=0,s=o.length;a<s;a++)(i=o[a])&&e.registerName(t,i)},Qk=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(V1),o=[],a=0,s=i.length;a<s;a++){var c=i[a].trim();if(c){var d=c.match(Gk);if(d){var u=0|parseInt(d[1],10),f=d[2];u!==0&&(Wk(f,u),Xk(e,f,d[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}},a2=function(e){for(var t=document.querySelectorAll(Yk),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(qo)!==f8&&(Qk(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function qk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var w8=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=function(c){var d=Array.from(c.querySelectorAll("style[".concat(qo,"]")));return d[d.length-1]}(n),a=o!==void 0?o.nextSibling:null;i.setAttribute(qo,f8),i.setAttribute(p8,Cf);var s=qk();return s&&i.setAttribute("nonce",s),n.insertBefore(i,a),i},Kk=function(){function e(t){this.element=w8(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,a=i.length;o<a;o++){var s=i[o];if(s.ownerNode===n)return s}throw dl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Zk=function(){function e(t){this.element=w8(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),s2=Vu,eC={isServer:!Vu,useCSSOMInjection:!Ek},j8=function(){function e(t,n,i){t===void 0&&(t=Ko),n===void 0&&(n={});var o=this;this.options=pt(pt({},eC),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Vu&&s2&&(s2=!1,a2(this)),B1(this,function(){return function(a){for(var s=a.getTag(),c=s.length,d="",u=function(p){var m=function(h){return _u.get(h)}(p);if(m===void 0)return"continue";var x=a.names.get(m),j=s.getGroup(p);if(x===void 0||!x.size||j.length===0)return"continue";var w="".concat(qo,".g").concat(p,'[id="').concat(m,'"]'),k="";x!==void 0&&x.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),d+="".concat(j).concat(w,'{content:"').concat(k,'"}').concat(V1)},f=0;f<c;f++)u(f);return d}(o)})}return e.registerId=function(t){return Hl(t)},e.prototype.rehydrate=function(){!this.server&&Vu&&a2(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pt(pt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new Jk(o):i?new Kk(o):new Zk(o)}(this.options),new Uk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Hl(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Hl(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tC=/&/g,nC=/^\s*\/\/.*$/gm;function k8(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=k8(n.children,t)),n})}function rC(e){var t,n,i,o=e===void 0?Ko:e,a=o.options,s=a===void 0?Ko:a,c=o.plugins,d=c===void 0?Sf:c,u=function(m,x,j){return j.startsWith(n)&&j.endsWith(n)&&j.replaceAll(n,"").length>0?".".concat(t):m},f=d.slice();f.push(function(m){m.type===bf&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(tC,n).replace(i,u))}),s.prefix&&f.push(Pk),f.push(Ck);var p=function(m,x,j,w){x===void 0&&(x=""),j===void 0&&(j=""),w===void 0&&(w="&"),t=w,n=x,i=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(nC,""),h=jk(j||x?"".concat(j," ").concat(x," { ").concat(k," }"):k);s.namespace&&(h=k8(h,s.namespace));var g=[];return Fu(h,Sk(f.concat(zk(function(y){return g.push(y)})))),g};return p.hash=d.length?d.reduce(function(m,x){return x.name||dl(15),zo(m,x.name)},h8).toString():"",p}var iC=new j8,eh=rC(),C8=lt.createContext({shouldForwardProp:void 0,styleSheet:iC,stylis:eh});C8.Consumer;lt.createContext(void 0);function l2(){return b.useContext(C8)}var oC=function(){function e(t,n){var i=this;this.inject=function(o,a){a===void 0&&(a=eh);var s=i.name+a.hash;o.hasNameForId(i.id,s)||o.insertRules(i.id,s,a(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,B1(this,function(){throw dl(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=eh),this.name+t.hash},e}(),aC=function(e){return e>="A"&&e<="Z"};function c2(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;aC(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var S8=function(e){return e==null||e===!1||e===""},z8=function(e){var t,n,i=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!S8(a)&&(Array.isArray(a)&&a.isCss||Zo(a)?i.push("".concat(c2(o),":"),a,";"):Gs(a)?i.push.apply(i,Du(Du(["".concat(o," {")],z8(a),!1),["}"],!1)):i.push("".concat(c2(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Tk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ji(e,t,n,i){if(S8(e))return[];if(_1(e))return[".".concat(e.styledComponentId)];if(Zo(e)){if(!Zo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return ji(o,t,n,i)}var a;return e instanceof oC?n?(e.inject(n,i),[e.getName(i)]):[e]:Gs(e)?z8(e):Array.isArray(e)?Array.prototype.concat.apply(Sf,e.map(function(s){return ji(s,t,n,i)})):[e.toString()]}function sC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zo(n)&&!_1(n))return!1}return!0}var lC=g8(Cf),cC=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&sC(t),this.componentId=n,this.baseHash=zo(lC,n),this.baseStyle=i,j8.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=gi(o,this.staticRulesId);else{var a=o2(ji(this.rules,t,n,i)),s=Zm(zo(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var c=i(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,c)}o=gi(o,s),this.staticRulesId=s}else{for(var d=zo(this.baseHash,i.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var m=o2(ji(p,t,n,i));d=zo(d,m+f),u+=m}}if(u){var x=Zm(d>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,i(u,".".concat(x),void 0,this.componentId)),o=gi(o,x)}}return o},e}(),P8=lt.createContext(void 0);P8.Consumer;var j0={};function dC(e,t,n){var i=_1(e),o=e,a=!w0(e),s=t.attrs,c=s===void 0?Sf:s,d=t.componentId,u=d===void 0?function(S,P){var E=typeof S!="string"?"sc":e2(S);j0[E]=(j0[E]||0)+1;var T="".concat(E,"-").concat($k(Cf+E+j0[E]));return P?"".concat(P,"-").concat(T):T}(t.displayName,t.parentComponentId):d,f=t.displayName,p=f===void 0?function(S){return w0(S)?"styled.".concat(S):"Styled(".concat(Rk(S),")")}(e):f,m=t.displayName&&t.componentId?"".concat(e2(t.displayName),"-").concat(t.componentId):t.componentId||u,x=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,j=t.shouldForwardProp;if(i&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;j=function(S,P){return w(S,P)&&k(S,P)}}else j=w}var h=new cC(n,m,i?o.componentStyle:void 0);function g(S,P){return function(E,T,I){var R=E.attrs,D=E.componentStyle,ne=E.defaultProps,q=E.foldedComponentIds,he=E.styledComponentId,G=E.target,J=lt.useContext(P8),U=l2(),ce=E.shouldForwardProp||U.shouldForwardProp,$=Lk(T,J,ne)||Ko,F=function(Qe,se,qe){for(var it,z=pt(pt({},se),{className:void 0,theme:qe}),O=0;O<Qe.length;O+=1){var X=Zo(it=Qe[O])?it(z):it;for(var Q in X)z[Q]=Q==="className"?gi(z[Q],X[Q]):Q==="style"?pt(pt({},z[Q]),X[Q]):X[Q]}return se.className&&(z.className=gi(z.className,se.className)),z}(R,T,$),B=F.as||G,V={};for(var Z in F)F[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&F.theme===$||(Z==="forwardedAs"?V.as=F.forwardedAs:ce&&!ce(Z,B)||(V[Z]=F[Z]));var rt=function(Qe,se){var qe=l2(),it=Qe.generateAndInjectStyles(se,qe.styleSheet,qe.stylis);return it}(D,F),Ae=gi(q,he);return rt&&(Ae+=" "+rt),F.className&&(Ae+=" "+F.className),V[w0(B)&&!m8.has(B)?"class":"className"]=Ae,I&&(V.ref=I),b.createElement(B,V)}(y,S,P)}g.displayName=p;var y=lt.forwardRef(g);return y.attrs=x,y.componentStyle=h,y.displayName=p,y.shouldForwardProp=j,y.foldedComponentIds=i?gi(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=m,y.target=i?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=i?function(P){for(var E=[],T=1;T<arguments.length;T++)E[T-1]=arguments[T];for(var I=0,R=E;I<R.length;I++)Jm(P,R[I],!0);return P}({},o.defaultProps,S):S}}),B1(y,function(){return".".concat(y.styledComponentId)}),a&&b8(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function d2(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var u2=function(e){return Object.assign(e,{isCss:!0})};function uC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zo(e)||Gs(e))return u2(ji(d2(Sf,Du([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ji(i):u2(ji(d2(i,t)))}function th(e,t,n){if(n===void 0&&(n=Ko),!t)throw dl(1,t);var i=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,uC.apply(void 0,Du([o],a,!1)))};return i.attrs=function(o){return th(e,t,pt(pt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return th(e,t,pt(pt({},n),o))},i}var T8=function(e){return th(dC,e)},l=T8;m8.forEach(function(e){l[e]=T8(e)});const H1=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),zf=b.createContext({}),Pf=b.createContext(null),Tf=typeof document<"u",ul=Tf?b.useLayoutEffect:b.useEffect,E8=b.createContext({strict:!1}),U1=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),fC="framerAppearId",L8="data-"+U1(fC);function pC(e,t,n,i){const{visualElement:o}=b.useContext(zf),a=b.useContext(E8),s=b.useContext(Pf),c=b.useContext(H1).reducedMotion,d=b.useRef();i=i||a.renderer,!d.current&&i&&(d.current=i(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:c}));const u=d.current;b.useInsertionEffect(()=>{u&&u.update(n,s)});const f=b.useRef(!!(n[L8]&&!window.HandoffComplete));return ul(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),b.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function Po(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mC(e,t,n){return b.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Po(n)&&(n.current=i))},[t])}function Xs(e){return typeof e=="string"||Array.isArray(e)}function Ef(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const W1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Y1=["initial",...W1];function Lf(e){return Ef(e.animate)||Y1.some(t=>Xs(e[t]))}function I8(e){return!!(Lf(e)||e.variants)}function hC(e,t){if(Lf(e)){const{initial:n,animate:i}=e;return{initial:n===!1||Xs(n)?n:void 0,animate:Xs(i)?i:void 0}}return e.inherit!==!1?t:{}}function gC(e){const{initial:t,animate:n}=hC(e,b.useContext(zf));return b.useMemo(()=>({initial:t,animate:n}),[f2(t),f2(n)])}function f2(e){return Array.isArray(e)?e.join(" "):e}const p2={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qs={};for(const e in p2)Qs[e]={isEnabled:t=>p2[e].some(n=>!!t[n])};function xC(e){for(const t in e)Qs[t]={...Qs[t],...e[t]}}const G1=b.createContext({}),M8=b.createContext({}),yC=Symbol.for("motionComponentSymbol");function vC({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:o}){e&&xC(e);function a(c,d){let u;const f={...b.useContext(H1),...c,layoutId:bC(c)},{isStatic:p}=f,m=gC(c),x=i(c,p);if(!p&&Tf){m.visualElement=pC(o,x,f,t);const j=b.useContext(M8),w=b.useContext(E8).strict;m.visualElement&&(u=m.visualElement.loadFeatures(f,w,e,j))}return b.createElement(zf.Provider,{value:m},u&&m.visualElement?b.createElement(u,{visualElement:m.visualElement,...f}):null,n(o,c,mC(x,m.visualElement,d),x,p,m.visualElement))}const s=b.forwardRef(a);return s[yC]=o,s}function bC({layoutId:e}){const t=b.useContext(G1).id;return t&&e!==void 0?t+"-"+e:e}function wC(e){function t(i,o={}){return vC(e(i,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(i,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const jC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function X1(e){return typeof e!="string"||e.includes("-")?!1:!!(jC.indexOf(e)>-1||/[A-Z]/.test(e))}const Bu={};function kC(e){Object.assign(Bu,e)}const fl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ai=new Set(fl);function A8(e,{layout:t,layoutId:n}){return Ai.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Bu[e]||e==="opacity")}const xt=e=>!!(e&&e.getVelocity),CC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},SC=fl.length;function zC(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},i,o){let a="";for(let s=0;s<SC;s++){const c=fl[s];if(e[c]!==void 0){const d=CC[c]||c;a+=`${d}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),o?a=o(e,i?"":a):n&&i&&(a="none"),a}const $8=e=>t=>typeof t=="string"&&t.startsWith(e),R8=$8("--"),nh=$8("var(--"),PC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,TC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Vr=(e,t,n)=>Math.min(Math.max(n,e),t),$i={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bs={...$i,transform:e=>Vr(0,1,e)},Ul={...$i,default:1},ws=e=>Math.round(e*1e5)/1e5,If=/(-)?([\d]*\.?[\d])+/g,O8=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,EC=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function pl(e){return typeof e=="string"}const ml=e=>({test:t=>pl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),hr=ml("deg"),vn=ml("%"),H=ml("px"),LC=ml("vh"),IC=ml("vw"),m2={...vn,parse:e=>vn.parse(e)/100,transform:e=>vn.transform(e*100)},h2={...$i,transform:Math.round},N8={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,size:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,rotate:hr,rotateX:hr,rotateY:hr,rotateZ:hr,scale:Ul,scaleX:Ul,scaleY:Ul,scaleZ:Ul,skew:hr,skewX:hr,skewY:hr,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:bs,originX:m2,originY:m2,originZ:H,zIndex:h2,fillOpacity:bs,strokeOpacity:bs,numOctaves:h2};function Q1(e,t,n,i){const{style:o,vars:a,transform:s,transformOrigin:c}=e;let d=!1,u=!1,f=!0;for(const p in t){const m=t[p];if(R8(p)){a[p]=m;continue}const x=N8[p],j=TC(m,x);if(Ai.has(p)){if(d=!0,s[p]=j,!f)continue;m!==(x.default||0)&&(f=!1)}else p.startsWith("origin")?(u=!0,c[p]=j):o[p]=j}if(t.transform||(d||i?o.transform=zC(e.transform,n,f,i):o.transform&&(o.transform="none")),u){const{originX:p="50%",originY:m="50%",originZ:x=0}=c;o.transformOrigin=`${p} ${m} ${x}`}}const q1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function D8(e,t,n){for(const i in t)!xt(t[i])&&!A8(i,n)&&(e[i]=t[i])}function MC({transformTemplate:e},t,n){return b.useMemo(()=>{const i=q1();return Q1(i,t,{enableHardwareAcceleration:!n},e),Object.assign({},i.vars,i.style)},[t])}function AC(e,t,n){const i=e.style||{},o={};return D8(o,i,e),Object.assign(o,MC(e,t,n)),e.transformValues?e.transformValues(o):o}function $C(e,t,n){const i={},o=AC(e,t,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const RC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||RC.has(e)}let F8=e=>!Hu(e);function OC(e){e&&(F8=t=>t.startsWith("on")?!Hu(t):e(t))}try{OC(require("@emotion/is-prop-valid").default)}catch{}function NC(e,t,n){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(F8(o)||n===!0&&Hu(o)||!t&&!Hu(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}function g2(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function DC(e,t,n){const i=g2(t,e.x,e.width),o=g2(n,e.y,e.height);return`${i} ${o}`}const FC={offset:"stroke-dashoffset",array:"stroke-dasharray"},VC={offset:"strokeDashoffset",array:"strokeDasharray"};function _C(e,t,n=1,i=0,o=!0){e.pathLength=1;const a=o?FC:VC;e[a.offset]=H.transform(-i);const s=H.transform(t),c=H.transform(n);e[a.array]=`${s} ${c}`}function K1(e,{attrX:t,attrY:n,attrScale:i,originX:o,originY:a,pathLength:s,pathSpacing:c=1,pathOffset:d=0,...u},f,p,m){if(Q1(e,u,f,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:j,dimensions:w}=e;x.transform&&(w&&(j.transform=x.transform),delete x.transform),w&&(o!==void 0||a!==void 0||j.transform)&&(j.transformOrigin=DC(w,o!==void 0?o:.5,a!==void 0?a:.5)),t!==void 0&&(x.x=t),n!==void 0&&(x.y=n),i!==void 0&&(x.scale=i),s!==void 0&&_C(x,s,c,d,!1)}const V8=()=>({...q1(),attrs:{}}),Z1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function BC(e,t,n,i){const o=b.useMemo(()=>{const a=V8();return K1(a,t,{enableHardwareAcceleration:!1},Z1(i),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};D8(a,e.style,e),o.style={...a,...o.style}}return o}function HC(e=!1){return(n,i,o,{latestValues:a},s)=>{const d=(X1(n)?BC:$C)(i,a,s,n),f={...NC(i,typeof n=="string",e),...d,ref:o},{children:p}=i,m=b.useMemo(()=>xt(p)?p.get():p,[p]);return b.createElement(n,{...f,children:m})}}function _8(e,{style:t,vars:n},i,o){Object.assign(e.style,t,o&&o.getProjectionStyles(i));for(const a in n)e.style.setProperty(a,n[a])}const B8=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function H8(e,t,n,i){_8(e,t,void 0,i);for(const o in t.attrs)e.setAttribute(B8.has(o)?o:U1(o),t.attrs[o])}function J1(e,t){const{style:n}=e,i={};for(const o in n)(xt(n[o])||t.style&&xt(t.style[o])||A8(o,e))&&(i[o]=n[o]);return i}function U8(e,t){const n=J1(e,t);for(const i in e)if(xt(e[i])||xt(t[i])){const o=fl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[o]=e[i]}return n}function eg(e,t,n,i={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,o)),t}function hl(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Uu=e=>Array.isArray(e),UC=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),WC=e=>Uu(e)?e[e.length-1]||0:e;function au(e){const t=xt(e)?e.get():e;return UC(t)?t.toValue():t}function YC({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,o,a){const s={latestValues:GC(i,o,a,e),renderState:t()};return n&&(s.mount=c=>n(i,c,s)),s}const W8=e=>(t,n)=>{const i=b.useContext(zf),o=b.useContext(Pf),a=()=>YC(e,t,i,o);return n?a():hl(a)};function GC(e,t,n,i){const o={},a=i(e,{});for(const m in a)o[m]=au(a[m]);let{initial:s,animate:c}=e;const d=Lf(e),u=I8(e);t&&u&&!d&&e.inherit!==!1&&(s===void 0&&(s=t.initial),c===void 0&&(c=t.animate));let f=n?n.initial===!1:!1;f=f||s===!1;const p=f?c:s;return p&&typeof p!="boolean"&&!Ef(p)&&(Array.isArray(p)?p:[p]).forEach(x=>{const j=eg(e,x);if(!j)return;const{transitionEnd:w,transition:k,...h}=j;for(const g in h){let y=h[g];if(Array.isArray(y)){const S=f?y.length-1:0;y=y[S]}y!==null&&(o[g]=y)}for(const g in w)o[g]=w[g]}),o}const Le=e=>e;class x2{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function XC(e){let t=new x2,n=new x2,i=0,o=!1,a=!1;const s=new WeakSet,c={schedule:(d,u=!1,f=!1)=>{const p=f&&o,m=p?t:n;return u&&s.add(d),m.add(d)&&p&&o&&(i=t.order.length),d},cancel:d=>{n.remove(d),s.delete(d)},process:d=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),i=t.order.length,i)for(let u=0;u<i;u++){const f=t.order[u];f(d),s.has(f)&&(c.schedule(f),e())}o=!1,a&&(a=!1,c.process(d))}};return c}const Wl=["prepare","read","update","preRender","render","postRender"],QC=40;function qC(e,t){let n=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=Wl.reduce((p,m)=>(p[m]=XC(()=>n=!0),p),{}),s=p=>a[p].process(o),c=()=>{const p=performance.now();n=!1,o.delta=i?1e3/60:Math.max(Math.min(p-o.timestamp,QC),1),o.timestamp=p,o.isProcessing=!0,Wl.forEach(s),o.isProcessing=!1,n&&t&&(i=!1,e(c))},d=()=>{n=!0,i=!0,o.isProcessing||e(c)};return{schedule:Wl.reduce((p,m)=>{const x=a[m];return p[m]=(j,w=!1,k=!1)=>(n||d(),x.schedule(j,w,k)),p},{}),cancel:p=>Wl.forEach(m=>a[m].cancel(p)),state:o,steps:a}}const{schedule:le,cancel:nn,state:Ye,steps:k0}=qC(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),KC={useVisualState:W8({scrapeMotionValuesFromProps:U8,createRenderState:V8,onMount:(e,t,{renderState:n,latestValues:i})=>{le.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),le.render(()=>{K1(n,i,{enableHardwareAcceleration:!1},Z1(t.tagName),e.transformTemplate),H8(t,n)})}})},ZC={useVisualState:W8({scrapeMotionValuesFromProps:J1,createRenderState:q1})};function JC(e,{forwardMotionProps:t=!1},n,i){return{...X1(e)?KC:ZC,preloadedFeatures:n,useRender:HC(t),createVisualElement:i,Component:e}}function $n(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const Y8=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Mf(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const eS=e=>t=>Y8(t)&&e(t,Mf(t));function Nn(e,t,n,i){return $n(e,t,eS(n),i)}const tS=(e,t)=>n=>t(e(n)),Rr=(...e)=>e.reduce(tS);function G8(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const y2=G8("dragHorizontal"),v2=G8("dragVertical");function X8(e){let t=!1;if(e==="y")t=v2();else if(e==="x")t=y2();else{const n=y2(),i=v2();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function Q8(){const e=X8(!0);return e?(e(),!1):!0}class qr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function b2(e,t){const n="pointer"+(t?"enter":"leave"),i="onHover"+(t?"Start":"End"),o=(a,s)=>{if(a.pointerType==="touch"||Q8())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[i]&&le.update(()=>c[i](a,s))};return Nn(e.current,n,o,{passive:!e.getProps()[i]})}class nS extends qr{mount(){this.unmount=Rr(b2(this.node,!0),b2(this.node,!1))}unmount(){}}class rS extends qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rr($n(this.node.current,"focus",()=>this.onFocus()),$n(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const q8=(e,t)=>t?e===t?!0:q8(e,t.parentElement):!1;function C0(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Mf(n))}class iS extends qr{constructor(){super(...arguments),this.removeStartListeners=Le,this.removeEndListeners=Le,this.removeAccessibleListeners=Le,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),a=Nn(window,"pointerup",(c,d)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:p}=this.node.getProps();le.update(()=>{!p&&!q8(this.node.current,c.target)?f&&f(c,d):u&&u(c,d)})},{passive:!(i.onTap||i.onPointerUp)}),s=Nn(window,"pointercancel",(c,d)=>this.cancelPress(c,d),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Rr(a,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const s=c=>{c.key!=="Enter"||!this.checkPressEnd()||C0("up",(d,u)=>{const{onTap:f}=this.node.getProps();f&&le.update(()=>f(d,u))})};this.removeEndListeners(),this.removeEndListeners=$n(this.node.current,"keyup",s),C0("down",(c,d)=>{this.startPress(c,d)})},n=$n(this.node.current,"keydown",t),i=()=>{this.isPressing&&C0("cancel",(a,s)=>this.cancelPress(a,s))},o=$n(this.node.current,"blur",i);this.removeAccessibleListeners=Rr(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&le.update(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Q8()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&le.update(()=>i(t,n))}mount(){const t=this.node.getProps(),n=Nn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=$n(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Rr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const rh=new WeakMap,S0=new WeakMap,oS=e=>{const t=rh.get(e.target);t&&t(e)},aS=e=>{e.forEach(oS)};function sS({root:e,...t}){const n=e||document;S0.has(n)||S0.set(n,{});const i=S0.get(n),o=JSON.stringify(t);return i[o]||(i[o]=new IntersectionObserver(aS,{root:e,...t})),i[o]}function lS(e,t,n){const i=sS(t);return rh.set(e,n),i.observe(e),()=>{rh.delete(e),i.unobserve(e)}}const cS={some:0,all:1};class dS extends qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:o="some",once:a}=t,s={root:n?n.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:cS[o]},c=d=>{const{isIntersecting:u}=d;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),m=u?f:p;m&&m(d)};return lS(this.node.current,s,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(uS(t,n))&&this.startObserver()}unmount(){}}function uS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const fS={inView:{Feature:dS},tap:{Feature:iS},focus:{Feature:rS},hover:{Feature:nS}};function K8(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function pS(e){const t={};return e.values.forEach((n,i)=>t[i]=n.get()),t}function mS(e){const t={};return e.values.forEach((n,i)=>t[i]=n.getVelocity()),t}function Af(e,t,n){const i=e.getProps();return eg(i,t,n!==void 0?n:i.custom,pS(e),mS(e))}let Z8=Le,$f=Le;const Or=e=>e*1e3,Dn=e=>e/1e3,hS={current:!1},J8=e=>Array.isArray(e)&&typeof e[0]=="number";function e6(e){return!!(!e||typeof e=="string"&&t6[e]||J8(e)||Array.isArray(e)&&e.every(e6))}const ls=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,t6={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ls([0,.65,.55,1]),circOut:ls([.55,0,1,.45]),backIn:ls([.31,.01,.66,-.59]),backOut:ls([.33,1.53,.69,.99])};function n6(e){if(e)return J8(e)?ls(e):Array.isArray(e)?e.map(n6):t6[e]}function gS(e,t,n,{delay:i=0,duration:o,repeat:a=0,repeatType:s="loop",ease:c,times:d}={}){const u={[t]:n};d&&(u.offset=d);const f=n6(c);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:i,duration:o,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:a+1,direction:s==="reverse"?"alternate":"normal"})}function xS(e,{repeat:t,repeatType:n="loop"}){const i=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[i]}const r6=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,yS=1e-7,vS=12;function bS(e,t,n,i,o){let a,s,c=0;do s=t+(n-t)/2,a=r6(s,i,o)-e,a>0?n=s:t=s;while(Math.abs(a)>yS&&++c<vS);return s}function gl(e,t,n,i){if(e===t&&n===i)return Le;const o=a=>bS(a,0,1,e,n);return a=>a===0||a===1?a:r6(o(a),t,i)}const wS=gl(.42,0,1,1),jS=gl(0,0,.58,1),i6=gl(.42,0,.58,1),kS=e=>Array.isArray(e)&&typeof e[0]!="number",o6=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,a6=e=>t=>1-e(1-t),tg=e=>1-Math.sin(Math.acos(e)),s6=a6(tg),CS=o6(tg),l6=gl(.33,1.53,.69,.99),ng=a6(l6),SS=o6(ng),zS=e=>(e*=2)<1?.5*ng(e):.5*(2-Math.pow(2,-10*(e-1))),PS={linear:Le,easeIn:wS,easeInOut:i6,easeOut:jS,circIn:tg,circInOut:CS,circOut:s6,backIn:ng,backInOut:SS,backOut:l6,anticipate:zS},w2=e=>{if(Array.isArray(e)){$f(e.length===4);const[t,n,i,o]=e;return gl(t,n,i,o)}else if(typeof e=="string")return PS[e];return e},rg=(e,t)=>n=>!!(pl(n)&&EC.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),c6=(e,t,n)=>i=>{if(!pl(i))return i;const[o,a,s,c]=i.match(If);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(s),alpha:c!==void 0?parseFloat(c):1}},TS=e=>Vr(0,255,e),z0={...$i,transform:e=>Math.round(TS(e))},xi={test:rg("rgb","red"),parse:c6("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+z0.transform(e)+", "+z0.transform(t)+", "+z0.transform(n)+", "+ws(bs.transform(i))+")"};function ES(e){let t="",n="",i="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,i+=i,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const ih={test:rg("#"),parse:ES,transform:xi.transform},To={test:rg("hsl","hue"),parse:c6("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+vn.transform(ws(t))+", "+vn.transform(ws(n))+", "+ws(bs.transform(i))+")"},ot={test:e=>xi.test(e)||ih.test(e)||To.test(e),parse:e=>xi.test(e)?xi.parse(e):To.test(e)?To.parse(e):ih.parse(e),transform:e=>pl(e)?e:e.hasOwnProperty("red")?xi.transform(e):To.transform(e)},Ce=(e,t,n)=>-n*e+n*t+e;function P0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function LS({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let o=0,a=0,s=0;if(!t)o=a=s=n;else{const c=n<.5?n*(1+t):n+t-n*t,d=2*n-c;o=P0(d,c,e+1/3),a=P0(d,c,e),s=P0(d,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:i}}const T0=(e,t,n)=>{const i=e*e;return Math.sqrt(Math.max(0,n*(t*t-i)+i))},IS=[ih,xi,To],MS=e=>IS.find(t=>t.test(e));function j2(e){const t=MS(e);let n=t.parse(e);return t===To&&(n=LS(n)),n}const d6=(e,t)=>{const n=j2(e),i=j2(t),o={...n};return a=>(o.red=T0(n.red,i.red,a),o.green=T0(n.green,i.green,a),o.blue=T0(n.blue,i.blue,a),o.alpha=Ce(n.alpha,i.alpha,a),xi.transform(o))};function AS(e){var t,n;return isNaN(e)&&pl(e)&&(((t=e.match(If))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(O8))===null||n===void 0?void 0:n.length)||0)>0}const u6={regex:PC,countKey:"Vars",token:"${v}",parse:Le},f6={regex:O8,countKey:"Colors",token:"${c}",parse:ot.parse},p6={regex:If,countKey:"Numbers",token:"${n}",parse:$i.parse};function E0(e,{regex:t,countKey:n,token:i,parse:o}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,i),e.values.push(...a.map(o)))}function Wu(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&E0(n,u6),E0(n,f6),E0(n,p6),n}function m6(e){return Wu(e).values}function h6(e){const{values:t,numColors:n,numVars:i,tokenised:o}=Wu(e),a=t.length;return s=>{let c=o;for(let d=0;d<a;d++)d<i?c=c.replace(u6.token,s[d]):d<i+n?c=c.replace(f6.token,ot.transform(s[d])):c=c.replace(p6.token,ws(s[d]));return c}}const $S=e=>typeof e=="number"?0:e;function RS(e){const t=m6(e);return h6(e)(t.map($S))}const _r={test:AS,parse:m6,createTransformer:h6,getAnimatableNone:RS},g6=(e,t)=>n=>`${n>0?t:e}`;function x6(e,t){return typeof e=="number"?n=>Ce(e,t,n):ot.test(e)?d6(e,t):e.startsWith("var(")?g6(e,t):v6(e,t)}const y6=(e,t)=>{const n=[...e],i=n.length,o=e.map((a,s)=>x6(a,t[s]));return a=>{for(let s=0;s<i;s++)n[s]=o[s](a);return n}},OS=(e,t)=>{const n={...e,...t},i={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(i[o]=x6(e[o],t[o]));return o=>{for(const a in i)n[a]=i[a](o);return n}},v6=(e,t)=>{const n=_r.createTransformer(t),i=Wu(e),o=Wu(t);return i.numVars===o.numVars&&i.numColors===o.numColors&&i.numNumbers>=o.numNumbers?Rr(y6(i.values,o.values),n):g6(e,t)},Jo=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},k2=(e,t)=>n=>Ce(e,t,n);function NS(e){return typeof e=="number"?k2:typeof e=="string"?ot.test(e)?d6:v6:Array.isArray(e)?y6:typeof e=="object"?OS:k2}function DS(e,t,n){const i=[],o=n||NS(e[0]),a=e.length-1;for(let s=0;s<a;s++){let c=o(e[s],e[s+1]);if(t){const d=Array.isArray(t)?t[s]||Le:t;c=Rr(d,c)}i.push(c)}return i}function Rf(e,t,{clamp:n=!0,ease:i,mixer:o}={}){const a=e.length;if($f(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=DS(t,i,o),c=s.length,d=u=>{let f=0;if(c>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const p=Jo(e[f],e[f+1],u);return s[f](p)};return n?u=>d(Vr(e[0],e[a-1],u)):d}function FS(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const o=Jo(0,t,i);e.push(Ce(n,1,o))}}function b6(e){const t=[0];return FS(t,e.length-1),t}function VS(e,t){return e.map(n=>n*t)}function _S(e,t){return e.map(()=>t||i6).splice(0,e.length-1)}function Yu({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const o=kS(i)?i.map(w2):w2(i),a={done:!1,value:t[0]},s=VS(n&&n.length===t.length?n:b6(t),e),c=Rf(s,t,{ease:Array.isArray(o)?o:_S(t,o)});return{calculatedDuration:e,next:d=>(a.value=c(d),a.done=d>=e,a)}}function ig(e,t){return t?e*(1e3/t):0}const BS=5;function w6(e,t,n){const i=Math.max(t-BS,0);return ig(n-e(i),t-i)}const L0=.001,HS=.01,C2=10,US=.05,WS=1;function YS({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let o,a;Z8(e<=Or(C2));let s=1-t;s=Vr(US,WS,s),e=Vr(HS,C2,Dn(e)),s<1?(o=u=>{const f=u*s,p=f*e,m=f-n,x=oh(u,s),j=Math.exp(-p);return L0-m/x*j},a=u=>{const p=u*s*e,m=p*n+n,x=Math.pow(s,2)*Math.pow(u,2)*e,j=Math.exp(-p),w=oh(Math.pow(u,2),s);return(-o(u)+L0>0?-1:1)*((m-x)*j)/w}):(o=u=>{const f=Math.exp(-u*e),p=(u-n)*e+1;return-L0+f*p},a=u=>{const f=Math.exp(-u*e),p=(n-u)*(e*e);return f*p});const c=5/e,d=XS(o,a,c);if(e=Or(e),isNaN(d))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(d,2)*i;return{stiffness:u,damping:s*2*Math.sqrt(i*u),duration:e}}}const GS=12;function XS(e,t,n){let i=n;for(let o=1;o<GS;o++)i=i-e(i)/t(i);return i}function oh(e,t){return e*Math.sqrt(1-t*t)}const QS=["duration","bounce"],qS=["stiffness","damping","mass"];function S2(e,t){return t.some(n=>e[n]!==void 0)}function KS(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!S2(e,qS)&&S2(e,QS)){const n=YS(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function j6({keyframes:e,restDelta:t,restSpeed:n,...i}){const o=e[0],a=e[e.length-1],s={done:!1,value:o},{stiffness:c,damping:d,mass:u,duration:f,velocity:p,isResolvedFromDuration:m}=KS({...i,velocity:-Dn(i.velocity||0)}),x=p||0,j=d/(2*Math.sqrt(c*u)),w=a-o,k=Dn(Math.sqrt(c/u)),h=Math.abs(w)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let g;if(j<1){const y=oh(k,j);g=S=>{const P=Math.exp(-j*k*S);return a-P*((x+j*k*w)/y*Math.sin(y*S)+w*Math.cos(y*S))}}else if(j===1)g=y=>a-Math.exp(-k*y)*(w+(x+k*w)*y);else{const y=k*Math.sqrt(j*j-1);g=S=>{const P=Math.exp(-j*k*S),E=Math.min(y*S,300);return a-P*((x+j*k*w)*Math.sinh(E)+y*w*Math.cosh(E))/y}}return{calculatedDuration:m&&f||null,next:y=>{const S=g(y);if(m)s.done=y>=f;else{let P=x;y!==0&&(j<1?P=w6(g,y,S):P=0);const E=Math.abs(P)<=n,T=Math.abs(a-S)<=t;s.done=E&&T}return s.value=s.done?a:S,s}}}function z2({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:c,max:d,restDelta:u=.5,restSpeed:f}){const p=e[0],m={done:!1,value:p},x=I=>c!==void 0&&I<c||d!==void 0&&I>d,j=I=>c===void 0?d:d===void 0||Math.abs(c-I)<Math.abs(d-I)?c:d;let w=n*t;const k=p+w,h=s===void 0?k:s(k);h!==k&&(w=h-p);const g=I=>-w*Math.exp(-I/i),y=I=>h+g(I),S=I=>{const R=g(I),D=y(I);m.done=Math.abs(R)<=u,m.value=m.done?h:D};let P,E;const T=I=>{x(m.value)&&(P=I,E=j6({keyframes:[m.value,j(m.value)],velocity:w6(y,I,m.value),damping:o,stiffness:a,restDelta:u,restSpeed:f}))};return T(0),{calculatedDuration:null,next:I=>{let R=!1;return!E&&P===void 0&&(R=!0,S(I),T(I)),P!==void 0&&I>P?E.next(I-P):(!R&&S(I),m)}}}const ZS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>le.update(t,!0),stop:()=>nn(t),now:()=>Ye.isProcessing?Ye.timestamp:performance.now()}},P2=2e4;function T2(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<P2;)t+=n,i=e.next(t);return t>=P2?1/0:t}const JS={decay:z2,inertia:z2,tween:Yu,keyframes:Yu,spring:j6};function Gu({autoplay:e=!0,delay:t=0,driver:n=ZS,keyframes:i,type:o="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:c="loop",onPlay:d,onStop:u,onComplete:f,onUpdate:p,...m}){let x=1,j=!1,w,k;const h=()=>{k=new Promise(V=>{w=V})};h();let g;const y=JS[o]||Yu;let S;y!==Yu&&typeof i[0]!="number"&&(S=Rf([0,100],i,{clamp:!1}),i=[0,100]);const P=y({...m,keyframes:i});let E;c==="mirror"&&(E=y({...m,keyframes:[...i].reverse(),velocity:-(m.velocity||0)}));let T="idle",I=null,R=null,D=null;P.calculatedDuration===null&&a&&(P.calculatedDuration=T2(P));const{calculatedDuration:ne}=P;let q=1/0,he=1/0;ne!==null&&(q=ne+s,he=q*(a+1)-s);let G=0;const J=V=>{if(R===null)return;x>0&&(R=Math.min(R,V)),x<0&&(R=Math.min(V-he/x,R)),I!==null?G=I:G=Math.round(V-R)*x;const Z=G-t*(x>=0?1:-1),rt=x>=0?Z<0:Z>he;G=Math.max(Z,0),T==="finished"&&I===null&&(G=he);let Ae=G,Qe=P;if(a){const z=Math.min(G,he)/q;let O=Math.floor(z),X=z%1;!X&&z>=1&&(X=1),X===1&&O--,O=Math.min(O,a+1),!!(O%2)&&(c==="reverse"?(X=1-X,s&&(X-=s/q)):c==="mirror"&&(Qe=E)),Ae=Vr(0,1,X)*q}const se=rt?{done:!1,value:i[0]}:Qe.next(Ae);S&&(se.value=S(se.value));let{done:qe}=se;!rt&&ne!==null&&(qe=x>=0?G>=he:G<=0);const it=I===null&&(T==="finished"||T==="running"&&qe);return p&&p(se.value),it&&$(),se},U=()=>{g&&g.stop(),g=void 0},ce=()=>{T="idle",U(),w(),h(),R=D=null},$=()=>{T="finished",f&&f(),U(),w()},F=()=>{if(j)return;g||(g=n(J));const V=g.now();d&&d(),I!==null?R=V-I:(!R||T==="finished")&&(R=V),T==="finished"&&h(),D=R,I=null,T="running",g.start()};e&&F();const B={then(V,Z){return k.then(V,Z)},get time(){return Dn(G)},set time(V){V=Or(V),G=V,I!==null||!g||x===0?I=V:R=g.now()-V/x},get duration(){const V=P.calculatedDuration===null?T2(P):P.calculatedDuration;return Dn(V)},get speed(){return x},set speed(V){V===x||!g||(x=V,B.time=Dn(G))},get state(){return T},play:F,pause:()=>{T="paused",I=G},stop:()=>{j=!0,T!=="idle"&&(T="idle",u&&u(),ce())},cancel:()=>{D!==null&&J(D),ce()},complete:()=>{T="finished"},sample:V=>(R=0,J(V))};return B}function ez(e){let t;return()=>(t===void 0&&(t=e()),t)}const tz=ez(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),nz=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Yl=10,rz=2e4,iz=(e,t)=>t.type==="spring"||e==="backgroundColor"||!e6(t.ease);function oz(e,t,{onUpdate:n,onComplete:i,...o}){if(!(tz()&&nz.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,c,d,u=!1;const f=()=>{d=new Promise(y=>{c=y})};f();let{keyframes:p,duration:m=300,ease:x,times:j}=o;if(iz(t,o)){const y=Gu({...o,repeat:0,delay:0});let S={done:!1,value:p[0]};const P=[];let E=0;for(;!S.done&&E<rz;)S=y.sample(E),P.push(S.value),E+=Yl;j=void 0,p=P,m=E-Yl,x="linear"}const w=gS(e.owner.current,t,p,{...o,duration:m,ease:x,times:j}),k=()=>{u=!1,w.cancel()},h=()=>{u=!0,le.update(k),c(),f()};return w.onfinish=()=>{u||(e.set(xS(p,o)),i&&i(),h())},{then(y,S){return d.then(y,S)},attachTimeline(y){return w.timeline=y,w.onfinish=null,Le},get time(){return Dn(w.currentTime||0)},set time(y){w.currentTime=Or(y)},get speed(){return w.playbackRate},set speed(y){w.playbackRate=y},get duration(){return Dn(m)},play:()=>{s||(w.play(),nn(k))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:y}=w;if(y){const S=Gu({...o,autoplay:!1});e.setWithVelocity(S.sample(y-Yl).value,S.sample(y).value,Yl)}h()},complete:()=>{u||w.finish()},cancel:h}}function az({keyframes:e,delay:t,onUpdate:n,onComplete:i}){const o=()=>(n&&n(e[e.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Le,pause:Le,stop:Le,then:a=>(a(),Promise.resolve()),cancel:Le,complete:Le});return t?Gu({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const sz={type:"spring",stiffness:500,damping:25,restSpeed:10},lz=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),cz={type:"keyframes",duration:.8},dz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},uz=(e,{keyframes:t})=>t.length>2?cz:Ai.has(e)?e.startsWith("scale")?lz(t[1]):sz:dz,ah=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_r.test(t)||t==="0")&&!t.startsWith("url(")),fz=new Set(["brightness","contrast","saturate","opacity"]);function pz(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(If)||[];if(!i)return e;const o=n.replace(i,"");let a=fz.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+o+")"}const mz=/([a-z-]*)\(.*?\)/g,sh={..._r,getAnimatableNone:e=>{const t=e.match(mz);return t?t.map(pz).join(" "):e}},hz={...N8,color:ot,backgroundColor:ot,outlineColor:ot,fill:ot,stroke:ot,borderColor:ot,borderTopColor:ot,borderRightColor:ot,borderBottomColor:ot,borderLeftColor:ot,filter:sh,WebkitFilter:sh},og=e=>hz[e];function k6(e,t){let n=og(e);return n!==sh&&(n=_r),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const C6=e=>/^0[^.\s]+$/.test(e);function gz(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||C6(e)}function xz(e,t,n,i){const o=ah(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const s=i.from!==void 0?i.from:e.get();let c;const d=[];for(let u=0;u<a.length;u++)a[u]===null&&(a[u]=u===0?s:a[u-1]),gz(a[u])&&d.push(u),typeof a[u]=="string"&&a[u]!=="none"&&a[u]!=="0"&&(c=a[u]);if(o&&d.length&&c)for(let u=0;u<d.length;u++){const f=d[u];a[f]=k6(t,c)}return a}function yz({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:c,from:d,elapsed:u,...f}){return!!Object.keys(f).length}function ag(e,t){return e[t]||e.default||e}const vz={skipAnimations:!1},sg=(e,t,n,i={})=>o=>{const a=ag(i,e)||{},s=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Or(s);const d=xz(t,e,n,a),u=d[0],f=d[d.length-1],p=ah(e,u),m=ah(e,f);let x={keyframes:d,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:j=>{t.set(j),a.onUpdate&&a.onUpdate(j)},onComplete:()=>{o(),a.onComplete&&a.onComplete()}};if(yz(a)||(x={...x,...uz(e,x)}),x.duration&&(x.duration=Or(x.duration)),x.repeatDelay&&(x.repeatDelay=Or(x.repeatDelay)),!p||!m||hS.current||a.type===!1||vz.skipAnimations)return az(x);if(!i.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const j=oz(t,e,x);if(j)return j}return Gu(x)};function Xu(e){return!!(xt(e)&&e.add)}const S6=e=>/^\-?\d*\.?\d+$/.test(e);function lg(e,t){e.indexOf(t)===-1&&e.push(t)}function cg(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class dg{constructor(){this.subscriptions=[]}add(t){return lg(this.subscriptions,t),()=>cg(this.subscriptions,t)}notify(t,n,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,i);else for(let a=0;a<o;a++){const s=this.subscriptions[a];s&&s(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bz=e=>!isNaN(parseFloat(e)),js={current:void 0};class wz{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,o=!0)=>{this.prev=this.current,this.current=i;const{delta:a,timestamp:s}=Ye;this.lastUpdated!==s&&(this.timeDelta=a,this.lastUpdated=s,le.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>le.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=bz(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new dg);const i=this.events[t].add(n);return t==="change"?()=>{i(),le.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=t,this.timeDelta=i}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return js.current&&js.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ig(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qt(e,t){return new wz(e,t)}const z6=e=>t=>t.test(e),jz={test:e=>e==="auto",parse:e=>e},P6=[$i,H,vn,hr,IC,LC,jz],Sa=e=>P6.find(z6(e)),kz=[...P6,ot,_r],Cz=e=>kz.find(z6(e));function Sz(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qt(n))}function zz(e,t){const n=Af(e,t);let{transitionEnd:i={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...i};for(const s in a){const c=WC(a[s]);Sz(e,s,c)}}function Pz(e,t,n){var i,o;const a=Object.keys(t).filter(c=>!e.hasValue(c)),s=a.length;if(s)for(let c=0;c<s;c++){const d=a[c],u=t[d];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(o=(i=n[d])!==null&&i!==void 0?i:e.readValue(d))!==null&&o!==void 0?o:t[d]),f!=null&&(typeof f=="string"&&(S6(f)||C6(f))?f=parseFloat(f):!Cz(f)&&_r.test(u)&&(f=k6(d,u)),e.addValue(d,Qt(f,{owner:e})),n[d]===void 0&&(n[d]=f),f!==null&&e.setBaseTarget(d,f))}}function Tz(e,t){return t?(t[e]||t.default||t).from:void 0}function Ez(e,t,n){const i={};for(const o in e){const a=Tz(o,t);if(a!==void 0)i[o]=a;else{const s=n.getValue(o);s&&(i[o]=s.get())}}return i}function Lz({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Iz(e,t){const n=e.get();if(Array.isArray(t)){for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}else return n!==t}function T6(e,t,{delay:n=0,transitionOverride:i,type:o}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:s,...c}=e.makeTargetAnimatable(t);const d=e.getValue("willChange");i&&(a=i);const u=[],f=o&&e.animationState&&e.animationState.getState()[o];for(const p in c){const m=e.getValue(p),x=c[p];if(!m||x===void 0||f&&Lz(f,p))continue;const j={delay:n,elapsed:0,...ag(a||{},p)};if(window.HandoffAppearAnimations){const h=e.getProps()[L8];if(h){const g=window.HandoffAppearAnimations(h,p,m,le);g!==null&&(j.elapsed=g,j.isHandoff=!0)}}let w=!j.isHandoff&&!Iz(m,x);if(j.type==="spring"&&(m.getVelocity()||j.velocity)&&(w=!1),m.animation&&(w=!1),w)continue;m.start(sg(p,m,x,e.shouldReduceMotion&&Ai.has(p)?{type:!1}:j));const k=m.animation;Xu(d)&&(d.add(p),k.then(()=>d.remove(p))),u.push(k)}return s&&Promise.all(u).then(()=>{s&&zz(e,s)}),u}function lh(e,t,n={}){const i=Af(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(T6(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=o;return Mz(e,t,u+d,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,u]=c==="beforeChildren"?[a,s]:[s,a];return d().then(()=>u())}else return Promise.all([a(),s(n.delay)])}function Mz(e,t,n=0,i=0,o=1,a){const s=[],c=(e.variantChildren.size-1)*i,d=o===1?(u=0)=>u*i:(u=0)=>c-u*i;return Array.from(e.variantChildren).sort(Az).forEach((u,f)=>{u.notify("AnimationStart",t),s.push(lh(u,t,{...a,delay:n+d(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Az(e,t){return e.sortNodePosition(t)}function $z(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const o=t.map(a=>lh(e,a,n));i=Promise.all(o)}else if(typeof t=="string")i=lh(e,t,n);else{const o=typeof t=="function"?Af(e,t,n.custom):t;i=Promise.all(T6(e,o,n))}return i.then(()=>e.notify("AnimationComplete",t))}const Rz=[...W1].reverse(),Oz=W1.length;function Nz(e){return t=>Promise.all(t.map(({animation:n,options:i})=>$z(e,n,i)))}function Dz(e){let t=Nz(e);const n=Vz();let i=!0;const o=(d,u)=>{const f=Af(e,u);if(f){const{transition:p,transitionEnd:m,...x}=f;d={...d,...x,...m}}return d};function a(d){t=d(e)}function s(d,u){const f=e.getProps(),p=e.getVariantContext(!0)||{},m=[],x=new Set;let j={},w=1/0;for(let h=0;h<Oz;h++){const g=Rz[h],y=n[g],S=f[g]!==void 0?f[g]:p[g],P=Xs(S),E=g===u?y.isActive:null;E===!1&&(w=h);let T=S===p[g]&&S!==f[g]&&P;if(T&&i&&e.manuallyAnimateOnMount&&(T=!1),y.protectedKeys={...j},!y.isActive&&E===null||!S&&!y.prevProp||Ef(S)||typeof S=="boolean")continue;let R=Fz(y.prevProp,S)||g===u&&y.isActive&&!T&&P||h>w&&P,D=!1;const ne=Array.isArray(S)?S:[S];let q=ne.reduce(o,{});E===!1&&(q={});const{prevResolvedValues:he={}}=y,G={...he,...q},J=U=>{R=!0,x.has(U)&&(D=!0,x.delete(U)),y.needsAnimating[U]=!0};for(const U in G){const ce=q[U],$=he[U];if(j.hasOwnProperty(U))continue;let F=!1;Uu(ce)&&Uu($)?F=!K8(ce,$):F=ce!==$,F?ce!==void 0?J(U):x.add(U):ce!==void 0&&x.has(U)?J(U):y.protectedKeys[U]=!0}y.prevProp=S,y.prevResolvedValues=q,y.isActive&&(j={...j,...q}),i&&e.blockInitialAnimation&&(R=!1),R&&(!T||D)&&m.push(...ne.map(U=>({animation:U,options:{type:g,...d}})))}if(x.size){const h={};x.forEach(g=>{const y=e.getBaseTarget(g);y!==void 0&&(h[g]=y)}),m.push({animation:h})}let k=!!m.length;return i&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(k=!1),i=!1,k?t(m):Promise.resolve()}function c(d,u,f){var p;if(n[d].isActive===u)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(x=>{var j;return(j=x.animationState)===null||j===void 0?void 0:j.setActive(d,u)}),n[d].isActive=u;const m=s(f,d);for(const x in n)n[x].protectedKeys={};return m}return{animateChanges:s,setActive:c,setAnimateFunction:a,getState:()=>n}}function Fz(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K8(t,e):!1}function Jr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vz(){return{animate:Jr(!0),whileInView:Jr(),whileHover:Jr(),whileTap:Jr(),whileDrag:Jr(),whileFocus:Jr(),exit:Jr()}}class _z extends qr{constructor(t){super(t),t.animationState||(t.animationState=Dz(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ef(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Bz=0;class Hz extends qr{constructor(){super(...arguments),this.id=Bz++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const a=this.node.animationState.setActive("exit",!t,{custom:i??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Uz={animation:{Feature:_z},exit:{Feature:Hz}},E2=(e,t)=>Math.abs(e-t);function Wz(e,t){const n=E2(e.x,t.x),i=E2(e.y,t.y);return Math.sqrt(n**2+i**2)}class E6{constructor(t,n,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=M0(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,x=Wz(p.offset,{x:0,y:0})>=3;if(!m&&!x)return;const{point:j}=p,{timestamp:w}=Ye;this.history.push({...j,timestamp:w});const{onStart:k,onMove:h}=this.handlers;m||(k&&k(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,p)},this.handlePointerMove=(p,m)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=I0(m,this.transformPagePoint),le.update(this.updatePoint,!0)},this.handlePointerUp=(p,m)=>{this.end();const{onEnd:x,onSessionEnd:j,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=M0(p.type==="pointercancel"?this.lastMoveEventInfo:I0(m,this.transformPagePoint),this.history);this.startEvent&&x&&x(p,k),j&&j(p,k)},!Y8(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=i,this.contextWindow=o||window;const s=Mf(t),c=I0(s,this.transformPagePoint),{point:d}=c,{timestamp:u}=Ye;this.history=[{...d,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,M0(c,this.history)),this.removeListeners=Rr(Nn(this.contextWindow,"pointermove",this.handlePointerMove),Nn(this.contextWindow,"pointerup",this.handlePointerUp),Nn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),nn(this.updatePoint)}}function I0(e,t){return t?{point:t(e.point)}:e}function L2(e,t){return{x:e.x-t.x,y:e.y-t.y}}function M0({point:e},t){return{point:e,delta:L2(e,L6(t)),offset:L2(e,Yz(t)),velocity:Gz(t,.1)}}function Yz(e){return e[0]}function L6(e){return e[e.length-1]}function Gz(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const o=L6(e);for(;n>=0&&(i=e[n],!(o.timestamp-i.timestamp>Or(t)));)n--;if(!i)return{x:0,y:0};const a=Dn(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const s={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ct(e){return e.max-e.min}function ch(e,t=0,n=.01){return Math.abs(e-t)<=n}function I2(e,t,n,i=.5){e.origin=i,e.originPoint=Ce(t.min,t.max,e.origin),e.scale=Ct(n)/Ct(t),(ch(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Ce(n.min,n.max,e.origin)-e.originPoint,(ch(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ks(e,t,n,i){I2(e.x,t.x,n.x,i?i.originX:void 0),I2(e.y,t.y,n.y,i?i.originY:void 0)}function M2(e,t,n){e.min=n.min+t.min,e.max=e.min+Ct(t)}function Xz(e,t,n){M2(e.x,t.x,n.x),M2(e.y,t.y,n.y)}function A2(e,t,n){e.min=t.min-n.min,e.max=e.min+Ct(t)}function Cs(e,t,n){A2(e.x,t.x,n.x),A2(e.y,t.y,n.y)}function Qz(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?Ce(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?Ce(n,e,i.max):Math.min(e,n)),e}function $2(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function qz(e,{top:t,left:n,bottom:i,right:o}){return{x:$2(e.x,n,o),y:$2(e.y,t,i)}}function R2(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function Kz(e,t){return{x:R2(e.x,t.x),y:R2(e.y,t.y)}}function Zz(e,t){let n=.5;const i=Ct(e),o=Ct(t);return o>i?n=Jo(t.min,t.max-i,e.min):i>o&&(n=Jo(e.min,e.max-o,t.min)),Vr(0,1,n)}function Jz(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const dh=.35;function eP(e=dh){return e===!1?e=0:e===!0&&(e=dh),{x:O2(e,"left","right"),y:O2(e,"top","bottom")}}function O2(e,t,n){return{min:N2(e,t),max:N2(e,n)}}function N2(e,t){return typeof e=="number"?e:e[t]||0}const D2=()=>({translate:0,scale:1,origin:0,originPoint:0}),Eo=()=>({x:D2(),y:D2()}),F2=()=>({min:0,max:0}),Oe=()=>({x:F2(),y:F2()});function Ot(e){return[e("x"),e("y")]}function I6({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function tP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function nP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function A0(e){return e===void 0||e===1}function uh({scale:e,scaleX:t,scaleY:n}){return!A0(e)||!A0(t)||!A0(n)}function di(e){return uh(e)||M6(e)||e.z||e.rotate||e.rotateX||e.rotateY}function M6(e){return V2(e.x)||V2(e.y)}function V2(e){return e&&e!=="0%"}function Qu(e,t,n){const i=e-n,o=t*i;return n+o}function _2(e,t,n,i,o){return o!==void 0&&(e=Qu(e,o,i)),Qu(e,n,i)+t}function fh(e,t=0,n=1,i,o){e.min=_2(e.min,t,n,i,o),e.max=_2(e.max,t,n,i,o)}function A6(e,{x:t,y:n}){fh(e.x,t.translate,t.scale,t.originPoint),fh(e.y,n.translate,n.scale,n.originPoint)}function rP(e,t,n,i=!1){const o=n.length;if(!o)return;t.x=t.y=1;let a,s;for(let c=0;c<o;c++){a=n[c],s=a.projectionDelta;const d=a.instance;d&&d.style&&d.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Lo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,A6(e,s)),i&&di(a.latestValues)&&Lo(e,a.latestValues))}t.x=B2(t.x),t.y=B2(t.y)}function B2(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function vr(e,t){e.min=e.min+t,e.max=e.max+t}function H2(e,t,[n,i,o]){const a=t[o]!==void 0?t[o]:.5,s=Ce(e.min,e.max,a);fh(e,t[n],t[i],s,t.scale)}const iP=["x","scaleX","originX"],oP=["y","scaleY","originY"];function Lo(e,t){H2(e.x,t,iP),H2(e.y,t,oP)}function $6(e,t){return I6(nP(e.getBoundingClientRect(),t))}function aP(e,t,n){const i=$6(e,n),{scroll:o}=t;return o&&(vr(i.x,o.offset.x),vr(i.y,o.offset.y)),i}const R6=({current:e})=>e?e.ownerDocument.defaultView:null,sP=new WeakMap;class lP{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Mf(f,"page").point)},a=(f,p)=>{const{drag:m,dragPropagation:x,onDragStart:j}=this.getProps();if(m&&!x&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=X8(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(k=>{let h=this.getAxisMotionValue(k).get()||0;if(vn.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const y=g.layout.layoutBox[k];y&&(h=Ct(y)*(parseFloat(h)/100))}}this.originPoint[k]=h}),j&&le.update(()=>j(f,p),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(f,p)=>{const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:j,onDrag:w}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:k}=p;if(x&&this.currentDirection===null){this.currentDirection=cP(k),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",p.point,k),this.updateAxis("y",p.point,k),this.visualElement.render(),w&&w(f,p)},c=(f,p)=>this.stop(f,p),d=()=>Ot(f=>{var p;return this.getAnimationState(f)==="paused"&&((p=this.getAxisMotionValue(f).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new E6(t,{onSessionStart:o,onStart:a,onMove:s,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:R6(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&le.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:o}=this.getProps();if(!i||!Gl(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(s=Qz(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Po(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=qz(o.layoutBox,n):this.constraints=!1,this.elastic=eP(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ot(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Jz(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Po(t))return!1;const i=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=aP(i,o.root,this.visualElement.getTransformPagePoint());let s=Kz(o.layout.layoutBox,a);if(n){const c=n(tP(s));this.hasMutatedConstraints=!!c,c&&(s=I6(c))}return s}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},u=Ot(f=>{if(!Gl(f,n,this.currentDirection))return;let p=d&&d[f]||{};s&&(p={min:0,max:0});const m=o?200:1e6,x=o?40:1e7,j={type:"inertia",velocity:i?t[f]:0,bounceStiffness:m,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(f,j)});return Promise.all(u).then(c)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return i.start(sg(t,i,0,n))}stopAnimation(){Ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),i=this.visualElement.getProps(),o=i[n];return o||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Ot(n=>{const{drag:i}=this.getProps();if(!Gl(n,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:c}=o.layout.layoutBox[n];a.set(t[n]-Ce(s,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Po(n)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ot(s=>{const c=this.getAxisMotionValue(s);if(c){const d=c.get();o[s]=Zz({min:d,max:d},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ot(s=>{if(!Gl(s,t,null))return;const c=this.getAxisMotionValue(s),{min:d,max:u}=this.constraints[s];c.set(Ce(d,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;sP.set(this.visualElement,this);const t=this.visualElement.current,n=Nn(t,"pointerdown",d=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();Po(d)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),i();const s=$n(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ot(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=d[f].translate,p.set(p.get()+d[f].translate))}),this.visualElement.render())});return()=>{s(),n(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:s=dh,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:s,dragMomentum:c}}}function Gl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function cP(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class dP extends qr{constructor(t){super(t),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new lP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const U2=e=>(t,n)=>{e&&le.update(()=>e(t,n))};class uP extends qr{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(t){this.session=new E6(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:R6(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:U2(t),onStart:U2(n),onMove:i,onEnd:(a,s)=>{delete this.session,o&&le.update(()=>o(a,s))}}}mount(){this.removePointerDownListener=Nn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function fP(){const e=b.useContext(Pf);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,o=b.useId();return b.useEffect(()=>i(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const su={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function W2(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const za={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=W2(e,t.target.x),i=W2(e,t.target.y);return`${n}% ${i}%`}},pP={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,o=_r.parse(e);if(o.length>5)return i;const a=_r.createTransformer(e),s=typeof o[0]!="number"?1:0,c=n.x.scale*t.x,d=n.y.scale*t.y;o[0+s]/=c,o[1+s]/=d;const u=Ce(c,d,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),a(o)}};class mP extends lt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=t;kC(hP),a&&(n.group&&n.group.add(a),i&&i.register&&o&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),su.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:o,isPresent:a}=this.props,s=i.projection;return s&&(s.isPresent=a,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||le.postRender(()=>{const c=s.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function O6(e){const[t,n]=fP(),i=b.useContext(G1);return lt.createElement(mP,{...e,layoutGroup:i,switchLayoutGroup:b.useContext(M8),isPresent:t,safeToRemove:n})}const hP={borderRadius:{...za,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:za,borderTopRightRadius:za,borderBottomLeftRadius:za,borderBottomRightRadius:za,boxShadow:pP},N6=["TopLeft","TopRight","BottomLeft","BottomRight"],gP=N6.length,Y2=e=>typeof e=="string"?parseFloat(e):e,G2=e=>typeof e=="number"||H.test(e);function xP(e,t,n,i,o,a){o?(e.opacity=Ce(0,n.opacity!==void 0?n.opacity:1,yP(i)),e.opacityExit=Ce(t.opacity!==void 0?t.opacity:1,0,vP(i))):a&&(e.opacity=Ce(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let s=0;s<gP;s++){const c=`border${N6[s]}Radius`;let d=X2(t,c),u=X2(n,c);if(d===void 0&&u===void 0)continue;d||(d=0),u||(u=0),d===0||u===0||G2(d)===G2(u)?(e[c]=Math.max(Ce(Y2(d),Y2(u),i),0),(vn.test(u)||vn.test(d))&&(e[c]+="%")):e[c]=u}(t.rotate||n.rotate)&&(e.rotate=Ce(t.rotate||0,n.rotate||0,i))}function X2(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const yP=D6(0,.5,s6),vP=D6(.5,.95,Le);function D6(e,t,n){return i=>i<e?0:i>t?1:n(Jo(e,t,i))}function Q2(e,t){e.min=t.min,e.max=t.max}function Tt(e,t){Q2(e.x,t.x),Q2(e.y,t.y)}function q2(e,t,n,i,o){return e-=t,e=Qu(e,1/n,i),o!==void 0&&(e=Qu(e,1/o,i)),e}function bP(e,t=0,n=1,i=.5,o,a=e,s=e){if(vn.test(t)&&(t=parseFloat(t),t=Ce(s.min,s.max,t/100)-s.min),typeof t!="number")return;let c=Ce(a.min,a.max,i);e===a&&(c-=t),e.min=q2(e.min,t,n,c,o),e.max=q2(e.max,t,n,c,o)}function K2(e,t,[n,i,o],a,s){bP(e,t[n],t[i],t[o],t.scale,a,s)}const wP=["x","scaleX","originX"],jP=["y","scaleY","originY"];function Z2(e,t,n,i){K2(e.x,t,wP,n?n.x:void 0,i?i.x:void 0),K2(e.y,t,jP,n?n.y:void 0,i?i.y:void 0)}function J2(e){return e.translate===0&&e.scale===1}function F6(e){return J2(e.x)&&J2(e.y)}function kP(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function V6(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function e4(e){return Ct(e.x)/Ct(e.y)}class CP{constructor(){this.members=[]}add(t){lg(this.members,t),t.scheduleRender()}remove(t){if(cg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let i;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function t4(e,t,n){let i="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(i=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:d,rotateX:u,rotateY:f}=n;d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),f&&(i+=`rotateY(${f}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(i+=`scale(${s}, ${c})`),i||"none"}const SP=(e,t)=>e.depth-t.depth;class zP{constructor(){this.children=[],this.isDirty=!1}add(t){lg(this.children,t),this.isDirty=!0}remove(t){cg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(SP),this.isDirty=!1,this.children.forEach(t)}}function PP(e,t){const n=performance.now(),i=({timestamp:o})=>{const a=o-n;a>=t&&(nn(i),e(a-t))};return le.read(i,!0),()=>nn(i)}function TP(e){window.MotionDebug&&window.MotionDebug.record(e)}function EP(e){return e instanceof SVGElement&&e.tagName!=="svg"}function LP(e,t,n){const i=xt(e)?e:Qt(e);return i.start(sg("",i,t,n)),i.animation}const n4=["","X","Y","Z"],IP={visibility:"hidden"},r4=1e3;let MP=0;const ui={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function _6({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(s={},c=t==null?void 0:t()){this.id=MP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ui.totalNodes=ui.resolvedTargetDeltas=ui.recalculatedProjection=0,this.nodes.forEach(RP),this.nodes.forEach(VP),this.nodes.forEach(_P),this.nodes.forEach(OP),TP(ui)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new zP)}addEventListener(s,c){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new dg),this.eventHandlers.get(s).add(c)}notifyListeners(s,...c){const d=this.eventHandlers.get(s);d&&d.notify(...c)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=EP(s),this.instance=s;const{layoutId:d,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(u||d)&&(this.isLayoutDirty=!0),e){let p;const m=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=PP(m,250),su.hasAnimatedSinceResize&&(su.hasAnimatedSinceResize=!1,this.nodes.forEach(o4))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&f&&(d||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m,hasRelativeTargetChanged:x,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||f.getDefaultTransition()||YP,{onLayoutAnimationStart:k,onLayoutAnimationComplete:h}=f.getProps(),g=!this.targetLayout||!V6(this.targetLayout,j)||x,y=!m&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||m&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,y);const S={...ag(w,"layout"),onPlay:k,onComplete:h};(f.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else m||o4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(BP),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const p=this.path[f];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(i4);return}this.isUpdating||this.nodes.forEach(DP),this.isUpdating=!1,this.nodes.forEach(FP),this.nodes.forEach(AP),this.nodes.forEach($P),this.clearAllSnapshots();const c=performance.now();Ye.delta=Vr(0,1e3/60,c-Ye.timestamp),Ye.timestamp=c,Ye.isProcessing=!0,k0.update.process(Ye),k0.preRender.process(Ye),k0.render.process(Ye),Ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(NP),this.sharedNodes.forEach(HP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!F6(this.projectionDelta),d=this.getTransformTemplate(),u=d?d(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;s&&(c||di(this.latestValues)||f)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return s&&(d=this.removeTransform(d)),GP(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Oe();const c=s.measureViewportBox(),{scroll:d}=this.root;return d&&(vr(c.x,d.offset.x),vr(c.y,d.offset.y)),c}removeElementScroll(s){const c=Oe();Tt(c,s);for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:p}=u;if(u!==this.root&&f&&p.layoutScroll){if(f.isRoot){Tt(c,s);const{scroll:m}=this.root;m&&(vr(c.x,-m.offset.x),vr(c.y,-m.offset.y))}vr(c.x,f.offset.x),vr(c.y,f.offset.y)}}return c}applyTransform(s,c=!1){const d=Oe();Tt(d,s);for(let u=0;u<this.path.length;u++){const f=this.path[u];!c&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Lo(d,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),di(f.latestValues)&&Lo(d,f.latestValues)}return di(this.latestValues)&&Lo(d,this.latestValues),d}removeTransform(s){const c=Oe();Tt(c,s);for(let d=0;d<this.path.length;d++){const u=this.path[d];if(!u.instance||!di(u.latestValues))continue;uh(u.latestValues)&&u.updateSnapshot();const f=Oe(),p=u.measurePageBox();Tt(f,p),Z2(c,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return di(this.latestValues)&&Z2(c,this.latestValues),c}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==d;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:m}=this.options;if(!(!this.layout||!(p||m))){if(this.resolvedRelativeTargetAt=Ye.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Cs(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Xz(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tt(this.target,this.layout.layoutBox),A6(this.target,this.targetDelta)):Tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Cs(this.relativeTargetOrigin,this.target,x.target),Tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ui.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||uh(this.parent.latestValues)||M6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ye.timestamp&&(u=!1),u)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Tt(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,x=this.treeScale.y;rP(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:j}=c;if(!j){this.projectionTransform&&(this.projectionDelta=Eo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Eo(),this.projectionDeltaWithTransform=Eo());const w=this.projectionTransform;ks(this.projectionDelta,this.layoutCorrected,j,this.latestValues),this.projectionTransform=t4(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==m||this.treeScale.y!==x)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j)),ui.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,c=!1){const d=this.snapshot,u=d?d.latestValues:{},f={...this.latestValues},p=Eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const m=Oe(),x=d?d.source:void 0,j=this.layout?this.layout.source:void 0,w=x!==j,k=this.getStack(),h=!k||k.members.length<=1,g=!!(w&&!h&&this.options.crossfade===!0&&!this.path.some(WP));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const P=S/1e3;a4(p.x,s.x,P),a4(p.y,s.y,P),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cs(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UP(this.relativeTarget,this.relativeTargetOrigin,m,P),y&&kP(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Oe()),Tt(y,this.relativeTarget)),w&&(this.animationValues=f,xP(f,u,this.latestValues,P,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(nn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=le.update(()=>{su.hasAnimatedSinceResize=!0,this.currentAnimation=LP(0,r4,{...s,onUpdate:c=>{this.mixTargetDelta(c),s.onUpdate&&s.onUpdate(c)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:c,target:d,layout:u,latestValues:f}=s;if(!(!c||!d||!u)){if(this!==s&&this.layout&&u&&B6(this.options.animationType,this.layout.layoutBox,u.layoutBox)){d=this.target||Oe();const p=Ct(this.layout.layoutBox.x);d.x.min=s.target.x.min,d.x.max=d.x.min+p;const m=Ct(this.layout.layoutBox.y);d.y.min=s.target.y.min,d.y.max=d.y.min+m}Tt(c,d),Lo(c,f),ks(this.projectionDeltaWithTransform,this.layoutCorrected,c,f)}}registerSharedNode(s,c){this.sharedNodes.has(s)||this.sharedNodes.set(s,new CP),this.sharedNodes.get(s).add(c);const u=c.options.initialPromotionConfig;c.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(c):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:c}=this.options;return c?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:c}=this.options;return c?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:c,preserveFollowOpacity:d}={}){const u=this.getStack();u&&u.promote(this,d),s&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let c=!1;const{latestValues:d}=s;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(c=!0),!c)return;const u={};for(let f=0;f<n4.length;f++){const p="rotate"+n4[f];d[p]&&(u[p]=d[p],s.setStaticValue(p,0))}s.render();for(const f in u)s.setStaticValue(f,u[f]);s.scheduleRender()}getProjectionStyles(s){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return IP;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=au(s==null?void 0:s.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=au(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!di(this.latestValues)&&(w.transform=f?f({},""):"none",this.hasProjected=!1),w}const m=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=t4(this.projectionDeltaWithTransform,this.treeScale,m),f&&(u.transform=f(m,u.transform));const{x,y:j}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${j.origin*100}% 0`,p.animationValues?u.opacity=p===this?(d=(c=m.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const w in Bu){if(m[w]===void 0)continue;const{correct:k,applyTo:h}=Bu[w],g=u.transform==="none"?m[w]:k(m[w],p);if(h){const y=h.length;for(let S=0;S<y;S++)u[h[S]]=g}else u[w]=g}return this.options.layoutId&&(u.pointerEvents=p===this?au(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var c;return(c=s.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(i4),this.root.sharedNodes.clear()}}}function AP(e){e.updateLayout()}function $P(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:a}=e.options,s=n.source!==e.layout.source;a==="size"?Ot(p=>{const m=s?n.measuredBox[p]:n.layoutBox[p],x=Ct(m);m.min=i[p].min,m.max=m.min+x}):B6(a,n.layoutBox,i)&&Ot(p=>{const m=s?n.measuredBox[p]:n.layoutBox[p],x=Ct(i[p]);m.max=m.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+x)});const c=Eo();ks(c,i,n.layoutBox);const d=Eo();s?ks(d,e.applyTransform(o,!0),n.measuredBox):ks(d,i,n.layoutBox);const u=!F6(c);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:x}=p;if(m&&x){const j=Oe();Cs(j,n.layoutBox,m.layoutBox);const w=Oe();Cs(w,i,x.layoutBox),V6(j,w)||(f=!0),p.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=j,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:d,layoutDelta:c,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function RP(e){ui.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function OP(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function NP(e){e.clearSnapshot()}function i4(e){e.clearMeasurements()}function DP(e){e.isLayoutDirty=!1}function FP(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function o4(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function VP(e){e.resolveTargetDelta()}function _P(e){e.calcProjection()}function BP(e){e.resetRotation()}function HP(e){e.removeLeadSnapshot()}function a4(e,t,n){e.translate=Ce(t.translate,0,n),e.scale=Ce(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function s4(e,t,n,i){e.min=Ce(t.min,n.min,i),e.max=Ce(t.max,n.max,i)}function UP(e,t,n,i){s4(e.x,t.x,n.x,i),s4(e.y,t.y,n.y,i)}function WP(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const YP={duration:.45,ease:[.4,0,.1,1]},l4=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),c4=l4("applewebkit/")&&!l4("chrome/")?Math.round:Le;function d4(e){e.min=c4(e.min),e.max=c4(e.max)}function GP(e){d4(e.x),d4(e.y)}function B6(e,t,n){return e==="position"||e==="preserve-aspect"&&!ch(e4(t),e4(n),.2)}const XP=_6({attachResizeListener:(e,t)=>$n(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$0={current:void 0},H6=_6({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$0.current){const e=new XP({});e.mount(window),e.setOptions({layoutScroll:!0}),$0.current=e}return $0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),QP={pan:{Feature:uP},drag:{Feature:dP,ProjectionNode:H6,MeasureLayout:O6}},qP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function KP(e){const t=qP.exec(e);if(!t)return[,];const[,n,i]=t;return[n,i]}function ph(e,t,n=1){const[i,o]=KP(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const s=a.trim();return S6(s)?parseFloat(s):s}else return nh(o)?ph(o,t,n+1):o}function ZP(e,{...t},n){const i=e.current;if(!(i instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!nh(a))return;const s=ph(a,i);s&&o.set(s)});for(const o in t){const a=t[o];if(!nh(a))continue;const s=ph(a,i);s&&(t[o]=s,n||(n={}),n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const JP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),U6=e=>JP.has(e),eT=e=>Object.keys(e).some(U6),u4=e=>e===$i||e===H,f4=(e,t)=>parseFloat(e.split(", ")[t]),p4=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return f4(o[1],t);{const a=i.match(/^matrix\((.+)\)$/);return a?f4(a[1],e):0}},tT=new Set(["x","y","z"]),nT=fl.filter(e=>!tT.has(e));function rT(e){const t=[];return nT.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ea={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:p4(4,13),y:p4(5,14)};ea.translateX=ea.x;ea.translateY=ea.y;const iT=(e,t,n)=>{const i=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:s}=a,c={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{c[u]=ea[u](i,a)}),t.render();const d=t.measureViewportBox();return n.forEach(u=>{const f=t.getValue(u);f&&f.jump(c[u]),e[u]=ea[u](d,a)}),e},oT=(e,t,n={},i={})=>{t={...t},i={...i};const o=Object.keys(t).filter(U6);let a=[],s=!1;const c=[];if(o.forEach(d=>{const u=e.getValue(d);if(!e.hasValue(d))return;let f=n[d],p=Sa(f);const m=t[d];let x;if(Uu(m)){const j=m.length,w=m[0]===null?1:0;f=m[w],p=Sa(f);for(let k=w;k<j&&m[k]!==null;k++)x?$f(Sa(m[k])===x):x=Sa(m[k])}else x=Sa(m);if(p!==x)if(u4(p)&&u4(x)){const j=u.get();typeof j=="string"&&u.set(parseFloat(j)),typeof m=="string"?t[d]=parseFloat(m):Array.isArray(m)&&x===H&&(t[d]=m.map(parseFloat))}else p!=null&&p.transform&&(x!=null&&x.transform)&&(f===0||m===0)?f===0?u.set(x.transform(f)):t[d]=p.transform(m):(s||(a=rT(e),s=!0),c.push(d),i[d]=i[d]!==void 0?i[d]:t[d],u.jump(m))}),c.length){const d=c.indexOf("height")>=0?window.pageYOffset:null,u=iT(t,e,c);return a.length&&a.forEach(([f,p])=>{e.getValue(f).set(p)}),e.render(),Tf&&d!==null&&window.scrollTo({top:d}),{target:u,transitionEnd:i}}else return{target:t,transitionEnd:i}};function aT(e,t,n,i){return eT(t)?oT(e,t,n,i):{target:t,transitionEnd:i}}const sT=(e,t,n,i)=>{const o=ZP(e,t,i);return t=o.target,i=o.transitionEnd,aT(e,t,n,i)},mh={current:null},W6={current:!1};function lT(){if(W6.current=!0,!!Tf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>mh.current=e.matches;e.addListener(t),t()}else mh.current=!1}function cT(e,t,n){const{willChange:i}=t;for(const o in t){const a=t[o],s=n[o];if(xt(a))e.addValue(o,a),Xu(i)&&i.add(o);else if(xt(s))e.addValue(o,Qt(a,{owner:e})),Xu(i)&&i.remove(o);else if(s!==a)if(e.hasValue(o)){const c=e.getValue(o);!c.hasAnimated&&c.set(a)}else{const c=e.getStaticValue(o);e.addValue(o,Qt(c!==void 0?c:a,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const m4=new WeakMap,Y6=Object.keys(Qs),dT=Y6.length,h4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],uT=Y1.length;class fT{constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>le.render(this.render,!1,!0);const{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=Lf(n),this.isVariantNode=I8(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{});for(const p in f){const m=f[p];c[p]!==void 0&&xt(m)&&(m.set(c[p],!1),Xu(u)&&u.add(p))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,m4.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),W6.current||lT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){m4.delete(this.current),this.projection&&this.projection.unmount(),nn(this.notifyUpdate),nn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const i=Ai.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&le.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},i,o,a){let s,c;for(let d=0;d<dT;d++){const u=Y6[d],{isEnabled:f,Feature:p,ProjectionNode:m,MeasureLayout:x}=Qs[u];m&&(s=m),f(n)&&(!this.features[u]&&p&&(this.features[u]=new p(this)),x&&(c=x))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:u,drag:f,dragConstraints:p,layoutScroll:m,layoutRoot:x}=n;this.projection.setOptions({layoutId:d,layout:u,alwaysMeasureLayout:!!f||p&&Po(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:m,layoutRoot:x})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<h4.length;i++){const o=h4[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a=t["on"+o];a&&(this.propEventSubscriptions[o]=this.on(o,a))}this.prevMotionValues=cT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<uT;i++){const o=Y1[i],a=this.props[o];(Xs(a)||a===!1)&&(n[o]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=Qt(n,{owner:this}),this.addValue(t,i)),i}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props,o=typeof i=="string"||typeof i=="object"?(n=eg(this.props,i))===null||n===void 0?void 0:n[t]:void 0;if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!xt(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new dg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class G6 extends fT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...i},{transformValues:o},a){let s=Ez(i,t||{},this);if(o&&(n&&(n=o(n)),i&&(i=o(i)),s&&(s=o(s))),a){Pz(this,i,s);const c=sT(this,i,s,n);n=c.transitionEnd,i=c.target}return{transition:t,transitionEnd:n,...i}}}function pT(e){return window.getComputedStyle(e)}class mT extends G6{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Ai.has(n)){const i=og(n);return i&&i.default||0}else{const i=pT(t),o=(R8(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $6(t,n)}build(t,n,i,o){Q1(t,n,i,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return J1(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,i,o){_8(t,n,i,o)}}class hT extends G6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ai.has(n)){const i=og(n);return i&&i.default||0}return n=B8.has(n)?n:U1(n),t.getAttribute(n)}measureInstanceViewportBox(){return Oe()}scrapeMotionValuesFromProps(t,n){return U8(t,n)}build(t,n,i,o){K1(t,n,i,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,i,o){H8(t,n,i,o)}mount(t){this.isSVGTag=Z1(t.tagName),super.mount(t)}}const gT=(e,t)=>X1(e)?new hT(t,{enableHardwareAcceleration:!1}):new mT(t,{enableHardwareAcceleration:!0}),xT={layout:{ProjectionNode:H6,MeasureLayout:O6}},yT={...Uz,...fS,...QP,...xT},C=wC((e,t)=>JC(e,t,yT,gT));function X6(){const e=b.useRef(!1);return ul(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function vT(){const e=X6(),[t,n]=b.useState(0),i=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>le.postRender(i),[i]),t]}class bT extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function wT({children:e,isPresent:t}){const n=b.useId(),i=b.useRef(null),o=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:a,height:s,top:c,left:d}=o.current;if(t||!i.current||!a||!s)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.createElement(bT,{isPresent:t,childRef:i,sizeRef:o},b.cloneElement(e,{ref:i}))}const R0=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:s})=>{const c=hl(jT),d=b.useId(),u=b.useMemo(()=>({id:d,initial:t,isPresent:n,custom:o,onExitComplete:f=>{c.set(f,!0);for(const p of c.values())if(!p)return;i&&i()},register:f=>(c.set(f,!1),()=>c.delete(f))}),a?void 0:[n]);return b.useMemo(()=>{c.forEach((f,p)=>c.set(p,!1))},[n]),b.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),s==="popLayout"&&(e=b.createElement(wT,{isPresent:n},e)),b.createElement(Pf.Provider,{value:u},e)};function jT(){return new Map}function kT(e){return b.useEffect(()=>()=>e(),[])}const fi=e=>e.key||"";function CT(e,t){e.forEach(n=>{const i=fi(n);t.set(i,n)})}function ST(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const xl=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:s="sync"})=>{const c=b.useContext(G1).forceRender||vT()[0],d=X6(),u=ST(e);let f=u;const p=b.useRef(new Map).current,m=b.useRef(f),x=b.useRef(new Map).current,j=b.useRef(!0);if(ul(()=>{j.current=!1,CT(u,x),m.current=f}),kT(()=>{j.current=!0,x.clear(),p.clear()}),j.current)return b.createElement(b.Fragment,null,f.map(g=>b.createElement(R0,{key:fi(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:s},g)));f=[...f];const w=m.current.map(fi),k=u.map(fi),h=w.length;for(let g=0;g<h;g++){const y=w[g];k.indexOf(y)===-1&&!p.has(y)&&p.set(y,void 0)}return s==="wait"&&p.size&&(f=[]),p.forEach((g,y)=>{if(k.indexOf(y)!==-1)return;const S=x.get(y);if(!S)return;const P=w.indexOf(y);let E=g;if(!E){const T=()=>{p.delete(y);const I=Array.from(x.keys()).filter(R=>!k.includes(R));if(I.forEach(R=>x.delete(R)),m.current=u.filter(R=>{const D=fi(R);return D===y||I.includes(D)}),!p.size){if(d.current===!1)return;c(),i&&i()}};E=b.createElement(R0,{key:fi(S),isPresent:!1,onExitComplete:T,custom:t,presenceAffectsLayout:a,mode:s},S),p.set(y,E)}f.splice(P,0,E)}),f=f.map(g=>{const y=g.key;return p.has(y)?g:b.createElement(R0,{key:fi(g),isPresent:!0,presenceAffectsLayout:a,mode:s},g)}),b.createElement(b.Fragment,null,p.size?f:f.map(g=>b.cloneElement(g)))};function zT(e){const t=hl(()=>Qt(e)),{isStatic:n}=b.useContext(H1);if(n){const[,i]=b.useState(e);b.useEffect(()=>t.on("change",i),[])}return t}const PT=e=>e&&typeof e=="object"&&e.mix,TT=e=>PT(e)?e.mix:void 0;function ET(...e){const t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],o=e[1+n],a=e[2+n],s=e[3+n],c=Rf(o,a,{mixer:TT(a[0]),...s});return t?c(i):c}function Q6(e,t){const n=zT(t()),i=()=>n.set(t());return i(),ul(()=>{const o=()=>le.update(i,!1,!0),a=e.map(s=>s.on("change",o));return()=>{a.forEach(s=>s()),nn(i)}}),n}function LT(e){js.current=[],e();const t=Q6(js.current,e);return js.current=void 0,t}function Pa(e,t,n,i){if(typeof e=="function")return LT(e);const o=typeof t=="function"?t:ET(t,n,i);return Array.isArray(e)?g4(e,o):g4([e],([a])=>o(a))}function g4(e,t){const n=hl(()=>[]);return Q6(e,()=>{n.length=0;const i=e.length;for(let o=0;o<i;o++)n[o]=e[o].get();return t(n)})}function IT(e,t,n){var i;if(typeof e=="string"){let o=document;t&&($f(!!t.current),o=t.current),n?((i=n[e])!==null&&i!==void 0||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const lu=new WeakMap;let gr;function MT(e,t){if(t){const{inlineSize:n,blockSize:i}=t[0];return{width:n,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function AT({target:e,contentRect:t,borderBoxSize:n}){var i;(i=lu.get(e))===null||i===void 0||i.forEach(o=>{o({target:e,contentSize:t,get size(){return MT(e,n)}})})}function $T(e){e.forEach(AT)}function RT(){typeof ResizeObserver>"u"||(gr=new ResizeObserver($T))}function OT(e,t){gr||RT();const n=IT(e);return n.forEach(i=>{let o=lu.get(i);o||(o=new Set,lu.set(i,o)),o.add(t),gr==null||gr.observe(i)}),()=>{n.forEach(i=>{const o=lu.get(i);o==null||o.delete(t),o!=null&&o.size||gr==null||gr.unobserve(i)})}}const cu=new Set;let Ss;function NT(){Ss=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};cu.forEach(n=>n(t))},window.addEventListener("resize",Ss)}function DT(e){return cu.add(e),Ss||NT(),()=>{cu.delete(e),!cu.size&&Ss&&(Ss=void 0)}}function FT(e,t){return typeof e=="function"?DT(e):OT(e,t)}const VT=50,x4=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),_T=()=>({time:0,x:x4(),y:x4()}),BT={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y4(e,t,n,i){const o=n[t],{length:a,position:s}=BT[t],c=o.current,d=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+a]-e["client"+a],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Jo(0,o.scrollLength,o.current);const u=i-d;o.velocity=u>VT?0:ig(o.current-c,u)}function HT(e,t,n){y4(e,"x",t,n),y4(e,"y",t,n),t.time=n}function UT(e,t){const n={x:0,y:0};let i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const a=i.getBoundingClientRect();n.x+=o.left-a.left,n.y+=o.top-a.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:a}=i.getBBox();n.x+=o,n.y+=a;let s=null,c=i.parentNode;for(;!s;)c.tagName==="svg"&&(s=c),c=i.parentNode;i=s}else break;return n}const WT={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},hh={start:0,center:.5,end:1};function v4(e,t,n=0){let i=0;if(hh[e]!==void 0&&(e=hh[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?i=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?i=o/100*document.documentElement.clientWidth:e.endsWith("vh")?i=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(i=t*e),n+i}const YT=[0,0];function GT(e,t,n,i){let o=Array.isArray(e)?e:YT,a=0,s=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,hh[e]?e:"0"]),a=v4(o[0],n,i),s=v4(o[1],t),a-s}const XT={x:0,y:0};function QT(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function qT(e,t,n){let{offset:i=WT.All}=n;const{target:o=e,axis:a="y"}=n,s=a==="y"?"height":"width",c=o!==e?UT(o,e):XT,d=o===e?{width:e.scrollWidth,height:e.scrollHeight}:QT(o),u={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let f=!t[a].interpolate;const p=i.length;for(let m=0;m<p;m++){const x=GT(i[m],u[s],d[s],c[a]);!f&&x!==t[a].interpolatorOffsets[m]&&(f=!0),t[a].offset[m]=x}f&&(t[a].interpolate=Rf(t[a].offset,b6(i)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function KT(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function ZT(e,t,n,i={}){return{measure:()=>KT(e,i.target,n),update:o=>{HT(e,n,o),(i.offset||i.target)&&qT(e,n,i)},notify:()=>t(n)}}const Ta=new WeakMap,b4=new WeakMap,O0=new WeakMap,w4=e=>e===document.documentElement?window:e;function JT(e,{container:t=document.documentElement,...n}={}){let i=O0.get(t);i||(i=new Set,O0.set(t,i));const o=_T(),a=ZT(t,e,o,n);if(i.add(a),!Ta.has(t)){const c=()=>{for(const m of i)m.measure()},d=()=>{for(const m of i)m.update(Ye.timestamp)},u=()=>{for(const m of i)m.notify()},f=()=>{le.read(c,!1,!0),le.read(d,!1,!0),le.update(u,!1,!0)};Ta.set(t,f);const p=w4(t);window.addEventListener("resize",f,{passive:!0}),t!==document.documentElement&&b4.set(t,FT(t,f)),p.addEventListener("scroll",f,{passive:!0})}const s=Ta.get(t);return le.read(s,!1,!0),()=>{var c;nn(s);const d=O0.get(t);if(!d||(d.delete(a),d.size))return;const u=Ta.get(t);Ta.delete(t),u&&(w4(t).removeEventListener("scroll",u),(c=b4.get(t))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function j4(e,t){Z8(!!(!t||t.current))}const eE=()=>({scrollX:Qt(0),scrollY:Qt(0),scrollXProgress:Qt(0),scrollYProgress:Qt(0)});function tE({container:e,target:t,layoutEffect:n=!0,...i}={}){const o=hl(eE);return(n?ul:b.useEffect)(()=>(j4("target",t),j4("container",e),JT(({x:s,y:c})=>{o.scrollX.set(s.current),o.scrollXProgress.set(s.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),o}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function nE(e,t,n){return(t=iE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k4(Object(n),!0).forEach(function(i){nE(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k4(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function rE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iE(e){var t=rE(e,"string");return typeof t=="symbol"?t:t+""}const C4=()=>{};let ug={},q6={},K6=null,Z6={mark:C4,measure:C4};try{typeof window<"u"&&(ug=window),typeof document<"u"&&(q6=document),typeof MutationObserver<"u"&&(K6=MutationObserver),typeof performance<"u"&&(Z6=performance)}catch{}const{userAgent:S4=""}=ug.navigator||{},Br=ug,be=q6,z4=K6,Xl=Z6;Br.document;const Gn=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",J6=~S4.indexOf("MSIE")||~S4.indexOf("Trident/");var oE=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,aE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,eb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sE={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nt="classic",Of="duotone",lE="sharp",cE="sharp-duotone",nb=[nt,Of,lE,cE],dE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uE={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},fE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),pE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},mE=["fak","fa-kit","fakd","fa-kit-duotone"],P4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hE=["kit"],gE={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},xE=["fak","fakd"],yE={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},T4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ql={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bE=["fak","fa-kit","fakd","fa-kit-duotone"],wE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},jE={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kE={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},gh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},CE=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vE,...CE],SE=["solid","regular","light","thin","duotone","brands"],rb=[1,2,3,4,5,6,7,8,9,10],zE=rb.concat([11,12,13,14,15,16,17,18,19,20]),PE=[...Object.keys(kE),...SE,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ql.GROUP,Ql.SWAP_OPACITY,Ql.PRIMARY,Ql.SECONDARY].concat(rb.map(e=>"".concat(e,"x"))).concat(zE.map(e=>"w-".concat(e))),TE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Un="___FONT_AWESOME___",yh=16,ib="fa",ob="svg-inline--fa",Ti="data-fa-i2svg",vh="data-fa-pseudo-element",EE="data-fa-pseudo-element-pending",fg="data-prefix",pg="data-icon",E4="fontawesome-i2svg",LE="async",IE=["HTML","HEAD","STYLE","SCRIPT"],ab=(()=>{try{return!0}catch{return!1}})();function yl(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[nt]}})}const sb=M({},eb);sb[nt]=M(M(M(M({},{"fa-duotone":"duotone"}),eb[nt]),P4.kit),P4["kit-duotone"]);const ME=yl(sb),bh=M({},pE);bh[nt]=M(M(M(M({},{duotone:"fad"}),bh[nt]),T4.kit),T4["kit-duotone"]);const L4=yl(bh),wh=M({},gh);wh[nt]=M(M({},wh[nt]),yE.kit);const mg=yl(wh),jh=M({},jE);jh[nt]=M(M({},jh[nt]),gE.kit);yl(jh);const AE=oE,lb="fa-layers-text",$E=aE,RE=M({},dE);yl(RE);const OE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N0=sE,NE=[...hE,...PE],zs=Br.FontAwesomeConfig||{};function DE(e){var t=be.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function FE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}be&&typeof be.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,i]=t;const o=FE(DE(n));o!=null&&(zs[i]=o)});const cb={styleDefault:"solid",familyDefault:nt,cssPrefix:ib,replacementClass:ob,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zs.familyPrefix&&(zs.cssPrefix=zs.familyPrefix);const ta=M(M({},cb),zs);ta.autoReplaceSvg||(ta.observeMutations=!1);const _={};Object.keys(cb).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){ta[e]=t,Ps.forEach(n=>n(_))},get:function(){return ta[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){ta.cssPrefix=e,Ps.forEach(t=>t(_))},get:function(){return ta.cssPrefix}});Br.FontAwesomeConfig=_;const Ps=[];function VE(e){return Ps.push(e),()=>{Ps.splice(Ps.indexOf(e),1)}}const Qn=yh,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _E(e){if(!e||!Gn)return;const t=be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=be.head.childNodes;let i=null;for(let o=n.length-1;o>-1;o--){const a=n[o],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=a)}return be.head.insertBefore(t,i),e}const BE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qs(){let e=12,t="";for(;e-- >0;)t+=BE[Math.random()*62|0];return t}function fa(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hg(e){return e.classList?fa(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function db(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function HE(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(db(e[n]),'" '),"").trim()}function Nf(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function gg(e){return e.size!==hn.size||e.x!==hn.x||e.y!==hn.y||e.rotate!==hn.rotate||e.flipX||e.flipY}function UE(e){let{transform:t,containerWidth:n,iconWidth:i}=e;const o={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(a," ").concat(s," ").concat(c)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:d,path:u}}function WE(e){let{transform:t,width:n=yh,height:i=yh,startCentered:o=!1}=e,a="";return o&&J6?a+="translate(".concat(t.x/Qn-n/2,"em, ").concat(t.y/Qn-i/2,"em) "):o?a+="translate(calc(-50% + ".concat(t.x/Qn,"em), calc(-50% + ").concat(t.y/Qn,"em)) "):a+="translate(".concat(t.x/Qn,"em, ").concat(t.y/Qn,"em) "),a+="scale(".concat(t.size/Qn*(t.flipX?-1:1),", ").concat(t.size/Qn*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var YE=`:root, :host {
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
}`;function ub(){const e=ib,t=ob,n=_.cssPrefix,i=_.replacementClass;let o=YE;if(n!==e||i!==t){const a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(c,".".concat(i))}return o}let I4=!1;function D0(){_.autoAddCss&&!I4&&(_E(ub()),I4=!0)}var GE={mixout(){return{dom:{css:ub,insertCss:D0}}},hooks(){return{beforeDOMElementCreation(){D0()},beforeI2svg(){D0()}}}};const Wn=Br||{};Wn[Un]||(Wn[Un]={});Wn[Un].styles||(Wn[Un].styles={});Wn[Un].hooks||(Wn[Un].hooks={});Wn[Un].shims||(Wn[Un].shims=[]);var gn=Wn[Un];const fb=[],pb=function(){be.removeEventListener("DOMContentLoaded",pb),qu=1,fb.map(e=>e())};let qu=!1;Gn&&(qu=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),qu||be.addEventListener("DOMContentLoaded",pb));function XE(e){Gn&&(qu?setTimeout(e,0):fb.push(e))}function vl(e){const{tag:t,attributes:n={},children:i=[]}=e;return typeof e=="string"?db(e):"<".concat(t," ").concat(HE(n),">").concat(i.map(vl).join(""),"</").concat(t,">")}function M4(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var QE=function(t,n){return function(i,o,a,s){return t.call(n,i,o,a,s)}},F0=function(t,n,i,o){var a=Object.keys(t),s=a.length,c=o!==void 0?QE(n,o):n,d,u,f;for(i===void 0?(d=1,f=t[a[0]]):(d=0,f=i);d<s;d++)u=a[d],f=c(f,t[u],u,t);return f};function qE(e){const t=[];let n=0;const i=e.length;for(;n<i;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<i){const a=e.charCodeAt(n++);(a&64512)==56320?t.push(((o&1023)<<10)+(a&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function kh(e){const t=qE(e);return t.length===1?t[0].toString(16):null}function KE(e,t){const n=e.length;let i=e.charCodeAt(t),o;return i>=55296&&i<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function A4(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return!!i.icon?t[i.iconName]=i.icon:t[n]=i,t},{})}function Ch(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,o=A4(t);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(e,A4(t)):gn.styles[e]=M(M({},gn.styles[e]||{}),o),e==="fas"&&Ch("fa",t)}const{styles:Ks,shims:ZE}=gn,mb=Object.keys(mg),JE=mb.reduce((e,t)=>(e[t]=Object.keys(mg[t]),e),{});let xg=null,hb={},gb={},xb={},yb={},vb={};function eL(e){return~NE.indexOf(e)}function tL(e,t){const n=t.split("-"),i=n[0],o=n.slice(1).join("-");return i===e&&o!==""&&!eL(o)?o:null}const bb=()=>{const e=i=>F0(Ks,(o,a,s)=>(o[s]=F0(a,i,{}),o),{});hb=e((i,o,a)=>(o[3]&&(i[o[3]]=a),o[2]&&o[2].filter(c=>typeof c=="number").forEach(c=>{i[c.toString(16)]=a}),i)),gb=e((i,o,a)=>(i[a]=a,o[2]&&o[2].filter(c=>typeof c=="string").forEach(c=>{i[c]=a}),i)),vb=e((i,o,a)=>{const s=o[2];return i[a]=a,s.forEach(c=>{i[c]=a}),i});const t="far"in Ks||_.autoFetchSvg,n=F0(ZE,(i,o)=>{const a=o[0];let s=o[1];const c=o[2];return s==="far"&&!t&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:c}),i},{names:{},unicodes:{}});xb=n.names,yb=n.unicodes,xg=Df(_.styleDefault,{family:_.familyDefault})};VE(e=>{xg=Df(e.styleDefault,{family:_.familyDefault})});bb();function yg(e,t){return(hb[e]||{})[t]}function nL(e,t){return(gb[e]||{})[t]}function yi(e,t){return(vb[e]||{})[t]}function wb(e){return xb[e]||{prefix:null,iconName:null}}function rL(e){const t=yb[e],n=yg("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Hr(){return xg}const jb=()=>({prefix:null,iconName:null,rest:[]});function iL(e){let t=nt;const n=mb.reduce((i,o)=>(i[o]="".concat(_.cssPrefix,"-").concat(o),i),{});return nb.forEach(i=>{(e.includes(n[i])||e.some(o=>JE[i].includes(o)))&&(t=i)}),t}function Df(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=nt}=t,i=ME[n][e];if(n===Of&&!e)return"fad";const o=L4[n][e]||L4[n][i],a=e in gn.styles?e:null;return o||a||null}function oL(e){let t=[],n=null;return e.forEach(i=>{const o=tL(_.cssPrefix,i);o?n=o:i&&t.push(i)}),{iconName:n,rest:t}}function $4(e){return e.sort().filter((t,n,i)=>i.indexOf(t)===n)}function Ff(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let i=null;const o=xh.concat(bE),a=$4(e.filter(p=>o.includes(p))),s=$4(e.filter(p=>!xh.includes(p))),c=a.filter(p=>(i=p,!tb.includes(p))),[d=null]=c,u=iL(a),f=M(M({},oL(s)),{},{prefix:Df(d,{family:u})});return M(M(M({},f),cL({values:e,family:u,styles:Ks,config:_,canonical:f,givenPrefix:i})),aL(n,i,f))}function aL(e,t,n){let{prefix:i,iconName:o}=n;if(e||!i||!o)return{prefix:i,iconName:o};const a=t==="fa"?wb(o):{},s=yi(i,o);return o=a.iconName||s||o,i=a.prefix||i,i==="far"&&!Ks.far&&Ks.fas&&!_.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const sL=nb.filter(e=>e!==nt||e!==Of),lL=Object.keys(gh).filter(e=>e!==nt).map(e=>Object.keys(gh[e])).flat();function cL(e){const{values:t,family:n,canonical:i,givenPrefix:o="",styles:a={},config:s={}}=e,c=n===Of,d=t.includes("fa-duotone")||t.includes("fad"),u=s.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!c&&(d||u||f)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&sL.includes(n)&&(Object.keys(a).find(m=>lL.includes(m))||s.autoFetchSvg)){const m=fE.get(n).defaultShortPrefixId;i.prefix=m,i.iconName=yi(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Hr()||"fas"),i}class dL{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(a=>{this.definitions[a]=M(M({},this.definitions[a]||{}),o[a]),Ch(a,o[a]);const s=mg[nt][a];s&&Ch(s,o[a]),bb()})}reset(){this.definitions={}}_pullDefinitions(t,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(o=>{const{prefix:a,iconName:s,icon:c}=i[o],d=c[2];t[a]||(t[a]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(t[a][u]=c)}),t[a][s]=c}),t}}let R4=[],Io={};const Fo={},uL=Object.keys(Fo);function fL(e,t){let{mixoutsTo:n}=t;return R4=e,Io={},Object.keys(Fo).forEach(i=>{uL.indexOf(i)===-1&&delete Fo[i]}),R4.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(a=>{typeof o[a]=="function"&&(n[a]=o[a]),typeof o[a]=="object"&&Object.keys(o[a]).forEach(s=>{n[a]||(n[a]={}),n[a][s]=o[a][s]})}),i.hooks){const a=i.hooks();Object.keys(a).forEach(s=>{Io[s]||(Io[s]=[]),Io[s].push(a[s])})}i.provides&&i.provides(Fo)}),n}function Sh(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return(Io[e]||[]).forEach(s=>{t=s.apply(null,[t,...i])}),t}function Ei(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];(Io[e]||[]).forEach(a=>{a.apply(null,n)})}function Ur(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Fo[e]?Fo[e].apply(null,t):void 0}function zh(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Hr();if(t)return t=yi(n,t)||t,M4(kb.definitions,n,t)||M4(gn.styles,n,t)}const kb=new dL,pL=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,Ei("noAuto")},mL={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(Ei("beforeI2svg",e),Ur("pseudoElements2svg",e),Ur("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,XE(()=>{gL({autoReplaceSvgRoot:t}),Ei("watch",e)})}},hL={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:yi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Df(e[0]);return{prefix:n,iconName:yi(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(AE))){const t=Ff(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Hr(),iconName:yi(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Hr();return{prefix:t,iconName:yi(t,e)||e}}}},Pt={noAuto:pL,config:_,dom:mL,parse:hL,library:kb,findIconDefinition:zh,toHtml:vl},gL=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=be}=e;(Object.keys(gn.styles).length>0||_.autoFetchSvg)&&Gn&&_.autoReplaceSvg&&Pt.dom.i2svg({node:t})};function Vf(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>vl(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Gn)return;const n=be.createElement("div");return n.innerHTML=e.html,n.children}}),e}function xL(e){let{children:t,main:n,mask:i,attributes:o,styles:a,transform:s}=e;if(gg(s)&&n.found&&!i.found){const{width:c,height:d}=n,u={x:c/d/2,y:.5};o.style=Nf(M(M({},a),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function yL(e){let{prefix:t,iconName:n,children:i,attributes:o,symbol:a}=e;const s=a===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},o),{},{id:s}),children:i}]}]}function vg(e){const{icons:{main:t,mask:n},prefix:i,iconName:o,transform:a,symbol:s,title:c,maskId:d,titleId:u,extra:f,watchable:p=!1}=e,{width:m,height:x}=n.found?n:t,j=xE.includes(i),w=[_.replacementClass,o?"".concat(_.cssPrefix,"-").concat(o):""].filter(P=>f.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(f.classes).join(" ");let k={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(x)})};const h=j&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/x*16*.0625,"em")}:{};p&&(k.attributes[Ti]=""),c&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||qs())},children:[c]}),delete k.attributes.title);const g=M(M({},k),{},{prefix:i,iconName:o,main:t,mask:n,maskId:d,transform:a,symbol:s,styles:M(M({},h),f.styles)}),{children:y,attributes:S}=n.found&&t.found?Ur("generateAbstractMask",g)||{children:[],attributes:{}}:Ur("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=y,g.attributes=S,s?yL(g):xL(g)}function O4(e){const{content:t,width:n,height:i,transform:o,title:a,extra:s,watchable:c=!1}=e,d=M(M(M({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(d[Ti]="");const u=M({},s.styles);gg(o)&&(u.transform=WE({transform:o,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const f=Nf(u);f.length>0&&(d.style=f);const p=[];return p.push({tag:"span",attributes:d,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function vL(e){const{content:t,title:n,extra:i}=e,o=M(M(M({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=Nf(i.styles);a.length>0&&(o.style=a);const s=[];return s.push({tag:"span",attributes:o,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:V0}=gn;function Ph(e){const t=e[0],n=e[1],[i]=e.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(N0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(N0.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(N0.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}const bL={found:!1,width:512,height:512};function wL(e,t){!ab&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Th(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Hr()),new Promise((i,o)=>{if(n==="fa"){const a=wb(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&V0[t]&&V0[t][e]){const a=V0[t][e];return i(Ph(a))}wL(e,t),i(M(M({},bL),{},{icon:_.showMissingIcons&&e?Ur("missingIconAbstract")||{}:{}}))})}const N4=()=>{},Eh=_.measurePerformance&&Xl&&Xl.mark&&Xl.measure?Xl:{mark:N4,measure:N4},cs='FA "6.7.2"',jL=e=>(Eh.mark("".concat(cs," ").concat(e," begins")),()=>Cb(e)),Cb=e=>{Eh.mark("".concat(cs," ").concat(e," ends")),Eh.measure("".concat(cs," ").concat(e),"".concat(cs," ").concat(e," begins"),"".concat(cs," ").concat(e," ends"))};var bg={begin:jL,end:Cb};const du=()=>{};function D4(e){return typeof(e.getAttribute?e.getAttribute(Ti):null)=="string"}function kL(e){const t=e.getAttribute?e.getAttribute(fg):null,n=e.getAttribute?e.getAttribute(pg):null;return t&&n}function CL(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function SL(){return _.autoReplaceSvg===!0?uu.replace:uu[_.autoReplaceSvg]||uu.replace}function zL(e){return be.createElementNS("http://www.w3.org/2000/svg",e)}function PL(e){return be.createElement(e)}function Sb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?zL:PL}=t;if(typeof e=="string")return be.createTextNode(e);const i=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){i.appendChild(Sb(a,{ceFn:n}))}),i}function TL(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const uu={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Sb(n),t)}),t.getAttribute(Ti)===null&&_.keepOriginalSource){let n=be.createComment(TL(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~hg(t).indexOf(_.replacementClass))return uu.replace(e);const i=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const a=n[0].attributes.class.split(" ").reduce((s,c)=>(c===_.replacementClass||c.match(i)?s.toSvg.push(c):s.toNode.push(c),s),{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}const o=n.map(a=>vl(a)).join(`
`);t.setAttribute(Ti,""),t.innerHTML=o}};function F4(e){e()}function zb(e,t){const n=typeof t=="function"?t:du;if(e.length===0)n();else{let i=F4;_.mutateApproach===LE&&(i=Br.requestAnimationFrame||F4),i(()=>{const o=SL(),a=bg.begin("mutate");e.map(o),a(),n()})}}let wg=!1;function Pb(){wg=!0}function Lh(){wg=!1}let Ku=null;function V4(e){if(!z4||!_.observeMutations)return;const{treeCallback:t=du,nodeCallback:n=du,pseudoElementsCallback:i=du,observeMutationsRoot:o=be}=e;Ku=new z4(a=>{if(wg)return;const s=Hr();fa(a).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!D4(c.addedNodes[0])&&(_.searchPseudoElements&&i(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&_.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&D4(c.target)&&~OE.indexOf(c.attributeName))if(c.attributeName==="class"&&kL(c.target)){const{prefix:d,iconName:u}=Ff(hg(c.target));c.target.setAttribute(fg,d||s),u&&c.target.setAttribute(pg,u)}else CL(c.target)&&n(c.target)})}),Gn&&Ku.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function EL(){Ku&&Ku.disconnect()}function LL(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((i,o)=>{const a=o.split(":"),s=a[0],c=a.slice(1);return s&&c.length>0&&(i[s]=c.join(":").trim()),i},{})),n}function IL(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"";let o=Ff(hg(e));return o.prefix||(o.prefix=Hr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=nL(o.prefix,e.innerText)||yg(o.prefix,kh(e.innerText))),!o.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function ML(e){const t=fa(e.attributes).reduce((o,a)=>(o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(i||qs()):(t["aria-hidden"]="true",t.focusable="false")),t}function AL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:o}=IL(e),a=ML(e),s=Sh("parseNodeAttributes",{},e);let c=t.styleParser?LL(e):[];return M({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:a}},s)}const{styles:$L}=gn;function Tb(e){const t=_.autoReplaceSvg==="nest"?_4(e,{styleParser:!1}):_4(e);return~t.extra.classes.indexOf(lb)?Ur("generateLayersText",e,t):Ur("generateSvgReplacementMutation",e,t)}function RL(){return[...mE,...xh]}function B4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();const n=be.documentElement.classList,i=f=>n.add("".concat(E4,"-").concat(f)),o=f=>n.remove("".concat(E4,"-").concat(f)),a=_.autoFetchSvg?RL():tb.concat(Object.keys($L));a.includes("fa")||a.push("fa");const s=[".".concat(lb,":not([").concat(Ti,"])")].concat(a.map(f=>".".concat(f,":not([").concat(Ti,"])"))).join(", ");if(s.length===0)return Promise.resolve();let c=[];try{c=fa(e.querySelectorAll(s))}catch{}if(c.length>0)i("pending"),o("complete");else return Promise.resolve();const d=bg.begin("onTree"),u=c.reduce((f,p)=>{try{const m=Tb(p);m&&f.push(m)}catch(m){ab||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{zb(m,()=>{i("active"),i("complete"),o("pending"),typeof t=="function"&&t(),d(),f()})}).catch(m=>{d(),p(m)})})}function OL(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tb(e).then(n=>{n&&zb([n],t)})}function NL(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(t||{}).icon?t:zh(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:zh(o||{})),e(i,M(M({},n),{},{mask:o}))}}const DL=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,symbol:i=!1,mask:o=null,maskId:a=null,title:s=null,titleId:c=null,classes:d=[],attributes:u={},styles:f={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:x}=e;return Vf(M({type:"icon"},e),()=>(Ei("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(s?u["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(c||qs()):(u["aria-hidden"]="true",u.focusable="false")),vg({icons:{main:Ph(x),mask:o?Ph(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:M(M({},hn),n),symbol:i,title:s,maskId:a,titleId:c,extra:{attributes:u,styles:f,classes:d}})))};var FL={mixout(){return{icon:NL(DL)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=B4,e.nodeCallback=OL,e}}},provides(e){e.i2svg=function(t){const{node:n=be,callback:i=()=>{}}=t;return B4(n,i)},e.generateSvgReplacementMutation=function(t,n){const{iconName:i,title:o,titleId:a,prefix:s,transform:c,symbol:d,mask:u,maskId:f,extra:p}=n;return new Promise((m,x)=>{Promise.all([Th(i,s),u.iconName?Th(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[w,k]=j;m([t,vg({icons:{main:w,mask:k},prefix:s,iconName:i,transform:c,symbol:d,maskId:f,title:o,titleId:a,extra:p,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(t){let{children:n,attributes:i,main:o,transform:a,styles:s}=t;const c=Nf(s);c.length>0&&(i.style=c);let d;return gg(a)&&(d=Ur("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),n.push(d||o.icon),{children:n,attributes:i}}}},VL={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Vf({type:"layer"},()=>{Ei("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(o=>{Array.isArray(o)?o.map(a=>{i=i.concat(a.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},_L={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:o={},styles:a={}}=t;return Vf({type:"counter",content:e},()=>(Ei("beforeDOMElementCreation",{content:e,params:t}),vL({content:e.toString(),title:n,extra:{attributes:o,styles:a,classes:["".concat(_.cssPrefix,"-layers-counter"),...i]}})))}}}},BL={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,title:i=null,classes:o=[],attributes:a={},styles:s={}}=t;return Vf({type:"text",content:e},()=>(Ei("beforeDOMElementCreation",{content:e,params:t}),O4({content:e,transform:M(M({},hn),n),title:i,extra:{attributes:a,styles:s,classes:["".concat(_.cssPrefix,"-layers-text"),...o]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:i,transform:o,extra:a}=n;let s=null,c=null;if(J6){const d=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/d,c=u.height/d}return _.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,O4({content:t.innerHTML,width:s,height:c,transform:o,title:i,extra:a,watchable:!0})])}}};const HL=new RegExp('"',"ug"),H4=[1105920,1112319],U4=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),uE),TE),wE),Ih=Object.keys(U4).reduce((e,t)=>(e[t.toLowerCase()]=U4[t],e),{}),UL=Object.keys(Ih).reduce((e,t)=>{const n=Ih[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function WL(e){const t=e.replace(HL,""),n=KE(t,0),i=n>=H4[0]&&n<=H4[1],o=t.length===2?t[0]===t[1]:!1;return{value:kh(o?t[0]:t),isSecondary:i||o}}function YL(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),o=isNaN(i)?"normal":i;return(Ih[n]||{})[o]||UL[n]}function W4(e,t){const n="".concat(EE).concat(t.replace(":","-"));return new Promise((i,o)=>{if(e.getAttribute(n)!==null)return i();const s=fa(e.children).filter(m=>m.getAttribute(vh)===t)[0],c=Br.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match($E),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(s&&!u)return e.removeChild(s),i();if(u&&p!=="none"&&p!==""){const m=c.getPropertyValue("content");let x=YL(d,f);const{value:j,isSecondary:w}=WL(m),k=u[0].startsWith("FontAwesome");let h=yg(x,j),g=h;if(k){const y=rL(j);y.iconName&&y.prefix&&(h=y.iconName,x=y.prefix)}if(h&&!w&&(!s||s.getAttribute(fg)!==x||s.getAttribute(pg)!==g)){e.setAttribute(n,g),s&&e.removeChild(s);const y=AL(),{extra:S}=y;S.attributes[vh]=t,Th(h,x).then(P=>{const E=vg(M(M({},y),{},{icons:{main:P,mask:jb()},prefix:x,iconName:g,extra:S,watchable:!0})),T=be.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=E.map(I=>vl(I)).join(`
`),e.removeAttribute(n),i()}).catch(o)}else i()}else i()})}function GL(e){return Promise.all([W4(e,"::before"),W4(e,"::after")])}function XL(e){return e.parentNode!==document.head&&!~IE.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vh)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Y4(e){if(Gn)return new Promise((t,n)=>{const i=fa(e.querySelectorAll("*")).filter(XL).map(GL),o=bg.begin("searchPseudoElements");Pb(),Promise.all(i).then(()=>{o(),Lh(),t()}).catch(()=>{o(),Lh(),n()})})}var QL={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Y4,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=be}=t;_.searchPseudoElements&&Y4(n)}}};let G4=!1;var qL={mixout(){return{dom:{unwatch(){Pb(),G4=!0}}}},hooks(){return{bootstrap(){V4(Sh("mutationObserverCallbacks",{}))},noAuto(){EL()},watch(e){const{observeMutationsRoot:t}=e;G4?Lh():V4(Sh("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const X4=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,i)=>{const o=i.toLowerCase().split("-"),a=o[0];let s=o.slice(1).join("-");if(a&&s==="h")return n.flipX=!0,n;if(a&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(a){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var KL={mixout(){return{parse:{transform:e=>X4(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=X4(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:i,containerWidth:o,iconWidth:a}=t;const s={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(d," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),m.path)}]}]}}}};const _0={x:0,y:0,width:"100%",height:"100%"};function Q4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ZL(e){return e.tag==="g"?e.children:[e]}var JL={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),i=n?Ff(n.split(" ").map(o=>o.trim())):jb();return i.prefix||(i.prefix=Hr()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:i,main:o,mask:a,maskId:s,transform:c}=t;const{width:d,icon:u}=o,{width:f,icon:p}=a,m=UE({transform:c,containerWidth:f,iconWidth:d}),x={tag:"rect",attributes:M(M({},_0),{},{fill:"white"})},j=u.children?{children:u.children.map(Q4)}:{},w={tag:"g",attributes:M({},m.inner),children:[Q4(M({tag:u.tag,attributes:M(M({},u.attributes),m.path)},j))]},k={tag:"g",attributes:M({},m.outer),children:[w]},h="mask-".concat(s||qs()),g="clip-".concat(s||qs()),y={tag:"mask",attributes:M(M({},_0),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:ZL(p)},y]};return n.push(S,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},_0)}),{children:n,attributes:i}}}},eI={provides(e){let t=!1;Br.matchMedia&&(t=Br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=M(M({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:M(M({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:M(M({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},tI={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},nI=[GE,FL,VL,_L,BL,QL,qL,KL,JL,eI,tI];fL(nI,{mixoutsTo:Pt});Pt.noAuto;Pt.config;Pt.library;Pt.dom;const Mh=Pt.parse;Pt.findIconDefinition;Pt.toHtml;const rI=Pt.icon;Pt.layer;Pt.text;Pt.counter;var Eb={exports:{}},iI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",oI=iI,aI=oI;function Lb(){}function Ib(){}Ib.resetWarningCache=Lb;var sI=function(){function e(i,o,a,s,c,d){if(d!==aI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ib,resetWarningCache:Lb};return n.PropTypes=n,n};Eb.exports=sI();var lI=Eb.exports;const ee=E3(lI);function q4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q4(Object(n),!0).forEach(function(i){Mo(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q4(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Zu(e){"@babel/helpers - typeof";return Zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zu(e)}function Mo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cI(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,a;for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function dI(e,t){if(e==null)return{};var n=cI(e,t),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function Ah(e){return uI(e)||fI(e)||pI(e)||mI()}function uI(e){if(Array.isArray(e))return $h(e)}function fI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pI(e,t){if(e){if(typeof e=="string")return $h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $h(e,t)}}function $h(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function mI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hI(e){var t,n=e.beat,i=e.fade,o=e.beatFade,a=e.bounce,s=e.shake,c=e.flash,d=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,x=e.inverse,j=e.border,w=e.listItem,k=e.flip,h=e.size,g=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":s,"fa-flash":c,"fa-spin":d,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":m,"fa-inverse":x,"fa-border":j,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Mo(t,"fa-".concat(h),typeof h<"u"&&h!==null),Mo(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),Mo(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Mo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(P){return S[P]?P:null}).filter(function(P){return P})}function gI(e){return e=e-0,e===e}function Mb(e){return gI(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xI=["style"];function yI(e){return e.charAt(0).toUpperCase()+e.slice(1)}function vI(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var i=n.indexOf(":"),o=Mb(n.slice(0,i)),a=n.slice(i+1).trim();return o.startsWith("webkit")?t[yI(o)]=a:t[o]=a,t},{})}function Ab(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(d){return Ab(e,d)}),o=Object.keys(t.attributes||{}).reduce(function(d,u){var f=t.attributes[u];switch(u){case"class":d.attrs.className=f,delete t.attributes.class;break;case"style":d.attrs.style=vI(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?d.attrs[u.toLowerCase()]=f:d.attrs[Mb(u)]=f}return d},{attrs:{}}),a=n.style,s=a===void 0?{}:a,c=dI(n,xI);return o.attrs.style=pn(pn({},o.attrs.style),s),e.apply(void 0,[t.tag,pn(pn({},o.attrs),c)].concat(Ah(i)))}var $b=!1;try{$b=!0}catch{}function bI(){if(!$b&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function K4(e){if(e&&Zu(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mh.icon)return Mh.icon(e);if(e===null)return null;if(e&&Zu(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function B0(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mo({},e,t):{}}var Z4={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},v=lt.forwardRef(function(e,t){var n=pn(pn({},Z4),e),i=n.icon,o=n.mask,a=n.symbol,s=n.className,c=n.title,d=n.titleId,u=n.maskId,f=K4(i),p=B0("classes",[].concat(Ah(hI(n)),Ah((s||"").split(" ")))),m=B0("transform",typeof n.transform=="string"?Mh.transform(n.transform):n.transform),x=B0("mask",K4(o)),j=rI(f,pn(pn(pn(pn({},p),m),x),{},{symbol:a,title:c,titleId:d,maskId:u}));if(!j)return bI("Could not find icon",f),null;var w=j.abstract,k={ref:t};return Object.keys(n).forEach(function(h){Z4.hasOwnProperty(h)||(k[h]=n[h])}),wI(w[0],k)});v.displayName="FontAwesomeIcon";v.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};var wI=Ab.bind(null,lt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const jI={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"]},kI={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},bt=kI,CI={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},Rb=CI,SI={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},Zs={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]},J4={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},na={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},zI={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},PI={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},Ts={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Rh={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},TI={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]},jg={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Ob={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"]},EI={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"]},Js={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"]},el={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"]},LI={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Y=LI,bl={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},II={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},rn=II,MI={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]},ql={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Nb={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},AI={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},$I={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},bn=$I,RI={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},OI={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},NI={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Ju=NI,DI={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Ue={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},ef={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Oh={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},FI={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96l0 128-160 0 0-128 160 0zm0 192l0 128-160 0 0-128 160 0zM224 224L64 224 64 96l160 0 0 128zM64 288l160 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},VI=FI,e5={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},Vo={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},_I={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},_f=_I,ra={prefix:"fas",iconName:"truck",icon:[640,512,[128666,9951],"f0d1","M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},BI={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},HI={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},UI=HI,WI={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Jt=WI,tl={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Nh={prefix:"fas",iconName:"network-wired",icon:[640,512,[],"f6ff","M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"]},YI={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]},zr={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},GI={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},kg=GI,Wr={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]},t5=Wr,Bf={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"]},Li={prefix:"fas",iconName:"credit-card",icon:[576,512,[128179,62083,"credit-card-alt"],"f09d","M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]},XI={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Cg=XI,Db={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},QI={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"]},qI={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},KI={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},ia=KI,ZI={prefix:"fas",iconName:"receipt",icon:[384,512,[129534],"f543","M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"]},fu={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},JI={prefix:"fas",iconName:"user-shield",icon:[640,512,[],"f505","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7l0-187.8L591.4 312z"]},Fb={prefix:"fas",iconName:"truck-fast",icon:[640,512,["shipping-fast"],"f48b","M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},eM={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},tM={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},oa=tM,nM={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},rM={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},iM={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},oM={prefix:"fas",iconName:"percent",icon:[384,512,[62101,62785,"percentage"],"25","M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},aM={prefix:"fas",iconName:"trophy",icon:[576,512,[127942],"f091","M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"]},sM={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},n5=sM,lM={prefix:"fas",iconName:"award",icon:[384,512,[],"f559","M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"]},Nr={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},cM={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"]},br={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},dM={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},pa=dM,uM={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]},fM={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"]},Me={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},pM={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};var Dh=new Map,Kl=new WeakMap,r5=0,mM=void 0;function hM(e){return e?(Kl.has(e)||(r5+=1,Kl.set(e,r5.toString())),Kl.get(e)):"0"}function gM(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?hM(e.root):e[t]}`).toString()}function xM(e){const t=gM(e);let n=Dh.get(t);if(!n){const i=new Map;let o;const a=new IntersectionObserver(s=>{s.forEach(c=>{var d;const u=c.isIntersecting&&o.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=u),(d=i.get(c.target))==null||d.forEach(f=>{f(u,c)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},Dh.set(t,n)}return n}function yM(e,t,n={},i=mM){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:o,observer:a,elements:s}=xM(n),c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),Dh.delete(o))}}function vM({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:c,fallbackInView:d,onChange:u}={}){var f;const[p,m]=b.useState(null),x=b.useRef(u),[j,w]=b.useState({inView:!!c,entry:void 0});x.current=u,b.useEffect(()=>{if(s||!p)return;let y;return y=yM(p,(S,P)=>{w({inView:S,entry:P}),x.current&&x.current(S,P),P.isIntersecting&&a&&y&&(y(),y=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},d),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,p,o,i,a,s,n,d,t]);const k=(f=j.entry)==null?void 0:f.target,h=b.useRef(void 0);!p&&k&&!a&&!s&&h.current!==k&&(h.current=k,w({inView:!!c,entry:void 0}));const g=[m,j.inView,j.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const bM=l(C.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3000;
  max-width: 400px;
  width: 100%;
`,wM=l(C.div)`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${e=>{switch(e.type){case"success":return"linear-gradient(to bottom, #28a745, #20c997)";case"error":return"linear-gradient(to bottom, #dc3545, #fd7e14)";case"info":return"linear-gradient(to bottom, #17a2b8, #6f42c1)";case"warning":return"linear-gradient(to bottom, #ffc107, #fd7e14)";default:return"linear-gradient(to bottom, #2f5483, #1a2f4b)"}}};
  }
`,jM=l.div`
  width: 40px;
  height: 40px;
  background: ${e=>{switch(e.type){case"success":return"#28a745";case"error":return"#dc3545";case"info":return"#17a2b8";case"warning":return"#ffc107";default:return"#2f5483"}}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`,kM=l.div`
  flex: 1;
  min-width: 0;
`,CM=l.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`,SM=l.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
`,zM=l.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  
  &:hover {
    background: #f5f5f5;
    color: #666;
  }
`,Vb=lt.createContext(),PM=({children:e})=>{const[t,n]=lt.useState([]),i=(d,u="success",f=3e3)=>{const p=Date.now()+Math.random(),m={id:p,message:d,type:u,duration:f};return n(x=>[...x,m]),setTimeout(()=>{o(p)},f),p},o=d=>{n(u=>u.filter(f=>f.id!==d))},a=d=>{switch(d){case"success":return Y;case"error":return oa;case"info":return jI;case"warning":return ef;default:return Y}},s=d=>{switch(d){case"success":return"Успешно!";case"error":return"Ошибка";case"info":return"Информация";case"warning":return"Предупреждение";default:return"Уведомление"}},c={notifications:t,addNotification:i,removeNotification:o};return r.jsxs(Vb.Provider,{value:c,children:[e,r.jsx(bM,{children:r.jsx(xl,{children:t.map(d=>r.jsxs(wM,{type:d.type,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{type:"spring",damping:25,stiffness:300},children:[r.jsx(jM,{type:d.type,children:r.jsx(v,{icon:a(d.type)})}),r.jsxs(kM,{children:[r.jsx(CM,{children:s(d.type)}),r.jsx(SM,{children:d.message})]}),r.jsx(zM,{onClick:()=>o(d.id),children:r.jsx(v,{icon:oa})})]},d.id))})})]})},Hf=()=>{const e=lt.useContext(Vb);if(!e)throw new Error("useNotification must be used within a NotificationProvider");return e},_b=b.createContext(),TM=(e,t)=>{switch(t.type){case"ADD_TO_CART":return e.items.find(i=>i.id===t.payload.id)?{...e,items:e.items.map(i=>i.id===t.payload.id?{...i,quantity:i.quantity+1}:i)}:{...e,items:[...e.items,{...t.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...e,items:e.items.filter(i=>i.id!==t.payload)};case"UPDATE_QUANTITY":return{...e,items:e.items.map(i=>i.id===t.payload.id?{...i,quantity:t.payload.quantity}:i)};case"CLEAR_CART":return{...e,items:[]};default:return e}},EM=({children:e})=>{const t=()=>{try{const m=localStorage.getItem("cart");if(m){const x=JSON.parse(m);return console.log("Загружена корзина из localStorage:",x),{items:x}}}catch(m){console.error("Ошибка при загрузке корзины:",m),localStorage.removeItem("cart")}return console.log("Инициализация пустой корзины"),{items:[]}},[n,i]=b.useReducer(TM,t()),{addNotification:o}=Hf();b.useEffect(()=>{console.log("Сохранение корзины в localStorage:",n.items),localStorage.setItem("cart",JSON.stringify(n.items))},[n.items]);const a=m=>{i({type:"ADD_TO_CART",payload:m}),o(`${m.name} добавлен в корзину`,"success",3e3)},s=m=>{i({type:"REMOVE_FROM_CART",payload:m})},c=(m,x)=>{x<=0?s(m):i({type:"UPDATE_QUANTITY",payload:{id:m,quantity:x}})},d=()=>{i({type:"CLEAR_CART"})},u=()=>n.items.reduce((m,x)=>m+x.quantity,0),f=()=>n.items.reduce((m,x)=>m+x.price*x.quantity,0),p={items:n.items,addToCart:a,removeFromCart:s,updateQuantity:c,clearCart:d,getTotalItems:u,getTotalPrice:f};return r.jsx(_b.Provider,{value:p,children:e})},Kr=()=>{const e=b.useContext(_b);if(!e)throw new Error("useCart must be used within a CartProvider");return e},LM=l(C.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`,IM=l(C.div)`
  position: relative;
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(47, 84, 131, 0.25);
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
`,MM=l.div`
  padding: 2rem 2rem 1.5rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: #ffffff;
  position: relative;
`,AM=l.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
`,$M=l.p`
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.5;
`,RM=l.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`,OM=l.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,i5=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,o5=l.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2f5483;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,a5=l.input`
  padding: 0.95rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.25);
  font-size: 1rem;
  color: #2f5483;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(47, 84, 131, 0.45);
  }

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
`,NM=l.div`
  background: rgba(47, 84, 131, 0.08);
  border: 1px dashed rgba(47, 84, 131, 0.4);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
  color: #2f5483;
  line-height: 1.4;
`,DM=l(C.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: none;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(47, 84, 131, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
`,s5=l.p`
  margin: -0.25rem 0 0;
  font-size: 0.85rem;
  color: #dc3545;
`,l5={name:"",phone:""};function Sg({isOpen:e,productName:t,onClose:n,onSubmit:i}){const[o,a]=b.useState(l5),[s,c]=b.useState({});b.useEffect(()=>(e?(a(l5),c({}),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]);const d=b.useCallback(p=>{const{name:m,value:x}=p.target;a(j=>({...j,[m]:x}))},[]),u=b.useCallback(()=>{const p={};return o.name.trim()||(p.name="Введите ваше имя"),o.phone.trim()||(p.phone="Укажите номер телефона"),c(p),Object.keys(p).length===0},[o]),f=b.useCallback(p=>{p.preventDefault(),u()&&i&&i({name:o.name.trim(),phone:o.phone.trim(),productName:t})},[o,i,t,u]);return r.jsx(xl,{children:e&&r.jsx(LM,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:r.jsxs(IM,{initial:{opacity:0,y:40,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:40,scale:.95},transition:{duration:.25,ease:"easeOut"},onClick:p=>p.stopPropagation(),children:[r.jsxs(MM,{children:[r.jsx(AM,{children:"Запросить предложение"}),r.jsxs($M,{children:["Оставьте свои контакты, и мы свяжемся с вами, чтобы обсудить условия по товару",t?` «${t}»`:"","."]}),r.jsx(RM,{type:"button",onClick:n,"aria-label":"Закрыть",children:r.jsx(v,{icon:oa})})]}),r.jsxs(OM,{onSubmit:f,children:[t&&r.jsxs(NM,{children:[r.jsx("strong",{children:"Товар:"})," ",t]}),r.jsxs(i5,{children:[r.jsx(o5,{htmlFor:"quote-name",children:"Ваше имя *"}),r.jsx(a5,{id:"quote-name",name:"name",type:"text",placeholder:"Иван Иванов",value:o.name,onChange:d,autoComplete:"name"}),s.name&&r.jsx(s5,{children:s.name})]}),r.jsxs(i5,{children:[r.jsx(o5,{htmlFor:"quote-phone",children:"Телефон *"}),r.jsx(a5,{id:"quote-phone",name:"phone",type:"tel",placeholder:"+7 (___) ___-__-__",value:o.phone,onChange:d,autoComplete:"tel"}),s.phone&&r.jsx(s5,{children:s.phone})]}),r.jsxs(DM,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]})]})})})}const FM=()=>window.innerWidth<=768,Di=(e,t={})=>FM()?t:e,c5=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`,VM=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
`,_M=l.div`
  margin-bottom: 2rem;
`,BM=l.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`,HM=l.p`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 300;
  margin-bottom: 1.5rem;
`,UM=l.div`
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
    flex-direction: row;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
  }
`,WM=l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;const H0=l(C.button)`
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
`,YM=l.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    display: none;
  }
`,GM=l(C.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`,XM=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: translateY(${e=>e.isOpen?"0":"-10px"});
  transition: all 0.3s ease;
`,U0=l.button`
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  color: #666666;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    color: #2f5483;
  }
  
  &.active {
    background: rgba(47, 84, 131, 0.15);
    color: #2f5483;
    font-weight: 500;
  }
`,QM=l(C.button)`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0.6rem 1rem;
  background: ${e=>e.active?"rgba(47, 84, 131, 0.15)":"rgba(47, 84, 131, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(47, 84, 131, 0.3)":"rgba(47, 84, 131, 0.1)"};
  border-radius: 6px;
  color: #2f5483;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`,qM=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"block":"none"};
  }
`,KM=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 2001;
  padding: 2rem;
  overflow-y: auto;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`,ZM=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,JM=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,eA=l(C.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`,ei=l.div`
  margin-bottom: 2rem;
`,ti=l.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
`,qn=l.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  cursor: pointer;
  font-size: 1rem;
  color: #333333;
  transition: color 0.3s ease;
  border-bottom: 1px solid #f5f5f5;
  
  &:hover {
    color: #2f5483;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,Kn=l.input`
  margin: 0;
  width: 18px;
  height: 18px;
  accent-color: #2f5483;
`,tA=l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`,d5=l.input`
  flex: 1;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`,nA=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,u5=l(C.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: #2f5483;
    color: white;
    
    &:hover {
      background: #1a2f4b;
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 1px solid #2f5483;
    
    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,W0=l.div`
  position: relative;
  display: inline-block;
`,Y0=l.div`
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
`,Fi=l.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Vi=l.div`
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`,Ea=l.label`
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
`,La=l.input`
  margin: 0;
`,rA=l.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,f5=l.input`
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
`,iA=l(C.button)`
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
`,oA=l.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`,ni=l.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,ri=l.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #ff4757;
  }
`,aA=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,Bb=l(C.div)`
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
  cursor: pointer;
  
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
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`,sA=l.div`
  position: relative;
  height: 200px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
  
  ${Bb}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 1024px) {
    height: 180px;
  }
  
  @media (max-width: 768px) {
    height: 160px;
  }
  
  @media (max-width: 480px) {
    height: 140px;
  }
`,lA=l.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #2f5483;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
`,cA=l.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`,dA=l.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,uA=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }
`,fA=l.p`
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
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    max-height: 3.8rem;
    -webkit-line-clamp: 2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`,pA=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }
`,ii=l.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
  }
`,mA=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`,p5=l.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,hA=l.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #2f5483;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,gA=l.div`
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  text-decoration: line-through;
  margin-right: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,xA=l.div`
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
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`;const yA=l.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,vA=l(C.button)`
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
  
  @media (max-width: 1024px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,bA=l(C.button)`
  flex: 1;
  background: rgba(47, 84, 131, 0.08);
  border: 1px dashed #2f5483;
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
    background: rgba(47, 84, 131, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,wA=l(C.button)`
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
  
  @media (max-width: 1024px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,jA=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`,kA=l(C.button)`
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
`,CA=l.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.4;
  }
`,SA=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`,zA=l.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
`,PA=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,TA=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,EA=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;function LA(){const[e,t]=ik(),n=on(),[i,o]=b.useState([]),[a,s]=b.useState(!0),[c,d]=b.useState(12),[u,f]=b.useState("name"),p=12,{addToCart:m}=Kr(),[x,j]=b.useState(!1),[w,k]=b.useState(""),[h,g]=b.useState({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),[y,S]=b.useState(""),[P,E]=b.useState(null),[T,I]=b.useState(!1),[R,D]=b.useState(!1);b.useEffect(()=>{const z=O=>{!O.target.closest(".filter-dropdown")&&!O.target.closest(".sort-dropdown")&&(E(null),I(!1))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[]);const ne=()=>{D(!1)};b.useEffect(()=>{fetch("/catalog-products.json").then(z=>z.json()).then(z=>{o(z),s(!1)}).catch(z=>{console.error("Ошибка загрузки товаров:",z),s(!1)})},[]),b.useEffect(()=>{const z=e.get("category"),O=e.get("brand"),X=e.get("search");(z||O||X)&&(g({categories:z?[z]:[],brands:O?[O]:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),X&&S(X),d(12))},[e]),b.useEffect(()=>{d(12)},[h]);const q=(z,O,X)=>{g(Q=>{const $e={...Q};return z==="priceRange"?$e.priceRange={...Q.priceRange,...O}:X?$e[z]=[...Q[z],O]:$e[z]=Q[z].filter(Zr=>Zr!==O),$e}),setCurrentPage(1)};b.useEffect(()=>{const z=new URLSearchParams;h.categories.length>0&&z.set("category",h.categories[0]),h.brands.length>0&&z.set("brand",h.brands[0]),t(z)},[h.categories,h.brands,t]);const he=()=>{g({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),S(""),t({}),d(12)},G=(z,O)=>{g(X=>{const Q={...X};return z==="priceRange"?Q.priceRange={min:"",max:""}:Q[z]=X[z].filter($e=>$e!==O),Q}),setCurrentPage(1)},J=z=>z.filter(O=>{if(y.trim()){const X=y.toLowerCase().trim(),Q=O.name.toLowerCase().includes(X),$e=O.brand.toLowerCase().includes(X),Zr=O.category.toLowerCase().includes(X);if(!Q&&!$e&&!Zr)return!1}return!(h.categories.length>0&&!h.categories.includes(O.category)||h.brands.length>0&&!h.brands.includes(O.brand)||h.priceRange.min&&(O.price==null||O.price<parseInt(h.priceRange.min,10))||h.priceRange.max&&(O.price==null||O.price>parseInt(h.priceRange.max,10))||h.phases.length>0&&!h.phases.includes(O.specifications.phases)||h.voltage.length>0&&!h.voltage.includes(O.specifications.voltage)||h.accuracy.length>0&&!h.accuracy.includes(O.specifications.accuracy))}),U=z=>{const X=i.map(Q=>z==="specifications.phases"?Q.specifications.phases:z==="specifications.voltage"?Q.specifications.voltage:z==="specifications.accuracy"?Q.specifications.accuracy:Q[z]).filter(Q=>Q&&Q!==""&&Q!=="нет"&&Q!=="не требуется"&&Q!=="ТМ выход");return[...new Set(X)].sort()},ce=J([...i]).sort((z,O)=>{switch(u){case"name":return z.name.localeCompare(O.name);case"price-asc":{const X=z.price!=null?z.price:Number.POSITIVE_INFINITY,Q=O.price!=null?O.price:Number.POSITIVE_INFINITY;return X-Q}case"price-desc":{const X=z.price!=null?z.price:Number.NEGATIVE_INFINITY;return(O.price!=null?O.price:Number.NEGATIVE_INFINITY)-X}default:return 0}}),$=ce.slice(0,c),F=c<ce.length,B=()=>y.trim()||h.categories.length>0||h.brands.length>0||h.priceRange.min||h.priceRange.max||h.phases.length>0||h.voltage.length>0||h.accuracy.length>0,V=()=>{d(z=>z+p)},Z=()=>{n("/consultation")},rt=b.useCallback(z=>{k(z||""),j(!0)},[]),Ae=b.useCallback(()=>{j(!1)},[]),Qe=b.useCallback(({name:z,phone:O,productName:X})=>{alert(`Спасибо, ${z}! Мы свяжемся с вами по номеру ${O} по поводу товара «${X||w||"выбранного товара"}».`),j(!1)},[w]),se=z=>{f(z),I(!1)},qe=()=>{switch(u){case"name":return"По названию";case"price-asc":return"По цене (возрастание)";case"price-desc":return"По цене (убывание)";default:return"По названию"}},it=()=>{if(h.categories.length===1&&h.brands.length===0)return`${h.categories[0]}`;if(h.categories.length===0&&h.brands.length===1)return`Счетчики ${h.brands[0]}`;if(h.categories.length===1&&h.brands.length===1)return`${h.categories[0]} ${h.brands[0]}`;if(h.categories.length>1)return`Категории: ${h.categories.join(", ")}`;if(h.brands.length>1)return`Бренды: ${h.brands.join(", ")}`;if(h.priceRange.min||h.priceRange.max){let z="По цене";return h.priceRange.min&&h.priceRange.max?z=`От ${h.priceRange.min} до ${h.priceRange.max} ₽`:h.priceRange.min?z=`От ${h.priceRange.min} ₽`:h.priceRange.max&&(z=`До ${h.priceRange.max} ₽`),z}if(h.phases.length>0||h.voltage.length>0||h.accuracy.length>0){const z=[];return h.phases.length>0&&z.push(`${h.phases.join(", ")} фаза`),h.voltage.length>0&&z.push(h.voltage.join(", ")),h.accuracy.length>0&&z.push(`Класс ${h.accuracy.join(", ")}`),z.join(", ")}return"Каталог"};return b.useEffect(()=>{const z=it(),O=B()?`${z} - Счетчики электроэнергии | Стройэнергетика`:"Каталог счетчиков электроэнергии | Стройэнергетика";document.title=O},[h,B]),a?r.jsx(c5,{children:r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"1.2rem",color:"#2f5483"},children:"Загрузка товаров..."})}):r.jsxs(r.Fragment,{children:[r.jsxs(c5,{children:[r.jsxs(VM,{children:[r.jsxs(_M,{children:[r.jsx(BM,{children:it()}),r.jsx(HM,{children:B()?`Найдено ${ce.length} товаров`:"Широкий выбор счетчиков электроэнергии от ведущих производителей с гарантией качества"})]}),r.jsxs(UM,{children:[r.jsxs(WM,{children:[r.jsxs(W0,{className:"filter-dropdown",children:[r.jsxs(H0,{active:h.categories.length>0||h.brands.length>0,onClick:()=>E(P==="main"?null:"main"),...Di({whileHover:{scale:1.02}}),children:[r.jsx(v,{icon:ql}),"Категории и бренды"]}),r.jsxs(Y0,{isOpen:P==="main",children:[r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Категории"}),U("category").map(z=>r.jsxs(Ea,{children:[r.jsx(La,{type:"checkbox",checked:h.categories.includes(z),onChange:O=>q("categories",z,O.target.checked)}),z]},z))]}),r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Бренды"}),U("brand").map(z=>r.jsxs(Ea,{children:[r.jsx(La,{type:"checkbox",checked:h.brands.includes(z),onChange:O=>q("brands",z,O.target.checked)}),z]},z))]})]})]}),r.jsxs(W0,{className:"filter-dropdown",children:[r.jsxs(H0,{active:h.priceRange.min||h.priceRange.max,onClick:()=>E(P==="price"?null:"price"),...Di({whileHover:{scale:1.02}}),children:[r.jsx(v,{icon:ql}),"Цена"]}),r.jsx(Y0,{isOpen:P==="price",children:r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Диапазон цен"}),r.jsxs(rA,{children:[r.jsx(f5,{type:"number",placeholder:"От",value:h.priceRange.min,onChange:z=>q("priceRange",{min:z.target.value})}),r.jsx("span",{children:"-"}),r.jsx(f5,{type:"number",placeholder:"До",value:h.priceRange.max,onChange:z=>q("priceRange",{max:z.target.value})})]})]})})]}),r.jsxs(W0,{className:"filter-dropdown",children:[r.jsxs(H0,{active:h.phases.length>0||h.voltage.length>0||h.accuracy.length>0,onClick:()=>E(P==="specs"?null:"specs"),...Di({whileHover:{scale:1.02}}),children:[r.jsx(v,{icon:ql}),"Характеристики"]}),r.jsxs(Y0,{isOpen:P==="specs",children:[r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Количество фаз"}),U("specifications.phases").map(z=>r.jsxs(Ea,{children:[r.jsx(La,{type:"checkbox",checked:h.phases.includes(z),onChange:O=>q("phases",z,O.target.checked)}),z," фаза"]},z))]}),r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Напряжение"}),U("specifications.voltage").map(z=>r.jsxs(Ea,{children:[r.jsx(La,{type:"checkbox",checked:h.voltage.includes(z),onChange:O=>q("voltage",z,O.target.checked)}),z]},z))]}),r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Класс точности"}),U("specifications.accuracy").map(z=>r.jsxs(Ea,{children:[r.jsx(La,{type:"checkbox",checked:h.accuracy.includes(z),onChange:O=>q("accuracy",z,O.target.checked)}),z]},z))]})]})]}),B()&&r.jsx(iA,{onClick:he,whileHover:{scale:1.02},children:"Очистить все"})]}),r.jsxs(QM,{active:B(),onClick:()=>D(!0),whileHover:{scale:1.02},children:[r.jsx(v,{icon:ql}),"Фильтры"]}),r.jsxs(YM,{className:"sort-dropdown",children:[r.jsxs(GM,{onClick:()=>I(!T),whileHover:{scale:1.02},children:[r.jsx(v,{icon:MI}),qe()]}),r.jsxs(XM,{isOpen:T,children:[r.jsx(U0,{className:u==="name"?"active":"",onClick:()=>se("name"),children:"По названию"}),r.jsx(U0,{className:u==="price-asc"?"active":"",onClick:()=>se("price-asc"),children:"По цене (возрастание)"}),r.jsx(U0,{className:u==="price-desc"?"active":"",onClick:()=>se("price-desc"),children:"По цене (убывание)"})]})]})]}),B()&&r.jsxs(oA,{children:[h.categories.map(z=>r.jsxs(ni,{children:["Категория: ",z,r.jsx(ri,{onClick:()=>G("categories",z),children:"×"})]},`category-${z}`)),h.brands.map(z=>r.jsxs(ni,{children:["Бренд: ",z,r.jsx(ri,{onClick:()=>G("brands",z),children:"×"})]},`brand-${z}`)),h.priceRange.min&&r.jsxs(ni,{children:["Цена от: ",h.priceRange.min," ₽",r.jsx(ri,{onClick:()=>G("priceRange"),children:"×"})]},"price-min"),h.priceRange.max&&r.jsxs(ni,{children:["Цена до: ",h.priceRange.max," ₽",r.jsx(ri,{onClick:()=>G("priceRange"),children:"×"})]},"price-max"),h.phases.map(z=>r.jsxs(ni,{children:[z," фаза",r.jsx(ri,{onClick:()=>G("phases",z),children:"×"})]},`phase-${z}`)),h.voltage.map(z=>r.jsxs(ni,{children:[z,r.jsx(ri,{onClick:()=>G("voltage",z),children:"×"})]},`voltage-${z}`)),h.accuracy.map(z=>r.jsxs(ni,{children:["Класс ",z,r.jsx(ri,{onClick:()=>G("accuracy",z),children:"×"})]},`accuracy-${z}`))]}),r.jsx(aA,{children:$.map((z,O)=>{const X=typeof z.price=="number"&&z.price>0,Q=X&&z.originalPrice&&z.originalPrice>z.price;return r.jsxs(Bb,{...Di({initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:O*.1}},{initial:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{duration:0}}),onClick:()=>n(`/product/${z.id}`),children:[r.jsxs(sA,{children:[(()=>{const $e="/images/products/default.svg",Zr=z.mainImage||(z.image?`/images/products/${z.image}`:$e);return r.jsx("img",{src:Zr,alt:z.name,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})})(),r.jsx(lA,{children:z.brand}),z.discount&&r.jsxs(xA,{children:["-",z.discount,"%"]})]}),r.jsxs(cA,{children:[r.jsx(dA,{children:z.category}),r.jsx(uA,{children:z.name}),r.jsx(fA,{children:z.description}),r.jsxs(pA,{children:[z.specifications.phases&&z.specifications.phases!=="нет"&&r.jsxs(ii,{children:[z.specifications.phases," фаза"]}),z.specifications.voltage&&z.specifications.voltage!=="нет"&&r.jsx(ii,{children:z.specifications.voltage}),z.specifications.accuracy&&z.specifications.accuracy!=="нет"&&r.jsxs(ii,{children:[z.specifications.accuracy," класс"]}),z.specifications.tariffs&&z.specifications.tariffs!=="однотарифный"&&r.jsx(ii,{children:"Многотарифный"}),z.category==="Устройства сбора и передачи данных"&&r.jsxs(r.Fragment,{children:[z.specifications.power_3phase&&r.jsx(ii,{children:"3×230/400В"}),z.specifications.interfaces&&typeof z.specifications.interfaces=="object"&&r.jsx(ii,{children:"Wi-Fi, LTE"}),z.specifications.temperature&&r.jsx(ii,{children:"-40...+55°C"})]})]}),r.jsx(mA,{children:X?Q?r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsxs(gA,{children:[z.originalPrice.toLocaleString()," ₽"]}),r.jsxs(p5,{children:[z.price.toLocaleString()," ₽"]})]}):r.jsxs(p5,{children:[z.price.toLocaleString()," ₽"]}):r.jsx(hA,{children:"Цена по запросу"})}),r.jsxs(yA,{children:[X?r.jsxs(vA,{onClick:$e=>{$e.stopPropagation(),m(z)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Jt}),"В корзину"]}):r.jsxs(bA,{onClick:$e=>{$e.stopPropagation(),rt(z.name)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Запросить предложение"]}),r.jsxs(wA,{onClick:$e=>{$e.stopPropagation(),n(`/product/${z.id}`)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:_f}),"Подробнее"]})]})]})]},z.id)})}),F&&r.jsx(jA,{children:r.jsxs(kA,{onClick:V,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Показать еще ",Math.min(p,ce.length-c)," товаров"]})}),r.jsx(CA,{children:r.jsxs(SA,{children:[r.jsx(zA,{children:r.jsx(v,{icon:ia})}),r.jsx(PA,{children:"Не нашли нужный товар в каталоге?"}),r.jsx(TA,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(EA,{onClick:Z,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Купить под заказ"]})]})})]}),r.jsx(qM,{isOpen:R,...Di({initial:{opacity:0},animate:{opacity:R?1:0},transition:{duration:.3}},{initial:{opacity:0},animate:{opacity:R?1:0},transition:{duration:.1}}),onClick:ne}),r.jsxs(KM,{...Di({initial:{x:"-100%"},animate:{x:R?0:"-100%"},transition:{duration:.3,ease:"easeInOut"}},{initial:{x:"-100%"},animate:{x:R?0:"-100%"},transition:{duration:.1,ease:"easeInOut"}}),children:[r.jsxs(ZM,{children:[r.jsx(JM,{children:"Фильтры"}),r.jsx(eA,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:ne,children:"×"})]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Категории"}),U("category").map(z=>r.jsxs(qn,{children:[r.jsx(Kn,{type:"checkbox",checked:h.categories.includes(z),onChange:O=>q("categories",z,O.target.checked)}),z]},z))]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Бренды"}),U("brand").map(z=>r.jsxs(qn,{children:[r.jsx(Kn,{type:"checkbox",checked:h.brands.includes(z),onChange:O=>q("brands",z,O.target.checked)}),z]},z))]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Цена"}),r.jsxs(tA,{children:[r.jsx(d5,{type:"number",placeholder:"От",value:h.priceRange.min,onChange:z=>q("priceRange",{min:z.target.value})}),r.jsx("span",{children:"-"}),r.jsx(d5,{type:"number",placeholder:"До",value:h.priceRange.max,onChange:z=>q("priceRange",{max:z.target.value})})]})]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Количество фаз"}),U("specifications.phases").map(z=>r.jsxs(qn,{children:[r.jsx(Kn,{type:"checkbox",checked:h.phases.includes(z),onChange:O=>q("phases",z,O.target.checked)}),z," фаза"]},z))]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Напряжение"}),U("specifications.voltage").map(z=>r.jsxs(qn,{children:[r.jsx(Kn,{type:"checkbox",checked:h.voltage.includes(z),onChange:O=>q("voltage",z,O.target.checked)}),z]},z))]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Класс точности"}),U("specifications.accuracy").map(z=>r.jsxs(qn,{children:[r.jsx(Kn,{type:"checkbox",checked:h.accuracy.includes(z),onChange:O=>q("accuracy",z,O.target.checked)}),"Класс ",z]},z))]}),r.jsxs(ei,{children:[r.jsx(ti,{children:"Сортировка"}),r.jsxs(qn,{children:[r.jsx(Kn,{type:"radio",name:"sort",checked:u==="name",onChange:()=>se("name")}),"По названию"]}),r.jsxs(qn,{children:[r.jsx(Kn,{type:"radio",name:"sort",checked:u==="price-asc",onChange:()=>se("price-asc")}),"По цене (возрастание)"]}),r.jsxs(qn,{children:[r.jsx(Kn,{type:"radio",name:"sort",checked:u==="price-desc",onChange:()=>se("price-desc")}),"По цене (убывание)"]})]}),r.jsxs(nA,{children:[r.jsx(u5,{className:"secondary",onClick:he,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Очистить все"}),r.jsx(u5,{className:"primary",onClick:ne,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Применить"})]})]})]}),r.jsx(Sg,{isOpen:x,productName:w,onClose:Ae,onSubmit:Qe})]})}const IA=()=>window.innerWidth<=768,Re=(e,t={})=>IA()?t:e,MA=l(C.section)`
  height: 700px;
  min-height: 700px;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  margin-top: 150px;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
    max-height: none;
    margin-top: 75px;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
`,AA=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 300px;
    background: url('/banner.jpg') top right/cover no-repeat;
    position: relative;
  }
`,$A=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    background: #ffffff;
    padding: 2rem 1.5rem;
    width: 100%;
    text-align: center;
  }
`,RA=l.h1`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #2f5483;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`,OA=l.p`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1rem;
    color: #666666;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`,NA=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,DA=l(C.button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #2f5483;
    border: none;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #1a2f4b;
    }
  }
`,FA=l(C.button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    border: 2px solid #2f5483;
    color: #2f5483;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,VA=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`,G0=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #2f5483;
    font-size: 0.9rem;
    font-weight: 500;
    
    svg {
      color: #28a745;
      font-size: 1rem;
    }
  }
`,_A=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>`url('${e.image}') top right/cover no-repeat`};
  background-color: #f8f9fa;
  opacity: ${e=>e.active?1:0};
  transition: opacity 0.8s ease-in-out;
  
  @media (max-width: 768px) {
    display: none;
  }
`,BA=l.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    display: none;
  }
`,HA=l.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: ${e=>e.active?"#ffffff":"transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`,UA=l(C.div)`
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
  
  @media (max-width: 768px) {
    display: none;
  }
`,WA=l(C.div)`
  max-width: 600px;
`,YA=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
`,GA=l(C.p)`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
`;l(C.div)`
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
`;l(C.div)`
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
`;l(C.button)`
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
`;l(C.div)`
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
`;const ma=l(C.section)`
  padding: 8rem 0;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 0rem;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
`,Zl=l(C.h2)`
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 6rem;
  color: #000000;
  letter-spacing: 0.03em;
  position: relative;
  width: 100%;
  text-transform: none;
  max-width: 1400px;
  padding: 0 2rem;
  
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 4rem;
    padding: 0 1rem;
  }
`,XA=l(ma)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
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
`,QA=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`,In=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      transform: scaleX(1);
    }
    
    &:after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,_i=l.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.08), rgba(47, 84, 131, 0.12));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 0 auto 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2f5483, #4a90e2);
    border-radius: 20px;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }
  
  ${In}:hover & {
    transform: scale(1.1);
    
    &:before {
      transform: scale(1);
    }
    
    svg {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`,Bi=l.h3`
  font-size: 1.3rem;
  color: #000000;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(47, 84, 131, 0.3);
    transition: width 0.4s ease;
  }
  
  ${In}:hover & {
    &:after {
      width: 60px;
      background: rgba(47, 84, 131, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`,Hi=l.p`
  color: #666;
  opacity: 0.9;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
  transition: opacity 0.4s ease;
  max-width: 100%;
  
  ${In}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,qA=l.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,kr=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(47, 84, 131, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      transform: scaleX(1);
    }
    
    &:after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,Ia=l.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2f5483, #4a90e2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  z-index: 2;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`,Ma=l.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.08), rgba(47, 84, 131, 0.12));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2f5483, #4a90e2);
    border-radius: 20px;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }
  
  ${kr}:hover & {
    transform: scale(1.1);
    
    &:before {
      transform: scale(1);
    }
    
    svg {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`,Aa=l.h3`
  font-size: 1.3rem;
  color: #000000;
  font-weight: 600;
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
    background: rgba(47, 84, 131, 0.3);
    transition: all 0.4s ease;
  }
  
  ${kr}:hover & {
    color: #2f5483;
    
    &:after {
      width: 60px;
      background: rgba(47, 84, 131, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`,$a=l.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  transition: all 0.4s ease;
  z-index: 3;
  
  ${kr}:hover & {
    color: #333;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;l.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;const KA=l(ma)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,ZA=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`,JA=l(C.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
`;l.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;const e$=l.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,t$=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ra=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:before {
    content: "✓";
    color: #2f5483;
    font-weight: bold;
    font-size: 1.2rem;
  }
`,n$=l(C.div)`
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.05), rgba(47, 84, 131, 0.1));
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    order: 1;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,r$=l.div`
  position: relative;
  z-index: 2;
`,i$=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,o$=l.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,a$=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`,m5=l.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.1);
`,h5=l.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,g5=l.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,s$=l(ma)`
  background: #ffffff;
  padding: 4rem 0 0 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  color: #000000;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,l$=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`,c$=l(C.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
  
  @media (max-width: 768px) {
    order: 1;
  }
`,d$=l.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,u$=l.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,f$=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Jl=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:before {
    content: "✓";
    color: #2f5483;
    font-weight: bold;
    font-size: 1.2rem;
  }
`,p$=l(C.form)`
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 1024px) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    order: 2;
    padding: 2rem;
  }
`,m$=l.div`
  position: relative;
  z-index: 2;
`,h$=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,ec=l.div`
  margin-bottom: 1.5rem;
`,tc=l.label`
  display: block;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,X0=l.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 12px;
  background: #ffffff;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
`,g$=l.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 12px;
  background: #ffffff;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
`,x$=l(C.button)`
  width: 100%;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.1), rgba(47, 84, 131, 0.15));
  border: 1px solid rgba(47, 84, 131, 0.2);
  color: #2f5483;
  padding: 1.2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.2), rgba(47, 84, 131, 0.25));
    border-color: rgba(47, 84, 131, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`,y$=l.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.4;
  }
`,v$=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`,b$=l.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
`,w$=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,j$=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,k$=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;l(ma)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;l(C.button)`
  background: #ffffff;
  border: 2px solid rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.05), rgba(47, 84, 131, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.3);
    color: #2f5483;
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem 1rem;
    min-height: 70px;
  }
`;const C$=l(ma)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,S$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1440px) {
    max-width: 1200px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`,Hb=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  cursor: pointer;
  min-width: 0; // Предотвращает переполнение
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`,z$=l.div`
  height: 200px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
  
  ${Hb}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 1024px) {
    height: 180px;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    height: 160px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    padding: 0.8rem;
  }
`,P$=l.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`,T$=l.div`
  padding: 1.5rem;
  
  @media (max-width: 1024px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`,E$=l.div`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,L$=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,I$=l.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,M$=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,A$=l.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,$$=l.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  margin-right: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,R$=l.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #2f5483;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,O$=l(C.button)`
  width: 100%;
  background: #2f5483;
  border: none;
  padding: 0.8rem 1.5rem;
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
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,N$=l(C.button)`
  width: 100%;
  background: rgba(47, 84, 131, 0.08);
  border: 1px dashed #2f5483;
  padding: 0.8rem 1.5rem;
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
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.1);

  &:hover {
    background: rgba(47, 84, 131, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,D$=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,F$=l(C.button)`
  background: white;
  border: none;
  padding: 1rem 2rem;
  color: #2f5483;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`,V$=l(C.button)`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`,_$=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`,Q0=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;function B$(){vM({triggerOnce:!0,threshold:.1});const{getTotalItems:e,getTotalPrice:t,addToCart:n}=Kr(),i=on(),[o,a]=b.useState(!1),[s,c]=b.useState(""),[d,u]=b.useState(0),f=["/banner.jpg"],p=[{id:1,name:"АГАТ 1-3",type:"Однофазный счетчик с ЭМУ на DIN-рейку",brand:"АГАТ",price:3800,originalPrice:4500,discount:15,image:"agat-1-3.svg",mainImage:"/images/products/agat-1-3/0001.png",images:["/images/products/agat-1-3/0001.png","/images/products/agat-1-3/0002.png","/images/products/agat-1-3/0003.png","/images/products/agat-1-3/0004.png"]},{id:2,name:"АГАТ 1-4",type:"Однофазный счетчик с ЭМУ на DIN-рейку и панель",brand:"АГАТ",price:4200,originalPrice:4200,discount:0,image:"agat-1-4.svg",mainImage:"/images/products/agat-1-4/01.png",images:["/images/products/agat-1-4/01.png","/images/products/agat-1-4/02.png"]},{id:3,name:"АГАТ 2-32(5)",type:"Однофазный счетчик с ЖКИ на DIN-рейку",brand:"АГАТ",price:5200,originalPrice:6500,discount:20,image:"agat-2-32.svg",mainImage:"/images/products/agat-2-32/001.png",images:["/images/products/agat-2-32/001.png","/images/products/agat-2-32/002.png","/images/products/agat-2-32/003.png","/images/products/agat-2-32/004.png"]},{id:4,name:"АГАТ 2-42(5)",type:"Однофазный счетчик с ЖКИ на DIN-рейку или панель",brand:"АГАТ",price:5800,originalPrice:5800,discount:0,image:"agat-2-42.svg",mainImage:"/images/products/agat-2-42/001.png",images:["/images/products/agat-2-42/001.png","/images/products/agat-2-42/002.png","/images/products/agat-2-42/003.png","/images/products/agat-2-42/004.png"]},{id:5,name:"АГАТ S200",type:"Однофазный многофункциональный счетчик с ЖКИ",brand:"АГАТ",price:7200,originalPrice:8500,discount:15,image:"agat-s200.svg",mainImage:"/images/products/agat-s200/001.png",images:["/images/products/agat-s200/001.png","/images/products/agat-s200/002.png","/images/products/agat-s200/003.png"]},{id:6,name:"НЕМО-1",type:"Однофазный многофункциональный счетчик с ЖКИ",brand:"НЕМО",price:7500,originalPrice:9e3,discount:17,image:"nemo-1.svg",mainImage:"/images/products/nemo-1/001.png",images:["/images/products/nemo-1/001.png","/images/products/nemo-1/002.png","/images/products/nemo-1/003.png"]},{id:7,name:"АГАТ 3-3.100.2",type:"Трехфазный счетчик с ЖКИ на DIN-рейку",brand:"АГАТ",price:8500,originalPrice:10500,discount:19,image:"agat-3-100-2.svg",mainImage:"/images/products/agat-3-100-2/001.png",images:["/images/products/agat-3-100-2/001.png","/images/products/agat-3-100-2/002.png"]},{id:8,name:"RTU-325",type:"Устройство сбора и передачи данных",brand:"АГАТ",price:2e4,originalPrice:25e3,discount:20,image:"rtu-325.svg",mainImage:"/images/products/rtu-325/001.png",images:["/images/products/rtu-325/001.png","/images/products/rtu-325/002.png"]}];b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),b.useEffect(()=>{const k=setInterval(()=>{u(h=>(h+1)%f.length)},5e3);return()=>clearInterval(k)},[f.length]);const m=b.useCallback(k=>{c(k||""),a(!0)},[]),x=b.useCallback(k=>{n(k)},[n]),j=b.useCallback(()=>{a(!1)},[]),w=b.useCallback(({name:k,phone:h,productName:g})=>{alert(`Спасибо, ${k}! Мы свяжемся с вами по номеру ${h} по поводу товара «${g||s||"выбранного товара"}».`),a(!1)},[s]);return r.jsxs(r.Fragment,{children:[r.jsxs(MA,{children:[r.jsx(AA,{}),r.jsxs($A,{children:[r.jsx(RA,{children:"Надежные счетчики электроэнергии"}),r.jsx(OA,{children:"Официальный дилер АГАТ, НЕМО, Меркурий и других ведущих производителей. Гарантия до 16 лет. Доставка по России. Установка под ключ."}),r.jsxs(NA,{children:[r.jsxs(DA,{onClick:()=>i("/catalog"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Jt}),"Смотреть каталог"]}),r.jsxs(FA,{onClick:()=>i("/contacts"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Ue}),"Получить консультацию"]})]}),r.jsxs(VA,{children:[r.jsxs(G0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Гарантия до 16 лет"})]}),r.jsxs(G0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Доставка по России"})]}),r.jsxs(G0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Установка под ключ"})]})]})]}),f.map((k,h)=>r.jsx(_A,{image:k,active:h===d},h)),r.jsx(UA,{...Re({initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2}},{initial:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{duration:0}}),children:r.jsxs(WA,{children:[r.jsx(YA,{children:"Надежные счетчики электроэнергии"}),r.jsx(GA,{children:"Официальный дилер АГАТ, НЕМО, Меркурий и других ведущих производителей. Гарантия до 16 лет. Доставка по России. Установка под ключ."}),r.jsxs(D$,{children:[r.jsxs(F$,{onClick:()=>i("/catalog"),...Re({whileHover:{scale:1.05},whileTap:{scale:.95}}),children:[r.jsx(v,{icon:Jt}),"Смотреть каталог"]}),r.jsxs(V$,{onClick:()=>i("/contacts"),...Re({whileHover:{scale:1.05},whileTap:{scale:.95}}),children:[r.jsx(v,{icon:Ue}),"Получить консультацию"]})]}),r.jsxs(_$,{children:[r.jsxs(Q0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Гарантия до 16 лет"})]}),r.jsxs(Q0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Доставка по России"})]}),r.jsxs(Q0,{children:[r.jsx(v,{icon:br}),r.jsx("span",{children:"Установка под ключ"})]})]})]})}),r.jsx(BA,{children:f.map((k,h)=>r.jsx(HA,{active:h===d,onClick:()=>u(h)},h))})]}),r.jsxs(C$,{children:[r.jsx(Zl,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:"Популярные товары"}),r.jsx(S$,{children:p.map((k,h)=>{const g=typeof k.price=="number"&&k.price>0,y=g&&k.originalPrice&&k.originalPrice>k.price;return r.jsxs(Hb,{...Re({initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:h*.1}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),onClick:()=>i(`/product/${k.id}`),children:[r.jsxs(z$,{children:[(()=>{const S="/images/products/default.svg",P=k.mainImage||(k.image?`/images/products/${k.image}`:S);return r.jsx("img",{src:P,alt:k.name})})(),k.discount>0&&r.jsxs(P$,{children:["-",k.discount,"%"]})]}),r.jsxs(T$,{children:[r.jsx(E$,{children:k.brand}),r.jsx(L$,{children:k.name}),r.jsx(I$,{children:k.type}),r.jsx(M$,{children:g?r.jsxs(r.Fragment,{children:[r.jsxs(A$,{children:[k.price.toLocaleString()," ₽"]}),y&&r.jsxs($$,{children:[k.originalPrice.toLocaleString()," ₽"]})]}):r.jsx(R$,{children:"Цена по запросу"})}),g?r.jsxs(O$,{onClick:S=>{S.stopPropagation(),x(k)},...Re({whileHover:{scale:1.02},whileTap:{scale:.98}}),style:{transformOrigin:"center"},children:[r.jsx(v,{icon:Jt}),"Добавить в корзину"]},`add-to-cart-${k.id}`):r.jsxs(N$,{onClick:S=>{S.stopPropagation(),m(k.name)},...Re({whileHover:{scale:1.02},whileTap:{scale:.98}}),style:{transformOrigin:"center"},children:[r.jsx(v,{icon:Me}),"Запросить предложение"]},`request-quote-${k.id}`)]})]},k.id)})})]}),r.jsxs(KA,{children:[r.jsx(Zl,{children:"О компании"}),r.jsxs(ZA,{children:[r.jsxs(JA,{...Re({initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6}},{initial:{opacity:1,x:0},whileInView:{opacity:1,x:0},transition:{duration:0}}),children:[r.jsx(e$,{children:"Мы являемся официальным дилером по продаже и установке счетчиков электроэнергии. Наш опыт работы в сфере энергоснабжения насчитывает более 10 лет, что позволяет нам предлагать только качественное оборудование и профессиональный сервис."}),r.jsxs(t$,{children:[r.jsx(Ra,{children:"Официальные дилеры ведущих производителей счетчиков"}),r.jsx(Ra,{children:"Гарантия на все оборудование"}),r.jsx(Ra,{children:"Доставка по всей России"}),r.jsx(Ra,{children:"Профессиональный монтаж и настройка"}),r.jsx(Ra,{children:"Круглосуточная техническая поддержка"})]})]}),r.jsx(n$,{...Re({initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6}},{initial:{opacity:1,x:0},whileInView:{opacity:1,x:0},transition:{duration:0}}),children:r.jsxs(r$,{children:[r.jsx(i$,{children:"Наши преимущества"}),r.jsx(o$,{children:"Мы предлагаем широкий ассортимент счетчиков электроэнергии, от однофазных до многофункциональных. Наши цены всегда конкурентоспособны, а качество гарантировано."}),r.jsxs(a$,{children:[r.jsxs(m5,{children:[r.jsx(h5,{children:"10+"}),r.jsx(g5,{children:"лет на рынке"})]}),r.jsxs(m5,{children:[r.jsx(h5,{children:"1000+"}),r.jsx(g5,{children:"установленных счетчиков"})]})]})]})})]})]}),r.jsxs(XA,{children:[r.jsx(Zl,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:"Наши преимущества"}),r.jsxs(QA,{children:[r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:rn})}),r.jsx(Bi,{children:"Гарантия качества"}),r.jsx(Hi,{children:"Все счетчики проходят тщательную проверку и имеют официальную гарантию производителя сроком до 5 лет"})]}),r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:Fb})}),r.jsx(Bi,{children:"Быстрая доставка"}),r.jsx(Hi,{children:"Доставляем заказы в течение 1-2 дней по всей России с возможностью отслеживания в реальном времени"})]}),r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:bn})}),r.jsx(Bi,{children:"Профессиональный монтаж"}),r.jsx(Hi,{children:"Опытные специалисты выполнят установку и настройку счетчиков с соблюдением всех норм безопасности"})]}),r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:Js})}),r.jsx(Bi,{children:"Поддержка 24/7"}),r.jsx(Hi,{children:"Круглосуточная техническая поддержка и консультации по всем вопросам от квалифицированных специалистов"})]}),r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:oM})}),r.jsx(Bi,{children:"Выгодные цены"}),r.jsx(Hi,{children:"Регулярные акции, скидки и специальные предложения для постоянных клиентов и оптовых закупок"})]}),r.jsxs(In,{...Re({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.6}},{initial:{opacity:1,y:0},whileInView:{opacity:1,y:0},transition:{duration:0}}),children:[r.jsx(_i,{children:r.jsx(v,{icon:bl})}),r.jsx(Bi,{children:"Официальный дилер"}),r.jsx(Hi,{children:"Работаем напрямую с производителями, предоставляем все необходимые документы и сертификаты"})]})]})]}),r.jsxs(ma,{children:[r.jsx(Zl,{children:"Как мы работаем"}),r.jsxs(qA,{children:[r.jsxs(kr,{children:[r.jsx(Ia,{children:"1"}),r.jsx(Ma,{children:r.jsx(v,{icon:Zs})}),r.jsx(Aa,{children:"Заявка"}),r.jsx($a,{children:"Оставьте заявку на сайте или позвоните нам"})]}),r.jsxs(kr,{children:[r.jsx(Ia,{children:"2"}),r.jsx(Ma,{children:r.jsx(v,{icon:SI})}),r.jsx(Aa,{children:"Консультация"}),r.jsx($a,{children:"Получите консультацию от наших специалистов"})]}),r.jsxs(kr,{children:[r.jsx(Ia,{children:"3"}),r.jsx(Ma,{children:r.jsx(v,{icon:ra})}),r.jsx(Aa,{children:"Доставка"}),r.jsx($a,{children:"Доставим оборудование в удобное для вас время"})]}),r.jsxs(kr,{children:[r.jsx(Ia,{children:"4"}),r.jsx(Ma,{children:r.jsx(v,{icon:bn})}),r.jsx(Aa,{children:"Установка"}),r.jsx($a,{children:"Профессиональный монтаж и настройка оборудования"})]}),r.jsxs(kr,{children:[r.jsx(Ia,{children:"5"}),r.jsx(Ma,{children:r.jsx(v,{icon:Js})}),r.jsx(Aa,{children:"Поддержка"}),r.jsx($a,{children:"Обеспечиваем техническую поддержку 24/7"})]})]})]}),r.jsx(y$,{children:r.jsxs(v$,{children:[r.jsx(b$,{children:r.jsx(v,{icon:ia})}),r.jsx(w$,{children:"Не нашли нужный товар в каталоге?"}),r.jsx(j$,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(k$,{...Re({whileHover:{scale:1.02},whileTap:{scale:.98}}),onClick:()=>{const k=document.querySelector(".contact-section");k&&k.scrollIntoView({behavior:"smooth"})},children:[r.jsx(v,{icon:Me}),"Купить под заказ"]})]})}),r.jsx(s$,{className:"contact-section",children:r.jsxs(l$,{children:[r.jsxs(c$,{...Re({initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6}},{initial:{opacity:1,x:0},whileInView:{opacity:1,x:0},transition:{duration:0}}),children:[r.jsx(d$,{children:"Свяжитесь с нами"}),r.jsx(u$,{children:"Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации по выбору счетчиков электроэнергии."}),r.jsxs(f$,{children:[r.jsx(Jl,{children:"Бесплатная консультация специалиста"}),r.jsx(Jl,{children:"Подбор оптимального решения"}),r.jsx(Jl,{children:"Расчет стоимости монтажа"}),r.jsx(Jl,{children:"Ответ в течение 30 минут"})]})]}),r.jsx(p$,{...Re({initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6}},{initial:{opacity:1,x:0},whileInView:{opacity:1,x:0},transition:{duration:0}}),onSubmit:k=>{k.preventDefault(),alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.")},children:r.jsxs(m$,{children:[r.jsx(h$,{children:"Оставить заявку"}),r.jsxs(ec,{children:[r.jsx(tc,{children:"Ваше имя *"}),r.jsx(X0,{type:"text",placeholder:"Введите ваше имя",required:!0})]}),r.jsxs(ec,{children:[r.jsx(tc,{children:"Телефон *"}),r.jsx(X0,{type:"tel",placeholder:"+7 (___) ___-__-__",required:!0})]}),r.jsxs(ec,{children:[r.jsx(tc,{children:"Email"}),r.jsx(X0,{type:"email",placeholder:"your@email.com"})]}),r.jsxs(ec,{children:[r.jsx(tc,{children:"Сообщение"}),r.jsx(g$,{placeholder:"Опишите ваши потребности или задайте вопрос...",rows:"4"})]}),r.jsx(x$,{type:"submit",...Re({whileHover:{scale:1.02},whileTap:{scale:.98}}),children:"Отправить заявку"})]})})]})}),r.jsx(Sg,{isOpen:o,productName:s,onClose:j,onSubmit:w})]})}const H$=l.div`
  position: relative;
  width: 100%;
`,U$=l.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`,W$=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;l.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 12px;
`;const Y$=l.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2f5483;
    border-radius: 2px;
  }
`,G$=l(C.div)`
  min-width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border-color: #2f5483;
    transform: scale(1.05);
  }

  &:hover {
    border-color: #2f5483;
    transform: scale(1.05);
  }
`,X$=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;l.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 0.8rem;
  font-weight: bold;
`;const Q$=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,q$=l.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,K$=l.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
`,Z$=l.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,J$=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  pointer-events: none;
`,x5=l.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,eR=l.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`,tR=({product:e})=>{const[t,n]=b.useState(0),[i,o]=b.useState(!1),a="/images/products/default.svg",s=k=>k?k.startsWith("http://")||k.startsWith("https://")||k.startsWith("/")?k:`/images/products/${k}`:"",d=(Array.isArray(e==null?void 0:e.images)?e.images:[]).map(s).filter(Boolean),u=s(e==null?void 0:e.mainImage)||s(e==null?void 0:e.image)||a,f=d.length>0?d:[u],p=k=>{f.length!==0&&(n(k),o(!0))},m=()=>{o(!1)},x=()=>{n(k=>k===0?f.length-1:k-1)},j=()=>{n(k=>k===f.length-1?0:k+1)},w=k=>{k.key==="Escape"?m():k.key==="ArrowLeft"?x():k.key==="ArrowRight"&&j()};return lt.useEffect(()=>{if(i)return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[i]),r.jsxs(H$,{children:[r.jsx(U$,{onClick:()=>p(t),children:r.jsx(W$,{src:f[t],alt:(e==null?void 0:e.name)||"Товар"})}),f.length>1&&r.jsx(Y$,{children:f.map((k,h)=>r.jsx(G$,{className:h===t?"active":"",onClick:()=>n(h),whileHover:{scale:1.05},whileTap:{scale:.95},children:r.jsx(X$,{src:k||a,alt:`${(e==null?void 0:e.name)||"Товар"} ${h+1}`})},h))}),r.jsx(xl,{children:i&&r.jsx(Q$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:m,children:r.jsxs(q$,{onClick:k=>k.stopPropagation(),children:[r.jsx(Z$,{onClick:m,children:r.jsx(v,{icon:oa})}),r.jsx(K$,{src:f[t],alt:(e==null?void 0:e.name)||"Товар"}),r.jsxs(eR,{children:[t+1," / ",f.length]}),r.jsxs(J$,{children:[r.jsx(x5,{onClick:x,disabled:f.length<=1,children:r.jsx(v,{icon:rM})}),r.jsx(x5,{onClick:j,disabled:f.length<=1,children:r.jsx(v,{icon:iM})})]})]})})})]})},nc=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
  
  @media (max-width: 480px) {
    padding-top: 80px;
  }
`,nR=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,rR=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    gap: 0.3rem;
  }
`,y5=l.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,v5=l.span`
  color: #999;
`,iR=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`,oR=l.div`
  position: relative;
  overflow: hidden;
`;l(C.div)`
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
  
  @media (max-width: 768px) {
    height: 300px;
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;const aR=l.div`
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
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    top: 0.8rem;
    right: 0.8rem;
  }
`,sR=l.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`,lR=l.div`
  color: #2f5483;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,cR=l(C.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.3;
  }
`,dR=l.div`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }
`,uR=l.p`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`,fR=l(C.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,pR=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`,mR=l.div`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,hR=l(C.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,gR=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`,xR=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ub=l.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }
`,yR=l.div`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
  
  ${Ub}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 160px;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`,vR=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }
`,bR=l.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`,wR=l.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`,jR=l.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #1e3a5f 0%, #2f5483 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`,kR=l.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: white;
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`,CR=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,SR=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,zR=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`,rc=l.div`
  background: #f8f9fa;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    border-color: #2f5483;
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1rem;
  }
`,ic=l.div`
  width: 60px;
  height: 60px;
  background: #2f5483;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
`,oc=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
`,ac=l.p`
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
`,PR=l.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.4;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 1.5rem 0;
  }
`,TR=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`,ER=l.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`,LR=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`,IR=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }
`,MR=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
    min-height: 48px;
  }
`,AR=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,$R=l.div`
  font-size: 1.2rem;
  color: #999;
  text-decoration: line-through;
`,b5=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
`,RR=l.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
`,OR=l.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`,NR=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,DR=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,sn=l.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,ln=l.span`
  color: #666;
  font-weight: 500;
`,cn=l.span`
  color: #333;
  font-weight: 600;
`;l.div`
  margin-bottom: 1.5rem;
`;l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;l.li`
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
`;const FR=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }
`,VR=l(C.button)`
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
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
    min-height: 48px;
  }
`,_R=l(C.button)`
  flex: 1;
  background: rgba(47, 84, 131, 0.08);
  color: #2f5483;
  border: 1px dashed #2f5483;
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
    background: rgba(47, 84, 131, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
    min-height: 48px;
  }
`,BR=l(C.button)`
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
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
    min-height: 48px;
  }
`,HR=l.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2f5483;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,UR=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }
`,WR=l.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,YR=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #2f5483;
`,w5=l.div`
  text-align: center;
  padding: 3rem;
  color: #dc3545;
`;function GR(){const{id:e}=p9(),t=on(),[n,i]=b.useState(null),[o,a]=b.useState([]),[s,c]=b.useState(!0),[d,u]=b.useState(null),{addToCart:f}=Kr(),[p,m]=b.useState(!1),[x,j]=b.useState(""),w=b.useRef(null),{scrollYProgress:k}=tE({target:w,offset:["start start","end start"]});Pa(k,[0,1],[0,-100]);const h=Pa(k,[0,1],[0,-50]),g=Pa(k,[0,1],[0,-30]),y=Pa(k,[0,1],[0,-20]),S=Pa(k,[0,1],[0,-15]);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{try{const U=await(await fetch("/catalog-products.json")).json();a(U);const ce=U.find($=>$.id===parseInt(e));ce?i(ce):u("Товар не найден")}catch{u("Ошибка загрузки товара")}finally{c(!1)}})()},[e]);const P=()=>{n&&n.price!=null&&n.price>0?f(n):n&&(j(n.name),m(!0))},E=()=>{t(n?`/consultation?product=${encodeURIComponent(n.name)}`:"/consultation")},T=()=>{t("/consultation")},I=b.useCallback(()=>{n&&(j(n.name||""),m(!0))},[n]),R=b.useCallback(()=>{m(!1)},[]),D=b.useCallback(({name:G,phone:J,productName:U})=>{const ce=U||x||(n?n.name:"выбранного товара");alert(`Спасибо, ${G}! Мы свяжемся с вами по номеру ${J} по поводу товара «${ce}».`),m(!1)},[n,x]),ne=()=>!n||!o.length?[]:o.filter(J=>J.id!==n.id&&(J.brand===n.brand||J.category===n.category)).slice(0,4);if(s)return r.jsx(nc,{children:r.jsx(YR,{children:"Загрузка товара..."})});if(d)return r.jsx(nc,{children:r.jsxs(w5,{children:[r.jsx("h2",{children:"Ошибка"}),r.jsx("p",{children:d}),r.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})});if(!n)return r.jsx(nc,{children:r.jsxs(w5,{children:[r.jsx("h2",{children:"Товар не найден"}),r.jsx("p",{children:"Запрашиваемый товар не существует"}),r.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})});const q=typeof n.price=="number"&&n.price>0,he=q&&n.originalPrice&&n.originalPrice>n.price;return r.jsxs(r.Fragment,{children:[r.jsx(nc,{ref:w,children:r.jsxs(nR,{children:[r.jsxs(rR,{children:[r.jsx(y5,{onClick:()=>t("/"),children:"Главная"}),r.jsx(v5,{children:"/"}),r.jsx(y5,{onClick:()=>t("/catalog"),children:"Каталог"}),r.jsx(v5,{children:"/"}),r.jsx("span",{children:n.name})]}),r.jsxs(iR,{children:[r.jsxs(oR,{children:[r.jsx(tR,{product:n}),n.discount&&r.jsxs(aR,{children:["-",n.discount,"%"]})]}),r.jsxs(sR,{children:[r.jsx(lR,{children:n.category}),r.jsx(cR,{style:{y:h},children:n.name}),r.jsx(dR,{children:n.type}),r.jsx(uR,{style:{y:g},children:n.description}),r.jsx(AR,{children:q?he?r.jsxs(r.Fragment,{children:[r.jsxs($R,{children:[n.originalPrice.toLocaleString()," ₽"]}),r.jsxs(b5,{children:[n.price.toLocaleString()," ₽"]})]}):r.jsxs(b5,{children:[n.price.toLocaleString()," ₽"]}):r.jsx(RR,{children:"Цена по запросу"})}),r.jsxs(FR,{children:[q?r.jsxs(VR,{onClick:P,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Jt}),"Добавить в корзину"]}):r.jsxs(_R,{onClick:I,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Запросить предложение"]}),r.jsxs(BR,{onClick:E,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Ue}),"Связаться с менеджером"]})]}),r.jsxs(OR,{children:[r.jsx(NR,{children:"Технические характеристики"}),r.jsxs(DR,{children:[n.specifications.phases&&n.specifications.phases!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Фазы:"}),r.jsx(cn,{children:n.specifications.phases})]}),n.specifications.voltage&&n.specifications.voltage!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Напряжение:"}),r.jsx(cn,{children:n.specifications.voltage})]}),n.specifications.current&&n.specifications.current!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Ток:"}),r.jsx(cn,{children:n.specifications.current})]}),n.specifications.accuracy&&n.specifications.accuracy!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Класс точности:"}),r.jsx(cn,{children:n.specifications.accuracy})]}),n.specifications.frequency&&n.specifications.frequency!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Частота:"}),r.jsx(cn,{children:n.specifications.frequency})]}),n.specifications.power&&n.specifications.power!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Мощность:"}),r.jsx(cn,{children:n.specifications.power})]}),n.specifications.temperature&&n.specifications.temperature!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Температура:"}),r.jsx(cn,{children:n.specifications.temperature})]}),n.specifications.protection&&n.specifications.protection!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Защита:"}),r.jsx(cn,{children:n.specifications.protection})]}),n.specifications.dimensions&&n.specifications.dimensions!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Габариты:"}),r.jsx(cn,{children:n.specifications.dimensions})]}),n.specifications.weight&&n.specifications.weight!=="нет"&&r.jsxs(sn,{children:[r.jsx(ln,{children:"Вес:"}),r.jsx(cn,{children:n.specifications.weight})]})]})]}),r.jsxs(HR,{children:[r.jsx(UR,{children:"Информация о доставке"}),r.jsx(WR,{children:"Доставляем по всей России. Сроки доставки зависят от региона и способа доставки. Подробную информацию уточняйте у менеджера."})]})]})]}),n.fullDescription&&r.jsxs(fR,{style:{y},children:[r.jsx(pR,{children:"Полное описание"}),r.jsx(mR,{children:n.fullDescription.split(`
`).map((G,J)=>r.jsx("p",{children:G},J))})]}),(()=>{const G=ne();return G.length>0&&r.jsxs(hR,{style:{y:S},children:[r.jsx(gR,{children:"Похожие товары"}),r.jsx(xR,{children:G.map(J=>{const U=typeof J.price=="number"&&J.price>0;return r.jsxs(Ub,{onClick:()=>t(`/product/${J.id}`),children:[r.jsx(yR,{children:(()=>{const ce="/images/products/default.svg",$=J.mainImage||(J.image?`/images/products/${J.image}`:ce);return r.jsx("img",{src:$,alt:J.name})})()}),r.jsx(vR,{children:J.name}),r.jsx(bR,{children:J.type}),r.jsx(wR,{children:U?`${J.price.toLocaleString()} ₽`:"Цена по запросу"}),r.jsxs(jR,{children:[r.jsx(v,{icon:ia}),"Подробнее"]})]},J.id)})})]})})(),r.jsx(kR,{children:r.jsxs(CR,{children:[r.jsx(SR,{children:"Надежность в каждой детали"}),r.jsxs(zR,{children:[r.jsxs(rc,{children:[r.jsx(ic,{children:r.jsx(v,{icon:rn})}),r.jsx(oc,{children:"Гарантия качества"}),r.jsx(ac,{children:"Все товары сертифицированы и имеют официальную гарантию производителя"})]}),r.jsxs(rc,{children:[r.jsx(ic,{children:r.jsx(v,{icon:ra})}),r.jsx(oc,{children:"Быстрая доставка"}),r.jsx(ac,{children:"Доставляем по всей России в кратчайшие сроки"})]}),r.jsxs(rc,{children:[r.jsx(ic,{children:r.jsx(v,{icon:Js})}),r.jsx(oc,{children:"Поддержка 24/7"}),r.jsx(ac,{children:"Круглосуточная консультация и техническая поддержка"})]}),r.jsxs(rc,{children:[r.jsx(ic,{children:r.jsx(v,{icon:Li})}),r.jsx(oc,{children:"Удобная оплата"}),r.jsx(ac,{children:"Принимаем все виды оплаты, работаем с НДС"})]})]})]})}),r.jsx(PR,{children:r.jsxs(TR,{children:[r.jsx(ER,{children:r.jsx(v,{icon:ia})}),r.jsx(LR,{children:"Не нашли нужный товар?"}),r.jsx(IR,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(MR,{onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Купить под заказ"]})]})})]})}),r.jsx(Sg,{isOpen:p,productName:(n==null?void 0:n.name)||x,onClose:R,onSubmit:D})]})}const XR=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`,QR=l(C.div)`
  background: #ffffff;
  width: 450px;
  max-width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 90vh;
    border-radius: 16px;
  }
`,qR=l.div`
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;
  position: relative;
`,KR=l.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,ZR=l.span`
  background: #2f5483;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-weight: 500;
`,JR=l.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`,eO=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`,tO=l.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`,nO=l.div`
  font-size: 3rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`,rO=l.p`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 500;
`,iO=l.p`
  font-size: 0.9rem;
  margin: 0;
  color: #bbb;
`,oO=l.div`
  padding: 0;
`,aO=l(C.div)`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #fafafa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,sO=l.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;
  
  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
`,lO=l.div`
  flex: 1;
  min-width: 0;
`,cO=l.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
`,dO=l.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  color: #666;
  font-weight: 400;
`,uO=l.div`
  font-weight: 600;
  color: #2f5483;
  font-size: 1rem;
`,fO=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  min-width: 120px;
`,pO=l.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,j5=l.button`
  background: #f8f9fa;
  border: none;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
  font-size: 0.75rem;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f5f5f5;
  }
  
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`,mO=l.input`
  width: 50px;
  text-align: center;
  border: none;
  padding: 0.5rem 0.2rem;
  font-size: 0.85rem;
  background: #ffffff;
  font-weight: 600;
  color: #333;
  
  /* Убираем стрелочки для input type="number" */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
  
  &:focus {
    outline: none;
    background: #f8f9fa;
  }
`,hO=l.button`
  background: none;
  color: #ff4757;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  
  &:hover {
    background: #fff5f5;
    color: #ff3742;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,gO=l.div`
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid #f0f0f0;
  background: #ffffff;
`,xO=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`,yO=l.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1a1a1a;
`,vO=l.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2f5483;
`,bO=l.div`
  display: flex;
  gap: 0.75rem;
`,Wb=l.button`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,wO=l(Wb)`
  background: #f8f9fa;
  color: #666;
  border: 1px solid #e9ecef;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`,jO=l(Wb)`
  background: #2f5483;
  color: white;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,kO=({isOpen:e,onClose:t})=>{const{items:n,removeFromCart:i,updateQuantity:o,clearCart:a,getTotalItems:s,getTotalPrice:c}=Kr(),{addNotification:d}=Hf(),u=on(),[f,p]=b.useState(null),m=(w,k)=>{const h=parseInt(k);!isNaN(h)&&h>=0&&o(w,h)},x=w=>{const k=n.find(h=>h.id===w);p(w),setTimeout(()=>{i(w),p(null),k&&d(`${k.name} удален из корзины`,"warning",2e3)},200)},j=()=>{t(),u("/checkout")};return r.jsx(xl,{children:e&&r.jsx(XR,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:r.jsxs(QR,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:300},onClick:w=>w.stopPropagation(),children:[r.jsxs(qR,{children:[r.jsxs(KR,{children:[r.jsx(v,{icon:Jt}),"Корзина",s()>0&&r.jsx(ZR,{children:s()})]}),r.jsx(JR,{onClick:t,children:r.jsx(v,{icon:oa})})]}),r.jsx(eO,{children:n.length===0?r.jsxs(tO,{children:[r.jsx(nO,{children:r.jsx(v,{icon:Jt})}),r.jsx(rO,{children:"Корзина пуста"}),r.jsx(iO,{children:"Добавьте товары для оформления заказа"})]}):r.jsx(oO,{children:n.map(w=>r.jsxs(aO,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},style:{opacity:f===w.id?.5:1,transform:f===w.id?"scale(0.98)":"scale(1)"},children:[r.jsx(sO,{children:w.mainImage?r.jsx("img",{src:w.mainImage,alt:w.name}):r.jsx("img",{src:`/images/products/${w.image}`,alt:w.name})}),r.jsxs(lO,{children:[r.jsx(cO,{children:w.name}),r.jsx(dO,{children:w.brand}),r.jsxs(uO,{children:[w.price.toLocaleString()," ₽"]})]}),r.jsxs(fO,{children:[r.jsxs(pO,{children:[r.jsx(j5,{onClick:()=>m(w.id,w.quantity-1),disabled:w.quantity<=1,children:r.jsx(v,{icon:BI})}),r.jsx(mO,{type:"number",value:w.quantity,onChange:k=>m(w.id,k.target.value),min:"1"}),r.jsx(j5,{onClick:()=>m(w.id,w.quantity+1),children:r.jsx(v,{icon:eM})})]}),r.jsx(hO,{onClick:()=>x(w.id),children:r.jsx(v,{icon:ef})})]})]},w.id))})}),n.length>0&&r.jsxs(gO,{children:[r.jsxs(xO,{children:[r.jsx(yO,{children:"Итого:"}),r.jsxs(vO,{children:[c().toLocaleString()," ₽"]})]}),r.jsxs(bO,{children:[r.jsxs(wO,{onClick:()=>{a(),d("Корзина полностью очищена","warning",2e3)},children:[r.jsx(v,{icon:ef}),"Очистить"]}),r.jsxs(jO,{onClick:j,children:["Оформить заказ",r.jsx(v,{icon:AI})]})]})]})]})})})},k5=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`,C5=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`,S5=l(C.button)`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: rgba(47, 84, 131, 0.08);
    transform: translateX(-2px);
  }
`,z5=l.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,CO=l.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Oa=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`,Ui=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: #2f5483;
  }
`,SO=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,P5=l(C.button)`
  flex: 1;
  padding: 1.5rem;
  border: 2px solid ${e=>e.active?"#2f5483":"#e0e0e0"};
  border-radius: 12px;
  background: ${e=>e.active?"rgba(47, 84, 131, 0.05)":"#ffffff"};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.5rem;
    color: ${e=>e.active?"#2f5483":"#666"};
  }
`,T5=l.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.active?"#2f5483":"#333"};
`,E5=l.div`
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`,q0=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Et=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Lt=l.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`,Wt=l.input`
  padding: 1rem 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`,zO=l.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;l.div`
  margin-top: 2rem;
`;const PO=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,L5=l.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.02);
    transform: translateY(-1px);
  }
  
  input[type="radio"]:checked + & {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
`,TO=l.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  height: fit-content;
  position: sticky;
  top: 120px;
  
  @media (max-width: 768px) {
    top: 100px;
    padding: 1.5rem;
  }
`,EO=l.div`
  margin-bottom: 2rem;
`,LO=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,IO=l.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  
  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
`,MO=l.div`
  flex: 1;
  min-width: 0;
`,AO=l.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`,$O=l.div`
  font-size: 0.85rem;
  color: #666;
`;l.div`
  font-weight: 700;
  color: #2f5483;
  font-size: 1rem;
`;const RO=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
`,OO=l.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,I5=l.button`
  background: #f8f9fa;
  border: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #2f5483;
  transition: all 0.2s ease;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e9ecef;
    color: #1a365d;
  }
  
  &:active {
    background: #dee2e6;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f8f9fa;
    color: #adb5bd;
  }
`,NO=l.input`
  width: 50px;
  text-align: center;
  border: none;
  padding: 0.5rem 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  background: white;
  color: #333;
  
  &:focus {
    outline: none;
    background: #f8f9fa;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
`,DO=l.button`
  background: #dc3545;
  border: none;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  box-shadow: 0 1px 3px rgba(220, 53, 69, 0.2);
  
  &:hover {
    background: #c82333;
    box-shadow: 0 2px 6px rgba(220, 53, 69, 0.3);
  }
  
  &:active {
    background: #bd2130;
  }
`,FO=l.div`
  border-top: 2px solid #f0f0f0;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`,M5=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: #2f5483;
    border-top: 1px solid #f0f0f0;
    padding-top: 1rem;
  }
`,VO=l(C.button)`
  width: 100%;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  border: none;
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(47, 84, 131, 0.4);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,_O=l.div`
  text-align: center;
  padding: 6rem 2rem;
  color: #666;
`,BO=l.div`
  font-size: 4rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
`,HO=l.p`
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 600;
`,UO=l.p`
  font-size: 1rem;
  margin: 0;
  color: #bbb;
`;function WO(){const{items:e,getTotalPrice:t,clearCart:n,removeFromCart:i,updateQuantity:o}=Kr(),{addNotification:a}=Hf(),s=on(),[c,d]=b.useState(!1),[u,f]=b.useState("individual"),[p,m]=b.useState({firstName:"",lastName:"",phone:"",email:"",address:"",city:"",zipCode:"",comment:"",companyName:"",inn:"",legalAddress:""}),x=g=>{const{name:y,value:S}=g.target;m(P=>({...P,[y]:S}))},j=g=>{i(g),a("Товар удален из корзины","info",2e3)},w=(g,y)=>{y<=0?j(g):o(g,y)},k=(g,y)=>{const S=parseInt(y);isNaN(S)||S<1?o(g,1):S>999?(o(g,999),a("Максимальное количество товара: 999","warning",2e3)):o(g,S)};b.useEffect(()=>{window.scrollTo(0,0)},[]);const h=async g=>{if(g.preventDefault(),e.length===0){a("Корзина пуста","warning",3e3);return}let y=u==="individual"?["firstName","lastName","phone","email"]:["companyName","inn","phone","email"];if(p.deliveryMethod==="courier"&&y.push("address","city"),y.filter(P=>!p[P]).length>0){a("Пожалуйста, заполните все обязательные поля","warning",3e3);return}d(!0),setTimeout(()=>{d(!1),n(),s("/thank-you")},2e3)};return e.length===0?r.jsxs(k5,{children:[r.jsxs(C5,{children:[r.jsxs(S5,{onClick:()=>s("/"),whileHover:{x:-5},whileTap:{scale:.95},children:[r.jsx(v,{icon:Oh}),"Назад"]}),r.jsx(z5,{children:"Оформление заказа"})]}),r.jsxs(_O,{children:[r.jsx(BO,{children:r.jsx(v,{icon:br})}),r.jsx(HO,{children:"Корзина пуста"}),r.jsx(UO,{children:"Добавьте товары в корзину для оформления заказа"})]})]}):r.jsxs(k5,{children:[r.jsxs(C5,{children:[r.jsxs(S5,{onClick:()=>s("/"),whileHover:{x:-5},whileTap:{scale:.95},children:[r.jsx(v,{icon:Oh}),"Назад"]}),r.jsx(z5,{children:"Оформление заказа"})]}),r.jsx("form",{onSubmit:h,children:r.jsxs(CO,{children:[r.jsxs("div",{children:[r.jsxs(Oa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsxs(Ui,{children:[r.jsx(v,{icon:u==="individual"?Ts:Nr}),"Тип клиента"]}),r.jsxs(SO,{children:[r.jsxs(P5,{type:"button",active:u==="individual",onClick:()=>f("individual"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Ts}),r.jsx(T5,{active:u==="individual",children:"Физическое лицо"}),r.jsx(E5,{children:"Для частных клиентов"})]}),r.jsxs(P5,{type:"button",active:u==="company",onClick:()=>f("company"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Nr}),r.jsx(T5,{active:u==="company",children:"Юридическое лицо"}),r.jsx(E5,{children:"Для компаний и ИП"})]})]})]}),r.jsxs(Oa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[r.jsxs(Ui,{children:[r.jsx(v,{icon:u==="individual"?Ts:Nr}),u==="individual"?"Контактная информация":"Данные организации"]}),u==="individual"?r.jsxs(q0,{children:[r.jsxs(Et,{children:[r.jsx(Lt,{children:"Имя *"}),r.jsx(Wt,{type:"text",name:"firstName",value:p.firstName,onChange:x,placeholder:"Введите ваше имя",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Фамилия *"}),r.jsx(Wt,{type:"text",name:"lastName",value:p.lastName,onChange:x,placeholder:"Введите вашу фамилию",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Телефон *"}),r.jsx(Wt,{type:"tel",name:"phone",value:p.phone,onChange:x,placeholder:"+7 (999) 123-45-67",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Email *"}),r.jsx(Wt,{type:"email",name:"email",value:p.email,onChange:x,placeholder:"example@email.com",required:!0})]})]}):r.jsxs(q0,{children:[r.jsxs(Et,{children:[r.jsx(Lt,{children:"Название организации *"}),r.jsx(Wt,{type:"text",name:"companyName",value:p.companyName,onChange:x,placeholder:"ООО Рога и Копыта",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"ИНН *"}),r.jsx(Wt,{type:"text",name:"inn",value:p.inn,onChange:x,placeholder:"1234567890",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Телефон *"}),r.jsx(Wt,{type:"tel",name:"phone",value:p.phone,onChange:x,placeholder:"+7 (999) 123-45-67",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Email *"}),r.jsx(Wt,{type:"email",name:"email",value:p.email,onChange:x,placeholder:"example@company.com",required:!0})]})]})]}),r.jsxs(Oa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[r.jsxs(Ui,{children:[r.jsx(v,{icon:ra}),"Способ доставки"]}),r.jsxs(PO,{children:[r.jsxs(L5,{children:[r.jsx("input",{type:"radio",name:"deliveryMethod",value:"courier",checked:p.deliveryMethod==="courier",onChange:x}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Доставка"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666"},children:"Стоимость доставки будет рассчитана менеджером после оформления заказа"})]})]}),r.jsxs(L5,{children:[r.jsx("input",{type:"radio",name:"deliveryMethod",value:"pickup",checked:p.deliveryMethod==="pickup",onChange:x}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Самовывоз"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666"},children:"Забрать из нашего офиса • Бесплатно"})]})]})]})]}),p.deliveryMethod==="courier"&&r.jsxs(Oa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[r.jsxs(Ui,{children:[r.jsx(v,{icon:Cg}),"Адрес доставки"]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Адрес доставки *"}),r.jsx(Wt,{type:"text",name:"address",value:p.address,onChange:x,placeholder:"ул. Примерная, д. 1, кв. 1",required:!0})]}),r.jsxs(q0,{style:{marginTop:"1.5rem"},children:[r.jsxs(Et,{children:[r.jsx(Lt,{children:"Город *"}),r.jsx(Wt,{type:"text",name:"city",value:p.city,onChange:x,placeholder:"Москва",required:!0})]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Индекс"}),r.jsx(Wt,{type:"text",name:"zipCode",value:p.zipCode,onChange:x,placeholder:"123456"})]})]})]}),r.jsxs(Oa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[r.jsxs(Ui,{children:[r.jsx(v,{icon:Li}),"Комментарий к заказу"]}),r.jsxs(Et,{children:[r.jsx(Lt,{children:"Дополнительная информация"}),r.jsx(zO,{name:"comment",value:p.comment,onChange:x,placeholder:"Укажите дополнительную информацию о заказе, особые требования к доставке или другие пожелания..."})]})]})]}),r.jsxs(TO,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.5},children:[r.jsx(Ui,{children:"Ваш заказ"}),r.jsx(EO,{children:e.map(g=>r.jsxs(LO,{children:[r.jsx(IO,{children:g.mainImage?r.jsx("img",{src:g.mainImage,alt:g.name}):r.jsx("img",{src:`/images/products/${g.image}`,alt:g.name})}),r.jsxs(MO,{children:[r.jsx(AO,{children:g.name}),r.jsxs($O,{children:[g.brand," • ",(g.price*g.quantity).toLocaleString()," ₽"]}),r.jsxs(RO,{children:[r.jsxs(OO,{children:[r.jsx(I5,{onClick:()=>w(g.id,g.quantity-1),disabled:g.quantity<=1,children:"-"}),r.jsx(NO,{type:"number",name:"quantity",value:g.quantity,onChange:y=>k(g.id,y.target.value),onBlur:y=>{const S=parseInt(y.target.value);(isNaN(S)||S<1)&&k(g.id,"1")},min:"1",max:"999"}),r.jsx(I5,{onClick:()=>w(g.id,g.quantity+1),children:"+"})]}),r.jsx(DO,{onClick:()=>j(g.id),children:r.jsx(v,{icon:ef})})]})]})]},g.id))}),r.jsxs(FO,{children:[r.jsxs(M5,{children:[r.jsxs("span",{children:["Товары (",e.length,"):"]}),r.jsxs("span",{children:[t().toLocaleString()," ₽"]})]}),r.jsxs(M5,{children:[r.jsx("span",{children:"Итого:"}),r.jsx("span",{children:p.deliveryMethod==="courier"?`${t().toLocaleString()} ₽ + доставка`:`${t().toLocaleString()} ₽`})]})]}),r.jsx(VO,{type:"submit",disabled:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:c?r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid white",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Оформление заказа..."]}):r.jsxs(r.Fragment,{children:[r.jsx(v,{icon:br}),"Оформить заказ"]})})]})]})})]})}const YO=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`,GO=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`,XO=l.div`
  font-size: 4rem;
  color: #28a745;
  margin-bottom: 1.5rem;
`,QO=l.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,qO=l.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`,KO=l.div`
  background: rgba(47, 84, 131, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(47, 84, 131, 0.1);
`,ZO=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,sc=l.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,JO=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,A5=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &.primary {
    background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
    color: white;
    box-shadow: 0 4px 20px rgba(47, 84, 131, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(47, 84, 131, 0.4);
    }
  }
  
  &.secondary {
    background: #ffffff;
    color: #2f5483;
    border: 2px solid #2f5483;
    
    &:hover {
      background: rgba(47, 84, 131, 0.05);
      transform: translateY(-1px);
    }
  }
`,eN=l.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`,tN=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,$5=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666;
  
  svg {
    color: #2f5483;
  }
`;function nN(){const e=on();return b.useEffect(()=>{window.scrollTo(0,0)},[]),r.jsxs(YO,{children:[r.jsxs(GO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(XO,{children:r.jsx(v,{icon:Y})}),r.jsx(QO,{children:"Спасибо за заказ!"}),r.jsx(qO,{children:"Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время для уточнения деталей и подтверждения заказа."}),r.jsxs(KO,{children:[r.jsx(ZO,{children:"Что дальше?"}),r.jsx(sc,{children:"• В течение 1-2 часов наш менеджер свяжется с вами для подтверждения заказа"}),r.jsx(sc,{children:"• Мы уточним детали доставки и рассчитаем точную стоимость"}),r.jsx(sc,{children:"• После подтверждения заказ будет передан в обработку"}),r.jsx(sc,{children:"• Вы получите уведомление о статусе заказа"})]}),r.jsxs(JO,{children:[r.jsxs(A5,{className:"primary",onClick:()=>e("/"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:kg}),"Вернуться на главную"]}),r.jsxs(A5,{className:"secondary",onClick:()=>e("/catalog"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Jt}),"Перейти в каталог"]})]})]}),r.jsxs(eN,{children:[r.jsx(tN,{children:"Остались вопросы?"}),r.jsxs($5,{children:[r.jsx(v,{icon:Ue}),r.jsx("span",{children:"+7 (999) 123-45-67"})]}),r.jsxs($5,{children:[r.jsx(v,{icon:Vo}),r.jsx("span",{children:"info@company.com"})]})]})]})}/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var rN={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]},iN={prefix:"fab",iconName:"telegram",icon:[512,512,[62462,"telegram-plane"],"f2c6","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"]};const oN=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,aN=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,sN=l(C.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,lN=l(C.p)`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,cN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,dN=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,K0=l.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 3px;
  }
`,Wi=l(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`,Yi=l.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`,Gi=l.div`
  flex: 1;
`,Xi=l.div`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Qi=l.div`
  font-size: 1.1rem;
  color: #2f5483;
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,qi=l.div`
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.4;
`,lc=l.a`
  color: #2f5483;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #1a2f4b;
    text-decoration: underline;
  }
`,uN=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,fN=l.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Na=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Da=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,cc=l.input`
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #999999;
  }
`,pN=l.textarea`
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #999999;
  }
`,mN=l(C.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.4);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,hN=l(C.div)`
  margin-top: 4rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,gN=l.div`
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 1.1rem;
  margin-top: 2rem;
`;function xN(){const[e,t]=b.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,i]=b.useState(!1),o=(s,c)=>{t(d=>({...d,[s]:c}))},a=async s=>{s.preventDefault(),i(!0),setTimeout(()=>{i(!1),t({name:"",email:"",phone:"",subject:"",message:""}),alert("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.")},2e3)};return r.jsxs(oN,{children:[r.jsxs(aN,{children:[r.jsx(sN,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Контакты"}),r.jsx(lN,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Свяжитесь с нами любым удобным способом. Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором оборудования. Мы работаем по всей России из нашего офиса в Москве."})]}),r.jsxs(cN,{children:[r.jsxs(dN,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(K0,{children:"Контактная информация"}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:Ue})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"Телефон"}),r.jsx(Qi,{children:r.jsx(lc,{href:"tel:+79991234567",children:"+7 (999) 123-45-67"})}),r.jsx(qi,{children:"Основной номер для связи"})]})]}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:iN})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"Telegram"}),r.jsx(Qi,{children:r.jsx(lc,{href:"https://t.me/stroienergetika",target:"_blank",rel:"noopener noreferrer",children:"@stroienergetika"})}),r.jsx(qi,{children:"Быстрые ответы и оперативные консультации"})]})]}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:rN})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"WhatsApp"}),r.jsx(Qi,{children:r.jsx(lc,{href:"https://wa.me/79991234567",target:"_blank",rel:"noopener noreferrer",children:"+7 (999) 123-45-67"})}),r.jsx(qi,{children:"Пишите нам в мессенджере 24/7"})]})]}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:Vo})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"Email"}),r.jsx(Qi,{children:r.jsx(lc,{href:"mailto:info@stroienergetika.ru",children:"info@stroienergetika.ru"})}),r.jsx(qi,{children:"Для заявок и вопросов"})]})]}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:tl})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"Режим работы"}),r.jsx(Qi,{children:"Пн-Пт: 9:00 - 18:00"}),r.jsx(qi,{children:"Сб-Вс: выходной"})]})]}),r.jsxs(Wi,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(Yi,{children:r.jsx(v,{icon:Nr})}),r.jsxs(Gi,{children:[r.jsx(Xi,{children:"Адрес офиса"}),r.jsx(Qi,{children:"Москва, ул. Примерная, 123"}),r.jsx(qi,{children:"Главный офис компании"})]})]})]}),r.jsxs(uN,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(K0,{children:"Напишите нам"}),r.jsxs(fN,{onSubmit:a,children:[r.jsxs(Na,{children:[r.jsx(Da,{children:"Ваше имя *"}),r.jsx(cc,{type:"text",placeholder:"Введите ваше имя",value:e.name,onChange:s=>o("name",s.target.value),required:!0})]}),r.jsxs(Na,{children:[r.jsx(Da,{children:"Email *"}),r.jsx(cc,{type:"email",placeholder:"your@email.com",value:e.email,onChange:s=>o("email",s.target.value),required:!0})]}),r.jsxs(Na,{children:[r.jsx(Da,{children:"Телефон"}),r.jsx(cc,{type:"tel",placeholder:"+7 (999) 123-45-67",value:e.phone,onChange:s=>o("phone",s.target.value)})]}),r.jsxs(Na,{children:[r.jsx(Da,{children:"Тема сообщения *"}),r.jsx(cc,{type:"text",placeholder:"Кратко опишите тему",value:e.subject,onChange:s=>o("subject",s.target.value),required:!0})]}),r.jsxs(Na,{children:[r.jsx(Da,{children:"Сообщение *"}),r.jsx(pN,{placeholder:"Подробно опишите ваш вопрос или заявку...",value:e.message,onChange:s=>o("message",s.target.value),required:!0})]}),r.jsxs(mN,{type:"submit",disabled:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),n?"Отправка...":"Отправить сообщение"]})]})]})]}),r.jsxs(hN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[r.jsx(K0,{children:"Карта"}),r.jsx(gN,{children:"Здесь будет интерактивная карта с расположением офисов"})]})]})}const yN=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,vN=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,bN=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,wN=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Fa=l(C.section)`
  margin-bottom: 5rem;
`,Va=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,jN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,dc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,uc=l.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`,fc=l.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,pc=l.div`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 500;
`,kN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,R5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,O5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,mc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,CN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,hc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,gc=l.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
`,xc=l.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,yc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,SN=l.div`
  position: relative;
  margin: 4rem 0;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.3));
    transform: translateX(-50%);
    border-radius: 4px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`,_a=l(C.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`,Ba=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  width: 45%;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    transform: translateY(-50%);

    ${e=>e.side==="left"?`
      right: -20px;
      border-left-color: #ffffff;
    `:`
      left: -20px;
      border-right-color: #ffffff;
    `}

    @media (max-width: 768px) {
      left: -20px;
      border-right-color: #ffffff;
      border-left-color: transparent;
    }
  }
`,Ha=l.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,Ua=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,Wa=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,Ya=l.div`
  width: 20px;
  height: 20px;
  background: #2f5483;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px #ffffff, 0 0 0 8px rgba(47, 84, 131, 0.2);

  @media (max-width: 768px) {
    left: 20px;
  }
`,zN=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,PN=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,TN=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,EN=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,LN=l(C.div)`
  max-width: 1000px;
  margin: 0 auto 3rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
  border: 1px solid rgba(47, 84, 131, 0.08);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,Zn=l.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
`,IN=l.ul`
  margin: 1.5rem 0 2rem;
  padding-left: 1.5rem;
  display: grid;
  gap: 0.75rem;
`,Ga=l.li`
  font-size: 1.05rem;
  line-height: 1.65;
  color: #4a4a4a;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.65rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2f5483;
  }
`;function MN(){b.useState("about");const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(yN,{children:[r.jsxs(vN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(bN,{children:"Энергетические решения"}),r.jsx(wN,{children:"Мы создаём комплексные решения по учёту и распределению электроэнергии для предприятий, девелоперов и управляющих компаний. Сопровождаем проекты на всех этапах: от аудита и подбора оборудования до монтажа, пусконаладки и сервисной поддержки."})]}),r.jsxs(Fa,{children:[r.jsx(Va,{children:"О компании"}),r.jsxs(LN,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Zn,{children:"Компания «Стройэнергетика» уже более 10 лет поставляет и внедряет решения в сфере энергетики и автоматизации. Мы помогаем предприятиям, управляющим компаниям и частным заказчикам оптимизировать энергопотребление, обеспечивая полный цикл — от консультации до внедрения и сопровождения."}),r.jsx(Zn,{children:"Мы являемся официальным партнёром ведущих производителей и работаем исключительно с сертифицированным оборудованием. Это гарантирует соответствие продукции актуальным стандартам, точность показаний и безопасную эксплуатацию."}),r.jsx(Zn,{children:"Основные направления деятельности:"}),r.jsxs(IN,{children:[r.jsx(Ga,{children:"поставка и продажа энергетического и электротехнического оборудования;"}),r.jsx(Ga,{children:"установка и подключение комплексных систем «под ключ»;"}),r.jsx(Ga,{children:"проектирование и внедрение автоматизированных систем учёта и управления энергоресурсами;"}),r.jsx(Ga,{children:"техническое обслуживание и сервисная поддержка реализованных решений;"}),r.jsx(Ga,{children:"экспертные консультации и подбор оптимальных технологий под задачи клиента."})]}),r.jsx(Zn,{children:"Выбирая нас, клиенты получают не просто оборудование, а готовое инженерное решение, позволяющее эффективно использовать энергоресурсы и снижать издержки."}),r.jsx(Zn,{children:"Мы работаем напрямую с производителями, предлагаем выгодные условия, короткие сроки поставки и гибкий подход к каждому проекту."}),r.jsx(Zn,{children:"Команда «Стройэнергетики» — это опытные специалисты, которые внимательно следят за развитием отрасли и расширяют линейку продукции. Благодаря этому наши клиенты всегда получают доступ к современным, энергоэффективным и точным решениям."}),r.jsx(Zn,{children:"Мы реализуем проекты по всей России и готовы предложить индивидуальные условия для постоянных партнёров, строительных компаний и промышленных предприятий."}),r.jsx(Zn,{children:"«Стройэнергетика» — ваш надёжный поставщик и партнёр в сфере энергоучёта и автоматизации. С нами вы уверены в качестве оборудования, стабильности работы систем и экспертной поддержке на каждом этапе."})]})]}),r.jsxs(Fa,{children:[r.jsx(Va,{children:"Наши достижения"}),r.jsxs(jN,{children:[r.jsxs(dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(uc,{children:r.jsx(v,{icon:aM})}),r.jsx(fc,{children:"10+"}),r.jsx(pc,{children:"Лет опыта"})]}),r.jsxs(dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(uc,{children:r.jsx(v,{icon:PI})}),r.jsx(fc,{children:"5000+"}),r.jsx(pc,{children:"Довольных клиентов"})]}),r.jsxs(dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(uc,{children:r.jsx(v,{icon:bl})}),r.jsx(fc,{children:"50+"}),r.jsx(pc,{children:"Производителей"})]}),r.jsxs(dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(uc,{children:r.jsx(v,{icon:rn})}),r.jsx(fc,{children:"Гарантия"}),r.jsx(pc,{children:"На всё оборудование"})]})]})]}),r.jsxs(Fa,{children:[r.jsx(Va,{children:"О нас"}),r.jsxs(kN,{children:[r.jsxs(R5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(O5,{children:[r.jsx(v,{icon:Nr}),"Наша миссия"]}),r.jsx(mc,{children:"Мы стремимся обеспечить наших клиентов высококачественными счетчиками электроэнергии от ведущих производителей, предоставляя полный спектр услуг от консультации до установки и технического обслуживания."}),r.jsx(mc,{children:"Наша цель - сделать процесс выбора и установки счетчиков максимально простым и надежным для каждого клиента, обеспечивая экономию средств и повышение эффективности энергопотребления."})]}),r.jsxs(R5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(O5,{children:[r.jsx(v,{icon:el}),"Наши принципы"]}),r.jsx(mc,{children:"Мы работаем только с официальными дилерами и производителями, гарантируя подлинность каждого продукта и соблюдение всех стандартов качества."}),r.jsx(mc,{children:"Наша команда состоит из опытных специалистов, которые постоянно повышают свою квалификацию и следят за новейшими технологиями в области энергетики."})]})]})]}),r.jsxs(Fa,{children:[r.jsx(Va,{children:"Наши ценности"}),r.jsxs(CN,{children:[r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(gc,{children:r.jsx(v,{icon:rn})}),r.jsx(xc,{children:"Надежность"}),r.jsx(yc,{children:"Мы гарантируем качество каждого продукта и предоставляем максимальную гарантию на все оборудование."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(gc,{children:r.jsx(v,{icon:na})}),r.jsx(xc,{children:"Инновации"}),r.jsx(yc,{children:"Мы постоянно следим за новейшими технологиями и предлагаем современные решения для наших клиентов."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(gc,{children:r.jsx(v,{icon:RI})}),r.jsx(xc,{children:"Забота о клиентах"}),r.jsx(yc,{children:"Мы всегда готовы помочь с выбором оптимального решения и предоставить профессиональную консультацию."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(gc,{children:r.jsx(v,{icon:jg})}),r.jsx(xc,{children:"Качество"}),r.jsx(yc,{children:"Мы работаем только с проверенными производителями и гарантируем соответствие всем стандартам."})]})]})]}),r.jsxs(Fa,{children:[r.jsx(Va,{children:"Как мы работаем"}),r.jsxs(SN,{children:[r.jsxs(_a,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(Ya,{}),r.jsxs(Ba,{side:"left",children:[r.jsx(Ha,{children:"Шаг 1"}),r.jsx(Ua,{children:"Анализ задач"}),r.jsx(Wa,{children:"Выясняем специфику объекта и потребности клиента, подбираем оптимальные технологии."})]})]}),r.jsxs(_a,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(Ya,{}),r.jsxs(Ba,{side:"right",children:[r.jsx(Ha,{children:"Шаг 2"}),r.jsx(Ua,{children:"Подбор оборудования"}),r.jsx(Wa,{children:"Предлагаем сертифицированные решения от проверенных производителей."})]})]}),r.jsxs(_a,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(Ya,{}),r.jsxs(Ba,{side:"left",children:[r.jsx(Ha,{children:"Шаг 3"}),r.jsx(Ua,{children:"Поставка и логистика"}),r.jsx(Wa,{children:"Организуем поставку в оговорённые сроки, держим клиента в курсе статуса."})]})]}),r.jsxs(_a,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(Ya,{}),r.jsxs(Ba,{side:"right",children:[r.jsx(Ha,{children:"Шаг 4"}),r.jsx(Ua,{children:"Монтаж и запуск"}),r.jsx(Wa,{children:"Выполняем установку, подключение и пусконаладку «под ключ»."})]})]}),r.jsxs(_a,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(Ya,{}),r.jsxs(Ba,{side:"right",children:[r.jsx(Ha,{children:"Шаг 5"}),r.jsx(Ua,{children:"Сервис и сопровождение"}),r.jsx(Wa,{children:"Обеспечиваем техническое обслуживание, консультации и поддержку 24/7."})]})]})]})]}),r.jsxs(zN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(PN,{children:"Готовы к сотрудничеству?"}),r.jsx(TN,{children:"Свяжитесь с нами для получения профессиональной консультации по выбору счетчиков электроэнергии и расчета стоимости установки. Наши специалисты готовы помочь вам 24/7."}),r.jsxs(EN,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Связаться с нами"]})]})]})}const AN=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,$N=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,RN=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ON=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Z0=l(C.section)`
  margin-bottom: 5rem;
`,J0=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,NN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,ep=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`,tp=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,np=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,rp=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,ip=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,op=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,kn=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
`,DN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,N5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,D5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,ap=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,FN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,vc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,bc=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`,wc=l.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`,jc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,kc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,VN=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,_N=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,BN=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,HN=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(47, 84, 131, 0.15);
  }
`;l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;function UN(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(AN,{children:[r.jsxs($N,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(RN,{children:"Доставка"}),r.jsx(ON,{children:"Быстрая и надежная доставка счетчиков электроэнергии по всей России. Профессиональная установка и настройка оборудования с гарантией качества."})]}),r.jsxs(Z0,{children:[r.jsx(J0,{children:"Варианты доставки"}),r.jsxs(NN,{children:[r.jsxs(ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(tp,{children:[r.jsx(np,{children:r.jsx(v,{icon:ra})}),r.jsx(rp,{children:"Стандартная доставка"})]}),r.jsx(ip,{children:"Сроки доставки обсуждаются индивидуально и зависят от адреса и текущей загрузки службы."}),r.jsxs(op,{children:[r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Доставка до подъезда"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Уведомление о доставке"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Возможность выбора времени"]})]})]}),r.jsxs(ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(tp,{children:[r.jsx(np,{children:r.jsx(v,{icon:Fb})}),r.jsx(rp,{children:"Экспресс доставка"})]}),r.jsx(ip,{children:"Оформление доставки в день обращения с приоритетной обработкой вашего заказа."}),r.jsxs(op,{children:[r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Доставка в течение 24 часов"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Приоритетная обработка"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Подъем на этаж включен"]})]})]}),r.jsxs(ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(tp,{children:[r.jsx(np,{children:r.jsx(v,{icon:el})}),r.jsx(rp,{children:"Доставка с установкой"})]}),r.jsx(ip,{children:"Полный комплекс услуг: доставка, установка и настройка оборудования."}),r.jsxs(op,{children:[r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Профессиональная установка"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Настройка и тестирование"]}),r.jsxs(kn,{children:[r.jsx(v,{icon:Y}),"Гарантия на работы"]})]})]})]})]}),r.jsxs(Z0,{children:[r.jsx(J0,{children:"Как происходит доставка"}),r.jsxs(FN,{children:[r.jsxs(vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(bc,{children:"1"}),r.jsx(wc,{children:r.jsx(v,{icon:Ue})}),r.jsx(jc,{children:"Оформление заказа"}),r.jsx(kc,{children:"Оставляете заявку на сайте или звоните нам. Менеджер уточнит детали доставки."})]}),r.jsxs(vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(bc,{children:"2"}),r.jsx(wc,{children:r.jsx(v,{icon:Ob})}),r.jsx(jc,{children:"Подготовка заказа"}),r.jsx(kc,{children:"Мы комплектуем ваш заказ и готовим к отправке. Проверяем качество товара."})]}),r.jsxs(vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(bc,{children:"3"}),r.jsx(wc,{children:r.jsx(v,{icon:ra})}),r.jsx(jc,{children:"Доставка"}),r.jsx(kc,{children:"Курьер доставляет заказ в указанное время и место. Подписываете документы."})]}),r.jsxs(vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(bc,{children:"4"}),r.jsx(wc,{children:r.jsx(v,{icon:Y})}),r.jsx(jc,{children:"Получение"}),r.jsx(kc,{children:"Проверяете товар, подписываете акт приема-передачи. При необходимости - установка."})]})]})]}),r.jsxs(Z0,{children:[r.jsx(J0,{children:"Важная информация"}),r.jsxs(DN,{children:[r.jsxs(N5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(D5,{children:[r.jsx(v,{icon:rn}),"Условия доставки"]}),r.jsx(ap,{children:"Доставка осуществляется по будним дням с 9:00 до 18:00. В выходные дни доставка возможна по предварительной договоренности за дополнительную плату."}),r.jsx(ap,{children:"Условия доставки по Москве согласуются индивидуально с учетом параметров заказа. Для регионов подбираем оптимальное решение и согласуем детали вместе с вами."})]}),r.jsxs(N5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(D5,{children:[r.jsx(v,{icon:Ts}),"Получение заказа"]}),r.jsx(ap,{children:"При получении предъявите паспорт. Если заказ забирает представитель, необходима доверенность. Отсутствие документов может стать причиной отказа в выдаче."})]})]})]}),r.jsxs(VN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(_N,{children:"Остались вопросы по доставке?"}),r.jsx(BN,{children:"Свяжитесь с нами для получения подробной информации о доставке, расчета стоимости и согласования времени доставки. Наши специалисты готовы помочь!"}),r.jsxs(HN,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Связаться с нами"]})]})]})}const WN=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,YN=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,GN=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,XN=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,sp=l(C.section)`
  margin-bottom: 5rem;
`,F5=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,QN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,lp=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`,cp=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,dp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,up=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,fp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,pp=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Cn=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
`,qN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,V5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,_5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,Cc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,KN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,mp=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,hp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`,gp=l.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`,xp=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,yp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,ZN=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,JN=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,eD=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,tD=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;function nD(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(WN,{children:[r.jsxs(YN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(GN,{children:"Способы оплаты"}),r.jsx(XN,{children:"Безопасные и удобные способы оплаты счетчиков электроэнергии. Мы принимаем все популярные платежные методы и гарантируем безопасность каждой транзакции."})]}),r.jsx(sp,{children:r.jsxs(QN,{children:[r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(cp,{children:[r.jsx(dp,{children:r.jsx(v,{icon:Li})}),r.jsx(up,{children:"Банковские карты"})]}),r.jsx(fp,{children:"Оплата картами Visa, MasterCard, МИР. Безопасные платежи через защищенный шлюз."}),r.jsxs(pp,{children:[r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"VISA, MasterCard, МИР"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Мгновенное зачисление"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Без комиссии"]})]})]}),r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(cp,{children:[r.jsx(dp,{children:r.jsx(v,{icon:TI})}),r.jsx(up,{children:"Наличные"})]}),r.jsx(fp,{children:"Оплата наличными при получении заказа. Удобно для тех, кто предпочитает наличный расчет."}),r.jsxs(pp,{children:[r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Оплата при получении"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Без комиссии"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Квитанция в подарок"]})]})]}),r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsxs(cp,{children:[r.jsx(dp,{children:r.jsx(v,{icon:Nr})}),r.jsx(up,{children:"Безналичный расчет"})]}),r.jsx(fp,{children:"Оплата по счету для юридических лиц и ИП. Работаем с НДС и без НДС."}),r.jsxs(pp,{children:[r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Счет на оплату"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"НДС и без НДС"]}),r.jsxs(Cn,{children:[r.jsx(v,{icon:Y}),"Договор поставки"]})]})]})]})}),r.jsxs(sp,{children:[r.jsx(F5,{children:"Процесс оплаты"}),r.jsxs(KN,{children:[r.jsxs(mp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(hp,{children:"1"}),r.jsx(gp,{children:r.jsx(v,{icon:YI})}),r.jsx(xp,{children:"Расчет стоимости"}),r.jsx(yp,{children:"Выбираете товары и получаете точный расчет стоимости с учетом доставки."})]}),r.jsxs(mp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(hp,{children:"2"}),r.jsx(gp,{children:r.jsx(v,{icon:Li})}),r.jsx(xp,{children:"Выбор способа оплаты"}),r.jsx(yp,{children:"Выбираете удобный для вас способ оплаты из доступных вариантов."})]}),r.jsxs(mp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(hp,{children:"3"}),r.jsx(gp,{children:r.jsx(v,{icon:ZI})}),r.jsx(xp,{children:"Подтверждение"}),r.jsx(yp,{children:"Получаете подтверждение оплаты и документы на email или SMS."})]})]})]}),r.jsxs(sp,{children:[r.jsx(F5,{children:"Важная информация"}),r.jsxs(qN,{children:[r.jsxs(V5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(_5,{children:[r.jsx(v,{icon:_f}),"Условия оплаты"]}),r.jsx(Cc,{children:"Оплата производится в российских рублях. При оплате картой комиссия не взимается. Для юридических лиц доступно бронирование заказа на 3 дня с оплатой по счету."}),r.jsx(Cc,{children:"Мы оформляем электронный документооборот (ЭДО) и предоставляем полный комплект документов: счета, акты, накладные, гарантийные талоны."})]}),r.jsxs(V5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(_5,{children:[r.jsx(v,{icon:pa}),"Возврат средств"]}),r.jsx(Cc,{children:"Возврат средств производится в течение 14 дней с момента покупки при сохранении товарного вида и комплектности товара."}),r.jsx(Cc,{children:"Для возврата необходимо связаться с нами и предоставить документы о покупке. Возврат производится тем же способом, которым была произведена оплата."})]})]})]}),r.jsxs(ZN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(JN,{children:"Остались вопросы по оплате?"}),r.jsx(eD,{children:"Свяжитесь с нами для получения подробной информации о способах оплаты, условиях кредитования и рассрочки. Наши специалисты готовы помочь!"}),r.jsxs(tD,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Связаться с нами"]})]})]})}const rD=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,iD=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,oD=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,aD=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Sc=l(C.section)`
  margin-bottom: 5rem;
`,zc=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,sD=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,B5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,H5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,Pc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,lD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Tc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,Ec=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`,Lc=l.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`,Ic=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Mc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,cD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ac=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,$c=l.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
`,Rc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Oc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,dD=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,uD=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,fD=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,pD=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,mD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,vp=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(47, 84, 131, 0.15);
  }
`,bp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`,wp=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,jp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;function hD(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(rD,{children:[r.jsxs(iD,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(oD,{children:"Гарантия и сервис"}),r.jsx(aD,{children:"Максимальная гарантия на все счетчики электроэнергии до 16 лет. Профессиональное обслуживание и ремонт оборудования с выездом на место."})]}),r.jsxs(Sc,{children:[r.jsx(zc,{children:"Процесс гарантийного обслуживания"}),r.jsxs(lD,{children:[r.jsxs(Tc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Ec,{children:"1"}),r.jsx(Lc,{children:r.jsx(v,{icon:Ue})}),r.jsx(Ic,{children:"Обращение"}),r.jsx(Mc,{children:"Связываетесь с нами по телефону или через форму на сайте для регистрации обращения."})]}),r.jsxs(Tc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Ec,{children:"2"}),r.jsx(Lc,{children:r.jsx(v,{icon:Zs})}),r.jsx(Ic,{children:"Диагностика"}),r.jsx(Mc,{children:"Наши специалисты проводят диагностику оборудования для выявления причины неисправности."})]}),r.jsxs(Tc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Ec,{children:"3"}),r.jsx(Lc,{children:r.jsx(v,{icon:bn})}),r.jsx(Ic,{children:"Ремонт"}),r.jsx(Mc,{children:"Выполняем ремонт или замену неисправных компонентов в кратчайшие сроки."})]}),r.jsxs(Tc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Ec,{children:"4"}),r.jsx(Lc,{children:r.jsx(v,{icon:Y})}),r.jsx(Ic,{children:"Тестирование"}),r.jsx(Mc,{children:"Проводим тестирование отремонтированного оборудования и выдаем акт выполненных работ."})]})]})]}),r.jsxs(Sc,{children:[r.jsx(zc,{children:"Сервисные услуги"}),r.jsxs(cD,{children:[r.jsxs(Ac,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx($c,{children:r.jsx(v,{icon:OI})}),r.jsx(Rc,{children:"Ремонт оборудования"}),r.jsx(Oc,{children:"Профессиональный ремонт счетчиков электроэнергии любой сложности с использованием оригинальных запчастей."})]}),r.jsxs(Ac,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx($c,{children:r.jsx(v,{icon:Zs})}),r.jsx(Rc,{children:"Поверка средств измерения"}),r.jsx(Oc,{children:"Проведение поверки средств измерения после ремонта с оформлением всей необходимой документации."})]}),r.jsxs(Ac,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx($c,{children:r.jsx(v,{icon:Cg})}),r.jsx(Rc,{children:"Выезд специалиста"}),r.jsx(Oc,{children:"Выезд квалифицированного специалиста на место установки оборудования для диагностики и ремонта."})]}),r.jsxs(Ac,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx($c,{children:r.jsx(v,{icon:Js})}),r.jsx(Rc,{children:"Техническая поддержка"}),r.jsx(Oc,{children:"Круглосуточная техническая поддержка по вопросам эксплуатации и обслуживания оборудования."})]})]})]}),r.jsxs(Sc,{children:[r.jsx(zc,{children:"Важная информация"}),r.jsxs(sD,{children:[r.jsxs(B5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(H5,{children:[r.jsx(v,{icon:_f}),"Условия гарантии"]}),r.jsx(Pc,{children:"Гарантия распространяется на заводские дефекты и неисправности, возникшие в процессе нормальной эксплуатации. Гарантийный срок исчисляется с момента продажи товара."}),r.jsx(Pc,{children:"Для получения гарантийного обслуживания необходимо предъявить гарантийный талон и документы о покупке. Оборудование должно быть в исправном состоянии без механических повреждений."})]}),r.jsxs(B5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(H5,{children:[r.jsx(v,{icon:pa}),"Что не покрывается гарантией"]}),r.jsx(Pc,{children:"Гарантия не распространяется на повреждения, возникшие в результате неправильной установки, эксплуатации или хранения, а также на естественный износ компонентов."}),r.jsx(Pc,{children:"Не подлежат гарантийному обслуживанию изделия с механическими повреждениями, следами вскрытия или попыток самостоятельного ремонта."})]})]})]}),r.jsxs(Sc,{children:[r.jsx(zc,{children:"Дополнительные услуги"}),r.jsxs(mD,{children:[r.jsxs(vp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(bp,{children:r.jsx(v,{icon:Rb})}),r.jsx(wp,{children:"Продление гарантии"}),r.jsx(jp,{children:"Возможность продления гарантийного срока на дополнительный период с расширенным покрытием."})]}),r.jsxs(vp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(bp,{children:r.jsx(v,{icon:bt})}),r.jsx(wp,{children:"Сервисные контракты"}),r.jsx(jp,{children:"Заключение сервисных контрактов на техническое обслуживание оборудования с фиксированной стоимостью."})]}),r.jsxs(vp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(bp,{children:r.jsx(v,{icon:Nr})}),r.jsx(wp,{children:"Корпоративное обслуживание"}),r.jsx(jp,{children:"Специальные условия для предприятий и организаций с большим количеством оборудования."})]})]})]}),r.jsxs(dD,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(uD,{children:"Нужна помощь с гарантийным обслуживанием?"}),r.jsx(fD,{children:"Свяжитесь с нами для получения подробной информации о гарантийных условиях, сервисном обслуживании или регистрации гарантийного случая. Наши специалисты готовы помочь!"}),r.jsxs(pD,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Связаться с нами"]})]})]})}const gD=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,xD=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,yD=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,vD=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Nc=l(C.section)`
  margin-bottom: 5rem;
`,Dc=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,bD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,kp=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`,Cp=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Sp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,zp=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,Pp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Tp=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Sn=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
`,wD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Fc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,Vc=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`,_c=l.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`,Bc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Hc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,jD=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,U5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,W5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,Uc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,kD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ep=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(47, 84, 131, 0.15);
  }
`,Lp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`,Ip=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Mp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,CD=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,SD=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,zD=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,PD=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,TD=()=>{const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(gD,{children:[r.jsxs(xD,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(yD,{children:"Возврат товара"}),r.jsx(vD,{children:"Удобные условия возврата и обмена товара в течение 14 дней. Мы заботимся о вашем комфорте и удовлетворенности покупкой."})]}),r.jsxs(Nc,{children:[r.jsx(Dc,{children:"Условия возврата"}),r.jsxs(bD,{children:[r.jsxs(kp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(Cp,{children:[r.jsx(Sp,{children:r.jsx(v,{icon:Y})}),r.jsx(zp,{children:"Возврат в течение 14 дней"})]}),r.jsx(Pp,{children:"Вы можете вернуть товар в течение 14 дней с момента покупки без объяснения причин."}),r.jsxs(Tp,{children:[r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Полная комплектация товара"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Сохранение товарного вида"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Наличие документов о покупке"]})]})]}),r.jsxs(kp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(Cp,{children:[r.jsx(Sp,{children:r.jsx(v,{icon:rn})}),r.jsx(zp,{children:"Гарантийный возврат"})]}),r.jsx(Pp,{children:"Возврат товара в течение гарантийного срока при обнаружении заводских дефектов."}),r.jsxs(Tp,{children:[r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Бесплатная диагностика"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Замена на аналогичный товар"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Возврат денежных средств"]})]})]}),r.jsxs(kp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(Cp,{children:[r.jsx(Sp,{children:r.jsx(v,{icon:bt})}),r.jsx(zp,{children:"Необходимые документы"})]}),r.jsx(Pp,{children:"Подготовьте комплект документов, подтверждающих покупку и право на возврат товара."}),r.jsxs(Tp,{children:[r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Заявление на возврат"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Кассовый чек или договор поставки"]}),r.jsxs(Sn,{children:[r.jsx(v,{icon:Y}),"Документ, удостоверяющий личность"]})]})]})]})]}),r.jsxs(Nc,{children:[r.jsx(Dc,{children:"Процесс возврата"}),r.jsxs(wD,{children:[r.jsxs(Fc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Vc,{children:"1"}),r.jsx(_c,{children:r.jsx(v,{icon:Ue})}),r.jsx(Bc,{children:"Обращение"}),r.jsx(Hc,{children:"Свяжитесь с нами по телефону или через форму на сайте для регистрации возврата."})]}),r.jsxs(Fc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Vc,{children:"2"}),r.jsx(_c,{children:r.jsx(v,{icon:Zs})}),r.jsx(Bc,{children:"Проверка"}),r.jsx(Hc,{children:"Наши специалисты проверяют соответствие товара условиям возврата и комплектацию."})]}),r.jsxs(Fc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Vc,{children:"3"}),r.jsx(_c,{children:r.jsx(v,{icon:Li})}),r.jsx(Bc,{children:"Возврат средств"}),r.jsx(Hc,{children:"Возврат денежных средств на карту или банковский счет в течение 3-5 рабочих дней."})]}),r.jsxs(Fc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Vc,{children:"4"}),r.jsx(_c,{children:r.jsx(v,{icon:Y})}),r.jsx(Bc,{children:"Подтверждение"}),r.jsx(Hc,{children:"Отправка уведомления о завершении процедуры возврата и поступлении средств."})]})]})]}),r.jsxs(Nc,{children:[r.jsx(Dc,{children:"Важная информация"}),r.jsxs(jD,{children:[r.jsxs(U5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(W5,{children:[r.jsx(v,{icon:_f}),"Что можно вернуть"]}),r.jsx(Uc,{children:"Возврату подлежат товары в полной комплектации с сохранением товарного вида, потребительских свойств и заводской упаковки. Товар не должен иметь следов использования."}),r.jsx(Uc,{children:"Обязательно наличие документов о покупке: чек, гарантийный талон, технический паспорт (если предусмотрен)."})]}),r.jsxs(U5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(W5,{children:[r.jsx(v,{icon:pa}),"Что не подлежит возврату"]}),r.jsx(Uc,{children:"Не подлежат возврату товары с механическими повреждениями, следами эксплуатации, нарушением целостности упаковки или отсутствием комплектующих."}),r.jsx(Uc,{children:"Также не возвращаются товары, изготовленные по индивидуальному заказу, а также товары с истекшим гарантийным сроком."})]})]})]}),r.jsxs(Nc,{children:[r.jsx(Dc,{children:"Часто задаваемые вопросы"}),r.jsxs(kD,{children:[r.jsxs(Ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Lp,{children:r.jsx(v,{icon:Ju})}),r.jsx(Ip,{children:"Сколько времени занимает возврат?"}),r.jsx(Mp,{children:"Процедура возврата занимает 3-5 рабочих дней с момента принятия товара."})]}),r.jsxs(Ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Lp,{children:r.jsx(v,{icon:Li})}),r.jsx(Ip,{children:"Как происходит возврат денег?"}),r.jsx(Mp,{children:"Деньги возвращаются на те же платежные реквизиты, с которых была совершена покупка."})]}),r.jsxs(Ep,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Lp,{children:r.jsx(v,{icon:Ob})}),r.jsx(Ip,{children:"Нужна ли упаковка?"}),r.jsx(Mp,{children:"Желательно сохранить оригинальную упаковку, но это не обязательное требование."})]})]})]}),r.jsxs(CD,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(SD,{children:"Нужна помощь с возвратом товара?"}),r.jsx(zD,{children:"Свяжитесь с нами для получения подробной информации о процедуре возврата, обмена товара или регистрации гарантийного случая. Наши специалисты готовы помочь!"}),r.jsxs(PD,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Связаться с нами"]})]})]})},ED=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,LD=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,ID=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,MD=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Xa=l(C.section)`
  margin-bottom: 5rem;
`,AD=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`,Qa=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`,$D=l.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,RD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ap=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`,$p=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Rp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,Op=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,Np=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Dp=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,zn=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
`,OD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Wc=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`,Yc=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`,Gc=l.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`,Xc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Qc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,ND=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Y5=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,G5=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`,qc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,X5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ki=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(47, 84, 131, 0.15);
  }
`,Zi=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`,Ji=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,eo=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,DD=l(C.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,FD=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,VD=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,_D=l(C.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,BD=()=>{const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(ED,{children:[r.jsxs(LD,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(ID,{children:"Профессиональные консультации"}),r.jsx(MD,{children:"Получите экспертную консультацию по выбору, установке и обслуживанию счетчиков электроэнергии. Наши специалисты помогут подобрать оптимальное решение для ваших задач."})]}),r.jsxs(Xa,{children:[r.jsx(Qa,{children:"Виды консультаций"}),r.jsxs(RD,{children:[r.jsxs(Ap,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs($p,{children:[r.jsx(Rp,{children:r.jsx(v,{icon:na})}),r.jsx(Op,{children:"Техническая консультация"})]}),r.jsx(Np,{children:"Помощь в выборе подходящего счетчика электроэнергии с учетом технических характеристик и требований."}),r.jsxs(Dp,{children:[r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Анализ технических требований"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Подбор оптимального решения"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Расчет экономической эффективности"]})]})]}),r.jsxs(Ap,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs($p,{children:[r.jsx(Rp,{children:r.jsx(v,{icon:bn})}),r.jsx(Op,{children:"Консультация по установке"})]}),r.jsx(Np,{children:"Профессиональные рекомендации по монтажу и настройке счетчиков электроэнергии."}),r.jsxs(Dp,{children:[r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Схемы подключения"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Требования безопасности"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Настройка и калибровка"]})]})]}),r.jsxs(Ap,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs($p,{children:[r.jsx(Rp,{children:r.jsx(v,{icon:Nb})}),r.jsx(Op,{children:"Консультации по энергосбережению"})]}),r.jsx(Np,{children:"Дополнительная услуга по запросу: рекомендации по снижению энергопотребления и повышению эффективности."}),r.jsxs(Dp,{children:[r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Анализ энергопотребления"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Рекомендации по экономии"]}),r.jsxs(zn,{children:[r.jsx(v,{icon:Y}),"Программы энергосбережения"]})]})]})]})]}),r.jsxs(Xa,{children:[r.jsxs(AD,{children:[r.jsx(Qa,{style:{marginBottom:0},children:"Процесс консультации"}),r.jsx($D,{children:"Доп. услуга"})]}),r.jsxs(OD,{children:[r.jsxs(Wc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Yc,{children:"1"}),r.jsx(Gc,{children:r.jsx(v,{icon:Ue})}),r.jsx(Xc,{children:"Обращение"}),r.jsx(Qc,{children:"Свяжитесь с нами по телефону или оставьте заявку на сайте для записи на консультацию."})]}),r.jsxs(Wc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Yc,{children:"2"}),r.jsx(Gc,{children:r.jsx(v,{icon:Ts})}),r.jsx(Xc,{children:"Анализ потребностей"}),r.jsx(Qc,{children:"Наш специалист изучит ваши требования и технические характеристики объекта."})]}),r.jsxs(Wc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Yc,{children:"3"}),r.jsx(Gc,{children:r.jsx(v,{icon:na})}),r.jsx(Xc,{children:"Разработка решения"}),r.jsx(Qc,{children:"Подготовка индивидуального решения с учетом всех технических и экономических факторов."})]}),r.jsxs(Wc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Yc,{children:"4"}),r.jsx(Gc,{children:r.jsx(v,{icon:Me})}),r.jsx(Xc,{children:"Предоставление рекомендаций"}),r.jsx(Qc,{children:"Получение подробных рекомендаций и технической документации для реализации проекта."})]})]})]}),r.jsxs(Xa,{children:[r.jsx(Qa,{children:"Преимущества наших консультаций"}),r.jsxs(ND,{children:[r.jsxs(Y5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(G5,{children:[r.jsx(v,{icon:jg}),"Профессионализм"]}),r.jsx(qc,{children:"Наши консультанты имеют многолетний опыт работы в сфере энергетики и регулярно проходят повышение квалификации."}),r.jsx(qc,{children:"Мы используем современные методики анализа и последние достижения в области энергосбережения для разработки оптимальных решений."})]}),r.jsxs(Y5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(G5,{children:[r.jsx(v,{icon:nM}),"Индивидуальный подход"]}),r.jsx(qc,{children:"Каждая консультация разрабатывается индивидуально с учетом специфики вашего объекта и требований."}),r.jsx(qc,{children:"Мы учитываем все факторы: от технических характеристик до бюджетных ограничений и сроков реализации."})]})]})]}),r.jsxs(Xa,{children:[r.jsx(Qa,{children:"Дополнительные услуги"}),r.jsxs(X5,{children:[r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:Cg})}),r.jsx(Ji,{children:"Выезд специалиста"}),r.jsx(eo,{children:"Выезд консультанта на объект для проведения технического обследования и анализа."})]}),r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:Rb})}),r.jsx(Ji,{children:"Долгосрочное сопровождение"}),r.jsx(eo,{children:"Постоянное техническое сопровождение проекта от разработки до внедрения и эксплуатации."})]}),r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:pM})}),r.jsx(Ji,{children:"Обучение персонала"}),r.jsx(eo,{children:"Проведение обучающих семинаров для вашего персонала по эксплуатации оборудования."})]})]})]}),r.jsxs(Xa,{children:[r.jsx(Qa,{children:"Часто задаваемые вопросы"}),r.jsxs(X5,{children:[r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:Ju})}),r.jsx(Ji,{children:"Сколько стоит консультация?"}),r.jsx(eo,{children:"Стоимость зависит от сложности проекта и объема работ. Первичная консультация часто бесплатна."})]}),r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:tl})}),r.jsx(Ji,{children:"Сколько длится консультация?"}),r.jsx(eo,{children:"Продолжительность зависит от сложности вопроса и длится до 30 минут."})]}),r.jsxs(Ki,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Zi,{children:r.jsx(v,{icon:Js})}),r.jsx(Ji,{children:"Можно ли получить консультацию онлайн?"}),r.jsx(eo,{children:"Да, мы проводим консультации по видеосвязи, что позволяет экономить время и средства."})]})]})]}),r.jsxs(DD,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(FD,{children:"Нужна профессиональная консультация?"}),r.jsx(VD,{children:"Свяжитесь с нами для получения подробной информации о наших консультационных услугах, записи на консультацию или обсуждения вашего проекта. Наши эксперты готовы помочь!"}),r.jsxs(_D,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Me}),"Записаться на консультацию"]})]})]})},HD=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,UD=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,WD=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,YD=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Kc=l(C.section)`
  margin-bottom: 5rem;
`,Zc=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,GD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,Fp=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 24px rgba(47, 84, 131, 0.12);
  border: 1px solid rgba(47, 84, 131, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Vp=l.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
`,_p=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,Bp=l.p`
  color: #666666;
  line-height: 1.6;
  margin: 0;
`,XD=l.div`
  display: inline-flex;
  background: rgba(47, 84, 131, 0.08);
  padding: 0.3rem;
  border-radius: 12px;
  margin: 0 auto 2.5rem;
`,Q5=l.button`
  border: none;
  background: ${({active:e})=>e?"#ffffff":"transparent"};
  color: ${({active:e})=>e?"#2f5483":"#4a657f"};
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.25s ease;

  &:hover {
    color: #2f5483;
  }
`,QD=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,qD=l(C.div)`
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem;
  box-shadow: 0 8px 28px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }
`,KD=l.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`,ZD=l.div`
  width: 60px;
  height: 60px;
  background: rgba(47, 84, 131, 0.12);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 1.6rem;
`,JD=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,eF=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,q5=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`,K5=l.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #4a657f;
  font-size: 0.97rem;

  svg {
    color: #2f5483;
  }
`,tF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
`,nF=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.2rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(47, 84, 131, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.05);
`,rF=l.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 auto 1rem;
`,iF=l.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,oF=l.p`
  color: #666666;
  line-height: 1.6;
  margin: 0;
`,aF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,sF=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(47, 84, 131, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.05);
`,lF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,cF=l(C.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  border-radius: 20px;
  padding: 3rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.08)"/></svg>');
    opacity: 0.4;
  }
`,dF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  position: relative;
  z-index: 2;
`,uF=l.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
  position: relative;
  z-index: 2;
`,fF=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`,Z5=l(C.button)`
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  background: ${({variant:e})=>e==="secondary"?"transparent":"white"};
  color: ${({variant:e})=>e==="secondary"?"white":"#2f5483"};
  border: ${({variant:e})=>e==="secondary"?"2px solid rgba(255,255,255,0.7)":"none"};

  &:hover {
    transform: translateY(-2px);
    background: ${({variant:e})=>e==="secondary"?"rgba(255,255,255,0.12)":"#f0f4f9"};
  }
`,pF=()=>{const[e,t]=b.useState("meters"),n={meters:[{icon:na,title:"Поверка электросчетчиков",description:"Однофазные и трехфазные счетчики для жилых, коммерческих и промышленных объектов.",items:["Аккредитованная лаборатория и выездная поверка","Проверка точности, диагностика и настройка","Работаем с Меркурий, Энергомера, Нева, АГАТ и др."]},{icon:Db,title:"Многотарифные системы",description:"Настройка и поверка счетчиков с учетом зонных тарифов и интеграции в АСКУЭ.",items:["Контроль тарифных расписаний и показаний","Проверка памяти, коммуникации и пломб","Регистрация результатов в реестре"]}],transformers:[{icon:Wr,title:"Трансформаторы тока",description:"Поверка трансформаторов тока всех классов точности для систем учета и защиты.",items:["Проверка погрешностей и угловых характеристик","Испытание изоляции и калибровка цепей","Первичные токи до 5000 А, вторичные 1/5 А"]},{icon:bn,title:"Трансформаторы напряжения",description:"Комплексная поверка трансформаторов напряжения до 35 кВ, включая цифровые модели.",items:["Диэлектрические испытания и проверка угловых погрешностей","Мобильная лаборатория для выездных работ","Документальное сопровождение и сертификация"]}]},i=[{title:"Для поверки счетчиков",items:["Паспорт и предыдущий сертификат поверки (если есть)","Договор или заявка на проведение работ","Доступ к прибору учета и схеме подключения"]},{title:"Для поверки трансформаторов",items:["Паспорт трансформатора тока/напряжения","Техническое задание или спецификация объекта","Протоколы предыдущих испытаний (при наличии)"]}];return r.jsxs(HD,{children:[r.jsxs(UD,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(WD,{children:"Поверка электроизмерительного оборудования"}),r.jsx(YD,{children:"Все услуги поверки электроизмерительного оборудования собраны в одном месте. Выберите решение для электросчетчиков или трансформаторов и получите консультацию специалистов."})]}),r.jsxs(Kc,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(Zc,{children:"Почему это удобно"}),r.jsxs(GD,{children:[r.jsxs(Fp,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Vp,{children:r.jsx(v,{icon:rn})}),r.jsx(_p,{children:"Аккредитованная лаборатория"}),r.jsx(Bp,{children:"Проводим поверку по утверждённым методикам, используем сертифицированное оборудование и выдаём официальные документы."})]}),r.jsxs(Fp,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Vp,{children:r.jsx(v,{icon:Zs})}),r.jsx(_p,{children:"Продуманная организация"}),r.jsx(Bp,{children:"Помогаем подготовить комплект документов, планируем график работ и сопровождаем вас на каждом этапе поверки."})]}),r.jsxs(Fp,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Vp,{children:r.jsx(v,{icon:bn})}),r.jsx(_p,{children:"Полный цикл услуг"}),r.jsx(Bp,{children:"Выполняем диагностику, настройку, поверку и регистрацию результатов для отдельных приборов и целых объектов."})]})]})]}),r.jsxs(Kc,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(Zc,{children:"Наши направления"}),r.jsxs(XD,{children:[r.jsxs(Q5,{active:e==="meters",onClick:()=>t("meters"),children:[r.jsx(v,{icon:na}),"Счетчики"]}),r.jsxs(Q5,{active:e==="transformers",onClick:()=>t("transformers"),children:[r.jsx(v,{icon:Wr}),"Трансформаторы"]})]}),r.jsx(QD,{children:n[e].map(o=>r.jsxs(qD,{whileHover:{translateY:-5},transition:{duration:.3},children:[r.jsxs(KD,{children:[r.jsx(ZD,{children:r.jsx(v,{icon:o.icon})}),r.jsx(JD,{children:o.title})]}),r.jsx(eF,{children:o.description}),r.jsx(q5,{children:o.items.map(a=>r.jsxs(K5,{children:[r.jsx(v,{icon:Y}),a]},a))})]},o.title))})]}),r.jsxs(Kc,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(Zc,{children:"Процесс работы"}),r.jsx(tF,{children:[{number:"1",title:"Заявка и консультация",text:"Анализируем ваши задачи, согласовываем перечень оборудования и сроки работ."},{number:"2",title:"Подготовка и выезд",text:"Формируем команду и документы, организуем выезд мобильной лаборатории."},{number:"3",title:"Поверка и испытания",text:"Проводим измерения, фиксируем результаты и при необходимости выполняем настройку."},{number:"4",title:"Документы и сопровождение",text:"Передаем протоколы и сертификаты, регистрируем результаты и консультируем по итогам."}].map(o=>r.jsxs(nF,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(rF,{children:o.number}),r.jsx(iF,{children:o.title}),r.jsx(oF,{children:o.text})]},o.number))})]}),r.jsxs(Kc,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsx(Zc,{children:"Что подготовить"}),r.jsx(aF,{children:i.map(o=>r.jsxs(sF,{whileHover:{translateY:-4},transition:{duration:.3},children:[r.jsxs(lF,{children:[r.jsx(v,{icon:bt}),o.title]}),r.jsx(q5,{children:o.items.map(a=>r.jsxs(K5,{children:[r.jsx(v,{icon:Y}),a]},a))})]},o.title))})]}),r.jsxs(cF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:[r.jsx(dF,{children:"Нужна поверка оборудования?"}),r.jsx(uF,{children:"Оставьте заявку — уточним детали, подготовим документы и подберём удобный формат проведения поверки для вашего оборудования."}),r.jsxs(fF,{children:[r.jsxs(Z5,{whileHover:{scale:1.04},whileTap:{scale:.96},children:[r.jsx(v,{icon:Ue}),"Заказать консультацию"]}),r.jsxs(Z5,{variant:"secondary",whileHover:{scale:1.04},whileTap:{scale:.96},children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]})]})]})},mF=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,hF=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,gF=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,xF=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Hp=l(C.section)`
  margin-bottom: 5rem;
`,Up=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,J5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Jn=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,er=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`,tr=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,nr=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,rr=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ie=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1.1rem;
  }
`,Jc=l(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`,ed=l.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`,td=l.div`
  flex: 1;
`,nd=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,rd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,id=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,It=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '•';
    color: #2f5483;
    font-weight: bold;
  }
`,yF=l(C.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.8" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,vF=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,bF=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,wF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,to=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #ffffff;
    font-weight: bold;
  }
`,jF=l(C.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,kF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,CF=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,SF=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,e3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,zF=l(C.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,PF=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,TF=l.div`
  flex: 1;
`,EF=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,LF=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,IF=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,MF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,AF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,od=l.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
`,ad=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,sd=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,ld=l.span`
  color: #333333;
  font-weight: 500;
`,cd=l(C.button)`
  background: #2f5483;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`;function $F(){b.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(mF,{children:[r.jsxs(hF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(gF,{children:"Поверка счетчиков электрической энергии"}),r.jsx(xF,{children:"Профессиональная поверка электросчетчиков с выдачей официальных документов. Работаем с 2010 года, имеем все необходимые разрешения и аккредитацию."})]}),r.jsxs(Hp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(Up,{children:"Наши услуги по поверке"}),r.jsxs(J5,{children:[r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:bl})}),r.jsx(tr,{children:"Официальная поверка"}),r.jsx(nr,{children:"Проводим поверку в соответствии с требованиями законодательства РФ с выдачей официальных документов."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Аккредитованная лаборатория"}),r.jsx(ie,{children:"Сертифицированное оборудование"}),r.jsx(ie,{children:"Официальные документы"}),r.jsx(ie,{children:"Регистрация в Госреестре"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:bn})}),r.jsx(tr,{children:"Выездная поверка"}),r.jsx(nr,{children:"Выполняем поверку на территории заказчика с использованием мобильного оборудования."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Выезд специалиста"}),r.jsx(ie,{children:"Мобильное оборудование"}),r.jsx(ie,{children:"Минимальные простои"}),r.jsx(ie,{children:"Удобство для клиента"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:tl})}),r.jsx(tr,{children:"Срочная поверка"}),r.jsx(nr,{children:"Выполняем срочную поверку в кратчайшие сроки для критически важных объектов."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Сроки от 1 дня"}),r.jsx(ie,{children:"Приоритетное обслуживание"}),r.jsx(ie,{children:"Круглосуточная поддержка"}),r.jsx(ie,{children:"Гарантия сроков"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:rn})}),r.jsx(tr,{children:"Техническое обслуживание"}),r.jsx(nr,{children:"Обеспечиваем техническое обслуживание и ремонт электросчетчиков любой сложности."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Диагностика неисправностей"}),r.jsx(ie,{children:"Ремонт и настройка"}),r.jsx(ie,{children:"Замена комплектующих"}),r.jsx(ie,{children:"Гарантия на работы"})]})]})]})]}),r.jsxs(Hp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(Up,{children:"Процесс поверки"}),r.jsxs(Jc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(ed,{children:"1"}),r.jsxs(td,{children:[r.jsx(nd,{children:"Заявка и консультация"}),r.jsx(rd,{children:"Оставляете заявку на сайте или по телефону. Наш специалист консультирует по всем вопросам и согласовывает условия работы."}),r.jsxs(id,{children:[r.jsx(It,{children:"Бесплатная консультация"}),r.jsx(It,{children:"Расчет стоимости"}),r.jsx(It,{children:"Согласование сроков"})]})]})]}),r.jsxs(Jc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(ed,{children:"2"}),r.jsxs(td,{children:[r.jsx(nd,{children:"Подготовка и выезд"}),r.jsx(rd,{children:"Подготавливаем необходимое оборудование и документы. Специалист выезжает на объект в согласованное время."}),r.jsxs(id,{children:[r.jsx(It,{children:"Проверка оборудования"}),r.jsx(It,{children:"Подготовка документов"}),r.jsx(It,{children:"Выезд специалиста"})]})]})]}),r.jsxs(Jc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(ed,{children:"3"}),r.jsxs(td,{children:[r.jsx(nd,{children:"Проведение поверки"}),r.jsx(rd,{children:"Выполняем все необходимые измерения и проверки в соответствии с методиками поверки и требованиями нормативных документов."}),r.jsxs(id,{children:[r.jsx(It,{children:"Визуальный осмотр"}),r.jsx(It,{children:"Электрические измерения"}),r.jsx(It,{children:"Проверка точности"})]})]})]}),r.jsxs(Jc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(ed,{children:"4"}),r.jsxs(td,{children:[r.jsx(nd,{children:"Оформление документов"}),r.jsx(rd,{children:"Оформляем официальные документы о поверке и передаем их заказчику. При необходимости регистрируем в Госреестре."}),r.jsxs(id,{children:[r.jsx(It,{children:"Сертификат поверки"}),r.jsx(It,{children:"Протокол измерений"}),r.jsx(It,{children:"Регистрация в реестре"})]})]})]})]}),r.jsxs(Hp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(Up,{children:"Типы счетчиков"}),r.jsxs(J5,{children:[r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:na})}),r.jsx(tr,{children:"Однофазные счетчики"}),r.jsx(nr,{children:"Поверка однофазных электросчетчиков для жилых и коммерческих помещений."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Счетчики Меркурий"}),r.jsx(ie,{children:"Счетчики Энергомера"}),r.jsx(ie,{children:"Счетчики Нева"}),r.jsx(ie,{children:"Импортные счетчики"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:UI})}),r.jsx(tr,{children:"Трехфазные счетчики"}),r.jsx(nr,{children:"Поверка трехфазных электросчетчиков для промышленных объектов."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Счетчики АГАТ"}),r.jsx(ie,{children:"Счетчики Меркурий"}),r.jsx(ie,{children:"Счетчики Энергомера"}),r.jsx(ie,{children:"Специализированные счетчики"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:Nb})}),r.jsx(tr,{children:"Многотарифные счетчики"}),r.jsx(nr,{children:"Поверка многотарифных электросчетчиков с функциями учета по зонам суток."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Проверка тарифов"}),r.jsx(ie,{children:"Настройка расписания"}),r.jsx(ie,{children:"Проверка памяти"}),r.jsx(ie,{children:"Валидация данных"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(v,{icon:Bf})}),r.jsx(tr,{children:"Промышленные счетчики"}),r.jsx(nr,{children:"Поверка высоковольтных и промышленных электросчетчиков."}),r.jsxs(rr,{children:[r.jsx(ie,{children:"Высоковольтные счетчики"}),r.jsx(ie,{children:"Счетчики с ТТ и ТН"}),r.jsx(ie,{children:"Счетчики для АСКУЭ"}),r.jsx(ie,{children:"Специальные требования"})]})]})]})]}),r.jsxs(yF,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:[r.jsx(vF,{children:"Почему выбирают нас?"}),r.jsx(bF,{children:"Более 10 лет опыта в области поверки электросчетчиков. Наша компания имеет все необходимые разрешения и аккредитацию."}),r.jsxs(wF,{children:[r.jsx(to,{children:"Аккредитованная лаборатория с современным оборудованием"}),r.jsx(to,{children:"Опытные специалисты с профильным образованием"}),r.jsx(to,{children:"Сертифицированные методики поверки"}),r.jsx(to,{children:"Гарантия качества и сроков выполнения работ"}),r.jsx(to,{children:"Конкурентные цены и гибкие условия"}),r.jsx(to,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(zF,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(PF,{children:r.jsx(v,{icon:pa})}),r.jsxs(TF,{children:[r.jsx(EF,{children:"Важная информация"}),r.jsx(LF,{children:"Согласно законодательству РФ, поверка электросчетчиков является обязательной процедурой. Счетчики с истекшим межповерочным интервалом не могут использоваться для коммерческого учета электроэнергии. Рекомендуем своевременно проводить поверку для избежания штрафов и проблем с энергоснабжающими организациями."})]})]}),r.jsxs(IF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[r.jsxs(MF,{children:[r.jsx(v,{icon:bt}),"Необходимые документы"]}),r.jsxs(AF,{children:[r.jsxs(od,{children:[r.jsxs(ad,{children:[r.jsx(sd,{children:r.jsx(v,{icon:bt})}),r.jsx(ld,{children:"Паспорт электросчетчика"})]}),r.jsxs(cd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(od,{children:[r.jsxs(ad,{children:[r.jsx(sd,{children:r.jsx(v,{icon:bt})}),r.jsx(ld,{children:"Сертификат поверки (если есть)"})]}),r.jsxs(cd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(od,{children:[r.jsxs(ad,{children:[r.jsx(sd,{children:r.jsx(v,{icon:bt})}),r.jsx(ld,{children:"Договор на поверку"})]}),r.jsxs(cd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(od,{children:[r.jsxs(ad,{children:[r.jsx(sd,{children:r.jsx(v,{icon:bt})}),r.jsx(ld,{children:"Акт выполненных работ"})]}),r.jsxs(cd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]})]})]}),r.jsxs(jF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(kF,{children:"Готовы заказать поверку?"}),r.jsx(CF,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты ответят на все ваши вопросы и помогут выбрать оптимальное решение."}),r.jsxs(SF,{children:[r.jsxs(e3,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(v,{icon:Ue}),"Получить консультацию"]}),r.jsxs(e3,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]})]})]})}const RF=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,OF=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,NF=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,DF=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Wp=l(C.section)`
  margin-bottom: 5rem;
`,Yp=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,t3=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,ir=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,or=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`,ar=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,sr=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,lr=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,oe=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1.1rem;
  }
`,dd=l(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`,ud=l.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`,fd=l.div`
  flex: 1;
`,pd=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,md=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,hd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Mt=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '•';
    color: #2f5483;
    font-weight: bold;
  }
`,FF=l(C.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.8" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,VF=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,_F=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,BF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,no=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #ffffff;
    font-weight: bold;
  }
`,HF=l(C.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,UF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,WF=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,YF=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,n3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,GF=l(C.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,XF=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,QF=l.div`
  flex: 1;
`,qF=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,KF=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,ZF=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,JF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,eV=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,gd=l.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
`,xd=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,yd=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,vd=l.span`
  color: #333333;
  font-weight: 500;
`,bd=l(C.button)`
  background: #2f5483;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`,tV=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,nV=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,rV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,ro=l.div`
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
`,io=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,oo=l.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;function iV(){b.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(RF,{children:[r.jsxs(OF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(NF,{children:"Поверка трансформаторов тока (напряжения)"}),r.jsx(DF,{children:"Профессиональная поверка трансформаторов тока и напряжения с использованием современного оборудования. Аккредитованная лаборатория, официальные документы."})]}),r.jsxs(Wp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(Yp,{children:"Наши услуги по поверке трансформаторов"}),r.jsxs(t3,{children:[r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:Wr})}),r.jsx(ar,{children:"Поверка трансформаторов тока"}),r.jsx(sr,{children:"Поверка трансформаторов тока (ТТ) для систем учета электроэнергии и защиты электрических сетей."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Классы точности 0.2S, 0.5S, 1.0"}),r.jsx(oe,{children:"Номинальные токи от 5А до 5000А"}),r.jsx(oe,{children:"Проверка погрешностей"}),r.jsx(oe,{children:"Испытание изоляции"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:t5})}),r.jsx(ar,{children:"Поверка трансформаторов напряжения"}),r.jsx(sr,{children:"Поверка трансформаторов напряжения (ТН) для систем измерения и защиты высоковольтных сетей."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Классы точности 0.2, 0.5, 1.0, 3.0"}),r.jsx(oe,{children:"Номинальные напряжения до 35кВ"}),r.jsx(oe,{children:"Проверка угловых погрешностей"}),r.jsx(oe,{children:"Испытание диэлектрической прочности"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:bn})}),r.jsx(ar,{children:"Выездная поверка"}),r.jsx(sr,{children:"Выполняем поверку трансформаторов на территории заказчика с использованием мобильного оборудования."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Мобильная лаборатория"}),r.jsx(oe,{children:"Минимальные простои"}),r.jsx(oe,{children:"Сертифицированное оборудование"}),r.jsx(oe,{children:"Официальные документы"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:bl})}),r.jsx(ar,{children:"Сертификация и калибровка"}),r.jsx(sr,{children:"Сертификация и калибровка измерительного оборудования для поверки трансформаторов."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Калибровка измерительных цепей"}),r.jsx(oe,{children:"Сертификация оборудования"}),r.jsx(oe,{children:"Поверка эталонных средств"}),r.jsx(oe,{children:"Метрологическое обеспечение"})]})]})]})]}),r.jsxs(Wp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(Yp,{children:"Процесс поверки трансформаторов"}),r.jsxs(dd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(ud,{children:"1"}),r.jsxs(fd,{children:[r.jsx(pd,{children:"Предварительная оценка"}),r.jsx(md,{children:"Анализируем технические характеристики трансформатора, определяем объем работ и необходимое оборудование."}),r.jsxs(hd,{children:[r.jsx(Mt,{children:"Изучение паспортных данных"}),r.jsx(Mt,{children:"Определение класса точности"}),r.jsx(Mt,{children:"Выбор методики поверки"})]})]})]}),r.jsxs(dd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(ud,{children:"2"}),r.jsxs(fd,{children:[r.jsx(pd,{children:"Визуальный осмотр"}),r.jsx(md,{children:"Проводим внешний осмотр трансформатора, проверяем целостность корпуса, маркировку и состояние изоляции."}),r.jsxs(hd,{children:[r.jsx(Mt,{children:"Проверка внешнего состояния"}),r.jsx(Mt,{children:"Контроль маркировки"}),r.jsx(Mt,{children:"Осмотр изоляции"})]})]})]}),r.jsxs(dd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(ud,{children:"3"}),r.jsxs(fd,{children:[r.jsx(pd,{children:"Электрические испытания"}),r.jsx(md,{children:"Выполняем комплекс электрических испытаний для определения точности и соответствия требованиям стандартов."}),r.jsxs(hd,{children:[r.jsx(Mt,{children:"Измерение погрешностей"}),r.jsx(Mt,{children:"Проверка угловых погрешностей"}),r.jsx(Mt,{children:"Испытание изоляции"})]})]})]}),r.jsxs(dd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(ud,{children:"4"}),r.jsxs(fd,{children:[r.jsx(pd,{children:"Оформление результатов"}),r.jsx(md,{children:"Оформляем официальные документы о поверке, включая протоколы измерений и сертификаты поверки."}),r.jsxs(hd,{children:[r.jsx(Mt,{children:"Протокол поверки"}),r.jsx(Mt,{children:"Сертификат поверки"}),r.jsx(Mt,{children:"Регистрация в реестре"})]})]})]})]}),r.jsxs(Wp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(Yp,{children:"Типы трансформаторов"}),r.jsxs(t3,{children:[r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:Wr})}),r.jsx(ar,{children:"Трансформаторы тока"}),r.jsx(sr,{children:"Поверка трансформаторов тока различных типов и классов точности."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Проходные трансформаторы тока"}),r.jsx(oe,{children:"Шинные трансформаторы тока"}),r.jsx(oe,{children:"Опорные трансформаторы тока"}),r.jsx(oe,{children:"Встроенные трансформаторы тока"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:t5})}),r.jsx(ar,{children:"Трансформаторы напряжения"}),r.jsx(sr,{children:"Поверка трансформаторов напряжения для систем измерения и защиты."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Однофазные трансформаторы напряжения"}),r.jsx(oe,{children:"Трехфазные трансформаторы напряжения"}),r.jsx(oe,{children:"Каскадные трансформаторы напряжения"}),r.jsx(oe,{children:"Емкостные трансформаторы напряжения"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:Bf})}),r.jsx(ar,{children:"Промышленные трансформаторы"}),r.jsx(sr,{children:"Поверка специализированных трансформаторов для промышленных объектов."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Высоковольтные трансформаторы"}),r.jsx(oe,{children:"Трансформаторы для АСКУЭ"}),r.jsx(oe,{children:"Специализированные трансформаторы"}),r.jsx(oe,{children:"Трансформаторы для защиты"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(v,{icon:EI})}),r.jsx(ar,{children:"Электронные трансформаторы"}),r.jsx(sr,{children:"Поверка современных электронных трансформаторов с цифровым выходом."}),r.jsxs(lr,{children:[r.jsx(oe,{children:"Цифровые трансформаторы тока"}),r.jsx(oe,{children:"Цифровые трансформаторы напряжения"}),r.jsx(oe,{children:"Гибридные трансформаторы"}),r.jsx(oe,{children:"Трансформаторы с цифровым интерфейсом"})]})]})]})]}),r.jsxs(tV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsxs(nV,{children:[r.jsx(v,{icon:Db}),"Технические характеристики"]}),r.jsxs(rV,{children:[r.jsxs(ro,{children:[r.jsx(io,{children:"Классы точности ТТ"}),r.jsx(oo,{children:"0.1, 0.2, 0.2S, 0.5, 0.5S, 1.0, 3.0, 5.0, 10.0"})]}),r.jsxs(ro,{children:[r.jsx(io,{children:"Классы точности ТН"}),r.jsx(oo,{children:"0.1, 0.2, 0.5, 1.0, 3.0, 6.0"})]}),r.jsxs(ro,{children:[r.jsx(io,{children:"Номинальные токи ТТ"}),r.jsx(oo,{children:"От 5А до 5000А (первичные), 1А, 5А (вторичные)"})]}),r.jsxs(ro,{children:[r.jsx(io,{children:"Номинальные напряжения ТН"}),r.jsx(oo,{children:"От 0.38кВ до 35кВ (первичные), 100В, 110В (вторичные)"})]}),r.jsxs(ro,{children:[r.jsx(io,{children:"Частотный диапазон"}),r.jsx(oo,{children:"50 Гц ± 2 Гц, 60 Гц ± 2 Гц"})]}),r.jsxs(ro,{children:[r.jsx(io,{children:"Температурный диапазон"}),r.jsx(oo,{children:"От -40°C до +70°C (рабочий), от -60°C до +85°C (транспортировка)"})]})]})]}),r.jsxs(FF,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1},children:[r.jsx(VF,{children:"Преимущества нашей лаборатории"}),r.jsx(_F,{children:"Наша аккредитованная лаборатория оснащена современным оборудованием и укомплектована квалифицированными специалистами."}),r.jsxs(BF,{children:[r.jsx(no,{children:"Аккредитация в области поверки трансформаторов"}),r.jsx(no,{children:"Современное поверочное оборудование"}),r.jsx(no,{children:"Опытные специалисты-метрологи"}),r.jsx(no,{children:"Сертифицированные методики поверки"}),r.jsx(no,{children:"Гарантия качества и сроков выполнения"}),r.jsx(no,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(GF,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[r.jsx(XF,{children:r.jsx(v,{icon:pa})}),r.jsxs(QF,{children:[r.jsx(qF,{children:"Важная информация"}),r.jsx(KF,{children:"Согласно требованиям ПУЭ и ГОСТ, трансформаторы тока и напряжения, используемые в системах учета электроэнергии, подлежат обязательной поверке. Межповерочный интервал составляет от 4 до 16 лет в зависимости от типа и класса точности трансформатора. Рекомендуем своевременно проводить поверку для обеспечения точности измерений и соответствия требованиям энергоснабжающих организаций."})]})]}),r.jsxs(ZF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsxs(JF,{children:[r.jsx(v,{icon:bt}),"Необходимые документы"]}),r.jsxs(eV,{children:[r.jsxs(gd,{children:[r.jsxs(xd,{children:[r.jsx(yd,{children:r.jsx(v,{icon:bt})}),r.jsx(vd,{children:"Паспорт трансформатора"})]}),r.jsxs(bd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(gd,{children:[r.jsxs(xd,{children:[r.jsx(yd,{children:r.jsx(v,{icon:bt})}),r.jsx(vd,{children:"Сертификат поверки (если есть)"})]}),r.jsxs(bd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(gd,{children:[r.jsxs(xd,{children:[r.jsx(yd,{children:r.jsx(v,{icon:bt})}),r.jsx(vd,{children:"Техническое задание"})]}),r.jsxs(bd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]}),r.jsxs(gd,{children:[r.jsxs(xd,{children:[r.jsx(yd,{children:r.jsx(v,{icon:bt})}),r.jsx(vd,{children:"Протокол поверки"})]}),r.jsxs(bd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(v,{icon:zr}),"Скачать образец"]})]})]})]}),r.jsxs(HF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.6},children:[r.jsx(UF,{children:"Готовы заказать поверку трансформаторов?"}),r.jsx(WF,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты помогут подобрать оптимальное решение для ваших задач."}),r.jsxs(YF,{children:[r.jsxs(n3,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(v,{icon:Ue}),"Получить консультацию"]}),r.jsxs(n3,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]})]})]})}const oV=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,aV=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,sV=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,lV=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Gp=l(C.section)`
  margin-bottom: 5rem;
`,Xp=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,r3=l.div`
  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`,i3=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  text-align: center;
`,cV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,o3=l(cV)`
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,cr=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,dr=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`,ur=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,fr=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,pr=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ae=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1.1rem;
  }
`,wd=l(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`,jd=l.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`,kd=l.div`
  flex: 1;
`,Cd=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,Sd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,zd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,At=l.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '•';
    color: #2f5483;
    font-weight: bold;
  }
`,dV=l(C.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.8" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,uV=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,fV=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,pV=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,ao=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #ffffff;
    font-weight: bold;
  }
`,mV=l(C.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,hV=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,gV=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,xV=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,a3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,yV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Pd=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,Td=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`,Ed=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Ld=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Id=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Je=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1rem;
  }
`;function vV(){b.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(oV,{children:[r.jsxs(aV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(sV,{children:"Монтаж оборудования"}),r.jsx(lV,{children:"Профессиональный монтаж электрооборудования любой сложности. Опытные специалисты, качественные материалы, гарантия на все виды работ."})]}),r.jsxs(Gp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(Xp,{children:"Наши услуги по монтажу и наладке"}),r.jsxs(r3,{children:[r.jsx(i3,{children:"Монтажные работы"}),r.jsxs(o3,{children:[r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:Wr})}),r.jsx(ur,{children:"Монтаж электросчетчиков"}),r.jsx(fr,{children:"Установка и подключение электросчетчиков различных типов в соответствии с требованиями ПУЭ и техническими условиями."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Однофазные и трехфазные счетчики"}),r.jsx(ae,{children:"Многотарифные счетчики"}),r.jsx(ae,{children:"Счетчики с дистанционным считыванием"}),r.jsx(ae,{children:"Подключение к АСКУЭ"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:n5})}),r.jsx(ur,{children:"Монтаж трансформаторов"}),r.jsx(fr,{children:"Установка и подключение трансформаторов тока и напряжения для систем учета и защиты электрических сетей."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Трансформаторы тока (ТТ)"}),r.jsx(ae,{children:"Трансформаторы напряжения (ТН)"}),r.jsx(ae,{children:"Высоковольтные трансформаторы"}),r.jsx(ae,{children:"Проверка и настройка"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:Nh})}),r.jsx(ur,{children:"Монтаж АСКУЭ"}),r.jsx(fr,{children:"Комплексная установка автоматизированных систем коммерческого учета электроэнергии с передачей данных."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Устройства сбора и передачи данных"}),r.jsx(ae,{children:"Модемы и каналы связи"}),r.jsx(ae,{children:"Программное обеспечение"}),r.jsx(ae,{children:"Настройка и тестирование"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:rn})}),r.jsx(ur,{children:"Монтаж систем защиты"}),r.jsx(fr,{children:"Установка и настройка устройств защиты и автоматики для электрических сетей и оборудования."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Реле защиты и автоматики"}),r.jsx(ae,{children:"Автоматические выключатели"}),r.jsx(ae,{children:"Устройства плавного пуска"}),r.jsx(ae,{children:"Системы мониторинга"})]})]})]})]}),r.jsxs(r3,{children:[r.jsx(i3,{children:"Наладочные работы"}),r.jsxs(o3,{children:[r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:Wr})}),r.jsx(ur,{children:"Наладка электросчетчиков"}),r.jsx(fr,{children:"Настройка и калибровка электросчетчиков для обеспечения точности измерений и соответствия требованиям."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Калибровка измерительных цепей"}),r.jsx(ae,{children:"Настройка тарифных зон"}),r.jsx(ae,{children:"Проверка точности измерений"}),r.jsx(ae,{children:"Настройка интерфейсов связи"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:n5})}),r.jsx(ur,{children:"Наладка трансформаторов"}),r.jsx(fr,{children:"Настройка и проверка трансформаторов тока и напряжения для обеспечения точности измерений и защиты."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Проверка коэффициентов трансформации"}),r.jsx(ae,{children:"Настройка угловых погрешностей"}),r.jsx(ae,{children:"Калибровка измерительных цепей"}),r.jsx(ae,{children:"Проверка изоляции"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:Nh})}),r.jsx(ur,{children:"Наладка АСКУЭ"}),r.jsx(fr,{children:"Настройка и оптимизация автоматизированных систем коммерческого учета электроэнергии."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Настройка устройств сбора данных"}),r.jsx(ae,{children:"Конфигурация каналов связи"}),r.jsx(ae,{children:"Настройка программного обеспечения"}),r.jsx(ae,{children:"Тестирование системы"})]})]}),r.jsxs(cr,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(dr,{children:r.jsx(v,{icon:rn})}),r.jsx(ur,{children:"Наладка систем защиты"}),r.jsx(fr,{children:"Настройка и проверка устройств защиты и автоматики для электрических сетей и оборудования."}),r.jsxs(pr,{children:[r.jsx(ae,{children:"Настройка реле защиты"}),r.jsx(ae,{children:"Проверка уставок срабатывания"}),r.jsx(ae,{children:"Тестирование автоматики"}),r.jsx(ae,{children:"Настройка логики защиты"})]})]})]})]})]}),r.jsxs(Gp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(Xp,{children:"Объекты монтажа"}),r.jsxs(yV,{children:[r.jsxs(Pd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Td,{children:r.jsx(v,{icon:kg})}),r.jsx(Ed,{children:"Жилые объекты"}),r.jsx(Ld,{children:"Монтаж электрооборудования в частных домах, квартирах и коттеджах."}),r.jsxs(Id,{children:[r.jsx(Je,{children:"Установка электросчетчиков"}),r.jsx(Je,{children:"Монтаж щитов учета"}),r.jsx(Je,{children:"Подключение бытовой техники"}),r.jsx(Je,{children:"Электромонтажные работы"})]})]}),r.jsxs(Pd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Td,{children:r.jsx(v,{icon:Nr})}),r.jsx(Ed,{children:"Коммерческие объекты"}),r.jsx(Ld,{children:"Монтаж оборудования в офисах, торговых центрах и коммерческих зданиях."}),r.jsxs(Id,{children:[r.jsx(Je,{children:"Системы учета электроэнергии"}),r.jsx(Je,{children:"Монтаж АСКУЭ"}),r.jsx(Je,{children:"Установка трансформаторов"}),r.jsx(Je,{children:"Системы автоматизации"})]})]}),r.jsxs(Pd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Td,{children:r.jsx(v,{icon:Bf})}),r.jsx(Ed,{children:"Промышленные объекты"}),r.jsx(Ld,{children:"Комплексный монтаж электрооборудования на промышленных предприятиях."}),r.jsxs(Id,{children:[r.jsx(Je,{children:"Высоковольтное оборудование"}),r.jsx(Je,{children:"Системы защиты и автоматики"}),r.jsx(Je,{children:"Промышленные счетчики"}),r.jsx(Je,{children:"Системы мониторинга"})]})]}),r.jsxs(Pd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Td,{children:r.jsx(v,{icon:QI})}),r.jsx(Ed,{children:"Социальные объекты"}),r.jsx(Ld,{children:"Монтаж оборудования в больницах, школах, детских садах и других учреждениях."}),r.jsxs(Id,{children:[r.jsx(Je,{children:"Системы резервного питания"}),r.jsx(Je,{children:"Монтаж счетчиков учета"}),r.jsx(Je,{children:"Системы безопасности"}),r.jsx(Je,{children:"Автоматизация процессов"})]})]})]})]}),r.jsxs(Gp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(Xp,{children:"Процесс монтажа"}),r.jsxs(wd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(jd,{children:"1"}),r.jsxs(kd,{children:[r.jsx(Cd,{children:"Обследование объекта"}),r.jsx(Sd,{children:"Выезд специалиста на объект для изучения технических условий, анализа существующей электросети и составления плана работ."}),r.jsxs(zd,{children:[r.jsx(At,{children:"Изучение технических условий"}),r.jsx(At,{children:"Анализ существующей сети"}),r.jsx(At,{children:"Составление сметы"})]})]})]}),r.jsxs(wd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(jd,{children:"2"}),r.jsxs(kd,{children:[r.jsx(Cd,{children:"Подготовка и согласование"}),r.jsx(Sd,{children:"Разработка технического решения, согласование с заказчиком и получение необходимых разрешений на проведение работ."}),r.jsxs(zd,{children:[r.jsx(At,{children:"Разработка технического решения"}),r.jsx(At,{children:"Согласование с заказчиком"}),r.jsx(At,{children:"Получение разрешений"})]})]})]}),r.jsxs(wd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(jd,{children:"3"}),r.jsxs(kd,{children:[r.jsx(Cd,{children:"Выполнение монтажных работ"}),r.jsx(Sd,{children:"Профессиональное выполнение всех монтажных работ в соответствии с техническими требованиями и нормами безопасности."}),r.jsxs(zd,{children:[r.jsx(At,{children:"Монтаж оборудования"}),r.jsx(At,{children:"Подключение и настройка"}),r.jsx(At,{children:"Проверка работоспособности"})]})]})]}),r.jsxs(wd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(jd,{children:"4"}),r.jsxs(kd,{children:[r.jsx(Cd,{children:"Сдача-приемка работ"}),r.jsx(Sd,{children:"Тестирование системы, оформление документации и передача объекта заказчику с гарантийными обязательствами."}),r.jsxs(zd,{children:[r.jsx(At,{children:"Комплексное тестирование"}),r.jsx(At,{children:"Оформление документации"}),r.jsx(At,{children:"Гарантийные обязательства"})]})]})]})]}),r.jsxs(dV,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:[r.jsx(uV,{children:"Почему выбирают нас?"}),r.jsx(fV,{children:"Более 10 лет опыта в области монтажа электрооборудования. Наша команда состоит из квалифицированных специалистов с профильным образованием."}),r.jsxs(pV,{children:[r.jsx(ao,{children:"Опытные монтажники с профильным образованием"}),r.jsx(ao,{children:"Сертифицированное оборудование и инструменты"}),r.jsx(ao,{children:"Соблюдение всех норм и требований безопасности"}),r.jsx(ao,{children:"Гарантия качества на все виды работ"}),r.jsx(ao,{children:"Конкурентные цены и гибкие условия"}),r.jsx(ao,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(mV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(hV,{children:"Готовы заказать монтаж оборудования?"}),r.jsx(gV,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты помогут подобрать оптимальное решение для вашего объекта."}),r.jsxs(xV,{children:[r.jsxs(a3,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(v,{icon:Ue}),"Получить консультацию"]}),r.jsxs(a3,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]})]})]})}const bV=l.div`
  padding: 200px 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 1024px) {
    padding: 100px 1rem 1rem;
  }
`,wV=l.h1`
  color: #2f5483;
  font-size: 2rem;
  margin-bottom: 1rem;
`,jV=l.p`
  color: #666666;
  font-size: 1.1rem;
`;function kV(){return r.jsxs(bV,{children:[r.jsx(wV,{children:"Тестовая страница"}),r.jsx(jV,{children:"Если вы видите эту страницу, значит сайт работает корректно!"})]})}const CV=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,SV=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,zV=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,PV=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,TV=l(C.section)`
  margin-bottom: 5rem;
`,EV=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,LV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,IV=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,MV=l.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`,AV=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.4;
`,$V=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,RV=l.div`
  color: #999999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,OV=l(C.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.8" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`,NV=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,DV=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,FV=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,so=l.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #ffffff;
    font-weight: bold;
  }
`,VV=l(C.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,_V=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,BV=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,HV=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,s3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`,UV=l(C.div)`
  margin-bottom: 4rem;
`,WV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Md=l(C.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,Ad=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`,$d=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,Rd=l.div`
  color: #666666;
  font-size: 1rem;
  font-weight: 500;
`;function YV(){const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")},n=[{id:1,name:"Энергомера",description:"Ведущий российский производитель электросчетчиков и систем учета электроэнергии",country:"Россия",website:"https://www.energomera.ru"},{id:2,name:"Меркурий",description:"Производитель высококачественных электросчетчиков и приборов учета",country:"Россия",website:"https://www.incotex.ru"},{id:3,name:"НЕВА",description:"Санкт-Петербургский завод по производству электросчетчиков",country:"Россия",website:"https://www.neva.ru"},{id:4,name:"АГАТ",description:"Производитель трансформаторов тока и напряжения",country:"Россия",website:"https://www.agat.ru"},{id:5,name:"Электротехническая компания",description:"Дистрибьютор электрооборудования и компонентов",country:"Россия",website:"https://www.electrotech.ru"},{id:6,name:"ТехСервис",description:"Сервисная компания по обслуживанию электрооборудования",country:"Россия",website:"https://www.techservice.ru"},{id:7,name:"SmartGrid Solutions",description:"Разработчик интеллектуальных систем управления энергосетями",country:"Германия",website:"https://www.smartgrid.de"},{id:8,name:"PowerTech Systems",description:"Производитель систем мониторинга и контроля энергопотребления",country:"США",website:"https://www.powertech.com"}];return r.jsxs(CV,{children:[r.jsxs(SV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(zV,{children:"Партнеры"}),r.jsx(PV,{children:"Наши надежные партнеры - ведущие производители и поставщики электрооборудования. Долгосрочное сотрудничество обеспечивает высокое качество продукции и сервиса."})]}),r.jsx(UV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:r.jsxs(WV,{children:[r.jsxs(Md,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(Ad,{children:r.jsx(v,{icon:el})}),r.jsx($d,{children:"20+"}),r.jsx(Rd,{children:"Партнеров"})]}),r.jsxs(Md,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(Ad,{children:r.jsx(v,{icon:Rh})}),r.jsx($d,{children:"5"}),r.jsx(Rd,{children:"Стран"})]}),r.jsxs(Md,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(Ad,{children:r.jsx(v,{icon:jg})}),r.jsx($d,{children:"10+"}),r.jsx(Rd,{children:"Лет сотрудничества"})]}),r.jsxs(Md,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(Ad,{children:r.jsx(v,{icon:lM})}),r.jsx($d,{children:"100%"}),r.jsx(Rd,{children:"Надежность"})]})]})}),r.jsxs(TV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(EV,{children:"Наши партнеры"}),r.jsx(LV,{children:n.map(i=>r.jsxs(IV,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(MV,{children:i.name.split(" ").map(o=>o[0]).join("")}),r.jsx(AV,{children:i.name}),r.jsx($V,{children:i.description}),r.jsxs(RV,{children:[r.jsx(v,{icon:Rh}),i.country]})]},i.id))})]}),r.jsxs(OV,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.6},children:[r.jsx(NV,{children:"Преимущества партнерства"}),r.jsx(DV,{children:"Долгосрочное сотрудничество с ведущими производителями обеспечивает высокое качество продукции и надежность поставок для наших клиентов."}),r.jsxs(FV,{children:[r.jsx(so,{children:"Прямые поставки от производителей"}),r.jsx(so,{children:"Гарантированное качество продукции"}),r.jsx(so,{children:"Конкурентные цены и условия"}),r.jsx(so,{children:"Техническая поддержка от партнеров"}),r.jsx(so,{children:"Сервисное обслуживание оборудования"}),r.jsx(so,{children:"Инновационные решения и технологии"})]})]}),r.jsxs(VV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsx(_V,{children:"Хотите стать нашим партнером?"}),r.jsx(BV,{children:"Мы всегда открыты для новых партнерств с надежными производителями и поставщиками качественного электрооборудования."}),r.jsxs(HV,{children:[r.jsxs(s3,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(v,{icon:Ue}),"Обсудить сотрудничество"]}),r.jsxs(s3,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(v,{icon:el}),"Отправить заявку"]})]})]})]})}const GV=l.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`,XV=l(C.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`,QV=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,qV=l(C.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,KV=l(C.div)`
  margin-bottom: 4rem;
`,ZV=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`,JV=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 180px;
  flex: 1;
  max-width: 220px;

  &:hover {
    border-color: #2f5483;
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.1);
    transform: translateY(-2px);
  }

  &.active {
    background: #2f5483;
    border-color: #2f5483;
    color: white;

    .category-icon {
      background: rgba(255, 255, 255, 0.2);
      color: white;
    }

    .category-title {
      color: white;
    }
  }

  @media (max-width: 768px) {
    min-width: auto;
    max-width: none;
    padding: 0.8rem 1rem;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 0.8rem;
  }
`,e_=l.div`
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`,t_=l.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
  transition: all 0.3s ease;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,n_=l(C.div)`
  margin-bottom: 4rem;
`,r_=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  border: 1px solid #e9ecef;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2f5483;
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.1);
  }
`,i_=l.div`
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background: #fafafa;

  &:hover {
    background: #f0f0f0;
  }
`,o_=l.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
  flex: 1;
  line-height: 1.4;
`,a_=l.div`
  color: #2f5483;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`,s_=l(C.div)`
  padding: 0 1.5rem 1.2rem;
  color: #666666;
  line-height: 1.6;
  font-size: 0.95rem;
  background: #ffffff;
`,l_=l(C.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,c_=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,d_=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,u_=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,l3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`;function f_(){const[e,t]=b.useState("all"),[n,i]=b.useState(new Set),o=()=>{console.log("Связаться с нами")},a=()=>{console.log("Написать на email")},s=f=>{const p=new Set(n);p.has(f)?p.delete(f):p.add(f),i(p)},c=[{id:"all",name:"Все вопросы",icon:Ju,count:25},{id:"products",name:"Продукция",icon:Ju,count:8},{id:"delivery",name:"Доставка",icon:ra,count:6},{id:"payment",name:"Оплата",icon:Li,count:5},{id:"service",name:"Сервис",icon:bn,count:4},{id:"warranty",name:"Гарантия",icon:bl,count:2}],u=[{id:1,category:"products",question:"Какие типы электросчетчиков вы предлагаете?",answer:"Мы предлагаем широкий ассортимент электросчетчиков: однофазные и трехфазные, индукционные и электронные, с различными классами точности. В нашем каталоге представлены счетчики для бытового и промышленного использования от ведущих производителей."},{id:2,category:"products",question:"Как выбрать подходящий электросчетчик?",answer:"При выборе электросчетчика необходимо учитывать: количество фаз (1 или 3), максимальную нагрузку, класс точности, тип подключения. Наши специалисты помогут подобрать оптимальный вариант для ваших потребностей."},{id:3,category:"delivery",question:"В какие регионы осуществляется доставка?",answer:"Мы осуществляем доставку по всей России. Сроки доставки зависят от региона: в пределах МКАД - 1-2 дня, по Московской области - 2-3 дня, в другие регионы - 3-7 дней. Доставка может осуществляться курьером или транспортной компанией."},{id:4,category:"delivery",question:"Сколько стоит доставка?",answer:"Стоимость доставки зависит от веса и габаритов товара, а также от региона доставки. При заказе от 50 000 рублей доставка по Москве бесплатная. Точную стоимость доставки вы можете уточнить у наших менеджеров."},{id:5,category:"payment",question:"Какие способы оплаты принимаются?",answer:"Мы принимаем оплату наличными при получении, банковскими картами (Visa, MasterCard, МИР), безналичным расчетом для юридических лиц, а также через электронные платежные системы. Возможна оплата в рассрочку."},{id:6,category:"payment",question:"Можно ли оплатить товар в рассрочку?",answer:"Да, мы предоставляем возможность покупки в рассрочку. Условия рассрочки зависят от суммы покупки и вашей кредитной истории. Подробную информацию можно получить у наших менеджеров."},{id:7,category:"service",question:"Предоставляете ли вы услуги монтажа?",answer:"Да, мы предоставляем полный спектр услуг по монтажу и подключению электросчетчиков. Наши специалисты имеют необходимые допуски и сертификаты. Стоимость монтажа рассчитывается индивидуально."},{id:8,category:"service",question:"Есть ли техническая поддержка?",answer:"Да, мы предоставляем техническую поддержку по всем нашим продуктам. Наши специалисты готовы ответить на ваши вопросы по телефону, email или через онлайн-чат на сайте."},{id:9,category:"warranty",question:"Какая гарантия на электросчетчики?",answer:"Гарантийный срок на электросчетчики составляет от 3 до 7 лет в зависимости от модели и производителя. В течение гарантийного периода мы обеспечиваем бесплатный ремонт или замену неисправного оборудования."},{id:10,category:"warranty",question:"Что делать при поломке счетчика?",answer:"При обнаружении неисправности электросчетчика необходимо немедленно прекратить его использование и обратиться к нам. В случае гарантийного случая мы обеспечим ремонт или замену. При отсутствии гарантии возможен платный ремонт."}].filter(f=>e==="all"||f.category===e);return r.jsxs(GV,{children:[r.jsxs(XV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(QV,{children:"Часто задаваемые вопросы"}),r.jsx(qV,{children:"Ответы на самые популярные вопросы о нашей продукции, услугах и сервисе. Не нашли ответ на свой вопрос? Свяжитесь с нами!"})]}),r.jsx(KV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:r.jsx(ZV,{children:c.map(f=>r.jsxs(JV,{className:e===f.id?"active":"",onClick:()=>t(f.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(e_,{className:"category-icon",children:r.jsx(v,{icon:f.icon})}),r.jsx(t_,{className:"category-title",children:f.name})]},f.id))})}),r.jsx(n_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:u.map(f=>r.jsxs(r_,{children:[r.jsxs(i_,{onClick:()=>s(f.id),children:[r.jsx(o_,{children:f.question}),r.jsx(a_,{style:{transform:n.has(f.id)?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:r.jsx(v,{icon:fu})})]}),r.jsx(xl,{children:n.has(f.id)&&r.jsx(s_,{initial:{opacity:0,maxHeight:0},animate:{opacity:1,maxHeight:500},exit:{opacity:0,maxHeight:0},transition:{duration:.4,ease:"easeInOut"},children:f.answer})})]},f.id))}),r.jsxs(l_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:[r.jsx(c_,{children:"Не нашли ответ на свой вопрос?"}),r.jsx(d_,{children:"Наши специалисты готовы помочь вам с любыми вопросами. Свяжитесь с нами удобным для вас способом."}),r.jsxs(u_,{children:[r.jsxs(l3,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:o,children:[r.jsx(v,{icon:Ue}),"Позвонить нам"]}),r.jsxs(l3,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a,children:[r.jsx(v,{icon:Vo}),"Написать email"]})]})]})]})}const p_=l.div`
  padding: 200px 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 2rem;
  }
`,m_=l.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,h_=l(C.h1)`
  font-size: 3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,g_=l(C.p)`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,lo=l(C.section)`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,co=l.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,uo=l.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,$t=l.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,fo=l.ul`
  margin: 1.5rem 0;
  padding-left: 2rem;
`,de=l.li`
  font-size: 1rem;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 0.8rem;
`,x_=l.div`
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.05) 0%, rgba(26, 47, 75, 0.05) 100%);
  border-left: 4px solid #2f5483;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1.5rem 0;
  }
`,y_=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,v_=l.div`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`,b_=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,w_=l.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`,j_=l.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,k_=l.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
  color: #666666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;function C_(){return r.jsxs(p_,{children:[r.jsxs(m_,{children:[r.jsx(h_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Политика конфиденциальности"}),r.jsx(g_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Мы ценим вашу конфиденциальность и стремимся обеспечить безопасность ваших персональных данных"})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[r.jsxs(co,{children:[r.jsx(v,{icon:rn}),"Общие положения"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта компании «Стройэнергетика» (далее — «Компания», «мы», «наш»)."}),r.jsx($t,{children:"Используя наш сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сайт."}),r.jsxs(x_,{children:[r.jsx(y_,{children:"Важные моменты:"}),r.jsxs(fo,{children:[r.jsx(de,{children:"Мы собираем только необходимые персональные данные"}),r.jsx(de,{children:"Ваши данные используются исключительно для предоставления услуг"}),r.jsx(de,{children:"Мы не передаем ваши данные третьим лицам без вашего согласия"}),r.jsx(de,{children:"Вы можете в любое время отозвать согласие на обработку данных"})]})]})]})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[r.jsxs(co,{children:[r.jsx(v,{icon:uM}),"Какие данные мы собираем"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"Мы собираем следующие виды персональных данных:"}),r.jsxs(fo,{children:[r.jsxs(de,{children:[r.jsx("strong",{children:"Контактная информация:"})," имя, фамилия, номер телефона, адрес электронной почты"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Информация о компании:"})," название организации, должность"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Техническая информация:"})," IP-адрес, тип браузера, операционная система"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Данные о заказах:"})," история покупок, предпочтения, отзывы"]})]}),r.jsx($t,{children:"Мы не собираем и не обрабатываем специальные категории персональных данных (раса, национальность, политические взгляды, религиозные убеждения, состояние здоровья, интимная жизнь)."})]})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:[r.jsxs(co,{children:[r.jsx(v,{icon:DI}),"Цели обработки данных"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"Ваши персональные данные обрабатываются в следующих целях:"}),r.jsxs(fo,{children:[r.jsx(de,{children:"Обработка заказов и предоставление услуг"}),r.jsx(de,{children:"Связь с клиентами и ответы на запросы"}),r.jsx(de,{children:"Улучшение качества обслуживания и персонализация контента"}),r.jsx(de,{children:"Отправка информационных материалов (только с вашего согласия)"}),r.jsx(de,{children:"Выполнение обязательств по договорам"}),r.jsx(de,{children:"Соблюдение требований законодательства"})]}),r.jsx($t,{children:"Мы обрабатываем ваши данные только в тех целях, для которых они были собраны, и не используем их для других целей без вашего согласия."})]})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[r.jsxs(co,{children:[r.jsx(v,{icon:zI}),"Безопасность данных"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"Мы принимаем все необходимые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения."}),r.jsxs(fo,{children:[r.jsx(de,{children:"Использование защищенных серверов и шифрования данных"}),r.jsx(de,{children:"Ограничение доступа к персональным данным только уполномоченным сотрудникам"}),r.jsx(de,{children:"Регулярное обновление систем безопасности"}),r.jsx(de,{children:"Мониторинг и аудит доступа к данным"}),r.jsx(de,{children:"Обучение сотрудников вопросам защиты персональных данных"})]}),r.jsx($t,{children:"В случае обнаружения нарушения безопасности данных мы незамедлительно уведомим вас и соответствующие органы в соответствии с требованиями законодательства."})]})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[r.jsxs(co,{children:[r.jsx(v,{icon:el}),"Передача данных третьим лицам"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:"}),r.jsxs(fo,{children:[r.jsx(de,{children:"С вашего явного согласия"}),r.jsx(de,{children:"Для выполнения обязательств по договорам (например, доставка товаров)"}),r.jsx(de,{children:"Для соблюдения требований законодательства"}),r.jsx(de,{children:"Для защиты наших прав и безопасности"})]}),r.jsx($t,{children:"В случае передачи данных третьим лицам мы обеспечиваем соблюдение ими требований по защите персональных данных и заключаем соответствующие соглашения о конфиденциальности."})]})]}),r.jsxs(lo,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(co,{children:[r.jsx(v,{icon:JI}),"Ваши права"]}),r.jsxs(uo,{children:[r.jsx($t,{children:"В соответствии с законодательством о персональных данных, вы имеете следующие права:"}),r.jsxs(fo,{children:[r.jsxs(de,{children:[r.jsx("strong",{children:"Право на доступ:"})," получить информацию о том, какие данные мы обрабатываем"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на исправление:"})," исправить неточные или неполные данные"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на удаление:"})," потребовать удаления ваших данных"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на ограничение:"})," ограничить обработку данных"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на переносимость:"})," получить данные в структурированном формате"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на возражение:"})," возразить против обработки данных"]}),r.jsxs(de,{children:[r.jsx("strong",{children:"Право на отзыв согласия:"})," отозвать согласие на обработку данных"]})]}),r.jsx($t,{children:"Для реализации ваших прав обращайтесь к нам по указанным контактным данным."})]})]}),r.jsxs(v_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},children:[r.jsx(b_,{children:"Вопросы по конфиденциальности?"}),r.jsx(w_,{children:"Если у вас есть вопросы относительно нашей Политики конфиденциальности или обработки персональных данных, свяжитесь с нами:"}),r.jsx(j_,{href:"mailto:privacy@stroienergetika.ru",children:"privacy@stroienergetika.ru"})]}),r.jsx(k_,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:1},children:"Последнее обновление: 1 января 2024 года"})]})}const S_=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`,z_=l.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`,P_=l(C.div)`
  font-size: 8rem;
  color: #2f5483;
  margin-bottom: 2rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }
`,T_=l(C.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,E_=l(C.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`,L_=l(C.p)`
  font-size: 1.1rem;
  color: #888888;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,I_=l(C.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,c3=l(C.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 180px;
  justify-content: center;
  
  &.primary {
    background: #2f5483;
    color: white;
    
    &:hover {
      background: #1a2f4b;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;
    
    &:hover {
      background: #2f5483;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 0.8rem 1.5rem;
  }
`,M_=l(C.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem;
  }
`,A_=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,$_=l.div`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`,R_=l.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
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
`,O_=l(C.button)`
  padding: 0.8rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,N_=l(C.div)`
  margin-top: 2rem;
`,D_=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,F_=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,V_=l(C.a)`
  padding: 0.5rem 1rem;
  background: #ffffff;
  color: #2f5483;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`;function __(){const e=on(),[t,n]=lt.useState(""),i=()=>{e("/"),window.scrollTo({top:0,behavior:"smooth"})},o=()=>{e(-1)},a=c=>{c.preventDefault(),t.trim()&&e(`/catalog?search=${encodeURIComponent(t.trim())}`)},s=[{name:"Главная",href:"/"},{name:"Каталог",href:"/catalog"},{name:"Контакты",href:"/contacts"},{name:"О компании",href:"/about"},{name:"Доставка",href:"/delivery"},{name:"Оплата",href:"/payment"}];return r.jsx(S_,{children:r.jsxs(z_,{children:[r.jsx(P_,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{duration:.8,ease:"easeOut"},children:r.jsx(v,{icon:pa})}),r.jsx(T_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"404"}),r.jsx(E_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Страница не найдена"}),r.jsx(L_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:"К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по устаревшей ссылке или допустили ошибку в адресе."}),r.jsxs(I_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(c3,{className:"primary",onClick:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:kg}),"На главную"]}),r.jsxs(c3,{className:"secondary",onClick:o,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:Oh}),"Назад"]})]}),r.jsxs(M_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(A_,{children:"Найти товар"}),r.jsx("form",{onSubmit:a,children:r.jsxs($_,{children:[r.jsx(R_,{type:"text",placeholder:"Введите название товара...",value:t,onChange:c=>n(c.target.value)}),r.jsxs(O_,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(v,{icon:ia}),"Найти"]})]})}),r.jsxs(N_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[r.jsx(D_,{children:"Популярные разделы"}),r.jsx(F_,{children:s.map((c,d)=>r.jsx(V_,{href:c.href,whileHover:{scale:1.05},whileTap:{scale:.95},children:c.name},d))})]})]})]})})}const B_=()=>window.innerWidth<=768,En=(e,t={})=>B_()?t:e,H_=()=>{const e=window.location;return b.useEffect(()=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};t();const n=()=>{t()};return window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e.pathname]),null},U_=l.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`,W_=l.div`
  color: #000000;
  font-family: 'Inter', sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,Y_=l(C.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(47, 84, 131, 0.1);
  z-index: 1000;
`,G_=l(C.div)`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow: hidden;
`,X_=l.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    display: none;
  }
`,Q_=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1.2rem;
    flex-direction: row;
    gap: 1rem;
    min-height: 85px;
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1rem;
    gap: 0.8rem;
    min-height: 80px;
  }
`,q_=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  box-sizing: border-box;

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
`;l.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;const K_=l(C.div)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000000;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    height: 32px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    img {
      height: 38px;
    }
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    img {
      height: 35px;
    }
    font-size: 1rem;
  }
`,Z_=l.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`,J_=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;l.a`
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;const eB=l.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    color: #1a2f4b;
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  @media (max-width: 1200px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,tB=l.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    color: #1a2f4b;
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  @media (max-width: 1200px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,nB=l(C.button)`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`,rB=l(C.button)`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-1px);
  }
`,d3=l(C.a)`
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
`,u3=l.div`
  position: relative;
  display: inline-block;
`,f3=l(C.div)`
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
`,p3=l.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 3001;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.3s ease;
  padding: 0.5rem 0;
`,dn=l.a`
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
`;l.nav`
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
`;l(C.a)`
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
`;const iB=l.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,oB=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: 1200px) {
    gap: 0.8rem;
  }
`,aB=l.div`
  position: relative;
  display: inline-block;
`,sB=l(C.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #1e3a5f 0%, #2f5483 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }
`,lB=l(C.div)`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(47, 84, 131, 0.15);
  padding: 1rem;
  min-width: 280px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: translateY(${e=>e.isOpen?"0":"-15px"}) scale(${e=>e.isOpen?"1":"0.95"});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.95);
    border-left: 1px solid rgba(47, 84, 131, 0.1);
    border-top: 1px solid rgba(47, 84, 131, 0.1);
    transform: rotate(45deg);
  }
`,qa=l(C.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
    transform: scaleY(0);
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.05) 0%, rgba(30, 58, 95, 0.05) 100%);
    color: #1e3a5f;
    transform: translateX(4px);
    
    &::before {
      transform: scaleY(1);
    }
  }
  
  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`,Ka=l.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 0.8rem;
`,Za=l.div`
  flex: 1;
`,Ja=l.div`
  font-weight: 600;
  margin-bottom: 0.125rem;
`,es=l.div`
  font-size: 0.75rem;
  color: #666;
  font-weight: 400;
`,cB=l.div`
  position: relative;
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`,dB=l.input`
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
`,uB=l.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 0.9rem;
`,fB=l.div`
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
`,pB=l.div`
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
`,mB=l.div`
  font-weight: 500;
  color: #2f5483;
  margin-bottom: 0.2rem;
`,hB=l.div`
  font-size: 0.8rem;
  color: #666666;
`;l.div`
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
`;l.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`;l(C.button)`
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
`;l.div`
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
`;l.div`
  font-size: 0.9rem;
  color: #2f5483;
  display: flex;
  align-items: center;
`;l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;l.span`
  font-weight: 400;
`;l.div`
  font-size: 0.9rem;
  color: #2f5483;
  display: flex;
  align-items: center;
`;const gB=l(C.button)`
  position: relative;
  background: #2f5483;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`,xB=l.div`
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
`,yB=l.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`,vB=l.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(255, 71, 87, 0.3);
  animation: ${e=>e.count>0?"pulse 0.6s ease-in-out":"none"};
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`,bB=l(C.button)`
  display: none;
  background: none;
  border: none;
  color: #2f5483;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    padding: 0.5rem;
    min-width: 38px;
    min-height: 38px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.4rem;
    min-width: 34px;
    min-height: 34px;
  }
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
  }
`,wB=l(C.button)`
  display: none;
  background: #2f5483;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  min-width: 44px;
  min-height: 44px;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    padding: 0.5rem;
    min-width: 40px;
    min-height: 40px;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    color: #2f5483;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.4rem;
    min-width: 36px;
    min-height: 36px;
  }
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    &:hover {
      background: transparent;
      transform: translateY(0);
      box-shadow: none;
      color: #1a2f4b;
    }
  }
`,Yb=l.div`
  position: absolute;
  top: -10px;
  right: -8px;
  background: #ff4757;
  color: white;
  font-size: 0.75rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 2px solid #ffffff;
  box-shadow: 0 3px 6px rgba(255, 71, 87, 0.4);
  animation: ${e=>e.count>0?"pulse 0.6s ease-in-out":"none"};
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
    top: -8px;
    right: -6px;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 5px rgba(255, 71, 87, 0.35);
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    top: -7px;
    right: -5px;
    border: 1.5px solid #ffffff;
    box-shadow: 0 2px 4px rgba(255, 71, 87, 0.3);
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`,jB=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"block":"none"};
  }
`,kB=l(C.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: #ffffff;
  z-index: 2001;
  padding: 2rem;
  padding-bottom: 4rem;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 320px;
    padding-bottom: 5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
    padding: 1.5rem;
    padding-bottom: 6rem;
  }
`,CB=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,SB=l(C.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`,Od=l.div`
  margin-bottom: 2rem;
`,Nd=l.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`,Rt=l(C.a)`
  display: block;
  padding: 0.8rem 0;
  color: #333333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
    padding-left: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 0;
    font-size: 0.95rem;
  }
`,zB=l.div`
  margin-bottom: 1rem;
`,PB=l(C.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0;
  background: none;
  border: none;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
  }
`,TB=l(C.div)`
  padding-left: 1rem;
  overflow: hidden;
  max-height: ${e=>e.isOpen?"500px":"0"};
  transition: max-height 0.3s ease;
`,ts=l.a`
  display: block;
  padding: 0.6rem 0;
  color: #666666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
    padding-left: 0.5rem;
  }
`,EB=l.div`
  margin-bottom: 2rem;
  position: relative;
`,LB=l.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
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
  
  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.95rem;
  }
`,IB=l.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,Qp=l.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #666666;
  font-size: 0.9rem;
`,MB=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  
  @media (max-width: 480px) {
    margin-bottom: 4rem;
    padding-bottom: 3rem;
  }
`,m3=l(C.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &.primary {
    background: #2f5483;
    color: white;
    
    &:hover {
      background: #1a2f4b;
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 1px solid #2f5483;
    
    &:hover {
      background: #2f5483;
      color: white;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
`,AB=l(C.button)`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #2f5483;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: relative;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
  }
`,$B=({onOpenCart:e})=>{const{getTotalItems:t}=Kr(),n=t();return r.jsxs(gB,{whileHover:{scale:1.02},onClick:e,children:[r.jsx(xB,{children:r.jsx(v,{icon:Jt})}),r.jsx(yB,{children:"Корзина"}),n>0&&r.jsx(vB,{count:n,children:n})]})},RB=({onOpenCart:e})=>{const{getTotalItems:t}=Kr(),n=t();return r.jsxs(wB,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(v,{icon:Jt}),n>0&&r.jsx(Yb,{count:n,children:n})]})},OB=({onOpenCart:e})=>{const{getTotalItems:t}=Kr(),n=t();return r.jsxs(AB,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:e,children:[r.jsx(v,{icon:Jt}),"Корзина",n>0&&r.jsx(Yb,{count:n,children:n})]})},h3=()=>{const e=on(),t=()=>{e("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)};return r.jsx(K_,{...En({whileHover:{scale:1.02}}),onClick:t,children:r.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})})},NB=()=>{const e=on(),t=()=>{e("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)};return r.jsx(yH,{as:C.div,...En({whileHover:{scale:1.02}}),onClick:t,children:r.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})})},DB=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,FB=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`,VB=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,_B=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,BB=l(C.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`,HB=l.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,g3=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x3=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,y3=l.input`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`;l.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`;const UB=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,WB=l(C.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`,YB=l(C.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
  }
`,GB=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,XB=l(C.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`,QB=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,qB=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,KB=l(C.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`,ZB=l.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,oi=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ai=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,ns=l.input`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`,JB=l.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`,v3=l.div`
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
  
  &.drag-over {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.1);
  }
`,b3=l.div`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,w3=l.div`
  color: #999999;
  font-size: 0.85rem;
`,j3=l.input`
  display: none;
`,k3=l.div`
  margin-top: 1rem;
`,C3=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border: 1px solid #e9ecef;
`,S3=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`,z3=l.span`
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;
`,P3=l.span`
  font-size: 0.8rem;
  color: #666666;
`,T3=l(C.button)`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(220, 53, 69, 0.1);
  }
`,eH=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,tH=l(C.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`,nH=l(C.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
  }
`,rH=l(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,iH=l(C.div)`
  background: white;
  border-radius: 16px;
  padding: 0;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,oH=l.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 20px;
`,aH=l.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #212529;
`,sH=l.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6c757d;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: #f8f9fa;
    color: #495057;
  }
`,lH=l.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,si=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,po=l.label`
  display: block;
  margin-bottom: 0;
  font-weight: 500;
  color: #495057;
  font-size: 14px;
`,Dd=l.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,cH=l.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,dH=l.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`,uH=l.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #555555;
  cursor: pointer;
  line-height: 1.5;
`,fH=l.input`
  width: 18px;
  height: 18px;
  margin-top: 0.2rem;
  cursor: pointer;
`,pH=l.span`
  display: block;
`,mH=l.button`
  padding: 12px 24px;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`,hH=l.button`
  padding: 12px 24px;
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
  }
`,gH=l.footer`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  padding: 6rem 2rem 4rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`,xH=l.div`
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
`,Fd=l.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,yH=l.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`,vH=l.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,bH=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,qp=l.div`
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
`,wH=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Kp=l.div`
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
`,Zp=l.h4`
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
`,yt=l.a`
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
`,jH=l.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`,kH=l.div`
  display: flex;
  gap: 1rem;
`,Vd=l.a`
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
`,CH=l(yt)`
  margin-left: 2rem;
  color: rgba(255, 255, 255, 0.7);
  
  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
    margin-top: 0.5rem;
  }
`,SH=l.div`
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
`,zH=l.div`
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
`,PH=l.div`
  font-weight: 500;
  color: #2f5483;
  margin-bottom: 0.2rem;
`,TH=l.div`
  font-size: 0.8rem;
  color: #666666;
`;function EH(){const{addNotification:e}=Hf(),[t,n]=b.useState(!1),[i,o]=b.useState(!1),[a,s]=b.useState(!1),[c,d]=b.useState(""),[u,f]=b.useState(!1),[p,m]=b.useState([]),[x,j]=b.useState(!1),[w,k]=b.useState(!1),[h,g]=b.useState(!1),[y,S]=b.useState(!1),[P,E]=b.useState({name:"",phone:""}),[T,I]=b.useState(!1),[R,D]=b.useState(!1),[ne,q]=b.useState({name:"",company:"",phone:"",email:"",subject:"",message:""}),[he,G]=b.useState([]),[J,U]=b.useState(!1),[ce,$]=b.useState(!1),[F,B]=b.useState(!1),[V,Z]=b.useState({name:"",company:"",phone:"",email:"",message:""}),[rt,Ae]=b.useState(!1),[Qe,se]=b.useState([]),[qe,it]=b.useState(!1),[z,O]=b.useState(!1),[X,Q]=b.useState(!0),[$e,Zr]=b.useState(0),[Uf,Gb]=b.useState(!1);b.useEffect(()=>{const L=()=>{Gb(window.innerWidth<=768)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),b.useEffect(()=>{const L=()=>{if(window.innerWidth<=768)return;const ge=window.scrollY;ge>$e&&ge>100?Q(!1):ge<$e&&Q(!0),Zr(ge)},pe=()=>{window.innerWidth<=768&&Q(!0)};return window.addEventListener("scroll",L),window.addEventListener("resize",pe),()=>{window.removeEventListener("scroll",L),window.removeEventListener("resize",pe)}},[$e]);const je=()=>{k(!1),g(!1)},zg=()=>{S(!0)},wl=()=>{S(!1),E({name:"",phone:""}),I(!1)},Pg=(L,pe)=>{E(ge=>({...ge,[L]:pe}))},Xb=async L=>{L.preventDefault(),I(!0),setTimeout(()=>{I(!1),wl(),e("Спасибо! Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)},Tg=()=>{D(!0)},jl=()=>{D(!1),q({name:"",company:"",phone:"",email:"",subject:"",message:""}),G([]),U(!1),$(!1)},Ri=(L,pe)=>{q(ge=>({...ge,[L]:pe}))},Qb=L=>{const ge=Array.from(L.target.files).map(W=>({id:Date.now()+Math.random(),file:W,name:W.name,size:W.size,type:W.type}));G(W=>[...W,...ge])},qb=L=>{G(pe=>pe.filter(ge=>ge.id!==L))},Kb=L=>{L.preventDefault(),$(!0)},Zb=L=>{L.preventDefault(),$(!1)},Jb=L=>{L.preventDefault(),$(!1);const ge=Array.from(L.dataTransfer.files).map(W=>({id:Date.now()+Math.random(),file:W,name:W.name,size:W.size,type:W.type}));G(W=>[...W,...ge])},Eg=L=>{if(L===0)return"0 Bytes";const pe=1024,ge=["Bytes","KB","MB","GB"],W=Math.floor(Math.log(L)/Math.log(pe));return parseFloat((L/Math.pow(pe,W)).toFixed(2))+" "+ge[W]},ew=async L=>{L.preventDefault(),U(!0),setTimeout(()=>{U(!1),jl(),e("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)},Lg=()=>{B(!0)},kl=()=>{B(!1),Z({name:"",company:"",phone:"",email:"",message:""}),Ae(!1),se([]),it(!1),O(!1)},ha=(L,pe)=>{Z(ge=>({...ge,[L]:pe}))},tw=L=>{const ge=Array.from(L.target.files).map(W=>({id:Date.now()+Math.random(),file:W,name:W.name,size:W.size,type:W.type}));se(W=>[...W,...ge])},nw=L=>{se(pe=>pe.filter(ge=>ge.id!==L))},rw=L=>{L.preventDefault(),it(!0)},iw=L=>{L.preventDefault(),it(!1)},ow=L=>{L.preventDefault(),it(!1);const ge=Array.from(L.dataTransfer.files).map(W=>({id:Date.now()+Math.random(),file:W,name:W.name,size:W.size,type:W.type}));se(W=>[...W,...ge])},aw=async L=>{L.preventDefault(),Ae(!0),setTimeout(()=>{Ae(!1),kl(),e("Спасибо! Ваша заявка на прайс-лист отправлена. Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)};b.useEffect(()=>{fetch("/catalog-products.json").then(L=>L.json()).then(L=>m(L)).catch(L=>console.error("Ошибка загрузки товаров:",L))},[]);const Ig=L=>{L.trim()&&(window.location.href=`/catalog?search=${encodeURIComponent(L.trim())}`,d(""),f(!1))},Mg=L=>{L.product?window.location.href=`/product/${L.product.id}`:Ig(L.title),d(""),f(!1)},Ag=L=>{L.key==="Enter"&&Ig(c)},$g=()=>{if(!c.trim()||c.length<2)return[];const L=c.toLowerCase().trim(),pe=[];return p.forEach(W=>{W.name.toLowerCase().includes(L)&&pe.push({type:"name",title:W.name,details:`${W.brand} • ${W.category}`,product:W})}),p.forEach(W=>{W.brand.toLowerCase().includes(L)&&pe.push({type:"brand",title:W.brand,details:`${W.name} • ${W.category}`,product:W})}),pe.filter((W,sw,lw)=>sw===lw.findIndex(Rg=>Rg.title===W.title&&Rg.type===W.type)).slice(0,6)};return r.jsxs(J9,{children:[r.jsx(H_,{}),r.jsxs(U_,{children:[r.jsxs(W_,{children:[r.jsxs(Y_,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[r.jsx(G_,{animate:{height:Uf||X?"auto":0,opacity:Uf||X?1:0},transition:{duration:.3,ease:"easeInOut"},children:r.jsxs(Q_,{children:[r.jsx(Z_,{children:r.jsx(h3,{})}),r.jsxs(J_,{children:[r.jsx(u3,{children:r.jsxs(f3,{...En({whileHover:{scale:1.02}}),onClick:()=>o(!i),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:["Клиентам",r.jsx(v,{icon:fu,style:{fontSize:"0.7rem"}})]})}),r.jsx(u3,{children:r.jsxs(f3,{...En({whileHover:{scale:1.02}}),onClick:()=>s(!a),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:["Информация",r.jsx(v,{icon:fu,style:{fontSize:"0.7rem"}})]})}),r.jsx(d3,{...En({whileHover:{scale:1.02}}),onClick:Lg,style:{cursor:"pointer"},children:"Прайс-лист"}),r.jsx(d3,{...En({whileHover:{scale:1.02}}),href:"/contacts",children:"Контакты"}),r.jsxs(rB,{...En({whileHover:{scale:1.02}}),onClick:zg,children:[r.jsx(v,{icon:e5}),"Заказать звонок"]}),r.jsxs(nB,{...En({whileHover:{scale:1.02}}),onClick:Tg,children:[r.jsx(v,{icon:Me}),"Отправить заявку"]})]}),Uf&&r.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[r.jsx(RB,{onOpenCart:()=>j(!0)}),r.jsx(bB,{...En({whileHover:{scale:1.05},whileTap:{scale:.95}}),onClick:()=>k(!0),children:r.jsx(v,{icon:J4})})]})]})}),r.jsxs(p3,{isOpen:i,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{position:"fixed",top:X?"60px":"35px",left:"50%",transform:"translateX(-50%)",zIndex:3001},children:[r.jsx(dn,{href:"/consultation",children:"Консультация"}),r.jsx(dn,{href:"/delivery",children:"Доставка"}),r.jsx(dn,{href:"/payment",children:"Оплата"}),r.jsx(dn,{href:"/warranty",children:"Гарантия"}),r.jsx(dn,{href:"/return",children:"Возврат"}),r.jsx(dn,{href:"/services/verification",children:"Поверка оборудования"}),r.jsx(dn,{href:"/services/installation",children:"Монтаж оборудования"})]}),r.jsxs(p3,{isOpen:a,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{position:"fixed",top:X?"60px":"35px",left:"50%",transform:"translateX(-50%)",zIndex:3001},children:[r.jsx(dn,{href:"/about",children:"О компании"}),r.jsx(dn,{href:"/partners",children:"Партнеры"}),r.jsx(dn,{href:"/faq",children:"FAQ"})]}),r.jsx(X_,{children:r.jsxs(q_,{children:[r.jsx(iB,{children:r.jsxs(aB,{className:"catalog-dropdown",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsxs(sB,{whileHover:{scale:1.02},children:["Каталог товаров",r.jsx(v,{icon:J4})]}),r.jsxs(lB,{isOpen:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsxs(qa,{href:"/catalog",children:[r.jsx(Ka,{children:r.jsx(v,{icon:VI})}),r.jsxs(Za,{children:[r.jsx(Ja,{children:"Все товары"}),r.jsx(es,{children:"Полный каталог счетчиков"})]})]}),r.jsxs(qa,{href:"/catalog?category=Однофазные счетчики",children:[r.jsx(Ka,{children:r.jsx(v,{icon:Wr})}),r.jsxs(Za,{children:[r.jsx(Ja,{children:"Однофазные счетчики"}),r.jsx(es,{children:"Для частных домов и квартир"})]})]}),r.jsxs(qa,{href:"/catalog?category=Трехфазные счетчики",children:[r.jsx(Ka,{children:r.jsx(v,{icon:Bf})}),r.jsxs(Za,{children:[r.jsx(Ja,{children:"Трехфазные счетчики"}),r.jsx(es,{children:"Для предприятий и промышленности"})]})]}),r.jsxs(qa,{href:"/catalog?category=Устройства сбора и передачи данных",children:[r.jsx(Ka,{children:r.jsx(v,{icon:Nh})}),r.jsxs(Za,{children:[r.jsx(Ja,{children:"Устройства сбора данных"}),r.jsx(es,{children:"RTU и системы мониторинга"})]})]}),r.jsxs(qa,{href:"/catalog?category=Поверочные установки и эталоны",children:[r.jsx(Ka,{children:r.jsx(v,{icon:bn})}),r.jsxs(Za,{children:[r.jsx(Ja,{children:"Поверочные комплексы"}),r.jsx(es,{children:"Эталоны, лаборатории, УППУ"})]})]})]})]})}),r.jsxs(oB,{children:[r.jsxs(cB,{children:[r.jsx(uB,{children:r.jsx(v,{icon:ia})}),r.jsx(dB,{type:"text",placeholder:"Поиск товаров...",value:c,onChange:L=>{d(L.target.value),f(L.target.value.length>=2)},onFocus:()=>{c.length>=2&&f(!0)},onBlur:()=>{setTimeout(()=>f(!1),200)},onKeyPress:Ag}),r.jsx(fB,{show:u,children:$g().map((L,pe)=>r.jsxs(pB,{onClick:()=>Mg(L),children:[r.jsx(mB,{children:L.title}),r.jsx(hB,{children:L.details})]},`header-${L.type}-${pe}`))})]}),r.jsxs(tB,{href:"mailto:info@stroienergetika.ru",children:[r.jsx(v,{icon:Vo}),"info@stroienergetika.ru"]}),r.jsxs(eB,{href:"tel:+79991234567",children:[r.jsx(v,{icon:Ue}),"+7 (999) 123-45-67"]}),r.jsx($B,{onOpenCart:()=>j(!0)})]})]})})]}),r.jsxs(T9,{children:[r.jsx(Te,{path:"/",element:r.jsx(B$,{})}),r.jsx(Te,{path:"/catalog",element:r.jsx(LA,{})}),r.jsx(Te,{path:"/product/:id",element:r.jsx(GR,{})}),r.jsx(Te,{path:"/checkout",element:r.jsx(WO,{})}),r.jsx(Te,{path:"/thank-you",element:r.jsx(nN,{})}),r.jsx(Te,{path:"/contacts",element:r.jsx(xN,{})}),r.jsx(Te,{path:"/about",element:r.jsx(MN,{})}),r.jsx(Te,{path:"/delivery",element:r.jsx(UN,{})}),r.jsx(Te,{path:"/payment",element:r.jsx(nD,{})}),r.jsx(Te,{path:"/warranty",element:r.jsx(hD,{})}),r.jsx(Te,{path:"/return",element:r.jsx(TD,{})}),r.jsx(Te,{path:"/consultation",element:r.jsx(BD,{})}),r.jsx(Te,{path:"/services/verification",element:r.jsx(pF,{})}),r.jsx(Te,{path:"/services/meter-verification",element:r.jsx($F,{})}),r.jsx(Te,{path:"/services/transformer-verification",element:r.jsx(iV,{})}),r.jsx(Te,{path:"/services/installation",element:r.jsx(vV,{})}),r.jsx(Te,{path:"/test",element:r.jsx(kV,{})}),r.jsx(Te,{path:"/partners",element:r.jsx(YV,{})}),r.jsx(Te,{path:"/faq",element:r.jsx(f_,{})}),r.jsx(Te,{path:"/privacy-policy",element:r.jsx(C_,{})}),r.jsx(Te,{path:"*",element:r.jsx(__,{})})]})]}),r.jsxs(gH,{children:[r.jsxs(xH,{children:[r.jsxs(Fd,{children:[r.jsx(NB,{}),r.jsx(vH,{children:"Официальный дилер счетчиков электроэнергии с гарантией качества и профессиональной установкой. Работаем с 2010 года."}),r.jsxs(bH,{children:[r.jsxs(qp,{children:[r.jsx(v,{icon:Ue}),"+7 (999) 123-45-67"]}),r.jsxs(qp,{children:[r.jsx(v,{icon:Vo}),"info@stroienergetika.ru"]}),r.jsxs(qp,{children:[r.jsx(v,{icon:tl}),"Пн-Пт: 9:00 - 18:00"]})]}),r.jsxs(wH,{children:[r.jsx(Kp,{children:"VISA"}),r.jsx(Kp,{children:"MC"}),r.jsx(Kp,{children:"MIR"})]})]}),r.jsxs(Fd,{children:[r.jsx(Zp,{children:"Клиентам"}),r.jsx(yt,{href:"/consultation",children:"Консультация"}),r.jsx(yt,{href:"/delivery",children:"Доставка"}),r.jsx(yt,{href:"/payment",children:"Оплата"}),r.jsx(yt,{href:"/warranty",children:"Гарантия"}),r.jsx(yt,{href:"/return",children:"Возврат"}),r.jsx(yt,{href:"/services/verification",children:"Поверка электрооборудования"}),r.jsx(yt,{href:"/services/installation",children:"Монтаж оборудования"})]}),r.jsxs(Fd,{children:[r.jsx(Zp,{children:"Информация"}),r.jsx(yt,{href:"/about",children:"О компании"}),r.jsx(yt,{href:"/partners",children:"Партнеры"}),r.jsx(yt,{href:"/faq",children:"FAQ"})]}),r.jsxs(Fd,{children:[r.jsx(Zp,{children:"Контакты"}),r.jsx(yt,{href:"/contacts",children:"Все контакты"}),r.jsx(yt,{href:"#",children:"Москва, ул. Примерная, 123"})]})]}),r.jsxs(jH,{children:[r.jsxs("div",{children:["© 2024 Стройэнергетика. Все права защищены.",r.jsx(CH,{href:"/privacy-policy",children:"Политика конфиденциальности"})]}),r.jsxs(kH,{children:[r.jsx(Vd,{href:"#",children:r.jsx(v,{icon:fM})}),r.jsx(Vd,{href:"#",children:r.jsx(v,{icon:qI})}),r.jsx(Vd,{href:"#",children:r.jsx(v,{icon:Rh})}),r.jsx(Vd,{href:"#",children:r.jsx(v,{icon:cM})})]})]})]})]}),r.jsx(kO,{isOpen:x,onClose:()=>j(!1)}),r.jsx(jB,{isOpen:w,initial:{opacity:0},animate:{opacity:w?1:0},transition:{duration:.3},onClick:je}),r.jsxs(kB,{initial:{x:"100%"},animate:{x:w?0:"100%"},transition:{duration:.3,ease:"easeInOut"},children:[r.jsxs(CB,{children:[r.jsx(h3,{}),r.jsx(SB,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:je,children:r.jsx(v,{icon:oa})})]}),r.jsxs(EB,{children:[r.jsx(LB,{type:"text",placeholder:"Поиск товаров...",value:c,onChange:L=>{d(L.target.value),f(L.target.value.length>=2)},onFocus:()=>{c.length>=2&&f(!0)},onBlur:()=>{setTimeout(()=>f(!1),200)},onKeyPress:Ag}),r.jsx(SH,{show:u,children:$g().map((L,pe)=>r.jsxs(zH,{onClick:()=>{Mg(L),je()},children:[r.jsx(PH,{children:L.title}),r.jsx(TH,{children:L.details})]},`mobile-${L.type}-${pe}`))})]}),r.jsxs(Od,{children:[r.jsx(Nd,{children:"Корзина"}),r.jsx(OB,{onOpenCart:()=>{j(!0),je()}})]}),r.jsxs(Od,{children:[r.jsx(Nd,{children:"Каталог"}),r.jsxs(zB,{children:[r.jsxs(PB,{onClick:()=>g(!h),whileHover:{scale:1.02},children:["Каталог товаров",r.jsx(v,{icon:fu,style:{fontSize:"0.8rem",transform:h?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"}})]}),r.jsxs(TB,{isOpen:h,children:[r.jsx(ts,{href:"/catalog",onClick:je,children:"Все товары"}),r.jsx(ts,{href:"/catalog?category=Однофазные счетчики",onClick:je,children:"Однофазные счетчики"}),r.jsx(ts,{href:"/catalog?category=Трехфазные счетчики",onClick:je,children:"Трехфазные счетчики"}),r.jsx(ts,{href:"/catalog?category=Устройства сбора и передачи данных",onClick:je,children:"Устройства сбора и передачи данных"}),r.jsx(ts,{href:"/catalog?category=Поверочные установки и эталоны",onClick:je,children:"Поверочные комплексы"})]})]})]}),r.jsxs(Od,{children:[r.jsx(Nd,{children:"Клиентам"}),r.jsx(Rt,{href:"/consultation",onClick:je,children:"Консультация"}),r.jsx(Rt,{href:"/delivery",onClick:je,children:"Доставка"}),r.jsx(Rt,{href:"/payment",onClick:je,children:"Оплата"}),r.jsx(Rt,{href:"/warranty",onClick:je,children:"Гарантия"}),r.jsx(Rt,{href:"/return",onClick:je,children:"Возврат"}),r.jsx(Rt,{href:"/services/verification",onClick:je,children:"Поверка электрооборудования"}),r.jsx(Rt,{href:"/services/installation",onClick:je,children:"Монтаж оборудования"})]}),r.jsxs(Od,{children:[r.jsx(Nd,{children:"Информация"}),r.jsx(Rt,{href:"#",onClick:()=>{je(),Lg()},children:"Прайс-лист"}),r.jsx(Rt,{href:"/about",onClick:je,children:"О компании"}),r.jsx(Rt,{href:"/partners",onClick:je,children:"Партнеры"}),r.jsx(Rt,{href:"/faq",onClick:je,children:"FAQ"}),r.jsx(Rt,{href:"/contacts",onClick:je,children:"Контакты"})]}),r.jsxs(IB,{children:[r.jsxs(Qp,{children:[r.jsx(v,{icon:Ue}),"+7 (999) 123-45-67"]}),r.jsxs(Qp,{children:[r.jsx(v,{icon:Vo}),"info@stroienergetika.ru"]}),r.jsxs(Qp,{children:[r.jsx(v,{icon:tl}),"Пн-Пт: 9:00 - 18:00"]})]}),r.jsxs(MB,{children:[r.jsxs(m3,{className:"primary",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{je(),Tg()},children:[r.jsx(v,{icon:Me}),"Отправить заявку"]}),r.jsxs(m3,{className:"secondary",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{je(),zg()},children:[r.jsx(v,{icon:e5}),"Заказать звонок"]})]})]}),y&&r.jsx(DB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:wl,children:r.jsxs(FB,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:L=>L.stopPropagation(),children:[r.jsxs(VB,{children:[r.jsx(_B,{children:"Заказать звонок"}),r.jsx(BB,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:wl,children:"×"})]}),r.jsxs(HB,{onSubmit:Xb,children:[r.jsxs(g3,{children:[r.jsx(x3,{children:"Ваше имя *"}),r.jsx(y3,{type:"text",placeholder:"Введите ваше имя",value:P.name,onChange:L=>Pg("name",L.target.value),required:!0})]}),r.jsxs(g3,{children:[r.jsx(x3,{children:"Номер телефона *"}),r.jsx(y3,{type:"tel",placeholder:"+7 (999) 123-45-67",value:P.phone,onChange:L=>Pg("phone",L.target.value),required:!0})]}),r.jsxs(UB,{children:[r.jsx(YB,{type:"button",onClick:wl,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Отмена"}),r.jsx(WB,{type:"submit",disabled:T,whileHover:{scale:1.02},whileTap:{scale:.98},children:T?"Отправка...":"Отправить"})]})]})]})}),R&&r.jsx(GB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:jl,children:r.jsxs(XB,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:L=>L.stopPropagation(),children:[r.jsxs(QB,{children:[r.jsx(qB,{children:"Отправить заявку"}),r.jsx(KB,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:jl,children:"×"})]}),r.jsxs(ZB,{onSubmit:ew,children:[r.jsxs(oi,{children:[r.jsx(ai,{children:"Ваше имя *"}),r.jsx(ns,{type:"text",placeholder:"Введите ваше имя",value:ne.name,onChange:L=>Ri("name",L.target.value),required:!0})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Компания"}),r.jsx(ns,{type:"text",placeholder:"Название вашей компании",value:ne.company,onChange:L=>Ri("company",L.target.value)})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Номер телефона *"}),r.jsx(ns,{type:"tel",placeholder:"+7 (999) 123-45-67",value:ne.phone,onChange:L=>Ri("phone",L.target.value),required:!0})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Email *"}),r.jsx(ns,{type:"email",placeholder:"your@email.com",value:ne.email,onChange:L=>Ri("email",L.target.value),required:!0})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Тема заявки *"}),r.jsx(ns,{type:"text",placeholder:"Кратко опишите тему заявки",value:ne.subject,onChange:L=>Ri("subject",L.target.value),required:!0})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Описание *"}),r.jsx(JB,{placeholder:"Подробно опишите вашу задачу, требования или вопросы...",value:ne.message,onChange:L=>Ri("message",L.target.value),required:!0})]}),r.jsxs(oi,{children:[r.jsx(ai,{children:"Прикрепить файлы"}),r.jsxs(v3,{className:ce?"drag-over":"",onDragOver:Kb,onDragLeave:Zb,onDrop:Jb,onClick:()=>document.getElementById("file-input").click(),children:[r.jsx(b3,{children:"Перетащите файлы сюда или нажмите для выбора"}),r.jsx(w3,{children:"Поддерживаемые форматы: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, ZIP"}),r.jsx(j3,{id:"file-input",type:"file",multiple:!0,onChange:Qb,accept:".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"})]}),he.length>0&&r.jsx(k3,{children:he.map(L=>r.jsxs(C3,{children:[r.jsxs(S3,{children:[r.jsx(z3,{children:L.name}),r.jsxs(P3,{children:["(",Eg(L.size),")"]})]}),r.jsx(T3,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>qb(L.id),children:"×"})]},L.id))})]}),r.jsxs(eH,{children:[r.jsx(nH,{type:"button",onClick:jl,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Отмена"}),r.jsx(tH,{type:"submit",disabled:J,whileHover:{scale:1.02},whileTap:{scale:.98},children:J?"Отправка...":"Отправить заявку"})]})]})]})}),F&&r.jsx(rH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:kl,children:r.jsxs(iH,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:L=>L.stopPropagation(),children:[r.jsxs(oH,{children:[r.jsx(aH,{children:"Заявка на прайс-лист"}),r.jsx(sH,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:kl,children:"×"})]}),r.jsxs(lH,{onSubmit:aw,children:[r.jsxs(si,{children:[r.jsx(po,{children:"Ваше имя *"}),r.jsx(Dd,{type:"text",placeholder:"Введите ваше имя",value:V.name,onChange:L=>ha("name",L.target.value),required:!0})]}),r.jsxs(si,{children:[r.jsx(po,{children:"Компания"}),r.jsx(Dd,{type:"text",placeholder:"Название вашей компании",value:V.company,onChange:L=>ha("company",L.target.value)})]}),r.jsxs(si,{children:[r.jsx(po,{children:"Номер телефона *"}),r.jsx(Dd,{type:"tel",placeholder:"+7 (999) 123-45-67",value:V.phone,onChange:L=>ha("phone",L.target.value),required:!0})]}),r.jsxs(si,{children:[r.jsx(po,{children:"Email *"}),r.jsx(Dd,{type:"email",placeholder:"your@email.com",value:V.email,onChange:L=>ha("email",L.target.value),required:!0})]}),r.jsxs(si,{children:[r.jsx(po,{children:"Дополнительная информация"}),r.jsx(cH,{placeholder:"Укажите интересующие вас категории товаров или особые требования...",value:V.message,onChange:L=>ha("message",L.target.value)})]}),r.jsxs(si,{children:[r.jsx(po,{children:"Прикрепить файлы"}),r.jsxs(v3,{className:qe?"drag-over":"",onDragOver:rw,onDragLeave:iw,onDrop:ow,onClick:()=>document.getElementById("price-file-input").click(),children:[r.jsx(b3,{children:"Перетащите файлы сюда или нажмите для выбора"}),r.jsx(w3,{children:"Поддерживаемые форматы: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, ZIP"}),r.jsx(j3,{id:"price-file-input",type:"file",multiple:!0,onChange:tw,accept:".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"})]}),Qe.length>0&&r.jsx(k3,{children:Qe.map(L=>r.jsxs(C3,{children:[r.jsxs(S3,{children:[r.jsx(z3,{children:L.name}),r.jsxs(P3,{children:["(",Eg(L.size),")"]})]}),r.jsx(T3,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>nw(L.id),children:"×"})]},L.id))})]}),r.jsx(si,{children:r.jsxs(uH,{children:[r.jsx(fH,{type:"checkbox",checked:z,onChange:L=>O(L.target.checked),required:!0}),r.jsx(pH,{children:"Я согласен(а) на обработку персональных данных"})]})}),r.jsxs(dH,{children:[r.jsx(hH,{type:"button",onClick:kl,children:"Отмена"}),r.jsx(mH,{type:"submit",disabled:rt||!z,children:rt?"Отправка...":"Отправить заявку"})]})]})]})})]})}function LH(){return r.jsx(PM,{children:r.jsx(EM,{children:r.jsx(EH,{})})})}Jp.createRoot(document.getElementById("root")).render(r.jsx(lt.StrictMode,{children:r.jsx(LH,{})}));
