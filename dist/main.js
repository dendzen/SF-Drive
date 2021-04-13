/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/scripts/script.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\r\n\r\nconst collButton = document.querySelectorAll('.faq__collapsible-button');\r\nconst icon = document.querySelectorAll('.faq__collapsible-icon');\r\n\r\nlet i;\r\n\r\nfor (i = 0; i < collButton.length; i++) {\r\n  collButton[i].addEventListener('click', function () {\r\n    this.classList.toggle('active');\r\n    let content = this.nextElementSibling;\r\n    if (content.style.display === 'block') {\r\n      content.style.display = 'none';\r\n    } else {\r\n      content.style.display = 'block';\r\n    }\r\n    rotateIcon(collButton, icon);\r\n  });\r\n}\r\n\r\nfunction rotateIcon(collButton, icon) {\r\n  for (i = 0; i < icon.length; i++) {\r\n    for (i = 0; i < collButton.length; i++) {\r\n      if (collButton[i].classList.contains('active')) {\r\n        icon[i].classList.add('rotate180');\r\n      } else {\r\n        icon[i].classList.remove('rotate180');\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://SD-Drive/./src/scripts/script.js?")},"./src/css/style.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SD-Drive/./src/css/style.css?")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/scripts/script.js")})();