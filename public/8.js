(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AdminLayout */ "./resources/js/components/Admin/AdminLayout.vue");
/* harmony import */ var _Product_ProductsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Product/ProductsList */ "./resources/js/components/Product/ProductsList.vue");
/* harmony import */ var _Product_ProductForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Product/ProductForm */ "./resources/js/components/Product/ProductForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    AdminLayout: _AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductList: _Product_ProductsList__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductForm: _Product_ProductForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      products: [],
      dialog: false,
      search: "",
      defaultProduct: {
        id: "",
        name: "",
        desc: "",
        img_path: ""
      },
      editedProduct: {
        id: "",
        name: "",
        desc: "",
        img_path: ""
      },
      image: null,
      editedIndex: -1
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    // get all the products
    getProducts: function getProducts() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/product").then(function (data) {
        _this.products = data.data;
      });
    },
    // when user click on "Nouveau Produit" btn
    newProduct: function newProduct() {
      Object.assign(this.editedProduct, this.defaultProduct);
      this.editedIndex = -1;
      this.dialog = true;
    },
    // delete Product
    deleteProduct: function deleteProduct(item) {
      var _this2 = this;

      // alert("Parent");
      var index = this.products.indexOf(item);

      if (index > -1) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/product/".concat(item.id)).then(function (data) {
          console.log(data);

          _this2.products.splice(index, 1);
        });
      }
    },
    // Edit a product
    editProduct: function editProduct(item) {
      this.editedIndex = this.products.indexOf(item);

      if (this.editedIndex > -1) {
        this.editedProduct = Object.assign({}, item);
        this.dialog = true;
      }
    },
    // save
    save: function save() {
      var _this3 = this;

      // its an edit
      if (this.editedIndex > -1) {
        var formData = this.setForm(new FormData(), "PATCH");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/product/".concat(this.editedProduct.id), formData).then(function (data) {
          _this3.editedProduct.img_path = data.data.new_img_path;
          Object.assign(_this3.products[_this3.editedIndex], _this3.editedProduct);
          _this3.editedProduct = Object.assign({}, _this3.defaultProduct);
          _this3.dialog = false;
        });
      } // it's a creation
      else {
          var _formData = this.setForm(new FormData());

          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/product", _formData).then(function (data) {
            _this3.editedProduct.img_path = data.data.img_path;

            _this3.products.push(Object.assign({}, _this3.editedProduct));

            _this3.dialog = false;
            Object.assign({}, _this3.defaultProduct);
            _this3.editedIndex = -1;
          });
        }
    },
    fileChanged: function fileChanged(file) {
      this.image = file;
    },
    setForm: function setForm(formData) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "POST";
      formData.append("image", this.image || "");
      formData.append("name", this.editedProduct.name || "");
      formData.append("desc", this.editedProduct.desc || "");
      formData.append("_method", method);
      return formData;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "admin-layout",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n      Produits\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mb-2",
                  attrs: { color: "primary", dark: "" },
                  on: { click: _vm.newProduct }
                },
                [_vm._v("Nouveau Produit")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("product-list", {
            attrs: { products: _vm.products, search: _vm.search },
            on: {
              editClicked: _vm.editProduct,
              deleteClicked: _vm.deleteProduct
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c("product-form", {
            attrs: { editedProduct: _vm.editedProduct },
            on: { save: _vm.save, fileChanged: _vm.fileChanged }
          })
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

/***/ "./resources/js/components/Admin/Products/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/Products/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6ceefcb2& */ "./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6ceefcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/index.vue?vue&type=template&id=6ceefcb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ceefcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);