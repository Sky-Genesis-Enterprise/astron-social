const I=Object.freeze({ONE:1,TEN:10,HUNDRED:100,THOUSAND:1e3,MILLION:1e6,BILLION:1e9,TRILLION:1e12}),O=I.THOUSAND*10,N=I.MILLION*10;function T(t){return t<I.THOUSAND?[t,I.ONE,0]:t<I.MILLION?[t/I.THOUSAND,I.THOUSAND,t<O?1:0]:t<I.BILLION?[t/I.MILLION,I.MILLION,t<N?1:0]:t<I.TRILLION?[t/I.BILLION,I.BILLION,0]:[t,I.ONE,0]}function D(t,L){if(L==null||L<I.HUNDRED)return t;const n=L/I.TEN;return Math.trunc(t/n)*n}function a(t){return Math.round(t*.1)/.1}function e(t,L=99){return t>L?`${L}+`:t.toString()}export{I as D,e as a,D as p,a as r,T as t};
//# sourceMappingURL=numbers-CGZQWBYL.js.map
