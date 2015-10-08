/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./ngApp.js */ 1);
	
	__webpack_require__(/*! ./services/contactService */ 2);
	
	__webpack_require__(/*! ./controllers/contactCtrl */ 3);

/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/ngApp.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('contact', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('contact');
	  $stateProvider.state('contact', {
	    url: '/contact',
	    templateUrl: '/pages/contact.html',
	    controller: 'contactCtrl'
	  });
	});

/***/ },
/* 2 */
/*!****************************************!*\
  !*** ./src/services/contactService.js ***!
  \****************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.service("contactService", function ($http, $state) {
	  this.addContact = function (data) {
	    return $http.post("http://localhost:1337/", data);
	  };
	  this.getContacts = function (data) {
	    return $http.get("http://localhost:1337/");
	  };
	});

/***/ },
/* 3 */
/*!****************************************!*\
  !*** ./src/controllers/contactCtrl.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('contactCtrl', function ($scope, $http, contactService) {
	  $scope.addNewContact = function (contact) {
	    contactService.addContact(contact);
	  };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map