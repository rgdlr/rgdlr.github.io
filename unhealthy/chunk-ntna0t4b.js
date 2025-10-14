var pM=Object.create;var{getPrototypeOf:dM,defineProperty:RH,getOwnPropertyNames:mM}=Object;var uM=Object.prototype.hasOwnProperty;var r6=(J,w,Z)=>{Z=J!=null?pM(dM(J)):{};let Y=w||!J||!J.__esModule?RH(Z,"default",{value:J,enumerable:!0}):Z;for(let H of mM(J))if(!uM.call(Y,H))RH(Y,H,{get:()=>J[H],enumerable:!0});return Y};var DH=(J,w)=>()=>(w||J((w={exports:{}}).exports,w),w.exports);var MG=(J,w)=>{for(var Z in w)RH(J,Z,{get:w[Z],enumerable:!0,configurable:!0,set:(Y)=>w[Z]=()=>Y})};var MH=(J,w)=>()=>(J&&(w=J(J=0)),w);var l7=DH((WO)=>{var FH=Symbol.for("react.transitional.element"),cM=Symbol.for("react.portal"),iM=Symbol.for("react.fragment"),sM=Symbol.for("react.strict_mode"),oM=Symbol.for("react.profiler"),nM=Symbol.for("react.consumer"),aM=Symbol.for("react.context"),rM=Symbol.for("react.forward_ref"),tM=Symbol.for("react.suspense"),eM=Symbol.for("react.memo"),LG=Symbol.for("react.lazy"),JO=Symbol.for("react.activity"),OG=Symbol.iterator;function wO(J){if(J===null||typeof J!=="object")return null;return J=OG&&J[OG]||J["@@iterator"],typeof J==="function"?J:null}var BG={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},VG=Object.assign,_G={};function I1(J,w,Z){this.props=J,this.context=w,this.refs=_G,this.updater=Z||BG}I1.prototype.isReactComponent={};I1.prototype.setState=function(J,w){if(typeof J!=="object"&&typeof J!=="function"&&J!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,J,w,"setState")};I1.prototype.forceUpdate=function(J){this.updater.enqueueForceUpdate(this,J,"forceUpdate")};function AG(){}AG.prototype=I1.prototype;function zH(J,w,Z){this.props=J,this.context=w,this.refs=_G,this.updater=Z||BG}var LH=zH.prototype=new AG;LH.constructor=zH;VG(LH,I1.prototype);LH.isPureReactComponent=!0;var NG=Array.isArray;function NH(){}var N9={H:null,A:null,T:null,S:null},EG=Object.prototype.hasOwnProperty;function BH(J,w,Z){var Y=Z.ref;return{$$typeof:FH,type:J,key:w,ref:Y!==void 0?Y:null,props:Z}}function ZO(J,w){return BH(J.type,w,J.props)}function VH(J){return typeof J==="object"&&J!==null&&J.$$typeof===FH}function YO(J){var w={"=":"=0",":":"=2"};return"$"+J.replace(/[=:]/g,function(Z){return w[Z]})}var FG=/\/+/g;function OH(J,w){return typeof J==="object"&&J!==null&&J.key!=null?YO(""+J.key):w.toString(36)}function HO(J){switch(J.status){case"fulfilled":return J.value;case"rejected":throw J.reason;default:switch(typeof J.status==="string"?J.then(NH,NH):(J.status="pending",J.then(function(w){J.status==="pending"&&(J.status="fulfilled",J.value=w)},function(w){J.status==="pending"&&(J.status="rejected",J.reason=w)})),J.status){case"fulfilled":return J.value;case"rejected":throw J.reason}}throw J}function E1(J,w,Z,Y,H){var X=typeof J;if(X==="undefined"||X==="boolean")J=null;var Q=!1;if(J===null)Q=!0;else switch(X){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(J.$$typeof){case FH:case cM:Q=!0;break;case LG:return Q=J._init,E1(Q(J._payload),w,Z,Y,H)}}if(Q)return H=H(J),Q=Y===""?"."+OH(J,0):Y,NG(H)?(Z="",Q!=null&&(Z=Q.replace(FG,"$&/")+"/"),E1(H,w,Z,"",function(G){return G})):H!=null&&(VH(H)&&(H=ZO(H,Z+(H.key==null||J&&J.key===H.key?"":(""+H.key).replace(FG,"$&/")+"/")+Q)),w.push(H)),1;Q=0;var W=Y===""?".":Y+":";if(NG(J))for(var U=0;U<J.length;U++)Y=J[U],X=W+OH(Y,U),Q+=E1(Y,w,Z,X,H);else if(U=wO(J),typeof U==="function")for(J=U.call(J),U=0;!(Y=J.next()).done;)Y=Y.value,X=W+OH(Y,U++),Q+=E1(Y,w,Z,X,H);else if(X==="object"){if(typeof J.then==="function")return E1(HO(J),w,Z,Y,H);throw w=String(J),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(J).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return Q}function hw(J,w,Z){if(J==null)return J;var Y=[],H=0;return E1(J,Y,"","",function(X){return w.call(Z,X,H++)}),Y}function XO(J){if(J._status===-1){var w=J._result;w=w(),w.then(function(Z){if(J._status===0||J._status===-1)J._status=1,J._result=Z},function(Z){if(J._status===0||J._status===-1)J._status=2,J._result=Z}),J._status===-1&&(J._status=0,J._result=w)}if(J._status===1)return J._result.default;throw J._result}var zG=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(w))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},QO={map:hw,forEach:function(J,w,Z){hw(J,function(){w.apply(this,arguments)},Z)},count:function(J){var w=0;return hw(J,function(){w++}),w},toArray:function(J){return hw(J,function(w){return w})||[]},only:function(J){if(!VH(J))throw Error("React.Children.only expected to receive a single React element child.");return J}};WO.Activity=JO;WO.Children=QO;WO.Component=I1;WO.Fragment=iM;WO.Profiler=oM;WO.PureComponent=zH;WO.StrictMode=sM;WO.Suspense=tM;WO.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N9;WO.__COMPILER_RUNTIME={__proto__:null,c:function(J){return N9.H.useMemoCache(J)}};WO.cache=function(J){return function(){return J.apply(null,arguments)}};WO.cacheSignal=function(){return null};WO.cloneElement=function(J,w,Z){if(J===null||J===void 0)throw Error("The argument must be a React element, but you passed "+J+".");var Y=VG({},J.props),H=J.key;if(w!=null)for(X in w.key!==void 0&&(H=""+w.key),w)!EG.call(w,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&w.ref===void 0||(Y[X]=w[X]);var X=arguments.length-2;if(X===1)Y.children=Z;else if(1<X){for(var Q=Array(X),W=0;W<X;W++)Q[W]=arguments[W+2];Y.children=Q}return BH(J.type,H,Y)};WO.createContext=function(J){return J={$$typeof:aM,_currentValue:J,_currentValue2:J,_threadCount:0,Provider:null,Consumer:null},J.Provider=J,J.Consumer={$$typeof:nM,_context:J},J};WO.createElement=function(J,w,Z){var Y,H={},X=null;if(w!=null)for(Y in w.key!==void 0&&(X=""+w.key),w)EG.call(w,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(H[Y]=w[Y]);var Q=arguments.length-2;if(Q===1)H.children=Z;else if(1<Q){for(var W=Array(Q),U=0;U<Q;U++)W[U]=arguments[U+2];H.children=W}if(J&&J.defaultProps)for(Y in Q=J.defaultProps,Q)H[Y]===void 0&&(H[Y]=Q[Y]);return BH(J,X,H)};WO.createRef=function(){return{current:null}};WO.forwardRef=function(J){return{$$typeof:rM,render:J}};WO.isValidElement=VH;WO.lazy=function(J){return{$$typeof:LG,_payload:{_status:-1,_result:J},_init:XO}};WO.memo=function(J,w){return{$$typeof:eM,type:J,compare:w===void 0?null:w}};WO.startTransition=function(J){var w=N9.T,Z={};N9.T=Z;try{var Y=J(),H=N9.S;H!==null&&H(Z,Y),typeof Y==="object"&&Y!==null&&typeof Y.then==="function"&&Y.then(NH,zG)}catch(X){zG(X)}finally{w!==null&&Z.types!==null&&(w.types=Z.types),N9.T=w}};WO.unstable_useCacheRefresh=function(){return N9.H.useCacheRefresh()};WO.use=function(J){return N9.H.use(J)};WO.useActionState=function(J,w,Z){return N9.H.useActionState(J,w,Z)};WO.useCallback=function(J,w){return N9.H.useCallback(J,w)};WO.useContext=function(J){return N9.H.useContext(J)};WO.useDebugValue=function(){};WO.useDeferredValue=function(J,w){return N9.H.useDeferredValue(J,w)};WO.useEffect=function(J,w){return N9.H.useEffect(J,w)};WO.useEffectEvent=function(J){return N9.H.useEffectEvent(J)};WO.useId=function(){return N9.H.useId()};WO.useImperativeHandle=function(J,w,Z){return N9.H.useImperativeHandle(J,w,Z)};WO.useInsertionEffect=function(J,w){return N9.H.useInsertionEffect(J,w)};WO.useLayoutEffect=function(J,w){return N9.H.useLayoutEffect(J,w)};WO.useMemo=function(J,w){return N9.H.useMemo(J,w)};WO.useOptimistic=function(J,w){return N9.H.useOptimistic(J,w)};WO.useReducer=function(J,w,Z){return N9.H.useReducer(J,w,Z)};WO.useRef=function(J){return N9.H.useRef(J)};WO.useState=function(J){return N9.H.useState(J)};WO.useSyncExternalStore=function(J,w,Z){return N9.H.useSyncExternalStore(J,w,Z)};WO.useTransition=function(){return N9.H.useTransition()};WO.version="19.2.0"});function AH(J,w){var Z=J.length;J.push(w);J:for(;0<Z;){var Y=Z-1>>>1,H=J[Y];if(0<vw(H,w))J[Y]=w,J[Z]=H,Z=Y;else break J}}function U6(J){return J.length===0?null:J[0]}function dw(J){if(J.length===0)return null;var w=J[0],Z=J.pop();if(Z!==w){J[0]=Z;J:for(var Y=0,H=J.length,X=H>>>1;Y<X;){var Q=2*(Y+1)-1,W=J[Q],U=Q+1,G=J[U];if(0>vw(W,Z))U<H&&0>vw(G,W)?(J[Y]=G,J[U]=Z,Y=U):(J[Y]=W,J[Q]=Z,Y=Q);else if(U<H&&0>vw(G,Z))J[Y]=G,J[U]=Z,Y=U;else break J}}return w}function vw(J,w){var Z=J.sortIndex-w.sortIndex;return Z!==0?Z:J.id-w.id}function lw(J){for(var w=U6(t6);w!==null;){if(w.callback===null)dw(t6);else if(w.startTime<=J)dw(t6),w.sortIndex=w.expirationTime,AH(L6,w);else break;w=U6(t6)}}function SH(J){if(e5=!1,lw(J),!t5)if(U6(L6)!==null)t5=!0,T1||(T1=!0,C1());else{var w=U6(t6);w!==null&&jH(SH,w.startTime-J)}}function SG(){return PH?!0:G6()-PG<rO?!1:!0}function _H(){if(PH=!1,T1){var J=G6();PG=J;var w=!0;try{J:{t5=!1,e5&&(e5=!1,TG(JJ),JJ=-1),CH=!0;var Z=gw;try{w:{lw(J);for(h8=U6(L6);h8!==null&&!(h8.expirationTime>J&&SG());){var Y=h8.callback;if(typeof Y==="function"){h8.callback=null,gw=h8.priorityLevel;var H=Y(h8.expirationTime<=J);if(J=G6(),typeof H==="function"){h8.callback=H,lw(J),w=!0;break w}h8===U6(L6)&&dw(L6),lw(J)}else dw(L6);h8=U6(L6)}if(h8!==null)w=!0;else{var X=U6(t6);X!==null&&jH(SH,X.startTime-J),w=!1}}break J}finally{h8=null,gw=Z,CH=!1}w=void 0}}finally{w?C1():T1=!1}}}function jH(J,w){JJ=CG(function(){J(G6())},w)}var G6=void 0,EH,yw,IH,L6,t6,aO=1,h8=null,gw=3,CH=!1,t5=!1,e5=!1,PH=!1,CG,TG,IG,T1=!1,JJ=-1,rO=5,PG=-1,C1,pw,TH,fH=5,bH=1,xH=4,P1=3,hH=2,vH=function(J){J.callback=null},yH=function(){return gw},gH=function(){PH=!0},S1=function(J,w,Z){var Y=G6();switch(typeof Z==="object"&&Z!==null?(Z=Z.delay,Z=typeof Z==="number"&&0<Z?Y+Z:Y):Z=Y,J){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5000}return H=Z+H,J={id:aO++,callback:w,priorityLevel:J,startTime:Z,expirationTime:H,sortIndex:-1},Z>Y?(J.sortIndex=Z,AH(t6,J),U6(L6)===null&&J===U6(t6)&&(e5?(TG(JJ),JJ=-1):e5=!0,jH(SH,Z-Y))):(J.sortIndex=H,AH(L6,J),t5||CH||(t5=!0,T1||(T1=!0,C1()))),J},lH;var jG=MH(()=>{if(typeof performance==="object"&&typeof performance.now==="function")EH=performance,G6=function(){return EH.now()};else yw=Date,IH=yw.now(),G6=function(){return yw.now()-IH};L6=[],t6=[],CG=typeof setTimeout==="function"?setTimeout:null,TG=typeof clearTimeout==="function"?clearTimeout:null,IG=typeof setImmediate!=="undefined"?setImmediate:null;if(typeof IG==="function")C1=function(){IG(_H)};else if(typeof MessageChannel!=="undefined")pw=new MessageChannel,TH=pw.port2,pw.port1.onmessage=_H,C1=function(){TH.postMessage(null)};else C1=function(){CG(_H,0)};lH=SG});var pH={};MG(pH,{version:()=>oG,useFormStatus:()=>sG,useFormState:()=>iG,unstable_batchedUpdates:()=>cG,requestFormReset:()=>uG,preloadModule:()=>mG,preload:()=>dG,preinitModule:()=>pG,preinit:()=>lG,prefetchDNS:()=>gG,preconnect:()=>yG,flushSync:()=>vG,createPortal:()=>hG,__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE:()=>xG});function bG(J){var w="https://react.dev/errors/"+J;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)w+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+J+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e6(){}function JN(J,w,Z){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eO,key:Y==null?null:""+Y,children:J,containerInfo:w,implementation:Z}}function mw(J,w){if(J==="font")return"";if(typeof w==="string")return w==="use-credentials"?w:""}var fG,Q8,eO,wJ,xG,hG=function(J,w){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(bG(299));return JN(J,w,null,Z)},vG=function(J){var w=wJ.T,Z=Q8.p;try{if(wJ.T=null,Q8.p=2,J)return J()}finally{wJ.T=w,Q8.p=Z,Q8.d.f()}},yG=function(J,w){typeof J==="string"&&(w?(w=w.crossOrigin,w=typeof w==="string"?w==="use-credentials"?w:"":void 0):w=null,Q8.d.C(J,w))},gG=function(J){typeof J==="string"&&Q8.d.D(J)},lG=function(J,w){if(typeof J==="string"&&w&&typeof w.as==="string"){var Z=w.as,Y=mw(Z,w.crossOrigin),H=typeof w.integrity==="string"?w.integrity:void 0,X=typeof w.fetchPriority==="string"?w.fetchPriority:void 0;Z==="style"?Q8.d.S(J,typeof w.precedence==="string"?w.precedence:void 0,{crossOrigin:Y,integrity:H,fetchPriority:X}):Z==="script"&&Q8.d.X(J,{crossOrigin:Y,integrity:H,fetchPriority:X,nonce:typeof w.nonce==="string"?w.nonce:void 0})}},pG=function(J,w){if(typeof J==="string")if(typeof w==="object"&&w!==null){if(w.as==null||w.as==="script"){var Z=mw(w.as,w.crossOrigin);Q8.d.M(J,{crossOrigin:Z,integrity:typeof w.integrity==="string"?w.integrity:void 0,nonce:typeof w.nonce==="string"?w.nonce:void 0})}}else w==null&&Q8.d.M(J)},dG=function(J,w){if(typeof J==="string"&&typeof w==="object"&&w!==null&&typeof w.as==="string"){var Z=w.as,Y=mw(Z,w.crossOrigin);Q8.d.L(J,Z,{crossOrigin:Y,integrity:typeof w.integrity==="string"?w.integrity:void 0,nonce:typeof w.nonce==="string"?w.nonce:void 0,type:typeof w.type==="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority==="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy==="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet==="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes==="string"?w.imageSizes:void 0,media:typeof w.media==="string"?w.media:void 0})}},mG=function(J,w){if(typeof J==="string")if(w){var Z=mw(w.as,w.crossOrigin);Q8.d.m(J,{as:typeof w.as==="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Z,integrity:typeof w.integrity==="string"?w.integrity:void 0})}else Q8.d.m(J)},uG=function(J){Q8.d.r(J)},cG=function(J,w){return J(w)},iG=function(J,w,Z){return wJ.H.useFormState(J,w,Z)},sG=function(){return wJ.H.useHostTransitionStatus()},oG="19.2.0";var nG=MH(()=>{fG=r6(l7(),1);Q8={d:{f:e6,r:function(){throw Error(bG(522))},D:e6,C:e6,L:e6,m:e6,X:e6,S:e6,M:e6},p:0,findDOMNode:null},eO=Symbol.for("react.portal");wJ=fG.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;xG=Q8});var tG=DH((M_,rG)=>{nG();function aG(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aG)}catch(J){console.error(J)}}aG(),rG.exports=pH});var $W={};MG($W,{version:()=>qR,hydrateRoot:()=>GR,createRoot:()=>UR});function c(J){var w="https://react.dev/errors/"+J;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)w+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+J+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vk(J){return!(!J||J.nodeType!==1&&J.nodeType!==9&&J.nodeType!==11)}function uJ(J){var w=J,Z=J;if(J.alternate)for(;w.return;)w=w.return;else{J=w;do w=J,(w.flags&4098)!==0&&(Z=w.return),J=w.return;while(J)}return w.tag===3?Z:null}function _k(J){if(J.tag===13){var w=J.memoizedState;if(w===null&&(J=J.alternate,J!==null&&(w=J.memoizedState)),w!==null)return w.dehydrated}return null}function Ak(J){if(J.tag===31){var w=J.memoizedState;if(w===null&&(J=J.alternate,J!==null&&(w=J.memoizedState)),w!==null)return w.dehydrated}return null}function eG(J){if(uJ(J)!==J)throw Error(c(188))}function wN(J){var w=J.alternate;if(!w){if(w=uJ(J),w===null)throw Error(c(188));return w!==J?null:J}for(var Z=J,Y=w;;){var H=Z.return;if(H===null)break;var X=H.alternate;if(X===null){if(Y=H.return,Y!==null){Z=Y;continue}break}if(H.child===X.child){for(X=H.child;X;){if(X===Z)return eG(H),J;if(X===Y)return eG(H),w;X=X.sibling}throw Error(c(188))}if(Z.return!==Y.return)Z=H,Y=X;else{for(var Q=!1,W=H.child;W;){if(W===Z){Q=!0,Z=H,Y=X;break}if(W===Y){Q=!0,Y=H,Z=X;break}W=W.sibling}if(!Q){for(W=X.child;W;){if(W===Z){Q=!0,Z=X,Y=H;break}if(W===Y){Q=!0,Y=X,Z=H;break}W=W.sibling}if(!Q)throw Error(c(189))}}if(Z.alternate!==Y)throw Error(c(190))}if(Z.tag!==3)throw Error(c(188));return Z.stateNode.current===Z?J:w}function Ek(J){var w=J.tag;if(w===5||w===26||w===27||w===6)return J;for(J=J.child;J!==null;){if(w=Ek(J),w!==null)return w;J=J.sibling}return null}function ZJ(J){if(J===null||typeof J!=="object")return null;return J=Jq&&J[Jq]||J["@@iterator"],typeof J==="function"?J:null}function _X(J){if(J==null)return null;if(typeof J==="function")return J.$$typeof===HN?null:J.displayName||J.name||null;if(typeof J==="string")return J;switch(J){case v1:return"Fragment";case zX:return"Profiler";case Ik:return"StrictMode";case LX:return"Suspense";case BX:return"SuspenseList";case VX:return"Activity"}if(typeof J==="object")switch(J.$$typeof){case UJ:return"Portal";case T6:return J.displayName||"Context";case Ck:return(J._context.displayName||"Context")+".Consumer";case OQ:var w=J.render;return J=J.displayName,J||(J=w.displayName||w.name||"",J=J!==""?"ForwardRef("+J+")":"ForwardRef"),J;case NQ:return w=J.displayName||null,w!==null?w:_X(J.type)||"Memo";case J7:w=J._payload,J=J._init;try{return _X(J(w))}catch(Z){}}return null}function R6(J){return{current:J}}function i9(J){0>y1||(J.current=AX[y1],AX[y1]=null,y1--)}function D9(J,w){y1++,AX[y1]=J.current,J.current=w}function LZ(J,w){switch(D9(k7,w),D9(PJ,J),D9($6,null),w.nodeType){case 9:case 11:J=(J=w.documentElement)?(J=J.namespaceURI)?Xk(J):0:0;break;default:if(J=w.tagName,w=w.namespaceURI)w=Xk(w),J=o$(w,J);else switch(J){case"svg":J=1;break;case"math":J=2;break;default:J=0}}i9($6),D9($6,J)}function Z5(){i9($6),i9(PJ),i9(k7)}function EX(J){J.memoizedState!==null&&D9(zZ,J);var w=$6.current,Z=o$(w,J.type);w!==Z&&(D9(PJ,J),D9($6,Z))}function BZ(J){PJ.current===J&&(i9($6),i9(PJ)),zZ.current===J&&(i9(zZ),pJ._currentValue=s7)}function d7(J){if(dH===void 0)try{throw Error()}catch(Z){var w=Z.stack.trim().match(/\n( *(at )?)/);dH=w&&w[1]||"",wq=-1<Z.stack.indexOf(`
    at`)?" (<anonymous>)":-1<Z.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dH+J+wq}function uH(J,w){if(!J||mH)return"";mH=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var Y={DetermineComponentFrameRoot:function(){try{if(w){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(R){var K=R}Reflect.construct(J,[],$)}else{try{$.call()}catch(R){K=R}J.call($.prototype)}}else{try{throw Error()}catch(R){K=R}($=J())&&typeof $.catch==="function"&&$.catch(function(){})}}catch(R){if(R&&K&&typeof R.stack==="string")return[R.stack,K.stack]}return[null,null]}};Y.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var H=Object.getOwnPropertyDescriptor(Y.DetermineComponentFrameRoot,"name");H&&H.configurable&&Object.defineProperty(Y.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var X=Y.DetermineComponentFrameRoot(),Q=X[0],W=X[1];if(Q&&W){var U=Q.split(`
`),G=W.split(`
`);for(H=Y=0;Y<U.length&&!U[Y].includes("DetermineComponentFrameRoot");)Y++;for(;H<G.length&&!G[H].includes("DetermineComponentFrameRoot");)H++;if(Y===U.length||H===G.length)for(Y=U.length-1,H=G.length-1;1<=Y&&0<=H&&U[Y]!==G[H];)H--;for(;1<=Y&&0<=H;Y--,H--)if(U[Y]!==G[H]){if(Y!==1||H!==1)do if(Y--,H--,0>H||U[Y]!==G[H]){var q=`
`+U[Y].replace(" at new "," at ");return J.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",J.displayName)),q}while(1<=Y&&0<=H);break}}}finally{mH=!1,Error.prepareStackTrace=Z}return(Z=J?J.displayName||J.name:"")?d7(Z):""}function XN(J,w){switch(J.tag){case 26:case 27:case 5:return d7(J.type);case 16:return d7("Lazy");case 13:return J.child!==w&&w!==null?d7("Suspense Fallback"):d7("Suspense");case 19:return d7("SuspenseList");case 0:case 15:return uH(J.type,!1);case 11:return uH(J.type.render,!1);case 1:return uH(J.type,!0);case 31:return d7("Activity");default:return""}}function Zq(J){try{var w="",Z=null;do w+=XN(J,Z),Z=J,J=J.return;while(J);return w}catch(Y){return`
Error generating stack: `+Y.message+`
`+Y.stack}}function Q7(J){if(typeof qN==="function"&&kN(J),E8&&typeof E8.setStrictMode==="function")try{E8.setStrictMode(cJ,J)}catch(w){}}function RN(J){return J>>>=0,J===0?32:31-(KN(J)/$N|0)|0}function m7(J){var w=J&42;if(w!==0)return w;switch(J&-J){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return J&261888;case 262144:case 524288:case 1048576:case 2097152:return J&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return J&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return J}}function aZ(J,w,Z){var Y=J.pendingLanes;if(Y===0)return 0;var H=0,X=J.suspendedLanes,Q=J.pingedLanes;J=J.warmLanes;var W=Y&134217727;return W!==0?(Y=W&~X,Y!==0?H=m7(Y):(Q&=W,Q!==0?H=m7(Q):Z||(Z=W&~J,Z!==0&&(H=m7(Z))))):(W=Y&~X,W!==0?H=m7(W):Q!==0?H=m7(Q):Z||(Z=Y&~J,Z!==0&&(H=m7(Z)))),H===0?0:w!==0&&w!==H&&(w&X)===0&&(X=H&-H,Z=w&-w,X>=Z||X===32&&(Z&4194048)!==0)?w:H}function iJ(J,w){return(J.pendingLanes&~(J.suspendedLanes&~J.pingedLanes)&w)===0}function DN(J,w){switch(J){case 1:case 2:case 4:case 8:case 64:return w+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return w+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jk(){var J=sw;return sw<<=1,(sw&62914560)===0&&(sw=4194304),J}function iH(J){for(var w=[],Z=0;31>Z;Z++)w.push(J);return w}function sJ(J,w){J.pendingLanes|=w,w!==268435456&&(J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0)}function MN(J,w,Z,Y,H,X){var Q=J.pendingLanes;J.pendingLanes=Z,J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0,J.expiredLanes&=Z,J.entangledLanes&=Z,J.errorRecoveryDisabledLanes&=Z,J.shellSuspendCounter=0;var{entanglements:W,expirationTimes:U,hiddenUpdates:G}=J;for(Z=Q&~Z;0<Z;){var q=31-I8(Z),$=1<<q;W[q]=0,U[q]=-1;var K=G[q];if(K!==null)for(G[q]=null,q=0;q<K.length;q++){var R=K[q];R!==null&&(R.lane&=-536870913)}Z&=~$}Y!==0&&fk(J,Y,0),X!==0&&H===0&&J.tag!==0&&(J.suspendedLanes|=X&~(Q&~w))}function fk(J,w,Z){J.pendingLanes|=w,J.suspendedLanes&=~w;var Y=31-I8(w);J.entangledLanes|=w,J.entanglements[Y]=J.entanglements[Y]|1073741824|Z&261930}function bk(J,w){var Z=J.entangledLanes|=w;for(J=J.entanglements;Z;){var Y=31-I8(Z),H=1<<Y;H&w|J[Y]&w&&(J[Y]|=w),Z&=~H}}function xk(J,w){var Z=w&-w;return Z=(Z&42)!==0?1:zQ(Z),(Z&(J.suspendedLanes|w))!==0?0:Z}function zQ(J){switch(J){case 2:J=1;break;case 8:J=4;break;case 32:J=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:J=128;break;case 268435456:J=134217728;break;default:J=0}return J}function LQ(J){return J&=-J,2<J?8<J?(J&134217727)!==0?32:268435456:8:2}function hk(){var J=Z9.p;if(J!==0)return J;return J=window.event,J===void 0?32:XR(J.type)}function Yq(J,w){var Z=Z9.p;try{return Z9.p=J,w()}finally{Z9.p=Z}}function BQ(J){delete J[a9],delete J[M8],delete J[CX],delete J[ON],delete J[NN]}function g1(J){var w=J[a9];if(w)return w;for(var Z=J.parentNode;Z;){if(w=Z[$5]||Z[a9]){if(Z=w.alternate,w.child!==null||Z!==null&&Z.child!==null)for(J=qk(J);J!==null;){if(Z=J[a9])return Z;J=qk(J)}return w}J=Z,Z=J.parentNode}return null}function R5(J){if(J=J[a9]||J[$5]){var w=J.tag;if(w===5||w===6||w===13||w===31||w===26||w===27||w===3)return J}return null}function qJ(J){var w=J.tag;if(w===5||w===26||w===27||w===6)return J.stateNode;throw Error(c(33))}function n1(J){var w=J[Hq];return w||(w=J[Hq]={hoistableStyles:new Map,hoistableScripts:new Map}),w}function c9(J){J[oJ]=!0}function Y1(J,w){Y5(J,w),Y5(J+"Capture",w)}function Y5(J,w){yk[J]=w;for(J=0;J<w.length;J++)vk.add(w[J])}function zN(J){if(IX.call(Qq,J))return!0;if(IX.call(Xq,J))return!1;if(FN.test(J))return Qq[J]=!0;return Xq[J]=!0,!1}function HZ(J,w,Z){if(zN(w))if(Z===null)J.removeAttribute(w);else{switch(typeof Z){case"undefined":case"function":case"symbol":J.removeAttribute(w);return;case"boolean":var Y=w.toLowerCase().slice(0,5);if(Y!=="data-"&&Y!=="aria-"){J.removeAttribute(w);return}}J.setAttribute(w,""+Z)}}function ow(J,w,Z){if(Z===null)J.removeAttribute(w);else{switch(typeof Z){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(w);return}J.setAttribute(w,""+Z)}}function B6(J,w,Z,Y){if(Y===null)J.removeAttribute(Z);else{switch(typeof Y){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(Z);return}J.setAttributeNS(w,Z,""+Y)}}function y8(J){switch(typeof J){case"bigint":case"boolean":case"number":case"string":case"undefined":return J;case"object":return J;default:return""}}function gk(J){var w=J.type;return(J=J.nodeName)&&J.toLowerCase()==="input"&&(w==="checkbox"||w==="radio")}function LN(J,w,Z){var Y=Object.getOwnPropertyDescriptor(J.constructor.prototype,w);if(!J.hasOwnProperty(w)&&typeof Y!=="undefined"&&typeof Y.get==="function"&&typeof Y.set==="function"){var{get:H,set:X}=Y;return Object.defineProperty(J,w,{configurable:!0,get:function(){return H.call(this)},set:function(Q){Z=""+Q,X.call(this,Q)}}),Object.defineProperty(J,w,{enumerable:Y.enumerable}),{getValue:function(){return Z},setValue:function(Q){Z=""+Q},stopTracking:function(){J._valueTracker=null,delete J[w]}}}}function TX(J){if(!J._valueTracker){var w=gk(J)?"checked":"value";J._valueTracker=LN(J,w,""+J[w])}}function lk(J){if(!J)return!1;var w=J._valueTracker;if(!w)return!0;var Z=w.getValue(),Y="";return J&&(Y=gk(J)?J.checked?"true":"false":J.value),J=Y,J!==Z?(w.setValue(J),!0):!1}function _Z(J){if(J=J||(typeof document!=="undefined"?document:void 0),typeof J==="undefined")return null;try{return J.activeElement||J.body}catch(w){return J.body}}function p8(J){return J.replace(BN,function(w){return"\\"+w.charCodeAt(0).toString(16)+" "})}function PX(J,w,Z,Y,H,X,Q,W){if(J.name="",Q!=null&&typeof Q!=="function"&&typeof Q!=="symbol"&&typeof Q!=="boolean"?J.type=Q:J.removeAttribute("type"),w!=null)if(Q==="number"){if(w===0&&J.value===""||J.value!=w)J.value=""+y8(w)}else J.value!==""+y8(w)&&(J.value=""+y8(w));else Q!=="submit"&&Q!=="reset"||J.removeAttribute("value");w!=null?SX(J,Q,y8(w)):Z!=null?SX(J,Q,y8(Z)):Y!=null&&J.removeAttribute("value"),H==null&&X!=null&&(J.defaultChecked=!!X),H!=null&&(J.checked=H&&typeof H!=="function"&&typeof H!=="symbol"),W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"?J.name=""+y8(W):J.removeAttribute("name")}function pk(J,w,Z,Y,H,X,Q,W){if(X!=null&&typeof X!=="function"&&typeof X!=="symbol"&&typeof X!=="boolean"&&(J.type=X),w!=null||Z!=null){if(!(X!=="submit"&&X!=="reset"||w!==void 0&&w!==null)){TX(J);return}Z=Z!=null?""+y8(Z):"",w=w!=null?""+y8(w):Z,W||w===J.value||(J.value=w),J.defaultValue=w}Y=Y!=null?Y:H,Y=typeof Y!=="function"&&typeof Y!=="symbol"&&!!Y,J.checked=W?J.checked:!!Y,J.defaultChecked=!!Y,Q!=null&&typeof Q!=="function"&&typeof Q!=="symbol"&&typeof Q!=="boolean"&&(J.name=Q),TX(J)}function SX(J,w,Z){w==="number"&&_Z(J.ownerDocument)===J||J.defaultValue===""+Z||(J.defaultValue=""+Z)}function a1(J,w,Z,Y){if(J=J.options,w){w={};for(var H=0;H<Z.length;H++)w["$"+Z[H]]=!0;for(Z=0;Z<J.length;Z++)H=w.hasOwnProperty("$"+J[Z].value),J[Z].selected!==H&&(J[Z].selected=H),H&&Y&&(J[Z].defaultSelected=!0)}else{Z=""+y8(Z),w=null;for(H=0;H<J.length;H++){if(J[H].value===Z){J[H].selected=!0,Y&&(J[H].defaultSelected=!0);return}w!==null||J[H].disabled||(w=J[H])}w!==null&&(w.selected=!0)}}function dk(J,w,Z){if(w!=null&&(w=""+y8(w),w!==J.value&&(J.value=w),Z==null)){J.defaultValue!==w&&(J.defaultValue=w);return}J.defaultValue=Z!=null?""+y8(Z):""}function mk(J,w,Z,Y){if(w==null){if(Y!=null){if(Z!=null)throw Error(c(92));if(GJ(Y)){if(1<Y.length)throw Error(c(93));Y=Y[0]}Z=Y}Z==null&&(Z=""),w=Z}Z=y8(w),J.defaultValue=Z,Y=J.textContent,Y===Z&&Y!==""&&Y!==null&&(J.value=Y),TX(J)}function H5(J,w){if(w){var Z=J.firstChild;if(Z&&Z===J.lastChild&&Z.nodeType===3){Z.nodeValue=w;return}}J.textContent=w}function Wq(J,w,Z){var Y=w.indexOf("--")===0;Z==null||typeof Z==="boolean"||Z===""?Y?J.setProperty(w,""):w==="float"?J.cssFloat="":J[w]="":Y?J.setProperty(w,Z):typeof Z!=="number"||Z===0||VN.has(w)?w==="float"?J.cssFloat=Z:J[w]=(""+Z).trim():J[w]=Z+"px"}function uk(J,w,Z){if(w!=null&&typeof w!=="object")throw Error(c(62));if(J=J.style,Z!=null){for(var Y in Z)!Z.hasOwnProperty(Y)||w!=null&&w.hasOwnProperty(Y)||(Y.indexOf("--")===0?J.setProperty(Y,""):Y==="float"?J.cssFloat="":J[Y]="");for(var H in w)Y=w[H],w.hasOwnProperty(H)&&Z[H]!==Y&&Wq(J,H,Y)}else for(var X in w)w.hasOwnProperty(X)&&Wq(J,X,w[X])}function VQ(J){if(J.indexOf("-")===-1)return!1;switch(J){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function XZ(J){return AN.test(""+J)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":J}function P6(){}function _Q(J){return J=J.target||J.srcElement||window,J.correspondingUseElement&&(J=J.correspondingUseElement),J.nodeType===3?J.parentNode:J}function Uq(J){var w=R5(J);if(w&&(J=w.stateNode)){var Z=J[M8]||null;J:switch(J=w.stateNode,w.type){case"input":if(PX(J,Z.value,Z.defaultValue,Z.defaultValue,Z.checked,Z.defaultChecked,Z.type,Z.name),w=Z.name,Z.type==="radio"&&w!=null){for(Z=J;Z.parentNode;)Z=Z.parentNode;Z=Z.querySelectorAll('input[name="'+p8(""+w)+'"][type="radio"]');for(w=0;w<Z.length;w++){var Y=Z[w];if(Y!==J&&Y.form===J.form){var H=Y[M8]||null;if(!H)throw Error(c(90));PX(Y,H.value,H.defaultValue,H.defaultValue,H.checked,H.defaultChecked,H.type,H.name)}}for(w=0;w<Z.length;w++)Y=Z[w],Y.form===J.form&&lk(Y)}break J;case"textarea":dk(J,Z.value,Z.defaultValue);break J;case"select":w=Z.value,w!=null&&a1(J,!!Z.multiple,w,!1)}}}function ck(J,w,Z){if(sH)return J(w,Z);sH=!0;try{var Y=J(w);return Y}finally{if(sH=!1,l1!==null||r1!==null){if(UY(),l1&&(w=l1,J=r1,r1=l1=null,Uq(w),J))for(w=0;w<J.length;w++)Uq(J[w])}}}function SJ(J,w){var Z=J.stateNode;if(Z===null)return null;var Y=Z[M8]||null;if(Y===null)return null;Z=Y[w];J:switch(w){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(Y=!Y.disabled)||(J=J.type,Y=!(J==="button"||J==="input"||J==="select"||J==="textarea")),J=!Y;break J;default:J=!1}if(J)return null;if(Z&&typeof Z!=="function")throw Error(c(231,w,typeof Z));return Z}function ik(){if(QZ)return QZ;var J,w=AQ,Z=w.length,Y,H="value"in W7?W7.value:W7.textContent,X=H.length;for(J=0;J<Z&&w[J]===H[J];J++);var Q=Z-J;for(Y=1;Y<=Q&&w[Z-Y]===H[X-Y];Y++);return QZ=H.slice(J,1<Y?1-Y:void 0)}function WZ(J){var w=J.keyCode;return"charCode"in J?(J=J.charCode,J===0&&w===13&&(J=13)):J=w,J===10&&(J=13),32<=J||J===13?J:0}function nw(){return!0}function Gq(){return!1}function O8(J){function w(Z,Y,H,X,Q){this._reactName=Z,this._targetInst=H,this.type=Y,this.nativeEvent=X,this.target=Q,this.currentTarget=null;for(var W in J)J.hasOwnProperty(W)&&(Z=J[W],this[W]=Z?Z(X):X[W]);return this.isDefaultPrevented=(X.defaultPrevented!=null?X.defaultPrevented:X.returnValue===!1)?nw:Gq,this.isPropagationStopped=Gq,this}return L9(w.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Z=this.nativeEvent;Z&&(Z.preventDefault?Z.preventDefault():typeof Z.returnValue!=="unknown"&&(Z.returnValue=!1),this.isDefaultPrevented=nw)},stopPropagation:function(){var Z=this.nativeEvent;Z&&(Z.stopPropagation?Z.stopPropagation():typeof Z.cancelBubble!=="unknown"&&(Z.cancelBubble=!0),this.isPropagationStopped=nw)},persist:function(){},isPersistent:nw}),w}function yN(J){var w=this.nativeEvent;return w.getModifierState?w.getModifierState(J):(J=vN[J])?!!w[J]:!1}function EQ(){return yN}function ok(J,w){switch(J){case"keyup":return aN.indexOf(w.keyCode)!==-1;case"keydown":return w.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nk(J){return J=J.detail,typeof J==="object"&&"data"in J?J.data:null}function tN(J,w){switch(J){case"compositionend":return nk(w);case"keypress":if(w.which!==32)return null;return Rq=!0,$q;case"textInput":return J=w.data,J===$q&&Rq?null:J;default:return null}}function eN(J,w){if(p1)return J==="compositionend"||!IQ&&ok(J,w)?(J=ik(),QZ=AQ=W7=null,p1=!1,J):null;switch(J){case"paste":return null;case"keypress":if(!(w.ctrlKey||w.altKey||w.metaKey)||w.ctrlKey&&w.altKey){if(w.char&&1<w.char.length)return w.char;if(w.which)return String.fromCharCode(w.which)}return null;case"compositionend":return sk&&w.locale!=="ko"?null:w.data;default:return null}}function Dq(J){var w=J&&J.nodeName&&J.nodeName.toLowerCase();return w==="input"?!!JF[J.type]:w==="textarea"?!0:!1}function ak(J,w,Z,Y){l1?r1?r1.push(Y):r1=[Y]:l1=Y,w=dZ(w,"onChange"),0<w.length&&(Z=new rZ("onChange","change",null,Z,Y),J.push({event:Z,listeners:w}))}function wF(J){c$(J,0)}function eZ(J){var w=qJ(J);if(lk(w))return J}function Mq(J,w){if(J==="change")return w}function Oq(){NJ&&(NJ.detachEvent("onpropertychange",tk),jJ=NJ=null)}function tk(J){if(J.propertyName==="value"&&eZ(jJ)){var w=[];ak(w,jJ,J,_Q(J)),ck(wF,w)}}function ZF(J,w,Z){J==="focusin"?(Oq(),NJ=w,jJ=Z,NJ.attachEvent("onpropertychange",tk)):J==="focusout"&&Oq()}function YF(J){if(J==="selectionchange"||J==="keyup"||J==="keydown")return eZ(jJ)}function HF(J,w){if(J==="click")return eZ(w)}function XF(J,w){if(J==="input"||J==="change")return eZ(w)}function QF(J,w){return J===w&&(J!==0||1/J===1/w)||J!==J&&w!==w}function fJ(J,w){if(T8(J,w))return!0;if(typeof J!=="object"||J===null||typeof w!=="object"||w===null)return!1;var Z=Object.keys(J),Y=Object.keys(w);if(Z.length!==Y.length)return!1;for(Y=0;Y<Z.length;Y++){var H=Z[Y];if(!IX.call(w,H)||!T8(J[H],w[H]))return!1}return!0}function Nq(J){for(;J&&J.firstChild;)J=J.firstChild;return J}function Fq(J,w){var Z=Nq(J);J=0;for(var Y;Z;){if(Z.nodeType===3){if(Y=J+Z.textContent.length,J<=w&&Y>=w)return{node:Z,offset:w-J};J=Y}J:{for(;Z;){if(Z.nextSibling){Z=Z.nextSibling;break J}Z=Z.parentNode}Z=void 0}Z=Nq(Z)}}function ek(J,w){return J&&w?J===w?!0:J&&J.nodeType===3?!1:w&&w.nodeType===3?ek(J,w.parentNode):("contains"in J)?J.contains(w):J.compareDocumentPosition?!!(J.compareDocumentPosition(w)&16):!1:!1}function JK(J){J=J!=null&&J.ownerDocument!=null&&J.ownerDocument.defaultView!=null?J.ownerDocument.defaultView:window;for(var w=_Z(J.document);w instanceof J.HTMLIFrameElement;){try{var Z=typeof w.contentWindow.location.href==="string"}catch(Y){Z=!1}if(Z)J=w.contentWindow;else break;w=_Z(J.document)}return w}function CQ(J){var w=J&&J.nodeName&&J.nodeName.toLowerCase();return w&&(w==="input"&&(J.type==="text"||J.type==="search"||J.type==="tel"||J.type==="url"||J.type==="password")||w==="textarea"||J.contentEditable==="true")}function zq(J,w,Z){var Y=Z.window===Z?Z.document:Z.nodeType===9?Z:Z.ownerDocument;xX||d1==null||d1!==_Z(Y)||(Y=d1,("selectionStart"in Y)&&CQ(Y)?Y={start:Y.selectionStart,end:Y.selectionEnd}:(Y=(Y.ownerDocument&&Y.ownerDocument.defaultView||window).getSelection(),Y={anchorNode:Y.anchorNode,anchorOffset:Y.anchorOffset,focusNode:Y.focusNode,focusOffset:Y.focusOffset}),FJ&&fJ(FJ,Y)||(FJ=Y,Y=dZ(bX,"onSelect"),0<Y.length&&(w=new rZ("onSelect","select",null,w,Z),J.push({event:w,listeners:Y}),w.target=d1)))}function p7(J,w){var Z={};return Z[J.toLowerCase()]=w.toLowerCase(),Z["Webkit"+J]="webkit"+w,Z["Moz"+J]="moz"+w,Z}function X1(J){if(rH[J])return rH[J];if(!m1[J])return J;var w=m1[J],Z;for(Z in w)if(w.hasOwnProperty(Z)&&Z in wK)return rH[J]=w[Z];return J}function w6(J,w){QK.set(J,w),Y1(w,[J])}function JY(){for(var J=u1,w=TQ=u1=0;w<J;){var Z=v8[w];v8[w++]=null;var Y=v8[w];v8[w++]=null;var H=v8[w];v8[w++]=null;var X=v8[w];if(v8[w++]=null,Y!==null&&H!==null){var Q=Y.pending;Q===null?H.next=H:(H.next=Q.next,Q.next=H),Y.pending=H}X!==0&&WK(Z,H,X)}}function wY(J,w,Z,Y){v8[u1++]=J,v8[u1++]=w,v8[u1++]=Z,v8[u1++]=Y,TQ|=Y,J.lanes|=Y,J=J.alternate,J!==null&&(J.lanes|=Y)}function PQ(J,w,Z,Y){return wY(J,w,Z,Y),EZ(J)}function Q1(J,w){return wY(J,null,null,w),EZ(J)}function WK(J,w,Z){J.lanes|=Z;var Y=J.alternate;Y!==null&&(Y.lanes|=Z);for(var H=!1,X=J.return;X!==null;)X.childLanes|=Z,Y=X.alternate,Y!==null&&(Y.childLanes|=Z),X.tag===22&&(J=X.stateNode,J===null||J._visibility&1||(H=!0)),J=X,X=X.return;return J.tag===3?(X=J.stateNode,H&&w!==null&&(H=31-I8(Z),J=X.hiddenUpdates,Y=J[H],Y===null?J[H]=[w]:Y.push(w),w.lane=Z|536870912),X):null}function EZ(J){if(50<CJ)throw CJ=0,YQ=null,Error(c(185));for(var w=J.return;w!==null;)J=w,w=J.return;return J.tag===3?J.stateNode:null}function kF(J,w,Z,Y){this.tag=J,this.key=Z,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=w,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=Y,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function V8(J,w,Z,Y){return new kF(J,w,Z,Y)}function SQ(J){return J=J.prototype,!(!J||!J.isReactComponent)}function j6(J,w){var Z=J.alternate;return Z===null?(Z=V8(J.tag,w,J.key,J.mode),Z.elementType=J.elementType,Z.type=J.type,Z.stateNode=J.stateNode,Z.alternate=J,J.alternate=Z):(Z.pendingProps=w,Z.type=J.type,Z.flags=0,Z.subtreeFlags=0,Z.deletions=null),Z.flags=J.flags&65011712,Z.childLanes=J.childLanes,Z.lanes=J.lanes,Z.child=J.child,Z.memoizedProps=J.memoizedProps,Z.memoizedState=J.memoizedState,Z.updateQueue=J.updateQueue,w=J.dependencies,Z.dependencies=w===null?null:{lanes:w.lanes,firstContext:w.firstContext},Z.sibling=J.sibling,Z.index=J.index,Z.ref=J.ref,Z.refCleanup=J.refCleanup,Z}function UK(J,w){J.flags&=65011714;var Z=J.alternate;return Z===null?(J.childLanes=0,J.lanes=w,J.child=null,J.subtreeFlags=0,J.memoizedProps=null,J.memoizedState=null,J.updateQueue=null,J.dependencies=null,J.stateNode=null):(J.childLanes=Z.childLanes,J.lanes=Z.lanes,J.child=Z.child,J.subtreeFlags=0,J.deletions=null,J.memoizedProps=Z.memoizedProps,J.memoizedState=Z.memoizedState,J.updateQueue=Z.updateQueue,J.type=Z.type,w=Z.dependencies,J.dependencies=w===null?null:{lanes:w.lanes,firstContext:w.firstContext}),J}function GZ(J,w,Z,Y,H,X){var Q=0;if(Y=J,typeof J==="function")SQ(J)&&(Q=1);else if(typeof J==="string")Q=Rz(J,Z,$6.current)?26:J==="html"||J==="head"||J==="body"?27:5;else J:switch(J){case VX:return J=V8(31,Z,w,H),J.elementType=VX,J.lanes=X,J;case v1:return o7(Z.children,H,X,w);case Ik:Q=8,H|=24;break;case zX:return J=V8(12,Z,w,H|2),J.elementType=zX,J.lanes=X,J;case LX:return J=V8(13,Z,w,H),J.elementType=LX,J.lanes=X,J;case BX:return J=V8(19,Z,w,H),J.elementType=BX,J.lanes=X,J;default:if(typeof J==="object"&&J!==null)switch(J.$$typeof){case T6:Q=10;break J;case Ck:Q=9;break J;case OQ:Q=11;break J;case NQ:Q=14;break J;case J7:Q=16,Y=null;break J}Q=29,Z=Error(c(130,J===null?"null":typeof J,"")),Y=null}return w=V8(Q,Z,w,H),w.elementType=J,w.type=Y,w.lanes=X,w}function o7(J,w,Z,Y){return J=V8(7,J,Y,w),J.lanes=Z,J}function tH(J,w,Z){return J=V8(6,J,null,w),J.lanes=Z,J}function GK(J){var w=V8(18,null,null,0);return w.stateNode=J,w}function eH(J,w,Z){return w=V8(4,J.children!==null?J.children:[],J.key,w),w.lanes=Z,w.stateNode={containerInfo:J.containerInfo,pendingChildren:null,implementation:J.implementation},w}function d8(J,w){if(typeof J==="object"&&J!==null){var Z=Lq.get(J);if(Z!==void 0)return Z;return w={value:J,source:w,stack:Zq(w)},Lq.set(J,w),w}return{value:J,source:w,stack:Zq(w)}}function I6(J,w){i1[s1++]=bJ,i1[s1++]=IZ,IZ=J,bJ=w}function qK(J,w,Z){g8[l8++]=q6,g8[l8++]=k6,g8[l8++]=z7,z7=J;var Y=q6;J=k6;var H=32-I8(Y)-1;Y&=~(1<<H),Z+=1;var X=32-I8(w)+H;if(30<X){var Q=H-H%5;X=(Y&(1<<Q)-1).toString(32),Y>>=Q,H-=Q,q6=1<<32-I8(w)+H|Z<<H|Y,k6=X+J}else q6=1<<X|Z<<H|Y,k6=J}function jQ(J){J.return!==null&&(I6(J,1),qK(J,1,0))}function fQ(J){for(;J===IZ;)IZ=i1[--s1],i1[s1]=null,bJ=i1[--s1],i1[s1]=null;for(;J===z7;)z7=g8[--l8],g8[l8]=null,k6=g8[--l8],g8[l8]=null,q6=g8[--l8],g8[l8]=null}function kK(J,w){g8[l8++]=q6,g8[l8++]=k6,g8[l8++]=z7,q6=w.id,k6=w.overflow,z7=J}function L7(J){var w=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xJ(d8(w,J)),vX}function Bq(J){var{stateNode:w,type:Z,memoizedProps:Y}=J;switch(w[a9]=J,w[M8]=Y,Z){case"dialog":u0("cancel",w),u0("close",w);break;case"iframe":case"object":case"embed":u0("load",w);break;case"video":case"audio":for(Z=0;Z<gJ.length;Z++)u0(gJ[Z],w);break;case"source":u0("error",w);break;case"img":case"image":case"link":u0("error",w),u0("load",w);break;case"details":u0("toggle",w);break;case"input":u0("invalid",w),pk(w,Y.value,Y.defaultValue,Y.checked,Y.defaultChecked,Y.type,Y.name,!0);break;case"select":u0("invalid",w);break;case"textarea":u0("invalid",w),mk(w,Y.value,Y.defaultValue,Y.children)}Z=Y.children,typeof Z!=="string"&&typeof Z!=="number"&&typeof Z!=="bigint"||w.textContent===""+Z||Y.suppressHydrationWarning===!0||s$(w.textContent,Z)?(Y.popover!=null&&(u0("beforetoggle",w),u0("toggle",w)),Y.onScroll!=null&&u0("scroll",w),Y.onScrollEnd!=null&&u0("scrollend",w),Y.onClick!=null&&(w.onclick=P6),w=!0):w=!1,w||L7(J,!0)}function Vq(J){for(r9=J.return;r9;)switch(r9.tag){case 5:case 31:case 13:m8=!1;return;case 27:case 3:m8=!0;return;default:r9=r9.return}}function j1(J){if(J!==r9)return!1;if(!a0)return Vq(J),a0=!0,!1;var w=J.tag,Z;if(Z=w!==3&&w!==27){if(Z=w===5)Z=J.type,Z=!(Z!=="form"&&Z!=="button")||qQ(J.type,J.memoizedProps);Z=!Z}if(Z&&z9&&L7(J),Vq(J),w===13){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(317));z9=Gk(J)}else if(w===31){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(317));z9=Gk(J)}else w===27?(w=z9,A7(J.type)?(J=RQ,RQ=null,z9=J):z9=w):z9=r9?c8(J.stateNode.nextSibling):null;return!0}function t7(){z9=r9=null,a0=!1}function JX(){var J=K7;return J!==null&&(R8===null?R8=J:R8.push.apply(R8,J),K7=null),J}function xJ(J){K7===null?K7=[J]:K7.push(J)}function Z7(J,w,Z){D9(yX,w._currentValue),w._currentValue=Z}function f6(J){J._currentValue=yX.current,i9(yX)}function gX(J,w,Z){for(;J!==null;){var Y=J.alternate;if((J.childLanes&w)!==w?(J.childLanes|=w,Y!==null&&(Y.childLanes|=w)):Y!==null&&(Y.childLanes&w)!==w&&(Y.childLanes|=w),J===Z)break;J=J.return}}function lX(J,w,Z,Y){var H=J.child;H!==null&&(H.return=J);for(;H!==null;){var X=H.dependencies;if(X!==null){var Q=H.child;X=X.firstContext;J:for(;X!==null;){var W=X;X=H;for(var U=0;U<w.length;U++)if(W.context===w[U]){X.lanes|=Z,W=X.alternate,W!==null&&(W.lanes|=Z),gX(X.return,Z,J),Y||(Q=null);break J}X=W.next}}else if(H.tag===18){if(Q=H.return,Q===null)throw Error(c(341));Q.lanes|=Z,X=Q.alternate,X!==null&&(X.lanes|=Z),gX(Q,Z,J),Q=null}else Q=H.child;if(Q!==null)Q.return=H;else for(Q=H;Q!==null;){if(Q===J){Q=null;break}if(H=Q.sibling,H!==null){H.return=Q.return,Q=H;break}Q=Q.return}H=Q}}function D5(J,w,Z,Y){J=null;for(var H=w,X=!1;H!==null;){if(!X){if((H.flags&524288)!==0)X=!0;else if((H.flags&262144)!==0)break}if(H.tag===10){var Q=H.alternate;if(Q===null)throw Error(c(387));if(Q=Q.memoizedProps,Q!==null){var W=H.type;T8(H.pendingProps.value,Q.value)||(J!==null?J.push(W):J=[W])}}else if(H===zZ.current){if(Q=H.alternate,Q===null)throw Error(c(387));Q.memoizedState.memoizedState!==H.memoizedState.memoizedState&&(J!==null?J.push(pJ):J=[pJ])}H=H.return}J!==null&&lX(w,J,Z,Y),w.flags|=262144}function CZ(J){for(J=J.firstContext;J!==null;){if(!T8(J.context._currentValue,J.memoizedValue))return!0;J=J.next}return!1}function e7(J){W1=J,S6=null,J=J.dependencies,J!==null&&(J.firstContext=null)}function t9(J){return KK(W1,J)}function aw(J,w){return W1===null&&e7(J),KK(J,w)}function KK(J,w){var Z=w._currentValue;if(w={context:w,memoizedValue:Z,next:null},S6===null){if(J===null)throw Error(c(308));S6=w,J.dependencies={lanes:0,firstContext:w},J.flags|=524288}else S6=S6.next=w;return Z}function bQ(){return{controller:new KF,data:new Map,refCount:0}}function aJ(J){J.refCount--,J.refCount===0&&$F(RF,function(){J.controller.abort()})}function DF(J,w){if(zJ===null){var Z=zJ=[];pX=0,X5=XW(),t1={status:"pending",value:void 0,then:function(Y){Z.push(Y)}}}return pX++,w.then(_q,_q),w}function _q(){if(--pX===0&&zJ!==null){t1!==null&&(t1.status="fulfilled");var J=zJ;zJ=null,X5=0,t1=null;for(var w=0;w<J.length;w++)J[w]()}}function MF(J,w){var Z=[],Y={status:"pending",value:null,reason:null,then:function(H){Z.push(H)}};return J.then(function(){Y.status="fulfilled",Y.value=w;for(var H=0;H<Z.length;H++)Z[H](w)},function(H){Y.status="rejected",Y.reason=H;for(H=0;H<Z.length;H++)Z[H](void 0)}),Y}function xQ(){var J=n7.current;return J!==null?J:R9.pooledCache}function qZ(J,w){w===null?D9(n7,n7.current):D9(n7,w.pool)}function $K(){var J=xQ();return J===null?null:{parent:h9._currentValue,pool:J}}function Eq(J){return J=J.status,J==="fulfilled"||J==="rejected"}function RK(J,w,Z){switch(Z=J[Z],Z===void 0?J.push(w):Z!==w&&(w.then(P6,P6),w=Z),w.status){case"fulfilled":return w.value;case"rejected":throw J=w.reason,Cq(J),J;default:if(typeof w.status==="string")w.then(P6,P6);else{if(J=R9,J!==null&&100<J.shellSuspendCounter)throw Error(c(482));J=w,J.status="pending",J.then(function(Y){if(w.status==="pending"){var H=w;H.status="fulfilled",H.value=Y}},function(Y){if(w.status==="pending"){var H=w;H.status="rejected",H.reason=Y}})}switch(w.status){case"fulfilled":return w.value;case"rejected":throw J=w.reason,Cq(J),J}throw a7=w,M5}}function c7(J){try{var w=J._init;return w(J._payload)}catch(Z){if(Z!==null&&typeof Z==="object"&&typeof Z.then==="function")throw a7=Z,M5;throw Z}}function Iq(){if(a7===null)throw Error(c(459));var J=a7;return a7=null,J}function Cq(J){if(J===M5||J===ZY)throw Error(c(483))}function rw(J){var w=hJ;return hJ+=1,e1===null&&(e1=[]),RK(e1,J,w)}function HJ(J,w){w=w.props.ref,J.ref=w!==void 0?w:null}function tw(J,w){if(w.$$typeof===ZN)throw Error(c(525));throw J=Object.prototype.toString.call(w),Error(c(31,J==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":J))}function DK(J){function w(k,O){if(J){var D=k.deletions;D===null?(k.deletions=[O],k.flags|=16):D.push(O)}}function Z(k,O){if(!J)return null;for(;O!==null;)w(k,O),O=O.sibling;return null}function Y(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function H(k,O){return k=j6(k,O),k.index=0,k.sibling=null,k}function X(k,O,D){if(k.index=D,!J)return k.flags|=1048576,O;if(D=k.alternate,D!==null)return D=D.index,D<O?(k.flags|=67108866,O):D;return k.flags|=67108866,O}function Q(k){return J&&k.alternate===null&&(k.flags|=67108866),k}function W(k,O,D,L){if(O===null||O.tag!==6)return O=tH(D,k.mode,L),O.return=k,O;return O=H(O,D),O.return=k,O}function U(k,O,D,L){var T=D.type;if(T===v1)return q(k,O,D.props.children,L,D.key);if(O!==null&&(O.elementType===T||typeof T==="object"&&T!==null&&T.$$typeof===J7&&c7(T)===O.type))return O=H(O,D.props),HJ(O,D),O.return=k,O;return O=GZ(D.type,D.key,D.props,null,k.mode,L),HJ(O,D),O.return=k,O}function G(k,O,D,L){if(O===null||O.tag!==4||O.stateNode.containerInfo!==D.containerInfo||O.stateNode.implementation!==D.implementation)return O=eH(D,k.mode,L),O.return=k,O;return O=H(O,D.children||[]),O.return=k,O}function q(k,O,D,L,T){if(O===null||O.tag!==7)return O=o7(D,k.mode,L,T),O.return=k,O;return O=H(O,D),O.return=k,O}function $(k,O,D){if(typeof O==="string"&&O!==""||typeof O==="number"||typeof O==="bigint")return O=tH(""+O,k.mode,D),O.return=k,O;if(typeof O==="object"&&O!==null){switch(O.$$typeof){case uw:return D=GZ(O.type,O.key,O.props,null,k.mode,D),HJ(D,O),D.return=k,D;case UJ:return O=eH(O,k.mode,D),O.return=k,O;case J7:return O=c7(O),$(k,O,D)}if(GJ(O)||ZJ(O))return O=o7(O,k.mode,D,null),O.return=k,O;if(typeof O.then==="function")return $(k,rw(O),D);if(O.$$typeof===T6)return $(k,aw(k,O),D);tw(k,O)}return null}function K(k,O,D,L){var T=O!==null?O.key:null;if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return T!==null?null:W(k,O,""+D,L);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case uw:return D.key===T?U(k,O,D,L):null;case UJ:return D.key===T?G(k,O,D,L):null;case J7:return D=c7(D),K(k,O,D,L)}if(GJ(D)||ZJ(D))return T!==null?null:q(k,O,D,L,null);if(typeof D.then==="function")return K(k,O,rw(D),L);if(D.$$typeof===T6)return K(k,O,aw(k,D),L);tw(k,D)}return null}function R(k,O,D,L,T){if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return k=k.get(D)||null,W(O,k,""+L,T);if(typeof L==="object"&&L!==null){switch(L.$$typeof){case uw:return k=k.get(L.key===null?D:L.key)||null,U(O,k,L,T);case UJ:return k=k.get(L.key===null?D:L.key)||null,G(O,k,L,T);case J7:return L=c7(L),R(k,O,D,L,T)}if(GJ(L)||ZJ(L))return k=k.get(D)||null,q(O,k,L,T,null);if(typeof L.then==="function")return R(k,O,D,rw(L),T);if(L.$$typeof===T6)return R(k,O,D,aw(O,L),T);tw(O,L)}return null}function z(k,O,D,L){for(var T=null,E=null,A=O,j=O=0,_=null;A!==null&&j<D.length;j++){A.index>j?(_=A,A=null):_=A.sibling;var F=K(k,A,D[j],L);if(F===null){A===null&&(A=_);break}J&&A&&F.alternate===null&&w(k,A),O=X(F,O,j),E===null?T=F:E.sibling=F,E=F,A=_}if(j===D.length)return Z(k,A),a0&&I6(k,j),T;if(A===null){for(;j<D.length;j++)A=$(k,D[j],L),A!==null&&(O=X(A,O,j),E===null?T=A:E.sibling=A,E=A);return a0&&I6(k,j),T}for(A=Y(A);j<D.length;j++)_=R(A,k,j,D[j],L),_!==null&&(J&&_.alternate!==null&&A.delete(_.key===null?j:_.key),O=X(_,O,j),E===null?T=_:E.sibling=_,E=_);return J&&A.forEach(function(C){return w(k,C)}),a0&&I6(k,j),T}function B(k,O,D,L){if(D==null)throw Error(c(151));for(var T=null,E=null,A=O,j=O=0,_=null,F=D.next();A!==null&&!F.done;j++,F=D.next()){A.index>j?(_=A,A=null):_=A.sibling;var C=K(k,A,F.value,L);if(C===null){A===null&&(A=_);break}J&&A&&C.alternate===null&&w(k,A),O=X(C,O,j),E===null?T=C:E.sibling=C,E=C,A=_}if(F.done)return Z(k,A),a0&&I6(k,j),T;if(A===null){for(;!F.done;j++,F=D.next())F=$(k,F.value,L),F!==null&&(O=X(F,O,j),E===null?T=F:E.sibling=F,E=F);return a0&&I6(k,j),T}for(A=Y(A);!F.done;j++,F=D.next())F=R(A,k,j,F.value,L),F!==null&&(J&&F.alternate!==null&&A.delete(F.key===null?j:F.key),O=X(F,O,j),E===null?T=F:E.sibling=F,E=F);return J&&A.forEach(function(y){return w(k,y)}),a0&&I6(k,j),T}function M(k,O,D,L){if(typeof D==="object"&&D!==null&&D.type===v1&&D.key===null&&(D=D.props.children),typeof D==="object"&&D!==null){switch(D.$$typeof){case uw:J:{for(var T=D.key;O!==null;){if(O.key===T){if(T=D.type,T===v1){if(O.tag===7){Z(k,O.sibling),L=H(O,D.props.children),L.return=k,k=L;break J}}else if(O.elementType===T||typeof T==="object"&&T!==null&&T.$$typeof===J7&&c7(T)===O.type){Z(k,O.sibling),L=H(O,D.props),HJ(L,D),L.return=k,k=L;break J}Z(k,O);break}else w(k,O);O=O.sibling}D.type===v1?(L=o7(D.props.children,k.mode,L,D.key),L.return=k,k=L):(L=GZ(D.type,D.key,D.props,null,k.mode,L),HJ(L,D),L.return=k,k=L)}return Q(k);case UJ:J:{for(T=D.key;O!==null;){if(O.key===T)if(O.tag===4&&O.stateNode.containerInfo===D.containerInfo&&O.stateNode.implementation===D.implementation){Z(k,O.sibling),L=H(O,D.children||[]),L.return=k,k=L;break J}else{Z(k,O);break}else w(k,O);O=O.sibling}L=eH(D,k.mode,L),L.return=k,k=L}return Q(k);case J7:return D=c7(D),M(k,O,D,L)}if(GJ(D))return z(k,O,D,L);if(ZJ(D)){if(T=ZJ(D),typeof T!=="function")throw Error(c(150));return D=T.call(D),B(k,O,D,L)}if(typeof D.then==="function")return M(k,O,rw(D),L);if(D.$$typeof===T6)return M(k,O,aw(k,D),L);tw(k,D)}return typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint"?(D=""+D,O!==null&&O.tag===6?(Z(k,O.sibling),L=H(O,D),L.return=k,k=L):(Z(k,O),L=tH(D,k.mode,L),L.return=k,k=L),Q(k)):Z(k,O)}return function(k,O,D,L){try{hJ=0;var T=M(k,O,D,L);return e1=null,T}catch(A){if(A===M5||A===ZY)throw A;var E=V8(29,A,null,k.mode);return E.lanes=L,E.return=k,E}finally{}}}function vQ(J){J.updateQueue={baseState:J.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dX(J,w){J=J.updateQueue,w.updateQueue===J&&(w.updateQueue={baseState:J.baseState,firstBaseUpdate:J.firstBaseUpdate,lastBaseUpdate:J.lastBaseUpdate,shared:J.shared,callbacks:null})}function $7(J){return{lane:J,tag:0,payload:null,callback:null,next:null}}function R7(J,w,Z){var Y=J.updateQueue;if(Y===null)return null;if(Y=Y.shared,(w9&2)!==0){var H=Y.pending;return H===null?w.next=w:(w.next=H.next,H.next=w),Y.pending=w,w=EZ(J),WK(J,null,Z),w}return wY(J,Y,w,Z),EZ(J)}function LJ(J,w,Z){if(w=w.updateQueue,w!==null&&(w=w.shared,(Z&4194048)!==0)){var Y=w.lanes;Y&=J.pendingLanes,Z|=Y,w.lanes=Z,bk(J,Z)}}function wX(J,w){var{updateQueue:Z,alternate:Y}=J;if(Y!==null&&(Y=Y.updateQueue,Z===Y)){var H=null,X=null;if(Z=Z.firstBaseUpdate,Z!==null){do{var Q={lane:Z.lane,tag:Z.tag,payload:Z.payload,callback:null,next:null};X===null?H=X=Q:X=X.next=Q,Z=Z.next}while(Z!==null);X===null?H=X=w:X=X.next=w}else H=X=w;Z={baseState:Y.baseState,firstBaseUpdate:H,lastBaseUpdate:X,shared:Y.shared,callbacks:Y.callbacks},J.updateQueue=Z;return}J=Z.lastBaseUpdate,J===null?Z.firstBaseUpdate=w:J.next=w,Z.lastBaseUpdate=w}function BJ(){if(mX){var J=t1;if(J!==null)throw J}}function VJ(J,w,Z,Y){mX=!1;var H=J.updateQueue;w7=!1;var{firstBaseUpdate:X,lastBaseUpdate:Q}=H,W=H.shared.pending;if(W!==null){H.shared.pending=null;var U=W,G=U.next;U.next=null,Q===null?X=G:Q.next=G,Q=U;var q=J.alternate;q!==null&&(q=q.updateQueue,W=q.lastBaseUpdate,W!==Q&&(W===null?q.firstBaseUpdate=G:W.next=G,q.lastBaseUpdate=U))}if(X!==null){var $=H.baseState;Q=0,q=G=U=null,W=X;do{var K=W.lane&-536870913,R=K!==W.lane;if(R?(o0&K)===K:(Y&K)===K){K!==0&&K===X5&&(mX=!0),q!==null&&(q=q.next={lane:0,tag:W.tag,payload:W.payload,callback:null,next:null});J:{var z=J,B=W;K=w;var M=Z;switch(B.tag){case 1:if(z=B.payload,typeof z==="function"){$=z.call(M,$,K);break J}$=z;break J;case 3:z.flags=z.flags&-65537|128;case 0:if(z=B.payload,K=typeof z==="function"?z.call(M,$,K):z,K===null||K===void 0)break J;$=L9({},$,K);break J;case 2:w7=!0}}K=W.callback,K!==null&&(J.flags|=64,R&&(J.flags|=8192),R=H.callbacks,R===null?H.callbacks=[K]:R.push(K))}else R={lane:K,tag:W.tag,payload:W.payload,callback:W.callback,next:null},q===null?(G=q=R,U=$):q=q.next=R,Q|=K;if(W=W.next,W===null)if(W=H.shared.pending,W===null)break;else R=W,W=R.next,R.next=null,H.lastBaseUpdate=R,H.shared.pending=null}while(1);q===null&&(U=$),H.baseState=U,H.firstBaseUpdate=G,H.lastBaseUpdate=q,X===null&&(H.shared.lanes=0),V7|=Q,J.lanes=Q,J.memoizedState=$}}function OK(J,w){if(typeof J!=="function")throw Error(c(191,J));J.call(w)}function NK(J,w){var Z=J.callbacks;if(Z!==null)for(J.callbacks=null,J=0;J<Z.length;J++)OK(Z[J],w)}function Tq(J,w){J=g6,D9(PZ,J),D9(Q5,w),g6=J|w.baseLanes}function uX(){D9(PZ,g6),D9(Q5,Q5.current)}function yQ(){g6=PZ.current,i9(Q5),i9(PZ)}function Y7(J){var w=J.alternate;D9(j9,j9.current&1),D9(P8,J),u8===null&&(w===null||Q5.current!==null?u8=J:w.memoizedState!==null&&(u8=J))}function cX(J){D9(j9,j9.current),D9(P8,J),u8===null&&(u8=J)}function FK(J){J.tag===22?(D9(j9,j9.current),D9(P8,J),u8===null&&(u8=J)):H7(J)}function H7(){D9(j9,j9.current),D9(P8,P8.current)}function B8(J){i9(P8),u8===J&&(u8=null),i9(j9)}function SZ(J){for(var w=J;w!==null;){if(w.tag===13){var Z=w.memoizedState;if(Z!==null&&(Z=Z.dehydrated,Z===null||KQ(Z)||$Q(Z)))return w}else if(w.tag===19&&(w.memoizedProps.revealOrder==="forwards"||w.memoizedProps.revealOrder==="backwards"||w.memoizedProps.revealOrder==="unstable_legacy-backwards"||w.memoizedProps.revealOrder==="together")){if((w.flags&128)!==0)return w}else if(w.child!==null){w.child.return=w,w=w.child;continue}if(w===J)break;for(;w.sibling===null;){if(w.return===null||w.return===J)return null;w=w.return}w.sibling.return=w.return,w=w.sibling}return null}function T9(){throw Error(c(321))}function gQ(J,w){if(w===null)return!1;for(var Z=0;Z<w.length&&Z<J.length;Z++)if(!T8(J[Z],w[Z]))return!1;return!0}function lQ(J,w,Z,Y,H,X){return h6=X,y0=w,w.memoizedState=null,w.updateQueue=null,w.lanes=0,P0.H=J===null||J.memoizedState===null?aK:rQ,w1=!1,X=Z(Y,H),w1=!1,J5&&(X=LK(w,Z,Y,H)),zK(J),X}function zK(J){P0.H=yJ;var w=q9!==null&&q9.next!==null;if(h6=0,b9=q9=y0=null,jZ=!1,vJ=0,w5=null,w)throw Error(c(300));J===null||v9||(J=J.dependencies,J!==null&&CZ(J)&&(v9=!0))}function LK(J,w,Z,Y){y0=J;var H=0;do{if(J5&&(w5=null),vJ=0,J5=!1,25<=H)throw Error(c(301));if(H+=1,b9=q9=null,J.updateQueue!=null){var X=J.updateQueue;X.lastEffect=null,X.events=null,X.stores=null,X.memoCache!=null&&(X.memoCache.index=0)}P0.H=rK,X=w(Z,Y)}while(J5);return X}function NF(){var J=P0.H,w=J.useState()[0];return w=typeof w.then==="function"?rJ(w):w,J=J.useState()[0],(q9!==null?q9.memoizedState:null)!==J&&(y0.flags|=1024),w}function pQ(){var J=fZ!==0;return fZ=0,J}function dQ(J,w,Z){w.updateQueue=J.updateQueue,w.flags&=-2053,J.lanes&=~Z}function mQ(J){if(jZ){for(J=J.memoizedState;J!==null;){var w=J.queue;w!==null&&(w.pending=null),J=J.next}jZ=!1}h6=0,b9=q9=y0=null,J5=!1,vJ=fZ=0,w5=null}function W8(){var J={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b9===null?y0.memoizedState=b9=J:b9=b9.next=J,b9}function f9(){if(q9===null){var J=y0.alternate;J=J!==null?J.memoizedState:null}else J=q9.next;var w=b9===null?y0.memoizedState:b9.next;if(w!==null)b9=w,q9=J;else{if(J===null){if(y0.alternate===null)throw Error(c(467));throw Error(c(310))}q9=J,J={memoizedState:q9.memoizedState,baseState:q9.baseState,baseQueue:q9.baseQueue,queue:q9.queue,next:null},b9===null?y0.memoizedState=b9=J:b9=b9.next=J}return b9}function YY(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rJ(J){var w=vJ;return vJ+=1,w5===null&&(w5=[]),J=RK(w5,J,w),w=y0,(b9===null?w.memoizedState:b9.next)===null&&(w=w.alternate,P0.H=w===null||w.memoizedState===null?aK:rQ),J}function HY(J){if(J!==null&&typeof J==="object"){if(typeof J.then==="function")return rJ(J);if(J.$$typeof===T6)return t9(J)}throw Error(c(438,String(J)))}function uQ(J){var w=null,Z=y0.updateQueue;if(Z!==null&&(w=Z.memoCache),w==null){var Y=y0.alternate;Y!==null&&(Y=Y.updateQueue,Y!==null&&(Y=Y.memoCache,Y!=null&&(w={data:Y.data.map(function(H){return H.slice()}),index:0})))}if(w==null&&(w={data:[],index:0}),Z===null&&(Z=YY(),y0.updateQueue=Z),Z.memoCache=w,Z=w.data[w.index],Z===void 0)for(Z=w.data[w.index]=Array(J),Y=0;Y<J;Y++)Z[Y]=YN;return w.index++,Z}function v6(J,w){return typeof w==="function"?w(J):w}function kZ(J){var w=f9();return cQ(w,q9,J)}function cQ(J,w,Z){var Y=J.queue;if(Y===null)throw Error(c(311));Y.lastRenderedReducer=Z;var H=J.baseQueue,X=Y.pending;if(X!==null){if(H!==null){var Q=H.next;H.next=X.next,X.next=Q}w.baseQueue=H=X,Y.pending=null}if(X=J.baseState,H===null)J.memoizedState=X;else{w=H.next;var W=Q=null,U=null,G=w,q=!1;do{var $=G.lane&-536870913;if($!==G.lane?(o0&$)===$:(h6&$)===$){var K=G.revertLane;if(K===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),$===X5&&(q=!0);else if((h6&K)===K){G=G.next,K===X5&&(q=!0);continue}else $={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},U===null?(W=U=$,Q=X):U=U.next=$,y0.lanes|=K,V7|=K;$=G.action,w1&&Z(X,$),X=G.hasEagerState?G.eagerState:Z(X,$)}else K={lane:$,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},U===null?(W=U=K,Q=X):U=U.next=K,y0.lanes|=$,V7|=$;G=G.next}while(G!==null&&G!==w);if(U===null?Q=X:U.next=W,!T8(X,J.memoizedState)&&(v9=!0,q&&(Z=t1,Z!==null)))throw Z;J.memoizedState=X,J.baseState=Q,J.baseQueue=U,Y.lastRenderedState=X}return H===null&&(Y.lanes=0),[J.memoizedState,Y.dispatch]}function ZX(J){var w=f9(),Z=w.queue;if(Z===null)throw Error(c(311));Z.lastRenderedReducer=J;var{dispatch:Y,pending:H}=Z,X=w.memoizedState;if(H!==null){Z.pending=null;var Q=H=H.next;do X=J(X,Q.action),Q=Q.next;while(Q!==H);T8(X,w.memoizedState)||(v9=!0),w.memoizedState=X,w.baseQueue===null&&(w.baseState=X),Z.lastRenderedState=X}return[X,Y]}function BK(J,w,Z){var Y=y0,H=f9(),X=a0;if(X){if(Z===void 0)throw Error(c(407));Z=Z()}else Z=w();var Q=!T8((q9||H).memoizedState,Z);if(Q&&(H.memoizedState=Z,v9=!0),H=H.queue,iQ(AK.bind(null,Y,H,J),[J]),H.getSnapshot!==w||Q||b9!==null&&b9.memoizedState.tag&1){if(Y.flags|=2048,W5(9,{destroy:void 0},_K.bind(null,Y,H,Z,w),null),R9===null)throw Error(c(349));X||(h6&127)!==0||VK(Y,w,Z)}return Z}function VK(J,w,Z){J.flags|=16384,J={getSnapshot:w,value:Z},w=y0.updateQueue,w===null?(w=YY(),y0.updateQueue=w,w.stores=[J]):(Z=w.stores,Z===null?w.stores=[J]:Z.push(J))}function _K(J,w,Z,Y){w.value=Z,w.getSnapshot=Y,EK(w)&&IK(J)}function AK(J,w,Z){return Z(function(){EK(w)&&IK(J)})}function EK(J){var w=J.getSnapshot;J=J.value;try{var Z=w();return!T8(J,Z)}catch(Y){return!0}}function IK(J){var w=Q1(J,2);w!==null&&D8(w,J,2)}function iX(J){var w=W8();if(typeof J==="function"){var Z=J;if(J=Z(),w1){Q7(!0);try{Z()}finally{Q7(!1)}}}return w.memoizedState=w.baseState=J,w.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:J},w}function CK(J,w,Z,Y){return J.baseState=Z,cQ(J,q9,typeof Y==="function"?Y:v6)}function FF(J,w,Z,Y,H){if(QY(J))throw Error(c(485));if(J=w.action,J!==null){var X={payload:H,action:J,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(Q){X.listeners.push(Q)}};P0.T!==null?Z(!0):X.isTransition=!1,Y(X),Z=w.pending,Z===null?(X.next=w.pending=X,TK(w,X)):(X.next=Z.next,w.pending=Z.next=X)}}function TK(J,w){var{action:Z,payload:Y}=w,H=J.state;if(w.isTransition){var X=P0.T,Q={};P0.T=Q;try{var W=Z(H,Y),U=P0.S;U!==null&&U(Q,W),Pq(J,w,W)}catch(G){sX(J,w,G)}finally{X!==null&&Q.types!==null&&(X.types=Q.types),P0.T=X}}else try{X=Z(H,Y),Pq(J,w,X)}catch(G){sX(J,w,G)}}function Pq(J,w,Z){Z!==null&&typeof Z==="object"&&typeof Z.then==="function"?Z.then(function(Y){Sq(J,w,Y)},function(Y){return sX(J,w,Y)}):Sq(J,w,Z)}function Sq(J,w,Z){w.status="fulfilled",w.value=Z,PK(w),J.state=Z,w=J.pending,w!==null&&(Z=w.next,Z===w?J.pending=null:(Z=Z.next,w.next=Z,TK(J,Z)))}function sX(J,w,Z){var Y=J.pending;if(J.pending=null,Y!==null){Y=Y.next;do w.status="rejected",w.reason=Z,PK(w),w=w.next;while(w!==Y)}J.action=null}function PK(J){J=J.listeners;for(var w=0;w<J.length;w++)J[w]()}function SK(J,w){return w}function jq(J,w){if(a0){var Z=R9.formState;if(Z!==null){J:{var Y=y0;if(a0){if(z9){w:{var H=z9;for(var X=m8;H.nodeType!==8;){if(!X){H=null;break w}if(H=c8(H.nextSibling),H===null){H=null;break w}}X=H.data,H=X==="F!"||X==="F"?H:null}if(H){z9=c8(H.nextSibling),Y=H.data==="F!";break J}}L7(Y)}Y=!1}Y&&(w=Z[0])}}return Z=W8(),Z.memoizedState=Z.baseState=w,Y={pending:null,lanes:0,dispatch:null,lastRenderedReducer:SK,lastRenderedState:w},Z.queue=Y,Z=sK.bind(null,y0,Y),Y.dispatch=Z,Y=iX(!1),X=aQ.bind(null,y0,!1,Y.queue),Y=W8(),H={state:w,dispatch:null,action:J,pending:null},Y.queue=H,Z=FF.bind(null,y0,H,X,Z),H.dispatch=Z,Y.memoizedState=J,[w,Z,!1]}function fq(J){var w=f9();return jK(w,q9,J)}function jK(J,w,Z){if(w=cQ(J,w,SK)[0],J=kZ(v6)[0],typeof w==="object"&&w!==null&&typeof w.then==="function")try{var Y=rJ(w)}catch(Q){if(Q===M5)throw ZY;throw Q}else Y=w;w=f9();var H=w.queue,X=H.dispatch;return Z!==w.memoizedState&&(y0.flags|=2048,W5(9,{destroy:void 0},zF.bind(null,H,Z),null)),[Y,X,J]}function zF(J,w){J.action=w}function bq(J){var w=f9(),Z=q9;if(Z!==null)return jK(w,Z,J);f9(),w=w.memoizedState,Z=f9();var Y=Z.queue.dispatch;return Z.memoizedState=J,[w,Y,!1]}function W5(J,w,Z,Y){return J={tag:J,create:Z,deps:Y,inst:w,next:null},w=y0.updateQueue,w===null&&(w=YY(),y0.updateQueue=w),Z=w.lastEffect,Z===null?w.lastEffect=J.next=J:(Y=Z.next,Z.next=J,J.next=Y,w.lastEffect=J),J}function fK(){return f9().memoizedState}function KZ(J,w,Z,Y){var H=W8();y0.flags|=J,H.memoizedState=W5(1|w,{destroy:void 0},Z,Y===void 0?null:Y)}function XY(J,w,Z,Y){var H=f9();Y=Y===void 0?null:Y;var X=H.memoizedState.inst;q9!==null&&Y!==null&&gQ(Y,q9.memoizedState.deps)?H.memoizedState=W5(w,X,Z,Y):(y0.flags|=J,H.memoizedState=W5(1|w,X,Z,Y))}function xq(J,w){KZ(8390656,8,J,w)}function iQ(J,w){XY(2048,8,J,w)}function LF(J){y0.flags|=4;var w=y0.updateQueue;if(w===null)w=YY(),y0.updateQueue=w,w.events=[J];else{var Z=w.events;Z===null?w.events=[J]:Z.push(J)}}function bK(J){var w=f9().memoizedState;return LF({ref:w,nextImpl:J}),function(){if((w9&2)!==0)throw Error(c(440));return w.impl.apply(void 0,arguments)}}function xK(J,w){return XY(4,2,J,w)}function hK(J,w){return XY(4,4,J,w)}function vK(J,w){if(typeof w==="function"){J=J();var Z=w(J);return function(){typeof Z==="function"?Z():w(null)}}if(w!==null&&w!==void 0)return J=J(),w.current=J,function(){w.current=null}}function yK(J,w,Z){Z=Z!==null&&Z!==void 0?Z.concat([J]):null,XY(4,4,vK.bind(null,w,J),Z)}function sQ(){}function gK(J,w){var Z=f9();w=w===void 0?null:w;var Y=Z.memoizedState;if(w!==null&&gQ(w,Y[1]))return Y[0];return Z.memoizedState=[J,w],J}function lK(J,w){var Z=f9();w=w===void 0?null:w;var Y=Z.memoizedState;if(w!==null&&gQ(w,Y[1]))return Y[0];if(Y=J(),w1){Q7(!0);try{J()}finally{Q7(!1)}}return Z.memoizedState=[Y,w],Y}function oQ(J,w,Z){if(Z===void 0||(h6&1073741824)!==0&&(o0&261930)===0)return J.memoizedState=w;return J.memoizedState=Z,J=C$(),y0.lanes|=J,V7|=J,Z}function pK(J,w,Z,Y){if(T8(Z,w))return Z;if(Q5.current!==null)return J=oQ(J,Z,Y),T8(J,w)||(v9=!0),J;if((h6&42)===0||(h6&1073741824)!==0&&(o0&261930)===0)return v9=!0,J.memoizedState=Z;return J=C$(),y0.lanes|=J,V7|=J,w}function dK(J,w,Z,Y,H){var X=Z9.p;Z9.p=X!==0&&8>X?X:8;var Q=P0.T,W={};P0.T=W,aQ(J,!1,w,Z);try{var U=H(),G=P0.S;if(G!==null&&G(W,U),U!==null&&typeof U==="object"&&typeof U.then==="function"){var q=MF(U,Y);_J(J,w,q,C8(J))}else _J(J,w,Y,C8(J))}catch($){_J(J,w,{then:function(){},status:"rejected",reason:$},C8())}finally{Z9.p=X,Q!==null&&W.types!==null&&(Q.types=W.types),P0.T=Q}}function BF(){}function oX(J,w,Z,Y){if(J.tag!==5)throw Error(c(476));var H=mK(J).queue;dK(J,H,w,s7,Z===null?BF:function(){return uK(J),Z(Y)})}function mK(J){var w=J.memoizedState;if(w!==null)return w;w={memoizedState:s7,baseState:s7,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:s7},next:null};var Z={};return w.next={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:Z},next:null},J.memoizedState=w,J=J.alternate,J!==null&&(J.memoizedState=w),w}function uK(J){var w=mK(J);w.next===null&&(w=J.alternate.memoizedState),_J(J,w.next.queue,{},C8())}function nQ(){return t9(pJ)}function cK(){return f9().memoizedState}function iK(){return f9().memoizedState}function VF(J){for(var w=J.return;w!==null;){switch(w.tag){case 24:case 3:var Z=C8();J=$7(Z);var Y=R7(w,J,Z);Y!==null&&(D8(Y,w,Z),LJ(Y,w,Z)),w={cache:bQ()},J.payload=w;return}w=w.return}}function _F(J,w,Z){var Y=C8();Z={lane:Y,revertLane:0,gesture:null,action:Z,hasEagerState:!1,eagerState:null,next:null},QY(J)?oK(w,Z):(Z=PQ(J,w,Z,Y),Z!==null&&(D8(Z,J,Y),nK(Z,w,Y)))}function sK(J,w,Z){var Y=C8();_J(J,w,Z,Y)}function _J(J,w,Z,Y){var H={lane:Y,revertLane:0,gesture:null,action:Z,hasEagerState:!1,eagerState:null,next:null};if(QY(J))oK(w,H);else{var X=J.alternate;if(J.lanes===0&&(X===null||X.lanes===0)&&(X=w.lastRenderedReducer,X!==null))try{var Q=w.lastRenderedState,W=X(Q,Z);if(H.hasEagerState=!0,H.eagerState=W,T8(W,Q))return wY(J,w,H,0),R9===null&&JY(),!1}catch(U){}finally{}if(Z=PQ(J,w,H,Y),Z!==null)return D8(Z,J,Y),nK(Z,w,Y),!0}return!1}function aQ(J,w,Z,Y){if(Y={lane:2,revertLane:XW(),gesture:null,action:Y,hasEagerState:!1,eagerState:null,next:null},QY(J)){if(w)throw Error(c(479))}else w=PQ(J,Z,Y,2),w!==null&&D8(w,J,2)}function QY(J){var w=J.alternate;return J===y0||w!==null&&w===y0}function oK(J,w){J5=jZ=!0;var Z=J.pending;Z===null?w.next=w:(w.next=Z.next,Z.next=w),J.pending=w}function nK(J,w,Z){if((Z&4194048)!==0){var Y=w.lanes;Y&=J.pendingLanes,Z|=Y,w.lanes=Z,bk(J,Z)}}function YX(J,w,Z,Y){w=J.memoizedState,Z=Z(Y,w),Z=Z===null||Z===void 0?w:L9({},w,Z),J.memoizedState=Z,J.lanes===0&&(J.updateQueue.baseState=Z)}function hq(J,w,Z,Y,H,X,Q){return J=J.stateNode,typeof J.shouldComponentUpdate==="function"?J.shouldComponentUpdate(Y,X,Q):w.prototype&&w.prototype.isPureReactComponent?!fJ(Z,Y)||!fJ(H,X):!0}function vq(J,w,Z,Y){J=w.state,typeof w.componentWillReceiveProps==="function"&&w.componentWillReceiveProps(Z,Y),typeof w.UNSAFE_componentWillReceiveProps==="function"&&w.UNSAFE_componentWillReceiveProps(Z,Y),w.state!==J&&nX.enqueueReplaceState(w,w.state,null)}function Z1(J,w){var Z=w;if("ref"in w){Z={};for(var Y in w)Y!=="ref"&&(Z[Y]=w[Y])}if(J=J.defaultProps){Z===w&&(Z=L9({},Z));for(var H in J)Z[H]===void 0&&(Z[H]=J[H])}return Z}function tK(J){AZ(J)}function eK(J){console.error(J)}function J$(J){AZ(J)}function bZ(J,w){try{var Z=J.onUncaughtError;Z(w.value,{componentStack:w.stack})}catch(Y){setTimeout(function(){throw Y})}}function yq(J,w,Z){try{var Y=J.onCaughtError;Y(Z.value,{componentStack:Z.stack,errorBoundary:w.tag===1?w.stateNode:null})}catch(H){setTimeout(function(){throw H})}}function aX(J,w,Z){return Z=$7(Z),Z.tag=3,Z.payload={element:null},Z.callback=function(){bZ(J,w)},Z}function w$(J){return J=$7(J),J.tag=3,J}function Z$(J,w,Z,Y){var H=Z.type.getDerivedStateFromError;if(typeof H==="function"){var X=Y.value;J.payload=function(){return H(X)},J.callback=function(){yq(w,Z,Y)}}var Q=Z.stateNode;Q!==null&&typeof Q.componentDidCatch==="function"&&(J.callback=function(){yq(w,Z,Y),typeof H!=="function"&&(D7===null?D7=new Set([this]):D7.add(this));var W=Y.stack;this.componentDidCatch(Y.value,{componentStack:W!==null?W:""})})}function AF(J,w,Z,Y,H){if(Z.flags|=32768,Y!==null&&typeof Y==="object"&&typeof Y.then==="function"){if(w=Z.alternate,w!==null&&D5(w,Z,H,!0),Z=P8.current,Z!==null){switch(Z.tag){case 31:case 13:return u8===null?gZ():Z.alternate===null&&P9===0&&(P9=3),Z.flags&=-257,Z.flags|=65536,Z.lanes=H,Y===TZ?Z.flags|=16384:(w=Z.updateQueue,w===null?Z.updateQueue=new Set([Y]):w.add(Y),RX(J,Y,H)),!1;case 22:return Z.flags|=65536,Y===TZ?Z.flags|=16384:(w=Z.updateQueue,w===null?(w={transitions:null,markerInstances:null,retryQueue:new Set([Y])},Z.updateQueue=w):(Z=w.retryQueue,Z===null?w.retryQueue=new Set([Y]):Z.add(Y)),RX(J,Y,H)),!1}throw Error(c(435,Z.tag))}return RX(J,Y,H),gZ(),!1}if(a0)return w=P8.current,w!==null?((w.flags&65536)===0&&(w.flags|=256),w.flags|=65536,w.lanes=H,Y!==vX&&(J=Error(c(422),{cause:Y}),xJ(d8(J,Z)))):(Y!==vX&&(w=Error(c(423),{cause:Y}),xJ(d8(w,Z))),J=J.current.alternate,J.flags|=65536,H&=-H,J.lanes|=H,Y=d8(Y,Z),H=aX(J.stateNode,Y,H),wX(J,H),P9!==4&&(P9=2)),!1;var X=Error(c(520),{cause:Y});if(X=d8(X,Z),IJ===null?IJ=[X]:IJ.push(X),P9!==4&&(P9=2),w===null)return!0;Y=d8(Y,Z),Z=w;do{switch(Z.tag){case 3:return Z.flags|=65536,J=H&-H,Z.lanes|=J,J=aX(Z.stateNode,Y,J),wX(Z,J),!1;case 1:if(w=Z.type,X=Z.stateNode,(Z.flags&128)===0&&(typeof w.getDerivedStateFromError==="function"||X!==null&&typeof X.componentDidCatch==="function"&&(D7===null||!D7.has(X))))return Z.flags|=65536,H&=-H,Z.lanes|=H,H=w$(H),Z$(H,J,Z,Y),wX(Z,H),!1}Z=Z.return}while(Z!==null);return!1}function n9(J,w,Z,Y){w.child=J===null?MK(w,null,Z,Y):J1(w,J.child,Z,Y)}function gq(J,w,Z,Y,H){Z=Z.render;var X=w.ref;if("ref"in Y){var Q={};for(var W in Y)W!=="ref"&&(Q[W]=Y[W])}else Q=Y;if(e7(w),Y=lQ(J,w,Z,Q,X,H),W=pQ(),J!==null&&!v9)return dQ(J,w,H),y6(J,w,H);return a0&&W&&jQ(w),w.flags|=1,n9(J,w,Y,H),w.child}function lq(J,w,Z,Y,H){if(J===null){var X=Z.type;if(typeof X==="function"&&!SQ(X)&&X.defaultProps===void 0&&Z.compare===null)return w.tag=15,w.type=X,Y$(J,w,X,Y,H);return J=GZ(Z.type,null,Y,w,w.mode,H),J.ref=w.ref,J.return=w,w.child=J}if(X=J.child,!eQ(J,H)){var Q=X.memoizedProps;if(Z=Z.compare,Z=Z!==null?Z:fJ,Z(Q,Y)&&J.ref===w.ref)return y6(J,w,H)}return w.flags|=1,J=j6(X,Y),J.ref=w.ref,J.return=w,w.child=J}function Y$(J,w,Z,Y,H){if(J!==null){var X=J.memoizedProps;if(fJ(X,Y)&&J.ref===w.ref)if(v9=!1,w.pendingProps=Y=X,eQ(J,H))(J.flags&131072)!==0&&(v9=!0);else return w.lanes=J.lanes,y6(J,w,H)}return rX(J,w,Z,Y,H)}function H$(J,w,Z,Y){var H=Y.children,X=J!==null?J.memoizedState:null;if(J===null&&w.stateNode===null&&(w.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),Y.mode==="hidden"){if((w.flags&128)!==0){if(X=X!==null?X.baseLanes|Z:Z,J!==null){Y=w.child=J.child;for(H=0;Y!==null;)H=H|Y.lanes|Y.childLanes,Y=Y.sibling;Y=H&~X}else Y=0,w.child=null;return pq(J,w,X,Z,Y)}if((Z&536870912)!==0)w.memoizedState={baseLanes:0,cachePool:null},J!==null&&qZ(w,X!==null?X.cachePool:null),X!==null?Tq(w,X):uX(),FK(w);else return Y=w.lanes=536870912,pq(J,w,X!==null?X.baseLanes|Z:Z,Z,Y)}else X!==null?(qZ(w,X.cachePool),Tq(w,X),H7(w),w.memoizedState=null):(J!==null&&qZ(w,null),uX(),H7(w));return n9(J,w,H,Z),w.child}function $J(J,w){return J!==null&&J.tag===22||w.stateNode!==null||(w.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),w.sibling}function pq(J,w,Z,Y,H){var X=xQ();return X=X===null?null:{parent:h9._currentValue,pool:X},w.memoizedState={baseLanes:Z,cachePool:X},J!==null&&qZ(w,null),uX(),FK(w),J!==null&&D5(J,w,Y,!0),w.childLanes=H,null}function $Z(J,w){return w=xZ({mode:w.mode,children:w.children},J.mode),w.ref=J.ref,J.child=w,w.return=J,w}function dq(J,w,Z){return J1(w,J.child,null,Z),J=$Z(w,w.pendingProps),J.flags|=2,B8(w),w.memoizedState=null,J}function EF(J,w,Z){var Y=w.pendingProps,H=(w.flags&128)!==0;if(w.flags&=-129,J===null){if(a0){if(Y.mode==="hidden")return J=$Z(w,Y),w.lanes=536870912,$J(null,J);if(cX(w),(J=z9)?(J=a$(J,m8),J=J!==null&&J.data==="&"?J:null,J!==null&&(w.memoizedState={dehydrated:J,treeContext:z7!==null?{id:q6,overflow:k6}:null,retryLane:536870912,hydrationErrors:null},Z=GK(J),Z.return=w,w.child=Z,r9=w,z9=null)):J=null,J===null)throw L7(w);return w.lanes=536870912,null}return $Z(w,Y)}var X=J.memoizedState;if(X!==null){var Q=X.dehydrated;if(cX(w),H)if(w.flags&256)w.flags&=-257,w=dq(J,w,Z);else if(w.memoizedState!==null)w.child=J.child,w.flags|=128,w=null;else throw Error(c(558));else if(v9||D5(J,w,Z,!1),H=(Z&J.childLanes)!==0,v9||H){if(Y=R9,Y!==null&&(Q=xk(Y,Z),Q!==0&&Q!==X.retryLane))throw X.retryLane=Q,Q1(J,Q),D8(Y,J,Q),tQ;gZ(),w=dq(J,w,Z)}else J=X.treeContext,z9=c8(Q.nextSibling),r9=w,a0=!0,K7=null,m8=!1,J!==null&&kK(w,J),w=$Z(w,Y),w.flags|=4096;return w}return J=j6(J.child,{mode:Y.mode,children:Y.children}),J.ref=w.ref,w.child=J,J.return=w,J}function RZ(J,w){var Z=w.ref;if(Z===null)J!==null&&J.ref!==null&&(w.flags|=4194816);else{if(typeof Z!=="function"&&typeof Z!=="object")throw Error(c(284));if(J===null||J.ref!==Z)w.flags|=4194816}}function rX(J,w,Z,Y,H){if(e7(w),Z=lQ(J,w,Z,Y,void 0,H),Y=pQ(),J!==null&&!v9)return dQ(J,w,H),y6(J,w,H);return a0&&Y&&jQ(w),w.flags|=1,n9(J,w,Z,H),w.child}function mq(J,w,Z,Y,H,X){if(e7(w),w.updateQueue=null,Z=LK(w,Y,Z,H),zK(J),Y=pQ(),J!==null&&!v9)return dQ(J,w,X),y6(J,w,X);return a0&&Y&&jQ(w),w.flags|=1,n9(J,w,Z,X),w.child}function uq(J,w,Z,Y,H){if(e7(w),w.stateNode===null){var X=c1,Q=Z.contextType;typeof Q==="object"&&Q!==null&&(X=t9(Q)),X=new Z(Y,X),w.memoizedState=X.state!==null&&X.state!==void 0?X.state:null,X.updater=nX,w.stateNode=X,X._reactInternals=w,X=w.stateNode,X.props=Y,X.state=w.memoizedState,X.refs={},vQ(w),Q=Z.contextType,X.context=typeof Q==="object"&&Q!==null?t9(Q):c1,X.state=w.memoizedState,Q=Z.getDerivedStateFromProps,typeof Q==="function"&&(YX(w,Z,Q,Y),X.state=w.memoizedState),typeof Z.getDerivedStateFromProps==="function"||typeof X.getSnapshotBeforeUpdate==="function"||typeof X.UNSAFE_componentWillMount!=="function"&&typeof X.componentWillMount!=="function"||(Q=X.state,typeof X.componentWillMount==="function"&&X.componentWillMount(),typeof X.UNSAFE_componentWillMount==="function"&&X.UNSAFE_componentWillMount(),Q!==X.state&&nX.enqueueReplaceState(X,X.state,null),VJ(w,Y,X,H),BJ(),X.state=w.memoizedState),typeof X.componentDidMount==="function"&&(w.flags|=4194308),Y=!0}else if(J===null){X=w.stateNode;var W=w.memoizedProps,U=Z1(Z,W);X.props=U;var G=X.context,q=Z.contextType;Q=c1,typeof q==="object"&&q!==null&&(Q=t9(q));var $=Z.getDerivedStateFromProps;q=typeof $==="function"||typeof X.getSnapshotBeforeUpdate==="function",W=w.pendingProps!==W,q||typeof X.UNSAFE_componentWillReceiveProps!=="function"&&typeof X.componentWillReceiveProps!=="function"||(W||G!==Q)&&vq(w,X,Y,Q),w7=!1;var K=w.memoizedState;X.state=K,VJ(w,Y,X,H),BJ(),G=w.memoizedState,W||K!==G||w7?(typeof $==="function"&&(YX(w,Z,$,Y),G=w.memoizedState),(U=w7||hq(w,Z,U,Y,K,G,Q))?(q||typeof X.UNSAFE_componentWillMount!=="function"&&typeof X.componentWillMount!=="function"||(typeof X.componentWillMount==="function"&&X.componentWillMount(),typeof X.UNSAFE_componentWillMount==="function"&&X.UNSAFE_componentWillMount()),typeof X.componentDidMount==="function"&&(w.flags|=4194308)):(typeof X.componentDidMount==="function"&&(w.flags|=4194308),w.memoizedProps=Y,w.memoizedState=G),X.props=Y,X.state=G,X.context=Q,Y=U):(typeof X.componentDidMount==="function"&&(w.flags|=4194308),Y=!1)}else{X=w.stateNode,dX(J,w),Q=w.memoizedProps,q=Z1(Z,Q),X.props=q,$=w.pendingProps,K=X.context,G=Z.contextType,U=c1,typeof G==="object"&&G!==null&&(U=t9(G)),W=Z.getDerivedStateFromProps,(G=typeof W==="function"||typeof X.getSnapshotBeforeUpdate==="function")||typeof X.UNSAFE_componentWillReceiveProps!=="function"&&typeof X.componentWillReceiveProps!=="function"||(Q!==$||K!==U)&&vq(w,X,Y,U),w7=!1,K=w.memoizedState,X.state=K,VJ(w,Y,X,H),BJ();var R=w.memoizedState;Q!==$||K!==R||w7||J!==null&&J.dependencies!==null&&CZ(J.dependencies)?(typeof W==="function"&&(YX(w,Z,W,Y),R=w.memoizedState),(q=w7||hq(w,Z,q,Y,K,R,U)||J!==null&&J.dependencies!==null&&CZ(J.dependencies))?(G||typeof X.UNSAFE_componentWillUpdate!=="function"&&typeof X.componentWillUpdate!=="function"||(typeof X.componentWillUpdate==="function"&&X.componentWillUpdate(Y,R,U),typeof X.UNSAFE_componentWillUpdate==="function"&&X.UNSAFE_componentWillUpdate(Y,R,U)),typeof X.componentDidUpdate==="function"&&(w.flags|=4),typeof X.getSnapshotBeforeUpdate==="function"&&(w.flags|=1024)):(typeof X.componentDidUpdate!=="function"||Q===J.memoizedProps&&K===J.memoizedState||(w.flags|=4),typeof X.getSnapshotBeforeUpdate!=="function"||Q===J.memoizedProps&&K===J.memoizedState||(w.flags|=1024),w.memoizedProps=Y,w.memoizedState=R),X.props=Y,X.state=R,X.context=U,Y=q):(typeof X.componentDidUpdate!=="function"||Q===J.memoizedProps&&K===J.memoizedState||(w.flags|=4),typeof X.getSnapshotBeforeUpdate!=="function"||Q===J.memoizedProps&&K===J.memoizedState||(w.flags|=1024),Y=!1)}return X=Y,RZ(J,w),Y=(w.flags&128)!==0,X||Y?(X=w.stateNode,Z=Y&&typeof Z.getDerivedStateFromError!=="function"?null:X.render(),w.flags|=1,J!==null&&Y?(w.child=J1(w,J.child,null,H),w.child=J1(w,null,Z,H)):n9(J,w,Z,H),w.memoizedState=X.state,J=w.child):J=y6(J,w,H),J}function cq(J,w,Z,Y){return t7(),w.flags|=256,n9(J,w,Z,Y),w.child}function XX(J){return{baseLanes:J,cachePool:$K()}}function QX(J,w,Z){return J=J!==null?J.childLanes&~Z:0,w&&(J|=_8),J}function X$(J,w,Z){var Y=w.pendingProps,H=!1,X=(w.flags&128)!==0,Q;if((Q=X)||(Q=J!==null&&J.memoizedState===null?!1:(j9.current&2)!==0),Q&&(H=!0,w.flags&=-129),Q=(w.flags&32)!==0,w.flags&=-33,J===null){if(a0){if(H?Y7(w):H7(w),(J=z9)?(J=a$(J,m8),J=J!==null&&J.data!=="&"?J:null,J!==null&&(w.memoizedState={dehydrated:J,treeContext:z7!==null?{id:q6,overflow:k6}:null,retryLane:536870912,hydrationErrors:null},Z=GK(J),Z.return=w,w.child=Z,r9=w,z9=null)):J=null,J===null)throw L7(w);return $Q(J)?w.lanes=32:w.lanes=536870912,null}var W=Y.children;if(Y=Y.fallback,H)return H7(w),H=w.mode,W=xZ({mode:"hidden",children:W},H),Y=o7(Y,H,Z,null),W.return=w,Y.return=w,W.sibling=Y,w.child=W,Y=w.child,Y.memoizedState=XX(Z),Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,$J(null,Y);return Y7(w),tX(w,W)}var U=J.memoizedState;if(U!==null&&(W=U.dehydrated,W!==null)){if(X)w.flags&256?(Y7(w),w.flags&=-257,w=WX(J,w,Z)):w.memoizedState!==null?(H7(w),w.child=J.child,w.flags|=128,w=null):(H7(w),W=Y.fallback,H=w.mode,Y=xZ({mode:"visible",children:Y.children},H),W=o7(W,H,Z,null),W.flags|=2,Y.return=w,W.return=w,Y.sibling=W,w.child=Y,J1(w,J.child,null,Z),Y=w.child,Y.memoizedState=XX(Z),Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,w=$J(null,Y));else if(Y7(w),$Q(W)){if(Q=W.nextSibling&&W.nextSibling.dataset,Q)var G=Q.dgst;Q=G,Y=Error(c(419)),Y.stack="",Y.digest=Q,xJ({value:Y,source:null,stack:null}),w=WX(J,w,Z)}else if(v9||D5(J,w,Z,!1),Q=(Z&J.childLanes)!==0,v9||Q){if(Q=R9,Q!==null&&(Y=xk(Q,Z),Y!==0&&Y!==U.retryLane))throw U.retryLane=Y,Q1(J,Y),D8(Q,J,Y),tQ;KQ(W)||gZ(),w=WX(J,w,Z)}else KQ(W)?(w.flags|=192,w.child=J.child,w=null):(J=U.treeContext,z9=c8(W.nextSibling),r9=w,a0=!0,K7=null,m8=!1,J!==null&&kK(w,J),w=tX(w,Y.children),w.flags|=4096);return w}if(H)return H7(w),W=Y.fallback,H=w.mode,U=J.child,G=U.sibling,Y=j6(U,{mode:"hidden",children:Y.children}),Y.subtreeFlags=U.subtreeFlags&65011712,G!==null?W=j6(G,W):(W=o7(W,H,Z,null),W.flags|=2),W.return=w,Y.return=w,Y.sibling=W,w.child=Y,$J(null,Y),Y=w.child,W=J.child.memoizedState,W===null?W=XX(Z):(H=W.cachePool,H!==null?(U=h9._currentValue,H=H.parent!==U?{parent:U,pool:U}:H):H=$K(),W={baseLanes:W.baseLanes|Z,cachePool:H}),Y.memoizedState=W,Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,$J(J.child,Y);return Y7(w),Z=J.child,J=Z.sibling,Z=j6(Z,{mode:"visible",children:Y.children}),Z.return=w,Z.sibling=null,J!==null&&(Q=w.deletions,Q===null?(w.deletions=[J],w.flags|=16):Q.push(J)),w.child=Z,w.memoizedState=null,Z}function tX(J,w){return w=xZ({mode:"visible",children:w},J.mode),w.return=J,J.child=w}function xZ(J,w){return J=V8(22,J,null,w),J.lanes=0,J}function WX(J,w,Z){return J1(w,J.child,null,Z),J=tX(w,w.pendingProps.children),J.flags|=2,w.memoizedState=null,J}function iq(J,w,Z){J.lanes|=w;var Y=J.alternate;Y!==null&&(Y.lanes|=w),gX(J.return,w,Z)}function UX(J,w,Z,Y,H,X){var Q=J.memoizedState;Q===null?J.memoizedState={isBackwards:w,rendering:null,renderingStartTime:0,last:Y,tail:Z,tailMode:H,treeForkCount:X}:(Q.isBackwards=w,Q.rendering=null,Q.renderingStartTime=0,Q.last=Y,Q.tail=Z,Q.tailMode=H,Q.treeForkCount=X)}function Q$(J,w,Z){var Y=w.pendingProps,H=Y.revealOrder,X=Y.tail;Y=Y.children;var Q=j9.current,W=(Q&2)!==0;if(W?(Q=Q&1|2,w.flags|=128):Q&=1,D9(j9,Q),n9(J,w,Y,Z),Y=a0?bJ:0,!W&&J!==null&&(J.flags&128)!==0)J:for(J=w.child;J!==null;){if(J.tag===13)J.memoizedState!==null&&iq(J,Z,w);else if(J.tag===19)iq(J,Z,w);else if(J.child!==null){J.child.return=J,J=J.child;continue}if(J===w)break J;for(;J.sibling===null;){if(J.return===null||J.return===w)break J;J=J.return}J.sibling.return=J.return,J=J.sibling}switch(H){case"forwards":Z=w.child;for(H=null;Z!==null;)J=Z.alternate,J!==null&&SZ(J)===null&&(H=Z),Z=Z.sibling;Z=H,Z===null?(H=w.child,w.child=null):(H=Z.sibling,Z.sibling=null),UX(w,!1,H,Z,X,Y);break;case"backwards":case"unstable_legacy-backwards":Z=null,H=w.child;for(w.child=null;H!==null;){if(J=H.alternate,J!==null&&SZ(J)===null){w.child=H;break}J=H.sibling,H.sibling=Z,Z=H,H=J}UX(w,!0,Z,null,X,Y);break;case"together":UX(w,!1,null,null,void 0,Y);break;default:w.memoizedState=null}return w.child}function y6(J,w,Z){if(J!==null&&(w.dependencies=J.dependencies),V7|=w.lanes,(Z&w.childLanes)===0)if(J!==null){if(D5(J,w,Z,!1),(Z&w.childLanes)===0)return null}else return null;if(J!==null&&w.child!==J.child)throw Error(c(153));if(w.child!==null){J=w.child,Z=j6(J,J.pendingProps),w.child=Z;for(Z.return=w;J.sibling!==null;)J=J.sibling,Z=Z.sibling=j6(J,J.pendingProps),Z.return=w;Z.sibling=null}return w.child}function eQ(J,w){if((J.lanes&w)!==0)return!0;return J=J.dependencies,J!==null&&CZ(J)?!0:!1}function IF(J,w,Z){switch(w.tag){case 3:LZ(w,w.stateNode.containerInfo),Z7(w,h9,J.memoizedState.cache),t7();break;case 27:case 5:EX(w);break;case 4:LZ(w,w.stateNode.containerInfo);break;case 10:Z7(w,w.type,w.memoizedProps.value);break;case 31:if(w.memoizedState!==null)return w.flags|=128,cX(w),null;break;case 13:var Y=w.memoizedState;if(Y!==null){if(Y.dehydrated!==null)return Y7(w),w.flags|=128,null;if((Z&w.child.childLanes)!==0)return X$(J,w,Z);return Y7(w),J=y6(J,w,Z),J!==null?J.sibling:null}Y7(w);break;case 19:var H=(J.flags&128)!==0;if(Y=(Z&w.childLanes)!==0,Y||(D5(J,w,Z,!1),Y=(Z&w.childLanes)!==0),H){if(Y)return Q$(J,w,Z);w.flags|=128}if(H=w.memoizedState,H!==null&&(H.rendering=null,H.tail=null,H.lastEffect=null),D9(j9,j9.current),Y)break;else return null;case 22:return w.lanes=0,H$(J,w,Z,w.pendingProps);case 24:Z7(w,h9,J.memoizedState.cache)}return y6(J,w,Z)}function W$(J,w,Z){if(J!==null)if(J.memoizedProps!==w.pendingProps)v9=!0;else{if(!eQ(J,Z)&&(w.flags&128)===0)return v9=!1,IF(J,w,Z);v9=(J.flags&131072)!==0?!0:!1}else v9=!1,a0&&(w.flags&1048576)!==0&&qK(w,bJ,w.index);switch(w.lanes=0,w.tag){case 16:J:{var Y=w.pendingProps;if(J=c7(w.elementType),w.type=J,typeof J==="function")SQ(J)?(Y=Z1(J,Y),w.tag=1,w=uq(null,w,J,Y,Z)):(w.tag=0,w=rX(null,w,J,Y,Z));else{if(J!==void 0&&J!==null){var H=J.$$typeof;if(H===OQ){w.tag=11,w=gq(null,w,J,Y,Z);break J}else if(H===NQ){w.tag=14,w=lq(null,w,J,Y,Z);break J}}throw w=_X(J)||J,Error(c(306,w,""))}}return w;case 0:return rX(J,w,w.type,w.pendingProps,Z);case 1:return Y=w.type,H=Z1(Y,w.pendingProps),uq(J,w,Y,H,Z);case 3:J:{if(LZ(w,w.stateNode.containerInfo),J===null)throw Error(c(387));Y=w.pendingProps;var X=w.memoizedState;H=X.element,dX(J,w),VJ(w,Y,null,Z);var Q=w.memoizedState;if(Y=Q.cache,Z7(w,h9,Y),Y!==X.cache&&lX(w,[h9],Z,!0),BJ(),Y=Q.element,X.isDehydrated)if(X={element:Y,isDehydrated:!1,cache:Q.cache},w.updateQueue.baseState=X,w.memoizedState=X,w.flags&256){w=cq(J,w,Y,Z);break J}else if(Y!==H){H=d8(Error(c(424)),w),xJ(H),w=cq(J,w,Y,Z);break J}else{switch(J=w.stateNode.containerInfo,J.nodeType){case 9:J=J.body;break;default:J=J.nodeName==="HTML"?J.ownerDocument.body:J}z9=c8(J.firstChild),r9=w,a0=!0,K7=null,m8=!0,Z=MK(w,null,Y,Z);for(w.child=Z;Z;)Z.flags=Z.flags&-3|4096,Z=Z.sibling}else{if(t7(),Y===H){w=y6(J,w,Z);break J}n9(J,w,Y,Z)}w=w.child}return w;case 26:return RZ(J,w),J===null?(Z=Kk(w.type,null,w.pendingProps,null))?w.memoizedState=Z:a0||(Z=w.type,J=w.pendingProps,Y=mZ(k7.current).createElement(Z),Y[a9]=w,Y[M8]=J,e9(Y,Z,J),c9(Y),w.stateNode=Y):w.memoizedState=Kk(w.type,J.memoizedProps,w.pendingProps,J.memoizedState),null;case 27:return EX(w),J===null&&a0&&(Y=w.stateNode=r$(w.type,w.pendingProps,k7.current),r9=w,m8=!0,H=z9,A7(w.type)?(RQ=H,z9=c8(Y.firstChild)):z9=H),n9(J,w,w.pendingProps.children,Z),RZ(J,w),J===null&&(w.flags|=4194304),w.child;case 5:if(J===null&&a0){if(H=Y=z9)Y=wz(Y,w.type,w.pendingProps,m8),Y!==null?(w.stateNode=Y,r9=w,z9=c8(Y.firstChild),m8=!1,H=!0):H=!1;H||L7(w)}return EX(w),H=w.type,X=w.pendingProps,Q=J!==null?J.memoizedProps:null,Y=X.children,qQ(H,X)?Y=null:Q!==null&&qQ(H,Q)&&(w.flags|=32),w.memoizedState!==null&&(H=lQ(J,w,NF,null,null,Z),pJ._currentValue=H),RZ(J,w),n9(J,w,Y,Z),w.child;case 6:if(J===null&&a0){if(J=Z=z9)Z=Zz(Z,w.pendingProps,m8),Z!==null?(w.stateNode=Z,r9=w,z9=null,J=!0):J=!1;J||L7(w)}return null;case 13:return X$(J,w,Z);case 4:return LZ(w,w.stateNode.containerInfo),Y=w.pendingProps,J===null?w.child=J1(w,null,Y,Z):n9(J,w,Y,Z),w.child;case 11:return gq(J,w,w.type,w.pendingProps,Z);case 7:return n9(J,w,w.pendingProps,Z),w.child;case 8:return n9(J,w,w.pendingProps.children,Z),w.child;case 12:return n9(J,w,w.pendingProps.children,Z),w.child;case 10:return Y=w.pendingProps,Z7(w,w.type,Y.value),n9(J,w,Y.children,Z),w.child;case 9:return H=w.type._context,Y=w.pendingProps.children,e7(w),H=t9(H),Y=Y(H),w.flags|=1,n9(J,w,Y,Z),w.child;case 14:return lq(J,w,w.type,w.pendingProps,Z);case 15:return Y$(J,w,w.type,w.pendingProps,Z);case 19:return Q$(J,w,Z);case 31:return EF(J,w,Z);case 22:return H$(J,w,Z,w.pendingProps);case 24:return e7(w),Y=t9(h9),J===null?(H=xQ(),H===null&&(H=R9,X=bQ(),H.pooledCache=X,X.refCount++,X!==null&&(H.pooledCacheLanes|=Z),H=X),w.memoizedState={parent:Y,cache:H},vQ(w),Z7(w,h9,H)):((J.lanes&Z)!==0&&(dX(J,w),VJ(w,null,null,Z),BJ()),H=J.memoizedState,X=w.memoizedState,H.parent!==Y?(H={parent:Y,cache:Y},w.memoizedState=H,w.lanes===0&&(w.memoizedState=w.updateQueue.baseState=H),Z7(w,h9,Y)):(Y=X.cache,Z7(w,h9,Y),Y!==H.cache&&lX(w,[h9],Z,!0))),n9(J,w,w.pendingProps.children,Z),w.child;case 29:throw w.pendingProps}throw Error(c(156,w.tag))}function V6(J){J.flags|=4}function GX(J,w,Z,Y,H){if(w=(J.mode&32)!==0)w=!1;if(w){if(J.flags|=16777216,(H&335544128)===H)if(J.stateNode.complete)J.flags|=8192;else if(S$())J.flags|=8192;else throw a7=TZ,hQ}else J.flags&=-16777217}function sq(J,w){if(w.type!=="stylesheet"||(w.state.loading&4)!==0)J.flags&=-16777217;else if(J.flags|=16777216,!JR(w))if(S$())J.flags|=8192;else throw a7=TZ,hQ}function ew(J,w){w!==null&&(J.flags|=4),J.flags&16384&&(w=J.tag!==22?jk():536870912,J.lanes|=w,U5|=w)}function XJ(J,w){if(!a0)switch(J.tailMode){case"hidden":w=J.tail;for(var Z=null;w!==null;)w.alternate!==null&&(Z=w),w=w.sibling;Z===null?J.tail=null:Z.sibling=null;break;case"collapsed":Z=J.tail;for(var Y=null;Z!==null;)Z.alternate!==null&&(Y=Z),Z=Z.sibling;Y===null?w||J.tail===null?J.tail=null:J.tail.sibling=null:Y.sibling=null}}function F9(J){var w=J.alternate!==null&&J.alternate.child===J.child,Z=0,Y=0;if(w)for(var H=J.child;H!==null;)Z|=H.lanes|H.childLanes,Y|=H.subtreeFlags&65011712,Y|=H.flags&65011712,H.return=J,H=H.sibling;else for(H=J.child;H!==null;)Z|=H.lanes|H.childLanes,Y|=H.subtreeFlags,Y|=H.flags,H.return=J,H=H.sibling;return J.subtreeFlags|=Y,J.childLanes=Z,w}function CF(J,w,Z){var Y=w.pendingProps;switch(fQ(w),w.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return F9(w),null;case 1:return F9(w),null;case 3:if(Z=w.stateNode,Y=null,J!==null&&(Y=J.memoizedState.cache),w.memoizedState.cache!==Y&&(w.flags|=2048),f6(h9),Z5(),Z.pendingContext&&(Z.context=Z.pendingContext,Z.pendingContext=null),J===null||J.child===null)j1(w)?V6(w):J===null||J.memoizedState.isDehydrated&&(w.flags&256)===0||(w.flags|=1024,JX());return F9(w),null;case 26:var{type:H,memoizedState:X}=w;return J===null?(V6(w),X!==null?(F9(w),sq(w,X)):(F9(w),GX(w,H,null,Y,Z))):X?X!==J.memoizedState?(V6(w),F9(w),sq(w,X)):(F9(w),w.flags&=-16777217):(J=J.memoizedProps,J!==Y&&V6(w),F9(w),GX(w,H,J,Y,Z)),null;case 27:if(BZ(w),Z=k7.current,H=w.type,J!==null&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(!Y){if(w.stateNode===null)throw Error(c(166));return F9(w),null}J=$6.current,j1(w)?Bq(w,J):(J=r$(H,Y,Z),w.stateNode=J,V6(w))}return F9(w),null;case 5:if(BZ(w),H=w.type,J!==null&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(!Y){if(w.stateNode===null)throw Error(c(166));return F9(w),null}if(X=$6.current,j1(w))Bq(w,X);else{var Q=mZ(k7.current);switch(X){case 1:X=Q.createElementNS("http://www.w3.org/2000/svg",H);break;case 2:X=Q.createElementNS("http://www.w3.org/1998/Math/MathML",H);break;default:switch(H){case"svg":X=Q.createElementNS("http://www.w3.org/2000/svg",H);break;case"math":X=Q.createElementNS("http://www.w3.org/1998/Math/MathML",H);break;case"script":X=Q.createElement("div"),X.innerHTML="<script></script>",X=X.removeChild(X.firstChild);break;case"select":X=typeof Y.is==="string"?Q.createElement("select",{is:Y.is}):Q.createElement("select"),Y.multiple?X.multiple=!0:Y.size&&(X.size=Y.size);break;default:X=typeof Y.is==="string"?Q.createElement(H,{is:Y.is}):Q.createElement(H)}}X[a9]=w,X[M8]=Y;J:for(Q=w.child;Q!==null;){if(Q.tag===5||Q.tag===6)X.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.tag!==27&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===w)break J;for(;Q.sibling===null;){if(Q.return===null||Q.return===w)break J;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}w.stateNode=X;J:switch(e9(X,H,Y),H){case"button":case"input":case"select":case"textarea":Y=!!Y.autoFocus;break J;case"img":Y=!0;break J;default:Y=!1}Y&&V6(w)}}return F9(w),GX(w,w.type,J===null?null:J.memoizedProps,w.pendingProps,Z),null;case 6:if(J&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(typeof Y!=="string"&&w.stateNode===null)throw Error(c(166));if(J=k7.current,j1(w)){if(J=w.stateNode,Z=w.memoizedProps,Y=null,H=r9,H!==null)switch(H.tag){case 27:case 5:Y=H.memoizedProps}J[a9]=w,J=J.nodeValue===Z||Y!==null&&Y.suppressHydrationWarning===!0||s$(J.nodeValue,Z)?!0:!1,J||L7(w,!0)}else J=mZ(J).createTextNode(Y),J[a9]=w,w.stateNode=J}return F9(w),null;case 31:if(Z=w.memoizedState,J===null||J.memoizedState!==null){if(Y=j1(w),Z!==null){if(J===null){if(!Y)throw Error(c(318));if(J=w.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(557));J[a9]=w}else t7(),(w.flags&128)===0&&(w.memoizedState=null),w.flags|=4;F9(w),J=!1}else Z=JX(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=Z),J=!0;if(!J){if(w.flags&256)return B8(w),w;return B8(w),null}if((w.flags&128)!==0)throw Error(c(558))}return F9(w),null;case 13:if(Y=w.memoizedState,J===null||J.memoizedState!==null&&J.memoizedState.dehydrated!==null){if(H=j1(w),Y!==null&&Y.dehydrated!==null){if(J===null){if(!H)throw Error(c(318));if(H=w.memoizedState,H=H!==null?H.dehydrated:null,!H)throw Error(c(317));H[a9]=w}else t7(),(w.flags&128)===0&&(w.memoizedState=null),w.flags|=4;F9(w),H=!1}else H=JX(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=H),H=!0;if(!H){if(w.flags&256)return B8(w),w;return B8(w),null}}if(B8(w),(w.flags&128)!==0)return w.lanes=Z,w;return Z=Y!==null,J=J!==null&&J.memoizedState!==null,Z&&(Y=w.child,H=null,Y.alternate!==null&&Y.alternate.memoizedState!==null&&Y.alternate.memoizedState.cachePool!==null&&(H=Y.alternate.memoizedState.cachePool.pool),X=null,Y.memoizedState!==null&&Y.memoizedState.cachePool!==null&&(X=Y.memoizedState.cachePool.pool),X!==H&&(Y.flags|=2048)),Z!==J&&Z&&(w.child.flags|=8192),ew(w,w.updateQueue),F9(w),null;case 4:return Z5(),J===null&&QW(w.stateNode.containerInfo),F9(w),null;case 10:return f6(w.type),F9(w),null;case 19:if(i9(j9),Y=w.memoizedState,Y===null)return F9(w),null;if(H=(w.flags&128)!==0,X=Y.rendering,X===null)if(H)XJ(Y,!1);else{if(P9!==0||J!==null&&(J.flags&128)!==0)for(J=w.child;J!==null;){if(X=SZ(J),X!==null){w.flags|=128,XJ(Y,!1),J=X.updateQueue,w.updateQueue=J,ew(w,J),w.subtreeFlags=0,J=Z;for(Z=w.child;Z!==null;)UK(Z,J),Z=Z.sibling;return D9(j9,j9.current&1|2),a0&&I6(w,Y.treeForkCount),w.child}J=J.sibling}Y.tail!==null&&A8()>vZ&&(w.flags|=128,H=!0,XJ(Y,!1),w.lanes=4194304)}else{if(!H)if(J=SZ(X),J!==null){if(w.flags|=128,H=!0,J=J.updateQueue,w.updateQueue=J,ew(w,J),XJ(Y,!0),Y.tail===null&&Y.tailMode==="hidden"&&!X.alternate&&!a0)return F9(w),null}else 2*A8()-Y.renderingStartTime>vZ&&Z!==536870912&&(w.flags|=128,H=!0,XJ(Y,!1),w.lanes=4194304);Y.isBackwards?(X.sibling=w.child,w.child=X):(J=Y.last,J!==null?J.sibling=X:w.child=X,Y.last=X)}if(Y.tail!==null)return J=Y.tail,Y.rendering=J,Y.tail=J.sibling,Y.renderingStartTime=A8(),J.sibling=null,Z=j9.current,D9(j9,H?Z&1|2:Z&1),a0&&I6(w,Y.treeForkCount),J;return F9(w),null;case 22:case 23:return B8(w),yQ(),Y=w.memoizedState!==null,J!==null?J.memoizedState!==null!==Y&&(w.flags|=8192):Y&&(w.flags|=8192),Y?(Z&536870912)!==0&&(w.flags&128)===0&&(F9(w),w.subtreeFlags&6&&(w.flags|=8192)):F9(w),Z=w.updateQueue,Z!==null&&ew(w,Z.retryQueue),Z=null,J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Z=J.memoizedState.cachePool.pool),Y=null,w.memoizedState!==null&&w.memoizedState.cachePool!==null&&(Y=w.memoizedState.cachePool.pool),Y!==Z&&(w.flags|=2048),J!==null&&i9(n7),null;case 24:return Z=null,J!==null&&(Z=J.memoizedState.cache),w.memoizedState.cache!==Z&&(w.flags|=2048),f6(h9),F9(w),null;case 25:return null;case 30:return null}throw Error(c(156,w.tag))}function TF(J,w){switch(fQ(w),w.tag){case 1:return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 3:return f6(h9),Z5(),J=w.flags,(J&65536)!==0&&(J&128)===0?(w.flags=J&-65537|128,w):null;case 26:case 27:case 5:return BZ(w),null;case 31:if(w.memoizedState!==null){if(B8(w),w.alternate===null)throw Error(c(340));t7()}return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 13:if(B8(w),J=w.memoizedState,J!==null&&J.dehydrated!==null){if(w.alternate===null)throw Error(c(340));t7()}return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 19:return i9(j9),null;case 4:return Z5(),null;case 10:return f6(w.type),null;case 22:case 23:return B8(w),yQ(),J!==null&&i9(n7),J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 24:return f6(h9),null;case 25:return null;default:return null}}function U$(J,w){switch(fQ(w),w.tag){case 3:f6(h9),Z5();break;case 26:case 27:case 5:BZ(w);break;case 4:Z5();break;case 31:w.memoizedState!==null&&B8(w);break;case 13:B8(w);break;case 19:i9(j9);break;case 10:f6(w.type);break;case 22:case 23:B8(w),yQ(),J!==null&&i9(n7);break;case 24:f6(h9)}}function tJ(J,w){try{var Z=w.updateQueue,Y=Z!==null?Z.lastEffect:null;if(Y!==null){var H=Y.next;Z=H;do{if((Z.tag&J)===J){Y=void 0;var{create:X,inst:Q}=Z;Y=X(),Q.destroy=Y}Z=Z.next}while(Z!==H)}}catch(W){H9(w,w.return,W)}}function B7(J,w,Z){try{var Y=w.updateQueue,H=Y!==null?Y.lastEffect:null;if(H!==null){var X=H.next;Y=X;do{if((Y.tag&J)===J){var Q=Y.inst,W=Q.destroy;if(W!==void 0){Q.destroy=void 0,H=w;var U=Z,G=W;try{G()}catch(q){H9(H,U,q)}}}Y=Y.next}while(Y!==X)}}catch(q){H9(w,w.return,q)}}function G$(J){var w=J.updateQueue;if(w!==null){var Z=J.stateNode;try{NK(w,Z)}catch(Y){H9(J,J.return,Y)}}}function q$(J,w,Z){Z.props=Z1(J.type,J.memoizedProps),Z.state=J.memoizedState;try{Z.componentWillUnmount()}catch(Y){H9(J,w,Y)}}function AJ(J,w){try{var Z=J.ref;if(Z!==null){switch(J.tag){case 26:case 27:case 5:var Y=J.stateNode;break;case 30:Y=J.stateNode;break;default:Y=J.stateNode}typeof Z==="function"?J.refCleanup=Z(Y):Z.current=Y}}catch(H){H9(J,w,H)}}function K6(J,w){var{ref:Z,refCleanup:Y}=J;if(Z!==null)if(typeof Y==="function")try{Y()}catch(H){H9(J,w,H)}finally{J.refCleanup=null,J=J.alternate,J!=null&&(J.refCleanup=null)}else if(typeof Z==="function")try{Z(null)}catch(H){H9(J,w,H)}else Z.current=null}function k$(J){var{type:w,memoizedProps:Z,stateNode:Y}=J;try{J:switch(w){case"button":case"input":case"select":case"textarea":Z.autoFocus&&Y.focus();break J;case"img":Z.src?Y.src=Z.src:Z.srcSet&&(Y.srcset=Z.srcSet)}}catch(H){H9(J,J.return,H)}}function qX(J,w,Z){try{var Y=J.stateNode;nF(Y,J.type,Z,w),Y[M8]=w}catch(H){H9(J,J.return,H)}}function K$(J){return J.tag===5||J.tag===3||J.tag===26||J.tag===27&&A7(J.type)||J.tag===4}function kX(J){J:for(;;){for(;J.sibling===null;){if(J.return===null||K$(J.return))return null;J=J.return}J.sibling.return=J.return;for(J=J.sibling;J.tag!==5&&J.tag!==6&&J.tag!==18;){if(J.tag===27&&A7(J.type))continue J;if(J.flags&2)continue J;if(J.child===null||J.tag===4)continue J;else J.child.return=J,J=J.child}if(!(J.flags&2))return J.stateNode}}function eX(J,w,Z){var Y=J.tag;if(Y===5||Y===6)J=J.stateNode,w?(Z.nodeType===9?Z.body:Z.nodeName==="HTML"?Z.ownerDocument.body:Z).insertBefore(J,w):(w=Z.nodeType===9?Z.body:Z.nodeName==="HTML"?Z.ownerDocument.body:Z,w.appendChild(J),Z=Z._reactRootContainer,Z!==null&&Z!==void 0||w.onclick!==null||(w.onclick=P6));else if(Y!==4&&(Y===27&&A7(J.type)&&(Z=J.stateNode,w=null),J=J.child,J!==null))for(eX(J,w,Z),J=J.sibling;J!==null;)eX(J,w,Z),J=J.sibling}function hZ(J,w,Z){var Y=J.tag;if(Y===5||Y===6)J=J.stateNode,w?Z.insertBefore(J,w):Z.appendChild(J);else if(Y!==4&&(Y===27&&A7(J.type)&&(Z=J.stateNode),J=J.child,J!==null))for(hZ(J,w,Z),J=J.sibling;J!==null;)hZ(J,w,Z),J=J.sibling}function $$(J){var{stateNode:w,memoizedProps:Z}=J;try{for(var Y=J.type,H=w.attributes;H.length;)w.removeAttributeNode(H[0]);e9(w,Y,Z),w[a9]=J,w[M8]=Z}catch(X){H9(J,J.return,X)}}function PF(J,w){if(J=J.containerInfo,UQ=sZ,J=JK(J),CQ(J)){if("selectionStart"in J)var Z={start:J.selectionStart,end:J.selectionEnd};else J:{Z=(Z=J.ownerDocument)&&Z.defaultView||window;var Y=Z.getSelection&&Z.getSelection();if(Y&&Y.rangeCount!==0){Z=Y.anchorNode;var{anchorOffset:H,focusNode:X}=Y;Y=Y.focusOffset;try{Z.nodeType,X.nodeType}catch(B){Z=null;break J}var Q=0,W=-1,U=-1,G=0,q=0,$=J,K=null;w:for(;;){for(var R;;){if($!==Z||H!==0&&$.nodeType!==3||(W=Q+H),$!==X||Y!==0&&$.nodeType!==3||(U=Q+Y),$.nodeType===3&&(Q+=$.nodeValue.length),(R=$.firstChild)===null)break;K=$,$=R}for(;;){if($===J)break w;if(K===Z&&++G===H&&(W=Q),K===X&&++q===Y&&(U=Q),(R=$.nextSibling)!==null)break;$=K,K=$.parentNode}$=R}Z=W===-1||U===-1?null:{start:W,end:U}}else Z=null}Z=Z||{start:0,end:0}}else Z=null;GQ={focusedElem:J,selectionRange:Z},sZ=!1;for(u9=w;u9!==null;)if(w=u9,J=w.child,(w.subtreeFlags&1028)!==0&&J!==null)J.return=w,u9=J;else for(;u9!==null;){switch(w=u9,X=w.alternate,J=w.flags,w.tag){case 0:if((J&4)!==0&&(J=w.updateQueue,J=J!==null?J.events:null,J!==null))for(Z=0;Z<J.length;Z++)H=J[Z],H.ref.impl=H.nextImpl;break;case 11:case 15:break;case 1:if((J&1024)!==0&&X!==null){J=void 0,Z=w,H=X.memoizedProps,X=X.memoizedState,Y=Z.stateNode;try{var z=Z1(Z.type,H);J=Y.getSnapshotBeforeUpdate(z,X),Y.__reactInternalSnapshotBeforeUpdate=J}catch(B){H9(Z,Z.return,B)}}break;case 3:if((J&1024)!==0){if(J=w.stateNode.containerInfo,Z=J.nodeType,Z===9)kQ(J);else if(Z===1)switch(J.nodeName){case"HEAD":case"HTML":case"BODY":kQ(J);break;default:J.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((J&1024)!==0)throw Error(c(163))}if(J=w.sibling,J!==null){J.return=w.return,u9=J;break}u9=w.return}}function R$(J,w,Z){var Y=Z.flags;switch(Z.tag){case 0:case 11:case 15:A6(J,Z),Y&4&&tJ(5,Z);break;case 1:if(A6(J,Z),Y&4)if(J=Z.stateNode,w===null)try{J.componentDidMount()}catch(Q){H9(Z,Z.return,Q)}else{var H=Z1(Z.type,w.memoizedProps);w=w.memoizedState;try{J.componentDidUpdate(H,w,J.__reactInternalSnapshotBeforeUpdate)}catch(Q){H9(Z,Z.return,Q)}}Y&64&&G$(Z),Y&512&&AJ(Z,Z.return);break;case 3:if(A6(J,Z),Y&64&&(J=Z.updateQueue,J!==null)){if(w=null,Z.child!==null)switch(Z.child.tag){case 27:case 5:w=Z.child.stateNode;break;case 1:w=Z.child.stateNode}try{NK(J,w)}catch(Q){H9(Z,Z.return,Q)}}break;case 27:w===null&&Y&4&&$$(Z);case 26:case 5:A6(J,Z),w===null&&Y&4&&k$(Z),Y&512&&AJ(Z,Z.return);break;case 12:A6(J,Z);break;case 31:A6(J,Z),Y&4&&O$(J,Z);break;case 13:A6(J,Z),Y&4&&N$(J,Z),Y&64&&(J=Z.memoizedState,J!==null&&(J=J.dehydrated,J!==null&&(Z=gF.bind(null,Z),Yz(J,Z))));break;case 22:if(Y=Z.memoizedState!==null||C6,!Y){w=w!==null&&w.memoizedState!==null||x9,H=C6;var X=x9;C6=Y,(x9=w)&&!X?E6(J,Z,(Z.subtreeFlags&8772)!==0):A6(J,Z),C6=H,x9=X}break;case 30:break;default:A6(J,Z)}}function D$(J){var w=J.alternate;w!==null&&(J.alternate=null,D$(w)),J.child=null,J.deletions=null,J.sibling=null,J.tag===5&&(w=J.stateNode,w!==null&&BQ(w)),J.stateNode=null,J.return=null,J.dependencies=null,J.memoizedProps=null,J.memoizedState=null,J.pendingProps=null,J.stateNode=null,J.updateQueue=null}function _6(J,w,Z){for(Z=Z.child;Z!==null;)M$(J,w,Z),Z=Z.sibling}function M$(J,w,Z){if(E8&&typeof E8.onCommitFiberUnmount==="function")try{E8.onCommitFiberUnmount(cJ,Z)}catch(X){}switch(Z.tag){case 26:x9||K6(Z,w),_6(J,w,Z),Z.memoizedState?Z.memoizedState.count--:Z.stateNode&&(Z=Z.stateNode,Z.parentNode.removeChild(Z));break;case 27:x9||K6(Z,w);var Y=_9,H=$8;A7(Z.type)&&(_9=Z.stateNode,$8=!1),_6(J,w,Z),TJ(Z.stateNode),_9=Y,$8=H;break;case 5:x9||K6(Z,w);case 6:if(Y=_9,H=$8,_9=null,_6(J,w,Z),_9=Y,$8=H,_9!==null)if($8)try{(_9.nodeType===9?_9.body:_9.nodeName==="HTML"?_9.ownerDocument.body:_9).removeChild(Z.stateNode)}catch(X){H9(Z,w,X)}else try{_9.removeChild(Z.stateNode)}catch(X){H9(Z,w,X)}break;case 18:_9!==null&&($8?(J=_9,Wk(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J,Z.stateNode),K5(J)):Wk(_9,Z.stateNode));break;case 4:Y=_9,H=$8,_9=Z.stateNode.containerInfo,$8=!0,_6(J,w,Z),_9=Y,$8=H;break;case 0:case 11:case 14:case 15:B7(2,Z,w),x9||B7(4,Z,w),_6(J,w,Z);break;case 1:x9||(K6(Z,w),Y=Z.stateNode,typeof Y.componentWillUnmount==="function"&&q$(Z,w,Y)),_6(J,w,Z);break;case 21:_6(J,w,Z);break;case 22:x9=(Y=x9)||Z.memoizedState!==null,_6(J,w,Z),x9=Y;break;default:_6(J,w,Z)}}function O$(J,w){if(w.memoizedState===null&&(J=w.alternate,J!==null&&(J=J.memoizedState,J!==null))){J=J.dehydrated;try{K5(J)}catch(Z){H9(w,w.return,Z)}}}function N$(J,w){if(w.memoizedState===null&&(J=w.alternate,J!==null&&(J=J.memoizedState,J!==null&&(J=J.dehydrated,J!==null))))try{K5(J)}catch(Z){H9(w,w.return,Z)}}function SF(J){switch(J.tag){case 31:case 13:case 19:var w=J.stateNode;return w===null&&(w=J.stateNode=new oq),w;case 22:return J=J.stateNode,w=J._retryCache,w===null&&(w=J._retryCache=new oq),w;default:throw Error(c(435,J.tag))}}function JZ(J,w){var Z=SF(J);w.forEach(function(Y){if(!Z.has(Y)){Z.add(Y);var H=lF.bind(null,J,Y);Y.then(H,H)}})}function k8(J,w){var Z=w.deletions;if(Z!==null)for(var Y=0;Y<Z.length;Y++){var H=Z[Y],X=J,Q=w,W=Q;J:for(;W!==null;){switch(W.tag){case 27:if(A7(W.type)){_9=W.stateNode,$8=!1;break J}break;case 5:_9=W.stateNode,$8=!1;break J;case 3:case 4:_9=W.stateNode.containerInfo,$8=!0;break J}W=W.return}if(_9===null)throw Error(c(160));M$(X,Q,H),_9=null,$8=!1,X=H.alternate,X!==null&&(X.return=null),H.return=null}if(w.subtreeFlags&13886)for(w=w.child;w!==null;)F$(w,J),w=w.sibling}function F$(J,w){var{alternate:Z,flags:Y}=J;switch(J.tag){case 0:case 11:case 14:case 15:k8(w,J),K8(J),Y&4&&(B7(3,J,J.return),tJ(3,J),B7(5,J,J.return));break;case 1:k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Y&64&&C6&&(J=J.updateQueue,J!==null&&(Y=J.callbacks,Y!==null&&(Z=J.shared.hiddenCallbacks,J.shared.hiddenCallbacks=Z===null?Y:Z.concat(Y))));break;case 26:var H=J6;if(k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Y&4){var X=Z!==null?Z.memoizedState:null;if(Y=J.memoizedState,Z===null)if(Y===null)if(J.stateNode===null){J:{Y=J.type,Z=J.memoizedProps,H=H.ownerDocument||H;w:switch(Y){case"title":if(X=H.getElementsByTagName("title")[0],!X||X[oJ]||X[a9]||X.namespaceURI==="http://www.w3.org/2000/svg"||X.hasAttribute("itemprop"))X=H.createElement(Y),H.head.insertBefore(X,H.querySelector("head > title"));e9(X,Y,Z),X[a9]=J,c9(X),Y=X;break J;case"link":var Q=Rk("link","href",H).get(Y+(Z.href||""));if(Q){for(var W=0;W<Q.length;W++)if(X=Q[W],X.getAttribute("href")===(Z.href==null||Z.href===""?null:Z.href)&&X.getAttribute("rel")===(Z.rel==null?null:Z.rel)&&X.getAttribute("title")===(Z.title==null?null:Z.title)&&X.getAttribute("crossorigin")===(Z.crossOrigin==null?null:Z.crossOrigin)){Q.splice(W,1);break w}}X=H.createElement(Y),e9(X,Y,Z),H.head.appendChild(X);break;case"meta":if(Q=Rk("meta","content",H).get(Y+(Z.content||""))){for(W=0;W<Q.length;W++)if(X=Q[W],X.getAttribute("content")===(Z.content==null?null:""+Z.content)&&X.getAttribute("name")===(Z.name==null?null:Z.name)&&X.getAttribute("property")===(Z.property==null?null:Z.property)&&X.getAttribute("http-equiv")===(Z.httpEquiv==null?null:Z.httpEquiv)&&X.getAttribute("charset")===(Z.charSet==null?null:Z.charSet)){Q.splice(W,1);break w}}X=H.createElement(Y),e9(X,Y,Z),H.head.appendChild(X);break;default:throw Error(c(468,Y))}X[a9]=J,c9(X),Y=X}J.stateNode=Y}else Dk(H,J.type,J.stateNode);else J.stateNode=$k(H,Y,J.memoizedProps);else X!==Y?(X===null?Z.stateNode!==null&&(Z=Z.stateNode,Z.parentNode.removeChild(Z)):X.count--,Y===null?Dk(H,J.type,J.stateNode):$k(H,Y,J.memoizedProps)):Y===null&&J.stateNode!==null&&qX(J,J.memoizedProps,Z.memoizedProps)}break;case 27:k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Z!==null&&Y&4&&qX(J,J.memoizedProps,Z.memoizedProps);break;case 5:if(k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),J.flags&32){H=J.stateNode;try{H5(H,"")}catch(z){H9(J,J.return,z)}}Y&4&&J.stateNode!=null&&(H=J.memoizedProps,qX(J,H,Z!==null?Z.memoizedProps:H)),Y&1024&&(KX=!0);break;case 6:if(k8(w,J),K8(J),Y&4){if(J.stateNode===null)throw Error(c(162));Y=J.memoizedProps,Z=J.stateNode;try{Z.nodeValue=Y}catch(z){H9(J,J.return,z)}}break;case 3:if(OZ=null,H=J6,J6=uZ(w.containerInfo),k8(w,J),J6=H,K8(J),Y&4&&Z!==null&&Z.memoizedState.isDehydrated)try{K5(w.containerInfo)}catch(z){H9(J,J.return,z)}KX&&(KX=!1,z$(J));break;case 4:Y=J6,J6=uZ(J.stateNode.containerInfo),k8(w,J),K8(J),J6=Y;break;case 12:k8(w,J),K8(J);break;case 31:k8(w,J),K8(J),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 13:k8(w,J),K8(J),J.child.flags&8192&&J.memoizedState!==null!==(Z!==null&&Z.memoizedState!==null)&&(WY=A8()),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 22:H=J.memoizedState!==null;var U=Z!==null&&Z.memoizedState!==null,G=C6,q=x9;if(C6=G||H,x9=q||U,k8(w,J),x9=q,C6=G,K8(J),Y&8192)J:for(w=J.stateNode,w._visibility=H?w._visibility&-2:w._visibility|1,H&&(Z===null||U||C6||x9||i7(J)),Z=null,w=J;;){if(w.tag===5||w.tag===26){if(Z===null){U=Z=w;try{if(X=U.stateNode,H)Q=X.style,typeof Q.setProperty==="function"?Q.setProperty("display","none","important"):Q.display="none";else{W=U.stateNode;var $=U.memoizedProps.style,K=$!==void 0&&$!==null&&$.hasOwnProperty("display")?$.display:null;W.style.display=K==null||typeof K==="boolean"?"":(""+K).trim()}}catch(z){H9(U,U.return,z)}}}else if(w.tag===6){if(Z===null){U=w;try{U.stateNode.nodeValue=H?"":U.memoizedProps}catch(z){H9(U,U.return,z)}}}else if(w.tag===18){if(Z===null){U=w;try{var R=U.stateNode;H?Uk(R,!0):Uk(U.stateNode,!1)}catch(z){H9(U,U.return,z)}}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===J)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===J)break J;for(;w.sibling===null;){if(w.return===null||w.return===J)break J;Z===w&&(Z=null),w=w.return}Z===w&&(Z=null),w.sibling.return=w.return,w=w.sibling}Y&4&&(Y=J.updateQueue,Y!==null&&(Z=Y.retryQueue,Z!==null&&(Y.retryQueue=null,JZ(J,Z))));break;case 19:k8(w,J),K8(J),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 30:break;case 21:break;default:k8(w,J),K8(J)}}function K8(J){var w=J.flags;if(w&2){try{for(var Z,Y=J.return;Y!==null;){if(K$(Y)){Z=Y;break}Y=Y.return}if(Z==null)throw Error(c(160));switch(Z.tag){case 27:var H=Z.stateNode,X=kX(J);hZ(J,X,H);break;case 5:var Q=Z.stateNode;Z.flags&32&&(H5(Q,""),Z.flags&=-33);var W=kX(J);hZ(J,W,Q);break;case 3:case 4:var U=Z.stateNode.containerInfo,G=kX(J);eX(J,G,U);break;default:throw Error(c(161))}}catch(q){H9(J,J.return,q)}J.flags&=-3}w&4096&&(J.flags&=-4097)}function z$(J){if(J.subtreeFlags&1024)for(J=J.child;J!==null;){var w=J;z$(w),w.tag===5&&w.flags&1024&&w.stateNode.reset(),J=J.sibling}}function A6(J,w){if(w.subtreeFlags&8772)for(w=w.child;w!==null;)R$(J,w.alternate,w),w=w.sibling}function i7(J){for(J=J.child;J!==null;){var w=J;switch(w.tag){case 0:case 11:case 14:case 15:B7(4,w,w.return),i7(w);break;case 1:K6(w,w.return);var Z=w.stateNode;typeof Z.componentWillUnmount==="function"&&q$(w,w.return,Z),i7(w);break;case 27:TJ(w.stateNode);case 26:case 5:K6(w,w.return),i7(w);break;case 22:w.memoizedState===null&&i7(w);break;case 30:i7(w);break;default:i7(w)}J=J.sibling}}function E6(J,w,Z){Z=Z&&(w.subtreeFlags&8772)!==0;for(w=w.child;w!==null;){var Y=w.alternate,H=J,X=w,Q=X.flags;switch(X.tag){case 0:case 11:case 15:E6(H,X,Z),tJ(4,X);break;case 1:if(E6(H,X,Z),Y=X,H=Y.stateNode,typeof H.componentDidMount==="function")try{H.componentDidMount()}catch(G){H9(Y,Y.return,G)}if(Y=X,H=Y.updateQueue,H!==null){var W=Y.stateNode;try{var U=H.shared.hiddenCallbacks;if(U!==null)for(H.shared.hiddenCallbacks=null,H=0;H<U.length;H++)OK(U[H],W)}catch(G){H9(Y,Y.return,G)}}Z&&Q&64&&G$(X),AJ(X,X.return);break;case 27:$$(X);case 26:case 5:E6(H,X,Z),Z&&Y===null&&Q&4&&k$(X),AJ(X,X.return);break;case 12:E6(H,X,Z);break;case 31:E6(H,X,Z),Z&&Q&4&&O$(H,X);break;case 13:E6(H,X,Z),Z&&Q&4&&N$(H,X);break;case 22:X.memoizedState===null&&E6(H,X,Z),AJ(X,X.return);break;case 30:break;default:E6(H,X,Z)}w=w.sibling}}function JW(J,w){var Z=null;J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Z=J.memoizedState.cachePool.pool),J=null,w.memoizedState!==null&&w.memoizedState.cachePool!==null&&(J=w.memoizedState.cachePool.pool),J!==Z&&(J!=null&&J.refCount++,Z!=null&&aJ(Z))}function wW(J,w){J=null,w.alternate!==null&&(J=w.alternate.memoizedState.cache),w=w.memoizedState.cache,w!==J&&(w.refCount++,J!=null&&aJ(J))}function e8(J,w,Z,Y){if(w.subtreeFlags&10256)for(w=w.child;w!==null;)L$(J,w,Z,Y),w=w.sibling}function L$(J,w,Z,Y){var H=w.flags;switch(w.tag){case 0:case 11:case 15:e8(J,w,Z,Y),H&2048&&tJ(9,w);break;case 1:e8(J,w,Z,Y);break;case 3:e8(J,w,Z,Y),H&2048&&(J=null,w.alternate!==null&&(J=w.alternate.memoizedState.cache),w=w.memoizedState.cache,w!==J&&(w.refCount++,J!=null&&aJ(J)));break;case 12:if(H&2048){e8(J,w,Z,Y),J=w.stateNode;try{var X=w.memoizedProps,Q=X.id,W=X.onPostCommit;typeof W==="function"&&W(Q,w.alternate===null?"mount":"update",J.passiveEffectDuration,-0)}catch(U){H9(w,w.return,U)}}else e8(J,w,Z,Y);break;case 31:e8(J,w,Z,Y);break;case 13:e8(J,w,Z,Y);break;case 23:break;case 22:X=w.stateNode,Q=w.alternate,w.memoizedState!==null?X._visibility&2?e8(J,w,Z,Y):EJ(J,w):X._visibility&2?e8(J,w,Z,Y):(X._visibility|=2,b1(J,w,Z,Y,(w.subtreeFlags&10256)!==0||!1)),H&2048&&JW(Q,w);break;case 24:e8(J,w,Z,Y),H&2048&&wW(w.alternate,w);break;default:e8(J,w,Z,Y)}}function b1(J,w,Z,Y,H){H=H&&((w.subtreeFlags&10256)!==0||!1);for(w=w.child;w!==null;){var X=J,Q=w,W=Z,U=Y,G=Q.flags;switch(Q.tag){case 0:case 11:case 15:b1(X,Q,W,U,H),tJ(8,Q);break;case 23:break;case 22:var q=Q.stateNode;Q.memoizedState!==null?q._visibility&2?b1(X,Q,W,U,H):EJ(X,Q):(q._visibility|=2,b1(X,Q,W,U,H)),H&&G&2048&&JW(Q.alternate,Q);break;case 24:b1(X,Q,W,U,H),H&&G&2048&&wW(Q.alternate,Q);break;default:b1(X,Q,W,U,H)}w=w.sibling}}function EJ(J,w){if(w.subtreeFlags&10256)for(w=w.child;w!==null;){var Z=J,Y=w,H=Y.flags;switch(Y.tag){case 22:EJ(Z,Y),H&2048&&JW(Y.alternate,Y);break;case 24:EJ(Z,Y),H&2048&&wW(Y.alternate,Y);break;default:EJ(Z,Y)}w=w.sibling}}function f1(J,w,Z){if(J.subtreeFlags&RJ)for(J=J.child;J!==null;)B$(J,w,Z),J=J.sibling}function B$(J,w,Z){switch(J.tag){case 26:f1(J,w,Z),J.flags&RJ&&J.memoizedState!==null&&Dz(Z,J6,J.memoizedState,J.memoizedProps);break;case 5:f1(J,w,Z);break;case 3:case 4:var Y=J6;J6=uZ(J.stateNode.containerInfo),f1(J,w,Z),J6=Y;break;case 22:J.memoizedState===null&&(Y=J.alternate,Y!==null&&Y.memoizedState!==null?(Y=RJ,RJ=16777216,f1(J,w,Z),RJ=Y):f1(J,w,Z));break;default:f1(J,w,Z)}}function V$(J){var w=J.alternate;if(w!==null&&(J=w.child,J!==null)){w.child=null;do w=J.sibling,J.sibling=null,J=w;while(J!==null)}}function QJ(J){var w=J.deletions;if((J.flags&16)!==0){if(w!==null)for(var Z=0;Z<w.length;Z++){var Y=w[Z];u9=Y,A$(Y,J)}V$(J)}if(J.subtreeFlags&10256)for(J=J.child;J!==null;)_$(J),J=J.sibling}function _$(J){switch(J.tag){case 0:case 11:case 15:QJ(J),J.flags&2048&&B7(9,J,J.return);break;case 3:QJ(J);break;case 12:QJ(J);break;case 22:var w=J.stateNode;J.memoizedState!==null&&w._visibility&2&&(J.return===null||J.return.tag!==13)?(w._visibility&=-3,DZ(J)):QJ(J);break;default:QJ(J)}}function DZ(J){var w=J.deletions;if((J.flags&16)!==0){if(w!==null)for(var Z=0;Z<w.length;Z++){var Y=w[Z];u9=Y,A$(Y,J)}V$(J)}for(J=J.child;J!==null;){switch(w=J,w.tag){case 0:case 11:case 15:B7(8,w,w.return),DZ(w);break;case 22:Z=w.stateNode,Z._visibility&2&&(Z._visibility&=-3,DZ(w));break;default:DZ(w)}J=J.sibling}}function A$(J,w){for(;u9!==null;){var Z=u9;switch(Z.tag){case 0:case 11:case 15:B7(8,Z,w);break;case 23:case 22:if(Z.memoizedState!==null&&Z.memoizedState.cachePool!==null){var Y=Z.memoizedState.cachePool.pool;Y!=null&&Y.refCount++}break;case 24:aJ(Z.memoizedState.cache)}if(Y=Z.child,Y!==null)Y.return=Z,u9=Y;else J:for(Z=J;u9!==null;){Y=u9;var{sibling:H,return:X}=Y;if(D$(Y),Y===Z){u9=null;break J}if(H!==null){H.return=X,u9=H;break J}u9=X}}}function C8(){return(w9&2)!==0&&o0!==0?o0&-o0:P0.T!==null?XW():hk()}function C$(){if(_8===0)if((o0&536870912)===0||a0){var J=iw;iw<<=1,(iw&3932160)===0&&(iw=262144),_8=J}else _8=536870912;return J=P8.current,J!==null&&(J.flags|=32),_8}function D8(J,w,Z){if(J===R9&&(Y9===2||Y9===9)||J.cancelPendingCommit!==null)q5(J,0),G7(J,o0,_8,!1);if(sJ(J,Z),(w9&2)===0||J!==R9)J===R9&&((w9&2)===0&&(r7|=Z),P9===4&&G7(J,o0,_8,!1)),D6(J)}function T$(J,w,Z){if((w9&6)!==0)throw Error(c(327));var Y=!Z&&(w&127)===0&&(w&J.expiredLanes)===0||iJ(J,w),H=Y?hF(J,w):$X(J,w,!0),X=Y;do{if(H===0){O5&&!Y&&G7(J,w,0,!1);break}else{if(Z=J.current.alternate,X&&!bF(Z)){H=$X(J,w,!1),X=!1;continue}if(H===2){if(X=w,J.errorRecoveryDisabledLanes&X)var Q=0;else Q=J.pendingLanes&-536870913,Q=Q!==0?Q:Q&536870912?536870912:0;if(Q!==0){w=Q;J:{var W=J;H=IJ;var U=W.current.memoizedState.isDehydrated;if(U&&(q5(W,Q).flags|=256),Q=$X(W,Q,!1),Q!==2){if(ZW&&!U){W.errorRecoveryDisabledLanes|=X,r7|=X,H=4;break J}X=R8,R8=H,X!==null&&(R8===null?R8=X:R8.push.apply(R8,X))}H=Q}if(X=!1,H!==2)continue}}if(H===1){q5(J,0),G7(J,w,0,!0);break}J:{switch(Y=J,X=H,X){case 0:case 1:throw Error(c(345));case 4:if((w&4194048)!==w)break;case 6:G7(Y,w,_8,!U7);break J;case 2:R8=null;break;case 3:case 5:break;default:throw Error(c(329))}if((w&62914560)===w&&(H=WY+300-A8(),10<H)){if(G7(Y,w,_8,!U7),aZ(Y,0,!0)!==0)break J;b6=w,Y.timeoutHandle=n$(nq.bind(null,Y,Z,R8,yZ,JQ,w,_8,r7,U5,U7,X,"Throttled",-0,0),H);break J}nq(Y,Z,R8,yZ,JQ,w,_8,r7,U5,U7,X,null,-0,0)}}break}while(1);D6(J)}function nq(J,w,Z,Y,H,X,Q,W,U,G,q,$,K,R){if(J.timeoutHandle=-1,$=w.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:P6},B$(w,X,$);var z=(X&62914560)===X?WY-A8():(X&4194048)===X?E$-A8():0;if(z=Mz($,z),z!==null){b6=X,J.cancelPendingCommit=z(rq.bind(null,J,w,X,Z,Y,H,Q,W,U,q,$,null,K,R)),G7(J,X,Q,!G);return}}rq(J,w,X,Z,Y,H,Q,W,U)}function bF(J){for(var w=J;;){var Z=w.tag;if((Z===0||Z===11||Z===15)&&w.flags&16384&&(Z=w.updateQueue,Z!==null&&(Z=Z.stores,Z!==null)))for(var Y=0;Y<Z.length;Y++){var H=Z[Y],X=H.getSnapshot;H=H.value;try{if(!T8(X(),H))return!1}catch(Q){return!1}}if(Z=w.child,w.subtreeFlags&16384&&Z!==null)Z.return=w,w=Z;else{if(w===J)break;for(;w.sibling===null;){if(w.return===null||w.return===J)return!0;w=w.return}w.sibling.return=w.return,w=w.sibling}}return!0}function G7(J,w,Z,Y){w&=~YW,w&=~r7,J.suspendedLanes|=w,J.pingedLanes&=~w,Y&&(J.warmLanes|=w),Y=J.expirationTimes;for(var H=w;0<H;){var X=31-I8(H),Q=1<<X;Y[X]=-1,H&=~Q}Z!==0&&fk(J,Z,w)}function UY(){return(w9&6)===0?(eJ(0,!1),!1):!0}function HW(){if(c0!==null){if(Y9===0)var J=c0.return;else J=c0,S6=W1=null,mQ(J),e1=null,hJ=0,J=c0;for(;J!==null;)U$(J.alternate,J),J=J.return;c0=null}}function q5(J,w){var Z=J.timeoutHandle;Z!==-1&&(J.timeoutHandle=-1,tF(Z)),Z=J.cancelPendingCommit,Z!==null&&(J.cancelPendingCommit=null,Z()),b6=0,HW(),R9=J,c0=Z=j6(J.current,null),o0=w,Y9=0,L8=null,U7=!1,O5=iJ(J,w),ZW=!1,U5=_8=YW=r7=V7=P9=0,R8=IJ=null,JQ=!1,(w&8)!==0&&(w|=w&32);var Y=J.entangledLanes;if(Y!==0)for(J=J.entanglements,Y&=w;0<Y;){var H=31-I8(Y),X=1<<H;w|=J[H],Y&=~X}return g6=w,JY(),Z}function P$(J,w){y0=null,P0.H=yJ,w===M5||w===ZY?(w=Iq(),Y9=3):w===hQ?(w=Iq(),Y9=4):Y9=w===tQ?8:w!==null&&typeof w==="object"&&typeof w.then==="function"?6:1,L8=w,c0===null&&(P9=1,bZ(J,d8(w,J.current)))}function S$(){var J=P8.current;return J===null?!0:(o0&4194048)===o0?u8===null?!0:!1:(o0&62914560)===o0||(o0&536870912)!==0?J===u8:!1}function j$(){var J=P0.H;return P0.H=yJ,J===null?yJ:J}function f$(){var J=P0.A;return P0.A=jF,J}function gZ(){P9=4,U7||(o0&4194048)!==o0&&P8.current!==null||(O5=!0),(V7&134217727)===0&&(r7&134217727)===0||R9===null||G7(R9,o0,_8,!1)}function $X(J,w,Z){var Y=w9;w9|=2;var H=j$(),X=f$();if(R9!==J||o0!==w)yZ=null,q5(J,w);w=!1;var Q=P9;J:do try{if(Y9!==0&&c0!==null){var W=c0,U=L8;switch(Y9){case 8:HW(),Q=6;break J;case 3:case 2:case 9:case 6:P8.current===null&&(w=!0);var G=Y9;if(Y9=0,L8=null,o1(J,W,U,G),Z&&O5){Q=0;break J}break;default:G=Y9,Y9=0,L8=null,o1(J,W,U,G)}}xF(),Q=P9;break}catch(q){P$(J,q)}while(1);return w&&J.shellSuspendCounter++,S6=W1=null,w9=Y,P0.H=H,P0.A=X,c0===null&&(R9=null,o0=0,JY()),Q}function xF(){for(;c0!==null;)b$(c0)}function hF(J,w){var Z=w9;w9|=2;var Y=j$(),H=f$();R9!==J||o0!==w?(yZ=null,vZ=A8()+500,q5(J,w)):O5=iJ(J,w);J:do try{if(Y9!==0&&c0!==null){w=c0;var X=L8;w:switch(Y9){case 1:Y9=0,L8=null,o1(J,w,X,1);break;case 2:case 9:if(Eq(X)){Y9=0,L8=null,aq(w);break}w=function(){Y9!==2&&Y9!==9||R9!==J||(Y9=7),D6(J)},X.then(w,w);break J;case 3:Y9=7;break J;case 4:Y9=5;break J;case 7:Eq(X)?(Y9=0,L8=null,aq(w)):(Y9=0,L8=null,o1(J,w,X,7));break;case 5:var Q=null;switch(c0.tag){case 26:Q=c0.memoizedState;case 5:case 27:var W=c0;if(Q?JR(Q):W.stateNode.complete){Y9=0,L8=null;var U=W.sibling;if(U!==null)c0=U;else{var G=W.return;G!==null?(c0=G,GY(G)):c0=null}break w}}Y9=0,L8=null,o1(J,w,X,5);break;case 6:Y9=0,L8=null,o1(J,w,X,6);break;case 8:HW(),P9=6;break J;default:throw Error(c(462))}}vF();break}catch(q){P$(J,q)}while(1);if(S6=W1=null,P0.H=Y,P0.A=H,w9=Z,c0!==null)return 0;return R9=null,o0=0,JY(),P9}function vF(){for(;c0!==null&&!QN();)b$(c0)}function b$(J){var w=W$(J.alternate,J,g6);J.memoizedProps=J.pendingProps,w===null?GY(J):c0=w}function aq(J){var w=J,Z=w.alternate;switch(w.tag){case 15:case 0:w=mq(Z,w,w.pendingProps,w.type,void 0,o0);break;case 11:w=mq(Z,w,w.pendingProps,w.type.render,w.ref,o0);break;case 5:mQ(w);default:U$(Z,w),w=c0=UK(w,g6),w=W$(Z,w,g6)}J.memoizedProps=J.pendingProps,w===null?GY(J):c0=w}function o1(J,w,Z,Y){S6=W1=null,mQ(w),e1=null,hJ=0;var H=w.return;try{if(AF(J,H,w,Z,o0)){P9=1,bZ(J,d8(Z,J.current)),c0=null;return}}catch(X){if(H!==null)throw c0=H,X;P9=1,bZ(J,d8(Z,J.current)),c0=null;return}if(w.flags&32768){if(a0||Y===1)J=!0;else if(O5||(o0&536870912)!==0)J=!1;else if(U7=J=!0,Y===2||Y===9||Y===3||Y===6)Y=P8.current,Y!==null&&Y.tag===13&&(Y.flags|=16384);x$(w,J)}else GY(w)}function GY(J){var w=J;do{if((w.flags&32768)!==0){x$(w,U7);return}J=w.return;var Z=CF(w.alternate,w,g6);if(Z!==null){c0=Z;return}if(w=w.sibling,w!==null){c0=w;return}c0=w=J}while(w!==null);P9===0&&(P9=5)}function x$(J,w){do{var Z=TF(J.alternate,J);if(Z!==null){Z.flags&=32767,c0=Z;return}if(Z=J.return,Z!==null&&(Z.flags|=32768,Z.subtreeFlags=0,Z.deletions=null),!w&&(J=J.sibling,J!==null)){c0=J;return}c0=J=Z}while(J!==null);P9=6,c0=null}function rq(J,w,Z,Y,H,X,Q,W,U){J.cancelPendingCommit=null;do qY();while(g9!==0);if((w9&6)!==0)throw Error(c(327));if(w!==null){if(w===J.current)throw Error(c(177));if(X=w.lanes|w.childLanes,X|=TQ,MN(J,Z,X,Q,W,U),J===R9&&(c0=R9=null,o0=0),G5=w,M7=J,b6=Z,wQ=X,ZQ=H,I$=Y,(w.subtreeFlags&10256)!==0||(w.flags&10256)!==0?(J.callbackNode=null,J.callbackPriority=0,pF(VZ,function(){return l$(),null})):(J.callbackNode=null,J.callbackPriority=0),Y=(w.flags&13878)!==0,(w.subtreeFlags&13878)!==0||Y){Y=P0.T,P0.T=null,H=Z9.p,Z9.p=2,Q=w9,w9|=4;try{PF(J,w,Z)}finally{w9=Q,Z9.p=H,P0.T=Y}}g9=1,h$(),v$(),y$()}}function h$(){if(g9===1){g9=0;var J=M7,w=G5,Z=(w.flags&13878)!==0;if((w.subtreeFlags&13878)!==0||Z){Z=P0.T,P0.T=null;var Y=Z9.p;Z9.p=2;var H=w9;w9|=4;try{F$(w,J);var X=GQ,Q=JK(J.containerInfo),W=X.focusedElem,U=X.selectionRange;if(Q!==W&&W&&W.ownerDocument&&ek(W.ownerDocument.documentElement,W)){if(U!==null&&CQ(W)){var{start:G,end:q}=U;if(q===void 0&&(q=G),"selectionStart"in W)W.selectionStart=G,W.selectionEnd=Math.min(q,W.value.length);else{var $=W.ownerDocument||document,K=$&&$.defaultView||window;if(K.getSelection){var R=K.getSelection(),z=W.textContent.length,B=Math.min(U.start,z),M=U.end===void 0?B:Math.min(U.end,z);!R.extend&&B>M&&(Q=M,M=B,B=Q);var k=Fq(W,B),O=Fq(W,M);if(k&&O&&(R.rangeCount!==1||R.anchorNode!==k.node||R.anchorOffset!==k.offset||R.focusNode!==O.node||R.focusOffset!==O.offset)){var D=$.createRange();D.setStart(k.node,k.offset),R.removeAllRanges(),B>M?(R.addRange(D),R.extend(O.node,O.offset)):(D.setEnd(O.node,O.offset),R.addRange(D))}}}}$=[];for(R=W;R=R.parentNode;)R.nodeType===1&&$.push({element:R,left:R.scrollLeft,top:R.scrollTop});typeof W.focus==="function"&&W.focus();for(W=0;W<$.length;W++){var L=$[W];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}sZ=!!UQ,GQ=UQ=null}finally{w9=H,Z9.p=Y,P0.T=Z}}J.current=w,g9=2}}function v$(){if(g9===2){g9=0;var J=M7,w=G5,Z=(w.flags&8772)!==0;if((w.subtreeFlags&8772)!==0||Z){Z=P0.T,P0.T=null;var Y=Z9.p;Z9.p=2;var H=w9;w9|=4;try{R$(J,w.alternate,w)}finally{w9=H,Z9.p=Y,P0.T=Z}}g9=3}}function y$(){if(g9===4||g9===3){g9=0,WN();var J=M7,w=G5,Z=b6,Y=I$;(w.subtreeFlags&10256)!==0||(w.flags&10256)!==0?g9=5:(g9=0,G5=M7=null,g$(J,J.pendingLanes));var H=J.pendingLanes;if(H===0&&(D7=null),LQ(Z),w=w.stateNode,E8&&typeof E8.onCommitFiberRoot==="function")try{E8.onCommitFiberRoot(cJ,w,void 0,(w.current.flags&128)===128)}catch(U){}if(Y!==null){w=P0.T,H=Z9.p,Z9.p=2,P0.T=null;try{for(var X=J.onRecoverableError,Q=0;Q<Y.length;Q++){var W=Y[Q];X(W.value,{componentStack:W.stack})}}finally{P0.T=w,Z9.p=H}}(b6&3)!==0&&qY(),D6(J),H=J.pendingLanes,(Z&261930)!==0&&(H&42)!==0?J===YQ?CJ++:(CJ=0,YQ=J):CJ=0,eJ(0,!1)}}function g$(J,w){(J.pooledCacheLanes&=w)===0&&(w=J.pooledCache,w!=null&&(J.pooledCache=null,aJ(w)))}function qY(){return h$(),v$(),y$(),l$()}function l$(){if(g9!==5)return!1;var J=M7,w=wQ;wQ=0;var Z=LQ(b6),Y=P0.T,H=Z9.p;try{Z9.p=32>Z?32:Z,P0.T=null,Z=ZQ,ZQ=null;var X=M7,Q=b6;if(g9=0,G5=M7=null,b6=0,(w9&6)!==0)throw Error(c(331));var W=w9;if(w9|=4,_$(X.current),L$(X,X.current,Q,Z),w9=W,eJ(0,!1),E8&&typeof E8.onPostCommitFiberRoot==="function")try{E8.onPostCommitFiberRoot(cJ,X)}catch(U){}return!0}finally{Z9.p=H,P0.T=Y,g$(J,w)}}function tq(J,w,Z){w=d8(Z,w),w=aX(J.stateNode,w,2),J=R7(J,w,2),J!==null&&(sJ(J,2),D6(J))}function H9(J,w,Z){if(J.tag===3)tq(J,J,Z);else for(;w!==null;){if(w.tag===3){tq(w,J,Z);break}else if(w.tag===1){var Y=w.stateNode;if(typeof w.type.getDerivedStateFromError==="function"||typeof Y.componentDidCatch==="function"&&(D7===null||!D7.has(Y))){J=d8(Z,J),Z=w$(2),Y=R7(w,Z,2),Y!==null&&(Z$(Z,Y,w,J),sJ(Y,2),D6(Y));break}}w=w.return}}function RX(J,w,Z){var Y=J.pingCache;if(Y===null){Y=J.pingCache=new fF;var H=new Set;Y.set(w,H)}else H=Y.get(w),H===void 0&&(H=new Set,Y.set(w,H));H.has(Z)||(ZW=!0,H.add(Z),J=yF.bind(null,J,w,Z),w.then(J,J))}function yF(J,w,Z){var Y=J.pingCache;Y!==null&&Y.delete(w),J.pingedLanes|=J.suspendedLanes&Z,J.warmLanes&=~Z,R9===J&&(o0&Z)===Z&&(P9===4||P9===3&&(o0&62914560)===o0&&300>A8()-WY?(w9&2)===0&&q5(J,0):YW|=Z,U5===o0&&(U5=0)),D6(J)}function p$(J,w){w===0&&(w=jk()),J=Q1(J,w),J!==null&&(sJ(J,w),D6(J))}function gF(J){var w=J.memoizedState,Z=0;w!==null&&(Z=w.retryLane),p$(J,Z)}function lF(J,w){var Z=0;switch(J.tag){case 31:case 13:var{stateNode:Y,memoizedState:H}=J;H!==null&&(Z=H.retryLane);break;case 19:Y=J.stateNode;break;case 22:Y=J.stateNode._retryCache;break;default:throw Error(c(314))}Y!==null&&Y.delete(w),p$(J,Z)}function pF(J,w){return FQ(J,w)}function D6(J){J!==x1&&J.next===null&&(x1===null?lZ=x1=J:x1=x1.next=J),pZ=!0,HQ||(HQ=!0,mF())}function eJ(J,w){if(!DX&&pZ){DX=!0;do{var Z=!1;for(var Y=lZ;Y!==null;){if(!w)if(J!==0){var H=Y.pendingLanes;if(H===0)var X=0;else{var{suspendedLanes:Q,pingedLanes:W}=Y;X=(1<<31-I8(42|J)+1)-1,X&=H&~(Q&~W),X=X&201326741?X&201326741|1:X?X|2:0}X!==0&&(Z=!0,eq(Y,X))}else X=o0,X=aZ(Y,Y===R9?X:0,Y.cancelPendingCommit!==null||Y.timeoutHandle!==-1),(X&3)===0||iJ(Y,X)||(Z=!0,eq(Y,X));Y=Y.next}}while(Z);DX=!1}}function dF(){d$()}function d$(){pZ=HQ=!1;var J=0;q7!==0&&rF()&&(J=q7);for(var w=A8(),Z=null,Y=lZ;Y!==null;){var H=Y.next,X=m$(Y,w);if(X===0)Y.next=null,Z===null?lZ=H:Z.next=H,H===null&&(x1=Z);else if(Z=Y,J!==0||(X&3)!==0)pZ=!0;Y=H}g9!==0&&g9!==5||eJ(J,!1),q7!==0&&(q7=0)}function m$(J,w){for(var{suspendedLanes:Z,pingedLanes:Y,expirationTimes:H}=J,X=J.pendingLanes&-62914561;0<X;){var Q=31-I8(X),W=1<<Q,U=H[Q];if(U===-1){if((W&Z)===0||(W&Y)!==0)H[Q]=DN(W,w)}else U<=w&&(J.expiredLanes|=W);X&=~W}if(w=R9,Z=o0,Z=aZ(J,J===w?Z:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),Y=J.callbackNode,Z===0||J===w&&(Y9===2||Y9===9)||J.cancelPendingCommit!==null)return Y!==null&&Y!==null&&cH(Y),J.callbackNode=null,J.callbackPriority=0;if((Z&3)===0||iJ(J,Z)){if(w=Z&-Z,w===J.callbackPriority)return w;switch(Y!==null&&cH(Y),LQ(Z)){case 2:case 8:Z=Pk;break;case 32:Z=VZ;break;case 268435456:Z=Sk;break;default:Z=VZ}return Y=u$.bind(null,J),Z=FQ(Z,Y),J.callbackPriority=w,J.callbackNode=Z,w}return Y!==null&&Y!==null&&cH(Y),J.callbackPriority=2,J.callbackNode=null,2}function u$(J,w){if(g9!==0&&g9!==5)return J.callbackNode=null,J.callbackPriority=0,null;var Z=J.callbackNode;if(qY()&&J.callbackNode!==Z)return null;var Y=o0;if(Y=aZ(J,J===R9?Y:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),Y===0)return null;return T$(J,Y,w),m$(J,A8()),J.callbackNode!=null&&J.callbackNode===Z?u$.bind(null,J):null}function eq(J,w){if(qY())return null;T$(J,w,!0)}function mF(){eF(function(){(w9&6)!==0?FQ(Tk,dF):d$()})}function XW(){if(q7===0){var J=X5;J===0&&(J=cw,cw<<=1,(cw&261888)===0&&(cw=256)),q7=J}return q7}function Jk(J){return J==null||typeof J==="symbol"||typeof J==="boolean"?null:typeof J==="function"?J:XZ(""+J)}function wk(J,w){var Z=w.ownerDocument.createElement("input");return Z.name=w.name,Z.value=w.value,J.id&&Z.setAttribute("form",J.id),w.parentNode.insertBefore(Z,w),J=new FormData(J),Z.parentNode.removeChild(Z),J}function uF(J,w,Z,Y,H){if(w==="submit"&&Z&&Z.stateNode===H){var X=Jk((H[M8]||null).action),Q=Y.submitter;Q&&(w=(w=Q[M8]||null)?Jk(w.formAction):Q.getAttribute("formAction"),w!==null&&(X=w,Q=null));var W=new rZ("action","action",null,Y,H);J.push({event:W,listeners:[{instance:null,listener:function(){if(Y.defaultPrevented){if(q7!==0){var U=Q?wk(H,Q):new FormData(H);oX(Z,{pending:!0,data:U,method:H.method,action:X},null,U)}}else typeof X==="function"&&(W.preventDefault(),U=Q?wk(H,Q):new FormData(H),oX(Z,{pending:!0,data:U,method:H.method,action:X},X,U))},currentTarget:H}]})}}function c$(J,w){w=(w&4)!==0;for(var Z=0;Z<J.length;Z++){var Y=J[Z],H=Y.event;Y=Y.listeners;J:{var X=void 0;if(w)for(var Q=Y.length-1;0<=Q;Q--){var W=Y[Q],U=W.instance,G=W.currentTarget;if(W=W.listener,U!==X&&H.isPropagationStopped())break J;X=W,H.currentTarget=G;try{X(H)}catch(q){AZ(q)}H.currentTarget=null,X=U}else for(Q=0;Q<Y.length;Q++){if(W=Y[Q],U=W.instance,G=W.currentTarget,W=W.listener,U!==X&&H.isPropagationStopped())break J;X=W,H.currentTarget=G;try{X(H)}catch(q){AZ(q)}H.currentTarget=null,X=U}}}}function u0(J,w){var Z=w[CX];Z===void 0&&(Z=w[CX]=new Set);var Y=J+"__bubble";Z.has(Y)||(i$(w,J,2,!1),Z.add(Y))}function MX(J,w,Z){var Y=0;w&&(Y|=4),i$(Z,J,Y,w)}function QW(J){if(!J[wZ]){J[wZ]=!0,vk.forEach(function(Z){Z!=="selectionchange"&&(cF.has(Z)||MX(Z,!1,J),MX(Z,!0,J))});var w=J.nodeType===9?J:J.ownerDocument;w===null||w[wZ]||(w[wZ]=!0,MX("selectionchange",!1,w))}}function i$(J,w,Z,Y){switch(XR(w)){case 2:var H=Fz;break;case 8:H=zz;break;default:H=qW}Z=H.bind(null,w,Z,J),H=void 0,!fX||w!=="touchstart"&&w!=="touchmove"&&w!=="wheel"||(H=!0),Y?H!==void 0?J.addEventListener(w,Z,{capture:!0,passive:H}):J.addEventListener(w,Z,!0):H!==void 0?J.addEventListener(w,Z,{passive:H}):J.addEventListener(w,Z,!1)}function OX(J,w,Z,Y,H){var X=Y;if((w&1)===0&&(w&2)===0&&Y!==null)J:for(;;){if(Y===null)return;var Q=Y.tag;if(Q===3||Q===4){var W=Y.stateNode.containerInfo;if(W===H)break;if(Q===4)for(Q=Y.return;Q!==null;){var U=Q.tag;if((U===3||U===4)&&Q.stateNode.containerInfo===H)return;Q=Q.return}for(;W!==null;){if(Q=g1(W),Q===null)return;if(U=Q.tag,U===5||U===6||U===26||U===27){Y=X=Q;continue J}W=W.parentNode}}Y=Y.return}ck(function(){var G=X,q=_Q(Z),$=[];J:{var K=QK.get(J);if(K!==void 0){var R=rZ,z=J;switch(J){case"keypress":if(WZ(Z)===0)break J;case"keydown":case"keyup":R=lN;break;case"focusin":z="focus",R=aH;break;case"focusout":z="blur",R=aH;break;case"beforeblur":case"afterblur":R=aH;break;case"click":if(Z.button===2)break J;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=qq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=CN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=mN;break;case ZK:case YK:case HK:R=SN;break;case XK:R=cN;break;case"scroll":case"scrollend":R=EN;break;case"wheel":R=sN;break;case"copy":case"cut":case"paste":R=fN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Kq;break;case"toggle":case"beforetoggle":R=nN}var B=(w&4)!==0,M=!B&&(J==="scroll"||J==="scrollend"),k=B?K!==null?K+"Capture":null:K;B=[];for(var O=G,D;O!==null;){var L=O;if(D=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||D===null||k===null||(L=SJ(O,k),L!=null&&B.push(lJ(O,L,D))),M)break;O=O.return}0<B.length&&(K=new R(K,z,null,Z,q),$.push({event:K,listeners:B}))}}if((w&7)===0){J:{if(K=J==="mouseover"||J==="pointerover",R=J==="mouseout"||J==="pointerout",K&&Z!==jX&&(z=Z.relatedTarget||Z.fromElement)&&(g1(z)||z[$5]))break J;if(R||K){if(K=q.window===q?q:(K=q.ownerDocument)?K.defaultView||K.parentWindow:window,R){if(z=Z.relatedTarget||Z.toElement,R=G,z=z?g1(z):null,z!==null&&(M=uJ(z),B=z.tag,z!==M||B!==5&&B!==27&&B!==6))z=null}else R=null,z=G;if(R!==z){if(B=qq,L="onMouseLeave",k="onMouseEnter",O="mouse",J==="pointerout"||J==="pointerover")B=Kq,L="onPointerLeave",k="onPointerEnter",O="pointer";if(M=R==null?K:qJ(R),D=z==null?K:qJ(z),K=new B(L,O+"leave",R,Z,q),K.target=M,K.relatedTarget=D,L=null,g1(q)===G&&(B=new B(k,O+"enter",z,Z,q),B.target=D,B.relatedTarget=M,L=B),M=L,R&&z)w:{B=iF,k=R,O=z,D=0;for(L=k;L;L=B(L))D++;L=0;for(var T=O;T;T=B(T))L++;for(;0<D-L;)k=B(k),D--;for(;0<L-D;)O=B(O),L--;for(;D--;){if(k===O||O!==null&&k===O.alternate){B=k;break w}k=B(k),O=B(O)}B=null}else B=null;R!==null&&Zk($,K,R,B,!1),z!==null&&M!==null&&Zk($,M,z,B,!0)}}}J:{if(K=G?qJ(G):window,R=K.nodeName&&K.nodeName.toLowerCase(),R==="select"||R==="input"&&K.type==="file")var E=Mq;else if(Dq(K))if(rk)E=XF;else{E=YF;var A=ZF}else R=K.nodeName,!R||R.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?G&&VQ(G.elementType)&&(E=Mq):E=HF;if(E&&(E=E(J,G))){ak($,E,Z,q);break J}A&&A(J,K,G),J==="focusout"&&G&&K.type==="number"&&G.memoizedProps.value!=null&&SX(K,"number",K.value)}switch(A=G?qJ(G):window,J){case"focusin":if(Dq(A)||A.contentEditable==="true")d1=A,bX=G,FJ=null;break;case"focusout":FJ=bX=d1=null;break;case"mousedown":xX=!0;break;case"contextmenu":case"mouseup":case"dragend":xX=!1,zq($,Z,q);break;case"selectionchange":if(WF)break;case"keydown":case"keyup":zq($,Z,q)}var j;if(IQ)J:{switch(J){case"compositionstart":var _="onCompositionStart";break J;case"compositionend":_="onCompositionEnd";break J;case"compositionupdate":_="onCompositionUpdate";break J}_=void 0}else p1?ok(J,Z)&&(_="onCompositionEnd"):J==="keydown"&&Z.keyCode===229&&(_="onCompositionStart");if(_&&(sk&&Z.locale!=="ko"&&(p1||_!=="onCompositionStart"?_==="onCompositionEnd"&&p1&&(j=ik()):(W7=q,AQ=("value"in W7)?W7.value:W7.textContent,p1=!0)),A=dZ(G,_),0<A.length&&(_=new kq(_,J,null,Z,q),$.push({event:_,listeners:A}),j?_.data=j:(j=nk(Z),j!==null&&(_.data=j)))),j=rN?tN(J,Z):eN(J,Z))_=dZ(G,"onBeforeInput"),0<_.length&&(A=new kq("onBeforeInput","beforeinput",null,Z,q),$.push({event:A,listeners:_}),A.data=j);uF($,J,G,Z,q)}c$($,w)})}function lJ(J,w,Z){return{instance:J,listener:w,currentTarget:Z}}function dZ(J,w){for(var Z=w+"Capture",Y=[];J!==null;){var H=J,X=H.stateNode;if(H=H.tag,H!==5&&H!==26&&H!==27||X===null||(H=SJ(J,Z),H!=null&&Y.unshift(lJ(J,H,X)),H=SJ(J,w),H!=null&&Y.push(lJ(J,H,X))),J.tag===3)return Y;J=J.return}return[]}function iF(J){if(J===null)return null;do J=J.return;while(J&&J.tag!==5&&J.tag!==27);return J?J:null}function Zk(J,w,Z,Y,H){for(var X=w._reactName,Q=[];Z!==null&&Z!==Y;){var W=Z,U=W.alternate,G=W.stateNode;if(W=W.tag,U!==null&&U===Y)break;W!==5&&W!==26&&W!==27||G===null||(U=G,H?(G=SJ(Z,X),G!=null&&Q.unshift(lJ(Z,G,U))):H||(G=SJ(Z,X),G!=null&&Q.push(lJ(Z,G,U)))),Z=Z.return}Q.length!==0&&J.push({event:w,listeners:Q})}function Yk(J){return(typeof J==="string"?J:""+J).replace(sF,`
`).replace(oF,"")}function s$(J,w){return w=Yk(w),Yk(J)===w?!0:!1}function G9(J,w,Z,Y,H,X){switch(Z){case"children":typeof Y==="string"?w==="body"||w==="textarea"&&Y===""||H5(J,Y):(typeof Y==="number"||typeof Y==="bigint")&&w!=="body"&&H5(J,""+Y);break;case"className":ow(J,"class",Y);break;case"tabIndex":ow(J,"tabindex",Y);break;case"dir":case"role":case"viewBox":case"width":case"height":ow(J,Z,Y);break;case"style":uk(J,Y,X);break;case"data":if(w!=="object"){ow(J,"data",Y);break}case"src":case"href":if(Y===""&&(w!=="a"||Z!=="href")){J.removeAttribute(Z);break}if(Y==null||typeof Y==="function"||typeof Y==="symbol"||typeof Y==="boolean"){J.removeAttribute(Z);break}Y=XZ(""+Y),J.setAttribute(Z,Y);break;case"action":case"formAction":if(typeof Y==="function"){J.setAttribute(Z,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof X==="function"&&(Z==="formAction"?(w!=="input"&&G9(J,w,"name",H.name,H,null),G9(J,w,"formEncType",H.formEncType,H,null),G9(J,w,"formMethod",H.formMethod,H,null),G9(J,w,"formTarget",H.formTarget,H,null)):(G9(J,w,"encType",H.encType,H,null),G9(J,w,"method",H.method,H,null),G9(J,w,"target",H.target,H,null)));if(Y==null||typeof Y==="symbol"||typeof Y==="boolean"){J.removeAttribute(Z);break}Y=XZ(""+Y),J.setAttribute(Z,Y);break;case"onClick":Y!=null&&(J.onclick=P6);break;case"onScroll":Y!=null&&u0("scroll",J);break;case"onScrollEnd":Y!=null&&u0("scrollend",J);break;case"dangerouslySetInnerHTML":if(Y!=null){if(typeof Y!=="object"||!("__html"in Y))throw Error(c(61));if(Z=Y.__html,Z!=null){if(H.children!=null)throw Error(c(60));J.innerHTML=Z}}break;case"multiple":J.multiple=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;case"muted":J.muted=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(Y==null||typeof Y==="function"||typeof Y==="boolean"||typeof Y==="symbol"){J.removeAttribute("xlink:href");break}Z=XZ(""+Y),J.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Z);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,""+Y):J.removeAttribute(Z);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":Y&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,""):J.removeAttribute(Z);break;case"capture":case"download":Y===!0?J.setAttribute(Z,""):Y!==!1&&Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,Y):J.removeAttribute(Z);break;case"cols":case"rows":case"size":case"span":Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"&&!isNaN(Y)&&1<=Y?J.setAttribute(Z,Y):J.removeAttribute(Z);break;case"rowSpan":case"start":Y==null||typeof Y==="function"||typeof Y==="symbol"||isNaN(Y)?J.removeAttribute(Z):J.setAttribute(Z,Y);break;case"popover":u0("beforetoggle",J),u0("toggle",J),HZ(J,"popover",Y);break;case"xlinkActuate":B6(J,"http://www.w3.org/1999/xlink","xlink:actuate",Y);break;case"xlinkArcrole":B6(J,"http://www.w3.org/1999/xlink","xlink:arcrole",Y);break;case"xlinkRole":B6(J,"http://www.w3.org/1999/xlink","xlink:role",Y);break;case"xlinkShow":B6(J,"http://www.w3.org/1999/xlink","xlink:show",Y);break;case"xlinkTitle":B6(J,"http://www.w3.org/1999/xlink","xlink:title",Y);break;case"xlinkType":B6(J,"http://www.w3.org/1999/xlink","xlink:type",Y);break;case"xmlBase":B6(J,"http://www.w3.org/XML/1998/namespace","xml:base",Y);break;case"xmlLang":B6(J,"http://www.w3.org/XML/1998/namespace","xml:lang",Y);break;case"xmlSpace":B6(J,"http://www.w3.org/XML/1998/namespace","xml:space",Y);break;case"is":HZ(J,"is",Y);break;case"innerText":case"textContent":break;default:if(!(2<Z.length)||Z[0]!=="o"&&Z[0]!=="O"||Z[1]!=="n"&&Z[1]!=="N")Z=_N.get(Z)||Z,HZ(J,Z,Y)}}function WQ(J,w,Z,Y,H,X){switch(Z){case"style":uk(J,Y,X);break;case"dangerouslySetInnerHTML":if(Y!=null){if(typeof Y!=="object"||!("__html"in Y))throw Error(c(61));if(Z=Y.__html,Z!=null){if(H.children!=null)throw Error(c(60));J.innerHTML=Z}}break;case"children":typeof Y==="string"?H5(J,Y):(typeof Y==="number"||typeof Y==="bigint")&&H5(J,""+Y);break;case"onScroll":Y!=null&&u0("scroll",J);break;case"onScrollEnd":Y!=null&&u0("scrollend",J);break;case"onClick":Y!=null&&(J.onclick=P6);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yk.hasOwnProperty(Z))J:{if(Z[0]==="o"&&Z[1]==="n"&&(H=Z.endsWith("Capture"),w=Z.slice(2,H?Z.length-7:void 0),X=J[M8]||null,X=X!=null?X[Z]:null,typeof X==="function"&&J.removeEventListener(w,X,H),typeof Y==="function")){typeof X!=="function"&&X!==null&&(Z in J?J[Z]=null:J.hasAttribute(Z)&&J.removeAttribute(Z)),J.addEventListener(w,Y,H);break J}Z in J?J[Z]=Y:Y===!0?J.setAttribute(Z,""):HZ(J,Z,Y)}}}function e9(J,w,Z){switch(w){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":u0("error",J),u0("load",J);var Y=!1,H=!1,X;for(X in Z)if(Z.hasOwnProperty(X)){var Q=Z[X];if(Q!=null)switch(X){case"src":Y=!0;break;case"srcSet":H=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,w));default:G9(J,w,X,Q,Z,null)}}H&&G9(J,w,"srcSet",Z.srcSet,Z,null),Y&&G9(J,w,"src",Z.src,Z,null);return;case"input":u0("invalid",J);var W=X=Q=H=null,U=null,G=null;for(Y in Z)if(Z.hasOwnProperty(Y)){var q=Z[Y];if(q!=null)switch(Y){case"name":H=q;break;case"type":Q=q;break;case"checked":U=q;break;case"defaultChecked":G=q;break;case"value":X=q;break;case"defaultValue":W=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,w));break;default:G9(J,w,Y,q,Z,null)}}pk(J,X,W,U,G,Q,H,!1);return;case"select":u0("invalid",J),Y=Q=X=null;for(H in Z)if(Z.hasOwnProperty(H)&&(W=Z[H],W!=null))switch(H){case"value":X=W;break;case"defaultValue":Q=W;break;case"multiple":Y=W;default:G9(J,w,H,W,Z,null)}w=X,Z=Q,J.multiple=!!Y,w!=null?a1(J,!!Y,w,!1):Z!=null&&a1(J,!!Y,Z,!0);return;case"textarea":u0("invalid",J),X=H=Y=null;for(Q in Z)if(Z.hasOwnProperty(Q)&&(W=Z[Q],W!=null))switch(Q){case"value":Y=W;break;case"defaultValue":H=W;break;case"children":X=W;break;case"dangerouslySetInnerHTML":if(W!=null)throw Error(c(91));break;default:G9(J,w,Q,W,Z,null)}mk(J,Y,H,X);return;case"option":for(U in Z)if(Z.hasOwnProperty(U)&&(Y=Z[U],Y!=null))switch(U){case"selected":J.selected=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;default:G9(J,w,U,Y,Z,null)}return;case"dialog":u0("beforetoggle",J),u0("toggle",J),u0("cancel",J),u0("close",J);break;case"iframe":case"object":u0("load",J);break;case"video":case"audio":for(Y=0;Y<gJ.length;Y++)u0(gJ[Y],J);break;case"image":u0("error",J),u0("load",J);break;case"details":u0("toggle",J);break;case"embed":case"source":case"link":u0("error",J),u0("load",J);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in Z)if(Z.hasOwnProperty(G)&&(Y=Z[G],Y!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,w));default:G9(J,w,G,Y,Z,null)}return;default:if(VQ(w)){for(q in Z)Z.hasOwnProperty(q)&&(Y=Z[q],Y!==void 0&&WQ(J,w,q,Y,Z,void 0));return}}for(W in Z)Z.hasOwnProperty(W)&&(Y=Z[W],Y!=null&&G9(J,w,W,Y,Z,null))}function nF(J,w,Z,Y){switch(w){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var H=null,X=null,Q=null,W=null,U=null,G=null,q=null;for(R in Z){var $=Z[R];if(Z.hasOwnProperty(R)&&$!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":U=$;default:Y.hasOwnProperty(R)||G9(J,w,R,null,Y,$)}}for(var K in Y){var R=Y[K];if($=Z[K],Y.hasOwnProperty(K)&&(R!=null||$!=null))switch(K){case"type":X=R;break;case"name":H=R;break;case"checked":G=R;break;case"defaultChecked":q=R;break;case"value":Q=R;break;case"defaultValue":W=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,w));break;default:R!==$&&G9(J,w,K,R,Y,$)}}PX(J,Q,W,U,G,q,X,H);return;case"select":R=Q=W=K=null;for(X in Z)if(U=Z[X],Z.hasOwnProperty(X)&&U!=null)switch(X){case"value":break;case"multiple":R=U;default:Y.hasOwnProperty(X)||G9(J,w,X,null,Y,U)}for(H in Y)if(X=Y[H],U=Z[H],Y.hasOwnProperty(H)&&(X!=null||U!=null))switch(H){case"value":K=X;break;case"defaultValue":W=X;break;case"multiple":Q=X;default:X!==U&&G9(J,w,H,X,Y,U)}w=W,Z=Q,Y=R,K!=null?a1(J,!!Z,K,!1):!!Y!==!!Z&&(w!=null?a1(J,!!Z,w,!0):a1(J,!!Z,Z?[]:"",!1));return;case"textarea":R=K=null;for(W in Z)if(H=Z[W],Z.hasOwnProperty(W)&&H!=null&&!Y.hasOwnProperty(W))switch(W){case"value":break;case"children":break;default:G9(J,w,W,null,Y,H)}for(Q in Y)if(H=Y[Q],X=Z[Q],Y.hasOwnProperty(Q)&&(H!=null||X!=null))switch(Q){case"value":K=H;break;case"defaultValue":R=H;break;case"children":break;case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(91));break;default:H!==X&&G9(J,w,Q,H,Y,X)}dk(J,K,R);return;case"option":for(var z in Z)if(K=Z[z],Z.hasOwnProperty(z)&&K!=null&&!Y.hasOwnProperty(z))switch(z){case"selected":J.selected=!1;break;default:G9(J,w,z,null,Y,K)}for(U in Y)if(K=Y[U],R=Z[U],Y.hasOwnProperty(U)&&K!==R&&(K!=null||R!=null))switch(U){case"selected":J.selected=K&&typeof K!=="function"&&typeof K!=="symbol";break;default:G9(J,w,U,K,Y,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in Z)K=Z[B],Z.hasOwnProperty(B)&&K!=null&&!Y.hasOwnProperty(B)&&G9(J,w,B,null,Y,K);for(G in Y)if(K=Y[G],R=Z[G],Y.hasOwnProperty(G)&&K!==R&&(K!=null||R!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(c(137,w));break;default:G9(J,w,G,K,Y,R)}return;default:if(VQ(w)){for(var M in Z)K=Z[M],Z.hasOwnProperty(M)&&K!==void 0&&!Y.hasOwnProperty(M)&&WQ(J,w,M,void 0,Y,K);for(q in Y)K=Y[q],R=Z[q],!Y.hasOwnProperty(q)||K===R||K===void 0&&R===void 0||WQ(J,w,q,K,Y,R);return}}for(var k in Z)K=Z[k],Z.hasOwnProperty(k)&&K!=null&&!Y.hasOwnProperty(k)&&G9(J,w,k,null,Y,K);for($ in Y)K=Y[$],R=Z[$],!Y.hasOwnProperty($)||K===R||K==null&&R==null||G9(J,w,$,K,Y,R)}function Hk(J){switch(J){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aF(){if(typeof performance.getEntriesByType==="function"){for(var J=0,w=0,Z=performance.getEntriesByType("resource"),Y=0;Y<Z.length;Y++){var H=Z[Y],X=H.transferSize,Q=H.initiatorType,W=H.duration;if(X&&W&&Hk(Q)){Q=0,W=H.responseEnd;for(Y+=1;Y<Z.length;Y++){var U=Z[Y],G=U.startTime;if(G>W)break;var{transferSize:q,initiatorType:$}=U;q&&Hk($)&&(U=U.responseEnd,Q+=q*(U<W?1:(W-G)/(U-G)))}if(--Y,w+=8*(X+Q)/(H.duration/1000),J++,10<J)break}}if(0<J)return w/J/1e6}return navigator.connection&&(J=navigator.connection.downlink,typeof J==="number")?J:5}function mZ(J){return J.nodeType===9?J:J.ownerDocument}function Xk(J){switch(J){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o$(J,w){if(J===0)switch(w){case"svg":return 1;case"math":return 2;default:return 0}return J===1&&w==="foreignObject"?0:J}function qQ(J,w){return J==="textarea"||J==="noscript"||typeof w.children==="string"||typeof w.children==="number"||typeof w.children==="bigint"||typeof w.dangerouslySetInnerHTML==="object"&&w.dangerouslySetInnerHTML!==null&&w.dangerouslySetInnerHTML.__html!=null}function rF(){var J=window.event;if(J&&J.type==="popstate"){if(J===NX)return!1;return NX=J,!0}return NX=null,!1}function Jz(J){setTimeout(function(){throw J})}function A7(J){return J==="head"}function Wk(J,w){var Z=w,Y=0;do{var H=Z.nextSibling;if(J.removeChild(Z),H&&H.nodeType===8)if(Z=H.data,Z==="/$"||Z==="/&"){if(Y===0){J.removeChild(H),K5(w);return}Y--}else if(Z==="$"||Z==="$?"||Z==="$~"||Z==="$!"||Z==="&")Y++;else if(Z==="html")TJ(J.ownerDocument.documentElement);else if(Z==="head"){Z=J.ownerDocument.head,TJ(Z);for(var X=Z.firstChild;X;){var{nextSibling:Q,nodeName:W}=X;X[oJ]||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&X.rel.toLowerCase()==="stylesheet"||Z.removeChild(X),X=Q}}else Z==="body"&&TJ(J.ownerDocument.body);Z=H}while(Z);K5(w)}function Uk(J,w){var Z=J;J=0;do{var Y=Z.nextSibling;if(Z.nodeType===1?w?(Z._stashedDisplay=Z.style.display,Z.style.display="none"):(Z.style.display=Z._stashedDisplay||"",Z.getAttribute("style")===""&&Z.removeAttribute("style")):Z.nodeType===3&&(w?(Z._stashedText=Z.nodeValue,Z.nodeValue=""):Z.nodeValue=Z._stashedText||""),Y&&Y.nodeType===8)if(Z=Y.data,Z==="/$")if(J===0)break;else J--;else Z!=="$"&&Z!=="$?"&&Z!=="$~"&&Z!=="$!"||J++;Z=Y}while(Z)}function kQ(J){var w=J.firstChild;w&&w.nodeType===10&&(w=w.nextSibling);for(;w;){var Z=w;switch(w=w.nextSibling,Z.nodeName){case"HTML":case"HEAD":case"BODY":kQ(Z),BQ(Z);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(Z.rel.toLowerCase()==="stylesheet")continue}J.removeChild(Z)}}function wz(J,w,Z,Y){for(;J.nodeType===1;){var H=Z;if(J.nodeName.toLowerCase()!==w.toLowerCase()){if(!Y&&(J.nodeName!=="INPUT"||J.type!=="hidden"))break}else if(!Y)if(w==="input"&&J.type==="hidden"){var X=H.name==null?null:""+H.name;if(H.type==="hidden"&&J.getAttribute("name")===X)return J}else return J;else if(!J[oJ])switch(w){case"meta":if(!J.hasAttribute("itemprop"))break;return J;case"link":if(X=J.getAttribute("rel"),X==="stylesheet"&&J.hasAttribute("data-precedence"))break;else if(X!==H.rel||J.getAttribute("href")!==(H.href==null||H.href===""?null:H.href)||J.getAttribute("crossorigin")!==(H.crossOrigin==null?null:H.crossOrigin)||J.getAttribute("title")!==(H.title==null?null:H.title))break;return J;case"style":if(J.hasAttribute("data-precedence"))break;return J;case"script":if(X=J.getAttribute("src"),(X!==(H.src==null?null:H.src)||J.getAttribute("type")!==(H.type==null?null:H.type)||J.getAttribute("crossorigin")!==(H.crossOrigin==null?null:H.crossOrigin))&&X&&J.hasAttribute("async")&&!J.hasAttribute("itemprop"))break;return J;default:return J}if(J=c8(J.nextSibling),J===null)break}return null}function Zz(J,w,Z){if(w==="")return null;for(;J.nodeType!==3;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!Z)return null;if(J=c8(J.nextSibling),J===null)return null}return J}function a$(J,w){for(;J.nodeType!==8;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!w)return null;if(J=c8(J.nextSibling),J===null)return null}return J}function KQ(J){return J.data==="$?"||J.data==="$~"}function $Q(J){return J.data==="$!"||J.data==="$?"&&J.ownerDocument.readyState!=="loading"}function Yz(J,w){var Z=J.ownerDocument;if(J.data==="$~")J._reactRetry=w;else if(J.data!=="$?"||Z.readyState!=="loading")w();else{var Y=function(){w(),Z.removeEventListener("DOMContentLoaded",Y)};Z.addEventListener("DOMContentLoaded",Y),J._reactRetry=Y}}function c8(J){for(;J!=null;J=J.nextSibling){var w=J.nodeType;if(w===1||w===3)break;if(w===8){if(w=J.data,w==="$"||w==="$!"||w==="$?"||w==="$~"||w==="&"||w==="F!"||w==="F")break;if(w==="/$"||w==="/&")return null}}return J}function Gk(J){J=J.nextSibling;for(var w=0;J;){if(J.nodeType===8){var Z=J.data;if(Z==="/$"||Z==="/&"){if(w===0)return c8(J.nextSibling);w--}else Z!=="$"&&Z!=="$!"&&Z!=="$?"&&Z!=="$~"&&Z!=="&"||w++}J=J.nextSibling}return null}function qk(J){J=J.previousSibling;for(var w=0;J;){if(J.nodeType===8){var Z=J.data;if(Z==="$"||Z==="$!"||Z==="$?"||Z==="$~"||Z==="&"){if(w===0)return J;w--}else Z!=="/$"&&Z!=="/&"||w++}J=J.previousSibling}return null}function r$(J,w,Z){switch(w=mZ(Z),J){case"html":if(J=w.documentElement,!J)throw Error(c(452));return J;case"head":if(J=w.head,!J)throw Error(c(453));return J;case"body":if(J=w.body,!J)throw Error(c(454));return J;default:throw Error(c(451))}}function TJ(J){for(var w=J.attributes;w.length;)J.removeAttributeNode(w[0]);BQ(J)}function uZ(J){return typeof J.getRootNode==="function"?J.getRootNode():J.nodeType===9?J:J.ownerDocument}function Hz(){var J=l6.f(),w=UY();return J||w}function Xz(J){var w=R5(J);w!==null&&w.tag===5&&w.type==="form"?uK(w):l6.r(J)}function t$(J,w,Z){var Y=N5;if(Y&&typeof w==="string"&&w){var H=p8(w);H='link[rel="'+J+'"][href="'+H+'"]',typeof Z==="string"&&(H+='[crossorigin="'+Z+'"]'),kk.has(H)||(kk.add(H),J={rel:J,crossOrigin:Z,href:w},Y.querySelector(H)===null&&(w=Y.createElement("link"),e9(w,"link",J),c9(w),Y.head.appendChild(w)))}}function Qz(J){l6.D(J),t$("dns-prefetch",J,null)}function Wz(J,w){l6.C(J,w),t$("preconnect",J,w)}function Uz(J,w,Z){l6.L(J,w,Z);var Y=N5;if(Y&&J&&w){var H='link[rel="preload"][as="'+p8(w)+'"]';w==="image"?Z&&Z.imageSrcSet?(H+='[imagesrcset="'+p8(Z.imageSrcSet)+'"]',typeof Z.imageSizes==="string"&&(H+='[imagesizes="'+p8(Z.imageSizes)+'"]')):H+='[href="'+p8(J)+'"]':H+='[href="'+p8(J)+'"]';var X=H;switch(w){case"style":X=k5(J);break;case"script":X=F5(J)}i8.has(X)||(J=L9({rel:"preload",href:w==="image"&&Z&&Z.imageSrcSet?void 0:J,as:w},Z),i8.set(X,J),Y.querySelector(H)!==null||w==="style"&&Y.querySelector(Jw(X))||w==="script"&&Y.querySelector(ww(X))||(w=Y.createElement("link"),e9(w,"link",J),c9(w),Y.head.appendChild(w)))}}function Gz(J,w){l6.m(J,w);var Z=N5;if(Z&&J){var Y=w&&typeof w.as==="string"?w.as:"script",H='link[rel="modulepreload"][as="'+p8(Y)+'"][href="'+p8(J)+'"]',X=H;switch(Y){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":X=F5(J)}if(!i8.has(X)&&(J=L9({rel:"modulepreload",href:J},w),i8.set(X,J),Z.querySelector(H)===null)){switch(Y){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(Z.querySelector(ww(X)))return}Y=Z.createElement("link"),e9(Y,"link",J),c9(Y),Z.head.appendChild(Y)}}}function qz(J,w,Z){l6.S(J,w,Z);var Y=N5;if(Y&&J){var H=n1(Y).hoistableStyles,X=k5(J);w=w||"default";var Q=H.get(X);if(!Q){var W={loading:0,preload:null};if(Q=Y.querySelector(Jw(X)))W.loading=5;else{J=L9({rel:"stylesheet",href:J,"data-precedence":w},Z),(Z=i8.get(X))&&WW(J,Z);var U=Q=Y.createElement("link");c9(U),e9(U,"link",J),U._p=new Promise(function(G,q){U.onload=G,U.onerror=q}),U.addEventListener("load",function(){W.loading|=1}),U.addEventListener("error",function(){W.loading|=2}),W.loading|=4,MZ(Q,w,Y)}Q={type:"stylesheet",instance:Q,count:1,state:W},H.set(X,Q)}}}function kz(J,w){l6.X(J,w);var Z=N5;if(Z&&J){var Y=n1(Z).hoistableScripts,H=F5(J),X=Y.get(H);X||(X=Z.querySelector(ww(H)),X||(J=L9({src:J,async:!0},w),(w=i8.get(H))&&UW(J,w),X=Z.createElement("script"),c9(X),e9(X,"link",J),Z.head.appendChild(X)),X={type:"script",instance:X,count:1,state:null},Y.set(H,X))}}function Kz(J,w){l6.M(J,w);var Z=N5;if(Z&&J){var Y=n1(Z).hoistableScripts,H=F5(J),X=Y.get(H);X||(X=Z.querySelector(ww(H)),X||(J=L9({src:J,async:!0,type:"module"},w),(w=i8.get(H))&&UW(J,w),X=Z.createElement("script"),c9(X),e9(X,"link",J),Z.head.appendChild(X)),X={type:"script",instance:X,count:1,state:null},Y.set(H,X))}}function Kk(J,w,Z,Y){var H=(H=k7.current)?uZ(H):null;if(!H)throw Error(c(446));switch(J){case"meta":case"title":return null;case"style":return typeof Z.precedence==="string"&&typeof Z.href==="string"?(w=k5(Z.href),Z=n1(H).hoistableStyles,Y=Z.get(w),Y||(Y={type:"style",instance:null,count:0,state:null},Z.set(w,Y)),Y):{type:"void",instance:null,count:0,state:null};case"link":if(Z.rel==="stylesheet"&&typeof Z.href==="string"&&typeof Z.precedence==="string"){J=k5(Z.href);var X=n1(H).hoistableStyles,Q=X.get(J);if(Q||(H=H.ownerDocument||H,Q={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},X.set(J,Q),(X=H.querySelector(Jw(J)))&&!X._p&&(Q.instance=X,Q.state.loading=5),i8.has(J)||(Z={rel:"preload",as:"style",href:Z.href,crossOrigin:Z.crossOrigin,integrity:Z.integrity,media:Z.media,hrefLang:Z.hrefLang,referrerPolicy:Z.referrerPolicy},i8.set(J,Z),X||$z(H,J,Z,Q.state))),w&&Y===null)throw Error(c(528,""));return Q}if(w&&Y!==null)throw Error(c(529,""));return null;case"script":return w=Z.async,Z=Z.src,typeof Z==="string"&&w&&typeof w!=="function"&&typeof w!=="symbol"?(w=F5(Z),Z=n1(H).hoistableScripts,Y=Z.get(w),Y||(Y={type:"script",instance:null,count:0,state:null},Z.set(w,Y)),Y):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,J))}}function k5(J){return'href="'+p8(J)+'"'}function Jw(J){return'link[rel="stylesheet"]['+J+"]"}function e$(J){return L9({},J,{"data-precedence":J.precedence,precedence:null})}function $z(J,w,Z,Y){J.querySelector('link[rel="preload"][as="style"]['+w+"]")?Y.loading=1:(w=J.createElement("link"),Y.preload=w,w.addEventListener("load",function(){return Y.loading|=1}),w.addEventListener("error",function(){return Y.loading|=2}),e9(w,"link",Z),c9(w),J.head.appendChild(w))}function F5(J){return'[src="'+p8(J)+'"]'}function ww(J){return"script[async]"+J}function $k(J,w,Z){if(w.count++,w.instance===null)switch(w.type){case"style":var Y=J.querySelector('style[data-href~="'+p8(Z.href)+'"]');if(Y)return w.instance=Y,c9(Y),Y;var H=L9({},Z,{"data-href":Z.href,"data-precedence":Z.precedence,href:null,precedence:null});return Y=(J.ownerDocument||J).createElement("style"),c9(Y),e9(Y,"style",H),MZ(Y,Z.precedence,J),w.instance=Y;case"stylesheet":H=k5(Z.href);var X=J.querySelector(Jw(H));if(X)return w.state.loading|=4,w.instance=X,c9(X),X;Y=e$(Z),(H=i8.get(H))&&WW(Y,H),X=(J.ownerDocument||J).createElement("link"),c9(X);var Q=X;return Q._p=new Promise(function(W,U){Q.onload=W,Q.onerror=U}),e9(X,"link",Y),w.state.loading|=4,MZ(X,Z.precedence,J),w.instance=X;case"script":if(X=F5(Z.src),H=J.querySelector(ww(X)))return w.instance=H,c9(H),H;if(Y=Z,H=i8.get(X))Y=L9({},Z),UW(Y,H);return J=J.ownerDocument||J,H=J.createElement("script"),c9(H),e9(H,"link",Y),J.head.appendChild(H),w.instance=H;case"void":return null;default:throw Error(c(443,w.type))}else w.type==="stylesheet"&&(w.state.loading&4)===0&&(Y=w.instance,w.state.loading|=4,MZ(Y,Z.precedence,J));return w.instance}function MZ(J,w,Z){for(var Y=Z.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),H=Y.length?Y[Y.length-1]:null,X=H,Q=0;Q<Y.length;Q++){var W=Y[Q];if(W.dataset.precedence===w)X=W;else if(X!==H)break}X?X.parentNode.insertBefore(J,X.nextSibling):(w=Z.nodeType===9?Z.head:Z,w.insertBefore(J,w.firstChild))}function WW(J,w){J.crossOrigin==null&&(J.crossOrigin=w.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=w.referrerPolicy),J.title==null&&(J.title=w.title)}function UW(J,w){J.crossOrigin==null&&(J.crossOrigin=w.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=w.referrerPolicy),J.integrity==null&&(J.integrity=w.integrity)}function Rk(J,w,Z){if(OZ===null){var Y=new Map,H=OZ=new Map;H.set(Z,Y)}else H=OZ,Y=H.get(Z),Y||(Y=new Map,H.set(Z,Y));if(Y.has(J))return Y;Y.set(J,null),Z=Z.getElementsByTagName(J);for(H=0;H<Z.length;H++){var X=Z[H];if(!(X[oJ]||X[a9]||J==="link"&&X.getAttribute("rel")==="stylesheet")&&X.namespaceURI!=="http://www.w3.org/2000/svg"){var Q=X.getAttribute(w)||"";Q=J+Q;var W=Y.get(Q);W?W.push(X):Y.set(Q,[X])}}return Y}function Dk(J,w,Z){J=J.ownerDocument||J,J.head.insertBefore(Z,w==="title"?J.querySelector("head > title"):null)}function Rz(J,w,Z){if(Z===1||w.itemProp!=null)return!1;switch(J){case"meta":case"title":return!0;case"style":if(typeof w.precedence!=="string"||typeof w.href!=="string"||w.href==="")break;return!0;case"link":if(typeof w.rel!=="string"||typeof w.href!=="string"||w.href===""||w.onLoad||w.onError)break;switch(w.rel){case"stylesheet":return J=w.disabled,typeof w.precedence==="string"&&J==null;default:return!0}case"script":if(w.async&&typeof w.async!=="function"&&typeof w.async!=="symbol"&&!w.onLoad&&!w.onError&&w.src&&typeof w.src==="string")return!0}return!1}function JR(J){return J.type==="stylesheet"&&(J.state.loading&3)===0?!1:!0}function Dz(J,w,Z,Y){if(Z.type==="stylesheet"&&(typeof Y.media!=="string"||matchMedia(Y.media).matches!==!1)&&(Z.state.loading&4)===0){if(Z.instance===null){var H=k5(Y.href),X=w.querySelector(Jw(H));if(X){w=X._p,w!==null&&typeof w==="object"&&typeof w.then==="function"&&(J.count++,J=cZ.bind(J),w.then(J,J)),Z.state.loading|=4,Z.instance=X,c9(X);return}X=w.ownerDocument||w,Y=e$(Y),(H=i8.get(H))&&WW(Y,H),X=X.createElement("link"),c9(X);var Q=X;Q._p=new Promise(function(W,U){Q.onload=W,Q.onerror=U}),e9(X,"link",Y),Z.instance=X}J.stylesheets===null&&(J.stylesheets=new Map),J.stylesheets.set(Z,w),(w=Z.state.preload)&&(Z.state.loading&3)===0&&(J.count++,Z=cZ.bind(J),w.addEventListener("load",Z),w.addEventListener("error",Z))}}function Mz(J,w){return J.stylesheets&&J.count===0&&NZ(J,J.stylesheets),0<J.count||0<J.imgCount?function(Z){var Y=setTimeout(function(){if(J.stylesheets&&NZ(J,J.stylesheets),J.unsuspend){var X=J.unsuspend;J.unsuspend=null,X()}},60000+w);0<J.imgBytes&&FX===0&&(FX=62500*aF());var H=setTimeout(function(){if(J.waitingForImages=!1,J.count===0&&(J.stylesheets&&NZ(J,J.stylesheets),J.unsuspend)){var X=J.unsuspend;J.unsuspend=null,X()}},(J.imgBytes>FX?50:800)+w);return J.unsuspend=Z,function(){J.unsuspend=null,clearTimeout(Y),clearTimeout(H)}}:null}function cZ(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)NZ(this,this.stylesheets);else if(this.unsuspend){var J=this.unsuspend;this.unsuspend=null,J()}}}function NZ(J,w){J.stylesheets=null,J.unsuspend!==null&&(J.count++,iZ=new Map,w.forEach(Oz,J),iZ=null,cZ.call(J))}function Oz(J,w){if(!(w.state.loading&4)){var Z=iZ.get(J);if(Z)var Y=Z.get(null);else{Z=new Map,iZ.set(J,Z);for(var H=J.querySelectorAll("link[data-precedence],style[data-precedence]"),X=0;X<H.length;X++){var Q=H[X];if(Q.nodeName==="LINK"||Q.getAttribute("media")!=="not all")Z.set(Q.dataset.precedence,Q),Y=Q}Y&&Z.set(null,Y)}H=w.instance,Q=H.getAttribute("data-precedence"),X=Z.get(Q)||Y,X===Y&&Z.set(null,H),Z.set(Q,H),this.count++,Y=cZ.bind(this),H.addEventListener("load",Y),H.addEventListener("error",Y),X?X.parentNode.insertBefore(H,X.nextSibling):(J=J.nodeType===9?J.head:J,J.insertBefore(H,J.firstChild)),w.state.loading|=4}}function Nz(J,w,Z,Y,H,X,Q,W,U){this.tag=1,this.containerInfo=J,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=iH(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iH(0),this.hiddenUpdates=iH(null),this.identifierPrefix=Y,this.onUncaughtError=H,this.onCaughtError=X,this.onRecoverableError=Q,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function wR(J,w,Z,Y,H,X,Q,W,U,G,q,$){return J=new Nz(J,w,Z,Q,U,G,q,$,W),w=1,X===!0&&(w|=24),X=V8(3,null,null,w),J.current=X,X.stateNode=J,w=bQ(),w.refCount++,J.pooledCache=w,w.refCount++,X.memoizedState={element:Y,isDehydrated:Z,cache:w},vQ(X),J}function ZR(J){if(!J)return c1;return J=c1,J}function YR(J,w,Z,Y,H,X){H=ZR(H),Y.context===null?Y.context=H:Y.pendingContext=H,Y=$7(w),Y.payload={element:Z},X=X===void 0?null:X,X!==null&&(Y.callback=X),Z=R7(J,Y,w),Z!==null&&(D8(Z,J,w),LJ(Z,J,w))}function Mk(J,w){if(J=J.memoizedState,J!==null&&J.dehydrated!==null){var Z=J.retryLane;J.retryLane=Z!==0&&Z<w?Z:w}}function GW(J,w){Mk(J,w),(J=J.alternate)&&Mk(J,w)}function HR(J){if(J.tag===13||J.tag===31){var w=Q1(J,67108864);w!==null&&D8(w,J,67108864),GW(J,67108864)}}function Ok(J){if(J.tag===13||J.tag===31){var w=C8();w=zQ(w);var Z=Q1(J,w);Z!==null&&D8(Z,J,w),GW(J,w)}}function Fz(J,w,Z,Y){var H=P0.T;P0.T=null;var X=Z9.p;try{Z9.p=2,qW(J,w,Z,Y)}finally{Z9.p=X,P0.T=H}}function zz(J,w,Z,Y){var H=P0.T;P0.T=null;var X=Z9.p;try{Z9.p=8,qW(J,w,Z,Y)}finally{Z9.p=X,P0.T=H}}function qW(J,w,Z,Y){if(sZ){var H=DQ(Y);if(H===null)OX(J,w,Y,oZ,Z),Nk(J,Y);else if(Bz(H,J,w,Z,Y))Y.stopPropagation();else if(Nk(J,Y),w&4&&-1<Lz.indexOf(J)){for(;H!==null;){var X=R5(H);if(X!==null)switch(X.tag){case 3:if(X=X.stateNode,X.current.memoizedState.isDehydrated){var Q=m7(X.pendingLanes);if(Q!==0){var W=X;W.pendingLanes|=2;for(W.entangledLanes|=2;Q;){var U=1<<31-I8(Q);W.entanglements[1]|=U,Q&=~U}D6(X),(w9&6)===0&&(vZ=A8()+500,eJ(0,!1))}}break;case 31:case 13:W=Q1(X,2),W!==null&&D8(W,X,2),UY(),GW(X,2)}if(X=DQ(Y),X===null&&OX(J,w,Y,oZ,Z),X===H)break;H=X}H!==null&&Y.stopPropagation()}else OX(J,w,Y,null,Z)}}function DQ(J){return J=_Q(J),kW(J)}function kW(J){if(oZ=null,J=g1(J),J!==null){var w=uJ(J);if(w===null)J=null;else{var Z=w.tag;if(Z===13){if(J=_k(w),J!==null)return J;J=null}else if(Z===31){if(J=Ak(w),J!==null)return J;J=null}else if(Z===3){if(w.stateNode.current.memoizedState.isDehydrated)return w.tag===3?w.stateNode.containerInfo:null;J=null}else w!==J&&(J=null)}}return oZ=J,null}function XR(J){switch(J){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(UN()){case Tk:return 2;case Pk:return 8;case VZ:case GN:return 32;case Sk:return 268435456;default:return 32}default:return 32}}function Nk(J,w){switch(J){case"focusin":case"focusout":O7=null;break;case"dragenter":case"dragleave":N7=null;break;case"mouseover":case"mouseout":F7=null;break;case"pointerover":case"pointerout":dJ.delete(w.pointerId);break;case"gotpointercapture":case"lostpointercapture":mJ.delete(w.pointerId)}}function WJ(J,w,Z,Y,H,X){if(J===null||J.nativeEvent!==X)return J={blockedOn:w,domEventName:Z,eventSystemFlags:Y,nativeEvent:X,targetContainers:[H]},w!==null&&(w=R5(w),w!==null&&HR(w)),J;return J.eventSystemFlags|=Y,w=J.targetContainers,H!==null&&w.indexOf(H)===-1&&w.push(H),J}function Bz(J,w,Z,Y,H){switch(w){case"focusin":return O7=WJ(O7,J,w,Z,Y,H),!0;case"dragenter":return N7=WJ(N7,J,w,Z,Y,H),!0;case"mouseover":return F7=WJ(F7,J,w,Z,Y,H),!0;case"pointerover":var X=H.pointerId;return dJ.set(X,WJ(dJ.get(X)||null,J,w,Z,Y,H)),!0;case"gotpointercapture":return X=H.pointerId,mJ.set(X,WJ(mJ.get(X)||null,J,w,Z,Y,H)),!0}return!1}function QR(J){var w=g1(J.target);if(w!==null){var Z=uJ(w);if(Z!==null){if(w=Z.tag,w===13){if(w=_k(Z),w!==null){J.blockedOn=w,Yq(J.priority,function(){Ok(Z)});return}}else if(w===31){if(w=Ak(Z),w!==null){J.blockedOn=w,Yq(J.priority,function(){Ok(Z)});return}}else if(w===3&&Z.stateNode.current.memoizedState.isDehydrated){J.blockedOn=Z.tag===3?Z.stateNode.containerInfo:null;return}}}J.blockedOn=null}function FZ(J){if(J.blockedOn!==null)return!1;for(var w=J.targetContainers;0<w.length;){var Z=DQ(J.nativeEvent);if(Z===null){Z=J.nativeEvent;var Y=new Z.constructor(Z.type,Z);jX=Y,Z.target.dispatchEvent(Y),jX=null}else return w=R5(Z),w!==null&&HR(w),J.blockedOn=Z,!1;w.shift()}return!0}function Fk(J,w,Z){FZ(J)&&Z.delete(w)}function Vz(){MQ=!1,O7!==null&&FZ(O7)&&(O7=null),N7!==null&&FZ(N7)&&(N7=null),F7!==null&&FZ(F7)&&(F7=null),dJ.forEach(Fk),mJ.forEach(Fk)}function ZZ(J,w){J.blockedOn===w&&(J.blockedOn=null,MQ||(MQ=!0,S1(P1,Vz)))}function zk(J){YZ!==J&&(YZ=J,S1(P1,function(){YZ===J&&(YZ=null);for(var w=0;w<J.length;w+=3){var Z=J[w],Y=J[w+1],H=J[w+2];if(typeof Y!=="function")if(kW(Y||Z)===null)continue;else break;var X=R5(Z);X!==null&&(J.splice(w,3),w-=3,oX(X,{pending:!0,data:H,method:Z.method,action:Y},Y,H))}}))}function K5(J){function w(U){return ZZ(U,J)}O7!==null&&ZZ(O7,J),N7!==null&&ZZ(N7,J),F7!==null&&ZZ(F7,J),dJ.forEach(w),mJ.forEach(w);for(var Z=0;Z<X7.length;Z++){var Y=X7[Z];Y.blockedOn===J&&(Y.blockedOn=null)}for(;0<X7.length&&(Z=X7[0],Z.blockedOn===null);)QR(Z),Z.blockedOn===null&&X7.shift();if(Z=(J.ownerDocument||J).$$reactFormReplay,Z!=null)for(Y=0;Y<Z.length;Y+=3){var H=Z[Y],X=Z[Y+1],Q=H[M8]||null;if(typeof X==="function")Q||zk(Z);else if(Q){var W=null;if(X&&X.hasAttribute("formAction")){if(H=X,Q=X[M8]||null)W=Q.formAction;else if(kW(H)!==null)continue}else W=Q.action;typeof W==="function"?Z[Y+1]=W:(Z.splice(Y,3),Y-=3),zk(Z)}}}function WR(){function J(X){X.canIntercept&&X.info==="react-transition"&&X.intercept({handler:function(){return new Promise(function(Q){return H=Q})},focusReset:"manual",scroll:"manual"})}function w(){H!==null&&(H(),H=null),Y||setTimeout(Z,20)}function Z(){if(!Y&&!navigation.transition){var X=navigation.currentEntry;X&&X.url!=null&&navigation.navigate(X.url,{state:X.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var Y=!1,H=null;return navigation.addEventListener("navigate",J),navigation.addEventListener("navigatesuccess",w),navigation.addEventListener("navigateerror",w),setTimeout(Z,100),function(){Y=!0,navigation.removeEventListener("navigate",J),navigation.removeEventListener("navigatesuccess",w),navigation.removeEventListener("navigateerror",w),H!==null&&(H(),H=null)}}}function KW(J){this._internalRoot=J}function kY(J){this._internalRoot=J}var nZ,Bk,L9,ZN,uw,UJ,v1,Ik,zX,Ck,T6,OQ,LX,BX,NQ,J7,VX,YN,Jq,HN,GJ,P0,Z9,s7,AX,y1=-1,$6,PJ,k7,zZ,dH,wq,mH=!1,IX,FQ,cH,QN,WN,A8,UN,Tk,Pk,VZ,GN,Sk,qN,kN,cJ=null,E8=null,I8,KN,$N,cw=256,iw=262144,sw=4194304,_7,a9,M8,$5,CX,ON,NN,Hq,oJ,vk,yk,FN,Xq,Qq,BN,VN,_N,AN,jX=null,l1=null,r1=null,sH=!1,x6,fX=!1,u7,W7=null,AQ=null,QZ=null,H1,rZ,nJ,EN,oH,nH,YJ,tZ,qq,IN,CN,TN,aH,PN,SN,jN,fN,bN,kq,xN,hN,vN,gN,lN,pN,Kq,dN,mN,uN,cN,iN,sN,oN,nN,aN,IQ,OJ=null,rN,sk,$q,Rq=!1,p1=!1,JF,NJ=null,jJ=null,rk=!1,kJ,KJ,UZ,T8,WF,d1=null,bX=null,FJ=null,xX=!1,m1,rH,wK,ZK,YK,HK,UF,GF,qF,XK,QK,hX,AZ,v8,u1=0,TQ=0,c1,Lq,i1,s1=0,IZ=null,bJ=0,g8,l8=0,z7=null,q6=1,k6="",r9=null,z9=null,a0=!1,K7=null,m8=!1,vX,yX,W1=null,S6=null,KF,$F,RF,h9,zJ=null,pX=0,X5=0,t1=null,Aq,n7,M5,hQ,ZY,TZ,a7=null,e1=null,hJ=0,J1,MK,w7=!1,mX=!1,Q5,PZ,P8,u8=null,j9,h6=0,y0=null,q9=null,b9=null,jZ=!1,J5=!1,w1=!1,fZ=0,vJ=0,w5=null,OF=0,yJ,aK,rQ,rK,nX,tQ,v9=!1,HX,C6=!1,x9=!1,KX=!1,oq,u9=null,_9=null,$8=!1,J6=null,RJ=8192,jF,fF,w9=0,R9=null,c0=null,o0=0,Y9=0,L8=null,U7=!1,O5=!1,ZW=!1,g6=0,P9=0,V7=0,r7=0,YW=0,_8=0,U5=0,IJ=null,R8=null,JQ=!1,WY=0,E$=0,vZ=1/0,yZ=null,D7=null,g9=0,M7=null,G5=null,b6=0,wQ=0,ZQ=null,I$=null,CJ=0,YQ=null,lZ=null,x1=null,HQ=!1,pZ=!1,DX=!1,q7=0,MJ,XQ,QQ,DJ,gJ,cF,wZ,sF,oF,UQ=null,GQ=null,NX=null,n$,tF,Qk,eF,RQ=null,i8,kk,l6,N5,OZ=null,FX=0,iZ=null,pJ,sZ=!0,oZ=null,MQ=!1,O7=null,N7=null,F7=null,dJ,mJ,X7,Lz,YZ=null,Lk,_z,h1,UR=function(J,w){if(!Vk(J))throw Error(c(299));var Z=!1,Y="",H=tK,X=eK,Q=J$;return w!==null&&w!==void 0&&(w.unstable_strictMode===!0&&(Z=!0),w.identifierPrefix!==void 0&&(Y=w.identifierPrefix),w.onUncaughtError!==void 0&&(H=w.onUncaughtError),w.onCaughtError!==void 0&&(X=w.onCaughtError),w.onRecoverableError!==void 0&&(Q=w.onRecoverableError)),w=wR(J,1,!1,null,null,Z,Y,null,H,X,Q,WR),J[$5]=w.current,QW(J),new KW(w)},GR=function(J,w,Z){if(!Vk(J))throw Error(c(299));var Y=!1,H="",X=tK,Q=eK,W=J$,U=null;return Z!==null&&Z!==void 0&&(Z.unstable_strictMode===!0&&(Y=!0),Z.identifierPrefix!==void 0&&(H=Z.identifierPrefix),Z.onUncaughtError!==void 0&&(X=Z.onUncaughtError),Z.onCaughtError!==void 0&&(Q=Z.onCaughtError),Z.onRecoverableError!==void 0&&(W=Z.onRecoverableError),Z.formState!==void 0&&(U=Z.formState)),w=wR(J,1,!0,w,Z!=null?Z:null,Y,H,U,X,Q,W,WR),w.context=ZR(null),Z=w.current,Y=C8(),Y=zQ(Y),H=$7(Y),H.callback=null,R7(Z,H,Y),Z=Y,w.current.lanes=Z,sJ(w,Z),D6(w),J[$5]=w.current,QW(J),new kY(w)},qR="19.2.0";var kR=MH(()=>{jG();nZ=r6(l7(),1),Bk=r6(tG(),1);L9=Object.assign,ZN=Symbol.for("react.element"),uw=Symbol.for("react.transitional.element"),UJ=Symbol.for("react.portal"),v1=Symbol.for("react.fragment"),Ik=Symbol.for("react.strict_mode"),zX=Symbol.for("react.profiler"),Ck=Symbol.for("react.consumer"),T6=Symbol.for("react.context"),OQ=Symbol.for("react.forward_ref"),LX=Symbol.for("react.suspense"),BX=Symbol.for("react.suspense_list"),NQ=Symbol.for("react.memo"),J7=Symbol.for("react.lazy");Symbol.for("react.scope");VX=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");YN=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");Jq=Symbol.iterator;HN=Symbol.for("react.client.reference");GJ=Array.isArray,P0=nZ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z9=Bk.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,s7={pending:!1,data:null,method:null,action:null},AX=[];$6=R6(null),PJ=R6(null),k7=R6(null),zZ=R6(null);IX=Object.prototype.hasOwnProperty,FQ=S1,cH=vH,QN=lH,WN=gH,A8=G6,UN=yH,Tk=bH,Pk=hH,VZ=P1,GN=xH,Sk=fH,qN=void 0,kN=void 0;I8=Math.clz32?Math.clz32:RN,KN=Math.log,$N=Math.LN2;_7=Math.random().toString(36).slice(2),a9="__reactFiber$"+_7,M8="__reactProps$"+_7,$5="__reactContainer$"+_7,CX="__reactEvents$"+_7,ON="__reactListeners$"+_7,NN="__reactHandles$"+_7,Hq="__reactResources$"+_7,oJ="__reactMarker$"+_7;vk=new Set,yk={};FN=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xq={},Qq={};BN=/[\n"\\]/g;VN=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));_N=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AN=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;x6=!(typeof window==="undefined"||typeof window.document==="undefined"||typeof window.document.createElement==="undefined");if(x6)try{u7={},Object.defineProperty(u7,"passive",{get:function(){fX=!0}}),window.addEventListener("test",u7,u7),window.removeEventListener("test",u7,u7)}catch(J){fX=!1}H1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(J){return J.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rZ=O8(H1),nJ=L9({},H1,{view:0,detail:0}),EN=O8(nJ),tZ=L9({},nJ,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:EQ,button:0,buttons:0,relatedTarget:function(J){return J.relatedTarget===void 0?J.fromElement===J.srcElement?J.toElement:J.fromElement:J.relatedTarget},movementX:function(J){if("movementX"in J)return J.movementX;return J!==YJ&&(YJ&&J.type==="mousemove"?(oH=J.screenX-YJ.screenX,nH=J.screenY-YJ.screenY):nH=oH=0,YJ=J),oH},movementY:function(J){return"movementY"in J?J.movementY:nH}}),qq=O8(tZ),IN=L9({},tZ,{dataTransfer:0}),CN=O8(IN),TN=L9({},nJ,{relatedTarget:0}),aH=O8(TN),PN=L9({},H1,{animationName:0,elapsedTime:0,pseudoElement:0}),SN=O8(PN),jN=L9({},H1,{clipboardData:function(J){return"clipboardData"in J?J.clipboardData:window.clipboardData}}),fN=O8(jN),bN=L9({},H1,{data:0}),kq=O8(bN),xN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};gN=L9({},nJ,{key:function(J){if(J.key){var w=xN[J.key]||J.key;if(w!=="Unidentified")return w}return J.type==="keypress"?(J=WZ(J),J===13?"Enter":String.fromCharCode(J)):J.type==="keydown"||J.type==="keyup"?hN[J.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:EQ,charCode:function(J){return J.type==="keypress"?WZ(J):0},keyCode:function(J){return J.type==="keydown"||J.type==="keyup"?J.keyCode:0},which:function(J){return J.type==="keypress"?WZ(J):J.type==="keydown"||J.type==="keyup"?J.keyCode:0}}),lN=O8(gN),pN=L9({},tZ,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kq=O8(pN),dN=L9({},nJ,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:EQ}),mN=O8(dN),uN=L9({},H1,{propertyName:0,elapsedTime:0,pseudoElement:0}),cN=O8(uN),iN=L9({},tZ,{deltaX:function(J){return"deltaX"in J?J.deltaX:("wheelDeltaX"in J)?-J.wheelDeltaX:0},deltaY:function(J){return"deltaY"in J?J.deltaY:("wheelDeltaY"in J)?-J.wheelDeltaY:("wheelDelta"in J)?-J.wheelDelta:0},deltaZ:0,deltaMode:0}),sN=O8(iN),oN=L9({},H1,{newState:0,oldState:0}),nN=O8(oN),aN=[9,13,27,32],IQ=x6&&"CompositionEvent"in window;x6&&"documentMode"in document&&(OJ=document.documentMode);rN=x6&&"TextEvent"in window&&!OJ,sk=x6&&(!IQ||OJ&&8<OJ&&11>=OJ),$q=String.fromCharCode(32);JF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(x6){if(x6){if(KJ="oninput"in document,!KJ)UZ=document.createElement("div"),UZ.setAttribute("oninput","return;"),KJ=typeof UZ.oninput==="function";kJ=KJ}else kJ=!1;rk=kJ&&(!document.documentMode||9<document.documentMode)}T8=typeof Object.is==="function"?Object.is:QF;WF=x6&&"documentMode"in document&&11>=document.documentMode;m1={animationend:p7("Animation","AnimationEnd"),animationiteration:p7("Animation","AnimationIteration"),animationstart:p7("Animation","AnimationStart"),transitionrun:p7("Transition","TransitionRun"),transitionstart:p7("Transition","TransitionStart"),transitioncancel:p7("Transition","TransitionCancel"),transitionend:p7("Transition","TransitionEnd")},rH={},wK={};x6&&(wK=document.createElement("div").style,("AnimationEvent"in window)||(delete m1.animationend.animation,delete m1.animationiteration.animation,delete m1.animationstart.animation),("TransitionEvent"in window)||delete m1.transitionend.transition);ZK=X1("animationend"),YK=X1("animationiteration"),HK=X1("animationstart"),UF=X1("transitionrun"),GF=X1("transitionstart"),qF=X1("transitioncancel"),XK=X1("transitionend"),QK=new Map,hX="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hX.push("scrollEnd");AZ=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(w))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},v8=[];c1={};Lq=new WeakMap;i1=[],g8=[];vX=Error(c(519));yX=R6(null);KF=typeof AbortController!=="undefined"?AbortController:function(){var J=[],w=this.signal={aborted:!1,addEventListener:function(Z,Y){J.push(Y)}};this.abort=function(){w.aborted=!0,J.forEach(function(Z){return Z()})}},$F=S1,RF=P1,h9={$$typeof:T6,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};Aq=P0.S;P0.S=function(J,w){E$=A8(),typeof w==="object"&&w!==null&&typeof w.then==="function"&&DF(J,w),Aq!==null&&Aq(J,w)};n7=R6(null);M5=Error(c(460)),hQ=Error(c(474)),ZY=Error(c(542)),TZ={then:function(){}};J1=DK(!0),MK=DK(!1);Q5=R6(null),PZ=R6(0);P8=R6(null);j9=R6(0);yJ={readContext:t9,use:HY,useCallback:T9,useContext:T9,useEffect:T9,useImperativeHandle:T9,useLayoutEffect:T9,useInsertionEffect:T9,useMemo:T9,useReducer:T9,useRef:T9,useState:T9,useDebugValue:T9,useDeferredValue:T9,useTransition:T9,useSyncExternalStore:T9,useId:T9,useHostTransitionStatus:T9,useFormState:T9,useActionState:T9,useOptimistic:T9,useMemoCache:T9,useCacheRefresh:T9};yJ.useEffectEvent=T9;aK={readContext:t9,use:HY,useCallback:function(J,w){return W8().memoizedState=[J,w===void 0?null:w],J},useContext:t9,useEffect:xq,useImperativeHandle:function(J,w,Z){Z=Z!==null&&Z!==void 0?Z.concat([J]):null,KZ(4194308,4,vK.bind(null,w,J),Z)},useLayoutEffect:function(J,w){return KZ(4194308,4,J,w)},useInsertionEffect:function(J,w){KZ(4,2,J,w)},useMemo:function(J,w){var Z=W8();w=w===void 0?null:w;var Y=J();if(w1){Q7(!0);try{J()}finally{Q7(!1)}}return Z.memoizedState=[Y,w],Y},useReducer:function(J,w,Z){var Y=W8();if(Z!==void 0){var H=Z(w);if(w1){Q7(!0);try{Z(w)}finally{Q7(!1)}}}else H=w;return Y.memoizedState=Y.baseState=H,J={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J,lastRenderedState:H},Y.queue=J,J=J.dispatch=_F.bind(null,y0,J),[Y.memoizedState,J]},useRef:function(J){var w=W8();return J={current:J},w.memoizedState=J},useState:function(J){J=iX(J);var w=J.queue,Z=sK.bind(null,y0,w);return w.dispatch=Z,[J.memoizedState,Z]},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=W8();return oQ(Z,J,w)},useTransition:function(){var J=iX(!1);return J=dK.bind(null,y0,J.queue,!0,!1),W8().memoizedState=J,[!1,J]},useSyncExternalStore:function(J,w,Z){var Y=y0,H=W8();if(a0){if(Z===void 0)throw Error(c(407));Z=Z()}else{if(Z=w(),R9===null)throw Error(c(349));(o0&127)!==0||VK(Y,w,Z)}H.memoizedState=Z;var X={value:Z,getSnapshot:w};return H.queue=X,xq(AK.bind(null,Y,X,J),[J]),Y.flags|=2048,W5(9,{destroy:void 0},_K.bind(null,Y,X,Z,w),null),Z},useId:function(){var J=W8(),w=R9.identifierPrefix;if(a0){var Z=k6,Y=q6;Z=(Y&~(1<<32-I8(Y)-1)).toString(32)+Z,w="_"+w+"R_"+Z,Z=fZ++,0<Z&&(w+="H"+Z.toString(32)),w+="_"}else Z=OF++,w="_"+w+"r_"+Z.toString(32)+"_";return J.memoizedState=w},useHostTransitionStatus:nQ,useFormState:jq,useActionState:jq,useOptimistic:function(J){var w=W8();w.memoizedState=w.baseState=J;var Z={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return w.queue=Z,w=aQ.bind(null,y0,!0,Z),Z.dispatch=w,[J,w]},useMemoCache:uQ,useCacheRefresh:function(){return W8().memoizedState=VF.bind(null,y0)},useEffectEvent:function(J){var w=W8(),Z={impl:J};return w.memoizedState=Z,function(){if((w9&2)!==0)throw Error(c(440));return Z.impl.apply(void 0,arguments)}}},rQ={readContext:t9,use:HY,useCallback:gK,useContext:t9,useEffect:iQ,useImperativeHandle:yK,useInsertionEffect:xK,useLayoutEffect:hK,useMemo:lK,useReducer:kZ,useRef:fK,useState:function(){return kZ(v6)},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=f9();return pK(Z,q9.memoizedState,J,w)},useTransition:function(){var J=kZ(v6)[0],w=f9().memoizedState;return[typeof J==="boolean"?J:rJ(J),w]},useSyncExternalStore:BK,useId:cK,useHostTransitionStatus:nQ,useFormState:fq,useActionState:fq,useOptimistic:function(J,w){var Z=f9();return CK(Z,q9,J,w)},useMemoCache:uQ,useCacheRefresh:iK};rQ.useEffectEvent=bK;rK={readContext:t9,use:HY,useCallback:gK,useContext:t9,useEffect:iQ,useImperativeHandle:yK,useInsertionEffect:xK,useLayoutEffect:hK,useMemo:lK,useReducer:ZX,useRef:fK,useState:function(){return ZX(v6)},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=f9();return q9===null?oQ(Z,J,w):pK(Z,q9.memoizedState,J,w)},useTransition:function(){var J=ZX(v6)[0],w=f9().memoizedState;return[typeof J==="boolean"?J:rJ(J),w]},useSyncExternalStore:BK,useId:cK,useHostTransitionStatus:nQ,useFormState:bq,useActionState:bq,useOptimistic:function(J,w){var Z=f9();if(q9!==null)return CK(Z,q9,J,w);return Z.baseState=J,[J,Z.queue.dispatch]},useMemoCache:uQ,useCacheRefresh:iK};rK.useEffectEvent=bK;nX={enqueueSetState:function(J,w,Z){J=J._reactInternals;var Y=C8(),H=$7(Y);H.payload=w,Z!==void 0&&Z!==null&&(H.callback=Z),w=R7(J,H,Y),w!==null&&(D8(w,J,Y),LJ(w,J,Y))},enqueueReplaceState:function(J,w,Z){J=J._reactInternals;var Y=C8(),H=$7(Y);H.tag=1,H.payload=w,Z!==void 0&&Z!==null&&(H.callback=Z),w=R7(J,H,Y),w!==null&&(D8(w,J,Y),LJ(w,J,Y))},enqueueForceUpdate:function(J,w){J=J._reactInternals;var Z=C8(),Y=$7(Z);Y.tag=2,w!==void 0&&w!==null&&(Y.callback=w),w=R7(J,Y,Z),w!==null&&(D8(w,J,Z),LJ(w,J,Z))}};tQ=Error(c(461));HX={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};oq=typeof WeakSet==="function"?WeakSet:Set;jF={getCacheForType:function(J){var w=t9(h9),Z=w.data.get(J);return Z===void 0&&(Z=J(),w.data.set(J,Z)),Z},cacheSignal:function(){return t9(h9).controller.signal}},fF=typeof WeakMap==="function"?WeakMap:Map;for(DJ=0;DJ<hX.length;DJ++)MJ=hX[DJ],XQ=MJ.toLowerCase(),QQ=MJ[0].toUpperCase()+MJ.slice(1),w6(XQ,"on"+QQ);w6(ZK,"onAnimationEnd");w6(YK,"onAnimationIteration");w6(HK,"onAnimationStart");w6("dblclick","onDoubleClick");w6("focusin","onFocus");w6("focusout","onBlur");w6(UF,"onTransitionRun");w6(GF,"onTransitionStart");w6(qF,"onTransitionCancel");w6(XK,"onTransitionEnd");Y5("onMouseEnter",["mouseout","mouseover"]);Y5("onMouseLeave",["mouseout","mouseover"]);Y5("onPointerEnter",["pointerout","pointerover"]);Y5("onPointerLeave",["pointerout","pointerover"]);Y1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Y1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Y1("onBeforeInput",["compositionend","keypress","textInput","paste"]);Y1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Y1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Y1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));gJ="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cF=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gJ));wZ="_reactListening"+Math.random().toString(36).slice(2);sF=/\r\n?/g,oF=/\u0000|\uFFFD/g;n$=typeof setTimeout==="function"?setTimeout:void 0,tF=typeof clearTimeout==="function"?clearTimeout:void 0,Qk=typeof Promise==="function"?Promise:void 0,eF=typeof queueMicrotask==="function"?queueMicrotask:typeof Qk!=="undefined"?function(J){return Qk.resolve(null).then(J).catch(Jz)}:n$;i8=new Map,kk=new Set;l6=Z9.d;Z9.d={f:Hz,r:Xz,D:Qz,C:Wz,L:Uz,m:Gz,X:kz,S:qz,M:Kz};N5=typeof document==="undefined"?null:document;pJ={$$typeof:T6,Provider:null,Consumer:null,_currentValue:s7,_currentValue2:s7,_threadCount:0};dJ=new Map,mJ=new Map,X7=[],Lz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");kY.prototype.render=KW.prototype.render=function(J){var w=this._internalRoot;if(w===null)throw Error(c(409));var Z=w.current,Y=C8();YR(Z,Y,J,w,null,null)};kY.prototype.unmount=KW.prototype.unmount=function(){var J=this._internalRoot;if(J!==null){this._internalRoot=null;var w=J.containerInfo;YR(J.current,2,null,J,null,null),UY(),w[$5]=null}};kY.prototype.unstable_scheduleHydration=function(J){if(J){var w=hk();J={blockedOn:null,target:J,priority:w};for(var Z=0;Z<X7.length&&w!==0&&w<X7[Z].priority;Z++);X7.splice(Z,0,J),Z===0&&QR(J)}};Lk=nZ.version;if(Lk!=="19.2.0")throw Error(c(527,Lk,"19.2.0"));Z9.findDOMNode=function(J){var w=J._reactInternals;if(w===void 0){if(typeof J.render==="function")throw Error(c(188));throw J=Object.keys(J).join(","),Error(c(268,J))}return J=wN(w),J=J!==null?Ek(J):null,J=J===null?null:J.stateNode,J};_z={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P0,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=="undefined"){if(h1=__REACT_DEVTOOLS_GLOBAL_HOOK__,!h1.isDisabled&&h1.supportsFiber)try{cJ=h1.inject(_z),E8=h1}catch(J){}}});var RR=DH((O_,$R)=>{kR();function KR(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KR)}catch(J){console.error(J)}}KR(),$R.exports=$W});var fM=r6(l7(),1),bM=r6(RR(),1);var n0=r6(l7(),1);var hR="180";var vR=0,vW=1,yR=2;var yW=1,gR=2,M6=3,h5=0,f8=1,O6=2,j7=0,qw=1,gW=2,lW=3,pW=4,lR=5,v5=100,pR=101,dR=102,mR=103,uR=104,cR=200,iR=201,sR=202,oR=203,nR=204,aR=205,rR=206,tR=207,eR=208,JD=209,wD=210,ZD=211,YD=212,HD=213,XD=214,PY=0,SY=1,jY=2,kw=3,fY=4,bY=5,xY=6,hY=7,QD=0,WD=1,UD=2,o6=0,GD=1,qD=2,kD=3,KD=4,$D=5,RD=6,DD=7;var y5=301,$1=302,vY=303,yY=304,Kw=306,MD=1000,OD=1001,ND=1002,g5=1003,FD=1004;var $w=1005;var R1=1006,gY=1007;var l5=1008;var f7=1009,zD=1010,LD=1011,Rw=1012,dW=1013,p5=1014,b7=1015,Dw=1016,mW=1017,uW=1018,d5=1020,BD=35902,VD=35899,_D=1021,AD=1022,N6=1023,lY=1026,Mw=1027,ED=1028,cW=1029,ID=1030,iW=1031;var sW=1033,pY=33776,dY=33777,mY=33778,uY=33779,oW=35840,nW=35841,aW=35842,rW=35843,tW=36196,eW=37492,JU=37496,wU=37808,ZU=37809,YU=37810,HU=37811,XU=37812,QU=37813,WU=37814,UU=37815,GU=37816,qU=37817,kU=37818,KU=37819,$U=37820,RU=37821,DU=36492,MU=36494,OU=36495,NU=36283,FU=36284,zU=36285,LU=36286;var CD=3201;var TD=0,PD=1,D1="",SD="srgb",Ow="srgb-linear",BU="linear",M9="srgb";var jD=512,fD=513,bD=514,VU=515,xD=516,hD=517,vD=518,yD=519;var _U="300 es",AU=2000;class x7{addEventListener(J,w){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(w)===-1)Z[J].push(w)}hasEventListener(J,w){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(w)!==-1}removeEventListener(J,w){let Z=this._listeners;if(Z===void 0)return;let Y=Z[J];if(Y!==void 0){let H=Y.indexOf(w);if(H!==-1)Y.splice(H,1)}}dispatchEvent(J){let w=this._listeners;if(w===void 0)return;let Z=w[J.type];if(Z!==void 0){J.target=this;let Y=Z.slice(0);for(let H=0,X=Y.length;H<X;H++)Y[H].call(this,J);J.target=null}}}var Z8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DR=1234567,Ww=Math.PI/180,K1=180/Math.PI;function m5(){let J=Math.random()*4294967295|0,w=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,Y=Math.random()*4294967295|0;return(Z8[J&255]+Z8[J>>8&255]+Z8[J>>16&255]+Z8[J>>24&255]+"-"+Z8[w&255]+Z8[w>>8&255]+"-"+Z8[w>>16&15|64]+Z8[w>>24&255]+"-"+Z8[Z&63|128]+Z8[Z>>8&255]+"-"+Z8[Z>>16&255]+Z8[Z>>24&255]+Z8[Y&255]+Z8[Y>>8&255]+Z8[Y>>16&255]+Z8[Y>>24&255]).toLowerCase()}function i0(J,w,Z){return Math.max(w,Math.min(Z,J))}function EU(J,w){return(J%w+w)%w}function Iz(J,w,Z,Y,H){return Y+(J-w)*(H-Y)/(Z-w)}function Cz(J,w,Z){if(J!==w)return(Z-J)/(w-J);else return 0}function Uw(J,w,Z){return(1-Z)*J+Z*w}function Tz(J,w,Z,Y){return Uw(J,w,1-Math.exp(-Z*Y))}function Pz(J,w=1){return w-Math.abs(EU(J,w*2)-w)}function Sz(J,w,Z){if(J<=w)return 0;if(J>=Z)return 1;return J=(J-w)/(Z-w),J*J*(3-2*J)}function jz(J,w,Z){if(J<=w)return 0;if(J>=Z)return 1;return J=(J-w)/(Z-w),J*J*J*(J*(J*6-15)+10)}function fz(J,w){return J+Math.floor(Math.random()*(w-J+1))}function bz(J,w){return J+Math.random()*(w-J)}function xz(J){return J*(0.5-Math.random())}function hz(J){if(J!==void 0)DR=J;let w=DR+=1831565813;return w=Math.imul(w^w>>>15,w|1),w^=w+Math.imul(w^w>>>7,w|61),((w^w>>>14)>>>0)/4294967296}function vz(J){return J*Ww}function yz(J){return J*K1}function gz(J){return(J&J-1)===0&&J!==0}function lz(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function pz(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function dz(J,w,Z,Y,H){let{cos:X,sin:Q}=Math,W=X(Z/2),U=Q(Z/2),G=X((w+Y)/2),q=Q((w+Y)/2),$=X((w-Y)/2),K=Q((w-Y)/2),R=X((Y-w)/2),z=Q((Y-w)/2);switch(H){case"XYX":J.set(W*q,U*$,U*K,W*G);break;case"YZY":J.set(U*K,W*q,U*$,W*G);break;case"ZXZ":J.set(U*$,U*K,W*q,W*G);break;case"XZX":J.set(W*q,U*z,U*R,W*G);break;case"YXY":J.set(U*R,W*q,U*z,W*G);break;case"ZYZ":J.set(U*z,U*R,W*q,W*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+H)}}function j5(J,w){switch(w.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function U8(J,w){switch(w.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var Nw={DEG2RAD:Ww,RAD2DEG:K1,generateUUID:m5,clamp:i0,euclideanModulo:EU,mapLinear:Iz,inverseLerp:Cz,lerp:Uw,damp:Tz,pingpong:Pz,smoothstep:Sz,smootherstep:jz,randInt:fz,randFloat:bz,randFloatSpread:xz,seededRandom:hz,degToRad:vz,radToDeg:yz,isPowerOfTwo:gz,ceilPowerOfTwo:lz,floorPowerOfTwo:pz,setQuaternionFromProperEuler:dz,normalize:U8,denormalize:j5};class r0{constructor(J=0,w=0){r0.prototype.isVector2=!0,this.x=J,this.y=w}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,w){return this.x=J,this.y=w,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let w=this.x,Z=this.y,Y=J.elements;return this.x=Y[0]*w+Y[3]*Z+Y[6],this.y=Y[1]*w+Y[4]*Z+Y[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,w){return this.x=i0(this.x,J.x,w.x),this.y=i0(this.y,J.y,w.y),this}clampScalar(J,w){return this.x=i0(this.x,J,w),this.y=i0(this.y,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(i0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let w=Math.sqrt(this.lengthSq()*J.lengthSq());if(w===0)return Math.PI/2;let Z=this.dot(J)/w;return Math.acos(i0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let w=this.x-J.x,Z=this.y-J.y;return w*w+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this}rotateAround(J,w){let Z=Math.cos(w),Y=Math.sin(w),H=this.x-J.x,X=this.y-J.y;return this.x=H*Z-X*Y+J.x,this.y=H*Y+X*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class h7{constructor(J=0,w=0,Z=0,Y=1){this.isQuaternion=!0,this._x=J,this._y=w,this._z=Z,this._w=Y}static slerpFlat(J,w,Z,Y,H,X,Q){let W=Z[Y+0],U=Z[Y+1],G=Z[Y+2],q=Z[Y+3],$=H[X+0],K=H[X+1],R=H[X+2],z=H[X+3];if(Q===0){J[w+0]=W,J[w+1]=U,J[w+2]=G,J[w+3]=q;return}if(Q===1){J[w+0]=$,J[w+1]=K,J[w+2]=R,J[w+3]=z;return}if(q!==z||W!==$||U!==K||G!==R){let B=1-Q,M=W*$+U*K+G*R+q*z,k=M>=0?1:-1,O=1-M*M;if(O>Number.EPSILON){let L=Math.sqrt(O),T=Math.atan2(L,M*k);B=Math.sin(B*T)/L,Q=Math.sin(Q*T)/L}let D=Q*k;if(W=W*B+$*D,U=U*B+K*D,G=G*B+R*D,q=q*B+z*D,B===1-Q){let L=1/Math.sqrt(W*W+U*U+G*G+q*q);W*=L,U*=L,G*=L,q*=L}}J[w]=W,J[w+1]=U,J[w+2]=G,J[w+3]=q}static multiplyQuaternionsFlat(J,w,Z,Y,H,X){let Q=Z[Y],W=Z[Y+1],U=Z[Y+2],G=Z[Y+3],q=H[X],$=H[X+1],K=H[X+2],R=H[X+3];return J[w]=Q*R+G*q+W*K-U*$,J[w+1]=W*R+G*$+U*q-Q*K,J[w+2]=U*R+G*K+Q*$-W*q,J[w+3]=G*R-Q*q-W*$-U*K,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,w,Z,Y){return this._x=J,this._y=w,this._z=Z,this._w=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,w=!0){let{_x:Z,_y:Y,_z:H,_order:X}=J,Q=Math.cos,W=Math.sin,U=Q(Z/2),G=Q(Y/2),q=Q(H/2),$=W(Z/2),K=W(Y/2),R=W(H/2);switch(X){case"XYZ":this._x=$*G*q+U*K*R,this._y=U*K*q-$*G*R,this._z=U*G*R+$*K*q,this._w=U*G*q-$*K*R;break;case"YXZ":this._x=$*G*q+U*K*R,this._y=U*K*q-$*G*R,this._z=U*G*R-$*K*q,this._w=U*G*q+$*K*R;break;case"ZXY":this._x=$*G*q-U*K*R,this._y=U*K*q+$*G*R,this._z=U*G*R+$*K*q,this._w=U*G*q-$*K*R;break;case"ZYX":this._x=$*G*q-U*K*R,this._y=U*K*q+$*G*R,this._z=U*G*R-$*K*q,this._w=U*G*q+$*K*R;break;case"YZX":this._x=$*G*q+U*K*R,this._y=U*K*q+$*G*R,this._z=U*G*R-$*K*q,this._w=U*G*q-$*K*R;break;case"XZY":this._x=$*G*q-U*K*R,this._y=U*K*q-$*G*R,this._z=U*G*R+$*K*q,this._w=U*G*q+$*K*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+X)}if(w===!0)this._onChangeCallback();return this}setFromAxisAngle(J,w){let Z=w/2,Y=Math.sin(Z);return this._x=J.x*Y,this._y=J.y*Y,this._z=J.z*Y,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let w=J.elements,Z=w[0],Y=w[4],H=w[8],X=w[1],Q=w[5],W=w[9],U=w[2],G=w[6],q=w[10],$=Z+Q+q;if($>0){let K=0.5/Math.sqrt($+1);this._w=0.25/K,this._x=(G-W)*K,this._y=(H-U)*K,this._z=(X-Y)*K}else if(Z>Q&&Z>q){let K=2*Math.sqrt(1+Z-Q-q);this._w=(G-W)/K,this._x=0.25*K,this._y=(Y+X)/K,this._z=(H+U)/K}else if(Q>q){let K=2*Math.sqrt(1+Q-Z-q);this._w=(H-U)/K,this._x=(Y+X)/K,this._y=0.25*K,this._z=(W+G)/K}else{let K=2*Math.sqrt(1+q-Z-Q);this._w=(X-Y)/K,this._x=(H+U)/K,this._y=(W+G)/K,this._z=0.25*K}return this._onChangeCallback(),this}setFromUnitVectors(J,w){let Z=J.dot(w)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*w.z-J.z*w.y,this._y=J.z*w.x-J.x*w.z,this._z=J.x*w.y-J.y*w.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(i0(this.dot(J),-1,1)))}rotateTowards(J,w){let Z=this.angleTo(J);if(Z===0)return this;let Y=Math.min(1,w/Z);return this.slerp(J,Y),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,w){let{_x:Z,_y:Y,_z:H,_w:X}=J,Q=w._x,W=w._y,U=w._z,G=w._w;return this._x=Z*G+X*Q+Y*U-H*W,this._y=Y*G+X*W+H*Q-Z*U,this._z=H*G+X*U+Z*W-Y*Q,this._w=X*G-Z*Q-Y*W-H*U,this._onChangeCallback(),this}slerp(J,w){if(w===0)return this;if(w===1)return this.copy(J);let Z=this._x,Y=this._y,H=this._z,X=this._w,Q=X*J._w+Z*J._x+Y*J._y+H*J._z;if(Q<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Q=-Q;else this.copy(J);if(Q>=1)return this._w=X,this._x=Z,this._y=Y,this._z=H,this;let W=1-Q*Q;if(W<=Number.EPSILON){let K=1-w;return this._w=K*X+w*this._w,this._x=K*Z+w*this._x,this._y=K*Y+w*this._y,this._z=K*H+w*this._z,this.normalize(),this}let U=Math.sqrt(W),G=Math.atan2(U,Q),q=Math.sin((1-w)*G)/U,$=Math.sin(w*G)/U;return this._w=X*q+this._w*$,this._x=Z*q+this._x*$,this._y=Y*q+this._y*$,this._z=H*q+this._z*$,this._onChangeCallback(),this}slerpQuaternions(J,w,Z){return this.copy(J).slerp(w,Z)}random(){let J=2*Math.PI*Math.random(),w=2*Math.PI*Math.random(),Z=Math.random(),Y=Math.sqrt(1-Z),H=Math.sqrt(Z);return this.set(Y*Math.sin(J),Y*Math.cos(J),H*Math.sin(w),H*Math.cos(w))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,w=0){return this._x=J[w],this._y=J[w+1],this._z=J[w+2],this._w=J[w+3],this._onChangeCallback(),this}toArray(J=[],w=0){return J[w]=this._x,J[w+1]=this._y,J[w+2]=this._z,J[w+3]=this._w,J}fromBufferAttribute(J,w){return this._x=J.getX(w),this._y=J.getY(w),this._z=J.getZ(w),this._w=J.getW(w),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(J=0,w=0,Z=0){x.prototype.isVector3=!0,this.x=J,this.y=w,this.z=Z}set(J,w,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=w,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;case 2:this.z=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this.z=J.z+w.z,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this.z+=J.z*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this.z=J.z-w.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,w){return this.x=J.x*w.x,this.y=J.y*w.y,this.z=J.z*w.z,this}applyEuler(J){return this.applyQuaternion(MR.setFromEuler(J))}applyAxisAngle(J,w){return this.applyQuaternion(MR.setFromAxisAngle(J,w))}applyMatrix3(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements;return this.x=H[0]*w+H[3]*Z+H[6]*Y,this.y=H[1]*w+H[4]*Z+H[7]*Y,this.z=H[2]*w+H[5]*Z+H[8]*Y,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements,X=1/(H[3]*w+H[7]*Z+H[11]*Y+H[15]);return this.x=(H[0]*w+H[4]*Z+H[8]*Y+H[12])*X,this.y=(H[1]*w+H[5]*Z+H[9]*Y+H[13])*X,this.z=(H[2]*w+H[6]*Z+H[10]*Y+H[14])*X,this}applyQuaternion(J){let w=this.x,Z=this.y,Y=this.z,H=J.x,X=J.y,Q=J.z,W=J.w,U=2*(X*Y-Q*Z),G=2*(Q*w-H*Y),q=2*(H*Z-X*w);return this.x=w+W*U+X*q-Q*G,this.y=Z+W*G+Q*U-H*q,this.z=Y+W*q+H*G-X*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements;return this.x=H[0]*w+H[4]*Z+H[8]*Y,this.y=H[1]*w+H[5]*Z+H[9]*Y,this.z=H[2]*w+H[6]*Z+H[10]*Y,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,w){return this.x=i0(this.x,J.x,w.x),this.y=i0(this.y,J.y,w.y),this.z=i0(this.z,J.z,w.z),this}clampScalar(J,w){return this.x=i0(this.x,J,w),this.y=i0(this.y,J,w),this.z=i0(this.z,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(i0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this.z+=(J.z-this.z)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this.z=J.z+(w.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,w){let{x:Z,y:Y,z:H}=J,X=w.x,Q=w.y,W=w.z;return this.x=Y*W-H*Q,this.y=H*X-Z*W,this.z=Z*Q-Y*X,this}projectOnVector(J){let w=J.lengthSq();if(w===0)return this.set(0,0,0);let Z=J.dot(this)/w;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return RW.copy(this).projectOnVector(J),this.sub(RW)}reflect(J){return this.sub(RW.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let w=Math.sqrt(this.lengthSq()*J.lengthSq());if(w===0)return Math.PI/2;let Z=this.dot(J)/w;return Math.acos(i0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let w=this.x-J.x,Z=this.y-J.y,Y=this.z-J.z;return w*w+Z*Z+Y*Y}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,w,Z){let Y=Math.sin(w)*J;return this.x=Y*Math.sin(Z),this.y=Math.cos(w)*J,this.z=Y*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,w,Z){return this.x=J*Math.sin(w),this.y=Z,this.z=J*Math.cos(w),this}setFromMatrixPosition(J){let w=J.elements;return this.x=w[12],this.y=w[13],this.z=w[14],this}setFromMatrixScale(J){let w=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),Y=this.setFromMatrixColumn(J,2).length();return this.x=w,this.y=Z,this.z=Y,this}setFromMatrixColumn(J,w){return this.fromArray(J.elements,w*4)}setFromMatrix3Column(J,w){return this.fromArray(J.elements,w*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this.z=J[w+2],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J[w+2]=this.z,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this.z=J.getZ(w),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,w=Math.random()*2-1,Z=Math.sqrt(1-w*w);return this.x=Z*Math.cos(J),this.y=w,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var RW=new x,MR=new h7;class g0{constructor(J,w,Z,Y,H,X,Q,W,U){if(g0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,w,Z,Y,H,X,Q,W,U)}set(J,w,Z,Y,H,X,Q,W,U){let G=this.elements;return G[0]=J,G[1]=Y,G[2]=Q,G[3]=w,G[4]=H,G[5]=W,G[6]=Z,G[7]=X,G[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let w=this.elements,Z=J.elements;return w[0]=Z[0],w[1]=Z[1],w[2]=Z[2],w[3]=Z[3],w[4]=Z[4],w[5]=Z[5],w[6]=Z[6],w[7]=Z[7],w[8]=Z[8],this}extractBasis(J,w,Z){return J.setFromMatrix3Column(this,0),w.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let w=J.elements;return this.set(w[0],w[4],w[8],w[1],w[5],w[9],w[2],w[6],w[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,w){let Z=J.elements,Y=w.elements,H=this.elements,X=Z[0],Q=Z[3],W=Z[6],U=Z[1],G=Z[4],q=Z[7],$=Z[2],K=Z[5],R=Z[8],z=Y[0],B=Y[3],M=Y[6],k=Y[1],O=Y[4],D=Y[7],L=Y[2],T=Y[5],E=Y[8];return H[0]=X*z+Q*k+W*L,H[3]=X*B+Q*O+W*T,H[6]=X*M+Q*D+W*E,H[1]=U*z+G*k+q*L,H[4]=U*B+G*O+q*T,H[7]=U*M+G*D+q*E,H[2]=$*z+K*k+R*L,H[5]=$*B+K*O+R*T,H[8]=$*M+K*D+R*E,this}multiplyScalar(J){let w=this.elements;return w[0]*=J,w[3]*=J,w[6]*=J,w[1]*=J,w[4]*=J,w[7]*=J,w[2]*=J,w[5]*=J,w[8]*=J,this}determinant(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8];return w*X*G-w*Q*U-Z*H*G+Z*Q*W+Y*H*U-Y*X*W}invert(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8],q=G*X-Q*U,$=Q*W-G*H,K=U*H-X*W,R=w*q+Z*$+Y*K;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let z=1/R;return J[0]=q*z,J[1]=(Y*U-G*Z)*z,J[2]=(Q*Z-Y*X)*z,J[3]=$*z,J[4]=(G*w-Y*W)*z,J[5]=(Y*H-Q*w)*z,J[6]=K*z,J[7]=(Z*W-U*w)*z,J[8]=(X*w-Z*H)*z,this}transpose(){let J,w=this.elements;return J=w[1],w[1]=w[3],w[3]=J,J=w[2],w[2]=w[6],w[6]=J,J=w[5],w[5]=w[7],w[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let w=this.elements;return J[0]=w[0],J[1]=w[3],J[2]=w[6],J[3]=w[1],J[4]=w[4],J[5]=w[7],J[6]=w[2],J[7]=w[5],J[8]=w[8],this}setUvTransform(J,w,Z,Y,H,X,Q){let W=Math.cos(H),U=Math.sin(H);return this.set(Z*W,Z*U,-Z*(W*X+U*Q)+X+J,-Y*U,Y*W,-Y*(-U*X+W*Q)+Q+w,0,0,1),this}scale(J,w){return this.premultiply(DW.makeScale(J,w)),this}rotate(J){return this.premultiply(DW.makeRotation(-J)),this}translate(J,w){return this.premultiply(DW.makeTranslation(J,w)),this}makeTranslation(J,w){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,w,0,0,1);return this}makeRotation(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,-Z,0,Z,w,0,0,0,1),this}makeScale(J,w){return this.set(J,0,0,0,w,0,0,0,1),this}equals(J){let w=this.elements,Z=J.elements;for(let Y=0;Y<9;Y++)if(w[Y]!==Z[Y])return!1;return!0}fromArray(J,w=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+w];return this}toArray(J=[],w=0){let Z=this.elements;return J[w]=Z[0],J[w+1]=Z[1],J[w+2]=Z[2],J[w+3]=Z[3],J[w+4]=Z[4],J[w+5]=Z[5],J[w+6]=Z[6],J[w+7]=Z[7],J[w+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var DW=new g0;function IU(J){for(let w=J.length-1;w>=0;--w)if(J[w]>=65535)return!0;return!1}function Gw(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function gD(){let J=Gw("canvas");return J.style.display="block",J}var OR={};function x5(J){if(J in OR)return;OR[J]=!0,console.warn(J)}function lD(J,w,Z){return new Promise(function(Y,H){function X(){switch(J.clientWaitSync(w,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:H();break;case J.TIMEOUT_EXPIRED:setTimeout(X,Z);break;default:Y()}}setTimeout(X,Z)})}var NR=new g0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),FR=new g0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function mz(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(H,X,Q){if(this.enabled===!1||X===Q||!X||!Q)return H;if(this.spaces[X].transfer==="srgb")H.r=s6(H.r),H.g=s6(H.g),H.b=s6(H.b);if(this.spaces[X].primaries!==this.spaces[Q].primaries)H.applyMatrix3(this.spaces[X].toXYZ),H.applyMatrix3(this.spaces[Q].fromXYZ);if(this.spaces[Q].transfer==="srgb")H.r=b5(H.r),H.g=b5(H.g),H.b=b5(H.b);return H},workingToColorSpace:function(H,X){return this.convert(H,this.workingColorSpace,X)},colorSpaceToWorking:function(H,X){return this.convert(H,X,this.workingColorSpace)},getPrimaries:function(H){return this.spaces[H].primaries},getTransfer:function(H){if(H==="")return"linear";return this.spaces[H].transfer},getToneMappingMode:function(H){return this.spaces[H].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(H,X=this.workingColorSpace){return H.fromArray(this.spaces[X].luminanceCoefficients)},define:function(H){Object.assign(this.spaces,H)},_getMatrix:function(H,X,Q){return H.copy(this.spaces[X].toXYZ).multiply(this.spaces[Q].fromXYZ)},_getDrawingBufferColorSpace:function(H){return this.spaces[H].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(H=this.workingColorSpace){return this.spaces[H].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(H,X){return x5("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(H,X)},toWorkingColorSpace:function(H,X){return x5("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(H,X)}},w=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],Y=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:w,whitePoint:Y,transfer:"linear",toXYZ:NR,fromXYZ:FR,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:w,whitePoint:Y,transfer:"srgb",toXYZ:NR,fromXYZ:FR,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var t0=mz();function s6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function b5(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var z5;class CU{static getDataURL(J,w="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(z5===void 0)z5=Gw("canvas");z5.width=J.width,z5.height=J.height;let Y=z5.getContext("2d");if(J instanceof ImageData)Y.putImageData(J,0,0);else Y.drawImage(J,0,0,J.width,J.height);Z=z5}return Z.toDataURL(w)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let w=Gw("canvas");w.width=J.width,w.height=J.height;let Z=w.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let Y=Z.getImageData(0,0,J.width,J.height),H=Y.data;for(let X=0;X<H.length;X++)H[X]=s6(H[X]/255)*255;return Z.putImageData(Y,0,0),w}else if(J.data){let w=J.data.slice(0);for(let Z=0;Z<w.length;Z++)if(w instanceof Uint8Array||w instanceof Uint8ClampedArray)w[Z]=Math.floor(s6(w[Z]/255)*255);else w[Z]=s6(w[Z]);return{data:w,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var uz=0;class Fw{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uz++}),this.uuid=m5(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let w=this.data;if(typeof HTMLVideoElement!=="undefined"&&w instanceof HTMLVideoElement)J.set(w.videoWidth,w.videoHeight,0);else if(w instanceof VideoFrame)J.set(w.displayHeight,w.displayWidth,0);else if(w!==null)J.set(w.width,w.height,w.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let w=J===void 0||typeof J==="string";if(!w&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},Y=this.data;if(Y!==null){let H;if(Array.isArray(Y)){H=[];for(let X=0,Q=Y.length;X<Q;X++)if(Y[X].isDataTexture)H.push(MW(Y[X].image));else H.push(MW(Y[X]))}else H=MW(Y);Z.url=H}if(!w)J.images[this.uuid]=Z;return Z}}function MW(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return CU.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var cz=0,OW=new x;class G8 extends x7{constructor(J=G8.DEFAULT_IMAGE,w=G8.DEFAULT_MAPPING,Z=1001,Y=1001,H=1006,X=1008,Q=1023,W=1009,U=G8.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:cz++}),this.uuid=m5(),this.name="",this.source=new Fw(J),this.mipmaps=[],this.mapping=w,this.channel=0,this.wrapS=Z,this.wrapT=Y,this.magFilter=H,this.minFilter=X,this.anisotropy=U,this.format=Q,this.internalFormat=null,this.type=W,this.offset=new r0(0,0),this.repeat=new r0(1,1),this.center=new r0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(OW).x}get height(){return this.source.getSize(OW).y}get depth(){return this.source.getSize(OW).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,w){this.updateRanges.push({start:J,count:w})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let w in J){let Z=J[w];if(Z===void 0){console.warn(`THREE.Texture.setValues(): parameter '${w}' has value of undefined.`);continue}let Y=this[w];if(Y===void 0){console.warn(`THREE.Texture.setValues(): property '${w}' does not exist.`);continue}if(Y&&Z&&(Y.isVector2&&Z.isVector2))Y.copy(Z);else if(Y&&Z&&(Y.isVector3&&Z.isVector3))Y.copy(Z);else if(Y&&Z&&(Y.isMatrix3&&Z.isMatrix3))Y.copy(Z);else this[w]=Z}}toJSON(J){let w=J===void 0||typeof J==="string";if(!w&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!w)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}G8.DEFAULT_IMAGE=null;G8.DEFAULT_MAPPING=300;G8.DEFAULT_ANISOTROPY=1;class Q9{constructor(J=0,w=0,Z=0,Y=1){Q9.prototype.isVector4=!0,this.x=J,this.y=w,this.z=Z,this.w=Y}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,w,Z,Y){return this.x=J,this.y=w,this.z=Z,this.w=Y,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;case 2:this.z=w;break;case 3:this.w=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this.z=J.z+w.z,this.w=J.w+w.w,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this.z+=J.z*w,this.w+=J.w*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this.z=J.z-w.z,this.w=J.w-w.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let w=this.x,Z=this.y,Y=this.z,H=this.w,X=J.elements;return this.x=X[0]*w+X[4]*Z+X[8]*Y+X[12]*H,this.y=X[1]*w+X[5]*Z+X[9]*Y+X[13]*H,this.z=X[2]*w+X[6]*Z+X[10]*Y+X[14]*H,this.w=X[3]*w+X[7]*Z+X[11]*Y+X[15]*H,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let w=Math.sqrt(1-J.w*J.w);if(w<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/w,this.y=J.y/w,this.z=J.z/w;return this}setAxisAngleFromRotationMatrix(J){let w,Z,Y,H,X=0.01,Q=0.1,W=J.elements,U=W[0],G=W[4],q=W[8],$=W[1],K=W[5],R=W[9],z=W[2],B=W[6],M=W[10];if(Math.abs(G-$)<0.01&&Math.abs(q-z)<0.01&&Math.abs(R-B)<0.01){if(Math.abs(G+$)<0.1&&Math.abs(q+z)<0.1&&Math.abs(R+B)<0.1&&Math.abs(U+K+M-3)<0.1)return this.set(1,0,0,0),this;w=Math.PI;let O=(U+1)/2,D=(K+1)/2,L=(M+1)/2,T=(G+$)/4,E=(q+z)/4,A=(R+B)/4;if(O>D&&O>L)if(O<0.01)Z=0,Y=0.707106781,H=0.707106781;else Z=Math.sqrt(O),Y=T/Z,H=E/Z;else if(D>L)if(D<0.01)Z=0.707106781,Y=0,H=0.707106781;else Y=Math.sqrt(D),Z=T/Y,H=A/Y;else if(L<0.01)Z=0.707106781,Y=0.707106781,H=0;else H=Math.sqrt(L),Z=E/H,Y=A/H;return this.set(Z,Y,H,w),this}let k=Math.sqrt((B-R)*(B-R)+(q-z)*(q-z)+($-G)*($-G));if(Math.abs(k)<0.001)k=1;return this.x=(B-R)/k,this.y=(q-z)/k,this.z=($-G)/k,this.w=Math.acos((U+K+M-1)/2),this}setFromMatrixPosition(J){let w=J.elements;return this.x=w[12],this.y=w[13],this.z=w[14],this.w=w[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,w){return this.x=i0(this.x,J.x,w.x),this.y=i0(this.y,J.y,w.y),this.z=i0(this.z,J.z,w.z),this.w=i0(this.w,J.w,w.w),this}clampScalar(J,w){return this.x=i0(this.x,J,w),this.y=i0(this.y,J,w),this.z=i0(this.z,J,w),this.w=i0(this.w,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(i0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this.z+=(J.z-this.z)*w,this.w+=(J.w-this.w)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this.z=J.z+(w.z-J.z)*Z,this.w=J.w+(w.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this.z=J[w+2],this.w=J[w+3],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J[w+2]=this.z,J[w+3]=this.w,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this.z=J.getZ(w),this.w=J.getW(w),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TU extends x7{constructor(J=1,w=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=w,this.depth=Z.depth,this.scissor=new Q9(0,0,J,w),this.scissorTest=!1,this.viewport=new Q9(0,0,J,w);let Y={width:J,height:w,depth:Z.depth},H=new G8(Y);this.textures=[];let X=Z.count;for(let Q=0;Q<X;Q++)this.textures[Q]=H.clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview}_setTextureOptions(J={}){let w={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)w.mapping=J.mapping;if(J.wrapS!==void 0)w.wrapS=J.wrapS;if(J.wrapT!==void 0)w.wrapT=J.wrapT;if(J.wrapR!==void 0)w.wrapR=J.wrapR;if(J.magFilter!==void 0)w.magFilter=J.magFilter;if(J.minFilter!==void 0)w.minFilter=J.minFilter;if(J.format!==void 0)w.format=J.format;if(J.type!==void 0)w.type=J.type;if(J.anisotropy!==void 0)w.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)w.colorSpace=J.colorSpace;if(J.flipY!==void 0)w.flipY=J.flipY;if(J.generateMipmaps!==void 0)w.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)w.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(w)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,w,Z=1){if(this.width!==J||this.height!==w||this.depth!==Z){this.width=J,this.height=w,this.depth=Z;for(let Y=0,H=this.textures.length;Y<H;Y++)this.textures[Y].image.width=J,this.textures[Y].image.height=w,this.textures[Y].image.depth=Z,this.textures[Y].isArrayTexture=this.textures[Y].image.depth>1;this.dispose()}this.viewport.set(0,0,J,w),this.scissor.set(0,0,J,w)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let w=0,Z=J.textures.length;w<Z;w++){this.textures[w]=J.textures[w].clone(),this.textures[w].isRenderTargetTexture=!0,this.textures[w].renderTarget=this;let Y=Object.assign({},J.textures[w].image);this.textures[w].source=new Fw(Y)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n6 extends TU{constructor(J=1,w=1,Z={}){super(J,w,Z);this.isWebGLRenderTarget=!0}}class cY extends G8{constructor(J=null,w=1,Z=1,Y=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:w,height:Z,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PU extends G8{constructor(J=null,w=1,Z=1,Y=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:w,height:Z,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M1{constructor(J=new x(1/0,1/0,1/0),w=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=w}set(J,w){return this.min.copy(J),this.max.copy(w),this}setFromArray(J){this.makeEmpty();for(let w=0,Z=J.length;w<Z;w+=3)this.expandByPoint(Z6.fromArray(J,w));return this}setFromBufferAttribute(J){this.makeEmpty();for(let w=0,Z=J.count;w<Z;w++)this.expandByPoint(Z6.fromBufferAttribute(J,w));return this}setFromPoints(J){this.makeEmpty();for(let w=0,Z=J.length;w<Z;w++)this.expandByPoint(J[w]);return this}setFromCenterAndSize(J,w){let Z=Z6.copy(w).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,w=!1){return this.makeEmpty(),this.expandByObject(J,w)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,w=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let H=Z.getAttribute("position");if(w===!0&&H!==void 0&&J.isInstancedMesh!==!0)for(let X=0,Q=H.count;X<Q;X++){if(J.isMesh===!0)J.getVertexPosition(X,Z6);else Z6.fromBufferAttribute(H,X);Z6.applyMatrix4(J.matrixWorld),this.expandByPoint(Z6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();KY.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();KY.copy(Z.boundingBox)}KY.applyMatrix4(J.matrixWorld),this.union(KY)}}let Y=J.children;for(let H=0,X=Y.length;H<X;H++)this.expandByObject(Y[H],w);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,w){return w.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Z6),Z6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let w,Z;if(J.normal.x>0)w=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else w=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)w+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else w+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)w+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else w+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return w<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Zw),$Y.subVectors(this.max,Zw),L5.subVectors(J.a,Zw),B5.subVectors(J.b,Zw),V5.subVectors(J.c,Zw),E7.subVectors(B5,L5),I7.subVectors(V5,B5),U1.subVectors(L5,V5);let w=[0,-E7.z,E7.y,0,-I7.z,I7.y,0,-U1.z,U1.y,E7.z,0,-E7.x,I7.z,0,-I7.x,U1.z,0,-U1.x,-E7.y,E7.x,0,-I7.y,I7.x,0,-U1.y,U1.x,0];if(!NW(w,L5,B5,V5,$Y))return!1;if(w=[1,0,0,0,1,0,0,0,1],!NW(w,L5,B5,V5,$Y))return!1;return RY.crossVectors(E7,I7),w=[RY.x,RY.y,RY.z],NW(w,L5,B5,V5,$Y)}clampPoint(J,w){return w.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Z6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Z6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return p6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),p6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),p6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),p6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),p6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),p6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),p6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),p6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(p6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var p6=[new x,new x,new x,new x,new x,new x,new x,new x],Z6=new x,KY=new M1,L5=new x,B5=new x,V5=new x,E7=new x,I7=new x,U1=new x,Zw=new x,$Y=new x,RY=new x,G1=new x;function NW(J,w,Z,Y,H){for(let X=0,Q=J.length-3;X<=Q;X+=3){G1.fromArray(J,X);let W=H.x*Math.abs(G1.x)+H.y*Math.abs(G1.y)+H.z*Math.abs(G1.z),U=w.dot(G1),G=Z.dot(G1),q=Y.dot(G1);if(Math.max(-Math.max(U,G,q),Math.min(U,G,q))>W)return!1}return!0}var iz=new M1,Yw=new x,FW=new x;class zw{constructor(J=new x,w=-1){this.isSphere=!0,this.center=J,this.radius=w}set(J,w){return this.center.copy(J),this.radius=w,this}setFromPoints(J,w){let Z=this.center;if(w!==void 0)Z.copy(w);else iz.setFromPoints(J).getCenter(Z);let Y=0;for(let H=0,X=J.length;H<X;H++)Y=Math.max(Y,Z.distanceToSquared(J[H]));return this.radius=Math.sqrt(Y),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let w=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=w*w}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,w){let Z=this.center.distanceToSquared(J);if(w.copy(J),Z>this.radius*this.radius)w.sub(this.center).normalize(),w.multiplyScalar(this.radius).add(this.center);return w}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Yw.subVectors(J,this.center);let w=Yw.lengthSq();if(w>this.radius*this.radius){let Z=Math.sqrt(w),Y=(Z-this.radius)*0.5;this.center.addScaledVector(Yw,Y/Z),this.radius+=Y}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else FW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Yw.copy(J.center).add(FW)),this.expandByPoint(Yw.copy(J.center).sub(FW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var d6=new x,zW=new x,DY=new x,C7=new x,LW=new x,MY=new x,BW=new x;class SU{constructor(J=new x,w=new x(0,0,-1)){this.origin=J,this.direction=w}set(J,w){return this.origin.copy(J),this.direction.copy(w),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,w){return w.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,d6)),this}closestPointToPoint(J,w){w.subVectors(J,this.origin);let Z=w.dot(this.direction);if(Z<0)return w.copy(this.origin);return w.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let w=d6.subVectors(J,this.origin).dot(this.direction);if(w<0)return this.origin.distanceToSquared(J);return d6.copy(this.origin).addScaledVector(this.direction,w),d6.distanceToSquared(J)}distanceSqToSegment(J,w,Z,Y){zW.copy(J).add(w).multiplyScalar(0.5),DY.copy(w).sub(J).normalize(),C7.copy(this.origin).sub(zW);let H=J.distanceTo(w)*0.5,X=-this.direction.dot(DY),Q=C7.dot(this.direction),W=-C7.dot(DY),U=C7.lengthSq(),G=Math.abs(1-X*X),q,$,K,R;if(G>0)if(q=X*W-Q,$=X*Q-W,R=H*G,q>=0)if($>=-R)if($<=R){let z=1/G;q*=z,$*=z,K=q*(q+X*$+2*Q)+$*(X*q+$+2*W)+U}else $=H,q=Math.max(0,-(X*$+Q)),K=-q*q+$*($+2*W)+U;else $=-H,q=Math.max(0,-(X*$+Q)),K=-q*q+$*($+2*W)+U;else if($<=-R)q=Math.max(0,-(-X*H+Q)),$=q>0?-H:Math.min(Math.max(-H,-W),H),K=-q*q+$*($+2*W)+U;else if($<=R)q=0,$=Math.min(Math.max(-H,-W),H),K=$*($+2*W)+U;else q=Math.max(0,-(X*H+Q)),$=q>0?H:Math.min(Math.max(-H,-W),H),K=-q*q+$*($+2*W)+U;else $=X>0?-H:H,q=Math.max(0,-(X*$+Q)),K=-q*q+$*($+2*W)+U;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(Y)Y.copy(zW).addScaledVector(DY,$);return K}intersectSphere(J,w){d6.subVectors(J.center,this.origin);let Z=d6.dot(this.direction),Y=d6.dot(d6)-Z*Z,H=J.radius*J.radius;if(Y>H)return null;let X=Math.sqrt(H-Y),Q=Z-X,W=Z+X;if(W<0)return null;if(Q<0)return this.at(W,w);return this.at(Q,w)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let w=J.normal.dot(this.direction);if(w===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/w;return Z>=0?Z:null}intersectPlane(J,w){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,w)}intersectsPlane(J){let w=J.distanceToPoint(this.origin);if(w===0)return!0;if(J.normal.dot(this.direction)*w<0)return!0;return!1}intersectBox(J,w){let Z,Y,H,X,Q,W,U=1/this.direction.x,G=1/this.direction.y,q=1/this.direction.z,$=this.origin;if(U>=0)Z=(J.min.x-$.x)*U,Y=(J.max.x-$.x)*U;else Z=(J.max.x-$.x)*U,Y=(J.min.x-$.x)*U;if(G>=0)H=(J.min.y-$.y)*G,X=(J.max.y-$.y)*G;else H=(J.max.y-$.y)*G,X=(J.min.y-$.y)*G;if(Z>X||H>Y)return null;if(H>Z||isNaN(Z))Z=H;if(X<Y||isNaN(Y))Y=X;if(q>=0)Q=(J.min.z-$.z)*q,W=(J.max.z-$.z)*q;else Q=(J.max.z-$.z)*q,W=(J.min.z-$.z)*q;if(Z>W||Q>Y)return null;if(Q>Z||Z!==Z)Z=Q;if(W<Y||Y!==Y)Y=W;if(Y<0)return null;return this.at(Z>=0?Z:Y,w)}intersectsBox(J){return this.intersectBox(J,d6)!==null}intersectTriangle(J,w,Z,Y,H){LW.subVectors(w,J),MY.subVectors(Z,J),BW.crossVectors(LW,MY);let X=this.direction.dot(BW),Q;if(X>0){if(Y)return null;Q=1}else if(X<0)Q=-1,X=-X;else return null;C7.subVectors(this.origin,J);let W=Q*this.direction.dot(MY.crossVectors(C7,MY));if(W<0)return null;let U=Q*this.direction.dot(LW.cross(C7));if(U<0)return null;if(W+U>X)return null;let G=-Q*C7.dot(BW);if(G<0)return null;return this.at(G/X,H)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class I9{constructor(J,w,Z,Y,H,X,Q,W,U,G,q,$,K,R,z,B){if(I9.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,w,Z,Y,H,X,Q,W,U,G,q,$,K,R,z,B)}set(J,w,Z,Y,H,X,Q,W,U,G,q,$,K,R,z,B){let M=this.elements;return M[0]=J,M[4]=w,M[8]=Z,M[12]=Y,M[1]=H,M[5]=X,M[9]=Q,M[13]=W,M[2]=U,M[6]=G,M[10]=q,M[14]=$,M[3]=K,M[7]=R,M[11]=z,M[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new I9().fromArray(this.elements)}copy(J){let w=this.elements,Z=J.elements;return w[0]=Z[0],w[1]=Z[1],w[2]=Z[2],w[3]=Z[3],w[4]=Z[4],w[5]=Z[5],w[6]=Z[6],w[7]=Z[7],w[8]=Z[8],w[9]=Z[9],w[10]=Z[10],w[11]=Z[11],w[12]=Z[12],w[13]=Z[13],w[14]=Z[14],w[15]=Z[15],this}copyPosition(J){let w=this.elements,Z=J.elements;return w[12]=Z[12],w[13]=Z[13],w[14]=Z[14],this}setFromMatrix3(J){let w=J.elements;return this.set(w[0],w[3],w[6],0,w[1],w[4],w[7],0,w[2],w[5],w[8],0,0,0,0,1),this}extractBasis(J,w,Z){return J.setFromMatrixColumn(this,0),w.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,w,Z){return this.set(J.x,w.x,Z.x,0,J.y,w.y,Z.y,0,J.z,w.z,Z.z,0,0,0,0,1),this}extractRotation(J){let w=this.elements,Z=J.elements,Y=1/_5.setFromMatrixColumn(J,0).length(),H=1/_5.setFromMatrixColumn(J,1).length(),X=1/_5.setFromMatrixColumn(J,2).length();return w[0]=Z[0]*Y,w[1]=Z[1]*Y,w[2]=Z[2]*Y,w[3]=0,w[4]=Z[4]*H,w[5]=Z[5]*H,w[6]=Z[6]*H,w[7]=0,w[8]=Z[8]*X,w[9]=Z[9]*X,w[10]=Z[10]*X,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,this}makeRotationFromEuler(J){let w=this.elements,Z=J.x,Y=J.y,H=J.z,X=Math.cos(Z),Q=Math.sin(Z),W=Math.cos(Y),U=Math.sin(Y),G=Math.cos(H),q=Math.sin(H);if(J.order==="XYZ"){let $=X*G,K=X*q,R=Q*G,z=Q*q;w[0]=W*G,w[4]=-W*q,w[8]=U,w[1]=K+R*U,w[5]=$-z*U,w[9]=-Q*W,w[2]=z-$*U,w[6]=R+K*U,w[10]=X*W}else if(J.order==="YXZ"){let $=W*G,K=W*q,R=U*G,z=U*q;w[0]=$+z*Q,w[4]=R*Q-K,w[8]=X*U,w[1]=X*q,w[5]=X*G,w[9]=-Q,w[2]=K*Q-R,w[6]=z+$*Q,w[10]=X*W}else if(J.order==="ZXY"){let $=W*G,K=W*q,R=U*G,z=U*q;w[0]=$-z*Q,w[4]=-X*q,w[8]=R+K*Q,w[1]=K+R*Q,w[5]=X*G,w[9]=z-$*Q,w[2]=-X*U,w[6]=Q,w[10]=X*W}else if(J.order==="ZYX"){let $=X*G,K=X*q,R=Q*G,z=Q*q;w[0]=W*G,w[4]=R*U-K,w[8]=$*U+z,w[1]=W*q,w[5]=z*U+$,w[9]=K*U-R,w[2]=-U,w[6]=Q*W,w[10]=X*W}else if(J.order==="YZX"){let $=X*W,K=X*U,R=Q*W,z=Q*U;w[0]=W*G,w[4]=z-$*q,w[8]=R*q+K,w[1]=q,w[5]=X*G,w[9]=-Q*G,w[2]=-U*G,w[6]=K*q+R,w[10]=$-z*q}else if(J.order==="XZY"){let $=X*W,K=X*U,R=Q*W,z=Q*U;w[0]=W*G,w[4]=-q,w[8]=U*G,w[1]=$*q+z,w[5]=X*G,w[9]=K*q-R,w[2]=R*q-K,w[6]=Q*G,w[10]=z*q+$}return w[3]=0,w[7]=0,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,this}makeRotationFromQuaternion(J){return this.compose(sz,J,oz)}lookAt(J,w,Z){let Y=this.elements;if(S8.subVectors(J,w),S8.lengthSq()===0)S8.z=1;if(S8.normalize(),T7.crossVectors(Z,S8),T7.lengthSq()===0){if(Math.abs(Z.z)===1)S8.x+=0.0001;else S8.z+=0.0001;S8.normalize(),T7.crossVectors(Z,S8)}return T7.normalize(),OY.crossVectors(S8,T7),Y[0]=T7.x,Y[4]=OY.x,Y[8]=S8.x,Y[1]=T7.y,Y[5]=OY.y,Y[9]=S8.y,Y[2]=T7.z,Y[6]=OY.z,Y[10]=S8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,w){let Z=J.elements,Y=w.elements,H=this.elements,X=Z[0],Q=Z[4],W=Z[8],U=Z[12],G=Z[1],q=Z[5],$=Z[9],K=Z[13],R=Z[2],z=Z[6],B=Z[10],M=Z[14],k=Z[3],O=Z[7],D=Z[11],L=Z[15],T=Y[0],E=Y[4],A=Y[8],j=Y[12],_=Y[1],F=Y[5],C=Y[9],y=Y[13],p=Y[2],l=Y[6],o=Y[10],m=Y[14],a=Y[3],d=Y[7],Z0=Y[11],q0=Y[15];return H[0]=X*T+Q*_+W*p+U*a,H[4]=X*E+Q*F+W*l+U*d,H[8]=X*A+Q*C+W*o+U*Z0,H[12]=X*j+Q*y+W*m+U*q0,H[1]=G*T+q*_+$*p+K*a,H[5]=G*E+q*F+$*l+K*d,H[9]=G*A+q*C+$*o+K*Z0,H[13]=G*j+q*y+$*m+K*q0,H[2]=R*T+z*_+B*p+M*a,H[6]=R*E+z*F+B*l+M*d,H[10]=R*A+z*C+B*o+M*Z0,H[14]=R*j+z*y+B*m+M*q0,H[3]=k*T+O*_+D*p+L*a,H[7]=k*E+O*F+D*l+L*d,H[11]=k*A+O*C+D*o+L*Z0,H[15]=k*j+O*y+D*m+L*q0,this}multiplyScalar(J){let w=this.elements;return w[0]*=J,w[4]*=J,w[8]*=J,w[12]*=J,w[1]*=J,w[5]*=J,w[9]*=J,w[13]*=J,w[2]*=J,w[6]*=J,w[10]*=J,w[14]*=J,w[3]*=J,w[7]*=J,w[11]*=J,w[15]*=J,this}determinant(){let J=this.elements,w=J[0],Z=J[4],Y=J[8],H=J[12],X=J[1],Q=J[5],W=J[9],U=J[13],G=J[2],q=J[6],$=J[10],K=J[14],R=J[3],z=J[7],B=J[11],M=J[15];return R*(+H*W*q-Y*U*q-H*Q*$+Z*U*$+Y*Q*K-Z*W*K)+z*(+w*W*K-w*U*$+H*X*$-Y*X*K+Y*U*G-H*W*G)+B*(+w*U*q-w*Q*K-H*X*q+Z*X*K+H*Q*G-Z*U*G)+M*(-Y*Q*G-w*W*q+w*Q*$+Y*X*q-Z*X*$+Z*W*G)}transpose(){let J=this.elements,w;return w=J[1],J[1]=J[4],J[4]=w,w=J[2],J[2]=J[8],J[8]=w,w=J[6],J[6]=J[9],J[9]=w,w=J[3],J[3]=J[12],J[12]=w,w=J[7],J[7]=J[13],J[13]=w,w=J[11],J[11]=J[14],J[14]=w,this}setPosition(J,w,Z){let Y=this.elements;if(J.isVector3)Y[12]=J.x,Y[13]=J.y,Y[14]=J.z;else Y[12]=J,Y[13]=w,Y[14]=Z;return this}invert(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8],q=J[9],$=J[10],K=J[11],R=J[12],z=J[13],B=J[14],M=J[15],k=q*B*U-z*$*U+z*W*K-Q*B*K-q*W*M+Q*$*M,O=R*$*U-G*B*U-R*W*K+X*B*K+G*W*M-X*$*M,D=G*z*U-R*q*U+R*Q*K-X*z*K-G*Q*M+X*q*M,L=R*q*W-G*z*W-R*Q*$+X*z*$+G*Q*B-X*q*B,T=w*k+Z*O+Y*D+H*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return J[0]=k*E,J[1]=(z*$*H-q*B*H-z*Y*K+Z*B*K+q*Y*M-Z*$*M)*E,J[2]=(Q*B*H-z*W*H+z*Y*U-Z*B*U-Q*Y*M+Z*W*M)*E,J[3]=(q*W*H-Q*$*H-q*Y*U+Z*$*U+Q*Y*K-Z*W*K)*E,J[4]=O*E,J[5]=(G*B*H-R*$*H+R*Y*K-w*B*K-G*Y*M+w*$*M)*E,J[6]=(R*W*H-X*B*H-R*Y*U+w*B*U+X*Y*M-w*W*M)*E,J[7]=(X*$*H-G*W*H+G*Y*U-w*$*U-X*Y*K+w*W*K)*E,J[8]=D*E,J[9]=(R*q*H-G*z*H-R*Z*K+w*z*K+G*Z*M-w*q*M)*E,J[10]=(X*z*H-R*Q*H+R*Z*U-w*z*U-X*Z*M+w*Q*M)*E,J[11]=(G*Q*H-X*q*H-G*Z*U+w*q*U+X*Z*K-w*Q*K)*E,J[12]=L*E,J[13]=(G*z*Y-R*q*Y+R*Z*$-w*z*$-G*Z*B+w*q*B)*E,J[14]=(R*Q*Y-X*z*Y-R*Z*W+w*z*W+X*Z*B-w*Q*B)*E,J[15]=(X*q*Y-G*Q*Y+G*Z*W-w*q*W-X*Z*$+w*Q*$)*E,this}scale(J){let w=this.elements,Z=J.x,Y=J.y,H=J.z;return w[0]*=Z,w[4]*=Y,w[8]*=H,w[1]*=Z,w[5]*=Y,w[9]*=H,w[2]*=Z,w[6]*=Y,w[10]*=H,w[3]*=Z,w[7]*=Y,w[11]*=H,this}getMaxScaleOnAxis(){let J=this.elements,w=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Y=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(w,Z,Y))}makeTranslation(J,w,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,w,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,w,-Z,0,0,Z,w,0,0,0,0,1),this}makeRotationY(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,0,Z,0,0,1,0,0,-Z,0,w,0,0,0,0,1),this}makeRotationZ(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,-Z,0,0,Z,w,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,w){let Z=Math.cos(w),Y=Math.sin(w),H=1-Z,X=J.x,Q=J.y,W=J.z,U=H*X,G=H*Q;return this.set(U*X+Z,U*Q-Y*W,U*W+Y*Q,0,U*Q+Y*W,G*Q+Z,G*W-Y*X,0,U*W-Y*Q,G*W+Y*X,H*W*W+Z,0,0,0,0,1),this}makeScale(J,w,Z){return this.set(J,0,0,0,0,w,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,w,Z,Y,H,X){return this.set(1,Z,H,0,J,1,X,0,w,Y,1,0,0,0,0,1),this}compose(J,w,Z){let Y=this.elements,H=w._x,X=w._y,Q=w._z,W=w._w,U=H+H,G=X+X,q=Q+Q,$=H*U,K=H*G,R=H*q,z=X*G,B=X*q,M=Q*q,k=W*U,O=W*G,D=W*q,L=Z.x,T=Z.y,E=Z.z;return Y[0]=(1-(z+M))*L,Y[1]=(K+D)*L,Y[2]=(R-O)*L,Y[3]=0,Y[4]=(K-D)*T,Y[5]=(1-($+M))*T,Y[6]=(B+k)*T,Y[7]=0,Y[8]=(R+O)*E,Y[9]=(B-k)*E,Y[10]=(1-($+z))*E,Y[11]=0,Y[12]=J.x,Y[13]=J.y,Y[14]=J.z,Y[15]=1,this}decompose(J,w,Z){let Y=this.elements,H=_5.set(Y[0],Y[1],Y[2]).length(),X=_5.set(Y[4],Y[5],Y[6]).length(),Q=_5.set(Y[8],Y[9],Y[10]).length();if(this.determinant()<0)H=-H;J.x=Y[12],J.y=Y[13],J.z=Y[14],Y6.copy(this);let U=1/H,G=1/X,q=1/Q;return Y6.elements[0]*=U,Y6.elements[1]*=U,Y6.elements[2]*=U,Y6.elements[4]*=G,Y6.elements[5]*=G,Y6.elements[6]*=G,Y6.elements[8]*=q,Y6.elements[9]*=q,Y6.elements[10]*=q,w.setFromRotationMatrix(Y6),Z.x=H,Z.y=X,Z.z=Q,this}makePerspective(J,w,Z,Y,H,X,Q=2000,W=!1){let U=this.elements,G=2*H/(w-J),q=2*H/(Z-Y),$=(w+J)/(w-J),K=(Z+Y)/(Z-Y),R,z;if(W)R=H/(X-H),z=X*H/(X-H);else if(Q===2000)R=-(X+H)/(X-H),z=-2*X*H/(X-H);else if(Q===2001)R=-X/(X-H),z=-X*H/(X-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Q);return U[0]=G,U[4]=0,U[8]=$,U[12]=0,U[1]=0,U[5]=q,U[9]=K,U[13]=0,U[2]=0,U[6]=0,U[10]=R,U[14]=z,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,w,Z,Y,H,X,Q=2000,W=!1){let U=this.elements,G=2/(w-J),q=2/(Z-Y),$=-(w+J)/(w-J),K=-(Z+Y)/(Z-Y),R,z;if(W)R=1/(X-H),z=X/(X-H);else if(Q===2000)R=-2/(X-H),z=-(X+H)/(X-H);else if(Q===2001)R=-1/(X-H),z=-H/(X-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Q);return U[0]=G,U[4]=0,U[8]=0,U[12]=$,U[1]=0,U[5]=q,U[9]=0,U[13]=K,U[2]=0,U[6]=0,U[10]=R,U[14]=z,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let w=this.elements,Z=J.elements;for(let Y=0;Y<16;Y++)if(w[Y]!==Z[Y])return!1;return!0}fromArray(J,w=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+w];return this}toArray(J=[],w=0){let Z=this.elements;return J[w]=Z[0],J[w+1]=Z[1],J[w+2]=Z[2],J[w+3]=Z[3],J[w+4]=Z[4],J[w+5]=Z[5],J[w+6]=Z[6],J[w+7]=Z[7],J[w+8]=Z[8],J[w+9]=Z[9],J[w+10]=Z[10],J[w+11]=Z[11],J[w+12]=Z[12],J[w+13]=Z[13],J[w+14]=Z[14],J[w+15]=Z[15],J}}var _5=new x,Y6=new I9,sz=new x(0,0,0),oz=new x(1,1,1),T7=new x,OY=new x,S8=new x,zR=new I9,LR=new h7;class X6{constructor(J=0,w=0,Z=0,Y=X6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=w,this._z=Z,this._order=Y}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,w,Z,Y=this._order){return this._x=J,this._y=w,this._z=Z,this._order=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,w=this._order,Z=!0){let Y=J.elements,H=Y[0],X=Y[4],Q=Y[8],W=Y[1],U=Y[5],G=Y[9],q=Y[2],$=Y[6],K=Y[10];switch(w){case"XYZ":if(this._y=Math.asin(i0(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(-G,K),this._z=Math.atan2(-X,H);else this._x=Math.atan2($,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-i0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(Q,K),this._z=Math.atan2(W,U);else this._y=Math.atan2(-q,H),this._z=0;break;case"ZXY":if(this._x=Math.asin(i0($,-1,1)),Math.abs($)<0.9999999)this._y=Math.atan2(-q,K),this._z=Math.atan2(-X,U);else this._y=0,this._z=Math.atan2(W,H);break;case"ZYX":if(this._y=Math.asin(-i0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2($,K),this._z=Math.atan2(W,H);else this._x=0,this._z=Math.atan2(-X,U);break;case"YZX":if(this._z=Math.asin(i0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(-G,U),this._y=Math.atan2(-q,H);else this._x=0,this._y=Math.atan2(Q,K);break;case"XZY":if(this._z=Math.asin(-i0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2($,U),this._y=Math.atan2(Q,H);else this._x=Math.atan2(-G,K),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+w)}if(this._order=w,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,w,Z){return zR.makeRotationFromQuaternion(J),this.setFromRotationMatrix(zR,w,Z)}setFromVector3(J,w=this._order){return this.set(J.x,J.y,J.z,w)}reorder(J){return LR.setFromEuler(this),this.setFromQuaternion(LR,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],w=0){return J[w]=this._x,J[w+1]=this._y,J[w+2]=this._z,J[w+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}X6.DEFAULT_ORDER="XYZ";class iY{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var nz=0,BR=new x,A5=new h7,m6=new I9,NY=new x,Hw=new x,az=new x,rz=new h7,VR=new x(1,0,0),_R=new x(0,1,0),AR=new x(0,0,1),ER={type:"added"},tz={type:"removed"},E5={type:"childadded",child:null},VW={type:"childremoved",child:null};class w8 extends x7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nz++}),this.uuid=m5(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=w8.DEFAULT_UP.clone();let J=new x,w=new X6,Z=new h7,Y=new x(1,1,1);function H(){Z.setFromEuler(w,!1)}function X(){w.setFromQuaternion(Z,void 0,!1)}w._onChange(H),Z._onChange(X),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:w},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:Y},modelViewMatrix:{value:new I9},normalMatrix:{value:new g0}}),this.matrix=new I9,this.matrixWorld=new I9,this.matrixAutoUpdate=w8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=w8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iY,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,w){this.quaternion.setFromAxisAngle(J,w)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,w){return A5.setFromAxisAngle(J,w),this.quaternion.multiply(A5),this}rotateOnWorldAxis(J,w){return A5.setFromAxisAngle(J,w),this.quaternion.premultiply(A5),this}rotateX(J){return this.rotateOnAxis(VR,J)}rotateY(J){return this.rotateOnAxis(_R,J)}rotateZ(J){return this.rotateOnAxis(AR,J)}translateOnAxis(J,w){return BR.copy(J).applyQuaternion(this.quaternion),this.position.add(BR.multiplyScalar(w)),this}translateX(J){return this.translateOnAxis(VR,J)}translateY(J){return this.translateOnAxis(_R,J)}translateZ(J){return this.translateOnAxis(AR,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(m6.copy(this.matrixWorld).invert())}lookAt(J,w,Z){if(J.isVector3)NY.copy(J);else NY.set(J,w,Z);let Y=this.parent;if(this.updateWorldMatrix(!0,!1),Hw.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)m6.lookAt(Hw,NY,this.up);else m6.lookAt(NY,Hw,this.up);if(this.quaternion.setFromRotationMatrix(m6),Y)m6.extractRotation(Y.matrixWorld),A5.setFromRotationMatrix(m6),this.quaternion.premultiply(A5.invert())}add(J){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.add(arguments[w]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(ER),E5.child=J,this.dispatchEvent(E5),E5.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let w=this.children.indexOf(J);if(w!==-1)J.parent=null,this.children.splice(w,1),J.dispatchEvent(tz),VW.child=J,this.dispatchEvent(VW),VW.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),m6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),m6.multiply(J.parent.matrixWorld);return J.applyMatrix4(m6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(ER),E5.child=J,this.dispatchEvent(E5),E5.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,w){if(this[J]===w)return this;for(let Z=0,Y=this.children.length;Z<Y;Z++){let X=this.children[Z].getObjectByProperty(J,w);if(X!==void 0)return X}return}getObjectsByProperty(J,w,Z=[]){if(this[J]===w)Z.push(this);let Y=this.children;for(let H=0,X=Y.length;H<X;H++)Y[H].getObjectsByProperty(J,w,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hw,J,az),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hw,rz,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let w=this.matrixWorld.elements;return J.set(w[8],w[9],w[10]).normalize()}raycast(){}traverse(J){J(this);let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].traverseVisible(J)}traverseAncestors(J){let w=this.parent;if(w!==null)J(w),w.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].updateMatrixWorld(J)}updateWorldMatrix(J,w){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(w===!0){let Y=this.children;for(let H=0,X=Y.length;H<X;H++)Y[H].updateWorldMatrix(!1,!0)}}toJSON(J){let w=J===void 0||typeof J==="string",Z={};if(w)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Y={};if(Y.uuid=this.uuid,Y.type=this.type,this.name!=="")Y.name=this.name;if(this.castShadow===!0)Y.castShadow=!0;if(this.receiveShadow===!0)Y.receiveShadow=!0;if(this.visible===!1)Y.visible=!1;if(this.frustumCulled===!1)Y.frustumCulled=!1;if(this.renderOrder!==0)Y.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Y.userData=this.userData;if(Y.layers=this.layers.mask,Y.matrix=this.matrix.toArray(),Y.up=this.up.toArray(),this.matrixAutoUpdate===!1)Y.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Y.type="InstancedMesh",Y.count=this.count,Y.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Y.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Y.type="BatchedMesh",Y.perObjectFrustumCulled=this.perObjectFrustumCulled,Y.sortObjects=this.sortObjects,Y.drawRanges=this._drawRanges,Y.reservedRanges=this._reservedRanges,Y.geometryInfo=this._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox?Q.boundingBox.toJSON():void 0,boundingSphere:Q.boundingSphere?Q.boundingSphere.toJSON():void 0})),Y.instanceInfo=this._instanceInfo.map((Q)=>({...Q})),Y.availableInstanceIds=this._availableInstanceIds.slice(),Y.availableGeometryIds=this._availableGeometryIds.slice(),Y.nextIndexStart=this._nextIndexStart,Y.nextVertexStart=this._nextVertexStart,Y.geometryCount=this._geometryCount,Y.maxInstanceCount=this._maxInstanceCount,Y.maxVertexCount=this._maxVertexCount,Y.maxIndexCount=this._maxIndexCount,Y.geometryInitialized=this._geometryInitialized,Y.matricesTexture=this._matricesTexture.toJSON(J),Y.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Y.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Y.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Y.boundingBox=this.boundingBox.toJSON()}function H(Q,W){if(Q[W.uuid]===void 0)Q[W.uuid]=W.toJSON(J);return W.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Y.background=this.background.toJSON();else if(this.background.isTexture)Y.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Y.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Y.geometry=H(J.geometries,this.geometry);let Q=this.geometry.parameters;if(Q!==void 0&&Q.shapes!==void 0){let W=Q.shapes;if(Array.isArray(W))for(let U=0,G=W.length;U<G;U++){let q=W[U];H(J.shapes,q)}else H(J.shapes,W)}}if(this.isSkinnedMesh){if(Y.bindMode=this.bindMode,Y.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)H(J.skeletons,this.skeleton),Y.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Q=[];for(let W=0,U=this.material.length;W<U;W++)Q.push(H(J.materials,this.material[W]));Y.material=Q}else Y.material=H(J.materials,this.material);if(this.children.length>0){Y.children=[];for(let Q=0;Q<this.children.length;Q++)Y.children.push(this.children[Q].toJSON(J).object)}if(this.animations.length>0){Y.animations=[];for(let Q=0;Q<this.animations.length;Q++){let W=this.animations[Q];Y.animations.push(H(J.animations,W))}}if(w){let Q=X(J.geometries),W=X(J.materials),U=X(J.textures),G=X(J.images),q=X(J.shapes),$=X(J.skeletons),K=X(J.animations),R=X(J.nodes);if(Q.length>0)Z.geometries=Q;if(W.length>0)Z.materials=W;if(U.length>0)Z.textures=U;if(G.length>0)Z.images=G;if(q.length>0)Z.shapes=q;if($.length>0)Z.skeletons=$;if(K.length>0)Z.animations=K;if(R.length>0)Z.nodes=R}return Z.object=Y,Z;function X(Q){let W=[];for(let U in Q){let G=Q[U];delete G.metadata,W.push(G)}return W}}clone(J){return new this.constructor().copy(this,J)}copy(J,w=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),w===!0)for(let Z=0;Z<J.children.length;Z++){let Y=J.children[Z];this.add(Y.clone())}return this}}w8.DEFAULT_UP=new x(0,1,0);w8.DEFAULT_MATRIX_AUTO_UPDATE=!0;w8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var H6=new x,u6=new x,_W=new x,c6=new x,I5=new x,C5=new x,IR=new x,AW=new x,EW=new x,IW=new x,CW=new Q9,TW=new Q9,PW=new Q9;class o8{constructor(J=new x,w=new x,Z=new x){this.a=J,this.b=w,this.c=Z}static getNormal(J,w,Z,Y){Y.subVectors(Z,w),H6.subVectors(J,w),Y.cross(H6);let H=Y.lengthSq();if(H>0)return Y.multiplyScalar(1/Math.sqrt(H));return Y.set(0,0,0)}static getBarycoord(J,w,Z,Y,H){H6.subVectors(Y,w),u6.subVectors(Z,w),_W.subVectors(J,w);let X=H6.dot(H6),Q=H6.dot(u6),W=H6.dot(_W),U=u6.dot(u6),G=u6.dot(_W),q=X*U-Q*Q;if(q===0)return H.set(0,0,0),null;let $=1/q,K=(U*W-Q*G)*$,R=(X*G-Q*W)*$;return H.set(1-K-R,R,K)}static containsPoint(J,w,Z,Y){if(this.getBarycoord(J,w,Z,Y,c6)===null)return!1;return c6.x>=0&&c6.y>=0&&c6.x+c6.y<=1}static getInterpolation(J,w,Z,Y,H,X,Q,W){if(this.getBarycoord(J,w,Z,Y,c6)===null){if(W.x=0,W.y=0,"z"in W)W.z=0;if("w"in W)W.w=0;return null}return W.setScalar(0),W.addScaledVector(H,c6.x),W.addScaledVector(X,c6.y),W.addScaledVector(Q,c6.z),W}static getInterpolatedAttribute(J,w,Z,Y,H,X){return CW.setScalar(0),TW.setScalar(0),PW.setScalar(0),CW.fromBufferAttribute(J,w),TW.fromBufferAttribute(J,Z),PW.fromBufferAttribute(J,Y),X.setScalar(0),X.addScaledVector(CW,H.x),X.addScaledVector(TW,H.y),X.addScaledVector(PW,H.z),X}static isFrontFacing(J,w,Z,Y){return H6.subVectors(Z,w),u6.subVectors(J,w),H6.cross(u6).dot(Y)<0?!0:!1}set(J,w,Z){return this.a.copy(J),this.b.copy(w),this.c.copy(Z),this}setFromPointsAndIndices(J,w,Z,Y){return this.a.copy(J[w]),this.b.copy(J[Z]),this.c.copy(J[Y]),this}setFromAttributeAndIndices(J,w,Z,Y){return this.a.fromBufferAttribute(J,w),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,Y),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return H6.subVectors(this.c,this.b),u6.subVectors(this.a,this.b),H6.cross(u6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return o8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,w){return o8.getBarycoord(J,this.a,this.b,this.c,w)}getInterpolation(J,w,Z,Y,H){return o8.getInterpolation(J,this.a,this.b,this.c,w,Z,Y,H)}containsPoint(J){return o8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return o8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,w){let Z=this.a,Y=this.b,H=this.c,X,Q;I5.subVectors(Y,Z),C5.subVectors(H,Z),AW.subVectors(J,Z);let W=I5.dot(AW),U=C5.dot(AW);if(W<=0&&U<=0)return w.copy(Z);EW.subVectors(J,Y);let G=I5.dot(EW),q=C5.dot(EW);if(G>=0&&q<=G)return w.copy(Y);let $=W*q-G*U;if($<=0&&W>=0&&G<=0)return X=W/(W-G),w.copy(Z).addScaledVector(I5,X);IW.subVectors(J,H);let K=I5.dot(IW),R=C5.dot(IW);if(R>=0&&K<=R)return w.copy(H);let z=K*U-W*R;if(z<=0&&U>=0&&R<=0)return Q=U/(U-R),w.copy(Z).addScaledVector(C5,Q);let B=G*R-K*q;if(B<=0&&q-G>=0&&K-R>=0)return IR.subVectors(H,Y),Q=(q-G)/(q-G+(K-R)),w.copy(Y).addScaledVector(IR,Q);let M=1/(B+z+$);return X=z*M,Q=$*M,w.copy(Z).addScaledVector(I5,X).addScaledVector(C5,Q)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var pD={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},P7={h:0,s:0,l:0},FY={h:0,s:0,l:0};function SW(J,w,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(w-J)*6*Z;if(Z<0.5)return w;if(Z<0.6666666666666666)return J+(w-J)*6*(0.6666666666666666-Z);return J}class m0{constructor(J,w,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,w,Z)}set(J,w,Z){if(w===void 0&&Z===void 0){let Y=J;if(Y&&Y.isColor)this.copy(Y);else if(typeof Y==="number")this.setHex(Y);else if(typeof Y==="string")this.setStyle(Y)}else this.setRGB(J,w,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,w="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,t0.colorSpaceToWorking(this,w),this}setRGB(J,w,Z,Y=t0.workingColorSpace){return this.r=J,this.g=w,this.b=Z,t0.colorSpaceToWorking(this,Y),this}setHSL(J,w,Z,Y=t0.workingColorSpace){if(J=EU(J,1),w=i0(w,0,1),Z=i0(Z,0,1),w===0)this.r=this.g=this.b=Z;else{let H=Z<=0.5?Z*(1+w):Z+w-Z*w,X=2*Z-H;this.r=SW(X,H,J+0.3333333333333333),this.g=SW(X,H,J),this.b=SW(X,H,J-0.3333333333333333)}return t0.colorSpaceToWorking(this,Y),this}setStyle(J,w="srgb"){function Z(H){if(H===void 0)return;if(parseFloat(H)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Y;if(Y=/^(\w+)\(([^\)]*)\)/.exec(J)){let H,X=Y[1],Q=Y[2];switch(X){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,w);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,w);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,w);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Y=/^\#([A-Fa-f\d]+)$/.exec(J)){let H=Y[1],X=H.length;if(X===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,w);else if(X===6)return this.setHex(parseInt(H,16),w);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,w);return this}setColorName(J,w="srgb"){let Z=pD[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,w);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s6(J.r),this.g=s6(J.g),this.b=s6(J.b),this}copyLinearToSRGB(J){return this.r=b5(J.r),this.g=b5(J.g),this.b=b5(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return t0.workingToColorSpace(Y8.copy(this),J),Math.round(i0(Y8.r*255,0,255))*65536+Math.round(i0(Y8.g*255,0,255))*256+Math.round(i0(Y8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,w=t0.workingColorSpace){t0.workingToColorSpace(Y8.copy(this),w);let{r:Z,g:Y,b:H}=Y8,X=Math.max(Z,Y,H),Q=Math.min(Z,Y,H),W,U,G=(Q+X)/2;if(Q===X)W=0,U=0;else{let q=X-Q;switch(U=G<=0.5?q/(X+Q):q/(2-X-Q),X){case Z:W=(Y-H)/q+(Y<H?6:0);break;case Y:W=(H-Z)/q+2;break;case H:W=(Z-Y)/q+4;break}W/=6}return J.h=W,J.s=U,J.l=G,J}getRGB(J,w=t0.workingColorSpace){return t0.workingToColorSpace(Y8.copy(this),w),J.r=Y8.r,J.g=Y8.g,J.b=Y8.b,J}getStyle(J="srgb"){t0.workingToColorSpace(Y8.copy(this),J);let{r:w,g:Z,b:Y}=Y8;if(J!=="srgb")return`color(${J} ${w.toFixed(3)} ${Z.toFixed(3)} ${Y.toFixed(3)})`;return`rgb(${Math.round(w*255)},${Math.round(Z*255)},${Math.round(Y*255)})`}offsetHSL(J,w,Z){return this.getHSL(P7),this.setHSL(P7.h+J,P7.s+w,P7.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,w){return this.r=J.r+w.r,this.g=J.g+w.g,this.b=J.b+w.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,w){return this.r+=(J.r-this.r)*w,this.g+=(J.g-this.g)*w,this.b+=(J.b-this.b)*w,this}lerpColors(J,w,Z){return this.r=J.r+(w.r-J.r)*Z,this.g=J.g+(w.g-J.g)*Z,this.b=J.b+(w.b-J.b)*Z,this}lerpHSL(J,w){this.getHSL(P7),J.getHSL(FY);let Z=Uw(P7.h,FY.h,w),Y=Uw(P7.s,FY.s,w),H=Uw(P7.l,FY.l,w);return this.setHSL(Z,Y,H),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let w=this.r,Z=this.g,Y=this.b,H=J.elements;return this.r=H[0]*w+H[3]*Z+H[6]*Y,this.g=H[1]*w+H[4]*Z+H[7]*Y,this.b=H[2]*w+H[5]*Z+H[8]*Y,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,w=0){return this.r=J[w],this.g=J[w+1],this.b=J[w+2],this}toArray(J=[],w=0){return J[w]=this.r,J[w+1]=this.g,J[w+2]=this.b,J}fromBufferAttribute(J,w){return this.r=J.getX(w),this.g=J.getY(w),this.b=J.getZ(w),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Y8=new m0;m0.NAMES=pD;var ez=0;class O1 extends x7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ez++}),this.uuid=m5(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new m0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let w in J){let Z=J[w];if(Z===void 0){console.warn(`THREE.Material: parameter '${w}' has value of undefined.`);continue}let Y=this[w];if(Y===void 0){console.warn(`THREE.Material: '${w}' is not a property of THREE.${this.type}.`);continue}if(Y&&Y.isColor)Y.set(Z);else if(Y&&Y.isVector3&&(Z&&Z.isVector3))Y.copy(Z);else this[w]=Z}}toJSON(J){let w=J===void 0||typeof J==="string";if(w)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function Y(H){let X=[];for(let Q in H){let W=H[Q];delete W.metadata,X.push(W)}return X}if(w){let H=Y(J.textures),X=Y(J.images);if(H.length>0)Z.textures=H;if(X.length>0)Z.images=X}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let w=J.clippingPlanes,Z=null;if(w!==null){let Y=w.length;Z=new Array(Y);for(let H=0;H!==Y;++H)Z[H]=w[H].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class sY extends O1{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new m0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var y9=new x,zY=new r0,JL=0;class n8{constructor(J,w,Z=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JL++}),this.name="",this.array=J,this.itemSize=w,this.count=J!==void 0?J.length/w:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,w){this.updateRanges.push({start:J,count:w})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,w,Z){J*=this.itemSize,Z*=w.itemSize;for(let Y=0,H=this.itemSize;Y<H;Y++)this.array[J+Y]=w.array[Z+Y];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let w=0,Z=this.count;w<Z;w++)zY.fromBufferAttribute(this,w),zY.applyMatrix3(J),this.setXY(w,zY.x,zY.y);else if(this.itemSize===3)for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyMatrix3(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}applyMatrix4(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyMatrix4(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}applyNormalMatrix(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyNormalMatrix(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}transformDirection(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.transformDirection(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}set(J,w=0){return this.array.set(J,w),this}getComponent(J,w){let Z=this.array[J*this.itemSize+w];if(this.normalized)Z=j5(Z,this.array);return Z}setComponent(J,w,Z){if(this.normalized)Z=U8(Z,this.array);return this.array[J*this.itemSize+w]=Z,this}getX(J){let w=this.array[J*this.itemSize];if(this.normalized)w=j5(w,this.array);return w}setX(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize]=w,this}getY(J){let w=this.array[J*this.itemSize+1];if(this.normalized)w=j5(w,this.array);return w}setY(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+1]=w,this}getZ(J){let w=this.array[J*this.itemSize+2];if(this.normalized)w=j5(w,this.array);return w}setZ(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+2]=w,this}getW(J){let w=this.array[J*this.itemSize+3];if(this.normalized)w=j5(w,this.array);return w}setW(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+3]=w,this}setXY(J,w,Z){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this}setXYZ(J,w,Z,Y){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array),Y=U8(Y,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this.array[J+2]=Y,this}setXYZW(J,w,Z,Y,H){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array),Y=U8(Y,this.array),H=U8(H,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this.array[J+2]=Y,this.array[J+3]=H,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class oY extends n8{constructor(J,w,Z){super(new Uint16Array(J),w,Z)}}class nY extends n8{constructor(J,w,Z){super(new Uint32Array(J),w,Z)}}class a8 extends n8{constructor(J,w,Z){super(new Float32Array(J),w,Z)}}var wL=0,s8=new I9,jW=new w8,T5=new x,j8=new M1,Xw=new M1,s9=new x;class a6 extends x7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wL++}),this.uuid=m5(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((IU(J))?nY:oY)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,w){return this.attributes[J]=w,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,w,Z=0){this.groups.push({start:J,count:w,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,w){this.drawRange.start=J,this.drawRange.count=w}applyMatrix4(J){let w=this.attributes.position;if(w!==void 0)w.applyMatrix4(J),w.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let H=new g0().getNormalMatrix(J);Z.applyNormalMatrix(H),Z.needsUpdate=!0}let Y=this.attributes.tangent;if(Y!==void 0)Y.transformDirection(J),Y.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return s8.makeRotationFromQuaternion(J),this.applyMatrix4(s8),this}rotateX(J){return s8.makeRotationX(J),this.applyMatrix4(s8),this}rotateY(J){return s8.makeRotationY(J),this.applyMatrix4(s8),this}rotateZ(J){return s8.makeRotationZ(J),this.applyMatrix4(s8),this}translate(J,w,Z){return s8.makeTranslation(J,w,Z),this.applyMatrix4(s8),this}scale(J,w,Z){return s8.makeScale(J,w,Z),this.applyMatrix4(s8),this}lookAt(J){return jW.lookAt(J),jW.updateMatrix(),this.applyMatrix4(jW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(T5).negate(),this.translate(T5.x,T5.y,T5.z),this}setFromPoints(J){let w=this.getAttribute("position");if(w===void 0){let Z=[];for(let Y=0,H=J.length;Y<H;Y++){let X=J[Y];Z.push(X.x,X.y,X.z||0)}this.setAttribute("position",new a8(Z,3))}else{let Z=Math.min(J.length,w.count);for(let Y=0;Y<Z;Y++){let H=J[Y];w.setXYZ(Y,H.x,H.y,H.z||0)}if(J.length>w.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");w.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new M1;let J=this.attributes.position,w=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),w)for(let Z=0,Y=w.length;Z<Y;Z++){let H=w[Z];if(j8.setFromBufferAttribute(H),this.morphTargetsRelative)s9.addVectors(this.boundingBox.min,j8.min),this.boundingBox.expandByPoint(s9),s9.addVectors(this.boundingBox.max,j8.max),this.boundingBox.expandByPoint(s9);else this.boundingBox.expandByPoint(j8.min),this.boundingBox.expandByPoint(j8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new zw;let J=this.attributes.position,w=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(j8.setFromBufferAttribute(J),w)for(let H=0,X=w.length;H<X;H++){let Q=w[H];if(Xw.setFromBufferAttribute(Q),this.morphTargetsRelative)s9.addVectors(j8.min,Xw.min),j8.expandByPoint(s9),s9.addVectors(j8.max,Xw.max),j8.expandByPoint(s9);else j8.expandByPoint(Xw.min),j8.expandByPoint(Xw.max)}j8.getCenter(Z);let Y=0;for(let H=0,X=J.count;H<X;H++)s9.fromBufferAttribute(J,H),Y=Math.max(Y,Z.distanceToSquared(s9));if(w)for(let H=0,X=w.length;H<X;H++){let Q=w[H],W=this.morphTargetsRelative;for(let U=0,G=Q.count;U<G;U++){if(s9.fromBufferAttribute(Q,U),W)T5.fromBufferAttribute(J,U),s9.add(T5);Y=Math.max(Y,Z.distanceToSquared(s9))}}if(this.boundingSphere.radius=Math.sqrt(Y),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,w=this.attributes;if(J===null||w.position===void 0||w.normal===void 0||w.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:Y,uv:H}=w;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new n8(new Float32Array(4*Z.count),4));let X=this.getAttribute("tangent"),Q=[],W=[];for(let A=0;A<Z.count;A++)Q[A]=new x,W[A]=new x;let U=new x,G=new x,q=new x,$=new r0,K=new r0,R=new r0,z=new x,B=new x;function M(A,j,_){U.fromBufferAttribute(Z,A),G.fromBufferAttribute(Z,j),q.fromBufferAttribute(Z,_),$.fromBufferAttribute(H,A),K.fromBufferAttribute(H,j),R.fromBufferAttribute(H,_),G.sub(U),q.sub(U),K.sub($),R.sub($);let F=1/(K.x*R.y-R.x*K.y);if(!isFinite(F))return;z.copy(G).multiplyScalar(R.y).addScaledVector(q,-K.y).multiplyScalar(F),B.copy(q).multiplyScalar(K.x).addScaledVector(G,-R.x).multiplyScalar(F),Q[A].add(z),Q[j].add(z),Q[_].add(z),W[A].add(B),W[j].add(B),W[_].add(B)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let A=0,j=k.length;A<j;++A){let _=k[A],F=_.start,C=_.count;for(let y=F,p=F+C;y<p;y+=3)M(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let O=new x,D=new x,L=new x,T=new x;function E(A){L.fromBufferAttribute(Y,A),T.copy(L);let j=Q[A];O.copy(j),O.sub(L.multiplyScalar(L.dot(j))).normalize(),D.crossVectors(T,j);let F=D.dot(W[A])<0?-1:1;X.setXYZW(A,O.x,O.y,O.z,F)}for(let A=0,j=k.length;A<j;++A){let _=k[A],F=_.start,C=_.count;for(let y=F,p=F+C;y<p;y+=3)E(J.getX(y+0)),E(J.getX(y+1)),E(J.getX(y+2))}}computeVertexNormals(){let J=this.index,w=this.getAttribute("position");if(w!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new n8(new Float32Array(w.count*3),3),this.setAttribute("normal",Z);else for(let $=0,K=Z.count;$<K;$++)Z.setXYZ($,0,0,0);let Y=new x,H=new x,X=new x,Q=new x,W=new x,U=new x,G=new x,q=new x;if(J)for(let $=0,K=J.count;$<K;$+=3){let R=J.getX($+0),z=J.getX($+1),B=J.getX($+2);Y.fromBufferAttribute(w,R),H.fromBufferAttribute(w,z),X.fromBufferAttribute(w,B),G.subVectors(X,H),q.subVectors(Y,H),G.cross(q),Q.fromBufferAttribute(Z,R),W.fromBufferAttribute(Z,z),U.fromBufferAttribute(Z,B),Q.add(G),W.add(G),U.add(G),Z.setXYZ(R,Q.x,Q.y,Q.z),Z.setXYZ(z,W.x,W.y,W.z),Z.setXYZ(B,U.x,U.y,U.z)}else for(let $=0,K=w.count;$<K;$+=3)Y.fromBufferAttribute(w,$+0),H.fromBufferAttribute(w,$+1),X.fromBufferAttribute(w,$+2),G.subVectors(X,H),q.subVectors(Y,H),G.cross(q),Z.setXYZ($+0,G.x,G.y,G.z),Z.setXYZ($+1,G.x,G.y,G.z),Z.setXYZ($+2,G.x,G.y,G.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let w=0,Z=J.count;w<Z;w++)s9.fromBufferAttribute(J,w),s9.normalize(),J.setXYZ(w,s9.x,s9.y,s9.z)}toNonIndexed(){function J(Q,W){let{array:U,itemSize:G,normalized:q}=Q,$=new U.constructor(W.length*G),K=0,R=0;for(let z=0,B=W.length;z<B;z++){if(Q.isInterleavedBufferAttribute)K=W[z]*Q.data.stride+Q.offset;else K=W[z]*G;for(let M=0;M<G;M++)$[R++]=U[K++]}return new n8($,G,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let w=new a6,Z=this.index.array,Y=this.attributes;for(let Q in Y){let W=Y[Q],U=J(W,Z);w.setAttribute(Q,U)}let H=this.morphAttributes;for(let Q in H){let W=[],U=H[Q];for(let G=0,q=U.length;G<q;G++){let $=U[G],K=J($,Z);W.push(K)}w.morphAttributes[Q]=W}w.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;for(let Q=0,W=X.length;Q<W;Q++){let U=X[Q];w.addGroup(U.start,U.count,U.materialIndex)}return w}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let W=this.parameters;for(let U in W)if(W[U]!==void 0)J[U]=W[U];return J}J.data={attributes:{}};let w=this.index;if(w!==null)J.data.index={type:w.array.constructor.name,array:Array.prototype.slice.call(w.array)};let Z=this.attributes;for(let W in Z){let U=Z[W];J.data.attributes[W]=U.toJSON(J.data)}let Y={},H=!1;for(let W in this.morphAttributes){let U=this.morphAttributes[W],G=[];for(let q=0,$=U.length;q<$;q++){let K=U[q];G.push(K.toJSON(J.data))}if(G.length>0)Y[W]=G,H=!0}if(H)J.data.morphAttributes=Y,J.data.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;if(X.length>0)J.data.groups=JSON.parse(JSON.stringify(X));let Q=this.boundingSphere;if(Q!==null)J.data.boundingSphere=Q.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let w={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let Y=J.attributes;for(let U in Y){let G=Y[U];this.setAttribute(U,G.clone(w))}let H=J.morphAttributes;for(let U in H){let G=[],q=H[U];for(let $=0,K=q.length;$<K;$++)G.push(q[$].clone(w));this.morphAttributes[U]=G}this.morphTargetsRelative=J.morphTargetsRelative;let X=J.groups;for(let U=0,G=X.length;U<G;U++){let q=X[U];this.addGroup(q.start,q.count,q.materialIndex)}let Q=J.boundingBox;if(Q!==null)this.boundingBox=Q.clone();let W=J.boundingSphere;if(W!==null)this.boundingSphere=W.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var CR=new I9,q1=new SU,LY=new zw,TR=new x,BY=new x,VY=new x,_Y=new x,fW=new x,AY=new x,PR=new x,EY=new x;class N8 extends w8{constructor(J=new a6,w=new sY){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=w,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,w){if(super.copy(J,w),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let w=this.geometry.morphAttributes,Z=Object.keys(w);if(Z.length>0){let Y=w[Z[0]];if(Y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,X=Y.length;H<X;H++){let Q=Y[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=H}}}}getVertexPosition(J,w){let Z=this.geometry,Y=Z.attributes.position,H=Z.morphAttributes.position,X=Z.morphTargetsRelative;w.fromBufferAttribute(Y,J);let Q=this.morphTargetInfluences;if(H&&Q){AY.set(0,0,0);for(let W=0,U=H.length;W<U;W++){let G=Q[W],q=H[W];if(G===0)continue;if(fW.fromBufferAttribute(q,J),X)AY.addScaledVector(fW,G);else AY.addScaledVector(fW.sub(w),G)}w.add(AY)}return w}raycast(J,w){let Z=this.geometry,Y=this.material,H=this.matrixWorld;if(Y===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(LY.copy(Z.boundingSphere),LY.applyMatrix4(H),q1.copy(J.ray).recast(J.near),LY.containsPoint(q1.origin)===!1){if(q1.intersectSphere(LY,TR)===null)return;if(q1.origin.distanceToSquared(TR)>(J.far-J.near)**2)return}if(CR.copy(H).invert(),q1.copy(J.ray).applyMatrix4(CR),Z.boundingBox!==null){if(q1.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,w,q1)}_computeIntersections(J,w,Z){let Y,H=this.geometry,X=this.material,Q=H.index,W=H.attributes.position,U=H.attributes.uv,G=H.attributes.uv1,q=H.attributes.normal,$=H.groups,K=H.drawRange;if(Q!==null)if(Array.isArray(X))for(let R=0,z=$.length;R<z;R++){let B=$[R],M=X[B.materialIndex],k=Math.max(B.start,K.start),O=Math.min(Q.count,Math.min(B.start+B.count,K.start+K.count));for(let D=k,L=O;D<L;D+=3){let T=Q.getX(D),E=Q.getX(D+1),A=Q.getX(D+2);if(Y=IY(this,M,J,Z,U,G,q,T,E,A),Y)Y.faceIndex=Math.floor(D/3),Y.face.materialIndex=B.materialIndex,w.push(Y)}}else{let R=Math.max(0,K.start),z=Math.min(Q.count,K.start+K.count);for(let B=R,M=z;B<M;B+=3){let k=Q.getX(B),O=Q.getX(B+1),D=Q.getX(B+2);if(Y=IY(this,X,J,Z,U,G,q,k,O,D),Y)Y.faceIndex=Math.floor(B/3),w.push(Y)}}else if(W!==void 0)if(Array.isArray(X))for(let R=0,z=$.length;R<z;R++){let B=$[R],M=X[B.materialIndex],k=Math.max(B.start,K.start),O=Math.min(W.count,Math.min(B.start+B.count,K.start+K.count));for(let D=k,L=O;D<L;D+=3){let T=D,E=D+1,A=D+2;if(Y=IY(this,M,J,Z,U,G,q,T,E,A),Y)Y.faceIndex=Math.floor(D/3),Y.face.materialIndex=B.materialIndex,w.push(Y)}}else{let R=Math.max(0,K.start),z=Math.min(W.count,K.start+K.count);for(let B=R,M=z;B<M;B+=3){let k=B,O=B+1,D=B+2;if(Y=IY(this,X,J,Z,U,G,q,k,O,D),Y)Y.faceIndex=Math.floor(B/3),w.push(Y)}}}}function ZL(J,w,Z,Y,H,X,Q,W){let U;if(w.side===1)U=Y.intersectTriangle(Q,X,H,!0,W);else U=Y.intersectTriangle(H,X,Q,w.side===0,W);if(U===null)return null;EY.copy(W),EY.applyMatrix4(J.matrixWorld);let G=Z.ray.origin.distanceTo(EY);if(G<Z.near||G>Z.far)return null;return{distance:G,point:EY.clone(),object:J}}function IY(J,w,Z,Y,H,X,Q,W,U,G){J.getVertexPosition(W,BY),J.getVertexPosition(U,VY),J.getVertexPosition(G,_Y);let q=ZL(J,w,Z,Y,BY,VY,_Y,PR);if(q){let $=new x;if(o8.getBarycoord(PR,BY,VY,_Y,$),H)q.uv=o8.getInterpolatedAttribute(H,W,U,G,$,new r0);if(X)q.uv1=o8.getInterpolatedAttribute(X,W,U,G,$,new r0);if(Q){if(q.normal=o8.getInterpolatedAttribute(Q,W,U,G,$,new x),q.normal.dot(Y.direction)>0)q.normal.multiplyScalar(-1)}let K={a:W,b:U,c:G,normal:new x,materialIndex:0};o8.getNormal(BY,VY,_Y,K.normal),q.face=K,q.barycoord=$}return q}class v7 extends a6{constructor(J=1,w=1,Z=1,Y=1,H=1,X=1){super();this.type="BoxGeometry",this.parameters={width:J,height:w,depth:Z,widthSegments:Y,heightSegments:H,depthSegments:X};let Q=this;Y=Math.floor(Y),H=Math.floor(H),X=Math.floor(X);let W=[],U=[],G=[],q=[],$=0,K=0;R("z","y","x",-1,-1,Z,w,J,X,H,0),R("z","y","x",1,-1,Z,w,-J,X,H,1),R("x","z","y",1,1,J,Z,w,Y,X,2),R("x","z","y",1,-1,J,Z,-w,Y,X,3),R("x","y","z",1,-1,J,w,Z,Y,H,4),R("x","y","z",-1,-1,J,w,-Z,Y,H,5),this.setIndex(W),this.setAttribute("position",new a8(U,3)),this.setAttribute("normal",new a8(G,3)),this.setAttribute("uv",new a8(q,2));function R(z,B,M,k,O,D,L,T,E,A,j){let _=D/E,F=L/A,C=D/2,y=L/2,p=T/2,l=E+1,o=A+1,m=0,a=0,d=new x;for(let Z0=0;Z0<o;Z0++){let q0=Z0*F-y;for(let I0=0;I0<l;I0++){let K0=I0*_-C;d[z]=K0*k,d[B]=q0*O,d[M]=p,U.push(d.x,d.y,d.z),d[z]=0,d[B]=0,d[M]=T>0?1:-1,G.push(d.x,d.y,d.z),q.push(I0/E),q.push(1-Z0/A),m+=1}}for(let Z0=0;Z0<A;Z0++)for(let q0=0;q0<E;q0++){let I0=$+q0+l*Z0,K0=$+q0+l*(Z0+1),e0=$+(q0+1)+l*(Z0+1),p0=$+(q0+1)+l*Z0;W.push(I0,K0,p0),W.push(K0,e0,p0),a+=6}Q.addGroup(K,a,j),K+=a,$+=m}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function N1(J){let w={};for(let Z in J){w[Z]={};for(let Y in J[Z]){let H=J[Z][Y];if(H&&(H.isColor||H.isMatrix3||H.isMatrix4||H.isVector2||H.isVector3||H.isVector4||H.isTexture||H.isQuaternion))if(H.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),w[Z][Y]=null;else w[Z][Y]=H.clone();else if(Array.isArray(H))w[Z][Y]=H.slice();else w[Z][Y]=H}}return w}function H8(J){let w={};for(let Z=0;Z<J.length;Z++){let Y=N1(J[Z]);for(let H in Y)w[H]=Y[H]}return w}function YL(J){let w=[];for(let Z=0;Z<J.length;Z++)w.push(J[Z].clone());return w}function jU(J){let w=J.getRenderTarget();if(w===null)return J.outputColorSpace;if(w.isXRRenderTarget===!0)return w.texture.colorSpace;return t0.workingColorSpace}var dD={clone:N1,merge:H8},HL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class F6 extends O1{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HL,this.fragmentShader=XL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=N1(J.uniforms),this.uniformsGroups=YL(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let w=super.toJSON(J);w.glslVersion=this.glslVersion,w.uniforms={};for(let Y in this.uniforms){let X=this.uniforms[Y].value;if(X&&X.isTexture)w.uniforms[Y]={type:"t",value:X.toJSON(J).uuid};else if(X&&X.isColor)w.uniforms[Y]={type:"c",value:X.getHex()};else if(X&&X.isVector2)w.uniforms[Y]={type:"v2",value:X.toArray()};else if(X&&X.isVector3)w.uniforms[Y]={type:"v3",value:X.toArray()};else if(X&&X.isVector4)w.uniforms[Y]={type:"v4",value:X.toArray()};else if(X&&X.isMatrix3)w.uniforms[Y]={type:"m3",value:X.toArray()};else if(X&&X.isMatrix4)w.uniforms[Y]={type:"m4",value:X.toArray()};else w.uniforms[Y]={value:X}}if(Object.keys(this.defines).length>0)w.defines=this.defines;w.vertexShader=this.vertexShader,w.fragmentShader=this.fragmentShader,w.lights=this.lights,w.clipping=this.clipping;let Z={};for(let Y in this.extensions)if(this.extensions[Y]===!0)Z[Y]=!0;if(Object.keys(Z).length>0)w.extensions=Z;return w}}class aY extends w8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new I9,this.projectionMatrix=new I9,this.projectionMatrixInverse=new I9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,w){return super.copy(J,w),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,w){super.updateWorldMatrix(J,w),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var S7=new x,SR=new r0,jR=new r0;class J8 extends aY{constructor(J=50,w=1,Z=0.1,Y=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=Y,this.focus=10,this.aspect=w,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,w){return super.copy(J,w),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let w=0.5*this.getFilmHeight()/J;this.fov=K1*2*Math.atan(w),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(Ww*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return K1*2*Math.atan(Math.tan(Ww*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,w,Z){S7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),w.set(S7.x,S7.y).multiplyScalar(-J/S7.z),S7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(S7.x,S7.y).multiplyScalar(-J/S7.z)}getViewSize(J,w){return this.getViewBounds(J,SR,jR),w.subVectors(jR,SR)}setViewOffset(J,w,Z,Y,H,X){if(this.aspect=J/w,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=w,this.view.offsetX=Z,this.view.offsetY=Y,this.view.width=H,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,w=J*Math.tan(Ww*0.5*this.fov)/this.zoom,Z=2*w,Y=this.aspect*Z,H=-0.5*Y,X=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:W,fullHeight:U}=X;H+=X.offsetX*Y/W,w-=X.offsetY*Z/U,Y*=X.width/W,Z*=X.height/U}let Q=this.filmOffset;if(Q!==0)H+=J*Q/this.getFilmWidth();this.projectionMatrix.makePerspective(H,H+Y,w,w-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let w=super.toJSON(J);if(w.object.fov=this.fov,w.object.zoom=this.zoom,w.object.near=this.near,w.object.far=this.far,w.object.focus=this.focus,w.object.aspect=this.aspect,this.view!==null)w.object.view=Object.assign({},this.view);return w.object.filmGauge=this.filmGauge,w.object.filmOffset=this.filmOffset,w}}var P5=-90,S5=1;class fU extends w8{constructor(J,w,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let Y=new J8(P5,S5,J,w);Y.layers=this.layers,this.add(Y);let H=new J8(P5,S5,J,w);H.layers=this.layers,this.add(H);let X=new J8(P5,S5,J,w);X.layers=this.layers,this.add(X);let Q=new J8(P5,S5,J,w);Q.layers=this.layers,this.add(Q);let W=new J8(P5,S5,J,w);W.layers=this.layers,this.add(W);let U=new J8(P5,S5,J,w);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,w=this.children.concat(),[Z,Y,H,X,Q,W]=w;for(let U of w)this.remove(U);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),Y.up.set(0,1,0),Y.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),X.up.set(0,0,1),X.lookAt(0,-1,0),Q.up.set(0,1,0),Q.lookAt(0,0,1),W.up.set(0,1,0),W.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),Y.up.set(0,-1,0),Y.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),X.up.set(0,0,-1),X.lookAt(0,-1,0),Q.up.set(0,-1,0),Q.lookAt(0,0,1),W.up.set(0,-1,0),W.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of w)this.add(U),U.updateMatrixWorld()}update(J,w){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:Y}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[H,X,Q,W,U,G]=this.children,q=J.getRenderTarget(),$=J.getActiveCubeFace(),K=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let z=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,Y),J.render(w,H),J.setRenderTarget(Z,1,Y),J.render(w,X),J.setRenderTarget(Z,2,Y),J.render(w,Q),J.setRenderTarget(Z,3,Y),J.render(w,W),J.setRenderTarget(Z,4,Y),J.render(w,U),Z.texture.generateMipmaps=z,J.setRenderTarget(Z,5,Y),J.render(w,G),J.setRenderTarget(q,$,K),J.xr.enabled=R,Z.texture.needsPMREMUpdate=!0}}class rY extends G8{constructor(J=[],w=301,Z,Y,H,X,Q,W,U,G){super(J,w,Z,Y,H,X,Q,W,U,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class bU extends n6{constructor(J=1,w={}){super(J,J,w);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},Y=[Z,Z,Z,Z,Z,Z];this.texture=new rY(Y),this._setTextureOptions(w),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,w){this.texture.type=w.type,this.texture.colorSpace=w.colorSpace,this.texture.generateMipmaps=w.generateMipmaps,this.texture.minFilter=w.minFilter,this.texture.magFilter=w.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Y=new v7(5,5,5),H=new F6({name:"CubemapFromEquirect",uniforms:N1(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});H.uniforms.tEquirect.value=w;let X=new N8(Y,H),Q=w.minFilter;if(w.minFilter===1008)w.minFilter=1006;return new fU(1,10,this).update(J,X),w.minFilter=Q,X.geometry.dispose(),X.material.dispose(),this}clear(J,w=!0,Z=!0,Y=!0){let H=J.getRenderTarget();for(let X=0;X<6;X++)J.setRenderTarget(this,X),J.clear(w,Z,Y);J.setRenderTarget(H)}}class f5 extends w8{constructor(){super();this.isGroup=!0,this.type="Group"}}var QL={type:"move"};class Lw{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new f5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new f5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new f5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let w=this._hand;if(w)for(let Z of J.hand.values())this._getHandJoint(w,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,w,Z){let Y=null,H=null,X=null,Q=this._targetRay,W=this._grip,U=this._hand;if(J&&w.session.visibilityState!=="visible-blurred"){if(U&&J.hand){X=!0;for(let z of J.hand.values()){let B=w.getJointPose(z,Z),M=this._getHandJoint(U,z);if(B!==null)M.matrix.fromArray(B.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=B.radius;M.visible=B!==null}let G=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],$=G.position.distanceTo(q.position),K=0.02,R=0.005;if(U.inputState.pinching&&$>K+R)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&$<=K-R)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(W!==null&&J.gripSpace){if(H=w.getPose(J.gripSpace,Z),H!==null){if(W.matrix.fromArray(H.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,H.linearVelocity)W.hasLinearVelocity=!0,W.linearVelocity.copy(H.linearVelocity);else W.hasLinearVelocity=!1;if(H.angularVelocity)W.hasAngularVelocity=!0,W.angularVelocity.copy(H.angularVelocity);else W.hasAngularVelocity=!1}}if(Q!==null){if(Y=w.getPose(J.targetRaySpace,Z),Y===null&&H!==null)Y=H;if(Y!==null){if(Q.matrix.fromArray(Y.transform.matrix),Q.matrix.decompose(Q.position,Q.rotation,Q.scale),Q.matrixWorldNeedsUpdate=!0,Y.linearVelocity)Q.hasLinearVelocity=!0,Q.linearVelocity.copy(Y.linearVelocity);else Q.hasLinearVelocity=!1;if(Y.angularVelocity)Q.hasAngularVelocity=!0,Q.angularVelocity.copy(Y.angularVelocity);else Q.hasAngularVelocity=!1;this.dispatchEvent(QL)}}}if(Q!==null)Q.visible=Y!==null;if(W!==null)W.visible=H!==null;if(U!==null)U.visible=X!==null;return this}_getHandJoint(J,w){if(J.joints[w.jointName]===void 0){let Z=new f5;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[w.jointName]=Z,J.add(Z)}return J.joints[w.jointName]}}class tY extends w8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new X6,this.environmentIntensity=1,this.environmentRotation=new X6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,w){if(super.copy(J,w),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let w=super.toJSON(J);if(this.fog!==null)w.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)w.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)w.object.backgroundIntensity=this.backgroundIntensity;if(w.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)w.object.environmentIntensity=this.environmentIntensity;return w.object.environmentRotation=this.environmentRotation.toArray(),w}}var bW=new x,WL=new x,UL=new g0;class i6{constructor(J=new x(1,0,0),w=0){this.isPlane=!0,this.normal=J,this.constant=w}set(J,w){return this.normal.copy(J),this.constant=w,this}setComponents(J,w,Z,Y){return this.normal.set(J,w,Z),this.constant=Y,this}setFromNormalAndCoplanarPoint(J,w){return this.normal.copy(J),this.constant=-w.dot(this.normal),this}setFromCoplanarPoints(J,w,Z){let Y=bW.subVectors(Z,w).cross(WL.subVectors(J,w)).normalize();return this.setFromNormalAndCoplanarPoint(Y,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,w){return w.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,w){let Z=J.delta(bW),Y=this.normal.dot(Z);if(Y===0){if(this.distanceToPoint(J.start)===0)return w.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/Y;if(H<0||H>1)return null;return w.copy(J.start).addScaledVector(Z,H)}intersectsLine(J){let w=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return w<0&&Z>0||Z<0&&w>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,w){let Z=w||UL.getNormalMatrix(J),Y=this.coplanarPoint(bW).applyMatrix4(J),H=this.normal.applyMatrix3(Z).normalize();return this.constant=-Y.dot(H),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var k1=new zw,GL=new r0(0.5,0.5),CY=new x;class Bw{constructor(J=new i6,w=new i6,Z=new i6,Y=new i6,H=new i6,X=new i6){this.planes=[J,w,Z,Y,H,X]}set(J,w,Z,Y,H,X){let Q=this.planes;return Q[0].copy(J),Q[1].copy(w),Q[2].copy(Z),Q[3].copy(Y),Q[4].copy(H),Q[5].copy(X),this}copy(J){let w=this.planes;for(let Z=0;Z<6;Z++)w[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,w=2000,Z=!1){let Y=this.planes,H=J.elements,X=H[0],Q=H[1],W=H[2],U=H[3],G=H[4],q=H[5],$=H[6],K=H[7],R=H[8],z=H[9],B=H[10],M=H[11],k=H[12],O=H[13],D=H[14],L=H[15];if(Y[0].setComponents(U-X,K-G,M-R,L-k).normalize(),Y[1].setComponents(U+X,K+G,M+R,L+k).normalize(),Y[2].setComponents(U+Q,K+q,M+z,L+O).normalize(),Y[3].setComponents(U-Q,K-q,M-z,L-O).normalize(),Z)Y[4].setComponents(W,$,B,D).normalize(),Y[5].setComponents(U-W,K-$,M-B,L-D).normalize();else if(Y[4].setComponents(U-W,K-$,M-B,L-D).normalize(),w===2000)Y[5].setComponents(U+W,K+$,M+B,L+D).normalize();else if(w===2001)Y[5].setComponents(W,$,B,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+w);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();k1.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let w=J.geometry;if(w.boundingSphere===null)w.computeBoundingSphere();k1.copy(w.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(k1)}intersectsSprite(J){k1.center.set(0,0,0);let w=GL.distanceTo(J.center);return k1.radius=0.7071067811865476+w,k1.applyMatrix4(J.matrixWorld),this.intersectsSphere(k1)}intersectsSphere(J){let w=this.planes,Z=J.center,Y=-J.radius;for(let H=0;H<6;H++)if(w[H].distanceToPoint(Z)<Y)return!1;return!0}intersectsBox(J){let w=this.planes;for(let Z=0;Z<6;Z++){let Y=w[Z];if(CY.x=Y.normal.x>0?J.max.x:J.min.x,CY.y=Y.normal.y>0?J.max.y:J.min.y,CY.z=Y.normal.z>0?J.max.z:J.min.z,Y.distanceToPoint(CY)<0)return!1}return!0}containsPoint(J){let w=this.planes;for(let Z=0;Z<6;Z++)if(w[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eY extends G8{constructor(J,w,Z=1014,Y,H,X,Q=1003,W=1003,U,G=1026,q=1){if(G!==1026&&G!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let $={width:J,height:w,depth:q};super($,Y,H,X,Q,W,G,Z,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Fw(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let w=super.toJSON(J);if(this.compareFunction!==null)w.compareFunction=this.compareFunction;return w}}class JH extends G8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Vw extends a6{constructor(J=1,w=1,Z=1,Y=32,H=1,X=!1,Q=0,W=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:w,height:Z,radialSegments:Y,heightSegments:H,openEnded:X,thetaStart:Q,thetaLength:W};let U=this;Y=Math.floor(Y),H=Math.floor(H);let G=[],q=[],$=[],K=[],R=0,z=[],B=Z/2,M=0;if(k(),X===!1){if(J>0)O(!0);if(w>0)O(!1)}this.setIndex(G),this.setAttribute("position",new a8(q,3)),this.setAttribute("normal",new a8($,3)),this.setAttribute("uv",new a8(K,2));function k(){let D=new x,L=new x,T=0,E=(w-J)/Z;for(let A=0;A<=H;A++){let j=[],_=A/H,F=_*(w-J)+J;for(let C=0;C<=Y;C++){let y=C/Y,p=y*W+Q,l=Math.sin(p),o=Math.cos(p);L.x=F*l,L.y=-_*Z+B,L.z=F*o,q.push(L.x,L.y,L.z),D.set(l,E,o).normalize(),$.push(D.x,D.y,D.z),K.push(y,1-_),j.push(R++)}z.push(j)}for(let A=0;A<Y;A++)for(let j=0;j<H;j++){let _=z[j][A],F=z[j+1][A],C=z[j+1][A+1],y=z[j][A+1];if(J>0||j!==0)G.push(_,F,y),T+=3;if(w>0||j!==H-1)G.push(F,C,y),T+=3}U.addGroup(M,T,0),M+=T}function O(D){let L=R,T=new r0,E=new x,A=0,j=D===!0?J:w,_=D===!0?1:-1;for(let C=1;C<=Y;C++)q.push(0,B*_,0),$.push(0,_,0),K.push(0.5,0.5),R++;let F=R;for(let C=0;C<=Y;C++){let p=C/Y*W+Q,l=Math.cos(p),o=Math.sin(p);E.x=j*o,E.y=B*_,E.z=j*l,q.push(E.x,E.y,E.z),$.push(0,_,0),T.x=l*0.5+0.5,T.y=o*0.5*_+0.5,K.push(T.x,T.y),R++}for(let C=0;C<Y;C++){let y=L+C,p=F+C;if(D===!0)G.push(p,p+1,y);else G.push(p+1,p,y);A+=3}U.addGroup(M,A,D===!0?1:2),M+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Vw(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class _w extends a6{constructor(J=1,w=1,Z=1,Y=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:w,widthSegments:Z,heightSegments:Y};let H=J/2,X=w/2,Q=Math.floor(Z),W=Math.floor(Y),U=Q+1,G=W+1,q=J/Q,$=w/W,K=[],R=[],z=[],B=[];for(let M=0;M<G;M++){let k=M*$-X;for(let O=0;O<U;O++){let D=O*q-H;R.push(D,-k,0),z.push(0,0,1),B.push(O/Q),B.push(1-M/W)}}for(let M=0;M<W;M++)for(let k=0;k<Q;k++){let O=k+U*M,D=k+U*(M+1),L=k+1+U*(M+1),T=k+1+U*M;K.push(O,D,T),K.push(D,L,T)}this.setIndex(K),this.setAttribute("position",new a8(R,3)),this.setAttribute("normal",new a8(z,3)),this.setAttribute("uv",new a8(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _w(J.width,J.height,J.widthSegments,J.heightSegments)}}class Aw extends O1{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new m0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new m0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new r0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class wH extends Aw{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new r0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return i0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(w){this.ior=(1+0.4*w)/(1-0.4*w)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new m0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new m0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new m0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class xU extends O1{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class hU extends O1{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function TY(J,w){if(!J||J.constructor===w)return J;if(typeof w.BYTES_PER_ELEMENT==="number")return new w(J);return Array.prototype.slice.call(J)}function qL(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class u5{constructor(J,w,Z,Y){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Y!==void 0?Y:new w.constructor(Z),this.sampleValues=w,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let w=this.parameterPositions,Z=this._cachedIndex,Y=w[Z],H=w[Z-1];J:{w:{let X;Z:{Y:if(!(J<Y)){for(let Q=Z+2;;){if(Y===void 0){if(J<H)break Y;return Z=w.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Q)break;if(H=Y,Y=w[++Z],J<Y)break w}X=w.length;break Z}if(!(J>=H)){let Q=w[1];if(J<Q)Z=2,H=Q;for(let W=Z-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===W)break;if(Y=H,H=w[--Z-1],J>=H)break w}X=Z,Z=0;break Z}break J}while(Z<X){let Q=Z+X>>>1;if(J<w[Q])X=Q;else Z=Q+1}if(Y=w[Z],H=w[Z-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Y===void 0)return Z=w.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,H,Y)}return this.interpolate_(Z,H,J,Y)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let w=this.resultBuffer,Z=this.sampleValues,Y=this.valueSize,H=J*Y;for(let X=0;X!==Y;++X)w[X]=Z[H+X];return w}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vU extends u5{constructor(J,w,Z,Y){super(J,w,Z,Y);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,w,Z){let Y=this.parameterPositions,H=J-2,X=J+1,Q=Y[H],W=Y[X];if(Q===void 0)switch(this.getSettings_().endingStart){case 2401:H=J,Q=2*w-Z;break;case 2402:H=Y.length-2,Q=w+Y[H]-Y[H+1];break;default:H=J,Q=Z}if(W===void 0)switch(this.getSettings_().endingEnd){case 2401:X=J,W=2*Z-w;break;case 2402:X=1,W=Z+Y[1]-Y[0];break;default:X=J-1,W=w}let U=(Z-w)*0.5,G=this.valueSize;this._weightPrev=U/(w-Q),this._weightNext=U/(W-Z),this._offsetPrev=H*G,this._offsetNext=X*G}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=J*Q,U=W-Q,G=this._offsetPrev,q=this._offsetNext,$=this._weightPrev,K=this._weightNext,R=(Z-w)/(Y-w),z=R*R,B=z*R,M=-$*B+2*$*z-$*R,k=(1+$)*B+(-1.5-2*$)*z+(-0.5+$)*R+1,O=(-1-K)*B+(1.5+K)*z+0.5*R,D=K*B-K*z;for(let L=0;L!==Q;++L)H[L]=M*X[G+L]+k*X[U+L]+O*X[W+L]+D*X[q+L];return H}}class yU extends u5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=J*Q,U=W-Q,G=(Z-w)/(Y-w),q=1-G;for(let $=0;$!==Q;++$)H[$]=X[U+$]*q+X[W+$]*G;return H}}class gU extends u5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J){return this.copySampleValue_(J-1)}}class r8{constructor(J,w,Z,Y){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(w===void 0||w.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=TY(w,this.TimeBufferType),this.values=TY(Z,this.ValueBufferType),this.setInterpolation(Y||this.DefaultInterpolation)}static toJSON(J){let w=J.constructor,Z;if(w.toJSON!==this.toJSON)Z=w.toJSON(J);else{Z={name:J.name,times:TY(J.times,Array),values:TY(J.values,Array)};let Y=J.getInterpolation();if(Y!==J.DefaultInterpolation)Z.interpolation=Y}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new gU(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new yU(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new vU(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let w;switch(J){case 2300:w=this.InterpolantFactoryMethodDiscrete;break;case 2301:w=this.InterpolantFactoryMethodLinear;break;case 2302:w=this.InterpolantFactoryMethodSmooth;break}if(w===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=w,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let w=this.times;for(let Z=0,Y=w.length;Z!==Y;++Z)w[Z]+=J}return this}scale(J){if(J!==1){let w=this.times;for(let Z=0,Y=w.length;Z!==Y;++Z)w[Z]*=J}return this}trim(J,w){let Z=this.times,Y=Z.length,H=0,X=Y-1;while(H!==Y&&Z[H]<J)++H;while(X!==-1&&Z[X]>w)--X;if(++X,H!==0||X!==Y){if(H>=X)X=Math.max(X,1),H=X-1;let Q=this.getValueSize();this.times=Z.slice(H,X),this.values=this.values.slice(H*Q,X*Q)}return this}validate(){let J=!0,w=this.getValueSize();if(w-Math.floor(w)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,Y=this.values,H=Z.length;if(H===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let X=null;for(let Q=0;Q!==H;Q++){let W=Z[Q];if(typeof W==="number"&&isNaN(W)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Q,W),J=!1;break}if(X!==null&&X>W){console.error("THREE.KeyframeTrack: Out of order keys.",this,Q,W,X),J=!1;break}X=W}if(Y!==void 0){if(qL(Y))for(let Q=0,W=Y.length;Q!==W;++Q){let U=Y[Q];if(isNaN(U)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Q,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),w=this.values.slice(),Z=this.getValueSize(),Y=this.getInterpolation()===2302,H=J.length-1,X=1;for(let Q=1;Q<H;++Q){let W=!1,U=J[Q],G=J[Q+1];if(U!==G&&(Q!==1||U!==J[0]))if(!Y){let q=Q*Z,$=q-Z,K=q+Z;for(let R=0;R!==Z;++R){let z=w[q+R];if(z!==w[$+R]||z!==w[K+R]){W=!0;break}}}else W=!0;if(W){if(Q!==X){J[X]=J[Q];let q=Q*Z,$=X*Z;for(let K=0;K!==Z;++K)w[$+K]=w[q+K]}++X}}if(H>0){J[X]=J[H];for(let Q=H*Z,W=X*Z,U=0;U!==Z;++U)w[W+U]=w[Q+U];++X}if(X!==J.length)this.times=J.slice(0,X),this.values=w.slice(0,X*Z);else this.times=J,this.values=w;return this}clone(){let J=this.times.slice(),w=this.values.slice(),Y=new this.constructor(this.name,J,w);return Y.createInterpolant=this.createInterpolant,Y}}r8.prototype.ValueTypeName="";r8.prototype.TimeBufferType=Float32Array;r8.prototype.ValueBufferType=Float32Array;r8.prototype.DefaultInterpolation=2301;class F1 extends r8{constructor(J,w,Z){super(J,w,Z)}}F1.prototype.ValueTypeName="bool";F1.prototype.ValueBufferType=Array;F1.prototype.DefaultInterpolation=2300;F1.prototype.InterpolantFactoryMethodLinear=void 0;F1.prototype.InterpolantFactoryMethodSmooth=void 0;class lU extends r8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}lU.prototype.ValueTypeName="color";class pU extends r8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}pU.prototype.ValueTypeName="number";class dU extends u5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=(Z-w)/(Y-w),U=J*Q;for(let G=U+Q;U!==G;U+=4)h7.slerpFlat(H,0,X,U-Q,X,U,W);return H}}class ZH extends r8{constructor(J,w,Z,Y){super(J,w,Z,Y)}InterpolantFactoryMethodLinear(J){return new dU(this.times,this.values,this.getValueSize(),J)}}ZH.prototype.ValueTypeName="quaternion";ZH.prototype.InterpolantFactoryMethodSmooth=void 0;class z1 extends r8{constructor(J,w,Z){super(J,w,Z)}}z1.prototype.ValueTypeName="string";z1.prototype.ValueBufferType=Array;z1.prototype.DefaultInterpolation=2300;z1.prototype.InterpolantFactoryMethodLinear=void 0;z1.prototype.InterpolantFactoryMethodSmooth=void 0;class mU extends r8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}mU.prototype.ValueTypeName="vector";class uU{constructor(J,w,Z){let Y=this,H=!1,X=0,Q=0,W=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=w,this.onError=Z,this.abortController=new AbortController,this.itemStart=function(G){if(Q++,H===!1){if(Y.onStart!==void 0)Y.onStart(G,X,Q)}H=!0},this.itemEnd=function(G){if(X++,Y.onProgress!==void 0)Y.onProgress(G,X,Q);if(X===Q){if(H=!1,Y.onLoad!==void 0)Y.onLoad()}},this.itemError=function(G){if(Y.onError!==void 0)Y.onError(G)},this.resolveURL=function(G){if(W)return W(G);return G},this.setURLModifier=function(G){return W=G,this},this.addHandler=function(G,q){return U.push(G,q),this},this.removeHandler=function(G){let q=U.indexOf(G);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(G){for(let q=0,$=U.length;q<$;q+=2){let K=U[q],R=U[q+1];if(K.global)K.lastIndex=0;if(K.test(G))return R}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var mD=new uU;class cU{constructor(J){this.manager=J!==void 0?J:mD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,w){let Z=this;return new Promise(function(Y,H){Z.load(J,Y,w,H)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}cU.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ew extends w8{constructor(J,w=1){super();this.isLight=!0,this.type="Light",this.color=new m0(J),this.intensity=w}dispose(){}copy(J,w){return super.copy(J,w),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let w=super.toJSON(J);if(w.object.color=this.color.getHex(),w.object.intensity=this.intensity,this.groundColor!==void 0)w.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)w.object.distance=this.distance;if(this.angle!==void 0)w.object.angle=this.angle;if(this.decay!==void 0)w.object.decay=this.decay;if(this.penumbra!==void 0)w.object.penumbra=this.penumbra;if(this.shadow!==void 0)w.object.shadow=this.shadow.toJSON();if(this.target!==void 0)w.object.target=this.target.uuid;return w}}var xW=new I9,fR=new x,bR=new x;class iU{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new I9,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bw,this._frameExtents=new r0(1,1),this._viewportCount=1,this._viewports=[new Q9(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let w=this.camera,Z=this.matrix;if(fR.setFromMatrixPosition(J.matrixWorld),w.position.copy(fR),bR.setFromMatrixPosition(J.target.matrixWorld),w.lookAt(bR),w.updateMatrixWorld(),xW.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xW,w.coordinateSystem,w.reversedDepth),w.reversedDepth)Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Z.multiply(xW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class uD extends iU{constructor(){super(new J8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let w=this.camera,Z=K1*2*J.angle*this.focus,Y=this.mapSize.width/this.mapSize.height*this.aspect,H=J.distance||w.far;if(Z!==w.fov||Y!==w.aspect||H!==w.far)w.fov=Z,w.aspect=Y,w.far=H,w.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class YH extends Ew{constructor(J,w,Z=0,Y=Math.PI/3,H=0,X=2){super(J,w);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(w8.DEFAULT_UP),this.updateMatrix(),this.target=new w8,this.distance=Z,this.angle=Y,this.penumbra=H,this.decay=X,this.map=null,this.shadow=new uD}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,w){return super.copy(J,w),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var xR=new I9,Qw=new x,hW=new x;class cD extends iU{constructor(){super(new J8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new r0(4,2),this._viewportCount=6,this._viewports=[new Q9(2,1,1,1),new Q9(0,1,1,1),new Q9(3,1,1,1),new Q9(1,1,1,1),new Q9(3,0,1,1),new Q9(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(J,w=0){let Z=this.camera,Y=this.matrix,H=J.distance||Z.far;if(H!==Z.far)Z.far=H,Z.updateProjectionMatrix();Qw.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Qw),hW.copy(Z.position),hW.add(this._cubeDirections[w]),Z.up.copy(this._cubeUps[w]),Z.lookAt(hW),Z.updateMatrixWorld(),Y.makeTranslation(-Qw.x,-Qw.y,-Qw.z),xR.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xR,Z.coordinateSystem,Z.reversedDepth)}}class Iw extends Ew{constructor(J,w,Z=0,Y=2){super(J,w);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=Y,this.shadow=new cD}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,w){return super.copy(J,w),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class sU extends aY{constructor(J=-1,w=1,Z=1,Y=-1,H=0.1,X=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=w,this.top=Z,this.bottom=Y,this.near=H,this.far=X,this.updateProjectionMatrix()}copy(J,w){return super.copy(J,w),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,w,Z,Y,H,X){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=w,this.view.offsetX=Z,this.view.offsetY=Y,this.view.width=H,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),w=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,Y=(this.top+this.bottom)/2,H=Z-J,X=Z+J,Q=Y+w,W=Y-w;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=U*this.view.offsetX,X=H+U*this.view.width,Q-=G*this.view.offsetY,W=Q-G*this.view.height}this.projectionMatrix.makeOrthographic(H,X,Q,W,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let w=super.toJSON(J);if(w.object.zoom=this.zoom,w.object.left=this.left,w.object.right=this.right,w.object.top=this.top,w.object.bottom=this.bottom,w.object.near=this.near,w.object.far=this.far,this.view!==null)w.object.view=Object.assign({},this.view);return w}}class HH extends Ew{constructor(J,w){super(J,w);this.isAmbientLight=!0,this.type="AmbientLight"}}class oU extends J8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class XH{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let w=performance.now();J=(w-this.oldTime)/1000,this.oldTime=w,this.elapsedTime+=J}return J}}var nU="\\[\\]\\.:\\/",kL=new RegExp("["+nU+"]","g"),aU="[^"+nU+"]",KL="[^"+nU.replace("\\.","")+"]",$L=/((?:WC+[\/:])*)/.source.replace("WC",aU),RL=/(WCOD+)?/.source.replace("WCOD",KL),DL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aU),ML=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aU),OL=new RegExp("^"+$L+RL+DL+ML+"$"),NL=["material","materials","bones","map"];class iD{constructor(J,w,Z){let Y=Z||X9.parseTrackName(w);this._targetGroup=J,this._bindings=J.subscribe_(w,Y)}getValue(J,w){this.bind();let Z=this._targetGroup.nCachedObjects_,Y=this._bindings[Z];if(Y!==void 0)Y.getValue(J,w)}setValue(J,w){let Z=this._bindings;for(let Y=this._targetGroup.nCachedObjects_,H=Z.length;Y!==H;++Y)Z[Y].setValue(J,w)}bind(){let J=this._bindings;for(let w=this._targetGroup.nCachedObjects_,Z=J.length;w!==Z;++w)J[w].bind()}unbind(){let J=this._bindings;for(let w=this._targetGroup.nCachedObjects_,Z=J.length;w!==Z;++w)J[w].unbind()}}class X9{constructor(J,w,Z){this.path=w,this.parsedPath=Z||X9.parseTrackName(w),this.node=X9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,w,Z){if(!(J&&J.isAnimationObjectGroup))return new X9(J,w,Z);else return new X9.Composite(J,w,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(kL,"")}static parseTrackName(J){let w=OL.exec(J);if(w===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:w[2],objectName:w[3],objectIndex:w[4],propertyName:w[5],propertyIndex:w[6]},Y=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(Y!==void 0&&Y!==-1){let H=Z.nodeName.substring(Y+1);if(NL.indexOf(H)!==-1)Z.nodeName=Z.nodeName.substring(0,Y),Z.objectName=H}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,w){if(w===void 0||w===""||w==="."||w===-1||w===J.name||w===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(w);if(Z!==void 0)return Z}if(J.children){let Z=function(H){for(let X=0;X<H.length;X++){let Q=H[X];if(Q.name===w||Q.uuid===w)return Q;let W=Z(Q.children);if(W)return W}return null},Y=Z(J.children);if(Y)return Y}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,w){J[w]=this.targetObject[this.propertyName]}_getValue_array(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)J[w++]=Z[Y]}_getValue_arrayElement(J,w){J[w]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,w){this.resolvedProperty.toArray(J,w)}_setValue_direct(J,w){this.targetObject[this.propertyName]=J[w]}_setValue_direct_setNeedsUpdate(J,w){this.targetObject[this.propertyName]=J[w],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,w){this.targetObject[this.propertyName]=J[w],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++]}_setValue_array_setNeedsUpdate(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,w){this.resolvedProperty[this.propertyIndex]=J[w]}_setValue_arrayElement_setNeedsUpdate(J,w){this.resolvedProperty[this.propertyIndex]=J[w],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,w){this.resolvedProperty[this.propertyIndex]=J[w],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,w){this.resolvedProperty.fromArray(J,w)}_setValue_fromArray_setNeedsUpdate(J,w){this.resolvedProperty.fromArray(J,w),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,w){this.resolvedProperty.fromArray(J,w),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,w){this.bind(),this.getValue(J,w)}_setValue_unbound(J,w){this.bind(),this.setValue(J,w)}bind(){let J=this.node,w=this.parsedPath,Z=w.objectName,Y=w.propertyName,H=w.propertyIndex;if(!J)J=X9.findNode(this.rootNode,w.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let U=w.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===U){U=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(U!==void 0){if(J[U]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let X=J[Y];if(X===void 0){let U=w.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+U+"."+Y+" but it wasn't found.",J);return}let Q=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Q=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Q=this.Versioning.MatrixWorldNeedsUpdate;let W=this.BindingType.Direct;if(H!==void 0){if(Y==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[H]!==void 0)H=J.morphTargetDictionary[H]}W=this.BindingType.ArrayElement,this.resolvedProperty=X,this.propertyIndex=H}else if(X.fromArray!==void 0&&X.toArray!==void 0)W=this.BindingType.HasFromToArray,this.resolvedProperty=X;else if(Array.isArray(X))W=this.BindingType.EntireArray,this.resolvedProperty=X;else this.propertyName=Y;this.getValue=this.GetterByBindingType[W],this.setValue=this.SetterByBindingTypeAndVersioning[W][Q]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}X9.Composite=iD;X9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};X9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};X9.prototype.GetterByBindingType=[X9.prototype._getValue_direct,X9.prototype._getValue_array,X9.prototype._getValue_arrayElement,X9.prototype._getValue_toArray];X9.prototype.SetterByBindingTypeAndVersioning=[[X9.prototype._setValue_direct,X9.prototype._setValue_direct_setNeedsUpdate,X9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_array,X9.prototype._setValue_array_setNeedsUpdate,X9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_arrayElement,X9.prototype._setValue_arrayElement_setNeedsUpdate,X9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_fromArray,X9.prototype._setValue_fromArray_setNeedsUpdate,X9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);function rU(J,w,Z,Y){let H=FL(Y);switch(Z){case 1021:return J*w;case 1028:return J*w/H.components*H.byteLength;case 1029:return J*w/H.components*H.byteLength;case 1030:return J*w*2/H.components*H.byteLength;case 1031:return J*w*2/H.components*H.byteLength;case 1022:return J*w*3/H.components*H.byteLength;case 1023:return J*w*4/H.components*H.byteLength;case 1033:return J*w*4/H.components*H.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(w,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(w,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((w+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((w+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((w+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((w+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((w+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((w+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((w+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((w+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((w+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((w+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((w+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((w+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((w+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(w/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(w/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(w/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function FL(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function MM(){let J=null,w=!1,Z=null,Y=null;function H(X,Q){Z(X,Q),Y=J.requestAnimationFrame(H)}return{start:function(){if(w===!0)return;if(Z===null)return;Y=J.requestAnimationFrame(H),w=!0},stop:function(){J.cancelAnimationFrame(Y),w=!1},setAnimationLoop:function(X){Z=X},setContext:function(X){J=X}}}function zL(J){let w=new WeakMap;function Z(W,U){let{array:G,usage:q}=W,$=G.byteLength,K=J.createBuffer();J.bindBuffer(U,K),J.bufferData(U,G,q),W.onUploadCallback();let R;if(G instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array!=="undefined"&&G instanceof Float16Array)R=J.HALF_FLOAT;else if(G instanceof Uint16Array)if(W.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)R=J.SHORT;else if(G instanceof Uint32Array)R=J.UNSIGNED_INT;else if(G instanceof Int32Array)R=J.INT;else if(G instanceof Int8Array)R=J.BYTE;else if(G instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:K,type:R,bytesPerElement:G.BYTES_PER_ELEMENT,version:W.version,size:$}}function Y(W,U,G){let{array:q,updateRanges:$}=U;if(J.bindBuffer(G,W),$.length===0)J.bufferSubData(G,0,q);else{$.sort((R,z)=>R.start-z.start);let K=0;for(let R=1;R<$.length;R++){let z=$[K],B=$[R];if(B.start<=z.start+z.count+1)z.count=Math.max(z.count,B.start+B.count-z.start);else++K,$[K]=B}$.length=K+1;for(let R=0,z=$.length;R<z;R++){let B=$[R];J.bufferSubData(G,B.start*q.BYTES_PER_ELEMENT,q,B.start,B.count)}U.clearUpdateRanges()}U.onUploadCallback()}function H(W){if(W.isInterleavedBufferAttribute)W=W.data;return w.get(W)}function X(W){if(W.isInterleavedBufferAttribute)W=W.data;let U=w.get(W);if(U)J.deleteBuffer(U.buffer),w.delete(W)}function Q(W,U){if(W.isInterleavedBufferAttribute)W=W.data;if(W.isGLBufferAttribute){let q=w.get(W);if(!q||q.version<W.version)w.set(W,{buffer:W.buffer,type:W.type,bytesPerElement:W.elementSize,version:W.version});return}let G=w.get(W);if(G===void 0)w.set(W,Z(W,U));else if(G.version<W.version){if(G.size!==W.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Y(G.buffer,W,U),G.version=W.version}}return{get:H,remove:X,update:Q}}var LL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_L=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bL=`#ifdef USE_IRIDESCENCE
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
#endif`,xL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uL=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,iL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rL="gl_FragColor = linearToOutputTexel( gl_FragColor );",tL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eL=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,JB=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wB=`#ifdef USE_ENVMAP
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
#endif`,ZB=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YB=`#ifdef USE_ENVMAP
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
#endif`,HB=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QB=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WB=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UB=`#ifdef USE_GRADIENTMAP
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
}`,GB=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qB=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kB=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KB=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,$B=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RB=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DB=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MB=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OB=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NB=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FB=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,zB=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LB=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BB=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VB=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_B=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IB=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PB=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hB=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gB=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mB=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nB=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G4=`#ifdef USE_SKINNING
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
#endif`,q4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D4=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L4=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,B4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,I4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,T4=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,x4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,v4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,g4=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,m4=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,s4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,n4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,r4=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,e4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l0={alphahash_fragment:LL,alphahash_pars_fragment:BL,alphamap_fragment:VL,alphamap_pars_fragment:_L,alphatest_fragment:AL,alphatest_pars_fragment:EL,aomap_fragment:IL,aomap_pars_fragment:CL,batching_pars_vertex:TL,batching_vertex:PL,begin_vertex:SL,beginnormal_vertex:jL,bsdfs:fL,iridescence_fragment:bL,bumpmap_pars_fragment:xL,clipping_planes_fragment:hL,clipping_planes_pars_fragment:vL,clipping_planes_pars_vertex:yL,clipping_planes_vertex:gL,color_fragment:lL,color_pars_fragment:pL,color_pars_vertex:dL,color_vertex:mL,common:uL,cube_uv_reflection_fragment:cL,defaultnormal_vertex:iL,displacementmap_pars_vertex:sL,displacementmap_vertex:oL,emissivemap_fragment:nL,emissivemap_pars_fragment:aL,colorspace_fragment:rL,colorspace_pars_fragment:tL,envmap_fragment:eL,envmap_common_pars_fragment:JB,envmap_pars_fragment:wB,envmap_pars_vertex:ZB,envmap_physical_pars_fragment:$B,envmap_vertex:YB,fog_vertex:HB,fog_pars_vertex:XB,fog_fragment:QB,fog_pars_fragment:WB,gradientmap_pars_fragment:UB,lightmap_pars_fragment:GB,lights_lambert_fragment:qB,lights_lambert_pars_fragment:kB,lights_pars_begin:KB,lights_toon_fragment:RB,lights_toon_pars_fragment:DB,lights_phong_fragment:MB,lights_phong_pars_fragment:OB,lights_physical_fragment:NB,lights_physical_pars_fragment:FB,lights_fragment_begin:zB,lights_fragment_maps:LB,lights_fragment_end:BB,logdepthbuf_fragment:VB,logdepthbuf_pars_fragment:_B,logdepthbuf_pars_vertex:AB,logdepthbuf_vertex:EB,map_fragment:IB,map_pars_fragment:CB,map_particle_fragment:TB,map_particle_pars_fragment:PB,metalnessmap_fragment:SB,metalnessmap_pars_fragment:jB,morphinstance_vertex:fB,morphcolor_vertex:bB,morphnormal_vertex:xB,morphtarget_pars_vertex:hB,morphtarget_vertex:vB,normal_fragment_begin:yB,normal_fragment_maps:gB,normal_pars_fragment:lB,normal_pars_vertex:pB,normal_vertex:dB,normalmap_pars_fragment:mB,clearcoat_normal_fragment_begin:uB,clearcoat_normal_fragment_maps:cB,clearcoat_pars_fragment:iB,iridescence_pars_fragment:sB,opaque_fragment:oB,packing:nB,premultiplied_alpha_fragment:aB,project_vertex:rB,dithering_fragment:tB,dithering_pars_fragment:eB,roughnessmap_fragment:J4,roughnessmap_pars_fragment:w4,shadowmap_pars_fragment:Z4,shadowmap_pars_vertex:Y4,shadowmap_vertex:H4,shadowmask_pars_fragment:X4,skinbase_vertex:Q4,skinning_pars_vertex:W4,skinning_vertex:U4,skinnormal_vertex:G4,specularmap_fragment:q4,specularmap_pars_fragment:k4,tonemapping_fragment:K4,tonemapping_pars_fragment:$4,transmission_fragment:R4,transmission_pars_fragment:D4,uv_pars_fragment:M4,uv_pars_vertex:O4,uv_vertex:N4,worldpos_vertex:F4,background_vert:z4,background_frag:L4,backgroundCube_vert:B4,backgroundCube_frag:V4,cube_vert:_4,cube_frag:A4,depth_vert:E4,depth_frag:I4,distanceRGBA_vert:C4,distanceRGBA_frag:T4,equirect_vert:P4,equirect_frag:S4,linedashed_vert:j4,linedashed_frag:f4,meshbasic_vert:b4,meshbasic_frag:x4,meshlambert_vert:h4,meshlambert_frag:v4,meshmatcap_vert:y4,meshmatcap_frag:g4,meshnormal_vert:l4,meshnormal_frag:p4,meshphong_vert:d4,meshphong_frag:m4,meshphysical_vert:u4,meshphysical_frag:c4,meshtoon_vert:i4,meshtoon_frag:s4,points_vert:o4,points_frag:n4,shadow_vert:a4,shadow_frag:r4,sprite_vert:t4,sprite_frag:e4},Q0={common:{diffuse:{value:new m0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new g0}},envmap:{envMap:{value:null},envMapRotation:{value:new g0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new g0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new g0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new g0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new g0},normalScale:{value:new r0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new g0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new g0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new g0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new g0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new m0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new m0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0},uvTransform:{value:new g0}},sprite:{diffuse:{value:new m0(16777215)},opacity:{value:1},center:{value:new r0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}}},z6={basic:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new m0(0)}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new m0(0)},specular:{value:new m0(1118481)},shininess:{value:30}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:H8([Q0.common,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.roughnessmap,Q0.metalnessmap,Q0.fog,Q0.lights,{emissive:{value:new m0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:H8([Q0.common,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.gradientmap,Q0.fog,Q0.lights,{emissive:{value:new m0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:H8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:H8([Q0.points,Q0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:H8([Q0.common,Q0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:H8([Q0.common,Q0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:H8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:H8([Q0.sprite,Q0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new g0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new g0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distanceRGBA:{uniforms:H8([Q0.common,Q0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distanceRGBA_vert,fragmentShader:l0.distanceRGBA_frag},shadow:{uniforms:H8([Q0.lights,Q0.fog,{color:{value:new m0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};z6.physical={uniforms:H8([z6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new g0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new g0},clearcoatNormalScale:{value:new r0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new g0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new g0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new g0},sheen:{value:0},sheenColor:{value:new m0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new g0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new g0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new g0},transmissionSamplerSize:{value:new r0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new g0},attenuationDistance:{value:0},attenuationColor:{value:new m0(0)},specularColor:{value:new m0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new g0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new g0},anisotropyVector:{value:new r0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new g0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var QH={r:0,b:0,g:0},L1=new X6,J2=new I9;function w2(J,w,Z,Y,H,X,Q){let W=new m0(0),U=X===!0?0:1,G,q,$=null,K=0,R=null;function z(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture)L=(D.backgroundBlurriness>0?Z:w).get(L);return L}function B(D){let L=!1,T=z(D);if(T===null)k(W,U);else if(T&&T.isColor)k(T,1),L=!0;let E=J.xr.getEnvironmentBlendMode();if(E==="additive")Y.buffers.color.setClear(0,0,0,1,Q);else if(E==="alpha-blend")Y.buffers.color.setClear(0,0,0,0,Q);if(J.autoClear||L)Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function M(D,L){let T=z(L);if(T&&(T.isCubeTexture||T.mapping===Kw)){if(q===void 0)q=new N8(new v7(1,1,1),new F6({name:"BackgroundCubeMaterial",uniforms:N1(z6.backgroundCube.uniforms),vertexShader:z6.backgroundCube.vertexShader,fragmentShader:z6.backgroundCube.fragmentShader,side:f8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(E,A,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),H.update(q);if(L1.copy(L.backgroundRotation),L1.x*=-1,L1.y*=-1,L1.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)L1.y*=-1,L1.z*=-1;if(q.material.uniforms.envMap.value=T,q.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,q.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(L1)),q.material.toneMapped=t0.getTransfer(T.colorSpace)!==M9,$!==T||K!==T.version||R!==J.toneMapping)q.material.needsUpdate=!0,$=T,K=T.version,R=J.toneMapping;q.layers.enableAll(),D.unshift(q,q.geometry,q.material,0,0,null)}else if(T&&T.isTexture){if(G===void 0)G=new N8(new _w(2,2),new F6({name:"BackgroundMaterial",uniforms:N1(z6.background.uniforms),vertexShader:z6.background.vertexShader,fragmentShader:z6.background.fragmentShader,side:h5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),H.update(G);if(G.material.uniforms.t2D.value=T,G.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,G.material.toneMapped=t0.getTransfer(T.colorSpace)!==M9,T.matrixAutoUpdate===!0)T.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(T.matrix),$!==T||K!==T.version||R!==J.toneMapping)G.material.needsUpdate=!0,$=T,K=T.version,R=J.toneMapping;G.layers.enableAll(),D.unshift(G,G.geometry,G.material,0,0,null)}}function k(D,L){D.getRGB(QH,jU(J)),Y.buffers.color.setClear(QH.r,QH.g,QH.b,L,Q)}function O(){if(q!==void 0)q.geometry.dispose(),q.material.dispose(),q=void 0;if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0}return{getClearColor:function(){return W},setClearColor:function(D,L=1){W.set(D),U=L,k(W,U)},getClearAlpha:function(){return U},setClearAlpha:function(D){U=D,k(W,U)},render:B,addToRenderList:M,dispose:O}}function Z2(J,w){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),Y={},H=K(null),X=H,Q=!1;function W(F,C,y,p,l){let o=!1,m=$(p,y,C);if(X!==m)X=m,G(X.object);if(o=R(F,p,y,l),o)z(F,p,y,l);if(l!==null)w.update(l,J.ELEMENT_ARRAY_BUFFER);if(o||Q){if(Q=!1,L(F,C,y,p),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,w.get(l).buffer)}}function U(){return J.createVertexArray()}function G(F){return J.bindVertexArray(F)}function q(F){return J.deleteVertexArray(F)}function $(F,C,y){let p=y.wireframe===!0,l=Y[F.id];if(l===void 0)l={},Y[F.id]=l;let o=l[C.id];if(o===void 0)o={},l[C.id]=o;let m=o[p];if(m===void 0)m=K(U()),o[p]=m;return m}function K(F){let C=[],y=[],p=[];for(let l=0;l<Z;l++)C[l]=0,y[l]=0,p[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:y,attributeDivisors:p,object:F,attributes:{},index:null}}function R(F,C,y,p){let l=X.attributes,o=C.attributes,m=0,a=y.getAttributes();for(let d in a)if(a[d].location>=0){let q0=l[d],I0=o[d];if(I0===void 0){if(d==="instanceMatrix"&&F.instanceMatrix)I0=F.instanceMatrix;if(d==="instanceColor"&&F.instanceColor)I0=F.instanceColor}if(q0===void 0)return!0;if(q0.attribute!==I0)return!0;if(I0&&q0.data!==I0.data)return!0;m++}if(X.attributesNum!==m)return!0;if(X.index!==p)return!0;return!1}function z(F,C,y,p){let l={},o=C.attributes,m=0,a=y.getAttributes();for(let d in a)if(a[d].location>=0){let q0=o[d];if(q0===void 0){if(d==="instanceMatrix"&&F.instanceMatrix)q0=F.instanceMatrix;if(d==="instanceColor"&&F.instanceColor)q0=F.instanceColor}let I0={};if(I0.attribute=q0,q0&&q0.data)I0.data=q0.data;l[d]=I0,m++}X.attributes=l,X.attributesNum=m,X.index=p}function B(){let F=X.newAttributes;for(let C=0,y=F.length;C<y;C++)F[C]=0}function M(F){k(F,0)}function k(F,C){let{newAttributes:y,enabledAttributes:p,attributeDivisors:l}=X;if(y[F]=1,p[F]===0)J.enableVertexAttribArray(F),p[F]=1;if(l[F]!==C)J.vertexAttribDivisor(F,C),l[F]=C}function O(){let{newAttributes:F,enabledAttributes:C}=X;for(let y=0,p=C.length;y<p;y++)if(C[y]!==F[y])J.disableVertexAttribArray(y),C[y]=0}function D(F,C,y,p,l,o,m){if(m===!0)J.vertexAttribIPointer(F,C,y,l,o);else J.vertexAttribPointer(F,C,y,p,l,o)}function L(F,C,y,p){B();let l=p.attributes,o=y.getAttributes(),m=C.defaultAttributeValues;for(let a in o){let d=o[a];if(d.location>=0){let Z0=l[a];if(Z0===void 0){if(a==="instanceMatrix"&&F.instanceMatrix)Z0=F.instanceMatrix;if(a==="instanceColor"&&F.instanceColor)Z0=F.instanceColor}if(Z0!==void 0){let{normalized:q0,itemSize:I0}=Z0,K0=w.get(Z0);if(K0===void 0)continue;let{buffer:e0,type:p0,bytesPerElement:i}=K0,X0=p0===J.INT||p0===J.UNSIGNED_INT||Z0.gpuType===dW;if(Z0.isInterleavedBufferAttribute){let Y0=Z0.data,z0=Y0.stride,b0=Z0.offset;if(Y0.isInstancedInterleavedBuffer){for(let x0=0;x0<d.locationSize;x0++)k(d.location+x0,Y0.meshPerAttribute);if(F.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=Y0.meshPerAttribute*Y0.count}else for(let x0=0;x0<d.locationSize;x0++)M(d.location+x0);J.bindBuffer(J.ARRAY_BUFFER,e0);for(let x0=0;x0<d.locationSize;x0++)D(d.location+x0,I0/d.locationSize,p0,q0,z0*i,(b0+I0/d.locationSize*x0)*i,X0)}else{if(Z0.isInstancedBufferAttribute){for(let Y0=0;Y0<d.locationSize;Y0++)k(d.location+Y0,Z0.meshPerAttribute);if(F.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let Y0=0;Y0<d.locationSize;Y0++)M(d.location+Y0);J.bindBuffer(J.ARRAY_BUFFER,e0);for(let Y0=0;Y0<d.locationSize;Y0++)D(d.location+Y0,I0/d.locationSize,p0,q0,I0*i,I0/d.locationSize*Y0*i,X0)}}else if(m!==void 0){let q0=m[a];if(q0!==void 0)switch(q0.length){case 2:J.vertexAttrib2fv(d.location,q0);break;case 3:J.vertexAttrib3fv(d.location,q0);break;case 4:J.vertexAttrib4fv(d.location,q0);break;default:J.vertexAttrib1fv(d.location,q0)}}}}O()}function T(){j();for(let F in Y){let C=Y[F];for(let y in C){let p=C[y];for(let l in p)q(p[l].object),delete p[l];delete C[y]}delete Y[F]}}function E(F){if(Y[F.id]===void 0)return;let C=Y[F.id];for(let y in C){let p=C[y];for(let l in p)q(p[l].object),delete p[l];delete C[y]}delete Y[F.id]}function A(F){for(let C in Y){let y=Y[C];if(y[F.id]===void 0)continue;let p=y[F.id];for(let l in p)q(p[l].object),delete p[l];delete y[F.id]}}function j(){if(_(),Q=!0,X===H)return;X=H,G(X.object)}function _(){H.geometry=null,H.program=null,H.wireframe=!1}return{setup:W,reset:j,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:B,enableAttribute:M,disableUnusedAttributes:O}}function Y2(J,w,Z){let Y;function H(G){Y=G}function X(G,q){J.drawArrays(Y,G,q),Z.update(q,Y,1)}function Q(G,q,$){if($===0)return;J.drawArraysInstanced(Y,G,q,$),Z.update(q,Y,$)}function W(G,q,$){if($===0)return;w.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Y,G,0,q,0,$);let R=0;for(let z=0;z<$;z++)R+=q[z];Z.update(R,Y,1)}function U(G,q,$,K){if($===0)return;let R=w.get("WEBGL_multi_draw");if(R===null)for(let z=0;z<G.length;z++)Q(G[z],q[z],K[z]);else{R.multiDrawArraysInstancedWEBGL(Y,G,0,q,0,K,0,$);let z=0;for(let B=0;B<$;B++)z+=q[B]*K[B];Z.update(z,Y,1)}}this.setMode=H,this.render=X,this.renderInstances=Q,this.renderMultiDraw=W,this.renderMultiDrawInstances=U}function H2(J,w,Z,Y){let H;function X(){if(H!==void 0)return H;if(w.has("EXT_texture_filter_anisotropic")===!0){let A=w.get("EXT_texture_filter_anisotropic");H=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else H=0;return H}function Q(A){if(A!==N6&&Y.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function W(A){let j=A===Dw&&(w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float"));if(A!==f7&&Y.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==b7&&!j)return!1;return!0}function U(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=Z.precision!==void 0?Z.precision:"highp",q=U(G);if(q!==G)console.warn("THREE.WebGLRenderer:",G,"not supported, using",q,"instead."),G=q;let $=Z.logarithmicDepthBuffer===!0,K=Z.reversedDepthBuffer===!0&&w.has("EXT_clip_control"),R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),M=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),k=J.getParameter(J.MAX_VERTEX_ATTRIBS),O=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),D=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=z>0,E=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:X,getMaxPrecision:U,textureFormatReadable:Q,textureTypeReadable:W,precision:G,logarithmicDepthBuffer:$,reversedDepthBuffer:K,maxTextures:R,maxVertexTextures:z,maxTextureSize:B,maxCubemapSize:M,maxAttributes:k,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:L,vertexTextures:T,maxSamples:E}}function X2(J){let w=this,Z=null,Y=0,H=!1,X=!1,Q=new i6,W=new g0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function($,K){let R=$.length!==0||K||Y!==0||H;return H=K,Y=$.length,R},this.beginShadows=function(){X=!0,q(null)},this.endShadows=function(){X=!1},this.setGlobalState=function($,K){Z=q($,K,0)},this.setState=function($,K,R){let{clippingPlanes:z,clipIntersection:B,clipShadows:M}=$,k=J.get($);if(!H||z===null||z.length===0||X&&!M)if(X)q(null);else G();else{let O=X?0:Y,D=O*4,L=k.clippingState||null;U.value=L,L=q(z,K,D,R);for(let T=0;T!==D;++T)L[T]=Z[T];k.clippingState=L,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=O}};function G(){if(U.value!==Z)U.value=Z,U.needsUpdate=Y>0;w.numPlanes=Y,w.numIntersection=0}function q($,K,R,z){let B=$!==null?$.length:0,M=null;if(B!==0){if(M=U.value,z!==!0||M===null){let k=R+B*4,O=K.matrixWorldInverse;if(W.getNormalMatrix(O),M===null||M.length<k)M=new Float32Array(k);for(let D=0,L=R;D!==B;++D,L+=4)Q.copy($[D]).applyMatrix4(O,W),Q.normal.toArray(M,L),M[L+3]=Q.constant}U.value=M,U.needsUpdate=!0}return w.numPlanes=B,w.numIntersection=0,M}}function Q2(J){let w=new WeakMap;function Z(Q,W){if(W===vY)Q.mapping=y5;else if(W===yY)Q.mapping=$1;return Q}function Y(Q){if(Q&&Q.isTexture){let W=Q.mapping;if(W===vY||W===yY)if(w.has(Q)){let U=w.get(Q).texture;return Z(U,Q.mapping)}else{let U=Q.image;if(U&&U.height>0){let G=new bU(U.height);return G.fromEquirectangularTexture(J,Q),w.set(Q,G),Q.addEventListener("dispose",H),Z(G.texture,Q.mapping)}else return null}}return Q}function H(Q){let W=Q.target;W.removeEventListener("dispose",H);let U=w.get(W);if(U!==void 0)w.delete(W),U.dispose()}function X(){w=new WeakMap}return{get:Y,dispose:X}}var i5=4,sD=[0.125,0.215,0.35,0.446,0.526,0.582],_1=20,tU=new sU,oD=new m0,eU=null,JG=0,wG=0,ZG=!1,V1=(1+Math.sqrt(5))/2,c5=1/V1,nD=[new x(-V1,c5,0),new x(V1,c5,0),new x(-c5,0,V1),new x(c5,0,V1),new x(0,V1,-c5),new x(0,V1,c5),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],W2=new x;class HG{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,w=0,Z=0.1,Y=100,H={}){let{size:X=256,position:Q=W2}=H;eU=this._renderer.getRenderTarget(),JG=this._renderer.getActiveCubeFace(),wG=this._renderer.getActiveMipmapLevel(),ZG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(X);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Z,Y,W,Q),w>0)this._blur(W,0,0,w);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,w=null){return this._fromTexture(J,w)}fromCubemap(J,w=null){return this._fromTexture(J,w)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=tD(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=rD(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(eU,JG,wG),this._renderer.xr.enabled=ZG,J.scissorTest=!1,WH(J,0,0,J.width,J.height)}_fromTexture(J,w){if(J.mapping===y5||J.mapping===$1)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);eU=this._renderer.getRenderTarget(),JG=this._renderer.getActiveCubeFace(),wG=this._renderer.getActiveMipmapLevel(),ZG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=w||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),w=4*this._cubeSize,Z={magFilter:R1,minFilter:R1,generateMipmaps:!1,type:Dw,format:N6,colorSpace:Ow,depthBuffer:!1},Y=aD(J,w,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==w){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=aD(J,w,Z);let{_lodMax:H}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U2(H)),this._blurMaterial=G2(H,J,w)}return Y}_compileMaterial(J){let w=new N8(this._lodPlanes[0],J);this._renderer.compile(w,tU)}_sceneToCubeUV(J,w,Z,Y,H){let W=new J8(90,1,w,Z),U=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],q=this._renderer,$=q.autoClear,K=q.toneMapping;if(q.getClearColor(oD),q.toneMapping=o6,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Y),q.clearDepth(),q.setRenderTarget(null);let z=new sY({name:"PMREM.Background",side:f8,depthWrite:!1,depthTest:!1}),B=new N8(new v7,z),M=!1,k=J.background;if(k){if(k.isColor)z.color.copy(k),J.background=null,M=!0}else z.color.copy(oD),M=!0;for(let O=0;O<6;O++){let D=O%3;if(D===0)W.up.set(0,U[O],0),W.position.set(H.x,H.y,H.z),W.lookAt(H.x+G[O],H.y,H.z);else if(D===1)W.up.set(0,0,U[O]),W.position.set(H.x,H.y,H.z),W.lookAt(H.x,H.y+G[O],H.z);else W.up.set(0,U[O],0),W.position.set(H.x,H.y,H.z),W.lookAt(H.x,H.y,H.z+G[O]);let L=this._cubeSize;if(WH(Y,D*L,O>2?L:0,L,L),q.setRenderTarget(Y),M)q.render(B,W);q.render(J,W)}B.geometry.dispose(),B.material.dispose(),q.toneMapping=K,q.autoClear=$,J.background=k}_textureToCubeUV(J,w){let Z=this._renderer,Y=J.mapping===y5||J.mapping===$1;if(Y){if(this._cubemapMaterial===null)this._cubemapMaterial=tD();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=rD();let H=Y?this._cubemapMaterial:this._equirectMaterial,X=new N8(this._lodPlanes[0],H),Q=H.uniforms;Q.envMap.value=J;let W=this._cubeSize;WH(w,0,0,3*W,2*W),Z.setRenderTarget(w),Z.render(X,tU)}_applyPMREM(J){let w=this._renderer,Z=w.autoClear;w.autoClear=!1;let Y=this._lodPlanes.length;for(let H=1;H<Y;H++){let X=Math.sqrt(this._sigmas[H]*this._sigmas[H]-this._sigmas[H-1]*this._sigmas[H-1]),Q=nD[(Y-H-1)%nD.length];this._blur(J,H-1,H,X,Q)}w.autoClear=Z}_blur(J,w,Z,Y,H){let X=this._pingPongRenderTarget;this._halfBlur(J,X,w,Z,Y,"latitudinal",H),this._halfBlur(X,J,Z,Z,Y,"longitudinal",H)}_halfBlur(J,w,Z,Y,H,X,Q){let W=this._renderer,U=this._blurMaterial;if(X!=="latitudinal"&&X!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,q=new N8(this._lodPlanes[Y],U),$=U.uniforms,K=this._sizeLods[Z]-1,R=isFinite(H)?Math.PI/(2*K):2*Math.PI/(2*_1-1),z=H/R,B=isFinite(H)?1+Math.floor(G*z):_1;if(B>_1)console.warn(`sigmaRadians, ${H}, is too large and will clip, as it requested ${B} samples when the maximum is set to ${_1}`);let M=[],k=0;for(let E=0;E<_1;++E){let A=E/z,j=Math.exp(-A*A/2);if(M.push(j),E===0)k+=j;else if(E<B)k+=2*j}for(let E=0;E<M.length;E++)M[E]=M[E]/k;if($.envMap.value=J.texture,$.samples.value=B,$.weights.value=M,$.latitudinal.value=X==="latitudinal",Q)$.poleAxis.value=Q;let{_lodMax:O}=this;$.dTheta.value=R,$.mipInt.value=O-Z;let D=this._sizeLods[Y],L=3*D*(Y>O-i5?Y-O+i5:0),T=4*(this._cubeSize-D);WH(w,L,T,3*D,2*D),W.setRenderTarget(w),W.render(q,tU)}}function U2(J){let w=[],Z=[],Y=[],H=J,X=J-i5+1+sD.length;for(let Q=0;Q<X;Q++){let W=Math.pow(2,H);Z.push(W);let U=1/W;if(Q>J-i5)U=sD[Q-J+i5-1];else if(Q===0)U=0;Y.push(U);let G=1/(W-2),q=-G,$=1+G,K=[q,q,$,q,$,$,q,q,$,$,q,$],R=6,z=6,B=3,M=2,k=1,O=new Float32Array(B*z*R),D=new Float32Array(M*z*R),L=new Float32Array(k*z*R);for(let E=0;E<R;E++){let A=E%3*2/3-1,j=E>2?0:-1,_=[A,j,0,A+0.6666666666666666,j,0,A+0.6666666666666666,j+1,0,A,j,0,A+0.6666666666666666,j+1,0,A,j+1,0];O.set(_,B*z*E),D.set(K,M*z*E);let F=[E,E,E,E,E,E];L.set(F,k*z*E)}let T=new a6;if(T.setAttribute("position",new n8(O,B)),T.setAttribute("uv",new n8(D,M)),T.setAttribute("faceIndex",new n8(L,k)),w.push(T),H>i5)H--}return{lodPlanes:w,sizeLods:Z,sigmas:Y}}function aD(J,w,Z){let Y=new n6(J,w,Z);return Y.texture.mapping=Kw,Y.texture.name="PMREM.cubeUv",Y.scissorTest=!0,Y}function WH(J,w,Z,Y,H){J.viewport.set(w,Z,Y,H),J.scissor.set(w,Z,Y,H)}function G2(J,w,Z){let Y=new Float32Array(_1),H=new x(0,1,0);return new F6({name:"SphericalGaussianBlur",defines:{n:_1,CUBEUV_TEXEL_WIDTH:1/w,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Y},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:H}},vertexShader:QG(),fragmentShader:`

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
		`,blending:j7,depthTest:!1,depthWrite:!1})}function rD(){return new F6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:QG(),fragmentShader:`

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
		`,blending:j7,depthTest:!1,depthWrite:!1})}function tD(){return new F6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:QG(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:j7,depthTest:!1,depthWrite:!1})}function QG(){return`

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
	`}function q2(J){let w=new WeakMap,Z=null;function Y(W){if(W&&W.isTexture){let U=W.mapping,G=U===vY||U===yY,q=U===y5||U===$1;if(G||q){let $=w.get(W),K=$!==void 0?$.texture.pmremVersion:0;if(W.isRenderTargetTexture&&W.pmremVersion!==K){if(Z===null)Z=new HG(J);return $=G?Z.fromEquirectangular(W,$):Z.fromCubemap(W,$),$.texture.pmremVersion=W.pmremVersion,w.set(W,$),$.texture}else if($!==void 0)return $.texture;else{let R=W.image;if(G&&R&&R.height>0||q&&R&&H(R)){if(Z===null)Z=new HG(J);return $=G?Z.fromEquirectangular(W):Z.fromCubemap(W),$.texture.pmremVersion=W.pmremVersion,w.set(W,$),W.addEventListener("dispose",X),$.texture}else return null}}}return W}function H(W){let U=0,G=6;for(let q=0;q<G;q++)if(W[q]!==void 0)U++;return U===G}function X(W){let U=W.target;U.removeEventListener("dispose",X);let G=w.get(U);if(G!==void 0)w.delete(U),G.dispose()}function Q(){if(w=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:Y,dispose:Q}}function k2(J){let w={};function Z(Y){if(w[Y]!==void 0)return w[Y];let H;switch(Y){case"WEBGL_depth_texture":H=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":H=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":H=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":H=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:H=J.getExtension(Y)}return w[Y]=H,H}return{has:function(Y){return Z(Y)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(Y){let H=Z(Y);if(H===null)x5("THREE.WebGLRenderer: "+Y+" extension not supported.");return H}}}function K2(J,w,Z,Y){let H={},X=new WeakMap;function Q($){let K=$.target;if(K.index!==null)w.remove(K.index);for(let z in K.attributes)w.remove(K.attributes[z]);K.removeEventListener("dispose",Q),delete H[K.id];let R=X.get(K);if(R)w.remove(R),X.delete(K);if(Y.releaseStatesOfGeometry(K),K.isInstancedBufferGeometry===!0)delete K._maxInstanceCount;Z.memory.geometries--}function W($,K){if(H[K.id]===!0)return K;return K.addEventListener("dispose",Q),H[K.id]=!0,Z.memory.geometries++,K}function U($){let K=$.attributes;for(let R in K)w.update(K[R],J.ARRAY_BUFFER)}function G($){let K=[],R=$.index,z=$.attributes.position,B=0;if(R!==null){let O=R.array;B=R.version;for(let D=0,L=O.length;D<L;D+=3){let T=O[D+0],E=O[D+1],A=O[D+2];K.push(T,E,E,A,A,T)}}else if(z!==void 0){let O=z.array;B=z.version;for(let D=0,L=O.length/3-1;D<L;D+=3){let T=D+0,E=D+1,A=D+2;K.push(T,E,E,A,A,T)}}else return;let M=new((IU(K))?nY:oY)(K,1);M.version=B;let k=X.get($);if(k)w.remove(k);X.set($,M)}function q($){let K=X.get($);if(K){let R=$.index;if(R!==null){if(K.version<R.version)G($)}}else G($);return X.get($)}return{get:W,update:U,getWireframeAttribute:q}}function $2(J,w,Z){let Y;function H(K){Y=K}let X,Q;function W(K){X=K.type,Q=K.bytesPerElement}function U(K,R){J.drawElements(Y,R,X,K*Q),Z.update(R,Y,1)}function G(K,R,z){if(z===0)return;J.drawElementsInstanced(Y,R,X,K*Q,z),Z.update(R,Y,z)}function q(K,R,z){if(z===0)return;w.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Y,R,0,X,K,0,z);let M=0;for(let k=0;k<z;k++)M+=R[k];Z.update(M,Y,1)}function $(K,R,z,B){if(z===0)return;let M=w.get("WEBGL_multi_draw");if(M===null)for(let k=0;k<K.length;k++)G(K[k]/Q,R[k],B[k]);else{M.multiDrawElementsInstancedWEBGL(Y,R,0,X,K,0,B,0,z);let k=0;for(let O=0;O<z;O++)k+=R[O]*B[O];Z.update(k,Y,1)}}this.setMode=H,this.setIndex=W,this.render=U,this.renderInstances=G,this.renderMultiDraw=q,this.renderMultiDrawInstances=$}function R2(J){let w={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function Y(X,Q,W){switch(Z.calls++,Q){case J.TRIANGLES:Z.triangles+=W*(X/3);break;case J.LINES:Z.lines+=W*(X/2);break;case J.LINE_STRIP:Z.lines+=W*(X-1);break;case J.LINE_LOOP:Z.lines+=W*X;break;case J.POINTS:Z.points+=W*X;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function H(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:w,render:Z,programs:null,autoReset:!0,reset:H,update:Y}}function D2(J,w,Z){let Y=new WeakMap,H=new Q9;function X(Q,W,U){let G=Q.morphTargetInfluences,q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$=q!==void 0?q.length:0,K=Y.get(W);if(K===void 0||K.count!==$){let _=function(){A.dispose(),Y.delete(W),W.removeEventListener("dispose",_)};if(K!==void 0)K.texture.dispose();let R=W.morphAttributes.position!==void 0,z=W.morphAttributes.normal!==void 0,B=W.morphAttributes.color!==void 0,M=W.morphAttributes.position||[],k=W.morphAttributes.normal||[],O=W.morphAttributes.color||[],D=0;if(R===!0)D=1;if(z===!0)D=2;if(B===!0)D=3;let L=W.attributes.position.count*D,T=1;if(L>w.maxTextureSize)T=Math.ceil(L/w.maxTextureSize),L=w.maxTextureSize;let E=new Float32Array(L*T*4*$),A=new cY(E,L,T,$);A.type=b7,A.needsUpdate=!0;let j=D*4;for(let F=0;F<$;F++){let C=M[F],y=k[F],p=O[F],l=L*T*4*F;for(let o=0;o<C.count;o++){let m=o*j;if(R===!0)H.fromBufferAttribute(C,o),E[l+m+0]=H.x,E[l+m+1]=H.y,E[l+m+2]=H.z,E[l+m+3]=0;if(z===!0)H.fromBufferAttribute(y,o),E[l+m+4]=H.x,E[l+m+5]=H.y,E[l+m+6]=H.z,E[l+m+7]=0;if(B===!0)H.fromBufferAttribute(p,o),E[l+m+8]=H.x,E[l+m+9]=H.y,E[l+m+10]=H.z,E[l+m+11]=p.itemSize===4?H.w:1}}K={count:$,texture:A,size:new r0(L,T)},Y.set(W,K),W.addEventListener("dispose",_)}if(Q.isInstancedMesh===!0&&Q.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",Q.morphTexture,Z);else{let R=0;for(let B=0;B<G.length;B++)R+=G[B];let z=W.morphTargetsRelative?1:1-R;U.getUniforms().setValue(J,"morphTargetBaseInfluence",z),U.getUniforms().setValue(J,"morphTargetInfluences",G)}U.getUniforms().setValue(J,"morphTargetsTexture",K.texture,Z),U.getUniforms().setValue(J,"morphTargetsTextureSize",K.size)}return{update:X}}function M2(J,w,Z,Y){let H=new WeakMap;function X(U){let G=Y.render.frame,q=U.geometry,$=w.get(U,q);if(H.get($)!==G)w.update($),H.set($,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",W)===!1)U.addEventListener("dispose",W);if(H.get(U)!==G){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);H.set(U,G)}}if(U.isSkinnedMesh){let K=U.skeleton;if(H.get(K)!==G)K.update(),H.set(K,G)}return $}function Q(){H=new WeakMap}function W(U){let G=U.target;if(G.removeEventListener("dispose",W),Z.remove(G.instanceMatrix),G.instanceColor!==null)Z.remove(G.instanceColor)}return{update:X,dispose:Q}}var OM=new G8,eD=new eY(1,1),NM=new cY,FM=new PU,zM=new rY,JM=[],wM=[],ZM=new Float32Array(16),YM=new Float32Array(9),HM=new Float32Array(4);function s5(J,w,Z){let Y=J[0];if(Y<=0||Y>0)return J;let H=w*Z,X=JM[H];if(X===void 0)X=new Float32Array(H),JM[H]=X;if(w!==0){Y.toArray(X,0);for(let Q=1,W=0;Q!==w;++Q)W+=Z,J[Q].toArray(X,W)}return X}function l9(J,w){if(J.length!==w.length)return!1;for(let Z=0,Y=J.length;Z<Y;Z++)if(J[Z]!==w[Z])return!1;return!0}function p9(J,w){for(let Z=0,Y=w.length;Z<Y;Z++)J[Z]=w[Z]}function GH(J,w){let Z=wM[w];if(Z===void 0)Z=new Int32Array(w),wM[w]=Z;for(let Y=0;Y!==w;++Y)Z[Y]=J.allocateTextureUnit();return Z}function O2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1f(this.addr,w),Z[0]=w}function N2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2f(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2fv(this.addr,w),p9(Z,w)}}function F2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3f(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else if(w.r!==void 0){if(Z[0]!==w.r||Z[1]!==w.g||Z[2]!==w.b)J.uniform3f(this.addr,w.r,w.g,w.b),Z[0]=w.r,Z[1]=w.g,Z[2]=w.b}else{if(l9(Z,w))return;J.uniform3fv(this.addr,w),p9(Z,w)}}function z2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4f(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4fv(this.addr,w),p9(Z,w)}}function L2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix2fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;HM.set(Y),J.uniformMatrix2fv(this.addr,!1,HM),p9(Z,Y)}}function B2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix3fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;YM.set(Y),J.uniformMatrix3fv(this.addr,!1,YM),p9(Z,Y)}}function V2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix4fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;ZM.set(Y),J.uniformMatrix4fv(this.addr,!1,ZM),p9(Z,Y)}}function _2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1i(this.addr,w),Z[0]=w}function A2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2i(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2iv(this.addr,w),p9(Z,w)}}function E2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3i(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else{if(l9(Z,w))return;J.uniform3iv(this.addr,w),p9(Z,w)}}function I2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4i(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4iv(this.addr,w),p9(Z,w)}}function C2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1ui(this.addr,w),Z[0]=w}function T2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2ui(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2uiv(this.addr,w),p9(Z,w)}}function P2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3ui(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else{if(l9(Z,w))return;J.uniform3uiv(this.addr,w),p9(Z,w)}}function S2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4ui(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4uiv(this.addr,w),p9(Z,w)}}function j2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;let X;if(this.type===J.SAMPLER_2D_SHADOW)eD.compareFunction=VU,X=eD;else X=OM;Z.setTexture2D(w||X,H)}function f2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTexture3D(w||FM,H)}function b2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTextureCube(w||zM,H)}function x2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTexture2DArray(w||NM,H)}function h2(J){switch(J){case 5126:return O2;case 35664:return N2;case 35665:return F2;case 35666:return z2;case 35674:return L2;case 35675:return B2;case 35676:return V2;case 5124:case 35670:return _2;case 35667:case 35671:return A2;case 35668:case 35672:return E2;case 35669:case 35673:return I2;case 5125:return C2;case 36294:return T2;case 36295:return P2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return x2}}function v2(J,w){J.uniform1fv(this.addr,w)}function y2(J,w){let Z=s5(w,this.size,2);J.uniform2fv(this.addr,Z)}function g2(J,w){let Z=s5(w,this.size,3);J.uniform3fv(this.addr,Z)}function l2(J,w){let Z=s5(w,this.size,4);J.uniform4fv(this.addr,Z)}function p2(J,w){let Z=s5(w,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function d2(J,w){let Z=s5(w,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function m2(J,w){let Z=s5(w,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function u2(J,w){J.uniform1iv(this.addr,w)}function c2(J,w){J.uniform2iv(this.addr,w)}function i2(J,w){J.uniform3iv(this.addr,w)}function s2(J,w){J.uniform4iv(this.addr,w)}function o2(J,w){J.uniform1uiv(this.addr,w)}function n2(J,w){J.uniform2uiv(this.addr,w)}function a2(J,w){J.uniform3uiv(this.addr,w)}function r2(J,w){J.uniform4uiv(this.addr,w)}function t2(J,w,Z){let Y=this.cache,H=w.length,X=GH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture2D(w[Q]||OM,X[Q])}function e2(J,w,Z){let Y=this.cache,H=w.length,X=GH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture3D(w[Q]||FM,X[Q])}function JV(J,w,Z){let Y=this.cache,H=w.length,X=GH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTextureCube(w[Q]||zM,X[Q])}function wV(J,w,Z){let Y=this.cache,H=w.length,X=GH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture2DArray(w[Q]||NM,X[Q])}function ZV(J){switch(J){case 5126:return v2;case 35664:return y2;case 35665:return g2;case 35666:return l2;case 35674:return p2;case 35675:return d2;case 35676:return m2;case 5124:case 35670:return u2;case 35667:case 35671:return c2;case 35668:case 35672:return i2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return n2;case 36295:return a2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return JV;case 36289:case 36303:case 36311:case 36292:return wV}}class LM{constructor(J,w,Z){this.id=J,this.addr=Z,this.cache=[],this.type=w.type,this.setValue=h2(w.type)}}class BM{constructor(J,w,Z){this.id=J,this.addr=Z,this.cache=[],this.type=w.type,this.size=w.size,this.setValue=ZV(w.type)}}class VM{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,w,Z){let Y=this.seq;for(let H=0,X=Y.length;H!==X;++H){let Q=Y[H];Q.setValue(J,w[Q.id],Z)}}}var YG=/(\w+)(\])?(\[|\.)?/g;function XM(J,w){J.seq.push(w),J.map[w.id]=w}function YV(J,w,Z){let Y=J.name,H=Y.length;YG.lastIndex=0;while(!0){let X=YG.exec(Y),Q=YG.lastIndex,W=X[1],U=X[2]==="]",G=X[3];if(U)W=W|0;if(G===void 0||G==="["&&Q+2===H){XM(Z,G===void 0?new LM(W,J,w):new BM(W,J,w));break}else{let $=Z.map[W];if($===void 0)$=new VM(W),XM(Z,$);Z=$}}}class Tw{constructor(J,w){this.seq=[],this.map={};let Z=J.getProgramParameter(w,J.ACTIVE_UNIFORMS);for(let Y=0;Y<Z;++Y){let H=J.getActiveUniform(w,Y),X=J.getUniformLocation(w,H.name);YV(H,X,this)}}setValue(J,w,Z,Y){let H=this.map[w];if(H!==void 0)H.setValue(J,Z,Y)}setOptional(J,w,Z){let Y=w[Z];if(Y!==void 0)this.setValue(J,Z,Y)}static upload(J,w,Z,Y){for(let H=0,X=w.length;H!==X;++H){let Q=w[H],W=Z[Q.id];if(W.needsUpdate!==!1)Q.setValue(J,W.value,Y)}}static seqWithValue(J,w){let Z=[];for(let Y=0,H=J.length;Y!==H;++Y){let X=J[Y];if(X.id in w)Z.push(X)}return Z}}function QM(J,w,Z){let Y=J.createShader(w);return J.shaderSource(Y,Z),J.compileShader(Y),Y}var HV=37297,XV=0;function QV(J,w){let Z=J.split(`
`),Y=[],H=Math.max(w-6,0),X=Math.min(w+6,Z.length);for(let Q=H;Q<X;Q++){let W=Q+1;Y.push(`${W===w?">":" "} ${W}: ${Z[Q]}`)}return Y.join(`
`)}var WM=new g0;function WV(J){t0._getMatrix(WM,t0.workingColorSpace,J);let w=`mat3( ${WM.elements.map((Z)=>Z.toFixed(4))} )`;switch(t0.getTransfer(J)){case BU:return[w,"LinearTransferOETF"];case M9:return[w,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[w,"LinearTransferOETF"]}}function UM(J,w,Z){let Y=J.getShaderParameter(w,J.COMPILE_STATUS),X=(J.getShaderInfoLog(w)||"").trim();if(Y&&X==="")return"";let Q=/ERROR: 0:(\d+)/.exec(X);if(Q){let W=parseInt(Q[1]);return Z.toUpperCase()+`

`+X+`

`+QV(J.getShaderSource(w),W)}else return X}function UV(J,w){let Z=WV(w);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function GV(J,w){let Z;switch(w){case GD:Z="Linear";break;case qD:Z="Reinhard";break;case kD:Z="Cineon";break;case KD:Z="ACESFilmic";break;case RD:Z="AgX";break;case DD:Z="Neutral";break;case $D:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",w),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var UH=new x;function qV(){t0.getLuminanceCoefficients(UH);let J=UH.x.toFixed(4),w=UH.y.toFixed(4),Z=UH.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${w}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function kV(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cw).join(`
`)}function KV(J){let w=[];for(let Z in J){let Y=J[Z];if(Y===!1)continue;w.push("#define "+Z+" "+Y)}return w.join(`
`)}function $V(J,w){let Z={},Y=J.getProgramParameter(w,J.ACTIVE_ATTRIBUTES);for(let H=0;H<Y;H++){let X=J.getActiveAttrib(w,H),Q=X.name,W=1;if(X.type===J.FLOAT_MAT2)W=2;if(X.type===J.FLOAT_MAT3)W=3;if(X.type===J.FLOAT_MAT4)W=4;Z[Q]={type:X.type,location:J.getAttribLocation(w,Q),locationSize:W}}return Z}function Cw(J){return J!==""}function GM(J,w){let Z=w.numSpotLightShadows+w.numSpotLightMaps-w.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,w.numDirLights).replace(/NUM_SPOT_LIGHTS/g,w.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,w.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,w.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,w.numPointLights).replace(/NUM_HEMI_LIGHTS/g,w.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,w.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,w.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,w.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,w.numPointLightShadows)}function qM(J,w){return J.replace(/NUM_CLIPPING_PLANES/g,w.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,w.numClippingPlanes-w.numClipIntersection)}var RV=/^[ \t]*#include +<([\w\d./]+)>/gm;function XG(J){return J.replace(RV,MV)}var DV=new Map;function MV(J,w){let Z=l0[w];if(Z===void 0){let Y=DV.get(w);if(Y!==void 0)Z=l0[Y],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',w,Y);else throw new Error("Can not resolve #include <"+w+">")}return XG(Z)}var OV=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kM(J){return J.replace(OV,NV)}function NV(J,w,Z,Y){let H="";for(let X=parseInt(w);X<parseInt(Z);X++)H+=Y.replace(/\[\s*i\s*\]/g,"[ "+X+" ]").replace(/UNROLLED_LOOP_INDEX/g,X);return H}function KM(J){let w=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")w+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")w+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")w+=`
#define LOW_PRECISION`;return w}function FV(J){let w="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===yW)w="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===gR)w="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===M6)w="SHADOWMAP_TYPE_VSM";return w}function zV(J){let w="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case y5:case $1:w="ENVMAP_TYPE_CUBE";break;case Kw:w="ENVMAP_TYPE_CUBE_UV";break}return w}function LV(J){let w="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case $1:w="ENVMAP_MODE_REFRACTION";break}return w}function BV(J){let w="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case QD:w="ENVMAP_BLENDING_MULTIPLY";break;case WD:w="ENVMAP_BLENDING_MIX";break;case UD:w="ENVMAP_BLENDING_ADD";break}return w}function VV(J){let w=J.envMapCubeUVHeight;if(w===null)return null;let Z=Math.log2(w)-2,Y=1/w;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:Y,maxMip:Z}}function _V(J,w,Z,Y){let H=J.getContext(),X=Z.defines,Q=Z.vertexShader,W=Z.fragmentShader,U=FV(Z),G=zV(Z),q=LV(Z),$=BV(Z),K=VV(Z),R=kV(Z),z=KV(X),B=H.createProgram(),M,k,O=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,z].filter(Cw).join(`
`),M.length>0)M+=`
`;if(k=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,z].filter(Cw).join(`
`),k.length>0)k+=`
`}else M=[KM(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,z,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Cw).join(`
`),k=[KM(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,z,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+$:"",K?"#define CUBEUV_TEXEL_WIDTH "+K.texelWidth:"",K?"#define CUBEUV_TEXEL_HEIGHT "+K.texelHeight:"",K?"#define CUBEUV_MAX_MIP "+K.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==o6?"#define TONE_MAPPING":"",Z.toneMapping!==o6?l0.tonemapping_pars_fragment:"",Z.toneMapping!==o6?GV("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,UV("linearToOutputTexel",Z.outputColorSpace),qV(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(Cw).join(`
`);if(Q=XG(Q),Q=GM(Q,Z),Q=qM(Q,Z),W=XG(W),W=GM(W,Z),W=qM(W,Z),Q=kM(Q),W=kM(W),Z.isRawShaderMaterial!==!0)O=`#version 300 es
`,M=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,k=["#define varying in",Z.glslVersion===_U?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===_U?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+k;let D=O+M+Q,L=O+k+W,T=QM(H,H.VERTEX_SHADER,D),E=QM(H,H.FRAGMENT_SHADER,L);if(H.attachShader(B,T),H.attachShader(B,E),Z.index0AttributeName!==void 0)H.bindAttribLocation(B,0,Z.index0AttributeName);else if(Z.morphTargets===!0)H.bindAttribLocation(B,0,"position");H.linkProgram(B);function A(C){if(J.debug.checkShaderErrors){let y=H.getProgramInfoLog(B)||"",p=H.getShaderInfoLog(T)||"",l=H.getShaderInfoLog(E)||"",o=y.trim(),m=p.trim(),a=l.trim(),d=!0,Z0=!0;if(H.getProgramParameter(B,H.LINK_STATUS)===!1)if(d=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(H,B,T,E);else{let q0=UM(H,T,"vertex"),I0=UM(H,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+H.getError()+" - VALIDATE_STATUS "+H.getProgramParameter(B,H.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+o+`
`+q0+`
`+I0)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(m===""||a==="")Z0=!1;if(Z0)C.diagnostics={runnable:d,programLog:o,vertexShader:{log:m,prefix:M},fragmentShader:{log:a,prefix:k}}}H.deleteShader(T),H.deleteShader(E),j=new Tw(H,B),_=$V(H,B)}let j;this.getUniforms=function(){if(j===void 0)A(this);return j};let _;this.getAttributes=function(){if(_===void 0)A(this);return _};let F=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(F===!1)F=H.getProgramParameter(B,HV);return F},this.destroy=function(){Y.releaseStatesOfProgram(this),H.deleteProgram(B),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=XV++,this.cacheKey=w,this.usedTimes=1,this.program=B,this.vertexShader=T,this.fragmentShader=E,this}var AV=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:w,fragmentShader:Z}=J,Y=this._getShaderStage(w),H=this._getShaderStage(Z),X=this._getShaderCacheForMaterial(J);if(X.has(Y)===!1)X.add(Y),Y.usedTimes++;if(X.has(H)===!1)X.add(H),H.usedTimes++;return this}remove(J){let w=this.materialCache.get(J);for(let Z of w)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let w=this.materialCache,Z=w.get(J);if(Z===void 0)Z=new Set,w.set(J,Z);return Z}_getShaderStage(J){let w=this.shaderCache,Z=w.get(J);if(Z===void 0)Z=new AM(J),w.set(J,Z);return Z}}class AM{constructor(J){this.id=AV++,this.code=J,this.usedTimes=0}}function EV(J,w,Z,Y,H,X,Q){let W=new iY,U=new _M,G=new Set,q=[],$=H.logarithmicDepthBuffer,K=H.vertexTextures,R=H.precision,z={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function B(_){if(G.add(_),_===0)return"uv";return`uv${_}`}function M(_,F,C,y,p){let l=y.fog,o=p.geometry,m=_.isMeshStandardMaterial?y.environment:null,a=(_.isMeshStandardMaterial?Z:w).get(_.envMap||m),d=!!a&&a.mapping===Kw?a.image.height:null,Z0=z[_.type];if(_.precision!==null){if(R=H.getMaxPrecision(_.precision),R!==_.precision)console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",R,"instead.")}let q0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,I0=q0!==void 0?q0.length:0,K0=0;if(o.morphAttributes.position!==void 0)K0=1;if(o.morphAttributes.normal!==void 0)K0=2;if(o.morphAttributes.color!==void 0)K0=3;let e0,p0,i,X0;if(Z0){let W9=z6[Z0];e0=W9.vertexShader,p0=W9.fragmentShader}else e0=_.vertexShader,p0=_.fragmentShader,U.update(_),i=U.getVertexShaderID(_),X0=U.getFragmentShaderID(_);let Y0=J.getRenderTarget(),z0=J.state.buffers.depth.getReversed(),b0=p.isInstancedMesh===!0,x0=p.isBatchedMesh===!0,d9=!!_.map,P=!!_.matcap,B9=!!a,v0=!!_.aoMap,f0=!!_.lightMap,N0=!!_.bumpMap,V9=!!_.normalMap,_0=!!_.displacementMap,C0=!!_.emissiveMap,o9=!!_.metalnessMap,m9=!!_.roughnessMap,S9=_.anisotropy>0,I=_.clearcoat>0,N=_.dispersion>0,h=_.iridescence>0,s=_.sheen>0,r=_.transmission>0,u=S9&&!!_.anisotropyMap,R0=I&&!!_.clearcoatMap,w0=I&&!!_.clearcoatNormalMap,F0=I&&!!_.clearcoatRoughnessMap,S0=h&&!!_.iridescenceMap,J0=h&&!!_.iridescenceThicknessMap,G0=s&&!!_.sheenColorMap,L0=s&&!!_.sheenRoughnessMap,B0=!!_.specularMap,k0=!!_.specularColorMap,d0=!!_.specularIntensityMap,S=r&&!!_.transmissionMap,W0=r&&!!_.thicknessMap,H0=!!_.gradientMap,D0=!!_.alphaMap,t=_.alphaTest>0,n=!!_.alphaHash,O0=!!_.extensions,h0=o6;if(_.toneMapped){if(Y0===null||Y0.isXRRenderTarget===!0)h0=J.toneMapping}let K9={shaderID:Z0,shaderType:_.type,shaderName:_.name,vertexShader:e0,fragmentShader:p0,defines:_.defines,customVertexShaderID:i,customFragmentShaderID:X0,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:R,batching:x0,batchingColor:x0&&p._colorsTexture!==null,instancing:b0,instancingColor:b0&&p.instanceColor!==null,instancingMorph:b0&&p.morphTexture!==null,supportsVertexTextures:K,outputColorSpace:Y0===null?J.outputColorSpace:Y0.isXRRenderTarget===!0?Y0.texture.colorSpace:Ow,alphaToCoverage:!!_.alphaToCoverage,map:d9,matcap:P,envMap:B9,envMapMode:B9&&a.mapping,envMapCubeUVHeight:d,aoMap:v0,lightMap:f0,bumpMap:N0,normalMap:V9,displacementMap:K&&_0,emissiveMap:C0,normalMapObjectSpace:V9&&_.normalMapType===PD,normalMapTangentSpace:V9&&_.normalMapType===TD,metalnessMap:o9,roughnessMap:m9,anisotropy:S9,anisotropyMap:u,clearcoat:I,clearcoatMap:R0,clearcoatNormalMap:w0,clearcoatRoughnessMap:F0,dispersion:N,iridescence:h,iridescenceMap:S0,iridescenceThicknessMap:J0,sheen:s,sheenColorMap:G0,sheenRoughnessMap:L0,specularMap:B0,specularColorMap:k0,specularIntensityMap:d0,transmission:r,transmissionMap:S,thicknessMap:W0,gradientMap:H0,opaque:_.transparent===!1&&_.blending===qw&&_.alphaToCoverage===!1,alphaMap:D0,alphaTest:t,alphaHash:n,combine:_.combine,mapUv:d9&&B(_.map.channel),aoMapUv:v0&&B(_.aoMap.channel),lightMapUv:f0&&B(_.lightMap.channel),bumpMapUv:N0&&B(_.bumpMap.channel),normalMapUv:V9&&B(_.normalMap.channel),displacementMapUv:_0&&B(_.displacementMap.channel),emissiveMapUv:C0&&B(_.emissiveMap.channel),metalnessMapUv:o9&&B(_.metalnessMap.channel),roughnessMapUv:m9&&B(_.roughnessMap.channel),anisotropyMapUv:u&&B(_.anisotropyMap.channel),clearcoatMapUv:R0&&B(_.clearcoatMap.channel),clearcoatNormalMapUv:w0&&B(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F0&&B(_.clearcoatRoughnessMap.channel),iridescenceMapUv:S0&&B(_.iridescenceMap.channel),iridescenceThicknessMapUv:J0&&B(_.iridescenceThicknessMap.channel),sheenColorMapUv:G0&&B(_.sheenColorMap.channel),sheenRoughnessMapUv:L0&&B(_.sheenRoughnessMap.channel),specularMapUv:B0&&B(_.specularMap.channel),specularColorMapUv:k0&&B(_.specularColorMap.channel),specularIntensityMapUv:d0&&B(_.specularIntensityMap.channel),transmissionMapUv:S&&B(_.transmissionMap.channel),thicknessMapUv:W0&&B(_.thicknessMap.channel),alphaMapUv:D0&&B(_.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(V9||S9),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!o.attributes.uv&&(d9||D0),fog:!!l,useFog:_.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:$,reversedDepthBuffer:z0,skinning:p.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:I0,morphTextureStride:K0,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:_.dithering,shadowMapEnabled:J.shadowMap.enabled&&C.length>0,shadowMapType:J.shadowMap.type,toneMapping:h0,decodeVideoTexture:d9&&_.map.isVideoTexture===!0&&t0.getTransfer(_.map.colorSpace)===M9,decodeVideoTextureEmissive:C0&&_.emissiveMap.isVideoTexture===!0&&t0.getTransfer(_.emissiveMap.colorSpace)===M9,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===O6,flipSided:_.side===f8,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:O0&&_.extensions.clipCullDistance===!0&&Y.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&_.extensions.multiDraw===!0||x0)&&Y.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Y.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return K9.vertexUv1s=G.has(1),K9.vertexUv2s=G.has(2),K9.vertexUv3s=G.has(3),G.clear(),K9}function k(_){let F=[];if(_.shaderID)F.push(_.shaderID);else F.push(_.customVertexShaderID),F.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let C in _.defines)F.push(C),F.push(_.defines[C]);if(_.isRawShaderMaterial===!1)O(F,_),D(F,_),F.push(J.outputColorSpace);return F.push(_.customProgramCacheKey),F.join()}function O(_,F){_.push(F.precision),_.push(F.outputColorSpace),_.push(F.envMapMode),_.push(F.envMapCubeUVHeight),_.push(F.mapUv),_.push(F.alphaMapUv),_.push(F.lightMapUv),_.push(F.aoMapUv),_.push(F.bumpMapUv),_.push(F.normalMapUv),_.push(F.displacementMapUv),_.push(F.emissiveMapUv),_.push(F.metalnessMapUv),_.push(F.roughnessMapUv),_.push(F.anisotropyMapUv),_.push(F.clearcoatMapUv),_.push(F.clearcoatNormalMapUv),_.push(F.clearcoatRoughnessMapUv),_.push(F.iridescenceMapUv),_.push(F.iridescenceThicknessMapUv),_.push(F.sheenColorMapUv),_.push(F.sheenRoughnessMapUv),_.push(F.specularMapUv),_.push(F.specularColorMapUv),_.push(F.specularIntensityMapUv),_.push(F.transmissionMapUv),_.push(F.thicknessMapUv),_.push(F.combine),_.push(F.fogExp2),_.push(F.sizeAttenuation),_.push(F.morphTargetsCount),_.push(F.morphAttributeCount),_.push(F.numDirLights),_.push(F.numPointLights),_.push(F.numSpotLights),_.push(F.numSpotLightMaps),_.push(F.numHemiLights),_.push(F.numRectAreaLights),_.push(F.numDirLightShadows),_.push(F.numPointLightShadows),_.push(F.numSpotLightShadows),_.push(F.numSpotLightShadowsWithMaps),_.push(F.numLightProbes),_.push(F.shadowMapType),_.push(F.toneMapping),_.push(F.numClippingPlanes),_.push(F.numClipIntersection),_.push(F.depthPacking)}function D(_,F){if(W.disableAll(),F.supportsVertexTextures)W.enable(0);if(F.instancing)W.enable(1);if(F.instancingColor)W.enable(2);if(F.instancingMorph)W.enable(3);if(F.matcap)W.enable(4);if(F.envMap)W.enable(5);if(F.normalMapObjectSpace)W.enable(6);if(F.normalMapTangentSpace)W.enable(7);if(F.clearcoat)W.enable(8);if(F.iridescence)W.enable(9);if(F.alphaTest)W.enable(10);if(F.vertexColors)W.enable(11);if(F.vertexAlphas)W.enable(12);if(F.vertexUv1s)W.enable(13);if(F.vertexUv2s)W.enable(14);if(F.vertexUv3s)W.enable(15);if(F.vertexTangents)W.enable(16);if(F.anisotropy)W.enable(17);if(F.alphaHash)W.enable(18);if(F.batching)W.enable(19);if(F.dispersion)W.enable(20);if(F.batchingColor)W.enable(21);if(F.gradientMap)W.enable(22);if(_.push(W.mask),W.disableAll(),F.fog)W.enable(0);if(F.useFog)W.enable(1);if(F.flatShading)W.enable(2);if(F.logarithmicDepthBuffer)W.enable(3);if(F.reversedDepthBuffer)W.enable(4);if(F.skinning)W.enable(5);if(F.morphTargets)W.enable(6);if(F.morphNormals)W.enable(7);if(F.morphColors)W.enable(8);if(F.premultipliedAlpha)W.enable(9);if(F.shadowMapEnabled)W.enable(10);if(F.doubleSided)W.enable(11);if(F.flipSided)W.enable(12);if(F.useDepthPacking)W.enable(13);if(F.dithering)W.enable(14);if(F.transmission)W.enable(15);if(F.sheen)W.enable(16);if(F.opaque)W.enable(17);if(F.pointsUvs)W.enable(18);if(F.decodeVideoTexture)W.enable(19);if(F.decodeVideoTextureEmissive)W.enable(20);if(F.alphaToCoverage)W.enable(21);_.push(W.mask)}function L(_){let F=z[_.type],C;if(F){let y=z6[F];C=dD.clone(y.uniforms)}else C=_.uniforms;return C}function T(_,F){let C;for(let y=0,p=q.length;y<p;y++){let l=q[y];if(l.cacheKey===F){C=l,++C.usedTimes;break}}if(C===void 0)C=new _V(J,F,_,X),q.push(C);return C}function E(_){if(--_.usedTimes===0){let F=q.indexOf(_);q[F]=q[q.length-1],q.pop(),_.destroy()}}function A(_){U.remove(_)}function j(){U.dispose()}return{getParameters:M,getProgramCacheKey:k,getUniforms:L,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:q,dispose:j}}function IV(){let J=new WeakMap;function w(Q){return J.has(Q)}function Z(Q){let W=J.get(Q);if(W===void 0)W={},J.set(Q,W);return W}function Y(Q){J.delete(Q)}function H(Q,W,U){J.get(Q)[W]=U}function X(){J=new WeakMap}return{has:w,get:Z,remove:Y,update:H,dispose:X}}function CV(J,w){if(J.groupOrder!==w.groupOrder)return J.groupOrder-w.groupOrder;else if(J.renderOrder!==w.renderOrder)return J.renderOrder-w.renderOrder;else if(J.material.id!==w.material.id)return J.material.id-w.material.id;else if(J.z!==w.z)return J.z-w.z;else return J.id-w.id}function $M(J,w){if(J.groupOrder!==w.groupOrder)return J.groupOrder-w.groupOrder;else if(J.renderOrder!==w.renderOrder)return J.renderOrder-w.renderOrder;else if(J.z!==w.z)return w.z-J.z;else return J.id-w.id}function RM(){let J=[],w=0,Z=[],Y=[],H=[];function X(){w=0,Z.length=0,Y.length=0,H.length=0}function Q($,K,R,z,B,M){let k=J[w];if(k===void 0)k={id:$.id,object:$,geometry:K,material:R,groupOrder:z,renderOrder:$.renderOrder,z:B,group:M},J[w]=k;else k.id=$.id,k.object=$,k.geometry=K,k.material=R,k.groupOrder=z,k.renderOrder=$.renderOrder,k.z=B,k.group=M;return w++,k}function W($,K,R,z,B,M){let k=Q($,K,R,z,B,M);if(R.transmission>0)Y.push(k);else if(R.transparent===!0)H.push(k);else Z.push(k)}function U($,K,R,z,B,M){let k=Q($,K,R,z,B,M);if(R.transmission>0)Y.unshift(k);else if(R.transparent===!0)H.unshift(k);else Z.unshift(k)}function G($,K){if(Z.length>1)Z.sort($||CV);if(Y.length>1)Y.sort(K||$M);if(H.length>1)H.sort(K||$M)}function q(){for(let $=w,K=J.length;$<K;$++){let R=J[$];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Z,transmissive:Y,transparent:H,init:X,push:W,unshift:U,finish:q,sort:G}}function TV(){let J=new WeakMap;function w(Y,H){let X=J.get(Y),Q;if(X===void 0)Q=new RM,J.set(Y,[Q]);else if(H>=X.length)Q=new RM,X.push(Q);else Q=X[H];return Q}function Z(){J=new WeakMap}return{get:w,dispose:Z}}function PV(){let J={};return{get:function(w){if(J[w.id]!==void 0)return J[w.id];let Z;switch(w.type){case"DirectionalLight":Z={direction:new x,color:new m0};break;case"SpotLight":Z={position:new x,direction:new x,color:new m0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new m0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new m0,groundColor:new m0};break;case"RectAreaLight":Z={color:new m0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[w.id]=Z,Z}}}function SV(){let J={};return{get:function(w){if(J[w.id]!==void 0)return J[w.id];let Z;switch(w.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[w.id]=Z,Z}}}var jV=0;function fV(J,w){return(w.castShadow?2:0)-(J.castShadow?2:0)+(w.map?1:0)-(J.map?1:0)}function bV(J){let w=new PV,Z=SV(),Y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)Y.probe.push(new x);let H=new x,X=new I9,Q=new I9;function W(G){let q=0,$=0,K=0;for(let _=0;_<9;_++)Y.probe[_].set(0,0,0);let R=0,z=0,B=0,M=0,k=0,O=0,D=0,L=0,T=0,E=0,A=0;G.sort(fV);for(let _=0,F=G.length;_<F;_++){let C=G[_],y=C.color,p=C.intensity,l=C.distance,o=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)q+=y.r*p,$+=y.g*p,K+=y.b*p;else if(C.isLightProbe){for(let m=0;m<9;m++)Y.probe[m].addScaledVector(C.sh.coefficients[m],p);A++}else if(C.isDirectionalLight){let m=w.get(C);if(m.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let a=C.shadow,d=Z.get(C);d.shadowIntensity=a.intensity,d.shadowBias=a.bias,d.shadowNormalBias=a.normalBias,d.shadowRadius=a.radius,d.shadowMapSize=a.mapSize,Y.directionalShadow[R]=d,Y.directionalShadowMap[R]=o,Y.directionalShadowMatrix[R]=C.shadow.matrix,O++}Y.directional[R]=m,R++}else if(C.isSpotLight){let m=w.get(C);m.position.setFromMatrixPosition(C.matrixWorld),m.color.copy(y).multiplyScalar(p),m.distance=l,m.coneCos=Math.cos(C.angle),m.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),m.decay=C.decay,Y.spot[B]=m;let a=C.shadow;if(C.map){if(Y.spotLightMap[T]=C.map,T++,a.updateMatrices(C),C.castShadow)E++}if(Y.spotLightMatrix[B]=a.matrix,C.castShadow){let d=Z.get(C);d.shadowIntensity=a.intensity,d.shadowBias=a.bias,d.shadowNormalBias=a.normalBias,d.shadowRadius=a.radius,d.shadowMapSize=a.mapSize,Y.spotShadow[B]=d,Y.spotShadowMap[B]=o,L++}B++}else if(C.isRectAreaLight){let m=w.get(C);m.color.copy(y).multiplyScalar(p),m.halfWidth.set(C.width*0.5,0,0),m.halfHeight.set(0,C.height*0.5,0),Y.rectArea[M]=m,M++}else if(C.isPointLight){let m=w.get(C);if(m.color.copy(C.color).multiplyScalar(C.intensity),m.distance=C.distance,m.decay=C.decay,C.castShadow){let a=C.shadow,d=Z.get(C);d.shadowIntensity=a.intensity,d.shadowBias=a.bias,d.shadowNormalBias=a.normalBias,d.shadowRadius=a.radius,d.shadowMapSize=a.mapSize,d.shadowCameraNear=a.camera.near,d.shadowCameraFar=a.camera.far,Y.pointShadow[z]=d,Y.pointShadowMap[z]=o,Y.pointShadowMatrix[z]=C.shadow.matrix,D++}Y.point[z]=m,z++}else if(C.isHemisphereLight){let m=w.get(C);m.skyColor.copy(C.color).multiplyScalar(p),m.groundColor.copy(C.groundColor).multiplyScalar(p),Y.hemi[k]=m,k++}}if(M>0)if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=Q0.LTC_FLOAT_1,Y.rectAreaLTC2=Q0.LTC_FLOAT_2;else Y.rectAreaLTC1=Q0.LTC_HALF_1,Y.rectAreaLTC2=Q0.LTC_HALF_2;Y.ambient[0]=q,Y.ambient[1]=$,Y.ambient[2]=K;let j=Y.hash;if(j.directionalLength!==R||j.pointLength!==z||j.spotLength!==B||j.rectAreaLength!==M||j.hemiLength!==k||j.numDirectionalShadows!==O||j.numPointShadows!==D||j.numSpotShadows!==L||j.numSpotMaps!==T||j.numLightProbes!==A)Y.directional.length=R,Y.spot.length=B,Y.rectArea.length=M,Y.point.length=z,Y.hemi.length=k,Y.directionalShadow.length=O,Y.directionalShadowMap.length=O,Y.pointShadow.length=D,Y.pointShadowMap.length=D,Y.spotShadow.length=L,Y.spotShadowMap.length=L,Y.directionalShadowMatrix.length=O,Y.pointShadowMatrix.length=D,Y.spotLightMatrix.length=L+T-E,Y.spotLightMap.length=T,Y.numSpotLightShadowsWithMaps=E,Y.numLightProbes=A,j.directionalLength=R,j.pointLength=z,j.spotLength=B,j.rectAreaLength=M,j.hemiLength=k,j.numDirectionalShadows=O,j.numPointShadows=D,j.numSpotShadows=L,j.numSpotMaps=T,j.numLightProbes=A,Y.version=jV++}function U(G,q){let $=0,K=0,R=0,z=0,B=0,M=q.matrixWorldInverse;for(let k=0,O=G.length;k<O;k++){let D=G[k];if(D.isDirectionalLight){let L=Y.directional[$];L.direction.setFromMatrixPosition(D.matrixWorld),H.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(H),L.direction.transformDirection(M),$++}else if(D.isSpotLight){let L=Y.spot[R];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),H.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(H),L.direction.transformDirection(M),R++}else if(D.isRectAreaLight){let L=Y.rectArea[z];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),Q.identity(),X.copy(D.matrixWorld),X.premultiply(M),Q.extractRotation(X),L.halfWidth.set(D.width*0.5,0,0),L.halfHeight.set(0,D.height*0.5,0),L.halfWidth.applyMatrix4(Q),L.halfHeight.applyMatrix4(Q),z++}else if(D.isPointLight){let L=Y.point[K];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),K++}else if(D.isHemisphereLight){let L=Y.hemi[B];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),B++}}}return{setup:W,setupView:U,state:Y}}function DM(J){let w=new bV(J),Z=[],Y=[];function H(q){G.camera=q,Z.length=0,Y.length=0}function X(q){Z.push(q)}function Q(q){Y.push(q)}function W(){w.setup(Z)}function U(q){w.setupView(Z,q)}let G={lightsArray:Z,shadowsArray:Y,camera:null,lights:w,transmissionRenderTarget:{}};return{init:H,state:G,setupLights:W,setupLightsView:U,pushLight:X,pushShadow:Q}}function xV(J){let w=new WeakMap;function Z(H,X=0){let Q=w.get(H),W;if(Q===void 0)W=new DM(J),w.set(H,[W]);else if(X>=Q.length)W=new DM(J),Q.push(W);else W=Q[X];return W}function Y(){w=new WeakMap}return{get:Z,dispose:Y}}var hV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vV=`uniform sampler2D shadow_pass;
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
}`;function yV(J,w,Z){let Y=new Bw,H=new r0,X=new r0,Q=new Q9,W=new xU({depthPacking:CD}),U=new hU,G={},q=Z.maxTextureSize,$={[h5]:f8,[f8]:h5,[O6]:O6},K=new F6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new r0},radius:{value:4}},vertexShader:hV,fragmentShader:vV}),R=K.clone();R.defines.HORIZONTAL_PASS=1;let z=new a6;z.setAttribute("position",new n8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new N8(z,K),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yW;let k=this.type;this.render=function(E,A,j){if(M.enabled===!1)return;if(M.autoUpdate===!1&&M.needsUpdate===!1)return;if(E.length===0)return;let _=J.getRenderTarget(),F=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(j7),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let p=k!==M6&&this.type===M6,l=k===M6&&this.type!==M6;for(let o=0,m=E.length;o<m;o++){let a=E[o],d=a.shadow;if(d===void 0){console.warn("THREE.WebGLShadowMap:",a,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;H.copy(d.mapSize);let Z0=d.getFrameExtents();if(H.multiply(Z0),X.copy(d.mapSize),H.x>q||H.y>q){if(H.x>q)X.x=Math.floor(q/Z0.x),H.x=X.x*Z0.x,d.mapSize.x=X.x;if(H.y>q)X.y=Math.floor(q/Z0.y),H.y=X.y*Z0.y,d.mapSize.y=X.y}if(d.map===null||p===!0||l===!0){let I0=this.type!==M6?{minFilter:g5,magFilter:g5}:{};if(d.map!==null)d.map.dispose();d.map=new n6(H.x,H.y,I0),d.map.texture.name=a.name+".shadowMap",d.camera.updateProjectionMatrix()}J.setRenderTarget(d.map),J.clear();let q0=d.getViewportCount();for(let I0=0;I0<q0;I0++){let K0=d.getViewport(I0);Q.set(X.x*K0.x,X.y*K0.y,X.x*K0.z,X.y*K0.w),y.viewport(Q),d.updateMatrices(a,I0),Y=d.getFrustum(),L(A,j,d.camera,a,this.type)}if(d.isPointLightShadow!==!0&&this.type===M6)O(d,j);d.needsUpdate=!1}k=this.type,M.needsUpdate=!1,J.setRenderTarget(_,F,C)};function O(E,A){let j=w.update(B);if(K.defines.VSM_SAMPLES!==E.blurSamples)K.defines.VSM_SAMPLES=E.blurSamples,R.defines.VSM_SAMPLES=E.blurSamples,K.needsUpdate=!0,R.needsUpdate=!0;if(E.mapPass===null)E.mapPass=new n6(H.x,H.y);K.uniforms.shadow_pass.value=E.map.texture,K.uniforms.resolution.value=E.mapSize,K.uniforms.radius.value=E.radius,J.setRenderTarget(E.mapPass),J.clear(),J.renderBufferDirect(A,null,j,K,B,null),R.uniforms.shadow_pass.value=E.mapPass.texture,R.uniforms.resolution.value=E.mapSize,R.uniforms.radius.value=E.radius,J.setRenderTarget(E.map),J.clear(),J.renderBufferDirect(A,null,j,R,B,null)}function D(E,A,j,_){let F=null,C=j.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)F=C;else if(F=j.isPointLight===!0?U:W,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let y=F.uuid,p=A.uuid,l=G[y];if(l===void 0)l={},G[y]=l;let o=l[p];if(o===void 0)o=F.clone(),l[p]=o,A.addEventListener("dispose",T);F=o}if(F.visible=A.visible,F.wireframe=A.wireframe,_===M6)F.side=A.shadowSide!==null?A.shadowSide:A.side;else F.side=A.shadowSide!==null?A.shadowSide:$[A.side];if(F.alphaMap=A.alphaMap,F.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,F.map=A.map,F.clipShadows=A.clipShadows,F.clippingPlanes=A.clippingPlanes,F.clipIntersection=A.clipIntersection,F.displacementMap=A.displacementMap,F.displacementScale=A.displacementScale,F.displacementBias=A.displacementBias,F.wireframeLinewidth=A.wireframeLinewidth,F.linewidth=A.linewidth,j.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let y=J.properties.get(F);y.light=j}return F}function L(E,A,j,_,F){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)){if((E.castShadow||E.receiveShadow&&F===M6)&&(!E.frustumCulled||Y.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld);let p=w.update(E),l=E.material;if(Array.isArray(l)){let o=p.groups;for(let m=0,a=o.length;m<a;m++){let d=o[m],Z0=l[d.materialIndex];if(Z0&&Z0.visible){let q0=D(E,Z0,_,F);E.onBeforeShadow(J,E,A,j,p,q0,d),J.renderBufferDirect(j,null,p,q0,E,d),E.onAfterShadow(J,E,A,j,p,q0,d)}}}else if(l.visible){let o=D(E,l,_,F);E.onBeforeShadow(J,E,A,j,p,o,null),J.renderBufferDirect(j,null,p,o,E,null),E.onAfterShadow(J,E,A,j,p,o,null)}}}let y=E.children;for(let p=0,l=y.length;p<l;p++)L(y[p],A,j,_,F)}function T(E){E.target.removeEventListener("dispose",T);for(let j in G){let _=G[j],F=E.target.uuid;if(F in _)_[F].dispose(),delete _[F]}}}var gV={[PY]:SY,[jY]:xY,[fY]:hY,[kw]:bY,[SY]:PY,[xY]:jY,[hY]:fY,[bY]:kw};function lV(J,w){function Z(){let S=!1,W0=new Q9,H0=null,D0=new Q9(0,0,0,0);return{setMask:function(t){if(H0!==t&&!S)J.colorMask(t,t,t,t),H0=t},setLocked:function(t){S=t},setClear:function(t,n,O0,h0,K9){if(K9===!0)t*=h0,n*=h0,O0*=h0;if(W0.set(t,n,O0,h0),D0.equals(W0)===!1)J.clearColor(t,n,O0,h0),D0.copy(W0)},reset:function(){S=!1,H0=null,D0.set(-1,0,0,0)}}}function Y(){let S=!1,W0=!1,H0=null,D0=null,t=null;return{setReversed:function(n){if(W0!==n){let O0=w.get("EXT_clip_control");if(n)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);W0=n;let h0=t;t=null,this.setClear(h0)}},getReversed:function(){return W0},setTest:function(n){if(n)Y0(J.DEPTH_TEST);else z0(J.DEPTH_TEST)},setMask:function(n){if(H0!==n&&!S)J.depthMask(n),H0=n},setFunc:function(n){if(W0)n=gV[n];if(D0!==n){switch(n){case PY:J.depthFunc(J.NEVER);break;case SY:J.depthFunc(J.ALWAYS);break;case jY:J.depthFunc(J.LESS);break;case kw:J.depthFunc(J.LEQUAL);break;case fY:J.depthFunc(J.EQUAL);break;case bY:J.depthFunc(J.GEQUAL);break;case xY:J.depthFunc(J.GREATER);break;case hY:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=n}},setLocked:function(n){S=n},setClear:function(n){if(t!==n){if(W0)n=1-n;J.clearDepth(n),t=n}},reset:function(){S=!1,H0=null,D0=null,t=null,W0=!1}}}function H(){let S=!1,W0=null,H0=null,D0=null,t=null,n=null,O0=null,h0=null,K9=null;return{setTest:function(W9){if(!S)if(W9)Y0(J.STENCIL_TEST);else z0(J.STENCIL_TEST)},setMask:function(W9){if(W0!==W9&&!S)J.stencilMask(W9),W0=W9},setFunc:function(W9,Q6,W6){if(H0!==W9||D0!==Q6||t!==W6)J.stencilFunc(W9,Q6,W6),H0=W9,D0=Q6,t=W6},setOp:function(W9,Q6,W6){if(n!==W9||O0!==Q6||h0!==W6)J.stencilOp(W9,Q6,W6),n=W9,O0=Q6,h0=W6},setLocked:function(W9){S=W9},setClear:function(W9){if(K9!==W9)J.clearStencil(W9),K9=W9},reset:function(){S=!1,W0=null,H0=null,D0=null,t=null,n=null,O0=null,h0=null,K9=null}}}let X=new Z,Q=new Y,W=new H,U=new WeakMap,G=new WeakMap,q={},$={},K=new WeakMap,R=[],z=null,B=!1,M=null,k=null,O=null,D=null,L=null,T=null,E=null,A=new m0(0,0,0),j=0,_=!1,F=null,C=null,y=null,p=null,l=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,a=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(d)[1]),m=a>=1;else if(d.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),m=a>=2;let Z0=null,q0={},I0=J.getParameter(J.SCISSOR_BOX),K0=J.getParameter(J.VIEWPORT),e0=new Q9().fromArray(I0),p0=new Q9().fromArray(K0);function i(S,W0,H0,D0){let t=new Uint8Array(4),n=J.createTexture();J.bindTexture(S,n),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<H0;O0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(W0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,t);else J.texImage2D(W0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,t);return n}let X0={};X0[J.TEXTURE_2D]=i(J.TEXTURE_2D,J.TEXTURE_2D,1),X0[J.TEXTURE_CUBE_MAP]=i(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),X0[J.TEXTURE_2D_ARRAY]=i(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),X0[J.TEXTURE_3D]=i(J.TEXTURE_3D,J.TEXTURE_3D,1,1),X.setClear(0,0,0,1),Q.setClear(1),W.setClear(0),Y0(J.DEPTH_TEST),Q.setFunc(kw),N0(!1),V9(vW),Y0(J.CULL_FACE),v0(j7);function Y0(S){if(q[S]!==!0)J.enable(S),q[S]=!0}function z0(S){if(q[S]!==!1)J.disable(S),q[S]=!1}function b0(S,W0){if($[S]!==W0){if(J.bindFramebuffer(S,W0),$[S]=W0,S===J.DRAW_FRAMEBUFFER)$[J.FRAMEBUFFER]=W0;if(S===J.FRAMEBUFFER)$[J.DRAW_FRAMEBUFFER]=W0;return!0}return!1}function x0(S,W0){let H0=R,D0=!1;if(S){if(H0=K.get(W0),H0===void 0)H0=[],K.set(W0,H0);let t=S.textures;if(H0.length!==t.length||H0[0]!==J.COLOR_ATTACHMENT0){for(let n=0,O0=t.length;n<O0;n++)H0[n]=J.COLOR_ATTACHMENT0+n;H0.length=t.length,D0=!0}}else if(H0[0]!==J.BACK)H0[0]=J.BACK,D0=!0;if(D0)J.drawBuffers(H0)}function d9(S){if(z!==S)return J.useProgram(S),z=S,!0;return!1}let P={[v5]:J.FUNC_ADD,[pR]:J.FUNC_SUBTRACT,[dR]:J.FUNC_REVERSE_SUBTRACT};P[mR]=J.MIN,P[uR]=J.MAX;let B9={[cR]:J.ZERO,[iR]:J.ONE,[sR]:J.SRC_COLOR,[nR]:J.SRC_ALPHA,[wD]:J.SRC_ALPHA_SATURATE,[eR]:J.DST_COLOR,[rR]:J.DST_ALPHA,[oR]:J.ONE_MINUS_SRC_COLOR,[aR]:J.ONE_MINUS_SRC_ALPHA,[JD]:J.ONE_MINUS_DST_COLOR,[tR]:J.ONE_MINUS_DST_ALPHA,[ZD]:J.CONSTANT_COLOR,[YD]:J.ONE_MINUS_CONSTANT_COLOR,[HD]:J.CONSTANT_ALPHA,[XD]:J.ONE_MINUS_CONSTANT_ALPHA};function v0(S,W0,H0,D0,t,n,O0,h0,K9,W9){if(S===j7){if(B===!0)z0(J.BLEND),B=!1;return}if(B===!1)Y0(J.BLEND),B=!0;if(S!==lR){if(S!==M||W9!==_){if(k!==v5||L!==v5)J.blendEquation(J.FUNC_ADD),k=v5,L=v5;if(W9)switch(S){case qw:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case gW:J.blendFunc(J.ONE,J.ONE);break;case lW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case pW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case qw:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case gW:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case lW:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pW:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}O=null,D=null,T=null,E=null,A.set(0,0,0),j=0,M=S,_=W9}return}if(t=t||W0,n=n||H0,O0=O0||D0,W0!==k||t!==L)J.blendEquationSeparate(P[W0],P[t]),k=W0,L=t;if(H0!==O||D0!==D||n!==T||O0!==E)J.blendFuncSeparate(B9[H0],B9[D0],B9[n],B9[O0]),O=H0,D=D0,T=n,E=O0;if(h0.equals(A)===!1||K9!==j)J.blendColor(h0.r,h0.g,h0.b,K9),A.copy(h0),j=K9;M=S,_=!1}function f0(S,W0){S.side===O6?z0(J.CULL_FACE):Y0(J.CULL_FACE);let H0=S.side===f8;if(W0)H0=!H0;N0(H0),S.blending===qw&&S.transparent===!1?v0(j7):v0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),Q.setFunc(S.depthFunc),Q.setTest(S.depthTest),Q.setMask(S.depthWrite),X.setMask(S.colorWrite);let D0=S.stencilWrite;if(W.setTest(D0),D0)W.setMask(S.stencilWriteMask),W.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),W.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);C0(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Y0(J.SAMPLE_ALPHA_TO_COVERAGE):z0(J.SAMPLE_ALPHA_TO_COVERAGE)}function N0(S){if(F!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);F=S}}function V9(S){if(S!==vR){if(Y0(J.CULL_FACE),S!==C)if(S===vW)J.cullFace(J.BACK);else if(S===yR)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else z0(J.CULL_FACE);C=S}function _0(S){if(S!==y){if(m)J.lineWidth(S);y=S}}function C0(S,W0,H0){if(S){if(Y0(J.POLYGON_OFFSET_FILL),p!==W0||l!==H0)J.polygonOffset(W0,H0),p=W0,l=H0}else z0(J.POLYGON_OFFSET_FILL)}function o9(S){if(S)Y0(J.SCISSOR_TEST);else z0(J.SCISSOR_TEST)}function m9(S){if(S===void 0)S=J.TEXTURE0+o-1;if(Z0!==S)J.activeTexture(S),Z0=S}function S9(S,W0,H0){if(H0===void 0)if(Z0===null)H0=J.TEXTURE0+o-1;else H0=Z0;let D0=q0[H0];if(D0===void 0)D0={type:void 0,texture:void 0},q0[H0]=D0;if(D0.type!==S||D0.texture!==W0){if(Z0!==H0)J.activeTexture(H0),Z0=H0;J.bindTexture(S,W0||X0[S]),D0.type=S,D0.texture=W0}}function I(){let S=q0[Z0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function N(){try{J.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function s(){try{J.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function r(){try{J.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function u(){try{J.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function R0(){try{J.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function w0(){try{J.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function F0(){try{J.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function S0(){try{J.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J0(){try{J.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function G0(S){if(e0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),e0.copy(S)}function L0(S){if(p0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),p0.copy(S)}function B0(S,W0){let H0=G.get(W0);if(H0===void 0)H0=new WeakMap,G.set(W0,H0);let D0=H0.get(S);if(D0===void 0)D0=J.getUniformBlockIndex(W0,S.name),H0.set(S,D0)}function k0(S,W0){let D0=G.get(W0).get(S);if(U.get(W0)!==D0)J.uniformBlockBinding(W0,D0,S.__bindingPointIndex),U.set(W0,D0)}function d0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Q.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),q={},Z0=null,q0={},$={},K=new WeakMap,R=[],z=null,B=!1,M=null,k=null,O=null,D=null,L=null,T=null,E=null,A=new m0(0,0,0),j=0,_=!1,F=null,C=null,y=null,p=null,l=null,e0.set(0,0,J.canvas.width,J.canvas.height),p0.set(0,0,J.canvas.width,J.canvas.height),X.reset(),Q.reset(),W.reset()}return{buffers:{color:X,depth:Q,stencil:W},enable:Y0,disable:z0,bindFramebuffer:b0,drawBuffers:x0,useProgram:d9,setBlending:v0,setMaterial:f0,setFlipSided:N0,setCullFace:V9,setLineWidth:_0,setPolygonOffset:C0,setScissorTest:o9,activeTexture:m9,bindTexture:S9,unbindTexture:I,compressedTexImage2D:N,compressedTexImage3D:h,texImage2D:S0,texImage3D:J0,updateUBOMapping:B0,uniformBlockBinding:k0,texStorage2D:w0,texStorage3D:F0,texSubImage2D:s,texSubImage3D:r,compressedTexSubImage2D:u,compressedTexSubImage3D:R0,scissor:G0,viewport:L0,reset:d0}}function pV(J,w,Z,Y,H,X,Q){let W=w.has("WEBGL_multisampled_render_to_texture")?w.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new r0,q=new WeakMap,$,K=new WeakMap,R=!1;try{R=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function z(I,N){return R?new OffscreenCanvas(I,N):Gw("canvas")}function B(I,N,h){let s=1,r=S9(I);if(r.width>h||r.height>h)s=h/Math.max(r.width,r.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&I instanceof VideoFrame){let u=Math.floor(s*r.width),R0=Math.floor(s*r.height);if($===void 0)$=z(u,R0);let w0=N?z(u,R0):$;return w0.width=u,w0.height=R0,w0.getContext("2d").drawImage(I,0,0,u,R0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+u+"x"+R0+")."),w0}else{if("data"in I)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return I}return I}function M(I){return I.generateMipmaps}function k(I){J.generateMipmap(I)}function O(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function D(I,N,h,s,r=!1){if(I!==null){if(J[I]!==void 0)return J[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let u=N;if(N===J.RED){if(h===J.FLOAT)u=J.R32F;if(h===J.HALF_FLOAT)u=J.R16F;if(h===J.UNSIGNED_BYTE)u=J.R8}if(N===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.R8UI;if(h===J.UNSIGNED_SHORT)u=J.R16UI;if(h===J.UNSIGNED_INT)u=J.R32UI;if(h===J.BYTE)u=J.R8I;if(h===J.SHORT)u=J.R16I;if(h===J.INT)u=J.R32I}if(N===J.RG){if(h===J.FLOAT)u=J.RG32F;if(h===J.HALF_FLOAT)u=J.RG16F;if(h===J.UNSIGNED_BYTE)u=J.RG8}if(N===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RG8UI;if(h===J.UNSIGNED_SHORT)u=J.RG16UI;if(h===J.UNSIGNED_INT)u=J.RG32UI;if(h===J.BYTE)u=J.RG8I;if(h===J.SHORT)u=J.RG16I;if(h===J.INT)u=J.RG32I}if(N===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RGB8UI;if(h===J.UNSIGNED_SHORT)u=J.RGB16UI;if(h===J.UNSIGNED_INT)u=J.RGB32UI;if(h===J.BYTE)u=J.RGB8I;if(h===J.SHORT)u=J.RGB16I;if(h===J.INT)u=J.RGB32I}if(N===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(h===J.UNSIGNED_INT)u=J.RGBA32UI;if(h===J.BYTE)u=J.RGBA8I;if(h===J.SHORT)u=J.RGBA16I;if(h===J.INT)u=J.RGBA32I}if(N===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)u=J.R11F_G11F_B10F}if(N===J.RGBA){let R0=r?BU:t0.getTransfer(s);if(h===J.FLOAT)u=J.RGBA32F;if(h===J.HALF_FLOAT)u=J.RGBA16F;if(h===J.UNSIGNED_BYTE)u=R0===M9?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)w.get("EXT_color_buffer_float");return u}function L(I,N){let h;if(I){if(N===null||N===p5||N===d5)h=J.DEPTH24_STENCIL8;else if(N===b7)h=J.DEPTH32F_STENCIL8;else if(N===Rw)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(N===null||N===p5||N===d5)h=J.DEPTH_COMPONENT24;else if(N===b7)h=J.DEPTH_COMPONENT32F;else if(N===Rw)h=J.DEPTH_COMPONENT16;return h}function T(I,N){if(M(I)===!0||I.isFramebufferTexture&&I.minFilter!==g5&&I.minFilter!==R1)return Math.log2(Math.max(N.width,N.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return N.mipmaps.length;else return 1}function E(I){let N=I.target;if(N.removeEventListener("dispose",E),j(N),N.isVideoTexture)q.delete(N)}function A(I){let N=I.target;N.removeEventListener("dispose",A),F(N)}function j(I){let N=Y.get(I);if(N.__webglInit===void 0)return;let h=I.source,s=K.get(h);if(s){let r=s[N.__cacheKey];if(r.usedTimes--,r.usedTimes===0)_(I);if(Object.keys(s).length===0)K.delete(h)}Y.remove(I)}function _(I){let N=Y.get(I);J.deleteTexture(N.__webglTexture);let h=I.source,s=K.get(h);delete s[N.__cacheKey],Q.memory.textures--}function F(I){let N=Y.get(I);if(I.depthTexture)I.depthTexture.dispose(),Y.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(N.__webglFramebuffer[s]))for(let r=0;r<N.__webglFramebuffer[s].length;r++)J.deleteFramebuffer(N.__webglFramebuffer[s][r]);else J.deleteFramebuffer(N.__webglFramebuffer[s]);if(N.__webglDepthbuffer)J.deleteRenderbuffer(N.__webglDepthbuffer[s])}else{if(Array.isArray(N.__webglFramebuffer))for(let s=0;s<N.__webglFramebuffer.length;s++)J.deleteFramebuffer(N.__webglFramebuffer[s]);else J.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer)J.deleteRenderbuffer(N.__webglDepthbuffer);if(N.__webglMultisampledFramebuffer)J.deleteFramebuffer(N.__webglMultisampledFramebuffer);if(N.__webglColorRenderbuffer){for(let s=0;s<N.__webglColorRenderbuffer.length;s++)if(N.__webglColorRenderbuffer[s])J.deleteRenderbuffer(N.__webglColorRenderbuffer[s])}if(N.__webglDepthRenderbuffer)J.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let h=I.textures;for(let s=0,r=h.length;s<r;s++){let u=Y.get(h[s]);if(u.__webglTexture)J.deleteTexture(u.__webglTexture),Q.memory.textures--;Y.remove(h[s])}Y.remove(I)}let C=0;function y(){C=0}function p(){let I=C;if(I>=H.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+H.maxTextures);return C+=1,I}function l(I){let N=[];return N.push(I.wrapS),N.push(I.wrapT),N.push(I.wrapR||0),N.push(I.magFilter),N.push(I.minFilter),N.push(I.anisotropy),N.push(I.internalFormat),N.push(I.format),N.push(I.type),N.push(I.generateMipmaps),N.push(I.premultiplyAlpha),N.push(I.flipY),N.push(I.unpackAlignment),N.push(I.colorSpace),N.join()}function o(I,N){let h=Y.get(I);if(I.isVideoTexture)o9(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&h.__version!==I.version){let s=I.image;if(s===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X0(h,I,N);return}}else if(I.isExternalTexture)h.__webglTexture=I.sourceTexture?I.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+N)}function m(I,N){let h=Y.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&h.__version!==I.version){X0(h,I,N);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+N)}function a(I,N){let h=Y.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&h.__version!==I.version){X0(h,I,N);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+N)}function d(I,N){let h=Y.get(I);if(I.version>0&&h.__version!==I.version){Y0(h,I,N);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+N)}let Z0={[MD]:J.REPEAT,[OD]:J.CLAMP_TO_EDGE,[ND]:J.MIRRORED_REPEAT},q0={[g5]:J.NEAREST,[FD]:J.NEAREST_MIPMAP_NEAREST,[$w]:J.NEAREST_MIPMAP_LINEAR,[R1]:J.LINEAR,[gY]:J.LINEAR_MIPMAP_NEAREST,[l5]:J.LINEAR_MIPMAP_LINEAR},I0={[jD]:J.NEVER,[yD]:J.ALWAYS,[fD]:J.LESS,[VU]:J.LEQUAL,[bD]:J.EQUAL,[vD]:J.GEQUAL,[xD]:J.GREATER,[hD]:J.NOTEQUAL};function K0(I,N){if(N.type===b7&&w.has("OES_texture_float_linear")===!1&&(N.magFilter===R1||N.magFilter===gY||N.magFilter===$w||N.magFilter===l5||N.minFilter===R1||N.minFilter===gY||N.minFilter===$w||N.minFilter===l5))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,Z0[N.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,Z0[N.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,Z0[N.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,q0[N.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,q0[N.minFilter]),N.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,I0[N.compareFunction]);if(w.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===g5)return;if(N.minFilter!==$w&&N.minFilter!==l5)return;if(N.type===b7&&w.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||Y.get(N).__currentAnisotropy){let h=w.get("EXT_texture_filter_anisotropic");J.texParameterf(I,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,H.getMaxAnisotropy())),Y.get(N).__currentAnisotropy=N.anisotropy}}}function e0(I,N){let h=!1;if(I.__webglInit===void 0)I.__webglInit=!0,N.addEventListener("dispose",E);let s=N.source,r=K.get(s);if(r===void 0)r={},K.set(s,r);let u=l(N);if(u!==I.__cacheKey){if(r[u]===void 0)r[u]={texture:J.createTexture(),usedTimes:0},Q.memory.textures++,h=!0;r[u].usedTimes++;let R0=r[I.__cacheKey];if(R0!==void 0){if(r[I.__cacheKey].usedTimes--,R0.usedTimes===0)_(N)}I.__cacheKey=u,I.__webglTexture=r[u].texture}return h}function p0(I,N,h){return Math.floor(Math.floor(I/h)/N)}function i(I,N,h,s){let u=I.updateRanges;if(u.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,N.width,N.height,h,s,N.data);else{u.sort((J0,G0)=>J0.start-G0.start);let R0=0;for(let J0=1;J0<u.length;J0++){let G0=u[R0],L0=u[J0],B0=G0.start+G0.count,k0=p0(L0.start,N.width,4),d0=p0(G0.start,N.width,4);if(L0.start<=B0+1&&k0===d0&&p0(L0.start+L0.count-1,N.width,4)===k0)G0.count=Math.max(G0.count,L0.start+L0.count-G0.start);else++R0,u[R0]=L0}u.length=R0+1;let w0=J.getParameter(J.UNPACK_ROW_LENGTH),F0=J.getParameter(J.UNPACK_SKIP_PIXELS),S0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,N.width);for(let J0=0,G0=u.length;J0<G0;J0++){let L0=u[J0],B0=Math.floor(L0.start/4),k0=Math.ceil(L0.count/4),d0=B0%N.width,S=Math.floor(B0/N.width),W0=k0,H0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),J.pixelStorei(J.UNPACK_SKIP_ROWS,S),Z.texSubImage2D(J.TEXTURE_2D,0,d0,S,W0,1,h,s,N.data)}I.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,w0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,F0),J.pixelStorei(J.UNPACK_SKIP_ROWS,S0)}}function X0(I,N,h){let s=J.TEXTURE_2D;if(N.isDataArrayTexture||N.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(N.isData3DTexture)s=J.TEXTURE_3D;let r=e0(I,N),u=N.source;Z.bindTexture(s,I.__webglTexture,J.TEXTURE0+h);let R0=Y.get(u);if(u.version!==R0.__version||r===!0){Z.activeTexture(J.TEXTURE0+h);let w0=t0.getPrimaries(t0.workingColorSpace),F0=N.colorSpace===D1?null:t0.getPrimaries(N.colorSpace),S0=N.colorSpace===D1||w0===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,N.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,N.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,S0);let J0=B(N.image,!1,H.maxTextureSize);J0=m9(N,J0);let G0=X.convert(N.format,N.colorSpace),L0=X.convert(N.type),B0=D(N.internalFormat,G0,L0,N.colorSpace,N.isVideoTexture);K0(s,N);let k0,d0=N.mipmaps,S=N.isVideoTexture!==!0,W0=R0.__version===void 0||r===!0,H0=u.dataReady,D0=T(N,J0);if(N.isDepthTexture){if(B0=L(N.format===Mw,N.type),W0)if(S)Z.texStorage2D(J.TEXTURE_2D,1,B0,J0.width,J0.height);else Z.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,G0,L0,null)}else if(N.isDataTexture)if(d0.length>0){if(S&&W0)Z.texStorage2D(J.TEXTURE_2D,D0,B0,d0[0].width,d0[0].height);for(let t=0,n=d0.length;t<n;t++)if(k0=d0[t],S){if(H0)Z.texSubImage2D(J.TEXTURE_2D,t,0,0,k0.width,k0.height,G0,L0,k0.data)}else Z.texImage2D(J.TEXTURE_2D,t,B0,k0.width,k0.height,0,G0,L0,k0.data);N.generateMipmaps=!1}else if(S){if(W0)Z.texStorage2D(J.TEXTURE_2D,D0,B0,J0.width,J0.height);if(H0)i(N,J0,G0,L0)}else Z.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,G0,L0,J0.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){if(S&&W0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,B0,d0[0].width,d0[0].height,J0.depth);for(let t=0,n=d0.length;t<n;t++)if(k0=d0[t],N.format!==N6)if(G0!==null)if(S){if(H0)if(N.layerUpdates.size>0){let O0=rU(k0.width,k0.height,N.format,N.type);for(let h0 of N.layerUpdates){let K9=k0.data.subarray(h0*O0/k0.data.BYTES_PER_ELEMENT,(h0+1)*O0/k0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,h0,k0.width,k0.height,1,G0,K9)}N.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,k0.width,k0.height,J0.depth,G0,k0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,t,B0,k0.width,k0.height,J0.depth,0,k0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(H0)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,k0.width,k0.height,J0.depth,G0,L0,k0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,t,B0,k0.width,k0.height,J0.depth,0,G0,L0,k0.data)}else{if(S&&W0)Z.texStorage2D(J.TEXTURE_2D,D0,B0,d0[0].width,d0[0].height);for(let t=0,n=d0.length;t<n;t++)if(k0=d0[t],N.format!==N6)if(G0!==null)if(S){if(H0)Z.compressedTexSubImage2D(J.TEXTURE_2D,t,0,0,k0.width,k0.height,G0,k0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,t,B0,k0.width,k0.height,0,k0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(H0)Z.texSubImage2D(J.TEXTURE_2D,t,0,0,k0.width,k0.height,G0,L0,k0.data)}else Z.texImage2D(J.TEXTURE_2D,t,B0,k0.width,k0.height,0,G0,L0,k0.data)}else if(N.isDataArrayTexture)if(S){if(W0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,B0,J0.width,J0.height,J0.depth);if(H0)if(N.layerUpdates.size>0){let t=rU(J0.width,J0.height,N.format,N.type);for(let n of N.layerUpdates){let O0=J0.data.subarray(n*t/J0.data.BYTES_PER_ELEMENT,(n+1)*t/J0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,n,J0.width,J0.height,1,G0,L0,O0)}N.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,G0,L0,J0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,J0.width,J0.height,J0.depth,0,G0,L0,J0.data);else if(N.isData3DTexture)if(S){if(W0)Z.texStorage3D(J.TEXTURE_3D,D0,B0,J0.width,J0.height,J0.depth);if(H0)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,G0,L0,J0.data)}else Z.texImage3D(J.TEXTURE_3D,0,B0,J0.width,J0.height,J0.depth,0,G0,L0,J0.data);else if(N.isFramebufferTexture){if(W0)if(S)Z.texStorage2D(J.TEXTURE_2D,D0,B0,J0.width,J0.height);else{let{width:t,height:n}=J0;for(let O0=0;O0<D0;O0++)Z.texImage2D(J.TEXTURE_2D,O0,B0,t,n,0,G0,L0,null),t>>=1,n>>=1}}else if(d0.length>0){if(S&&W0){let t=S9(d0[0]);Z.texStorage2D(J.TEXTURE_2D,D0,B0,t.width,t.height)}for(let t=0,n=d0.length;t<n;t++)if(k0=d0[t],S){if(H0)Z.texSubImage2D(J.TEXTURE_2D,t,0,0,G0,L0,k0)}else Z.texImage2D(J.TEXTURE_2D,t,B0,G0,L0,k0);N.generateMipmaps=!1}else if(S){if(W0){let t=S9(J0);Z.texStorage2D(J.TEXTURE_2D,D0,B0,t.width,t.height)}if(H0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,G0,L0,J0)}else Z.texImage2D(J.TEXTURE_2D,0,B0,G0,L0,J0);if(M(N))k(s);if(R0.__version=u.version,N.onUpdate)N.onUpdate(N)}I.__version=N.version}function Y0(I,N,h){if(N.image.length!==6)return;let s=e0(I,N),r=N.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+h);let u=Y.get(r);if(r.version!==u.__version||s===!0){Z.activeTexture(J.TEXTURE0+h);let R0=t0.getPrimaries(t0.workingColorSpace),w0=N.colorSpace===D1?null:t0.getPrimaries(N.colorSpace),F0=N.colorSpace===D1||R0===w0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,N.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,N.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0);let S0=N.isCompressedTexture||N.image[0].isCompressedTexture,J0=N.image[0]&&N.image[0].isDataTexture,G0=[];for(let n=0;n<6;n++){if(!S0&&!J0)G0[n]=B(N.image[n],!0,H.maxCubemapSize);else G0[n]=J0?N.image[n].image:N.image[n];G0[n]=m9(N,G0[n])}let L0=G0[0],B0=X.convert(N.format,N.colorSpace),k0=X.convert(N.type),d0=D(N.internalFormat,B0,k0,N.colorSpace),S=N.isVideoTexture!==!0,W0=u.__version===void 0||s===!0,H0=r.dataReady,D0=T(N,L0);K0(J.TEXTURE_CUBE_MAP,N);let t;if(S0){if(S&&W0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,D0,d0,L0.width,L0.height);for(let n=0;n<6;n++){t=G0[n].mipmaps;for(let O0=0;O0<t.length;O0++){let h0=t[O0];if(N.format!==N6)if(B0!==null)if(S){if(H0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0,0,0,h0.width,h0.height,B0,h0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0,d0,h0.width,h0.height,0,h0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0,0,0,h0.width,h0.height,B0,k0,h0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0,d0,h0.width,h0.height,0,B0,k0,h0.data)}}}else{if(t=N.mipmaps,S&&W0){if(t.length>0)D0++;let n=S9(G0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,D0,d0,n.width,n.height)}for(let n=0;n<6;n++)if(J0){if(S){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,G0[n].width,G0[n].height,B0,k0,G0[n].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,d0,G0[n].width,G0[n].height,0,B0,k0,G0[n].data);for(let O0=0;O0<t.length;O0++){let K9=t[O0].image[n].image;if(S){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0+1,0,0,K9.width,K9.height,B0,k0,K9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0+1,d0,K9.width,K9.height,0,B0,k0,K9.data)}}else{if(S){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,B0,k0,G0[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,d0,B0,k0,G0[n]);for(let O0=0;O0<t.length;O0++){let h0=t[O0];if(S){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0+1,0,0,B0,k0,h0.image[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,O0+1,d0,B0,k0,h0.image[n])}}}if(M(N))k(J.TEXTURE_CUBE_MAP);if(u.__version=r.version,N.onUpdate)N.onUpdate(N)}I.__version=N.version}function z0(I,N,h,s,r,u){let R0=X.convert(h.format,h.colorSpace),w0=X.convert(h.type),F0=D(h.internalFormat,R0,w0,h.colorSpace),S0=Y.get(N),J0=Y.get(h);if(J0.__renderTarget=N,!S0.__hasExternalTextures){let G0=Math.max(1,N.width>>u),L0=Math.max(1,N.height>>u);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Z.texImage3D(r,u,F0,G0,L0,N.depth,0,R0,w0,null);else Z.texImage2D(r,u,F0,G0,L0,0,R0,w0,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,I),C0(N))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,r,J0.__webglTexture,0,_0(N));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,r,J0.__webglTexture,u);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function b0(I,N,h){if(J.bindRenderbuffer(J.RENDERBUFFER,I),N.depthBuffer){let s=N.depthTexture,r=s&&s.isDepthTexture?s.type:null,u=L(N.stencilBuffer,r),R0=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,w0=_0(N);if(C0(N))W.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,w0,u,N.width,N.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,w0,u,N.width,N.height);else J.renderbufferStorage(J.RENDERBUFFER,u,N.width,N.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,R0,J.RENDERBUFFER,I)}else{let s=N.textures;for(let r=0;r<s.length;r++){let u=s[r],R0=X.convert(u.format,u.colorSpace),w0=X.convert(u.type),F0=D(u.internalFormat,R0,w0,u.colorSpace),S0=_0(N);if(h&&C0(N)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,S0,F0,N.width,N.height);else if(C0(N))W.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,S0,F0,N.width,N.height);else J.renderbufferStorage(J.RENDERBUFFER,F0,N.width,N.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function x0(I,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,I),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let s=Y.get(N.depthTexture);if(s.__renderTarget=N,!s.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0;o(N.depthTexture,0);let r=s.__webglTexture,u=_0(N);if(N.depthTexture.format===lY)if(C0(N))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(N.depthTexture.format===Mw)if(C0(N))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw new Error("Unknown depthTexture format")}function d9(I){let N=Y.get(I),h=I.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==I.depthTexture){let s=I.depthTexture;if(N.__depthDisposeCallback)N.__depthDisposeCallback();if(s){let r=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,s.removeEventListener("dispose",r)};s.addEventListener("dispose",r),N.__depthDisposeCallback=r}N.__boundDepthTexture=s}if(I.depthTexture&&!N.__autoAllocateDepthBuffer){if(h)throw new Error("target.depthTexture not supported in Cube render targets");let s=I.texture.mipmaps;if(s&&s.length>0)x0(N.__webglFramebuffer[0],I);else x0(N.__webglFramebuffer,I)}else if(h){N.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer[s]),N.__webglDepthbuffer[s]===void 0)N.__webglDepthbuffer[s]=J.createRenderbuffer(),b0(N.__webglDepthbuffer[s],I,!1);else{let r=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=N.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,u)}}else{let s=I.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer);if(N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=J.createRenderbuffer(),b0(N.__webglDepthbuffer,I,!1);else{let r=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=N.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,u)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function P(I,N,h){let s=Y.get(I);if(N!==void 0)z0(s.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)d9(I)}function B9(I){let N=I.texture,h=Y.get(I),s=Y.get(N);I.addEventListener("dispose",A);let r=I.textures,u=I.isWebGLCubeRenderTarget===!0,R0=r.length>1;if(!R0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=N.version,Q.memory.textures++}if(u){h.__webglFramebuffer=[];for(let w0=0;w0<6;w0++)if(N.mipmaps&&N.mipmaps.length>0){h.__webglFramebuffer[w0]=[];for(let F0=0;F0<N.mipmaps.length;F0++)h.__webglFramebuffer[w0][F0]=J.createFramebuffer()}else h.__webglFramebuffer[w0]=J.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){h.__webglFramebuffer=[];for(let w0=0;w0<N.mipmaps.length;w0++)h.__webglFramebuffer[w0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(R0)for(let w0=0,F0=r.length;w0<F0;w0++){let S0=Y.get(r[w0]);if(S0.__webglTexture===void 0)S0.__webglTexture=J.createTexture(),Q.memory.textures++}if(I.samples>0&&C0(I)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let w0=0;w0<r.length;w0++){let F0=r[w0];h.__webglColorRenderbuffer[w0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[w0]);let S0=X.convert(F0.format,F0.colorSpace),J0=X.convert(F0.type),G0=D(F0.internalFormat,S0,J0,F0.colorSpace,I.isXRRenderTarget===!0),L0=_0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,L0,G0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+w0,J.RENDERBUFFER,h.__webglColorRenderbuffer[w0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),b0(h.__webglDepthRenderbuffer,I,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(u){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),K0(J.TEXTURE_CUBE_MAP,N);for(let w0=0;w0<6;w0++)if(N.mipmaps&&N.mipmaps.length>0)for(let F0=0;F0<N.mipmaps.length;F0++)z0(h.__webglFramebuffer[w0][F0],I,N,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+w0,F0);else z0(h.__webglFramebuffer[w0],I,N,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+w0,0);if(M(N))k(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(R0){for(let w0=0,F0=r.length;w0<F0;w0++){let S0=r[w0],J0=Y.get(S0),G0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)G0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(G0,J0.__webglTexture),K0(G0,S0),z0(h.__webglFramebuffer,I,S0,J.COLOR_ATTACHMENT0+w0,G0,0),M(S0))k(G0)}Z.unbindTexture()}else{let w0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)w0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(w0,s.__webglTexture),K0(w0,N),N.mipmaps&&N.mipmaps.length>0)for(let F0=0;F0<N.mipmaps.length;F0++)z0(h.__webglFramebuffer[F0],I,N,J.COLOR_ATTACHMENT0,w0,F0);else z0(h.__webglFramebuffer,I,N,J.COLOR_ATTACHMENT0,w0,0);if(M(N))k(w0);Z.unbindTexture()}if(I.depthBuffer)d9(I)}function v0(I){let N=I.textures;for(let h=0,s=N.length;h<s;h++){let r=N[h];if(M(r)){let u=O(I),R0=Y.get(r).__webglTexture;Z.bindTexture(u,R0),k(u),Z.unbindTexture()}}}let f0=[],N0=[];function V9(I){if(I.samples>0){if(C0(I)===!1){let{textures:N,width:h,height:s}=I,r=J.COLOR_BUFFER_BIT,u=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,R0=Y.get(I),w0=N.length>1;if(w0)for(let S0=0;S0<N.length;S0++)Z.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+S0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+S0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,R0.__webglMultisampledFramebuffer);let F0=I.texture.mipmaps;if(F0&&F0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer);for(let S0=0;S0<N.length;S0++){if(I.resolveDepthBuffer){if(I.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(w0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[S0]);let J0=Y.get(N[S0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,J0,0)}if(J.blitFramebuffer(0,0,h,s,0,0,h,s,r,J.NEAREST),U===!0){if(f0.length=0,N0.length=0,f0.push(J.COLOR_ATTACHMENT0+S0),I.depthBuffer&&I.resolveDepthBuffer===!1)f0.push(u),N0.push(u),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,N0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,f0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),w0)for(let S0=0;S0<N.length;S0++){Z.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+S0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[S0]);let J0=Y.get(N[S0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+S0,J.TEXTURE_2D,J0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&U){let N=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[N])}}}function _0(I){return Math.min(H.maxSamples,I.samples)}function C0(I){let N=Y.get(I);return I.samples>0&&w.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function o9(I){let N=Q.render.frame;if(q.get(I)!==N)q.set(I,N),I.update()}function m9(I,N){let{colorSpace:h,format:s,type:r}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return N;if(h!==Ow&&h!==D1)if(t0.getTransfer(h)===M9){if(s!==N6||r!==f7)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return N}function S9(I){if(typeof HTMLImageElement!=="undefined"&&I instanceof HTMLImageElement)G.width=I.naturalWidth||I.width,G.height=I.naturalHeight||I.height;else if(typeof VideoFrame!=="undefined"&&I instanceof VideoFrame)G.width=I.displayWidth,G.height=I.displayHeight;else G.width=I.width,G.height=I.height;return G}this.allocateTextureUnit=p,this.resetTextureUnits=y,this.setTexture2D=o,this.setTexture2DArray=m,this.setTexture3D=a,this.setTextureCube=d,this.rebindTextures=P,this.setupRenderTarget=B9,this.updateRenderTargetMipmap=v0,this.updateMultisampleRenderTarget=V9,this.setupDepthRenderbuffer=d9,this.setupFrameBufferTexture=z0,this.useMultisampledRTT=C0}function dV(J,w){function Z(Y,H=D1){let X,Q=t0.getTransfer(H);if(Y===f7)return J.UNSIGNED_BYTE;if(Y===mW)return J.UNSIGNED_SHORT_4_4_4_4;if(Y===uW)return J.UNSIGNED_SHORT_5_5_5_1;if(Y===BD)return J.UNSIGNED_INT_5_9_9_9_REV;if(Y===VD)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Y===zD)return J.BYTE;if(Y===LD)return J.SHORT;if(Y===Rw)return J.UNSIGNED_SHORT;if(Y===dW)return J.INT;if(Y===p5)return J.UNSIGNED_INT;if(Y===b7)return J.FLOAT;if(Y===Dw)return J.HALF_FLOAT;if(Y===_D)return J.ALPHA;if(Y===AD)return J.RGB;if(Y===N6)return J.RGBA;if(Y===lY)return J.DEPTH_COMPONENT;if(Y===Mw)return J.DEPTH_STENCIL;if(Y===ED)return J.RED;if(Y===cW)return J.RED_INTEGER;if(Y===ID)return J.RG;if(Y===iW)return J.RG_INTEGER;if(Y===sW)return J.RGBA_INTEGER;if(Y===pY||Y===dY||Y===mY||Y===uY)if(Q===M9)if(X=w.get("WEBGL_compressed_texture_s3tc_srgb"),X!==null){if(Y===pY)return X.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Y===dY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Y===mY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Y===uY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(X=w.get("WEBGL_compressed_texture_s3tc"),X!==null){if(Y===pY)return X.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Y===dY)return X.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Y===mY)return X.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Y===uY)return X.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Y===oW||Y===nW||Y===aW||Y===rW)if(X=w.get("WEBGL_compressed_texture_pvrtc"),X!==null){if(Y===oW)return X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Y===nW)return X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Y===aW)return X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Y===rW)return X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Y===tW||Y===eW||Y===JU)if(X=w.get("WEBGL_compressed_texture_etc"),X!==null){if(Y===tW||Y===eW)return Q===M9?X.COMPRESSED_SRGB8_ETC2:X.COMPRESSED_RGB8_ETC2;if(Y===JU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:X.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Y===wU||Y===ZU||Y===YU||Y===HU||Y===XU||Y===QU||Y===WU||Y===UU||Y===GU||Y===qU||Y===kU||Y===KU||Y===$U||Y===RU)if(X=w.get("WEBGL_compressed_texture_astc"),X!==null){if(Y===wU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:X.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Y===ZU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:X.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Y===YU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:X.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Y===HU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:X.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Y===XU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:X.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Y===QU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:X.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Y===WU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:X.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Y===UU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:X.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Y===GU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:X.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Y===qU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:X.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Y===kU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:X.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Y===KU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:X.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Y===$U)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:X.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Y===RU)return Q===M9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:X.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Y===DU||Y===MU||Y===OU)if(X=w.get("EXT_texture_compression_bptc"),X!==null){if(Y===DU)return Q===M9?X.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:X.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Y===MU)return X.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Y===OU)return X.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Y===NU||Y===FU||Y===zU||Y===LU)if(X=w.get("EXT_texture_compression_rgtc"),X!==null){if(Y===NU)return X.COMPRESSED_RED_RGTC1_EXT;if(Y===FU)return X.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Y===zU)return X.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Y===LU)return X.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Y===d5)return J.UNSIGNED_INT_24_8;return J[Y]!==void 0?J[Y]:null}return{convert:Z}}var mV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uV=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,w){if(this.texture===null){let Z=new JH(J.texture);if(J.depthNear!==w.depthNear||J.depthFar!==w.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let w=J.cameras[0].viewport,Z=new F6({vertexShader:mV,fragmentShader:uV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:w.z},depthHeight:{value:w.w}}});this.mesh=new N8(new _w(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends x7{constructor(J,w){super();let Z=this,Y=null,H=1,X=null,Q="local-floor",W=1,U=null,G=null,q=null,$=null,K=null,R=null,z=typeof XRWebGLBinding!=="undefined",B=new EM,M={},k=w.getContextAttributes(),O=null,D=null,L=[],T=[],E=new r0,A=null,j=new J8;j.viewport=new Q9;let _=new J8;_.viewport=new Q9;let F=[j,_],C=new oU,y=null,p=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let X0=L[i];if(X0===void 0)X0=new Lw,L[i]=X0;return X0.getTargetRaySpace()},this.getControllerGrip=function(i){let X0=L[i];if(X0===void 0)X0=new Lw,L[i]=X0;return X0.getGripSpace()},this.getHand=function(i){let X0=L[i];if(X0===void 0)X0=new Lw,L[i]=X0;return X0.getHandSpace()};function l(i){let X0=T.indexOf(i.inputSource);if(X0===-1)return;let Y0=L[X0];if(Y0!==void 0)Y0.update(i.inputSource,i.frame,U||X),Y0.dispatchEvent({type:i.type,data:i.inputSource})}function o(){Y.removeEventListener("select",l),Y.removeEventListener("selectstart",l),Y.removeEventListener("selectend",l),Y.removeEventListener("squeeze",l),Y.removeEventListener("squeezestart",l),Y.removeEventListener("squeezeend",l),Y.removeEventListener("end",o),Y.removeEventListener("inputsourceschange",m);for(let i=0;i<L.length;i++){let X0=T[i];if(X0===null)continue;T[i]=null,L[i].disconnect(X0)}y=null,p=null,B.reset();for(let i in M)delete M[i];J.setRenderTarget(O),K=null,$=null,q=null,Y=null,D=null,p0.stop(),Z.isPresenting=!1,J.setPixelRatio(A),J.setSize(E.width,E.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(H=i,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(Q=i,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||X},this.setReferenceSpace=function(i){U=i},this.getBaseLayer=function(){return $!==null?$:K},this.getBinding=function(){if(q===null&&z)q=new XRWebGLBinding(Y,w);return q},this.getFrame=function(){return R},this.getSession=function(){return Y},this.setSession=async function(i){if(Y=i,Y!==null){if(O=J.getRenderTarget(),Y.addEventListener("select",l),Y.addEventListener("selectstart",l),Y.addEventListener("selectend",l),Y.addEventListener("squeeze",l),Y.addEventListener("squeezestart",l),Y.addEventListener("squeezeend",l),Y.addEventListener("end",o),Y.addEventListener("inputsourceschange",m),k.xrCompatible!==!0)await w.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(E),!(z&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Y0={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:H};K=new XRWebGLLayer(Y,w,Y0),Y.updateRenderState({baseLayer:K}),J.setPixelRatio(1),J.setSize(K.framebufferWidth,K.framebufferHeight,!1),D=new n6(K.framebufferWidth,K.framebufferHeight,{format:N6,type:f7,colorSpace:J.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:K.ignoreDepthValues===!1,resolveStencilBuffer:K.ignoreDepthValues===!1})}else{let Y0=null,z0=null,b0=null;if(k.depth)b0=k.stencil?w.DEPTH24_STENCIL8:w.DEPTH_COMPONENT24,Y0=k.stencil?Mw:lY,z0=k.stencil?d5:p5;let x0={colorFormat:w.RGBA8,depthFormat:b0,scaleFactor:H};q=this.getBinding(),$=q.createProjectionLayer(x0),Y.updateRenderState({layers:[$]}),J.setPixelRatio(1),J.setSize($.textureWidth,$.textureHeight,!1),D=new n6($.textureWidth,$.textureHeight,{format:N6,type:f7,depthTexture:new eY($.textureWidth,$.textureHeight,z0,void 0,void 0,void 0,void 0,void 0,void 0,Y0),stencilBuffer:k.stencil,colorSpace:J.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:$.ignoreDepthValues===!1,resolveStencilBuffer:$.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(W),U=null,X=await Y.requestReferenceSpace(Q),p0.setContext(Y),p0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Y!==null)return Y.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function m(i){for(let X0=0;X0<i.removed.length;X0++){let Y0=i.removed[X0],z0=T.indexOf(Y0);if(z0>=0)T[z0]=null,L[z0].disconnect(Y0)}for(let X0=0;X0<i.added.length;X0++){let Y0=i.added[X0],z0=T.indexOf(Y0);if(z0===-1){for(let x0=0;x0<L.length;x0++)if(x0>=T.length){T.push(Y0),z0=x0;break}else if(T[x0]===null){T[x0]=Y0,z0=x0;break}if(z0===-1)break}let b0=L[z0];if(b0)b0.connect(Y0)}}let a=new x,d=new x;function Z0(i,X0,Y0){a.setFromMatrixPosition(X0.matrixWorld),d.setFromMatrixPosition(Y0.matrixWorld);let z0=a.distanceTo(d),b0=X0.projectionMatrix.elements,x0=Y0.projectionMatrix.elements,d9=b0[14]/(b0[10]-1),P=b0[14]/(b0[10]+1),B9=(b0[9]+1)/b0[5],v0=(b0[9]-1)/b0[5],f0=(b0[8]-1)/b0[0],N0=(x0[8]+1)/x0[0],V9=d9*f0,_0=d9*N0,C0=z0/(-f0+N0),o9=C0*-f0;if(X0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(o9),i.translateZ(C0),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert(),b0[10]===-1)i.projectionMatrix.copy(X0.projectionMatrix),i.projectionMatrixInverse.copy(X0.projectionMatrixInverse);else{let m9=d9+C0,S9=P+C0,I=V9-o9,N=_0+(z0-o9),h=B9*P/S9*m9,s=v0*P/S9*m9;i.projectionMatrix.makePerspective(I,N,h,s,m9,S9),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}}function q0(i,X0){if(X0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(X0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Y===null)return;let{near:X0,far:Y0}=i;if(B.texture!==null){if(B.depthNear>0)X0=B.depthNear;if(B.depthFar>0)Y0=B.depthFar}if(C.near=_.near=j.near=X0,C.far=_.far=j.far=Y0,y!==C.near||p!==C.far)Y.updateRenderState({depthNear:C.near,depthFar:C.far}),y=C.near,p=C.far;C.layers.mask=i.layers.mask|6,j.layers.mask=C.layers.mask&3,_.layers.mask=C.layers.mask&5;let z0=i.parent,b0=C.cameras;q0(C,z0);for(let x0=0;x0<b0.length;x0++)q0(b0[x0],z0);if(b0.length===2)Z0(C,j,_);else C.projectionMatrix.copy(j.projectionMatrix);I0(i,C,z0)};function I0(i,X0,Y0){if(Y0===null)i.matrix.copy(X0.matrixWorld);else i.matrix.copy(Y0.matrixWorld),i.matrix.invert(),i.matrix.multiply(X0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(X0.projectionMatrix),i.projectionMatrixInverse.copy(X0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=K1*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if($===null&&K===null)return;return W},this.setFoveation=function(i){if(W=i,$!==null)$.fixedFoveation=i;if(K!==null&&K.fixedFoveation!==void 0)K.fixedFoveation=i},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(C)},this.getCameraTexture=function(i){return M[i]};let K0=null;function e0(i,X0){if(G=X0.getViewerPose(U||X),R=X0,G!==null){let Y0=G.views;if(K!==null)J.setRenderTargetFramebuffer(D,K.framebuffer),J.setRenderTarget(D);let z0=!1;if(Y0.length!==C.cameras.length)C.cameras.length=0,z0=!0;for(let P=0;P<Y0.length;P++){let B9=Y0[P],v0=null;if(K!==null)v0=K.getViewport(B9);else{let N0=q.getViewSubImage($,B9);if(v0=N0.viewport,P===0)J.setRenderTargetTextures(D,N0.colorTexture,N0.depthStencilTexture),J.setRenderTarget(D)}let f0=F[P];if(f0===void 0)f0=new J8,f0.layers.enable(P),f0.viewport=new Q9,F[P]=f0;if(f0.matrix.fromArray(B9.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(B9.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(v0.x,v0.y,v0.width,v0.height),P===0)C.matrix.copy(f0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(z0===!0)C.cameras.push(f0)}let b0=Y.enabledFeatures;if(b0&&b0.includes("depth-sensing")&&Y.depthUsage=="gpu-optimized"&&z){q=Z.getBinding();let P=q.getDepthInformation(Y0[0]);if(P&&P.isValid&&P.texture)B.init(P,Y.renderState)}if(b0&&b0.includes("camera-access")&&z){J.state.unbindTexture(),q=Z.getBinding();for(let P=0;P<Y0.length;P++){let B9=Y0[P].camera;if(B9){let v0=M[B9];if(!v0)v0=new JH,M[B9]=v0;let f0=q.getCameraImage(B9);v0.sourceTexture=f0}}}}for(let Y0=0;Y0<L.length;Y0++){let z0=T[Y0],b0=L[Y0];if(z0!==null&&b0!==void 0)b0.update(z0,X0,U||X)}if(K0)K0(i,X0);if(X0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:X0});R=null}let p0=new MM;p0.setAnimationLoop(e0),this.setAnimationLoop=function(i){K0=i},this.dispose=function(){}}}var B1=new X6,cV=new I9;function iV(J,w){function Z(M,k){if(M.matrixAutoUpdate===!0)M.updateMatrix();k.value.copy(M.matrix)}function Y(M,k){if(k.color.getRGB(M.fogColor.value,jU(J)),k.isFog)M.fogNear.value=k.near,M.fogFar.value=k.far;else if(k.isFogExp2)M.fogDensity.value=k.density}function H(M,k,O,D,L){if(k.isMeshBasicMaterial)X(M,k);else if(k.isMeshLambertMaterial)X(M,k);else if(k.isMeshToonMaterial)X(M,k),$(M,k);else if(k.isMeshPhongMaterial)X(M,k),q(M,k);else if(k.isMeshStandardMaterial){if(X(M,k),K(M,k),k.isMeshPhysicalMaterial)R(M,k,L)}else if(k.isMeshMatcapMaterial)X(M,k),z(M,k);else if(k.isMeshDepthMaterial)X(M,k);else if(k.isMeshDistanceMaterial)X(M,k),B(M,k);else if(k.isMeshNormalMaterial)X(M,k);else if(k.isLineBasicMaterial){if(Q(M,k),k.isLineDashedMaterial)W(M,k)}else if(k.isPointsMaterial)U(M,k,O,D);else if(k.isSpriteMaterial)G(M,k);else if(k.isShadowMaterial)M.color.value.copy(k.color),M.opacity.value=k.opacity;else if(k.isShaderMaterial)k.uniformsNeedUpdate=!1}function X(M,k){if(M.opacity.value=k.opacity,k.color)M.diffuse.value.copy(k.color);if(k.emissive)M.emissive.value.copy(k.emissive).multiplyScalar(k.emissiveIntensity);if(k.map)M.map.value=k.map,Z(k.map,M.mapTransform);if(k.alphaMap)M.alphaMap.value=k.alphaMap,Z(k.alphaMap,M.alphaMapTransform);if(k.bumpMap){if(M.bumpMap.value=k.bumpMap,Z(k.bumpMap,M.bumpMapTransform),M.bumpScale.value=k.bumpScale,k.side===f8)M.bumpScale.value*=-1}if(k.normalMap){if(M.normalMap.value=k.normalMap,Z(k.normalMap,M.normalMapTransform),M.normalScale.value.copy(k.normalScale),k.side===f8)M.normalScale.value.negate()}if(k.displacementMap)M.displacementMap.value=k.displacementMap,Z(k.displacementMap,M.displacementMapTransform),M.displacementScale.value=k.displacementScale,M.displacementBias.value=k.displacementBias;if(k.emissiveMap)M.emissiveMap.value=k.emissiveMap,Z(k.emissiveMap,M.emissiveMapTransform);if(k.specularMap)M.specularMap.value=k.specularMap,Z(k.specularMap,M.specularMapTransform);if(k.alphaTest>0)M.alphaTest.value=k.alphaTest;let O=w.get(k),D=O.envMap,L=O.envMapRotation;if(D){if(M.envMap.value=D,B1.copy(L),B1.x*=-1,B1.y*=-1,B1.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)B1.y*=-1,B1.z*=-1;M.envMapRotation.value.setFromMatrix4(cV.makeRotationFromEuler(B1)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=k.reflectivity,M.ior.value=k.ior,M.refractionRatio.value=k.refractionRatio}if(k.lightMap)M.lightMap.value=k.lightMap,M.lightMapIntensity.value=k.lightMapIntensity,Z(k.lightMap,M.lightMapTransform);if(k.aoMap)M.aoMap.value=k.aoMap,M.aoMapIntensity.value=k.aoMapIntensity,Z(k.aoMap,M.aoMapTransform)}function Q(M,k){if(M.diffuse.value.copy(k.color),M.opacity.value=k.opacity,k.map)M.map.value=k.map,Z(k.map,M.mapTransform)}function W(M,k){M.dashSize.value=k.dashSize,M.totalSize.value=k.dashSize+k.gapSize,M.scale.value=k.scale}function U(M,k,O,D){if(M.diffuse.value.copy(k.color),M.opacity.value=k.opacity,M.size.value=k.size*O,M.scale.value=D*0.5,k.map)M.map.value=k.map,Z(k.map,M.uvTransform);if(k.alphaMap)M.alphaMap.value=k.alphaMap,Z(k.alphaMap,M.alphaMapTransform);if(k.alphaTest>0)M.alphaTest.value=k.alphaTest}function G(M,k){if(M.diffuse.value.copy(k.color),M.opacity.value=k.opacity,M.rotation.value=k.rotation,k.map)M.map.value=k.map,Z(k.map,M.mapTransform);if(k.alphaMap)M.alphaMap.value=k.alphaMap,Z(k.alphaMap,M.alphaMapTransform);if(k.alphaTest>0)M.alphaTest.value=k.alphaTest}function q(M,k){M.specular.value.copy(k.specular),M.shininess.value=Math.max(k.shininess,0.0001)}function $(M,k){if(k.gradientMap)M.gradientMap.value=k.gradientMap}function K(M,k){if(M.metalness.value=k.metalness,k.metalnessMap)M.metalnessMap.value=k.metalnessMap,Z(k.metalnessMap,M.metalnessMapTransform);if(M.roughness.value=k.roughness,k.roughnessMap)M.roughnessMap.value=k.roughnessMap,Z(k.roughnessMap,M.roughnessMapTransform);if(k.envMap)M.envMapIntensity.value=k.envMapIntensity}function R(M,k,O){if(M.ior.value=k.ior,k.sheen>0){if(M.sheenColor.value.copy(k.sheenColor).multiplyScalar(k.sheen),M.sheenRoughness.value=k.sheenRoughness,k.sheenColorMap)M.sheenColorMap.value=k.sheenColorMap,Z(k.sheenColorMap,M.sheenColorMapTransform);if(k.sheenRoughnessMap)M.sheenRoughnessMap.value=k.sheenRoughnessMap,Z(k.sheenRoughnessMap,M.sheenRoughnessMapTransform)}if(k.clearcoat>0){if(M.clearcoat.value=k.clearcoat,M.clearcoatRoughness.value=k.clearcoatRoughness,k.clearcoatMap)M.clearcoatMap.value=k.clearcoatMap,Z(k.clearcoatMap,M.clearcoatMapTransform);if(k.clearcoatRoughnessMap)M.clearcoatRoughnessMap.value=k.clearcoatRoughnessMap,Z(k.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform);if(k.clearcoatNormalMap){if(M.clearcoatNormalMap.value=k.clearcoatNormalMap,Z(k.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(k.clearcoatNormalScale),k.side===f8)M.clearcoatNormalScale.value.negate()}}if(k.dispersion>0)M.dispersion.value=k.dispersion;if(k.iridescence>0){if(M.iridescence.value=k.iridescence,M.iridescenceIOR.value=k.iridescenceIOR,M.iridescenceThicknessMinimum.value=k.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=k.iridescenceThicknessRange[1],k.iridescenceMap)M.iridescenceMap.value=k.iridescenceMap,Z(k.iridescenceMap,M.iridescenceMapTransform);if(k.iridescenceThicknessMap)M.iridescenceThicknessMap.value=k.iridescenceThicknessMap,Z(k.iridescenceThicknessMap,M.iridescenceThicknessMapTransform)}if(k.transmission>0){if(M.transmission.value=k.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),k.transmissionMap)M.transmissionMap.value=k.transmissionMap,Z(k.transmissionMap,M.transmissionMapTransform);if(M.thickness.value=k.thickness,k.thicknessMap)M.thicknessMap.value=k.thicknessMap,Z(k.thicknessMap,M.thicknessMapTransform);M.attenuationDistance.value=k.attenuationDistance,M.attenuationColor.value.copy(k.attenuationColor)}if(k.anisotropy>0){if(M.anisotropyVector.value.set(k.anisotropy*Math.cos(k.anisotropyRotation),k.anisotropy*Math.sin(k.anisotropyRotation)),k.anisotropyMap)M.anisotropyMap.value=k.anisotropyMap,Z(k.anisotropyMap,M.anisotropyMapTransform)}if(M.specularIntensity.value=k.specularIntensity,M.specularColor.value.copy(k.specularColor),k.specularColorMap)M.specularColorMap.value=k.specularColorMap,Z(k.specularColorMap,M.specularColorMapTransform);if(k.specularIntensityMap)M.specularIntensityMap.value=k.specularIntensityMap,Z(k.specularIntensityMap,M.specularIntensityMapTransform)}function z(M,k){if(k.matcap)M.matcap.value=k.matcap}function B(M,k){let O=w.get(k).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:Y,refreshMaterialUniforms:H}}function sV(J,w,Z,Y){let H={},X={},Q=[],W=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(O,D){let L=D.program;Y.uniformBlockBinding(O,L)}function G(O,D){let L=H[O.id];if(L===void 0)z(O),L=q(O),H[O.id]=L,O.addEventListener("dispose",M);let T=D.program;Y.updateUBOMapping(O,T);let E=w.render.frame;if(X[O.id]!==E)K(O),X[O.id]=E}function q(O){let D=$();O.__bindingPointIndex=D;let L=J.createBuffer(),T=O.__size,E=O.usage;return J.bindBuffer(J.UNIFORM_BUFFER,L),J.bufferData(J.UNIFORM_BUFFER,T,E),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,D,L),L}function $(){for(let O=0;O<W;O++)if(Q.indexOf(O)===-1)return Q.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function K(O){let D=H[O.id],L=O.uniforms,T=O.__cache;J.bindBuffer(J.UNIFORM_BUFFER,D);for(let E=0,A=L.length;E<A;E++){let j=Array.isArray(L[E])?L[E]:[L[E]];for(let _=0,F=j.length;_<F;_++){let C=j[_];if(R(C,E,_,T)===!0){let y=C.__offset,p=Array.isArray(C.value)?C.value:[C.value],l=0;for(let o=0;o<p.length;o++){let m=p[o],a=B(m);if(typeof m==="number"||typeof m==="boolean")C.__data[0]=m,J.bufferSubData(J.UNIFORM_BUFFER,y+l,C.__data);else if(m.isMatrix3)C.__data[0]=m.elements[0],C.__data[1]=m.elements[1],C.__data[2]=m.elements[2],C.__data[3]=0,C.__data[4]=m.elements[3],C.__data[5]=m.elements[4],C.__data[6]=m.elements[5],C.__data[7]=0,C.__data[8]=m.elements[6],C.__data[9]=m.elements[7],C.__data[10]=m.elements[8],C.__data[11]=0;else m.toArray(C.__data,l),l+=a.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,y,C.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(O,D,L,T){let E=O.value,A=D+"_"+L;if(T[A]===void 0){if(typeof E==="number"||typeof E==="boolean")T[A]=E;else T[A]=E.clone();return!0}else{let j=T[A];if(typeof E==="number"||typeof E==="boolean"){if(j!==E)return T[A]=E,!0}else if(j.equals(E)===!1)return j.copy(E),!0}return!1}function z(O){let D=O.uniforms,L=0,T=16;for(let A=0,j=D.length;A<j;A++){let _=Array.isArray(D[A])?D[A]:[D[A]];for(let F=0,C=_.length;F<C;F++){let y=_[F],p=Array.isArray(y.value)?y.value:[y.value];for(let l=0,o=p.length;l<o;l++){let m=p[l],a=B(m),d=L%T,Z0=d%a.boundary,q0=d+Z0;if(L+=Z0,q0!==0&&T-q0<a.storage)L+=T-q0;y.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=L,L+=a.storage}}}let E=L%T;if(E>0)L+=T-E;return O.__size=L,O.__cache={},this}function B(O){let D={boundary:0,storage:0};if(typeof O==="number"||typeof O==="boolean")D.boundary=4,D.storage=4;else if(O.isVector2)D.boundary=8,D.storage=8;else if(O.isVector3||O.isColor)D.boundary=16,D.storage=12;else if(O.isVector4)D.boundary=16,D.storage=16;else if(O.isMatrix3)D.boundary=48,D.storage=48;else if(O.isMatrix4)D.boundary=64,D.storage=64;else if(O.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O);return D}function M(O){let D=O.target;D.removeEventListener("dispose",M);let L=Q.indexOf(D.__bindingPointIndex);Q.splice(L,1),J.deleteBuffer(H[D.id]),delete H[D.id],delete X[D.id]}function k(){for(let O in H)J.deleteBuffer(H[O]);Q=[],H={},X={}}return{bind:U,update:G,dispose:k}}class WG{constructor(J={}){let{canvas:w=gD(),context:Z=null,depth:Y=!0,stencil:H=!1,alpha:X=!1,antialias:Q=!1,premultipliedAlpha:W=!0,preserveDrawingBuffer:U=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:$=!1}=J;this.isWebGLRenderer=!0;let K;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");K=Z.getContextAttributes().alpha}else K=X;let R=new Uint32Array(4),z=new Int32Array(4),B=null,M=null,k=[],O=[];this.domElement=w,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=o6,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,L=!1;this._outputColorSpace=SD;let T=0,E=0,A=null,j=-1,_=null,F=new Q9,C=new Q9,y=null,p=new m0(0),l=0,o=w.width,m=w.height,a=1,d=null,Z0=null,q0=new Q9(0,0,o,m),I0=new Q9(0,0,o,m),K0=!1,e0=new Bw,p0=!1,i=!1,X0=new I9,Y0=new x,z0=new Q9,b0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},x0=!1;function d9(){return A===null?a:1}let P=Z;function B9(V,f){return w.getContext(V,f)}try{let V={alpha:!0,depth:Y,stencil:H,antialias:Q,premultipliedAlpha:W,preserveDrawingBuffer:U,powerPreference:G,failIfMajorPerformanceCaveat:q};if("setAttribute"in w)w.setAttribute("data-engine",`three.js r${hR}`);if(w.addEventListener("webglcontextlost",W0,!1),w.addEventListener("webglcontextrestored",H0,!1),w.addEventListener("webglcontextcreationerror",D0,!1),P===null){if(P=B9("webgl2",V),P===null)if(B9("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(V){throw console.error("THREE.WebGLRenderer: "+V.message),V}let v0,f0,N0,V9,_0,C0,o9,m9,S9,I,N,h,s,r,u,R0,w0,F0,S0,J0,G0,L0,B0,k0;function d0(){if(v0=new k2(P),v0.init(),L0=new dV(P,v0),f0=new H2(P,v0,J,L0),N0=new lV(P,v0),f0.reversedDepthBuffer&&$)N0.buffers.depth.setReversed(!0);V9=new R2(P),_0=new IV,C0=new pV(P,v0,N0,_0,f0,L0,V9),o9=new Q2(D),m9=new q2(D),S9=new zL(P),B0=new Z2(P,S9),I=new K2(P,S9,V9,B0),N=new M2(P,I,S9,V9),S0=new D2(P,f0,C0),R0=new X2(_0),h=new EV(D,o9,m9,v0,f0,B0,R0),s=new iV(D,_0),r=new TV,u=new xV(v0),F0=new w2(D,o9,m9,N0,N,K,W),w0=new yV(D,N,f0),k0=new sV(P,V9,f0,N0),J0=new Y2(P,v0,V9),G0=new $2(P,v0,V9),V9.programs=h.programs,D.capabilities=f0,D.extensions=v0,D.properties=_0,D.renderLists=r,D.shadowMap=w0,D.state=N0,D.info=V9}d0();let S=new IM(D,P);this.xr=S,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let V=v0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=v0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return a},this.setPixelRatio=function(V){if(V===void 0)return;a=V,this.setSize(o,m,!1)},this.getSize=function(V){return V.set(o,m)},this.setSize=function(V,f,v=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=V,m=f,w.width=Math.floor(V*a),w.height=Math.floor(f*a),v===!0)w.style.width=V+"px",w.style.height=f+"px";this.setViewport(0,0,V,f)},this.getDrawingBufferSize=function(V){return V.set(o*a,m*a).floor()},this.setDrawingBufferSize=function(V,f,v){o=V,m=f,a=v,w.width=Math.floor(V*v),w.height=Math.floor(f*v),this.setViewport(0,0,V,f)},this.getCurrentViewport=function(V){return V.copy(F)},this.getViewport=function(V){return V.copy(q0)},this.setViewport=function(V,f,v,g){if(V.isVector4)q0.set(V.x,V.y,V.z,V.w);else q0.set(V,f,v,g);N0.viewport(F.copy(q0).multiplyScalar(a).round())},this.getScissor=function(V){return V.copy(I0)},this.setScissor=function(V,f,v,g){if(V.isVector4)I0.set(V.x,V.y,V.z,V.w);else I0.set(V,f,v,g);N0.scissor(C.copy(I0).multiplyScalar(a).round())},this.getScissorTest=function(){return K0},this.setScissorTest=function(V){N0.setScissorTest(K0=V)},this.setOpaqueSort=function(V){d=V},this.setTransparentSort=function(V){Z0=V},this.getClearColor=function(V){return V.copy(F0.getClearColor())},this.setClearColor=function(){F0.setClearColor(...arguments)},this.getClearAlpha=function(){return F0.getClearAlpha()},this.setClearAlpha=function(){F0.setClearAlpha(...arguments)},this.clear=function(V=!0,f=!0,v=!0){let g=0;if(V){let b=!1;if(A!==null){let e=A.texture.format;b=e===sW||e===iW||e===cW}if(b){let e=A.texture.type,U0=e===f7||e===p5||e===Rw||e===d5||e===mW||e===uW,M0=F0.getClearColor(),$0=F0.getClearAlpha(),T0=M0.r,j0=M0.g,A0=M0.b;if(U0)R[0]=T0,R[1]=j0,R[2]=A0,R[3]=$0,P.clearBufferuiv(P.COLOR,0,R);else z[0]=T0,z[1]=j0,z[2]=A0,z[3]=$0,P.clearBufferiv(P.COLOR,0,z)}else g|=P.COLOR_BUFFER_BIT}if(f)g|=P.DEPTH_BUFFER_BIT;if(v)g|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);P.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){w.removeEventListener("webglcontextlost",W0,!1),w.removeEventListener("webglcontextrestored",H0,!1),w.removeEventListener("webglcontextcreationerror",D0,!1),F0.dispose(),r.dispose(),u.dispose(),_0.dispose(),o9.dispose(),m9.dispose(),N.dispose(),B0.dispose(),k0.dispose(),h.dispose(),S.dispose(),S.removeEventListener("sessionstart",Q6),S.removeEventListener("sessionend",W6),y7.stop()};function W0(V){V.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function H0(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let V=V9.autoReset,f=w0.enabled,v=w0.autoUpdate,g=w0.needsUpdate,b=w0.type;d0(),V9.autoReset=V,w0.enabled=f,w0.autoUpdate=v,w0.needsUpdate=g,w0.type=b}function D0(V){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function t(V){let f=V.target;f.removeEventListener("dispose",t),n(f)}function n(V){O0(V),_0.remove(V)}function O0(V){let f=_0.get(V).programs;if(f!==void 0){if(f.forEach(function(v){h.releaseProgram(v)}),V.isShaderMaterial)h.releaseShaderCache(V)}}this.renderBufferDirect=function(V,f,v,g,b,e){if(f===null)f=b0;let U0=b.isMesh&&b.matrixWorld.determinant()<0,M0=xM(V,f,v,g,b);N0.setMaterial(g,U0);let $0=v.index,T0=1;if(g.wireframe===!0){if($0=I.getWireframeAttribute(v),$0===void 0)return;T0=2}let j0=v.drawRange,A0=v.attributes.position,s0=j0.start*T0,U9=(j0.start+j0.count)*T0;if(e!==null)s0=Math.max(s0,e.start*T0),U9=Math.min(U9,(e.start+e.count)*T0);if($0!==null)s0=Math.max(s0,0),U9=Math.min(U9,$0.count);else if(A0!==void 0&&A0!==null)s0=Math.max(s0,0),U9=Math.min(U9,A0.count);let C9=U9-s0;if(C9<0||C9===1/0)return;B0.setup(b,g,M0,v,$0);let O9,$9=J0;if($0!==null)O9=S9.get($0),$9=G0,$9.setIndex(O9);if(b.isMesh)if(g.wireframe===!0)N0.setLineWidth(g.wireframeLinewidth*d9()),$9.setMode(P.LINES);else $9.setMode(P.TRIANGLES);else if(b.isLine){let E0=g.linewidth;if(E0===void 0)E0=1;if(N0.setLineWidth(E0*d9()),b.isLineSegments)$9.setMode(P.LINES);else if(b.isLineLoop)$9.setMode(P.LINE_LOOP);else $9.setMode(P.LINE_STRIP)}else if(b.isPoints)$9.setMode(P.POINTS);else if(b.isSprite)$9.setMode(P.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)x5("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$9.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(!v0.get("WEBGL_multi_draw")){let{_multiDrawStarts:E0,_multiDrawCounts:A9,_multiDrawCount:J9}=b,F8=$0?S9.get($0).bytesPerElement:1,A1=_0.get(g).currentProgram.getUniforms();for(let z8=0;z8<J9;z8++)A1.setValue(P,"_gl_DrawID",z8),$9.render(E0[z8]/F8,A9[z8])}else $9.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)$9.renderInstances(s0,C9,b.count);else if(v.isInstancedBufferGeometry){let E0=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,A9=Math.min(v.instanceCount,E0);$9.renderInstances(s0,C9,A9)}else $9.render(s0,C9)};function h0(V,f,v){if(V.transparent===!0&&V.side===O6&&V.forceSinglePass===!1)V.side=f8,V.needsUpdate=!0,xw(V,f,v),V.side=h5,V.needsUpdate=!0,xw(V,f,v),V.side=O6;else xw(V,f,v)}this.compile=function(V,f,v=null){if(v===null)v=V;if(M=u.get(v),M.init(f),O.push(M),v.traverseVisible(function(b){if(b.isLight&&b.layers.test(f.layers)){if(M.pushLight(b),b.castShadow)M.pushShadow(b)}}),V!==v)V.traverseVisible(function(b){if(b.isLight&&b.layers.test(f.layers)){if(M.pushLight(b),b.castShadow)M.pushShadow(b)}});M.setupLights();let g=new Set;return V.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let e=b.material;if(e)if(Array.isArray(e))for(let U0=0;U0<e.length;U0++){let M0=e[U0];h0(M0,v,b),g.add(M0)}else h0(e,v,b),g.add(e)}),M=O.pop(),g},this.compileAsync=function(V,f,v=null){let g=this.compile(V,f,v);return new Promise((b)=>{function e(){if(g.forEach(function(U0){if(_0.get(U0).currentProgram.isReady())g.delete(U0)}),g.size===0){b(V);return}setTimeout(e,10)}if(v0.get("KHR_parallel_shader_compile")!==null)e();else setTimeout(e,10)})};let K9=null;function W9(V){if(K9)K9(V)}function Q6(){y7.stop()}function W6(){y7.start()}let y7=new MM;if(y7.setAnimationLoop(W9),typeof self!=="undefined")y7.setContext(self);this.setAnimationLoop=function(V){K9=V,S.setAnimationLoop(V),V===null?y7.stop():y7.start()},S.addEventListener("sessionstart",Q6),S.addEventListener("sessionend",W6),this.render=function(V,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(S.enabled===!0&&S.isPresenting===!0){if(S.cameraAutoUpdate===!0)S.updateCamera(f);f=S.getCamera()}if(V.isScene===!0)V.onBeforeRender(D,V,f,A);if(M=u.get(V,O.length),M.init(f),O.push(M),X0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),e0.setFromProjectionMatrix(X0,AU,f.reversedDepth),i=this.localClippingEnabled,p0=R0.init(this.clippingPlanes,i),B=r.get(V,k.length),B.init(),k.push(B),S.enabled===!0&&S.isPresenting===!0){let e=D.xr.getDepthSensingMesh();if(e!==null)KH(e,f,-1/0,D.sortObjects)}if(KH(V,f,0,D.sortObjects),B.finish(),D.sortObjects===!0)B.sort(d,Z0);if(x0=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,x0)F0.addToRenderList(B,V);if(this.info.render.frame++,p0===!0)R0.beginShadows();let v=M.state.shadowsArray;if(w0.render(v,V,f),p0===!0)R0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:b}=B;if(M.setupLights(),f.isArrayCamera){let e=f.cameras;if(b.length>0)for(let U0=0,M0=e.length;U0<M0;U0++){let $0=e[U0];KG(g,b,V,$0)}if(x0)F0.render(V);for(let U0=0,M0=e.length;U0<M0;U0++){let $0=e[U0];kG(B,V,$0,$0.viewport)}}else{if(b.length>0)KG(g,b,V,f);if(x0)F0.render(V);kG(B,V,f)}if(A!==null&&E===0)C0.updateMultisampleRenderTarget(A),C0.updateRenderTargetMipmap(A);if(V.isScene===!0)V.onAfterRender(D,V,f);if(B0.resetDefaultState(),j=-1,_=null,O.pop(),O.length>0){if(M=O[O.length-1],p0===!0)R0.setGlobalState(D.clippingPlanes,M.state.camera)}else M=null;if(k.pop(),k.length>0)B=k[k.length-1];else B=null};function KH(V,f,v,g){if(V.visible===!1)return;if(V.layers.test(f.layers)){if(V.isGroup)v=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(f)}else if(V.isLight){if(M.pushLight(V),V.castShadow)M.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||e0.intersectsSprite(V)){if(g)z0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(X0);let U0=N.update(V),M0=V.material;if(M0.visible)B.push(V,U0,M0,v,z0.z,null)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||e0.intersectsObject(V)){let U0=N.update(V),M0=V.material;if(g){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();z0.copy(V.boundingSphere.center)}else{if(U0.boundingSphere===null)U0.computeBoundingSphere();z0.copy(U0.boundingSphere.center)}z0.applyMatrix4(V.matrixWorld).applyMatrix4(X0)}if(Array.isArray(M0)){let $0=U0.groups;for(let T0=0,j0=$0.length;T0<j0;T0++){let A0=$0[T0],s0=M0[A0.materialIndex];if(s0&&s0.visible)B.push(V,U0,s0,v,z0.z,A0)}}else if(M0.visible)B.push(V,U0,M0,v,z0.z,null)}}}let e=V.children;for(let U0=0,M0=e.length;U0<M0;U0++)KH(e[U0],f,v,g)}function kG(V,f,v,g){let{opaque:b,transmissive:e,transparent:U0}=V;if(M.setupLightsView(v),p0===!0)R0.setGlobalState(D.clippingPlanes,v);if(g)N0.viewport(F.copy(g));if(b.length>0)bw(b,f,v);if(e.length>0)bw(e,f,v);if(U0.length>0)bw(U0,f,v);N0.buffers.depth.setTest(!0),N0.buffers.depth.setMask(!0),N0.buffers.color.setMask(!0),N0.setPolygonOffset(!1)}function KG(V,f,v,g){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[g.id]===void 0)M.state.transmissionRenderTarget[g.id]=new n6(1,1,{generateMipmaps:!0,type:v0.has("EXT_color_buffer_half_float")||v0.has("EXT_color_buffer_float")?Dw:f7,minFilter:l5,samples:4,stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:t0.workingColorSpace});let e=M.state.transmissionRenderTarget[g.id],U0=g.viewport||F;e.setSize(U0.z*D.transmissionResolutionScale,U0.w*D.transmissionResolutionScale);let M0=D.getRenderTarget(),$0=D.getActiveCubeFace(),T0=D.getActiveMipmapLevel();if(D.setRenderTarget(e),D.getClearColor(p),l=D.getClearAlpha(),l<1)D.setClearColor(16777215,0.5);if(D.clear(),x0)F0.render(v);let j0=D.toneMapping;D.toneMapping=o6;let A0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(M.setupLightsView(g),p0===!0)R0.setGlobalState(D.clippingPlanes,g);if(bw(V,v,g),C0.updateMultisampleRenderTarget(e),C0.updateRenderTargetMipmap(e),v0.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let U9=0,C9=f.length;U9<C9;U9++){let O9=f[U9],$9=O9.object,E0=O9.geometry,A9=O9.material,J9=O9.group;if(A9.side===O6&&$9.layers.test(g.layers)){let F8=A9.side;A9.side=f8,A9.needsUpdate=!0,$G($9,v,g,E0,A9,J9),A9.side=F8,A9.needsUpdate=!0,s0=!0}}if(s0===!0)C0.updateMultisampleRenderTarget(e),C0.updateRenderTargetMipmap(e)}if(D.setRenderTarget(M0,$0,T0),D.setClearColor(p,l),A0!==void 0)g.viewport=A0;D.toneMapping=j0}function bw(V,f,v){let g=f.isScene===!0?f.overrideMaterial:null;for(let b=0,e=V.length;b<e;b++){let U0=V[b],M0=U0.object,$0=U0.geometry,T0=U0.group,j0=U0.material;if(j0.allowOverride===!0&&g!==null)j0=g;if(M0.layers.test(v.layers))$G(M0,f,v,$0,j0,T0)}}function $G(V,f,v,g,b,e){if(V.onBeforeRender(D,f,v,g,b,e),V.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),b.onBeforeRender(D,f,v,g,V,e),b.transparent===!0&&b.side===O6&&b.forceSinglePass===!1)b.side=f8,b.needsUpdate=!0,D.renderBufferDirect(v,f,g,b,V,e),b.side=h5,b.needsUpdate=!0,D.renderBufferDirect(v,f,g,b,V,e),b.side=O6;else D.renderBufferDirect(v,f,g,b,V,e);V.onAfterRender(D,f,v,g,b,e)}function xw(V,f,v){if(f.isScene!==!0)f=b0;let g=_0.get(V),b=M.state.lights,e=M.state.shadowsArray,U0=b.state.version,M0=h.getParameters(V,b.state,e,f,v),$0=h.getProgramCacheKey(M0),T0=g.programs;if(g.environment=V.isMeshStandardMaterial?f.environment:null,g.fog=f.fog,g.envMap=(V.isMeshStandardMaterial?m9:o9).get(V.envMap||g.environment),g.envMapRotation=g.environment!==null&&V.envMap===null?f.environmentRotation:V.envMapRotation,T0===void 0)V.addEventListener("dispose",t),T0=new Map,g.programs=T0;let j0=T0.get($0);if(j0!==void 0){if(g.currentProgram===j0&&g.lightsStateVersion===U0)return DG(V,M0),j0}else M0.uniforms=h.getUniforms(V),V.onBeforeCompile(M0,D),j0=h.acquireProgram(M0,$0),T0.set($0,j0),g.uniforms=M0.uniforms;let A0=g.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)A0.clippingPlanes=R0.uniform;if(DG(V,M0),g.needsLights=vM(V),g.lightsStateVersion=U0,g.needsLights)A0.ambientLightColor.value=b.state.ambient,A0.lightProbe.value=b.state.probe,A0.directionalLights.value=b.state.directional,A0.directionalLightShadows.value=b.state.directionalShadow,A0.spotLights.value=b.state.spot,A0.spotLightShadows.value=b.state.spotShadow,A0.rectAreaLights.value=b.state.rectArea,A0.ltc_1.value=b.state.rectAreaLTC1,A0.ltc_2.value=b.state.rectAreaLTC2,A0.pointLights.value=b.state.point,A0.pointLightShadows.value=b.state.pointShadow,A0.hemisphereLights.value=b.state.hemi,A0.directionalShadowMap.value=b.state.directionalShadowMap,A0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,A0.spotShadowMap.value=b.state.spotShadowMap,A0.spotLightMatrix.value=b.state.spotLightMatrix,A0.spotLightMap.value=b.state.spotLightMap,A0.pointShadowMap.value=b.state.pointShadowMap,A0.pointShadowMatrix.value=b.state.pointShadowMatrix;return g.currentProgram=j0,g.uniformsList=null,j0}function RG(V){if(V.uniformsList===null){let f=V.currentProgram.getUniforms();V.uniformsList=Tw.seqWithValue(f.seq,V.uniforms)}return V.uniformsList}function DG(V,f){let v=_0.get(V);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function xM(V,f,v,g,b){if(f.isScene!==!0)f=b0;C0.resetTextureUnits();let e=f.fog,U0=g.isMeshStandardMaterial?f.environment:null,M0=A===null?D.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ow,$0=(g.isMeshStandardMaterial?m9:o9).get(g.envMap||U0),T0=g.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,j0=!!v.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),A0=!!v.morphAttributes.position,s0=!!v.morphAttributes.normal,U9=!!v.morphAttributes.color,C9=o6;if(g.toneMapped){if(A===null||A.isXRRenderTarget===!0)C9=D.toneMapping}let O9=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,$9=O9!==void 0?O9.length:0,E0=_0.get(g),A9=M.state.lights;if(p0===!0){if(i===!0||V!==_){let X8=V===_&&g.id===j;R0.setState(g,V,X8)}}let J9=!1;if(g.version===E0.__version){if(E0.needsLights&&E0.lightsStateVersion!==A9.state.version)J9=!0;else if(E0.outputColorSpace!==M0)J9=!0;else if(b.isBatchedMesh&&E0.batching===!1)J9=!0;else if(!b.isBatchedMesh&&E0.batching===!0)J9=!0;else if(b.isBatchedMesh&&E0.batchingColor===!0&&b.colorTexture===null)J9=!0;else if(b.isBatchedMesh&&E0.batchingColor===!1&&b.colorTexture!==null)J9=!0;else if(b.isInstancedMesh&&E0.instancing===!1)J9=!0;else if(!b.isInstancedMesh&&E0.instancing===!0)J9=!0;else if(b.isSkinnedMesh&&E0.skinning===!1)J9=!0;else if(!b.isSkinnedMesh&&E0.skinning===!0)J9=!0;else if(b.isInstancedMesh&&E0.instancingColor===!0&&b.instanceColor===null)J9=!0;else if(b.isInstancedMesh&&E0.instancingColor===!1&&b.instanceColor!==null)J9=!0;else if(b.isInstancedMesh&&E0.instancingMorph===!0&&b.morphTexture===null)J9=!0;else if(b.isInstancedMesh&&E0.instancingMorph===!1&&b.morphTexture!==null)J9=!0;else if(E0.envMap!==$0)J9=!0;else if(g.fog===!0&&E0.fog!==e)J9=!0;else if(E0.numClippingPlanes!==void 0&&(E0.numClippingPlanes!==R0.numPlanes||E0.numIntersection!==R0.numIntersection))J9=!0;else if(E0.vertexAlphas!==T0)J9=!0;else if(E0.vertexTangents!==j0)J9=!0;else if(E0.morphTargets!==A0)J9=!0;else if(E0.morphNormals!==s0)J9=!0;else if(E0.morphColors!==U9)J9=!0;else if(E0.toneMapping!==C9)J9=!0;else if(E0.morphTargetsCount!==$9)J9=!0}else J9=!0,E0.__version=g.version;let F8=E0.currentProgram;if(J9===!0)F8=xw(g,f,b);let A1=!1,z8=!1,r5=!1,E9=F8.getUniforms(),b8=E0.uniforms;if(N0.useProgram(F8.program))A1=!0,z8=!0,r5=!0;if(g.id!==j)j=g.id,z8=!0;if(A1||_!==V){if(N0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();E9.setValue(P,"projectionMatrix",V.projectionMatrix),E9.setValue(P,"viewMatrix",V.matrixWorldInverse);let q8=E9.map.cameraPosition;if(q8!==void 0)q8.setValue(P,Y0.setFromMatrixPosition(V.matrixWorld));if(f0.logarithmicDepthBuffer)E9.setValue(P,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)E9.setValue(P,"isOrthographic",V.isOrthographicCamera===!0);if(_!==V)_=V,z8=!0,r5=!0}if(b.isSkinnedMesh){E9.setOptional(P,b,"bindMatrix"),E9.setOptional(P,b,"bindMatrixInverse");let X8=b.skeleton;if(X8){if(X8.boneTexture===null)X8.computeBoneTexture();E9.setValue(P,"boneTexture",X8.boneTexture,C0)}}if(b.isBatchedMesh){if(E9.setOptional(P,b,"batchingTexture"),E9.setValue(P,"batchingTexture",b._matricesTexture,C0),E9.setOptional(P,b,"batchingIdTexture"),E9.setValue(P,"batchingIdTexture",b._indirectTexture,C0),E9.setOptional(P,b,"batchingColorTexture"),b._colorsTexture!==null)E9.setValue(P,"batchingColorTexture",b._colorsTexture,C0)}let x8=v.morphAttributes;if(x8.position!==void 0||x8.normal!==void 0||x8.color!==void 0)S0.update(b,v,F8);if(z8||E0.receiveShadow!==b.receiveShadow)E0.receiveShadow=b.receiveShadow,E9.setValue(P,"receiveShadow",b.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)b8.envMap.value=$0,b8.flipEnvMap.value=$0.isCubeTexture&&$0.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&f.environment!==null)b8.envMapIntensity.value=f.environmentIntensity;if(z8){if(E9.setValue(P,"toneMappingExposure",D.toneMappingExposure),E0.needsLights)hM(b8,r5);if(e&&g.fog===!0)s.refreshFogUniforms(b8,e);s.refreshMaterialUniforms(b8,g,a,m,M.state.transmissionRenderTarget[V.id]),Tw.upload(P,RG(E0),b8,C0)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)Tw.upload(P,RG(E0),b8,C0),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)E9.setValue(P,"center",b.center);if(E9.setValue(P,"modelViewMatrix",b.modelViewMatrix),E9.setValue(P,"normalMatrix",b.normalMatrix),E9.setValue(P,"modelMatrix",b.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let X8=g.uniformsGroups;for(let q8=0,$H=X8.length;q8<$H;q8++){let g7=X8[q8];k0.update(g7,F8),k0.bind(g7,F8)}}return F8}function hM(V,f){V.ambientLightColor.needsUpdate=f,V.lightProbe.needsUpdate=f,V.directionalLights.needsUpdate=f,V.directionalLightShadows.needsUpdate=f,V.pointLights.needsUpdate=f,V.pointLightShadows.needsUpdate=f,V.spotLights.needsUpdate=f,V.spotLightShadows.needsUpdate=f,V.rectAreaLights.needsUpdate=f,V.hemisphereLights.needsUpdate=f}function vM(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(V,f,v){let g=_0.get(V);if(g.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;_0.get(V.texture).__webglTexture=f,_0.get(V.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:v,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,f){let v=_0.get(V);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};let yM=P.createFramebuffer();this.setRenderTarget=function(V,f=0,v=0){A=V,T=f,E=v;let g=!0,b=null,e=!1,U0=!1;if(V){let $0=_0.get(V);if($0.__useDefaultFramebuffer!==void 0)N0.bindFramebuffer(P.FRAMEBUFFER,null),g=!1;else if($0.__webglFramebuffer===void 0)C0.setupRenderTarget(V);else if($0.__hasExternalTextures)C0.rebindTextures(V,_0.get(V.texture).__webglTexture,_0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let A0=V.depthTexture;if($0.__boundDepthTexture!==A0){if(A0!==null&&_0.has(A0)&&(V.width!==A0.image.width||V.height!==A0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C0.setupDepthRenderbuffer(V)}}let T0=V.texture;if(T0.isData3DTexture||T0.isDataArrayTexture||T0.isCompressedArrayTexture)U0=!0;let j0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(j0[f]))b=j0[f][v];else b=j0[f];e=!0}else if(V.samples>0&&C0.useMultisampledRTT(V)===!1)b=_0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(j0))b=j0[v];else b=j0;F.copy(V.viewport),C.copy(V.scissor),y=V.scissorTest}else F.copy(q0).multiplyScalar(a).floor(),C.copy(I0).multiplyScalar(a).floor(),y=K0;if(v!==0)b=yM;if(N0.bindFramebuffer(P.FRAMEBUFFER,b)&&g)N0.drawBuffers(V,b);if(N0.viewport(F),N0.scissor(C),N0.setScissorTest(y),e){let $0=_0.get(V.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+f,$0.__webglTexture,v)}else if(U0){let $0=f;for(let T0=0;T0<V.textures.length;T0++){let j0=_0.get(V.textures[T0]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+T0,j0.__webglTexture,v,$0)}}else if(V!==null&&v!==0){let $0=_0.get(V.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$0.__webglTexture,v)}j=-1},this.readRenderTargetPixels=function(V,f,v,g,b,e,U0,M0=0){if(!(V&&V.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&U0!==void 0)$0=$0[U0];if($0){N0.bindFramebuffer(P.FRAMEBUFFER,$0);try{let T0=V.textures[M0],j0=T0.format,A0=T0.type;if(!f0.textureFormatReadable(j0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!f0.textureTypeReadable(A0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=V.width-g&&(v>=0&&v<=V.height-b)){if(V.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+M0);P.readPixels(f,v,g,b,L0.convert(j0),L0.convert(A0),e)}}finally{let T0=A!==null?_0.get(A).__webglFramebuffer:null;N0.bindFramebuffer(P.FRAMEBUFFER,T0)}}},this.readRenderTargetPixelsAsync=async function(V,f,v,g,b,e,U0,M0=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&U0!==void 0)$0=$0[U0];if($0)if(f>=0&&f<=V.width-g&&(v>=0&&v<=V.height-b)){N0.bindFramebuffer(P.FRAMEBUFFER,$0);let T0=V.textures[M0],j0=T0.format,A0=T0.type;if(!f0.textureFormatReadable(j0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!f0.textureTypeReadable(A0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let s0=P.createBuffer();if(P.bindBuffer(P.PIXEL_PACK_BUFFER,s0),P.bufferData(P.PIXEL_PACK_BUFFER,e.byteLength,P.STREAM_READ),V.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+M0);P.readPixels(f,v,g,b,L0.convert(j0),L0.convert(A0),0);let U9=A!==null?_0.get(A).__webglFramebuffer:null;N0.bindFramebuffer(P.FRAMEBUFFER,U9);let C9=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await lD(P,C9,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,s0),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,e),P.deleteBuffer(s0),P.deleteSync(C9),e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,f=null,v=0){let g=Math.pow(2,-v),b=Math.floor(V.image.width*g),e=Math.floor(V.image.height*g),U0=f!==null?f.x:0,M0=f!==null?f.y:0;C0.setTexture2D(V,0),P.copyTexSubImage2D(P.TEXTURE_2D,v,0,0,U0,M0,b,e),N0.unbindTexture()};let gM=P.createFramebuffer(),lM=P.createFramebuffer();if(this.copyTextureToTexture=function(V,f,v=null,g=null,b=0,e=null){if(e===null)if(b!==0)x5("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e=b,b=0;else e=0;let U0,M0,$0,T0,j0,A0,s0,U9,C9,O9=V.isCompressedTexture?V.mipmaps[e]:V.image;if(v!==null)U0=v.max.x-v.min.x,M0=v.max.y-v.min.y,$0=v.isBox3?v.max.z-v.min.z:1,T0=v.min.x,j0=v.min.y,A0=v.isBox3?v.min.z:0;else{let x8=Math.pow(2,-b);if(U0=Math.floor(O9.width*x8),M0=Math.floor(O9.height*x8),V.isDataArrayTexture)$0=O9.depth;else if(V.isData3DTexture)$0=Math.floor(O9.depth*x8);else $0=1;T0=0,j0=0,A0=0}if(g!==null)s0=g.x,U9=g.y,C9=g.z;else s0=0,U9=0,C9=0;let $9=L0.convert(f.format),E0=L0.convert(f.type),A9;if(f.isData3DTexture)C0.setTexture3D(f,0),A9=P.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)C0.setTexture2DArray(f,0),A9=P.TEXTURE_2D_ARRAY;else C0.setTexture2D(f,0),A9=P.TEXTURE_2D;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,f.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,f.unpackAlignment);let J9=P.getParameter(P.UNPACK_ROW_LENGTH),F8=P.getParameter(P.UNPACK_IMAGE_HEIGHT),A1=P.getParameter(P.UNPACK_SKIP_PIXELS),z8=P.getParameter(P.UNPACK_SKIP_ROWS),r5=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,O9.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,O9.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T0),P.pixelStorei(P.UNPACK_SKIP_ROWS,j0),P.pixelStorei(P.UNPACK_SKIP_IMAGES,A0);let E9=V.isDataArrayTexture||V.isData3DTexture,b8=f.isDataArrayTexture||f.isData3DTexture;if(V.isDepthTexture){let x8=_0.get(V),X8=_0.get(f),q8=_0.get(x8.__renderTarget),$H=_0.get(X8.__renderTarget);N0.bindFramebuffer(P.READ_FRAMEBUFFER,q8.__webglFramebuffer),N0.bindFramebuffer(P.DRAW_FRAMEBUFFER,$H.__webglFramebuffer);for(let g7=0;g7<$0;g7++){if(E9)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_0.get(V).__webglTexture,b,A0+g7),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_0.get(f).__webglTexture,e,C9+g7);P.blitFramebuffer(T0,j0,U0,M0,s0,U9,U0,M0,P.DEPTH_BUFFER_BIT,P.NEAREST)}N0.bindFramebuffer(P.READ_FRAMEBUFFER,null),N0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b!==0||V.isRenderTargetTexture||_0.has(V)){let x8=_0.get(V),X8=_0.get(f);N0.bindFramebuffer(P.READ_FRAMEBUFFER,gM),N0.bindFramebuffer(P.DRAW_FRAMEBUFFER,lM);for(let q8=0;q8<$0;q8++){if(E9)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x8.__webglTexture,b,A0+q8);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,x8.__webglTexture,b);if(b8)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X8.__webglTexture,e,C9+q8);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,X8.__webglTexture,e);if(b!==0)P.blitFramebuffer(T0,j0,U0,M0,s0,U9,U0,M0,P.COLOR_BUFFER_BIT,P.NEAREST);else if(b8)P.copyTexSubImage3D(A9,e,s0,U9,C9+q8,T0,j0,U0,M0);else P.copyTexSubImage2D(A9,e,s0,U9,T0,j0,U0,M0)}N0.bindFramebuffer(P.READ_FRAMEBUFFER,null),N0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b8)if(V.isDataTexture||V.isData3DTexture)P.texSubImage3D(A9,e,s0,U9,C9,U0,M0,$0,$9,E0,O9.data);else if(f.isCompressedArrayTexture)P.compressedTexSubImage3D(A9,e,s0,U9,C9,U0,M0,$0,$9,O9.data);else P.texSubImage3D(A9,e,s0,U9,C9,U0,M0,$0,$9,E0,O9);else if(V.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,e,s0,U9,U0,M0,$9,E0,O9.data);else if(V.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,e,s0,U9,O9.width,O9.height,$9,O9.data);else P.texSubImage2D(P.TEXTURE_2D,e,s0,U9,U0,M0,$9,E0,O9);if(P.pixelStorei(P.UNPACK_ROW_LENGTH,J9),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,F8),P.pixelStorei(P.UNPACK_SKIP_PIXELS,A1),P.pixelStorei(P.UNPACK_SKIP_ROWS,z8),P.pixelStorei(P.UNPACK_SKIP_IMAGES,r5),e===0&&f.generateMipmaps)P.generateMipmap(A9);N0.unbindTexture()},this.initRenderTarget=function(V){if(_0.get(V).__webglFramebuffer===void 0)C0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)C0.setTextureCube(V,0);else if(V.isData3DTexture)C0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C0.setTexture2DArray(V,0);else C0.setTexture2D(V,0);N0.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,N0.reset(),B0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return AU}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let w=this.getContext();w.drawingBufferColorSpace=t0._getDrawingBufferColorSpace(J),w.unpackColorSpace=t0._getUnpackColorSpace()}}var kH=r6(l7(),1);var CM=(J)=>J.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qH=(...J)=>J.filter((w,Z,Y)=>{return Boolean(w)&&w.trim()!==""&&Y.indexOf(w)===Z}).join(" ").trim();var Pw=r6(l7(),1);var TM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var PM=Pw.forwardRef(({color:J="currentColor",size:w=24,strokeWidth:Z=2,absoluteStrokeWidth:Y,className:H="",children:X,iconNode:Q,...W},U)=>{return Pw.createElement("svg",{ref:U,...TM,width:w,height:w,stroke:J,strokeWidth:Y?Number(Z)*24/Number(w):Z,className:qH("lucide",H),...W},[...Q.map(([G,q])=>Pw.createElement(G,q)),...Array.isArray(X)?X:[X]])});var t8=(J,w)=>{let Z=kH.forwardRef(({className:Y,...H},X)=>kH.createElement(PM,{ref:X,iconNode:w,className:qH(`lucide-${CM(J)}`,Y),...H}));return Z.displayName=`${J}`,Z};var nV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Sw=t8("ArrowRight",nV);var aV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],jw=t8("ChevronUp",aV);var rV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],o5=t8("Info",rV);var tV=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],n5=t8("ShoppingBag",tV);var eV=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],fw=t8("Trash2",eV);var J_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],a5=t8("X",J_);var w_=Symbol.for("react.transitional.element"),Z_=Symbol.for("react.fragment");function SM(J,w,Z){var Y=null;if(Z!==void 0&&(Y=""+Z),w.key!==void 0&&(Y=""+w.key),"key"in w){Z={};for(var H in w)H!=="key"&&(Z[H]=w[H])}else Z=w;return w=Z.ref,{$$typeof:w_,type:J,key:Y,ref:w!==void 0?w:null,props:Z}}var UG=Z_,V0=SM,k9=SM;var GG=[{id:"1",name:"Moon Rock",price:39.99,description:"La flor premium con mayor concentración de CBD. Aroma intenso y profundo, cosechada en interior y curada a la perfección. Una experiencia sensorial única, con notas terrosas y un final dulce. Ideal para la relajación profunda.",color:"#EAB308",weightGrams:5},{id:"2",name:"Purple Haze",price:34.5,description:"Tonos morados y terrosos con notas afrutadas. Efecto relajante superior, ideal para desconectar al final del día. Crece bajo luz natural, lo que le da un perfil de cannabinoides y terpenos muy equilibrado.",color:"#8B5CF6",weightGrams:3},{id:"3",name:"Silver Haze",price:29.99,description:"Clásica sativa, brillante y energizante. Perfecta para el día a día y mejorar la concentración en tareas creativas. Su estructura es ligera y aireada, con un aroma cítrico y fresco que recuerda al pino.",color:"#60A5FA",weightGrams:10}],qG={THEME_BG:"bg-stone-950 text-white",HEADER_TEXT:"text-white/90",ICON_COLOR:"text-white",DOT_NAV_BG:"bg-white/10 backdrop-blur-sm",CART_BG:"bg-stone-900/80 backdrop-blur-xl",CART_TEXT_COLOR:"text-white",CART_BORDER_COLOR:"border-gray-700",PRIMARY_TEXT:"text-white",SECONDARY_TEXT:"text-white/80",ACCENT_COLOR:"text-emerald-400",ACCENT_BG:"bg-emerald-400",NOTIFICATION_BG:"bg-emerald-600"},Y_=()=>GG.map((J,w)=>({...J,uniqueKey:`${J.id}-0-${w}`})),H_=(J,w,Z,Y,H,X)=>{if(Z===0||Y===0)return{x:0,y:0};let Q=H.fov*(Math.PI/180),W=H.position.z-X,U=2*Math.tan(Q/2)*W,q=U*H.aspect/Z,$=U/Y,K=(J-Z/2)*q,R=-(w-Y/2)*$;return{x:K,y:R}},X_=()=>{let[J,w]=n0.useState({}),Z=n0.useCallback((U)=>{w((G)=>{let q=G[U.id];return{...G,[U.id]:q?{...q,quantity:q.quantity+1}:{product:U,quantity:1}}})},[]),Y=n0.useCallback((U)=>{w((G)=>{let q=G[U];if(!q)return G;if(q.quantity>1)return{...G,[U]:{...q,quantity:q.quantity-1}};else{let $={...G};return delete $[U],$}})},[]),H=n0.useCallback((U)=>{w((G)=>{let q={...G};return delete q[U],q})},[]),X=n0.useMemo(()=>Object.values(J).reduce((U,G)=>U+G.product.price*G.quantity,0).toFixed(2),[J]),Q=n0.useMemo(()=>Object.values(J).reduce((U,G)=>U+G.quantity,0),[J]);return{groupedItemsList:n0.useMemo(()=>Object.values(J).sort((U,G)=>U.product.name.localeCompare(G.product.name)),[J]),handleAddItem:Z,handleDecrementItem:Y,handleRemoveItem:H,calculateTotal:X,cartCount:Q}},Q_=()=>{return n0.useCallback((w)=>{let Z=document.getElementById("notification");if(Z)Z.innerHTML=w,Z.classList.remove("opacity-0","scale-95"),Z.classList.add("opacity-100","scale-100","animate-pulse-once"),setTimeout(()=>{Z.classList.remove("opacity-100","scale-100","animate-pulse-once"),Z.classList.add("opacity-0","scale-95")},2000)},[])},W_=(J)=>{let[w]=n0.useState(Y_),[Z,Y]=n0.useState(0),[H,X]=n0.useState(!1),Q=w[Z],W=n0.useCallback(()=>{if(!J.current)return;let q=J.current,$=q.scrollTop,K=q.clientHeight,R=Math.floor(($+K/2)/K);if(R>=0&&R<w.length&&R!==Z)Y(R);X($>K*0.5)},[Z,w.length,J]),U=n0.useCallback((q)=>{if(!J.current)return;let $=q*J.current.clientHeight;J.current.scrollTo({top:$,behavior:"smooth"}),Y(q)},[J]),G=n0.useCallback(()=>{if(!J.current)return;J.current.scrollTo({top:0,behavior:"smooth"}),Y(0)},[J]);return{dynamicList:w,currentIndex:Z,activeProduct:Q,handleScroll:W,handleClickDot:U,showBackToTop:H,handleBackToTop:G}},U_=n0.default.memo(({product:J,onModelLoaded:w,isActive:Z,flyoutTarget:Y})=>{let H=n0.useRef(null),X=n0.useRef(null),Q=n0.useRef(null);return n0.useEffect(()=>{if(!H.current)return;let W=H.current,U=new tY,G=new J8(75,W.clientWidth/W.clientHeight,0.1,1000),q=new WG({antialias:!0,alpha:!0});q.setSize(W.clientWidth,W.clientHeight),q.setPixelRatio(window.devicePixelRatio),W.appendChild(q.domElement);let K=(()=>{let p=new Vw(1.75,2,3,64),l=new wH({color:new m0(J.color),metalness:0.9,roughness:0.1,clearcoat:1,clearcoatRoughness:0.05,flatShading:!1}),o=new N8(p,l),m=new v7(2.8800000000000003,0.1,0.35),a=new Aw({color:15658734,metalness:1,roughness:0.1}),d=new N8(m,a);return d.position.y=1.5,d.rotation.y=Math.PI/4,o.add(d),o.rotation.x=0.2,X.current=o,U.add(o),w(),[p,l,m,a]})();U.add(new HH(16777215,0.4));let R=new YH(16777215,80,20,Math.PI*0.15,0.5,0.5);R.position.set(4,5,4),R.target.position.set(0,0,0),U.add(R);let z=new Iw(16777215,15,100);z.position.set(-5,0,3),U.add(z);let B=new Iw(16777215,30,100);B.position.set(0,5,-5),U.add(B);let M=15,k=8.5;G.position.z=M;let O=!1,D={x:0,y:0},L=(F)=>{O=!0,D={x:F.clientX,y:F.clientY},W.setPointerCapture(F.pointerId)},T=(F)=>{if(!O||!X.current)return;F.preventDefault(),F.stopPropagation();let C=F.clientX-D.x,y=F.clientY-D.y;X.current.rotation.y+=C*0.005,X.current.rotation.x+=y*0.005,D={x:F.clientX,y:F.clientY}},E=()=>{O=!1};W.addEventListener("pointerdown",L),W.addEventListener("pointermove",T),W.addEventListener("pointerup",E);let A=new XH,j=()=>{requestAnimationFrame(j);let F=X.current;if(!F){q.render(U,G);return}let C=A.getElapsedTime(),y=Q.current?.active,p=0.15;if(Z&&!y){if(G.position.z>k)G.position.z-=(G.position.z-k)*0.1;if(F.position.y<p)F.position.y+=(p-F.position.y)*0.05}else if(!Z){if(G.position.z<M)G.position.z+=(M-G.position.z)*0.05;if(F.position.y>0)F.position.y-=(F.position.y-0)*0.05}if(!O&&!y)F.rotation.y+=0.001,F.position.y+=Math.sin(C*0.5)*0.001;if(y){let{targetX:l,targetY:o,startTime:m,startScale:a,startBagX:d,startBagY:Z0}=Q.current,q0=800,I0=Date.now()-m,K0=Math.min(1,I0/800),e0=1-Math.pow(1-K0,4);F.position.x=Nw.lerp(d,l,e0),F.position.y=Nw.lerp(Z0,o,e0);let p0=0.1;if(F.scale.setScalar(Nw.lerp(a,p0,e0)),F.rotation.y+=0.1,F.rotation.x+=0.05,K0>=1)Q.current.active=!1}q.render(U,G)},_=()=>{let{clientWidth:F,clientHeight:C}=W;q.setSize(F,C),G.aspect=F/C,G.updateProjectionMatrix()};if(window.addEventListener("resize",_),Y&&X.current){let{clientWidth:F,clientHeight:C}=W,{x:y,y:p}=H_(Y.endX,Y.endY,F,C,G,X.current.position.z);Q.current={active:!0,targetX:y,targetY:p,startTime:Date.now(),startScale:X.current.scale.x,startBagX:X.current.position.x,startBagY:X.current.position.y}}else Q.current=null;return j(),()=>{window.removeEventListener("resize",_),W.removeEventListener("pointerdown",L),W.removeEventListener("pointermove",T),W.removeEventListener("pointerup",E),W.removeChild(q.domElement),q.dispose(),K.forEach((F)=>F.dispose())}},[J.id,J.color,w,Z,Y]),V0("div",{ref:H,className:"absolute inset-0 w-full h-full cursor-grab transition-opacity duration-700",style:{touchAction:"none"}})}),G_=n0.default.memo(({product:J,isVisible:w,onClose:Z})=>{let{SECONDARY_TEXT:Y,ACCENT_COLOR:H,ACCENT_BG:X}=qG,Q=w?"translate-y-0 opacity-100 pointer-events-auto":"translate-y-full opacity-0 pointer-events-none";if(!J)return null;return k9(UG,{children:[w&&V0("div",{className:"fixed inset-0 bg-black/50 z-[89]",onClick:Z,"aria-hidden":"true"}),k9("div",{className:`fixed inset-x-0 bottom-0 z-[90] md:max-w-xl md:mx-auto md:bottom-20 transition-all duration-500 ease-out 
                ${Q} 
                bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-t-3xl md:rounded-3xl shadow-2xl`,children:[k9("div",{className:"flex justify-between items-center mb-6",children:[V0("h3",{className:`text-3xl font-extrabold ${H}`,children:J.name}),V0("button",{onClick:Z,className:"p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition","aria-label":"Cerrar detalles",children:V0(a5,{className:"w-7 h-7"})})]}),V0("p",{className:`text-lg font-light ${Y} leading-relaxed`,children:J.description}),V0("div",{className:"mt-6",children:k9("span",{className:`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full ${X}/20 ${H} border border-emerald-400/50`,children:[V0(o5,{className:"w-4 h-4 mr-2"}),"Peso: ",J.weightGrams," gramos | Lote: CBD-P",J.id]})})]})]})}),q_=n0.default.memo(({product:J,isActive:w,onModelLoaded:Z,isModelDelayedVisible:Y,flyoutTarget:H})=>{let{PRIMARY_TEXT:X}=qG;return k9("section",{className:"w-full h-screen flex flex-col justify-end items-center relative overflow-hidden snap-start pb-28",style:{backgroundColor:J.color+"20"},children:[V0("div",{className:`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center z-5 transition-all duration-700 ease-out ${w?"opacity-30 scale-100":"opacity-0 scale-125"}`,children:V0("h1",{className:"text-[18vw] font-black leading-none whitespace-nowrap tracking-tighter",style:{color:J.color},children:J.name})}),V0("div",{className:`absolute inset-0 z-20 transition-opacity duration-300 ${Y&&w||H?"opacity-100":"opacity-0"}`,children:V0(U_,{product:J,onModelLoaded:Z,isActive:w,flyoutTarget:H})})]},J.uniqueKey)}),k_=({isVisible:J,onClick:w})=>{return V0("button",{onClick:w,className:`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white/20 backdrop-blur-lg text-white shadow-xl transition-all duration-300 transform ${J?"opacity-100 translate-y-0":"opacity-0 translate-y-20 pointer-events-none"} hover:bg-emerald-400 hover:text-black`,"aria-label":"Volver al inicio de la página",children:V0(jw,{className:"w-6 h-6"})})},jM=()=>{let J=n0.useRef(null),w=n0.useRef(null),[Z,Y]=n0.useState(!1),[H,X]=n0.useState(!0),[Q,W]=n0.useState(null),[U,G]=n0.useState(!1),q=Q_(),{dynamicList:$,currentIndex:K,activeProduct:R,handleScroll:z,handleClickDot:B,showBackToTop:M,handleBackToTop:k}=W_(J),{groupedItemsList:O,handleAddItem:D,handleDecrementItem:L,handleRemoveItem:T,calculateTotal:E,cartCount:A}=X_(),j=n0.useCallback((K0,e0)=>{if(D(K0),!J.current||!w.current)return;let p0=w.current.getBoundingClientRect(),i=p0.left+p0.width/2,X0=p0.top+p0.height/2;W({product:K0,target:{endX:i,endY:X0}}),setTimeout(()=>W(null),850),q(`${K0.name} añadido.`)},[D,q]),_=n0.useCallback(()=>{},[]);n0.useEffect(()=>{X(!1);let K0=setTimeout(()=>{X(!0)},150);return()=>clearTimeout(K0)},[R?.uniqueKey]);let{THEME_BG:F,HEADER_TEXT:C,ICON_COLOR:y,DOT_NAV_BG:p,CART_BG:l,CART_TEXT_COLOR:o,CART_BORDER_COLOR:m,ACCENT_COLOR:a,NOTIFICATION_BG:d,ACCENT_BG:Z0,PRIMARY_TEXT:q0}=qG,I0=R?GG.findIndex((K0)=>K0.id===R.id):-1;return k9("div",{className:`min-h-screen font-['Inter'] antialiased ${F} overflow-hidden`,children:[V0("style",{children:`
            @keyframes pulse-once {
              0%, 100% { transform: translate(-50%, 0) scale(1); }
              50% { transform: translate(-50%, 0) scale(1.05); }
            }
            .animate-pulse-once {
              animation: pulse-once 0.3s ease-out;
            }
          `}),V0("header",{className:"fixed top-0 left-0 w-full z-30 p-3 pr-6 sm:p-4 sm:pr-8",children:k9("div",{className:"flex justify-between items-center max-w-7xl mx-auto",children:[V0("span",{className:`text-xl md:text-2xl font-extrabold tracking-widest ${C}`,children:"UNHEALTHY"}),k9("button",{onClick:()=>Y(!0),ref:w,className:"relative p-2 rounded-full hover:bg-white/10 transition duration-300","aria-label":"Abrir carrito de compras",children:[V0(n5,{className:`w-6 h-6 ${y}`}),A>0&&V0("span",{className:`absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 ${Z0} rounded-full`,children:A})]})]})}),V0("div",{id:"notification",className:`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-3 px-6 max-w-sm ${d} text-white font-semibold rounded-full shadow-2xl transition duration-500 ease-in-out opacity-0 scale-95 flex items-center space-x-2`,children:"Notificación"}),V0(k_,{isVisible:M,onClick:k}),V0("nav",{className:`hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-3 p-2 rounded-full shadow-xl border border-white/10 ${p}`,children:GG.map((K0,e0)=>V0("button",{onClick:()=>B(e0),className:`w-3 h-3 rounded-full transition-all duration-300 ${I0===e0?`${Z0} scale-150 ring-2 ring-white ring-opacity-50 shadow-inner shadow-black`:"bg-white/30 hover:bg-white/60"}`,"aria-label":`Ir al producto ${K0.name}`},K0.id))}),Z&&V0("div",{className:"fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",onClick:()=>Y(!1),"aria-hidden":"true"}),k9("div",{className:`fixed top-0 right-0 h-full w-full md:max-w-sm md:w-96 z-50 transition-transform duration-500 ease-in-out ${Z?"translate-x-0":"translate-x-full"} ${l} ${o} flex flex-col p-6 border-l border-white/10 shadow-2xl`,children:[k9("div",{className:`flex justify-between items-center pb-4 border-b ${m}`,children:[V0("h2",{className:"text-3xl font-extrabold tracking-tight",children:"Tu Cesta"}),V0("button",{onClick:()=>Y(!1),className:"p-2 rounded-full hover:bg-white/10 transition","aria-label":"Cerrar carrito",children:V0(a5,{className:"w-7 h-7"})})]}),V0("div",{className:"flex-grow overflow-y-auto py-6",children:A===0?V0("p",{className:"text-center italic mt-12 text-gray-500 text-lg",children:"Tu carrito está vacío. ¡Es hora de explorar!"}):O.map((K0)=>k9("div",{className:`py-4 border-b border-dashed ${m}`,children:[k9("div",{className:"flex justify-between items-start mb-2",children:[V0("span",{className:"font-extrabold text-white text-xl",children:K0.product.name}),V0("button",{onClick:()=>T(K0.product.id),className:"p-2 rounded-full hover:bg-red-500/10 text-red-500 transition","aria-label":`Eliminar grupo de ${K0.product.name}`,children:V0(fw,{className:"w-5 h-5"})})]}),k9("div",{className:"flex justify-between items-center mt-2",children:[k9("div",{className:"flex items-center space-x-2 text-white/90 bg-gray-800/50 p-1 rounded-xl shadow-inner border border-gray-700",children:[V0("button",{onClick:()=>L(K0.product.id),className:"text-white w-8 h-8 rounded-lg hover:bg-gray-700 transition font-bold text-xl","aria-label":`Quitar uno de ${K0.product.name}`,children:"−"}),V0("span",{className:"font-extrabold text-xl w-6 text-center",children:K0.quantity}),V0("button",{onClick:()=>D(K0.product),className:"text-white w-8 h-8 rounded-lg hover:bg-gray-700 transition font-bold text-xl","aria-label":`Añadir uno de ${K0.product.name}`,children:"+"})]}),k9("div",{className:"text-right",children:[V0("span",{className:`font-extrabold text-2xl block ${a}`,children:(K0.product.price*K0.quantity).toLocaleString("es-ES",{style:"currency",currency:"EUR"})}),k9("span",{className:"text-sm text-gray-500 mt-1",children:[K0.product.weightGrams,"g por unidad"]})]})]})]},K0.product.id))}),k9("div",{className:`pt-6 border-t ${m}`,children:[k9("div",{className:"flex justify-between items-center text-2xl font-bold mb-6",children:[V0("span",{children:"Total:"}),k9("span",{className:a,children:[E," €"]})]}),k9("button",{disabled:A===0,className:`w-full py-4 text-xl font-extrabold rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 ${A>0?"bg-emerald-400 text-black hover:bg-emerald-500 transform active:scale-[0.99]":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,children:[V0("span",{children:"Proceder al Pago Seguro"}),V0(Sw,{className:"w-5 h-5"})]})]})]}),V0("div",{ref:J,onScroll:z,className:"w-full h-screen overflow-y-scroll bg-stone-950 snap-y snap-mandatory",children:$.map((K0,e0)=>V0(q_,{product:K0,isActive:e0===K,onModelLoaded:_,isModelDelayedVisible:H,flyoutTarget:e0===K&&Q&&Q.product.id===K0.id?Q.target:null},K0.uniqueKey))}),R&&V0("div",{className:"fixed bottom-0 left-0 right-0 z-40 w-full pointer-events-auto transition-all duration-300",children:k9("div",{className:"flex items-center justify-between w-full max-w-3xl mx-auto px-6 py-5 sm:p-7 pointer-events-auto bg-black/90 backdrop-blur-xl border-t border-gray-800 rounded-t-3xl",children:[k9("div",{className:"flex flex-col",children:[V0("span",{className:`text-3xl font-black ${a} leading-none tracking-tight`,children:R.price.toLocaleString("es-ES",{style:"currency",currency:"EUR"})}),k9("div",{className:"flex items-center space-x-3",children:[k9("span",{className:`text-lg font-bold ${q0}/70`,children:[R.weightGrams,"g"]}),V0("span",{className:"text-xl text-white/50",children:"•"}),k9("button",{onClick:()=>G(!0),className:"flex items-center space-x-1 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition duration-300 transform active:scale-95","aria-label":"Mostrar más detalles del producto",children:[V0(o5,{className:"w-4 h-4"}),V0("span",{children:"Detalles"})]})]})]}),k9("button",{onClick:(K0)=>j(R,K0),className:`flex items-center justify-center space-x-3 px-8 py-4 text-black text-xl font-extrabold rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-[1.05] active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/80 ${Z0}`,children:[V0("span",{children:"Añadir"}),V0(n5,{className:"w-6 h-6"})]})]})}),V0(G_,{product:R,isVisible:U,onClose:()=>G(!1)})]})};var K_=document.getElementById("root"),$_=V0(fM.StrictMode,{children:V0(jM,{})});bM.createRoot(K_).render($_);

//# debugId=1998BCBC1E2D2E5B64756E2164756E21
//# sourceMappingURL=/unhealthy/chunk-ntna0t4b.js.map
