(function(t){function e(e){for(var o,a,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);s&&s(e);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},u=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/sticky-notes/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"417f":function(t,e,n){"use strict";n("b021")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Board")],1)},u=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"board"}},t._l(t.notes,(function(e){return n("movable",{key:e.id,staticClass:"move",style:{"background-color":e.color,color:t.getTextColor(e.color)},attrs:{posTop:e.x,posLeft:e.y}},[n("span",[t._v(t._s(e.content))])])})),1)},c=[],i={name:"Board",components:{},data:function(){return{notes:[]}},methods:{addStickyNote:function(){this.$refs.modal.showModal()},getTextColor:function(t){var e=t.substring(1),n=parseInt(e,16),o=n>>16&255,r=n>>8&255,u=n>>0&255,a=.2126*o+.7152*r+.0722*u;return a<60?"#fff":"#000"}},mounted:function(){var t=this;this.$http.get("https://api.mockaroo.com/api/8352bfd0?count=1000&key=5f5763a0").then((function(e){console.log(e),t.notes=e.data}))}},l=i,s=(n("417f"),n("2877")),f=Object(s["a"])(l,a,c,!1,null,"6c9a458d",null),p=f.exports,d={name:"App",components:{Board:p}},b=d,h=(n("034f"),Object(s["a"])(b,r,u,!1,null,null,null)),v=h.exports,y=n("3048"),m=n("94ed"),g=n("1051"),O=n.n(g),_=n("bc3a"),w=n.n(_);o["default"].use(y["a"],{icons:m}),o["default"].prototype.$http=w.a,o["default"].use(O.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},b021:function(t,e,n){}});
//# sourceMappingURL=app.e2cd5ee4.js.map