(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Y5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G5={exports:{}},Of={},X5={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),Cw=Symbol.for("react.portal"),Sw=Symbol.for("react.fragment"),zw=Symbol.for("react.strict_mode"),Pw=Symbol.for("react.profiler"),Tw=Symbol.for("react.provider"),Ew=Symbol.for("react.context"),Lw=Symbol.for("react.forward_ref"),Iw=Symbol.for("react.suspense"),Mw=Symbol.for("react.memo"),Aw=Symbol.for("react.lazy"),ax=Symbol.iterator;function $w(e){return e===null||typeof e!="object"?null:(e=ax&&e[ax]||e["@@iterator"],typeof e=="function"?e:null)}var Q5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K5=Object.assign,q5={};function es(e,t,n){this.props=e,this.context=t,this.refs=q5,this.updater=n||Q5}es.prototype.isReactComponent={};es.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};es.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z5(){}Z5.prototype=es.prototype;function ym(e,t,n){this.props=e,this.context=t,this.refs=q5,this.updater=n||Q5}var vm=ym.prototype=new Z5;vm.constructor=ym;K5(vm,es.prototype);vm.isPureReactComponent=!0;var lx=Array.isArray,J5=Object.prototype.hasOwnProperty,bm={current:null},ey={key:!0,ref:!0,__self:!0,__source:!0};function ty(e,t,n){var i,o={},s=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)J5.call(t,i)&&!ey.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];o.children=d}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:Na,type:e,key:s,ref:a,props:o,_owner:bm.current}}function Rw(e,t){return{$$typeof:Na,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Na}function Dw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cx=/\/+/g;function L0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dw(""+e.key):t.toString(36)}function ku(e,t,n,i,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Na:case Cw:a=!0}}if(a)return a=e,o=o(a),e=i===""?"."+L0(a,0):i,lx(o)?(n="",e!=null&&(n=e.replace(cx,"$&/")+"/"),ku(o,t,n,"",function(u){return u})):o!=null&&(wm(o)&&(o=Rw(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(cx,"$&/")+"/")+e)),t.push(o)),1;if(a=0,i=i===""?".":i+":",lx(e))for(var c=0;c<e.length;c++){s=e[c];var d=i+L0(s,c);a+=ku(s,t,n,d,o)}else if(d=$w(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=i+L0(s,c++),a+=ku(s,t,n,d,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function tl(e,t,n){if(e==null)return e;var i=[],o=0;return ku(e,i,"","",function(s){return t.call(n,s,o++)}),i}function Nw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Cu={transition:null},Ow={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Cu,ReactCurrentOwner:bm};function ny(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:tl,forEach:function(e,t,n){tl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tl(e,function(){t++}),t},toArray:function(e){return tl(e,function(t){return t})||[]},only:function(e){if(!wm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=es;G.Fragment=Sw;G.Profiler=Pw;G.PureComponent=ym;G.StrictMode=zw;G.Suspense=Iw;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;G.act=ny;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=K5({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=bm.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)J5.call(t,d)&&!ey.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:Na,type:e.type,key:o,ref:s,props:i,_owner:a}};G.createContext=function(e){return e={$$typeof:Ew,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tw,_context:e},e.Consumer=e};G.createElement=ty;G.createFactory=function(e){var t=ty.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Lw,render:e}};G.isValidElement=wm;G.lazy=function(e){return{$$typeof:Aw,_payload:{_status:-1,_result:e},_init:Nw}};G.memo=function(e,t){return{$$typeof:Mw,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Cu.transition;Cu.transition={};try{e()}finally{Cu.transition=t}};G.unstable_act=ny;G.useCallback=function(e,t){return ct.current.useCallback(e,t)};G.useContext=function(e){return ct.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};G.useEffect=function(e,t){return ct.current.useEffect(e,t)};G.useId=function(){return ct.current.useId()};G.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return ct.current.useMemo(e,t)};G.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};G.useRef=function(e){return ct.current.useRef(e)};G.useState=function(e){return ct.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return ct.current.useTransition()};G.version="18.3.1";X5.exports=G;var j=X5.exports;const lt=Y5(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fw=j,Vw=Symbol.for("react.element"),_w=Symbol.for("react.fragment"),Bw=Object.prototype.hasOwnProperty,Hw=Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uw={key:!0,ref:!0,__self:!0,__source:!0};function ry(e,t,n){var i,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)Bw.call(t,i)&&!Uw.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Vw,type:e,key:s,ref:a,props:o,_owner:Hw.current}}Of.Fragment=_w;Of.jsx=ry;Of.jsxs=ry;G5.exports=Of;var r=G5.exports,Lp={},iy={exports:{}},zt={},oy={exports:{}},sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,V){var C=R.length;R.push(V);e:for(;0<C;){var I=C-1>>>1,H=R[I];if(0<o(H,V))R[I]=V,R[C]=H,C=I;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var V=R[0],C=R.pop();if(C!==V){R[0]=C;e:for(var I=0,H=R.length,Q=H>>>1;I<Q;){var ae=2*(I+1)-1,U=R[ae],je=ae+1,Fe=R[je];if(0>o(U,C))je<H&&0>o(Fe,U)?(R[I]=Fe,R[je]=C,I=je):(R[I]=U,R[ae]=C,I=ae);else if(je<H&&0>o(Fe,C))R[I]=Fe,R[je]=C,I=je;else break e}}return V}function o(R,V){var C=R.sortIndex-V.sortIndex;return C!==0?C:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],u=[],f=1,h=null,m=3,p=!1,b=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=R)i(u),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(u)}}function S(R){if(w=!1,y(R),!b)if(n(d)!==null)b=!0,re(P);else{var V=n(u);V!==null&&se(S,V.startTime-R)}}function P(R,V){b=!1,w&&(w=!1,v(L),L=-1),p=!0;var C=m;try{for(y(V),h=n(d);h!==null&&(!(h.expirationTime>V)||R&&!X());){var I=h.callback;if(typeof I=="function"){h.callback=null,m=h.priorityLevel;var H=I(h.expirationTime<=V);V=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(d)&&i(d),y(V)}else i(d);h=n(d)}if(h!==null)var Q=!0;else{var ae=n(u);ae!==null&&se(S,ae.startTime-V),Q=!1}return Q}finally{h=null,m=C,p=!1}}var E=!1,T=null,L=-1,D=5,N=-1;function X(){return!(e.unstable_now()-N<D)}function fe(){if(T!==null){var R=e.unstable_now();N=R;var V=!0;try{V=T(!0,R)}finally{V?we():(E=!1,T=null)}}else E=!1}var we;if(typeof g=="function")we=function(){g(fe)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,rt=q.port2;q.port1.onmessage=fe,we=function(){rt.postMessage(null)}}else we=function(){z(fe,0)};function re(R){T=R,E||(E=!0,we())}function se(R,V){L=z(function(){R(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||p||(b=!0,re(P))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var C=m;m=V;try{return R()}finally{m=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var C=m;m=R;try{return V()}finally{m=C}},e.unstable_scheduleCallback=function(R,V,C){var I=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?I+C:I):C=I,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=C+H,R={id:f++,callback:V,priorityLevel:R,startTime:C,expirationTime:H,sortIndex:-1},C>I?(R.sortIndex=C,t(u,R),n(d)===null&&R===n(u)&&(w?(v(L),L=-1):w=!0,se(S,C-I))):(R.sortIndex=H,t(d,R),b||p||(b=!0,re(P))),R},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(R){var V=m;return function(){var C=m;m=V;try{return R.apply(this,arguments)}finally{m=C}}}})(sy);oy.exports=sy;var Ww=oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw=j,kt=Ww;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ay=new Set,fa={};function zi(e,t){Oo(e,t),Oo(e+"Capture",t)}function Oo(e,t){for(fa[e]=t,e=0;e<t.length;e++)ay.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ip=Object.prototype.hasOwnProperty,Gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dx={},ux={};function Xw(e){return Ip.call(ux,e)?!0:Ip.call(dx,e)?!1:Gw.test(e)?ux[e]=!0:(dx[e]=!0,!1)}function Qw(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kw(e,t,n,i){if(t===null||typeof t>"u"||Qw(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,i,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var jm=/[\-:]([a-z])/g;function km(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jm,km);Ue[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jm,km);Ue[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jm,km);Ue[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cm(e,t,n,i){var o=Ue.hasOwnProperty(t)?Ue[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kw(t,n,o,i)&&(n=null),i||o===null?Xw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Yn=Yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),co=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),cy=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),$p=Symbol.for("react.suspense_list"),Pm=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),dy=Symbol.for("react.offscreen"),fx=Symbol.iterator;function ls(e){return e===null||typeof e!="object"?null:(e=fx&&e[fx]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,I0;function _s(e){if(I0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I0=t&&t[1]||""}return`
`+I0+e}var M0=!1;function A0(e,t){if(!e||M0)return"";M0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=i.stack.split(`
`),a=o.length-1,c=s.length-1;1<=a&&0<=c&&o[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==s[c]){var d=`
`+o[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{M0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_s(e):""}function qw(e){switch(e.tag){case 5:return _s(e.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return e=A0(e.type,!1),e;case 11:return e=A0(e.type.render,!1),e;case 1:return e=A0(e.type,!0),e;default:return""}}function Rp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case co:return"Portal";case Mp:return"Profiler";case Sm:return"StrictMode";case Ap:return"Suspense";case $p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cy:return(e.displayName||"Context")+".Consumer";case ly:return(e._context.displayName||"Context")+".Provider";case zm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pm:return t=e.displayName||null,t!==null?t:Rp(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Rp(e(t))}catch{}}return null}function Zw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rp(t);case 8:return t===Sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jw(e){var t=uy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rl(e){e._valueTracker||(e._valueTracker=Jw(e))}function fy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=uy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Xu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dp(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hx(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hy(e,t){t=t.checked,t!=null&&Cm(e,"checked",t,!1)}function Np(e,t){hy(e,t);var n=Lr(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Op(e,t.type,n):t.hasOwnProperty("defaultValue")&&Op(e,t.type,Lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function px(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Op(e,t,n){(t!=="number"||Xu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bs=Array.isArray;function Eo(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Lr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mx(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Bs(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lr(n)}}function py(e,t){var n=Lr(t.value),i=Lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function gx(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function my(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?my(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var il,gy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=il.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ej=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(e){ej.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xs[t]=Xs[e]})});function xy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xs.hasOwnProperty(e)&&Xs[e]?(""+t).trim():t+"px"}function yy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=xy(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var tj=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(e,t){if(t){if(tj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Bp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=null;function Tm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Up=null,Lo=null,Io=null;function xx(e){if(e=Va(e)){if(typeof Up!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Hf(t),Up(e.stateNode,e.type,t))}}function vy(e){Lo?Io?Io.push(e):Io=[e]:Lo=e}function by(){if(Lo){var e=Lo,t=Io;if(Io=Lo=null,xx(e),t)for(e=0;e<t.length;e++)xx(t[e])}}function wy(e,t){return e(t)}function jy(){}var $0=!1;function ky(e,t,n){if($0)return e(t,n);$0=!0;try{return wy(e,t,n)}finally{$0=!1,(Lo!==null||Io!==null)&&(jy(),by())}}function pa(e,t){var n=e.stateNode;if(n===null)return null;var i=Hf(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Wp=!1;if(On)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Wp=!1}function nj(e,t,n,i,o,s,a,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Qs=!1,Qu=null,Ku=!1,Yp=null,rj={onError:function(e){Qs=!0,Qu=e}};function ij(e,t,n,i,o,s,a,c,d){Qs=!1,Qu=null,nj.apply(rj,arguments)}function oj(e,t,n,i,o,s,a,c,d){if(ij.apply(this,arguments),Qs){if(Qs){var u=Qu;Qs=!1,Qu=null}else throw Error(A(198));Ku||(Ku=!0,Yp=u)}}function Pi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yx(e){if(Pi(e)!==e)throw Error(A(188))}function sj(e){var t=e.alternate;if(!t){if(t=Pi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return yx(o),e;if(s===i)return yx(o),t;s=s.sibling}throw Error(A(188))}if(n.return!==i.return)n=o,i=s;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,i=s;break}if(c===i){a=!0,i=o,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,i=o;break}if(c===i){a=!0,i=s,n=o;break}c=c.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==i)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Sy(e){return e=sj(e),e!==null?zy(e):null}function zy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zy(e);if(t!==null)return t;e=e.sibling}return null}var Py=kt.unstable_scheduleCallback,vx=kt.unstable_cancelCallback,aj=kt.unstable_shouldYield,lj=kt.unstable_requestPaint,ze=kt.unstable_now,cj=kt.unstable_getCurrentPriorityLevel,Em=kt.unstable_ImmediatePriority,Ty=kt.unstable_UserBlockingPriority,qu=kt.unstable_NormalPriority,dj=kt.unstable_LowPriority,Ey=kt.unstable_IdlePriority,Ff=null,yn=null;function uj(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Ff,e,void 0,(e.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:pj,fj=Math.log,hj=Math.LN2;function pj(e){return e>>>=0,e===0?32:31-(fj(e)/hj|0)|0}var ol=64,sl=4194304;function Hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zu(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?i=Hs(c):(s&=a,s!==0&&(i=Hs(s)))}else a=n&~o,a!==0?i=Hs(a):s!==0&&(i=Hs(s));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-nn(t),o=1<<n,i|=e[n],t&=~o;return i}function mj(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gj(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-nn(s),c=1<<a,d=o[a];d===-1?(!(c&n)||c&i)&&(o[a]=mj(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function Gp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ly(){var e=ol;return ol<<=1,!(ol&4194240)&&(ol=64),e}function R0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nn(t),e[t]=n}function xj(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nn(n),s=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~s}}function Lm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-nn(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var ie=0;function Iy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var My,Im,Ay,$y,Ry,Xp=!1,al=[],br=null,wr=null,jr=null,ma=new Map,ga=new Map,mr=[],yj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bx(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":ma.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(t.pointerId)}}function ds(e,t,n,i,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Va(t),t!==null&&Im(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vj(e,t,n,i,o){switch(t){case"focusin":return br=ds(br,e,t,n,i,o),!0;case"dragenter":return wr=ds(wr,e,t,n,i,o),!0;case"mouseover":return jr=ds(jr,e,t,n,i,o),!0;case"pointerover":var s=o.pointerId;return ma.set(s,ds(ma.get(s)||null,e,t,n,i,o)),!0;case"gotpointercapture":return s=o.pointerId,ga.set(s,ds(ga.get(s)||null,e,t,n,i,o)),!0}return!1}function Dy(e){var t=ri(e.target);if(t!==null){var n=Pi(t);if(n!==null){if(t=n.tag,t===13){if(t=Cy(n),t!==null){e.blockedOn=t,Ry(e.priority,function(){Ay(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Su(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hp=i,n.target.dispatchEvent(i),Hp=null}else return t=Va(n),t!==null&&Im(t),e.blockedOn=n,!1;t.shift()}return!0}function wx(e,t,n){Su(e)&&n.delete(t)}function bj(){Xp=!1,br!==null&&Su(br)&&(br=null),wr!==null&&Su(wr)&&(wr=null),jr!==null&&Su(jr)&&(jr=null),ma.forEach(wx),ga.forEach(wx)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Xp||(Xp=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,bj)))}function xa(e){function t(o){return us(o,e)}if(0<al.length){us(al[0],e);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===e&&(i.blockedOn=null)}}for(br!==null&&us(br,e),wr!==null&&us(wr,e),jr!==null&&us(jr,e),ma.forEach(t),ga.forEach(t),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)Dy(n),n.blockedOn===null&&mr.shift()}var Mo=Yn.ReactCurrentBatchConfig,Ju=!0;function wj(e,t,n,i){var o=ie,s=Mo.transition;Mo.transition=null;try{ie=1,Mm(e,t,n,i)}finally{ie=o,Mo.transition=s}}function jj(e,t,n,i){var o=ie,s=Mo.transition;Mo.transition=null;try{ie=4,Mm(e,t,n,i)}finally{ie=o,Mo.transition=s}}function Mm(e,t,n,i){if(Ju){var o=Qp(e,t,n,i);if(o===null)W0(e,t,i,ef,n),bx(e,i);else if(vj(o,e,t,n,i))i.stopPropagation();else if(bx(e,i),t&4&&-1<yj.indexOf(e)){for(;o!==null;){var s=Va(o);if(s!==null&&My(s),s=Qp(e,t,n,i),s===null&&W0(e,t,i,ef,n),s===o)break;o=s}o!==null&&i.stopPropagation()}else W0(e,t,i,null,n)}}var ef=null;function Qp(e,t,n,i){if(ef=null,e=Tm(i),e=ri(e),e!==null)if(t=Pi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ef=e,null}function Ny(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cj()){case Em:return 1;case Ty:return 4;case qu:case dj:return 16;case Ey:return 536870912;default:return 16}default:return 16}}var yr=null,Am=null,zu=null;function Oy(){if(zu)return zu;var e,t=Am,n=t.length,i,o="value"in yr?yr.value:yr.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===o[s-i];i++);return zu=o.slice(e,1<i?1-i:void 0)}function Pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function jx(){return!1}function Pt(e){function t(n,i,o,s,a){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:jx,this.isPropagationStopped=jx,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$m=Pt(ts),Fa=be({},ts,{view:0,detail:0}),kj=Pt(Fa),D0,N0,fs,Vf=be({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fs&&(fs&&e.type==="mousemove"?(D0=e.screenX-fs.screenX,N0=e.screenY-fs.screenY):N0=D0=0,fs=e),D0)},movementY:function(e){return"movementY"in e?e.movementY:N0}}),kx=Pt(Vf),Cj=be({},Vf,{dataTransfer:0}),Sj=Pt(Cj),zj=be({},Fa,{relatedTarget:0}),O0=Pt(zj),Pj=be({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Tj=Pt(Pj),Ej=be({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lj=Pt(Ej),Ij=be({},ts,{data:0}),Cx=Pt(Ij),Mj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Aj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$j[e])?!!t[e]:!1}function Rm(){return Rj}var Dj=be({},Fa,{key:function(e){if(e.key){var t=Mj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Aj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(e){return e.type==="keypress"?Pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nj=Pt(Dj),Oj=be({},Vf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sx=Pt(Oj),Fj=be({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),Vj=Pt(Fj),_j=be({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bj=Pt(_j),Hj=be({},Vf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uj=Pt(Hj),Wj=[9,13,27,32],Dm=On&&"CompositionEvent"in window,Ks=null;On&&"documentMode"in document&&(Ks=document.documentMode);var Yj=On&&"TextEvent"in window&&!Ks,Fy=On&&(!Dm||Ks&&8<Ks&&11>=Ks),zx=String.fromCharCode(32),Px=!1;function Vy(e,t){switch(e){case"keyup":return Wj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function Gj(e,t){switch(e){case"compositionend":return _y(t);case"keypress":return t.which!==32?null:(Px=!0,zx);case"textInput":return e=t.data,e===zx&&Px?null:e;default:return null}}function Xj(e,t){if(fo)return e==="compositionend"||!Dm&&Vy(e,t)?(e=Oy(),zu=Am=yr=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fy&&t.locale!=="ko"?null:t.data;default:return null}}var Qj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qj[e.type]:t==="textarea"}function By(e,t,n,i){vy(i),t=tf(t,"onChange"),0<t.length&&(n=new $m("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var qs=null,ya=null;function Kj(e){Jy(e,0)}function _f(e){var t=mo(e);if(fy(t))return e}function qj(e,t){if(e==="change")return t}var Hy=!1;if(On){var F0;if(On){var V0="oninput"in document;if(!V0){var Ex=document.createElement("div");Ex.setAttribute("oninput","return;"),V0=typeof Ex.oninput=="function"}F0=V0}else F0=!1;Hy=F0&&(!document.documentMode||9<document.documentMode)}function Lx(){qs&&(qs.detachEvent("onpropertychange",Uy),ya=qs=null)}function Uy(e){if(e.propertyName==="value"&&_f(ya)){var t=[];By(t,ya,e,Tm(e)),ky(Kj,t)}}function Zj(e,t,n){e==="focusin"?(Lx(),qs=t,ya=n,qs.attachEvent("onpropertychange",Uy)):e==="focusout"&&Lx()}function Jj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _f(ya)}function e7(e,t){if(e==="click")return _f(t)}function t7(e,t){if(e==="input"||e==="change")return _f(t)}function n7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:n7;function va(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ip.call(t,o)||!sn(e[o],t[o]))return!1}return!0}function Ix(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mx(e,t){var n=Ix(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ix(n)}}function Wy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yy(){for(var e=window,t=Xu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xu(e.document)}return t}function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r7(e){var t=Yy(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wy(n.ownerDocument.documentElement,n)){if(i!==null&&Nm(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(i.start,o);i=i.end===void 0?s:Math.min(i.end,o),!e.extend&&s>i&&(o=i,i=s,s=o),o=Mx(n,s);var a=Mx(n,i);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i7=On&&"documentMode"in document&&11>=document.documentMode,ho=null,Kp=null,Zs=null,qp=!1;function Ax(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qp||ho==null||ho!==Xu(i)||(i=ho,"selectionStart"in i&&Nm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&va(Zs,i)||(Zs=i,i=tf(Kp,"onSelect"),0<i.length&&(t=new $m("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ho)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var po={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},_0={},Gy={};On&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function Bf(e){if(_0[e])return _0[e];if(!po[e])return e;var t=po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gy)return _0[e]=t[n];return e}var Xy=Bf("animationend"),Qy=Bf("animationiteration"),Ky=Bf("animationstart"),qy=Bf("transitionend"),Zy=new Map,$x="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Zy.set(e,t),zi(t,[e])}for(var B0=0;B0<$x.length;B0++){var H0=$x[B0],o7=H0.toLowerCase(),s7=H0[0].toUpperCase()+H0.slice(1);Nr(o7,"on"+s7)}Nr(Xy,"onAnimationEnd");Nr(Qy,"onAnimationIteration");Nr(Ky,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(qy,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Rx(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,oj(i,t,void 0,e),e.currentTarget=null}function Jy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var a=i.length-1;0<=a;a--){var c=i[a],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==s&&o.isPropagationStopped())break e;Rx(o,c,u),s=d}else for(a=0;a<i.length;a++){if(c=i[a],d=c.instance,u=c.currentTarget,c=c.listener,d!==s&&o.isPropagationStopped())break e;Rx(o,c,u),s=d}}}if(Ku)throw e=Yp,Ku=!1,Yp=null,e}function le(e,t){var n=t[n1];n===void 0&&(n=t[n1]=new Set);var i=e+"__bubble";n.has(i)||(e6(t,e,2,!1),n.add(i))}function U0(e,t,n){var i=0;t&&(i|=4),e6(n,e,i,t)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ba(e){if(!e[dl]){e[dl]=!0,ay.forEach(function(n){n!=="selectionchange"&&(a7.has(n)||U0(n,!1,e),U0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dl]||(t[dl]=!0,U0("selectionchange",!1,t))}}function e6(e,t,n,i){switch(Ny(t)){case 1:var o=wj;break;case 4:o=jj;break;default:o=Mm}n=o.bind(null,t,n,e),o=void 0,!Wp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function W0(e,t,n,i,o){var s=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=i.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;a=a.return}for(;c!==null;){if(a=ri(c),a===null)return;if(d=a.tag,d===5||d===6){i=s=a;continue e}c=c.parentNode}}i=i.return}ky(function(){var u=s,f=Tm(n),h=[];e:{var m=Zy.get(e);if(m!==void 0){var p=$m,b=e;switch(e){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":p=Nj;break;case"focusin":b="focus",p=O0;break;case"focusout":b="blur",p=O0;break;case"beforeblur":case"afterblur":p=O0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Sj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Vj;break;case Xy:case Qy:case Ky:p=Tj;break;case qy:p=Bj;break;case"scroll":p=kj;break;case"wheel":p=Uj;break;case"copy":case"cut":case"paste":p=Lj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sx}var w=(t&4)!==0,z=!w&&e==="scroll",v=w?m!==null?m+"Capture":null:m;w=[];for(var g=u,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,v!==null&&(S=pa(g,v),S!=null&&w.push(wa(g,S,y)))),z)break;g=g.return}0<w.length&&(m=new p(m,b,null,n,f),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&n!==Hp&&(b=n.relatedTarget||n.fromElement)&&(ri(b)||b[Fn]))break e;if((p||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=u,b=b?ri(b):null,b!==null&&(z=Pi(b),b!==z||b.tag!==5&&b.tag!==6)&&(b=null)):(p=null,b=u),p!==b)){if(w=kx,S="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Sx,S="onPointerLeave",v="onPointerEnter",g="pointer"),z=p==null?m:mo(p),y=b==null?m:mo(b),m=new w(S,g+"leave",p,n,f),m.target=z,m.relatedTarget=y,S=null,ri(f)===u&&(w=new w(v,g+"enter",b,n,f),w.target=y,w.relatedTarget=z,S=w),z=S,p&&b)t:{for(w=p,v=b,g=0,y=w;y;y=Li(y))g++;for(y=0,S=v;S;S=Li(S))y++;for(;0<g-y;)w=Li(w),g--;for(;0<y-g;)v=Li(v),y--;for(;g--;){if(w===v||v!==null&&w===v.alternate)break t;w=Li(w),v=Li(v)}w=null}else w=null;p!==null&&Dx(h,m,p,w,!1),b!==null&&z!==null&&Dx(h,z,b,w,!0)}}e:{if(m=u?mo(u):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var P=qj;else if(Tx(m))if(Hy)P=t7;else{P=Jj;var E=Zj}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=e7);if(P&&(P=P(e,u))){By(h,P,n,f);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Op(m,"number",m.value)}switch(E=u?mo(u):window,e){case"focusin":(Tx(E)||E.contentEditable==="true")&&(ho=E,Kp=u,Zs=null);break;case"focusout":Zs=Kp=ho=null;break;case"mousedown":qp=!0;break;case"contextmenu":case"mouseup":case"dragend":qp=!1,Ax(h,n,f);break;case"selectionchange":if(i7)break;case"keydown":case"keyup":Ax(h,n,f)}var T;if(Dm)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else fo?Vy(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Fy&&n.locale!=="ko"&&(fo||L!=="onCompositionStart"?L==="onCompositionEnd"&&fo&&(T=Oy()):(yr=f,Am="value"in yr?yr.value:yr.textContent,fo=!0)),E=tf(u,L),0<E.length&&(L=new Cx(L,e,null,n,f),h.push({event:L,listeners:E}),T?L.data=T:(T=_y(n),T!==null&&(L.data=T)))),(T=Yj?Gj(e,n):Xj(e,n))&&(u=tf(u,"onBeforeInput"),0<u.length&&(f=new Cx("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}Jy(h,t)})}function wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tf(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=pa(e,n),s!=null&&i.unshift(wa(e,s,o)),s=pa(e,t),s!=null&&i.push(wa(e,s,o))),e=e.return}return i}function Li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dx(e,t,n,i,o){for(var s=t._reactName,a=[];n!==null&&n!==i;){var c=n,d=c.alternate,u=c.stateNode;if(d!==null&&d===i)break;c.tag===5&&u!==null&&(c=u,o?(d=pa(n,s),d!=null&&a.unshift(wa(n,d,c))):o||(d=pa(n,s),d!=null&&a.push(wa(n,d,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var l7=/\r\n?/g,c7=/\u0000|\uFFFD/g;function Nx(e){return(typeof e=="string"?e:""+e).replace(l7,`
`).replace(c7,"")}function ul(e,t,n){if(t=Nx(t),Nx(e)!==t&&n)throw Error(A(425))}function nf(){}var Zp=null,Jp=null;function e1(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var t1=typeof setTimeout=="function"?setTimeout:void 0,d7=typeof clearTimeout=="function"?clearTimeout:void 0,Ox=typeof Promise=="function"?Promise:void 0,u7=typeof queueMicrotask=="function"?queueMicrotask:typeof Ox<"u"?function(e){return Ox.resolve(null).then(e).catch(f7)}:t1;function f7(e){setTimeout(function(){throw e})}function Y0(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),xa(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);xa(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ns=Math.random().toString(36).slice(2),mn="__reactFiber$"+ns,ja="__reactProps$"+ns,Fn="__reactContainer$"+ns,n1="__reactEvents$"+ns,h7="__reactListeners$"+ns,p7="__reactHandles$"+ns;function ri(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fx(e);e!==null;){if(n=e[mn])return n;e=Fx(e)}return t}e=n,n=e.parentNode}return null}function Va(e){return e=e[mn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Hf(e){return e[ja]||null}var r1=[],go=-1;function Or(e){return{current:e}}function de(e){0>go||(e.current=r1[go],r1[go]=null,go--)}function oe(e,t){go++,r1[go]=e.current,e.current=t}var Ir={},tt=Or(Ir),mt=Or(!1),mi=Ir;function Fo(e,t){var n=e.type.contextTypes;if(!n)return Ir;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function gt(e){return e=e.childContextTypes,e!=null}function rf(){de(mt),de(tt)}function Vx(e,t,n){if(tt.current!==Ir)throw Error(A(168));oe(tt,t),oe(mt,n)}function t6(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(A(108,Zw(e)||"Unknown",o));return be({},n,i)}function of(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ir,mi=tt.current,oe(tt,e),oe(mt,mt.current),!0}function _x(e,t,n){var i=e.stateNode;if(!i)throw Error(A(169));n?(e=t6(e,t,mi),i.__reactInternalMemoizedMergedChildContext=e,de(mt),de(tt),oe(tt,e)):de(mt),oe(mt,n)}var En=null,Uf=!1,G0=!1;function n6(e){En===null?En=[e]:En.push(e)}function m7(e){Uf=!0,n6(e)}function Fr(){if(!G0&&En!==null){G0=!0;var e=0,t=ie;try{var n=En;for(ie=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}En=null,Uf=!1}catch(o){throw En!==null&&(En=En.slice(e+1)),Py(Em,Fr),o}finally{ie=t,G0=!1}}return null}var xo=[],yo=0,sf=null,af=0,_t=[],Bt=0,gi=null,In=1,Mn="";function Zr(e,t){xo[yo++]=af,xo[yo++]=sf,sf=e,af=t}function r6(e,t,n){_t[Bt++]=In,_t[Bt++]=Mn,_t[Bt++]=gi,gi=e;var i=In;e=Mn;var o=32-nn(i)-1;i&=~(1<<o),n+=1;var s=32-nn(t)+o;if(30<s){var a=o-o%5;s=(i&(1<<a)-1).toString(32),i>>=a,o-=a,In=1<<32-nn(t)+o|n<<o|i,Mn=s+e}else In=1<<s|n<<o|i,Mn=e}function Om(e){e.return!==null&&(Zr(e,1),r6(e,1,0))}function Fm(e){for(;e===sf;)sf=xo[--yo],xo[yo]=null,af=xo[--yo],xo[yo]=null;for(;e===gi;)gi=_t[--Bt],_t[Bt]=null,Mn=_t[--Bt],_t[Bt]=null,In=_t[--Bt],_t[Bt]=null}var jt=null,wt=null,he=!1,Jt=null;function i6(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bx(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,wt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gi!==null?{id:In,overflow:Mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,wt=null,!0):!1;default:return!1}}function i1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function o1(e){if(he){var t=wt;if(t){var n=t;if(!Bx(e,t)){if(i1(e))throw Error(A(418));t=kr(n.nextSibling);var i=jt;t&&Bx(e,t)?i6(i,n):(e.flags=e.flags&-4097|2,he=!1,jt=e)}}else{if(i1(e))throw Error(A(418));e.flags=e.flags&-4097|2,he=!1,jt=e}}}function Hx(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function fl(e){if(e!==jt)return!1;if(!he)return Hx(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!e1(e.type,e.memoizedProps)),t&&(t=wt)){if(i1(e))throw o6(),Error(A(418));for(;t;)i6(e,t),t=kr(t.nextSibling)}if(Hx(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=kr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=jt?kr(e.stateNode.nextSibling):null;return!0}function o6(){for(var e=wt;e;)e=kr(e.nextSibling)}function Vo(){wt=jt=null,he=!1}function Vm(e){Jt===null?Jt=[e]:Jt.push(e)}var g7=Yn.ReactCurrentBatchConfig;function hs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var i=n.stateNode}if(!i)throw Error(A(147,e));var o=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=o.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function hl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ux(e){var t=e._init;return t(e._payload)}function s6(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function i(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function o(v,g){return v=Pr(v,g),v.index=0,v.sibling=null,v}function s(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,g,y,S){return g===null||g.tag!==6?(g=eh(y,v.mode,S),g.return=v,g):(g=o(g,y),g.return=v,g)}function d(v,g,y,S){var P=y.type;return P===uo?f(v,g,y.props.children,S,y.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fr&&Ux(P)===g.type)?(S=o(g,y.props),S.ref=hs(v,g,y),S.return=v,S):(S=$u(y.type,y.key,y.props,null,v.mode,S),S.ref=hs(v,g,y),S.return=v,S)}function u(v,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=th(y,v.mode,S),g.return=v,g):(g=o(g,y.children||[]),g.return=v,g)}function f(v,g,y,S,P){return g===null||g.tag!==7?(g=di(y,v.mode,S,P),g.return=v,g):(g=o(g,y),g.return=v,g)}function h(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=eh(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nl:return y=$u(g.type,g.key,g.props,null,v.mode,y),y.ref=hs(v,null,g),y.return=v,y;case co:return g=th(g,v.mode,y),g.return=v,g;case fr:var S=g._init;return h(v,S(g._payload),y)}if(Bs(g)||ls(g))return g=di(g,v.mode,y,null),g.return=v,g;hl(v,g)}return null}function m(v,g,y,S){var P=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:c(v,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return y.key===P?d(v,g,y,S):null;case co:return y.key===P?u(v,g,y,S):null;case fr:return P=y._init,m(v,g,P(y._payload),S)}if(Bs(y)||ls(y))return P!==null?null:f(v,g,y,S,null);hl(v,y)}return null}function p(v,g,y,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(y)||null,c(g,v,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:return v=v.get(S.key===null?y:S.key)||null,d(g,v,S,P);case co:return v=v.get(S.key===null?y:S.key)||null,u(g,v,S,P);case fr:var E=S._init;return p(v,g,y,E(S._payload),P)}if(Bs(S)||ls(S))return v=v.get(y)||null,f(g,v,S,P,null);hl(g,S)}return null}function b(v,g,y,S){for(var P=null,E=null,T=g,L=g=0,D=null;T!==null&&L<y.length;L++){T.index>L?(D=T,T=null):D=T.sibling;var N=m(v,T,y[L],S);if(N===null){T===null&&(T=D);break}e&&T&&N.alternate===null&&t(v,T),g=s(N,g,L),E===null?P=N:E.sibling=N,E=N,T=D}if(L===y.length)return n(v,T),he&&Zr(v,L),P;if(T===null){for(;L<y.length;L++)T=h(v,y[L],S),T!==null&&(g=s(T,g,L),E===null?P=T:E.sibling=T,E=T);return he&&Zr(v,L),P}for(T=i(v,T);L<y.length;L++)D=p(T,v,L,y[L],S),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?L:D.key),g=s(D,g,L),E===null?P=D:E.sibling=D,E=D);return e&&T.forEach(function(X){return t(v,X)}),he&&Zr(v,L),P}function w(v,g,y,S){var P=ls(y);if(typeof P!="function")throw Error(A(150));if(y=P.call(y),y==null)throw Error(A(151));for(var E=P=null,T=g,L=g=0,D=null,N=y.next();T!==null&&!N.done;L++,N=y.next()){T.index>L?(D=T,T=null):D=T.sibling;var X=m(v,T,N.value,S);if(X===null){T===null&&(T=D);break}e&&T&&X.alternate===null&&t(v,T),g=s(X,g,L),E===null?P=X:E.sibling=X,E=X,T=D}if(N.done)return n(v,T),he&&Zr(v,L),P;if(T===null){for(;!N.done;L++,N=y.next())N=h(v,N.value,S),N!==null&&(g=s(N,g,L),E===null?P=N:E.sibling=N,E=N);return he&&Zr(v,L),P}for(T=i(v,T);!N.done;L++,N=y.next())N=p(T,v,L,N.value,S),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?L:N.key),g=s(N,g,L),E===null?P=N:E.sibling=N,E=N);return e&&T.forEach(function(fe){return t(v,fe)}),he&&Zr(v,L),P}function z(v,g,y,S){if(typeof y=="object"&&y!==null&&y.type===uo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:e:{for(var P=y.key,E=g;E!==null;){if(E.key===P){if(P=y.type,P===uo){if(E.tag===7){n(v,E.sibling),g=o(E,y.props.children),g.return=v,v=g;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fr&&Ux(P)===E.type){n(v,E.sibling),g=o(E,y.props),g.ref=hs(v,E,y),g.return=v,v=g;break e}n(v,E);break}else t(v,E);E=E.sibling}y.type===uo?(g=di(y.props.children,v.mode,S,y.key),g.return=v,v=g):(S=$u(y.type,y.key,y.props,null,v.mode,S),S.ref=hs(v,g,y),S.return=v,v=S)}return a(v);case co:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=o(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=th(y,v.mode,S),g.return=v,v=g}return a(v);case fr:return E=y._init,z(v,g,E(y._payload),S)}if(Bs(y))return b(v,g,y,S);if(ls(y))return w(v,g,y,S);hl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=o(g,y),g.return=v,v=g):(n(v,g),g=eh(y,v.mode,S),g.return=v,v=g),a(v)):n(v,g)}return z}var _o=s6(!0),a6=s6(!1),lf=Or(null),cf=null,vo=null,_m=null;function Bm(){_m=vo=cf=null}function Hm(e){var t=lf.current;de(lf),e._currentValue=t}function s1(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ao(e,t){cf=e,_m=vo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(_m!==e)if(e={context:e,memoizedValue:t,next:null},vo===null){if(cf===null)throw Error(A(308));vo=e,cf.dependencies={lanes:0,firstContext:e}}else vo=vo.next=e;return t}var ii=null;function Um(e){ii===null?ii=[e]:ii.push(e)}function l6(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Um(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vn(e,i)}function Vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hr=!1;function Wm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c6(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,K&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Vn(e,n)}return o=i.interleaved,o===null?(t.next=t,Um(i)):(t.next=o.next,o.next=t),i.interleaved=t,Vn(e,n)}function Tu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lm(e,n)}}function Wx(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function df(e,t,n,i){var o=e.updateQueue;hr=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var d=c,u=d.next;d.next=null,a===null?s=u:a.next=u,a=d;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==a&&(c===null?f.firstBaseUpdate=u:c.next=u,f.lastBaseUpdate=d))}if(s!==null){var h=o.baseState;a=0,f=u=d=null,c=s;do{var m=c.lane,p=c.eventTime;if((i&m)===m){f!==null&&(f=f.next={eventTime:p,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,w=c;switch(m=t,p=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(p,h,m);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,m=typeof b=="function"?b.call(p,h,m):b,m==null)break e;h=be({},h,m);break e;case 2:hr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[c]:m.push(c))}else p={eventTime:p,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(u=f=p,d=h):f=f.next=p,a|=m;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;m=c,c=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(f===null&&(d=h),o.baseState=d,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);yi|=a,e.lanes=a,e.memoizedState=h}}function Yx(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(A(191,o));o.call(i)}}}var _a={},vn=Or(_a),ka=Or(_a),Ca=Or(_a);function oi(e){if(e===_a)throw Error(A(174));return e}function Ym(e,t){switch(oe(Ca,t),oe(ka,e),oe(vn,_a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vp(t,e)}de(vn),oe(vn,t)}function Bo(){de(vn),de(ka),de(Ca)}function d6(e){oi(Ca.current);var t=oi(vn.current),n=Vp(t,e.type);t!==n&&(oe(ka,e),oe(vn,n))}function Gm(e){ka.current===e&&(de(vn),de(ka))}var ge=Or(0);function uf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var X0=[];function Xm(){for(var e=0;e<X0.length;e++)X0[e]._workInProgressVersionPrimary=null;X0.length=0}var Eu=Yn.ReactCurrentDispatcher,Q0=Yn.ReactCurrentBatchConfig,xi=0,ye=null,Le=null,$e=null,ff=!1,Js=!1,Sa=0,x7=0;function Ge(){throw Error(A(321))}function Qm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Km(e,t,n,i,o,s){if(xi=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eu.current=e===null||e.memoizedState===null?w7:j7,e=n(i,o),Js){s=0;do{if(Js=!1,Sa=0,25<=s)throw Error(A(301));s+=1,$e=Le=null,t.updateQueue=null,Eu.current=k7,e=n(i,o)}while(Js)}if(Eu.current=hf,t=Le!==null&&Le.next!==null,xi=0,$e=Le=ye=null,ff=!1,t)throw Error(A(300));return e}function qm(){var e=Sa!==0;return Sa=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ye.memoizedState=$e=e:$e=$e.next=e,$e}function Yt(){if(Le===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=$e===null?ye.memoizedState:$e.next;if(t!==null)$e=t,Le=e;else{if(e===null)throw Error(A(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?ye.memoizedState=$e=e:$e=$e.next=e}return $e}function za(e,t){return typeof t=="function"?t(e):t}function K0(e){var t=Yt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var i=Le,o=i.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}i.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,i=i.baseState;var c=a=null,d=null,u=s;do{var f=u.lane;if((xi&f)===f)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=h,a=i):d=d.next=h,ye.lanes|=f,yi|=f}u=u.next}while(u!==null&&u!==s);d===null?a=i:d.next=c,sn(i,t.memoizedState)||(ht=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=d,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do s=o.lane,ye.lanes|=s,yi|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function q0(e){var t=Yt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);sn(s,t.memoizedState)||(ht=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function u6(){}function f6(e,t){var n=ye,i=Yt(),o=t(),s=!sn(i.memoizedState,o);if(s&&(i.memoizedState=o,ht=!0),i=i.queue,Zm(m6.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Pa(9,p6.bind(null,n,i,o,t),void 0,null),Ne===null)throw Error(A(349));xi&30||h6(n,t,o)}return o}function h6(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function p6(e,t,n,i){t.value=n,t.getSnapshot=i,g6(t)&&x6(e)}function m6(e,t,n){return n(function(){g6(t)&&x6(e)})}function g6(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function x6(e){var t=Vn(e,1);t!==null&&rn(t,e,1,-1)}function Gx(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=b7.bind(null,ye,e),[t.memoizedState,e]}function Pa(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function y6(){return Yt().memoizedState}function Lu(e,t,n,i){var o=fn();ye.flags|=e,o.memoizedState=Pa(1|t,n,void 0,i===void 0?null:i)}function Wf(e,t,n,i){var o=Yt();i=i===void 0?null:i;var s=void 0;if(Le!==null){var a=Le.memoizedState;if(s=a.destroy,i!==null&&Qm(i,a.deps)){o.memoizedState=Pa(t,n,s,i);return}}ye.flags|=e,o.memoizedState=Pa(1|t,n,s,i)}function Xx(e,t){return Lu(8390656,8,e,t)}function Zm(e,t){return Wf(2048,8,e,t)}function v6(e,t){return Wf(4,2,e,t)}function b6(e,t){return Wf(4,4,e,t)}function w6(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j6(e,t,n){return n=n!=null?n.concat([e]):null,Wf(4,4,w6.bind(null,t,e),n)}function Jm(){}function k6(e,t){var n=Yt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Qm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function C6(e,t){var n=Yt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Qm(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function S6(e,t,n){return xi&21?(sn(n,t)||(n=Ly(),ye.lanes|=n,yi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function y7(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var i=Q0.transition;Q0.transition={};try{e(!1),t()}finally{ie=n,Q0.transition=i}}function z6(){return Yt().memoizedState}function v7(e,t,n){var i=zr(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P6(e))T6(t,n);else if(n=l6(e,t,n,i),n!==null){var o=at();rn(n,e,i,o),E6(n,t,i)}}function b7(e,t,n){var i=zr(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P6(e))T6(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,n);if(o.hasEagerState=!0,o.eagerState=c,sn(c,a)){var d=t.interleaved;d===null?(o.next=o,Um(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=l6(e,t,o,i),n!==null&&(o=at(),rn(n,e,i,o),E6(n,t,i))}}function P6(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function T6(e,t){Js=ff=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E6(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lm(e,n)}}var hf={readContext:Wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},w7={readContext:Wt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:Xx,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lu(4194308,4,w6.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lu(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=fn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=v7.bind(null,ye,e),[i.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Gx,useDebugValue:Jm,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Gx(!1),t=e[0];return e=y7.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ye,o=fn();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ne===null)throw Error(A(349));xi&30||h6(i,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Xx(m6.bind(null,i,s,e),[e]),i.flags|=2048,Pa(9,p6.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=fn(),t=Ne.identifierPrefix;if(he){var n=Mn,i=In;n=(i&~(1<<32-nn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},j7={readContext:Wt,useCallback:k6,useContext:Wt,useEffect:Zm,useImperativeHandle:j6,useInsertionEffect:v6,useLayoutEffect:b6,useMemo:C6,useReducer:K0,useRef:y6,useState:function(){return K0(za)},useDebugValue:Jm,useDeferredValue:function(e){var t=Yt();return S6(t,Le.memoizedState,e)},useTransition:function(){var e=K0(za)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:u6,useSyncExternalStore:f6,useId:z6,unstable_isNewReconciler:!1},k7={readContext:Wt,useCallback:k6,useContext:Wt,useEffect:Zm,useImperativeHandle:j6,useInsertionEffect:v6,useLayoutEffect:b6,useMemo:C6,useReducer:q0,useRef:y6,useState:function(){return q0(za)},useDebugValue:Jm,useDeferredValue:function(e){var t=Yt();return Le===null?t.memoizedState=e:S6(t,Le.memoizedState,e)},useTransition:function(){var e=q0(za)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:u6,useSyncExternalStore:f6,useId:z6,unstable_isNewReconciler:!1};function qt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function a1(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yf={isMounted:function(e){return(e=e._reactInternals)?Pi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=at(),o=zr(e),s=$n(i,o);s.payload=t,n!=null&&(s.callback=n),t=Cr(e,s,o),t!==null&&(rn(t,e,o,i),Tu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=at(),o=zr(e),s=$n(i,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Cr(e,s,o),t!==null&&(rn(t,e,o,i),Tu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),i=zr(e),o=$n(n,i);o.tag=2,t!=null&&(o.callback=t),t=Cr(e,o,i),t!==null&&(rn(t,e,i,n),Tu(t,e,i))}};function Qx(e,t,n,i,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,a):t.prototype&&t.prototype.isPureReactComponent?!va(n,i)||!va(o,s):!0}function L6(e,t,n){var i=!1,o=Ir,s=t.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(o=gt(t)?mi:tt.current,i=t.contextTypes,s=(i=i!=null)?Fo(e,o):Ir),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yf,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Kx(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Yf.enqueueReplaceState(t,t.state,null)}function l1(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wm(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Wt(s):(s=gt(t)?mi:tt.current,o.context=Fo(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(a1(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yf.enqueueReplaceState(o,o.state,null),df(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ho(e,t){try{var n="",i=t;do n+=qw(i),i=i.return;while(i);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Z0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function c1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var C7=typeof WeakMap=="function"?WeakMap:Map;function I6(e,t,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){mf||(mf=!0,v1=i),c1(e,t)},n}function M6(e,t,n){n=$n(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){c1(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){c1(e,t),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qx(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new C7;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=O7.bind(null,e,t,n),t.then(e,e))}function Zx(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jx(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$n(-1,1),t.tag=2,Cr(n,t,1))),n.lanes|=1),e)}var S7=Yn.ReactCurrentOwner,ht=!1;function st(e,t,n,i){t.child=e===null?a6(t,null,n,i):_o(t,e.child,n,i)}function e2(e,t,n,i,o){n=n.render;var s=t.ref;return Ao(t,o),i=Km(e,t,n,i,s,o),n=qm(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_n(e,t,o)):(he&&n&&Om(t),t.flags|=1,st(e,t,i,o),t.child)}function t2(e,t,n,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!ag(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,A6(e,t,s,i,o)):(e=$u(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(a,i)&&e.ref===t.ref)return _n(e,t,o)}return t.flags|=1,e=Pr(s,i),e.ref=t.ref,e.return=t,t.child=e}function A6(e,t,n,i,o){if(e!==null){var s=e.memoizedProps;if(va(s,i)&&e.ref===t.ref)if(ht=!1,t.pendingProps=i=s,(e.lanes&o)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,_n(e,t,o)}return d1(e,t,n,i,o)}function $6(e,t,n){var i=t.pendingProps,o=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(wo,bt),bt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(wo,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,oe(wo,bt),bt|=i}else s!==null?(i=s.baseLanes|n,t.memoizedState=null):i=n,oe(wo,bt),bt|=i;return st(e,t,o,n),t.child}function R6(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function d1(e,t,n,i,o){var s=gt(n)?mi:tt.current;return s=Fo(t,s),Ao(t,o),n=Km(e,t,n,i,s,o),i=qm(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_n(e,t,o)):(he&&i&&Om(t),t.flags|=1,st(e,t,n,o),t.child)}function n2(e,t,n,i,o){if(gt(n)){var s=!0;of(t)}else s=!1;if(Ao(t,o),t.stateNode===null)Iu(e,t),L6(t,n,i),l1(t,n,i,o),i=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=gt(n)?mi:tt.current,u=Fo(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==i||d!==u)&&Kx(t,a,i,u),hr=!1;var m=t.memoizedState;a.state=m,df(t,i,a,o),d=t.memoizedState,c!==i||m!==d||mt.current||hr?(typeof f=="function"&&(a1(t,n,f,i),d=t.memoizedState),(c=hr||Qx(t,n,c,i,m,d,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=u,i=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,c6(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:qt(t.type,c),a.props=u,h=t.pendingProps,m=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Wt(d):(d=gt(n)?mi:tt.current,d=Fo(t,d));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==h||m!==d)&&Kx(t,a,i,d),hr=!1,m=t.memoizedState,a.state=m,df(t,i,a,o);var b=t.memoizedState;c!==h||m!==b||mt.current||hr?(typeof p=="function"&&(a1(t,n,p,i),b=t.memoizedState),(u=hr||Qx(t,n,u,i,m,b,d)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,b,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,b,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),a.props=i,a.state=b,a.context=d,i=u):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return u1(e,t,n,i,s,o)}function u1(e,t,n,i,o,s){R6(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return o&&_x(t,n,!1),_n(e,t,s);i=t.stateNode,S7.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=_o(t,e.child,null,s),t.child=_o(t,null,c,s)):st(e,t,c,s),t.memoizedState=i.state,o&&_x(t,n,!0),t.child}function D6(e){var t=e.stateNode;t.pendingContext?Vx(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vx(e,t.context,!1),Ym(e,t.containerInfo)}function r2(e,t,n,i,o){return Vo(),Vm(o),t.flags|=256,st(e,t,n,i),t.child}var f1={dehydrated:null,treeContext:null,retryLane:0};function h1(e){return{baseLanes:e,cachePool:null,transitions:null}}function N6(e,t,n){var i=t.pendingProps,o=ge.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ge,o&1),e===null)return o1(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,s?(i=t.mode,s=t.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Qf(a,i,0,null),e=di(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=h1(n),t.memoizedState=f1,e):eg(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return z7(e,t,a,i,c,o,n);if(s){s=i.fallback,a=t.mode,o=e.child,c=o.sibling;var d={mode:"hidden",children:i.children};return!(a&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=Pr(o,d),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?s=Pr(c,s):(s=di(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,a=e.child.memoizedState,a=a===null?h1(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=f1,i}return s=e.child,e=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function eg(e,t){return t=Qf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pl(e,t,n,i){return i!==null&&Vm(i),_o(t,e.child,null,n),e=eg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z7(e,t,n,i,o,s,a){if(n)return t.flags&256?(t.flags&=-257,i=Z0(Error(A(422))),pl(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,o=t.mode,i=Qf({mode:"visible",children:i.children},o,0,null),s=di(s,o,a,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,t.mode&1&&_o(t,e.child,null,a),t.child.memoizedState=h1(a),t.memoizedState=f1,s);if(!(t.mode&1))return pl(e,t,a,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,s=Error(A(419)),i=Z0(s,i,void 0),pl(e,t,a,i)}if(c=(a&e.childLanes)!==0,ht||c){if(i=Ne,i!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Vn(e,o),rn(i,e,o,-1))}return sg(),i=Z0(Error(A(421))),pl(e,t,a,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=F7.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,wt=kr(o.nextSibling),jt=t,he=!0,Jt=null,e!==null&&(_t[Bt++]=In,_t[Bt++]=Mn,_t[Bt++]=gi,In=e.id,Mn=e.overflow,gi=t),t=eg(t,i.children),t.flags|=4096,t)}function i2(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),s1(e.return,t,n)}function J0(e,t,n,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=o)}function O6(e,t,n){var i=t.pendingProps,o=i.revealOrder,s=i.tail;if(st(e,t,i.children,n),i=ge.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i2(e,n,t);else if(e.tag===19)i2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(oe(ge,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uf(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),J0(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uf(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}J0(t,!0,n,null,s);break;case"together":J0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Iu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function P7(e,t,n){switch(t.tag){case 3:D6(t),Vo();break;case 5:d6(t);break;case 1:gt(t.type)&&of(t);break;case 4:Ym(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;oe(lf,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(oe(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?N6(e,t,n):(oe(ge,ge.current&1),e=_n(e,t,n),e!==null?e.sibling:null);oe(ge,ge.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return O6(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ge,ge.current),i)break;return null;case 22:case 23:return t.lanes=0,$6(e,t,n)}return _n(e,t,n)}var F6,p1,V6,_6;F6=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};p1=function(){};V6=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,oi(vn.current);var s=null;switch(n){case"input":o=Dp(e,o),i=Dp(e,i),s=[];break;case"select":o=be({},o,{value:void 0}),i=be({},i,{value:void 0}),s=[];break;case"textarea":o=Fp(e,o),i=Fp(e,i),s=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=nf)}_p(n,i);var a;n=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var d=i[u];if(c=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&le("scroll",e),s||c===d||(s=[])):(s=s||[]).push(u,d))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};_6=function(e,t,n,i){n!==i&&(t.flags|=4)};function ps(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function T7(e,t,n){var i=t.pendingProps;switch(Fm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return gt(t.type)&&rf(),Xe(t),null;case 3:return i=t.stateNode,Bo(),de(mt),de(tt),Xm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(j1(Jt),Jt=null))),p1(e,t),Xe(t),null;case 5:Gm(t);var o=oi(Ca.current);if(n=t.type,e!==null&&t.stateNode!=null)V6(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(A(166));return Xe(t),null}if(e=oi(vn.current),fl(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[mn]=t,i[ja]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",i),le("close",i);break;case"iframe":case"object":case"embed":le("load",i);break;case"video":case"audio":for(o=0;o<Us.length;o++)le(Us[o],i);break;case"source":le("error",i);break;case"img":case"image":case"link":le("error",i),le("load",i);break;case"details":le("toggle",i);break;case"input":hx(i,s),le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},le("invalid",i);break;case"textarea":mx(i,s),le("invalid",i)}_p(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?i.textContent!==c&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,c,e),o=["children",""+c]):fa.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&le("scroll",i)}switch(n){case"input":rl(i),px(i,s,!0);break;case"textarea":rl(i),gx(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nf)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=my(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(n,{is:i.is}):(e=a.createElement(n),n==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,n),e[mn]=t,e[ja]=i,F6(e,t,!1,!1),t.stateNode=e;e:{switch(a=Bp(n,i),n){case"dialog":le("cancel",e),le("close",e),o=i;break;case"iframe":case"object":case"embed":le("load",e),o=i;break;case"video":case"audio":for(o=0;o<Us.length;o++)le(Us[o],e);o=i;break;case"source":le("error",e),o=i;break;case"img":case"image":case"link":le("error",e),le("load",e),o=i;break;case"details":le("toggle",e),o=i;break;case"input":hx(e,i),o=Dp(e,i),le("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=be({},i,{value:void 0}),le("invalid",e);break;case"textarea":mx(e,i),o=Fp(e,i),le("invalid",e);break;default:o=i}_p(n,o),c=o;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?yy(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&gy(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ha(e,d):typeof d=="number"&&ha(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?d!=null&&s==="onScroll"&&le("scroll",e):d!=null&&Cm(e,s,d,a))}switch(n){case"input":rl(e),px(e,i,!1);break;case"textarea":rl(e),gx(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Lr(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?Eo(e,!!i.multiple,s,!1):i.defaultValue!=null&&Eo(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=nf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)_6(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(A(166));if(n=oi(Ca.current),oi(vn.current),fl(t)){if(i=t.stateNode,n=t.memoizedProps,i[mn]=t,(s=i.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ul(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mn]=t,t.stateNode=i}return Xe(t),null;case 13:if(de(ge),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&wt!==null&&t.mode&1&&!(t.flags&128))o6(),Vo(),t.flags|=98560,s=!1;else if(s=fl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[mn]=t}else Vo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),s=!1}else Jt!==null&&(j1(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Ie===0&&(Ie=3):sg())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Bo(),p1(e,t),e===null&&ba(t.stateNode.containerInfo),Xe(t),null;case 10:return Hm(t.type._context),Xe(t),null;case 17:return gt(t.type)&&rf(),Xe(t),null;case 19:if(de(ge),s=t.memoizedState,s===null)return Xe(t),null;if(i=(t.flags&128)!==0,a=s.rendering,a===null)if(i)ps(s,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=uf(e),a!==null){for(t.flags|=128,ps(s,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ge,ge.current&1|2),t.child}e=e.sibling}s.tail!==null&&ze()>Uo&&(t.flags|=128,i=!0,ps(s,!1),t.lanes=4194304)}else{if(!i)if(e=uf(a),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return Xe(t),null}else 2*ze()-s.renderingStartTime>Uo&&n!==1073741824&&(t.flags|=128,i=!0,ps(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ze(),t.sibling=null,n=ge.current,oe(ge,i?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return og(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?bt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function E7(e,t){switch(Fm(t),t.tag){case 1:return gt(t.type)&&rf(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bo(),de(mt),de(tt),Xm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gm(t),null;case 13:if(de(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ge),null;case 4:return Bo(),null;case 10:return Hm(t.type._context),null;case 22:case 23:return og(),null;case 24:return null;default:return null}}var ml=!1,et=!1,L7=typeof WeakSet=="function"?WeakSet:Set,O=null;function bo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ke(e,t,i)}else n.current=null}function m1(e,t,n){try{n()}catch(i){ke(e,t,i)}}var o2=!1;function I7(e,t){if(Zp=Ju,e=Yy(),Nm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var p;h!==n||o!==0&&h.nodeType!==3||(c=a+o),h!==s||i!==0&&h.nodeType!==3||(d=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)m=h,h=p;for(;;){if(h===e)break t;if(m===n&&++u===o&&(c=a),m===s&&++f===i&&(d=a),(p=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=p}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jp={focusedElem:e,selectionRange:n},Ju=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,z=b.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:qt(t.type,w),z);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return b=o2,o2=!1,b}function ea(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&m1(t,n,s)}o=o.next}while(o!==i)}}function Gf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function g1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function B6(e){var t=e.alternate;t!==null&&(e.alternate=null,B6(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[ja],delete t[n1],delete t[h7],delete t[p7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function H6(e){return e.tag===5||e.tag===3||e.tag===4}function s2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H6(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function x1(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nf));else if(i!==4&&(e=e.child,e!==null))for(x1(e,t,n),e=e.sibling;e!==null;)x1(e,t,n),e=e.sibling}function y1(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(y1(e,t,n),e=e.sibling;e!==null;)y1(e,t,n),e=e.sibling}var _e=null,Zt=!1;function Qn(e,t,n){for(n=n.child;n!==null;)U6(e,t,n),n=n.sibling}function U6(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Ff,n)}catch{}switch(n.tag){case 5:et||bo(n,t);case 6:var i=_e,o=Zt;_e=null,Qn(e,t,n),_e=i,Zt=o,_e!==null&&(Zt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Zt?(e=_e,n=n.stateNode,e.nodeType===8?Y0(e.parentNode,n):e.nodeType===1&&Y0(e,n),xa(e)):Y0(_e,n.stateNode));break;case 4:i=_e,o=Zt,_e=n.stateNode.containerInfo,Zt=!0,Qn(e,t,n),_e=i,Zt=o;break;case 0:case 11:case 14:case 15:if(!et&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&m1(n,t,a),o=o.next}while(o!==i)}Qn(e,t,n);break;case 1:if(!et&&(bo(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){ke(n,t,c)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(et=(i=et)||n.memoizedState!==null,Qn(e,t,n),et=i):Qn(e,t,n);break;default:Qn(e,t,n)}}function a2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new L7),t.forEach(function(i){var o=V7.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,Zt=!1;break e;case 3:_e=c.stateNode.containerInfo,Zt=!0;break e;case 4:_e=c.stateNode.containerInfo,Zt=!0;break e}c=c.return}if(_e===null)throw Error(A(160));U6(s,a,o),_e=null,Zt=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(u){ke(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)W6(t,e),t=t.sibling}function W6(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),un(e),i&4){try{ea(3,e,e.return),Gf(3,e)}catch(w){ke(e,e.return,w)}try{ea(5,e,e.return)}catch(w){ke(e,e.return,w)}}break;case 1:Qt(t,e),un(e),i&512&&n!==null&&bo(n,n.return);break;case 5:if(Qt(t,e),un(e),i&512&&n!==null&&bo(n,n.return),e.flags&32){var o=e.stateNode;try{ha(o,"")}catch(w){ke(e,e.return,w)}}if(i&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&hy(o,s),Bp(c,a);var u=Bp(c,s);for(a=0;a<d.length;a+=2){var f=d[a],h=d[a+1];f==="style"?yy(o,h):f==="dangerouslySetInnerHTML"?gy(o,h):f==="children"?ha(o,h):Cm(o,f,h,u)}switch(c){case"input":Np(o,s);break;case"textarea":py(o,s);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Eo(o,!!s.multiple,p,!1):m!==!!s.multiple&&(s.defaultValue!=null?Eo(o,!!s.multiple,s.defaultValue,!0):Eo(o,!!s.multiple,s.multiple?[]:"",!1))}o[ja]=s}catch(w){ke(e,e.return,w)}}break;case 6:if(Qt(t,e),un(e),i&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(w){ke(e,e.return,w)}}break;case 3:if(Qt(t,e),un(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(t.containerInfo)}catch(w){ke(e,e.return,w)}break;case 4:Qt(t,e),un(e);break;case 13:Qt(t,e),un(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(rg=ze())),i&4&&a2(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||f,Qt(t,e),et=u):Qt(t,e),un(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(h=O=f;O!==null;){switch(m=O,p=m.child,m.tag){case 0:case 11:case 14:case 15:ea(4,m,m.return);break;case 1:bo(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){i=m,n=m.return;try{t=i,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){ke(i,n,w)}}break;case 5:bo(m,m.return);break;case 22:if(m.memoizedState!==null){c2(h);continue}}p!==null?(p.return=m,O=p):c2(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=h.stateNode,d=h.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=xy("display",a))}catch(w){ke(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ke(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qt(t,e),un(e),i&4&&a2(e);break;case 21:break;default:Qt(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(H6(n)){var i=n;break e}n=n.return}throw Error(A(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(ha(o,""),i.flags&=-33);var s=s2(e);y1(e,s,o);break;case 3:case 4:var a=i.stateNode.containerInfo,c=s2(e);x1(e,c,a);break;default:throw Error(A(161))}}catch(d){ke(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M7(e,t,n){O=e,Y6(e)}function Y6(e,t,n){for(var i=(e.mode&1)!==0;O!==null;){var o=O,s=o.child;if(o.tag===22&&i){var a=o.memoizedState!==null||ml;if(!a){var c=o.alternate,d=c!==null&&c.memoizedState!==null||et;c=ml;var u=et;if(ml=a,(et=d)&&!u)for(O=o;O!==null;)a=O,d=a.child,a.tag===22&&a.memoizedState!==null?d2(o):d!==null?(d.return=a,O=d):d2(o);for(;s!==null;)O=s,Y6(s),s=s.sibling;O=o,ml=c,et=u}l2(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,O=s):l2(e)}}function l2(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Gf(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qt(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Yx(t,s,i);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yx(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}et||t.flags&512&&g1(t)}catch(m){ke(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function c2(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function d2(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gf(4,t)}catch(d){ke(t,n,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(d){ke(t,o,d)}}var s=t.return;try{g1(t)}catch(d){ke(t,s,d)}break;case 5:var a=t.return;try{g1(t)}catch(d){ke(t,a,d)}}}catch(d){ke(t,t.return,d)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var A7=Math.ceil,pf=Yn.ReactCurrentDispatcher,tg=Yn.ReactCurrentOwner,Ut=Yn.ReactCurrentBatchConfig,K=0,Ne=null,Ee=null,He=0,bt=0,wo=Or(0),Ie=0,Ta=null,yi=0,Xf=0,ng=0,ta=null,ft=null,rg=0,Uo=1/0,Pn=null,mf=!1,v1=null,Sr=null,gl=!1,vr=null,gf=0,na=0,b1=null,Mu=-1,Au=0;function at(){return K&6?ze():Mu!==-1?Mu:Mu=ze()}function zr(e){return e.mode&1?K&2&&He!==0?He&-He:g7.transition!==null?(Au===0&&(Au=Ly()),Au):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Ny(e.type)),e):1}function rn(e,t,n,i){if(50<na)throw na=0,b1=null,Error(A(185));Oa(e,n,i),(!(K&2)||e!==Ne)&&(e===Ne&&(!(K&2)&&(Xf|=n),Ie===4&&gr(e,He)),xt(e,i),n===1&&K===0&&!(t.mode&1)&&(Uo=ze()+500,Uf&&Fr()))}function xt(e,t){var n=e.callbackNode;gj(e,t);var i=Zu(e,e===Ne?He:0);if(i===0)n!==null&&vx(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&vx(n),t===1)e.tag===0?m7(u2.bind(null,e)):n6(u2.bind(null,e)),u7(function(){!(K&6)&&Fr()}),n=null;else{switch(Iy(i)){case 1:n=Em;break;case 4:n=Ty;break;case 16:n=qu;break;case 536870912:n=Ey;break;default:n=qu}n=ev(n,G6.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function G6(e,t){if(Mu=-1,Au=0,K&6)throw Error(A(327));var n=e.callbackNode;if($o()&&e.callbackNode!==n)return null;var i=Zu(e,e===Ne?He:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=xf(e,i);else{t=i;var o=K;K|=2;var s=Q6();(Ne!==e||He!==t)&&(Pn=null,Uo=ze()+500,ci(e,t));do try{D7();break}catch(c){X6(e,c)}while(1);Bm(),pf.current=s,K=o,Ee!==null?t=0:(Ne=null,He=0,t=Ie)}if(t!==0){if(t===2&&(o=Gp(e),o!==0&&(i=o,t=w1(e,o))),t===1)throw n=Ta,ci(e,0),gr(e,i),xt(e,ze()),n;if(t===6)gr(e,i);else{if(o=e.current.alternate,!(i&30)&&!$7(o)&&(t=xf(e,i),t===2&&(s=Gp(e),s!==0&&(i=s,t=w1(e,s))),t===1))throw n=Ta,ci(e,0),gr(e,i),xt(e,ze()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(A(345));case 2:Jr(e,ft,Pn);break;case 3:if(gr(e,i),(i&130023424)===i&&(t=rg+500-ze(),10<t)){if(Zu(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){at(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=t1(Jr.bind(null,e,ft,Pn),t);break}Jr(e,ft,Pn);break;case 4:if(gr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var a=31-nn(i);s=1<<a,a=t[a],a>o&&(o=a),i&=~s}if(i=o,i=ze()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*A7(i/1960))-i,10<i){e.timeoutHandle=t1(Jr.bind(null,e,ft,Pn),i);break}Jr(e,ft,Pn);break;case 5:Jr(e,ft,Pn);break;default:throw Error(A(329))}}}return xt(e,ze()),e.callbackNode===n?G6.bind(null,e):null}function w1(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(ci(e,t).flags|=256),e=xf(e,t),e!==2&&(t=ft,ft=n,t!==null&&j1(t)),e}function j1(e){ft===null?ft=e:ft.push.apply(ft,e)}function $7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],s=o.getSnapshot;o=o.value;try{if(!sn(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t){for(t&=~ng,t&=~Xf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),i=1<<n;e[n]=-1,t&=~i}}function u2(e){if(K&6)throw Error(A(327));$o();var t=Zu(e,0);if(!(t&1))return xt(e,ze()),null;var n=xf(e,t);if(e.tag!==0&&n===2){var i=Gp(e);i!==0&&(t=i,n=w1(e,i))}if(n===1)throw n=Ta,ci(e,0),gr(e,t),xt(e,ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,ft,Pn),xt(e,ze()),null}function ig(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Uo=ze()+500,Uf&&Fr())}}function vi(e){vr!==null&&vr.tag===0&&!(K&6)&&$o();var t=K;K|=1;var n=Ut.transition,i=ie;try{if(Ut.transition=null,ie=1,e)return e()}finally{ie=i,Ut.transition=n,K=t,!(K&6)&&Fr()}}function og(){bt=wo.current,de(wo)}function ci(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d7(n)),Ee!==null)for(n=Ee.return;n!==null;){var i=n;switch(Fm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rf();break;case 3:Bo(),de(mt),de(tt),Xm();break;case 5:Gm(i);break;case 4:Bo();break;case 13:de(ge);break;case 19:de(ge);break;case 10:Hm(i.type._context);break;case 22:case 23:og()}n=n.return}if(Ne=e,Ee=e=Pr(e.current,null),He=bt=t,Ie=0,Ta=null,ng=Xf=yi=0,ft=ta=null,ii!==null){for(t=0;t<ii.length;t++)if(n=ii[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,i.next=a}n.pending=i}ii=null}return e}function X6(e,t){do{var n=Ee;try{if(Bm(),Eu.current=hf,ff){for(var i=ye.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}ff=!1}if(xi=0,$e=Le=ye=null,Js=!1,Sa=0,tg.current=null,n===null||n.return===null){Ie=1,Ta=t,Ee=null;break}e:{var s=e,a=n.return,c=n,d=t;if(t=He,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,f=c,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Zx(a);if(p!==null){p.flags&=-257,Jx(p,a,c,s,t),p.mode&1&&qx(s,u,t),t=p,d=u;var b=t.updateQueue;if(b===null){var w=new Set;w.add(d),t.updateQueue=w}else b.add(d);break e}else{if(!(t&1)){qx(s,u,t),sg();break e}d=Error(A(426))}}else if(he&&c.mode&1){var z=Zx(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Jx(z,a,c,s,t),Vm(Ho(d,c));break e}}s=d=Ho(d,c),Ie!==4&&(Ie=2),ta===null?ta=[s]:ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=I6(s,d,t);Wx(s,v);break e;case 1:c=d;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=M6(s,c,t);Wx(s,S);break e}}s=s.return}while(s!==null)}q6(n)}catch(P){t=P,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function Q6(){var e=pf.current;return pf.current=hf,e===null?hf:e}function sg(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ne===null||!(yi&268435455)&&!(Xf&268435455)||gr(Ne,He)}function xf(e,t){var n=K;K|=2;var i=Q6();(Ne!==e||He!==t)&&(Pn=null,ci(e,t));do try{R7();break}catch(o){X6(e,o)}while(1);if(Bm(),K=n,pf.current=i,Ee!==null)throw Error(A(261));return Ne=null,He=0,Ie}function R7(){for(;Ee!==null;)K6(Ee)}function D7(){for(;Ee!==null&&!aj();)K6(Ee)}function K6(e){var t=J6(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?q6(e):Ee=t,tg.current=null}function q6(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=E7(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ee=null;return}}else if(n=T7(n,t,bt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ie===0&&(Ie=5)}function Jr(e,t,n){var i=ie,o=Ut.transition;try{Ut.transition=null,ie=1,N7(e,t,n,i)}finally{Ut.transition=o,ie=i}return null}function N7(e,t,n,i){do $o();while(vr!==null);if(K&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(xj(e,s),e===Ne&&(Ee=Ne=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,ev(qu,function(){return $o(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var a=ie;ie=1;var c=K;K|=4,tg.current=null,I7(e,n),W6(n,e),r7(Jp),Ju=!!Zp,Jp=Zp=null,e.current=n,M7(n),lj(),K=c,ie=a,Ut.transition=s}else e.current=n;if(gl&&(gl=!1,vr=e,gf=o),s=e.pendingLanes,s===0&&(Sr=null),uj(n.stateNode),xt(e,ze()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(mf)throw mf=!1,e=v1,v1=null,e;return gf&1&&e.tag!==0&&$o(),s=e.pendingLanes,s&1?e===b1?na++:(na=0,b1=e):na=0,Fr(),null}function $o(){if(vr!==null){var e=Iy(gf),t=Ut.transition,n=ie;try{if(Ut.transition=null,ie=16>e?16:e,vr===null)var i=!1;else{if(e=vr,vr=null,gf=0,K&6)throw Error(A(331));var o=K;for(K|=4,O=e.current;O!==null;){var s=O,a=s.child;if(O.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var h=f.child;if(h!==null)h.return=f,O=h;else for(;O!==null;){f=O;var m=f.sibling,p=f.return;if(B6(f),f===u){O=null;break}if(m!==null){m.return=p,O=m;break}O=p}}}var b=s.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,O=a;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,O=v;break e}O=s.return}}var g=e.current;for(O=g;O!==null;){a=O;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,O=y;else e:for(a=g;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Gf(9,c)}}catch(P){ke(c,c.return,P)}if(c===a){O=null;break e}var S=c.sibling;if(S!==null){S.return=c.return,O=S;break e}O=c.return}}if(K=o,Fr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Ff,e)}catch{}i=!0}return i}finally{ie=n,Ut.transition=t}}return!1}function f2(e,t,n){t=Ho(n,t),t=I6(e,t,1),e=Cr(e,t,1),t=at(),e!==null&&(Oa(e,1,t),xt(e,t))}function ke(e,t,n){if(e.tag===3)f2(e,e,n);else for(;t!==null;){if(t.tag===3){f2(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){e=Ho(n,e),e=M6(t,e,1),t=Cr(t,e,1),e=at(),t!==null&&(Oa(t,1,e),xt(t,e));break}}t=t.return}}function O7(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(He&n)===n&&(Ie===4||Ie===3&&(He&130023424)===He&&500>ze()-rg?ci(e,0):ng|=n),xt(e,t)}function Z6(e,t){t===0&&(e.mode&1?(t=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):t=1);var n=at();e=Vn(e,t),e!==null&&(Oa(e,t,n),xt(e,n))}function F7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Z6(e,n)}function V7(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(t),Z6(e,n)}var J6;J6=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,P7(e,t,n);ht=!!(e.flags&131072)}else ht=!1,he&&t.flags&1048576&&r6(t,af,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Iu(e,t),e=t.pendingProps;var o=Fo(t,tt.current);Ao(t,n),o=Km(null,t,i,e,o,n);var s=qm();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(i)?(s=!0,of(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wm(t),o.updater=Yf,t.stateNode=o,o._reactInternals=t,l1(t,i,e,n),t=u1(null,t,i,!0,s,n)):(t.tag=0,he&&s&&Om(t),st(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Iu(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=B7(i),e=qt(i,e),o){case 0:t=d1(null,t,i,e,n);break e;case 1:t=n2(null,t,i,e,n);break e;case 11:t=e2(null,t,i,e,n);break e;case 14:t=t2(null,t,i,qt(i.type,e),n);break e}throw Error(A(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:qt(i,o),d1(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:qt(i,o),n2(e,t,i,o,n);case 3:e:{if(D6(t),e===null)throw Error(A(387));i=t.pendingProps,s=t.memoizedState,o=s.element,c6(e,t),df(t,i,null,n);var a=t.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Ho(Error(A(423)),t),t=r2(e,t,i,n,o);break e}else if(i!==o){o=Ho(Error(A(424)),t),t=r2(e,t,i,n,o);break e}else for(wt=kr(t.stateNode.containerInfo.firstChild),jt=t,he=!0,Jt=null,n=a6(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),i===o){t=_n(e,t,n);break e}st(e,t,i,n)}t=t.child}return t;case 5:return d6(t),e===null&&o1(t),i=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,e1(i,o)?a=null:s!==null&&e1(i,s)&&(t.flags|=32),R6(e,t),st(e,t,a,n),t.child;case 6:return e===null&&o1(t),null;case 13:return N6(e,t,n);case 4:return Ym(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_o(t,null,i,n):st(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:qt(i,o),e2(e,t,i,o,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,oe(lf,i._currentValue),i._currentValue=a,s!==null)if(sn(s.value,a)){if(s.children===o.children&&!mt.current){t=_n(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===i){if(s.tag===1){d=$n(-1,n&-n),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?d.next=d:(d.next=f.next,f.next=d),u.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),s1(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(A(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),s1(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}st(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Ao(t,n),o=Wt(o),i=i(o),t.flags|=1,st(e,t,i,n),t.child;case 14:return i=t.type,o=qt(i,t.pendingProps),o=qt(i.type,o),t2(e,t,i,o,n);case 15:return A6(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:qt(i,o),Iu(e,t),t.tag=1,gt(i)?(e=!0,of(t)):e=!1,Ao(t,n),L6(t,i,o),l1(t,i,o,n),u1(null,t,i,!0,e,n);case 19:return O6(e,t,n);case 22:return $6(e,t,n)}throw Error(A(156,t.tag))};function ev(e,t){return Py(e,t)}function _7(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,i){return new _7(e,t,n,i)}function ag(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B7(e){if(typeof e=="function")return ag(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zm)return 11;if(e===Pm)return 14}return 2}function Pr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,n,i,o,s){var a=2;if(i=e,typeof e=="function")ag(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case uo:return di(n.children,o,s,t);case Sm:a=8,o|=8;break;case Mp:return e=Ht(12,n,t,o|2),e.elementType=Mp,e.lanes=s,e;case Ap:return e=Ht(13,n,t,o),e.elementType=Ap,e.lanes=s,e;case $p:return e=Ht(19,n,t,o),e.elementType=$p,e.lanes=s,e;case dy:return Qf(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ly:a=10;break e;case cy:a=9;break e;case zm:a=11;break e;case Pm:a=14;break e;case fr:a=16,i=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ht(a,n,t,o),t.elementType=e,t.type=i,t.lanes=s,t}function di(e,t,n,i){return e=Ht(7,e,i,t),e.lanes=n,e}function Qf(e,t,n,i){return e=Ht(22,e,i,t),e.elementType=dy,e.lanes=n,e.stateNode={isHidden:!1},e}function eh(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function th(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H7(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=R0(0),this.expirationTimes=R0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=R0(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lg(e,t,n,i,o,s,a,c,d){return e=new H7(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ht(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wm(s),e}function U7(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function tv(e){if(!e)return Ir;e=e._reactInternals;e:{if(Pi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(gt(n))return t6(e,n,t)}return t}function nv(e,t,n,i,o,s,a,c,d){return e=lg(n,i,!0,e,o,s,a,c,d),e.context=tv(null),n=e.current,i=at(),o=zr(n),s=$n(i,o),s.callback=t??null,Cr(n,s,o),e.current.lanes=o,Oa(e,o,i),xt(e,i),e}function Kf(e,t,n,i){var o=t.current,s=at(),a=zr(o);return n=tv(n),t.context===null?t.context=n:t.pendingContext=n,t=$n(s,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Cr(o,t,a),e!==null&&(rn(e,o,a,s),Tu(e,o,a)),a}function yf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function h2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cg(e,t){h2(e,t),(e=e.alternate)&&h2(e,t)}function W7(){return null}var rv=typeof reportError=="function"?reportError:function(e){console.error(e)};function dg(e){this._internalRoot=e}qf.prototype.render=dg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Kf(e,t,null,null)};qf.prototype.unmount=dg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vi(function(){Kf(null,e,null,null)}),t[Fn]=null}};function qf(e){this._internalRoot=e}qf.prototype.unstable_scheduleHydration=function(e){if(e){var t=$y();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mr.length&&t!==0&&t<mr[n].priority;n++);mr.splice(n,0,e),n===0&&Dy(e)}};function ug(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function p2(){}function Y7(e,t,n,i,o){if(o){if(typeof i=="function"){var s=i;i=function(){var u=yf(a);s.call(u)}}var a=nv(t,i,e,0,null,!1,!1,"",p2);return e._reactRootContainer=a,e[Fn]=a.current,ba(e.nodeType===8?e.parentNode:e),vi(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var u=yf(d);c.call(u)}}var d=lg(e,0,!1,null,null,!1,!1,"",p2);return e._reactRootContainer=d,e[Fn]=d.current,ba(e.nodeType===8?e.parentNode:e),vi(function(){Kf(t,d,n,i)}),d}function Jf(e,t,n,i,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var c=o;o=function(){var d=yf(a);c.call(d)}}Kf(t,a,e,o)}else a=Y7(n,t,e,o,i);return yf(a)}My=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hs(t.pendingLanes);n!==0&&(Lm(t,n|1),xt(t,ze()),!(K&6)&&(Uo=ze()+500,Fr()))}break;case 13:vi(function(){var i=Vn(e,1);if(i!==null){var o=at();rn(i,e,1,o)}}),cg(e,1)}};Im=function(e){if(e.tag===13){var t=Vn(e,134217728);if(t!==null){var n=at();rn(t,e,134217728,n)}cg(e,134217728)}};Ay=function(e){if(e.tag===13){var t=zr(e),n=Vn(e,t);if(n!==null){var i=at();rn(n,e,t,i)}cg(e,t)}};$y=function(){return ie};Ry=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Up=function(e,t,n){switch(t){case"input":if(Np(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Hf(i);if(!o)throw Error(A(90));fy(i),Np(i,o)}}}break;case"textarea":py(e,n);break;case"select":t=n.value,t!=null&&Eo(e,!!n.multiple,t,!1)}};wy=ig;jy=vi;var G7={usingClientEntryPoint:!1,Events:[Va,mo,Hf,vy,by,ig]},ms={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X7={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sy(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||W7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Ff=xl.inject(X7),yn=xl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G7;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ug(t))throw Error(A(200));return U7(e,t,null,n)};zt.createRoot=function(e,t){if(!ug(e))throw Error(A(299));var n=!1,i="",o=rv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lg(e,1,!1,null,null,n,!1,i,o),e[Fn]=t.current,ba(e.nodeType===8?e.parentNode:e),new dg(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Sy(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return vi(e)};zt.hydrate=function(e,t,n){if(!Zf(t))throw Error(A(200));return Jf(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!ug(e))throw Error(A(405));var i=n!=null&&n.hydratedSources||null,o=!1,s="",a=rv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=nv(t,null,e,1,n??null,o,!1,s,a),e[Fn]=t.current,ba(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qf(t)};zt.render=function(e,t,n){if(!Zf(t))throw Error(A(200));return Jf(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Zf(e))throw Error(A(40));return e._reactRootContainer?(vi(function(){Jf(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};zt.unstable_batchedUpdates=ig;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Zf(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Jf(e,t,n,!1,i)};zt.version="18.3.1-next-f1338f8080-20240426";function iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iv)}catch(e){console.error(e)}}iv(),iy.exports=zt;var Q7=iy.exports,m2=Q7;Lp.createRoot=m2.createRoot,Lp.hydrateRoot=m2.hydrateRoot;const K7="modulepreload",q7=function(e){return"/"+e},g2={},Z7=function(t,n,i){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=q7(s),s in g2)return;g2[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!i)for(let f=o.length-1;f>=0;f--){const h=o[f];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":K7,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};var x2="popstate";function J7(e={}){function t(i,o){let{pathname:s,search:a,hash:c}=i.location;return k1("",{pathname:s,search:a,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Ea(o)}return t9(t,n,null,e)}function ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function an(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e9(){return Math.random().toString(36).substring(2,10)}function y2(e,t){return{usr:e.state,key:e.key,idx:t}}function k1(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?rs(t):t,state:n,key:t&&t.key||i||e9()}}function Ea({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function rs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function t9(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:s=!1}=i,a=o.history,c="POP",d=null,u=f();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function f(){return(a.state||{idx:null}).idx}function h(){c="POP";let z=f(),v=z==null?null:z-u;u=z,d&&d({action:c,location:w.location,delta:v})}function m(z,v){c="PUSH";let g=k1(w.location,z,v);n&&n(g,z),u=f()+1;let y=y2(g,u),S=w.createHref(g);try{a.pushState(y,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}s&&d&&d({action:c,location:w.location,delta:1})}function p(z,v){c="REPLACE";let g=k1(w.location,z,v);n&&n(g,z),u=f();let y=y2(g,u),S=w.createHref(g);a.replaceState(y,"",S),s&&d&&d({action:c,location:w.location,delta:0})}function b(z){return n9(z)}let w={get action(){return c},get location(){return e(o,a)},listen(z){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(x2,h),d=z,()=>{o.removeEventListener(x2,h),d=null}},createHref(z){return t(o,z)},createURL:b,encodeLocation(z){let v=b(z);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:p,go(z){return a.go(z)}};return w}function n9(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ve(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Ea(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function ov(e,t,n="/"){return r9(e,t,n,!1)}function r9(e,t,n,i){let o=typeof t=="string"?rs(t):t,s=Bn(o.pathname||"/",n);if(s==null)return null;let a=sv(e);i9(a);let c=null;for(let d=0;c==null&&d<a.length;++d){let u=m9(s);c=h9(a[d],u,i)}return c}function sv(e,t=[],n=[],i=""){let o=(s,a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(ve(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let u=Rn([i,d.relativePath]),f=n.concat(d);s.children&&s.children.length>0&&(ve(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),sv(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:u9(u,s.index),routesMeta:f})};return e.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))o(s,a);else for(let d of av(s.path))o(s,a,d)}),t}function av(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return o?[s,""]:[s];let a=av(i.join("/")),c=[];return c.push(...a.map(d=>d===""?s:[s,d].join("/"))),o&&c.push(...a),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function i9(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:f9(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var o9=/^:[\w-]+$/,s9=3,a9=2,l9=1,c9=10,d9=-2,v2=e=>e==="*";function u9(e,t){let n=e.split("/"),i=n.length;return n.some(v2)&&(i+=d9),t&&(i+=a9),n.filter(o=>!v2(o)).reduce((o,s)=>o+(o9.test(s)?s9:s===""?l9:c9),i)}function f9(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function h9(e,t,n=!1){let{routesMeta:i}=e,o={},s="/",a=[];for(let c=0;c<i.length;++c){let d=i[c],u=c===i.length-1,f=s==="/"?t:t.slice(s.length)||"/",h=vf({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},f),m=d.route;if(!h&&u&&n&&!i[i.length-1].route.index&&(h=vf({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!h)return null;Object.assign(o,h.params),a.push({params:o,pathname:Rn([s,h.pathname]),pathnameBase:v9(Rn([s,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(s=Rn([s,h.pathnameBase]))}return a}function vf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=p9(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],a=s.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((u,{paramName:f,isOptional:h},m)=>{if(f==="*"){let b=c[m]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const p=c[m];return h&&!p?u[f]=void 0:u[f]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function p9(e,t=!1,n=!0){an(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function m9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return an(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Bn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function g9(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?rs(e):e;return{pathname:n?n.startsWith("/")?n:x9(n,t):t,search:b9(i),hash:w9(o)}}function x9(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nh(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lv(e){let t=y9(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function cv(e,t,n,i=!1){let o;typeof e=="string"?o=rs(e):(o={...e},ve(!o.pathname||!o.pathname.includes("?"),nh("?","pathname","search",o)),ve(!o.pathname||!o.pathname.includes("#"),nh("#","pathname","hash",o)),ve(!o.search||!o.search.includes("#"),nh("#","search","hash",o)));let s=e===""||o.pathname==="",a=s?"/":o.pathname,c;if(a==null)c=n;else{let h=t.length-1;if(!i&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),h-=1;o.pathname=m.join("/")}c=h>=0?t[h]:"/"}let d=g9(o,c),u=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(u||f)&&(d.pathname+="/"),d}var Rn=e=>e.join("/").replace(/\/\/+/g,"/"),v9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,w9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var dv=["POST","PUT","PATCH","DELETE"];new Set(dv);var k9=["GET",...dv];new Set(k9);var is=j.createContext(null);is.displayName="DataRouter";var e0=j.createContext(null);e0.displayName="DataRouterState";j.createContext(!1);var uv=j.createContext({isTransitioning:!1});uv.displayName="ViewTransition";var C9=j.createContext(new Map);C9.displayName="Fetchers";var S9=j.createContext(null);S9.displayName="Await";var jn=j.createContext(null);jn.displayName="Navigation";var Ba=j.createContext(null);Ba.displayName="Location";var kn=j.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var fg=j.createContext(null);fg.displayName="RouteError";function z9(e,{relative:t}={}){ve(Ha(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=j.useContext(jn),{hash:o,pathname:s,search:a}=Ua(e,{relative:t}),c=s;return n!=="/"&&(c=s==="/"?n:Rn([n,s])),i.createHref({pathname:c,search:a,hash:o})}function Ha(){return j.useContext(Ba)!=null}function Vr(){return ve(Ha(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Ba).location}var fv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(e){j.useContext(jn).static||j.useLayoutEffect(e)}function cn(){let{isDataRoute:e}=j.useContext(kn);return e?V9():P9()}function P9(){ve(Ha(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(is),{basename:t,navigator:n}=j.useContext(jn),{matches:i}=j.useContext(kn),{pathname:o}=Vr(),s=JSON.stringify(lv(i)),a=j.useRef(!1);return hv(()=>{a.current=!0}),j.useCallback((d,u={})=>{if(an(a.current,fv),!a.current)return;if(typeof d=="number"){n.go(d);return}let f=cv(d,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Rn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,s,o,e])}j.createContext(null);function T9(){let{matches:e}=j.useContext(kn),t=e[e.length-1];return t?t.params:{}}function Ua(e,{relative:t}={}){let{matches:n}=j.useContext(kn),{pathname:i}=Vr(),o=JSON.stringify(lv(n));return j.useMemo(()=>cv(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function E9(e,t){return pv(e,t)}function pv(e,t,n,i){var v;ve(Ha(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=j.useContext(jn),{matches:s}=j.useContext(kn),a=s[s.length-1],c=a?a.params:{},d=a?a.pathname:"/",u=a?a.pathnameBase:"/",f=a&&a.route;{let g=f&&f.path||"";mv(d,!f||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=Vr(),m;if(t){let g=typeof t=="string"?rs(t):t;ve(u==="/"||((v=g.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${g.pathname}" was given in the \`location\` prop.`),m=g}else m=h;let p=m.pathname||"/",b=p;if(u!=="/"){let g=u.replace(/^\//,"").split("/");b="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=ov(e,{pathname:b});an(f||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),an(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=$9(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:Rn([u,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:Rn([u,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return t&&z?j.createElement(Ba.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},z):z}function L9(){let e=F9(),t=j9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:s},"ErrorBoundary")," or"," ",j.createElement("code",{style:s},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,a)}var I9=j.createElement(L9,null),M9=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?j.createElement(kn.Provider,{value:this.props.routeContext},j.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function A9({routeContext:e,match:t,children:n}){let i=j.useContext(is);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(kn.Provider,{value:e},n)}function $9(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=n==null?void 0:n.errors;if(s!=null){let d=o.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);ve(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,c=-1;if(n)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:h}=n,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!h||h[u.route.id]===void 0);if(u.route.lazy||m){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let h,m=!1,p=null,b=null;n&&(h=s&&u.route.id?s[u.route.id]:void 0,p=u.route.errorElement||I9,a&&(c<0&&f===0?(mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,b=null):c===f&&(m=!0,b=u.route.hydrateFallbackElement||null)));let w=t.concat(o.slice(0,f+1)),z=()=>{let v;return h?v=p:m?v=b:u.route.Component?v=j.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=d,j.createElement(A9,{match:u,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?j.createElement(M9,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:z(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):z()},null)}function hg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R9(e){let t=j.useContext(is);return ve(t,hg(e)),t}function D9(e){let t=j.useContext(e0);return ve(t,hg(e)),t}function N9(e){let t=j.useContext(kn);return ve(t,hg(e)),t}function pg(e){let t=N9(e),n=t.matches[t.matches.length-1];return ve(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function O9(){return pg("useRouteId")}function F9(){var i;let e=j.useContext(fg),t=D9("useRouteError"),n=pg("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function V9(){let{router:e}=R9("useNavigate"),t=pg("useNavigate"),n=j.useRef(!1);return hv(()=>{n.current=!0}),j.useCallback(async(o,s={})=>{an(n.current,fv),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...s}))},[e,t])}var b2={};function mv(e,t,n){!t&&!b2[e]&&(b2[e]=!0,an(!1,n))}j.memo(_9);function _9({routes:e,future:t,state:n}){return pv(e,void 0,n,t)}function me(e){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B9({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:s=!1}){ve(!Ha(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:a,navigator:o,static:s,future:{}}),[a,o,s]);typeof n=="string"&&(n=rs(n));let{pathname:d="/",search:u="",hash:f="",state:h=null,key:m="default"}=n,p=j.useMemo(()=>{let b=Bn(d,a);return b==null?null:{location:{pathname:b,search:u,hash:f,state:h,key:m},navigationType:i}},[a,d,u,f,h,m,i]);return an(p!=null,`<Router basename="${a}"> is not able to match the URL "${d}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:j.createElement(jn.Provider,{value:c},j.createElement(Ba.Provider,{children:t,value:p}))}function H9({children:e,location:t}){return E9(C1(e),t)}function C1(e,t=[]){let n=[];return j.Children.forEach(e,(i,o)=>{if(!j.isValidElement(i))return;let s=[...t,o];if(i.type===j.Fragment){n.push.apply(n,C1(i.props.children,s));return}ve(i.type===me,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=C1(i.props.children,s)),n.push(a)}),n}var Ru="get",Du="application/x-www-form-urlencoded";function t0(e){return e!=null&&typeof e.tagName=="string"}function U9(e){return t0(e)&&e.tagName.toLowerCase()==="button"}function W9(e){return t0(e)&&e.tagName.toLowerCase()==="form"}function Y9(e){return t0(e)&&e.tagName.toLowerCase()==="input"}function G9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X9(e,t){return e.button===0&&(!t||t==="_self")&&!G9(e)}function S1(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function Q9(e,t){let n=S1(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(s=>{n.append(o,s)})}),n}var yl=null;function K9(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var q9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(e){return e!=null&&!q9.has(e)?(an(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`),null):e}function Z9(e,t){let n,i,o,s,a;if(W9(e)){let c=e.getAttribute("action");i=c?Bn(c,t):null,n=e.getAttribute("method")||Ru,o=rh(e.getAttribute("enctype"))||Du,s=new FormData(e)}else if(U9(e)||Y9(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(i=d?Bn(d,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Ru,o=rh(e.getAttribute("formenctype"))||rh(c.getAttribute("enctype"))||Du,s=new FormData(c,e),!K9()){let{name:u,type:f,value:h}=e;if(f==="image"){let m=u?`${u}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else u&&s.append(u,h)}}else{if(t0(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ru,i=null,o=Du,a=e}return s&&o==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function J9(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Bn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function ek(e,t){if(e.id in t)return t[e.id];try{let n=await Z7(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tk(e){return e!=null&&typeof e.page=="string"}function nk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function rk(e,t,n){let i=await Promise.all(e.map(async o=>{let s=t.routes[o.route.id];if(s){let a=await ek(s,n);return a.links?a.links():[]}return[]}));return ak(i.flat(1).filter(nk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function w2(e,t,n,i,o,s){let a=(d,u)=>n[u]?d.route.id!==n[u].route.id:!0,c=(d,u)=>{var f;return n[u].pathname!==d.pathname||((f=n[u].route.path)==null?void 0:f.endsWith("*"))&&n[u].params["*"]!==d.params["*"]};return s==="assets"?t.filter((d,u)=>a(d,u)||c(d,u)):s==="data"?t.filter((d,u)=>{var h;let f=i.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(a(d,u)||c(d,u))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function ik(e,t,{includeHydrateFallback:n}={}){return ok(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function ok(e){return[...new Set(e)]}function sk(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function ak(e,t){let n=new Set,i=new Set(t);return e.reduce((o,s)=>{if(t&&!tk(s)&&s.as==="script"&&s.href&&i.has(s.href))return o;let c=JSON.stringify(sk(s));return n.has(c)||(n.add(c),o.push({key:c,link:s})),o},[])}function gv(){let e=j.useContext(is);return mg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function lk(){let e=j.useContext(e0);return mg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var gg=j.createContext(void 0);gg.displayName="FrameworkContext";function xv(){let e=j.useContext(gg);return mg(e,"You must render this element inside a <HydratedRouter> element"),e}function ck(e,t){let n=j.useContext(gg),[i,o]=j.useState(!1),[s,a]=j.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:u,onMouseLeave:f,onTouchStart:h}=t,m=j.useRef(null);j.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let w=v=>{v.forEach(g=>{a(g.isIntersecting)})},z=new IntersectionObserver(w,{threshold:.5});return m.current&&z.observe(m.current),()=>{z.disconnect()}}},[e]),j.useEffect(()=>{if(i){let w=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(w)}}},[i]);let p=()=>{o(!0)},b=()=>{o(!1),a(!1)};return n?e!=="intent"?[s,m,{}]:[s,m,{onFocus:gs(c,p),onBlur:gs(d,b),onMouseEnter:gs(u,p),onMouseLeave:gs(f,b),onTouchStart:gs(h,p)}]:[!1,m,{}]}function gs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dk({page:e,...t}){let{router:n}=gv(),i=j.useMemo(()=>ov(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?j.createElement(fk,{page:e,matches:i,...t}):null}function uk(e){let{manifest:t,routeModules:n}=xv(),[i,o]=j.useState([]);return j.useEffect(()=>{let s=!1;return rk(e,t,n).then(a=>{s||o(a)}),()=>{s=!0}},[e,t,n]),i}function fk({page:e,matches:t,...n}){let i=Vr(),{manifest:o,routeModules:s}=xv(),{basename:a}=gv(),{loaderData:c,matches:d}=lk(),u=j.useMemo(()=>w2(e,t,d,o,i,"data"),[e,t,d,o,i]),f=j.useMemo(()=>w2(e,t,d,o,i,"assets"),[e,t,d,o,i]),h=j.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let b=new Set,w=!1;if(t.forEach(v=>{var y;let g=o.routes[v.route.id];!g||!g.hasLoader||(!u.some(S=>S.route.id===v.route.id)&&v.route.id in c&&((y=s[v.route.id])!=null&&y.shouldRevalidate)||g.hasClientLoader?w=!0:b.add(v.route.id))}),b.size===0)return[];let z=J9(e,a,"data");return w&&b.size>0&&z.searchParams.set("_routes",t.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[z.pathname+z.search]},[a,c,i,o,u,t,e,s]),m=j.useMemo(()=>ik(f,o),[f,o]),p=uk(f);return j.createElement(j.Fragment,null,h.map(b=>j.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),m.map(b=>j.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),p.map(({key:b,link:w})=>j.createElement("link",{key:b,...w})))}function hk(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yv&&(window.__reactRouterVersion="7.7.1")}catch{}function pk({basename:e,children:t,window:n}){let i=j.useRef();i.current==null&&(i.current=J7({window:n,v5Compat:!0}));let o=i.current,[s,a]=j.useState({action:o.action,location:o.location}),c=j.useCallback(d=>{j.startTransition(()=>a(d))},[a]);return j.useLayoutEffect(()=>o.listen(c),[o,c]),j.createElement(B9,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o})}var vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bv=j.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:s,replace:a,state:c,target:d,to:u,preventScrollReset:f,viewTransition:h,...m},p){let{basename:b}=j.useContext(jn),w=typeof u=="string"&&vv.test(u),z,v=!1;if(typeof u=="string"&&w&&(z=u,yv))try{let D=new URL(window.location.href),N=u.startsWith("//")?new URL(D.protocol+u):new URL(u),X=Bn(N.pathname,b);N.origin===D.origin&&X!=null?u=X+N.search+N.hash:v=!0}catch{an(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=z9(u,{relative:o}),[y,S,P]=ck(i,m),E=yk(u,{replace:a,state:c,target:d,preventScrollReset:f,relative:o,viewTransition:h});function T(D){t&&t(D),D.defaultPrevented||E(D)}let L=j.createElement("a",{...m,...P,href:z||g,onClick:v||s?t:T,ref:hk(p,S),target:d,"data-discover":!w&&n==="render"?"true":void 0});return y&&!w?j.createElement(j.Fragment,null,L,j.createElement(dk,{page:g})):L});bv.displayName="Link";var mk=j.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:s,to:a,viewTransition:c,children:d,...u},f){let h=Ua(a,{relative:u.relative}),m=Vr(),p=j.useContext(e0),{navigator:b,basename:w}=j.useContext(jn),z=p!=null&&Ck(h)&&c===!0,v=b.encodeLocation?b.encodeLocation(h).pathname:h.pathname,g=m.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&w&&(y=Bn(y,w)||y);const S=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=g===v||!o&&g.startsWith(v)&&g.charAt(S)==="/",E=y!=null&&(y===v||!o&&y.startsWith(v)&&y.charAt(v.length)==="/"),T={isActive:P,isPending:E,isTransitioning:z},L=P?t:void 0,D;typeof i=="function"?D=i(T):D=[i,P?"active":null,E?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let N=typeof s=="function"?s(T):s;return j.createElement(bv,{...u,"aria-current":L,className:D,ref:f,style:N,to:a,viewTransition:c},typeof d=="function"?d(T):d)});mk.displayName="NavLink";var gk=j.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:s,method:a=Ru,action:c,onSubmit:d,relative:u,preventScrollReset:f,viewTransition:h,...m},p)=>{let b=jk(),w=kk(c,{relative:u}),z=a.toLowerCase()==="get"?"get":"post",v=typeof c=="string"&&vv.test(c),g=y=>{if(d&&d(y),y.defaultPrevented)return;y.preventDefault();let S=y.nativeEvent.submitter,P=(S==null?void 0:S.getAttribute("formmethod"))||a;b(S||y.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:o,state:s,relative:u,preventScrollReset:f,viewTransition:h})};return j.createElement("form",{ref:p,method:z,action:w,onSubmit:i?d:g,...m,"data-discover":!v&&e==="render"?"true":void 0})});gk.displayName="Form";function xk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wv(e){let t=j.useContext(is);return ve(t,xk(e)),t}function yk(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:s,viewTransition:a}={}){let c=cn(),d=Vr(),u=Ua(e,{relative:s});return j.useCallback(f=>{if(X9(f,t)){f.preventDefault();let h=n!==void 0?n:Ea(d)===Ea(u);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,c,u,n,i,t,e,o,s,a])}function vk(e){an(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=j.useRef(S1(e)),n=j.useRef(!1),i=Vr(),o=j.useMemo(()=>Q9(i.search,n.current?null:t.current),[i.search]),s=cn(),a=j.useCallback((c,d)=>{const u=S1(typeof c=="function"?c(new URLSearchParams(o)):c);n.current=!0,s("?"+u,d)},[s,o]);return[o,a]}var bk=0,wk=()=>`__${String(++bk)}__`;function jk(){let{router:e}=wv("useSubmit"),{basename:t}=j.useContext(jn),n=O9();return j.useCallback(async(i,o={})=>{let{action:s,method:a,encType:c,formData:d,body:u}=Z9(i,t);if(o.navigate===!1){let f=o.fetcherKey||wk();await e.fetch(f,n,o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:u,formMethod:o.method||a,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:u,formMethod:o.method||a,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function kk(e,{relative:t}={}){let{basename:n}=j.useContext(jn),i=j.useContext(kn);ve(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...Ua(e||".",{relative:t})},a=Vr();if(e==null){s.search=a.search;let c=new URLSearchParams(s.search),d=c.getAll("index");if(d.some(f=>f==="")){c.delete("index"),d.filter(h=>h).forEach(h=>c.append("index",h));let f=c.toString();s.search=f?`?${f}`:""}}return(!e||e===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Rn([n,s.pathname])),Ea(s)}function Ck(e,{relative:t}={}){let n=j.useContext(uv);ve(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=wv("useViewTransitionState"),o=Ua(e,{relative:t});if(!n.isTransitioning)return!1;let s=Bn(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Bn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return vf(o.pathname,a)!=null||vf(o.pathname,s)!=null}var pt=function(){return pt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},pt.apply(this,arguments)};function bf(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,s;i<o;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))}var ce="-ms-",ra="-moz-",ne="-webkit-",jv="comm",n0="rule",xg="decl",Sk="@import",kv="@keyframes",zk="@layer",Cv=Math.abs,yg=String.fromCharCode,z1=Object.assign;function Pk(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Sv(e){return e.trim()}function Tn(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Nu(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Wo(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function zv(e){return e.length}function Ws(e,t){return t.push(e),e}function Tk(e,t){return e.map(t).join("")}function j2(e,t){return e.filter(function(n){return!Tn(n,t)})}var r0=1,Yo=1,Pv=0,Gt=0,Te=0,os="";function i0(e,t,n,i,o,s,a,c){return{value:e,root:t,parent:n,type:i,props:o,children:s,line:r0,column:Yo,length:a,return:"",siblings:c}}function cr(e,t){return z1(i0("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ii(e){for(;e.root;)e=cr(e.root,{children:[e]});Ws(e,e.siblings)}function Ek(){return Te}function Lk(){return Te=Gt>0?Re(os,--Gt):0,Yo--,Te===10&&(Yo=1,r0--),Te}function on(){return Te=Gt<Pv?Re(os,Gt++):0,Yo++,Te===10&&(Yo=1,r0++),Te}function ui(){return Re(os,Gt)}function Ou(){return Gt}function o0(e,t){return Wo(os,e,t)}function P1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ik(e){return r0=Yo=1,Pv=hn(os=e),Gt=0,[]}function Mk(e){return os="",e}function ih(e){return Sv(o0(Gt-1,T1(e===91?e+2:e===40?e+1:e)))}function Ak(e){for(;(Te=ui())&&Te<33;)on();return P1(e)>2||P1(Te)>3?"":" "}function $k(e,t){for(;--t&&on()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return o0(e,Ou()+(t<6&&ui()==32&&on()==32))}function T1(e){for(;on();)switch(Te){case e:return Gt;case 34:case 39:e!==34&&e!==39&&T1(Te);break;case 40:e===41&&T1(e);break;case 92:on();break}return Gt}function Rk(e,t){for(;on()&&e+Te!==47+10;)if(e+Te===42+42&&ui()===47)break;return"/*"+o0(t,Gt-1)+"*"+yg(e===47?e:on())}function Dk(e){for(;!P1(ui());)on();return o0(e,Gt)}function Nk(e){return Mk(Fu("",null,null,null,[""],e=Ik(e),0,[0],e))}function Fu(e,t,n,i,o,s,a,c,d){for(var u=0,f=0,h=a,m=0,p=0,b=0,w=1,z=1,v=1,g=0,y="",S=o,P=s,E=i,T=y;z;)switch(b=g,g=on()){case 40:if(b!=108&&Re(T,h-1)==58){Nu(T+=W(ih(g),"&","&\f"),"&\f",Cv(u?c[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=ih(g);break;case 9:case 10:case 13:case 32:T+=Ak(b);break;case 92:T+=$k(Ou()-1,7);continue;case 47:switch(ui()){case 42:case 47:Ws(Ok(Rk(on(),Ou()),t,n,d),d);break;default:T+="/"}break;case 123*w:c[u++]=hn(T)*v;case 125*w:case 59:case 0:switch(g){case 0:case 125:z=0;case 59+f:v==-1&&(T=W(T,/\f/g,"")),p>0&&hn(T)-h&&Ws(p>32?C2(T+";",i,n,h-1,d):C2(W(T," ","")+";",i,n,h-2,d),d);break;case 59:T+=";";default:if(Ws(E=k2(T,t,n,u,f,o,c,y,S=[],P=[],h,s),s),g===123)if(f===0)Fu(T,t,E,E,S,s,h,c,P);else switch(m===99&&Re(T,3)===110?100:m){case 100:case 108:case 109:case 115:Fu(e,E,E,i&&Ws(k2(e,E,E,0,0,o,c,y,o,S=[],h,P),P),o,P,h,c,i?S:P);break;default:Fu(T,E,E,E,[""],P,0,c,P)}}u=f=p=0,w=v=1,y=T="",h=a;break;case 58:h=1+hn(T),p=b;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&Lk()==125)continue}switch(T+=yg(g),g*w){case 38:v=f>0?1:(T+="\f",-1);break;case 44:c[u++]=(hn(T)-1)*v,v=1;break;case 64:ui()===45&&(T+=ih(on())),m=ui(),f=h=hn(y=T+=Dk(Ou())),g++;break;case 45:b===45&&hn(T)==2&&(w=0)}}return s}function k2(e,t,n,i,o,s,a,c,d,u,f,h){for(var m=o-1,p=o===0?s:[""],b=zv(p),w=0,z=0,v=0;w<i;++w)for(var g=0,y=Wo(e,m+1,m=Cv(z=a[w])),S=e;g<b;++g)(S=Sv(z>0?p[g]+" "+y:W(y,/&\f/g,p[g])))&&(d[v++]=S);return i0(e,t,n,o===0?n0:c,d,u,f,h)}function Ok(e,t,n,i){return i0(e,t,n,jv,yg(Ek()),Wo(e,2,-2),0,i)}function C2(e,t,n,i,o){return i0(e,t,n,xg,Wo(e,0,i),Wo(e,i+1,-1),i,o)}function Tv(e,t,n){switch(Pk(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+ra+e+ce+e+e;case 5936:switch(Re(e,t+11)){case 114:return ne+e+ce+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+ce+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+ce+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+ce+e+e;case 6165:return ne+e+ce+"flex-"+e+e;case 5187:return ne+e+W(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ne+e+ce+"flex-item-"+W(e,/flex-|-self/g,"")+(Tn(e,/flex-|baseline/)?"":ce+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return ne+e+ce+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+ce+W(e,"shrink","negative")+e;case 5292:return ne+e+ce+W(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+W(e,"-grow","")+ne+e+ce+W(e,"grow","positive")+e;case 4554:return ne+W(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Tn(e,/flex-|baseline/))return ce+"grid-column-align"+Wo(e,t)+e;break;case 2592:case 3360:return ce+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,Tn(i.props,/grid-\w+-end/)})?~Nu(e+(n=n[t].value),"span",0)?e:ce+W(e,"-start","")+e+ce+"grid-row-span:"+(~Nu(n,"span",0)?Tn(n,/\d+/):+Tn(n,/\d+/)-+Tn(e,/\d+/))+";":ce+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return Tn(i.props,/grid-\w+-start/)})?e:ce+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+ra+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nu(e,"stretch",0)?Tv(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,s,a,c,d,u){return ce+o+":"+s+u+(a?ce+o+"-span:"+(c?d:+d-+s)+u:"")+e});case 4949:if(Re(e,t+6)===121)return W(e,":",":"+ne)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(Re(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ce+"$2box$3")+e;case 100:return W(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function wf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Fk(e,t,n,i){switch(e.type){case zk:if(e.children.length)break;case Sk:case xg:return e.return=e.return||e.value;case jv:return"";case kv:return e.return=e.value+"{"+wf(e.children,i)+"}";case n0:if(!hn(e.value=e.props.join(",")))return""}return hn(n=wf(e.children,i))?e.return=e.value+"{"+n+"}":""}function Vk(e){var t=zv(e);return function(n,i,o,s){for(var a="",c=0;c<t;c++)a+=e[c](n,i,o,s)||"";return a}}function _k(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bk(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case xg:e.return=Tv(e.value,e.length,n);return;case kv:return wf([cr(e,{value:W(e.value,"@","@"+ne)})],i);case n0:if(e.length)return Tk(n=e.props,function(o){switch(Tn(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ii(cr(e,{props:[W(o,/:(read-\w+)/,":"+ra+"$1")]})),Ii(cr(e,{props:[o]})),z1(e,{props:j2(n,i)});break;case"::placeholder":Ii(cr(e,{props:[W(o,/:(plac\w+)/,":"+ne+"input-$1")]})),Ii(cr(e,{props:[W(o,/:(plac\w+)/,":"+ra+"$1")]})),Ii(cr(e,{props:[W(o,/:(plac\w+)/,ce+"input-$1")]})),Ii(cr(e,{props:[o]})),z1(e,{props:j2(n,i)});break}return""})}}var Hk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Go=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ev="active",Lv="data-styled-version",s0="6.1.18",vg=`/*!sc*/
`,jf=typeof window<"u"&&typeof document<"u",Uk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),a0=Object.freeze([]),Xo=Object.freeze({});function Wk(e,t,n){return n===void 0&&(n=Xo),e.theme!==n.theme&&e.theme||t||n.theme}var Iv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gk=/(^-|-$)/g;function S2(e){return e.replace(Yk,"-").replace(Gk,"")}var Xk=/(a)(d)/gi,vl=52,z2=function(e){return String.fromCharCode(e+(e>25?39:97))};function E1(e){var t,n="";for(t=Math.abs(e);t>vl;t=t/vl|0)n=z2(t%vl)+n;return(z2(t%vl)+n).replace(Xk,"$1-$2")}var oh,Mv=5381,jo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Av=function(e){return jo(Mv,e)};function Qk(e){return E1(Av(e)>>>0)}function Kk(e){return e.displayName||e.name||"Component"}function sh(e){return typeof e=="string"&&!0}var $v=typeof Symbol=="function"&&Symbol.for,Rv=$v?Symbol.for("react.memo"):60115,qk=$v?Symbol.for("react.forward_ref"):60112,Zk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eC=((oh={})[qk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oh[Rv]=Dv,oh);function P2(e){return("type"in(t=e)&&t.type.$$typeof)===Rv?Dv:"$$typeof"in e?eC[e.$$typeof]:Zk;var t}var tC=Object.defineProperty,nC=Object.getOwnPropertyNames,T2=Object.getOwnPropertySymbols,rC=Object.getOwnPropertyDescriptor,iC=Object.getPrototypeOf,E2=Object.prototype;function Nv(e,t,n){if(typeof t!="string"){if(E2){var i=iC(t);i&&i!==E2&&Nv(e,i,n)}var o=nC(t);T2&&(o=o.concat(T2(t)));for(var s=P2(e),a=P2(t),c=0;c<o.length;++c){var d=o[c];if(!(d in Jk||n&&n[d]||a&&d in a||s&&d in s)){var u=rC(t,d);try{tC(e,d,u)}catch{}}}}return e}function Qo(e){return typeof e=="function"}function bg(e){return typeof e=="object"&&"styledComponentId"in e}function si(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function L2(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function La(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function L1(e,t,n){if(n===void 0&&(n=!1),!n&&!La(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=L1(e[i],t[i]);else if(La(t))for(var i in t)e[i]=L1(e[i],t[i]);return e}function wg(e,t){Object.defineProperty(e,"toString",{value:t})}function Wa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var oC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;t>=s;)if((s<<=1)<0)throw Wa(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),d=(a=0,n.length);a<d;a++)this.tag.insertRule(c,n[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),s=o+i,a=o;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(vg);return n},e}(),Vu=new Map,kf=new Map,_u=1,bl=function(e){if(Vu.has(e))return Vu.get(e);for(;kf.has(_u);)_u++;var t=_u++;return Vu.set(e,t),kf.set(t,e),t},sC=function(e,t){_u=t+1,Vu.set(e,t),kf.set(t,e)},aC="style[".concat(Go,"][").concat(Lv,'="').concat(s0,'"]'),lC=new RegExp("^".concat(Go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cC=function(e,t,n){for(var i,o=n.split(","),s=0,a=o.length;s<a;s++)(i=o[s])&&e.registerName(t,i)},dC=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(vg),o=[],s=0,a=i.length;s<a;s++){var c=i[s].trim();if(c){var d=c.match(lC);if(d){var u=0|parseInt(d[1],10),f=d[2];u!==0&&(sC(f,u),cC(e,f,d[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}},I2=function(e){for(var t=document.querySelectorAll(aC),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(Go)!==Ev&&(dC(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function uC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ov=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=function(c){var d=Array.from(c.querySelectorAll("style[".concat(Go,"]")));return d[d.length-1]}(n),s=o!==void 0?o.nextSibling:null;i.setAttribute(Go,Ev),i.setAttribute(Lv,s0);var a=uC();return a&&i.setAttribute("nonce",a),n.insertBefore(i,s),i},fC=function(){function e(t){this.element=Ov(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,s=i.length;o<s;o++){var a=i[o];if(a.ownerNode===n)return a}throw Wa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hC=function(){function e(t){this.element=Ov(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),M2=jf,mC={isServer:!jf,useCSSOMInjection:!Uk},Fv=function(){function e(t,n,i){t===void 0&&(t=Xo),n===void 0&&(n={});var o=this;this.options=pt(pt({},mC),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&jf&&M2&&(M2=!1,I2(this)),wg(this,function(){return function(s){for(var a=s.getTag(),c=a.length,d="",u=function(h){var m=function(v){return kf.get(v)}(h);if(m===void 0)return"continue";var p=s.names.get(m),b=a.getGroup(h);if(p===void 0||!p.size||b.length===0)return"continue";var w="".concat(Go,".g").concat(h,'[id="').concat(m,'"]'),z="";p!==void 0&&p.forEach(function(v){v.length>0&&(z+="".concat(v,","))}),d+="".concat(b).concat(w,'{content:"').concat(z,'"}').concat(vg)},f=0;f<c;f++)u(f);return d}(o)})}return e.registerId=function(t){return bl(t)},e.prototype.rehydrate=function(){!this.server&&jf&&I2(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pt(pt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new pC(o):i?new fC(o):new hC(o)}(this.options),new oC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(bl(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(bl(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(bl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gC=/&/g,xC=/^\s*\/\/.*$/gm;function Vv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vv(n.children,t)),n})}function yC(e){var t,n,i,o=e===void 0?Xo:e,s=o.options,a=s===void 0?Xo:s,c=o.plugins,d=c===void 0?a0:c,u=function(m,p,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):m},f=d.slice();f.push(function(m){m.type===n0&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(gC,n).replace(i,u))}),a.prefix&&f.push(Bk),f.push(Fk);var h=function(m,p,b,w){p===void 0&&(p=""),b===void 0&&(b=""),w===void 0&&(w="&"),t=w,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var z=m.replace(xC,""),v=Nk(b||p?"".concat(b," ").concat(p," { ").concat(z," }"):z);a.namespace&&(v=Vv(v,a.namespace));var g=[];return wf(v,Vk(f.concat(_k(function(y){return g.push(y)})))),g};return h.hash=d.length?d.reduce(function(m,p){return p.name||Wa(15),jo(m,p.name)},Mv).toString():"",h}var vC=new Fv,I1=yC(),_v=lt.createContext({shouldForwardProp:void 0,styleSheet:vC,stylis:I1});_v.Consumer;lt.createContext(void 0);function A2(){return j.useContext(_v)}var bC=function(){function e(t,n){var i=this;this.inject=function(o,s){s===void 0&&(s=I1);var a=i.name+s.hash;o.hasNameForId(i.id,a)||o.insertRules(i.id,a,s(i.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wg(this,function(){throw Wa(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=I1),this.name+t.hash},e}(),wC=function(e){return e>="A"&&e<="Z"};function $2(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;wC(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Bv=function(e){return e==null||e===!1||e===""},Hv=function(e){var t,n,i=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!Bv(s)&&(Array.isArray(s)&&s.isCss||Qo(s)?i.push("".concat($2(o),":"),s,";"):La(s)?i.push.apply(i,bf(bf(["".concat(o," {")],Hv(s),!1),["}"],!1)):i.push("".concat($2(o),": ").concat((t=o,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Hk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function fi(e,t,n,i){if(Bv(e))return[];if(bg(e))return[".".concat(e.styledComponentId)];if(Qo(e)){if(!Qo(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return fi(o,t,n,i)}var s;return e instanceof bC?n?(e.inject(n,i),[e.getName(i)]):[e]:La(e)?Hv(e):Array.isArray(e)?Array.prototype.concat.apply(a0,e.map(function(a){return fi(a,t,n,i)})):[e.toString()]}function jC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qo(n)&&!bg(n))return!1}return!0}var kC=Av(s0),CC=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&jC(t),this.componentId=n,this.baseHash=jo(kC,n),this.baseStyle=i,Fv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=si(o,this.staticRulesId);else{var s=L2(fi(this.rules,t,n,i)),a=E1(jo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var c=i(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=si(o,a),this.staticRulesId=a}else{for(var d=jo(this.baseHash,i.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var m=L2(fi(h,t,n,i));d=jo(d,m+f),u+=m}}if(u){var p=E1(d>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(u,".".concat(p),void 0,this.componentId)),o=si(o,p)}}return o},e}(),Uv=lt.createContext(void 0);Uv.Consumer;var ah={};function SC(e,t,n){var i=bg(e),o=e,s=!sh(e),a=t.attrs,c=a===void 0?a0:a,d=t.componentId,u=d===void 0?function(S,P){var E=typeof S!="string"?"sc":S2(S);ah[E]=(ah[E]||0)+1;var T="".concat(E,"-").concat(Qk(s0+E+ah[E]));return P?"".concat(P,"-").concat(T):T}(t.displayName,t.parentComponentId):d,f=t.displayName,h=f===void 0?function(S){return sh(S)?"styled.".concat(S):"Styled(".concat(Kk(S),")")}(e):f,m=t.displayName&&t.componentId?"".concat(S2(t.displayName),"-").concat(t.componentId):t.componentId||u,p=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,b=t.shouldForwardProp;if(i&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;b=function(S,P){return w(S,P)&&z(S,P)}}else b=w}var v=new CC(n,m,i?o.componentStyle:void 0);function g(S,P){return function(E,T,L){var D=E.attrs,N=E.componentStyle,X=E.defaultProps,fe=E.foldedComponentIds,we=E.styledComponentId,q=E.target,rt=lt.useContext(Uv),re=A2(),se=E.shouldForwardProp||re.shouldForwardProp,R=Wk(T,rt,X)||Xo,V=function(U,je,Fe){for(var dn,vt=pt(pt({},je),{className:void 0,theme:Fe}),Xt=0;Xt<U.length;Xt+=1){var Ve=Qo(dn=U[Xt])?dn(vt):dn;for(var Ye in Ve)vt[Ye]=Ye==="className"?si(vt[Ye],Ve[Ye]):Ye==="style"?pt(pt({},vt[Ye]),Ve[Ye]):Ve[Ye]}return je.className&&(vt.className=si(vt.className,je.className)),vt}(D,T,R),C=V.as||q,I={};for(var H in V)V[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&V.theme===R||(H==="forwardedAs"?I.as=V.forwardedAs:se&&!se(H,C)||(I[H]=V[H]));var Q=function(U,je){var Fe=A2(),dn=U.generateAndInjectStyles(je,Fe.styleSheet,Fe.stylis);return dn}(N,V),ae=si(fe,we);return Q&&(ae+=" "+Q),V.className&&(ae+=" "+V.className),I[sh(C)&&!Iv.has(C)?"class":"className"]=ae,L&&(I.ref=L),j.createElement(C,I)}(y,S,P)}g.displayName=h;var y=lt.forwardRef(g);return y.attrs=p,y.componentStyle=v,y.displayName=h,y.shouldForwardProp=b,y.foldedComponentIds=i?si(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=m,y.target=i?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=i?function(P){for(var E=[],T=1;T<arguments.length;T++)E[T-1]=arguments[T];for(var L=0,D=E;L<D.length;L++)L1(P,D[L],!0);return P}({},o.defaultProps,S):S}}),wg(y,function(){return".".concat(y.styledComponentId)}),s&&Nv(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function R2(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var D2=function(e){return Object.assign(e,{isCss:!0})};function zC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qo(e)||La(e))return D2(fi(R2(a0,bf([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?fi(i):D2(fi(R2(i,t)))}function M1(e,t,n){if(n===void 0&&(n=Xo),!t)throw Wa(1,t);var i=function(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,n,zC.apply(void 0,bf([o],s,!1)))};return i.attrs=function(o){return M1(e,t,pt(pt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return M1(e,t,pt(pt({},n),o))},i}var Wv=function(e){return M1(SC,e)},l=Wv;Iv.forEach(function(e){l[e]=Wv(e)});const jg=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),l0=j.createContext({}),c0=j.createContext(null),d0=typeof document<"u",Ya=d0?j.useLayoutEffect:j.useEffect,Yv=j.createContext({strict:!1}),kg=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),PC="framerAppearId",Gv="data-"+kg(PC);function TC(e,t,n,i){const{visualElement:o}=j.useContext(l0),s=j.useContext(Yv),a=j.useContext(c0),c=j.useContext(jg).reducedMotion,d=j.useRef();i=i||s.renderer,!d.current&&i&&(d.current=i(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:c}));const u=d.current;j.useInsertionEffect(()=>{u&&u.update(n,a)});const f=j.useRef(!!(n[Gv]&&!window.HandoffComplete));return Ya(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function ko(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function EC(e,t,n){return j.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):ko(n)&&(n.current=i))},[t])}function Ia(e){return typeof e=="string"||Array.isArray(e)}function u0(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Cg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sg=["initial",...Cg];function f0(e){return u0(e.animate)||Sg.some(t=>Ia(e[t]))}function Xv(e){return!!(f0(e)||e.variants)}function LC(e,t){if(f0(e)){const{initial:n,animate:i}=e;return{initial:n===!1||Ia(n)?n:void 0,animate:Ia(i)?i:void 0}}return e.inherit!==!1?t:{}}function IC(e){const{initial:t,animate:n}=LC(e,j.useContext(l0));return j.useMemo(()=>({initial:t,animate:n}),[N2(t),N2(n)])}function N2(e){return Array.isArray(e)?e.join(" "):e}const O2={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ma={};for(const e in O2)Ma[e]={isEnabled:t=>O2[e].some(n=>!!t[n])};function MC(e){for(const t in e)Ma[t]={...Ma[t],...e[t]}}const zg=j.createContext({}),Qv=j.createContext({}),AC=Symbol.for("motionComponentSymbol");function $C({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:o}){e&&MC(e);function s(c,d){let u;const f={...j.useContext(jg),...c,layoutId:RC(c)},{isStatic:h}=f,m=IC(c),p=i(c,h);if(!h&&d0){m.visualElement=TC(o,p,f,t);const b=j.useContext(Qv),w=j.useContext(Yv).strict;m.visualElement&&(u=m.visualElement.loadFeatures(f,w,e,b))}return j.createElement(l0.Provider,{value:m},u&&m.visualElement?j.createElement(u,{visualElement:m.visualElement,...f}):null,n(o,c,EC(p,m.visualElement,d),p,h,m.visualElement))}const a=j.forwardRef(s);return a[AC]=o,a}function RC({layoutId:e}){const t=j.useContext(zg).id;return t&&e!==void 0?t+"-"+e:e}function DC(e){function t(i,o={}){return $C(e(i,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(i,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const NC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pg(e){return typeof e!="string"||e.includes("-")?!1:!!(NC.indexOf(e)>-1||/[A-Z]/.test(e))}const Cf={};function OC(e){Object.assign(Cf,e)}const Ga=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ti=new Set(Ga);function Kv(e,{layout:t,layoutId:n}){return Ti.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Cf[e]||e==="opacity")}const yt=e=>!!(e&&e.getVelocity),FC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},VC=Ga.length;function _C(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},i,o){let s="";for(let a=0;a<VC;a++){const c=Ga[a];if(e[c]!==void 0){const d=FC[c]||c;s+=`${d}(${e[c]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),o?s=o(e,i?"":s):n&&i&&(s="none"),s}const qv=e=>t=>typeof t=="string"&&t.startsWith(e),Zv=qv("--"),A1=qv("var(--"),BC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,HC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mr=(e,t,n)=>Math.min(Math.max(n,e),t),Ei={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ia={...Ei,transform:e=>Mr(0,1,e)},wl={...Ei,default:1},oa=e=>Math.round(e*1e5)/1e5,h0=/(-)?([\d]*\.?[\d])+/g,Jv=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,UC=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xa(e){return typeof e=="string"}const Qa=e=>({test:t=>Xa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),dr=Qa("deg"),bn=Qa("%"),B=Qa("px"),WC=Qa("vh"),YC=Qa("vw"),F2={...bn,parse:e=>bn.parse(e)/100,transform:e=>bn.transform(e*100)},V2={...Ei,transform:Math.round},e8={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scale:wl,scaleX:wl,scaleY:wl,scaleZ:wl,skew:dr,skewX:dr,skewY:dr,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:ia,originX:F2,originY:F2,originZ:B,zIndex:V2,fillOpacity:ia,strokeOpacity:ia,numOctaves:V2};function Tg(e,t,n,i){const{style:o,vars:s,transform:a,transformOrigin:c}=e;let d=!1,u=!1,f=!0;for(const h in t){const m=t[h];if(Zv(h)){s[h]=m;continue}const p=e8[h],b=HC(m,p);if(Ti.has(h)){if(d=!0,a[h]=b,!f)continue;m!==(p.default||0)&&(f=!1)}else h.startsWith("origin")?(u=!0,c[h]=b):o[h]=b}if(t.transform||(d||i?o.transform=_C(e.transform,n,f,i):o.transform&&(o.transform="none")),u){const{originX:h="50%",originY:m="50%",originZ:p=0}=c;o.transformOrigin=`${h} ${m} ${p}`}}const Eg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function t8(e,t,n){for(const i in t)!yt(t[i])&&!Kv(i,n)&&(e[i]=t[i])}function GC({transformTemplate:e},t,n){return j.useMemo(()=>{const i=Eg();return Tg(i,t,{enableHardwareAcceleration:!n},e),Object.assign({},i.vars,i.style)},[t])}function XC(e,t,n){const i=e.style||{},o={};return t8(o,i,e),Object.assign(o,GC(e,t,n)),e.transformValues?e.transformValues(o):o}function QC(e,t,n){const i={},o=XC(e,t,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const KC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Sf(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||KC.has(e)}let n8=e=>!Sf(e);function qC(e){e&&(n8=t=>t.startsWith("on")?!Sf(t):e(t))}try{qC(require("@emotion/is-prop-valid").default)}catch{}function ZC(e,t,n){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(n8(o)||n===!0&&Sf(o)||!t&&!Sf(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}function _2(e,t,n){return typeof e=="string"?e:B.transform(t+n*e)}function JC(e,t,n){const i=_2(t,e.x,e.width),o=_2(n,e.y,e.height);return`${i} ${o}`}const eS={offset:"stroke-dashoffset",array:"stroke-dasharray"},tS={offset:"strokeDashoffset",array:"strokeDasharray"};function nS(e,t,n=1,i=0,o=!0){e.pathLength=1;const s=o?eS:tS;e[s.offset]=B.transform(-i);const a=B.transform(t),c=B.transform(n);e[s.array]=`${a} ${c}`}function Lg(e,{attrX:t,attrY:n,attrScale:i,originX:o,originY:s,pathLength:a,pathSpacing:c=1,pathOffset:d=0,...u},f,h,m){if(Tg(e,u,f,m),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:b,dimensions:w}=e;p.transform&&(w&&(b.transform=p.transform),delete p.transform),w&&(o!==void 0||s!==void 0||b.transform)&&(b.transformOrigin=JC(w,o!==void 0?o:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),a!==void 0&&nS(p,a,c,d,!1)}const r8=()=>({...Eg(),attrs:{}}),Ig=e=>typeof e=="string"&&e.toLowerCase()==="svg";function rS(e,t,n,i){const o=j.useMemo(()=>{const s=r8();return Lg(s,t,{enableHardwareAcceleration:!1},Ig(i),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};t8(s,e.style,e),o.style={...s,...o.style}}return o}function iS(e=!1){return(n,i,o,{latestValues:s},a)=>{const d=(Pg(n)?rS:QC)(i,s,a,n),f={...ZC(i,typeof n=="string",e),...d,ref:o},{children:h}=i,m=j.useMemo(()=>yt(h)?h.get():h,[h]);return j.createElement(n,{...f,children:m})}}function i8(e,{style:t,vars:n},i,o){Object.assign(e.style,t,o&&o.getProjectionStyles(i));for(const s in n)e.style.setProperty(s,n[s])}const o8=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function s8(e,t,n,i){i8(e,t,void 0,i);for(const o in t.attrs)e.setAttribute(o8.has(o)?o:kg(o),t.attrs[o])}function Mg(e,t){const{style:n}=e,i={};for(const o in n)(yt(n[o])||t.style&&yt(t.style[o])||Kv(o,e))&&(i[o]=n[o]);return i}function a8(e,t){const n=Mg(e,t);for(const i in e)if(yt(e[i])||yt(t[i])){const o=Ga.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[o]=e[i]}return n}function Ag(e,t,n,i={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,o)),t}function Ka(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const zf=e=>Array.isArray(e),oS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),sS=e=>zf(e)?e[e.length-1]||0:e;function Bu(e){const t=yt(e)?e.get():e;return oS(t)?t.toValue():t}function aS({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,o,s){const a={latestValues:lS(i,o,s,e),renderState:t()};return n&&(a.mount=c=>n(i,c,a)),a}const l8=e=>(t,n)=>{const i=j.useContext(l0),o=j.useContext(c0),s=()=>aS(e,t,i,o);return n?s():Ka(s)};function lS(e,t,n,i){const o={},s=i(e,{});for(const m in s)o[m]=Bu(s[m]);let{initial:a,animate:c}=e;const d=f0(e),u=Xv(e);t&&u&&!d&&e.inherit!==!1&&(a===void 0&&(a=t.initial),c===void 0&&(c=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const h=f?c:a;return h&&typeof h!="boolean"&&!u0(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const b=Ag(e,p);if(!b)return;const{transitionEnd:w,transition:z,...v}=b;for(const g in v){let y=v[g];if(Array.isArray(y)){const S=f?y.length-1:0;y=y[S]}y!==null&&(o[g]=y)}for(const g in w)o[g]=w[g]}),o}const Ce=e=>e;class B2{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function cS(e){let t=new B2,n=new B2,i=0,o=!1,s=!1;const a=new WeakSet,c={schedule:(d,u=!1,f=!1)=>{const h=f&&o,m=h?t:n;return u&&a.add(d),m.add(d)&&h&&o&&(i=t.order.length),d},cancel:d=>{n.remove(d),a.delete(d)},process:d=>{if(o){s=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),i=t.order.length,i)for(let u=0;u<i;u++){const f=t.order[u];f(d),a.has(f)&&(c.schedule(f),e())}o=!1,s&&(s=!1,c.process(d))}};return c}const jl=["prepare","read","update","preRender","render","postRender"],dS=40;function uS(e,t){let n=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},s=jl.reduce((h,m)=>(h[m]=cS(()=>n=!0),h),{}),a=h=>s[h].process(o),c=()=>{const h=performance.now();n=!1,o.delta=i?1e3/60:Math.max(Math.min(h-o.timestamp,dS),1),o.timestamp=h,o.isProcessing=!0,jl.forEach(a),o.isProcessing=!1,n&&t&&(i=!1,e(c))},d=()=>{n=!0,i=!0,o.isProcessing||e(c)};return{schedule:jl.reduce((h,m)=>{const p=s[m];return h[m]=(b,w=!1,z=!1)=>(n||d(),p.schedule(b,w,z)),h},{}),cancel:h=>jl.forEach(m=>s[m].cancel(h)),state:o,steps:s}}const{schedule:te,cancel:ln,state:Be,steps:lh}=uS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ce,!0),fS={useVisualState:l8({scrapeMotionValuesFromProps:a8,createRenderState:r8,onMount:(e,t,{renderState:n,latestValues:i})=>{te.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),te.render(()=>{Lg(n,i,{enableHardwareAcceleration:!1},Ig(t.tagName),e.transformTemplate),s8(t,n)})}})},hS={useVisualState:l8({scrapeMotionValuesFromProps:Mg,createRenderState:Eg})};function pS(e,{forwardMotionProps:t=!1},n,i){return{...Pg(e)?fS:hS,preloadedFeatures:n,useRender:iS(t),createVisualElement:i,Component:e}}function An(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const c8=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function p0(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const mS=e=>t=>c8(t)&&e(t,p0(t));function Dn(e,t,n,i){return An(e,t,mS(n),i)}const gS=(e,t)=>n=>t(e(n)),Tr=(...e)=>e.reduce(gS);function d8(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const H2=d8("dragHorizontal"),U2=d8("dragVertical");function u8(e){let t=!1;if(e==="y")t=U2();else if(e==="x")t=H2();else{const n=H2(),i=U2();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function f8(){const e=u8(!0);return e?(e(),!1):!0}class _r{constructor(t){this.isMounted=!1,this.node=t}update(){}}function W2(e,t){const n="pointer"+(t?"enter":"leave"),i="onHover"+(t?"Start":"End"),o=(s,a)=>{if(s.pointerType==="touch"||f8())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[i]&&te.update(()=>c[i](s,a))};return Dn(e.current,n,o,{passive:!e.getProps()[i]})}class xS extends _r{mount(){this.unmount=Tr(W2(this.node,!0),W2(this.node,!1))}unmount(){}}class yS extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(An(this.node.current,"focus",()=>this.onFocus()),An(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const h8=(e,t)=>t?e===t?!0:h8(e,t.parentElement):!1;function ch(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,p0(n))}class vS extends _r{constructor(){super(...arguments),this.removeStartListeners=Ce,this.removeEndListeners=Ce,this.removeAccessibleListeners=Ce,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Dn(window,"pointerup",(c,d)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:h}=this.node.getProps();te.update(()=>{!h&&!h8(this.node.current,c.target)?f&&f(c,d):u&&u(c,d)})},{passive:!(i.onTap||i.onPointerUp)}),a=Dn(window,"pointercancel",(c,d)=>this.cancelPress(c,d),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Tr(s,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=c=>{c.key!=="Enter"||!this.checkPressEnd()||ch("up",(d,u)=>{const{onTap:f}=this.node.getProps();f&&te.update(()=>f(d,u))})};this.removeEndListeners(),this.removeEndListeners=An(this.node.current,"keyup",a),ch("down",(c,d)=>{this.startPress(c,d)})},n=An(this.node.current,"keydown",t),i=()=>{this.isPressing&&ch("cancel",(s,a)=>this.cancelPress(s,a))},o=An(this.node.current,"blur",i);this.removeAccessibleListeners=Tr(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&te.update(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!f8()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&te.update(()=>i(t,n))}mount(){const t=this.node.getProps(),n=Dn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=An(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Tr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const $1=new WeakMap,dh=new WeakMap,bS=e=>{const t=$1.get(e.target);t&&t(e)},wS=e=>{e.forEach(bS)};function jS({root:e,...t}){const n=e||document;dh.has(n)||dh.set(n,{});const i=dh.get(n),o=JSON.stringify(t);return i[o]||(i[o]=new IntersectionObserver(wS,{root:e,...t})),i[o]}function kS(e,t,n){const i=jS(t);return $1.set(e,n),i.observe(e),()=>{$1.delete(e),i.unobserve(e)}}const CS={some:0,all:1};class SS extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:o="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:CS[o]},c=d=>{const{isIntersecting:u}=d;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:h}=this.node.getProps(),m=u?f:h;m&&m(d)};return kS(this.node.current,a,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(zS(t,n))&&this.startObserver()}unmount(){}}function zS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const PS={inView:{Feature:SS},tap:{Feature:vS},focus:{Feature:yS},hover:{Feature:xS}};function p8(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function TS(e){const t={};return e.values.forEach((n,i)=>t[i]=n.get()),t}function ES(e){const t={};return e.values.forEach((n,i)=>t[i]=n.getVelocity()),t}function m0(e,t,n){const i=e.getProps();return Ag(i,t,n!==void 0?n:i.custom,TS(e),ES(e))}let m8=Ce,g0=Ce;const Er=e=>e*1e3,Nn=e=>e/1e3,LS={current:!1},g8=e=>Array.isArray(e)&&typeof e[0]=="number";function x8(e){return!!(!e||typeof e=="string"&&y8[e]||g8(e)||Array.isArray(e)&&e.every(x8))}const Ys=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,y8={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ys([0,.65,.55,1]),circOut:Ys([.55,0,1,.45]),backIn:Ys([.31,.01,.66,-.59]),backOut:Ys([.33,1.53,.69,.99])};function v8(e){if(e)return g8(e)?Ys(e):Array.isArray(e)?e.map(v8):y8[e]}function IS(e,t,n,{delay:i=0,duration:o,repeat:s=0,repeatType:a="loop",ease:c,times:d}={}){const u={[t]:n};d&&(u.offset=d);const f=v8(c);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:i,duration:o,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function MS(e,{repeat:t,repeatType:n="loop"}){const i=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[i]}const b8=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,AS=1e-7,$S=12;function RS(e,t,n,i,o){let s,a,c=0;do a=t+(n-t)/2,s=b8(a,i,o)-e,s>0?n=a:t=a;while(Math.abs(s)>AS&&++c<$S);return a}function qa(e,t,n,i){if(e===t&&n===i)return Ce;const o=s=>RS(s,0,1,e,n);return s=>s===0||s===1?s:b8(o(s),t,i)}const DS=qa(.42,0,1,1),NS=qa(0,0,.58,1),w8=qa(.42,0,.58,1),OS=e=>Array.isArray(e)&&typeof e[0]!="number",j8=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,k8=e=>t=>1-e(1-t),$g=e=>1-Math.sin(Math.acos(e)),C8=k8($g),FS=j8($g),S8=qa(.33,1.53,.69,.99),Rg=k8(S8),VS=j8(Rg),_S=e=>(e*=2)<1?.5*Rg(e):.5*(2-Math.pow(2,-10*(e-1))),BS={linear:Ce,easeIn:DS,easeInOut:w8,easeOut:NS,circIn:$g,circInOut:FS,circOut:C8,backIn:Rg,backInOut:VS,backOut:S8,anticipate:_S},Y2=e=>{if(Array.isArray(e)){g0(e.length===4);const[t,n,i,o]=e;return qa(t,n,i,o)}else if(typeof e=="string")return BS[e];return e},Dg=(e,t)=>n=>!!(Xa(n)&&UC.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),z8=(e,t,n)=>i=>{if(!Xa(i))return i;const[o,s,a,c]=i.match(h0);return{[e]:parseFloat(o),[t]:parseFloat(s),[n]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},HS=e=>Mr(0,255,e),uh={...Ei,transform:e=>Math.round(HS(e))},ai={test:Dg("rgb","red"),parse:z8("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+uh.transform(e)+", "+uh.transform(t)+", "+uh.transform(n)+", "+oa(ia.transform(i))+")"};function US(e){let t="",n="",i="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,i+=i,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const R1={test:Dg("#"),parse:US,transform:ai.transform},Co={test:Dg("hsl","hue"),parse:z8("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+bn.transform(oa(t))+", "+bn.transform(oa(n))+", "+oa(ia.transform(i))+")"},ot={test:e=>ai.test(e)||R1.test(e)||Co.test(e),parse:e=>ai.test(e)?ai.parse(e):Co.test(e)?Co.parse(e):R1.parse(e),transform:e=>Xa(e)?e:e.hasOwnProperty("red")?ai.transform(e):Co.transform(e)},xe=(e,t,n)=>-n*e+n*t+e;function fh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function WS({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let o=0,s=0,a=0;if(!t)o=s=a=n;else{const c=n<.5?n*(1+t):n+t-n*t,d=2*n-c;o=fh(d,c,e+1/3),s=fh(d,c,e),a=fh(d,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}const hh=(e,t,n)=>{const i=e*e;return Math.sqrt(Math.max(0,n*(t*t-i)+i))},YS=[R1,ai,Co],GS=e=>YS.find(t=>t.test(e));function G2(e){const t=GS(e);let n=t.parse(e);return t===Co&&(n=WS(n)),n}const P8=(e,t)=>{const n=G2(e),i=G2(t),o={...n};return s=>(o.red=hh(n.red,i.red,s),o.green=hh(n.green,i.green,s),o.blue=hh(n.blue,i.blue,s),o.alpha=xe(n.alpha,i.alpha,s),ai.transform(o))};function XS(e){var t,n;return isNaN(e)&&Xa(e)&&(((t=e.match(h0))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Jv))===null||n===void 0?void 0:n.length)||0)>0}const T8={regex:BC,countKey:"Vars",token:"${v}",parse:Ce},E8={regex:Jv,countKey:"Colors",token:"${c}",parse:ot.parse},L8={regex:h0,countKey:"Numbers",token:"${n}",parse:Ei.parse};function ph(e,{regex:t,countKey:n,token:i,parse:o}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,i),e.values.push(...s.map(o)))}function Pf(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ph(n,T8),ph(n,E8),ph(n,L8),n}function I8(e){return Pf(e).values}function M8(e){const{values:t,numColors:n,numVars:i,tokenised:o}=Pf(e),s=t.length;return a=>{let c=o;for(let d=0;d<s;d++)d<i?c=c.replace(T8.token,a[d]):d<i+n?c=c.replace(E8.token,ot.transform(a[d])):c=c.replace(L8.token,oa(a[d]));return c}}const QS=e=>typeof e=="number"?0:e;function KS(e){const t=I8(e);return M8(e)(t.map(QS))}const Ar={test:XS,parse:I8,createTransformer:M8,getAnimatableNone:KS},A8=(e,t)=>n=>`${n>0?t:e}`;function $8(e,t){return typeof e=="number"?n=>xe(e,t,n):ot.test(e)?P8(e,t):e.startsWith("var(")?A8(e,t):D8(e,t)}const R8=(e,t)=>{const n=[...e],i=n.length,o=e.map((s,a)=>$8(s,t[a]));return s=>{for(let a=0;a<i;a++)n[a]=o[a](s);return n}},qS=(e,t)=>{const n={...e,...t},i={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(i[o]=$8(e[o],t[o]));return o=>{for(const s in i)n[s]=i[s](o);return n}},D8=(e,t)=>{const n=Ar.createTransformer(t),i=Pf(e),o=Pf(t);return i.numVars===o.numVars&&i.numColors===o.numColors&&i.numNumbers>=o.numNumbers?Tr(R8(i.values,o.values),n):A8(e,t)},Ko=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},X2=(e,t)=>n=>xe(e,t,n);function ZS(e){return typeof e=="number"?X2:typeof e=="string"?ot.test(e)?P8:D8:Array.isArray(e)?R8:typeof e=="object"?qS:X2}function JS(e,t,n){const i=[],o=n||ZS(e[0]),s=e.length-1;for(let a=0;a<s;a++){let c=o(e[a],e[a+1]);if(t){const d=Array.isArray(t)?t[a]||Ce:t;c=Tr(d,c)}i.push(c)}return i}function x0(e,t,{clamp:n=!0,ease:i,mixer:o}={}){const s=e.length;if(g0(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=JS(t,i,o),c=a.length,d=u=>{let f=0;if(c>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const h=Ko(e[f],e[f+1],u);return a[f](h)};return n?u=>d(Mr(e[0],e[s-1],u)):d}function ez(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const o=Ko(0,t,i);e.push(xe(n,1,o))}}function N8(e){const t=[0];return ez(t,e.length-1),t}function tz(e,t){return e.map(n=>n*t)}function nz(e,t){return e.map(()=>t||w8).splice(0,e.length-1)}function Tf({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const o=OS(i)?i.map(Y2):Y2(i),s={done:!1,value:t[0]},a=tz(n&&n.length===t.length?n:N8(t),e),c=x0(a,t,{ease:Array.isArray(o)?o:nz(t,o)});return{calculatedDuration:e,next:d=>(s.value=c(d),s.done=d>=e,s)}}function Ng(e,t){return t?e*(1e3/t):0}const rz=5;function O8(e,t,n){const i=Math.max(t-rz,0);return Ng(n-e(i),t-i)}const mh=.001,iz=.01,Q2=10,oz=.05,sz=1;function az({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let o,s;m8(e<=Er(Q2));let a=1-t;a=Mr(oz,sz,a),e=Mr(iz,Q2,Nn(e)),a<1?(o=u=>{const f=u*a,h=f*e,m=f-n,p=D1(u,a),b=Math.exp(-h);return mh-m/p*b},s=u=>{const h=u*a*e,m=h*n+n,p=Math.pow(a,2)*Math.pow(u,2)*e,b=Math.exp(-h),w=D1(Math.pow(u,2),a);return(-o(u)+mh>0?-1:1)*((m-p)*b)/w}):(o=u=>{const f=Math.exp(-u*e),h=(u-n)*e+1;return-mh+f*h},s=u=>{const f=Math.exp(-u*e),h=(n-u)*(e*e);return f*h});const c=5/e,d=cz(o,s,c);if(e=Er(e),isNaN(d))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(d,2)*i;return{stiffness:u,damping:a*2*Math.sqrt(i*u),duration:e}}}const lz=12;function cz(e,t,n){let i=n;for(let o=1;o<lz;o++)i=i-e(i)/t(i);return i}function D1(e,t){return e*Math.sqrt(1-t*t)}const dz=["duration","bounce"],uz=["stiffness","damping","mass"];function K2(e,t){return t.some(n=>e[n]!==void 0)}function fz(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!K2(e,uz)&&K2(e,dz)){const n=az(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function F8({keyframes:e,restDelta:t,restSpeed:n,...i}){const o=e[0],s=e[e.length-1],a={done:!1,value:o},{stiffness:c,damping:d,mass:u,duration:f,velocity:h,isResolvedFromDuration:m}=fz({...i,velocity:-Nn(i.velocity||0)}),p=h||0,b=d/(2*Math.sqrt(c*u)),w=s-o,z=Nn(Math.sqrt(c/u)),v=Math.abs(w)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let g;if(b<1){const y=D1(z,b);g=S=>{const P=Math.exp(-b*z*S);return s-P*((p+b*z*w)/y*Math.sin(y*S)+w*Math.cos(y*S))}}else if(b===1)g=y=>s-Math.exp(-z*y)*(w+(p+z*w)*y);else{const y=z*Math.sqrt(b*b-1);g=S=>{const P=Math.exp(-b*z*S),E=Math.min(y*S,300);return s-P*((p+b*z*w)*Math.sinh(E)+y*w*Math.cosh(E))/y}}return{calculatedDuration:m&&f||null,next:y=>{const S=g(y);if(m)a.done=y>=f;else{let P=p;y!==0&&(b<1?P=O8(g,y,S):P=0);const E=Math.abs(P)<=n,T=Math.abs(s-S)<=t;a.done=E&&T}return a.value=a.done?s:S,a}}}function q2({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:a,min:c,max:d,restDelta:u=.5,restSpeed:f}){const h=e[0],m={done:!1,value:h},p=L=>c!==void 0&&L<c||d!==void 0&&L>d,b=L=>c===void 0?d:d===void 0||Math.abs(c-L)<Math.abs(d-L)?c:d;let w=n*t;const z=h+w,v=a===void 0?z:a(z);v!==z&&(w=v-h);const g=L=>-w*Math.exp(-L/i),y=L=>v+g(L),S=L=>{const D=g(L),N=y(L);m.done=Math.abs(D)<=u,m.value=m.done?v:N};let P,E;const T=L=>{p(m.value)&&(P=L,E=F8({keyframes:[m.value,b(m.value)],velocity:O8(y,L,m.value),damping:o,stiffness:s,restDelta:u,restSpeed:f}))};return T(0),{calculatedDuration:null,next:L=>{let D=!1;return!E&&P===void 0&&(D=!0,S(L),T(L)),P!==void 0&&L>P?E.next(L-P):(!D&&S(L),m)}}}const hz=e=>{const t=({timestamp:n})=>e(n);return{start:()=>te.update(t,!0),stop:()=>ln(t),now:()=>Be.isProcessing?Be.timestamp:performance.now()}},Z2=2e4;function J2(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<Z2;)t+=n,i=e.next(t);return t>=Z2?1/0:t}const pz={decay:q2,inertia:q2,tween:Tf,keyframes:Tf,spring:F8};function Ef({autoplay:e=!0,delay:t=0,driver:n=hz,keyframes:i,type:o="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:c="loop",onPlay:d,onStop:u,onComplete:f,onUpdate:h,...m}){let p=1,b=!1,w,z;const v=()=>{z=new Promise(I=>{w=I})};v();let g;const y=pz[o]||Tf;let S;y!==Tf&&typeof i[0]!="number"&&(S=x0([0,100],i,{clamp:!1}),i=[0,100]);const P=y({...m,keyframes:i});let E;c==="mirror"&&(E=y({...m,keyframes:[...i].reverse(),velocity:-(m.velocity||0)}));let T="idle",L=null,D=null,N=null;P.calculatedDuration===null&&s&&(P.calculatedDuration=J2(P));const{calculatedDuration:X}=P;let fe=1/0,we=1/0;X!==null&&(fe=X+a,we=fe*(s+1)-a);let q=0;const rt=I=>{if(D===null)return;p>0&&(D=Math.min(D,I)),p<0&&(D=Math.min(I-we/p,D)),L!==null?q=L:q=Math.round(I-D)*p;const H=q-t*(p>=0?1:-1),Q=p>=0?H<0:H>we;q=Math.max(H,0),T==="finished"&&L===null&&(q=we);let ae=q,U=P;if(s){const vt=Math.min(q,we)/fe;let Xt=Math.floor(vt),Ve=vt%1;!Ve&&vt>=1&&(Ve=1),Ve===1&&Xt--,Xt=Math.min(Xt,s+1),!!(Xt%2)&&(c==="reverse"?(Ve=1-Ve,a&&(Ve-=a/fe)):c==="mirror"&&(U=E)),ae=Mr(0,1,Ve)*fe}const je=Q?{done:!1,value:i[0]}:U.next(ae);S&&(je.value=S(je.value));let{done:Fe}=je;!Q&&X!==null&&(Fe=p>=0?q>=we:q<=0);const dn=L===null&&(T==="finished"||T==="running"&&Fe);return h&&h(je.value),dn&&R(),je},re=()=>{g&&g.stop(),g=void 0},se=()=>{T="idle",re(),w(),v(),D=N=null},R=()=>{T="finished",f&&f(),re(),w()},V=()=>{if(b)return;g||(g=n(rt));const I=g.now();d&&d(),L!==null?D=I-L:(!D||T==="finished")&&(D=I),T==="finished"&&v(),N=D,L=null,T="running",g.start()};e&&V();const C={then(I,H){return z.then(I,H)},get time(){return Nn(q)},set time(I){I=Er(I),q=I,L!==null||!g||p===0?L=I:D=g.now()-I/p},get duration(){const I=P.calculatedDuration===null?J2(P):P.calculatedDuration;return Nn(I)},get speed(){return p},set speed(I){I===p||!g||(p=I,C.time=Nn(q))},get state(){return T},play:V,pause:()=>{T="paused",L=q},stop:()=>{b=!0,T!=="idle"&&(T="idle",u&&u(),se())},cancel:()=>{N!==null&&rt(N),se()},complete:()=>{T="finished"},sample:I=>(D=0,rt(I))};return C}function mz(e){let t;return()=>(t===void 0&&(t=e()),t)}const gz=mz(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),xz=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),kl=10,yz=2e4,vz=(e,t)=>t.type==="spring"||e==="backgroundColor"||!x8(t.ease);function bz(e,t,{onUpdate:n,onComplete:i,...o}){if(!(gz()&&xz.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let a=!1,c,d,u=!1;const f=()=>{d=new Promise(y=>{c=y})};f();let{keyframes:h,duration:m=300,ease:p,times:b}=o;if(vz(t,o)){const y=Ef({...o,repeat:0,delay:0});let S={done:!1,value:h[0]};const P=[];let E=0;for(;!S.done&&E<yz;)S=y.sample(E),P.push(S.value),E+=kl;b=void 0,h=P,m=E-kl,p="linear"}const w=IS(e.owner.current,t,h,{...o,duration:m,ease:p,times:b}),z=()=>{u=!1,w.cancel()},v=()=>{u=!0,te.update(z),c(),f()};return w.onfinish=()=>{u||(e.set(MS(h,o)),i&&i(),v())},{then(y,S){return d.then(y,S)},attachTimeline(y){return w.timeline=y,w.onfinish=null,Ce},get time(){return Nn(w.currentTime||0)},set time(y){w.currentTime=Er(y)},get speed(){return w.playbackRate},set speed(y){w.playbackRate=y},get duration(){return Nn(m)},play:()=>{a||(w.play(),ln(z))},pause:()=>w.pause(),stop:()=>{if(a=!0,w.playState==="idle")return;const{currentTime:y}=w;if(y){const S=Ef({...o,autoplay:!1});e.setWithVelocity(S.sample(y-kl).value,S.sample(y).value,kl)}v()},complete:()=>{u||w.finish()},cancel:v}}function wz({keyframes:e,delay:t,onUpdate:n,onComplete:i}){const o=()=>(n&&n(e[e.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Ce,pause:Ce,stop:Ce,then:s=>(s(),Promise.resolve()),cancel:Ce,complete:Ce});return t?Ef({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const jz={type:"spring",stiffness:500,damping:25,restSpeed:10},kz=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Cz={type:"keyframes",duration:.8},Sz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zz=(e,{keyframes:t})=>t.length>2?Cz:Ti.has(e)?e.startsWith("scale")?kz(t[1]):jz:Sz,N1=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ar.test(t)||t==="0")&&!t.startsWith("url(")),Pz=new Set(["brightness","contrast","saturate","opacity"]);function Tz(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(h0)||[];if(!i)return e;const o=n.replace(i,"");let s=Pz.has(t)?1:0;return i!==n&&(s*=100),t+"("+s+o+")"}const Ez=/([a-z-]*)\(.*?\)/g,O1={...Ar,getAnimatableNone:e=>{const t=e.match(Ez);return t?t.map(Tz).join(" "):e}},Lz={...e8,color:ot,backgroundColor:ot,outlineColor:ot,fill:ot,stroke:ot,borderColor:ot,borderTopColor:ot,borderRightColor:ot,borderBottomColor:ot,borderLeftColor:ot,filter:O1,WebkitFilter:O1},Og=e=>Lz[e];function V8(e,t){let n=Og(e);return n!==O1&&(n=Ar),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const _8=e=>/^0[^.\s]+$/.test(e);function Iz(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||_8(e)}function Mz(e,t,n,i){const o=N1(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=i.from!==void 0?i.from:e.get();let c;const d=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?a:s[u-1]),Iz(s[u])&&d.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(c=s[u]);if(o&&d.length&&c)for(let u=0;u<d.length;u++){const f=d[u];s[f]=V8(t,c)}return s}function Az({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:o,repeat:s,repeatType:a,repeatDelay:c,from:d,elapsed:u,...f}){return!!Object.keys(f).length}function Fg(e,t){return e[t]||e.default||e}const $z={skipAnimations:!1},Vg=(e,t,n,i={})=>o=>{const s=Fg(i,e)||{},a=s.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Er(a);const d=Mz(t,e,n,s),u=d[0],f=d[d.length-1],h=N1(e,u),m=N1(e,f);let p={keyframes:d,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:b=>{t.set(b),s.onUpdate&&s.onUpdate(b)},onComplete:()=>{o(),s.onComplete&&s.onComplete()}};if(Az(s)||(p={...p,...zz(e,p)}),p.duration&&(p.duration=Er(p.duration)),p.repeatDelay&&(p.repeatDelay=Er(p.repeatDelay)),!h||!m||LS.current||s.type===!1||$z.skipAnimations)return wz(p);if(!i.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const b=bz(t,e,p);if(b)return b}return Ef(p)};function Lf(e){return!!(yt(e)&&e.add)}const B8=e=>/^\-?\d*\.?\d+$/.test(e);function _g(e,t){e.indexOf(t)===-1&&e.push(t)}function Bg(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Hg{constructor(){this.subscriptions=[]}add(t){return _g(this.subscriptions,t),()=>Bg(this.subscriptions,t)}notify(t,n,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,i);else for(let s=0;s<o;s++){const a=this.subscriptions[s];a&&a(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Rz=e=>!isNaN(parseFloat(e)),sa={current:void 0};class Dz{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,o=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:a}=Be;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,te.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>te.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Rz(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hg);const i=this.events[t].add(n);return t==="change"?()=>{i(),te.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=t,this.timeDelta=i}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return sa.current&&sa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ng(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function en(e,t){return new Dz(e,t)}const H8=e=>t=>t.test(e),Nz={test:e=>e==="auto",parse:e=>e},U8=[Ei,B,bn,dr,YC,WC,Nz],xs=e=>U8.find(H8(e)),Oz=[...U8,ot,Ar],Fz=e=>Oz.find(H8(e));function Vz(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,en(n))}function _z(e,t){const n=m0(e,t);let{transitionEnd:i={},transition:o={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const a in s){const c=sS(s[a]);Vz(e,a,c)}}function Bz(e,t,n){var i,o;const s=Object.keys(t).filter(c=>!e.hasValue(c)),a=s.length;if(a)for(let c=0;c<a;c++){const d=s[c],u=t[d];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(o=(i=n[d])!==null&&i!==void 0?i:e.readValue(d))!==null&&o!==void 0?o:t[d]),f!=null&&(typeof f=="string"&&(B8(f)||_8(f))?f=parseFloat(f):!Fz(f)&&Ar.test(u)&&(f=V8(d,u)),e.addValue(d,en(f,{owner:e})),n[d]===void 0&&(n[d]=f),f!==null&&e.setBaseTarget(d,f))}}function Hz(e,t){return t?(t[e]||t.default||t).from:void 0}function Uz(e,t,n){const i={};for(const o in e){const s=Hz(o,t);if(s!==void 0)i[o]=s;else{const a=n.getValue(o);a&&(i[o]=a.get())}}return i}function Wz({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Yz(e,t){const n=e.get();if(Array.isArray(t)){for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}else return n!==t}function W8(e,t,{delay:n=0,transitionOverride:i,type:o}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...c}=e.makeTargetAnimatable(t);const d=e.getValue("willChange");i&&(s=i);const u=[],f=o&&e.animationState&&e.animationState.getState()[o];for(const h in c){const m=e.getValue(h),p=c[h];if(!m||p===void 0||f&&Wz(f,h))continue;const b={delay:n,elapsed:0,...Fg(s||{},h)};if(window.HandoffAppearAnimations){const v=e.getProps()[Gv];if(v){const g=window.HandoffAppearAnimations(v,h,m,te);g!==null&&(b.elapsed=g,b.isHandoff=!0)}}let w=!b.isHandoff&&!Yz(m,p);if(b.type==="spring"&&(m.getVelocity()||b.velocity)&&(w=!1),m.animation&&(w=!1),w)continue;m.start(Vg(h,m,p,e.shouldReduceMotion&&Ti.has(h)?{type:!1}:b));const z=m.animation;Lf(d)&&(d.add(h),z.then(()=>d.remove(h))),u.push(z)}return a&&Promise.all(u).then(()=>{a&&_z(e,a)}),u}function F1(e,t,n={}){const i=m0(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(W8(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:h}=o;return Gz(e,t,u+d,f,h,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,u]=c==="beforeChildren"?[s,a]:[a,s];return d().then(()=>u())}else return Promise.all([s(),a(n.delay)])}function Gz(e,t,n=0,i=0,o=1,s){const a=[],c=(e.variantChildren.size-1)*i,d=o===1?(u=0)=>u*i:(u=0)=>c-u*i;return Array.from(e.variantChildren).sort(Xz).forEach((u,f)=>{u.notify("AnimationStart",t),a.push(F1(u,t,{...s,delay:n+d(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function Xz(e,t){return e.sortNodePosition(t)}function Qz(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const o=t.map(s=>F1(e,s,n));i=Promise.all(o)}else if(typeof t=="string")i=F1(e,t,n);else{const o=typeof t=="function"?m0(e,t,n.custom):t;i=Promise.all(W8(e,o,n))}return i.then(()=>e.notify("AnimationComplete",t))}const Kz=[...Cg].reverse(),qz=Cg.length;function Zz(e){return t=>Promise.all(t.map(({animation:n,options:i})=>Qz(e,n,i)))}function Jz(e){let t=Zz(e);const n=tP();let i=!0;const o=(d,u)=>{const f=m0(e,u);if(f){const{transition:h,transitionEnd:m,...p}=f;d={...d,...p,...m}}return d};function s(d){t=d(e)}function a(d,u){const f=e.getProps(),h=e.getVariantContext(!0)||{},m=[],p=new Set;let b={},w=1/0;for(let v=0;v<qz;v++){const g=Kz[v],y=n[g],S=f[g]!==void 0?f[g]:h[g],P=Ia(S),E=g===u?y.isActive:null;E===!1&&(w=v);let T=S===h[g]&&S!==f[g]&&P;if(T&&i&&e.manuallyAnimateOnMount&&(T=!1),y.protectedKeys={...b},!y.isActive&&E===null||!S&&!y.prevProp||u0(S)||typeof S=="boolean")continue;let D=eP(y.prevProp,S)||g===u&&y.isActive&&!T&&P||v>w&&P,N=!1;const X=Array.isArray(S)?S:[S];let fe=X.reduce(o,{});E===!1&&(fe={});const{prevResolvedValues:we={}}=y,q={...we,...fe},rt=re=>{D=!0,p.has(re)&&(N=!0,p.delete(re)),y.needsAnimating[re]=!0};for(const re in q){const se=fe[re],R=we[re];if(b.hasOwnProperty(re))continue;let V=!1;zf(se)&&zf(R)?V=!p8(se,R):V=se!==R,V?se!==void 0?rt(re):p.add(re):se!==void 0&&p.has(re)?rt(re):y.protectedKeys[re]=!0}y.prevProp=S,y.prevResolvedValues=fe,y.isActive&&(b={...b,...fe}),i&&e.blockInitialAnimation&&(D=!1),D&&(!T||N)&&m.push(...X.map(re=>({animation:re,options:{type:g,...d}})))}if(p.size){const v={};p.forEach(g=>{const y=e.getBaseTarget(g);y!==void 0&&(v[g]=y)}),m.push({animation:v})}let z=!!m.length;return i&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(z=!1),i=!1,z?t(m):Promise.resolve()}function c(d,u,f){var h;if(n[d].isActive===u)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(p=>{var b;return(b=p.animationState)===null||b===void 0?void 0:b.setActive(d,u)}),n[d].isActive=u;const m=a(f,d);for(const p in n)n[p].protectedKeys={};return m}return{animateChanges:a,setActive:c,setAnimateFunction:s,getState:()=>n}}function eP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!p8(t,e):!1}function Ur(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tP(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}class nP extends _r{constructor(t){super(t),t.animationState||(t.animationState=Jz(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),u0(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let rP=0;class iP extends _r{constructor(){super(...arguments),this.id=rP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const s=this.node.animationState.setActive("exit",!t,{custom:i??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const oP={animation:{Feature:nP},exit:{Feature:iP}},e3=(e,t)=>Math.abs(e-t);function sP(e,t){const n=e3(e.x,t.x),i=e3(e.y,t.y);return Math.sqrt(n**2+i**2)}class Y8{constructor(t,n,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=xh(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,p=sP(h.offset,{x:0,y:0})>=3;if(!m&&!p)return;const{point:b}=h,{timestamp:w}=Be;this.history.push({...b,timestamp:w});const{onStart:z,onMove:v}=this.handlers;m||(z&&z(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,m)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=gh(m,this.transformPagePoint),te.update(this.updatePoint,!0)},this.handlePointerUp=(h,m)=>{this.end();const{onEnd:p,onSessionEnd:b,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=xh(h.type==="pointercancel"?this.lastMoveEventInfo:gh(m,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,z),b&&b(h,z)},!c8(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=o||window;const a=p0(t),c=gh(a,this.transformPagePoint),{point:d}=c,{timestamp:u}=Be;this.history=[{...d,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,xh(c,this.history)),this.removeListeners=Tr(Dn(this.contextWindow,"pointermove",this.handlePointerMove),Dn(this.contextWindow,"pointerup",this.handlePointerUp),Dn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ln(this.updatePoint)}}function gh(e,t){return t?{point:t(e.point)}:e}function t3(e,t){return{x:e.x-t.x,y:e.y-t.y}}function xh({point:e},t){return{point:e,delta:t3(e,G8(t)),offset:t3(e,aP(t)),velocity:lP(t,.1)}}function aP(e){return e[0]}function G8(e){return e[e.length-1]}function lP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const o=G8(e);for(;n>=0&&(i=e[n],!(o.timestamp-i.timestamp>Er(t)));)n--;if(!i)return{x:0,y:0};const s=Nn(o.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(o.x-i.x)/s,y:(o.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ct(e){return e.max-e.min}function V1(e,t=0,n=.01){return Math.abs(e-t)<=n}function n3(e,t,n,i=.5){e.origin=i,e.originPoint=xe(t.min,t.max,e.origin),e.scale=Ct(n)/Ct(t),(V1(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=xe(n.min,n.max,e.origin)-e.originPoint,(V1(e.translate)||isNaN(e.translate))&&(e.translate=0)}function aa(e,t,n,i){n3(e.x,t.x,n.x,i?i.originX:void 0),n3(e.y,t.y,n.y,i?i.originY:void 0)}function r3(e,t,n){e.min=n.min+t.min,e.max=e.min+Ct(t)}function cP(e,t,n){r3(e.x,t.x,n.x),r3(e.y,t.y,n.y)}function i3(e,t,n){e.min=t.min-n.min,e.max=e.min+Ct(t)}function la(e,t,n){i3(e.x,t.x,n.x),i3(e.y,t.y,n.y)}function dP(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?xe(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?xe(n,e,i.max):Math.min(e,n)),e}function o3(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function uP(e,{top:t,left:n,bottom:i,right:o}){return{x:o3(e.x,n,o),y:o3(e.y,t,i)}}function s3(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function fP(e,t){return{x:s3(e.x,t.x),y:s3(e.y,t.y)}}function hP(e,t){let n=.5;const i=Ct(e),o=Ct(t);return o>i?n=Ko(t.min,t.max-i,e.min):i>o&&(n=Ko(e.min,e.max-o,t.min)),Mr(0,1,n)}function pP(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const _1=.35;function mP(e=_1){return e===!1?e=0:e===!0&&(e=_1),{x:a3(e,"left","right"),y:a3(e,"top","bottom")}}function a3(e,t,n){return{min:l3(e,t),max:l3(e,n)}}function l3(e,t){return typeof e=="number"?e:e[t]||0}const c3=()=>({translate:0,scale:1,origin:0,originPoint:0}),So=()=>({x:c3(),y:c3()}),d3=()=>({min:0,max:0}),Pe=()=>({x:d3(),y:d3()});function Vt(e){return[e("x"),e("y")]}function X8({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function gP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function yh(e){return e===void 0||e===1}function B1({scale:e,scaleX:t,scaleY:n}){return!yh(e)||!yh(t)||!yh(n)}function ei(e){return B1(e)||Q8(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Q8(e){return u3(e.x)||u3(e.y)}function u3(e){return e&&e!=="0%"}function If(e,t,n){const i=e-n,o=t*i;return n+o}function f3(e,t,n,i,o){return o!==void 0&&(e=If(e,o,i)),If(e,n,i)+t}function H1(e,t=0,n=1,i,o){e.min=f3(e.min,t,n,i,o),e.max=f3(e.max,t,n,i,o)}function K8(e,{x:t,y:n}){H1(e.x,t.translate,t.scale,t.originPoint),H1(e.y,n.translate,n.scale,n.originPoint)}function yP(e,t,n,i=!1){const o=n.length;if(!o)return;t.x=t.y=1;let s,a;for(let c=0;c<o;c++){s=n[c],a=s.projectionDelta;const d=s.instance;d&&d.style&&d.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&zo(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,K8(e,a)),i&&ei(s.latestValues)&&zo(e,s.latestValues))}t.x=h3(t.x),t.y=h3(t.y)}function h3(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function pr(e,t){e.min=e.min+t,e.max=e.max+t}function p3(e,t,[n,i,o]){const s=t[o]!==void 0?t[o]:.5,a=xe(e.min,e.max,s);H1(e,t[n],t[i],a,t.scale)}const vP=["x","scaleX","originX"],bP=["y","scaleY","originY"];function zo(e,t){p3(e.x,t,vP),p3(e.y,t,bP)}function q8(e,t){return X8(xP(e.getBoundingClientRect(),t))}function wP(e,t,n){const i=q8(e,n),{scroll:o}=t;return o&&(pr(i.x,o.offset.x),pr(i.y,o.offset.y)),i}const Z8=({current:e})=>e?e.ownerDocument.defaultView:null,jP=new WeakMap;class kP{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(p0(f,"page").point)},s=(f,h)=>{const{drag:m,dragPropagation:p,onDragStart:b}=this.getProps();if(m&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=u8(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vt(z=>{let v=this.getAxisMotionValue(z).get()||0;if(bn.test(v)){const{projection:g}=this.visualElement;if(g&&g.layout){const y=g.layout.layoutBox[z];y&&(v=Ct(y)*(parseFloat(v)/100))}}this.originPoint[z]=v}),b&&te.update(()=>b(f,h),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(f,h)=>{const{dragPropagation:m,dragDirectionLock:p,onDirectionLock:b,onDrag:w}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:z}=h;if(p&&this.currentDirection===null){this.currentDirection=CP(z),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",h.point,z),this.updateAxis("y",h.point,z),this.visualElement.render(),w&&w(f,h)},c=(f,h)=>this.stop(f,h),d=()=>Vt(f=>{var h;return this.getAnimationState(f)==="paused"&&((h=this.getAxisMotionValue(f).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Y8(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Z8(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:s}=this.getProps();s&&te.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:o}=this.getProps();if(!i||!Cl(t,o,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(a=dP(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&ko(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=uP(o.layoutBox,n):this.constraints=!1,this.elastic=mP(i),s!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Vt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=pP(o.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ko(t))return!1;const i=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const s=wP(i,o.root,this.visualElement.getTransformPagePoint());let a=fP(o.layout.layoutBox,s);if(n){const c=n(gP(a));this.hasMutatedConstraints=!!c,c&&(a=X8(c))}return a}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:o,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},u=Vt(f=>{if(!Cl(f,n,this.currentDirection))return;let h=d&&d[f]||{};a&&(h={min:0,max:0});const m=o?200:1e6,p=o?40:1e7,b={type:"inertia",velocity:i?t[f]:0,bounceStiffness:m,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(f,b)});return Promise.all(u).then(c)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return i.start(Vg(t,i,0,n))}stopAnimation(){Vt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Vt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),i=this.visualElement.getProps(),o=i[n];return o||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Vt(n=>{const{drag:i}=this.getProps();if(!Cl(n,i,this.currentDirection))return;const{projection:o}=this.visualElement,s=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:c}=o.layout.layoutBox[n];s.set(t[n]-xe(a,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ko(n)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Vt(a=>{const c=this.getAxisMotionValue(a);if(c){const d=c.get();o[a]=hP({min:d,max:d},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Vt(a=>{if(!Cl(a,t,null))return;const c=this.getAxisMotionValue(a),{min:d,max:u}=this.constraints[a];c.set(xe(d,u,o[a]))})}addListeners(){if(!this.visualElement.current)return;jP.set(this.visualElement,this);const t=this.visualElement.current,n=Dn(t,"pointerdown",d=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();ko(d)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),i();const a=An(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u})=>{this.isDragging&&u&&(Vt(f=>{const h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=d[f].translate,h.set(h.get()+d[f].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:s=!1,dragElastic:a=_1,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:o,dragConstraints:s,dragElastic:a,dragMomentum:c}}}function Cl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function CP(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class SP extends _r{constructor(t){super(t),this.removeGroupControls=Ce,this.removeListeners=Ce,this.controls=new kP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ce}unmount(){this.removeGroupControls(),this.removeListeners()}}const m3=e=>(t,n)=>{e&&te.update(()=>e(t,n))};class zP extends _r{constructor(){super(...arguments),this.removePointerDownListener=Ce}onPointerDown(t){this.session=new Y8(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Z8(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:m3(t),onStart:m3(n),onMove:i,onEnd:(s,a)=>{delete this.session,o&&te.update(()=>o(s,a))}}}mount(){this.removePointerDownListener=Dn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function PP(){const e=j.useContext(c0);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,o=j.useId();return j.useEffect(()=>i(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const Hu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function g3(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ys={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=g3(e,t.target.x),i=g3(e,t.target.y);return`${n}% ${i}%`}},TP={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,o=Ar.parse(e);if(o.length>5)return i;const s=Ar.createTransformer(e),a=typeof o[0]!="number"?1:0,c=n.x.scale*t.x,d=n.y.scale*t.y;o[0+a]/=c,o[1+a]/=d;const u=xe(c,d,.5);return typeof o[2+a]=="number"&&(o[2+a]/=u),typeof o[3+a]=="number"&&(o[3+a]/=u),s(o)}};class EP extends lt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:o}=this.props,{projection:s}=t;OC(LP),s&&(n.group&&n.group.add(s),i&&i.register&&o&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Hu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:o,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,o||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||te.postRender(()=>{const c=a.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function J8(e){const[t,n]=PP(),i=j.useContext(zg);return lt.createElement(EP,{...e,layoutGroup:i,switchLayoutGroup:j.useContext(Qv),isPresent:t,safeToRemove:n})}const LP={borderRadius:{...ys,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ys,borderTopRightRadius:ys,borderBottomLeftRadius:ys,borderBottomRightRadius:ys,boxShadow:TP},eb=["TopLeft","TopRight","BottomLeft","BottomRight"],IP=eb.length,x3=e=>typeof e=="string"?parseFloat(e):e,y3=e=>typeof e=="number"||B.test(e);function MP(e,t,n,i,o,s){o?(e.opacity=xe(0,n.opacity!==void 0?n.opacity:1,AP(i)),e.opacityExit=xe(t.opacity!==void 0?t.opacity:1,0,$P(i))):s&&(e.opacity=xe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<IP;a++){const c=`border${eb[a]}Radius`;let d=v3(t,c),u=v3(n,c);if(d===void 0&&u===void 0)continue;d||(d=0),u||(u=0),d===0||u===0||y3(d)===y3(u)?(e[c]=Math.max(xe(x3(d),x3(u),i),0),(bn.test(u)||bn.test(d))&&(e[c]+="%")):e[c]=u}(t.rotate||n.rotate)&&(e.rotate=xe(t.rotate||0,n.rotate||0,i))}function v3(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const AP=tb(0,.5,C8),$P=tb(.5,.95,Ce);function tb(e,t,n){return i=>i<e?0:i>t?1:n(Ko(e,t,i))}function b3(e,t){e.min=t.min,e.max=t.max}function Et(e,t){b3(e.x,t.x),b3(e.y,t.y)}function w3(e,t,n,i,o){return e-=t,e=If(e,1/n,i),o!==void 0&&(e=If(e,1/o,i)),e}function RP(e,t=0,n=1,i=.5,o,s=e,a=e){if(bn.test(t)&&(t=parseFloat(t),t=xe(a.min,a.max,t/100)-a.min),typeof t!="number")return;let c=xe(s.min,s.max,i);e===s&&(c-=t),e.min=w3(e.min,t,n,c,o),e.max=w3(e.max,t,n,c,o)}function j3(e,t,[n,i,o],s,a){RP(e,t[n],t[i],t[o],t.scale,s,a)}const DP=["x","scaleX","originX"],NP=["y","scaleY","originY"];function k3(e,t,n,i){j3(e.x,t,DP,n?n.x:void 0,i?i.x:void 0),j3(e.y,t,NP,n?n.y:void 0,i?i.y:void 0)}function C3(e){return e.translate===0&&e.scale===1}function nb(e){return C3(e.x)&&C3(e.y)}function OP(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function rb(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function S3(e){return Ct(e.x)/Ct(e.y)}class FP{constructor(){this.members=[]}add(t){_g(this.members,t),t.scheduleRender()}remove(t){if(Bg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let i;for(let o=n;o>=0;o--){const s=this.members[o];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function z3(e,t,n){let i="";const o=e.x.translate/t.x,s=e.y.translate/t.y;if((o||s)&&(i=`translate3d(${o}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:d,rotateX:u,rotateY:f}=n;d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),f&&(i+=`rotateY(${f}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(i+=`scale(${a}, ${c})`),i||"none"}const VP=(e,t)=>e.depth-t.depth;class _P{constructor(){this.children=[],this.isDirty=!1}add(t){_g(this.children,t),this.isDirty=!0}remove(t){Bg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(VP),this.isDirty=!1,this.children.forEach(t)}}function BP(e,t){const n=performance.now(),i=({timestamp:o})=>{const s=o-n;s>=t&&(ln(i),e(s-t))};return te.read(i,!0),()=>ln(i)}function HP(e){window.MotionDebug&&window.MotionDebug.record(e)}function UP(e){return e instanceof SVGElement&&e.tagName!=="svg"}function WP(e,t,n){const i=yt(e)?e:en(e);return i.start(Vg("",i,t,n)),i.animation}const P3=["","X","Y","Z"],YP={visibility:"hidden"},T3=1e3;let GP=0;const ti={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ib({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(a={},c=t==null?void 0:t()){this.id=GP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ti.totalNodes=ti.resolvedTargetDeltas=ti.recalculatedProjection=0,this.nodes.forEach(KP),this.nodes.forEach(tT),this.nodes.forEach(nT),this.nodes.forEach(qP),HP(ti)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new _P)}addEventListener(a,c){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Hg),this.eventHandlers.get(a).add(c)}notifyListeners(a,...c){const d=this.eventHandlers.get(a);d&&d.notify(...c)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=UP(a),this.instance=a;const{layoutId:d,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(u||d)&&(this.isLayoutDirty=!0),e){let h;const m=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=BP(m,250),Hu.hasAnimatedSinceResize&&(Hu.hasAnimatedSinceResize=!1,this.nodes.forEach(L3))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&f&&(d||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m,hasRelativeTargetChanged:p,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||f.getDefaultTransition()||aT,{onLayoutAnimationStart:z,onLayoutAnimationComplete:v}=f.getProps(),g=!this.targetLayout||!rb(this.targetLayout,b)||p,y=!m&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||m&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const S={...Fg(w,"layout"),onPlay:z,onComplete:v};(f.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else m||L3(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ln(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rT),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(E3);return}this.isUpdating||this.nodes.forEach(JP),this.isUpdating=!1,this.nodes.forEach(eT),this.nodes.forEach(XP),this.nodes.forEach(QP),this.clearAllSnapshots();const c=performance.now();Be.delta=Mr(0,1e3/60,c-Be.timestamp),Be.timestamp=c,Be.isProcessing=!0,lh.update.process(Be),lh.preRender.process(Be),lh.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ZP),this.sharedNodes.forEach(iT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!nb(this.projectionDelta),d=this.getTransformTemplate(),u=d?d(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;a&&(c||ei(this.latestValues)||f)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return a&&(d=this.removeTransform(d)),lT(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return Pe();const c=a.measureViewportBox(),{scroll:d}=this.root;return d&&(pr(c.x,d.offset.x),pr(c.y,d.offset.y)),c}removeElementScroll(a){const c=Pe();Et(c,a);for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:h}=u;if(u!==this.root&&f&&h.layoutScroll){if(f.isRoot){Et(c,a);const{scroll:m}=this.root;m&&(pr(c.x,-m.offset.x),pr(c.y,-m.offset.y))}pr(c.x,f.offset.x),pr(c.y,f.offset.y)}}return c}applyTransform(a,c=!1){const d=Pe();Et(d,a);for(let u=0;u<this.path.length;u++){const f=this.path[u];!c&&f.options.layoutScroll&&f.scroll&&f!==f.root&&zo(d,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),ei(f.latestValues)&&zo(d,f.latestValues)}return ei(this.latestValues)&&zo(d,this.latestValues),d}removeTransform(a){const c=Pe();Et(c,a);for(let d=0;d<this.path.length;d++){const u=this.path[d];if(!u.instance||!ei(u.latestValues))continue;B1(u.latestValues)&&u.updateSnapshot();const f=Pe(),h=u.measurePageBox();Et(f,h),k3(c,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return ei(this.latestValues)&&k3(c,this.latestValues),c}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==d;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:m}=this.options;if(!(!this.layout||!(h||m))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),la(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Pe(),this.targetWithTransforms=Pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Et(this.target,this.layout.layoutBox),K8(this.target,this.targetDelta)):Et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),la(this.relativeTargetOrigin,this.target,p.target),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ti.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||B1(this.parent.latestValues)||Q8(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(u=!1),u)return;const{layout:f,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||h))return;Et(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,p=this.treeScale.y;yP(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:b}=c;if(!b){this.projectionTransform&&(this.projectionDelta=So(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=So(),this.projectionDeltaWithTransform=So());const w=this.projectionTransform;aa(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=z3(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==m||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b)),ti.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,c=!1){const d=this.snapshot,u=d?d.latestValues:{},f={...this.latestValues},h=So();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const m=Pe(),p=d?d.source:void 0,b=this.layout?this.layout.source:void 0,w=p!==b,z=this.getStack(),v=!z||z.members.length<=1,g=!!(w&&!v&&this.options.crossfade===!0&&!this.path.some(sT));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const P=S/1e3;I3(h.x,a.x,P),I3(h.y,a.y,P),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(la(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oT(this.relativeTarget,this.relativeTargetOrigin,m,P),y&&OP(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Pe()),Et(y,this.relativeTarget)),w&&(this.animationValues=f,MP(f,u,this.latestValues,P,g,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ln(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=te.update(()=>{Hu.hasAnimatedSinceResize=!0,this.currentAnimation=WP(0,T3,{...a,onUpdate:c=>{this.mixTargetDelta(c),a.onUpdate&&a.onUpdate(c)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(T3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:c,target:d,layout:u,latestValues:f}=a;if(!(!c||!d||!u)){if(this!==a&&this.layout&&u&&ob(this.options.animationType,this.layout.layoutBox,u.layoutBox)){d=this.target||Pe();const h=Ct(this.layout.layoutBox.x);d.x.min=a.target.x.min,d.x.max=d.x.min+h;const m=Ct(this.layout.layoutBox.y);d.y.min=a.target.y.min,d.y.max=d.y.min+m}Et(c,d),zo(c,f),aa(this.projectionDeltaWithTransform,this.layoutCorrected,c,f)}}registerSharedNode(a,c){this.sharedNodes.has(a)||this.sharedNodes.set(a,new FP),this.sharedNodes.get(a).add(c);const u=c.options.initialPromotionConfig;c.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(c):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:c}=this.options;return c?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:c}=this.options;return c?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:c,preserveFollowOpacity:d}={}){const u=this.getStack();u&&u.promote(this,d),a&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let c=!1;const{latestValues:d}=a;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(c=!0),!c)return;const u={};for(let f=0;f<P3.length;f++){const h="rotate"+P3[f];d[h]&&(u[h]=d[h],a.setStaticValue(h,0))}a.render();for(const f in u)a.setStaticValue(f,u[f]);a.scheduleRender()}getProjectionStyles(a){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return YP;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Bu(a==null?void 0:a.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=Bu(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ei(this.latestValues)&&(w.transform=f?f({},""):"none",this.hasProjected=!1),w}const m=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=z3(this.projectionDeltaWithTransform,this.treeScale,m),f&&(u.transform=f(m,u.transform));const{x:p,y:b}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${b.origin*100}% 0`,h.animationValues?u.opacity=h===this?(d=(c=m.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const w in Cf){if(m[w]===void 0)continue;const{correct:z,applyTo:v}=Cf[w],g=u.transform==="none"?m[w]:z(m[w],h);if(v){const y=v.length;for(let S=0;S<y;S++)u[v[S]]=g}else u[w]=g}return this.options.layoutId&&(u.pointerEvents=h===this?Bu(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var c;return(c=a.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(E3),this.root.sharedNodes.clear()}}}function XP(e){e.updateLayout()}function QP(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Vt(h=>{const m=a?n.measuredBox[h]:n.layoutBox[h],p=Ct(m);m.min=i[h].min,m.max=m.min+p}):ob(s,n.layoutBox,i)&&Vt(h=>{const m=a?n.measuredBox[h]:n.layoutBox[h],p=Ct(i[h]);m.max=m.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+p)});const c=So();aa(c,i,n.layoutBox);const d=So();a?aa(d,e.applyTransform(o,!0),n.measuredBox):aa(d,i,n.layoutBox);const u=!nb(c);let f=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:m,layout:p}=h;if(m&&p){const b=Pe();la(b,n.layoutBox,m.layoutBox);const w=Pe();la(w,i,p.layoutBox),rb(b,w)||(f=!0),h.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=b,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:d,layoutDelta:c,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function KP(e){ti.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qP(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZP(e){e.clearSnapshot()}function E3(e){e.clearMeasurements()}function JP(e){e.isLayoutDirty=!1}function eT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function L3(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tT(e){e.resolveTargetDelta()}function nT(e){e.calcProjection()}function rT(e){e.resetRotation()}function iT(e){e.removeLeadSnapshot()}function I3(e,t,n){e.translate=xe(t.translate,0,n),e.scale=xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function M3(e,t,n,i){e.min=xe(t.min,n.min,i),e.max=xe(t.max,n.max,i)}function oT(e,t,n,i){M3(e.x,t.x,n.x,i),M3(e.y,t.y,n.y,i)}function sT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const aT={duration:.45,ease:[.4,0,.1,1]},A3=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),$3=A3("applewebkit/")&&!A3("chrome/")?Math.round:Ce;function R3(e){e.min=$3(e.min),e.max=$3(e.max)}function lT(e){R3(e.x),R3(e.y)}function ob(e,t,n){return e==="position"||e==="preserve-aspect"&&!V1(S3(t),S3(n),.2)}const cT=ib({attachResizeListener:(e,t)=>An(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),vh={current:void 0},sb=ib({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vh.current){const e=new cT({});e.mount(window),e.setOptions({layoutScroll:!0}),vh.current=e}return vh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),dT={pan:{Feature:zP},drag:{Feature:SP,ProjectionNode:sb,MeasureLayout:J8}},uT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function fT(e){const t=uT.exec(e);if(!t)return[,];const[,n,i]=t;return[n,i]}function U1(e,t,n=1){const[i,o]=fT(e);if(!i)return;const s=window.getComputedStyle(t).getPropertyValue(i);if(s){const a=s.trim();return B8(a)?parseFloat(a):a}else return A1(o)?U1(o,t,n+1):o}function hT(e,{...t},n){const i=e.current;if(!(i instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const s=o.get();if(!A1(s))return;const a=U1(s,i);a&&o.set(a)});for(const o in t){const s=t[o];if(!A1(s))continue;const a=U1(s,i);a&&(t[o]=a,n||(n={}),n[o]===void 0&&(n[o]=s))}return{target:t,transitionEnd:n}}const pT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ab=e=>pT.has(e),mT=e=>Object.keys(e).some(ab),D3=e=>e===Ei||e===B,N3=(e,t)=>parseFloat(e.split(", ")[t]),O3=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return N3(o[1],t);{const s=i.match(/^matrix\((.+)\)$/);return s?N3(s[1],e):0}},gT=new Set(["x","y","z"]),xT=Ga.filter(e=>!gT.has(e));function yT(e){const t=[];return xT.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const qo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:O3(4,13),y:O3(5,14)};qo.translateX=qo.x;qo.translateY=qo.y;const vT=(e,t,n)=>{const i=t.measureViewportBox(),o=t.current,s=getComputedStyle(o),{display:a}=s,c={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{c[u]=qo[u](i,s)}),t.render();const d=t.measureViewportBox();return n.forEach(u=>{const f=t.getValue(u);f&&f.jump(c[u]),e[u]=qo[u](d,s)}),e},bT=(e,t,n={},i={})=>{t={...t},i={...i};const o=Object.keys(t).filter(ab);let s=[],a=!1;const c=[];if(o.forEach(d=>{const u=e.getValue(d);if(!e.hasValue(d))return;let f=n[d],h=xs(f);const m=t[d];let p;if(zf(m)){const b=m.length,w=m[0]===null?1:0;f=m[w],h=xs(f);for(let z=w;z<b&&m[z]!==null;z++)p?g0(xs(m[z])===p):p=xs(m[z])}else p=xs(m);if(h!==p)if(D3(h)&&D3(p)){const b=u.get();typeof b=="string"&&u.set(parseFloat(b)),typeof m=="string"?t[d]=parseFloat(m):Array.isArray(m)&&p===B&&(t[d]=m.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(f===0||m===0)?f===0?u.set(p.transform(f)):t[d]=h.transform(m):(a||(s=yT(e),a=!0),c.push(d),i[d]=i[d]!==void 0?i[d]:t[d],u.jump(m))}),c.length){const d=c.indexOf("height")>=0?window.pageYOffset:null,u=vT(t,e,c);return s.length&&s.forEach(([f,h])=>{e.getValue(f).set(h)}),e.render(),d0&&d!==null&&window.scrollTo({top:d}),{target:u,transitionEnd:i}}else return{target:t,transitionEnd:i}};function wT(e,t,n,i){return mT(t)?bT(e,t,n,i):{target:t,transitionEnd:i}}const jT=(e,t,n,i)=>{const o=hT(e,t,i);return t=o.target,i=o.transitionEnd,wT(e,t,n,i)},W1={current:null},lb={current:!1};function kT(){if(lb.current=!0,!!d0)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>W1.current=e.matches;e.addListener(t),t()}else W1.current=!1}function CT(e,t,n){const{willChange:i}=t;for(const o in t){const s=t[o],a=n[o];if(yt(s))e.addValue(o,s),Lf(i)&&i.add(o);else if(yt(a))e.addValue(o,en(s,{owner:e})),Lf(i)&&i.remove(o);else if(a!==s)if(e.hasValue(o)){const c=e.getValue(o);!c.hasAnimated&&c.set(s)}else{const c=e.getStaticValue(o);e.addValue(o,en(c!==void 0?c:s,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const F3=new WeakMap,cb=Object.keys(Ma),ST=cb.length,V3=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],zT=Sg.length;class PT{constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>te.render(this.render,!1,!0);const{latestValues:c,renderState:d}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=f0(n),this.isVariantNode=Xv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{});for(const h in f){const m=f[h];c[h]!==void 0&&yt(m)&&(m.set(c[h],!1),Lf(u)&&u.add(h))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,F3.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),lb.current||kT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:W1.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){F3.delete(this.current),this.projection&&this.projection.unmount(),ln(this.notifyUpdate),ln(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const i=Ti.has(t),o=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&te.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},i,o,s){let a,c;for(let d=0;d<ST;d++){const u=cb[d],{isEnabled:f,Feature:h,ProjectionNode:m,MeasureLayout:p}=Ma[u];m&&(a=m),f(n)&&(!this.features[u]&&h&&(this.features[u]=new h(this)),p&&(c=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:u,drag:f,dragConstraints:h,layoutScroll:m,layoutRoot:p}=n;this.projection.setOptions({layoutId:d,layout:u,alwaysMeasureLayout:!!f||h&&ko(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:m,layoutRoot:p})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<V3.length;i++){const o=V3[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const s=t["on"+o];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=CT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<zT;i++){const o=Sg[i],s=this.props[o];(Ia(s)||s===!1)&&(n[o]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=en(n,{owner:this}),this.addValue(t,i)),i}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props,o=typeof i=="string"||typeof i=="object"?(n=Ag(this.props,i))===null||n===void 0?void 0:n[t]:void 0;if(i&&o!==void 0)return o;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!yt(s)?s:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class db extends PT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...i},{transformValues:o},s){let a=Uz(i,t||{},this);if(o&&(n&&(n=o(n)),i&&(i=o(i)),a&&(a=o(a))),s){Bz(this,i,a);const c=jT(this,i,a,n);n=c.transitionEnd,i=c.target}return{transition:t,transitionEnd:n,...i}}}function TT(e){return window.getComputedStyle(e)}class ET extends db{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Ti.has(n)){const i=Og(n);return i&&i.default||0}else{const i=TT(t),o=(Zv(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return q8(t,n)}build(t,n,i,o){Tg(t,n,i,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Mg(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;yt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,i,o){i8(t,n,i,o)}}class LT extends db{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ti.has(n)){const i=Og(n);return i&&i.default||0}return n=o8.has(n)?n:kg(n),t.getAttribute(n)}measureInstanceViewportBox(){return Pe()}scrapeMotionValuesFromProps(t,n){return a8(t,n)}build(t,n,i,o){Lg(t,n,i,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,i,o){s8(t,n,i,o)}mount(t){this.isSVGTag=Ig(t.tagName),super.mount(t)}}const IT=(e,t)=>Pg(e)?new LT(t,{enableHardwareAcceleration:!1}):new ET(t,{enableHardwareAcceleration:!0}),MT={layout:{ProjectionNode:sb,MeasureLayout:J8}},AT={...oP,...PS,...dT,...MT},k=DC((e,t)=>pS(e,t,AT,IT));function ub(){const e=j.useRef(!1);return Ya(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $T(){const e=ub(),[t,n]=j.useState(0),i=j.useCallback(()=>{e.current&&n(t+1)},[t]);return[j.useCallback(()=>te.postRender(i),[i]),t]}class RT extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function DT({children:e,isPresent:t}){const n=j.useId(),i=j.useRef(null),o=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:s,height:a,top:c,left:d}=o.current;if(t||!i.current||!s||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),j.createElement(RT,{isPresent:t,childRef:i,sizeRef:o},j.cloneElement(e,{ref:i}))}const bh=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:a})=>{const c=Ka(NT),d=j.useId(),u=j.useMemo(()=>({id:d,initial:t,isPresent:n,custom:o,onExitComplete:f=>{c.set(f,!0);for(const h of c.values())if(!h)return;i&&i()},register:f=>(c.set(f,!1),()=>c.delete(f))}),s?void 0:[n]);return j.useMemo(()=>{c.forEach((f,h)=>c.set(h,!1))},[n]),j.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),a==="popLayout"&&(e=j.createElement(DT,{isPresent:n},e)),j.createElement(c0.Provider,{value:u},e)};function NT(){return new Map}function OT(e){return j.useEffect(()=>()=>e(),[])}const ni=e=>e.key||"";function FT(e,t){e.forEach(n=>{const i=ni(n);t.set(i,n)})}function VT(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const y0=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const c=j.useContext(zg).forceRender||$T()[0],d=ub(),u=VT(e);let f=u;const h=j.useRef(new Map).current,m=j.useRef(f),p=j.useRef(new Map).current,b=j.useRef(!0);if(Ya(()=>{b.current=!1,FT(u,p),m.current=f}),OT(()=>{b.current=!0,p.clear(),h.clear()}),b.current)return j.createElement(j.Fragment,null,f.map(g=>j.createElement(bh,{key:ni(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:a},g)));f=[...f];const w=m.current.map(ni),z=u.map(ni),v=w.length;for(let g=0;g<v;g++){const y=w[g];z.indexOf(y)===-1&&!h.has(y)&&h.set(y,void 0)}return a==="wait"&&h.size&&(f=[]),h.forEach((g,y)=>{if(z.indexOf(y)!==-1)return;const S=p.get(y);if(!S)return;const P=w.indexOf(y);let E=g;if(!E){const T=()=>{h.delete(y);const L=Array.from(p.keys()).filter(D=>!z.includes(D));if(L.forEach(D=>p.delete(D)),m.current=u.filter(D=>{const N=ni(D);return N===y||L.includes(N)}),!h.size){if(d.current===!1)return;c(),i&&i()}};E=j.createElement(bh,{key:ni(S),isPresent:!1,onExitComplete:T,custom:t,presenceAffectsLayout:s,mode:a},S),h.set(y,E)}f.splice(P,0,E)}),f=f.map(g=>{const y=g.key;return h.has(y)?g:j.createElement(bh,{key:ni(g),isPresent:!0,presenceAffectsLayout:s,mode:a},g)}),j.createElement(j.Fragment,null,h.size?f:f.map(g=>j.cloneElement(g)))};function _T(e){const t=Ka(()=>en(e)),{isStatic:n}=j.useContext(jg);if(n){const[,i]=j.useState(e);j.useEffect(()=>t.on("change",i),[])}return t}const BT=e=>e&&typeof e=="object"&&e.mix,HT=e=>BT(e)?e.mix:void 0;function UT(...e){const t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],o=e[1+n],s=e[2+n],a=e[3+n],c=x0(o,s,{mixer:HT(s[0]),...a});return t?c(i):c}function fb(e,t){const n=_T(t()),i=()=>n.set(t());return i(),Ya(()=>{const o=()=>te.update(i,!1,!0),s=e.map(a=>a.on("change",o));return()=>{s.forEach(a=>a()),ln(i)}}),n}function WT(e){sa.current=[],e();const t=fb(sa.current,e);return sa.current=void 0,t}function Mi(e,t,n,i){if(typeof e=="function")return WT(e);const o=typeof t=="function"?t:UT(t,n,i);return Array.isArray(e)?_3(e,o):_3([e],([s])=>o(s))}function _3(e,t){const n=Ka(()=>[]);return fb(e,()=>{n.length=0;const i=e.length;for(let o=0;o<i;o++)n[o]=e[o].get();return t(n)})}function YT(e,t,n){var i;if(typeof e=="string"){let o=document;t&&(g0(!!t.current),o=t.current),n?((i=n[e])!==null&&i!==void 0||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const Uu=new WeakMap;let ur;function GT(e,t){if(t){const{inlineSize:n,blockSize:i}=t[0];return{width:n,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function XT({target:e,contentRect:t,borderBoxSize:n}){var i;(i=Uu.get(e))===null||i===void 0||i.forEach(o=>{o({target:e,contentSize:t,get size(){return GT(e,n)}})})}function QT(e){e.forEach(XT)}function KT(){typeof ResizeObserver>"u"||(ur=new ResizeObserver(QT))}function qT(e,t){ur||KT();const n=YT(e);return n.forEach(i=>{let o=Uu.get(i);o||(o=new Set,Uu.set(i,o)),o.add(t),ur==null||ur.observe(i)}),()=>{n.forEach(i=>{const o=Uu.get(i);o==null||o.delete(t),o!=null&&o.size||ur==null||ur.unobserve(i)})}}const Wu=new Set;let ca;function ZT(){ca=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Wu.forEach(n=>n(t))},window.addEventListener("resize",ca)}function JT(e){return Wu.add(e),ca||ZT(),()=>{Wu.delete(e),!Wu.size&&ca&&(ca=void 0)}}function eE(e,t){return typeof e=="function"?JT(e):qT(e,t)}const tE=50,B3=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),nE=()=>({time:0,x:B3(),y:B3()}),rE={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function H3(e,t,n,i){const o=n[t],{length:s,position:a}=rE[t],c=o.current,d=n.time;o.current=e["scroll"+a],o.scrollLength=e["scroll"+s]-e["client"+s],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Ko(0,o.scrollLength,o.current);const u=i-d;o.velocity=u>tE?0:Ng(o.current-c,u)}function iE(e,t,n){H3(e,"x",t,n),H3(e,"y",t,n),t.time=n}function oE(e,t){const n={x:0,y:0};let i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=o.left-s.left,n.y+=o.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:s}=i.getBBox();n.x+=o,n.y+=s;let a=null,c=i.parentNode;for(;!a;)c.tagName==="svg"&&(a=c),c=i.parentNode;i=a}else break;return n}const sE={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Y1={start:0,center:.5,end:1};function U3(e,t,n=0){let i=0;if(Y1[e]!==void 0&&(e=Y1[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?i=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?i=o/100*document.documentElement.clientWidth:e.endsWith("vh")?i=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(i=t*e),n+i}const aE=[0,0];function lE(e,t,n,i){let o=Array.isArray(e)?e:aE,s=0,a=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Y1[e]?e:"0"]),s=U3(o[0],n,i),a=U3(o[1],t),s-a}const cE={x:0,y:0};function dE(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function uE(e,t,n){let{offset:i=sE.All}=n;const{target:o=e,axis:s="y"}=n,a=s==="y"?"height":"width",c=o!==e?oE(o,e):cE,d=o===e?{width:e.scrollWidth,height:e.scrollHeight}:dE(o),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let f=!t[s].interpolate;const h=i.length;for(let m=0;m<h;m++){const p=lE(i[m],u[a],d[a],c[s]);!f&&p!==t[s].interpolatorOffsets[m]&&(f=!0),t[s].offset[m]=p}f&&(t[s].interpolate=x0(t[s].offset,N8(i)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function fE(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function hE(e,t,n,i={}){return{measure:()=>fE(e,i.target,n),update:o=>{iE(e,n,o),(i.offset||i.target)&&uE(e,n,i)},notify:()=>t(n)}}const vs=new WeakMap,W3=new WeakMap,wh=new WeakMap,Y3=e=>e===document.documentElement?window:e;function pE(e,{container:t=document.documentElement,...n}={}){let i=wh.get(t);i||(i=new Set,wh.set(t,i));const o=nE(),s=hE(t,e,o,n);if(i.add(s),!vs.has(t)){const c=()=>{for(const m of i)m.measure()},d=()=>{for(const m of i)m.update(Be.timestamp)},u=()=>{for(const m of i)m.notify()},f=()=>{te.read(c,!1,!0),te.read(d,!1,!0),te.update(u,!1,!0)};vs.set(t,f);const h=Y3(t);window.addEventListener("resize",f,{passive:!0}),t!==document.documentElement&&W3.set(t,eE(t,f)),h.addEventListener("scroll",f,{passive:!0})}const a=vs.get(t);return te.read(a,!1,!0),()=>{var c;ln(a);const d=wh.get(t);if(!d||(d.delete(s),d.size))return;const u=vs.get(t);vs.delete(t),u&&(Y3(t).removeEventListener("scroll",u),(c=W3.get(t))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function G3(e,t){m8(!!(!t||t.current))}const mE=()=>({scrollX:en(0),scrollY:en(0),scrollXProgress:en(0),scrollYProgress:en(0)});function gE({container:e,target:t,layoutEffect:n=!0,...i}={}){const o=Ka(mE);return(n?Ya:j.useEffect)(()=>(G3("target",t),G3("container",e),pE(({x:a,y:c})=>{o.scrollX.set(a.current),o.scrollXProgress.set(a.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),o}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function xE(e,t,n){return(t=vE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X3(Object(n),!0).forEach(function(i){xE(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X3(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function yE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vE(e){var t=yE(e,"string");return typeof t=="symbol"?t:t+""}const Q3=()=>{};let Ug={},hb={},pb=null,mb={mark:Q3,measure:Q3};try{typeof window<"u"&&(Ug=window),typeof document<"u"&&(hb=document),typeof MutationObserver<"u"&&(pb=MutationObserver),typeof performance<"u"&&(mb=performance)}catch{}const{userAgent:K3=""}=Ug.navigator||{},$r=Ug,ue=hb,q3=pb,Sl=mb;$r.document;const Gn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",gb=~K3.indexOf("MSIE")||~K3.indexOf("Trident/");var bE=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},jE={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nt="classic",v0="duotone",kE="sharp",CE="sharp-duotone",vb=[nt,v0,kE,CE],SE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zE={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},PE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),TE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},EE=["fak","fa-kit","fakd","fa-kit-duotone"],Z3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},LE=["kit"],IE={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ME=["fak","fakd"],AE={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},J3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},zl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$E=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],RE=["fak","fa-kit","fakd","fa-kit-duotone"],DE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},NE={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},OE={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},G1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},FE=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],X1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$E,...FE],VE=["solid","regular","light","thin","duotone","brands"],bb=[1,2,3,4,5,6,7,8,9,10],_E=bb.concat([11,12,13,14,15,16,17,18,19,20]),BE=[...Object.keys(OE),...VE,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zl.GROUP,zl.SWAP_OPACITY,zl.PRIMARY,zl.SECONDARY].concat(bb.map(e=>"".concat(e,"x"))).concat(_E.map(e=>"w-".concat(e))),HE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Hn="___FONT_AWESOME___",Q1=16,wb="fa",jb="svg-inline--fa",bi="data-fa-i2svg",K1="data-fa-pseudo-element",UE="data-fa-pseudo-element-pending",Wg="data-prefix",Yg="data-icon",e4="fontawesome-i2svg",WE="async",YE=["HTML","HEAD","STYLE","SCRIPT"],kb=(()=>{try{return!0}catch{return!1}})();function Za(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[nt]}})}const Cb=M({},xb);Cb[nt]=M(M(M(M({},{"fa-duotone":"duotone"}),xb[nt]),Z3.kit),Z3["kit-duotone"]);const GE=Za(Cb),q1=M({},TE);q1[nt]=M(M(M(M({},{duotone:"fad"}),q1[nt]),J3.kit),J3["kit-duotone"]);const t4=Za(q1),Z1=M({},G1);Z1[nt]=M(M({},Z1[nt]),AE.kit);const Gg=Za(Z1),J1=M({},NE);J1[nt]=M(M({},J1[nt]),IE.kit);Za(J1);const XE=bE,Sb="fa-layers-text",QE=wE,KE=M({},SE);Za(KE);const qE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jh=jE,ZE=[...LE,...BE],da=$r.FontAwesomeConfig||{};function JE(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function eL(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}ue&&typeof ue.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,i]=t;const o=eL(JE(n));o!=null&&(da[i]=o)});const zb={styleDefault:"solid",familyDefault:nt,cssPrefix:wb,replacementClass:jb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};da.familyPrefix&&(da.cssPrefix=da.familyPrefix);const Zo=M(M({},zb),da);Zo.autoReplaceSvg||(Zo.observeMutations=!1);const _={};Object.keys(zb).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){Zo[e]=t,ua.forEach(n=>n(_))},get:function(){return Zo[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){Zo.cssPrefix=e,ua.forEach(t=>t(_))},get:function(){return Zo.cssPrefix}});$r.FontAwesomeConfig=_;const ua=[];function tL(e){return ua.push(e),()=>{ua.splice(ua.indexOf(e),1)}}const Kn=Q1,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nL(e){if(!e||!Gn)return;const t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=ue.head.childNodes;let i=null;for(let o=n.length-1;o>-1;o--){const s=n[o],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return ue.head.insertBefore(t,i),e}const rL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Aa(){let e=12,t="";for(;e-- >0;)t+=rL[Math.random()*62|0];return t}function ss(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xg(e){return e.classList?ss(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Pb(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iL(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Pb(e[n]),'" '),"").trim()}function b0(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Qg(e){return e.size!==gn.size||e.x!==gn.x||e.y!==gn.y||e.rotate!==gn.rotate||e.flipX||e.flipY}function oL(e){let{transform:t,containerWidth:n,iconWidth:i}=e;const o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(s," ").concat(a," ").concat(c)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:d,path:u}}function sL(e){let{transform:t,width:n=Q1,height:i=Q1,startCentered:o=!1}=e,s="";return o&&gb?s+="translate(".concat(t.x/Kn-n/2,"em, ").concat(t.y/Kn-i/2,"em) "):o?s+="translate(calc(-50% + ".concat(t.x/Kn,"em), calc(-50% + ").concat(t.y/Kn,"em)) "):s+="translate(".concat(t.x/Kn,"em, ").concat(t.y/Kn,"em) "),s+="scale(".concat(t.size/Kn*(t.flipX?-1:1),", ").concat(t.size/Kn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var aL=`:root, :host {
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
}`;function Tb(){const e=wb,t=jb,n=_.cssPrefix,i=_.replacementClass;let o=aL;if(n!==e||i!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");o=o.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(c,".".concat(i))}return o}let n4=!1;function kh(){_.autoAddCss&&!n4&&(nL(Tb()),n4=!0)}var lL={mixout(){return{dom:{css:Tb,insertCss:kh}}},hooks(){return{beforeDOMElementCreation(){kh()},beforeI2svg(){kh()}}}};const Un=$r||{};Un[Hn]||(Un[Hn]={});Un[Hn].styles||(Un[Hn].styles={});Un[Hn].hooks||(Un[Hn].hooks={});Un[Hn].shims||(Un[Hn].shims=[]);var xn=Un[Hn];const Eb=[],Lb=function(){ue.removeEventListener("DOMContentLoaded",Lb),Mf=1,Eb.map(e=>e())};let Mf=!1;Gn&&(Mf=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Mf||ue.addEventListener("DOMContentLoaded",Lb));function cL(e){Gn&&(Mf?setTimeout(e,0):Eb.push(e))}function Ja(e){const{tag:t,attributes:n={},children:i=[]}=e;return typeof e=="string"?Pb(e):"<".concat(t," ").concat(iL(n),">").concat(i.map(Ja).join(""),"</").concat(t,">")}function r4(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var dL=function(t,n){return function(i,o,s,a){return t.call(n,i,o,s,a)}},Ch=function(t,n,i,o){var s=Object.keys(t),a=s.length,c=o!==void 0?dL(n,o):n,d,u,f;for(i===void 0?(d=1,f=t[s[0]]):(d=0,f=i);d<a;d++)u=s[d],f=c(f,t[u],u,t);return f};function uL(e){const t=[];let n=0;const i=e.length;for(;n<i;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<i){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((o&1023)<<10)+(s&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function em(e){const t=uL(e);return t.length===1?t[0].toString(16):null}function fL(e,t){const n=e.length;let i=e.charCodeAt(t),o;return i>=55296&&i<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function i4(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return!!i.icon?t[i.iconName]=i.icon:t[n]=i,t},{})}function tm(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,o=i4(t);typeof xn.hooks.addPack=="function"&&!i?xn.hooks.addPack(e,i4(t)):xn.styles[e]=M(M({},xn.styles[e]||{}),o),e==="fas"&&tm("fa",t)}const{styles:$a,shims:hL}=xn,Ib=Object.keys(Gg),pL=Ib.reduce((e,t)=>(e[t]=Object.keys(Gg[t]),e),{});let Kg=null,Mb={},Ab={},$b={},Rb={},Db={};function mL(e){return~ZE.indexOf(e)}function gL(e,t){const n=t.split("-"),i=n[0],o=n.slice(1).join("-");return i===e&&o!==""&&!mL(o)?o:null}const Nb=()=>{const e=i=>Ch($a,(o,s,a)=>(o[a]=Ch(s,i,{}),o),{});Mb=e((i,o,s)=>(o[3]&&(i[o[3]]=s),o[2]&&o[2].filter(c=>typeof c=="number").forEach(c=>{i[c.toString(16)]=s}),i)),Ab=e((i,o,s)=>(i[s]=s,o[2]&&o[2].filter(c=>typeof c=="string").forEach(c=>{i[c]=s}),i)),Db=e((i,o,s)=>{const a=o[2];return i[s]=s,a.forEach(c=>{i[c]=s}),i});const t="far"in $a||_.autoFetchSvg,n=Ch(hL,(i,o)=>{const s=o[0];let a=o[1];const c=o[2];return a==="far"&&!t&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});$b=n.names,Rb=n.unicodes,Kg=w0(_.styleDefault,{family:_.familyDefault})};tL(e=>{Kg=w0(e.styleDefault,{family:_.familyDefault})});Nb();function qg(e,t){return(Mb[e]||{})[t]}function xL(e,t){return(Ab[e]||{})[t]}function li(e,t){return(Db[e]||{})[t]}function Ob(e){return $b[e]||{prefix:null,iconName:null}}function yL(e){const t=Rb[e],n=qg("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rr(){return Kg}const Fb=()=>({prefix:null,iconName:null,rest:[]});function vL(e){let t=nt;const n=Ib.reduce((i,o)=>(i[o]="".concat(_.cssPrefix,"-").concat(o),i),{});return vb.forEach(i=>{(e.includes(n[i])||e.some(o=>pL[i].includes(o)))&&(t=i)}),t}function w0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=nt}=t,i=GE[n][e];if(n===v0&&!e)return"fad";const o=t4[n][e]||t4[n][i],s=e in xn.styles?e:null;return o||s||null}function bL(e){let t=[],n=null;return e.forEach(i=>{const o=gL(_.cssPrefix,i);o?n=o:i&&t.push(i)}),{iconName:n,rest:t}}function o4(e){return e.sort().filter((t,n,i)=>i.indexOf(t)===n)}function j0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let i=null;const o=X1.concat(RE),s=o4(e.filter(h=>o.includes(h))),a=o4(e.filter(h=>!X1.includes(h))),c=s.filter(h=>(i=h,!yb.includes(h))),[d=null]=c,u=vL(s),f=M(M({},bL(a)),{},{prefix:w0(d,{family:u})});return M(M(M({},f),CL({values:e,family:u,styles:$a,config:_,canonical:f,givenPrefix:i})),wL(n,i,f))}function wL(e,t,n){let{prefix:i,iconName:o}=n;if(e||!i||!o)return{prefix:i,iconName:o};const s=t==="fa"?Ob(o):{},a=li(i,o);return o=s.iconName||a||o,i=s.prefix||i,i==="far"&&!$a.far&&$a.fas&&!_.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const jL=vb.filter(e=>e!==nt||e!==v0),kL=Object.keys(G1).filter(e=>e!==nt).map(e=>Object.keys(G1[e])).flat();function CL(e){const{values:t,family:n,canonical:i,givenPrefix:o="",styles:s={},config:a={}}=e,c=n===v0,d=t.includes("fa-duotone")||t.includes("fad"),u=a.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!c&&(d||u||f)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&jL.includes(n)&&(Object.keys(s).find(m=>kL.includes(m))||a.autoFetchSvg)){const m=PE.get(n).defaultShortPrefixId;i.prefix=m,i.iconName=li(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Rr()||"fas"),i}class SL{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(s=>{this.definitions[s]=M(M({},this.definitions[s]||{}),o[s]),tm(s,o[s]);const a=Gg[nt][s];a&&tm(a,o[s]),Nb()})}reset(){this.definitions={}}_pullDefinitions(t,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(o=>{const{prefix:s,iconName:a,icon:c}=i[o],d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(t[s][u]=c)}),t[s][a]=c}),t}}let s4=[],Po={};const Ro={},zL=Object.keys(Ro);function PL(e,t){let{mixoutsTo:n}=t;return s4=e,Po={},Object.keys(Ro).forEach(i=>{zL.indexOf(i)===-1&&delete Ro[i]}),s4.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(s=>{typeof o[s]=="function"&&(n[s]=o[s]),typeof o[s]=="object"&&Object.keys(o[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=o[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Po[a]||(Po[a]=[]),Po[a].push(s[a])})}i.provides&&i.provides(Ro)}),n}function nm(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return(Po[e]||[]).forEach(a=>{t=a.apply(null,[t,...i])}),t}function wi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];(Po[e]||[]).forEach(s=>{s.apply(null,n)})}function Dr(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ro[e]?Ro[e].apply(null,t):void 0}function rm(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Rr();if(t)return t=li(n,t)||t,r4(Vb.definitions,n,t)||r4(xn.styles,n,t)}const Vb=new SL,TL=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,wi("noAuto")},EL={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(wi("beforeI2svg",e),Dr("pseudoElements2svg",e),Dr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,cL(()=>{IL({autoReplaceSvgRoot:t}),wi("watch",e)})}},LL={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:li(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=w0(e[0]);return{prefix:n,iconName:li(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(XE))){const t=j0(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Rr(),iconName:li(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Rr();return{prefix:t,iconName:li(t,e)||e}}}},Tt={noAuto:TL,config:_,dom:EL,parse:LL,library:Vb,findIconDefinition:rm,toHtml:Ja},IL=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=ue}=e;(Object.keys(xn.styles).length>0||_.autoFetchSvg)&&Gn&&_.autoReplaceSvg&&Tt.dom.i2svg({node:t})};function k0(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ja(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Gn)return;const n=ue.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ML(e){let{children:t,main:n,mask:i,attributes:o,styles:s,transform:a}=e;if(Qg(a)&&n.found&&!i.found){const{width:c,height:d}=n,u={x:c/d/2,y:.5};o.style=b0(M(M({},s),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function AL(e){let{prefix:t,iconName:n,children:i,attributes:o,symbol:s}=e;const a=s===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},o),{},{id:a}),children:i}]}]}function Zg(e){const{icons:{main:t,mask:n},prefix:i,iconName:o,transform:s,symbol:a,title:c,maskId:d,titleId:u,extra:f,watchable:h=!1}=e,{width:m,height:p}=n.found?n:t,b=ME.includes(i),w=[_.replacementClass,o?"".concat(_.cssPrefix,"-").concat(o):""].filter(P=>f.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(f.classes).join(" ");let z={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(p)})};const v=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/p*16*.0625,"em")}:{};h&&(z.attributes[bi]=""),c&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(u||Aa())},children:[c]}),delete z.attributes.title);const g=M(M({},z),{},{prefix:i,iconName:o,main:t,mask:n,maskId:d,transform:s,symbol:a,styles:M(M({},v),f.styles)}),{children:y,attributes:S}=n.found&&t.found?Dr("generateAbstractMask",g)||{children:[],attributes:{}}:Dr("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=y,g.attributes=S,a?AL(g):ML(g)}function a4(e){const{content:t,width:n,height:i,transform:o,title:s,extra:a,watchable:c=!1}=e,d=M(M(M({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(d[bi]="");const u=M({},a.styles);Qg(o)&&(u.transform=sL({transform:o,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const f=b0(u);f.length>0&&(d.style=f);const h=[];return h.push({tag:"span",attributes:d,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function $L(e){const{content:t,title:n,extra:i}=e,o=M(M(M({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=b0(i.styles);s.length>0&&(o.style=s);const a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Sh}=xn;function im(e){const t=e[0],n=e[1],[i]=e.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(jh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(jh.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(jh.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}const RL={found:!1,width:512,height:512};function DL(e,t){!kb&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function om(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Rr()),new Promise((i,o)=>{if(n==="fa"){const s=Ob(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Sh[t]&&Sh[t][e]){const s=Sh[t][e];return i(im(s))}DL(e,t),i(M(M({},RL),{},{icon:_.showMissingIcons&&e?Dr("missingIconAbstract")||{}:{}}))})}const l4=()=>{},sm=_.measurePerformance&&Sl&&Sl.mark&&Sl.measure?Sl:{mark:l4,measure:l4},Gs='FA "6.7.2"',NL=e=>(sm.mark("".concat(Gs," ").concat(e," begins")),()=>_b(e)),_b=e=>{sm.mark("".concat(Gs," ").concat(e," ends")),sm.measure("".concat(Gs," ").concat(e),"".concat(Gs," ").concat(e," begins"),"".concat(Gs," ").concat(e," ends"))};var Jg={begin:NL,end:_b};const Yu=()=>{};function c4(e){return typeof(e.getAttribute?e.getAttribute(bi):null)=="string"}function OL(e){const t=e.getAttribute?e.getAttribute(Wg):null,n=e.getAttribute?e.getAttribute(Yg):null;return t&&n}function FL(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function VL(){return _.autoReplaceSvg===!0?Gu.replace:Gu[_.autoReplaceSvg]||Gu.replace}function _L(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function BL(e){return ue.createElement(e)}function Bb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?_L:BL}=t;if(typeof e=="string")return ue.createTextNode(e);const i=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){i.appendChild(Bb(s,{ceFn:n}))}),i}function HL(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Gu={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Bb(n),t)}),t.getAttribute(bi)===null&&_.keepOriginalSource){let n=ue.createComment(HL(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Xg(t).indexOf(_.replacementClass))return Gu.replace(e);const i=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,c)=>(c===_.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const o=n.map(s=>Ja(s)).join(`
`);t.setAttribute(bi,""),t.innerHTML=o}};function d4(e){e()}function Hb(e,t){const n=typeof t=="function"?t:Yu;if(e.length===0)n();else{let i=d4;_.mutateApproach===WE&&(i=$r.requestAnimationFrame||d4),i(()=>{const o=VL(),s=Jg.begin("mutate");e.map(o),s(),n()})}}let ex=!1;function Ub(){ex=!0}function am(){ex=!1}let Af=null;function u4(e){if(!q3||!_.observeMutations)return;const{treeCallback:t=Yu,nodeCallback:n=Yu,pseudoElementsCallback:i=Yu,observeMutationsRoot:o=ue}=e;Af=new q3(s=>{if(ex)return;const a=Rr();ss(s).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!c4(c.addedNodes[0])&&(_.searchPseudoElements&&i(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&_.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&c4(c.target)&&~qE.indexOf(c.attributeName))if(c.attributeName==="class"&&OL(c.target)){const{prefix:d,iconName:u}=j0(Xg(c.target));c.target.setAttribute(Wg,d||a),u&&c.target.setAttribute(Yg,u)}else FL(c.target)&&n(c.target)})}),Gn&&Af.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function UL(){Af&&Af.disconnect()}function WL(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((i,o)=>{const s=o.split(":"),a=s[0],c=s.slice(1);return a&&c.length>0&&(i[a]=c.join(":").trim()),i},{})),n}function YL(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"";let o=j0(Xg(e));return o.prefix||(o.prefix=Rr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=xL(o.prefix,e.innerText)||qg(o.prefix,em(e.innerText))),!o.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function GL(e){const t=ss(e.attributes).reduce((o,s)=>(o.name!=="class"&&o.name!=="style"&&(o[s.name]=s.value),o),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(i||Aa()):(t["aria-hidden"]="true",t.focusable="false")),t}function XL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:o}=YL(e),s=GL(e),a=nm("parseNodeAttributes",{},e);let c=t.styleParser?WL(e):[];return M({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},a)}const{styles:QL}=xn;function Wb(e){const t=_.autoReplaceSvg==="nest"?f4(e,{styleParser:!1}):f4(e);return~t.extra.classes.indexOf(Sb)?Dr("generateLayersText",e,t):Dr("generateSvgReplacementMutation",e,t)}function KL(){return[...EE,...X1]}function h4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();const n=ue.documentElement.classList,i=f=>n.add("".concat(e4,"-").concat(f)),o=f=>n.remove("".concat(e4,"-").concat(f)),s=_.autoFetchSvg?KL():yb.concat(Object.keys(QL));s.includes("fa")||s.push("fa");const a=[".".concat(Sb,":not([").concat(bi,"])")].concat(s.map(f=>".".concat(f,":not([").concat(bi,"])"))).join(", ");if(a.length===0)return Promise.resolve();let c=[];try{c=ss(e.querySelectorAll(a))}catch{}if(c.length>0)i("pending"),o("complete");else return Promise.resolve();const d=Jg.begin("onTree"),u=c.reduce((f,h)=>{try{const m=Wb(h);m&&f.push(m)}catch(m){kb||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,h)=>{Promise.all(u).then(m=>{Hb(m,()=>{i("active"),i("complete"),o("pending"),typeof t=="function"&&t(),d(),f()})}).catch(m=>{d(),h(m)})})}function qL(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wb(e).then(n=>{n&&Hb([n],t)})}function ZL(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(t||{}).icon?t:rm(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:rm(o||{})),e(i,M(M({},n),{},{mask:o}))}}const JL=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,symbol:i=!1,mask:o=null,maskId:s=null,title:a=null,titleId:c=null,classes:d=[],attributes:u={},styles:f={}}=t;if(!e)return;const{prefix:h,iconName:m,icon:p}=e;return k0(M({type:"icon"},e),()=>(wi("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(a?u["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(c||Aa()):(u["aria-hidden"]="true",u.focusable="false")),Zg({icons:{main:im(p),mask:o?im(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:M(M({},gn),n),symbol:i,title:a,maskId:s,titleId:c,extra:{attributes:u,styles:f,classes:d}})))};var eI={mixout(){return{icon:ZL(JL)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=h4,e.nodeCallback=qL,e}}},provides(e){e.i2svg=function(t){const{node:n=ue,callback:i=()=>{}}=t;return h4(n,i)},e.generateSvgReplacementMutation=function(t,n){const{iconName:i,title:o,titleId:s,prefix:a,transform:c,symbol:d,mask:u,maskId:f,extra:h}=n;return new Promise((m,p)=>{Promise.all([om(i,a),u.iconName?om(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[w,z]=b;m([t,Zg({icons:{main:w,mask:z},prefix:a,iconName:i,transform:c,symbol:d,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:i,main:o,transform:s,styles:a}=t;const c=b0(a);c.length>0&&(i.style=c);let d;return Qg(s)&&(d=Dr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(d||o.icon),{children:n,attributes:i}}}},tI={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return k0({type:"layer"},()=>{wi("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(o=>{Array.isArray(o)?o.map(s=>{i=i.concat(s.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},nI={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:o={},styles:s={}}=t;return k0({type:"counter",content:e},()=>(wi("beforeDOMElementCreation",{content:e,params:t}),$L({content:e.toString(),title:n,extra:{attributes:o,styles:s,classes:["".concat(_.cssPrefix,"-layers-counter"),...i]}})))}}}},rI={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,title:i=null,classes:o=[],attributes:s={},styles:a={}}=t;return k0({type:"text",content:e},()=>(wi("beforeDOMElementCreation",{content:e,params:t}),a4({content:e,transform:M(M({},gn),n),title:i,extra:{attributes:s,styles:a,classes:["".concat(_.cssPrefix,"-layers-text"),...o]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:i,transform:o,extra:s}=n;let a=null,c=null;if(gb){const d=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/d,c=u.height/d}return _.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,a4({content:t.innerHTML,width:a,height:c,transform:o,title:i,extra:s,watchable:!0})])}}};const iI=new RegExp('"',"ug"),p4=[1105920,1112319],m4=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),zE),HE),DE),lm=Object.keys(m4).reduce((e,t)=>(e[t.toLowerCase()]=m4[t],e),{}),oI=Object.keys(lm).reduce((e,t)=>{const n=lm[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function sI(e){const t=e.replace(iI,""),n=fL(t,0),i=n>=p4[0]&&n<=p4[1],o=t.length===2?t[0]===t[1]:!1;return{value:em(o?t[0]:t),isSecondary:i||o}}function aI(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),o=isNaN(i)?"normal":i;return(lm[n]||{})[o]||oI[n]}function g4(e,t){const n="".concat(UE).concat(t.replace(":","-"));return new Promise((i,o)=>{if(e.getAttribute(n)!==null)return i();const a=ss(e.children).filter(m=>m.getAttribute(K1)===t)[0],c=$r.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(QE),f=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(a&&!u)return e.removeChild(a),i();if(u&&h!=="none"&&h!==""){const m=c.getPropertyValue("content");let p=aI(d,f);const{value:b,isSecondary:w}=sI(m),z=u[0].startsWith("FontAwesome");let v=qg(p,b),g=v;if(z){const y=yL(b);y.iconName&&y.prefix&&(v=y.iconName,p=y.prefix)}if(v&&!w&&(!a||a.getAttribute(Wg)!==p||a.getAttribute(Yg)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);const y=XL(),{extra:S}=y;S.attributes[K1]=t,om(v,p).then(P=>{const E=Zg(M(M({},y),{},{icons:{main:P,mask:Fb()},prefix:p,iconName:g,extra:S,watchable:!0})),T=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=E.map(L=>Ja(L)).join(`
`),e.removeAttribute(n),i()}).catch(o)}else i()}else i()})}function lI(e){return Promise.all([g4(e,"::before"),g4(e,"::after")])}function cI(e){return e.parentNode!==document.head&&!~YE.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(K1)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function x4(e){if(Gn)return new Promise((t,n)=>{const i=ss(e.querySelectorAll("*")).filter(cI).map(lI),o=Jg.begin("searchPseudoElements");Ub(),Promise.all(i).then(()=>{o(),am(),t()}).catch(()=>{o(),am(),n()})})}var dI={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=x4,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=ue}=t;_.searchPseudoElements&&x4(n)}}};let y4=!1;var uI={mixout(){return{dom:{unwatch(){Ub(),y4=!0}}}},hooks(){return{bootstrap(){u4(nm("mutationObserverCallbacks",{}))},noAuto(){UL()},watch(e){const{observeMutationsRoot:t}=e;y4?am():u4(nm("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const v4=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,i)=>{const o=i.toLowerCase().split("-"),s=o[0];let a=o.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)};var fI={mixout(){return{parse:{transform:e=>v4(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=v4(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:i,containerWidth:o,iconWidth:s}=t;const a={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(d," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),m.path)}]}]}}}};const zh={x:0,y:0,width:"100%",height:"100%"};function b4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hI(e){return e.tag==="g"?e.children:[e]}var pI={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),i=n?j0(n.split(" ").map(o=>o.trim())):Fb();return i.prefix||(i.prefix=Rr()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:i,main:o,mask:s,maskId:a,transform:c}=t;const{width:d,icon:u}=o,{width:f,icon:h}=s,m=oL({transform:c,containerWidth:f,iconWidth:d}),p={tag:"rect",attributes:M(M({},zh),{},{fill:"white"})},b=u.children?{children:u.children.map(b4)}:{},w={tag:"g",attributes:M({},m.inner),children:[b4(M({tag:u.tag,attributes:M(M({},u.attributes),m.path)},b))]},z={tag:"g",attributes:M({},m.outer),children:[w]},v="mask-".concat(a||Aa()),g="clip-".concat(a||Aa()),y={tag:"mask",attributes:M(M({},zh),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,z]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:hI(h)},y]};return n.push(S,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(v,")")},zh)}),{children:n,attributes:i}}}},mI={provides(e){let t=!1;$r.matchMedia&&(t=$r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=M(M({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:M(M({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},gI={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},xI=[lL,eI,tI,nI,rI,dI,uI,fI,pI,mI,gI];PL(xI,{mixoutsTo:Tt});Tt.noAuto;Tt.config;Tt.library;Tt.dom;const cm=Tt.parse;Tt.findIconDefinition;Tt.toHtml;const yI=Tt.icon;Tt.layer;Tt.text;Tt.counter;var Yb={exports:{}},vI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bI=vI,wI=bI;function Gb(){}function Xb(){}Xb.resetWarningCache=Gb;var jI=function(){function e(i,o,s,a,c,d){if(d!==wI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xb,resetWarningCache:Gb};return n.PropTypes=n,n};Yb.exports=jI();var kI=Yb.exports;const Y=Y5(kI);function w4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w4(Object(n),!0).forEach(function(i){To(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w4(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function $f(e){"@babel/helpers - typeof";return $f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$f(e)}function To(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CI(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,s;for(s=0;s<i.length;s++)o=i[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function SI(e,t){if(e==null)return{};var n=CI(e,t),i,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function dm(e){return zI(e)||PI(e)||TI(e)||EI()}function zI(e){if(Array.isArray(e))return um(e)}function PI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function TI(e,t){if(e){if(typeof e=="string")return um(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return um(e,t)}}function um(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function EI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LI(e){var t,n=e.beat,i=e.fade,o=e.beatFade,s=e.bounce,a=e.shake,c=e.flash,d=e.spin,u=e.spinPulse,f=e.spinReverse,h=e.pulse,m=e.fixedWidth,p=e.inverse,b=e.border,w=e.listItem,z=e.flip,v=e.size,g=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":s,"fa-shake":a,"fa-flash":c,"fa-spin":d,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":m,"fa-inverse":p,"fa-border":b,"fa-li":w,"fa-flip":z===!0,"fa-flip-horizontal":z==="horizontal"||z==="both","fa-flip-vertical":z==="vertical"||z==="both"},To(t,"fa-".concat(v),typeof v<"u"&&v!==null),To(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),To(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),To(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(P){return S[P]?P:null}).filter(function(P){return P})}function II(e){return e=e-0,e===e}function Qb(e){return II(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var MI=["style"];function AI(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $I(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var i=n.indexOf(":"),o=Qb(n.slice(0,i)),s=n.slice(i+1).trim();return o.startsWith("webkit")?t[AI(o)]=s:t[o]=s,t},{})}function Kb(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(d){return Kb(e,d)}),o=Object.keys(t.attributes||{}).reduce(function(d,u){var f=t.attributes[u];switch(u){case"class":d.attrs.className=f,delete t.attributes.class;break;case"style":d.attrs.style=$I(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?d.attrs[u.toLowerCase()]=f:d.attrs[Qb(u)]=f}return d},{attrs:{}}),s=n.style,a=s===void 0?{}:s,c=SI(n,MI);return o.attrs.style=pn(pn({},o.attrs.style),a),e.apply(void 0,[t.tag,pn(pn({},o.attrs),c)].concat(dm(i)))}var qb=!1;try{qb=!0}catch{}function RI(){if(!qb&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function j4(e){if(e&&$f(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(cm.icon)return cm.icon(e);if(e===null)return null;if(e&&$f(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ph(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?To({},e,t):{}}var k4={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},x=lt.forwardRef(function(e,t){var n=pn(pn({},k4),e),i=n.icon,o=n.mask,s=n.symbol,a=n.className,c=n.title,d=n.titleId,u=n.maskId,f=j4(i),h=Ph("classes",[].concat(dm(LI(n)),dm((a||"").split(" ")))),m=Ph("transform",typeof n.transform=="string"?cm.transform(n.transform):n.transform),p=Ph("mask",j4(o)),b=yI(f,pn(pn(pn(pn({},h),m),p),{},{symbol:s,title:c,titleId:d,maskId:u}));if(!b)return RI("Could not find icon",f),null;var w=b.abstract,z={ref:t};return Object.keys(n).forEach(function(v){k4.hasOwnProperty(v)||(z[v]=n[v])}),DI(w[0],z)});x.displayName="FontAwesomeIcon";x.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};var DI=Kb.bind(null,lt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const NI={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"]},OI={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},pe=OI,FI={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},tx=FI,VI={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},nx={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]},C4={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Rf={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},S4={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},Zb={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},_I={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},hi={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},fm={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},BI={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]},C0={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Jb={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"]},HI={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"]},Df={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"]},UI={prefix:"fas",iconName:"wifi",icon:[640,512,["wifi-3","wifi-strong"],"f1eb","M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},ji={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"]},WI={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},F=WI,tn={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},YI={prefix:"fas",iconName:"file-word",icon:[384,512,[],"f1c2","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"]},GI={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},St=GI,XI={prefix:"fas",iconName:"file-zipper",icon:[384,512,["file-archive"],"f1c6","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm-6.3 71.8c3.7-14 16.4-23.8 30.9-23.8l14.8 0c14.5 0 27.2 9.7 30.9 23.8l23.5 88.2c1.4 5.4 2.1 10.9 2.1 16.4c0 35.2-28.8 63.7-64 63.7s-64-28.5-64-63.7c0-5.5 .7-11.1 2.1-16.4l23.5-88.2zM112 336c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0z"]},QI=XI,KI={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]},Pl={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},qI={prefix:"fas",iconName:"file-excel",icon:[384,512,[],"f1c3","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"]},ew={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},ZI={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},JI={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},ki=JI,eM={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},tM={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"]},nM=tM,rM={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},iM={prefix:"fas",iconName:"file-image",icon:[384,512,[128443],"f1c5","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-88 0-40 0-48 0-48 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"]},oM={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Nf=oM,sM={prefix:"fas",iconName:"route",icon:[512,512,[],"f4d7","M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5L320 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96 43 96 96s-43 96-96 96l-276.4 0c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2L416 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-53 0-96-43-96-96s43-96 96-96l39.8 0c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},tw={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Oe={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},hm={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},pm={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},nw={prefix:"fas",iconName:"file-pdf",icon:[512,512,[],"f1c1","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]},z4={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},Do={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},aM={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},S0=aM,Jo={prefix:"fas",iconName:"truck",icon:[640,512,[128666,9951],"f0d1","M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},lM={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},cM={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},z0=cM,dM={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Wn=dM,Ra={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},rw={prefix:"fas",iconName:"network-wired",icon:[640,512,[],"f6ff","M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"]},mm={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]},De={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},uM={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},P0=uM,Da={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]},P4=Da,T0={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"]},Ci={prefix:"fas",iconName:"credit-card",icon:[576,512,[128179,62083,"credit-card-alt"],"f09d","M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]},fM={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},rx=fM,hM={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},pM={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"]},mM={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},gM={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Br=gM,T4={prefix:"fas",iconName:"receipt",icon:[384,512,[129534],"f543","M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"]},No={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},iw={prefix:"fas",iconName:"truck-fast",icon:[640,512,["shipping-fast"],"f48b","M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},xM={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},yM={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},pi=yM,vM={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},bM={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},ix={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},wM={prefix:"fas",iconName:"percent",icon:[384,512,[62101,62785,"percentage"],"25","M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},ow={prefix:"fas",iconName:"trophy",icon:[576,512,[127942],"f091","M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"]},jM={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},sw=jM,gm={prefix:"fas",iconName:"award",icon:[384,512,[],"f559","M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"]},wn={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},kM={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"]},CM={prefix:"fas",iconName:"desktop",icon:[576,512,[128421,61704,"desktop-alt"],"f390","M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"]},SM={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},E4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},zM={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Xn=zM,PM={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"]},We={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},TM={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};var xm=new Map,Tl=new WeakMap,L4=0,EM=void 0;function LM(e){return e?(Tl.has(e)||(L4+=1,Tl.set(e,L4.toString())),Tl.get(e)):"0"}function IM(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?LM(e.root):e[t]}`).toString()}function MM(e){const t=IM(e);let n=xm.get(t);if(!n){const i=new Map;let o;const s=new IntersectionObserver(a=>{a.forEach(c=>{var d;const u=c.isIntersecting&&o.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=u),(d=i.get(c.target))==null||d.forEach(f=>{f(u,c)})})},e);o=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},xm.set(t,n)}return n}function AM(e,t,n={},i=EM){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:o,observer:s,elements:a}=MM(n),c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(a.delete(e),s.unobserve(e)),a.size===0&&(s.disconnect(),xm.delete(o))}}function $M({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:s,skip:a,initialInView:c,fallbackInView:d,onChange:u}={}){var f;const[h,m]=j.useState(null),p=j.useRef(u),[b,w]=j.useState({inView:!!c,entry:void 0});p.current=u,j.useEffect(()=>{if(a||!h)return;let y;return y=AM(h,(S,P)=>{w({inView:S,entry:P}),p.current&&p.current(S,P),P.isIntersecting&&s&&y&&(y(),y=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},d),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,h,o,i,s,a,n,d,t]);const z=(f=b.entry)==null?void 0:f.target,v=j.useRef(void 0);!h&&z&&!s&&!a&&v.current!==z&&(v.current=z,w({inView:!!c,entry:void 0}));const g=[m,b.inView,b.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const RM=l(k.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3000;
  max-width: 400px;
  width: 100%;
`,DM=l(k.div)`
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
`,NM=l.div`
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
`,OM=l.div`
  flex: 1;
  min-width: 0;
`,FM=l.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`,VM=l.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
`,_M=l.button`
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
`,aw=lt.createContext(),BM=({children:e})=>{const[t,n]=lt.useState([]),i=(d,u="success",f=3e3)=>{const h=Date.now()+Math.random(),m={id:h,message:d,type:u,duration:f};return n(p=>[...p,m]),setTimeout(()=>{o(h)},f),h},o=d=>{n(u=>u.filter(f=>f.id!==d))},s=d=>{switch(d){case"success":return F;case"error":return pi;case"info":return NI;case"warning":return hm;default:return F}},a=d=>{switch(d){case"success":return"Успешно!";case"error":return"Ошибка";case"info":return"Информация";case"warning":return"Предупреждение";default:return"Уведомление"}},c={notifications:t,addNotification:i,removeNotification:o};return r.jsxs(aw.Provider,{value:c,children:[e,r.jsx(RM,{children:r.jsx(y0,{children:t.map(d=>r.jsxs(DM,{type:d.type,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{type:"spring",damping:25,stiffness:300},children:[r.jsx(NM,{type:d.type,children:r.jsx(x,{icon:s(d.type)})}),r.jsxs(OM,{children:[r.jsx(FM,{children:a(d.type)}),r.jsx(VM,{children:d.message})]}),r.jsx(_M,{onClick:()=>o(d.id),children:r.jsx(x,{icon:pi})})]},d.id))})})]})},E0=()=>{const e=lt.useContext(aw);if(!e)throw new Error("useNotification must be used within a NotificationProvider");return e},lw=j.createContext(),HM=(e,t)=>{switch(t.type){case"ADD_TO_CART":return e.items.find(i=>i.id===t.payload.id)?{...e,items:e.items.map(i=>i.id===t.payload.id?{...i,quantity:i.quantity+1}:i)}:{...e,items:[...e.items,{...t.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...e,items:e.items.filter(i=>i.id!==t.payload)};case"UPDATE_QUANTITY":return{...e,items:e.items.map(i=>i.id===t.payload.id?{...i,quantity:t.payload.quantity}:i)};case"CLEAR_CART":return{...e,items:[]};default:return e}},UM=({children:e})=>{const[t,n]=j.useReducer(HM,{items:[]}),{addNotification:i}=E0();j.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(t.items))},[t.items]),j.useEffect(()=>{const h=localStorage.getItem("cart");h&&JSON.parse(h).forEach(p=>{n({type:"ADD_TO_CART",payload:p})})},[]);const o=h=>{n({type:"ADD_TO_CART",payload:h}),i(`${h.name} добавлен в корзину`,"success",3e3)},s=h=>{n({type:"REMOVE_FROM_CART",payload:h})},a=(h,m)=>{m<=0?s(h):n({type:"UPDATE_QUANTITY",payload:{id:h,quantity:m}})},c=()=>{n({type:"CLEAR_CART"})},d=()=>t.items.reduce((h,m)=>h+m.quantity,0),u=()=>t.items.reduce((h,m)=>h+m.price*m.quantity,0),f={items:t.items,addToCart:o,removeFromCart:s,updateQuantity:a,clearCart:c,getTotalItems:d,getTotalPrice:u};return r.jsx(lw.Provider,{value:f,children:e})},Hr=()=>{const e=j.useContext(lw);if(!e)throw new Error("useCart must be used within a CartProvider");return e},I4=l.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 90px;
`,WM=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
`,YM=l.div`
  margin-bottom: 2rem;
`,GM=l.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`,XM=l.p`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 300;
  margin-bottom: 1.5rem;
`,QM=l.div`
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
`,KM=l.div`
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
`;const Th=l(k.button)`
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
`,qM=l.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    display: none;
  }
`,ZM=l(k.button)`
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
`,JM=l.div`
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
`,Eh=l.button`
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
`,eA=l(k.button)`
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
`,tA=l(k.div)`
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
`,nA=l(k.div)`
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
`,rA=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,iA=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,oA=l(k.button)`
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
`,Wr=l.div`
  margin-bottom: 2rem;
`,Yr=l.h3`
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
`,Zn=l.input`
  margin: 0;
  width: 18px;
  height: 18px;
  accent-color: #2f5483;
`,sA=l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`,M4=l.input`
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
`,aA=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,A4=l(k.button)`
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
`,Lh=l.div`
  position: relative;
  display: inline-block;
`,Ih=l.div`
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
`,Ai=l.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,$i=l.div`
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`,bs=l.label`
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
`,ws=l.input`
  margin: 0;
`,lA=l.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,$4=l.input`
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
`,cA=l(k.button)`
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
`,dA=l.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`,Gr=l.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Xr=l.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #ff4757;
  }
`,uA=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,cw=l(k.div)`
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
`,fA=l.div`
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
  
  ${cw}:hover & img {
    transform: scale(1.05);
  }
`,hA=l.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #2f5483;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,pA=l.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,mA=l.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
`,gA=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`,xA=l.p`
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
`,yA=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Qr=l.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 400;
`,vA=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`,R4=l.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
`,bA=l.div`
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  text-decoration: line-through;
  margin-right: 0.5rem;
`,wA=l.div`
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
`;l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`;const jA=l.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`,kA=l(k.button)`
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
`,CA=l(k.button)`
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
`,SA=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`,zA=l(k.button)`
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
`,PA=l.div`
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
`,TA=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`,EA=l.div`
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
`,LA=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,IA=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,MA=l(k.button)`
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
`;function AA(){const[e,t]=vk(),n=cn(),[i,o]=j.useState([]),[s,a]=j.useState(!0),[c,d]=j.useState(12),[u,f]=j.useState("name"),h=12,{addToCart:m}=Hr(),[p,b]=j.useState({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),[w,z]=j.useState(null),[v,g]=j.useState(!1),[y,S]=j.useState(!1);j.useEffect(()=>{const C=I=>{!I.target.closest(".filter-dropdown")&&!I.target.closest(".sort-dropdown")&&(z(null),g(!1))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]);const P=()=>{S(!1)};j.useEffect(()=>{fetch("/catalog-products.json").then(C=>C.json()).then(C=>{o(C),a(!1)}).catch(C=>{console.error("Ошибка загрузки товаров:",C),a(!1)})},[]),j.useEffect(()=>{const C=e.get("category"),I=e.get("brand");(C||I)&&(b({categories:C?[C]:[],brands:I?[I]:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),d(12))},[e]),j.useEffect(()=>{d(12)},[p]);const E=(C,I,H)=>{b(Q=>{const ae={...Q};return C==="priceRange"?ae.priceRange={...Q.priceRange,...I}:H?ae[C]=[...Q[C],I]:ae[C]=Q[C].filter(U=>U!==I),ae}),setCurrentPage(1)};j.useEffect(()=>{const C=new URLSearchParams;p.categories.length>0&&C.set("category",p.categories[0]),p.brands.length>0&&C.set("brand",p.brands[0]),t(C)},[p.categories,p.brands,t]);const T=()=>{b({categories:[],brands:[],priceRange:{min:"",max:""},phases:[],voltage:[],accuracy:[]}),t({}),d(12)},L=(C,I)=>{b(H=>{const Q={...H};return C==="priceRange"?Q.priceRange={min:"",max:""}:Q[C]=H[C].filter(ae=>ae!==I),Q}),setCurrentPage(1)},D=C=>C.filter(I=>!(p.categories.length>0&&!p.categories.includes(I.category)||p.brands.length>0&&!p.brands.includes(I.brand)||p.priceRange.min&&I.price<parseInt(p.priceRange.min)||p.priceRange.max&&I.price>parseInt(p.priceRange.max)||p.phases.length>0&&!p.phases.includes(I.specifications.phases)||p.voltage.length>0&&!p.voltage.includes(I.specifications.voltage)||p.accuracy.length>0&&!p.accuracy.includes(I.specifications.accuracy))),N=C=>{const H=i.map(Q=>C==="specifications.phases"?Q.specifications.phases:C==="specifications.voltage"?Q.specifications.voltage:C==="specifications.accuracy"?Q.specifications.accuracy:Q[C]).filter(Q=>Q&&Q!==""&&Q!=="нет"&&Q!=="не требуется"&&Q!=="ТМ выход");return[...new Set(H)].sort()},X=D([...i]).sort((C,I)=>{switch(u){case"name":return C.name.localeCompare(I.name);case"price-asc":return C.price-I.price;case"price-desc":return I.price-C.price;default:return 0}}),fe=X.slice(0,c),we=c<X.length,q=()=>p.categories.length>0||p.brands.length>0||p.priceRange.min||p.priceRange.max||p.phases.length>0||p.voltage.length>0||p.accuracy.length>0,rt=()=>{d(C=>C+h)},re=()=>{alert("Функция заказа под заказ будет добавлена позже. Свяжитесь с нами по телефону для уточнения деталей.")},se=C=>{f(C),g(!1)},R=()=>{switch(u){case"name":return"По названию";case"price-asc":return"По цене (возрастание)";case"price-desc":return"По цене (убывание)";default:return"По названию"}},V=()=>{if(p.categories.length===1&&p.brands.length===0)return`${p.categories[0]}`;if(p.categories.length===0&&p.brands.length===1)return`Счетчики ${p.brands[0]}`;if(p.categories.length===1&&p.brands.length===1)return`${p.categories[0]} ${p.brands[0]}`;if(p.categories.length>1)return`Категории: ${p.categories.join(", ")}`;if(p.brands.length>1)return`Бренды: ${p.brands.join(", ")}`;if(p.priceRange.min||p.priceRange.max){let C="По цене";return p.priceRange.min&&p.priceRange.max?C=`От ${p.priceRange.min} до ${p.priceRange.max} ₽`:p.priceRange.min?C=`От ${p.priceRange.min} ₽`:p.priceRange.max&&(C=`До ${p.priceRange.max} ₽`),C}if(p.phases.length>0||p.voltage.length>0||p.accuracy.length>0){const C=[];return p.phases.length>0&&C.push(`${p.phases.join(", ")} фаза`),p.voltage.length>0&&C.push(p.voltage.join(", ")),p.accuracy.length>0&&C.push(`Класс ${p.accuracy.join(", ")}`),C.join(", ")}return"Каталог"};return j.useEffect(()=>{const C=V(),I=q()?`${C} - Счетчики электроэнергии | Стройэнергетика`:"Каталог счетчиков электроэнергии | Стройэнергетика";document.title=I},[p,q]),s?r.jsx(I4,{children:r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"1.2rem",color:"#2f5483"},children:"Загрузка товаров..."})}):r.jsxs(I4,{children:[r.jsxs(WM,{children:[r.jsxs(YM,{children:[r.jsx(GM,{children:V()}),r.jsx(XM,{children:q()?`Найдено ${X.length} товаров`:"Широкий выбор счетчиков электроэнергии от ведущих производителей с гарантией качества"})]}),r.jsxs(QM,{children:[r.jsxs(KM,{children:[r.jsxs(Lh,{className:"filter-dropdown",children:[r.jsxs(Th,{active:p.categories.length>0||p.brands.length>0,onClick:()=>z(w==="main"?null:"main"),whileHover:{scale:1.02},children:[r.jsx(x,{icon:Pl}),"Категории и бренды"]}),r.jsxs(Ih,{isOpen:w==="main",children:[r.jsxs(Ai,{children:[r.jsx($i,{children:"Категории"}),N("category").map(C=>r.jsxs(bs,{children:[r.jsx(ws,{type:"checkbox",checked:p.categories.includes(C),onChange:I=>E("categories",C,I.target.checked)}),C]},C))]}),r.jsxs(Ai,{children:[r.jsx($i,{children:"Бренды"}),N("brand").map(C=>r.jsxs(bs,{children:[r.jsx(ws,{type:"checkbox",checked:p.brands.includes(C),onChange:I=>E("brands",C,I.target.checked)}),C]},C))]})]})]}),r.jsxs(Lh,{className:"filter-dropdown",children:[r.jsxs(Th,{active:p.priceRange.min||p.priceRange.max,onClick:()=>z(w==="price"?null:"price"),whileHover:{scale:1.02},children:[r.jsx(x,{icon:Pl}),"Цена"]}),r.jsx(Ih,{isOpen:w==="price",children:r.jsxs(Ai,{children:[r.jsx($i,{children:"Диапазон цен"}),r.jsxs(lA,{children:[r.jsx($4,{type:"number",placeholder:"От",value:p.priceRange.min,onChange:C=>E("priceRange",{min:C.target.value})}),r.jsx("span",{children:"-"}),r.jsx($4,{type:"number",placeholder:"До",value:p.priceRange.max,onChange:C=>E("priceRange",{max:C.target.value})})]})]})})]}),r.jsxs(Lh,{className:"filter-dropdown",children:[r.jsxs(Th,{active:p.phases.length>0||p.voltage.length>0||p.accuracy.length>0,onClick:()=>z(w==="specs"?null:"specs"),whileHover:{scale:1.02},children:[r.jsx(x,{icon:Pl}),"Характеристики"]}),r.jsxs(Ih,{isOpen:w==="specs",children:[r.jsxs(Ai,{children:[r.jsx($i,{children:"Количество фаз"}),N("specifications.phases").map(C=>r.jsxs(bs,{children:[r.jsx(ws,{type:"checkbox",checked:p.phases.includes(C),onChange:I=>E("phases",C,I.target.checked)}),C," фаза"]},C))]}),r.jsxs(Ai,{children:[r.jsx($i,{children:"Напряжение"}),N("specifications.voltage").map(C=>r.jsxs(bs,{children:[r.jsx(ws,{type:"checkbox",checked:p.voltage.includes(C),onChange:I=>E("voltage",C,I.target.checked)}),C]},C))]}),r.jsxs(Ai,{children:[r.jsx($i,{children:"Класс точности"}),N("specifications.accuracy").map(C=>r.jsxs(bs,{children:[r.jsx(ws,{type:"checkbox",checked:p.accuracy.includes(C),onChange:I=>E("accuracy",C,I.target.checked)}),C]},C))]})]})]}),q()&&r.jsx(cA,{onClick:T,whileHover:{scale:1.02},children:"Очистить все"})]}),r.jsxs(eA,{active:q(),onClick:()=>S(!0),whileHover:{scale:1.02},children:[r.jsx(x,{icon:Pl}),"Фильтры"]}),r.jsxs(qM,{className:"sort-dropdown",children:[r.jsxs(ZM,{onClick:()=>g(!v),whileHover:{scale:1.02},children:[r.jsx(x,{icon:KI}),R()]}),r.jsxs(JM,{isOpen:v,children:[r.jsx(Eh,{className:u==="name"?"active":"",onClick:()=>se("name"),children:"По названию"}),r.jsx(Eh,{className:u==="price-asc"?"active":"",onClick:()=>se("price-asc"),children:"По цене (возрастание)"}),r.jsx(Eh,{className:u==="price-desc"?"active":"",onClick:()=>se("price-desc"),children:"По цене (убывание)"})]})]})]}),q()&&r.jsxs(dA,{children:[p.categories.map(C=>r.jsxs(Gr,{children:["Категория: ",C,r.jsx(Xr,{onClick:()=>L("categories",C),children:"×"})]},`category-${C}`)),p.brands.map(C=>r.jsxs(Gr,{children:["Бренд: ",C,r.jsx(Xr,{onClick:()=>L("brands",C),children:"×"})]},`brand-${C}`)),p.priceRange.min&&r.jsxs(Gr,{children:["Цена от: ",p.priceRange.min," ₽",r.jsx(Xr,{onClick:()=>L("priceRange"),children:"×"})]},"price-min"),p.priceRange.max&&r.jsxs(Gr,{children:["Цена до: ",p.priceRange.max," ₽",r.jsx(Xr,{onClick:()=>L("priceRange"),children:"×"})]},"price-max"),p.phases.map(C=>r.jsxs(Gr,{children:[C," фаза",r.jsx(Xr,{onClick:()=>L("phases",C),children:"×"})]},`phase-${C}`)),p.voltage.map(C=>r.jsxs(Gr,{children:[C,r.jsx(Xr,{onClick:()=>L("voltage",C),children:"×"})]},`voltage-${C}`)),p.accuracy.map(C=>r.jsxs(Gr,{children:["Класс ",C,r.jsx(Xr,{onClick:()=>L("accuracy",C),children:"×"})]},`accuracy-${C}`))]}),r.jsx(uA,{children:fe.map((C,I)=>r.jsxs(cw,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:I*.1},onClick:()=>n(`/product/${C.id}`),children:[r.jsxs(fA,{children:[C.mainImage||C.image?r.jsx("img",{src:C.mainImage||`/images/products/${C.image}`,alt:C.name,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"2rem",fontWeight:"bold"},children:C.brand}),r.jsx(hA,{children:C.brand}),C.discount&&r.jsxs(wA,{children:["-",C.discount,"%"]})]}),r.jsxs(pA,{children:[r.jsx(mA,{children:C.category}),r.jsx(gA,{children:C.name}),r.jsx(xA,{children:C.description}),r.jsxs(yA,{children:[C.specifications.phases&&C.specifications.phases!=="нет"&&r.jsxs(Qr,{children:[C.specifications.phases," фаза"]}),C.specifications.voltage&&C.specifications.voltage!=="нет"&&r.jsx(Qr,{children:C.specifications.voltage}),C.specifications.accuracy&&C.specifications.accuracy!=="нет"&&r.jsxs(Qr,{children:[C.specifications.accuracy," класс"]}),C.specifications.tariffs&&C.specifications.tariffs!=="однотарифный"&&r.jsx(Qr,{children:"Многотарифный"}),C.category==="Устройства сбора и передачи данных"&&r.jsxs(r.Fragment,{children:[C.specifications.power_3phase&&r.jsx(Qr,{children:"3×230/400В"}),C.specifications.interfaces&&typeof C.specifications.interfaces=="object"&&r.jsx(Qr,{children:"Wi-Fi, LTE"}),C.specifications.temperature&&r.jsx(Qr,{children:"-40...+55°C"})]})]}),r.jsx(vA,{children:C.originalPrice?r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsxs(bA,{children:[C.originalPrice.toLocaleString()," ₽"]}),r.jsxs(R4,{children:[C.price.toLocaleString()," ₽"]})]}):r.jsxs(R4,{children:[C.price.toLocaleString()," ₽"]})}),r.jsxs(jA,{children:[r.jsxs(kA,{onClick:H=>{H.stopPropagation(),m(C)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Wn}),"В корзину"]}),r.jsxs(CA,{onClick:H=>{H.stopPropagation(),n(`/product/${C.id}`)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:S0}),"Подробнее"]})]})]})]},C.id))}),we&&r.jsx(SA,{children:r.jsxs(zA,{onClick:rt,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Показать еще ",Math.min(h,X.length-c)," товаров"]})}),r.jsx(PA,{children:r.jsxs(TA,{children:[r.jsx(EA,{children:r.jsx(x,{icon:Br})}),r.jsx(LA,{children:"Не нашли нужный товар в каталоге?"}),r.jsx(IA,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(MA,{onClick:re,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Купить под заказ"]})]})})]}),r.jsx(tA,{isOpen:y,initial:{opacity:0},animate:{opacity:y?1:0},transition:{duration:.3},onClick:P}),r.jsxs(nA,{initial:{x:"-100%"},animate:{x:y?0:"-100%"},transition:{duration:.3,ease:"easeInOut"},children:[r.jsxs(rA,{children:[r.jsx(iA,{children:"Фильтры"}),r.jsx(oA,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:P,children:"×"})]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Категории"}),N("category").map(C=>r.jsxs(qn,{children:[r.jsx(Zn,{type:"checkbox",checked:p.categories.includes(C),onChange:I=>E("categories",C,I.target.checked)}),C]},C))]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Бренды"}),N("brand").map(C=>r.jsxs(qn,{children:[r.jsx(Zn,{type:"checkbox",checked:p.brands.includes(C),onChange:I=>E("brands",C,I.target.checked)}),C]},C))]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Цена"}),r.jsxs(sA,{children:[r.jsx(M4,{type:"number",placeholder:"От",value:p.priceRange.min,onChange:C=>E("priceRange",{min:C.target.value})}),r.jsx("span",{children:"-"}),r.jsx(M4,{type:"number",placeholder:"До",value:p.priceRange.max,onChange:C=>E("priceRange",{max:C.target.value})})]})]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Количество фаз"}),N("specifications.phases").map(C=>r.jsxs(qn,{children:[r.jsx(Zn,{type:"checkbox",checked:p.phases.includes(C),onChange:I=>E("phases",C,I.target.checked)}),C," фаза"]},C))]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Напряжение"}),N("specifications.voltage").map(C=>r.jsxs(qn,{children:[r.jsx(Zn,{type:"checkbox",checked:p.voltage.includes(C),onChange:I=>E("voltage",C,I.target.checked)}),C]},C))]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Класс точности"}),N("specifications.accuracy").map(C=>r.jsxs(qn,{children:[r.jsx(Zn,{type:"checkbox",checked:p.accuracy.includes(C),onChange:I=>E("accuracy",C,I.target.checked)}),"Класс ",C]},C))]}),r.jsxs(Wr,{children:[r.jsx(Yr,{children:"Сортировка"}),r.jsxs(qn,{children:[r.jsx(Zn,{type:"radio",name:"sort",checked:u==="name",onChange:()=>se("name")}),"По названию"]}),r.jsxs(qn,{children:[r.jsx(Zn,{type:"radio",name:"sort",checked:u==="price-asc",onChange:()=>se("price-asc")}),"По цене (возрастание)"]}),r.jsxs(qn,{children:[r.jsx(Zn,{type:"radio",name:"sort",checked:u==="price-desc",onChange:()=>se("price-desc")}),"По цене (убывание)"]})]}),r.jsxs(aA,{children:[r.jsx(A4,{className:"secondary",onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Очистить все"}),r.jsx(A4,{className:"primary",onClick:P,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Применить"})]})]})]})}const $A=l(k.section)`
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
`,RA=l(k.div)`
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
`,DA=l(k.div)`
  max-width: 600px;
`,NA=l(k.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
`,OA=l(k.p)`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
`,FA=l(k.div)`
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
`,Mh=l(k.div)`
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
`,D4=l(k.button)`
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
`,VA=l(k.div)`
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
`,Si=l(k.section)`
  padding: 8rem 0;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
`,El=l(k.h2)`
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
`,_A=l(Si)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  
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
`,BA=l.div`
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
`,Ln=l(k.div)`
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
`,Ri=l.div`
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
  
  ${Ln}:hover & {
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
`,Di=l.h3`
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
  
  ${Ln}:hover & {
    &:after {
      width: 60px;
      background: rgba(47, 84, 131, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`,Ni=l.p`
  color: #666;
  opacity: 0.9;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
  transition: opacity 0.4s ease;
  max-width: 100%;
  
  ${Ln}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,HA=l.div`
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
`,xr=l(k.div)`
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
`,js=l.div`
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
`,ks=l.div`
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
  
  ${xr}:hover & {
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
`,Cs=l.h3`
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
  
  ${xr}:hover & {
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
`,Ss=l.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  transition: all 0.4s ease;
  z-index: 3;
  
  ${xr}:hover & {
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
`;const UA=l(Si)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,WA=l.div`
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
`,YA=l(k.div)`
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
`;const GA=l.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,XA=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zs=l.div`
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
`,QA=l(k.div)`
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
`,KA=l.div`
  position: relative;
  z-index: 2;
`,qA=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,ZA=l.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,JA=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`,N4=l.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.1);
`,O4=l.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,F4=l.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,e$=l(Si)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  color: #000000;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,t$=l.div`
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
`,n$=l(k.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
`,r$=l.h2`
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
`,i$=l.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,o$=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ll=l.div`
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
`,s$=l(k.form)`
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
    padding: 2rem;
  }
`,a$=l.div`
  position: relative;
  z-index: 2;
`,l$=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,Il=l.div`
  margin-bottom: 1.5rem;
`,Ml=l.label`
  display: block;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,Ah=l.input`
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
`,c$=l.textarea`
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
`,d$=l(k.button)`
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
`,u$=l.div`
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
`,f$=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`,h$=l.div`
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
`,p$=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,m$=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,g$=l(k.button)`
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
`;l(Si)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 8rem 0;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  
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
`;l(k.button)`
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
`;const x$=l(Si)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`,y$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,dw=l(k.div)`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  cursor: pointer;
  
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
`,v$=l.div`
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
  
  ${dw}:hover & img {
    transform: scale(1.05);
  }
`,b$=l.div`
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
`,w$=l.div`
  padding: 1.5rem;
`,j$=l.div`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,k$=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`,C$=l.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`,S$=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,z$=l.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2f5483;
`,P$=l.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`,T$=l(k.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #2f5483;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;function E$(){const[e,t]=$M({triggerOnce:!0,threshold:.1}),{getTotalItems:n,getTotalPrice:i,addToCart:o}=Hr(),s=cn(),a=[{id:1,name:"АГАТ 1-3",type:"Однофазный счетчик с ЭМУ на DIN-рейку",brand:"АГАТ",price:3800,originalPrice:4500,discount:15,image:"agat-1-3.svg",mainImage:"/images/products/agat-1-3/0001.png",images:["/images/products/agat-1-3/0001.png","/images/products/agat-1-3/0002.png","/images/products/agat-1-3/0003.png","/images/products/agat-1-3/0004.png"]},{id:2,name:"АГАТ 1-4",type:"Однофазный счетчик с ЭМУ на DIN-рейку и панель",brand:"АГАТ",price:4200,originalPrice:4200,discount:0,image:"agat-1-4.svg",mainImage:"/images/products/agat-1-4/01.png",images:["/images/products/agat-1-4/01.png","/images/products/agat-1-4/02.png"]},{id:3,name:"АГАТ 2-32(5)",type:"Однофазный счетчик с ЖКИ на DIN-рейку",brand:"АГАТ",price:5200,originalPrice:6500,discount:20,image:"agat-2-32.svg",mainImage:"/images/products/agat-2-32/001.png",images:["/images/products/agat-2-32/001.png","/images/products/agat-2-32/002.png","/images/products/agat-2-32/003.png","/images/products/agat-2-32/004.png"]},{id:4,name:"АГАТ 2-42(5)",type:"Однофазный счетчик с ЖКИ на DIN-рейку или панель",brand:"АГАТ",price:5800,originalPrice:5800,discount:0,image:"agat-2-42.svg",mainImage:"/images/products/agat-2-42/001.png",images:["/images/products/agat-2-42/001.png","/images/products/agat-2-42/002.png","/images/products/agat-2-42/003.png","/images/products/agat-2-42/004.png"]},{id:5,name:"АГАТ S200",type:"Однофазный многофункциональный счетчик с ЖКИ",brand:"АГАТ",price:7200,originalPrice:8500,discount:15,image:"agat-s200.svg",mainImage:"/images/products/agat-s200/001.png",images:["/images/products/agat-s200/001.png","/images/products/agat-s200/002.png","/images/products/agat-s200/003.png"]},{id:6,name:"НЕМО-1",type:"Однофазный многофункциональный счетчик с ЖКИ",brand:"НЕМО",price:7500,originalPrice:9e3,discount:17,image:"nemo-1.svg",mainImage:"/images/products/nemo-1/001.png",images:["/images/products/nemo-1/001.png","/images/products/nemo-1/002.png","/images/products/nemo-1/003.png"]},{id:7,name:"АГАТ 3-3.100.2",type:"Трехфазный счетчик с ЖКИ на DIN-рейку",brand:"АГАТ",price:8500,originalPrice:10500,discount:19,image:"agat-3-100-2.svg",mainImage:"/images/products/agat-3-100-2/001.png",images:["/images/products/agat-3-100-2/001.png","/images/products/agat-3-100-2/002.png"]},{id:8,name:"RTU-325",type:"Устройство сбора и передачи данных",brand:"АГАТ",price:2e4,originalPrice:25e3,discount:20,image:"rtu-325.svg",mainImage:"/images/products/rtu-325/001.png",images:["/images/products/rtu-325/001.png","/images/products/rtu-325/002.png"]}];j.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const c=d=>{o(d)};return r.jsxs(r.Fragment,{children:[r.jsxs($A,{children:[r.jsx(RA,{ref:e,initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:r.jsxs(DA,{children:[r.jsx(NA,{children:"Счетчики электроэнергии"}),r.jsx(OA,{children:"Официальный дилер с гарантией качества и профессиональной установкой"}),r.jsxs(FA,{children:[r.jsx(Mh,{children:"Гарантия 5 лет на все модели"}),r.jsx(Mh,{children:"Бесплатная доставка от 10 000 ₽"}),r.jsx(Mh,{children:"Профессиональный монтаж"})]}),r.jsx(D4,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/catalog",children:r.jsx("span",{children:"Смотреть каталог"})})]})}),r.jsx(VA,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M12 5v14M5 12l7 7 7-7"})})})]}),r.jsxs(x$,{children:[r.jsx(El,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:"Популярные товары"}),r.jsx(y$,{children:a.map((d,u)=>r.jsxs(dw,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:u*.1},onClick:()=>s(`/product/${d.id}`),children:[r.jsxs(v$,{children:[d.mainImage?r.jsx("img",{src:d.mainImage,alt:d.name}):r.jsx("img",{src:`/images/products/${d.image}`,alt:d.name}),d.discount>0&&r.jsxs(b$,{children:["-",d.discount,"%"]})]}),r.jsxs(w$,{children:[r.jsx(j$,{children:d.brand}),r.jsx(k$,{children:d.name}),r.jsx(C$,{children:d.type}),r.jsxs(S$,{children:[r.jsxs(z$,{children:[d.price.toLocaleString()," ₽"]}),d.originalPrice>d.price&&r.jsxs(P$,{children:[d.originalPrice.toLocaleString()," ₽"]})]}),r.jsxs(T$,{onClick:f=>{f.stopPropagation(),c(d)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Wn}),"Добавить в корзину"]})]})]},d.id))})]}),r.jsxs(UA,{children:[r.jsx(El,{children:"О компании"}),r.jsxs(WA,{children:[r.jsxs(YA,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6},children:[r.jsx(GA,{children:"Мы являемся официальным дилером по продаже и установке счетчиков электроэнергии. Наш опыт работы в сфере энергоснабжения насчитывает более 10 лет, что позволяет нам предлагать только качественное оборудование и профессиональный сервис."}),r.jsxs(XA,{children:[r.jsx(zs,{children:"Официальные дилеры ведущих производителей счетчиков"}),r.jsx(zs,{children:"Гарантия на все оборудование"}),r.jsx(zs,{children:"Бесплатная доставка по всей России"}),r.jsx(zs,{children:"Профессиональный монтаж и настройка"}),r.jsx(zs,{children:"Круглосуточная техническая поддержка"})]})]}),r.jsx(QA,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6},children:r.jsxs(KA,{children:[r.jsx(qA,{children:"Наши преимущества"}),r.jsx(ZA,{children:"Мы предлагаем широкий ассортимент счетчиков электроэнергии, от однофазных до многофункциональных. Наши цены всегда конкурентоспособны, а качество гарантировано."}),r.jsxs(JA,{children:[r.jsxs(N4,{children:[r.jsx(O4,{children:"10+"}),r.jsx(F4,{children:"лет на рынке"})]}),r.jsxs(N4,{children:[r.jsx(O4,{children:"1000+"}),r.jsx(F4,{children:"установленных счетчиков"})]})]})]})})]})]}),r.jsxs(_A,{children:[r.jsx(El,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:"Наши преимущества"}),r.jsxs(BA,{children:[r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[r.jsx(Ri,{children:r.jsx(x,{icon:St})}),r.jsx(Di,{children:"Гарантия качества"}),r.jsx(Ni,{children:"Все счетчики проходят тщательную проверку и имеют официальную гарантию производителя сроком до 5 лет"})]}),r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[r.jsx(Ri,{children:r.jsx(x,{icon:iw})}),r.jsx(Di,{children:"Быстрая доставка"}),r.jsx(Ni,{children:"Доставляем заказы в течение 1-2 дней по всей России с возможностью отслеживания в реальном времени"})]}),r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[r.jsx(Ri,{children:r.jsx(x,{icon:ki})}),r.jsx(Di,{children:"Профессиональный монтаж"}),r.jsx(Ni,{children:"Опытные специалисты выполнят установку и настройку счетчиков с соблюдением всех норм безопасности"})]}),r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[r.jsx(Ri,{children:r.jsx(x,{icon:Df})}),r.jsx(Di,{children:"Поддержка 24/7"}),r.jsx(Ni,{children:"Круглосуточная техническая поддержка и консультации по всем вопросам от квалифицированных специалистов"})]}),r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:[r.jsx(Ri,{children:r.jsx(x,{icon:wM})}),r.jsx(Di,{children:"Выгодные цены"}),r.jsx(Ni,{children:"Регулярные акции, скидки и специальные предложения для постоянных клиентов и оптовых закупок"})]}),r.jsxs(Ln,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[r.jsx(Ri,{children:r.jsx(x,{icon:tn})}),r.jsx(Di,{children:"Официальный дилер"}),r.jsx(Ni,{children:"Работаем напрямую с производителями, предоставляем все необходимые документы и сертификаты"})]})]})]}),r.jsxs(Si,{children:[r.jsx(El,{children:"Как мы работаем"}),r.jsxs(HA,{children:[r.jsxs(xr,{children:[r.jsx(js,{children:"1"}),r.jsx(ks,{children:r.jsx(x,{icon:nx})}),r.jsx(Cs,{children:"Заявка"}),r.jsx(Ss,{children:"Оставьте заявку на сайте или позвоните нам"})]}),r.jsxs(xr,{children:[r.jsx(js,{children:"2"}),r.jsx(ks,{children:r.jsx(x,{icon:VI})}),r.jsx(Cs,{children:"Консультация"}),r.jsx(Ss,{children:"Получите консультацию от наших специалистов"})]}),r.jsxs(xr,{children:[r.jsx(js,{children:"3"}),r.jsx(ks,{children:r.jsx(x,{icon:Jo})}),r.jsx(Cs,{children:"Доставка"}),r.jsx(Ss,{children:"Доставим оборудование в удобное для вас время"})]}),r.jsxs(xr,{children:[r.jsx(js,{children:"4"}),r.jsx(ks,{children:r.jsx(x,{icon:ki})}),r.jsx(Cs,{children:"Установка"}),r.jsx(Ss,{children:"Профессиональный монтаж и настройка оборудования"})]}),r.jsxs(xr,{children:[r.jsx(js,{children:"5"}),r.jsx(ks,{children:r.jsx(x,{icon:Df})}),r.jsx(Cs,{children:"Поддержка"}),r.jsx(Ss,{children:"Обеспечиваем техническую поддержку 24/7"})]})]})]}),r.jsx(u$,{children:r.jsxs(f$,{children:[r.jsx(h$,{children:r.jsx(x,{icon:Br})}),r.jsx(p$,{children:"Не нашли нужный товар в каталоге?"}),r.jsx(m$,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(g$,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{const d=document.querySelector(".contact-section");d&&d.scrollIntoView({behavior:"smooth"})},children:[r.jsx(x,{icon:We}),"Купить под заказ"]})]})}),n()>0&&r.jsx(Si,{children:r.jsx("div",{style:{textAlign:"center",padding:"3rem 0"},children:r.jsxs(D4,{onClick:()=>s("/checkout"),whileHover:{scale:1.02},whileTap:{scale:.98},style:{fontSize:"1.2rem",padding:"1rem 2rem"},children:["Оформить заказ (",n()," товаров • ",i().toLocaleString()," ₽)"]})})}),r.jsx(e$,{className:"contact-section",children:r.jsxs(t$,{children:[r.jsxs(n$,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6},children:[r.jsx(r$,{children:"Свяжитесь с нами"}),r.jsx(i$,{children:"Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации по выбору счетчиков электроэнергии."}),r.jsxs(o$,{children:[r.jsx(Ll,{children:"Бесплатная консультация специалиста"}),r.jsx(Ll,{children:"Подбор оптимального решения"}),r.jsx(Ll,{children:"Расчет стоимости монтажа"}),r.jsx(Ll,{children:"Ответ в течение 30 минут"})]})]}),r.jsx(s$,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6},onSubmit:d=>{d.preventDefault(),alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.")},children:r.jsxs(a$,{children:[r.jsx(l$,{children:"Оставить заявку"}),r.jsxs(Il,{children:[r.jsx(Ml,{children:"Ваше имя *"}),r.jsx(Ah,{type:"text",placeholder:"Введите ваше имя",required:!0})]}),r.jsxs(Il,{children:[r.jsx(Ml,{children:"Телефон *"}),r.jsx(Ah,{type:"tel",placeholder:"+7 (___) ___-__-__",required:!0})]}),r.jsxs(Il,{children:[r.jsx(Ml,{children:"Email"}),r.jsx(Ah,{type:"email",placeholder:"your@email.com"})]}),r.jsxs(Il,{children:[r.jsx(Ml,{children:"Сообщение"}),r.jsx(c$,{placeholder:"Опишите ваши потребности или задайте вопрос...",rows:"4"})]}),r.jsx(d$,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Отправить заявку"})]})})]})})]})}const L$=l.div`
  position: relative;
  width: 100%;
`,I$=l.div`
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
`,M$=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`,A$=l.div`
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
`,$$=l.div`
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
`,R$=l(k.div)`
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
`,D$=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,N$=l.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 0.8rem;
  font-weight: bold;
`,O$=l(k.div)`
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
`,F$=l.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,V$=l.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
`,_$=l.button`
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
`,B$=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  pointer-events: none;
`,V4=l.button`
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
`,H$=l.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`,U$=({product:e})=>{const[t,n]=j.useState(0),[i,o]=j.useState(!1),s=(e==null?void 0:e.images)||[],a=(e==null?void 0:e.mainImage)||(e==null?void 0:e.image)||"",c=s.length>0?s:[a],d=p=>{n(p),o(!0)},u=()=>{o(!1)},f=()=>{n(p=>p===0?c.length-1:p-1)},h=()=>{n(p=>p===c.length-1?0:p+1)},m=p=>{p.key==="Escape"?u():p.key==="ArrowLeft"?f():p.key==="ArrowRight"&&h()};return lt.useEffect(()=>{if(i)return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),r.jsxs(L$,{children:[r.jsx(I$,{onClick:()=>d(t),children:c[t]?r.jsx(M$,{src:c[t],alt:(e==null?void 0:e.name)||"Товар"}):r.jsx(A$,{children:r.jsx(x,{icon:pi})})}),c.length>1&&r.jsx($$,{children:c.map((p,b)=>r.jsx(R$,{className:b===t?"active":"",onClick:()=>n(b),whileHover:{scale:1.05},whileTap:{scale:.95},children:p?r.jsx(D$,{src:p,alt:`${(e==null?void 0:e.name)||"Товар"} ${b+1}`}):r.jsx(N$,{children:r.jsx(x,{icon:pi})})},b))}),r.jsx(y0,{children:i&&r.jsx(O$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:u,children:r.jsxs(F$,{onClick:p=>p.stopPropagation(),children:[r.jsx(_$,{onClick:u,children:r.jsx(x,{icon:pi})}),r.jsx(V$,{src:c[t],alt:(e==null?void 0:e.name)||"Товар"}),r.jsxs(H$,{children:[t+1," / ",c.length]}),r.jsxs(B$,{children:[r.jsx(V4,{onClick:f,disabled:c.length<=1,children:r.jsx(x,{icon:bM})}),r.jsx(V4,{onClick:h,disabled:c.length<=1,children:r.jsx(x,{icon:ix})})]})]})})})]})},Al=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
`,W$=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
`,_4=l.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,B4=l.span`
  color: #999;
`,Y$=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,G$=l.div`
  position: relative;
  overflow: hidden;
`;l(k.div)`
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
`;const X$=l.div`
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
`,Q$=l.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,K$=l.div`
  color: #2f5483;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,q$=l(k.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Z$=l.div`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,J$=l.p`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`,eR=l(k.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`,tR=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,nR=l.div`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,rR=l(k.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`,iR=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,oR=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,sR=l.div`
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
`,aR=l.div`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
`,lR=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,cR=l.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,dR=l.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
`,uR=l.button`
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
`,fR=l(k.div)`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #f8f9fa;
  padding: 3rem 0;
`,hR=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,pR=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,mR=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,$l=l.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2f5483;
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.1);
  }
`,Rl=l.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Dl=l.div`
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
`,Nl=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Ol=l.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`,gR=l.div`
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
`,xR=l.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`,yR=l.div`
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
`,vR=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,bR=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,wR=l(k.button)`
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
`,jR=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,kR=l.div`
  font-size: 1.2rem;
  color: #999;
  text-decoration: line-through;
`,H4=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
`,CR=l.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`,SR=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,zR=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,Lt=l.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,It=l.span`
  color: #666;
  font-weight: 500;
`,Mt=l.span`
  color: #333;
  font-weight: 600;
`,PR=l.div`
  margin-bottom: 1.5rem;
`,TR=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,ER=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,LR=l.li`
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
`,IR=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,MR=l(k.button)`
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
`,AR=l(k.button)`
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
`,$R=l.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2f5483;
`,RR=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,DR=l.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`,NR=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #2f5483;
`,U4=l.div`
  text-align: center;
  padding: 3rem;
  color: #dc3545;
`;function OR(){const{id:e}=T9(),t=cn(),[n,i]=j.useState(null),[o,s]=j.useState([]),[a,c]=j.useState(!0),[d,u]=j.useState(null),{addToCart:f}=Hr(),h=j.useRef(null),{scrollYProgress:m}=gE({target:h,offset:["start start","end start"]});Mi(m,[0,1],[0,-100]);const p=Mi(m,[0,1],[0,-50]),b=Mi(m,[0,1],[0,-30]),w=Mi(m,[0,1],[0,-20]),z=Mi(m,[0,1],[0,-15]),v=Mi(m,[0,1],[0,-10]);j.useEffect(()=>{window.scrollTo(0,0),(async()=>{try{const L=await(await fetch("/catalog-products.json")).json();s(L);const D=L.find(N=>N.id===parseInt(e));D?i(D):u("Товар не найден")}catch{u("Ошибка загрузки товара")}finally{c(!1)}})()},[e]);const g=()=>{n&&f(n)},y=()=>{alert("Свяжитесь с нами по телефону: +7 (999) 123-45-67")},S=()=>{alert("Для заказа под заказ свяжитесь с нами по телефону: +7 (999) 123-45-67")},P=()=>!n||!o.length?[]:o.filter(T=>T.id!==n.id&&(T.brand===n.brand||T.category===n.category)).slice(0,4);return a?r.jsx(Al,{children:r.jsx(NR,{children:"Загрузка товара..."})}):d?r.jsx(Al,{children:r.jsxs(U4,{children:[r.jsx("h2",{children:"Ошибка"}),r.jsx("p",{children:d}),r.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})}):n?r.jsxs(Al,{ref:h,children:[r.jsxs(W$,{children:[r.jsx(_4,{onClick:()=>t("/"),children:"Главная"}),r.jsx(B4,{children:"/"}),r.jsx(_4,{onClick:()=>t("/catalog"),children:"Каталог"}),r.jsx(B4,{children:"/"}),r.jsx("span",{children:n.name})]}),r.jsxs(Y$,{children:[r.jsxs(G$,{children:[r.jsx(U$,{product:n}),n.discount&&r.jsxs(X$,{children:["-",n.discount,"%"]})]}),r.jsxs(Q$,{children:[r.jsx(K$,{children:n.category}),r.jsx(q$,{style:{y:p},children:n.name}),r.jsx(Z$,{children:n.type}),r.jsx(J$,{style:{y:b},children:n.description}),r.jsx(jR,{children:n.originalPrice?r.jsxs(r.Fragment,{children:[r.jsxs(kR,{children:[n.originalPrice.toLocaleString()," ₽"]}),r.jsxs(H4,{children:[n.price.toLocaleString()," ₽"]})]}):r.jsxs(H4,{children:[n.price.toLocaleString()," ₽"]})}),r.jsxs(IR,{children:[r.jsxs(MR,{onClick:g,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Wn}),"Добавить в корзину"]}),r.jsxs(AR,{onClick:y,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Oe}),"Связаться с менеджером"]})]}),r.jsxs(CR,{children:[r.jsx(SR,{children:"Технические характеристики"}),r.jsxs(zR,{children:[n.specifications.phases&&n.specifications.phases!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Фазы:"}),r.jsx(Mt,{children:n.specifications.phases})]}),n.specifications.voltage&&n.specifications.voltage!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Напряжение:"}),r.jsx(Mt,{children:n.specifications.voltage})]}),n.specifications.current&&n.specifications.current!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Ток:"}),r.jsx(Mt,{children:n.specifications.current})]}),n.specifications.accuracy&&n.specifications.accuracy!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Класс точности:"}),r.jsx(Mt,{children:n.specifications.accuracy})]}),n.specifications.tariffs&&n.specifications.tariffs!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Тарифность:"}),r.jsx(Mt,{children:n.specifications.tariffs})]}),n.specifications.energy_type&&n.specifications.energy_type!=="нет"&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Тип энергии:"}),r.jsx(Mt,{children:n.specifications.energy_type})]}),n.category==="Устройства сбора и передачи данных"&&r.jsxs(r.Fragment,{children:[n.specifications.power_3phase&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Питание 3-фазное:"}),r.jsx(Mt,{children:n.specifications.power_3phase})]}),n.specifications.power_1phase&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Питание 1-фазное:"}),r.jsx(Mt,{children:n.specifications.power_1phase})]}),n.specifications.consumption&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Потребление:"}),r.jsx(Mt,{children:n.specifications.consumption})]}),n.specifications.dimensions&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Размеры:"}),r.jsx(Mt,{children:n.specifications.dimensions})]}),n.specifications.temperature&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Температура:"}),r.jsx(Mt,{children:n.specifications.temperature})]}),n.specifications.supported_meters&&r.jsxs(Lt,{children:[r.jsx(It,{children:"Поддерживаемые счетчики:"}),r.jsx(Mt,{children:n.specifications.supported_meters})]})]})]})]}),r.jsxs(PR,{children:[r.jsx(TR,{children:"Особенности"}),r.jsx(ER,{children:n.features.map((E,T)=>r.jsx(LR,{children:E},T))})]}),r.jsxs($R,{children:[r.jsx(RR,{children:"Доставка и гарантия"}),r.jsx(DR,{children:"Бесплатная доставка по Москве и области. Гарантия 2 года. Возможна установка и настройка оборудования."})]})]})]}),n.fullDescription&&r.jsxs(eR,{style:{y:w},children:[r.jsx(tR,{children:"Подробное описание"}),r.jsx(nR,{children:n.fullDescription.split(`
`).map((E,T)=>r.jsx("p",{children:E},T))})]}),(()=>{const E=P();return E.length>0&&r.jsxs(rR,{style:{y:z},children:[r.jsx(iR,{children:"Похожие товары"}),r.jsx(oR,{children:E.map(T=>r.jsxs(sR,{onClick:()=>t(`/product/${T.id}`),children:[r.jsx(aR,{children:T.mainImage?r.jsx("img",{src:T.mainImage,alt:T.name,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",color:"#2f5483",fontSize:"2rem",fontWeight:"bold",borderRadius:"8px"},children:T.brand})}),r.jsx(lR,{children:T.name}),r.jsx(cR,{children:T.type}),r.jsxs(dR,{children:[T.price.toLocaleString()," ₽"]}),r.jsx(uR,{children:"Подробнее"})]},T.id))})]})})(),r.jsx(fR,{style:{y:v},children:r.jsxs(hR,{children:[r.jsx(pR,{children:"Почему Стройэнергетика?"}),r.jsxs(mR,{children:[r.jsxs($l,{children:[r.jsxs(Rl,{children:[r.jsx(Dl,{children:"01"}),r.jsx(Nl,{children:"20+ лет опыта"})]}),r.jsx(Ol,{children:"Более двух десятилетий работы в энергетической отрасли. Мы знаем все о современных технологиях и требованиях рынка."})]}),r.jsxs($l,{children:[r.jsxs(Rl,{children:[r.jsx(Dl,{children:"02"}),r.jsx(Nl,{children:"Сертификация ГОСТ"})]}),r.jsx(Ol,{children:"Все оборудование соответствует российским стандартам качества. Полная сертификация и соответствие требованиям."})]}),r.jsxs($l,{children:[r.jsxs(Rl,{children:[r.jsx(Dl,{children:"03"}),r.jsx(Nl,{children:"Гарантия 16 лет"})]}),r.jsx(Ol,{children:"Максимальная гарантия на оборудование. Мы уверены в качестве наших товаров и защищаем ваши инвестиции."})]}),r.jsxs($l,{children:[r.jsxs(Rl,{children:[r.jsx(Dl,{children:"04"}),r.jsx(Nl,{children:"Техподдержка 24/7"})]}),r.jsx(Ol,{children:"Круглосуточная техническая поддержка. Наши специалисты всегда готовы помочь с любыми вопросами."})]})]})]})}),r.jsx(gR,{children:r.jsxs(xR,{children:[r.jsx(yR,{children:r.jsx(x,{icon:Br})}),r.jsx(vR,{children:"Не нашли нужный товар в каталоге?"}),r.jsx(bR,{children:"Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа."}),r.jsxs(wR,{onClick:S,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Купить под заказ"]})]})})]}):r.jsx(Al,{children:r.jsxs(U4,{children:[r.jsx("h2",{children:"Товар не найден"}),r.jsx("p",{children:"Запрашиваемый товар не существует"}),r.jsx("button",{onClick:()=>t("/catalog"),children:"Вернуться в каталог"})]})})}const FR=l(k.div)`
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
`,VR=l(k.div)`
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
`,_R=l.div`
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;
  position: relative;
`,BR=l.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,HR=l.span`
  background: #2f5483;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-weight: 500;
`,UR=l.button`
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
`,WR=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`,YR=l.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`,GR=l.div`
  font-size: 3rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`,XR=l.p`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 500;
`,QR=l.p`
  font-size: 0.9rem;
  margin: 0;
  color: #bbb;
`,KR=l.div`
  padding: 0;
`,qR=l(k.div)`
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
`,ZR=l.div`
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
`,JR=l.div`
  flex: 1;
  min-width: 0;
`,eD=l.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
`,tD=l.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  color: #666;
  font-weight: 400;
`,nD=l.div`
  font-weight: 600;
  color: #2f5483;
  font-size: 1rem;
`,rD=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  min-width: 120px;
`,iD=l.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,W4=l.button`
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
`,oD=l.input`
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
`,sD=l.button`
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
`,aD=l.div`
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid #f0f0f0;
  background: #ffffff;
`,lD=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`,cD=l.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1a1a1a;
`,dD=l.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2f5483;
`,uD=l.div`
  display: flex;
  gap: 0.75rem;
`,uw=l.button`
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
`,fD=l(uw)`
  background: #f8f9fa;
  color: #666;
  border: 1px solid #e9ecef;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`,hD=l(uw)`
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
`,pD=({isOpen:e,onClose:t})=>{const{items:n,removeFromCart:i,updateQuantity:o,clearCart:s,getTotalItems:a,getTotalPrice:c}=Hr(),{addNotification:d}=E0(),u=cn(),[f,h]=j.useState(null),m=(w,z)=>{const v=parseInt(z);!isNaN(v)&&v>=0&&o(w,v)},p=w=>{const z=n.find(v=>v.id===w);h(w),setTimeout(()=>{i(w),h(null),z&&d(`${z.name} удален из корзины`,"warning",2e3)},200)},b=()=>{t(),u("/checkout")};return r.jsx(y0,{children:e&&r.jsx(FR,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:r.jsxs(VR,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:300},onClick:w=>w.stopPropagation(),children:[r.jsxs(_R,{children:[r.jsxs(BR,{children:[r.jsx(x,{icon:Wn}),"Корзина",a()>0&&r.jsx(HR,{children:a()})]}),r.jsx(UR,{onClick:t,children:r.jsx(x,{icon:pi})})]}),r.jsx(WR,{children:n.length===0?r.jsxs(YR,{children:[r.jsx(GR,{children:r.jsx(x,{icon:Wn})}),r.jsx(XR,{children:"Корзина пуста"}),r.jsx(QR,{children:"Добавьте товары для оформления заказа"})]}):r.jsx(KR,{children:n.map(w=>r.jsxs(qR,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},style:{opacity:f===w.id?.5:1,transform:f===w.id?"scale(0.98)":"scale(1)"},children:[r.jsx(ZR,{children:w.mainImage?r.jsx("img",{src:w.mainImage,alt:w.name}):r.jsx("img",{src:`/images/products/${w.image}`,alt:w.name})}),r.jsxs(JR,{children:[r.jsx(eD,{children:w.name}),r.jsx(tD,{children:w.brand}),r.jsxs(nD,{children:[w.price.toLocaleString()," ₽"]})]}),r.jsxs(rD,{children:[r.jsxs(iD,{children:[r.jsx(W4,{onClick:()=>m(w.id,w.quantity-1),disabled:w.quantity<=1,children:r.jsx(x,{icon:lM})}),r.jsx(oD,{type:"number",value:w.quantity,onChange:z=>m(w.id,z.target.value),min:"1"}),r.jsx(W4,{onClick:()=>m(w.id,w.quantity+1),children:r.jsx(x,{icon:xM})})]}),r.jsx(sD,{onClick:()=>p(w.id),children:r.jsx(x,{icon:hm})})]})]},w.id))})}),n.length>0&&r.jsxs(aD,{children:[r.jsxs(lD,{children:[r.jsx(cD,{children:"Итого:"}),r.jsxs(dD,{children:[c().toLocaleString()," ₽"]})]}),r.jsxs(uD,{children:[r.jsxs(fD,{onClick:()=>{s(),d("Корзина полностью очищена","warning",2e3)},children:[r.jsx(x,{icon:hm}),"Очистить"]}),r.jsxs(hD,{onClick:b,children:["Оформить заказ",r.jsx(x,{icon:ZI})]})]})]})]})})})},Y4=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
`,G4=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`,X4=l(k.button)`
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
`,Q4=l.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,mD=l.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ps=l(k.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`,Oi=l.h2`
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
`,gD=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,K4=l(k.button)`
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
`,q4=l.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.active?"#2f5483":"#333"};
`,Z4=l.div`
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`,$h=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,At=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$t=l.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`,Kt=l.input`
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
`,xD=l.textarea`
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
`;const yD=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,J4=l.label`
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
`,vD=l.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
`,bD=l.div`
  margin-bottom: 2rem;
`,wD=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,jD=l.div`
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
`,kD=l.div`
  flex: 1;
  min-width: 0;
`,CD=l.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`,SD=l.div`
  font-size: 0.85rem;
  color: #666;
`,zD=l.div`
  font-weight: 700;
  color: #2f5483;
  font-size: 1rem;
`,PD=l.div`
  border-top: 2px solid #f0f0f0;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`,e5=l.div`
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
`,TD=l(k.button)`
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
`,ED=l.div`
  text-align: center;
  padding: 6rem 2rem;
  color: #666;
`,LD=l.div`
  font-size: 4rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
`,ID=l.p`
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 600;
`,MD=l.p`
  font-size: 1rem;
  margin: 0;
  color: #bbb;
`;function AD(){const e=cn(),{items:t,getTotalPrice:n,clearCart:i}=Hr(),{addNotification:o}=E0(),[s,a]=j.useState("individual"),[c,d]=j.useState({firstName:"",lastName:"",phone:"",email:"",address:"",city:"",zipCode:"",comment:"",companyName:"",inn:"",legalAddress:"",bankName:"",bik:"",accountNumber:"",deliveryMethod:"courier"}),[u,f]=j.useState(!1);j.useEffect(()=>{window.scrollTo(0,0)},[]);const h=p=>{const{name:b,value:w}=p.target;d(z=>({...z,[b]:w}))},m=async p=>{if(p.preventDefault(),t.length===0){o("Корзина пуста","warning",3e3);return}let b=s==="individual"?["firstName","lastName","phone","email"]:["companyName","inn","phone","email"];if(c.deliveryMethod==="courier"&&b.push("address","city"),b.filter(z=>!c[z]).length>0){o("Пожалуйста, заполните все обязательные поля","warning",3e3);return}f(!0),setTimeout(()=>{f(!1),i(),e("/thank-you")},2e3)};return t.length===0?r.jsxs(Y4,{children:[r.jsxs(G4,{children:[r.jsxs(X4,{onClick:()=>e("/"),whileHover:{x:-5},whileTap:{scale:.95},children:[r.jsx(x,{icon:pm}),"Назад"]}),r.jsx(Q4,{children:"Оформление заказа"})]}),r.jsxs(ED,{children:[r.jsx(LD,{children:r.jsx(x,{icon:E4})}),r.jsx(ID,{children:"Корзина пуста"}),r.jsx(MD,{children:"Добавьте товары в корзину для оформления заказа"})]})]}):r.jsxs(Y4,{children:[r.jsxs(G4,{children:[r.jsxs(X4,{onClick:()=>e("/"),whileHover:{x:-5},whileTap:{scale:.95},children:[r.jsx(x,{icon:pm}),"Назад"]}),r.jsx(Q4,{children:"Оформление заказа"})]}),r.jsx("form",{onSubmit:m,children:r.jsxs(mD,{children:[r.jsxs("div",{children:[r.jsxs(Ps,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsxs(Oi,{children:[r.jsx(x,{icon:s==="individual"?hi:wn}),"Тип клиента"]}),r.jsxs(gD,{children:[r.jsxs(K4,{type:"button",active:s==="individual",onClick:()=>a("individual"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:hi}),r.jsx(q4,{active:s==="individual",children:"Физическое лицо"}),r.jsx(Z4,{children:"Для частных клиентов"})]}),r.jsxs(K4,{type:"button",active:s==="company",onClick:()=>a("company"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:wn}),r.jsx(q4,{active:s==="company",children:"Юридическое лицо"}),r.jsx(Z4,{children:"Для компаний и ИП"})]})]})]}),r.jsxs(Ps,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[r.jsxs(Oi,{children:[r.jsx(x,{icon:s==="individual"?hi:wn}),s==="individual"?"Контактная информация":"Данные организации"]}),s==="individual"?r.jsxs($h,{children:[r.jsxs(At,{children:[r.jsx($t,{children:"Имя *"}),r.jsx(Kt,{type:"text",name:"firstName",value:c.firstName,onChange:h,placeholder:"Введите ваше имя",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Фамилия *"}),r.jsx(Kt,{type:"text",name:"lastName",value:c.lastName,onChange:h,placeholder:"Введите вашу фамилию",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Телефон *"}),r.jsx(Kt,{type:"tel",name:"phone",value:c.phone,onChange:h,placeholder:"+7 (999) 123-45-67",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Email *"}),r.jsx(Kt,{type:"email",name:"email",value:c.email,onChange:h,placeholder:"example@email.com",required:!0})]})]}):r.jsxs($h,{children:[r.jsxs(At,{children:[r.jsx($t,{children:"Название организации *"}),r.jsx(Kt,{type:"text",name:"companyName",value:c.companyName,onChange:h,placeholder:"ООО Рога и Копыта",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"ИНН *"}),r.jsx(Kt,{type:"text",name:"inn",value:c.inn,onChange:h,placeholder:"1234567890",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Телефон *"}),r.jsx(Kt,{type:"tel",name:"phone",value:c.phone,onChange:h,placeholder:"+7 (999) 123-45-67",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Email *"}),r.jsx(Kt,{type:"email",name:"email",value:c.email,onChange:h,placeholder:"example@company.com",required:!0})]})]})]}),r.jsxs(Ps,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[r.jsxs(Oi,{children:[r.jsx(x,{icon:Jo}),"Способ доставки"]}),r.jsxs(yD,{children:[r.jsxs(J4,{children:[r.jsx("input",{type:"radio",name:"deliveryMethod",value:"courier",checked:c.deliveryMethod==="courier",onChange:h}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Доставка"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666"},children:"Стоимость доставки будет рассчитана менеджером после оформления заказа"})]})]}),r.jsxs(J4,{children:[r.jsx("input",{type:"radio",name:"deliveryMethod",value:"pickup",checked:c.deliveryMethod==="pickup",onChange:h}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Самовывоз"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666"},children:"Забрать из нашего офиса • Бесплатно"})]})]})]})]}),c.deliveryMethod==="courier"&&r.jsxs(Ps,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[r.jsxs(Oi,{children:[r.jsx(x,{icon:rx}),"Адрес доставки"]}),r.jsxs(At,{children:[r.jsx($t,{children:"Адрес доставки *"}),r.jsx(Kt,{type:"text",name:"address",value:c.address,onChange:h,placeholder:"ул. Примерная, д. 1, кв. 1",required:!0})]}),r.jsxs($h,{style:{marginTop:"1.5rem"},children:[r.jsxs(At,{children:[r.jsx($t,{children:"Город *"}),r.jsx(Kt,{type:"text",name:"city",value:c.city,onChange:h,placeholder:"Москва",required:!0})]}),r.jsxs(At,{children:[r.jsx($t,{children:"Индекс"}),r.jsx(Kt,{type:"text",name:"zipCode",value:c.zipCode,onChange:h,placeholder:"123456"})]})]})]}),r.jsxs(Ps,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[r.jsxs(Oi,{children:[r.jsx(x,{icon:Ci}),"Комментарий к заказу"]}),r.jsxs(At,{children:[r.jsx($t,{children:"Дополнительная информация"}),r.jsx(xD,{name:"comment",value:c.comment,onChange:h,placeholder:"Укажите дополнительную информацию о заказе, особые требования к доставке или другие пожелания..."})]})]})]}),r.jsxs(vD,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.5},children:[r.jsx(Oi,{children:"Ваш заказ"}),r.jsx(bD,{children:t.map(p=>r.jsxs(wD,{children:[r.jsx(jD,{children:p.mainImage?r.jsx("img",{src:p.mainImage,alt:p.name}):r.jsx("img",{src:`/images/products/${p.image}`,alt:p.name})}),r.jsxs(kD,{children:[r.jsx(CD,{children:p.name}),r.jsxs(SD,{children:[p.brand," • Количество: ",p.quantity]})]}),r.jsxs(zD,{children:[(p.price*p.quantity).toLocaleString()," ₽"]})]},p.id))}),r.jsxs(PD,{children:[r.jsxs(e5,{children:[r.jsxs("span",{children:["Товары (",t.length,"):"]}),r.jsxs("span",{children:[n().toLocaleString()," ₽"]})]}),r.jsxs(e5,{children:[r.jsx("span",{children:"Итого:"}),r.jsx("span",{children:c.deliveryMethod==="courier"?`${n().toLocaleString()} ₽ + доставка`:`${n().toLocaleString()} ₽`})]})]}),r.jsx(TD,{type:"submit",disabled:u,whileHover:{scale:1.02},whileTap:{scale:.98},children:u?r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid white",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Оформление заказа..."]}):r.jsxs(r.Fragment,{children:[r.jsx(x,{icon:E4}),"Оформить заказ"]})})]})]})})]})}const $D=l.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
  text-align: center;
`,RD=l(k.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`,DD=l.div`
  font-size: 4rem;
  color: #28a745;
  margin-bottom: 1.5rem;
`,ND=l.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,OD=l.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`,FD=l.div`
  background: rgba(47, 84, 131, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(47, 84, 131, 0.1);
`,VD=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Fl=l.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,_D=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,t5=l(k.button)`
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
`,BD=l.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`,HD=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,n5=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666;
  
  svg {
    color: #2f5483;
  }
`;function UD(){const e=cn();return j.useEffect(()=>{window.scrollTo(0,0)},[]),r.jsxs($D,{children:[r.jsxs(RD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(DD,{children:r.jsx(x,{icon:F})}),r.jsx(ND,{children:"Спасибо за заказ!"}),r.jsx(OD,{children:"Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время для уточнения деталей и подтверждения заказа."}),r.jsxs(FD,{children:[r.jsx(VD,{children:"Что дальше?"}),r.jsx(Fl,{children:"• В течение 1-2 часов наш менеджер свяжется с вами для подтверждения заказа"}),r.jsx(Fl,{children:"• Мы уточним детали доставки и рассчитаем точную стоимость"}),r.jsx(Fl,{children:"• После подтверждения заказ будет передан в обработку"}),r.jsx(Fl,{children:"• Вы получите уведомление о статусе заказа"})]}),r.jsxs(_D,{children:[r.jsxs(t5,{className:"primary",onClick:()=>e("/"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:P0}),"Вернуться на главную"]}),r.jsxs(t5,{className:"secondary",onClick:()=>e("/catalog"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Wn}),"Перейти в каталог"]})]})]}),r.jsxs(BD,{children:[r.jsx(HD,{children:"Остались вопросы?"}),r.jsxs(n5,{children:[r.jsx(x,{icon:Oe}),r.jsx("span",{children:"+7 (999) 123-45-67"})]}),r.jsxs(n5,{children:[r.jsx(x,{icon:Do}),r.jsx("span",{children:"info@company.com"})]})]})]})}const WD=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,YD=l(k.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
`,GD=l(k.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,XD=l(k.p)`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,QD=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,KD=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,Rh=l.h2`
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
`,Vl=l(k.div)`
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
`,_l=l.div`
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
`,Bl=l.div`
  flex: 1;
`,Hl=l.div`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ul=l.div`
  font-size: 1.1rem;
  color: #2f5483;
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Wl=l.div`
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.4;
`,r5=l.a`
  color: #2f5483;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #1a2f4b;
    text-decoration: underline;
  }
`,qD=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,ZD=l.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ts=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Es=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,Yl=l.input`
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
`,JD=l.textarea`
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
`,eN=l(k.button)`
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
`,tN=l(k.div)`
  margin-top: 4rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,nN=l.div`
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
`;function rN(){const[e,t]=j.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,i]=j.useState(!1),o=(a,c)=>{t(d=>({...d,[a]:c}))},s=async a=>{a.preventDefault(),i(!0),setTimeout(()=>{i(!1),t({name:"",email:"",phone:"",subject:"",message:""}),alert("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.")},2e3)};return r.jsxs(WD,{children:[r.jsxs(YD,{children:[r.jsx(GD,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Контакты"}),r.jsx(XD,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Свяжитесь с нами любым удобным способом. Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором оборудования. Мы работаем по всей России из нашего офиса в Москве."})]}),r.jsxs(QD,{children:[r.jsxs(KD,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(Rh,{children:"Контактная информация"}),r.jsxs(Vl,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(_l,{children:r.jsx(x,{icon:Oe})}),r.jsxs(Bl,{children:[r.jsx(Hl,{children:"Телефон"}),r.jsx(Ul,{children:r.jsx(r5,{href:"tel:+79991234567",children:"+7 (999) 123-45-67"})}),r.jsx(Wl,{children:"Основной номер для связи"})]})]}),r.jsxs(Vl,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(_l,{children:r.jsx(x,{icon:Do})}),r.jsxs(Bl,{children:[r.jsx(Hl,{children:"Email"}),r.jsx(Ul,{children:r.jsx(r5,{href:"mailto:info@stroienergetika.ru",children:"info@stroienergetika.ru"})}),r.jsx(Wl,{children:"Для заявок и вопросов"})]})]}),r.jsxs(Vl,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(_l,{children:r.jsx(x,{icon:Ra})}),r.jsxs(Bl,{children:[r.jsx(Hl,{children:"Режим работы"}),r.jsx(Ul,{children:"Пн-Пт: 9:00 - 18:00"}),r.jsx(Wl,{children:"Сб-Вс: выходной"})]})]}),r.jsxs(Vl,{whileHover:{scale:1.02},transition:{duration:.2},children:[r.jsx(_l,{children:r.jsx(x,{icon:wn})}),r.jsxs(Bl,{children:[r.jsx(Hl,{children:"Адрес офиса"}),r.jsx(Ul,{children:"Москва, ул. Примерная, 123"}),r.jsx(Wl,{children:"Главный офис компании"})]})]})]}),r.jsxs(qD,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(Rh,{children:"Напишите нам"}),r.jsxs(ZD,{onSubmit:s,children:[r.jsxs(Ts,{children:[r.jsx(Es,{children:"Ваше имя *"}),r.jsx(Yl,{type:"text",placeholder:"Введите ваше имя",value:e.name,onChange:a=>o("name",a.target.value),required:!0})]}),r.jsxs(Ts,{children:[r.jsx(Es,{children:"Email *"}),r.jsx(Yl,{type:"email",placeholder:"your@email.com",value:e.email,onChange:a=>o("email",a.target.value),required:!0})]}),r.jsxs(Ts,{children:[r.jsx(Es,{children:"Телефон"}),r.jsx(Yl,{type:"tel",placeholder:"+7 (999) 123-45-67",value:e.phone,onChange:a=>o("phone",a.target.value)})]}),r.jsxs(Ts,{children:[r.jsx(Es,{children:"Тема сообщения *"}),r.jsx(Yl,{type:"text",placeholder:"Кратко опишите тему",value:e.subject,onChange:a=>o("subject",a.target.value),required:!0})]}),r.jsxs(Ts,{children:[r.jsx(Es,{children:"Сообщение *"}),r.jsx(JD,{placeholder:"Подробно опишите ваш вопрос или заявку...",value:e.message,onChange:a=>o("message",a.target.value),required:!0})]}),r.jsxs(eN,{type:"submit",disabled:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),n?"Отправка...":"Отправить сообщение"]})]})]})]}),r.jsxs(tN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[r.jsx(Rh,{children:"Карта"}),r.jsx(nN,{children:"Здесь будет интерактивная карта с расположением офисов"})]})]})}const iN=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,oN=l(k.div)`
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
`,sN=l(k.h1)`
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
`,aN=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Gl=l(k.section)`
  margin-bottom: 5rem;
`,Xl=l.h2`
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
`,lN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ql=l(k.div)`
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
`,Kl=l.div`
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
`,ql=l.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,Zl=l.div`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 500;
`,cN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,i5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,o5=l.h3`
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
`,Jl=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,dN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,ec=l(k.div)`
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
`,tc=l.div`
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
`,nc=l.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,rc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,uN=l.div`
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
`,ic=l(k.div)`
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
`,oc=l.div`
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
`,sc=l.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,ac=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,lc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,cc=l.div`
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
`,fN=l(k.div)`
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
`,hN=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,pN=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,mN=l(k.button)`
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
`;function gN(){j.useState("about");const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(iN,{children:[r.jsxs(oN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(sN,{children:"О компании Стройэнергетика"}),r.jsx(aN,{children:"Более 20 лет опыта в поставке и установке счетчиков электроэнергии. Мы являемся официальным дилером ведущих производителей и гарантируем качество каждого продукта."})]}),r.jsxs(Gl,{children:[r.jsx(Xl,{children:"Наши достижения"}),r.jsxs(lN,{children:[r.jsxs(Ql,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Kl,{children:r.jsx(x,{icon:ow})}),r.jsx(ql,{children:"20+"}),r.jsx(Zl,{children:"Лет опыта"})]}),r.jsxs(Ql,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Kl,{children:r.jsx(x,{icon:Zb})}),r.jsx(ql,{children:"5000+"}),r.jsx(Zl,{children:"Довольных клиентов"})]}),r.jsxs(Ql,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Kl,{children:r.jsx(x,{icon:tn})}),r.jsx(ql,{children:"50+"}),r.jsx(Zl,{children:"Производителей"})]}),r.jsxs(Ql,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Kl,{children:r.jsx(x,{icon:St})}),r.jsx(ql,{children:"16"}),r.jsx(Zl,{children:"Лет гарантии"})]})]})]}),r.jsxs(Gl,{children:[r.jsx(Xl,{children:"О нас"}),r.jsxs(cN,{children:[r.jsxs(i5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(o5,{children:[r.jsx(x,{icon:wn}),"Наша миссия"]}),r.jsx(Jl,{children:"Мы стремимся обеспечить наших клиентов высококачественными счетчиками электроэнергии от ведущих производителей, предоставляя полный спектр услуг от консультации до установки и технического обслуживания."}),r.jsx(Jl,{children:"Наша цель - сделать процесс выбора и установки счетчиков максимально простым и надежным для каждого клиента, обеспечивая экономию средств и повышение эффективности энергопотребления."})]}),r.jsxs(i5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(o5,{children:[r.jsx(x,{icon:ji}),"Наши принципы"]}),r.jsx(Jl,{children:"Мы работаем только с официальными дилерами и производителями, гарантируя подлинность каждого продукта и соблюдение всех стандартов качества."}),r.jsx(Jl,{children:"Наша команда состоит из опытных специалистов, которые постоянно повышают свою квалификацию и следят за новейшими технологиями в области энергетики."})]})]})]}),r.jsxs(Gl,{children:[r.jsx(Xl,{children:"Наши ценности"}),r.jsxs(dN,{children:[r.jsxs(ec,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(tc,{children:r.jsx(x,{icon:St})}),r.jsx(nc,{children:"Надежность"}),r.jsx(rc,{children:"Мы гарантируем качество каждого продукта и предоставляем максимальную гарантию на все оборудование."})]}),r.jsxs(ec,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(tc,{children:r.jsx(x,{icon:Rf})}),r.jsx(nc,{children:"Инновации"}),r.jsx(rc,{children:"Мы постоянно следим за новейшими технологиями и предлагаем современные решения для наших клиентов."})]}),r.jsxs(ec,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(tc,{children:r.jsx(x,{icon:eM})}),r.jsx(nc,{children:"Забота о клиентах"}),r.jsx(rc,{children:"Мы всегда готовы помочь с выбором оптимального решения и предоставить профессиональную консультацию."})]}),r.jsxs(ec,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(tc,{children:r.jsx(x,{icon:C0})}),r.jsx(nc,{children:"Качество"}),r.jsx(rc,{children:"Мы работаем только с проверенными производителями и гарантируем соответствие всем стандартам."})]})]})]}),r.jsxs(Gl,{children:[r.jsx(Xl,{children:"История компании"}),r.jsxs(uN,{children:[r.jsxs(ic,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(cc,{}),r.jsxs(oc,{side:"left",children:[r.jsx(sc,{children:"2010"}),r.jsx(ac,{children:"Основание компании"}),r.jsx(lc,{children:"Создание компании Стройэнергетика с целью обеспечения качественными счетчиками электроэнергии."})]})]}),r.jsxs(ic,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(cc,{}),r.jsxs(oc,{side:"right",children:[r.jsx(sc,{children:"2015"}),r.jsx(ac,{children:"Расширение партнерств"}),r.jsx(lc,{children:"Подписание договоров с ведущими производителями счетчиков электроэнергии."})]})]}),r.jsxs(ic,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(cc,{}),r.jsxs(oc,{side:"left",children:[r.jsx(sc,{children:"2020"}),r.jsx(ac,{children:"Цифровизация"}),r.jsx(lc,{children:"Внедрение современных цифровых технологий и онлайн-сервисов для клиентов."})]})]}),r.jsxs(ic,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(cc,{}),r.jsxs(oc,{side:"right",children:[r.jsx(sc,{children:"2024"}),r.jsx(ac,{children:"Лидерство в отрасли"}),r.jsx(lc,{children:"Становление одним из ведущих поставщиков счетчиков электроэнергии в регионе."})]})]})]})]}),r.jsxs(fN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(hN,{children:"Готовы к сотрудничеству?"}),r.jsx(pN,{children:"Свяжитесь с нами для получения профессиональной консультации по выбору счетчиков электроэнергии и расчета стоимости установки. Наши специалисты готовы помочь вам 24/7."}),r.jsxs(mN,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Связаться с нами"]})]})]})}const xN=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,yN=l(k.div)`
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
`,vN=l(k.h1)`
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
`,bN=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,dc=l(k.section)`
  margin-bottom: 5rem;
`,uc=l.h2`
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
`,wN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Dh=l(k.div)`
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
`,Nh=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Oh=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,Fh=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,Vh=l.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
`,_h=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Bh=l.ul`
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
`,jN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,s5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,a5=l.h3`
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
`,fc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,kN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,hc=l(k.div)`
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
`,pc=l.div`
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
`,mc=l.div`
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
`,gc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,xc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,CN=l(k.div)`
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
`,SN=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,zN=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,PN=l(k.button)`
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
`,TN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Hh=l(k.div)`
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
`,Uh=l.div`
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
`,Wh=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Yh=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;function EN(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(xN,{children:[r.jsxs(yN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(vN,{children:"Доставка"}),r.jsx(bN,{children:"Быстрая и надежная доставка счетчиков электроэнергии по всей России. Профессиональная установка и настройка оборудования с гарантией качества."})]}),r.jsxs(dc,{children:[r.jsx(uc,{children:"Варианты доставки"}),r.jsxs(wN,{children:[r.jsxs(Dh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(Nh,{children:[r.jsx(Oh,{children:r.jsx(x,{icon:Jo})}),r.jsx(Fh,{children:"Стандартная доставка"})]}),r.jsx(Vh,{children:"от 500 ₽"}),r.jsx(_h,{children:"Доставка в течение 2-3 рабочих дней по Москве и Московской области."}),r.jsxs(Bh,{children:[r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Доставка до подъезда"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Уведомление о доставке"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Возможность выбора времени"]})]})]}),r.jsxs(Dh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(Nh,{children:[r.jsx(Oh,{children:r.jsx(x,{icon:iw})}),r.jsx(Fh,{children:"Экспресс доставка"})]}),r.jsx(Vh,{children:"от 1000 ₽"}),r.jsx(_h,{children:"Доставка в день заказа или на следующий день по Москве."}),r.jsxs(Bh,{children:[r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Доставка в течение 24 часов"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Приоритетная обработка"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Подъем на этаж включен"]})]})]}),r.jsxs(Dh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(Nh,{children:[r.jsx(Oh,{children:r.jsx(x,{icon:ji})}),r.jsx(Fh,{children:"Доставка с установкой"})]}),r.jsx(Vh,{children:"от 2000 ₽"}),r.jsx(_h,{children:"Полный комплекс услуг: доставка, установка и настройка оборудования."}),r.jsxs(Bh,{children:[r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Профессиональная установка"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Настройка и тестирование"]}),r.jsxs(Cn,{children:[r.jsx(x,{icon:F}),"Гарантия на работы"]})]})]})]})]}),r.jsxs(dc,{children:[r.jsx(uc,{children:"Как происходит доставка"}),r.jsxs(kN,{children:[r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(pc,{children:"1"}),r.jsx(mc,{children:r.jsx(x,{icon:Oe})}),r.jsx(gc,{children:"Оформление заказа"}),r.jsx(xc,{children:"Оставляете заявку на сайте или звоните нам. Менеджер уточнит детали доставки."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(pc,{children:"2"}),r.jsx(mc,{children:r.jsx(x,{icon:Jb})}),r.jsx(gc,{children:"Подготовка заказа"}),r.jsx(xc,{children:"Мы комплектуем ваш заказ и готовим к отправке. Проверяем качество товара."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(pc,{children:"3"}),r.jsx(mc,{children:r.jsx(x,{icon:Jo})}),r.jsx(gc,{children:"Доставка"}),r.jsx(xc,{children:"Курьер доставляет заказ в указанное время и место. Подписываете документы."})]}),r.jsxs(hc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(pc,{children:"4"}),r.jsx(mc,{children:r.jsx(x,{icon:F})}),r.jsx(gc,{children:"Получение"}),r.jsx(xc,{children:"Проверяете товар, подписываете акт приема-передачи. При необходимости - установка."})]})]})]}),r.jsxs(dc,{children:[r.jsx(uc,{children:"Важная информация"}),r.jsxs(jN,{children:[r.jsxs(s5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(a5,{children:[r.jsx(x,{icon:St}),"Условия доставки"]}),r.jsx(fc,{children:"Доставка осуществляется по будним дням с 9:00 до 18:00. В выходные дни доставка возможна по предварительной договоренности за дополнительную плату."}),r.jsx(fc,{children:"При заказе на сумму от 50 000 ₽ доставка по Москве осуществляется бесплатно. Для регионов стоимость доставки рассчитывается индивидуально."})]}),r.jsxs(s5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(a5,{children:[r.jsx(x,{icon:hi}),"Получение заказа"]}),r.jsx(fc,{children:"При получении заказа необходимо предъявить паспорт и документ, подтверждающий право на получение товара (доверенность, если заказ получает не покупатель)."}),r.jsx(fc,{children:"Обязательно проверьте целостность упаковки и комплектность товара перед подписанием документов о получении."})]})]})]}),r.jsxs(dc,{children:[r.jsx(uc,{children:"Дополнительные услуги"}),r.jsxs(TN,{children:[r.jsxs(Hh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Uh,{children:r.jsx(x,{icon:mm})}),r.jsx(Wh,{children:"Расчет стоимости"}),r.jsx(Yh,{children:"Бесплатный расчет стоимости доставки и установки. Учитываем все нюансы вашего объекта."})]}),r.jsxs(Hh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Uh,{children:r.jsx(x,{icon:sM})}),r.jsx(Wh,{children:"Доставка в регионы"}),r.jsx(Yh,{children:"Доставляем по всей России через надежных транспортных партнеров. Сроки и стоимость уточняйте."})]}),r.jsxs(Hh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Uh,{children:r.jsx(x,{icon:Ci})}),r.jsx(Wh,{children:"Оплата при получении"}),r.jsx(Yh,{children:"Возможность оплаты наличными или картой при получении заказа. Безопасно и удобно."})]})]})]}),r.jsxs(CN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(SN,{children:"Остались вопросы по доставке?"}),r.jsx(zN,{children:"Свяжитесь с нами для получения подробной информации о доставке, расчета стоимости и согласования времени доставки. Наши специалисты готовы помочь!"}),r.jsxs(PN,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Связаться с нами"]})]})]})}const LN=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,IN=l(k.div)`
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
`,MN=l(k.h1)`
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
`,AN=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Ls=l(k.section)`
  margin-bottom: 5rem;
`,Is=l.h2`
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
`,$N=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,yc=l(k.div)`
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
`,vc=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,bc=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,wc=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,jc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,kc=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Rt=l.li`
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
`,RN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,l5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,c5=l.h3`
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
`,DN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Gh=l(k.div)`
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
`,Xh=l.div`
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
`,Qh=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Kh=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,NN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Sc=l(k.div)`
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
`,zc=l.div`
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
`,Pc=l.div`
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
`,Tc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Ec=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,ON=l(k.div)`
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
`,FN=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,VN=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,_N=l(k.button)`
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
`,BN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,qh=l(k.div)`
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
`,Zh=l.div`
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
`,Jh=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,ep=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;function HN(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(LN,{children:[r.jsxs(IN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(MN,{children:"Способы оплаты"}),r.jsx(AN,{children:"Безопасные и удобные способы оплаты счетчиков электроэнергии. Мы принимаем все популярные платежные методы и гарантируем безопасность каждой транзакции."})]}),r.jsxs(Ls,{children:[r.jsx(Is,{children:"Способы оплаты"}),r.jsxs($N,{children:[r.jsxs(yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(vc,{children:[r.jsx(bc,{children:r.jsx(x,{icon:Ci})}),r.jsx(wc,{children:"Банковские карты"})]}),r.jsx(jc,{children:"Оплата картами Visa, MasterCard, МИР. Безопасные платежи через защищенный шлюз."}),r.jsxs(kc,{children:[r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"VISA, MasterCard, МИР"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Мгновенное зачисление"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Без комиссии"]})]})]}),r.jsxs(yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(vc,{children:[r.jsx(bc,{children:r.jsx(x,{icon:BI})}),r.jsx(wc,{children:"Наличные"})]}),r.jsx(jc,{children:"Оплата наличными при получении заказа. Удобно для тех, кто предпочитает наличный расчет."}),r.jsxs(kc,{children:[r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Оплата при получении"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Без комиссии"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Квитанция в подарок"]})]})]}),r.jsxs(yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(vc,{children:[r.jsx(bc,{children:r.jsx(x,{icon:nM})}),r.jsx(wc,{children:"Электронные кошельки"})]}),r.jsx(jc,{children:"Оплата через популярные электронные кошельки и платежные системы."}),r.jsxs(kc,{children:[r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Яндекс.Деньги, QIWI"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"WebMoney, PayPal"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Мгновенные платежи"]})]})]}),r.jsxs(yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsxs(vc,{children:[r.jsx(bc,{children:r.jsx(x,{icon:wn})}),r.jsx(wc,{children:"Безналичный расчет"})]}),r.jsx(jc,{children:"Оплата по счету для юридических лиц и ИП. Работаем с НДС и без НДС."}),r.jsxs(kc,{children:[r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Счет на оплату"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"НДС и без НДС"]}),r.jsxs(Rt,{children:[r.jsx(x,{icon:F}),"Договор поставки"]})]})]})]})]}),r.jsxs(Ls,{children:[r.jsx(Is,{children:"Безопасность платежей"}),r.jsxs(DN,{children:[r.jsxs(Gh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Xh,{children:r.jsx(x,{icon:S4})}),r.jsx(Qh,{children:"SSL-шифрование"}),r.jsx(Kh,{children:"Все платежи защищены современным SSL-шифрованием. Ваши данные в полной безопасности."})]}),r.jsxs(Gh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Xh,{children:r.jsx(x,{icon:St})}),r.jsx(Qh,{children:"3D Secure"}),r.jsx(Kh,{children:"Дополнительная защита для карточных платежей с подтверждением через SMS."})]}),r.jsxs(Gh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Xh,{children:r.jsx(x,{icon:F})}),r.jsx(Qh,{children:"Гарантия возврата"}),r.jsx(Kh,{children:"Полный возврат средств в течение 14 дней при соблюдении условий возврата."})]})]})]}),r.jsxs(Ls,{children:[r.jsx(Is,{children:"Процесс оплаты"}),r.jsxs(NN,{children:[r.jsxs(Sc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(zc,{children:"1"}),r.jsx(Pc,{children:r.jsx(x,{icon:mm})}),r.jsx(Tc,{children:"Расчет стоимости"}),r.jsx(Ec,{children:"Выбираете товары и получаете точный расчет стоимости с учетом доставки."})]}),r.jsxs(Sc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(zc,{children:"2"}),r.jsx(Pc,{children:r.jsx(x,{icon:Ci})}),r.jsx(Tc,{children:"Выбор способа оплаты"}),r.jsx(Ec,{children:"Выбираете удобный для вас способ оплаты из доступных вариантов."})]}),r.jsxs(Sc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(zc,{children:"3"}),r.jsx(Pc,{children:r.jsx(x,{icon:S4})}),r.jsx(Tc,{children:"Безопасная оплата"}),r.jsx(Ec,{children:"Совершаете платеж через защищенный платежный шлюз или при получении."})]}),r.jsxs(Sc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(zc,{children:"4"}),r.jsx(Pc,{children:r.jsx(x,{icon:T4})}),r.jsx(Tc,{children:"Подтверждение"}),r.jsx(Ec,{children:"Получаете подтверждение оплаты и документы на email или SMS."})]})]})]}),r.jsxs(Ls,{children:[r.jsx(Is,{children:"Важная информация"}),r.jsxs(RN,{children:[r.jsxs(l5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(c5,{children:[r.jsx(x,{icon:S0}),"Условия оплаты"]}),r.jsx(Cc,{children:"Оплата производится в российских рублях. При оплате картой комиссия не взимается. Для юридических лиц возможна оплата по счету с отсрочкой платежа."}),r.jsx(Cc,{children:"При оплате наличными при получении заказа, оплата производится курьеру. Обязательно проверьте товар перед оплатой."})]}),r.jsxs(l5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(c5,{children:[r.jsx(x,{icon:Xn}),"Возврат средств"]}),r.jsx(Cc,{children:"Возврат средств производится в течение 14 дней с момента покупки при сохранении товарного вида и комплектности товара."}),r.jsx(Cc,{children:"Для возврата необходимо связаться с нами и предоставить документы о покупке. Возврат производится тем же способом, которым была произведена оплата."})]})]})]}),r.jsxs(Ls,{children:[r.jsx(Is,{children:"Дополнительные услуги"}),r.jsxs(BN,{children:[r.jsxs(qh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Zh,{children:r.jsx(x,{icon:mm})}),r.jsx(Jh,{children:"Рассрочка"}),r.jsx(ep,{children:"Возможность покупки в рассрочку на 3-12 месяцев без переплат и скрытых комиссий."})]}),r.jsxs(qh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Zh,{children:r.jsx(x,{icon:ji})}),r.jsx(Jh,{children:"Кредитование"}),r.jsx(ep,{children:"Партнерство с банками для предоставления кредитов на покупку оборудования."})]}),r.jsxs(qh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Zh,{children:r.jsx(x,{icon:T4})}),r.jsx(Jh,{children:"Документооборот"}),r.jsx(ep,{children:"Полный комплект документов: счета, акты, накладные, гарантийные талоны."})]})]})]}),r.jsxs(ON,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(FN,{children:"Остались вопросы по оплате?"}),r.jsx(VN,{children:"Свяжитесь с нами для получения подробной информации о способах оплаты, условиях кредитования и рассрочки. Наши специалисты готовы помочь!"}),r.jsxs(_N,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Связаться с нами"]})]})]})}const UN=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,WN=l(k.div)`
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
`,YN=l(k.h1)`
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
`,GN=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Ms=l(k.section)`
  margin-bottom: 5rem;
`,As=l.h2`
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
`,XN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,tp=l(k.div)`
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
`,np=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,rp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,ip=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,op=l.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
`,sp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,ap=l.ul`
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
`,QN=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,d5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,u5=l.h3`
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
`,Lc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,KN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Ic=l(k.div)`
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
`,Mc=l.div`
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
`,Ac=l.div`
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
`,$c=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Rc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,qN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Dc=l(k.div)`
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
`,Nc=l.div`
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
`,Oc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Fc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,ZN=l(k.div)`
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
`,eO=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,tO=l(k.button)`
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
`,nO=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,lp=l(k.div)`
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
`,cp=l.div`
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
`,dp=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,up=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;function rO(){const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(UN,{children:[r.jsxs(WN,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(YN,{children:"Гарантия и сервис"}),r.jsx(GN,{children:"Максимальная гарантия на все счетчики электроэнергии до 16 лет. Профессиональное обслуживание и ремонт оборудования с выездом на место."})]}),r.jsxs(Ms,{children:[r.jsx(As,{children:"Виды гарантии"}),r.jsxs(XN,{children:[r.jsxs(tp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(np,{children:[r.jsx(rp,{children:r.jsx(x,{icon:St})}),r.jsx(ip,{children:"Стандартная гарантия"})]}),r.jsx(op,{children:"2-5 лет"}),r.jsx(sp,{children:"Базовая гарантия производителя на все счетчики электроэнергии."}),r.jsxs(ap,{children:[r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Бесплатный ремонт"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Замена неисправных деталей"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Техническая поддержка"]})]})]}),r.jsxs(tp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(np,{children:[r.jsx(rp,{children:r.jsx(x,{icon:tn})}),r.jsx(ip,{children:"Расширенная гарантия"})]}),r.jsx(op,{children:"8-12 лет"}),r.jsx(sp,{children:"Дополнительная гарантия на счетчики премиум-класса с расширенным покрытием."}),r.jsxs(ap,{children:[r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Полный ремонт и обслуживание"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Выезд специалиста на место"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Приоритетная поддержка"]})]})]}),r.jsxs(tp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(np,{children:[r.jsx(rp,{children:r.jsx(x,{icon:ji})}),r.jsx(ip,{children:"Максимальная гарантия"})]}),r.jsx(op,{children:"16 лет"}),r.jsx(sp,{children:"Максимальная гарантия на профессиональное оборудование с полным сервисным обслуживанием."}),r.jsxs(ap,{children:[r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Полная замена оборудования"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Круглосуточная поддержка"]}),r.jsxs(Sn,{children:[r.jsx(x,{icon:F}),"Плановое обслуживание"]})]})]})]})]}),r.jsxs(Ms,{children:[r.jsx(As,{children:"Процесс гарантийного обслуживания"}),r.jsxs(KN,{children:[r.jsxs(Ic,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Mc,{children:"1"}),r.jsx(Ac,{children:r.jsx(x,{icon:Oe})}),r.jsx($c,{children:"Обращение"}),r.jsx(Rc,{children:"Связываетесь с нами по телефону или через форму на сайте для регистрации обращения."})]}),r.jsxs(Ic,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Mc,{children:"2"}),r.jsx(Ac,{children:r.jsx(x,{icon:nx})}),r.jsx($c,{children:"Диагностика"}),r.jsx(Rc,{children:"Наши специалисты проводят диагностику оборудования для выявления причины неисправности."})]}),r.jsxs(Ic,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Mc,{children:"3"}),r.jsx(Ac,{children:r.jsx(x,{icon:ki})}),r.jsx($c,{children:"Ремонт"}),r.jsx(Rc,{children:"Выполняем ремонт или замену неисправных компонентов в кратчайшие сроки."})]}),r.jsxs(Ic,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Mc,{children:"4"}),r.jsx(Ac,{children:r.jsx(x,{icon:F})}),r.jsx($c,{children:"Тестирование"}),r.jsx(Rc,{children:"Проводим тестирование отремонтированного оборудования и выдаем акт выполненных работ."})]})]})]}),r.jsxs(Ms,{children:[r.jsx(As,{children:"Сервисные услуги"}),r.jsxs(qN,{children:[r.jsxs(Dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Nc,{children:r.jsx(x,{icon:rM})}),r.jsx(Oc,{children:"Ремонт оборудования"}),r.jsx(Fc,{children:"Профессиональный ремонт счетчиков электроэнергии любой сложности с использованием оригинальных запчастей."})]}),r.jsxs(Dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Nc,{children:r.jsx(x,{icon:z0})}),r.jsx(Oc,{children:"Техническое обслуживание"}),r.jsx(Fc,{children:"Плановое техническое обслуживание оборудования для предотвращения поломок и продления срока службы."})]}),r.jsxs(Dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Nc,{children:r.jsx(x,{icon:rx})}),r.jsx(Oc,{children:"Выезд специалиста"}),r.jsx(Fc,{children:"Выезд квалифицированного специалиста на место установки оборудования для диагностики и ремонта."})]}),r.jsxs(Dc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Nc,{children:r.jsx(x,{icon:Df})}),r.jsx(Oc,{children:"Техническая поддержка"}),r.jsx(Fc,{children:"Круглосуточная техническая поддержка по вопросам эксплуатации и обслуживания оборудования."})]})]})]}),r.jsxs(Ms,{children:[r.jsx(As,{children:"Важная информация"}),r.jsxs(QN,{children:[r.jsxs(d5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(u5,{children:[r.jsx(x,{icon:S0}),"Условия гарантии"]}),r.jsx(Lc,{children:"Гарантия распространяется на заводские дефекты и неисправности, возникшие в процессе нормальной эксплуатации. Гарантийный срок исчисляется с момента продажи товара."}),r.jsx(Lc,{children:"Для получения гарантийного обслуживания необходимо предъявить гарантийный талон и документы о покупке. Оборудование должно быть в исправном состоянии без механических повреждений."})]}),r.jsxs(d5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(u5,{children:[r.jsx(x,{icon:Xn}),"Что не покрывается гарантией"]}),r.jsx(Lc,{children:"Гарантия не распространяется на повреждения, возникшие в результате неправильной установки, эксплуатации или хранения, а также на естественный износ компонентов."}),r.jsx(Lc,{children:"Не подлежат гарантийному обслуживанию изделия с механическими повреждениями, следами вскрытия или попыток самостоятельного ремонта."})]})]})]}),r.jsxs(Ms,{children:[r.jsx(As,{children:"Дополнительные услуги"}),r.jsxs(nO,{children:[r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(cp,{children:r.jsx(x,{icon:tx})}),r.jsx(dp,{children:"Продление гарантии"}),r.jsx(up,{children:"Возможность продления гарантийного срока на дополнительный период с расширенным покрытием."})]}),r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(cp,{children:r.jsx(x,{icon:pe})}),r.jsx(dp,{children:"Сервисные контракты"}),r.jsx(up,{children:"Заключение сервисных контрактов на техническое обслуживание оборудования с фиксированной стоимостью."})]}),r.jsxs(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(cp,{children:r.jsx(x,{icon:wn})}),r.jsx(dp,{children:"Корпоративное обслуживание"}),r.jsx(up,{children:"Специальные условия для предприятий и организаций с большим количеством оборудования."})]})]})]}),r.jsxs(ZN,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(JN,{children:"Нужна помощь с гарантийным обслуживанием?"}),r.jsx(eO,{children:"Свяжитесь с нами для получения подробной информации о гарантийных условиях, сервисном обслуживании или регистрации гарантийного случая. Наши специалисты готовы помочь!"}),r.jsxs(tO,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Связаться с нами"]})]})]})}const iO=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,oO=l(k.div)`
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
`,sO=l(k.h1)`
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
`,aO=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,$s=l(k.section)`
  margin-bottom: 5rem;
`,Rs=l.h2`
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
`,lO=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,fp=l(k.div)`
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
`,hp=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,pp=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,mp=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,gp=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,xp=l.ul`
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
`,cO=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Vc=l(k.div)`
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
`,_c=l.div`
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
`,Bc=l.div`
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
`,Hc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Uc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,dO=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,f5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,h5=l.h3`
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
`,Wc=l.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,p5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Fi=l(k.div)`
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
`,Vi=l.div`
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
`,_i=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Bi=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,uO=l(k.div)`
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
`,fO=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,hO=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,pO=l(k.button)`
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
`,mO=()=>{const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(iO,{children:[r.jsxs(oO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(sO,{children:"Возврат товара"}),r.jsx(aO,{children:"Удобные условия возврата и обмена товара в течение 14 дней. Мы заботимся о вашем комфорте и удовлетворенности покупкой."})]}),r.jsxs($s,{children:[r.jsx(Rs,{children:"Условия возврата"}),r.jsxs(lO,{children:[r.jsxs(fp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(hp,{children:[r.jsx(pp,{children:r.jsx(x,{icon:F})}),r.jsx(mp,{children:"Возврат в течение 14 дней"})]}),r.jsx(gp,{children:"Вы можете вернуть товар в течение 14 дней с момента покупки без объяснения причин."}),r.jsxs(xp,{children:[r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Полная комплектация товара"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Сохранение товарного вида"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Наличие документов о покупке"]})]})]}),r.jsxs(fp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(hp,{children:[r.jsx(pp,{children:r.jsx(x,{icon:St})}),r.jsx(mp,{children:"Гарантийный возврат"})]}),r.jsx(gp,{children:"Возврат товара в течение гарантийного срока при обнаружении заводских дефектов."}),r.jsxs(xp,{children:[r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Бесплатная диагностика"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Замена на аналогичный товар"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Возврат денежных средств"]})]})]}),r.jsxs(fp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(hp,{children:[r.jsx(pp,{children:r.jsx(x,{icon:ji})}),r.jsx(mp,{children:"Обмен товара"})]}),r.jsx(gp,{children:"Возможность обмена товара на аналогичный или другой товар из нашего ассортимента."}),r.jsxs(xp,{children:[r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Обмен на аналогичный товар"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Доплата за более дорогой товар"]}),r.jsxs(zn,{children:[r.jsx(x,{icon:F}),"Возврат разницы при обмене на более дешевый"]})]})]})]})]}),r.jsxs($s,{children:[r.jsx(Rs,{children:"Процесс возврата"}),r.jsxs(cO,{children:[r.jsxs(Vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(_c,{children:"1"}),r.jsx(Bc,{children:r.jsx(x,{icon:Oe})}),r.jsx(Hc,{children:"Обращение"}),r.jsx(Uc,{children:"Свяжитесь с нами по телефону или через форму на сайте для регистрации возврата."})]}),r.jsxs(Vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(_c,{children:"2"}),r.jsx(Bc,{children:r.jsx(x,{icon:nx})}),r.jsx(Hc,{children:"Проверка"}),r.jsx(Uc,{children:"Наши специалисты проверяют соответствие товара условиям возврата и комплектацию."})]}),r.jsxs(Vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(_c,{children:"3"}),r.jsx(Bc,{children:r.jsx(x,{icon:Ci})}),r.jsx(Hc,{children:"Возврат средств"}),r.jsx(Uc,{children:"Возврат денежных средств на карту или банковский счет в течение 3-5 рабочих дней."})]}),r.jsxs(Vc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(_c,{children:"4"}),r.jsx(Bc,{children:r.jsx(x,{icon:F})}),r.jsx(Hc,{children:"Подтверждение"}),r.jsx(Uc,{children:"Отправка уведомления о завершении процедуры возврата и поступлении средств."})]})]})]}),r.jsxs($s,{children:[r.jsx(Rs,{children:"Важная информация"}),r.jsxs(dO,{children:[r.jsxs(f5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(h5,{children:[r.jsx(x,{icon:S0}),"Что можно вернуть"]}),r.jsx(Wc,{children:"Возврату подлежат товары в полной комплектации с сохранением товарного вида, потребительских свойств и заводской упаковки. Товар не должен иметь следов использования."}),r.jsx(Wc,{children:"Обязательно наличие документов о покупке: чек, гарантийный талон, технический паспорт (если предусмотрен)."})]}),r.jsxs(f5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(h5,{children:[r.jsx(x,{icon:Xn}),"Что не подлежит возврату"]}),r.jsx(Wc,{children:"Не подлежат возврату товары с механическими повреждениями, следами эксплуатации, нарушением целостности упаковки или отсутствием комплектующих."}),r.jsx(Wc,{children:"Также не возвращаются товары, изготовленные по индивидуальному заказу, а также товары с истекшим гарантийным сроком."})]})]})]}),r.jsxs($s,{children:[r.jsx(Rs,{children:"Дополнительные услуги"}),r.jsxs(p5,{children:[r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:Jo})}),r.jsx(_i,{children:"Курьерская доставка"}),r.jsx(Bi,{children:"Бесплатная доставка товара для возврата курьером в удобное для вас время."})]}),r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:tx})}),r.jsx(_i,{children:"Гибкие сроки"}),r.jsx(Bi,{children:"Возможность продления срока возврата до 30 дней для корпоративных клиентов."})]}),r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:hi})}),r.jsx(_i,{children:"Персональный менеджер"}),r.jsx(Bi,{children:"Назначение персонального менеджера для сопровождения процедуры возврата."})]})]})]}),r.jsxs($s,{children:[r.jsx(Rs,{children:"Часто задаваемые вопросы"}),r.jsxs(p5,{children:[r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:Nf})}),r.jsx(_i,{children:"Сколько времени занимает возврат?"}),r.jsx(Bi,{children:"Процедура возврата занимает 3-5 рабочих дней с момента принятия товара."})]}),r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:Ci})}),r.jsx(_i,{children:"Как происходит возврат денег?"}),r.jsx(Bi,{children:"Деньги возвращаются на ту же карту, с которой была совершена покупка."})]}),r.jsxs(Fi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Vi,{children:r.jsx(x,{icon:Jb})}),r.jsx(_i,{children:"Нужна ли упаковка?"}),r.jsx(Bi,{children:"Желательно сохранить оригинальную упаковку, но это не обязательное требование."})]})]})]}),r.jsxs(uO,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(fO,{children:"Нужна помощь с возвратом товара?"}),r.jsx(hO,{children:"Свяжитесь с нами для получения подробной информации о процедуре возврата, обмена товара или регистрации гарантийного случая. Наши специалисты готовы помочь!"}),r.jsxs(pO,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Связаться с нами"]})]})]})},gO=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,xO=l(k.div)`
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
`,yO=l(k.h1)`
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
`,vO=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Ds=l(k.section)`
  margin-bottom: 5rem;
`,Ns=l.h2`
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
`,bO=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Hi=l(k.div)`
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
`,Ui=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Wi=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,Yi=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,Gi=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Xi=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ae=l.li`
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
`,wO=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Yc=l(k.div)`
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
`,Gc=l.div`
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
`,Xc=l.div`
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
`,Qc=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Kc=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,jO=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,m5=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,g5=l.h3`
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
`,x5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Qi=l(k.div)`
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
`,Ki=l.div`
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
`,qi=l.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Zi=l.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`,kO=l(k.div)`
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
`,CO=l.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`,SO=l.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,zO=l(k.button)`
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
`,PO=()=>{const e=()=>{const t=document.querySelector(".contact-section");t&&t.scrollIntoView({behavior:"smooth"})};return r.jsxs(gO,{children:[r.jsxs(xO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(yO,{children:"Профессиональные консультации"}),r.jsx(vO,{children:"Получите экспертную консультацию по выбору, установке и обслуживанию счетчиков электроэнергии. Наши специалисты помогут подобрать оптимальное решение для ваших задач."})]}),r.jsxs(Ds,{children:[r.jsx(Ns,{children:"Виды консультаций"}),r.jsxs(bO,{children:[r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:Rf})}),r.jsx(Yi,{children:"Техническая консультация"})]}),r.jsx(Gi,{children:"Помощь в выборе подходящего счетчика электроэнергии с учетом технических характеристик и требований."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Анализ технических требований"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Подбор оптимального решения"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Расчет экономической эффективности"]})]})]}),r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:ki})}),r.jsx(Yi,{children:"Консультация по установке"})]}),r.jsx(Gi,{children:"Профессиональные рекомендации по монтажу и настройке счетчиков электроэнергии."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Схемы подключения"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Требования безопасности"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Настройка и калибровка"]})]})]}),r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:z0})}),r.jsx(Yi,{children:"Консультация по обслуживанию"})]}),r.jsx(Gi,{children:"Экспертные советы по техническому обслуживанию и ремонту оборудования."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Плановое обслуживание"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Диагностика неисправностей"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Рекомендации по эксплуатации"]})]})]}),r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:tn})}),r.jsx(Yi,{children:"Юридическая консультация"})]}),r.jsx(Gi,{children:"Консультации по правовым аспектам использования счетчиков электроэнергии."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Нормативные требования"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Сертификация оборудования"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Правовые аспекты эксплуатации"]})]})]}),r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.4},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:Zb})}),r.jsx(Yi,{children:"Корпоративные консультации"})]}),r.jsx(Gi,{children:"Специализированные консультации для предприятий и организаций."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Аудит энергопотребления"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Оптимизация энергосистем"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Внедрение АСКУЭ"]})]})]}),r.jsxs(Hi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.5},viewport:{once:!0},children:[r.jsxs(Ui,{children:[r.jsx(Wi,{children:r.jsx(x,{icon:ew})}),r.jsx(Yi,{children:"Консультации по энергосбережению"})]}),r.jsx(Gi,{children:"Рекомендации по снижению энергопотребления и повышению эффективности."}),r.jsxs(Xi,{children:[r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Анализ энергопотребления"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Рекомендации по экономии"]}),r.jsxs(Ae,{children:[r.jsx(x,{icon:F}),"Программы энергосбережения"]})]})]})]})]}),r.jsxs(Ds,{children:[r.jsx(Ns,{children:"Процесс консультации"}),r.jsxs(wO,{children:[r.jsxs(Yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Gc,{children:"1"}),r.jsx(Xc,{children:r.jsx(x,{icon:Oe})}),r.jsx(Qc,{children:"Обращение"}),r.jsx(Kc,{children:"Свяжитесь с нами по телефону или оставьте заявку на сайте для записи на консультацию."})]}),r.jsxs(Yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Gc,{children:"2"}),r.jsx(Xc,{children:r.jsx(x,{icon:hi})}),r.jsx(Qc,{children:"Анализ потребностей"}),r.jsx(Kc,{children:"Наш специалист изучит ваши требования и технические характеристики объекта."})]}),r.jsxs(Yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Gc,{children:"3"}),r.jsx(Xc,{children:r.jsx(x,{icon:Rf})}),r.jsx(Qc,{children:"Разработка решения"}),r.jsx(Kc,{children:"Подготовка индивидуального решения с учетом всех технических и экономических факторов."})]}),r.jsxs(Yc,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[r.jsx(Gc,{children:"4"}),r.jsx(Xc,{children:r.jsx(x,{icon:We})}),r.jsx(Qc,{children:"Предоставление рекомендаций"}),r.jsx(Kc,{children:"Получение подробных рекомендаций и технической документации для реализации проекта."})]})]})]}),r.jsxs(Ds,{children:[r.jsx(Ns,{children:"Преимущества наших консультаций"}),r.jsxs(jO,{children:[r.jsxs(m5,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(g5,{children:[r.jsx(x,{icon:C0}),"Профессионализм"]}),r.jsx(qc,{children:"Наши консультанты имеют многолетний опыт работы в сфере энергетики и регулярно проходят повышение квалификации."}),r.jsx(qc,{children:"Мы используем современные методики анализа и последние достижения в области энергосбережения для разработки оптимальных решений."})]}),r.jsxs(m5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsxs(g5,{children:[r.jsx(x,{icon:vM}),"Индивидуальный подход"]}),r.jsx(qc,{children:"Каждая консультация разрабатывается индивидуально с учетом специфики вашего объекта и требований."}),r.jsx(qc,{children:"Мы учитываем все факторы: от технических характеристик до бюджетных ограничений и сроков реализации."})]})]})]}),r.jsxs(Ds,{children:[r.jsx(Ns,{children:"Дополнительные услуги"}),r.jsxs(x5,{children:[r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:rx})}),r.jsx(qi,{children:"Выезд специалиста"}),r.jsx(Zi,{children:"Выезд консультанта на объект для проведения технического обследования и анализа."})]}),r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:tx})}),r.jsx(qi,{children:"Долгосрочное сопровождение"}),r.jsx(Zi,{children:"Постоянное техническое сопровождение проекта от разработки до внедрения и эксплуатации."})]}),r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:TM})}),r.jsx(qi,{children:"Обучение персонала"}),r.jsx(Zi,{children:"Проведение обучающих семинаров для вашего персонала по эксплуатации оборудования."})]})]})]}),r.jsxs(Ds,{children:[r.jsx(Ns,{children:"Часто задаваемые вопросы"}),r.jsxs(x5,{children:[r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:Nf})}),r.jsx(qi,{children:"Сколько стоит консультация?"}),r.jsx(Zi,{children:"Стоимость зависит от сложности проекта и объема работ. Первичная консультация часто бесплатна."})]}),r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:Ra})}),r.jsx(qi,{children:"Сколько длится консультация?"}),r.jsx(Zi,{children:"Продолжительность зависит от сложности вопроса. Обычно от 30 минут до 2 часов."})]}),r.jsxs(Qi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[r.jsx(Ki,{children:r.jsx(x,{icon:Df})}),r.jsx(qi,{children:"Можно ли получить консультацию онлайн?"}),r.jsx(Zi,{children:"Да, мы проводим консультации по видеосвязи, что позволяет экономить время и средства."})]})]})]}),r.jsxs(kO,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[r.jsx(CO,{children:"Нужна профессиональная консультация?"}),r.jsx(SO,{children:"Свяжитесь с нами для получения подробной информации о наших консультационных услугах, записи на консультацию или обсуждения вашего проекта. Наши эксперты готовы помочь!"}),r.jsxs(zO,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:We}),"Записаться на консультацию"]})]})]})},TO=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,EO=l(k.div)`
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
`,LO=l(k.h1)`
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
`,IO=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,yp=l(k.section)`
  margin-bottom: 5rem;
`,vp=l.h2`
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
`,y5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Jn=l(k.div)`
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
`,Z=l.li`
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
`,Zc=l(k.div)`
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
`,Jc=l.div`
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
`,ed=l.div`
  flex: 1;
`,td=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,nd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,rd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Dt=l.li`
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
`,MO=l(k.div)`
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
`,AO=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,$O=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,RO=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,Ji=l.li`
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
`,DO=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,NO=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,OO=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,FO=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,v5=l(k.button)`
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
`,VO=l(k.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,_O=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,BO=l.div`
  flex: 1;
`,HO=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,UO=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,WO=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,YO=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,GO=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,id=l.li`
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
`,od=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,sd=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,ad=l.span`
  color: #333333;
  font-weight: 500;
`,ld=l(k.button)`
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
`;function XO(){j.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(TO,{children:[r.jsxs(EO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(LO,{children:"Поверка счетчиков электрической энергии"}),r.jsx(IO,{children:"Профессиональная поверка электросчетчиков с выдачей официальных документов. Работаем с 2010 года, имеем все необходимые разрешения и аккредитацию."})]}),r.jsxs(yp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(vp,{children:"Наши услуги по поверке"}),r.jsxs(y5,{children:[r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:tn})}),r.jsx(tr,{children:"Официальная поверка"}),r.jsx(nr,{children:"Проводим поверку в соответствии с требованиями законодательства РФ с выдачей официальных документов."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Аккредитованная лаборатория"}),r.jsx(Z,{children:"Сертифицированное оборудование"}),r.jsx(Z,{children:"Официальные документы"}),r.jsx(Z,{children:"Регистрация в Госреестре"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:ki})}),r.jsx(tr,{children:"Выездная поверка"}),r.jsx(nr,{children:"Выполняем поверку на территории заказчика с использованием мобильного оборудования."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Выезд специалиста"}),r.jsx(Z,{children:"Мобильное оборудование"}),r.jsx(Z,{children:"Минимальные простои"}),r.jsx(Z,{children:"Удобство для клиента"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:Ra})}),r.jsx(tr,{children:"Срочная поверка"}),r.jsx(nr,{children:"Выполняем срочную поверку в кратчайшие сроки для критически важных объектов."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Сроки от 1 дня"}),r.jsx(Z,{children:"Приоритетное обслуживание"}),r.jsx(Z,{children:"Круглосуточная поддержка"}),r.jsx(Z,{children:"Гарантия сроков"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:St})}),r.jsx(tr,{children:"Техническое обслуживание"}),r.jsx(nr,{children:"Обеспечиваем техническое обслуживание и ремонт электросчетчиков любой сложности."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Диагностика неисправностей"}),r.jsx(Z,{children:"Ремонт и настройка"}),r.jsx(Z,{children:"Замена комплектующих"}),r.jsx(Z,{children:"Гарантия на работы"})]})]})]})]}),r.jsxs(yp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(vp,{children:"Процесс поверки"}),r.jsxs(Zc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(Jc,{children:"1"}),r.jsxs(ed,{children:[r.jsx(td,{children:"Заявка и консультация"}),r.jsx(nd,{children:"Оставляете заявку на сайте или по телефону. Наш специалист консультирует по всем вопросам и согласовывает условия работы."}),r.jsxs(rd,{children:[r.jsx(Dt,{children:"Бесплатная консультация"}),r.jsx(Dt,{children:"Расчет стоимости"}),r.jsx(Dt,{children:"Согласование сроков"})]})]})]}),r.jsxs(Zc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(Jc,{children:"2"}),r.jsxs(ed,{children:[r.jsx(td,{children:"Подготовка и выезд"}),r.jsx(nd,{children:"Подготавливаем необходимое оборудование и документы. Специалист выезжает на объект в согласованное время."}),r.jsxs(rd,{children:[r.jsx(Dt,{children:"Проверка оборудования"}),r.jsx(Dt,{children:"Подготовка документов"}),r.jsx(Dt,{children:"Выезд специалиста"})]})]})]}),r.jsxs(Zc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(Jc,{children:"3"}),r.jsxs(ed,{children:[r.jsx(td,{children:"Проведение поверки"}),r.jsx(nd,{children:"Выполняем все необходимые измерения и проверки в соответствии с методиками поверки и требованиями нормативных документов."}),r.jsxs(rd,{children:[r.jsx(Dt,{children:"Визуальный осмотр"}),r.jsx(Dt,{children:"Электрические измерения"}),r.jsx(Dt,{children:"Проверка точности"})]})]})]}),r.jsxs(Zc,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(Jc,{children:"4"}),r.jsxs(ed,{children:[r.jsx(td,{children:"Оформление документов"}),r.jsx(nd,{children:"Оформляем официальные документы о поверке и передаем их заказчику. При необходимости регистрируем в Госреестре."}),r.jsxs(rd,{children:[r.jsx(Dt,{children:"Сертификат поверки"}),r.jsx(Dt,{children:"Протокол измерений"}),r.jsx(Dt,{children:"Регистрация в реестре"})]})]})]})]}),r.jsxs(yp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(vp,{children:"Типы счетчиков"}),r.jsxs(y5,{children:[r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:Rf})}),r.jsx(tr,{children:"Однофазные счетчики"}),r.jsx(nr,{children:"Поверка однофазных электросчетчиков для жилых и коммерческих помещений."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Счетчики Меркурий"}),r.jsx(Z,{children:"Счетчики Энергомера"}),r.jsx(Z,{children:"Счетчики Нева"}),r.jsx(Z,{children:"Импортные счетчики"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:z0})}),r.jsx(tr,{children:"Трехфазные счетчики"}),r.jsx(nr,{children:"Поверка трехфазных электросчетчиков для промышленных объектов."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Счетчики АГАТ"}),r.jsx(Z,{children:"Счетчики Меркурий"}),r.jsx(Z,{children:"Счетчики Энергомера"}),r.jsx(Z,{children:"Специализированные счетчики"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:ew})}),r.jsx(tr,{children:"Многотарифные счетчики"}),r.jsx(nr,{children:"Поверка многотарифных электросчетчиков с функциями учета по зонам суток."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Проверка тарифов"}),r.jsx(Z,{children:"Настройка расписания"}),r.jsx(Z,{children:"Проверка памяти"}),r.jsx(Z,{children:"Валидация данных"})]})]}),r.jsxs(Jn,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(er,{children:r.jsx(x,{icon:T0})}),r.jsx(tr,{children:"Промышленные счетчики"}),r.jsx(nr,{children:"Поверка высоковольтных и промышленных электросчетчиков."}),r.jsxs(rr,{children:[r.jsx(Z,{children:"Высоковольтные счетчики"}),r.jsx(Z,{children:"Счетчики с ТТ и ТН"}),r.jsx(Z,{children:"Счетчики для АСКУЭ"}),r.jsx(Z,{children:"Специальные требования"})]})]})]})]}),r.jsxs(MO,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:[r.jsx(AO,{children:"Почему выбирают нас?"}),r.jsx($O,{children:"Более 10 лет опыта в области поверки электросчетчиков. Наша компания имеет все необходимые разрешения и аккредитацию."}),r.jsxs(RO,{children:[r.jsx(Ji,{children:"Аккредитованная лаборатория с современным оборудованием"}),r.jsx(Ji,{children:"Опытные специалисты с профильным образованием"}),r.jsx(Ji,{children:"Сертифицированные методики поверки"}),r.jsx(Ji,{children:"Гарантия качества и сроков выполнения работ"}),r.jsx(Ji,{children:"Конкурентные цены и гибкие условия"}),r.jsx(Ji,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(VO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(_O,{children:r.jsx(x,{icon:Xn})}),r.jsxs(BO,{children:[r.jsx(HO,{children:"Важная информация"}),r.jsx(UO,{children:"Согласно законодательству РФ, поверка электросчетчиков является обязательной процедурой. Счетчики с истекшим межповерочным интервалом не могут использоваться для коммерческого учета электроэнергии. Рекомендуем своевременно проводить поверку для избежания штрафов и проблем с энергоснабжающими организациями."})]})]}),r.jsxs(WO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[r.jsxs(YO,{children:[r.jsx(x,{icon:pe}),"Необходимые документы"]}),r.jsxs(GO,{children:[r.jsxs(id,{children:[r.jsxs(od,{children:[r.jsx(sd,{children:r.jsx(x,{icon:pe})}),r.jsx(ad,{children:"Паспорт электросчетчика"})]}),r.jsxs(ld,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(id,{children:[r.jsxs(od,{children:[r.jsx(sd,{children:r.jsx(x,{icon:pe})}),r.jsx(ad,{children:"Сертификат поверки (если есть)"})]}),r.jsxs(ld,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(id,{children:[r.jsxs(od,{children:[r.jsx(sd,{children:r.jsx(x,{icon:pe})}),r.jsx(ad,{children:"Договор на поверку"})]}),r.jsxs(ld,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(id,{children:[r.jsxs(od,{children:[r.jsx(sd,{children:r.jsx(x,{icon:pe})}),r.jsx(ad,{children:"Акт выполненных работ"})]}),r.jsxs(ld,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]})]})]}),r.jsxs(DO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(NO,{children:"Готовы заказать поверку?"}),r.jsx(OO,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты ответят на все ваши вопросы и помогут выбрать оптимальное решение."}),r.jsxs(FO,{children:[r.jsxs(v5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(v5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(x,{icon:We}),"Отправить заявку"]})]})]})]})}const QO=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,KO=l(k.div)`
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
`,qO=l(k.h1)`
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
`,ZO=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,bp=l(k.section)`
  margin-bottom: 5rem;
`,wp=l.h2`
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
`,b5=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,ir=l(k.div)`
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
`,sr=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,ar=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,lr=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,J=l.li`
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
`,cd=l(k.div)`
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
`,dd=l.div`
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
`,ud=l.div`
  flex: 1;
`,fd=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,hd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,pd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Nt=l.li`
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
`,JO=l(k.div)`
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
`,eF=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,tF=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,nF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,eo=l.li`
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
`,rF=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,iF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,oF=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,sF=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,w5=l(k.button)`
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
`,aF=l(k.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,lF=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,cF=l.div`
  flex: 1;
`,dF=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,uF=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,fF=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,hF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,pF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,md=l.li`
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
`,gd=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,xd=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,yd=l.span`
  color: #333333;
  font-weight: 500;
`,vd=l(k.button)`
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
`,mF=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,gF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,xF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,to=l.div`
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
`,no=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,ro=l.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;function yF(){j.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(QO,{children:[r.jsxs(KO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(qO,{children:"Поверка трансформаторов тока (напряжения)"}),r.jsx(ZO,{children:"Профессиональная поверка трансформаторов тока и напряжения с использованием современного оборудования. Аккредитованная лаборатория, официальные документы."})]}),r.jsxs(bp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(wp,{children:"Наши услуги по поверке трансформаторов"}),r.jsxs(b5,{children:[r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:Da})}),r.jsx(sr,{children:"Поверка трансформаторов тока"}),r.jsx(ar,{children:"Поверка трансформаторов тока (ТТ) для систем учета электроэнергии и защиты электрических сетей."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Классы точности 0.2S, 0.5S, 1.0"}),r.jsx(J,{children:"Номинальные токи от 5А до 5000А"}),r.jsx(J,{children:"Проверка погрешностей"}),r.jsx(J,{children:"Испытание изоляции"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:P4})}),r.jsx(sr,{children:"Поверка трансформаторов напряжения"}),r.jsx(ar,{children:"Поверка трансформаторов напряжения (ТН) для систем измерения и защиты высоковольтных сетей."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Классы точности 0.2, 0.5, 1.0, 3.0"}),r.jsx(J,{children:"Номинальные напряжения до 35кВ"}),r.jsx(J,{children:"Проверка угловых погрешностей"}),r.jsx(J,{children:"Испытание диэлектрической прочности"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:ki})}),r.jsx(sr,{children:"Выездная поверка"}),r.jsx(ar,{children:"Выполняем поверку трансформаторов на территории заказчика с использованием мобильного оборудования."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Мобильная лаборатория"}),r.jsx(J,{children:"Минимальные простои"}),r.jsx(J,{children:"Сертифицированное оборудование"}),r.jsx(J,{children:"Официальные документы"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:tn})}),r.jsx(sr,{children:"Сертификация и калибровка"}),r.jsx(ar,{children:"Сертификация и калибровка измерительного оборудования для поверки трансформаторов."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Калибровка измерительных цепей"}),r.jsx(J,{children:"Сертификация оборудования"}),r.jsx(J,{children:"Поверка эталонных средств"}),r.jsx(J,{children:"Метрологическое обеспечение"})]})]})]})]}),r.jsxs(bp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(wp,{children:"Процесс поверки трансформаторов"}),r.jsxs(cd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(dd,{children:"1"}),r.jsxs(ud,{children:[r.jsx(fd,{children:"Предварительная оценка"}),r.jsx(hd,{children:"Анализируем технические характеристики трансформатора, определяем объем работ и необходимое оборудование."}),r.jsxs(pd,{children:[r.jsx(Nt,{children:"Изучение паспортных данных"}),r.jsx(Nt,{children:"Определение класса точности"}),r.jsx(Nt,{children:"Выбор методики поверки"})]})]})]}),r.jsxs(cd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(dd,{children:"2"}),r.jsxs(ud,{children:[r.jsx(fd,{children:"Визуальный осмотр"}),r.jsx(hd,{children:"Проводим внешний осмотр трансформатора, проверяем целостность корпуса, маркировку и состояние изоляции."}),r.jsxs(pd,{children:[r.jsx(Nt,{children:"Проверка внешнего состояния"}),r.jsx(Nt,{children:"Контроль маркировки"}),r.jsx(Nt,{children:"Осмотр изоляции"})]})]})]}),r.jsxs(cd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(dd,{children:"3"}),r.jsxs(ud,{children:[r.jsx(fd,{children:"Электрические испытания"}),r.jsx(hd,{children:"Выполняем комплекс электрических испытаний для определения точности и соответствия требованиям стандартов."}),r.jsxs(pd,{children:[r.jsx(Nt,{children:"Измерение погрешностей"}),r.jsx(Nt,{children:"Проверка угловых погрешностей"}),r.jsx(Nt,{children:"Испытание изоляции"})]})]})]}),r.jsxs(cd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(dd,{children:"4"}),r.jsxs(ud,{children:[r.jsx(fd,{children:"Оформление результатов"}),r.jsx(hd,{children:"Оформляем официальные документы о поверке, включая протоколы измерений и сертификаты поверки."}),r.jsxs(pd,{children:[r.jsx(Nt,{children:"Протокол поверки"}),r.jsx(Nt,{children:"Сертификат поверки"}),r.jsx(Nt,{children:"Регистрация в реестре"})]})]})]})]}),r.jsxs(bp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(wp,{children:"Типы трансформаторов"}),r.jsxs(b5,{children:[r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:Da})}),r.jsx(sr,{children:"Трансформаторы тока"}),r.jsx(ar,{children:"Поверка трансформаторов тока различных типов и классов точности."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Проходные трансформаторы тока"}),r.jsx(J,{children:"Шинные трансформаторы тока"}),r.jsx(J,{children:"Опорные трансформаторы тока"}),r.jsx(J,{children:"Встроенные трансформаторы тока"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:P4})}),r.jsx(sr,{children:"Трансформаторы напряжения"}),r.jsx(ar,{children:"Поверка трансформаторов напряжения для систем измерения и защиты."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Однофазные трансформаторы напряжения"}),r.jsx(J,{children:"Трехфазные трансформаторы напряжения"}),r.jsx(J,{children:"Каскадные трансформаторы напряжения"}),r.jsx(J,{children:"Емкостные трансформаторы напряжения"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:T0})}),r.jsx(sr,{children:"Промышленные трансформаторы"}),r.jsx(ar,{children:"Поверка специализированных трансформаторов для промышленных объектов."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Высоковольтные трансформаторы"}),r.jsx(J,{children:"Трансформаторы для АСКУЭ"}),r.jsx(J,{children:"Специализированные трансформаторы"}),r.jsx(J,{children:"Трансформаторы для защиты"})]})]}),r.jsxs(ir,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(or,{children:r.jsx(x,{icon:HI})}),r.jsx(sr,{children:"Электронные трансформаторы"}),r.jsx(ar,{children:"Поверка современных электронных трансформаторов с цифровым выходом."}),r.jsxs(lr,{children:[r.jsx(J,{children:"Цифровые трансформаторы тока"}),r.jsx(J,{children:"Цифровые трансформаторы напряжения"}),r.jsx(J,{children:"Гибридные трансформаторы"}),r.jsx(J,{children:"Трансформаторы с цифровым интерфейсом"})]})]})]})]}),r.jsxs(mF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsxs(gF,{children:[r.jsx(x,{icon:hM}),"Технические характеристики"]}),r.jsxs(xF,{children:[r.jsxs(to,{children:[r.jsx(no,{children:"Классы точности ТТ"}),r.jsx(ro,{children:"0.1, 0.2, 0.2S, 0.5, 0.5S, 1.0, 3.0, 5.0, 10.0"})]}),r.jsxs(to,{children:[r.jsx(no,{children:"Классы точности ТН"}),r.jsx(ro,{children:"0.1, 0.2, 0.5, 1.0, 3.0, 6.0"})]}),r.jsxs(to,{children:[r.jsx(no,{children:"Номинальные токи ТТ"}),r.jsx(ro,{children:"От 5А до 5000А (первичные), 1А, 5А (вторичные)"})]}),r.jsxs(to,{children:[r.jsx(no,{children:"Номинальные напряжения ТН"}),r.jsx(ro,{children:"От 0.38кВ до 35кВ (первичные), 100В, 110В (вторичные)"})]}),r.jsxs(to,{children:[r.jsx(no,{children:"Частотный диапазон"}),r.jsx(ro,{children:"50 Гц ± 2 Гц, 60 Гц ± 2 Гц"})]}),r.jsxs(to,{children:[r.jsx(no,{children:"Температурный диапазон"}),r.jsx(ro,{children:"От -40°C до +70°C (рабочий), от -60°C до +85°C (транспортировка)"})]})]})]}),r.jsxs(JO,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1},children:[r.jsx(eF,{children:"Преимущества нашей лаборатории"}),r.jsx(tF,{children:"Наша аккредитованная лаборатория оснащена современным оборудованием и укомплектована квалифицированными специалистами."}),r.jsxs(nF,{children:[r.jsx(eo,{children:"Аккредитация в области поверки трансформаторов"}),r.jsx(eo,{children:"Современное поверочное оборудование"}),r.jsx(eo,{children:"Опытные специалисты-метрологи"}),r.jsx(eo,{children:"Сертифицированные методики поверки"}),r.jsx(eo,{children:"Гарантия качества и сроков выполнения"}),r.jsx(eo,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(aF,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[r.jsx(lF,{children:r.jsx(x,{icon:Xn})}),r.jsxs(cF,{children:[r.jsx(dF,{children:"Важная информация"}),r.jsx(uF,{children:"Согласно требованиям ПУЭ и ГОСТ, трансформаторы тока и напряжения, используемые в системах учета электроэнергии, подлежат обязательной поверке. Межповерочный интервал составляет от 4 до 16 лет в зависимости от типа и класса точности трансформатора. Рекомендуем своевременно проводить поверку для обеспечения точности измерений и соответствия требованиям энергоснабжающих организаций."})]})]}),r.jsxs(fF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsxs(hF,{children:[r.jsx(x,{icon:pe}),"Необходимые документы"]}),r.jsxs(pF,{children:[r.jsxs(md,{children:[r.jsxs(gd,{children:[r.jsx(xd,{children:r.jsx(x,{icon:pe})}),r.jsx(yd,{children:"Паспорт трансформатора"})]}),r.jsxs(vd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(md,{children:[r.jsxs(gd,{children:[r.jsx(xd,{children:r.jsx(x,{icon:pe})}),r.jsx(yd,{children:"Сертификат поверки (если есть)"})]}),r.jsxs(vd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(md,{children:[r.jsxs(gd,{children:[r.jsx(xd,{children:r.jsx(x,{icon:pe})}),r.jsx(yd,{children:"Техническое задание"})]}),r.jsxs(vd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(md,{children:[r.jsxs(gd,{children:[r.jsx(xd,{children:r.jsx(x,{icon:pe})}),r.jsx(yd,{children:"Протокол поверки"})]}),r.jsxs(vd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]})]})]}),r.jsxs(rF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.6},children:[r.jsx(iF,{children:"Готовы заказать поверку трансформаторов?"}),r.jsx(oF,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты помогут подобрать оптимальное решение для ваших задач."}),r.jsxs(sF,{children:[r.jsxs(w5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(w5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(x,{icon:We}),"Отправить заявку"]})]})]})]})}const vF=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,bF=l(k.div)`
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
`,wF=l(k.h1)`
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
`,jF=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,jp=l(k.section)`
  margin-bottom: 5rem;
`,kp=l.h2`
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
`,kF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,bd=l(k.div)`
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
`,wd=l.div`
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
`,jd=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,kd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Cd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Qe=l.li`
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
`,Sd=l(k.div)`
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
`,zd=l.div`
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
`,Pd=l.div`
  flex: 1;
`,Td=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,Ed=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Ld=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ot=l.li`
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
`,CF=l(k.div)`
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
`,SF=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,zF=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,PF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,io=l.li`
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
`,TF=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,EF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,LF=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,IF=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,j5=l(k.button)`
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
`,MF=l(k.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,AF=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,$F=l.div`
  flex: 1;
`,RF=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,DF=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,NF=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,OF=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,FF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Id=l.li`
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
`,Md=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ad=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,$d=l.span`
  color: #333333;
  font-weight: 500;
`,Rd=l(k.button)`
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
`,VF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Dd=l(k.div)`
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
`,Nd=l.div`
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
`,Od=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Fd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Vd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ke=l.li`
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
`;function _F(){j.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(vF,{children:[r.jsxs(bF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(wF,{children:"Монтаж оборудования"}),r.jsx(jF,{children:"Профессиональный монтаж электрооборудования любой сложности. Опытные специалисты, качественные материалы, гарантия на все виды работ."})]}),r.jsxs(jp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(kp,{children:"Наши услуги по монтажу"}),r.jsxs(kF,{children:[r.jsxs(bd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(wd,{children:r.jsx(x,{icon:Da})}),r.jsx(jd,{children:"Монтаж электросчетчиков"}),r.jsx(kd,{children:"Установка и подключение электросчетчиков различных типов в соответствии с требованиями ПУЭ и техническими условиями."}),r.jsxs(Cd,{children:[r.jsx(Qe,{children:"Однофазные и трехфазные счетчики"}),r.jsx(Qe,{children:"Многотарифные счетчики"}),r.jsx(Qe,{children:"Счетчики с дистанционным считыванием"}),r.jsx(Qe,{children:"Подключение к АСКУЭ"})]})]}),r.jsxs(bd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(wd,{children:r.jsx(x,{icon:sw})}),r.jsx(jd,{children:"Монтаж трансформаторов"}),r.jsx(kd,{children:"Установка и подключение трансформаторов тока и напряжения для систем учета и защиты электрических сетей."}),r.jsxs(Cd,{children:[r.jsx(Qe,{children:"Трансформаторы тока (ТТ)"}),r.jsx(Qe,{children:"Трансформаторы напряжения (ТН)"}),r.jsx(Qe,{children:"Высоковольтные трансформаторы"}),r.jsx(Qe,{children:"Проверка и настройка"})]})]}),r.jsxs(bd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(wd,{children:r.jsx(x,{icon:rw})}),r.jsx(jd,{children:"Монтаж АСКУЭ"}),r.jsx(kd,{children:"Комплексная установка автоматизированных систем коммерческого учета электроэнергии с передачей данных."}),r.jsxs(Cd,{children:[r.jsx(Qe,{children:"Устройства сбора и передачи данных"}),r.jsx(Qe,{children:"Модемы и каналы связи"}),r.jsx(Qe,{children:"Программное обеспечение"}),r.jsx(Qe,{children:"Настройка и тестирование"})]})]}),r.jsxs(bd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(wd,{children:r.jsx(x,{icon:St})}),r.jsx(jd,{children:"Монтаж систем защиты"}),r.jsx(kd,{children:"Установка и настройка устройств защиты и автоматики для электрических сетей и оборудования."}),r.jsxs(Cd,{children:[r.jsx(Qe,{children:"Реле защиты и автоматики"}),r.jsx(Qe,{children:"Автоматические выключатели"}),r.jsx(Qe,{children:"Устройства плавного пуска"}),r.jsx(Qe,{children:"Системы мониторинга"})]})]})]})]}),r.jsxs(jp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(kp,{children:"Объекты монтажа"}),r.jsxs(VF,{children:[r.jsxs(Dd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Nd,{children:r.jsx(x,{icon:P0})}),r.jsx(Od,{children:"Жилые объекты"}),r.jsx(Fd,{children:"Монтаж электрооборудования в частных домах, квартирах и коттеджах."}),r.jsxs(Vd,{children:[r.jsx(Ke,{children:"Установка электросчетчиков"}),r.jsx(Ke,{children:"Монтаж щитов учета"}),r.jsx(Ke,{children:"Подключение бытовой техники"}),r.jsx(Ke,{children:"Электромонтажные работы"})]})]}),r.jsxs(Dd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Nd,{children:r.jsx(x,{icon:wn})}),r.jsx(Od,{children:"Коммерческие объекты"}),r.jsx(Fd,{children:"Монтаж оборудования в офисах, торговых центрах и коммерческих зданиях."}),r.jsxs(Vd,{children:[r.jsx(Ke,{children:"Системы учета электроэнергии"}),r.jsx(Ke,{children:"Монтаж АСКУЭ"}),r.jsx(Ke,{children:"Установка трансформаторов"}),r.jsx(Ke,{children:"Системы автоматизации"})]})]}),r.jsxs(Dd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Nd,{children:r.jsx(x,{icon:T0})}),r.jsx(Od,{children:"Промышленные объекты"}),r.jsx(Fd,{children:"Комплексный монтаж электрооборудования на промышленных предприятиях."}),r.jsxs(Vd,{children:[r.jsx(Ke,{children:"Высоковольтное оборудование"}),r.jsx(Ke,{children:"Системы защиты и автоматики"}),r.jsx(Ke,{children:"Промышленные счетчики"}),r.jsx(Ke,{children:"Системы мониторинга"})]})]}),r.jsxs(Dd,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Nd,{children:r.jsx(x,{icon:pM})}),r.jsx(Od,{children:"Социальные объекты"}),r.jsx(Fd,{children:"Монтаж оборудования в больницах, школах, детских садах и других учреждениях."}),r.jsxs(Vd,{children:[r.jsx(Ke,{children:"Системы резервного питания"}),r.jsx(Ke,{children:"Монтаж счетчиков учета"}),r.jsx(Ke,{children:"Системы безопасности"}),r.jsx(Ke,{children:"Автоматизация процессов"})]})]})]})]}),r.jsxs(jp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(kp,{children:"Процесс монтажа"}),r.jsxs(Sd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(zd,{children:"1"}),r.jsxs(Pd,{children:[r.jsx(Td,{children:"Обследование объекта"}),r.jsx(Ed,{children:"Выезд специалиста на объект для изучения технических условий, анализа существующей электросети и составления плана работ."}),r.jsxs(Ld,{children:[r.jsx(Ot,{children:"Изучение технических условий"}),r.jsx(Ot,{children:"Анализ существующей сети"}),r.jsx(Ot,{children:"Составление сметы"})]})]})]}),r.jsxs(Sd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(zd,{children:"2"}),r.jsxs(Pd,{children:[r.jsx(Td,{children:"Подготовка и согласование"}),r.jsx(Ed,{children:"Разработка технического решения, согласование с заказчиком и получение необходимых разрешений на проведение работ."}),r.jsxs(Ld,{children:[r.jsx(Ot,{children:"Разработка технического решения"}),r.jsx(Ot,{children:"Согласование с заказчиком"}),r.jsx(Ot,{children:"Получение разрешений"})]})]})]}),r.jsxs(Sd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(zd,{children:"3"}),r.jsxs(Pd,{children:[r.jsx(Td,{children:"Выполнение монтажных работ"}),r.jsx(Ed,{children:"Профессиональное выполнение всех монтажных работ в соответствии с техническими требованиями и нормами безопасности."}),r.jsxs(Ld,{children:[r.jsx(Ot,{children:"Монтаж оборудования"}),r.jsx(Ot,{children:"Подключение и настройка"}),r.jsx(Ot,{children:"Проверка работоспособности"})]})]})]}),r.jsxs(Sd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(zd,{children:"4"}),r.jsxs(Pd,{children:[r.jsx(Td,{children:"Сдача-приемка работ"}),r.jsx(Ed,{children:"Тестирование системы, оформление документации и передача объекта заказчику с гарантийными обязательствами."}),r.jsxs(Ld,{children:[r.jsx(Ot,{children:"Комплексное тестирование"}),r.jsx(Ot,{children:"Оформление документации"}),r.jsx(Ot,{children:"Гарантийные обязательства"})]})]})]})]}),r.jsxs(CF,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:[r.jsx(SF,{children:"Почему выбирают нас?"}),r.jsx(zF,{children:"Более 10 лет опыта в области монтажа электрооборудования. Наша команда состоит из квалифицированных специалистов с профильным образованием."}),r.jsxs(PF,{children:[r.jsx(io,{children:"Опытные монтажники с профильным образованием"}),r.jsx(io,{children:"Сертифицированное оборудование и инструменты"}),r.jsx(io,{children:"Соблюдение всех норм и требований безопасности"}),r.jsx(io,{children:"Гарантия качества на все виды работ"}),r.jsx(io,{children:"Конкурентные цены и гибкие условия"}),r.jsx(io,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(MF,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(AF,{children:r.jsx(x,{icon:Xn})}),r.jsxs($F,{children:[r.jsx(RF,{children:"Важная информация"}),r.jsx(DF,{children:"Все монтажные работы выполняются в строгом соответствии с требованиями ПУЭ, ПТЭЭП и других нормативных документов. Наши специалисты имеют необходимые допуски и сертификаты для работы с электрооборудованием. Монтаж выполняется только при наличии технических условий и разрешений от энергоснабжающей организации."})]})]}),r.jsxs(NF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[r.jsxs(OF,{children:[r.jsx(x,{icon:pe}),"Необходимые документы"]}),r.jsxs(FF,{children:[r.jsxs(Id,{children:[r.jsxs(Md,{children:[r.jsx(Ad,{children:r.jsx(x,{icon:pe})}),r.jsx($d,{children:"Технические условия"})]}),r.jsxs(Rd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Id,{children:[r.jsxs(Md,{children:[r.jsx(Ad,{children:r.jsx(x,{icon:pe})}),r.jsx($d,{children:"Договор на монтаж"})]}),r.jsxs(Rd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Id,{children:[r.jsxs(Md,{children:[r.jsx(Ad,{children:r.jsx(x,{icon:pe})}),r.jsx($d,{children:"Акт выполненных работ"})]}),r.jsxs(Rd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Id,{children:[r.jsxs(Md,{children:[r.jsx(Ad,{children:r.jsx(x,{icon:pe})}),r.jsx($d,{children:"Гарантийные обязательства"})]}),r.jsxs(Rd,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]})]})]}),r.jsxs(TF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(EF,{children:"Готовы заказать монтаж оборудования?"}),r.jsx(LF,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты помогут подобрать оптимальное решение для вашего объекта."}),r.jsxs(IF,{children:[r.jsxs(j5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(j5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(x,{icon:We}),"Отправить заявку"]})]})]})]})}const BF=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,HF=l(k.div)`
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
`,UF=l(k.h1)`
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
`,WF=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Cp=l(k.section)`
  margin-bottom: 5rem;
`,Sp=l.h2`
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
`,YF=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,_d=l(k.div)`
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
`,Bd=l.div`
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
`,Hd=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,Ud=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Wd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,qe=l.li`
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
`,Yd=l(k.div)`
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
`,Gd=l.div`
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
`,Xd=l.div`
  flex: 1;
`,Qd=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`,Kd=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,qd=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ft=l.li`
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
`,GF=l(k.div)`
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
`,XF=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,QF=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,KF=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,oo=l.li`
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
`,qF=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,ZF=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,JF=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,eV=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,k5=l(k.button)`
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
`,tV=l(k.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,nV=l.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`,rV=l.div`
  flex: 1;
`,iV=l.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,oV=l.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`,sV=l.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`,aV=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,lV=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Zd=l.li`
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
`,Jd=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,eu=l.div`
  color: #2f5483;
  font-size: 1.2rem;
`,tu=l.span`
  color: #333333;
  font-weight: 500;
`,nu=l(k.button)`
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
`,cV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,ru=l(k.div)`
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
`,iu=l.div`
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
`,ou=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`,su=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,au=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ze=l.li`
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
`;function dV(){j.useState("services");const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")};return r.jsxs(BF,{children:[r.jsxs(HF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(UF,{children:"Наладка оборудования"}),r.jsx(WF,{children:"Профессиональная наладка и настройка электрооборудования любой сложности. Опытные инженеры, современное оборудование, гарантия качества работ."})]}),r.jsxs(Cp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(Sp,{children:"Наши услуги по наладке"}),r.jsxs(YF,{children:[r.jsxs(_d,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Bd,{children:r.jsx(x,{icon:Da})}),r.jsx(Hd,{children:"Наладка электросчетчиков"}),r.jsx(Ud,{children:"Настройка и калибровка электросчетчиков для обеспечения точности измерений и соответствия требованиям."}),r.jsxs(Wd,{children:[r.jsx(qe,{children:"Калибровка измерительных цепей"}),r.jsx(qe,{children:"Настройка тарифных зон"}),r.jsx(qe,{children:"Проверка точности измерений"}),r.jsx(qe,{children:"Настройка интерфейсов связи"})]})]}),r.jsxs(_d,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Bd,{children:r.jsx(x,{icon:sw})}),r.jsx(Hd,{children:"Наладка трансформаторов"}),r.jsx(Ud,{children:"Настройка и проверка трансформаторов тока и напряжения для обеспечения точности измерений и защиты."}),r.jsxs(Wd,{children:[r.jsx(qe,{children:"Проверка коэффициентов трансформации"}),r.jsx(qe,{children:"Настройка угловых погрешностей"}),r.jsx(qe,{children:"Калибровка измерительных цепей"}),r.jsx(qe,{children:"Проверка изоляции"})]})]}),r.jsxs(_d,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Bd,{children:r.jsx(x,{icon:rw})}),r.jsx(Hd,{children:"Наладка АСКУЭ"}),r.jsx(Ud,{children:"Настройка и оптимизация автоматизированных систем коммерческого учета электроэнергии."}),r.jsxs(Wd,{children:[r.jsx(qe,{children:"Настройка устройств сбора данных"}),r.jsx(qe,{children:"Конфигурация каналов связи"}),r.jsx(qe,{children:"Настройка программного обеспечения"}),r.jsx(qe,{children:"Тестирование системы"})]})]}),r.jsxs(_d,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(Bd,{children:r.jsx(x,{icon:St})}),r.jsx(Hd,{children:"Наладка систем защиты"}),r.jsx(Ud,{children:"Настройка и проверка устройств защиты и автоматики для электрических сетей и оборудования."}),r.jsxs(Wd,{children:[r.jsx(qe,{children:"Настройка реле защиты"}),r.jsx(qe,{children:"Проверка уставок срабатывания"}),r.jsx(qe,{children:"Тестирование автоматики"}),r.jsx(qe,{children:"Настройка логики защиты"})]})]})]})]}),r.jsxs(Cp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(Sp,{children:"Типы оборудования"}),r.jsxs(cV,{children:[r.jsxs(ru,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(iu,{children:r.jsx(x,{icon:CM})}),r.jsx(ou,{children:"Компьютерное оборудование"}),r.jsx(su,{children:"Наладка серверов, рабочих станций и сетевого оборудования."}),r.jsxs(au,{children:[r.jsx(Ze,{children:"Настройка серверов"}),r.jsx(Ze,{children:"Конфигурация сетевого оборудования"}),r.jsx(Ze,{children:"Настройка рабочих станций"}),r.jsx(Ze,{children:"Оптимизация производительности"})]})]}),r.jsxs(ru,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(iu,{children:r.jsx(x,{icon:UI})}),r.jsx(ou,{children:"Сетевое оборудование"}),r.jsx(su,{children:"Наладка и настройка сетевого оборудования и систем связи."}),r.jsxs(au,{children:[r.jsx(Ze,{children:"Настройка маршрутизаторов"}),r.jsx(Ze,{children:"Конфигурация коммутаторов"}),r.jsx(Ze,{children:"Настройка точек доступа"}),r.jsx(Ze,{children:"Оптимизация сети"})]})]}),r.jsxs(ru,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(iu,{children:r.jsx(x,{icon:T0})}),r.jsx(ou,{children:"Промышленное оборудование"}),r.jsx(su,{children:"Наладка промышленных систем автоматизации и контроля."}),r.jsxs(au,{children:[r.jsx(Ze,{children:"Настройка ПЛК"}),r.jsx(Ze,{children:"Конфигурация SCADA систем"}),r.jsx(Ze,{children:"Наладка датчиков и исполнительных механизмов"}),r.jsx(Ze,{children:"Оптимизация технологических процессов"})]})]}),r.jsxs(ru,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(iu,{children:r.jsx(x,{icon:P0})}),r.jsx(ou,{children:"Системы автоматизации"}),r.jsx(su,{children:"Наладка систем умного дома и автоматизации зданий."}),r.jsxs(au,{children:[r.jsx(Ze,{children:"Настройка систем освещения"}),r.jsx(Ze,{children:"Конфигурация климат-контроля"}),r.jsx(Ze,{children:"Наладка систем безопасности"}),r.jsx(Ze,{children:"Интеграция различных систем"})]})]})]})]}),r.jsxs(Cp,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(Sp,{children:"Процесс наладки"}),r.jsxs(Yd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[r.jsx(Gd,{children:"1"}),r.jsxs(Xd,{children:[r.jsx(Qd,{children:"Диагностика и анализ"}),r.jsx(Kd,{children:"Комплексная диагностика оборудования, анализ технических характеристик и выявление проблемных зон."}),r.jsxs(qd,{children:[r.jsx(Ft,{children:"Анализ технической документации"}),r.jsx(Ft,{children:"Диагностика оборудования"}),r.jsx(Ft,{children:"Выявление проблем"})]})]})]}),r.jsxs(Yd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[r.jsx(Gd,{children:"2"}),r.jsxs(Xd,{children:[r.jsx(Qd,{children:"Разработка плана наладки"}),r.jsx(Kd,{children:"Составление детального плана наладки с учетом специфики оборудования и требований заказчика."}),r.jsxs(qd,{children:[r.jsx(Ft,{children:"Определение этапов наладки"}),r.jsx(Ft,{children:"Подбор инструментов и оборудования"}),r.jsx(Ft,{children:"Согласование с заказчиком"})]})]})]}),r.jsxs(Yd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[r.jsx(Gd,{children:"3"}),r.jsxs(Xd,{children:[r.jsx(Qd,{children:"Выполнение наладки"}),r.jsx(Kd,{children:"Профессиональное выполнение всех наладочных работ с использованием современного оборудования и методик."}),r.jsxs(qd,{children:[r.jsx(Ft,{children:"Настройка параметров"}),r.jsx(Ft,{children:"Калибровка и проверка"}),r.jsx(Ft,{children:"Тестирование функциональности"})]})]})]}),r.jsxs(Yd,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[r.jsx(Gd,{children:"4"}),r.jsxs(Xd,{children:[r.jsx(Qd,{children:"Тестирование и сдача"}),r.jsx(Kd,{children:"Комплексное тестирование налаженного оборудования, оформление документации и передача заказчику."}),r.jsxs(qd,{children:[r.jsx(Ft,{children:"Комплексное тестирование"}),r.jsx(Ft,{children:"Оформление актов наладки"}),r.jsx(Ft,{children:"Обучение персонала"})]})]})]})]}),r.jsxs(GF,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:[r.jsx(XF,{children:"Преимущества нашей наладки"}),r.jsx(QF,{children:"Наша команда инженеров имеет многолетний опыт в наладке различного электрооборудования и использует современные методики."}),r.jsxs(KF,{children:[r.jsx(oo,{children:"Опытные инженеры-наладчики с профильным образованием"}),r.jsx(oo,{children:"Современное диагностическое оборудование"}),r.jsx(oo,{children:"Сертифицированные методики наладки"}),r.jsx(oo,{children:"Гарантия качества на все виды работ"}),r.jsx(oo,{children:"Конкурентные цены и гибкие условия"}),r.jsx(oo,{children:"Полное документальное сопровождение"})]})]}),r.jsxs(tV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(nV,{children:r.jsx(x,{icon:Xn})}),r.jsxs(rV,{children:[r.jsx(iV,{children:"Важная информация"}),r.jsx(oV,{children:"Наладка электрооборудования должна выполняться только квалифицированными специалистами с соответствующими допусками. Все работы проводятся в строгом соответствии с техническими требованиями и нормами безопасности. Рекомендуем обращаться к профессионалам для обеспечения надежности и безопасности работы оборудования."})]})]}),r.jsxs(sV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[r.jsxs(aV,{children:[r.jsx(x,{icon:pe}),"Необходимые документы"]}),r.jsxs(lV,{children:[r.jsxs(Zd,{children:[r.jsxs(Jd,{children:[r.jsx(eu,{children:r.jsx(x,{icon:pe})}),r.jsx(tu,{children:"Техническое задание"})]}),r.jsxs(nu,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Zd,{children:[r.jsxs(Jd,{children:[r.jsx(eu,{children:r.jsx(x,{icon:pe})}),r.jsx(tu,{children:"Договор на наладку"})]}),r.jsxs(nu,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Zd,{children:[r.jsxs(Jd,{children:[r.jsx(eu,{children:r.jsx(x,{icon:pe})}),r.jsx(tu,{children:"Акт выполненных работ"})]}),r.jsxs(nu,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]}),r.jsxs(Zd,{children:[r.jsxs(Jd,{children:[r.jsx(eu,{children:r.jsx(x,{icon:pe})}),r.jsx(tu,{children:"Гарантийные обязательства"})]}),r.jsxs(nu,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать образец"]})]})]})]}),r.jsxs(qF,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(ZF,{children:"Готовы заказать наладку оборудования?"}),r.jsx(JF,{children:"Свяжитесь с нами для получения подробной консультации и расчета стоимости. Наши специалисты помогут подобрать оптимальное решение для вашего оборудования."}),r.jsxs(eV,{children:[r.jsxs(k5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(k5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(x,{icon:We}),"Отправить заявку"]})]})]})]})}const uV=l.div`
  padding: 2rem;
  text-align: center;
`,fV=l.h1`
  color: #2f5483;
  font-size: 2rem;
  margin-bottom: 1rem;
`,hV=l.p`
  color: #666666;
  font-size: 1.1rem;
`;function pV(){return r.jsxs(uV,{children:[r.jsx(fV,{children:"Тестовая страница"}),r.jsx(hV,{children:"Если вы видите эту страницу, значит сайт работает корректно!"})]})}const mV=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,gV=l(k.div)`
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
`,xV=l(k.h1)`
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
`,yV=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,vV=l(k.div)`
  margin-bottom: 3rem;
`,bV=l.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`,wV=l.input`
  width: 100%;
  padding: 1.2rem 1rem 1.2rem 3rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1.1rem;
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
`,jV=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 1.1rem;
`,kV=l(k.div)`
  margin-bottom: 3rem;
`,CV=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,C5=l(k.button)`
  padding: 0.8rem 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #ffffff;
  color: #666666;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #2f5483;
    color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }

  &.active {
    background: #2f5483;
    color: white;
    border-color: #2f5483;
  }
`,SV=l(k.section)`
  margin-bottom: 5rem;
`,zV=l.h2`
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
`,PV=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,TV=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84,131, 0.05);
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
`,EV=l.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,LV=l.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`,IV=l.div`
  flex: 1;
`,MV=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,AV=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`,$V=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,S5=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #999999;
  font-size: 0.85rem;
`,RV=l.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`,DV=l.span`
  padding: 0.3rem 0.8rem;
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,NV=l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,z5=l(k.button)`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background: #2f5483;
    color: white;

    &:hover {
      background: #1a2f4b;
      transform: translateY(-1px);
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
`,OV=l(k.div)`
  margin-bottom: 4rem;
`,FV=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,VV=l.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`,_V=l(k.div)`
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
`,BV=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,HV=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,UV=l.ul`
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
`,WV=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,YV=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,GV=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,XV=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,P5=l(k.button)`
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
`;function QV(){const[e,t]=j.useState(""),[n,i]=j.useState("all"),[o,s]=j.useState({technical:!0,legal:!0,commercial:!0,safety:!0}),a=()=>{console.log("Контактная информация")},c=()=>{console.log("Отправить заявку")},d=b=>{s(w=>({...w,[b]:!w[b]}))},u=b=>{switch(b){case"pdf":return nw;case"doc":case"docx":return YI;case"xls":case"xlsx":return qI;case"jpg":case"png":case"gif":return iM;case"zip":case"rar":return QI;default:return pe}},f=[{id:1,title:"Технические условия на электроснабжение",description:"Подробные технические условия для подключения электрооборудования к сети",category:"technical",fileType:"pdf",fileSize:"2.3 MB",date:"2024-01-15",author:"Технический отдел",tags:["электроснабжение","технические условия","подключение"],downloads:156},{id:2,title:"Инструкция по монтажу электросчетчиков",description:"Пошаговая инструкция по установке и подключению электросчетчиков",category:"technical",fileType:"pdf",fileSize:"1.8 MB",date:"2024-01-10",author:"Инженерная служба",tags:["монтаж","счетчики","инструкция"],downloads:234},{id:3,title:"Договор на поставку оборудования",description:"Типовой договор для закупки электрооборудования",category:"commercial",fileType:"docx",fileSize:"0.9 MB",date:"2024-01-08",author:"Юридический отдел",tags:["договор","поставка","коммерция"],downloads:89},{id:4,title:"Сертификаты соответствия продукции",description:"Сертификаты качества и соответствия на все виды оборудования",category:"legal",fileType:"pdf",fileSize:"4.1 MB",date:"2024-01-05",author:"Отдел сертификации",tags:["сертификаты","качество","соответствие"],downloads:312},{id:5,title:"Правила техники безопасности",description:"Основные правила безопасности при работе с электрооборудованием",category:"safety",fileType:"pdf",fileSize:"1.5 MB",date:"2024-01-12",author:"Отдел охраны труда",tags:["безопасность","техника безопасности","охрана труда"],downloads:178},{id:6,title:"Каталог продукции 2024",description:"Полный каталог электрооборудования с техническими характеристиками",category:"commercial",fileType:"pdf",fileSize:"8.7 MB",date:"2024-01-20",author:"Маркетинговый отдел",tags:["каталог","продукция","характеристики"],downloads:445},{id:7,title:"Нормативные документы ПУЭ",description:"Правила устройства электроустановок - актуальная версия",category:"legal",fileType:"pdf",fileSize:"3.2 MB",date:"2024-01-18",author:"Технический отдел",tags:["ПУЭ","нормативы","электроустановки"],downloads:267},{id:8,title:"Инструкция по наладке АСКУЭ",description:"Методические указания по настройке автоматизированных систем учета",category:"technical",fileType:"pdf",fileSize:"2.1 MB",date:"2024-01-14",author:"Инженерная служба",tags:["АСКУЭ","наладка","системы учета"],downloads:134}],h={technical:{name:"Техническая документация",icon:z0},legal:{name:"Нормативные документы",icon:St},commercial:{name:"Коммерческие документы",icon:wn},safety:{name:"Безопасность",icon:Xn}},p=f.filter(b=>{const w=b.title.toLowerCase().includes(e.toLowerCase())||b.description.toLowerCase().includes(e.toLowerCase())||b.tags.some(v=>v.toLowerCase().includes(e.toLowerCase())),z=n==="all"||b.category===n;return w&&z}).reduce((b,w)=>(b[w.category]||(b[w.category]=[]),b[w.category].push(w),b),{});return r.jsxs(mV,{children:[r.jsxs(gV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(xV,{children:"Документация"}),r.jsx(yV,{children:"Полная база технической, нормативной и коммерческой документации. Все документы регулярно обновляются и соответствуют актуальным требованиям."})]}),r.jsx(vV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:r.jsxs(bV,{children:[r.jsx(jV,{children:r.jsx(x,{icon:Br})}),r.jsx(wV,{type:"text",placeholder:"Поиск по документам...",value:e,onChange:b=>t(b.target.value)})]})}),r.jsx(kV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:r.jsxs(CV,{children:[r.jsxs(C5,{className:n==="all"?"active":"",onClick:()=>i("all"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:SM}),"Все документы"]}),Object.entries(h).map(([b,w])=>r.jsxs(C5,{className:n===b?"active":"",onClick:()=>i(b),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:w.icon}),w.name]},b))]})}),r.jsxs(SV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[r.jsx(zV,{children:"Документы по категориям"}),Object.entries(p).map(([b,w])=>r.jsxs(OV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(FV,{onClick:()=>d(b),style:{cursor:"pointer"},children:[r.jsx(VV,{children:r.jsx(x,{icon:h[b].icon})}),h[b].name,r.jsx(x,{icon:o[b]?No:ix,style:{marginLeft:"auto",fontSize:"0.9rem"}})]}),o[b]&&r.jsx(PV,{children:w.map(z=>r.jsxs(TV,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsxs(EV,{children:[r.jsx(LV,{children:r.jsx(x,{icon:u(z.fileType)})}),r.jsxs(IV,{children:[r.jsx(MV,{children:z.title}),r.jsx(AV,{children:z.description})]})]}),r.jsxs($V,{children:[r.jsxs(S5,{children:[r.jsx(x,{icon:hi}),z.author]}),r.jsxs(S5,{children:[r.jsx(x,{icon:pe}),z.fileSize]})]}),r.jsx(RV,{children:z.tags.map((v,g)=>r.jsx(DV,{children:v},g))}),r.jsxs(NV,{children:[r.jsxs(z5,{className:"primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать"]}),r.jsxs(z5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:tw}),"Предварительный просмотр"]})]})]},z.id))})]},b))]}),r.jsxs(_V,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1},children:[r.jsx(BV,{children:"Важная информация о документации"}),r.jsx(HV,{children:"Все документы предоставляются в актуальных версиях и регулярно обновляются в соответствии с изменениями в нормативной базе и технических требованиях."}),r.jsxs(UV,{children:[r.jsx(so,{children:"Документы обновляются ежемесячно"}),r.jsx(so,{children:"Все файлы проверены на вирусы"}),r.jsx(so,{children:"Поддержка различных форматов (PDF, DOC, XLS)"}),r.jsx(so,{children:"Бесплатное скачивание для клиентов"}),r.jsx(so,{children:"Техническая поддержка по документации"}),r.jsx(so,{children:"Возможность заказа печатных версий"})]})]}),r.jsxs(WV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[r.jsx(YV,{children:"Нужна помощь с документацией?"}),r.jsx(GV,{children:"Наши специалисты помогут найти нужные документы и ответят на все вопросы по технической документации и нормативным требованиям."}),r.jsxs(XV,{children:[r.jsxs(P5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(P5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c,children:[r.jsx(x,{icon:pe}),"Заказать документы"]})]})]})]})}const KV=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,qV=l(k.div)`
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
`,ZV=l(k.h1)`
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
`,JV=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,e_=l(k.div)`
  margin-bottom: 3rem;
`,t_=l.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`,n_=l.input`
  width: 100%;
  padding: 1.2rem 1rem 1.2rem 3rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1.1rem;
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
`,r_=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 1.1rem;
`,i_=l(k.div)`
  margin-bottom: 3rem;
`,o_=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,T5=l(k.button)`
  padding: 0.8rem 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #ffffff;
  color: #666666;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #2f5483;
    color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }

  &.active {
    background: #2f5483;
    color: white;
    border-color: #2f5483;
  }
`,s_=l(k.section)`
  margin-bottom: 5rem;
`,E5=l.h2`
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
`,a_=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,l_=l(k.div)`
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
`,c_=l.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,d_=l.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`,u_=l.div`
  flex: 1;
`,f_=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,h_=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`,p_=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,L5=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #999999;
  font-size: 0.85rem;
`,m_=l.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`,g_=l.span`
  padding: 0.3rem 0.8rem;
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,x_=l.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,I5=l(k.button)`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background: #2f5483;
    color: white;

    &:hover {
      background: #1a2f4b;
      transform: translateY(-1px);
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
`,y_=l(k.div)`
  margin-bottom: 4rem;
`,v_=l.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,b_=l.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`,w_=l(k.div)`
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
`,j_=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,k_=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,C_=l.ul`
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
`,S_=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,z_=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,P_=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,T_=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,M5=l(k.button)`
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
`,E_=l(k.div)`
  margin-bottom: 4rem;
`,L_=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,lu=l(k.div)`
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
`,cu=l.div`
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
`,du=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,uu=l.div`
  color: #666666;
  font-size: 1rem;
  font-weight: 500;
`;function I_(){const[e,t]=j.useState(""),[n,i]=j.useState("all"),[o,s]=j.useState({quality:!0,safety:!0,compliance:!0,awards:!0}),a=()=>{console.log("Контактная информация")},c=()=>{console.log("Отправить заявку")},d=p=>{s(b=>({...b,[p]:!b[p]}))},u=[{id:1,title:"Сертификат соответствия ГОСТ Р",description:"Сертификат соответствия требованиям государственных стандартов Российской Федерации",category:"compliance",fileType:"pdf",fileSize:"1.2 MB",issuer:"Росстандарт",validUntil:"2025-12-31",tags:["ГОСТ","соответствие","стандарты"],status:"active"},{id:2,title:"Сертификат системы менеджмента качества ISO 9001",description:"Международный сертификат системы менеджмента качества",category:"quality",fileType:"pdf",fileSize:"2.1 MB",issuer:"TÜV SÜD",validUntil:"2026-06-15",tags:["ISO 9001","качество","менеджмент"],status:"active"},{id:3,title:"Сертификат экологического менеджмента ISO 14001",description:"Сертификат системы экологического менеджмента",category:"quality",fileType:"pdf",fileSize:"1.8 MB",issuer:"Bureau Veritas",validUntil:"2025-09-30",tags:["ISO 14001","экология","менеджмент"],status:"active"},{id:4,title:"Сертификат безопасности труда OHSAS 18001",description:"Сертификат системы управления охраной труда и промышленной безопасностью",category:"safety",fileType:"pdf",fileSize:"1.5 MB",issuer:"SGS",validUntil:"2025-03-20",tags:["OHSAS 18001","безопасность","охрана труда"],status:"active"},{id:5,title:"Сертификат пожарной безопасности",description:"Сертификат соответствия требованиям пожарной безопасности",category:"safety",fileType:"pdf",fileSize:"0.9 MB",issuer:"МЧС России",validUntil:"2024-12-31",tags:["пожарная безопасность","МЧС","соответствие"],status:"active"},{id:6,title:'Диплом "Лучший поставщик года"',description:"Награда за высокое качество продукции и надежность поставок",category:"awards",fileType:"pdf",fileSize:"0.7 MB",issuer:"Торгово-промышленная палата",validUntil:"2024-12-31",tags:["награда","поставщик","качество"],status:"active"},{id:7,title:"Сертификат энергетического менеджмента ISO 50001",description:"Сертификат системы энергетического менеджмента",category:"quality",fileType:"pdf",fileSize:"1.6 MB",issuer:"DNV GL",validUntil:"2026-01-15",tags:["ISO 50001","энергетика","менеджмент"],status:"active"},{id:8,title:"Сертификат информационной безопасности ISO 27001",description:"Сертификат системы управления информационной безопасностью",category:"compliance",fileType:"pdf",fileSize:"1.3 MB",issuer:"BSI Group",validUntil:"2025-08-10",tags:["ISO 27001","информационная безопасность"],status:"active"}],f={quality:{name:"Сертификаты качества",icon:gm},safety:{name:"Сертификаты безопасности",icon:St},compliance:{name:"Сертификаты соответствия",icon:F},awards:{name:"Награды и дипломы",icon:ow}},m=u.filter(p=>{const b=p.title.toLowerCase().includes(e.toLowerCase())||p.description.toLowerCase().includes(e.toLowerCase())||p.tags.some(z=>z.toLowerCase().includes(e.toLowerCase())),w=n==="all"||p.category===n;return b&&w}).reduce((p,b)=>(p[b.category]||(p[b.category]=[]),p[b.category].push(b),p),{});return r.jsxs(KV,{children:[r.jsxs(qV,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(ZV,{children:"Сертификаты"}),r.jsx(JV,{children:"Полная база сертификатов качества, безопасности и соответствия. Все сертификаты актуальны и подтверждают высокие стандарты нашей продукции."})]}),r.jsxs(E_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[r.jsx(E5,{children:"Наши достижения"}),r.jsxs(L_,{children:[r.jsxs(lu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(cu,{children:r.jsx(x,{icon:tn})}),r.jsx(du,{children:"25+"}),r.jsx(uu,{children:"Сертификатов качества"})]}),r.jsxs(lu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(cu,{children:r.jsx(x,{icon:gm})}),r.jsx(du,{children:"15+"}),r.jsx(uu,{children:"Международных наград"})]}),r.jsxs(lu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(cu,{children:r.jsx(x,{icon:St})}),r.jsx(du,{children:"100%"}),r.jsx(uu,{children:"Соответствие стандартам"})]}),r.jsxs(lu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(cu,{children:r.jsx(x,{icon:C0})}),r.jsx(du,{children:"10+"}),r.jsx(uu,{children:"Лет опыта"})]})]})]}),r.jsx(e_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:r.jsxs(t_,{children:[r.jsx(r_,{children:r.jsx(x,{icon:Br})}),r.jsx(n_,{type:"text",placeholder:"Поиск по сертификатам...",value:e,onChange:p=>t(p.target.value)})]})}),r.jsx(i_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:r.jsxs(o_,{children:[r.jsxs(T5,{className:n==="all"?"active":"",onClick:()=>i("all"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:tn}),"Все сертификаты"]}),Object.entries(f).map(([p,b])=>r.jsxs(T5,{className:n===p?"active":"",onClick:()=>i(p),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:b.icon}),b.name]},p))]})}),r.jsxs(s_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsx(E5,{children:"Сертификаты по категориям"}),Object.entries(m).map(([p,b])=>r.jsxs(y_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsxs(v_,{onClick:()=>d(p),style:{cursor:"pointer"},children:[r.jsx(b_,{children:r.jsx(x,{icon:f[p].icon})}),f[p].name,r.jsx(x,{icon:o[p]?No:ix,style:{marginLeft:"auto",fontSize:"0.9rem"}})]}),o[p]&&r.jsx(a_,{children:b.map(w=>r.jsxs(l_,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsxs(c_,{children:[r.jsx(d_,{children:r.jsx(x,{icon:tn})}),r.jsxs(u_,{children:[r.jsx(f_,{children:w.title}),r.jsx(h_,{children:w.description})]})]}),r.jsxs(p_,{children:[r.jsxs(L5,{children:[r.jsx(x,{icon:wn}),w.issuer]}),r.jsxs(L5,{children:[r.jsx(x,{icon:nw}),w.fileSize]})]}),r.jsx(m_,{children:w.tags.map((z,v)=>r.jsx(g_,{children:z},v))}),r.jsxs(x_,{children:[r.jsxs(I5,{className:"primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:De}),"Скачать"]}),r.jsxs(I5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(x,{icon:tw}),"Просмотр"]})]})]},w.id))})]},p))]}),r.jsxs(w_,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.2},children:[r.jsx(j_,{children:"Важная информация о сертификатах"}),r.jsx(k_,{children:"Все сертификаты регулярно обновляются и соответствуют актуальным требованиям международных и российских стандартов качества и безопасности."}),r.jsxs(C_,{children:[r.jsx(ao,{children:"Сертификаты обновляются в соответствии с новыми стандартами"}),r.jsx(ao,{children:"Все документы проверены и актуальны"}),r.jsx(ao,{children:"Поддержка международных и российских стандартов"}),r.jsx(ao,{children:"Бесплатное предоставление сертификатов клиентам"}),r.jsx(ao,{children:"Консультации по сертификации продукции"}),r.jsx(ao,{children:"Сопровождение процесса сертификации"})]})]}),r.jsxs(S_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},children:[r.jsx(z_,{children:"Нужна информация о сертификатах?"}),r.jsx(P_,{children:"Наши специалисты помогут подобрать нужные сертификаты и ответят на все вопросы по сертификации продукции и соответствию стандартам."}),r.jsxs(T_,{children:[r.jsxs(M5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a,children:[r.jsx(x,{icon:Oe}),"Получить консультацию"]}),r.jsxs(M5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c,children:[r.jsx(x,{icon:tn}),"Заказать сертификацию"]})]})]})]})}const M_=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,A_=l(k.div)`
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
`,$_=l(k.h1)`
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
`,R_=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,D_=l(k.section)`
  margin-bottom: 5rem;
`,A5=l.h2`
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
`,N_=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,O_=l(k.div)`
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
`,F_=l.div`
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
`,V_=l.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.4;
`,__=l.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,B_=l.div`
  color: #999999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,H_=l(k.div)`
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
`,U_=l.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,W_=l.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,Y_=l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`,lo=l.li`
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
`,G_=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,X_=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,Q_=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,K_=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,$5=l(k.button)`
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
`,q_=l(k.div)`
  margin-bottom: 4rem;
`,Z_=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,fu=l(k.div)`
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
`,hu=l.div`
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
`,pu=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;
`,mu=l.div`
  color: #666666;
  font-size: 1rem;
  font-weight: 500;
`;function J_(){const e=()=>{console.log("Контактная информация")},t=()=>{console.log("Отправить заявку")},n=[{id:1,name:"Энергомера",description:"Ведущий российский производитель электросчетчиков и систем учета электроэнергии",country:"Россия",website:"https://www.energomera.ru"},{id:2,name:"Меркурий",description:"Производитель высококачественных электросчетчиков и приборов учета",country:"Россия",website:"https://www.incotex.ru"},{id:3,name:"НЕВА",description:"Санкт-Петербургский завод по производству электросчетчиков",country:"Россия",website:"https://www.neva.ru"},{id:4,name:"АГАТ",description:"Производитель трансформаторов тока и напряжения",country:"Россия",website:"https://www.agat.ru"},{id:5,name:"Электротехническая компания",description:"Дистрибьютор электрооборудования и компонентов",country:"Россия",website:"https://www.electrotech.ru"},{id:6,name:"ТехСервис",description:"Сервисная компания по обслуживанию электрооборудования",country:"Россия",website:"https://www.techservice.ru"},{id:7,name:"SmartGrid Solutions",description:"Разработчик интеллектуальных систем управления энергосетями",country:"Германия",website:"https://www.smartgrid.de"},{id:8,name:"PowerTech Systems",description:"Производитель систем мониторинга и контроля энергопотребления",country:"США",website:"https://www.powertech.com"}];return r.jsxs(M_,{children:[r.jsxs(A_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx($_,{children:"Партнеры"}),r.jsx(R_,{children:"Наши надежные партнеры - ведущие производители и поставщики электрооборудования. Долгосрочное сотрудничество обеспечивает высокое качество продукции и сервиса."})]}),r.jsxs(q_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[r.jsx(A5,{children:"Наши партнерства"}),r.jsxs(Z_,{children:[r.jsxs(fu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(hu,{children:r.jsx(x,{icon:ji})}),r.jsx(pu,{children:"20+"}),r.jsx(mu,{children:"Партнеров"})]}),r.jsxs(fu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(hu,{children:r.jsx(x,{icon:fm})}),r.jsx(pu,{children:"5"}),r.jsx(mu,{children:"Стран"})]}),r.jsxs(fu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(hu,{children:r.jsx(x,{icon:C0})}),r.jsx(pu,{children:"10+"}),r.jsx(mu,{children:"Лет сотрудничества"})]}),r.jsxs(fu,{whileHover:{scale:1.05},transition:{duration:.3},children:[r.jsx(hu,{children:r.jsx(x,{icon:gm})}),r.jsx(pu,{children:"100%"}),r.jsx(mu,{children:"Надежность"})]})]})]}),r.jsxs(D_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[r.jsx(A5,{children:"Наши партнеры"}),r.jsx(N_,{children:n.map(i=>r.jsxs(O_,{whileHover:{scale:1.02},transition:{duration:.3},children:[r.jsx(F_,{children:i.name.split(" ").map(o=>o[0]).join("")}),r.jsx(V_,{children:i.name}),r.jsx(__,{children:i.description}),r.jsxs(B_,{children:[r.jsx(x,{icon:fm}),i.country]})]},i.id))})]}),r.jsxs(H_,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.6},children:[r.jsx(U_,{children:"Преимущества партнерства"}),r.jsx(W_,{children:"Долгосрочное сотрудничество с ведущими производителями обеспечивает высокое качество продукции и надежность поставок для наших клиентов."}),r.jsxs(Y_,{children:[r.jsx(lo,{children:"Прямые поставки от производителей"}),r.jsx(lo,{children:"Гарантированное качество продукции"}),r.jsx(lo,{children:"Конкурентные цены и условия"}),r.jsx(lo,{children:"Техническая поддержка от партнеров"}),r.jsx(lo,{children:"Сервисное обслуживание оборудования"}),r.jsx(lo,{children:"Инновационные решения и технологии"})]})]}),r.jsxs(G_,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[r.jsx(X_,{children:"Хотите стать нашим партнером?"}),r.jsx(Q_,{children:"Мы всегда открыты для новых партнерств с надежными производителями и поставщиками качественного электрооборудования."}),r.jsxs(K_,{children:[r.jsxs($5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Oe}),"Обсудить сотрудничество"]}),r.jsxs($5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t,children:[r.jsx(x,{icon:ji}),"Отправить заявку"]})]})]})]})}const eB=l.div`
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
`,tB=l(k.div)`
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
`,nB=l(k.h1)`
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
`,rB=l(k.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,iB=l(k.div)`
  margin-bottom: 4rem;
`,oB=l.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`,sB=l.input`
  width: 100%;
  padding: 1.2rem 1rem 1.2rem 3rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1.1rem;
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
`,aB=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 1.1rem;
`,lB=l(k.div)`
  margin-bottom: 4rem;
`,cB=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,dB=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }

  &.active {
    background: #2f5483;
    color: white;

    .category-icon {
      background: rgba(255, 255, 255, 0.2);
      color: white;
    }

    .category-title {
      color: white;
    }

    .category-count {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`,uB=l.div`
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
  transition: all 0.3s ease;
`,fB=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`,hB=l.div`
  color: #666666;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`,pB=l(k.div)`
  margin-bottom: 4rem;
`,mB=l(k.div)`
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`,gB=l.div`
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(47, 84, 131, 0.05);
  }
`,xB=l.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
  flex: 1;
  line-height: 1.4;
`,yB=l.div`
  color: #2f5483;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
`,vB=l(k.div)`
  padding: 0 2rem 1.5rem;
  color: #666666;
  line-height: 1.6;
  font-size: 1rem;
`,bB=l(k.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`,wB=l.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`,jB=l.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,kB=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,R5=l(k.button)`
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
`;function CB(){const[e,t]=j.useState(""),[n,i]=j.useState("all"),[o,s]=j.useState(new Set),a=()=>{console.log("Связаться с нами")},c=()=>{console.log("Написать на email")},d=m=>{const p=new Set(o);p.has(m)?p.delete(m):p.add(m),s(p)},u=[{id:"all",name:"Все вопросы",icon:Nf,count:25},{id:"products",name:"Продукция",icon:Nf,count:8},{id:"delivery",name:"Доставка",icon:Jo,count:6},{id:"payment",name:"Оплата",icon:Ci,count:5},{id:"service",name:"Сервис",icon:ki,count:4},{id:"warranty",name:"Гарантия",icon:tn,count:2}],h=[{id:1,category:"products",question:"Какие типы электросчетчиков вы предлагаете?",answer:"Мы предлагаем широкий ассортимент электросчетчиков: однофазные и трехфазные, индукционные и электронные, с различными классами точности. В нашем каталоге представлены счетчики для бытового и промышленного использования от ведущих производителей."},{id:2,category:"products",question:"Как выбрать подходящий электросчетчик?",answer:"При выборе электросчетчика необходимо учитывать: количество фаз (1 или 3), максимальную нагрузку, класс точности, тип подключения. Наши специалисты помогут подобрать оптимальный вариант для ваших потребностей."},{id:3,category:"delivery",question:"В какие регионы осуществляется доставка?",answer:"Мы осуществляем доставку по всей России. Сроки доставки зависят от региона: в пределах МКАД - 1-2 дня, по Московской области - 2-3 дня, в другие регионы - 3-7 дней. Доставка может осуществляться курьером или транспортной компанией."},{id:4,category:"delivery",question:"Сколько стоит доставка?",answer:"Стоимость доставки зависит от веса и габаритов товара, а также от региона доставки. При заказе от 50 000 рублей доставка по Москве бесплатная. Точную стоимость доставки вы можете уточнить у наших менеджеров."},{id:5,category:"payment",question:"Какие способы оплаты принимаются?",answer:"Мы принимаем оплату наличными при получении, банковскими картами (Visa, MasterCard, МИР), безналичным расчетом для юридических лиц, а также через электронные платежные системы. Возможна оплата в рассрочку."},{id:6,category:"payment",question:"Можно ли оплатить товар в рассрочку?",answer:"Да, мы предоставляем возможность покупки в рассрочку. Условия рассрочки зависят от суммы покупки и вашей кредитной истории. Подробную информацию можно получить у наших менеджеров."},{id:7,category:"service",question:"Предоставляете ли вы услуги монтажа?",answer:"Да, мы предоставляем полный спектр услуг по монтажу и подключению электросчетчиков. Наши специалисты имеют необходимые допуски и сертификаты. Стоимость монтажа рассчитывается индивидуально."},{id:8,category:"service",question:"Есть ли техническая поддержка?",answer:"Да, мы предоставляем техническую поддержку по всем нашим продуктам. Наши специалисты готовы ответить на ваши вопросы по телефону, email или через онлайн-чат на сайте."},{id:9,category:"warranty",question:"Какая гарантия на электросчетчики?",answer:"Гарантийный срок на электросчетчики составляет от 3 до 7 лет в зависимости от модели и производителя. В течение гарантийного периода мы обеспечиваем бесплатный ремонт или замену неисправного оборудования."},{id:10,category:"warranty",question:"Что делать при поломке счетчика?",answer:"При обнаружении неисправности электросчетчика необходимо немедленно прекратить его использование и обратиться к нам. В случае гарантийного случая мы обеспечим ремонт или замену. При отсутствии гарантии возможен платный ремонт."}].filter(m=>{const p=m.question.toLowerCase().includes(e.toLowerCase())||m.answer.toLowerCase().includes(e.toLowerCase()),b=n==="all"||m.category===n;return p&&b});return r.jsxs(eB,{children:[r.jsxs(tB,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(nB,{children:"Часто задаваемые вопросы"}),r.jsx(rB,{children:"Ответы на самые популярные вопросы о нашей продукции, услугах и сервисе. Не нашли ответ на свой вопрос? Свяжитесь с нами!"})]}),r.jsx(iB,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:r.jsxs(oB,{children:[r.jsx(aB,{children:r.jsx(x,{icon:Br})}),r.jsx(sB,{type:"text",placeholder:"Поиск по вопросам...",value:e,onChange:m=>t(m.target.value)})]})}),r.jsx(lB,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:r.jsx(cB,{children:u.map(m=>r.jsxs(dB,{className:n===m.id?"active":"",onClick:()=>i(m.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r.jsx(uB,{className:"category-icon",children:r.jsx(x,{icon:m.icon})}),r.jsx(fB,{className:"category-title",children:m.name}),r.jsxs(hB,{className:"category-count",children:[m.count," вопросов"]})]},m.id))})}),r.jsx(pB,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:h.map(m=>r.jsxs(mB,{children:[r.jsxs(gB,{onClick:()=>d(m.id),children:[r.jsx(xB,{children:m.question}),r.jsx(yB,{children:r.jsx(x,{icon:o.has(m.id)?_I:No})})]}),r.jsx(y0,{children:o.has(m.id)&&r.jsx(vB,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:m.answer})})]},m.id))}),r.jsxs(bB,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:[r.jsx(wB,{children:"Не нашли ответ на свой вопрос?"}),r.jsx(jB,{children:"Наши специалисты готовы помочь вам с любыми вопросами. Свяжитесь с нами удобным для вас способом."}),r.jsxs(kB,{children:[r.jsxs(R5,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a,children:[r.jsx(x,{icon:Oe}),"Позвонить нам"]}),r.jsxs(R5,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c,children:[r.jsx(x,{icon:Do}),"Написать email"]})]})]})]})}const SB=l.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 1rem;
  }
`,zB=l.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
`,PB=l(k.div)`
  font-size: 8rem;
  color: #2f5483;
  margin-bottom: 2rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }
`,TB=l(k.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,EB=l(k.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`,LB=l(k.p)`
  font-size: 1.1rem;
  color: #888888;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,IB=l(k.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,D5=l(k.button)`
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
`,MB=l(k.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem;
  }
`,AB=l.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,$B=l.div`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`,RB=l.input`
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
`,DB=l(k.button)`
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
`,NB=l(k.div)`
  margin-top: 2rem;
`,OB=l.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,FB=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,VB=l(k.a)`
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
`;function _B(){const e=cn(),[t,n]=lt.useState(""),i=()=>{e("/"),window.scrollTo({top:0,behavior:"smooth"})},o=()=>{e(-1)},s=c=>{c.preventDefault(),t.trim()&&e(`/catalog?search=${encodeURIComponent(t.trim())}`)},a=[{name:"Главная",href:"/"},{name:"Каталог",href:"/catalog"},{name:"Контакты",href:"/contacts"},{name:"О компании",href:"/about"},{name:"Доставка",href:"/delivery"},{name:"Оплата",href:"/payment"}];return r.jsx(SB,{children:r.jsxs(zB,{children:[r.jsx(PB,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{duration:.8,ease:"easeOut"},children:r.jsx(x,{icon:Xn})}),r.jsx(TB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"404"}),r.jsx(EB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Страница не найдена"}),r.jsx(LB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:"К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по устаревшей ссылке или допустили ошибку в адресе."}),r.jsxs(IB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(D5,{className:"primary",onClick:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:P0}),"На главную"]}),r.jsxs(D5,{className:"secondary",onClick:o,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:pm}),"Назад"]})]}),r.jsxs(MB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsx(AB,{children:"Найти товар"}),r.jsx("form",{onSubmit:s,children:r.jsxs($B,{children:[r.jsx(RB,{type:"text",placeholder:"Введите название товара...",value:t,onChange:c=>n(c.target.value)}),r.jsxs(DB,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(x,{icon:Br}),"Найти"]})]})}),r.jsxs(NB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[r.jsx(OB,{children:"Популярные разделы"}),r.jsx(FB,{children:a.map((c,d)=>r.jsx(VB,{href:c.href,whileHover:{scale:1.05},whileTap:{scale:.95},children:c.name},d))})]})]})]})})}const BB=()=>{const e=window.location;return j.useEffect(()=>{const t=()=>{window.location.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})};t();const n=()=>{t()};return window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}},[]),j.useEffect(()=>{e.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},[e.pathname]),null},HB=l.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
`,UB=l.div`
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
`,WB=l(k.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(47, 84, 131, 0.1);
  z-index: 1000;
`,YB=l.div`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,GB=l.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    display: none;
  }
`,XB=l.div`
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
    padding: 0.8rem 1rem;
    flex-direction: row;
    gap: 0.5rem;
    min-height: 60px;
  }
`,QB=l.div`
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
`;l.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;const KB=l(k.div)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000000;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    img {
      height: 35px;
    }
  }
`,qB=l.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`,ZB=l.div`
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
`;const JB=l.a`
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
`,eH=l.a`
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
`,tH=l(k.button)`
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
`,nH=l(k.button)`
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
`,N5=l(k.a)`
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
`,O5=l.div`
  position: relative;
  display: inline-block;
`,F5=l(k.div)`
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
`,V5=l.div`
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
`,Je=l.a`
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
`;l(k.a)`
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
`;const rH=l.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,iH=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: 1200px) {
    gap: 0.8rem;
  }
`,oH=l.div`
  position: relative;
  display: inline-block;
`,sH=l(k.button)`
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
`,aH=l.div`
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
`,gu=l.a`
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
`,lH=l.div`
  position: relative;
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`,cH=l.input`
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
`,dH=l.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 0.9rem;
`,uH=l.div`
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
`,fH=l.div`
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
`,hH=l.div`
  font-weight: 500;
  color: #2f5483;
  margin-bottom: 0.2rem;
`,pH=l.div`
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
`;l(k.button)`
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
`;const mH=l(k.button)`
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
`,gH=l.div`
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
`,xH=l.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`,yH=l.div`
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
`,vH=l(k.button)`
  display: none;
  background: none;
  border: none;
  color: #2f5483;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    padding: 0.8rem;
    min-width: 44px;
    min-height: 44px;
  }
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
  }
`,bH=l.div`
  display: none;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,wH=l(k.button)`
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
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,fw=l.div`
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
`,jH=l(k.div)`
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
`,kH=l(k.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: #ffffff;
  z-index: 2001;
  padding: 2rem;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 320px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
    padding: 1.5rem;
  }
`,CH=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,SH=l(k.button)`
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
`,xu=l.div`
  margin-bottom: 2rem;
`,yu=l.h3`
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
`,Se=l(k.a)`
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
`,zH=l.div`
  margin-bottom: 1rem;
`,PH=l(k.button)`
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
`,TH=l(k.div)`
  padding-left: 1rem;
  overflow: hidden;
  max-height: ${e=>e.isOpen?"500px":"0"};
  transition: max-height 0.3s ease;
`,vu=l.a`
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
`,EH=l.div`
  margin-bottom: 2rem;
`,LH=l.input`
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
`,IH=l.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,zp=l.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #666666;
  font-size: 0.9rem;
`,MH=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`,_5=l(k.button)`
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
`,AH=l(k.button)`
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
`,$H=({onOpenCart:e})=>{const{getTotalItems:t}=Hr(),n=t();return r.jsxs(mH,{whileHover:{scale:1.02},onClick:e,children:[r.jsx(gH,{children:r.jsx(x,{icon:Wn})}),r.jsx(xH,{children:"Корзина"}),n>0&&r.jsx(yH,{count:n,children:n})]})},RH=({onOpenCart:e})=>{const{getTotalItems:t}=Hr(),n=t();return r.jsxs(wH,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,children:[r.jsx(x,{icon:Wn}),n>0&&r.jsx(fw,{count:n,children:n})]})},DH=({onOpenCart:e})=>{const{getTotalItems:t}=Hr(),n=t();return r.jsxs(AH,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:e,children:[r.jsx(x,{icon:Wn}),"Корзина",n>0&&r.jsx(fw,{count:n,children:n})]})},B5=()=>{const e=cn(),t=()=>{e("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)};return r.jsx(KB,{whileHover:{scale:1.02},onClick:t,children:r.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})})},NH=()=>{const e=cn(),t=()=>{e("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)};return r.jsx(SU,{as:k.div,whileHover:{scale:1.02},onClick:t,children:r.jsx("img",{src:"/logo.png",alt:"Стройэнергетика"})})},OH=l(k.div)`
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
`,FH=l(k.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`,VH=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,_H=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,BH=l(k.button)`
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
`,HH=l.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H5=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,U5=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,W5=l.input`
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
`;const UH=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,WH=l(k.button)`
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
`,YH=l(k.button)`
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
`,GH=l(k.div)`
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
`,XH=l(k.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`,QH=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`,KH=l.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`,qH=l(k.button)`
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
`,ZH=l.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Kr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,qr=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`,Os=l.input`
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
`,JH=l.textarea`
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
`,eU=l.div`
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
`,tU=l.div`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,nU=l.div`
  color: #999999;
  font-size: 0.85rem;
`,rU=l.input`
  display: none;
`,iU=l.div`
  margin-top: 1rem;
`,oU=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border: 1px solid #e9ecef;
`,sU=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`,aU=l.span`
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;
`,lU=l.span`
  font-size: 0.8rem;
  color: #666666;
`,cU=l(k.button)`
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
`,dU=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,uU=l(k.button)`
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
`,fU=l(k.button)`
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
`,hU=l(k.div)`
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
`,pU=l(k.div)`
  background: white;
  border-radius: 16px;
  padding: 0;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,mU=l.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 20px;
`,gU=l.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #212529;
`,xU=l.button`
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
`,yU=l.form`
  padding: 24px;
`,Fs=l.div`
  margin-bottom: 20px;
`,Vs=l.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #495057;
  font-size: 14px;
`,bu=l.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,vU=l.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
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
`,bU=l.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`,wU=l.button`
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
`,jU=l.button`
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
`,kU=l.footer`
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
`,CU=l.div`
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
`,wu=l.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,SU=l.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`,zU=l.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,PU=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Pp=l.div`
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
`,TU=l.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Tp=l.div`
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
`,Ep=l.h4`
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
`,it=l.a`
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
`,EU=l.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`,LU=l.div`
  display: flex;
  gap: 1rem;
`,ju=l.a`
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
`;function IU(){const{addNotification:e}=E0(),[t,n]=j.useState(!1),[i,o]=j.useState(!1),[s,a]=j.useState(!1),[c,d]=j.useState(""),[u,f]=j.useState(!1),[h,m]=j.useState([]),[p,b]=j.useState(!1),[w,z]=j.useState(!1),[v,g]=j.useState(!1),[y,S]=j.useState(!1),[P,E]=j.useState({name:"",phone:""}),[T,L]=j.useState(!1),[D,N]=j.useState(!1),[X,fe]=j.useState({name:"",company:"",phone:"",email:"",subject:"",message:""}),[we,q]=j.useState([]),[rt,re]=j.useState(!1),[se,R]=j.useState(!1),[V,C]=j.useState(!1),[I,H]=j.useState({name:"",company:"",phone:"",email:"",message:""}),[Q,ae]=j.useState(!1),U=()=>{z(!1),g(!1)},je=()=>{S(!0)},Fe=()=>{S(!1),E({name:"",phone:""}),L(!1)},dn=($,Me)=>{E(ut=>({...ut,[$]:Me}))},vt=async $=>{$.preventDefault(),L(!0),setTimeout(()=>{L(!1),Fe(),e("Спасибо! Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)},Xt=()=>{N(!0)},Ve=()=>{N(!1),fe({name:"",company:"",phone:"",email:"",subject:"",message:""}),q([]),re(!1),R(!1)},Ye=($,Me)=>{fe(ut=>({...ut,[$]:Me}))},hw=$=>{const ut=Array.from($.target.files).map(ee=>({id:Date.now()+Math.random(),file:ee,name:ee.name,size:ee.size,type:ee.type}));q(ee=>[...ee,...ut])},pw=$=>{q(Me=>Me.filter(ut=>ut.id!==$))},mw=$=>{$.preventDefault(),R(!0)},gw=$=>{$.preventDefault(),R(!1)},xw=$=>{$.preventDefault(),R(!1);const ut=Array.from($.dataTransfer.files).map(ee=>({id:Date.now()+Math.random(),file:ee,name:ee.name,size:ee.size,type:ee.type}));q(ee=>[...ee,...ut])},yw=$=>{if($===0)return"0 Bytes";const Me=1024,ut=["Bytes","KB","MB","GB"],ee=Math.floor(Math.log($)/Math.log(Me));return parseFloat(($/Math.pow(Me,ee)).toFixed(2))+" "+ut[ee]},vw=async $=>{$.preventDefault(),re(!0),setTimeout(()=>{re(!1),Ve(),e("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)},ox=()=>{C(!0)},el=()=>{C(!1),H({name:"",company:"",phone:"",email:"",message:""}),ae(!1)},as=($,Me)=>{H(ut=>({...ut,[$]:Me}))},bw=async $=>{$.preventDefault(),ae(!0),setTimeout(()=>{ae(!1),el(),e("Спасибо! Ваша заявка на прайс-лист отправлена. Мы свяжемся с вами в ближайшее время.","success",5e3)},2e3)};j.useEffect(()=>{fetch("/catalog-products.json").then($=>$.json()).then($=>m($)).catch($=>console.error("Ошибка загрузки товаров:",$))},[]);const ww=()=>{if(!c.trim()||c.length<2)return[];const $=c.toLowerCase().trim(),Me=[];return h.forEach(ee=>{ee.name.toLowerCase().includes($)&&Me.push({type:"name",title:ee.name,details:`${ee.brand} • ${ee.category}`,product:ee})}),h.forEach(ee=>{ee.brand.toLowerCase().includes($)&&Me.push({type:"brand",title:ee.brand,details:`${ee.name} • ${ee.category}`,product:ee})}),Me.filter((ee,jw,kw)=>jw===kw.findIndex(sx=>sx.title===ee.title&&sx.type===ee.type)).slice(0,6)};return r.jsxs(pk,{children:[r.jsx(BB,{}),r.jsx(HB,{children:r.jsxs(UB,{children:[r.jsxs(WB,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[r.jsx(YB,{children:r.jsxs(XB,{children:[r.jsx(qB,{children:r.jsx(B5,{})}),r.jsxs(ZB,{children:[r.jsxs(O5,{children:[r.jsxs(F5,{whileHover:{scale:1.02},onClick:()=>o(!i),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:["Клиентам",r.jsx(x,{icon:No,style:{fontSize:"0.7rem"}})]}),r.jsxs(V5,{isOpen:i,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[r.jsx(Je,{href:"/consultation",children:"Консультация"}),r.jsx(Je,{href:"/delivery",children:"Доставка"}),r.jsx(Je,{href:"/payment",children:"Оплата"}),r.jsx(Je,{href:"/warranty",children:"Гарантия"}),r.jsx(Je,{href:"/return",children:"Возврат"}),r.jsx(Je,{href:"/services/meter-verification",children:"Поверка счетчиков электрической энергии"}),r.jsx(Je,{href:"/services/transformer-verification",children:"Поверка трансформаторов тока (напряжения)"}),r.jsx(Je,{href:"/services/installation",children:"Монтаж оборудования"}),r.jsx(Je,{href:"/services/commissioning",children:"Наладка"})]})]}),r.jsxs(O5,{children:[r.jsxs(F5,{whileHover:{scale:1.02},onClick:()=>a(!s),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:["Информация",r.jsx(x,{icon:No,style:{fontSize:"0.7rem"}})]}),r.jsxs(V5,{isOpen:s,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[r.jsx(Je,{href:"/about",children:"О компании"}),r.jsx(Je,{href:"/docs",children:"Документация"}),r.jsx(Je,{href:"/certificates",children:"Сертификаты"}),r.jsx(Je,{href:"/partners",children:"Партнеры"}),r.jsx(Je,{href:"/faq",children:"FAQ"}),r.jsx(Je,{href:"/terms",children:"Условия использования"}),r.jsx(Je,{href:"/privacy",children:"Политика конфиденциальности"})]})]}),r.jsx(N5,{whileHover:{scale:1.02},onClick:ox,style:{cursor:"pointer"},children:"Прайс-лист"}),r.jsx(N5,{whileHover:{scale:1.02},href:"/contacts",children:"Контакты"}),r.jsxs(nH,{whileHover:{scale:1.02},onClick:je,children:[r.jsx(x,{icon:z4}),"Заказать звонок"]}),r.jsxs(tH,{whileHover:{scale:1.02},onClick:Xt,children:[r.jsx(x,{icon:We}),"Отправить заявку"]})]}),r.jsxs(bH,{children:[r.jsx(RH,{onOpenCart:()=>b(!0)}),r.jsx(vH,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>z(!0),children:r.jsx(x,{icon:C4})})]})]})}),r.jsx(GB,{children:r.jsxs(QB,{children:[r.jsx(rH,{children:r.jsxs(oH,{className:"catalog-dropdown",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsxs(sH,{whileHover:{scale:1.02},children:["Каталог товаров",r.jsx(x,{icon:C4})]}),r.jsxs(aH,{isOpen:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsx(gu,{href:"/catalog",children:"Все товары"}),r.jsx(gu,{href:"/catalog?category=Однофазные счетчики",children:"Однофазные счетчики"}),r.jsx(gu,{href:"/catalog?category=Трехфазные счетчики",children:"Трехфазные счетчики"}),r.jsx(gu,{href:"/catalog?category=Устройства сбора и передачи данных",children:"Устройства сбора и передачи данных"})]})]})}),r.jsxs(iH,{children:[r.jsxs(lH,{children:[r.jsx(dH,{children:r.jsx(x,{icon:Br})}),r.jsx(cH,{type:"text",placeholder:"Поиск товаров...",value:c,onChange:$=>{d($.target.value),f($.target.value.length>=2)},onFocus:()=>{c.length>=2&&f(!0)},onBlur:()=>{setTimeout(()=>f(!1),200)}}),r.jsx(uH,{show:u,children:ww().map(($,Me)=>r.jsxs(fH,{onClick:()=>{d($.title),f(!1)},children:[r.jsx(hH,{children:$.title}),r.jsx(pH,{children:$.details})]},`header-${$.type}-${Me}`))})]}),r.jsxs(eH,{href:"mailto:info@stroienergetika.ru",children:[r.jsx(x,{icon:Do}),"info@stroienergetika.ru"]}),r.jsxs(JB,{href:"tel:+79991234567",children:[r.jsx(x,{icon:Oe}),"+7 (999) 123-45-67"]}),r.jsx($H,{onOpenCart:()=>b(!0)})]})]})})]}),r.jsxs(H9,{children:[r.jsx(me,{path:"/",element:r.jsx(E$,{})}),r.jsx(me,{path:"/catalog",element:r.jsx(AA,{})}),r.jsx(me,{path:"/product/:id",element:r.jsx(OR,{})}),r.jsx(me,{path:"/checkout",element:r.jsx(AD,{})}),r.jsx(me,{path:"/thank-you",element:r.jsx(UD,{})}),r.jsx(me,{path:"/contacts",element:r.jsx(rN,{})}),r.jsx(me,{path:"/about",element:r.jsx(gN,{})}),r.jsx(me,{path:"/delivery",element:r.jsx(EN,{})}),r.jsx(me,{path:"/payment",element:r.jsx(HN,{})}),r.jsx(me,{path:"/warranty",element:r.jsx(rO,{})}),r.jsx(me,{path:"/return",element:r.jsx(mO,{})}),r.jsx(me,{path:"/consultation",element:r.jsx(PO,{})}),r.jsx(me,{path:"/services/meter-verification",element:r.jsx(XO,{})}),r.jsx(me,{path:"/services/transformer-verification",element:r.jsx(yF,{})}),r.jsx(me,{path:"/services/installation",element:r.jsx(_F,{})}),r.jsx(me,{path:"/services/commissioning",element:r.jsx(dV,{})}),r.jsx(me,{path:"/test",element:r.jsx(pV,{})}),r.jsx(me,{path:"/docs",element:r.jsx(QV,{})}),r.jsx(me,{path:"/certificates",element:r.jsx(I_,{})}),r.jsx(me,{path:"/partners",element:r.jsx(J_,{})}),r.jsx(me,{path:"/faq",element:r.jsx(CB,{})}),r.jsx(me,{path:"*",element:r.jsx(_B,{})})]}),r.jsxs(kU,{children:[r.jsxs(CU,{children:[r.jsxs(wu,{children:[r.jsx(NH,{}),r.jsx(zU,{children:"Официальный дилер счетчиков электроэнергии с гарантией качества и профессиональной установкой. Работаем с 2010 года."}),r.jsxs(PU,{children:[r.jsxs(Pp,{children:[r.jsx(x,{icon:Oe}),"+7 (999) 123-45-67"]}),r.jsxs(Pp,{children:[r.jsx(x,{icon:Do}),"info@stroienergetika.ru"]}),r.jsxs(Pp,{children:[r.jsx(x,{icon:Ra}),"Пн-Пт: 9:00 - 18:00"]})]}),r.jsxs(TU,{children:[r.jsx(Tp,{children:"VISA"}),r.jsx(Tp,{children:"MC"}),r.jsx(Tp,{children:"MIR"})]})]}),r.jsxs(wu,{children:[r.jsx(Ep,{children:"О компании"}),r.jsx(it,{href:"/about",children:"О нас"}),r.jsx(it,{href:"/docs",children:"Документация"}),r.jsx(it,{href:"/certificates",children:"Сертификаты"}),r.jsx(it,{href:"#",children:"Новости"}),r.jsx(it,{href:"#",children:"Вакансии"}),r.jsx(it,{href:"/partners",children:"Партнеры"}),r.jsx(it,{href:"/faq",children:"FAQ"})]}),r.jsxs(wu,{children:[r.jsx(Ep,{children:"Помощь"}),r.jsx(it,{href:"/delivery",children:"Доставка"}),r.jsx(it,{href:"/payment",children:"Оплата"}),r.jsx(it,{href:"/docs",children:"Документация"}),r.jsx(it,{href:"/faq",children:"FAQ"}),r.jsx(it,{href:"/return",children:"Возврат"}),r.jsx(it,{href:"/warranty",children:"Гарантия"})]}),r.jsxs(wu,{children:[r.jsx(Ep,{children:"Контакты"}),r.jsx(it,{href:"/contacts",children:"Все контакты"}),r.jsx(it,{href:"#",children:"Москва, ул. Примерная, 123"})]})]}),r.jsxs(EU,{children:[r.jsx("div",{children:"© 2024 Стройэнергетика. Все права защищены."}),r.jsxs(LU,{children:[r.jsx(ju,{href:"#",children:r.jsx(x,{icon:PM})}),r.jsx(ju,{href:"#",children:r.jsx(x,{icon:mM})}),r.jsx(ju,{href:"#",children:r.jsx(x,{icon:fm})}),r.jsx(ju,{href:"#",children:r.jsx(x,{icon:kM})})]})]})]})]})}),r.jsx(pD,{isOpen:p,onClose:()=>b(!1)}),r.jsx(jH,{isOpen:w,initial:{opacity:0},animate:{opacity:w?1:0},transition:{duration:.3},onClick:U}),r.jsxs(kH,{initial:{x:"100%"},animate:{x:w?0:"100%"},transition:{duration:.3,ease:"easeInOut"},children:[r.jsxs(CH,{children:[r.jsx(B5,{}),r.jsx(SH,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:U,children:r.jsx(x,{icon:pi})})]}),r.jsx(EH,{children:r.jsx(LH,{type:"text",placeholder:"Поиск товаров...",value:c,onChange:$=>d($.target.value)})}),r.jsxs(xu,{children:[r.jsx(yu,{children:"Корзина"}),r.jsx(DH,{onOpenCart:()=>{b(!0),U()}})]}),r.jsxs(xu,{children:[r.jsx(yu,{children:"Каталог"}),r.jsxs(zH,{children:[r.jsxs(PH,{onClick:()=>g(!v),whileHover:{scale:1.02},children:["Каталог товаров",r.jsx(x,{icon:No,style:{fontSize:"0.8rem",transform:v?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"}})]}),r.jsxs(TH,{isOpen:v,children:[r.jsx(vu,{href:"/catalog",onClick:U,children:"Все товары"}),r.jsx(vu,{href:"/catalog?category=Однофазные счетчики",onClick:U,children:"Однофазные счетчики"}),r.jsx(vu,{href:"/catalog?category=Трехфазные счетчики",onClick:U,children:"Трехфазные счетчики"}),r.jsx(vu,{href:"/catalog?category=Устройства сбора и передачи данных",onClick:U,children:"Устройства сбора и передачи данных"})]})]})]}),r.jsxs(xu,{children:[r.jsx(yu,{children:"Клиентам"}),r.jsx(Se,{href:"/consultation",onClick:U,children:"Консультация"}),r.jsx(Se,{href:"/delivery",onClick:U,children:"Доставка"}),r.jsx(Se,{href:"/services/meter-verification",onClick:U,children:"Поверка счетчиков"}),r.jsx(Se,{href:"/services/transformer-verification",onClick:U,children:"Поверка трансформаторов"}),r.jsx(Se,{href:"/services/installation",onClick:U,children:"Монтаж оборудования"}),r.jsx(Se,{href:"/services/commissioning",onClick:U,children:"Наладка"}),r.jsx(Se,{href:"/payment",onClick:U,children:"Оплата"}),r.jsx(Se,{href:"/warranty",onClick:U,children:"Гарантия"}),r.jsx(Se,{href:"/return",onClick:U,children:"Возврат"})]}),r.jsxs(xu,{children:[r.jsx(yu,{children:"Информация"}),r.jsx(Se,{href:"#",onClick:()=>{U(),ox()},children:"Прайс-лист"}),r.jsx(Se,{href:"/about",onClick:U,children:"О компании"}),r.jsx(Se,{href:"/docs",onClick:U,children:"Документация"}),r.jsx(Se,{href:"/certificates",onClick:U,children:"Сертификаты"}),r.jsx(Se,{href:"/faq",onClick:U,children:"FAQ"}),r.jsx(Se,{href:"/terms",onClick:U,children:"Условия использования"}),r.jsx(Se,{href:"/privacy",onClick:U,children:"Политика конфиденциальности"}),r.jsx(Se,{href:"/partners",onClick:U,children:"Партнеры"}),r.jsx(Se,{href:"/vacancies",onClick:U,children:"Вакансии"}),r.jsx(Se,{href:"/help",onClick:U,children:"Помощь"}),r.jsx(Se,{href:"/career",onClick:U,children:"Карьера"}),r.jsx(Se,{href:"/contacts",onClick:U,children:"Контакты"})]}),r.jsxs(IH,{children:[r.jsxs(zp,{children:[r.jsx(x,{icon:Oe}),"+7 (999) 123-45-67"]}),r.jsxs(zp,{children:[r.jsx(x,{icon:Do}),"info@stroienergetika.ru"]}),r.jsxs(zp,{children:[r.jsx(x,{icon:Ra}),"Пн-Пт: 9:00 - 18:00"]})]}),r.jsxs(MH,{children:[r.jsxs(_5,{className:"primary",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{U(),Xt()},children:[r.jsx(x,{icon:We}),"Отправить заявку"]}),r.jsxs(_5,{className:"secondary",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{U(),je()},children:[r.jsx(x,{icon:z4}),"Заказать звонок"]})]})]}),y&&r.jsx(OH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:Fe,children:r.jsxs(FH,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:$=>$.stopPropagation(),children:[r.jsxs(VH,{children:[r.jsx(_H,{children:"Заказать звонок"}),r.jsx(BH,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:Fe,children:"×"})]}),r.jsxs(HH,{onSubmit:vt,children:[r.jsxs(H5,{children:[r.jsx(U5,{children:"Ваше имя *"}),r.jsx(W5,{type:"text",placeholder:"Введите ваше имя",value:P.name,onChange:$=>dn("name",$.target.value),required:!0})]}),r.jsxs(H5,{children:[r.jsx(U5,{children:"Номер телефона *"}),r.jsx(W5,{type:"tel",placeholder:"+7 (999) 123-45-67",value:P.phone,onChange:$=>dn("phone",$.target.value),required:!0})]}),r.jsxs(UH,{children:[r.jsx(YH,{type:"button",onClick:Fe,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Отмена"}),r.jsx(WH,{type:"submit",disabled:T,whileHover:{scale:1.02},whileTap:{scale:.98},children:T?"Отправка...":"Отправить"})]})]})]})}),D&&r.jsx(GH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:Ve,children:r.jsxs(XH,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:$=>$.stopPropagation(),children:[r.jsxs(QH,{children:[r.jsx(KH,{children:"Отправить заявку"}),r.jsx(qH,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:Ve,children:"×"})]}),r.jsxs(ZH,{onSubmit:vw,children:[r.jsxs(Kr,{children:[r.jsx(qr,{children:"Ваше имя *"}),r.jsx(Os,{type:"text",placeholder:"Введите ваше имя",value:X.name,onChange:$=>Ye("name",$.target.value),required:!0})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Компания"}),r.jsx(Os,{type:"text",placeholder:"Название вашей компании",value:X.company,onChange:$=>Ye("company",$.target.value)})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Номер телефона *"}),r.jsx(Os,{type:"tel",placeholder:"+7 (999) 123-45-67",value:X.phone,onChange:$=>Ye("phone",$.target.value),required:!0})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Email *"}),r.jsx(Os,{type:"email",placeholder:"your@email.com",value:X.email,onChange:$=>Ye("email",$.target.value),required:!0})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Тема заявки *"}),r.jsx(Os,{type:"text",placeholder:"Кратко опишите тему заявки",value:X.subject,onChange:$=>Ye("subject",$.target.value),required:!0})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Описание *"}),r.jsx(JH,{placeholder:"Подробно опишите вашу задачу, требования или вопросы...",value:X.message,onChange:$=>Ye("message",$.target.value),required:!0})]}),r.jsxs(Kr,{children:[r.jsx(qr,{children:"Прикрепить файлы"}),r.jsxs(eU,{className:se?"drag-over":"",onDragOver:mw,onDragLeave:gw,onDrop:xw,onClick:()=>document.getElementById("file-input").click(),children:[r.jsx(tU,{children:"Перетащите файлы сюда или нажмите для выбора"}),r.jsx(nU,{children:"Поддерживаемые форматы: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, ZIP"}),r.jsx(rU,{id:"file-input",type:"file",multiple:!0,onChange:hw,accept:".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"})]}),we.length>0&&r.jsx(iU,{children:we.map($=>r.jsxs(oU,{children:[r.jsxs(sU,{children:[r.jsx(aU,{children:$.name}),r.jsxs(lU,{children:["(",yw($.size),")"]})]}),r.jsx(cU,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>pw($.id),children:"×"})]},$.id))})]}),r.jsxs(dU,{children:[r.jsx(fU,{type:"button",onClick:Ve,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Отмена"}),r.jsx(uU,{type:"submit",disabled:rt,whileHover:{scale:1.02},whileTap:{scale:.98},children:rt?"Отправка...":"Отправить заявку"})]})]})]})}),V&&r.jsx(hU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:el,children:r.jsxs(pU,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:$=>$.stopPropagation(),children:[r.jsxs(mU,{children:[r.jsx(gU,{children:"Заявка на прайс-лист"}),r.jsx(xU,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:el,children:"×"})]}),r.jsxs(yU,{onSubmit:bw,children:[r.jsxs(Fs,{children:[r.jsx(Vs,{children:"Ваше имя *"}),r.jsx(bu,{type:"text",placeholder:"Введите ваше имя",value:I.name,onChange:$=>as("name",$.target.value),required:!0})]}),r.jsxs(Fs,{children:[r.jsx(Vs,{children:"Компания"}),r.jsx(bu,{type:"text",placeholder:"Название вашей компании",value:I.company,onChange:$=>as("company",$.target.value)})]}),r.jsxs(Fs,{children:[r.jsx(Vs,{children:"Номер телефона *"}),r.jsx(bu,{type:"tel",placeholder:"+7 (999) 123-45-67",value:I.phone,onChange:$=>as("phone",$.target.value),required:!0})]}),r.jsxs(Fs,{children:[r.jsx(Vs,{children:"Email *"}),r.jsx(bu,{type:"email",placeholder:"your@email.com",value:I.email,onChange:$=>as("email",$.target.value),required:!0})]}),r.jsxs(Fs,{children:[r.jsx(Vs,{children:"Дополнительная информация"}),r.jsx(vU,{placeholder:"Укажите интересующие вас категории товаров или особые требования...",value:I.message,onChange:$=>as("message",$.target.value)})]}),r.jsxs(bU,{children:[r.jsx(jU,{type:"button",onClick:el,children:"Отмена"}),r.jsx(wU,{type:"submit",disabled:Q,children:Q?"Отправка...":"Отправить заявку"})]})]})]})})]})}function MU(){return r.jsx(BM,{children:r.jsx(UM,{children:r.jsx(IU,{})})})}Lp.createRoot(document.getElementById("root")).render(r.jsx(lt.StrictMode,{children:r.jsx(MU,{})}));
