import{d as i,r as u,o as e,i as o,b as d,w as l,g as r,t as a,s as n,e as c}from"./app.02340a07.js";const x={class:"pager"},k=c("br",null,null,-1),m={key:0},v=c("br",null,null,-1),h={key:0},B=i({props:{data:{type:Object,required:!0}},setup(t){return(y,f)=>{const s=u("RouterLink");return e(),o("div",x,[t.data.next?(e(),d(s,{key:0,class:"next",to:t.data.next.link},{default:l(()=>[r(a(t.data.next.text),1),k,t.data.next.title?(e(),o("span",m,a(t.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),t.data.prev?(e(),d(s,{key:1,class:"previous",to:t.data.prev.link},{default:l(()=>[r(a(t.data.prev.text),1),v,t.data.prev.title?(e(),o("span",h,a(t.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});export{B as _};
