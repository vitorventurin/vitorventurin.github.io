(this.webpackJsonpbela=this.webpackJsonpbela||[]).push([[0],{18:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(5),i=a(0),o=a.n(i),r=a(15),s=a.n(r),l=a(16),d=a(17),u=a.n(d),m=(a(41),0);setInterval((function(){window.location.hash="#"+m,m++}),1e4);var h=function(e){var t=e.url,a=e.key,n=e.id;return o.a.createElement("div",{className:"image-item",key:a,id:n},o.a.createElement("img",{src:t,alt:"ninth!"}))},f=function(){var e=o.a.useState([]),t=Object(c.a)(e,2),a=t[0],i=t[1],r=o.a.useState(!1),d=Object(c.a)(r,2),u=d[0],m=d[1];o.a.useEffect((function(){f()}),[]);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="https://api.unsplash.com",c="c24234d52adedfd491a272d8400b6588a6eb8137229bd85e7e61ae8fdc0e8455";s.a.get("".concat(t,"/photos/random?client_id=").concat(c,"&count=").concat(e,"&orientation=landscape")).then((function(e){i([].concat(Object(n.a)(a),Object(n.a)(e.data))),m(!0)}))};return o.a.createElement("div",{className:"hero is-fullheight is-bold is-info"},o.a.createElement("div",{className:"hero-body"},o.a.createElement("div",{className:"container"},o.a.createElement(l.a,{dataLength:a,next:function(){return f(5)},hasMore:!0,loader:o.a.createElement("img",{src:"https://9th-studio.github.io/assets/img/logo.png",alt:"loading"})},o.a.createElement("div",{className:"image-grid"},u?a.map((function(e,t){return o.a.createElement(h,{url:e.urls.full,key:t,id:t})})):"")))))};u.a.render(o.a.createElement(f,null),document.getElementById("root"))},41:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.99c9e729.chunk.js.map