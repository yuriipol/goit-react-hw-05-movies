"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{6096:function(r,e,t){t.r(e),t.d(e,{default:function(){return v}});var n=t(5861),a=t(885),u=t(7757),c=t.n(u),s={list:"Reviews_list__imtkb"},i=t(6871),o=t(2791),p=t(7218),f=t(184),v=function(){var r=(0,i.UO)().movieId,e=(0,o.useState)([]),t=(0,a.Z)(e,2),u=t[0],v=t[1];console.log(u),(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.th)(r).then((function(r){return r.results}));case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r]);var h=u.map((function(r){var e=r.id,t=r.author,n=r.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:t}),(0,f.jsx)("p",{className:s.reviews,children:n})]},e)}));return(0,f.jsx)("div",{className:s.container,children:0!==u.length?(0,f.jsx)("ul",{className:s.list,children:h}):(0,f.jsx)("h2",{children:"No reviews"})})}},7218:function(r,e,t){t.d(e,{Df:function(){return i},EQ:function(){return p},bp:function(){return o},gf:function(){return f},th:function(){return v}});var n=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"995e05884fd0ec30189499a041c3fca1"}}),i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/trending/movie/day",{params:{}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e,t){var n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/search/movie",{params:{query:e,page:t}});case 2:return n=r.sent,a=n.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e),{params:{movie_id:e}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/credits"),{params:{movie_id:e}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/reviews"),{params:{movie_id:e}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=96.ee551e79.chunk.js.map