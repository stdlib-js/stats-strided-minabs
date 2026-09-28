"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var y=o(function(D,m){
var g=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function j(a,r,e,s){var n,u,v,i,t,c;if(n=r.data,u=r.accessors[0],a===1||e===0)return q(u(n,s));for(i=s,v=q(u(n,i)),c=1;c<a;c++){if(i+=e,t=q(u(n,i)),g(t))return t;t<v&&(v=t)}return v}m.exports=j
});var b=o(function(E,p){
var k=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=y();function R(a,r,e,s){var n,u,v,i,t;if(a<=0)return NaN;if(v=O(r),v.accessorProtocol)return P(a,v,e,s);if(a===1||e===0)return f(r[s]);for(u=s,n=f(r[u]),t=1;t<a;t++){if(u+=e,i=f(r[u]),k(i))return i;i<n&&(n=i)}return n}p.exports=R
});var x=o(function(F,l){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(a,r,e){return w(a,r,e,h(a,e))}l.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),B=b();A(d,"ndarray",B);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
