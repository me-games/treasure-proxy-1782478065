var Yg=Object.create;var Qo=Object.defineProperty;var Kg=Object.getOwnPropertyDescriptor;var Jg=Object.getOwnPropertyNames;var Zg=Object.getPrototypeOf,jg=Object.prototype.hasOwnProperty;var Gn=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Gt=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Il=(i,e)=>{for(var t in e)Qo(i,t,{get:e[t],enumerable:!0})},If=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Jg(e))!jg.call(i,s)&&s!==t&&Qo(i,s,{get:()=>e[s],enumerable:!(n=Kg(e,s))||n.enumerable});return i};var Qg=(i,e,t)=>(t=i!=null?Yg(Zg(i)):{},If(e||!i||!i.__esModule?Qo(t,"default",{value:i,enumerable:!0}):t,i)),Zs=i=>If(Qo({},"__esModule",{value:!0}),i);function e0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){let i=gr("canvas");return i.style.display="block",i}function jr(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}function $d(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=$d(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=$d(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rs(...i){let e=i.join(" ");e in Pf||(Pf[e]=!0,Ye(...i))}function Yd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Bh(i,e){return(i%e+e)%e}function n0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function i0(i,e,t){return i!==e?(t-i)/(e-i):0}function Jr(i,e,t){return(1-t)*i+t*e}function s0(i,e,t,n){return Jr(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(Bh(i,e*2)-e)}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function c0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l0(i,e){return i+Math.random()*(e-i)}function h0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(Lf=i);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f0(i){return i*fr}function d0(i){return i*Ns}function p0(i){return(i&i-1)===0&&i!==0}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),h=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),p=o((e-n)/2),g=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*u,h*d,h*p,a*c);break;case"YZY":i.set(h*p,a*u,h*d,a*c);break;case"ZXZ":i.set(h*d,h*p,a*u,a*c);break;case"XZX":i.set(a*u,h*y,h*g,a*c);break;case"YXY":i.set(h*g,a*u,h*y,a*c);break;case"ZYZ":i.set(h*y,h*g,a*u,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function x0(){let i={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bn]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:Df,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Df,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}function Ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Wl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),h=e.dot(Es),c=t.dot(Es),u=n.dot(Es);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>a)return!1}return!0}function L0(i,e,t,n,s,r,o,a){let h;if(e.side===Mn?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,e.side===ri,a),h===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,e,t,n,s,r,o,a,h,c){i.getVertexPosition(a,ha),i.getVertexPosition(h,ua),i.getVertexPosition(c,fa);let u=L0(i,e,t,n,ha,ua,fa,qf);if(u){let d=new $;Fi.getBarycoord(qf,ha,ua,fa,d),s&&(u.uv=Fi.getInterpolatedAttribute(s,a,h,c,d,new lt)),r&&(u.uv1=Fi.getInterpolatedAttribute(r,a,h,c,d,new lt)),o&&(u.normal=Fi.getInterpolatedAttribute(o,a,h,c,d,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:h,c,normal:new $,materialIndex:0};Fi.getNormal(ha,ua,fa,p.normal),u.face=p,u.barycoord=d}return u}function va(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),Wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ga,Wa,eh,td)>n)return;eh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eh);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function rd(i,e,t,n,s,r,o){let a=hh.distanceSqToPoint(i);if(a<t){let h=new $;hh.closestPointToPoint(i,h),h.applyMatrix4(n);let c=s.ray.origin.distanceTo(h);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(od(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(od(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Hs(i[t]);for(let s in n)e[s]=n[s]}return e}function od(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function k0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}function wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function H0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ad(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let h=0;h!==e;++h)s[o++]=i[a+h]}return s}function G0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function W0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return po;case"quaternion":return Wi;case"bool":case"boolean":return Hi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function X0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=W0(i.type);if(i.times===void 0){let t=[],n=[];G0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function cd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Gh(i,e,t,n){let s=e_(n);switch(t){case Dh:return i*e;case uc:return i*e/s.components*s.byteLength;case fc:return i*e/s.components*s.byteLength;case ds:return i*e*2/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case Oh:return i*e*3/s.components*s.byteLength;case zn:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case xc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case yc:case vc:case bc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Io:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kc:case zc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e_(i){switch(i){case Pn:case Ih:return{byteLength:1,components:1};case Cr:case Ph:case Ei:return{byteLength:2,components:1};case lc:case hc:return{byteLength:2,components:4};case ci:case ac:case kn:return{byteLength:4,components:1};case Lh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var dd,_h,pd,Eo,md,Ar,ri,Mn,qn,Mi,Cs,xh,yh,vh,gd,ss,_d,xd,yd,vd,Sd,bd,Md,Ed,Ia,Pa,Td,wd,Ad,Rd,Cd,Id,Pd,Ld,Nd,La,Na,Da,Is,Oa,Ua,Fa,Ba,Sh,Dd,Od,oi,bh,Mh,Eh,Th,wh,Ah,Rh,sh,Ud,Ch,us,zs,sc,rc,To,rs,Xn,pr,Wt,oc,Vs,Xt,Rr,ai,Pn,Ih,Ph,Cr,ac,ci,kn,Ei,lc,hc,Ir,Lh,Nh,Dh,Oh,zn,yi,fs,uc,fc,ds,dc,pc,wo,Ao,Ro,Co,mc,gc,_c,xc,yc,vc,Sc,bc,Mc,Io,Ec,Tc,wc,Ac,Rc,Cc,Ic,Pc,Lc,Nc,Dc,Oc,Uc,Fc,Bc,kc,zc,Vc,Hc,Gc,Po,Wc,Ps,Ls,Ca,rh,oh,ah,ch,Fd,Uh,Lo,Pr,Bd,Xc,kd,$i,en,bn,Zr,Mt,As,lh,zd,Vd,Hd,qc,Gd,Wd,$c,Xd,ka,Fh,ni,mr,Pf,_r,Kd,vi,fn,Lf,fr,Ns,kh,lt,Un,$,Pl,Nf,et,Ll,Df,Of,ct,js,za,y0,xr,v0,Dl,on,wt,Va,Fn,Qr,Ha,rt,Qs,jn,S0,b0,ji,ea,Dn,Uf,Ff,ki,eo,M0,Bf,er,Pi,ta,Hr,E0,T0,kf,zf,Vf,Hf,w0,tr,Ol,Ot,ii,A0,yr,Jd,Qi,na,Ke,dn,to,no,Qn,Li,Fl,Ni,nr,ir,Gf,Bl,kl,zl,Vl,Hl,Gl,Fi,pn,Di,ei,ia,sr,rr,or,es,ts,Ms,Gr,sa,ra,Es,Jt,oa,R0,jt,io,so,rn,C0,Wr,Xl,wn,I0,Wn,ql,ar,On,Xr,sn,hn,vr,Sn,Sr,P0,An,Oi,$l,aa,ns,Yl,ca,Kl,Ds,Rn,Wf,Ts,la,Xf,ha,ua,fa,Jl,da,qf,pa,Qt,qr,$f,Yf,N0,Kf,ga,Zl,Jf,jl,ro,br,Mr,Zf,D0,oo,os,cr,jf,_a,Qf,O0,$r,Yr,ao,Ql,U0,F0,_i,ws,B0,xa,Er,zi,Ga,Wa,ed,Kr,ya,eh,td,Os,nd,id,as,co,Tr,sd,hh,Sa,ba,lo,ho,Vi,Xa,uo,cs,Ma,Ea,th,Ta,fo,Us,Zd,z0,V0,Bn,qa,Fs,Cn,$a,Ya,Si,Ka,Ja,Za,ja,In,Hi,po,Gi,Qa,Wi,Xi,ls,mo,xi,ec,jd,bi,Ui,uh,wr,lr,tc,go,Bs,_o,nh,ld,hd,xo,Aa,Ra,gi,yo,is,ud,fd,Zt,fh,vo,dh,So,hs,ph,ks,qi,ih,bo,hr,ur,nc,ic,Vh,q0,Hh,$0,Y0,K0,J0,Z0,j0,Q0,mh,At,cM,gh,Mo,Wh=Gn(()=>{dd=0,_h=1,pd=2,Eo=1,md=2,Ar=3,ri=0,Mn=1,qn=2,Mi=0,Cs=1,xh=2,yh=3,vh=4,gd=5,ss=100,_d=101,xd=102,yd=103,vd=104,Sd=200,bd=201,Md=202,Ed=203,Ia=204,Pa=205,Td=206,wd=207,Ad=208,Rd=209,Cd=210,Id=211,Pd=212,Ld=213,Nd=214,La=0,Na=1,Da=2,Is=3,Oa=4,Ua=5,Fa=6,Ba=7,Sh=0,Dd=1,Od=2,oi=0,bh=1,Mh=2,Eh=3,Th=4,wh=5,Ah=6,Rh=7,sh="attached",Ud="detached",Ch=300,us=301,zs=302,sc=303,rc=304,To=306,rs=1e3,Xn=1001,pr=1002,Wt=1003,oc=1004,Vs=1005,Xt=1006,Rr=1007,ai=1008,Pn=1009,Ih=1010,Ph=1011,Cr=1012,ac=1013,ci=1014,kn=1015,Ei=1016,lc=1017,hc=1018,Ir=1020,Lh=35902,Nh=35899,Dh=1021,Oh=1022,zn=1023,yi=1026,fs=1027,uc=1028,fc=1029,ds=1030,dc=1031,pc=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,mc=35840,gc=35841,_c=35842,xc=35843,yc=36196,vc=37492,Sc=37496,bc=37488,Mc=37489,Io=37490,Ec=37491,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Ic=37813,Pc=37814,Lc=37815,Nc=37816,Dc=37817,Oc=37818,Uc=37819,Fc=37820,Bc=37821,kc=36492,zc=36494,Vc=36495,Hc=36283,Gc=36284,Po=36285,Wc=36286,Ps=2300,Ls=2301,Ca=2302,rh=2303,oh=2400,ah=2401,ch=2402,Fd=2500,Uh=0,Lo=1,Pr=2,Bd=3200,Xc=0,kd=1,$i="",en="srgb",bn="srgb-linear",Zr="linear",Mt="srgb",As=7680,lh=519,zd=512,Vd=513,Hd=514,qc=515,Gd=516,Wd=517,$c=518,Xd=519,ka=35044,Fh="300 es",ni=2e3,mr=2001;Pf={},_r=null;Kd={[La]:Na,[Da]:Fa,[Oa]:Ba,[Is]:Ua,[Na]:La,[Fa]:Da,[Ba]:Oa,[Ua]:Is},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=1234567,fr=Math.PI/180,Ns=180/Math.PI;kh={DEG2RAD:fr,RAD2DEG:Ns,generateUUID:si,clamp:ft,euclideanModulo:Bh,mapLinear:n0,inverseLerp:i0,lerp:Jr,damp:s0,pingpong:r0,smoothstep:o0,smootherstep:a0,randInt:c0,randFloat:l0,randFloatSpread:h0,seededRandom:u0,degToRad:f0,radToDeg:d0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:_0,normalize:Tt,denormalize:ti},lt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let h=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[o+0],g=r[o+1],y=r[o+2],E=r[o+3];if(d!==E||h!==p||c!==g||u!==y){let x=h*p+c*g+u*y+d*E;x<0&&(p=-p,g=-g,y=-y,E=-E,x=-x);let _=1-a;if(x<.9995){let L=Math.acos(x),D=Math.sin(L);_=Math.sin(_*L)/D,a=Math.sin(a*L)/D,h=h*_+p*a,c=c*_+g*a,u=u*_+y*a,d=d*_+E*a}else{h=h*_+p*a,c=c*_+g*a,u=u*_+y*a,d=d*_+E*a;let L=1/Math.sqrt(h*h+c*c+u*u+d*d);h*=L,c*=L,u*=L,d*=L}}e[t]=h,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],h=n[s+1],c=n[s+2],u=n[s+3],d=r[o],p=r[o+1],g=r[o+2],y=r[o+3];return e[t]=a*y+u*d+h*g-c*p,e[t+1]=h*y+u*p+c*d-a*g,e[t+2]=c*y+u*g+a*p-h*d,e[t+3]=u*y-a*d-h*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),p=h(n/2),g=h(s/2),y=h(r/2);switch(o){case"XYZ":this._x=p*u*d+c*g*y,this._y=c*g*d-p*u*y,this._z=c*u*y+p*g*d,this._w=c*u*d-p*g*y;break;case"YXZ":this._x=p*u*d+c*g*y,this._y=c*g*d-p*u*y,this._z=c*u*y-p*g*d,this._w=c*u*d+p*g*y;break;case"ZXY":this._x=p*u*d-c*g*y,this._y=c*g*d+p*u*y,this._z=c*u*y+p*g*d,this._w=c*u*d-p*g*y;break;case"ZYX":this._x=p*u*d-c*g*y,this._y=c*g*d+p*u*y,this._z=c*u*y-p*g*d,this._w=c*u*d+p*g*y;break;case"YZX":this._x=p*u*d+c*g*y,this._y=c*g*d+p*u*y,this._z=c*u*y-p*g*d,this._w=c*u*d-p*g*y;break;case"XZY":this._x=p*u*d-c*g*y,this._y=c*g*d-p*u*y,this._z=c*u*y+p*g*d,this._w=c*u*d+p*g*y;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],h=t[9],c=t[2],u=t[6],d=t[10],p=n+a+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-h)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(u-h)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(h+u)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(h+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,h=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*h,this._y=s*u+o*h+r*a-n*c,this._z=r*u+o*c+n*h-s*a,this._w=o*u-n*a-s*h-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let h=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);h=Math.sin(h*c)/u,t=Math.sin(t*c)/u,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,h=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+h*c+o*d-a*u,this.y=n+h*u+a*c-r*d,this.z=s+h*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new $,Nf=new Un,et=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,h,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c)}set(e,t,n,s,r,o,a,h,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=h,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],u=n[4],d=n[7],p=n[2],g=n[5],y=n[8],E=s[0],x=s[3],_=s[6],L=s[1],D=s[4],w=s[7],A=s[2],C=s[5],U=s[8];return r[0]=o*E+a*L+h*A,r[3]=o*x+a*D+h*C,r[6]=o*_+a*w+h*U,r[1]=c*E+u*L+d*A,r[4]=c*x+u*D+d*C,r[7]=c*_+u*w+d*U,r[2]=p*E+g*L+y*A,r[5]=p*x+g*D+y*C,r[8]=p*_+g*w+y*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*h+s*r*c-s*o*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*h-u*r,g=c*r-o*h,y=t*d+n*p+s*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/y;return e[0]=d*E,e[1]=(s*c-u*n)*E,e[2]=(a*n-s*o)*E,e[3]=p*E,e[4]=(u*t-s*h)*E,e[5]=(s*r-a*t)*E,e[6]=g*E,e[7]=(n*h-c*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+e,-s*c,s*h,-s*(-c*o+h*a)+a+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new et,Df=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct=x0();za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=gr("canvas")),js.width=e.width,js.height=e.height;let s=js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nl(s[o].image)):r.push(Nl(s[o]))}else r=Nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};v0=0,Dl=new $,on=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=Xt,o=ai,a=zn,h=Pn,c=i.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=si(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Ch;on.DEFAULT_ANISOTROPY=1;wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,h=e.elements,c=h[0],u=h[4],d=h[8],p=h[1],g=h[5],y=h[9],E=h[2],x=h[6],_=h[10];if(Math.abs(u-p)<.01&&Math.abs(d-E)<.01&&Math.abs(y-x)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+E)<.1&&Math.abs(y+x)<.1&&Math.abs(c+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(c+1)/2,w=(g+1)/2,A=(_+1)/2,C=(u+p)/4,U=(d+E)/4,b=(y+x)/4;return D>w&&D>A?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=C/n,r=U/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=U/r,s=b/r),this.set(n,s,r,t),this}let L=Math.sqrt((x-y)*(x-y)+(d-E)*(d-E)+(p-u)*(p-u));return Math.abs(L)<.001&&(L=1),this.x=(x-y)/L,this.y=(d-E)/L,this.z=(p-u)/L,this.w=Math.acos((c+g+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new on(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Va{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qr=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ha=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,h,c,u,d,p,g,y,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c,u,d,p,g,y,E,x)}set(e,t,n,s,r,o,a,h,c,u,d,p,g,y,E,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=h,_[2]=c,_[6]=u,_[10]=d,_[14]=p,_[3]=g,_[7]=y,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*u,g=o*d,y=a*u,E=a*d;t[0]=h*u,t[4]=-h*d,t[8]=c,t[1]=g+y*c,t[5]=p-E*c,t[9]=-a*h,t[2]=E-p*c,t[6]=y+g*c,t[10]=o*h}else if(e.order==="YXZ"){let p=h*u,g=h*d,y=c*u,E=c*d;t[0]=p+E*a,t[4]=y*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=g*a-y,t[6]=E+p*a,t[10]=o*h}else if(e.order==="ZXY"){let p=h*u,g=h*d,y=c*u,E=c*d;t[0]=p-E*a,t[4]=-o*d,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*u,t[9]=E-p*a,t[2]=-o*c,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){let p=o*u,g=o*d,y=a*u,E=a*d;t[0]=h*u,t[4]=y*c-g,t[8]=p*c+E,t[1]=h*d,t[5]=E*c+p,t[9]=g*c-y,t[2]=-c,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){let p=o*h,g=o*c,y=a*h,E=a*c;t[0]=h*u,t[4]=E-p*d,t[8]=y*d+g,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*d+y,t[10]=p-E*d}else if(e.order==="XZY"){let p=o*h,g=o*c,y=a*h,E=a*c;t[0]=h*u,t[4]=-d,t[8]=c*u,t[1]=p*d+E,t[5]=o*u,t[9]=g*d-y,t[2]=y*d-g,t[6]=a*u,t[10]=E*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,b0)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ji.crossVectors(n,Dn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ji.crossVectors(n,Dn)),ji.normalize(),ea.crossVectors(Dn,ji),s[0]=ji.x,s[4]=ea.x,s[8]=Dn.x,s[1]=ji.y,s[5]=ea.y,s[9]=Dn.y,s[2]=ji.z,s[6]=ea.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],u=n[1],d=n[5],p=n[9],g=n[13],y=n[2],E=n[6],x=n[10],_=n[14],L=n[3],D=n[7],w=n[11],A=n[15],C=s[0],U=s[4],b=s[8],I=s[12],H=s[1],V=s[5],J=s[9],ue=s[13],P=s[2],O=s[6],B=s[10],F=s[14],W=s[3],re=s[7],me=s[11],pe=s[15];return r[0]=o*C+a*H+h*P+c*W,r[4]=o*U+a*V+h*O+c*re,r[8]=o*b+a*J+h*B+c*me,r[12]=o*I+a*ue+h*F+c*pe,r[1]=u*C+d*H+p*P+g*W,r[5]=u*U+d*V+p*O+g*re,r[9]=u*b+d*J+p*B+g*me,r[13]=u*I+d*ue+p*F+g*pe,r[2]=y*C+E*H+x*P+_*W,r[6]=y*U+E*V+x*O+_*re,r[10]=y*b+E*J+x*B+_*me,r[14]=y*I+E*ue+x*F+_*pe,r[3]=L*C+D*H+w*P+A*W,r[7]=L*U+D*V+w*O+A*re,r[11]=L*b+D*J+w*B+A*me,r[15]=L*I+D*ue+w*F+A*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],h=e[9],c=e[13],u=e[2],d=e[6],p=e[10],g=e[14],y=e[3],E=e[7],x=e[11],_=e[15],L=h*g-c*p,D=a*g-c*d,w=a*p-h*d,A=o*g-c*u,C=o*p-h*u,U=o*d-a*u;return t*(E*L-x*D+_*w)-n*(y*L-x*A+_*C)+s*(y*D-E*A+_*U)-r*(y*w-E*C+x*U)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],h=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*h)+s*(r*c-o*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],u=e[8],d=e[9],p=e[10],g=e[11],y=e[12],E=e[13],x=e[14],_=e[15],L=t*a-n*o,D=t*h-s*o,w=t*c-r*o,A=n*h-s*a,C=n*c-r*a,U=s*c-r*h,b=u*E-d*y,I=u*x-p*y,H=u*_-g*y,V=d*x-p*E,J=d*_-g*E,ue=p*_-g*x,P=L*ue-D*J+w*V+A*H-C*I+U*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(a*ue-h*J+c*V)*O,e[1]=(s*J-n*ue-r*V)*O,e[2]=(E*U-x*C+_*A)*O,e[3]=(p*C-d*U-g*A)*O,e[4]=(h*H-o*ue-c*I)*O,e[5]=(t*ue-s*H+r*I)*O,e[6]=(x*w-y*U-_*D)*O,e[7]=(u*U-p*w+g*D)*O,e[8]=(o*J-a*H+c*b)*O,e[9]=(n*H-t*J-r*b)*O,e[10]=(y*C-E*w+_*L)*O,e[11]=(d*w-u*C-g*L)*O,e[12]=(a*I-o*V-h*b)*O,e[13]=(t*V-n*I+s*b)*O,e[14]=(E*D-y*A-x*L)*O,e[15]=(u*A-d*D+p*L)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,h=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*h,c*h+s*a,0,c*a+s*h,u*a+n,u*h-s*o,0,c*h-s*a,u*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,c=r+r,u=o+o,d=a+a,p=r*c,g=r*u,y=r*d,E=o*u,x=o*d,_=a*d,L=h*c,D=h*u,w=h*d,A=n.x,C=n.y,U=n.z;return s[0]=(1-(E+_))*A,s[1]=(g+w)*A,s[2]=(y-D)*A,s[3]=0,s[4]=(g-w)*C,s[5]=(1-(p+_))*C,s[6]=(x+L)*C,s[7]=0,s[8]=(y+D)*U,s[9]=(x-L)*U,s[10]=(1-(p+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),a=Qs.set(s[4],s[5],s[6]).length(),h=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,u=1/a,d=1/h;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=h,this}makePerspective(e,t,n,s,r,o,a=ni,h=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),g=(n+s)/(n-s),y,E;if(h)y=r/(o-r),E=o*r/(o-r);else if(a===ni)y=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(a===mr)y=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,h=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),g=-(n+s)/(n-s),y,E;if(h)y=1/(o-r),E=o/(o-r);else if(a===ni)y=-2/(o-r),E=-(o+r)/(o-r);else if(a===mr)y=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qs=new $,jn=new rt,S0=new $(0,0,0),b0=new $(1,1,1),ji=new $,ea=new $,Dn=new $,Uf=new rt,Ff=new Un,ki=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],h=s[1],c=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M0=0,Bf=new $,er=new Un,Pi=new rt,ta=new $,Hr=new $,E0=new $,T0=new Un,kf=new $(1,0,0),zf=new $(0,1,0),Vf=new $(0,0,1),Hf={type:"added"},w0={type:"removed"},tr={type:"childadded",child:null},Ol={type:"childremoved",child:null},Ot=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new $,t=new ki,n=new Un,s=new $(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new et}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Hr,ta,this.up):Pi.lookAt(ta,Hr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Pi),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),tr.child=e,this.dispatchEvent(tr),tr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let d=h[c];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(e.materials,this.material[h]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(e.animations,h))}}if(t){let a=o(e.geometries),h=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let h=[];for(let c in a){let u=a[c];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new $(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let x=t.getJointPose(E,n),_=this._getHandJoint(c,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&p>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},na={h:0,s:0,l:0};Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Bh(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ul(o,r,e+1/3),this.g=Ul(o,r,e),this.b=Ul(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ct.workingToColorSpace(dn.copy(this),e),Math.round(ft(dn.r*255,0,255))*65536+Math.round(ft(dn.g*255,0,255))*256+Math.round(ft(dn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),h,c,u=(a+o)/2;if(a===o)h=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return e.h=h,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=en){ct.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(na);let n=Jr(Qi.h,na.h,t),s=Jr(Qi.s,na.s,t),r=Jr(Qi.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ke;Ke.NAMES=Jd;to=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},no=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new $,Li=new $,Fl=new $,Ni=new $,nr=new $,ir=new $,Gf=new $,Bl=new $,kl=new $,zl=new $,Vl=new wt,Hl=new wt,Gl=new wt,Fi=class i{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qn.subVectors(s,t),Li.subVectors(n,t),Fl.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Li),h=Qn.dot(Fl),c=Li.dot(Li),u=Li.dot(Fl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(c*h-a*u)*p,y=(o*u-a*h)*p;return r.set(1-g-y,y,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,h){return this.getBarycoord(e,t,n,s,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ni.x),h.addScaledVector(o,Ni.y),h.addScaledVector(a,Ni.z),h)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,n),Gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Gl,r.z),o}static isFrontFacing(e,t,n,s){return Qn.subVectors(n,t),Li.subVectors(e,t),Qn.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Qn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,n),ir.subVectors(r,n),Bl.subVectors(e,n);let h=nr.dot(Bl),c=ir.dot(Bl);if(h<=0&&c<=0)return t.copy(n);kl.subVectors(e,s);let u=nr.dot(kl),d=ir.dot(kl);if(u>=0&&d<=u)return t.copy(s);let p=h*d-u*c;if(p<=0&&h>=0&&u<=0)return o=h/(h-u),t.copy(n).addScaledVector(nr,o);zl.subVectors(e,r);let g=nr.dot(zl),y=ir.dot(zl);if(y>=0&&g<=y)return t.copy(r);let E=g*c-h*y;if(E<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(ir,a);let x=u*y-g*d;if(x<=0&&d-u>=0&&g-y>=0)return Gf.subVectors(r,s),a=(d-u)/(d-u+(g-y)),t.copy(s).addScaledVector(Gf,a);let _=1/(x+E+p);return o=E*_,a=p*_,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),sa.subVectors(this.max,Gr),sr.subVectors(e.a,Gr),rr.subVectors(e.b,Gr),or.subVectors(e.c,Gr),es.subVectors(rr,sr),ts.subVectors(or,rr),Ms.subVectors(sr,or);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ms.z,Ms.y,es.z,0,-es.x,ts.z,0,-ts.x,Ms.z,0,-Ms.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ms.y,Ms.x,0];return!Wl(t,sr,rr,or,sa)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,sr,rr,or,sa))?!1:(ra.crossVectors(es,ts),t=[ra.x,ra.y,ra.z],Wl(t,sr,rr,or,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new $,new $,new $,new $,new $,new $,new $,new $],ei=new $,ia=new pn,sr=new $,rr=new $,or=new $,es=new $,ts=new $,Ms=new $,Gr=new $,sa=new $,ra=new $,Es=new $;Jt=new $,oa=new lt,R0=0,jt=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},io=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},so=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rn=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},C0=new pn,Wr=new $,Xl=new $,wn=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):C0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Xl)),this.expandByPoint(Wr.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},I0=0,Wn=new rt,ql=new Ot,ar=new $,On=new pn,Xr=new pn,sn=new $,hn=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?so:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(On.min,Xr.min),On.expandByPoint(sn),sn.addVectors(On.max,Xr.max),On.expandByPoint(sn)):(On.expandByPoint(Xr.min),On.expandByPoint(Xr.max))}On.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],h=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),h&&(ar.fromBufferAttribute(e,c),sn.add(ar)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],h=[];for(let b=0;b<n.count;b++)a[b]=new $,h[b]=new $;let c=new $,u=new $,d=new $,p=new lt,g=new lt,y=new lt,E=new $,x=new $;function _(b,I,H){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,H),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,H),u.sub(c),d.sub(c),g.sub(p),y.sub(p);let V=1/(g.x*y.y-y.x*g.y);isFinite(V)&&(E.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(V),x.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(V),a[b].add(E),a[I].add(E),a[H].add(E),h[b].add(x),h[I].add(x),h[H].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let b=0,I=L.length;b<I;++b){let H=L[b],V=H.start,J=H.count;for(let ue=V,P=V+J;ue<P;ue+=3)_(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}let D=new $,w=new $,A=new $,C=new $;function U(b){A.fromBufferAttribute(s,b),C.copy(A);let I=a[b];D.copy(I),D.sub(A.multiplyScalar(A.dot(I))).normalize(),w.crossVectors(C,I);let V=w.dot(h[b])<0?-1:1;o.setXYZW(b,D.x,D.y,D.z,V)}for(let b=0,I=L.length;b<I;++b){let H=L[b],V=H.start,J=H.count;for(let ue=V,P=V+J;ue<P;ue+=3)U(e.getX(ue+0)),U(e.getX(ue+1)),U(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new $,r=new $,o=new $,a=new $,h=new $,c=new $,u=new $,d=new $;if(e)for(let p=0,g=e.count;p<g;p+=3){let y=e.getX(p+0),E=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,x),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),c.fromBufferAttribute(n,x),a.add(u),h.add(u),c.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,h){let c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(h.length*u),g=0,y=0;for(let E=0,x=h.length;E<x;E++){a.isInterleavedBufferAttribute?g=h[E]*a.data.stride+a.offset:g=h[E]*u;for(let _=0;_<u;_++)p[y++]=c[g++]}return new jt(p,u,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],c=e(h,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let h=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let p=c[u],g=e(p,n);h.push(g)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let d=0,p=c.length;d<p;d++){let g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(s[h]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new $,Sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},P0=0,An=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Cs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=new $,$l=new $,aa=new $,ns=new $,Yl=new $,ca=new $,Kl=new $,Ds=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$l.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),ns.copy(this.origin).sub($l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=ns.dot(this.direction),h=-ns.dot(aa),c=ns.lengthSq(),u=Math.abs(1-o*o),d,p,g,y;if(u>0)if(d=o*h-a,p=o*a-h,y=r*u,d>=0)if(p>=-y)if(p<=y){let E=1/u;d*=E,p*=E,g=d*(d+o*p+2*a)+p*(o*d+p+2*h)+c}else p=r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*h)+c;else p=-r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*h)+c;else p<=-y?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-h),r),g=-d*d+p*(p+2*h)+c):p<=y?(d=0,p=Math.min(Math.max(-r,-h),r),g=p*(p+2*h)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-h),r),g=-d*d+p*(p+2*h)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($l).addScaledVector(aa,p),g}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,h,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,h=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,h=(e.min.z-p.z)*d),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){Yl.subVectors(t,e),ca.subVectors(n,e),Kl.crossVectors(Yl,ca);let o=this.direction.dot(Kl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let h=a*this.direction.dot(ca.crossVectors(ns,ca));if(h<0)return null;let c=a*this.direction.dot(Yl.cross(ns));if(c<0||h+c>o)return null;let u=-a*ns.dot(Kl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wf=new rt,Ts=new Ds,la=new wn,Xf=new $,ha=new $,ua=new $,fa=new $,Jl=new $,da=new $,qf=new $,pa=new $,Qt=class extends Ot{constructor(e=new hn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=a[h],d=r[h];u!==0&&(Jl.fromBufferAttribute(d,e),o?da.addScaledVector(Jl,u):da.addScaledVector(Jl.sub(t),u))}t.add(da)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(la.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(la,Xf)===null||Ts.origin.distanceToSquared(Xf)>(e.far-e.near)**2))&&(Wf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,E=p.length;y<E;y++){let x=p[y],_=o[x.materialIndex],L=Math.max(x.start,g.start),D=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let w=L,A=D;w<A;w+=3){let C=a.getX(w),U=a.getX(w+1),b=a.getX(w+2);s=ma(this,_,e,n,c,u,d,C,U,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let y=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let x=y,_=E;x<_;x+=3){let L=a.getX(x),D=a.getX(x+1),w=a.getX(x+2);s=ma(this,o,e,n,c,u,d,L,D,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let y=0,E=p.length;y<E;y++){let x=p[y],_=o[x.materialIndex],L=Math.max(x.start,g.start),D=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let w=L,A=D;w<A;w+=3){let C=w,U=w+1,b=w+2;s=ma(this,_,e,n,c,u,d,C,U,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let y=Math.max(0,g.start),E=Math.min(h.count,g.start+g.count);for(let x=y,_=E;x<_;x+=3){let L=x,D=x+1,w=x+2;s=ma(this,o,e,n,c,u,d,L,D,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};qr=new wt,$f=new wt,Yf=new wt,N0=new wt,Kf=new rt,ga=new $,Zl=new wn,Jf=new rt,jl=new Ds,ro=class extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ga),this.boundingBox.expandByPoint(ga)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ga),this.boundingSphere.expandByPoint(ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zl.copy(this.boundingSphere),Zl.applyMatrix4(s),e.ray.intersectsSphere(Zl)!==!1&&(Jf.copy(s).invert(),jl.copy(e.ray).applyMatrix4(Jf),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Yf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(...t,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Yf.getComponent(r);if(o!==0){let a=$f.getComponent(r);Kf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(N0.copy(qr).applyMatrix4(Kf),o)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},br=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mr=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,h,c=Wt,u=Wt,d,p){super(null,o,a,h,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new rt,D0=new rt,oo=class i{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:D0;Zf.multiplyMatrices(a,t[r]),Zf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mr(t,e,e,zn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ye("Skeleton: No bone found with UUID:",r),o=new br),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},os=class extends jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new rt,jf=new rt,_a=[],Qf=new pn,O0=new rt,$r=new Qt,Yr=new wn,ao=class extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Qf.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Yr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),jf.multiplyMatrices(n,cr),$r.matrixWorld=jf,$r.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){let h=_a[o];h.instanceId=r,h.object=this,t.push(h)}_a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,uc,kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*e;return r[h]=a,r.set(n,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ql=new $,U0=new $,F0=new et,_i=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ql.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new wn,B0=new lt(.5,.5),xa=new $,Er=class{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],h=r[2],c=r[3],u=r[4],d=r[5],p=r[6],g=r[7],y=r[8],E=r[9],x=r[10],_=r[11],L=r[12],D=r[13],w=r[14],A=r[15];if(s[0].setComponents(c-o,g-u,_-y,A-L).normalize(),s[1].setComponents(c+o,g+u,_+y,A+L).normalize(),s[2].setComponents(c+a,g+d,_+E,A+D).normalize(),s[3].setComponents(c-a,g-d,_-E,A-D).normalize(),n)s[4].setComponents(h,p,x,w).normalize(),s[5].setComponents(c-h,g-p,_-x,A-w).normalize();else if(s[4].setComponents(c-h,g-p,_-x,A-w).normalize(),t===ni)s[5].setComponents(c+h,g+p,_+x,A+w).normalize();else if(t===mr)s[5].setComponents(h,p,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=B0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zi=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new $,Wa=new $,ed=new rt,Kr=new Ds,ya=new wn,eh=new $,td=new $,Os=class extends Ot{constructor(e=new hn,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new rn(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;ed.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let g=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let E=g,x=y-1;E<x;E+=c){let _=u.getX(E),L=u.getX(E+1),D=va(this,e,Kr,h,_,L,E);D&&t.push(D)}if(this.isLineLoop){let E=u.getX(y-1),x=u.getX(g),_=va(this,e,Kr,h,E,x,y-1);_&&t.push(_)}}else{let g=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let E=g,x=y-1;E<x;E+=c){let _=va(this,e,Kr,h,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){let E=va(this,e,Kr,h,y-1,g,y-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};nd=new $,id=new $,as=class extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nd.distanceTo(id);e.setAttribute("lineDistance",new rn(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},co=class extends Os{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Tr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sd=new rt,hh=new Ds,Sa=new wn,ba=new $,lo=class extends Ot{constructor(e=new hn,t=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;sd.copy(s).invert(),hh.copy(e.ray).applyMatrix4(sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let y=p,E=g;y<E;y++){let x=c.getX(y);ba.fromBufferAttribute(d,x),rd(ba,x,h,s,e,t,this)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,E=g;y<E;y++)ba.fromBufferAttribute(d,y),rd(ba,y,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ho=class extends on{constructor(e=[],t=us,n,s,r,o,a,h,c,u){super(e,t,n,s,r,o,a,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vi=class extends on{constructor(e,t,n=ci,s,r,o,a=Wt,h=Wt,c,u=yi,d=1){if(u!==yi&&u!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,o,a,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends Vi{constructor(e,t=ci,n=us,s,r,o=Wt,a=Wt,h,c=yi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,h,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cs=class i extends hn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],c=[],u=[],d=[],p=0,g=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function y(E,x,_,L,D,w,A,C,U,b,I){let H=w/U,V=A/b,J=w/2,ue=A/2,P=C/2,O=U+1,B=b+1,F=0,W=0,re=new $;for(let me=0;me<B;me++){let pe=me*V-ue;for(let xe=0;xe<O;xe++){let We=xe*H-J;re[E]=We*L,re[x]=pe*D,re[_]=P,c.push(re.x,re.y,re.z),re[E]=0,re[x]=0,re[_]=C>0?1:-1,u.push(re.x,re.y,re.z),d.push(xe/U),d.push(1-me/b),F+=1}}for(let me=0;me<b;me++)for(let pe=0;pe<U;pe++){let xe=p+pe+O*me,We=p+pe+O*(me+1),mt=p+(pe+1)+O*(me+1),tt=p+(pe+1)+O*me;h.push(xe,We,tt),h.push(We,mt,tt),W+=6}a.addGroup(g,W,I),g+=W,p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ma=new $,Ea=new $,th=new $,Ta=new Fi,fo=class extends hn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(fr*t),o=e.getIndex(),a=e.getAttribute("position"),h=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),p={},g=[];for(let y=0;y<h;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:E,b:x,c:_}=Ta;if(E.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Ta.getNormal(th),d[0]=`${Math.round(E.x*s)},${Math.round(E.y*s)},${Math.round(E.z*s)}`,d[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let L=0;L<3;L++){let D=(L+1)%3,w=d[L],A=d[D],C=Ta[u[L]],U=Ta[u[D]],b=`${w}_${A}`,I=`${A}_${w}`;I in p&&p[I]?(th.dot(p[I].normal)<=r&&(g.push(C.x,C.y,C.z),g.push(U.x,U.y,U.z)),p[I]=null):b in p||(p[b]={index0:c[L],index1:c[D],normal:th.clone()})}}for(let y in p)if(p[y]){let{index0:E,index1:x}=p[y];Ma.fromBufferAttribute(a,E),Ea.fromBufferAttribute(a,x),g.push(Ma.x,Ma.y,Ma.z),g.push(Ea.x,Ea.y,Ea.z)}this.setAttribute("position",new rn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Us=class i extends hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),h=Math.floor(s),c=a+1,u=h+1,d=e/a,p=t/h,g=[],y=[],E=[],x=[];for(let _=0;_<u;_++){let L=_*p-o;for(let D=0;D<c;D++){let w=D*d-r;y.push(w,-L,0),E.push(0,0,1),x.push(D/a),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<a;L++){let D=L+c*_,w=L+c*(_+1),A=L+1+c*(_+1),C=L+1+c*_;g.push(D,w,C),g.push(w,A,C)}this.setIndex(g),this.setAttribute("position",new rn(y,3)),this.setAttribute("normal",new rn(E,3)),this.setAttribute("uv",new rn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};Zd={clone:Hs,merge:mn},z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new $().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fs=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},$a=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends Si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ah:r=e,a=2*t-n;break;case ch:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ah:o=e,h=2*n-t;break;case ch:o=1,h=n+s[1]-s[0];break;default:o=e-1,h=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,c=h-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,y=(n-t)/(s-t),E=y*y,x=E*y,_=-p*x+2*p*E-p*y,L=(1+p)*x+(-1.5-2*p)*E+(-.5+p)*y+1,D=(-1-g)*x+(1.5+g)*E+.5*y,w=g*x-g*E;for(let A=0;A!==a;++A)r[A]=_*o[u+A]+L*o[c+A]+D*o[h+A]+w*o[d+A];return r}},Ja=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,c=h-a,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[h+p]*u;return r}},Za=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends Si{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,c=h-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let y=(n-t)/(s-t),E=1-y;for(let x=0;x!==a;++x)r[x]=o[c+x]*E+o[h+x]*y;return r}let p=a*2,g=e-1;for(let y=0;y!==a;++y){let E=o[c+y],x=o[h+y],_=g*p+y*2,L=d[_],D=d[_+1],w=e*p+y*2,A=u[w],C=u[w+1],U=(n-t)/(s-t),b,I,H,V,J;for(let ue=0;ue<8;ue++){b=U*U,I=b*U,H=1-U,V=H*H,J=V*H;let O=J*t+3*V*U*L+3*H*b*A+I*s-n;if(Math.abs(O)<1e-10)break;let B=3*V*(L-t)+6*H*U*(A-L)+3*b*(s-A);if(Math.abs(B)<1e-10)break;U=U-O/B,U=Math.max(0,Math.min(1,U))}r[y]=J*E+3*V*U*D+3*H*b*C+I*x}return r}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break;case rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){je("KeyframeTrack: Time is not a valid number.",this,a,h),e=!1;break}if(o!==null&&o>h){je("KeyframeTrack: Out of order keys.",this,a,h,o),e=!1;break}o=h}if(s!==void 0&&t0(s))for(let a=0,h=s.length;a!==h;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let h=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)h=!0;else{let d=a*n,p=d-n,g=d+n;for(let y=0;y!==n;++y){let E=t[d+y];if(E!==t[p+y]||E!==t[g+y]){h=!0;break}}}if(h){if(a!==o){e[o]=e[a];let d=a*n,p=o*n;for(let g=0;g!==n;++g)t[p+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,h=o*n,c=0;c!==n;++c)t[h+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ls;Hi=class extends In{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ps;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;po=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};po.prototype.ValueTypeName="color";Gi=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Gi.prototype.ValueTypeName="number";Qa=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,h);return r}},Wi=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends In{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ps;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;ls=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ls.prototype.ValueTypeName="vector";mo=class{constructor(e="",t=-1,n=[],s=Fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(X0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let h=[],c=[];h.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=H0(h);h=ad(h,1,u),c=ad(c,1,u),!s&&h[0]===0&&(h.push(r),c.push(c[0])),o.push(new Gi(".morphTargetInfluences["+t[a].name+"]",h,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,h=e.length;a<h;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let d=u[1],p=s[d];p||(s[d]=p=[]),p.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(cd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!cd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};ec=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let g=c[d],y=c[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new ec,bi=class{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";Ui={},uh=class extends Error{constructor(e,t){super(e),this.response=t}},wr=class extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,h=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ui[e],d=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=p?parseInt(p):0,y=g!==0,E=0,x=new ReadableStream({start(_){L();function L(){d.read().then(({done:D,value:w})=>{if(D)_.close();else{E+=w.byteLength;let A=new ProgressEvent("progress",{lengthComputable:y,loaded:E,total:g});for(let C=0,U=u.length;C<U;C++){let b=u[C];b.onProgress&&b.onProgress(A)}_.enqueue(w),L()}},D=>{_.error(D)})}}});return new Response(x)}else throw new uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(p);return c.arrayBuffer().then(y=>g.decode(y))}}}).then(c=>{xi.add(`file:${e}`,c);let u=Ui[e];delete Ui[e];for(let d=0,p=u.length;d<p;d++){let g=u[d];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=Ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let d=0,p=u.length;d<p;d++){let g=u[d];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},lr=new WeakMap,tc=class extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=lr.get(o);d===void 0&&(d=[],lr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=gr("img");function h(){u(),t&&t(this);let d=lr.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onLoad&&g.onLoad(this)}lr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),xi.remove(`image:${e}`);let p=lr.get(this)||[];for(let g=0;g<p.length;g++){let y=p[g];y.onError&&y.onError(d)}lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",h,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},go=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new tc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Bs=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_o=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nh=new rt,ld=new $,hd=new $,xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===mr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Aa=new $,Ra=new Un,gi=new $,yo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ra,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Aa,Ra,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new $,ud=new lt,fd=new lt,Zt=class extends yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,ud,fd),t.subVectors(fd,ud)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*n/c,s*=o.width/h,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends xo{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ns*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vo=class extends Bs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},dh=class extends xo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},So=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends yo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ph=class extends xo{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new ph}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ih=new WeakMap,bo=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ih.has(o)===!0?(s&&s(ih.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let h=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),ih.set(h,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,h),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},hr=-90,ur=1,nc=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new Zt(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new Zt(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new Zt(hr,ur,e,t);a.layers=this.layers,this.add(a);let h=new Zt(hr,ur,e,t);h.layers=this.layers,this.add(h);let c=new Zt(hr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,h]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,p,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ic=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vh="\\[\\]\\.:\\/",q0=new RegExp("["+Vh+"]","g"),Hh="[^"+Vh+"]",$0="[^"+Vh.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Hh),K0=/(WCOD+)?/.source.replace("WCOD",$0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),j0=new RegExp("^"+Y0+K0+J0+Z0+"$"),Q0=["material","materials","bones","map"],mh=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(e){let t=j0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let h=n(a.children);if(h)return h}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=mh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];cM=new Float32Array(1),gh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},Mo=class extends as{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ke(n),s=new Ke(s);let r=t/2,o=e/t,a=e/2,h=[],c=[];for(let p=0,g=0,y=-a;p<=t;p++,y+=o){h.push(-a,0,y,a,0,y),h.push(y,0,-a,y,0,a);let E=p===r?n:s;E.toArray(c,g),g+=3,E.toArray(c,g),g+=3,E.toArray(c,g),g+=3,E.toArray(c,g),g+=3}let u=new hn;u.setAttribute("position",new rn(h,3)),u.setAttribute("color",new rn(c,3));let d=new zi({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185")});function Sp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function n_(i){let e=new WeakMap;function t(a,h){let c=a.array,u=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,h,c){let u=h.array,d=h.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((g,y)=>g.start-y.start);let p=0;for(let g=1;g<d.length;g++){let y=d[p],E=d[g];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++p,d[p]=E)}d.length=p+1;for(let g=0,y=d.length;g<y;g++){let E=d[g];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=e.get(a);h&&(i.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,h),c.version=a.version}}return{get:s,remove:r,update:o}}function By(i,e,t,n,s,r){let o=new Ke(0),a=s===!0?0:1,h,c,u=null,d=0,p=null;function g(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){let w=L.backgroundBlurriness>0;D=e.get(D,w)}return D}function y(L){let D=!1,w=g(L);w===null?x(o,a):w&&w.isColor&&(x(w,1),D=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(L,D){let w=g(D);w&&(w.isCubeTexture||w.mapping===To)?(c===void 0&&(c=new Qt(new cs(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Hs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=ct.getTransfer(w.colorSpace)!==Mt,(u!==w||d!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Qt(new Us(2,2),new Bn({name:"BackgroundMaterial",uniforms:Hs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=ct.getTransfer(w.colorSpace)!==Mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,D){L.getRGB(Yc,zh(i)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,D,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(L,D=1){o.set(L),a=D,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(L){a=L,x(o,a)},render:y,addToRenderList:E,dispose:_}}function ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(V,J,ue,P,O){let B=!1,F=d(V,P,ue,J);r!==F&&(r=F,c(r.object)),B=g(V,P,ue,O),B&&y(V,P,ue,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(V,J,ue,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function h(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function u(V){return i.deleteVertexArray(V)}function d(V,J,ue,P){let O=P.wireframe===!0,B=n[J.id];B===void 0&&(B={},n[J.id]=B);let F=V.isInstancedMesh===!0?V.id:0,W=B[F];W===void 0&&(W={},B[F]=W);let re=W[ue.id];re===void 0&&(re={},W[ue.id]=re);let me=re[O];return me===void 0&&(me=p(h()),re[O]=me),me}function p(V){let J=[],ue=[],P=[];for(let O=0;O<t;O++)J[O]=0,ue[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ue,attributeDivisors:P,object:V,attributes:{},index:null}}function g(V,J,ue,P){let O=r.attributes,B=J.attributes,F=0,W=ue.getAttributes();for(let re in W)if(W[re].location>=0){let pe=O[re],xe=B[re];if(xe===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function y(V,J,ue,P){let O={},B=J.attributes,F=0,W=ue.getAttributes();for(let re in W)if(W[re].location>=0){let pe=B[re];pe===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(pe=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(pe=V.instanceColor));let xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),O[re]=xe,F++}r.attributes=O,r.attributesNum=F,r.index=P}function E(){let V=r.newAttributes;for(let J=0,ue=V.length;J<ue;J++)V[J]=0}function x(V){_(V,0)}function _(V,J){let ue=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;ue[V]=1,P[V]===0&&(i.enableVertexAttribArray(V),P[V]=1),O[V]!==J&&(i.vertexAttribDivisor(V,J),O[V]=J)}function L(){let V=r.newAttributes,J=r.enabledAttributes;for(let ue=0,P=J.length;ue<P;ue++)J[ue]!==V[ue]&&(i.disableVertexAttribArray(ue),J[ue]=0)}function D(V,J,ue,P,O,B,F){F===!0?i.vertexAttribIPointer(V,J,ue,O,B):i.vertexAttribPointer(V,J,ue,P,O,B)}function w(V,J,ue,P){E();let O=P.attributes,B=ue.getAttributes(),F=J.defaultAttributeValues;for(let W in B){let re=B[W];if(re.location>=0){let me=O[W];if(me===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),me!==void 0){let pe=me.normalized,xe=me.itemSize,We=e.get(me);if(We===void 0)continue;let mt=We.buffer,tt=We.type,le=We.bytesPerElement,Se=tt===i.INT||tt===i.UNSIGNED_INT||me.gpuType===ac;if(me.isInterleavedBufferAttribute){let _e=me.data,Qe=_e.stride,nt=me.offset;if(_e.isInstancedInterleavedBuffer){for(let Je=0;Je<re.locationSize;Je++)_(re.location+Je,_e.meshPerAttribute);V.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Je=0;Je<re.locationSize;Je++)x(re.location+Je);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Je=0;Je<re.locationSize;Je++)D(re.location+Je,xe/re.locationSize,tt,pe,Qe*le,(nt+xe/re.locationSize*Je)*le,Se)}else{if(me.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)_(re.location+_e,me.meshPerAttribute);V.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let _e=0;_e<re.locationSize;_e++)x(re.location+_e);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let _e=0;_e<re.locationSize;_e++)D(re.location+_e,xe/re.locationSize,tt,pe,xe*le,xe/re.locationSize*_e*le,Se)}}else if(F!==void 0){let pe=F[W];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(re.location,pe);break;case 3:i.vertexAttrib3fv(re.location,pe);break;case 4:i.vertexAttrib4fv(re.location,pe);break;default:i.vertexAttrib1fv(re.location,pe)}}}}L()}function A(){I();for(let V in n){let J=n[V];for(let ue in J){let P=J[ue];for(let O in P){let B=P[O];for(let F in B)u(B[F].object),delete B[F];delete P[O]}}delete n[V]}}function C(V){if(n[V.id]===void 0)return;let J=n[V.id];for(let ue in J){let P=J[ue];for(let O in P){let B=P[O];for(let F in B)u(B[F].object),delete B[F];delete P[O]}}delete n[V.id]}function U(V){for(let J in n){let ue=n[J];for(let P in ue){let O=ue[P];if(O[V.id]===void 0)continue;let B=O[V.id];for(let F in B)u(B[F].object),delete B[F];delete O[V.id]}}}function b(V){for(let J in n){let ue=n[J],P=V.isInstancedMesh===!0?V.id:0,O=ue[P];if(O!==void 0){for(let B in O){let F=O[B];for(let W in F)u(F[W].object),delete F[W];delete O[B]}delete ue[P],Object.keys(ue).length===0&&delete n[J]}}}function I(){H(),o=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:b,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:x,disableUnusedAttributes:L}}function zy(i,e,t){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),t.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),t.update(c,n,u))}function a(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==zn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let b=U===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Pn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==kn&&!b)}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=h(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:w,maxSamples:A,samples:C}}function Hy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _i,a=new et,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||s;return s=p,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,g){let y=d.clippingPlanes,E=d.clipIntersection,x=d.clipShadows,_=i.get(d);if(!s||y===null||y.length===0||r&&!x)r?u(null):c();else{let L=r?0:n,D=L*4,w=_.clippingState||null;h.value=w,w=u(y,p,D,g);for(let A=0;A!==D;++A)w[A]=t[A];_.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,g,y){let E=d!==null?d.length:0,x=null;if(E!==0){if(x=h.value,y!==!0||x===null){let _=g+E*4,L=p.matrixWorldInverse;a.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let D=0,w=g;D!==E;++D,w+=4)o.copy(d[D]).applyMatrix4(L,a),o.normal.toArray(x,w),x[w+3]=o.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function Xy(i){let e=[],t=[],n=[],s=i,r=i-ps+1+Qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let h=1/a;o>i-ps?h=Qd[o-i+ps-1]:o===0&&(h=0),t.push(h);let c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,y=6,E=3,x=2,_=1,L=new Float32Array(E*y*g),D=new Float32Array(x*y*g),w=new Float32Array(_*y*g);for(let C=0;C<g;C++){let U=C%3*2/3-1,b=C>2?0:-1,I=[U,b,0,U+2/3,b,0,U+2/3,b+1,0,U,b,0,U+2/3,b+1,0,U,b+1,0];L.set(I,E*y*C),D.set(p,x*y*C);let H=[C,C,C,C,C,C];w.set(H,_*y*C)}let A=new hn;A.setAttribute("position",new jt(L,E)),A.setAttribute("uv",new jt(D,x)),A.setAttribute("faceIndex",new jt(w,_)),n.push(new Qt(A,null)),s>ps&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tp(i,e,t){let n=new Fn(i,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qy(i,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $y(i,e,t){let n=new Float32Array(Gs),s=new $(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function np(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ip(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Yy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,g=!1){return p==null?null:g?o(p):r(p)}function r(p){if(p&&p.isTexture){let g=p.mapping;if(g===sc||g===rc)if(e.has(p)){let y=e.get(p).texture;return a(y,p.mapping)}else{let y=p.image;if(y&&y.height>0){let E=new Zc(y.height);return E.fromEquirectangularTexture(i,p),e.set(p,E),p.addEventListener("dispose",c),a(E.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let g=p.mapping,y=g===sc||g===rc,E=g===us||g===zs;if(y||E){let x=t.get(p),_=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return n===null&&(n=new Jc(i)),x=y?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{let L=p.image;return y&&L&&L.height>0||E&&L&&h(L)?(n===null&&(n=new Jc(i)),x=y?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",u),x.texture):null}}}return p}function a(p,g){return g===sc?p.mapping=us:g===rc&&(p.mapping=zs),p}function h(p){let g=0,y=6;for(let E=0;E<y;E++)p[E]!==void 0&&g++;return g===y}function c(p){let g=p.target;g.removeEventListener("dispose",c);let y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function u(p){let g=p.target;g.removeEventListener("dispose",u);let y=t.get(g);y!==void 0&&(t.delete(g),y.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Jy(i,e,t,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function h(d){let p=d.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER)}function c(d){let p=[],g=d.index,y=d.attributes.position,E=0;if(y===void 0)return;if(g!==null){let L=g.array;E=g.version;for(let D=0,w=L.length;D<w;D+=3){let A=L[D+0],C=L[D+1],U=L[D+2];p.push(A,C,C,U,U,A)}}else{let L=y.array;E=y.version;for(let D=0,w=L.length/3-1;D<w;D+=3){let A=D+0,C=D+1,U=D+2;p.push(A,C,C,U,U,A)}}let x=new(y.count>=65535?so:io)(p,1);x.version=E;let _=r.get(d);_&&e.remove(_),r.set(d,x)}function u(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:h,getWireframeAttribute:u}}function Zy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function h(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let E=0;for(let x=0;x<g;x++)E+=p[x];t.update(E,n,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=u}function jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qy(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,h){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==d){let I=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],L=a.morphAttributes.color||[],D=0;g===!0&&(D=1),y===!0&&(D=2),E===!0&&(D=3);let w=a.attributes.position.count*D,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let C=new Float32Array(w*A*4*d),U=new Qr(C,w,A,d);U.type=kn,U.needsUpdate=!0;let b=D*4;for(let H=0;H<d;H++){let V=x[H],J=_[H],ue=L[H],P=w*A*4*H;for(let O=0;O<V.count;O++){let B=O*b;g===!0&&(s.fromBufferAttribute(V,O),C[P+B+0]=s.x,C[P+B+1]=s.y,C[P+B+2]=s.z,C[P+B+3]=0),y===!0&&(s.fromBufferAttribute(J,O),C[P+B+4]=s.x,C[P+B+5]=s.y,C[P+B+6]=s.z,C[P+B+7]=0),E===!0&&(s.fromBufferAttribute(ue,O),C[P+B+8]=s.x,C[P+B+9]=s.y,C[P+B+10]=s.z,C[P+B+11]=ue.itemSize===4?s.w:1)}}p={count:d,texture:U,size:new lt(w,A)},n.set(a,p),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let E=0;E<c.length;E++)g+=c[E];let y=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function ev(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return p}function a(){r=new WeakMap}function h(c){let u=c.target;u.removeEventListener("dispose",h),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function nv(i,e,t,n,s,r){let o=new Fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Vi(e,t):void 0}),a=new Fn(e,t,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),h=new hn;h.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rn([0,2,0,0,2,0],2));let c=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(h,c),d=new hs(-1,1,1,-1,0,1),p=null,g=null,y=!1,E,x=null,_=[],L=!1;this.setSize=function(D,w){o.setSize(D,w),a.setSize(D,w);for(let A=0;A<_.length;A++){let C=_[A];C.setSize&&C.setSize(D,w)}},this.setEffects=function(D){_=D,L=_.length>0&&_[0].isRenderPass===!0;let w=o.width,A=o.height;for(let C=0;C<_.length;C++){let U=_[C];U.setSize&&U.setSize(w,A)}},this.begin=function(D,w){if(y||D.toneMapping===oi&&_.length===0)return!1;if(x=w,w!==null){let A=w.width,C=w.height;(o.width!==A||o.height!==C)&&this.setSize(A,C)}return L===!1&&D.setRenderTarget(o),E=D.toneMapping,D.toneMapping=oi,!0},this.hasRenderPass=function(){return L},this.end=function(D,w){D.toneMapping=E,y=!0;let A=o,C=a;for(let U=0;U<_.length;U++){let b=_[U];if(b.enabled!==!1&&(b.render(D,C,A,w),b.needsSwap!==!1)){let I=A;A=C,C=I}}if(p!==D.outputColorSpace||g!==D.toneMapping){p=D.outputColorSpace,g=D.toneMapping,c.defines={},ct.getTransfer(p)===Mt&&(c.defines.SRGB_TRANSFER="");let U=tv[g];U&&(c.defines[U]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,D.setRenderTarget(x),D.render(u,d),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),h.dispose(),c.dispose()}}function Dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),nn(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ap.set(n),i.uniformMatrix3fv(this.addr,!1,ap),nn(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),nn(t,n)}}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?$c:qc,r=Zh):r=Mp,t.setTexture2D(e||r,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tp,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wp,s)}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ep,s)}function bv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return Sv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function Ev(i,e){let t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tv(i,e){let t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){let t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){let t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rv(i,e){let t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cv(i,e){let t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Iv(i,e){i.uniform1iv(this.addr,e)}function Pv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Nv(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Ov(i,e){i.uniform2uiv(this.addr,e)}function Uv(i,e){i.uniform3uiv(this.addr,e)}function Fv(i,e){i.uniform4uiv(this.addr,e)}function Bv(i,e,t){let n=this.cache,s=e.length,r=el(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zh:o=Mp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function kv(i,e,t){let n=this.cache,s=e.length,r=el(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tp,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=el(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wp,r[o])}function Vv(i,e,t){let n=this.cache,s=e.length,r=el(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ep,r[o])}function Hv(i){switch(i){case 5126:return Mv;case 35664:return Ev;case 35665:return Tv;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Iv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Nv;case 5125:return Dv;case 36294:return Ov;case 36295:return Uv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Vv}}function lp(i,e){i.seq.push(e),i.map[e.id]=e}function Gv(i,e,t){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),o=Kh.lastIndex,a=r[1],h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===s){lp(t,c===void 0?new jh(a,i,e):new Qh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new eu(a),lp(t,d)),t=d}}}function hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $v(i){ct._getMatrix(up,ct.workingColorSpace,i);let e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+qv(i.getShaderSource(e),a)}else return r}function Yv(i,e){let t=$v(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(i,e){let t=Kv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zv(){ct.getLuminanceCoefficients(Kc);let i=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Qv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Oo(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function tu(i){return i.replace(tS,iS)}function iS(i,e){let t=ot[e];if(t===void 0){let n=nS.get(e);if(n!==void 0)t=ot[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tu(t)}function mp(i){return i.replace(sS,rS)}function rS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aS(i){return oS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function lS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function uS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function dS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fS[i.combine]||"ENVMAP_BLENDING_NONE"}function pS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,h=aS(t),c=lS(t),u=uS(t),d=dS(t),p=pS(t),g=jv(t),y=Qv(r),E=s.createProgram(),x,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Oo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(x=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ot.tonemapping_pars_fragment:"",t.toneMapping!==oi?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=tu(o),o=dp(o,t),o=pp(o,t),a=tu(a),a=dp(a,t),a=pp(a,t),o=mp(o),a=mp(a),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let D=L+x+o,w=L+_+a,A=hp(s,s.VERTEX_SHADER,D),C=hp(s,s.FRAGMENT_SHADER,w);s.attachShader(E,A),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(V){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(E)||"",ue=s.getShaderInfoLog(A)||"",P=s.getShaderInfoLog(C)||"",O=J.trim(),B=ue.trim(),F=P.trim(),W=!0,re=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,A,C);else{let me=fp(s,A,"vertex"),pe=fp(s,C,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+O+`
`+me+`
`+pe)}else O!==""?Ye("WebGLProgram: Program Info Log:",O):(B===""||F==="")&&(re=!1);re&&(V.diagnostics={runnable:W,programLog:O,vertexShader:{log:B,prefix:x},fragmentShader:{log:F,prefix:_}})}s.deleteShader(A),s.deleteShader(C),b=new Nr(s,E),I=eS(s,E)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(E,Wv)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=C,this}function _S(i){return i===ds||i===Io||i===Po}function xS(i,e,t,n,s,r){let o=new eo,a=new nu,h=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return h.add(b),b===0?"uv":`uv${b}`}function E(b,I,H,V,J,ue){let P=V.fog,O=J.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,W=e.get(b.envMap||B,F),re=W&&W.mapping===To?W.image.height:null,me=g[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&Ye("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xe=pe!==void 0?pe.length:0,We=0;O.morphAttributes.position!==void 0&&(We=1),O.morphAttributes.normal!==void 0&&(We=2),O.morphAttributes.color!==void 0&&(We=3);let mt,tt,le,Se;if(me){let Ge=wi[me];mt=Ge.vertexShader,tt=Ge.fragmentShader}else{mt=b.vertexShader,tt=b.fragmentShader;let Ge=a.getVertexShaderStage(b),It=a.getFragmentShaderStage(b);a.update(b,Ge,It),le=Ge.id,Se=It.id}let _e=i.getRenderTarget(),Qe=i.state.buffers.depth.getReversed(),nt=J.isInstancedMesh===!0,Je=J.isBatchedMesh===!0,Ut=!!b.map,at=!!b.matcap,bt=!!W,ut=!!b.aoMap,dt=!!b.lightMap,Lt=!!b.bumpMap&&b.wireframe===!1,yt=!!b.normalMap,Nt=!!b.displacementMap,Yt=!!b.emissiveMap,Dt=!!b.metalnessMap,Ft=!!b.roughnessMap,G=b.anisotropy>0,un=b.clearcoat>0,vt=b.dispersion>0,R=b.iridescence>0,v=b.sheen>0,K=b.transmission>0,te=G&&!!b.anisotropyMap,ie=un&&!!b.clearcoatMap,ve=un&&!!b.clearcoatNormalMap,Ae=un&&!!b.clearcoatRoughnessMap,ae=R&&!!b.iridescenceMap,de=R&&!!b.iridescenceThicknessMap,Re=v&&!!b.sheenColorMap,Fe=v&&!!b.sheenRoughnessMap,be=!!b.specularMap,Ce=!!b.specularColorMap,ke=!!b.specularIntensityMap,qe=K&&!!b.transmissionMap,Ze=K&&!!b.thicknessMap,k=!!b.gradientMap,Te=!!b.alphaMap,fe=b.alphaTest>0,we=!!b.alphaHash,Ne=!!b.extensions,ge=oi;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Xe={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:tt,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Je,batchingColor:Je&&J._colorsTexture!==null,instancing:nt,instancingColor:nt&&J.instanceColor!==null,instancingMorph:nt&&J.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ut,matcap:at,envMap:bt,envMapMode:bt&&W.mapping,envMapCubeUVHeight:re,aoMap:ut,lightMap:dt,bumpMap:Lt,normalMap:yt,displacementMap:Nt,emissiveMap:Yt,normalMapObjectSpace:yt&&b.normalMapType===kd,normalMapTangentSpace:yt&&b.normalMapType===Xc,packedNormalMap:yt&&b.normalMapType===Xc&&_S(b.normalMap.format),metalnessMap:Dt,roughnessMap:Ft,anisotropy:G,anisotropyMap:te,clearcoat:un,clearcoatMap:ie,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ae,dispersion:vt,iridescence:R,iridescenceMap:ae,iridescenceThicknessMap:de,sheen:v,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:Ce,specularIntensityMap:ke,transmission:K,transmissionMap:qe,thicknessMap:Ze,gradientMap:k,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:fe,alphaHash:we,combine:b.combine,mapUv:Ut&&y(b.map.channel),aoMapUv:ut&&y(b.aoMap.channel),lightMapUv:dt&&y(b.lightMap.channel),bumpMapUv:Lt&&y(b.bumpMap.channel),normalMapUv:yt&&y(b.normalMap.channel),displacementMapUv:Nt&&y(b.displacementMap.channel),emissiveMapUv:Yt&&y(b.emissiveMap.channel),metalnessMapUv:Dt&&y(b.metalnessMap.channel),roughnessMapUv:Ft&&y(b.roughnessMap.channel),anisotropyMapUv:te&&y(b.anisotropyMap.channel),clearcoatMapUv:ie&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(b.sheenRoughnessMap.channel),specularMapUv:be&&y(b.specularMap.channel),specularColorMapUv:Ce&&y(b.specularColorMap.channel),specularIntensityMapUv:ke&&y(b.specularIntensityMap.channel),transmissionMapUv:qe&&y(b.transmissionMap.channel),thicknessMapUv:Ze&&y(b.thicknessMap.channel),alphaMapUv:Te&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||G),vertexNormals:!!O.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!O.attributes.uv&&(Ut||Te),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||O.attributes.normal===void 0&&yt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Qe,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:We,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ut&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:Yt&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===Mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function x(b){let I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(let H in b.defines)I.push(H),I.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(_(I,b),L(I,b),I.push(i.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function _(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function L(b,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function D(b){let I=g[b.type],H;if(I){let V=wi[I];H=Zd.clone(V.uniforms)}else H=b.uniforms;return H}function w(b,I){let H=u.get(I);return H!==void 0?++H.usedTimes:(H=new mS(i,I,b,s),c.push(H),u.set(I,H)),H}function A(b){if(--b.usedTimes===0){let I=c.indexOf(b);c[I]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function C(b){a.remove(b)}function U(){a.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:D,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function yS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function a(p,g,y,E,x,_){let L=i[e];return L===void 0?(L={id:p.id,object:p,geometry:g,material:y,materialVariant:o(p),groupOrder:E,renderOrder:p.renderOrder,z:x,group:_},i[e]=L):(L.id=p.id,L.object=p,L.geometry=g,L.material=y,L.materialVariant=o(p),L.groupOrder=E,L.renderOrder=p.renderOrder,L.z=x,L.group=_),e++,L}function h(p,g,y,E,x,_){let L=a(p,g,y,E,x,_);y.transmission>0?n.push(L):y.transparent===!0?s.push(L):t.push(L)}function c(p,g,y,E,x,_){let L=a(p,g,y,E,x,_);y.transmission>0?n.unshift(L):y.transparent===!0?s.unshift(L):t.unshift(L)}function u(p,g,y){t.length>1&&t.sort(p||vS),n.length>1&&n.sort(g||_p),s.length>1&&s.sort(g||_p),y&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let p=e,g=i.length;p<g;p++){let y=i[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:h,unshift:c,finish:d,sort:u}}function SS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xp,i.set(n,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ke};break;case"SpotLight":t={position:new $,direction:new $,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function MS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function TS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wS(i){let e=new bS,t=MS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let s=new $,r=new rt,o=new rt;function a(c){let u=0,d=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,y=0,E=0,x=0,_=0,L=0,D=0,w=0,A=0,C=0,U=0;c.sort(TS);for(let I=0,H=c.length;I<H;I++){let V=c[I],J=V.color,ue=V.intensity,P=V.distance,O=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ds?O=V.shadow.map.texture:O=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=J.r*ue,d+=J.g*ue,p+=J.b*ue;else if(V.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(V.sh.coefficients[B],ue);U++}else if(V.isDirectionalLight){let B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let F=V.shadow,W=t.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.directionalShadow[g]=W,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=V.shadow.matrix,L++}n.directional[g]=B,g++}else if(V.isSpotLight){let B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(J).multiplyScalar(ue),B.distance=P,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,n.spot[E]=B;let F=V.shadow;if(V.map&&(n.spotLightMap[A]=V.map,A++,F.updateMatrices(V),V.castShadow&&C++),n.spotLightMatrix[E]=F.matrix,V.castShadow){let W=t.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.spotShadow[E]=W,n.spotShadowMap[E]=O,w++}E++}else if(V.isRectAreaLight){let B=e.get(V);B.color.copy(J).multiplyScalar(ue),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=B,x++}else if(V.isPointLight){let B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){let F=V.shadow,W=t.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,n.pointShadow[y]=W,n.pointShadowMap[y]=O,n.pointShadowMatrix[y]=V.shadow.matrix,D++}n.point[y]=B,y++}else if(V.isHemisphereLight){let B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ue),B.groundColor.copy(V.groundColor).multiplyScalar(ue),n.hemi[_]=B,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let b=n.hash;(b.directionalLength!==g||b.pointLength!==y||b.spotLength!==E||b.rectAreaLength!==x||b.hemiLength!==_||b.numDirectionalShadows!==L||b.numPointShadows!==D||b.numSpotShadows!==w||b.numSpotMaps!==A||b.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=E,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=w+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,b.directionalLength=g,b.pointLength=y,b.spotLength=E,b.rectAreaLength=x,b.hemiLength=_,b.numDirectionalShadows=L,b.numPointShadows=D,b.numSpotShadows=w,b.numSpotMaps=A,b.numLightProbes=U,n.version=ES++)}function h(c,u){let d=0,p=0,g=0,y=0,E=0,x=u.matrixWorldInverse;for(let _=0,L=c.length;_<L;_++){let D=c[_];if(D.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),d++}else if(D.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(D.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),o.identity(),r.copy(D.matrixWorld),r.premultiply(x),o.extractRotation(r),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(D.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),p++}else if(D.isHemisphereLight){let w=n.hemi[E];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(x),E++}}}return{setup:a,setupView:h,state:n}}function yp(i){let e=new wS(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function o(p){t.push(p)}function a(p){n.push(p)}function h(p){s.push(p)}function c(){e.setup(t)}function u(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:h}}function AS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function LS(i,e,t){let n=new Er,s=new lt,r=new lt,o=new wt,a=new $a,h=new Ya,c={},u=t.maxTextureSize,d={[ri]:Mn,[Mn]:ri,[qn]:qn},p=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let y=new hn;y.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Qt(y,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let _=this.type;this.render=function(C,U,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===md&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Eo);let I=i.getRenderTarget(),H=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Mi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ue=_!==this.type;ue&&U.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=C.length;P<O;P++){let B=C[P],F=B.shadow;if(F===void 0){Ye("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let W=F.getFrameExtents();s.multiply(W),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,F.mapSize.y=r.y));let re=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=re,F.map===null||ue===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ar){if(B.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Fn(s.x,s.y,{format:ds,type:Ei,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new Vi(s.x,s.y,kn),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=yi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt}else B.isPointLight?(F.map=new Zc(s.x),F.map.depthTexture=new Xa(s.x,ci)):(F.map=new Fn(s.x,s.y),F.map.depthTexture=new Vi(s.x,s.y,ci)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=yi,this.type===Eo?(F.map.depthTexture.compareFunction=re?$c:qc,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt);F.camera.updateProjectionMatrix()}let me=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<me;pe++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(F.map),i.clear());let xe=F.getViewport(pe);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),J.viewport(o)}if(B.isPointLight){let xe=F.camera,We=F.matrix,mt=B.distance||xe.far;mt!==xe.far&&(xe.far=mt,xe.updateProjectionMatrix()),Do.setFromMatrixPosition(B.matrixWorld),xe.position.copy(Do),Jh.copy(xe.position),Jh.add(IS[pe]),xe.up.copy(PS[pe]),xe.lookAt(Jh),xe.updateMatrixWorld(),We.makeTranslation(-Do.x,-Do.y,-Do.z),vp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(vp,xe.coordinateSystem,xe.reversedDepth)}else F.updateMatrices(B);n=F.getFrustum(),w(U,b,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Ar&&L(F,b),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(I,H,V)};function L(C,U){let b=e.update(E);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fn(s.x,s.y,{format:ds,type:Ei})),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,b,p,E,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,b,g,E,null)}function D(C,U,b,I){let H=null,V=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)H=V;else if(H=b.isPointLight===!0?h:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let J=H.uuid,ue=U.uuid,P=c[J];P===void 0&&(P={},c[J]=P);let O=P[ue];O===void 0&&(O=H.clone(),P[ue]=O,U.addEventListener("dispose",A)),H=O}if(H.visible=U.visible,H.wireframe=U.wireframe,I===Ar?H.side=U.shadowSide!==null?U.shadowSide:U.side:H.side=U.shadowSide!==null?U.shadowSide:d[U.side],H.alphaMap=U.alphaMap,H.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,H.map=U.map,H.clipShadows=U.clipShadows,H.clippingPlanes=U.clippingPlanes,H.clipIntersection=U.clipIntersection,H.displacementMap=U.displacementMap,H.displacementScale=U.displacementScale,H.displacementBias=U.displacementBias,H.wireframeLinewidth=U.wireframeLinewidth,H.linewidth=U.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let J=i.properties.get(H);J.light=b}return H}function w(C,U,b,I,H){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&H===Ar)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let ue=e.update(C),P=C.material;if(Array.isArray(P)){let O=ue.groups;for(let B=0,F=O.length;B<F;B++){let W=O[B],re=P[W.materialIndex];if(re&&re.visible){let me=D(C,re,I,H);C.onBeforeShadow(i,C,U,b,ue,me,W),i.renderBufferDirect(b,null,ue,me,C,W),C.onAfterShadow(i,C,U,b,ue,me,W)}}}else if(P.visible){let O=D(C,P,I,H);C.onBeforeShadow(i,C,U,b,ue,O,null),i.renderBufferDirect(b,null,ue,O,C,null),C.onAfterShadow(i,C,U,b,ue,O,null)}}let J=C.children;for(let ue=0,P=J.length;ue<P;ue++)w(J[ue],U,b,I,H)}function A(C){C.target.removeEventListener("dispose",A);for(let b in c){let I=c[b],H=C.target.uuid;H in I&&(I[H].dispose(),delete I[H])}}}function NS(i,e){function t(){let k=!1,Te=new wt,fe=null,we=new wt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!k&&(i.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,ge,Xe,Ge,It){It===!0&&(Ne*=Ge,ge*=Ge,Xe*=Ge),Te.set(Ne,ge,Xe,Ge),we.equals(Te)===!1&&(i.clearColor(Ne,ge,Xe,Ge),we.copy(Te))},reset:function(){k=!1,fe=null,we.set(-1,0,0,0)}}}function n(){let k=!1,Te=!1,fe=null,we=null,Ne=null;return{setReversed:function(ge){if(Te!==ge){let Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;let Ge=Ne;Ne=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(ge){ge?_e(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!k&&(i.depthMask(ge),fe=ge)},setFunc:function(ge){if(Te&&(ge=Kd[ge]),we!==ge){switch(ge){case La:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ge}},setLocked:function(ge){k=ge},setClear:function(ge){Ne!==ge&&(Ne=ge,Te&&(ge=1-ge),i.clearDepth(ge))},reset:function(){k=!1,fe=null,we=null,Ne=null,Te=!1}}}function s(){let k=!1,Te=null,fe=null,we=null,Ne=null,ge=null,Xe=null,Ge=null,It=null;return{setTest:function(Et){k||(Et?_e(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(Et){Te!==Et&&!k&&(i.stencilMask(Et),Te=Et)},setFunc:function(Et,xn,Vn){(fe!==Et||we!==xn||Ne!==Vn)&&(i.stencilFunc(Et,xn,Vn),fe=Et,we=xn,Ne=Vn)},setOp:function(Et,xn,Vn){(ge!==Et||Xe!==xn||Ge!==Vn)&&(i.stencilOp(Et,xn,Vn),ge=Et,Xe=xn,Ge=Vn)},setLocked:function(Et){k=Et},setClear:function(Et){It!==Et&&(i.clearStencil(Et),It=Et)},reset:function(){k=!1,Te=null,fe=null,we=null,Ne=null,ge=null,Xe=null,Ge=null,It=null}}}let r=new t,o=new n,a=new s,h=new WeakMap,c=new WeakMap,u={},d={},p={},g=new WeakMap,y=[],E=null,x=!1,_=null,L=null,D=null,w=null,A=null,C=null,U=null,b=new Ke(0,0,0),I=0,H=!1,V=null,J=null,ue=null,P=null,O=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(re)[1]),F=W>=1):re.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),F=W>=2);let me=null,pe={},xe=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),mt=new wt().fromArray(xe),tt=new wt().fromArray(We);function le(k,Te,fe,we){let Ne=new Uint8Array(4),ge=i.createTexture();i.bindTexture(k,ge),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<fe;Xe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Te+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ge}let Se={};Se[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(i.DEPTH_TEST),o.setFunc(Is),Lt(!1),yt(_h),_e(i.CULL_FACE),ut(Mi);function _e(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Qe(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function nt(k,Te){return p[k]!==Te?(i.bindFramebuffer(k,Te),p[k]=Te,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Te),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(k,Te){let fe=y,we=!1;if(k){fe=g.get(Te),fe===void 0&&(fe=[],g.set(Te,fe));let Ne=k.textures;if(fe.length!==Ne.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Xe=Ne.length;ge<Xe;ge++)fe[ge]=i.COLOR_ATTACHMENT0+ge;fe.length=Ne.length,we=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,we=!0);we&&i.drawBuffers(fe)}function Ut(k){return E!==k?(i.useProgram(k),E=k,!0):!1}let at={[ss]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};at[yd]=i.MIN,at[vd]=i.MAX;let bt={[Sd]:i.ZERO,[bd]:i.ONE,[Md]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(k,Te,fe,we,Ne,ge,Xe,Ge,It,Et){if(k===Mi){x===!0&&(Qe(i.BLEND),x=!1);return}if(x===!1&&(_e(i.BLEND),x=!0),k!==gd){if(k!==_||Et!==H){if((L!==ss||A!==ss)&&(i.blendEquation(i.FUNC_ADD),L=ss,A=ss),Et)switch(k){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",k);break}D=null,w=null,C=null,U=null,b.set(0,0,0),I=0,_=k,H=Et}return}Ne=Ne||Te,ge=ge||fe,Xe=Xe||we,(Te!==L||Ne!==A)&&(i.blendEquationSeparate(at[Te],at[Ne]),L=Te,A=Ne),(fe!==D||we!==w||ge!==C||Xe!==U)&&(i.blendFuncSeparate(bt[fe],bt[we],bt[ge],bt[Xe]),D=fe,w=we,C=ge,U=Xe),(Ge.equals(b)===!1||It!==I)&&(i.blendColor(Ge.r,Ge.g,Ge.b,It),b.copy(Ge),I=It),_=k,H=!1}function dt(k,Te){k.side===qn?Qe(i.CULL_FACE):_e(i.CULL_FACE);let fe=k.side===Mn;Te&&(fe=!fe),Lt(fe),k.blending===Cs&&k.transparent===!1?ut(Mi):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let we=k.stencilWrite;a.setTest(we),we&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(k){V!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),V=k)}function yt(k){k!==dd?(_e(i.CULL_FACE),k!==J&&(k===_h?i.cullFace(i.BACK):k===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),J=k}function Nt(k){k!==ue&&(F&&i.lineWidth(k),ue=k)}function Yt(k,Te,fe){k?(_e(i.POLYGON_OFFSET_FILL),(P!==Te||O!==fe)&&(P=Te,O=fe,o.getReversed()&&(Te=-Te),i.polygonOffset(Te,fe))):Qe(i.POLYGON_OFFSET_FILL)}function Dt(k){k?_e(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function Ft(k){k===void 0&&(k=i.TEXTURE0+B-1),me!==k&&(i.activeTexture(k),me=k)}function G(k,Te,fe){fe===void 0&&(me===null?fe=i.TEXTURE0+B-1:fe=me);let we=pe[fe];we===void 0&&(we={type:void 0,texture:void 0},pe[fe]=we),(we.type!==k||we.texture!==Te)&&(me!==fe&&(i.activeTexture(fe),me=fe),i.bindTexture(k,Te||Se[k]),we.type=k,we.texture=Te)}function un(){let k=pe[me];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function v(){try{i.texSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function K(){try{i.texSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function ve(){try{i.texStorage2D(...arguments)}catch(k){je("WebGLState:",k)}}function Ae(){try{i.texStorage3D(...arguments)}catch(k){je("WebGLState:",k)}}function ae(){try{i.texImage2D(...arguments)}catch(k){je("WebGLState:",k)}}function de(){try{i.texImage3D(...arguments)}catch(k){je("WebGLState:",k)}}function Re(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Fe(k,Te){d[k]!==Te&&(i.pixelStorei(k,Te),d[k]=Te)}function be(k){mt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function Ce(k){tt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),tt.copy(k))}function ke(k,Te){let fe=c.get(Te);fe===void 0&&(fe=new WeakMap,c.set(Te,fe));let we=fe.get(k);we===void 0&&(we=i.getUniformBlockIndex(Te,k.name),fe.set(k,we))}function qe(k,Te){let we=c.get(Te).get(k);h.get(Te)!==we&&(i.uniformBlockBinding(Te,we,k.__bindingPointIndex),h.set(Te,we))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},me=null,pe={},p={},g=new WeakMap,y=[],E=null,x=!1,_=null,L=null,D=null,w=null,A=null,C=null,U=null,b=new Ke(0,0,0),I=0,H=!1,V=null,J=null,ue=null,P=null,O=null,mt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:Qe,bindFramebuffer:nt,drawBuffers:Je,useProgram:Ut,setBlending:ut,setMaterial:dt,setFlipSided:Lt,setCullFace:yt,setLineWidth:Nt,setPolygonOffset:Yt,setScissorTest:Dt,activeTexture:Ft,bindTexture:G,unbindTexture:un,compressedTexImage2D:vt,compressedTexImage3D:R,texImage2D:ae,texImage3D:de,pixelStorei:Fe,getParameter:Re,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:ve,texStorage3D:Ae,texSubImage2D:v,texSubImage3D:K,compressedTexSubImage2D:te,compressedTexSubImage3D:ie,scissor:be,viewport:Ce,reset:Ze}}function DS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap,d=new Set,p,g=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,v){return y?new OffscreenCanvas(R,v):gr("canvas")}function x(R,v,K){let te=1,ie=vt(R);if((ie.width>K||ie.height>K)&&(te=K/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ve=Math.floor(te*ie.width),Ae=Math.floor(te*ie.height);p===void 0&&(p=E(ve,Ae));let ae=v?E(ve,Ae):p;return ae.width=ve,ae.height=Ae,ae.getContext("2d").drawImage(R,0,0,ve,Ae),Ye("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ve+"x"+Ae+")."),ae}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function _(R){return R.generateMipmaps}function L(R){i.generateMipmap(R)}function D(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,v,K,te,ie,ve=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ae;te&&(Ae=e.get("EXT_texture_norm16"),Ae||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=v;if(v===i.RED&&(K===i.FLOAT&&(ae=i.R32F),K===i.HALF_FLOAT&&(ae=i.R16F),K===i.UNSIGNED_BYTE&&(ae=i.R8),K===i.UNSIGNED_SHORT&&Ae&&(ae=Ae.R16_EXT),K===i.SHORT&&Ae&&(ae=Ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.R8UI),K===i.UNSIGNED_SHORT&&(ae=i.R16UI),K===i.UNSIGNED_INT&&(ae=i.R32UI),K===i.BYTE&&(ae=i.R8I),K===i.SHORT&&(ae=i.R16I),K===i.INT&&(ae=i.R32I)),v===i.RG&&(K===i.FLOAT&&(ae=i.RG32F),K===i.HALF_FLOAT&&(ae=i.RG16F),K===i.UNSIGNED_BYTE&&(ae=i.RG8),K===i.UNSIGNED_SHORT&&Ae&&(ae=Ae.RG16_EXT),K===i.SHORT&&Ae&&(ae=Ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RG8UI),K===i.UNSIGNED_SHORT&&(ae=i.RG16UI),K===i.UNSIGNED_INT&&(ae=i.RG32UI),K===i.BYTE&&(ae=i.RG8I),K===i.SHORT&&(ae=i.RG16I),K===i.INT&&(ae=i.RG32I)),v===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),K===i.UNSIGNED_INT&&(ae=i.RGB32UI),K===i.BYTE&&(ae=i.RGB8I),K===i.SHORT&&(ae=i.RGB16I),K===i.INT&&(ae=i.RGB32I)),v===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),K===i.UNSIGNED_INT&&(ae=i.RGBA32UI),K===i.BYTE&&(ae=i.RGBA8I),K===i.SHORT&&(ae=i.RGBA16I),K===i.INT&&(ae=i.RGBA32I)),v===i.RGB&&(K===i.UNSIGNED_SHORT&&Ae&&(ae=Ae.RGB16_EXT),K===i.SHORT&&Ae&&(ae=Ae.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),v===i.RGBA){let de=ve?Zr:ct.getTransfer(ie);K===i.FLOAT&&(ae=i.RGBA32F),K===i.HALF_FLOAT&&(ae=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ae=de===Mt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Ae&&(ae=Ae.RGBA16_EXT),K===i.SHORT&&Ae&&(ae=Ae.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(R,v){let K;return R?v===null||v===ci||v===Ir?K=i.DEPTH24_STENCIL8:v===kn?K=i.DEPTH32F_STENCIL8:v===Cr&&(K=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===Ir?K=i.DEPTH_COMPONENT24:v===kn?K=i.DEPTH_COMPONENT32F:v===Cr&&(K=i.DEPTH_COMPONENT16),K}function C(R,v){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function U(R){let v=R.target;v.removeEventListener("dispose",U),I(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function b(R){let v=R.target;v.removeEventListener("dispose",b),V(v)}function I(R){let v=n.get(R);if(v.__webglInit===void 0)return;let K=R.source,te=g.get(K);if(te){let ie=te[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&H(R),Object.keys(te).length===0&&g.delete(K)}n.remove(R)}function H(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let K=R.source,te=g.get(K);delete te[v.__cacheKey],o.memory.textures--}function V(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let ie=0;ie<v.__webglFramebuffer[te].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[te][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)i.deleteFramebuffer(v.__webglFramebuffer[te]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let K=R.textures;for(let te=0,ie=K.length;te<ie;te++){let ve=n.get(K[te]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(K[te])}n.remove(R)}let J=0;function ue(){J=0}function P(){return J}function O(R){J=R}function B(){let R=J;return R>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),J+=1,R}function F(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function W(R,v){let K=n.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){let te=R.image;if(te===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(K,R,v);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+v)}function re(R,v){let K=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Qe(K,R,v);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+v)}function me(R,v){let K=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Qe(K,R,v);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+v)}function pe(R,v){let K=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){nt(K,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+v)}let xe={[rs]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},We={[Wt]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},mt={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Vd]:i.LESS,[qc]:i.LEQUAL,[Hd]:i.EQUAL,[$c]:i.GEQUAL,[Gd]:i.GREATER,[Wd]:i.NOTEQUAL};function tt(R,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xt||v.magFilter===Rr||v.magFilter===Vs||v.magFilter===ai||v.minFilter===Xt||v.minFilter===Rr||v.minFilter===Vs||v.minFilter===ai)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,xe[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,xe[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,xe[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,We[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wt||v.minFilter!==Vs&&v.minFilter!==ai||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function le(R,v){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",U));let te=v.source,ie=g.get(te);ie===void 0&&(ie={},g.set(te,ie));let ve=F(v);if(ve!==R.__cacheKey){ie[ve]===void 0&&(ie[ve]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ie[ve].usedTimes++;let Ae=ie[R.__cacheKey];Ae!==void 0&&(ie[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&H(v)),R.__cacheKey=ve,R.__webglTexture=ie[ve].texture}return K}function Se(R,v,K){return Math.floor(Math.floor(R/K)/v)}function _e(R,v,K,te){let ve=R.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,K,te,v.data);else{ve.sort((Fe,be)=>Fe.start-be.start);let Ae=0;for(let Fe=1;Fe<ve.length;Fe++){let be=ve[Ae],Ce=ve[Fe],ke=be.start+be.count,qe=Se(Ce.start,v.width,4),Ze=Se(be.start,v.width,4);Ce.start<=ke+1&&qe===Ze&&Se(Ce.start+Ce.count-1,v.width,4)===qe?be.count=Math.max(be.count,Ce.start+Ce.count-be.start):(++Ae,ve[Ae]=Ce)}ve.length=Ae+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Fe=0,be=ve.length;Fe<be;Fe++){let Ce=ve[Fe],ke=Math.floor(Ce.start/4),qe=Math.ceil(Ce.count/4),Ze=ke%v.width,k=Math.floor(ke/v.width),Te=qe,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ze,k,Te,fe,K,te,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Qe(R,v,K){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);let ie=le(R,v),ve=v.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+K);let Ae=n.get(ve);if(ve.version!==Ae.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let fe=ct.getPrimaries(ct.workingColorSpace),we=v.colorSpace===$i?null:ct.getPrimaries(v.colorSpace),Ne=v.colorSpace===$i||fe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let de=x(v.image,!1,s.maxTextureSize);de=un(v,de);let Re=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),be=w(v.internalFormat,Re,Fe,v.normalized,v.colorSpace,v.isVideoTexture);tt(te,v);let Ce,ke=v.mipmaps,qe=v.isVideoTexture!==!0,Ze=Ae.__version===void 0||ie===!0,k=ve.dataReady,Te=C(v,de);if(v.isDepthTexture)be=A(v.format===fs,v.type),Ze&&(qe?t.texStorage2D(i.TEXTURE_2D,1,be,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,be,de.width,de.height,0,Re,Fe,null));else if(v.isDataTexture)if(ke.length>0){qe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Te,be,ke[0].width,ke[0].height);for(let fe=0,we=ke.length;fe<we;fe++)Ce=ke[fe],qe?k&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,Re,Fe,Ce.data):t.texImage2D(i.TEXTURE_2D,fe,be,Ce.width,Ce.height,0,Re,Fe,Ce.data);v.generateMipmaps=!1}else qe?(Ze&&t.texStorage2D(i.TEXTURE_2D,Te,be,de.width,de.height),k&&_e(v,de,Re,Fe)):t.texImage2D(i.TEXTURE_2D,0,be,de.width,de.height,0,Re,Fe,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,be,ke[0].width,ke[0].height,de.depth);for(let fe=0,we=ke.length;fe<we;fe++)if(Ce=ke[fe],v.format!==zn)if(Re!==null)if(qe){if(k)if(v.layerUpdates.size>0){let Ne=Gh(Ce.width,Ce.height,v.format,v.type);for(let ge of v.layerUpdates){let Xe=Ce.data.subarray(ge*Ne/Ce.data.BYTES_PER_ELEMENT,(ge+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,ge,Ce.width,Ce.height,1,Re,Xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ce.width,Ce.height,de.depth,Re,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,be,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ce.width,Ce.height,de.depth,Re,Fe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,be,Ce.width,Ce.height,de.depth,0,Re,Fe,Ce.data)}else{qe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Te,be,ke[0].width,ke[0].height);for(let fe=0,we=ke.length;fe<we;fe++)Ce=ke[fe],v.format!==zn?Re!==null?qe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,be,Ce.width,Ce.height,0,Ce.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?k&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,Re,Fe,Ce.data):t.texImage2D(i.TEXTURE_2D,fe,be,Ce.width,Ce.height,0,Re,Fe,Ce.data)}else if(v.isDataArrayTexture)if(qe){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,be,de.width,de.height,de.depth),k)if(v.layerUpdates.size>0){let fe=Gh(de.width,de.height,v.format,v.type);for(let we of v.layerUpdates){let Ne=de.data.subarray(we*fe/de.data.BYTES_PER_ELEMENT,(we+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Re,Fe,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Fe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,de.width,de.height,de.depth,0,Re,Fe,de.data);else if(v.isData3DTexture)qe?(Ze&&t.texStorage3D(i.TEXTURE_3D,Te,be,de.width,de.height,de.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Fe,de.data)):t.texImage3D(i.TEXTURE_3D,0,be,de.width,de.height,de.depth,0,Re,Fe,de.data);else if(v.isFramebufferTexture){if(Ze)if(qe)t.texStorage2D(i.TEXTURE_2D,Te,be,de.width,de.height);else{let fe=de.width,we=de.height;for(let Ne=0;Ne<Te;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,be,fe,we,0,Re,Fe,null),fe>>=1,we>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),de.parentNode!==fe){fe.appendChild(de),d.add(v),fe.onpaint=we=>{let Ne=we.changedElements;for(let ge of d)Ne.includes(ge.image)&&(ge.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Ne=i.RGBA,ge=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,ge,Xe,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&Ze){let fe=vt(ke[0]);t.texStorage2D(i.TEXTURE_2D,Te,be,fe.width,fe.height)}for(let fe=0,we=ke.length;fe<we;fe++)Ce=ke[fe],qe?k&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Re,Fe,Ce):t.texImage2D(i.TEXTURE_2D,fe,be,Re,Fe,Ce);v.generateMipmaps=!1}else if(qe){if(Ze){let fe=vt(de);t.texStorage2D(i.TEXTURE_2D,Te,be,fe.width,fe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Fe,de)}else t.texImage2D(i.TEXTURE_2D,0,be,Re,Fe,de);_(v)&&L(te),Ae.__version=ve.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function nt(R,v,K){if(v.image.length!==6)return;let te=le(R,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let ve=n.get(ie);if(ie.version!==ve.__version||te===!0){t.activeTexture(i.TEXTURE0+K);let Ae=ct.getPrimaries(ct.workingColorSpace),ae=v.colorSpace===$i?null:ct.getPrimaries(v.colorSpace),de=v.colorSpace===$i||Ae===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ge=0;ge<6;ge++)!Re&&!Fe?be[ge]=x(v.image[ge],!0,s.maxCubemapSize):be[ge]=Fe?v.image[ge].image:v.image[ge],be[ge]=un(v,be[ge]);let Ce=be[0],ke=r.convert(v.format,v.colorSpace),qe=r.convert(v.type),Ze=w(v.internalFormat,ke,qe,v.normalized,v.colorSpace),k=v.isVideoTexture!==!0,Te=ve.__version===void 0||te===!0,fe=ie.dataReady,we=C(v,Ce);tt(i.TEXTURE_CUBE_MAP,v);let Ne;if(Re){k&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,Ce.width,Ce.height);for(let ge=0;ge<6;ge++){Ne=be[ge].mipmaps;for(let Xe=0;Xe<Ne.length;Xe++){let Ge=Ne[Xe];v.format!==zn?ke!==null?k?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Ge.width,Ge.height,ke,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,Ze,Ge.width,Ge.height,0,Ge.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Ge.width,Ge.height,ke,qe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,Ze,Ge.width,Ge.height,0,ke,qe,Ge.data)}}}else{if(Ne=v.mipmaps,k&&Te){Ne.length>0&&we++;let ge=vt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Fe){k?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,be[ge].width,be[ge].height,ke,qe,be[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ze,be[ge].width,be[ge].height,0,ke,qe,be[ge].data);for(let Xe=0;Xe<Ne.length;Xe++){let It=Ne[Xe].image[ge].image;k?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,It.width,It.height,ke,qe,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,Ze,It.width,It.height,0,ke,qe,It.data)}}else{k?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ke,qe,be[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ze,ke,qe,be[ge]);for(let Xe=0;Xe<Ne.length;Xe++){let Ge=Ne[Xe];k?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,ke,qe,Ge.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,Ze,ke,qe,Ge.image[ge])}}}_(v)&&L(i.TEXTURE_CUBE_MAP),ve.__version=ie.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Je(R,v,K,te,ie,ve){let Ae=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),de=w(K.internalFormat,Ae,ae,K.normalized,K.colorSpace),Re=n.get(v),Fe=n.get(K);if(Fe.__renderTarget=v,!Re.__hasExternalTextures){let be=Math.max(1,v.width>>ve),Ce=Math.max(1,v.height>>ve);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ve,de,be,Ce,v.depth,0,Ae,ae,null):t.texImage2D(ie,ve,de,be,Ce,0,Ae,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ie,Fe.__webglTexture,0,Dt(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ie,Fe.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,v,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let te=v.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ve=A(v.stencilBuffer,ie),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(v),ve,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(v),ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{let te=v.textures;for(let ie=0;ie<te.length;ie++){let ve=te[ie],Ae=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),de=w(ve.internalFormat,Ae,ae,ve.normalized,ve.colorSpace);Ft(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(v),de,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(v),de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,v,K){let te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(v.depthTexture);if(ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v.depthTexture);let Re=r.convert(v.depthTexture.format),Fe=r.convert(v.depthTexture.type),be;v.depthTexture.format===yi?be=i.DEPTH_COMPONENT24:v.depthTexture.format===fs&&(be=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,be,v.width,v.height,0,Re,Fe,null)}}else W(v.depthTexture,0);let ve=ie.__webglTexture,Ae=Dt(v),ae=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,de=v.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===yi)Ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,ve,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,ve,0);else if(v.depthTexture.format===fs)Ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,ve,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(R){let v=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let te=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){let ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=te}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(K)for(let te=0;te<6;te++)at(v.__webglFramebuffer[te],R,te);else{let te=R.texture.mipmaps;te&&te.length>0?at(v.__webglFramebuffer[0],R,0):at(v.__webglFramebuffer,R,0)}else if(K){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),Ut(v.__webglDepthbuffer[te],R,!1);else{let ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ve)}}else{let te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ut(v.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,v,K){let te=n.get(R);v!==void 0&&Je(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&bt(R)}function dt(R){let v=R.texture,K=n.get(R),te=n.get(v);R.addEventListener("dispose",b);let ie=R.textures,ve=R.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,o.memory.textures++),ve){K.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer[ae]=[];for(let de=0;de<v.mipmaps.length;de++)K.__webglFramebuffer[ae][de]=i.createFramebuffer()}else K.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)K.__webglFramebuffer[ae]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ae=0,de=ie.length;ae<de;ae++){let Re=n.get(ie[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ft(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){let de=ie[ae];K.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ae]);let Re=r.convert(de.format,de.colorSpace),Fe=r.convert(de.type),be=w(de.internalFormat,Re,Fe,de.normalized,de.colorSpace,R.isXRRenderTarget===!0),Ce=Dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,be,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,K.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Je(K.__webglFramebuffer[ae][de],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else Je(K.__webglFramebuffer[ae],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(v)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,de=ie.length;ae<de;ae++){let Re=ie[ae],Fe=n.get(Re),be=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Fe.__webglTexture),tt(be,Re),Je(K.__webglFramebuffer,R,Re,i.COLOR_ATTACHMENT0+ae,be,0),_(Re)&&L(be)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),tt(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Je(K.__webglFramebuffer[de],R,v,i.COLOR_ATTACHMENT0,ae,de);else Je(K.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ae,0);_(v)&&L(ae),t.unbindTexture()}R.depthBuffer&&bt(R)}function Lt(R){let v=R.textures;for(let K=0,te=v.length;K<te;K++){let ie=v[K];if(_(ie)){let ve=D(R),Ae=n.get(ie).__webglTexture;t.bindTexture(ve,Ae),L(ve),t.unbindTexture()}}}let yt=[],Nt=[];function Yt(R){if(R.samples>0){if(Ft(R)===!1){let v=R.textures,K=R.width,te=R.height,ie=i.COLOR_BUFFER_BIT,ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),ae=v.length>1;if(ae)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let de=R.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);let Fe=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,K,te,0,0,K,te,ie,i.NEAREST),h===!0&&(yt.length=0,Nt.length=0,yt.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(ve),Nt.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);let Fe=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Dt(R){return Math.min(s.maxSamples,R.samples)}function Ft(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function un(R,v){let K=R.colorSpace,te=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==bn&&K!==$i&&(ct.getTransfer(K)===Mt?(te!==zn||ie!==Pn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",K)),v}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=re,this.setTexture3D=me,this.setTextureCube=pe,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OS(i,e){function t(n,s=$i){let r,o=ct.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===zn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===Ro||n===Co)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===_c||n===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===vc||n===Sc||n===bc||n===Mc||n===Io||n===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===vc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Oc||n===Uc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===zc||n===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Gc||n===Po||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function kS(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,zh(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,L,D,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),d(x,_)):_.isMeshPhongMaterial?(r(x,_),u(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),p(x,_),_.isMeshPhysicalMaterial&&g(x,_,w)):_.isMeshMatcapMaterial?(r(x,_),y(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),E(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?h(x,_,L,D):_.isSpriteMaterial?c(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Mn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Mn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let L=e.get(_),D=L.envMap,w=L.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ap),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,L,D){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=D*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function u(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function d(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Mn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){let L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,A){let C=A.program;n.uniformBlockBinding(w,C)}function c(w,A){let C=s[w.id];C===void 0&&(x(w),C=u(w),s[w.id]=C,w.addEventListener("dispose",L));let U=A.program;n.updateUBOMapping(w,U);let b=e.render.frame;r[w.id]!==b&&(p(w),r[w.id]=b)}function u(w){let A=d();w.__bindingPointIndex=A;let C=i.createBuffer(),U=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,C),C}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let A=s[w.id],C=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,I=C.length;b<I;b++){let H=C[b];if(Array.isArray(H))for(let V=0,J=H.length;V<J;V++)g(H[V],b,V,U);else g(H,b,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,A,C,U){if(E(w,A,C,U)===!0){let b=w.__offset,I=w.value;if(Array.isArray(I)){let H=0;for(let V=0;V<I.length;V++){let J=I[V],ue=_(J);y(J,w.__data,H),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(H+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(I,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,w.__data)}}function y(w,A,C){typeof w=="number"||typeof w=="boolean"?A[0]=w:w.isMatrix3?(A[0]=w.elements[0],A[1]=w.elements[1],A[2]=w.elements[2],A[3]=0,A[4]=w.elements[3],A[5]=w.elements[4],A[6]=w.elements[5],A[7]=0,A[8]=w.elements[6],A[9]=w.elements[7],A[10]=w.elements[8],A[11]=0):ArrayBuffer.isView(w)?A.set(new w.constructor(w.buffer,w.byteOffset,A.length)):w.toArray(A,C)}function E(w,A,C,U){let b=w.value,I=A+"_"+C;if(U[I]===void 0)return typeof b=="number"||typeof b=="boolean"?U[I]=b:ArrayBuffer.isView(b)?U[I]=b.slice():U[I]=b.clone(),!0;{let H=U[I];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return U[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function x(w){let A=w.uniforms,C=0,U=16;for(let I=0,H=A.length;I<H;I++){let V=Array.isArray(A[I])?A[I]:[A[I]];for(let J=0,ue=V.length;J<ue;J++){let P=V[J],O=Array.isArray(P.value)?P.value:[P.value];for(let B=0,F=O.length;B<F;B++){let W=O[B],re=_(W),me=C%U,pe=me%re.boundary,xe=me+pe;C+=pe,xe!==0&&U-xe<re.storage&&(C+=U-xe),P.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=C,C+=re.storage}}}let b=C%U;return b>0&&(C+=U-b),w.__size=C,w.__cache={},this}function _(w){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(A.boundary=16,A.storage=w.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",w),A}function L(w){let A=w.target;A.removeEventListener("dispose",L);let C=o.indexOf(A.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function D(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:h,update:c,dispose:D}}function HS(){return Ti===null&&(Ti=new Mr(VS,16,16,ds,Ei),Ti.name="DFG_LUT",Ti.minFilter=Xt,Ti.magFilter=Xt,Ti.wrapS=Xn,Ti.wrapT=Xn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var i_,s_,r_,o_,a_,c_,l_,h_,u_,f_,d_,p_,m_,g_,__,x_,y_,v_,S_,b_,M_,E_,T_,w_,A_,R_,C_,I_,P_,L_,N_,D_,O_,U_,F_,B_,k_,z_,V_,H_,G_,W_,X_,q_,$_,Y_,K_,J_,Z_,j_,Q_,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,ux,fx,dx,px,mx,gx,_x,xx,yx,vx,Sx,bx,Mx,Ex,Tx,wx,Ax,Rx,Cx,Ix,Px,Lx,Nx,Dx,Ox,Ux,Fx,Bx,kx,zx,Vx,Hx,Gx,Wx,Xx,qx,$x,Yx,Kx,Jx,Zx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,cy,ly,hy,uy,fy,dy,py,my,gy,_y,xy,yy,vy,Sy,by,My,Ey,Ty,wy,Ay,Ry,Cy,Iy,Py,Ly,Ny,Dy,Oy,Uy,ot,Oe,wi,Yc,Fy,bp,ps,Qd,Gs,Gy,No,ep,Xh,qh,$h,Yh,Wy,Jc,Zc,tv,Mp,Zh,Ep,Tp,wp,sp,rp,op,ap,cp,jh,Qh,eu,Kh,Nr,Wv,Xv,up,Kv,Kc,tS,nS,sS,oS,cS,hS,fS,gS,nu,iu,ES,RS,CS,IS,PS,vp,Do,Jh,US,FS,su,ru,BS,Ap,VS,Ti,jc,tl=Gn(()=>{Wh();Wh();i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
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
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
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
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
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
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g_=`#ifdef USE_IRIDESCENCE
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
#endif`,__=`#ifdef USE_BUMPMAP
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w_=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,A_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R_=`vec3 transformedNormal = objectNormal;
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
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
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
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
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
#endif`,tx=`uniform sampler2D dfgLUT;
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
}`,nx=`
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
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
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
#endif`,Hx=`float getShadowMask() {
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
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,hy=`#if DEPTH_PACKING == 3200
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
}`,uy=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
void main() {
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,yy=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,by=`#define MATCAP
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
}`,My=`#define NORMAL
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
}`,Ey=`#define NORMAL
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
}`,Ty=`#define PHONG
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
}`,wy=`#define PHONG
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define STANDARD
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
}`,Cy=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Oy=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:i_,alphahash_pars_fragment:s_,alphamap_fragment:r_,alphamap_pars_fragment:o_,alphatest_fragment:a_,alphatest_pars_fragment:c_,aomap_fragment:l_,aomap_pars_fragment:h_,batching_pars_vertex:u_,batching_vertex:f_,begin_vertex:d_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:g_,bumpmap_pars_fragment:__,clipping_planes_fragment:x_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:v_,clipping_planes_vertex:S_,color_fragment:b_,color_pars_fragment:M_,color_pars_vertex:E_,color_vertex:T_,common:w_,cube_uv_reflection_fragment:A_,defaultnormal_vertex:R_,displacementmap_pars_vertex:C_,displacementmap_vertex:I_,emissivemap_fragment:P_,emissivemap_pars_fragment:L_,colorspace_fragment:N_,colorspace_pars_fragment:D_,envmap_fragment:O_,envmap_common_pars_fragment:U_,envmap_pars_fragment:F_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:K_,envmap_vertex:k_,fog_vertex:z_,fog_pars_vertex:V_,fog_fragment:H_,fog_pars_fragment:G_,gradientmap_pars_fragment:W_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:$_,lights_pars_begin:Y_,lights_toon_fragment:J_,lights_toon_pars_fragment:Z_,lights_phong_fragment:j_,lights_phong_pars_fragment:Q_,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:sx,lightprobes_pars_fragment:rx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:lx,map_fragment:hx,map_pars_fragment:ux,map_particle_fragment:fx,map_particle_pars_fragment:dx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:_x,morphnormal_vertex:xx,morphtarget_pars_vertex:yx,morphtarget_vertex:vx,normal_fragment_begin:Sx,normal_fragment_maps:bx,normal_pars_fragment:Mx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Ix,opaque_fragment:Px,packing:Lx,premultiplied_alpha_fragment:Nx,project_vertex:Dx,dithering_fragment:Ox,dithering_pars_fragment:Ux,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:zx,shadowmap_vertex:Vx,shadowmask_pars_fragment:Hx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:qx,specularmap_fragment:$x,specularmap_pars_fragment:Yx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Jx,transmission_fragment:Zx,transmission_pars_fragment:jx,uv_pars_fragment:Qx,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:sy,backgroundCube_vert:ry,backgroundCube_frag:oy,cube_vert:ay,cube_frag:cy,depth_vert:ly,depth_frag:hy,distance_vert:uy,distance_frag:fy,equirect_vert:dy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:xy,meshlambert_vert:yy,meshlambert_frag:vy,meshmatcap_vert:Sy,meshmatcap_frag:by,meshnormal_vert:My,meshnormal_frag:Ey,meshphong_vert:Ty,meshphong_frag:wy,meshphysical_vert:Ay,meshphysical_frag:Ry,meshtoon_vert:Cy,meshtoon_frag:Iy,points_vert:Py,points_frag:Ly,shadow_vert:Ny,shadow_frag:Dy,sprite_vert:Oy,sprite_frag:Uy},Oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},wi={basic:{uniforms:mn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:mn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:mn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:mn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:mn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:mn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:mn([Oe.points,Oe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:mn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:mn([Oe.common,Oe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:mn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:mn([Oe.sprite,Oe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:mn([Oe.common,Oe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:mn([Oe.lights,Oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};wi.physical={uniforms:mn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};Yc={r:0,b:0,g:0},Fy=new rt,bp=new et;bp.set(-1,0,0,0,1,0,0,0,1);ps=4,Qd=[.125,.215,.35,.446,.526,.582],Gs=20,Gy=256,No=new hs,ep=new Ke,Xh=null,qh=0,$h=0,Yh=!1,Wy=new $,Jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Wy}=r;Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,a),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,qh,$h),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Ei,format:zn,colorSpace:bn,depthBuffer:!1},s=tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xy(r)),this._blurMaterial=$y(r,e,t),this._ggxMaterial=qy(r,e,t)}return s}_compileMaterial(e){let t=new Qt(new hn,e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,s,r){let h=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(ep),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new cs,new Rn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,x=E.material,_=!1,L=e.background;L?L.isColor&&(x.color.copy(L),e.background=null,_=!0):(x.color.copy(ep),_=!0);for(let D=0;D<6;D++){let w=D%3;w===0?(h.up.set(0,c[D],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[D],r.y,r.z)):w===1?(h.up.set(0,0,c[D]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[D],r.z)):(h.up.set(0,c[D],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[D]));let A=this._cubeSize;Lr(s,w*A,D>2?A:0,A,A),d.setRenderTarget(s),_&&d.render(E,h),d.render(e,h)}d.toneMapping=g,d.autoClear=p,e.background=L}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===us||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let h=this._cubeSize;Lr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let h=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),p=0+c*1.25,g=d*p,{_lodMax:y}=this,E=this._sizeLods[n],x=3*E*(n>y-ps?n-y+ps:0),_=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=g,h.mipInt.value=y-t,Lr(r,x,_,3*E,2*E),s.setRenderTarget(r),s.render(a,No),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=y-n,Lr(e,x,_,3*E,2*E),s.setRenderTarget(e),s.render(a,No)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let p=c.uniforms,g=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Gs-1),E=r/y,x=isFinite(r)?1+Math.floor(u*E):Gs;x>Gs&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gs}`);let _=[],L=0;for(let U=0;U<Gs;++U){let b=U/E,I=Math.exp(-b*b/2);_.push(I),U===0?L+=I:U<x&&(L+=2*I)}for(let U=0;U<_.length;U++)_[U]=_[U]/L;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=_,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:D}=this;p.dTheta.value=y,p.mipInt.value=D-n;let w=this._sizeLods[s],A=3*w*(s>D-ps?s-D+ps:0),C=4*(this._cubeSize-w);Lr(t,A,C,3*w,2*w),h.setRenderTarget(t),h.render(d,No)}};Zc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Mi});r.uniforms.tEquirect.value=t;let o=new Qt(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=Xt),new nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};tv={[bh]:"LINEAR_TONE_MAPPING",[Mh]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};Mp=new on,Zh=new Vi(1,1),Ep=new Qr,Tp=new Ha,wp=new ho,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),cp=new Float32Array(4);jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}},Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),h=e.getUniformLocation(t,a.name);Gv(a,h,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Wv=37297,Xv=0;up=new et;Kv={[bh]:"Linear",[Mh]:"Reinhard",[Eh]:"Cineon",[Th]:"ACESFilmic",[Ah]:"AgX",[Rh]:"Neutral",[wh]:"Custom"};Kc=new $;tS=/^[ \t]*#include +<([\w\d./]+)>/gm;nS=new Map;sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;oS={[Eo]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};cS={[us]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};hS={[zs]:"ENVMAP_MODE_REFRACTION"};fS={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Od]:"ENVMAP_BLENDING_ADD"};gS=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}};ES=0;RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,IS=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],PS=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],vp=new rt,Do=new $,Jh=new $;US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:US,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ru=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",h=1,c=null,u=null,d=null,p=null,g=null,y=null,E=typeof XRWebGLBinding<"u",x=new su,_={},L=t.getContextAttributes(),D=null,w=null,A=[],C=[],U=new lt,b=null,I=new Zt;I.viewport=new wt;let H=new Zt;H.viewport=new wt;let V=[I,H],J=new ic,ue=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Se=A[le];return Se===void 0&&(Se=new yr,A[le]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(le){let Se=A[le];return Se===void 0&&(Se=new yr,A[le]=Se),Se.getGripSpace()},this.getHand=function(le){let Se=A[le];return Se===void 0&&(Se=new yr,A[le]=Se),Se.getHandSpace()};function O(le){let Se=C.indexOf(le.inputSource);if(Se===-1)return;let _e=A[Se];_e!==void 0&&(_e.update(le.inputSource,le.frame,c||o),_e.dispatchEvent({type:le.type,data:le.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",F);for(let le=0;le<A.length;le++){let Se=C[le];Se!==null&&(C[le]=null,A[le].disconnect(Se))}ue=null,P=null,x.reset();for(let le in _)delete _[le];e.setRenderTarget(D),g=null,p=null,d=null,s=null,w=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",F),L.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Qe=null,nt=null;L.depth&&(nt=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=L.stencil?fs:yi,Qe=L.stencil?Ir:ci);let Je={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Je),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Fn(p.textureWidth,p.textureHeight,{format:zn,type:Pn,depthTexture:new Vi(p.textureWidth,p.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let _e={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Fn(g.framebufferWidth,g.framebufferHeight,{format:zn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(le){for(let Se=0;Se<le.removed.length;Se++){let _e=le.removed[Se],Qe=C.indexOf(_e);Qe>=0&&(C[Qe]=null,A[Qe].disconnect(_e))}for(let Se=0;Se<le.added.length;Se++){let _e=le.added[Se],Qe=C.indexOf(_e);if(Qe===-1){for(let Je=0;Je<A.length;Je++)if(Je>=C.length){C.push(_e),Qe=Je;break}else if(C[Je]===null){C[Je]=_e,Qe=Je;break}if(Qe===-1)break}let nt=A[Qe];nt&&nt.connect(_e)}}let W=new $,re=new $;function me(le,Se,_e){W.setFromMatrixPosition(Se.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);let Qe=W.distanceTo(re),nt=Se.projectionMatrix.elements,Je=_e.projectionMatrix.elements,Ut=nt[14]/(nt[10]-1),at=nt[14]/(nt[10]+1),bt=(nt[9]+1)/nt[5],ut=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],Lt=(Je[8]+1)/Je[0],yt=Ut*dt,Nt=Ut*Lt,Yt=Qe/(-dt+Lt),Dt=Yt*-dt;if(Se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Dt),le.translateZ(Yt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),nt[10]===-1)le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{let Ft=Ut+Yt,G=at+Yt,un=yt-Dt,vt=Nt+(Qe-Dt),R=bt*at/G*Ft,v=ut*at/G*Ft;le.projectionMatrix.makePerspective(un,vt,R,v,Ft,G),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function pe(le,Se){Se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Se=le.near,_e=le.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),J.near=H.near=I.near=Se,J.far=H.far=I.far=_e,(ue!==J.near||P!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),ue=J.near,P=J.far),J.layers.mask=le.layers.mask|6,I.layers.mask=J.layers.mask&-5,H.layers.mask=J.layers.mask&-3;let Qe=le.parent,nt=J.cameras;pe(J,Qe);for(let Je=0;Je<nt.length;Je++)pe(nt[Je],Qe);nt.length===2?me(J,I,H):J.projectionMatrix.copy(I.projectionMatrix),xe(le,J,Qe)};function xe(le,Se,_e){_e===null?le.matrix.copy(Se.matrixWorld):(le.matrix.copy(_e.matrixWorld),le.matrix.invert(),le.matrix.multiply(Se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ns*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(p===null&&g===null))return h},this.setFoveation=function(le){h=le,p!==null&&(p.fixedFoveation=le),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(le){return _[le]};let We=null;function mt(le,Se){if(u=Se.getViewerPose(c||o),y=Se,u!==null){let _e=u.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let Qe=!1;_e.length!==J.cameras.length&&(J.cameras.length=0,Qe=!0);for(let at=0;at<_e.length;at++){let bt=_e[at],ut=null;if(g!==null)ut=g.getViewport(bt);else{let Lt=d.getViewSubImage(p,bt);ut=Lt.viewport,at===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let dt=V[at];dt===void 0&&(dt=new Zt,dt.layers.enable(at),dt.viewport=new wt,V[at]=dt),dt.matrix.fromArray(bt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(bt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),at===0&&(J.matrix.copy(dt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Qe===!0&&J.cameras.push(dt)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=n.getBinding();let at=d.getDepthInformation(_e[0]);at&&at.isValid&&at.texture&&x.init(at,s.renderState)}if(nt&&nt.includes("camera-access")&&E){e.state.unbindTexture(),d=n.getBinding();for(let at=0;at<_e.length;at++){let bt=_e[at].camera;if(bt){let ut=_[bt];ut||(ut=new uo,_[bt]=ut);let dt=d.getCameraImage(bt);ut.sourceTexture=dt}}}}for(let _e=0;_e<A.length;_e++){let Qe=C[_e],nt=A[_e];Qe!==null&&nt!==void 0&&nt.update(Qe,Se,c||o)}We&&We(le,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),y=null}let tt=new Sp;tt.setAnimationLoop(mt),this.setAnimationLoop=function(le){We=le},this.dispose=function(){}}},BS=new rt,Ap=new et;Ap.set(-1,0,0,0,1,0,0,0,1);VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;jc=class{constructor(e={}){let{canvas:t=qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:g=Pn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let E=g,x=new Set([pc,dc,fc]),_=new Set([Pn,ci,Cr,Ir,lc,hc]),L=new Uint32Array(4),D=new Int32Array(4),w=new $,A=null,C=null,U=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,V=!1,J=null,ue=null,P=null,O=null;this._outputColorSpace=en;let B=0,F=0,W=null,re=-1,me=null,pe=new wt,xe=new wt,We=null,mt=new Ke(0),tt=0,le=t.width,Se=t.height,_e=1,Qe=null,nt=null,Je=new wt(0,0,le,Se),Ut=new wt(0,0,le,Se),at=!1,bt=new Er,ut=!1,dt=!1,Lt=new rt,yt=new $,Nt=new wt,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Ft(){return W===null?_e:1}let G=n;function un(T,q){return t.getContext(T,q)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",xn,!1),G===null){let q="webgl2";if(G=un(q,T),G===null)throw un(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw je("WebGLRenderer: "+T.message),T}let vt,R,v,K,te,ie,ve,Ae,ae,de,Re,Fe,be,Ce,ke,qe,Ze,k,Te,fe,we,Ne,ge;function Xe(){vt=new Ky(G),vt.init(),we=new OS(G,vt),R=new Vy(G,vt,e,we),v=new NS(G,vt),R.reversedDepthBuffer&&p&&v.buffers.depth.setReversed(!0),ue=G.createFramebuffer(),P=G.createFramebuffer(),O=G.createFramebuffer(),K=new jy(G),te=new yS,ie=new DS(G,vt,v,te,R,we,K),ve=new Yy(H),Ae=new n_(G),Ne=new ky(G,Ae),ae=new Jy(G,Ae,K,Ne),de=new ev(G,ae,Ae,Ne,K),k=new Qy(G,R,ie),ke=new Hy(te),Re=new xS(H,ve,vt,R,Ne,ke),Fe=new kS(H,te),be=new SS,Ce=new AS(vt),Ze=new By(H,ve,v,de,y,h),qe=new LS(H,de,R),ge=new zS(G,K,R,v),Te=new zy(G,vt,K),fe=new Zy(G,vt,K),K.programs=Re.programs,H.capabilities=R,H.extensions=vt,H.properties=te,H.renderLists=be,H.shadowMap=qe,H.state=v,H.info=K}Xe(),E!==Pn&&(I=new nv(E,t.width,t.height,a,s,r));let Ge=new ru(H,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(le,Se,!1))},this.getSize=function(T){return T.set(le,Se)},this.setSize=function(T,q,ne=!0){if(Ge.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,Se=q,t.width=Math.floor(T*_e),t.height=Math.floor(q*_e),ne===!0&&(t.style.width=T+"px",t.style.height=q+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(le*_e,Se*_e).floor()},this.setDrawingBufferSize=function(T,q,ne){le=T,Se=q,_e=ne,t.width=Math.floor(T*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(E===Pn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(pe)},this.getViewport=function(T){return T.copy(Je)},this.setViewport=function(T,q,ne,j){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,q,ne,j),v.viewport(pe.copy(Je).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,q,ne,j){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,q,ne,j),v.scissor(xe.copy(Ut).multiplyScalar(_e).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(T){v.setScissorTest(at=T)},this.setOpaqueSort=function(T){Qe=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,ne=!0){let j=0;if(T){let Z=!1;if(W!==null){let De=W.texture.format;Z=x.has(De)}if(Z){let De=W.texture.type,ze=_.has(De),Ie=Ze.getClearColor(),Me=Ze.getClearAlpha(),Ve=Ie.r,it=Ie.g,st=Ie.b;ze?(L[0]=Ve,L[1]=it,L[2]=st,L[3]=Me,G.clearBufferuiv(G.COLOR,0,L)):(D[0]=Ve,D[1]=it,D[2]=st,D[3]=Me,G.clearBufferiv(G.COLOR,0,D))}else j|=G.COLOR_BUFFER_BIT}q&&(j|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),J=T},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Ze.dispose(),be.dispose(),Ce.dispose(),te.dispose(),ve.dispose(),de.dispose(),Ne.dispose(),ge.dispose(),Re.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Jo),Ge.removeEventListener("sessionend",Kt),di.stop()};function It(T){T.preventDefault(),jr("WebGLRenderer: Context Lost."),V=!0}function Et(){jr("WebGLRenderer: Context Restored."),V=!1;let T=K.autoReset,q=qe.enabled,ne=qe.autoUpdate,j=qe.needsUpdate,Z=qe.type;Xe(),K.autoReset=T,qe.enabled=q,qe.autoUpdate=ne,qe.needsUpdate=j,qe.type=Z}function xn(T){je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vn(T){let q=T.target;q.removeEventListener("dispose",Vn),Yo(q)}function Yo(T){Rl(T),te.remove(T)}function Rl(T){let q=te.get(T).programs;q!==void 0&&(q.forEach(function(ne){Re.releaseProgram(ne)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ne,j,Z,De){q===null&&(q=Yt);let ze=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ie=Cl(T,q,ne,j,Z);v.setMaterial(j,ze);let Me=ne.index,Ve=1;if(j.wireframe===!0){if(Me=ae.getWireframeAttribute(ne),Me===void 0)return;Ve=2}let it=ne.drawRange,st=ne.attributes.position,$e=it.start*Ve,St=(it.start+it.count)*Ve;De!==null&&($e=Math.max($e,De.start*Ve),St=Math.min(St,(De.start+De.count)*Ve)),Me!==null?($e=Math.max($e,0),St=Math.min(St,Me.count)):st!=null&&($e=Math.max($e,0),St=Math.min(St,st.count));let Bt=St-$e;if(Bt<0||Bt===1/0)return;Ne.setup(Z,j,Ie,ne,Me);let Pt,xt=Te;if(Me!==null&&(Pt=Ae.get(Me),xt=fe,xt.setIndex(Pt)),Z.isMesh)j.wireframe===!0?(v.setLineWidth(j.wireframeLinewidth*Ft()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(Z.isLine){let kt=j.linewidth;kt===void 0&&(kt=1),v.setLineWidth(kt*Ft()),Z.isLineSegments?xt.setMode(G.LINES):Z.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else Z.isPoints?xt.setMode(G.POINTS):Z.isSprite&&xt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let kt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,vn=Z._multiDrawCount,gt=Me?Ae.get(Me).bytesPerElement:1,Tn=te.get(j).currentProgram.getUniforms();for(let M=0;M<vn;M++)Tn.setValue(G,"_gl_DrawID",M),xt.render(kt[M]/gt,Ue[M])}else if(Z.isInstancedMesh)xt.renderInstances($e,Bt,Z.count);else if(ne.isInstancedBufferGeometry){let kt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ue=Math.min(ne.instanceCount,kt);xt.renderInstances($e,Bt,Ue)}else xt.render($e,Bt)};function vs(T,q,ne){T.transparent===!0&&T.side===qn&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,bs(T,q,ne),T.side=ri,T.needsUpdate=!0,bs(T,q,ne),T.side=qn):bs(T,q,ne)}this.compile=function(T,q,ne=null){ne===null&&(ne=T),C=Ce.get(ne),C.init(q),b.push(C),ne.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),T!==ne&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights();let j=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let De=Z.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){let Ie=De[ze];vs(Ie,ne,Z),j.add(Ie)}else vs(De,ne,Z),j.add(De)}),C=b.pop(),j},this.compileAsync=function(T,q,ne=null){let j=this.compile(T,q,ne);return new Promise(Z=>{function De(){if(j.forEach(function(ze){te.get(ze).currentProgram.isReady()&&j.delete(ze)}),j.size===0){Z(T);return}setTimeout(De,10)}vt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ks=null;function Ko(T){Ks&&Ks(T)}function Jo(){di.stop()}function Kt(){di.start()}let di=new Sp;di.setAnimationLoop(Ko),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(T){Ks=T,Ge.setAnimationLoop(T),T===null?di.stop():di.start()},Ge.addEventListener("sessionstart",Jo),Ge.addEventListener("sessionend",Kt),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(T,q);let ne=Ge.enabled===!0&&Ge.isPresenting===!0,j=I!==null&&(W===null||ne)&&I.begin(H,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(q),q=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(H,T,q,W),C=Ce.get(T,b.length),C.init(q),C.state.textureUnits=ie.getTextureUnits(),b.push(C),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),bt.setFromProjectionMatrix(Lt,ni,q.reversedDepth),dt=this.localClippingEnabled,ut=ke.init(this.clippingPlanes,dt),A=be.get(T,U.length),A.init(),U.push(A),Ge.enabled===!0&&Ge.isPresenting===!0){let ze=H.xr.getDepthSensingMesh();ze!==null&&Js(ze,q,-1/0,H.sortObjects)}Js(T,q,0,H.sortObjects),A.finish(),H.sortObjects===!0&&A.sort(Qe,nt,q.reversedDepth),Dt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Dt&&Ze.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&ke.beginShadows();let Z=C.state.shadowsArray;if(qe.render(Z,T,q),ut===!0&&ke.endShadows(),(j&&I.hasRenderPass())===!1){let ze=A.opaque,Ie=A.transmissive;if(C.setupLights(),q.isArrayCamera){let Me=q.cameras;if(Ie.length>0)for(let Ve=0,it=Me.length;Ve<it;Ve++){let st=Me[Ve];zr(ze,Ie,T,st)}Dt&&Ze.render(T);for(let Ve=0,it=Me.length;Ve<it;Ve++){let st=Me[Ve];yn(A,T,st,st.viewport)}}else Ie.length>0&&zr(ze,Ie,T,q),Dt&&Ze.render(T),yn(A,T,q)}W!==null&&F===0&&(ie.updateMultisampleRenderTarget(W),ie.updateRenderTargetMipmap(W)),j&&I.end(H),T.isScene===!0&&T.onAfterRender(H,T,q),Ne.resetDefaultState(),re=-1,me=null,b.pop(),b.length>0?(C=b[b.length-1],ie.setTextureUnits(C.state.textureUnits),ut===!0&&ke.setGlobalState(H.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?A=U[U.length-1]:A=null,J!==null&&J.renderEnd()};function Js(T,q,ne,j){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)C.pushLightProbeGrid(T);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||bt.intersectsSprite(T)){j&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);let ze=de.update(T),Ie=T.material;Ie.visible&&A.push(T,ze,Ie,ne,Nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||bt.intersectsObject(T))){let ze=de.update(T),Ie=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Nt.copy(ze.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ie)){let Me=ze.groups;for(let Ve=0,it=Me.length;Ve<it;Ve++){let st=Me[Ve],$e=Ie[st.materialIndex];$e&&$e.visible&&A.push(T,ze,$e,ne,Nt.z,st)}}else Ie.visible&&A.push(T,ze,Ie,ne,Nt.z,null)}}let De=T.children;for(let ze=0,Ie=De.length;ze<Ie;ze++)Js(De[ze],q,ne,j)}function yn(T,q,ne,j){let{opaque:Z,transmissive:De,transparent:ze}=T;C.setupLightsView(ne),ut===!0&&ke.setGlobalState(H.clippingPlanes,ne),j&&v.viewport(pe.copy(j)),Z.length>0&&Ss(Z,q,ne),De.length>0&&Ss(De,q,ne),ze.length>0&&Ss(ze,q,ne),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function zr(T,q,ne,j){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){let $e=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new Fn(1,1,{generateMipmaps:!0,type:$e?Ei:Pn,minFilter:ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let De=C.state.transmissionRenderTarget[j.id],ze=j.viewport||pe;De.setSize(ze.z*H.transmissionResolutionScale,ze.w*H.transmissionResolutionScale);let Ie=H.getRenderTarget(),Me=H.getActiveCubeFace(),Ve=H.getActiveMipmapLevel();H.setRenderTarget(De),H.getClearColor(mt),tt=H.getClearAlpha(),tt<1&&H.setClearColor(16777215,.5),H.clear(),Dt&&Ze.render(ne);let it=H.toneMapping;H.toneMapping=oi;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),ut===!0&&ke.setGlobalState(H.clippingPlanes,j),Ss(T,ne,j),ie.updateMultisampleRenderTarget(De),ie.updateRenderTargetMipmap(De),vt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let St=0,Bt=q.length;St<Bt;St++){let Pt=q[St],{object:xt,geometry:kt,material:Ue,group:vn}=Pt;if(Ue.side===qn&&xt.layers.test(j.layers)){let gt=Ue.side;Ue.side=Mn,Ue.needsUpdate=!0,pi(xt,ne,j,kt,Ue,vn),Ue.side=gt,Ue.needsUpdate=!0,$e=!0}}$e===!0&&(ie.updateMultisampleRenderTarget(De),ie.updateRenderTargetMipmap(De))}H.setRenderTarget(Ie,Me,Ve),H.setClearColor(mt,tt),st!==void 0&&(j.viewport=st),H.toneMapping=it}function Ss(T,q,ne){let j=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,De=T.length;Z<De;Z++){let ze=T[Z],{object:Ie,geometry:Me,group:Ve}=ze,it=ze.material;it.allowOverride===!0&&j!==null&&(it=j),Ie.layers.test(ne.layers)&&pi(Ie,q,ne,Me,it,Ve)}}function pi(T,q,ne,j,Z,De){T.onBeforeRender(H,q,ne,j,Z,De),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(H,q,ne,j,T,De),Z.transparent===!0&&Z.side===qn&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,H.renderBufferDirect(ne,q,j,Z,T,De),Z.side=ri,Z.needsUpdate=!0,H.renderBufferDirect(ne,q,j,Z,T,De),Z.side=qn):H.renderBufferDirect(ne,q,j,Z,T,De),T.onAfterRender(H,q,ne,j,Z,De)}function bs(T,q,ne){q.isScene!==!0&&(q=Yt);let j=te.get(T),Z=C.state.lights,De=C.state.shadowsArray,ze=Z.state.version,Ie=Re.getParameters(T,Z.state,De,q,ne,C.state.lightProbeGridArray),Me=Re.getProgramCacheKey(Ie),Ve=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,j.fog=q.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=ve.get(T.envMap||j.environment,it),j.envMapRotation=j.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Vn),Ve=new Map,j.programs=Ve);let st=Ve.get(Me);if(st!==void 0){if(j.currentProgram===st&&j.lightsStateVersion===ze)return mi(T,Ie),st}else Ie.uniforms=Re.getUniforms(T),J!==null&&T.isNodeMaterial&&J.build(T,ne,Ie),T.onBeforeCompile(Ie,H),st=Re.acquireProgram(Ie,Me),Ve.set(Me,st),j.uniforms=Ie.uniforms;let $e=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=ke.uniform),mi(T,Ie),j.needsLights=Ln(T),j.lightsStateVersion=ze,j.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.lightProbeGrid=C.state.lightProbeGridArray.length>0,j.currentProgram=st,j.uniformsList=null,st}function Vr(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function mi(T,q){let ne=te.get(T);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function Zn(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ne=0,j=T.length;ne<j;ne++){let Z=T[ne];if(Z.texture!==null&&Z.boundingBox.containsPoint(w))return Z}return null}function Cl(T,q,ne,j,Z){q.isScene!==!0&&(q=Yt),ie.resetTextureUnits();let De=q.fog,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?q.environment:null,Ie=W===null?H.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ct.workingColorSpace,Me=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ve=ve.get(j.envMap||ze,Me),it=j.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),$e=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,Bt=!!ne.morphAttributes.color,Pt=oi;j.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Pt=H.toneMapping);let xt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,kt=xt!==void 0?xt.length:0,Ue=te.get(j),vn=C.state.lights;if(ut===!0&&(dt===!0||T!==me)){let z=T===me&&j.id===re;ke.setState(j,T,z)}let gt=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==vn.state.version||Ue.outputColorSpace!==Ie||Z.isBatchedMesh&&Ue.batching===!1||!Z.isBatchedMesh&&Ue.batching===!0||Z.isBatchedMesh&&Ue.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ue.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ue.instancing===!1||!Z.isInstancedMesh&&Ue.instancing===!0||Z.isSkinnedMesh&&Ue.skinning===!1||!Z.isSkinnedMesh&&Ue.skinning===!0||Z.isInstancedMesh&&Ue.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ue.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ue.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ue.instancingMorph===!1&&Z.morphTexture!==null||Ue.envMap!==Ve||j.fog===!0&&Ue.fog!==De||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ke.numPlanes||Ue.numIntersection!==ke.numIntersection)||Ue.vertexAlphas!==it||Ue.vertexTangents!==st||Ue.morphTargets!==$e||Ue.morphNormals!==St||Ue.morphColors!==Bt||Ue.toneMapping!==Pt||Ue.morphTargetsCount!==kt||!!Ue.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ue.__version=j.version);let Tn=Ue.currentProgram;gt===!0&&(Tn=bs(j,q,Z),J&&j.isNodeMaterial&&J.onUpdateProgram(j,Tn,Ue));let M=!1,l=!1,f=!1,m=Tn.getUniforms(),S=Ue.uniforms;if(v.useProgram(Tn.program)&&(M=!0,l=!0,f=!0),j.id!==re&&(re=j.id,l=!0),Ue.needsLights){let z=Zn(C.state.lightProbeGridArray,Z);Ue.lightProbeGrid!==z&&(Ue.lightProbeGrid=z,l=!0)}if(M||me!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),m.setValue(G,"projectionMatrix",T.projectionMatrix),m.setValue(G,"viewMatrix",T.matrixWorldInverse);let ce=m.map.cameraPosition;ce!==void 0&&ce.setValue(G,yt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&m.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&m.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),me!==T&&(me=T,l=!0,f=!0)}if(Ue.needsLights&&(vn.state.directionalShadowMap.length>0&&m.setValue(G,"directionalShadowMap",vn.state.directionalShadowMap,ie),vn.state.spotShadowMap.length>0&&m.setValue(G,"spotShadowMap",vn.state.spotShadowMap,ie),vn.state.pointShadowMap.length>0&&m.setValue(G,"pointShadowMap",vn.state.pointShadowMap,ie)),Z.isSkinnedMesh){m.setOptional(G,Z,"bindMatrix"),m.setOptional(G,Z,"bindMatrixInverse");let z=Z.skeleton;z&&(z.boneTexture===null&&z.computeBoneTexture(),m.setValue(G,"boneTexture",z.boneTexture,ie))}Z.isBatchedMesh&&(m.setOptional(G,Z,"batchingTexture"),m.setValue(G,"batchingTexture",Z._matricesTexture,ie),m.setOptional(G,Z,"batchingIdTexture"),m.setValue(G,"batchingIdTexture",Z._indirectTexture,ie),m.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&m.setValue(G,"batchingColorTexture",Z._colorsTexture,ie));let N=ne.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0)&&k.update(Z,ne,Tn),(l||Ue.receiveShadow!==Z.receiveShadow)&&(Ue.receiveShadow=Z.receiveShadow,m.setValue(G,"receiveShadow",Z.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&q.environment!==null&&(S.envMapIntensity.value=q.environmentIntensity),S.dfgLUT!==void 0&&(S.dfgLUT.value=HS()),l){if(m.setValue(G,"toneMappingExposure",H.toneMappingExposure),Ue.needsLights&&Zo(S,f),De&&j.fog===!0&&Fe.refreshFogUniforms(S,De),Fe.refreshMaterialUniforms(S,j,_e,Se,C.state.transmissionRenderTarget[T.id]),Ue.needsLights&&Ue.lightProbeGrid){let z=Ue.lightProbeGrid;S.probesSH.value=z.texture,S.probesMin.value.copy(z.boundingBox.min),S.probesMax.value.copy(z.boundingBox.max),S.probesResolution.value.copy(z.resolution)}Nr.upload(G,Vr(Ue),S,ie)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Nr.upload(G,Vr(Ue),S,ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&m.setValue(G,"center",Z.center),m.setValue(G,"modelViewMatrix",Z.modelViewMatrix),m.setValue(G,"normalMatrix",Z.normalMatrix),m.setValue(G,"modelMatrix",Z.matrixWorld),j.uniformsGroups!==void 0){let z=j.uniformsGroups;for(let ce=0,Q=z.length;ce<Q;ce++){let se=z[ce];ge.update(se,Tn),ge.bind(se,Tn)}}return Tn}function Zo(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ln(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,q,ne){let j=te.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),te.get(T.texture).__webglTexture=q,te.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ne,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){let ne=te.get(T);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,ne=0){W=T,B=q,F=ne;let j=null,Z=!1,De=!1;if(T){let Ie=te.get(T);if(Ie.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,Ie.__webglFramebuffer),pe.copy(T.viewport),xe.copy(T.scissor),We=T.scissorTest,v.viewport(pe),v.scissor(xe),v.setScissorTest(We),re=-1;return}else if(Ie.__webglFramebuffer===void 0)ie.setupRenderTarget(T);else if(Ie.__hasExternalTextures)ie.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(Ie.__boundDepthTexture!==it){if(it!==null&&te.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(T)}}let Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(De=!0);let Ve=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[q])?j=Ve[q][ne]:j=Ve[q],Z=!0):T.samples>0&&ie.useMultisampledRTT(T)===!1?j=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[ne]:j=Ve,pe.copy(T.viewport),xe.copy(T.scissor),We=T.scissorTest}else pe.copy(Je).multiplyScalar(_e).floor(),xe.copy(Ut).multiplyScalar(_e).floor(),We=at;if(ne!==0&&(j=ue),v.bindFramebuffer(G.FRAMEBUFFER,j)&&v.drawBuffers(T,j),v.viewport(pe),v.scissor(xe),v.setScissorTest(We),Z){let Ie=te.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ne)}else if(De){let Ie=q;for(let Me=0;Me<T.textures.length;Me++){let Ve=te.get(T.textures[Me]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Me,Ve.__webglTexture,ne,Ie)}}else if(T!==null&&ne!==0){let Ie=te.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,ne)}re=-1},this.readRenderTargetPixels=function(T,q,ne,j,Z,De,ze,Ie=0){if(!(T&&T.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Me=Me[ze]),Me){v.bindFramebuffer(G.FRAMEBUFFER,Me);try{let Ve=T.textures[Ie],it=Ve.format,st=Ve.type;if(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ie),!R.textureFormatReadable(it)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(st)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-j&&ne>=0&&ne<=T.height-Z&&G.readPixels(q,ne,j,Z,we.convert(it),we.convert(st),De)}finally{let Ve=W!==null?te.get(W).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,q,ne,j,Z,De,ze,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Me=Me[ze]),Me)if(q>=0&&q<=T.width-j&&ne>=0&&ne<=T.height-Z){v.bindFramebuffer(G.FRAMEBUFFER,Me);let Ve=T.textures[Ie],it=Ve.format,st=Ve.type;if(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ie),!R.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(q,ne,j,Z,we.convert(it),we.convert(st),0);let St=W!==null?te.get(W).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,St);let Bt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Yd(G,Bt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer($e),G.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,ne=0){let j=Math.pow(2,-ne),Z=Math.floor(T.image.width*j),De=Math.floor(T.image.height*j),ze=q!==null?q.x:0,Ie=q!==null?q.y:0;ie.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,ze,Ie,Z,De),v.unbindTexture()},this.copyTextureToTexture=function(T,q,ne=null,j=null,Z=0,De=0){let ze,Ie,Me,Ve,it,st,$e,St,Bt,Pt=T.isCompressedTexture?T.mipmaps[De]:T.image;if(ne!==null)ze=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,Me=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,it=ne.min.y,st=ne.isBox3?ne.min.z:0;else{let S=Math.pow(2,-Z);ze=Math.floor(Pt.width*S),Ie=Math.floor(Pt.height*S),T.isDataArrayTexture?Me=Pt.depth:T.isData3DTexture?Me=Math.floor(Pt.depth*S):Me=1,Ve=0,it=0,st=0}j!==null?($e=j.x,St=j.y,Bt=j.z):($e=0,St=0,Bt=0);let xt=we.convert(q.format),kt=we.convert(q.type),Ue;q.isData3DTexture?(ie.setTexture3D(q,0),Ue=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ue=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ue=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let vn=v.getParameter(G.UNPACK_ROW_LENGTH),gt=v.getParameter(G.UNPACK_IMAGE_HEIGHT),Tn=v.getParameter(G.UNPACK_SKIP_PIXELS),M=v.getParameter(G.UNPACK_SKIP_ROWS),l=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,Pt.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(G.UNPACK_SKIP_ROWS,it),v.pixelStorei(G.UNPACK_SKIP_IMAGES,st);let f=T.isDataArrayTexture||T.isData3DTexture,m=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){let S=te.get(T),N=te.get(q),z=te.get(S.__renderTarget),ce=te.get(N.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,z.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Q=0;Q<Me;Q++)f&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(T).__webglTexture,Z,st+Q),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(q).__webglTexture,De,Bt+Q)),G.blitFramebuffer(Ve,it,ze,Ie,$e,St,ze,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||te.has(T)){let S=te.get(T),N=te.get(q);v.bindFramebuffer(G.READ_FRAMEBUFFER,P),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,O);for(let z=0;z<Me;z++)f?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,S.__webglTexture,Z,st+z):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,S.__webglTexture,Z),m?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,N.__webglTexture,De,Bt+z):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,N.__webglTexture,De),Z!==0?G.blitFramebuffer(Ve,it,ze,Ie,$e,St,ze,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):m?G.copyTexSubImage3D(Ue,De,$e,St,Bt+z,Ve,it,ze,Ie):G.copyTexSubImage2D(Ue,De,$e,St,Ve,it,ze,Ie);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else m?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ue,De,$e,St,Bt,ze,Ie,Me,xt,kt,Pt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,De,$e,St,Bt,ze,Ie,Me,xt,Pt.data):G.texSubImage3D(Ue,De,$e,St,Bt,ze,Ie,Me,xt,kt,Pt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,$e,St,ze,Ie,xt,kt,Pt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,$e,St,Pt.width,Pt.height,xt,Pt.data):G.texSubImage2D(G.TEXTURE_2D,De,$e,St,ze,Ie,xt,kt,Pt);v.pixelStorei(G.UNPACK_ROW_LENGTH,vn),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Tn),v.pixelStorei(G.UNPACK_SKIP_ROWS,M),v.pixelStorei(G.UNPACK_SKIP_IMAGES,l),De===0&&q.generateMipmaps&&G.generateMipmap(Ue),v.unbindTexture()},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ie.setTextureCube(T,0):T.isData3DTexture?ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ie.setTexture2DArray(T,0):ie.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){B=0,F=0,W=null,v.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}});function ou(i,e){if(e===Uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Pr||e===Lo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let h=0;h<a.count;h++)o.push(h);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Pr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Rp=Gn(()=>{tl()});function Cp(i){let e=new Map,t=new Map,n=i.clone();return Ip(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(h){return t.get(h)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ip(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ip(i.children[n],e.children[n],t)}var Pp=Gn(()=>{});function WS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function qt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function $S(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Fs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function Ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],h=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(p)}if(s){let p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(p)}if(r){let p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;h.push(p)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(h)]).then(function(c){let u=c[0],d=c[1],p=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=p),i.morphTargetsRelative=!0,i})}function KS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JS(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lu(t.attributes):e=i.indices+":"+lu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+lu(i.targets[n]);return e}function lu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function QS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],h=a.min,c=a.max;if(h!==void 0&&c!==void 0){if(s.set(new $(h[0],h[1],h[2]),new $(c[0],c[1],c[2])),a.normalized){let u=Nu(Or[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new $,h=new $;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let p=t.json.accessors[d.POSITION],g=p.min,y=p.max;if(g!==void 0&&y!==void 0){if(h.setX(Math.max(Math.abs(g[0]),Math.abs(y[0]))),h.setY(Math.max(Math.abs(g[1]),Math.abs(y[1]))),h.setZ(Math.max(Math.abs(g[2]),Math.abs(y[2]))),p.normalized){let E=Nu(Or[p.componentType]);h.multiplyScalar(E)}a.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new wn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Op(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(h){i.setAttribute(a,h)})}for(let o in n){let a=Lu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ct.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Ai(i,e),QS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?YS(i,e.targets,t):i})}var nl,ht,hu,uu,fu,du,pu,mu,gu,_u,xu,yu,vu,Su,bu,Mu,Eu,Tu,il,wu,Up,Uo,Lp,Au,Ru,Cu,Iu,sl,XS,Pu,$n,Or,Np,Dp,au,Lu,ms,qS,cu,jS,Du,Fp=Gn(()=>{tl();Rp();Pp();nl=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new du(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new il(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new il(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=qi.extractUrlBase(e);o=qi.resolveURL(c,this.path)}else o=qi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},h=new wr(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},h=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===Up){try{o[ht.KHR_BINARY_GLTF]=new Au(e)}catch(d){s&&s(d);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(h.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Du(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],p=r.extensionsRequired||[];switch(d){case ht.KHR_MATERIALS_UNLIT:o[d]=new uu;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[d]=new Ru(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[d]=new Cu;break;case ht.KHR_MESH_QUANTIZATION:o[d]=new Iu;break;default:p.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hu=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,h=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ke(16777215);h.color!==void 0&&u.setRGB(h.color[0],h.color[1],h.color[2],bn);let d=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new ks(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new So(u),c.distance=d;break;case"spot":c=new vo(u),c.distance=d,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),Ai(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(h){return n._getNodeRef(t.cache,a,h)})}},uu=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){let s=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,en))}return Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(r,r)}return Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],bn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,en)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(r[0],r[1],r[2],bn),Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},vu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(r[0],r[1],r[2],bn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,en)),Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Mu=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Eu=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],h=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(h=c)}return n.loadTextureImage(e,o.source,h)}},Tu=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],h=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(h=c)}return n.loadTextureImage(e,o.source,h)}},il=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let h=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,p=new Uint8Array(a,h,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,p,s.mode,s.filter).then(function(g){return g.buffer}):o.ready.then(function(){let g=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(g),u,d,p,s.mode,s.filter),g})})}else return null}},wu=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==$n.TRIANGLES&&c.mode!==$n.TRIANGLE_STRIP&&c.mode!==$n.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],h={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(h[c]=u,h[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],p=c[0].count,g=[];for(let y of d){let E=new rt,x=new $,_=new Un,L=new $(1,1,1),D=new ao(y.geometry,y.material,p);for(let w=0;w<p;w++)h.TRANSLATION&&x.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&_.fromBufferAttribute(h.ROTATION,w),h.SCALE&&L.fromBufferAttribute(h.SCALE,w),D.setMatrixAt(w,E.compose(x,_,L));for(let w in h)if(w==="_COLOR_0"){let A=h[w];D.instanceColor=new os(A.array,A.itemSize,A.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&y.geometry.setAttribute(w,h[w]);Ot.prototype.copy.call(D,y),this.parser.assignFinalMaterial(D),g.push(D)}return u.isGroup?(u.clear(),u.add(...g),u):g[0]}))}},Up="glTF",Uo=12,Lp={JSON:1313821514,BIN:5130562},Au=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let h=r.getUint32(o,!0);if(o+=4,h===Lp.JSON){let c=new Uint8Array(e,Uo+o,a);this.content=n.decode(c)}else if(h===Lp.BIN){let c=Uo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},h={},c={};for(let u in o){let d=Lu[u]||u.toLowerCase();a[d]=o[u]}for(let u in e.attributes){let d=Lu[u]||u.toLowerCase();if(o[u]!==void 0){let p=n.accessors[e.attributes[u]],g=Or[p.componentType];c[d]=g.name,h[d]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,p){s.decodeDracoFile(u,function(g){for(let y in g.attributes){let E=g.attributes[y],x=h[y];x!==void 0&&(E.normalized=x)}d(g)},a,c,bn,p)})})}},Cu=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Iu=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},sl=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=a*2,c=a*3,u=s-t,d=(n-t)/u,p=d*d,g=p*d,y=e*c,E=y-c,x=-2*g+3*p,_=g-p,L=1-x,D=_-p+d;for(let w=0;w!==a;w++){let A=o[E+w+a],C=o[E+w+h]*u,U=o[y+w+a],b=o[y+w]*u;r[w]=L*A+D*C+x*U+_*b}return r}},XS=new Un,Pu=class extends sl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return XS.fromArray(r).normalize().toArray(r),r}},$n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Np={9728:Wt,9729:Xt,9984:oc,9985:Rr,9986:Vs,9987:ai},Dp={33071:Xn,33648:pr,10497:rs},au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qS={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Ps},cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};jS=new rt,Du=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let h=a.match(/Version\/(\d+)/);s=n&&h?parseInt(h[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new go(this.options.manager):this.textureLoader=new bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ws(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(a)})).then(function(){for(let h of a.scenes)h.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,h=o.length;a<h;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let h=this.associations.get(o);h!=null&&this.associations.set(a,h);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=au[s.type],a=Or[s.componentType],h=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new jt(c,o,h))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],h=au[s.type],c=Or[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*h,p=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,y=s.normalized===!0,E,x;if(g&&g!==d){let _=Math.floor(p/g),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count,D=t.cache.get(L);D||(E=new c(a,_*g,s.count*g/u),D=new vr(E,g/u),t.cache.add(L,D)),x=new Sr(D,h,p%g/u,y)}else a===null?E=new c(s.count*h):E=new c(a,p,s.count*h),x=new jt(E,h,y);if(s.sparse!==void 0){let _=au.SCALAR,L=Or[s.sparse.indices.componentType],D=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,A=new L(o[1],D,s.sparse.count*_),C=new c(o[2],w,s.sparse.count*h);a!==null&&(x=new jt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let U=0,b=A.length;U<b;U++){let I=A[U];if(x.setX(I,C[U*h]),h>=2&&x.setY(I,C[U*h+1]),h>=3&&x.setZ(I,C[U*h+2]),h>=4&&x.setW(I,C[U*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=y}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let h=n.manager.getHandler(o.uri);h!==null&&(a=h)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],h=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let p=(r.samplers||{})[o.sampler]||{};return u.magFilter=Np[p.magFilter]||Xt,u.minFilter=Np[p.minFilter]||ai,u.wrapS=Dp[p.wrapS]||rs,u.wrapT=Dp[p.wrapT]||rs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Xt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,h=o.uri||"",c=!1;if(o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let p=new Blob([d],{type:o.mimeType});return h=a.createObjectURL(p),h});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(h).then(function(d){return new Promise(function(p,g){let y=p;t.isImageBitmapLoader===!0&&(y=function(E){let x=new on(E);x.needsUpdate=!0,p(x)}),t.load(qi.resolveURL(d,r.path),y,void 0,g)})}).then(function(d){return c===!0&&a.revokeObjectURL(h),Ai(d,o),d.userData.mimeType=o.mimeType||ZS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let h=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,h)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,h=this.cache.get(a);h||(h=new Tr,An.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(a,h)),n=h}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,h=this.cache.get(a);h||(h=new zi,An.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(a,h)),n=h}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let h=this.cache.get(a);h||(h=n.clone(),r&&(h.vertexColors=!0),o&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(a,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return Fs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},h=r.extensions||{},c=[];if(h[ht.KHR_MATERIALS_UNLIT]){let d=s[ht.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let p=d.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],bn),a.opacity=p[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,en)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qn);let u=r.alphaMode||cu.OPAQUE;if(u===cu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){let d=r.emissiveFactor;a.emissive=new Ke().setRGB(d[0],d[1],d[2],bn)}return r.emissiveTexture!==void 0&&o!==Rn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,en)),Promise.all(c).then(function(){let d=new o(a);return r.name&&(d.name=r.name),Ai(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ws(s,d,r),d})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(h){return Op(h,a,t)})}let o=[];for(let a=0,h=e.length;a<h;a++){let c=e[a],u=JS(c),d=s[u];if(d)o.push(d.promise);else{let p;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?p=r(c):p=Op(new hn,c,t),s[u]={primitive:c,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let h=0,c=o.length;h<c;h++){let u=o[h].material===void 0?$S(this.cache):this.getDependency("material",o[h].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(h){let c=h.slice(0,h.length-1),u=h[h.length-1],d=[];for(let g=0,y=u.length;g<y;g++){let E=u[g],x=o[g],_,L=c[g];if(x.mode===$n.TRIANGLES||x.mode===$n.TRIANGLE_STRIP||x.mode===$n.TRIANGLE_FAN||x.mode===void 0)_=r.isSkinnedMesh===!0?new ro(E,L):new Qt(E,L),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),x.mode===$n.TRIANGLE_STRIP?_.geometry=ou(_.geometry,Lo):x.mode===$n.TRIANGLE_FAN&&(_.geometry=ou(_.geometry,Pr));else if(x.mode===$n.LINES)_=new as(E,L);else if(x.mode===$n.LINE_STRIP)_=new Os(E,L);else if(x.mode===$n.LINE_LOOP)_=new co(E,L);else if(x.mode===$n.POINTS)_=new lo(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(_.geometry.morphAttributes).length>0&&KS(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Ai(_,r),x.extensions&&Ws(s,_,x),t.assignFinalMaterial(_),d.push(_)}for(let g=0,y=d.length;g<y;g++)t.associations.set(d[g],{meshes:e,primitives:g});if(d.length===1)return r.extensions&&Ws(s,d[0],r),d[0];let p=new ii;r.extensions&&Ws(s,p,r),t.associations.set(p,{meshes:e});for(let g=0,y=d.length;g<y;g++)p.add(d[g]);return p})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(kh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],h=[];for(let c=0,u=o.length;c<u;c++){let d=o[c];if(d){a.push(d);let p=new rt;r!==null&&p.fromArray(r.array,c*16),h.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oo(a,h)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],h=[],c=[],u=[];for(let d=0,p=s.channels.length;d<p;d++){let g=s.channels[d],y=s.samplers[g.sampler],E=g.target,x=E.node,_=s.parameters!==void 0?s.parameters[y.input]:y.input,L=s.parameters!==void 0?s.parameters[y.output]:y.output;E.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",_)),h.push(this.getDependency("accessor",L)),c.push(y),u.push(E))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(h),Promise.all(c),Promise.all(u)]).then(function(d){let p=d[0],g=d[1],y=d[2],E=d[3],x=d[4],_=[];for(let D=0,w=p.length;D<w;D++){let A=p[D],C=g[D],U=y[D],b=E[D],I=x[D];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let H=n._createAnimationTracks(A,C,U,b,I);if(H)for(let V=0;V<H.length;V++)_.push(H[V])}let L=new mo(r,void 0,_);return Ai(L,s),L})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let h=0,c=s.weights.length;h<c;h++)a.morphTargetInfluences[h]=s.weights[h]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let h=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),h]).then(function(c){let u=c[0],d=c[1],p=c[2];p!==null&&u.traverse(function(g){g.isSkinnedMesh&&g.bind(p,jS)});for(let g=0,y=d.length;g<y;g++)u.add(d[g]);if(u.userData.pivot!==void 0&&d.length>0){let g=u.userData.pivot,y=d[0];u.pivot=new $().fromArray(g),u.position.x-=g[0],u.position.y-=g[1],u.position.z-=g[2],y.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],h=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return h&&a.push(h),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new br:c.length>1?u=new ii:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let d=0,p=c.length;d<p;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Ai(u,r),r.extensions&&Ws(n,u,r),r.matrix!==void 0){let d=new rt;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ii;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&Ws(t,r,n);let o=n.nodes||[],a=[];for(let h=0,c=o.length;h<c;h++)a.push(s.getDependency("node",o[h]));return Promise.all(a).then(function(h){for(let u=0,d=h.length;u<d;u++){let p=h[u];p.parent!==null?r.add(Cp(p)):r.add(p)}let c=u=>{let d=new Map;for(let[p,g]of s.associations)(p instanceof An||p instanceof on)&&d.set(p,g);return u.traverse(p=>{let g=s.associations.get(p);g!=null&&d.set(p,g)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,h=[];function c(g){g.morphTargetInfluences&&h.push(g.name?g.name:g.uuid)}ms[r.path]===ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):h.push(a);let u;switch(ms[r.path]){case ms.weights:u=Gi;break;case ms.rotation:u=Wi;break;case ms.translation:case ms.scale:u=ls;break;default:n.itemSize===1?u=Gi:u=ls;break}let d=s.interpolation!==void 0?qS[s.interpolation]:Ls,p=this._getArrayFromAccessor(n);for(let g=0,y=h.length;g<y;g++){let E=new u(h[g]+"."+ms[r.path],t.array,p,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),o.push(E)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Wi?Pu:sl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Bp=Gt(()=>{"use strict";ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);typeof FormData>"u"&&(globalThis.FormData=class{})});var Fo={};Il(Fo,{__addDisposableResource:()=>lm,__assign:()=>rl,__asyncDelegator:()=>tm,__asyncGenerator:()=>em,__asyncValues:()=>nm,__await:()=>Ur,__awaiter:()=>Yp,__classPrivateFieldGet:()=>om,__classPrivateFieldIn:()=>cm,__classPrivateFieldSet:()=>am,__createBinding:()=>al,__decorate:()=>Vp,__disposeResources:()=>hm,__esDecorate:()=>Gp,__exportStar:()=>Jp,__extends:()=>kp,__generator:()=>Kp,__importDefault:()=>rm,__importStar:()=>sm,__makeTemplateObject:()=>im,__metadata:()=>$p,__param:()=>Hp,__propKey:()=>Xp,__read:()=>Fu,__rest:()=>zp,__rewriteRelativeImportExtension:()=>um,__runInitializers:()=>Wp,__setFunctionName:()=>qp,__spread:()=>Zp,__spreadArray:()=>Qp,__spreadArrays:()=>jp,__values:()=>ol,default:()=>nb});function kp(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ou(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function zp(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function Vp(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function Hp(i,e){return function(t,n){e(t,n,i)}}function Gp(i,e,t,n,s,r){function o(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var a=n.kind,h=a==="getter"?"get":a==="setter"?"set":"value",c=!e&&i?n.static?i:i.prototype:null,u=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,p=!1,g=t.length-1;g>=0;g--){var y={};for(var E in n)y[E]=E==="access"?{}:n[E];for(var E in n.access)y.access[E]=n.access[E];y.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(_||null))};var x=(0,t[g])(a==="accessor"?{get:u.get,set:u.set}:u[h],y);if(a==="accessor"){if(x===void 0)continue;if(x===null||typeof x!="object")throw new TypeError("Object expected");(d=o(x.get))&&(u.get=d),(d=o(x.set))&&(u.set=d),(d=o(x.init))&&s.unshift(d)}else(d=o(x))&&(a==="field"?s.unshift(d):u[h]=d)}c&&Object.defineProperty(c,n.name,u),p=!0}function Wp(i,e,t){for(var n=arguments.length>2,s=0;s<e.length;s++)t=n?e[s].call(i,t):e[s].call(i);return n?t:void 0}function Xp(i){return typeof i=="symbol"?i:"".concat(i)}function qp(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function $p(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function Yp(i,e,t,n){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function h(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?r(u.value):s(u.value).then(a,h)}c((n=n.apply(i,e||[])).next())})}function Kp(i,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return h([c,u])}}function h(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(t=0)),t;)try{if(n=1,s&&(r=c[0]&2?s.return:c[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;switch(s=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,s=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){t.label=c[1];break}if(c[0]===6&&t.label<r[1]){t.label=r[1],r=c;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(c);break}r[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(i,t)}catch(u){c=[6,u],s=0}finally{n=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Jp(i,e){for(var t in i)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&al(e,i,t)}function ol(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fu(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,r=[],o;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)r.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}function Zp(){for(var i=[],e=0;e<arguments.length;e++)i=i.concat(Fu(arguments[e]));return i}function jp(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),s=0,e=0;e<t;e++)for(var r=arguments[e],o=0,a=r.length;o<a;o++,s++)n[s]=r[o];return n}function Qp(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,r;n<s;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return i.concat(r||Array.prototype.slice.call(e))}function Ur(i){return this instanceof Ur?(this.v=i,this):new Ur(i)}function em(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),s,r=[];return s=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),s[Symbol.asyncIterator]=function(){return this},s;function o(g){return function(y){return Promise.resolve(y).then(g,d)}}function a(g,y){n[g]&&(s[g]=function(E){return new Promise(function(x,_){r.push([g,E,x,_])>1||h(g,E)})},y&&(s[g]=y(s[g])))}function h(g,y){try{c(n[g](y))}catch(E){p(r[0][3],E)}}function c(g){g.value instanceof Ur?Promise.resolve(g.value.v).then(u,d):p(r[0][2],g)}function u(g){h("next",g)}function d(g){h("throw",g)}function p(g,y){g(y),r.shift(),r.length&&h(r[0][0],r[0][1])}}function tm(i){var e,t;return e={},n("next"),n("throw",function(s){throw s}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(s,r){e[s]=i[s]?function(o){return(t=!t)?{value:Ur(i[s](o)),done:!1}:r?r(o):o}:r}}function nm(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof ol=="function"?ol(i):i[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=i[r]&&function(o){return new Promise(function(a,h){o=i[r](o),s(a,h,o.done,o.value)})}}function s(r,o,a,h){Promise.resolve(h).then(function(c){r({value:c,done:a})},o)}}function im(i,e){return Object.defineProperty?Object.defineProperty(i,"raw",{value:e}):i.raw=e,i}function sm(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t=Uu(i),n=0;n<t.length;n++)t[n]!=="default"&&al(e,i,t[n]);return eb(e,i),e}function rm(i){return i&&i.__esModule?i:{default:i}}function om(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)}function am(i,e,t,n,s){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!s:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?s.call(i,t):s?s.value=t:e.set(i,t),t}function cm(i,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof i=="function"?e===i:i.has(e)}function lm(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(s=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");s&&(n=function(){try{s.call(this)}catch(r){return Promise.reject(r)}}),i.stack.push({value:e,dispose:n,async:t})}else t&&i.stack.push({async:!0});return e}function hm(i){function e(r){i.error=i.hasError?new tb(r,i.error,"An error was suppressed during disposal."):r,i.hasError=!0}var t,n=0;function s(){for(;t=i.stack.pop();)try{if(!t.async&&n===1)return n=0,i.stack.push(t),Promise.resolve().then(s);if(t.dispose){var r=t.dispose.call(t.value);if(t.async)return n|=2,Promise.resolve(r).then(s,function(o){return e(o),s()})}else n|=1}catch(o){e(o)}if(n===1)return i.hasError?Promise.reject(i.error):Promise.resolve();if(i.hasError)throw i.error}return s()}function um(i,e){return typeof i=="string"&&/^\.\.?\//.test(i)?i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,n,s,r,o){return n?e?".jsx":".js":s&&(!r||!o)?t:s+r+"."+o.toLowerCase()+"js"}):i}var Ou,rl,al,eb,Uu,tb,nb,Bo=Gn(()=>{Ou=function(i,e){return Ou=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Ou(i,e)};rl=function(){return rl=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rl.apply(this,arguments)};al=Object.create?(function(i,e,t,n){n===void 0&&(n=t);var s=Object.getOwnPropertyDescriptor(e,t);(!s||("get"in s?!e.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,s)}):(function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]});eb=Object.create?(function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}):function(i,e){i.default=e},Uu=function(i){return Uu=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},Uu(i)};tb=typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=i,n.suppressed=e,n};nb={__extends:kp,__assign:rl,__rest:zp,__decorate:Vp,__param:Hp,__esDecorate:Gp,__runInitializers:Wp,__propKey:Xp,__setFunctionName:qp,__metadata:$p,__awaiter:Yp,__generator:Kp,__createBinding:al,__exportStar:Jp,__values:ol,__read:Fu,__spread:Zp,__spreadArrays:jp,__spreadArray:Qp,__await:Ur,__asyncGenerator:em,__asyncDelegator:tm,__asyncValues:nm,__makeTemplateObject:im,__importStar:sm,__importDefault:rm,__classPrivateFieldGet:om,__classPrivateFieldSet:am,__classPrivateFieldIn:cm,__addDisposableResource:lm,__disposeResources:hm,__rewriteRelativeImportExtension:um}});var ko=Gt(Fr=>{"use strict";Fr.CloseCode=void 0;(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(Fr.CloseCode||(Fr.CloseCode={}));var Bu=class extends Error{constructor(e,t){super(t),this.name="ServerError",this.code=e}},ku=class extends Error{constructor(e){super(e),this.name="AbortError"}};Fr.AbortError=ku;Fr.ServerError=Bu});var ll=Gt((cl,fm)=>{(function(i,e){typeof cl=="object"&&typeof fm<"u"?e(cl):typeof define=="function"&&define.amd?define(["exports"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i.schema={}))})(cl,(function(i){"use strict";i.OPERATION=void 0,(function(M){M[M.ADD=128]="ADD",M[M.REPLACE=0]="REPLACE",M[M.DELETE=64]="DELETE",M[M.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",M[M.MOVE_AND_ADD=160]="MOVE_AND_ADD",M[M.DELETE_AND_ADD=192]="DELETE_AND_ADD",M[M.CLEAR=10]="CLEAR",M[M.REVERSE=15]="REVERSE",M[M.MOVE=32]="MOVE",M[M.DELETE_BY_REFID=33]="DELETE_BY_REFID",M[M.ADD_BY_REFID=129]="ADD_BY_REFID"})(i.OPERATION||(i.OPERATION={})),Symbol.metadata??=Symbol.for("Symbol.metadata");let n="~track",s="~encoder",r="~decoder",o="~filter",a="~getByIndex",h="~deleteByIndex",c="~changes",u="~childType",d="~onEncodeEnd",p="~onDecodeEnd",g="~descriptors",y="~__numFields",E="~__refTypeFieldIndexes",x="~__viewFieldIndexes",_="$__fieldIndexesByViewTag",L;try{L=new TextEncoder}catch{}let D=new ArrayBuffer(8),w=new Int32Array(D),A=new Float32Array(D),C=new Float64Array(D),U=new BigInt64Array(D),I=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(M,l){for(var f=0,m=0,S=0,N=M.length;S<N;S++)f=M.charCodeAt(S),f<128?m+=1:f<2048?m+=2:f<55296||f>=57344?m+=3:(S++,m+=4);return m};function H(M,l,f){for(var m=0,S=0,N=l.length;S<N;S++)m=l.charCodeAt(S),m<128?M[f.offset++]=m:m<2048?(M[f.offset]=192|m>>6,M[f.offset+1]=128|m&63,f.offset+=2):m<55296||m>=57344?(M[f.offset]=224|m>>12,M[f.offset+1]=128|m>>6&63,M[f.offset+2]=128|m&63,f.offset+=3):(S++,m=65536+((m&1023)<<10|l.charCodeAt(S)&1023),M[f.offset]=240|m>>18,M[f.offset+1]=128|m>>12&63,M[f.offset+2]=128|m>>6&63,M[f.offset+3]=128|m&63,f.offset+=4)}function V(M,l,f){M[f.offset++]=l&255}function J(M,l,f){M[f.offset++]=l&255}function ue(M,l,f){M[f.offset++]=l&255,M[f.offset++]=l>>8&255}function P(M,l,f){M[f.offset++]=l&255,M[f.offset++]=l>>8&255}function O(M,l,f){M[f.offset++]=l&255,M[f.offset++]=l>>8&255,M[f.offset++]=l>>16&255,M[f.offset++]=l>>24&255}function B(M,l,f){let m=l>>24,S=l>>16,N=l>>8,z=l;M[f.offset++]=z&255,M[f.offset++]=N&255,M[f.offset++]=S&255,M[f.offset++]=m&255}function F(M,l,f){let m=Math.floor(l/Math.pow(2,32)),S=l>>>0;B(M,S,f),B(M,m,f)}function W(M,l,f){let m=l/Math.pow(2,32)>>0,S=l>>>0;B(M,S,f),B(M,m,f)}function re(M,l,f){U[0]=BigInt.asIntN(64,l),O(M,w[0],f),O(M,w[1],f)}function me(M,l,f){U[0]=BigInt.asIntN(64,l),O(M,w[0],f),O(M,w[1],f)}function pe(M,l,f){A[0]=l,O(M,w[0],f)}function xe(M,l,f){C[0]=l,O(M,w[0],f),O(M,w[1],f)}function We(M,l,f){M[f.offset++]=l?1:0}function mt(M,l,f){l||(l="");let m=I(l,"utf8"),S=0;if(m<32)M[f.offset++]=m|160,S=1;else if(m<256)M[f.offset++]=217,M[f.offset++]=m%255,S=2;else if(m<65536)M[f.offset++]=218,P(M,m,f),S=3;else if(m<4294967296)M[f.offset++]=219,B(M,m,f),S=5;else throw new Error("String too long");return H(M,l,f),S+m}function tt(M,l,f){if(isNaN(l))return tt(M,0,f);if(isFinite(l)){if(l!==(l|0))return Math.abs(l)<=34028235e31&&(A[0]=l,Math.abs(Math.abs(A[0])-Math.abs(l))<1e-4)?(M[f.offset++]=202,pe(M,l,f),5):(M[f.offset++]=203,xe(M,l,f),9)}else return tt(M,l>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,f);return l>=0?l<128?(M[f.offset++]=l&255,1):l<256?(M[f.offset++]=204,M[f.offset++]=l&255,2):l<65536?(M[f.offset++]=205,P(M,l,f),3):l<4294967296?(M[f.offset++]=206,B(M,l,f),5):(M[f.offset++]=207,W(M,l,f),9):l>=-32?(M[f.offset++]=224|l+32,1):l>=-128?(M[f.offset++]=208,V(M,l,f),2):l>=-32768?(M[f.offset++]=209,ue(M,l,f),3):l>=-2147483648?(M[f.offset++]=210,O(M,l,f),5):(M[f.offset++]=211,F(M,l,f),9)}let le={int8:V,uint8:J,int16:ue,uint16:P,int32:O,uint32:B,int64:F,uint64:W,bigint64:re,biguint64:me,float32:pe,float64:xe,boolean:We,string:mt,number:tt,utf8Write:H,utf8Length:I},Se=new ArrayBuffer(8),_e=new Int32Array(Se),Qe=new Float32Array(Se),nt=new Float64Array(Se),Je=new BigUint64Array(Se),Ut=new BigInt64Array(Se);function at(M,l,f){f>M.length-l.offset&&(f=M.length-l.offset);for(var m="",S=0,N=l.offset,z=l.offset+f;N<z;N++){var ce=M[N];if((ce&128)===0){m+=String.fromCharCode(ce);continue}if((ce&224)===192){m+=String.fromCharCode((ce&31)<<6|M[++N]&63);continue}if((ce&240)===224){m+=String.fromCharCode((ce&15)<<12|(M[++N]&63)<<6|(M[++N]&63)<<0);continue}if((ce&248)===240){S=(ce&7)<<18|(M[++N]&63)<<12|(M[++N]&63)<<6|(M[++N]&63)<<0,S>=65536?(S-=65536,m+=String.fromCharCode((S>>>10)+55296,(S&1023)+56320)):m+=String.fromCharCode(S);continue}console.error("decode.utf8Read(): Invalid byte "+ce+" at offset "+N+". Skip to end of string: "+(l.offset+f));break}return l.offset+=f,m}function bt(M,l){return ut(M,l)<<24>>24}function ut(M,l){return M[l.offset++]}function dt(M,l){return Lt(M,l)<<16>>16}function Lt(M,l){return M[l.offset++]|M[l.offset++]<<8}function yt(M,l){return M[l.offset++]|M[l.offset++]<<8|M[l.offset++]<<16|M[l.offset++]<<24}function Nt(M,l){return yt(M,l)>>>0}function Yt(M,l){return _e[0]=yt(M,l),Qe[0]}function Dt(M,l){return _e[0]=yt(M,l),_e[1]=yt(M,l),nt[0]}function Ft(M,l){let f=Nt(M,l);return yt(M,l)*Math.pow(2,32)+f}function G(M,l){let f=Nt(M,l);return Nt(M,l)*Math.pow(2,32)+f}function un(M,l){return _e[0]=yt(M,l),_e[1]=yt(M,l),Ut[0]}function vt(M,l){return _e[0]=yt(M,l),_e[1]=yt(M,l),Je[0]}function R(M,l){return ut(M,l)>0}function v(M,l){let f=M[l.offset++],m;return f<192?m=f&31:f===217?m=ut(M,l):f===218?m=Lt(M,l):f===219&&(m=Nt(M,l)),at(M,l,m)}function K(M,l){let f=M[l.offset++];if(f<128)return f;if(f===202)return Yt(M,l);if(f===203)return Dt(M,l);if(f===204)return ut(M,l);if(f===205)return Lt(M,l);if(f===206)return Nt(M,l);if(f===207)return G(M,l);if(f===208)return bt(M,l);if(f===209)return dt(M,l);if(f===210)return yt(M,l);if(f===211)return Ft(M,l);if(f>223)return(255-f+1)*-1}function te(M,l){let f=M[l.offset];return f<192&&f>160||f===217||f===218||f===219}let ie={utf8Read:at,int8:bt,uint8:ut,int16:dt,uint16:Lt,int32:yt,uint32:Nt,float32:Yt,float64:Dt,int64:Ft,uint64:G,bigint64:un,biguint64:vt,boolean:R,string:v,number:K,stringCheck:te},ve={},Ae=new Map;function ae(M,l){l.constructor&&(Ae.set(l.constructor,M),ve[M]=l),l.encode&&(le[M]=l.encode),l.decode&&(ie[M]=l.decode)}function de(M){return ve[M]}function Re(M){for(let l in M)ae(l,M[l]);return l=>Ln(l)}class Fe{static{this.inheritedTypes=new Map}static{this.cachedContexts=new Map}static register(l){let f=Object.getPrototypeOf(l);if(f!==Me){let m=Fe.inheritedTypes.get(f);m||(m=new Set,Fe.inheritedTypes.set(f,m)),m.add(l)}}static cache(l){let f=Fe.cachedContexts.get(l);return f||(f=new Fe(l),Fe.cachedContexts.set(l,f)),f}constructor(l){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},l&&this.discoverTypes(l)}has(l){return this.schemas.has(l)}get(l){return this.types[l]}add(l,f=this.schemas.size){return this.schemas.has(l)?!1:(this.types[f]=l,l[Symbol.metadata]===void 0&&ke.initialize(l),this.schemas.set(l,f),!0)}getTypeId(l){return this.schemas.get(l)}discoverTypes(l,f,m,S){if(S&&this.registerFilteredByParent(l,f,m),!this.add(l))return;Fe.inheritedTypes.get(l)?.forEach(ce=>{this.discoverTypes(ce,f,m,S)});let N=l;for(;(N=Object.getPrototypeOf(N))&&N!==Me&&N!==Function.prototype;)this.discoverTypes(N);let z=l[Symbol.metadata]??={};z[x]&&(this.hasFilters=!0);for(let ce in z){let Q=ce,se=z[Q].type,he=z[Q].tag!==void 0;if(typeof se!="string")if(typeof se=="function")this.discoverTypes(se,l,Q,S||he);else{let oe=Object.values(se)[0];if(typeof oe=="string")continue;this.discoverTypes(oe,l,Q,S||he)}}}registerFilteredByParent(l,f,m){let N=`${this.schemas.get(l)??this.schemas.size}`;f&&(N+=`-${this.schemas.get(f)}`),N+=`-${m}`,this.parentFiltered[N]=!0}debug(){let l="";for(let f in this.parentFiltered){let m=f.split("-").map(Number),S=m.pop();l+=`
		`,l+=`${f}: ${m.reverse().map((N,z)=>{let ce=this.types[N],Q=ce[Symbol.metadata],se=ce.name;return z===0&&(se+=`[${Q[S].name}]`),`${se}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${l}`}}function be(M){if(Array.isArray(M))return{array:be(M[0])};if(typeof M.type<"u")return M.type;if(Ce(M))return Object.keys(M).every(l=>typeof M[l]=="string")?"string":"number";if(typeof M=="object"&&M!==null){let l=Object.keys(M).find(f=>ve[f]!==void 0);if(l)return M[l]=be(M[l]),M}return M}function Ce(M){if(typeof M=="function"&&M[Symbol.metadata])return!1;let l=Object.keys(M),f=l.filter(m=>/\d+/.test(m));return!!(f.length>0&&f.length===l.length/2&&M[M[f[0]]]==f[0]||l.length>0&&l.every(m=>typeof M[m]=="string"&&M[m]===m))}let ke={addField(M,l,f,m,S){if(l>64)throw new Error(`Can't define field '${f}'.
Schema instances may only have up to 64 fields.`);M[l]=Object.assign(M[l]||{},{type:be(m),index:l,name:f}),Object.defineProperty(M,g,{value:M[g]||{},enumerable:!1,configurable:!0}),S?(M[g][f]=S,M[g][`_${f}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):M[g][f]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(M,y,{value:l,enumerable:!1,configurable:!0}),Object.defineProperty(M,f,{value:l,enumerable:!1,configurable:!0}),typeof M[l].type!="string"&&(M[E]===void 0&&Object.defineProperty(M,E,{value:[],enumerable:!1,configurable:!0}),M[E].push(l))},setTag(M,l,f){let m=M[l],S=M[m];S.tag=f,M[x]||(Object.defineProperty(M,x,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(M,_,{value:{},enumerable:!1,configurable:!0})),M[x].push(m),M[_][f]||(M[_][f]=[]),M[_][f].push(m)},setFields(M,l){let f=M.prototype.constructor;Fe.register(f);let m=Object.getPrototypeOf(f),S=m&&m[Symbol.metadata],N=ke.initialize(f);f[n]||(f[n]=Me[n]),f[s]||(f[s]=Me[s]),f[r]||(f[r]=Me[r]),f.prototype.toJSON||(f.prototype.toJSON=Me.prototype.toJSON);let z=N[y]??(S&&S[y])??-1;z++;for(let ce in l){let Q=be(l[ce]),se=typeof Object.keys(Q)[0]=="string"&&de(Object.keys(Q)[0]),he=se?Object.values(Q)[0]:Q;ke.addField(N,z,ce,Q,T(`_${ce}`,z,he,se)),z++}return M},isDeprecated(M,l){return M[l].deprecated===!0},init(M){let l={};M[Symbol.metadata]=l,Object.defineProperty(l,y,{value:0,enumerable:!1,configurable:!0})},initialize(M){let l=Object.getPrototypeOf(M),f=l[Symbol.metadata],m=M[Symbol.metadata]??Object.create(null);return l!==Me&&m===f&&(m=Object.create(null),f&&(Object.setPrototypeOf(m,f),Object.defineProperty(m,y,{value:f[y],enumerable:!1,configurable:!0,writable:!0}),f[x]!==void 0&&(Object.defineProperty(m,x,{value:[...f[x]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(m,_,{value:{...f[_]},enumerable:!1,configurable:!0,writable:!0})),f[E]!==void 0&&Object.defineProperty(m,E,{value:[...f[E]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(m,g,{value:{...f[g]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(M,Symbol.metadata,{value:m,writable:!1,configurable:!0}),m},isValidInstance(M){return M.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(M.constructor[Symbol.metadata],y)},getFields(M){let l=M[Symbol.metadata],f={};for(let m=0;m<=l[y];m++)f[l[m].name]=l[m].type;return f},hasViewTagAtIndex(M,l){return M?.[x]?.includes(l)}};function qe(M){return{indexes:{},operations:[],queueRootNode:M}}function Ze(){return{next:void 0,tail:void 0}}function k(M,l){let f=M.indexes[l];f===void 0?M.indexes[l]=M.operations.push(l)-1:M.operations[f]=l}function Te(M,l){let f=M.indexes[l];f===void 0&&(f=Object.values(M.indexes).at(-1),l=Object.entries(M.indexes).find(([m,S])=>S===f)?.[0]),M.operations[f]=void 0,delete M.indexes[l]}class fe{constructor(l){this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=l,this.metadata=l.constructor[Symbol.metadata],this.metadata?.[x]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(l){this.root=l;let f=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,f),f&&this.forEachChild((m,S)=>{m.root!==l?m.setRoot(l):l.add(m)})}setParent(l,f,m){if(this.addParent(l,m),!f)return;let S=f.add(this);f!==this.root&&(this.root=f,this.checkIsFiltered(l,m,S)),S&&this.forEachChild((N,z)=>{if(N.root===f){f.add(N),f.moveNextToParent(N);return}N.setParent(this.ref,f,z)})}forEachChild(l){if(this.ref[u]){if(typeof this.ref[u]!="string")for(let[f,m]of this.ref.entries())m&&l(m[c],this.indexes?.[f]??f)}else for(let f of this.metadata?.[E]??[]){let m=this.metadata[f],S=this.ref[m.name];S&&l(S[c],f)}}operation(l){this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-l),this.root?.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-l),this.root?.enqueueChangeTree(this,"changes"))}change(l,f=i.OPERATION.ADD){let m=this.isFiltered||this.metadata?.[l]?.tag!==void 0,S=m?this.filteredChanges:this.changes,N=this.indexedOperations[l];if(!N||N===i.OPERATION.DELETE){let z=N&&N===i.OPERATION.DELETE?i.OPERATION.DELETE_AND_ADD:f;this.indexedOperations[l]=z}k(S,l),m?(k(this.allFilteredChanges,l),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(k(this.allChanges,l),this.root?.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(l){let f=this.isFiltered?this.filteredChanges:this.changes,m={},S={};for(let N in this.indexedOperations)m[Number(N)+l]=this.indexedOperations[N],S[Number(N)+l]=f.indexes[N];this.indexedOperations=m,f.indexes=S,f.operations=f.operations.map(N=>N+l)}shiftAllChangeIndexes(l,f=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(l,f,this.allFilteredChanges),this._shiftAllChangeIndexes(l,f,this.allChanges)):this._shiftAllChangeIndexes(l,f,this.allChanges)}_shiftAllChangeIndexes(l,f=0,m){let S={},N=0;for(let z in m.indexes)S[N++]=m.indexes[z];m.indexes=S;for(let z=0;z<m.operations.length;z++){let ce=m.operations[z];ce>f&&(m.operations[z]=ce+l)}}indexedOperation(l,f,m=l){this.indexedOperations[l]=f,this.filteredChanges!==void 0?(k(this.allFilteredChanges,m),k(this.filteredChanges,l),this.root?.enqueueChangeTree(this,"filteredChanges")):(k(this.allChanges,m),k(this.changes,l),this.root?.enqueueChangeTree(this,"changes"))}getType(l){return this.ref[u]||this.metadata[l].type}getChange(l){return this.indexedOperations[l]}getValue(l,f=!1){return this.ref[a](l,f)}delete(l,f,m=l){if(l===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${l}'`)}catch(z){console.warn(z)}return}let S=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[l]=f??i.OPERATION.DELETE,k(S,l),Te(this.allChanges,m);let N=this.getValue(l);return N&&N[c]&&this.root?.remove(N[c]),this.filteredChanges!==void 0?(Te(this.allFilteredChanges,m),this.root?.enqueueChangeTree(this,"filteredChanges")):this.root?.enqueueChangeTree(this,"changes"),N}endEncode(l){this.indexedOperations={},this[l]=qe(),this.ref[d]?.(),this.isNew=!1}discard(l=!1){this.ref[d]?.(),this.indexedOperations={},this.changes=qe(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=qe(this.filteredChanges.queueRootNode)),l&&(this.allChanges=qe(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=qe(this.allFilteredChanges.queueRootNode)))}discardAll(){let l=Object.keys(this.indexedOperations);for(let f=0,m=l.length;f<m;f++){let S=this.getValue(Number(l[f]));S&&S[c]&&S[c].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(l,f,m){this.root.types.hasFilters&&(this._checkFilteredByParent(l,f),this.filteredChanges!==void 0&&(this.root?.enqueueChangeTree(this,"filteredChanges"),m&&this.root?.enqueueChangeTree(this,"allFilteredChanges"))),this.isFiltered||(this.root?.enqueueChangeTree(this,"changes"),m&&this.root?.enqueueChangeTree(this,"allChanges"))}_checkFilteredByParent(l,f){if(!l)return;let m=ke.isValidInstance(this.ref)?this.ref.constructor:this.ref[u],S,N=!ke.isValidInstance(l);N?(S=l[c],l=S.parent,f=S.parentIndex):S=l[c];let z=l.constructor,ce=`${this.root.types.getTypeId(m)}`;z&&(ce+=`-${this.root.types.schemas.get(z)}`),ce+=`-${f}`;let Q=ke.hasViewTagAtIndex(z?.[Symbol.metadata],f);this.isFiltered=l[c].isFiltered||this.root.types.parentFiltered[ce]||Q,this.isFiltered&&(this.isVisibilitySharedWithParent=S.isFiltered&&typeof m!="string"&&!Q&&N,this.filteredChanges||(this.filteredChanges=qe(),this.allFilteredChanges=qe()),this.changes.operations.length>0&&(this.changes.operations.forEach(se=>k(this.filteredChanges,se)),this.allChanges.operations.forEach(se=>k(this.allFilteredChanges,se)),this.changes=qe(),this.allChanges=qe()))}get parent(){return this.parentChain?.ref}get parentIndex(){return this.parentChain?.index}addParent(l,f){if(this.hasParent((m,S)=>m[c]===l[c])){this.parentChain.index=f;return}this.parentChain={ref:l,index:f,next:this.parentChain}}removeParent(l=this.parent){let f=this.parentChain,m=null;for(;f;){if(f.ref[c]===l[c])return m?m.next=f.next:this.parentChain=f.next,!0;m=f,f=f.next}return this.parentChain===void 0}findParent(l){let f=this.parentChain;for(;f;){if(l(f.ref,f.index))return f;f=f.next}}hasParent(l){return this.findParent(l)!==void 0}getAllParents(){let l=[],f=this.parentChain;for(;f;)l.push({ref:f.ref,index:f.index}),f=f.next;return l}}function we(M,l,f,m,S,N){typeof f=="string"?le[f]?.(l,m,N):f[Symbol.metadata]!==void 0?(le.number(l,m[c].refId,N),(S&i.OPERATION.ADD)===i.OPERATION.ADD&&M.tryEncodeTypeId(l,f,m.constructor,N)):le.number(l,m[c].refId,N)}let Ne=function(M,l,f,m,S,N,z,ce,Q){if(l[N.offset++]=(m|S)&255,S===i.OPERATION.DELETE)return;let se=f.ref,he=Q[m];we(M,l,Q[m].type,se[he.name],S,N)},ge=function(M,l,f,m,S,N){if(l[N.offset++]=S&255,le.number(l,m,N),S===i.OPERATION.DELETE)return;let z=f.ref;if((S&i.OPERATION.ADD)===i.OPERATION.ADD&&typeof z.set=="function"){let se=f.ref.$indexes.get(m);le.string(l,se,N)}let ce=z[u],Q=z[a](m);we(M,l,ce,Q,S,N)},Xe=function(M,l,f,m,S,N,z,ce){let Q=f.ref,se=ce&&f.isFiltered&&typeof f.getType(m)!="string",he;if(se){let Le=Q.tmpItems[m];if(!Le)return;he=Le[c].refId,S===i.OPERATION.DELETE?S=i.OPERATION.DELETE_BY_REFID:S===i.OPERATION.ADD&&(S=i.OPERATION.ADD_BY_REFID)}else he=m;if(l[N.offset++]=S&255,le.number(l,he,N),S===i.OPERATION.DELETE||S===i.OPERATION.DELETE_BY_REFID)return;let oe=f.getType(m),Be=f.getValue(m,z);we(M,l,oe,Be,S,N)},Ge=-1;function It(M,l,f,m,S,N,z,ce){let Q=M.root,se=f[a](m),he;if((l&i.OPERATION.DELETE)===i.OPERATION.DELETE){let oe=Q.refIds.get(se);oe!==void 0&&Q.removeRef(oe),l!==i.OPERATION.DELETE_AND_ADD&&f[h](m),he=void 0}if(l!==i.OPERATION.DELETE)if(Me.is(S)){let oe=ie.number(N,z);if(he=Q.refs.get(oe),(l&i.OPERATION.ADD)===i.OPERATION.ADD){let Be=M.getInstanceType(N,z,S);he||(he=M.createInstanceOfType(Be)),Q.addRef(oe,he,he!==se||l===i.OPERATION.DELETE_AND_ADD&&he===se)}}else if(typeof S=="string")he=ie[S](N,z);else{let oe=de(Object.keys(S)[0]),Be=ie.number(N,z),Le=Q.refs.has(Be)?se||Q.refs.get(Be):new oe.constructor;if(he=Le.clone(!0),he[u]=Object.values(S)[0],se){let Ee=Q.refIds.get(se);if(Ee!==void 0&&Be!==Ee){let ye=se.entries(),He;for(;(He=ye.next())&&!He.done;){let[Vt,Ht]=He.value;typeof Ht=="object"&&(Ee=Q.refIds.get(Ht),Q.removeRef(Ee)),ce.push({ref:se,refId:Ee,op:i.OPERATION.DELETE,field:Vt,value:void 0,previousValue:Ht})}}}Q.addRef(Be,he,Le!==se||l===i.OPERATION.DELETE_AND_ADD&&Le===se)}return{value:he,previousValue:se}}let Et=function(M,l,f,m,S){let N=l[f.offset++],z=m.constructor[Symbol.metadata],ce=N>>6<<6,Q=N%(ce||255),se=z[Q];if(se===void 0)return console.warn("@colyseus/schema: field not defined at",{index:Q,ref:m.constructor.name,metadata:z}),Ge;let{value:he,previousValue:oe}=It(M,ce,m,Q,se.type,l,f,S);he!=null&&(m[se.name]=he),oe!==he&&S.push({ref:m,refId:M.currentRefId,op:ce,field:se.name,value:he,previousValue:oe})},xn=function(M,l,f,m,S){let N=l[f.offset++];if(N===i.OPERATION.CLEAR){M.removeChildRefs(m,S),m.clear();return}let z=ie.number(l,f),ce=m[u],Q;(N&i.OPERATION.ADD)===i.OPERATION.ADD?typeof m.set=="function"?(Q=ie.string(l,f),m.setIndex(z,Q)):Q=z:Q=m.getIndex(z);let{value:se,previousValue:he}=It(M,N,m,z,ce,l,f,S);if(se!=null){if(typeof m.set=="function")m.$items.set(Q,se);else if(typeof m.$setAt=="function")m.$setAt(z,se,N);else if(typeof m.add=="function"){let oe=m.add(se);typeof oe=="number"&&m.setIndex(oe,oe)}}he!==se&&S.push({ref:m,refId:M.currentRefId,op:N,field:"",dynamicIndex:Q,value:se,previousValue:he})},Vn=function(M,l,f,m,S){let N=l[f.offset++],z;if(N===i.OPERATION.CLEAR){M.removeChildRefs(m,S),m.clear();return}else if(N===i.OPERATION.REVERSE){m.reverse();return}else if(N===i.OPERATION.DELETE_BY_REFID){let oe=ie.number(l,f),Be=M.root.refs.get(oe);z=m.findIndex(Le=>Le===Be),m[h](z),S.push({ref:m,refId:M.currentRefId,op:i.OPERATION.DELETE,field:"",dynamicIndex:z,value:void 0,previousValue:Be});return}else if(N===i.OPERATION.ADD_BY_REFID){let oe=ie.number(l,f),Be=M.root.refs.get(oe);Be&&(z=m.findIndex(Le=>Le===Be)),(z===-1||z===void 0)&&(z=m.length)}else z=ie.number(l,f);let ce=m[u],Q=z,{value:se,previousValue:he}=It(M,N,m,z,ce,l,f,S);se!=null&&se!==he&&m.$setAt(z,se,N),he!==se&&S.push({ref:m,refId:M.currentRefId,op:N,field:"",dynamicIndex:Q,value:se,previousValue:he})};class Yo extends Error{}function Rl(M,l,f,m){let S,N=!1;switch(l){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":S="number",isNaN(M)&&console.log(`trying to encode "NaN" in ${f.constructor.name}#${m}`);break;case"bigint64":case"biguint64":S="bigint";break;case"string":S="string",N=!0;break;case"boolean":return;default:return}if(typeof M!==S&&(!N||N&&M!==null)){let z=`'${JSON.stringify(M)}'${M&&M.constructor&&` (${M.constructor.name})`||""}`;throw new Yo(`a '${S}' was expected, but ${z} was provided in ${f.constructor.name}#${m}`)}}function vs(M,l,f,m){if(!(M instanceof l))throw new Yo(`a '${l.name}' was expected, but '${M&&M.constructor.name}' was provided in ${f.constructor.name}#${m}`)}var Ks,Ko;let Jo=(M,l)=>{let f=M.toString(),m=l.toString();return f<m?-1:f>m?1:0};class Kt{static{this[Ks]=Xe}static{this[Ko]=Vn}static[(Ks=s,Ko=r,o)](l,f,m){return!m||typeof l[u]=="string"||m.isChangeTreeVisible(l.tmpItems[f]?.[c])}static is(l){return Array.isArray(l)||l.array!==void 0}static from(l){return new Kt(...Array.from(l))}constructor(...l){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});let f=new Proxy(this,{get:(m,S)=>typeof S!="symbol"&&!isNaN(S)?this.items[S]:Reflect.get(m,S),set:(m,S,N)=>{if(typeof S!="symbol"&&!isNaN(S)){if(N==null)m.$deleteAt(S);else{if(N[c]){vs(N,m[u],m,S);let z=m.items[S];m.isMovingItems?(z!==void 0?N[c].isNew?m[c].indexedOperation(Number(S),i.OPERATION.MOVE_AND_ADD):(m[c].getChange(Number(S))&i.OPERATION.DELETE)===i.OPERATION.DELETE?m[c].indexedOperation(Number(S),i.OPERATION.DELETE_AND_MOVE):m[c].indexedOperation(Number(S),i.OPERATION.MOVE):N[c].isNew&&m[c].indexedOperation(Number(S),i.OPERATION.ADD),N[c].setParent(this,m[c].root,S)):m.$changeAt(Number(S),N),z!==void 0&&z[c].root?.remove(z[c])}else m.$changeAt(Number(S),N);m.items[S]=N,m.tmpItems[S]=N}return!0}else return Reflect.set(m,S,N)},deleteProperty:(m,S)=>(typeof S=="number"?m.$deleteAt(S):delete m[S],!0),has:(m,S)=>typeof S!="symbol"&&!isNaN(Number(S))?Reflect.has(this.items,S):Reflect.has(m,S)});return Object.defineProperty(this,c,{value:new fe(f),enumerable:!1,writable:!0}),l.length>0&&this.push(...l),f}set length(l){l===0?this.clear():l<this.items.length?this.splice(l,this.length-l):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...l){let f=this.tmpItems.length,m=this[c];for(let S=0,N=l.length;S<N;S++,f++){let z=l[S];if(z==null)return;typeof z=="object"&&this[u]&&vs(z,this[u],this,S),m.indexedOperation(f,i.OPERATION.ADD,this.items.length),this.items.push(z),this.tmpItems.push(z),z[c]?.setParent(this,m.root,f)}return f}pop(){let l=-1;for(let f=this.tmpItems.length-1;f>=0;f--)if(this.deletedIndexes[f]!==!0){l=f;break}if(!(l<0))return this[c].delete(l,void 0,this.items.length-1),this.deletedIndexes[l]=!0,this.items.pop()}at(l){return l<0&&(l+=this.length),this.items[l]}$changeAt(l,f){if(f==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[l]===f)return;let m=this.items[l]!==void 0?typeof f=="object"?i.OPERATION.DELETE_AND_ADD:i.OPERATION.REPLACE:i.OPERATION.ADD,S=this[c];S.change(l,m),f[c]?.setParent(this,S.root,l)}$deleteAt(l,f){this[c].delete(l,f)}$setAt(l,f,m){l===0&&m===i.OPERATION.ADD&&this.items[l]!==void 0?this.items.unshift(f):m===i.OPERATION.DELETE_AND_MOVE?(this.items.splice(l,1),this.items[l]=f):this.items[l]=f}clear(){if(this.items.length===0)return;let l=this[c];l.forEachChild((f,m)=>{l.root?.remove(f)}),l.discard(!0),l.operation(i.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...l){return new Kt(...this.items.concat(...l))}join(l){return this.items.join(l)}reverse(){return this[c].operation(i.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;let l=this[c],f=this.tmpItems.findIndex(S=>S===this.items[0]),m=this.items.findIndex(S=>S===this.items[0]);return l.delete(f,i.OPERATION.DELETE,m),l.shiftAllChangeIndexes(-1,m),this.deletedIndexes[f]=!0,this.items.shift()}slice(l,f){let m=new Kt;return m.push(...this.items.slice(l,f)),m}sort(l=Jo){this.isMovingItems=!0;let f=this[c];return this.items.sort(l).forEach((S,N)=>f.change(N,i.OPERATION.REPLACE)),this.tmpItems.sort(l),this.isMovingItems=!1,this}splice(l,f,...m){let S=this[c],N=this.items.length,z=this.tmpItems.length,ce=m.length,Q=[];for(let se=0;se<z;se++)this.deletedIndexes[se]!==!0&&Q.push(se);if(N>l){f===void 0&&(f=N-l);for(let se=l;se<l+f;se++){let he=Q[se];S.delete(he,i.OPERATION.DELETE),this.deletedIndexes[he]=!0}}else f=0;if(ce>0){if(ce>f)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let se=0;se<ce;se++){let he=(Q[l]??N)+se;S.indexedOperation(he,this.deletedIndexes[he]?i.OPERATION.DELETE_AND_ADD:i.OPERATION.ADD),m[se][c]?.setParent(this,S.root,he)}}return f>ce&&S.shiftAllChangeIndexes(-(f-ce),Q[l+ce]),S.filteredChanges!==void 0?S.root?.enqueueChangeTree(S,"filteredChanges"):S.root?.enqueueChangeTree(S,"changes"),this.items.splice(l,f,...m)}unshift(...l){let f=this[c];return f.shiftChangeIndexes(l.length),f.isFiltered?k(f.filteredChanges,this.items.length):k(f.allChanges,this.items.length),l.forEach((m,S)=>{f.change(S,i.OPERATION.ADD)}),this.tmpItems.unshift(...l),this.items.unshift(...l)}indexOf(l,f){return this.items.indexOf(l,f)}lastIndexOf(l,f=this.length-1){return this.items.lastIndexOf(l,f)}every(l,f){return this.items.every(l,f)}some(l,f){return this.items.some(l,f)}forEach(l,f){return this.items.forEach(l,f)}map(l,f){return this.items.map(l,f)}filter(l,f){return this.items.filter(l,f)}reduce(l,f){return this.items.reduce(l,f)}reduceRight(l,f){return this.items.reduceRight(l,f)}find(l,f){return this.items.find(l,f)}findIndex(l,f){return this.items.findIndex(l,f)}fill(l,f,m){throw new Error("ArraySchema#fill() not implemented")}copyWithin(l,f,m){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return Kt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(l,f){return this.items.includes(l,f)}flatMap(l,f){throw new Error("ArraySchema#flatMap() is not supported.")}flat(l){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...l){return this.items.findLastIndex.apply(this.items,arguments)}with(l,f){let m=this.items.slice();return l<0&&(l+=this.length),m[l]=f,new Kt(...m)}toReversed(){return this.items.slice().reverse()}toSorted(l){return this.items.slice().sort(l)}toSpliced(l,f,...m){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(l=>{let f=this.items.length;for(;f!=0;){let m=Math.floor(Math.random()*f);f--,[this[f],this[m]]=[this[m],this[f]]}})}move(l){return this.isMovingItems=!0,l(this),this.isMovingItems=!1,this}[a](l,f=!1){return f?this.items[l]:this.deletedIndexes[l]?this.items[l]:this.tmpItems[l]||this.items[l]}[h](l){this.items[l]=void 0,this.tmpItems[l]=void 0}[d](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[p](){this.items=this.items.filter(l=>l!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(l=>typeof l.toJSON=="function"?l.toJSON():l)}clone(l){let f;return l?(f=new Kt,f.push(...this.items)):f=new Kt(...this.map(m=>m[c]?m.clone():m)),f}}ae("array",{constructor:Kt});var di,Js;class yn{static{this[di]=ge}static{this[Js]=xn}static[(di=s,Js=r,o)](l,f,m){return!m||typeof l[u]=="string"||m.isChangeTreeVisible((l[a](f)??l.deletedItems[f])[c])}static is(l){return l.map!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};let f=new fe(this);if(f.indexes={},Object.defineProperty(this,c,{value:f,enumerable:!1,writable:!0}),l)if(l instanceof Map||l instanceof yn)l.forEach((m,S)=>this.set(S,m));else for(let m in l)this.set(m,l[m]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return yn}set(l,f){if(f==null)throw new Error(`MapSchema#set('${l}', ${f}): trying to set ${f} value on '${l}'.`);typeof f=="object"&&this[u]&&vs(f,this[u],this,l),l=l.toString();let m=this[c],S=f[c]!==void 0,N,z;if(typeof m.indexes[l]<"u"){N=m.indexes[l],z=i.OPERATION.REPLACE;let ce=this.$items.get(l);if(ce===f)return;S&&(z=i.OPERATION.DELETE_AND_ADD,ce!==void 0&&ce[c].root?.remove(ce[c])),this.deletedItems[N]&&delete this.deletedItems[N]}else N=m.indexes[y]??0,z=i.OPERATION.ADD,this.$indexes.set(N,l),m.indexes[l]=N,m.indexes[y]=N+1;return this.$items.set(l,f),m.change(N,z),S&&f[c].setParent(this,m.root,N),this}get(l){return this.$items.get(l)}delete(l){if(!this.$items.has(l))return!1;let f=this[c].indexes[l];return this.deletedItems[f]=this[c].delete(f),this.$items.delete(l)}clear(){let l=this[c];l.discard(!0),l.indexes={},l.forEachChild((f,m)=>{l.root?.remove(f)}),this.$indexes.clear(),this.$items.clear(),l.operation(i.OPERATION.CLEAR)}has(l){return this.$items.has(l)}forEach(l){this.$items.forEach(l)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(l,f){this.$indexes.set(l,f)}getIndex(l){return this.$indexes.get(l)}[a](l){return this.$items.get(this.$indexes.get(l))}[h](l){let f=this.$indexes.get(l);this.$items.delete(f),this.$indexes.delete(l)}[d](){let l=this[c];for(let f in this.deletedItems){let m=parseInt(f),S=this.$indexes.get(m);delete l.indexes[S],this.$indexes.delete(m)}this.deletedItems={}}toJSON(){let l={};return this.forEach((f,m)=>{l[m]=typeof f.toJSON=="function"?f.toJSON():f}),l}clone(l){let f;return l?f=Object.assign(new yn,this):(f=new yn,this.forEach((m,S)=>{m[c]?f.set(S,m.clone()):f.set(S,m)})),f}}ae("map",{constructor:yn});var zr,Ss;class pi{static{this[zr]=ge}static{this[Ss]=xn}static[(zr=s,Ss=r,o)](l,f,m){return!m||typeof l[u]=="string"||m.isChangeTreeVisible((l[a](f)??l.deletedItems[f])[c])}static is(l){return l.collection!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[c]=new fe(this),this[c].indexes={},l&&l.forEach(f=>this.add(f)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(l){let f=this.$refId++;return l[c]!==void 0&&l[c].setParent(this,this[c].root,f),this[c].indexes[f]=f,this.$indexes.set(f,f),this.$items.set(f,l),this[c].change(f),f}at(l){let f=Array.from(this.$items.keys())[l];return this.$items.get(f)}entries(){return this.$items.entries()}delete(l){let f=this.$items.entries(),m,S;for(;(S=f.next())&&!S.done;)if(l===S.value[1]){m=S.value[0];break}return m===void 0?!1:(this.deletedItems[m]=this[c].delete(m),this.$indexes.delete(m),this.$items.delete(m))}clear(){let l=this[c];l.discard(!0),l.indexes={},l.forEachChild((f,m)=>{l.root?.remove(f)}),this.$indexes.clear(),this.$items.clear(),l.operation(i.OPERATION.CLEAR)}has(l){return Array.from(this.$items.values()).some(f=>f===l)}forEach(l){this.$items.forEach((f,m,S)=>l(f,m,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(l,f){this.$indexes.set(l,f)}getIndex(l){return this.$indexes.get(l)}[a](l){return this.$items.get(this.$indexes.get(l))}[h](l){let f=this.$indexes.get(l);this.$items.delete(f),this.$indexes.delete(l)}[d](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){let l=[];return this.forEach((f,m)=>{l.push(typeof f.toJSON=="function"?f.toJSON():f)}),l}clone(l){let f;return l?f=Object.assign(new pi,this):(f=new pi,this.forEach(m=>{m[c]?f.add(m.clone()):f.add(m)})),f}}ae("collection",{constructor:pi});var bs,Vr;class mi{static{this[bs]=ge}static{this[Vr]=xn}static[(bs=s,Vr=r,o)](l,f,m){return!m||typeof l[u]=="string"||m.visible.has((l[a](f)??l.deletedItems[f])[c])}static is(l){return l.set!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[c]=new fe(this),this[c].indexes={},l&&l.forEach(f=>this.add(f)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(l){if(this.has(l))return!1;let f=this.$refId++;l[c]!==void 0&&l[c].setParent(this,this[c].root,f);let m=this[c].indexes[f]?.op??i.OPERATION.ADD;return this[c].indexes[f]=f,this.$indexes.set(f,f),this.$items.set(f,l),this[c].change(f,m),f}entries(){return this.$items.entries()}delete(l){let f=this.$items.entries(),m,S;for(;(S=f.next())&&!S.done;)if(l===S.value[1]){m=S.value[0];break}return m===void 0?!1:(this.deletedItems[m]=this[c].delete(m),this.$indexes.delete(m),this.$items.delete(m))}clear(){let l=this[c];l.discard(!0),l.indexes={},this.$indexes.clear(),this.$items.clear(),l.operation(i.OPERATION.CLEAR)}has(l){let f=this.$items.values(),m=!1,S;for(;(S=f.next())&&!S.done;)if(l===S.value){m=!0;break}return m}forEach(l){this.$items.forEach((f,m,S)=>l(f,m,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(l,f){this.$indexes.set(l,f)}getIndex(l){return this.$indexes.get(l)}[a](l){return this.$items.get(this.$indexes.get(l))}[h](l){let f=this.$indexes.get(l);this.$items.delete(f),this.$indexes.delete(l)}[d](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){let l=[];return this.forEach((f,m)=>{l.push(typeof f.toJSON=="function"?f.toJSON():f)}),l}clone(l){let f;return l?f=Object.assign(new mi,this):(f=new mi,this.forEach(m=>{m[c]?f.add(m.clone()):f.add(m)})),f}}ae("set",{constructor:mi});let Zn=-1;function Cl(M){return Fe.register(M),M}function Zo(M=Zn){return function(l,f){let m=l.constructor,N=Object.getPrototypeOf(m)[Symbol.metadata],z=m[Symbol.metadata]??=Object.assign({},m[Symbol.metadata],N??Object.create(null));ke.setTag(z,f,M)}}function Ln(M,l){return function(f,m){let S=f.constructor;if(!M)throw new Error(`${S.name}: @type() reference provided for "${m}" is undefined. Make sure you don't have any circular dependencies.`);M=be(M),Fe.register(S);let z=Object.getPrototypeOf(S)[Symbol.metadata],ce=ke.initialize(S),Q=ce[m];if(ce[Q]!==void 0){if(ce[Q].deprecated)return;if(ce[Q].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${m}' definition on '${S.name}'.
Check @type() annotation`)}catch(se){let he=se.stack.split(`
`)[4].trim();throw new Error(`${se.message} ${he}`)}}else Q=ce[y]??(z&&z[y])??-1,Q++;if(l&&l.manual)ke.addField(ce,Q,m,M,{enumerable:!0,configurable:!0,writable:!0});else{let se=typeof Object.keys(M)[0]=="string"&&de(Object.keys(M)[0]),he=se?Object.values(M)[0]:M;ke.addField(ce,Q,m,M,T(`_${m}`,Q,he,se))}}}function T(M,l,f,m){return{get:function(){return this[M]},set:function(S){let N=this[M]??void 0;if(S!==N){if(S!=null){m?(m.constructor===Kt&&!(S instanceof Kt)&&(S=new Kt(...S)),m.constructor===yn&&!(S instanceof yn)&&(S=new yn(S)),S[u]=f):typeof f!="string"?vs(S,f,this,M.substring(1)):Rl(S,f,this,M.substring(1));let z=this[c];N!==void 0&&N[c]?(z.root?.remove(N[c]),this.constructor[n](z,l,i.OPERATION.DELETE_AND_ADD)):this.constructor[n](z,l,i.OPERATION.ADD),S[c]?.setParent(this,z.root,l)}else N!==void 0&&this[c].delete(l);this[M]=S}},enumerable:!0,configurable:!0}}function q(M=!0){return function(l,f){let m=l.constructor,N=Object.getPrototypeOf(m)[Symbol.metadata],z=m[Symbol.metadata]??=Object.assign({},m[Symbol.metadata],N??Object.create(null)),ce=z[f];z[ce].deprecated=!0,M&&(z[g]??={},z[g][f]={get:function(){throw new Error(`${f} is deprecated.`)},set:function(Q){},enumerable:!1,configurable:!0}),Object.defineProperty(z,ce,{value:z[ce],enumerable:!1,configurable:!0})}}function ne(M,l,f){for(let m in l)Ln(l[m],f)(M.prototype,m);return M}function j(M,l,f=Me){let m={},S={},N={},z={};for(let he in M){let oe=M[he];typeof oe=="object"?(oe.view!==void 0&&(z[he]=typeof oe.view=="boolean"?Zn:oe.view),m[he]=be(oe),Object.prototype.hasOwnProperty.call(oe,"default")?N[he]=oe.default:Array.isArray(oe)||oe.array!==void 0?N[he]=new Kt:oe.map!==void 0?N[he]=new yn:oe.collection!==void 0?N[he]=new pi:oe.set!==void 0?N[he]=new mi:oe.type!==void 0&&Me.is(oe.type)&&(!oe.type.prototype.initialize||oe.type.prototype.initialize.length===0)&&(N[he]=new oe.type)):typeof oe=="function"?Me.is(oe)?((!oe.prototype.initialize||oe.prototype.initialize.length===0)&&(N[he]=new oe),m[he]=be(oe)):S[he]=oe:m[he]=be(oe)}let ce=()=>{let he={};for(let oe in N){let Be=N[oe];Be&&typeof Be.clone=="function"?he[oe]=Be.clone():he[oe]=Be}return he},Q=he=>{let oe=Object.keys(m),Be={};for(let Le in he)oe.includes(Le)||(Be[Le]=he[Le]);return Be},se=ke.setFields(class extends f{constructor(...he){S.initialize&&typeof S.initialize=="function"?(super(Object.assign({},ce(),Q(he[0]||{}))),new.target===se&&S.initialize.apply(this,he)):super(Object.assign({},ce(),he[0]||{}))}},m);se._getDefaultValues=ce,Object.assign(se.prototype,S);for(let he in z)Zo(z[he])(se.prototype,he);return l&&Object.defineProperty(se,"name",{value:l}),se.extends=(he,oe)=>j(he,oe,se),se}function Z(M){return new Array(M).fill(0).map((l,f)=>f===M-1?"\u2514\u2500 ":"   ").join("")}function De(M){let l=M[c].root,f={ops:{},refs:[]},m=l.changes.next;for(;m;){let S=m.changeTree;if(S===void 0){m=m.next;continue}let N=S.indexedOperations;f.refs.push(`refId#${S.refId}`);for(let z in N){let ce=N[z],Q=i.OPERATION[ce];f.ops[Q]||(f.ops[Q]=0),f.ops[i.OPERATION[ce]]++}m=m.next}return f}var ze,Ie;class Me{static{this[ze]=Ne}static{this[Ie]=Et}static initialize(l){Object.defineProperty(l,c,{value:new fe(l),enumerable:!1,writable:!0}),Object.defineProperties(l,l.constructor[Symbol.metadata]?.[g]||{})}static is(l){return typeof l[Symbol.metadata]=="object"}static[(ze=s,Ie=r,n)](l,f,m=i.OPERATION.ADD){l.change(f,m)}static[o](l,f,m){let N=l.constructor[Symbol.metadata][f]?.tag;if(m===void 0)return N===void 0;if(N===void 0)return!0;if(N===Zn)return m.isChangeTreeVisible(l[c]);{let z=m.tags?.get(l[c]);return z&&z.has(N)}}constructor(l){Me.initialize(this),l&&Object.assign(this,l)}assign(l){return Object.assign(this,l),this}setDirty(l,f){let m=this.constructor[Symbol.metadata];this[c].change(m[m[l]].index,f)}clone(){let l=Object.create(this.constructor.prototype);Me.initialize(l);let f=this.constructor[Symbol.metadata];for(let m in f){let S=f[m].name;typeof this[S]=="object"&&typeof this[S]?.clone=="function"?l[S]=this[S].clone():l[S]=this[S]}return l}toJSON(){let l={},f=this.constructor[Symbol.metadata];for(let m in f){let S=f[m],N=S.name;!S.deprecated&&this[N]!==null&&typeof this[N]<"u"&&(l[N]=typeof this[N].toJSON=="function"?this[N].toJSON():this[N])}return l}discardAllChanges(){this[c].discardAll()}[a](l){let f=this.constructor[Symbol.metadata];return this[f[l].name]}[h](l){let f=this.constructor[Symbol.metadata];this[f[l].name]=void 0}static debugRefIds(l,f=!1,m=0,S,N=""){let z=f?` - ${JSON.stringify(l.toJSON())}`:"",ce=l[c],Q=S?S.root.refIds.get(l):ce.refId,se=S?S.root:ce.root,he=se?.refCount?.[Q]>1?` [\xD7${se.refCount[Q]}]`:"",oe=`${Z(m)}${N}${l.constructor.name} (refId: ${Q})${he}${z}
`;return ce.forEachChild((Be,Le)=>{let Ee=Le;typeof Le=="number"&&l.$indexes&&(Ee=l.$indexes.get(Le)??Le);let ye=l.forEach!==void 0&&Ee!==void 0?`["${Ee}"]: `:"";oe+=this.debugRefIds(Be.ref,f,m+1,S,ye)}),oe}static debugRefIdEncodingOrder(l,f="allChanges"){let m=[],S=l[c].root[f].next;for(;S;)S.changeTree&&m.push(S.changeTree.refId),S=S.next;return m}static debugRefIdsFromDecoder(l){return this.debugRefIds(l.state,!1,0,l)}static debugChanges(l,f=!1){let m=l[c],S=f?m.allChanges:m.changes,N=f?"allChanges":"changes",z=`${l.constructor.name} (${m.refId}) -> .${N}:
`;function ce(Q){Q.operations.filter(se=>se).forEach(se=>{let he=m.indexedOperations[se];z+=`- [${se}]: ${i.OPERATION[he]} (${JSON.stringify(m.getValue(Number(se),f))})
`})}return ce(S),!f&&m.filteredChanges&&m.filteredChanges.operations.filter(Q=>Q).length>0&&(z+=`${l.constructor.name} (${m.refId}) -> .filteredChanges:
`,ce(m.filteredChanges)),f&&m.allFilteredChanges&&m.allFilteredChanges.operations.filter(Q=>Q).length>0&&(z+=`${l.constructor.name} (${m.refId}) -> .allFilteredChanges:
`,ce(m.allFilteredChanges)),z}static debugChangesDeep(l,f="changes"){let m="",S=l[c],N=S.root,z=new Map,ce=[],Q=0;for(let[he,oe]of Object.entries(N[f])){let Be=N.changeTrees[he];if(!Be)continue;let Le=!1,Ee=[],ye=Be.parent?.[c];if(Be===S)Le=!0;else for(;ye!==void 0;){if(Ee.push(ye),ye.ref===l){Le=!0;break}ye=ye.parent?.[c]}Le&&(ce.push(Be.refId),Q+=Object.keys(oe).length,z.set(Be,Ee.reverse()))}m+=`---
`,m+=`root refId: ${S.refId}
`,m+=`Total instances: ${ce.length} (refIds: ${ce.join(", ")})
`,m+=`Total changes: ${Q}
`,m+=`---
`;let se=new WeakSet;for(let[he,oe]of z.entries()){oe.forEach((He,Vt)=>{se.has(He)||(m+=`${Z(Vt)}${He.ref.constructor.name} (refId: ${He.refId})
`,se.add(He))});let Be=he.indexedOperations,Le=oe.length,Ee=Z(Le),ye=Le>0?`(${he.parentIndex}) `:"";m+=`${Ee}${ye}${he.ref.constructor.name} (refId: ${he.refId}) - changes: ${Object.keys(Be).length}
`;for(let He in Be){let Vt=Be[He];m+=`${Z(Le+1)}${i.OPERATION[Vt]}: ${He}
`}}return`${m}`}}function Ve(M,l,f,m){var S=arguments.length,N=S<3?l:m===null?m=Object.getOwnPropertyDescriptor(l,f):m,z;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")N=Reflect.decorate(M,l,f,m);else for(var ce=M.length-1;ce>=0;ce--)(z=M[ce])&&(N=(S<3?z(N):S>3?z(l,f,N):z(l,f))||N);return S>3&&N&&Object.defineProperty(l,f,N),N}typeof SuppressedError=="function"&&SuppressedError;class it{constructor(l){this.types=l,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Ze(),this.allFilteredChanges=Ze(),this.changes=Ze(),this.filteredChanges=Ze()}getNextUniqueId(){return this.nextUniqueId++}add(l){l.refId===void 0&&(l.refId=this.getNextUniqueId());let f=this.changeTrees[l.refId]===void 0;f&&(this.changeTrees[l.refId]=l);let m=this.refCount[l.refId];if(m===0){let S=l.allChanges.operations,N=S.length;for(;N--;)l.indexedOperations[S[N]]=i.OPERATION.ADD,k(l.changes,N)}return this.refCount[l.refId]=(m||0)+1,f}remove(l){let f=this.refCount[l.refId]-1;return f<=0?(l.root=void 0,delete this.changeTrees[l.refId],this.removeChangeFromChangeSet("allChanges",l),this.removeChangeFromChangeSet("changes",l),l.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",l),this.removeChangeFromChangeSet("filteredChanges",l)),this.refCount[l.refId]=0,l.forEachChild((m,S)=>{m.removeParent(l.ref)&&(m.parentChain===void 0||m.parentChain&&this.refCount[m.refId]>0?this.remove(m):m.parentChain&&this.moveNextToParent(m))})):(this.refCount[l.refId]=f,this.recursivelyMoveNextToParent(l)),f}recursivelyMoveNextToParent(l){this.moveNextToParent(l),l.forEachChild((f,m)=>this.recursivelyMoveNextToParent(f))}moveNextToParent(l){l.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",l),this.moveNextToParentInChangeTreeList("allFilteredChanges",l)):(this.moveNextToParentInChangeTreeList("changes",l),this.moveNextToParentInChangeTreeList("allChanges",l))}moveNextToParentInChangeTreeList(l,f){let m=this[l],S=f[l].queueRootNode;if(!S)return;let N=f.parent;if(!N||!N[c])return;let z=N[c][l]?.queueRootNode;if(!z||z===S)return;let ce=z.position;S.position>ce||(S.prev?S.prev.next=S.next:m.next=S.next,S.next?S.next.prev=S.prev:m.tail=S.prev,S.prev=z,S.next=z.next,z.next?z.next.prev=S:m.tail=S,z.next=S,this.updatePositionsAfterMove(m,S,ce+1))}enqueueChangeTree(l,f,m=l[f].queueRootNode){m||(l[f].queueRootNode=this.addToChangeTreeList(this[f],l))}addToChangeTreeList(l,f){let m={changeTree:f,next:void 0,prev:void 0,position:l.tail?l.tail.position+1:0};return l.next?(m.prev=l.tail,l.tail.next=m,l.tail=m):(l.next=m,l.tail=m),m}updatePositionsAfterRemoval(l,f){let m=l.next,S=0;for(;m;)S>=f&&(m.position=S),m=m.next,S++}updatePositionsAfterMove(l,f,m){let S=l.next,N=0;for(;S;)S.position=N,S=S.next,N++}removeChangeFromChangeSet(l,f){let m=this[l],S=f[l].queueRootNode;if(S&&S.changeTree===f){let N=S.position;return S.prev?S.prev.next=S.next:m.next=S.next,S.next?S.next.prev=S.prev:m.tail=S.prev,this.updatePositionsAfterRemoval(m,N),f[l].queueRootNode=void 0,!0}return!1}}class st{static{this.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024}constructor(l){this.sharedBuffer=Buffer.allocUnsafe(st.BUFFER_SIZE),this.context=Fe.cache(l.constructor),this.root=new it(this.context),this.setState(l)}setState(l){this.state=l,this.state[c].setRoot(this.root)}encode(l={offset:0},f,m=this.sharedBuffer,S="changes",N=S==="allChanges",z=l.offset){let ce=f!==void 0,Q=this.state[c],se=this.root[S];for(;se=se.next;){let he=se.changeTree;if(ce){if(!f.isChangeTreeVisible(he)){f.invisible.add(he);continue}f.invisible.delete(he)}let oe=he[S],Be=he.ref,Le=oe.operations.length;if(Le===0)continue;let Ee=Be.constructor,ye=Ee[s],He=Ee[o],Vt=Ee[Symbol.metadata];(ce||l.offset>z||he!==Q)&&(m[l.offset++]=255,le.number(m,he.refId,l));for(let Ht=0;Ht<Le;Ht++){let Nn=oe.operations[Ht];if(Nn<0){m[l.offset++]=Math.abs(Nn)&255;continue}let Hn=N?i.OPERATION.ADD:he.indexedOperations[Nn];Nn===void 0||Hn===void 0||He&&!He(Be,Nn,f)||ye(this,m,he,Nn,Hn,l,N,ce,Vt)}}if(l.offset>m.byteLength){let he=Math.ceil(l.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(he/1024)} * 1024; // ${Math.round(he/1024)} KB
`),m=Buffer.alloc(he,m),m===this.sharedBuffer&&(this.sharedBuffer=m),this.encode({offset:z},f,m,S,N)}else return m.subarray(0,l.offset)}encodeAll(l={offset:0},f=this.sharedBuffer){return this.encode(l,void 0,f,"allChanges",!0)}encodeAllView(l,f,m,S=this.sharedBuffer){let N=m.offset;return this.encode(m,l,S,"allFilteredChanges",!0,N),Buffer.concat([S.subarray(0,f),S.subarray(N,m.offset)])}encodeView(l,f,m,S=this.sharedBuffer){let N=m.offset;for(let[z,ce]of l.changes){let Q=this.root.changeTrees[z];if(Q===void 0){l.changes.delete(z);continue}let se=Object.keys(ce);if(se.length===0)continue;let oe=Q.ref.constructor,Be=oe[s],Le=oe[Symbol.metadata];S[m.offset++]=255,le.number(S,Q.refId,m);for(let Ee=0,ye=se.length;Ee<ye;Ee++){let He=Number(se[Ee]),Ht=Q.ref[a](He)!==void 0&&ce[He]||i.OPERATION.DELETE;Be(this,S,Q,He,Ht,m,!1,!0,Le)}}return l.changes.clear(),this.encode(m,l,S,"filteredChanges",!1,N),Buffer.concat([S.subarray(0,f),S.subarray(N,m.offset)])}discardChanges(){let l=this.root.changes.next;for(;l;)l.changeTree.endEncode("changes"),l=l.next;for(this.root.changes=Ze(),l=this.root.filteredChanges.next;l;)l.changeTree.endEncode("filteredChanges"),l=l.next;this.root.filteredChanges=Ze()}tryEncodeTypeId(l,f,m,S){let N=this.context.getTypeId(f),z=this.context.getTypeId(m);if(z===void 0){console.warn(`@colyseus/schema WARNING: Class "${m.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}N!==z&&(l[S.offset++]=213,le.number(l,z,S))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}}function $e(M,l){if(l===-1||l>=M.length)return!1;let f=M.length-1;for(let m=l;m<f;m++)M[m]=M[m+1];return M.length=f,!0}class St extends Error{constructor(l){super(l),this.name="DecodingWarning"}}class Bt{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(l,f,m=!0){this.refs.set(l,f),this.refIds.set(f,l),m&&(this.refCount[l]=(this.refCount[l]||0)+1),this.deletedRefs.has(l)&&this.deletedRefs.delete(l)}removeRef(l){let f=this.refCount[l];if(f===void 0){try{throw new St("trying to remove refId that doesn't exist: "+l)}catch(m){console.warn(m)}return}if(f===0){try{let m=this.refs.get(l);throw new St(`trying to remove refId '${l}' with 0 refCount (${m.constructor.name}: ${JSON.stringify(m)})`)}catch(m){console.warn(m)}return}(this.refCount[l]=f-1)<=0&&this.deletedRefs.add(l)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(l=>{if(this.refCount[l]>0)return;let f=this.refs.get(l);if(f.constructor[Symbol.metadata]!==void 0){let m=f.constructor[Symbol.metadata];for(let S in m){let N=m[S].name,z=typeof f[N]=="object"&&this.refIds.get(f[N]);z&&!this.deletedRefs.has(z)&&this.removeRef(z)}}else typeof f[u]=="function"&&Array.from(f.values()).forEach(m=>{let S=this.refIds.get(m);this.deletedRefs.has(S)||this.removeRef(S)});this.refs.delete(l),delete this.refCount[l],delete this.callbacks[l]}),this.deletedRefs.clear()}addCallback(l,f,m){if(l===void 0){let S=typeof f=="number"?i.OPERATION[f]:f;throw new Error(`Can't addCallback on '${S}' (refId is undefined)`)}return this.callbacks[l]||(this.callbacks[l]={}),this.callbacks[l][f]||(this.callbacks[l][f]=[]),this.callbacks[l][f].push(m),()=>this.removeCallback(l,f,m)}removeCallback(l,f,m){let S=this.callbacks?.[l]?.[f]?.indexOf(m);S!==void 0&&S!==-1&&$e(this.callbacks[l][f],S)}}class Pt{constructor(l,f){this.currentRefId=0,this.setState(l),this.context=f||new Fe(l.constructor)}setState(l){this.state=l,this.root=new Bt,this.root.addRef(0,l)}decode(l,f={offset:0},m=this.state){let S=[],N=this.root,z=l.byteLength,ce=m.constructor[r];for(this.currentRefId=0;f.offset<z;){if(l[f.offset]==255){f.offset++,m[p]?.();let se=ie.number(l,f),he=N.refs.get(se);he?(m=he,ce=m.constructor[r],this.currentRefId=se):(console.error(`"refId" not found: ${se}`,{previousRef:m,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(l,f,z));continue}if(ce(this,l,f,m,S)===Ge){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(l,f,z);continue}}return m[p]?.(),this.triggerChanges?.(S),N.garbageCollectDeletedRefs(),S}skipCurrentStructure(l,f,m){let S={offset:f.offset};for(;f.offset<m&&!(l[f.offset]===255&&(S.offset=f.offset+1,this.root.refs.has(ie.number(l,S))));)f.offset++}getInstanceType(l,f,m){let S;if(l[f.offset]===213){f.offset++;let N=ie.number(l,f);S=this.context.get(N)}return S||m}createInstanceOfType(l){return new l}removeChildRefs(l,f){let m=typeof l[u]!="string",S=this.root.refIds.get(l);l.forEach((N,z)=>{f.push({ref:l,refId:S,op:i.OPERATION.DELETE,field:z,value:void 0,previousValue:N}),m&&this.root.removeRef(this.root.refIds.get(N))})}}class xt extends Me{}Ve([Ln("string")],xt.prototype,"name",void 0),Ve([Ln("string")],xt.prototype,"type",void 0),Ve([Ln("number")],xt.prototype,"referencedType",void 0);class kt extends Me{constructor(){super(...arguments),this.fields=new Kt}}Ve([Ln("number")],kt.prototype,"id",void 0),Ve([Ln("number")],kt.prototype,"extendsId",void 0),Ve([Ln([xt])],kt.prototype,"fields",void 0);class Ue extends Me{constructor(){super(...arguments),this.types=new Kt}static encode(l,f={offset:0}){let m=l.context,S=new Ue,N=new st(S),z=m.schemas.get(l.state.constructor);z>0&&(S.rootType=z);let ce=new Set,Q={},se=oe=>{if(oe.extendsId===void 0||ce.has(oe.extendsId)){ce.add(oe.id),S.types.push(oe);let Be=Q[oe.id];Be!==void 0&&(delete Q[oe.id],Be.forEach(Le=>se(Le)))}else Q[oe.extendsId]===void 0&&(Q[oe.extendsId]=[]),Q[oe.extendsId].push(oe)};m.schemas.forEach((oe,Be)=>{let Le=new kt;Le.id=Number(oe);let Ee=Object.getPrototypeOf(Be);Ee!==Me&&(Le.extendsId=m.schemas.get(Ee));let ye=Be[Symbol.metadata];if(ye!==Ee[Symbol.metadata])for(let He in ye){let Vt=Number(He),Ht=ye[Vt].name;if(!Object.prototype.hasOwnProperty.call(ye,Ht))continue;let Nn=new xt;Nn.name=Ht;let Hn,Zi=ye[Vt];if(typeof Zi.type=="string")Hn=Zi.type;else{let jo;Me.is(Zi.type)?(Hn="ref",jo=Zi.type):(Hn=Object.keys(Zi.type)[0],typeof Zi.type[Hn]=="string"?Hn+=":"+Zi.type[Hn]:jo=Zi.type[Hn]),Nn.referencedType=jo?m.getTypeId(jo):-1}Nn.type=Hn,Le.fields.push(Nn)}se(Le)});for(let oe in Q)Q[oe].forEach(Be=>S.types.push(Be));return N.encodeAll(f).slice(0,f.offset)}static decode(l,f){let m=new Ue;new Pt(m).decode(l,f);let N=new Fe;m.types.forEach(Q=>{let se=N.get(Q.extendsId)??Me,he=class extends se{};Fe.register(he),N.add(he,Q.id)},{});let z=(Q,se,he)=>{se.fields.forEach((oe,Be)=>{let Le=he+Be;if(oe.referencedType!==void 0){let Ee=oe.type,ye=N.get(oe.referencedType);if(!ye){let He=oe.type.split(":");Ee=He[0],ye=He[1]}Ee==="ref"?ke.addField(Q,Le,oe.name,ye):ke.addField(Q,Le,oe.name,{[Ee]:ye})}else ke.addField(Q,Le,oe.name,oe.type)})};m.types.forEach(Q=>{let se=N.get(Q.id),he=ke.initialize(se),oe=[],Be=Q;do oe.push(Be),Be=m.types.find(Ee=>Ee.id===Be.extendsId);while(Be);let Le=0;oe.reverse().forEach(Ee=>{z(he,Ee,Le),Le+=Ee.fields.length})});let ce=new(N.get(m.rootType||0));return new Pt(ce,N)}}Ve([Ln([kt])],Ue.prototype,"types",void 0),Ve([Ln("number")],Ue.prototype,"rootType",void 0);function vn(M){let l=M.root,f=l.callbacks,m=new WeakMap,S;M.triggerChanges=function(ce){let Q=new Set;for(let se=0,he=ce.length;se<he;se++){let oe=ce[se],Be=oe.refId,Le=oe.ref,Ee=f[Be];if(Ee){if((oe.op&i.OPERATION.DELETE)===i.OPERATION.DELETE&&oe.previousValue instanceof Me){let ye=f[l.refIds.get(oe.previousValue)]?.[i.OPERATION.DELETE];for(let He=ye?.length-1;He>=0;He--)ye[He]()}if(Le instanceof Me){if(!Q.has(Be)){let ye=Ee?.[i.OPERATION.REPLACE];for(let He=ye?.length-1;He>=0;He--)ye[He]()}if(Ee.hasOwnProperty(oe.field)){let ye=Ee[oe.field];for(let He=ye?.length-1;He>=0;He--)ye[He](oe.value,oe.previousValue)}}else{if((oe.op&i.OPERATION.DELETE)===i.OPERATION.DELETE){if(oe.previousValue!==void 0){let ye=Ee[i.OPERATION.DELETE];for(let He=ye?.length-1;He>=0;He--)ye[He](oe.previousValue,oe.dynamicIndex??oe.field)}if((oe.op&i.OPERATION.ADD)===i.OPERATION.ADD){let ye=Ee[i.OPERATION.ADD];for(let He=ye?.length-1;He>=0;He--)ye[He](oe.value,oe.dynamicIndex??oe.field)}}else if((oe.op&i.OPERATION.ADD)===i.OPERATION.ADD&&oe.previousValue!==oe.value){let ye=Ee[i.OPERATION.ADD];for(let He=ye?.length-1;He>=0;He--)ye[He](oe.value,oe.dynamicIndex??oe.field)}if(oe.value!==oe.previousValue&&(oe.value!==void 0||oe.previousValue!==void 0)){let ye=Ee[i.OPERATION.REPLACE];for(let He=ye?.length-1;He>=0;He--)ye[He](oe.value,oe.dynamicIndex??oe.field)}}Q.add(Be)}}};function N(ce,Q){let se=Q.instance?.constructor[Symbol.metadata]||ce,he=Q.instance&&typeof Q.instance.forEach=="function"||ce&&typeof ce[Symbol.metadata]>"u";if(se&&!he){let oe=function(Be,Le,Ee,ye){return ye&&Q.instance[Le]!==void 0&&!m.has(S)&&Ee(Q.instance[Le],void 0),l.addCallback(l.refIds.get(Be),Le,Ee)};return new Proxy({listen:function(Le,Ee,ye=!0){if(Q.instance)return oe(Q.instance,Le,Ee,ye);{let He=()=>{};return Q.onInstanceAvailable((Vt,Ht)=>{He=oe(Vt,Le,Ee,ye&&Ht&&!m.has(S))}),()=>He()}},onChange:function(Le){return l.addCallback(l.refIds.get(Q.instance),i.OPERATION.REPLACE,Le)},bindTo:function(Le,Ee){return Ee||(Ee=Object.keys(se).map(ye=>se[ye].name)),l.addCallback(l.refIds.get(Q.instance),i.OPERATION.REPLACE,()=>{Ee.forEach(ye=>Le[ye]=Q.instance[ye])})}},{get(Be,Le){let Ee=se[se[Le]];if(Ee){let ye=Q.instance?.[Le],He=(Vt=>{let Ht=z(Q.instance).listen(Le,(Nn,Hn)=>{Vt(Nn,!1),Ht?.()},!1);l.refIds.get(ye)!==void 0&&Vt(ye,!0)});return N(Ee.type,{instance:l.refIds.get(ye)&&ye,parentInstance:Q.instance,onInstanceAvailable:He})}else return Be[Le]},has(Be,Le){return se[Le]!==void 0},set(Be,Le,Ee){throw new Error("not allowed")},deleteProperty(Be,Le){throw new Error("not allowed")}})}else{let oe=function(Ee,ye,He){return He&&Ee.forEach((Vt,Ht)=>ye(Vt,Ht)),l.addCallback(l.refIds.get(Ee),i.OPERATION.ADD,(Vt,Ht)=>{m.set(ye,!0),S=ye,ye(Vt,Ht),m.delete(ye),S=void 0})},Be=function(Ee,ye){return l.addCallback(l.refIds.get(Ee),i.OPERATION.DELETE,ye)},Le=function(Ee,ye){return l.addCallback(l.refIds.get(Ee),i.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Ee,ye=!0){if(Q.instance)return oe(Q.instance,Ee,ye&&!m.has(S));if(Q.onInstanceAvailable){let He=()=>{};return Q.onInstanceAvailable((Vt,Ht)=>{He=oe(Vt,Ee,ye&&Ht&&!m.has(S))}),()=>He()}},onRemove:function(Ee){if(Q.instance)return Be(Q.instance,Ee);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(He=>{ye=Be(He,Ee)}),()=>ye()}},onChange:function(Ee){if(Q.instance)return Le(Q.instance,Ee);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(He=>{ye=Le(He,Ee)}),()=>ye()}}},{get(Ee,ye){if(!Ee[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Ee[ye]},has(Ee,ye){return Ee[ye]!==void 0},set(Ee,ye,He){throw new Error("not allowed")},deleteProperty(Ee,ye){throw new Error("not allowed")}})}}function z(ce){return N(void 0,{instance:ce})}return z}function gt(M,l){M.triggerChanges=l}class Tn{constructor(l=!1){this.iterable=l,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,l&&(this.items=[])}add(l,f=Zn,m=!0){let S=l?.[c],N=S.parent;if(S){if(!N&&S.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${S.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",l),!1;let z=l.constructor[Symbol.metadata];this.visible.add(S),this.iterable&&m&&this.items.push(l),m&&N&&this.addParentOf(S,f);let ce=this.changes.get(S.refId);ce===void 0&&(ce={},this.changes.set(S.refId,ce));let Q=!1;if(S.forEachChild((se,he)=>{z&&z[he].tag!==void 0&&z[he].tag!==f||this.add(se.ref,f,!1)&&(Q=!0)}),f!==Zn){this.tags||(this.tags=new WeakMap);let se;this.tags.has(S)?se=this.tags.get(S):(se=new Set,this.tags.set(S,se)),se.add(f),z?.[_]?.[f]?.forEach(he=>{S.getChange(he)!==i.OPERATION.DELETE&&(ce[he]=i.OPERATION.ADD)})}else if(!S.isNew||Q){let se=S.filteredChanges!==void 0?S.allFilteredChanges:S.allChanges,he=this.invisible.has(S);for(let oe=0,Be=se.operations.length;oe<Be;oe++){let Le=se.operations[oe];if(Le===void 0)continue;let Ee=S.indexedOperations[Le]??i.OPERATION.ADD,ye=z?.[Le].tag;Ee!==i.OPERATION.DELETE&&(he||ye===void 0||ye===f)&&(ce[Le]=Ee,Q=!0)}}return Q}addParentOf(l,f){let m=l.parent[c],S=l.parentIndex;if(!this.visible.has(m)){this.visible.add(m);let N=m.parent?.[c];N&&N.filteredChanges!==void 0&&this.addParentOf(m,f)}if(m.getChange(S)!==i.OPERATION.DELETE){let N=this.changes.get(m.refId);N===void 0&&(N={},this.changes.set(m.refId,N)),this.tags||(this.tags=new WeakMap);let z;this.tags.has(m)?z=this.tags.get(m):(z=new Set,this.tags.set(m,z)),z.add(f),N[S]=i.OPERATION.ADD}}remove(l,f=Zn,m=!1){let S=l[c];if(!S)return console.warn("StateView#remove(), invalid object:",l),this;this.visible.delete(S),this.iterable&&!m&&$e(this.items,this.items.indexOf(l));let z=S.ref.constructor[Symbol.metadata],ce=this.changes.get(S.refId);if(ce===void 0&&(ce={},this.changes.set(S.refId,ce)),f===Zn){let Q=S.parent;if(Q&&!ke.isValidInstance(Q)&&S.isFiltered){let se=Q[c],he=this.changes.get(se.refId);he===void 0?(he={},this.changes.set(se.refId,he)):he[S.parentIndex]===i.OPERATION.ADD&&this.changes.delete(S.refId),he[S.parentIndex]=i.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(S)}else z?.[x]?.forEach(se=>ce[se]=i.OPERATION.DELETE)}else z?.[_][f].forEach(Q=>ce[Q]=i.OPERATION.DELETE);if(this.tags&&this.tags.has(S)){let Q=this.tags.get(S);f===void 0?this.tags.delete(S):(Q.delete(f),Q.size===0&&this.tags.delete(S))}return this}has(l){return this.visible.has(l[c])}hasTag(l,f=Zn){return this.tags?.get(l[c])?.has(f)??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let l=0,f=this.items.length;l<f;l++)this.remove(this.items[l],Zn,!0);this.items.length=0}isChangeTreeVisible(l){let f=this.visible.has(l);return!f&&l.isVisibilitySharedWithParent&&this.visible.has(l.parent[c])&&(this.visible.add(l),f=!0),f}_recursiveDeleteVisibleChangeTree(l){l.forEachChild(f=>{this.visible.delete(f),this._recursiveDeleteVisibleChangeTree(f)})}}ae("map",{constructor:yn}),ae("array",{constructor:Kt}),ae("set",{constructor:mi}),ae("collection",{constructor:pi}),i.$changes=c,i.$childType=u,i.$decoder=r,i.$deleteByIndex=h,i.$encoder=s,i.$filter=o,i.$getByIndex=a,i.$track=n,i.ArraySchema=Kt,i.ChangeTree=fe,i.CollectionSchema=pi,i.Decoder=Pt,i.Encoder=st,i.MapSchema=yn,i.Metadata=ke,i.Reflection=Ue,i.ReflectionField=xt,i.ReflectionType=kt,i.Schema=Me,i.SetSchema=mi,i.StateView=Tn,i.TypeContext=Fe,i.decode=ie,i.decodeKeyValueOperation=xn,i.decodeSchemaOperation=Et,i.defineCustomTypes=Re,i.defineTypes=ne,i.deprecated=q,i.dumpChanges=De,i.encode=le,i.encodeArray=Xe,i.encodeKeyValueOperation=ge,i.encodeSchemaOperation=Ne,i.entity=Cl,i.getDecoderStateCallbacks=vn,i.getRawChangesCallback=gt,i.registerType=ae,i.schema=j,i.type=Ln,i.view=Zo}))});var mm=Gt(pm=>{"use strict";var dm=(Bo(),Zs(Fo)),Xs=ll(),zu=class{constructor(e){this.events=e,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(e,t={}){let n=t.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(t.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(e,n),this.wt.ready.then(s=>{console.log("WebTransport ready!",s),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(o=>{this.reader=o.value.readable.getReader(),this.writer=o.value.writable.getWriter(),this.sendSeatReservation(t.room.roomId,t.sessionId,t.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(o=>{console.error("failed to read incoming stream",o),console.error("TODO: close the connection")})}).catch(s=>{console.log("WebTransport not ready!",s),this._close()}),this.wt.closed.then(s=>{console.log("WebTransport closed w/ success",s),this.events.onclose({code:s.closeCode,reason:s.reason})}).catch(s=>{console.log("WebTransport closed w/ error",s),this.events.onerror(s),this.events.onclose({code:s.closeCode,reason:s.reason})}).finally(()=>{this._close()})}send(e){let t=Xs.encode.number(this.lengthPrefixBuffer,e.length,{offset:0}),n=new Uint8Array(t+e.length);n.set(this.lengthPrefixBuffer.subarray(0,t),0),n.set(e,t),this.writer.write(n)}sendUnreliable(e){let t=Xs.encode.number(this.lengthPrefixBuffer,e.length,{offset:0}),n=new Uint8Array(t+e.length);n.set(this.lengthPrefixBuffer.subarray(0,t),0),n.set(e,t),this.unreliableWriter.write(n)}close(e,t){try{this.wt.close({closeCode:e,reason:t})}catch(n){console.error(n)}}readIncomingData(){return dm.__awaiter(this,void 0,void 0,function*(){let e;for(;this.isOpen;){try{e=yield this.reader.read();let t=e.value,n={offset:0};do{let s=Xs.decode.number(t,n);this.events.onmessage({data:t.subarray(n.offset,n.offset+s)}),n.offset+=s}while(n.offset<t.length)}catch(t){t.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",t);break}if(e.done)break}})}readIncomingUnreliableData(){return dm.__awaiter(this,void 0,void 0,function*(){let e;for(;this.isOpen;){try{e=yield this.unreliableReader.read();let t=e.value,n={offset:0};do{let s=Xs.decode.number(t,n);this.events.onmessage({data:t.subarray(n.offset,n.offset+s)}),n.offset+=s}while(n.offset<t.length)}catch(t){t.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",t);break}if(e.done)break}})}sendSeatReservation(e,t,n){let s={offset:0},r=[];Xs.encode.string(r,e,s),Xs.encode.string(r,t,s),n&&Xs.encode.string(r,n,s),this.writer.write(new Uint8Array(r).buffer)}_close(){this.isOpen=!1}};pm.H3TransportTransport=zu});var _m=Gt((Aw,gm)=>{"use strict";gm.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}});var ym=Gt(xm=>{"use strict";var ib=_m(),Vu=globalThis.WebSocket||ib,Hu=class{constructor(e){this.events=e}send(e){this.ws.send(e)}sendUnreliable(e){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(e,t){try{this.ws=new Vu(e,{headers:t,protocols:this.protocols})}catch{this.ws=new Vu(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===Vu.OPEN}};xm.WebSocketTransport=Hu});var Sm=Gt(vm=>{"use strict";var sb=mm(),rb=ym(),Gu=class{constructor(e){this.events={},e==="h3"?this.transport=new sb.H3TransportTransport(this.events):this.transport=new rb.WebSocketTransport(this.events)}connect(e,t){this.transport.connect.call(this.transport,e,t)}send(e){this.transport.send(e)}sendUnreliable(e){this.transport.sendUnreliable(e)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}};vm.Connection=Gu});var Wu=Gt(qs=>{"use strict";qs.Protocol=void 0;(function(i){i[i.HANDSHAKE=9]="HANDSHAKE",i[i.JOIN_ROOM=10]="JOIN_ROOM",i[i.ERROR=11]="ERROR",i[i.LEAVE_ROOM=12]="LEAVE_ROOM",i[i.ROOM_DATA=13]="ROOM_DATA",i[i.ROOM_STATE=14]="ROOM_STATE",i[i.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",i[i.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",i[i.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(qs.Protocol||(qs.Protocol={}));qs.ErrorCode=void 0;(function(i){i[i.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",i[i.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",i[i.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",i[i.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",i[i.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",i[i.AUTH_FAILED=4215]="AUTH_FAILED",i[i.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(qs.ErrorCode||(qs.ErrorCode={}))});var qu=Gt(Xu=>{"use strict";var bm={};function ob(i,e){bm[i]=e}function ab(i){let e=bm[i];if(!e)throw new Error("missing serializer: "+i);return e}Xu.getSerializer=ab;Xu.registerSerializer=ob});var $u=Gt(Mm=>{"use strict";var cb=()=>({emit(i,...e){let t=this.events[i]||[];for(let n=0,s=t.length;n<s;n++)t[n](...e)},events:{},on(i,e){var t;return!((t=this.events[i])===null||t===void 0)&&t.push(e)||(this.events[i]=[e]),()=>{var n;this.events[i]=(n=this.events[i])===null||n===void 0?void 0:n.filter(s=>e!==s)}}});Mm.createNanoEvents=cb});var Em=Gt(Yu=>{"use strict";var hl=class{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){let t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}};function lb(){let i=new hl;function e(t){return i.register(t,this===null)}return e.once=t=>{let n=function(...s){t.apply(this,s),i.remove(n)};i.register(n)},e.remove=t=>i.remove(t),e.invoke=(...t)=>i.invoke(...t),e.invokeAsync=(...t)=>i.invokeAsync(...t),e.clear=()=>i.clear(),e}Yu.EventEmitter=hl;Yu.createSignal=lb});var Zu=Gt(Ju=>{"use strict";var ul=ll();function hb(i){try{return ul.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}var Ku=class{setState(e,t){this.decoder.decode(e,t)}getState(){return this.state}patch(e,t){return this.decoder.decode(e,t)}teardown(){this.decoder.root.clearRefs()}handshake(e,t){this.state?(ul.Reflection.decode(e,t),this.decoder=new ul.Decoder(this.state)):(this.decoder=ul.Reflection.decode(e,t),this.state=this.decoder.state)}};Ju.SchemaSerializer=Ku;Ju.getStateCallbacks=hb});function fl(i){try{if(!Rt.trusted&&!_s){let t=_t.sharedLength||0;t<_t.length&&(_t.length=t)}let e;if(Rt.randomAccessStructure&&Pe[X]<64&&Pe[X]>=32&&wm?(e=wm(Pe,X,Kn,Rt),Pe=null,!(i&&i.lazy)&&e&&(e=e.toJSON()),X=Kn):e=$t(),cn&&(X=cn.postBundlePosition,cn=null),_s&&(_t.restoreStructures=null),X==Kn)_t&&_t.restoreStructures&&Cm(),_t=null,Pe=null,Yi&&(Yi=null);else{if(X>Kn)throw new Error("Unexpected end of MessagePack data");if(!_s){let t;try{t=JSON.stringify(e,(n,s)=>typeof s=="bigint"?`${s}n`:s).slice(0,100)}catch(n){t="(JSON view not available "+n+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw _t&&_t.restoreStructures&&Cm(),Vo(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||X>Kn)&&(e.incomplete=!0),e}}function Cm(){for(let i in _t.restoreStructures)_t[i]=_t.restoreStructures[i];_t.restoreStructures=null}function $t(){let i=Pe[X++];if(i<160)if(i<128){if(i<64)return i;{let e=_t[i&63]||Rt.getStructures&&km()[i&63];return e?(e.read||(e.read=sf(e,i&63)),e.read()):i}}else if(i<144)if(i-=128,Rt.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=Hm();n==="__proto__"&&(n="__proto_"),e[n]=$t()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set($t(),$t());return e}else{i-=144;let e=new Array(i);for(let t=0;t<i;t++)e[t]=$t();return Rt.freezeData?Object.freeze(e):e}else if(i<192){let e=i-160;if(Ri>=X)return gs.slice(X-Yn,(X+=e)-Yn);if(Ri==0&&Kn<140){let t=e<16?rf(e):Vm(e);if(t!=null)return t}return nf(e)}else{let e;switch(i){case 192:return null;case 193:return cn?(e=$t(),e>0?cn[1].slice(cn.position1,cn.position1+=e):cn[0].slice(cn.position0,cn.position0-=e)):dl;case 194:return!1;case 195:return!0;case 196:if(e=Pe[X++],e===void 0)throw new Error("Unexpected end of buffer");return ju(e);case 197:return e=pt.getUint16(X),X+=2,ju(e);case 198:return e=pt.getUint32(X),X+=4,ju(e);case 199:return $s(Pe[X++]);case 200:return e=pt.getUint16(X),X+=2,$s(e);case 201:return e=pt.getUint32(X),X+=4,$s(e);case 202:if(e=pt.getFloat32(X),Rt.useFloat32>2){let t=Go[(Pe[X]&127)<<1|Pe[X+1]>>7];return X+=4,(t*e+(e>0?.5:-.5)>>0)/t}return X+=4,e;case 203:return e=pt.getFloat64(X),X+=8,e;case 204:return Pe[X++];case 205:return e=pt.getUint16(X),X+=2,e;case 206:return e=pt.getUint32(X),X+=4,e;case 207:return Rt.int64AsType==="number"?(e=pt.getUint32(X)*4294967296,e+=pt.getUint32(X+4)):Rt.int64AsType==="string"?e=pt.getBigUint64(X).toString():Rt.int64AsType==="auto"?(e=pt.getBigUint64(X),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=pt.getBigUint64(X),X+=8,e;case 208:return pt.getInt8(X++);case 209:return e=pt.getInt16(X),X+=2,e;case 210:return e=pt.getInt32(X),X+=4,e;case 211:return Rt.int64AsType==="number"?(e=pt.getInt32(X)*4294967296,e+=pt.getUint32(X+4)):Rt.int64AsType==="string"?e=pt.getBigInt64(X).toString():Rt.int64AsType==="auto"?(e=pt.getBigInt64(X),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=pt.getBigInt64(X),X+=8,e;case 212:if(e=Pe[X++],e==114)return Om(Pe[X++]&63);{let t=gn[e];if(t)return t.read?(X++,t.read($t())):t.noBuffer?(X++,t()):t(Pe.subarray(X,++X));throw new Error("Unknown extension "+e)}case 213:return e=Pe[X],e==114?(X++,Om(Pe[X++]&63,Pe[X++])):$s(2);case 214:return $s(4);case 215:return $s(8);case 216:return $s(16);case 217:return e=Pe[X++],Ri>=X?gs.slice(X-Yn,(X+=e)-Yn):fb(e);case 218:return e=pt.getUint16(X),X+=2,Ri>=X?gs.slice(X-Yn,(X+=e)-Yn):db(e);case 219:return e=pt.getUint32(X),X+=4,Ri>=X?gs.slice(X-Yn,(X+=e)-Yn):pb(e);case 220:return e=pt.getUint16(X),X+=2,Pm(e);case 221:return e=pt.getUint32(X),X+=4,Pm(e);case 222:return e=pt.getUint16(X),X+=2,Lm(e);case 223:return e=pt.getUint32(X),X+=4,Lm(e);default:if(i>=224)return i-256;if(i===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+i)}}}function sf(i,e){function t(){if(t.count++>Bm){let s=i.read=new Function("r","return function(){return "+(Rt.freezeData?"Object.freeze":"")+"({"+i.map(r=>r==="__proto__"?"__proto_:r()":ub.test(r)?r+":r()":"["+JSON.stringify(r)+"]:r()").join(",")+"})}")($t);return i.highByte===0&&(i.read=Im(e,i.read)),s()}let n={};for(let s=0,r=i.length;s<r;s++){let o=i[s];o==="__proto__"&&(o="__proto_"),n[o]=$t()}return Rt.freezeData?Object.freeze(n):n}return t.count=0,i.highByte===0?Im(e,t):t}function km(){let i=Wm(()=>(Pe=null,Rt.getStructures()));return _t=Rt._mergeStructures(i,_t)}function Ho(i){let e;if(i<16&&(e=rf(i)))return e;if(i>64&&Qu)return Qu.decode(Pe.subarray(X,X+=i));let t=X+i,n=[];for(e="";X<t;){let s=Pe[X++];if((s&128)===0)n.push(s);else if((s&224)===192){let r=Pe[X++]&63;n.push((s&31)<<6|r)}else if((s&240)===224){let r=Pe[X++]&63,o=Pe[X++]&63;n.push((s&31)<<12|r<<6|o)}else if((s&248)===240){let r=Pe[X++]&63,o=Pe[X++]&63,a=Pe[X++]&63,h=(s&7)<<18|r<<12|o<<6|a;h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h)}else n.push(s);n.length>=4096&&(e+=an.apply(String,n),n.length=0)}return n.length>0&&(e+=an.apply(String,n)),e}function Pm(i){let e=new Array(i);for(let t=0;t<i;t++)e[t]=$t();return Rt.freezeData?Object.freeze(e):e}function Lm(i){if(Rt.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=Hm();n==="__proto__"&&(n="__proto_"),e[n]=$t()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set($t(),$t());return e}}function Vm(i){let e=X,t=new Array(i);for(let n=0;n<i;n++){let s=Pe[X++];if((s&128)>0){X=e;return}t[n]=s}return an.apply(String,t)}function rf(i){if(i<4)if(i<2){if(i===0)return"";{let e=Pe[X++];if((e&128)>1){X-=1;return}return an(e)}}else{let e=Pe[X++],t=Pe[X++];if((e&128)>0||(t&128)>0){X-=2;return}if(i<3)return an(e,t);let n=Pe[X++];if((n&128)>0){X-=3;return}return an(e,t,n)}else{let e=Pe[X++],t=Pe[X++],n=Pe[X++],s=Pe[X++];if((e&128)>0||(t&128)>0||(n&128)>0||(s&128)>0){X-=4;return}if(i<6){if(i===4)return an(e,t,n,s);{let r=Pe[X++];if((r&128)>0){X-=5;return}return an(e,t,n,s,r)}}else if(i<8){let r=Pe[X++],o=Pe[X++];if((r&128)>0||(o&128)>0){X-=6;return}if(i<7)return an(e,t,n,s,r,o);let a=Pe[X++];if((a&128)>0){X-=7;return}return an(e,t,n,s,r,o,a)}else{let r=Pe[X++],o=Pe[X++],a=Pe[X++],h=Pe[X++];if((r&128)>0||(o&128)>0||(a&128)>0||(h&128)>0){X-=8;return}if(i<10){if(i===8)return an(e,t,n,s,r,o,a,h);{let c=Pe[X++];if((c&128)>0){X-=9;return}return an(e,t,n,s,r,o,a,h,c)}}else if(i<12){let c=Pe[X++],u=Pe[X++];if((c&128)>0||(u&128)>0){X-=10;return}if(i<11)return an(e,t,n,s,r,o,a,h,c,u);let d=Pe[X++];if((d&128)>0){X-=11;return}return an(e,t,n,s,r,o,a,h,c,u,d)}else{let c=Pe[X++],u=Pe[X++],d=Pe[X++],p=Pe[X++];if((c&128)>0||(u&128)>0||(d&128)>0||(p&128)>0){X-=12;return}if(i<14){if(i===12)return an(e,t,n,s,r,o,a,h,c,u,d,p);{let g=Pe[X++];if((g&128)>0){X-=13;return}return an(e,t,n,s,r,o,a,h,c,u,d,p,g)}}else{let g=Pe[X++],y=Pe[X++];if((g&128)>0||(y&128)>0){X-=14;return}if(i<15)return an(e,t,n,s,r,o,a,h,c,u,d,p,g,y);let E=Pe[X++];if((E&128)>0){X-=15;return}return an(e,t,n,s,r,o,a,h,c,u,d,p,g,y,E)}}}}}function Nm(){let i=Pe[X++],e;if(i<192)e=i-160;else switch(i){case 217:e=Pe[X++];break;case 218:e=pt.getUint16(X),X+=2;break;case 219:e=pt.getUint32(X),X+=4;break;default:throw new Error("Expected string")}return Ho(e)}function ju(i){return Rt.copyBuffers?Uint8Array.prototype.slice.call(Pe,X,X+=i):Pe.subarray(X,X+=i)}function $s(i){let e=Pe[X++];if(gn[e]){let t;return gn[e](Pe.subarray(X,t=X+=i),n=>{X=n;try{return $t()}finally{X=t}})}else throw new Error("Unknown extension type "+e)}function Hm(){let i=Pe[X++];if(i>=160&&i<192){if(i=i-160,Ri>=X)return gs.slice(X-Yn,(X+=i)-Yn);if(!(Ri==0&&Kn<180))return nf(i)}else return X--,Gm($t());let e=(i<<5^(i>1?pt.getUint16(X):i>0?Pe[X]:0))&4095,t=Dm[e],n=X,s=X+i-3,r,o=0;if(t&&t.bytes==i){for(;n<s;){if(r=pt.getUint32(n),r!=t[o++]){n=1879048192;break}n+=4}for(s+=3;n<s;)if(r=Pe[n++],r!=t[o++]){n=1879048192;break}if(n===s)return X=n,t.string;s-=3,n=X}for(t=[],Dm[e]=t,t.bytes=i;n<s;)r=pt.getUint32(n),t.push(r),n+=4;for(s+=3;n<s;)r=Pe[n++],t.push(r);let a=i<16?rf(i):Vm(i);return a!=null?t.string=a:t.string=nf(i)}function Gm(i){if(typeof i=="string")return i;if(typeof i=="number"||typeof i=="boolean"||typeof i=="bigint")return i.toString();if(i==null)return i+"";if(Rt.allowArraysInMapKeys&&Array.isArray(i)&&i.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return i.flat().toString();throw new Error(`Invalid property type for record: ${typeof i}`)}function Wm(i){Rm&&Rm();let e=Kn,t=X,n=tf,s=Yn,r=Ri,o=gs,a=ef,h=Yi,c=cn,u=new Uint8Array(Pe.slice(0,Kn)),d=_t,p=_t.slice(0,_t.length),g=Rt,y=_s,E=i();return Kn=e,X=t,tf=n,Yn=s,Ri=r,gs=o,ef=a,Yi=h,cn=c,Pe=u,_s=y,_t=d,_t.splice(0,_t.length,...p),Rt=g,pt=new DataView(Pe.buffer,Pe.byteOffset,Pe.byteLength),E}function Vo(){Pe=null,Yi=null,_t=null}function Xm(i){i.unpack?gn[i.type]=i.unpack:gn[i.type]=i}function Zm(i){Jm[0]=i;let e=Go[(Um[3]&127)<<1|Um[2]>>7];return(e*i+(i>0?.5:-.5)>>0)/e}var Qu,Pe,Kn,X,Fm,ef,tf,Rt,_t,gs,Yn,Ri,cn,Yi,gn,pt,Tm,zo,dl,_s,Bm,wm,Am,Rm,Ci,ub,Im,nf,fb,db,pb,zm,an,Dm,Om,mb,of,gb,_b,Go,qm,pl,$m,Ym,Km,Wo,Jm,Um,Br=Gn(()=>{try{Qu=new TextDecoder}catch{}X=0,Fm=[],ef=Fm,tf=0,Rt={},Yn=0,Ri=0,gn=[],Tm={useRecords:!1,mapsAsObjects:!0},zo=class{},dl=new zo;dl.name="MessagePack 0xC1";_s=!1,Bm=2;try{new Function("")}catch{Bm=1/0}Ci=class i{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Pe)return Wm(()=>(Vo(),this?this.unpack(e,t):i.prototype.unpack.call(Tm,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Kn=t.end||e.length,X=t.start||0):(X=0,Kn=t>-1?t:e.length),tf=0,Ri=0,gs=null,ef=Fm,cn=null,Pe=e;try{pt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw Pe=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof i){if(Rt=this,this.structures)return _t=this.structures,fl(t);(!_t||_t.length>0)&&(_t=[])}else Rt=Tm,(!_t||_t.length>0)&&(_t=[]);return fl(t)}unpackMultiple(e,t){let n,s=0;try{_s=!0;let r=e.length,o=this?this.unpack(e,r):pl.unpack(e,r);if(t){if(t(o,s,X)===!1)return;for(;X<r;)if(s=X,t(fl(),s,X)===!1)return}else{for(n=[o];X<r;)s=X,n.push(fl());return n}}catch(r){throw r.lastPosition=s,r.values=n,r}finally{_s=!1,Vo()}}_mergeStructures(e,t){Am&&(e=Am.call(this,e)),e=e||[],Object.isFrozen(e)&&(e=e.map(n=>n.slice(0)));for(let n=0,s=e.length;n<s;n++){let r=e[n];r&&(r.isShared=!0,n>=32&&(r.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let s=e[n],r=t[n];r&&(s&&((e.restoreStructures||(e.restoreStructures=[]))[n]=s),e[n]=r)}return this.structures=e}decode(e,t){return this.unpack(e,t)}};ub=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;Im=(i,e)=>function(){let t=Pe[X++];if(t===0)return e();let n=i<32?-(i+(t<<5)):i+(t<<5),s=_t[n]||km()[n];if(!s)throw new Error("Record id is not defined for "+n);return s.read||(s.read=sf(s,i)),s.read()};nf=Ho,fb=Ho,db=Ho,pb=Ho,zm=!1;an=String.fromCharCode;Dm=new Array(4096);Om=(i,e)=>{let t=$t().map(Gm),n=i;e!==void 0&&(i=i<32?-((e<<5)+i):(e<<5)+i,t.highByte=e);let s=_t[i];return s&&(s.isShared||_s)&&((_t.restoreStructures||(_t.restoreStructures=[]))[i]=s),_t[i]=t,t.read=sf(t,n),t.read()};gn[0]=()=>{};gn[0].noBuffer=!0;gn[66]=i=>{let e=i.length,t=BigInt(i[0]&128?i[0]-256:i[0]);for(let n=1;n<e;n++)t<<=BigInt(8),t+=BigInt(i[n]);return t};mb={Error,TypeError,ReferenceError};gn[101]=()=>{let i=$t();return(mb[i[0]]||Error)(i[1],{cause:i[2]})};gn[105]=i=>{if(Rt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=pt.getUint32(X-4);Yi||(Yi=new Map);let t=Pe[X],n;t>=144&&t<160||t==220||t==221?n=[]:n={};let s={target:n};Yi.set(e,s);let r=$t();return s.used?Object.assign(n,r):(s.target=r,r)};gn[112]=i=>{if(Rt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=pt.getUint32(X-4),t=Yi.get(e);return t.used=!0,t.target};gn[115]=()=>new Set($t());of=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(i=>i+"Array"),gb=typeof globalThis=="object"?globalThis:window;gn[116]=i=>{let e=i[0],t=of[e];if(!t){if(e===16){let n=new ArrayBuffer(i.length-1);return new Uint8Array(n).set(i.subarray(1)),n}throw new Error("Could not find typed array for code "+e)}return new gb[t](Uint8Array.prototype.slice.call(i,1).buffer)};gn[120]=()=>{let i=$t();return new RegExp(i[0],i[1])};_b=[];gn[98]=i=>{let e=(i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3],t=X;return X+=e-i.length,cn=_b,cn=[Nm(),Nm()],cn.position0=0,cn.position1=0,cn.postBundlePosition=X,X=t,$t()};gn[255]=i=>i.length==4?new Date((i[0]*16777216+(i[1]<<16)+(i[2]<<8)+i[3])*1e3):i.length==8?new Date(((i[0]<<22)+(i[1]<<14)+(i[2]<<6)+(i[3]>>2))/1e6+((i[3]&3)*4294967296+i[4]*16777216+(i[5]<<16)+(i[6]<<8)+i[7])*1e3):i.length==12?new Date(((i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3])/1e6+((i[4]&128?-281474976710656:0)+i[6]*1099511627776+i[7]*4294967296+i[8]*16777216+(i[9]<<16)+(i[10]<<8)+i[11])*1e3):new Date("invalid");Go=new Array(147);for(let i=0;i<256;i++)Go[i]=+("1e"+Math.floor(45.15-i*.30103));qm=Ci,pl=new Ci({useRecords:!1}),$m=pl.unpack,Ym=pl.unpackMultiple,Km=pl.unpack,Wo={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},Jm=new Float32Array(1),Um=new Uint8Array(Jm.buffer,0,4)});function Qm(i,e,t,n){let s=i.byteLength;if(s+1<256){var{target:r,position:o}=t(4+s);r[o++]=199,r[o++]=s+1}else if(s+1<65536){var{target:r,position:o}=t(5+s);r[o++]=200,r[o++]=s+1>>8,r[o++]=s+1&255}else{var{target:r,position:o,targetView:a}=t(7+s);r[o++]=201,a.setUint32(o,s+1),o+=4}r[o++]=116,r[o++]=e,i.buffer||(i=new Uint8Array(i)),r.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o)}function eg(i,e){let t=i.byteLength;var n,s;if(t<256){var{target:n,position:s}=e(t+2);n[s++]=196,n[s++]=t}else if(t<65536){var{target:n,position:s}=e(t+3);n[s++]=197,n[s++]=t>>8,n[s++]=t&255}else{var{target:n,position:s,targetView:r}=e(t+5);n[s++]=198,r.setUint32(s,t),s+=4}n.set(i,s)}function Sb(i,e,t,n){let s=i.length;switch(s){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:s<256?(e[t++]=199,e[t++]=s):s<65536?(e[t++]=200,e[t++]=s>>8,e[t++]=s&255):(e[t++]=201,e[t++]=s>>24,e[t++]=s>>16&255,e[t++]=s>>8&255,e[t++]=s&255)}return e[t++]=n,e.set(i,t),t+=s,t}function bb(i,e){let t,n=e.length*6,s=i.length-n;for(;t=e.pop();){let r=t.offset,o=t.id;i.copyWithin(r+n,r,s),n-=6;let a=r+n;i[a++]=214,i[a++]=105,i[a++]=o>>24,i[a++]=o>>16&255,i[a++]=o>>8&255,i[a++]=o&255,s=r}return i}function tg(i,e,t){if(zt.length>0){Ct.setUint32(zt.position+i,Y+t-zt.position-i),zt.stringsPosition=Y-i;let n=zt;zt=null,e(n[0]),e(n[1])}}function ig(i){if(i.Class){if(!i.pack&&!i.write)throw new Error("Extension has no pack or write function");if(i.pack&&!i.type)throw new Error("Extension has no type (numeric code to identify the extension)");af.unshift(i.Class),_l.unshift(i)}Xm(i)}function Mb(i,e){return i.isCompatible=t=>{let n=!t||(e.lastNamedStructuresLength||0)===t.length;return n||e._mergeStructures(t),n},i}var gl,_l,af,xl,ml,ng,jm,ee,Xo,Ct,Y,En,zt,xb,yb,vb,kr,Ki,sg,rg,og,ag,cg,lg,hg,ug,cf,lf,hf,uf=Gn(()=>{Br();Br();Br();try{gl=new TextEncoder}catch{}xl=typeof Buffer<"u",ml=xl?function(i){return Buffer.allocUnsafeSlow(i)}:Uint8Array,ng=xl?Buffer:Uint8Array,jm=xl?4294967296:2144337920,Y=0,zt=null,yb=21760,vb=/[\u0080-\uFFFF]/,kr=Symbol("record-id"),Ki=class extends Ci{constructor(e){super(e),this.offset=0;let t,n,s,r,o,a=ng.prototype.utf8Write?function(P,O){return ee.utf8Write(P,O,ee.byteLength-O)}:gl&&gl.encodeInto?function(P,O){return gl.encodeInto(P,ee.subarray(O)).written}:!1,h=this;e||(e={});let c=e&&e.sequential,u=e.structures||e.saveStructures,d=e.maxSharedStructures;if(d==null&&(d=u?32:0),d>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let p=e.maxOwnStructures;p==null&&(p=u?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let g=d>32||p+d>64,y=d+64,E=d+p+64;if(E>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let x=[],_=0,L=0;this.pack=this.encode=function(P,O){if(ee||(ee=new ml(8192),Ct=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,8192)),Y=0),En=ee.length-10,En-Y<2048?(ee=new ml(ee.length),Ct=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,ee.length)),En=ee.length-10,Y=0):Y=Y+7&2147483640,n=Y,O&hf&&(Y+=O&255),o=h.structuredClone?new Map:null,h.bundleStrings&&typeof P!="string"?(zt=[],zt.size=1/0):zt=null,r=h.structures,r){r.uninitialized&&(r=h._mergeStructures(h.getStructures()));let F=r.sharedLength||0;if(F>d)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let W=0;W<F;W++){let re=r[W];if(!re)continue;let me,pe=r.transitions;for(let xe=0,We=re.length;xe<We;xe++){let mt=re[xe];me=pe[mt],me||(me=pe[mt]=Object.create(null)),pe=me}pe[kr]=W+64}this.lastNamedStructuresLength=F}c||(r.nextId=F+64)}s&&(s=!1);let B;try{h.randomAccessStructure&&P&&P.constructor&&P.constructor===Object?ue(P):A(P);let F=zt;if(zt&&tg(n,A,0),o&&o.idsToInsert){let W=o.idsToInsert.sort((xe,We)=>xe.offset>We.offset?1:-1),re=W.length,me=-1;for(;F&&re>0;){let xe=W[--re].offset+n;xe<F.stringsPosition+n&&me===-1&&(me=0),xe>F.position+n?me>=0&&(me+=6):(me>=0&&(Ct.setUint32(F.position+n,Ct.getUint32(F.position+n)+me),me=-1),F=F.previous,re++)}me>=0&&F&&Ct.setUint32(F.position+n,Ct.getUint32(F.position+n)+me),Y+=W.length*6,Y>En&&H(Y),h.offset=Y;let pe=bb(ee.subarray(n,Y),W);return o=null,pe}return h.offset=Y,O&cf?(ee.start=n,ee.end=Y,ee):ee.subarray(n,Y)}catch(F){throw B=F,F}finally{if(r&&(D(),s&&h.saveStructures)){let F=r.sharedLength||0,W=ee.subarray(n,Y),re=Mb(r,h);if(!B)return h.saveStructures(re,re.isCompatible)===!1?h.pack(P,O):(h.lastNamedStructuresLength=F,ee.length>1073741824&&(ee=null),W)}ee.length>1073741824&&(ee=null),O&lf&&(Y=n)}};let D=()=>{L<10&&L++;let P=r.sharedLength||0;if(r.length>P&&!c&&(r.length=P),_>1e4)r.transitions=null,L=0,_=0,x.length>0&&(x=[]);else if(x.length>0&&!c){for(let O=0,B=x.length;O<B;O++)x[O][kr]=0;x=[]}},w=P=>{var O=P.length;O<16?ee[Y++]=144|O:O<65536?(ee[Y++]=220,ee[Y++]=O>>8,ee[Y++]=O&255):(ee[Y++]=221,Ct.setUint32(Y,O),Y+=4);for(let B=0;B<O;B++)A(P[B])},A=P=>{Y>En&&(ee=H(Y));var O=typeof P,B;if(O==="string"){let F=P.length;if(zt&&F>=4&&F<4096){if((zt.size+=F)>yb){let pe,xe=(zt[0]?zt[0].length*3+zt[1].length:0)+10;Y+xe>En&&(ee=H(Y+xe));let We;zt.position?(We=zt,ee[Y]=200,Y+=3,ee[Y++]=98,pe=Y-n,Y+=4,tg(n,A,0),Ct.setUint16(pe+n-3,Y-n-pe)):(ee[Y++]=214,ee[Y++]=98,pe=Y-n,Y+=4),zt=["",""],zt.previous=We,zt.size=0,zt.position=pe}let me=vb.test(P);zt[me?0:1]+=P,ee[Y++]=193,A(me?-F:F);return}let W;F<32?W=1:F<256?W=2:F<65536?W=3:W=5;let re=F*3;if(Y+re>En&&(ee=H(Y+re)),F<64||!a){let me,pe,xe,We=Y+W;for(me=0;me<F;me++)pe=P.charCodeAt(me),pe<128?ee[We++]=pe:pe<2048?(ee[We++]=pe>>6|192,ee[We++]=pe&63|128):(pe&64512)===55296&&((xe=P.charCodeAt(me+1))&64512)===56320?(pe=65536+((pe&1023)<<10)+(xe&1023),me++,ee[We++]=pe>>18|240,ee[We++]=pe>>12&63|128,ee[We++]=pe>>6&63|128,ee[We++]=pe&63|128):(ee[We++]=pe>>12|224,ee[We++]=pe>>6&63|128,ee[We++]=pe&63|128);B=We-Y-W}else B=a(P,Y+W);B<32?ee[Y++]=160|B:B<256?(W<2&&ee.copyWithin(Y+2,Y+1,Y+1+B),ee[Y++]=217,ee[Y++]=B):B<65536?(W<3&&ee.copyWithin(Y+3,Y+2,Y+2+B),ee[Y++]=218,ee[Y++]=B>>8,ee[Y++]=B&255):(W<5&&ee.copyWithin(Y+5,Y+3,Y+3+B),ee[Y++]=219,Ct.setUint32(Y,B),Y+=4),Y+=B}else if(O==="number")if(P>>>0===P)P<32||P<128&&this.useRecords===!1||P<64&&!this.randomAccessStructure?ee[Y++]=P:P<256?(ee[Y++]=204,ee[Y++]=P):P<65536?(ee[Y++]=205,ee[Y++]=P>>8,ee[Y++]=P&255):(ee[Y++]=206,Ct.setUint32(Y,P),Y+=4);else if(P>>0===P)P>=-32?ee[Y++]=256+P:P>=-128?(ee[Y++]=208,ee[Y++]=P+256):P>=-32768?(ee[Y++]=209,Ct.setInt16(Y,P),Y+=2):(ee[Y++]=210,Ct.setInt32(Y,P),Y+=4);else{let F;if((F=this.useFloat32)>0&&P<4294967296&&P>=-2147483648){ee[Y++]=202,Ct.setFloat32(Y,P);let W;if(F<4||(W=P*Go[(ee[Y]&127)<<1|ee[Y+1]>>7])>>0===W){Y+=4;return}else Y--}ee[Y++]=203,Ct.setFloat64(Y,P),Y+=8}else if(O==="object"||O==="function")if(!P)ee[Y++]=192;else{if(o){let W=o.get(P);if(W){if(!W.id){let re=o.idsToInsert||(o.idsToInsert=[]);W.id=re.push(W)}ee[Y++]=214,ee[Y++]=112,Ct.setUint32(Y,W.id),Y+=4;return}else o.set(P,{offset:Y-n})}let F=P.constructor;if(F===Object)I(P);else if(F===Array)w(P);else if(F===Map)if(this.mapAsEmptyObject)ee[Y++]=128;else{B=P.size,B<16?ee[Y++]=128|B:B<65536?(ee[Y++]=222,ee[Y++]=B>>8,ee[Y++]=B&255):(ee[Y++]=223,Ct.setUint32(Y,B),Y+=4);for(let[W,re]of P)A(W),A(re)}else{for(let W=0,re=_l.length;W<re;W++){let me=af[W];if(P instanceof me){let pe=_l[W];if(pe.write){pe.type&&(ee[Y++]=212,ee[Y++]=pe.type,ee[Y++]=0);let le=pe.write.call(this,P);le===P?Array.isArray(P)?w(P):I(P):A(le);return}let xe=ee,We=Ct,mt=Y;ee=null;let tt;try{tt=pe.pack.call(this,P,le=>(ee=xe,xe=null,Y+=le,Y>En&&H(Y),{target:ee,targetView:Ct,position:Y-le}),A)}finally{xe&&(ee=xe,Ct=We,Y=mt,En=ee.length-10)}tt&&(tt.length+Y>En&&H(tt.length+Y),Y=Sb(tt,ee,Y,pe.type));return}}if(Array.isArray(P))w(P);else{if(P.toJSON){let W=P.toJSON();if(W!==P)return A(W)}if(O==="function")return A(this.writeFunction&&this.writeFunction(P));I(P)}}}else if(O==="boolean")ee[Y++]=P?195:194;else if(O==="bigint"){if(P<BigInt(1)<<BigInt(63)&&P>=-(BigInt(1)<<BigInt(63)))ee[Y++]=211,Ct.setBigInt64(Y,P);else if(P<BigInt(1)<<BigInt(64)&&P>0)ee[Y++]=207,Ct.setBigUint64(Y,P);else if(this.largeBigIntToFloat)ee[Y++]=203,Ct.setFloat64(Y,Number(P));else{if(this.largeBigIntToString)return A(P.toString());if(this.useBigIntExtension&&P<BigInt(2)**BigInt(1023)&&P>-(BigInt(2)**BigInt(1023))){ee[Y++]=199,Y++,ee[Y++]=66;let F=[],W;do{let re=P&BigInt(255);W=(re&BigInt(128))===(P<BigInt(0)?BigInt(128):BigInt(0)),F.push(re),P>>=BigInt(8)}while(!((P===BigInt(0)||P===BigInt(-1))&&W));ee[Y-2]=F.length;for(let re=F.length;re>0;)ee[Y++]=Number(F[--re]);return}else throw new RangeError(P+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}Y+=8}else if(O==="undefined")this.encodeUndefinedAsNil?ee[Y++]=192:(ee[Y++]=212,ee[Y++]=0,ee[Y++]=0);else throw new Error("Unknown type: "+O)},C=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?P=>{let O;if(this.skipValues){O=[];for(let W in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(W))&&!this.skipValues.includes(P[W])&&O.push(W)}else O=Object.keys(P);let B=O.length;B<16?ee[Y++]=128|B:B<65536?(ee[Y++]=222,ee[Y++]=B>>8,ee[Y++]=B&255):(ee[Y++]=223,Ct.setUint32(Y,B),Y+=4);let F;if(this.coercibleKeyAsNumber)for(let W=0;W<B;W++){F=O[W];let re=Number(F);A(isNaN(re)?F:re),A(P[F])}else for(let W=0;W<B;W++)A(F=O[W]),A(P[F])}:P=>{ee[Y++]=222;let O=Y-n;Y+=2;let B=0;for(let F in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(F))&&(A(F),A(P[F]),B++);if(B>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ee[O+++n]=B>>8,ee[O+n]=B&255},U=this.useRecords===!1?C:e.progressiveRecords&&!g?P=>{let O,B=r.transitions||(r.transitions=Object.create(null)),F=Y++-n,W;for(let re in P)if(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(re)){if(O=B[re],O)B=O;else{let me=Object.keys(P),pe=B;B=r.transitions;let xe=0;for(let We=0,mt=me.length;We<mt;We++){let tt=me[We];O=B[tt],O||(O=B[tt]=Object.create(null),xe++),B=O}F+n+1==Y?(Y--,V(B,me,xe)):J(B,me,F,xe),W=!0,B=pe[re]}A(P[re])}if(!W){let re=B[kr];re?ee[F+n]=re:J(B,Object.keys(P),F,0)}}:P=>{let O,B=r.transitions||(r.transitions=Object.create(null)),F=0;for(let re in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(re))&&(O=B[re],O||(O=B[re]=Object.create(null),F++),B=O);let W=B[kr];W?W>=96&&g?(ee[Y++]=((W-=96)&31)+96,ee[Y++]=W>>5):ee[Y++]=W:V(B,B.__keys__||Object.keys(P),F);for(let re in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(re))&&A(P[re])},b=typeof this.useRecords=="function"&&this.useRecords,I=b?P=>{b(P)?U(P):C(P)}:U,H=P=>{let O;if(P>16777216){if(P-n>jm)throw new Error("Packed buffer would be larger than maximum buffer size");O=Math.min(jm,Math.round(Math.max((P-n)*(P>67108864?1.25:2),4194304)/4096)*4096)}else O=(Math.max(P-n<<2,ee.length-1)>>12)+1<<12;let B=new ml(O);return Ct=B.dataView||(B.dataView=new DataView(B.buffer,0,O)),P=Math.min(P,ee.length),ee.copy?ee.copy(B,0,n,P):B.set(ee.slice(n,P)),Y-=n,n=0,En=B.length-10,ee=B},V=(P,O,B)=>{let F=r.nextId;F||(F=64),F<y&&this.shouldShareStructure&&!this.shouldShareStructure(O)?(F=r.nextOwnId,F<E||(F=y),r.nextOwnId=F+1):(F>=E&&(F=y),r.nextId=F+1);let W=O.highByte=F>=96&&g?F-96>>5:-1;P[kr]=F,P.__keys__=O,r[F-64]=O,F<y?(O.isShared=!0,r.sharedLength=F-63,s=!0,W>=0?(ee[Y++]=(F&31)+96,ee[Y++]=W):ee[Y++]=F):(W>=0?(ee[Y++]=213,ee[Y++]=114,ee[Y++]=(F&31)+96,ee[Y++]=W):(ee[Y++]=212,ee[Y++]=114,ee[Y++]=F),B&&(_+=L*B),x.length>=p&&(x.shift()[kr]=0),x.push(P),A(O))},J=(P,O,B,F)=>{let W=ee,re=Y,me=En,pe=n;ee=Xo,Y=0,n=0,ee||(Xo=ee=new ml(8192)),En=ee.length-10,V(P,O,F),Xo=ee;let xe=Y;if(ee=W,Y=re,En=me,n=pe,xe>1){let We=Y+xe-1;We>En&&H(We);let mt=B+n;ee.copyWithin(mt+xe,mt+1,Y),ee.set(Xo.slice(0,xe),mt),Y=We}else ee[B+n]=Xo[0]},ue=P=>{let O=xb(P,ee,n,Y,r,H,(B,F,W)=>{if(W)return s=!0;Y=F;let re=ee;return A(B),D(),re!==ee?{position:Y,targetView:Ct,target:ee}:Y},this);if(O===0)return I(P);Y=O}}useBuffer(e){ee=e,ee.dataView||(ee.dataView=new DataView(ee.buffer,ee.byteOffset,ee.byteLength)),Ct=ee.dataView,Y=0}set position(e){Y=e}get position(){return Y}set buffer(e){ee=e}get buffer(){return ee}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}};af=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,zo];_l=[{pack(i,e,t){let n=i.getTime()/1e3;if((this.useTimestamp32||i.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:s,targetView:r,position:o}=e(6);s[o++]=214,s[o++]=255,r.setUint32(o,n)}else if(n>0&&n<4294967296){let{target:s,targetView:r,position:o}=e(10);s[o++]=215,s[o++]=255,r.setUint32(o,i.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),r.setUint32(o+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:s,targetView:r,position:o}=e(3);s[o++]=212,s[o++]=255,s[o++]=255}else{let{target:s,targetView:r,position:o}=e(15);s[o++]=199,s[o++]=12,s[o++]=255,r.setUint32(o,i.getMilliseconds()*1e6),r.setBigInt64(o+4,BigInt(Math.floor(n)))}}},{pack(i,e,t){if(this.setAsEmptyObject)return e(0),t({});let n=Array.from(i),{target:s,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(s[r++]=212,s[r++]=115,s[r++]=0),t(n)}},{pack(i,e,t){let{target:n,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(n[s++]=212,n[s++]=101,n[s++]=0),t([i.name,i.message,i.cause])}},{pack(i,e,t){let{target:n,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(n[s++]=212,n[s++]=120,n[s++]=0),t([i.source,i.flags])}},{pack(i,e){this.moreTypes?Qm(i,16,e):eg(xl?Buffer.from(i):new Uint8Array(i),e)}},{pack(i,e){let t=i.constructor;t!==ng&&this.moreTypes?Qm(i,of.indexOf(t.name),e):eg(i,e)}},{pack(i,e){let{target:t,position:n}=e(1);t[n]=193}}];sg=new Ki({useRecords:!1}),rg=sg.pack,og=sg.pack,ag=Ki,{NEVER:cg,ALWAYS:lg,DECIMAL_ROUND:hg,DECIMAL_FIT:ug}=Wo,cf=512,lf=1024,hf=2048});function Eb(i,e={}){if(!i||typeof i!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof i[Symbol.iterator]=="function")return Tb(i,e);if(typeof i.then=="function"||typeof i[Symbol.asyncIterator]=="function")return wb(i,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*Tb(i,e){let t=new Ki(e);for(let n of i)yield t.pack(n)}async function*wb(i,e){let t=new Ki(e);for await(let n of i)yield t.pack(n)}function Ab(i,e={}){if(!i||typeof i!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");let t=new Ci(e),n,s=r=>{let o;n&&(r=Buffer.concat([n,r]),n=void 0);try{o=t.unpackMultiple(r)}catch(a){if(a.incomplete)n=r.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof i[Symbol.iterator]=="function")return(function*(){for(let o of i)yield*s(o)})();if(typeof i[Symbol.asyncIterator]=="function")return(async function*(){for await(let o of i)yield*s(o)})()}var fg,dg,pg=Gn(()=>{uf();Br();fg=Ab,dg=Eb});var mg={};Il(mg,{ALWAYS:()=>lg,C1:()=>dl,DECIMAL_FIT:()=>ug,DECIMAL_ROUND:()=>hg,Decoder:()=>qm,Encoder:()=>ag,FLOAT32_OPTIONS:()=>Wo,NEVER:()=>cg,Packr:()=>Ki,RESERVE_START_SPACE:()=>hf,RESET_BUFFER_MODE:()=>lf,REUSE_BUFFER_MODE:()=>cf,Unpackr:()=>Ci,addExtension:()=>ig,clearSource:()=>Vo,decode:()=>Km,decodeIter:()=>fg,encode:()=>og,encodeIter:()=>dg,isNativeAccelerationEnabled:()=>zm,mapsAsObjects:()=>Cb,pack:()=>rg,roundFloat32:()=>Zm,unpack:()=>$m,unpackMultiple:()=>Ym,useRecords:()=>Rb});var Rb,Cb,gg=Gn(()=>{uf();Br();pg();Rb=!1,Cb=!0});var df=Gt(vg=>{"use strict";var Ib=Sm(),Jn=Wu(),_g=qu(),Pb=$u(),yl=Em(),_n=ll(),Lb=Zu(),xg=ko(),yg=(gg(),Zs(mg)),ff=class i{constructor(e,t){this.onStateChange=yl.createSignal(),this.onError=yl.createSignal(),this.onLeave=yl.createSignal(),this.onJoin=yl.createSignal(),this.hasJoined=!1,this.onMessageHandlers=Pb.createNanoEvents(),this.roomId=null,this.name=e,this.packr=new yg.Packr,this.packr.encode(void 0),t&&(this.serializer=new(_g.getSerializer("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((n,s)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${s}`)}),this.onLeave(()=>this.removeAllListeners())}connect(e,t,n=this,s,r){let o=new Ib.Connection(s.protocol);if(n.connection=o,o.events.onmessage=i.prototype.onMessageCallback.bind(n),o.events.onclose=function(a){var h;if(!n.hasJoined){(h=console.warn)===null||h===void 0||h.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===xg.CloseCode.DEVMODE_RESTART&&t?t():(n.onLeave.invoke(a.code,a.reason),n.destroy())},o.events.onerror=function(a){var h;(h=console.warn)===null||h===void 0||h.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},s.protocol==="h3"){let a=new URL(e);o.connect(a.origin,s)}else o.connect(e,r)}leave(e=!0){return new Promise(t=>{this.onLeave(n=>t(n)),this.connection?e?(this.packr.buffer[0]=Jn.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(xg.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){let n={offset:1};this.packr.buffer[0]=Jn.Protocol.ROOM_DATA,typeof e=="string"?_n.encode.string(this.packr.buffer,e,n):_n.encode.number(this.packr.buffer,e,n),this.packr.position=0;let s=t!==void 0?this.packr.pack(t,2048+n.offset):this.packr.buffer.subarray(0,n.offset);this.connection.send(s)}sendUnreliable(e,t){let n={offset:1};this.packr.buffer[0]=Jn.Protocol.ROOM_DATA,typeof e=="string"?_n.encode.string(this.packr.buffer,e,n):_n.encode.number(this.packr.buffer,e,n),this.packr.position=0;let s=t!==void 0?this.packr.pack(t,2048+n.offset):this.packr.buffer.subarray(0,n.offset);this.connection.sendUnreliable(s)}sendBytes(e,t){let n={offset:1};if(this.packr.buffer[0]=Jn.Protocol.ROOM_DATA_BYTES,typeof e=="string"?_n.encode.string(this.packr.buffer,e,n):_n.encode.number(this.packr.buffer,e,n),t.byteLength+n.offset>this.packr.buffer.byteLength){let s=new Uint8Array(n.offset+t.byteLength);s.set(this.packr.buffer),this.packr.useBuffer(s)}this.packr.buffer.set(t,n.offset),this.connection.send(this.packr.buffer.subarray(0,n.offset+t.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof Lb.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(e){let t=new Uint8Array(e.data),n={offset:1},s=t[0];if(s===Jn.Protocol.JOIN_ROOM){let r=_n.decode.utf8Read(t,n,t[n.offset++]);if(this.serializerId=_n.decode.utf8Read(t,n,t[n.offset++]),!this.serializer){let o=_g.getSerializer(this.serializerId);this.serializer=new o}t.byteLength>n.offset&&this.serializer.handshake&&this.serializer.handshake(t,n),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=Jn.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(s===Jn.Protocol.ERROR){let r=_n.decode.number(t,n),o=_n.decode.string(t,n);this.onError.invoke(r,o)}else if(s===Jn.Protocol.LEAVE_ROOM)this.leave();else if(s===Jn.Protocol.ROOM_STATE)this.serializer.setState(t,n),this.onStateChange.invoke(this.serializer.getState());else if(s===Jn.Protocol.ROOM_STATE_PATCH)this.serializer.patch(t,n),this.onStateChange.invoke(this.serializer.getState());else if(s===Jn.Protocol.ROOM_DATA){let r=_n.decode.stringCheck(t,n)?_n.decode.string(t,n):_n.decode.number(t,n),o=t.byteLength>n.offset?yg.unpack(t,{start:n.offset}):void 0;this.dispatchMessage(r,o)}else if(s===Jn.Protocol.ROOM_DATA_BYTES){let r=_n.decode.stringCheck(t,n)?_n.decode.string(t,n):_n.decode.number(t,n);this.dispatchMessage(r,t.subarray(n.offset))}}dispatchMessage(e,t){var n;let s=this.getMessageHandlerKey(e);this.onMessageHandlers.events[s]?this.onMessageHandlers.emit(s,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}};vg.Room=ff});var bg={};Il(bg,{del:()=>Ub,get:()=>Nb,patch:()=>Ob,post:()=>Db,put:()=>Fb,send:()=>li});function Sg(i,e){e.headers=i.headers||{},e.statusMessage=i.statusText,e.statusCode=i.status,e.data=i.response}function li(i,e,t){return new Promise(function(n,s){t=t||{};var r=new XMLHttpRequest,o,a,h,c=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(d){d.timeout=d.type=="timeout",s(d)},r.onabort=function(d){d.aborted=!0,s(d)},r.open(i,e.href||e),r.onload=function(){for(h=r.getAllResponseHeaders().trim().split(/[\r\n]+/),Sg(r,r);a=h.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(d){return Sg(r,d),s(d)}(r.status>=400?s:n)(r)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(u["content-type"]="application/json",c=JSON.stringify(c)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(c),t.signal&&t.signal.addEventListener("abort",function(){r.abort()})})}var Nb,Db,Ob,Ub,Fb,Mg=Gn(()=>{Nb=li.bind(li,"GET"),Db=li.bind(li,"POST"),Ob=li.bind(li,"PATCH"),Ub=li.bind(li,"DELETE"),Fb=li.bind(li,"PUT")});var wg=Gt(Tg=>{"use strict";var Eg=ko(),Bb=(Mg(),Zs(bg));function kb(i){var e=Object.create(null);return i&&Object.keys(i).forEach(function(t){if(t!=="default"){var n=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return i[t]}})}}),e.default=i,Object.freeze(e)}var zb=kb(Bb),pf=class{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,n={}){return zb[e](this.client.getHttpEndpoint(t),this.getOptions(n)).catch(s=>{var r;if(s.aborted)throw new Eg.AbortError("Request aborted");let o=s.statusCode,a=((r=s.data)===null||r===void 0?void 0:r.error)||s.statusMessage||s.message;throw!o&&!a?s:new Eg.ServerError(o,a)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}};Tg.HTTP=pf});var Rg=Gt(vl=>{"use strict";var Ag=(Bo(),Zs(Fo)),Ys;function gf(){if(!Ys)try{Ys=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!Ys&&typeof globalThis.indexedDB<"u"&&(Ys=new mf),Ys||(Ys={cache:{},setItem:function(i,e){this.cache[i]=e},getItem:function(i){this.cache[i]},removeItem:function(i){delete this.cache[i]}}),Ys}function Vb(i,e){gf().setItem(i,e)}function Hb(i){gf().removeItem(i)}function Gb(i,e){let t=gf().getItem(i);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(n=>e(n))}var mf=class{constructor(){this.dbPromise=new Promise(e=>{let t=indexedDB.open("_colyseus_storage",1);t.onupgradeneeded=()=>t.result.createObjectStore("store"),t.onsuccess=()=>e(t.result)})}tx(e,t){return Ag.__awaiter(this,void 0,void 0,function*(){let s=(yield this.dbPromise).transaction("store",e).objectStore("store");return t(s)})}setItem(e,t){return this.tx("readwrite",n=>n.put(t,e)).then()}getItem(e){return Ag.__awaiter(this,void 0,void 0,function*(){let t=yield this.tx("readonly",n=>n.get(e));return new Promise(n=>{t.onsuccess=()=>n(t.result)})})}removeItem(e){return this.tx("readwrite",t=>t.delete(e)).then()}};vl.getItem=Gb;vl.removeItem=Hb;vl.setItem=Vb});var vf=Gt(Cg=>{"use strict";var ln=(Bo(),Zs(Fo)),_f=Rg(),Wb=$u(),Sl,xf,xs,bl,yf=class{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},Sl.set(this,!1),xf.set(this,void 0),xs.set(this,void 0),bl.set(this,Wb.createNanoEvents()),_f.getItem(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){let t=ln.__classPrivateFieldGet(this,bl,"f").on("change",e);return ln.__classPrivateFieldGet(this,Sl,"f")||ln.__classPrivateFieldSet(this,xf,new Promise((n,s)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),ln.__classPrivateFieldSet(this,Sl,!0,"f"),t}getUserData(){return ln.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,n){return ln.__awaiter(this,void 0,void 0,function*(){let s=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(s),s})}signInWithEmailAndPassword(e,t){return ln.__awaiter(this,void 0,void 0,function*(){let n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n})}signInAnonymously(e){return ln.__awaiter(this,void 0,void 0,function*(){let t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return ln.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e){return ln.__awaiter(this,arguments,void 0,function*(t,n={}){return new Promise((s,r)=>{let o=n.width||480,a=n.height||768,h=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,u=this.http.client.getHttpEndpoint(`${n.prefix||`${this.settings.path}/provider`}/${t}${h}`),d=screen.width/2-o/2,p=screen.height/2-a/2;ln.__classPrivateFieldSet(this,xs,window.open(u,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+o+", height="+a+", top="+p+", left="+d),"f");let g=E=>{E.data.user===void 0&&E.data.token===void 0||(clearInterval(y),ln.__classPrivateFieldGet(this,xs,"f").close(),ln.__classPrivateFieldSet(this,xs,void 0,"f"),window.removeEventListener("message",g),E.data.error!==void 0?r(E.data.error):(s(E.data),this.emitChange(E.data)))},y=setInterval(()=>{(!ln.__classPrivateFieldGet(this,xs,"f")||ln.__classPrivateFieldGet(this,xs,"f").closed)&&(ln.__classPrivateFieldSet(this,xs,void 0,"f"),r("cancelled"),window.removeEventListener("message",g))},200);window.addEventListener("message",g)})})}signOut(){return ln.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?_f.removeItem(this.settings.key):_f.setItem(this.settings.key,e.token)),ln.__classPrivateFieldGet(this,bl,"f").emit("change",e)}};Sl=new WeakMap,xf=new WeakMap,xs=new WeakMap,bl=new WeakMap;Cg.Auth=yf});var Pg=Gt(Ig=>{"use strict";function Xb(i){var e;let t=((e=window?.location)===null||e===void 0?void 0:e.hostname)||"localhost",n=i.hostname.split("."),s=!i.hostname.includes("trycloudflare.com")&&!i.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return i.pathname.startsWith("/.proxy")?`${i.protocol}//${t}${s}${i.pathname}${i.search}`:`${i.protocol}//${t}/.proxy/colyseus${s}${i.pathname}${i.search}`}Ig.discordURLBuilder=Xb});var Ng=Gt(bf=>{"use strict";var Ji=(Bo(),Zs(Fo)),qb=ko(),$b=df(),Yb=wg(),Kb=vf(),Jb=Pg(),Sf,Ml=class i extends Error{constructor(e,t){super(e),this.code=t,this.name="MatchMakeError",Object.setPrototypeOf(this,i.prototype)}},Lg=typeof window<"u"&&typeof((Sf=window?.location)===null||Sf===void 0?void 0:Sf.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567",El=class{constructor(e=Lg,t){var n,s;if(typeof e=="string"){let r=e.startsWith("/")?new URL(e,Lg):new URL(e),o=r.protocol==="https:"||r.protocol==="wss:",a=Number(r.port||(o?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:a,secure:o,searchParams:r.searchParams.toString()||void 0}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new Yb.HTTP(this,t?.headers||{}),this.auth=new Kb.Auth(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((s=(n=window?.location)===null||n===void 0?void 0:n.hostname)===null||s===void 0)&&s.includes("discordsays.com"))&&(this.urlBuilder=Jb.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e){return Ji.__awaiter(this,arguments,void 0,function*(t,n={},s){return yield this.createMatchMakeRequest("joinOrCreate",t,n,s)})}create(e){return Ji.__awaiter(this,arguments,void 0,function*(t,n={},s){return yield this.createMatchMakeRequest("create",t,n,s)})}join(e){return Ji.__awaiter(this,arguments,void 0,function*(t,n={},s){return yield this.createMatchMakeRequest("join",t,n,s)})}joinById(e){return Ji.__awaiter(this,arguments,void 0,function*(t,n={},s){return yield this.createMatchMakeRequest("joinById",t,n,s)})}reconnect(e,t){return Ji.__awaiter(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");let[n,s]=e.split(":");if(!n||!s)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:s},t)})}consumeSeatReservation(e,t,n){return Ji.__awaiter(this,void 0,void 0,function*(){let s=this.createRoom(e.room.name,t);s.roomId=e.room.roomId,s.sessionId=e.sessionId;let r={sessionId:s.sessionId};e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken);let o=n||s;return s.connect(this.buildEndpoint(e.room,r,e.protocol),e.devMode&&(()=>Ji.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${s.roomId}'...`);let a=0,h=8,c=()=>Ji.__awaiter(this,void 0,void 0,function*(){a++;try{yield this.consumeSeatReservation(e,t,o),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${s.roomId}'`)}catch{a<h?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${a} out of ${h})`),setTimeout(c,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(c,2e3)})),o,e,this.http.headers),new Promise((a,h)=>{let c=(u,d)=>h(new qb.ServerError(u,d));o.onError.once(c),o.onJoin.once(()=>{o.onError.remove(c),a(o)})})})}createMatchMakeRequest(e,t){return Ji.__awaiter(this,arguments,void 0,function*(n,s,r={},o,a){let h=(yield this.http.post(`matchmake/${n}/${s}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})).data;if(h.error)throw new Ml(h.error,h.code);return n==="reconnect"&&(h.reconnectionToken=r.reconnectionToken),yield this.consumeSeatReservation(h,o,a)})}createRoom(e,t){return new $b.Room(e,t)}buildEndpoint(e,t={},n="ws"){let s=this.settings.searchParams||"";this.http.authToken&&(t._authToken=this.http.authToken);for(let a in t)t.hasOwnProperty(a)&&(s+=(s?"&":"")+`${a}=${t[a]}`);n==="h3"&&(n="http");let r=this.settings.secure?`${n}s://`:`${n}://`;e.publicAddress?r+=`${e.publicAddress}`:r+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;let o=`${r}/${e.processId}/${e.roomId}?${s}`;return this.urlBuilder?this.urlBuilder(new URL(o)):o}getHttpEndpoint(e=""){let t=e.startsWith("/")?e:`/${e}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.settings.searchParams&&(n+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};El.VERSION="0.16.22";bf.Client=El;bf.MatchMakeError=Ml});var Og=Gt(Dg=>{"use strict";var Mf=class{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}};Dg.NoneSerializer=Mf});var Bg=Gt(hi=>{"use strict";Bp();var Ug=Ng(),Fg=Wu(),Zb=df(),jb=vf(),Qb=ko(),Ef=Zu(),eM=Og(),Tf=qu();Tf.registerSerializer("schema",Ef.SchemaSerializer);Tf.registerSerializer("none",eM.NoneSerializer);hi.Client=Ug.Client;hi.MatchMakeError=Ug.MatchMakeError;Object.defineProperty(hi,"ErrorCode",{enumerable:!0,get:function(){return Fg.ErrorCode}});Object.defineProperty(hi,"Protocol",{enumerable:!0,get:function(){return Fg.Protocol}});hi.Room=Zb.Room;hi.Auth=jb.Auth;hi.ServerError=Qb.ServerError;hi.SchemaSerializer=Ef.SchemaSerializer;hi.getStateCallbacks=Ef.getStateCallbacks;hi.registerSerializer=Tf.registerSerializer});function wf(i){if(!i)return{};try{let e=JSON.parse(i);return e&&typeof e=="object"?e:{}}catch{return{}}}function kg(i){if(i!=null)try{return JSON.parse(i)}catch{return}}async function zg(i){let t=await new Tl.Client(i.url).joinOrCreate(tM,{gameId:i.room,name:i.name,...i.options}),n=new Map,s=new Set,r=new Set(["join","leave","change","shared"]),o=(c,...u)=>n.get(c)?.forEach(d=>d(...u)),a=(0,Tl.getStateCallbacks)(t);a(t.state).players.onAdd((c,u)=>{o("join",u,wf(c.data)),a(c).onChange(()=>o("change",u,wf(c.data)))}),a(t.state).players.onRemove((c,u)=>o("leave",u)),a(t.state).shared.onAdd((c,u)=>o("shared",u,kg(c)));let h=((c,u)=>{let d=n.get(c);return d||n.set(c,d=new Set),d.add(u),!r.has(c)&&!s.has(c)&&(s.add(c),t.onMessage(c,p=>o(c,p))),()=>{d?.delete(u)}});return{id:t.sessionId,get players(){let c=new Map;return t.state?.players?.forEach((u,d)=>c.set(d,{id:d,name:u.name,state:wf(u.data)})),c},me:{set(c){t.send("state",JSON.stringify(c))}},shared:{get(c){return kg(t.state?.shared?.get(c))},set(c,u){t.send("shared",{key:c,value:JSON.stringify(u)})},keys(){return t.state?.shared?Array.from(t.state.shared.keys()):[]}},on:h,send(c,u){t.send(c,u)},leave(){t.leave()}}}var Tl,tM,Vg=Gn(()=>{"use strict";Tl=Qg(Bg(),1),tM="play"});var oM=Gt(()=>{tl();Fp();Vg();var Rf=globalThis.GENEX_GAME_ID??"demo",nM="wss://demo-colyseus.glotech.world",iM=globalThis.GENEX_ASSET_URL??"./model.glb",fi=new no;fi.background=new Ke(921878);fi.fog=new to(921878,40,110);var qo=new Zt(60,innerWidth/innerHeight,.1,400),$o=new jc({antialias:!0});$o.setPixelRatio(Math.min(devicePixelRatio,2));$o.setSize(innerWidth,innerHeight);document.body.appendChild($o.domElement);addEventListener("resize",()=>{qo.aspect=innerWidth/innerHeight,qo.updateProjectionMatrix(),$o.setSize(innerWidth,innerHeight)});fi.add(new _o(16777215,2241348,1.1));var Wg=new ks(16777215,2.2);Wg.position.set(6,12,8);fi.add(Wg);fi.add(new Mo(200,100,2765636,1581099));var Cf=new Qt(new Us(200,200),new Rn({color:1053980}));Cf.rotation.x=-Math.PI/2;Cf.position.y=-.02;fi.add(Cf);var Af,sM=document.getElementById("hud"),Al=i=>sM.textContent=i;new nl().load(iM,i=>{let e=i.scene,t=new pn().setFromObject(e),n=t.getSize(new $),s=t.getCenter(new $),r=5/Math.max(n.x,n.y,n.z);e.scale.setScalar(r),e.position.copy(s).multiplyScalar(-r);let o=new pn().setFromObject(e);e.position.y-=o.min.y,fi.add(e),Af=e},void 0,i=>Al("asset load failed: "+i.message));function Xg(i){let e=new Qt(new cs(1,1,1),new Rn({color:i}));return e.add(new as(new fo(e.geometry),new zi({color:16777215}))),e.position.y=.5,fi.add(e),e}var qg=new Ke().setHSL(Math.random(),.7,.55).getHex(),ui={x:(Math.random()-.5)*14,z:8+Math.random()*4,color:qg},rM=Xg(qg),Ii={};addEventListener("keydown",i=>Ii[i.key.toLowerCase()]=!0);addEventListener("keyup",i=>Ii[i.key.toLowerCase()]=!1);var ys=new Map,wl=null;Al(`connecting to "${Rf}"\u2026`);zg({url:nM,room:Rf,name:"guest"}).then(i=>{wl=i,i.on("leave",e=>{let t=ys.get(e);t&&(fi.remove(t),ys.delete(e))}),setInterval(()=>i.me.set({x:ui.x,z:ui.z,color:ui.color}),66)}).catch(i=>Al("connection failed: "+i.message));var Hg=14,Gg=performance.now();function $g(i){let e=Math.min(.05,(i-Gg)/1e3);Gg=i;let t=0,n=0;if((Ii.w||Ii.arrowup)&&(n-=1),(Ii.s||Ii.arrowdown)&&(n+=1),(Ii.a||Ii.arrowleft)&&(t-=1),(Ii.d||Ii.arrowright)&&(t+=1),t||n){let s=Math.hypot(t,n);ui.x+=t/s*Hg*e,ui.z+=n/s*Hg*e}if(rM.position.set(ui.x,.5,ui.z),qo.position.set(ui.x,9,ui.z+13),qo.lookAt(ui.x,1,ui.z-2),Af&&(Af.rotation.y+=e*.25),wl){let s=new Set;for(let[r,o]of wl.players){if(r===wl.id)continue;s.add(r);let a=o.state,h=ys.get(r);h||(h=Xg(a.color??16777215),ys.set(r,h)),h.position.set(a.x??0,.5,a.z??0)}for(let r of[...ys.keys()])s.has(r)||(fi.remove(ys.get(r)),ys.delete(r));Al(`generated asset \xB7 game "${Rf}" \xB7 players: ${ys.size+1} \xB7 WASD to move`)}$o.render(fi,qo),requestAnimationFrame($g)}requestAnimationFrame($g)});export default oM();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
