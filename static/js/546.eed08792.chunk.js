"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[546],{6488:function(t,n,e){e.d(n,{_L:function(){return s},on:function(){return o},tT:function(){return f},tx:function(){return l},zv:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),i=e(4569),c=e.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"eda1cd62ac56f17bba5191ebaf4fad10"}}),s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/week");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:n}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6001:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(501),a=e(2301),u=e(184);function i(t){var n=t.movies;return(0,u.jsx)("ul",{className:a.Z.list,children:n&&n.map((function(t){return(0,u.jsxs)("li",{className:a.Z.item,children:[(0,u.jsx)("img",{className:a.Z.img,src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:t.original_title}),(0,u.jsx)(r.rU,{to:"/movies/".concat(t.id),children:(0,u.jsx)("span",{className:a.Z.title,children:t.title})})]},t.id)}))})}},4546:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(885),a=e(2791),u=e(6488),i=e(6001),c=e(184);function s(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,a.useEffect)((function(){(0,u._L)().then((function(t){return s(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,c.jsx)(i.Z,{movies:e})}function o(){return(0,c.jsxs)("main",{children:[(0,c.jsx)("h2",{style:{textAlign:"center",margin:"10px"},children:"Trend week"}),(0,c.jsx)(s,{})]})}},2301:function(t,n){n.Z={list:"List_list__AK7hC",img:"List_img__2KN-b",title:"List_title__ZjuBo",name:"List_name__AFBHu",desc:"List_desc__ap3L+"}}}]);
//# sourceMappingURL=546.eed08792.chunk.js.map