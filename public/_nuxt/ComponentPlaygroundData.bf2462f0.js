import b from"./TabsHeader.23aca7b7.js";import g from"./ComponentPlaygroundProps.5823317a.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.5b8548af.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.307142d6.js";import{a as k}from"./index.24ff6140.js";import{d as D,r as V,b as n,c as C,g as P,I as o,J as m,Y as T,f as s,k as I}from"./entry.b0da741b.js";import"./ProseH4.cd49811f.js";import"./ProseCodeInline.5cf20b0e.js";import"./Badge.d58b54e1.js";import"./slot.aa1991d0.js";import"./node.676c5e99.js";import"./ProseP.0e6d06f0.js";const B={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",B,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const w=I(j,[["__scopeId","data-v-ff75821c"]]);export{w as default};