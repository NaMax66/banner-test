(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-339691cf":"95b6a911","chunk-772abfb9":"12f05205","chunk-79225df8":"541800b3","chunk-fe954ade":"0f46752c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-339691cf":1,"chunk-772abfb9":1,"chunk-79225df8":1,"chunk-fe954ade":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-339691cf":"1d09330a","chunk-772abfb9":"1d09330a","chunk-79225df8":"e312ebd3","chunk-fe954ade":"d6a19e6b"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],f=i.getAttribute("data-href");if(f===r||f===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e);var l=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4355:function(e,t,n){"use strict";n("68ef")},"68ef":function(e,t,n){},"9a6b":function(e,t,n){"use strict";n("c17c")},a489:function(e,t,n){},c17c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("5502"),c=n("1da1"),o=n("2909"),u=(n("96cf"),n("4de4"),n("c740"),n("99af"),n("fb6a"),n("d3b7"),n("d4ec")),s=n("bee2"),i=function(){function e(){Object(u["a"])(this,e)}return Object(s["a"])(e,null,[{key:"reportUser",value:function(e){console.error("show popup to user with details",e.message)}},{key:"reportServer",value:function(e){console.error("sending a report about API error",e.message)}}]),e}(),f="https://jsonplaceholder.typicode.com/users",l=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(f,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/").concat(t.id),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/").concat(t),{method:"DELETE"});case 2:if(n=e.sent,200!==n.status){e.next=7;break}return e.abrupt("return","success");case 7:return i.reportUser(new Error("can't delete user with id: "+t)),e.abrupt("return","error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={userList:[]},b={getUsers:function(e){return e.userList}},v={setList:function(e,t){e.userList=t},addUserToList:function(e,t){e.userList.push(t)},removeUserFromList:function(e,t){e.userList=e.userList.filter((function(e){return e.id!==t}))},replaceUserInList:function(e,t){var n=e.userList.findIndex((function(e){return e.id===t.id}));-1!==n&&(e.userList=[].concat(Object(o["a"])(e.userList.slice(0,n)),[t],Object(o["a"])(e.userList.slice(n+1))))}},g={fetchList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,d();case 3:r=t.sent,n("setList",r);case 5:case"end":return t.stop()}}),t)})))()},addUser:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,l(t);case 3:a=n.sent,r("addUserToList",a);case 5:case"end":return n.stop()}}),n)})))()},removeUserFromList:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,m(t);case 3:a=n.sent,"success"===a&&r("removeUserFromList",t);case 5:case"end":return n.stop()}}),n)})))()},changeUserData:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,p(t);case 3:a=n.sent,a.id===t.id&&r("replaceUserInList",a);case 5:case"end":return n.stop()}}),n)})))()}},j={namespaced:!0,state:h,getters:b,mutations:v,actions:g},O=Object(a["a"])({modules:{users:j}}),y=(n("3ca3"),n("ddb0"),n("6c02")),k={mainPage:"/",photos:"/photos",comments:"/comments",users:"/users"},w="users",L=function(){return n.e("chunk-fe954ade").then(n.bind(null,"051b"))},x=[{path:k[w],name:w,component:L}],_="comments",R=function(){return n.e("chunk-772abfb9").then(n.bind(null,"1980"))},E=[{path:k[_],name:_,component:R}],P="photos",U=function(){return n.e("chunk-339691cf").then(n.bind(null,"724c"))},S=[{path:k[P],name:P,component:U}],N=function(){return n.e("chunk-79225df8").then(n.bind(null,"e5ee"))},T="mainPage",C={path:k[T],name:T,component:N},A=Object(y["a"])({history:Object(y["b"])(),routes:[C].concat(Object(o["a"])(x),Object(o["a"])(E),Object(o["a"])(S))});function B(e,t,n,a,c,o){var u=Object(r["y"])("router-view"),s=Object(r["y"])("LayoutDefault");return Object(r["q"])(),Object(r["d"])(s,null,{default:Object(r["E"])((function(){return[Object(r["h"])(u)]})),_:1})}var D={class:"layout-default"},I={class:"main-content"};function F(e,t,n,a,c,o){var u=Object(r["y"])("navigation-sidebar");return Object(r["q"])(),Object(r["e"])("div",D,[Object(r["h"])(u),Object(r["f"])("main",I,[Object(r["x"])(e.$slots,"default",{},void 0,!0)])])}var q={class:"navigation-sidebar"},J={class:"navigation-list"},M={class:"navigation-list__item"},H=Object(r["g"])("main"),K={class:"navigation-list__item"},$=Object(r["g"])("users"),z={class:"navigation-list__item"},G=Object(r["g"])("comments"),Q={class:"navigation-list__item"},V=Object(r["g"])("photos");function W(e,t,n,a,c,o){var u=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",q,[Object(r["f"])("ul",J,[Object(r["f"])("li",M,[Object(r["h"])(u,{class:"router-link","active-class":"router-link--active",to:e.getLinkByRouteName("mainPage")},{default:Object(r["E"])((function(){return[H]})),_:1},8,["to"])]),Object(r["f"])("li",K,[Object(r["h"])(u,{class:"router-link","active-class":"router-link--active",to:e.getLinkByRouteName("users")},{default:Object(r["E"])((function(){return[$]})),_:1},8,["to"])]),Object(r["f"])("li",z,[Object(r["h"])(u,{class:"router-link","active-class":"router-link--active",to:e.getLinkByRouteName("comments")},{default:Object(r["E"])((function(){return[G]})),_:1},8,["to"])]),Object(r["f"])("li",Q,[Object(r["h"])(u,{class:"router-link","active-class":"router-link--active",to:e.getLinkByRouteName("photos")},{default:Object(r["E"])((function(){return[V]})),_:1},8,["to"])])])])}var X=Object(r["i"])({name:"NavigationSidebar",methods:{getLinkByRouteName:function(e){return k[e]}}}),Y=(n("4355"),n("6b0d")),Z=n.n(Y);const ee=Z()(X,[["render",W],["__scopeId","data-v-434214d9"]]);var te=ee,ne=Object(r["i"])({name:"LayoutDefault",components:{NavigationSidebar:te}});n("ec5e");const re=Z()(ne,[["render",F],["__scopeId","data-v-73d278e2"]]);var ae=re,ce=Object(r["i"])({name:"App",components:{LayoutDefault:ae}});n("9a6b");const oe=Z()(ce,[["render",B]]);var ue=oe,se=Object(r["c"])(ue);se.use(O),se.use(A),se.mount("#app")},ec5e:function(e,t,n){"use strict";n("a489")}});
//# sourceMappingURL=app.600cd8de.js.map