exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return unFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* unused harmony export createArticle */
/* unused harmony export updateArticle */
/* unused harmony export deleteArticle */
/* unused harmony export addComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteComments; });
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

const createArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles',
    method: 'POST'
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=08c20609&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>\n            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games\n          </p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>\n             \n            Follow Eric Simons \n          </button></div></div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><a href class=\"nav-link active\">My Articles</a></li> <li class=\"nav-item\"><a href class=\"nav-link\">Favorited Articles</a></li></ul></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/Qr71crq.jpg\"></a> <div class=\"info\"><a href class=\"author\">Eric Simons</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 29\n            </button></div> <a href class=\"preview-link\"><h1>How to build webapps that scale</h1> <p>This is the description for the post.</p> <span>Read more...</span></a></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/N4VcUeJ.jpg\"></a> <div class=\"info\"><a href class=\"author\">Albert Pai</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 32\n            </button></div> <a href class=\"preview-link\"><h1>The song you won't ever stop singing. No matter how hard you try.</h1> <p>This is the description for the post.</p> <span>Read more...</span> <ul class=\"tag-list\"><li class=\"tag-default tag-pill tag-outline\">Music</li> <li class=\"tag-default tag-pill tag-outline\">Song</li></ul></a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=08c20609&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js
 // GET /api/profiles/:username

const getProfiles = username => {
  return Object(request["b" /* request */])({
    url: `/api/profiles/${username}`,
    method: 'GET'
  });
};
// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'auth',

  data() {
    return {
      profile: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async created() {
    this.getProfile();
    this.getArticleList();
    this.getFeedArticleList();
  },

  methods: {
    async getProfile() {
      const {
        username
      } = this.$route.params;
      const {
        data
      } = await getProfiles(username);
      this.profile = data.profile;
    },

    async getArticleList() {
      const author = this.$route.params;
      const {
        data
      } = await getProfiles({
        author
      });
      console.log(data);
    },

    async getFeedArticleList() {
      const author = this.$route.params;
      const {
        data
      } = await getProfiles({
        author,
        favorited: this.user.username
      });
      console.log(data);
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73b72a2a"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map