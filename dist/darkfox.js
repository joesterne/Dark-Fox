(()=>{var Wl="170";var Ru=0,yc=1,Cu=2;var Ih=1,Xl=2,Vn=3,ri=0,Xe=1,Ze=2,ii=0,si=1,mn=2,_c=3,Mc=4,ql=5,Gn=100,Pu=101,Iu=102,Lu=103,Du=104,Uu=200,po=201,Nu=202,Fu=203,Ea=204,wa=205,zu=206,Bu=207,Ou=208,Hu=209,ku=210,Vu=211,Gu=212,Wu=213,Xu=214,Ta=0,Aa=1,Ra=2,ss=3,Ca=4,Pa=5,Ia=6,La=7,Lh=0,qu=1,Yu=2,Ln=0,$u=1,Zu=2,Ju=3,Ku=4,ju=5,Qu=6,td=7;var Dh=300,rs=301,os=302,Da=303,Ua=304,mo=306,oi=1e3,Si=1001,Na=1002,an=1003,ed=1004;var lr=1005;var Be=1006,Xo=1007;var Tn=1008;var ln=1009,Uh=1010,Nh=1011,ks=1012,Yl=1013,qn=1014,In=1015,vn=1016,$l=1017,Zl=1018,as=1020,Fh=35902,zh=1021,Bh=1022,on=1023,Oh=1024,Hh=1025,es=1026,ls=1027,tr=1028,Jl=1029,kh=1030,Kl=1031;var jl=1033,Fr=33776,zr=33777,Br=33778,Or=33779,Fa=35840,za=35841,Ba=35842,Oa=35843,Ha=36196,ka=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,$a=37813,Za=37814,Ja=37815,Ka=37816,ja=37817,Qa=37818,tl=37819,el=37820,nl=37821,Hr=36492,il=36494,sl=36495,Vh=36283,rl=36284,ol=36285,al=36286;var kr=2300,ll=2301,qo=2302,bc=2400,Sc=2401,Ec=2402;var nd=3200,id=3201;var Gh=0,sd=1,Qe="",je="srgb",xs="srgb-linear",go="linear",de="srgb";var zi=7680;var wc=519,rd=512,od=513,ad=514,Wh=515,ld=516,cd=517,hd=518,ud=519,Tc=35044,Xh=35048;var Ac="300 es",Wn=2e3,Vr=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Ns=Math.PI/180,cs=180/Math.PI;function Pi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Ql(s,t){return(s%t+t)%t}function dd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fd(s,t,e){return s!==t?(e-s)/(t-s):0}function Fs(s,t,e){return(1-e)*s+e*t}function pd(s,t,e,n){return Fs(s,t,1-Math.exp(-e*n))}function md(s,t=1){return t-Math.abs(Ql(s,t*2)-t)}function gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function vd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function xd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function yd(s,t){return s+Math.random()*(t-s)}function _d(s){return s*(.5-Math.random())}function Md(s){s!==void 0&&(Rc=s);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(s){return s*Ns}function Sd(s){return s*cs}function Ed(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Td(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ie={DEG2RAD:Ns,RAD2DEG:cs,generateUUID:Pi,clamp:Ue,euclideanModulo:Ql,mapLinear:dd,inverseLerp:fd,lerp:Fs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:vd,randInt:xd,randFloat:yd,randFloatSpread:_d,seededRandom:Md,degToRad:bd,radToDeg:Sd,isPowerOfTwo:Ed,ceilPowerOfTwo:wd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Ad,normalize:Ye,denormalize:ji},it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],w=i[1],b=i[4],_=i[7],L=i[2],C=i[5],I=i[8];return r[0]=o*v+a*w+l*L,r[3]=o*g+a*b+l*C,r[6]=o*p+a*_+l*I,r[1]=c*v+h*w+u*L,r[4]=c*g+h*b+u*C,r[7]=c*p+h*_+u*I,r[2]=f*v+d*w+m*L,r[5]=f*g+d*b+m*C,r[8]=f*p+d*_+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yo=new $t;function qh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rd(){let s=Gr("canvas");return s.style.display="block",s}var Cc={};function Ds(s){s in Cc||(Cc[s]=!0,console.warn(s))}function Cd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Id(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qe?go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pc=[.64,.33,.3,.6,.15,.06],Ic=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[xs]:{primaries:Pc,whitePoint:Lc,transfer:go,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Ic,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:Pc,whitePoint:Lc,transfer:de,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Ic,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});var Bi,cl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Gr("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Wr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($o(i[o].image)):r.push($o(i[o]))}else r=$o(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function $o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dd=0,tn=class s extends ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Si,i=Si,r=Be,o=Tn,a=on,l=ln,c=s.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Pi(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Dh;tn.DEFAULT_ANISOTROPY=1;var oe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(d+1)/2,L=(p+1)/2,C=(h+f)/4,I=(u+v)/4,S=(m+g)/4;return b>_&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=I/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=C/i,r=S/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=I/r,i=S/r),this.set(n,i,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vs=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let L=Math.sqrt(b),C=Math.atan2(L,p*w);g=Math.sin(g*C)/L,a=Math.sin(a*C)/L}let _=a*w;if(l=l*g+f*_,c=c*g+d*_,h=h*g+m*_,u=u*g+v*_,g===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new A,Nc=new Re,Yn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),hr.subVectors(this.max,Ts),Oi.subVectors(t.a,Ts),Hi.subVectors(t.b,Ts),ki.subVectors(t.c,Ts),Kn.subVectors(Hi,Oi),jn.subVectors(ki,Hi),pi.subVectors(Oi,ki);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Jo(e,Oi,Hi,ki,hr)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Oi,Hi,ki,hr))?!1:(ur.crossVectors(Kn,jn),e=[ur.x,ur.y,ur.z],Jo(e,Oi,Hi,ki,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zn=[new A,new A,new A,new A,new A,new A,new A,new A],bn=new A,cr=new Yn,Oi=new A,Hi=new A,ki=new A,Kn=new A,jn=new A,pi=new A,Ts=new A,hr=new A,ur=new A,mi=new A;function Jo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){mi.fromArray(s,r);let a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ud=new Yn,As=new A,Ko=new A,li=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Ko)),this.expandByPoint(As.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new A,jo=new A,dr=new A,Qn=new A,Qo=new A,fr=new A,ta=new A,qr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jo.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(jo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=Qn.dot(this.direction),l=-Qn.dot(dr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jo).addScaledVector(dr,f),d}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){Qo.subVectors(e,t),fr.subVectors(n,t),ta.crossVectors(Qo,fr);let o=this.direction.dot(ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(fr.crossVectors(Qn,fr));if(l<0)return null;let c=a*this.direction.dot(Qo.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(ta);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,v,g)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f+v*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ti.crossVectors(n,sn),ti.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ti.crossVectors(n,sn)),ti.normalize(),pr.crossVectors(sn,ti),i[0]=ti.x,i[4]=pr.x,i[8]=sn.x,i[1]=ti.y,i[5]=pr.y,i[9]=sn.y,i[2]=ti.z,i[6]=pr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],w=n[3],b=n[7],_=n[11],L=n[15],C=i[0],I=i[4],S=i[8],y=i[12],x=i[1],T=i[5],F=i[9],U=i[13],D=i[2],W=i[6],H=i[10],q=i[14],O=i[3],tt=i[7],j=i[11],lt=i[15];return r[0]=o*C+a*x+l*D+c*O,r[4]=o*I+a*T+l*W+c*tt,r[8]=o*S+a*F+l*H+c*j,r[12]=o*y+a*U+l*q+c*lt,r[1]=h*C+u*x+f*D+d*O,r[5]=h*I+u*T+f*W+d*tt,r[9]=h*S+u*F+f*H+d*j,r[13]=h*y+u*U+f*q+d*lt,r[2]=m*C+v*x+g*D+p*O,r[6]=m*I+v*T+g*W+p*tt,r[10]=m*S+v*F+g*H+p*j,r[14]=m*y+v*U+g*q+p*lt,r[3]=w*C+b*x+_*D+L*O,r[7]=w*I+b*T+_*W+L*tt,r[11]=w*S+b*F+_*H+L*j,r[15]=w*y+b*U+_*q+L*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],w=u*g*c-v*f*c+v*l*d-a*g*d-u*l*p+a*f*p,b=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,_=h*v*c-m*u*c+m*a*d-o*v*d-h*a*p+o*u*p,L=m*u*l-h*v*l-m*a*f+o*v*f+h*a*g-o*u*g,C=e*w+n*b+i*_+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=w*I,t[1]=(v*f*r-u*g*r-v*i*d+n*g*d+u*i*p-n*f*p)*I,t[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*p+n*l*p)*I,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*I,t[4]=b*I,t[5]=(h*g*r-m*f*r+m*i*d-e*g*d-h*i*p+e*f*p)*I,t[6]=(m*l*r-o*g*r-m*i*c+e*g*c+o*i*p-e*l*p)*I,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*I,t[8]=_*I,t[9]=(m*u*r-h*v*r-m*n*d+e*v*d+h*n*p-e*u*p)*I,t[10]=(o*v*r-m*a*r+m*n*c-e*v*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*I,t[12]=L*I,t[13]=(h*v*i-m*u*i+m*n*f-e*v*f-h*n*g+e*u*g)*I,t[14]=(m*a*i-o*v*i-m*n*l+e*v*l+o*n*g-e*a*g)*I,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,v=o*h,g=o*u,p=a*u,w=l*c,b=l*h,_=l*u,L=n.x,C=n.y,I=n.z;return i[0]=(1-(v+p))*L,i[1]=(d+_)*L,i[2]=(m-b)*L,i[3]=0,i[4]=(d-_)*C,i[5]=(1-(f+p))*C,i[6]=(g+w)*C,i[7]=0,i[8]=(m+b)*I,i[9]=(g-w)*I,i[10]=(1-(f+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Vi.set(i[0],i[1],i[2]).length(),o=Vi.set(i[4],i[5],i[6]).length(),a=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);let c=1/r,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===Wn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Vr)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,m,v;if(a===Wn)m=(o+r)*u,v=-2*u;else if(a===Vr)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new A,Sn=new Dt,Nd=new A(0,0,0),Fd=new A(1,1,1),ti=new A,pr=new A,sn=new A,Fc=new Dt,zc=new Re,Pe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pe.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,Bc=new A,Gi=new Re,On=new Dt,mr=new A,Rs=new A,Bd=new A,Od=new Re,Oc=new A(1,0,0),Hc=new A(0,1,0),kc=new A(0,0,1),Vc={type:"added"},Hd={type:"removed"},Wi={type:"childadded",child:null},ea={type:"childremoved",child:null},He=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new Pe,n=new Re,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new $t}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Rs,mr,this.up):On.lookAt(mr,Rs,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(On),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new A(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new A,Hn=new A,na=new A,kn=new A,Xi=new A,qi=new A,Gc=new A,ia=new A,sa=new A,ra=new A,oa=new oe,aa=new oe,la=new oe,Mi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){En.subVectors(i,e),Hn.subVectors(n,e),na.subVectors(t,e);let o=En.dot(En),a=En.dot(Hn),l=En.dot(na),c=Hn.dot(Hn),h=Hn.dot(na),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),la.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),Hn.subVectors(t,e),En.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Xi.subVectors(i,n),qi.subVectors(r,n),ia.subVectors(t,n);let l=Xi.dot(ia),c=qi.dot(ia);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,i);let h=Xi.dot(sa),u=qi.dot(sa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xi,o);ra.subVectors(t,r);let d=Xi.dot(ra),m=qi.dot(ra);if(m>=0&&d<=m)return e.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(qi,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Gc.subVectors(r,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Gc,a);let p=1/(g+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},gr={h:0,s:0,l:0};function ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Ql(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ie.fromWorkingColorSpace(We.copy(this),t),Math.round(Ue(We.r*255,0,255))*65536+Math.round(Ue(We.g*255,0,255))*256+Math.round(Ue(We.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(We.copy(this),e);let n=We.r,i=We.g,r=We.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=je){ie.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(gr);let n=Fs(ei.h,gr.h,e),i=Fs(ei.s,gr.s,e),r=Fs(ei.l,gr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new _t;_t.NAMES=Yh;var kd=0,ci=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Pi(),this.name="",this.blending=si,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$r=class extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new A,vr=new it,se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}};var Zr=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jr=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vd=0,pn=new Dt,ha=new He,Yi=new A,rn=new Yn,Cs=new Yn,ze=new A,_e=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Jr:Zr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(rn.min,Cs.min),rn.expandByPoint(ze),ze.addVectors(rn.max,Cs.max),rn.expandByPoint(ze)):(rn.expandByPoint(Cs.min),rn.expandByPoint(Cs.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),ze.add(Yi)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new A,l[S]=new A;let c=new A,h=new A,u=new A,f=new it,d=new it,m=new it,v=new A,g=new A;function p(S,y,x){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),a[S].add(v),a[y].add(v),a[x].add(v),l[S].add(g),l[y].add(g),l[x].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let S=0,y=w.length;S<y;++S){let x=w[S],T=x.start,F=x.count;for(let U=T,D=T+F;U<D;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new A,_=new A,L=new A,C=new A;function I(S){L.fromBufferAttribute(i,S),C.copy(L);let y=a[S];b.copy(y),b.sub(L.multiplyScalar(L.dot(y))).normalize(),_.crossVectors(C,y);let T=_.dot(l[S])<0?-1:1;o.setXYZW(S,b.x,b.y,b.z,T)}for(let S=0,y=w.length;S<y;++S){let x=w[S],T=x.start,F=x.count;for(let U=T,D=T+F;U<D;U+=3)I(t.getX(U+0)),I(t.getX(U+1)),I(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new se(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new Dt,gi=new qr,xr=new li,Xc=new A,yr=new A,_r=new A,Mr=new A,ua=new A,br=new A,qc=new A,Sr=new A,kt=class extends He{constructor(t=new _e,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ua.fromBufferAttribute(u,t),o?br.addScaledVector(ua,h):br.addScaledVector(ua.sub(e),h))}e.add(br)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(xr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(xr,Xc)===null||gi.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],w=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=w,L=b;_<L;_+=3){let C=a.getX(_),I=a.getX(_+1),S=a.getX(_+2);i=Er(this,p,t,n,c,h,u,C,I,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let w=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);i=Er(this,o,t,n,c,h,u,w,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],w=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=w,L=b;_<L;_+=3){let C=_,I=_+1,S=_+2;i=Er(this,p,t,n,c,h,u,C,I,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let w=g,b=g+1,_=g+2;i=Er(this,o,t,n,c,h,u,w,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Gd(s,t,e,n,i,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ri,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:s}}function Er(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,yr),s.getVertexPosition(l,_r),s.getVertexPosition(c,Mr);let h=Gd(s,t,e,n,yr,_r,Mr,qc);if(h){let u=new A;Mi.getBarycoord(qc,yr,_r,Mr,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,u,new it)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Mi.getNormal(yr,_r,Mr,f.normal),h.face=f,h.barycoord=u}return h}var Ot=class s extends _e{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function m(v,g,p,w,b,_,L,C,I,S,y){let x=_/I,T=L/S,F=_/2,U=L/2,D=C/2,W=I+1,H=S+1,q=0,O=0,tt=new A;for(let j=0;j<H;j++){let lt=j*T-U;for(let Et=0;Et<W;Et++){let Xt=Et*x-F;tt[v]=Xt*w,tt[g]=lt*b,tt[p]=D,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[p]=C>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Et/I),u.push(1-j/S),q+=1}}for(let j=0;j<S;j++)for(let lt=0;lt<I;lt++){let Et=f+lt+W*j,Xt=f+lt+W*(j+1),Y=f+(lt+1)+W*(j+1),Q=f+(lt+1)+W*j;l.push(Et,Xt,Q),l.push(Xt,Y,Q),O+=6}a.addGroup(d,O,y),d+=O,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=hs(s[e]);for(let i in n)t[i]=n[i]}return t}function Wd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $h(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Xd={clone:hs,merge:$e},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fe=class extends ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Kr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new A,Yc=new it,$c=new it,Ce=class extends Kr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Zi=1,Gs=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ce($i,Zi,t,e);i.layers=this.layers,this.add(i);let r=new Ce($i,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Ce($i,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Ce($i,Zi,t,e);a.layers=this.layers,this.add(a);let l=new Ce($i,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Ce($i,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jr=class extends tn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ws=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ot(5,5,5),r=new fe({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:ii});r.uniforms.tEquirect.value=e;let o=new kt(i,r),a=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Be),new Gs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},da=new A,$d=new A,Zd=new $t,wn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=da.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zd.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new li,wr=new A,Xs=class{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,o=new wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],v=i[10],g=i[11],p=i[12],w=i[13],b=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,g-d,_-p).normalize(),n[1].setComponents(l+r,f+c,g+d,_+p).normalize(),n[2].setComponents(l+o,f+h,g+m,_+w).normalize(),n[3].setComponents(l-o,f-h,g-m,_-w).normalize(),n[4].setComponents(l-a,f-u,g-v,_-b).normalize(),e===Wn)n[5].setComponents(l+a,f+u,g+v,_+b).normalize();else if(e===Vr)n[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wr.x=i.normal.x>0?t.max.x:t.min.x,wr.y=i.normal.y>0?t.max.y:t.min.y,wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ee=class s extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let w=p*f-o;for(let b=0;b<c;b++){let _=b*u-r;m.push(_,-w,0),v.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let b=w+c*p,_=w+c*(p+1),L=w+1+c*(p+1),C=w+1+c*p;d.push(b,_,C),d.push(_,L,C)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
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
#endif`,Jf=`struct PhysicalMaterial {
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
}`,Kf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,E0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:_f,common:Mf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:zf,fog_pars_fragment:Bf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Hf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:$f,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Kf,lights_fragment_maps:jf,lights_fragment_end:Qf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:vp,normal_pars_vertex:xp,normal_vertex:yp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Ep,opaque_fragment:wp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:zp,skinning_pars_vertex:Bp,skinning_vertex:Op,skinnormal_vertex:Hp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:$p,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:Kp,background_frag:jp,backgroundCube_vert:Qp,backgroundCube_frag:t0,cube_vert:e0,cube_frag:n0,depth_vert:i0,depth_frag:s0,distanceRGBA_vert:r0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:v0,meshnormal_frag:x0,meshphong_vert:y0,meshphong_frag:_0,meshphysical_vert:M0,meshphysical_frag:b0,meshtoon_vert:S0,meshtoon_frag:E0,points_vert:w0,points_frag:T0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:P0},ut={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Pn={basic:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new _t(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:$e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:$e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new _t(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:$e([ut.points,ut.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:$e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:$e([ut.common,ut.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:$e([ut.sprite,ut.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:$e([ut.common,ut.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:$e([ut.lights,ut.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Pn.physical={uniforms:$e([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Tr={r:0,b:0,g:0},xi=new Pe,I0=new Dt;function L0(s,t,e,n,i,r,o){let a=new _t(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function v(w){let b=!1,_=m(w);_===null?p(a,l):_&&_.isColor&&(p(_,1),b=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(w,b){let _=m(b);_&&(_.isCubeTexture||_.mapping===mo)?(h===void 0&&(h=new kt(new Ot(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:hs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(b.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(xi)),h.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new kt(new Ee(2,2),new fe({name:"BackgroundMaterial",uniforms:hs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(Tr,$h(s)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:v,addToRenderList:g}}function D0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(x,T,F,U,D){let W=!1,H=u(U,F,T);r!==H&&(r=H,c(r.object)),W=d(x,U,F,D),W&&m(x,U,F,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(x,T,F,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,T,F){let U=F.wireframe===!0,D=n[x.id];D===void 0&&(D={},n[x.id]=D);let W=D[T.id];W===void 0&&(W={},D[T.id]=W);let H=W[U];return H===void 0&&(H=f(l()),W[U]=H),H}function f(x){let T=[],F=[],U=[];for(let D=0;D<e;D++)T[D]=0,F[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:U,object:x,attributes:{},index:null}}function d(x,T,F,U){let D=r.attributes,W=T.attributes,H=0,q=F.getAttributes();for(let O in q)if(q[O].location>=0){let j=D[O],lt=W[O];if(lt===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function m(x,T,F,U){let D={},W=T.attributes,H=0,q=F.getAttributes();for(let O in q)if(q[O].location>=0){let j=W[O];j===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));let lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),D[O]=lt,H++}r.attributes=D,r.attributesNum=H,r.index=U}function v(){let x=r.newAttributes;for(let T=0,F=x.length;T<F;T++)x[T]=0}function g(x){p(x,0)}function p(x,T){let F=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;F[x]=1,U[x]===0&&(s.enableVertexAttribArray(x),U[x]=1),D[x]!==T&&(s.vertexAttribDivisor(x,T),D[x]=T)}function w(){let x=r.newAttributes,T=r.enabledAttributes;for(let F=0,U=T.length;F<U;F++)T[F]!==x[F]&&(s.disableVertexAttribArray(F),T[F]=0)}function b(x,T,F,U,D,W,H){H===!0?s.vertexAttribIPointer(x,T,F,D,W):s.vertexAttribPointer(x,T,F,U,D,W)}function _(x,T,F,U){v();let D=U.attributes,W=F.getAttributes(),H=T.defaultAttributeValues;for(let q in W){let O=W[q];if(O.location>=0){let tt=D[q];if(tt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){let j=tt.normalized,lt=tt.itemSize,Et=t.get(tt);if(Et===void 0)continue;let Xt=Et.buffer,Y=Et.type,Q=Et.bytesPerElement,ht=Y===s.INT||Y===s.UNSIGNED_INT||tt.gpuType===Yl;if(tt.isInterleavedBufferAttribute){let nt=tt.data,It=nt.stride,Bt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<O.locationSize;Ut++)p(O.location+Ut,nt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ut=0;Ut<O.locationSize;Ut++)g(O.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let Ut=0;Ut<O.locationSize;Ut++)b(O.location+Ut,lt/O.locationSize,Y,j,It*Q,(Bt+lt/O.locationSize*Ut)*Q,ht)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)p(O.location+nt,tt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<O.locationSize;nt++)g(O.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let nt=0;nt<O.locationSize;nt++)b(O.location+nt,lt/O.locationSize,Y,j,lt*Q,lt/O.locationSize*nt*Q,ht)}}else if(H!==void 0){let j=H[q];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(O.location,j);break;case 3:s.vertexAttrib3fv(O.location,j);break;case 4:s.vertexAttrib4fv(O.location,j);break;default:s.vertexAttrib1fv(O.location,j)}}}}w()}function L(){S();for(let x in n){let T=n[x];for(let F in T){let U=T[F];for(let D in U)h(U[D].object),delete U[D];delete T[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let T=n[x.id];for(let F in T){let U=T[F];for(let D in U)h(U[D].object),delete U[D];delete T[F]}delete n[x.id]}function I(x){for(let T in n){let F=n[T];if(F[x.id]===void 0)continue;let U=F[x.id];for(let D in U)h(U[D].object),delete U[D];delete F[x.id]}}function S(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function U0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==on&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let S=I===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ln&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!S)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function F0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new wn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:n,b=w*4,_=p.clippingState||null;l.value=_,_=h(m,f,b,d);for(let L=0;L!==b;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=d+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=d;b!==v;++b,_+=4)o.copy(u[b]).applyMatrix4(w,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function z0(s){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=rs:a===Ua&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ws(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ei=class extends Kr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Zc=[.125,.215,.35,.446,.526,.582],bi=20,fa=new Ei,Jc=new _t,pa=null,ma=0,ga=0,va=!1,_i=(1+Math.sqrt(5))/2,Ji=1/_i,Kc=[new A(-_i,Ji,0),new A(_i,Ji,0),new A(-Ji,0,_i),new A(Ji,0,_i),new A(0,_i,-Ji),new A(0,_i,Ji),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=va,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:vn,format:on,colorSpace:xs,depthBuffer:!1},i=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(r)),this._blurMaterial=O0(r,t,e)}return i}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,i){let a=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Ln,h.autoClear=!1;let d=new $r({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new kt(new Ot,d),v=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,v=!0):(d.color.copy(Jc),v=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;Ar(i,w*b,p>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(i-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);let p=[],w=0;for(let I=0;I<bi;++I){let S=I/v,y=Math.exp(-S*S/2);p.push(y),I===0?w+=y:I<g&&(w+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let _=this._sizeLods[i],L=3*_*(i>b-Qi?i-b+Qi:0),C=4*(this._cubeSize-_);Ar(e,L,C,3*_,2*_),l.setRenderTarget(e),l.render(u,fa)}};function B0(s){let t=[],e=[],n=[],i=s,r=s-Qi+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Qi?l=Zc[o-s+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*d),b=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let C=0;C<d;C++){let I=C%3*2/3-1,S=C>2?0:-1,y=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];w.set(y,v*m*C),b.set(f,g*m*C);let x=[C,C,C,C,C,C];_.set(x,p*m*C)}let L=new _e;L.setAttribute("position",new se(w,v)),L.setAttribute("uv",new se(b,g)),L.setAttribute("faceIndex",new se(_,p)),t.push(L),i>Qi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(s,t,e){let n=new Oe(s,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function O0(s,t,e){let n=new Float32Array(bi),i=new A(0,1,0);return new fe({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Qc(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function th(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function H0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Ua,h=l===rs||l===os;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new us(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new us(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function k0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function V0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let v=d[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,v=0;if(d!==null){let w=d.array;v=d.version;for(let b=0,_=w.length;b<_;b+=3){let L=w[b+0],C=w[b+1],I=w[b+2];f.push(L,C,C,I,I,L)}}else if(m!==void 0){let w=m.array;v=m.version;for(let b=0,_=w.length/3-1;b<_;b+=3){let L=b+0,C=b+1,I=b+2;f.push(L,C,C,I,I,L)}}else return;let g=new(qh(f)?Jr:Zr)(f,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function G0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let w=0;w<m;w++)p+=d[w]*v[w];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function W0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function X0(s,t,e){let n=new WeakMap,i=new oe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let _=a.attributes.position.count*b,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let C=new Float32Array(_*L*4*u),I=new Xr(C,_,L,u);I.type=In,I.needsUpdate=!0;let S=b*4;for(let x=0;x<u;x++){let T=g[x],F=p[x],U=w[x],D=_*L*4*x;for(let W=0;W<T.count;W++){let H=W*S;d===!0&&(i.fromBufferAttribute(T,W),C[D+H+0]=i.x,C[D+H+1]=i.y,C[D+H+2]=i.z,C[D+H+3]=0),m===!0&&(i.fromBufferAttribute(F,W),C[D+H+4]=i.x,C[D+H+5]=i.y,C[D+H+6]=i.z,C[D+H+7]=0),v===!0&&(i.fromBufferAttribute(U,W),C[D+H+8]=i.x,C[D+H+9]=i.y,C[D+H+10]=i.z,C[D+H+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new it(_,L)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function q0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ds=class extends tn{constructor(t,e,n,i,r,o,a,l,c,h=es){if(h!==es&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=qn),n===void 0&&h===ls&&(n=as),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jh=new tn,eh=new ds(1,1),Kh=new Xr,jh=new Vs,Qh=new jr,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=nh[i];if(r===void 0&&(r=new Float32Array(i),nh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vo(s,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Y0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function K0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;oh.set(n),s.uniformMatrix2fv(this.addr,!1,oh),Fe(e,n)}}function j0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;rh.set(n),s.uniformMatrix3fv(this.addr,!1,rh),Fe(e,n)}}function Q0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;sh.set(n),s.uniformMatrix4fv(this.addr,!1,sh),Fe(e,n)}}function tm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function em(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function sm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function om(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function am(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function lm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=Wh,r=eh):r=Jh,e.setTexture2D(t||r,i)}function cm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jh,i)}function hm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qh,i)}function um(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kh,i)}function dm(s){switch(s){case 5126:return Y0;case 35664:return $0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return om;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(s,t){s.uniform1fv(this.addr,t)}function pm(s,t){let e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function mm(s,t){let e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function gm(s,t){let e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function vm(s,t){let e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xm(s,t){let e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ym(s,t){let e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _m(s,t){s.uniform1iv(this.addr,t)}function Mm(s,t){s.uniform2iv(this.addr,t)}function bm(s,t){s.uniform3iv(this.addr,t)}function Sm(s,t){s.uniform4iv(this.addr,t)}function Em(s,t){s.uniform1uiv(this.addr,t)}function wm(s,t){s.uniform2uiv(this.addr,t)}function Tm(s,t){s.uniform3uiv(this.addr,t)}function Am(s,t){s.uniform4uiv(this.addr,t)}function Rm(s,t,e){let n=this.cache,i=t.length,r=vo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Jh,r[o])}function Cm(s,t,e){let n=this.cache,i=t.length,r=vo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||jh,r[o])}function Pm(s,t,e){let n=this.cache,i=t.length,r=vo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qh,r[o])}function Im(s,t,e){let n=this.cache,i=t.length,r=vo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kh,r[o])}function Lm(s){switch(s){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return _m;case 35667:case 35671:return Mm;case 35668:case 35672:return bm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return wm;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dm(e.type)}},dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},xa=/(\w+)(\])?(\[|\.)?/g;function ah(s,t){s.seq.push(t),s.map[t.id]=t}function Dm(s,t,e){let n=s.name,i=n.length;for(xa.lastIndex=0;;){let r=xa.exec(n),o=xa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ah(e,c===void 0?new ul(a,s,t):new dl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new fl(a),ah(e,u)),e=u}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Dm(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function lh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Um=37297,Nm=0;function Fm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new $t;function zm(s){ie._getMatrix(ch,ie.workingColorSpace,s);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case go:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function hh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Fm(s.getShaderSource(t),o)}else return i}function Bm(s,t){let e=zm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(s,t){let e;switch(t){case $u:e="Linear";break;case Zu:e="Reinhard";break;case Ju:e="Cineon";break;case Ku:e="ACESFilmic";break;case Qu:e="AgX";break;case td:e="Neutral";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rr=new A;function Hm(){ie.getLuminanceCoefficients(Rr);let s=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Vm(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Us(s){return s!==""}function uh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(Wm,qm)}var Xm=new Map;function qm(s,t){let e=Kt[t];if(e===void 0){let n=Xm.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(s){return s.replace(Ym,$m)}function $m(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ph(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Km(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function jm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function Qm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zm(e),c=Jm(e),h=Km(e),u=jm(e),f=Qm(e),d=km(e),m=Vm(r),v=i.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(g=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=pl(o),o=uh(o,e),o=dh(o,e),a=pl(a),a=uh(a,e),a=dh(a,e),o=fh(o),a=fh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+g+o,_=w+p+a,L=lh(i,i.VERTEX_SHADER,b),C=lh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function I(T){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(L).trim(),D=i.getShaderInfoLog(C).trim(),W=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,C);else{let q=hh(i,L,"vertex"),O=hh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+q+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||D==="")&&(H=!1);H&&(T.diagnostics={runnable:W,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:D,prefix:p}})}i.deleteShader(L),i.deleteShader(C),S=new is(i,v),y=Gm(i,v)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Um)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}var eg=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}};function ng(s,t,e,n,i,r,o){let a=new Yr,l=new ml,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,x,T,F,U){let D=F.fog,W=U.geometry,H=y.isMeshStandardMaterial?F.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),O=q&&q.mapping===mo?q.image.height:null,tt=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let j=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=j!==void 0?j.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let Xt,Y,Q,ht;if(tt){let he=Pn[tt];Xt=he.vertexShader,Y=he.fragmentShader}else Xt=y.vertexShader,Y=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),ht=l.getFragmentShaderID(y);let nt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Ut=U.isBatchedMesh===!0,ee=!!y.map,J=!!y.matcap,ot=!!q,P=!!y.aoMap,Pt=!!y.lightMap,st=!!y.bumpMap,yt=!!y.normalMap,ct=!!y.displacementMap,Ft=!!y.emissiveMap,vt=!!y.metalnessMap,R=!!y.roughnessMap,M=y.anisotropy>0,k=y.clearcoat>0,$=y.dispersion>0,et=y.iridescence>0,Z=y.sheen>0,wt=y.transmission>0,dt=M&&!!y.anisotropyMap,xt=k&&!!y.clearcoatMap,te=k&&!!y.clearcoatNormalMap,rt=k&&!!y.clearcoatRoughnessMap,bt=et&&!!y.iridescenceMap,zt=et&&!!y.iridescenceThicknessMap,Ht=Z&&!!y.sheenColorMap,St=Z&&!!y.sheenRoughnessMap,ne=!!y.specularMap,Jt=!!y.specularColorMap,me=!!y.specularIntensityMap,N=wt&&!!y.transmissionMap,ft=wt&&!!y.thicknessMap,X=!!y.gradientMap,K=!!y.alphaMap,gt=y.alphaTest>0,pt=!!y.alphaHash,qt=!!y.extensions,Te=Ln;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=s.toneMapping);let Ve={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:Y,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xs,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:J,envMap:ot,envMapMode:ot&&q.mapping,envMapCubeUVHeight:O,aoMap:P,lightMap:Pt,bumpMap:st,normalMap:yt,displacementMap:f&&ct,emissiveMap:Ft,normalMapObjectSpace:yt&&y.normalMapType===sd,normalMapTangentSpace:yt&&y.normalMapType===Gh,metalnessMap:vt,roughnessMap:R,anisotropy:M,anisotropyMap:dt,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:te,clearcoatRoughnessMap:rt,dispersion:$,iridescence:et,iridescenceMap:bt,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Ht,sheenRoughnessMap:St,specularMap:ne,specularColorMap:Jt,specularIntensityMap:me,transmission:wt,transmissionMap:N,thicknessMap:ft,gradientMap:X,opaque:y.transparent===!1&&y.blending===si&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:y.combine,mapUv:ee&&v(y.map.channel),aoMapUv:P&&v(y.aoMap.channel),lightMapUv:Pt&&v(y.lightMap.channel),bumpMapUv:st&&v(y.bumpMap.channel),normalMapUv:yt&&v(y.normalMap.channel),displacementMapUv:ct&&v(y.displacementMap.channel),emissiveMapUv:Ft&&v(y.emissiveMap.channel),metalnessMapUv:vt&&v(y.metalnessMap.channel),roughnessMapUv:R&&v(y.roughnessMap.channel),anisotropyMapUv:dt&&v(y.anisotropyMap.channel),clearcoatMapUv:xt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(y.sheenRoughnessMap.channel),specularMapUv:ne&&v(y.specularMap.channel),specularColorMapUv:Jt&&v(y.specularColorMap.channel),specularIntensityMapUv:me&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:ft&&v(y.thicknessMap.channel),alphaMapUv:K&&v(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(ee||K),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Et,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)x.push(T),x.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(w(x,y),b(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let x=m[y.type],T;if(x){let F=Pn[x];T=Xd.clone(F.uniforms)}else T=y.uniforms;return T}function L(y,x){let T;for(let F=0,U=h.length;F<U;F++){let D=h[F];if(D.cacheKey===x){T=D,++T.usedTimes;break}}return T===void 0&&(T=new tg(s,x,y,r),h.push(T)),T}function C(y){if(--y.usedTimes===0){let x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:S}}function ig(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,v,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,f,d,m,v,g){let p=o(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,m,v,g){let p=o(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||sg),n.length>1&&n.sort(f||mh),i.length>1&&i.sort(f||mh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function rg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new gh,s.set(n,[o])):i>=r.length?(o=new gh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function og(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new _t};break;case"SpotLight":e={position:new A,direction:new A,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function ag(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var lg=0;function cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hg(s){let t=new og,e=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new Dt,o=new Dt;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,w=0,b=0,_=0,L=0,C=0,I=0;c.sort(cg);for(let y=0,x=c.length;y<x;y++){let T=c[y],F=T.color,U=T.intensity,D=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],U);I++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let q=T.shadow,O=e.get(T);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=T.shadow.matrix,w++}n.directional[d]=H,d++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(F).multiplyScalar(U),H.distance=D,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[v]=H;let q=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,q.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[v]=q.matrix,T.castShadow){let O=e.get(T);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=W,_++}v++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(F).multiplyScalar(U),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=H,g++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let q=T.shadow,O=e.get(T);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=T.shadow.matrix,b++}n.point[m]=H,m++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(U),H.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==v||S.rectAreaLength!==g||S.hemiLength!==p||S.numDirectionalShadows!==w||S.numPointShadows!==b||S.numSpotShadows!==_||S.numSpotMaps!==L||S.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,S.directionalLength=d,S.pointLength=m,S.spotLength=v,S.rectAreaLength=g,S.hemiLength=p,S.numDirectionalShadows=w,S.numPointShadows=b,S.numSpotShadows=_,S.numSpotMaps=L,S.numLightProbes=I,n.version=lg++)}function l(c,h){let u=0,f=0,d=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let b=c[p];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(b.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function vh(s){let t=new hg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new vh(s),t.set(i,[a])):r>=o.length?(a=new vh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vl=class extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(s,t,e){let n=new Xs,i=new it,r=new it,o=new oe,a=new vl({depthPacking:id}),l=new xl,c={},h=e.maxTextureSize,u={[ri]:Xe,[Xe]:ri,[Ze]:Ze},f=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new _e;m.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let p=this.type;this.render=function(C,I,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let y=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ii),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=p!==Vn&&this.type===Vn,D=p===Vn&&this.type!==Vn;for(let W=0,H=C.length;W<H;W++){let q=C[W],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let tt=O.getFrameExtents();if(i.multiply(tt),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,O.mapSize.y=r.y)),O.map===null||U===!0||D===!0){let lt=this.type!==Vn?{minFilter:an,magFilter:an}:{};O.map!==null&&O.map.dispose(),O.map=new Oe(i.x,i.y,lt),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let j=O.getViewportCount();for(let lt=0;lt<j;lt++){let Et=O.getViewport(lt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),F.viewport(o),O.updateMatrices(q,lt),n=O.getFrustum(),_(I,S,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Vn&&w(O,S),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,x,T)};function w(C,I){let S=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oe(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(I,null,S,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(I,null,S,d,v,null)}function b(C,I,S,y){let x=null,T=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=S.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=x.uuid,U=I.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let W=D[U];W===void 0&&(W=x.clone(),D[U]=W,I.addEventListener("dispose",L)),x=W}if(x.visible=I.visible,x.wireframe=I.wireframe,y===Vn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:u[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let F=s.properties.get(x);F.light=S}return x}function _(C,I,S,y,x){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);let U=t.update(C),D=C.material;if(Array.isArray(D)){let W=U.groups;for(let H=0,q=W.length;H<q;H++){let O=W[H],tt=D[O.materialIndex];if(tt&&tt.visible){let j=b(C,tt,y,x);C.onBeforeShadow(s,C,I,S,U,j,O),s.renderBufferDirect(S,null,U,j,C,O),C.onAfterShadow(s,C,I,S,U,j,O)}}}else if(D.visible){let W=b(C,D,y,x);C.onBeforeShadow(s,C,I,S,U,W,null),s.renderBufferDirect(S,null,U,W,C,null),C.onAfterShadow(s,C,I,S,U,W,null)}}let F=C.children;for(let U=0,D=F.length;U<D;U++)_(F[U],I,S,y,x)}function L(C){C.target.removeEventListener("dispose",L);for(let S in c){let y=c[S],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}var mg={[Ta]:Aa,[Ra]:Ia,[Ca]:La,[ss]:Pa,[Aa]:Ta,[Ia]:Ra,[La]:Ca,[Pa]:ss};function gg(s,t){function e(){let N=!1,ft=new oe,X=null,K=new oe(0,0,0,0);return{setMask:function(gt){X!==gt&&!N&&(s.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){N=gt},setClear:function(gt,pt,qt,Te,Ve){Ve===!0&&(gt*=Te,pt*=Te,qt*=Te),ft.set(gt,pt,qt,Te),K.equals(ft)===!1&&(s.clearColor(gt,pt,qt,Te),K.copy(ft))},reset:function(){N=!1,X=null,K.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,X=null,K=null,gt=null;return{setReversed:function(pt){if(ft!==pt){let qt=t.get("EXT_clip_control");ft?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let Te=gt;gt=null,this.setClear(Te)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?nt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(pt){X!==pt&&!N&&(s.depthMask(pt),X=pt)},setFunc:function(pt){if(ft&&(pt=mg[pt]),K!==pt){switch(pt){case Ta:s.depthFunc(s.NEVER);break;case Aa:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case Ca:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case La:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=pt}},setLocked:function(pt){N=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){N=!1,X=null,K=null,gt=null,ft=!1}}}function i(){let N=!1,ft=null,X=null,K=null,gt=null,pt=null,qt=null,Te=null,Ve=null;return{setTest:function(he){N||(he?nt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(he){ft!==he&&!N&&(s.stencilMask(he),ft=he)},setFunc:function(he,_n,Nn){(X!==he||K!==_n||gt!==Nn)&&(s.stencilFunc(he,_n,Nn),X=he,K=_n,gt=Nn)},setOp:function(he,_n,Nn){(pt!==he||qt!==_n||Te!==Nn)&&(s.stencilOp(he,_n,Nn),pt=he,qt=_n,Te=Nn)},setLocked:function(he){N=he},setClear:function(he){Ve!==he&&(s.clearStencil(he),Ve=he)},reset:function(){N=!1,ft=null,X=null,K=null,gt=null,pt=null,qt=null,Te=null,Ve=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,w=null,b=null,_=null,L=null,C=null,I=new _t(0,0,0),S=0,y=!1,x=null,T=null,F=null,U=null,D=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=q>=2);let tt=null,j={},lt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Xt=new oe().fromArray(lt),Y=new oe().fromArray(Et);function Q(N,ft,X,K){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(N,pt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<X;qt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ft+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let ht={};ht[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(ss),st(!1),yt(yc),nt(s.CULL_FACE),P(ii);function nt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function It(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,ft){return u[N]!==ft?(s.bindFramebuffer(N,ft),u[N]=ft,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ut(N,ft){let X=d,K=!1;if(N){X=f.get(ft),X===void 0&&(X=[],f.set(ft,X));let gt=N.textures;if(X.length!==gt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,qt=gt.length;pt<qt;pt++)X[pt]=s.COLOR_ATTACHMENT0+pt;X.length=gt.length,K=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,K=!0);K&&s.drawBuffers(X)}function ee(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let J={[Gn]:s.FUNC_ADD,[Pu]:s.FUNC_SUBTRACT,[Iu]:s.FUNC_REVERSE_SUBTRACT};J[Lu]=s.MIN,J[Du]=s.MAX;let ot={[Uu]:s.ZERO,[po]:s.ONE,[Nu]:s.SRC_COLOR,[Ea]:s.SRC_ALPHA,[ku]:s.SRC_ALPHA_SATURATE,[Ou]:s.DST_COLOR,[zu]:s.DST_ALPHA,[Fu]:s.ONE_MINUS_SRC_COLOR,[wa]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[Bu]:s.ONE_MINUS_DST_ALPHA,[Vu]:s.CONSTANT_COLOR,[Gu]:s.ONE_MINUS_CONSTANT_COLOR,[Wu]:s.CONSTANT_ALPHA,[Xu]:s.ONE_MINUS_CONSTANT_ALPHA};function P(N,ft,X,K,gt,pt,qt,Te,Ve,he){if(N===ii){v===!0&&(It(s.BLEND),v=!1);return}if(v===!1&&(nt(s.BLEND),v=!0),N!==ql){if(N!==g||he!==y){if((p!==Gn||_!==Gn)&&(s.blendEquation(s.FUNC_ADD),p=Gn,_=Gn),he)switch(N){case si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,L=null,C=null,I.set(0,0,0),S=0,g=N,y=he}return}gt=gt||ft,pt=pt||X,qt=qt||K,(ft!==p||gt!==_)&&(s.blendEquationSeparate(J[ft],J[gt]),p=ft,_=gt),(X!==w||K!==b||pt!==L||qt!==C)&&(s.blendFuncSeparate(ot[X],ot[K],ot[pt],ot[qt]),w=X,b=K,L=pt,C=qt),(Te.equals(I)===!1||Ve!==S)&&(s.blendColor(Te.r,Te.g,Te.b,Ve),I.copy(Te),S=Ve),g=N,y=!1}function Pt(N,ft){N.side===Ze?It(s.CULL_FACE):nt(s.CULL_FACE);let X=N.side===Xe;ft&&(X=!X),st(X),N.blending===si&&N.transparent===!1?P(ii):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){x!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),x=N)}function yt(N){N!==Ru?(nt(s.CULL_FACE),N!==T&&(N===yc?s.cullFace(s.BACK):N===Cu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),T=N}function ct(N){N!==F&&(H&&s.lineWidth(N),F=N)}function Ft(N,ft,X){N?(nt(s.POLYGON_OFFSET_FILL),(U!==ft||D!==X)&&(s.polygonOffset(ft,X),U=ft,D=X)):It(s.POLYGON_OFFSET_FILL)}function vt(N){N?nt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function R(N){N===void 0&&(N=s.TEXTURE0+W-1),tt!==N&&(s.activeTexture(N),tt=N)}function M(N,ft,X){X===void 0&&(tt===null?X=s.TEXTURE0+W-1:X=tt);let K=j[X];K===void 0&&(K={type:void 0,texture:void 0},j[X]=K),(K.type!==N||K.texture!==ft)&&(tt!==X&&(s.activeTexture(X),tt=X),s.bindTexture(N,ft||ht[N]),K.type=N,K.texture=ft)}function k(){let N=j[tt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(N){Xt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Xt.copy(N))}function St(N){Y.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function ne(N,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let K=X.get(N);K===void 0&&(K=s.getUniformBlockIndex(ft,N.name),X.set(N,K))}function Jt(N,ft){let K=c.get(ft).get(N);l.get(ft)!==K&&(s.uniformBlockBinding(ft,K,N.__bindingPointIndex),l.set(ft,K))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,j={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,w=null,b=null,_=null,L=null,C=null,I=new _t(0,0,0),S=0,y=!1,x=null,T=null,F=null,U=null,D=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:It,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:ee,setBlending:P,setMaterial:Pt,setFlipSided:st,setCullFace:yt,setLineWidth:ct,setPolygonOffset:Ft,setScissorTest:vt,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:bt,texImage3D:zt,updateUBOMapping:ne,uniformBlockBinding:Jt,texStorage2D:te,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Ht,viewport:St,reset:me}}function xh(s,t,e,n){let i=vg(n);switch(e){case zh:return s*t;case Oh:return s*t;case Hh:return s*t*2;case tr:return s*t/i.components*i.byteLength;case Jl:return s*t/i.components*i.byteLength;case kh:return s*t*2/i.components*i.byteLength;case Kl:return s*t*2/i.components*i.byteLength;case Bh:return s*t*3/i.components*i.byteLength;case on:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case Fr:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:case Oa:return Math.max(s,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(s,8)*Math.max(t,8)/2;case Ha:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hr:case il:case sl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vh:case rl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(s){switch(s){case ln:case Uh:return{byteLength:1,components:1};case ks:case Nh:case vn:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case qn:case Yl:case In:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function xg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return d?new OffscreenCanvas(R,M):Gr("canvas")}function v(R,M,k){let $=1,et=vt(R);if((et.width>k||et.height>k)&&($=k/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor($*et.width),wt=Math.floor($*et.height);u===void 0&&(u=m(Z,wt));let dt=M?m(Z,wt):u;return dt.width=Z,dt.height=wt,dt.getContext("2d").drawImage(R,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+wt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(R,M,k,$,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),M===s.RGBA){let wt=et?go:ie.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=wt===de?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,M){let k;return R?M===null||M===qn||M===as?k=s.DEPTH24_STENCIL8:M===In?k=s.DEPTH32F_STENCIL8:M===ks&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===as?k=s.DEPTH_COMPONENT24:M===In?k=s.DEPTH_COMPONENT32F:M===ks&&(k=s.DEPTH_COMPONENT16),k}function L(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Be?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),S(M),M.isVideoTexture&&h.delete(M)}function I(R){let M=R.target;M.removeEventListener("dispose",I),x(M)}function S(R){let M=n.get(R);if(M.__webglInit===void 0)return;let k=R.source,$=f.get(k);if($){let et=$[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&y(R),Object.keys($).length===0&&f.delete(k)}n.remove(R)}function y(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let k=R.source,$=f.get(k);delete $[M.__cacheKey],o.memory.textures--}function x(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let et=0;et<M.__webglFramebuffer[$].length;et++)s.deleteFramebuffer(M.__webglFramebuffer[$][et]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,et=k.length;$<et;$++){let Z=n.get(k[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(R)}let T=0;function F(){T=0}function U(){let R=T;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),T+=1,R}function D(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){let k=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,R,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function H(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Y(k,R,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function q(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Y(k,R,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function O(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Q(k,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let tt={[oi]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[Na]:s.MIRRORED_REPEAT},j={[an]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Xo]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},lt={[rd]:s.NEVER,[ud]:s.ALWAYS,[od]:s.LESS,[Wh]:s.LEQUAL,[ad]:s.EQUAL,[hd]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function Et(R,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Be||M.magFilter===Xo||M.magFilter===lr||M.magFilter===Tn||M.minFilter===Be||M.minFilter===Xo||M.minFilter===lr||M.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,tt[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,tt[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,tt[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,j[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===an||M.minFilter!==lr&&M.minFilter!==Tn||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let $=M.source,et=f.get($);et===void 0&&(et={},f.set($,et));let Z=D(M);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[Z].usedTimes++;let wt=et[R.__cacheKey];wt!==void 0&&(et[R.__cacheKey].usedTimes--,wt.usedTimes===0&&y(M)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return k}function Y(R,M,k){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let et=Xt(R,M),Z=M.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+k);let wt=n.get(Z);if(Z.version!==wt.__version||et===!0){e.activeTexture(s.TEXTURE0+k);let dt=ie.getPrimaries(ie.workingColorSpace),xt=M.colorSpace===Qe?null:ie.getPrimaries(M.colorSpace),te=M.colorSpace===Qe||dt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let rt=v(M.image,!1,i.maxTextureSize);rt=Ft(M,rt);let bt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type),Ht=b(M.internalFormat,bt,zt,M.colorSpace,M.isVideoTexture);Et($,M);let St,ne=M.mipmaps,Jt=M.isVideoTexture!==!0,me=wt.__version===void 0||et===!0,N=Z.dataReady,ft=L(M,rt);if(M.isDepthTexture)Ht=_(M.format===ls,M.type),me&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,Ht,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ht,rt.width,rt.height,0,bt,zt,null));else if(M.isDataTexture)if(ne.length>0){Jt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)St=ne[X],Jt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,bt,zt,St.data):e.texImage2D(s.TEXTURE_2D,X,Ht,St.width,St.height,0,bt,zt,St.data);M.generateMipmaps=!1}else Jt?(me&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,bt,zt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ht,rt.width,rt.height,0,bt,zt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Jt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ht,ne[0].width,ne[0].height,rt.depth);for(let X=0,K=ne.length;X<K;X++)if(St=ne[X],M.format!==on)if(bt!==null)if(Jt){if(N)if(M.layerUpdates.size>0){let gt=xh(St.width,St.height,M.format,M.type);for(let pt of M.layerUpdates){let qt=St.data.subarray(pt*gt/St.data.BYTES_PER_ELEMENT,(pt+1)*gt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,pt,St.width,St.height,1,bt,qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,rt.depth,bt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ht,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,rt.depth,bt,zt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ht,St.width,St.height,rt.depth,0,bt,zt,St.data)}else{Jt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)St=ne[X],M.format!==on?bt!==null?Jt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ht,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,bt,zt,St.data):e.texImage2D(s.TEXTURE_2D,X,Ht,St.width,St.height,0,bt,zt,St.data)}else if(M.isDataArrayTexture)if(Jt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ht,rt.width,rt.height,rt.depth),N)if(M.layerUpdates.size>0){let X=xh(rt.width,rt.height,M.format,M.type);for(let K of M.layerUpdates){let gt=rt.data.subarray(K*X/rt.data.BYTES_PER_ELEMENT,(K+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,bt,zt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,zt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,rt.width,rt.height,rt.depth,0,bt,zt,rt.data);else if(M.isData3DTexture)Jt?(me&&e.texStorage3D(s.TEXTURE_3D,ft,Ht,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,zt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ht,rt.width,rt.height,rt.depth,0,bt,zt,rt.data);else if(M.isFramebufferTexture){if(me)if(Jt)e.texStorage2D(s.TEXTURE_2D,ft,Ht,rt.width,rt.height);else{let X=rt.width,K=rt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ht,X,K,0,bt,zt,null),X>>=1,K>>=1}}else if(ne.length>0){if(Jt&&me){let X=vt(ne[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ht,X.width,X.height)}for(let X=0,K=ne.length;X<K;X++)St=ne[X],Jt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,bt,zt,St):e.texImage2D(s.TEXTURE_2D,X,Ht,bt,zt,St);M.generateMipmaps=!1}else if(Jt){if(me){let X=vt(rt);e.texStorage2D(s.TEXTURE_2D,ft,Ht,X.width,X.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,zt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ht,bt,zt,rt);g(M)&&p($),wt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,k){if(M.image.length!==6)return;let $=Xt(R,M),et=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let Z=n.get(et);if(et.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let wt=ie.getPrimaries(ie.workingColorSpace),dt=M.colorSpace===Qe?null:ie.getPrimaries(M.colorSpace),xt=M.colorSpace===Qe||wt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let te=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let K=0;K<6;K++)!te&&!rt?bt[K]=v(M.image[K],!0,i.maxCubemapSize):bt[K]=rt?M.image[K].image:M.image[K],bt[K]=Ft(M,bt[K]);let zt=bt[0],Ht=r.convert(M.format,M.colorSpace),St=r.convert(M.type),ne=b(M.internalFormat,Ht,St,M.colorSpace),Jt=M.isVideoTexture!==!0,me=Z.__version===void 0||$===!0,N=et.dataReady,ft=L(M,zt);Et(s.TEXTURE_CUBE_MAP,M);let X;if(te){Jt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ne,zt.width,zt.height);for(let K=0;K<6;K++){X=bt[K].mipmaps;for(let gt=0;gt<X.length;gt++){let pt=X[gt];M.format!==on?Ht!==null?Jt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ht,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ne,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ht,St,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ne,pt.width,pt.height,0,Ht,St,pt.data)}}}else{if(X=M.mipmaps,Jt&&me){X.length>0&&ft++;let K=vt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ne,K.width,K.height)}for(let K=0;K<6;K++)if(rt){Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt[K].width,bt[K].height,Ht,St,bt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,bt[K].width,bt[K].height,0,Ht,St,bt[K].data);for(let gt=0;gt<X.length;gt++){let qt=X[gt].image[K].image;Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,qt.width,qt.height,Ht,St,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ne,qt.width,qt.height,0,Ht,St,qt.data)}}else{Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ht,St,bt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,Ht,St,bt[K]);for(let gt=0;gt<X.length;gt++){let pt=X[gt];Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Ht,St,pt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ne,Ht,St,pt.image[K])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ht(R,M,k,$,et,Z){let wt=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),xt=b(k.internalFormat,wt,dt,k.colorSpace),te=n.get(M),rt=n.get(k);if(rt.__renderTarget=M,!te.__hasExternalTextures){let bt=Math.max(1,M.width>>Z),zt=Math.max(1,M.height>>Z);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,xt,bt,zt,M.depth,0,wt,dt,null):e.texImage2D(et,Z,xt,bt,zt,0,wt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,rt.__webglTexture,0,st(M)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,rt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(R,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,et=$&&$.isDepthTexture?$.type:null,Z=_(M.stencilBuffer,et),wt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=st(M);yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Z,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,R)}else{let $=M.textures;for(let et=0;et<$.length;et++){let Z=$[et],wt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),xt=b(Z.internalFormat,wt,dt,Z.colorSpace),te=st(M);k&&yt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,xt,M.width,M.height):yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,xt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let et=$.__webglTexture,Z=st(M);if(M.depthTexture.format===es)yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(M.depthTexture.format===ls)yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(R){let M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),nt(M.__webglDepthbuffer[$],R,!1);else{let et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),nt(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,M,k){let $=n.get(R);M!==void 0&&ht($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Bt(R)}function ee(R){let M=R.texture,k=n.get(R),$=n.get(M);R.addEventListener("dispose",I);let et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let xt=0;xt<M.mipmaps.length;xt++)k.__webglFramebuffer[dt][xt]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(wt)for(let dt=0,xt=et.length;dt<xt;dt++){let te=n.get(et[dt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&yt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let xt=et[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let te=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),bt=b(xt.internalFormat,te,rt,xt.colorSpace,R.isXRRenderTarget===!0),zt=st(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Et(s.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)ht(k.__webglFramebuffer[dt][xt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else ht(k.__webglFramebuffer[dt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,xt=et.length;dt<xt;dt++){let te=et[dt],rt=n.get(te);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Et(s.TEXTURE_2D,te),ht(k.__webglFramebuffer,R,te,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(te)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Et(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)ht(k.__webglFramebuffer[xt],R,M,s.COLOR_ATTACHMENT0,dt,xt);else ht(k.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,dt,0);g(M)&&p(dt),e.unbindTexture()}R.depthBuffer&&Bt(R)}function J(R){let M=R.textures;for(let k=0,$=M.length;k<$;k++){let et=M[k];if(g(et)){let Z=w(R),wt=n.get(et).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}let ot=[],P=[];function Pt(R){if(R.samples>0){if(yt(R)===!1){let M=R.textures,k=R.width,$=R.height,et=s.COLOR_BUFFER_BIT,Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(R),dt=M.length>1;if(dt)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let te=n.get(M[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,et,s.NEAREST),l===!0&&(ot.length=0,P.length=0,ot.push(s.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ot.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let te=n.get(M[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function st(R){return Math.min(i.maxSamples,R.samples)}function yt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ft(R,M){let k=R.colorSpace,$=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==xs&&k!==Qe&&(ie.getTransfer(k)===de?($!==on||et!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=Ut,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=yt}function yg(s,t){function e(n,i=Qe){let r,o=ie.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return s.BYTE;if(n===Nh)return s.SHORT;if(n===ks)return s.UNSIGNED_SHORT;if(n===Yl)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===Bh)return s.RGB;if(n===on)return s.RGBA;if(n===Oh)return s.LUMINANCE;if(n===Hh)return s.LUMINANCE_ALPHA;if(n===es)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===tr)return s.RED;if(n===Jl)return s.RED_INTEGER;if(n===kh)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===Fr||n===zr||n===Br||n===Or)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===za||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===ka||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===ka)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yl=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},_g={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:Mg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends ai{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,v=new _l,g=e.getContextAttributes(),p=null,w=null,b=[],_=[],L=new it,C=null,I=new Ce;I.viewport=new oe;let S=new Ce;S.viewport=new oe;let y=[I,S],x=new yl,T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=b[Y];return Q===void 0&&(Q=new zs,b[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=b[Y];return Q===void 0&&(Q=new zs,b[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=b[Y];return Q===void 0&&(Q=new zs,b[Y]=Q),Q.getHandSpace()};function U(Y){let Q=_.indexOf(Y.inputSource);if(Q===-1)return;let ht=b[Q];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,c||o),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<b.length;Y++){let Q=_[Y];Q!==null&&(_[Y]=null,b[Y].disconnect(Q))}T=null,F=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,w=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Oe(d.framebufferWidth,d.framebufferHeight,{format:on,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ht=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?ls:es,ht=g.stencil?as:qn);let It={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(It),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Oe(f.textureWidth,f.textureHeight,{format:on,type:ln,depthTexture:new ds(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Y){for(let Q=0;Q<Y.removed.length;Q++){let ht=Y.removed[Q],nt=_.indexOf(ht);nt>=0&&(_[nt]=null,b[nt].disconnect(ht))}for(let Q=0;Q<Y.added.length;Q++){let ht=Y.added[Q],nt=_.indexOf(ht);if(nt===-1){for(let Bt=0;Bt<b.length;Bt++)if(Bt>=_.length){_.push(ht),nt=Bt;break}else if(_[Bt]===null){_[Bt]=ht,nt=Bt;break}if(nt===-1)break}let It=b[nt];It&&It.connect(ht)}}let H=new A,q=new A;function O(Y,Q,ht){H.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ht.matrixWorld);let nt=H.distanceTo(q),It=Q.projectionMatrix.elements,Bt=ht.projectionMatrix.elements,Ut=It[14]/(It[10]-1),ee=It[14]/(It[10]+1),J=(It[9]+1)/It[5],ot=(It[9]-1)/It[5],P=(It[8]-1)/It[0],Pt=(Bt[8]+1)/Bt[0],st=Ut*P,yt=Ut*Pt,ct=nt/(-P+Pt),Ft=ct*-P;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let vt=Ut+ct,R=ee+ct,M=st-Ft,k=yt+(nt-Ft),$=J*ee/R*vt,et=ot*ee/R*vt;Y.projectionMatrix.makePerspective(M,k,$,et,vt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function tt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ht=Y.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),x.near=S.near=I.near=Q,x.far=S.far=I.far=ht,(T!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,F=x.far),I.layers.mask=Y.layers.mask|2,S.layers.mask=Y.layers.mask|4,x.layers.mask=I.layers.mask|S.layers.mask;let nt=Y.parent,It=x.cameras;tt(x,nt);for(let Bt=0;Bt<It.length;Bt++)tt(It[Bt],nt);It.length===2?O(x,I,S):x.projectionMatrix.copy(I.projectionMatrix),j(Y,x,nt)};function j(Y,Q,ht){ht===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let lt=null;function Et(Y,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let nt=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let Bt=0;Bt<ht.length;Bt++){let Ut=ht[Bt],ee=null;if(d!==null)ee=d.getViewport(Ut);else{let ot=u.getViewSubImage(f,Ut);ee=ot.viewport,Bt===0&&(t.setRenderTargetTextures(w,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(w))}let J=y[Bt];J===void 0&&(J=new Ce,J.layers.enable(Bt),J.viewport=new oe,y[Bt]=J),J.matrix.fromArray(Ut.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ut.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ee.x,ee.y,ee.width,ee.height),Bt===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(J)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){let Bt=u.getDepthInformation(ht[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,i.renderState)}}for(let ht=0;ht<b.length;ht++){let nt=_[ht],It=b[ht];nt!==null&&It!==void 0&&It.update(nt,Q,c||o)}lt&&lt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Xt=new Zh;Xt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){lt=Y},this.dispose=function(){}}},yi=new Pe,Sg=new Dt;function Eg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$h(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,w,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),b=w.envMap,_=w.envMapRotation;b&&(g.envMap.value=b,yi.copy(_),yi.x*=-1,yi.y*=-1,yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(yi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let _=b.program;n.uniformBlockBinding(w,_)}function c(w,b){let _=i[w.id];_===void 0&&(m(w),_=h(w),i[w.id]=_,w.addEventListener("dispose",g));let L=b.program;n.updateUBOMapping(w,L);let C=t.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function h(w){let b=u();w.__bindingPointIndex=b;let _=s.createBuffer(),L=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=i[w.id],_=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,I=_.length;C<I;C++){let S=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,x=S.length;y<x;y++){let T=S[y];if(d(T,C,y,L)===!0){let F=T.__offset,U=Array.isArray(T.value)?T.value:[T.value],D=0;for(let W=0;W<U.length;W++){let H=U[W],q=v(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+D,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,b,_,L){let C=w.value,I=b+"_"+_;if(L[I]===void 0)return typeof C=="number"||typeof C=="boolean"?L[I]=C:L[I]=C.clone(),!0;{let S=L[I];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return L[I]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function m(w){let b=w.uniforms,_=0,L=16;for(let I=0,S=b.length;I<S;I++){let y=Array.isArray(b[I])?b[I]:[b[I]];for(let x=0,T=y.length;x<T;x++){let F=y[x],U=Array.isArray(F.value)?F.value:[F.value];for(let D=0,W=U.length;D<W;D++){let H=U[D],q=v(H),O=_%L,tt=O%q.boundary,j=O+tt;_+=tt,j!==0&&L-j<q.storage&&(_+=L-j),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=q.storage}}}let C=_%L;return C>0&&(_+=L-C),w.__size=_,w.__cache={},this}function v(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function g(w){let b=w.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Qr=class{constructor(t={}){let{canvas:e=Rd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Ln,this.toneMappingExposure=1;let _=this,L=!1,C=0,I=0,S=null,y=-1,x=null,T=new oe,F=new oe,U=null,D=new _t(0),W=0,H=e.width,q=e.height,O=1,tt=null,j=null,lt=new oe(0,0,H,q),Et=new oe(0,0,H,q),Xt=!1,Y=new Xs,Q=!1,ht=!1,nt=new Dt,It=new Dt,Bt=new A,Ut=new oe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function ot(){return S===null?O:1}let P=n;function Pt(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){let z="webgl2";if(P=Pt(z,E),P===null)throw Pt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,yt,ct,Ft,vt,R,M,k,$,et,Z,wt,dt,xt,te,rt,bt,zt,Ht,St,ne,Jt,me,N;function ft(){st=new k0(P),st.init(),Jt=new yg(P,st),yt=new N0(P,st,t,Jt),ct=new gg(P,st),yt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Ft=new W0(P),vt=new ig,R=new xg(P,st,ct,vt,yt,Jt,Ft),M=new z0(_),k=new H0(_),$=new Jd(P),me=new D0(P,$),et=new V0(P,$,Ft,me),Z=new q0(P,et,$,Ft),Ht=new X0(P,yt,R),rt=new F0(vt),wt=new ng(_,M,k,st,yt,me,rt),dt=new Eg(_,vt),xt=new rg,te=new ug(st),zt=new L0(_,M,k,ct,Z,d,l),bt=new pg(_,Z,yt),N=new wg(P,Ft,yt,ct),St=new U0(P,st,Ft),ne=new G0(P,st,Ft),Ft.programs=wt.programs,_.capabilities=yt,_.extensions=st,_.properties=vt,_.renderLists=xt,_.shadowMap=bt,_.state=ct,_.info=Ft}ft();let X=new Ml(_,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(H,q,!1))},this.getSize=function(E){return E.set(H,q)},this.setSize=function(E,z,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,q=z,e.width=Math.floor(E*O),e.height=Math.floor(z*O),V===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(H*O,q*O).floor()},this.setDrawingBufferSize=function(E,z,V){H=E,q=z,O=V,e.width=Math.floor(E*V),e.height=Math.floor(z*V),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,z,V,G){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,z,V,G),ct.viewport(T.copy(lt).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Et)},this.setScissor=function(E,z,V,G){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,z,V,G),ct.scissor(F.copy(Et).multiplyScalar(O).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){ct.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,z=!0,V=!0){let G=0;if(E){let B=!1;if(S!==null){let at=S.texture.format;B=at===jl||at===Kl||at===Jl}if(B){let at=S.texture.type,mt=at===ln||at===qn||at===ks||at===as||at===$l||at===Zl,At=zt.getClearColor(),Rt=zt.getClearAlpha(),Gt=At.r,Yt=At.g,Ct=At.b;mt?(m[0]=Gt,m[1]=Yt,m[2]=Ct,m[3]=Rt,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Gt,v[1]=Yt,v[2]=Ct,v[3]=Rt,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}z&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),te.dispose(),vt.dispose(),M.dispose(),k.dispose(),Z.dispose(),me.dispose(),N.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",uc),X.removeEventListener("sessionend",dc),fi.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=Ft.autoReset,z=bt.enabled,V=bt.autoUpdate,G=bt.needsUpdate,B=bt.type;ft(),Ft.autoReset=E,bt.enabled=z,bt.autoUpdate=V,bt.needsUpdate=G,bt.type=B}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){let z=E.target;z.removeEventListener("dispose",qt),Te(z)}function Te(E){Ve(E),vt.remove(E)}function Ve(E){let z=vt.get(E).programs;z!==void 0&&(z.forEach(function(V){wt.releaseProgram(V)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,V,G,B,at){z===null&&(z=ee);let mt=B.isMesh&&B.matrixWorld.determinant()<0,At=wu(E,z,V,G,B);ct.setMaterial(G,mt);let Rt=V.index,Gt=1;if(G.wireframe===!0){if(Rt=et.getWireframeAttribute(V),Rt===void 0)return;Gt=2}let Yt=V.drawRange,Ct=V.attributes.position,re=Yt.start*Gt,ge=(Yt.start+Yt.count)*Gt;at!==null&&(re=Math.max(re,at.start*Gt),ge=Math.min(ge,(at.start+at.count)*Gt)),Rt!==null?(re=Math.max(re,0),ge=Math.min(ge,Rt.count)):Ct!=null&&(re=Math.max(re,0),ge=Math.min(ge,Ct.count));let ve=ge-re;if(ve<0||ve===1/0)return;me.setup(B,G,At,V,Rt);let Ke,ae=St;if(Rt!==null&&(Ke=$.get(Rt),ae=ne,ae.setIndex(Ke)),B.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*ot()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(B.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),ct.setLineWidth(Lt*ot()),B.isLineSegments?ae.setMode(P.LINES):B.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else B.isPoints?ae.setMode(P.POINTS):B.isSprite&&ae.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ae.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Lt=B._multiDrawStarts,Fn=B._multiDrawCounts,le=B._multiDrawCount,Mn=Rt?$.get(Rt).bytesPerElement:1,Fi=vt.get(G).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Fi.setValue(P,"_gl_DrawID",nn),ae.render(Lt[nn]/Mn,Fn[nn])}else if(B.isInstancedMesh)ae.renderInstances(re,ve,B.count);else if(V.isInstancedBufferGeometry){let Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fn=Math.min(V.instanceCount,Lt);ae.renderInstances(re,ve,Fn)}else ae.render(re,ve)};function he(E,z,V){E.transparent===!0&&E.side===Ze&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,ar(E,z,V),E.side=ri,E.needsUpdate=!0,ar(E,z,V),E.side=Ze):ar(E,z,V)}this.compile=function(E,z,V=null){V===null&&(V=E),p=te.get(V),p.init(z),b.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==V&&E.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let At=at[mt];he(At,V,B),G.add(At)}else he(at,V,B),G.add(at)}),b.pop(),p=null,G},this.compileAsync=function(E,z,V=null){let G=this.compile(E,z,V);return new Promise(B=>{function at(){if(G.forEach(function(mt){vt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){B(E);return}setTimeout(at,10)}st.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let _n=null;function Nn(E){_n&&_n(E)}function uc(){fi.stop()}function dc(){fi.start()}let fi=new Zh;fi.setAnimationLoop(Nn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){_n=E,X.setAnimationLoop(E),E===null?fi.stop():fi.start()},X.addEventListener("sessionstart",uc),X.addEventListener("sessionend",dc),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,S),p=te.get(E,b.length),p.init(z),b.push(p),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(It),ht=this.localClippingEnabled,Q=rt.init(this.clippingPlanes,ht),g=xt.get(E,w.length),g.init(),w.push(g),X.enabled===!0&&X.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&Wo(at,z,-1/0,_.sortObjects)}Wo(E,z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(tt,j),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&zt.addToRenderList(g,E),this.info.render.frame++,Q===!0&&rt.beginShadows();let V=p.state.shadowsArray;bt.render(V,E,z),Q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){let at=z.cameras;if(B.length>0)for(let mt=0,At=at.length;mt<At;mt++){let Rt=at[mt];pc(G,B,E,Rt)}J&&zt.render(E);for(let mt=0,At=at.length;mt<At;mt++){let Rt=at[mt];fc(g,E,Rt,Rt.viewport)}}else B.length>0&&pc(G,B,E,z),J&&zt.render(E),fc(g,E,z);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(_,E,z),me.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],Q===!0&&rt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Wo(E,z,V,G){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){G&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);let mt=Z.update(E),At=E.material;At.visible&&g.push(E,mt,At,V,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let mt=Z.update(E),At=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(At)){let Rt=mt.groups;for(let Gt=0,Yt=Rt.length;Gt<Yt;Gt++){let Ct=Rt[Gt],re=At[Ct.materialIndex];re&&re.visible&&g.push(E,mt,re,V,Ut.z,Ct)}}else At.visible&&g.push(E,mt,At,V,Ut.z,null)}}let at=E.children;for(let mt=0,At=at.length;mt<At;mt++)Wo(at[mt],z,V,G)}function fc(E,z,V,G){let B=E.opaque,at=E.transmissive,mt=E.transparent;p.setupLightsView(V),Q===!0&&rt.setGlobalState(_.clippingPlanes,V),G&&ct.viewport(T.copy(G)),B.length>0&&or(B,z,V),at.length>0&&or(at,z,V),mt.length>0&&or(mt,z,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function pc(E,z,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Oe(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?vn:ln,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let at=p.state.transmissionRenderTarget[G.id],mt=G.viewport||T;at.setSize(mt.z,mt.w);let At=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(D),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),J&&zt.render(V);let Rt=_.toneMapping;_.toneMapping=Ln;let Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Q===!0&&rt.setGlobalState(_.clippingPlanes,G),or(E,V,G),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),st.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ct=0,re=z.length;Ct<re;Ct++){let ge=z[Ct],ve=ge.object,Ke=ge.geometry,ae=ge.material,Lt=ge.group;if(ae.side===Ze&&ve.layers.test(G.layers)){let Fn=ae.side;ae.side=Xe,ae.needsUpdate=!0,mc(ve,V,G,Ke,ae,Lt),ae.side=Fn,ae.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}_.setRenderTarget(At),_.setClearColor(D,W),Gt!==void 0&&(G.viewport=Gt),_.toneMapping=Rt}function or(E,z,V){let G=z.isScene===!0?z.overrideMaterial:null;for(let B=0,at=E.length;B<at;B++){let mt=E[B],At=mt.object,Rt=mt.geometry,Gt=G===null?mt.material:G,Yt=mt.group;At.layers.test(V.layers)&&mc(At,z,V,Rt,Gt,Yt)}}function mc(E,z,V,G,B,at){E.onBeforeRender(_,z,V,G,B,at),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,z,V,G,E,at),B.transparent===!0&&B.side===Ze&&B.forceSinglePass===!1?(B.side=Xe,B.needsUpdate=!0,_.renderBufferDirect(V,z,G,B,E,at),B.side=ri,B.needsUpdate=!0,_.renderBufferDirect(V,z,G,B,E,at),B.side=Ze):_.renderBufferDirect(V,z,G,B,E,at),E.onAfterRender(_,z,V,G,B,at)}function ar(E,z,V){z.isScene!==!0&&(z=ee);let G=vt.get(E),B=p.state.lights,at=p.state.shadowsArray,mt=B.state.version,At=wt.getParameters(E,B.state,at,z,V),Rt=wt.getProgramCacheKey(At),Gt=G.programs;G.environment=E.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",qt),Gt=new Map,G.programs=Gt);let Yt=Gt.get(Rt);if(Yt!==void 0){if(G.currentProgram===Yt&&G.lightsStateVersion===mt)return vc(E,At),Yt}else At.uniforms=wt.getUniforms(E),E.onBeforeCompile(At,_),Yt=wt.acquireProgram(At,Rt),Gt.set(Rt,Yt),G.uniforms=At.uniforms;let Ct=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),vc(E,At),G.needsLights=Au(E),G.lightsStateVersion=mt,G.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Yt,G.uniformsList=null,Yt}function gc(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=is.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function vc(E,z){let V=vt.get(E);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function wu(E,z,V,G,B){z.isScene!==!0&&(z=ee),R.resetTextureUnits();let at=z.fog,mt=G.isMeshStandardMaterial?z.environment:null,At=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:xs,Rt=(G.isMeshStandardMaterial?k:M).get(G.envMap||mt),Gt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Yt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,re=!!V.morphAttributes.normal,ge=!!V.morphAttributes.color,ve=Ln;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ve=_.toneMapping);let Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=Ke!==void 0?Ke.length:0,Lt=vt.get(G),Fn=p.state.lights;if(Q===!0&&(ht===!0||E!==x)){let fn=E===x&&G.id===y;rt.setState(G,E,fn)}let le=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Fn.state.version||Lt.outputColorSpace!==At||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Rt||G.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Gt||Lt.vertexTangents!==Yt||Lt.morphTargets!==Ct||Lt.morphNormals!==re||Lt.morphColors!==ge||Lt.toneMapping!==ve||Lt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Lt.__version=G.version);let Mn=Lt.currentProgram;le===!0&&(Mn=ar(G,z,B));let Fi=!1,nn=!1,Es=!1,xe=Mn.getUniforms(),Cn=Lt.uniforms;if(ct.useProgram(Mn.program)&&(Fi=!0,nn=!0,Es=!0),G.id!==y&&(y=G.id,nn=!0),Fi||x!==E){ct.buffers.depth.getReversed()?(nt.copy(E.projectionMatrix),Pd(nt),Id(nt),xe.setValue(P,"projectionMatrix",nt)):xe.setValue(P,"projectionMatrix",E.projectionMatrix),xe.setValue(P,"viewMatrix",E.matrixWorldInverse);let Zn=xe.map.cameraPosition;Zn!==void 0&&Zn.setValue(P,Bt.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,nn=!0,Es=!0)}if(B.isSkinnedMesh){xe.setOptional(P,B,"bindMatrix"),xe.setOptional(P,B,"bindMatrixInverse");let fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xe.setValue(P,"boneTexture",fn.boneTexture,R))}B.isBatchedMesh&&(xe.setOptional(P,B,"batchingTexture"),xe.setValue(P,"batchingTexture",B._matricesTexture,R),xe.setOptional(P,B,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",B._indirectTexture,R),xe.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",B._colorsTexture,R));let ws=V.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&Ht.update(B,V,Mn),(nn||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,xe.setValue(P,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Cn.envMap.value=Rt,Cn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&z.environment!==null&&(Cn.envMapIntensity.value=z.environmentIntensity),nn&&(xe.setValue(P,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&Tu(Cn,Es),at&&G.fog===!0&&dt.refreshFogUniforms(Cn,at),dt.refreshMaterialUniforms(Cn,G,O,q,p.state.transmissionRenderTarget[E.id]),is.upload(P,gc(Lt),Cn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(is.upload(P,gc(Lt),Cn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(P,"center",B.center),xe.setValue(P,"modelViewMatrix",B.modelViewMatrix),xe.setValue(P,"normalMatrix",B.normalMatrix),xe.setValue(P,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let fn=G.uniformsGroups;for(let Zn=0,Jn=fn.length;Zn<Jn;Zn++){let xc=fn[Zn];N.update(xc,Mn),N.bind(xc,Mn)}}return Mn}function Tu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,z,V){vt.get(E.texture).__webglTexture=z,vt.get(E.depthTexture).__webglTexture=V;let G=vt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let V=vt.get(E);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,V=0){S=E,C=z,I=V;let G=!0,B=null,at=!1,mt=!1;if(E){let Rt=vt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Rt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Rt.__hasExternalTextures)R.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ct=E.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(mt=!0);let Yt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?B=Yt[z][V]:B=Yt[z],at=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?B=Yt[V]:B=Yt,T.copy(E.viewport),F.copy(E.scissor),U=E.scissorTest}else T.copy(lt).multiplyScalar(O).floor(),F.copy(Et).multiplyScalar(O).floor(),U=Xt;if(ct.bindFramebuffer(P.FRAMEBUFFER,B)&&G&&ct.drawBuffers(E,B),ct.viewport(T),ct.scissor(F),ct.setScissorTest(U),at){let Rt=vt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,V)}else if(mt){let Rt=vt.get(E.texture),Gt=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Gt)}y=-1},this.readRenderTargetPixels=function(E,z,V,G,B,at,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(At=At[mt]),At){ct.bindFramebuffer(P.FRAMEBUFFER,At);try{let Rt=E.texture,Gt=Rt.format,Yt=Rt.type;if(!yt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-G&&V>=0&&V<=E.height-B&&P.readPixels(z,V,G,B,Jt.convert(Gt),Jt.convert(Yt),at)}finally{let Rt=S!==null?vt.get(S).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,z,V,G,B,at,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(At=At[mt]),At){let Rt=E.texture,Gt=Rt.format,Yt=Rt.type;if(!yt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-G&&V>=0&&V<=E.height-B){ct.bindFramebuffer(P.FRAMEBUFFER,At);let Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(z,V,G,B,Jt.convert(Gt),Jt.convert(Yt),0);let re=S!==null?vt.get(S).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,re);let ge=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cd(P,ge,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Ct),P.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,V=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-V),B=Math.floor(E.image.width*G),at=Math.floor(E.image.height*G),mt=z!==null?z.x:0,At=z!==null?z.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,mt,At,B,at),ct.unbindTexture()},this.copyTextureToTexture=function(E,z,V=null,G=null,B=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],z=arguments[2],B=arguments[3]||0,V=null);let at,mt,At,Rt,Gt,Yt,Ct,re,ge,ve=E.isCompressedTexture?E.mipmaps[B]:E.image;V!==null?(at=V.max.x-V.min.x,mt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Gt=V.min.y,Yt=V.isBox3?V.min.z:0):(at=ve.width,mt=ve.height,At=ve.depth||1,Rt=0,Gt=0,Yt=0),G!==null?(Ct=G.x,re=G.y,ge=G.z):(Ct=0,re=0,ge=0);let Ke=Jt.convert(z.format),ae=Jt.convert(z.type),Lt;z.isData3DTexture?(R.setTexture3D(z,0),Lt=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),Lt=P.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),Lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let Fn=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Fi=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yt);let Es=E.isDataArrayTexture||E.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Cn=vt.get(E),ws=vt.get(z),fn=vt.get(Cn.__renderTarget),Zn=vt.get(ws.__renderTarget);ct.bindFramebuffer(P.READ_FRAMEBUFFER,fn.__webglFramebuffer),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<At;Jn++)Es&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(E).__webglTexture,B,Yt+Jn),E.isDepthTexture?(xe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,B,ge+Jn),P.blitFramebuffer(Rt,Gt,at,mt,Ct,re,at,mt,P.DEPTH_BUFFER_BIT,P.NEAREST)):xe?P.copyTexSubImage3D(Lt,B,Ct,re,ge+Jn,Rt,Gt,at,mt):P.copyTexSubImage2D(Lt,B,Ct,re,ge+Jn,Rt,Gt,at,mt);ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Lt,B,Ct,re,ge,at,mt,At,Ke,ae,ve.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,B,Ct,re,ge,at,mt,At,Ke,ve.data):P.texSubImage3D(Lt,B,Ct,re,ge,at,mt,At,Ke,ae,ve):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,Ct,re,at,mt,Ke,ae,ve.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,Ct,re,ve.width,ve.height,Ke,ve.data):P.texSubImage2D(P.TEXTURE_2D,B,Ct,re,at,mt,Ke,ae,ve);P.pixelStorei(P.UNPACK_ROW_LENGTH,Fn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),B===0&&z.generateMipmaps&&P.generateMipmap(Lt),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,z,V=null,G=null,B=0){return E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],z=arguments[3],B=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,V,G,B)},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){C=0,I=0,S=null,ct.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}},fs=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hi=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var bl=class extends tn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,h=an,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class extends se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ki=new Dt,yh=new Dt,Cr=[],_h=new Yn,Tg=new Dt,Ps=new kt,Is=new li,ui=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),_h.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(_h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Is.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ki),yh.multiplyMatrices(n,Ki),Ps.matrixWorld=yh,Ps.raycast(t,Cr);for(let o=0,a=Cr.length;o<a;o++){let l=Cr[o];l.instanceId=r,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(i*this.count),i,this.count,tr,In));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Sl=class extends ci{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mh=new Dt,El=new qr,Pr=new li,Ir=new A,qs=class extends He{constructor(t=new _e,e=new Sl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;Mh.copy(i).invert(),El.copy(t.ray).applyMatrix4(Mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){let g=c.getX(m);Ir.fromBufferAttribute(u,g),bh(Ir,g,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Ir.fromBufferAttribute(u,m),bh(Ir,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bh(s,t,e,n,i,r,o){let a=El.distanceSqToPoint(s);if(a<e){let l=new A;El.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ps=class extends tn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],o=[],a=new A,l=new Dt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ue(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ue(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ys=class extends en{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wl=class extends Ys{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ec(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Lr=new A,ya=new ec,_a=new ec,Ma=new ec,Tl=class extends en{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Lr.subVectors(i[0],i[1]).add(i[0]),c=Lr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Lr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ya.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,v,g),_a.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,v,g),Ma.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),_a.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ma.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ya.calc(l),_a.calc(l),Ma.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Ag(s,t){let e=1-s;return e*e*t}function Rg(s,t){return 2*(1-s)*s*t}function Cg(s,t){return s*s*t}function Bs(s,t,e,n){return Ag(s,t)+Rg(s,e)+Cg(s,n)}function Pg(s,t){let e=1-s;return e*e*e*t}function Ig(s,t){let e=1-s;return 3*e*e*s*t}function Lg(s,t){return 3*(1-s)*s*s*t}function Dg(s,t){return s*s*s*t}function Os(s,t,e,n,i){return Pg(s,t)+Ig(s,e)+Lg(s,n)+Dg(s,i)}var to=class extends en{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,i.x,r.x,o.x,a.x),Os(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Al=class extends en{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,i.x,r.x,o.x,a.x),Os(t,i.y,r.y,o.y,a.y),Os(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends en{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rl=class extends en{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends en{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,i.x,r.x,o.x),Bs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends en{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,i.x,r.x,o.x),Bs(t,i.y,r.y,o.y),Bs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Sh(a,l.x,c.x,h.x,u.x),Sh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Tl,CubicBezierCurve:to,CubicBezierCurve3:Al,EllipseCurve:Ys,LineCurve:eo,LineCurve3:Rl,QuadraticBezierCurve:no,QuadraticBezierCurve3:io,SplineCurve:so}),Cl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ro[i.type]().fromJSON(i))}return this}},$s=class extends Cl{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new eo(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new no(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new to(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new so(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Ys(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zs=class s extends _e{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ue(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,f=new it,d=new A,m=new A,v=new A,g=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let w=0;w<=e;w++){let b=n+w*h*i,_=Math.sin(b),L=Math.cos(b);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*_,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),f.x=w/e,f.y=C/(t.length-1),a.push(f.x,f.y);let I=l[3*C+0]*_,S=l[3*C+1],y=l[3*C+0]*L;c.push(I,S,y)}}for(let w=0;w<e;w++)for(let b=0;b<t.length-1;b++){let _=b+w*t.length,L=_,C=_+t.length,I=_+t.length+1,S=_+1;r.push(L,C,S),r.push(I,S,C)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},oo=class s extends Zs{constructor(t=1,e=1,n=4,i=8){let r=new $s;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},wi=class s extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zt=class s extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,v=[],g=n/2,p=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function w(){let _=new A,L=new A,C=0,I=(e-t)/n;for(let S=0;S<=r;S++){let y=[],x=S/r,T=x*(e-t)+t;for(let F=0;F<=i;F++){let U=F/i,D=U*l+a,W=Math.sin(D),H=Math.cos(D);L.x=T*W,L.y=-x*n+g,L.z=T*H,u.push(L.x,L.y,L.z),_.set(W,I,H).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-x),y.push(m++)}v.push(y)}for(let S=0;S<i;S++)for(let y=0;y<r;y++){let x=v[y][S],T=v[y+1][S],F=v[y+1][S+1],U=v[y][S+1];(t>0||y!==0)&&(h.push(x,T,U),C+=3),(e>0||y!==r-1)&&(h.push(T,F,U),C+=3)}c.addGroup(p,C,0),p+=C}function b(_){let L=m,C=new it,I=new A,S=0,y=_===!0?t:e,x=_===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*x,0),f.push(0,x,0),d.push(.5,.5),m++;let T=m;for(let F=0;F<=i;F++){let D=F/i*l+a,W=Math.cos(D),H=Math.sin(D);I.x=y*H,I.y=g*x,I.z=y*W,u.push(I.x,I.y,I.z),f.push(0,x,0),C.x=W*.5+.5,C.y=H*.5*x+.5,d.push(C.x,C.y),m++}for(let F=0;F<i;F++){let U=L+F,D=T+F;_===!0?h.push(D,D+1,U):h.push(D+1,D,U),S+=3}c.addGroup(p,S,_===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class s extends Zt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ti=class extends $s{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new $s().fromJSON(i))}return this}},Ug={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=tu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Og(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Js(r,o,e,a,l,d,0),o}};function tu(s,t,e,n,i){let r,o;if(i===Jg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Eh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Eh(r,s[r],s[r+1],o);return o&&xo(o,o.next)&&(js(o),o=o.next),o}function Ai(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||Se(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Wg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Fg(s,n,i,r):Ng(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),js(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=zg(Ai(s),t,e),Js(s,t,e,n,i,r,2)):o===2&&Bg(s,t,e,n,i,r):Js(Ai(s),t,e,n,i,r,1);break}}}function Ng(s){let t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ts(i,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Pl(d,m,t,e,n),w=Pl(v,g,t,e,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=p&&_&&_.z<=w;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ts(a,h,l,u,c,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ts(a,h,l,u,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ts(a,h,l,u,c,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=w;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ts(a,h,l,u,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!xo(i,r)&&eu(i,n,n.next,r)&&Ks(i,r)&&Ks(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),js(n),js(n.next),n=s=r),n=n.next}while(n!==s);return Ai(n)}function Bg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let l=nu(o,a);o=Ai(o,o.next),l=Ai(l,l.next),Js(o,t,e,n,i,r,0),Js(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Og(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=tu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(qg(c));for(i.sort(Hg),r=0;r<i.length;r++)e=kg(i[r],e);return e}function Hg(s,t){return s.x-t.x}function kg(s,t){let e=Vg(s,t);if(!e)return t;let n=nu(e,s);return Ai(n,n.next),Ai(e,e.next)}function Vg(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ks(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Gg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Gg(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function Wg(s,t,e,n){let i=s;do i.z===0&&(i.z=Pl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Xg(i)}function Xg(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Pl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ts(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Yg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$g(s,t)&&(Ks(s,t)&&Ks(t,s)&&Zg(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||xo(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xo(s,t){return s.x===t.x&&s.y===t.y}function eu(s,t,e,n){let i=Ur(Se(s,t,e)),r=Ur(Se(s,t,n)),o=Ur(Se(e,n,s)),a=Ur(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&Dr(s,e,t)||r===0&&Dr(s,n,t)||o===0&&Dr(e,s,n)||a===0&&Dr(e,t,n))}function Dr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ur(s){return s>0?1:s<0?-1:0}function $g(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ks(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function Zg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function nu(s,t){let e=new Il(s.i,s.x,s.y),n=new Il(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eh(s,t,e,n){let i=new Il(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Il(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Hs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];wh(t),Th(n,t);let o=t.length;e.forEach(wh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Th(n,e[l]);let a=Ug.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Th(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ms=class s extends _e{constructor(t=new Ti([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(i,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Kg,b,_=!1,L,C,I,S;p&&(b=p.getSpacedPoints(h),_=!0,f=!1,L=p.computeFrenetFrames(h,!1),C=new A,I=new A,S=new A),f||(g=0,d=0,m=0,v=0);let y=a.extractPoints(c),x=y.shape,T=y.holes;if(!Hs.isClockWise(x)){x=x.reverse();for(let J=0,ot=T.length;J<ot;J++){let P=T[J];Hs.isClockWise(P)&&(T[J]=P.reverse())}}let U=Hs.triangulateShape(x,T),D=x;for(let J=0,ot=T.length;J<ot;J++){let P=T[J];x=x.concat(P)}function W(J,ot,P){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ot,P)}let H=x.length,q=U.length;function O(J,ot,P){let Pt,st,yt,ct=J.x-ot.x,Ft=J.y-ot.y,vt=P.x-J.x,R=P.y-J.y,M=ct*ct+Ft*Ft,k=ct*R-Ft*vt;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(M),et=Math.sqrt(vt*vt+R*R),Z=ot.x-Ft/$,wt=ot.y+ct/$,dt=P.x-R/et,xt=P.y+vt/et,te=((dt-Z)*R-(xt-wt)*vt)/(ct*R-Ft*vt);Pt=Z+ct*te-J.x,st=wt+Ft*te-J.y;let rt=Pt*Pt+st*st;if(rt<=2)return new it(Pt,st);yt=Math.sqrt(rt/2)}else{let $=!1;ct>Number.EPSILON?vt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&($=!0):Math.sign(Ft)===Math.sign(R)&&($=!0),$?(Pt=-Ft,st=ct,yt=Math.sqrt(M)):(Pt=ct,st=Ft,yt=Math.sqrt(M/2))}return new it(Pt/yt,st/yt)}let tt=[];for(let J=0,ot=D.length,P=ot-1,Pt=J+1;J<ot;J++,P++,Pt++)P===ot&&(P=0),Pt===ot&&(Pt=0),tt[J]=O(D[J],D[P],D[Pt]);let j=[],lt,Et=tt.concat();for(let J=0,ot=T.length;J<ot;J++){let P=T[J];lt=[];for(let Pt=0,st=P.length,yt=st-1,ct=Pt+1;Pt<st;Pt++,yt++,ct++)yt===st&&(yt=0),ct===st&&(ct=0),lt[Pt]=O(P[Pt],P[yt],P[ct]);j.push(lt),Et=Et.concat(lt)}for(let J=0;J<g;J++){let ot=J/g,P=d*Math.cos(ot*Math.PI/2),Pt=m*Math.sin(ot*Math.PI/2)+v;for(let st=0,yt=D.length;st<yt;st++){let ct=W(D[st],tt[st],Pt);nt(ct.x,ct.y,-P)}for(let st=0,yt=T.length;st<yt;st++){let ct=T[st];lt=j[st];for(let Ft=0,vt=ct.length;Ft<vt;Ft++){let R=W(ct[Ft],lt[Ft],Pt);nt(R.x,R.y,-P)}}}let Xt=m+v;for(let J=0;J<H;J++){let ot=f?W(x[J],Et[J],Xt):x[J];_?(I.copy(L.normals[0]).multiplyScalar(ot.x),C.copy(L.binormals[0]).multiplyScalar(ot.y),S.copy(b[0]).add(I).add(C),nt(S.x,S.y,S.z)):nt(ot.x,ot.y,0)}for(let J=1;J<=h;J++)for(let ot=0;ot<H;ot++){let P=f?W(x[ot],Et[ot],Xt):x[ot];_?(I.copy(L.normals[J]).multiplyScalar(P.x),C.copy(L.binormals[J]).multiplyScalar(P.y),S.copy(b[J]).add(I).add(C),nt(S.x,S.y,S.z)):nt(P.x,P.y,u/h*J)}for(let J=g-1;J>=0;J--){let ot=J/g,P=d*Math.cos(ot*Math.PI/2),Pt=m*Math.sin(ot*Math.PI/2)+v;for(let st=0,yt=D.length;st<yt;st++){let ct=W(D[st],tt[st],Pt);nt(ct.x,ct.y,u+P)}for(let st=0,yt=T.length;st<yt;st++){let ct=T[st];lt=j[st];for(let Ft=0,vt=ct.length;Ft<vt;Ft++){let R=W(ct[Ft],lt[Ft],Pt);_?nt(R.x,R.y+b[h-1].y,b[h-1].x+P):nt(R.x,R.y,u+P)}}}Y(),Q();function Y(){let J=i.length/3;if(f){let ot=0,P=H*ot;for(let Pt=0;Pt<q;Pt++){let st=U[Pt];It(st[2]+P,st[1]+P,st[0]+P)}ot=h+g*2,P=H*ot;for(let Pt=0;Pt<q;Pt++){let st=U[Pt];It(st[0]+P,st[1]+P,st[2]+P)}}else{for(let ot=0;ot<q;ot++){let P=U[ot];It(P[2],P[1],P[0])}for(let ot=0;ot<q;ot++){let P=U[ot];It(P[0]+H*h,P[1]+H*h,P[2]+H*h)}}n.addGroup(J,i.length/3-J,0)}function Q(){let J=i.length/3,ot=0;ht(D,ot),ot+=D.length;for(let P=0,Pt=T.length;P<Pt;P++){let st=T[P];ht(st,ot),ot+=st.length}n.addGroup(J,i.length/3-J,1)}function ht(J,ot){let P=J.length;for(;--P>=0;){let Pt=P,st=P-1;st<0&&(st=J.length-1);for(let yt=0,ct=h+g*2;yt<ct;yt++){let Ft=H*yt,vt=H*(yt+1),R=ot+Pt+Ft,M=ot+st+Ft,k=ot+st+vt,$=ot+Pt+vt;Bt(R,M,k,$)}}}function nt(J,ot,P){l.push(J),l.push(ot),l.push(P)}function It(J,ot,P){Ut(J),Ut(ot),Ut(P);let Pt=i.length/3,st=w.generateTopUV(n,i,Pt-3,Pt-2,Pt-1);ee(st[0]),ee(st[1]),ee(st[2])}function Bt(J,ot,P,Pt){Ut(J),Ut(ot),Ut(Pt),Ut(ot),Ut(P),Ut(Pt);let st=i.length/3,yt=w.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);ee(yt[0]),ee(yt[1]),ee(yt[3]),ee(yt[1]),ee(yt[2]),ee(yt[3])}function Ut(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function ee(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ro[i.type]().fromJSON(i)),new s(n,t.options)}},Kg={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(f,1-m),new it(v,1-p)]:[new it(a,1-l),new it(h,1-u),new it(d,1-m),new it(g,1-p)]}};function jg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var cn=class s extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let w=[],b=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(C+_,1-b),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let b=h[p][w+1],_=h[p][w],L=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&d.push(b,_,C),(p!==n-1||l<Math.PI)&&d.push(_,L,C)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $n=class s extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let v=m/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,w=(i+1)*d+m;o.push(v,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var lo=class s extends _e{constructor(t=new io(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new it,h=new A,u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function v(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),w(),p()}function g(b){h=t.getPointAt(b/e,h);let _=o.normals[b],L=o.binormals[b];for(let C=0;C<=i;C++){let I=C/i*Math.PI*2,S=Math.sin(I),y=-Math.cos(I);l.x=y*_.x+S*L.x,l.y=y*_.y+S*L.y,l.z=y*_.z+S*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let _=1;_<=i;_++){let L=(i+1)*(b-1)+(_-1),C=(i+1)*b+(_-1),I=(i+1)*b+_,S=(i+1)*(b-1)+_;m.push(L,C,S),m.push(C,I,S)}}function w(){for(let b=0;b<=e;b++)for(let _=0;_<=i;_++)c.x=b/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ro[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Me=class extends ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dn=class extends Me{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Nr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=t,a=2*e-n;break;case Ec:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:o=t,l=2*n-e;break;case Ec:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,w=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,b=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+w*o[c+L]+b*o[l+L]+_*o[u+L];return r}},Dl=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ul=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Qg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[f+m]||v!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=ll;var Ri=class extends An{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=kr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends An{};Nl.prototype.ValueTypeName="color";var Fl=class extends An{};Fl.prototype.ValueTypeName="number";var zl=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Re.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends An{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends An{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=kr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends An{};Bl.prototype.ValueTypeName="vector";var Ol=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},tv=new Ol,Hl=class{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ho=class extends Qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ba=new Dt,Ah=new A,Rh=new A,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kl=class extends uo{constructor(){super(new Ce(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Rn=class extends Qs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ch=new Dt,Ls=new A,Sa=new A,Vl=class extends uo{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),Sa.copy(n.position),Sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Sa),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}},Un=class extends Qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var vs=class extends _e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var fo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ph(){return performance.now()}var nc="\\[\\]\\.:\\/",ev=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",nv="[^"+nc.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",ic),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),av=new RegExp("^"+iv+sv+rv+ov+"$"),lv=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let i=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(t){let e=av.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Gl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);var yo=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }

vec2 pmod(vec2 c, vec2 per){ return mod(c, per); }
vec2 grad2(vec2 c){ float a = hash12(c) * 6.2831853; return vec2(cos(a), sin(a)); }

// periodic gradient noise, approx range [-0.7, 0.7]
float gnoise(vec2 p, vec2 per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
  float a = dot(grad2(pmod(i, per)), f);
  float b = dot(grad2(pmod(i+vec2(1.,0.), per)), f-vec2(1.,0.));
  float c = dot(grad2(pmod(i+vec2(0.,1.), per)), f-vec2(0.,1.));
  float d = dot(grad2(pmod(i+vec2(1.,1.), per)), f-vec2(1.,1.));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
// periodic value noise [0,1]
float vnoise(vec2 p, vec2 per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  float a = hash12(pmod(i, per));
  float b = hash12(pmod(i+vec2(1.,0.), per));
  float c = hash12(pmod(i+vec2(0.,1.), per));
  float d = hash12(pmod(i+vec2(1.,1.), per));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
// fbm over uv in [0,1] with base frequency (tileable). returns ~[-1,1]
float fbm(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 9; i++){
    if(i >= oct) break;
    s += a * gnoise(p + float(i)*17.31, per);
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm * 1.6;
}
float fbmv(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 9; i++){
    if(i >= oct) break;
    s += a * vnoise(p + float(i)*31.7, per);
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm;
}
float ridged(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 8; i++){
    if(i >= oct) break;
    float n = 1.0 - abs(gnoise(p + float(i)*9.1, per) * 1.4);
    s += a * n * n;
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm;
}
// periodic voronoi: x=F1, y=F2, z=cell random, w = edge distance approx
vec4 voronoi(vec2 uv, vec2 freq, float jitter){
  vec2 p = uv * freq;
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0; vec2 id = vec2(0.0); vec2 mr = vec2(0.0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    float d = dot(r,r);
    if(d < d1){ d2 = d1; d1 = d; id = c; mr = r; } else if(d < d2){ d2 = d; }
  }
  // accurate border distance (second pass)
  float md = 8.0;
  for(int y=-2;y<=2;y++) for(int x=-2;x<=2;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    if(dot(mr-r,mr-r) > 0.00001) md = min(md, dot(0.5*(mr+r), normalize(r-mr)));
  }
  return vec4(sqrt(d1), sqrt(d2), hash12(id + 0.37), md);
}
// cheap periodic voronoi: x=F1, y=F2, z=cell random
vec3 voro(vec2 uv, vec2 freq, float jitter){
  vec2 p = uv * freq;
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0; vec2 id = vec2(0.0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    float d = dot(r,r);
    if(d < d1){ d2 = d1; d1 = d; id = c; } else if(d < d2){ d2 = d; }
  }
  return vec3(sqrt(d1), sqrt(d2), hash12(id + 0.37));
}
float sat(float x){ return clamp(x, 0.0, 1.0); }
float remap(float x, float a, float b){ return sat((x - a) / (b - a)); }
`;var cv=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function hv(s){return`
precision highp float;
varying vec2 vUv;
uniform int uMode;
uniform float uSize;
uniform vec2 uTile;
uniform vec3 uTint;
uniform vec3 uTint2;
uniform float uWear;
uniform float uSeed;
${yo}
struct S { vec3 albedo; float h; float rough; float metal; float ao; float alpha; };
${s}
S evalS(vec2 uv){
  S s; s.albedo = vec3(0.5); s.h = 0.0; s.rough = 0.8; s.metal = 0.0; s.ao = 1.0; s.alpha = 1.0;
  surf(fract(uv), s);
  return s;
}
void main(){
  vec2 uv = (gl_FragCoord.xy) / uSize;
  if(uMode == 0){
    S s = evalS(uv);
    gl_FragColor = vec4(clamp(s.albedo, 0.0, 1.0), s.alpha);
  } else if(uMode == 1){
    float e = 1.0 / uSize;
    float hL = evalS(uv - vec2(e, 0.0)).h;
    float hR = evalS(uv + vec2(e, 0.0)).h;
    float hD = evalS(uv - vec2(0.0, e)).h;
    float hU = evalS(uv + vec2(0.0, e)).h;
    // slope in world units: dh / (2 * texel world size)
    float dx = (hR - hL) / (2.0 * e * uTile.x);
    float dy = (hU - hD) / (2.0 * e * uTile.y);
    vec3 n = normalize(vec3(-dx, -dy, 1.0));
    gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
  } else {
    S s = evalS(uv);
    gl_FragColor = vec4(clamp(s.ao,0.0,1.0), clamp(s.rough, 0.02, 1.0), clamp(s.metal, 0.0, 1.0), 1.0);
  }
}
`}var iu={asphalt:{tile:[4,4],body:`
void surf(vec2 uv, inout S s){
  vec3 v = voro(uv, vec2(96.), 1.0);
  float stone = 1.0 - smoothstep(0.22, 0.5, v.x);
  vec3 v2 = voro(uv + 0.37, vec2(190.), 1.0);
  float stone2 = 1.0 - smoothstep(0.2, 0.46, v2.x);
  float grain = fbm(uv, vec2(96.), 4);
  float macro = fbm(uv, vec2(3.), 5);
  float exposure = remap(fbm(uv + 4.2, vec2(6.), 5), -0.7, 0.7);
  vec3 binder = vec3(0.040, 0.040, 0.043) * (0.82 + 0.3 * macro);
  vec3 stoneCol = mix(vec3(0.075, 0.073, 0.07), vec3(0.17, 0.16, 0.15), v.z);
  stoneCol = mix(stoneCol, vec3(0.22, 0.17, 0.13), step(0.85, v.z) * 0.6);
  float sMask = stone * smoothstep(0.35, 0.95, exposure * 0.7 + v.z * 0.45);
  float sMask2 = stone2 * exposure * 0.7;
  vec3 col = mix(binder, stoneCol, sMask);
  col = mix(col, stoneCol * 0.75, sMask2 * 0.6);
  vec2 w = vec2(fbm(uv, vec2(5.), 3), fbm(uv + 0.5, vec2(5.), 3)) * 0.035;
  vec4 cv = voronoi(uv + w, vec2(3.), 0.95);
  float crackMask = remap(fbm(uv + 0.2, vec2(2.), 3), -0.15, 0.35);
  float crackW = 0.006 + 0.01 * remap(fbm(uv + 7.0, vec2(9.), 3), -0.5, 0.5);
  float crack = (1.0 - smoothstep(0.0, crackW, cv.w)) * crackMask;
  float tar = (1.0 - smoothstep(0.02, 0.05, cv.w)) * remap(fbm(uv + 0.8, vec2(2.), 3), 0.05, 0.3);
  float oil = remap(fbm(uv + 3.1, vec2(4.), 6), 0.28, 0.75);
  float patchN = fbm(uv + 11.0, vec2(2.), 4);
  float patchM = smoothstep(0.32, 0.36, patchN);
  col = mix(col, col * vec3(0.8, 0.82, 0.86), patchM);
  col = mix(col, vec3(0.022, 0.021, 0.024), tar * 0.92);
  col *= 1.0 - oil * 0.5;
  col *= 1.0 - crack * 0.85;
  col *= 0.88 + 0.22 * grain;
  s.albedo = col;
  s.h = stone * (0.5 + 0.5 * v.z) * 0.0035 + sMask2 * 0.001 + grain * 0.0006 - crack * 0.012 + tar * 0.0012 - patchM * 0.002;
  s.rough = clamp(0.9 - sMask * 0.14 - tar * 0.4 - oil * 0.3 + grain * 0.05 - patchM * 0.05, 0.05, 1.0);
  s.metal = 0.0;
  s.ao = 1.0 - crack * 0.8 - (1.0 - stone) * 0.12;
}`},concrete:{tile:[3,3],body:`
void surf(vec2 uv, inout S s){
  vec2 m = uv * uTile; // meters
  float m1 = fbm(uv, vec2(3.), 6);
  float m2 = fbm(uv + 1.3, vec2(14.), 5);
  float fine = fbm(uv + 2.1, vec2(160.), 3);
  vec3 col = uTint * (0.84 + 0.2 * m1 + 0.09 * m2);
  col = mix(col, col * vec3(1.04, 1.0, 0.93), remap(m2, 0.0, 0.6));
  vec3 vp = voro(uv, vec2(120.), 1.0);
  float pore = (1.0 - smoothstep(0.04, 0.17, vp.x)) * step(0.7, vp.z);
  float streakN = fbm(vec2(uv.x, uv.y * 0.12), vec2(40., 1.), 5);
  float streak = remap(streakN, 0.05, 0.75) * (0.35 + 0.65 * remap(m1, -0.3, 0.5));
  float dx = abs(mod(m.x + 0.75, 1.5) - 0.75);
  float dy = abs(mod(m.y + 1.5, 3.0) - 1.5);
  float seam = 1.0 - smoothstep(0.0, 0.006, min(dx, dy));
  vec2 tp = vec2(mod(m.x, 0.75) - 0.375, mod(m.y, 0.75) - 0.375);
  float tr = length(tp);
  float tie = 1.0 - smoothstep(0.011, 0.016, tr);
  float tieStain = (1.0 - smoothstep(0.015, 0.05, tr)) * (1.0 - tie);
  float dirt = remap(fbm(uv + 6.0, vec2(5.), 5), 0.1, 0.7);
  col *= 1.0 - streak * 0.32;
  col *= 1.0 - dirt * 0.25;
  col *= 1.0 - pore * 0.45;
  col *= 1.0 - seam * 0.35;
  col = mix(col, col * vec3(0.7, 0.55, 0.45), tieStain * 0.6);
  col *= 1.0 - tie * 0.7;
  col *= 0.94 + 0.1 * fine;
  s.albedo = col;
  s.h = fine * 0.0004 + m2 * 0.0008 - pore * 0.002 - seam * 0.004 - tie * 0.008;
  s.rough = clamp(0.86 + fine * 0.05 - streak * 0.1 + dirt * 0.05, 0.1, 1.0);
  s.ao = 1.0 - pore * 0.5 - seam * 0.4 - tie * 0.5;
}`},brick:{tile:[2.25,2.4],body:`
void surf(vec2 uv, inout S s){
  vec2 m = uv * vec2(10., 32.);
  float row = floor(m.y);
  float off = mod(row, 2.0) * 0.5;
  vec2 bm = vec2(m.x + off, m.y);
  vec2 cell = floor(bm);
  vec2 f = fract(bm);
  vec2 cid = vec2(mod(cell.x, 10.), mod(cell.y, 32.));
  vec3 r3 = hash32(cid + 7.0);
  float en = fbm(uv, vec2(48.), 4) * 0.5 + 0.5;
  vec2 mw = vec2(0.024, 0.075);
  vec2 de = min(f, 1.0 - f) / mw;
  float e = min(de.x, de.y);
  float bmask = smoothstep(1.0, 1.4 + en * 1.8, e);
  float chip = step(0.8, fbm(uv + r3.x * 3.0, vec2(30.), 3) * 0.5 + 0.5 + (1.0 - smoothstep(1.0, 3.0, e)) * 0.25);
  bmask *= 1.0 - chip * 0.8;
  vec3 brickCol = mix(vec3(0.23, 0.075, 0.045), vec3(0.40, 0.16, 0.085), r3.x);
  brickCol = mix(brickCol, vec3(0.18, 0.11, 0.085), r3.y * 0.55);
  brickCol *= (r3.z > 0.92) ? 0.55 : 1.0;
  float surfN = fbm(uv, vec2(36.), 5);
  float speck = step(0.75, voro(uv, vec2(200.), 1.0).z) * 0.25;
  brickCol *= 0.82 + 0.28 * surfN - speck;
  vec3 mortar = vec3(0.27, 0.26, 0.245) * (0.75 + 0.35 * fbm(uv + 5.0, vec2(80.), 3));
  vec3 col = mix(mortar, brickCol, bmask);
  float grime = remap(fbm(vec2(uv.x, uv.y * 0.18), vec2(28., 1.), 5), -0.1, 0.8);
  float soot = remap(fbm(uv + 2.0, vec2(3.), 5), 0.0, 0.6);
  col *= 1.0 - grime * 0.4;
  col *= 1.0 - soot * 0.3;
  float eff = remap(fbm(uv + 9.0, vec2(5.), 6), 0.35, 0.85);
  col = mix(col, vec3(0.52, 0.5, 0.47), eff * 0.4 * (1.0 - bmask * 0.3));
  s.albedo = col;
  s.h = bmask * 0.012 + surfN * 0.0012 * bmask - chip * 0.004;
  s.rough = mix(0.97, 0.84 - r3.y * 0.08, bmask) - grime * 0.05;
  s.ao = mix(0.5, 1.0, bmask);
}`},container:{tile:[2.4,2.4],body:`
float trap(float t){ t = fract(t); return smoothstep(0.0, 0.14, t) - smoothstep(0.5, 0.64, t); }
void surf(vec2 uv, inout S s){
  float t = uv.x * 9.0;
  float prof = trap(t);
  float slope = abs(trap(t + 0.02) - trap(t - 0.02));
  float edge = smoothstep(0.05, 0.4, slope);
  float n1 = fbm(uv, vec2(4.), 6);
  float n2 = fbm(uv + 3.3, vec2(24.), 5);
  float fine = fbm(uv + 1.7, vec2(140.), 3);
  vec3 paint = uTint * (0.9 + 0.12 * n1);
  paint = mix(paint, paint * 1.25 + 0.02, remap(n1, 0.2, 0.8) * 0.5); // sun bleaching
  float wearN = n2 * 0.6 + n1 * 0.4 + edge * 0.35 + fine * 0.15;
  float chip = smoothstep(0.62 - uWear * 0.35, 0.66 - uWear * 0.35, wearN);
  float rustN = fbm(uv + 8.0, vec2(10.), 6);
  vec3 rust = mix(vec3(0.16, 0.05, 0.02), vec3(0.42, 0.17, 0.06), rustN * 0.5 + 0.5);
  rust = mix(rust, vec3(0.08, 0.04, 0.03), remap(fine, 0.2, 0.8));
  float streakN = fbm(vec2(uv.x, uv.y * 0.08), vec2(60., 1.), 5);
  float streak = remap(streakN, 0.1, 0.8) * remap(n1, -0.4, 0.4) * uWear;
  float dirt = (1.0 - smoothstep(0.0, 0.3, uv.y)) * (0.6 + 0.4 * n2);
  vec3 col = mix(paint, rust, chip);
  col = mix(col, vec3(0.2, 0.07, 0.025), streak * 0.65);
  col = mix(col, vec3(0.06, 0.05, 0.04), dirt * 0.55);
  col *= 0.95 + 0.08 * fine;
  // stencil-like dents
  float dent = fbm(uv + 2.0, vec2(3.), 3);
  s.albedo = col;
  s.h = prof * 0.032 + dent * 0.004 - chip * 0.0006 + fine * 0.0002;
  s.rough = clamp(mix(0.48 + n2 * 0.1, 0.88, chip) + dirt * 0.25 + streak * 0.1, 0.05, 1.0);
  s.ao = 1.0 - (1.0 - prof) * 0.15 - dirt * 0.2;
}`},galvanized:{tile:[1.52,1.52],body:`
void surf(vec2 uv, inout S s){
  float t = uv.x * 20.0 * 6.2831853;
  float prof = sin(t) * 0.5 + 0.5;
  vec3 sp = voro(uv, vec2(26.), 1.0);
  float spangle = sp.z;
  float n1 = fbm(uv, vec2(3.), 6);
  float n2 = fbm(uv + 2.0, vec2(16.), 5);
  float streak = remap(fbm(vec2(uv.x, uv.y * 0.1), vec2(50., 1.), 5), 0.0, 0.8);
  float whiteRust = remap(n2 * 0.6 + n1 * 0.5, 0.25, 0.7);
  float redRust = remap(fbm(uv + 5.0, vec2(8.), 6) + (1.0 - uv.y) * 0.25 * uWear, 0.45, 0.75) * uWear;
  vec3 zinc = vec3(0.52, 0.54, 0.56) * (0.85 + 0.25 * spangle) * (0.85 + 0.15 * n1);
  vec3 col = zinc;
  col = mix(col, vec3(0.55, 0.56, 0.55), whiteRust * 0.8);
  col = mix(col, mix(vec3(0.18, 0.06, 0.02), vec3(0.38, 0.16, 0.06), n2 * 0.5 + 0.5), redRust);
  col *= 1.0 - streak * 0.45;
  s.albedo = col;
  float metal = 1.0 - max(whiteRust * 0.85, redRust);
  s.metal = metal * (1.0 - streak * 0.4);
  s.h = prof * 0.018 + n2 * 0.0004 - redRust * 0.0005;
  s.rough = clamp(0.32 + spangle * 0.12 + whiteRust * 0.4 + redRust * 0.5 + streak * 0.15, 0.05, 1.0);
  s.ao = 0.85 + 0.15 * prof;
}`},diamondplate:{tile:[.6,.6],body:`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 14.0;
  vec2 c = floor(g);
  vec2 f = fract(g) - 0.5;
  float par = mod(c.x + c.y, 2.0);
  float a = par > 0.5 ? 0.7853981 : -0.7853981;
  mat2 R = mat2(cos(a), -sin(a), sin(a), cos(a));
  vec2 q = R * f;
  float d = length(q * vec2(1.0, 3.4));
  float lug = 1.0 - smoothstep(0.30, 0.36, d);
  float n1 = fbm(uv, vec2(4.), 6);
  float scratches = pow(ridged(uv * vec2(1.0, 1.0) + n1 * 0.02, vec2(60., 6.), 3), 6.0);
  float dirt = remap(fbm(uv + 2.0, vec2(6.), 6), -0.1, 0.6) * (1.0 - lug);
  float rust = remap(fbm(uv + 9.0, vec2(9.), 6), 0.35, 0.7) * uWear;
  vec3 steel = vec3(0.50, 0.50, 0.51) * (0.85 + 0.15 * n1);
  vec3 col = mix(steel, vec3(0.07, 0.06, 0.05), dirt * 0.85);
  col = mix(col, vec3(0.3, 0.12, 0.05), rust);
  col = mix(col, steel * 1.15, lug * 0.5);
  s.albedo = col;
  s.metal = 1.0 - max(dirt * 0.8, rust);
  s.h = lug * 0.0022 + scratches * -0.0001;
  s.rough = clamp(mix(0.55, 0.3, lug) + dirt * 0.35 + rust * 0.4 - scratches * 0.1, 0.05, 1.0);
  s.ao = mix(0.7, 1.0, lug);
}`},wood:{tile:[1.2,1.2],body:`
void surf(vec2 uv, inout S s){
  float pv = uv.y * 8.0;
  float plank = floor(pv);
  float pf = fract(pv);
  vec3 r = hash32(vec2(mod(plank, 8.0), 3.0));
  vec2 guv = vec2(uv.x + r.x, pf * 0.125 + r.y);
  float grain = fbm(vec2(guv.x, guv.y), vec2(3., 70.), 5);
  float rings = sin((guv.y * 70.0 + fbm(guv, vec2(4., 8.), 4) * 6.0) * 3.14159);
  float knotsV = voro(uv + r.z, vec2(3., 24.), 1.0).x;
  float knot = 1.0 - smoothstep(0.03, 0.12, knotsV);
  vec3 base = mix(vec3(0.33, 0.24, 0.15), vec3(0.45, 0.34, 0.22), r.x);
  vec3 weather = vec3(0.30, 0.28, 0.25);
  float wN = remap(fbm(uv + 4.0, vec2(4., 4.), 6), -0.3, 0.6);
  vec3 col = mix(base, weather, wN * 0.6 + 0.2);
  col *= 0.8 + 0.2 * rings * 0.5 + 0.25 * grain;
  col = mix(col, col * 0.45, knot);
  float gap = 1.0 - smoothstep(0.0, 0.04, min(pf, 1.0 - pf));
  col *= 1.0 - gap * 0.85;
  vec2 nailP = vec2(mod(uv.x * 1.2, 0.6) - 0.05, pf - 0.5);
  vec2 nailP2 = vec2(mod(uv.x * 1.2, 0.6) - 0.05, pf - 0.5);
  float nail = 1.0 - smoothstep(0.0045, 0.0065, length(vec2(nailP.x, nailP.y * 0.15)));
  col = mix(col, vec3(0.08, 0.06, 0.05), nail);
  s.albedo = col;
  s.metal = nail * 0.6;
  s.h = grain * 0.0006 + rings * 0.0003 - gap * 0.006 - knot * 0.0005;
  s.rough = clamp(0.82 + grain * 0.06 - nail * 0.3, 0.1, 1.0);
  s.ao = 1.0 - gap * 0.6;
}`},paintedmetal:{tile:[1,1],body:`
void surf(vec2 uv, inout S s){
  float n1 = fbm(uv, vec2(4.), 6);
  float n2 = fbm(uv + 3.0, vec2(18.), 5);
  float peel = fbm(uv + 1.0, vec2(220.), 2);
  float wearN = n2 * 0.65 + n1 * 0.35;
  float chip = smoothstep(0.6 - uWear * 0.4, 0.63 - uWear * 0.4, wearN);
  float primer = smoothstep(0.55 - uWear * 0.4, 0.58 - uWear * 0.4, wearN) - chip;
  float rust = chip * remap(fbm(uv + 7.0, vec2(12.), 4), -0.3, 0.3);
  float scratch = pow(ridged(uv + n1 * 0.05, vec2(40., 3.), 3), 8.0) * uWear;
  float streak = remap(fbm(vec2(uv.x, uv.y * 0.1), vec2(30., 1.), 5), 0.2, 0.8) * uWear;
  vec3 paint = uTint * (0.9 + 0.1 * n1);
  vec3 col = paint;
  col = mix(col, uTint2, primer);
  col = mix(col, vec3(0.42, 0.42, 0.43), chip);
  col = mix(col, vec3(0.3, 0.12, 0.04), rust);
  col = mix(col, vec3(0.5), scratch * 0.6);
  col = mix(col, col * vec3(0.55, 0.38, 0.28), streak * 0.5);
  s.albedo = col;
  s.metal = max(chip - rust, scratch);
  s.h = peel * 0.00008 - chip * 0.0002 + n2 * 0.0002;
  s.rough = clamp(0.42 + n1 * 0.08 + chip * 0.15 + rust * 0.4 + streak * 0.15, 0.05, 1.0);
  s.ao = 1.0;
}`},grunge:{tile:[1,1],body:`
void surf(vec2 uv, inout S s){
  float n1 = fbm(uv, vec2(5.), 6);
  float n2 = fbm(uv + 2.0, vec2(30.), 5);
  float sc = pow(ridged(uv + n1 * 0.03, vec2(50., 7.), 3), 10.0);
  float sc2 = pow(ridged(uv.yx + n2 * 0.02 + 0.3, vec2(70., 9.), 3), 12.0);
  float dirt = remap(n1 * 0.7 + n2 * 0.4, 0.1, 0.8);
  s.albedo = vec3(0.92 - dirt * 0.3 + n2 * 0.05) + (sc + sc2) * 0.25;
  s.h = n2 * 0.00012 - (sc + sc2) * 0.00004;
  s.rough = clamp(0.75 + n1 * 0.15 + dirt * 0.2 - (sc + sc2) * 0.3, 0.05, 1.0);
  s.metal = 1.0;
  s.ao = 1.0;
}`},stipple:{tile:[.12,.12],body:`
void surf(vec2 uv, inout S s){
  vec3 v = voro(uv, vec2(48.), 1.0);
  vec3 v2 = voro(uv + 0.5, vec2(96.), 1.0);
  float b = 1.0 - smoothstep(0.0, 0.6, v.x);
  float b2 = 1.0 - smoothstep(0.0, 0.6, v2.x);
  float n = fbm(uv, vec2(4.), 4);
  s.albedo = vec3(0.9 + n * 0.06 + b * 0.04);
  s.h = (b * 0.00025 + b2 * 0.00012);
  s.rough = 0.78 - b * 0.12 + n * 0.05;
  s.metal = 0.0;
  s.ao = 0.8 + 0.2 * b;
}`},fabric:{tile:[.06,.06],body:`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 32.0;
  vec2 c = floor(g); vec2 f = fract(g);
  float over = mod(c.x + floor(c.y), 2.0);
  float warp = sin(f.x * 3.14159) * (over > 0.5 ? 1.0 : 0.4);
  float weft = sin(f.y * 3.14159) * (over > 0.5 ? 0.4 : 1.0);
  float hgt = max(warp, weft);
  float fz = fbm(uv, vec2(64.), 3);
  float big = fbm(uv, vec2(2.), 4);
  s.albedo = vec3(0.75 + hgt * 0.2 + fz * 0.05 + big * 0.08);
  s.h = hgt * 0.00025 + fz * 0.00003;
  s.rough = 0.92;
  s.metal = 0.0;
  s.ao = 0.7 + 0.3 * hgt;
}`},carbon:{tile:[.05,.05],body:`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 16.0;
  vec2 c = floor(g); vec2 f = fract(g);
  float tw = mod(c.x + c.y, 4.0);
  bool horiz = tw < 2.0;
  float across = horiz ? f.y : f.x;
  float along = horiz ? f.x : f.y;
  float tow = sin(across * 3.14159);
  float fib = 0.5 + 0.5 * sin(across * 3.14159 * 18.0);
  s.albedo = vec3(0.03 + 0.03 * tow * (horiz ? 1.0 : 0.5) + fib * 0.01);
  s.h = tow * 0.00012 + fib * 0.00002 + (horiz ? 0.00003 : 0.0);
  s.rough = 0.35 + 0.15 * (1.0 - tow);
  s.metal = 0.0;
  s.ao = 0.85 + 0.15 * tow;
}`},chainlink:{tile:[.5,.5],body:`
void surf(vec2 uv, inout S s){
  float N = 9.0;
  float a = (uv.x + uv.y) * N;
  float b = (uv.x - uv.y) * N;
  float da = abs(fract(a) - 0.5);
  float db = abs(fract(b) - 0.5);
  float w = 0.075;
  // interleave: at each crossing one wire is above
  float cross = mod(floor(a) + floor(b), 2.0);
  float wa = 1.0 - smoothstep(w * 0.7, w, da);
  float wb = 1.0 - smoothstep(w * 0.7, w, db);
  float ha = sqrt(max(0.0, 1.0 - (da / w) * (da / w)));
  float hb = sqrt(max(0.0, 1.0 - (db / w) * (db / w)));
  float h = max(ha * (cross > 0.5 ? 1.0 : 0.6), hb * (cross > 0.5 ? 0.6 : 1.0));
  float n = fbm(uv, vec2(6.), 5);
  float rust = remap(fbm(uv + 3.0, vec2(10.), 5), 0.3, 0.7);
  s.albedo = mix(vec3(0.5, 0.51, 0.52) * (0.85 + 0.2 * n), vec3(0.3, 0.13, 0.05), rust * 0.7);
  s.alpha = max(wa, wb);
  s.h = h * 0.002;
  s.rough = 0.42 + rust * 0.4;
  s.metal = 1.0 - rust * 0.7;
  s.ao = 0.7 + 0.3 * h;
}`},bullethole:{tile:[.1,.1],body:`
void surf(vec2 uv, inout S s){
  vec2 p = uv - 0.5;
  float r = length(p);
  float ang = atan(p.y, p.x);
  float jag = gnoise(vec2(ang * 3.0, 0.0), vec2(19.0, 1.0)) * 0.03;
  float hole = 1.0 - smoothstep(0.06 + jag, 0.075 + jag, r);
  float crater = 1.0 - smoothstep(0.08 + jag, 0.22 + jag * 2.0, r);
  float cracks = pow(abs(sin(ang * 7.0 + gnoise(vec2(r * 9.0, ang), vec2(9., 6.)) * 3.0)), 30.0) * (1.0 - smoothstep(0.1, 0.42, r));
  float soot = 1.0 - smoothstep(0.05, 0.45, r + gnoise(p * 9.0, vec2(9.)) * 0.08);
  s.albedo = mix(vec3(0.5), vec3(0.02), max(hole, soot * 0.55));
  s.albedo = mix(s.albedo, vec3(0.65, 0.62, 0.58), crater * (1.0 - hole) * 0.35);
  s.alpha = clamp(max(max(hole, crater * 0.9), max(cracks, soot * 0.7)), 0.0, 1.0) * (1.0 - smoothstep(0.38, 0.5, r));
  s.h = -hole * 0.004 - crater * 0.002 - cracks * 0.0004;
  s.rough = 0.9;
  s.metal = 0.0;
  s.ao = 1.0 - hole * 0.9 - crater * 0.3;
}`},groundmask:{tile:[36,36],data:!0,body:`
void surf(vec2 uv, inout S s){
  float p = fbm(uv, vec2(5.), 7);
  float p2 = fbm(uv + 1.7, vec2(14.), 5);
  float puddle = smoothstep(0.12, 0.26, p + p2 * 0.25);
  float damp = smoothstep(-0.15, 0.2, p + p2 * 0.3);
  float macro = fbm(uv + 3.0, vec2(3.), 6) * 0.5 + 0.5;
  float dirt = remap(fbm(uv + 7.0, vec2(9.), 6), 0.1, 0.7);
  s.albedo = vec3(puddle, macro, dirt);
  s.alpha = damp;
}`}},_o=class{constructor(t,e=1){this.renderer=t,this.quality=e,this.camera=new Ei(-1,1,1,-1,0,1),this.scene=new hi,this.quad=new kt(new Ee(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.maxAniso=Math.min(16,t.capabilities.getMaxAnisotropy()),this.programs={}}_material(t){if(!this.programs[t]){let e=iu[t];this.programs[t]=new fe({vertexShader:cv,fragmentShader:hv(e.body),uniforms:{uMode:{value:0},uSize:{value:512},uTile:{value:new it(...e.tile)},uTint:{value:new _t(.5,.5,.5)},uTint2:{value:new _t(.4,.4,.4)},uWear:{value:.5},uSeed:{value:0}},depthTest:!1,depthWrite:!1})}return this.programs[t]}_rt(t,e){return new Oe(t,t,{type:ln,format:on,colorSpace:e?je:Qe,generateMipmaps:!0,minFilter:Tn,magFilter:Be,wrapS:oi,wrapT:oi,depthBuffer:!1,anisotropy:this.maxAniso})}bake(t,e={}){let n=iu[t],i=Math.max(64,Math.round((e.size||1024)*this.quality/64)*64),r=this._material(t),o=r.uniforms;o.uSize.value=i,e.tint?o.uTint.value.set(e.tint):o.uTint.value.setRGB(.36,.355,.34),e.tint2?o.uTint2.value.set(e.tint2):o.uTint2.value.setRGB(.35,.33,.3),o.uWear.value=e.wear!==void 0?e.wear:.5,this.quad.material=r;let a=this.renderer,l=a.getRenderTarget(),c={tile:n.tile.slice()},h=n.data?[["map",0,!1]]:[["map",0,!0],["normalMap",1,!1],["ormMap",2,!1]];for(let[u,f,d]of h){let m=this._rt(i,d);o.uMode.value=f,a.setRenderTarget(m),a.render(this.scene,this.camera),m.texture.name=`${t}.${u}`,c[u]=m.texture,c[u+"RT"]=m}return a.setRenderTarget(l),c}};var Mo={uniforms:{uTime:{value:0},uWetness:{value:1}}};function pe(s,t={}){let e=t.porosity??.5,n=t.gloss??.55,i=s.onBeforeCompile;return s.onBeforeCompile=(r,o)=>{i&&i(r,o),r.uniforms.uTime=Mo.uniforms.uTime,r.uniforms.uWetness=Mo.uniforms.uWetness,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWetWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vWetWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWetWorldPos;
      uniform float uTime; uniform float uWetness;
      float wetHash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float wetNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(wetHash(i), wetHash(i+vec2(1,0)), f.x), mix(wetHash(i+vec2(0,1)), wetHash(i+vec2(1,1)), f.x), f.y); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
        vec3 wN = normalize(inverseTransformDirection(normal, viewMatrix));
        float up = smoothstep(0.55, 0.95, wN.y);
        float side = 1.0 - smoothstep(0.2, 0.6, abs(wN.y));
        // running water sheets on vertical surfaces
        float hcoord = dot(vWetWorldPos.xz, vec2(0.7071));
        float sheet = wetNoise(vec2(hcoord * 6.0 + vWetWorldPos.x * 3.0, vWetWorldPos.y * 0.6 + uTime * 0.9));
        sheet = smoothstep(0.45, 0.85, sheet) * side;
        float wet = clamp(up * 0.9 + sheet * 0.8 + 0.25, 0.0, 1.0) * uWetness;
        roughnessFactor = mix(roughnessFactor, roughnessFactor * ${(1-n).toFixed(3)}, wet);
        diffuseColor.rgb *= 1.0 - ${e.toFixed(3)} * wet * 0.55;
      }`)},s.customProgramCacheKey=()=>"wet"+e+n+(t.key||""),s}function Je(s,t={}){let e=new Me({map:s.map,normalMap:s.normalMap,roughnessMap:s.ormMap,metalnessMap:t.metalMap?s.ormMap:null,roughness:1,metalness:t.metalMap?1:t.metalness??0,...t.extra});return t.normalScale&&e.normalScale.set(t.normalScale,t.normalScale),e.userData.tile=s.tile,e}var bo=class{constructor(t,e){this.gen=new _o(t,e.texScale),this.tex={},this.mats={}}steps(){let t=this.gen,e=this.tex;return[["Asphalt",()=>{e.asphalt=t.bake("asphalt",{size:2048}),e.groundmask=t.bake("groundmask",{size:1024})}],["Concrete",()=>{e.concrete=t.bake("concrete",{size:1024,tint:6183767}),e.concreteDark=t.bake("concrete",{size:1024,tint:4013114})}],["Brick",()=>{e.brick=t.bake("brick",{size:2048})}],["Shipping containers",()=>{e.contRed=t.bake("container",{size:1024,tint:7215632,wear:.65}),e.contBlue=t.bake("container",{size:1024,tint:1194846,wear:.5}),e.contGreen=t.bake("container",{size:1024,tint:2377772,wear:.7}),e.contOrange=t.bake("container",{size:1024,tint:10111506,wear:.45})}],["Sheet metal",()=>{e.galv=t.bake("galvanized",{size:1024,wear:.5}),e.diamond=t.bake("diamondplate",{size:1024,wear:.4})}],["Timber",()=>{e.wood=t.bake("wood",{size:1024})}],["Painted steel",()=>{e.pmGray=t.bake("paintedmetal",{size:512,tint:2763822,tint2:4866104,wear:.4}),e.pmBlue=t.bake("paintedmetal",{size:512,tint:995171,tint2:5591112,wear:.6}),e.pmRed=t.bake("paintedmetal",{size:512,tint:6951952,tint2:5591112,wear:.55}),e.pmYellow=t.bake("paintedmetal",{size:512,tint:11569680,tint2:3815994,wear:.5}),e.pmGreen=t.bake("paintedmetal",{size:512,tint:1781282,tint2:6969928,wear:.35})}],["Detail maps",()=>{e.grunge=t.bake("grunge",{size:1024}),e.stipple=t.bake("stipple",{size:512}),e.fabric=t.bake("fabric",{size:512}),e.carbon=t.bake("carbon",{size:512}),e.chain=t.bake("chainlink",{size:1024}),e.hole=t.bake("bullethole",{size:256})}],["Materials",()=>this.build()]]}build(){let t=this.tex,e=this.mats;e.concrete=pe(Je(t.concrete),{porosity:.8}),e.concreteDark=pe(Je(t.concreteDark),{porosity:.8}),e.brick=pe(Je(t.brick,{normalScale:1.2}),{porosity:.9}),e.contRed=pe(Je(t.contRed),{porosity:.2,gloss:.6}),e.contBlue=pe(Je(t.contBlue),{porosity:.2,gloss:.6}),e.contGreen=pe(Je(t.contGreen),{porosity:.2,gloss:.6}),e.contOrange=pe(Je(t.contOrange),{porosity:.2,gloss:.6}),e.galv=pe(Je(t.galv,{metalMap:!0}),{porosity:.1,gloss:.5}),e.diamond=pe(Je(t.diamond,{metalMap:!0}),{porosity:.1,gloss:.5}),e.wood=pe(Je(t.wood),{porosity:.9,gloss:.4}),e.pmGray=pe(Je(t.pmGray,{metalMap:!0}),{porosity:.2}),e.pmBlue=pe(Je(t.pmBlue,{metalMap:!0}),{porosity:.2}),e.pmRed=pe(Je(t.pmRed,{metalMap:!0}),{porosity:.2}),e.pmYellow=pe(Je(t.pmYellow,{metalMap:!0}),{porosity:.2}),e.pmGreen=pe(Je(t.pmGreen,{metalMap:!0}),{porosity:.2});let n=(r,o,a,l={})=>{let c=new Me({color:r,roughness:o,metalness:a,map:t.grunge.map,normalMap:t.grunge.normalMap,roughnessMap:t.grunge.ormMap,...l});return c.userData.tile=[1,1],c};e.rubber=pe(n(723724,.9,0),{porosity:.1}),e.steelDark=pe(n(2763565,.45,.9),{porosity:.05}),e.steel=pe(n(9079951,.35,1),{porosity:.05}),e.frameRed=pe(n(4854284,.55,.2),{porosity:.2}),e.frameBlue=pe(n(862788,.55,.2),{porosity:.2}),e.frameGreen=pe(n(1717024,.55,.2),{porosity:.2}),e.frameOrange=pe(n(7222288,.55,.2),{porosity:.2}),e.plasticBlack=pe(n(1118740,.6,0),{porosity:.05}),e.plasticOrange=pe(n(12599306,.55,0),{porosity:.05}),e.plasticWhite=pe(n(10133154,.5,0),{porosity:.05}),e.housing=pe(n(1908514,.5,.6),{porosity:.05}),e.chain=pe(new Me({map:t.chain.map,normalMap:t.chain.normalMap,roughnessMap:t.chain.ormMap,metalnessMap:t.chain.ormMap,metalness:1,roughness:1,alphaTest:.5,alphaToCoverage:!0,side:Ze}),{porosity:0,key:"chain"}),e.chain.userData.tile=t.chain.tile;{let r=e.chain.onBeforeCompile;e.chain.onBeforeCompile=(o,a)=>{r(o,a),o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`
          {
            vec2 g = fwidth(vMapUv) * 1024.0;
            float lod = max(0.0, log2(max(max(g.x, g.y), 1e-4)));
            diffuseColor.a = clamp(diffuseColor.a * (1.0 + lod * 0.55), 0.0, 1.0);
          }
          #include <alphatest_fragment>`)}}e.glassDark=new Dn({color:329223,roughness:.08,metalness:0,clearcoat:1,envMapIntensity:1.2});let i=(r,o)=>new Me({color:0,emissive:r,emissiveIntensity:o,roughness:.4});return e.sodiumLens=i(16751164,60),e.floodLens=i(14674175,80),e.doorLens=i(16767400,40),e.redLamp=i(16718346,50),e.neonPink=i(16722554,22),e.neonCyan=i(2480383,18),e.windowWarm=i(16757611,1.2),e.windowCool=i(10139903,.7),e.bulletHole=new Me({map:t.hole.map,normalMap:t.hole.normalMap,roughness:.9,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),e}};function _s(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=su(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let m=su(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function su(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new se(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let v=h.getComponent(f,m);a.setComponent(f+u,m,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Ii=new A,Li=new A;function ru(s,t,e=[0,0]){let n=s.attributes.position,i=s.attributes.normal,r=s.attributes.uv;r||(r=new se(new Float32Array(n.count*2),2),s.setAttribute("uv",r));let[o,a]=t;for(let l=0;l<n.count;l++){Ii.fromBufferAttribute(n,l),Li.fromBufferAttribute(i,l);let c=Math.abs(Li.x),h=Math.abs(Li.y),u=Math.abs(Li.z),f,d;h>=c&&h>=u?(f=Ii.x,d=-Ii.z*Math.sign(Li.y||1)):c>=u?(f=-Ii.z*Math.sign(Li.x),d=Ii.y):(f=Ii.x*Math.sign(Li.z),d=Ii.y),r.setXY(l,f/o+e[0],d/a+e[1])}return r.needsUpdate=!0,s}function di(s,t,e,n,i,r=!1){let o=s.attributes.uv,[a,l]=i,c=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let h=0;h<6;h++)for(let u=0;u<4;u++){let f=h*4+u,d=o.getX(f)*c[h][0],m=o.getY(f)*c[h][1];if(r){let v=d;d=m,m=v}o.setXY(f,d/a,m/l)}return s}function Ms(s,t,e,n=0,i=0){let r=s.attributes.uv;for(let o=0;o<r.count;o++)r.setXY(o,r.getX(o)*t+n,r.getY(o)*e+i);return s}var So=class{constructor(t,e,n="concrete",i={}){this.min=t,this.max=e,this.surface=n,this.bulletPass=!!i.bulletPass,this.noWalk=!!i.noWalk}},Eo=class{constructor(t){this.materials=t,this.groups=new Map,this.colliders=[]}add(t,e,n,i={}){let r=t.index?t.toNonIndexed():t.clone();n&&r.applyMatrix4(n);for(let l of Object.keys(r.attributes))["position","normal","uv"].includes(l)||r.deleteAttribute(l);let o=this.materials[e];if(!o)throw new Error("missing material "+e);i.uv==="world"&&ru(r,o.userData.tile||[1,1],i.uvOffset),r.attributes.uv||ru(r,[1,1]);let a=e+(i.noShadow?"|ns":"");if(this.groups.has(a)||this.groups.set(a,{matKey:e,geos:[],noShadow:!!i.noShadow}),this.groups.get(a).geos.push(r),i.collider){r.computeBoundingBox();let l=r.boundingBox;this.colliders.push(new So(l.min.clone(),l.max.clone(),i.surface||"concrete",i))}return r}box(t,e,n,i,r,o,a,l={}){let c=new Ot(t,e,n);l.uv==="local"&&di(c,t,e,n,this.materials[i].userData.tile||[1,1],l.rotateUV);let h=new Dt;return l.rotY&&h.makeRotationY(l.rotY),h.setPosition(r,o,a),this.add(c,i,h,{uv:l.uv==="local"?"local":"world",...l})}collider(t,e,n,i,r,o,a="concrete",l={}){this.colliders.push(new So(new A(t,e,n),new A(i,r,o),a,l))}build(t){let e=[];for(let[,n]of this.groups){let i=_s(n.geos,!1);i.computeBoundingSphere(),i.computeBoundingBox();let r=new kt(i,this.materials[n.matKey]);r.castShadow=!n.noShadow,r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.updateMatrix(),t.add(r),e.push(r),n.geos.forEach(o=>o.dispose())}return e}},Di=new A;function er(s,t,e,n=1e3,i=!1){let r=null,o=n;Di.set(1/e.x,1/e.y,1/e.z);for(let a of s){if(i&&a.bulletPass)continue;let l=(a.min.x-t.x)*Di.x,c=(a.max.x-t.x)*Di.x,h=0;if(l>c){let g=l;l=c,c=g}let u=(a.min.y-t.y)*Di.y,f=(a.max.y-t.y)*Di.y;if(u>f){let g=u;u=f,f=g}if(l>f||u>c)continue;u>l&&(l=u,h=1),f<c&&(c=f);let d=(a.min.z-t.z)*Di.z,m=(a.max.z-t.z)*Di.z;if(d>m){let g=d;d=m,m=g}if(l>m||d>c||(d>l&&(l=d,h=2),m<c&&(c=m),l<0||l>=o))continue;o=l;let v=new A;h===0?v.x=-Math.sign(e.x):h===1?v.y=-Math.sign(e.y):v.z=-Math.sign(e.z),r={t:l,normal:v,box:a}}return r&&(r.point=t.clone().addScaledVector(e,r.t)),r}var jt=(s,t,e)=>new A(s,t,e),wo=new A(1,1,1);function Nt(s,t,e,n=0,i=0,r=0,o=wo){return new Dt().compose(jt(s,t,e),new Re().setFromEuler(new Pe(i,n,r,"YXZ")),o)}var uv={D:[[[0,0],[0,1],[.32,1],[.48,.94],[.57,.78],[.6,.5],[.57,.22],[.48,.06],[.32,0],[0,0]]],A:[[[0,0],[.3,1],[.6,0]],[[.11,.37],[.49,.37]]],R:[[[0,0],[0,1],[.38,1],[.53,.94],[.6,.78],[.55,.6],[.4,.52],[0,.52]],[[.3,.52],[.6,0]]],K:[[[0,0],[0,1]],[[.58,1],[0,.42]],[[.2,.6],[.6,0]]],F:[[[0,0],[0,1],[.6,1]],[[0,.54],[.44,.54]]],O:[Array.from({length:25},(s,t)=>{let e=t/24*Math.PI*2;return[.3+Math.sin(e)*.3,.5+Math.cos(e)*.5]})],X:[[[0,0],[.6,1]],[[0,1],[.6,0]]]},dv=[[[-.55,.78],[-.28,.36],[.28,.36],[.55,.78],[.46,.08],[0,-.5],[-.46,.08],[-.55,.78]],[[-.27,.06],[-.09,0]],[[.09,0],[.27,.06]],[[-.06,-.36],[0,-.42],[.06,-.36]]];function ou(s,t,e,n){let i=[],r=jt(0,1,0);for(let o of s)for(let a=0;a<o.length-1;a++){let l=jt(o[a][0]*t+n.x,o[a][1]*t+n.y,n.z),c=jt(o[a+1][0]*t+n.x,o[a+1][1]*t+n.y,n.z),h=l.distanceTo(c);if(h<1e-4)continue;let u=new Zt(e,e,h,8,1,!0),f=new Re().setFromUnitVectors(r,c.clone().sub(l).normalize());u.applyMatrix4(new Dt().compose(l.clone().add(c).multiplyScalar(.5),f,wo)),i.push(u);let d=new cn(e,8,6);if(d.translate(c.x,c.y,c.z),i.push(d),a===0){let m=new cn(e,8,6);m.translate(l.x,l.y,l.z),i.push(m)}}return i}var sc=class extends en{constructor(t,e,n,i){super(),this.a=t,this.b=e,this.r=n,this.turns=i}getPoint(t,e=new A){let n=this.a.clone().lerp(this.b,t),i=t*this.turns*Math.PI*2;return e.set(n.x,n.y+Math.sin(i)*this.r,n.z+Math.cos(i)*this.r)}};function lu(s,t,e){let n=new Eo(t),i={shadowSpots:[],points:[],flicker:[]},r=new Ae;r.name="level",s.add(r),n.collider(-60,-2,-60,32,0,60,"asphalt");let o={red:["contRed","frameRed"],blue:["contBlue","frameBlue"],green:["contGreen","frameGreen"],orange:["contOrange","frameOrange"]};function a(S,y,x,T,F,U){let[H,q]=o[U],O=F?Math.PI/2:0,tt=Nt(S,y,x,O),j=(Q,ht,nt,It,Bt,Ut=0,ee=0,J=0)=>n.add(Q,ht,tt.clone().multiply(Nt(nt,It,Bt,J,Ut,ee)),{uv:"local"}),lt=new Ot(T-.12,2.59-.24,2.44-.08);di(lt,T-.12,2.59-.24,2.44-.08,t[H].userData.tile),j(lt,H,0,2.59/2,0);for(let Q of[-1,1])for(let ht of[-1,1]){let nt=new Ot(.17,2.59,.17);di(nt,.17,2.59,.17,[1,1]),j(nt,q,Q*(T/2-.085),2.59/2,ht*(2.44/2-.085))}for(let Q of[.08,2.59-.07])for(let ht of[-1,1]){let nt=new Ot(T-.3,.15,.13);di(nt,T,.15,.13,[1,1]),j(nt,q,0,Q,ht*(2.44/2-.065))}for(let Q of[.08,2.59-.07])for(let ht of[-1,1]){let nt=new Ot(.13,.15,2.14);di(nt,.13,.15,2.44,[1,1]),j(nt,q,ht*(T/2-.065),Q,0)}for(let Q of[-1,1])for(let ht of[-1,1])for(let nt of[.06,2.59-.06])j(new Ot(.19,.12,.19),"steelDark",Q*(T/2-.09),nt,ht*(2.44/2-.09));let Et=T/2-.02;for(let Q of[-.92,-.5,.5,.92]){let ht=new Zt(.02,.02,2.2399999999999998,8);j(ht,"steel",Et+.03,2.59/2,Q);for(let It of[.32,2.59-.32])j(new Ot(.06,.08,.07),"steelDark",Et+.03,It,Q);let nt=new Ot(.03,.03,.32);j(nt,"steel",Et+.07,1.15,Q+(Q>0?-.14:.14))}for(let Q of[-1,1])for(let ht of[.5,1.3,2.1])j(new Ot(.05,.14,.08),"steelDark",Et+.02,ht,Q*(2.44/2-.12));j(new Ot(.02,2.59-.3,.012),"steelDark",Et+.01,2.59/2,0);let Xt=(F?2.44:T)/2,Y=(F?T:2.44)/2;n.collider(S-Xt,y,x-Y,S+Xt,y+2.59,x+Y,"metal")}let l=["red","blue","green","orange"],c=0;for(let S of[-12.2,0,12.2])a(-27,0,S,12.19,!0,l[c++%4]),a(-27,2.59,S+(c%2?.15:-.1),12.19,!0,l[(c+1)%4]);a(-15,0,4,6.06,!1,"red"),a(-15,2.59,4.05,6.06,!1,"blue"),a(-15.3,0,6.5,6.06,!1,"green"),a(7,0,-2,12.19,!0,"blue"),a(19,0,8,6.06,!1,"orange"),a(21,0,-13,6.06,!0,"green"),a(21.05,2.59,-13.1,6.06,!0,"red"),a(-20,0,15,6.06,!0,"red");let h=-22,u=.4,f=(S,y,x,T)=>n.box(y-S,T-x,u,"brick",(S+y)/2,(x+T)/2,h-u/2,{uv:"world"}),d=(S,y,x,T)=>n.box(y-S,T-x,u,"galv",(S+y)/2,(x+T)/2,h-u/2+.02,{uv:"world"});f(-34,-14.5,0,4.2),f(-9.5,3.45,0,4.2),f(4.55,22,0,4.2),f(3.45,4.55,2.25,4.2),d(-34,-14.5,4.2,11),d(-9.5,22,4.2,11),d(-14.5,-9.5,5.3,11),n.box(56,.12,.1,"galv",-6,4.2,h+.03,{uv:"world"}),n.box(56.4,.25,.6,"steelDark",-6,11.1,h-.2),n.box(.4,11.2,30,"brick",22.2,5.6,h-15,{uv:"world"}),n.collider(-34,0,-40,22.4,11.3,h,"brick"),n.box(56,.35,.12,"concreteDark",-6,.175,h+.06,{uv:"world"});for(let S=-30;S<=18;S+=4){if(S>-16&&S<-8)continue;n.box(2.8,1.5,.12,"steelDark",S,8.6,h+.05);let y=((S*7+3)%5+5)%5<2;for(let x of[-.68,.68]){let T=new Ee(1.25,1.3);n.add(T,y?"windowWarm":"glassDark",Nt(S+x,8.6,h+.115),{noShadow:!0})}n.box(.06,1.3,.03,"steelDark",S,8.6,h+.13)}for(let S of[-31,-3,20.5]){let y=new Zt(.065,.065,11,12);Ms(y,.4,11),n.add(y,"galv",Nt(S,5.5,h+.12),{uv:"local"});for(let T=1;T<11;T+=2.5)n.box(.18,.04,.16,"steelDark",S,T,h+.08);let x=new Zt(.065,.065,.35,12);n.add(x,"galv",Nt(S,.15,h+.25,0,Math.PI/2),{uv:"local"})}let m=new Ot(5,5.3,.12);di(m,5,5.3,.12,[1.52,1.52],!0),n.add(m,"galv",Nt(-12,2.65,h-.25),{uv:"local"}),n.box(.18,5.3,.25,"steelDark",-14.6,2.65,h-.1),n.box(.18,5.3,.25,"steelDark",-9.4,2.65,h-.1),n.box(5.6,.7,.55,"galv",-12,5.65,h+.1,{uv:"world"}),n.box(5,.08,.16,"rubber",-12,.04,h-.2),n.box(1.1,2.22,.06,"pmGreen",4,1.11,h-.08,{uv:"world"}),n.box(.08,2.3,.18,"steelDark",3.41,1.15,h-.02),n.box(.08,2.3,.18,"steelDark",4.59,1.15,h-.02),n.box(1.26,.08,.18,"steelDark",4,2.29,h-.02),n.box(1,.25,.012,"diamond",4,.14,h-.045,{uv:"world"}),n.box(.04,.04,.12,"steel",4.38,1.05,h+.02),n.box(.16,.035,.035,"steel",4.32,1.05,h+.08),n.box(.09,.2,.05,"steelDark",4.38,1.2,h-.02),n.box(.6,.8,.22,"pmGray",6.2,1.6,h+.11,{uv:"world"}),n.box(.05,2.4,.05,"steel",6.2,3.2,h+.05),n.box(.5,.06,.06,"steel",6.5,4.38,h+.05),n.box(.32,.14,.3,"housing",4,2.75,h+.15),n.box(.26,.02,.22,"doorLens",4,2.67,h+.17,{noShadow:!0});{let S=new Rn(16763024,160,22,1.05,.65,2);S.position.set(4,2.62,h+.25),S.target.position.set(4,0,h+2.2),i.shadowSpots.push(S)}n.box(10,1.2,3.4,"concrete",-12,.6,h+1.7,{uv:"world",collider:!0,surface:"concrete"}),n.box(10,.08,.08,"steelDark",-12,1.18,h+3.38),n.box(4.2,.012,2.2,"diamond",-12,1.206,h+1.1,{uv:"world"});for(let S of[-15.5,-13.2,-10.8,-8.5])n.box(.28,.5,.14,"rubber",S,.8,h+3.47);for(let S=0;S<6;S++){let y=(S+1)*.2,x=-7+(5-S)*.3;n.box(.3,y,1.6,"concrete",x+.15,y/2,h+2.45,{uv:"world",collider:!0}),n.box(.3,.012,1.6,"diamond",x+.15,y+.006,h+2.45,{uv:"world"})}let v=[jt(-5.25,.2,h+3.22),jt(-6.85,1.2,h+3.22)];for(let S of[jt(-5.3,0,h+3.22),jt(-6.1,0,h+3.22),jt(-6.85,0,h+3.22)]){let y=1+Math.max(0,Math.min(1.2,(-5.2-S.x)/1.8*1.2)),x=new Zt(.025,.025,y+.3,8);n.add(x,"pmYellow",Nt(S.x,(y+.3)/2,S.z),{uv:"local"})}{let S=v[0].clone().add(jt(0,1.05,0)),y=v[1].clone().add(jt(0,1.05,0)),x=S.distanceTo(y),T=new Zt(.025,.025,x,8),F=new Re().setFromUnitVectors(jt(0,1,0),y.clone().sub(S).normalize());n.add(T,"pmYellow",new Dt().compose(S.clone().add(y).multiplyScalar(.5),F,wo),{uv:"local"})}for(let S of[h+.3,h+1.7,h+3.2])n.add(new Zt(.025,.025,1.05,8),"pmYellow",Nt(-16.9,1.72,S),{uv:"local"});n.add(new Zt(.025,.025,3,8),"pmYellow",Nt(-16.9,2.22,h+1.75,0,Math.PI/2),{uv:"local"}),n.collider(-17,1.2,h,-16.8,2.3,h+3.4,"metal",{bulletPass:!0});{let x=h+.18;n.box(9.9,2,.12,"housing",4.75,6+.55,h+.06);for(let j of[1,4.9,8.8])n.box(.06,.5,.12,"steelDark",j,6+1.75,h+.08);let T="DARKFOX",F=1.1,U=2.2,D={text:[],flick:[]};for(let j=0;j<T.length;j++){j===4&&(U+=.45);let lt=ou(uv[T[j]],F,.03,jt(U,6,x));(j===3?D.flick:D.text).push(...lt),U+=.6*F+.28}let W=ou(dv,1.3,.032,jt(.2+.6,6+.6,x)),H=(j,lt)=>{let Et=j.length>1?fv(j):j[0],Xt=new kt(Et,lt);return r.add(Xt),Xt};H(D.text,t.neonCyan);let q=t.neonCyan.clone();H(D.flick,q),H(W,t.neonPink);let O=new Un(3201279,45,16,2);O.position.set(5.6,6+.5,h+1);let tt=new Un(16726656,25,12,2);tt.position.set(.2+.6,6+.6,h+1),i.points.push(O,tt),i.flicker.push({mat:q,base:q.emissiveIntensity,light:O,lightBase:O.intensity})}for(let[S,y,x]of[[-20,-13,-6],[13,9,-5]]){n.box(.12,.6,.5,"steelDark",S,9.6,h+.25),n.add(new Ot(.7,.45,.25),"housing",Nt(S,9.4,h+.6,0,.9)),n.add(new Ee(.6,.36),"floodLens",Nt(S,9.4-.099,h+.6+.079,0,.9),{noShadow:!0});let T=new Rn(14673919,1700,45,.52,.55,2);T.userData.fogScale=.3,T.position.set(S,9.25,h+.85),T.target.position.set(y,0,x),i.shadowSpots.push(T)}function g(S,y,x,T){let F=Math.atan2(x,T);n.add(new Zt(.32,.36,.6,16),"concreteDark",Nt(S,.3,y),{uv:"world"});let U=new Zt(.07,.11,7.2,16);Ms(U,.6,7.2),n.add(U,"pmGray",Nt(S,3.6+.6,y),{uv:"local"});for(let j=0;j<4;j++)n.add(new Zt(.025,.03,.08,6),"steelDark",Nt(S+Math.cos(j*1.57+.78)*.22,.64,y+Math.sin(j*1.57+.78)*.22));let D=S+x*.8,W=y+T*.8,H=new Zt(.045,.05,1.7,10);n.add(H,"pmGray",Nt(D,7.65,W,F,Math.PI/2-.12),{uv:"local"});let q=S+x*1.65,O=y+T*1.65;n.add(new Ot(.42,.16,.8),"housing",Nt(q,7.72,O,F,-.06)),n.add(new Ot(.3,.04,.55),"sodiumLens",Nt(q,7.62,O,F,-.06),{noShadow:!0}),n.collider(S-.14,0,y-.14,S+.14,7.8,y+.14,"metal"),n.collider(S-.36,0,y-.36,S+.36,.6,y+.36,"concrete");let tt=new Rn(16749632,520,30,1.1,.7,2);tt.position.set(q,7.55,O),tt.target.position.set(q+x*.8,0,O+T*.8),i.shadowSpots.push(tt)}g(-8,11,1,0),g(14,3,-1,0),g(-20,-7,.7,-.7),g(15,17,-.7,-.7),n.box(58,2.4,.3,"concrete",0,1.2,24.15,{uv:"world",collider:!0}),n.box(58.2,.12,.42,"concreteDark",0,2.46,24.15,{uv:"world"}),au(n,jt(-29,2.5,24.1),jt(29,2.5,24.1),1.6),au(n,jt(29,0,-22),jt(29,0,24),3.4),n.collider(28.9,0,-22,29.1,4,24.3,"metal",{bulletPass:!0}),n.collider(-29,2.4,24,29,4.2,24.3,"metal",{bulletPass:!0}),n.box(6.8,3.6,.3,"concrete",25.6,1.8,-22.15,{uv:"world",collider:!0}),n.box(.3,5.2,4,"concrete",-27,2.6,-20.3,{uv:"world",collider:!0}),n.box(.3,5.2,5.8,"concrete",-27,2.6,21.2,{uv:"world",collider:!0}),n.collider(-34,0,-60,-28.3,20,60,"concrete"),n.box(3,.25,50,"concreteDark",30.5,-.125,1,{uv:"world"}),n.box(.4,1.8,50,"concreteDark",32.2,-.9,1,{uv:"world"}),n.box(.3,.18,50,"concrete",31.9,.09,1,{uv:"world"});for(let S of[-12,2,16])n.add(new Zt(.2,.24,.6,16),"steelDark",Nt(31.2,.3,S)),n.add(new cn(.25,16,8,0,Math.PI*2,0,Math.PI/2),"steelDark",Nt(31.2,.6,S));for(let S of[-9,9]){n.add(new Zt(.07,.09,6.2,12),"pmGray",Nt(29.35,3.1,S),{uv:"world"}),n.add(new Ot(.5,.3,.6),"housing",Nt(29,6.1,S,0,0,.5)),n.add(new Ee(.42,.5),"floodLens",Nt(28.84,5.97,S,-Math.PI/2,.5,0),{noShadow:!0});let y=new Rn(13623551,380,32,.75,.6,2);y.position.set(28.7,5.85,S),y.target.position.set(22,0,S*.6),y.userData.fogScale=.5,i.freeSpots=i.freeSpots||[],i.freeSpots.push(y)}function p(S,y,x){let T=new Ti,F=[[-.305,0],[.305,0],[.305,.075],[.15,.33],[.08,.81],[-.08,.81],[-.15,.33],[-.305,.075]];T.moveTo(F[0][0],F[0][1]);for(let H=1;H<F.length;H++)T.lineTo(F[H][0],F[H][1]);let U=new ms(T,{depth:2.9,bevelEnabled:!0,bevelThickness:.02,bevelSize:.015,bevelSegments:2,steps:1});U.translate(0,0,-1.45),n.add(U,"concrete",Nt(S,.015,y,x?0:Math.PI/2),{uv:"world"});let D=x?.32:1.47,W=x?1.47:.32;n.collider(S-D,0,y-W,S+D,.83,y+W,"concrete")}p(-5.5,13,!1),p(-2.5,13,!1),p(13.5,18.5,!0),p(-10,-8,!1),p(25,1,!0),p(25,4,!0),p(2,-14,!1);function w(S,y,x,T=1.1,F=0){let U=new Ot(T,T,T);di(U,T,T,T,t.wood.userData.tile),n.add(U,"wood",Nt(S,y+T/2,x,F),{uv:"local"});let D=.07,W=Nt(S,y+T/2,x,F);for(let q of[-1,1])for(let O of[-1,1])n.add(new Ot(T+.02,D,D),"wood",W.clone().multiply(Nt(0,q*(T/2-D/2+.01),O*(T/2-D/2+.01))),{uv:"world"}),n.add(new Ot(D,T+.02,D),"wood",W.clone().multiply(Nt(q*(T/2-D/2+.01),0,O*(T/2-D/2+.01))),{uv:"world"}),n.add(new Ot(D,D,T+.02),"wood",W.clone().multiply(Nt(q*(T/2-D/2+.01),O*(T/2-D/2+.01),0)),{uv:"world"});let H=T/2*(Math.abs(Math.cos(F))+Math.abs(Math.sin(F)));n.collider(S-H,y,x-H,S+H,y+T+.02,x+H,"wood")}w(-21,0,-17.2),w(-19.75,0,-17,1.1,.15),w(-21,0,-15.9,1,-.1),w(-20.6,1.12,-16.9,1,.3),w(16.5,0,-6.5,1.2,.4),w(17.6,0,-5.6,.9,.1),w(-6.5,0,4,1.1,.05);function b(S,y,x=0){let T=Nt(S,0,y,x);for(let F=0;F<5;F++)n.add(new Ot(1.2,.022,.12),"wood",T.clone().multiply(Nt(0,.135,-.44+F*.22)),{uv:"world"});for(let F of[-.44,0,.44])n.add(new Ot(1.2,.1,.1),"wood",T.clone().multiply(Nt(0,.07,F)),{uv:"world"});n.collider(S-.62,0,y-.6,S+.62,.15,y+.6,"wood")}function _(S,y,x,T,F=0,U=!1){let D=new Zt(.29,.29,.88,28,1,!0);Ms(D,1.82,.88);let W=U?Nt(S,y+.29,x,F,0,Math.PI/2):Nt(S,y+.44,x,F);n.add(D,T,W,{uv:"local"});for(let H of[-.44,.44]){let q=new Zt(.285,.285,.01,28);Ms(q,.6,.6),n.add(q,T,W.clone().multiply(Nt(0,H*.98,0)),{uv:"local"});let O=new $n(.29,.014,6,28);n.add(O,T,W.clone().multiply(Nt(0,H,0,0,Math.PI/2)),{uv:"world"})}for(let H of[-.15,.15])n.add(new $n(.295,.012,6,28),T,W.clone().multiply(Nt(0,H,0,0,Math.PI/2)),{uv:"world"});n.add(new Zt(.03,.03,.02,10),"steel",W.clone().multiply(Nt(.15,.445,.05))),U?n.collider(S-.45,y,x-.45,S+.45,y+.58,x+.45,"metal"):n.collider(S-.29,y,x-.29,S+.29,y+.88,x+.29,"metal")}b(12,-17.5),_(11.7,.15,-17.8,"pmBlue"),_(12.3,.15,-17.75,"pmBlue",1),_(11.75,.15,-17.2,"pmBlue",2),_(12.35,.15,-17.15,"pmRed",3),_(13.6,0,-16.2,"pmBlue",.5),_(14,0,-18.4,"pmRed",.2,!0),_(-5.2,0,-13.2,"pmRed",.3),_(-4.6,0,-13.6,"pmRed",1.3),_(-5,0,-12.6,"pmBlue",2.1),_(-12.5,0,9.5,"pmBlue",.7),b(-10.3,9.6,.3),_(22.5,0,12,"pmRed",.2);function L(S,y){n.add(new ao(.16,.6,20,1,!0),"plasticOrange",Nt(S,.33,y),{uv:"world"}),n.add(new Ot(.38,.04,.38),"plasticBlack",Nt(S,.02,y)),n.add(new Zt(.105,.125,.1,20,1,!0),"plasticWhite",Nt(S,.38,y),{uv:"world"})}L(-1,11.5),L(.5,11.8),L(11.5,16.5),L(-8.3,-6.6),L(3.6,-12.8),n.add(new Zt(.42,.42,.02,32),"diamond",Nt(-2,.004,6),{uv:"world",noShadow:!0});let C=n.build(r);for(let S of i.shadowSpots)S.castShadow=!0,S.shadow.mapSize.set(e.shadowSize,e.shadowSize),S.shadow.bias=-4e-4,S.shadow.normalBias=.03,S.shadow.camera.near=.3,S.shadow.radius=2,r.add(S),r.add(S.target);for(let S of i.points)r.add(S);for(let S of i.freeSpots||[])r.add(S),r.add(S.target);let I=new ho(2767445,788743,.6);return r.add(I),i.hemi=I,{root:r,meshes:C,colliders:n.colliders,lights:i,spawn:jt(0,0,20),spawnYaw:0,steam:[jt(-2,.05,6)],extraction:jt(4,0,h+1.2),droneWaypoints:[jt(0,6,12),jt(-9,5.5,-1),jt(0,6.5,-11),jt(12,6,-8),jt(13,5.5,11),jt(-12,6.5,-14),jt(-19,7.5,8),jt(4,7,4),jt(22,7,2),jt(-4,5.5,18),jt(9,6.5,-17),jt(-20,7,-3)]}}function fv(s){let t=s.map(l=>l.index?l.toNonIndexed():l);for(let l of t)for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);let e=0;t.forEach(l=>e+=l.attributes.position.count);let n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*2),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),i.set(l.attributes.normal.array,o*3),l.attributes.uv&&r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count;let a=new _e;return a.setAttribute("position",new se(n,3)),a.setAttribute("normal",new se(i,3)),a.setAttribute("uv",new se(r,2)),a.computeBoundingSphere(),a}function au(s,t,e,n){let i=e.clone().sub(t),r=i.length();i.normalize();let o=Math.atan2(i.x,i.z),a=Math.ceil(r/3);for(let u=0;u<=a;u++){let f=t.clone().addScaledVector(i,u/a*r);s.add(new Zt(.035,.035,n+.1,10),"steel",Nt(f.x,f.y+(n+.1)/2,f.z));let d=new Ot(.03,.5,.03);s.add(d,"steel",Nt(f.x,f.y+n+.2,f.z,o+Math.PI/2,0,0).multiply(Nt(0,0,0,0,.6,0)))}let l=t.clone().add(e).multiplyScalar(.5);for(let u of[n,.08]){let f=new Zt(.025,.025,r,8);s.add(f,"steel",Nt(l.x,t.y+u,l.z,o,Math.PI/2))}let c=new Ee(r,n-.1);Ms(c,r/s.materials.chain.userData.tile[0],(n-.1)/s.materials.chain.userData.tile[1]),s.add(c,"chain",Nt(l.x,t.y+n/2+.02,l.z,o+Math.PI/2),{uv:"local"});let h=new A(i.z,0,-i.x);for(let u of[0]){let f=t.clone().add(jt(0,n+.42,0)).addScaledVector(h,u),d=e.clone().add(jt(0,n+.42,0)).addScaledVector(h,u),m=new sc(jt(0,0,0),jt(r,0,0),.2,r/.22),v=new lo(m,Math.floor(r/.22*10),.005,4,!1),g=new Dt().compose(f,new Re().setFromUnitVectors(jt(1,0,0),i),wo);s.add(v,"steel",g,{noShadow:!1})}}function cu(s,t,e){let n=new Ae;n.name="sky",s.add(n);let i=new fe({side:Xe,depthWrite:!1,fog:!1,uniforms:{uTime:e},vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vDir;
      uniform float uTime;
      ${yo}
      float n3(vec2 p){ return fbm(fract(p), vec2(8.0), 6); }
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        // base gradient: sodium light pollution near horizon, deep blue above
        vec3 zenith = vec3(0.0035, 0.0045, 0.008);
        vec3 horizon = vec3(0.05, 0.028, 0.016);
        float hg = pow(1.0 - clamp(h, 0.0, 1.0), 4.0);
        vec3 col = mix(zenith, horizon, hg);
        // directional glow toward the city (east & south)
        float cityDir = pow(max(dot(normalize(vec2(d.x, d.z)), normalize(vec2(1.0, 0.35))), 0.0), 2.0);
        col += vec3(0.04, 0.02, 0.01) * cityDir * hg;
        // clouds (projected onto a plane)
        if(h > 0.0){
          vec2 cp = d.xz / (h + 0.12) * 0.12;
          vec2 wind = vec2(uTime * 0.0025, uTime * 0.001);
          float c1 = n3(cp + wind);
          float c2 = n3(cp * 2.3 + wind * 1.7 + 0.3);
          float cov = smoothstep(-0.25, 0.6, c1 * 0.75 + c2 * 0.35);
          float lit = 0.35 + 0.65 * hg + 0.4 * cityDir * hg;
          vec3 cloudCol = vec3(0.045, 0.03, 0.025) * lit;
          float dense = smoothstep(0.1, 0.9, c1 + 0.2);
          cloudCol *= mix(1.0, 0.45, dense * (1.0 - hg));
          col = mix(col, cloudCol, cov * smoothstep(0.0, 0.08, h));
        } else {
          col = horizon * 0.6;
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),r=new kt(new cn(900,48,24),i);r.frustumCulled=!1,r.renderOrder=-1e3,n.add(r);let o=mv(7),a=[],l=(D,W,H,q,O,tt,j)=>{for(let lt=0;lt<D;lt++){let Et=W+(o()-.5)*q,Xt=H+(o()-.5)*O,Y=12+o()*30,Q=12+o()*30,ht=tt+Math.pow(o(),2.2)*(j-tt);a.push([Et,Xt,Y,Q,ht])}};l(70,380,0,300,900,20,190),l(40,0,340,600,250,15,90),l(30,-320,0,200,700,15,70),l(40,0,-330,700,240,15,120);let c=new Ot(1,1,1);c.translate(0,.5,0);let h=new fe({uniforms:{uTime:e},vertexShader:`
      varying vec3 vW; varying vec3 vN; varying float vId; varying vec3 vLocal; varying vec3 vScale;
      void main(){
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
        vId = float(gl_InstanceID);
        vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        vLocal = position * vScale;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vW; varying vec3 vN; varying float vId; varying vec3 vLocal; varying vec3 vScale;
      uniform float uTime;
      float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      void main(){
        vec3 n = normalize(vN);
        vec3 base = vec3(0.004, 0.0045, 0.006) * (0.6 + 0.4 * clamp(vW.y / 120.0, 0.0, 1.0));
        vec3 col = base;
        if(abs(n.y) < 0.5){
          float u = abs(n.x) > 0.5 ? vLocal.z : vLocal.x;
          vec2 g = vec2(u / 3.2, vLocal.y / 3.6);
          vec2 cell = floor(g);
          vec2 f = fract(g);
          float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.25, f.y) * step(f.y, 0.85);
          float floorLit = h12(vec2(cell.y, vId * 3.1));
          float r = h12(cell + vId * 13.7 + floor(n.x * 2.0 + n.z * 3.0) * 7.0);
          float lit = step(0.72 - floorLit * 0.25, r);
          vec3 wc = mix(vec3(1.0, 0.62, 0.3), vec3(0.6, 0.75, 1.0), step(0.75, h12(cell * 1.7 + vId)));
          wc *= 0.25 + 0.75 * h12(cell + 3.3);
          float flick = 1.0;
          float fw = max(fwidth(g.x), fwidth(g.y));
          float aa = smoothstep(0.25, 0.7, fw);
          vec3 detail = win * lit * wc * 0.55 * flick + win * (1.0 - lit) * vec3(0.006, 0.007, 0.01);
          vec3 avg = vec3(0.07, 0.05, 0.035) * (0.6 + 0.8 * h12(vec2(floor(g.y / 4.0), vId)));
          col += mix(detail, avg, aa);
          // top floors / crown lighting
          float crown = smoothstep(vScale.y - 6.0, vScale.y - 1.0, vLocal.y) * step(80.0, vScale.y) * step(0.6, h12(vec2(vId, 1.0)));
          col += crown * vec3(0.4, 0.55, 0.9) * 0.6;
        }
        // aviation light
        gl_FragColor = vec4(col, 1.0);
      }`}),u=new ui(c,h,a.length),f=new He,d=[];a.forEach((D,W)=>{f.position.set(D[0],-2,D[1]),f.rotation.set(0,(o()-.5)*.4,0),f.scale.set(D[2],D[4],D[3]),f.updateMatrix(),u.setMatrixAt(W,f.matrix),D[4]>70&&d.push(new A(D[0],D[4]-2+1.5,D[1]))}),u.frustumCulled=!1,n.add(u);let m=t.steelDark,v=[],g=(D,W,H,q)=>{let O=new Ot(D,W,H);O.applyMatrix4(q),v.push(O)};for(let[D,W,H]of[[95,-45,.15],[120,25,-.1],[160,70,.05]]){let q=Nt(D,-1.5,W,H),O=(tt,j,lt,Et=0,Xt=0,Y=0)=>q.clone().multiply(Nt(tt,j,lt,Et,Xt,Y));for(let tt of[-9,9])for(let j of[-7,7])g(1.6,46,1.6,O(tt,23,j));for(let tt of[-7,7])g(20,2.2,1.4,O(0,46,tt));for(let tt of[-9,9])g(1.4,2.2,15,O(tt,46,0));for(let tt of[-9,9])g(1,1,18,O(tt,14,0,0,.75));g(85,3.2,3.2,O(-12,52,0)),g(26,2,2,O(25,56,0,0,0,-.25)),g(26,2,2,O(-40,56,0,0,0,.18)),g(4,10,4,O(0,55,0)),g(8,5,6,O(5,50,0)),d.push(new A().setFromMatrixPosition(O(-54,54,0))),d.push(new A().setFromMatrixPosition(O(0,60.5,0))),d.push(new A().setFromMatrixPosition(O(28,59,0)))}let p=pv(v),w=new kt(p,m);n.add(w);let b=new _e,_=new Float32Array(d.length*3),L=new Float32Array(d.length);d.forEach((D,W)=>{_.set([D.x,D.y,D.z],W*3),L[W]=o()}),b.setAttribute("position",new se(_,3)),b.setAttribute("phase",new se(L,1));let C=new fe({transparent:!0,depthWrite:!1,blending:mn,uniforms:{uTime:e},vertexShader:`
      attribute float phase; varying float vI; uniform float uTime;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float b = fract(uTime * 0.5 + phase);
        vI = smoothstep(0.0, 0.05, b) * (1.0 - smoothstep(0.25, 0.45, b));
        gl_PointSize = clamp(900.0 / -mv.z, 2.0, 10.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vI;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = exp(-dot(c,c) * 18.0); gl_FragColor = vec4(vec3(30.0, 1.5, 0.6) * d * (0.15 + vI), 1.0); }`}),I=new qs(b,C);I.frustumCulled=!1,n.add(I);let S=160,y=new Float32Array(S*3),x=new Float32Array(S);for(let D=0;D<S;D++){let W=o(),H=150+o()*350,q=-1.2+W*2.4;y.set([Math.cos(q)*H+40,2+o()*25,Math.sin(q)*H],D*3),x[D]=o()}let T=new _e;T.setAttribute("position",new se(y,3)),T.setAttribute("phase",new se(x,1));let F=new fe({transparent:!0,depthWrite:!1,blending:mn,vertexShader:`
      attribute float phase; varying vec3 vC;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vC = mix(vec3(6.0, 3.0, 1.2), vec3(3.0, 3.6, 5.0), step(0.7, phase)) * (0.4 + phase);
        gl_PointSize = clamp(500.0 / -mv.z, 1.5, 4.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec3 vC;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = exp(-dot(c,c) * 16.0); gl_FragColor = vec4(vC * d, 1.0); }`}),U=new qs(T,F);return U.frustumCulled=!1,n.add(U),{group:n,dome:r}}function pv(s){let t=0,e=s.map(l=>l.toNonIndexed());e.forEach(l=>t+=l.attributes.position.count);let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t*2),o=0;for(let l of e)n.set(l.attributes.position.array,o*3),i.set(l.attributes.normal.array,o*3),r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count;let a=new _e;return a.setAttribute("position",new se(n,3)),a.setAttribute("normal",new se(i,3)),a.setAttribute("uv",new se(r,2)),a.computeBoundingSphere(),a}function mv(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var To=class{constructor(t,e,n=!0){this.renderer=t,this.scale=e,this.enabled=n,this.camera=new Ce,this.textureMatrix=new Dt,this.rt=new Oe(4,4,{type:vn,generateMipmaps:!0,minFilter:Tn,magFilter:Be}),this.fog=new fs(724242,.022),this._plane=new wn,this._normal=new A(0,1,0),this._rp=new A,this._cp=new A,this._rot=new Dt,this._look=new A(0,0,-1),this._view=new A,this._target=new A,this._clip=new oe,this._q=new oe,n||this.rt.setSize(1,1)}setSize(t,e){this.enabled&&this.rt.setSize(Math.max(2,Math.floor(t*this.scale)),Math.max(2,Math.floor(e*this.scale)))}update(t,e,n){if(!this.enabled)return;let i=this._rp.set(0,0,0),r=this._normal,o=this._cp.setFromMatrixPosition(e.matrixWorld),a=this._view.subVectors(i,o);if(a.dot(r)>0)return;a.reflect(r).negate().add(i),this._rot.extractRotation(e.matrixWorld);let l=this._look.set(0,0,-1).applyMatrix4(this._rot).add(o),c=this._target.subVectors(i,l).reflect(r).negate().add(i),h=this.camera;h.position.copy(a),h.up.set(0,1,0).applyMatrix4(this._rot).reflect(r),h.lookAt(c),h.far=e.far,h.near=e.near,h.updateMatrixWorld(),h.projectionMatrix.copy(e.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(h.projectionMatrix).multiply(h.matrixWorldInverse),this._plane.setFromNormalAndCoplanarPoint(r,i).applyMatrix4(h.matrixWorldInverse);let u=this._clip.set(this._plane.normal.x,this._plane.normal.y,this._plane.normal.z,this._plane.constant),f=h.projectionMatrix.elements,d=this._q;d.x=(Math.sign(u.x)+f[8])/f[0],d.y=(Math.sign(u.y)+f[9])/f[5],d.z=-1,d.w=(1+f[10])/f[14],u.multiplyScalar(2/u.dot(d)),f[2]=u.x,f[6]=u.y,f[10]=u.z+1-.003,f[14]=u.w;let m=this.renderer,v=n.map(w=>w.visible);n.forEach(w=>w.visible=!1);let g=t.fog;t.fog=this.fog;let p=m.getRenderTarget();m.setRenderTarget(this.rt),m.clear(),m.render(t,h),m.setRenderTarget(p),t.fog=g,n.forEach((w,b)=>w.visible=v[b])}},gv=`
float rh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 rippleLayer(vec2 p, float t, float cell, float seed){
  vec2 g = p / cell;
  vec2 id = floor(g);
  vec2 f = fract(g) - 0.5;
  float r1 = rh(id + seed), r2 = rh(id + seed + 17.3);
  vec2 c = vec2(r1, r2) * 0.5 - 0.25;
  float age = fract(t * (0.7 + r1 * 0.6) + r2);
  vec2 d = f - c;
  float dist = length(d) * cell;
  float radius = age * cell * 0.42;
  float x = dist - radius;
  float ring = sin(x * 140.0) * exp(-x * x * 9000.0) * (1.0 - age) * (1.0 - age);
  return ring * normalize(d + 1e-5);
}
vec2 rainRipples(vec2 p, float t){
  vec2 n = rippleLayer(p, t, 0.42, 0.0);
  n += rippleLayer(p + vec2(0.21, 0.13), t * 1.1 + 0.37, 0.42, 5.0);
  n += rippleLayer(p + vec2(0.07, 0.29), t * 0.9 + 0.71, 0.33, 9.0) * 0.8;
  return n;
}
`;function hu(s,t,e,n){let i={uRefl:{value:t.rt.texture},uReflMatrix:{value:t.textureMatrix},uMask:{value:e},uTime:n.time,uReflOn:{value:t.enabled?1:0}};s.userData.uniforms=i,s.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uReflMatrix; varying vec4 vReflCoord; varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 wp4 = modelMatrix * vec4(transformed, 1.0);
        vWPos = wp4.xyz; vReflCoord = uReflMatrix * wp4;`);let o=r.fragmentShader.replace("#include <common>",`#include <common>
      uniform sampler2D uRefl; uniform sampler2D uMask; uniform float uTime; uniform float uReflOn;
      varying vec4 vReflCoord; varying vec3 vWPos;
      ${gv}
      float gPuddle = 0.0; float gWet = 0.0; vec2 gRip = vec2(0.0);
      float lineMask(float d, float w){ return 1.0 - smoothstep(w * 0.5 - 0.004, w * 0.5 + 0.004, abs(d)); }
    `);n.water?o=o.replace("#include <map_fragment>",`#include <map_fragment>
          gPuddle = 1.0; gWet = 1.0;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            vec2 p = vWPos.xz;
            float t = uTime;
            vec2 w = vec2(0.0);
            w += vec2(sin(p.x * 0.35 + t * 0.9 + p.y * 0.12), cos(p.y * 0.31 - t * 0.7)) * 0.05;
            w += vec2(sin(p.x * 1.3 - t * 1.7 + p.y * 0.8), cos(p.y * 1.1 + t * 1.3 - p.x * 0.4)) * 0.03;
            w += vec2(sin(p.x * 4.1 + t * 3.1 + p.y * 2.3), cos(p.y * 3.7 - t * 2.9 + p.x * 1.9)) * 0.012;
            gRip = rainRipples(p, t) * 0.35 + w;
            vec3 wn = normalize(vec3(-gRip.x, 1.0, -gRip.y));
            normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz);
          }`):o=o.replace("#include <map_fragment>",`#include <map_fragment>
        {
          vec4 m = texture2D(uMask, vWPos.xz / 36.0);
          gPuddle = m.r; gWet = clamp(m.a * 0.65 + 0.35, 0.0, 1.0);
          diffuseColor.rgb *= mix(0.8, 1.18, m.g);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.75, 0.68, 0.6), m.b * 0.4);
          // painted markings
          float wear = smoothstep(0.25, 0.75, texture2D(uMask, vWPos.xz / 3.7 + 0.31).g);
          float paint = 0.0; vec3 pcol = vec3(0.0);
          // yellow hatched zone in front of the loading dock
          vec2 q = vWPos.xz - vec2(-12.0, -16.6);
          float box = step(abs(q.x), 5.0) * step(abs(q.y), 2.0);
          float border = box * (1.0 - step(abs(q.x), 4.85) * step(abs(q.y), 1.85));
          float hatch = box * lineMask(fract((q.x + q.y) / 1.2) - 0.5, 0.18);
          float yellow = max(border, hatch);
          // white parking bays along the south
          vec2 b = vWPos.xz - vec2(-8.0, 21.0);
          float bays = step(abs(b.y), 2.5) * step(-12.0, b.x) * step(b.x, 10.0) * lineMask(mod(b.x, 2.75) - 1.375, 0.12);
          float bayLine = step(-12.0, b.x) * step(b.x, 10.0) * lineMask(b.y + 2.5, 0.12);
          // walkway line
          float walk = step(-20.0, vWPos.z) * step(vWPos.z, 20.0) * lineMask(vWPos.x - 0.6, 0.12) * step(0.4, fract(vWPos.z / 3.0));
          float white = max(max(bays, bayLine), walk);
          paint = max(yellow, white) * (1.0 - wear * 0.85);
          pcol = yellow > white ? vec3(0.62, 0.42, 0.04) : vec3(0.62, 0.62, 0.6);
          diffuseColor.rgb = mix(diffuseColor.rgb, pcol, paint * 0.9);
          // wet darkening
          diffuseColor.rgb *= mix(1.0, 0.5, gWet);
          diffuseColor.rgb *= mix(1.0, 0.45, gPuddle);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.38, gWet);
          roughnessFactor = mix(roughnessFactor, 0.035, gPuddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            vec3 flatN = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
            normal = normalize(mix(normal, flatN, gPuddle * 0.92));
            gRip = rainRipples(vWPos.xz, uTime) * (0.25 + 0.75 * gPuddle) * gWet;
            vec3 rn = normalize((viewMatrix * vec4(-gRip.x * 0.6, 0.0, -gRip.y * 0.6, 0.0)).xyz + normal);
            normal = normalize(mix(normal, rn, 0.9));
          }`),o=o.replace("#include <opaque_fragment>",`
      {
        vec3 V = normalize(vViewPosition);
        float NdV = clamp(dot(normal, -V) , 0.0, 1.0);
        float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
        vec2 ruv = vReflCoord.xy / vReflCoord.w;
        ruv += gRip * ${n.water?"0.045":"0.035"};
        float rough = clamp(roughnessFactor, 0.0, 1.0);
        float lod = rough * 7.0 + ${n.water?"1.6":"0.0"};
        vec3 rc = vec3(0.0);
        float stretch = (0.004 + rough * 0.05);
        rc += textureLod(uRefl, ruv + vec2(0.0, -2.0 * stretch), lod + 1.0).rgb * 0.12;
        rc += textureLod(uRefl, ruv + vec2(0.0, -1.0 * stretch), lod + 0.5).rgb * 0.22;
        rc += textureLod(uRefl, ruv, lod).rgb * 0.32;
        rc += textureLod(uRefl, ruv + vec2(0.0, 1.0 * stretch), lod + 0.5).rgb * 0.22;
        rc += textureLod(uRefl, ruv + vec2(0.0, 2.0 * stretch), lod + 1.0).rgb * 0.12;
        float strength = ${n.water?"1.0":"mix(0.35, 1.0, gPuddle) * gWet"} * (1.0 - rough * 0.6);
        outgoingLight += rc * F * strength * uReflOn;
      }
      #include <opaque_fragment>`),r.fragmentShader=o},s.customProgramCacheKey=()=>(n.water?"water":"ground")+"-refl"}function uu(s,t,e,n){let i=t.tex,r=new Ee(92,120,1,1);r.rotateX(-Math.PI/2),r.translate(-14,0,0);let o=r.attributes.position,a=r.attributes.uv;for(let d=0;d<o.count;d++)a.setXY(d,o.getX(d)/i.asphalt.tile[0],-o.getZ(d)/i.asphalt.tile[1]);let l=new Me({map:i.asphalt.map,normalMap:i.asphalt.normalMap,roughnessMap:i.asphalt.ormMap,roughness:1,metalness:0,envMapIntensity:.45});l.normalScale.set(1.5,1.5),hu(l,e,i.groundmask.map,{time:n});let c=new kt(r,l);c.receiveShadow=!0,c.name="ground",s.add(c);let h=new Ee(1200,1400,1,1);h.rotateX(-Math.PI/2),h.translate(632,-1.5,0);let u=new Me({color:131844,roughness:.06,metalness:0,envMapIntensity:.25});hu(u,e,i.groundmask.map,{time:n,water:!0});let f=new kt(h,u);return f.name="water",f.receiveShadow=!0,s.add(f),{ground:c,water:f}}var vv=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function nr(s,t,e={}){return new fe({vertexShader:vv,fragmentShader:s,uniforms:t,depthTest:!1,depthWrite:!1,...e})}function xv(s=64){let t=new Uint8Array(s*s*s),e=a=>{let l=new Float32Array(a*a*a);for(let c=0;c<l.length;c++)l[c]=Math.random();return l},n=[[4,.5],[8,.27],[16,.15],[32,.08]].map(([a,l])=>({n:a,amp:l,l:e(a)})),i=a=>a*a*(3-2*a),r=0;for(let a=0;a<s;a++)for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0;for(let u of n){let f=c/s*u.n,d=l/s*u.n,m=a/s*u.n,v=Math.floor(f),g=Math.floor(d),p=Math.floor(m),w=i(f-v),b=i(d-g),_=i(m-p),L=u.n,C=u.l,I=(F,U,D)=>C[(D%L*L+U%L)*L+F%L],S=I(v,g,p)*(1-w)+I(v+1,g,p)*w,y=I(v,g+1,p)*(1-w)+I(v+1,g+1,p)*w,x=I(v,g,p+1)*(1-w)+I(v+1,g,p+1)*w,T=I(v,g+1,p+1)*(1-w)+I(v+1,g+1,p+1)*w;h+=((S*(1-b)+y*b)*(1-_)+(x*(1-b)+T*b)*_)*u.amp}t[r++]=Math.max(0,Math.min(255,h*255))}let o=new Vs(t,s,s,s);return o.format=tr,o.type=ln,o.minFilter=o.magFilter=Be,o.wrapS=o.wrapT=o.wrapR=oi,o.unpackAlignment=1,o.needsUpdate=!0,o}function yv(){let s=document.createElement("canvas");s.width=s.height=512;let t=s.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);let e=3,n=()=>(e=e*16807%2147483647)/2147483647;t.globalCompositeOperation="lighter";for(let r=0;r<60;r++){let o=n()*512,a=n()*512,l=40+n()*140,c=t.createRadialGradient(o,a,0,o,a,l),h=.03+n()*.05;c.addColorStop(0,`rgba(255,255,255,${h})`),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.beginPath(),t.ellipse(o,a,l,l*(.4+n()*.6),n()*3,0,Math.PI*2),t.fill()}for(let r=0;r<220;r++){let o=n()*512,a=n()*512,l=1+Math.pow(n(),3)*14,c=t.createRadialGradient(o,a,l*.3,o,a,l),h=.15+n()*.35;c.addColorStop(0,`rgba(255,255,255,${h*.4})`),c.addColorStop(.8,`rgba(255,255,255,${h})`),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.beginPath(),t.arc(o,a,l,0,Math.PI*2),t.fill()}let i=new ps(s);return i.colorSpace=Qe,i}var Ao=class{constructor(t,e){this.renderer=t,this.q=e,this.quadScene=new hi,this.quadCam=new Ei(-1,1,1,-1,0,1),this.quad=new kt(new Ee(2,2),null),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);let n={type:vn,minFilter:Be,magFilter:Be,depthBuffer:!1};this.depthTex=new ds(4,4),this.depthTex.type=qn,this.sceneRT=new Oe(4,4,{type:vn,samples:e.msaa,depthBuffer:!0,depthTexture:this.depthTex}),this.fogRT=new Oe(4,4,n),this.hdrRT=new Oe(4,4,n),this.bloomRTs=[];for(let i=0;i<6;i++)this.bloomRTs.push(new Oe(4,4,n));this.noise3D=xv(64),this.lensDirt=yv(),this.time={value:0},this.params={exposure:1,bloom:.05,dirt:.5,fogDensity:.022,fogFalloff:.13,vignette:.32,grain:.02,ca:8e-4,damage:0,flash:0,saturation:1,lowHealth:0,ads:0}}setupLights(t,e,n){this.shadowSpots=t,this.freeSpots=e,this.points=n;let i=t.length,r=e.length,o=n.length,a="";for(let d=0;d<i;d++)a+=`
      {
        vec3 L = uSPos[${d}] - p; float d2 = dot(L, L); vec3 l = L * inversesqrt(d2);
        float cd = dot(-l, uSDir[${d}]);
        if(cd > uSCos[${d}].x){
          float spot = smoothstep(uSCos[${d}].x, uSCos[${d}].y, cd);
          vec4 sc = uSMat[${d}] * vec4(p, 1.0); sc.xyz /= sc.w;
          float sh = 1.0;
          if(sc.x > 0.0 && sc.x < 1.0 && sc.y > 0.0 && sc.y < 1.0 && sc.z < 1.0)
            sh = step(sc.z - 0.0015, unpackRGBAToDepth(texture2D(uSMap${d}, sc.xy)));
          float att = 1.0 / max(d2, 0.25);
          float rng = uSCos[${d}].z; att *= clamp(1.0 - pow(d2 / (rng * rng), 2.0), 0.0, 1.0);
          light += uSCol[${d}] * spot * sh * att * phaseHG(dot(l, rd));
        }
      }`;let l="";for(let d=0;d<r;d++)l+=`
      {
        vec3 L = uFPos[${d}] - p; float d2 = dot(L, L); vec3 l = L * inversesqrt(d2);
        float cd = dot(-l, uFDir[${d}]);
        if(cd > uFCos[${d}].x){
          float spot = smoothstep(uFCos[${d}].x, uFCos[${d}].y, cd);
          light += uFCol[${d}] * spot / max(d2, 0.25) * phaseHG(dot(l, rd));
        }
      }`;let c="";for(let d=0;d<o;d++)c+=`
      {
        vec3 L = uPPos[${d}] - p; float d2 = dot(L, L);
        light += uPCol[${d}] / max(d2, 0.5) * phaseHG(dot(L * inversesqrt(d2), rd)) * clamp(1.0 - d2 / (uPPos[${d}].y * 0.0 + 400.0), 0.0, 1.0);
      }`;let h=Array.from({length:i},(d,m)=>`uniform sampler2D uSMap${m};`).join(`
`),u={tDepth:{value:this.depthTex},tNoise:{value:this.noise3D},uInvProj:{value:new Dt},uCamWorld:{value:new Dt},uCamPos:{value:new A},uTime:this.time,uDensity:{value:.03},uFalloff:{value:.13},uAmbient:{value:new _t(9e-4,.0011,.0017)},uSteps:{value:this.q.fogSteps},uMaxDist:{value:70},uNear:{value:.1},uFar:{value:1e3},uFrame:{value:0},uSPos:{value:Array.from({length:Math.max(i,1)},()=>new A)},uSDir:{value:Array.from({length:Math.max(i,1)},()=>new A)},uSCol:{value:Array.from({length:Math.max(i,1)},()=>new A)},uSCos:{value:Array.from({length:Math.max(i,1)},()=>new A)},uSMat:{value:Array.from({length:Math.max(i,1)},()=>new Dt)},uFPos:{value:Array.from({length:Math.max(r,1)},()=>new A)},uFDir:{value:Array.from({length:Math.max(r,1)},()=>new A)},uFCol:{value:Array.from({length:Math.max(r,1)},()=>new A)},uFCos:{value:Array.from({length:Math.max(r,1)},()=>new it)},uPPos:{value:Array.from({length:Math.max(o,1)},()=>new A)},uPCol:{value:Array.from({length:Math.max(o,1)},()=>new A)}};for(let d=0;d<i;d++)u["uSMap"+d]={value:null};let f=`
      precision highp float;
      precision highp sampler3D;
      #include <packing>
      varying vec2 vUv;
      uniform sampler2D tDepth; uniform sampler3D tNoise;
      uniform mat4 uInvProj; uniform mat4 uCamWorld; uniform vec3 uCamPos;
      uniform float uTime, uDensity, uFalloff, uMaxDist, uNear, uFar, uFrame; uniform int uSteps;
      uniform vec3 uAmbient;
      uniform vec3 uSPos[${Math.max(i,1)}]; uniform vec3 uSDir[${Math.max(i,1)}]; uniform vec3 uSCol[${Math.max(i,1)}]; uniform vec3 uSCos[${Math.max(i,1)}]; uniform mat4 uSMat[${Math.max(i,1)}];
      uniform vec3 uFPos[${Math.max(r,1)}]; uniform vec3 uFDir[${Math.max(r,1)}]; uniform vec3 uFCol[${Math.max(r,1)}]; uniform vec2 uFCos[${Math.max(r,1)}];
      uniform vec3 uPPos[${Math.max(o,1)}]; uniform vec3 uPCol[${Math.max(o,1)}];
      ${h}
      float phaseHG(float c){ const float g = 0.55; float g2 = g * g; return (1.0 - g2) / (12.566 * pow(1.0 + g2 - 2.0 * g * c, 1.5)) + 0.02; }
      float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
      float density(vec3 p){
        float h = exp(-max(p.y, 0.0) * uFalloff);
        vec3 w = vec3(uTime * 0.25, -uTime * 0.05, uTime * 0.12);
        float n1 = texture(tNoise, p * 0.035 + w * 0.035).r;
        float n2 = texture(tNoise, p * 0.11 - w * 0.08).r;
        float n = smoothstep(0.25, 0.75, n1) * 0.8 + n2 * 0.5;
        return uDensity * h * (0.35 + n * 1.1);
      }
      void main(){
        float depth = texture2D(tDepth, vUv).r;
        vec4 ndc = vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
        vec4 vp = uInvProj * ndc; vp /= vp.w;
        float dist = length(vp.xyz);
        if(depth >= 0.99999) dist = 450.0;
        vec3 wp = (uCamWorld * vec4(vp.xyz, 1.0)).xyz;
        vec3 rd = normalize(wp - uCamPos);
        float L = min(dist, uMaxDist);
        float jitter = ign(gl_FragCoord.xy + uFrame * 5.588238);
        vec3 scat = vec3(0.0); float T = 1.0;
        float N = float(uSteps);
        float prevT = 0.0;
        for(int s = 0; s < 64; s++){
          if(s >= uSteps) break;
          float fi = (float(s) + jitter) / N;
          float t = L * fi * fi;
          float dt = t - prevT; prevT = t;
          vec3 p = uCamPos + rd * t;
          float sigma = density(p);
          vec3 light = uAmbient;
          ${a}
          ${l}
          ${c}
          float Ts = exp(-sigma * dt);
          scat += T * light * (1.0 - Ts);
          T *= Ts;
        }
        // last segment to L
        {
          vec3 p = uCamPos + rd * L;
          float sigma = density(p);
          float dt = L - prevT;
          float Ts = exp(-sigma * dt);
          scat += T * uAmbient * (1.0 - Ts); T *= Ts;
        }
        // analytic exponential height-fog tail beyond the march distance
        if(dist > L){
          float y0 = uCamPos.y + rd.y * L;
          float len = dist - L;
          float k = uFalloff;
          float dy = rd.y;
          float od = uDensity * 0.9 * exp(-max(y0, 0.0) * k) * (abs(dy) > 1e-4 ? (1.0 - exp(-k * dy * len)) / (k * dy) : len);
          float Tt = exp(-max(od, 0.0));
          scat += T * uAmbient * (1.0 - Tt) * 1.4;
          T *= Tt;
        }
        gl_FragColor = vec4(scat, T);
      }`;this.fogMat=nr(f,u),this.compositeMat=nr(`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tScene, tFog, tDepth; uniform vec2 uFogSize; uniform float uNear, uFar;
      float linZ(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main(){
        vec3 c = texture2D(tScene, vUv).rgb;
        float zf = linZ(texture2D(tDepth, vUv).r);
        vec2 tc = vUv * uFogSize - 0.5;
        vec2 b = floor(tc); vec2 f = tc - b;
        vec4 acc = vec4(0.0); float wsum = 0.0;
        for(int j = -1; j <= 2; j++) for(int i = -1; i <= 2; i++){
          vec2 o = vec2(float(i), float(j));
          vec2 uvl = (b + o + 0.5) / uFogSize;
          float zl = linZ(texture2D(tDepth, uvl).r);
          vec2 dd = o - f;
          float bw = exp(-dot(dd, dd) * 0.9);
          float dw = 1.0 / (0.02 + abs(zf - zl) / max(zf, 0.1));
          float w = bw * dw + 1e-5;
          acc += texture2D(tFog, uvl) * w; wsum += w;
        }
        vec4 fog = acc / wsum;
        gl_FragColor = vec4(c * fog.a + fog.rgb, 1.0);
      }`,{tScene:{value:this.sceneRT.texture},tFog:{value:this.fogRT.texture},tDepth:{value:this.depthTex},uFogSize:{value:new it},uNear:{value:.1},uFar:{value:1e3}}),this.downMat=nr(`
      precision highp float;
      varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel; uniform int uKaris;
      vec3 s(vec2 o){ return texture2D(tSrc, vUv + o * uTexel).rgb; }
      float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
      vec3 kw(vec3 c){ return c / (1.0 + lum(c)); }
      void main(){
        vec3 a = s(vec2(-2,2)), b = s(vec2(0,2)), c = s(vec2(2,2));
        vec3 d = s(vec2(-2,0)), e = s(vec2(0,0)), f = s(vec2(2,0));
        vec3 g = s(vec2(-2,-2)), h = s(vec2(0,-2)), i = s(vec2(2,-2));
        vec3 j = s(vec2(-1,1)), k = s(vec2(1,1)), l = s(vec2(-1,-1)), m = s(vec2(1,-1));
        vec3 o;
        if(uKaris == 1){
          vec3 g0 = (a+b+d+e) * 0.25, g1 = (b+c+e+f) * 0.25, g2 = (d+e+g+h) * 0.25, g3 = (e+f+h+i) * 0.25, g4 = (j+k+l+m) * 0.25;
          o = kw(g0) * 0.125 + kw(g1) * 0.125 + kw(g2) * 0.125 + kw(g3) * 0.125 + kw(g4) * 0.5;
          o = o / max(1.0 - lum(o), 0.05);
        } else {
          o = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
        }
        gl_FragColor = vec4(min(o, vec3(6e4)), 1.0);
      }`,{tSrc:{value:null},uTexel:{value:new it},uKaris:{value:0}}),this.upMat=nr(`
      precision highp float;
      varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      void main(){
        vec2 r = uTexel * uRadius;
        vec3 o = texture2D(tSrc, vUv).rgb * 4.0;
        o += (texture2D(tSrc, vUv + vec2(-r.x, 0)).rgb + texture2D(tSrc, vUv + vec2(r.x, 0)).rgb + texture2D(tSrc, vUv + vec2(0, -r.y)).rgb + texture2D(tSrc, vUv + vec2(0, r.y)).rgb) * 2.0;
        o += texture2D(tSrc, vUv + vec2(-r.x, -r.y)).rgb + texture2D(tSrc, vUv + vec2(r.x, -r.y)).rgb + texture2D(tSrc, vUv + vec2(-r.x, r.y)).rgb + texture2D(tSrc, vUv + vec2(r.x, r.y)).rgb;
        gl_FragColor = vec4(o / 16.0, 1.0);
      }`,{tSrc:{value:null},uTexel:{value:new it},uRadius:{value:1}},{blending:ql,blendSrc:po,blendDst:po,blendEquation:Gn}),this.finalMat=nr(`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tHdr, tBloom, tDirt;
      uniform float uExposure, uBloom, uDirt, uVignette, uGrain, uCA, uTime, uDamage, uFlash, uSat, uLowHealth, uAspect, uAds;
      vec3 aces(vec3 x){
        const mat3 ACESIn = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
        const mat3 ACESOut = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
        vec3 v = ACESIn * x;
        vec3 a = v * (v + 0.0245786) - 0.000090537;
        vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
        return clamp(ACESOut * (a / b), 0.0, 1.0);
      }
      float h(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
      void main(){
        vec2 uv = vUv;
        vec2 cc = uv - 0.5;
        float r2 = dot(cc * vec2(uAspect, 1.0), cc * vec2(uAspect, 1.0));
        vec2 caOff = cc * r2 * uCA * 6.0;
        vec3 col;
        col.r = texture2D(tHdr, uv - caOff).r;
        col.g = texture2D(tHdr, uv).g;
        col.b = texture2D(tHdr, uv + caOff).b;
        vec3 bloom = texture2D(tBloom, uv).rgb;
        vec3 dirt = texture2D(tDirt, uv * vec2(1.0, 1.0)).rgb;
        col = mix(col, bloom, uBloom) + bloom * dirt * uDirt * 0.06;
        col += uFlash * vec3(1.0, 0.8, 0.6) * 0.3;
        col *= uExposure;
        // white balance / split tone in linear
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        vec3 shadowTint = vec3(0.92, 1.0, 1.1);
        vec3 highTint = vec3(1.06, 1.0, 0.92);
        col *= mix(shadowTint, highTint, smoothstep(0.0, 0.6, l));
        col = aces(col);
        // saturation & contrast
        float g = dot(col, vec3(0.2126, 0.7152, 0.0722));
        float sat = uSat * (1.0 - uLowHealth * 0.7);
        col = mix(vec3(g), col, sat);
        col = clamp((col - 0.5) * 1.04 + 0.5, 0.0, 1.0);
        // vignette
        float vig = 1.0 - uVignette * smoothstep(0.15, 0.9, r2 * 1.6);
        vig *= 1.0 - uAds * 0.25 * smoothstep(0.1, 0.6, r2 * 2.0);
        col *= vig;
        // damage
        float edge = smoothstep(0.2, 0.75, r2 * 2.2);
        col = mix(col, vec3(0.45, 0.02, 0.01), edge * clamp(uDamage, 0.0, 1.0) * 0.75);
        col = mix(col, col * vec3(1.0, 0.6, 0.6), uLowHealth * edge * (0.6 + 0.4 * sin(uTime * 6.0)));
        // grain
        float n = h(gl_FragCoord.xy + fract(uTime * 13.37) * 1000.0) - 0.5;
        col += n * uGrain * smoothstep(0.0, 0.25, g) * (1.0 - g * 0.5);
        vec3 o = toSRGB(clamp(col, 0.0, 1.0));
        o += (h(gl_FragCoord.xy * 1.7 + 3.1) - 0.5) / 255.0;
        gl_FragColor = vec4(o, 1.0);
      }`,{tHdr:{value:this.hdrRT.texture},tBloom:{value:this.bloomRTs[0].texture},tDirt:{value:this.lensDirt},uExposure:{value:1},uBloom:{value:.05},uDirt:{value:1},uVignette:{value:.3},uGrain:{value:.03},uCA:{value:.002},uTime:this.time,uDamage:{value:0},uFlash:{value:0},uSat:{value:1},uLowHealth:{value:0},uAspect:{value:1.7},uAds:{value:0}})}setSize(t,e){this.w=t,this.h=e,this.sceneRT.setSize(t,e),this.hdrRT.setSize(t,e);let n=this.q.fogScale;this.fogRT.setSize(Math.max(2,Math.floor(t*n)),Math.max(2,Math.floor(e*n)));let i=t,r=e;for(let o of this.bloomRTs)i=Math.max(1,Math.floor(i/2)),r=Math.max(1,Math.floor(r/2)),o.setSize(i,r)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}updateLightUniforms(){let t=this.fogMat.uniforms,e=new A;this.shadowSpots.forEach((n,i)=>{t.uSPos.value[i].setFromMatrixPosition(n.matrixWorld),e.setFromMatrixPosition(n.target.matrixWorld),t.uSDir.value[i].copy(e).sub(t.uSPos.value[i]).normalize();let r=n.intensity*(n.userData.fogScale??1);t.uSCol.value[i].set(n.color.r*r,n.color.g*r,n.color.b*r),t.uSCos.value[i].set(Math.cos(n.angle),Math.cos(n.angle*(1-n.penumbra)),n.distance||1e3),t.uSMat.value[i].copy(n.shadow.matrix),t["uSMap"+i].value=n.shadow.map?n.shadow.map.texture:null}),this.freeSpots.forEach((n,i)=>{t.uFPos.value[i].setFromMatrixPosition(n.matrixWorld),e.setFromMatrixPosition(n.target.matrixWorld),t.uFDir.value[i].copy(e).sub(t.uFPos.value[i]).normalize();let r=n.visible?n.intensity*(n.userData.fogScale??1):0;t.uFCol.value[i].set(n.color.r*r,n.color.g*r,n.color.b*r),t.uFCos.value[i].set(Math.cos(n.angle),Math.cos(n.angle*(1-n.penumbra)))}),this.points.forEach((n,i)=>{t.uPPos.value[i].setFromMatrixPosition(n.matrixWorld);let r=n.visible?n.intensity*(n.userData.fogScale??1):0;t.uPCol.value[i].set(n.color.r*r,n.color.g*r,n.color.b*r)})}render(t,e,n,i,r){let o=this.renderer,a=this.params;this.time.value+=r,this.frame=(this.frame||0)+1,(this.frame%(this.q.shadowInterval||1)===0||this.frame<4)&&(o.shadowMap.needsUpdate=!0),n&&n.update(t,e,i),o.setRenderTarget(this.sceneRT),o.clear(),o.render(t,e);let l=this.fogMat.uniforms;l.uInvProj.value.copy(e.projectionMatrixInverse),l.uCamWorld.value.copy(e.matrixWorld),l.uCamPos.value.setFromMatrixPosition(e.matrixWorld),l.uNear.value=e.near,l.uFar.value=e.far,l.uDensity.value=a.fogDensity,l.uFalloff.value=a.fogFalloff,l.uFrame.value=(l.uFrame.value+1)%64,this.updateLightUniforms(),this._pass(this.fogMat,this.fogRT);let c=this.compositeMat.uniforms;c.uFogSize.value.set(this.fogRT.width,this.fogRT.height),c.uNear.value=e.near,c.uFar.value=e.far,this._pass(this.compositeMat,this.hdrRT);let h=this.hdrRT,u=this.downMat.uniforms;for(let m=0;m<this.bloomRTs.length;m++)u.tSrc.value=h.texture,u.uTexel.value.set(1/h.width,1/h.height),u.uKaris.value=m===0?1:0,this._pass(this.downMat,this.bloomRTs[m]),h=this.bloomRTs[m];let f=this.upMat.uniforms;for(let m=this.bloomRTs.length-1;m>0;m--){let v=this.bloomRTs[m];f.tSrc.value=v.texture,f.uTexel.value.set(1/v.width,1/v.height),o.autoClear=!1,this._pass(this.upMat,this.bloomRTs[m-1]),o.autoClear=!0}let d=this.finalMat.uniforms;d.uExposure.value=a.exposure,d.uBloom.value=a.bloom,d.uDirt.value=a.dirt,d.uVignette.value=a.vignette,d.uGrain.value=a.grain,d.uCA.value=a.ca,d.uDamage.value=a.damage,d.uFlash.value=a.flash,d.uSat.value=a.saturation,d.uLowHealth.value=a.lowHealth,d.uAspect.value=this.w/this.h,d.uAds.value=a.ads,this._pass(this.finalMat,null)}};var Ro=class{constructor(t,e){this.renderer=t,this.q=e,this.scene=new hi,this.time=Mo.uniforms.uTime,this.camera=new Ce(72,16/9,.06,2e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.lib=new bo(t,e),this.freeSpots=[],this.dynamicPoints=[]}steps(){return[...this.lib.steps(),["Assembling yard",()=>{this.level=lu(this.scene,this.lib.mats,this.q),this.freeSpots.push(...this.level.lights.freeSpots||[]),this.sky=cu(this.scene,this.lib.mats,this.time),this.refl=new To(this.renderer,this.q.reflScale,this.q.reflScale>0);let t=uu(this.scene,this.lib,this.refl,this.time);this.ground=t.ground,this.water=t.water}]]}lightRig(){if(this._rig)return this._rig;let t=[...this.level.lights.shadowSpots,...this.freeSpots,...this.level.lights.points,...this.dynamicPoints],e=t.length,n=i=>Array.from({length:e},i);return this._rig={lights:t,uniforms:{uLPos:{value:n(()=>new A)},uLDir:{value:n(()=>new A)},uLCol:{value:n(()=>new A)},uLCos:{value:n(()=>new it)}},glsl:`uniform vec3 uLPos[${e}]; uniform vec3 uLDir[${e}]; uniform vec3 uLCol[${e}]; uniform vec2 uLCos[${e}];
        vec3 lightAt(vec3 p, vec3 amb){
          vec3 c = amb;
          for(int i = 0; i < ${e}; i++){
            vec3 L = uLPos[i] - p; float d2 = max(dot(L, L), 0.3);
            vec3 l = L * inversesqrt(d2);
            float spot = uLCos[i].x < -1.5 ? 1.0 : smoothstep(uLCos[i].x, uLCos[i].y, dot(-l, uLDir[i]));
            c += uLCol[i] * spot / d2;
          }
          return c;
        }`},this._rig}updateLightRig(){let t=this._rig;if(!t)return;let e=t.uniforms,n=new A;t.lights.forEach((i,r)=>{e.uLPos.value[r].setFromMatrixPosition(i.matrixWorld);let o=i.visible?i.intensity:0;e.uLCol.value[r].set(i.color.r*o,i.color.g*o,i.color.b*o),i.isSpotLight?(n.setFromMatrixPosition(i.target.matrixWorld),e.uLDir.value[r].copy(n).sub(e.uLPos.value[r]).normalize(),e.uLCos.value[r].set(Math.cos(i.angle),Math.cos(i.angle*(1-i.penumbra)))):e.uLCos.value[r].set(-2,-2)})}finalize(){this.pipeline=new Ao(this.renderer,this.q),this.pipeline.setupLights(this.level.lights.shadowSpots,this.freeSpots,[...this.level.lights.points,...this.dynamicPoints]),this.reflHidden=[this.ground,this.water]}captureEnvironment(t=[]){let e=this.renderer,n=new Ws(128,{type:vn}),i=new Gs(.1,1500,n);i.position.set(0,2.2,2),this.scene.add(i);let r=t.map(c=>c.visible);t.forEach(c=>c.visible=!1);let o=this.scene.fog;this.scene.fog=new fs(724242,.02),e.shadowMap.needsUpdate=!0,i.update(e,this.scene),this.scene.fog=o,t.forEach((c,h)=>c.visible=r[h]);let a=new us(e),l=a.fromCubemap(n.texture);this.scene.environment=l.texture,this.scene.environmentIntensity=2.4,a.dispose(),n.dispose(),this.scene.remove(i)}setSize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.refl.setSize(t,e),this.pipeline.setSize(t,e)}update(t,e){for(let n of this.level.lights.flicker){let i=e*1,r=1;(Math.sin(i*.7)>.93||Math.sin(i*.31+1)>.985)&&(r=Math.random()<.5?.05:1),n.mat.emissiveIntensity=n.base*r,n.light.intensity=n.lightBase*(.75+.25*r)}}render(t){this.updateLightRig(),this.pipeline.render(this.scene,this.camera,this.refl,this.reflHidden,t)}};var rc={low:{name:"Low",texScale:.5,shadowSize:512,msaa:0,fogScale:.33,fogSteps:12,reflScale:0,pixelRatio:.75,rain:5e3,shadowInterval:3},medium:{name:"Medium",texScale:.75,shadowSize:1024,msaa:2,fogScale:.4,fogSteps:18,reflScale:.35,pixelRatio:1,rain:9e3,shadowInterval:2},high:{name:"High",texScale:1,shadowSize:1024,msaa:4,fogScale:.5,fogSteps:24,reflScale:.5,pixelRatio:1,rain:14e3,shadowInterval:2},ultra:{name:"Ultra",texScale:1,shadowSize:2048,msaa:4,fogScale:.5,fogSteps:32,reflScale:.6,pixelRatio:1.5,rain:2e4,shadowInterval:1}};function _v(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128),i=new Float32Array(32*32).map(()=>Math.random()),r=(a,l,c)=>{let h=Math.floor(a),u=Math.floor(l),f=a-h,d=l-u,m=g=>g*g*(3-2*g),v=(g,p)=>i[(p%c+c)%c*32+(g%c+c)%c];return(v(h,u)*(1-m(f))+v(h+1,u)*m(f))*(1-m(d))+(v(h,u+1)*(1-m(f))+v(h+1,u+1)*m(f))*m(d)};for(let a=0;a<128;a++)for(let l=0;l<128;l++){let c=l/128,h=a/128,u=0,f=.5,d=4;for(let _=0;_<5;_++)u+=r(c*d,h*d,Math.min(32,d))*f,f*=.5,d*=2;let m=c-.5,v=h-.5,g=Math.sqrt(m*m+v*v)*2,p=Math.max(0,1-g),w=Math.max(0,Math.min(1,(u-.25)*1.8))*Math.pow(p,1.2),b=(a*128+l)*4;n.data[b]=n.data[b+1]=n.data[b+2]=255*Math.min(1,u*1.2),n.data[b+3]=255*w}e.putImageData(n,0,0);let o=new ps(t);return o.colorSpace=Qe,o}var Co=class{constructor(t,e,n,i,r){this.max=e,this.count=0,this.p=[];let o=new vs;o.setAttribute("position",new se(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),o.setIndex([0,1,2,0,2,3]),this.aPos=new gn(new Float32Array(e*4),4),this.aVel=new gn(new Float32Array(e*4),4),this.aCol=new gn(new Float32Array(e*4),4),this.aMisc=new gn(new Float32Array(e*4),4);for(let l of[this.aPos,this.aVel,this.aCol,this.aMisc])l.setUsage(Xh);o.setAttribute("iPos",this.aPos),o.setAttribute("iVel",this.aVel),o.setAttribute("iCol",this.aCol),o.setAttribute("iMisc",this.aMisc),o.instanceCount=0,this.geo=o;let a=new fe({transparent:!0,depthWrite:!1,blending:n?mn:si,uniforms:{tSmoke:{value:r},uAmb:{value:new A(.02,.022,.03)},...i.uniforms},vertexShader:`
        attribute vec4 iPos; attribute vec4 iVel; attribute vec4 iCol; attribute vec4 iMisc;
        varying vec2 vUv; varying vec4 vCol; varying vec3 vMisc; varying vec3 vLight;
        uniform vec3 uAmb;
        ${i.glsl}
        void main(){
          vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
          vec2 q = position.xy;
          float size = iPos.w;
          if(iMisc.y > 2.5){
            vec3 v = mat3(viewMatrix) * iVel.xyz;
            vec4 p0 = projectionMatrix * mv;
            vec4 p1 = projectionMatrix * (mv + vec4(v * 0.02, 0.0));
            vec2 sd = p1.xy / p1.w - p0.xy / p0.w;
            vec2 dir = length(sd) > 1e-6 ? normalize(sd) : vec2(0.0, 1.0);
            vec2 side = vec2(-dir.y, dir.x);
            float len = length(iVel.xyz) * iVel.w;
            vec3 axis = normalize(v + vec3(1e-5));
            vec3 sideV = normalize(cross(axis, normalize(mv.xyz)));
            mv.xyz += axis * (q.y * 0.5 - 0.5) * len + sideV * q.x * size;
          } else {
            float c = cos(iMisc.x), s = sin(iMisc.x);
            q = mat2(c, -s, s, c) * q;
            mv.xy += q * size;
          }
          gl_Position = projectionMatrix * mv;
          vUv = position.xy * 0.5 + 0.5;
          vCol = iCol; vMisc = iMisc.yzw;
          vLight = iMisc.y > 0.5 && iMisc.y < 1.5 ? lightAt(iPos.xyz, uAmb) : vec3(1.0);
        }`,fragmentShader:`
        uniform sampler2D tSmoke;
        varying vec2 vUv; varying vec4 vCol; varying vec3 vMisc; varying vec3 vLight;
        void main(){
          float type = vMisc.x;
          vec2 c = vUv - 0.5;
          vec4 o;
          if(type < 0.5){
            float d = exp(-dot(c, c) * 22.0);
            o = vec4(vCol.rgb * d * vCol.a, 1.0);
          } else if(type < 1.5){
            vec4 t = texture2D(tSmoke, vUv);
            o = vec4(vCol.rgb * vLight * (0.6 + 0.4 * t.r), t.a * vCol.a);
          } else if(type < 2.5){
            vec4 t = texture2D(tSmoke, vUv);
            float heat = clamp(t.r * t.a * 1.6 * (1.0 - vMisc.y * 0.8), 0.0, 1.0);
            vec3 fire = mix(vec3(0.8, 0.12, 0.02), vec3(1.0, 0.75, 0.35), heat) * (2.0 + heat * 14.0);
            o = vec4(fire * vCol.rgb * t.a * vCol.a, 1.0);
          } else {
            float d = exp(-c.x * c.x * 30.0) * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
            o = vec4(vCol.rgb * d * vCol.a, 1.0);
          }
          gl_FragColor = o;
        }`});this.mesh=new kt(o,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?20:10,t.add(this.mesh)}spawn(t){this.p.length>=this.max&&this.p.shift();let e={pos:t.pos.clone(),vel:t.vel?t.vel.clone():new A,size:t.size??.1,grow:t.grow??0,life:t.life??1,age:0,col:t.col?t.col.clone():new _t(1,1,1),alpha:t.alpha??1,type:t.type??0,rot:t.rot??Math.random()*6.28,spin:t.spin??0,drag:t.drag??0,grav:t.grav??0,stretch:t.stretch??0,bounce:t.bounce??0,fadeIn:t.fadeIn??0,buoy:t.buoy??0,collide:t.collide};return this.p.push(e),e}update(t){let e=[];for(let l of this.p)l.age+=t,!(l.age>=l.life)&&(l.vel.y-=l.grav*t,l.vel.y+=l.buoy*t,l.vel.multiplyScalar(Math.max(0,1-l.drag*t)),l.pos.addScaledVector(l.vel,t),l.bounce&&l.pos.y<.01&&(l.pos.y=.01,l.vel.y=Math.abs(l.vel.y)*l.bounce,l.vel.x*=.6,l.vel.z*=.6),l.size+=l.grow*t,l.rot+=l.spin*t,e.push(l));this.p=e;let n=Math.min(e.length,this.max),i=this.aPos.array,r=this.aVel.array,o=this.aCol.array,a=this.aMisc.array;for(let l=0;l<n;l++){let c=e[l],h=c.age/c.life,u=c.alpha*(1-h);c.type===1&&(u=c.alpha*Math.sin(Math.min(1,h*1)*Math.PI)**.7*(1-h)),c.fadeIn&&(u*=Math.min(1,c.age/c.fadeIn)),i[l*4]=c.pos.x,i[l*4+1]=c.pos.y,i[l*4+2]=c.pos.z,i[l*4+3]=c.size,r[l*4]=c.vel.x,r[l*4+1]=c.vel.y,r[l*4+2]=c.vel.z,r[l*4+3]=c.stretch,o[l*4]=c.col.r,o[l*4+1]=c.col.g,o[l*4+2]=c.col.b,o[l*4+3]=u,a[l*4]=c.rot,a[l*4+1]=c.type,a[l*4+2]=h,a[l*4+3]=0}this.geo.instanceCount=n;for(let l of[this.aPos,this.aVel,this.aCol,this.aMisc])l.needsUpdate=!0,l.clearUpdateRanges(),l.addUpdateRange(0,n*4)}},Po=class{constructor(t,e,n){let i=new vs;i.setAttribute("position",new se(new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let r=new Float32Array(e*4);for(let u=0;u<e;u++)r[u*4]=Math.random(),r[u*4+1]=Math.random(),r[u*4+2]=Math.random(),r[u*4+3]=Math.random();i.setAttribute("seed",new gn(r,4)),i.instanceCount=e,this.uniforms={uTime:{value:0},uCam:{value:new A},uWind:{value:new A(1.2,0,.6)},...n.uniforms};let o=new fe({transparent:!0,depthWrite:!1,blending:mn,uniforms:this.uniforms,vertexShader:`
        attribute vec4 seed;
        uniform float uTime; uniform vec3 uCam; uniform vec3 uWind;
        varying vec2 vUv; varying vec3 vLight; varying float vFade;
        ${n.glsl}
        void main(){
          vec3 box = vec3(34.0, 22.0, 34.0);
          float speed = 8.5 + seed.w * 2.5;
          vec3 vel = vec3(uWind.x, -speed, uWind.z);
          vec3 p = seed.xyz * box + vel * uTime;
          p = mod(p - uCam + box * 0.5, box) + uCam - box * 0.5;
          p.y = max(p.y, -2.0);
          vec3 axis = normalize(vel);
          float len = speed * 0.028;
          vec3 toCam = normalize(cameraPosition - p);
          vec3 side = normalize(cross(axis, toCam));
          float dist = length(cameraPosition - p);
          float w = 0.0022 * max(1.0, dist * 0.35);
          vec3 wp = p + axis * position.y * len + side * position.x * w;
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
          vUv = position.xy;
          vLight = lightAt(p, vec3(0.04, 0.045, 0.06));
          vFade = smoothstep(0.4, 1.5, dist) * (1.0 - smoothstep(12.0, 17.0, dist)) * step(0.0, p.y) / max(1.0, dist * 0.35);
        }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vLight; varying float vFade;
        void main(){
          float a = (1.0 - abs(vUv.x)) * sin(vUv.y * 3.14159);
          gl_FragColor = vec4(vLight * 0.045 * a * vFade, 1.0);
        }`});this.mesh=new kt(i,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=30,t.add(this.mesh);let a=Math.floor(e*.12),l=new vs;l.setAttribute("position",new se(new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]),3)),l.setIndex([0,1,2,0,2,3]);let c=new Float32Array(a*4);for(let u=0;u<a*4;u++)c[u]=Math.random();l.setAttribute("seed",new gn(c,4)),l.instanceCount=a;let h=new fe({transparent:!0,depthWrite:!1,blending:mn,uniforms:this.uniforms,vertexShader:`
        attribute vec4 seed;
        uniform float uTime; uniform vec3 uCam;
        varying vec2 vUv; varying vec3 vLight; varying float vT;
        float h(float x){ return fract(sin(x * 91.345) * 47453.5453); }
        ${n.glsl}
        void main(){
          float period = 0.45 + seed.z * 0.3;
          float tt = uTime / period + seed.w;
          float cyc = floor(tt); float t = fract(tt);
          vec2 r = vec2(h(seed.x * 13.1 + cyc), h(seed.y * 7.7 + cyc * 1.3)) - 0.5;
          vec3 p = vec3(uCam.x + r.x * 24.0, 0.01, uCam.z + r.y * 24.0);
          vec3 toCam = cameraPosition - p; toCam.y = 0.0; toCam = normalize(toCam + vec3(1e-4));
          vec3 side = vec3(toCam.z, 0.0, -toCam.x);
          float s = 0.03 + t * 0.09;
          vec3 wp = p + side * position.x * s + vec3(0.0, position.y * s * 1.2, 0.0);
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
          vUv = position.xy; vT = t;
          vLight = lightAt(p + vec3(0.0, 0.1, 0.0), vec3(0.05, 0.055, 0.07)) / max(1.0, length(cameraPosition - p) * 0.25);
        }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vLight; varying float vT;
        void main(){
          vec2 c = vec2(vUv.x, vUv.y * 1.6);
          float crown = exp(-pow(length(c) - 0.6, 2.0) * 60.0) * smoothstep(0.0, 0.2, vUv.y);
          float drops = exp(-pow(length(c - vec2(0.0, 0.9)), 2.0) * 120.0) * 0.6;
          float a = (crown + drops) * (1.0 - vT) * (1.0 - vT);
          gl_FragColor = vec4(vLight * a * 0.05, 1.0);
        }`});this.splash=new kt(l,h),this.splash.frustumCulled=!1,this.splash.renderOrder=31,t.add(this.splash)}update(t,e){this.uniforms.uTime.value+=t,this.uniforms.uCam.value.copy(e)}},Io=class{constructor(t,e,n,i){this.scene=t,this.audio=i;let r=_v();this.add=new Co(t,2500,!0,n,r),this.alpha=new Co(t,900,!1,n,r),this.steamSources=[];let o=new Ee(1,1);this.decals=new ui(o,e.bulletHole,96),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.receiveShadow=!0,this.decalIdx=0,t.add(this.decals);let a=new Me({color:13145662,metalness:1,roughness:.28}),l=new Zt(.0048,.0048,.045,10);l.rotateZ(Math.PI/2),this.shellMesh=new ui(l,a,48),this.shellMesh.count=0,this.shellMesh.frustumCulled=!1,this.shellMesh.castShadow=!1,t.add(this.shellMesh),this.shells=[];let c=new Ot(1,1,1);this.debrisMesh=new ui(c,e.housing,80),this.debrisMesh.count=0,this.debrisMesh.frustumCulled=!1,this.debrisMesh.castShadow=!0,t.add(this.debrisMesh),this.debris=[],this._m=new Dt,this._q=new Re,this._e=new Pe,this._s=new A}addSteam(t){this.steamSources.push({pos:t,acc:0})}impact(t,e,n){let i=e,r=n==="metal",o=n==="wood";this.add.spawn({pos:t.clone().addScaledVector(i,.02),size:r?.18:.1,life:.06,col:new _t(8,5,2.5),type:0});let a=r?14:o?2:6;for(let c=0;c<a;c++){let h=i.clone().multiplyScalar(2+Math.random()*4).add(new A((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6));this.add.spawn({pos:t.clone(),vel:h,size:.006,life:.25+Math.random()*.5,col:new _t(9,4.5,1.4),type:3,stretch:.035,grav:9.8,drag:1.5,bounce:.35})}let l=o?new _t(.35,.27,.18):r?new _t(.25,.25,.27):new _t(.42,.4,.37);for(let c=0;c<(r?2:4);c++)this.alpha.spawn({pos:t.clone().addScaledVector(i,.05),vel:i.clone().multiplyScalar(.6+Math.random()).add(new A((Math.random()-.5)*.6,Math.random()*.5,(Math.random()-.5)*.6)),size:.06+Math.random()*.05,grow:.5,life:.8+Math.random()*.8,col:l,alpha:.75,type:1,drag:2.5,spin:(Math.random()-.5)*2});for(let c=0;c<(r?0:5);c++){let h=i.clone().multiplyScalar(1.5+Math.random()*2.5).add(new A((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3));this.alpha.spawn({pos:t.clone(),vel:h,size:.008+Math.random()*.01,life:.6,col:l.clone().multiplyScalar(.5),alpha:1,type:1,grav:9.8,bounce:.2})}this.addDecal(t,i)}addDecal(t,e){let n=this._q.setFromUnitVectors(new A(0,0,1),e),i=new Re().setFromAxisAngle(new A(0,0,1),Math.random()*6.28);n.multiply(i);let r=.08+Math.random()*.04;this._m.compose(t.clone().addScaledVector(e,.004),n,this._s.set(r,r,r)),this.decals.setMatrixAt(this.decalIdx,this._m),this.decalIdx=(this.decalIdx+1)%96,this.decals.count=Math.max(this.decals.count,this.decalIdx===0?96:this.decalIdx),this.decals.instanceMatrix.needsUpdate=!0}tracer(t,e,n=new _t(14,6,2),i=320,r=.012){let o=e.clone().sub(t),a=o.length();o.normalize(),this.add.spawn({pos:t.clone(),vel:o.multiplyScalar(i),size:.012,life:a/i,col:n,type:3,stretch:r,alpha:1})}muzzleSmoke(t,e){this.alpha.spawn({pos:t.clone(),vel:e.clone().multiplyScalar(.8).add(new A(0,.25,0)),size:.04,grow:.25,life:1+Math.random()*.6,col:new _t(.5,.5,.52),alpha:.28,type:1,drag:1.5,buoy:.2,spin:Math.random()-.5})}ejectShell(t,e){this.shells.length>=48&&this.shells.shift(),this.shells.push({pos:t.clone(),vel:e.clone(),rot:new Pe(Math.random()*6,Math.random()*6,Math.random()*6),spin:new A((Math.random()-.5)*30,(Math.random()-.5)*30,20+Math.random()*20),age:0,bounced:0})}explosion(t){for(let e=0;e<26;e++){let n=new A(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*5);this.add.spawn({pos:t.clone().add(n.clone().multiplyScalar(.05)),vel:n,size:.35+Math.random()*.4,grow:1.6,life:.45+Math.random()*.45,col:new _t(1,1,1),type:2,drag:4,buoy:1.5,spin:(Math.random()-.5)*3})}for(let e=0;e<18;e++){let n=new A(Math.random()-.5,Math.random()*.6,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3);this.alpha.spawn({pos:t.clone(),vel:n,size:.5+Math.random()*.5,grow:1.1,life:2.5+Math.random()*2.5,col:new _t(.08,.075,.07),alpha:.85,type:1,drag:1.6,buoy:.6,spin:Math.random()-.5,fadeIn:.15})}for(let e=0;e<60;e++){let n=new A(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(6+Math.random()*14);this.add.spawn({pos:t.clone(),vel:n,size:.01,life:.5+Math.random()*1.2,col:new _t(12,5,1.2),type:3,stretch:.03,grav:9.8,drag:.8,bounce:.3})}this.add.spawn({pos:t.clone(),size:2.2,life:.12,col:new _t(30,18,8),type:0});for(let e=0;e<14;e++){let n=new A(Math.random()-.5,Math.random()*.8+.1,Math.random()-.5).normalize().multiplyScalar(3+Math.random()*6),i=.03+Math.random()*.09;this.debris.length>=80&&this.debris.shift(),this.debris.push({pos:t.clone(),vel:n,rot:new Pe(Math.random()*6,Math.random()*6,0),spin:new A((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),size:new A(i,i*(.2+Math.random()*.6),i*(.5+Math.random())),age:0,smoke:Math.random()<.35})}}damageSmoke(t,e){this.alpha.spawn({pos:t.clone(),vel:new A((Math.random()-.5)*.4,.6,(Math.random()-.5)*.4),size:.12,grow:.6,life:1.6,col:new _t(.06,.06,.06),alpha:e?.7:.4,type:1,drag:1,buoy:.4,spin:1}),e&&Math.random()<.4&&this.add.spawn({pos:t.clone(),vel:new A(0,.6,0),size:.08,grow:.3,life:.25,col:new _t(1,1,1),type:2,buoy:1})}update(t,e){for(let o of this.steamSources)for(o.acc+=t;o.acc>.09;)o.acc-=.09,this.alpha.spawn({pos:o.pos.clone().add(new A((Math.random()-.5)*.4,.15,(Math.random()-.5)*.4)),vel:new A(.35+(Math.random()-.5)*.3,.9+Math.random()*.6,.15+(Math.random()-.5)*.3),size:.25,grow:.7,life:3.5+Math.random()*1.5,col:new _t(.55,.56,.58),alpha:.32,type:1,drag:.5,spin:(Math.random()-.5)*.6,fadeIn:.4});this.add.update(t),this.alpha.update(t);let n=this._m,i=this._q,r=0;for(let o of this.shells){o.age+=t,o.vel.y-=9.8*t,o.pos.addScaledVector(o.vel,t);let a=e(o.pos);o.pos.y<a+.005&&(o.pos.y=a+.005,Math.abs(o.vel.y)>.4&&(o.bounced<2&&this.audio&&this.audio.shellClink(o.pos,o.bounced),o.bounced++),o.vel.y=Math.abs(o.vel.y)*.35,o.vel.x*=.5,o.vel.z*=.5,o.spin.multiplyScalar(.5)),o.rot.x+=o.spin.x*t,o.rot.y+=o.spin.y*t,o.rot.z+=o.spin.z*t,n.compose(o.pos,i.setFromEuler(o.rot),this._s.set(1,1,1)),this.shellMesh.setMatrixAt(r++,n)}this.shells=this.shells.filter(o=>o.age<8),this.shellMesh.count=r,this.shellMesh.instanceMatrix.needsUpdate=!0,r=0;for(let o of this.debris){o.age+=t,o.vel.y-=9.8*t,o.pos.addScaledVector(o.vel,t);let a=e(o.pos);o.pos.y<a+o.size.y*.5&&(o.pos.y=a+o.size.y*.5,o.vel.y=Math.abs(o.vel.y)*.25,o.vel.x*=.5,o.vel.z*=.5,o.spin.multiplyScalar(.4)),o.rot.x+=o.spin.x*t,o.rot.y+=o.spin.y*t,o.rot.z+=o.spin.z*t,o.smoke&&o.age<3&&Math.random()<t*12&&this.damageSmoke(o.pos,!1),n.compose(o.pos,i.setFromEuler(o.rot),o.size),this.debrisMesh.setMatrixAt(r++,n)}this.debris=this.debris.filter(o=>o.age<25),this.debrisMesh.count=r,this.debrisMesh.instanceMatrix.needsUpdate=!0}};var ir=new A;function xn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;ir.copy(t),ir[n]=0,ir.normalize();let c=.5*o/(o+a),h=1-ir.angleTo(s)/l;return Math.sign(ir[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Lo=class extends Ot{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new A,v=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=xn(m,l,"z","y",r,n),f[p+1]=1-xn(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[p+0]=1-xn(m,l,"z","y",r,n),f[p+1]=1-xn(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[p+0]=1-xn(m,l,"x","z",r,t),f[p+1]=xn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-xn(m,l,"x","z",r,t),f[p+1]=1-xn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-xn(m,l,"x","y",r,t),f[p+1]=1-xn(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[p+0]=xn(m,l,"x","y",r,t),f[p+1]=1-xn(m,l,"y","x",r,e);break}}};var Wt=(s,t,e)=>new A(s,t,e),Do=Wt(1,1,1),sr=(s,t,e,n=0,i=0,r=0,o=Do)=>new Dt().compose(Wt(s,t,e),new Re().setFromEuler(new Pe(n,i,r,"XYZ")),o);function du(s,t){let e=s.onBeforeCompile;return s.onBeforeCompile=(n,i)=>{e&&e(n,i),n.uniforms.uVMProj=t.uVMProj,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uVMProj;`).replace("#include <project_vertex>",`#include <project_vertex>
  gl_Position = uVMProj * mvPosition;
  gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w;`)},s.customProgramCacheKey=()=>"viewmodel-"+s.uuid.slice(0,4),s}var bs=class{constructor(){this.groups={}}add(t,e,n){var r;let i=t.index?t.toNonIndexed():t;n&&i.applyMatrix4(n);for(let o of Object.keys(i.attributes))["position","normal","uv"].includes(o)||i.deleteAttribute(o);((r=this.groups)[e]||(r[e]=[])).push(i)}box(t,e,n,i,r,o,a,l=0,c=0,h=0){this.add(new Ot(t,e,n),i,sr(r,o,a,l,c,h))}rbox(t,e,n,i,r,o,a,l,c=0,h=0,u=0){this.add(new Lo(t,e,n,2,i),r,sr(o,a,l,c,h,u))}cyl(t,e,n,i,r,o,a,l,c=Math.PI/2,h=0,u=0){this.add(new Zt(t,e,n,i),r,sr(o,a,l,c,h,u))}build(t,e){for(let[n,i]of Object.entries(this.groups)){let r=new kt(_s(i,!1),e[n]);r.frustumCulled=!1,r.receiveShadow=!0,t.add(r)}}};function Ui(s,t,e=.002){let n=new Ti;n.moveTo(s[0][0],s[0][1]);for(let r=1;r<s.length;r++)n.lineTo(s[r][0],s[r][1]);let i=new ms(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});return i.translate(0,0,-t/2),i.rotateY(-Math.PI/2),i}function fu(s,t,e){let n=e.clone().normalize(),i=new Re().setFromUnitVectors(Wt(0,1,0),n);s.add(new Zt(.036,.034,.07,14),"gloveDark",new Dt().compose(t.clone().addScaledVector(n,.03),i,Do));let r=new Zt(.055,.042,.42,16,4),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=o.getZ(a),u=Math.atan2(h,l),f=1+Math.sin(u*3+c*25)*.05+Math.sin(c*40+u)*.03;o.setXYZ(a,l*f,c,h*f)}r.computeVertexNormals(),s.add(r,"sleeve",new Dt().compose(t.clone().addScaledVector(n,.27),i,Do))}var Uo=class{constructor(t,e,n,i,r,o){this.camera=t,this.world=i,this.fx=r,this.audio=o,this.U={uVMProj:{value:new Dt}},this.vmCam=new Ce(54,1,.01,10),this.baseFov=60,this.adsFov=42;let a=n,l=c=>du(new Me(c),this.U);this.mats={anod:l({color:2763824,roughness:.36,metalness:.6,envMapIntensity:2.2,map:a.grunge.map,normalMap:a.grunge.normalMap,roughnessMap:a.grunge.ormMap,normalScale:new it(.25,.25)}),steel:l({color:2895152,roughness:.42,metalness:.85,envMapIntensity:2.2,map:a.grunge.map,roughnessMap:a.grunge.ormMap}),steelBright:l({color:7106162,roughness:.3,metalness:1,roughnessMap:a.grunge.ormMap}),polymer:l({color:1908256,roughness:.62,envMapIntensity:1.8,metalness:0,map:a.stipple.map,normalMap:a.stipple.normalMap,roughnessMap:a.stipple.ormMap}),tan:l({color:8022096,roughness:.66,envMapIntensity:1.6,metalness:0,map:a.stipple.map,normalMap:a.stipple.normalMap,roughnessMap:a.stipple.ormMap,normalScale:new it(.6,.6)}),rubber:l({color:789517,roughness:.92,metalness:0,normalMap:a.stipple.normalMap}),glove:l({color:2829615,roughness:.85,metalness:0,map:a.fabric.map,normalMap:a.fabric.normalMap,roughnessMap:a.fabric.ormMap}),gloveDark:l({color:1184532,roughness:.6,metalness:0,map:a.grunge.map,normalMap:a.stipple.normalMap}),sleeve:l({color:3423025,roughness:.95,metalness:0,map:a.fabric.map,normalMap:a.fabric.normalMap,roughnessMap:a.fabric.ormMap}),glass:du(new Dn({color:2241314,roughness:.05,metalness:0,transmission:0,transparent:!0,opacity:.18,envMapIntensity:2.5,depthWrite:!1}),this.U),lens:l({color:328965,roughness:.1,metalness:0,emissive:8952319,emissiveIntensity:0}),brass:l({color:13145662,roughness:.25,metalness:1})};for(let c of Object.values(this.mats))c.userData.vm=!0;this.root=new Ae,this.sway=new Ae,this.gun=new Ae,this.root.add(this.sway),this.sway.add(this.gun),t.add(this.root),this._buildGun(),this._buildHands(),this._buildFlash(),this._buildFlashlight(),this.magSize=30,this.ammo=30,this.reserve=150,this.rpm=760,this.cool=0,this.reloading=!1,this.reloadT=0,this.reloadDur=2.3,this.reloadEmpty=!1,this.ads=0,this.adsTarget=0,this.sprint=0,this.kick=0,this.kickRot=0,this.kickSide=0,this.bloom=0,this.swayV=Wt(0,0,0),this.swayP=Wt(0,0,0),this.lookDelta=new it,this.bobT=0,this.flashT=0,this.shotsFired=0,this.hits=0,this.drawT=0,this.lastShot=-10,this.time=0}_buildGun(){let t=new bs;t.rbox(.05,.05,.25,.006,"anod",0,.028,0),t.box(.022,.012,.24,"anod",0,.058,0);for(let r=0;r<22;r++)t.box(.024,.005,.0055,"anod",0,.066,-.115+r*.0105);t.box(.004,.018,.058,"steel",.026,.026,.01),t.cyl(.007,.007,.02,12,"steel",.03,.04,.07,0,0,Math.PI/2),t.rbox(.012,.02,.02,.004,"anod",.026,.045,.06),t.add(Ui([[-.12,.004],[.125,.004],[.125,-.025],[.06,-.04],[-.03,-.04],[-.035,-.03],[-.105,-.03],[-.12,-.012]],.046),"anod"),t.add(Ui([[-.105,-.03],[-.035,-.03],[-.04,-.06],[-.108,-.06]],.05),"anod"),t.box(.012,.004,.065,"anod",0,-.065,.005),t.box(.004,.022,.004,"steel",0,-.05,.005,.3),t.add(Ui([[.025,-.035],[.065,-.035],[.105,-.15],[.098,-.165],[.06,-.165],[.028,-.06]],.03,.004),"polymer"),t.cyl(.0155,.0155,.22,16,"anod",0,.026,.235),t.add(Ui([[.22,.05],[.4,.05],[.42,.035],[.42,-.1],[.385,-.1],[.3,-.03],[.24,-.01],[.22,.005]],.042,.004),"tan"),t.box(.046,.15,.022,"rubber",0,-.025,.428),t.cyl(.006,.006,.05,8,"steel",0,-.06,.3,0,0,Math.PI/2),t.cyl(.02,.02,.01,12,"steel",0,.026,.13),t.add(new Zt(.029,.029,.36,8,1),"anod",sr(0,.024,-.305,Math.PI/2,0,Math.PI/8));for(let r=0;r<6;r++){for(let o of[-1,1])t.box(.003,.009,.03,"steel",o*.0275,.016,-.17-r*.048);t.box(.01,.003,.03,"steel",0,-.004,-.17-r*.048)}t.box(.022,.008,.33,"anod",0,.056,-.3);for(let r=0;r<31;r++)t.box(.024,.005,.0055,"anod",0,.062,-.14-r*.0105);t.rbox(.062,.062,.012,.004,"anod",0,.024,-.125),t.cyl(.0095,.0095,.13,14,"steel",0,.024,-.545),t.cyl(.015,.015,.065,16,"steel",0,.024,-.64);for(let r=0;r<3;r++)for(let o of[-1,1])t.box(.004,.014,.008,"polymer",o*.0145,.024,-.623-r*.017);t.add(Ui([[-.36,-.002],[-.27,-.002],[-.3,-.04],[-.345,-.045]],.028,.004),"polymer"),t.cyl(.013,.013,.085,16,"anod",-.04,.024,-.39),t.cyl(.016,.016,.022,16,"anod",-.04,.024,-.442),t.box(.012,.016,.03,"anod",-.031,.024,-.39),t.rbox(.034,.012,.09,.003,"anod",0,.073,0),t.rbox(.0055,.04,.055,.0022,"anod",-.0185,.1,0),t.rbox(.0055,.04,.055,.0022,"anod",.0185,.1,0),t.rbox(.042,.005,.058,.002,"anod",0,.1215,0),t.rbox(.03,.01,.02,.003,"anod",0,.08,.02),t.box(.012,.012,.024,"polymer",.024,.082,.02);for(let r=0;r<3;r++)t.cyl(.0025,.0025,.004,8,"rubber",.031,.08,.01+r*.01,0,0,Math.PI/2);t.box(.045,.008,.012,"anod",0,.05,.13),t.add(new $n(.008,.002,6,12),"steel",sr(0,-.008,-.45,0,Math.PI/2,0)),t.build(this.gun,this.mats);let e=new kt(new Ee(.03,.03),this.mats.glass);e.position.set(0,.1,-.02),e.frustumCulled=!1,this.gun.add(e),this.reticleMat=new fe({transparent:!0,depthWrite:!1,blending:mn,uniforms:{...this.U,uI:{value:1}},vertexShader:`
        uniform mat4 uVMProj; varying vec2 vUv;
        void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = uVMProj * mv; gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w; }`,fragmentShader:`
        varying vec2 vUv; uniform float uI;
        void main(){
          vec2 c = (vUv - 0.5) * 30.0;
          float r = length(c);
          float dot_ = exp(-r * r * 6.0);
          float ring = exp(-pow(r - 5.0, 2.0) * 14.0);
          float ticks = (step(abs(c.x), 0.18) + step(abs(c.y), 0.18)) * step(5.0, r) * step(r, 6.6) * (1.0 - step(0.0, c.y) * step(abs(c.x), 0.2));
          float a = dot_ * 1.4 + ring * 0.75 + ticks * 0.45;
          gl_FragColor = vec4(vec3(14.0, 0.8, 0.5) * a * uI, 1.0);
        }`});let n=new kt(new Ee(.03,.03),this.reticleMat);n.position.set(0,.1,-.019),n.frustumCulled=!1,this.gun.add(n),this.sightPos=Wt(0,.1,0),this.mag=new Ae;let i=new bs;i.add(Ui([[-.103,-.03],[-.04,-.03],[-.045,-.12],[-.06,-.2],[-.078,-.232],[-.142,-.222],[-.124,-.15],[-.108,-.07]],.026,.003),"tan"),i.add(Ui([[-.082,-.226],[-.074,-.24],[-.146,-.23],[-.147,-.218]],.032,.003),"polymer");for(let r=0;r<4;r++)i.box(.028,.004,.06,"tan",0,-.08-r*.03,-.083-r*.008,.18+r*.05);i.cyl(.0047,.0047,.03,8,"brass",0,-.026,-.072),i.build(this.mag,this.mats),this.mag.userData.home=Wt(0,0,0),this.gun.add(this.mag),this.muzzle=Wt(0,.024,-.68),this.ejectPort=Wt(.03,.03,.01)}_buildHands(){let t=(o,a,l,c,h)=>{let u=c.clone().sub(l);o.add(new oo(h,u.length(),4,10),a,new Dt().compose(l.clone().add(c).multiplyScalar(.5),new Re().setFromUnitVectors(Wt(0,1,0),u.normalize()),Do))};this.rightHand=new Ae;let e=new bs;e.rbox(.05,.1,.05,.018,"glove",0,-.1,.07,-.28),e.rbox(.054,.07,.045,.016,"glove",.006,-.07,.108,-.5),e.rbox(.012,.05,.03,.005,"gloveDark",.03,-.072,.105,-.5);for(let o=0;o<3;o++){let a=-.085-o*.025,l=.04+o*.007;t(e,"glove",Wt(-.022,a,l),Wt(.024,a+.002,l-.004),.0115)}t(e,"glove",Wt(.026,-.06,.07),Wt(.012,-.056,.016),.0095),t(e,"glove",Wt(.012,-.056,.016),Wt(.003,-.054,.004),.0085),t(e,"glove",Wt(-.026,-.05,.1),Wt(-.03,-.022,.045),.0105);let n=Wt(.012,-.095,.135),i=Wt(.5,-.42,.75).normalize();fu(e,n,i),e.build(this.rightHand,this.mats),this.gun.add(this.rightHand),this.leftHand=new Ae;let r=new bs;r.rbox(.024,.07,.09,.011,"glove",-.044,-.012,.005,0,0,-.35),r.rbox(.01,.05,.07,.004,"gloveDark",-.058,-.008,0,0,0,-.35);for(let o=0;o<4;o++){let a=-.03+o*.021,l=Wt(-.038,-.036,a),c=Wt(-.004,-.044,a-.002),h=Wt(.028,-.026,a-.004),u=Wt(.036,-.004,a-.005),f=o===3?.0085:.0098;t(r,"glove",l,c,f),t(r,"glove",c,h,f*.95),o<3&&t(r,"glove",h,u,f*.9)}t(r,"glove",Wt(-.05,.004,.04),Wt(-.03,.026,-.005),.011),t(r,"glove",Wt(-.03,.026,-.005),Wt(-.016,.034,-.045),.0095),fu(r,Wt(-.05,-.03,.05),Wt(-.62,-.72,.42)),r.build(this.leftHand,this.mats),this.leftHome=Wt(0,.024,-.31),this.leftHand.position.copy(this.leftHome),this.gun.add(this.leftHand)}_buildFlash(){let t=new fe({transparent:!0,depthWrite:!1,blending:mn,side:Ze,uniforms:{...this.U,uSeed:{value:0},uI:{value:0}},vertexShader:`
        uniform mat4 uVMProj; varying vec2 vUv;
        void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = uVMProj * mv; gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w; }`,fragmentShader:`
        varying vec2 vUv; uniform float uSeed; uniform float uI;
        float h(float x){ return fract(sin(x * 12.9898 + uSeed) * 43758.5453); }
        void main(){
          vec2 c = vUv - 0.5;
          float r = length(c) * 2.0;
          float a = atan(c.y, c.x);
          float rays = 0.0;
          for(int i = 0; i < 7; i++){
            float fi = float(i);
            float ang = h(fi) * 6.2831;
            float w = 0.05 + h(fi + 9.0) * 0.12;
            float d = abs(mod(a - ang + 3.14159, 6.2831) - 3.14159);
            rays += exp(-d * d / (w * w)) * (0.4 + h(fi + 3.0));
          }
          float core = exp(-r * r * 9.0);
          float f = (core * 1.5 + rays * exp(-r * 2.4) * 0.9) * smoothstep(1.0, 0.6, r);
          vec3 col = mix(vec3(1.0, 0.45, 0.12), vec3(1.0, 0.9, 0.7), core);
          gl_FragColor = vec4(col * f * uI * 18.0, 1.0);
        }`}),e=t.clone();e.uniforms={...this.U,uSeed:t.uniforms.uSeed,uI:t.uniforms.uI},e.fragmentShader=`
      varying vec2 vUv; uniform float uSeed; uniform float uI;
      float h(float x){ return fract(sin(x * 12.9898 + uSeed) * 43758.5453); }
      void main(){
        float x = vUv.x; float y = (vUv.y - 0.5) * 2.0;
        float w = 0.12 + 0.5 * x * (0.6 + 0.4 * h(floor(x * 5.0)));
        float f = exp(-y * y / (w * w)) * pow(1.0 - x, 1.4) * smoothstep(0.0, 0.08, x);
        f *= 0.7 + 0.6 * h(floor(x * 9.0) + 2.0);
        vec3 col = mix(vec3(1.0, 0.4, 0.1), vec3(1.0, 0.85, 0.6), pow(1.0 - x, 3.0));
        gl_FragColor = vec4(col * f * uI * 12.0, 1.0);
      }`,this.flashMat=t,this.flash=new Ae,this.flash.position.copy(this.muzzle);let n=new kt(new Ee(.16,.16),t);n.frustumCulled=!1,this.flash.add(n);for(let i of[0,Math.PI/2]){let r=new Ee(.28,.1);r.translate(.14,0,0),r.rotateY(Math.PI/2);let o=new kt(r,e);o.rotation.z=i,o.frustumCulled=!1,this.flash.add(o)}this.flash.visible=!1,this.gun.add(this.flash)}_buildFlashlight(){this.torch=new Rn(15660031,0,38,.36,.55,2),this.torch.userData.fogScale=.55,this.torch.target.position.set(0,0,-10),this.camera.add(this.torch),this.camera.add(this.torch.target),this.torchOn=!1,this.torchLens=new kt(new wi(.012,16),this.mats.lens),this.torchLens.position.set(-.04,.024,-.4535),this.torchLens.rotation.y=Math.PI,this.torchLens.rotation.x=Math.PI,this.torchLens.frustumCulled=!1,this.gun.add(this.torchLens)}toggleTorch(){this.torchOn=!this.torchOn,this.audio?.click()}toWorld(t,e=new A){this.gun.updateWorldMatrix(!0,!1),e.copy(t).applyMatrix4(this.gun.matrixWorld);let n=this.camera.matrixWorldInverse,i=e.applyMatrix4(n),r=Math.tan(Ie.degToRad(this.camera.fov)/2)/Math.tan(Ie.degToRad(this.vmCam.fov)/2);return i.x*=r,i.y*=r,i.applyMatrix4(this.camera.matrixWorld)}startReload(){this.reloading||this.ammo>=this.magSize||this.reserve<=0||(this.reloading=!0,this.reloadT=0,this.reloadEmpty=this.ammo===0,this.reloadDur=this.reloadEmpty?2.75:2.25,this._rsnd=0,this.adsTarget=0)}update(t,e,n){this.time+=t;let i=this.camera,r=e.ads&&!this.reloading&&n.sprintAmt<.3;this.ads+=((r?1:0)-this.ads)*Math.min(1,t*12),this.sprint+=((n.sprintAmt>.5&&!this.reloading?1:0)-this.sprint)*Math.min(1,t*8),this.vmCam.fov=Ie.lerp(this.baseFov,this.adsFov,this.ads),this.vmCam.aspect=i.aspect,this.vmCam.updateProjectionMatrix(),this.U.uVMProj.value.copy(this.vmCam.projectionMatrix),this.cool-=t;let o=60/this.rpm,a=!1;if(e.fire&&!this.reloading&&this.sprint<.3&&this.drawT<=0)if(this.ammo>0)for(;this.cool<=0&&(this.cool+=o,this._fire(n),a=!0,!(this.ammo<=0)););else this.cool<=0&&e.firePressed&&(this.audio?.dryFire(),this.cool=.25,this.reserve>0&&this.startReload());if(this.cool<0&&(this.cool=0),e.fire||(this.cool=Math.max(0,Math.min(this.cool,o*.5))),this.bloom=Math.max(0,this.bloom-t*4.5),this.reloading){this.reloadT+=t;let y=this.reloadT/this.reloadDur,x=this.reloadEmpty?[[.14,"magOut"],[.5,"magIn"],[.72,"bolt"]]:[[.18,"magOut"],[.58,"magIn"]];for(let T=this._rsnd;T<x.length;T++)y>=x[T][0]&&(this.audio?.reloadEvent(x[T][1]),this._rsnd=T+1);if(y>=1){let T=this.magSize-this.ammo,F=Math.min(T,this.reserve);this.ammo+=F,this.reserve-=F,this.reloading=!1}}this.drawT=Math.max(0,this.drawT-t),this.kick+=(0-this.kick)*Math.min(1,t*14),this.kickRot+=(0-this.kickRot)*Math.min(1,t*10),this.kickSide+=(0-this.kickSide)*Math.min(1,t*10);let l=1-this.ads*.8,c=Wt(-this.lookDelta.x*9e-4*l,this.lookDelta.y*9e-4*l,0);c.clampLength(0,.04),this.swayV.addScaledVector(c.sub(this.swayP),t*160).multiplyScalar(Math.max(0,1-t*16)),this.swayP.addScaledVector(this.swayV,t),this.lookDelta.set(0,0);let h=n.horizSpeed;n.onGround&&(this.bobT+=t*(h>.3?5.2+h*.75:0));let u=Math.min(1,h/4.5)*(n.onGround?1:.2)*(1-this.ads*.85),f=Math.sin(this.bobT)*.012*u*(1+this.sprint),d=-Math.abs(Math.cos(this.bobT))*.012*u*(1+this.sprint*.8),m=Math.sin(this.time*1.4)*.0018*(1-this.ads*.7),v=Wt(.16,-.185,-.4),g=Wt(0,-this.sightPos.y,-.25),p=v.clone().lerp(g,this.ads),w=new Pe(.02*(1-this.ads),.03*(1-this.ads),-.02*(1-this.ads));p.add(Wt(-.04*this.sprint,-.03*this.sprint,.03*this.sprint)),w.x+=-.25*this.sprint,w.y+=.7*this.sprint,w.z+=.35*this.sprint,w.z+=n.crouchAmt*.06*(1-this.ads),p.y-=n.landDip*.06;let b=Wt(0,0,0),_=0,L=!0,C=Wt(0,0,0);if(this.reloading){let y=this.reloadT/this.reloadDur,x=(lt,Et)=>Ie.smoothstep(y,lt,Et),T=x(0,.15)*(1-x(.85,1));w.z+=-.45*T,w.x+=.18*T,w.y+=.12*T,p.add(Wt(-.03*T,-.015*T,.02*T));let F=this.reloadEmpty?[.12,.26]:[.16,.3],U=x(F[0],F[1]),D=x(this.reloadEmpty?.36:.42,this.reloadEmpty?.5:.58),W=x(.04,F[0]),H=x(F[0],F[1]+.05),q=x(F[1]+.06,this.reloadEmpty?.46:.54),O=Wt(.02,-.13,-.07).sub(this.leftHome),tt=Wt(-.12,-.42,.06).sub(this.leftHome);C.copy(O).multiplyScalar(W),C.lerp(tt,H*(1-q)),q>0&&C.lerpVectors(tt,O,q);let j=x(this.reloadEmpty?.82:.66,this.reloadEmpty?.95:.85);if(this.reloadEmpty){let lt=x(.58,.68)*(1-j),Et=x(.7,.74)*(1-x(.76,.8)),Xt=Wt(0,.045,.15+Et*.07).sub(this.leftHome);C.lerp(Xt,lt),p.z+=Et*.012}if(C.multiplyScalar(1-j),U<1)b.set(0,-.25*U*U,.02*U),_=.3*U,L=U<.95;else if(D<1){let lt=C.clone().sub(O).add(Wt(0,.015*(1-D),0));b.copy(lt).multiplyScalar(1).add(Wt(0,-.03*(1-D),.01*(1-D))),_=-.15*(1-D),L=q>.02}}if(this.drawT>0){let y=this.drawT/.6;p.y-=y*y*.25,w.x-=y*.6}p.z+=this.kick*(1-this.ads*.45),p.y+=this.kick*.15,w.x+=this.kickRot*(1-this.ads*.6),w.z+=this.kickSide,w.y+=this.kickSide*.3,this.root.position.set(0,0,0),this.sway.position.set(p.x+f+this.swayP.x,p.y+d+this.swayP.y+m,p.z),this.sway.rotation.set(w.x+this.swayP.y*1.5,w.y-this.swayP.x*2,w.z-this.swayP.x*2.5+f*2,"XYZ"),this.mag.position.copy(b),this.mag.rotation.set(_,0,0),this.mag.visible=L,this.leftHand.position.copy(this.leftHome).add(C),this.flashT-=t,this.flash.visible=this.flashT>0,this.flashMat.uniforms.uI.value=this.flashT>0?1:0;let I=this.world.muzzleLight;I&&(I.intensity=this.flashT>0?22+Math.random()*10:0);let S=this.toWorld(Wt(-.04,.024,-.46));return this.torch.parent.worldToLocal(S),this.torch.position.copy(S),this.torch.target.position.set(S.x*.3,S.y*.3,-12),this.torch.intensity=this.torchOn?260:0,this.torch.visible=!0,this.mats.lens.emissiveIntensity=this.torchOn?40:0,this.reticleMat.uniforms.uI.value=.15+.85*this.ads,a}spreadDeg(t){let e=Math.min(1,t.horizSpeed/5),n=Ie.lerp(2.4,.12,this.ads)+e*(1.6-this.ads*1.2)+this.bloom;return t.onGround||(n+=3),n*=1-t.crouchAmt*.3,n}_fire(t){this.ammo--,this.shotsFired++,this.lastShot=this.time,this.kick+=.03+Math.random()*.008,this.kickRot+=.05+Math.random()*.02,this.kickSide+=(Math.random()-.5)*.03,this.bloom=Math.min(3.5,this.bloom+.35),t.addRecoil(.0085*(1-this.ads*.35)+Math.random()*.003,(Math.random()-.45)*.006),this.flashT=.035,this.flashMat.uniforms.uSeed.value=Math.random()*100,this.flash.rotation.z=Math.random()*Math.PI;let e=.8+Math.random()*.5;this.flash.scale.set(e,e,e);let n=this.toWorld(this.muzzle),i=this.world.muzzleLight;i&&i.position.copy(n).add(new A(0,.05,0));let r=new A(0,0,-1).applyQuaternion(this.camera.quaternion);Math.random()<.5&&this.fx.muzzleSmoke(n,r);let o=this.toWorld(this.ejectPort),a=new A(1,0,0).applyQuaternion(this.camera.quaternion),l=new A(0,1,0).applyQuaternion(this.camera.quaternion),c=a.multiplyScalar(2.2+Math.random()).add(l.multiplyScalar(1.6+Math.random())).add(r.clone().multiplyScalar(-.4)).add(t.velocity);this.fx.ejectShell(o,c),this.audio?.gunshot(),this.onShot?.(n,r,this.spreadDeg(t),this.shotsFired%3===0)}};var Ss=1.78,Mv=1.15,un=.33,oc=.45,No=class{constructor(t,e,n){this.camera=t,this.colliders=e,this.audio=n,this.pos=new A,this.velocity=new A,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.height=Ss,this.onGround=!0,this.crouchAmt=0,this.sprintAmt=0,this.horizSpeed=0,this.landDip=0,this.stepDist=0,this.health=100,this.lastHit=-10,this.alive=!0,this.shake=0,this.bobT=0,this.time=0,this.eyeSmooth=Ss-.12}spawn(t,e){this.pos.copy(t),this.velocity.set(0,0,0),this.yaw=e,this.pitch=0,this.health=100,this.alive=!0}look(t,e,n){this.yaw-=t*n,this.pitch-=e*n,this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch))}addRecoil(t,e){this.recoilPitch+=t,this.recoilYaw+=e}groundHeightAt(t,e=un,n=1/0){let i=-1/0;for(let r of this.colliders){if(r.noWalk||r.max.y>n)continue;let o=Math.max(r.min.x,Math.min(t.x,r.max.x)),a=Math.max(r.min.z,Math.min(t.z,r.max.z)),l=t.x-o,c=t.z-a;l*l+c*c<e*e*.7&&r.max.y>i&&(i=r.max.y)}return i}_collideXZ(t,e){for(let n=0;n<3;n++)for(let i of this.colliders){if(i.max.y<=t+oc||i.min.y>=t+e)continue;let r=Math.max(i.min.x,Math.min(this.pos.x,i.max.x)),o=Math.max(i.min.z,Math.min(this.pos.z,i.max.z)),a=this.pos.x-r,l=this.pos.z-o,c=a*a+l*l;if(c<un*un){if(c<1e-8){let d=[this.pos.x-i.min.x,i.max.x-this.pos.x,this.pos.z-i.min.z,i.max.z-this.pos.z],m=Math.min(...d),v=d.indexOf(m);v===0?this.pos.x=i.min.x-un:v===1?this.pos.x=i.max.x+un:v===2?this.pos.z=i.min.z-un:this.pos.z=i.max.z+un;continue}let h=Math.sqrt(c),u=un-h;a/=h,l/=h,this.pos.x+=a*u,this.pos.z+=l*u;let f=this.velocity.x*a+this.velocity.z*l;f<0&&(this.velocity.x-=f*a,this.velocity.z-=f*l)}}}update(t,e){if(this.time+=t,!this.alive){this._updateCamera(t);return}let n=e.crouch;this.crouchAmt+=((n?1:0)-this.crouchAmt)*Math.min(1,t*10);let i=n?Mv:Ss;if(!n&&this.height<Ss){let p=this.pos.y+Ss,w=!1;for(let b of this.colliders)if(b.min.y>this.pos.y+this.height&&b.min.y<p){let _=Math.max(b.min.x,Math.min(this.pos.x,b.max.x)),L=Math.max(b.min.z,Math.min(this.pos.z,b.max.z));(this.pos.x-_)**2+(this.pos.z-L)**2<un*un&&(w=!0)}w||(this.height=Math.min(Ss,this.height+t*4))}else this.height+=(i-this.height)*Math.min(1,t*10);let r=new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=new A;e.forward&&a.add(r),e.back&&a.sub(r),e.right&&a.add(o),e.left&&a.sub(o),a.lengthSq()>0&&a.normalize();let l=e.sprint&&e.forward&&!n&&!e.ads;this.sprintAmt+=((l?1:0)-this.sprintAmt)*Math.min(1,t*6);let c=4.3;l&&(c=6.8),n&&(c=2.2),e.ads&&(c=Math.min(c,2.8));let h=this.onGround?11:2.5,u=a.multiplyScalar(c);this.velocity.x+=(u.x-this.velocity.x)*Math.min(1,t*h),this.velocity.z+=(u.z-this.velocity.z)*Math.min(1,t*h),this.onGround&&e.jump&&(this.velocity.y=4.7,this.onGround=!1,this.audio?.jump()),this.velocity.y-=18*t;let f=Math.ceil(Math.max(1,this.velocity.length()*t/.15)),d=t/f;for(let p=0;p<f;p++)this.pos.x+=this.velocity.x*d,this.pos.z+=this.velocity.z*d,this._collideXZ(this.pos.y,this.height);let m=this.pos.y;this.pos.y+=this.velocity.y*t;let v=this.groundHeightAt(this.pos,un,m+oc),g=this.onGround;this.pos.y<=v+.001||g&&this.velocity.y<=0&&this.pos.y-v<oc&&this.pos.y-v>0?(!g&&this.velocity.y<-3&&(this.landDip=Math.min(1,-this.velocity.y/9),this.audio?.land(Math.min(1,-this.velocity.y/9))),v>this.pos.y&&(this.eyeSmooth-=v-this.pos.y),this.pos.y=v,this.velocity.y=0,this.onGround=!0):this.onGround=!1;for(let p of this.colliders)if(this.velocity.y>0&&p.min.y>m+this.height-.05&&p.min.y<this.pos.y+this.height){let w=Math.max(p.min.x,Math.min(this.pos.x,p.max.x)),b=Math.max(p.min.z,Math.min(this.pos.z,p.max.z));(this.pos.x-w)**2+(this.pos.z-b)**2<un*un*.8&&(this.pos.y=p.min.y-this.height,this.velocity.y=0)}if(this.pos.x=Math.max(-26,Math.min(28.6,this.pos.x)),this.pos.z=Math.max(-21.5,Math.min(23.6,this.pos.z)),this.horizSpeed=Math.hypot(this.velocity.x,this.velocity.z),this.onGround&&this.horizSpeed>.5){this.stepDist+=this.horizSpeed*t;let p=l?1.9:n?1:1.55;this.stepDist>p&&(this.stepDist=0,this.audio?.footstep(this.horizSpeed/6.8,this.pos))}this.landDip=Math.max(0,this.landDip-t*3),this.time-this.lastHit>4.5&&this.health<100&&(this.health=Math.min(100,this.health+t*14)),this._updateCamera(t)}damage(t,e){this.alive&&(this.health-=t,this.lastHit=this.time,this.shake=Math.min(1,this.shake+.35),this.health<=0&&(this.health=0,this.alive=!1))}_updateCamera(t){let e=Math.min(1,t*7),n=this.recoilPitch*e,i=this.recoilYaw*e;this.recoilPitch-=n,this.recoilYaw-=i,this.pitch+=n*.55,this.yaw+=i*.55,this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch));let r=this.alive?this.height-.12:.35;this.eyeSmooth+=(r-this.eyeSmooth)*Math.min(1,t*(this.alive?14:3)),this.bobT+=t*(this.onGround?this.horizSpeed*1.25:0);let o=Math.min(1,this.horizSpeed/6)*.035,a=this.time*40;this.shake=Math.max(0,this.shake-t*1.8);let l=this.shake*this.shake,c=this.camera;c.position.set(this.pos.x+Math.cos(this.bobT)*o*.5+Math.sin(a)*l*.03,this.pos.y+this.eyeSmooth+Math.abs(Math.sin(this.bobT))*o-this.landDip*.08+Math.sin(a*1.3)*l*.03,this.pos.z),c.rotation.set(this.pitch+this.recoilPitch*.45+Math.sin(a*.9)*l*.02,this.yaw+this.recoilYaw*.45,Math.sin(this.bobT*.5)*o*.15+(this.alive?0:.5))}};var be=(s,t,e)=>new A(s,t,e),bv=be(1,1,1),qe=(s,t,e,n=0,i=0,r=0)=>new Dt().compose(be(s,t,e),new Re().setFromEuler(new Pe(n,i,r)),bv);function Sv(s){let t=s.tex,e={shell:new Dn({color:9409689,roughness:.38,metalness:.1,clearcoat:.7,clearcoatRoughness:.25,map:t.grunge.map,normalMap:t.grunge.normalMap,normalScale:new it(.3,.3),roughnessMap:t.grunge.ormMap}),dark:new Me({color:1316119,roughness:.5,metalness:.6,map:t.grunge.map,roughnessMap:t.grunge.ormMap}),carbon:new Dn({color:16777215,map:t.carbon.map,normalMap:t.carbon.normalMap,roughnessMap:t.carbon.ormMap,roughness:1,clearcoat:1,clearcoatRoughness:.08}),hazard:new Me({color:13146642,roughness:.45,metalness:.1,map:t.grunge.map}),lens:new Dn({color:131586,roughness:.05,clearcoat:1,metalness:.2}),prop:new Me({color:855310,roughness:.4,metalness:.1})},n={},i=(h,u,f)=>{let d=u.index?u.toNonIndexed():u;f&&d.applyMatrix4(f);for(let m of Object.keys(d.attributes))["position","normal","uv"].includes(m)||d.deleteAttribute(m);(n[h]||(n[h]=[])).push(d)},r=[[0,.1],[.1,.098],[.17,.08],[.22,.045],[.235,0],[.22,-.035],[.17,-.065],[.09,-.085],[0,-.09]].map(h=>new it(h[0],h[1])),o=new Zs(r,32);o.scale(1,1,1.45),i("shell",o),i("dark",new Ot(.07,.03,.42),qe(0,.1,.02)),i("dark",new Zt(.008,.008,.12,6),qe(.05,.16,.12)),i("dark",new Zt(.004,.004,.16,6),qe(-.05,.17,.14));for(let h of[-1,1])i("hazard",new Ot(.01,.025,.18),qe(h*.228,0,-.05));for(let[h,u]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let f=h*.33,d=u*.36,m=Math.atan2(f,d),v=Math.hypot(f,d)-.12;i("carbon",new Ot(.045,.022,v),qe(f*.55,.02,d*.55,0,m,0)),i("dark",new Zt(.042,.048,.07,16),qe(f,.035,d)),i("dark",new Zt(.012,.012,.03,8),qe(f,.08,d)),i("dark",new $n(.2,.008,6,40),qe(f,.08,d,Math.PI/2));for(let g=0;g<3;g++){let p=m+g*2.1;i("dark",new Ot(.008,.008,.18),qe(f+Math.sin(p)*.1,.08,d+Math.cos(p)*.1,0,p,0))}i("dark",new Zt(.006,.006,.12,6),qe(f,-.03,d))}i("dark",new cn(.075,24,16),qe(0,-.1,-.2)),i("dark",new Zt(.05,.05,.03,20),qe(0,-.1,-.265,Math.PI/2)),i("lens",new cn(.038,20,12,0,Math.PI*2,0,Math.PI/2),qe(0,-.1,-.28,-Math.PI/2)),i("dark",new Zt(.035,.03,.09,16),qe(.09,-.09,-.16,Math.PI/2)),i("dark",new Ot(.05,.045,.18),qe(-.09,-.09,-.12)),i("dark",new Zt(.009,.009,.14,8),qe(-.09,-.09,-.26,Math.PI/2));let a={};for(let[h,u]of Object.entries(n))a[h]=_s(u,!1);let l=new Ot(.36,.004,.035),c=l.attributes.position;for(let h=0;h<c.count;h++){let u=c.getX(h);c.setY(h,c.getY(h)+Math.sign(c.getZ(h))*.006*Math.sign(u))}return l.computeVertexNormals(),{mats:e,geos:a,blade:l}}var Ev=new fe({transparent:!0,depthWrite:!1,side:Ze,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec2 vUv; void main(){ float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.85, r) * smoothstep(0.08, 0.2, r) * (0.12 + 0.1 * smoothstep(0.7, 0.95, r)); gl_FragColor = vec4(vec3(0.02), a); }"}),Fo=class{constructor(t,e,n,i,r,o,a,l=3){this.scene=t,this.world=n,this.fx=i,this.audio=r,this.colliders=o,this.waypoints=a,this.assets=Sv(e),this.drones=[],this.bolts=[],this.total=6,this.spawned=0,this.killed=0,this.spawnTimer=0,this.maxActive=l,this.alarm=0,this.slots=[];for(let c=0;c<l;c++){let h=new Rn(14542591,0,34,.32,.5,2);h.userData.fogScale=.9,t.add(h),t.add(h.target),n.freeSpots.push(h),this.slots.push({light:h,drone:null})}this.boltLight=new Un(16722458,0,10,2),t.add(this.boltLight)}_model(){let t=this.assets,e=new Ae,n=new Ae;e.add(n);for(let[f,d]of Object.entries(t.geos)){let m=new kt(d,t.mats[f]);m.castShadow=!0,m.receiveShadow=!0,n.add(m)}let i=new Me({color:0,emissive:16717320,emissiveIntensity:30}),r=new kt(new cn(.016,12,8),i);r.position.set(0,-.1,-.312),n.add(r);let o=new Me({color:0,emissive:16719888,emissiveIntensity:25}),a=new Me({color:0,emissive:2162528,emissiveIntensity:18}),l=[];for(let[f,d,m]of[[1,1,a],[-1,1,o],[1,-1,a],[-1,-1,o]]){let v=new kt(new cn(.01,8,6),m);v.position.set(f*.33,-.005,d*.36),n.add(v),l.push(v)}let c=new Me({color:0,emissive:15265535,emissiveIntensity:0}),h=new kt(new wi(.03,16),c);h.position.set(.09,-.09,-.206),h.rotation.y=Math.PI,n.add(h);let u=[];for(let[f,d]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let m=new Ae;m.position.set(f*.33,.1,d*.36);let v=new kt(t.blade,t.mats.prop);m.add(v);let g=new kt(new wi(.19,32),Ev);g.rotation.x=-Math.PI/2,m.add(g),n.add(m),u.push(m)}return{g:e,body:n,eyeMat:i,lampMat:c,props:u,leds:l,ledMat:o}}spawn(t){let e=this._model();e.g.position.copy(t),this.scene.add(e.g);let n={...e,pos:t.clone(),vel:be(0,0,0),yaw:Math.random()*6.28,hp:140,state:"patrol",stateT:0,wp:Math.floor(Math.random()*this.waypoints.length),target:be(),lastSeen:be(),seenT:0,burst:0,fireT:1+Math.random(),orbitA:Math.random()*6.28,alive:!0,hum:this.audio?.droneHum(),sweep:Math.random()*6,hitFlash:0,id:this.spawned};n.target.copy(this.waypoints[n.wp]);let i=this.slots.find(r=>!r.drone);return i&&(i.drone=n,n.slot=i),this.drones.push(n),this.spawned++,n}start(){let t=[be(-6,9,-30),be(16,9,-30),be(-22,9,30),be(20,9,30)];for(let e=0;e<this.maxActive;e++)this.spawn(this.waypoints[e*4%this.waypoints.length].clone()).target.copy(this.waypoints[(e*4+1)%this.waypoints.length]);this.entries=t}activeCount(){return this.drones.filter(t=>t.alive).length}_los(t,e){let n=e.clone().sub(t),i=n.length();return n.divideScalar(i),!er(this.colliders,t,n,i,!0)}raycast(t,e,n){let i=null;for(let r of this.drones){if(!r.alive)continue;let o=t.clone().sub(r.pos),a=o.dot(e),l=o.lengthSq()-.42*.42,c=a*a-l;if(c<0)continue;let h=-a-Math.sqrt(c);if(!(h<0||h>n)&&(!i||h<i.t)){let u=t.clone().addScaledVector(e,h),f=new A(0,-.1,-.3).applyMatrix4(r.body.matrixWorld),d=u.distanceTo(f)<.13;i={t:h,drone:r,point:u,normal:u.clone().sub(r.pos).normalize(),crit:d}}}return i}damage(t,e,n,i){if(!t.alive)return!1;t.hp-=e*(i?2:1),t.hitFlash=1,this.fx.impact(n,n.clone().sub(t.pos).normalize(),"metal"),this.audio?.hitMetal(n),(t.state==="patrol"||t.state==="search")&&this._alert(t);for(let r of this.drones)r!==t&&r.alive&&r.pos.distanceTo(t.pos)<18&&r.state==="patrol"&&this._alert(r);return t.hp<=0?(this._kill(t),!0):!1}_alert(t){t.state="alert",t.stateT=0,this.audio?.droneAlert(t.pos)}_kill(t){t.alive=!1,this.killed++,this.fx.explosion(t.pos.clone()),this.audio?.explosion(t.pos),this.world.flashExplosion?.(t.pos),this.scene.remove(t.g),t.hum?.stop(),t.slot&&(t.slot.light.intensity=0,t.slot.drone=null,t.slot=null),this.onKill?.(t)}update(t,e,n){let i=e.pos.clone().add(be(0,e.height-.15,0)),r=e.pos.clone().add(be(0,e.height*.65,0)),o=!1;for(let a of this.drones){if(!a.alive)continue;a.stateT+=t;let l=i.clone().sub(a.pos),c=l.length(),h=be(-Math.sin(a.yaw),0,-Math.cos(a.yaw)),u=Math.acos(Ie.clamp(h.dot(be(l.x,0,l.z).normalize()),-1,1)),f=e.alive&&c<36&&(u<1.1||c<7||a.state==="attack")&&this._los(a.pos,i);f?(a.seenT+=t,a.lastSeen.copy(e.pos)):a.seenT=Math.max(0,a.seenT-t*.5);let d=a.target.clone(),m=2.6,v=null;switch(a.state){case"patrol":{a.pos.distanceTo(a.target)<1.5&&(a.wp=(a.wp+1+Math.floor(Math.random()*3))%this.waypoints.length,a.target.copy(this.waypoints[a.wp])),a.seenT>.35&&this._alert(a);break}case"alert":{d=a.pos.clone(),v=i,a.stateT>.7&&(a.state="attack",a.stateT=0,a.fireT=.4);break}case"attack":{o=!0,a.orbitA+=t*.35*(a.id%2?1:-1);let S=10+Math.sin(a.stateT*.4+a.id)*3;d=a.lastSeen.clone().add(be(Math.cos(a.orbitA)*S,4.5+Math.sin(a.stateT*.7+a.id*2)*1.5,Math.sin(a.orbitA)*S)),d.x=Ie.clamp(d.x,-24,27),d.z=Ie.clamp(d.z,-19,22),m=5.2,v=f?i:a.lastSeen.clone().add(be(0,1.5,0)),a.fireT-=t,f&&a.fireT<=0&&(this._shoot(a,r,e),a.burst++,a.burst>=3?(a.burst=0,a.fireT=1.5+Math.random()*1):a.fireT=.14),!f&&a.seenT<=0&&(a.state="search",a.stateT=0,a.target.copy(a.lastSeen).add(be(0,5,0)));break}case"search":{m=3.5,d=a.target.clone(),f&&a.seenT>.2&&(a.state="attack",a.stateT=0),a.stateT>9&&(a.state="patrol",a.target.copy(this.waypoints[a.wp]));break}case"arrive":{m=7,a.pos.distanceTo(a.target)<2&&(a.state="patrol");break}}let g=d.clone().sub(a.pos),p=g.clone().clampLength(0,m);g.length()<3&&p.multiplyScalar(g.length()/3);for(let S of this.colliders){if(S.max.y<a.pos.y-1.2)continue;let y=Ie.clamp(a.pos.x,S.min.x,S.max.x),x=Ie.clamp(a.pos.y,S.min.y,S.max.y),T=Ie.clamp(a.pos.z,S.min.z,S.max.z),F=be(a.pos.x-y,a.pos.y-x,a.pos.z-T),U=F.length();U<1.4&&(p.addScaledVector(U>1e-4?F.divideScalar(U):be(0,1,0),(1.4-U)*6),p.y+=(1.4-U)*3)}for(let S of this.drones){if(S===a||!S.alive)continue;let y=a.pos.clone().sub(S.pos),x=y.length();x<2.5&&x>.001&&p.addScaledVector(y.divideScalar(x),(2.5-x)*2)}a.pos.y<2.2&&(p.y+=(2.2-a.pos.y)*4);let w=p.sub(a.vel).clampLength(0,7);a.vel.addScaledVector(w,t),a.pos.addScaledVector(a.vel,t);let b=v?v.clone().sub(a.pos):a.vel.clone();if(b.x*b.x+b.z*b.z>.01){let y=Math.atan2(-b.x,-b.z)-a.yaw;y=Math.atan2(Math.sin(y),Math.cos(y)),a.yaw+=y*Math.min(1,t*(v?5:2))}let _=Math.sin(this.world.time.value*2.1+a.id)*.05;a.g.position.set(a.pos.x,a.pos.y+_,a.pos.z);let L=w.clone().applyAxisAngle(be(0,1,0),-a.yaw);a.body.rotation.set(Ie.clamp(L.z*.06+a.vel.length()*0,-.4,.4)+0,a.yaw,Ie.clamp(-L.x*.06,-.4,.4),"YXZ"),a.body.rotation.x=Ie.clamp(L.z*.07,-.35,.35),a.body.rotation.z=Ie.clamp(-L.x*.07,-.35,.35),a.body.rotation.y=a.yaw;for(let S=0;S<4;S++)a.props[S].children[0].rotation.y+=t*(S%2?90:-90);a.hitFlash=Math.max(0,a.hitFlash-t*6);let C=a.state==="attack"||a.state==="alert";a.eyeMat.emissiveIntensity=(C?60:25)+a.hitFlash*80;let I=Math.sin(this.world.time.value*6+a.id)>.6?1:.1;if(a.ledMat.emissiveIntensity=25*I,a.slot){let S=a.slot.light;a.body.updateWorldMatrix(!0,!1),S.position.copy(be(.09,-.09,-.22).applyMatrix4(a.body.matrixWorld));let y;if(C||a.state==="search")y=(f?r:a.lastSeen).clone();else{a.sweep+=t*.6;let x=be(-Math.sin(a.yaw+Math.sin(a.sweep)*.6),0,-Math.cos(a.yaw+Math.sin(a.sweep)*.6));y=a.pos.clone().addScaledVector(x,6).setY(0)}S.target.position.lerp(y,Math.min(1,t*4)),S.color.setHex(C?16756896:14542591),S.intensity=C?300:200,a.lampMat.emissiveIntensity=60}a.hp<60&&Math.random()<t*(a.hp<35?18:7)&&this.fx.damageSmoke(a.pos.clone().add(be(0,.08,0)),a.hp<35),a.hum?.update(a.pos,a.vel,C)}if(this.alarm+=((o?1:0)-this.alarm)*Math.min(1,t*2),this.spawned<this.total&&this.activeCount()<this.maxActive&&(this.spawnTimer+=t,this.spawnTimer>4)){this.spawnTimer=0;let a=this.entries[Math.floor(Math.random()*this.entries.length)],l=this.spawn(a.clone());l.state="arrive",l.target.copy(this.waypoints[Math.floor(Math.random()*this.waypoints.length)]),this.audio?.droneAlert(l.pos)}this._updateBolts(t,e,r)}_shoot(t,e,n){t.body.updateWorldMatrix(!0,!1);let i=be(-.09,-.09,-.34).applyMatrix4(t.body.matrixWorld),r=n.velocity.clone().multiplyScalar(i.distanceTo(e)/38*.6),o=.025+Math.min(1,n.horizSpeed/6)*.03+n.crouchAmt*-.008,a=e.clone().add(r).sub(i).normalize();a.x+=(Math.random()-.5)*o*2,a.y+=(Math.random()-.5)*o*2,a.z+=(Math.random()-.5)*o*2,a.normalize(),this.bolts.push({pos:i.clone(),vel:a.multiplyScalar(38),age:0}),this.fx.add.spawn({pos:i,size:.12,life:.05,col:new _t(14,1.2,.6),type:0}),this.audio?.droneShot(i)}_updateBolts(t,e,n){let i=[],r=null;for(let o of this.bolts){o.age+=t;let a=o.vel.clone().multiplyScalar(t),l=a.length(),c=a.clone().divideScalar(l),h=o.pos.clone().sub(n),u=Ie.clamp(-h.dot(c),0,l),f=o.pos.clone().addScaledVector(c,u);if(e.alive&&f.distanceTo(n)<.45){e.damage(9,o.pos),this.onPlayerHit?.(o.pos);continue}!o.whizz&&f.distanceTo(n)<2&&(o.whizz=!0,this.audio?.whizz(f));let d=er(this.colliders,o.pos,c,l,!0);if(d||o.age>2.5){if(d){this.fx.add.spawn({pos:d.point.clone().addScaledVector(d.normal,.03),size:.25,life:.12,col:new _t(10,1,.4),type:0});for(let m=0;m<6;m++)this.fx.add.spawn({pos:d.point.clone(),vel:d.normal.clone().multiplyScalar(2).add(be((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4)),size:.006,life:.3,col:new _t(10,1.2,.5),type:3,stretch:.03,grav:9.8});this.fx.addDecal(d.point,d.normal)}continue}o.pos.add(a),this.fx.add.spawn({pos:o.pos.clone(),vel:o.vel.clone(),size:.018,life:1e-4+t*1.05,col:new _t(16,1.2,.5),type:3,stretch:.012}),r=o.pos,i.push(o)}this.bolts=i,r?(this.boltLight.position.copy(r),this.boltLight.intensity=6):this.boltLight.intensity=0}};var zo=class{constructor(){this.ctx=null,this.ready=!1}init(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.8;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=10,n.ratio.value=4,n.attack.value=.003,n.release.value=.25,this.master.connect(n),n.connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.2),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.55,this.reverbSend.connect(this.reverb),this.reverb.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.listener=e.listener,this._ambience(),this.ready=!0}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(2,this.ctx.sampleRate*t,this.ctx.sampleRate);for(let n=0;n<2;n++){let i=e.getChannelData(n),r=0;for(let o=0;o<i.length;o++)r=(r+.02*(Math.random()*2-1))/1.02,i[o]=r*3.5}return e}_impulse(t,e){let n=this.ctx.sampleRate,i=Math.floor(n*t),r=this.ctx.createBuffer(2,i,n);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<i;l++){let c=l/n,h=(Math.random()*2-1)*Math.pow(1-l/i,e)*.5;for(let[u,f]of[[.09,.7],[.17,.45],[.31,.35],[.52,.2]]){let d=c-u-o*.007;d>0&&d<.02&&(h+=(Math.random()*2-1)*f*(1-d/.02))}a[l]=h*(c<.01?c/.01:1)}}return r}_src(t,e=!1){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n}_env(t,e,n,i,r,o=0){t.gain.cancelScheduledValues(e),t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(Math.max(1e-4,o),e+n+r)}_panner(t){let e=this.ctx.createPanner();return e.panningModel="HRTF",e.distanceModel="inverse",e.refDistance=2,e.rolloffFactor=1.2,e.maxDistance=200,e.positionX.value=t.x,e.positionY.value=t.y,e.positionZ.value=t.z,e}_out(t,e,n=.4){let i=t;if(e){let r=this._panner(e);i.connect(r),i=r}if(i.connect(this.master),n>0){let r=this.ctx.createGain();r.gain.value=n,i.connect(r),r.connect(this.reverbSend)}}setListener(t){if(!this.ready)return;let e=this.listener,n=this.ctx.currentTime,i=t.matrixWorld.elements;e.positionX?(e.positionX.setTargetAtTime(i[12],n,.02),e.positionY.setTargetAtTime(i[13],n,.02),e.positionZ.setTargetAtTime(i[14],n,.02),e.forwardX.setTargetAtTime(-i[8],n,.02),e.forwardY.setTargetAtTime(-i[9],n,.02),e.forwardZ.setTargetAtTime(-i[10],n,.02),e.upX.setTargetAtTime(i[4],n,.02),e.upY.setTargetAtTime(i[5],n,.02),e.upZ.setTargetAtTime(i[6],n,.02)):(e.setPosition(i[12],i[13],i[14]),e.setOrientation(-i[8],-i[9],-i[10],i[4],i[5],i[6]))}_ambience(){let t=this.ctx,e=this._src(this.noiseBuf,!0),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=900;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=7e3;let r=t.createGain();r.gain.value=.085,e.connect(n),n.connect(i),i.connect(r),r.connect(this.master),e.start();let o=this._src(this.brownBuf,!0),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=280;let l=t.createGain();l.gain.value=.35,o.connect(a),a.connect(l),l.connect(this.master),o.start(),this._patter();let c=t.createOscillator();c.type="sawtooth",c.frequency.value=120;let h=t.createOscillator();h.type="square",h.frequency.value=240;let u=t.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=2;let f=t.createGain();f.gain.value=.012,c.connect(u),h.connect(u),u.connect(f),this._out(f,{x:5,y:6.5,z:-21},0),c.start(),h.start(),this.neonGain=f;let d=()=>{if(!this.ctx)return;let m=t.currentTime,v=t.createGain(),g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=400;for(let p of[73,110,146]){let w=t.createOscillator();w.type="sawtooth",w.frequency.value=p,w.connect(g),w.start(m),w.stop(m+4.5)}g.connect(v),this._env(v,m,.6,.025,3.8),this._out(v,{x:200,y:10,z:80},.8),setTimeout(d,4e4+Math.random()*4e4)};setTimeout(d,15e3)}_patter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let n=0;n<6;n++){let i=this._src(this.noiseBuf),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=2e3+Math.random()*5e3,r.Q.value=8;let o=t.createGain(),a=e+Math.random()*.2;this._env(o,a,.001,.02+Math.random()*.05,.03),i.connect(r),r.connect(o),o.connect(this.master),i.start(a,Math.random()*1.5,.06)}setTimeout(()=>this._patter(),200)}gunshot(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=.92+Math.random()*.16,i=this._src(this.noiseBuf),r=t.createBiquadFilter();r.type="highpass",r.frequency.value=1200;let o=t.createGain();this._env(o,e,8e-4,.9,.06),i.playbackRate.value=n,i.connect(r),r.connect(o),this._out(o,null,.9),i.start(e,Math.random(),.2);let a=this._src(this.noiseBuf),l=t.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3500,e),l.frequency.exponentialRampToValueAtTime(300,e+.25);let c=t.createGain();this._env(c,e,.001,1,.3),a.connect(l),l.connect(c),this._out(c,null,1),a.start(e,Math.random(),.5);let h=t.createOscillator();h.type="sine",h.frequency.setValueAtTime(140*n,e),h.frequency.exponentialRampToValueAtTime(38,e+.15);let u=t.createGain();this._env(u,e,.002,.9,.18),h.connect(u),this._out(u,null,.2),h.start(e),h.stop(e+.3);let f=this._src(this.noiseBuf),d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=3200,d.Q.value=5;let m=t.createGain();this._env(m,e+.025,.001,.25,.03),f.connect(d),d.connect(m),this._out(m,null,.05),f.start(e+.025,Math.random(),.06)}dryFire(){this._click(.3,2500)}click(){this._click(.2,4e3)}_click(t,e){if(!this.ready)return;let n=this.ctx,i=n.currentTime,r=this._src(this.noiseBuf),o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=e,o.Q.value=6;let a=n.createGain();this._env(a,i,.001,t,.03),r.connect(o),o.connect(a),this._out(a,null,.1),r.start(i,Math.random(),.05)}reloadEvent(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i={magOut:[[0,1800,.35],[.05,900,.25]],magIn:[[0,1200,.5],[.04,3e3,.4],[.06,600,.3]],bolt:[[0,2600,.4],[.12,1500,.55],[.16,3500,.35]]}[t]||[];for(let[r,o,a]of i){let l=this._src(this.noiseBuf),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=o,c.Q.value=4;let h=e.createGain();this._env(h,n+r,.001,a,.05),l.connect(c),c.connect(h),this._out(h,null,.15),l.start(n+r,Math.random(),.08)}}shellClink(t,e){if(!this.ready)return;let n=this.ctx,i=n.currentTime;for(let r of[3900,6100,8800]){let o=n.createOscillator();o.type="sine",o.frequency.value=r*(.95+Math.random()*.1);let a=n.createGain();this._env(a,i,.001,.03/(e+1),.12),o.connect(a),this._out(a,t,.1),o.start(i),o.stop(i+.2)}}footstep(t,e){if(!this.ready)return;let n=this.ctx,i=n.currentTime,r=this._src(this.noiseBuf),o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=700+Math.random()*500,o.Q.value=1.2;let a=n.createGain();this._env(a,i,.004,.12+t*.12,.09),r.connect(o),o.connect(a),this._out(a,null,.1),r.start(i,Math.random(),.15);let l=this._src(this.noiseBuf),c=n.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=n.createGain();this._env(h,i+.02,.01,.05+t*.05,.15),l.connect(c),c.connect(h),this._out(h,null,.05),l.start(i+.02,Math.random(),.2)}jump(){this.footstep(.6)}land(t){this.footstep(.6+t)}hitMarker(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="triangle",i.frequency.value=t?1400:2200;let r=e.createGain();this._env(r,n,.001,.08,t?.25:.05),i.connect(r),r.connect(this.master),i.start(n),i.stop(n+.3)}hitMetal(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime;for(let i of[1800,2700,4100]){let r=e.createOscillator();r.type="sine",r.frequency.value=i*(.9+Math.random()*.2);let o=e.createGain();this._env(o,n,.001,.08,.15),r.connect(o),this._out(o,t,.3),r.start(n),r.stop(n+.2)}}impact(t,e){if(!this.ready)return;let n=this.ctx,i=n.currentTime,r=this._src(this.noiseBuf),o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=e==="metal"?3e3:e==="wood"?900:1600,o.Q.value=2;let a=n.createGain();this._env(a,i,.001,.25,.08),r.connect(o),o.connect(a),this._out(a,t,.4),r.start(i,Math.random(),.1),e==="metal"&&Math.random()<.5&&this.hitMetal(t)}droneHum(){if(!this.ready)return null;let t=this.ctx,e=t.createGain();e.gain.value=0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=600,n.Q.value=.8;let i=[];for(let[c,h,u]of[[148,"sawtooth",.5],[151,"sawtooth",.5],[296,"triangle",.3],[445,"sawtooth",.15]]){let f=t.createOscillator();f.type=h,f.frequency.value=c;let d=t.createGain();d.gain.value=u,f.connect(d),d.connect(n),f.start(),i.push(f)}let r=this._src(this.noiseBuf,!0),o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2400,o.Q.value=.6;let a=t.createGain();a.gain.value=.25,r.connect(o),o.connect(a),a.connect(n),r.start(),n.connect(e);let l=this._panner({x:0,y:0,z:0});return l.refDistance=3,l.rolloffFactor=1.6,e.connect(l),l.connect(this.master),e.gain.setTargetAtTime(.11,t.currentTime,.5),{update:(c,h,u)=>{let f=t.currentTime;l.positionX.setTargetAtTime(c.x,f,.05),l.positionY.setTargetAtTime(c.y,f,.05),l.positionZ.setTargetAtTime(c.z,f,.05);let m=1+Math.hypot(h.x,h.y,h.z)*.04+(u?.08:0);i.forEach((v,g)=>v.frequency.setTargetAtTime([148,151,296,445][g]*m,f,.1))},stop:()=>{e.gain.setTargetAtTime(0,t.currentTime,.05),setTimeout(()=>{i.forEach(c=>c.stop()),r.stop()},500)}}}droneAlert(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime;for(let i=0;i<2;i++){let r=e.createOscillator();r.type="square",r.frequency.setValueAtTime(880,n+i*.16),r.frequency.setValueAtTime(1320,n+i*.16+.07);let o=e.createGain();this._env(o,n+i*.16,.002,.06,.14),r.connect(o),this._out(o,t,.3),r.start(n+i*.16),r.stop(n+i*.16+.16)}}droneShot(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(1600,n),i.frequency.exponentialRampToValueAtTime(140,n+.18);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=3500;let o=e.createGain();this._env(o,n,.002,.35,.2),i.connect(r),r.connect(o),this._out(o,t,.6),i.start(n),i.stop(n+.25);let a=this._src(this.noiseBuf),l=e.createGain();this._env(l,n,.001,.2,.08),a.connect(l),this._out(l,t,.5),a.start(n,Math.random(),.1)}whizz(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=this._src(this.noiseBuf),r=e.createBiquadFilter();r.type="bandpass",r.Q.value=3,r.frequency.setValueAtTime(4e3,n),r.frequency.exponentialRampToValueAtTime(900,n+.2);let o=e.createGain();this._env(o,n,.03,.25,.18),i.connect(r),r.connect(o),this._out(o,t,.1),i.start(n,Math.random(),.3)}playerHurt(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(90,e),n.frequency.exponentialRampToValueAtTime(45,e+.2);let i=t.createGain();this._env(i,e,.005,.6,.25),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.3);let r=this._src(this.noiseBuf),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let a=t.createGain();this._env(a,e,.002,.3,.12),r.connect(o),o.connect(a),a.connect(this.master),r.start(e,Math.random(),.2)}explosion(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=this._src(this.noiseBuf),r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(6e3,n),r.frequency.exponentialRampToValueAtTime(120,n+1.5);let o=e.createGain();this._env(o,n,.003,1.4,1.8),i.connect(r),r.connect(o),this._out(o,t,1.2),i.start(n,0,2);let a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(70,n),a.frequency.exponentialRampToValueAtTime(25,n+.8);let l=e.createGain();this._env(l,n,.005,1.4,.9),a.connect(l),this._out(l,t,.3),a.start(n),a.stop(n+1);for(let c=0;c<8;c++){let h=n+.5+Math.random()*1.2,u=this._src(this.noiseBuf),f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=1500+Math.random()*3e3,f.Q.value=5;let d=e.createGain();this._env(d,h,.001,.12,.06),u.connect(f),f.connect(d),this._out(d,t,.3),u.start(h,Math.random(),.08)}}setAlarm(t){if(this.ready){if(!this._alarm){let e=this.ctx,n=e.createOscillator();n.type="triangle",n.frequency.value=660;let i=e.createOscillator();i.frequency.value=1.6;let r=e.createGain();r.gain.value=220,i.connect(r),r.connect(n.frequency);let o=e.createGain();o.gain.value=0,n.connect(o),this._out(o,{x:-5,y:9,z:-21},.8),n.start(),i.start(),this._alarm=o}this._alarm.gain.setTargetAtTime(t*.05,this.ctx.currentTime,.4)}}missionComplete(){if(!this.ready)return;let t=this.ctx,e=t.currentTime;[523,659,784,1046].forEach((n,i)=>{let r=t.createOscillator();r.type="triangle",r.frequency.value=n;let o=t.createGain();this._env(o,e+i*.12,.01,.12,.8),r.connect(o),this._out(o,null,.6),r.start(e+i*.12),r.stop(e+i*.12+1)})}};var Vt=s=>document.getElementById(s),yn=new URLSearchParams(location.search),Vo={get(s,t){try{return localStorage.getItem("darkfox."+s)??t}catch{return t}},set(s,t){try{localStorage.setItem("darkfox."+s,t)}catch{}}},xu=yn.get("q")||Vo.get("quality","high"),Go={...rc[xu]||rc.high},ke=new Qr({antialias:!1,powerPreference:"high-performance",stencil:!1}),wv=Math.min(window.devicePixelRatio||1,Go.pixelRatio);ke.setPixelRatio(wv);ke.setSize(window.innerWidth,window.innerHeight);ke.shadowMap.enabled=!0;ke.shadowMap.type=Xl;ke.shadowMap.autoUpdate=!1;ke.toneMapping=Ln;Vt("app").appendChild(ke.domElement);var dn=new zo,Tt=new Ro(ke,Go),Ni,yu,Qt,ue,we,Mt={state:"loading",t:0,missionTime:0,damageTaken:0,hits:0,kills:0,phase:"drones",flash:0,damageFlash:0,explosionLight:null};window.__game=Mt;window.__dbg=()=>({game:Mt,drones:we,player:ue,world:Tt,weapon:Qt});var Le={forward:!1,back:!1,left:!1,right:!1,sprint:!1,crouch:!1,jump:!1,fire:!1,firePressed:!1,ads:!1},Ho={KeyW:"forward",KeyS:"back",KeyA:"left",KeyD:"right",ShiftLeft:"sprint",ShiftRight:"sprint",KeyC:"crouch",ControlLeft:"crouch",Space:"jump",ArrowUp:"forward",ArrowDown:"back",ArrowLeft:"left",ArrowRight:"right"},ko=parseFloat(Vo.get("sens","1"))||1;addEventListener("keydown",s=>{Ho[s.code]&&(Le[Ho[s.code]]=!0,s.code==="Space"&&s.preventDefault()),Mt.state==="playing"&&(s.code==="Escape"&&Mt.noLock&&bu(),s.code==="KeyR"&&Qt.startReload(),s.code==="KeyF"&&(Qt.toggleTorch(),Vt("torchtag").classList.toggle("on",Qt.torchOn)),s.code==="F3"&&(Vt("fps").classList.toggle("hidden"),s.preventDefault()))});addEventListener("keyup",s=>{Ho[s.code]&&(Le[Ho[s.code]]=!1)});addEventListener("mousedown",s=>{Mt.state==="playing"&&(s.button===0&&(Le.fire=!0,Le.firePressed=!0),s.button===2&&(Le.ads=!0))});addEventListener("mouseup",s=>{s.button===0&&(Le.fire=!1),s.button===2&&(Le.ads=!1)});addEventListener("contextmenu",s=>s.preventDefault());addEventListener("mousemove",s=>{if(Mt.state!=="playing"||document.pointerLockElement!==ke.domElement&&!Mt.noLock)return;let t=Qt?1-Qt.ads*.35:1,e=.0022*ko*t;ue.look(s.movementX,s.movementY,e),Qt.lookDelta.x+=s.movementX,Qt.lookDelta.y+=s.movementY});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===ke.domElement?Mt.wasLocked=!0:Mt.state==="playing"&&!Mt.noLock&&bu()});document.addEventListener("pointerlockerror",()=>{Mt.noLock=!0,document.body.classList.add("nolock")});addEventListener("blur",()=>{for(let s in Le)Le[s]=!1});async function Tv(){let s=Tt.steps(),t=[["Arming",()=>Av()],["Lighting",()=>{Tt.finalize(),Su(),Tt.captureEnvironment([Tt.water,Qt.root])}],["Compiling shaders",()=>{Tt.camera.position.copy(Tt.level.spawn).add(new A(0,1.66,0)),Tt.camera.updateMatrixWorld(),ke.compile(Tt.scene,Tt.camera);let n=Tt.scene.fog;Tt.scene.fog=Tt.refl.fog,ke.compile(Tt.scene,Tt.camera),Tt.scene.fog=n}]],e=[...s,...t];for(let n=0;n<e.length;n++){let[i,r]=e[n];Vt("loadlabel").textContent=i,Vt("loadfill").style.width=`${n/e.length*100}%`,await new Promise(o=>requestAnimationFrame(()=>setTimeout(o,0))),r()}Vt("loadfill").style.width="100%",await new Promise(n=>setTimeout(n,150)),Vt("loading").classList.add("hidden"),Mt.state="menu",Vt("menu").classList.remove("hidden"),yn.has("autostart")&&hc(!0)}function Av(){let s=Tt.lib,t=new Un(16756848,0,9,2);t.userData.fogScale=.35,Tt.scene.add(t),Tt.muzzleLight=t;let e=new Un(16747066,0,30,2);e.userData.fogScale=.5,Tt.scene.add(e),Mt.explosionLight=e,Tt.dynamicPoints.push(t,e),we=new Fo(Tt.scene,s,Tt,null,dn,Tt.level.colliders,Tt.level.droneWaypoints,3),Tt.dynamicPoints.push(we.boltLight);let n=Tt.lightRig();Ni=new Io(Tt.scene,s.mats,n,dn),we.fx=Ni;for(let i of Tt.level.steam)Ni.addSteam(i);yu=new Po(Tt.scene,Go.rain,n),Qt=new Uo(Tt.camera,s.mats,s.tex,Tt,Ni,dn),ue=new No(Tt.camera,Tt.level.colliders,dn),ue.spawn(Tt.level.spawn,Tt.level.spawnYaw),ue._updateCamera(0),Tt.flashExplosion=i=>{e.position.copy(i),Mt.explosionT=.6;let r=i.distanceTo(Tt.camera.position);ue.shake=Math.min(1,ue.shake+Math.max(0,1-r/25)*.9),Mt.flash=Math.max(Mt.flash,Math.max(0,1-r/30)*.6)},Qt.onShot=Rv,we.onKill=()=>{Mt.kills++,pu("DRONE DESTROYED",!0),dn.hitMarker(!0),_u(!0),we.killed>=we.total&&(Mt.phase="exfil",setTimeout(()=>pu("GRID OFFLINE \u2014 EXFILTRATE"),1400))},we.onPlayerHit=i=>{Mt.damageTaken+=9,Mt.damageFlash=1,dn.playerHurt();let r=i.clone().sub(ue.pos),a=Math.atan2(r.x,r.z)-(ue.yaw+Math.PI),l=Vt("dmgdir");l.style.transform=`rotate(${-a}rad)`,l.style.transition="none",l.style.opacity="1",requestAnimationFrame(()=>{l.style.transition="opacity 1.2s",l.style.opacity="0"})}}var rr=new A;function Rv(s,t,e,n){let i=Tt.camera,r=new A().setFromMatrixPosition(i.matrixWorld),o=Ie.degToRad(e)*.5,a=Math.sqrt(Math.random())*o,l=Math.random()*Math.PI*2;rr.set(Math.cos(l)*Math.tan(a),Math.sin(l)*Math.tan(a),-1).normalize().applyQuaternion(i.quaternion);let c=250,h=er(Tt.level.colliders,r,rr,c,!0),u=we.raycast(r,rr,h?h.t:c),f;u?(f=u.point,Mt.hits++,we.damage(u.drone,22+Math.random()*4,u.point,u.crit)||(_u(!1),dn.hitMarker(!1))):h?(f=h.point,Ni.impact(h.point,h.normal,h.box.surface),dn.impact(h.point,h.box.surface)):f=r.clone().addScaledVector(rr,c),n&&Ni.tracer(s.clone().addScaledVector(rr,.4),f)}var cc=0;function _u(s){let t=Vt("hitmarker");t.classList.toggle("kill",s),t.style.opacity="1",cc=s?.45:.18}function pu(s,t=!1){let e=document.createElement("div");e.textContent=s,t&&(e.className="k"),Vt("notify").appendChild(e),setTimeout(()=>e.remove(),2700)}function Mu(){if(!Mt.noLock)try{let s=ke.domElement.requestPointerLock();s&&s.catch&&s.catch(()=>{Mt.noLock=!0,document.body.classList.add("nolock")})}catch{Mt.noLock=!0,document.body.classList.add("nolock")}}function hc(s=!1){if(dn.init(),Vt("menu").classList.add("hidden"),Vt("end").classList.add("hidden"),Vt("pause").classList.add("hidden"),Vt("hud").classList.remove("hidden"),Mt.state==="menu"&&(we.start(),Qt.drawT=.6),Mt.state="playing",s||Mu(),yn.get("cam")){let[t,e,n,i]=yn.get("cam").split(",").map(Number);ue.spawn(new A(t,0,e),n),ue.pitch=i||0}if(yn.has("ads")&&(Le.ads=!0),yn.has("fire")&&(Le.fire=!0),yn.has("dronetest")){let t=we.drones[0],e=new A(-Math.sin(ue.yaw),0,-Math.cos(ue.yaw));t.pos.copy(ue.pos).addScaledVector(e,parseFloat(yn.get("dronetest"))||3).add(new A(.6,2.1,0)),t.target.copy(t.pos),t.state="patrol",t.yaw=ue.yaw+2.4,t.vel.set(0,0,0);let n=t.pos.clone();we.update=(i=>function(r,o,a){i.call(this,r,o,a),t.pos.copy(n),t.vel.set(0,0,0),t.g.position.copy(n),t.state="patrol",t.seenT=0})(we.update)}yn.has("torch")&&Qt.toggleTorch()}function bu(){Mt.state="paused";for(let s in Le)Le[s]=!1;Vt("pause").classList.remove("hidden")}function mu(s){Mt.state="end",document.exitPointerLock?.(),Vt("hud").classList.add("hidden"),Vt("end").classList.remove("hidden"),Vt("endtitle").textContent=s?"MISSION COMPLETE":"K.I.A.",Vt("endtitle").style.color=s?"":"var(--accent)";let t=Math.floor(Mt.missionTime/60),e=Math.floor(Mt.missionTime%60).toString().padStart(2,"0"),n=Qt.shotsFired?Math.round(Mt.hits/Qt.shotsFired*100):0;Vt("endstats").innerHTML=`<span>TIME</span><b>${t}:${e}</b><span>DRONES</span><b>${we.killed} / ${we.total}</b><span>ACCURACY</span><b>${n}%</b><span>ROUNDS FIRED</span><b>${Qt.shotsFired}</b><span>DAMAGE TAKEN</span><b>${Math.round(Mt.damageTaken)}</b>`,s&&dn.missionComplete()}Vt("deploy").addEventListener("click",()=>hc());Vt("resume").addEventListener("click",()=>hc());Vt("again").addEventListener("click",()=>location.reload());Vt("quality").value=xu;Vt("quality").addEventListener("change",s=>{Vo.set("quality",s.target.value),location.reload()});Vt("sens").value=ko;Vt("sens").addEventListener("input",s=>{ko=parseFloat(s.target.value),Vo.set("sens",ko)});ke.domElement.addEventListener("click",()=>{Mt.state==="playing"&&document.pointerLockElement!==ke.domElement&&Mu()});function Su(){let s=window.innerWidth,t=window.innerHeight;ke.setSize(s,t);let e=Math.floor(s*ke.getPixelRatio()),n=Math.floor(t*ke.getPixelRatio());Tt.pipeline&&Tt.setSize(e,n)}addEventListener("resize",Su);var Cv=new fo,ac=0,Bo=0,Oo=new A,lc=parseInt(yn.get("frames")||"0",10),gu=0;function Eu(){if(window.__done&&lc||(requestAnimationFrame(Eu),Mt.state==="loading"))return;let s=Math.min(Cv.getDelta(),1/20);yn.has("fixeddt")&&(s=1/60),Mt.t+=s;let t=Mt.state==="playing",e=t?s:0;if(t&&yn.has("aimbot")){let i=we.drones.filter(r=>r.alive);if(i.length){let r=Tt.camera.position;i.sort((a,l)=>a.pos.distanceTo(r)-l.pos.distanceTo(r));let o=i[0].pos.clone().sub(r);ue.yaw=Math.atan2(-o.x,-o.z),ue.pitch=Math.atan2(o.y,Math.hypot(o.x,o.z)),Le.fire=!0,Le.ads=!0}else Le.fire=!1,Le.ads=!1;Qt.ammo===0&&Qt.startReload()}if(t)Mt.missionTime+=s,ue.update(e,Le),Qt.update(e,Le,ue),Le.firePressed=!1,Le.jump=!1,we.update(e,ue,Tt.camera),!ue.alive&&!Mt.deadT&&(Mt.deadT=Mt.t,dn.playerHurt()),Mt.deadT&&Mt.t-Mt.deadT>2.2&&mu(!1),Mt.phase==="exfil"&&ue.pos.distanceTo(Tt.level.extraction)<2&&(Mt.phase="done",mu(!0));else if(Mt.state==="menu"){let i=Mt.t*.05;Tt.camera.position.set(-3+Math.sin(i)*3,1.9+Math.sin(i*.7)*.2,14+Math.cos(i)*1.5),Tt.camera.rotation.set(.04,-.12+Math.sin(i*.8)*.1,0)}Qt.root.visible=Mt.state!=="menu",Tt.camera.updateMatrixWorld(),Ni.update(e||(Mt.state==="menu"?s:0),i=>Math.max(0,ue.groundHeightAt(i,.05))),yu.update(s,Tt.camera.position),Tt.time.value+=s,Tt.update(s,Mt.t),dn.setListener(Tt.camera),we&&dn.setAlarm(t?we.alarm:0),Mt.explosionT>0?(Mt.explosionT-=s,Mt.explosionLight.intensity=Math.max(0,Mt.explosionT/.6)**2*900):Mt.explosionLight&&(Mt.explosionLight.intensity=0);let n=Tt.pipeline.params;Mt.flash=Math.max(0,Mt.flash-s*3),Mt.damageFlash=Math.max(0,Mt.damageFlash-s*2.2),n.flash=Mt.flash,n.damage=Mt.damageFlash*.8,n.lowHealth=ue.alive?Math.max(0,1-ue.health/40):1,n.ads=Qt.ads,Tt.camera.fov=Ie.lerp(70,54,Qt.ads)-Qt.sprint*-4,Tt.camera.updateProjectionMatrix(),Tt.render(s),(t||Mt.state==="paused")&&Pv(s),ac+=s,Bo++,Bo>=30&&(Vt("fps").textContent=`${Math.round(Bo/ac)} FPS \xB7 ${Go.name}`,ac=0,Bo=0),t&&gu++,lc&&gu>=lc&&!window.__done&&(window.__done="ok")}var vu=-1;function Pv(s){let e=6+Qt.spreadDeg(ue)*7,n=Vt("crosshair");if(n.style.opacity=String((1-Qt.ads)*(1-Qt.sprint)*(Qt.reloading?.4:1)),n.children[0].style.top=`${-e-9}px`,n.children[1].style.top=`${e}px`,n.children[2].style.left=`${-e-9}px`,n.children[3].style.left=`${e}px`,cc-=s,cc<=0&&(Vt("hitmarker").style.opacity="0"),Qt.ammo!==vu||Qt.reloading){Vt("mag").textContent=Qt.ammo,Vt("mag").classList.toggle("low",Qt.ammo<=8),Vt("reserve").textContent=Qt.reserve;let r=Vt("pips");r.children.length!==Qt.magSize&&(r.innerHTML="<i></i>".repeat(Qt.magSize));for(let o=0;o<Qt.magSize;o++)r.children[o].className=o<Qt.ammo?"":"e";vu=Qt.ammo}let i=Vt("healthfill");if(i.style.width=`${ue.health}%`,i.classList.toggle("low",ue.health<40),Mt.phase==="drones")Vt("objtext").textContent="Neutralise security drones",Vt("objcount").textContent=`${we.killed} / ${we.total}`,Vt("marker").classList.add("hidden");else{Vt("objtext").textContent="Exfiltrate via the service door";let r=ue.pos.distanceTo(Tt.level.extraction);Vt("objcount").textContent=`${r.toFixed(0)} m`,Oo.copy(Tt.level.extraction).add(new A(0,1.4,0)).project(Tt.camera);let o=Vt("marker");Oo.z<1?(o.classList.remove("hidden"),o.style.left=`${(Oo.x*.5+.5)*100}%`,o.style.top=`${(-Oo.y*.5+.5)*100}%`,Vt("markerdist").textContent=`${r.toFixed(0)}m`):o.classList.add("hidden")}Vt("alert").style.opacity=we.alarm>.5?"1":"0"}Tv().catch(s=>{console.error(s),Vt("loadlabel").textContent="Error: "+s.message});requestAnimationFrame(Eu);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
