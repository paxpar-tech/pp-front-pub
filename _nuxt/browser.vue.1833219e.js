import{_ as x}from"./3.vue.363702d0.js";import{d as T,r as c,b as p,c as U,g as o,w as d,am as V,e,J as m,f as _,D as h,W as b,c1 as j,I as a,Y as k,X as B,M as C,E as N}from"./entry.b0da741b.js";import S from"./products.efec98af.js";const $={class:"flex justify-center flex-wrap gap-6"},J={class:"join m-2"},M={class:"btn join-item"},D={class:"btn join-item"},E={class:"form-control"},P={class:"label cursor-pointer"},I=e("span",{class:"label-text"},"Objets non publiés",-1),W=T({__name:"browser",props:{filterType:{default:"checklist"},showUnpublished:{type:Boolean,default:!1},tags:{default:()=>[]}},setup(g){const w=g,u=c(),n=c(""),r=c(w.showUnpublished);return(t,s)=>{const y=x,i=C,f=N,v=S;return p(),U("div",null,[o(y,{title:t.filterType,background:"https://freesvg.org/img/1673944302electric-guitars-silhouettes.png"},{default:d(()=>[V(t.$slots,"default")]),_:3},8,["title"]),e("div",$,[e("div",J,[o(f,{to:"craftform",noPrefetch:""},{default:d(()=>[e("button",M,[t.filterType==="craftform"?(p(),m(i,{key:0,name:"mdi:check"})):_("",!0),h(" Je génère ")])]),_:1}),o(f,{to:"checklist",noPrefetch:""},{default:d(()=>[e("button",D,[t.filterType==="checklist"?(p(),m(i,{key:0,name:"mdi:check"})):_("",!0),h(" Je vérifie ")])]),_:1})]),e("div",E,[e("label",P,[I,b(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>k(r)?r.value=l:null),type:"checkbox",class:"toggle",checked:""},null,512),[[j,a(r)]])])]),b(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>k(n)?n.value=l:null),type:"text",placeholder:"filter",class:"input input-bordered w-36 max-w-xs m-2"},null,512),[[B,a(n)]]),e("button",{onClick:s[2]||(s[2]=l=>a(u).refresh()),class:"btn m-2"},[o(i,{name:"mdi:reload"})])]),e("div",null,[o(v,{ref_key:"items",ref:u,filterType:t.filterType,showUnpublished:t.showUnpublished,tags:t.tags,filterSearch:a(n),class:"mt-2"},null,8,["filterType","showUnpublished","tags","filterSearch"])])])}}});export{W as _};
