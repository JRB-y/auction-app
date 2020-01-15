(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        inset: false
      },
      has_error: false
    };
  },
  mounted: function mounted() {},
  methods: {
    register: function register() {
      // get the redirect object
      var redirect = this.$auth.redirect();
      var app = this;
      this.$auth.register({
        params: {
          name: app.user.name,
          email: app.user.email,
          password: app.user.password,
          password_confirmation: app.user.password_confirmation
        },
        success: function success() {
          // handle redirection
          // const redirectTo = redirect ? redirect.form.name : this.$auth.user().role ===
          this.$router.push("/login");
        },
        error: function error() {
          app.has_error = true;
        },
        rememberMe: true,
        fetchUser: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        {
          staticClass: "pr-5 pl-5 mx-auto pb-5",
          attrs: { "max-width": "500", outlined: "" }
        },
        [
          _c("H1", { staticClass: "title" }, [_vm._v("Créer un compte")]),
          _vm._v(" "),
          _c(
            "v-list-item-subtitle",
            [
              _vm._v(
                "\n      La création de compte est rapide et facile.\n      "
              ),
              _c("br"),
              _vm._v("Si vous avez déjà un compte veuillez vous\n      "),
              _c("router-link", { attrs: { to: "/login" } }, [
                _vm._v("connecter")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              attrs: {
                color: "red lighten-2",
                dismissible: "",
                border: "left",
                elevation: "2",
                "colored-border": "",
                icon: "mdi-alert"
              },
              model: {
                value: _vm.has_error,
                callback: function($$v) {
                  _vm.has_error = $$v
                },
                expression: "has_error"
              }
            },
            [_vm._v("Impossible de se connecter")]
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              attrs: { autocomplete: "off", method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.register($event)
                }
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  label: "Nom et Prénom",
                  name: "email",
                  "prepend-icon": "person",
                  type: "email",
                  color: "primary",
                  hint: "Votre nom ne sera pas afficher"
                },
                model: {
                  value: _vm.user.name,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "name", $$v)
                  },
                  expression: "user.name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Email",
                  name: "email",
                  "prepend-icon": "email",
                  type: "email",
                  color: "primary"
                },
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  id: "password",
                  label: "Password",
                  name: "password",
                  "prepend-icon": "lock",
                  color: "primary",
                  type: "password"
                },
                model: {
                  value: _vm.user.password,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "password", $$v)
                  },
                  expression: "user.password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  id: "password_confirmation",
                  label: "Password Confirmation",
                  name: "password_confirmation",
                  "prepend-icon": "lock",
                  color: "primary",
                  type: "password"
                },
                model: {
                  value: _vm.user.password_confirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "password_confirmation", $$v)
                  },
                  expression: "user.password_confirmation"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mr-4",
                  attrs: {
                    type: "submit",
                    dark: "",
                    color: "primary",
                    depressed: "",
                    small: "",
                    block: ""
                  }
                },
                [_vm._v("Enristrer")]
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-5" }),
              _vm._v(" "),
              _c("p", { staticClass: "mt-5" }, [
                _vm._v("Ou vous pouvez créer un compte avec les réseau sociaux")
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 white--text",
                  staticStyle: { "background-color": "#3578E5" },
                  attrs: { block: "", depressed: "", small: "" }
                },
                [
                  _vm._v("\n        Facebook\n        "),
                  _c("v-icon", { attrs: { right: "", dark: "" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 white--text",
                  staticStyle: { "background-color": "#de5246" },
                  attrs: { block: "", depressed: "", small: "" }
                },
                [
                  _vm._v("\n        Google\n        "),
                  _c("v-icon", { attrs: { right: "", dark: "" } })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=ff714c22& */ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=ff714c22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);