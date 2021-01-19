exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return unFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArticle; });
/* unused harmony export updateArticle */
/* unused harmony export deleteArticle */
/* unused harmony export addComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteComments; });
/* unused harmony export getFollow */
/* unused harmony export deleteFollow */
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles',
    method: 'GET',
    params
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles/feed',
    method: 'GET',
    params
  });
};
const favorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'POST'
  });
};
const unFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'DELETE'
  });
}; // GET /api/articles/:slug

const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'GET'
  });
}; // POST /api/articles

const createArticle = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles',
    method: 'POST',
    data
  });
}; // PUT /api/articles/:slug

const updateArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'PUT'
  });
}; // DELETE /api/articles/:slug

const deleteArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'DELETE'
  });
}; // POST /api/articles/:slug/comments

const addComment = (data, slug) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments`,
    method: 'POST',
    data
  });
}; // GET /api/articles/:slug/comments

const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments`,
    method: 'GET'
  });
}; // DELETE /api/articles/:slug/comments/:ids

const deleteComments = (slug, ids) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments/${ids}`,
    method: 'DELETE'
  });
}; // Follow user POST /api/profiles/:username/follow

const getFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'POST'
  });
}; // Unfollow user DELETE /api/profiles/:username/follow

const deleteFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'DELETE'
  });
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=715cf01b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"home-page\">","</div>",[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(!!_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                  active: _vm.tab === 'your_feed' 
                              },attrs:{"exact":"","to":{
                                  name: 'home',
                                  query: {
                                      tab: 'your_feed'
                                  }
                              }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                  active: _vm.tab === 'global_feed' 
                              },attrs:{"exact":"","to":{
                                  name: 'home',
                                  query: {
                                      tab: 'global_feed'
                                  }
                              }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(!!_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                  active: _vm.tab === 'tag' 
                              },attrs:{"exact":"","to":{
                                  name: 'home',
                                  query: {
                                      tab: 'tag',
                                      tag: _vm.tag
                                  }
                              }}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":'/profile/'+article.author.username}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":'/profile/'+article.author.username}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoritedisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                              active: article.favorited
                          }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                          ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":'/article/'+ article.slug}},[_c('h1',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.body))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass(null,item === _vm.page ? 'page-item active': 'page-item'))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":'/?page='+item}},[_vm._v(_vm._s(item))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                          name: 'home',
                          query: {
                              tab: 'tag',
                              tag: item
                          }
                      }}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=715cf01b&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(29);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/tags.js

const getTags = () => {
  return Object(request["b" /* request */])({
    url: '/api/tags',
    method: 'GET'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'homeIndex',

  async asyncData({
    query
  }) {
    const page = Number(query.page) || 1;
    const limit = 20;
    const {
      tag,
      tab = "global_feed"
    } = query;
    const loadArticles = tab === "your_feed" ? api_article["g" /* getFeedArticles */] : api_article["e" /* getArticles */];
    const [articlesData, tagsData] = await Promise.all([loadArticles({
      limit,
      tag,
      offset: (page - 1) * limit
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articlesData.data;
    const {
      tags
    } = tagsData.data;
    articles.forEach(item => item.favoritedisabled = false);
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags,
      tag,
      tab
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoritedisabled = true;

      if (!article.favorited) {
        await Object(api_article["c" /* favorite */])(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      } else {
        await Object(api_article["h" /* unFavorite */])(article.slug);
        article.favoritesCount -= 1;
        article.favorited = false;
      }

      article.favoritedisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a8ca139"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map