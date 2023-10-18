import{d as B,r as x,L as N,b as n,c,e as t,g as m,I as s,D as p,t as l,F as V,$ as z,n as q,J as i,f as a,w as D,M as F}from"./entry.b0da741b.js";import{_ as I}from"./factice.vue.9743efe6.js";import{_ as L}from"./simple.vue.79dcfe0a.js";import{_ as M}from"./basic.vue.012eda7e.js";import{_ as S}from"./datav.vue.2abd3d56.js";import{_ as A}from"./nonconformity.vue.f2a58350.js";import{_ as E}from"./debug-panel.vue.53795684.js";const J={key:0,class:"navbar bg-base-100"},R=t("div",{class:"navbar-start"},null,-1),T={class:"navbar-center"},j={key:0,class:"dropdown overflow-visible"},G={tabindex:"0",class:"btn btn-ghost normal-case text-xl flex"},H={tabindex:"0",class:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"},K=["onClick"],O=t("div",{class:"navbar-end"},null,-1),P={class:""},se=B({__name:"result",props:{node:{},show_root:{type:Boolean,default:!1},hide_modes_selector:{type:Boolean,default:!0},mode:{default:"basic"},auto_propagate_status:{type:Boolean,default:!0}},setup(f){const e=x(f.mode);function h(o){e.value=o}const r={simple:{icon:"mdi:home",title:"vue simplifiée"},basic:{icon:"mdi:menu-swap",title:"vue de base"},nonconformity:{icon:"mdi:alert-decagram",title:"vue non-conformité"},datav:{icon:"mdi:database-search",title:"vue données"},semantic:{icon:"mdi:head-snowflake-outline",title:"vue sémantique",factice:!0},timeline:{icon:"mdi:table-clock",title:"vue timeline",factice:!0},geographic:{icon:"mdi:earth",title:"vue géographique",factice:!0},chat:{icon:"mdi:message-reply-text-outline",title:"chat IA",factice:!0},notebook:{icon:"mdi:notebook-multiple",title:"vue notebook",factice:!0}},v=N(()=>e.value=="simple"?"ppw-checklist-mode-simple":e.value=="basic"?"ppw-checklist-mode-basic":e.value=="nonconformity"?"ppw-checklist-mode-nonconformity":e.value=="datav"?"ppw-checklist-mode-datav":"ppw-checklist-mode-basic");function w(o){console.log(`redirect mode ${e} ...`),e.value=o}return(o,U)=>{const _=F,b=I,k=L,y=M,g=S,$=A,C=E;return n(),c("div",null,[o.hide_modes_selector?a("",!0):(n(),c("div",J,[R,t("div",T,[(n(),c("div",j,[t("a",G,[m(_,{name:r[s(e)].icon,size:"32"},null,8,["name"]),p(" "+l(r[s(e)].title),1)]),t("ul",H,[(n(),c(V,null,z(r,(d,u)=>t("li",null,[t("a",{onClick:W=>h(u),class:q(u==s(e)?"active":null)},[m(_,{name:d.icon,size:"32"},null,8,["name"]),p(" "+l(d.title)+" ",1),d.factice?(n(),i(b,{key:0})):a("",!0)],10,K)])),64))])]))]),O])),t("div",P,[s(e)==="simple"?(n(),i(k,{key:0,node:o.node,onRedirect:w},null,8,["node"])):a("",!0),s(e)==="basic"?(n(),i(y,{key:1,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0),s(e)==="datav"?(n(),i(g,{key:2,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0),s(e)==="nonconformity"?(n(),i($,{key:3,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0)]),m(C,null,{default:D(()=>[t("p",null,"mode : "+l(s(e)),1),t("p",null,"modeComponent : "+l(s(v)),1)]),_:1})])}}});export{se as _};
