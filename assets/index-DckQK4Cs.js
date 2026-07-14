var Xf=Object.defineProperty;var Yf=(n,e,t)=>e in n?Xf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var yr=(n,e,t)=>Yf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="184",qf=0,Xl=1,Zf=2,Gs=1,$f=2,Nr=3,ui=0,Zt=1,yn=2,Gn=0,er=1,Yl=2,ql=3,Zl=4,Kf=5,Mi=100,jf=101,Jf=102,Qf=103,eh=104,th=200,nh=201,ih=202,rh=203,oo=204,lo=205,sh=206,ah=207,oh=208,lh=209,ch=210,uh=211,fh=212,hh=213,dh=214,co=0,uo=1,fo=2,lr=3,ho=4,po=5,mo=6,_o=7,Eu=0,ph=1,mh=2,Rn=0,Tu=1,yu=2,bu=3,Au=4,Ru=5,wu=6,Cu=7,Pu=300,Ri=301,cr=302,Sa=303,Ea=304,ha=306,go=1e3,Vn=1001,xo=1002,Ot=1003,_h=1004,as=1005,Ht=1006,Ta=1007,Ti=1008,tn=1009,Du=1010,Lu=1011,Wr=1012,fl=1013,Cn=1014,bn=1015,Yn=1016,hl=1017,dl=1018,Xr=1020,Iu=35902,Uu=35899,Nu=1021,Fu=1022,mn=1023,qn=1026,yi=1027,Ou=1028,pl=1029,wi=1030,ml=1031,_l=1033,Hs=33776,ks=33777,Ws=33778,Xs=33779,vo=35840,Mo=35841,So=35842,Eo=35843,To=36196,yo=37492,bo=37496,Ao=37488,Ro=37489,Qs=37490,wo=37491,Co=37808,Po=37809,Do=37810,Lo=37811,Io=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,Vo=37819,Go=37820,Ho=37821,ko=36492,Wo=36494,Xo=36495,Yo=36283,qo=36284,ea=36285,Zo=36286,gh=3200,$o=0,xh=1,oi="",Yt="srgb",ta="srgb-linear",na="linear",ct="srgb",Ui=7680,$l=519,vh=512,Mh=513,Sh=514,gl=515,Eh=516,Th=517,xl=518,yh=519,Kl=35044,bh=35048,jl="300 es",An=2e3,Yr=2001;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rh(){const n=ia("canvas");return n.style.display="block",n}const Jl={};function Ql(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=Bu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Bu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ko(...n){const e=n.join(" ");e in Jl||(Jl[e]=!0,De(...n))}function wh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ch={[co]:uo,[fo]:mo,[ho]:_o,[lr]:po,[uo]:co,[mo]:fo,[_o]:ho,[po]:lr};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const Vr=Math.PI/180,qr=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function vl(n,e){return(n%e+e)%e}function Ph(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Dh(n,e,t){return n!==e?(t-n)/(e-n):0}function Gr(n,e,t){return(1-t)*n+t*e}function Lh(n,e,t,i){return Gr(n,e,1-Math.exp(-t*i))}function Ih(n,e=1){return e-Math.abs(vl(n,e*2)-e)}function Uh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Nh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Oh(n,e){return n+Math.random()*(e-n)}function Bh(n){return n*(.5-Math.random())}function zh(n){n!==void 0&&(ec=n);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vh(n){return n*Vr}function Gh(n){return n*qr}function Hh(n){return(n&n-1)===0&&n!==0}function kh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xh(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),u=a((e-i)/2),d=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*f,l*h,l*u,o*c);break;case"YZY":n.set(l*u,o*f,l*h,o*c);break;case"ZXZ":n.set(l*h,l*u,o*f,o*c);break;case"XZX":n.set(o*f,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*f,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*f,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yh={DEG2RAD:Vr,RAD2DEG:qr,generateUUID:Sr,clamp:Je,euclideanModulo:vl,mapLinear:Ph,inverseLerp:Dh,lerp:Gr,damp:Lh,pingpong:Ih,smoothstep:Uh,smootherstep:Nh,randInt:Fh,randFloat:Oh,randFloatSpread:Bh,seededRandom:zh,degToRad:Vh,radToDeg:Gh,isPowerOfTwo:Hh,ceilPowerOfTwo:kh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:Wt,denormalize:ji},Ll=class Ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let ot=Ll;class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[a+0],d=s[a+1],_=s[a+2],S=s[a+3];if(h!==S||l!==u||c!==d||f!==_){let m=l*u+c*d+f*_+h*S;m<0&&(u=-u,d=-d,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,l=l*p+u*o,c=c*p+d*o,f=f*p+_*o,h=h*p+S*o}else{l=l*p+u*o,c=c*p+d*o,f=f*p+_*o,h=h*p+S*o;const M=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=M,c*=M,f*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+f*h+l*d-c*u,e[t+1]=l*_+f*u+c*h-o*d,e[t+2]=c*_+f*d+o*u-l*h,e[t+3]=f*_-o*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),u=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h-u*d*_;break;case"YXZ":this._x=u*f*h+c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h+u*d*_;break;case"ZXY":this._x=u*f*h-c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h-u*d*_;break;case"ZYX":this._x=u*f*h-c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h+u*d*_;break;case"YZX":this._x=u*f*h+c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h-u*d*_;break;case"XZY":this._x=u*f*h-c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h+u*d*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=i+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Il=class Il{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Il.prototype.isVector3=!0;let H=Il;const ya=new H,tc=new Er,Ul=class Ul{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],d=i[5],_=i[8],S=r[0],m=r[3],p=r[6],M=r[1],y=r[4],T=r[7],D=r[2],b=r[5],w=r[8];return s[0]=a*S+o*M+l*D,s[3]=a*m+o*y+l*b,s[6]=a*p+o*T+l*w,s[1]=c*S+f*M+h*D,s[4]=c*m+f*y+h*b,s[7]=c*p+f*T+h*w,s[2]=u*S+d*M+_*D,s[5]=u*m+d*y+_*b,s[8]=u*p+d*T+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*s,d=c*s-a*l,_=t*h+i*u+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(f*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=d*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;let Ve=Ul;const ba=new Ve,nc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const n={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?na:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const et=qh();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class Zh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=ia("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $h=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Aa(r[a].image)):s.push(Aa(r[a]))}else s=Aa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Kh=0;const Ra=new H;class qt extends Di{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Vn,r=Vn,s=Ht,a=Ti,o=mn,l=tn,c=qt.DEFAULT_ANISOTROPY,f=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Sr(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Pu;qt.DEFAULT_ANISOTROPY=1;const Nl=class Nl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(d+1)/2,D=(p+1)/2,b=(f+u)/4,w=(h+S)/4,x=(_+m)/4;return y>T&&y>D?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=w/i):T>D?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=x/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=x/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-S)/M,this.z=(u-f)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;let Tt=Nl;class jh extends Di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ml(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zu extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fa=class fa{constructor(e,t,i,r,s,a,o,l,c,f,h,u,d,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,h,u,d,_,S,m)}set(e,t,i,r,s,a,o,l,c,f,h,u,d,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*f,d=a*h,_=o*f,S=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,d=l*h,_=c*f,S=c*h;t[0]=u+S*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=d*o-_,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,d=l*h,_=c*f,S=c*h;t[0]=u-S*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*f,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,d=a*h,_=o*f,S=o*h;t[0]=l*f,t[4]=_*c-d,t[8]=u*c+S,t[1]=l*h,t[5]=S*c+u,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*f,t[4]=S-u*h,t[8]=_*h+d,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*h+_,t[10]=u-S*h}else if(e.order==="XZY"){const u=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+S,t[5]=a*f,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*f,t[10]=S*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,ed)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(i,Jt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(i,Jt)),jn.normalize(),os.crossVectors(Jt,jn),r[0]=jn.x,r[4]=os.x,r[8]=Jt.x,r[1]=jn.y,r[5]=os.y,r[9]=Jt.y,r[2]=jn.z,r[6]=os.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],d=i[13],_=i[2],S=i[6],m=i[10],p=i[14],M=i[3],y=i[7],T=i[11],D=i[15],b=r[0],w=r[4],x=r[8],R=r[12],I=r[1],A=r[5],N=r[9],W=r[13],Y=r[2],C=r[6],B=r[10],O=r[14],j=r[3],z=r[7],J=r[11],ue=r[15];return s[0]=a*b+o*I+l*Y+c*j,s[4]=a*w+o*A+l*C+c*z,s[8]=a*x+o*N+l*B+c*J,s[12]=a*R+o*W+l*O+c*ue,s[1]=f*b+h*I+u*Y+d*j,s[5]=f*w+h*A+u*C+d*z,s[9]=f*x+h*N+u*B+d*J,s[13]=f*R+h*W+u*O+d*ue,s[2]=_*b+S*I+m*Y+p*j,s[6]=_*w+S*A+m*C+p*z,s[10]=_*x+S*N+m*B+p*J,s[14]=_*R+S*W+m*O+p*ue,s[3]=M*b+y*I+T*Y+D*j,s[7]=M*w+y*A+T*C+D*z,s[11]=M*x+y*N+T*B+D*J,s[15]=M*R+y*W+T*O+D*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],_=e[3],S=e[7],m=e[11],p=e[15],M=l*d-c*u,y=o*d-c*h,T=o*u-l*h,D=a*d-c*f,b=a*u-l*f,w=a*h-o*f;return t*(S*M-m*y+p*T)-i*(_*M-m*D+p*b)+r*(_*y-S*D+p*w)-s*(_*T-S*b+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],_=e[12],S=e[13],m=e[14],p=e[15],M=t*o-i*a,y=t*l-r*a,T=t*c-s*a,D=i*l-r*o,b=i*c-s*o,w=r*c-s*l,x=f*S-h*_,R=f*m-u*_,I=f*p-d*_,A=h*m-u*S,N=h*p-d*S,W=u*p-d*m,Y=M*W-y*N+T*A+D*I-b*R+w*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/Y;return e[0]=(o*W-l*N+c*A)*C,e[1]=(r*N-i*W-s*A)*C,e[2]=(S*w-m*b+p*D)*C,e[3]=(u*b-h*w-d*D)*C,e[4]=(l*I-a*W-c*R)*C,e[5]=(t*W-r*I+s*R)*C,e[6]=(m*T-_*w-p*y)*C,e[7]=(f*w-u*T+d*y)*C,e[8]=(a*N-o*I+c*x)*C,e[9]=(i*I-t*N-s*x)*C,e[10]=(_*b-S*T+p*M)*C,e[11]=(h*T-f*b-d*M)*C,e[12]=(o*R-a*A-l*x)*C,e[13]=(t*A-i*R+r*x)*C,e[14]=(S*y-_*D-m*M)*C,e[15]=(f*D-h*y+u*M)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,h=o+o,u=s*c,d=s*f,_=s*h,S=a*f,m=a*h,p=o*h,M=l*c,y=l*f,T=l*h,D=i.x,b=i.y,w=i.z;return r[0]=(1-(S+p))*D,r[1]=(d+T)*D,r[2]=(_-y)*D,r[3]=0,r[4]=(d-T)*b,r[5]=(1-(u+p))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(_+y)*w,r[9]=(m-M)*w,r[10]=(1-(u+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),l=Fi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,f=1/o,h=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=f,ln.elements[5]*=f,ln.elements[6]*=f,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,f=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===An)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Yr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,f=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===An)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Yr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};fa.prototype.isMatrix4=!0;let wt=fa;const Fi=new H,ln=new wt,Qh=new H(0,0,0),ed=new H(1,1,1),jn=new H,os=new H,Jt=new H,rc=new wt,sc=new Er;class fi{constructor(e=0,t=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const ac=new H,Oi=new Er,Dn=new wt,ls=new H,br=new H,nd=new H,id=new Er,oc=new H(1,0,0),lc=new H(0,1,0),cc=new H(0,0,1),uc={type:"added"},rd={type:"removed"},Bi={type:"childadded",child:null},wa={type:"childremoved",child:null};class kt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new H,t=new fi,i=new Er,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ve}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ls.copy(e):ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(br,ls,this.up):Dn.lookAt(ls,br,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rd),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sd={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=vl(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Pa(a,s,e+1/3),this.g=Pa(a,s,e),this.b=Pa(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return et.workingToColorSpace(Vt.copy(this),e),Math.round(Je(Vt.r*255,0,255))*65536+Math.round(Je(Vt.g*255,0,255))*256+Math.round(Je(Vt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Yt){et.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(us);const i=Gr(Jn.h,us.h,t),r=Gr(Jn.s,us.s,t),s=Gr(Jn.l,us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new at;at.NAMES=Gu;class Hu extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new H,Ln=new H,Da=new H,In=new H,zi=new H,Vi=new H,fc=new H,La=new H,Ia=new H,Ua=new H,Na=new Tt,Fa=new Tt,Oa=new Tt;class dn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),Ln.subVectors(i,t),Da.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Ln),l=cn.dot(Da),c=Ln.dot(Ln),f=Ln.dot(Da),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,d=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Na,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(Oa,s.z),a}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),Ln.subVectors(e,t),cn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;zi.subVectors(r,i),Vi.subVectors(s,i),La.subVectors(e,i);const l=zi.dot(La),c=Vi.dot(La);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,r);const f=zi.dot(Ia),h=Vi.dot(Ia);if(f>=0&&h<=f)return t.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(zi,a);Ua.subVectors(e,s);const d=zi.dot(Ua),_=Vi.dot(Ua);if(_>=0&&d<=_)return t.copy(s);const S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Vi,o);const m=f*_-d*h;if(m<=0&&h-f>=0&&d-_>=0)return fc.subVectors(s,r),o=(h-f)/(h-f+(d-_)),t.copy(r).addScaledVector(fc,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(i).addScaledVector(zi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class es{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),hs.subVectors(this.max,Ar),Gi.subVectors(e.a,Ar),Hi.subVectors(e.b,Ar),ki.subVectors(e.c,Ar),Qn.subVectors(Hi,Gi),ei.subVectors(ki,Hi),mi.subVectors(Gi,ki);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-mi.z,mi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,mi.z,0,-mi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-mi.y,mi.x,0];return!Ba(t,Gi,Hi,ki,hs)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Gi,Hi,ki,hs))?!1:(ds.crossVectors(Qn,ei),t=[ds.x,ds.y,ds.z],Ba(t,Gi,Hi,ki,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new H,new H,new H,new H,new H,new H,new H,new H],un=new H,fs=new es,Gi=new H,Hi=new H,ki=new H,Qn=new H,ei=new H,mi=new H,Ar=new H,hs=new H,ds=new H,_i=new H;function Ba(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),f=i.dot(_i);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ct=new H,ps=new ot;let ad=0;class $t extends Di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ku extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wu extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kn extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}const od=new es,Rr=new H,za=new H;class Sl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):od.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(za)),this.expandByPoint(Rr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ld=0;const sn=new wt,Va=new kt,Wi=new H,Qt=new es,wr=new es,Ut=new H;class gn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Wu:ku)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Qt.min,wr.min),Qt.expandByPoint(Ut),Ut.addVectors(Qt.max,wr.max),Qt.expandByPoint(Ut)):(Qt.expandByPoint(wr.min),Qt.expandByPoint(wr.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ut.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),Ut.add(Wi)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new H,l[x]=new H;const c=new H,f=new H,h=new H,u=new ot,d=new ot,_=new ot,S=new H,m=new H;function p(x,R,I){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,I),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,R),_.fromBufferAttribute(s,I),f.sub(c),h.sub(c),d.sub(u),_.sub(u);const A=1/(d.x*_.y-_.x*d.y);isFinite(A)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(A),o[x].add(S),o[R].add(S),o[I].add(S),l[x].add(m),l[R].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,R=M.length;x<R;++x){const I=M[x],A=I.start,N=I.count;for(let W=A,Y=A+N;W<Y;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new H,T=new H,D=new H,b=new H;function w(x){D.fromBufferAttribute(r,x),b.copy(D);const R=o[x];y.copy(R),y.sub(D.multiplyScalar(D.dot(R))).normalize(),T.crossVectors(b,R);const A=T.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,A)}for(let x=0,R=M.length;x<R;++x){const I=M[x],A=I.start,N=I.count;for(let W=A,Y=A+N;W<Y;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,h=new H;if(e)for(let u=0,d=e.count;u<d;u+=3){const _=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let d=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*f;for(let p=0;p<f;p++)u[_++]=c[d++]}return new $t(u,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cd=0;class ts extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=er,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nn=new H,Ga=new H,ms=new H,ti=new H,Ha=new H,_s=new H,ka=new H;class ud{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ga.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ga);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=ti.dot(this.direction),l=-ti.dot(ms),c=ti.lengthSq(),f=Math.abs(1-a*a);let h,u,d,_;if(f>0)if(h=a*l-o,u=a*o-l,_=s*f,h>=0)if(u>=-_)if(u<=_){const S=1/f;h*=S,u*=S,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ga).addScaledVector(ms,u),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){Ha.subVectors(t,e),_s.subVectors(i,e),ka.crossVectors(Ha,_s);let a=this.direction.dot(ka),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(_s.crossVectors(ti,_s));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(ti));if(c<0||l+c>a)return null;const f=-o*ti.dot(ka);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class El extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hc=new wt,gi=new ud,gs=new Sl,dc=new H,xs=new H,vs=new H,Ms=new H,Wa=new H,Ss=new H,pc=new H,Es=new H;class _n extends kt{constructor(e=new gn,t=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Wa.fromBufferAttribute(h,e),a?Ss.addScaledVector(Wa,f):Ss.addScaledVector(Wa.sub(t),f))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(gs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(gs,dc)===null||gi.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(hc.copy(s).invert(),gi.copy(e.ray).applyMatrix4(hc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,D=y;T<D;T+=3){const b=o.getX(T),w=o.getX(T+1),x=o.getX(T+2);r=Ts(this,p,e,i,c,f,h,b,w,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);r=Ts(this,a,e,i,c,f,h,M,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,D=y;T<D;T+=3){const b=T,w=T+1,x=T+2;r=Ts(this,p,e,i,c,f,h,b,w,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const M=m,y=m+1,T=m+2;r=Ts(this,a,e,i,c,f,h,M,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fd(n,e,t,i,r,s,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ui,o),l===null)return null;Es.copy(o),Es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:n}}function Ts(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xs),n.getVertexPosition(l,vs),n.getVertexPosition(c,Ms);const f=fd(n,e,t,i,xs,vs,Ms,pc);if(f){const h=new H;dn.getBarycoord(pc,xs,vs,Ms,h),r&&(f.uv=dn.getInterpolatedAttribute(r,o,l,c,h,new ot)),s&&(f.uv1=dn.getInterpolatedAttribute(s,o,l,c,h,new ot)),a&&(f.normal=dn.getInterpolatedAttribute(a,o,l,c,h,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};dn.getNormal(xs,vs,Ms,u.normal),f.face=u,f.barycoord=h}return f}class hd extends qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ot,f=Ot,h,u){super(null,a,o,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xa=new H,dd=new H,pd=new Ve;class vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xa.subVectors(i,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Xa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pd.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Sl,md=new ot(.5,.5),ys=new H;class Tl{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],d=s[7],_=s[8],S=s[9],m=s[10],p=s[11],M=s[12],y=s[13],T=s[14],D=s[15];if(r[0].setComponents(c-a,d-f,p-_,D-M).normalize(),r[1].setComponents(c+a,d+f,p+_,D+M).normalize(),r[2].setComponents(c+o,d+h,p+S,D+y).normalize(),r[3].setComponents(c-o,d-h,p-S,D-y).normalize(),i)r[4].setComponents(l,u,m,T).normalize(),r[5].setComponents(c-l,d-u,p-m,D-T).normalize();else if(r[4].setComponents(c-l,d-u,p-m,D-T).normalize(),t===An)r[5].setComponents(c+l,d+u,p+m,D+T).normalize();else if(t===Yr)r[5].setComponents(l,u,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=md.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xu extends qt{constructor(e=[],t=Ri,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ur extends qt{constructor(e,t,i=Cn,r,s,a,o=Ot,l=Ot,c,f=qn,h=1){if(f!==qn&&f!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _d extends ur{constructor(e,t=Cn,i=Ri,r,s,a=Ot,o=Ot,l,c=qn){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yu extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ns extends gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(f,3)),this.setAttribute("uv",new kn(h,2));function _(S,m,p,M,y,T,D,b,w,x,R){const I=T/w,A=D/x,N=T/2,W=D/2,Y=b/2,C=w+1,B=x+1;let O=0,j=0;const z=new H;for(let J=0;J<B;J++){const ue=J*A-W;for(let xe=0;xe<C;xe++){const He=xe*I-N;z[S]=He*M,z[m]=ue*y,z[p]=Y,c.push(z.x,z.y,z.z),z[S]=0,z[m]=0,z[p]=b>0?1:-1,f.push(z.x,z.y,z.z),h.push(xe/w),h.push(1-J/x),O+=1}}for(let J=0;J<x;J++)for(let ue=0;ue<w;ue++){const xe=u+ue+C*J,He=u+ue+C*(J+1),Qe=u+(ue+1)+C*(J+1),Ce=u+(ue+1)+C*J;l.push(xe,He,Ce),l.push(He,Qe,Ce),j+=6}o.addGroup(d,j,R),d+=j,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gd(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=qu(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Ed(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let f=o,h=l;for(let u=t;u<r;u+=t){const d=n[u],_=n[u+1];d<o&&(o=d),_<l&&(l=_),d>f&&(f=d),_>h&&(h=_)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return Zr(s,a,t,o,l,c,0),a}function qu(n,e,t,i,r){let s;if(r===Id(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=mc(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=mc(a/i|0,n[a],n[a+1],s);return s&&fr(s,s.next)&&(Kr(s),s=s.next),s}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fr(t,t.next)||St(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Zr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Rd(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?vd(n,i,r,s):xd(n)){e.push(l.i,n.i,c.i),Kr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Md(Ci(n),e),Zr(n,e,t,i,r,s,2)):a===2&&Sd(n,e,t,i,r,s):Zr(Ci(n),e,t,i,r,s,1);break}}}function xd(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,f=Math.min(r,s,a),h=Math.min(o,l,c),u=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=f&&_.x<=u&&_.y>=h&&_.y<=d&&Fr(r,o,s,l,a,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vd(n,e,t,i){const r=n.prev,s=n,a=n.next;if(St(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,f=r.y,h=s.y,u=a.y,d=Math.min(o,l,c),_=Math.min(f,h,u),S=Math.max(o,l,c),m=Math.max(f,h,u),p=jo(d,_,e,t,i),M=jo(S,m,e,t,i);let y=n.prevZ,T=n.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=d&&y.x<=S&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Fr(o,f,l,h,c,u,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=d&&T.x<=S&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&Fr(o,f,l,h,c,u,T.x,T.y)&&St(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=S&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Fr(o,f,l,h,c,u,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=d&&T.x<=S&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&Fr(o,f,l,h,c,u,T.x,T.y)&&St(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Md(n,e){let t=n;do{const i=t.prev,r=t.next.next;!fr(i,r)&&$u(i,t,t.next,r)&&$r(i,r)&&$r(r,i)&&(e.push(i.i,t.i,r.i),Kr(t),Kr(t.next),t=n=r),t=t.next}while(t!==n);return Ci(t)}function Sd(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pd(a,o)){let l=Ku(a,o);a=Ci(a,a.next),l=Ci(l,l.next),Zr(a,e,t,i,r,s,0),Zr(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Ed(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=qu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Cd(c))}r.sort(Td);for(let s=0;s<r.length;s++)t=yd(r[s],t);return t}function Td(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function yd(n,e){const t=bd(n,e);if(!t)return e;const i=Ku(t,n);return Ci(i,i.next),Ci(t,t.next)}function bd(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(fr(n,t))return t;do{if(fr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Zu(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);$r(t,n)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&Ad(a,t)))&&(a=t,f=h)}t=t.next}while(t!==o);return a}function Ad(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Rd(n,e,t,i){let r=n;do r.z===0&&(r.z=jo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,wd(r)}function wd(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function jo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Cd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Zu(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Fr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Zu(n,e,t,i,r,s,a,o)}function Pd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dd(n,e)&&($r(n,e)&&$r(e,n)&&Ld(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||fr(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fr(n,e){return n.x===e.x&&n.y===e.y}function $u(n,e,t,i){const r=As(St(n,e,t)),s=As(St(n,e,i)),a=As(St(t,i,n)),o=As(St(t,i,e));return!!(r!==s&&a!==o||r===0&&bs(n,t,e)||s===0&&bs(n,i,e)||a===0&&bs(t,n,i)||o===0&&bs(t,e,i))}function bs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function As(n){return n>0?1:n<0?-1:0}function Dd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$u(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $r(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Ld(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ku(n,e){const t=Jo(n.i,n.x,n.y),i=Jo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function mc(n,e,t,i){const r=Jo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Id(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Ud{static triangulate(e,t,i=2){return gd(e,t,i)}}class yl{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return yl.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];_c(e),gc(i,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,gc(i,t[l]);const o=Ud.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function _c(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class da extends gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,u=t/l,d=[],_=[],S=[],m=[];for(let p=0;p<f;p++){const M=p*u-a;for(let y=0;y<c;y++){const T=y*h-s;_.push(T,-M,0),S.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,T=M+c*(p+1),D=M+1+c*(p+1),b=M+1+c*p;d.push(y,T,b),d.push(T,D,b)}this.setIndex(d),this.setAttribute("position",new kn(_,3)),this.setAttribute("normal",new kn(S,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(xc(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(xc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const r in i)e[r]=i[r]}return e}function xc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ju(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Fd={clone:hr,merge:Xt};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zd extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vd extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gd extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ju extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ya=new wt,vc=new H,Mc=new H;class kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(vc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Yr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rs=new H,ws=new Er,Mn=new H;class Qu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rs,ws,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,ws,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Rs,ws,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,ws,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new H,Sc=new ot,Ec=new ot;class hn extends Qu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Ec),t.subVectors(Ec,Sc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class is extends Qu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wd extends kd{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xd extends Ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Wd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yd extends Ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xi=-90,Yi=1;class qd extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Xi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new hn(Xi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new hn(Xi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new hn(Xi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new hn(Xi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new hn(Xi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zd extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fl=class Fl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Fl.prototype.isMatrix2=!0;let Tc=Fl;function yc(n,e,t,i){const r=$d(i);switch(t){case Nu:return n*e;case Ou:return n*e/r.components*r.byteLength;case pl:return n*e/r.components*r.byteLength;case wi:return n*e*2/r.components*r.byteLength;case ml:return n*e*2/r.components*r.byteLength;case Fu:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case _l:return n*e*4/r.components*r.byteLength;case Hs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:case Eo:return Math.max(n,16)*Math.max(e,8)/4;case vo:case So:return Math.max(n,8)*Math.max(e,8)/2;case To:case yo:case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:case Qs:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ko:case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yo:case qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(n){switch(n){case tn:case Du:return{byteLength:1,components:1};case Wr:case Lu:case Yn:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case Cn:case fl:case bn:return{byteLength:4,components:1};case Iu:case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ef(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kd(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,f);else{h.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<h.length;d++){const _=h[u],S=h[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,h[u]=S)}h.length=u+1;for(let d=0,_=h.length;d<_;d++){const S=h[d];n.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,kp=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,$p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Fm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,m_=`#define MATCAP
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
}`,__=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,x_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
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
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,S_=`#define STANDARD
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
}`,E_=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,T_=`#define TOON
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
}`,y_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,b_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:jd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:rp,batching_pars_vertex:sp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:_p,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:vp,common:Mp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:yp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ap,colorspace_fragment:Rp,colorspace_pars_fragment:wp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Dp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:kp,envmap_vertex:Ip,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:qp,lights_physical_fragment:Zp,lights_physical_pars_fragment:$p,lights_fragment_begin:Kp,lights_fragment_maps:jp,lights_fragment_end:Jp,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:um,morphcolor_vertex:fm,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:_m,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:vm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:ym,opaque_fragment:bm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:wm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Fm,skinbase_vertex:Om,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Vm,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:km,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:Ym,uv_pars_fragment:qm,uv_pars_vertex:Zm,uv_vertex:$m,worldpos_vertex:Km,background_vert:jm,background_frag:Jm,backgroundCube_vert:Qm,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:r_,distance_vert:s_,distance_frag:a_,equirect_vert:o_,equirect_frag:l_,linedashed_vert:c_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:h_,meshlambert_vert:d_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:__,meshnormal_vert:g_,meshnormal_frag:x_,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:E_,meshtoon_vert:T_,meshtoon_frag:y_,points_vert:b_,points_frag:A_,shadow_vert:R_,shadow_frag:w_,sprite_vert:C_,sprite_frag:P_},de={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Tn={basic:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Xt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Xt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new at(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Xt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Xt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Xt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Xt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Xt([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Xt([de.lights,de.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Xt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Cs={r:0,b:0,g:0},D_=new wt,tf=new Ve;tf.set(-1,0,0,0,1,0,0,0,1);function L_(n,e,t,i,r,s){const a=new at(0);let o=r===!0?0:1,l,c,f=null,h=0,u=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const T=M.backgroundBlurriness>0;y=e.get(y,T)}return y}function _(M){let y=!1;const T=d(M);T===null?m(a,o):T&&T.isColor&&(m(T,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,y){const T=d(y);T&&(T.isCubeTexture||T.mapping===ha)?(c===void 0&&(c=new _n(new ns(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:hr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(y.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tf),c.material.toneMapped=et.getTransfer(T.colorSpace)!==ct,(f!==T||h!==T.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new _n(new da(2,2),new Pn({name:"BackgroundMaterial",uniforms:hr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=T,h=T.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(Cs,ju(n)),t.buffers.color.setClear(Cs.r,Cs.g,Cs.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:S,dispose:p}}function I_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(A,N,W,Y,C){let B=!1;const O=h(A,Y,W,N);s!==O&&(s=O,c(s.object)),B=d(A,Y,W,C),B&&_(A,Y,W,C),C!==null&&e.update(C,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,T(A,N,W,Y),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function f(A){return n.deleteVertexArray(A)}function h(A,N,W,Y){const C=Y.wireframe===!0;let B=i[N.id];B===void 0&&(B={},i[N.id]=B);const O=A.isInstancedMesh===!0?A.id:0;let j=B[O];j===void 0&&(j={},B[O]=j);let z=j[W.id];z===void 0&&(z={},j[W.id]=z);let J=z[C];return J===void 0&&(J=u(l()),z[C]=J),J}function u(A){const N=[],W=[],Y=[];for(let C=0;C<t;C++)N[C]=0,W[C]=0,Y[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Y,object:A,attributes:{},index:null}}function d(A,N,W,Y){const C=s.attributes,B=N.attributes;let O=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){const ue=C[z];let xe=B[z];if(xe===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;O++}return s.attributesNum!==O||s.index!==Y}function _(A,N,W,Y){const C={},B=N.attributes;let O=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){let ue=B[z];ue===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),C[z]=xe,O++}s.attributes=C,s.attributesNum=O,s.index=Y}function S(){const A=s.newAttributes;for(let N=0,W=A.length;N<W;N++)A[N]=0}function m(A){p(A,0)}function p(A,N){const W=s.newAttributes,Y=s.enabledAttributes,C=s.attributeDivisors;W[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),C[A]!==N&&(n.vertexAttribDivisor(A,N),C[A]=N)}function M(){const A=s.newAttributes,N=s.enabledAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]!==A[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function y(A,N,W,Y,C,B,O){O===!0?n.vertexAttribIPointer(A,N,W,C,B):n.vertexAttribPointer(A,N,W,Y,C,B)}function T(A,N,W,Y){S();const C=Y.attributes,B=W.getAttributes(),O=N.defaultAttributeValues;for(const j in B){const z=B[j];if(z.location>=0){let J=C[j];if(J===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),J!==void 0){const ue=J.normalized,xe=J.itemSize,He=e.get(J);if(He===void 0)continue;const Qe=He.buffer,Ce=He.type,q=He.bytesPerElement,ce=Ce===n.INT||Ce===n.UNSIGNED_INT||J.gpuType===fl;if(J.isInterleavedBufferAttribute){const te=J.data,fe=te.stride,Te=J.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye,te.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<z.locationSize;ye++)m(z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye,xe/z.locationSize,Ce,ue,fe*q,(Te+xe/z.locationSize*ye)*q,ce)}else{if(J.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)p(z.location+te,J.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let te=0;te<z.locationSize;te++)m(z.location+te);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let te=0;te<z.locationSize;te++)y(z.location+te,xe/z.locationSize,Ce,ue,xe*q,xe/z.locationSize*te*q,ce)}}else if(O!==void 0){const ue=O[j];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(z.location,ue);break;case 3:n.vertexAttrib3fv(z.location,ue);break;case 4:n.vertexAttrib4fv(z.location,ue);break;default:n.vertexAttrib1fv(z.location,ue)}}}}M()}function D(){R();for(const A in i){const N=i[A];for(const W in N){const Y=N[W];for(const C in Y){const B=Y[C];for(const O in B)f(B[O].object),delete B[O];delete Y[C]}}delete i[A]}}function b(A){if(i[A.id]===void 0)return;const N=i[A.id];for(const W in N){const Y=N[W];for(const C in Y){const B=Y[C];for(const O in B)f(B[O].object),delete B[O];delete Y[C]}}delete i[A.id]}function w(A){for(const N in i){const W=i[N];for(const Y in W){const C=W[Y];if(C[A.id]===void 0)continue;const B=C[A.id];for(const O in B)f(B[O].object),delete B[O];delete C[A.id]}}}function x(A){for(const N in i){const W=i[N],Y=A.isInstancedMesh===!0?A.id:0,C=W[Y];if(C!==void 0){for(const B in C){const O=C[B];for(const j in O)f(O[j].object),delete O[j];delete C[B]}delete W[Y],Object.keys(W).length===0&&delete i[N]}}}function R(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:I,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function U_(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function N_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==mn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==tn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!x)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:T,maxSamples:D,samples:b}}function F_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){const _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const M=s?0:i,y=M*4;let T=p.clippingState||null;l.value=T,T=f(_,u,y,d);for(let D=0;D!==y;++D)T[D]=t[D];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,d,_){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=d+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==S;++y,T+=4)a.copy(h[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const li=4,bc=[.125,.215,.35,.446,.526,.582],Si=20,O_=256,Cr=new is,Ac=new at;let qa=null,Za=0,$a=0,Ka=!1;const B_=new H;class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=B_}=s;qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Za,$a),this._renderer.xr.enabled=Ka,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Yn,format:mn,colorSpace:ta,depthBuffer:!1},r=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z_(s)),this._blurMaterial=G_(s,e,t),this._ggxMaterial=V_(s,e,t)}return r}_compileMaterial(e){const t=new _n(new gn,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,i,r,s){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ac),h.toneMapping=Rn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new ns,new El({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ac),p=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):T===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const D=this._cubeSize;qi(r,T*D,y>2?D:0,D,D),h.setRenderTarget(r),p&&h.render(S,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ri||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,d=h*u,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-li?i-_+li:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,qi(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Cr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,qi(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Cr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Si-1),S=s/_,m=isFinite(s)?1+Math.floor(f*S):Si;m>Si&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let M=0;for(let w=0;w<Si;++w){const x=w/S,R=Math.exp(-x*x/2);p.push(R),w===0?M+=R:w<m&&(M+=2*R)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-i;const T=this._sizeLods[r],D=3*T*(r>y-li?r-y+li:0),b=4*(this._cubeSize-T);qi(t,D,b,3*T,2*T),l.setRenderTarget(t),l.render(h,Cr)}}function z_(n){const e=[],t=[],i=[];let r=n;const s=n-li+1+bc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-li?l=bc[a-n+li-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,_=6,S=3,m=2,p=1,M=new Float32Array(S*_*d),y=new Float32Array(m*_*d),T=new Float32Array(p*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,x=b>2?0:-1,R=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];M.set(R,S*_*b),y.set(u,m*_*b);const I=[b,b,b,b,b,b];T.set(I,p*_*b)}const D=new gn;D.setAttribute("position",new $t(M,S)),D.setAttribute("uv",new $t(y,m)),D.setAttribute("faceIndex",new $t(T,p)),i.push(new _n(D,null)),r>li&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function wc(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V_(n,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function G_(n,e,t){const i=new Float32Array(Si),r=new H(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}class nf extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ns(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Gn});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Ht),new qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function H_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Sa||d===Ea)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new nf(_.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,_=d===Sa||d===Ea,S=d===Ri||d===cr;if(_||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Rc(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new Rc(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Sa?u.mapping=Ri:d===Ea&&(u.mapping=cr),u}function l(u){let d=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&d++;return d===_}function c(u){const d=u.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(u){const d=u.target;d.removeEventListener("dispose",f);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function k_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ko("WebGLRenderer: "+i+" extension not supported."),r}}}function W_(n,e,t,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(h){const u=[],d=h.index,_=h.attributes.position;let S=0;if(_===void 0)return;if(d!==null){const M=d.array;S=d.version;for(let y=0,T=M.length;y<T;y+=3){const D=M[y+0],b=M[y+1],w=M[y+2];u.push(D,b,b,w,w,D)}}else{const M=_.array;S=_.version;for(let y=0,T=M.length/3-1;y<T;y+=3){const D=y+0,b=y+1,w=y+2;u.push(D,b,b,w,w,D)}}const m=new(_.count>=65535?Wu:ku)(u,1);m.version=S;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function f(h){const u=s.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function X_(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,s,h*a),t.update(u,i,1)}function c(h,u,d){d!==0&&(n.drawElementsInstanced(i,u,s,h*a,d),t.update(u,i,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Y_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q_(n,e,t){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var d=I;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let D=o.attributes.position.count*T,b=1;D>e.maxTextureSize&&(b=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*b*4*h),x=new zu(w,D,b,h);x.type=bn,x.needsUpdate=!0;const R=T*4;for(let A=0;A<h;A++){const N=p[A],W=M[A],Y=y[A],C=D*b*4*A;for(let B=0;B<N.count;B++){const O=B*R;_===!0&&(r.fromBufferAttribute(N,B),w[C+O+0]=r.x,w[C+O+1]=r.y,w[C+O+2]=r.z,w[C+O+3]=0),S===!0&&(r.fromBufferAttribute(W,B),w[C+O+4]=r.x,w[C+O+5]=r.y,w[C+O+6]=r.z,w[C+O+7]=0),m===!0&&(r.fromBufferAttribute(Y,B),w[C+O+8]=r.x,w[C+O+9]=r.y,w[C+O+10]=r.z,w[C+O+11]=Y.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new ot(D,b)},i.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Z_(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const $_={[Tu]:"LINEAR_TONE_MAPPING",[yu]:"REINHARD_TONE_MAPPING",[bu]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Cu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function K_(n,e,t,i,r){const s=new wn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ur(e,t):void 0}),a=new wn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),o=new gn;o.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kn([0,2,0,0,2,0],2));const l=new zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _n(o,l),f=new is(-1,1,1,-1,0,1);let h=null,u=null,d=!1,_,S=null,m=[],p=!1;this.setSize=function(M,y){s.setSize(M,y),a.setSize(M,y);for(let T=0;T<m.length;T++){const D=m[T];D.setSize&&D.setSize(M,y)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,T=s.height;for(let D=0;D<m.length;D++){const b=m[D];b.setSize&&b.setSize(y,T)}},this.begin=function(M,y){if(d||M.toneMapping===Rn&&m.length===0)return!1;if(S=y,y!==null){const T=y.width,D=y.height;(s.width!==T||s.height!==D)&&this.setSize(T,D)}return p===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=Rn,!0},this.hasRenderPass=function(){return p},this.end=function(M,y){M.toneMapping=_,d=!0;let T=s,D=a;for(let b=0;b<m.length;b++){const w=m[b];if(w.enabled!==!1&&(w.render(M,D,T,y),w.needsSwap!==!1)){const x=T;T=D,D=x}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},et.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const b=$_[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(S),M.render(c,f),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const rf=new qt,Qo=new ur(1,1),sf=new zu,af=new Jh,of=new Xu,Dc=[],Lc=[],Ic=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dc[r];if(s===void 0&&(s=new Float32Array(r),Dc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),It(t,i)}}function ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),It(t,i)}}function ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),It(t,i)}}function rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function hg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Qo.compareFunction=t.isReversedDepthBuffer()?xl:gl,s=Qo):s=rf,t.setTexture2D(e||s,r)}function dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||af,r)}function pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||of,r)}function mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sf,r)}function _g(n){switch(n){case 5126:return j_;case 35664:return J_;case 35665:return Q_;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function gg(n,e){n.uniform1fv(this.addr,e)}function xg(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function vg(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Mg(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Sg(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Eg(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tg(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yg(n,e){n.uniform1iv(this.addr,e)}function bg(n,e){n.uniform2iv(this.addr,e)}function Ag(n,e){n.uniform3iv(this.addr,e)}function Rg(n,e){n.uniform4iv(this.addr,e)}function wg(n,e){n.uniform1uiv(this.addr,e)}function Cg(n,e){n.uniform2uiv(this.addr,e)}function Pg(n,e){n.uniform3uiv(this.addr,e)}function Dg(n,e){n.uniform4uiv(this.addr,e)}function Lg(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Qo:a=rf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ig(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||af,s[a])}function Ug(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||of,s[a])}function Ng(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sf,s[a])}function Fg(n){switch(n){case 5126:return gg;case 35664:return xg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return wg;case 36294:return Cg;case 36295:return Pg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}}class Bg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Fc(n,e){n.seq.push(e),n.map[e.id]=e}function Vg(n,e,t){const i=n.name,r=i.length;for(ja.lastIndex=0;;){const s=ja.exec(i),a=ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fc(t,c===void 0?new Og(o,n,e):new Bg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new zg(o),Fc(t,h)),t=h}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gg=37297;let Hg=0;function kg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Bc=new Ve;function Wg(n){et._getMatrix(Bc,et.workingColorSpace,n);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kg(n.getShaderSource(e),o)}else return s}function Xg(n,e){const t=Wg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yg={[Tu]:"Linear",[yu]:"Reinhard",[bu]:"Cineon",[Au]:"ACESFilmic",[wu]:"AgX",[Cu]:"Neutral",[Ru]:"Custom"};function qg(n,e){const t=Yg[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new H;function Zg(){et.getLuminanceCoefficients(Ps);const n=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Kg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Or(n){return n!==""}function Vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(Jg,e0)}const Qg=new Map;function e0(n,e){let t=Xe[e];if(t===void 0){const i=Qg.get(e);if(i!==void 0)t=Xe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(n){return n.replace(t0,n0)}function n0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const i0={[Gs]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function r0(n){return i0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s0={[Ri]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function a0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":s0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const o0={[cr]:"ENVMAP_MODE_REFRACTION"};function l0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c0={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function u0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c0[n.combine]||"ENVMAP_BLENDING_NONE"}function f0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function h0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=r0(t),c=a0(t),f=l0(t),h=u0(t),u=f0(t),d=$g(t),_=Kg(s),S=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=el(a),a=Vc(a,t),a=Gc(a,t),o=el(o),o=Vc(o,t),o=Gc(o,t),a=Hc(a),o=Hc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,T=M+p+o,D=Oc(r,r.VERTEX_SHADER,y),b=Oc(r,r.FRAGMENT_SHADER,T);r.attachShader(S,D),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(A){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(D)||"",Y=r.getShaderInfoLog(b)||"",C=N.trim(),B=W.trim(),O=Y.trim();let j=!0,z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,D,b);else{const J=zc(r,D,"vertex"),ue=zc(r,b,"fragment");rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+J+`
`+ue)}else C!==""?De("WebGLProgram: Program Info Log:",C):(B===""||O==="")&&(z=!1);z&&(A.diagnostics={runnable:j,programLog:C,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(D),r.deleteShader(b),x=new Ys(r,S),R=jg(r,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,Gg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=b,this}let d0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new m0(e),t.set(e,i)),i}}class m0{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}}function _0(n){return n===wi||n===Qs||n===ea}function g0(n,e,t,i,r,s){const a=new Vu,o=new p0,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,R,I,A,N,W){const Y=A.fog,C=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||B,O),z=j&&j.mapping===ha?j.image.height:null,J=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ue=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,xe=ue!==void 0?ue.length:0;let He=0;C.morphAttributes.position!==void 0&&(He=1),C.morphAttributes.normal!==void 0&&(He=2),C.morphAttributes.color!==void 0&&(He=3);let Qe,Ce,q,ce;if(J){const Fe=Tn[J];Qe=Fe.vertexShader,Ce=Fe.fragmentShader}else Qe=x.vertexShader,Ce=x.fragmentShader,o.update(x),q=o.getVertexShaderID(x),ce=o.getFragmentShaderID(x);const te=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ze=!!x.map,Le=!!x.matcap,qe=!!j,tt=!!x.aoMap,Re=!!x.lightMap,nt=!!x.bumpMap,$e=!!x.normalMap,ht=!!x.displacementMap,L=!!x.emissiveMap,lt=!!x.metalnessMap,Ue=!!x.roughnessMap,Ne=x.anisotropy>0,ae=x.clearcoat>0,We=x.dispersion>0,E=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,$=Ne&&!!x.anisotropyMap,Q=ae&&!!x.clearcoatMap,ne=ae&&!!x.clearcoatNormalMap,re=ae&&!!x.clearcoatRoughnessMap,X=E&&!!x.iridescenceMap,K=E&&!!x.iridescenceThicknessMap,he=g&&!!x.sheenColorMap,ve=g&&!!x.sheenRoughnessMap,le=!!x.specularMap,ie=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ze=F&&!!x.transmissionMap,Oe=F&&!!x.thicknessMap,P=!!x.gradientMap,se=!!x.alphaMap,Z=x.alphaTest>0,pe=!!x.alphaHash,oe=!!x.extensions;let ee=Rn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ee=n.toneMapping);const ge={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:Ce,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:Le,envMap:qe,envMapMode:qe&&j.mapping,envMapCubeUVHeight:z,aoMap:tt,lightMap:Re,bumpMap:nt,normalMap:$e,displacementMap:ht,emissiveMap:L,normalMapObjectSpace:$e&&x.normalMapType===xh,normalMapTangentSpace:$e&&x.normalMapType===$o,packedNormalMap:$e&&x.normalMapType===$o&&_0(x.normalMap.format),metalnessMap:lt,roughnessMap:Ue,anisotropy:Ne,anisotropyMap:$,clearcoat:ae,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,dispersion:We,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:K,sheen:g,sheenColorMap:he,sheenRoughnessMap:ve,specularMap:le,specularColorMap:ie,specularIntensityMap:Pe,transmission:F,transmissionMap:ze,thicknessMap:Oe,gradientMap:P,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:pe,combine:x.combine,mapUv:Ze&&_(x.map.channel),aoMapUv:tt&&_(x.aoMap.channel),lightMapUv:Re&&_(x.lightMap.channel),bumpMapUv:nt&&_(x.bumpMap.channel),normalMapUv:$e&&_(x.normalMap.channel),displacementMapUv:ht&&_(x.displacementMap.channel),emissiveMapUv:L&&_(x.emissiveMap.channel),metalnessMapUv:lt&&_(x.metalnessMap.channel),roughnessMapUv:Ue&&_(x.roughnessMap.channel),anisotropyMapUv:$&&_(x.anisotropyMap.channel),clearcoatMapUv:Q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:ie&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:ze&&_(x.transmissionMap.channel),thicknessMapUv:Oe&&_(x.thicknessMap.channel),alphaMapUv:se&&_(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&($e||Ne),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ze||se),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&$e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)R.push(I),R.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(R,x),M(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function y(x){const R=d[x.type];let I;if(R){const A=Tn[R];I=Fd.clone(A.uniforms)}else I=x.uniforms;return I}function T(x,R){let I=f.get(R);return I!==void 0?++I.usedTimes:(I=new h0(n,R,x,r),c.push(I),f.set(R,I)),I}function D(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:D,releaseShaderCache:b,programs:c,dispose:w}}function x0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function v0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,S,m,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,d,_,S,m,p){const M=o(u,d,_,S,m,p);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):t.push(M)}function c(u,d,_,S,m,p){const M=o(u,d,_,S,m,p);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,d){t.length>1&&t.sort(u||v0),i.length>1&&i.sort(d||Wc),r.length>1&&r.sort(d||Wc)}function h(){for(let u=e,d=n.length;u<d;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function M0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Xc,n.set(i,[a])):r>=s.length?(a=new Xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function S0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new at};break;case"SpotLight":t={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function E0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T0=0;function y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function b0(n){const e=new S0,t=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new wt,a=new wt;function o(c){let f=0,h=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,_=0,S=0,m=0,p=0,M=0,y=0,T=0,D=0,b=0,w=0;c.sort(y0);for(let R=0,I=c.length;R<I;R++){const A=c[R],N=A.color,W=A.intensity,Y=A.distance;let C=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===wi?C=A.shadow.map.texture:C=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=N.r*W,h+=N.g*W,u+=N.b*W;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],W);w++}else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,j=t.get(A);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=C,i.directionalShadowMatrix[d]=A.shadow.matrix,M++}i.directional[d]=B,d++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(N).multiplyScalar(W),B.distance=Y,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[S]=B;const O=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,O.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[S]=O.matrix,A.castShadow){const j=t.get(A);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=C,T++}S++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(N).multiplyScalar(W),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=B,m++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const O=A.shadow,j=t.get(A);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=C,i.pointShadowMatrix[_]=A.shadow.matrix,y++}i.point[_]=B,_++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(W),B.groundColor.copy(A.groundColor).multiplyScalar(W),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==d||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==T||x.numSpotMaps!==D||x.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+D-b,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,x.directionalLength=d,x.pointLength=_,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=T,x.numSpotMaps=D,x.numLightProbes=w,i.version=T0++)}function l(c,f){let h=0,u=0,d=0,_=0,S=0;const m=f.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(y.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Yc(n){const e=new b0(n),t=[],i=[],r=[];function s(u){h.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function A0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yc(n),e.set(r,[o])):s>=a.length?(o=new Yc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],P0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],qc=new wt,Pr=new H,Ja=new H;function D0(n,e,t){let i=new Tl;const r=new ot,s=new ot,a=new Tt,o=new Gd,l=new Hd,c={},f=t.maxTextureSize,h={[ui]:Zt,[Zt]:ui,[yn]:yn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:R0,fragmentShader:w0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new _n(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$f&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gs);const R=n.getRenderTarget(),I=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==this.type;W&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(C=>C.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,C=b.length;Y<C;Y++){const B=b[Y],O=B.shadow;if(O===void 0){De("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const j=O.getFrameExtents();r.multiply(j),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,O.mapSize.y=s.y));const z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Nr){if(B.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new wn(r.x,r.y,{format:wi,type:Yn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new ur(r.x,r.y,bn),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot}else B.isPointLight?(O.map=new nf(r.x),O.map.depthTexture=new _d(r.x,Cn)):(O.map=new wn(r.x,r.y),O.map.depthTexture=new ur(r.x,r.y,Cn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=qn,this.type===Gs?(O.map.depthTexture.compareFunction=z?xl:gl,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot);O.camera.updateProjectionMatrix()}const J=O.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<J;ue++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(O.map),n.clear());const xe=O.getViewport(ue);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),N.viewport(a)}if(B.isPointLight){const xe=O.camera,He=O.matrix,Qe=B.distance||xe.far;Qe!==xe.far&&(xe.far=Qe,xe.updateProjectionMatrix()),Pr.setFromMatrixPosition(B.matrixWorld),xe.position.copy(Pr),Ja.copy(xe.position),Ja.add(C0[ue]),xe.up.copy(P0[ue]),xe.lookAt(Ja),xe.updateMatrixWorld(),He.makeTranslation(-Pr.x,-Pr.y,-Pr.z),qc.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qc,xe.coordinateSystem,xe.reversedDepth)}else O.updateMatrices(B);i=O.getFrustum(),T(w,x,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Nr&&M(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,I,A)};function M(b,w){const x=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(r.x,r.y,{format:wi,type:Yn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,x,u,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,x,d,S,null)}function y(b,w,x,R){let I=null;const A=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)I=A;else if(I=x.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=I.uuid,W=w.uuid;let Y=c[N];Y===void 0&&(Y={},c[N]=Y);let C=Y[W];C===void 0&&(C=I.clone(),Y[W]=C,w.addEventListener("dispose",D)),I=C}if(I.visible=w.visible,I.wireframe=w.wireframe,R===Nr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:h[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=n.properties.get(I);N.light=x}return I}function T(b,w,x,R,I){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Nr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const W=e.update(b),Y=b.material;if(Array.isArray(Y)){const C=W.groups;for(let B=0,O=C.length;B<O;B++){const j=C[B],z=Y[j.materialIndex];if(z&&z.visible){const J=y(b,z,R,I);b.onBeforeShadow(n,b,w,x,W,J,j),n.renderBufferDirect(x,null,W,J,b,j),b.onAfterShadow(n,b,w,x,W,J,j)}}}else if(Y.visible){const C=y(b,Y,R,I);b.onBeforeShadow(n,b,w,x,W,C,null),n.renderBufferDirect(x,null,W,C,b,null),b.onAfterShadow(n,b,w,x,W,C,null)}}const N=b.children;for(let W=0,Y=N.length;W<Y;W++)T(N[W],w,x,R,I)}function D(b){b.target.removeEventListener("dispose",D);for(const x in c){const R=c[x],I=b.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function L0(n,e){function t(){let P=!1;const se=new Tt;let Z=null;const pe=new Tt(0,0,0,0);return{setMask:function(oe){Z!==oe&&!P&&(n.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){P=oe},setClear:function(oe,ee,ge,Fe,we){we===!0&&(oe*=Fe,ee*=Fe,ge*=Fe),se.set(oe,ee,ge,Fe),pe.equals(se)===!1&&(n.clearColor(oe,ee,ge,Fe),pe.copy(se))},reset:function(){P=!1,Z=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,se=!1,Z=null,pe=null,oe=null;return{setReversed:function(ee){if(se!==ee){const ge=e.get("EXT_clip_control");ee?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Fe=oe;oe=null,this.setClear(Fe)}},getReversed:function(){return se},setTest:function(ee){ee?te(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!P&&(n.depthMask(ee),Z=ee)},setFunc:function(ee){if(se&&(ee=Ch[ee]),pe!==ee){switch(ee){case co:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case _o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ee}},setLocked:function(ee){P=ee},setClear:function(ee){oe!==ee&&(oe=ee,se&&(ee=1-ee),n.clearDepth(ee))},reset:function(){P=!1,Z=null,pe=null,oe=null,se=!1}}}function r(){let P=!1,se=null,Z=null,pe=null,oe=null,ee=null,ge=null,Fe=null,we=null;return{setTest:function(Be){P||(Be?te(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Be){se!==Be&&!P&&(n.stencilMask(Be),se=Be)},setFunc:function(Be,xn,Kt){(Z!==Be||pe!==xn||oe!==Kt)&&(n.stencilFunc(Be,xn,Kt),Z=Be,pe=xn,oe=Kt)},setOp:function(Be,xn,Kt){(ee!==Be||ge!==xn||Fe!==Kt)&&(n.stencilOp(Be,xn,Kt),ee=Be,ge=xn,Fe=Kt)},setLocked:function(Be){P=Be},setClear:function(Be){we!==Be&&(n.clearStencil(Be),we=Be)},reset:function(){P=!1,se=null,Z=null,pe=null,oe=null,ee=null,ge=null,Fe=null,we=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},d=new WeakMap,_=[],S=null,m=!1,p=null,M=null,y=null,T=null,D=null,b=null,w=null,x=new at(0,0,0),R=0,I=!1,A=null,N=null,W=null,Y=null,C=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=j>=2);let J=null,ue={};const xe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Qe=new Tt().fromArray(xe),Ce=new Tt().fromArray(He);function q(P,se,Z,pe){const oe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(P,ee),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<Z;ge++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(se+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ee}const ce={};ce[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(lr),nt(!1),$e(Xl),te(n.CULL_FACE),tt(Gn);function te(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function fe(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Te(P,se){return u[P]!==se?(n.bindFramebuffer(P,se),u[P]=se,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function ye(P,se){let Z=_,pe=!1;if(P){Z=d.get(se),Z===void 0&&(Z=[],d.set(se,Z));const oe=P.textures;if(Z.length!==oe.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ge=oe.length;ee<ge;ee++)Z[ee]=n.COLOR_ATTACHMENT0+ee;Z.length=oe.length,pe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,pe=!0);pe&&n.drawBuffers(Z)}function Ze(P){return S!==P?(n.useProgram(P),S=P,!0):!1}const Le={[Mi]:n.FUNC_ADD,[jf]:n.FUNC_SUBTRACT,[Jf]:n.FUNC_REVERSE_SUBTRACT};Le[Qf]=n.MIN,Le[eh]=n.MAX;const qe={[th]:n.ZERO,[nh]:n.ONE,[ih]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[sh]:n.DST_ALPHA,[rh]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[lh]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[uh]:n.CONSTANT_COLOR,[fh]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(P,se,Z,pe,oe,ee,ge,Fe,we,Be){if(P===Gn){m===!0&&(fe(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),P!==Kf){if(P!==p||Be!==I){if((M!==Mi||D!==Mi)&&(n.blendEquation(n.FUNC_ADD),M=Mi,D=Mi),Be)switch(P){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yl:n.blendFunc(n.ONE,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",P);break}else switch(P){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ql:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",P);break}y=null,T=null,b=null,w=null,x.set(0,0,0),R=0,p=P,I=Be}return}oe=oe||se,ee=ee||Z,ge=ge||pe,(se!==M||oe!==D)&&(n.blendEquationSeparate(Le[se],Le[oe]),M=se,D=oe),(Z!==y||pe!==T||ee!==b||ge!==w)&&(n.blendFuncSeparate(qe[Z],qe[pe],qe[ee],qe[ge]),y=Z,T=pe,b=ee,w=ge),(Fe.equals(x)===!1||we!==R)&&(n.blendColor(Fe.r,Fe.g,Fe.b,we),x.copy(Fe),R=we),p=P,I=!1}function Re(P,se){P.side===yn?fe(n.CULL_FACE):te(n.CULL_FACE);let Z=P.side===Zt;se&&(Z=!Z),nt(Z),P.blending===er&&P.transparent===!1?tt(Gn):tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),L(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(P){A!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),A=P)}function $e(P){P!==qf?(te(n.CULL_FACE),P!==N&&(P===Xl?n.cullFace(n.BACK):P===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),N=P}function ht(P){P!==W&&(O&&n.lineWidth(P),W=P)}function L(P,se,Z){P?(te(n.POLYGON_OFFSET_FILL),(Y!==se||C!==Z)&&(Y=se,C=Z,a.getReversed()&&(se=-se),n.polygonOffset(se,Z))):fe(n.POLYGON_OFFSET_FILL)}function lt(P){P?te(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Ue(P){P===void 0&&(P=n.TEXTURE0+B-1),J!==P&&(n.activeTexture(P),J=P)}function Ne(P,se,Z){Z===void 0&&(J===null?Z=n.TEXTURE0+B-1:Z=J);let pe=ue[Z];pe===void 0&&(pe={type:void 0,texture:void 0},ue[Z]=pe),(pe.type!==P||pe.texture!==se)&&(J!==Z&&(n.activeTexture(Z),J=Z),n.bindTexture(P,se||ce[P]),pe.type=P,pe.texture=se)}function ae(){const P=ue[J];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function We(){try{n.compressedTexImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function g(){try{n.texSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function F(){try{n.texSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function re(){try{n.texStorage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function X(){try{n.texImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function K(){try{n.texImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function he(P){return h[P]!==void 0?h[P]:n.getParameter(P)}function ve(P,se){h[P]!==se&&(n.pixelStorei(P,se),h[P]=se)}function le(P){Qe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Qe.copy(P))}function ie(P){Ce.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ce.copy(P))}function Pe(P,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let pe=Z.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(se,P.name),Z.set(P,pe))}function ze(P,se){const pe=c.get(se).get(P);l.get(se)!==pe&&(n.uniformBlockBinding(se,pe,P.__bindingPointIndex),l.set(se,pe))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},J=null,ue={},u={},d=new WeakMap,_=[],S=null,m=!1,p=null,M=null,y=null,T=null,D=null,b=null,w=null,x=new at(0,0,0),R=0,I=!1,A=null,N=null,W=null,Y=null,C=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:fe,bindFramebuffer:Te,drawBuffers:ye,useProgram:Ze,setBlending:tt,setMaterial:Re,setFlipSided:nt,setCullFace:$e,setLineWidth:ht,setPolygonOffset:L,setScissorTest:lt,activeTexture:Ue,bindTexture:Ne,unbindTexture:ae,compressedTexImage2D:We,compressedTexImage3D:E,texImage2D:X,texImage3D:K,pixelStorei:ve,getParameter:he,updateUBOMapping:Pe,uniformBlockBinding:ze,texStorage2D:ne,texStorage3D:re,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:le,viewport:ie,reset:Oe}}function I0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,f=new WeakMap,h=new Set;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return _?new OffscreenCanvas(E,g):ia("canvas")}function m(E,g,F){let $=1;const Q=We(E);if((Q.width>F||Q.height>F)&&($=F/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor($*Q.width),re=Math.floor($*Q.height);u===void 0&&(u=S(ne,re));const X=g?S(ne,re):u;return X.width=ne,X.height=re,X.getContext("2d").drawImage(E,0,0,ne,re),De("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ne+"x"+re+")."),X}else return"data"in E&&De("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,F,$,Q,ne=!1){if(E!==null){if(n[E]!==void 0)return n[E];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re;$&&(re=e.get("EXT_texture_norm16"),re||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8),F===n.UNSIGNED_SHORT&&re&&(X=re.R16_EXT),F===n.SHORT&&re&&(X=re.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),g===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8),F===n.UNSIGNED_SHORT&&re&&(X=re.RG16_EXT),F===n.SHORT&&re&&(X=re.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&re&&(X=re.RGB16_EXT),F===n.SHORT&&re&&(X=re.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){const K=ne?na:et.getTransfer(Q);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=K===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&re&&(X=re.RGBA16_EXT),F===n.SHORT&&re&&(X=re.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function D(E,g){let F;return E?g===null||g===Cn||g===Xr?F=n.DEPTH24_STENCIL8:g===bn?F=n.DEPTH32F_STENCIL8:g===Wr&&(F=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cn||g===Xr?F=n.DEPTH_COMPONENT24:g===bn?F=n.DEPTH_COMPONENT32F:g===Wr&&(F=n.DEPTH_COMPONENT16),F}function b(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function w(E){const g=E.target;g.removeEventListener("dispose",w),R(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&h.delete(g)}function x(E){const g=E.target;g.removeEventListener("dispose",x),A(g)}function R(E){const g=i.get(E);if(g.__webglInit===void 0)return;const F=E.source,$=d.get(F);if($){const Q=$[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(E),Object.keys($).length===0&&d.delete(F)}i.remove(E)}function I(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const F=E.source,$=d.get(F);delete $[g.__cacheKey],a.memory.textures--}function A(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let Q=0;Q<g.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)n.deleteFramebuffer(g.__webglFramebuffer[$]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,Q=F.length;$<Q;$++){const ne=i.get(F[$]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(F[$])}i.remove(E)}let N=0;function W(){N=0}function Y(){return N}function C(E){N=E}function B(){const E=N;return E>=r.maxTextures&&De("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),N+=1,E}function O(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function j(E,g){const F=i.get(E);if(E.isVideoTexture&&Ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function z(E,g){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){fe(F,E,g);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function J(E,g){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){fe(F,E,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function ue(E,g){const F=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Te(F,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const xe={[go]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},He={[Ot]:n.NEAREST,[_h]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Qe={[vh]:n.NEVER,[yh]:n.ALWAYS,[Mh]:n.LESS,[gl]:n.LEQUAL,[Sh]:n.EQUAL,[xl]:n.GEQUAL,[Eh]:n.GREATER,[Th]:n.NOTEQUAL};function Ce(E,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Ta||g.magFilter===as||g.magFilter===Ti||g.minFilter===Ht||g.minFilter===Ta||g.minFilter===as||g.minFilter===Ti)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,He[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,He[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Qe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ot||g.minFilter!==as&&g.minFilter!==Ti||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function q(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",w));const $=g.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const ne=O(g);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[ne].usedTimes++;const re=Q[E.__cacheKey];re!==void 0&&(Q[E.__cacheKey].usedTimes--,re.usedTimes===0&&I(g)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return F}function ce(E,g,F){return Math.floor(Math.floor(E/F)/g)}function te(E,g,F,$){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,$,g.data);else{ne.sort((ve,le)=>ve.start-le.start);let re=0;for(let ve=1;ve<ne.length;ve++){const le=ne[re],ie=ne[ve],Pe=le.start+le.count,ze=ce(ie.start,g.width,4),Oe=ce(le.start,g.width,4);ie.start<=Pe+1&&ze===Oe&&ce(ie.start+ie.count-1,g.width,4)===ze?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++re,ne[re]=ie)}ne.length=re+1;const X=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ve=0,le=ne.length;ve<le;ve++){const ie=ne[ve],Pe=Math.floor(ie.start/4),ze=Math.ceil(ie.count/4),Oe=Pe%g.width,P=Math.floor(Pe/g.width),se=ze,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Oe,P,se,Z,F,$,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function fe(E,g,F){let $=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=n.TEXTURE_3D);const Q=q(E,g),ne=g.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+F);const re=i.get(ne);if(ne.version!==re.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Z=et.getPrimaries(et.workingColorSpace),pe=g.colorSpace===oi?null:et.getPrimaries(g.colorSpace),oe=g.colorSpace===oi||Z===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,r.maxTextureSize);K=ae(g,K);const he=s.convert(g.format,g.colorSpace),ve=s.convert(g.type);let le=T(g.internalFormat,he,ve,g.normalized,g.colorSpace,g.isVideoTexture);Ce($,g);let ie;const Pe=g.mipmaps,ze=g.isVideoTexture!==!0,Oe=re.__version===void 0||Q===!0,P=ne.dataReady,se=b(g,K);if(g.isDepthTexture)le=D(g.format===yi,g.type),Oe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,he,ve,null));else if(g.isDataTexture)if(Pe.length>0){ze&&Oe&&t.texStorage2D(n.TEXTURE_2D,se,le,Pe[0].width,Pe[0].height);for(let Z=0,pe=Pe.length;Z<pe;Z++)ie=Pe[Z],ze?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ie.width,ie.height,he,ve,ie.data):t.texImage2D(n.TEXTURE_2D,Z,le,ie.width,ie.height,0,he,ve,ie.data);g.generateMipmaps=!1}else ze?(Oe&&t.texStorage2D(n.TEXTURE_2D,se,le,K.width,K.height),P&&te(g,K,he,ve)):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,he,ve,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,le,Pe[0].width,Pe[0].height,K.depth);for(let Z=0,pe=Pe.length;Z<pe;Z++)if(ie=Pe[Z],g.format!==mn)if(he!==null)if(ze){if(P)if(g.layerUpdates.size>0){const oe=yc(ie.width,ie.height,g.format,g.type);for(const ee of g.layerUpdates){const ge=ie.data.subarray(ee*oe/ie.data.BYTES_PER_ELEMENT,(ee+1)*oe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,ee,ie.width,ie.height,1,he,ge)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ie.width,ie.height,K.depth,he,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,le,ie.width,ie.height,K.depth,0,ie.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ie.width,ie.height,K.depth,he,ve,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,le,ie.width,ie.height,K.depth,0,he,ve,ie.data)}else{ze&&Oe&&t.texStorage2D(n.TEXTURE_2D,se,le,Pe[0].width,Pe[0].height);for(let Z=0,pe=Pe.length;Z<pe;Z++)ie=Pe[Z],g.format!==mn?he!==null?ze?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ie.width,ie.height,he,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,le,ie.width,ie.height,0,ie.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ie.width,ie.height,he,ve,ie.data):t.texImage2D(n.TEXTURE_2D,Z,le,ie.width,ie.height,0,he,ve,ie.data)}else if(g.isDataArrayTexture)if(ze){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,le,K.width,K.height,K.depth),P)if(g.layerUpdates.size>0){const Z=yc(K.width,K.height,g.format,g.type);for(const pe of g.layerUpdates){const oe=K.data.subarray(pe*Z/K.data.BYTES_PER_ELEMENT,(pe+1)*Z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,K.width,K.height,1,he,ve,oe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,ve,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,he,ve,K.data);else if(g.isData3DTexture)ze?(Oe&&t.texStorage3D(n.TEXTURE_3D,se,le,K.width,K.height,K.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,ve,K.data)):t.texImage3D(n.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,he,ve,K.data);else if(g.isFramebufferTexture){if(Oe)if(ze)t.texStorage2D(n.TEXTURE_2D,se,le,K.width,K.height);else{let Z=K.width,pe=K.height;for(let oe=0;oe<se;oe++)t.texImage2D(n.TEXTURE_2D,oe,le,Z,pe,0,he,ve,null),Z>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),K.parentNode!==Z){Z.appendChild(K),h.add(g),Z.onpaint=Fe=>{const we=Fe.changedElements;for(const Be of h)we.includes(Be.image)&&(Be.needsUpdate=!0)},Z.requestPaint();return}const pe=0,oe=n.RGBA,ee=n.RGBA,ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,oe,ee,ge,K),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(ze&&Oe){const Z=We(Pe[0]);t.texStorage2D(n.TEXTURE_2D,se,le,Z.width,Z.height)}for(let Z=0,pe=Pe.length;Z<pe;Z++)ie=Pe[Z],ze?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he,ve,ie):t.texImage2D(n.TEXTURE_2D,Z,le,he,ve,ie);g.generateMipmaps=!1}else if(ze){if(Oe){const Z=We(K);t.texStorage2D(n.TEXTURE_2D,se,le,Z.width,Z.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,ve,K)}else t.texImage2D(n.TEXTURE_2D,0,le,he,ve,K);p(g)&&M($),re.__version=ne.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Te(E,g,F){if(g.image.length!==6)return;const $=q(E,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const ne=i.get(Q);if(Q.version!==ne.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const re=et.getPrimaries(et.workingColorSpace),X=g.colorSpace===oi?null:et.getPrimaries(g.colorSpace),K=g.colorSpace===oi||re===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const he=g.isCompressedTexture||g.image[0].isCompressedTexture,ve=g.image[0]&&g.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!he&&!ve?le[ee]=m(g.image[ee],!0,r.maxCubemapSize):le[ee]=ve?g.image[ee].image:g.image[ee],le[ee]=ae(g,le[ee]);const ie=le[0],Pe=s.convert(g.format,g.colorSpace),ze=s.convert(g.type),Oe=T(g.internalFormat,Pe,ze,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,se=ne.__version===void 0||$===!0,Z=Q.dataReady;let pe=b(g,ie);Ce(n.TEXTURE_CUBE_MAP,g);let oe;if(he){P&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Oe,ie.width,ie.height);for(let ee=0;ee<6;ee++){oe=le[ee].mipmaps;for(let ge=0;ge<oe.length;ge++){const Fe=oe[ge];g.format!==mn?Pe!==null?P?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,Fe.width,Fe.height,Pe,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Oe,Fe.width,Fe.height,0,Fe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,Fe.width,Fe.height,Pe,ze,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Oe,Fe.width,Fe.height,0,Pe,ze,Fe.data)}}}else{if(oe=g.mipmaps,P&&se){oe.length>0&&pe++;const ee=We(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ve){P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Pe,ze,le[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,le[ee].width,le[ee].height,0,Pe,ze,le[ee].data);for(let ge=0;ge<oe.length;ge++){const we=oe[ge].image[ee].image;P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,we.width,we.height,Pe,ze,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Oe,we.width,we.height,0,Pe,ze,we.data)}}else{P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,ze,le[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Pe,ze,le[ee]);for(let ge=0;ge<oe.length;ge++){const Fe=oe[ge];P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Pe,ze,Fe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Oe,Pe,ze,Fe.image[ee])}}}p(g)&&M(n.TEXTURE_CUBE_MAP),ne.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ye(E,g,F,$,Q,ne){const re=s.convert(F.format,F.colorSpace),X=s.convert(F.type),K=T(F.internalFormat,re,X,F.normalized,F.colorSpace),he=i.get(g),ve=i.get(F);if(ve.__renderTarget=g,!he.__hasExternalTextures){const le=Math.max(1,g.width>>ne),ie=Math.max(1,g.height>>ne);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,K,le,ie,g.depth,0,re,X,null):t.texImage2D(Q,ne,K,le,ie,0,re,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ue(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,ve.__webglTexture,0,lt(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,ve.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(E,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const $=g.depthTexture,Q=$&&$.isDepthTexture?$.type:null,ne=D(g.stencilBuffer,Q),re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ue(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(g),ne,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(g),ne,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ne,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,E)}else{const $=g.textures;for(let Q=0;Q<$.length;Q++){const ne=$[Q],re=s.convert(ne.format,ne.colorSpace),X=s.convert(ne.type),K=T(ne.internalFormat,re,X,ne.normalized,ne.colorSpace);Ue(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(g),K,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(E,g,F){const $=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g.depthTexture);const he=s.convert(g.depthTexture.format),ve=s.convert(g.depthTexture.type);let le;g.depthTexture.format===qn?le=n.DEPTH_COMPONENT24:g.depthTexture.format===yi&&(le=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,le,g.width,g.height,0,he,ve,null)}}else j(g.depthTexture,0);const ne=Q.__webglTexture,re=lt(g),X=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,K=g.depthTexture.format===yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===qn)Ue(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,ne,0);else if(g.depthTexture.format===yi)Ue(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,ne,0);else throw new Error("Unknown depthTexture format")}function qe(E){const g=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=$}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let $=0;$<6;$++)Le(g.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?Le(g.__webglFramebuffer[0],E,0):Le(g.__webglFramebuffer,E,0)}else if(F){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=n.createRenderbuffer(),Ze(g.__webglDepthbuffer[$],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ze(g.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(E,g,F){const $=i.get(E);g!==void 0&&ye($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&qe(E)}function Re(E){const g=E.texture,F=i.get(E),$=i.get(g);E.addEventListener("dispose",x);const Q=E.textures,ne=E.isWebGLCubeRenderTarget===!0,re=Q.length>1;if(re||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++),ne){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[X][K]=n.createFramebuffer()}else F.__webglFramebuffer[X]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)F.__webglFramebuffer[X]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(re)for(let X=0,K=Q.length;X<K;X++){const he=i.get(Q[X]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ue(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){const K=Q[X];F.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const he=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),le=T(K.internalFormat,he,ve,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),ie=lt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,le,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,F.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)ye(F.__webglFramebuffer[X][K],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else ye(F.__webglFramebuffer[X],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let X=0,K=Q.length;X<K;X++){const he=Q[X],ve=i.get(he);let le=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ve.__webglTexture),Ce(le,he),ye(F.__webglFramebuffer,E,he,n.COLOR_ATTACHMENT0+X,le,0),p(he)&&M(le)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,$.__webglTexture),Ce(X,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)ye(F.__webglFramebuffer[K],E,g,n.COLOR_ATTACHMENT0,X,K);else ye(F.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,X,0);p(g)&&M(X),t.unbindTexture()}E.depthBuffer&&qe(E)}function nt(E){const g=E.textures;for(let F=0,$=g.length;F<$;F++){const Q=g[F];if(p(Q)){const ne=y(E),re=i.get(Q).__webglTexture;t.bindTexture(ne,re),M(ne),t.unbindTexture()}}}const $e=[],ht=[];function L(E){if(E.samples>0){if(Ue(E)===!1){const g=E.textures,F=E.width,$=E.height;let Q=n.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(E),X=g.length>1;if(X)for(let he=0;he<g.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const K=E.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let he=0;he<g.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[he]);const ve=i.get(g[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,Q,n.NEAREST),l===!0&&($e.length=0,ht.length=0,$e.push(n.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&($e.push(ne),ht.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let he=0;he<g.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,re.__webglColorRenderbuffer[he]);const ve=i.get(g[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function lt(E){return Math.min(r.maxSamples,E.samples)}function Ue(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ne(E){const g=a.render.frame;f.get(E)!==g&&(f.set(E,g),E.update())}function ae(E,g){const F=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ta&&F!==oi&&(et.getTransfer(F)===ct?($!==mn||Q!==tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",F)),g}function We(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=C,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=ue,this.rebindTextures=tt,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U0(n,e){function t(i,r=oi){let s;const a=et.getTransfer(r);if(i===tn)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return n.BYTE;if(i===Lu)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===Nu)return n.ALPHA;if(i===Fu)return n.RGB;if(i===mn)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===yi)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===wi)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===_l)return n.RGBA_INTEGER;if(i===Hs||i===ks||i===Ws||i===Xs)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vo||i===Mo||i===So||i===Eo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===To||i===yo||i===bo||i===Ao||i===Ro||i===Qs||i===wo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===To||i===yo)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ao)return s.COMPRESSED_R11_EAC;if(i===Ro)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qs)return s.COMPRESSED_RG11_EAC;if(i===wo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Co||i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===zo||i===Vo||i===Go||i===Ho)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Co)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Po)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===No)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Go)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ho)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Wo||i===Xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ko)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yo||i===qo||i===ea||i===Zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends Di{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,_=null;const S=typeof XRWebGLBinding<"u",m=new O0,p={},M=t.getContextAttributes();let y=null,T=null;const D=[],b=[],w=new ot;let x=null;const R=new hn;R.viewport=new Tt;const I=new hn;I.viewport=new Tt;const A=[R,I],N=new Zd;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=D[q];return ce===void 0&&(ce=new Ca,D[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=D[q];return ce===void 0&&(ce=new Ca,D[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=D[q];return ce===void 0&&(ce=new Ca,D[q]=ce),ce.getHandSpace()};function C(q){const ce=b.indexOf(q.inputSource);if(ce===-1)return;const te=D[ce];te!==void 0&&(te.update(q.inputSource,q.frame,c||a),te.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let q=0;q<D.length;q++){const ce=b[q];ce!==null&&(b[q]=null,D[q].disconnect(ce))}W=null,Y=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(y),d=null,u=null,h=null,r=null,T=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,fe=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?yi:qn,fe=M.stencil?Xr:Cn);const ye={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(ye),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new wn(u.textureWidth,u.textureHeight,{format:mn,type:tn,depthTexture:new ur(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new wn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(q){for(let ce=0;ce<q.removed.length;ce++){const te=q.removed[ce],fe=b.indexOf(te);fe>=0&&(b[fe]=null,D[fe].disconnect(te))}for(let ce=0;ce<q.added.length;ce++){const te=q.added[ce];let fe=b.indexOf(te);if(fe===-1){for(let ye=0;ye<D.length;ye++)if(ye>=b.length){b.push(te),fe=ye;break}else if(b[ye]===null){b[ye]=te,fe=ye;break}if(fe===-1)break}const Te=D[fe];Te&&Te.connect(te)}}const j=new H,z=new H;function J(q,ce,te){j.setFromMatrixPosition(ce.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const fe=j.distanceTo(z),Te=ce.projectionMatrix.elements,ye=te.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Le=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],Re=(Te[8]-1)/Te[0],nt=(ye[8]+1)/ye[0],$e=Ze*Re,ht=Ze*nt,L=fe/(-Re+nt),lt=L*-Re;if(ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(L),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ue=Ze+L,Ne=Le+L,ae=$e-lt,We=ht+(fe-lt),E=qe*Le/Ne*Ue,g=tt*Le/Ne*Ue;q.projectionMatrix.makePerspective(ae,We,E,g,Ue,Ne),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ce=q.near,te=q.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(te=m.depthFar)),N.near=I.near=R.near=ce,N.far=I.far=R.far=te,(W!==N.near||Y!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,Y=N.far),N.layers.mask=q.layers.mask|6,R.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const fe=q.parent,Te=N.cameras;ue(N,fe);for(let ye=0;ye<Te.length;ye++)ue(Te[ye],fe);Te.length===2?J(N,R,I):N.projectionMatrix.copy(R.projectionMatrix),xe(q,N,fe)};function xe(q,ce,te){te===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(q){return p[q]};let He=null;function Qe(q,ce){if(f=ce.getViewerPose(c||a),_=ce,f!==null){const te=f.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let fe=!1;te.length!==N.cameras.length&&(N.cameras.length=0,fe=!0);for(let Le=0;Le<te.length;Le++){const qe=te[Le];let tt=null;if(d!==null)tt=d.getViewport(qe);else{const nt=h.getViewSubImage(u,qe);tt=nt.viewport,Le===0&&(e.setRenderTargetTextures(T,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(T))}let Re=A[Le];Re===void 0&&(Re=new hn,Re.layers.enable(Le),Re.viewport=new Tt,A[Le]=Re),Re.matrix.fromArray(qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(tt.x,tt.y,tt.width,tt.height),Le===0&&(N.matrix.copy(Re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),fe===!0&&N.cameras.push(Re)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Le=h.getDepthInformation(te[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,r.renderState)}if(Te&&Te.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let Le=0;Le<te.length;Le++){const qe=te[Le].camera;if(qe){let tt=p[qe];tt||(tt=new Yu,p[qe]=tt);const Re=h.getCameraImage(qe);tt.sourceTexture=Re}}}}for(let te=0;te<D.length;te++){const fe=b[te],Te=D[te];fe!==null&&Te!==void 0&&Te.update(fe,ce,c||a)}He&&He(q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ce=new ef;Ce.setAnimationLoop(Qe),this.setAnimationLoop=function(q){He=q},this.dispose=function(){}}}const z0=new wt,lf=new Ve;lf.set(-1,0,0,0,1,0,0,0,1);function V0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ju(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,T=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(T)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function G0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const T=y.program;i.uniformBlockBinding(M,T)}function c(M,y){let T=r[M.id];T===void 0&&(_(M),T=f(M),r[M.id]=T,M.addEventListener("dispose",m));const D=y.program;i.updateUBOMapping(M,D);const b=e.render.frame;s[M.id]!==b&&(u(M),s[M.id]=b)}function f(M){const y=h();M.__bindingPointIndex=y;const T=n.createBuffer(),D=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=r[M.id],T=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,w=T.length;b<w;b++){const x=Array.isArray(T[b])?T[b]:[T[b]];for(let R=0,I=x.length;R<I;R++){const A=x[R];if(d(A,b,R,D)===!0){const N=A.__offset,W=Array.isArray(A.value)?A.value:[A.value];let Y=0;for(let C=0;C<W.length;C++){const B=W[C],O=S(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+Y,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):ArrayBuffer.isView(B)?A.__data.set(new B.constructor(B.buffer,B.byteOffset,A.__data.length)):(B.toArray(A.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,T,D){const b=M.value,w=y+"_"+T;if(D[w]===void 0)return typeof b=="number"||typeof b=="boolean"?D[w]=b:ArrayBuffer.isView(b)?D[w]=b.slice():D[w]=b.clone(),!0;{const x=D[w];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return D[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function _(M){const y=M.uniforms;let T=0;const D=16;for(let w=0,x=y.length;w<x;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let I=0,A=R.length;I<A;I++){const N=R[I],W=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,C=W.length;Y<C;Y++){const B=W[Y],O=S(B),j=T%D,z=j%O.boundary,J=j+z;T+=z,J!==0&&D-J<O.storage&&(T+=D-J),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=O.storage}}}const b=T%D;return b>0&&(T+=D-b),M.__size=T,M.__cache={},this}function S(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const H0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function k0(){return Sn===null&&(Sn=new hd(H0,16,16,wi,Yn),Sn.name="DFG_LUT",Sn.minFilter=Ht,Sn.magFilter=Ht,Sn.wrapS=Vn,Sn.wrapT=Vn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class cf{constructor(e={}){const{canvas:t=Rh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=d,m=new Set([_l,ml,pl]),p=new Set([tn,Cn,Wr,Xr,hl,dl]),M=new Uint32Array(4),y=new Int32Array(4),T=new H;let D=null,b=null;const w=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let A=!1,N=null;this._outputColorSpace=Yt;let W=0,Y=0,C=null,B=-1,O=null;const j=new Tt,z=new Tt;let J=null;const ue=new at(0);let xe=0,He=t.width,Qe=t.height,Ce=1,q=null,ce=null;const te=new Tt(0,0,He,Qe),fe=new Tt(0,0,He,Qe);let Te=!1;const ye=new Tl;let Ze=!1,Le=!1;const qe=new wt,tt=new H,Re=new Tt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ht(){return C===null?Ce:1}let L=i;function lt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),L===null){const U="webgl2";if(L=lt(U,v),L===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw rt("WebGLRenderer: "+v.message),v}let Ue,Ne,ae,We,E,g,F,$,Q,ne,re,X,K,he,ve,le,ie,Pe,ze,Oe,P,se,Z;function pe(){Ue=new k_(L),Ue.init(),P=new U0(L,Ue),Ne=new N_(L,Ue,e,P),ae=new L0(L,Ue),Ne.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),We=new Y_(L),E=new x0,g=new I0(L,Ue,ae,E,Ne,P,We),F=new H_(I),$=new Kd(L),se=new I_(L,$),Q=new W_(L,$,We,se),ne=new Z_(L,Q,$,se,We),Pe=new q_(L,Ne,g),ve=new F_(E),re=new g0(I,F,Ue,Ne,se,ve),X=new V0(I,E),K=new M0,he=new A0(Ue),ie=new L_(I,F,ae,ne,_,l),le=new D0(I,ne,Ne),Z=new G0(L,We,Ne,ae),ze=new U_(L,Ue,We),Oe=new X_(L,Ue,We),We.programs=re.programs,I.capabilities=Ne,I.extensions=Ue,I.properties=E,I.renderLists=K,I.shadowMap=le,I.state=ae,I.info=We}pe(),S!==tn&&(R=new K_(S,t.width,t.height,r,s));const oe=new B0(I,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(v){v!==void 0&&(Ce=v,this.setSize(He,Qe,!1))},this.getSize=function(v){return v.set(He,Qe)},this.setSize=function(v,U,k=!0){if(oe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}He=v,Qe=U,t.width=Math.floor(v*Ce),t.height=Math.floor(U*Ce),k===!0&&(t.style.width=v+"px",t.style.height=U+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(He*Ce,Qe*Ce).floor()},this.setDrawingBufferSize=function(v,U,k){He=v,Qe=U,Ce=k,t.width=Math.floor(v*k),t.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(S===tn){rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(te)},this.setViewport=function(v,U,k,V){v.isVector4?te.set(v.x,v.y,v.z,v.w):te.set(v,U,k,V),ae.viewport(j.copy(te).multiplyScalar(Ce).round())},this.getScissor=function(v){return v.copy(fe)},this.setScissor=function(v,U,k,V){v.isVector4?fe.set(v.x,v.y,v.z,v.w):fe.set(v,U,k,V),ae.scissor(z.copy(fe).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(v){ae.setScissorTest(Te=v)},this.setOpaqueSort=function(v){q=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let V=0;if(v){let G=!1;if(C!==null){const _e=C.texture.format;G=m.has(_e)}if(G){const _e=C.texture.type,Se=p.has(_e),me=ie.getClearColor(),Ee=ie.getClearAlpha(),be=me.r,Ge=me.g,Ye=me.b;Se?(M[0]=be,M[1]=Ge,M[2]=Ye,M[3]=Ee,L.clearBufferuiv(L.COLOR,0,M)):(y[0]=be,y[1]=Ge,y[2]=Ye,y[3]=Ee,L.clearBufferiv(L.COLOR,0,y))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ie.dispose(),K.dispose(),he.dispose(),E.dispose(),F.dispose(),ne.dispose(),se.dispose(),Z.dispose(),re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ol),oe.removeEventListener("sessionend",Bl),pi.stop()};function ee(v){v.preventDefault(),Ql("WebGLRenderer: Context Lost."),A=!0}function ge(){Ql("WebGLRenderer: Context Restored."),A=!1;const v=We.autoReset,U=le.enabled,k=le.autoUpdate,V=le.needsUpdate,G=le.type;pe(),We.autoReset=v,le.enabled=U,le.autoUpdate=k,le.needsUpdate=V,le.type=G}function Fe(v){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){const U=v.target;U.removeEventListener("dispose",we),Be(U)}function Be(v){xn(v),E.remove(v)}function xn(v){const U=E.get(v).programs;U!==void 0&&(U.forEach(function(k){re.releaseProgram(k)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,V,G,_e){U===null&&(U=nt);const Se=G.isMesh&&G.matrixWorld.determinant()<0,me=zf(v,U,k,V,G);ae.setMaterial(V,Se);let Ee=k.index,be=1;if(V.wireframe===!0){if(Ee=Q.getWireframeAttribute(k),Ee===void 0)return;be=2}const Ge=k.drawRange,Ye=k.attributes.position;let Ae=Ge.start*be,ut=(Ge.start+Ge.count)*be;_e!==null&&(Ae=Math.max(Ae,_e.start*be),ut=Math.min(ut,(_e.start+_e.count)*be)),Ee!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,Ee.count)):Ye!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,Ye.count));const yt=ut-Ae;if(yt<0||yt===1/0)return;se.setup(G,V,me,k,Ee);let Et,dt=ze;if(Ee!==null&&(Et=$.get(Ee),dt=Oe,dt.setIndex(Et)),G.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*ht()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(G.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),ae.setLineWidth(Bt*ht()),G.isLineSegments?dt.setMode(L.LINES):G.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else G.isPoints?dt.setMode(L.POINTS):G.isSprite&&dt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Bt=G._multiDrawStarts,Me=G._multiDrawCounts,jt=G._multiDrawCount,it=Ee?$.get(Ee).bytesPerElement:1,rn=E.get(V).currentProgram.getUniforms();for(let vn=0;vn<jt;vn++)rn.setValue(L,"_gl_DrawID",vn),dt.render(Bt[vn]/it,Me[vn])}else if(G.isInstancedMesh)dt.renderInstances(Ae,yt,G.count);else if(k.isInstancedBufferGeometry){const Bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,Bt);dt.renderInstances(Ae,yt,Me)}else dt.render(Ae,yt)};function Kt(v,U,k){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Zt,v.needsUpdate=!0,ss(v,U,k),v.side=ui,v.needsUpdate=!0,ss(v,U,k),v.side=yn):ss(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),b=he.get(k),b.init(U),x.push(b),k.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),v!==k&&v.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const V=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const me=_e[Se];Kt(me,k,G),V.add(me)}else Kt(_e,k,G),V.add(_e)}),b=x.pop(),V},this.compileAsync=function(v,U,k=null){const V=this.compile(v,U,k);return new Promise(G=>{function _e(){if(V.forEach(function(Se){E.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){G(v);return}setTimeout(_e,10)}Ue.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let va=null;function Of(v){va&&va(v)}function Ol(){pi.stop()}function Bl(){pi.start()}const pi=new ef;pi.setAnimationLoop(Of),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(v){va=v,oe.setAnimationLoop(v),v===null?pi.stop():pi.start()},oe.addEventListener("sessionstart",Ol),oe.addEventListener("sessionend",Bl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;N!==null&&N.renderStart(v,U);const k=oe.enabled===!0&&oe.isPresenting===!0,V=R!==null&&(C===null||k)&&R.begin(I,C);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,U,C),b=he.get(v,x.length),b.init(U),b.state.textureUnits=g.getTextureUnits(),x.push(b),qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ye.setFromProjectionMatrix(qe,An,U.reversedDepth),Le=this.localClippingEnabled,Ze=ve.init(this.clippingPlanes,Le),D=K.get(v,w.length),D.init(),w.push(D),oe.enabled===!0&&oe.isPresenting===!0){const Se=I.xr.getDepthSensingMesh();Se!==null&&Ma(Se,U,-1/0,I.sortObjects)}Ma(v,U,0,I.sortObjects),D.finish(),I.sortObjects===!0&&D.sort(q,ce),$e=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,$e&&ie.addToRenderList(D,v),this.info.render.frame++,Ze===!0&&ve.beginShadows();const G=b.state.shadowsArray;if(le.render(G,v,U),Ze===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&R.hasRenderPass())===!1){const Se=D.opaque,me=D.transmissive;if(b.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(me.length>0)for(let be=0,Ge=Ee.length;be<Ge;be++){const Ye=Ee[be];Vl(Se,me,v,Ye)}$e&&ie.render(v);for(let be=0,Ge=Ee.length;be<Ge;be++){const Ye=Ee[be];zl(D,v,Ye,Ye.viewport)}}else me.length>0&&Vl(Se,me,v,U),$e&&ie.render(v),zl(D,v,U)}C!==null&&Y===0&&(g.updateMultisampleRenderTarget(C),g.updateRenderTargetMipmap(C)),V&&R.end(I),v.isScene===!0&&v.onAfterRender(I,v,U),se.resetDefaultState(),B=-1,O=null,x.pop(),x.length>0?(b=x[x.length-1],g.setTextureUnits(b.state.textureUnits),Ze===!0&&ve.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?D=w[w.length-1]:D=null,N!==null&&N.renderEnd()};function Ma(v,U,k,V){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ye.intersectsSprite(v)){V&&Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(qe);const Se=ne.update(v),me=v.material;me.visible&&D.push(v,Se,me,k,Re.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ye.intersectsObject(v))){const Se=ne.update(v),me=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Re.copy(v.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Re.copy(Se.boundingSphere.center)),Re.applyMatrix4(v.matrixWorld).applyMatrix4(qe)),Array.isArray(me)){const Ee=Se.groups;for(let be=0,Ge=Ee.length;be<Ge;be++){const Ye=Ee[be],Ae=me[Ye.materialIndex];Ae&&Ae.visible&&D.push(v,Se,Ae,k,Re.z,Ye)}}else me.visible&&D.push(v,Se,me,k,Re.z,null)}}const _e=v.children;for(let Se=0,me=_e.length;Se<me;Se++)Ma(_e[Se],U,k,V)}function zl(v,U,k,V){const{opaque:G,transmissive:_e,transparent:Se}=v;b.setupLightsView(k),Ze===!0&&ve.setGlobalState(I.clippingPlanes,k),V&&ae.viewport(j.copy(V)),G.length>0&&rs(G,U,k),_e.length>0&&rs(_e,U,k),Se.length>0&&rs(Se,U,k),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Vl(v,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Ae=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new wn(1,1,{generateMipmaps:!0,type:Ae?Yn:tn,minFilter:Ti,samples:Math.max(4,Ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const _e=b.state.transmissionRenderTarget[V.id],Se=V.viewport||j;_e.setSize(Se.z*I.transmissionResolutionScale,Se.w*I.transmissionResolutionScale);const me=I.getRenderTarget(),Ee=I.getActiveCubeFace(),be=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(ue),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),$e&&ie.render(k);const Ge=I.toneMapping;I.toneMapping=Rn;const Ye=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Ze===!0&&ve.setGlobalState(I.clippingPlanes,V),rs(v,k,V),g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,yt=U.length;ut<yt;ut++){const Et=U[ut],{object:dt,geometry:Bt,material:Me,group:jt}=Et;if(Me.side===yn&&dt.layers.test(V.layers)){const it=Me.side;Me.side=Zt,Me.needsUpdate=!0,Gl(dt,k,V,Bt,Me,jt),Me.side=it,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e))}I.setRenderTarget(me,Ee,be),I.setClearColor(ue,xe),Ye!==void 0&&(V.viewport=Ye),I.toneMapping=Ge}function rs(v,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,_e=v.length;G<_e;G++){const Se=v[G],{object:me,geometry:Ee,group:be}=Se;let Ge=Se.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),me.layers.test(k.layers)&&Gl(me,U,k,Ee,Ge,be)}}function Gl(v,U,k,V,G,_e){v.onBeforeRender(I,U,k,V,G,_e),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(I,U,k,V,v,_e),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=Zt,G.needsUpdate=!0,I.renderBufferDirect(k,U,V,G,v,_e),G.side=ui,G.needsUpdate=!0,I.renderBufferDirect(k,U,V,G,v,_e),G.side=yn):I.renderBufferDirect(k,U,V,G,v,_e),v.onAfterRender(I,U,k,V,G,_e)}function ss(v,U,k){U.isScene!==!0&&(U=nt);const V=E.get(v),G=b.state.lights,_e=b.state.shadowsArray,Se=G.state.version,me=re.getParameters(v,G.state,_e,U,k,b.state.lightProbeGridArray),Ee=re.getProgramCacheKey(me);let be=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Ge=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=F.get(v.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",we),be=new Map,V.programs=be);let Ye=be.get(Ee);if(Ye!==void 0){if(V.currentProgram===Ye&&V.lightsStateVersion===Se)return kl(v,me),Ye}else me.uniforms=re.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,k,me),v.onBeforeCompile(me,I),Ye=re.acquireProgram(me,Ee),be.set(Ee,Ye),V.uniforms=me.uniforms;const Ae=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ve.uniform),kl(v,me),V.needsLights=Gf(v),V.lightsStateVersion=Se,V.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Ye,V.uniformsList=null,Ye}function Hl(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Ys.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function kl(v,U){const k=E.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Bf(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;T.setFromMatrixPosition(U.matrixWorld);for(let k=0,V=v.length;k<V;k++){const G=v[k];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function zf(v,U,k,V,G){U.isScene!==!0&&(U=nt),g.resetTextureUnits();const _e=U.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,me=C===null?I.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:et.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,be=F.get(V.envMap||Se,Ee),Ge=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ye=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!k.morphAttributes.position,ut=!!k.morphAttributes.normal,yt=!!k.morphAttributes.color;let Et=Rn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=I.toneMapping);const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Bt=dt!==void 0?dt.length:0,Me=E.get(V),jt=b.state.lights;if(Ze===!0&&(Le===!0||v!==O)){const _t=v===O&&V.id===B;ve.setState(V,v,_t)}let it=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==jt.state.version||Me.outputColorSpace!==me||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==be||V.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ve.numPlanes||Me.numIntersection!==ve.numIntersection)||Me.vertexAlphas!==Ge||Me.vertexTangents!==Ye||Me.morphTargets!==Ae||Me.morphNormals!==ut||Me.morphColors!==yt||Me.toneMapping!==Et||Me.morphTargetsCount!==Bt||!!Me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Me.__version=V.version);let rn=Me.currentProgram;it===!0&&(rn=ss(V,U,G),N&&V.isNodeMaterial&&N.onUpdateProgram(V,rn,Me));let vn=!1,Zn=!1,Li=!1;const pt=rn.getUniforms(),bt=Me.uniforms;if(ae.useProgram(rn.program)&&(vn=!0,Zn=!0,Li=!0),V.id!==B&&(B=V.id,Zn=!0),Me.needsLights){const _t=Bf(b.state.lightProbeGridArray,G);Me.lightProbeGrid!==_t&&(Me.lightProbeGrid=_t,Zn=!0)}if(vn||O!==v){ae.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",v.projectionMatrix),pt.setValue(L,"viewMatrix",v.matrixWorldInverse);const Kn=pt.map.cameraPosition;Kn!==void 0&&Kn.setValue(L,tt.setFromMatrixPosition(v.matrixWorld)),Ne.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),O!==v&&(O=v,Zn=!0,Li=!0)}if(Me.needsLights&&(jt.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",jt.state.directionalShadowMap,g),jt.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",jt.state.spotShadowMap,g),jt.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",jt.state.pointShadowMap,g)),G.isSkinnedMesh){pt.setOptional(L,G,"bindMatrix"),pt.setOptional(L,G,"bindMatrixInverse");const _t=G.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(L,"boneTexture",_t.boneTexture,g))}G.isBatchedMesh&&(pt.setOptional(L,G,"batchingTexture"),pt.setValue(L,"batchingTexture",G._matricesTexture,g),pt.setOptional(L,G,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",G._indirectTexture,g),pt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",G._colorsTexture,g));const $n=k.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Pe.update(G,k,rn),(Zn||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,pt.setValue(L,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=k0()),Zn){if(pt.setValue(L,"toneMappingExposure",I.toneMappingExposure),Me.needsLights&&Vf(bt,Li),_e&&V.fog===!0&&X.refreshFogUniforms(bt,_e),X.refreshMaterialUniforms(bt,V,Ce,Qe,b.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.lightProbeGrid){const _t=Me.lightProbeGrid;bt.probesSH.value=_t.texture,bt.probesMin.value.copy(_t.boundingBox.min),bt.probesMax.value.copy(_t.boundingBox.max),bt.probesResolution.value.copy(_t.resolution)}Ys.upload(L,Hl(Me),bt,g)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ys.upload(L,Hl(Me),bt,g),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(L,"center",G.center),pt.setValue(L,"modelViewMatrix",G.modelViewMatrix),pt.setValue(L,"normalMatrix",G.normalMatrix),pt.setValue(L,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const _t=V.uniformsGroups;for(let Kn=0,Ii=_t.length;Kn<Ii;Kn++){const Wl=_t[Kn];Z.update(Wl,rn),Z.bind(Wl,rn)}}return rn}function Vf(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Gf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,U,k){const V=E.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),E.get(v.texture).__webglTexture=U,E.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const k=E.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Hf=L.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){C=v,W=U,Y=k;let V=null,G=!1,_e=!1;if(v){const me=E.get(v);if(me.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),j.copy(v.viewport),z.copy(v.scissor),J=v.scissorTest,ae.viewport(j),ae.scissor(z),ae.setScissorTest(J),B=-1;return}else if(me.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(me.__hasExternalTextures)g.rebindTextures(v,E.get(v.texture).__webglTexture,E.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ge=v.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&E.has(Ge)&&(v.width!==Ge.image.width||v.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const be=E.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[U])?V=be[U][k]:V=be[U],G=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?V=E.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[k]:V=be,j.copy(v.viewport),z.copy(v.scissor),J=v.scissorTest}else j.copy(te).multiplyScalar(Ce).floor(),z.copy(fe).multiplyScalar(Ce).floor(),J=Te;if(k!==0&&(V=Hf),ae.bindFramebuffer(L.FRAMEBUFFER,V)&&ae.drawBuffers(v,V),ae.viewport(j),ae.scissor(z),ae.setScissorTest(J),G){const me=E.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,k)}else if(_e){const me=U;for(let Ee=0;Ee<v.textures.length;Ee++){const be=E.get(v.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,be.__webglTexture,k,me)}}else if(v!==null&&k!==0){const me=E.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,k)}B=-1},this.readRenderTargetPixels=function(v,U,k,V,G,_e,Se,me=0){if(!(v&&v.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){ae.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const be=v.textures[me],Ge=be.format,Ye=be.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!Ne.textureFormatReadable(Ge)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ye)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-V&&k>=0&&k<=v.height-G&&L.readPixels(U,k,V,G,P.convert(Ge),P.convert(Ye),_e)}finally{const be=C!==null?E.get(C).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,V,G,_e,Se,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(U>=0&&U<=v.width-V&&k>=0&&k<=v.height-G){ae.bindFramebuffer(L.FRAMEBUFFER,Ee);const be=v.textures[me],Ge=be.format,Ye=be.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!Ne.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(U,k,V,G,P.convert(Ge),P.convert(Ye),0);const ut=C!==null?E.get(C).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,ut);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wh(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(Ae),L.deleteSync(yt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){const V=Math.pow(2,-k),G=Math.floor(v.image.width*V),_e=Math.floor(v.image.height*V),Se=U!==null?U.x:0,me=U!==null?U.y:0;g.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,Se,me,G,_e),ae.unbindTexture()};const kf=L.createFramebuffer(),Wf=L.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,V=null,G=0,_e=0){let Se,me,Ee,be,Ge,Ye,Ae,ut,yt;const Et=v.isCompressedTexture?v.mipmaps[_e]:v.image;if(k!==null)Se=k.max.x-k.min.x,me=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Ge=k.min.y,Ye=k.isBox3?k.min.z:0;else{const bt=Math.pow(2,-G);Se=Math.floor(Et.width*bt),me=Math.floor(Et.height*bt),v.isDataArrayTexture?Ee=Et.depth:v.isData3DTexture?Ee=Math.floor(Et.depth*bt):Ee=1,be=0,Ge=0,Ye=0}V!==null?(Ae=V.x,ut=V.y,yt=V.z):(Ae=0,ut=0,yt=0);const dt=P.convert(U.format),Bt=P.convert(U.type);let Me;U.isData3DTexture?(g.setTexture3D(U,0),Me=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(g.setTexture2DArray(U,0),Me=L.TEXTURE_2D_ARRAY):(g.setTexture2D(U,0),Me=L.TEXTURE_2D),ae.activeTexture(L.TEXTURE0),ae.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),ae.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ae.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=ae.getParameter(L.UNPACK_ROW_LENGTH),it=ae.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=ae.getParameter(L.UNPACK_SKIP_PIXELS),vn=ae.getParameter(L.UNPACK_SKIP_ROWS),Zn=ae.getParameter(L.UNPACK_SKIP_IMAGES);ae.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),ae.pixelStorei(L.UNPACK_SKIP_PIXELS,be),ae.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),ae.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);const Li=v.isDataArrayTexture||v.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const bt=E.get(v),$n=E.get(U),_t=E.get(bt.__renderTarget),Kn=E.get($n.__renderTarget);ae.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ii=0;Ii<Ee;Ii++)Li&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(v).__webglTexture,G,Ye+Ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(U).__webglTexture,_e,yt+Ii)),L.blitFramebuffer(be,Ge,Se,me,Ae,ut,Se,me,L.DEPTH_BUFFER_BIT,L.NEAREST);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||E.has(v)){const bt=E.get(v),$n=E.get(U);ae.bindFramebuffer(L.READ_FRAMEBUFFER,kf),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wf);for(let _t=0;_t<Ee;_t++)Li?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,G,Ye+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,G),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$n.__webglTexture,_e,yt+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$n.__webglTexture,_e),G!==0?L.blitFramebuffer(be,Ge,Se,me,Ae,ut,Se,me,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(Me,_e,Ae,ut,yt+_t,be,Ge,Se,me):L.copyTexSubImage2D(Me,_e,Ae,ut,be,Ge,Se,me);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Me,_e,Ae,ut,yt,Se,me,Ee,dt,Bt,Et.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,_e,Ae,ut,yt,Se,me,Ee,dt,Et.data):L.texSubImage3D(Me,_e,Ae,ut,yt,Se,me,Ee,dt,Bt,Et):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,Ae,ut,Se,me,dt,Bt,Et.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,Ae,ut,Et.width,Et.height,dt,Et.data):L.texSubImage2D(L.TEXTURE_2D,_e,Ae,ut,Se,me,dt,Bt,Et);ae.pixelStorei(L.UNPACK_ROW_LENGTH,jt),ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),ae.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),ae.pixelStorei(L.UNPACK_SKIP_ROWS,vn),ae.pixelStorei(L.UNPACK_SKIP_IMAGES,Zn),_e===0&&U.generateMipmaps&&L.generateMipmap(Me),ae.unbindTexture()},this.initRenderTarget=function(v){E.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),ae.unbindTexture()},this.resetState=function(){W=0,Y=0,C=null,ae.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const di=typeof window<"u",Qa=di?window:null,jr=di?document:null,xt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Ke={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},nn={NONE:0,AUTO:1,FORCE:2},Ft={replace:0,none:1,blend:2},Zc=Symbol(),dr=Symbol(),uf=Symbol(),_a=Symbol(),W0=Symbol(),st=1e-11,tl=1e12,pr=1e3,nl=240,mr="",X0="var(",Ds=[],ff=(()=>{const n=new Map;return n.set("x","translateX"),n.set("y","translateY"),n.set("z","translateZ"),n})(),ra=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Y0=ra.reduce((n,e)=>({...n,[e]:e+"("}),{}),on=()=>{},q0=n=>n,Z0=/\)\s*[-.\d]/,$0=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,K0=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,j0=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,J0=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Q0=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,$c=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,ex=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,tx=/([a-z])([A-Z])/g,nx=/(\*=|\+=|-=)/,ix=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const sa={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:nl,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:pr,delay:0,loopDelay:0,ease:"out(2)",composition:Ft.replace,modifier:q0,onBegin:on,onBeforeUpdate:on,onUpdate:on,onLoop:on,onPause:on,onComplete:on,onRender:on},rx={root:jr},Pt={defaults:sa,precision:4,timeScale:1,tickThreshold:200,editor:null},hf={version:"4.5.0",engine:null};di&&(Qa.AnimeJS||(Qa.AnimeJS=[]),Qa.AnimeJS.push(hf));/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const df=n=>n.replace(tx,"$1-$2").toLowerCase(),Wn=(n,e)=>n.indexOf(e)===0,_r=Date.now,gr=Array.isArray,Hr=n=>n&&n.constructor===Object,bl=n=>typeof n=="number"&&!isNaN(n),xr=n=>typeof n=="string",Pi=n=>typeof n=="function",je=n=>typeof n>"u",nr=n=>je(n)||n===null,pf=n=>di&&n instanceof SVGElement,mf=n=>$0.test(n),_f=n=>Wn(n,"rgb"),gf=n=>Wn(n,"hsl"),sx=n=>mf(n)||(_f(n)||gf(n))&&(n[n.length-1]===")"||!Z0.test(n)),qs=n=>!Pt.defaults.hasOwnProperty(n),ax=["opacity","rotate","overflow","color"],ox=(n,e)=>{if(ax.includes(e))return!1;if(n.getAttribute(e)||e in n){if(e==="scale"){const t=n.parentNode;return t&&t.tagName==="filter"}return!0}},Ji=Math.pow,lx=Math.sqrt,cx=Math.sin,ux=Math.cos,fx=Math.floor,hx=Math.asin,Al=Math.PI,Kc=Math.round,pn=(n,e,t)=>n<e?e:n>t?t:n,gt=(n,e)=>{if(e<0)return n;if(!e)return Kc(n);const t=10**e;return Kc(n*t)/t},Zs=(n,e,t)=>t===1?e:t===0?n:n+(e-n)*t,ga=n=>n===1/0?tl:n===-1/0?-tl:n,ir=n=>n<=st?st:ga(gt(n,11)),Gt=n=>gr(n)?[...n]:n,xf=(n,e)=>{const t={...n};for(let i in e){const r=n[i];t[i]=je(r)?e[i]:r}return t},vt=(n,e,t,i="_prev",r="_next")=>{let s=n._head,a=r;for(t&&(s=n._tail,a=i);s;){const o=s[a];e(s),s=o}},bi=(n,e,t="_prev",i="_next")=>{const r=e[t],s=e[i];r?r[i]=s:n._head=s,s?s[t]=r:n._tail=r,e[t]=null,e[i]=null},Ai=(n,e,t,i="_prev",r="_next")=>{let s=n._tail;for(;s&&t&&t(s,e);)s=s[i];const a=s?s[r]:n._head;s?s[r]=e:n._head=e,a?a[i]=e:n._tail=e,e[i]=s,e[r]=a};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const dx=(n,e,t)=>{const i=n.style.transform;if(i){const r=n[_a];let s=0;const a=i.length;let o;for(;s<a;){for(;s<a&&i.charCodeAt(s)===32;)s++;if(s>=a)break;const c=s;for(;s<a&&i.charCodeAt(s)!==40;)s++;if(s>=a)break;const f=i.substring(c,s);let h=1;const u=s+1;let d=-1,_=-1;for(s++;s<a&&h>0;){const m=i.charCodeAt(s);m===40?h++:m===41?h--:m===44&&h===1&&(d===-1?d=s:_===-1&&(_=s)),s++}const S=s-1;f==="translate"||f==="translate3d"?(d===-1?r.translateX=i.substring(u,S).trim():(r.translateX=i.substring(u,d).trim(),_===-1?r.translateY=i.substring(d+1,S).trim():(r.translateY=i.substring(d+1,_).trim(),r.translateZ=i.substring(_+1,S).trim())),o=i.substring(u,S)):f==="scale"||f==="scale3d"?d===-1?r.scale=i.substring(u,S).trim():(r.scaleX=i.substring(u,d).trim(),_===-1?r.scaleY=i.substring(d+1,S).trim():(r.scaleY=i.substring(d+1,_).trim(),r.scaleZ=i.substring(_+1,S).trim())):r[f]=i.substring(u,S)}if(e==="translate3d"&&o)return t&&(t[e]=o),o;const l=r[e];if(!je(l))return t&&(t[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Wn(e,"scale")?"1":Wn(e,"rotate")||Wn(e,"skew")?"0deg":"0px"},vf=n=>{let e=mr;for(let t=0,i=ra.length;t<i;t++){const r=ra[t],s=n[r];if(s!==void 0){if(r==="translateX"){const a=n.translateY;if(a!==void 0){const o=n.translateZ;o!==void 0?(e+=`translate3d(${s},${a},${o}) `,t+=2):(e+=`translate(${s},${a}) `,t+=1);continue}}if(r==="scaleX"&&n.scale===void 0){const a=n.scaleY;if(a!==void 0){const o=n.scaleZ;o!==void 0?(e+=`scale3d(${s},${a},${o}) `,t+=2):(e+=`scale(${s},${a}) `,t+=1);continue}}e+=`${Y0[r]}${s}) `}r==="rotateZ"&&n.rotate3d!==void 0&&(e+=`rotate3d(${n.rotate3d}) `)}return n.matrix!==void 0&&(e+=`matrix(${n.matrix}) `),n.matrix3d!==void 0&&(e+=`matrix3d(${n.matrix3d}) `),e};/**
 * Anime.js - adapters - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const eo=[];function Mf(n,e){if(!n)return null;const t=eo.length;e:for(let i=0;i<t;i++){const r=eo[i];if(r.detect&&!r.detect(n))continue;const s=r.targetAdapters;for(let a=0,o=s.length;a<o;a++){const l=s[a];if(l.detect(n)){const c=l.props[e];if(c&&(!c.gate||c.gate(n)))return c;break e}}}for(let i=0;i<t;i++){const r=eo[i];if(r.detect&&!r.detect(n))continue;const s=r.propertyResolvers;for(let a=0,o=s.length;a<o;a++){const l=s[a](n,e);if(l)return l}}return null}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const px=n=>{const e=K0.exec(n)||j0.exec(n),t=je(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},mx=n=>{const e=n.length,t=e===4||e===5;return[+("0x"+n[1]+n[t?1:2]),+("0x"+n[t?2:3]+n[t?2:4]),+("0x"+n[t?3:5]+n[t?3:6]),e===5||e===9?+(+("0x"+n[t?4:7]+n[t?4:8])/255).toFixed(3):1]},to=(n,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n),_x=n=>{const e=J0.exec(n)||Q0.exec(n),t=+e[1]/360,i=+e[2]/100,r=+e[3]/100,s=je(e[4])?1:+e[4];let a,o,l;if(i===0)a=o=l=r;else{const c=r<.5?r*(1+i):r+i-r*i,f=2*r-c;a=gt(to(f,c,t+1/3)*255,0),o=gt(to(f,c,t)*255,0),l=gt(to(f,c,t-1/3)*255,0)}return[a,o,l,s]},gx=n=>_f(n)?px(n):mf(n)?mx(n):gf(n)?_x(n):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Dt=(n,e)=>je(n)?e:n,jc=(n,e)=>{var s;const t=n.match(ix),i=e[dr]?e:document.documentElement;let r=(s=getComputedStyle(i))==null?void 0:s.getPropertyValue(t[1]);return(!r||r.trim()===mr)&&t[2]&&(r=t[2].trim()),r||0},Fn=(n,e,t,i,r,s)=>{if(Pi(n)){if(!r){const o=n(e,t,i,s);return isNaN(+o)?o||0:+o}const a=()=>{const o=n(e,t,i,s);return isNaN(+o)?o||0:+o};return r.func=a,a()}if(xr(n)&&Wn(n,X0)){if(!r)return jc(n,e);const a=()=>jc(n,e);return r.func=a,a()}return n},Sf=(n,e)=>n[dr]?n[uf]&&ox(n,e)?xt.ATTRIBUTE:ra.includes(e)||ff.get(e)?xt.TRANSFORM:Wn(e,"--")?xt.CSS_VAR:e in n.style?xt.CSS:e in n?xt.OBJECT:xt.ATTRIBUTE:xt.OBJECT,Jc=(n,e,t)=>{const i=n.style[e];i&&t&&(t[e]=i);const r=i||getComputedStyle(n[W0]||n).getPropertyValue(e);return r==="auto"?"0":r},Dr=(n,e,t,i)=>{const r=je(t)?Sf(n,e):t,s=Mf(n,e);if(s){const a=s.get(n);return a&&i&&(i[e]=a),a??0}if(r===xt.OBJECT){const a=n[e];return a&&i&&(i[e]=a),a||0}if(r===xt.ATTRIBUTE){const a=n.getAttribute(e);return a&&i&&(i[e]=a),a}return r===xt.TRANSFORM?dx(n,e,i):r===xt.CSS_VAR?Jc(n,e,i).trimStart():Jc(n,e,i)},$s=(n,e,t)=>t==="-"?n-e:t==="+"?n+e:n*e,Rl=()=>({t:Ke.NUMBER,n:0,u:null,o:null,d:null,s:null}),an=(n,e)=>{if(e.t=Ke.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!n)return e;const t=+n;if(!isNaN(t))return e.n=t,e;let i=n;i[1]==="="&&(e.o=i[0],i=i.slice(2));const r=i.includes(" ")?!1:ex.exec(i);if(r)return e.t=Ke.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+i,e;if(sx(i))return e.t=Ke.COLOR,e.d=gx(i),e;{const s=i.match($c);return e.t=Ke.COMPLEX,e.d=s?s.map(Number):[],e.s=i.split($c)||[],e}},Qc=(n,e)=>(e.t=n._valueType,e.n=n._toNumber,e.u=n._unit,e.o=null,e.d=Gt(n._toNumbers),e.s=Gt(n._strings),e),fn=Rl(),Ef=(n,e,t)=>{const i=n._modifier,r=n._fromNumbers,s=n._toNumbers,a=n._strings;let o=a[0];for(let l=0,c=s.length;l<c;l++){const f=i(gt(Zs(r[l],s[l],e),t)),h=a[l+1];o+=`${h?f+h:f}`,n._numbers[l]=f}return o};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ks=(n,e,t,i,r)=>{const s=n.parent,a=n.duration,o=n.completed,l=n.iterationDuration,c=n.iterationCount,f=n._currentIteration,h=n._loopDelay,u=n._reversed,d=n._alternate,_=n._hasChildren,S=n._delay,m=n._currentTime,p=S+l,M=e-S,y=pn(m,-S,a),T=pn(M,-S,a),D=M-m,b=T>0,w=T>=a,x=a<=st,R=r===nn.FORCE;let I=0,A=M,N=0;if(c>1){const O=l+(w?0:h),j=~~(T/O);n._currentIteration=pn(j,0,c),w&&n._currentIteration--,I=n._currentIteration%2,A=T-j*O||0}const W=u^(d&&I),Y=n._ease;let C=w?W?0:a:W?l-A:A;Y&&(C=l*Y(C/l)||0);const B=(s?s.backwards:M<m)?!W:!!W;if(n._currentTime=M,n._iterationTime=C,n.backwards=B,b&&!n.began?(n.began=!0,!t&&!(s&&(B||!s.began))&&n.onBegin(n)):M<=0&&(n.began=!1),!t&&!_&&b&&n._currentIteration!==f&&n.onLoop(n),R||r===nn.AUTO&&(e>=(s&&S>0?0:S)&&e<=p||e<=S&&y>S||e>=p&&y!==a)||C>=p&&y!==a||C<=S&&y>0&&!w||e<=y&&y===a&&o||w&&!o&&x){if(b&&(n.computeDeltaTime(y),t||n.onBeforeUpdate(n)),!_){const O=R||(B?D*-1:D)>=Pt.tickThreshold,j=gt(n._offset+(s?s._offset:0)+S+C,12);let z=n._head,J,ue,xe,He,Qe=0;for(;z;){const Ce=z._composition,q=z._currentTime,ce=z._changeDuration,te=z._absoluteStartTime+z._changeDuration,fe=z._nextRep,Te=z._prevRep,ye=Ce!==Ft.none,Ze=Te?Te._absoluteStartTime+Te._changeDuration:0,Le=Te&&Te.parent!==z.parent,qe=!fe||fe._isOverridden?te:fe.parent===z.parent?te+fe._delay:fe._absoluteStartTime<fe._absoluteUpdateStartTime?fe._absoluteStartTime:fe._absoluteUpdateStartTime;if((O||(q!==ce||j<=qe||Te&&!Le&&(!fe||fe.parent!==z.parent))&&(q!==0||j>=z._absoluteStartTime||Le&&!z._hasFromValue&&!Te._isOverridden&&j>=Ze||fe&&!fe._isOverridden&&fe.parent===z.parent&&fe._currentTime!==0&&C<fe._startTime))&&(!Te||Le||C>=z._startTime)&&(!ye||!z._isOverridden&&(!z._isOverlapped||j<=te)&&(!fe||fe._isOverridden||j<=qe)&&(!Te||Te._isOverridden||(Le?j>=z._absoluteStartTime||!z._hasFromValue&&j>=Ze:j>=Ze+z._delay)))){const tt=z._currentTime=pn(C-z._startTime,0,ce),Re=z._ease(tt/z._updateDuration),nt=z._modifier,$e=z._valueType,ht=z._tweenType,L=ht===xt.OBJECT,lt=$e===Ke.NUMBER,Ue=lt&&L||Re===0||Re===1?-1:Pt.precision;let Ne,ae;if(lt)Ne=ae=nt(gt(Zs(z._fromNumber,z._toNumber,Re),Ue));else if($e===Ke.UNIT)ae=nt(gt(Zs(z._fromNumber,z._toNumber,Re),Ue)),Ne=`${ae}${z._unit}`;else if($e===Ke.COLOR){const We=z._numbers,E=z._fromNumbers,g=z._toNumbers,F=1-Re,$=E[0],Q=E[1],ne=E[2],re=g[0],X=g[1],K=g[2];We[0]=nt(Math.sqrt($*$*F+re*re*Re)),We[1]=nt(Math.sqrt(Q*Q*F+X*X*Re)),We[2]=nt(Math.sqrt(ne*ne*F+K*K*Re)),We[3]=nt(Zs(E[3],g[3],Re)),(!z._setter||i)&&(Ne=`rgba(${gt(We[0],0)},${gt(We[1],0)},${gt(We[2],0)},${We[3]})`)}else $e===Ke.COMPLEX&&(Ne=Ef(z,Re,Ue));if(ye&&(z._number=ae),!i&&Ce!==Ft.blend){const We=z.property;J=z.target,z._setter?z._setter(J,ae,z):L?J[We]=Ne:ht===xt.ATTRIBUTE?J.setAttribute(We,Ne):(ue=J.style,ht===xt.TRANSFORM?(J!==xe&&(xe=J,He=J[_a]),He[We]=Ne,Qe=1):ht===xt.CSS?ue[We]=Ne:ht===xt.CSS_VAR&&ue.setProperty(We,Ne)),b&&(N=1)}else z._value=Ne}else q&&Te&&!Le&&C<z._startTime&&(z._currentTime=0);Qe&&z._renderTransforms&&(ue.transform=vf(He),Qe=0),z=z._next}!t&&N&&n.onRender(n)}!t&&b&&n.onUpdate(n)}return s&&x?!t&&(s.began&&!B&&M>0&&!o||B&&M<=st&&o)&&(n.onComplete(n),n.completed=!B):b&&w?c===1/0?n._startTime+=n.duration:n._currentIteration>=c-1&&(n.paused=!0,!o&&!_&&(n.completed=!0,!t&&!(s&&(B||!s.began))&&(n.onComplete(n),n._resolve(n)))):n.completed=!1,N},Ei=(n,e,t,i,r)=>{const s=n._currentIteration;if(Ks(n,e,t,i,r),n._hasChildren){const a=n,o=a.backwards,l=i?e:a._iterationTime,c=_r();let f=0,h=!0;if(!i&&a._currentIteration!==s){const u=a.iterationDuration;vt(a,d=>{if(!o)!d.completed&&!d.backwards&&d._currentTime<d.iterationDuration&&Ks(d,u,t,1,nn.FORCE),d.began=!1,d.completed=!1;else{const _=d.duration,S=d._offset+d._delay,m=S+_;!t&&_<=st&&(!S||m===u)&&d.onComplete(d)}}),t||a.onLoop(a)}vt(a,u=>{const d=gt((l-u._offset)*u._speed,12);if(o&&d>u._delay+u.duration)return;const _=u._fps<a._fps?u.requestTick(c):r;f+=Ks(u,d,t,i,_),!u.completed&&h&&(h=!1)},o),!t&&f&&a.onRender(a),(h||o)&&a._currentTime>=a.duration&&(a.paused=!0,a.completed||(a.completed=!0,t||(a.onComplete(a),a._resolve(a))))}};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const eu={},Tf=(n,e,t)=>{if(t===xt.TRANSFORM){const i=ff.get(n);return i||n}else if(t===xt.CSS||t===xt.ATTRIBUTE&&pf(e)&&n in e.style){const i=eu[n];if(i)return i;{const r=n&&df(n);return eu[n]=r,r}}else return n},wl=(n,e=!1)=>{if(n._hasChildren)vt(n,t=>wl(t,e),!0);else{const t=n;t.pause(),vt(t,i=>{const r=i.property,s=i.target,a=i._tweenType,o=i._inlineValue,l=nr(o)||o===mr;if(i._setter){if(!e&&!l){if(an(o,fn),fn.d){const c=fn.d,f=i._numbers;for(let h=0,u=c.length;h<u;h++)f[h]=c[h]}else i._number=fn.n;i._setter(i.target,i._number,i)}}else if(a===xt.OBJECT)!e&&!l&&(s[r]=o);else if(s[dr])if(a===xt.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,o));else{const c=s.style;if(a===xt.TRANSFORM){const f=s[_a];l?delete f[r]:f[r]=o,i._renderTransforms&&(Object.keys(f).length?c.transform=vf(f):c.removeProperty("transform"))}else l?c.removeProperty(df(r)):c[r]=o}s[dr]&&t._tail===i&&t.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===mr&&c.removeAttribute("style")})})}return n};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */class yf{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=pr/nl,this._fps=nl,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=+e,i=t<st?st:t,r=pr/i;i>sa.frameRate&&(sa.frameRate=i),this._fps=i,this._frameDuration=r}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<st?st:t}requestTick(e){const t=this._frameDuration,i=e-this._lastTickTime,r=t*.25,s=r<4?r:4;return i+s<t?nn.NONE:(this._lastTickTime=i>=t?e-i%t:e,nn.AUTO)}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const rr={animation:null,update:on},xx=n=>{let e=rr.animation;return e||(e={duration:st,computeDeltaTime:on,_offset:0,_delay:0,_head:null,_tail:null},rr.animation=e,rr.update=()=>{n.forEach(t=>{for(let i in t){const r=t[i],s=r._head;if(s){const a=s._valueType,o=a===Ke.COMPLEX||a===Ke.COLOR?Gt(s._fromNumbers):null;let l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(o)for(let f=0,h=c._numbers.length;f<h;f++)o[f]+=c._numbers[f];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=o}}}),Ks(e,1,1,0,nn.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const bf=di?requestAnimationFrame:setImmediate,vx=di?cancelAnimationFrame:clearImmediate;class Mx extends yf{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=sa,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=_r();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,i=this._fps;let r=this._head;for(;r;){const s=r._next;r.paused?(bi(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Ei(r,(e-r._startTime)*r._speed*t,0,0,r._fps<i?r.requestTick(e):nn.AUTO),r=s}rr.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(_r()),this.reqId=bf(Af)),this}pause(){if(this.reqId)return this.paused=!0,Sx()}resume(){if(this.paused)return this.paused=!1,vt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Pt.timeScale===1?1:pr)}set speed(e){const t=e*Pt.timeScale;this._speed!==t&&(this._speed=t,vt(this,i=>i.speed=i._speed))}get timeUnit(){return Pt.timeScale===1?"ms":"s"}set timeUnit(e){const i=e==="s",r=i?.001:1;if(Pt.timeScale!==r){Pt.timeScale=r,Pt.tickThreshold=200*r;const s=i?.001:pr;this.defaults.duration*=s,this._speed*=s}}get precision(){return Pt.precision}set precision(e){Pt.precision=e}}const Nt=(()=>{const n=new Mx(_r());return di&&(hf.engine=n,jr.addEventListener("visibilitychange",()=>{n.pauseOnDocumentHidden&&(jr.hidden?n.pause():n.resume())})),n})(),Af=()=>{Nt._head?(Nt.reqId=bf(Af),Nt.update()):Nt.reqId=0},Sx=()=>(vx(Nt.reqId),Nt.reqId=0,Nt);/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const aa={_rep:new WeakMap,_add:new Map},Cl=(n,e,t="_rep")=>{const i=aa[t];let r=i.get(n);return r||(r={},i.set(n,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},Ex=(n,e)=>n._isOverridden||n._absoluteStartTime>e._absoluteStartTime,js=n=>{n._isOverlapped=1,n._isOverridden=1,n._changeDuration=st,n._currentTime=st},Rf=(n,e)=>{const t=n._composition;if(t===Ft.replace){const i=n._absoluteStartTime;Ai(e,n,Ex,"_prevRep","_nextRep");const r=n._prevRep;if(r){const s=r.parent,a=r._absoluteEndTime;if(n.parent.id!==s.id&&s.iterationCount>1&&a+(s.duration-s.iterationDuration)>i){js(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)js(c),c=c._prevRep}const o=n._absoluteUpdateStartTime;if(a>o){const c=r._startTime,f=a-(c+r._updateDuration),h=gt(o-f-c,12);r._changeDuration=h,r._currentTime=h,r._isOverlapped=1,h<st&&js(r)}const l=n.parent.parent;if(!l||l!==s.parent){let c=!0;if(vt(s,f=>{f._isOverlapped||(c=!1)}),c){const f=s.parent;if(f){let h=!0;vt(f,u=>{u!==s&&vt(u,d=>{d._isOverlapped||(h=!1)})}),h&&f.cancel()}else s.cancel()}}}}else if(t===Ft.blend){const i=Cl(n.target,n.property,"_add"),r=xx(aa._add);let s=i._head;s||(s={...n},s._composition=Ft.replace,s._updateDuration=st,s._startTime=0,s._numbers=Gt(n._fromNumbers),s._number=0,s._next=null,s._prev=null,Ai(i,s),Ai(r,s));const a=n._toNumber;if(n._fromNumber=s._fromNumber-a,n._toNumber=0,n._numbers=Gt(n._fromNumbers),n._number=0,s._fromNumber=a,n._toNumbers.length){const o=Gt(n._toNumbers);o.forEach((l,c)=>{n._fromNumbers[c]=s._fromNumbers[c]-l,n._toNumbers[c]=0}),s._fromNumbers=o}Ai(i,n,null,"_prevAdd","_nextAdd")}return n},wf=n=>{const e=n._composition;if(e!==Ft.none){const t=n.target,i=n.property,a=aa._rep.get(t)[i];if(bi(a,n,"_prevRep","_nextRep"),e===Ft.blend){const o=aa._add,l=o.get(t);if(!l)return;const c=l[i],f=rr.animation;bi(c,n,"_prevAdd","_nextAdd");const h=c._head;if(h&&h===c._tail){bi(c,h,"_prevAdd","_nextAdd"),bi(f,h);let u=!0;for(let d in l)if(l[d]._head){u=!1;break}u&&o.delete(t)}}}return n},tu=(n,e,t)=>{let i=!1;return vt(e,r=>{const s=r.target;if(n.includes(s)){const a=r.property,o=r._tweenType,l=Tf(t,s,o);(!l||l&&l===a)&&(r.parent._tail===r&&r._tweenType===xt.TRANSFORM&&r._prev&&r._prev._tweenType===xt.TRANSFORM&&(r._prev._renderTransforms=1),bi(e,r),wf(r),i=!0)}},!0),i},Cf=(n,e,t)=>{const i=e||Nt;let r;if(i._hasChildren){let s=0;vt(i,a=>{if(!a._hasChildren)if(r=tu(n,a,t),r&&!a._head)a.cancel(),bi(i,a);else{const l=a._offset+a._delay+a.duration;l>s&&(s=l)}a._head?Cf(n,a,t):a._hasChildren=!1},!0),je(i.iterationDuration)||(i.iterationDuration=s)}else r=tu(n,i,t);r&&!i._head&&(i._hasChildren=!1,i.cancel&&i.cancel())};/**
 * Anime.js - timer - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const nu=n=>(n.paused=!0,n.began=!1,n.completed=!1,n),il=n=>(n._cancelled&&(n._hasChildren?vt(n,il):vt(n,e=>{e._composition!==Ft.none&&Rf(e,Cl(e.target,e.property))}),n._cancelled=0),n);let iu=0;const Tx=(n,e)=>n._priority>e._priority;class Pl extends yf{constructor(e={},t=null,i=0){super(0),++iu;const{id:r,delay:s,duration:a,reversed:o,alternate:l,loop:c,loopDelay:f,autoplay:h,frameRate:u,playbackRate:d,priority:_,onComplete:S,onLoop:m,onPause:p,onBegin:M,onBeforeUpdate:y,onUpdate:T}=e,D=t?0:Nt._lastTickTime,b=t?t.defaults:Pt.defaults,w=Pi(s)||je(s)?b.delay:+s,x=Pi(a)||je(a)?1/0:+a,R=Dt(c,b.loop),I=Dt(f,b.loopDelay);let A=R===!0||R===1/0||R<0?1/0:R+1,N=0;t?N=i:(Nt.reqId||Nt.requestTick(_r()),N=(Nt._lastTickTime-Nt._startTime)*Pt.timeScale),this.id=je(r)?iu:r,this.parent=t,this.duration=ga((x+I)*A-I)||st,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=M||b.onBegin,this.onBeforeUpdate=y||b.onBeforeUpdate,this.onUpdate=T||b.onUpdate,this.onLoop=m||b.onLoop,this.onPause=p||b.onPause,this.onComplete=S||b.onComplete,this.iterationDuration=x,this.iterationCount=A,this._autoplay=t?!1:Dt(h,b.autoplay),this._offset=N,this._delay=w,this._loopDelay=I,this._iterationTime=0,this._currentIteration=0,this._resolve=on,this._running=!1,this._reversed=+Dt(o,b.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Dt(l,b.alternate),this._prev=null,this._next=null,this._lastTickTime=D,this._startTime=D,this._lastTime=D,this._fps=Dt(u,b.frameRate),this._speed=Dt(d,b.playbackRate),this._priority=+Dt(_,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return pn(gt(this._currentTime,Pt.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return pn(gt(this._iterationTime,Pt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return pn(gt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return pn(gt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*pn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return il(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Ei(this,0,1,~~e,nn.FORCE),nu(this),this._hasChildren&&vt(this,nu),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Ei(this,this.duration,1,~~e,nn.FORCE),this.reset(e);const t=this._autoplay;return t===!0?this.resume():t&&!je(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*Nt._speed);return this._startTime=_r()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=st&&!this._hasChildren?Ei(this,st,0,0,nn.FORCE):(this._running||(Ai(Nt,this,Tx),Nt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Nt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,i=0){il(this),this.completed=!1;const r=this.paused;return this.paused=!0,Ei(this,e+this._delay,~~t,~~i,nn.AUTO),r?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,i=this.iterationDuration,r=t===1/0?fx(tl/i):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?vt(this,e=>e.cancel(),!0):vt(this,wf),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,i=ir(e);if(t===i)return this;const r=e/t,s=e<=st;return this.duration=s?st:i,this.iterationDuration=s?st:ir(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Ei(this,0,1,0,nn.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=on){const t=this.then,i=()=>{this.then=null,e(this),this.then=t,this._resolve=on};return new Promise(r=>(this._resolve=()=>r(i()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function ru(n){const e=xr(n)?rx.root.querySelectorAll(n):n;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function rl(n){if(nr(n))return[];if(!di)return gr(n)&&n.flat(1/0)||[n];if(gr(n)){const t=n.flat(1/0),i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];if(!nr(a)){const o=ru(a);if(o)for(let l=0,c=o.length;l<c;l++){const f=o[l];if(!nr(f)){let h=!1;for(let u=0,d=i.length;u<d;u++)if(i[u]===f){h=!0;break}h||i.push(f)}}else{let l=!1;for(let c=0,f=i.length;c<f;c++)if(i[c]===a){l=!0;break}l||i.push(a)}}}return i}const e=ru(n);return e?Array.from(e):[n]}function yx(n){const e=rl(n),t=e.length;for(let i=0;i<t;i++){const r=e[i];if(!r[Zc]){r[Zc]=!0;const s=pf(r);(r.nodeType||s)&&(r[dr]=!0,r[uf]=s,r[_a]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const no={deg:1,rad:180/Al,turn:360},su={},au=(n,e,t,i=!1)=>{const r=e.u,s=e.n;if(e.t===Ke.UNIT&&r===t)return e;const a=s+r+t,o=su[a];if(!je(o)&&!i)e.n=o;else{let l;if(r in no)l=s*no[r]/no[t];else{const f=n.cloneNode(),h=n.parentNode,u=h&&h!==jr?h:jr.body;u.appendChild(f);const d=f.style;d.width=100+r;const _=f.offsetWidth||100;d.width=100+t;const S=f.offsetWidth||100,m=_/S;u.removeChild(f),l=m*s}e.n=l,su[a]=l}return e.t,Ke.UNIT,e.u=t,e};/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const hi=n=>n;/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Lr=(n=1.68)=>e=>Ji(e,+n),sl={in:n=>e=>n(e),out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n(e*-2+2)/2,outIn:n=>e=>e<.5?(1-n(1-e*2))/2:(n(e*2-1)+1)/2},bx=Al/2,ou=Al*2,lu={[mr]:Lr,Quad:Lr(2),Cubic:Lr(3),Quart:Lr(4),Quint:Lr(5),Sine:n=>1-ux(n*bx),Circ:n=>1-lx(1-n*n),Expo:n=>n?Ji(2,10*n-10):0,Bounce:n=>{let e,t=4;for(;n<((e=Ji(2,--t))-1)/11;);return 1/Ji(4,3-t)-7.5625*Ji((e*3-2)/22-n,2)},Back:(n=1.7)=>e=>(+n+1)*e*e*e-+n*e*e,Elastic:(n=1,e=.3)=>{const t=pn(+n,1,10),i=pn(+e,st,2),r=i/ou*hx(1/t),s=ou/i;return a=>a===0||a===1?a:-t*Ji(2,-10*(1-a))*cx((1-a-r)*s)}},io=(()=>{const n={linear:hi,none:hi};for(let e in sl)for(let t in lu){const i=lu[t],r=sl[e];n[e+t]=t===mr||t==="Back"||t==="Elastic"?(s,a)=>r(i(s,a)):r(i)}return n})(),Ls={linear:hi,none:hi},Ax=n=>{if(Ls[n])return Ls[n];if(n.indexOf("(")<=-1){const t=sl[n]||n.includes("Back")||n.includes("Elastic")?io[n]():io[n];return t?Ls[n]=t:hi}else{const e=n.slice(0,-1).split("("),t=io[e[0]];return t?Ls[n]=t(...e[1].split(",")):hi}},cu=["steps(","irregular(","linear(","cubicBezier("],al=n=>{if(xr(n)){for(let t=0,i=cu.length;t<i;t++)if(Wn(n,cu[t]))return console.warn(`String syntax for \`ease: "${n}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${n}\``),hi}return Pi(n)?n:xr(n)?Ax(n):hi};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ie=Rl(),ke=Rl(),Zi={},Is={func:null},Us={func:null},Ns=[null],$i=[null,null],Fs={to:null};let Rx=0,uu=0,ii,En;const wx=(n,e)=>{const t={};if(gr(n)){const i=[].concat(...n.map(r=>Object.keys(r))).filter(qs);for(let r=0,s=i.length;r<s;r++){const a=i[r],o=n.map(l=>{const c={};for(let f in l){const h=l[f];qs(f)?f===a&&(c.to=h):c[f]=h}return c});t[a]=o}}else{const i=Dt(e.duration,Pt.defaults.duration);Object.keys(n).map(s=>({o:parseFloat(s)/100,p:n[s]})).sort((s,a)=>s.o-a.o).forEach(s=>{const a=s.o,o=s.p;for(let l in o)if(qs(l)){let c=t[l];c||(c=t[l]=[]);const f=a*i;let h=c.length,u=c[h-1];const d={to:o[l]};let _=0;for(let S=0;S<h;S++)_+=c[S].duration;h===1&&(d.from=u.to),o.ease&&(d.ease=o.ease),d.duration=f-(h?_:0),c.push(d)}return s});for(let s in t){const a=t[s];let o;for(let l=0,c=a.length;l<c;l++){const f=a[l],h=f.ease;f.ease=o||void 0,o=h}a[0].duration||a.shift()}}return t};class Dl extends Pl{constructor(e,t,i,r,s=!1,a=0,o){super(t,i,r),this._head,this._tail,++uu;const l=yx(e),c=l.length,f=t.keyframes,h=f?xf(wx(f,t),t):t,{id:u,delay:d,duration:_,ease:S,playbackEase:m,modifier:p,composition:M,onRender:y}=h,T=i?i.defaults:Pt.defaults,D=Dt(S,T.ease),b=Dt(m,T.playbackEase),w=b?al(b):null,x=!je(D.ease),R=x?D.ease:Dt(S,w?"linear":T.ease),I=x?D.settlingDuration:Dt(_,T.duration),A=Dt(d,T.delay),N=p||T.modifier,W=je(M)&&c>=pr?Ft.none:je(M)?T.composition:M,Y=this._offset+(i?i._offset:0);x&&(D.parent=this);let C=NaN,B=NaN,O=0,j=0;for(let z=0;z<c;z++){const J=l[z],ue=a||z,xe=o||l;let He=NaN,Qe=NaN;for(let Ce in h)if(qs(Ce)){const q=Sf(J,Ce),ce=Mf(J,Ce),te=Tf(Ce,J,q);let fe=h[Ce];const Te=gr(fe);if(s&&!Te&&($i[0]=fe,$i[1]=fe,fe=$i),Te){const Re=fe.length,nt=!Hr(fe[0]);Re===2&&nt?(Fs.to=fe,Ns[0]=Fs,ii=Ns):Re>2&&nt?(ii=[],fe.forEach(($e,ht)=>{ht?ht===1?($i[1]=$e,ii.push($i)):ii.push($e):$i[0]=$e})):ii=fe}else Ns[0]=fe,ii=Ns;let ye=null,Ze=null,Le=NaN,qe=0,tt=0;for(let Re=ii.length;tt<Re;tt++){const nt=ii[tt];Hr(nt)?En=nt:(Fs.to=nt,En=Fs),Is.func=null,Us.func=null;const $e=Fn(Dt(En.composition,W),J,ue,xe,null,null),ht=bl($e)?$e:Ft[$e];!ye&&ht!==Ft.none&&(ye=Cl(J,te));const L=ye?ye._tail:null,lt=i&&L&&L.parent.parent===i?L:Ze,Ue=Fn(En.to,J,ue,xe,Is,lt);let Ne;Hr(Ue)&&!je(Ue.to)?(En=Ue,Ne=Ue.to):Ne=Ue;const ae=Fn(En.from,J,ue,xe,Us,lt),We=En.ease||R,E=Fn(We,J,ue,xe,null,lt),g=Pi(E)||xr(E)?E:We,F=!je(g)&&!je(g.ease),$=F?g.ease:g,Q=F?g.settlingDuration:Fn(Dt(En.duration,Re>1?Fn(I,J,ue,xe,null,lt)/Re:I),J,ue,xe,null,lt),ne=Fn(Dt(En.delay,tt?0:A),J,ue,xe,null,lt),re=En.modifier||N,X=!je(ae),K=!je(Ne),he=gr(Ne),ve=he||X&&K,le=Ze?qe:0,ie=Ze?qe+ne:ne,Pe=gt(Y+ie,12),ze=gt(Y+le,12);!j&&(X||he)&&(j=1);let Oe=Ze;if(ht!==Ft.none){let we=ye._head;for(;we&&we._absoluteStartTime<=Pe;)if(we._isOverridden||(Oe=we),we=we._nextRep,we&&we._absoluteStartTime>=Pe)for(;we;)js(we),we=we._nextRep}if(ve){an(he?Fn(Ne[0],J,ue,xe,Us,lt):ae,Ie),an(he?Fn(Ne[1],J,ue,xe,Is,lt):Ne,ke);const we=Dr(J,te,q,Zi);Ie.t===Ke.NUMBER&&(Oe?Oe._valueType===Ke.UNIT&&(Ie.t=Ke.UNIT,Ie.u=Oe._unit):(an(we,fn),fn.t===Ke.UNIT&&(Ie.t=Ke.UNIT,Ie.u=fn.u)))}else K?an(Ne,ke):Ze?Qc(Ze,ke):an(i&&Oe&&Oe.parent.parent===i?Oe._value:Dr(J,te,q,Zi),ke),X?an(ae,Ie):Ze?Qc(Ze,Ie):an(i&&Oe&&Oe.parent.parent===i?Oe._value:Dr(J,te,q,Zi),Ie);if(Ie.o&&(Ie.n=$s(Oe?Oe._toNumber:an(Dr(J,te,q,Zi),fn).n,Ie.n,Ie.o)),ke.o&&(ke.n=$s(Ie.n,ke.n,ke.o)),Ie.t!==ke.t){if(Ie.t===Ke.COMPLEX||ke.t===Ke.COMPLEX){const we=Ie.t===Ke.COMPLEX?Ie:ke,Be=Ie.t===Ke.COMPLEX?ke:Ie;Be.t=Ke.COMPLEX,Be.s=Gt(we.s),Be.d=we.d.map(()=>Be.n)}else if(Ie.t===Ke.UNIT||ke.t===Ke.UNIT){const we=Ie.t===Ke.UNIT?Ie:ke,Be=Ie.t===Ke.UNIT?ke:Ie;Be.t=Ke.UNIT,Be.u=we.u}else if(Ie.t===Ke.COLOR||ke.t===Ke.COLOR){const we=Ie.t===Ke.COLOR?Ie:ke,Be=Ie.t===Ke.COLOR?ke:Ie;Be.t=Ke.COLOR,Be.d=we.d.map(()=>0)}}if(Ie.u!==ke.u){let we=ke.u?Ie:ke;we=au(J,we,ke.u?ke.u:Ie.u,!1)}if(ke.d&&Ie.d&&ke.d.length!==Ie.d.length){const we=Ie.d.length>ke.d.length?Ie:ke,Be=we===Ie?ke:Ie;Be.d=we.d.map((xn,Kt)=>je(Be.d[Kt])?0:Be.d[Kt]),Be.s=Gt(we.s)}const P=gt(+Q||st,12);let se=Zi[te];nr(se)||(Zi[te]=null);const Z=ce?ce.set:null;qe=gt(ie+P,12);const pe=Ie.d,oe=ke.d,ee=ke.s,ge={parent:this,id:Rx++,property:te,target:J,_value:null,_toFunc:Is.func,_fromFunc:Us.func,_ease:al($),_fromNumbers:pe?Gt(pe):Ds,_toNumbers:oe?Gt(oe):Ds,_strings:ee?Gt(ee):Ds,_fromNumber:Ie.n,_toNumber:ke.n,_numbers:pe?Gt(pe):Ds,_number:Ie.n,_unit:ke.u,_modifier:re,_currentTime:0,_startTime:ie,_delay:+ne,_updateDuration:P,_changeDuration:P,_absoluteStartTime:Pe,_absoluteUpdateStartTime:ze,_absoluteEndTime:gt(Y+qe,12),_hasFromValue:X||he?1:0,_tweenType:q,_setter:Z,_valueType:ke.t,_composition:ht,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:se,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};ht!==Ft.none&&Rf(ge,ye);const Fe=ge._valueType;if(Fe===Ke.COMPLEX)ge._value=Ef(ge,1,-1);else if(Fe===Ke.UNIT)ge._value=`${re(ge._toNumber)}${ge._unit}`;else if(Fe===Ke.COLOR){const we=ke.d;ge._value=`rgba(${gt(we[0],0)},${gt(we[1],0)},${gt(we[2],0)},${we[3]})`}else ge._value=re(ge._toNumber);isNaN(Le)&&(Le=ge._startTime),Ze=ge,O++,Ai(this,ge)}(isNaN(B)||Le<B)&&(B=Le),(isNaN(C)||qe>C)&&(C=qe),q===xt.TRANSFORM&&(He=O-tt,Qe=O)}if(!isNaN(He)){let Ce=0;vt(this,q=>{Ce>=He&&Ce<Qe&&(q._renderTransforms=1,q._composition===Ft.blend&&vt(rr.animation,ce=>{ce.id===q.id&&(ce._renderTransforms=1)})),Ce++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),B?(vt(this,z=>{z._startTime-z._delay||(z._delay-=B),z._startTime-=B}),C-=B):B=0,C||(C=st,this.iterationCount=0),this.targets=l,this.id=je(u)?uu:u,this.duration=C===st?st:ga((C+this._loopDelay)*this.iterationCount-this._loopDelay)||st,this.onRender=y||T.onRender,this._ease=w,this._delay=B,this.iterationDuration=C,!this._autoplay&&j&&this.onRender(this)}stretch(e){const t=this.duration;if(t===ir(e))return this;const i=e/t;return vt(this,r=>{r._updateDuration=ir(r._updateDuration*i),r._changeDuration=ir(r._changeDuration*i),r._currentTime*=i,r._delay*=i,r._startTime*=i,r._absoluteStartTime*=i,r._absoluteUpdateStartTime*=i,r._absoluteEndTime*=i}),super.stretch(e)}refresh(){return vt(this,e=>{const t=e._toFunc,i=e._fromFunc;(t||i)&&(i?(an(i(),Ie),Ie.u!==e._unit&&e.target[dr]&&au(e.target,Ie,e._unit,!0),e._fromNumbers=Gt(Ie.d),e._fromNumber=Ie.n):t&&(an(Dr(e.target,e.property,e._tweenType),fn),e._fromNumbers=Gt(fn.d),e._fromNumber=fn.n),t&&(an(t(),ke),e._toNumbers=Gt(ke.d),e._strings=Gt(ke.s),e._toNumber=ke.o?$s(e._fromNumber,ke.n,ke.o):ke.n))}),this.duration===st&&this.restart(),this}revert(){return super.revert(),wl(this)}then(e){return super.then(e)}}const Jr=(n,e)=>new Dl(n,e,null,0,!1).init();/**
 * Anime.js - timeline - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Cx=(n,e)=>{if(Wn(e,"<")){const t=e[1]==="<",i=n._tail,r=i?i._offset+i._delay:0;return t?r:r+i.duration}},Os=(n,e)=>{let t=n.iterationDuration;if(t===st&&(t=0),je(e))return t;if(bl(+e))return+e;const i=e,r=n?n.labels:null,s=!nr(r),a=Cx(n,i),o=!je(a),l=nx.exec(i);if(l){const c=l[0],f=i.split(c),h=s&&f[0]?r[f[0]]:t,u=o?a:s?h:t,d=+f[1];return $s(u,d,c[0])}else return o?a:s?je(r[i])?t:r[i]:t};/**
 * Anime.js - timeline - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function Px(n){return ga((n.iterationDuration+n._loopDelay)*n.iterationCount-n._loopDelay)||st}function ro(n,e,t,i,r,s){const o=bl(n.duration)&&n.duration<=st?t-st:t;e.composition&&Ei(e,o,1,1,nn.AUTO);const l=i?new Dl(i,n,e,o,!1,r,s):new Pl(n,e,o);return e.composition&&l.init(!0),Ai(e,l),vt(e,c=>{const h=c._offset+c._delay+c.duration;h>e.iterationDuration&&(e.iterationDuration=h)}),e.duration=Px(e),e}let fu=0;class Dx extends Pl{constructor(e={}){super(e,null,0),++fu,this.id=je(e.id)?fu:e.id,this.duration=0,this.labels={};const t=e.defaults,i=Pt.defaults;this.defaults=t?xf(t,i):i,this.composition=Dt(e.composition,!0),this.onRender=e.onRender||i.onRender;const r=Dt(e.playbackEase,i.playbackEase);this._ease=r?al(r):null,this.iterationDuration=0}add(e,t,i){const r=Hr(t),s=Hr(e);if(r||s){if(this._hasChildren=!0,r){const a=t,o=i&&i.type==="Stagger"&&Pt.editor,l=Pi(i)?i:null;if(l||o){const c=rl(e),f=this.duration,h=this.iterationDuration,u=a.id;let d=0;c.length;const _=l||Pt.editor.resolveStagger(i.defaultValue);c.forEach(S=>{const m={...a};this.duration=f,this.iterationDuration=h,je(u)||(m.id=u+"-"+d);const p=Os(this,_(S,d,c,null,this));ro(m,this,p,S,d,c),d++})}else{const c=a,f=i&&i.type?i.defaultValue:i;ro(c,this,Os(this,f),e)}}else ro(e,this,Os(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(je(e)||e&&je(e.pause))return this;e.pause();const i=+(e.effect?e.effect.getTiming().duration:e.duration);return!je(e)&&!je(e.persist)&&(e.persist=!0),this.add(e,{currentTime:[0,i],duration:i,delay:0,ease:"linear",playbackEase:"linear"},t)}set(e,t,i){return je(t)?this:(t.duration=st,t.composition=Ft.replace,this.add(e,t,i))}call(e,t){return je(e)||e&&!Pi(e)?this:this.add({duration:0,delay:0,onComplete:()=>e(this)},t)}label(e,t){return je(e)||e&&!xr(e)?this:(this.labels[e]=Os(this,t),this)}remove(e,t){return Cf(rl(e),this,t),this}stretch(e){const t=this.duration;if(t===ir(e))return this;const i=e/t,r=this.labels;vt(this,s=>s.stretch(s.duration*i));for(let s in r)r[s]*=i;return super.stretch(e)}refresh(){return vt(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),vt(this,e=>e.revert,!0),wl(this)}then(e){return super.then(e)}}const Lx=n=>new Dx(n).init();/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ir=(n,e)=>{if(!je(e))return e.duration=st,e.composition=Dt(e.composition,Ft.none),new Dl(n,e,null,0,!0).resume()};Nt.pauseOnDocumentHidden=!0;function Pf(n){const e=()=>n(document.visibilityState==="visible");return e(),document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}const ri=Math.PI*2,vr=16,so=1e3/60,oa=1024,Ix=1.5,mt={speed:1.08,pointCount:14,scale:1,padding:60,breathingRange:.03,centerPull:.4,smoothing:.05,maxDistance:.7,morphIntensity:.02,morphRandomness:.02,rippleAmplitude:.7,smoothness:.2,timeStep:.006,colorStep:.001},Df=[{x:0,y:0,size:1.1},{x:1,y:0,size:.9},{x:0,y:1,size:.9},{x:1,y:1,size:1.1}];function ao(n,e){return n+Math.random()*(e-n)}function Ux(){const n=Math.random()*360;return[0,74,166,282].map(t=>({l:ao(.974,.986),c:ao(.032,.046),h:(n+t+ao(-9,9)+360)%360}))}function sr(n,e,t){return n+(e-n)*t}function Nx(n,e,t){const i=e-n,r=Math.abs(i)>180?n+(i>0?360:-360):n;return(sr(r,e,t)%360+360)%360}function Fx({l:n,c:e,h:t}){const i=t*Math.PI/180,r=e*Math.cos(i),s=e*Math.sin(i),a=(n+.3963377774*r+.2158037573*s)**3,o=(n-.1055613458*r-.0638541728*s)**3,l=(n-.0894841775*r-1.291485548*s)**3,c=4.0767416621*a-3.3077115913*o+.2309699292*l,f=-1.2684380046*a+2.6097574011*o-.3413193965*l,h=-.0041960863*a-.7034186147*o+1.707614701*l,u=d=>{const _=Yh.clamp(d,0,1);return _<=.0031308?12.92*_:1.055*_**(1/2.4)-.055};return[u(c),u(f),u(h)]}const ci=new Float32Array(vr*4);for(let n=0;n<vr;n++){const e=n/vr,t=1-e,i=n*4;ci[i]=t**3,ci[i+1]=3*t**2*e,ci[i+2]=3*t*e**2,ci[i+3]=e**3}function hu(n,e,t,i,r){const s=r*4;return ci[s]*n+ci[s+1]*e+ci[s+2]*t+ci[s+3]*i}const si=Ux(),du=Array.from({length:oa},(n,e)=>{const t=e/oa*si.length,i=Math.floor(t),r=(i+1)%si.length,s=t%1;return Fx({l:sr(si[i].l,si[r].l,s),c:sr(si[i].c,si[r].c,s),h:Nx(si[i].h,si[r].h,s)})}),Bs=mt.pointCount*vr;class Ox{constructor(e,t,i){this.index=e,this.definition=Df[e],this.points=new Float32Array(mt.pointCount*2),this.rotation=Math.random()*ri,this.rotationSpeed=.002*(Math.random()-.5)*mt.speed,this.time=Math.random()*ri,this.phase=Math.random()*ri,this.frequency=.5+Math.random(),this.sizePhase=Math.random()*ri,this.breathingAmount=Math.random()*mt.breathingRange,this.pointOffsets=Array.from({length:mt.pointCount},()=>Math.random()*ri),this.distortion=mt.morphIntensity+Math.random()*mt.morphRandomness,this.colorTime=e*(Math.PI/2),this.geometry=this.createGeometry(),this.material=new El({depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new _n(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e,this.resize(t,i),this.updateColor(!1)}createGeometry(){const e=new Float32Array((Bs+1)*3),t=new Uint16Array(Bs*3);for(let r=0;r<Bs;r++){const s=r*3;t[s]=0,t[s+1]=(r+1)%Bs+1,t[s+2]=r+1}const i=new gn;return i.setAttribute("position",new $t(e,3)),i.setIndex(new $t(t,1)),i}resize(e,t){const i=e*this.definition.size,r=this.definition.x*t.width,s=this.definition.y*t.height;if(this.baseRadius){const a=i/this.baseRadius;this.x=r+(this.x-this.anchorX)*a,this.y=s+(this.y-this.anchorY)*a,this.radius*=a}else this.x=r,this.y=s,this.radius=i;this.baseRadius=i,this.anchorX=r,this.anchorY=s,this.updateShape(),this.updateGeometry()}update(e,t,i){this.updateMovement(t,i),this.resolveCollisions(e),this.updateShape(),this.updateGeometry(),this.updateColor(!0,i)}updateMovement(e,t){const i=this.definition.x*e.width,r=this.definition.y*e.height,s=Math.hypot(i-this.x,r-this.y),a=this.baseRadius*mt.maxDistance,o=this.baseRadius*8e-4,l=1-(1-mt.smoothing)**t;this.time+=mt.timeStep*mt.speed*t,this.rotation+=this.rotationSpeed*t,this.radius=this.baseRadius*(1+Math.sin(this.time*.4+this.sizePhase)*this.breathingAmount);const c=this.x+Math.sin(this.time*.2*this.frequency+this.phase)*o,f=this.y+Math.cos(this.time*.3*this.frequency+this.phase)*o,h=s>a*.5?Math.min(1,(s-a*.5)/a)*mt.centerPull*s:0,u=h?(i-this.x)/s*h:0,d=h?(r-this.y)/s*h:0;this.x+=(c-this.x+u)*l,this.y+=(f-this.y+d)*l}resolveCollisions(e){e.forEach(t=>{if(t===this)return;const i=this.x-t.x,r=this.y-t.y,s=Math.hypot(i,r),a=this.radius+t.radius+mt.padding;if(s>=a)return;const o=Math.atan2(r,i),l=(a-s)/2,c=Math.cos(o)*l,f=Math.sin(o)*l;this.x+=c,this.y+=f,t.x-=c,t.y-=f})}updateShape(){const e=ri/mt.pointCount,t=this.time*.9;for(let i=0;i<mt.pointCount;i++){const r=i*e+this.rotation,s=Math.sin(t+this.pointOffsets[i])*this.distortion+Math.sin(t*1.5+this.pointOffsets[(i+3)%mt.pointCount])*this.distortion*mt.rippleAmplitude,a=this.radius*(1+s),o=i*2;this.points[o]=this.x+Math.cos(r)*a,this.points[o+1]=this.y+Math.sin(r)*a}}updateGeometry(){const e=this.geometry.attributes.position.array,t=mt.smoothness*(this.radius/this.baseRadius);e[0]=this.x,e[1]=this.y;for(let i=0;i<mt.pointCount;i++){const r=i*2,s=(i+1)%mt.pointCount*2,a=(i+2)%mt.pointCount*2,o=(i-1+mt.pointCount)%mt.pointCount*2,l=this.points[r],c=this.points[r+1],f=this.points[s],h=this.points[s+1],u=l+(f-this.points[o])*t,d=c+(h-this.points[o+1])*t,_=f-(this.points[a]-l)*t,S=h-(this.points[a+1]-c)*t;for(let m=0;m<vr;m++){const M=(1+i*vr+m)*3;e[M]=hu(l,u,_,f,m),e[M+1]=hu(c,d,S,h,m)}}this.geometry.attributes.position.needsUpdate=!0}updateColor(e=!0,t=1){e&&(this.colorTime+=mt.colorStep*mt.speed*t);const i=this.colorTime%ri/ri*oa,r=Math.floor(i),s=(r+1)%oa,a=i%1,o=du[r],l=du[s];this.material.color.setRGB(sr(o[0],l[0],a),sr(o[1],l[1],a),sr(o[2],l[2],a),Yt)}}const Bx=document.querySelector("canvas"),Xn=new cf({canvas:Bx,alpha:!1,antialias:!0}),xa=new Hu,Bn=new is(0,1,0,1,0,2),en={width:window.innerWidth,height:window.innerHeight};let ol=Math.max(en.width/2,en.height/2)*mt.scale,Js=0,pu;Xn.outputColorSpace=Yt;Xn.setClearColor(16777215,1);Bn.position.z=1;const la=Df.map((n,e)=>new Ox(e,ol,en));la.forEach(({mesh:n})=>xa.add(n));function zx(n){la.forEach(e=>e.update(la,en,n)),Xn.render(xa,Bn)}function Vx(n){const e=Js?Math.min(n-Js,so*3):so;Js=n,zx(e/so)}function Lf(){en.width=window.innerWidth,en.height=window.innerHeight,ol=Math.max(en.width/2,en.height/2)*mt.scale,Xn.setPixelRatio(Math.min(window.devicePixelRatio||1,Ix)),Xn.setSize(en.width,en.height,!1),Bn.left=0,Bn.right=en.width,Bn.top=0,Bn.bottom=en.height,Bn.updateProjectionMatrix(),la.forEach(n=>n.resize(ol,en)),Xn.render(xa,Bn)}function Gx(){window.cancelAnimationFrame(pu),pu=window.requestAnimationFrame(Lf)}function Hx(n){if(Xn.setAnimationLoop(null),!n){Xn.render(xa,Bn);return}Js=0,Xn.setAnimationLoop(Vx)}window.addEventListener("resize",Gx);Lf();Pf(Hx);const If=document.querySelector(".illustration"),kx=new DOMParser,Mt={x:0,y:320,width:240,height:120},Wx=2,At={depth:18,duration:8e3,roughness:.86,ambientIntensity:2.85,lightIntensity:1.15,interactionRadius:155,interactionStrength:1.75,interactionLift:1.15,interactionFollow:.26,interactionRelease:.055,interactionTargetDecay:.86,lightSmoothing:.18,lightDecay:.82,maximumInteractionSpeed:14},Xx=["#94f4c3","#a2f8cc","#acfed4","#b0fbd5","#b9feda","#c2fee0","#c5fee1","#d4fee9"],Yx=new Set(Xx),ft={dial:0,disc:0,gear:0,smallDial:0,splitDisc:0},Qr=new Set;let Rt,ar,ca,ll,zn,kr=!1,Uf,ua=!1;function qx(n,e){const t=new Map;n.querySelectorAll("[id]").forEach(i=>{const r=i.id,s=`${e}-${r}`;t.set(r,s),i.id=s}),n.querySelectorAll("*").forEach(i=>{for(const r of i.attributes){let s=r.value;t.forEach((a,o)=>{s=s.replaceAll(`url(#${o})`,`url(#${a})`),s===`#${o}`&&(s=`#${a}`)}),r.value=s}})}async function mu(n,e,t){const i=await fetch(e);if(!i.ok)throw new Error(`Unable to load ${e}`);const s=kx.parseFromString(await i.text(),"image/svg+xml").documentElement;return qx(s,t),s.classList.add("illustration__svg"),If.querySelector(n).replaceChildren(s),s}function zs(n,{x:e,y:t,width:i,height:r}){const s=n.getBBox(),a=s.x+s.width/2,o=s.y+s.height/2;return a>=e&&a<=e+i&&o>=t&&o<=t+r}function Ki(n,e){return n.forEach(t=>t.classList.add("illustration__part",`illustration__part--${e}`)),n}function Zx(n){const e=n.match(/[a-zA-Z]|[-+]?(?:\d*\.)?\d+(?:e[-+]?\d+)?/g)??[],t=[];let i,r,s=0,a=0,o=0,l=0,c=0;const f=_=>/^[a-zA-Z]$/.test(_),h=()=>c<e.length&&!f(e[c]),u=()=>Number(e[c++]),d=(_,S)=>{s=_,a=S,r.push({x:_,y:S})};for(;c<e.length;){if(f(e[c])&&(i=e[c++]),!i)throw new Error(`Invalid path data: ${n}`);const _=i===i.toLowerCase();switch(i.toUpperCase()){case"M":{let S=!0;for(;h();){const m=u()+(_?s:0),p=u()+(_?a:0);S&&(r=[],t.push(r),o=m,l=p,S=!1),d(m,p)}i=_?"l":"L";break}case"L":for(;h();){const S=u()+(_?s:0),m=u()+(_?a:0);d(S,m)}break;case"H":for(;h();){const S=u()+(_?s:0);d(S,a)}break;case"V":for(;h();){const S=u()+(_?a:0);d(s,S)}break;case"Z":s=o,a=l,i=void 0;break;default:throw new Error(`Unsupported path command: ${i}`)}}return t}function $x(n){const e=n[0],t=n.at(-1);return e.x===t.x&&e.y===t.y?n.slice(0,-1):n}function Kx(n){return new at(n)}function jx(n){const e=[],t=new Map,i=[],r=[],s=({x:a,y:o})=>{const l=`${a.toFixed(3)},${o.toFixed(3)}`;if(!t.has(l)){const c=a-Mt.x,f=o-Mt.y,h=Math.min(c,Mt.width-c,f,Mt.height-f),u=c/Mt.width,d=f/Mt.height;t.set(l,e.length),e.push({baseX:c,baseY:f,x:c,y:f,z:0,amplitudeX:h?Math.min(16,Math.max(6,h*.38)):0,amplitudeY:h?Math.min(12,Math.max(5,h*.3)):0,amplitudeZ:h?Math.min(At.depth,Math.max(6,h*.5)):0,interactionX:0,interactionY:0,interactionZ:0,interactionTargetX:0,interactionTargetY:0,interactionTargetZ:0,phase:(u*1.25+d*.75)*Math.PI})}return t.get(l)};return n.forEach(a=>{const o=Kx(a.getAttribute("fill"));Zx(a.getAttribute("d")).forEach(l=>{const c=$x(l),f=c.map(s),h=c.map(({x:u,y:d})=>new ot(u,d));yl.triangulateShape(h,[]).forEach(u=>{u.forEach(d=>{i.push(f[d]),r.push(o.r,o.g,o.b)})})})}),{colors:new Float32Array(r),triangleVertexIndices:new Uint16Array(i),vertices:e}}function Jx(n){const e=document.createElement("canvas"),t=n[0].ownerSVGElement,i=[...t.querySelectorAll(":scope > path[fill]")].find(R=>{const I=R.getBBox();return I.x===Mt.x&&I.y===Mt.y&&I.width===Mt.width&&I.height===Mt.height}),{colors:r,triangleVertexIndices:s,vertices:a}=jx(n),o=new Float32Array(s.length*3),l=new $t(o,3),c=new gn,f=new Vd({metalness:0,roughness:At.roughness,side:yn,vertexColors:!0}),h=new _n(c,f),u=new cf({alpha:!0,antialias:!0,canvas:e,powerPreference:"high-performance"}),d=new Hu,_=new is(0,Mt.width,0,Mt.height,.1,500),S=new Yd(16777215,At.ambientIntensity),m=new Xd(16777215,At.lightIntensity),p={progress:0},M={active:!1,x:0,y:0,lastX:0,lastY:0,lastTime:0,targetVelocityX:0,targetVelocityY:0,velocityX:0,velocityY:0};let y=0,T=performance.now();e.className="illustration__fractal",e.setAttribute("aria-hidden","true"),t.parentElement.prepend(e),i.style.visibility="hidden",n.forEach(R=>{R.style.visibility="hidden"}),l.setUsage(bh),c.setAttribute("position",l),c.setAttribute("color",new $t(r,3)),h.frustumCulled=!1,_.position.z=200,m.target.position.set(Mt.width/2,Mt.height/2,0),d.add(h,S,m,m.target),u.outputColorSpace=Yt,u.setClearColor(0,0);const D=()=>{M.active=!1,M.lastTime=0,M.targetVelocityX=0,M.targetVelocityY=0,a.forEach(R=>{R.interactionTargetX=0,R.interactionTargetY=0,R.interactionTargetZ=0})},b=R=>{const I=e.getBoundingClientRect(),A=(R.clientX-I.left)/I.width*Mt.width,N=(R.clientY-I.top)/I.height*Mt.height;if(!(A>=0&&A<=Mt.width&&N>=0&&N<=Mt.height)){D();return}if(!M.active)M.active=!0,M.lastX=A,M.lastY=N,M.lastTime=R.timeStamp;else{const Y=Math.min(50,Math.max(8,R.timeStamp-M.lastTime)),C=1e3/60/Y;let B=(A-M.lastX)*C,O=(N-M.lastY)*C,j=Math.hypot(B,O);if(j>At.maximumInteractionSpeed){const z=At.maximumInteractionSpeed/j;B*=z,O*=z,j=At.maximumInteractionSpeed}M.targetVelocityX=B,M.targetVelocityY=O,a.forEach(z=>{if(!z.amplitudeX)return;const J=Math.hypot(z.x-A,z.y-N),ue=Math.max(0,1-J/At.interactionRadius)**2;z.interactionTargetX=B*At.interactionStrength*ue,z.interactionTargetY=O*At.interactionStrength*ue,z.interactionTargetZ=j*At.interactionLift*ue}),M.lastX=A,M.lastY=N,M.lastTime=R.timeStamp}M.x=A,M.y=N};t.parentElement.addEventListener("pointermove",b,{passive:!0}),t.parentElement.addEventListener("pointerleave",D);const w=()=>{const R=Math.min(window.devicePixelRatio||1,Wx);y!==R&&(y=R,u.setPixelRatio(y),u.setSize(Mt.width,Mt.height,!1))};return{render:()=>{w();const R=performance.now(),I=Math.min(2,(R-T)/(1e3/60));T=R,M.velocityX+=(M.targetVelocityX-M.velocityX)*At.lightSmoothing*I,M.velocityY+=(M.targetVelocityY-M.velocityY)*At.lightSmoothing*I,M.targetVelocityX*=At.lightDecay**I,M.targetVelocityY*=At.lightDecay**I,a.forEach(A=>{const N=Math.sin(p.progress+A.phase),W=Math.sin(p.progress*2-A.phase*.5),B=1-(1-(Math.abs(A.interactionTargetX)+Math.abs(A.interactionTargetY)+Math.abs(A.interactionTargetZ)>.05?At.interactionFollow:At.interactionRelease))**I;A.interactionX+=(A.interactionTargetX-A.interactionX)*B,A.interactionY+=(A.interactionTargetY-A.interactionY)*B,A.interactionZ+=(A.interactionTargetZ-A.interactionZ)*B,A.interactionTargetX*=At.interactionTargetDecay**I,A.interactionTargetY*=At.interactionTargetDecay**I,A.interactionTargetZ*=At.interactionTargetDecay**I,A.x=A.baseX+A.amplitudeX*(N*.72+W*.28)+A.interactionX,A.y=A.baseY+A.amplitudeY*(Math.cos(p.progress+A.phase*.8)*.72+Math.sin(p.progress*2+A.phase)*.28)+A.interactionY,A.z=A.amplitudeZ*(Math.sin(p.progress-A.phase)*.72+Math.sin(p.progress*2+A.phase*.5)*.28)+A.interactionZ}),s.forEach((A,N)=>{const W=a[A],Y=N*3;o[Y]=W.x,o[Y+1]=W.y,o[Y+2]=W.z}),l.needsUpdate=!0,c.computeVertexNormals(),m.position.set(Mt.width/2+Math.cos(p.progress)*Mt.width+M.velocityX*3,Mt.height/2+Math.sin(p.progress)*Mt.height+M.velocityY*3,140),u.render(d,_)},state:p}}function Qx(n,e){const t=[...n.querySelectorAll(":scope > path")],i=Ki(t.filter(p=>zs(p,{x:404,y:64,width:60,height:60})),"disc"),r=Ki(t.filter(p=>zs(p,{x:144,y:224,width:20,height:20})),"split-disc"),s=Ki([[...n.querySelectorAll(":scope > g[mask]")][1]],"gear")[0],a=[...e.querySelectorAll(":scope > g[mask]")][0],o=[...a.querySelectorAll(":scope > path")][0],l=e.querySelector(":scope > mask"),c=Ki([l.querySelector(":scope > path")],"dial-mask")[0],f=Ki([e.querySelector(':scope > path[fill="#6439ED"]:last-of-type')],"dial-cap")[0],h=e.querySelector(':scope > rect[x="44"]'),u=h.cloneNode(),d=[...e.querySelectorAll(':scope > path[fill="#F7C595"]')].find(p=>zs(p,{x:44,y:414,width:52,height:26})),_=document.createElementNS("http://www.w3.org/2000/svg","mask"),S=document.createElementNS("http://www.w3.org/2000/svg","path");_.id="illustration-small-dial-mask",_.setAttribute("maskUnits","userSpaceOnUse"),_.setAttribute("x","44"),_.setAttribute("y","426"),_.setAttribute("width","28"),_.setAttribute("height","28"),S.setAttribute("d","M44 440h28v14H44z"),S.setAttribute("fill","#fff"),_.append(S),e.prepend(_),h.after(u),u.setAttribute("mask",`url(#${_.id})`),Ki([S],"small-dial-mask"),a.before(o),l.setAttribute("x","234"),l.setAttribute("y","434"),l.setAttribute("width","252"),l.setAttribute("height","252");const m=[...e.querySelectorAll(":scope > path[fill]")].filter(p=>{const M=p.getBBox();return Yx.has(p.getAttribute("fill").toLowerCase())&&zs(p,{x:0,y:320,width:240,height:120})&&M.width*M.height<2e4});return{dialCap:f,dialCircle:a.querySelector(":scope > circle"),dialEllipse:a.querySelector(":scope > ellipse"),dialMaskPath:c,disc:i,fractal:m,gear:s,knob:n.querySelector(':scope > rect[x="345"]'),smallDialMaskPath:S,smallDialReveal:u,smallDialSegment:d,splitDisc:r}}function Br(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}function Mr(n,e){return n+Math.random()*(e-n)}function Qi(n){return n[Math.floor(Math.random()*n.length)]}function _u(n){return(Math.round(n/90)%4+4)%4}function Ur(n,e){return(Math.round(n/e)*e%360+360)%360}function zr(n){if(n==="gear"){ft.gear=Ur(ft.gear,90),Ir(Rt.gear,{rotate:ft.gear});return}if(n==="disc"){ft.disc=Ur(ft.disc,90),ft.splitDisc=Ur(ft.splitDisc,90),Ir(Rt.disc,{rotate:ft.disc}),Ir(Rt.splitDisc,{rotate:ft.splitDisc});return}if(n==="dial"){ft.dial=Ur(ft.dial,90),Ir([Rt.dialMaskPath,Rt.dialCap],{rotate:ft.dial});return}ft.smallDial=Ur(ft.smallDial,90),Ir(Rt.smallDialMaskPath,{rotate:ft.smallDial})}function ev(){["gear","disc","dial","smallDial"].forEach(zr)}function tv(n,e,t,i=0){const r=n.getAttribute(e),s=Jr(n,{[e]:[r,t,r],opacity:[1,.82,1],delay:i,duration:Mr(1200,1700),ease:"inOut(3)",onComplete:()=>Qr.delete(s)});Qr.add(s)}function nv(){tv(Rt.knob,"fill",Br("--color-secondary"),180)}function iv(){if(ar){ar.play();return}ar=Jr(ca.state,{progress:Math.PI*2,duration:At.duration,ease:"linear",loop:!0,onUpdate:()=>ca.render()})}function gu(n=[]){const e=["gear","disc","dial","smallDial"],t=e.filter(i=>i!==Uf&&!n.includes(i));return Qi(t.length?t:e)}function xu(n,e,t){const i=Mr(680,1080);if(e==="gear"){ft.gear-=Qi([90,180]),n.add(Rt.gear,{rotate:ft.gear,duration:i,onComplete:()=>zr(e)},t);return}if(e==="disc"){ft.disc+=Qi([90,180]),n.add(Rt.disc,{rotate:ft.disc,duration:i,onComplete:()=>zr(e)},t),Math.random()<.7&&(ft.splitDisc-=Qi([90,180]),n.add(Rt.splitDisc,{rotate:ft.splitDisc,duration:i*.8},t+Mr(i*.08,i*.15)));return}const r=Br("--color-accent"),s=Br("--color-highlight"),a=Br("--color-primary"),o=Br("--color-secondary"),l="#f7c595";if(e==="dial"){ft.dial+=Qi([90,90,180]);const u=_u(ft.dial),d=[s,a,o,l],_=[r,o,l,a],S=[a,l,s,o];n.add(Rt.dialMaskPath,{rotate:ft.dial,duration:i,onComplete:()=>zr(e)},t).add(Rt.dialCap,{fill:S[u],rotate:ft.dial,duration:i},t).add(Rt.dialEllipse,{fill:d[u],duration:i},t).add(Rt.dialCircle,{fill:_[u],duration:i},t);return}ft.smallDial-=Qi([90,90,180]);const c=_u(Math.abs(ft.smallDial)),f=[l,o,r,l],h=[r,l,s,o];n.add(Rt.smallDialSegment,{fill:f[c],duration:i},t).add(Rt.smallDialMaskPath,{rotate:ft.smallDial,duration:i,onComplete:()=>zr(e)},t).add(Rt.smallDialReveal,{fill:h[c],duration:i},t)}function Nf(n=Mr(350,950)){window.clearTimeout(ll),!(!ua||!Rt)&&(ll=window.setTimeout(rv,n))}function rv(){if(!ua||!Rt||kr)return;const n=gu(),e=Math.random()<.45?gu([n]):void 0;Uf=n,!Qr.size&&Math.random()<.35&&nv(),kr=!0,zn=Lx({defaults:{ease:"inOut(3)"},onComplete:()=>{ev(),kr=!1,Nf(Mr(350,950))}}),xu(zn,n,0),e&&xu(zn,e,Mr(180,360))}function sv(n){if(ua=n,window.clearTimeout(ll),ua){iv(),kr?(zn==null||zn.play(),Qr.forEach(e=>e.play())):Nf(500);return}kr&&(zn==null||zn.complete()),Qr.forEach(e=>e.complete()),ar==null||ar.pause()}async function av(){const[n,e]=await Promise.all([mu(".base","/assets/illus-b.svg","illustration-base"),mu(".top","/assets/illus-t.svg","illustration-top")]);Rt=Qx(n,e),ca=Jx(Rt.fractal),ca.render(),If.classList.add("illustration--interactive"),Pf(sv)}av().catch(n=>console.error(n));const On=document.querySelector(".zigzag path"),ov=document.querySelectorAll(".links a"),or=On.getTotalLength(),cl={mail:"#B9FEDA",twitter:"#DBDDF0",linkedin:"#FCE5CF"},vu={easing:"easeInOutQuad",duration:300},lv=800/or;class cv{constructor(){yr(this,"animatePath",e=>{var i;const t=this.currentPath?parseFloat(On.style.strokeDashoffset):-or;(i=this.currentPath)==null||i.pause(),this.currentPath=Jr(On,{strokeDashoffset:[t,e],...vu,duration:Math.abs(e-t)*lv})});yr(this,"animateColor",e=>{var t;(t=this.currentColor)==null||t.pause(),this.lastColor=e,this.currentColor=Jr(On,{stroke:e,...vu})});yr(this,"setPathImmediately",e=>{var t;(t=this.currentPath)==null||t.pause(),On.style.strokeDashoffset=e});yr(this,"setColorImmediately",e=>{var t;(t=this.currentColor)==null||t.pause(),this.lastColor=e,On.style.stroke=e});this.currentPath=null,this.currentColor=null,this.lastColor=cl.mail,On.style.strokeDasharray=or,On.style.strokeDashoffset=-or}}const Vs=new cv;ov.forEach(n=>{const e=t=>{const r=parseFloat(On.style.strokeDashoffset)<=-or;t?(r?Vs.setColorImmediately(cl[n.id]):Vs.animateColor(cl[n.id]),Vs.animatePath(0)):Vs.animatePath(-or)};n.addEventListener("mouseenter",()=>e(!0)),n.addEventListener("mouseleave",()=>e(!1))});const uv="http://www.w3.org/2000/svg",fv=[...document.querySelectorAll(".project-link, .links a")];let Mu=[],Su;function ai(n,e={}){const t=document.createElementNS(uv,n);return Object.entries(e).forEach(([i,r])=>t.setAttribute(i,r)),t}function hv(n,e){const t=n.textContent,i=[...n.childNodes].find(({nodeType:A})=>A===Node.TEXT_NODE),r=n.getBoundingClientRect(),s=getComputedStyle(n),a=document.createElement("canvas").getContext("2d");a.font=s.font;const o=a.measureText(t),c=(r.height-o.actualBoundingBoxAscent-o.actualBoundingBoxDescent)/2+o.actualBoundingBoxAscent+3.5,f=`project-link-pattern-${e}`,h=`project-link-mask-${e}`,u=ai("svg",{class:"project-link__underline",viewBox:`0 0 ${r.width} ${r.height}`,"aria-hidden":"true",focusable:"false"}),d=ai("defs");let _="M-12 2";for(let A=-12;A<24;A+=6)_+=`C${A+1} 0 ${A+2} 0 ${A+3} 2S${A+5} 4 ${A+6} 2`;const S=ai("pattern",{id:f,x:"0",y:String(c),width:"12",height:"4",patternUnits:"userSpaceOnUse"}),m=ai("path",{d:_,fill:"none","shape-rendering":"geometricPrecision",stroke:"#6439ed","stroke-linecap":"round","stroke-linejoin":"round","stroke-opacity":".55","stroke-width":"1.2"}),p=ai("mask",{id:h,x:"-4",y:"0",width:String(r.width+8),height:String(r.height),maskUnits:"userSpaceOnUse"}),M=ai("rect",{x:"-4",y:"0",width:String(r.width+8),height:String(r.height),fill:"#fff"}),y=[...t].flatMap((A,N)=>{if(!/[gjpqy]/i.test(A))return[];const W=document.createRange();W.setStart(i,N),W.setEnd(i,N+1);const Y=W.getBoundingClientRect(),C=Y.width+.75;return[ai("rect",{x:String(Y.left-r.left+(Y.width-C)/2),y:String(c-2),width:String(C),height:"8",rx:"0.5",fill:"#000"})]}),T=ai("rect",{x:"0",y:String(c),width:String(r.width),height:"4",fill:`url(#${f})`,mask:`url(#${h})`}),D={offset:0};let b;S.append(m),p.append(M,...y),d.append(S,p),u.append(d,T),n.append(u);const w=()=>{if(!b){b=Jr(D,{offset:12,duration:800,ease:"linear",loop:!0,onUpdate:()=>S.setAttribute("x",String(D.offset))});return}b.play()},x=()=>{b==null||b.pause()},R=()=>{n.matches(":focus-visible")||x()},I=()=>{n.matches(":hover")||x()};return n.addEventListener("mouseenter",w),n.addEventListener("mouseleave",R),n.addEventListener("focus",w),n.addEventListener("blur",I),n.matches(":hover, :focus-visible")&&w(),{destroy(){b==null||b.pause(),n.removeEventListener("mouseenter",w),n.removeEventListener("mouseleave",R),n.removeEventListener("focus",w),n.removeEventListener("blur",I),u.remove()}}}function Ff(){Mu.forEach(({destroy:n})=>n()),Mu=fv.map(hv)}document.fonts.ready.then(Ff);window.addEventListener("resize",()=>{window.cancelAnimationFrame(Su),Su=window.requestAnimationFrame(Ff)});
