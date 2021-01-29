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

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lorem\": () => /* binding */ lorem,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet app = {\n\t// ----------------------------------------------------------------------------------------------------------------\n\t// MANIPULATION DU DOM DE L'APPLICATION\n\t// ----------------------------------------------------------------------------------------------------------------\n\tdom: {},\n\n\t// ----------------------------------------------------------------------------------------------------------------\n\t// ARCHITECTURE MVC DE L'APPLICATION\n\t// ----------------------------------------------------------------------------------------------------------------\n\tmvc: {\n\t\trouter: null,\n\t\t/* Méthode déclenchée au changement de route. \n\t\t\t Prend en entrée une instance de la classe contrôleur correspondante\n\t\t*/\n\t\tdispatchRoute: (controllerInstance) => {\n\t\t\t// récupérer les contenus de la vue partielle\n\t\t\tfetch(controllerInstance.viewPath)\n\t\t\t\t.then((responseHTTP) => responseHTTP.text())\n\t\t\t\t.then((htmlString) => {\n\t\t\t\t\t// ajouter ce contenu HTML au DOM de la page principale (dans la balise main)\n\t\t\t\t\tdocument.querySelector(\"main\").innerHTML = htmlString;\n\t\t\t\t\t// déclencher le traitement spécifique\n\t\t\t\t\tcontrollerInstance.executeAfterDomUpdate();\n\t\t\t\t});\n\t\t},\n\t},\n};\n\nconst lorem = \"Hello world\";\n\n// L'application est exportée afin d'être accessible par d'autres modules.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n// let app = {\n// \t// ----------------------------------------------------------------------------------------------------------------\n// \t// MANIPULATION DU DOM DE L'APPLICATION\n// \t// ----------------------------------------------------------------------------------------------------------------\n// \tdom: {},\n\n// \t// ----------------------------------------------------------------------------------------------------------------\n// \t// ARCHITECTURE MVC DE L'APPLICATION\n// \t// ----------------------------------------------------------------------------------------------------------------\n// \tmvc: {\n//         router: null,\n//         dispatchRoute: (controllerInstnce) => {\n//             fetch(controllerInstnce.viewPath)\n//                 .then((responseHTTP) => responseHTTP.text())  \n//                 .then((htmlString) => {\n//                     document.querySelector('main').innerHTML = htmlString;\n//                     controllerInstance.controllerAfterDomUptade();\n//                 )};\n//          },       \n// \t},\n// };\n\n// export const lorem = \"Hello world\";\n\n// // L'application est exportée afin d'être accessible par d'autres modules.\n// export default app;\n\n\n\n//# sourceURL=webpack://version/./app/app.js?");

/***/ }),

/***/ "./app/config.js":
/*!***********************!*\
  !*** ./app/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// --------------------------------------------------------------------------------------------------------------------\n// CONFIGURATION DE L'APPLICATION\n// --------------------------------------------------------------------------------------------------------------------\n\nconst config = {\n    // Configuration de la plateforme Firebase\n    firebase: {\n        // ...\n    },\n};\n\n\n// La configuration est exportée afin d'être accessible par d'autres modules.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://version/./app/config.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app/app.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./app/config.js\");\n/* harmony import */ var _controllers_HomeController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/HomeController.js */ \"./controllers/HomeController.js\");\n/* harmony import */ var _controllers_LoginController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/LoginController.js */ \"./controllers/LoginController.js\");\n/* harmony import */ var _controllers_SearchController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/SearchController.js */ \"./controllers/SearchController.js\");\n/* harmony import */ var _controllers_AboutController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/AboutController.js */ \"./controllers/AboutController.js\");\n//import Router from \"vanilla-router\";\n\n\n\n\n\n\n\n// --------------------------------------------------------------------------------------------------------------------\n// INITIALISATION DE L'APPLICATION\n// --------------------------------------------------------------------------------------------------------------------\n\nfunction initializeRouter() {\n\t// Instancier ici le Vanilla Router dans l'objet \"app.mvc.router\"\n\t_app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router = new Router({\n\t\tmode: \"hash\",\n\t\tpage404: function (path) {\n\t\t\tconsole.log('\"/' + path + '\" Page not found');\n\t\t},\n\t});\n\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.add(\"\", function () {\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.dispatchRoute(new _controllers_HomeController_js__WEBPACK_IMPORTED_MODULE_2__.default());\n\t\tconsole.log(\"Home page\");\n\t});\n\n\t_app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.add(\"about\", function () {\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.dispatchRoute(new _controllers_AboutController_js__WEBPACK_IMPORTED_MODULE_5__.default());\n        console.log(\"About Page\");\n\t});\n\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.add(\"search\", function () {\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.dispatchRoute(new _controllers_SearchController_js__WEBPACK_IMPORTED_MODULE_4__.default());\n\t\tconsole.log(\"Search Page\");\n\t});\n\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.add(\"login\", function () {\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.dispatchRoute(new _controllers_LoginController_js__WEBPACK_IMPORTED_MODULE_3__.default());\n\t\tconsole.log(\"Login Page\");\n\t});\n\n\t_app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.addUriListener();\n\n\t_app_js__WEBPACK_IMPORTED_MODULE_0__.default.mvc.router.navigateTo(\"/#/\");\n}\n\n// --------------------------------------------------------------------------------------------------------------------\n// CODE PRINCIPAL\n// --------------------------------------------------------------------------------------------------------------------\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\t// Initialisation du routeur.\n\tinitializeRouter();\n});\n\n//# sourceURL=webpack://version/./app/main.js?");

/***/ }),

/***/ "./controllers/AboutController.js":
/*!****************************************!*\
  !*** ./controllers/AboutController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass AboutController {\r\n\tconstructor() {\r\n\t\tthis.viewPath = \"views/about.html\";\r\n\t}\r\n\t// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle\r\n\texecuteAfterDomUpdate() {\r\n\t\t// Rien de plus à faire\r\n\t\tconsole.log(\"Page about OK\");\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutController);\n\n//# sourceURL=webpack://version/./controllers/AboutController.js?");

/***/ }),

/***/ "./controllers/HomeController.js":
/*!***************************************!*\
  !*** ./controllers/HomeController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass HomeController {\r\n\tconstructor() {\r\n\t\tthis.viewPath = \"views/home.html\";\r\n\t}\r\n\t// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle\r\n\texecuteAfterDomUpdate() {\r\n\t\t// Rien de plus à faire\r\n\t\tconsole.log(\"Page home OK\");\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeController);\n\n//# sourceURL=webpack://version/./controllers/HomeController.js?");

/***/ }),

/***/ "./controllers/LoginController.js":
/*!****************************************!*\
  !*** ./controllers/LoginController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass LoginController {\r\n\tconstructor() {\r\n\t\tthis.viewPath = \"views/login.html\";\r\n\t}\r\n\t// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle\r\n\texecuteAfterDomUpdate() {\r\n\t\t// [TODO] gérer la connexion sécurisée via firebase\r\n\t\tconsole.log(\"page login ok\");\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginController);\n\n//# sourceURL=webpack://version/./controllers/LoginController.js?");

/***/ }),

/***/ "./controllers/SearchController.js":
/*!*****************************************!*\
  !*** ./controllers/SearchController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _model_EventsModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/EventsModel.js */ \"./model/EventsModel.js\");\n\r\n\r\nclass SearchController {\r\n\tconstructor() {\r\n\t\tthis.viewPath = \"views/search.html\";\r\n\t}\r\n\t// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle\r\n\texecuteAfterDomUpdate() {\r\n\t\t// générer dynamiquement les options de la liste des années\r\n\t\tconst currentYear = new Date().getFullYear();\r\n\t\tconst options = ['<option value=\"\">-- Choisir --</option>'];\r\n\t\tfor (let year = currentYear + 1; year >= currentYear - 2; year--) {\r\n\t\t\toptions.push(`<option value=\"${year}\">${year}</option>`);\r\n\t\t}\r\n\t\tdocument.querySelector(\"#date_start\").innerHTML = options.join(\"\");\r\n\r\n\t\t// surveiller l'évènement submit du formulaire\r\n\t\tdocument.querySelector(\"#searchForm\").addEventListener(\"submit\", (e) => {\r\n\t\t\t// empecher le submit d'avoir son comportement normal (cad envoyer une requête HTTP)\r\n\t\t\te.preventDefault();\r\n\t\t\t// récupérer les valeurs saisies dans le formulaire\r\n\t\t\tconst q = document.querySelector(\"#q\").value;\r\n\t\t\tconst date_start = document.querySelector(\"#date_start\").value;\r\n\t\t\tconst sort = document.querySelector(\"#sort\").value;\r\n\t\t\tconsole.log(q, date_start, sort);\r\n\r\n\t\t\t// Envoyer les valeurs de recherche à l'API open data Paris, qui nous renverra des évènements, qu'on ira afficher proprement dans la page\r\n\t\t\tconst eventsModel = new _model_EventsModel_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\t\t\teventsModel.getEvents(q, date_start, sort).then((events) => {\r\n\t\t\t\tconsole.log(events);\r\n\t\t\t\t// [TODO] Afficher les events obtenus\r\n\t\t\t\tconst htmlEvents = events.map(\r\n\t\t\t\t\t({ fields: { title, date_start, cover_url, cover_alt } }) => `\r\n\t\t\t\t\t<li class=\"col-6 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t<img src=\"${cover_url}\" alt=\"${cover_alt}\">\r\n\t\t\t\t\t\t<h6>${title}</h6>\r\n\t\t\t\t\t\t<p>${new Date(date_start).toLocaleDateString()}</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t`\r\n\t\t\t\t);\r\n\t\t\t\tdocument.querySelector(\"#eventList\").innerHTML = `\r\n\t\t\t\t\t<ul class=\"row\">\r\n\t\t\t\t\t\t${htmlEvents.join(\"\")}\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t`;\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchController);\n\n//# sourceURL=webpack://version/./controllers/SearchController.js?");

/***/ }),

/***/ "./model/EventsModel.js":
/*!******************************!*\
  !*** ./model/EventsModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass EventsModel {\r\n\t// ?dataset=que-faire-a-paris-&jazz&q=rows=12&sort=-date_start&facet=date_start&refine.date_start=2020\r\n\r\n\t/**\r\n\t * Envoie la requête vers l'API\r\n\t * @param {Object} criteria Liste des critères de recherche\r\n\t * @return {Promise} promesse qui sera résolue par un tableau d'évènements\r\n\t */\r\n\tsendRequest(criteria) {\r\n\t\tconst API_ENDPOINT = \"https://opendata.paris.fr/api/records/1.0/search/\";\r\n\t\t// Traduire l'objet de critères en chaîne de requête\r\n\t\tconst queryString = Object.entries(criteria)\r\n\t\t\t.map(([key, value]) => `${key}=${value}`)\r\n\t\t\t.join(\"&\");\r\n\t\treturn fetch(`${API_ENDPOINT}?${queryString}`)\r\n\t\t\t.then((res) => res.json())\r\n\t\t\t.then(({ records }) => records);\r\n\t}\r\n\r\n\t/**\r\n\t * Prépare la chaîne de requete\r\n\t * @param {string} q Terme de recherche\r\n\t * @param {string} date_start Année de recherche\r\n\t * @param {string} sort Ordre des résultats\r\n\t * @return {Promise} promesse qui sera résolue par un tableau d'évènements\r\n\t */\r\n\tgetEvents(q, date_start, sort) {\r\n\t\tconst criteria = {\r\n\t\t\tdataset: \"que-faire-a-paris-\",\r\n\t\t\trows: 12,\r\n\t\t\tq: q,\r\n\t\t\tsort: sort,\r\n\t\t};\r\n\t\tif (date_start !== \"\") {\r\n\t\t\tcriteria.facet = \"date_start\";\r\n\t\t\tcriteria[\"refine.date_start\"] = date_start;\r\n\t\t}\r\n\t\treturn this.sendRequest(criteria);\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsModel);\n\n//# sourceURL=webpack://version/./model/EventsModel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;