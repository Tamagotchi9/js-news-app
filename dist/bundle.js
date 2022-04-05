/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/news-catalog.js":
/*!****************************************!*\
  !*** ./src/components/news-catalog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewsCatalog)\n/* harmony export */ });\n/* harmony import */ var _utils_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/component.js */ \"./src/utils/component.js\");\n\r\n\r\nclass NewsCatalog extends _utils_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor({ element }) {\r\n        super({ element });\r\n        this._element = element;\r\n        this._news = [];\r\n\r\n        this._render();\r\n\r\n        this.on('click', 'news-link',  (event) => {\r\n            const newsElement = event.target.closest('[data-element=\"news-item\"]');\r\n\r\n            this.emit('news-selected', newsElement.dataset.newsTitle);\r\n        });\r\n\r\n    }\r\n\r\n    show(news) {\r\n        this._news = news;\r\n        this._render();\r\n        super.show();\r\n    }\r\n\r\n    _render() {\r\n        this._element.innerHTML = `\r\n                <ul class=\"news\">\r\n                    ${ this._news.map( newsItem => `\r\n                    <li class=\"news__item\" data-element=\"news-item\" data-news-title='${newsItem.title}'>\r\n                        <div class=\"news__inner\">\r\n                            <div class=\"news__info\">\r\n                                <div class=\"news__post-time\">\r\n                                    <i class=\"far fa-clock\"></i>\r\n                                    <div>${newsItem.publishedAt.slice(11, 19)}</div>\r\n                                </div>\r\n                                <div class=\"news__post-save\">\r\n                                    <i class=\"far fa-bookmark\"></i>\r\n                                    <div>SAVE</div>\r\n                                </div>\r\n                            </div>\r\n                            <a href=\"#${newsItem.title}\" data-element=\"news-link\">\r\n                                <img class=\"news__photo\" src=\"${ newsItem.urlToImage }\" alt=\"\">\r\n                            </a>\r\n                            <div class=\"news__content\">\r\n                                 <a href=\"#\" class=\"news__suptitle\">NEWS</a>\r\n                                 <a href=\"#${ newsItem.title }\" class=\"news__title\" data-element=\"news-link\">${ newsItem.title }</a>\r\n                                 <div class=\"news__author\">${ newsItem.author }</div>\r\n                                 <div class=\"news__description\">${ newsItem.description }</div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    `).join('')}\r\n                </ul>\r\n        `;\r\n    }\r\n}\n\n//# sourceURL=webpack://js-news-app/./src/components/news-catalog.js?");

/***/ }),

/***/ "./src/components/news-viewer.js":
/*!***************************************!*\
  !*** ./src/components/news-viewer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewsViewer)\n/* harmony export */ });\n/* harmony import */ var _utils_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/component.js */ \"./src/utils/component.js\");\n\r\n\r\nclass NewsViewer extends _utils_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor({ element }) {\r\n        super({ element });\r\n        this._element = element;\r\n\r\n        this.on('click', 'back-button', () => {\r\n            this.emit('back');\r\n        });\r\n    }\r\n\r\n    show(newsItem) {\r\n        this._news = newsItem;\r\n\r\n        this._render();\r\n\r\n        super.show();\r\n    }\r\n\r\n    _render() {\r\n        const {title, author, description, publishedAt, urlToImage, content} = this._news;\r\n\r\n        this._element.innerHTML = `\r\n            <div class=\"news-details__backToNews\" data-element=\"back-button\">\r\n                <i class=\"fas fa-arrow-left\"></i>\r\n                <button class=\"news-details__button\">Back to news</button>\r\n            </div>\r\n            <h1 class=\"news-details__title\">${ title }</h1>\r\n            <div class=\"news-details__author\">\r\n                ${ author }\r\n                <div>Today ${ publishedAt }</div>\r\n            </div>\r\n            <img class=\"news-details__big-image\" src=\"${ urlToImage }\" alt=\"\">\r\n            <div class=\"news-details__description\">${ description }</div>\r\n            <div class=\"news-details__text\">${ content }</div>\r\n        `;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://js-news-app/./src/components/news-viewer.js?");

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var _utils_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/component.js */ \"./src/utils/component.js\");\n\r\n\r\nclass Sidebar extends _utils_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor({ element }) {\r\n        super({ element });\r\n        this._element = element;\r\n        this._news = [];\r\n\r\n\r\n        this.on('mouseover', 'small-image', (event) => {\r\n            this._currentImage = event.delegateTarget.src;\r\n            console.log(delegateObj);\r\n\r\n            this._render();\r\n        })\r\n\r\n    }\r\n\r\n    show(news) {\r\n        this._news = news;\r\n          this._currentImage = news[0].urlToImage;\r\n\r\n\r\n        this._render();\r\n        super.show();\r\n    }\r\n\r\n    _render() {\r\n         // const {title, author, publishedAt} = this._currentNew;\r\n        this._element.innerHTML = `\r\n            <aside class=\"sidebar\" data-element=\"sidebar\">\r\n            <div class=\"sidebar__text\"><b class=\"text-black\">You</b> may also like</div>\r\n                <ul class=\"sidebar__photos\">\r\n                    ${ this._news.map( photo => `\r\n                        <li>\r\n<!--                            <a class=\"sidebar__shader\" href=\"#\">-->\r\n                                <img data-element=\"small-image\" \r\n                                class=\"sidebar__small-img\" \r\n                                src=\"${ photo.urlToImage }\" alt=\"\">\r\n                               \r\n<!--                            </a>-->\r\n                        </li>\r\n                    `).join('')}\r\n                </ul>\r\n                <div class=\"sidebar__item\" data-element=\"sidebar-item\">\r\n                    <img class=\"sidebar__big-img\" src=\"${ this._currentImage }\" alt=\"\">\r\n                    <div class=\"sidebar__content\">\r\n                        <div class=\"sidebar__title\">${this._currentTitle}</div>\r\n                        <div class=\"sidebar__author\">\r\n                            ${this._currentAuthor}\r\n                            <span class=\"sidebar__post-time\">${this._currentPubshingTime}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </aside>\r\n        `;\r\n    }\r\n}\n\n//# sourceURL=webpack://js-news-app/./src/components/sidebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_news_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/news-page.js */ \"./src/pages/news-page.js\");\n\r\n\r\nnew _pages_news_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    header: document.querySelector('[data-page-header ]'),\r\n    element: document.querySelector('[data-main-content]'),\r\n    footer: document.querySelector('[data-page-footer]')\r\n});\r\n\r\n\n\n//# sourceURL=webpack://js-news-app/./src/index.js?");

/***/ }),

/***/ "./src/pages/news-page.js":
/*!********************************!*\
  !*** ./src/pages/news-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewsPage)\n/* harmony export */ });\n/* harmony import */ var _components_news_catalog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/news-catalog.js */ \"./src/components/news-catalog.js\");\n/* harmony import */ var _components_news_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/news-viewer.js */ \"./src/components/news-viewer.js\");\n/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar.js */ \"./src/components/sidebar.js\");\n/* harmony import */ var _utils_news_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/news-service.js */ \"./src/utils/news-service.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass NewsPage {\r\n    constructor({ header, element, footer }) {\r\n        this._element = element;\r\n        this.header = header;\r\n        this.footer = footer;\r\n\r\n        this._render();\r\n\r\n        this._initCatalog();\r\n        this._initViewer();\r\n        this._initSidebar();\r\n    }\r\n\r\n    _initCatalog() {\r\n        this._catalog = new _components_news_catalog_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            element: this._element.querySelector('[data-component=\"news-catalog\"]'),\r\n        })\r\n        this._showNews();\r\n\r\n        this._catalog.subscribe('news-selected', (newsItemTitle) => {\r\n            _utils_news_service_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getOneByTitle(newsItemTitle)\r\n                .then(newsItem => {\r\n                    this._catalog.hide();\r\n                    this._viewer.show(newsItem);\r\n                })\r\n        });\r\n    }\r\n\r\n\r\n    _initViewer() {\r\n        this._viewer = new _components_news_viewer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n            element: this._element.querySelector('[data-component=\"news-viewer\"]'),\r\n        });\r\n\r\n        this._viewer.subscribe('back', () => {\r\n            this._viewer.hide();\r\n            this._showNews();\r\n        });\r\n    }\r\n\r\n    _initSidebar() {\r\n        this._sidebar = new _components_sidebar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            element: this._element.querySelector('[data-component=\"sidebar\"]'),\r\n        });\r\n\r\n        this._showSidebarNews();\r\n    }\r\n\r\n    async _showSidebarNews() {\r\n        const news = await _utils_news_service_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSidebarNews();\r\n        this._sidebar.show(news);\r\n    }\r\n\r\n    async _showNews() {\r\n        const news = await _utils_news_service_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAll();\r\n        this._catalog.show(news);\r\n    }\r\n\r\n    _render() {\r\n        this.header.innerHTML = `\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col text-center\">\r\n                        <h1 class=\"header__title\">Business News</h1>\r\n                        <p class=\"header__subtitle\">News that's everyone needs to know</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n        this._element.innerHTML =`            \r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <div data-component=\"news-catalog\"></div>\r\n                        <div data-component=\"news-viewer\"></div>\r\n                    </div>\r\n                    <!--Sidebar-->\r\n                    <div class=\"col-md-4\">\r\n                        <div data-component=\"sidebar\" class=\"sidebar-outer\"></div>\r\n                    </div>\r\n                </div>\r\n        `;\r\n        this.footer.innerHTML = `\r\n            <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"social\">\r\n                        <div class=\"social__inner\">\r\n                            <a href=\"https://www.facebook.com/\" class=\"social__item\">\r\n                                <i class=\"fab fa-facebook\"></i>\r\n                            </a>\r\n                            <a href=\"https://twitter.com/\" class=\"social__item\">\r\n                                <i class=\"fab fa-twitter\"></i>\r\n                            </a>\r\n                            <a href=\"https://www.instagram.com/\" class=\"social__item\">\r\n                                <i class=\"fab fa-instagram\"></i>\r\n                            </a>\r\n                            <a href=\"https://www.youtube.com/\" class=\"social__item\">\r\n                                <i class=\"fab fa-youtube\"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <ul class=\"footer-links\">\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Sitemap</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">About</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Need Help?</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Content Guide</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Gizmodo Shop</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Privacy</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Term of use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Advertising</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"footer-links__item\" href=\"#\">Jobs</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"copyright\">\r\n                        <div class=\"copyright__text\">Copyright © 2020 Dmitrii Voloshko. All rights reserved.</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-news-app/./src/pages/news-page.js?");

/***/ }),

/***/ "./src/utils/component.js":
/*!********************************!*\
  !*** ./src/utils/component.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor({element}) {\r\n        this._element = element;\r\n    }\r\n\r\n    show() {\r\n        this._element.hidden = false;\r\n    }\r\n\r\n    hide() {\r\n        this._element.hidden = true;\r\n    }\r\n\r\n    on(eventName, elementName, callback) {\r\n        this._element.addEventListener(eventName, (event) => {\r\n            const delegateTarget = event.target.closest(`[data-element='${elementName}']`);\r\n\r\n\r\n\r\n            if (!delegateTarget) {\r\n                return;\r\n            }\r\n\r\n            event.delegateTarget = delegateTarget;\r\n\r\n            callback(event);\r\n        });\r\n    }\r\n\r\n    subscribe(eventName, callback) {\r\n        this._element.addEventListener(eventName, (event) => {\r\n            callback(event.detail);\r\n        });\r\n    }\r\n\r\n    emit(eventName, data) {\r\n        const customEvent = new CustomEvent(eventName, {detail: data });\r\n\r\n        this._element.dispatchEvent(customEvent);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-news-app/./src/utils/component.js?");

/***/ }),

/***/ "./src/utils/news-service.js":
/*!***********************************!*\
  !*** ./src/utils/news-service.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst NewsService = {\r\n    async getAll() {\r\n        const response = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8');\r\n        const obj = await response.json();\r\n        return obj.articles;\r\n    },\r\n\r\n    async getOneByTitle(newsItemTitle) {\r\n        const response = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8');\r\n        const obj = await response.json();\r\n        return obj.articles.find(article => {\r\n            if (article.title.includes(newsItemTitle))\r\n                return article;\r\n        });\r\n    },\r\n\r\n    async getSidebarNews() {\r\n        const response = await fetch('http://newsapi.org/v2/everything?q=apple&from=2020-08-09&to=2020-08-09&sortBy=popularity&apiKey=42514edf5de2420d869f76810a5621a8');\r\n        const obj = await response.json();\r\n        return obj.articles.slice(0, 3);\r\n    },\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsService);\n\n//# sourceURL=webpack://js-news-app/./src/utils/news-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;