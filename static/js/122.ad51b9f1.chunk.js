"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[122],{6488:function(t,e,r){r.d(e,{_L:function(){return i},on:function(){return o},tT:function(){return l},tx:function(){return p},zv:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"eda1cd62ac56f17bba5191ebaf4fad10"}}),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/week");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6001:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(6871),a=r(501),c=r(2301),s=r(184);function u(t){var e=t.movies,r=(0,n.TH)();return(0,s.jsx)("ul",{className:c.Z.list,children:e&&e.map((function(t){return(0,s.jsxs)("li",{className:c.Z.item,children:[(0,s.jsx)("img",{className:c.Z.img,src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:t.original_title}),(0,s.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(t.id),children:(0,s.jsx)("span",{className:c.Z.title,children:t.title})})]},t.id)}))})}},9122:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n=r(885),a=r(2791),c=r(501),s=r(6488),u="Searchbar_wrap__FXu2S",i="Searchbar_searchForm__Bt5yh",o="Searchbar_btn__MFSUa",l="Searchbar_icon__2A9yR",f="Searchbar_input__19umw",p=r(184);function m(t){var e=t.handleSubmit;return(0,p.jsx)("div",{className:u,children:(0,p.jsx)("form",{className:i,onSubmit:e,children:(0,p.jsxs)("label",{className:u,children:[(0,p.jsx)("button",{className:o,type:"submit",children:(0,p.jsx)("span",{className:l,children:" \ud83d\udd0d"})}),(0,p.jsx)("input",{className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"search"})]})})})}var h=r(6001),v=r(8809);function _(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],u=e[1],i=(0,c.lr)(),o=(0,n.Z)(i,2),l=o[0],f=o[1],_=(0,a.useState)(!1),d=(0,n.Z)(_,2),x=d[0],b=d[1],g=l.get("search");return(0,a.useEffect)((function(){g&&(b(!0),(0,s.on)(g).then((function(t){return u(t.results)})).catch((function(t){return console.log(t)})).finally(b(!1)))}),[g]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{handleSubmit:function(t){if(t.preventDefault(),""===(null===g||void 0===g?void 0:g.trim()))return alert("Try again");var e=t.currentTarget;f({search:e.elements.search.value}),e.reset()}}),x&&(0,p.jsx)(v.Z,{}),r&&(0,p.jsx)(h.Z,{movies:r})]})}},2301:function(t,e){e.Z={list:"List_list__AK7hC",img:"List_img__2KN-b",title:"List_title__ZjuBo",name:"List_name__AFBHu",desc:"List_desc__ap3L+"}}}]);
//# sourceMappingURL=122.ad51b9f1.chunk.js.map