(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"g",(function(){return v})),r.d(e,"c",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"a",(function(){return m}));var n=r(61),c=function(t){return Object(n.b)({url:"/api/articles",method:"GET",params:t})},o=function(t){return Object(n.b)({url:"/api/articles/feed",method:"GET",params:t})},l=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"POST"})},v=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"DELETE"})},f=function(t){return Object(n.b)({url:"/api/articles/".concat(t),method:"GET"})},d=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/comments"),method:"GET"})},m=function(t,e){return Object(n.b)({url:"/api/articles/".concat(t,"/comments/").concat(e),method:"DELETE"})}},262:function(t,e,r){"use strict";r.r(e);r(60),r(24),r(25),r(11),r(49),r(36);var n=r(3),c=r(26),o=r(61),l=function(t){return Object(o.b)({url:"/api/profiles/".concat(t),method:"GET"})},v=(r(187),r(37));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={middleware:"auth",data:function(){return{profile:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.b)(["user"])),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getProfile(),t.getArticleList(),t.getFeedArticleList();case 3:case"end":return e.stop()}}),e)})))()},methods:{getProfile:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.username,e.next=3,l(r);case 3:n=e.sent,data=n.data,t.profile=data.profile;case 6:case"end":return e.stop()}}),e)})))()},getArticleList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params,e.next=3,l({author:r});case 3:n=e.sent,data=n.data,console.log(data);case 6:case"end":return e.stop()}}),e)})))()},getFeedArticleList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params,e.next=3,l({author:r,favorited:t.user.username});case 3:n=e.sent,data=n.data,console.log(data);case 6:case"end":return e.stop()}}),e)})))()}}},m=r(23),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games\n          ")]),t._v(" "),t._m(0)])])])]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn"},[e("i",{staticClass:"ion-plus-round"}),this._v("\n             \n            Follow Eric Simons \n          ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:""}},[t._v("My Articles")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Favorited Articles")])])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Eric Simons")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 29\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("How to build webapps that scale")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/N4VcUeJ.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Albert Pai")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 32\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("The song you won't ever stop singing. No matter how hard you try.")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},[r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Music")]),t._v(" "),r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Song")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);