(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),m=a.n(c),r=a(6),s=(a(23),a(5)),i=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(e){var t=e.match,a=t.params.tabId?i.findIndex(function(e){return e.id===t.params.tabId}):0;return a=a>=0?a:0,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"new"},l.a.createElement("h1",null,"This is a TabPage for Tabs with Router"),l.a.createElement("h3",null,i.length," tabs avalable")),l.a.createElement("div",{className:"panel"},i.map(function(e,t){return l.a.createElement("div",{key:e.title},l.a.createElement(r.b,{className:a===t?"tab selected":"tab",to:"/tabs/".concat(e.id)},e.title))})),l.a.createElement("div",{className:"tabText"},l.a.createElement("div",{className:"tabInner"},l.a.createElement("h2",null,i[a].title),l.a.createElement("p",null,i[a].content))))},u=function(){return l.a.createElement("div",{className:"new"},l.a.createElement("h1",null,"This is a HomePage for Tabs with Router"))},E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"panel"},l.a.createElement("li",null,l.a.createElement(r.c,{className:"menuItem",activeClassName:"selected",to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(r.c,{className:"menuItem",activeClassName:"selected",to:"/tabs"},"Tabs")))),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:u}),l.a.createElement(s.a,{path:"/tabs/:tabId?",component:o})))};m.a.render(l.a.createElement(r.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0d84f33c.chunk.js.map