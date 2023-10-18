import{_ as B}from"./CopyButton.vue.42c6f1b8.js";import{u as N}from"./usePaxparAPI.b9191fef.js";import{u as S}from"./useFeatureFlag.141632e1.js";import{u as U}from"./useProfile.07cb2282.js";import{d as V,a0 as $,O as j,x as I,r as x,o as K,b as L,c as R,e,t,I as s,ar as T,D as k,g as q,F as E}from"./entry.b0da741b.js";import{u as H}from"./fetch.5f303e15.js";const O=e("h1",null,"support",-1),z={class:"form-control w-full max-w-xs"},G={class:"label"},J=e("span",{class:"label-text"},"paxpar backend version",-1),Q={class:"label-text"},W=e("div",{class:"divider"},null,-1),X=e("div",{class:"divider"},null,-1),Y={class:"form-control"},Z=e("span",{class:"label-text"},"Activate preview features",-1),ee=["checked"],se=e("span",{class:"label-text"},"Show debug info",-1),te=["checked"],ae=e("div",{class:"divider"},null,-1),oe={class:"card bg-base-100 shadow-xl"},le={class:"card-body"},ne=e("h2",{class:"card-title"},"paxpar backend",-1),ie=e("div",{class:"divider"},null,-1),re=e("h2",{class:"card-title"},"supabase backend",-1),ce=e("div",{class:"divider"},null,-1),pe=e("h2",{class:"card-title"},"stripe backend",-1),ke=V({__name:"support",async setup(ue){let a,r;const{backend:w,domain:F,useFetchPP:y}=N(),{featureFlagPreview:c,toggleFeatureFlagPreview:P,featureFlagDebug:C,toggleFeatureFlagDebug:de}=S(),{debug:D,debugToggle:p,signatureProviders:_e,storageProviders:be,prefs:A}=([a,r]=$(()=>U()),a=await a,r(),a),l=j(),n=I(),u=x(),i=x();return K(async()=>{u.value=(await y("/api/version")).data;const d=(await H("/metrics","$anH6jDjM2q")).data.value;i.value=d}),(d,o)=>{var _,b,h,g,v,m;const M=B;return L(),R(E,null,[O,e("div",z,[e("label",G,[J,e("span",Q,t(s(u)),1)])]),e("p",null,"paxpar widgets version = "+t(s(i)),1),e("p",null,"front version = "+t(s(i)),1),W,e("p",null,"featureFlagPreview = "+t(s(c)),1),e("p",null,"featureFlagDebug = "+t(s(C)),1),X,e("ul",null,[e("div",Y,[e("label",{onClick:o[0]||(o[0]=f=>s(P)()),class:"label cursor-pointer"},[Z,e("input",{type:"checkbox",class:"toggle",checked:s(c)},null,8,ee)]),e("label",{onClick:o[1]||(o[1]=T((...f)=>s(p)&&s(p)(...f),["prevent"])),class:"label cursor-pointer"},[se,e("input",{type:"checkbox",class:"toggle",checked:s(D)},null,8,te)])])]),ae,k(" prefs: "+t(s(A))+" ",1),e("div",oe,[e("div",le,[ne,e("p",null,"URL = "+t(s(w)),1),e("p",null,"domain = "+t(s(F)),1),ie,re,e("p",null,"URL = "+t(s(l).supabaseUrl),1),e("p",null,[k(" key = "+t(s(l).supabaseKey)+" ",1),q(M,{content:s(l).supabaseKey},null,8,["content"])]),ce,pe,e("p",null,"customer_portal = "+t((b=(_=s(n).paxpar)==null?void 0:_.stripe)==null?void 0:b.customer_portal),1),e("p",null,"pricing_table_id = "+t((g=(h=s(n).paxpar)==null?void 0:h.stripe)==null?void 0:g.pricing_table_id),1),e("p",null,"publishable_key = "+t((m=(v=s(n).paxpar)==null?void 0:v.stripe)==null?void 0:m.publishable_key),1)])])],64)}}});export{ke as _};
