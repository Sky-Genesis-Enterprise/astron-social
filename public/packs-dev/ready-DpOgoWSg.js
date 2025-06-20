function r(d){return new Promise((t,n)=>{function c(){let e;try{e=d()}catch(o){n(o);return}typeof(e==null?void 0:e.then)=="function"?e.then(t).catch(n):t()}["interactive","complete"].includes(document.readyState)?c():document.addEventListener("DOMContentLoaded",c)})}export{r};
//# sourceMappingURL=ready-DpOgoWSg.js.map
