var lM=Object.create;var{getPrototypeOf:pM,defineProperty:RH,getOwnPropertyNames:dM}=Object;var mM=Object.prototype.hasOwnProperty;var r6=(J,w,Z)=>{Z=J!=null?lM(pM(J)):{};let Y=w||!J||!J.__esModule?RH(Z,"default",{value:J,enumerable:!0}):Z;for(let H of dM(J))if(!mM.call(Y,H))RH(Y,H,{get:()=>J[H],enumerable:!0});return Y};var DH=(J,w)=>()=>(w||J((w={exports:{}}).exports,w),w.exports);var RG=(J,w)=>{for(var Z in w)RH(J,Z,{get:w[Z],enumerable:!0,configurable:!0,set:(Y)=>w[Z]=()=>Y})};var MH=(J,w)=>()=>(J&&(w=J(J=0)),w);var l7=DH((QO)=>{var NH=Symbol.for("react.transitional.element"),uM=Symbol.for("react.portal"),cM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),sM=Symbol.for("react.profiler"),oM=Symbol.for("react.consumer"),nM=Symbol.for("react.context"),aM=Symbol.for("react.forward_ref"),rM=Symbol.for("react.suspense"),tM=Symbol.for("react.memo"),NG=Symbol.for("react.lazy"),eM=Symbol.for("react.activity"),DG=Symbol.iterator;function JO(J){if(J===null||typeof J!=="object")return null;return J=DG&&J[DG]||J["@@iterator"],typeof J==="function"?J:null}var zG={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LG=Object.assign,BG={};function I1(J,w,Z){this.props=J,this.context=w,this.refs=BG,this.updater=Z||zG}I1.prototype.isReactComponent={};I1.prototype.setState=function(J,w){if(typeof J!=="object"&&typeof J!=="function"&&J!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,J,w,"setState")};I1.prototype.forceUpdate=function(J){this.updater.enqueueForceUpdate(this,J,"forceUpdate")};function VG(){}VG.prototype=I1.prototype;function zH(J,w,Z){this.props=J,this.context=w,this.refs=BG,this.updater=Z||zG}var LH=zH.prototype=new VG;LH.constructor=zH;LG(LH,I1.prototype);LH.isPureReactComponent=!0;var MG=Array.isArray;function FH(){}var F9={H:null,A:null,T:null,S:null},_G=Object.prototype.hasOwnProperty;function BH(J,w,Z){var Y=Z.ref;return{$$typeof:NH,type:J,key:w,ref:Y!==void 0?Y:null,props:Z}}function wO(J,w){return BH(J.type,w,J.props)}function VH(J){return typeof J==="object"&&J!==null&&J.$$typeof===NH}function ZO(J){var w={"=":"=0",":":"=2"};return"$"+J.replace(/[=:]/g,function(Z){return w[Z]})}var OG=/\/+/g;function OH(J,w){return typeof J==="object"&&J!==null&&J.key!=null?ZO(""+J.key):w.toString(36)}function YO(J){switch(J.status){case"fulfilled":return J.value;case"rejected":throw J.reason;default:switch(typeof J.status==="string"?J.then(FH,FH):(J.status="pending",J.then(function(w){J.status==="pending"&&(J.status="fulfilled",J.value=w)},function(w){J.status==="pending"&&(J.status="rejected",J.reason=w)})),J.status){case"fulfilled":return J.value;case"rejected":throw J.reason}}throw J}function E1(J,w,Z,Y,H){var X=typeof J;if(X==="undefined"||X==="boolean")J=null;var Q=!1;if(J===null)Q=!0;else switch(X){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(J.$$typeof){case NH:case uM:Q=!0;break;case NG:return Q=J._init,E1(Q(J._payload),w,Z,Y,H)}}if(Q)return H=H(J),Q=Y===""?"."+OH(J,0):Y,MG(H)?(Z="",Q!=null&&(Z=Q.replace(OG,"$&/")+"/"),E1(H,w,Z,"",function(G){return G})):H!=null&&(VH(H)&&(H=wO(H,Z+(H.key==null||J&&J.key===H.key?"":(""+H.key).replace(OG,"$&/")+"/")+Q)),w.push(H)),1;Q=0;var W=Y===""?".":Y+":";if(MG(J))for(var U=0;U<J.length;U++)Y=J[U],X=W+OH(Y,U),Q+=E1(Y,w,Z,X,H);else if(U=JO(J),typeof U==="function")for(J=U.call(J),U=0;!(Y=J.next()).done;)Y=Y.value,X=W+OH(Y,U++),Q+=E1(Y,w,Z,X,H);else if(X==="object"){if(typeof J.then==="function")return E1(YO(J),w,Z,Y,H);throw w=String(J),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(J).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return Q}function hw(J,w,Z){if(J==null)return J;var Y=[],H=0;return E1(J,Y,"","",function(X){return w.call(Z,X,H++)}),Y}function HO(J){if(J._status===-1){var w=J._result;w=w(),w.then(function(Z){if(J._status===0||J._status===-1)J._status=1,J._result=Z},function(Z){if(J._status===0||J._status===-1)J._status=2,J._result=Z}),J._status===-1&&(J._status=0,J._result=w)}if(J._status===1)return J._result.default;throw J._result}var FG=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(w))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},XO={map:hw,forEach:function(J,w,Z){hw(J,function(){w.apply(this,arguments)},Z)},count:function(J){var w=0;return hw(J,function(){w++}),w},toArray:function(J){return hw(J,function(w){return w})||[]},only:function(J){if(!VH(J))throw Error("React.Children.only expected to receive a single React element child.");return J}};QO.Activity=eM;QO.Children=XO;QO.Component=I1;QO.Fragment=cM;QO.Profiler=sM;QO.PureComponent=zH;QO.StrictMode=iM;QO.Suspense=rM;QO.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F9;QO.__COMPILER_RUNTIME={__proto__:null,c:function(J){return F9.H.useMemoCache(J)}};QO.cache=function(J){return function(){return J.apply(null,arguments)}};QO.cacheSignal=function(){return null};QO.cloneElement=function(J,w,Z){if(J===null||J===void 0)throw Error("The argument must be a React element, but you passed "+J+".");var Y=LG({},J.props),H=J.key;if(w!=null)for(X in w.key!==void 0&&(H=""+w.key),w)!_G.call(w,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&w.ref===void 0||(Y[X]=w[X]);var X=arguments.length-2;if(X===1)Y.children=Z;else if(1<X){for(var Q=Array(X),W=0;W<X;W++)Q[W]=arguments[W+2];Y.children=Q}return BH(J.type,H,Y)};QO.createContext=function(J){return J={$$typeof:nM,_currentValue:J,_currentValue2:J,_threadCount:0,Provider:null,Consumer:null},J.Provider=J,J.Consumer={$$typeof:oM,_context:J},J};QO.createElement=function(J,w,Z){var Y,H={},X=null;if(w!=null)for(Y in w.key!==void 0&&(X=""+w.key),w)_G.call(w,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(H[Y]=w[Y]);var Q=arguments.length-2;if(Q===1)H.children=Z;else if(1<Q){for(var W=Array(Q),U=0;U<Q;U++)W[U]=arguments[U+2];H.children=W}if(J&&J.defaultProps)for(Y in Q=J.defaultProps,Q)H[Y]===void 0&&(H[Y]=Q[Y]);return BH(J,X,H)};QO.createRef=function(){return{current:null}};QO.forwardRef=function(J){return{$$typeof:aM,render:J}};QO.isValidElement=VH;QO.lazy=function(J){return{$$typeof:NG,_payload:{_status:-1,_result:J},_init:HO}};QO.memo=function(J,w){return{$$typeof:tM,type:J,compare:w===void 0?null:w}};QO.startTransition=function(J){var w=F9.T,Z={};F9.T=Z;try{var Y=J(),H=F9.S;H!==null&&H(Z,Y),typeof Y==="object"&&Y!==null&&typeof Y.then==="function"&&Y.then(FH,FG)}catch(X){FG(X)}finally{w!==null&&Z.types!==null&&(w.types=Z.types),F9.T=w}};QO.unstable_useCacheRefresh=function(){return F9.H.useCacheRefresh()};QO.use=function(J){return F9.H.use(J)};QO.useActionState=function(J,w,Z){return F9.H.useActionState(J,w,Z)};QO.useCallback=function(J,w){return F9.H.useCallback(J,w)};QO.useContext=function(J){return F9.H.useContext(J)};QO.useDebugValue=function(){};QO.useDeferredValue=function(J,w){return F9.H.useDeferredValue(J,w)};QO.useEffect=function(J,w){return F9.H.useEffect(J,w)};QO.useEffectEvent=function(J){return F9.H.useEffectEvent(J)};QO.useId=function(){return F9.H.useId()};QO.useImperativeHandle=function(J,w,Z){return F9.H.useImperativeHandle(J,w,Z)};QO.useInsertionEffect=function(J,w){return F9.H.useInsertionEffect(J,w)};QO.useLayoutEffect=function(J,w){return F9.H.useLayoutEffect(J,w)};QO.useMemo=function(J,w){return F9.H.useMemo(J,w)};QO.useOptimistic=function(J,w){return F9.H.useOptimistic(J,w)};QO.useReducer=function(J,w,Z){return F9.H.useReducer(J,w,Z)};QO.useRef=function(J){return F9.H.useRef(J)};QO.useState=function(J){return F9.H.useState(J)};QO.useSyncExternalStore=function(J,w,Z){return F9.H.useSyncExternalStore(J,w,Z)};QO.useTransition=function(){return F9.H.useTransition()};QO.version="19.2.0"});function AH(J,w){var Z=J.length;J.push(w);J:for(;0<Z;){var Y=Z-1>>>1,H=J[Y];if(0<vw(H,w))J[Y]=w,J[Z]=H,Z=Y;else break J}}function U6(J){return J.length===0?null:J[0]}function dw(J){if(J.length===0)return null;var w=J[0],Z=J.pop();if(Z!==w){J[0]=Z;J:for(var Y=0,H=J.length,X=H>>>1;Y<X;){var Q=2*(Y+1)-1,W=J[Q],U=Q+1,G=J[U];if(0>vw(W,Z))U<H&&0>vw(G,W)?(J[Y]=G,J[U]=Z,Y=U):(J[Y]=W,J[Q]=Z,Y=Q);else if(U<H&&0>vw(G,Z))J[Y]=G,J[U]=Z,Y=U;else break J}}return w}function vw(J,w){var Z=J.sortIndex-w.sortIndex;return Z!==0?Z:J.id-w.id}function lw(J){for(var w=U6(t6);w!==null;){if(w.callback===null)dw(t6);else if(w.startTime<=J)dw(t6),w.sortIndex=w.expirationTime,AH(L6,w);else break;w=U6(t6)}}function SH(J){if(e5=!1,lw(J),!t5)if(U6(L6)!==null)t5=!0,T1||(T1=!0,C1());else{var w=U6(t6);w!==null&&jH(SH,w.startTime-J)}}function TG(){return PH?!0:G6()-CG<aO?!1:!0}function _H(){if(PH=!1,T1){var J=G6();CG=J;var w=!0;try{J:{t5=!1,e5&&(e5=!1,IG(JJ),JJ=-1),CH=!0;var Z=gw;try{w:{lw(J);for(h8=U6(L6);h8!==null&&!(h8.expirationTime>J&&TG());){var Y=h8.callback;if(typeof Y==="function"){h8.callback=null,gw=h8.priorityLevel;var H=Y(h8.expirationTime<=J);if(J=G6(),typeof H==="function"){h8.callback=H,lw(J),w=!0;break w}h8===U6(L6)&&dw(L6),lw(J)}else dw(L6);h8=U6(L6)}if(h8!==null)w=!0;else{var X=U6(t6);X!==null&&jH(SH,X.startTime-J),w=!1}}break J}finally{h8=null,gw=Z,CH=!1}w=void 0}}finally{w?C1():T1=!1}}}function jH(J,w){JJ=EG(function(){J(G6())},w)}var G6=void 0,EH,yw,IH,L6,t6,nO=1,h8=null,gw=3,CH=!1,t5=!1,e5=!1,PH=!1,EG,IG,AG,T1=!1,JJ=-1,aO=5,CG=-1,C1,pw,TH,fH=5,bH=1,xH=4,P1=3,hH=2,vH=function(J){J.callback=null},yH=function(){return gw},gH=function(){PH=!0},S1=function(J,w,Z){var Y=G6();switch(typeof Z==="object"&&Z!==null?(Z=Z.delay,Z=typeof Z==="number"&&0<Z?Y+Z:Y):Z=Y,J){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5000}return H=Z+H,J={id:nO++,callback:w,priorityLevel:J,startTime:Z,expirationTime:H,sortIndex:-1},Z>Y?(J.sortIndex=Z,AH(t6,J),U6(L6)===null&&J===U6(t6)&&(e5?(IG(JJ),JJ=-1):e5=!0,jH(SH,Z-Y))):(J.sortIndex=H,AH(L6,J),t5||CH||(t5=!0,T1||(T1=!0,C1()))),J},lH;var PG=MH(()=>{if(typeof performance==="object"&&typeof performance.now==="function")EH=performance,G6=function(){return EH.now()};else yw=Date,IH=yw.now(),G6=function(){return yw.now()-IH};L6=[],t6=[],EG=typeof setTimeout==="function"?setTimeout:null,IG=typeof clearTimeout==="function"?clearTimeout:null,AG=typeof setImmediate!=="undefined"?setImmediate:null;if(typeof AG==="function")C1=function(){AG(_H)};else if(typeof MessageChannel!=="undefined")pw=new MessageChannel,TH=pw.port2,pw.port1.onmessage=_H,C1=function(){TH.postMessage(null)};else C1=function(){EG(_H,0)};lH=TG});var pH={};RG(pH,{version:()=>iG,useFormStatus:()=>cG,useFormState:()=>uG,unstable_batchedUpdates:()=>mG,requestFormReset:()=>dG,preloadModule:()=>pG,preload:()=>lG,preinitModule:()=>gG,preinit:()=>yG,prefetchDNS:()=>vG,preconnect:()=>hG,flushSync:()=>xG,createPortal:()=>bG,__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE:()=>fG});function jG(J){var w="https://react.dev/errors/"+J;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)w+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+J+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e6(){}function eO(J,w,Z){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tO,key:Y==null?null:""+Y,children:J,containerInfo:w,implementation:Z}}function mw(J,w){if(J==="font")return"";if(typeof w==="string")return w==="use-credentials"?w:""}var SG,Q8,tO,wJ,fG,bG=function(J,w){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(jG(299));return eO(J,w,null,Z)},xG=function(J){var w=wJ.T,Z=Q8.p;try{if(wJ.T=null,Q8.p=2,J)return J()}finally{wJ.T=w,Q8.p=Z,Q8.d.f()}},hG=function(J,w){typeof J==="string"&&(w?(w=w.crossOrigin,w=typeof w==="string"?w==="use-credentials"?w:"":void 0):w=null,Q8.d.C(J,w))},vG=function(J){typeof J==="string"&&Q8.d.D(J)},yG=function(J,w){if(typeof J==="string"&&w&&typeof w.as==="string"){var Z=w.as,Y=mw(Z,w.crossOrigin),H=typeof w.integrity==="string"?w.integrity:void 0,X=typeof w.fetchPriority==="string"?w.fetchPriority:void 0;Z==="style"?Q8.d.S(J,typeof w.precedence==="string"?w.precedence:void 0,{crossOrigin:Y,integrity:H,fetchPriority:X}):Z==="script"&&Q8.d.X(J,{crossOrigin:Y,integrity:H,fetchPriority:X,nonce:typeof w.nonce==="string"?w.nonce:void 0})}},gG=function(J,w){if(typeof J==="string")if(typeof w==="object"&&w!==null){if(w.as==null||w.as==="script"){var Z=mw(w.as,w.crossOrigin);Q8.d.M(J,{crossOrigin:Z,integrity:typeof w.integrity==="string"?w.integrity:void 0,nonce:typeof w.nonce==="string"?w.nonce:void 0})}}else w==null&&Q8.d.M(J)},lG=function(J,w){if(typeof J==="string"&&typeof w==="object"&&w!==null&&typeof w.as==="string"){var Z=w.as,Y=mw(Z,w.crossOrigin);Q8.d.L(J,Z,{crossOrigin:Y,integrity:typeof w.integrity==="string"?w.integrity:void 0,nonce:typeof w.nonce==="string"?w.nonce:void 0,type:typeof w.type==="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority==="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy==="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet==="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes==="string"?w.imageSizes:void 0,media:typeof w.media==="string"?w.media:void 0})}},pG=function(J,w){if(typeof J==="string")if(w){var Z=mw(w.as,w.crossOrigin);Q8.d.m(J,{as:typeof w.as==="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Z,integrity:typeof w.integrity==="string"?w.integrity:void 0})}else Q8.d.m(J)},dG=function(J){Q8.d.r(J)},mG=function(J,w){return J(w)},uG=function(J,w,Z){return wJ.H.useFormState(J,w,Z)},cG=function(){return wJ.H.useHostTransitionStatus()},iG="19.2.0";var sG=MH(()=>{SG=r6(l7(),1);Q8={d:{f:e6,r:function(){throw Error(jG(522))},D:e6,C:e6,L:e6,m:e6,X:e6,S:e6,M:e6},p:0,findDOMNode:null},tO=Symbol.for("react.portal");wJ=SG.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;fG=Q8});var aG=DH(($_,nG)=>{sG();function oG(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oG)}catch(J){console.error(J)}}oG(),nG.exports=pH});var $W={};RG($W,{version:()=>UR,hydrateRoot:()=>WR,createRoot:()=>QR});function c(J){var w="https://react.dev/errors/"+J;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)w+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+J+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Lk(J){return!(!J||J.nodeType!==1&&J.nodeType!==9&&J.nodeType!==11)}function uJ(J){var w=J,Z=J;if(J.alternate)for(;w.return;)w=w.return;else{J=w;do w=J,(w.flags&4098)!==0&&(Z=w.return),J=w.return;while(J)}return w.tag===3?Z:null}function Bk(J){if(J.tag===13){var w=J.memoizedState;if(w===null&&(J=J.alternate,J!==null&&(w=J.memoizedState)),w!==null)return w.dehydrated}return null}function Vk(J){if(J.tag===31){var w=J.memoizedState;if(w===null&&(J=J.alternate,J!==null&&(w=J.memoizedState)),w!==null)return w.dehydrated}return null}function rG(J){if(uJ(J)!==J)throw Error(c(188))}function JF(J){var w=J.alternate;if(!w){if(w=uJ(J),w===null)throw Error(c(188));return w!==J?null:J}for(var Z=J,Y=w;;){var H=Z.return;if(H===null)break;var X=H.alternate;if(X===null){if(Y=H.return,Y!==null){Z=Y;continue}break}if(H.child===X.child){for(X=H.child;X;){if(X===Z)return rG(H),J;if(X===Y)return rG(H),w;X=X.sibling}throw Error(c(188))}if(Z.return!==Y.return)Z=H,Y=X;else{for(var Q=!1,W=H.child;W;){if(W===Z){Q=!0,Z=H,Y=X;break}if(W===Y){Q=!0,Y=H,Z=X;break}W=W.sibling}if(!Q){for(W=X.child;W;){if(W===Z){Q=!0,Z=X,Y=H;break}if(W===Y){Q=!0,Y=X,Z=H;break}W=W.sibling}if(!Q)throw Error(c(189))}}if(Z.alternate!==Y)throw Error(c(190))}if(Z.tag!==3)throw Error(c(188));return Z.stateNode.current===Z?J:w}function _k(J){var w=J.tag;if(w===5||w===26||w===27||w===6)return J;for(J=J.child;J!==null;){if(w=_k(J),w!==null)return w;J=J.sibling}return null}function ZJ(J){if(J===null||typeof J!=="object")return null;return J=tG&&J[tG]||J["@@iterator"],typeof J==="function"?J:null}function _X(J){if(J==null)return null;if(typeof J==="function")return J.$$typeof===YF?null:J.displayName||J.name||null;if(typeof J==="string")return J;switch(J){case v1:return"Fragment";case zX:return"Profiler";case Ak:return"StrictMode";case LX:return"Suspense";case BX:return"SuspenseList";case VX:return"Activity"}if(typeof J==="object")switch(J.$$typeof){case UJ:return"Portal";case T6:return J.displayName||"Context";case Ek:return(J._context.displayName||"Context")+".Consumer";case OQ:var w=J.render;return J=J.displayName,J||(J=w.displayName||w.name||"",J=J!==""?"ForwardRef("+J+")":"ForwardRef"),J;case FQ:return w=J.displayName||null,w!==null?w:_X(J.type)||"Memo";case J7:w=J._payload,J=J._init;try{return _X(J(w))}catch(Z){}}return null}function R6(J){return{current:J}}function i9(J){0>y1||(J.current=AX[y1],AX[y1]=null,y1--)}function R9(J,w){y1++,AX[y1]=J.current,J.current=w}function LZ(J,w){switch(R9(k7,w),R9(PJ,J),R9($6,null),w.nodeType){case 9:case 11:J=(J=w.documentElement)?(J=J.namespaceURI)?Yk(J):0:0;break;default:if(J=w.tagName,w=w.namespaceURI)w=Yk(w),J=i$(w,J);else switch(J){case"svg":J=1;break;case"math":J=2;break;default:J=0}}i9($6),R9($6,J)}function Z5(){i9($6),i9(PJ),i9(k7)}function EX(J){J.memoizedState!==null&&R9(zZ,J);var w=$6.current,Z=i$(w,J.type);w!==Z&&(R9(PJ,J),R9($6,Z))}function BZ(J){PJ.current===J&&(i9($6),i9(PJ)),zZ.current===J&&(i9(zZ),pJ._currentValue=s7)}function d7(J){if(dH===void 0)try{throw Error()}catch(Z){var w=Z.stack.trim().match(/\n( *(at )?)/);dH=w&&w[1]||"",eG=-1<Z.stack.indexOf(`
    at`)?" (<anonymous>)":-1<Z.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dH+J+eG}function uH(J,w){if(!J||mH)return"";mH=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var Y={DetermineComponentFrameRoot:function(){try{if(w){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(R){var $=R}Reflect.construct(J,[],K)}else{try{K.call()}catch(R){$=R}J.call(K.prototype)}}else{try{throw Error()}catch(R){$=R}(K=J())&&typeof K.catch==="function"&&K.catch(function(){})}}catch(R){if(R&&$&&typeof R.stack==="string")return[R.stack,$.stack]}return[null,null]}};Y.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var H=Object.getOwnPropertyDescriptor(Y.DetermineComponentFrameRoot,"name");H&&H.configurable&&Object.defineProperty(Y.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var X=Y.DetermineComponentFrameRoot(),Q=X[0],W=X[1];if(Q&&W){var U=Q.split(`
`),G=W.split(`
`);for(H=Y=0;Y<U.length&&!U[Y].includes("DetermineComponentFrameRoot");)Y++;for(;H<G.length&&!G[H].includes("DetermineComponentFrameRoot");)H++;if(Y===U.length||H===G.length)for(Y=U.length-1,H=G.length-1;1<=Y&&0<=H&&U[Y]!==G[H];)H--;for(;1<=Y&&0<=H;Y--,H--)if(U[Y]!==G[H]){if(Y!==1||H!==1)do if(Y--,H--,0>H||U[Y]!==G[H]){var q=`
`+U[Y].replace(" at new "," at ");return J.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",J.displayName)),q}while(1<=Y&&0<=H);break}}}finally{mH=!1,Error.prepareStackTrace=Z}return(Z=J?J.displayName||J.name:"")?d7(Z):""}function HF(J,w){switch(J.tag){case 26:case 27:case 5:return d7(J.type);case 16:return d7("Lazy");case 13:return J.child!==w&&w!==null?d7("Suspense Fallback"):d7("Suspense");case 19:return d7("SuspenseList");case 0:case 15:return uH(J.type,!1);case 11:return uH(J.type.render,!1);case 1:return uH(J.type,!0);case 31:return d7("Activity");default:return""}}function Jq(J){try{var w="",Z=null;do w+=HF(J,Z),Z=J,J=J.return;while(J);return w}catch(Y){return`
Error generating stack: `+Y.message+`
`+Y.stack}}function Q7(J){if(typeof GF==="function"&&qF(J),E8&&typeof E8.setStrictMode==="function")try{E8.setStrictMode(cJ,J)}catch(w){}}function $F(J){return J>>>=0,J===0?32:31-(kF(J)/KF|0)|0}function m7(J){var w=J&42;if(w!==0)return w;switch(J&-J){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return J&261888;case 262144:case 524288:case 1048576:case 2097152:return J&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return J&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return J}}function aZ(J,w,Z){var Y=J.pendingLanes;if(Y===0)return 0;var H=0,X=J.suspendedLanes,Q=J.pingedLanes;J=J.warmLanes;var W=Y&134217727;return W!==0?(Y=W&~X,Y!==0?H=m7(Y):(Q&=W,Q!==0?H=m7(Q):Z||(Z=W&~J,Z!==0&&(H=m7(Z))))):(W=Y&~X,W!==0?H=m7(W):Q!==0?H=m7(Q):Z||(Z=Y&~J,Z!==0&&(H=m7(Z)))),H===0?0:w!==0&&w!==H&&(w&X)===0&&(X=H&-H,Z=w&-w,X>=Z||X===32&&(Z&4194048)!==0)?w:H}function iJ(J,w){return(J.pendingLanes&~(J.suspendedLanes&~J.pingedLanes)&w)===0}function RF(J,w){switch(J){case 1:case 2:case 4:case 8:case 64:return w+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return w+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pk(){var J=sw;return sw<<=1,(sw&62914560)===0&&(sw=4194304),J}function iH(J){for(var w=[],Z=0;31>Z;Z++)w.push(J);return w}function sJ(J,w){J.pendingLanes|=w,w!==268435456&&(J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0)}function DF(J,w,Z,Y,H,X){var Q=J.pendingLanes;J.pendingLanes=Z,J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0,J.expiredLanes&=Z,J.entangledLanes&=Z,J.errorRecoveryDisabledLanes&=Z,J.shellSuspendCounter=0;var{entanglements:W,expirationTimes:U,hiddenUpdates:G}=J;for(Z=Q&~Z;0<Z;){var q=31-I8(Z),K=1<<q;W[q]=0,U[q]=-1;var $=G[q];if($!==null)for(G[q]=null,q=0;q<$.length;q++){var R=$[q];R!==null&&(R.lane&=-536870913)}Z&=~K}Y!==0&&Sk(J,Y,0),X!==0&&H===0&&J.tag!==0&&(J.suspendedLanes|=X&~(Q&~w))}function Sk(J,w,Z){J.pendingLanes|=w,J.suspendedLanes&=~w;var Y=31-I8(w);J.entangledLanes|=w,J.entanglements[Y]=J.entanglements[Y]|1073741824|Z&261930}function jk(J,w){var Z=J.entangledLanes|=w;for(J=J.entanglements;Z;){var Y=31-I8(Z),H=1<<Y;H&w|J[Y]&w&&(J[Y]|=w),Z&=~H}}function fk(J,w){var Z=w&-w;return Z=(Z&42)!==0?1:zQ(Z),(Z&(J.suspendedLanes|w))!==0?0:Z}function zQ(J){switch(J){case 2:J=1;break;case 8:J=4;break;case 32:J=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:J=128;break;case 268435456:J=134217728;break;default:J=0}return J}function LQ(J){return J&=-J,2<J?8<J?(J&134217727)!==0?32:268435456:8:2}function bk(){var J=w9.p;if(J!==0)return J;return J=window.event,J===void 0?32:YR(J.type)}function wq(J,w){var Z=w9.p;try{return w9.p=J,w()}finally{w9.p=Z}}function BQ(J){delete J[a9],delete J[M8],delete J[CX],delete J[MF],delete J[OF]}function g1(J){var w=J[a9];if(w)return w;for(var Z=J.parentNode;Z;){if(w=Z[$5]||Z[a9]){if(Z=w.alternate,w.child!==null||Z!==null&&Z.child!==null)for(J=Uk(J);J!==null;){if(Z=J[a9])return Z;J=Uk(J)}return w}J=Z,Z=J.parentNode}return null}function R5(J){if(J=J[a9]||J[$5]){var w=J.tag;if(w===5||w===6||w===13||w===31||w===26||w===27||w===3)return J}return null}function qJ(J){var w=J.tag;if(w===5||w===26||w===27||w===6)return J.stateNode;throw Error(c(33))}function n1(J){var w=J[Zq];return w||(w=J[Zq]={hoistableStyles:new Map,hoistableScripts:new Map}),w}function c9(J){J[oJ]=!0}function Y1(J,w){Y5(J,w),Y5(J+"Capture",w)}function Y5(J,w){hk[J]=w;for(J=0;J<w.length;J++)xk.add(w[J])}function NF(J){if(IX.call(Hq,J))return!0;if(IX.call(Yq,J))return!1;if(FF.test(J))return Hq[J]=!0;return Yq[J]=!0,!1}function HZ(J,w,Z){if(NF(w))if(Z===null)J.removeAttribute(w);else{switch(typeof Z){case"undefined":case"function":case"symbol":J.removeAttribute(w);return;case"boolean":var Y=w.toLowerCase().slice(0,5);if(Y!=="data-"&&Y!=="aria-"){J.removeAttribute(w);return}}J.setAttribute(w,""+Z)}}function ow(J,w,Z){if(Z===null)J.removeAttribute(w);else{switch(typeof Z){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(w);return}J.setAttribute(w,""+Z)}}function B6(J,w,Z,Y){if(Y===null)J.removeAttribute(Z);else{switch(typeof Y){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(Z);return}J.setAttributeNS(w,Z,""+Y)}}function y8(J){switch(typeof J){case"bigint":case"boolean":case"number":case"string":case"undefined":return J;case"object":return J;default:return""}}function vk(J){var w=J.type;return(J=J.nodeName)&&J.toLowerCase()==="input"&&(w==="checkbox"||w==="radio")}function zF(J,w,Z){var Y=Object.getOwnPropertyDescriptor(J.constructor.prototype,w);if(!J.hasOwnProperty(w)&&typeof Y!=="undefined"&&typeof Y.get==="function"&&typeof Y.set==="function"){var{get:H,set:X}=Y;return Object.defineProperty(J,w,{configurable:!0,get:function(){return H.call(this)},set:function(Q){Z=""+Q,X.call(this,Q)}}),Object.defineProperty(J,w,{enumerable:Y.enumerable}),{getValue:function(){return Z},setValue:function(Q){Z=""+Q},stopTracking:function(){J._valueTracker=null,delete J[w]}}}}function TX(J){if(!J._valueTracker){var w=vk(J)?"checked":"value";J._valueTracker=zF(J,w,""+J[w])}}function yk(J){if(!J)return!1;var w=J._valueTracker;if(!w)return!0;var Z=w.getValue(),Y="";return J&&(Y=vk(J)?J.checked?"true":"false":J.value),J=Y,J!==Z?(w.setValue(J),!0):!1}function _Z(J){if(J=J||(typeof document!=="undefined"?document:void 0),typeof J==="undefined")return null;try{return J.activeElement||J.body}catch(w){return J.body}}function p8(J){return J.replace(LF,function(w){return"\\"+w.charCodeAt(0).toString(16)+" "})}function PX(J,w,Z,Y,H,X,Q,W){if(J.name="",Q!=null&&typeof Q!=="function"&&typeof Q!=="symbol"&&typeof Q!=="boolean"?J.type=Q:J.removeAttribute("type"),w!=null)if(Q==="number"){if(w===0&&J.value===""||J.value!=w)J.value=""+y8(w)}else J.value!==""+y8(w)&&(J.value=""+y8(w));else Q!=="submit"&&Q!=="reset"||J.removeAttribute("value");w!=null?SX(J,Q,y8(w)):Z!=null?SX(J,Q,y8(Z)):Y!=null&&J.removeAttribute("value"),H==null&&X!=null&&(J.defaultChecked=!!X),H!=null&&(J.checked=H&&typeof H!=="function"&&typeof H!=="symbol"),W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"?J.name=""+y8(W):J.removeAttribute("name")}function gk(J,w,Z,Y,H,X,Q,W){if(X!=null&&typeof X!=="function"&&typeof X!=="symbol"&&typeof X!=="boolean"&&(J.type=X),w!=null||Z!=null){if(!(X!=="submit"&&X!=="reset"||w!==void 0&&w!==null)){TX(J);return}Z=Z!=null?""+y8(Z):"",w=w!=null?""+y8(w):Z,W||w===J.value||(J.value=w),J.defaultValue=w}Y=Y!=null?Y:H,Y=typeof Y!=="function"&&typeof Y!=="symbol"&&!!Y,J.checked=W?J.checked:!!Y,J.defaultChecked=!!Y,Q!=null&&typeof Q!=="function"&&typeof Q!=="symbol"&&typeof Q!=="boolean"&&(J.name=Q),TX(J)}function SX(J,w,Z){w==="number"&&_Z(J.ownerDocument)===J||J.defaultValue===""+Z||(J.defaultValue=""+Z)}function a1(J,w,Z,Y){if(J=J.options,w){w={};for(var H=0;H<Z.length;H++)w["$"+Z[H]]=!0;for(Z=0;Z<J.length;Z++)H=w.hasOwnProperty("$"+J[Z].value),J[Z].selected!==H&&(J[Z].selected=H),H&&Y&&(J[Z].defaultSelected=!0)}else{Z=""+y8(Z),w=null;for(H=0;H<J.length;H++){if(J[H].value===Z){J[H].selected=!0,Y&&(J[H].defaultSelected=!0);return}w!==null||J[H].disabled||(w=J[H])}w!==null&&(w.selected=!0)}}function lk(J,w,Z){if(w!=null&&(w=""+y8(w),w!==J.value&&(J.value=w),Z==null)){J.defaultValue!==w&&(J.defaultValue=w);return}J.defaultValue=Z!=null?""+y8(Z):""}function pk(J,w,Z,Y){if(w==null){if(Y!=null){if(Z!=null)throw Error(c(92));if(GJ(Y)){if(1<Y.length)throw Error(c(93));Y=Y[0]}Z=Y}Z==null&&(Z=""),w=Z}Z=y8(w),J.defaultValue=Z,Y=J.textContent,Y===Z&&Y!==""&&Y!==null&&(J.value=Y),TX(J)}function H5(J,w){if(w){var Z=J.firstChild;if(Z&&Z===J.lastChild&&Z.nodeType===3){Z.nodeValue=w;return}}J.textContent=w}function Xq(J,w,Z){var Y=w.indexOf("--")===0;Z==null||typeof Z==="boolean"||Z===""?Y?J.setProperty(w,""):w==="float"?J.cssFloat="":J[w]="":Y?J.setProperty(w,Z):typeof Z!=="number"||Z===0||BF.has(w)?w==="float"?J.cssFloat=Z:J[w]=(""+Z).trim():J[w]=Z+"px"}function dk(J,w,Z){if(w!=null&&typeof w!=="object")throw Error(c(62));if(J=J.style,Z!=null){for(var Y in Z)!Z.hasOwnProperty(Y)||w!=null&&w.hasOwnProperty(Y)||(Y.indexOf("--")===0?J.setProperty(Y,""):Y==="float"?J.cssFloat="":J[Y]="");for(var H in w)Y=w[H],w.hasOwnProperty(H)&&Z[H]!==Y&&Xq(J,H,Y)}else for(var X in w)w.hasOwnProperty(X)&&Xq(J,X,w[X])}function VQ(J){if(J.indexOf("-")===-1)return!1;switch(J){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function XZ(J){return _F.test(""+J)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":J}function P6(){}function _Q(J){return J=J.target||J.srcElement||window,J.correspondingUseElement&&(J=J.correspondingUseElement),J.nodeType===3?J.parentNode:J}function Qq(J){var w=R5(J);if(w&&(J=w.stateNode)){var Z=J[M8]||null;J:switch(J=w.stateNode,w.type){case"input":if(PX(J,Z.value,Z.defaultValue,Z.defaultValue,Z.checked,Z.defaultChecked,Z.type,Z.name),w=Z.name,Z.type==="radio"&&w!=null){for(Z=J;Z.parentNode;)Z=Z.parentNode;Z=Z.querySelectorAll('input[name="'+p8(""+w)+'"][type="radio"]');for(w=0;w<Z.length;w++){var Y=Z[w];if(Y!==J&&Y.form===J.form){var H=Y[M8]||null;if(!H)throw Error(c(90));PX(Y,H.value,H.defaultValue,H.defaultValue,H.checked,H.defaultChecked,H.type,H.name)}}for(w=0;w<Z.length;w++)Y=Z[w],Y.form===J.form&&yk(Y)}break J;case"textarea":lk(J,Z.value,Z.defaultValue);break J;case"select":w=Z.value,w!=null&&a1(J,!!Z.multiple,w,!1)}}}function mk(J,w,Z){if(sH)return J(w,Z);sH=!0;try{var Y=J(w);return Y}finally{if(sH=!1,l1!==null||r1!==null){if(UY(),l1&&(w=l1,J=r1,r1=l1=null,Qq(w),J))for(w=0;w<J.length;w++)Qq(J[w])}}}function SJ(J,w){var Z=J.stateNode;if(Z===null)return null;var Y=Z[M8]||null;if(Y===null)return null;Z=Y[w];J:switch(w){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(Y=!Y.disabled)||(J=J.type,Y=!(J==="button"||J==="input"||J==="select"||J==="textarea")),J=!Y;break J;default:J=!1}if(J)return null;if(Z&&typeof Z!=="function")throw Error(c(231,w,typeof Z));return Z}function uk(){if(QZ)return QZ;var J,w=AQ,Z=w.length,Y,H="value"in W7?W7.value:W7.textContent,X=H.length;for(J=0;J<Z&&w[J]===H[J];J++);var Q=Z-J;for(Y=1;Y<=Q&&w[Z-Y]===H[X-Y];Y++);return QZ=H.slice(J,1<Y?1-Y:void 0)}function WZ(J){var w=J.keyCode;return"charCode"in J?(J=J.charCode,J===0&&w===13&&(J=13)):J=w,J===10&&(J=13),32<=J||J===13?J:0}function nw(){return!0}function Wq(){return!1}function O8(J){function w(Z,Y,H,X,Q){this._reactName=Z,this._targetInst=H,this.type=Y,this.nativeEvent=X,this.target=Q,this.currentTarget=null;for(var W in J)J.hasOwnProperty(W)&&(Z=J[W],this[W]=Z?Z(X):X[W]);return this.isDefaultPrevented=(X.defaultPrevented!=null?X.defaultPrevented:X.returnValue===!1)?nw:Wq,this.isPropagationStopped=Wq,this}return L9(w.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Z=this.nativeEvent;Z&&(Z.preventDefault?Z.preventDefault():typeof Z.returnValue!=="unknown"&&(Z.returnValue=!1),this.isDefaultPrevented=nw)},stopPropagation:function(){var Z=this.nativeEvent;Z&&(Z.stopPropagation?Z.stopPropagation():typeof Z.cancelBubble!=="unknown"&&(Z.cancelBubble=!0),this.isPropagationStopped=nw)},persist:function(){},isPersistent:nw}),w}function vF(J){var w=this.nativeEvent;return w.getModifierState?w.getModifierState(J):(J=hF[J])?!!w[J]:!1}function EQ(){return vF}function ik(J,w){switch(J){case"keyup":return nF.indexOf(w.keyCode)!==-1;case"keydown":return w.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sk(J){return J=J.detail,typeof J==="object"&&"data"in J?J.data:null}function rF(J,w){switch(J){case"compositionend":return sk(w);case"keypress":if(w.which!==32)return null;return Kq=!0,kq;case"textInput":return J=w.data,J===kq&&Kq?null:J;default:return null}}function tF(J,w){if(p1)return J==="compositionend"||!IQ&&ik(J,w)?(J=uk(),QZ=AQ=W7=null,p1=!1,J):null;switch(J){case"paste":return null;case"keypress":if(!(w.ctrlKey||w.altKey||w.metaKey)||w.ctrlKey&&w.altKey){if(w.char&&1<w.char.length)return w.char;if(w.which)return String.fromCharCode(w.which)}return null;case"compositionend":return ck&&w.locale!=="ko"?null:w.data;default:return null}}function $q(J){var w=J&&J.nodeName&&J.nodeName.toLowerCase();return w==="input"?!!eF[J.type]:w==="textarea"?!0:!1}function ok(J,w,Z,Y){l1?r1?r1.push(Y):r1=[Y]:l1=Y,w=dZ(w,"onChange"),0<w.length&&(Z=new rZ("onChange","change",null,Z,Y),J.push({event:Z,listeners:w}))}function JN(J){m$(J,0)}function eZ(J){var w=qJ(J);if(yk(w))return J}function Rq(J,w){if(J==="change")return w}function Dq(){FJ&&(FJ.detachEvent("onpropertychange",ak),jJ=FJ=null)}function ak(J){if(J.propertyName==="value"&&eZ(jJ)){var w=[];ok(w,jJ,J,_Q(J)),mk(JN,w)}}function wN(J,w,Z){J==="focusin"?(Dq(),FJ=w,jJ=Z,FJ.attachEvent("onpropertychange",ak)):J==="focusout"&&Dq()}function ZN(J){if(J==="selectionchange"||J==="keyup"||J==="keydown")return eZ(jJ)}function YN(J,w){if(J==="click")return eZ(w)}function HN(J,w){if(J==="input"||J==="change")return eZ(w)}function XN(J,w){return J===w&&(J!==0||1/J===1/w)||J!==J&&w!==w}function fJ(J,w){if(T8(J,w))return!0;if(typeof J!=="object"||J===null||typeof w!=="object"||w===null)return!1;var Z=Object.keys(J),Y=Object.keys(w);if(Z.length!==Y.length)return!1;for(Y=0;Y<Z.length;Y++){var H=Z[Y];if(!IX.call(w,H)||!T8(J[H],w[H]))return!1}return!0}function Mq(J){for(;J&&J.firstChild;)J=J.firstChild;return J}function Oq(J,w){var Z=Mq(J);J=0;for(var Y;Z;){if(Z.nodeType===3){if(Y=J+Z.textContent.length,J<=w&&Y>=w)return{node:Z,offset:w-J};J=Y}J:{for(;Z;){if(Z.nextSibling){Z=Z.nextSibling;break J}Z=Z.parentNode}Z=void 0}Z=Mq(Z)}}function rk(J,w){return J&&w?J===w?!0:J&&J.nodeType===3?!1:w&&w.nodeType===3?rk(J,w.parentNode):("contains"in J)?J.contains(w):J.compareDocumentPosition?!!(J.compareDocumentPosition(w)&16):!1:!1}function tk(J){J=J!=null&&J.ownerDocument!=null&&J.ownerDocument.defaultView!=null?J.ownerDocument.defaultView:window;for(var w=_Z(J.document);w instanceof J.HTMLIFrameElement;){try{var Z=typeof w.contentWindow.location.href==="string"}catch(Y){Z=!1}if(Z)J=w.contentWindow;else break;w=_Z(J.document)}return w}function CQ(J){var w=J&&J.nodeName&&J.nodeName.toLowerCase();return w&&(w==="input"&&(J.type==="text"||J.type==="search"||J.type==="tel"||J.type==="url"||J.type==="password")||w==="textarea"||J.contentEditable==="true")}function Fq(J,w,Z){var Y=Z.window===Z?Z.document:Z.nodeType===9?Z:Z.ownerDocument;xX||d1==null||d1!==_Z(Y)||(Y=d1,("selectionStart"in Y)&&CQ(Y)?Y={start:Y.selectionStart,end:Y.selectionEnd}:(Y=(Y.ownerDocument&&Y.ownerDocument.defaultView||window).getSelection(),Y={anchorNode:Y.anchorNode,anchorOffset:Y.anchorOffset,focusNode:Y.focusNode,focusOffset:Y.focusOffset}),NJ&&fJ(NJ,Y)||(NJ=Y,Y=dZ(bX,"onSelect"),0<Y.length&&(w=new rZ("onSelect","select",null,w,Z),J.push({event:w,listeners:Y}),w.target=d1)))}function p7(J,w){var Z={};return Z[J.toLowerCase()]=w.toLowerCase(),Z["Webkit"+J]="webkit"+w,Z["Moz"+J]="moz"+w,Z}function X1(J){if(rH[J])return rH[J];if(!m1[J])return J;var w=m1[J],Z;for(Z in w)if(w.hasOwnProperty(Z)&&Z in ek)return rH[J]=w[Z];return J}function w6(J,w){HK.set(J,w),Y1(w,[J])}function JY(){for(var J=u1,w=TQ=u1=0;w<J;){var Z=v8[w];v8[w++]=null;var Y=v8[w];v8[w++]=null;var H=v8[w];v8[w++]=null;var X=v8[w];if(v8[w++]=null,Y!==null&&H!==null){var Q=Y.pending;Q===null?H.next=H:(H.next=Q.next,Q.next=H),Y.pending=H}X!==0&&XK(Z,H,X)}}function wY(J,w,Z,Y){v8[u1++]=J,v8[u1++]=w,v8[u1++]=Z,v8[u1++]=Y,TQ|=Y,J.lanes|=Y,J=J.alternate,J!==null&&(J.lanes|=Y)}function PQ(J,w,Z,Y){return wY(J,w,Z,Y),EZ(J)}function Q1(J,w){return wY(J,null,null,w),EZ(J)}function XK(J,w,Z){J.lanes|=Z;var Y=J.alternate;Y!==null&&(Y.lanes|=Z);for(var H=!1,X=J.return;X!==null;)X.childLanes|=Z,Y=X.alternate,Y!==null&&(Y.childLanes|=Z),X.tag===22&&(J=X.stateNode,J===null||J._visibility&1||(H=!0)),J=X,X=X.return;return J.tag===3?(X=J.stateNode,H&&w!==null&&(H=31-I8(Z),J=X.hiddenUpdates,Y=J[H],Y===null?J[H]=[w]:Y.push(w),w.lane=Z|536870912),X):null}function EZ(J){if(50<CJ)throw CJ=0,YQ=null,Error(c(185));for(var w=J.return;w!==null;)J=w,w=J.return;return J.tag===3?J.stateNode:null}function qN(J,w,Z,Y){this.tag=J,this.key=Z,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=w,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=Y,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function V8(J,w,Z,Y){return new qN(J,w,Z,Y)}function SQ(J){return J=J.prototype,!(!J||!J.isReactComponent)}function j6(J,w){var Z=J.alternate;return Z===null?(Z=V8(J.tag,w,J.key,J.mode),Z.elementType=J.elementType,Z.type=J.type,Z.stateNode=J.stateNode,Z.alternate=J,J.alternate=Z):(Z.pendingProps=w,Z.type=J.type,Z.flags=0,Z.subtreeFlags=0,Z.deletions=null),Z.flags=J.flags&65011712,Z.childLanes=J.childLanes,Z.lanes=J.lanes,Z.child=J.child,Z.memoizedProps=J.memoizedProps,Z.memoizedState=J.memoizedState,Z.updateQueue=J.updateQueue,w=J.dependencies,Z.dependencies=w===null?null:{lanes:w.lanes,firstContext:w.firstContext},Z.sibling=J.sibling,Z.index=J.index,Z.ref=J.ref,Z.refCleanup=J.refCleanup,Z}function QK(J,w){J.flags&=65011714;var Z=J.alternate;return Z===null?(J.childLanes=0,J.lanes=w,J.child=null,J.subtreeFlags=0,J.memoizedProps=null,J.memoizedState=null,J.updateQueue=null,J.dependencies=null,J.stateNode=null):(J.childLanes=Z.childLanes,J.lanes=Z.lanes,J.child=Z.child,J.subtreeFlags=0,J.deletions=null,J.memoizedProps=Z.memoizedProps,J.memoizedState=Z.memoizedState,J.updateQueue=Z.updateQueue,J.type=Z.type,w=Z.dependencies,J.dependencies=w===null?null:{lanes:w.lanes,firstContext:w.firstContext}),J}function GZ(J,w,Z,Y,H,X){var Q=0;if(Y=J,typeof J==="function")SQ(J)&&(Q=1);else if(typeof J==="string")Q=$z(J,Z,$6.current)?26:J==="html"||J==="head"||J==="body"?27:5;else J:switch(J){case VX:return J=V8(31,Z,w,H),J.elementType=VX,J.lanes=X,J;case v1:return o7(Z.children,H,X,w);case Ak:Q=8,H|=24;break;case zX:return J=V8(12,Z,w,H|2),J.elementType=zX,J.lanes=X,J;case LX:return J=V8(13,Z,w,H),J.elementType=LX,J.lanes=X,J;case BX:return J=V8(19,Z,w,H),J.elementType=BX,J.lanes=X,J;default:if(typeof J==="object"&&J!==null)switch(J.$$typeof){case T6:Q=10;break J;case Ek:Q=9;break J;case OQ:Q=11;break J;case FQ:Q=14;break J;case J7:Q=16,Y=null;break J}Q=29,Z=Error(c(130,J===null?"null":typeof J,"")),Y=null}return w=V8(Q,Z,w,H),w.elementType=J,w.type=Y,w.lanes=X,w}function o7(J,w,Z,Y){return J=V8(7,J,Y,w),J.lanes=Z,J}function tH(J,w,Z){return J=V8(6,J,null,w),J.lanes=Z,J}function WK(J){var w=V8(18,null,null,0);return w.stateNode=J,w}function eH(J,w,Z){return w=V8(4,J.children!==null?J.children:[],J.key,w),w.lanes=Z,w.stateNode={containerInfo:J.containerInfo,pendingChildren:null,implementation:J.implementation},w}function d8(J,w){if(typeof J==="object"&&J!==null){var Z=Nq.get(J);if(Z!==void 0)return Z;return w={value:J,source:w,stack:Jq(w)},Nq.set(J,w),w}return{value:J,source:w,stack:Jq(w)}}function I6(J,w){i1[s1++]=bJ,i1[s1++]=IZ,IZ=J,bJ=w}function UK(J,w,Z){g8[l8++]=q6,g8[l8++]=k6,g8[l8++]=z7,z7=J;var Y=q6;J=k6;var H=32-I8(Y)-1;Y&=~(1<<H),Z+=1;var X=32-I8(w)+H;if(30<X){var Q=H-H%5;X=(Y&(1<<Q)-1).toString(32),Y>>=Q,H-=Q,q6=1<<32-I8(w)+H|Z<<H|Y,k6=X+J}else q6=1<<X|Z<<H|Y,k6=J}function jQ(J){J.return!==null&&(I6(J,1),UK(J,1,0))}function fQ(J){for(;J===IZ;)IZ=i1[--s1],i1[s1]=null,bJ=i1[--s1],i1[s1]=null;for(;J===z7;)z7=g8[--l8],g8[l8]=null,k6=g8[--l8],g8[l8]=null,q6=g8[--l8],g8[l8]=null}function GK(J,w){g8[l8++]=q6,g8[l8++]=k6,g8[l8++]=z7,q6=w.id,k6=w.overflow,z7=J}function L7(J){var w=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xJ(d8(w,J)),vX}function zq(J){var{stateNode:w,type:Z,memoizedProps:Y}=J;switch(w[a9]=J,w[M8]=Y,Z){case"dialog":m0("cancel",w),m0("close",w);break;case"iframe":case"object":case"embed":m0("load",w);break;case"video":case"audio":for(Z=0;Z<gJ.length;Z++)m0(gJ[Z],w);break;case"source":m0("error",w);break;case"img":case"image":case"link":m0("error",w),m0("load",w);break;case"details":m0("toggle",w);break;case"input":m0("invalid",w),gk(w,Y.value,Y.defaultValue,Y.checked,Y.defaultChecked,Y.type,Y.name,!0);break;case"select":m0("invalid",w);break;case"textarea":m0("invalid",w),pk(w,Y.value,Y.defaultValue,Y.children)}Z=Y.children,typeof Z!=="string"&&typeof Z!=="number"&&typeof Z!=="bigint"||w.textContent===""+Z||Y.suppressHydrationWarning===!0||c$(w.textContent,Z)?(Y.popover!=null&&(m0("beforetoggle",w),m0("toggle",w)),Y.onScroll!=null&&m0("scroll",w),Y.onScrollEnd!=null&&m0("scrollend",w),Y.onClick!=null&&(w.onclick=P6),w=!0):w=!1,w||L7(J,!0)}function Lq(J){for(r9=J.return;r9;)switch(r9.tag){case 5:case 31:case 13:m8=!1;return;case 27:case 3:m8=!0;return;default:r9=r9.return}}function j1(J){if(J!==r9)return!1;if(!n0)return Lq(J),n0=!0,!1;var w=J.tag,Z;if(Z=w!==3&&w!==27){if(Z=w===5)Z=J.type,Z=!(Z!=="form"&&Z!=="button")||qQ(J.type,J.memoizedProps);Z=!Z}if(Z&&z9&&L7(J),Lq(J),w===13){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(317));z9=Wk(J)}else if(w===31){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(317));z9=Wk(J)}else w===27?(w=z9,A7(J.type)?(J=RQ,RQ=null,z9=J):z9=w):z9=r9?c8(J.stateNode.nextSibling):null;return!0}function t7(){z9=r9=null,n0=!1}function JX(){var J=K7;return J!==null&&(R8===null?R8=J:R8.push.apply(R8,J),K7=null),J}function xJ(J){K7===null?K7=[J]:K7.push(J)}function Z7(J,w,Z){R9(yX,w._currentValue),w._currentValue=Z}function f6(J){J._currentValue=yX.current,i9(yX)}function gX(J,w,Z){for(;J!==null;){var Y=J.alternate;if((J.childLanes&w)!==w?(J.childLanes|=w,Y!==null&&(Y.childLanes|=w)):Y!==null&&(Y.childLanes&w)!==w&&(Y.childLanes|=w),J===Z)break;J=J.return}}function lX(J,w,Z,Y){var H=J.child;H!==null&&(H.return=J);for(;H!==null;){var X=H.dependencies;if(X!==null){var Q=H.child;X=X.firstContext;J:for(;X!==null;){var W=X;X=H;for(var U=0;U<w.length;U++)if(W.context===w[U]){X.lanes|=Z,W=X.alternate,W!==null&&(W.lanes|=Z),gX(X.return,Z,J),Y||(Q=null);break J}X=W.next}}else if(H.tag===18){if(Q=H.return,Q===null)throw Error(c(341));Q.lanes|=Z,X=Q.alternate,X!==null&&(X.lanes|=Z),gX(Q,Z,J),Q=null}else Q=H.child;if(Q!==null)Q.return=H;else for(Q=H;Q!==null;){if(Q===J){Q=null;break}if(H=Q.sibling,H!==null){H.return=Q.return,Q=H;break}Q=Q.return}H=Q}}function D5(J,w,Z,Y){J=null;for(var H=w,X=!1;H!==null;){if(!X){if((H.flags&524288)!==0)X=!0;else if((H.flags&262144)!==0)break}if(H.tag===10){var Q=H.alternate;if(Q===null)throw Error(c(387));if(Q=Q.memoizedProps,Q!==null){var W=H.type;T8(H.pendingProps.value,Q.value)||(J!==null?J.push(W):J=[W])}}else if(H===zZ.current){if(Q=H.alternate,Q===null)throw Error(c(387));Q.memoizedState.memoizedState!==H.memoizedState.memoizedState&&(J!==null?J.push(pJ):J=[pJ])}H=H.return}J!==null&&lX(w,J,Z,Y),w.flags|=262144}function CZ(J){for(J=J.firstContext;J!==null;){if(!T8(J.context._currentValue,J.memoizedValue))return!0;J=J.next}return!1}function e7(J){W1=J,S6=null,J=J.dependencies,J!==null&&(J.firstContext=null)}function t9(J){return qK(W1,J)}function aw(J,w){return W1===null&&e7(J),qK(J,w)}function qK(J,w){var Z=w._currentValue;if(w={context:w,memoizedValue:Z,next:null},S6===null){if(J===null)throw Error(c(308));S6=w,J.dependencies={lanes:0,firstContext:w},J.flags|=524288}else S6=S6.next=w;return Z}function bQ(){return{controller:new kN,data:new Map,refCount:0}}function aJ(J){J.refCount--,J.refCount===0&&KN($N,function(){J.controller.abort()})}function RN(J,w){if(zJ===null){var Z=zJ=[];pX=0,X5=XW(),t1={status:"pending",value:void 0,then:function(Y){Z.push(Y)}}}return pX++,w.then(Bq,Bq),w}function Bq(){if(--pX===0&&zJ!==null){t1!==null&&(t1.status="fulfilled");var J=zJ;zJ=null,X5=0,t1=null;for(var w=0;w<J.length;w++)J[w]()}}function DN(J,w){var Z=[],Y={status:"pending",value:null,reason:null,then:function(H){Z.push(H)}};return J.then(function(){Y.status="fulfilled",Y.value=w;for(var H=0;H<Z.length;H++)Z[H](w)},function(H){Y.status="rejected",Y.reason=H;for(H=0;H<Z.length;H++)Z[H](void 0)}),Y}function xQ(){var J=n7.current;return J!==null?J:K9.pooledCache}function qZ(J,w){w===null?R9(n7,n7.current):R9(n7,w.pool)}function kK(){var J=xQ();return J===null?null:{parent:h9._currentValue,pool:J}}function _q(J){return J=J.status,J==="fulfilled"||J==="rejected"}function KK(J,w,Z){switch(Z=J[Z],Z===void 0?J.push(w):Z!==w&&(w.then(P6,P6),w=Z),w.status){case"fulfilled":return w.value;case"rejected":throw J=w.reason,Eq(J),J;default:if(typeof w.status==="string")w.then(P6,P6);else{if(J=K9,J!==null&&100<J.shellSuspendCounter)throw Error(c(482));J=w,J.status="pending",J.then(function(Y){if(w.status==="pending"){var H=w;H.status="fulfilled",H.value=Y}},function(Y){if(w.status==="pending"){var H=w;H.status="rejected",H.reason=Y}})}switch(w.status){case"fulfilled":return w.value;case"rejected":throw J=w.reason,Eq(J),J}throw a7=w,M5}}function c7(J){try{var w=J._init;return w(J._payload)}catch(Z){if(Z!==null&&typeof Z==="object"&&typeof Z.then==="function")throw a7=Z,M5;throw Z}}function Aq(){if(a7===null)throw Error(c(459));var J=a7;return a7=null,J}function Eq(J){if(J===M5||J===ZY)throw Error(c(483))}function rw(J){var w=hJ;return hJ+=1,e1===null&&(e1=[]),KK(e1,J,w)}function HJ(J,w){w=w.props.ref,J.ref=w!==void 0?w:null}function tw(J,w){if(w.$$typeof===wF)throw Error(c(525));throw J=Object.prototype.toString.call(w),Error(c(31,J==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":J))}function $K(J){function w(k,O){if(J){var M=k.deletions;M===null?(k.deletions=[O],k.flags|=16):M.push(O)}}function Z(k,O){if(!J)return null;for(;O!==null;)w(k,O),O=O.sibling;return null}function Y(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function H(k,O){return k=j6(k,O),k.index=0,k.sibling=null,k}function X(k,O,M){if(k.index=M,!J)return k.flags|=1048576,O;if(M=k.alternate,M!==null)return M=M.index,M<O?(k.flags|=67108866,O):M;return k.flags|=67108866,O}function Q(k){return J&&k.alternate===null&&(k.flags|=67108866),k}function W(k,O,M,z){if(O===null||O.tag!==6)return O=tH(M,k.mode,z),O.return=k,O;return O=H(O,M),O.return=k,O}function U(k,O,M,z){var T=M.type;if(T===v1)return q(k,O,M.props.children,z,M.key);if(O!==null&&(O.elementType===T||typeof T==="object"&&T!==null&&T.$$typeof===J7&&c7(T)===O.type))return O=H(O,M.props),HJ(O,M),O.return=k,O;return O=GZ(M.type,M.key,M.props,null,k.mode,z),HJ(O,M),O.return=k,O}function G(k,O,M,z){if(O===null||O.tag!==4||O.stateNode.containerInfo!==M.containerInfo||O.stateNode.implementation!==M.implementation)return O=eH(M,k.mode,z),O.return=k,O;return O=H(O,M.children||[]),O.return=k,O}function q(k,O,M,z,T){if(O===null||O.tag!==7)return O=o7(M,k.mode,z,T),O.return=k,O;return O=H(O,M),O.return=k,O}function K(k,O,M){if(typeof O==="string"&&O!==""||typeof O==="number"||typeof O==="bigint")return O=tH(""+O,k.mode,M),O.return=k,O;if(typeof O==="object"&&O!==null){switch(O.$$typeof){case uw:return M=GZ(O.type,O.key,O.props,null,k.mode,M),HJ(M,O),M.return=k,M;case UJ:return O=eH(O,k.mode,M),O.return=k,O;case J7:return O=c7(O),K(k,O,M)}if(GJ(O)||ZJ(O))return O=o7(O,k.mode,M,null),O.return=k,O;if(typeof O.then==="function")return K(k,rw(O),M);if(O.$$typeof===T6)return K(k,aw(k,O),M);tw(k,O)}return null}function $(k,O,M,z){var T=O!==null?O.key:null;if(typeof M==="string"&&M!==""||typeof M==="number"||typeof M==="bigint")return T!==null?null:W(k,O,""+M,z);if(typeof M==="object"&&M!==null){switch(M.$$typeof){case uw:return M.key===T?U(k,O,M,z):null;case UJ:return M.key===T?G(k,O,M,z):null;case J7:return M=c7(M),$(k,O,M,z)}if(GJ(M)||ZJ(M))return T!==null?null:q(k,O,M,z,null);if(typeof M.then==="function")return $(k,O,rw(M),z);if(M.$$typeof===T6)return $(k,O,aw(k,M),z);tw(k,M)}return null}function R(k,O,M,z,T){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return k=k.get(M)||null,W(O,k,""+z,T);if(typeof z==="object"&&z!==null){switch(z.$$typeof){case uw:return k=k.get(z.key===null?M:z.key)||null,U(O,k,z,T);case UJ:return k=k.get(z.key===null?M:z.key)||null,G(O,k,z,T);case J7:return z=c7(z),R(k,O,M,z,T)}if(GJ(z)||ZJ(z))return k=k.get(M)||null,q(O,k,z,T,null);if(typeof z.then==="function")return R(k,O,M,rw(z),T);if(z.$$typeof===T6)return R(k,O,M,aw(O,z),T);tw(O,z)}return null}function N(k,O,M,z){for(var T=null,E=null,A=O,S=O=0,V=null;A!==null&&S<M.length;S++){A.index>S?(V=A,A=null):V=A.sibling;var B=$(k,A,M[S],z);if(B===null){A===null&&(A=V);break}J&&A&&B.alternate===null&&w(k,A),O=X(B,O,S),E===null?T=B:E.sibling=B,E=B,A=V}if(S===M.length)return Z(k,A),n0&&I6(k,S),T;if(A===null){for(;S<M.length;S++)A=K(k,M[S],z),A!==null&&(O=X(A,O,S),E===null?T=A:E.sibling=A,E=A);return n0&&I6(k,S),T}for(A=Y(A);S<M.length;S++)V=R(A,k,S,M[S],z),V!==null&&(J&&V.alternate!==null&&A.delete(V.key===null?S:V.key),O=X(V,O,S),E===null?T=V:E.sibling=V,E=V);return J&&A.forEach(function(C){return w(k,C)}),n0&&I6(k,S),T}function L(k,O,M,z){if(M==null)throw Error(c(151));for(var T=null,E=null,A=O,S=O=0,V=null,B=M.next();A!==null&&!B.done;S++,B=M.next()){A.index>S?(V=A,A=null):V=A.sibling;var C=$(k,A,B.value,z);if(C===null){A===null&&(A=V);break}J&&A&&C.alternate===null&&w(k,A),O=X(C,O,S),E===null?T=C:E.sibling=C,E=C,A=V}if(B.done)return Z(k,A),n0&&I6(k,S),T;if(A===null){for(;!B.done;S++,B=M.next())B=K(k,B.value,z),B!==null&&(O=X(B,O,S),E===null?T=B:E.sibling=B,E=B);return n0&&I6(k,S),T}for(A=Y(A);!B.done;S++,B=M.next())B=R(A,k,S,B.value,z),B!==null&&(J&&B.alternate!==null&&A.delete(B.key===null?S:B.key),O=X(B,O,S),E===null?T=B:E.sibling=B,E=B);return J&&A.forEach(function(g){return w(k,g)}),n0&&I6(k,S),T}function D(k,O,M,z){if(typeof M==="object"&&M!==null&&M.type===v1&&M.key===null&&(M=M.props.children),typeof M==="object"&&M!==null){switch(M.$$typeof){case uw:J:{for(var T=M.key;O!==null;){if(O.key===T){if(T=M.type,T===v1){if(O.tag===7){Z(k,O.sibling),z=H(O,M.props.children),z.return=k,k=z;break J}}else if(O.elementType===T||typeof T==="object"&&T!==null&&T.$$typeof===J7&&c7(T)===O.type){Z(k,O.sibling),z=H(O,M.props),HJ(z,M),z.return=k,k=z;break J}Z(k,O);break}else w(k,O);O=O.sibling}M.type===v1?(z=o7(M.props.children,k.mode,z,M.key),z.return=k,k=z):(z=GZ(M.type,M.key,M.props,null,k.mode,z),HJ(z,M),z.return=k,k=z)}return Q(k);case UJ:J:{for(T=M.key;O!==null;){if(O.key===T)if(O.tag===4&&O.stateNode.containerInfo===M.containerInfo&&O.stateNode.implementation===M.implementation){Z(k,O.sibling),z=H(O,M.children||[]),z.return=k,k=z;break J}else{Z(k,O);break}else w(k,O);O=O.sibling}z=eH(M,k.mode,z),z.return=k,k=z}return Q(k);case J7:return M=c7(M),D(k,O,M,z)}if(GJ(M))return N(k,O,M,z);if(ZJ(M)){if(T=ZJ(M),typeof T!=="function")throw Error(c(150));return M=T.call(M),L(k,O,M,z)}if(typeof M.then==="function")return D(k,O,rw(M),z);if(M.$$typeof===T6)return D(k,O,aw(k,M),z);tw(k,M)}return typeof M==="string"&&M!==""||typeof M==="number"||typeof M==="bigint"?(M=""+M,O!==null&&O.tag===6?(Z(k,O.sibling),z=H(O,M),z.return=k,k=z):(Z(k,O),z=tH(M,k.mode,z),z.return=k,k=z),Q(k)):Z(k,O)}return function(k,O,M,z){try{hJ=0;var T=D(k,O,M,z);return e1=null,T}catch(A){if(A===M5||A===ZY)throw A;var E=V8(29,A,null,k.mode);return E.lanes=z,E.return=k,E}finally{}}}function vQ(J){J.updateQueue={baseState:J.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dX(J,w){J=J.updateQueue,w.updateQueue===J&&(w.updateQueue={baseState:J.baseState,firstBaseUpdate:J.firstBaseUpdate,lastBaseUpdate:J.lastBaseUpdate,shared:J.shared,callbacks:null})}function $7(J){return{lane:J,tag:0,payload:null,callback:null,next:null}}function R7(J,w,Z){var Y=J.updateQueue;if(Y===null)return null;if(Y=Y.shared,(J9&2)!==0){var H=Y.pending;return H===null?w.next=w:(w.next=H.next,H.next=w),Y.pending=w,w=EZ(J),XK(J,null,Z),w}return wY(J,Y,w,Z),EZ(J)}function LJ(J,w,Z){if(w=w.updateQueue,w!==null&&(w=w.shared,(Z&4194048)!==0)){var Y=w.lanes;Y&=J.pendingLanes,Z|=Y,w.lanes=Z,jk(J,Z)}}function wX(J,w){var{updateQueue:Z,alternate:Y}=J;if(Y!==null&&(Y=Y.updateQueue,Z===Y)){var H=null,X=null;if(Z=Z.firstBaseUpdate,Z!==null){do{var Q={lane:Z.lane,tag:Z.tag,payload:Z.payload,callback:null,next:null};X===null?H=X=Q:X=X.next=Q,Z=Z.next}while(Z!==null);X===null?H=X=w:X=X.next=w}else H=X=w;Z={baseState:Y.baseState,firstBaseUpdate:H,lastBaseUpdate:X,shared:Y.shared,callbacks:Y.callbacks},J.updateQueue=Z;return}J=Z.lastBaseUpdate,J===null?Z.firstBaseUpdate=w:J.next=w,Z.lastBaseUpdate=w}function BJ(){if(mX){var J=t1;if(J!==null)throw J}}function VJ(J,w,Z,Y){mX=!1;var H=J.updateQueue;w7=!1;var{firstBaseUpdate:X,lastBaseUpdate:Q}=H,W=H.shared.pending;if(W!==null){H.shared.pending=null;var U=W,G=U.next;U.next=null,Q===null?X=G:Q.next=G,Q=U;var q=J.alternate;q!==null&&(q=q.updateQueue,W=q.lastBaseUpdate,W!==Q&&(W===null?q.firstBaseUpdate=G:W.next=G,q.lastBaseUpdate=U))}if(X!==null){var K=H.baseState;Q=0,q=G=U=null,W=X;do{var $=W.lane&-536870913,R=$!==W.lane;if(R?(s0&$)===$:(Y&$)===$){$!==0&&$===X5&&(mX=!0),q!==null&&(q=q.next={lane:0,tag:W.tag,payload:W.payload,callback:null,next:null});J:{var N=J,L=W;$=w;var D=Z;switch(L.tag){case 1:if(N=L.payload,typeof N==="function"){K=N.call(D,K,$);break J}K=N;break J;case 3:N.flags=N.flags&-65537|128;case 0:if(N=L.payload,$=typeof N==="function"?N.call(D,K,$):N,$===null||$===void 0)break J;K=L9({},K,$);break J;case 2:w7=!0}}$=W.callback,$!==null&&(J.flags|=64,R&&(J.flags|=8192),R=H.callbacks,R===null?H.callbacks=[$]:R.push($))}else R={lane:$,tag:W.tag,payload:W.payload,callback:W.callback,next:null},q===null?(G=q=R,U=K):q=q.next=R,Q|=$;if(W=W.next,W===null)if(W=H.shared.pending,W===null)break;else R=W,W=R.next,R.next=null,H.lastBaseUpdate=R,H.shared.pending=null}while(1);q===null&&(U=K),H.baseState=U,H.firstBaseUpdate=G,H.lastBaseUpdate=q,X===null&&(H.shared.lanes=0),V7|=Q,J.lanes=Q,J.memoizedState=K}}function DK(J,w){if(typeof J!=="function")throw Error(c(191,J));J.call(w)}function MK(J,w){var Z=J.callbacks;if(Z!==null)for(J.callbacks=null,J=0;J<Z.length;J++)DK(Z[J],w)}function Iq(J,w){J=g6,R9(PZ,J),R9(Q5,w),g6=J|w.baseLanes}function uX(){R9(PZ,g6),R9(Q5,Q5.current)}function yQ(){g6=PZ.current,i9(Q5),i9(PZ)}function Y7(J){var w=J.alternate;R9(j9,j9.current&1),R9(P8,J),u8===null&&(w===null||Q5.current!==null?u8=J:w.memoizedState!==null&&(u8=J))}function cX(J){R9(j9,j9.current),R9(P8,J),u8===null&&(u8=J)}function OK(J){J.tag===22?(R9(j9,j9.current),R9(P8,J),u8===null&&(u8=J)):H7(J)}function H7(){R9(j9,j9.current),R9(P8,P8.current)}function B8(J){i9(P8),u8===J&&(u8=null),i9(j9)}function SZ(J){for(var w=J;w!==null;){if(w.tag===13){var Z=w.memoizedState;if(Z!==null&&(Z=Z.dehydrated,Z===null||KQ(Z)||$Q(Z)))return w}else if(w.tag===19&&(w.memoizedProps.revealOrder==="forwards"||w.memoizedProps.revealOrder==="backwards"||w.memoizedProps.revealOrder==="unstable_legacy-backwards"||w.memoizedProps.revealOrder==="together")){if((w.flags&128)!==0)return w}else if(w.child!==null){w.child.return=w,w=w.child;continue}if(w===J)break;for(;w.sibling===null;){if(w.return===null||w.return===J)return null;w=w.return}w.sibling.return=w.return,w=w.sibling}return null}function T9(){throw Error(c(321))}function gQ(J,w){if(w===null)return!1;for(var Z=0;Z<w.length&&Z<J.length;Z++)if(!T8(J[Z],w[Z]))return!1;return!0}function lQ(J,w,Z,Y,H,X){return h6=X,v0=w,w.memoizedState=null,w.updateQueue=null,w.lanes=0,T0.H=J===null||J.memoizedState===null?oK:rQ,w1=!1,X=Z(Y,H),w1=!1,J5&&(X=NK(w,Z,Y,H)),FK(J),X}function FK(J){T0.H=yJ;var w=G9!==null&&G9.next!==null;if(h6=0,b9=G9=v0=null,jZ=!1,vJ=0,w5=null,w)throw Error(c(300));J===null||v9||(J=J.dependencies,J!==null&&CZ(J)&&(v9=!0))}function NK(J,w,Z,Y){v0=J;var H=0;do{if(J5&&(w5=null),vJ=0,J5=!1,25<=H)throw Error(c(301));if(H+=1,b9=G9=null,J.updateQueue!=null){var X=J.updateQueue;X.lastEffect=null,X.events=null,X.stores=null,X.memoCache!=null&&(X.memoCache.index=0)}T0.H=nK,X=w(Z,Y)}while(J5);return X}function ON(){var J=T0.H,w=J.useState()[0];return w=typeof w.then==="function"?rJ(w):w,J=J.useState()[0],(G9!==null?G9.memoizedState:null)!==J&&(v0.flags|=1024),w}function pQ(){var J=fZ!==0;return fZ=0,J}function dQ(J,w,Z){w.updateQueue=J.updateQueue,w.flags&=-2053,J.lanes&=~Z}function mQ(J){if(jZ){for(J=J.memoizedState;J!==null;){var w=J.queue;w!==null&&(w.pending=null),J=J.next}jZ=!1}h6=0,b9=G9=v0=null,J5=!1,vJ=fZ=0,w5=null}function W8(){var J={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b9===null?v0.memoizedState=b9=J:b9=b9.next=J,b9}function f9(){if(G9===null){var J=v0.alternate;J=J!==null?J.memoizedState:null}else J=G9.next;var w=b9===null?v0.memoizedState:b9.next;if(w!==null)b9=w,G9=J;else{if(J===null){if(v0.alternate===null)throw Error(c(467));throw Error(c(310))}G9=J,J={memoizedState:G9.memoizedState,baseState:G9.baseState,baseQueue:G9.baseQueue,queue:G9.queue,next:null},b9===null?v0.memoizedState=b9=J:b9=b9.next=J}return b9}function YY(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rJ(J){var w=vJ;return vJ+=1,w5===null&&(w5=[]),J=KK(w5,J,w),w=v0,(b9===null?w.memoizedState:b9.next)===null&&(w=w.alternate,T0.H=w===null||w.memoizedState===null?oK:rQ),J}function HY(J){if(J!==null&&typeof J==="object"){if(typeof J.then==="function")return rJ(J);if(J.$$typeof===T6)return t9(J)}throw Error(c(438,String(J)))}function uQ(J){var w=null,Z=v0.updateQueue;if(Z!==null&&(w=Z.memoCache),w==null){var Y=v0.alternate;Y!==null&&(Y=Y.updateQueue,Y!==null&&(Y=Y.memoCache,Y!=null&&(w={data:Y.data.map(function(H){return H.slice()}),index:0})))}if(w==null&&(w={data:[],index:0}),Z===null&&(Z=YY(),v0.updateQueue=Z),Z.memoCache=w,Z=w.data[w.index],Z===void 0)for(Z=w.data[w.index]=Array(J),Y=0;Y<J;Y++)Z[Y]=ZF;return w.index++,Z}function v6(J,w){return typeof w==="function"?w(J):w}function kZ(J){var w=f9();return cQ(w,G9,J)}function cQ(J,w,Z){var Y=J.queue;if(Y===null)throw Error(c(311));Y.lastRenderedReducer=Z;var H=J.baseQueue,X=Y.pending;if(X!==null){if(H!==null){var Q=H.next;H.next=X.next,X.next=Q}w.baseQueue=H=X,Y.pending=null}if(X=J.baseState,H===null)J.memoizedState=X;else{w=H.next;var W=Q=null,U=null,G=w,q=!1;do{var K=G.lane&-536870913;if(K!==G.lane?(s0&K)===K:(h6&K)===K){var $=G.revertLane;if($===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),K===X5&&(q=!0);else if((h6&$)===$){G=G.next,$===X5&&(q=!0);continue}else K={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},U===null?(W=U=K,Q=X):U=U.next=K,v0.lanes|=$,V7|=$;K=G.action,w1&&Z(X,K),X=G.hasEagerState?G.eagerState:Z(X,K)}else $={lane:K,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},U===null?(W=U=$,Q=X):U=U.next=$,v0.lanes|=K,V7|=K;G=G.next}while(G!==null&&G!==w);if(U===null?Q=X:U.next=W,!T8(X,J.memoizedState)&&(v9=!0,q&&(Z=t1,Z!==null)))throw Z;J.memoizedState=X,J.baseState=Q,J.baseQueue=U,Y.lastRenderedState=X}return H===null&&(Y.lanes=0),[J.memoizedState,Y.dispatch]}function ZX(J){var w=f9(),Z=w.queue;if(Z===null)throw Error(c(311));Z.lastRenderedReducer=J;var{dispatch:Y,pending:H}=Z,X=w.memoizedState;if(H!==null){Z.pending=null;var Q=H=H.next;do X=J(X,Q.action),Q=Q.next;while(Q!==H);T8(X,w.memoizedState)||(v9=!0),w.memoizedState=X,w.baseQueue===null&&(w.baseState=X),Z.lastRenderedState=X}return[X,Y]}function zK(J,w,Z){var Y=v0,H=f9(),X=n0;if(X){if(Z===void 0)throw Error(c(407));Z=Z()}else Z=w();var Q=!T8((G9||H).memoizedState,Z);if(Q&&(H.memoizedState=Z,v9=!0),H=H.queue,iQ(VK.bind(null,Y,H,J),[J]),H.getSnapshot!==w||Q||b9!==null&&b9.memoizedState.tag&1){if(Y.flags|=2048,W5(9,{destroy:void 0},BK.bind(null,Y,H,Z,w),null),K9===null)throw Error(c(349));X||(h6&127)!==0||LK(Y,w,Z)}return Z}function LK(J,w,Z){J.flags|=16384,J={getSnapshot:w,value:Z},w=v0.updateQueue,w===null?(w=YY(),v0.updateQueue=w,w.stores=[J]):(Z=w.stores,Z===null?w.stores=[J]:Z.push(J))}function BK(J,w,Z,Y){w.value=Z,w.getSnapshot=Y,_K(w)&&AK(J)}function VK(J,w,Z){return Z(function(){_K(w)&&AK(J)})}function _K(J){var w=J.getSnapshot;J=J.value;try{var Z=w();return!T8(J,Z)}catch(Y){return!0}}function AK(J){var w=Q1(J,2);w!==null&&D8(w,J,2)}function iX(J){var w=W8();if(typeof J==="function"){var Z=J;if(J=Z(),w1){Q7(!0);try{Z()}finally{Q7(!1)}}}return w.memoizedState=w.baseState=J,w.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:J},w}function EK(J,w,Z,Y){return J.baseState=Z,cQ(J,G9,typeof Y==="function"?Y:v6)}function FN(J,w,Z,Y,H){if(QY(J))throw Error(c(485));if(J=w.action,J!==null){var X={payload:H,action:J,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(Q){X.listeners.push(Q)}};T0.T!==null?Z(!0):X.isTransition=!1,Y(X),Z=w.pending,Z===null?(X.next=w.pending=X,IK(w,X)):(X.next=Z.next,w.pending=Z.next=X)}}function IK(J,w){var{action:Z,payload:Y}=w,H=J.state;if(w.isTransition){var X=T0.T,Q={};T0.T=Q;try{var W=Z(H,Y),U=T0.S;U!==null&&U(Q,W),Cq(J,w,W)}catch(G){sX(J,w,G)}finally{X!==null&&Q.types!==null&&(X.types=Q.types),T0.T=X}}else try{X=Z(H,Y),Cq(J,w,X)}catch(G){sX(J,w,G)}}function Cq(J,w,Z){Z!==null&&typeof Z==="object"&&typeof Z.then==="function"?Z.then(function(Y){Tq(J,w,Y)},function(Y){return sX(J,w,Y)}):Tq(J,w,Z)}function Tq(J,w,Z){w.status="fulfilled",w.value=Z,CK(w),J.state=Z,w=J.pending,w!==null&&(Z=w.next,Z===w?J.pending=null:(Z=Z.next,w.next=Z,IK(J,Z)))}function sX(J,w,Z){var Y=J.pending;if(J.pending=null,Y!==null){Y=Y.next;do w.status="rejected",w.reason=Z,CK(w),w=w.next;while(w!==Y)}J.action=null}function CK(J){J=J.listeners;for(var w=0;w<J.length;w++)J[w]()}function TK(J,w){return w}function Pq(J,w){if(n0){var Z=K9.formState;if(Z!==null){J:{var Y=v0;if(n0){if(z9){w:{var H=z9;for(var X=m8;H.nodeType!==8;){if(!X){H=null;break w}if(H=c8(H.nextSibling),H===null){H=null;break w}}X=H.data,H=X==="F!"||X==="F"?H:null}if(H){z9=c8(H.nextSibling),Y=H.data==="F!";break J}}L7(Y)}Y=!1}Y&&(w=Z[0])}}return Z=W8(),Z.memoizedState=Z.baseState=w,Y={pending:null,lanes:0,dispatch:null,lastRenderedReducer:TK,lastRenderedState:w},Z.queue=Y,Z=cK.bind(null,v0,Y),Y.dispatch=Z,Y=iX(!1),X=aQ.bind(null,v0,!1,Y.queue),Y=W8(),H={state:w,dispatch:null,action:J,pending:null},Y.queue=H,Z=FN.bind(null,v0,H,X,Z),H.dispatch=Z,Y.memoizedState=J,[w,Z,!1]}function Sq(J){var w=f9();return PK(w,G9,J)}function PK(J,w,Z){if(w=cQ(J,w,TK)[0],J=kZ(v6)[0],typeof w==="object"&&w!==null&&typeof w.then==="function")try{var Y=rJ(w)}catch(Q){if(Q===M5)throw ZY;throw Q}else Y=w;w=f9();var H=w.queue,X=H.dispatch;return Z!==w.memoizedState&&(v0.flags|=2048,W5(9,{destroy:void 0},NN.bind(null,H,Z),null)),[Y,X,J]}function NN(J,w){J.action=w}function jq(J){var w=f9(),Z=G9;if(Z!==null)return PK(w,Z,J);f9(),w=w.memoizedState,Z=f9();var Y=Z.queue.dispatch;return Z.memoizedState=J,[w,Y,!1]}function W5(J,w,Z,Y){return J={tag:J,create:Z,deps:Y,inst:w,next:null},w=v0.updateQueue,w===null&&(w=YY(),v0.updateQueue=w),Z=w.lastEffect,Z===null?w.lastEffect=J.next=J:(Y=Z.next,Z.next=J,J.next=Y,w.lastEffect=J),J}function SK(){return f9().memoizedState}function KZ(J,w,Z,Y){var H=W8();v0.flags|=J,H.memoizedState=W5(1|w,{destroy:void 0},Z,Y===void 0?null:Y)}function XY(J,w,Z,Y){var H=f9();Y=Y===void 0?null:Y;var X=H.memoizedState.inst;G9!==null&&Y!==null&&gQ(Y,G9.memoizedState.deps)?H.memoizedState=W5(w,X,Z,Y):(v0.flags|=J,H.memoizedState=W5(1|w,X,Z,Y))}function fq(J,w){KZ(8390656,8,J,w)}function iQ(J,w){XY(2048,8,J,w)}function zN(J){v0.flags|=4;var w=v0.updateQueue;if(w===null)w=YY(),v0.updateQueue=w,w.events=[J];else{var Z=w.events;Z===null?w.events=[J]:Z.push(J)}}function jK(J){var w=f9().memoizedState;return zN({ref:w,nextImpl:J}),function(){if((J9&2)!==0)throw Error(c(440));return w.impl.apply(void 0,arguments)}}function fK(J,w){return XY(4,2,J,w)}function bK(J,w){return XY(4,4,J,w)}function xK(J,w){if(typeof w==="function"){J=J();var Z=w(J);return function(){typeof Z==="function"?Z():w(null)}}if(w!==null&&w!==void 0)return J=J(),w.current=J,function(){w.current=null}}function hK(J,w,Z){Z=Z!==null&&Z!==void 0?Z.concat([J]):null,XY(4,4,xK.bind(null,w,J),Z)}function sQ(){}function vK(J,w){var Z=f9();w=w===void 0?null:w;var Y=Z.memoizedState;if(w!==null&&gQ(w,Y[1]))return Y[0];return Z.memoizedState=[J,w],J}function yK(J,w){var Z=f9();w=w===void 0?null:w;var Y=Z.memoizedState;if(w!==null&&gQ(w,Y[1]))return Y[0];if(Y=J(),w1){Q7(!0);try{J()}finally{Q7(!1)}}return Z.memoizedState=[Y,w],Y}function oQ(J,w,Z){if(Z===void 0||(h6&1073741824)!==0&&(s0&261930)===0)return J.memoizedState=w;return J.memoizedState=Z,J=E$(),v0.lanes|=J,V7|=J,Z}function gK(J,w,Z,Y){if(T8(Z,w))return Z;if(Q5.current!==null)return J=oQ(J,Z,Y),T8(J,w)||(v9=!0),J;if((h6&42)===0||(h6&1073741824)!==0&&(s0&261930)===0)return v9=!0,J.memoizedState=Z;return J=E$(),v0.lanes|=J,V7|=J,w}function lK(J,w,Z,Y,H){var X=w9.p;w9.p=X!==0&&8>X?X:8;var Q=T0.T,W={};T0.T=W,aQ(J,!1,w,Z);try{var U=H(),G=T0.S;if(G!==null&&G(W,U),U!==null&&typeof U==="object"&&typeof U.then==="function"){var q=DN(U,Y);_J(J,w,q,C8(J))}else _J(J,w,Y,C8(J))}catch(K){_J(J,w,{then:function(){},status:"rejected",reason:K},C8())}finally{w9.p=X,Q!==null&&W.types!==null&&(Q.types=W.types),T0.T=Q}}function LN(){}function oX(J,w,Z,Y){if(J.tag!==5)throw Error(c(476));var H=pK(J).queue;lK(J,H,w,s7,Z===null?LN:function(){return dK(J),Z(Y)})}function pK(J){var w=J.memoizedState;if(w!==null)return w;w={memoizedState:s7,baseState:s7,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:s7},next:null};var Z={};return w.next={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v6,lastRenderedState:Z},next:null},J.memoizedState=w,J=J.alternate,J!==null&&(J.memoizedState=w),w}function dK(J){var w=pK(J);w.next===null&&(w=J.alternate.memoizedState),_J(J,w.next.queue,{},C8())}function nQ(){return t9(pJ)}function mK(){return f9().memoizedState}function uK(){return f9().memoizedState}function BN(J){for(var w=J.return;w!==null;){switch(w.tag){case 24:case 3:var Z=C8();J=$7(Z);var Y=R7(w,J,Z);Y!==null&&(D8(Y,w,Z),LJ(Y,w,Z)),w={cache:bQ()},J.payload=w;return}w=w.return}}function VN(J,w,Z){var Y=C8();Z={lane:Y,revertLane:0,gesture:null,action:Z,hasEagerState:!1,eagerState:null,next:null},QY(J)?iK(w,Z):(Z=PQ(J,w,Z,Y),Z!==null&&(D8(Z,J,Y),sK(Z,w,Y)))}function cK(J,w,Z){var Y=C8();_J(J,w,Z,Y)}function _J(J,w,Z,Y){var H={lane:Y,revertLane:0,gesture:null,action:Z,hasEagerState:!1,eagerState:null,next:null};if(QY(J))iK(w,H);else{var X=J.alternate;if(J.lanes===0&&(X===null||X.lanes===0)&&(X=w.lastRenderedReducer,X!==null))try{var Q=w.lastRenderedState,W=X(Q,Z);if(H.hasEagerState=!0,H.eagerState=W,T8(W,Q))return wY(J,w,H,0),K9===null&&JY(),!1}catch(U){}finally{}if(Z=PQ(J,w,H,Y),Z!==null)return D8(Z,J,Y),sK(Z,w,Y),!0}return!1}function aQ(J,w,Z,Y){if(Y={lane:2,revertLane:XW(),gesture:null,action:Y,hasEagerState:!1,eagerState:null,next:null},QY(J)){if(w)throw Error(c(479))}else w=PQ(J,Z,Y,2),w!==null&&D8(w,J,2)}function QY(J){var w=J.alternate;return J===v0||w!==null&&w===v0}function iK(J,w){J5=jZ=!0;var Z=J.pending;Z===null?w.next=w:(w.next=Z.next,Z.next=w),J.pending=w}function sK(J,w,Z){if((Z&4194048)!==0){var Y=w.lanes;Y&=J.pendingLanes,Z|=Y,w.lanes=Z,jk(J,Z)}}function YX(J,w,Z,Y){w=J.memoizedState,Z=Z(Y,w),Z=Z===null||Z===void 0?w:L9({},w,Z),J.memoizedState=Z,J.lanes===0&&(J.updateQueue.baseState=Z)}function bq(J,w,Z,Y,H,X,Q){return J=J.stateNode,typeof J.shouldComponentUpdate==="function"?J.shouldComponentUpdate(Y,X,Q):w.prototype&&w.prototype.isPureReactComponent?!fJ(Z,Y)||!fJ(H,X):!0}function xq(J,w,Z,Y){J=w.state,typeof w.componentWillReceiveProps==="function"&&w.componentWillReceiveProps(Z,Y),typeof w.UNSAFE_componentWillReceiveProps==="function"&&w.UNSAFE_componentWillReceiveProps(Z,Y),w.state!==J&&nX.enqueueReplaceState(w,w.state,null)}function Z1(J,w){var Z=w;if("ref"in w){Z={};for(var Y in w)Y!=="ref"&&(Z[Y]=w[Y])}if(J=J.defaultProps){Z===w&&(Z=L9({},Z));for(var H in J)Z[H]===void 0&&(Z[H]=J[H])}return Z}function aK(J){AZ(J)}function rK(J){console.error(J)}function tK(J){AZ(J)}function bZ(J,w){try{var Z=J.onUncaughtError;Z(w.value,{componentStack:w.stack})}catch(Y){setTimeout(function(){throw Y})}}function hq(J,w,Z){try{var Y=J.onCaughtError;Y(Z.value,{componentStack:Z.stack,errorBoundary:w.tag===1?w.stateNode:null})}catch(H){setTimeout(function(){throw H})}}function aX(J,w,Z){return Z=$7(Z),Z.tag=3,Z.payload={element:null},Z.callback=function(){bZ(J,w)},Z}function eK(J){return J=$7(J),J.tag=3,J}function J$(J,w,Z,Y){var H=Z.type.getDerivedStateFromError;if(typeof H==="function"){var X=Y.value;J.payload=function(){return H(X)},J.callback=function(){hq(w,Z,Y)}}var Q=Z.stateNode;Q!==null&&typeof Q.componentDidCatch==="function"&&(J.callback=function(){hq(w,Z,Y),typeof H!=="function"&&(D7===null?D7=new Set([this]):D7.add(this));var W=Y.stack;this.componentDidCatch(Y.value,{componentStack:W!==null?W:""})})}function _N(J,w,Z,Y,H){if(Z.flags|=32768,Y!==null&&typeof Y==="object"&&typeof Y.then==="function"){if(w=Z.alternate,w!==null&&D5(w,Z,H,!0),Z=P8.current,Z!==null){switch(Z.tag){case 31:case 13:return u8===null?gZ():Z.alternate===null&&P9===0&&(P9=3),Z.flags&=-257,Z.flags|=65536,Z.lanes=H,Y===TZ?Z.flags|=16384:(w=Z.updateQueue,w===null?Z.updateQueue=new Set([Y]):w.add(Y),RX(J,Y,H)),!1;case 22:return Z.flags|=65536,Y===TZ?Z.flags|=16384:(w=Z.updateQueue,w===null?(w={transitions:null,markerInstances:null,retryQueue:new Set([Y])},Z.updateQueue=w):(Z=w.retryQueue,Z===null?w.retryQueue=new Set([Y]):Z.add(Y)),RX(J,Y,H)),!1}throw Error(c(435,Z.tag))}return RX(J,Y,H),gZ(),!1}if(n0)return w=P8.current,w!==null?((w.flags&65536)===0&&(w.flags|=256),w.flags|=65536,w.lanes=H,Y!==vX&&(J=Error(c(422),{cause:Y}),xJ(d8(J,Z)))):(Y!==vX&&(w=Error(c(423),{cause:Y}),xJ(d8(w,Z))),J=J.current.alternate,J.flags|=65536,H&=-H,J.lanes|=H,Y=d8(Y,Z),H=aX(J.stateNode,Y,H),wX(J,H),P9!==4&&(P9=2)),!1;var X=Error(c(520),{cause:Y});if(X=d8(X,Z),IJ===null?IJ=[X]:IJ.push(X),P9!==4&&(P9=2),w===null)return!0;Y=d8(Y,Z),Z=w;do{switch(Z.tag){case 3:return Z.flags|=65536,J=H&-H,Z.lanes|=J,J=aX(Z.stateNode,Y,J),wX(Z,J),!1;case 1:if(w=Z.type,X=Z.stateNode,(Z.flags&128)===0&&(typeof w.getDerivedStateFromError==="function"||X!==null&&typeof X.componentDidCatch==="function"&&(D7===null||!D7.has(X))))return Z.flags|=65536,H&=-H,Z.lanes|=H,H=eK(H),J$(H,J,Z,Y),wX(Z,H),!1}Z=Z.return}while(Z!==null);return!1}function n9(J,w,Z,Y){w.child=J===null?RK(w,null,Z,Y):J1(w,J.child,Z,Y)}function vq(J,w,Z,Y,H){Z=Z.render;var X=w.ref;if("ref"in Y){var Q={};for(var W in Y)W!=="ref"&&(Q[W]=Y[W])}else Q=Y;if(e7(w),Y=lQ(J,w,Z,Q,X,H),W=pQ(),J!==null&&!v9)return dQ(J,w,H),y6(J,w,H);return n0&&W&&jQ(w),w.flags|=1,n9(J,w,Y,H),w.child}function yq(J,w,Z,Y,H){if(J===null){var X=Z.type;if(typeof X==="function"&&!SQ(X)&&X.defaultProps===void 0&&Z.compare===null)return w.tag=15,w.type=X,w$(J,w,X,Y,H);return J=GZ(Z.type,null,Y,w,w.mode,H),J.ref=w.ref,J.return=w,w.child=J}if(X=J.child,!eQ(J,H)){var Q=X.memoizedProps;if(Z=Z.compare,Z=Z!==null?Z:fJ,Z(Q,Y)&&J.ref===w.ref)return y6(J,w,H)}return w.flags|=1,J=j6(X,Y),J.ref=w.ref,J.return=w,w.child=J}function w$(J,w,Z,Y,H){if(J!==null){var X=J.memoizedProps;if(fJ(X,Y)&&J.ref===w.ref)if(v9=!1,w.pendingProps=Y=X,eQ(J,H))(J.flags&131072)!==0&&(v9=!0);else return w.lanes=J.lanes,y6(J,w,H)}return rX(J,w,Z,Y,H)}function Z$(J,w,Z,Y){var H=Y.children,X=J!==null?J.memoizedState:null;if(J===null&&w.stateNode===null&&(w.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),Y.mode==="hidden"){if((w.flags&128)!==0){if(X=X!==null?X.baseLanes|Z:Z,J!==null){Y=w.child=J.child;for(H=0;Y!==null;)H=H|Y.lanes|Y.childLanes,Y=Y.sibling;Y=H&~X}else Y=0,w.child=null;return gq(J,w,X,Z,Y)}if((Z&536870912)!==0)w.memoizedState={baseLanes:0,cachePool:null},J!==null&&qZ(w,X!==null?X.cachePool:null),X!==null?Iq(w,X):uX(),OK(w);else return Y=w.lanes=536870912,gq(J,w,X!==null?X.baseLanes|Z:Z,Z,Y)}else X!==null?(qZ(w,X.cachePool),Iq(w,X),H7(w),w.memoizedState=null):(J!==null&&qZ(w,null),uX(),H7(w));return n9(J,w,H,Z),w.child}function $J(J,w){return J!==null&&J.tag===22||w.stateNode!==null||(w.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),w.sibling}function gq(J,w,Z,Y,H){var X=xQ();return X=X===null?null:{parent:h9._currentValue,pool:X},w.memoizedState={baseLanes:Z,cachePool:X},J!==null&&qZ(w,null),uX(),OK(w),J!==null&&D5(J,w,Y,!0),w.childLanes=H,null}function $Z(J,w){return w=xZ({mode:w.mode,children:w.children},J.mode),w.ref=J.ref,J.child=w,w.return=J,w}function lq(J,w,Z){return J1(w,J.child,null,Z),J=$Z(w,w.pendingProps),J.flags|=2,B8(w),w.memoizedState=null,J}function AN(J,w,Z){var Y=w.pendingProps,H=(w.flags&128)!==0;if(w.flags&=-129,J===null){if(n0){if(Y.mode==="hidden")return J=$Z(w,Y),w.lanes=536870912,$J(null,J);if(cX(w),(J=z9)?(J=o$(J,m8),J=J!==null&&J.data==="&"?J:null,J!==null&&(w.memoizedState={dehydrated:J,treeContext:z7!==null?{id:q6,overflow:k6}:null,retryLane:536870912,hydrationErrors:null},Z=WK(J),Z.return=w,w.child=Z,r9=w,z9=null)):J=null,J===null)throw L7(w);return w.lanes=536870912,null}return $Z(w,Y)}var X=J.memoizedState;if(X!==null){var Q=X.dehydrated;if(cX(w),H)if(w.flags&256)w.flags&=-257,w=lq(J,w,Z);else if(w.memoizedState!==null)w.child=J.child,w.flags|=128,w=null;else throw Error(c(558));else if(v9||D5(J,w,Z,!1),H=(Z&J.childLanes)!==0,v9||H){if(Y=K9,Y!==null&&(Q=fk(Y,Z),Q!==0&&Q!==X.retryLane))throw X.retryLane=Q,Q1(J,Q),D8(Y,J,Q),tQ;gZ(),w=lq(J,w,Z)}else J=X.treeContext,z9=c8(Q.nextSibling),r9=w,n0=!0,K7=null,m8=!1,J!==null&&GK(w,J),w=$Z(w,Y),w.flags|=4096;return w}return J=j6(J.child,{mode:Y.mode,children:Y.children}),J.ref=w.ref,w.child=J,J.return=w,J}function RZ(J,w){var Z=w.ref;if(Z===null)J!==null&&J.ref!==null&&(w.flags|=4194816);else{if(typeof Z!=="function"&&typeof Z!=="object")throw Error(c(284));if(J===null||J.ref!==Z)w.flags|=4194816}}function rX(J,w,Z,Y,H){if(e7(w),Z=lQ(J,w,Z,Y,void 0,H),Y=pQ(),J!==null&&!v9)return dQ(J,w,H),y6(J,w,H);return n0&&Y&&jQ(w),w.flags|=1,n9(J,w,Z,H),w.child}function pq(J,w,Z,Y,H,X){if(e7(w),w.updateQueue=null,Z=NK(w,Y,Z,H),FK(J),Y=pQ(),J!==null&&!v9)return dQ(J,w,X),y6(J,w,X);return n0&&Y&&jQ(w),w.flags|=1,n9(J,w,Z,X),w.child}function dq(J,w,Z,Y,H){if(e7(w),w.stateNode===null){var X=c1,Q=Z.contextType;typeof Q==="object"&&Q!==null&&(X=t9(Q)),X=new Z(Y,X),w.memoizedState=X.state!==null&&X.state!==void 0?X.state:null,X.updater=nX,w.stateNode=X,X._reactInternals=w,X=w.stateNode,X.props=Y,X.state=w.memoizedState,X.refs={},vQ(w),Q=Z.contextType,X.context=typeof Q==="object"&&Q!==null?t9(Q):c1,X.state=w.memoizedState,Q=Z.getDerivedStateFromProps,typeof Q==="function"&&(YX(w,Z,Q,Y),X.state=w.memoizedState),typeof Z.getDerivedStateFromProps==="function"||typeof X.getSnapshotBeforeUpdate==="function"||typeof X.UNSAFE_componentWillMount!=="function"&&typeof X.componentWillMount!=="function"||(Q=X.state,typeof X.componentWillMount==="function"&&X.componentWillMount(),typeof X.UNSAFE_componentWillMount==="function"&&X.UNSAFE_componentWillMount(),Q!==X.state&&nX.enqueueReplaceState(X,X.state,null),VJ(w,Y,X,H),BJ(),X.state=w.memoizedState),typeof X.componentDidMount==="function"&&(w.flags|=4194308),Y=!0}else if(J===null){X=w.stateNode;var W=w.memoizedProps,U=Z1(Z,W);X.props=U;var G=X.context,q=Z.contextType;Q=c1,typeof q==="object"&&q!==null&&(Q=t9(q));var K=Z.getDerivedStateFromProps;q=typeof K==="function"||typeof X.getSnapshotBeforeUpdate==="function",W=w.pendingProps!==W,q||typeof X.UNSAFE_componentWillReceiveProps!=="function"&&typeof X.componentWillReceiveProps!=="function"||(W||G!==Q)&&xq(w,X,Y,Q),w7=!1;var $=w.memoizedState;X.state=$,VJ(w,Y,X,H),BJ(),G=w.memoizedState,W||$!==G||w7?(typeof K==="function"&&(YX(w,Z,K,Y),G=w.memoizedState),(U=w7||bq(w,Z,U,Y,$,G,Q))?(q||typeof X.UNSAFE_componentWillMount!=="function"&&typeof X.componentWillMount!=="function"||(typeof X.componentWillMount==="function"&&X.componentWillMount(),typeof X.UNSAFE_componentWillMount==="function"&&X.UNSAFE_componentWillMount()),typeof X.componentDidMount==="function"&&(w.flags|=4194308)):(typeof X.componentDidMount==="function"&&(w.flags|=4194308),w.memoizedProps=Y,w.memoizedState=G),X.props=Y,X.state=G,X.context=Q,Y=U):(typeof X.componentDidMount==="function"&&(w.flags|=4194308),Y=!1)}else{X=w.stateNode,dX(J,w),Q=w.memoizedProps,q=Z1(Z,Q),X.props=q,K=w.pendingProps,$=X.context,G=Z.contextType,U=c1,typeof G==="object"&&G!==null&&(U=t9(G)),W=Z.getDerivedStateFromProps,(G=typeof W==="function"||typeof X.getSnapshotBeforeUpdate==="function")||typeof X.UNSAFE_componentWillReceiveProps!=="function"&&typeof X.componentWillReceiveProps!=="function"||(Q!==K||$!==U)&&xq(w,X,Y,U),w7=!1,$=w.memoizedState,X.state=$,VJ(w,Y,X,H),BJ();var R=w.memoizedState;Q!==K||$!==R||w7||J!==null&&J.dependencies!==null&&CZ(J.dependencies)?(typeof W==="function"&&(YX(w,Z,W,Y),R=w.memoizedState),(q=w7||bq(w,Z,q,Y,$,R,U)||J!==null&&J.dependencies!==null&&CZ(J.dependencies))?(G||typeof X.UNSAFE_componentWillUpdate!=="function"&&typeof X.componentWillUpdate!=="function"||(typeof X.componentWillUpdate==="function"&&X.componentWillUpdate(Y,R,U),typeof X.UNSAFE_componentWillUpdate==="function"&&X.UNSAFE_componentWillUpdate(Y,R,U)),typeof X.componentDidUpdate==="function"&&(w.flags|=4),typeof X.getSnapshotBeforeUpdate==="function"&&(w.flags|=1024)):(typeof X.componentDidUpdate!=="function"||Q===J.memoizedProps&&$===J.memoizedState||(w.flags|=4),typeof X.getSnapshotBeforeUpdate!=="function"||Q===J.memoizedProps&&$===J.memoizedState||(w.flags|=1024),w.memoizedProps=Y,w.memoizedState=R),X.props=Y,X.state=R,X.context=U,Y=q):(typeof X.componentDidUpdate!=="function"||Q===J.memoizedProps&&$===J.memoizedState||(w.flags|=4),typeof X.getSnapshotBeforeUpdate!=="function"||Q===J.memoizedProps&&$===J.memoizedState||(w.flags|=1024),Y=!1)}return X=Y,RZ(J,w),Y=(w.flags&128)!==0,X||Y?(X=w.stateNode,Z=Y&&typeof Z.getDerivedStateFromError!=="function"?null:X.render(),w.flags|=1,J!==null&&Y?(w.child=J1(w,J.child,null,H),w.child=J1(w,null,Z,H)):n9(J,w,Z,H),w.memoizedState=X.state,J=w.child):J=y6(J,w,H),J}function mq(J,w,Z,Y){return t7(),w.flags|=256,n9(J,w,Z,Y),w.child}function XX(J){return{baseLanes:J,cachePool:kK()}}function QX(J,w,Z){return J=J!==null?J.childLanes&~Z:0,w&&(J|=_8),J}function Y$(J,w,Z){var Y=w.pendingProps,H=!1,X=(w.flags&128)!==0,Q;if((Q=X)||(Q=J!==null&&J.memoizedState===null?!1:(j9.current&2)!==0),Q&&(H=!0,w.flags&=-129),Q=(w.flags&32)!==0,w.flags&=-33,J===null){if(n0){if(H?Y7(w):H7(w),(J=z9)?(J=o$(J,m8),J=J!==null&&J.data!=="&"?J:null,J!==null&&(w.memoizedState={dehydrated:J,treeContext:z7!==null?{id:q6,overflow:k6}:null,retryLane:536870912,hydrationErrors:null},Z=WK(J),Z.return=w,w.child=Z,r9=w,z9=null)):J=null,J===null)throw L7(w);return $Q(J)?w.lanes=32:w.lanes=536870912,null}var W=Y.children;if(Y=Y.fallback,H)return H7(w),H=w.mode,W=xZ({mode:"hidden",children:W},H),Y=o7(Y,H,Z,null),W.return=w,Y.return=w,W.sibling=Y,w.child=W,Y=w.child,Y.memoizedState=XX(Z),Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,$J(null,Y);return Y7(w),tX(w,W)}var U=J.memoizedState;if(U!==null&&(W=U.dehydrated,W!==null)){if(X)w.flags&256?(Y7(w),w.flags&=-257,w=WX(J,w,Z)):w.memoizedState!==null?(H7(w),w.child=J.child,w.flags|=128,w=null):(H7(w),W=Y.fallback,H=w.mode,Y=xZ({mode:"visible",children:Y.children},H),W=o7(W,H,Z,null),W.flags|=2,Y.return=w,W.return=w,Y.sibling=W,w.child=Y,J1(w,J.child,null,Z),Y=w.child,Y.memoizedState=XX(Z),Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,w=$J(null,Y));else if(Y7(w),$Q(W)){if(Q=W.nextSibling&&W.nextSibling.dataset,Q)var G=Q.dgst;Q=G,Y=Error(c(419)),Y.stack="",Y.digest=Q,xJ({value:Y,source:null,stack:null}),w=WX(J,w,Z)}else if(v9||D5(J,w,Z,!1),Q=(Z&J.childLanes)!==0,v9||Q){if(Q=K9,Q!==null&&(Y=fk(Q,Z),Y!==0&&Y!==U.retryLane))throw U.retryLane=Y,Q1(J,Y),D8(Q,J,Y),tQ;KQ(W)||gZ(),w=WX(J,w,Z)}else KQ(W)?(w.flags|=192,w.child=J.child,w=null):(J=U.treeContext,z9=c8(W.nextSibling),r9=w,n0=!0,K7=null,m8=!1,J!==null&&GK(w,J),w=tX(w,Y.children),w.flags|=4096);return w}if(H)return H7(w),W=Y.fallback,H=w.mode,U=J.child,G=U.sibling,Y=j6(U,{mode:"hidden",children:Y.children}),Y.subtreeFlags=U.subtreeFlags&65011712,G!==null?W=j6(G,W):(W=o7(W,H,Z,null),W.flags|=2),W.return=w,Y.return=w,Y.sibling=W,w.child=Y,$J(null,Y),Y=w.child,W=J.child.memoizedState,W===null?W=XX(Z):(H=W.cachePool,H!==null?(U=h9._currentValue,H=H.parent!==U?{parent:U,pool:U}:H):H=kK(),W={baseLanes:W.baseLanes|Z,cachePool:H}),Y.memoizedState=W,Y.childLanes=QX(J,Q,Z),w.memoizedState=HX,$J(J.child,Y);return Y7(w),Z=J.child,J=Z.sibling,Z=j6(Z,{mode:"visible",children:Y.children}),Z.return=w,Z.sibling=null,J!==null&&(Q=w.deletions,Q===null?(w.deletions=[J],w.flags|=16):Q.push(J)),w.child=Z,w.memoizedState=null,Z}function tX(J,w){return w=xZ({mode:"visible",children:w},J.mode),w.return=J,J.child=w}function xZ(J,w){return J=V8(22,J,null,w),J.lanes=0,J}function WX(J,w,Z){return J1(w,J.child,null,Z),J=tX(w,w.pendingProps.children),J.flags|=2,w.memoizedState=null,J}function uq(J,w,Z){J.lanes|=w;var Y=J.alternate;Y!==null&&(Y.lanes|=w),gX(J.return,w,Z)}function UX(J,w,Z,Y,H,X){var Q=J.memoizedState;Q===null?J.memoizedState={isBackwards:w,rendering:null,renderingStartTime:0,last:Y,tail:Z,tailMode:H,treeForkCount:X}:(Q.isBackwards=w,Q.rendering=null,Q.renderingStartTime=0,Q.last=Y,Q.tail=Z,Q.tailMode=H,Q.treeForkCount=X)}function H$(J,w,Z){var Y=w.pendingProps,H=Y.revealOrder,X=Y.tail;Y=Y.children;var Q=j9.current,W=(Q&2)!==0;if(W?(Q=Q&1|2,w.flags|=128):Q&=1,R9(j9,Q),n9(J,w,Y,Z),Y=n0?bJ:0,!W&&J!==null&&(J.flags&128)!==0)J:for(J=w.child;J!==null;){if(J.tag===13)J.memoizedState!==null&&uq(J,Z,w);else if(J.tag===19)uq(J,Z,w);else if(J.child!==null){J.child.return=J,J=J.child;continue}if(J===w)break J;for(;J.sibling===null;){if(J.return===null||J.return===w)break J;J=J.return}J.sibling.return=J.return,J=J.sibling}switch(H){case"forwards":Z=w.child;for(H=null;Z!==null;)J=Z.alternate,J!==null&&SZ(J)===null&&(H=Z),Z=Z.sibling;Z=H,Z===null?(H=w.child,w.child=null):(H=Z.sibling,Z.sibling=null),UX(w,!1,H,Z,X,Y);break;case"backwards":case"unstable_legacy-backwards":Z=null,H=w.child;for(w.child=null;H!==null;){if(J=H.alternate,J!==null&&SZ(J)===null){w.child=H;break}J=H.sibling,H.sibling=Z,Z=H,H=J}UX(w,!0,Z,null,X,Y);break;case"together":UX(w,!1,null,null,void 0,Y);break;default:w.memoizedState=null}return w.child}function y6(J,w,Z){if(J!==null&&(w.dependencies=J.dependencies),V7|=w.lanes,(Z&w.childLanes)===0)if(J!==null){if(D5(J,w,Z,!1),(Z&w.childLanes)===0)return null}else return null;if(J!==null&&w.child!==J.child)throw Error(c(153));if(w.child!==null){J=w.child,Z=j6(J,J.pendingProps),w.child=Z;for(Z.return=w;J.sibling!==null;)J=J.sibling,Z=Z.sibling=j6(J,J.pendingProps),Z.return=w;Z.sibling=null}return w.child}function eQ(J,w){if((J.lanes&w)!==0)return!0;return J=J.dependencies,J!==null&&CZ(J)?!0:!1}function EN(J,w,Z){switch(w.tag){case 3:LZ(w,w.stateNode.containerInfo),Z7(w,h9,J.memoizedState.cache),t7();break;case 27:case 5:EX(w);break;case 4:LZ(w,w.stateNode.containerInfo);break;case 10:Z7(w,w.type,w.memoizedProps.value);break;case 31:if(w.memoizedState!==null)return w.flags|=128,cX(w),null;break;case 13:var Y=w.memoizedState;if(Y!==null){if(Y.dehydrated!==null)return Y7(w),w.flags|=128,null;if((Z&w.child.childLanes)!==0)return Y$(J,w,Z);return Y7(w),J=y6(J,w,Z),J!==null?J.sibling:null}Y7(w);break;case 19:var H=(J.flags&128)!==0;if(Y=(Z&w.childLanes)!==0,Y||(D5(J,w,Z,!1),Y=(Z&w.childLanes)!==0),H){if(Y)return H$(J,w,Z);w.flags|=128}if(H=w.memoizedState,H!==null&&(H.rendering=null,H.tail=null,H.lastEffect=null),R9(j9,j9.current),Y)break;else return null;case 22:return w.lanes=0,Z$(J,w,Z,w.pendingProps);case 24:Z7(w,h9,J.memoizedState.cache)}return y6(J,w,Z)}function X$(J,w,Z){if(J!==null)if(J.memoizedProps!==w.pendingProps)v9=!0;else{if(!eQ(J,Z)&&(w.flags&128)===0)return v9=!1,EN(J,w,Z);v9=(J.flags&131072)!==0?!0:!1}else v9=!1,n0&&(w.flags&1048576)!==0&&UK(w,bJ,w.index);switch(w.lanes=0,w.tag){case 16:J:{var Y=w.pendingProps;if(J=c7(w.elementType),w.type=J,typeof J==="function")SQ(J)?(Y=Z1(J,Y),w.tag=1,w=dq(null,w,J,Y,Z)):(w.tag=0,w=rX(null,w,J,Y,Z));else{if(J!==void 0&&J!==null){var H=J.$$typeof;if(H===OQ){w.tag=11,w=vq(null,w,J,Y,Z);break J}else if(H===FQ){w.tag=14,w=yq(null,w,J,Y,Z);break J}}throw w=_X(J)||J,Error(c(306,w,""))}}return w;case 0:return rX(J,w,w.type,w.pendingProps,Z);case 1:return Y=w.type,H=Z1(Y,w.pendingProps),dq(J,w,Y,H,Z);case 3:J:{if(LZ(w,w.stateNode.containerInfo),J===null)throw Error(c(387));Y=w.pendingProps;var X=w.memoizedState;H=X.element,dX(J,w),VJ(w,Y,null,Z);var Q=w.memoizedState;if(Y=Q.cache,Z7(w,h9,Y),Y!==X.cache&&lX(w,[h9],Z,!0),BJ(),Y=Q.element,X.isDehydrated)if(X={element:Y,isDehydrated:!1,cache:Q.cache},w.updateQueue.baseState=X,w.memoizedState=X,w.flags&256){w=mq(J,w,Y,Z);break J}else if(Y!==H){H=d8(Error(c(424)),w),xJ(H),w=mq(J,w,Y,Z);break J}else{switch(J=w.stateNode.containerInfo,J.nodeType){case 9:J=J.body;break;default:J=J.nodeName==="HTML"?J.ownerDocument.body:J}z9=c8(J.firstChild),r9=w,n0=!0,K7=null,m8=!0,Z=RK(w,null,Y,Z);for(w.child=Z;Z;)Z.flags=Z.flags&-3|4096,Z=Z.sibling}else{if(t7(),Y===H){w=y6(J,w,Z);break J}n9(J,w,Y,Z)}w=w.child}return w;case 26:return RZ(J,w),J===null?(Z=qk(w.type,null,w.pendingProps,null))?w.memoizedState=Z:n0||(Z=w.type,J=w.pendingProps,Y=mZ(k7.current).createElement(Z),Y[a9]=w,Y[M8]=J,e9(Y,Z,J),c9(Y),w.stateNode=Y):w.memoizedState=qk(w.type,J.memoizedProps,w.pendingProps,J.memoizedState),null;case 27:return EX(w),J===null&&n0&&(Y=w.stateNode=n$(w.type,w.pendingProps,k7.current),r9=w,m8=!0,H=z9,A7(w.type)?(RQ=H,z9=c8(Y.firstChild)):z9=H),n9(J,w,w.pendingProps.children,Z),RZ(J,w),J===null&&(w.flags|=4194304),w.child;case 5:if(J===null&&n0){if(H=Y=z9)Y=Jz(Y,w.type,w.pendingProps,m8),Y!==null?(w.stateNode=Y,r9=w,z9=c8(Y.firstChild),m8=!1,H=!0):H=!1;H||L7(w)}return EX(w),H=w.type,X=w.pendingProps,Q=J!==null?J.memoizedProps:null,Y=X.children,qQ(H,X)?Y=null:Q!==null&&qQ(H,Q)&&(w.flags|=32),w.memoizedState!==null&&(H=lQ(J,w,ON,null,null,Z),pJ._currentValue=H),RZ(J,w),n9(J,w,Y,Z),w.child;case 6:if(J===null&&n0){if(J=Z=z9)Z=wz(Z,w.pendingProps,m8),Z!==null?(w.stateNode=Z,r9=w,z9=null,J=!0):J=!1;J||L7(w)}return null;case 13:return Y$(J,w,Z);case 4:return LZ(w,w.stateNode.containerInfo),Y=w.pendingProps,J===null?w.child=J1(w,null,Y,Z):n9(J,w,Y,Z),w.child;case 11:return vq(J,w,w.type,w.pendingProps,Z);case 7:return n9(J,w,w.pendingProps,Z),w.child;case 8:return n9(J,w,w.pendingProps.children,Z),w.child;case 12:return n9(J,w,w.pendingProps.children,Z),w.child;case 10:return Y=w.pendingProps,Z7(w,w.type,Y.value),n9(J,w,Y.children,Z),w.child;case 9:return H=w.type._context,Y=w.pendingProps.children,e7(w),H=t9(H),Y=Y(H),w.flags|=1,n9(J,w,Y,Z),w.child;case 14:return yq(J,w,w.type,w.pendingProps,Z);case 15:return w$(J,w,w.type,w.pendingProps,Z);case 19:return H$(J,w,Z);case 31:return AN(J,w,Z);case 22:return Z$(J,w,Z,w.pendingProps);case 24:return e7(w),Y=t9(h9),J===null?(H=xQ(),H===null&&(H=K9,X=bQ(),H.pooledCache=X,X.refCount++,X!==null&&(H.pooledCacheLanes|=Z),H=X),w.memoizedState={parent:Y,cache:H},vQ(w),Z7(w,h9,H)):((J.lanes&Z)!==0&&(dX(J,w),VJ(w,null,null,Z),BJ()),H=J.memoizedState,X=w.memoizedState,H.parent!==Y?(H={parent:Y,cache:Y},w.memoizedState=H,w.lanes===0&&(w.memoizedState=w.updateQueue.baseState=H),Z7(w,h9,Y)):(Y=X.cache,Z7(w,h9,Y),Y!==H.cache&&lX(w,[h9],Z,!0))),n9(J,w,w.pendingProps.children,Z),w.child;case 29:throw w.pendingProps}throw Error(c(156,w.tag))}function V6(J){J.flags|=4}function GX(J,w,Z,Y,H){if(w=(J.mode&32)!==0)w=!1;if(w){if(J.flags|=16777216,(H&335544128)===H)if(J.stateNode.complete)J.flags|=8192;else if(T$())J.flags|=8192;else throw a7=TZ,hQ}else J.flags&=-16777217}function cq(J,w){if(w.type!=="stylesheet"||(w.state.loading&4)!==0)J.flags&=-16777217;else if(J.flags|=16777216,!t$(w))if(T$())J.flags|=8192;else throw a7=TZ,hQ}function ew(J,w){w!==null&&(J.flags|=4),J.flags&16384&&(w=J.tag!==22?Pk():536870912,J.lanes|=w,U5|=w)}function XJ(J,w){if(!n0)switch(J.tailMode){case"hidden":w=J.tail;for(var Z=null;w!==null;)w.alternate!==null&&(Z=w),w=w.sibling;Z===null?J.tail=null:Z.sibling=null;break;case"collapsed":Z=J.tail;for(var Y=null;Z!==null;)Z.alternate!==null&&(Y=Z),Z=Z.sibling;Y===null?w||J.tail===null?J.tail=null:J.tail.sibling=null:Y.sibling=null}}function N9(J){var w=J.alternate!==null&&J.alternate.child===J.child,Z=0,Y=0;if(w)for(var H=J.child;H!==null;)Z|=H.lanes|H.childLanes,Y|=H.subtreeFlags&65011712,Y|=H.flags&65011712,H.return=J,H=H.sibling;else for(H=J.child;H!==null;)Z|=H.lanes|H.childLanes,Y|=H.subtreeFlags,Y|=H.flags,H.return=J,H=H.sibling;return J.subtreeFlags|=Y,J.childLanes=Z,w}function IN(J,w,Z){var Y=w.pendingProps;switch(fQ(w),w.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return N9(w),null;case 1:return N9(w),null;case 3:if(Z=w.stateNode,Y=null,J!==null&&(Y=J.memoizedState.cache),w.memoizedState.cache!==Y&&(w.flags|=2048),f6(h9),Z5(),Z.pendingContext&&(Z.context=Z.pendingContext,Z.pendingContext=null),J===null||J.child===null)j1(w)?V6(w):J===null||J.memoizedState.isDehydrated&&(w.flags&256)===0||(w.flags|=1024,JX());return N9(w),null;case 26:var{type:H,memoizedState:X}=w;return J===null?(V6(w),X!==null?(N9(w),cq(w,X)):(N9(w),GX(w,H,null,Y,Z))):X?X!==J.memoizedState?(V6(w),N9(w),cq(w,X)):(N9(w),w.flags&=-16777217):(J=J.memoizedProps,J!==Y&&V6(w),N9(w),GX(w,H,J,Y,Z)),null;case 27:if(BZ(w),Z=k7.current,H=w.type,J!==null&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(!Y){if(w.stateNode===null)throw Error(c(166));return N9(w),null}J=$6.current,j1(w)?zq(w,J):(J=n$(H,Y,Z),w.stateNode=J,V6(w))}return N9(w),null;case 5:if(BZ(w),H=w.type,J!==null&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(!Y){if(w.stateNode===null)throw Error(c(166));return N9(w),null}if(X=$6.current,j1(w))zq(w,X);else{var Q=mZ(k7.current);switch(X){case 1:X=Q.createElementNS("http://www.w3.org/2000/svg",H);break;case 2:X=Q.createElementNS("http://www.w3.org/1998/Math/MathML",H);break;default:switch(H){case"svg":X=Q.createElementNS("http://www.w3.org/2000/svg",H);break;case"math":X=Q.createElementNS("http://www.w3.org/1998/Math/MathML",H);break;case"script":X=Q.createElement("div"),X.innerHTML="<script></script>",X=X.removeChild(X.firstChild);break;case"select":X=typeof Y.is==="string"?Q.createElement("select",{is:Y.is}):Q.createElement("select"),Y.multiple?X.multiple=!0:Y.size&&(X.size=Y.size);break;default:X=typeof Y.is==="string"?Q.createElement(H,{is:Y.is}):Q.createElement(H)}}X[a9]=w,X[M8]=Y;J:for(Q=w.child;Q!==null;){if(Q.tag===5||Q.tag===6)X.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.tag!==27&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===w)break J;for(;Q.sibling===null;){if(Q.return===null||Q.return===w)break J;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}w.stateNode=X;J:switch(e9(X,H,Y),H){case"button":case"input":case"select":case"textarea":Y=!!Y.autoFocus;break J;case"img":Y=!0;break J;default:Y=!1}Y&&V6(w)}}return N9(w),GX(w,w.type,J===null?null:J.memoizedProps,w.pendingProps,Z),null;case 6:if(J&&w.stateNode!=null)J.memoizedProps!==Y&&V6(w);else{if(typeof Y!=="string"&&w.stateNode===null)throw Error(c(166));if(J=k7.current,j1(w)){if(J=w.stateNode,Z=w.memoizedProps,Y=null,H=r9,H!==null)switch(H.tag){case 27:case 5:Y=H.memoizedProps}J[a9]=w,J=J.nodeValue===Z||Y!==null&&Y.suppressHydrationWarning===!0||c$(J.nodeValue,Z)?!0:!1,J||L7(w,!0)}else J=mZ(J).createTextNode(Y),J[a9]=w,w.stateNode=J}return N9(w),null;case 31:if(Z=w.memoizedState,J===null||J.memoizedState!==null){if(Y=j1(w),Z!==null){if(J===null){if(!Y)throw Error(c(318));if(J=w.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(c(557));J[a9]=w}else t7(),(w.flags&128)===0&&(w.memoizedState=null),w.flags|=4;N9(w),J=!1}else Z=JX(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=Z),J=!0;if(!J){if(w.flags&256)return B8(w),w;return B8(w),null}if((w.flags&128)!==0)throw Error(c(558))}return N9(w),null;case 13:if(Y=w.memoizedState,J===null||J.memoizedState!==null&&J.memoizedState.dehydrated!==null){if(H=j1(w),Y!==null&&Y.dehydrated!==null){if(J===null){if(!H)throw Error(c(318));if(H=w.memoizedState,H=H!==null?H.dehydrated:null,!H)throw Error(c(317));H[a9]=w}else t7(),(w.flags&128)===0&&(w.memoizedState=null),w.flags|=4;N9(w),H=!1}else H=JX(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=H),H=!0;if(!H){if(w.flags&256)return B8(w),w;return B8(w),null}}if(B8(w),(w.flags&128)!==0)return w.lanes=Z,w;return Z=Y!==null,J=J!==null&&J.memoizedState!==null,Z&&(Y=w.child,H=null,Y.alternate!==null&&Y.alternate.memoizedState!==null&&Y.alternate.memoizedState.cachePool!==null&&(H=Y.alternate.memoizedState.cachePool.pool),X=null,Y.memoizedState!==null&&Y.memoizedState.cachePool!==null&&(X=Y.memoizedState.cachePool.pool),X!==H&&(Y.flags|=2048)),Z!==J&&Z&&(w.child.flags|=8192),ew(w,w.updateQueue),N9(w),null;case 4:return Z5(),J===null&&QW(w.stateNode.containerInfo),N9(w),null;case 10:return f6(w.type),N9(w),null;case 19:if(i9(j9),Y=w.memoizedState,Y===null)return N9(w),null;if(H=(w.flags&128)!==0,X=Y.rendering,X===null)if(H)XJ(Y,!1);else{if(P9!==0||J!==null&&(J.flags&128)!==0)for(J=w.child;J!==null;){if(X=SZ(J),X!==null){w.flags|=128,XJ(Y,!1),J=X.updateQueue,w.updateQueue=J,ew(w,J),w.subtreeFlags=0,J=Z;for(Z=w.child;Z!==null;)QK(Z,J),Z=Z.sibling;return R9(j9,j9.current&1|2),n0&&I6(w,Y.treeForkCount),w.child}J=J.sibling}Y.tail!==null&&A8()>vZ&&(w.flags|=128,H=!0,XJ(Y,!1),w.lanes=4194304)}else{if(!H)if(J=SZ(X),J!==null){if(w.flags|=128,H=!0,J=J.updateQueue,w.updateQueue=J,ew(w,J),XJ(Y,!0),Y.tail===null&&Y.tailMode==="hidden"&&!X.alternate&&!n0)return N9(w),null}else 2*A8()-Y.renderingStartTime>vZ&&Z!==536870912&&(w.flags|=128,H=!0,XJ(Y,!1),w.lanes=4194304);Y.isBackwards?(X.sibling=w.child,w.child=X):(J=Y.last,J!==null?J.sibling=X:w.child=X,Y.last=X)}if(Y.tail!==null)return J=Y.tail,Y.rendering=J,Y.tail=J.sibling,Y.renderingStartTime=A8(),J.sibling=null,Z=j9.current,R9(j9,H?Z&1|2:Z&1),n0&&I6(w,Y.treeForkCount),J;return N9(w),null;case 22:case 23:return B8(w),yQ(),Y=w.memoizedState!==null,J!==null?J.memoizedState!==null!==Y&&(w.flags|=8192):Y&&(w.flags|=8192),Y?(Z&536870912)!==0&&(w.flags&128)===0&&(N9(w),w.subtreeFlags&6&&(w.flags|=8192)):N9(w),Z=w.updateQueue,Z!==null&&ew(w,Z.retryQueue),Z=null,J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Z=J.memoizedState.cachePool.pool),Y=null,w.memoizedState!==null&&w.memoizedState.cachePool!==null&&(Y=w.memoizedState.cachePool.pool),Y!==Z&&(w.flags|=2048),J!==null&&i9(n7),null;case 24:return Z=null,J!==null&&(Z=J.memoizedState.cache),w.memoizedState.cache!==Z&&(w.flags|=2048),f6(h9),N9(w),null;case 25:return null;case 30:return null}throw Error(c(156,w.tag))}function CN(J,w){switch(fQ(w),w.tag){case 1:return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 3:return f6(h9),Z5(),J=w.flags,(J&65536)!==0&&(J&128)===0?(w.flags=J&-65537|128,w):null;case 26:case 27:case 5:return BZ(w),null;case 31:if(w.memoizedState!==null){if(B8(w),w.alternate===null)throw Error(c(340));t7()}return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 13:if(B8(w),J=w.memoizedState,J!==null&&J.dehydrated!==null){if(w.alternate===null)throw Error(c(340));t7()}return J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 19:return i9(j9),null;case 4:return Z5(),null;case 10:return f6(w.type),null;case 22:case 23:return B8(w),yQ(),J!==null&&i9(n7),J=w.flags,J&65536?(w.flags=J&-65537|128,w):null;case 24:return f6(h9),null;case 25:return null;default:return null}}function Q$(J,w){switch(fQ(w),w.tag){case 3:f6(h9),Z5();break;case 26:case 27:case 5:BZ(w);break;case 4:Z5();break;case 31:w.memoizedState!==null&&B8(w);break;case 13:B8(w);break;case 19:i9(j9);break;case 10:f6(w.type);break;case 22:case 23:B8(w),yQ(),J!==null&&i9(n7);break;case 24:f6(h9)}}function tJ(J,w){try{var Z=w.updateQueue,Y=Z!==null?Z.lastEffect:null;if(Y!==null){var H=Y.next;Z=H;do{if((Z.tag&J)===J){Y=void 0;var{create:X,inst:Q}=Z;Y=X(),Q.destroy=Y}Z=Z.next}while(Z!==H)}}catch(W){Y9(w,w.return,W)}}function B7(J,w,Z){try{var Y=w.updateQueue,H=Y!==null?Y.lastEffect:null;if(H!==null){var X=H.next;Y=X;do{if((Y.tag&J)===J){var Q=Y.inst,W=Q.destroy;if(W!==void 0){Q.destroy=void 0,H=w;var U=Z,G=W;try{G()}catch(q){Y9(H,U,q)}}}Y=Y.next}while(Y!==X)}}catch(q){Y9(w,w.return,q)}}function W$(J){var w=J.updateQueue;if(w!==null){var Z=J.stateNode;try{MK(w,Z)}catch(Y){Y9(J,J.return,Y)}}}function U$(J,w,Z){Z.props=Z1(J.type,J.memoizedProps),Z.state=J.memoizedState;try{Z.componentWillUnmount()}catch(Y){Y9(J,w,Y)}}function AJ(J,w){try{var Z=J.ref;if(Z!==null){switch(J.tag){case 26:case 27:case 5:var Y=J.stateNode;break;case 30:Y=J.stateNode;break;default:Y=J.stateNode}typeof Z==="function"?J.refCleanup=Z(Y):Z.current=Y}}catch(H){Y9(J,w,H)}}function K6(J,w){var{ref:Z,refCleanup:Y}=J;if(Z!==null)if(typeof Y==="function")try{Y()}catch(H){Y9(J,w,H)}finally{J.refCleanup=null,J=J.alternate,J!=null&&(J.refCleanup=null)}else if(typeof Z==="function")try{Z(null)}catch(H){Y9(J,w,H)}else Z.current=null}function G$(J){var{type:w,memoizedProps:Z,stateNode:Y}=J;try{J:switch(w){case"button":case"input":case"select":case"textarea":Z.autoFocus&&Y.focus();break J;case"img":Z.src?Y.src=Z.src:Z.srcSet&&(Y.srcset=Z.srcSet)}}catch(H){Y9(J,J.return,H)}}function qX(J,w,Z){try{var Y=J.stateNode;oN(Y,J.type,Z,w),Y[M8]=w}catch(H){Y9(J,J.return,H)}}function q$(J){return J.tag===5||J.tag===3||J.tag===26||J.tag===27&&A7(J.type)||J.tag===4}function kX(J){J:for(;;){for(;J.sibling===null;){if(J.return===null||q$(J.return))return null;J=J.return}J.sibling.return=J.return;for(J=J.sibling;J.tag!==5&&J.tag!==6&&J.tag!==18;){if(J.tag===27&&A7(J.type))continue J;if(J.flags&2)continue J;if(J.child===null||J.tag===4)continue J;else J.child.return=J,J=J.child}if(!(J.flags&2))return J.stateNode}}function eX(J,w,Z){var Y=J.tag;if(Y===5||Y===6)J=J.stateNode,w?(Z.nodeType===9?Z.body:Z.nodeName==="HTML"?Z.ownerDocument.body:Z).insertBefore(J,w):(w=Z.nodeType===9?Z.body:Z.nodeName==="HTML"?Z.ownerDocument.body:Z,w.appendChild(J),Z=Z._reactRootContainer,Z!==null&&Z!==void 0||w.onclick!==null||(w.onclick=P6));else if(Y!==4&&(Y===27&&A7(J.type)&&(Z=J.stateNode,w=null),J=J.child,J!==null))for(eX(J,w,Z),J=J.sibling;J!==null;)eX(J,w,Z),J=J.sibling}function hZ(J,w,Z){var Y=J.tag;if(Y===5||Y===6)J=J.stateNode,w?Z.insertBefore(J,w):Z.appendChild(J);else if(Y!==4&&(Y===27&&A7(J.type)&&(Z=J.stateNode),J=J.child,J!==null))for(hZ(J,w,Z),J=J.sibling;J!==null;)hZ(J,w,Z),J=J.sibling}function k$(J){var{stateNode:w,memoizedProps:Z}=J;try{for(var Y=J.type,H=w.attributes;H.length;)w.removeAttributeNode(H[0]);e9(w,Y,Z),w[a9]=J,w[M8]=Z}catch(X){Y9(J,J.return,X)}}function TN(J,w){if(J=J.containerInfo,UQ=sZ,J=tk(J),CQ(J)){if("selectionStart"in J)var Z={start:J.selectionStart,end:J.selectionEnd};else J:{Z=(Z=J.ownerDocument)&&Z.defaultView||window;var Y=Z.getSelection&&Z.getSelection();if(Y&&Y.rangeCount!==0){Z=Y.anchorNode;var{anchorOffset:H,focusNode:X}=Y;Y=Y.focusOffset;try{Z.nodeType,X.nodeType}catch(L){Z=null;break J}var Q=0,W=-1,U=-1,G=0,q=0,K=J,$=null;w:for(;;){for(var R;;){if(K!==Z||H!==0&&K.nodeType!==3||(W=Q+H),K!==X||Y!==0&&K.nodeType!==3||(U=Q+Y),K.nodeType===3&&(Q+=K.nodeValue.length),(R=K.firstChild)===null)break;$=K,K=R}for(;;){if(K===J)break w;if($===Z&&++G===H&&(W=Q),$===X&&++q===Y&&(U=Q),(R=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=R}Z=W===-1||U===-1?null:{start:W,end:U}}else Z=null}Z=Z||{start:0,end:0}}else Z=null;GQ={focusedElem:J,selectionRange:Z},sZ=!1;for(u9=w;u9!==null;)if(w=u9,J=w.child,(w.subtreeFlags&1028)!==0&&J!==null)J.return=w,u9=J;else for(;u9!==null;){switch(w=u9,X=w.alternate,J=w.flags,w.tag){case 0:if((J&4)!==0&&(J=w.updateQueue,J=J!==null?J.events:null,J!==null))for(Z=0;Z<J.length;Z++)H=J[Z],H.ref.impl=H.nextImpl;break;case 11:case 15:break;case 1:if((J&1024)!==0&&X!==null){J=void 0,Z=w,H=X.memoizedProps,X=X.memoizedState,Y=Z.stateNode;try{var N=Z1(Z.type,H);J=Y.getSnapshotBeforeUpdate(N,X),Y.__reactInternalSnapshotBeforeUpdate=J}catch(L){Y9(Z,Z.return,L)}}break;case 3:if((J&1024)!==0){if(J=w.stateNode.containerInfo,Z=J.nodeType,Z===9)kQ(J);else if(Z===1)switch(J.nodeName){case"HEAD":case"HTML":case"BODY":kQ(J);break;default:J.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((J&1024)!==0)throw Error(c(163))}if(J=w.sibling,J!==null){J.return=w.return,u9=J;break}u9=w.return}}function K$(J,w,Z){var Y=Z.flags;switch(Z.tag){case 0:case 11:case 15:A6(J,Z),Y&4&&tJ(5,Z);break;case 1:if(A6(J,Z),Y&4)if(J=Z.stateNode,w===null)try{J.componentDidMount()}catch(Q){Y9(Z,Z.return,Q)}else{var H=Z1(Z.type,w.memoizedProps);w=w.memoizedState;try{J.componentDidUpdate(H,w,J.__reactInternalSnapshotBeforeUpdate)}catch(Q){Y9(Z,Z.return,Q)}}Y&64&&W$(Z),Y&512&&AJ(Z,Z.return);break;case 3:if(A6(J,Z),Y&64&&(J=Z.updateQueue,J!==null)){if(w=null,Z.child!==null)switch(Z.child.tag){case 27:case 5:w=Z.child.stateNode;break;case 1:w=Z.child.stateNode}try{MK(J,w)}catch(Q){Y9(Z,Z.return,Q)}}break;case 27:w===null&&Y&4&&k$(Z);case 26:case 5:A6(J,Z),w===null&&Y&4&&G$(Z),Y&512&&AJ(Z,Z.return);break;case 12:A6(J,Z);break;case 31:A6(J,Z),Y&4&&D$(J,Z);break;case 13:A6(J,Z),Y&4&&M$(J,Z),Y&64&&(J=Z.memoizedState,J!==null&&(J=J.dehydrated,J!==null&&(Z=yN.bind(null,Z),Zz(J,Z))));break;case 22:if(Y=Z.memoizedState!==null||C6,!Y){w=w!==null&&w.memoizedState!==null||x9,H=C6;var X=x9;C6=Y,(x9=w)&&!X?E6(J,Z,(Z.subtreeFlags&8772)!==0):A6(J,Z),C6=H,x9=X}break;case 30:break;default:A6(J,Z)}}function $$(J){var w=J.alternate;w!==null&&(J.alternate=null,$$(w)),J.child=null,J.deletions=null,J.sibling=null,J.tag===5&&(w=J.stateNode,w!==null&&BQ(w)),J.stateNode=null,J.return=null,J.dependencies=null,J.memoizedProps=null,J.memoizedState=null,J.pendingProps=null,J.stateNode=null,J.updateQueue=null}function _6(J,w,Z){for(Z=Z.child;Z!==null;)R$(J,w,Z),Z=Z.sibling}function R$(J,w,Z){if(E8&&typeof E8.onCommitFiberUnmount==="function")try{E8.onCommitFiberUnmount(cJ,Z)}catch(X){}switch(Z.tag){case 26:x9||K6(Z,w),_6(J,w,Z),Z.memoizedState?Z.memoizedState.count--:Z.stateNode&&(Z=Z.stateNode,Z.parentNode.removeChild(Z));break;case 27:x9||K6(Z,w);var Y=_9,H=$8;A7(Z.type)&&(_9=Z.stateNode,$8=!1),_6(J,w,Z),TJ(Z.stateNode),_9=Y,$8=H;break;case 5:x9||K6(Z,w);case 6:if(Y=_9,H=$8,_9=null,_6(J,w,Z),_9=Y,$8=H,_9!==null)if($8)try{(_9.nodeType===9?_9.body:_9.nodeName==="HTML"?_9.ownerDocument.body:_9).removeChild(Z.stateNode)}catch(X){Y9(Z,w,X)}else try{_9.removeChild(Z.stateNode)}catch(X){Y9(Z,w,X)}break;case 18:_9!==null&&($8?(J=_9,Xk(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J,Z.stateNode),K5(J)):Xk(_9,Z.stateNode));break;case 4:Y=_9,H=$8,_9=Z.stateNode.containerInfo,$8=!0,_6(J,w,Z),_9=Y,$8=H;break;case 0:case 11:case 14:case 15:B7(2,Z,w),x9||B7(4,Z,w),_6(J,w,Z);break;case 1:x9||(K6(Z,w),Y=Z.stateNode,typeof Y.componentWillUnmount==="function"&&U$(Z,w,Y)),_6(J,w,Z);break;case 21:_6(J,w,Z);break;case 22:x9=(Y=x9)||Z.memoizedState!==null,_6(J,w,Z),x9=Y;break;default:_6(J,w,Z)}}function D$(J,w){if(w.memoizedState===null&&(J=w.alternate,J!==null&&(J=J.memoizedState,J!==null))){J=J.dehydrated;try{K5(J)}catch(Z){Y9(w,w.return,Z)}}}function M$(J,w){if(w.memoizedState===null&&(J=w.alternate,J!==null&&(J=J.memoizedState,J!==null&&(J=J.dehydrated,J!==null))))try{K5(J)}catch(Z){Y9(w,w.return,Z)}}function PN(J){switch(J.tag){case 31:case 13:case 19:var w=J.stateNode;return w===null&&(w=J.stateNode=new iq),w;case 22:return J=J.stateNode,w=J._retryCache,w===null&&(w=J._retryCache=new iq),w;default:throw Error(c(435,J.tag))}}function JZ(J,w){var Z=PN(J);w.forEach(function(Y){if(!Z.has(Y)){Z.add(Y);var H=gN.bind(null,J,Y);Y.then(H,H)}})}function k8(J,w){var Z=w.deletions;if(Z!==null)for(var Y=0;Y<Z.length;Y++){var H=Z[Y],X=J,Q=w,W=Q;J:for(;W!==null;){switch(W.tag){case 27:if(A7(W.type)){_9=W.stateNode,$8=!1;break J}break;case 5:_9=W.stateNode,$8=!1;break J;case 3:case 4:_9=W.stateNode.containerInfo,$8=!0;break J}W=W.return}if(_9===null)throw Error(c(160));R$(X,Q,H),_9=null,$8=!1,X=H.alternate,X!==null&&(X.return=null),H.return=null}if(w.subtreeFlags&13886)for(w=w.child;w!==null;)O$(w,J),w=w.sibling}function O$(J,w){var{alternate:Z,flags:Y}=J;switch(J.tag){case 0:case 11:case 14:case 15:k8(w,J),K8(J),Y&4&&(B7(3,J,J.return),tJ(3,J),B7(5,J,J.return));break;case 1:k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Y&64&&C6&&(J=J.updateQueue,J!==null&&(Y=J.callbacks,Y!==null&&(Z=J.shared.hiddenCallbacks,J.shared.hiddenCallbacks=Z===null?Y:Z.concat(Y))));break;case 26:var H=J6;if(k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Y&4){var X=Z!==null?Z.memoizedState:null;if(Y=J.memoizedState,Z===null)if(Y===null)if(J.stateNode===null){J:{Y=J.type,Z=J.memoizedProps,H=H.ownerDocument||H;w:switch(Y){case"title":if(X=H.getElementsByTagName("title")[0],!X||X[oJ]||X[a9]||X.namespaceURI==="http://www.w3.org/2000/svg"||X.hasAttribute("itemprop"))X=H.createElement(Y),H.head.insertBefore(X,H.querySelector("head > title"));e9(X,Y,Z),X[a9]=J,c9(X),Y=X;break J;case"link":var Q=Kk("link","href",H).get(Y+(Z.href||""));if(Q){for(var W=0;W<Q.length;W++)if(X=Q[W],X.getAttribute("href")===(Z.href==null||Z.href===""?null:Z.href)&&X.getAttribute("rel")===(Z.rel==null?null:Z.rel)&&X.getAttribute("title")===(Z.title==null?null:Z.title)&&X.getAttribute("crossorigin")===(Z.crossOrigin==null?null:Z.crossOrigin)){Q.splice(W,1);break w}}X=H.createElement(Y),e9(X,Y,Z),H.head.appendChild(X);break;case"meta":if(Q=Kk("meta","content",H).get(Y+(Z.content||""))){for(W=0;W<Q.length;W++)if(X=Q[W],X.getAttribute("content")===(Z.content==null?null:""+Z.content)&&X.getAttribute("name")===(Z.name==null?null:Z.name)&&X.getAttribute("property")===(Z.property==null?null:Z.property)&&X.getAttribute("http-equiv")===(Z.httpEquiv==null?null:Z.httpEquiv)&&X.getAttribute("charset")===(Z.charSet==null?null:Z.charSet)){Q.splice(W,1);break w}}X=H.createElement(Y),e9(X,Y,Z),H.head.appendChild(X);break;default:throw Error(c(468,Y))}X[a9]=J,c9(X),Y=X}J.stateNode=Y}else $k(H,J.type,J.stateNode);else J.stateNode=kk(H,Y,J.memoizedProps);else X!==Y?(X===null?Z.stateNode!==null&&(Z=Z.stateNode,Z.parentNode.removeChild(Z)):X.count--,Y===null?$k(H,J.type,J.stateNode):kk(H,Y,J.memoizedProps)):Y===null&&J.stateNode!==null&&qX(J,J.memoizedProps,Z.memoizedProps)}break;case 27:k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),Z!==null&&Y&4&&qX(J,J.memoizedProps,Z.memoizedProps);break;case 5:if(k8(w,J),K8(J),Y&512&&(x9||Z===null||K6(Z,Z.return)),J.flags&32){H=J.stateNode;try{H5(H,"")}catch(N){Y9(J,J.return,N)}}Y&4&&J.stateNode!=null&&(H=J.memoizedProps,qX(J,H,Z!==null?Z.memoizedProps:H)),Y&1024&&(KX=!0);break;case 6:if(k8(w,J),K8(J),Y&4){if(J.stateNode===null)throw Error(c(162));Y=J.memoizedProps,Z=J.stateNode;try{Z.nodeValue=Y}catch(N){Y9(J,J.return,N)}}break;case 3:if(OZ=null,H=J6,J6=uZ(w.containerInfo),k8(w,J),J6=H,K8(J),Y&4&&Z!==null&&Z.memoizedState.isDehydrated)try{K5(w.containerInfo)}catch(N){Y9(J,J.return,N)}KX&&(KX=!1,F$(J));break;case 4:Y=J6,J6=uZ(J.stateNode.containerInfo),k8(w,J),K8(J),J6=Y;break;case 12:k8(w,J),K8(J);break;case 31:k8(w,J),K8(J),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 13:k8(w,J),K8(J),J.child.flags&8192&&J.memoizedState!==null!==(Z!==null&&Z.memoizedState!==null)&&(WY=A8()),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 22:H=J.memoizedState!==null;var U=Z!==null&&Z.memoizedState!==null,G=C6,q=x9;if(C6=G||H,x9=q||U,k8(w,J),x9=q,C6=G,K8(J),Y&8192)J:for(w=J.stateNode,w._visibility=H?w._visibility&-2:w._visibility|1,H&&(Z===null||U||C6||x9||i7(J)),Z=null,w=J;;){if(w.tag===5||w.tag===26){if(Z===null){U=Z=w;try{if(X=U.stateNode,H)Q=X.style,typeof Q.setProperty==="function"?Q.setProperty("display","none","important"):Q.display="none";else{W=U.stateNode;var K=U.memoizedProps.style,$=K!==void 0&&K!==null&&K.hasOwnProperty("display")?K.display:null;W.style.display=$==null||typeof $==="boolean"?"":(""+$).trim()}}catch(N){Y9(U,U.return,N)}}}else if(w.tag===6){if(Z===null){U=w;try{U.stateNode.nodeValue=H?"":U.memoizedProps}catch(N){Y9(U,U.return,N)}}}else if(w.tag===18){if(Z===null){U=w;try{var R=U.stateNode;H?Qk(R,!0):Qk(U.stateNode,!1)}catch(N){Y9(U,U.return,N)}}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===J)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===J)break J;for(;w.sibling===null;){if(w.return===null||w.return===J)break J;Z===w&&(Z=null),w=w.return}Z===w&&(Z=null),w.sibling.return=w.return,w=w.sibling}Y&4&&(Y=J.updateQueue,Y!==null&&(Z=Y.retryQueue,Z!==null&&(Y.retryQueue=null,JZ(J,Z))));break;case 19:k8(w,J),K8(J),Y&4&&(Y=J.updateQueue,Y!==null&&(J.updateQueue=null,JZ(J,Y)));break;case 30:break;case 21:break;default:k8(w,J),K8(J)}}function K8(J){var w=J.flags;if(w&2){try{for(var Z,Y=J.return;Y!==null;){if(q$(Y)){Z=Y;break}Y=Y.return}if(Z==null)throw Error(c(160));switch(Z.tag){case 27:var H=Z.stateNode,X=kX(J);hZ(J,X,H);break;case 5:var Q=Z.stateNode;Z.flags&32&&(H5(Q,""),Z.flags&=-33);var W=kX(J);hZ(J,W,Q);break;case 3:case 4:var U=Z.stateNode.containerInfo,G=kX(J);eX(J,G,U);break;default:throw Error(c(161))}}catch(q){Y9(J,J.return,q)}J.flags&=-3}w&4096&&(J.flags&=-4097)}function F$(J){if(J.subtreeFlags&1024)for(J=J.child;J!==null;){var w=J;F$(w),w.tag===5&&w.flags&1024&&w.stateNode.reset(),J=J.sibling}}function A6(J,w){if(w.subtreeFlags&8772)for(w=w.child;w!==null;)K$(J,w.alternate,w),w=w.sibling}function i7(J){for(J=J.child;J!==null;){var w=J;switch(w.tag){case 0:case 11:case 14:case 15:B7(4,w,w.return),i7(w);break;case 1:K6(w,w.return);var Z=w.stateNode;typeof Z.componentWillUnmount==="function"&&U$(w,w.return,Z),i7(w);break;case 27:TJ(w.stateNode);case 26:case 5:K6(w,w.return),i7(w);break;case 22:w.memoizedState===null&&i7(w);break;case 30:i7(w);break;default:i7(w)}J=J.sibling}}function E6(J,w,Z){Z=Z&&(w.subtreeFlags&8772)!==0;for(w=w.child;w!==null;){var Y=w.alternate,H=J,X=w,Q=X.flags;switch(X.tag){case 0:case 11:case 15:E6(H,X,Z),tJ(4,X);break;case 1:if(E6(H,X,Z),Y=X,H=Y.stateNode,typeof H.componentDidMount==="function")try{H.componentDidMount()}catch(G){Y9(Y,Y.return,G)}if(Y=X,H=Y.updateQueue,H!==null){var W=Y.stateNode;try{var U=H.shared.hiddenCallbacks;if(U!==null)for(H.shared.hiddenCallbacks=null,H=0;H<U.length;H++)DK(U[H],W)}catch(G){Y9(Y,Y.return,G)}}Z&&Q&64&&W$(X),AJ(X,X.return);break;case 27:k$(X);case 26:case 5:E6(H,X,Z),Z&&Y===null&&Q&4&&G$(X),AJ(X,X.return);break;case 12:E6(H,X,Z);break;case 31:E6(H,X,Z),Z&&Q&4&&D$(H,X);break;case 13:E6(H,X,Z),Z&&Q&4&&M$(H,X);break;case 22:X.memoizedState===null&&E6(H,X,Z),AJ(X,X.return);break;case 30:break;default:E6(H,X,Z)}w=w.sibling}}function JW(J,w){var Z=null;J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Z=J.memoizedState.cachePool.pool),J=null,w.memoizedState!==null&&w.memoizedState.cachePool!==null&&(J=w.memoizedState.cachePool.pool),J!==Z&&(J!=null&&J.refCount++,Z!=null&&aJ(Z))}function wW(J,w){J=null,w.alternate!==null&&(J=w.alternate.memoizedState.cache),w=w.memoizedState.cache,w!==J&&(w.refCount++,J!=null&&aJ(J))}function e8(J,w,Z,Y){if(w.subtreeFlags&10256)for(w=w.child;w!==null;)N$(J,w,Z,Y),w=w.sibling}function N$(J,w,Z,Y){var H=w.flags;switch(w.tag){case 0:case 11:case 15:e8(J,w,Z,Y),H&2048&&tJ(9,w);break;case 1:e8(J,w,Z,Y);break;case 3:e8(J,w,Z,Y),H&2048&&(J=null,w.alternate!==null&&(J=w.alternate.memoizedState.cache),w=w.memoizedState.cache,w!==J&&(w.refCount++,J!=null&&aJ(J)));break;case 12:if(H&2048){e8(J,w,Z,Y),J=w.stateNode;try{var X=w.memoizedProps,Q=X.id,W=X.onPostCommit;typeof W==="function"&&W(Q,w.alternate===null?"mount":"update",J.passiveEffectDuration,-0)}catch(U){Y9(w,w.return,U)}}else e8(J,w,Z,Y);break;case 31:e8(J,w,Z,Y);break;case 13:e8(J,w,Z,Y);break;case 23:break;case 22:X=w.stateNode,Q=w.alternate,w.memoizedState!==null?X._visibility&2?e8(J,w,Z,Y):EJ(J,w):X._visibility&2?e8(J,w,Z,Y):(X._visibility|=2,b1(J,w,Z,Y,(w.subtreeFlags&10256)!==0||!1)),H&2048&&JW(Q,w);break;case 24:e8(J,w,Z,Y),H&2048&&wW(w.alternate,w);break;default:e8(J,w,Z,Y)}}function b1(J,w,Z,Y,H){H=H&&((w.subtreeFlags&10256)!==0||!1);for(w=w.child;w!==null;){var X=J,Q=w,W=Z,U=Y,G=Q.flags;switch(Q.tag){case 0:case 11:case 15:b1(X,Q,W,U,H),tJ(8,Q);break;case 23:break;case 22:var q=Q.stateNode;Q.memoizedState!==null?q._visibility&2?b1(X,Q,W,U,H):EJ(X,Q):(q._visibility|=2,b1(X,Q,W,U,H)),H&&G&2048&&JW(Q.alternate,Q);break;case 24:b1(X,Q,W,U,H),H&&G&2048&&wW(Q.alternate,Q);break;default:b1(X,Q,W,U,H)}w=w.sibling}}function EJ(J,w){if(w.subtreeFlags&10256)for(w=w.child;w!==null;){var Z=J,Y=w,H=Y.flags;switch(Y.tag){case 22:EJ(Z,Y),H&2048&&JW(Y.alternate,Y);break;case 24:EJ(Z,Y),H&2048&&wW(Y.alternate,Y);break;default:EJ(Z,Y)}w=w.sibling}}function f1(J,w,Z){if(J.subtreeFlags&RJ)for(J=J.child;J!==null;)z$(J,w,Z),J=J.sibling}function z$(J,w,Z){switch(J.tag){case 26:f1(J,w,Z),J.flags&RJ&&J.memoizedState!==null&&Rz(Z,J6,J.memoizedState,J.memoizedProps);break;case 5:f1(J,w,Z);break;case 3:case 4:var Y=J6;J6=uZ(J.stateNode.containerInfo),f1(J,w,Z),J6=Y;break;case 22:J.memoizedState===null&&(Y=J.alternate,Y!==null&&Y.memoizedState!==null?(Y=RJ,RJ=16777216,f1(J,w,Z),RJ=Y):f1(J,w,Z));break;default:f1(J,w,Z)}}function L$(J){var w=J.alternate;if(w!==null&&(J=w.child,J!==null)){w.child=null;do w=J.sibling,J.sibling=null,J=w;while(J!==null)}}function QJ(J){var w=J.deletions;if((J.flags&16)!==0){if(w!==null)for(var Z=0;Z<w.length;Z++){var Y=w[Z];u9=Y,V$(Y,J)}L$(J)}if(J.subtreeFlags&10256)for(J=J.child;J!==null;)B$(J),J=J.sibling}function B$(J){switch(J.tag){case 0:case 11:case 15:QJ(J),J.flags&2048&&B7(9,J,J.return);break;case 3:QJ(J);break;case 12:QJ(J);break;case 22:var w=J.stateNode;J.memoizedState!==null&&w._visibility&2&&(J.return===null||J.return.tag!==13)?(w._visibility&=-3,DZ(J)):QJ(J);break;default:QJ(J)}}function DZ(J){var w=J.deletions;if((J.flags&16)!==0){if(w!==null)for(var Z=0;Z<w.length;Z++){var Y=w[Z];u9=Y,V$(Y,J)}L$(J)}for(J=J.child;J!==null;){switch(w=J,w.tag){case 0:case 11:case 15:B7(8,w,w.return),DZ(w);break;case 22:Z=w.stateNode,Z._visibility&2&&(Z._visibility&=-3,DZ(w));break;default:DZ(w)}J=J.sibling}}function V$(J,w){for(;u9!==null;){var Z=u9;switch(Z.tag){case 0:case 11:case 15:B7(8,Z,w);break;case 23:case 22:if(Z.memoizedState!==null&&Z.memoizedState.cachePool!==null){var Y=Z.memoizedState.cachePool.pool;Y!=null&&Y.refCount++}break;case 24:aJ(Z.memoizedState.cache)}if(Y=Z.child,Y!==null)Y.return=Z,u9=Y;else J:for(Z=J;u9!==null;){Y=u9;var{sibling:H,return:X}=Y;if($$(Y),Y===Z){u9=null;break J}if(H!==null){H.return=X,u9=H;break J}u9=X}}}function C8(){return(J9&2)!==0&&s0!==0?s0&-s0:T0.T!==null?XW():bk()}function E$(){if(_8===0)if((s0&536870912)===0||n0){var J=iw;iw<<=1,(iw&3932160)===0&&(iw=262144),_8=J}else _8=536870912;return J=P8.current,J!==null&&(J.flags|=32),_8}function D8(J,w,Z){if(J===K9&&(Z9===2||Z9===9)||J.cancelPendingCommit!==null)q5(J,0),G7(J,s0,_8,!1);if(sJ(J,Z),(J9&2)===0||J!==K9)J===K9&&((J9&2)===0&&(r7|=Z),P9===4&&G7(J,s0,_8,!1)),D6(J)}function I$(J,w,Z){if((J9&6)!==0)throw Error(c(327));var Y=!Z&&(w&127)===0&&(w&J.expiredLanes)===0||iJ(J,w),H=Y?xN(J,w):$X(J,w,!0),X=Y;do{if(H===0){O5&&!Y&&G7(J,w,0,!1);break}else{if(Z=J.current.alternate,X&&!fN(Z)){H=$X(J,w,!1),X=!1;continue}if(H===2){if(X=w,J.errorRecoveryDisabledLanes&X)var Q=0;else Q=J.pendingLanes&-536870913,Q=Q!==0?Q:Q&536870912?536870912:0;if(Q!==0){w=Q;J:{var W=J;H=IJ;var U=W.current.memoizedState.isDehydrated;if(U&&(q5(W,Q).flags|=256),Q=$X(W,Q,!1),Q!==2){if(ZW&&!U){W.errorRecoveryDisabledLanes|=X,r7|=X,H=4;break J}X=R8,R8=H,X!==null&&(R8===null?R8=X:R8.push.apply(R8,X))}H=Q}if(X=!1,H!==2)continue}}if(H===1){q5(J,0),G7(J,w,0,!0);break}J:{switch(Y=J,X=H,X){case 0:case 1:throw Error(c(345));case 4:if((w&4194048)!==w)break;case 6:G7(Y,w,_8,!U7);break J;case 2:R8=null;break;case 3:case 5:break;default:throw Error(c(329))}if((w&62914560)===w&&(H=WY+300-A8(),10<H)){if(G7(Y,w,_8,!U7),aZ(Y,0,!0)!==0)break J;b6=w,Y.timeoutHandle=s$(sq.bind(null,Y,Z,R8,yZ,JQ,w,_8,r7,U5,U7,X,"Throttled",-0,0),H);break J}sq(Y,Z,R8,yZ,JQ,w,_8,r7,U5,U7,X,null,-0,0)}}break}while(1);D6(J)}function sq(J,w,Z,Y,H,X,Q,W,U,G,q,K,$,R){if(J.timeoutHandle=-1,K=w.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:P6},z$(w,X,K);var N=(X&62914560)===X?WY-A8():(X&4194048)===X?_$-A8():0;if(N=Dz(K,N),N!==null){b6=X,J.cancelPendingCommit=N(nq.bind(null,J,w,X,Z,Y,H,Q,W,U,q,K,null,$,R)),G7(J,X,Q,!G);return}}nq(J,w,X,Z,Y,H,Q,W,U)}function fN(J){for(var w=J;;){var Z=w.tag;if((Z===0||Z===11||Z===15)&&w.flags&16384&&(Z=w.updateQueue,Z!==null&&(Z=Z.stores,Z!==null)))for(var Y=0;Y<Z.length;Y++){var H=Z[Y],X=H.getSnapshot;H=H.value;try{if(!T8(X(),H))return!1}catch(Q){return!1}}if(Z=w.child,w.subtreeFlags&16384&&Z!==null)Z.return=w,w=Z;else{if(w===J)break;for(;w.sibling===null;){if(w.return===null||w.return===J)return!0;w=w.return}w.sibling.return=w.return,w=w.sibling}}return!0}function G7(J,w,Z,Y){w&=~YW,w&=~r7,J.suspendedLanes|=w,J.pingedLanes&=~w,Y&&(J.warmLanes|=w),Y=J.expirationTimes;for(var H=w;0<H;){var X=31-I8(H),Q=1<<X;Y[X]=-1,H&=~Q}Z!==0&&Sk(J,Z,w)}function UY(){return(J9&6)===0?(eJ(0,!1),!1):!0}function HW(){if(u0!==null){if(Z9===0)var J=u0.return;else J=u0,S6=W1=null,mQ(J),e1=null,hJ=0,J=u0;for(;J!==null;)Q$(J.alternate,J),J=J.return;u0=null}}function q5(J,w){var Z=J.timeoutHandle;Z!==-1&&(J.timeoutHandle=-1,rN(Z)),Z=J.cancelPendingCommit,Z!==null&&(J.cancelPendingCommit=null,Z()),b6=0,HW(),K9=J,u0=Z=j6(J.current,null),s0=w,Z9=0,L8=null,U7=!1,O5=iJ(J,w),ZW=!1,U5=_8=YW=r7=V7=P9=0,R8=IJ=null,JQ=!1,(w&8)!==0&&(w|=w&32);var Y=J.entangledLanes;if(Y!==0)for(J=J.entanglements,Y&=w;0<Y;){var H=31-I8(Y),X=1<<H;w|=J[H],Y&=~X}return g6=w,JY(),Z}function C$(J,w){v0=null,T0.H=yJ,w===M5||w===ZY?(w=Aq(),Z9=3):w===hQ?(w=Aq(),Z9=4):Z9=w===tQ?8:w!==null&&typeof w==="object"&&typeof w.then==="function"?6:1,L8=w,u0===null&&(P9=1,bZ(J,d8(w,J.current)))}function T$(){var J=P8.current;return J===null?!0:(s0&4194048)===s0?u8===null?!0:!1:(s0&62914560)===s0||(s0&536870912)!==0?J===u8:!1}function P$(){var J=T0.H;return T0.H=yJ,J===null?yJ:J}function S$(){var J=T0.A;return T0.A=SN,J}function gZ(){P9=4,U7||(s0&4194048)!==s0&&P8.current!==null||(O5=!0),(V7&134217727)===0&&(r7&134217727)===0||K9===null||G7(K9,s0,_8,!1)}function $X(J,w,Z){var Y=J9;J9|=2;var H=P$(),X=S$();if(K9!==J||s0!==w)yZ=null,q5(J,w);w=!1;var Q=P9;J:do try{if(Z9!==0&&u0!==null){var W=u0,U=L8;switch(Z9){case 8:HW(),Q=6;break J;case 3:case 2:case 9:case 6:P8.current===null&&(w=!0);var G=Z9;if(Z9=0,L8=null,o1(J,W,U,G),Z&&O5){Q=0;break J}break;default:G=Z9,Z9=0,L8=null,o1(J,W,U,G)}}bN(),Q=P9;break}catch(q){C$(J,q)}while(1);return w&&J.shellSuspendCounter++,S6=W1=null,J9=Y,T0.H=H,T0.A=X,u0===null&&(K9=null,s0=0,JY()),Q}function bN(){for(;u0!==null;)j$(u0)}function xN(J,w){var Z=J9;J9|=2;var Y=P$(),H=S$();K9!==J||s0!==w?(yZ=null,vZ=A8()+500,q5(J,w)):O5=iJ(J,w);J:do try{if(Z9!==0&&u0!==null){w=u0;var X=L8;w:switch(Z9){case 1:Z9=0,L8=null,o1(J,w,X,1);break;case 2:case 9:if(_q(X)){Z9=0,L8=null,oq(w);break}w=function(){Z9!==2&&Z9!==9||K9!==J||(Z9=7),D6(J)},X.then(w,w);break J;case 3:Z9=7;break J;case 4:Z9=5;break J;case 7:_q(X)?(Z9=0,L8=null,oq(w)):(Z9=0,L8=null,o1(J,w,X,7));break;case 5:var Q=null;switch(u0.tag){case 26:Q=u0.memoizedState;case 5:case 27:var W=u0;if(Q?t$(Q):W.stateNode.complete){Z9=0,L8=null;var U=W.sibling;if(U!==null)u0=U;else{var G=W.return;G!==null?(u0=G,GY(G)):u0=null}break w}}Z9=0,L8=null,o1(J,w,X,5);break;case 6:Z9=0,L8=null,o1(J,w,X,6);break;case 8:HW(),P9=6;break J;default:throw Error(c(462))}}hN();break}catch(q){C$(J,q)}while(1);if(S6=W1=null,T0.H=Y,T0.A=H,J9=Z,u0!==null)return 0;return K9=null,s0=0,JY(),P9}function hN(){for(;u0!==null&&!XF();)j$(u0)}function j$(J){var w=X$(J.alternate,J,g6);J.memoizedProps=J.pendingProps,w===null?GY(J):u0=w}function oq(J){var w=J,Z=w.alternate;switch(w.tag){case 15:case 0:w=pq(Z,w,w.pendingProps,w.type,void 0,s0);break;case 11:w=pq(Z,w,w.pendingProps,w.type.render,w.ref,s0);break;case 5:mQ(w);default:Q$(Z,w),w=u0=QK(w,g6),w=X$(Z,w,g6)}J.memoizedProps=J.pendingProps,w===null?GY(J):u0=w}function o1(J,w,Z,Y){S6=W1=null,mQ(w),e1=null,hJ=0;var H=w.return;try{if(_N(J,H,w,Z,s0)){P9=1,bZ(J,d8(Z,J.current)),u0=null;return}}catch(X){if(H!==null)throw u0=H,X;P9=1,bZ(J,d8(Z,J.current)),u0=null;return}if(w.flags&32768){if(n0||Y===1)J=!0;else if(O5||(s0&536870912)!==0)J=!1;else if(U7=J=!0,Y===2||Y===9||Y===3||Y===6)Y=P8.current,Y!==null&&Y.tag===13&&(Y.flags|=16384);f$(w,J)}else GY(w)}function GY(J){var w=J;do{if((w.flags&32768)!==0){f$(w,U7);return}J=w.return;var Z=IN(w.alternate,w,g6);if(Z!==null){u0=Z;return}if(w=w.sibling,w!==null){u0=w;return}u0=w=J}while(w!==null);P9===0&&(P9=5)}function f$(J,w){do{var Z=CN(J.alternate,J);if(Z!==null){Z.flags&=32767,u0=Z;return}if(Z=J.return,Z!==null&&(Z.flags|=32768,Z.subtreeFlags=0,Z.deletions=null),!w&&(J=J.sibling,J!==null)){u0=J;return}u0=J=Z}while(J!==null);P9=6,u0=null}function nq(J,w,Z,Y,H,X,Q,W,U){J.cancelPendingCommit=null;do qY();while(g9!==0);if((J9&6)!==0)throw Error(c(327));if(w!==null){if(w===J.current)throw Error(c(177));if(X=w.lanes|w.childLanes,X|=TQ,DF(J,Z,X,Q,W,U),J===K9&&(u0=K9=null,s0=0),G5=w,M7=J,b6=Z,wQ=X,ZQ=H,A$=Y,(w.subtreeFlags&10256)!==0||(w.flags&10256)!==0?(J.callbackNode=null,J.callbackPriority=0,lN(VZ,function(){return y$(),null})):(J.callbackNode=null,J.callbackPriority=0),Y=(w.flags&13878)!==0,(w.subtreeFlags&13878)!==0||Y){Y=T0.T,T0.T=null,H=w9.p,w9.p=2,Q=J9,J9|=4;try{TN(J,w,Z)}finally{J9=Q,w9.p=H,T0.T=Y}}g9=1,b$(),x$(),h$()}}function b$(){if(g9===1){g9=0;var J=M7,w=G5,Z=(w.flags&13878)!==0;if((w.subtreeFlags&13878)!==0||Z){Z=T0.T,T0.T=null;var Y=w9.p;w9.p=2;var H=J9;J9|=4;try{O$(w,J);var X=GQ,Q=tk(J.containerInfo),W=X.focusedElem,U=X.selectionRange;if(Q!==W&&W&&W.ownerDocument&&rk(W.ownerDocument.documentElement,W)){if(U!==null&&CQ(W)){var{start:G,end:q}=U;if(q===void 0&&(q=G),"selectionStart"in W)W.selectionStart=G,W.selectionEnd=Math.min(q,W.value.length);else{var K=W.ownerDocument||document,$=K&&K.defaultView||window;if($.getSelection){var R=$.getSelection(),N=W.textContent.length,L=Math.min(U.start,N),D=U.end===void 0?L:Math.min(U.end,N);!R.extend&&L>D&&(Q=D,D=L,L=Q);var k=Oq(W,L),O=Oq(W,D);if(k&&O&&(R.rangeCount!==1||R.anchorNode!==k.node||R.anchorOffset!==k.offset||R.focusNode!==O.node||R.focusOffset!==O.offset)){var M=K.createRange();M.setStart(k.node,k.offset),R.removeAllRanges(),L>D?(R.addRange(M),R.extend(O.node,O.offset)):(M.setEnd(O.node,O.offset),R.addRange(M))}}}}K=[];for(R=W;R=R.parentNode;)R.nodeType===1&&K.push({element:R,left:R.scrollLeft,top:R.scrollTop});typeof W.focus==="function"&&W.focus();for(W=0;W<K.length;W++){var z=K[W];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}sZ=!!UQ,GQ=UQ=null}finally{J9=H,w9.p=Y,T0.T=Z}}J.current=w,g9=2}}function x$(){if(g9===2){g9=0;var J=M7,w=G5,Z=(w.flags&8772)!==0;if((w.subtreeFlags&8772)!==0||Z){Z=T0.T,T0.T=null;var Y=w9.p;w9.p=2;var H=J9;J9|=4;try{K$(J,w.alternate,w)}finally{J9=H,w9.p=Y,T0.T=Z}}g9=3}}function h$(){if(g9===4||g9===3){g9=0,QF();var J=M7,w=G5,Z=b6,Y=A$;(w.subtreeFlags&10256)!==0||(w.flags&10256)!==0?g9=5:(g9=0,G5=M7=null,v$(J,J.pendingLanes));var H=J.pendingLanes;if(H===0&&(D7=null),LQ(Z),w=w.stateNode,E8&&typeof E8.onCommitFiberRoot==="function")try{E8.onCommitFiberRoot(cJ,w,void 0,(w.current.flags&128)===128)}catch(U){}if(Y!==null){w=T0.T,H=w9.p,w9.p=2,T0.T=null;try{for(var X=J.onRecoverableError,Q=0;Q<Y.length;Q++){var W=Y[Q];X(W.value,{componentStack:W.stack})}}finally{T0.T=w,w9.p=H}}(b6&3)!==0&&qY(),D6(J),H=J.pendingLanes,(Z&261930)!==0&&(H&42)!==0?J===YQ?CJ++:(CJ=0,YQ=J):CJ=0,eJ(0,!1)}}function v$(J,w){(J.pooledCacheLanes&=w)===0&&(w=J.pooledCache,w!=null&&(J.pooledCache=null,aJ(w)))}function qY(){return b$(),x$(),h$(),y$()}function y$(){if(g9!==5)return!1;var J=M7,w=wQ;wQ=0;var Z=LQ(b6),Y=T0.T,H=w9.p;try{w9.p=32>Z?32:Z,T0.T=null,Z=ZQ,ZQ=null;var X=M7,Q=b6;if(g9=0,G5=M7=null,b6=0,(J9&6)!==0)throw Error(c(331));var W=J9;if(J9|=4,B$(X.current),N$(X,X.current,Q,Z),J9=W,eJ(0,!1),E8&&typeof E8.onPostCommitFiberRoot==="function")try{E8.onPostCommitFiberRoot(cJ,X)}catch(U){}return!0}finally{w9.p=H,T0.T=Y,v$(J,w)}}function aq(J,w,Z){w=d8(Z,w),w=aX(J.stateNode,w,2),J=R7(J,w,2),J!==null&&(sJ(J,2),D6(J))}function Y9(J,w,Z){if(J.tag===3)aq(J,J,Z);else for(;w!==null;){if(w.tag===3){aq(w,J,Z);break}else if(w.tag===1){var Y=w.stateNode;if(typeof w.type.getDerivedStateFromError==="function"||typeof Y.componentDidCatch==="function"&&(D7===null||!D7.has(Y))){J=d8(Z,J),Z=eK(2),Y=R7(w,Z,2),Y!==null&&(J$(Z,Y,w,J),sJ(Y,2),D6(Y));break}}w=w.return}}function RX(J,w,Z){var Y=J.pingCache;if(Y===null){Y=J.pingCache=new jN;var H=new Set;Y.set(w,H)}else H=Y.get(w),H===void 0&&(H=new Set,Y.set(w,H));H.has(Z)||(ZW=!0,H.add(Z),J=vN.bind(null,J,w,Z),w.then(J,J))}function vN(J,w,Z){var Y=J.pingCache;Y!==null&&Y.delete(w),J.pingedLanes|=J.suspendedLanes&Z,J.warmLanes&=~Z,K9===J&&(s0&Z)===Z&&(P9===4||P9===3&&(s0&62914560)===s0&&300>A8()-WY?(J9&2)===0&&q5(J,0):YW|=Z,U5===s0&&(U5=0)),D6(J)}function g$(J,w){w===0&&(w=Pk()),J=Q1(J,w),J!==null&&(sJ(J,w),D6(J))}function yN(J){var w=J.memoizedState,Z=0;w!==null&&(Z=w.retryLane),g$(J,Z)}function gN(J,w){var Z=0;switch(J.tag){case 31:case 13:var{stateNode:Y,memoizedState:H}=J;H!==null&&(Z=H.retryLane);break;case 19:Y=J.stateNode;break;case 22:Y=J.stateNode._retryCache;break;default:throw Error(c(314))}Y!==null&&Y.delete(w),g$(J,Z)}function lN(J,w){return NQ(J,w)}function D6(J){J!==x1&&J.next===null&&(x1===null?lZ=x1=J:x1=x1.next=J),pZ=!0,HQ||(HQ=!0,dN())}function eJ(J,w){if(!DX&&pZ){DX=!0;do{var Z=!1;for(var Y=lZ;Y!==null;){if(!w)if(J!==0){var H=Y.pendingLanes;if(H===0)var X=0;else{var{suspendedLanes:Q,pingedLanes:W}=Y;X=(1<<31-I8(42|J)+1)-1,X&=H&~(Q&~W),X=X&201326741?X&201326741|1:X?X|2:0}X!==0&&(Z=!0,rq(Y,X))}else X=s0,X=aZ(Y,Y===K9?X:0,Y.cancelPendingCommit!==null||Y.timeoutHandle!==-1),(X&3)===0||iJ(Y,X)||(Z=!0,rq(Y,X));Y=Y.next}}while(Z);DX=!1}}function pN(){l$()}function l$(){pZ=HQ=!1;var J=0;q7!==0&&aN()&&(J=q7);for(var w=A8(),Z=null,Y=lZ;Y!==null;){var H=Y.next,X=p$(Y,w);if(X===0)Y.next=null,Z===null?lZ=H:Z.next=H,H===null&&(x1=Z);else if(Z=Y,J!==0||(X&3)!==0)pZ=!0;Y=H}g9!==0&&g9!==5||eJ(J,!1),q7!==0&&(q7=0)}function p$(J,w){for(var{suspendedLanes:Z,pingedLanes:Y,expirationTimes:H}=J,X=J.pendingLanes&-62914561;0<X;){var Q=31-I8(X),W=1<<Q,U=H[Q];if(U===-1){if((W&Z)===0||(W&Y)!==0)H[Q]=RF(W,w)}else U<=w&&(J.expiredLanes|=W);X&=~W}if(w=K9,Z=s0,Z=aZ(J,J===w?Z:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),Y=J.callbackNode,Z===0||J===w&&(Z9===2||Z9===9)||J.cancelPendingCommit!==null)return Y!==null&&Y!==null&&cH(Y),J.callbackNode=null,J.callbackPriority=0;if((Z&3)===0||iJ(J,Z)){if(w=Z&-Z,w===J.callbackPriority)return w;switch(Y!==null&&cH(Y),LQ(Z)){case 2:case 8:Z=Ck;break;case 32:Z=VZ;break;case 268435456:Z=Tk;break;default:Z=VZ}return Y=d$.bind(null,J),Z=NQ(Z,Y),J.callbackPriority=w,J.callbackNode=Z,w}return Y!==null&&Y!==null&&cH(Y),J.callbackPriority=2,J.callbackNode=null,2}function d$(J,w){if(g9!==0&&g9!==5)return J.callbackNode=null,J.callbackPriority=0,null;var Z=J.callbackNode;if(qY()&&J.callbackNode!==Z)return null;var Y=s0;if(Y=aZ(J,J===K9?Y:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),Y===0)return null;return I$(J,Y,w),p$(J,A8()),J.callbackNode!=null&&J.callbackNode===Z?d$.bind(null,J):null}function rq(J,w){if(qY())return null;I$(J,w,!0)}function dN(){tN(function(){(J9&6)!==0?NQ(Ik,pN):l$()})}function XW(){if(q7===0){var J=X5;J===0&&(J=cw,cw<<=1,(cw&261888)===0&&(cw=256)),q7=J}return q7}function tq(J){return J==null||typeof J==="symbol"||typeof J==="boolean"?null:typeof J==="function"?J:XZ(""+J)}function eq(J,w){var Z=w.ownerDocument.createElement("input");return Z.name=w.name,Z.value=w.value,J.id&&Z.setAttribute("form",J.id),w.parentNode.insertBefore(Z,w),J=new FormData(J),Z.parentNode.removeChild(Z),J}function mN(J,w,Z,Y,H){if(w==="submit"&&Z&&Z.stateNode===H){var X=tq((H[M8]||null).action),Q=Y.submitter;Q&&(w=(w=Q[M8]||null)?tq(w.formAction):Q.getAttribute("formAction"),w!==null&&(X=w,Q=null));var W=new rZ("action","action",null,Y,H);J.push({event:W,listeners:[{instance:null,listener:function(){if(Y.defaultPrevented){if(q7!==0){var U=Q?eq(H,Q):new FormData(H);oX(Z,{pending:!0,data:U,method:H.method,action:X},null,U)}}else typeof X==="function"&&(W.preventDefault(),U=Q?eq(H,Q):new FormData(H),oX(Z,{pending:!0,data:U,method:H.method,action:X},X,U))},currentTarget:H}]})}}function m$(J,w){w=(w&4)!==0;for(var Z=0;Z<J.length;Z++){var Y=J[Z],H=Y.event;Y=Y.listeners;J:{var X=void 0;if(w)for(var Q=Y.length-1;0<=Q;Q--){var W=Y[Q],U=W.instance,G=W.currentTarget;if(W=W.listener,U!==X&&H.isPropagationStopped())break J;X=W,H.currentTarget=G;try{X(H)}catch(q){AZ(q)}H.currentTarget=null,X=U}else for(Q=0;Q<Y.length;Q++){if(W=Y[Q],U=W.instance,G=W.currentTarget,W=W.listener,U!==X&&H.isPropagationStopped())break J;X=W,H.currentTarget=G;try{X(H)}catch(q){AZ(q)}H.currentTarget=null,X=U}}}}function m0(J,w){var Z=w[CX];Z===void 0&&(Z=w[CX]=new Set);var Y=J+"__bubble";Z.has(Y)||(u$(w,J,2,!1),Z.add(Y))}function MX(J,w,Z){var Y=0;w&&(Y|=4),u$(Z,J,Y,w)}function QW(J){if(!J[wZ]){J[wZ]=!0,xk.forEach(function(Z){Z!=="selectionchange"&&(uN.has(Z)||MX(Z,!1,J),MX(Z,!0,J))});var w=J.nodeType===9?J:J.ownerDocument;w===null||w[wZ]||(w[wZ]=!0,MX("selectionchange",!1,w))}}function u$(J,w,Z,Y){switch(YR(w)){case 2:var H=Fz;break;case 8:H=Nz;break;default:H=qW}Z=H.bind(null,w,Z,J),H=void 0,!fX||w!=="touchstart"&&w!=="touchmove"&&w!=="wheel"||(H=!0),Y?H!==void 0?J.addEventListener(w,Z,{capture:!0,passive:H}):J.addEventListener(w,Z,!0):H!==void 0?J.addEventListener(w,Z,{passive:H}):J.addEventListener(w,Z,!1)}function OX(J,w,Z,Y,H){var X=Y;if((w&1)===0&&(w&2)===0&&Y!==null)J:for(;;){if(Y===null)return;var Q=Y.tag;if(Q===3||Q===4){var W=Y.stateNode.containerInfo;if(W===H)break;if(Q===4)for(Q=Y.return;Q!==null;){var U=Q.tag;if((U===3||U===4)&&Q.stateNode.containerInfo===H)return;Q=Q.return}for(;W!==null;){if(Q=g1(W),Q===null)return;if(U=Q.tag,U===5||U===6||U===26||U===27){Y=X=Q;continue J}W=W.parentNode}}Y=Y.return}mk(function(){var G=X,q=_Q(Z),K=[];J:{var $=HK.get(J);if($!==void 0){var R=rZ,N=J;switch(J){case"keypress":if(WZ(Z)===0)break J;case"keydown":case"keyup":R=gF;break;case"focusin":N="focus",R=aH;break;case"focusout":N="blur",R=aH;break;case"beforeblur":case"afterblur":R=aH;break;case"click":if(Z.button===2)break J;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Uq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=IF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=dF;break;case JK:case wK:case ZK:R=PF;break;case YK:R=uF;break;case"scroll":case"scrollend":R=AF;break;case"wheel":R=iF;break;case"copy":case"cut":case"paste":R=jF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=qq;break;case"toggle":case"beforetoggle":R=oF}var L=(w&4)!==0,D=!L&&(J==="scroll"||J==="scrollend"),k=L?$!==null?$+"Capture":null:$;L=[];for(var O=G,M;O!==null;){var z=O;if(M=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||M===null||k===null||(z=SJ(O,k),z!=null&&L.push(lJ(O,z,M))),D)break;O=O.return}0<L.length&&($=new R($,N,null,Z,q),K.push({event:$,listeners:L}))}}if((w&7)===0){J:{if($=J==="mouseover"||J==="pointerover",R=J==="mouseout"||J==="pointerout",$&&Z!==jX&&(N=Z.relatedTarget||Z.fromElement)&&(g1(N)||N[$5]))break J;if(R||$){if($=q.window===q?q:($=q.ownerDocument)?$.defaultView||$.parentWindow:window,R){if(N=Z.relatedTarget||Z.toElement,R=G,N=N?g1(N):null,N!==null&&(D=uJ(N),L=N.tag,N!==D||L!==5&&L!==27&&L!==6))N=null}else R=null,N=G;if(R!==N){if(L=Uq,z="onMouseLeave",k="onMouseEnter",O="mouse",J==="pointerout"||J==="pointerover")L=qq,z="onPointerLeave",k="onPointerEnter",O="pointer";if(D=R==null?$:qJ(R),M=N==null?$:qJ(N),$=new L(z,O+"leave",R,Z,q),$.target=D,$.relatedTarget=M,z=null,g1(q)===G&&(L=new L(k,O+"enter",N,Z,q),L.target=M,L.relatedTarget=D,z=L),D=z,R&&N)w:{L=cN,k=R,O=N,M=0;for(z=k;z;z=L(z))M++;z=0;for(var T=O;T;T=L(T))z++;for(;0<M-z;)k=L(k),M--;for(;0<z-M;)O=L(O),z--;for(;M--;){if(k===O||O!==null&&k===O.alternate){L=k;break w}k=L(k),O=L(O)}L=null}else L=null;R!==null&&Jk(K,$,R,L,!1),N!==null&&D!==null&&Jk(K,D,N,L,!0)}}}J:{if($=G?qJ(G):window,R=$.nodeName&&$.nodeName.toLowerCase(),R==="select"||R==="input"&&$.type==="file")var E=Rq;else if($q($))if(nk)E=HN;else{E=ZN;var A=wN}else R=$.nodeName,!R||R.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?G&&VQ(G.elementType)&&(E=Rq):E=YN;if(E&&(E=E(J,G))){ok(K,E,Z,q);break J}A&&A(J,$,G),J==="focusout"&&G&&$.type==="number"&&G.memoizedProps.value!=null&&SX($,"number",$.value)}switch(A=G?qJ(G):window,J){case"focusin":if($q(A)||A.contentEditable==="true")d1=A,bX=G,NJ=null;break;case"focusout":NJ=bX=d1=null;break;case"mousedown":xX=!0;break;case"contextmenu":case"mouseup":case"dragend":xX=!1,Fq(K,Z,q);break;case"selectionchange":if(QN)break;case"keydown":case"keyup":Fq(K,Z,q)}var S;if(IQ)J:{switch(J){case"compositionstart":var V="onCompositionStart";break J;case"compositionend":V="onCompositionEnd";break J;case"compositionupdate":V="onCompositionUpdate";break J}V=void 0}else p1?ik(J,Z)&&(V="onCompositionEnd"):J==="keydown"&&Z.keyCode===229&&(V="onCompositionStart");if(V&&(ck&&Z.locale!=="ko"&&(p1||V!=="onCompositionStart"?V==="onCompositionEnd"&&p1&&(S=uk()):(W7=q,AQ=("value"in W7)?W7.value:W7.textContent,p1=!0)),A=dZ(G,V),0<A.length&&(V=new Gq(V,J,null,Z,q),K.push({event:V,listeners:A}),S?V.data=S:(S=sk(Z),S!==null&&(V.data=S)))),S=aF?rF(J,Z):tF(J,Z))V=dZ(G,"onBeforeInput"),0<V.length&&(A=new Gq("onBeforeInput","beforeinput",null,Z,q),K.push({event:A,listeners:V}),A.data=S);mN(K,J,G,Z,q)}m$(K,w)})}function lJ(J,w,Z){return{instance:J,listener:w,currentTarget:Z}}function dZ(J,w){for(var Z=w+"Capture",Y=[];J!==null;){var H=J,X=H.stateNode;if(H=H.tag,H!==5&&H!==26&&H!==27||X===null||(H=SJ(J,Z),H!=null&&Y.unshift(lJ(J,H,X)),H=SJ(J,w),H!=null&&Y.push(lJ(J,H,X))),J.tag===3)return Y;J=J.return}return[]}function cN(J){if(J===null)return null;do J=J.return;while(J&&J.tag!==5&&J.tag!==27);return J?J:null}function Jk(J,w,Z,Y,H){for(var X=w._reactName,Q=[];Z!==null&&Z!==Y;){var W=Z,U=W.alternate,G=W.stateNode;if(W=W.tag,U!==null&&U===Y)break;W!==5&&W!==26&&W!==27||G===null||(U=G,H?(G=SJ(Z,X),G!=null&&Q.unshift(lJ(Z,G,U))):H||(G=SJ(Z,X),G!=null&&Q.push(lJ(Z,G,U)))),Z=Z.return}Q.length!==0&&J.push({event:w,listeners:Q})}function wk(J){return(typeof J==="string"?J:""+J).replace(iN,`
`).replace(sN,"")}function c$(J,w){return w=wk(w),wk(J)===w?!0:!1}function U9(J,w,Z,Y,H,X){switch(Z){case"children":typeof Y==="string"?w==="body"||w==="textarea"&&Y===""||H5(J,Y):(typeof Y==="number"||typeof Y==="bigint")&&w!=="body"&&H5(J,""+Y);break;case"className":ow(J,"class",Y);break;case"tabIndex":ow(J,"tabindex",Y);break;case"dir":case"role":case"viewBox":case"width":case"height":ow(J,Z,Y);break;case"style":dk(J,Y,X);break;case"data":if(w!=="object"){ow(J,"data",Y);break}case"src":case"href":if(Y===""&&(w!=="a"||Z!=="href")){J.removeAttribute(Z);break}if(Y==null||typeof Y==="function"||typeof Y==="symbol"||typeof Y==="boolean"){J.removeAttribute(Z);break}Y=XZ(""+Y),J.setAttribute(Z,Y);break;case"action":case"formAction":if(typeof Y==="function"){J.setAttribute(Z,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof X==="function"&&(Z==="formAction"?(w!=="input"&&U9(J,w,"name",H.name,H,null),U9(J,w,"formEncType",H.formEncType,H,null),U9(J,w,"formMethod",H.formMethod,H,null),U9(J,w,"formTarget",H.formTarget,H,null)):(U9(J,w,"encType",H.encType,H,null),U9(J,w,"method",H.method,H,null),U9(J,w,"target",H.target,H,null)));if(Y==null||typeof Y==="symbol"||typeof Y==="boolean"){J.removeAttribute(Z);break}Y=XZ(""+Y),J.setAttribute(Z,Y);break;case"onClick":Y!=null&&(J.onclick=P6);break;case"onScroll":Y!=null&&m0("scroll",J);break;case"onScrollEnd":Y!=null&&m0("scrollend",J);break;case"dangerouslySetInnerHTML":if(Y!=null){if(typeof Y!=="object"||!("__html"in Y))throw Error(c(61));if(Z=Y.__html,Z!=null){if(H.children!=null)throw Error(c(60));J.innerHTML=Z}}break;case"multiple":J.multiple=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;case"muted":J.muted=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(Y==null||typeof Y==="function"||typeof Y==="boolean"||typeof Y==="symbol"){J.removeAttribute("xlink:href");break}Z=XZ(""+Y),J.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Z);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,""+Y):J.removeAttribute(Z);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":Y&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,""):J.removeAttribute(Z);break;case"capture":case"download":Y===!0?J.setAttribute(Z,""):Y!==!1&&Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"?J.setAttribute(Z,Y):J.removeAttribute(Z);break;case"cols":case"rows":case"size":case"span":Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"&&!isNaN(Y)&&1<=Y?J.setAttribute(Z,Y):J.removeAttribute(Z);break;case"rowSpan":case"start":Y==null||typeof Y==="function"||typeof Y==="symbol"||isNaN(Y)?J.removeAttribute(Z):J.setAttribute(Z,Y);break;case"popover":m0("beforetoggle",J),m0("toggle",J),HZ(J,"popover",Y);break;case"xlinkActuate":B6(J,"http://www.w3.org/1999/xlink","xlink:actuate",Y);break;case"xlinkArcrole":B6(J,"http://www.w3.org/1999/xlink","xlink:arcrole",Y);break;case"xlinkRole":B6(J,"http://www.w3.org/1999/xlink","xlink:role",Y);break;case"xlinkShow":B6(J,"http://www.w3.org/1999/xlink","xlink:show",Y);break;case"xlinkTitle":B6(J,"http://www.w3.org/1999/xlink","xlink:title",Y);break;case"xlinkType":B6(J,"http://www.w3.org/1999/xlink","xlink:type",Y);break;case"xmlBase":B6(J,"http://www.w3.org/XML/1998/namespace","xml:base",Y);break;case"xmlLang":B6(J,"http://www.w3.org/XML/1998/namespace","xml:lang",Y);break;case"xmlSpace":B6(J,"http://www.w3.org/XML/1998/namespace","xml:space",Y);break;case"is":HZ(J,"is",Y);break;case"innerText":case"textContent":break;default:if(!(2<Z.length)||Z[0]!=="o"&&Z[0]!=="O"||Z[1]!=="n"&&Z[1]!=="N")Z=VF.get(Z)||Z,HZ(J,Z,Y)}}function WQ(J,w,Z,Y,H,X){switch(Z){case"style":dk(J,Y,X);break;case"dangerouslySetInnerHTML":if(Y!=null){if(typeof Y!=="object"||!("__html"in Y))throw Error(c(61));if(Z=Y.__html,Z!=null){if(H.children!=null)throw Error(c(60));J.innerHTML=Z}}break;case"children":typeof Y==="string"?H5(J,Y):(typeof Y==="number"||typeof Y==="bigint")&&H5(J,""+Y);break;case"onScroll":Y!=null&&m0("scroll",J);break;case"onScrollEnd":Y!=null&&m0("scrollend",J);break;case"onClick":Y!=null&&(J.onclick=P6);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hk.hasOwnProperty(Z))J:{if(Z[0]==="o"&&Z[1]==="n"&&(H=Z.endsWith("Capture"),w=Z.slice(2,H?Z.length-7:void 0),X=J[M8]||null,X=X!=null?X[Z]:null,typeof X==="function"&&J.removeEventListener(w,X,H),typeof Y==="function")){typeof X!=="function"&&X!==null&&(Z in J?J[Z]=null:J.hasAttribute(Z)&&J.removeAttribute(Z)),J.addEventListener(w,Y,H);break J}Z in J?J[Z]=Y:Y===!0?J.setAttribute(Z,""):HZ(J,Z,Y)}}}function e9(J,w,Z){switch(w){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":m0("error",J),m0("load",J);var Y=!1,H=!1,X;for(X in Z)if(Z.hasOwnProperty(X)){var Q=Z[X];if(Q!=null)switch(X){case"src":Y=!0;break;case"srcSet":H=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,w));default:U9(J,w,X,Q,Z,null)}}H&&U9(J,w,"srcSet",Z.srcSet,Z,null),Y&&U9(J,w,"src",Z.src,Z,null);return;case"input":m0("invalid",J);var W=X=Q=H=null,U=null,G=null;for(Y in Z)if(Z.hasOwnProperty(Y)){var q=Z[Y];if(q!=null)switch(Y){case"name":H=q;break;case"type":Q=q;break;case"checked":U=q;break;case"defaultChecked":G=q;break;case"value":X=q;break;case"defaultValue":W=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,w));break;default:U9(J,w,Y,q,Z,null)}}gk(J,X,W,U,G,Q,H,!1);return;case"select":m0("invalid",J),Y=Q=X=null;for(H in Z)if(Z.hasOwnProperty(H)&&(W=Z[H],W!=null))switch(H){case"value":X=W;break;case"defaultValue":Q=W;break;case"multiple":Y=W;default:U9(J,w,H,W,Z,null)}w=X,Z=Q,J.multiple=!!Y,w!=null?a1(J,!!Y,w,!1):Z!=null&&a1(J,!!Y,Z,!0);return;case"textarea":m0("invalid",J),X=H=Y=null;for(Q in Z)if(Z.hasOwnProperty(Q)&&(W=Z[Q],W!=null))switch(Q){case"value":Y=W;break;case"defaultValue":H=W;break;case"children":X=W;break;case"dangerouslySetInnerHTML":if(W!=null)throw Error(c(91));break;default:U9(J,w,Q,W,Z,null)}pk(J,Y,H,X);return;case"option":for(U in Z)if(Z.hasOwnProperty(U)&&(Y=Z[U],Y!=null))switch(U){case"selected":J.selected=Y&&typeof Y!=="function"&&typeof Y!=="symbol";break;default:U9(J,w,U,Y,Z,null)}return;case"dialog":m0("beforetoggle",J),m0("toggle",J),m0("cancel",J),m0("close",J);break;case"iframe":case"object":m0("load",J);break;case"video":case"audio":for(Y=0;Y<gJ.length;Y++)m0(gJ[Y],J);break;case"image":m0("error",J),m0("load",J);break;case"details":m0("toggle",J);break;case"embed":case"source":case"link":m0("error",J),m0("load",J);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in Z)if(Z.hasOwnProperty(G)&&(Y=Z[G],Y!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,w));default:U9(J,w,G,Y,Z,null)}return;default:if(VQ(w)){for(q in Z)Z.hasOwnProperty(q)&&(Y=Z[q],Y!==void 0&&WQ(J,w,q,Y,Z,void 0));return}}for(W in Z)Z.hasOwnProperty(W)&&(Y=Z[W],Y!=null&&U9(J,w,W,Y,Z,null))}function oN(J,w,Z,Y){switch(w){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var H=null,X=null,Q=null,W=null,U=null,G=null,q=null;for(R in Z){var K=Z[R];if(Z.hasOwnProperty(R)&&K!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":U=K;default:Y.hasOwnProperty(R)||U9(J,w,R,null,Y,K)}}for(var $ in Y){var R=Y[$];if(K=Z[$],Y.hasOwnProperty($)&&(R!=null||K!=null))switch($){case"type":X=R;break;case"name":H=R;break;case"checked":G=R;break;case"defaultChecked":q=R;break;case"value":Q=R;break;case"defaultValue":W=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,w));break;default:R!==K&&U9(J,w,$,R,Y,K)}}PX(J,Q,W,U,G,q,X,H);return;case"select":R=Q=W=$=null;for(X in Z)if(U=Z[X],Z.hasOwnProperty(X)&&U!=null)switch(X){case"value":break;case"multiple":R=U;default:Y.hasOwnProperty(X)||U9(J,w,X,null,Y,U)}for(H in Y)if(X=Y[H],U=Z[H],Y.hasOwnProperty(H)&&(X!=null||U!=null))switch(H){case"value":$=X;break;case"defaultValue":W=X;break;case"multiple":Q=X;default:X!==U&&U9(J,w,H,X,Y,U)}w=W,Z=Q,Y=R,$!=null?a1(J,!!Z,$,!1):!!Y!==!!Z&&(w!=null?a1(J,!!Z,w,!0):a1(J,!!Z,Z?[]:"",!1));return;case"textarea":R=$=null;for(W in Z)if(H=Z[W],Z.hasOwnProperty(W)&&H!=null&&!Y.hasOwnProperty(W))switch(W){case"value":break;case"children":break;default:U9(J,w,W,null,Y,H)}for(Q in Y)if(H=Y[Q],X=Z[Q],Y.hasOwnProperty(Q)&&(H!=null||X!=null))switch(Q){case"value":$=H;break;case"defaultValue":R=H;break;case"children":break;case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(91));break;default:H!==X&&U9(J,w,Q,H,Y,X)}lk(J,$,R);return;case"option":for(var N in Z)if($=Z[N],Z.hasOwnProperty(N)&&$!=null&&!Y.hasOwnProperty(N))switch(N){case"selected":J.selected=!1;break;default:U9(J,w,N,null,Y,$)}for(U in Y)if($=Y[U],R=Z[U],Y.hasOwnProperty(U)&&$!==R&&($!=null||R!=null))switch(U){case"selected":J.selected=$&&typeof $!=="function"&&typeof $!=="symbol";break;default:U9(J,w,U,$,Y,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in Z)$=Z[L],Z.hasOwnProperty(L)&&$!=null&&!Y.hasOwnProperty(L)&&U9(J,w,L,null,Y,$);for(G in Y)if($=Y[G],R=Z[G],Y.hasOwnProperty(G)&&$!==R&&($!=null||R!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(c(137,w));break;default:U9(J,w,G,$,Y,R)}return;default:if(VQ(w)){for(var D in Z)$=Z[D],Z.hasOwnProperty(D)&&$!==void 0&&!Y.hasOwnProperty(D)&&WQ(J,w,D,void 0,Y,$);for(q in Y)$=Y[q],R=Z[q],!Y.hasOwnProperty(q)||$===R||$===void 0&&R===void 0||WQ(J,w,q,$,Y,R);return}}for(var k in Z)$=Z[k],Z.hasOwnProperty(k)&&$!=null&&!Y.hasOwnProperty(k)&&U9(J,w,k,null,Y,$);for(K in Y)$=Y[K],R=Z[K],!Y.hasOwnProperty(K)||$===R||$==null&&R==null||U9(J,w,K,$,Y,R)}function Zk(J){switch(J){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nN(){if(typeof performance.getEntriesByType==="function"){for(var J=0,w=0,Z=performance.getEntriesByType("resource"),Y=0;Y<Z.length;Y++){var H=Z[Y],X=H.transferSize,Q=H.initiatorType,W=H.duration;if(X&&W&&Zk(Q)){Q=0,W=H.responseEnd;for(Y+=1;Y<Z.length;Y++){var U=Z[Y],G=U.startTime;if(G>W)break;var{transferSize:q,initiatorType:K}=U;q&&Zk(K)&&(U=U.responseEnd,Q+=q*(U<W?1:(W-G)/(U-G)))}if(--Y,w+=8*(X+Q)/(H.duration/1000),J++,10<J)break}}if(0<J)return w/J/1e6}return navigator.connection&&(J=navigator.connection.downlink,typeof J==="number")?J:5}function mZ(J){return J.nodeType===9?J:J.ownerDocument}function Yk(J){switch(J){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i$(J,w){if(J===0)switch(w){case"svg":return 1;case"math":return 2;default:return 0}return J===1&&w==="foreignObject"?0:J}function qQ(J,w){return J==="textarea"||J==="noscript"||typeof w.children==="string"||typeof w.children==="number"||typeof w.children==="bigint"||typeof w.dangerouslySetInnerHTML==="object"&&w.dangerouslySetInnerHTML!==null&&w.dangerouslySetInnerHTML.__html!=null}function aN(){var J=window.event;if(J&&J.type==="popstate"){if(J===FX)return!1;return FX=J,!0}return FX=null,!1}function eN(J){setTimeout(function(){throw J})}function A7(J){return J==="head"}function Xk(J,w){var Z=w,Y=0;do{var H=Z.nextSibling;if(J.removeChild(Z),H&&H.nodeType===8)if(Z=H.data,Z==="/$"||Z==="/&"){if(Y===0){J.removeChild(H),K5(w);return}Y--}else if(Z==="$"||Z==="$?"||Z==="$~"||Z==="$!"||Z==="&")Y++;else if(Z==="html")TJ(J.ownerDocument.documentElement);else if(Z==="head"){Z=J.ownerDocument.head,TJ(Z);for(var X=Z.firstChild;X;){var{nextSibling:Q,nodeName:W}=X;X[oJ]||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&X.rel.toLowerCase()==="stylesheet"||Z.removeChild(X),X=Q}}else Z==="body"&&TJ(J.ownerDocument.body);Z=H}while(Z);K5(w)}function Qk(J,w){var Z=J;J=0;do{var Y=Z.nextSibling;if(Z.nodeType===1?w?(Z._stashedDisplay=Z.style.display,Z.style.display="none"):(Z.style.display=Z._stashedDisplay||"",Z.getAttribute("style")===""&&Z.removeAttribute("style")):Z.nodeType===3&&(w?(Z._stashedText=Z.nodeValue,Z.nodeValue=""):Z.nodeValue=Z._stashedText||""),Y&&Y.nodeType===8)if(Z=Y.data,Z==="/$")if(J===0)break;else J--;else Z!=="$"&&Z!=="$?"&&Z!=="$~"&&Z!=="$!"||J++;Z=Y}while(Z)}function kQ(J){var w=J.firstChild;w&&w.nodeType===10&&(w=w.nextSibling);for(;w;){var Z=w;switch(w=w.nextSibling,Z.nodeName){case"HTML":case"HEAD":case"BODY":kQ(Z),BQ(Z);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(Z.rel.toLowerCase()==="stylesheet")continue}J.removeChild(Z)}}function Jz(J,w,Z,Y){for(;J.nodeType===1;){var H=Z;if(J.nodeName.toLowerCase()!==w.toLowerCase()){if(!Y&&(J.nodeName!=="INPUT"||J.type!=="hidden"))break}else if(!Y)if(w==="input"&&J.type==="hidden"){var X=H.name==null?null:""+H.name;if(H.type==="hidden"&&J.getAttribute("name")===X)return J}else return J;else if(!J[oJ])switch(w){case"meta":if(!J.hasAttribute("itemprop"))break;return J;case"link":if(X=J.getAttribute("rel"),X==="stylesheet"&&J.hasAttribute("data-precedence"))break;else if(X!==H.rel||J.getAttribute("href")!==(H.href==null||H.href===""?null:H.href)||J.getAttribute("crossorigin")!==(H.crossOrigin==null?null:H.crossOrigin)||J.getAttribute("title")!==(H.title==null?null:H.title))break;return J;case"style":if(J.hasAttribute("data-precedence"))break;return J;case"script":if(X=J.getAttribute("src"),(X!==(H.src==null?null:H.src)||J.getAttribute("type")!==(H.type==null?null:H.type)||J.getAttribute("crossorigin")!==(H.crossOrigin==null?null:H.crossOrigin))&&X&&J.hasAttribute("async")&&!J.hasAttribute("itemprop"))break;return J;default:return J}if(J=c8(J.nextSibling),J===null)break}return null}function wz(J,w,Z){if(w==="")return null;for(;J.nodeType!==3;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!Z)return null;if(J=c8(J.nextSibling),J===null)return null}return J}function o$(J,w){for(;J.nodeType!==8;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!w)return null;if(J=c8(J.nextSibling),J===null)return null}return J}function KQ(J){return J.data==="$?"||J.data==="$~"}function $Q(J){return J.data==="$!"||J.data==="$?"&&J.ownerDocument.readyState!=="loading"}function Zz(J,w){var Z=J.ownerDocument;if(J.data==="$~")J._reactRetry=w;else if(J.data!=="$?"||Z.readyState!=="loading")w();else{var Y=function(){w(),Z.removeEventListener("DOMContentLoaded",Y)};Z.addEventListener("DOMContentLoaded",Y),J._reactRetry=Y}}function c8(J){for(;J!=null;J=J.nextSibling){var w=J.nodeType;if(w===1||w===3)break;if(w===8){if(w=J.data,w==="$"||w==="$!"||w==="$?"||w==="$~"||w==="&"||w==="F!"||w==="F")break;if(w==="/$"||w==="/&")return null}}return J}function Wk(J){J=J.nextSibling;for(var w=0;J;){if(J.nodeType===8){var Z=J.data;if(Z==="/$"||Z==="/&"){if(w===0)return c8(J.nextSibling);w--}else Z!=="$"&&Z!=="$!"&&Z!=="$?"&&Z!=="$~"&&Z!=="&"||w++}J=J.nextSibling}return null}function Uk(J){J=J.previousSibling;for(var w=0;J;){if(J.nodeType===8){var Z=J.data;if(Z==="$"||Z==="$!"||Z==="$?"||Z==="$~"||Z==="&"){if(w===0)return J;w--}else Z!=="/$"&&Z!=="/&"||w++}J=J.previousSibling}return null}function n$(J,w,Z){switch(w=mZ(Z),J){case"html":if(J=w.documentElement,!J)throw Error(c(452));return J;case"head":if(J=w.head,!J)throw Error(c(453));return J;case"body":if(J=w.body,!J)throw Error(c(454));return J;default:throw Error(c(451))}}function TJ(J){for(var w=J.attributes;w.length;)J.removeAttributeNode(w[0]);BQ(J)}function uZ(J){return typeof J.getRootNode==="function"?J.getRootNode():J.nodeType===9?J:J.ownerDocument}function Yz(){var J=l6.f(),w=UY();return J||w}function Hz(J){var w=R5(J);w!==null&&w.tag===5&&w.type==="form"?dK(w):l6.r(J)}function a$(J,w,Z){var Y=F5;if(Y&&typeof w==="string"&&w){var H=p8(w);H='link[rel="'+J+'"][href="'+H+'"]',typeof Z==="string"&&(H+='[crossorigin="'+Z+'"]'),Gk.has(H)||(Gk.add(H),J={rel:J,crossOrigin:Z,href:w},Y.querySelector(H)===null&&(w=Y.createElement("link"),e9(w,"link",J),c9(w),Y.head.appendChild(w)))}}function Xz(J){l6.D(J),a$("dns-prefetch",J,null)}function Qz(J,w){l6.C(J,w),a$("preconnect",J,w)}function Wz(J,w,Z){l6.L(J,w,Z);var Y=F5;if(Y&&J&&w){var H='link[rel="preload"][as="'+p8(w)+'"]';w==="image"?Z&&Z.imageSrcSet?(H+='[imagesrcset="'+p8(Z.imageSrcSet)+'"]',typeof Z.imageSizes==="string"&&(H+='[imagesizes="'+p8(Z.imageSizes)+'"]')):H+='[href="'+p8(J)+'"]':H+='[href="'+p8(J)+'"]';var X=H;switch(w){case"style":X=k5(J);break;case"script":X=N5(J)}i8.has(X)||(J=L9({rel:"preload",href:w==="image"&&Z&&Z.imageSrcSet?void 0:J,as:w},Z),i8.set(X,J),Y.querySelector(H)!==null||w==="style"&&Y.querySelector(Jw(X))||w==="script"&&Y.querySelector(ww(X))||(w=Y.createElement("link"),e9(w,"link",J),c9(w),Y.head.appendChild(w)))}}function Uz(J,w){l6.m(J,w);var Z=F5;if(Z&&J){var Y=w&&typeof w.as==="string"?w.as:"script",H='link[rel="modulepreload"][as="'+p8(Y)+'"][href="'+p8(J)+'"]',X=H;switch(Y){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":X=N5(J)}if(!i8.has(X)&&(J=L9({rel:"modulepreload",href:J},w),i8.set(X,J),Z.querySelector(H)===null)){switch(Y){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(Z.querySelector(ww(X)))return}Y=Z.createElement("link"),e9(Y,"link",J),c9(Y),Z.head.appendChild(Y)}}}function Gz(J,w,Z){l6.S(J,w,Z);var Y=F5;if(Y&&J){var H=n1(Y).hoistableStyles,X=k5(J);w=w||"default";var Q=H.get(X);if(!Q){var W={loading:0,preload:null};if(Q=Y.querySelector(Jw(X)))W.loading=5;else{J=L9({rel:"stylesheet",href:J,"data-precedence":w},Z),(Z=i8.get(X))&&WW(J,Z);var U=Q=Y.createElement("link");c9(U),e9(U,"link",J),U._p=new Promise(function(G,q){U.onload=G,U.onerror=q}),U.addEventListener("load",function(){W.loading|=1}),U.addEventListener("error",function(){W.loading|=2}),W.loading|=4,MZ(Q,w,Y)}Q={type:"stylesheet",instance:Q,count:1,state:W},H.set(X,Q)}}}function qz(J,w){l6.X(J,w);var Z=F5;if(Z&&J){var Y=n1(Z).hoistableScripts,H=N5(J),X=Y.get(H);X||(X=Z.querySelector(ww(H)),X||(J=L9({src:J,async:!0},w),(w=i8.get(H))&&UW(J,w),X=Z.createElement("script"),c9(X),e9(X,"link",J),Z.head.appendChild(X)),X={type:"script",instance:X,count:1,state:null},Y.set(H,X))}}function kz(J,w){l6.M(J,w);var Z=F5;if(Z&&J){var Y=n1(Z).hoistableScripts,H=N5(J),X=Y.get(H);X||(X=Z.querySelector(ww(H)),X||(J=L9({src:J,async:!0,type:"module"},w),(w=i8.get(H))&&UW(J,w),X=Z.createElement("script"),c9(X),e9(X,"link",J),Z.head.appendChild(X)),X={type:"script",instance:X,count:1,state:null},Y.set(H,X))}}function qk(J,w,Z,Y){var H=(H=k7.current)?uZ(H):null;if(!H)throw Error(c(446));switch(J){case"meta":case"title":return null;case"style":return typeof Z.precedence==="string"&&typeof Z.href==="string"?(w=k5(Z.href),Z=n1(H).hoistableStyles,Y=Z.get(w),Y||(Y={type:"style",instance:null,count:0,state:null},Z.set(w,Y)),Y):{type:"void",instance:null,count:0,state:null};case"link":if(Z.rel==="stylesheet"&&typeof Z.href==="string"&&typeof Z.precedence==="string"){J=k5(Z.href);var X=n1(H).hoistableStyles,Q=X.get(J);if(Q||(H=H.ownerDocument||H,Q={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},X.set(J,Q),(X=H.querySelector(Jw(J)))&&!X._p&&(Q.instance=X,Q.state.loading=5),i8.has(J)||(Z={rel:"preload",as:"style",href:Z.href,crossOrigin:Z.crossOrigin,integrity:Z.integrity,media:Z.media,hrefLang:Z.hrefLang,referrerPolicy:Z.referrerPolicy},i8.set(J,Z),X||Kz(H,J,Z,Q.state))),w&&Y===null)throw Error(c(528,""));return Q}if(w&&Y!==null)throw Error(c(529,""));return null;case"script":return w=Z.async,Z=Z.src,typeof Z==="string"&&w&&typeof w!=="function"&&typeof w!=="symbol"?(w=N5(Z),Z=n1(H).hoistableScripts,Y=Z.get(w),Y||(Y={type:"script",instance:null,count:0,state:null},Z.set(w,Y)),Y):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,J))}}function k5(J){return'href="'+p8(J)+'"'}function Jw(J){return'link[rel="stylesheet"]['+J+"]"}function r$(J){return L9({},J,{"data-precedence":J.precedence,precedence:null})}function Kz(J,w,Z,Y){J.querySelector('link[rel="preload"][as="style"]['+w+"]")?Y.loading=1:(w=J.createElement("link"),Y.preload=w,w.addEventListener("load",function(){return Y.loading|=1}),w.addEventListener("error",function(){return Y.loading|=2}),e9(w,"link",Z),c9(w),J.head.appendChild(w))}function N5(J){return'[src="'+p8(J)+'"]'}function ww(J){return"script[async]"+J}function kk(J,w,Z){if(w.count++,w.instance===null)switch(w.type){case"style":var Y=J.querySelector('style[data-href~="'+p8(Z.href)+'"]');if(Y)return w.instance=Y,c9(Y),Y;var H=L9({},Z,{"data-href":Z.href,"data-precedence":Z.precedence,href:null,precedence:null});return Y=(J.ownerDocument||J).createElement("style"),c9(Y),e9(Y,"style",H),MZ(Y,Z.precedence,J),w.instance=Y;case"stylesheet":H=k5(Z.href);var X=J.querySelector(Jw(H));if(X)return w.state.loading|=4,w.instance=X,c9(X),X;Y=r$(Z),(H=i8.get(H))&&WW(Y,H),X=(J.ownerDocument||J).createElement("link"),c9(X);var Q=X;return Q._p=new Promise(function(W,U){Q.onload=W,Q.onerror=U}),e9(X,"link",Y),w.state.loading|=4,MZ(X,Z.precedence,J),w.instance=X;case"script":if(X=N5(Z.src),H=J.querySelector(ww(X)))return w.instance=H,c9(H),H;if(Y=Z,H=i8.get(X))Y=L9({},Z),UW(Y,H);return J=J.ownerDocument||J,H=J.createElement("script"),c9(H),e9(H,"link",Y),J.head.appendChild(H),w.instance=H;case"void":return null;default:throw Error(c(443,w.type))}else w.type==="stylesheet"&&(w.state.loading&4)===0&&(Y=w.instance,w.state.loading|=4,MZ(Y,Z.precedence,J));return w.instance}function MZ(J,w,Z){for(var Y=Z.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),H=Y.length?Y[Y.length-1]:null,X=H,Q=0;Q<Y.length;Q++){var W=Y[Q];if(W.dataset.precedence===w)X=W;else if(X!==H)break}X?X.parentNode.insertBefore(J,X.nextSibling):(w=Z.nodeType===9?Z.head:Z,w.insertBefore(J,w.firstChild))}function WW(J,w){J.crossOrigin==null&&(J.crossOrigin=w.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=w.referrerPolicy),J.title==null&&(J.title=w.title)}function UW(J,w){J.crossOrigin==null&&(J.crossOrigin=w.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=w.referrerPolicy),J.integrity==null&&(J.integrity=w.integrity)}function Kk(J,w,Z){if(OZ===null){var Y=new Map,H=OZ=new Map;H.set(Z,Y)}else H=OZ,Y=H.get(Z),Y||(Y=new Map,H.set(Z,Y));if(Y.has(J))return Y;Y.set(J,null),Z=Z.getElementsByTagName(J);for(H=0;H<Z.length;H++){var X=Z[H];if(!(X[oJ]||X[a9]||J==="link"&&X.getAttribute("rel")==="stylesheet")&&X.namespaceURI!=="http://www.w3.org/2000/svg"){var Q=X.getAttribute(w)||"";Q=J+Q;var W=Y.get(Q);W?W.push(X):Y.set(Q,[X])}}return Y}function $k(J,w,Z){J=J.ownerDocument||J,J.head.insertBefore(Z,w==="title"?J.querySelector("head > title"):null)}function $z(J,w,Z){if(Z===1||w.itemProp!=null)return!1;switch(J){case"meta":case"title":return!0;case"style":if(typeof w.precedence!=="string"||typeof w.href!=="string"||w.href==="")break;return!0;case"link":if(typeof w.rel!=="string"||typeof w.href!=="string"||w.href===""||w.onLoad||w.onError)break;switch(w.rel){case"stylesheet":return J=w.disabled,typeof w.precedence==="string"&&J==null;default:return!0}case"script":if(w.async&&typeof w.async!=="function"&&typeof w.async!=="symbol"&&!w.onLoad&&!w.onError&&w.src&&typeof w.src==="string")return!0}return!1}function t$(J){return J.type==="stylesheet"&&(J.state.loading&3)===0?!1:!0}function Rz(J,w,Z,Y){if(Z.type==="stylesheet"&&(typeof Y.media!=="string"||matchMedia(Y.media).matches!==!1)&&(Z.state.loading&4)===0){if(Z.instance===null){var H=k5(Y.href),X=w.querySelector(Jw(H));if(X){w=X._p,w!==null&&typeof w==="object"&&typeof w.then==="function"&&(J.count++,J=cZ.bind(J),w.then(J,J)),Z.state.loading|=4,Z.instance=X,c9(X);return}X=w.ownerDocument||w,Y=r$(Y),(H=i8.get(H))&&WW(Y,H),X=X.createElement("link"),c9(X);var Q=X;Q._p=new Promise(function(W,U){Q.onload=W,Q.onerror=U}),e9(X,"link",Y),Z.instance=X}J.stylesheets===null&&(J.stylesheets=new Map),J.stylesheets.set(Z,w),(w=Z.state.preload)&&(Z.state.loading&3)===0&&(J.count++,Z=cZ.bind(J),w.addEventListener("load",Z),w.addEventListener("error",Z))}}function Dz(J,w){return J.stylesheets&&J.count===0&&FZ(J,J.stylesheets),0<J.count||0<J.imgCount?function(Z){var Y=setTimeout(function(){if(J.stylesheets&&FZ(J,J.stylesheets),J.unsuspend){var X=J.unsuspend;J.unsuspend=null,X()}},60000+w);0<J.imgBytes&&NX===0&&(NX=62500*nN());var H=setTimeout(function(){if(J.waitingForImages=!1,J.count===0&&(J.stylesheets&&FZ(J,J.stylesheets),J.unsuspend)){var X=J.unsuspend;J.unsuspend=null,X()}},(J.imgBytes>NX?50:800)+w);return J.unsuspend=Z,function(){J.unsuspend=null,clearTimeout(Y),clearTimeout(H)}}:null}function cZ(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)FZ(this,this.stylesheets);else if(this.unsuspend){var J=this.unsuspend;this.unsuspend=null,J()}}}function FZ(J,w){J.stylesheets=null,J.unsuspend!==null&&(J.count++,iZ=new Map,w.forEach(Mz,J),iZ=null,cZ.call(J))}function Mz(J,w){if(!(w.state.loading&4)){var Z=iZ.get(J);if(Z)var Y=Z.get(null);else{Z=new Map,iZ.set(J,Z);for(var H=J.querySelectorAll("link[data-precedence],style[data-precedence]"),X=0;X<H.length;X++){var Q=H[X];if(Q.nodeName==="LINK"||Q.getAttribute("media")!=="not all")Z.set(Q.dataset.precedence,Q),Y=Q}Y&&Z.set(null,Y)}H=w.instance,Q=H.getAttribute("data-precedence"),X=Z.get(Q)||Y,X===Y&&Z.set(null,H),Z.set(Q,H),this.count++,Y=cZ.bind(this),H.addEventListener("load",Y),H.addEventListener("error",Y),X?X.parentNode.insertBefore(H,X.nextSibling):(J=J.nodeType===9?J.head:J,J.insertBefore(H,J.firstChild)),w.state.loading|=4}}function Oz(J,w,Z,Y,H,X,Q,W,U){this.tag=1,this.containerInfo=J,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=iH(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iH(0),this.hiddenUpdates=iH(null),this.identifierPrefix=Y,this.onUncaughtError=H,this.onCaughtError=X,this.onRecoverableError=Q,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function e$(J,w,Z,Y,H,X,Q,W,U,G,q,K){return J=new Oz(J,w,Z,Q,U,G,q,K,W),w=1,X===!0&&(w|=24),X=V8(3,null,null,w),J.current=X,X.stateNode=J,w=bQ(),w.refCount++,J.pooledCache=w,w.refCount++,X.memoizedState={element:Y,isDehydrated:Z,cache:w},vQ(X),J}function JR(J){if(!J)return c1;return J=c1,J}function wR(J,w,Z,Y,H,X){H=JR(H),Y.context===null?Y.context=H:Y.pendingContext=H,Y=$7(w),Y.payload={element:Z},X=X===void 0?null:X,X!==null&&(Y.callback=X),Z=R7(J,Y,w),Z!==null&&(D8(Z,J,w),LJ(Z,J,w))}function Rk(J,w){if(J=J.memoizedState,J!==null&&J.dehydrated!==null){var Z=J.retryLane;J.retryLane=Z!==0&&Z<w?Z:w}}function GW(J,w){Rk(J,w),(J=J.alternate)&&Rk(J,w)}function ZR(J){if(J.tag===13||J.tag===31){var w=Q1(J,67108864);w!==null&&D8(w,J,67108864),GW(J,67108864)}}function Dk(J){if(J.tag===13||J.tag===31){var w=C8();w=zQ(w);var Z=Q1(J,w);Z!==null&&D8(Z,J,w),GW(J,w)}}function Fz(J,w,Z,Y){var H=T0.T;T0.T=null;var X=w9.p;try{w9.p=2,qW(J,w,Z,Y)}finally{w9.p=X,T0.T=H}}function Nz(J,w,Z,Y){var H=T0.T;T0.T=null;var X=w9.p;try{w9.p=8,qW(J,w,Z,Y)}finally{w9.p=X,T0.T=H}}function qW(J,w,Z,Y){if(sZ){var H=DQ(Y);if(H===null)OX(J,w,Y,oZ,Z),Mk(J,Y);else if(Lz(H,J,w,Z,Y))Y.stopPropagation();else if(Mk(J,Y),w&4&&-1<zz.indexOf(J)){for(;H!==null;){var X=R5(H);if(X!==null)switch(X.tag){case 3:if(X=X.stateNode,X.current.memoizedState.isDehydrated){var Q=m7(X.pendingLanes);if(Q!==0){var W=X;W.pendingLanes|=2;for(W.entangledLanes|=2;Q;){var U=1<<31-I8(Q);W.entanglements[1]|=U,Q&=~U}D6(X),(J9&6)===0&&(vZ=A8()+500,eJ(0,!1))}}break;case 31:case 13:W=Q1(X,2),W!==null&&D8(W,X,2),UY(),GW(X,2)}if(X=DQ(Y),X===null&&OX(J,w,Y,oZ,Z),X===H)break;H=X}H!==null&&Y.stopPropagation()}else OX(J,w,Y,null,Z)}}function DQ(J){return J=_Q(J),kW(J)}function kW(J){if(oZ=null,J=g1(J),J!==null){var w=uJ(J);if(w===null)J=null;else{var Z=w.tag;if(Z===13){if(J=Bk(w),J!==null)return J;J=null}else if(Z===31){if(J=Vk(w),J!==null)return J;J=null}else if(Z===3){if(w.stateNode.current.memoizedState.isDehydrated)return w.tag===3?w.stateNode.containerInfo:null;J=null}else w!==J&&(J=null)}}return oZ=J,null}function YR(J){switch(J){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(WF()){case Ik:return 2;case Ck:return 8;case VZ:case UF:return 32;case Tk:return 268435456;default:return 32}default:return 32}}function Mk(J,w){switch(J){case"focusin":case"focusout":O7=null;break;case"dragenter":case"dragleave":F7=null;break;case"mouseover":case"mouseout":N7=null;break;case"pointerover":case"pointerout":dJ.delete(w.pointerId);break;case"gotpointercapture":case"lostpointercapture":mJ.delete(w.pointerId)}}function WJ(J,w,Z,Y,H,X){if(J===null||J.nativeEvent!==X)return J={blockedOn:w,domEventName:Z,eventSystemFlags:Y,nativeEvent:X,targetContainers:[H]},w!==null&&(w=R5(w),w!==null&&ZR(w)),J;return J.eventSystemFlags|=Y,w=J.targetContainers,H!==null&&w.indexOf(H)===-1&&w.push(H),J}function Lz(J,w,Z,Y,H){switch(w){case"focusin":return O7=WJ(O7,J,w,Z,Y,H),!0;case"dragenter":return F7=WJ(F7,J,w,Z,Y,H),!0;case"mouseover":return N7=WJ(N7,J,w,Z,Y,H),!0;case"pointerover":var X=H.pointerId;return dJ.set(X,WJ(dJ.get(X)||null,J,w,Z,Y,H)),!0;case"gotpointercapture":return X=H.pointerId,mJ.set(X,WJ(mJ.get(X)||null,J,w,Z,Y,H)),!0}return!1}function HR(J){var w=g1(J.target);if(w!==null){var Z=uJ(w);if(Z!==null){if(w=Z.tag,w===13){if(w=Bk(Z),w!==null){J.blockedOn=w,wq(J.priority,function(){Dk(Z)});return}}else if(w===31){if(w=Vk(Z),w!==null){J.blockedOn=w,wq(J.priority,function(){Dk(Z)});return}}else if(w===3&&Z.stateNode.current.memoizedState.isDehydrated){J.blockedOn=Z.tag===3?Z.stateNode.containerInfo:null;return}}}J.blockedOn=null}function NZ(J){if(J.blockedOn!==null)return!1;for(var w=J.targetContainers;0<w.length;){var Z=DQ(J.nativeEvent);if(Z===null){Z=J.nativeEvent;var Y=new Z.constructor(Z.type,Z);jX=Y,Z.target.dispatchEvent(Y),jX=null}else return w=R5(Z),w!==null&&ZR(w),J.blockedOn=Z,!1;w.shift()}return!0}function Ok(J,w,Z){NZ(J)&&Z.delete(w)}function Bz(){MQ=!1,O7!==null&&NZ(O7)&&(O7=null),F7!==null&&NZ(F7)&&(F7=null),N7!==null&&NZ(N7)&&(N7=null),dJ.forEach(Ok),mJ.forEach(Ok)}function ZZ(J,w){J.blockedOn===w&&(J.blockedOn=null,MQ||(MQ=!0,S1(P1,Bz)))}function Fk(J){YZ!==J&&(YZ=J,S1(P1,function(){YZ===J&&(YZ=null);for(var w=0;w<J.length;w+=3){var Z=J[w],Y=J[w+1],H=J[w+2];if(typeof Y!=="function")if(kW(Y||Z)===null)continue;else break;var X=R5(Z);X!==null&&(J.splice(w,3),w-=3,oX(X,{pending:!0,data:H,method:Z.method,action:Y},Y,H))}}))}function K5(J){function w(U){return ZZ(U,J)}O7!==null&&ZZ(O7,J),F7!==null&&ZZ(F7,J),N7!==null&&ZZ(N7,J),dJ.forEach(w),mJ.forEach(w);for(var Z=0;Z<X7.length;Z++){var Y=X7[Z];Y.blockedOn===J&&(Y.blockedOn=null)}for(;0<X7.length&&(Z=X7[0],Z.blockedOn===null);)HR(Z),Z.blockedOn===null&&X7.shift();if(Z=(J.ownerDocument||J).$$reactFormReplay,Z!=null)for(Y=0;Y<Z.length;Y+=3){var H=Z[Y],X=Z[Y+1],Q=H[M8]||null;if(typeof X==="function")Q||Fk(Z);else if(Q){var W=null;if(X&&X.hasAttribute("formAction")){if(H=X,Q=X[M8]||null)W=Q.formAction;else if(kW(H)!==null)continue}else W=Q.action;typeof W==="function"?Z[Y+1]=W:(Z.splice(Y,3),Y-=3),Fk(Z)}}}function XR(){function J(X){X.canIntercept&&X.info==="react-transition"&&X.intercept({handler:function(){return new Promise(function(Q){return H=Q})},focusReset:"manual",scroll:"manual"})}function w(){H!==null&&(H(),H=null),Y||setTimeout(Z,20)}function Z(){if(!Y&&!navigation.transition){var X=navigation.currentEntry;X&&X.url!=null&&navigation.navigate(X.url,{state:X.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var Y=!1,H=null;return navigation.addEventListener("navigate",J),navigation.addEventListener("navigatesuccess",w),navigation.addEventListener("navigateerror",w),setTimeout(Z,100),function(){Y=!0,navigation.removeEventListener("navigate",J),navigation.removeEventListener("navigatesuccess",w),navigation.removeEventListener("navigateerror",w),H!==null&&(H(),H=null)}}}function KW(J){this._internalRoot=J}function kY(J){this._internalRoot=J}var nZ,zk,L9,wF,uw,UJ,v1,Ak,zX,Ek,T6,OQ,LX,BX,FQ,J7,VX,ZF,tG,YF,GJ,T0,w9,s7,AX,y1=-1,$6,PJ,k7,zZ,dH,eG,mH=!1,IX,NQ,cH,XF,QF,A8,WF,Ik,Ck,VZ,UF,Tk,GF,qF,cJ=null,E8=null,I8,kF,KF,cw=256,iw=262144,sw=4194304,_7,a9,M8,$5,CX,MF,OF,Zq,oJ,xk,hk,FF,Yq,Hq,LF,BF,VF,_F,jX=null,l1=null,r1=null,sH=!1,x6,fX=!1,u7,W7=null,AQ=null,QZ=null,H1,rZ,nJ,AF,oH,nH,YJ,tZ,Uq,EF,IF,CF,aH,TF,PF,SF,jF,fF,Gq,bF,xF,hF,yF,gF,lF,qq,pF,dF,mF,uF,cF,iF,sF,oF,nF,IQ,OJ=null,aF,ck,kq,Kq=!1,p1=!1,eF,FJ=null,jJ=null,nk=!1,kJ,KJ,UZ,T8,QN,d1=null,bX=null,NJ=null,xX=!1,m1,rH,ek,JK,wK,ZK,WN,UN,GN,YK,HK,hX,AZ,v8,u1=0,TQ=0,c1,Nq,i1,s1=0,IZ=null,bJ=0,g8,l8=0,z7=null,q6=1,k6="",r9=null,z9=null,n0=!1,K7=null,m8=!1,vX,yX,W1=null,S6=null,kN,KN,$N,h9,zJ=null,pX=0,X5=0,t1=null,Vq,n7,M5,hQ,ZY,TZ,a7=null,e1=null,hJ=0,J1,RK,w7=!1,mX=!1,Q5,PZ,P8,u8=null,j9,h6=0,v0=null,G9=null,b9=null,jZ=!1,J5=!1,w1=!1,fZ=0,vJ=0,w5=null,MN=0,yJ,oK,rQ,nK,nX,tQ,v9=!1,HX,C6=!1,x9=!1,KX=!1,iq,u9=null,_9=null,$8=!1,J6=null,RJ=8192,SN,jN,J9=0,K9=null,u0=null,s0=0,Z9=0,L8=null,U7=!1,O5=!1,ZW=!1,g6=0,P9=0,V7=0,r7=0,YW=0,_8=0,U5=0,IJ=null,R8=null,JQ=!1,WY=0,_$=0,vZ=1/0,yZ=null,D7=null,g9=0,M7=null,G5=null,b6=0,wQ=0,ZQ=null,A$=null,CJ=0,YQ=null,lZ=null,x1=null,HQ=!1,pZ=!1,DX=!1,q7=0,MJ,XQ,QQ,DJ,gJ,uN,wZ,iN,sN,UQ=null,GQ=null,FX=null,s$,rN,Hk,tN,RQ=null,i8,Gk,l6,F5,OZ=null,NX=0,iZ=null,pJ,sZ=!0,oZ=null,MQ=!1,O7=null,F7=null,N7=null,dJ,mJ,X7,zz,YZ=null,Nk,Vz,h1,QR=function(J,w){if(!Lk(J))throw Error(c(299));var Z=!1,Y="",H=aK,X=rK,Q=tK;return w!==null&&w!==void 0&&(w.unstable_strictMode===!0&&(Z=!0),w.identifierPrefix!==void 0&&(Y=w.identifierPrefix),w.onUncaughtError!==void 0&&(H=w.onUncaughtError),w.onCaughtError!==void 0&&(X=w.onCaughtError),w.onRecoverableError!==void 0&&(Q=w.onRecoverableError)),w=e$(J,1,!1,null,null,Z,Y,null,H,X,Q,XR),J[$5]=w.current,QW(J),new KW(w)},WR=function(J,w,Z){if(!Lk(J))throw Error(c(299));var Y=!1,H="",X=aK,Q=rK,W=tK,U=null;return Z!==null&&Z!==void 0&&(Z.unstable_strictMode===!0&&(Y=!0),Z.identifierPrefix!==void 0&&(H=Z.identifierPrefix),Z.onUncaughtError!==void 0&&(X=Z.onUncaughtError),Z.onCaughtError!==void 0&&(Q=Z.onCaughtError),Z.onRecoverableError!==void 0&&(W=Z.onRecoverableError),Z.formState!==void 0&&(U=Z.formState)),w=e$(J,1,!0,w,Z!=null?Z:null,Y,H,U,X,Q,W,XR),w.context=JR(null),Z=w.current,Y=C8(),Y=zQ(Y),H=$7(Y),H.callback=null,R7(Z,H,Y),Z=Y,w.current.lanes=Z,sJ(w,Z),D6(w),J[$5]=w.current,QW(J),new kY(w)},UR="19.2.0";var GR=MH(()=>{PG();nZ=r6(l7(),1),zk=r6(aG(),1);L9=Object.assign,wF=Symbol.for("react.element"),uw=Symbol.for("react.transitional.element"),UJ=Symbol.for("react.portal"),v1=Symbol.for("react.fragment"),Ak=Symbol.for("react.strict_mode"),zX=Symbol.for("react.profiler"),Ek=Symbol.for("react.consumer"),T6=Symbol.for("react.context"),OQ=Symbol.for("react.forward_ref"),LX=Symbol.for("react.suspense"),BX=Symbol.for("react.suspense_list"),FQ=Symbol.for("react.memo"),J7=Symbol.for("react.lazy");Symbol.for("react.scope");VX=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");ZF=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");tG=Symbol.iterator;YF=Symbol.for("react.client.reference");GJ=Array.isArray,T0=nZ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w9=zk.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,s7={pending:!1,data:null,method:null,action:null},AX=[];$6=R6(null),PJ=R6(null),k7=R6(null),zZ=R6(null);IX=Object.prototype.hasOwnProperty,NQ=S1,cH=vH,XF=lH,QF=gH,A8=G6,WF=yH,Ik=bH,Ck=hH,VZ=P1,UF=xH,Tk=fH,GF=void 0,qF=void 0;I8=Math.clz32?Math.clz32:$F,kF=Math.log,KF=Math.LN2;_7=Math.random().toString(36).slice(2),a9="__reactFiber$"+_7,M8="__reactProps$"+_7,$5="__reactContainer$"+_7,CX="__reactEvents$"+_7,MF="__reactListeners$"+_7,OF="__reactHandles$"+_7,Zq="__reactResources$"+_7,oJ="__reactMarker$"+_7;xk=new Set,hk={};FF=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yq={},Hq={};LF=/[\n"\\]/g;BF=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));VF=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_F=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;x6=!(typeof window==="undefined"||typeof window.document==="undefined"||typeof window.document.createElement==="undefined");if(x6)try{u7={},Object.defineProperty(u7,"passive",{get:function(){fX=!0}}),window.addEventListener("test",u7,u7),window.removeEventListener("test",u7,u7)}catch(J){fX=!1}H1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(J){return J.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rZ=O8(H1),nJ=L9({},H1,{view:0,detail:0}),AF=O8(nJ),tZ=L9({},nJ,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:EQ,button:0,buttons:0,relatedTarget:function(J){return J.relatedTarget===void 0?J.fromElement===J.srcElement?J.toElement:J.fromElement:J.relatedTarget},movementX:function(J){if("movementX"in J)return J.movementX;return J!==YJ&&(YJ&&J.type==="mousemove"?(oH=J.screenX-YJ.screenX,nH=J.screenY-YJ.screenY):nH=oH=0,YJ=J),oH},movementY:function(J){return"movementY"in J?J.movementY:nH}}),Uq=O8(tZ),EF=L9({},tZ,{dataTransfer:0}),IF=O8(EF),CF=L9({},nJ,{relatedTarget:0}),aH=O8(CF),TF=L9({},H1,{animationName:0,elapsedTime:0,pseudoElement:0}),PF=O8(TF),SF=L9({},H1,{clipboardData:function(J){return"clipboardData"in J?J.clipboardData:window.clipboardData}}),jF=O8(SF),fF=L9({},H1,{data:0}),Gq=O8(fF),bF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};yF=L9({},nJ,{key:function(J){if(J.key){var w=bF[J.key]||J.key;if(w!=="Unidentified")return w}return J.type==="keypress"?(J=WZ(J),J===13?"Enter":String.fromCharCode(J)):J.type==="keydown"||J.type==="keyup"?xF[J.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:EQ,charCode:function(J){return J.type==="keypress"?WZ(J):0},keyCode:function(J){return J.type==="keydown"||J.type==="keyup"?J.keyCode:0},which:function(J){return J.type==="keypress"?WZ(J):J.type==="keydown"||J.type==="keyup"?J.keyCode:0}}),gF=O8(yF),lF=L9({},tZ,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qq=O8(lF),pF=L9({},nJ,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:EQ}),dF=O8(pF),mF=L9({},H1,{propertyName:0,elapsedTime:0,pseudoElement:0}),uF=O8(mF),cF=L9({},tZ,{deltaX:function(J){return"deltaX"in J?J.deltaX:("wheelDeltaX"in J)?-J.wheelDeltaX:0},deltaY:function(J){return"deltaY"in J?J.deltaY:("wheelDeltaY"in J)?-J.wheelDeltaY:("wheelDelta"in J)?-J.wheelDelta:0},deltaZ:0,deltaMode:0}),iF=O8(cF),sF=L9({},H1,{newState:0,oldState:0}),oF=O8(sF),nF=[9,13,27,32],IQ=x6&&"CompositionEvent"in window;x6&&"documentMode"in document&&(OJ=document.documentMode);aF=x6&&"TextEvent"in window&&!OJ,ck=x6&&(!IQ||OJ&&8<OJ&&11>=OJ),kq=String.fromCharCode(32);eF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(x6){if(x6){if(KJ="oninput"in document,!KJ)UZ=document.createElement("div"),UZ.setAttribute("oninput","return;"),KJ=typeof UZ.oninput==="function";kJ=KJ}else kJ=!1;nk=kJ&&(!document.documentMode||9<document.documentMode)}T8=typeof Object.is==="function"?Object.is:XN;QN=x6&&"documentMode"in document&&11>=document.documentMode;m1={animationend:p7("Animation","AnimationEnd"),animationiteration:p7("Animation","AnimationIteration"),animationstart:p7("Animation","AnimationStart"),transitionrun:p7("Transition","TransitionRun"),transitionstart:p7("Transition","TransitionStart"),transitioncancel:p7("Transition","TransitionCancel"),transitionend:p7("Transition","TransitionEnd")},rH={},ek={};x6&&(ek=document.createElement("div").style,("AnimationEvent"in window)||(delete m1.animationend.animation,delete m1.animationiteration.animation,delete m1.animationstart.animation),("TransitionEvent"in window)||delete m1.transitionend.transition);JK=X1("animationend"),wK=X1("animationiteration"),ZK=X1("animationstart"),WN=X1("transitionrun"),UN=X1("transitionstart"),GN=X1("transitioncancel"),YK=X1("transitionend"),HK=new Map,hX="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hX.push("scrollEnd");AZ=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(w))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},v8=[];c1={};Nq=new WeakMap;i1=[],g8=[];vX=Error(c(519));yX=R6(null);kN=typeof AbortController!=="undefined"?AbortController:function(){var J=[],w=this.signal={aborted:!1,addEventListener:function(Z,Y){J.push(Y)}};this.abort=function(){w.aborted=!0,J.forEach(function(Z){return Z()})}},KN=S1,$N=P1,h9={$$typeof:T6,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};Vq=T0.S;T0.S=function(J,w){_$=A8(),typeof w==="object"&&w!==null&&typeof w.then==="function"&&RN(J,w),Vq!==null&&Vq(J,w)};n7=R6(null);M5=Error(c(460)),hQ=Error(c(474)),ZY=Error(c(542)),TZ={then:function(){}};J1=$K(!0),RK=$K(!1);Q5=R6(null),PZ=R6(0);P8=R6(null);j9=R6(0);yJ={readContext:t9,use:HY,useCallback:T9,useContext:T9,useEffect:T9,useImperativeHandle:T9,useLayoutEffect:T9,useInsertionEffect:T9,useMemo:T9,useReducer:T9,useRef:T9,useState:T9,useDebugValue:T9,useDeferredValue:T9,useTransition:T9,useSyncExternalStore:T9,useId:T9,useHostTransitionStatus:T9,useFormState:T9,useActionState:T9,useOptimistic:T9,useMemoCache:T9,useCacheRefresh:T9};yJ.useEffectEvent=T9;oK={readContext:t9,use:HY,useCallback:function(J,w){return W8().memoizedState=[J,w===void 0?null:w],J},useContext:t9,useEffect:fq,useImperativeHandle:function(J,w,Z){Z=Z!==null&&Z!==void 0?Z.concat([J]):null,KZ(4194308,4,xK.bind(null,w,J),Z)},useLayoutEffect:function(J,w){return KZ(4194308,4,J,w)},useInsertionEffect:function(J,w){KZ(4,2,J,w)},useMemo:function(J,w){var Z=W8();w=w===void 0?null:w;var Y=J();if(w1){Q7(!0);try{J()}finally{Q7(!1)}}return Z.memoizedState=[Y,w],Y},useReducer:function(J,w,Z){var Y=W8();if(Z!==void 0){var H=Z(w);if(w1){Q7(!0);try{Z(w)}finally{Q7(!1)}}}else H=w;return Y.memoizedState=Y.baseState=H,J={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J,lastRenderedState:H},Y.queue=J,J=J.dispatch=VN.bind(null,v0,J),[Y.memoizedState,J]},useRef:function(J){var w=W8();return J={current:J},w.memoizedState=J},useState:function(J){J=iX(J);var w=J.queue,Z=cK.bind(null,v0,w);return w.dispatch=Z,[J.memoizedState,Z]},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=W8();return oQ(Z,J,w)},useTransition:function(){var J=iX(!1);return J=lK.bind(null,v0,J.queue,!0,!1),W8().memoizedState=J,[!1,J]},useSyncExternalStore:function(J,w,Z){var Y=v0,H=W8();if(n0){if(Z===void 0)throw Error(c(407));Z=Z()}else{if(Z=w(),K9===null)throw Error(c(349));(s0&127)!==0||LK(Y,w,Z)}H.memoizedState=Z;var X={value:Z,getSnapshot:w};return H.queue=X,fq(VK.bind(null,Y,X,J),[J]),Y.flags|=2048,W5(9,{destroy:void 0},BK.bind(null,Y,X,Z,w),null),Z},useId:function(){var J=W8(),w=K9.identifierPrefix;if(n0){var Z=k6,Y=q6;Z=(Y&~(1<<32-I8(Y)-1)).toString(32)+Z,w="_"+w+"R_"+Z,Z=fZ++,0<Z&&(w+="H"+Z.toString(32)),w+="_"}else Z=MN++,w="_"+w+"r_"+Z.toString(32)+"_";return J.memoizedState=w},useHostTransitionStatus:nQ,useFormState:Pq,useActionState:Pq,useOptimistic:function(J){var w=W8();w.memoizedState=w.baseState=J;var Z={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return w.queue=Z,w=aQ.bind(null,v0,!0,Z),Z.dispatch=w,[J,w]},useMemoCache:uQ,useCacheRefresh:function(){return W8().memoizedState=BN.bind(null,v0)},useEffectEvent:function(J){var w=W8(),Z={impl:J};return w.memoizedState=Z,function(){if((J9&2)!==0)throw Error(c(440));return Z.impl.apply(void 0,arguments)}}},rQ={readContext:t9,use:HY,useCallback:vK,useContext:t9,useEffect:iQ,useImperativeHandle:hK,useInsertionEffect:fK,useLayoutEffect:bK,useMemo:yK,useReducer:kZ,useRef:SK,useState:function(){return kZ(v6)},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=f9();return gK(Z,G9.memoizedState,J,w)},useTransition:function(){var J=kZ(v6)[0],w=f9().memoizedState;return[typeof J==="boolean"?J:rJ(J),w]},useSyncExternalStore:zK,useId:mK,useHostTransitionStatus:nQ,useFormState:Sq,useActionState:Sq,useOptimistic:function(J,w){var Z=f9();return EK(Z,G9,J,w)},useMemoCache:uQ,useCacheRefresh:uK};rQ.useEffectEvent=jK;nK={readContext:t9,use:HY,useCallback:vK,useContext:t9,useEffect:iQ,useImperativeHandle:hK,useInsertionEffect:fK,useLayoutEffect:bK,useMemo:yK,useReducer:ZX,useRef:SK,useState:function(){return ZX(v6)},useDebugValue:sQ,useDeferredValue:function(J,w){var Z=f9();return G9===null?oQ(Z,J,w):gK(Z,G9.memoizedState,J,w)},useTransition:function(){var J=ZX(v6)[0],w=f9().memoizedState;return[typeof J==="boolean"?J:rJ(J),w]},useSyncExternalStore:zK,useId:mK,useHostTransitionStatus:nQ,useFormState:jq,useActionState:jq,useOptimistic:function(J,w){var Z=f9();if(G9!==null)return EK(Z,G9,J,w);return Z.baseState=J,[J,Z.queue.dispatch]},useMemoCache:uQ,useCacheRefresh:uK};nK.useEffectEvent=jK;nX={enqueueSetState:function(J,w,Z){J=J._reactInternals;var Y=C8(),H=$7(Y);H.payload=w,Z!==void 0&&Z!==null&&(H.callback=Z),w=R7(J,H,Y),w!==null&&(D8(w,J,Y),LJ(w,J,Y))},enqueueReplaceState:function(J,w,Z){J=J._reactInternals;var Y=C8(),H=$7(Y);H.tag=1,H.payload=w,Z!==void 0&&Z!==null&&(H.callback=Z),w=R7(J,H,Y),w!==null&&(D8(w,J,Y),LJ(w,J,Y))},enqueueForceUpdate:function(J,w){J=J._reactInternals;var Z=C8(),Y=$7(Z);Y.tag=2,w!==void 0&&w!==null&&(Y.callback=w),w=R7(J,Y,Z),w!==null&&(D8(w,J,Z),LJ(w,J,Z))}};tQ=Error(c(461));HX={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};iq=typeof WeakSet==="function"?WeakSet:Set;SN={getCacheForType:function(J){var w=t9(h9),Z=w.data.get(J);return Z===void 0&&(Z=J(),w.data.set(J,Z)),Z},cacheSignal:function(){return t9(h9).controller.signal}},jN=typeof WeakMap==="function"?WeakMap:Map;for(DJ=0;DJ<hX.length;DJ++)MJ=hX[DJ],XQ=MJ.toLowerCase(),QQ=MJ[0].toUpperCase()+MJ.slice(1),w6(XQ,"on"+QQ);w6(JK,"onAnimationEnd");w6(wK,"onAnimationIteration");w6(ZK,"onAnimationStart");w6("dblclick","onDoubleClick");w6("focusin","onFocus");w6("focusout","onBlur");w6(WN,"onTransitionRun");w6(UN,"onTransitionStart");w6(GN,"onTransitionCancel");w6(YK,"onTransitionEnd");Y5("onMouseEnter",["mouseout","mouseover"]);Y5("onMouseLeave",["mouseout","mouseover"]);Y5("onPointerEnter",["pointerout","pointerover"]);Y5("onPointerLeave",["pointerout","pointerover"]);Y1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Y1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Y1("onBeforeInput",["compositionend","keypress","textInput","paste"]);Y1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Y1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Y1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));gJ="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gJ));wZ="_reactListening"+Math.random().toString(36).slice(2);iN=/\r\n?/g,sN=/\u0000|\uFFFD/g;s$=typeof setTimeout==="function"?setTimeout:void 0,rN=typeof clearTimeout==="function"?clearTimeout:void 0,Hk=typeof Promise==="function"?Promise:void 0,tN=typeof queueMicrotask==="function"?queueMicrotask:typeof Hk!=="undefined"?function(J){return Hk.resolve(null).then(J).catch(eN)}:s$;i8=new Map,Gk=new Set;l6=w9.d;w9.d={f:Yz,r:Hz,D:Xz,C:Qz,L:Wz,m:Uz,X:qz,S:Gz,M:kz};F5=typeof document==="undefined"?null:document;pJ={$$typeof:T6,Provider:null,Consumer:null,_currentValue:s7,_currentValue2:s7,_threadCount:0};dJ=new Map,mJ=new Map,X7=[],zz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");kY.prototype.render=KW.prototype.render=function(J){var w=this._internalRoot;if(w===null)throw Error(c(409));var Z=w.current,Y=C8();wR(Z,Y,J,w,null,null)};kY.prototype.unmount=KW.prototype.unmount=function(){var J=this._internalRoot;if(J!==null){this._internalRoot=null;var w=J.containerInfo;wR(J.current,2,null,J,null,null),UY(),w[$5]=null}};kY.prototype.unstable_scheduleHydration=function(J){if(J){var w=bk();J={blockedOn:null,target:J,priority:w};for(var Z=0;Z<X7.length&&w!==0&&w<X7[Z].priority;Z++);X7.splice(Z,0,J),Z===0&&HR(J)}};Nk=nZ.version;if(Nk!=="19.2.0")throw Error(c(527,Nk,"19.2.0"));w9.findDOMNode=function(J){var w=J._reactInternals;if(w===void 0){if(typeof J.render==="function")throw Error(c(188));throw J=Object.keys(J).join(","),Error(c(268,J))}return J=JF(w),J=J!==null?_k(J):null,J=J===null?null:J.stateNode,J};Vz={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:T0,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=="undefined"){if(h1=__REACT_DEVTOOLS_GLOBAL_HOOK__,!h1.isDisabled&&h1.supportsFiber)try{cJ=h1.inject(Vz),E8=h1}catch(J){}}});var KR=DH((R_,kR)=>{GR();function qR(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qR)}catch(J){console.error(J)}}qR(),kR.exports=$W});var jM=r6(l7(),1),fM=r6(KR(),1);var $Y=r6(l7(),1);var $R=(J)=>J.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KY=(...J)=>J.filter((w,Z,Y)=>{return Boolean(w)&&w.trim()!==""&&Y.indexOf(w)===Z}).join(" ").trim();var Zw=r6(l7(),1);var RR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var DR=Zw.forwardRef(({color:J="currentColor",size:w=24,strokeWidth:Z=2,absoluteStrokeWidth:Y,className:H="",children:X,iconNode:Q,...W},U)=>{return Zw.createElement("svg",{ref:U,...RR,width:w,height:w,stroke:J,strokeWidth:Y?Number(Z)*24/Number(w):Z,className:KY("lucide",H),...W},[...Q.map(([G,q])=>Zw.createElement(G,q)),...Array.isArray(X)?X:[X]])});var s8=(J,w)=>{let Z=$Y.forwardRef(({className:Y,...H},X)=>$Y.createElement(DR,{ref:X,iconNode:w,className:KY(`lucide-${$R(J)}`,Y),...H}));return Z.displayName=`${J}`,Z};var Ez=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yw=s8("ArrowRight",Ez);var Iz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Hw=s8("ChevronUp",Iz);var Cz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],z5=s8("Info",Cz);var Tz=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],L5=s8("ShoppingBag",Tz);var Pz=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Xw=s8("Trash2",Pz);var Sz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],B5=s8("X",Sz);var o0=r6(l7(),1);var vR="180";var yR=0,vW=1,gR=2;var yW=1,lR=2,M6=3,g5=0,f8=1,O6=2,j7=0,Rw=1,gW=2,lW=3,pW=4,pR=5,l5=100,dR=101,mR=102,uR=103,cR=104,iR=200,sR=201,oR=202,nR=203,aR=204,rR=205,tR=206,eR=207,JD=208,wD=209,ZD=210,YD=211,HD=212,XD=213,QD=214,jY=0,fY=1,bY=2,Dw=3,xY=4,hY=5,vY=6,yY=7,WD=0,UD=1,GD=2,o6=0,qD=1,kD=2,KD=3,$D=4,RD=5,DD=6,MD=7;var p5=301,$1=302,gY=303,lY=304,Mw=306,OD=1000,FD=1001,ND=1002,d5=1003,zD=1004;var Ow=1005;var R1=1006,pY=1007;var m5=1008;var f7=1009,LD=1010,BD=1011,Fw=1012,dW=1013,u5=1014,b7=1015,Nw=1016,mW=1017,uW=1018,c5=1020,VD=35902,_D=35899,AD=1021,ED=1022,F6=1023,dY=1026,zw=1027,ID=1028,cW=1029,CD=1030,iW=1031;var sW=1033,mY=33776,uY=33777,cY=33778,iY=33779,oW=35840,nW=35841,aW=35842,rW=35843,tW=36196,eW=37492,JU=37496,wU=37808,ZU=37809,YU=37810,HU=37811,XU=37812,QU=37813,WU=37814,UU=37815,GU=37816,qU=37817,kU=37818,KU=37819,$U=37820,RU=37821,DU=36492,MU=36494,OU=36495,FU=36283,NU=36284,zU=36285,LU=36286;var TD=3201;var PD=0,SD=1,D1="",jD="srgb",Lw="srgb-linear",BU="linear",D9="srgb";var fD=512,bD=513,xD=514,VU=515,hD=516,vD=517,yD=518,gD=519;var _U="300 es",AU=2000;class x7{addEventListener(J,w){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(w)===-1)Z[J].push(w)}hasEventListener(J,w){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(w)!==-1}removeEventListener(J,w){let Z=this._listeners;if(Z===void 0)return;let Y=Z[J];if(Y!==void 0){let H=Y.indexOf(w);if(H!==-1)Y.splice(H,1)}}dispatchEvent(J){let w=this._listeners;if(w===void 0)return;let Z=w[J.type];if(Z!==void 0){J.target=this;let Y=Z.slice(0);for(let H=0,X=Y.length;H<X;H++)Y[H].call(this,J);J.target=null}}}var Z8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],MR=1234567,kw=Math.PI/180,K1=180/Math.PI;function i5(){let J=Math.random()*4294967295|0,w=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,Y=Math.random()*4294967295|0;return(Z8[J&255]+Z8[J>>8&255]+Z8[J>>16&255]+Z8[J>>24&255]+"-"+Z8[w&255]+Z8[w>>8&255]+"-"+Z8[w>>16&15|64]+Z8[w>>24&255]+"-"+Z8[Z&63|128]+Z8[Z>>8&255]+"-"+Z8[Z>>16&255]+Z8[Z>>24&255]+Z8[Y&255]+Z8[Y>>8&255]+Z8[Y>>16&255]+Z8[Y>>24&255]).toLowerCase()}function c0(J,w,Z){return Math.max(w,Math.min(Z,J))}function EU(J,w){return(J%w+w)%w}function jz(J,w,Z,Y,H){return Y+(J-w)*(H-Y)/(Z-w)}function fz(J,w,Z){if(J!==w)return(Z-J)/(w-J);else return 0}function Kw(J,w,Z){return(1-Z)*J+Z*w}function bz(J,w,Z,Y){return Kw(J,w,1-Math.exp(-Z*Y))}function xz(J,w=1){return w-Math.abs(EU(J,w*2)-w)}function hz(J,w,Z){if(J<=w)return 0;if(J>=Z)return 1;return J=(J-w)/(Z-w),J*J*(3-2*J)}function vz(J,w,Z){if(J<=w)return 0;if(J>=Z)return 1;return J=(J-w)/(Z-w),J*J*J*(J*(J*6-15)+10)}function yz(J,w){return J+Math.floor(Math.random()*(w-J+1))}function gz(J,w){return J+Math.random()*(w-J)}function lz(J){return J*(0.5-Math.random())}function pz(J){if(J!==void 0)MR=J;let w=MR+=1831565813;return w=Math.imul(w^w>>>15,w|1),w^=w+Math.imul(w^w>>>7,w|61),((w^w>>>14)>>>0)/4294967296}function dz(J){return J*kw}function mz(J){return J*K1}function uz(J){return(J&J-1)===0&&J!==0}function cz(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function iz(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function sz(J,w,Z,Y,H){let{cos:X,sin:Q}=Math,W=X(Z/2),U=Q(Z/2),G=X((w+Y)/2),q=Q((w+Y)/2),K=X((w-Y)/2),$=Q((w-Y)/2),R=X((Y-w)/2),N=Q((Y-w)/2);switch(H){case"XYX":J.set(W*q,U*K,U*$,W*G);break;case"YZY":J.set(U*$,W*q,U*K,W*G);break;case"ZXZ":J.set(U*K,U*$,W*q,W*G);break;case"XZX":J.set(W*q,U*N,U*R,W*G);break;case"YXY":J.set(U*R,W*q,U*N,W*G);break;case"ZYZ":J.set(U*N,U*R,W*q,W*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+H)}}function x5(J,w){switch(w.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function U8(J,w){switch(w.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var Bw={DEG2RAD:kw,RAD2DEG:K1,generateUUID:i5,clamp:c0,euclideanModulo:EU,mapLinear:jz,inverseLerp:fz,lerp:Kw,damp:bz,pingpong:xz,smoothstep:hz,smootherstep:vz,randInt:yz,randFloat:gz,randFloatSpread:lz,seededRandom:pz,degToRad:dz,radToDeg:mz,isPowerOfTwo:uz,ceilPowerOfTwo:cz,floorPowerOfTwo:iz,setQuaternionFromProperEuler:sz,normalize:U8,denormalize:x5};class a0{constructor(J=0,w=0){a0.prototype.isVector2=!0,this.x=J,this.y=w}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,w){return this.x=J,this.y=w,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let w=this.x,Z=this.y,Y=J.elements;return this.x=Y[0]*w+Y[3]*Z+Y[6],this.y=Y[1]*w+Y[4]*Z+Y[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,w){return this.x=c0(this.x,J.x,w.x),this.y=c0(this.y,J.y,w.y),this}clampScalar(J,w){return this.x=c0(this.x,J,w),this.y=c0(this.y,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(c0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let w=Math.sqrt(this.lengthSq()*J.lengthSq());if(w===0)return Math.PI/2;let Z=this.dot(J)/w;return Math.acos(c0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let w=this.x-J.x,Z=this.y-J.y;return w*w+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this}rotateAround(J,w){let Z=Math.cos(w),Y=Math.sin(w),H=this.x-J.x,X=this.y-J.y;return this.x=H*Z-X*Y+J.x,this.y=H*Y+X*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class h7{constructor(J=0,w=0,Z=0,Y=1){this.isQuaternion=!0,this._x=J,this._y=w,this._z=Z,this._w=Y}static slerpFlat(J,w,Z,Y,H,X,Q){let W=Z[Y+0],U=Z[Y+1],G=Z[Y+2],q=Z[Y+3],K=H[X+0],$=H[X+1],R=H[X+2],N=H[X+3];if(Q===0){J[w+0]=W,J[w+1]=U,J[w+2]=G,J[w+3]=q;return}if(Q===1){J[w+0]=K,J[w+1]=$,J[w+2]=R,J[w+3]=N;return}if(q!==N||W!==K||U!==$||G!==R){let L=1-Q,D=W*K+U*$+G*R+q*N,k=D>=0?1:-1,O=1-D*D;if(O>Number.EPSILON){let z=Math.sqrt(O),T=Math.atan2(z,D*k);L=Math.sin(L*T)/z,Q=Math.sin(Q*T)/z}let M=Q*k;if(W=W*L+K*M,U=U*L+$*M,G=G*L+R*M,q=q*L+N*M,L===1-Q){let z=1/Math.sqrt(W*W+U*U+G*G+q*q);W*=z,U*=z,G*=z,q*=z}}J[w]=W,J[w+1]=U,J[w+2]=G,J[w+3]=q}static multiplyQuaternionsFlat(J,w,Z,Y,H,X){let Q=Z[Y],W=Z[Y+1],U=Z[Y+2],G=Z[Y+3],q=H[X],K=H[X+1],$=H[X+2],R=H[X+3];return J[w]=Q*R+G*q+W*$-U*K,J[w+1]=W*R+G*K+U*q-Q*$,J[w+2]=U*R+G*$+Q*K-W*q,J[w+3]=G*R-Q*q-W*K-U*$,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,w,Z,Y){return this._x=J,this._y=w,this._z=Z,this._w=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,w=!0){let{_x:Z,_y:Y,_z:H,_order:X}=J,Q=Math.cos,W=Math.sin,U=Q(Z/2),G=Q(Y/2),q=Q(H/2),K=W(Z/2),$=W(Y/2),R=W(H/2);switch(X){case"XYZ":this._x=K*G*q+U*$*R,this._y=U*$*q-K*G*R,this._z=U*G*R+K*$*q,this._w=U*G*q-K*$*R;break;case"YXZ":this._x=K*G*q+U*$*R,this._y=U*$*q-K*G*R,this._z=U*G*R-K*$*q,this._w=U*G*q+K*$*R;break;case"ZXY":this._x=K*G*q-U*$*R,this._y=U*$*q+K*G*R,this._z=U*G*R+K*$*q,this._w=U*G*q-K*$*R;break;case"ZYX":this._x=K*G*q-U*$*R,this._y=U*$*q+K*G*R,this._z=U*G*R-K*$*q,this._w=U*G*q+K*$*R;break;case"YZX":this._x=K*G*q+U*$*R,this._y=U*$*q+K*G*R,this._z=U*G*R-K*$*q,this._w=U*G*q-K*$*R;break;case"XZY":this._x=K*G*q-U*$*R,this._y=U*$*q-K*G*R,this._z=U*G*R+K*$*q,this._w=U*G*q+K*$*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+X)}if(w===!0)this._onChangeCallback();return this}setFromAxisAngle(J,w){let Z=w/2,Y=Math.sin(Z);return this._x=J.x*Y,this._y=J.y*Y,this._z=J.z*Y,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let w=J.elements,Z=w[0],Y=w[4],H=w[8],X=w[1],Q=w[5],W=w[9],U=w[2],G=w[6],q=w[10],K=Z+Q+q;if(K>0){let $=0.5/Math.sqrt(K+1);this._w=0.25/$,this._x=(G-W)*$,this._y=(H-U)*$,this._z=(X-Y)*$}else if(Z>Q&&Z>q){let $=2*Math.sqrt(1+Z-Q-q);this._w=(G-W)/$,this._x=0.25*$,this._y=(Y+X)/$,this._z=(H+U)/$}else if(Q>q){let $=2*Math.sqrt(1+Q-Z-q);this._w=(H-U)/$,this._x=(Y+X)/$,this._y=0.25*$,this._z=(W+G)/$}else{let $=2*Math.sqrt(1+q-Z-Q);this._w=(X-Y)/$,this._x=(H+U)/$,this._y=(W+G)/$,this._z=0.25*$}return this._onChangeCallback(),this}setFromUnitVectors(J,w){let Z=J.dot(w)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*w.z-J.z*w.y,this._y=J.z*w.x-J.x*w.z,this._z=J.x*w.y-J.y*w.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(c0(this.dot(J),-1,1)))}rotateTowards(J,w){let Z=this.angleTo(J);if(Z===0)return this;let Y=Math.min(1,w/Z);return this.slerp(J,Y),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,w){let{_x:Z,_y:Y,_z:H,_w:X}=J,Q=w._x,W=w._y,U=w._z,G=w._w;return this._x=Z*G+X*Q+Y*U-H*W,this._y=Y*G+X*W+H*Q-Z*U,this._z=H*G+X*U+Z*W-Y*Q,this._w=X*G-Z*Q-Y*W-H*U,this._onChangeCallback(),this}slerp(J,w){if(w===0)return this;if(w===1)return this.copy(J);let Z=this._x,Y=this._y,H=this._z,X=this._w,Q=X*J._w+Z*J._x+Y*J._y+H*J._z;if(Q<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Q=-Q;else this.copy(J);if(Q>=1)return this._w=X,this._x=Z,this._y=Y,this._z=H,this;let W=1-Q*Q;if(W<=Number.EPSILON){let $=1-w;return this._w=$*X+w*this._w,this._x=$*Z+w*this._x,this._y=$*Y+w*this._y,this._z=$*H+w*this._z,this.normalize(),this}let U=Math.sqrt(W),G=Math.atan2(U,Q),q=Math.sin((1-w)*G)/U,K=Math.sin(w*G)/U;return this._w=X*q+this._w*K,this._x=Z*q+this._x*K,this._y=Y*q+this._y*K,this._z=H*q+this._z*K,this._onChangeCallback(),this}slerpQuaternions(J,w,Z){return this.copy(J).slerp(w,Z)}random(){let J=2*Math.PI*Math.random(),w=2*Math.PI*Math.random(),Z=Math.random(),Y=Math.sqrt(1-Z),H=Math.sqrt(Z);return this.set(Y*Math.sin(J),Y*Math.cos(J),H*Math.sin(w),H*Math.cos(w))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,w=0){return this._x=J[w],this._y=J[w+1],this._z=J[w+2],this._w=J[w+3],this._onChangeCallback(),this}toArray(J=[],w=0){return J[w]=this._x,J[w+1]=this._y,J[w+2]=this._z,J[w+3]=this._w,J}fromBufferAttribute(J,w){return this._x=J.getX(w),this._y=J.getY(w),this._z=J.getZ(w),this._w=J.getW(w),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(J=0,w=0,Z=0){x.prototype.isVector3=!0,this.x=J,this.y=w,this.z=Z}set(J,w,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=w,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;case 2:this.z=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this.z=J.z+w.z,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this.z+=J.z*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this.z=J.z-w.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,w){return this.x=J.x*w.x,this.y=J.y*w.y,this.z=J.z*w.z,this}applyEuler(J){return this.applyQuaternion(OR.setFromEuler(J))}applyAxisAngle(J,w){return this.applyQuaternion(OR.setFromAxisAngle(J,w))}applyMatrix3(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements;return this.x=H[0]*w+H[3]*Z+H[6]*Y,this.y=H[1]*w+H[4]*Z+H[7]*Y,this.z=H[2]*w+H[5]*Z+H[8]*Y,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements,X=1/(H[3]*w+H[7]*Z+H[11]*Y+H[15]);return this.x=(H[0]*w+H[4]*Z+H[8]*Y+H[12])*X,this.y=(H[1]*w+H[5]*Z+H[9]*Y+H[13])*X,this.z=(H[2]*w+H[6]*Z+H[10]*Y+H[14])*X,this}applyQuaternion(J){let w=this.x,Z=this.y,Y=this.z,H=J.x,X=J.y,Q=J.z,W=J.w,U=2*(X*Y-Q*Z),G=2*(Q*w-H*Y),q=2*(H*Z-X*w);return this.x=w+W*U+X*q-Q*G,this.y=Z+W*G+Q*U-H*q,this.z=Y+W*q+H*G-X*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let w=this.x,Z=this.y,Y=this.z,H=J.elements;return this.x=H[0]*w+H[4]*Z+H[8]*Y,this.y=H[1]*w+H[5]*Z+H[9]*Y,this.z=H[2]*w+H[6]*Z+H[10]*Y,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,w){return this.x=c0(this.x,J.x,w.x),this.y=c0(this.y,J.y,w.y),this.z=c0(this.z,J.z,w.z),this}clampScalar(J,w){return this.x=c0(this.x,J,w),this.y=c0(this.y,J,w),this.z=c0(this.z,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(c0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this.z+=(J.z-this.z)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this.z=J.z+(w.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,w){let{x:Z,y:Y,z:H}=J,X=w.x,Q=w.y,W=w.z;return this.x=Y*W-H*Q,this.y=H*X-Z*W,this.z=Z*Q-Y*X,this}projectOnVector(J){let w=J.lengthSq();if(w===0)return this.set(0,0,0);let Z=J.dot(this)/w;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return RW.copy(this).projectOnVector(J),this.sub(RW)}reflect(J){return this.sub(RW.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let w=Math.sqrt(this.lengthSq()*J.lengthSq());if(w===0)return Math.PI/2;let Z=this.dot(J)/w;return Math.acos(c0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let w=this.x-J.x,Z=this.y-J.y,Y=this.z-J.z;return w*w+Z*Z+Y*Y}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,w,Z){let Y=Math.sin(w)*J;return this.x=Y*Math.sin(Z),this.y=Math.cos(w)*J,this.z=Y*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,w,Z){return this.x=J*Math.sin(w),this.y=Z,this.z=J*Math.cos(w),this}setFromMatrixPosition(J){let w=J.elements;return this.x=w[12],this.y=w[13],this.z=w[14],this}setFromMatrixScale(J){let w=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),Y=this.setFromMatrixColumn(J,2).length();return this.x=w,this.y=Z,this.z=Y,this}setFromMatrixColumn(J,w){return this.fromArray(J.elements,w*4)}setFromMatrix3Column(J,w){return this.fromArray(J.elements,w*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this.z=J[w+2],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J[w+2]=this.z,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this.z=J.getZ(w),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,w=Math.random()*2-1,Z=Math.sqrt(1-w*w);return this.x=Z*Math.cos(J),this.y=w,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var RW=new x,OR=new h7;class y0{constructor(J,w,Z,Y,H,X,Q,W,U){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,w,Z,Y,H,X,Q,W,U)}set(J,w,Z,Y,H,X,Q,W,U){let G=this.elements;return G[0]=J,G[1]=Y,G[2]=Q,G[3]=w,G[4]=H,G[5]=W,G[6]=Z,G[7]=X,G[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let w=this.elements,Z=J.elements;return w[0]=Z[0],w[1]=Z[1],w[2]=Z[2],w[3]=Z[3],w[4]=Z[4],w[5]=Z[5],w[6]=Z[6],w[7]=Z[7],w[8]=Z[8],this}extractBasis(J,w,Z){return J.setFromMatrix3Column(this,0),w.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let w=J.elements;return this.set(w[0],w[4],w[8],w[1],w[5],w[9],w[2],w[6],w[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,w){let Z=J.elements,Y=w.elements,H=this.elements,X=Z[0],Q=Z[3],W=Z[6],U=Z[1],G=Z[4],q=Z[7],K=Z[2],$=Z[5],R=Z[8],N=Y[0],L=Y[3],D=Y[6],k=Y[1],O=Y[4],M=Y[7],z=Y[2],T=Y[5],E=Y[8];return H[0]=X*N+Q*k+W*z,H[3]=X*L+Q*O+W*T,H[6]=X*D+Q*M+W*E,H[1]=U*N+G*k+q*z,H[4]=U*L+G*O+q*T,H[7]=U*D+G*M+q*E,H[2]=K*N+$*k+R*z,H[5]=K*L+$*O+R*T,H[8]=K*D+$*M+R*E,this}multiplyScalar(J){let w=this.elements;return w[0]*=J,w[3]*=J,w[6]*=J,w[1]*=J,w[4]*=J,w[7]*=J,w[2]*=J,w[5]*=J,w[8]*=J,this}determinant(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8];return w*X*G-w*Q*U-Z*H*G+Z*Q*W+Y*H*U-Y*X*W}invert(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8],q=G*X-Q*U,K=Q*W-G*H,$=U*H-X*W,R=w*q+Z*K+Y*$;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/R;return J[0]=q*N,J[1]=(Y*U-G*Z)*N,J[2]=(Q*Z-Y*X)*N,J[3]=K*N,J[4]=(G*w-Y*W)*N,J[5]=(Y*H-Q*w)*N,J[6]=$*N,J[7]=(Z*W-U*w)*N,J[8]=(X*w-Z*H)*N,this}transpose(){let J,w=this.elements;return J=w[1],w[1]=w[3],w[3]=J,J=w[2],w[2]=w[6],w[6]=J,J=w[5],w[5]=w[7],w[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let w=this.elements;return J[0]=w[0],J[1]=w[3],J[2]=w[6],J[3]=w[1],J[4]=w[4],J[5]=w[7],J[6]=w[2],J[7]=w[5],J[8]=w[8],this}setUvTransform(J,w,Z,Y,H,X,Q){let W=Math.cos(H),U=Math.sin(H);return this.set(Z*W,Z*U,-Z*(W*X+U*Q)+X+J,-Y*U,Y*W,-Y*(-U*X+W*Q)+Q+w,0,0,1),this}scale(J,w){return this.premultiply(DW.makeScale(J,w)),this}rotate(J){return this.premultiply(DW.makeRotation(-J)),this}translate(J,w){return this.premultiply(DW.makeTranslation(J,w)),this}makeTranslation(J,w){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,w,0,0,1);return this}makeRotation(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,-Z,0,Z,w,0,0,0,1),this}makeScale(J,w){return this.set(J,0,0,0,w,0,0,0,1),this}equals(J){let w=this.elements,Z=J.elements;for(let Y=0;Y<9;Y++)if(w[Y]!==Z[Y])return!1;return!0}fromArray(J,w=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+w];return this}toArray(J=[],w=0){let Z=this.elements;return J[w]=Z[0],J[w+1]=Z[1],J[w+2]=Z[2],J[w+3]=Z[3],J[w+4]=Z[4],J[w+5]=Z[5],J[w+6]=Z[6],J[w+7]=Z[7],J[w+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var DW=new y0;function IU(J){for(let w=J.length-1;w>=0;--w)if(J[w]>=65535)return!0;return!1}function $w(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function lD(){let J=$w("canvas");return J.style.display="block",J}var FR={};function y5(J){if(J in FR)return;FR[J]=!0,console.warn(J)}function pD(J,w,Z){return new Promise(function(Y,H){function X(){switch(J.clientWaitSync(w,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:H();break;case J.TIMEOUT_EXPIRED:setTimeout(X,Z);break;default:Y()}}setTimeout(X,Z)})}var NR=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),zR=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function oz(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(H,X,Q){if(this.enabled===!1||X===Q||!X||!Q)return H;if(this.spaces[X].transfer==="srgb")H.r=s6(H.r),H.g=s6(H.g),H.b=s6(H.b);if(this.spaces[X].primaries!==this.spaces[Q].primaries)H.applyMatrix3(this.spaces[X].toXYZ),H.applyMatrix3(this.spaces[Q].fromXYZ);if(this.spaces[Q].transfer==="srgb")H.r=v5(H.r),H.g=v5(H.g),H.b=v5(H.b);return H},workingToColorSpace:function(H,X){return this.convert(H,this.workingColorSpace,X)},colorSpaceToWorking:function(H,X){return this.convert(H,X,this.workingColorSpace)},getPrimaries:function(H){return this.spaces[H].primaries},getTransfer:function(H){if(H==="")return"linear";return this.spaces[H].transfer},getToneMappingMode:function(H){return this.spaces[H].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(H,X=this.workingColorSpace){return H.fromArray(this.spaces[X].luminanceCoefficients)},define:function(H){Object.assign(this.spaces,H)},_getMatrix:function(H,X,Q){return H.copy(this.spaces[X].toXYZ).multiply(this.spaces[Q].fromXYZ)},_getDrawingBufferColorSpace:function(H){return this.spaces[H].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(H=this.workingColorSpace){return this.spaces[H].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(H,X){return y5("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(H,X)},toWorkingColorSpace:function(H,X){return y5("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(H,X)}},w=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],Y=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:w,whitePoint:Y,transfer:"linear",toXYZ:NR,fromXYZ:zR,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:w,whitePoint:Y,transfer:"srgb",toXYZ:NR,fromXYZ:zR,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var r0=oz();function s6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function v5(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var V5;class CU{static getDataURL(J,w="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(V5===void 0)V5=$w("canvas");V5.width=J.width,V5.height=J.height;let Y=V5.getContext("2d");if(J instanceof ImageData)Y.putImageData(J,0,0);else Y.drawImage(J,0,0,J.width,J.height);Z=V5}return Z.toDataURL(w)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let w=$w("canvas");w.width=J.width,w.height=J.height;let Z=w.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let Y=Z.getImageData(0,0,J.width,J.height),H=Y.data;for(let X=0;X<H.length;X++)H[X]=s6(H[X]/255)*255;return Z.putImageData(Y,0,0),w}else if(J.data){let w=J.data.slice(0);for(let Z=0;Z<w.length;Z++)if(w instanceof Uint8Array||w instanceof Uint8ClampedArray)w[Z]=Math.floor(s6(w[Z]/255)*255);else w[Z]=s6(w[Z]);return{data:w,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var nz=0;class Vw{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nz++}),this.uuid=i5(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let w=this.data;if(typeof HTMLVideoElement!=="undefined"&&w instanceof HTMLVideoElement)J.set(w.videoWidth,w.videoHeight,0);else if(w instanceof VideoFrame)J.set(w.displayHeight,w.displayWidth,0);else if(w!==null)J.set(w.width,w.height,w.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let w=J===void 0||typeof J==="string";if(!w&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},Y=this.data;if(Y!==null){let H;if(Array.isArray(Y)){H=[];for(let X=0,Q=Y.length;X<Q;X++)if(Y[X].isDataTexture)H.push(MW(Y[X].image));else H.push(MW(Y[X]))}else H=MW(Y);Z.url=H}if(!w)J.images[this.uuid]=Z;return Z}}function MW(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return CU.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var az=0,OW=new x;class G8 extends x7{constructor(J=G8.DEFAULT_IMAGE,w=G8.DEFAULT_MAPPING,Z=1001,Y=1001,H=1006,X=1008,Q=1023,W=1009,U=G8.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:az++}),this.uuid=i5(),this.name="",this.source=new Vw(J),this.mipmaps=[],this.mapping=w,this.channel=0,this.wrapS=Z,this.wrapT=Y,this.magFilter=H,this.minFilter=X,this.anisotropy=U,this.format=Q,this.internalFormat=null,this.type=W,this.offset=new a0(0,0),this.repeat=new a0(1,1),this.center=new a0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(OW).x}get height(){return this.source.getSize(OW).y}get depth(){return this.source.getSize(OW).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,w){this.updateRanges.push({start:J,count:w})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let w in J){let Z=J[w];if(Z===void 0){console.warn(`THREE.Texture.setValues(): parameter '${w}' has value of undefined.`);continue}let Y=this[w];if(Y===void 0){console.warn(`THREE.Texture.setValues(): property '${w}' does not exist.`);continue}if(Y&&Z&&(Y.isVector2&&Z.isVector2))Y.copy(Z);else if(Y&&Z&&(Y.isVector3&&Z.isVector3))Y.copy(Z);else if(Y&&Z&&(Y.isMatrix3&&Z.isMatrix3))Y.copy(Z);else this[w]=Z}}toJSON(J){let w=J===void 0||typeof J==="string";if(!w&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!w)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}G8.DEFAULT_IMAGE=null;G8.DEFAULT_MAPPING=300;G8.DEFAULT_ANISOTROPY=1;class X9{constructor(J=0,w=0,Z=0,Y=1){X9.prototype.isVector4=!0,this.x=J,this.y=w,this.z=Z,this.w=Y}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,w,Z,Y){return this.x=J,this.y=w,this.z=Z,this.w=Y,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,w){switch(J){case 0:this.x=w;break;case 1:this.y=w;break;case 2:this.z=w;break;case 3:this.w=w;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,w){return this.x=J.x+w.x,this.y=J.y+w.y,this.z=J.z+w.z,this.w=J.w+w.w,this}addScaledVector(J,w){return this.x+=J.x*w,this.y+=J.y*w,this.z+=J.z*w,this.w+=J.w*w,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,w){return this.x=J.x-w.x,this.y=J.y-w.y,this.z=J.z-w.z,this.w=J.w-w.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let w=this.x,Z=this.y,Y=this.z,H=this.w,X=J.elements;return this.x=X[0]*w+X[4]*Z+X[8]*Y+X[12]*H,this.y=X[1]*w+X[5]*Z+X[9]*Y+X[13]*H,this.z=X[2]*w+X[6]*Z+X[10]*Y+X[14]*H,this.w=X[3]*w+X[7]*Z+X[11]*Y+X[15]*H,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let w=Math.sqrt(1-J.w*J.w);if(w<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/w,this.y=J.y/w,this.z=J.z/w;return this}setAxisAngleFromRotationMatrix(J){let w,Z,Y,H,X=0.01,Q=0.1,W=J.elements,U=W[0],G=W[4],q=W[8],K=W[1],$=W[5],R=W[9],N=W[2],L=W[6],D=W[10];if(Math.abs(G-K)<0.01&&Math.abs(q-N)<0.01&&Math.abs(R-L)<0.01){if(Math.abs(G+K)<0.1&&Math.abs(q+N)<0.1&&Math.abs(R+L)<0.1&&Math.abs(U+$+D-3)<0.1)return this.set(1,0,0,0),this;w=Math.PI;let O=(U+1)/2,M=($+1)/2,z=(D+1)/2,T=(G+K)/4,E=(q+N)/4,A=(R+L)/4;if(O>M&&O>z)if(O<0.01)Z=0,Y=0.707106781,H=0.707106781;else Z=Math.sqrt(O),Y=T/Z,H=E/Z;else if(M>z)if(M<0.01)Z=0.707106781,Y=0,H=0.707106781;else Y=Math.sqrt(M),Z=T/Y,H=A/Y;else if(z<0.01)Z=0.707106781,Y=0.707106781,H=0;else H=Math.sqrt(z),Z=E/H,Y=A/H;return this.set(Z,Y,H,w),this}let k=Math.sqrt((L-R)*(L-R)+(q-N)*(q-N)+(K-G)*(K-G));if(Math.abs(k)<0.001)k=1;return this.x=(L-R)/k,this.y=(q-N)/k,this.z=(K-G)/k,this.w=Math.acos((U+$+D-1)/2),this}setFromMatrixPosition(J){let w=J.elements;return this.x=w[12],this.y=w[13],this.z=w[14],this.w=w[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,w){return this.x=c0(this.x,J.x,w.x),this.y=c0(this.y,J.y,w.y),this.z=c0(this.z,J.z,w.z),this.w=c0(this.w,J.w,w.w),this}clampScalar(J,w){return this.x=c0(this.x,J,w),this.y=c0(this.y,J,w),this.z=c0(this.z,J,w),this.w=c0(this.w,J,w),this}clampLength(J,w){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(c0(Z,J,w))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,w){return this.x+=(J.x-this.x)*w,this.y+=(J.y-this.y)*w,this.z+=(J.z-this.z)*w,this.w+=(J.w-this.w)*w,this}lerpVectors(J,w,Z){return this.x=J.x+(w.x-J.x)*Z,this.y=J.y+(w.y-J.y)*Z,this.z=J.z+(w.z-J.z)*Z,this.w=J.w+(w.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,w=0){return this.x=J[w],this.y=J[w+1],this.z=J[w+2],this.w=J[w+3],this}toArray(J=[],w=0){return J[w]=this.x,J[w+1]=this.y,J[w+2]=this.z,J[w+3]=this.w,J}fromBufferAttribute(J,w){return this.x=J.getX(w),this.y=J.getY(w),this.z=J.getZ(w),this.w=J.getW(w),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TU extends x7{constructor(J=1,w=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=w,this.depth=Z.depth,this.scissor=new X9(0,0,J,w),this.scissorTest=!1,this.viewport=new X9(0,0,J,w);let Y={width:J,height:w,depth:Z.depth},H=new G8(Y);this.textures=[];let X=Z.count;for(let Q=0;Q<X;Q++)this.textures[Q]=H.clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview}_setTextureOptions(J={}){let w={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)w.mapping=J.mapping;if(J.wrapS!==void 0)w.wrapS=J.wrapS;if(J.wrapT!==void 0)w.wrapT=J.wrapT;if(J.wrapR!==void 0)w.wrapR=J.wrapR;if(J.magFilter!==void 0)w.magFilter=J.magFilter;if(J.minFilter!==void 0)w.minFilter=J.minFilter;if(J.format!==void 0)w.format=J.format;if(J.type!==void 0)w.type=J.type;if(J.anisotropy!==void 0)w.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)w.colorSpace=J.colorSpace;if(J.flipY!==void 0)w.flipY=J.flipY;if(J.generateMipmaps!==void 0)w.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)w.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(w)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,w,Z=1){if(this.width!==J||this.height!==w||this.depth!==Z){this.width=J,this.height=w,this.depth=Z;for(let Y=0,H=this.textures.length;Y<H;Y++)this.textures[Y].image.width=J,this.textures[Y].image.height=w,this.textures[Y].image.depth=Z,this.textures[Y].isArrayTexture=this.textures[Y].image.depth>1;this.dispose()}this.viewport.set(0,0,J,w),this.scissor.set(0,0,J,w)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let w=0,Z=J.textures.length;w<Z;w++){this.textures[w]=J.textures[w].clone(),this.textures[w].isRenderTargetTexture=!0,this.textures[w].renderTarget=this;let Y=Object.assign({},J.textures[w].image);this.textures[w].source=new Vw(Y)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n6 extends TU{constructor(J=1,w=1,Z={}){super(J,w,Z);this.isWebGLRenderTarget=!0}}class sY extends G8{constructor(J=null,w=1,Z=1,Y=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:w,height:Z,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PU extends G8{constructor(J=null,w=1,Z=1,Y=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:w,height:Z,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M1{constructor(J=new x(1/0,1/0,1/0),w=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=w}set(J,w){return this.min.copy(J),this.max.copy(w),this}setFromArray(J){this.makeEmpty();for(let w=0,Z=J.length;w<Z;w+=3)this.expandByPoint(Z6.fromArray(J,w));return this}setFromBufferAttribute(J){this.makeEmpty();for(let w=0,Z=J.count;w<Z;w++)this.expandByPoint(Z6.fromBufferAttribute(J,w));return this}setFromPoints(J){this.makeEmpty();for(let w=0,Z=J.length;w<Z;w++)this.expandByPoint(J[w]);return this}setFromCenterAndSize(J,w){let Z=Z6.copy(w).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,w=!1){return this.makeEmpty(),this.expandByObject(J,w)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,w=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let H=Z.getAttribute("position");if(w===!0&&H!==void 0&&J.isInstancedMesh!==!0)for(let X=0,Q=H.count;X<Q;X++){if(J.isMesh===!0)J.getVertexPosition(X,Z6);else Z6.fromBufferAttribute(H,X);Z6.applyMatrix4(J.matrixWorld),this.expandByPoint(Z6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();RY.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();RY.copy(Z.boundingBox)}RY.applyMatrix4(J.matrixWorld),this.union(RY)}}let Y=J.children;for(let H=0,X=Y.length;H<X;H++)this.expandByObject(Y[H],w);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,w){return w.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Z6),Z6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let w,Z;if(J.normal.x>0)w=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else w=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)w+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else w+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)w+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else w+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return w<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Qw),DY.subVectors(this.max,Qw),_5.subVectors(J.a,Qw),A5.subVectors(J.b,Qw),E5.subVectors(J.c,Qw),E7.subVectors(A5,_5),I7.subVectors(E5,A5),U1.subVectors(_5,E5);let w=[0,-E7.z,E7.y,0,-I7.z,I7.y,0,-U1.z,U1.y,E7.z,0,-E7.x,I7.z,0,-I7.x,U1.z,0,-U1.x,-E7.y,E7.x,0,-I7.y,I7.x,0,-U1.y,U1.x,0];if(!FW(w,_5,A5,E5,DY))return!1;if(w=[1,0,0,0,1,0,0,0,1],!FW(w,_5,A5,E5,DY))return!1;return MY.crossVectors(E7,I7),w=[MY.x,MY.y,MY.z],FW(w,_5,A5,E5,DY)}clampPoint(J,w){return w.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Z6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Z6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return p6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),p6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),p6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),p6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),p6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),p6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),p6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),p6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(p6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var p6=[new x,new x,new x,new x,new x,new x,new x,new x],Z6=new x,RY=new M1,_5=new x,A5=new x,E5=new x,E7=new x,I7=new x,U1=new x,Qw=new x,DY=new x,MY=new x,G1=new x;function FW(J,w,Z,Y,H){for(let X=0,Q=J.length-3;X<=Q;X+=3){G1.fromArray(J,X);let W=H.x*Math.abs(G1.x)+H.y*Math.abs(G1.y)+H.z*Math.abs(G1.z),U=w.dot(G1),G=Z.dot(G1),q=Y.dot(G1);if(Math.max(-Math.max(U,G,q),Math.min(U,G,q))>W)return!1}return!0}var rz=new M1,Ww=new x,NW=new x;class _w{constructor(J=new x,w=-1){this.isSphere=!0,this.center=J,this.radius=w}set(J,w){return this.center.copy(J),this.radius=w,this}setFromPoints(J,w){let Z=this.center;if(w!==void 0)Z.copy(w);else rz.setFromPoints(J).getCenter(Z);let Y=0;for(let H=0,X=J.length;H<X;H++)Y=Math.max(Y,Z.distanceToSquared(J[H]));return this.radius=Math.sqrt(Y),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let w=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=w*w}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,w){let Z=this.center.distanceToSquared(J);if(w.copy(J),Z>this.radius*this.radius)w.sub(this.center).normalize(),w.multiplyScalar(this.radius).add(this.center);return w}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Ww.subVectors(J,this.center);let w=Ww.lengthSq();if(w>this.radius*this.radius){let Z=Math.sqrt(w),Y=(Z-this.radius)*0.5;this.center.addScaledVector(Ww,Y/Z),this.radius+=Y}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else NW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Ww.copy(J.center).add(NW)),this.expandByPoint(Ww.copy(J.center).sub(NW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var d6=new x,zW=new x,OY=new x,C7=new x,LW=new x,FY=new x,BW=new x;class SU{constructor(J=new x,w=new x(0,0,-1)){this.origin=J,this.direction=w}set(J,w){return this.origin.copy(J),this.direction.copy(w),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,w){return w.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,d6)),this}closestPointToPoint(J,w){w.subVectors(J,this.origin);let Z=w.dot(this.direction);if(Z<0)return w.copy(this.origin);return w.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let w=d6.subVectors(J,this.origin).dot(this.direction);if(w<0)return this.origin.distanceToSquared(J);return d6.copy(this.origin).addScaledVector(this.direction,w),d6.distanceToSquared(J)}distanceSqToSegment(J,w,Z,Y){zW.copy(J).add(w).multiplyScalar(0.5),OY.copy(w).sub(J).normalize(),C7.copy(this.origin).sub(zW);let H=J.distanceTo(w)*0.5,X=-this.direction.dot(OY),Q=C7.dot(this.direction),W=-C7.dot(OY),U=C7.lengthSq(),G=Math.abs(1-X*X),q,K,$,R;if(G>0)if(q=X*W-Q,K=X*Q-W,R=H*G,q>=0)if(K>=-R)if(K<=R){let N=1/G;q*=N,K*=N,$=q*(q+X*K+2*Q)+K*(X*q+K+2*W)+U}else K=H,q=Math.max(0,-(X*K+Q)),$=-q*q+K*(K+2*W)+U;else K=-H,q=Math.max(0,-(X*K+Q)),$=-q*q+K*(K+2*W)+U;else if(K<=-R)q=Math.max(0,-(-X*H+Q)),K=q>0?-H:Math.min(Math.max(-H,-W),H),$=-q*q+K*(K+2*W)+U;else if(K<=R)q=0,K=Math.min(Math.max(-H,-W),H),$=K*(K+2*W)+U;else q=Math.max(0,-(X*H+Q)),K=q>0?H:Math.min(Math.max(-H,-W),H),$=-q*q+K*(K+2*W)+U;else K=X>0?-H:H,q=Math.max(0,-(X*K+Q)),$=-q*q+K*(K+2*W)+U;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(Y)Y.copy(zW).addScaledVector(OY,K);return $}intersectSphere(J,w){d6.subVectors(J.center,this.origin);let Z=d6.dot(this.direction),Y=d6.dot(d6)-Z*Z,H=J.radius*J.radius;if(Y>H)return null;let X=Math.sqrt(H-Y),Q=Z-X,W=Z+X;if(W<0)return null;if(Q<0)return this.at(W,w);return this.at(Q,w)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let w=J.normal.dot(this.direction);if(w===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/w;return Z>=0?Z:null}intersectPlane(J,w){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,w)}intersectsPlane(J){let w=J.distanceToPoint(this.origin);if(w===0)return!0;if(J.normal.dot(this.direction)*w<0)return!0;return!1}intersectBox(J,w){let Z,Y,H,X,Q,W,U=1/this.direction.x,G=1/this.direction.y,q=1/this.direction.z,K=this.origin;if(U>=0)Z=(J.min.x-K.x)*U,Y=(J.max.x-K.x)*U;else Z=(J.max.x-K.x)*U,Y=(J.min.x-K.x)*U;if(G>=0)H=(J.min.y-K.y)*G,X=(J.max.y-K.y)*G;else H=(J.max.y-K.y)*G,X=(J.min.y-K.y)*G;if(Z>X||H>Y)return null;if(H>Z||isNaN(Z))Z=H;if(X<Y||isNaN(Y))Y=X;if(q>=0)Q=(J.min.z-K.z)*q,W=(J.max.z-K.z)*q;else Q=(J.max.z-K.z)*q,W=(J.min.z-K.z)*q;if(Z>W||Q>Y)return null;if(Q>Z||Z!==Z)Z=Q;if(W<Y||Y!==Y)Y=W;if(Y<0)return null;return this.at(Z>=0?Z:Y,w)}intersectsBox(J){return this.intersectBox(J,d6)!==null}intersectTriangle(J,w,Z,Y,H){LW.subVectors(w,J),FY.subVectors(Z,J),BW.crossVectors(LW,FY);let X=this.direction.dot(BW),Q;if(X>0){if(Y)return null;Q=1}else if(X<0)Q=-1,X=-X;else return null;C7.subVectors(this.origin,J);let W=Q*this.direction.dot(FY.crossVectors(C7,FY));if(W<0)return null;let U=Q*this.direction.dot(LW.cross(C7));if(U<0)return null;if(W+U>X)return null;let G=-Q*C7.dot(BW);if(G<0)return null;return this.at(G/X,H)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class I9{constructor(J,w,Z,Y,H,X,Q,W,U,G,q,K,$,R,N,L){if(I9.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,w,Z,Y,H,X,Q,W,U,G,q,K,$,R,N,L)}set(J,w,Z,Y,H,X,Q,W,U,G,q,K,$,R,N,L){let D=this.elements;return D[0]=J,D[4]=w,D[8]=Z,D[12]=Y,D[1]=H,D[5]=X,D[9]=Q,D[13]=W,D[2]=U,D[6]=G,D[10]=q,D[14]=K,D[3]=$,D[7]=R,D[11]=N,D[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new I9().fromArray(this.elements)}copy(J){let w=this.elements,Z=J.elements;return w[0]=Z[0],w[1]=Z[1],w[2]=Z[2],w[3]=Z[3],w[4]=Z[4],w[5]=Z[5],w[6]=Z[6],w[7]=Z[7],w[8]=Z[8],w[9]=Z[9],w[10]=Z[10],w[11]=Z[11],w[12]=Z[12],w[13]=Z[13],w[14]=Z[14],w[15]=Z[15],this}copyPosition(J){let w=this.elements,Z=J.elements;return w[12]=Z[12],w[13]=Z[13],w[14]=Z[14],this}setFromMatrix3(J){let w=J.elements;return this.set(w[0],w[3],w[6],0,w[1],w[4],w[7],0,w[2],w[5],w[8],0,0,0,0,1),this}extractBasis(J,w,Z){return J.setFromMatrixColumn(this,0),w.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,w,Z){return this.set(J.x,w.x,Z.x,0,J.y,w.y,Z.y,0,J.z,w.z,Z.z,0,0,0,0,1),this}extractRotation(J){let w=this.elements,Z=J.elements,Y=1/I5.setFromMatrixColumn(J,0).length(),H=1/I5.setFromMatrixColumn(J,1).length(),X=1/I5.setFromMatrixColumn(J,2).length();return w[0]=Z[0]*Y,w[1]=Z[1]*Y,w[2]=Z[2]*Y,w[3]=0,w[4]=Z[4]*H,w[5]=Z[5]*H,w[6]=Z[6]*H,w[7]=0,w[8]=Z[8]*X,w[9]=Z[9]*X,w[10]=Z[10]*X,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,this}makeRotationFromEuler(J){let w=this.elements,Z=J.x,Y=J.y,H=J.z,X=Math.cos(Z),Q=Math.sin(Z),W=Math.cos(Y),U=Math.sin(Y),G=Math.cos(H),q=Math.sin(H);if(J.order==="XYZ"){let K=X*G,$=X*q,R=Q*G,N=Q*q;w[0]=W*G,w[4]=-W*q,w[8]=U,w[1]=$+R*U,w[5]=K-N*U,w[9]=-Q*W,w[2]=N-K*U,w[6]=R+$*U,w[10]=X*W}else if(J.order==="YXZ"){let K=W*G,$=W*q,R=U*G,N=U*q;w[0]=K+N*Q,w[4]=R*Q-$,w[8]=X*U,w[1]=X*q,w[5]=X*G,w[9]=-Q,w[2]=$*Q-R,w[6]=N+K*Q,w[10]=X*W}else if(J.order==="ZXY"){let K=W*G,$=W*q,R=U*G,N=U*q;w[0]=K-N*Q,w[4]=-X*q,w[8]=R+$*Q,w[1]=$+R*Q,w[5]=X*G,w[9]=N-K*Q,w[2]=-X*U,w[6]=Q,w[10]=X*W}else if(J.order==="ZYX"){let K=X*G,$=X*q,R=Q*G,N=Q*q;w[0]=W*G,w[4]=R*U-$,w[8]=K*U+N,w[1]=W*q,w[5]=N*U+K,w[9]=$*U-R,w[2]=-U,w[6]=Q*W,w[10]=X*W}else if(J.order==="YZX"){let K=X*W,$=X*U,R=Q*W,N=Q*U;w[0]=W*G,w[4]=N-K*q,w[8]=R*q+$,w[1]=q,w[5]=X*G,w[9]=-Q*G,w[2]=-U*G,w[6]=$*q+R,w[10]=K-N*q}else if(J.order==="XZY"){let K=X*W,$=X*U,R=Q*W,N=Q*U;w[0]=W*G,w[4]=-q,w[8]=U*G,w[1]=K*q+N,w[5]=X*G,w[9]=$*q-R,w[2]=R*q-$,w[6]=Q*G,w[10]=N*q+K}return w[3]=0,w[7]=0,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,this}makeRotationFromQuaternion(J){return this.compose(tz,J,ez)}lookAt(J,w,Z){let Y=this.elements;if(S8.subVectors(J,w),S8.lengthSq()===0)S8.z=1;if(S8.normalize(),T7.crossVectors(Z,S8),T7.lengthSq()===0){if(Math.abs(Z.z)===1)S8.x+=0.0001;else S8.z+=0.0001;S8.normalize(),T7.crossVectors(Z,S8)}return T7.normalize(),NY.crossVectors(S8,T7),Y[0]=T7.x,Y[4]=NY.x,Y[8]=S8.x,Y[1]=T7.y,Y[5]=NY.y,Y[9]=S8.y,Y[2]=T7.z,Y[6]=NY.z,Y[10]=S8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,w){let Z=J.elements,Y=w.elements,H=this.elements,X=Z[0],Q=Z[4],W=Z[8],U=Z[12],G=Z[1],q=Z[5],K=Z[9],$=Z[13],R=Z[2],N=Z[6],L=Z[10],D=Z[14],k=Z[3],O=Z[7],M=Z[11],z=Z[15],T=Y[0],E=Y[4],A=Y[8],S=Y[12],V=Y[1],B=Y[5],C=Y[9],g=Y[13],p=Y[2],l=Y[6],o=Y[10],m=Y[14],t=Y[3],d=Y[7],a=Y[11],X0=Y[15];return H[0]=X*T+Q*V+W*p+U*t,H[4]=X*E+Q*B+W*l+U*d,H[8]=X*A+Q*C+W*o+U*a,H[12]=X*S+Q*g+W*m+U*X0,H[1]=G*T+q*V+K*p+$*t,H[5]=G*E+q*B+K*l+$*d,H[9]=G*A+q*C+K*o+$*a,H[13]=G*S+q*g+K*m+$*X0,H[2]=R*T+N*V+L*p+D*t,H[6]=R*E+N*B+L*l+D*d,H[10]=R*A+N*C+L*o+D*a,H[14]=R*S+N*g+L*m+D*X0,H[3]=k*T+O*V+M*p+z*t,H[7]=k*E+O*B+M*l+z*d,H[11]=k*A+O*C+M*o+z*a,H[15]=k*S+O*g+M*m+z*X0,this}multiplyScalar(J){let w=this.elements;return w[0]*=J,w[4]*=J,w[8]*=J,w[12]*=J,w[1]*=J,w[5]*=J,w[9]*=J,w[13]*=J,w[2]*=J,w[6]*=J,w[10]*=J,w[14]*=J,w[3]*=J,w[7]*=J,w[11]*=J,w[15]*=J,this}determinant(){let J=this.elements,w=J[0],Z=J[4],Y=J[8],H=J[12],X=J[1],Q=J[5],W=J[9],U=J[13],G=J[2],q=J[6],K=J[10],$=J[14],R=J[3],N=J[7],L=J[11],D=J[15];return R*(+H*W*q-Y*U*q-H*Q*K+Z*U*K+Y*Q*$-Z*W*$)+N*(+w*W*$-w*U*K+H*X*K-Y*X*$+Y*U*G-H*W*G)+L*(+w*U*q-w*Q*$-H*X*q+Z*X*$+H*Q*G-Z*U*G)+D*(-Y*Q*G-w*W*q+w*Q*K+Y*X*q-Z*X*K+Z*W*G)}transpose(){let J=this.elements,w;return w=J[1],J[1]=J[4],J[4]=w,w=J[2],J[2]=J[8],J[8]=w,w=J[6],J[6]=J[9],J[9]=w,w=J[3],J[3]=J[12],J[12]=w,w=J[7],J[7]=J[13],J[13]=w,w=J[11],J[11]=J[14],J[14]=w,this}setPosition(J,w,Z){let Y=this.elements;if(J.isVector3)Y[12]=J.x,Y[13]=J.y,Y[14]=J.z;else Y[12]=J,Y[13]=w,Y[14]=Z;return this}invert(){let J=this.elements,w=J[0],Z=J[1],Y=J[2],H=J[3],X=J[4],Q=J[5],W=J[6],U=J[7],G=J[8],q=J[9],K=J[10],$=J[11],R=J[12],N=J[13],L=J[14],D=J[15],k=q*L*U-N*K*U+N*W*$-Q*L*$-q*W*D+Q*K*D,O=R*K*U-G*L*U-R*W*$+X*L*$+G*W*D-X*K*D,M=G*N*U-R*q*U+R*Q*$-X*N*$-G*Q*D+X*q*D,z=R*q*W-G*N*W-R*Q*K+X*N*K+G*Q*L-X*q*L,T=w*k+Z*O+Y*M+H*z;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return J[0]=k*E,J[1]=(N*K*H-q*L*H-N*Y*$+Z*L*$+q*Y*D-Z*K*D)*E,J[2]=(Q*L*H-N*W*H+N*Y*U-Z*L*U-Q*Y*D+Z*W*D)*E,J[3]=(q*W*H-Q*K*H-q*Y*U+Z*K*U+Q*Y*$-Z*W*$)*E,J[4]=O*E,J[5]=(G*L*H-R*K*H+R*Y*$-w*L*$-G*Y*D+w*K*D)*E,J[6]=(R*W*H-X*L*H-R*Y*U+w*L*U+X*Y*D-w*W*D)*E,J[7]=(X*K*H-G*W*H+G*Y*U-w*K*U-X*Y*$+w*W*$)*E,J[8]=M*E,J[9]=(R*q*H-G*N*H-R*Z*$+w*N*$+G*Z*D-w*q*D)*E,J[10]=(X*N*H-R*Q*H+R*Z*U-w*N*U-X*Z*D+w*Q*D)*E,J[11]=(G*Q*H-X*q*H-G*Z*U+w*q*U+X*Z*$-w*Q*$)*E,J[12]=z*E,J[13]=(G*N*Y-R*q*Y+R*Z*K-w*N*K-G*Z*L+w*q*L)*E,J[14]=(R*Q*Y-X*N*Y-R*Z*W+w*N*W+X*Z*L-w*Q*L)*E,J[15]=(X*q*Y-G*Q*Y+G*Z*W-w*q*W-X*Z*K+w*Q*K)*E,this}scale(J){let w=this.elements,Z=J.x,Y=J.y,H=J.z;return w[0]*=Z,w[4]*=Y,w[8]*=H,w[1]*=Z,w[5]*=Y,w[9]*=H,w[2]*=Z,w[6]*=Y,w[10]*=H,w[3]*=Z,w[7]*=Y,w[11]*=H,this}getMaxScaleOnAxis(){let J=this.elements,w=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Y=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(w,Z,Y))}makeTranslation(J,w,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,w,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,w,-Z,0,0,Z,w,0,0,0,0,1),this}makeRotationY(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,0,Z,0,0,1,0,0,-Z,0,w,0,0,0,0,1),this}makeRotationZ(J){let w=Math.cos(J),Z=Math.sin(J);return this.set(w,-Z,0,0,Z,w,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,w){let Z=Math.cos(w),Y=Math.sin(w),H=1-Z,X=J.x,Q=J.y,W=J.z,U=H*X,G=H*Q;return this.set(U*X+Z,U*Q-Y*W,U*W+Y*Q,0,U*Q+Y*W,G*Q+Z,G*W-Y*X,0,U*W-Y*Q,G*W+Y*X,H*W*W+Z,0,0,0,0,1),this}makeScale(J,w,Z){return this.set(J,0,0,0,0,w,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,w,Z,Y,H,X){return this.set(1,Z,H,0,J,1,X,0,w,Y,1,0,0,0,0,1),this}compose(J,w,Z){let Y=this.elements,H=w._x,X=w._y,Q=w._z,W=w._w,U=H+H,G=X+X,q=Q+Q,K=H*U,$=H*G,R=H*q,N=X*G,L=X*q,D=Q*q,k=W*U,O=W*G,M=W*q,z=Z.x,T=Z.y,E=Z.z;return Y[0]=(1-(N+D))*z,Y[1]=($+M)*z,Y[2]=(R-O)*z,Y[3]=0,Y[4]=($-M)*T,Y[5]=(1-(K+D))*T,Y[6]=(L+k)*T,Y[7]=0,Y[8]=(R+O)*E,Y[9]=(L-k)*E,Y[10]=(1-(K+N))*E,Y[11]=0,Y[12]=J.x,Y[13]=J.y,Y[14]=J.z,Y[15]=1,this}decompose(J,w,Z){let Y=this.elements,H=I5.set(Y[0],Y[1],Y[2]).length(),X=I5.set(Y[4],Y[5],Y[6]).length(),Q=I5.set(Y[8],Y[9],Y[10]).length();if(this.determinant()<0)H=-H;J.x=Y[12],J.y=Y[13],J.z=Y[14],Y6.copy(this);let U=1/H,G=1/X,q=1/Q;return Y6.elements[0]*=U,Y6.elements[1]*=U,Y6.elements[2]*=U,Y6.elements[4]*=G,Y6.elements[5]*=G,Y6.elements[6]*=G,Y6.elements[8]*=q,Y6.elements[9]*=q,Y6.elements[10]*=q,w.setFromRotationMatrix(Y6),Z.x=H,Z.y=X,Z.z=Q,this}makePerspective(J,w,Z,Y,H,X,Q=2000,W=!1){let U=this.elements,G=2*H/(w-J),q=2*H/(Z-Y),K=(w+J)/(w-J),$=(Z+Y)/(Z-Y),R,N;if(W)R=H/(X-H),N=X*H/(X-H);else if(Q===2000)R=-(X+H)/(X-H),N=-2*X*H/(X-H);else if(Q===2001)R=-X/(X-H),N=-X*H/(X-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Q);return U[0]=G,U[4]=0,U[8]=K,U[12]=0,U[1]=0,U[5]=q,U[9]=$,U[13]=0,U[2]=0,U[6]=0,U[10]=R,U[14]=N,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,w,Z,Y,H,X,Q=2000,W=!1){let U=this.elements,G=2/(w-J),q=2/(Z-Y),K=-(w+J)/(w-J),$=-(Z+Y)/(Z-Y),R,N;if(W)R=1/(X-H),N=X/(X-H);else if(Q===2000)R=-2/(X-H),N=-(X+H)/(X-H);else if(Q===2001)R=-1/(X-H),N=-H/(X-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Q);return U[0]=G,U[4]=0,U[8]=0,U[12]=K,U[1]=0,U[5]=q,U[9]=0,U[13]=$,U[2]=0,U[6]=0,U[10]=R,U[14]=N,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let w=this.elements,Z=J.elements;for(let Y=0;Y<16;Y++)if(w[Y]!==Z[Y])return!1;return!0}fromArray(J,w=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+w];return this}toArray(J=[],w=0){let Z=this.elements;return J[w]=Z[0],J[w+1]=Z[1],J[w+2]=Z[2],J[w+3]=Z[3],J[w+4]=Z[4],J[w+5]=Z[5],J[w+6]=Z[6],J[w+7]=Z[7],J[w+8]=Z[8],J[w+9]=Z[9],J[w+10]=Z[10],J[w+11]=Z[11],J[w+12]=Z[12],J[w+13]=Z[13],J[w+14]=Z[14],J[w+15]=Z[15],J}}var I5=new x,Y6=new I9,tz=new x(0,0,0),ez=new x(1,1,1),T7=new x,NY=new x,S8=new x,LR=new I9,BR=new h7;class X6{constructor(J=0,w=0,Z=0,Y=X6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=w,this._z=Z,this._order=Y}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,w,Z,Y=this._order){return this._x=J,this._y=w,this._z=Z,this._order=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,w=this._order,Z=!0){let Y=J.elements,H=Y[0],X=Y[4],Q=Y[8],W=Y[1],U=Y[5],G=Y[9],q=Y[2],K=Y[6],$=Y[10];switch(w){case"XYZ":if(this._y=Math.asin(c0(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(-G,$),this._z=Math.atan2(-X,H);else this._x=Math.atan2(K,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(Q,$),this._z=Math.atan2(W,U);else this._y=Math.atan2(-q,H),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(K,-1,1)),Math.abs(K)<0.9999999)this._y=Math.atan2(-q,$),this._z=Math.atan2(-X,U);else this._y=0,this._z=Math.atan2(W,H);break;case"ZYX":if(this._y=Math.asin(-c0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(K,$),this._z=Math.atan2(W,H);else this._x=0,this._z=Math.atan2(-X,U);break;case"YZX":if(this._z=Math.asin(c0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(-G,U),this._y=Math.atan2(-q,H);else this._x=0,this._y=Math.atan2(Q,$);break;case"XZY":if(this._z=Math.asin(-c0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(K,U),this._y=Math.atan2(Q,H);else this._x=Math.atan2(-G,$),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+w)}if(this._order=w,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,w,Z){return LR.makeRotationFromQuaternion(J),this.setFromRotationMatrix(LR,w,Z)}setFromVector3(J,w=this._order){return this.set(J.x,J.y,J.z,w)}reorder(J){return BR.setFromEuler(this),this.setFromQuaternion(BR,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],w=0){return J[w]=this._x,J[w+1]=this._y,J[w+2]=this._z,J[w+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}X6.DEFAULT_ORDER="XYZ";class oY{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var JL=0,VR=new x,C5=new h7,m6=new I9,zY=new x,Uw=new x,wL=new x,ZL=new h7,_R=new x(1,0,0),AR=new x(0,1,0),ER=new x(0,0,1),IR={type:"added"},YL={type:"removed"},T5={type:"childadded",child:null},VW={type:"childremoved",child:null};class w8 extends x7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:JL++}),this.uuid=i5(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=w8.DEFAULT_UP.clone();let J=new x,w=new X6,Z=new h7,Y=new x(1,1,1);function H(){Z.setFromEuler(w,!1)}function X(){w.setFromQuaternion(Z,void 0,!1)}w._onChange(H),Z._onChange(X),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:w},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:Y},modelViewMatrix:{value:new I9},normalMatrix:{value:new y0}}),this.matrix=new I9,this.matrixWorld=new I9,this.matrixAutoUpdate=w8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=w8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oY,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,w){this.quaternion.setFromAxisAngle(J,w)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,w){return C5.setFromAxisAngle(J,w),this.quaternion.multiply(C5),this}rotateOnWorldAxis(J,w){return C5.setFromAxisAngle(J,w),this.quaternion.premultiply(C5),this}rotateX(J){return this.rotateOnAxis(_R,J)}rotateY(J){return this.rotateOnAxis(AR,J)}rotateZ(J){return this.rotateOnAxis(ER,J)}translateOnAxis(J,w){return VR.copy(J).applyQuaternion(this.quaternion),this.position.add(VR.multiplyScalar(w)),this}translateX(J){return this.translateOnAxis(_R,J)}translateY(J){return this.translateOnAxis(AR,J)}translateZ(J){return this.translateOnAxis(ER,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(m6.copy(this.matrixWorld).invert())}lookAt(J,w,Z){if(J.isVector3)zY.copy(J);else zY.set(J,w,Z);let Y=this.parent;if(this.updateWorldMatrix(!0,!1),Uw.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)m6.lookAt(Uw,zY,this.up);else m6.lookAt(zY,Uw,this.up);if(this.quaternion.setFromRotationMatrix(m6),Y)m6.extractRotation(Y.matrixWorld),C5.setFromRotationMatrix(m6),this.quaternion.premultiply(C5.invert())}add(J){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.add(arguments[w]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(IR),T5.child=J,this.dispatchEvent(T5),T5.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let w=this.children.indexOf(J);if(w!==-1)J.parent=null,this.children.splice(w,1),J.dispatchEvent(YL),VW.child=J,this.dispatchEvent(VW),VW.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),m6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),m6.multiply(J.parent.matrixWorld);return J.applyMatrix4(m6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(IR),T5.child=J,this.dispatchEvent(T5),T5.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,w){if(this[J]===w)return this;for(let Z=0,Y=this.children.length;Z<Y;Z++){let X=this.children[Z].getObjectByProperty(J,w);if(X!==void 0)return X}return}getObjectsByProperty(J,w,Z=[]){if(this[J]===w)Z.push(this);let Y=this.children;for(let H=0,X=Y.length;H<X;H++)Y[H].getObjectsByProperty(J,w,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uw,J,wL),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uw,ZL,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let w=this.matrixWorld.elements;return J.set(w[8],w[9],w[10]).normalize()}raycast(){}traverse(J){J(this);let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].traverseVisible(J)}traverseAncestors(J){let w=this.parent;if(w!==null)J(w),w.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let w=this.children;for(let Z=0,Y=w.length;Z<Y;Z++)w[Z].updateMatrixWorld(J)}updateWorldMatrix(J,w){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(w===!0){let Y=this.children;for(let H=0,X=Y.length;H<X;H++)Y[H].updateWorldMatrix(!1,!0)}}toJSON(J){let w=J===void 0||typeof J==="string",Z={};if(w)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Y={};if(Y.uuid=this.uuid,Y.type=this.type,this.name!=="")Y.name=this.name;if(this.castShadow===!0)Y.castShadow=!0;if(this.receiveShadow===!0)Y.receiveShadow=!0;if(this.visible===!1)Y.visible=!1;if(this.frustumCulled===!1)Y.frustumCulled=!1;if(this.renderOrder!==0)Y.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Y.userData=this.userData;if(Y.layers=this.layers.mask,Y.matrix=this.matrix.toArray(),Y.up=this.up.toArray(),this.matrixAutoUpdate===!1)Y.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Y.type="InstancedMesh",Y.count=this.count,Y.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Y.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Y.type="BatchedMesh",Y.perObjectFrustumCulled=this.perObjectFrustumCulled,Y.sortObjects=this.sortObjects,Y.drawRanges=this._drawRanges,Y.reservedRanges=this._reservedRanges,Y.geometryInfo=this._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox?Q.boundingBox.toJSON():void 0,boundingSphere:Q.boundingSphere?Q.boundingSphere.toJSON():void 0})),Y.instanceInfo=this._instanceInfo.map((Q)=>({...Q})),Y.availableInstanceIds=this._availableInstanceIds.slice(),Y.availableGeometryIds=this._availableGeometryIds.slice(),Y.nextIndexStart=this._nextIndexStart,Y.nextVertexStart=this._nextVertexStart,Y.geometryCount=this._geometryCount,Y.maxInstanceCount=this._maxInstanceCount,Y.maxVertexCount=this._maxVertexCount,Y.maxIndexCount=this._maxIndexCount,Y.geometryInitialized=this._geometryInitialized,Y.matricesTexture=this._matricesTexture.toJSON(J),Y.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Y.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Y.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Y.boundingBox=this.boundingBox.toJSON()}function H(Q,W){if(Q[W.uuid]===void 0)Q[W.uuid]=W.toJSON(J);return W.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Y.background=this.background.toJSON();else if(this.background.isTexture)Y.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Y.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Y.geometry=H(J.geometries,this.geometry);let Q=this.geometry.parameters;if(Q!==void 0&&Q.shapes!==void 0){let W=Q.shapes;if(Array.isArray(W))for(let U=0,G=W.length;U<G;U++){let q=W[U];H(J.shapes,q)}else H(J.shapes,W)}}if(this.isSkinnedMesh){if(Y.bindMode=this.bindMode,Y.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)H(J.skeletons,this.skeleton),Y.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Q=[];for(let W=0,U=this.material.length;W<U;W++)Q.push(H(J.materials,this.material[W]));Y.material=Q}else Y.material=H(J.materials,this.material);if(this.children.length>0){Y.children=[];for(let Q=0;Q<this.children.length;Q++)Y.children.push(this.children[Q].toJSON(J).object)}if(this.animations.length>0){Y.animations=[];for(let Q=0;Q<this.animations.length;Q++){let W=this.animations[Q];Y.animations.push(H(J.animations,W))}}if(w){let Q=X(J.geometries),W=X(J.materials),U=X(J.textures),G=X(J.images),q=X(J.shapes),K=X(J.skeletons),$=X(J.animations),R=X(J.nodes);if(Q.length>0)Z.geometries=Q;if(W.length>0)Z.materials=W;if(U.length>0)Z.textures=U;if(G.length>0)Z.images=G;if(q.length>0)Z.shapes=q;if(K.length>0)Z.skeletons=K;if($.length>0)Z.animations=$;if(R.length>0)Z.nodes=R}return Z.object=Y,Z;function X(Q){let W=[];for(let U in Q){let G=Q[U];delete G.metadata,W.push(G)}return W}}clone(J){return new this.constructor().copy(this,J)}copy(J,w=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),w===!0)for(let Z=0;Z<J.children.length;Z++){let Y=J.children[Z];this.add(Y.clone())}return this}}w8.DEFAULT_UP=new x(0,1,0);w8.DEFAULT_MATRIX_AUTO_UPDATE=!0;w8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var H6=new x,u6=new x,_W=new x,c6=new x,P5=new x,S5=new x,CR=new x,AW=new x,EW=new x,IW=new x,CW=new X9,TW=new X9,PW=new X9;class n8{constructor(J=new x,w=new x,Z=new x){this.a=J,this.b=w,this.c=Z}static getNormal(J,w,Z,Y){Y.subVectors(Z,w),H6.subVectors(J,w),Y.cross(H6);let H=Y.lengthSq();if(H>0)return Y.multiplyScalar(1/Math.sqrt(H));return Y.set(0,0,0)}static getBarycoord(J,w,Z,Y,H){H6.subVectors(Y,w),u6.subVectors(Z,w),_W.subVectors(J,w);let X=H6.dot(H6),Q=H6.dot(u6),W=H6.dot(_W),U=u6.dot(u6),G=u6.dot(_W),q=X*U-Q*Q;if(q===0)return H.set(0,0,0),null;let K=1/q,$=(U*W-Q*G)*K,R=(X*G-Q*W)*K;return H.set(1-$-R,R,$)}static containsPoint(J,w,Z,Y){if(this.getBarycoord(J,w,Z,Y,c6)===null)return!1;return c6.x>=0&&c6.y>=0&&c6.x+c6.y<=1}static getInterpolation(J,w,Z,Y,H,X,Q,W){if(this.getBarycoord(J,w,Z,Y,c6)===null){if(W.x=0,W.y=0,"z"in W)W.z=0;if("w"in W)W.w=0;return null}return W.setScalar(0),W.addScaledVector(H,c6.x),W.addScaledVector(X,c6.y),W.addScaledVector(Q,c6.z),W}static getInterpolatedAttribute(J,w,Z,Y,H,X){return CW.setScalar(0),TW.setScalar(0),PW.setScalar(0),CW.fromBufferAttribute(J,w),TW.fromBufferAttribute(J,Z),PW.fromBufferAttribute(J,Y),X.setScalar(0),X.addScaledVector(CW,H.x),X.addScaledVector(TW,H.y),X.addScaledVector(PW,H.z),X}static isFrontFacing(J,w,Z,Y){return H6.subVectors(Z,w),u6.subVectors(J,w),H6.cross(u6).dot(Y)<0?!0:!1}set(J,w,Z){return this.a.copy(J),this.b.copy(w),this.c.copy(Z),this}setFromPointsAndIndices(J,w,Z,Y){return this.a.copy(J[w]),this.b.copy(J[Z]),this.c.copy(J[Y]),this}setFromAttributeAndIndices(J,w,Z,Y){return this.a.fromBufferAttribute(J,w),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,Y),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return H6.subVectors(this.c,this.b),u6.subVectors(this.a,this.b),H6.cross(u6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return n8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,w){return n8.getBarycoord(J,this.a,this.b,this.c,w)}getInterpolation(J,w,Z,Y,H){return n8.getInterpolation(J,this.a,this.b,this.c,w,Z,Y,H)}containsPoint(J){return n8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return n8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,w){let Z=this.a,Y=this.b,H=this.c,X,Q;P5.subVectors(Y,Z),S5.subVectors(H,Z),AW.subVectors(J,Z);let W=P5.dot(AW),U=S5.dot(AW);if(W<=0&&U<=0)return w.copy(Z);EW.subVectors(J,Y);let G=P5.dot(EW),q=S5.dot(EW);if(G>=0&&q<=G)return w.copy(Y);let K=W*q-G*U;if(K<=0&&W>=0&&G<=0)return X=W/(W-G),w.copy(Z).addScaledVector(P5,X);IW.subVectors(J,H);let $=P5.dot(IW),R=S5.dot(IW);if(R>=0&&$<=R)return w.copy(H);let N=$*U-W*R;if(N<=0&&U>=0&&R<=0)return Q=U/(U-R),w.copy(Z).addScaledVector(S5,Q);let L=G*R-$*q;if(L<=0&&q-G>=0&&$-R>=0)return CR.subVectors(H,Y),Q=(q-G)/(q-G+($-R)),w.copy(Y).addScaledVector(CR,Q);let D=1/(L+N+K);return X=N*D,Q=K*D,w.copy(Z).addScaledVector(P5,X).addScaledVector(S5,Q)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var dD={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},P7={h:0,s:0,l:0},LY={h:0,s:0,l:0};function SW(J,w,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(w-J)*6*Z;if(Z<0.5)return w;if(Z<0.6666666666666666)return J+(w-J)*6*(0.6666666666666666-Z);return J}class d0{constructor(J,w,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,w,Z)}set(J,w,Z){if(w===void 0&&Z===void 0){let Y=J;if(Y&&Y.isColor)this.copy(Y);else if(typeof Y==="number")this.setHex(Y);else if(typeof Y==="string")this.setStyle(Y)}else this.setRGB(J,w,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,w="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,r0.colorSpaceToWorking(this,w),this}setRGB(J,w,Z,Y=r0.workingColorSpace){return this.r=J,this.g=w,this.b=Z,r0.colorSpaceToWorking(this,Y),this}setHSL(J,w,Z,Y=r0.workingColorSpace){if(J=EU(J,1),w=c0(w,0,1),Z=c0(Z,0,1),w===0)this.r=this.g=this.b=Z;else{let H=Z<=0.5?Z*(1+w):Z+w-Z*w,X=2*Z-H;this.r=SW(X,H,J+0.3333333333333333),this.g=SW(X,H,J),this.b=SW(X,H,J-0.3333333333333333)}return r0.colorSpaceToWorking(this,Y),this}setStyle(J,w="srgb"){function Z(H){if(H===void 0)return;if(parseFloat(H)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Y;if(Y=/^(\w+)\(([^\)]*)\)/.exec(J)){let H,X=Y[1],Q=Y[2];switch(X){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,w);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,w);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return Z(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,w);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Y=/^\#([A-Fa-f\d]+)$/.exec(J)){let H=Y[1],X=H.length;if(X===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,w);else if(X===6)return this.setHex(parseInt(H,16),w);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,w);return this}setColorName(J,w="srgb"){let Z=dD[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,w);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s6(J.r),this.g=s6(J.g),this.b=s6(J.b),this}copyLinearToSRGB(J){return this.r=v5(J.r),this.g=v5(J.g),this.b=v5(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return r0.workingToColorSpace(Y8.copy(this),J),Math.round(c0(Y8.r*255,0,255))*65536+Math.round(c0(Y8.g*255,0,255))*256+Math.round(c0(Y8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,w=r0.workingColorSpace){r0.workingToColorSpace(Y8.copy(this),w);let{r:Z,g:Y,b:H}=Y8,X=Math.max(Z,Y,H),Q=Math.min(Z,Y,H),W,U,G=(Q+X)/2;if(Q===X)W=0,U=0;else{let q=X-Q;switch(U=G<=0.5?q/(X+Q):q/(2-X-Q),X){case Z:W=(Y-H)/q+(Y<H?6:0);break;case Y:W=(H-Z)/q+2;break;case H:W=(Z-Y)/q+4;break}W/=6}return J.h=W,J.s=U,J.l=G,J}getRGB(J,w=r0.workingColorSpace){return r0.workingToColorSpace(Y8.copy(this),w),J.r=Y8.r,J.g=Y8.g,J.b=Y8.b,J}getStyle(J="srgb"){r0.workingToColorSpace(Y8.copy(this),J);let{r:w,g:Z,b:Y}=Y8;if(J!=="srgb")return`color(${J} ${w.toFixed(3)} ${Z.toFixed(3)} ${Y.toFixed(3)})`;return`rgb(${Math.round(w*255)},${Math.round(Z*255)},${Math.round(Y*255)})`}offsetHSL(J,w,Z){return this.getHSL(P7),this.setHSL(P7.h+J,P7.s+w,P7.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,w){return this.r=J.r+w.r,this.g=J.g+w.g,this.b=J.b+w.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,w){return this.r+=(J.r-this.r)*w,this.g+=(J.g-this.g)*w,this.b+=(J.b-this.b)*w,this}lerpColors(J,w,Z){return this.r=J.r+(w.r-J.r)*Z,this.g=J.g+(w.g-J.g)*Z,this.b=J.b+(w.b-J.b)*Z,this}lerpHSL(J,w){this.getHSL(P7),J.getHSL(LY);let Z=Kw(P7.h,LY.h,w),Y=Kw(P7.s,LY.s,w),H=Kw(P7.l,LY.l,w);return this.setHSL(Z,Y,H),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let w=this.r,Z=this.g,Y=this.b,H=J.elements;return this.r=H[0]*w+H[3]*Z+H[6]*Y,this.g=H[1]*w+H[4]*Z+H[7]*Y,this.b=H[2]*w+H[5]*Z+H[8]*Y,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,w=0){return this.r=J[w],this.g=J[w+1],this.b=J[w+2],this}toArray(J=[],w=0){return J[w]=this.r,J[w+1]=this.g,J[w+2]=this.b,J}fromBufferAttribute(J,w){return this.r=J.getX(w),this.g=J.getY(w),this.b=J.getZ(w),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Y8=new d0;d0.NAMES=dD;var HL=0;class O1 extends x7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:HL++}),this.uuid=i5(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new d0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let w in J){let Z=J[w];if(Z===void 0){console.warn(`THREE.Material: parameter '${w}' has value of undefined.`);continue}let Y=this[w];if(Y===void 0){console.warn(`THREE.Material: '${w}' is not a property of THREE.${this.type}.`);continue}if(Y&&Y.isColor)Y.set(Z);else if(Y&&Y.isVector3&&(Z&&Z.isVector3))Y.copy(Z);else this[w]=Z}}toJSON(J){let w=J===void 0||typeof J==="string";if(w)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function Y(H){let X=[];for(let Q in H){let W=H[Q];delete W.metadata,X.push(W)}return X}if(w){let H=Y(J.textures),X=Y(J.images);if(H.length>0)Z.textures=H;if(X.length>0)Z.images=X}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let w=J.clippingPlanes,Z=null;if(w!==null){let Y=w.length;Z=new Array(Y);for(let H=0;H!==Y;++H)Z[H]=w[H].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class nY extends O1{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new d0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var y9=new x,BY=new a0,XL=0;class a8{constructor(J,w,Z=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XL++}),this.name="",this.array=J,this.itemSize=w,this.count=J!==void 0?J.length/w:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,w){this.updateRanges.push({start:J,count:w})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,w,Z){J*=this.itemSize,Z*=w.itemSize;for(let Y=0,H=this.itemSize;Y<H;Y++)this.array[J+Y]=w.array[Z+Y];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let w=0,Z=this.count;w<Z;w++)BY.fromBufferAttribute(this,w),BY.applyMatrix3(J),this.setXY(w,BY.x,BY.y);else if(this.itemSize===3)for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyMatrix3(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}applyMatrix4(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyMatrix4(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}applyNormalMatrix(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.applyNormalMatrix(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}transformDirection(J){for(let w=0,Z=this.count;w<Z;w++)y9.fromBufferAttribute(this,w),y9.transformDirection(J),this.setXYZ(w,y9.x,y9.y,y9.z);return this}set(J,w=0){return this.array.set(J,w),this}getComponent(J,w){let Z=this.array[J*this.itemSize+w];if(this.normalized)Z=x5(Z,this.array);return Z}setComponent(J,w,Z){if(this.normalized)Z=U8(Z,this.array);return this.array[J*this.itemSize+w]=Z,this}getX(J){let w=this.array[J*this.itemSize];if(this.normalized)w=x5(w,this.array);return w}setX(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize]=w,this}getY(J){let w=this.array[J*this.itemSize+1];if(this.normalized)w=x5(w,this.array);return w}setY(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+1]=w,this}getZ(J){let w=this.array[J*this.itemSize+2];if(this.normalized)w=x5(w,this.array);return w}setZ(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+2]=w,this}getW(J){let w=this.array[J*this.itemSize+3];if(this.normalized)w=x5(w,this.array);return w}setW(J,w){if(this.normalized)w=U8(w,this.array);return this.array[J*this.itemSize+3]=w,this}setXY(J,w,Z){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this}setXYZ(J,w,Z,Y){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array),Y=U8(Y,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this.array[J+2]=Y,this}setXYZW(J,w,Z,Y,H){if(J*=this.itemSize,this.normalized)w=U8(w,this.array),Z=U8(Z,this.array),Y=U8(Y,this.array),H=U8(H,this.array);return this.array[J+0]=w,this.array[J+1]=Z,this.array[J+2]=Y,this.array[J+3]=H,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class aY extends a8{constructor(J,w,Z){super(new Uint16Array(J),w,Z)}}class rY extends a8{constructor(J,w,Z){super(new Uint32Array(J),w,Z)}}class r8 extends a8{constructor(J,w,Z){super(new Float32Array(J),w,Z)}}var QL=0,o8=new I9,jW=new w8,j5=new x,j8=new M1,Gw=new M1,s9=new x;class a6 extends x7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QL++}),this.uuid=i5(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((IU(J))?rY:aY)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,w){return this.attributes[J]=w,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,w,Z=0){this.groups.push({start:J,count:w,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,w){this.drawRange.start=J,this.drawRange.count=w}applyMatrix4(J){let w=this.attributes.position;if(w!==void 0)w.applyMatrix4(J),w.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let H=new y0().getNormalMatrix(J);Z.applyNormalMatrix(H),Z.needsUpdate=!0}let Y=this.attributes.tangent;if(Y!==void 0)Y.transformDirection(J),Y.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return o8.makeRotationFromQuaternion(J),this.applyMatrix4(o8),this}rotateX(J){return o8.makeRotationX(J),this.applyMatrix4(o8),this}rotateY(J){return o8.makeRotationY(J),this.applyMatrix4(o8),this}rotateZ(J){return o8.makeRotationZ(J),this.applyMatrix4(o8),this}translate(J,w,Z){return o8.makeTranslation(J,w,Z),this.applyMatrix4(o8),this}scale(J,w,Z){return o8.makeScale(J,w,Z),this.applyMatrix4(o8),this}lookAt(J){return jW.lookAt(J),jW.updateMatrix(),this.applyMatrix4(jW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(j5).negate(),this.translate(j5.x,j5.y,j5.z),this}setFromPoints(J){let w=this.getAttribute("position");if(w===void 0){let Z=[];for(let Y=0,H=J.length;Y<H;Y++){let X=J[Y];Z.push(X.x,X.y,X.z||0)}this.setAttribute("position",new r8(Z,3))}else{let Z=Math.min(J.length,w.count);for(let Y=0;Y<Z;Y++){let H=J[Y];w.setXYZ(Y,H.x,H.y,H.z||0)}if(J.length>w.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");w.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new M1;let J=this.attributes.position,w=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),w)for(let Z=0,Y=w.length;Z<Y;Z++){let H=w[Z];if(j8.setFromBufferAttribute(H),this.morphTargetsRelative)s9.addVectors(this.boundingBox.min,j8.min),this.boundingBox.expandByPoint(s9),s9.addVectors(this.boundingBox.max,j8.max),this.boundingBox.expandByPoint(s9);else this.boundingBox.expandByPoint(j8.min),this.boundingBox.expandByPoint(j8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _w;let J=this.attributes.position,w=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(j8.setFromBufferAttribute(J),w)for(let H=0,X=w.length;H<X;H++){let Q=w[H];if(Gw.setFromBufferAttribute(Q),this.morphTargetsRelative)s9.addVectors(j8.min,Gw.min),j8.expandByPoint(s9),s9.addVectors(j8.max,Gw.max),j8.expandByPoint(s9);else j8.expandByPoint(Gw.min),j8.expandByPoint(Gw.max)}j8.getCenter(Z);let Y=0;for(let H=0,X=J.count;H<X;H++)s9.fromBufferAttribute(J,H),Y=Math.max(Y,Z.distanceToSquared(s9));if(w)for(let H=0,X=w.length;H<X;H++){let Q=w[H],W=this.morphTargetsRelative;for(let U=0,G=Q.count;U<G;U++){if(s9.fromBufferAttribute(Q,U),W)j5.fromBufferAttribute(J,U),s9.add(j5);Y=Math.max(Y,Z.distanceToSquared(s9))}}if(this.boundingSphere.radius=Math.sqrt(Y),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,w=this.attributes;if(J===null||w.position===void 0||w.normal===void 0||w.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:Y,uv:H}=w;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new a8(new Float32Array(4*Z.count),4));let X=this.getAttribute("tangent"),Q=[],W=[];for(let A=0;A<Z.count;A++)Q[A]=new x,W[A]=new x;let U=new x,G=new x,q=new x,K=new a0,$=new a0,R=new a0,N=new x,L=new x;function D(A,S,V){U.fromBufferAttribute(Z,A),G.fromBufferAttribute(Z,S),q.fromBufferAttribute(Z,V),K.fromBufferAttribute(H,A),$.fromBufferAttribute(H,S),R.fromBufferAttribute(H,V),G.sub(U),q.sub(U),$.sub(K),R.sub(K);let B=1/($.x*R.y-R.x*$.y);if(!isFinite(B))return;N.copy(G).multiplyScalar(R.y).addScaledVector(q,-$.y).multiplyScalar(B),L.copy(q).multiplyScalar($.x).addScaledVector(G,-R.x).multiplyScalar(B),Q[A].add(N),Q[S].add(N),Q[V].add(N),W[A].add(L),W[S].add(L),W[V].add(L)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let A=0,S=k.length;A<S;++A){let V=k[A],B=V.start,C=V.count;for(let g=B,p=B+C;g<p;g+=3)D(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let O=new x,M=new x,z=new x,T=new x;function E(A){z.fromBufferAttribute(Y,A),T.copy(z);let S=Q[A];O.copy(S),O.sub(z.multiplyScalar(z.dot(S))).normalize(),M.crossVectors(T,S);let B=M.dot(W[A])<0?-1:1;X.setXYZW(A,O.x,O.y,O.z,B)}for(let A=0,S=k.length;A<S;++A){let V=k[A],B=V.start,C=V.count;for(let g=B,p=B+C;g<p;g+=3)E(J.getX(g+0)),E(J.getX(g+1)),E(J.getX(g+2))}}computeVertexNormals(){let J=this.index,w=this.getAttribute("position");if(w!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new a8(new Float32Array(w.count*3),3),this.setAttribute("normal",Z);else for(let K=0,$=Z.count;K<$;K++)Z.setXYZ(K,0,0,0);let Y=new x,H=new x,X=new x,Q=new x,W=new x,U=new x,G=new x,q=new x;if(J)for(let K=0,$=J.count;K<$;K+=3){let R=J.getX(K+0),N=J.getX(K+1),L=J.getX(K+2);Y.fromBufferAttribute(w,R),H.fromBufferAttribute(w,N),X.fromBufferAttribute(w,L),G.subVectors(X,H),q.subVectors(Y,H),G.cross(q),Q.fromBufferAttribute(Z,R),W.fromBufferAttribute(Z,N),U.fromBufferAttribute(Z,L),Q.add(G),W.add(G),U.add(G),Z.setXYZ(R,Q.x,Q.y,Q.z),Z.setXYZ(N,W.x,W.y,W.z),Z.setXYZ(L,U.x,U.y,U.z)}else for(let K=0,$=w.count;K<$;K+=3)Y.fromBufferAttribute(w,K+0),H.fromBufferAttribute(w,K+1),X.fromBufferAttribute(w,K+2),G.subVectors(X,H),q.subVectors(Y,H),G.cross(q),Z.setXYZ(K+0,G.x,G.y,G.z),Z.setXYZ(K+1,G.x,G.y,G.z),Z.setXYZ(K+2,G.x,G.y,G.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let w=0,Z=J.count;w<Z;w++)s9.fromBufferAttribute(J,w),s9.normalize(),J.setXYZ(w,s9.x,s9.y,s9.z)}toNonIndexed(){function J(Q,W){let{array:U,itemSize:G,normalized:q}=Q,K=new U.constructor(W.length*G),$=0,R=0;for(let N=0,L=W.length;N<L;N++){if(Q.isInterleavedBufferAttribute)$=W[N]*Q.data.stride+Q.offset;else $=W[N]*G;for(let D=0;D<G;D++)K[R++]=U[$++]}return new a8(K,G,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let w=new a6,Z=this.index.array,Y=this.attributes;for(let Q in Y){let W=Y[Q],U=J(W,Z);w.setAttribute(Q,U)}let H=this.morphAttributes;for(let Q in H){let W=[],U=H[Q];for(let G=0,q=U.length;G<q;G++){let K=U[G],$=J(K,Z);W.push($)}w.morphAttributes[Q]=W}w.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;for(let Q=0,W=X.length;Q<W;Q++){let U=X[Q];w.addGroup(U.start,U.count,U.materialIndex)}return w}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let W=this.parameters;for(let U in W)if(W[U]!==void 0)J[U]=W[U];return J}J.data={attributes:{}};let w=this.index;if(w!==null)J.data.index={type:w.array.constructor.name,array:Array.prototype.slice.call(w.array)};let Z=this.attributes;for(let W in Z){let U=Z[W];J.data.attributes[W]=U.toJSON(J.data)}let Y={},H=!1;for(let W in this.morphAttributes){let U=this.morphAttributes[W],G=[];for(let q=0,K=U.length;q<K;q++){let $=U[q];G.push($.toJSON(J.data))}if(G.length>0)Y[W]=G,H=!0}if(H)J.data.morphAttributes=Y,J.data.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;if(X.length>0)J.data.groups=JSON.parse(JSON.stringify(X));let Q=this.boundingSphere;if(Q!==null)J.data.boundingSphere=Q.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let w={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let Y=J.attributes;for(let U in Y){let G=Y[U];this.setAttribute(U,G.clone(w))}let H=J.morphAttributes;for(let U in H){let G=[],q=H[U];for(let K=0,$=q.length;K<$;K++)G.push(q[K].clone(w));this.morphAttributes[U]=G}this.morphTargetsRelative=J.morphTargetsRelative;let X=J.groups;for(let U=0,G=X.length;U<G;U++){let q=X[U];this.addGroup(q.start,q.count,q.materialIndex)}let Q=J.boundingBox;if(Q!==null)this.boundingBox=Q.clone();let W=J.boundingSphere;if(W!==null)this.boundingSphere=W.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var TR=new I9,q1=new SU,VY=new _w,PR=new x,_Y=new x,AY=new x,EY=new x,fW=new x,IY=new x,SR=new x,CY=new x;class F8 extends w8{constructor(J=new a6,w=new nY){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=w,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,w){if(super.copy(J,w),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let w=this.geometry.morphAttributes,Z=Object.keys(w);if(Z.length>0){let Y=w[Z[0]];if(Y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,X=Y.length;H<X;H++){let Q=Y[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=H}}}}getVertexPosition(J,w){let Z=this.geometry,Y=Z.attributes.position,H=Z.morphAttributes.position,X=Z.morphTargetsRelative;w.fromBufferAttribute(Y,J);let Q=this.morphTargetInfluences;if(H&&Q){IY.set(0,0,0);for(let W=0,U=H.length;W<U;W++){let G=Q[W],q=H[W];if(G===0)continue;if(fW.fromBufferAttribute(q,J),X)IY.addScaledVector(fW,G);else IY.addScaledVector(fW.sub(w),G)}w.add(IY)}return w}raycast(J,w){let Z=this.geometry,Y=this.material,H=this.matrixWorld;if(Y===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(VY.copy(Z.boundingSphere),VY.applyMatrix4(H),q1.copy(J.ray).recast(J.near),VY.containsPoint(q1.origin)===!1){if(q1.intersectSphere(VY,PR)===null)return;if(q1.origin.distanceToSquared(PR)>(J.far-J.near)**2)return}if(TR.copy(H).invert(),q1.copy(J.ray).applyMatrix4(TR),Z.boundingBox!==null){if(q1.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,w,q1)}_computeIntersections(J,w,Z){let Y,H=this.geometry,X=this.material,Q=H.index,W=H.attributes.position,U=H.attributes.uv,G=H.attributes.uv1,q=H.attributes.normal,K=H.groups,$=H.drawRange;if(Q!==null)if(Array.isArray(X))for(let R=0,N=K.length;R<N;R++){let L=K[R],D=X[L.materialIndex],k=Math.max(L.start,$.start),O=Math.min(Q.count,Math.min(L.start+L.count,$.start+$.count));for(let M=k,z=O;M<z;M+=3){let T=Q.getX(M),E=Q.getX(M+1),A=Q.getX(M+2);if(Y=TY(this,D,J,Z,U,G,q,T,E,A),Y)Y.faceIndex=Math.floor(M/3),Y.face.materialIndex=L.materialIndex,w.push(Y)}}else{let R=Math.max(0,$.start),N=Math.min(Q.count,$.start+$.count);for(let L=R,D=N;L<D;L+=3){let k=Q.getX(L),O=Q.getX(L+1),M=Q.getX(L+2);if(Y=TY(this,X,J,Z,U,G,q,k,O,M),Y)Y.faceIndex=Math.floor(L/3),w.push(Y)}}else if(W!==void 0)if(Array.isArray(X))for(let R=0,N=K.length;R<N;R++){let L=K[R],D=X[L.materialIndex],k=Math.max(L.start,$.start),O=Math.min(W.count,Math.min(L.start+L.count,$.start+$.count));for(let M=k,z=O;M<z;M+=3){let T=M,E=M+1,A=M+2;if(Y=TY(this,D,J,Z,U,G,q,T,E,A),Y)Y.faceIndex=Math.floor(M/3),Y.face.materialIndex=L.materialIndex,w.push(Y)}}else{let R=Math.max(0,$.start),N=Math.min(W.count,$.start+$.count);for(let L=R,D=N;L<D;L+=3){let k=L,O=L+1,M=L+2;if(Y=TY(this,X,J,Z,U,G,q,k,O,M),Y)Y.faceIndex=Math.floor(L/3),w.push(Y)}}}}function WL(J,w,Z,Y,H,X,Q,W){let U;if(w.side===1)U=Y.intersectTriangle(Q,X,H,!0,W);else U=Y.intersectTriangle(H,X,Q,w.side===0,W);if(U===null)return null;CY.copy(W),CY.applyMatrix4(J.matrixWorld);let G=Z.ray.origin.distanceTo(CY);if(G<Z.near||G>Z.far)return null;return{distance:G,point:CY.clone(),object:J}}function TY(J,w,Z,Y,H,X,Q,W,U,G){J.getVertexPosition(W,_Y),J.getVertexPosition(U,AY),J.getVertexPosition(G,EY);let q=WL(J,w,Z,Y,_Y,AY,EY,SR);if(q){let K=new x;if(n8.getBarycoord(SR,_Y,AY,EY,K),H)q.uv=n8.getInterpolatedAttribute(H,W,U,G,K,new a0);if(X)q.uv1=n8.getInterpolatedAttribute(X,W,U,G,K,new a0);if(Q){if(q.normal=n8.getInterpolatedAttribute(Q,W,U,G,K,new x),q.normal.dot(Y.direction)>0)q.normal.multiplyScalar(-1)}let $={a:W,b:U,c:G,normal:new x,materialIndex:0};n8.getNormal(_Y,AY,EY,$.normal),q.face=$,q.barycoord=K}return q}class v7 extends a6{constructor(J=1,w=1,Z=1,Y=1,H=1,X=1){super();this.type="BoxGeometry",this.parameters={width:J,height:w,depth:Z,widthSegments:Y,heightSegments:H,depthSegments:X};let Q=this;Y=Math.floor(Y),H=Math.floor(H),X=Math.floor(X);let W=[],U=[],G=[],q=[],K=0,$=0;R("z","y","x",-1,-1,Z,w,J,X,H,0),R("z","y","x",1,-1,Z,w,-J,X,H,1),R("x","z","y",1,1,J,Z,w,Y,X,2),R("x","z","y",1,-1,J,Z,-w,Y,X,3),R("x","y","z",1,-1,J,w,Z,Y,H,4),R("x","y","z",-1,-1,J,w,-Z,Y,H,5),this.setIndex(W),this.setAttribute("position",new r8(U,3)),this.setAttribute("normal",new r8(G,3)),this.setAttribute("uv",new r8(q,2));function R(N,L,D,k,O,M,z,T,E,A,S){let V=M/E,B=z/A,C=M/2,g=z/2,p=T/2,l=E+1,o=A+1,m=0,t=0,d=new x;for(let a=0;a<o;a++){let X0=a*B-g;for(let B0=0;B0<l;B0++){let g0=B0*V-C;d[N]=g0*k,d[L]=X0*O,d[D]=p,U.push(d.x,d.y,d.z),d[N]=0,d[L]=0,d[D]=T>0?1:-1,G.push(d.x,d.y,d.z),q.push(B0/E),q.push(1-a/A),m+=1}}for(let a=0;a<A;a++)for(let X0=0;X0<E;X0++){let B0=K+X0+l*a,g0=K+X0+l*(a+1),M9=K+(X0+1)+l*(a+1),t0=K+(X0+1)+l*a;W.push(B0,g0,t0),W.push(g0,M9,t0),t+=6}Q.addGroup($,t,S),$+=t,K+=m}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function F1(J){let w={};for(let Z in J){w[Z]={};for(let Y in J[Z]){let H=J[Z][Y];if(H&&(H.isColor||H.isMatrix3||H.isMatrix4||H.isVector2||H.isVector3||H.isVector4||H.isTexture||H.isQuaternion))if(H.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),w[Z][Y]=null;else w[Z][Y]=H.clone();else if(Array.isArray(H))w[Z][Y]=H.slice();else w[Z][Y]=H}}return w}function H8(J){let w={};for(let Z=0;Z<J.length;Z++){let Y=F1(J[Z]);for(let H in Y)w[H]=Y[H]}return w}function UL(J){let w=[];for(let Z=0;Z<J.length;Z++)w.push(J[Z].clone());return w}function jU(J){let w=J.getRenderTarget();if(w===null)return J.outputColorSpace;if(w.isXRRenderTarget===!0)return w.texture.colorSpace;return r0.workingColorSpace}var mD={clone:F1,merge:H8},GL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class N6 extends O1{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GL,this.fragmentShader=qL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=F1(J.uniforms),this.uniformsGroups=UL(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let w=super.toJSON(J);w.glslVersion=this.glslVersion,w.uniforms={};for(let Y in this.uniforms){let X=this.uniforms[Y].value;if(X&&X.isTexture)w.uniforms[Y]={type:"t",value:X.toJSON(J).uuid};else if(X&&X.isColor)w.uniforms[Y]={type:"c",value:X.getHex()};else if(X&&X.isVector2)w.uniforms[Y]={type:"v2",value:X.toArray()};else if(X&&X.isVector3)w.uniforms[Y]={type:"v3",value:X.toArray()};else if(X&&X.isVector4)w.uniforms[Y]={type:"v4",value:X.toArray()};else if(X&&X.isMatrix3)w.uniforms[Y]={type:"m3",value:X.toArray()};else if(X&&X.isMatrix4)w.uniforms[Y]={type:"m4",value:X.toArray()};else w.uniforms[Y]={value:X}}if(Object.keys(this.defines).length>0)w.defines=this.defines;w.vertexShader=this.vertexShader,w.fragmentShader=this.fragmentShader,w.lights=this.lights,w.clipping=this.clipping;let Z={};for(let Y in this.extensions)if(this.extensions[Y]===!0)Z[Y]=!0;if(Object.keys(Z).length>0)w.extensions=Z;return w}}class tY extends w8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new I9,this.projectionMatrix=new I9,this.projectionMatrixInverse=new I9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,w){return super.copy(J,w),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,w){super.updateWorldMatrix(J,w),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var S7=new x,jR=new a0,fR=new a0;class J8 extends tY{constructor(J=50,w=1,Z=0.1,Y=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=Y,this.focus=10,this.aspect=w,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,w){return super.copy(J,w),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let w=0.5*this.getFilmHeight()/J;this.fov=K1*2*Math.atan(w),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(kw*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return K1*2*Math.atan(Math.tan(kw*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,w,Z){S7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),w.set(S7.x,S7.y).multiplyScalar(-J/S7.z),S7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(S7.x,S7.y).multiplyScalar(-J/S7.z)}getViewSize(J,w){return this.getViewBounds(J,jR,fR),w.subVectors(fR,jR)}setViewOffset(J,w,Z,Y,H,X){if(this.aspect=J/w,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=w,this.view.offsetX=Z,this.view.offsetY=Y,this.view.width=H,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,w=J*Math.tan(kw*0.5*this.fov)/this.zoom,Z=2*w,Y=this.aspect*Z,H=-0.5*Y,X=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:W,fullHeight:U}=X;H+=X.offsetX*Y/W,w-=X.offsetY*Z/U,Y*=X.width/W,Z*=X.height/U}let Q=this.filmOffset;if(Q!==0)H+=J*Q/this.getFilmWidth();this.projectionMatrix.makePerspective(H,H+Y,w,w-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let w=super.toJSON(J);if(w.object.fov=this.fov,w.object.zoom=this.zoom,w.object.near=this.near,w.object.far=this.far,w.object.focus=this.focus,w.object.aspect=this.aspect,this.view!==null)w.object.view=Object.assign({},this.view);return w.object.filmGauge=this.filmGauge,w.object.filmOffset=this.filmOffset,w}}var f5=-90,b5=1;class fU extends w8{constructor(J,w,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let Y=new J8(f5,b5,J,w);Y.layers=this.layers,this.add(Y);let H=new J8(f5,b5,J,w);H.layers=this.layers,this.add(H);let X=new J8(f5,b5,J,w);X.layers=this.layers,this.add(X);let Q=new J8(f5,b5,J,w);Q.layers=this.layers,this.add(Q);let W=new J8(f5,b5,J,w);W.layers=this.layers,this.add(W);let U=new J8(f5,b5,J,w);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,w=this.children.concat(),[Z,Y,H,X,Q,W]=w;for(let U of w)this.remove(U);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),Y.up.set(0,1,0),Y.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),X.up.set(0,0,1),X.lookAt(0,-1,0),Q.up.set(0,1,0),Q.lookAt(0,0,1),W.up.set(0,1,0),W.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),Y.up.set(0,-1,0),Y.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),X.up.set(0,0,-1),X.lookAt(0,-1,0),Q.up.set(0,-1,0),Q.lookAt(0,0,1),W.up.set(0,-1,0),W.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of w)this.add(U),U.updateMatrixWorld()}update(J,w){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:Y}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[H,X,Q,W,U,G]=this.children,q=J.getRenderTarget(),K=J.getActiveCubeFace(),$=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let N=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,Y),J.render(w,H),J.setRenderTarget(Z,1,Y),J.render(w,X),J.setRenderTarget(Z,2,Y),J.render(w,Q),J.setRenderTarget(Z,3,Y),J.render(w,W),J.setRenderTarget(Z,4,Y),J.render(w,U),Z.texture.generateMipmaps=N,J.setRenderTarget(Z,5,Y),J.render(w,G),J.setRenderTarget(q,K,$),J.xr.enabled=R,Z.texture.needsPMREMUpdate=!0}}class eY extends G8{constructor(J=[],w=301,Z,Y,H,X,Q,W,U,G){super(J,w,Z,Y,H,X,Q,W,U,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class bU extends n6{constructor(J=1,w={}){super(J,J,w);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},Y=[Z,Z,Z,Z,Z,Z];this.texture=new eY(Y),this._setTextureOptions(w),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,w){this.texture.type=w.type,this.texture.colorSpace=w.colorSpace,this.texture.generateMipmaps=w.generateMipmaps,this.texture.minFilter=w.minFilter,this.texture.magFilter=w.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Y=new v7(5,5,5),H=new N6({name:"CubemapFromEquirect",uniforms:F1(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});H.uniforms.tEquirect.value=w;let X=new F8(Y,H),Q=w.minFilter;if(w.minFilter===1008)w.minFilter=1006;return new fU(1,10,this).update(J,X),w.minFilter=Q,X.geometry.dispose(),X.material.dispose(),this}clear(J,w=!0,Z=!0,Y=!0){let H=J.getRenderTarget();for(let X=0;X<6;X++)J.setRenderTarget(this,X),J.clear(w,Z,Y);J.setRenderTarget(H)}}class h5 extends w8{constructor(){super();this.isGroup=!0,this.type="Group"}}var kL={type:"move"};class Aw{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new h5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new h5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new h5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let w=this._hand;if(w)for(let Z of J.hand.values())this._getHandJoint(w,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,w,Z){let Y=null,H=null,X=null,Q=this._targetRay,W=this._grip,U=this._hand;if(J&&w.session.visibilityState!=="visible-blurred"){if(U&&J.hand){X=!0;for(let N of J.hand.values()){let L=w.getJointPose(N,Z),D=this._getHandJoint(U,N);if(L!==null)D.matrix.fromArray(L.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=L.radius;D.visible=L!==null}let G=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],K=G.position.distanceTo(q.position),$=0.02,R=0.005;if(U.inputState.pinching&&K>$+R)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&K<=$-R)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(W!==null&&J.gripSpace){if(H=w.getPose(J.gripSpace,Z),H!==null){if(W.matrix.fromArray(H.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,H.linearVelocity)W.hasLinearVelocity=!0,W.linearVelocity.copy(H.linearVelocity);else W.hasLinearVelocity=!1;if(H.angularVelocity)W.hasAngularVelocity=!0,W.angularVelocity.copy(H.angularVelocity);else W.hasAngularVelocity=!1}}if(Q!==null){if(Y=w.getPose(J.targetRaySpace,Z),Y===null&&H!==null)Y=H;if(Y!==null){if(Q.matrix.fromArray(Y.transform.matrix),Q.matrix.decompose(Q.position,Q.rotation,Q.scale),Q.matrixWorldNeedsUpdate=!0,Y.linearVelocity)Q.hasLinearVelocity=!0,Q.linearVelocity.copy(Y.linearVelocity);else Q.hasLinearVelocity=!1;if(Y.angularVelocity)Q.hasAngularVelocity=!0,Q.angularVelocity.copy(Y.angularVelocity);else Q.hasAngularVelocity=!1;this.dispatchEvent(kL)}}}if(Q!==null)Q.visible=Y!==null;if(W!==null)W.visible=H!==null;if(U!==null)U.visible=X!==null;return this}_getHandJoint(J,w){if(J.joints[w.jointName]===void 0){let Z=new h5;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[w.jointName]=Z,J.add(Z)}return J.joints[w.jointName]}}class JH extends w8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new X6,this.environmentIntensity=1,this.environmentRotation=new X6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,w){if(super.copy(J,w),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let w=super.toJSON(J);if(this.fog!==null)w.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)w.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)w.object.backgroundIntensity=this.backgroundIntensity;if(w.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)w.object.environmentIntensity=this.environmentIntensity;return w.object.environmentRotation=this.environmentRotation.toArray(),w}}var bW=new x,KL=new x,$L=new y0;class i6{constructor(J=new x(1,0,0),w=0){this.isPlane=!0,this.normal=J,this.constant=w}set(J,w){return this.normal.copy(J),this.constant=w,this}setComponents(J,w,Z,Y){return this.normal.set(J,w,Z),this.constant=Y,this}setFromNormalAndCoplanarPoint(J,w){return this.normal.copy(J),this.constant=-w.dot(this.normal),this}setFromCoplanarPoints(J,w,Z){let Y=bW.subVectors(Z,w).cross(KL.subVectors(J,w)).normalize();return this.setFromNormalAndCoplanarPoint(Y,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,w){return w.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,w){let Z=J.delta(bW),Y=this.normal.dot(Z);if(Y===0){if(this.distanceToPoint(J.start)===0)return w.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/Y;if(H<0||H>1)return null;return w.copy(J.start).addScaledVector(Z,H)}intersectsLine(J){let w=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return w<0&&Z>0||Z<0&&w>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,w){let Z=w||$L.getNormalMatrix(J),Y=this.coplanarPoint(bW).applyMatrix4(J),H=this.normal.applyMatrix3(Z).normalize();return this.constant=-Y.dot(H),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var k1=new _w,RL=new a0(0.5,0.5),PY=new x;class Ew{constructor(J=new i6,w=new i6,Z=new i6,Y=new i6,H=new i6,X=new i6){this.planes=[J,w,Z,Y,H,X]}set(J,w,Z,Y,H,X){let Q=this.planes;return Q[0].copy(J),Q[1].copy(w),Q[2].copy(Z),Q[3].copy(Y),Q[4].copy(H),Q[5].copy(X),this}copy(J){let w=this.planes;for(let Z=0;Z<6;Z++)w[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,w=2000,Z=!1){let Y=this.planes,H=J.elements,X=H[0],Q=H[1],W=H[2],U=H[3],G=H[4],q=H[5],K=H[6],$=H[7],R=H[8],N=H[9],L=H[10],D=H[11],k=H[12],O=H[13],M=H[14],z=H[15];if(Y[0].setComponents(U-X,$-G,D-R,z-k).normalize(),Y[1].setComponents(U+X,$+G,D+R,z+k).normalize(),Y[2].setComponents(U+Q,$+q,D+N,z+O).normalize(),Y[3].setComponents(U-Q,$-q,D-N,z-O).normalize(),Z)Y[4].setComponents(W,K,L,M).normalize(),Y[5].setComponents(U-W,$-K,D-L,z-M).normalize();else if(Y[4].setComponents(U-W,$-K,D-L,z-M).normalize(),w===2000)Y[5].setComponents(U+W,$+K,D+L,z+M).normalize();else if(w===2001)Y[5].setComponents(W,K,L,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+w);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();k1.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let w=J.geometry;if(w.boundingSphere===null)w.computeBoundingSphere();k1.copy(w.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(k1)}intersectsSprite(J){k1.center.set(0,0,0);let w=RL.distanceTo(J.center);return k1.radius=0.7071067811865476+w,k1.applyMatrix4(J.matrixWorld),this.intersectsSphere(k1)}intersectsSphere(J){let w=this.planes,Z=J.center,Y=-J.radius;for(let H=0;H<6;H++)if(w[H].distanceToPoint(Z)<Y)return!1;return!0}intersectsBox(J){let w=this.planes;for(let Z=0;Z<6;Z++){let Y=w[Z];if(PY.x=Y.normal.x>0?J.max.x:J.min.x,PY.y=Y.normal.y>0?J.max.y:J.min.y,PY.z=Y.normal.z>0?J.max.z:J.min.z,Y.distanceToPoint(PY)<0)return!1}return!0}containsPoint(J){let w=this.planes;for(let Z=0;Z<6;Z++)if(w[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wH extends G8{constructor(J,w,Z=1014,Y,H,X,Q=1003,W=1003,U,G=1026,q=1){if(G!==1026&&G!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let K={width:J,height:w,depth:q};super(K,Y,H,X,Q,W,G,Z,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Vw(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let w=super.toJSON(J);if(this.compareFunction!==null)w.compareFunction=this.compareFunction;return w}}class ZH extends G8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Iw extends a6{constructor(J=1,w=1,Z=1,Y=32,H=1,X=!1,Q=0,W=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:w,height:Z,radialSegments:Y,heightSegments:H,openEnded:X,thetaStart:Q,thetaLength:W};let U=this;Y=Math.floor(Y),H=Math.floor(H);let G=[],q=[],K=[],$=[],R=0,N=[],L=Z/2,D=0;if(k(),X===!1){if(J>0)O(!0);if(w>0)O(!1)}this.setIndex(G),this.setAttribute("position",new r8(q,3)),this.setAttribute("normal",new r8(K,3)),this.setAttribute("uv",new r8($,2));function k(){let M=new x,z=new x,T=0,E=(w-J)/Z;for(let A=0;A<=H;A++){let S=[],V=A/H,B=V*(w-J)+J;for(let C=0;C<=Y;C++){let g=C/Y,p=g*W+Q,l=Math.sin(p),o=Math.cos(p);z.x=B*l,z.y=-V*Z+L,z.z=B*o,q.push(z.x,z.y,z.z),M.set(l,E,o).normalize(),K.push(M.x,M.y,M.z),$.push(g,1-V),S.push(R++)}N.push(S)}for(let A=0;A<Y;A++)for(let S=0;S<H;S++){let V=N[S][A],B=N[S+1][A],C=N[S+1][A+1],g=N[S][A+1];if(J>0||S!==0)G.push(V,B,g),T+=3;if(w>0||S!==H-1)G.push(B,C,g),T+=3}U.addGroup(D,T,0),D+=T}function O(M){let z=R,T=new a0,E=new x,A=0,S=M===!0?J:w,V=M===!0?1:-1;for(let C=1;C<=Y;C++)q.push(0,L*V,0),K.push(0,V,0),$.push(0.5,0.5),R++;let B=R;for(let C=0;C<=Y;C++){let p=C/Y*W+Q,l=Math.cos(p),o=Math.sin(p);E.x=S*o,E.y=L*V,E.z=S*l,q.push(E.x,E.y,E.z),K.push(0,V,0),T.x=l*0.5+0.5,T.y=o*0.5*V+0.5,$.push(T.x,T.y),R++}for(let C=0;C<Y;C++){let g=z+C,p=B+C;if(M===!0)G.push(p,p+1,g);else G.push(p+1,p,g);A+=3}U.addGroup(D,A,M===!0?1:2),D+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Iw(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class Cw extends a6{constructor(J=1,w=1,Z=1,Y=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:w,widthSegments:Z,heightSegments:Y};let H=J/2,X=w/2,Q=Math.floor(Z),W=Math.floor(Y),U=Q+1,G=W+1,q=J/Q,K=w/W,$=[],R=[],N=[],L=[];for(let D=0;D<G;D++){let k=D*K-X;for(let O=0;O<U;O++){let M=O*q-H;R.push(M,-k,0),N.push(0,0,1),L.push(O/Q),L.push(1-D/W)}}for(let D=0;D<W;D++)for(let k=0;k<Q;k++){let O=k+U*D,M=k+U*(D+1),z=k+1+U*(D+1),T=k+1+U*D;$.push(O,M,T),$.push(M,z,T)}this.setIndex($),this.setAttribute("position",new r8(R,3)),this.setAttribute("normal",new r8(N,3)),this.setAttribute("uv",new r8(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Cw(J.width,J.height,J.widthSegments,J.heightSegments)}}class Tw extends O1{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new d0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new a0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class YH extends Tw{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new a0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return c0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(w){this.ior=(1+0.4*w)/(1-0.4*w)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new d0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new d0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new d0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class xU extends O1{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class hU extends O1{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function SY(J,w){if(!J||J.constructor===w)return J;if(typeof w.BYTES_PER_ELEMENT==="number")return new w(J);return Array.prototype.slice.call(J)}function DL(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class s5{constructor(J,w,Z,Y){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Y!==void 0?Y:new w.constructor(Z),this.sampleValues=w,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let w=this.parameterPositions,Z=this._cachedIndex,Y=w[Z],H=w[Z-1];J:{w:{let X;Z:{Y:if(!(J<Y)){for(let Q=Z+2;;){if(Y===void 0){if(J<H)break Y;return Z=w.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Q)break;if(H=Y,Y=w[++Z],J<Y)break w}X=w.length;break Z}if(!(J>=H)){let Q=w[1];if(J<Q)Z=2,H=Q;for(let W=Z-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===W)break;if(Y=H,H=w[--Z-1],J>=H)break w}X=Z,Z=0;break Z}break J}while(Z<X){let Q=Z+X>>>1;if(J<w[Q])X=Q;else Z=Q+1}if(Y=w[Z],H=w[Z-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Y===void 0)return Z=w.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,H,Y)}return this.interpolate_(Z,H,J,Y)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let w=this.resultBuffer,Z=this.sampleValues,Y=this.valueSize,H=J*Y;for(let X=0;X!==Y;++X)w[X]=Z[H+X];return w}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vU extends s5{constructor(J,w,Z,Y){super(J,w,Z,Y);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,w,Z){let Y=this.parameterPositions,H=J-2,X=J+1,Q=Y[H],W=Y[X];if(Q===void 0)switch(this.getSettings_().endingStart){case 2401:H=J,Q=2*w-Z;break;case 2402:H=Y.length-2,Q=w+Y[H]-Y[H+1];break;default:H=J,Q=Z}if(W===void 0)switch(this.getSettings_().endingEnd){case 2401:X=J,W=2*Z-w;break;case 2402:X=1,W=Z+Y[1]-Y[0];break;default:X=J-1,W=w}let U=(Z-w)*0.5,G=this.valueSize;this._weightPrev=U/(w-Q),this._weightNext=U/(W-Z),this._offsetPrev=H*G,this._offsetNext=X*G}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=J*Q,U=W-Q,G=this._offsetPrev,q=this._offsetNext,K=this._weightPrev,$=this._weightNext,R=(Z-w)/(Y-w),N=R*R,L=N*R,D=-K*L+2*K*N-K*R,k=(1+K)*L+(-1.5-2*K)*N+(-0.5+K)*R+1,O=(-1-$)*L+(1.5+$)*N+0.5*R,M=$*L-$*N;for(let z=0;z!==Q;++z)H[z]=D*X[G+z]+k*X[U+z]+O*X[W+z]+M*X[q+z];return H}}class yU extends s5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=J*Q,U=W-Q,G=(Z-w)/(Y-w),q=1-G;for(let K=0;K!==Q;++K)H[K]=X[U+K]*q+X[W+K]*G;return H}}class gU extends s5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J){return this.copySampleValue_(J-1)}}class t8{constructor(J,w,Z,Y){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(w===void 0||w.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=SY(w,this.TimeBufferType),this.values=SY(Z,this.ValueBufferType),this.setInterpolation(Y||this.DefaultInterpolation)}static toJSON(J){let w=J.constructor,Z;if(w.toJSON!==this.toJSON)Z=w.toJSON(J);else{Z={name:J.name,times:SY(J.times,Array),values:SY(J.values,Array)};let Y=J.getInterpolation();if(Y!==J.DefaultInterpolation)Z.interpolation=Y}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new gU(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new yU(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new vU(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let w;switch(J){case 2300:w=this.InterpolantFactoryMethodDiscrete;break;case 2301:w=this.InterpolantFactoryMethodLinear;break;case 2302:w=this.InterpolantFactoryMethodSmooth;break}if(w===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=w,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let w=this.times;for(let Z=0,Y=w.length;Z!==Y;++Z)w[Z]+=J}return this}scale(J){if(J!==1){let w=this.times;for(let Z=0,Y=w.length;Z!==Y;++Z)w[Z]*=J}return this}trim(J,w){let Z=this.times,Y=Z.length,H=0,X=Y-1;while(H!==Y&&Z[H]<J)++H;while(X!==-1&&Z[X]>w)--X;if(++X,H!==0||X!==Y){if(H>=X)X=Math.max(X,1),H=X-1;let Q=this.getValueSize();this.times=Z.slice(H,X),this.values=this.values.slice(H*Q,X*Q)}return this}validate(){let J=!0,w=this.getValueSize();if(w-Math.floor(w)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,Y=this.values,H=Z.length;if(H===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let X=null;for(let Q=0;Q!==H;Q++){let W=Z[Q];if(typeof W==="number"&&isNaN(W)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Q,W),J=!1;break}if(X!==null&&X>W){console.error("THREE.KeyframeTrack: Out of order keys.",this,Q,W,X),J=!1;break}X=W}if(Y!==void 0){if(DL(Y))for(let Q=0,W=Y.length;Q!==W;++Q){let U=Y[Q];if(isNaN(U)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Q,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),w=this.values.slice(),Z=this.getValueSize(),Y=this.getInterpolation()===2302,H=J.length-1,X=1;for(let Q=1;Q<H;++Q){let W=!1,U=J[Q],G=J[Q+1];if(U!==G&&(Q!==1||U!==J[0]))if(!Y){let q=Q*Z,K=q-Z,$=q+Z;for(let R=0;R!==Z;++R){let N=w[q+R];if(N!==w[K+R]||N!==w[$+R]){W=!0;break}}}else W=!0;if(W){if(Q!==X){J[X]=J[Q];let q=Q*Z,K=X*Z;for(let $=0;$!==Z;++$)w[K+$]=w[q+$]}++X}}if(H>0){J[X]=J[H];for(let Q=H*Z,W=X*Z,U=0;U!==Z;++U)w[W+U]=w[Q+U];++X}if(X!==J.length)this.times=J.slice(0,X),this.values=w.slice(0,X*Z);else this.times=J,this.values=w;return this}clone(){let J=this.times.slice(),w=this.values.slice(),Y=new this.constructor(this.name,J,w);return Y.createInterpolant=this.createInterpolant,Y}}t8.prototype.ValueTypeName="";t8.prototype.TimeBufferType=Float32Array;t8.prototype.ValueBufferType=Float32Array;t8.prototype.DefaultInterpolation=2301;class N1 extends t8{constructor(J,w,Z){super(J,w,Z)}}N1.prototype.ValueTypeName="bool";N1.prototype.ValueBufferType=Array;N1.prototype.DefaultInterpolation=2300;N1.prototype.InterpolantFactoryMethodLinear=void 0;N1.prototype.InterpolantFactoryMethodSmooth=void 0;class lU extends t8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}lU.prototype.ValueTypeName="color";class pU extends t8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}pU.prototype.ValueTypeName="number";class dU extends s5{constructor(J,w,Z,Y){super(J,w,Z,Y)}interpolate_(J,w,Z,Y){let H=this.resultBuffer,X=this.sampleValues,Q=this.valueSize,W=(Z-w)/(Y-w),U=J*Q;for(let G=U+Q;U!==G;U+=4)h7.slerpFlat(H,0,X,U-Q,X,U,W);return H}}class HH extends t8{constructor(J,w,Z,Y){super(J,w,Z,Y)}InterpolantFactoryMethodLinear(J){return new dU(this.times,this.values,this.getValueSize(),J)}}HH.prototype.ValueTypeName="quaternion";HH.prototype.InterpolantFactoryMethodSmooth=void 0;class z1 extends t8{constructor(J,w,Z){super(J,w,Z)}}z1.prototype.ValueTypeName="string";z1.prototype.ValueBufferType=Array;z1.prototype.DefaultInterpolation=2300;z1.prototype.InterpolantFactoryMethodLinear=void 0;z1.prototype.InterpolantFactoryMethodSmooth=void 0;class mU extends t8{constructor(J,w,Z,Y){super(J,w,Z,Y)}}mU.prototype.ValueTypeName="vector";class uU{constructor(J,w,Z){let Y=this,H=!1,X=0,Q=0,W=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=w,this.onError=Z,this.abortController=new AbortController,this.itemStart=function(G){if(Q++,H===!1){if(Y.onStart!==void 0)Y.onStart(G,X,Q)}H=!0},this.itemEnd=function(G){if(X++,Y.onProgress!==void 0)Y.onProgress(G,X,Q);if(X===Q){if(H=!1,Y.onLoad!==void 0)Y.onLoad()}},this.itemError=function(G){if(Y.onError!==void 0)Y.onError(G)},this.resolveURL=function(G){if(W)return W(G);return G},this.setURLModifier=function(G){return W=G,this},this.addHandler=function(G,q){return U.push(G,q),this},this.removeHandler=function(G){let q=U.indexOf(G);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(G){for(let q=0,K=U.length;q<K;q+=2){let $=U[q],R=U[q+1];if($.global)$.lastIndex=0;if($.test(G))return R}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var uD=new uU;class cU{constructor(J){this.manager=J!==void 0?J:uD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,w){let Z=this;return new Promise(function(Y,H){Z.load(J,Y,w,H)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}cU.DEFAULT_MATERIAL_NAME="__DEFAULT";class Pw extends w8{constructor(J,w=1){super();this.isLight=!0,this.type="Light",this.color=new d0(J),this.intensity=w}dispose(){}copy(J,w){return super.copy(J,w),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let w=super.toJSON(J);if(w.object.color=this.color.getHex(),w.object.intensity=this.intensity,this.groundColor!==void 0)w.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)w.object.distance=this.distance;if(this.angle!==void 0)w.object.angle=this.angle;if(this.decay!==void 0)w.object.decay=this.decay;if(this.penumbra!==void 0)w.object.penumbra=this.penumbra;if(this.shadow!==void 0)w.object.shadow=this.shadow.toJSON();if(this.target!==void 0)w.object.target=this.target.uuid;return w}}var xW=new I9,bR=new x,xR=new x;class iU{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new a0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new I9,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ew,this._frameExtents=new a0(1,1),this._viewportCount=1,this._viewports=[new X9(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let w=this.camera,Z=this.matrix;if(bR.setFromMatrixPosition(J.matrixWorld),w.position.copy(bR),xR.setFromMatrixPosition(J.target.matrixWorld),w.lookAt(xR),w.updateMatrixWorld(),xW.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xW,w.coordinateSystem,w.reversedDepth),w.reversedDepth)Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Z.multiply(xW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class cD extends iU{constructor(){super(new J8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let w=this.camera,Z=K1*2*J.angle*this.focus,Y=this.mapSize.width/this.mapSize.height*this.aspect,H=J.distance||w.far;if(Z!==w.fov||Y!==w.aspect||H!==w.far)w.fov=Z,w.aspect=Y,w.far=H,w.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class XH extends Pw{constructor(J,w,Z=0,Y=Math.PI/3,H=0,X=2){super(J,w);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(w8.DEFAULT_UP),this.updateMatrix(),this.target=new w8,this.distance=Z,this.angle=Y,this.penumbra=H,this.decay=X,this.map=null,this.shadow=new cD}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,w){return super.copy(J,w),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var hR=new I9,qw=new x,hW=new x;class iD extends iU{constructor(){super(new J8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new a0(4,2),this._viewportCount=6,this._viewports=[new X9(2,1,1,1),new X9(0,1,1,1),new X9(3,1,1,1),new X9(1,1,1,1),new X9(3,0,1,1),new X9(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(J,w=0){let Z=this.camera,Y=this.matrix,H=J.distance||Z.far;if(H!==Z.far)Z.far=H,Z.updateProjectionMatrix();qw.setFromMatrixPosition(J.matrixWorld),Z.position.copy(qw),hW.copy(Z.position),hW.add(this._cubeDirections[w]),Z.up.copy(this._cubeUps[w]),Z.lookAt(hW),Z.updateMatrixWorld(),Y.makeTranslation(-qw.x,-qw.y,-qw.z),hR.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hR,Z.coordinateSystem,Z.reversedDepth)}}class Sw extends Pw{constructor(J,w,Z=0,Y=2){super(J,w);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=Y,this.shadow=new iD}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,w){return super.copy(J,w),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class sU extends tY{constructor(J=-1,w=1,Z=1,Y=-1,H=0.1,X=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=w,this.top=Z,this.bottom=Y,this.near=H,this.far=X,this.updateProjectionMatrix()}copy(J,w){return super.copy(J,w),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,w,Z,Y,H,X){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=w,this.view.offsetX=Z,this.view.offsetY=Y,this.view.width=H,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),w=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,Y=(this.top+this.bottom)/2,H=Z-J,X=Z+J,Q=Y+w,W=Y-w;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=U*this.view.offsetX,X=H+U*this.view.width,Q-=G*this.view.offsetY,W=Q-G*this.view.height}this.projectionMatrix.makeOrthographic(H,X,Q,W,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let w=super.toJSON(J);if(w.object.zoom=this.zoom,w.object.left=this.left,w.object.right=this.right,w.object.top=this.top,w.object.bottom=this.bottom,w.object.near=this.near,w.object.far=this.far,this.view!==null)w.object.view=Object.assign({},this.view);return w}}class QH extends Pw{constructor(J,w){super(J,w);this.isAmbientLight=!0,this.type="AmbientLight"}}class oU extends J8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class WH{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let w=performance.now();J=(w-this.oldTime)/1000,this.oldTime=w,this.elapsedTime+=J}return J}}var nU="\\[\\]\\.:\\/",ML=new RegExp("["+nU+"]","g"),aU="[^"+nU+"]",OL="[^"+nU.replace("\\.","")+"]",FL=/((?:WC+[\/:])*)/.source.replace("WC",aU),NL=/(WCOD+)?/.source.replace("WCOD",OL),zL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aU),LL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aU),BL=new RegExp("^"+FL+NL+zL+LL+"$"),VL=["material","materials","bones","map"];class sD{constructor(J,w,Z){let Y=Z||H9.parseTrackName(w);this._targetGroup=J,this._bindings=J.subscribe_(w,Y)}getValue(J,w){this.bind();let Z=this._targetGroup.nCachedObjects_,Y=this._bindings[Z];if(Y!==void 0)Y.getValue(J,w)}setValue(J,w){let Z=this._bindings;for(let Y=this._targetGroup.nCachedObjects_,H=Z.length;Y!==H;++Y)Z[Y].setValue(J,w)}bind(){let J=this._bindings;for(let w=this._targetGroup.nCachedObjects_,Z=J.length;w!==Z;++w)J[w].bind()}unbind(){let J=this._bindings;for(let w=this._targetGroup.nCachedObjects_,Z=J.length;w!==Z;++w)J[w].unbind()}}class H9{constructor(J,w,Z){this.path=w,this.parsedPath=Z||H9.parseTrackName(w),this.node=H9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,w,Z){if(!(J&&J.isAnimationObjectGroup))return new H9(J,w,Z);else return new H9.Composite(J,w,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(ML,"")}static parseTrackName(J){let w=BL.exec(J);if(w===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:w[2],objectName:w[3],objectIndex:w[4],propertyName:w[5],propertyIndex:w[6]},Y=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(Y!==void 0&&Y!==-1){let H=Z.nodeName.substring(Y+1);if(VL.indexOf(H)!==-1)Z.nodeName=Z.nodeName.substring(0,Y),Z.objectName=H}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,w){if(w===void 0||w===""||w==="."||w===-1||w===J.name||w===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(w);if(Z!==void 0)return Z}if(J.children){let Z=function(H){for(let X=0;X<H.length;X++){let Q=H[X];if(Q.name===w||Q.uuid===w)return Q;let W=Z(Q.children);if(W)return W}return null},Y=Z(J.children);if(Y)return Y}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,w){J[w]=this.targetObject[this.propertyName]}_getValue_array(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)J[w++]=Z[Y]}_getValue_arrayElement(J,w){J[w]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,w){this.resolvedProperty.toArray(J,w)}_setValue_direct(J,w){this.targetObject[this.propertyName]=J[w]}_setValue_direct_setNeedsUpdate(J,w){this.targetObject[this.propertyName]=J[w],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,w){this.targetObject[this.propertyName]=J[w],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++]}_setValue_array_setNeedsUpdate(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,w){let Z=this.resolvedProperty;for(let Y=0,H=Z.length;Y!==H;++Y)Z[Y]=J[w++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,w){this.resolvedProperty[this.propertyIndex]=J[w]}_setValue_arrayElement_setNeedsUpdate(J,w){this.resolvedProperty[this.propertyIndex]=J[w],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,w){this.resolvedProperty[this.propertyIndex]=J[w],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,w){this.resolvedProperty.fromArray(J,w)}_setValue_fromArray_setNeedsUpdate(J,w){this.resolvedProperty.fromArray(J,w),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,w){this.resolvedProperty.fromArray(J,w),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,w){this.bind(),this.getValue(J,w)}_setValue_unbound(J,w){this.bind(),this.setValue(J,w)}bind(){let J=this.node,w=this.parsedPath,Z=w.objectName,Y=w.propertyName,H=w.propertyIndex;if(!J)J=H9.findNode(this.rootNode,w.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let U=w.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===U){U=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(U!==void 0){if(J[U]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let X=J[Y];if(X===void 0){let U=w.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+U+"."+Y+" but it wasn't found.",J);return}let Q=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Q=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Q=this.Versioning.MatrixWorldNeedsUpdate;let W=this.BindingType.Direct;if(H!==void 0){if(Y==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[H]!==void 0)H=J.morphTargetDictionary[H]}W=this.BindingType.ArrayElement,this.resolvedProperty=X,this.propertyIndex=H}else if(X.fromArray!==void 0&&X.toArray!==void 0)W=this.BindingType.HasFromToArray,this.resolvedProperty=X;else if(Array.isArray(X))W=this.BindingType.EntireArray,this.resolvedProperty=X;else this.propertyName=Y;this.getValue=this.GetterByBindingType[W],this.setValue=this.SetterByBindingTypeAndVersioning[W][Q]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}H9.Composite=sD;H9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};H9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};H9.prototype.GetterByBindingType=[H9.prototype._getValue_direct,H9.prototype._getValue_array,H9.prototype._getValue_arrayElement,H9.prototype._getValue_toArray];H9.prototype.SetterByBindingTypeAndVersioning=[[H9.prototype._setValue_direct,H9.prototype._setValue_direct_setNeedsUpdate,H9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[H9.prototype._setValue_array,H9.prototype._setValue_array_setNeedsUpdate,H9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[H9.prototype._setValue_arrayElement,H9.prototype._setValue_arrayElement_setNeedsUpdate,H9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[H9.prototype._setValue_fromArray,H9.prototype._setValue_fromArray_setNeedsUpdate,H9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);function rU(J,w,Z,Y){let H=_L(Y);switch(Z){case 1021:return J*w;case 1028:return J*w/H.components*H.byteLength;case 1029:return J*w/H.components*H.byteLength;case 1030:return J*w*2/H.components*H.byteLength;case 1031:return J*w*2/H.components*H.byteLength;case 1022:return J*w*3/H.components*H.byteLength;case 1023:return J*w*4/H.components*H.byteLength;case 1033:return J*w*4/H.components*H.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(w,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(w,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((w+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((w+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((w+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((w+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((w+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((w+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((w+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((w+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((w+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((w+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((w+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((w+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((w+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((w+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(w/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(w/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(w/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function _L(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function OM(){let J=null,w=!1,Z=null,Y=null;function H(X,Q){Z(X,Q),Y=J.requestAnimationFrame(H)}return{start:function(){if(w===!0)return;if(Z===null)return;Y=J.requestAnimationFrame(H),w=!0},stop:function(){J.cancelAnimationFrame(Y),w=!1},setAnimationLoop:function(X){Z=X},setContext:function(X){J=X}}}function AL(J){let w=new WeakMap;function Z(W,U){let{array:G,usage:q}=W,K=G.byteLength,$=J.createBuffer();J.bindBuffer(U,$),J.bufferData(U,G,q),W.onUploadCallback();let R;if(G instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array!=="undefined"&&G instanceof Float16Array)R=J.HALF_FLOAT;else if(G instanceof Uint16Array)if(W.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)R=J.SHORT;else if(G instanceof Uint32Array)R=J.UNSIGNED_INT;else if(G instanceof Int32Array)R=J.INT;else if(G instanceof Int8Array)R=J.BYTE;else if(G instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:$,type:R,bytesPerElement:G.BYTES_PER_ELEMENT,version:W.version,size:K}}function Y(W,U,G){let{array:q,updateRanges:K}=U;if(J.bindBuffer(G,W),K.length===0)J.bufferSubData(G,0,q);else{K.sort((R,N)=>R.start-N.start);let $=0;for(let R=1;R<K.length;R++){let N=K[$],L=K[R];if(L.start<=N.start+N.count+1)N.count=Math.max(N.count,L.start+L.count-N.start);else++$,K[$]=L}K.length=$+1;for(let R=0,N=K.length;R<N;R++){let L=K[R];J.bufferSubData(G,L.start*q.BYTES_PER_ELEMENT,q,L.start,L.count)}U.clearUpdateRanges()}U.onUploadCallback()}function H(W){if(W.isInterleavedBufferAttribute)W=W.data;return w.get(W)}function X(W){if(W.isInterleavedBufferAttribute)W=W.data;let U=w.get(W);if(U)J.deleteBuffer(U.buffer),w.delete(W)}function Q(W,U){if(W.isInterleavedBufferAttribute)W=W.data;if(W.isGLBufferAttribute){let q=w.get(W);if(!q||q.version<W.version)w.set(W,{buffer:W.buffer,type:W.type,bytesPerElement:W.elementSize,version:W.version});return}let G=w.get(W);if(G===void 0)w.set(W,Z(W,U));else if(G.version<W.version){if(G.size!==W.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Y(G.buffer,W,U),G.version=W.version}}return{get:H,remove:X,update:Q}}var EL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IL=`#ifdef USE_ALPHAHASH
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
#endif`,CL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jL=`#ifdef USE_AOMAP
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
#endif`,fL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bL=`#ifdef USE_BATCHING
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
#endif`,xL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gL=`#ifdef USE_IRIDESCENCE
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
#endif`,lL=`#ifdef USE_BUMPMAP
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
#endif`,pL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oL=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nL=`#define PI 3.141592653589793
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
} // validated`,aL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rL=`vec3 transformedNormal = objectNormal;
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
#endif`,tL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZB="gl_FragColor = linearToOutputTexel( gl_FragColor );",YB=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HB=`#ifdef USE_ENVMAP
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
#endif`,XB=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QB=`#ifdef USE_ENVMAP
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
#endif`,WB=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UB=`#ifdef USE_ENVMAP
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
#endif`,GB=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kB=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KB=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$B=`#ifdef USE_GRADIENTMAP
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
}`,RB=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DB=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OB=`uniform bool receiveShadow;
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
#endif`,FB=`#ifdef USE_ENVMAP
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
#endif`,NB=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LB=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VB=`PhysicalMaterial material;
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
#endif`,_B=`struct PhysicalMaterial {
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
}`,AB=`
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
#endif`,EB=`#if defined( RE_IndirectDiffuse )
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
#endif`,IB=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CB=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TB=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jB=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xB=`#if defined( USE_POINTS_UV )
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
#endif`,hB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pB=`#ifdef USE_MORPHTARGETS
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
#endif`,dB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uB=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oB=`#ifdef USE_NORMALMAP
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
#endif`,nB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q4=`float getShadowMask() {
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
}`,k4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K4=`#ifdef USE_SKINNING
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
#endif`,$4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R4=`#ifdef USE_SKINNING
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
#endif`,D4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N4=`#ifdef USE_TRANSMISSION
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
#endif`,z4=`#ifdef USE_TRANSMISSION
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
#endif`,L4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E4=`uniform sampler2D t2D;
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
}`,I4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S4=`#include <common>
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
}`,j4=`#if DEPTH_PACKING == 3200
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
}`,f4=`#define DISTANCE
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
}`,b4=`#define DISTANCE
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
}`,x4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v4=`uniform float scale;
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
}`,y4=`uniform vec3 diffuse;
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
}`,g4=`#include <common>
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
}`,l4=`uniform vec3 diffuse;
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
}`,p4=`#define LAMBERT
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
}`,d4=`#define LAMBERT
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
}`,m4=`#define MATCAP
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
}`,u4=`#define MATCAP
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
}`,c4=`#define NORMAL
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
}`,i4=`#define NORMAL
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
}`,s4=`#define PHONG
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
}`,o4=`#define PHONG
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
}`,n4=`#define STANDARD
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
}`,a4=`#define STANDARD
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
}`,r4=`#define TOON
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
}`,t4=`#define TOON
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
}`,e4=`uniform float size;
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
}`,J2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,Z2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,H2=`uniform vec3 diffuse;
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
}`,l0={alphahash_fragment:EL,alphahash_pars_fragment:IL,alphamap_fragment:CL,alphamap_pars_fragment:TL,alphatest_fragment:PL,alphatest_pars_fragment:SL,aomap_fragment:jL,aomap_pars_fragment:fL,batching_pars_vertex:bL,batching_vertex:xL,begin_vertex:hL,beginnormal_vertex:vL,bsdfs:yL,iridescence_fragment:gL,bumpmap_pars_fragment:lL,clipping_planes_fragment:pL,clipping_planes_pars_fragment:dL,clipping_planes_pars_vertex:mL,clipping_planes_vertex:uL,color_fragment:cL,color_pars_fragment:iL,color_pars_vertex:sL,color_vertex:oL,common:nL,cube_uv_reflection_fragment:aL,defaultnormal_vertex:rL,displacementmap_pars_vertex:tL,displacementmap_vertex:eL,emissivemap_fragment:JB,emissivemap_pars_fragment:wB,colorspace_fragment:ZB,colorspace_pars_fragment:YB,envmap_fragment:HB,envmap_common_pars_fragment:XB,envmap_pars_fragment:QB,envmap_pars_vertex:WB,envmap_physical_pars_fragment:FB,envmap_vertex:UB,fog_vertex:GB,fog_pars_vertex:qB,fog_fragment:kB,fog_pars_fragment:KB,gradientmap_pars_fragment:$B,lightmap_pars_fragment:RB,lights_lambert_fragment:DB,lights_lambert_pars_fragment:MB,lights_pars_begin:OB,lights_toon_fragment:NB,lights_toon_pars_fragment:zB,lights_phong_fragment:LB,lights_phong_pars_fragment:BB,lights_physical_fragment:VB,lights_physical_pars_fragment:_B,lights_fragment_begin:AB,lights_fragment_maps:EB,lights_fragment_end:IB,logdepthbuf_fragment:CB,logdepthbuf_pars_fragment:TB,logdepthbuf_pars_vertex:PB,logdepthbuf_vertex:SB,map_fragment:jB,map_pars_fragment:fB,map_particle_fragment:bB,map_particle_pars_fragment:xB,metalnessmap_fragment:hB,metalnessmap_pars_fragment:vB,morphinstance_vertex:yB,morphcolor_vertex:gB,morphnormal_vertex:lB,morphtarget_pars_vertex:pB,morphtarget_vertex:dB,normal_fragment_begin:mB,normal_fragment_maps:uB,normal_pars_fragment:cB,normal_pars_vertex:iB,normal_vertex:sB,normalmap_pars_fragment:oB,clearcoat_normal_fragment_begin:nB,clearcoat_normal_fragment_maps:aB,clearcoat_pars_fragment:rB,iridescence_pars_fragment:tB,opaque_fragment:eB,packing:J4,premultiplied_alpha_fragment:w4,project_vertex:Z4,dithering_fragment:Y4,dithering_pars_fragment:H4,roughnessmap_fragment:X4,roughnessmap_pars_fragment:Q4,shadowmap_pars_fragment:W4,shadowmap_pars_vertex:U4,shadowmap_vertex:G4,shadowmask_pars_fragment:q4,skinbase_vertex:k4,skinning_pars_vertex:K4,skinning_vertex:$4,skinnormal_vertex:R4,specularmap_fragment:D4,specularmap_pars_fragment:M4,tonemapping_fragment:O4,tonemapping_pars_fragment:F4,transmission_fragment:N4,transmission_pars_fragment:z4,uv_pars_fragment:L4,uv_pars_vertex:B4,uv_vertex:V4,worldpos_vertex:_4,background_vert:A4,background_frag:E4,backgroundCube_vert:I4,backgroundCube_frag:C4,cube_vert:T4,cube_frag:P4,depth_vert:S4,depth_frag:j4,distanceRGBA_vert:f4,distanceRGBA_frag:b4,equirect_vert:x4,equirect_frag:h4,linedashed_vert:v4,linedashed_frag:y4,meshbasic_vert:g4,meshbasic_frag:l4,meshlambert_vert:p4,meshlambert_frag:d4,meshmatcap_vert:m4,meshmatcap_frag:u4,meshnormal_vert:c4,meshnormal_frag:i4,meshphong_vert:s4,meshphong_frag:o4,meshphysical_vert:n4,meshphysical_frag:a4,meshtoon_vert:r4,meshtoon_frag:t4,points_vert:e4,points_frag:J2,shadow_vert:w2,shadow_frag:Z2,sprite_vert:Y2,sprite_frag:H2},Q0={common:{diffuse:{value:new d0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new a0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new d0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new d0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new d0(16777215)},opacity:{value:1},center:{value:new a0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},z6={basic:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new d0(0)}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:H8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new d0(0)},specular:{value:new d0(1118481)},shininess:{value:30}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:H8([Q0.common,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.roughnessmap,Q0.metalnessmap,Q0.fog,Q0.lights,{emissive:{value:new d0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:H8([Q0.common,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.gradientmap,Q0.fog,Q0.lights,{emissive:{value:new d0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:H8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:H8([Q0.points,Q0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:H8([Q0.common,Q0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:H8([Q0.common,Q0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:H8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:H8([Q0.sprite,Q0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distanceRGBA:{uniforms:H8([Q0.common,Q0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distanceRGBA_vert,fragmentShader:l0.distanceRGBA_frag},shadow:{uniforms:H8([Q0.lights,Q0.fog,{color:{value:new d0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};z6.physical={uniforms:H8([z6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new a0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new d0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new a0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new d0(0)},specularColor:{value:new d0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new a0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var UH={r:0,b:0,g:0},L1=new X6,X2=new I9;function Q2(J,w,Z,Y,H,X,Q){let W=new d0(0),U=X===!0?0:1,G,q,K=null,$=0,R=null;function N(M){let z=M.isScene===!0?M.background:null;if(z&&z.isTexture)z=(M.backgroundBlurriness>0?Z:w).get(z);return z}function L(M){let z=!1,T=N(M);if(T===null)k(W,U);else if(T&&T.isColor)k(T,1),z=!0;let E=J.xr.getEnvironmentBlendMode();if(E==="additive")Y.buffers.color.setClear(0,0,0,1,Q);else if(E==="alpha-blend")Y.buffers.color.setClear(0,0,0,0,Q);if(J.autoClear||z)Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(M,z){let T=N(z);if(T&&(T.isCubeTexture||T.mapping===Mw)){if(q===void 0)q=new F8(new v7(1,1,1),new N6({name:"BackgroundCubeMaterial",uniforms:F1(z6.backgroundCube.uniforms),vertexShader:z6.backgroundCube.vertexShader,fragmentShader:z6.backgroundCube.fragmentShader,side:f8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(E,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),H.update(q);if(L1.copy(z.backgroundRotation),L1.x*=-1,L1.y*=-1,L1.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)L1.y*=-1,L1.z*=-1;if(q.material.uniforms.envMap.value=T,q.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,q.material.uniforms.backgroundRotation.value.setFromMatrix4(X2.makeRotationFromEuler(L1)),q.material.toneMapped=r0.getTransfer(T.colorSpace)!==D9,K!==T||$!==T.version||R!==J.toneMapping)q.material.needsUpdate=!0,K=T,$=T.version,R=J.toneMapping;q.layers.enableAll(),M.unshift(q,q.geometry,q.material,0,0,null)}else if(T&&T.isTexture){if(G===void 0)G=new F8(new Cw(2,2),new N6({name:"BackgroundMaterial",uniforms:F1(z6.background.uniforms),vertexShader:z6.background.vertexShader,fragmentShader:z6.background.fragmentShader,side:g5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),H.update(G);if(G.material.uniforms.t2D.value=T,G.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,G.material.toneMapped=r0.getTransfer(T.colorSpace)!==D9,T.matrixAutoUpdate===!0)T.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(T.matrix),K!==T||$!==T.version||R!==J.toneMapping)G.material.needsUpdate=!0,K=T,$=T.version,R=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}}function k(M,z){M.getRGB(UH,jU(J)),Y.buffers.color.setClear(UH.r,UH.g,UH.b,z,Q)}function O(){if(q!==void 0)q.geometry.dispose(),q.material.dispose(),q=void 0;if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0}return{getClearColor:function(){return W},setClearColor:function(M,z=1){W.set(M),U=z,k(W,U)},getClearAlpha:function(){return U},setClearAlpha:function(M){U=M,k(W,U)},render:L,addToRenderList:D,dispose:O}}function W2(J,w){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),Y={},H=$(null),X=H,Q=!1;function W(B,C,g,p,l){let o=!1,m=K(p,g,C);if(X!==m)X=m,G(X.object);if(o=R(B,p,g,l),o)N(B,p,g,l);if(l!==null)w.update(l,J.ELEMENT_ARRAY_BUFFER);if(o||Q){if(Q=!1,z(B,C,g,p),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,w.get(l).buffer)}}function U(){return J.createVertexArray()}function G(B){return J.bindVertexArray(B)}function q(B){return J.deleteVertexArray(B)}function K(B,C,g){let p=g.wireframe===!0,l=Y[B.id];if(l===void 0)l={},Y[B.id]=l;let o=l[C.id];if(o===void 0)o={},l[C.id]=o;let m=o[p];if(m===void 0)m=$(U()),o[p]=m;return m}function $(B){let C=[],g=[],p=[];for(let l=0;l<Z;l++)C[l]=0,g[l]=0,p[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:g,attributeDivisors:p,object:B,attributes:{},index:null}}function R(B,C,g,p){let l=X.attributes,o=C.attributes,m=0,t=g.getAttributes();for(let d in t)if(t[d].location>=0){let X0=l[d],B0=o[d];if(B0===void 0){if(d==="instanceMatrix"&&B.instanceMatrix)B0=B.instanceMatrix;if(d==="instanceColor"&&B.instanceColor)B0=B.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==B0)return!0;if(B0&&X0.data!==B0.data)return!0;m++}if(X.attributesNum!==m)return!0;if(X.index!==p)return!0;return!1}function N(B,C,g,p){let l={},o=C.attributes,m=0,t=g.getAttributes();for(let d in t)if(t[d].location>=0){let X0=o[d];if(X0===void 0){if(d==="instanceMatrix"&&B.instanceMatrix)X0=B.instanceMatrix;if(d==="instanceColor"&&B.instanceColor)X0=B.instanceColor}let B0={};if(B0.attribute=X0,X0&&X0.data)B0.data=X0.data;l[d]=B0,m++}X.attributes=l,X.attributesNum=m,X.index=p}function L(){let B=X.newAttributes;for(let C=0,g=B.length;C<g;C++)B[C]=0}function D(B){k(B,0)}function k(B,C){let{newAttributes:g,enabledAttributes:p,attributeDivisors:l}=X;if(g[B]=1,p[B]===0)J.enableVertexAttribArray(B),p[B]=1;if(l[B]!==C)J.vertexAttribDivisor(B,C),l[B]=C}function O(){let{newAttributes:B,enabledAttributes:C}=X;for(let g=0,p=C.length;g<p;g++)if(C[g]!==B[g])J.disableVertexAttribArray(g),C[g]=0}function M(B,C,g,p,l,o,m){if(m===!0)J.vertexAttribIPointer(B,C,g,l,o);else J.vertexAttribPointer(B,C,g,p,l,o)}function z(B,C,g,p){L();let l=p.attributes,o=g.getAttributes(),m=C.defaultAttributeValues;for(let t in o){let d=o[t];if(d.location>=0){let a=l[t];if(a===void 0){if(t==="instanceMatrix"&&B.instanceMatrix)a=B.instanceMatrix;if(t==="instanceColor"&&B.instanceColor)a=B.instanceColor}if(a!==void 0){let{normalized:X0,itemSize:B0}=a,g0=w.get(a);if(g0===void 0)continue;let{buffer:M9,type:t0,bytesPerElement:s}=g0,W0=t0===J.INT||t0===J.UNSIGNED_INT||a.gpuType===dW;if(a.isInterleavedBufferAttribute){let Y0=a.data,N0=Y0.stride,f0=a.offset;if(Y0.isInstancedInterleavedBuffer){for(let b0=0;b0<d.locationSize;b0++)k(d.location+b0,Y0.meshPerAttribute);if(B.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=Y0.meshPerAttribute*Y0.count}else for(let b0=0;b0<d.locationSize;b0++)D(d.location+b0);J.bindBuffer(J.ARRAY_BUFFER,M9);for(let b0=0;b0<d.locationSize;b0++)M(d.location+b0,B0/d.locationSize,t0,X0,N0*s,(f0+B0/d.locationSize*b0)*s,W0)}else{if(a.isInstancedBufferAttribute){for(let Y0=0;Y0<d.locationSize;Y0++)k(d.location+Y0,a.meshPerAttribute);if(B.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=a.meshPerAttribute*a.count}else for(let Y0=0;Y0<d.locationSize;Y0++)D(d.location+Y0);J.bindBuffer(J.ARRAY_BUFFER,M9);for(let Y0=0;Y0<d.locationSize;Y0++)M(d.location+Y0,B0/d.locationSize,t0,X0,B0*s,B0/d.locationSize*Y0*s,W0)}}else if(m!==void 0){let X0=m[t];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(d.location,X0);break;case 3:J.vertexAttrib3fv(d.location,X0);break;case 4:J.vertexAttrib4fv(d.location,X0);break;default:J.vertexAttrib1fv(d.location,X0)}}}}O()}function T(){S();for(let B in Y){let C=Y[B];for(let g in C){let p=C[g];for(let l in p)q(p[l].object),delete p[l];delete C[g]}delete Y[B]}}function E(B){if(Y[B.id]===void 0)return;let C=Y[B.id];for(let g in C){let p=C[g];for(let l in p)q(p[l].object),delete p[l];delete C[g]}delete Y[B.id]}function A(B){for(let C in Y){let g=Y[C];if(g[B.id]===void 0)continue;let p=g[B.id];for(let l in p)q(p[l].object),delete p[l];delete g[B.id]}}function S(){if(V(),Q=!0,X===H)return;X=H,G(X.object)}function V(){H.geometry=null,H.program=null,H.wireframe=!1}return{setup:W,reset:S,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:L,enableAttribute:D,disableUnusedAttributes:O}}function U2(J,w,Z){let Y;function H(G){Y=G}function X(G,q){J.drawArrays(Y,G,q),Z.update(q,Y,1)}function Q(G,q,K){if(K===0)return;J.drawArraysInstanced(Y,G,q,K),Z.update(q,Y,K)}function W(G,q,K){if(K===0)return;w.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Y,G,0,q,0,K);let R=0;for(let N=0;N<K;N++)R+=q[N];Z.update(R,Y,1)}function U(G,q,K,$){if(K===0)return;let R=w.get("WEBGL_multi_draw");if(R===null)for(let N=0;N<G.length;N++)Q(G[N],q[N],$[N]);else{R.multiDrawArraysInstancedWEBGL(Y,G,0,q,0,$,0,K);let N=0;for(let L=0;L<K;L++)N+=q[L]*$[L];Z.update(N,Y,1)}}this.setMode=H,this.render=X,this.renderInstances=Q,this.renderMultiDraw=W,this.renderMultiDrawInstances=U}function G2(J,w,Z,Y){let H;function X(){if(H!==void 0)return H;if(w.has("EXT_texture_filter_anisotropic")===!0){let A=w.get("EXT_texture_filter_anisotropic");H=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else H=0;return H}function Q(A){if(A!==F6&&Y.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function W(A){let S=A===Nw&&(w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float"));if(A!==f7&&Y.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==b7&&!S)return!1;return!0}function U(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=Z.precision!==void 0?Z.precision:"highp",q=U(G);if(q!==G)console.warn("THREE.WebGLRenderer:",G,"not supported, using",q,"instead."),G=q;let K=Z.logarithmicDepthBuffer===!0,$=Z.reversedDepthBuffer===!0&&w.has("EXT_clip_control"),R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),k=J.getParameter(J.MAX_VERTEX_ATTRIBS),O=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=N>0,E=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:X,getMaxPrecision:U,textureFormatReadable:Q,textureTypeReadable:W,precision:G,logarithmicDepthBuffer:K,reversedDepthBuffer:$,maxTextures:R,maxVertexTextures:N,maxTextureSize:L,maxCubemapSize:D,maxAttributes:k,maxVertexUniforms:O,maxVaryings:M,maxFragmentUniforms:z,vertexTextures:T,maxSamples:E}}function q2(J){let w=this,Z=null,Y=0,H=!1,X=!1,Q=new i6,W=new y0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(K,$){let R=K.length!==0||$||Y!==0||H;return H=$,Y=K.length,R},this.beginShadows=function(){X=!0,q(null)},this.endShadows=function(){X=!1},this.setGlobalState=function(K,$){Z=q(K,$,0)},this.setState=function(K,$,R){let{clippingPlanes:N,clipIntersection:L,clipShadows:D}=K,k=J.get(K);if(!H||N===null||N.length===0||X&&!D)if(X)q(null);else G();else{let O=X?0:Y,M=O*4,z=k.clippingState||null;U.value=z,z=q(N,$,M,R);for(let T=0;T!==M;++T)z[T]=Z[T];k.clippingState=z,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=O}};function G(){if(U.value!==Z)U.value=Z,U.needsUpdate=Y>0;w.numPlanes=Y,w.numIntersection=0}function q(K,$,R,N){let L=K!==null?K.length:0,D=null;if(L!==0){if(D=U.value,N!==!0||D===null){let k=R+L*4,O=$.matrixWorldInverse;if(W.getNormalMatrix(O),D===null||D.length<k)D=new Float32Array(k);for(let M=0,z=R;M!==L;++M,z+=4)Q.copy(K[M]).applyMatrix4(O,W),Q.normal.toArray(D,z),D[z+3]=Q.constant}U.value=D,U.needsUpdate=!0}return w.numPlanes=L,w.numIntersection=0,D}}function k2(J){let w=new WeakMap;function Z(Q,W){if(W===gY)Q.mapping=p5;else if(W===lY)Q.mapping=$1;return Q}function Y(Q){if(Q&&Q.isTexture){let W=Q.mapping;if(W===gY||W===lY)if(w.has(Q)){let U=w.get(Q).texture;return Z(U,Q.mapping)}else{let U=Q.image;if(U&&U.height>0){let G=new bU(U.height);return G.fromEquirectangularTexture(J,Q),w.set(Q,G),Q.addEventListener("dispose",H),Z(G.texture,Q.mapping)}else return null}}return Q}function H(Q){let W=Q.target;W.removeEventListener("dispose",H);let U=w.get(W);if(U!==void 0)w.delete(W),U.dispose()}function X(){w=new WeakMap}return{get:Y,dispose:X}}var n5=4,oD=[0.125,0.215,0.35,0.446,0.526,0.582],_1=20,tU=new sU,nD=new d0,eU=null,JG=0,wG=0,ZG=!1,V1=(1+Math.sqrt(5))/2,o5=1/V1,aD=[new x(-V1,o5,0),new x(V1,o5,0),new x(-o5,0,V1),new x(o5,0,V1),new x(0,V1,-o5),new x(0,V1,o5),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],K2=new x;class HG{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,w=0,Z=0.1,Y=100,H={}){let{size:X=256,position:Q=K2}=H;eU=this._renderer.getRenderTarget(),JG=this._renderer.getActiveCubeFace(),wG=this._renderer.getActiveMipmapLevel(),ZG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(X);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Z,Y,W,Q),w>0)this._blur(W,0,0,w);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,w=null){return this._fromTexture(J,w)}fromCubemap(J,w=null){return this._fromTexture(J,w)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=eD(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=tD(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(eU,JG,wG),this._renderer.xr.enabled=ZG,J.scissorTest=!1,GH(J,0,0,J.width,J.height)}_fromTexture(J,w){if(J.mapping===p5||J.mapping===$1)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);eU=this._renderer.getRenderTarget(),JG=this._renderer.getActiveCubeFace(),wG=this._renderer.getActiveMipmapLevel(),ZG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=w||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),w=4*this._cubeSize,Z={magFilter:R1,minFilter:R1,generateMipmaps:!1,type:Nw,format:F6,colorSpace:Lw,depthBuffer:!1},Y=rD(J,w,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==w){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=rD(J,w,Z);let{_lodMax:H}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$2(H)),this._blurMaterial=R2(H,J,w)}return Y}_compileMaterial(J){let w=new F8(this._lodPlanes[0],J);this._renderer.compile(w,tU)}_sceneToCubeUV(J,w,Z,Y,H){let W=new J8(90,1,w,Z),U=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],q=this._renderer,K=q.autoClear,$=q.toneMapping;if(q.getClearColor(nD),q.toneMapping=o6,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Y),q.clearDepth(),q.setRenderTarget(null);let N=new nY({name:"PMREM.Background",side:f8,depthWrite:!1,depthTest:!1}),L=new F8(new v7,N),D=!1,k=J.background;if(k){if(k.isColor)N.color.copy(k),J.background=null,D=!0}else N.color.copy(nD),D=!0;for(let O=0;O<6;O++){let M=O%3;if(M===0)W.up.set(0,U[O],0),W.position.set(H.x,H.y,H.z),W.lookAt(H.x+G[O],H.y,H.z);else if(M===1)W.up.set(0,0,U[O]),W.position.set(H.x,H.y,H.z),W.lookAt(H.x,H.y+G[O],H.z);else W.up.set(0,U[O],0),W.position.set(H.x,H.y,H.z),W.lookAt(H.x,H.y,H.z+G[O]);let z=this._cubeSize;if(GH(Y,M*z,O>2?z:0,z,z),q.setRenderTarget(Y),D)q.render(L,W);q.render(J,W)}L.geometry.dispose(),L.material.dispose(),q.toneMapping=$,q.autoClear=K,J.background=k}_textureToCubeUV(J,w){let Z=this._renderer,Y=J.mapping===p5||J.mapping===$1;if(Y){if(this._cubemapMaterial===null)this._cubemapMaterial=eD();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=tD();let H=Y?this._cubemapMaterial:this._equirectMaterial,X=new F8(this._lodPlanes[0],H),Q=H.uniforms;Q.envMap.value=J;let W=this._cubeSize;GH(w,0,0,3*W,2*W),Z.setRenderTarget(w),Z.render(X,tU)}_applyPMREM(J){let w=this._renderer,Z=w.autoClear;w.autoClear=!1;let Y=this._lodPlanes.length;for(let H=1;H<Y;H++){let X=Math.sqrt(this._sigmas[H]*this._sigmas[H]-this._sigmas[H-1]*this._sigmas[H-1]),Q=aD[(Y-H-1)%aD.length];this._blur(J,H-1,H,X,Q)}w.autoClear=Z}_blur(J,w,Z,Y,H){let X=this._pingPongRenderTarget;this._halfBlur(J,X,w,Z,Y,"latitudinal",H),this._halfBlur(X,J,Z,Z,Y,"longitudinal",H)}_halfBlur(J,w,Z,Y,H,X,Q){let W=this._renderer,U=this._blurMaterial;if(X!=="latitudinal"&&X!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,q=new F8(this._lodPlanes[Y],U),K=U.uniforms,$=this._sizeLods[Z]-1,R=isFinite(H)?Math.PI/(2*$):2*Math.PI/(2*_1-1),N=H/R,L=isFinite(H)?1+Math.floor(G*N):_1;if(L>_1)console.warn(`sigmaRadians, ${H}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${_1}`);let D=[],k=0;for(let E=0;E<_1;++E){let A=E/N,S=Math.exp(-A*A/2);if(D.push(S),E===0)k+=S;else if(E<L)k+=2*S}for(let E=0;E<D.length;E++)D[E]=D[E]/k;if(K.envMap.value=J.texture,K.samples.value=L,K.weights.value=D,K.latitudinal.value=X==="latitudinal",Q)K.poleAxis.value=Q;let{_lodMax:O}=this;K.dTheta.value=R,K.mipInt.value=O-Z;let M=this._sizeLods[Y],z=3*M*(Y>O-n5?Y-O+n5:0),T=4*(this._cubeSize-M);GH(w,z,T,3*M,2*M),W.setRenderTarget(w),W.render(q,tU)}}function $2(J){let w=[],Z=[],Y=[],H=J,X=J-n5+1+oD.length;for(let Q=0;Q<X;Q++){let W=Math.pow(2,H);Z.push(W);let U=1/W;if(Q>J-n5)U=oD[Q-J+n5-1];else if(Q===0)U=0;Y.push(U);let G=1/(W-2),q=-G,K=1+G,$=[q,q,K,q,K,K,q,q,K,K,q,K],R=6,N=6,L=3,D=2,k=1,O=new Float32Array(L*N*R),M=new Float32Array(D*N*R),z=new Float32Array(k*N*R);for(let E=0;E<R;E++){let A=E%3*2/3-1,S=E>2?0:-1,V=[A,S,0,A+0.6666666666666666,S,0,A+0.6666666666666666,S+1,0,A,S,0,A+0.6666666666666666,S+1,0,A,S+1,0];O.set(V,L*N*E),M.set($,D*N*E);let B=[E,E,E,E,E,E];z.set(B,k*N*E)}let T=new a6;if(T.setAttribute("position",new a8(O,L)),T.setAttribute("uv",new a8(M,D)),T.setAttribute("faceIndex",new a8(z,k)),w.push(T),H>n5)H--}return{lodPlanes:w,sizeLods:Z,sigmas:Y}}function rD(J,w,Z){let Y=new n6(J,w,Z);return Y.texture.mapping=Mw,Y.texture.name="PMREM.cubeUv",Y.scissorTest=!0,Y}function GH(J,w,Z,Y,H){J.viewport.set(w,Z,Y,H),J.scissor.set(w,Z,Y,H)}function R2(J,w,Z){let Y=new Float32Array(_1),H=new x(0,1,0);return new N6({name:"SphericalGaussianBlur",defines:{n:_1,CUBEUV_TEXEL_WIDTH:1/w,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Y},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:H}},vertexShader:QG(),fragmentShader:`

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
		`,blending:j7,depthTest:!1,depthWrite:!1})}function tD(){return new N6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:QG(),fragmentShader:`

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
		`,blending:j7,depthTest:!1,depthWrite:!1})}function eD(){return new N6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:QG(),fragmentShader:`

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
	`}function D2(J){let w=new WeakMap,Z=null;function Y(W){if(W&&W.isTexture){let U=W.mapping,G=U===gY||U===lY,q=U===p5||U===$1;if(G||q){let K=w.get(W),$=K!==void 0?K.texture.pmremVersion:0;if(W.isRenderTargetTexture&&W.pmremVersion!==$){if(Z===null)Z=new HG(J);return K=G?Z.fromEquirectangular(W,K):Z.fromCubemap(W,K),K.texture.pmremVersion=W.pmremVersion,w.set(W,K),K.texture}else if(K!==void 0)return K.texture;else{let R=W.image;if(G&&R&&R.height>0||q&&R&&H(R)){if(Z===null)Z=new HG(J);return K=G?Z.fromEquirectangular(W):Z.fromCubemap(W),K.texture.pmremVersion=W.pmremVersion,w.set(W,K),W.addEventListener("dispose",X),K.texture}else return null}}}return W}function H(W){let U=0,G=6;for(let q=0;q<G;q++)if(W[q]!==void 0)U++;return U===G}function X(W){let U=W.target;U.removeEventListener("dispose",X);let G=w.get(U);if(G!==void 0)w.delete(U),G.dispose()}function Q(){if(w=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:Y,dispose:Q}}function M2(J){let w={};function Z(Y){if(w[Y]!==void 0)return w[Y];let H;switch(Y){case"WEBGL_depth_texture":H=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":H=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":H=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":H=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:H=J.getExtension(Y)}return w[Y]=H,H}return{has:function(Y){return Z(Y)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(Y){let H=Z(Y);if(H===null)y5("THREE.WebGLRenderer: "+Y+" extension not supported.");return H}}}function O2(J,w,Z,Y){let H={},X=new WeakMap;function Q(K){let $=K.target;if($.index!==null)w.remove($.index);for(let N in $.attributes)w.remove($.attributes[N]);$.removeEventListener("dispose",Q),delete H[$.id];let R=X.get($);if(R)w.remove(R),X.delete($);if(Y.releaseStatesOfGeometry($),$.isInstancedBufferGeometry===!0)delete $._maxInstanceCount;Z.memory.geometries--}function W(K,$){if(H[$.id]===!0)return $;return $.addEventListener("dispose",Q),H[$.id]=!0,Z.memory.geometries++,$}function U(K){let $=K.attributes;for(let R in $)w.update($[R],J.ARRAY_BUFFER)}function G(K){let $=[],R=K.index,N=K.attributes.position,L=0;if(R!==null){let O=R.array;L=R.version;for(let M=0,z=O.length;M<z;M+=3){let T=O[M+0],E=O[M+1],A=O[M+2];$.push(T,E,E,A,A,T)}}else if(N!==void 0){let O=N.array;L=N.version;for(let M=0,z=O.length/3-1;M<z;M+=3){let T=M+0,E=M+1,A=M+2;$.push(T,E,E,A,A,T)}}else return;let D=new((IU($))?rY:aY)($,1);D.version=L;let k=X.get(K);if(k)w.remove(k);X.set(K,D)}function q(K){let $=X.get(K);if($){let R=K.index;if(R!==null){if($.version<R.version)G(K)}}else G(K);return X.get(K)}return{get:W,update:U,getWireframeAttribute:q}}function F2(J,w,Z){let Y;function H($){Y=$}let X,Q;function W($){X=$.type,Q=$.bytesPerElement}function U($,R){J.drawElements(Y,R,X,$*Q),Z.update(R,Y,1)}function G($,R,N){if(N===0)return;J.drawElementsInstanced(Y,R,X,$*Q,N),Z.update(R,Y,N)}function q($,R,N){if(N===0)return;w.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Y,R,0,X,$,0,N);let D=0;for(let k=0;k<N;k++)D+=R[k];Z.update(D,Y,1)}function K($,R,N,L){if(N===0)return;let D=w.get("WEBGL_multi_draw");if(D===null)for(let k=0;k<$.length;k++)G($[k]/Q,R[k],L[k]);else{D.multiDrawElementsInstancedWEBGL(Y,R,0,X,$,0,L,0,N);let k=0;for(let O=0;O<N;O++)k+=R[O]*L[O];Z.update(k,Y,1)}}this.setMode=H,this.setIndex=W,this.render=U,this.renderInstances=G,this.renderMultiDraw=q,this.renderMultiDrawInstances=K}function N2(J){let w={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function Y(X,Q,W){switch(Z.calls++,Q){case J.TRIANGLES:Z.triangles+=W*(X/3);break;case J.LINES:Z.lines+=W*(X/2);break;case J.LINE_STRIP:Z.lines+=W*(X-1);break;case J.LINE_LOOP:Z.lines+=W*X;break;case J.POINTS:Z.points+=W*X;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function H(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:w,render:Z,programs:null,autoReset:!0,reset:H,update:Y}}function z2(J,w,Z){let Y=new WeakMap,H=new X9;function X(Q,W,U){let G=Q.morphTargetInfluences,q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=q!==void 0?q.length:0,$=Y.get(W);if($===void 0||$.count!==K){let V=function(){A.dispose(),Y.delete(W),W.removeEventListener("dispose",V)};if($!==void 0)$.texture.dispose();let R=W.morphAttributes.position!==void 0,N=W.morphAttributes.normal!==void 0,L=W.morphAttributes.color!==void 0,D=W.morphAttributes.position||[],k=W.morphAttributes.normal||[],O=W.morphAttributes.color||[],M=0;if(R===!0)M=1;if(N===!0)M=2;if(L===!0)M=3;let z=W.attributes.position.count*M,T=1;if(z>w.maxTextureSize)T=Math.ceil(z/w.maxTextureSize),z=w.maxTextureSize;let E=new Float32Array(z*T*4*K),A=new sY(E,z,T,K);A.type=b7,A.needsUpdate=!0;let S=M*4;for(let B=0;B<K;B++){let C=D[B],g=k[B],p=O[B],l=z*T*4*B;for(let o=0;o<C.count;o++){let m=o*S;if(R===!0)H.fromBufferAttribute(C,o),E[l+m+0]=H.x,E[l+m+1]=H.y,E[l+m+2]=H.z,E[l+m+3]=0;if(N===!0)H.fromBufferAttribute(g,o),E[l+m+4]=H.x,E[l+m+5]=H.y,E[l+m+6]=H.z,E[l+m+7]=0;if(L===!0)H.fromBufferAttribute(p,o),E[l+m+8]=H.x,E[l+m+9]=H.y,E[l+m+10]=H.z,E[l+m+11]=p.itemSize===4?H.w:1}}$={count:K,texture:A,size:new a0(z,T)},Y.set(W,$),W.addEventListener("dispose",V)}if(Q.isInstancedMesh===!0&&Q.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",Q.morphTexture,Z);else{let R=0;for(let L=0;L<G.length;L++)R+=G[L];let N=W.morphTargetsRelative?1:1-R;U.getUniforms().setValue(J,"morphTargetBaseInfluence",N),U.getUniforms().setValue(J,"morphTargetInfluences",G)}U.getUniforms().setValue(J,"morphTargetsTexture",$.texture,Z),U.getUniforms().setValue(J,"morphTargetsTextureSize",$.size)}return{update:X}}function L2(J,w,Z,Y){let H=new WeakMap;function X(U){let G=Y.render.frame,q=U.geometry,K=w.get(U,q);if(H.get(K)!==G)w.update(K),H.set(K,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",W)===!1)U.addEventListener("dispose",W);if(H.get(U)!==G){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);H.set(U,G)}}if(U.isSkinnedMesh){let $=U.skeleton;if(H.get($)!==G)$.update(),H.set($,G)}return K}function Q(){H=new WeakMap}function W(U){let G=U.target;if(G.removeEventListener("dispose",W),Z.remove(G.instanceMatrix),G.instanceColor!==null)Z.remove(G.instanceColor)}return{update:X,dispose:Q}}var FM=new G8,JM=new wH(1,1),NM=new sY,zM=new PU,LM=new eY,wM=[],ZM=[],YM=new Float32Array(16),HM=new Float32Array(9),XM=new Float32Array(4);function a5(J,w,Z){let Y=J[0];if(Y<=0||Y>0)return J;let H=w*Z,X=wM[H];if(X===void 0)X=new Float32Array(H),wM[H]=X;if(w!==0){Y.toArray(X,0);for(let Q=1,W=0;Q!==w;++Q)W+=Z,J[Q].toArray(X,W)}return X}function l9(J,w){if(J.length!==w.length)return!1;for(let Z=0,Y=J.length;Z<Y;Z++)if(J[Z]!==w[Z])return!1;return!0}function p9(J,w){for(let Z=0,Y=w.length;Z<Y;Z++)J[Z]=w[Z]}function kH(J,w){let Z=ZM[w];if(Z===void 0)Z=new Int32Array(w),ZM[w]=Z;for(let Y=0;Y!==w;++Y)Z[Y]=J.allocateTextureUnit();return Z}function B2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1f(this.addr,w),Z[0]=w}function V2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2f(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2fv(this.addr,w),p9(Z,w)}}function _2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3f(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else if(w.r!==void 0){if(Z[0]!==w.r||Z[1]!==w.g||Z[2]!==w.b)J.uniform3f(this.addr,w.r,w.g,w.b),Z[0]=w.r,Z[1]=w.g,Z[2]=w.b}else{if(l9(Z,w))return;J.uniform3fv(this.addr,w),p9(Z,w)}}function A2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4f(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4fv(this.addr,w),p9(Z,w)}}function E2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix2fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;XM.set(Y),J.uniformMatrix2fv(this.addr,!1,XM),p9(Z,Y)}}function I2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix3fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;HM.set(Y),J.uniformMatrix3fv(this.addr,!1,HM),p9(Z,Y)}}function C2(J,w){let Z=this.cache,Y=w.elements;if(Y===void 0){if(l9(Z,w))return;J.uniformMatrix4fv(this.addr,!1,w),p9(Z,w)}else{if(l9(Z,Y))return;YM.set(Y),J.uniformMatrix4fv(this.addr,!1,YM),p9(Z,Y)}}function T2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1i(this.addr,w),Z[0]=w}function P2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2i(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2iv(this.addr,w),p9(Z,w)}}function S2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3i(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else{if(l9(Z,w))return;J.uniform3iv(this.addr,w),p9(Z,w)}}function j2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4i(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4iv(this.addr,w),p9(Z,w)}}function f2(J,w){let Z=this.cache;if(Z[0]===w)return;J.uniform1ui(this.addr,w),Z[0]=w}function b2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y)J.uniform2ui(this.addr,w.x,w.y),Z[0]=w.x,Z[1]=w.y}else{if(l9(Z,w))return;J.uniform2uiv(this.addr,w),p9(Z,w)}}function x2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z)J.uniform3ui(this.addr,w.x,w.y,w.z),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z}else{if(l9(Z,w))return;J.uniform3uiv(this.addr,w),p9(Z,w)}}function h2(J,w){let Z=this.cache;if(w.x!==void 0){if(Z[0]!==w.x||Z[1]!==w.y||Z[2]!==w.z||Z[3]!==w.w)J.uniform4ui(this.addr,w.x,w.y,w.z,w.w),Z[0]=w.x,Z[1]=w.y,Z[2]=w.z,Z[3]=w.w}else{if(l9(Z,w))return;J.uniform4uiv(this.addr,w),p9(Z,w)}}function v2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;let X;if(this.type===J.SAMPLER_2D_SHADOW)JM.compareFunction=VU,X=JM;else X=FM;Z.setTexture2D(w||X,H)}function y2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTexture3D(w||zM,H)}function g2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTextureCube(w||LM,H)}function l2(J,w,Z){let Y=this.cache,H=Z.allocateTextureUnit();if(Y[0]!==H)J.uniform1i(this.addr,H),Y[0]=H;Z.setTexture2DArray(w||NM,H)}function p2(J){switch(J){case 5126:return B2;case 35664:return V2;case 35665:return _2;case 35666:return A2;case 35674:return E2;case 35675:return I2;case 35676:return C2;case 5124:case 35670:return T2;case 35667:case 35671:return P2;case 35668:case 35672:return S2;case 35669:case 35673:return j2;case 5125:return f2;case 36294:return b2;case 36295:return x2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return l2}}function d2(J,w){J.uniform1fv(this.addr,w)}function m2(J,w){let Z=a5(w,this.size,2);J.uniform2fv(this.addr,Z)}function u2(J,w){let Z=a5(w,this.size,3);J.uniform3fv(this.addr,Z)}function c2(J,w){let Z=a5(w,this.size,4);J.uniform4fv(this.addr,Z)}function i2(J,w){let Z=a5(w,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function s2(J,w){let Z=a5(w,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function o2(J,w){let Z=a5(w,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function n2(J,w){J.uniform1iv(this.addr,w)}function a2(J,w){J.uniform2iv(this.addr,w)}function r2(J,w){J.uniform3iv(this.addr,w)}function t2(J,w){J.uniform4iv(this.addr,w)}function e2(J,w){J.uniform1uiv(this.addr,w)}function JV(J,w){J.uniform2uiv(this.addr,w)}function wV(J,w){J.uniform3uiv(this.addr,w)}function ZV(J,w){J.uniform4uiv(this.addr,w)}function YV(J,w,Z){let Y=this.cache,H=w.length,X=kH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture2D(w[Q]||FM,X[Q])}function HV(J,w,Z){let Y=this.cache,H=w.length,X=kH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture3D(w[Q]||zM,X[Q])}function XV(J,w,Z){let Y=this.cache,H=w.length,X=kH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTextureCube(w[Q]||LM,X[Q])}function QV(J,w,Z){let Y=this.cache,H=w.length,X=kH(Z,H);if(!l9(Y,X))J.uniform1iv(this.addr,X),p9(Y,X);for(let Q=0;Q!==H;++Q)Z.setTexture2DArray(w[Q]||NM,X[Q])}function WV(J){switch(J){case 5126:return d2;case 35664:return m2;case 35665:return u2;case 35666:return c2;case 35674:return i2;case 35675:return s2;case 35676:return o2;case 5124:case 35670:return n2;case 35667:case 35671:return a2;case 35668:case 35672:return r2;case 35669:case 35673:return t2;case 5125:return e2;case 36294:return JV;case 36295:return wV;case 36296:return ZV;case 35678:case 36198:case 36298:case 36306:case 35682:return YV;case 35679:case 36299:case 36307:return HV;case 35680:case 36300:case 36308:case 36293:return XV;case 36289:case 36303:case 36311:case 36292:return QV}}class BM{constructor(J,w,Z){this.id=J,this.addr=Z,this.cache=[],this.type=w.type,this.setValue=p2(w.type)}}class VM{constructor(J,w,Z){this.id=J,this.addr=Z,this.cache=[],this.type=w.type,this.size=w.size,this.setValue=WV(w.type)}}class _M{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,w,Z){let Y=this.seq;for(let H=0,X=Y.length;H!==X;++H){let Q=Y[H];Q.setValue(J,w[Q.id],Z)}}}var YG=/(\w+)(\])?(\[|\.)?/g;function QM(J,w){J.seq.push(w),J.map[w.id]=w}function UV(J,w,Z){let Y=J.name,H=Y.length;YG.lastIndex=0;while(!0){let X=YG.exec(Y),Q=YG.lastIndex,W=X[1],U=X[2]==="]",G=X[3];if(U)W=W|0;if(G===void 0||G==="["&&Q+2===H){QM(Z,G===void 0?new BM(W,J,w):new VM(W,J,w));break}else{let K=Z.map[W];if(K===void 0)K=new _M(W),QM(Z,K);Z=K}}}class fw{constructor(J,w){this.seq=[],this.map={};let Z=J.getProgramParameter(w,J.ACTIVE_UNIFORMS);for(let Y=0;Y<Z;++Y){let H=J.getActiveUniform(w,Y),X=J.getUniformLocation(w,H.name);UV(H,X,this)}}setValue(J,w,Z,Y){let H=this.map[w];if(H!==void 0)H.setValue(J,Z,Y)}setOptional(J,w,Z){let Y=w[Z];if(Y!==void 0)this.setValue(J,Z,Y)}static upload(J,w,Z,Y){for(let H=0,X=w.length;H!==X;++H){let Q=w[H],W=Z[Q.id];if(W.needsUpdate!==!1)Q.setValue(J,W.value,Y)}}static seqWithValue(J,w){let Z=[];for(let Y=0,H=J.length;Y!==H;++Y){let X=J[Y];if(X.id in w)Z.push(X)}return Z}}function WM(J,w,Z){let Y=J.createShader(w);return J.shaderSource(Y,Z),J.compileShader(Y),Y}var GV=37297,qV=0;function kV(J,w){let Z=J.split(`
`),Y=[],H=Math.max(w-6,0),X=Math.min(w+6,Z.length);for(let Q=H;Q<X;Q++){let W=Q+1;Y.push(`${W===w?">":" "} ${W}: ${Z[Q]}`)}return Y.join(`
`)}var UM=new y0;function KV(J){r0._getMatrix(UM,r0.workingColorSpace,J);let w=`mat3( ${UM.elements.map((Z)=>Z.toFixed(4))} )`;switch(r0.getTransfer(J)){case BU:return[w,"LinearTransferOETF"];case D9:return[w,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[w,"LinearTransferOETF"]}}function GM(J,w,Z){let Y=J.getShaderParameter(w,J.COMPILE_STATUS),X=(J.getShaderInfoLog(w)||"").trim();if(Y&&X==="")return"";let Q=/ERROR: 0:(\d+)/.exec(X);if(Q){let W=parseInt(Q[1]);return Z.toUpperCase()+`

`+X+`

`+kV(J.getShaderSource(w),W)}else return X}function $V(J,w){let Z=KV(w);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function RV(J,w){let Z;switch(w){case qD:Z="Linear";break;case kD:Z="Reinhard";break;case KD:Z="Cineon";break;case $D:Z="ACESFilmic";break;case DD:Z="AgX";break;case MD:Z="Neutral";break;case RD:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",w),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var qH=new x;function DV(){r0.getLuminanceCoefficients(qH);let J=qH.x.toFixed(4),w=qH.y.toFixed(4),Z=qH.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${w}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function MV(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jw).join(`
`)}function OV(J){let w=[];for(let Z in J){let Y=J[Z];if(Y===!1)continue;w.push("#define "+Z+" "+Y)}return w.join(`
`)}function FV(J,w){let Z={},Y=J.getProgramParameter(w,J.ACTIVE_ATTRIBUTES);for(let H=0;H<Y;H++){let X=J.getActiveAttrib(w,H),Q=X.name,W=1;if(X.type===J.FLOAT_MAT2)W=2;if(X.type===J.FLOAT_MAT3)W=3;if(X.type===J.FLOAT_MAT4)W=4;Z[Q]={type:X.type,location:J.getAttribLocation(w,Q),locationSize:W}}return Z}function jw(J){return J!==""}function qM(J,w){let Z=w.numSpotLightShadows+w.numSpotLightMaps-w.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,w.numDirLights).replace(/NUM_SPOT_LIGHTS/g,w.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,w.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,w.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,w.numPointLights).replace(/NUM_HEMI_LIGHTS/g,w.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,w.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,w.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,w.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,w.numPointLightShadows)}function kM(J,w){return J.replace(/NUM_CLIPPING_PLANES/g,w.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,w.numClippingPlanes-w.numClipIntersection)}var NV=/^[ \t]*#include +<([\w\d./]+)>/gm;function XG(J){return J.replace(NV,LV)}var zV=new Map;function LV(J,w){let Z=l0[w];if(Z===void 0){let Y=zV.get(w);if(Y!==void 0)Z=l0[Y],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',w,Y);else throw new Error("Can not resolve #include <"+w+">")}return XG(Z)}var BV=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function KM(J){return J.replace(BV,VV)}function VV(J,w,Z,Y){let H="";for(let X=parseInt(w);X<parseInt(Z);X++)H+=Y.replace(/\[\s*i\s*\]/g,"[ "+X+" ]").replace(/UNROLLED_LOOP_INDEX/g,X);return H}function $M(J){let w=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return w}function _V(J){let w="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===yW)w="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===lR)w="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===M6)w="SHADOWMAP_TYPE_VSM";return w}function AV(J){let w="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case p5:case $1:w="ENVMAP_TYPE_CUBE";break;case Mw:w="ENVMAP_TYPE_CUBE_UV";break}return w}function EV(J){let w="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case $1:w="ENVMAP_MODE_REFRACTION";break}return w}function IV(J){let w="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case WD:w="ENVMAP_BLENDING_MULTIPLY";break;case UD:w="ENVMAP_BLENDING_MIX";break;case GD:w="ENVMAP_BLENDING_ADD";break}return w}function CV(J){let w=J.envMapCubeUVHeight;if(w===null)return null;let Z=Math.log2(w)-2,Y=1/w;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:Y,maxMip:Z}}function TV(J,w,Z,Y){let H=J.getContext(),X=Z.defines,Q=Z.vertexShader,W=Z.fragmentShader,U=_V(Z),G=AV(Z),q=EV(Z),K=IV(Z),$=CV(Z),R=MV(Z),N=OV(X),L=H.createProgram(),D,k,O=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N].filter(jw).join(`
`),D.length>0)D+=`
`;if(k=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N].filter(jw).join(`
`),k.length>0)k+=`
`}else D=[$M(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(jw).join(`
`),k=[$M(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+K:"",$?"#define CUBEUV_TEXEL_WIDTH "+$.texelWidth:"",$?"#define CUBEUV_TEXEL_HEIGHT "+$.texelHeight:"",$?"#define CUBEUV_MAX_MIP "+$.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==o6?"#define TONE_MAPPING":"",Z.toneMapping!==o6?l0.tonemapping_pars_fragment:"",Z.toneMapping!==o6?RV("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,$V("linearToOutputTexel",Z.outputColorSpace),DV(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(jw).join(`
`);if(Q=XG(Q),Q=qM(Q,Z),Q=kM(Q,Z),W=XG(W),W=qM(W,Z),W=kM(W,Z),Q=KM(Q),W=KM(W),Z.isRawShaderMaterial!==!0)O=`#version 300 es
`,D=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,k=["#define varying in",Z.glslVersion===_U?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===_U?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+k;let M=O+D+Q,z=O+k+W,T=WM(H,H.VERTEX_SHADER,M),E=WM(H,H.FRAGMENT_SHADER,z);if(H.attachShader(L,T),H.attachShader(L,E),Z.index0AttributeName!==void 0)H.bindAttribLocation(L,0,Z.index0AttributeName);else if(Z.morphTargets===!0)H.bindAttribLocation(L,0,"position");H.linkProgram(L);function A(C){if(J.debug.checkShaderErrors){let g=H.getProgramInfoLog(L)||"",p=H.getShaderInfoLog(T)||"",l=H.getShaderInfoLog(E)||"",o=g.trim(),m=p.trim(),t=l.trim(),d=!0,a=!0;if(H.getProgramParameter(L,H.LINK_STATUS)===!1)if(d=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(H,L,T,E);else{let X0=GM(H,T,"vertex"),B0=GM(H,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+H.getError()+" - VALIDATE_STATUS "+H.getProgramParameter(L,H.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+o+`
`+X0+`
`+B0)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(m===""||t==="")a=!1;if(a)C.diagnostics={runnable:d,programLog:o,vertexShader:{log:m,prefix:D},fragmentShader:{log:t,prefix:k}}}H.deleteShader(T),H.deleteShader(E),S=new fw(H,L),V=FV(H,L)}let S;this.getUniforms=function(){if(S===void 0)A(this);return S};let V;this.getAttributes=function(){if(V===void 0)A(this);return V};let B=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(B===!1)B=H.getProgramParameter(L,GV);return B},this.destroy=function(){Y.releaseStatesOfProgram(this),H.deleteProgram(L),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=qV++,this.cacheKey=w,this.usedTimes=1,this.program=L,this.vertexShader=T,this.fragmentShader=E,this}var PV=0;class AM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:w,fragmentShader:Z}=J,Y=this._getShaderStage(w),H=this._getShaderStage(Z),X=this._getShaderCacheForMaterial(J);if(X.has(Y)===!1)X.add(Y),Y.usedTimes++;if(X.has(H)===!1)X.add(H),H.usedTimes++;return this}remove(J){let w=this.materialCache.get(J);for(let Z of w)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let w=this.materialCache,Z=w.get(J);if(Z===void 0)Z=new Set,w.set(J,Z);return Z}_getShaderStage(J){let w=this.shaderCache,Z=w.get(J);if(Z===void 0)Z=new EM(J),w.set(J,Z);return Z}}class EM{constructor(J){this.id=PV++,this.code=J,this.usedTimes=0}}function SV(J,w,Z,Y,H,X,Q){let W=new oY,U=new AM,G=new Set,q=[],K=H.logarithmicDepthBuffer,$=H.vertexTextures,R=H.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(V){if(G.add(V),V===0)return"uv";return`uv${V}`}function D(V,B,C,g,p){let l=g.fog,o=p.geometry,m=V.isMeshStandardMaterial?g.environment:null,t=(V.isMeshStandardMaterial?Z:w).get(V.envMap||m),d=!!t&&t.mapping===Mw?t.image.height:null,a=N[V.type];if(V.precision!==null){if(R=H.getMaxPrecision(V.precision),R!==V.precision)console.warn("THREE.WebGLProgram.getParameters:",V.precision,"not supported, using",R,"instead.")}let X0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,B0=X0!==void 0?X0.length:0,g0=0;if(o.morphAttributes.position!==void 0)g0=1;if(o.morphAttributes.normal!==void 0)g0=2;if(o.morphAttributes.color!==void 0)g0=3;let M9,t0,s,W0;if(a){let Q9=z6[a];M9=Q9.vertexShader,t0=Q9.fragmentShader}else M9=V.vertexShader,t0=V.fragmentShader,U.update(V),s=U.getVertexShaderID(V),W0=U.getFragmentShaderID(V);let Y0=J.getRenderTarget(),N0=J.state.buffers.depth.getReversed(),f0=p.isInstancedMesh===!0,b0=p.isBatchedMesh===!0,d9=!!V.map,P=!!V.matcap,B9=!!t,h0=!!V.aoMap,j0=!!V.lightMap,O0=!!V.bumpMap,V9=!!V.normalMap,V0=!!V.displacementMap,I0=!!V.emissiveMap,o9=!!V.metalnessMap,m9=!!V.roughnessMap,S9=V.anisotropy>0,I=V.clearcoat>0,F=V.dispersion>0,h=V.iridescence>0,i=V.sheen>0,r=V.transmission>0,u=S9&&!!V.anisotropyMap,$0=I&&!!V.clearcoatMap,Z0=I&&!!V.clearcoatNormalMap,F0=I&&!!V.clearcoatRoughnessMap,P0=h&&!!V.iridescenceMap,w0=h&&!!V.iridescenceThicknessMap,q0=i&&!!V.sheenColorMap,z0=i&&!!V.sheenRoughnessMap,L0=!!V.specularMap,k0=!!V.specularColorMap,p0=!!V.specularIntensityMap,j=r&&!!V.transmissionMap,U0=r&&!!V.thicknessMap,H0=!!V.gradientMap,R0=!!V.alphaMap,e=V.alphaTest>0,n=!!V.alphaHash,M0=!!V.extensions,x0=o6;if(V.toneMapped){if(Y0===null||Y0.isXRRenderTarget===!0)x0=J.toneMapping}let q9={shaderID:a,shaderType:V.type,shaderName:V.name,vertexShader:M9,fragmentShader:t0,defines:V.defines,customVertexShaderID:s,customFragmentShaderID:W0,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:R,batching:b0,batchingColor:b0&&p._colorsTexture!==null,instancing:f0,instancingColor:f0&&p.instanceColor!==null,instancingMorph:f0&&p.morphTexture!==null,supportsVertexTextures:$,outputColorSpace:Y0===null?J.outputColorSpace:Y0.isXRRenderTarget===!0?Y0.texture.colorSpace:Lw,alphaToCoverage:!!V.alphaToCoverage,map:d9,matcap:P,envMap:B9,envMapMode:B9&&t.mapping,envMapCubeUVHeight:d,aoMap:h0,lightMap:j0,bumpMap:O0,normalMap:V9,displacementMap:$&&V0,emissiveMap:I0,normalMapObjectSpace:V9&&V.normalMapType===SD,normalMapTangentSpace:V9&&V.normalMapType===PD,metalnessMap:o9,roughnessMap:m9,anisotropy:S9,anisotropyMap:u,clearcoat:I,clearcoatMap:$0,clearcoatNormalMap:Z0,clearcoatRoughnessMap:F0,dispersion:F,iridescence:h,iridescenceMap:P0,iridescenceThicknessMap:w0,sheen:i,sheenColorMap:q0,sheenRoughnessMap:z0,specularMap:L0,specularColorMap:k0,specularIntensityMap:p0,transmission:r,transmissionMap:j,thicknessMap:U0,gradientMap:H0,opaque:V.transparent===!1&&V.blending===Rw&&V.alphaToCoverage===!1,alphaMap:R0,alphaTest:e,alphaHash:n,combine:V.combine,mapUv:d9&&L(V.map.channel),aoMapUv:h0&&L(V.aoMap.channel),lightMapUv:j0&&L(V.lightMap.channel),bumpMapUv:O0&&L(V.bumpMap.channel),normalMapUv:V9&&L(V.normalMap.channel),displacementMapUv:V0&&L(V.displacementMap.channel),emissiveMapUv:I0&&L(V.emissiveMap.channel),metalnessMapUv:o9&&L(V.metalnessMap.channel),roughnessMapUv:m9&&L(V.roughnessMap.channel),anisotropyMapUv:u&&L(V.anisotropyMap.channel),clearcoatMapUv:$0&&L(V.clearcoatMap.channel),clearcoatNormalMapUv:Z0&&L(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F0&&L(V.clearcoatRoughnessMap.channel),iridescenceMapUv:P0&&L(V.iridescenceMap.channel),iridescenceThicknessMapUv:w0&&L(V.iridescenceThicknessMap.channel),sheenColorMapUv:q0&&L(V.sheenColorMap.channel),sheenRoughnessMapUv:z0&&L(V.sheenRoughnessMap.channel),specularMapUv:L0&&L(V.specularMap.channel),specularColorMapUv:k0&&L(V.specularColorMap.channel),specularIntensityMapUv:p0&&L(V.specularIntensityMap.channel),transmissionMapUv:j&&L(V.transmissionMap.channel),thicknessMapUv:U0&&L(V.thicknessMap.channel),alphaMapUv:R0&&L(V.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(V9||S9),vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!o.attributes.uv&&(d9||R0),fog:!!l,useFog:V.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:V.flatShading===!0&&V.wireframe===!1,sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:K,reversedDepthBuffer:N0,skinning:p.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:B0,morphTextureStride:g0,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:V.dithering,shadowMapEnabled:J.shadowMap.enabled&&C.length>0,shadowMapType:J.shadowMap.type,toneMapping:x0,decodeVideoTexture:d9&&V.map.isVideoTexture===!0&&r0.getTransfer(V.map.colorSpace)===D9,decodeVideoTextureEmissive:I0&&V.emissiveMap.isVideoTexture===!0&&r0.getTransfer(V.emissiveMap.colorSpace)===D9,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===O6,flipSided:V.side===f8,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:M0&&V.extensions.clipCullDistance===!0&&Y.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&V.extensions.multiDraw===!0||b0)&&Y.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Y.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return q9.vertexUv1s=G.has(1),q9.vertexUv2s=G.has(2),q9.vertexUv3s=G.has(3),G.clear(),q9}function k(V){let B=[];if(V.shaderID)B.push(V.shaderID);else B.push(V.customVertexShaderID),B.push(V.customFragmentShaderID);if(V.defines!==void 0)for(let C in V.defines)B.push(C),B.push(V.defines[C]);if(V.isRawShaderMaterial===!1)O(B,V),M(B,V),B.push(J.outputColorSpace);return B.push(V.customProgramCacheKey),B.join()}function O(V,B){V.push(B.precision),V.push(B.outputColorSpace),V.push(B.envMapMode),V.push(B.envMapCubeUVHeight),V.push(B.mapUv),V.push(B.alphaMapUv),V.push(B.lightMapUv),V.push(B.aoMapUv),V.push(B.bumpMapUv),V.push(B.normalMapUv),V.push(B.displacementMapUv),V.push(B.emissiveMapUv),V.push(B.metalnessMapUv),V.push(B.roughnessMapUv),V.push(B.anisotropyMapUv),V.push(B.clearcoatMapUv),V.push(B.clearcoatNormalMapUv),V.push(B.clearcoatRoughnessMapUv),V.push(B.iridescenceMapUv),V.push(B.iridescenceThicknessMapUv),V.push(B.sheenColorMapUv),V.push(B.sheenRoughnessMapUv),V.push(B.specularMapUv),V.push(B.specularColorMapUv),V.push(B.specularIntensityMapUv),V.push(B.transmissionMapUv),V.push(B.thicknessMapUv),V.push(B.combine),V.push(B.fogExp2),V.push(B.sizeAttenuation),V.push(B.morphTargetsCount),V.push(B.morphAttributeCount),V.push(B.numDirLights),V.push(B.numPointLights),V.push(B.numSpotLights),V.push(B.numSpotLightMaps),V.push(B.numHemiLights),V.push(B.numRectAreaLights),V.push(B.numDirLightShadows),V.push(B.numPointLightShadows),V.push(B.numSpotLightShadows),V.push(B.numSpotLightShadowsWithMaps),V.push(B.numLightProbes),V.push(B.shadowMapType),V.push(B.toneMapping),V.push(B.numClippingPlanes),V.push(B.numClipIntersection),V.push(B.depthPacking)}function M(V,B){if(W.disableAll(),B.supportsVertexTextures)W.enable(0);if(B.instancing)W.enable(1);if(B.instancingColor)W.enable(2);if(B.instancingMorph)W.enable(3);if(B.matcap)W.enable(4);if(B.envMap)W.enable(5);if(B.normalMapObjectSpace)W.enable(6);if(B.normalMapTangentSpace)W.enable(7);if(B.clearcoat)W.enable(8);if(B.iridescence)W.enable(9);if(B.alphaTest)W.enable(10);if(B.vertexColors)W.enable(11);if(B.vertexAlphas)W.enable(12);if(B.vertexUv1s)W.enable(13);if(B.vertexUv2s)W.enable(14);if(B.vertexUv3s)W.enable(15);if(B.vertexTangents)W.enable(16);if(B.anisotropy)W.enable(17);if(B.alphaHash)W.enable(18);if(B.batching)W.enable(19);if(B.dispersion)W.enable(20);if(B.batchingColor)W.enable(21);if(B.gradientMap)W.enable(22);if(V.push(W.mask),W.disableAll(),B.fog)W.enable(0);if(B.useFog)W.enable(1);if(B.flatShading)W.enable(2);if(B.logarithmicDepthBuffer)W.enable(3);if(B.reversedDepthBuffer)W.enable(4);if(B.skinning)W.enable(5);if(B.morphTargets)W.enable(6);if(B.morphNormals)W.enable(7);if(B.morphColors)W.enable(8);if(B.premultipliedAlpha)W.enable(9);if(B.shadowMapEnabled)W.enable(10);if(B.doubleSided)W.enable(11);if(B.flipSided)W.enable(12);if(B.useDepthPacking)W.enable(13);if(B.dithering)W.enable(14);if(B.transmission)W.enable(15);if(B.sheen)W.enable(16);if(B.opaque)W.enable(17);if(B.pointsUvs)W.enable(18);if(B.decodeVideoTexture)W.enable(19);if(B.decodeVideoTextureEmissive)W.enable(20);if(B.alphaToCoverage)W.enable(21);V.push(W.mask)}function z(V){let B=N[V.type],C;if(B){let g=z6[B];C=mD.clone(g.uniforms)}else C=V.uniforms;return C}function T(V,B){let C;for(let g=0,p=q.length;g<p;g++){let l=q[g];if(l.cacheKey===B){C=l,++C.usedTimes;break}}if(C===void 0)C=new TV(J,B,V,X),q.push(C);return C}function E(V){if(--V.usedTimes===0){let B=q.indexOf(V);q[B]=q[q.length-1],q.pop(),V.destroy()}}function A(V){U.remove(V)}function S(){U.dispose()}return{getParameters:D,getProgramCacheKey:k,getUniforms:z,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:q,dispose:S}}function jV(){let J=new WeakMap;function w(Q){return J.has(Q)}function Z(Q){let W=J.get(Q);if(W===void 0)W={},J.set(Q,W);return W}function Y(Q){J.delete(Q)}function H(Q,W,U){J.get(Q)[W]=U}function X(){J=new WeakMap}return{has:w,get:Z,remove:Y,update:H,dispose:X}}function fV(J,w){if(J.groupOrder!==w.groupOrder)return J.groupOrder-w.groupOrder;else if(J.renderOrder!==w.renderOrder)return J.renderOrder-w.renderOrder;else if(J.material.id!==w.material.id)return J.material.id-w.material.id;else if(J.z!==w.z)return J.z-w.z;else return J.id-w.id}function RM(J,w){if(J.groupOrder!==w.groupOrder)return J.groupOrder-w.groupOrder;else if(J.renderOrder!==w.renderOrder)return J.renderOrder-w.renderOrder;else if(J.z!==w.z)return w.z-J.z;else return J.id-w.id}function DM(){let J=[],w=0,Z=[],Y=[],H=[];function X(){w=0,Z.length=0,Y.length=0,H.length=0}function Q(K,$,R,N,L,D){let k=J[w];if(k===void 0)k={id:K.id,object:K,geometry:$,material:R,groupOrder:N,renderOrder:K.renderOrder,z:L,group:D},J[w]=k;else k.id=K.id,k.object=K,k.geometry=$,k.material=R,k.groupOrder=N,k.renderOrder=K.renderOrder,k.z=L,k.group=D;return w++,k}function W(K,$,R,N,L,D){let k=Q(K,$,R,N,L,D);if(R.transmission>0)Y.push(k);else if(R.transparent===!0)H.push(k);else Z.push(k)}function U(K,$,R,N,L,D){let k=Q(K,$,R,N,L,D);if(R.transmission>0)Y.unshift(k);else if(R.transparent===!0)H.unshift(k);else Z.unshift(k)}function G(K,$){if(Z.length>1)Z.sort(K||fV);if(Y.length>1)Y.sort($||RM);if(H.length>1)H.sort($||RM)}function q(){for(let K=w,$=J.length;K<$;K++){let R=J[K];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Z,transmissive:Y,transparent:H,init:X,push:W,unshift:U,finish:q,sort:G}}function bV(){let J=new WeakMap;function w(Y,H){let X=J.get(Y),Q;if(X===void 0)Q=new DM,J.set(Y,[Q]);else if(H>=X.length)Q=new DM,X.push(Q);else Q=X[H];return Q}function Z(){J=new WeakMap}return{get:w,dispose:Z}}function xV(){let J={};return{get:function(w){if(J[w.id]!==void 0)return J[w.id];let Z;switch(w.type){case"DirectionalLight":Z={direction:new x,color:new d0};break;case"SpotLight":Z={position:new x,direction:new x,color:new d0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new d0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new d0,groundColor:new d0};break;case"RectAreaLight":Z={color:new d0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[w.id]=Z,Z}}}function hV(){let J={};return{get:function(w){if(J[w.id]!==void 0)return J[w.id];let Z;switch(w.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[w.id]=Z,Z}}}var vV=0;function yV(J,w){return(w.castShadow?2:0)-(J.castShadow?2:0)+(w.map?1:0)-(J.map?1:0)}function gV(J){let w=new xV,Z=hV(),Y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)Y.probe.push(new x);let H=new x,X=new I9,Q=new I9;function W(G){let q=0,K=0,$=0;for(let V=0;V<9;V++)Y.probe[V].set(0,0,0);let R=0,N=0,L=0,D=0,k=0,O=0,M=0,z=0,T=0,E=0,A=0;G.sort(yV);for(let V=0,B=G.length;V<B;V++){let C=G[V],g=C.color,p=C.intensity,l=C.distance,o=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)q+=g.r*p,K+=g.g*p,$+=g.b*p;else if(C.isLightProbe){for(let m=0;m<9;m++)Y.probe[m].addScaledVector(C.sh.coefficients[m],p);A++}else if(C.isDirectionalLight){let m=w.get(C);if(m.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let t=C.shadow,d=Z.get(C);d.shadowIntensity=t.intensity,d.shadowBias=t.bias,d.shadowNormalBias=t.normalBias,d.shadowRadius=t.radius,d.shadowMapSize=t.mapSize,Y.directionalShadow[R]=d,Y.directionalShadowMap[R]=o,Y.directionalShadowMatrix[R]=C.shadow.matrix,O++}Y.directional[R]=m,R++}else if(C.isSpotLight){let m=w.get(C);m.position.setFromMatrixPosition(C.matrixWorld),m.color.copy(g).multiplyScalar(p),m.distance=l,m.coneCos=Math.cos(C.angle),m.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),m.decay=C.decay,Y.spot[L]=m;let t=C.shadow;if(C.map){if(Y.spotLightMap[T]=C.map,T++,t.updateMatrices(C),C.castShadow)E++}if(Y.spotLightMatrix[L]=t.matrix,C.castShadow){let d=Z.get(C);d.shadowIntensity=t.intensity,d.shadowBias=t.bias,d.shadowNormalBias=t.normalBias,d.shadowRadius=t.radius,d.shadowMapSize=t.mapSize,Y.spotShadow[L]=d,Y.spotShadowMap[L]=o,z++}L++}else if(C.isRectAreaLight){let m=w.get(C);m.color.copy(g).multiplyScalar(p),m.halfWidth.set(C.width*0.5,0,0),m.halfHeight.set(0,C.height*0.5,0),Y.rectArea[D]=m,D++}else if(C.isPointLight){let m=w.get(C);if(m.color.copy(C.color).multiplyScalar(C.intensity),m.distance=C.distance,m.decay=C.decay,C.castShadow){let t=C.shadow,d=Z.get(C);d.shadowIntensity=t.intensity,d.shadowBias=t.bias,d.shadowNormalBias=t.normalBias,d.shadowRadius=t.radius,d.shadowMapSize=t.mapSize,d.shadowCameraNear=t.camera.near,d.shadowCameraFar=t.camera.far,Y.pointShadow[N]=d,Y.pointShadowMap[N]=o,Y.pointShadowMatrix[N]=C.shadow.matrix,M++}Y.point[N]=m,N++}else if(C.isHemisphereLight){let m=w.get(C);m.skyColor.copy(C.color).multiplyScalar(p),m.groundColor.copy(C.groundColor).multiplyScalar(p),Y.hemi[k]=m,k++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=Q0.LTC_FLOAT_1,Y.rectAreaLTC2=Q0.LTC_FLOAT_2;else Y.rectAreaLTC1=Q0.LTC_HALF_1,Y.rectAreaLTC2=Q0.LTC_HALF_2;Y.ambient[0]=q,Y.ambient[1]=K,Y.ambient[2]=$;let S=Y.hash;if(S.directionalLength!==R||S.pointLength!==N||S.spotLength!==L||S.rectAreaLength!==D||S.hemiLength!==k||S.numDirectionalShadows!==O||S.numPointShadows!==M||S.numSpotShadows!==z||S.numSpotMaps!==T||S.numLightProbes!==A)Y.directional.length=R,Y.spot.length=L,Y.rectArea.length=D,Y.point.length=N,Y.hemi.length=k,Y.directionalShadow.length=O,Y.directionalShadowMap.length=O,Y.pointShadow.length=M,Y.pointShadowMap.length=M,Y.spotShadow.length=z,Y.spotShadowMap.length=z,Y.directionalShadowMatrix.length=O,Y.pointShadowMatrix.length=M,Y.spotLightMatrix.length=z+T-E,Y.spotLightMap.length=T,Y.numSpotLightShadowsWithMaps=E,Y.numLightProbes=A,S.directionalLength=R,S.pointLength=N,S.spotLength=L,S.rectAreaLength=D,S.hemiLength=k,S.numDirectionalShadows=O,S.numPointShadows=M,S.numSpotShadows=z,S.numSpotMaps=T,S.numLightProbes=A,Y.version=vV++}function U(G,q){let K=0,$=0,R=0,N=0,L=0,D=q.matrixWorldInverse;for(let k=0,O=G.length;k<O;k++){let M=G[k];if(M.isDirectionalLight){let z=Y.directional[K];z.direction.setFromMatrixPosition(M.matrixWorld),H.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(H),z.direction.transformDirection(D),K++}else if(M.isSpotLight){let z=Y.spot[R];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),z.direction.setFromMatrixPosition(M.matrixWorld),H.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(H),z.direction.transformDirection(D),R++}else if(M.isRectAreaLight){let z=Y.rectArea[N];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),Q.identity(),X.copy(M.matrixWorld),X.premultiply(D),Q.extractRotation(X),z.halfWidth.set(M.width*0.5,0,0),z.halfHeight.set(0,M.height*0.5,0),z.halfWidth.applyMatrix4(Q),z.halfHeight.applyMatrix4(Q),N++}else if(M.isPointLight){let z=Y.point[$];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),$++}else if(M.isHemisphereLight){let z=Y.hemi[L];z.direction.setFromMatrixPosition(M.matrixWorld),z.direction.transformDirection(D),L++}}}return{setup:W,setupView:U,state:Y}}function MM(J){let w=new gV(J),Z=[],Y=[];function H(q){G.camera=q,Z.length=0,Y.length=0}function X(q){Z.push(q)}function Q(q){Y.push(q)}function W(){w.setup(Z)}function U(q){w.setupView(Z,q)}let G={lightsArray:Z,shadowsArray:Y,camera:null,lights:w,transmissionRenderTarget:{}};return{init:H,state:G,setupLights:W,setupLightsView:U,pushLight:X,pushShadow:Q}}function lV(J){let w=new WeakMap;function Z(H,X=0){let Q=w.get(H),W;if(Q===void 0)W=new MM(J),w.set(H,[W]);else if(X>=Q.length)W=new MM(J),Q.push(W);else W=Q[X];return W}function Y(){w=new WeakMap}return{get:Z,dispose:Y}}var pV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dV=`uniform sampler2D shadow_pass;
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
}`;function mV(J,w,Z){let Y=new Ew,H=new a0,X=new a0,Q=new X9,W=new xU({depthPacking:TD}),U=new hU,G={},q=Z.maxTextureSize,K={[g5]:f8,[f8]:g5,[O6]:O6},$=new N6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new a0},radius:{value:4}},vertexShader:pV,fragmentShader:dV}),R=$.clone();R.defines.HORIZONTAL_PASS=1;let N=new a6;N.setAttribute("position",new a8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new F8(N,$),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yW;let k=this.type;this.render=function(E,A,S){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(E.length===0)return;let V=J.getRenderTarget(),B=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(j7),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let p=k!==M6&&this.type===M6,l=k===M6&&this.type!==M6;for(let o=0,m=E.length;o<m;o++){let t=E[o],d=t.shadow;if(d===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;H.copy(d.mapSize);let a=d.getFrameExtents();if(H.multiply(a),X.copy(d.mapSize),H.x>q||H.y>q){if(H.x>q)X.x=Math.floor(q/a.x),H.x=X.x*a.x,d.mapSize.x=X.x;if(H.y>q)X.y=Math.floor(q/a.y),H.y=X.y*a.y,d.mapSize.y=X.y}if(d.map===null||p===!0||l===!0){let B0=this.type!==M6?{minFilter:d5,magFilter:d5}:{};if(d.map!==null)d.map.dispose();d.map=new n6(H.x,H.y,B0),d.map.texture.name=t.name+".shadowMap",d.camera.updateProjectionMatrix()}J.setRenderTarget(d.map),J.clear();let X0=d.getViewportCount();for(let B0=0;B0<X0;B0++){let g0=d.getViewport(B0);Q.set(X.x*g0.x,X.y*g0.y,X.x*g0.z,X.y*g0.w),g.viewport(Q),d.updateMatrices(t,B0),Y=d.getFrustum(),z(A,S,d.camera,t,this.type)}if(d.isPointLightShadow!==!0&&this.type===M6)O(d,S);d.needsUpdate=!1}k=this.type,D.needsUpdate=!1,J.setRenderTarget(V,B,C)};function O(E,A){let S=w.update(L);if($.defines.VSM_SAMPLES!==E.blurSamples)$.defines.VSM_SAMPLES=E.blurSamples,R.defines.VSM_SAMPLES=E.blurSamples,$.needsUpdate=!0,R.needsUpdate=!0;if(E.mapPass===null)E.mapPass=new n6(H.x,H.y);$.uniforms.shadow_pass.value=E.map.texture,$.uniforms.resolution.value=E.mapSize,$.uniforms.radius.value=E.radius,J.setRenderTarget(E.mapPass),J.clear(),J.renderBufferDirect(A,null,S,$,L,null),R.uniforms.shadow_pass.value=E.mapPass.texture,R.uniforms.resolution.value=E.mapSize,R.uniforms.radius.value=E.radius,J.setRenderTarget(E.map),J.clear(),J.renderBufferDirect(A,null,S,R,L,null)}function M(E,A,S,V){let B=null,C=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)B=C;else if(B=S.isPointLight===!0?U:W,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let g=B.uuid,p=A.uuid,l=G[g];if(l===void 0)l={},G[g]=l;let o=l[p];if(o===void 0)o=B.clone(),l[p]=o,A.addEventListener("dispose",T);B=o}if(B.visible=A.visible,B.wireframe=A.wireframe,V===M6)B.side=A.shadowSide!==null?A.shadowSide:A.side;else B.side=A.shadowSide!==null?A.shadowSide:K[A.side];if(B.alphaMap=A.alphaMap,B.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,B.map=A.map,B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.displacementMap=A.displacementMap,B.displacementScale=A.displacementScale,B.displacementBias=A.displacementBias,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let g=J.properties.get(B);g.light=S}return B}function z(E,A,S,V,B){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)){if((E.castShadow||E.receiveShadow&&B===M6)&&(!E.frustumCulled||Y.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let p=w.update(E),l=E.material;if(Array.isArray(l)){let o=p.groups;for(let m=0,t=o.length;m<t;m++){let d=o[m],a=l[d.materialIndex];if(a&&a.visible){let X0=M(E,a,V,B);E.onBeforeShadow(J,E,A,S,p,X0,d),J.renderBufferDirect(S,null,p,X0,E,d),E.onAfterShadow(J,E,A,S,p,X0,d)}}}else if(l.visible){let o=M(E,l,V,B);E.onBeforeShadow(J,E,A,S,p,o,null),J.renderBufferDirect(S,null,p,o,E,null),E.onAfterShadow(J,E,A,S,p,o,null)}}}let g=E.children;for(let p=0,l=g.length;p<l;p++)z(g[p],A,S,V,B)}function T(E){E.target.removeEventListener("dispose",T);for(let S in G){let V=G[S],B=E.target.uuid;if(B in V)V[B].dispose(),delete V[B]}}}var uV={[jY]:fY,[bY]:vY,[xY]:yY,[Dw]:hY,[fY]:jY,[vY]:bY,[yY]:xY,[hY]:Dw};function cV(J,w){function Z(){let j=!1,U0=new X9,H0=null,R0=new X9(0,0,0,0);return{setMask:function(e){if(H0!==e&&!j)J.colorMask(e,e,e,e),H0=e},setLocked:function(e){j=e},setClear:function(e,n,M0,x0,q9){if(q9===!0)e*=x0,n*=x0,M0*=x0;if(U0.set(e,n,M0,x0),R0.equals(U0)===!1)J.clearColor(e,n,M0,x0),R0.copy(U0)},reset:function(){j=!1,H0=null,R0.set(-1,0,0,0)}}}function Y(){let j=!1,U0=!1,H0=null,R0=null,e=null;return{setReversed:function(n){if(U0!==n){let M0=w.get("EXT_clip_control");if(n)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);U0=n;let x0=e;e=null,this.setClear(x0)}},getReversed:function(){return U0},setTest:function(n){if(n)Y0(J.DEPTH_TEST);else N0(J.DEPTH_TEST)},setMask:function(n){if(H0!==n&&!j)J.depthMask(n),H0=n},setFunc:function(n){if(U0)n=uV[n];if(R0!==n){switch(n){case jY:J.depthFunc(J.NEVER);break;case fY:J.depthFunc(J.ALWAYS);break;case bY:J.depthFunc(J.LESS);break;case Dw:J.depthFunc(J.LEQUAL);break;case xY:J.depthFunc(J.EQUAL);break;case hY:J.depthFunc(J.GEQUAL);break;case vY:J.depthFunc(J.GREATER);break;case yY:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}R0=n}},setLocked:function(n){j=n},setClear:function(n){if(e!==n){if(U0)n=1-n;J.clearDepth(n),e=n}},reset:function(){j=!1,H0=null,R0=null,e=null,U0=!1}}}function H(){let j=!1,U0=null,H0=null,R0=null,e=null,n=null,M0=null,x0=null,q9=null;return{setTest:function(Q9){if(!j)if(Q9)Y0(J.STENCIL_TEST);else N0(J.STENCIL_TEST)},setMask:function(Q9){if(U0!==Q9&&!j)J.stencilMask(Q9),U0=Q9},setFunc:function(Q9,Q6,W6){if(H0!==Q9||R0!==Q6||e!==W6)J.stencilFunc(Q9,Q6,W6),H0=Q9,R0=Q6,e=W6},setOp:function(Q9,Q6,W6){if(n!==Q9||M0!==Q6||x0!==W6)J.stencilOp(Q9,Q6,W6),n=Q9,M0=Q6,x0=W6},setLocked:function(Q9){j=Q9},setClear:function(Q9){if(q9!==Q9)J.clearStencil(Q9),q9=Q9},reset:function(){j=!1,U0=null,H0=null,R0=null,e=null,n=null,M0=null,x0=null,q9=null}}}let X=new Z,Q=new Y,W=new H,U=new WeakMap,G=new WeakMap,q={},K={},$=new WeakMap,R=[],N=null,L=!1,D=null,k=null,O=null,M=null,z=null,T=null,E=null,A=new d0(0,0,0),S=0,V=!1,B=null,C=null,g=null,p=null,l=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,t=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(d)[1]),m=t>=1;else if(d.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),m=t>=2;let a=null,X0={},B0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),M9=new X9().fromArray(B0),t0=new X9().fromArray(g0);function s(j,U0,H0,R0){let e=new Uint8Array(4),n=J.createTexture();J.bindTexture(j,n),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<H0;M0++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(U0,0,J.RGBA,1,1,R0,0,J.RGBA,J.UNSIGNED_BYTE,e);else J.texImage2D(U0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,e);return n}let W0={};W0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),W0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),W0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),W0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),X.setClear(0,0,0,1),Q.setClear(1),W.setClear(0),Y0(J.DEPTH_TEST),Q.setFunc(Dw),O0(!1),V9(vW),Y0(J.CULL_FACE),h0(j7);function Y0(j){if(q[j]!==!0)J.enable(j),q[j]=!0}function N0(j){if(q[j]!==!1)J.disable(j),q[j]=!1}function f0(j,U0){if(K[j]!==U0){if(J.bindFramebuffer(j,U0),K[j]=U0,j===J.DRAW_FRAMEBUFFER)K[J.FRAMEBUFFER]=U0;if(j===J.FRAMEBUFFER)K[J.DRAW_FRAMEBUFFER]=U0;return!0}return!1}function b0(j,U0){let H0=R,R0=!1;if(j){if(H0=$.get(U0),H0===void 0)H0=[],$.set(U0,H0);let e=j.textures;if(H0.length!==e.length||H0[0]!==J.COLOR_ATTACHMENT0){for(let n=0,M0=e.length;n<M0;n++)H0[n]=J.COLOR_ATTACHMENT0+n;H0.length=e.length,R0=!0}}else if(H0[0]!==J.BACK)H0[0]=J.BACK,R0=!0;if(R0)J.drawBuffers(H0)}function d9(j){if(N!==j)return J.useProgram(j),N=j,!0;return!1}let P={[l5]:J.FUNC_ADD,[dR]:J.FUNC_SUBTRACT,[mR]:J.FUNC_REVERSE_SUBTRACT};P[uR]=J.MIN,P[cR]=J.MAX;let B9={[iR]:J.ZERO,[sR]:J.ONE,[oR]:J.SRC_COLOR,[aR]:J.SRC_ALPHA,[ZD]:J.SRC_ALPHA_SATURATE,[JD]:J.DST_COLOR,[tR]:J.DST_ALPHA,[nR]:J.ONE_MINUS_SRC_COLOR,[rR]:J.ONE_MINUS_SRC_ALPHA,[wD]:J.ONE_MINUS_DST_COLOR,[eR]:J.ONE_MINUS_DST_ALPHA,[YD]:J.CONSTANT_COLOR,[HD]:J.ONE_MINUS_CONSTANT_COLOR,[XD]:J.CONSTANT_ALPHA,[QD]:J.ONE_MINUS_CONSTANT_ALPHA};function h0(j,U0,H0,R0,e,n,M0,x0,q9,Q9){if(j===j7){if(L===!0)N0(J.BLEND),L=!1;return}if(L===!1)Y0(J.BLEND),L=!0;if(j!==pR){if(j!==D||Q9!==V){if(k!==l5||z!==l5)J.blendEquation(J.FUNC_ADD),k=l5,z=l5;if(Q9)switch(j){case Rw:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case gW:J.blendFunc(J.ONE,J.ONE);break;case lW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case pW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Rw:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case gW:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case lW:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pW:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}O=null,M=null,T=null,E=null,A.set(0,0,0),S=0,D=j,V=Q9}return}if(e=e||U0,n=n||H0,M0=M0||R0,U0!==k||e!==z)J.blendEquationSeparate(P[U0],P[e]),k=U0,z=e;if(H0!==O||R0!==M||n!==T||M0!==E)J.blendFuncSeparate(B9[H0],B9[R0],B9[n],B9[M0]),O=H0,M=R0,T=n,E=M0;if(x0.equals(A)===!1||q9!==S)J.blendColor(x0.r,x0.g,x0.b,q9),A.copy(x0),S=q9;D=j,V=!1}function j0(j,U0){j.side===O6?N0(J.CULL_FACE):Y0(J.CULL_FACE);let H0=j.side===f8;if(U0)H0=!H0;O0(H0),j.blending===Rw&&j.transparent===!1?h0(j7):h0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),Q.setFunc(j.depthFunc),Q.setTest(j.depthTest),Q.setMask(j.depthWrite),X.setMask(j.colorWrite);let R0=j.stencilWrite;if(W.setTest(R0),R0)W.setMask(j.stencilWriteMask),W.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),W.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);I0(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Y0(J.SAMPLE_ALPHA_TO_COVERAGE):N0(J.SAMPLE_ALPHA_TO_COVERAGE)}function O0(j){if(B!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);B=j}}function V9(j){if(j!==yR){if(Y0(J.CULL_FACE),j!==C)if(j===vW)J.cullFace(J.BACK);else if(j===gR)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else N0(J.CULL_FACE);C=j}function V0(j){if(j!==g){if(m)J.lineWidth(j);g=j}}function I0(j,U0,H0){if(j){if(Y0(J.POLYGON_OFFSET_FILL),p!==U0||l!==H0)J.polygonOffset(U0,H0),p=U0,l=H0}else N0(J.POLYGON_OFFSET_FILL)}function o9(j){if(j)Y0(J.SCISSOR_TEST);else N0(J.SCISSOR_TEST)}function m9(j){if(j===void 0)j=J.TEXTURE0+o-1;if(a!==j)J.activeTexture(j),a=j}function S9(j,U0,H0){if(H0===void 0)if(a===null)H0=J.TEXTURE0+o-1;else H0=a;let R0=X0[H0];if(R0===void 0)R0={type:void 0,texture:void 0},X0[H0]=R0;if(R0.type!==j||R0.texture!==U0){if(a!==H0)J.activeTexture(H0),a=H0;J.bindTexture(j,U0||W0[j]),R0.type=j,R0.texture=U0}}function I(){let j=X0[a];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function F(){try{J.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function i(){try{J.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function r(){try{J.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function u(){try{J.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $0(){try{J.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Z0(){try{J.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function F0(){try{J.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function P0(){try{J.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function w0(){try{J.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function q0(j){if(M9.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),M9.copy(j)}function z0(j){if(t0.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),t0.copy(j)}function L0(j,U0){let H0=G.get(U0);if(H0===void 0)H0=new WeakMap,G.set(U0,H0);let R0=H0.get(j);if(R0===void 0)R0=J.getUniformBlockIndex(U0,j.name),H0.set(j,R0)}function k0(j,U0){let R0=G.get(U0).get(j);if(U.get(U0)!==R0)J.uniformBlockBinding(U0,R0,j.__bindingPointIndex),U.set(U0,R0)}function p0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Q.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),q={},a=null,X0={},K={},$=new WeakMap,R=[],N=null,L=!1,D=null,k=null,O=null,M=null,z=null,T=null,E=null,A=new d0(0,0,0),S=0,V=!1,B=null,C=null,g=null,p=null,l=null,M9.set(0,0,J.canvas.width,J.canvas.height),t0.set(0,0,J.canvas.width,J.canvas.height),X.reset(),Q.reset(),W.reset()}return{buffers:{color:X,depth:Q,stencil:W},enable:Y0,disable:N0,bindFramebuffer:f0,drawBuffers:b0,useProgram:d9,setBlending:h0,setMaterial:j0,setFlipSided:O0,setCullFace:V9,setLineWidth:V0,setPolygonOffset:I0,setScissorTest:o9,activeTexture:m9,bindTexture:S9,unbindTexture:I,compressedTexImage2D:F,compressedTexImage3D:h,texImage2D:P0,texImage3D:w0,updateUBOMapping:L0,uniformBlockBinding:k0,texStorage2D:Z0,texStorage3D:F0,texSubImage2D:i,texSubImage3D:r,compressedTexSubImage2D:u,compressedTexSubImage3D:$0,scissor:q0,viewport:z0,reset:p0}}function iV(J,w,Z,Y,H,X,Q){let W=w.has("WEBGL_multisampled_render_to_texture")?w.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new a0,q=new WeakMap,K,$=new WeakMap,R=!1;try{R=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function N(I,F){return R?new OffscreenCanvas(I,F):$w("canvas")}function L(I,F,h){let i=1,r=S9(I);if(r.width>h||r.height>h)i=h/Math.max(r.width,r.height);if(i<1)if(typeof HTMLImageElement!=="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&I instanceof VideoFrame){let u=Math.floor(i*r.width),$0=Math.floor(i*r.height);if(K===void 0)K=N(u,$0);let Z0=F?N(u,$0):K;return Z0.width=u,Z0.height=$0,Z0.getContext("2d").drawImage(I,0,0,u,$0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+u+"x"+$0+")."),Z0}else{if("data"in I)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return I}return I}function D(I){return I.generateMipmaps}function k(I){J.generateMipmap(I)}function O(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(I,F,h,i,r=!1){if(I!==null){if(J[I]!==void 0)return J[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let u=F;if(F===J.RED){if(h===J.FLOAT)u=J.R32F;if(h===J.HALF_FLOAT)u=J.R16F;if(h===J.UNSIGNED_BYTE)u=J.R8}if(F===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.R8UI;if(h===J.UNSIGNED_SHORT)u=J.R16UI;if(h===J.UNSIGNED_INT)u=J.R32UI;if(h===J.BYTE)u=J.R8I;if(h===J.SHORT)u=J.R16I;if(h===J.INT)u=J.R32I}if(F===J.RG){if(h===J.FLOAT)u=J.RG32F;if(h===J.HALF_FLOAT)u=J.RG16F;if(h===J.UNSIGNED_BYTE)u=J.RG8}if(F===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RG8UI;if(h===J.UNSIGNED_SHORT)u=J.RG16UI;if(h===J.UNSIGNED_INT)u=J.RG32UI;if(h===J.BYTE)u=J.RG8I;if(h===J.SHORT)u=J.RG16I;if(h===J.INT)u=J.RG32I}if(F===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RGB8UI;if(h===J.UNSIGNED_SHORT)u=J.RGB16UI;if(h===J.UNSIGNED_INT)u=J.RGB32UI;if(h===J.BYTE)u=J.RGB8I;if(h===J.SHORT)u=J.RGB16I;if(h===J.INT)u=J.RGB32I}if(F===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(h===J.UNSIGNED_INT)u=J.RGBA32UI;if(h===J.BYTE)u=J.RGBA8I;if(h===J.SHORT)u=J.RGBA16I;if(h===J.INT)u=J.RGBA32I}if(F===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)u=J.R11F_G11F_B10F}if(F===J.RGBA){let $0=r?BU:r0.getTransfer(i);if(h===J.FLOAT)u=J.RGBA32F;if(h===J.HALF_FLOAT)u=J.RGBA16F;if(h===J.UNSIGNED_BYTE)u=$0===D9?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)w.get("EXT_color_buffer_float");return u}function z(I,F){let h;if(I){if(F===null||F===u5||F===c5)h=J.DEPTH24_STENCIL8;else if(F===b7)h=J.DEPTH32F_STENCIL8;else if(F===Fw)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(F===null||F===u5||F===c5)h=J.DEPTH_COMPONENT24;else if(F===b7)h=J.DEPTH_COMPONENT32F;else if(F===Fw)h=J.DEPTH_COMPONENT16;return h}function T(I,F){if(D(I)===!0||I.isFramebufferTexture&&I.minFilter!==d5&&I.minFilter!==R1)return Math.log2(Math.max(F.width,F.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return F.mipmaps.length;else return 1}function E(I){let F=I.target;if(F.removeEventListener("dispose",E),S(F),F.isVideoTexture)q.delete(F)}function A(I){let F=I.target;F.removeEventListener("dispose",A),B(F)}function S(I){let F=Y.get(I);if(F.__webglInit===void 0)return;let h=I.source,i=$.get(h);if(i){let r=i[F.__cacheKey];if(r.usedTimes--,r.usedTimes===0)V(I);if(Object.keys(i).length===0)$.delete(h)}Y.remove(I)}function V(I){let F=Y.get(I);J.deleteTexture(F.__webglTexture);let h=I.source,i=$.get(h);delete i[F.__cacheKey],Q.memory.textures--}function B(I){let F=Y.get(I);if(I.depthTexture)I.depthTexture.dispose(),Y.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let i=0;i<6;i++){if(Array.isArray(F.__webglFramebuffer[i]))for(let r=0;r<F.__webglFramebuffer[i].length;r++)J.deleteFramebuffer(F.__webglFramebuffer[i][r]);else J.deleteFramebuffer(F.__webglFramebuffer[i]);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer[i])}else{if(Array.isArray(F.__webglFramebuffer))for(let i=0;i<F.__webglFramebuffer.length;i++)J.deleteFramebuffer(F.__webglFramebuffer[i]);else J.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)J.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let i=0;i<F.__webglColorRenderbuffer.length;i++)if(F.__webglColorRenderbuffer[i])J.deleteRenderbuffer(F.__webglColorRenderbuffer[i])}if(F.__webglDepthRenderbuffer)J.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let h=I.textures;for(let i=0,r=h.length;i<r;i++){let u=Y.get(h[i]);if(u.__webglTexture)J.deleteTexture(u.__webglTexture),Q.memory.textures--;Y.remove(h[i])}Y.remove(I)}let C=0;function g(){C=0}function p(){let I=C;if(I>=H.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+H.maxTextures);return C+=1,I}function l(I){let F=[];return F.push(I.wrapS),F.push(I.wrapT),F.push(I.wrapR||0),F.push(I.magFilter),F.push(I.minFilter),F.push(I.anisotropy),F.push(I.internalFormat),F.push(I.format),F.push(I.type),F.push(I.generateMipmaps),F.push(I.premultiplyAlpha),F.push(I.flipY),F.push(I.unpackAlignment),F.push(I.colorSpace),F.join()}function o(I,F){let h=Y.get(I);if(I.isVideoTexture)o9(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&h.__version!==I.version){let i=I.image;if(i===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(i.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W0(h,I,F);return}}else if(I.isExternalTexture)h.__webglTexture=I.sourceTexture?I.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+F)}function m(I,F){let h=Y.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&h.__version!==I.version){W0(h,I,F);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+F)}function t(I,F){let h=Y.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&h.__version!==I.version){W0(h,I,F);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+F)}function d(I,F){let h=Y.get(I);if(I.version>0&&h.__version!==I.version){Y0(h,I,F);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+F)}let a={[OD]:J.REPEAT,[FD]:J.CLAMP_TO_EDGE,[ND]:J.MIRRORED_REPEAT},X0={[d5]:J.NEAREST,[zD]:J.NEAREST_MIPMAP_NEAREST,[Ow]:J.NEAREST_MIPMAP_LINEAR,[R1]:J.LINEAR,[pY]:J.LINEAR_MIPMAP_NEAREST,[m5]:J.LINEAR_MIPMAP_LINEAR},B0={[fD]:J.NEVER,[gD]:J.ALWAYS,[bD]:J.LESS,[VU]:J.LEQUAL,[xD]:J.EQUAL,[yD]:J.GEQUAL,[hD]:J.GREATER,[vD]:J.NOTEQUAL};function g0(I,F){if(F.type===b7&&w.has("OES_texture_float_linear")===!1&&(F.magFilter===R1||F.magFilter===pY||F.magFilter===Ow||F.magFilter===m5||F.minFilter===R1||F.minFilter===pY||F.minFilter===Ow||F.minFilter===m5))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,a[F.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,a[F.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,a[F.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,X0[F.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,X0[F.minFilter]),F.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,B0[F.compareFunction]);if(w.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===d5)return;if(F.minFilter!==Ow&&F.minFilter!==m5)return;if(F.type===b7&&w.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||Y.get(F).__currentAnisotropy){let h=w.get("EXT_texture_filter_anisotropic");J.texParameterf(I,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,H.getMaxAnisotropy())),Y.get(F).__currentAnisotropy=F.anisotropy}}}function M9(I,F){let h=!1;if(I.__webglInit===void 0)I.__webglInit=!0,F.addEventListener("dispose",E);let i=F.source,r=$.get(i);if(r===void 0)r={},$.set(i,r);let u=l(F);if(u!==I.__cacheKey){if(r[u]===void 0)r[u]={texture:J.createTexture(),usedTimes:0},Q.memory.textures++,h=!0;r[u].usedTimes++;let $0=r[I.__cacheKey];if($0!==void 0){if(r[I.__cacheKey].usedTimes--,$0.usedTimes===0)V(F)}I.__cacheKey=u,I.__webglTexture=r[u].texture}return h}function t0(I,F,h){return Math.floor(Math.floor(I/h)/F)}function s(I,F,h,i){let u=I.updateRanges;if(u.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,F.width,F.height,h,i,F.data);else{u.sort((w0,q0)=>w0.start-q0.start);let $0=0;for(let w0=1;w0<u.length;w0++){let q0=u[$0],z0=u[w0],L0=q0.start+q0.count,k0=t0(z0.start,F.width,4),p0=t0(q0.start,F.width,4);if(z0.start<=L0+1&&k0===p0&&t0(z0.start+z0.count-1,F.width,4)===k0)q0.count=Math.max(q0.count,z0.start+z0.count-q0.start);else++$0,u[$0]=z0}u.length=$0+1;let Z0=J.getParameter(J.UNPACK_ROW_LENGTH),F0=J.getParameter(J.UNPACK_SKIP_PIXELS),P0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,F.width);for(let w0=0,q0=u.length;w0<q0;w0++){let z0=u[w0],L0=Math.floor(z0.start/4),k0=Math.ceil(z0.count/4),p0=L0%F.width,j=Math.floor(L0/F.width),U0=k0,H0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,p0),J.pixelStorei(J.UNPACK_SKIP_ROWS,j),Z.texSubImage2D(J.TEXTURE_2D,0,p0,j,U0,1,h,i,F.data)}I.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,Z0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,F0),J.pixelStorei(J.UNPACK_SKIP_ROWS,P0)}}function W0(I,F,h){let i=J.TEXTURE_2D;if(F.isDataArrayTexture||F.isCompressedArrayTexture)i=J.TEXTURE_2D_ARRAY;if(F.isData3DTexture)i=J.TEXTURE_3D;let r=M9(I,F),u=F.source;Z.bindTexture(i,I.__webglTexture,J.TEXTURE0+h);let $0=Y.get(u);if(u.version!==$0.__version||r===!0){Z.activeTexture(J.TEXTURE0+h);let Z0=r0.getPrimaries(r0.workingColorSpace),F0=F.colorSpace===D1?null:r0.getPrimaries(F.colorSpace),P0=F.colorSpace===D1||Z0===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,P0);let w0=L(F.image,!1,H.maxTextureSize);w0=m9(F,w0);let q0=X.convert(F.format,F.colorSpace),z0=X.convert(F.type),L0=M(F.internalFormat,q0,z0,F.colorSpace,F.isVideoTexture);g0(i,F);let k0,p0=F.mipmaps,j=F.isVideoTexture!==!0,U0=$0.__version===void 0||r===!0,H0=u.dataReady,R0=T(F,w0);if(F.isDepthTexture){if(L0=z(F.format===zw,F.type),U0)if(j)Z.texStorage2D(J.TEXTURE_2D,1,L0,w0.width,w0.height);else Z.texImage2D(J.TEXTURE_2D,0,L0,w0.width,w0.height,0,q0,z0,null)}else if(F.isDataTexture)if(p0.length>0){if(j&&U0)Z.texStorage2D(J.TEXTURE_2D,R0,L0,p0[0].width,p0[0].height);for(let e=0,n=p0.length;e<n;e++)if(k0=p0[e],j){if(H0)Z.texSubImage2D(J.TEXTURE_2D,e,0,0,k0.width,k0.height,q0,z0,k0.data)}else Z.texImage2D(J.TEXTURE_2D,e,L0,k0.width,k0.height,0,q0,z0,k0.data);F.generateMipmaps=!1}else if(j){if(U0)Z.texStorage2D(J.TEXTURE_2D,R0,L0,w0.width,w0.height);if(H0)s(F,w0,q0,z0)}else Z.texImage2D(J.TEXTURE_2D,0,L0,w0.width,w0.height,0,q0,z0,w0.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){if(j&&U0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,R0,L0,p0[0].width,p0[0].height,w0.depth);for(let e=0,n=p0.length;e<n;e++)if(k0=p0[e],F.format!==F6)if(q0!==null)if(j){if(H0)if(F.layerUpdates.size>0){let M0=rU(k0.width,k0.height,F.format,F.type);for(let x0 of F.layerUpdates){let q9=k0.data.subarray(x0*M0/k0.data.BYTES_PER_ELEMENT,(x0+1)*M0/k0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,x0,k0.width,k0.height,1,q0,q9)}F.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,k0.width,k0.height,w0.depth,q0,k0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,e,L0,k0.width,k0.height,w0.depth,0,k0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(H0)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,k0.width,k0.height,w0.depth,q0,z0,k0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,e,L0,k0.width,k0.height,w0.depth,0,q0,z0,k0.data)}else{if(j&&U0)Z.texStorage2D(J.TEXTURE_2D,R0,L0,p0[0].width,p0[0].height);for(let e=0,n=p0.length;e<n;e++)if(k0=p0[e],F.format!==F6)if(q0!==null)if(j){if(H0)Z.compressedTexSubImage2D(J.TEXTURE_2D,e,0,0,k0.width,k0.height,q0,k0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,e,L0,k0.width,k0.height,0,k0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(H0)Z.texSubImage2D(J.TEXTURE_2D,e,0,0,k0.width,k0.height,q0,z0,k0.data)}else Z.texImage2D(J.TEXTURE_2D,e,L0,k0.width,k0.height,0,q0,z0,k0.data)}else if(F.isDataArrayTexture)if(j){if(U0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,R0,L0,w0.width,w0.height,w0.depth);if(H0)if(F.layerUpdates.size>0){let e=rU(w0.width,w0.height,F.format,F.type);for(let n of F.layerUpdates){let M0=w0.data.subarray(n*e/w0.data.BYTES_PER_ELEMENT,(n+1)*e/w0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,n,w0.width,w0.height,1,q0,z0,M0)}F.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,w0.width,w0.height,w0.depth,q0,z0,w0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,L0,w0.width,w0.height,w0.depth,0,q0,z0,w0.data);else if(F.isData3DTexture)if(j){if(U0)Z.texStorage3D(J.TEXTURE_3D,R0,L0,w0.width,w0.height,w0.depth);if(H0)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,w0.width,w0.height,w0.depth,q0,z0,w0.data)}else Z.texImage3D(J.TEXTURE_3D,0,L0,w0.width,w0.height,w0.depth,0,q0,z0,w0.data);else if(F.isFramebufferTexture){if(U0)if(j)Z.texStorage2D(J.TEXTURE_2D,R0,L0,w0.width,w0.height);else{let{width:e,height:n}=w0;for(let M0=0;M0<R0;M0++)Z.texImage2D(J.TEXTURE_2D,M0,L0,e,n,0,q0,z0,null),e>>=1,n>>=1}}else if(p0.length>0){if(j&&U0){let e=S9(p0[0]);Z.texStorage2D(J.TEXTURE_2D,R0,L0,e.width,e.height)}for(let e=0,n=p0.length;e<n;e++)if(k0=p0[e],j){if(H0)Z.texSubImage2D(J.TEXTURE_2D,e,0,0,q0,z0,k0)}else Z.texImage2D(J.TEXTURE_2D,e,L0,q0,z0,k0);F.generateMipmaps=!1}else if(j){if(U0){let e=S9(w0);Z.texStorage2D(J.TEXTURE_2D,R0,L0,e.width,e.height)}if(H0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,q0,z0,w0)}else Z.texImage2D(J.TEXTURE_2D,0,L0,q0,z0,w0);if(D(F))k(i);if($0.__version=u.version,F.onUpdate)F.onUpdate(F)}I.__version=F.version}function Y0(I,F,h){if(F.image.length!==6)return;let i=M9(I,F),r=F.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+h);let u=Y.get(r);if(r.version!==u.__version||i===!0){Z.activeTexture(J.TEXTURE0+h);let $0=r0.getPrimaries(r0.workingColorSpace),Z0=F.colorSpace===D1?null:r0.getPrimaries(F.colorSpace),F0=F.colorSpace===D1||$0===Z0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0);let P0=F.isCompressedTexture||F.image[0].isCompressedTexture,w0=F.image[0]&&F.image[0].isDataTexture,q0=[];for(let n=0;n<6;n++){if(!P0&&!w0)q0[n]=L(F.image[n],!0,H.maxCubemapSize);else q0[n]=w0?F.image[n].image:F.image[n];q0[n]=m9(F,q0[n])}let z0=q0[0],L0=X.convert(F.format,F.colorSpace),k0=X.convert(F.type),p0=M(F.internalFormat,L0,k0,F.colorSpace),j=F.isVideoTexture!==!0,U0=u.__version===void 0||i===!0,H0=r.dataReady,R0=T(F,z0);g0(J.TEXTURE_CUBE_MAP,F);let e;if(P0){if(j&&U0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,R0,p0,z0.width,z0.height);for(let n=0;n<6;n++){e=q0[n].mipmaps;for(let M0=0;M0<e.length;M0++){let x0=e[M0];if(F.format!==F6)if(L0!==null)if(j){if(H0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0,0,0,x0.width,x0.height,L0,x0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0,p0,x0.width,x0.height,0,x0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0,0,0,x0.width,x0.height,L0,k0,x0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0,p0,x0.width,x0.height,0,L0,k0,x0.data)}}}else{if(e=F.mipmaps,j&&U0){if(e.length>0)R0++;let n=S9(q0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,R0,p0,n.width,n.height)}for(let n=0;n<6;n++)if(w0){if(j){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,q0[n].width,q0[n].height,L0,k0,q0[n].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,p0,q0[n].width,q0[n].height,0,L0,k0,q0[n].data);for(let M0=0;M0<e.length;M0++){let q9=e[M0].image[n].image;if(j){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0+1,0,0,q9.width,q9.height,L0,k0,q9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0+1,p0,q9.width,q9.height,0,L0,k0,q9.data)}}else{if(j){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,L0,k0,q0[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,p0,L0,k0,q0[n]);for(let M0=0;M0<e.length;M0++){let x0=e[M0];if(j){if(H0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0+1,0,0,L0,k0,x0.image[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,M0+1,p0,L0,k0,x0.image[n])}}}if(D(F))k(J.TEXTURE_CUBE_MAP);if(u.__version=r.version,F.onUpdate)F.onUpdate(F)}I.__version=F.version}function N0(I,F,h,i,r,u){let $0=X.convert(h.format,h.colorSpace),Z0=X.convert(h.type),F0=M(h.internalFormat,$0,Z0,h.colorSpace),P0=Y.get(F),w0=Y.get(h);if(w0.__renderTarget=F,!P0.__hasExternalTextures){let q0=Math.max(1,F.width>>u),z0=Math.max(1,F.height>>u);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Z.texImage3D(r,u,F0,q0,z0,F.depth,0,$0,Z0,null);else Z.texImage2D(r,u,F0,q0,z0,0,$0,Z0,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,I),I0(F))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,r,w0.__webglTexture,0,V0(F));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,i,r,w0.__webglTexture,u);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function f0(I,F,h){if(J.bindRenderbuffer(J.RENDERBUFFER,I),F.depthBuffer){let i=F.depthTexture,r=i&&i.isDepthTexture?i.type:null,u=z(F.stencilBuffer,r),$0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=V0(F);if(I0(F))W.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Z0,u,F.width,F.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,u,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,u,F.width,F.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,$0,J.RENDERBUFFER,I)}else{let i=F.textures;for(let r=0;r<i.length;r++){let u=i[r],$0=X.convert(u.format,u.colorSpace),Z0=X.convert(u.type),F0=M(u.internalFormat,$0,Z0,u.colorSpace),P0=V0(F);if(h&&I0(F)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,P0,F0,F.width,F.height);else if(I0(F))W.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,P0,F0,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,F0,F.width,F.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function b0(I,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,I),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let i=Y.get(F.depthTexture);if(i.__renderTarget=F,!i.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0;o(F.depthTexture,0);let r=i.__webglTexture,u=V0(F);if(F.depthTexture.format===dY)if(I0(F))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(F.depthTexture.format===zw)if(I0(F))W.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw new Error("Unknown depthTexture format")}function d9(I){let F=Y.get(I),h=I.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==I.depthTexture){let i=I.depthTexture;if(F.__depthDisposeCallback)F.__depthDisposeCallback();if(i){let r=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,i.removeEventListener("dispose",r)};i.addEventListener("dispose",r),F.__depthDisposeCallback=r}F.__boundDepthTexture=i}if(I.depthTexture&&!F.__autoAllocateDepthBuffer){if(h)throw new Error("target.depthTexture not supported in Cube render targets");let i=I.texture.mipmaps;if(i&&i.length>0)b0(F.__webglFramebuffer[0],I);else b0(F.__webglFramebuffer,I)}else if(h){F.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(Z.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[i]),F.__webglDepthbuffer[i]===void 0)F.__webglDepthbuffer[i]=J.createRenderbuffer(),f0(F.__webglDepthbuffer[i],I,!1);else{let r=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=F.__webglDepthbuffer[i];J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,u)}}else{let i=I.texture.mipmaps;if(i&&i.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer);if(F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=J.createRenderbuffer(),f0(F.__webglDepthbuffer,I,!1);else{let r=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=F.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,u)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function P(I,F,h){let i=Y.get(I);if(F!==void 0)N0(i.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)d9(I)}function B9(I){let F=I.texture,h=Y.get(I),i=Y.get(F);I.addEventListener("dispose",A);let r=I.textures,u=I.isWebGLCubeRenderTarget===!0,$0=r.length>1;if(!$0){if(i.__webglTexture===void 0)i.__webglTexture=J.createTexture();i.__version=F.version,Q.memory.textures++}if(u){h.__webglFramebuffer=[];for(let Z0=0;Z0<6;Z0++)if(F.mipmaps&&F.mipmaps.length>0){h.__webglFramebuffer[Z0]=[];for(let F0=0;F0<F.mipmaps.length;F0++)h.__webglFramebuffer[Z0][F0]=J.createFramebuffer()}else h.__webglFramebuffer[Z0]=J.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){h.__webglFramebuffer=[];for(let Z0=0;Z0<F.mipmaps.length;Z0++)h.__webglFramebuffer[Z0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if($0)for(let Z0=0,F0=r.length;Z0<F0;Z0++){let P0=Y.get(r[Z0]);if(P0.__webglTexture===void 0)P0.__webglTexture=J.createTexture(),Q.memory.textures++}if(I.samples>0&&I0(I)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let Z0=0;Z0<r.length;Z0++){let F0=r[Z0];h.__webglColorRenderbuffer[Z0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[Z0]);let P0=X.convert(F0.format,F0.colorSpace),w0=X.convert(F0.type),q0=M(F0.internalFormat,P0,w0,F0.colorSpace,I.isXRRenderTarget===!0),z0=V0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,z0,q0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,h.__webglColorRenderbuffer[Z0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),f0(h.__webglDepthRenderbuffer,I,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(u){Z.bindTexture(J.TEXTURE_CUBE_MAP,i.__webglTexture),g0(J.TEXTURE_CUBE_MAP,F);for(let Z0=0;Z0<6;Z0++)if(F.mipmaps&&F.mipmaps.length>0)for(let F0=0;F0<F.mipmaps.length;F0++)N0(h.__webglFramebuffer[Z0][F0],I,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,F0);else N0(h.__webglFramebuffer[Z0],I,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0);if(D(F))k(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if($0){for(let Z0=0,F0=r.length;Z0<F0;Z0++){let P0=r[Z0],w0=Y.get(P0),q0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)q0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(q0,w0.__webglTexture),g0(q0,P0),N0(h.__webglFramebuffer,I,P0,J.COLOR_ATTACHMENT0+Z0,q0,0),D(P0))k(q0)}Z.unbindTexture()}else{let Z0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)Z0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(Z0,i.__webglTexture),g0(Z0,F),F.mipmaps&&F.mipmaps.length>0)for(let F0=0;F0<F.mipmaps.length;F0++)N0(h.__webglFramebuffer[F0],I,F,J.COLOR_ATTACHMENT0,Z0,F0);else N0(h.__webglFramebuffer,I,F,J.COLOR_ATTACHMENT0,Z0,0);if(D(F))k(Z0);Z.unbindTexture()}if(I.depthBuffer)d9(I)}function h0(I){let F=I.textures;for(let h=0,i=F.length;h<i;h++){let r=F[h];if(D(r)){let u=O(I),$0=Y.get(r).__webglTexture;Z.bindTexture(u,$0),k(u),Z.unbindTexture()}}}let j0=[],O0=[];function V9(I){if(I.samples>0){if(I0(I)===!1){let{textures:F,width:h,height:i}=I,r=J.COLOR_BUFFER_BIT,u=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=Y.get(I),Z0=F.length>1;if(Z0)for(let P0=0;P0<F.length;P0++)Z.bindFramebuffer(J.FRAMEBUFFER,$0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,$0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,$0.__webglMultisampledFramebuffer);let F0=I.texture.mipmaps;if(F0&&F0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,$0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,$0.__webglFramebuffer);for(let P0=0;P0<F.length;P0++){if(I.resolveDepthBuffer){if(I.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(Z0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,$0.__webglColorRenderbuffer[P0]);let w0=Y.get(F[P0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w0,0)}if(J.blitFramebuffer(0,0,h,i,0,0,h,i,r,J.NEAREST),U===!0){if(j0.length=0,O0.length=0,j0.push(J.COLOR_ATTACHMENT0+P0),I.depthBuffer&&I.resolveDepthBuffer===!1)j0.push(u),O0.push(u),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,O0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,j0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Z0)for(let P0=0;P0<F.length;P0++){Z.bindFramebuffer(J.FRAMEBUFFER,$0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,$0.__webglColorRenderbuffer[P0]);let w0=Y.get(F[P0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,$0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,w0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,$0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&U){let F=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[F])}}}function V0(I){return Math.min(H.maxSamples,I.samples)}function I0(I){let F=Y.get(I);return I.samples>0&&w.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function o9(I){let F=Q.render.frame;if(q.get(I)!==F)q.set(I,F),I.update()}function m9(I,F){let{colorSpace:h,format:i,type:r}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return F;if(h!==Lw&&h!==D1)if(r0.getTransfer(h)===D9){if(i!==F6||r!==f7)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return F}function S9(I){if(typeof HTMLImageElement!=="undefined"&&I instanceof HTMLImageElement)G.width=I.naturalWidth||I.width,G.height=I.naturalHeight||I.height;else if(typeof VideoFrame!=="undefined"&&I instanceof VideoFrame)G.width=I.displayWidth,G.height=I.displayHeight;else G.width=I.width,G.height=I.height;return G}this.allocateTextureUnit=p,this.resetTextureUnits=g,this.setTexture2D=o,this.setTexture2DArray=m,this.setTexture3D=t,this.setTextureCube=d,this.rebindTextures=P,this.setupRenderTarget=B9,this.updateRenderTargetMipmap=h0,this.updateMultisampleRenderTarget=V9,this.setupDepthRenderbuffer=d9,this.setupFrameBufferTexture=N0,this.useMultisampledRTT=I0}function sV(J,w){function Z(Y,H=D1){let X,Q=r0.getTransfer(H);if(Y===f7)return J.UNSIGNED_BYTE;if(Y===mW)return J.UNSIGNED_SHORT_4_4_4_4;if(Y===uW)return J.UNSIGNED_SHORT_5_5_5_1;if(Y===VD)return J.UNSIGNED_INT_5_9_9_9_REV;if(Y===_D)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Y===LD)return J.BYTE;if(Y===BD)return J.SHORT;if(Y===Fw)return J.UNSIGNED_SHORT;if(Y===dW)return J.INT;if(Y===u5)return J.UNSIGNED_INT;if(Y===b7)return J.FLOAT;if(Y===Nw)return J.HALF_FLOAT;if(Y===AD)return J.ALPHA;if(Y===ED)return J.RGB;if(Y===F6)return J.RGBA;if(Y===dY)return J.DEPTH_COMPONENT;if(Y===zw)return J.DEPTH_STENCIL;if(Y===ID)return J.RED;if(Y===cW)return J.RED_INTEGER;if(Y===CD)return J.RG;if(Y===iW)return J.RG_INTEGER;if(Y===sW)return J.RGBA_INTEGER;if(Y===mY||Y===uY||Y===cY||Y===iY)if(Q===D9)if(X=w.get("WEBGL_compressed_texture_s3tc_srgb"),X!==null){if(Y===mY)return X.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Y===uY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Y===cY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Y===iY)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(X=w.get("WEBGL_compressed_texture_s3tc"),X!==null){if(Y===mY)return X.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Y===uY)return X.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Y===cY)return X.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Y===iY)return X.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Y===oW||Y===nW||Y===aW||Y===rW)if(X=w.get("WEBGL_compressed_texture_pvrtc"),X!==null){if(Y===oW)return X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Y===nW)return X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Y===aW)return X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Y===rW)return X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Y===tW||Y===eW||Y===JU)if(X=w.get("WEBGL_compressed_texture_etc"),X!==null){if(Y===tW||Y===eW)return Q===D9?X.COMPRESSED_SRGB8_ETC2:X.COMPRESSED_RGB8_ETC2;if(Y===JU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:X.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Y===wU||Y===ZU||Y===YU||Y===HU||Y===XU||Y===QU||Y===WU||Y===UU||Y===GU||Y===qU||Y===kU||Y===KU||Y===$U||Y===RU)if(X=w.get("WEBGL_compressed_texture_astc"),X!==null){if(Y===wU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:X.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Y===ZU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:X.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Y===YU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:X.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Y===HU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:X.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Y===XU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:X.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Y===QU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:X.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Y===WU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:X.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Y===UU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:X.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Y===GU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:X.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Y===qU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:X.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Y===kU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:X.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Y===KU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:X.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Y===$U)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:X.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Y===RU)return Q===D9?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:X.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Y===DU||Y===MU||Y===OU)if(X=w.get("EXT_texture_compression_bptc"),X!==null){if(Y===DU)return Q===D9?X.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:X.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Y===MU)return X.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Y===OU)return X.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Y===FU||Y===NU||Y===zU||Y===LU)if(X=w.get("EXT_texture_compression_rgtc"),X!==null){if(Y===FU)return X.COMPRESSED_RED_RGTC1_EXT;if(Y===NU)return X.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Y===zU)return X.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Y===LU)return X.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Y===c5)return J.UNSIGNED_INT_24_8;return J[Y]!==void 0?J[Y]:null}return{convert:Z}}var oV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nV=`
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

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,w){if(this.texture===null){let Z=new ZH(J.texture);if(J.depthNear!==w.depthNear||J.depthFar!==w.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let w=J.cameras[0].viewport,Z=new N6({vertexShader:oV,fragmentShader:nV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:w.z},depthHeight:{value:w.w}}});this.mesh=new F8(new Cw(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CM extends x7{constructor(J,w){super();let Z=this,Y=null,H=1,X=null,Q="local-floor",W=1,U=null,G=null,q=null,K=null,$=null,R=null,N=typeof XRWebGLBinding!=="undefined",L=new IM,D={},k=w.getContextAttributes(),O=null,M=null,z=[],T=[],E=new a0,A=null,S=new J8;S.viewport=new X9;let V=new J8;V.viewport=new X9;let B=[S,V],C=new oU,g=null,p=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let W0=z[s];if(W0===void 0)W0=new Aw,z[s]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(s){let W0=z[s];if(W0===void 0)W0=new Aw,z[s]=W0;return W0.getGripSpace()},this.getHand=function(s){let W0=z[s];if(W0===void 0)W0=new Aw,z[s]=W0;return W0.getHandSpace()};function l(s){let W0=T.indexOf(s.inputSource);if(W0===-1)return;let Y0=z[W0];if(Y0!==void 0)Y0.update(s.inputSource,s.frame,U||X),Y0.dispatchEvent({type:s.type,data:s.inputSource})}function o(){Y.removeEventListener("select",l),Y.removeEventListener("selectstart",l),Y.removeEventListener("selectend",l),Y.removeEventListener("squeeze",l),Y.removeEventListener("squeezestart",l),Y.removeEventListener("squeezeend",l),Y.removeEventListener("end",o),Y.removeEventListener("inputsourceschange",m);for(let s=0;s<z.length;s++){let W0=T[s];if(W0===null)continue;T[s]=null,z[s].disconnect(W0)}g=null,p=null,L.reset();for(let s in D)delete D[s];J.setRenderTarget(O),$=null,K=null,q=null,Y=null,M=null,t0.stop(),Z.isPresenting=!1,J.setPixelRatio(A),J.setSize(E.width,E.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(H=s,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(Q=s,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||X},this.setReferenceSpace=function(s){U=s},this.getBaseLayer=function(){return K!==null?K:$},this.getBinding=function(){if(q===null&&N)q=new XRWebGLBinding(Y,w);return q},this.getFrame=function(){return R},this.getSession=function(){return Y},this.setSession=async function(s){if(Y=s,Y!==null){if(O=J.getRenderTarget(),Y.addEventListener("select",l),Y.addEventListener("selectstart",l),Y.addEventListener("selectend",l),Y.addEventListener("squeeze",l),Y.addEventListener("squeezestart",l),Y.addEventListener("squeezeend",l),Y.addEventListener("end",o),Y.addEventListener("inputsourceschange",m),k.xrCompatible!==!0)await w.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(E),!(N&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Y0={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:H};$=new XRWebGLLayer(Y,w,Y0),Y.updateRenderState({baseLayer:$}),J.setPixelRatio(1),J.setSize($.framebufferWidth,$.framebufferHeight,!1),M=new n6($.framebufferWidth,$.framebufferHeight,{format:F6,type:f7,colorSpace:J.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:$.ignoreDepthValues===!1,resolveStencilBuffer:$.ignoreDepthValues===!1})}else{let Y0=null,N0=null,f0=null;if(k.depth)f0=k.stencil?w.DEPTH24_STENCIL8:w.DEPTH_COMPONENT24,Y0=k.stencil?zw:dY,N0=k.stencil?c5:u5;let b0={colorFormat:w.RGBA8,depthFormat:f0,scaleFactor:H};q=this.getBinding(),K=q.createProjectionLayer(b0),Y.updateRenderState({layers:[K]}),J.setPixelRatio(1),J.setSize(K.textureWidth,K.textureHeight,!1),M=new n6(K.textureWidth,K.textureHeight,{format:F6,type:f7,depthTexture:new wH(K.textureWidth,K.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,Y0),stencilBuffer:k.stencil,colorSpace:J.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:K.ignoreDepthValues===!1,resolveStencilBuffer:K.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(W),U=null,X=await Y.requestReferenceSpace(Q),t0.setContext(Y),t0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Y!==null)return Y.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function m(s){for(let W0=0;W0<s.removed.length;W0++){let Y0=s.removed[W0],N0=T.indexOf(Y0);if(N0>=0)T[N0]=null,z[N0].disconnect(Y0)}for(let W0=0;W0<s.added.length;W0++){let Y0=s.added[W0],N0=T.indexOf(Y0);if(N0===-1){for(let b0=0;b0<z.length;b0++)if(b0>=T.length){T.push(Y0),N0=b0;break}else if(T[b0]===null){T[b0]=Y0,N0=b0;break}if(N0===-1)break}let f0=z[N0];if(f0)f0.connect(Y0)}}let t=new x,d=new x;function a(s,W0,Y0){t.setFromMatrixPosition(W0.matrixWorld),d.setFromMatrixPosition(Y0.matrixWorld);let N0=t.distanceTo(d),f0=W0.projectionMatrix.elements,b0=Y0.projectionMatrix.elements,d9=f0[14]/(f0[10]-1),P=f0[14]/(f0[10]+1),B9=(f0[9]+1)/f0[5],h0=(f0[9]-1)/f0[5],j0=(f0[8]-1)/f0[0],O0=(b0[8]+1)/b0[0],V9=d9*j0,V0=d9*O0,I0=N0/(-j0+O0),o9=I0*-j0;if(W0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(o9),s.translateZ(I0),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),f0[10]===-1)s.projectionMatrix.copy(W0.projectionMatrix),s.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let m9=d9+I0,S9=P+I0,I=V9-o9,F=V0+(N0-o9),h=B9*P/S9*m9,i=h0*P/S9*m9;s.projectionMatrix.makePerspective(I,F,h,i,m9,S9),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function X0(s,W0){if(W0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(W0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Y===null)return;let{near:W0,far:Y0}=s;if(L.texture!==null){if(L.depthNear>0)W0=L.depthNear;if(L.depthFar>0)Y0=L.depthFar}if(C.near=V.near=S.near=W0,C.far=V.far=S.far=Y0,g!==C.near||p!==C.far)Y.updateRenderState({depthNear:C.near,depthFar:C.far}),g=C.near,p=C.far;C.layers.mask=s.layers.mask|6,S.layers.mask=C.layers.mask&3,V.layers.mask=C.layers.mask&5;let N0=s.parent,f0=C.cameras;X0(C,N0);for(let b0=0;b0<f0.length;b0++)X0(f0[b0],N0);if(f0.length===2)a(C,S,V);else C.projectionMatrix.copy(S.projectionMatrix);B0(s,C,N0)};function B0(s,W0,Y0){if(Y0===null)s.matrix.copy(W0.matrixWorld);else s.matrix.copy(Y0.matrixWorld),s.matrix.invert(),s.matrix.multiply(W0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(W0.projectionMatrix),s.projectionMatrixInverse.copy(W0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=K1*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(K===null&&$===null)return;return W},this.setFoveation=function(s){if(W=s,K!==null)K.fixedFoveation=s;if($!==null&&$.fixedFoveation!==void 0)$.fixedFoveation=s},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(C)},this.getCameraTexture=function(s){return D[s]};let g0=null;function M9(s,W0){if(G=W0.getViewerPose(U||X),R=W0,G!==null){let Y0=G.views;if($!==null)J.setRenderTargetFramebuffer(M,$.framebuffer),J.setRenderTarget(M);let N0=!1;if(Y0.length!==C.cameras.length)C.cameras.length=0,N0=!0;for(let P=0;P<Y0.length;P++){let B9=Y0[P],h0=null;if($!==null)h0=$.getViewport(B9);else{let O0=q.getViewSubImage(K,B9);if(h0=O0.viewport,P===0)J.setRenderTargetTextures(M,O0.colorTexture,O0.depthStencilTexture),J.setRenderTarget(M)}let j0=B[P];if(j0===void 0)j0=new J8,j0.layers.enable(P),j0.viewport=new X9,B[P]=j0;if(j0.matrix.fromArray(B9.transform.matrix),j0.matrix.decompose(j0.position,j0.quaternion,j0.scale),j0.projectionMatrix.fromArray(B9.projectionMatrix),j0.projectionMatrixInverse.copy(j0.projectionMatrix).invert(),j0.viewport.set(h0.x,h0.y,h0.width,h0.height),P===0)C.matrix.copy(j0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(N0===!0)C.cameras.push(j0)}let f0=Y.enabledFeatures;if(f0&&f0.includes("depth-sensing")&&Y.depthUsage=="gpu-optimized"&&N){q=Z.getBinding();let P=q.getDepthInformation(Y0[0]);if(P&&P.isValid&&P.texture)L.init(P,Y.renderState)}if(f0&&f0.includes("camera-access")&&N){J.state.unbindTexture(),q=Z.getBinding();for(let P=0;P<Y0.length;P++){let B9=Y0[P].camera;if(B9){let h0=D[B9];if(!h0)h0=new ZH,D[B9]=h0;let j0=q.getCameraImage(B9);h0.sourceTexture=j0}}}}for(let Y0=0;Y0<z.length;Y0++){let N0=T[Y0],f0=z[Y0];if(N0!==null&&f0!==void 0)f0.update(N0,W0,U||X)}if(g0)g0(s,W0);if(W0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:W0});R=null}let t0=new OM;t0.setAnimationLoop(M9),this.setAnimationLoop=function(s){g0=s},this.dispose=function(){}}}var B1=new X6,aV=new I9;function rV(J,w){function Z(D,k){if(D.matrixAutoUpdate===!0)D.updateMatrix();k.value.copy(D.matrix)}function Y(D,k){if(k.color.getRGB(D.fogColor.value,jU(J)),k.isFog)D.fogNear.value=k.near,D.fogFar.value=k.far;else if(k.isFogExp2)D.fogDensity.value=k.density}function H(D,k,O,M,z){if(k.isMeshBasicMaterial)X(D,k);else if(k.isMeshLambertMaterial)X(D,k);else if(k.isMeshToonMaterial)X(D,k),K(D,k);else if(k.isMeshPhongMaterial)X(D,k),q(D,k);else if(k.isMeshStandardMaterial){if(X(D,k),$(D,k),k.isMeshPhysicalMaterial)R(D,k,z)}else if(k.isMeshMatcapMaterial)X(D,k),N(D,k);else if(k.isMeshDepthMaterial)X(D,k);else if(k.isMeshDistanceMaterial)X(D,k),L(D,k);else if(k.isMeshNormalMaterial)X(D,k);else if(k.isLineBasicMaterial){if(Q(D,k),k.isLineDashedMaterial)W(D,k)}else if(k.isPointsMaterial)U(D,k,O,M);else if(k.isSpriteMaterial)G(D,k);else if(k.isShadowMaterial)D.color.value.copy(k.color),D.opacity.value=k.opacity;else if(k.isShaderMaterial)k.uniformsNeedUpdate=!1}function X(D,k){if(D.opacity.value=k.opacity,k.color)D.diffuse.value.copy(k.color);if(k.emissive)D.emissive.value.copy(k.emissive).multiplyScalar(k.emissiveIntensity);if(k.map)D.map.value=k.map,Z(k.map,D.mapTransform);if(k.alphaMap)D.alphaMap.value=k.alphaMap,Z(k.alphaMap,D.alphaMapTransform);if(k.bumpMap){if(D.bumpMap.value=k.bumpMap,Z(k.bumpMap,D.bumpMapTransform),D.bumpScale.value=k.bumpScale,k.side===f8)D.bumpScale.value*=-1}if(k.normalMap){if(D.normalMap.value=k.normalMap,Z(k.normalMap,D.normalMapTransform),D.normalScale.value.copy(k.normalScale),k.side===f8)D.normalScale.value.negate()}if(k.displacementMap)D.displacementMap.value=k.displacementMap,Z(k.displacementMap,D.displacementMapTransform),D.displacementScale.value=k.displacementScale,D.displacementBias.value=k.displacementBias;if(k.emissiveMap)D.emissiveMap.value=k.emissiveMap,Z(k.emissiveMap,D.emissiveMapTransform);if(k.specularMap)D.specularMap.value=k.specularMap,Z(k.specularMap,D.specularMapTransform);if(k.alphaTest>0)D.alphaTest.value=k.alphaTest;let O=w.get(k),M=O.envMap,z=O.envMapRotation;if(M){if(D.envMap.value=M,B1.copy(z),B1.x*=-1,B1.y*=-1,B1.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)B1.y*=-1,B1.z*=-1;D.envMapRotation.value.setFromMatrix4(aV.makeRotationFromEuler(B1)),D.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,D.reflectivity.value=k.reflectivity,D.ior.value=k.ior,D.refractionRatio.value=k.refractionRatio}if(k.lightMap)D.lightMap.value=k.lightMap,D.lightMapIntensity.value=k.lightMapIntensity,Z(k.lightMap,D.lightMapTransform);if(k.aoMap)D.aoMap.value=k.aoMap,D.aoMapIntensity.value=k.aoMapIntensity,Z(k.aoMap,D.aoMapTransform)}function Q(D,k){if(D.diffuse.value.copy(k.color),D.opacity.value=k.opacity,k.map)D.map.value=k.map,Z(k.map,D.mapTransform)}function W(D,k){D.dashSize.value=k.dashSize,D.totalSize.value=k.dashSize+k.gapSize,D.scale.value=k.scale}function U(D,k,O,M){if(D.diffuse.value.copy(k.color),D.opacity.value=k.opacity,D.size.value=k.size*O,D.scale.value=M*0.5,k.map)D.map.value=k.map,Z(k.map,D.uvTransform);if(k.alphaMap)D.alphaMap.value=k.alphaMap,Z(k.alphaMap,D.alphaMapTransform);if(k.alphaTest>0)D.alphaTest.value=k.alphaTest}function G(D,k){if(D.diffuse.value.copy(k.color),D.opacity.value=k.opacity,D.rotation.value=k.rotation,k.map)D.map.value=k.map,Z(k.map,D.mapTransform);if(k.alphaMap)D.alphaMap.value=k.alphaMap,Z(k.alphaMap,D.alphaMapTransform);if(k.alphaTest>0)D.alphaTest.value=k.alphaTest}function q(D,k){D.specular.value.copy(k.specular),D.shininess.value=Math.max(k.shininess,0.0001)}function K(D,k){if(k.gradientMap)D.gradientMap.value=k.gradientMap}function $(D,k){if(D.metalness.value=k.metalness,k.metalnessMap)D.metalnessMap.value=k.metalnessMap,Z(k.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=k.roughness,k.roughnessMap)D.roughnessMap.value=k.roughnessMap,Z(k.roughnessMap,D.roughnessMapTransform);if(k.envMap)D.envMapIntensity.value=k.envMapIntensity}function R(D,k,O){if(D.ior.value=k.ior,k.sheen>0){if(D.sheenColor.value.copy(k.sheenColor).multiplyScalar(k.sheen),D.sheenRoughness.value=k.sheenRoughness,k.sheenColorMap)D.sheenColorMap.value=k.sheenColorMap,Z(k.sheenColorMap,D.sheenColorMapTransform);if(k.sheenRoughnessMap)D.sheenRoughnessMap.value=k.sheenRoughnessMap,Z(k.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(k.clearcoat>0){if(D.clearcoat.value=k.clearcoat,D.clearcoatRoughness.value=k.clearcoatRoughness,k.clearcoatMap)D.clearcoatMap.value=k.clearcoatMap,Z(k.clearcoatMap,D.clearcoatMapTransform);if(k.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=k.clearcoatRoughnessMap,Z(k.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(k.clearcoatNormalMap){if(D.clearcoatNormalMap.value=k.clearcoatNormalMap,Z(k.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(k.clearcoatNormalScale),k.side===f8)D.clearcoatNormalScale.value.negate()}}if(k.dispersion>0)D.dispersion.value=k.dispersion;if(k.iridescence>0){if(D.iridescence.value=k.iridescence,D.iridescenceIOR.value=k.iridescenceIOR,D.iridescenceThicknessMinimum.value=k.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=k.iridescenceThicknessRange[1],k.iridescenceMap)D.iridescenceMap.value=k.iridescenceMap,Z(k.iridescenceMap,D.iridescenceMapTransform);if(k.iridescenceThicknessMap)D.iridescenceThicknessMap.value=k.iridescenceThicknessMap,Z(k.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(k.transmission>0){if(D.transmission.value=k.transmission,D.transmissionSamplerMap.value=O.texture,D.transmissionSamplerSize.value.set(O.width,O.height),k.transmissionMap)D.transmissionMap.value=k.transmissionMap,Z(k.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=k.thickness,k.thicknessMap)D.thicknessMap.value=k.thicknessMap,Z(k.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=k.attenuationDistance,D.attenuationColor.value.copy(k.attenuationColor)}if(k.anisotropy>0){if(D.anisotropyVector.value.set(k.anisotropy*Math.cos(k.anisotropyRotation),k.anisotropy*Math.sin(k.anisotropyRotation)),k.anisotropyMap)D.anisotropyMap.value=k.anisotropyMap,Z(k.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=k.specularIntensity,D.specularColor.value.copy(k.specularColor),k.specularColorMap)D.specularColorMap.value=k.specularColorMap,Z(k.specularColorMap,D.specularColorMapTransform);if(k.specularIntensityMap)D.specularIntensityMap.value=k.specularIntensityMap,Z(k.specularIntensityMap,D.specularIntensityMapTransform)}function N(D,k){if(k.matcap)D.matcap.value=k.matcap}function L(D,k){let O=w.get(k).light;D.referencePosition.value.setFromMatrixPosition(O.matrixWorld),D.nearDistance.value=O.shadow.camera.near,D.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:Y,refreshMaterialUniforms:H}}function tV(J,w,Z,Y){let H={},X={},Q=[],W=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(O,M){let z=M.program;Y.uniformBlockBinding(O,z)}function G(O,M){let z=H[O.id];if(z===void 0)N(O),z=q(O),H[O.id]=z,O.addEventListener("dispose",D);let T=M.program;Y.updateUBOMapping(O,T);let E=w.render.frame;if(X[O.id]!==E)$(O),X[O.id]=E}function q(O){let M=K();O.__bindingPointIndex=M;let z=J.createBuffer(),T=O.__size,E=O.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,T,E),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,z),z}function K(){for(let O=0;O<W;O++)if(Q.indexOf(O)===-1)return Q.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function $(O){let M=H[O.id],z=O.uniforms,T=O.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let E=0,A=z.length;E<A;E++){let S=Array.isArray(z[E])?z[E]:[z[E]];for(let V=0,B=S.length;V<B;V++){let C=S[V];if(R(C,E,V,T)===!0){let g=C.__offset,p=Array.isArray(C.value)?C.value:[C.value],l=0;for(let o=0;o<p.length;o++){let m=p[o],t=L(m);if(typeof m==="number"||typeof m==="boolean")C.__data[0]=m,J.bufferSubData(J.UNIFORM_BUFFER,g+l,C.__data);else if(m.isMatrix3)C.__data[0]=m.elements[0],C.__data[1]=m.elements[1],C.__data[2]=m.elements[2],C.__data[3]=0,C.__data[4]=m.elements[3],C.__data[5]=m.elements[4],C.__data[6]=m.elements[5],C.__data[7]=0,C.__data[8]=m.elements[6],C.__data[9]=m.elements[7],C.__data[10]=m.elements[8],C.__data[11]=0;else m.toArray(C.__data,l),l+=t.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,g,C.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(O,M,z,T){let E=O.value,A=M+"_"+z;if(T[A]===void 0){if(typeof E==="number"||typeof E==="boolean")T[A]=E;else T[A]=E.clone();return!0}else{let S=T[A];if(typeof E==="number"||typeof E==="boolean"){if(S!==E)return T[A]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function N(O){let M=O.uniforms,z=0,T=16;for(let A=0,S=M.length;A<S;A++){let V=Array.isArray(M[A])?M[A]:[M[A]];for(let B=0,C=V.length;B<C;B++){let g=V[B],p=Array.isArray(g.value)?g.value:[g.value];for(let l=0,o=p.length;l<o;l++){let m=p[l],t=L(m),d=z%T,a=d%t.boundary,X0=d+a;if(z+=a,X0!==0&&T-X0<t.storage)z+=T-X0;g.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=z,z+=t.storage}}}let E=z%T;if(E>0)z+=T-E;return O.__size=z,O.__cache={},this}function L(O){let M={boundary:0,storage:0};if(typeof O==="number"||typeof O==="boolean")M.boundary=4,M.storage=4;else if(O.isVector2)M.boundary=8,M.storage=8;else if(O.isVector3||O.isColor)M.boundary=16,M.storage=12;else if(O.isVector4)M.boundary=16,M.storage=16;else if(O.isMatrix3)M.boundary=48,M.storage=48;else if(O.isMatrix4)M.boundary=64,M.storage=64;else if(O.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O);return M}function D(O){let M=O.target;M.removeEventListener("dispose",D);let z=Q.indexOf(M.__bindingPointIndex);Q.splice(z,1),J.deleteBuffer(H[M.id]),delete H[M.id],delete X[M.id]}function k(){for(let O in H)J.deleteBuffer(H[O]);Q=[],H={},X={}}return{bind:U,update:G,dispose:k}}class WG{constructor(J={}){let{canvas:w=lD(),context:Z=null,depth:Y=!0,stencil:H=!1,alpha:X=!1,antialias:Q=!1,premultipliedAlpha:W=!0,preserveDrawingBuffer:U=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:K=!1}=J;this.isWebGLRenderer=!0;let $;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");$=Z.getContextAttributes().alpha}else $=X;let R=new Uint32Array(4),N=new Int32Array(4),L=null,D=null,k=[],O=[];this.domElement=w,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=o6,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,z=!1;this._outputColorSpace=jD;let T=0,E=0,A=null,S=-1,V=null,B=new X9,C=new X9,g=null,p=new d0(0),l=0,o=w.width,m=w.height,t=1,d=null,a=null,X0=new X9(0,0,o,m),B0=new X9(0,0,o,m),g0=!1,M9=new Ew,t0=!1,s=!1,W0=new I9,Y0=new x,N0=new X9,f0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b0=!1;function d9(){return A===null?t:1}let P=Z;function B9(_,f){return w.getContext(_,f)}try{let _={alpha:!0,depth:Y,stencil:H,antialias:Q,premultipliedAlpha:W,preserveDrawingBuffer:U,powerPreference:G,failIfMajorPerformanceCaveat:q};if("setAttribute"in w)w.setAttribute("data-engine",`three.js r${vR}`);if(w.addEventListener("webglcontextlost",U0,!1),w.addEventListener("webglcontextrestored",H0,!1),w.addEventListener("webglcontextcreationerror",R0,!1),P===null){if(P=B9("webgl2",_),P===null)if(B9("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let h0,j0,O0,V9,V0,I0,o9,m9,S9,I,F,h,i,r,u,$0,Z0,F0,P0,w0,q0,z0,L0,k0;function p0(){if(h0=new M2(P),h0.init(),z0=new sV(P,h0),j0=new G2(P,h0,J,z0),O0=new cV(P,h0),j0.reversedDepthBuffer&&K)O0.buffers.depth.setReversed(!0);V9=new N2(P),V0=new jV,I0=new iV(P,h0,O0,V0,j0,z0,V9),o9=new k2(M),m9=new D2(M),S9=new AL(P),L0=new W2(P,S9),I=new O2(P,S9,V9,L0),F=new L2(P,I,S9,V9),P0=new z2(P,j0,I0),$0=new q2(V0),h=new SV(M,o9,m9,h0,j0,L0,$0),i=new rV(M,V0),r=new bV,u=new lV(h0),F0=new Q2(M,o9,m9,O0,F,$,W),Z0=new mV(M,F,j0),k0=new tV(P,V9,j0,O0),w0=new U2(P,h0,V9),q0=new F2(P,h0,V9),V9.programs=h.programs,M.capabilities=j0,M.extensions=h0,M.properties=V0,M.renderLists=r,M.shadowMap=Z0,M.state=O0,M.info=V9}p0();let j=new CM(M,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=h0.get("WEBGL_lose_context");if(_)_.loseContext()},this.forceContextRestore=function(){let _=h0.get("WEBGL_lose_context");if(_)_.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(_){if(_===void 0)return;t=_,this.setSize(o,m,!1)},this.getSize=function(_){return _.set(o,m)},this.setSize=function(_,f,v=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=_,m=f,w.width=Math.floor(_*t),w.height=Math.floor(f*t),v===!0)w.style.width=_+"px",w.style.height=f+"px";this.setViewport(0,0,_,f)},this.getDrawingBufferSize=function(_){return _.set(o*t,m*t).floor()},this.setDrawingBufferSize=function(_,f,v){o=_,m=f,t=v,w.width=Math.floor(_*v),w.height=Math.floor(f*v),this.setViewport(0,0,_,f)},this.getCurrentViewport=function(_){return _.copy(B)},this.getViewport=function(_){return _.copy(X0)},this.setViewport=function(_,f,v,y){if(_.isVector4)X0.set(_.x,_.y,_.z,_.w);else X0.set(_,f,v,y);O0.viewport(B.copy(X0).multiplyScalar(t).round())},this.getScissor=function(_){return _.copy(B0)},this.setScissor=function(_,f,v,y){if(_.isVector4)B0.set(_.x,_.y,_.z,_.w);else B0.set(_,f,v,y);O0.scissor(C.copy(B0).multiplyScalar(t).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(_){O0.setScissorTest(g0=_)},this.setOpaqueSort=function(_){d=_},this.setTransparentSort=function(_){a=_},this.getClearColor=function(_){return _.copy(F0.getClearColor())},this.setClearColor=function(){F0.setClearColor(...arguments)},this.getClearAlpha=function(){return F0.getClearAlpha()},this.setClearAlpha=function(){F0.setClearAlpha(...arguments)},this.clear=function(_=!0,f=!0,v=!0){let y=0;if(_){let b=!1;if(A!==null){let J0=A.texture.format;b=J0===sW||J0===iW||J0===cW}if(b){let J0=A.texture.type,G0=J0===f7||J0===u5||J0===Fw||J0===c5||J0===mW||J0===uW,D0=F0.getClearColor(),K0=F0.getClearAlpha(),C0=D0.r,S0=D0.g,_0=D0.b;if(G0)R[0]=C0,R[1]=S0,R[2]=_0,R[3]=K0,P.clearBufferuiv(P.COLOR,0,R);else N[0]=C0,N[1]=S0,N[2]=_0,N[3]=K0,P.clearBufferiv(P.COLOR,0,N)}else y|=P.COLOR_BUFFER_BIT}if(f)y|=P.DEPTH_BUFFER_BIT;if(v)y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);P.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){w.removeEventListener("webglcontextlost",U0,!1),w.removeEventListener("webglcontextrestored",H0,!1),w.removeEventListener("webglcontextcreationerror",R0,!1),F0.dispose(),r.dispose(),u.dispose(),V0.dispose(),o9.dispose(),m9.dispose(),F.dispose(),L0.dispose(),k0.dispose(),h.dispose(),j.dispose(),j.removeEventListener("sessionstart",Q6),j.removeEventListener("sessionend",W6),y7.stop()};function U0(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function H0(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let _=V9.autoReset,f=Z0.enabled,v=Z0.autoUpdate,y=Z0.needsUpdate,b=Z0.type;p0(),V9.autoReset=_,Z0.enabled=f,Z0.autoUpdate=v,Z0.needsUpdate=y,Z0.type=b}function R0(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function e(_){let f=_.target;f.removeEventListener("dispose",e),n(f)}function n(_){M0(_),V0.remove(_)}function M0(_){let f=V0.get(_).programs;if(f!==void 0){if(f.forEach(function(v){h.releaseProgram(v)}),_.isShaderMaterial)h.releaseShaderCache(_)}}this.renderBufferDirect=function(_,f,v,y,b,J0){if(f===null)f=f0;let G0=b.isMesh&&b.matrixWorld.determinant()<0,D0=bM(_,f,v,y,b);O0.setMaterial(y,G0);let K0=v.index,C0=1;if(y.wireframe===!0){if(K0=I.getWireframeAttribute(v),K0===void 0)return;C0=2}let S0=v.drawRange,_0=v.attributes.position,i0=S0.start*C0,W9=(S0.start+S0.count)*C0;if(J0!==null)i0=Math.max(i0,J0.start*C0),W9=Math.min(W9,(J0.start+J0.count)*C0);if(K0!==null)i0=Math.max(i0,0),W9=Math.min(W9,K0.count);else if(_0!==void 0&&_0!==null)i0=Math.max(i0,0),W9=Math.min(W9,_0.count);let C9=W9-i0;if(C9<0||C9===1/0)return;L0.setup(b,y,D0,v,K0);let O9,k9=w0;if(K0!==null)O9=S9.get(K0),k9=q0,k9.setIndex(O9);if(b.isMesh)if(y.wireframe===!0)O0.setLineWidth(y.wireframeLinewidth*d9()),k9.setMode(P.LINES);else k9.setMode(P.TRIANGLES);else if(b.isLine){let E0=y.linewidth;if(E0===void 0)E0=1;if(O0.setLineWidth(E0*d9()),b.isLineSegments)k9.setMode(P.LINES);else if(b.isLineLoop)k9.setMode(P.LINE_LOOP);else k9.setMode(P.LINE_STRIP)}else if(b.isPoints)k9.setMode(P.POINTS);else if(b.isSprite)k9.setMode(P.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)y5("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),k9.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(!h0.get("WEBGL_multi_draw")){let{_multiDrawStarts:E0,_multiDrawCounts:A9,_multiDrawCount:e0}=b,N8=K0?S9.get(K0).bytesPerElement:1,A1=V0.get(y).currentProgram.getUniforms();for(let z8=0;z8<e0;z8++)A1.setValue(P,"_gl_DrawID",z8),k9.render(E0[z8]/N8,A9[z8])}else k9.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)k9.renderInstances(i0,C9,b.count);else if(v.isInstancedBufferGeometry){let E0=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,A9=Math.min(v.instanceCount,E0);k9.renderInstances(i0,C9,A9)}else k9.render(i0,C9)};function x0(_,f,v){if(_.transparent===!0&&_.side===O6&&_.forceSinglePass===!1)_.side=f8,_.needsUpdate=!0,xw(_,f,v),_.side=g5,_.needsUpdate=!0,xw(_,f,v),_.side=O6;else xw(_,f,v)}this.compile=function(_,f,v=null){if(v===null)v=_;if(D=u.get(v),D.init(f),O.push(D),v.traverseVisible(function(b){if(b.isLight&&b.layers.test(f.layers)){if(D.pushLight(b),b.castShadow)D.pushShadow(b)}}),_!==v)_.traverseVisible(function(b){if(b.isLight&&b.layers.test(f.layers)){if(D.pushLight(b),b.castShadow)D.pushShadow(b)}});D.setupLights();let y=new Set;return _.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let J0=b.material;if(J0)if(Array.isArray(J0))for(let G0=0;G0<J0.length;G0++){let D0=J0[G0];x0(D0,v,b),y.add(D0)}else x0(J0,v,b),y.add(J0)}),D=O.pop(),y},this.compileAsync=function(_,f,v=null){let y=this.compile(_,f,v);return new Promise((b)=>{function J0(){if(y.forEach(function(G0){if(V0.get(G0).currentProgram.isReady())y.delete(G0)}),y.size===0){b(_);return}setTimeout(J0,10)}if(h0.get("KHR_parallel_shader_compile")!==null)J0();else setTimeout(J0,10)})};let q9=null;function Q9(_){if(q9)q9(_)}function Q6(){y7.stop()}function W6(){y7.start()}let y7=new OM;if(y7.setAnimationLoop(Q9),typeof self!=="undefined")y7.setContext(self);this.setAnimationLoop=function(_){q9=_,j.setAnimationLoop(_),_===null?y7.stop():y7.start()},j.addEventListener("sessionstart",Q6),j.addEventListener("sessionend",W6),this.render=function(_,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(j.enabled===!0&&j.isPresenting===!0){if(j.cameraAutoUpdate===!0)j.updateCamera(f);f=j.getCamera()}if(_.isScene===!0)_.onBeforeRender(M,_,f,A);if(D=u.get(_,O.length),D.init(f),O.push(D),W0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),M9.setFromProjectionMatrix(W0,AU,f.reversedDepth),s=this.localClippingEnabled,t0=$0.init(this.clippingPlanes,s),L=r.get(_,k.length),L.init(),k.push(L),j.enabled===!0&&j.isPresenting===!0){let J0=M.xr.getDepthSensingMesh();if(J0!==null)KH(J0,f,-1/0,M.sortObjects)}if(KH(_,f,0,M.sortObjects),L.finish(),M.sortObjects===!0)L.sort(d,a);if(b0=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,b0)F0.addToRenderList(L,_);if(this.info.render.frame++,t0===!0)$0.beginShadows();let v=D.state.shadowsArray;if(Z0.render(v,_,f),t0===!0)$0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:y,transmissive:b}=L;if(D.setupLights(),f.isArrayCamera){let J0=f.cameras;if(b.length>0)for(let G0=0,D0=J0.length;G0<D0;G0++){let K0=J0[G0];qG(y,b,_,K0)}if(b0)F0.render(_);for(let G0=0,D0=J0.length;G0<D0;G0++){let K0=J0[G0];GG(L,_,K0,K0.viewport)}}else{if(b.length>0)qG(y,b,_,f);if(b0)F0.render(_);GG(L,_,f)}if(A!==null&&E===0)I0.updateMultisampleRenderTarget(A),I0.updateRenderTargetMipmap(A);if(_.isScene===!0)_.onAfterRender(M,_,f);if(L0.resetDefaultState(),S=-1,V=null,O.pop(),O.length>0){if(D=O[O.length-1],t0===!0)$0.setGlobalState(M.clippingPlanes,D.state.camera)}else D=null;if(k.pop(),k.length>0)L=k[k.length-1];else L=null};function KH(_,f,v,y){if(_.visible===!1)return;if(_.layers.test(f.layers)){if(_.isGroup)v=_.renderOrder;else if(_.isLOD){if(_.autoUpdate===!0)_.update(f)}else if(_.isLight){if(D.pushLight(_),_.castShadow)D.pushShadow(_)}else if(_.isSprite){if(!_.frustumCulled||M9.intersectsSprite(_)){if(y)N0.setFromMatrixPosition(_.matrixWorld).applyMatrix4(W0);let G0=F.update(_),D0=_.material;if(D0.visible)L.push(_,G0,D0,v,N0.z,null)}}else if(_.isMesh||_.isLine||_.isPoints){if(!_.frustumCulled||M9.intersectsObject(_)){let G0=F.update(_),D0=_.material;if(y){if(_.boundingSphere!==void 0){if(_.boundingSphere===null)_.computeBoundingSphere();N0.copy(_.boundingSphere.center)}else{if(G0.boundingSphere===null)G0.computeBoundingSphere();N0.copy(G0.boundingSphere.center)}N0.applyMatrix4(_.matrixWorld).applyMatrix4(W0)}if(Array.isArray(D0)){let K0=G0.groups;for(let C0=0,S0=K0.length;C0<S0;C0++){let _0=K0[C0],i0=D0[_0.materialIndex];if(i0&&i0.visible)L.push(_,G0,i0,v,N0.z,_0)}}else if(D0.visible)L.push(_,G0,D0,v,N0.z,null)}}}let J0=_.children;for(let G0=0,D0=J0.length;G0<D0;G0++)KH(J0[G0],f,v,y)}function GG(_,f,v,y){let{opaque:b,transmissive:J0,transparent:G0}=_;if(D.setupLightsView(v),t0===!0)$0.setGlobalState(M.clippingPlanes,v);if(y)O0.viewport(B.copy(y));if(b.length>0)bw(b,f,v);if(J0.length>0)bw(J0,f,v);if(G0.length>0)bw(G0,f,v);O0.buffers.depth.setTest(!0),O0.buffers.depth.setMask(!0),O0.buffers.color.setMask(!0),O0.setPolygonOffset(!1)}function qG(_,f,v,y){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[y.id]===void 0)D.state.transmissionRenderTarget[y.id]=new n6(1,1,{generateMipmaps:!0,type:h0.has("EXT_color_buffer_half_float")||h0.has("EXT_color_buffer_float")?Nw:f7,minFilter:m5,samples:4,stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:r0.workingColorSpace});let J0=D.state.transmissionRenderTarget[y.id],G0=y.viewport||B;J0.setSize(G0.z*M.transmissionResolutionScale,G0.w*M.transmissionResolutionScale);let D0=M.getRenderTarget(),K0=M.getActiveCubeFace(),C0=M.getActiveMipmapLevel();if(M.setRenderTarget(J0),M.getClearColor(p),l=M.getClearAlpha(),l<1)M.setClearColor(16777215,0.5);if(M.clear(),b0)F0.render(v);let S0=M.toneMapping;M.toneMapping=o6;let _0=y.viewport;if(y.viewport!==void 0)y.viewport=void 0;if(D.setupLightsView(y),t0===!0)$0.setGlobalState(M.clippingPlanes,y);if(bw(_,v,y),I0.updateMultisampleRenderTarget(J0),I0.updateRenderTargetMipmap(J0),h0.has("WEBGL_multisampled_render_to_texture")===!1){let i0=!1;for(let W9=0,C9=f.length;W9<C9;W9++){let O9=f[W9],k9=O9.object,E0=O9.geometry,A9=O9.material,e0=O9.group;if(A9.side===O6&&k9.layers.test(y.layers)){let N8=A9.side;A9.side=f8,A9.needsUpdate=!0,kG(k9,v,y,E0,A9,e0),A9.side=N8,A9.needsUpdate=!0,i0=!0}}if(i0===!0)I0.updateMultisampleRenderTarget(J0),I0.updateRenderTargetMipmap(J0)}if(M.setRenderTarget(D0,K0,C0),M.setClearColor(p,l),_0!==void 0)y.viewport=_0;M.toneMapping=S0}function bw(_,f,v){let y=f.isScene===!0?f.overrideMaterial:null;for(let b=0,J0=_.length;b<J0;b++){let G0=_[b],D0=G0.object,K0=G0.geometry,C0=G0.group,S0=G0.material;if(S0.allowOverride===!0&&y!==null)S0=y;if(D0.layers.test(v.layers))kG(D0,f,v,K0,S0,C0)}}function kG(_,f,v,y,b,J0){if(_.onBeforeRender(M,f,v,y,b,J0),_.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),b.onBeforeRender(M,f,v,y,_,J0),b.transparent===!0&&b.side===O6&&b.forceSinglePass===!1)b.side=f8,b.needsUpdate=!0,M.renderBufferDirect(v,f,y,b,_,J0),b.side=g5,b.needsUpdate=!0,M.renderBufferDirect(v,f,y,b,_,J0),b.side=O6;else M.renderBufferDirect(v,f,y,b,_,J0);_.onAfterRender(M,f,v,y,b,J0)}function xw(_,f,v){if(f.isScene!==!0)f=f0;let y=V0.get(_),b=D.state.lights,J0=D.state.shadowsArray,G0=b.state.version,D0=h.getParameters(_,b.state,J0,f,v),K0=h.getProgramCacheKey(D0),C0=y.programs;if(y.environment=_.isMeshStandardMaterial?f.environment:null,y.fog=f.fog,y.envMap=(_.isMeshStandardMaterial?m9:o9).get(_.envMap||y.environment),y.envMapRotation=y.environment!==null&&_.envMap===null?f.environmentRotation:_.envMapRotation,C0===void 0)_.addEventListener("dispose",e),C0=new Map,y.programs=C0;let S0=C0.get(K0);if(S0!==void 0){if(y.currentProgram===S0&&y.lightsStateVersion===G0)return $G(_,D0),S0}else D0.uniforms=h.getUniforms(_),_.onBeforeCompile(D0,M),S0=h.acquireProgram(D0,K0),C0.set(K0,S0),y.uniforms=D0.uniforms;let _0=y.uniforms;if(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)_0.clippingPlanes=$0.uniform;if($G(_,D0),y.needsLights=hM(_),y.lightsStateVersion=G0,y.needsLights)_0.ambientLightColor.value=b.state.ambient,_0.lightProbe.value=b.state.probe,_0.directionalLights.value=b.state.directional,_0.directionalLightShadows.value=b.state.directionalShadow,_0.spotLights.value=b.state.spot,_0.spotLightShadows.value=b.state.spotShadow,_0.rectAreaLights.value=b.state.rectArea,_0.ltc_1.value=b.state.rectAreaLTC1,_0.ltc_2.value=b.state.rectAreaLTC2,_0.pointLights.value=b.state.point,_0.pointLightShadows.value=b.state.pointShadow,_0.hemisphereLights.value=b.state.hemi,_0.directionalShadowMap.value=b.state.directionalShadowMap,_0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,_0.spotShadowMap.value=b.state.spotShadowMap,_0.spotLightMatrix.value=b.state.spotLightMatrix,_0.spotLightMap.value=b.state.spotLightMap,_0.pointShadowMap.value=b.state.pointShadowMap,_0.pointShadowMatrix.value=b.state.pointShadowMatrix;return y.currentProgram=S0,y.uniformsList=null,S0}function KG(_){if(_.uniformsList===null){let f=_.currentProgram.getUniforms();_.uniformsList=fw.seqWithValue(f.seq,_.uniforms)}return _.uniformsList}function $G(_,f){let v=V0.get(_);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function bM(_,f,v,y,b){if(f.isScene!==!0)f=f0;I0.resetTextureUnits();let J0=f.fog,G0=y.isMeshStandardMaterial?f.environment:null,D0=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lw,K0=(y.isMeshStandardMaterial?m9:o9).get(y.envMap||G0),C0=y.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,S0=!!v.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),_0=!!v.morphAttributes.position,i0=!!v.morphAttributes.normal,W9=!!v.morphAttributes.color,C9=o6;if(y.toneMapped){if(A===null||A.isXRRenderTarget===!0)C9=M.toneMapping}let O9=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,k9=O9!==void 0?O9.length:0,E0=V0.get(y),A9=D.state.lights;if(t0===!0){if(s===!0||_!==V){let X8=_===V&&y.id===S;$0.setState(y,_,X8)}}let e0=!1;if(y.version===E0.__version){if(E0.needsLights&&E0.lightsStateVersion!==A9.state.version)e0=!0;else if(E0.outputColorSpace!==D0)e0=!0;else if(b.isBatchedMesh&&E0.batching===!1)e0=!0;else if(!b.isBatchedMesh&&E0.batching===!0)e0=!0;else if(b.isBatchedMesh&&E0.batchingColor===!0&&b.colorTexture===null)e0=!0;else if(b.isBatchedMesh&&E0.batchingColor===!1&&b.colorTexture!==null)e0=!0;else if(b.isInstancedMesh&&E0.instancing===!1)e0=!0;else if(!b.isInstancedMesh&&E0.instancing===!0)e0=!0;else if(b.isSkinnedMesh&&E0.skinning===!1)e0=!0;else if(!b.isSkinnedMesh&&E0.skinning===!0)e0=!0;else if(b.isInstancedMesh&&E0.instancingColor===!0&&b.instanceColor===null)e0=!0;else if(b.isInstancedMesh&&E0.instancingColor===!1&&b.instanceColor!==null)e0=!0;else if(b.isInstancedMesh&&E0.instancingMorph===!0&&b.morphTexture===null)e0=!0;else if(b.isInstancedMesh&&E0.instancingMorph===!1&&b.morphTexture!==null)e0=!0;else if(E0.envMap!==K0)e0=!0;else if(y.fog===!0&&E0.fog!==J0)e0=!0;else if(E0.numClippingPlanes!==void 0&&(E0.numClippingPlanes!==$0.numPlanes||E0.numIntersection!==$0.numIntersection))e0=!0;else if(E0.vertexAlphas!==C0)e0=!0;else if(E0.vertexTangents!==S0)e0=!0;else if(E0.morphTargets!==_0)e0=!0;else if(E0.morphNormals!==i0)e0=!0;else if(E0.morphColors!==W9)e0=!0;else if(E0.toneMapping!==C9)e0=!0;else if(E0.morphTargetsCount!==k9)e0=!0}else e0=!0,E0.__version=y.version;let N8=E0.currentProgram;if(e0===!0)N8=xw(y,f,b);let A1=!1,z8=!1,r5=!1,E9=N8.getUniforms(),b8=E0.uniforms;if(O0.useProgram(N8.program))A1=!0,z8=!0,r5=!0;if(y.id!==S)S=y.id,z8=!0;if(A1||V!==_){if(O0.buffers.depth.getReversed()&&_.reversedDepth!==!0)_._reversedDepth=!0,_.updateProjectionMatrix();E9.setValue(P,"projectionMatrix",_.projectionMatrix),E9.setValue(P,"viewMatrix",_.matrixWorldInverse);let q8=E9.map.cameraPosition;if(q8!==void 0)q8.setValue(P,Y0.setFromMatrixPosition(_.matrixWorld));if(j0.logarithmicDepthBuffer)E9.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2));if(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)E9.setValue(P,"isOrthographic",_.isOrthographicCamera===!0);if(V!==_)V=_,z8=!0,r5=!0}if(b.isSkinnedMesh){E9.setOptional(P,b,"bindMatrix"),E9.setOptional(P,b,"bindMatrixInverse");let X8=b.skeleton;if(X8){if(X8.boneTexture===null)X8.computeBoneTexture();E9.setValue(P,"boneTexture",X8.boneTexture,I0)}}if(b.isBatchedMesh){if(E9.setOptional(P,b,"batchingTexture"),E9.setValue(P,"batchingTexture",b._matricesTexture,I0),E9.setOptional(P,b,"batchingIdTexture"),E9.setValue(P,"batchingIdTexture",b._indirectTexture,I0),E9.setOptional(P,b,"batchingColorTexture"),b._colorsTexture!==null)E9.setValue(P,"batchingColorTexture",b._colorsTexture,I0)}let x8=v.morphAttributes;if(x8.position!==void 0||x8.normal!==void 0||x8.color!==void 0)P0.update(b,v,N8);if(z8||E0.receiveShadow!==b.receiveShadow)E0.receiveShadow=b.receiveShadow,E9.setValue(P,"receiveShadow",b.receiveShadow);if(y.isMeshGouraudMaterial&&y.envMap!==null)b8.envMap.value=K0,b8.flipEnvMap.value=K0.isCubeTexture&&K0.isRenderTargetTexture===!1?-1:1;if(y.isMeshStandardMaterial&&y.envMap===null&&f.environment!==null)b8.envMapIntensity.value=f.environmentIntensity;if(z8){if(E9.setValue(P,"toneMappingExposure",M.toneMappingExposure),E0.needsLights)xM(b8,r5);if(J0&&y.fog===!0)i.refreshFogUniforms(b8,J0);i.refreshMaterialUniforms(b8,y,t,m,D.state.transmissionRenderTarget[_.id]),fw.upload(P,KG(E0),b8,I0)}if(y.isShaderMaterial&&y.uniformsNeedUpdate===!0)fw.upload(P,KG(E0),b8,I0),y.uniformsNeedUpdate=!1;if(y.isSpriteMaterial)E9.setValue(P,"center",b.center);if(E9.setValue(P,"modelViewMatrix",b.modelViewMatrix),E9.setValue(P,"normalMatrix",b.normalMatrix),E9.setValue(P,"modelMatrix",b.matrixWorld),y.isShaderMaterial||y.isRawShaderMaterial){let X8=y.uniformsGroups;for(let q8=0,$H=X8.length;q8<$H;q8++){let g7=X8[q8];k0.update(g7,N8),k0.bind(g7,N8)}}return N8}function xM(_,f){_.ambientLightColor.needsUpdate=f,_.lightProbe.needsUpdate=f,_.directionalLights.needsUpdate=f,_.directionalLightShadows.needsUpdate=f,_.pointLights.needsUpdate=f,_.pointLightShadows.needsUpdate=f,_.spotLights.needsUpdate=f,_.spotLightShadows.needsUpdate=f,_.rectAreaLights.needsUpdate=f,_.hemisphereLights.needsUpdate=f}function hM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,f,v){let y=V0.get(_);if(y.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1)y.__useRenderToTexture=!1;V0.get(_.texture).__webglTexture=f,V0.get(_.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:v,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,f){let v=V0.get(_);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};let vM=P.createFramebuffer();this.setRenderTarget=function(_,f=0,v=0){A=_,T=f,E=v;let y=!0,b=null,J0=!1,G0=!1;if(_){let K0=V0.get(_);if(K0.__useDefaultFramebuffer!==void 0)O0.bindFramebuffer(P.FRAMEBUFFER,null),y=!1;else if(K0.__webglFramebuffer===void 0)I0.setupRenderTarget(_);else if(K0.__hasExternalTextures)I0.rebindTextures(_,V0.get(_.texture).__webglTexture,V0.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let _0=_.depthTexture;if(K0.__boundDepthTexture!==_0){if(_0!==null&&V0.has(_0)&&(_.width!==_0.image.width||_.height!==_0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I0.setupDepthRenderbuffer(_)}}let C0=_.texture;if(C0.isData3DTexture||C0.isDataArrayTexture||C0.isCompressedArrayTexture)G0=!0;let S0=V0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget){if(Array.isArray(S0[f]))b=S0[f][v];else b=S0[f];J0=!0}else if(_.samples>0&&I0.useMultisampledRTT(_)===!1)b=V0.get(_).__webglMultisampledFramebuffer;else if(Array.isArray(S0))b=S0[v];else b=S0;B.copy(_.viewport),C.copy(_.scissor),g=_.scissorTest}else B.copy(X0).multiplyScalar(t).floor(),C.copy(B0).multiplyScalar(t).floor(),g=g0;if(v!==0)b=vM;if(O0.bindFramebuffer(P.FRAMEBUFFER,b)&&y)O0.drawBuffers(_,b);if(O0.viewport(B),O0.scissor(C),O0.setScissorTest(g),J0){let K0=V0.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+f,K0.__webglTexture,v)}else if(G0){let K0=f;for(let C0=0;C0<_.textures.length;C0++){let S0=V0.get(_.textures[C0]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+C0,S0.__webglTexture,v,K0)}}else if(_!==null&&v!==0){let K0=V0.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,K0.__webglTexture,v)}S=-1},this.readRenderTargetPixels=function(_,f,v,y,b,J0,G0,D0=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K0=V0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&G0!==void 0)K0=K0[G0];if(K0){O0.bindFramebuffer(P.FRAMEBUFFER,K0);try{let C0=_.textures[D0],S0=C0.format,_0=C0.type;if(!j0.textureFormatReadable(S0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j0.textureTypeReadable(_0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=_.width-y&&(v>=0&&v<=_.height-b)){if(_.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+D0);P.readPixels(f,v,y,b,z0.convert(S0),z0.convert(_0),J0)}}finally{let C0=A!==null?V0.get(A).__webglFramebuffer:null;O0.bindFramebuffer(P.FRAMEBUFFER,C0)}}},this.readRenderTargetPixelsAsync=async function(_,f,v,y,b,J0,G0,D0=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let K0=V0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&G0!==void 0)K0=K0[G0];if(K0)if(f>=0&&f<=_.width-y&&(v>=0&&v<=_.height-b)){O0.bindFramebuffer(P.FRAMEBUFFER,K0);let C0=_.textures[D0],S0=C0.format,_0=C0.type;if(!j0.textureFormatReadable(S0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j0.textureTypeReadable(_0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let i0=P.createBuffer();if(P.bindBuffer(P.PIXEL_PACK_BUFFER,i0),P.bufferData(P.PIXEL_PACK_BUFFER,J0.byteLength,P.STREAM_READ),_.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+D0);P.readPixels(f,v,y,b,z0.convert(S0),z0.convert(_0),0);let W9=A!==null?V0.get(A).__webglFramebuffer:null;O0.bindFramebuffer(P.FRAMEBUFFER,W9);let C9=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pD(P,C9,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,i0),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,J0),P.deleteBuffer(i0),P.deleteSync(C9),J0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,f=null,v=0){let y=Math.pow(2,-v),b=Math.floor(_.image.width*y),J0=Math.floor(_.image.height*y),G0=f!==null?f.x:0,D0=f!==null?f.y:0;I0.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,v,0,0,G0,D0,b,J0),O0.unbindTexture()};let yM=P.createFramebuffer(),gM=P.createFramebuffer();if(this.copyTextureToTexture=function(_,f,v=null,y=null,b=0,J0=null){if(J0===null)if(b!==0)y5("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J0=b,b=0;else J0=0;let G0,D0,K0,C0,S0,_0,i0,W9,C9,O9=_.isCompressedTexture?_.mipmaps[J0]:_.image;if(v!==null)G0=v.max.x-v.min.x,D0=v.max.y-v.min.y,K0=v.isBox3?v.max.z-v.min.z:1,C0=v.min.x,S0=v.min.y,_0=v.isBox3?v.min.z:0;else{let x8=Math.pow(2,-b);if(G0=Math.floor(O9.width*x8),D0=Math.floor(O9.height*x8),_.isDataArrayTexture)K0=O9.depth;else if(_.isData3DTexture)K0=Math.floor(O9.depth*x8);else K0=1;C0=0,S0=0,_0=0}if(y!==null)i0=y.x,W9=y.y,C9=y.z;else i0=0,W9=0,C9=0;let k9=z0.convert(f.format),E0=z0.convert(f.type),A9;if(f.isData3DTexture)I0.setTexture3D(f,0),A9=P.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)I0.setTexture2DArray(f,0),A9=P.TEXTURE_2D_ARRAY;else I0.setTexture2D(f,0),A9=P.TEXTURE_2D;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,f.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,f.unpackAlignment);let e0=P.getParameter(P.UNPACK_ROW_LENGTH),N8=P.getParameter(P.UNPACK_IMAGE_HEIGHT),A1=P.getParameter(P.UNPACK_SKIP_PIXELS),z8=P.getParameter(P.UNPACK_SKIP_ROWS),r5=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,O9.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,O9.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C0),P.pixelStorei(P.UNPACK_SKIP_ROWS,S0),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_0);let E9=_.isDataArrayTexture||_.isData3DTexture,b8=f.isDataArrayTexture||f.isData3DTexture;if(_.isDepthTexture){let x8=V0.get(_),X8=V0.get(f),q8=V0.get(x8.__renderTarget),$H=V0.get(X8.__renderTarget);O0.bindFramebuffer(P.READ_FRAMEBUFFER,q8.__webglFramebuffer),O0.bindFramebuffer(P.DRAW_FRAMEBUFFER,$H.__webglFramebuffer);for(let g7=0;g7<K0;g7++){if(E9)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V0.get(_).__webglTexture,b,_0+g7),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V0.get(f).__webglTexture,J0,C9+g7);P.blitFramebuffer(C0,S0,G0,D0,i0,W9,G0,D0,P.DEPTH_BUFFER_BIT,P.NEAREST)}O0.bindFramebuffer(P.READ_FRAMEBUFFER,null),O0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b!==0||_.isRenderTargetTexture||V0.has(_)){let x8=V0.get(_),X8=V0.get(f);O0.bindFramebuffer(P.READ_FRAMEBUFFER,yM),O0.bindFramebuffer(P.DRAW_FRAMEBUFFER,gM);for(let q8=0;q8<K0;q8++){if(E9)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x8.__webglTexture,b,_0+q8);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,x8.__webglTexture,b);if(b8)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X8.__webglTexture,J0,C9+q8);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,X8.__webglTexture,J0);if(b!==0)P.blitFramebuffer(C0,S0,G0,D0,i0,W9,G0,D0,P.COLOR_BUFFER_BIT,P.NEAREST);else if(b8)P.copyTexSubImage3D(A9,J0,i0,W9,C9+q8,C0,S0,G0,D0);else P.copyTexSubImage2D(A9,J0,i0,W9,C0,S0,G0,D0)}O0.bindFramebuffer(P.READ_FRAMEBUFFER,null),O0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b8)if(_.isDataTexture||_.isData3DTexture)P.texSubImage3D(A9,J0,i0,W9,C9,G0,D0,K0,k9,E0,O9.data);else if(f.isCompressedArrayTexture)P.compressedTexSubImage3D(A9,J0,i0,W9,C9,G0,D0,K0,k9,O9.data);else P.texSubImage3D(A9,J0,i0,W9,C9,G0,D0,K0,k9,E0,O9);else if(_.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,J0,i0,W9,G0,D0,k9,E0,O9.data);else if(_.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,J0,i0,W9,O9.width,O9.height,k9,O9.data);else P.texSubImage2D(P.TEXTURE_2D,J0,i0,W9,G0,D0,k9,E0,O9);if(P.pixelStorei(P.UNPACK_ROW_LENGTH,e0),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,N8),P.pixelStorei(P.UNPACK_SKIP_PIXELS,A1),P.pixelStorei(P.UNPACK_SKIP_ROWS,z8),P.pixelStorei(P.UNPACK_SKIP_IMAGES,r5),J0===0&&f.generateMipmaps)P.generateMipmap(A9);O0.unbindTexture()},this.initRenderTarget=function(_){if(V0.get(_).__webglFramebuffer===void 0)I0.setupRenderTarget(_)},this.initTexture=function(_){if(_.isCubeTexture)I0.setTextureCube(_,0);else if(_.isData3DTexture)I0.setTexture3D(_,0);else if(_.isDataArrayTexture||_.isCompressedArrayTexture)I0.setTexture2DArray(_,0);else I0.setTexture2D(_,0);O0.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,O0.reset(),L0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return AU}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let w=this.getContext();w.drawingBufferColorSpace=r0._getDrawingBufferColorSpace(J),w.unpackColorSpace=r0._getUnpackColorSpace()}}var J_=Symbol.for("react.transitional.element"),TC=Symbol.for("react.fragment");function TM(J,w,Z){var Y=null;if(Z!==void 0&&(Y=""+Z),w.key!==void 0&&(Y=""+w.key),"key"in w){Z={};for(var H in w)H!=="key"&&(Z[H]=w[H])}else Z=w;return w=Z.ref,{$$typeof:J_,type:J,key:Y,ref:w!==void 0?w:null,props:Z}}var A0=TM,$9=TM;var UG=[{id:"1",name:"Moon Rock",price:39.99,description:"La flor premium con mayor concentración de CBD. Aroma intenso y profundo, cosechada en interior y curada a la perfección. Una experiencia sensorial única, con notas terrosas y un final dulce. Ideal para la relajación profunda.",color:"#EAB308",weightGrams:5},{id:"2",name:"Purple Haze",price:34.5,description:"Tonos morados y terrosos con notas afrutadas. Efecto relajante superior, ideal para desconectar al final del día. Crece bajo luz natural, lo que le da un perfil de cannabinoides y terpenos muy equilibrado.",color:"#8B5CF6",weightGrams:3},{id:"3",name:"Silver Haze",price:29.99,description:"Clásica sativa, brillante y energizante. Perfecta para el día a día y mejorar la concentración en tareas creativas. Su estructura es ligera y aireada, con un aroma cítrico y fresco que recuerda al pino.",color:"#60A5FA",weightGrams:10}],PM={THEME_BG:"bg-stone-950 text-white",HEADER_TEXT:"text-white/90",ICON_COLOR:"text-white",DOT_NAV_BG:"bg-white/10 backdrop-blur-sm",CART_BG:"bg-stone-900/80 backdrop-blur-xl",CART_TEXT_COLOR:"text-white",CART_BORDER_COLOR:"border-gray-700",PRIMARY_TEXT:"text-white",SECONDARY_TEXT:"text-white/80",ACCENT_COLOR:"text-emerald-400",ACCENT_BG:"bg-emerald-400",NOTIFICATION_BG:"bg-emerald-600"},w_=()=>{return UG.map((J,w)=>({...J,uniqueKey:`${J.id}-0-${w}`}))},Z_=(J,w,Z,Y,H,X)=>{if(Z===0||Y===0)return{x:0,y:0};let Q=H.fov*(Math.PI/180),W=H.position.z-X,U=2*Math.tan(Q/2)*W,q=U*H.aspect/Z,K=U/Y,$=(J-Z/2)*q,R=-(w-Y/2)*K;return{x:$,y:R}},Y_=()=>{let[J,w]=o0.useState({}),Z=o0.useCallback((U)=>{w((G)=>{let q=G[U.id];if(q)return{...G,[U.id]:{...q,quantity:q.quantity+1}};return{...G,[U.id]:{product:U,quantity:1}}})},[]),Y=o0.useCallback((U)=>{w((G)=>{let q=G[U];if(!q)return G;if(q.quantity>1)return{...G,[U]:{...q,quantity:q.quantity-1}};else{let K={...G};return delete K[U],K}})},[]),H=o0.useCallback((U)=>{w((G)=>{let q={...G};return delete q[U],q})},[]),X=o0.useMemo(()=>{return Object.values(J).reduce((U,G)=>U+G.product.price*G.quantity,0).toFixed(2)},[J]),Q=o0.useMemo(()=>{return Object.values(J).reduce((U,G)=>U+G.quantity,0)},[J]);return{groupedItemsList:o0.useMemo(()=>{return Object.values(J).sort((U,G)=>U.product.name.localeCompare(G.product.name))},[J]),handleAddItem:Z,handleDecrementItem:Y,handleRemoveItem:H,calculateTotal:X,cartCount:Q}},H_=()=>{return o0.useCallback((w)=>{let Z=document.getElementById("notification");if(Z)Z.innerHTML=w,Z.classList.remove("opacity-0","scale-95"),Z.classList.add("opacity-100","scale-100","animate-pulse-once"),setTimeout(()=>{Z.classList.remove("opacity-100","scale-100","animate-pulse-once"),Z.classList.add("opacity-0","scale-95")},2000)},[])},X_=(J)=>{let[w]=o0.useState(w_),[Z,Y]=o0.useState(0),[H,X]=o0.useState(!1),Q=w[Z],W=o0.useCallback(()=>{if(!J.current)return;let q=J.current,K=q.scrollTop,$=q.clientHeight,R=Math.floor((K+$/2)/$);if(R>=0&&R<w.length&&R!==Z)Y(R);X(K>$*0.5)},[Z,w.length,J]),U=o0.useCallback((q)=>{if(!J.current)return;let K=q*J.current.clientHeight;J.current.scrollTo({top:K,behavior:"smooth"}),Y(q)},[J]),G=o0.useCallback(()=>{if(!J.current)return;J.current.scrollTo({top:0,behavior:"smooth"}),Y(0)},[J]);return{dynamicList:w,currentIndex:Z,activeProduct:Q,handleScroll:W,handleClickDot:U,showBackToTop:H,handleBackToTop:G}},Q_=o0.default.memo(({product:J,onModelLoaded:w,isActive:Z,flyoutTarget:Y})=>{let H=o0.useRef(null),X=o0.useRef(null),Q=o0.useRef(null);return o0.useEffect(()=>{if(!H.current)return;let W=H.current,U=new JH,G=new J8(75,W.clientWidth/W.clientHeight,0.1,1000),q=new WG({antialias:!0,alpha:!0});q.setSize(W.clientWidth,W.clientHeight),q.setPixelRatio(window.devicePixelRatio),W.appendChild(q.domElement);let $=(()=>{let C=new Iw(1.6,1.6,4.2,64),g=new YH({color:new d0(J.color),metalness:0.9,roughness:0.1,clearcoat:1,clearcoatRoughness:0.05,flatShading:!1}),p=new F8(C,g),l=new v7(2.8800000000000003,0.1,0.35),o=new Tw({color:15658734,metalness:1,roughness:0.1}),m=new F8(l,o);return m.position.y=2.1,m.rotation.y=Math.PI/4,p.add(m),p.rotation.x=0.2,X.current=p,U.add(p),w(),[C,g,l,o]})();U.add(new QH(16777215,0.4));let R=new XH(16777215,80,20,Math.PI*0.15,0.5,0.5);R.position.set(4,5,4),R.target.position.set(0,0,0),U.add(R);let N=new Sw(16777215,15,100);N.position.set(-5,0,3),U.add(N);let L=new Sw(16777215,30,100);L.position.set(0,5,-5),U.add(L),G.position.z=13;let D=!1,k={x:0,y:0},O=(S)=>{D=!0,k={x:S.clientX,y:S.clientY},W.setPointerCapture(S.pointerId)},M=(S)=>{if(!D||!X.current)return;let V=S.clientX-k.x,B=S.clientY-k.y;X.current.rotation.y+=V*0.005,X.current.rotation.x+=B*0.005,k={x:S.clientX,y:S.clientY}},z=()=>{D=!1};W.addEventListener("pointerdown",O),W.addEventListener("pointermove",M),W.addEventListener("pointerup",z);let T=new WH,E=()=>{requestAnimationFrame(E);let S=X.current;if(!S){q.render(U,G);return}let V=T.getElapsedTime(),B=Q.current?.active,C=10.5,g=0.15;if(Z&&!B){if(G.position.z>C)G.position.z-=(G.position.z-C)*0.05;if(S.position.y<g)S.position.y+=(g-S.position.y)*0.05}else if(!Z){if(G.position.z<13)G.position.z+=(13-G.position.z)*0.05;if(S.position.y>0)S.position.y-=(S.position.y-0)*0.05}if(!D&&!B)S.rotation.y+=0.001,S.position.y+=Math.sin(V*0.5)*0.001;if(B){let{targetX:p,targetY:l,startTime:o,startScale:m,startBagX:t,startBagY:d}=Q.current,a=800,X0=Date.now()-o,B0=Math.min(1,X0/800),g0=1-Math.pow(1-B0,4);S.position.x=Bw.lerp(t,p,g0),S.position.y=Bw.lerp(d,l,g0);let M9=0.1;if(S.scale.setScalar(Bw.lerp(m,M9,g0)),S.rotation.y+=0.1,S.rotation.x+=0.05,B0>=1)Q.current.active=!1}q.render(U,G)},A=()=>{let{clientWidth:S,clientHeight:V}=W;q.setSize(S,V),G.aspect=S/V,G.updateProjectionMatrix()};if(window.addEventListener("resize",A),Y&&X.current){let{clientWidth:S,clientHeight:V}=W,{x:B,y:C}=Z_(Y.endX,Y.endY,S,V,G,X.current.position.z);Q.current={active:!0,targetX:B,targetY:C,startTime:Date.now(),startScale:X.current.scale.x,startBagX:X.current.position.x,startBagY:X.current.position.y}}else Q.current=null;return E(),()=>{window.removeEventListener("resize",A),W.removeEventListener("pointerdown",O),W.removeEventListener("pointermove",M),W.removeEventListener("pointerup",z),W.removeChild(q.domElement),q.dispose(),$.forEach((S)=>S.dispose())}},[J.id,J.color,w,Z,Y]),A0("div",{ref:H,className:"absolute inset-0 w-full h-full cursor-grab transition-opacity duration-700"})}),W_=o0.default.memo(({product:J,isActive:w,onModelLoaded:Z,isModelDelayedVisible:Y,handleAddToCart:H,flyoutTarget:X})=>{let[Q,W]=o0.useState(!1),{PRIMARY_TEXT:U,SECONDARY_TEXT:G,ACCENT_COLOR:q,ACCENT_BG:K}=PM,$=w?"translate-y-0 opacity-100":"translate-y-24 opacity-0",R=Q?"translate-y-0 opacity-100 pointer-events-auto":"translate-y-full opacity-0 pointer-events-none";return o0.useEffect(()=>{if(!w)W(!1)},[w]),$9("section",{className:"w-full h-screen flex flex-col justify-end items-center relative overflow-hidden snap-start",style:{backgroundColor:J.color+"20"},children:[A0("div",{className:`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center z-5 transition-all duration-700 ease-out 
                ${w?"opacity-30 scale-100":"opacity-0 scale-90"}`,children:A0("h1",{className:"text-[18vw] font-black leading-none whitespace-nowrap tracking-tighter",style:{color:J.color},children:J.name})}),A0("div",{className:`absolute inset-0 z-20 transition-opacity duration-300 
                ${Y&&w||X?"opacity-100":"opacity-0"}
            `,children:A0(Q_,{product:J,onModelLoaded:Z,isActive:w,flyoutTarget:X})}),Q&&A0("div",{className:"fixed inset-0 bg-black/50 z-34",onClick:()=>W(!1),"aria-hidden":"true"}),$9("div",{className:`fixed inset-x-0 bottom-0 z-40 md:max-w-xl md:mx-auto md:bottom-20 transition-all duration-500 ease-out 
                ${R} 
                bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-t-3xl md:rounded-3xl shadow-2xl`,children:[$9("div",{className:"flex justify-between items-center mb-6",children:[A0("h3",{className:`text-3xl font-extrabold ${q}`,children:J.name}),A0("button",{onClick:()=>W(!1),className:"p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition","aria-label":"Cerrar detalles",children:A0(B5,{className:"w-7 h-7"})})]}),A0("p",{className:`text-lg font-light ${G} leading-relaxed`,children:J.description}),A0("div",{className:"mt-6",children:$9("span",{className:`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full ${K}/20 ${q} border border-emerald-400/50`,children:[A0(z5,{className:"w-4 h-4 mr-2"}),"Peso: ",J.weightGrams," gramos | Lote: CBD-P",J.id]})})]}),A0("div",{className:"relative z-30 w-full max-w-3xl pointer-events-none",children:$9("div",{className:`flex items-center justify-between w-full px-6 py-5 sm:p-7 transition-all duration-700 ease-out transform pointer-events-auto bg-black/90 backdrop-blur-xl border-t border-gray-800 rounded-t-3xl ${$}`,children:[$9("div",{className:"flex flex-col",children:[A0("span",{className:`text-3xl font-black ${q} leading-none tracking-tight`,children:J.price.toLocaleString("es-ES",{style:"currency",currency:"EUR"})}),$9("div",{className:"flex items-center space-x-3",children:[$9("span",{className:`text-lg font-bold ${U}/70`,children:[J.weightGrams,"g"]}),A0("span",{className:"text-xl text-white/50",children:"•"}),$9("button",{onClick:()=>W(!0),className:"flex items-center space-x-1 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition duration-300 transform active:scale-95","aria-label":"Mostrar más detalles del producto",children:[A0(z5,{className:"w-4 h-4"}),A0("span",{children:"Detalles"})]})]})]}),$9("button",{onClick:(N)=>H(J,N),className:`flex items-center justify-center space-x-3 px-8 py-4 text-black text-xl font-extrabold rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-[1.05] active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/80 ${K}`,children:[A0("span",{children:"Añadir"}),A0(L5,{className:"w-6 h-6"})]})]})})]},J.uniqueKey)}),U_=({isVisible:J,onClick:w})=>{return A0("button",{onClick:w,className:`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white/20 backdrop-blur-lg text-white shadow-xl transition-all duration-300 transform ${J?"opacity-100 translate-y-0":"opacity-0 translate-y-20 pointer-events-none"} hover:bg-emerald-400 hover:text-black`,"aria-label":"Volver al inicio de la página",children:A0(Hw,{className:"w-6 h-6"})})},SM=()=>{let J=o0.useRef(null),w=o0.useRef(null),[Z,Y]=o0.useState(!1),[H,X]=o0.useState(!0),[Q,W]=o0.useState(null),U=H_(),{dynamicList:G,currentIndex:q,activeProduct:K,handleScroll:$,handleClickDot:R,showBackToTop:N,handleBackToTop:L}=X_(J),{groupedItemsList:D,handleAddItem:k,handleDecrementItem:O,handleRemoveItem:M,calculateTotal:z,cartCount:T}=Y_(),E=o0.useCallback((a,X0)=>{if(k(a),!J.current||!w.current)return;let B0=w.current.getBoundingClientRect(),g0=B0.left+B0.width/2,M9=B0.top+B0.height/2;W({product:a,target:{endX:g0,endY:M9}}),setTimeout(()=>W(null),850),U(`✅ ${a.name} añadido.`)},[k,U]),A=o0.useCallback(()=>{},[]);o0.useEffect(()=>{X(!1);let a=setTimeout(()=>{X(!0)},150);return()=>clearTimeout(a)},[K?.uniqueKey]);let{THEME_BG:S,HEADER_TEXT:V,ICON_COLOR:B,DOT_NAV_BG:C,CART_BG:g,CART_TEXT_COLOR:p,CART_BORDER_COLOR:l,ACCENT_COLOR:o,NOTIFICATION_BG:m,ACCENT_BG:t}=PM,d=K?UG.findIndex((a)=>a.id===K.id):-1;return $9("div",{className:`min-h-screen font-['Inter'] antialiased ${S} overflow-hidden`,children:[A0("style",{children:`
            @keyframes pulse-once {
              0%, 100% { transform: translate(-50%, 0) scale(1); }
              50% { transform: translate(-50%, 0) scale(1.05); }
            }
            .animate-pulse-once {
              animation: pulse-once 0.3s ease-out;
            }
          `}),A0("header",{className:"fixed top-0 left-0 w-full z-30 p-3 pr-6 sm:p-4 sm:pr-8",children:$9("div",{className:"flex justify-between items-center max-w-7xl mx-auto",children:[A0("span",{className:`text-xl md:text-2xl font-extrabold tracking-widest ${V}`,children:"UNHEALTHY"}),$9("button",{onClick:()=>Y(!0),ref:w,className:"relative p-2 rounded-full hover:bg-white/10 transition duration-300","aria-label":"Abrir carrito de compras",children:[A0(L5,{className:`w-6 h-6 ${B}`}),T>0&&A0("span",{className:`absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 ${t} rounded-full`,children:T})]})]})}),A0("div",{id:"notification",className:`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-3 px-6 max-w-sm ${m} text-white font-semibold rounded-full shadow-2xl transition duration-500 ease-in-out opacity-0 scale-95 flex items-center space-x-2`,children:"Notificación"}),A0(U_,{isVisible:N,onClick:L}),A0("nav",{className:`hidden md:flex fixed right-12 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-3 p-2 rounded-full shadow-xl border border-white/10 ${C}`,children:UG.map((a,X0)=>A0("button",{onClick:()=>R(X0),className:`w-3 h-3 rounded-full transition-all duration-300 ${d===X0?`${t} scale-150 ring-2 ring-white ring-opacity-50 shadow-inner shadow-black`:"bg-white/30 hover:bg-white/60"}`,"aria-label":`Ir al producto ${a.name}`},a.id))}),Z&&A0("div",{className:"fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",onClick:()=>Y(!1),"aria-hidden":"true"}),$9("div",{className:`fixed top-0 right-0 h-full w-full md:max-w-sm md:w-96 z-50 transition-transform duration-500 ease-in-out 
                ${Z?"translate-x-0":"translate-x-full"} 
                ${g} ${p} flex flex-col p-6 border-l border-white/10 shadow-2xl`,children:[$9("div",{className:`flex justify-between items-center pb-4 border-b ${l}`,children:[A0("h2",{className:"text-3xl font-extrabold tracking-tight",children:"Tu Cesta"}),A0("button",{onClick:()=>Y(!1),className:"p-2 rounded-full hover:bg-white/10 transition","aria-label":"Cerrar carrito",children:A0(B5,{className:"w-7 h-7"})})]}),A0("div",{className:"flex-grow overflow-y-auto py-6",children:T===0?A0("p",{className:"text-center italic mt-12 text-gray-500 text-lg",children:"Tu carrito está vacío. ¡Es hora de explorar!"}):D.map((a)=>$9("div",{className:`py-4 border-b border-dashed ${l}`,children:[$9("div",{className:"flex justify-between items-start mb-2",children:[A0("span",{className:"font-extrabold text-white text-xl",children:a.product.name}),A0("button",{onClick:()=>M(a.product.id),className:"p-2 rounded-full hover:bg-red-500/10 text-red-500 transition","aria-label":`Eliminar grupo de ${a.product.name}`,children:A0(Xw,{className:"w-5 h-5"})})]}),$9("div",{className:"flex justify-between items-center mt-2",children:[$9("div",{className:"flex items-center space-x-2 text-white/90 bg-gray-800/50 p-1 rounded-xl shadow-inner border border-gray-700",children:[A0("button",{onClick:()=>O(a.product.id),className:"text-white w-8 h-8 rounded-lg hover:bg-gray-700 transition font-bold text-xl","aria-label":`Quitar uno de ${a.product.name}`,children:"−"}),A0("span",{className:"font-extrabold text-xl w-6 text-center",children:a.quantity}),A0("button",{onClick:()=>k(a.product),className:"text-white w-8 h-8 rounded-lg hover:bg-gray-700 transition font-bold text-xl","aria-label":`Añadir uno de ${a.product.name}`,children:"+"})]}),$9("div",{className:"text-right",children:[A0("span",{className:`font-extrabold text-2xl block ${o}`,children:(a.product.price*a.quantity).toLocaleString("es-ES",{style:"currency",currency:"EUR"})}),$9("span",{className:"text-sm text-gray-500 mt-1",children:[a.product.weightGrams,"g por unidad"]})]})]})]},a.product.id))}),$9("div",{className:`pt-6 border-t ${l}`,children:[$9("div",{className:"flex justify-between items-center text-2xl font-bold mb-6",children:[A0("span",{children:"Total:"}),$9("span",{className:o,children:[z," €"]})]}),$9("button",{disabled:T===0,className:`w-full py-4 text-xl font-extrabold rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 ${T>0?"bg-emerald-400 text-black hover:bg-emerald-500 transform active:scale-[0.99]":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,children:[A0("span",{children:"Proceder al Pago Seguro"}),A0(Yw,{className:"w-5 h-5"})]})]})]}),A0("div",{ref:J,onScroll:$,className:"w-full h-screen overflow-y-scroll bg-stone-950 snap-y snap-mandatory",children:G.map((a,X0)=>A0(W_,{product:a,isActive:X0===q,onModelLoaded:A,isModelDelayedVisible:H,handleAddToCart:E,flyoutTarget:X0===q&&Q&&Q.product.id===a.id?Q.target:null},a.uniqueKey))})]})};var G_=document.getElementById("root"),q_=A0(jM.StrictMode,{children:A0(SM,{})});fM.createRoot(G_).render(q_);

//# debugId=AB61B9B5B0E6163B64756E2164756E21
//# sourceMappingURL=/unhealthy/chunk-n49cjmxn.js.map
