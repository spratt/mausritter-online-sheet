import{d as m,u as i,x as k,a as w,c as l,e as o,j as r,f as p,y as u,o as c,_ as v}from"./index.c94f3322.js";import{_ as g,a as y,U as S}from"./UiDrop.a2f53c44.js";const x={key:0,class:"warband"},W={class:"header"},C={class:"wrapper"},B={key:1,class:"warband column"},$=m({__name:"WarbandCard",setup(D){const b=i(),e=k(b,"warband"),n=i(),d=w(),_=s=>{var t;const a=(t=e.value)==null?void 0:t.stats[s.stat];a&&a.current<s.maxValue&&n.setWarbandStat(s.stat,+a.current+1)},f=s=>{var t;const a=(t=e.value)==null?void 0:t.stats[s.stat];a&&a.current>0&&n.setWarbandStat(s.stat,+a.current-1)};return(s,a)=>e.value?(c(),l("div",x,[o("div",W,[a[4]||(a[4]=o("h3",{class:"heading"}," Warband ",-1)),r(u,{type:"simple",text:"Disband",onClick:a[0]||(a[0]=t=>p(d).setPopup("disbandWarband"))})]),a[5]||(a[5]=o("div",{class:"details"}," Your warband is formed by 20 fighting mice, plus one follower (luggage porter, cook, armourer) for every fighter. ",-1)),r(S,{width:243}),o("div",C,[r(g,{stats:e.value.stats,onGrowStat:a[1]||(a[1]=t=>_(t)),onDownStat:a[2]||(a[2]=t=>f(t))},null,8,["stats"]),r(y,{"body-back":e.value.bodyBack,"pack-back":e.value.packBack,"is-warband":"warband"},null,8,["body-back","pack-back"])])])):(c(),l("div",B,[a[6]||(a[6]=o("span",{class:"details"}," You have not formed warband. ",-1)),r(u,{text:"Form warband",type:"big",onClick:a[3]||(a[3]=t=>p(d).setPopup("formWarband"))})]))}});const V=v($,[["__scopeId","data-v-0ea05a0e"]]);export{V as default};
