(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2257e4"],{e542:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isAuthenticated?s("div",{staticClass:"container"},[s("div",{staticClass:"post"},[s("div",{staticClass:"post__header"},[s("form",{staticStyle:{width:"100%"}},[s("fieldset",[s("legend",[t._v("Разлогин")]),s("button",{on:{click:function(e){return e.preventDefault(),t.signout()}}},[t._v("Выйти")])])])])])]):s("div",{staticClass:"container"},[s("div",{staticClass:"post"},[s("div",{staticClass:"post__header"},[s("form",{staticStyle:{width:"100%"}},[s("fieldset",[s("legend",[t._v("Авторизация")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.login,expression:"user.login"}],attrs:{type:"text",placeholder:"login"},domProps:{value:t.user.login},on:{input:function(e){e.target.composing||t.$set(t.user,"login",e.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),s("br"),s("button",{on:{click:function(e){return e.preventDefault(),t.signin()}}},[t._v("Войти")])])])])])])},r=[],i=(s("d3b7"),s("96cf"),{data:function(){var t={user:{login:"",password:""}};return t},methods:{signin:function(){var t,e,s;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.user.password,e=this.user.login,this.user.password="",n.next=5,regeneratorRuntime.awrap(this.$store.dispatch("account/signin",{login:e,password:t}));case 5:s=n.sent,console.log(s);case 7:case"end":return n.stop()}}),null,this)},signout:function(){this.$store.dispatch("account/signout")}}}),o=i,a=s("2877"),u=Object(a["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2257e4.2ada424c.js.map