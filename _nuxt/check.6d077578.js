import B from"./links.d3342f18.js";import{d as F,r as m,L as _,o as V,b as s,c as d,e as n,I as t,J as a,f as i,g as u,w as D,F as N,M as P}from"./entry.b0da741b.js";import{_ as E}from"./pdfview.vue.9bcf5213.js";import{_ as M}from"./main2.vue.bba393c7.js";import{_ as z}from"./result-static.vue.e489a0cc.js";import{_ as A}from"./conversation.vue.668be160.js";import"./link.1e6d2247.js";import"./debug-panel.vue.53795684.js";import"./useFeatureFlag.141632e1.js";import"./useToast.e63bbea8.js";import"./usePaxparAPI.b9191fef.js";import"./fetch.5f303e15.js";import"./url.6edfad5e.js";import"./result.vue.401fc97e.js";import"./factice.vue.9743efe6.js";import"./simple.vue.79dcfe0a.js";import"./checktools.b7529971.js";import"./basic.vue.012eda7e.js";import"./exception.vue.3cbe3569.js";import"./pubkey.vue.7c9d3785.js";import"./traceback.vue.1e9f3178.js";import"./default.vue.c9f5e73a.js";import"./transition.b36239cb.js";import"./datav.vue.2abd3d56.js";import"./CopyButton.vue.42c6f1b8.js";import"./index.24ff6140.js";import"./nonconformity.vue.f2a58350.js";import"./actor.vue.1ffffa6a.js";import"./index.es.98c9fa05.js";import"./tslib.es6.0c17087b.js";const I={class:"hero-content flex-col lg:flex-row"},J={class:"w-1/2"},L={key:1,class:"indicator w-full"},R={class:"indicator-item indicator-bottom"},j={class:"w-1/2"},q={class:"card bg-base-100 shadow-xl",style:{"min-height":"500px"}},G={class:"card-body"},H={class:"items-center align-middle p-28"},go=F({__name:"check",props:{animate:{type:Boolean,default:!1},conversation:{},pdfs:{default:()=>[]}},setup(f){const v=f,o=m(),r=m(!1);function h(e){o.value=e}function w(e){r.value=!0}function k(){r.value=!1}const y=_(()=>{var e;return(e=o.value)==null?void 0:e.check_result}),c=_(()=>o.value===void 0?v.conversation:o==null?void 0:o.value.conversation);return V(async()=>{}),(e,l)=>{const b=B,p=P,g=E,x=M,C=z,$=A;return s(),d(N,null,[n("div",I,[n("div",J,[t(r)?i("",!0):(s(),a(b,{key:0,pdfs:e.pdfs,onSelect:h,onAction1:w,onEmpty:l[0]||(l[0]=K=>o.value=void 0),download_on_click:!1,action1_enabled:!0},null,8,["pdfs"])),t(r)?(s(),d("div",L,[n("div",R,[n("button",{onClick:k,class:"btn btn-primary"},[u(p,{name:"mdi:arrow-left-bold"})])]),t(o)?(s(),a(g,{key:0,class:"h-screen w-full",url:t(o).url},null,8,["url"])):i("",!0)])):i("",!0)]),n("div",j,[n("div",q,[n("div",G,[t(o)===void 0?(s(),a(x,{key:0,"show-files":!1,"upload-url":"upload_url","session-path":"check"},{default:D(()=>[n("div",H,[u(p,{name:"mdi:file-arrow-up-down-outline",size:"128"})])]),_:1})):i("",!0),t(o)?(s(),a(C,{key:1,path:t(y)},null,8,["path"])):i("",!0)])])])]),t(c)?(s(),a($,{key:0,conversation:t(c),animate:e.animate},null,8,["conversation","animate"])):i("",!0)],64)}}});export{go as default};
