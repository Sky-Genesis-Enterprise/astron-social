import{r as a}from"./index-BdTwX--g.js";import{d as n,u as i}from"./short_number-WomMu2iV.js";function h(){const{search:s}=i();return a.useMemo(()=>new URLSearchParams(s),[s])}function f(s,o){const r=h(),e=n(),c=r.get(s)??o,u=a.useCallback(t=>{t===null?r.delete(s):r.set(s,t),e.push({search:r.toString()})},[e,s,r]);return[c,u]}export{f as u};
//# sourceMappingURL=useSearchParam-CCVsk9qx.js.map
