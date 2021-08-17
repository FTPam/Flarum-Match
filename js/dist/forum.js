module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/CreateMatchModal.js":
/*!**************************************************!*\
  !*** ./src/forum/components/CreateMatchModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateMatchModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_6__);







var CurrentDate = dayjs().format('YYYY-MM-DD');
var CurrentTime = dayjs().format('HH:mm');

var CreateMatchModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CreateMatchModal, _Modal);

  function CreateMatchModal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.loading = false;
    _this.date = void 0;
    _this.time = void 0;
    return _this;
  }

  var _proto = CreateMatchModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.date = CurrentDate;
    this.time = CurrentTime;
    this.pickUpPoint = 'xm';
    this.destination = 'xm';
  };

  _proto.title = function title() {
    return '发起拼车匹配';
  };

  _proto.className = function className() {
    return 'MatchDiscussionModal Modal--small';
  };

  _proto.configDatePicker = function configDatePicker(vnode) {};

  _proto.content = function content() {
    var _this2 = this;

    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "MatchDiscussionModal-form"
    }, m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '出发地点'), m("select", {
      "class": "Select-input FormControl",
      value: this.pickUpPoint,
      onchange: function onchange(e) {
        return _this2.pickUpPoint = e.target.value;
      }
    }, m("option", {
      value: "xm"
    }, "\u4EA4\u5927\u897F\u95E8"), m("option", {
      value: "tf"
    }, "\u5929\u5E9C\u56FD\u9645\u673A\u573A"), m("option", {
      value: "sl"
    }, "\u53CC\u6D41\u56FD\u9645\u673A\u573A"), m("option", {
      value: "dz"
    }, "\u6210\u90FD\u4E1C\u7AD9"), m("option", {
      value: "nz"
    }, "\u6210\u90FD\u5357\u7AD9"))), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '到达地点'), m("select", {
      "class": "Select-input FormControl",
      value: this.destination,
      onchange: function onchange(e) {
        return _this2.destination = e.target.value;
      }
    }, m("option", {
      value: "xm"
    }, "\u4EA4\u5927\u897F\u95E8"), m("option", {
      value: "tf"
    }, "\u5929\u5E9C\u56FD\u9645\u673A\u573A"), m("option", {
      value: "sl"
    }, "\u53CC\u6D41\u56FD\u9645\u673A\u573A"), m("option", {
      value: "dz"
    }, "\u6210\u90FD\u4E1C\u7AD9"), m("option", {
      value: "nz"
    }, "\u6210\u90FD\u5357\u7AD9"))), m("div", {
      className: "Form-group CreateMatchModal-timeDateGroup"
    }, m("label", {
      "class": "label"
    }, '出发时间'), m("input", {
      name: "scheduledLeaveDate",
      "class": "FormControl",
      type: "date",
      min: CurrentDate,
      value: this.date,
      onchange: function onchange(e) {
        return _this2.date = e.target.value;
      }
    }), m("input", {
      name: "scheduledLeaveTime",
      "class": "FormControl",
      type: "time",
      value: this.time,
      onchange: function onchange(e) {
        return _this2.time = e.target.value;
      }
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '最长可等待 [单位：分钟,只填数字,最多720]'), m("input", {
      type: "text",
      "class": "FormControl",
      value: this.maxWait,
      onchange: function onchange(e) {
        return _this2.maxWait = e.target.value;
      },
      min: 0
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '你的性别'), m("select", {
      "class": "Select-input FormControl",
      value: this.sex,
      onchange: function onchange(e) {
        return _this2.sex = e.target.value;
      }
    }, ">", m("option", {
      value: "non"
    }, "\u4FDD\u5BC6"), m("option", {
      value: "boy"
    }, "\u7537"), m("option", {
      value: "girl"
    }, "\u5973"))), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '联系方式（可匹配后自行沟通）'), m("input", {
      type: "text",
      "class": "FormControl",
      value: this.contact,
      onchange: function onchange(e) {
        return _this2.contact = e.target.value;
      }
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, '附加信息（非必填，支持Markdown）'), m("input", {
      type: "text",
      "class": "FormControl",
      value: this.message,
      onchange: function onchange(e) {
        return _this2.message = e.target.value;
      }
    })), m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary MatchModal-SubmitButton',
      loading: this.loading
    }, '开始匹配'))))];
  };

  _proto.getLocationName = function getLocationName(a) {
    switch (a) {
      case 'xm':
        return '交大西门';

      case 'tf':
        return '天府国际机场';

      case 'sl':
        return '双流国际机场';

      case 'dz':
        return '成都东站';

      case 'nz':
        return '成都南站';
    }
  };

  _proto.getSexName = function getSexName(a) {
    switch (a) {
      case 'non':
        return '保密';

      case 'boy':
        return '男';

      case 'girl':
        return '女';

      default:
        return '未填写';
    }
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();

    if (!this.pickUpPoint || !this.destination) {
      window.alert('请填写出发地和目的地');
      return;
    } else if (this.pickUpPoint == this.destination) {
      window.alert('出发地和目的地不能一样');
      return;
    }

    if (!this.date || !this.time) {
      window.alert('请填写出发时间');
      return;
    } else if (this.time < CurrentTime) {
      if (this.date <= CurrentDate) {
        window.alert('出发时间必须晚于当前时间');
        return;
      }
    }

    if (isNaN(this.maxWait)) {
      window.alert('请在最长等待时间中填写阿拉伯数字');
      return;
    } else if (this.maxWait < 0 || this.maxWait > 720) {
      window.alert('最长等待时间必须大于等于0, 小于等于720');
      return;
    }

    var title = '[拼车]' + this.date + ' ' + this.time + '[' + this.getLocationName(this.pickUpPoint) + ']-[' + this.getLocationName(this.destination) + ']';
    var content = '------\n' + '#### 出发地点：' + this.getLocationName(this.pickUpPoint) + '\n' + '#### 到达地点：' + this.getLocationName(this.destination) + '\n' + '#### 出发时间：' + this.date + ' ' + this.time + '\n' + '#### 最多等待：' + this.maxWait + '分钟\n------\n' + '#### 性别：' + this.getSexName(this.sex) + '\n' + '------\n' + '#### 联系方式：\n' + (this.contact ? undefined : '未填写') + '\n' + '#### 附加信息：\n' + (this.message ? undefined : '未填写') + '\n ------- \n' + '> ## 安全提醒!!!\n' + '1. 建议您在拼车成功后，立即联系对方，并充分沟通上车时间、地点等问题，以确保拼车过程一切顺利。\n' + '2. 论坛只能确认该账户绑定了交大邮箱，并不能确定该拼车申请是否由该邮箱账号的持有者发起。\n' + '为了您的安全，请在联系上对方后，向对方索要学生证、一卡通的照片，或者其它基本个人信息，以进一步确认对方的本校学生身份。若对方拒不提供任何基本个人信息，或见面时，发现对方谎报个人信息，建议您立即停止拼车。\n' + '3. 为了您的安全，请向您的朋友分享行程，路途中请保持清醒和警惕。\n' + '4. 为了您的安全，请尽量选择滴滴、美团等知名网约车平台，不要乘坐没有资质的网约车。\n' + '5. 如果行程中您受到了骚扰，请及时报警，并向论坛反映情况，我们会全力配合调查。' + '\n\n' + '> ## 注意事项：\n' + '1. 建议您开启邮件通知，并在交大邮箱设置中，将所有邮件转发到你的常用邮箱，以便及时接收匹配信息。\n[点我，查看打开邮件通知的方法](https://mcfuntime.com/d/90/13)\n' + '2. 匹配完成后，请及时为帖子设置最佳回复或删除帖子，以免重复匹配。\n' + '3. 若在您的上车时间到达后仍未匹配成功，请删除您的帖子。之后若用户数量增多，我们会提供自动匹配服务，以提高匹配成功的概率。\n' + '\n> ------- \n';
    console.log('update');
    var datas = {
      title: 'title',
      content: 'content',
      relationships: {
        tags: {
          data: {
            type: "tags",
            id: "4"
          }
        }
      }
    };
    console.log(JSON.stringify(datas));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('discussions').save(datas).then(function (discussion) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.discussions.refresh({
        deferClear: true
      });
      m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.discussion(discussion));
    });
    console.log(JSON.stringify(datas));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.close();
  };

  return CreateMatchModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/TextEditorButton */ "flarum/components/TextEditorButton");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_CreateMatchModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CreateMatchModal */ "./src/forum/components/CreateMatchModal.js");








flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('tpam/flarum-match', function () {
  flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.addMatch = function () {
    var _this = this;

    var regex = new RegExp('^[0-9a-zA-Z_-].+@my.swjtu.edu\\.cn$');

    if (!regex.test(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.email())) {
      window.alert('使用此功能，你需要先完成交大学生认证');
      return;
    }

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(_components_CreateMatchModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      poll: this.poll,
      onsubmit: function onsubmit(poll) {
        return _this.poll = poll;
      }
    });
  };

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'headerItems', function (items) {
    items.add('match', m("a", {
      className: "DiscussionComposer-match",
      onclick: this.addMatch.bind(this)
    }, m("span", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()('MatchLabel', !this.poll && 'none')
    }, '发起拼车匹配')), 2);
  });
});

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/components/TextEditorButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditorButton']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditorButton'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map