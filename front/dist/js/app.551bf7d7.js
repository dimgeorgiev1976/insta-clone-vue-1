(function(e){function t(t){for(var r,i,s=t[0],o=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-25e84f57":"12887381","chunk-2d0c17c3":"7189cef0","chunk-2d21b356":"193eecca","chunk-2d2257e4":"2ada424c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=i(e);var u=new Error;c=function(t){o.onerror=o.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:o})}),12e4);o.onerror=o.onload=c,document.head.appendChild(o)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__row"},[e._m(0),e._m(1),n("div",{staticClass:"header__links"},[n("router-link",{staticClass:"header__link",attrs:{to:"/account"}},[n("i",{staticClass:"fas fa-user"})]),e.isAuthenticated?n("router-link",{staticClass:"header__link",attrs:{to:"/post/create"}},[n("i",{staticClass:"fas fa-paper-plane"})]):e._e()],1)])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"header__logo",attrs:{href:"index.html"}},[n("i",{staticClass:"fab fa-dev"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header__search"},[n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",placeholder:"Поиск"}}),n("div",{staticClass:"search__cancel search__cancel--active"},[n("i",{staticClass:"fas fa-times-circle"})])])])}],o=n("2877"),u={},p=Object(o["a"])(u,i,s,!1,null,null,null),l=p.exports,d={components:{AppHeader:l}},f=d,h=Object(o["a"])(f,a,c,!1,null,null,null),m=h.exports,v=(n("d3b7"),n("8c4f"));r["a"].use(v["a"]);var b=new v["a"]({mode:"history",routes:[{path:"/account",component:function(){return n.e("chunk-2d2257e4").then(n.bind(null,"e542"))}},{path:"/wall",component:function(){return n.e("chunk-2d0c17c3").then(n.bind(null,"45f2"))}},{path:"/post/create",component:function(){return n.e("chunk-2d21b356").then(n.bind(null,"bf95"))}},{path:"/post/:id/edit",component:function(){return n.e("chunk-25e84f57").then(n.bind(null,"0a8c"))}},{path:"*",redirect:"/wall"}]}),g=n("2f62"),w=(n("96cf"),{namespaced:!0,state:{isAuthenticated:!1,user:{id:null,name:null,sername:null}},mutations:{signin:function(e,t){e.isAuthenticated=!0,Object.assign(e.user,t)},signout:function(e){e.isAuthenticated=!1,Object.assign(e.user,{id:null,name:null})}},actions:{signin:function(e,t){var n,r,a,c;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(n=e.commit,r=e.state,!r.isAuthenticated){i.next=3;break}return i.abrupt("return",!0);case 3:return i.next=5,regeneratorRuntime.awrap(fetch("/api/account/signin",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({login:t.login,password:t.password})}));case 5:return a=i.sent,i.next=8,regeneratorRuntime.awrap(a.json());case 8:if(c=i.sent,!c.isAuthenticated){i.next=12;break}return n("signin",c.user),i.abrupt("return",!0);case 12:return i.abrupt("return",!1);case 13:case"end":return i.stop()}}))},continue:function(e){var t,n,r,a;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:if(t=e.state,n=e.commit,!t.isAuthenticated){c.next=3;break}return c.abrupt("return",!0);case 3:return c.next=5,regeneratorRuntime.awrap(fetch("/api/account/continue",{method:"POST"}));case 5:return r=c.sent,c.next=8,regeneratorRuntime.awrap(r.json());case 8:if(a=c.sent,!a.isAuthenticated){c.next=12;break}return n("signin",a.user),c.abrupt("return",!0);case 12:return c.abrupt("return",!1);case 13:case"end":return c.stop()}}))},signout:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.state,n=e.commit,t.isAuthenticated){r.next=3;break}return r.abrupt("return",!0);case 3:return fetch("/api/account/signout",{method:"POST"}),n("signout"),r.abrupt("return",!0);case 6:case"end":return r.stop()}}))}}}),y=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("7db0"),n("caad"),n("d81d"),n("4e82"),n("2532"),n("3ca3"),n("ddb0"),n("2909")),x=function(e){return JSON.parse(JSON.stringify(e))},_=function(e){return fetch(e,{method:"GET"}).then((function(e){return e.json()}))},k={namespaced:!0,state:{posts:[]},mutations:{reinit:function(e){e.posts=[]},addPost:function(e,t){var n=!0,r=!1,a=void 0;try{for(var c,i=e.posts[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;if(s.id===t.id)return Object.assign(s,t)}}catch(o){r=!0,a=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}e.posts=[].concat(Object(y["a"])(e.posts),[x(t)]).sort((function(e,t){return t.id-e.id}))}},actions:{loadWall:function(e){var t,n,r,a,c,i,s,o,u;return regeneratorRuntime.async((function(p){while(1)switch(p.prev=p.next){case 0:return t=e.commit,p.next=3,regeneratorRuntime.awrap(_("/api/wall"));case 3:return n=p.sent,p.next=6,regeneratorRuntime.awrap(Promise.all(n.map((function(e){return _("/api/post/".concat(e))}))));case 6:for(r=p.sent,t("reinit"),a=!0,c=!1,i=void 0,p.prev=11,s=r[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)u=o.value,t("addPost",u);p.next=19;break;case 15:p.prev=15,p.t0=p["catch"](11),c=!0,i=p.t0;case 19:p.prev=19,p.prev=20,a||null==s.return||s.return();case 22:if(p.prev=22,!c){p.next=25;break}throw i;case 25:return p.finish(22);case 26:return p.finish(19);case 27:case"end":return p.stop()}}),null,null,[[11,15,19,27],[20,,22,26]])},loadPost:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,regeneratorRuntime.awrap(_("/api/post/".concat(t)));case 3:return r=a.sent,n("addPost",r),a.abrupt("return",r);case 6:case"end":return a.stop()}}))},getPostById:function(e,t){var n,r,a;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:if(n=e.state,r=e.dispatch,a=n.posts.map((function(e){return e.id})).includes(t),a){c.next=5;break}return c.next=5,regeneratorRuntime.awrap(r("loadPost",t));case 5:return c.abrupt("return",n.posts.find((function(e){return e.id===t})));case 6:case"end":return c.stop()}}))},sendPost:function(e,t){var n,r,a,c,i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(n=e.rootState,r=t.file,a=t.description,n.account&&n.account.isAuthenticated){s.next=4;break}return s.abrupt("return",!1);case 4:return c=new FormData,c.append("image",r),c.append("description",a),s.next=9,regeneratorRuntime.awrap(fetch("/api/post/create",{method:"POST",body:c}).then((function(e){return e.json()})));case 9:return i=s.sent,s.abrupt("return",i);case 11:case"end":return s.stop()}}))},addComment:function(e,t){var n,r,a;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:if(n=e.rootState,n.account&&n.account.isAuthenticated){c.next=3;break}return c.abrupt("return",!1);case 3:return r=new FormData,r.append("postId",t.postId),r.append("comment",t.comment),c.next=8,regeneratorRuntime.awrap(fetch("/api/comment/create",{method:"POST",body:r}));case 8:a=c.sent,console.log(a);case 10:case"end":return c.stop()}}))}}};r["a"].use(g["a"]);var O=new g["a"].Store({modules:{account:w,content:k}});r["a"].config.productionTip=!1,O.dispatch("account/continue"),r["a"].mixin({computed:{isAuthenticated:function(){return O.state.account.isAuthenticated}}}),new r["a"]({router:b,store:O,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.551bf7d7.js.map