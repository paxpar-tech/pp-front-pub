import{d as s,o as a,b as c,J as _,w as l,e as t,V as u}from"./entry.b0da741b.js";import{u as i}from"./fetch.5f303e15.js";const r=t("h1",null,"DEBUG $fetch",-1),h=s({__name:"fetch",setup(f){a(async()=>{});async function n(){console.log("task 1 ...");const{data:o}=await i("/static_conf.json","$r3fzozSiPD");console.log(o)}return(o,p)=>{const e=u;return c(),_(e,null,{default:l(()=>[t("div",null,[r,t("button",{onClick:n},"fetch 1")])]),_:1})}}});export{h as default};
