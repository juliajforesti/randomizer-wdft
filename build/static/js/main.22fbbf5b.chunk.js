(this.webpackJsonprandomizer=this.webpackJsonprandomizer||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=a(7),o=a(1),s=(a(23),function(){return r.a.createElement("div",{className:""},r.a.createElement("footer",{className:"page-footer font-small blue"},r.a.createElement("div",{className:"footer footer-copyright text-center py-3"},"Developed by ",r.a.createElement("strong",null," Julia Jaeger Foresti"),r.a.createElement("a",{href:"https://github.com/juliajforesti",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github mx-2","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/juliajforesti/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))))}),m=function(){return r.a.createElement("div",{className:"App d-flex align-items-center justify-content-center"},r.a.createElement("h1",{className:"pt-3"},"IronRandomizer"))},u=function(){return r.a.createElement("div",{className:"d-flex justify-content-around p-4"},r.a.createElement(i.b,{className:"btn btn-light",to:"/randomizer"},"Home"),r.a.createElement(i.b,{className:"btn btn-light",to:"/randomizer/random"},"Randomizer"),r.a.createElement(i.b,{className:"btn btn-light",to:"/randomizer/pairs"},"Pairs Generator"),r.a.createElement(i.b,{className:"btn btn-light",to:"/randomizer/random-order"},"Random Order"))},d=a(3),f=a(9),p=function(){var e=["Aline","Denis","Denison","Fellype","Guilherme","Hector","Juliana","Laura","Leonardo","Patrick","Rodrigo","Tassia","Thal\xeda","Vitor"],t=Object(n.useState)({pairs:[],isLoading:!1}),a=Object(f.a)(t,2),l=a[0],c=a[1],i=function(e){var t=e.length,a=0,n="";if(0===t)return e;for(;--t;)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Pairs Generator"),r.a.createElement("button",{className:"btn my-5 px-5",onClick:function(t){c(Object(d.a)(Object(d.a)({},l),{},{isLoading:!0})),setTimeout((function(){c(Object(d.a)(Object(d.a)({},l),{},{isLoading:!1,pairs:i([].concat(e))}))}),3e3)}},"GO!"),r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},l.isLoading?r.a.createElement("div",{className:"spinner-border text-light",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"students-list d-flex flex-column flex-wrap align-content-center justify-content-center"},r.a.createElement("div",null,l.pairs.filter((function(e,t){return t%2===0})).map((function(e,t){return r.a.createElement("p",{key:t},t+1,". ",e,",")}))),r.a.createElement("div",null,l.pairs.filter((function(e,t){return t%2!==0})).map((function(e,t){return r.a.createElement("p",{key:t},e)}))))))},E=function(){var e=["Aline","Denis","Denison","Fellype","Guilherme","Hector","Juliana","Laura","Leonardo","Patrick","Rodrigo","Tassia","Thal\xeda","Vitor"],t=Object(n.useState)({students:[""],isLoading:!1}),a=Object(f.a)(t,2),l=a[0],c=a[1],i=function(e){var t=e.length,a=0,n="";if(0===t)return e;for(;--t;)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Random Order"),r.a.createElement("button",{className:"btn my-5 px-5",onClick:function(t){c(Object(d.a)(Object(d.a)({},l),{},{isLoading:!0})),setTimeout((function(){c(Object(d.a)(Object(d.a)({},l),{},{isLoading:!1,students:i([].concat(e))}))}),3e3)}},"GO!"),r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center align-content-center"},l.isLoading?r.a.createElement("div",{className:"spinner-border text-light",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"students-list d-flex flex-column flex-wrap"},l.students.map((function(e,t,a){return 1===a.length?r.a.createElement("div",{key:t}):r.a.createElement("p",{key:t,className:"pl-5"},r.a.createElement("strong",null,t+1,". ")," ",e)})))))},h=function(){var e=Object(n.useState)({students:[].concat(["Aline","Denis","Denison","Fellype","Guilherme","Hector","Juliana","Laura","Leonardo","Patrick","Rodrigo","Tassia","Thal\xeda","Vitor"]),picked:"",isLoading:!1}),t=Object(f.a)(e,2),a=t[0],l=t[1],c=a.students.length;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Randomizer"),r.a.createElement("button",{className:"btn my-3 px-5",onClick:function(e){var t=Math.floor(Math.random()*c),n=0,r=setInterval((function(){n=(n+1)%c,l(Object(d.a)(Object(d.a)({},a),{},{isLoading:!0,picked:a.students[n]}))}),150);setTimeout((function(){l(Object(d.a)(Object(d.a)({},a),{},{picked:a.students[t],isLoading:!1})),clearInterval(r)}),4e3)}},"GO!"),r.a.createElement("div",{className:"result-box d-flex flex-column align-items-center justify-content-center align-content-center"},a.isLoading?r.a.createElement("h2",{className:"result"},a.picked):r.a.createElement("h2",{className:"result",style:{color:"#223"}},a.picked)))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(u,null),r.a.createElement(o.a,{exact:!0,path:"/randomizer",component:m}),r.a.createElement(o.a,{exact:!0,path:"/randomizer/random",component:h}),r.a.createElement(o.a,{exact:!0,path:"/randomizer/pairs",component:p}),r.a.createElement(o.a,{exact:!0,path:"/randomizer/random-order",component:E}),r.a.createElement(s,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.22fbbf5b.chunk.js.map