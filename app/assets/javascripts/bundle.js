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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/available_surface.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/actions/filter_actions.js":
/*!********************************************!*\
  !*** ./frontend/actions/filter_actions.js ***!
  \********************************************/
/*! exports provided: UPDATE_FILTER, UPDATE_FILTERS, TOGGLE_FILTER, changeFilter, changeFilters, toggleFilter, updateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTERS", function() { return UPDATE_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FILTER", function() { return TOGGLE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilter", function() { return changeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilters", function() { return changeFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFilter", function() { return toggleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilters", function() { return updateFilters; });
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");

var UPDATE_FILTER = 'UPDATE_FILTER';
var UPDATE_FILTERS = 'UPDATE_FILTERS';
var TOGGLE_FILTER = 'TOGGLE_FILTER';
var changeFilter = function changeFilter(filter, value) {
  return {
    type: UPDATE_FILTER,
    filter: filter,
    value: value
  };
};
var changeFilters = function changeFilters(filters) {
  return {
    type: UPDATE_FILTERS,
    filters: filters
  };
};
var toggleFilter = function toggleFilter(filter, value) {
  return {
    type: TOGGLE_FILTER,
    filter: filter,
    value: value
  };
};
var updateFilters = function updateFilters(filters) {
  return function (dispatch) {
    dispatch(changeFilters(filters));
    return Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__["fetchRestaurants"])(getState().ui.filters)(dispatch);
  };
};

/***/ }),

/***/ "./frontend/actions/modal_actions.js":
/*!*******************************************!*\
  !*** ./frontend/actions/modal_actions.js ***!
  \*******************************************/
/*! exports provided: OPEN_MODAL, CLOSE_MODAL, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
var OPEN_MODAL = 'OPEN_MODAL';
var CLOSE_MODAL = 'CLOSE_MODAL';
var openModal = function openModal(modal) {
  return {
    type: OPEN_MODAL,
    modal: modal
  };
};
var closeModal = function closeModal() {
  return {
    type: CLOSE_MODAL
  };
};

/***/ }),

/***/ "./frontend/actions/reservation_actions.js":
/*!*************************************************!*\
  !*** ./frontend/actions/reservation_actions.js ***!
  \*************************************************/
/*! exports provided: RECEIVE_RESERVATION, REMOVE_RESERVATION, RECEIVE_RESERVATION_ERRORS, receiveReservation, removeReservation, receiveReservationErrors, createReservation, updateReservation, deleteReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_RESERVATION", function() { return RECEIVE_RESERVATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_RESERVATION", function() { return REMOVE_RESERVATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_RESERVATION_ERRORS", function() { return RECEIVE_RESERVATION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveReservation", function() { return receiveReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReservation", function() { return removeReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveReservationErrors", function() { return receiveReservationErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservation", function() { return createReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReservation", function() { return deleteReservation; });
/* harmony import */ var _util_reservations_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/reservations_api_util */ "./frontend/util/reservations_api_util.js");
/* harmony import */ var _modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal_actions */ "./frontend/actions/modal_actions.js");


var RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
var REMOVE_RESERVATION = 'REMOVE_RESERVATION';
var RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
var receiveReservation = function receiveReservation(reservation) {
  return {
    type: RECEIVE_RESERVATION,
    reservation: reservation
  };
};
var removeReservation = function removeReservation(reservationId) {
  return {
    type: REMOVE_RESERVATION,
    reservationId: reservationId
  };
};
var receiveReservationErrors = function receiveReservationErrors(errors) {
  return {
    type: RECEIVE_RESERVATION_ERRORS,
    errors: errors
  };
};
var createReservation = function createReservation(reservation) {
  return function (dispatch) {
    return _util_reservations_api_util__WEBPACK_IMPORTED_MODULE_0__["createReservation"](reservation).then(function (payload) {
      return dispatch(receiveReservation(payload.reservation));
    }).then(function () {
      return dispatch(Object(_modal_actions__WEBPACK_IMPORTED_MODULE_1__["openModal"])('res-success'));
    }).fail(function (errors) {
      return dispatch(receiveReservationErrors(errors.responseJSON));
    });
  };
};
var updateReservation = function updateReservation(reservation) {
  return function (dispatch) {
    return _util_reservations_api_util__WEBPACK_IMPORTED_MODULE_0__["updateReservation"](reservation).then(function (payload) {
      return dispatch(receiveReservation(payload.reservation));
    }).then(function () {
      return dispatch(Object(_modal_actions__WEBPACK_IMPORTED_MODULE_1__["openModal"])('res-success'));
    }).fail(function (errors) {
      return dispatch(receiveReservationErrors(errors.responseJSON));
    });
  };
};
var deleteReservation = function deleteReservation(reservationId) {
  return function (dispatch) {
    return _util_reservations_api_util__WEBPACK_IMPORTED_MODULE_0__["deleteReservation"](reservationId).then(function () {
      return dispatch(removeReservation(reservationId));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/restaurant_actions.js":
/*!************************************************!*\
  !*** ./frontend/actions/restaurant_actions.js ***!
  \************************************************/
/*! exports provided: RECIEVE_RESTAURANTS, RECIEVE_RESTAURANT, LOADING_RESTAURANTS, receiveRestaurants, receiveRestaurant, loadingRestaurants, fetchRestaurants, fetchRestaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVE_RESTAURANTS", function() { return RECIEVE_RESTAURANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVE_RESTAURANT", function() { return RECIEVE_RESTAURANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_RESTAURANTS", function() { return LOADING_RESTAURANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRestaurants", function() { return receiveRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRestaurant", function() { return receiveRestaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingRestaurants", function() { return loadingRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRestaurants", function() { return fetchRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRestaurant", function() { return fetchRestaurant; });
/* harmony import */ var _util_restaurants_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/restaurants_api_util */ "./frontend/util/restaurants_api_util.js");

var RECIEVE_RESTAURANTS = 'RECIEVE_RESTAURANTS';
var RECIEVE_RESTAURANT = 'RECIEVE_RESTAURANT';
var LOADING_RESTAURANTS = 'LOADING_RESTAURANTS';
var receiveRestaurants = function receiveRestaurants(restaurants) {
  return {
    type: RECIEVE_RESTAURANTS,
    restaurants: restaurants
  };
};
var receiveRestaurant = function receiveRestaurant(restaurant) {
  return {
    type: RECIEVE_RESTAURANT,
    restaurant: restaurant
  };
};
var loadingRestaurants = function loadingRestaurants() {
  return {
    type: LOADING_RESTAURANTS
  };
};
var fetchRestaurants = function fetchRestaurants(filters) {
  return function (dispatch) {
    dispatch(loadingRestaurants());
    return _util_restaurants_api_util__WEBPACK_IMPORTED_MODULE_0__["fetchRestaurants"](filters).then(function (restaurants) {
      return dispatch(receiveRestaurants(restaurants));
    });
  };
};
var fetchRestaurant = function fetchRestaurant(restaurantId) {
  return function (dispatch) {
    return _util_restaurants_api_util__WEBPACK_IMPORTED_MODULE_0__["fetchRestaurant"](restaurantId).then(function (restaurant) {
      return dispatch(receiveRestaurant(restaurant));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/session_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/session_actions.js ***!
  \*********************************************/
/*! exports provided: RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS, receiveCurrentUser, logoutCurrentUser, receiveSessionErrors, login, logout, signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CURRENT_USER", function() { return LOGOUT_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCurrentUser", function() { return logoutCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSessionErrors", function() { return receiveSessionErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony import */ var _util_sessions_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/sessions_api_util */ "./frontend/util/sessions_api_util.js");

var RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
var RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
var receiveCurrentUser = function receiveCurrentUser(payload) {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: payload
  };
};
var logoutCurrentUser = function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
var receiveSessionErrors = function receiveSessionErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};
var login = function login(user) {
  return function (dispatch) {
    return _util_sessions_api_util__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }).fail(function (errors) {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return _util_sessions_api_util__WEBPACK_IMPORTED_MODULE_0__["logout"]().then(function () {
      return dispatch(logoutCurrentUser());
    }).fail(function (errors) {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    });
  };
};
var signup = function signup(user) {
  return function (dispatch) {
    return _util_sessions_api_util__WEBPACK_IMPORTED_MODULE_0__["signup"](user).then(function (payload) {
      return dispatch(receiveCurrentUser(payload));
    }).fail(function (errors) {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/user_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/user_actions.js ***!
  \******************************************/
/*! exports provided: updateUser, fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony import */ var _util_users_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/users_api_util */ "./frontend/util/users_api_util.js");
/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_actions */ "./frontend/actions/session_actions.js");


var updateUser = function updateUser(user) {
  return function (dispatch) {
    return _util_users_api_util__WEBPACK_IMPORTED_MODULE_0__["updateUser"](user).then(function (user) {
      return dispatch(Object(_session_actions__WEBPACK_IMPORTED_MODULE_1__["receiveCurrentUser"])(user));
    });
  };
};
var fetchUser = function fetchUser(userId) {
  return function (dispatch) {
    return _util_users_api_util__WEBPACK_IMPORTED_MODULE_0__["fetchUser"](userId).then(function (user) {
      return dispatch(Object(_session_actions__WEBPACK_IMPORTED_MODULE_1__["receiveCurrentUser"])(user));
    });
  };
};

/***/ }),

/***/ "./frontend/available_surface.jsx":
/*!****************************************!*\
  !*** ./frontend/available_surface.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");




document.addEventListener("DOMContentLoaded", function () {
  var store;

  if (window.currentUser) {
    var preloadedState = {
      session: {
        userId: window.currentUser.user.id,
        firstName: window.currentUser.user.firstName
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } //testing


  window.getState = store.getState; //

  var root = document.getElementById('root');
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./frontend/components/main.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./frontend/components/footer.jsx");
/* harmony import */ var _nav_bar_nav_bar_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav_bar/nav_bar_container */ "./frontend/components/nav_bar/nav_bar_container.js");
/* harmony import */ var _nav_bar_session_forms_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav_bar/session_forms/modal */ "./frontend/components/nav_bar/session_forms/modal.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_restaurant_index_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/restaurant_index_container */ "./frontend/components/index/restaurant_index_container.js");
/* harmony import */ var _restaurant_page_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurant_page_container */ "./frontend/components/restaurant_page_container.js");
/* harmony import */ var _reservation_form_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reservation_form_container */ "./frontend/components/reservation_form_container.js");
/* harmony import */ var _reservations_index_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reservations_index_container */ "./frontend/components/reservations_index_container.js");
/* harmony import */ var _edit_reservation_form_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit_reservation_form_container */ "./frontend/components/edit_reservation_form_container.js");













var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_5__["closeModal"])();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_session_forms_modal__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar_container__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/reservations",
    component: _reservations_index_container__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/restaurants/:id/reserve/:reservationId",
    component: _edit_reservation_form_container__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/restaurants/:id/reserve",
    component: _reservation_form_container__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/restaurants/:id",
    component: _restaurant_page_container__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/restaurants",
    component: _index_restaurant_index_container__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/",
    component: _main__WEBPACK_IMPORTED_MODULE_1__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./frontend/components/edit_reservation_form_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/edit_reservation_form_container.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/reservation_actions */ "./frontend/actions/reservation_actions.js");
/* harmony import */ var _reservation_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation_form */ "./frontend/components/reservation_form.jsx");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    userId: state.session.userId,
    user: state.entities.users[state.session.userId],
    restaurantId: ownProps.match.params.id,
    reservationId: ownProps.match.params.reservationId,
    filters: state.ui.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRestaurant: function fetchRestaurant(restaurantId) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__["fetchRestaurant"])(restaurantId));
    },
    fetchUser: function fetchUser(userId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"])(userId));
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])(modal));
    },
    createReservation: function createReservation(reservation) {
      return dispatch(Object(_actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__["createReservation"])(reservation));
    },
    updateReservation: function updateReservation(reservation) {
      return dispatch(Object(_actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__["updateReservation"])(reservation));
    },
    updateUser: function updateUser(user) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_reservation_form__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./frontend/components/footer.jsx":
/*!****************************************!*\
  !*** ./frontend/components/footer.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/nicholepatrisse/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: window.linkedin
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/nicholepatrisse/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: window.github
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./frontend/components/index/index_sidebar.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/index/index_sidebar.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IndexSidebar = /*#__PURE__*/function (_React$Component) {
  _inherits(IndexSidebar, _React$Component);

  var _super = _createSuper(IndexSidebar);

  function IndexSidebar(props) {
    var _this;

    _classCallCheck(this, IndexSidebar);

    _this = _super.call(this, props);
    _this.state = _defineProperty({
      '$$': false,
      '$$$': false
    }, "$$$", false);
    _this.updateCurrent = _this.updateCurrent.bind(_assertThisInitialized(_this));
    _this.togglePrice = _this.togglePrice.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IndexSidebar, [{
    key: "updateCurrent",
    value: function updateCurrent(filter) {
      var _this2 = this;

      return function (e) {
        return _this2.props.updateToggleFilter(filter, e.target.value);
      };
    }
  }, {
    key: "generateOptions",
    value: function generateOptions(arrayType) {
      var _this3 = this;

      var cuisinesHash = {};
      var citiesHash = {};
      this.props.restaurants.forEach(function (restaurant) {
        var fullCity = "".concat(restaurant.city, ", ").concat(restaurant.state);
        cuisinesHash[restaurant.cuisine] = true;
        citiesHash[fullCity] = true;
      });
      var optionsArray;

      if (arrayType === 'cuisineParams') {
        optionsArray = Object.keys(cuisinesHash);
      } else {
        optionsArray = Object.keys(citiesHash);
      }

      ;
      var options = optionsArray.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "option ".concat(arrayType),
          key: option,
          id: option
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "checkbox",
          value: option,
          onClick: _this3.updateCurrent(arrayType)
        }), " ", option);
      });
      return options;
    }
  }, {
    key: "togglePrice",
    value: function togglePrice(e) {
      this.props.updateToggleFilter('priceParams', e.target.id);
      this.setState(_defineProperty({}, e.target.id, !this.state[e.target.id]));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-options"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-option-container first ".concat(this.state.$$ ? 'toggled' : 'untoggled'),
        onClick: this.togglePrice,
        id: "$$"
      }, "$$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-option-container ".concat(this.state.$$$ ? 'toggled' : 'untoggled'),
        onClick: this.togglePrice,
        id: "$$$"
      }, "$$$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-option-container last ".concat(this.state.$$$$ ? 'toggled' : 'untoggled'),
        onClick: this.togglePrice,
        id: "$$$$"
      }, "$$$$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cuisines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-divider"
      }), this.generateOptions('cuisineParams'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-divider"
      }), this.generateOptions('cityParams'));
    }
  }]);

  return IndexSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (IndexSidebar);

/***/ }),

/***/ "./frontend/components/index/restaurant_index.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/index/restaurant_index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restaurant_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant_index_item */ "./frontend/components/index/restaurant_index_item.jsx");
/* harmony import */ var _search_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search_container */ "./frontend/components/search_container.js");
/* harmony import */ var _index_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index_sidebar */ "./frontend/components/index/index_sidebar.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var RestaurantIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(RestaurantIndex, _React$Component);

  var _super = _createSuper(RestaurantIndex);

  function RestaurantIndex() {
    _classCallCheck(this, RestaurantIndex);

    return _super.apply(this, arguments);
  }

  _createClass(RestaurantIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRestaurants(this.props.filters);
    }
  }, {
    key: "calcTables",
    value: function calcTables(restaurants) {
      var num = restaurants.length;
      return "".concat(num, " restaurants available!");
    }
  }, {
    key: "loading",
    value: function loading() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-index-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurants-loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading restaurants, please hold."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: window.loading,
        className: "loading-clock"
      })));
    }
  }, {
    key: "loaded",
    value: function loaded() {
      var _this = this;

      var filteredRestaurants = Object.values(this.props.restaurants);
      var cuisines = this.props.toggles.cuisineParams;

      if (cuisines.length > 0) {
        filteredRestaurants = filteredRestaurants.filter(function (restaurant) {
          return cuisines.includes(restaurant.cuisine);
        });
      }

      ;
      var cities = this.props.toggles.cityParams.map(function (city) {
        return city.split(',')[0];
      });

      if (cities.length > 0) {
        filteredRestaurants = filteredRestaurants.filter(function (restaurant) {
          return cities.includes(restaurant.city);
        });
      }

      ;
      var prices = this.props.toggles.priceParams.map(function (price) {
        return price.length;
      });

      if (prices.length > 0) {
        filteredRestaurants = filteredRestaurants.filter(function (restaurant) {
          return prices.includes(restaurant.price);
        });
      }

      ;
      var restaurants = filteredRestaurants.map(function (restaurant) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_restaurant_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: restaurant.id,
          restaurant: restaurant,
          filters: _this.props.filters,
          changeFilter: _this.props.changeFilter
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-index-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        updateToggleFilter: this.props.updateToggleFilter,
        restaurants: Object.values(this.props.restaurants)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurants"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.calcTables(restaurants)), restaurants));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "compact-search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_container__WEBPACK_IMPORTED_MODULE_2__["default"], null)), this.props.loading ? this.loading() : this.loaded());
    }
  }]);

  return RestaurantIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantIndex);

/***/ }),

/***/ "./frontend/components/index/restaurant_index_container.js":
/*!*****************************************************************!*\
  !*** ./frontend/components/index/restaurant_index_container.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _restaurant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant_index */ "./frontend/components/index/restaurant_index.jsx");
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/filter_actions */ "./frontend/actions/filter_actions.js");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    filters: state.ui.filters,
    restaurants: state.entities.restaurants,
    loading: state.ui.loading.restaurantsLoading,
    toggles: state.ui.toggles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRestaurants: function fetchRestaurants(filters) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRestaurants"])(filters));
    },
    updateToggleFilter: function updateToggleFilter(filter, value) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__["toggleFilter"])(filter, value));
    },
    changeFilter: function changeFilter(filter, value) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__["changeFilter"])(filter, value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_restaurant_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/index/restaurant_index_item.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/index/restaurant_index_item.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reservation_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reservation_buttons */ "./frontend/components/reservation_buttons.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RestaurantIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(RestaurantIndexItem, _React$Component);

  var _super = _createSuper(RestaurantIndexItem);

  function RestaurantIndexItem() {
    _classCallCheck(this, RestaurantIndexItem);

    return _super.apply(this, arguments);
  }

  _createClass(RestaurantIndexItem, [{
    key: "generateStars",
    value: function generateStars() {
      var randRating = Math.floor(Math.random() * 5);
      var stars = [];

      for (var i = 0; i < 5; i++) {
        var starColor = 'gold';
        if (i > randRating) starColor = 'gray';
        stars.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-star ".concat(starColor, "-star"),
          key: i
        }));
      }

      ;
      return stars;
    }
  }, {
    key: "price",
    value: function price() {
      var dollaSigns = [];

      while (dollaSigns.length < parseInt(this.props.restaurant.price)) {
        dollaSigns.push('$');
      }

      ;
      return dollaSigns;
    }
  }, {
    key: "render",
    value: function render() {
      var thumbnailUrl = this.props.restaurant.photoUrls[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: this.props.restaurant.id,
        className: "restaurant"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: thumbnailUrl
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/restaurants/".concat(this.props.restaurant.id)
      }, this.props.restaurant.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stars-rating"
      }, this.generateStars()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "restaurant-desc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, this.price()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, this.props.restaurant.cuisine), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "".concat(this.props.restaurant.city, ", ").concat(this.props.restaurant.state))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
        restaurant: this.props.restaurant,
        time: this.props.filters.dateParams,
        changeFilter: this.props.changeFilter
      })));
    }
  }]);

  return RestaurantIndexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantIndexItem);

/***/ }),

/***/ "./frontend/components/main.jsx":
/*!**************************************!*\
  !*** ./frontend/components/main.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_container */ "./frontend/components/search_container.js");



var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-title"
  }, "Find your perfect surface"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_container__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./frontend/components/nav_bar/drop_down.jsx":
/*!***************************************************!*\
  !*** ./frontend/components/nav_bar/drop_down.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var DropDown = function DropDown(_ref) {
  var modal = _ref.modal,
      logout = _ref.logout;

  if (!modal || modal != 'dropDown') {
    return null;
  }

  ;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "drop-down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/reservations"
  }, "My Dining History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: logout
  }, "Sign out")));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modal: state.ui.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(DropDown));

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down */ "./frontend/components/nav_bar/drop_down.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var NavBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavBar, _React$Component);

  var _super = _createSuper(NavBar);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _super.call(this, props);
  }

  _createClass(NavBar, [{
    key: "sessionLinks",
    value: function sessionLinks() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "nav-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "signup-button",
        onClick: function onClick() {
          return _this.props.openModal('signup');
        }
      }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "login-button",
        onClick: function onClick() {
          return _this.props.openModal('login');
        }
      }, "Sign In"));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.props.modal === 'dropDown') {
        document.addEventListener('click', this.props.closeModal);
      } else {
        document.removeEventListener('click', this.props.closeModal);
      }
    }
  }, {
    key: "personalGreeting",
    value: function personalGreeting() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "nav-greeting",
        onClick: function onClick() {
          return _this2.props.openModal('dropDown');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "greeting"
      }, "Hi, ", this.props.currentUser, "! ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chevron-down"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drop_down__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-bar"
      }, this.handleClick(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: window.logo,
        className: "nav-logo"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, "AvailableSurface"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-title"
      }, "An OpenTable Clone"))), this.props.currentUser ? this.personalGreeting() : this.sessionLinks());
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_bar */ "./frontend/components/nav_bar/nav_bar.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.firstName,
    modal: state.ui.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./frontend/components/nav_bar/session_forms/login_form.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/nav_bar/session_forms/login_form.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.submitDemo = _this.submitDemo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }
  }, {
    key: "submitDemo",
    value: function submitDemo(e) {
      e.preventDefault();
      var user = {
        email: 'demo@gmail.com',
        password: 'password'
      };
      this.props.processForm(user).then(this.props.closeModal);
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.props.errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, error);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "session-form-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Please sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider"
      }), errors, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _defineProperty({
        type: "email",
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email",
        required: true
      }, "type", "email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "form-submit"
      }, "Sign In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-options"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Don't want to complete the form?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "demo-button",
        onClick: this.submitDemo
      }, "Demo Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New to AvailableSurface? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "other-form-link",
        onClick: this.props.otherForm
      }, "Create an account"))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./frontend/components/nav_bar/session_forms/login_form_container.js":
/*!***************************************************************************!*\
  !*** ./frontend/components/nav_bar/session_forms/login_form_container.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login_form */ "./frontend/components/nav_bar/session_forms/login_form.jsx");





var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.sessionErrors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    processForm: function processForm(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    },
    otherForm: function otherForm() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])('signup'));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./frontend/components/nav_bar/session_forms/modal.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/nav_bar/session_forms/modal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _login_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login_form_container */ "./frontend/components/nav_bar/session_forms/login_form_container.js");
/* harmony import */ var _signup_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup_form_container */ "./frontend/components/nav_bar/session_forms/signup_form_container.js");
/* harmony import */ var _reservation_success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reservation_success */ "./frontend/components/reservation_success.jsx");







var Modal = function Modal(_ref) {
  var modal = _ref.modal,
      closeModal = _ref.closeModal;

  if (!modal) {
    return null;
  }

  var component;

  switch (modal) {
    case 'login':
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_form_container__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;

    case 'signup':
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_form_container__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      break;

    case 'res-success':
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_success__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      break;

    default:
      return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-screen",
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, component));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modal: state.ui.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./frontend/components/nav_bar/session_forms/signup_form.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/nav_bar/session_forms/signup_form.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SignupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  var _super = _createSuper(SignupForm);

  function SignupForm(props) {
    var _this;

    _classCallCheck(this, SignupForm);

    _this = _super.call(this, props);
    _this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.submitDemo = _this.submitDemo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignupForm, [{
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }
  }, {
    key: "submitDemo",
    value: function submitDemo(e) {
      e.preventDefault();
      var user = {
        email: 'demo@gmail.com',
        password: 'password'
      };
      this.props.login(user).then(this.props.closeModal);
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.props.errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "error"
        }, error);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "session-form-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Welcome to AvailableSurface!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider"
      }), errors, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.first_name,
        onChange: this.update('first_name'),
        placeholder: "First Name",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.last_name,
        onChange: this.update('last_name'),
        placeholder: "Last Name",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password",
        minLength: "6",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "form-submit"
      }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-options"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Don't want to complete the form?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "demo-button",
        onClick: this.submitDemo
      }, "Demo Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "other-form-link",
        onClick: this.props.otherForm
      }, "Sign In"))));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./frontend/components/nav_bar/session_forms/signup_form_container.js":
/*!****************************************************************************!*\
  !*** ./frontend/components/nav_bar/session_forms/signup_form_container.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/nav_bar/session_forms/signup_form.jsx");





var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.sessionErrors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    processForm: function processForm(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["signup"])(user));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    },
    otherForm: function otherForm() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])('login'));
    },
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./frontend/components/party_picker.jsx":
/*!**********************************************!*\
  !*** ./frontend/components/party_picker.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PartyPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(PartyPicker, _React$Component);

  var _super = _createSuper(PartyPicker);

  function PartyPicker(props) {
    var _this;

    _classCallCheck(this, PartyPicker);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.selectParty = _this.selectParty.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PartyPicker, [{
    key: "selectParty",
    value: function selectParty(e) {
      this.props.changeFilter('partyParams', e.target.id);
      this.props.closeModal();
    }
  }, {
    key: "generateParties",
    value: function generateParties() {
      var maxParty = 10;
      var parties = [];

      for (var i = 2; i <= maxParty; i++) {
        parties.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "party-option",
          key: i,
          id: i
        }, i, " People"));
      }

      ;
      parties.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-option",
        key: maxParty + 1,
        id: "larger"
      }, "Larger Party"));
      return parties;
    }
  }, {
    key: "partySelector",
    value: function partySelector() {
      if (this.props.modal != 'party-options') return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-options",
        onClick: this.selectParty
      }, this.generateParties());
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.props.modal === 'party-options') {
        document.addEventListener('click', this.props.closeModal);
      } else {
        document.removeEventListener('click', this.props.closeModal);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var partyDesc = "".concat(this.props.partyParams, " People");
      if (this.props.partyParams === 'larger') partyDesc = 'Larger Party';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-selector",
        onClick: function onClick() {
          return _this2.props.openModal('party-options');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-user"
      }), partyDesc), this.handleClick(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-selector-menu"
      }, this.partySelector()));
    }
  }]);

  return PartyPicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PartyPicker);

/***/ }),

/***/ "./frontend/components/reservation_buttons.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/reservation_buttons.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_date_time_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/date_time_functions */ "./frontend/util/date_time_functions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ReservationButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(ReservationButtons, _React$Component);

  var _super = _createSuper(ReservationButtons);

  function ReservationButtons(props) {
    var _this;

    _classCallCheck(this, ReservationButtons);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReservationButtons, [{
    key: "available",
    value: function available(time) {
      var currentTime = new Date();

      if (time.getHours() >= this.props.restaurant.openAt && time.getHours() < this.props.restaurant.closeAt && time > currentTime) {
        return true;
      } else {
        return false;
      }

      ;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var timeValue = new Date(e.target.id);
      timeValue = new Date(timeValue.setMinutes(timeValue.getMinutes() - 15));
      this.props.changeFilter('dateParams', timeValue);
      this.props.history.push("/restaurants/".concat(this.props.restaurant.id, "/reserve"));
    }
  }, {
    key: "generateReservationLinks",
    value: function generateReservationLinks() {
      var buttons = [];
      var time = new Date(this.props.time);
      time = new Date(time.setMinutes(time.getMinutes() - 30));
      var i = 0;

      while (buttons.length < 5) {
        var button = void 0;

        if (this.available(time)) {
          button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: i,
            className: "res-button",
            id: time,
            onClick: this.handleClick
          }, _util_date_time_functions__WEBPACK_IMPORTED_MODULE_1__["printTime"](time));
        } else {
          button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: i,
            className: "res-button res-inactive",
            disabled: true
          }, "Unavailable");
        }

        buttons.push(button);
        time = new Date(time.setMinutes(time.getMinutes() + 15));
        i++;
      }

      ;
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "res-buttons"
      }, this.generateReservationLinks());
    }
  }]);

  return ReservationButtons;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ReservationButtons));

/***/ }),

/***/ "./frontend/components/reservation_form.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/reservation_form.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_date_time_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/date_time_functions */ "./frontend/util/date_time_functions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ReservationForm = /*#__PURE__*/function (_React$Component) {
  _inherits(ReservationForm, _React$Component);

  var _super = _createSuper(ReservationForm);

  function ReservationForm(props) {
    var _this;

    _classCallCheck(this, ReservationForm);

    _this = _super.call(this, props);
    _this.state = {
      phone: '',
      email: '',
      time: new Date(_this.props.filters.dateParams),
      user_id: _this.props.userId,
      party_size: _this.props.filters.partyParams,
      occasion: _this.props.filters.occasion,
      requests: _this.props.filters.requests,
      restaurant_id: ''
    };
    _this.updateRez = _this.updateRez.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReservationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRestaurant(this.props.restaurantId);
      this.props.fetchUser(this.props.userId);
    }
  }, {
    key: "loggedIn",
    value: function loggedIn() {
      var _this2 = this;

      if (this.props.user) {
        var fullName = "".concat(this.props.user.firstName, " ").concat(this.props.user.lastName, " ");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "user-info"
        }, fullName, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          onClick: function onClick() {
            return _this2.props.openModal('login');
          }
        }, "Not ".concat(this.props.user.firstName, "?")), ")");
      }
    }
  }, {
    key: "updateRez",
    value: function updateRez(e) {
      var value = e.target.value;
      this.setState(_defineProperty({}, e.target.name, value));
    }
  }, {
    key: "userChanged",
    value: function userChanged() {
      var phoneUpdated = this.props.user.phoneNumber === this.state.phone;
      var emailUpdated = this.props.user.email === this.state.email;
      return phoneUpdated || emailUpdated;
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo() {
      var user = Object.assign({}, this.props.user);
      user.phone_number = this.state.phone;
      user.email = this.state.email;
      this.props.updateUser(user);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var reservation = Object.assign({}, this.state);

      if (this.props.user && this.userChanged()) {
        this.updateUserInfo();
      }

      ;

      if (this.props.reservationId) {
        reservation['id'] = this.props.reservationId;
        this.props.updateReservation(reservation).then(this.props.history.push('/'));
      } else {
        this.props.createReservation(reservation).then(this.props.history.push('/'));
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.restaurant) return null;
      this.state.restaurant_id = this.props.restaurantId;

      if (this.props.user && this.state.email === '') {
        this.state.phone = this.props.user.phoneNumber;
        this.state.email = this.props.user.email;
      }

      ;
      var partyDesc = "".concat(this.state.party_size, " People");
      if (this.state.party_size === 'larger') partyDesc = 'Larger Party';
      var date = new Date(this.state.time);
      var thumbUrl = this.props.restaurant.photoUrls[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reservation-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "res-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "You're almost done!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "res-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: thumbUrl,
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "res-detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "restaurants/".concat(this.props.restaurant.id)
      }, "".concat(this.props.restaurant.name, " - ").concat(this.props.restaurant.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-calendar res-cal"
      }), " ", _util_date_time_functions__WEBPACK_IMPORTED_MODULE_2__["printDate"](date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-clock res-clock"
      }), " ", _util_date_time_functions__WEBPACK_IMPORTED_MODULE_2__["printTime"](date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-user res-user"
      }), " ", partyDesc)))), this.loggedIn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "res-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "phone",
        value: this.state.phone,
        onChange: this.updateRez,
        placeholder: "phone",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.updateRez,
        placeholder: "email",
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "occasion",
        value: this.state.occasion,
        onChange: this.updateRez,
        placeholder: "occasion"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "requests",
        value: this.state.requests,
        onChange: this.updateRez,
        placeholder: "requests"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Complete Reservation"))));
    }
  }]);

  return ReservationForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ReservationForm));

/***/ }),

/***/ "./frontend/components/reservation_form_container.js":
/*!***********************************************************!*\
  !*** ./frontend/components/reservation_form_container.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/reservation_actions */ "./frontend/actions/reservation_actions.js");
/* harmony import */ var _reservation_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation_form */ "./frontend/components/reservation_form.jsx");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    userId: state.session.userId,
    user: state.entities.users[state.session.userId],
    restaurantId: ownProps.match.params.id,
    filters: state.ui.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRestaurant: function fetchRestaurant(restaurantId) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__["fetchRestaurant"])(restaurantId));
    },
    fetchUser: function fetchUser(userId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"])(userId));
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])(modal));
    },
    createReservation: function createReservation(reservation) {
      return dispatch(Object(_actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__["createReservation"])(reservation));
    },
    updateReservation: function updateReservation(reservation) {
      return dispatch(Object(_actions_reservation_actions__WEBPACK_IMPORTED_MODULE_4__["updateReservation"])(reservation));
    },
    updateUser: function updateUser(user) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_reservation_form__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./frontend/components/reservation_item.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/reservation_item.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_date_time_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/date_time_functions */ "./frontend/util/date_time_functions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ReservationItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ReservationItem, _React$Component);

  var _super = _createSuper(ReservationItem);

  function ReservationItem(props) {
    var _this;

    _classCallCheck(this, ReservationItem);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.cancelReservation = _this.cancelReservation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReservationItem, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.changeFilter('dateParams', new Date(this.props.reservation.time));
      this.props.changeFilter('partyParams', this.props.reservation.partySize);
      this.props.changeFilter('occasion', this.props.reservation.occasion);
      this.props.changeFilter('requests', this.props.reservation.requests);
      this.props.history.push("restaurants/".concat(this.props.restaurant.id, "/reserve/").concat(this.props.reservation.id));
    }
  }, {
    key: "cancelReservation",
    value: function cancelReservation() {
      this.props.deleteReservation(this.props.reservation.id);
    }
  }, {
    key: "editLink",
    value: function editLink() {
      if (this.props.editForm) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "reservation-buttons"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-edit",
          onClick: this.handleClick
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-trash-alt",
          onClick: this.cancelReservation
        }));
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      var restaurant = this.props.restaurant;
      if (!restaurant) return null;
      var time = new Date(this.props.reservation.time);
      var partyDesc = this.props.reservation.partySize === 'larger' ? 'Larger Party' : "".concat(this.props.reservation.partySize, " People");
      var thumbUrl = this.props.restaurant.photoUrls[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reservation-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: thumbUrl
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reservation-detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/restaurants/".concat(restaurant.id)
      }, restaurant.name), this.editLink()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-calendar res-cal"
      }), " ", _util_date_time_functions__WEBPACK_IMPORTED_MODULE_1__["printDate"](time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-clock res-clock"
      }), " ", _util_date_time_functions__WEBPACK_IMPORTED_MODULE_1__["printTime"](time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-user res-user"
      }), " ", partyDesc))));
    }
  }]);

  return ReservationItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ReservationItem));

/***/ }),

/***/ "./frontend/components/reservation_success.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/reservation_success.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reservation_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation_item */ "./frontend/components/reservation_item.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var ReservationSuccess = function ReservationSuccess(props) {
  var reservations = Object.values(props.reservations);
  var reservation = reservations[reservations.length - 1];
  if (!reservation) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "res-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Success!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    reservation: reservation,
    restaurant: props.restaurants[reservation.restaurantId],
    key: reservation.id,
    editForm: false
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(ReservationSuccess));

/***/ }),

/***/ "./frontend/components/reservations_index.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/reservations_index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reservation_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation_item */ "./frontend/components/reservation_item.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ReservationsIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(ReservationsIndex, _React$Component);

  var _super = _createSuper(ReservationsIndex);

  function ReservationsIndex() {
    _classCallCheck(this, ReservationsIndex);

    return _super.apply(this, arguments);
  }

  _createClass(ReservationsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUser(this.props.userId);
      this.props.fetchRestaurants();
    }
  }, {
    key: "sortDates",
    value: function sortDates(res1, res2) {
      // newest to oldest
      if (new Date(res1.time) > new Date(res2.time)) {
        return 1;
      } else if (new Date(res1.time) < new Date(res2.time)) {
        return -1;
      } else {
        return 0;
      }
    }
  }, {
    key: "pastReservations",
    value: function pastReservations() {
      var pastReservationsArray = Object.values(this.props.reservations).filter(function (currentReservation) {
        return new Date(currentReservation.time) <= new Date();
      }).sort(this.sortDates);
      return pastReservationsArray;
    }
  }, {
    key: "futureReservations",
    value: function futureReservations() {
      var futureReservationsArray = Object.values(this.props.reservations).filter(function (currentReservation) {
        return new Date(currentReservation.time) > new Date();
      }).sort(this.sortDates);
      return futureReservationsArray;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (Object.values(this.props.restaurants).length === 0) {
        return null;
      }

      ;
      var pastReservationsArray = this.pastReservations().map(function (reservation) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          reservation: reservation,
          restaurant: _this.props.restaurants[reservation.restaurantId],
          key: reservation.id,
          editForm: false,
          changeFilter: _this.props.changeFilter,
          deleteReservation: _this.props.deleteReservation
        });
      });
      var futureReservationsArray = this.futureReservations().map(function (reservation) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          reservation: reservation,
          restaurant: _this.props.restaurants[reservation.restaurantId],
          key: reservation.id,
          editForm: true,
          changeFilter: _this.props.changeFilter,
          deleteReservation: _this.props.deleteReservation
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reservations-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upcoming-reservations"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Upcoming Reservations"), futureReservationsArray), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "past-reservations"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Past Reservations"), pastReservationsArray));
    }
  }]);

  return ReservationsIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (ReservationsIndex);

/***/ }),

/***/ "./frontend/components/reservations_index_container.js":
/*!*************************************************************!*\
  !*** ./frontend/components/reservations_index_container.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reservations_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations_index */ "./frontend/components/reservations_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/filter_actions */ "./frontend/actions/filter_actions.js");
/* harmony import */ var _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/reservation_actions */ "./frontend/actions/reservation_actions.js");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.userId,
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants,
    history: ownProps.history
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUser: function fetchUser(userId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"])(userId));
    },
    fetchRestaurants: function fetchRestaurants(filters) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRestaurants"])(filters));
    },
    changeFilter: function changeFilter(filter, value) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_4__["changeFilter"])(filter, value));
    },
    deleteReservation: function deleteReservation(reservationId) {
      return dispatch(Object(_actions_reservation_actions__WEBPACK_IMPORTED_MODULE_5__["deleteReservation"])(reservationId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_reservations_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./frontend/components/restaurant_page.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/restaurant_page.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reservation_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation_buttons */ "./frontend/components/reservation_buttons.jsx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var price = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

var RestaurantPage = /*#__PURE__*/function (_React$Component) {
  _inherits(RestaurantPage, _React$Component);

  var _super = _createSuper(RestaurantPage);

  function RestaurantPage(props) {
    var _this;

    _classCallCheck(this, RestaurantPage);

    _this = _super.call(this, props);
    _this.state = Object.assign({}, _this.props.filters);
    _this.selectDate = _this.selectDate.bind(_assertThisInitialized(_this));
    _this.selectParty = _this.selectParty.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RestaurantPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRestaurant(this.props.restaurantId);
    }
  }, {
    key: "selectDate",
    value: function selectDate(date) {
      var _this2 = this;

      this.setState({
        dateParams: date
      }, function () {
        return _this2.props.changeFilter('dateParams', date);
      });
    }
  }, {
    key: "selectParty",
    value: function selectParty(e) {
      var _this3 = this;

      this.setState({
        partyParams: e.target.id
      }), function () {
        return _this3.props.changeFilter('partyParams', e.target.id);
      };
    }
  }, {
    key: "generateParties",
    value: function generateParties() {
      var maxParty = 10;
      var parties = [];

      for (var i = 2; i <= maxParty; i++) {
        parties.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "party-show-option",
          key: i,
          id: i
        }, i, " People"));
      }

      ;
      parties.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "party-show-option",
        key: maxParty + 1,
        id: "larger"
      }, "Larger Party"));
      return parties;
    }
  }, {
    key: "partySelector",
    value: function partySelector() {
      if (this.props.modal != 'party-options') return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "show-party-options",
        onClick: this.selectParty
      }, this.generateParties());
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.props.modal === 'party-options') {
        document.addEventListener('click', this.props.closeModal);
      } else {
        document.removeEventListener('click', this.props.closeModal);
      }
    }
  }, {
    key: "loaded",
    value: function loaded() {
      var _this4 = this;

      var partyDesc = "".concat(this.state.partyParams, " People");
      if (this.state.partyParams === 'larger') partyDesc = 'Larger Party';
      var headerUrl = this.props.restaurant.photoUrls[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-show"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-header"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-show-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "restaurant-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Overview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.restaurant.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "restaurant-desc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, price[this.props.restaurant.price]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, this.props.restaurant.cuisine), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "".concat(this.props.restaurant.city, ", ").concat(this.props.restaurant.state))), this.props.restaurant.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-show-side"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Make a reservation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Party Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-party-selector",
        onClick: function onClick() {
          return _this4.props.openModal('party-options');
        }
      }, partyDesc, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chevron-down"
      })), this.handleClick(), this.partySelector(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-datetime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chevron-down"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
        selected: new Date(this.state.dateParams),
        onChange: this.selectDate,
        className: "date-input",
        dateFormat: "MMM d, yyyy",
        nextMonthButtonLabel: ">",
        previousMonthButtonLabel: "<"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chevron-down"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
        selected: new Date(this.state.dateParams),
        onChange: this.selectDate,
        className: "date-input",
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: ""
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Select a time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reservation_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
        restaurant: this.props.restaurant,
        time: this.props.filters.dateParams,
        changeFilter: this.props.changeFilter
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurant-page"
      }, this.props.restaurant ? this.loaded() : null);
    }
  }]);

  return RestaurantPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestaurantPage);

/***/ }),

/***/ "./frontend/components/restaurant_page_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/restaurant_page_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/filter_actions */ "./frontend/actions/filter_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _restaurant_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant_page */ "./frontend/components/restaurant_page.jsx");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    restaurantId: ownProps.match.params.id,
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    filters: state.ui.filters,
    modal: state.ui.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRestaurant: function fetchRestaurant(restaurantId) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_1__["fetchRestaurant"])(restaurantId));
    },
    changeFilter: function changeFilter(filter, value) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__["changeFilter"])(filter, value));
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])(modal));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_restaurant_page__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./frontend/components/root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/root.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./frontend/components/app.jsx");





var Root = function Root(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./frontend/components/search.jsx":
/*!****************************************!*\
  !*** ./frontend/components/search.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _party_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./party_picker */ "./frontend/components/party_picker.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);
    _this.state = Object.assign({}, _this.props.filters);
    _this.selectDate = _this.selectDate.bind(_assertThisInitialized(_this));
    _this.updateParams = _this.updateParams.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "selectDate",
    value: function selectDate(date) {
      this.setState({
        dateParams: date
      });
    }
  }, {
    key: "updateParams",
    value: function updateParams(e) {
      this.setState({
        searchParams: e.currentTarget.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateFilters(this.state);
      this.props.history.push('/restaurants');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "date-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-calendar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        selected: new Date(this.state.dateParams),
        onChange: this.selectDate,
        className: "date-input",
        dateFormat: "MMM d, yyyy",
        nextMonthButtonLabel: ">",
        previousMonthButtonLabel: "<"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "time-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-clock"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        selected: new Date(this.state.dateParams),
        onChange: this.selectDate,
        className: "date-input",
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_party_picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        modal: this.props.modal,
        closeModal: this.props.closeModal,
        openModal: this.props.openModal,
        partyParams: this.props.filters.partyParams,
        changeFilter: this.props.changeFilter
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search-input",
        type: "text",
        value: this.state.searchParams,
        onChange: this.updateParams
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "search-button",
        onClick: this.handleSubmit
      }, "Let's go"));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Search));

/***/ }),

/***/ "./frontend/components/search_container.js":
/*!*************************************************!*\
  !*** ./frontend/components/search_container.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/filter_actions */ "./frontend/actions/filter_actions.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./frontend/components/search.jsx");
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    modal: state.ui.modal,
    filters: state.ui.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(type) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["openModal"])(type));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["closeModal"])());
    },
    updateFilters: function updateFilters(filters) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__["updateFilters"])(filters));
    },
    fetchRestaurants: function fetchRestaurants(filters) {
      return dispatch(Object(_actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_4__["fetchRestaurants"])(filters));
    },
    changeFilter: function changeFilter(filter, value) {
      return dispatch(Object(_actions_filter_actions__WEBPACK_IMPORTED_MODULE_2__["changeFilter"])(filter, value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_search__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./frontend/reducers/entities/reservations_reducer.js":
/*!************************************************************!*\
  !*** ./frontend/reducers/entities/reservations_reducer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/reservation_actions */ "./frontend/actions/reservation_actions.js");



var reservationsReducer = function reservationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      if (action.payload.reservations) {
        return action.payload.reservations;
      } else {
        return state;
      }

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CURRENT_USER"]:
      return {};

    case _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_RESERVATION"]:
      newState[action.reservation.id] = action.reservation;
      return newState;

    case _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_RESERVATION"]:
      delete newState[action.reservationId];
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reservationsReducer);

/***/ }),

/***/ "./frontend/reducers/entities/restaurants_reducer.js":
/*!***********************************************************!*\
  !*** ./frontend/reducers/entities/restaurants_reducer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");


var restaurantsReducer = function restaurantsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_RESTAURANTS"]:
      return action.restaurants;

    case _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_RESTAURANT"]:
      newState[action.restaurant.id] = action.restaurant;
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (restaurantsReducer);

/***/ }),

/***/ "./frontend/reducers/entities/users_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/entities/users_reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");


var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      newState[action.payload.user.id] = action.payload.user;
      return newState;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CURRENT_USER"]:
      return {};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./frontend/reducers/entities_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/entities_reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/users_reducer */ "./frontend/reducers/entities/users_reducer.js");
/* harmony import */ var _entities_restaurants_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/restaurants_reducer */ "./frontend/reducers/entities/restaurants_reducer.js");
/* harmony import */ var _entities_reservations_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/reservations_reducer */ "./frontend/reducers/entities/reservations_reducer.js");




var entitiesReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _entities_users_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  restaurants: _entities_restaurants_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  reservations: _entities_reservations_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (entitiesReducer);

/***/ }),

/***/ "./frontend/reducers/errors/reservation_errors_reducer.js":
/*!****************************************************************!*\
  !*** ./frontend/reducers/errors/reservation_errors_reducer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/reservation_actions */ "./frontend/actions/reservation_actions.js");

var initialState = [];

var reservationErrorsReducer = function reservationErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_RESERVATION_ERRORS"]:
      return action.errors;

    case _actions_reservation_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_RESERVATION"]:
      return initialState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reservationErrorsReducer);

/***/ }),

/***/ "./frontend/reducers/errors/session_errors_reducer.js":
/*!************************************************************!*\
  !*** ./frontend/reducers/errors/session_errors_reducer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");



var sessionErrorsReducer = function sessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return [];

    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_MODAL"]:
      return [];

    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_MODAL"]:
      return [];

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sessionErrorsReducer);

/***/ }),

/***/ "./frontend/reducers/errors_reducer.js":
/*!*********************************************!*\
  !*** ./frontend/reducers/errors_reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _errors_session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/session_errors_reducer */ "./frontend/reducers/errors/session_errors_reducer.js");
/* harmony import */ var _errors_reservation_errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/reservation_errors_reducer */ "./frontend/reducers/errors/reservation_errors_reducer.js");



var errorsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  sessionErrors: _errors_session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  reservationErrors: _errors_reservation_errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (errorsReducer);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_reducer */ "./frontend/reducers/session_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_reducer */ "./frontend/reducers/ui_reducer.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities_reducer */ "./frontend/reducers/entities_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors_reducer */ "./frontend/reducers/errors_reducer.js");





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./frontend/reducers/session_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/session_reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");

var _nullState = {
  userId: null,
  firstName: null
};

var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      newState['userId'] = action.payload.user.id;
      newState['firstName'] = action.payload.user.firstName;
      return newState;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CURRENT_USER"]:
      return _nullState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sessionReducer);

/***/ }),

/***/ "./frontend/reducers/ui/filters_reducer.js":
/*!*************************************************!*\
  !*** ./frontend/reducers/ui/filters_reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/filter_actions */ "./frontend/actions/filter_actions.js");

var nextAvail = new Date();
nextAvail.setMinutes(Math.round((nextAvail.getMinutes() + 30) / 15) * 15);
var initialState = {
  dateParams: nextAvail,
  partyParams: 2,
  searchParams: "",
  occasion: '',
  requests: ''
};

var filtersReducer = function filtersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER"]:
      newState[action.filter] = action.value;
      return newState;

    case _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTERS"]:
      return action.filters;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filtersReducer);

/***/ }),

/***/ "./frontend/reducers/ui/loading_reducer.js":
/*!*************************************************!*\
  !*** ./frontend/reducers/ui/loading_reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/restaurant_actions */ "./frontend/actions/restaurant_actions.js");

var initial_state = {
  restaurantsLoading: false
};

var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__["LOADING_RESTAURANTS"]:
      newState['restaurantsLoading'] = true;
      return newState;

    case _actions_restaurant_actions__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_RESTAURANTS"]:
      return initial_state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (loadingReducer);

/***/ }),

/***/ "./frontend/reducers/ui/modal_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/ui/modal_reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");

var _nullState = null;

var modalReducer = function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_MODAL"]:
      return action.modal;

    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modalReducer);

/***/ }),

/***/ "./frontend/reducers/ui/profile_tab_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/ui/profile_tab_reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");

var initialState = 'profile';

var profileTabReducer = function profileTabReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_MODAL"]:
      return action.modal;

    default:
      return state;
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (profileTabReducer);

/***/ }),

/***/ "./frontend/reducers/ui/toggles_reducer.js":
/*!*************************************************!*\
  !*** ./frontend/reducers/ui/toggles_reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/filter_actions */ "./frontend/actions/filter_actions.js");

var initialState = {
  cityParams: [],
  cuisineParams: [],
  priceParams: []
};

var togglesReducer = function togglesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_FILTER"]:
      var valIdx = newState[action.filter].indexOf(action.value);

      if (valIdx > -1) {
        newState[action.filter].splice(valIdx, 1);
      } else {
        newState[action.filter].push(action.value);
      }

      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (togglesReducer);

/***/ }),

/***/ "./frontend/reducers/ui_reducer.js":
/*!*****************************************!*\
  !*** ./frontend/reducers/ui_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _ui_modal_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/modal_reducer */ "./frontend/reducers/ui/modal_reducer.js");
/* harmony import */ var _ui_filters_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/filters_reducer */ "./frontend/reducers/ui/filters_reducer.js");
/* harmony import */ var _ui_loading_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/loading_reducer */ "./frontend/reducers/ui/loading_reducer.js");
/* harmony import */ var _ui_profile_tab_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/profile_tab_reducer */ "./frontend/reducers/ui/profile_tab_reducer.js");
/* harmony import */ var _ui_toggles_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/toggles_reducer */ "./frontend/reducers/ui/toggles_reducer.js");






var uiReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  modal: _ui_modal_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  filters: _ui_filters_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  toggles: _ui_toggles_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  loading: _ui_loading_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  profileTab: _ui_profile_tab_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (uiReducer);

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");



var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];

if (true) {
  var _require = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"),
      logger = _require.logger;

  middlewares.push(logger);
}

var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares));
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./frontend/util/date_time_functions.js":
/*!**********************************************!*\
  !*** ./frontend/util/date_time_functions.js ***!
  \**********************************************/
/*! exports provided: printTime, printDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTime", function() { return printTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDate", function() { return printDate; });
function printTime(time) {
  var minute = time.getMinutes();
  var hour = time.getHours();
  var ampm = 'AM';

  if (hour === 12) {
    ampm = 'PM';
  } else if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }

  ;
  if (minute < 10) minute = "0".concat(minute);
  return "".concat(hour, ":").concat(minute, " ").concat(ampm);
}
;
function printDate(time) {
  var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = days[time.getDay()];
  var month = months[time.getMonth()];
  var date = time.getDate();
  return "".concat(day, ", ").concat(month, " ").concat(date);
}

/***/ }),

/***/ "./frontend/util/reservations_api_util.js":
/*!************************************************!*\
  !*** ./frontend/util/reservations_api_util.js ***!
  \************************************************/
/*! exports provided: createReservation, updateReservation, deleteReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservation", function() { return createReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReservation", function() { return deleteReservation; });
var createReservation = function createReservation(reservation) {
  return $.ajax({
    url: "/api/reservations",
    method: 'POST',
    data: {
      reservation: reservation
    }
  });
};
var updateReservation = function updateReservation(reservation) {
  return $.ajax({
    url: "/api/reservations/".concat(reservation.id),
    method: 'PATCH',
    data: {
      reservation: reservation
    }
  });
};
var deleteReservation = function deleteReservation(reservationId) {
  return $.ajax({
    url: "/api/reservations/".concat(reservationId),
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/restaurants_api_util.js":
/*!***********************************************!*\
  !*** ./frontend/util/restaurants_api_util.js ***!
  \***********************************************/
/*! exports provided: fetchRestaurants, fetchRestaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRestaurants", function() { return fetchRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRestaurant", function() { return fetchRestaurant; });
var fetchRestaurants = function fetchRestaurants(filters) {
  return $.ajax({
    url: '/api/restaurants',
    data: {
      filters: filters
    }
  });
};
var fetchRestaurant = function fetchRestaurant(restaurantId) {
  return $.ajax({
    url: "/api/restaurants/".concat(restaurantId)
  });
};

/***/ }),

/***/ "./frontend/util/sessions_api_util.js":
/*!********************************************!*\
  !*** ./frontend/util/sessions_api_util.js ***!
  \********************************************/
/*! exports provided: signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
var signup = function signup(user) {
  return $.ajax({
    url: "/api/users",
    method: 'POST',
    data: {
      user: user
    }
  });
};
var login = function login(user) {
  return $.ajax({
    url: "/api/session",
    method: 'POST',
    data: {
      user: user
    }
  });
};
var logout = function logout() {
  return $.ajax({
    url: "/api/session",
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/users_api_util.js":
/*!*****************************************!*\
  !*** ./frontend/util/users_api_util.js ***!
  \*****************************************/
/*! exports provided: fetchUsers, fetchUser, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
var fetchUsers = function fetchUsers() {
  return $.ajax({
    url: '/api/users'
  });
};
var fetchUser = function fetchUser(userId) {
  return $.ajax({
    url: "/api/users/".concat(userId)
  });
};
var updateUser = function updateUser(user) {
  return $.ajax({
    url: "/api/users/".concat(user.id),
    method: 'PATCH',
    data: {
      user: user
    }
  });
};

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/react-datepicker/dist/react-datepicker.min.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/redux-logger/dist/redux-logger.js'");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/redux-thunk/es/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nicholekruger/Desktop/AvailableSurface/node_modules/redux/es/redux.js'");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYWN0aW9ucy9maWx0ZXJfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL21vZGFsX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYWN0aW9ucy9yZXNlcnZhdGlvbl9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2FjdGlvbnMvcmVzdGF1cmFudF9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2FjdGlvbnMvc2Vzc2lvbl9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2FjdGlvbnMvdXNlcl9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2F2YWlsYWJsZV9zdXJmYWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9lZGl0X3Jlc2VydmF0aW9uX2Zvcm1fY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL2luZGV4L2luZGV4X3NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5kZXgvcmVzdGF1cmFudF9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9pbmRleC9yZXN0YXVyYW50X2luZGV4X2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL2luZGV4L3Jlc3RhdXJhbnRfaW5kZXhfaXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL25hdl9iYXIvZHJvcF9kb3duLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL25hdl9iYXIvbmF2X2Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9uYXZfYmFyL25hdl9iYXJfY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvbmF2X2Jhci9zZXNzaW9uX2Zvcm1zL2xvZ2luX2Zvcm0uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvbmF2X2Jhci9zZXNzaW9uX2Zvcm1zL2xvZ2luX2Zvcm1fY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvbmF2X2Jhci9zZXNzaW9uX2Zvcm1zL21vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL25hdl9iYXIvc2Vzc2lvbl9mb3Jtcy9zaWdudXBfZm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9uYXZfYmFyL3Nlc3Npb25fZm9ybXMvc2lnbnVwX2Zvcm1fY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcGFydHlfcGlja2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc2VydmF0aW9uX2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzZXJ2YXRpb25fZm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXNlcnZhdGlvbl9mb3JtX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc2VydmF0aW9uX2l0ZW0uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzZXJ2YXRpb25fc3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXNlcnZhdGlvbnNfaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzZXJ2YXRpb25zX2luZGV4X2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3RhdXJhbnRfcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXN0YXVyYW50X3BhZ2VfY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcm9vdC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2VhcmNoX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9lbnRpdGllcy9yZXNlcnZhdGlvbnNfcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9lbnRpdGllcy9yZXN0YXVyYW50c19yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL2VudGl0aWVzL3VzZXJzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvZW50aXRpZXNfcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9lcnJvcnMvcmVzZXJ2YXRpb25fZXJyb3JzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvZXJyb3JzL3Nlc3Npb25fZXJyb3JzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvZXJyb3JzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvcm9vdF9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL3Nlc3Npb25fcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy91aS9maWx0ZXJzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvdWkvbG9hZGluZ19yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL3VpL21vZGFsX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvdWkvcHJvZmlsZV90YWJfcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy91aS90b2dnbGVzX3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvdWlfcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC91dGlsL2RhdGVfdGltZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbC9yZXNlcnZhdGlvbnNfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbC9yZXN0YXVyYW50c19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC91dGlsL3Nlc3Npb25zX2FwaV91dGlsLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWwvdXNlcnNfYXBpX3V0aWwuanMiXSwibmFtZXMiOlsiVVBEQVRFX0ZJTFRFUiIsIlVQREFURV9GSUxURVJTIiwiVE9HR0xFX0ZJTFRFUiIsImNoYW5nZUZpbHRlciIsImZpbHRlciIsInZhbHVlIiwidHlwZSIsImNoYW5nZUZpbHRlcnMiLCJmaWx0ZXJzIiwidG9nZ2xlRmlsdGVyIiwidXBkYXRlRmlsdGVycyIsImRpc3BhdGNoIiwiZmV0Y2hSZXN0YXVyYW50cyIsImdldFN0YXRlIiwidWkiLCJPUEVOX01PREFMIiwiQ0xPU0VfTU9EQUwiLCJvcGVuTW9kYWwiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJSRUNFSVZFX1JFU0VSVkFUSU9OIiwiUkVNT1ZFX1JFU0VSVkFUSU9OIiwiUkVDRUlWRV9SRVNFUlZBVElPTl9FUlJPUlMiLCJyZWNlaXZlUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsInJlbW92ZVJlc2VydmF0aW9uIiwicmVzZXJ2YXRpb25JZCIsInJlY2VpdmVSZXNlcnZhdGlvbkVycm9ycyIsImVycm9ycyIsImNyZWF0ZVJlc2VydmF0aW9uIiwiUmVzZXJ2YXRpb25BUElVdGlsIiwidGhlbiIsInBheWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwidXBkYXRlUmVzZXJ2YXRpb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsIlJFQ0lFVkVfUkVTVEFVUkFOVFMiLCJSRUNJRVZFX1JFU1RBVVJBTlQiLCJMT0FESU5HX1JFU1RBVVJBTlRTIiwicmVjZWl2ZVJlc3RhdXJhbnRzIiwicmVzdGF1cmFudHMiLCJyZWNlaXZlUmVzdGF1cmFudCIsInJlc3RhdXJhbnQiLCJsb2FkaW5nUmVzdGF1cmFudHMiLCJSZXN0YXVyYW50QVBJVXRpbCIsImZldGNoUmVzdGF1cmFudCIsInJlc3RhdXJhbnRJZCIsIlJFQ0VJVkVfQ1VSUkVOVF9VU0VSIiwiTE9HT1VUX0NVUlJFTlRfVVNFUiIsIlJFQ0VJVkVfU0VTU0lPTl9FUlJPUlMiLCJyZWNlaXZlQ3VycmVudFVzZXIiLCJsb2dvdXRDdXJyZW50VXNlciIsInJlY2VpdmVTZXNzaW9uRXJyb3JzIiwibG9naW4iLCJ1c2VyIiwiU2Vzc2lvbkFQSVV0aWwiLCJsb2dvdXQiLCJzaWdudXAiLCJ1cGRhdGVVc2VyIiwiVXNlckFQSVV0aWwiLCJmZXRjaFVzZXIiLCJ1c2VySWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9yZSIsIndpbmRvdyIsImN1cnJlbnRVc2VyIiwicHJlbG9hZGVkU3RhdGUiLCJzZXNzaW9uIiwiaWQiLCJmaXJzdE5hbWUiLCJjb25maWd1cmVTdG9yZSIsInJvb3QiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiQXBwIiwiUmVzZXJ2YXRpb25zSW5kZXhDb250YWluZXIiLCJFZGl0UmVzZXJ2YXRpb25Gb3JtQ29udGFpbmVyIiwiUmVzZXJ2YXRpb25Gb3JtQ29udGFpbmVyIiwiUmVzdGF1cmFudENvbnRhaW5lciIsIlJlc3RhdXJhbnRJbmRleENvbnRhaW5lciIsIk1haW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiZW50aXRpZXMiLCJtYXRjaCIsInBhcmFtcyIsInVzZXJzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlJlc2VydmF0aW9uRm9ybSIsIkZvb3RlciIsImxpbmtlZGluIiwiZ2l0aHViIiwiSW5kZXhTaWRlYmFyIiwicHJvcHMiLCJ1cGRhdGVDdXJyZW50IiwiYmluZCIsInRvZ2dsZVByaWNlIiwiZSIsInVwZGF0ZVRvZ2dsZUZpbHRlciIsInRhcmdldCIsImFycmF5VHlwZSIsImN1aXNpbmVzSGFzaCIsImNpdGllc0hhc2giLCJmb3JFYWNoIiwiZnVsbENpdHkiLCJjaXR5IiwiY3Vpc2luZSIsIm9wdGlvbnNBcnJheSIsIk9iamVjdCIsImtleXMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwic2V0U3RhdGUiLCIkJCIsIiQkJCIsIiQkJCQiLCJnZW5lcmF0ZU9wdGlvbnMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlc3RhdXJhbnRJbmRleCIsIm51bSIsImxlbmd0aCIsImxvYWRpbmciLCJmaWx0ZXJlZFJlc3RhdXJhbnRzIiwidmFsdWVzIiwiY3Vpc2luZXMiLCJ0b2dnbGVzIiwiY3Vpc2luZVBhcmFtcyIsImluY2x1ZGVzIiwiY2l0aWVzIiwiY2l0eVBhcmFtcyIsInNwbGl0IiwicHJpY2VzIiwicHJpY2VQYXJhbXMiLCJwcmljZSIsImNhbGNUYWJsZXMiLCJsb2FkZWQiLCJyZXN0YXVyYW50c0xvYWRpbmciLCJSZXN0YXVyYW50SW5kZXhJdGVtIiwicmFuZFJhdGluZyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0YXJzIiwiaSIsInN0YXJDb2xvciIsInB1c2giLCJkb2xsYVNpZ25zIiwicGFyc2VJbnQiLCJ0aHVtYm5haWxVcmwiLCJwaG90b1VybHMiLCJuYW1lIiwiZ2VuZXJhdGVTdGFycyIsImRhdGVQYXJhbXMiLCJEcm9wRG93biIsIk5hdkJhciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImxvZ28iLCJwZXJzb25hbEdyZWV0aW5nIiwic2Vzc2lvbkxpbmtzIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsInN1Ym1pdERlbW8iLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiYXNzaWduIiwicHJvY2Vzc0Zvcm0iLCJlcnJvciIsInVwZGF0ZSIsIm90aGVyRm9ybSIsInNlc3Npb25FcnJvcnMiLCJNb2RhbCIsImNvbXBvbmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlNpZ251cEZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiUGFydHlQaWNrZXIiLCJzZWxlY3RQYXJ0eSIsIm1heFBhcnR5IiwicGFydGllcyIsImdlbmVyYXRlUGFydGllcyIsInBhcnR5RGVzYyIsInBhcnR5UGFyYW1zIiwicGFydHlTZWxlY3RvciIsIlJlc2VydmF0aW9uQnV0dG9ucyIsInRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRIb3VycyIsIm9wZW5BdCIsImNsb3NlQXQiLCJ0aW1lVmFsdWUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImhpc3RvcnkiLCJidXR0b25zIiwiYnV0dG9uIiwiYXZhaWxhYmxlIiwiZGF0ZVRpbWUiLCJnZW5lcmF0ZVJlc2VydmF0aW9uTGlua3MiLCJ3aXRoUm91dGVyIiwicGhvbmUiLCJ1c2VyX2lkIiwicGFydHlfc2l6ZSIsIm9jY2FzaW9uIiwicmVxdWVzdHMiLCJyZXN0YXVyYW50X2lkIiwidXBkYXRlUmV6IiwiZnVsbE5hbWUiLCJsYXN0TmFtZSIsInBob25lVXBkYXRlZCIsInBob25lTnVtYmVyIiwiZW1haWxVcGRhdGVkIiwicGhvbmVfbnVtYmVyIiwidXNlckNoYW5nZWQiLCJ1cGRhdGVVc2VySW5mbyIsImRhdGUiLCJ0aHVtYlVybCIsImxvZ2dlZEluIiwiUmVzZXJ2YXRpb25JdGVtIiwiY2FuY2VsUmVzZXJ2YXRpb24iLCJwYXJ0eVNpemUiLCJlZGl0Rm9ybSIsImVkaXRMaW5rIiwiUmVzZXJ2YXRpb25TdWNjZXNzIiwicmVzZXJ2YXRpb25zIiwiUmVzZXJ2YXRpb25zSW5kZXgiLCJyZXMxIiwicmVzMiIsInBhc3RSZXNlcnZhdGlvbnNBcnJheSIsImN1cnJlbnRSZXNlcnZhdGlvbiIsInNvcnQiLCJzb3J0RGF0ZXMiLCJmdXR1cmVSZXNlcnZhdGlvbnNBcnJheSIsInBhc3RSZXNlcnZhdGlvbnMiLCJmdXR1cmVSZXNlcnZhdGlvbnMiLCJSZXN0YXVyYW50UGFnZSIsInNlbGVjdERhdGUiLCJoZWFkZXJVcmwiLCJkZXNjcmlwdGlvbiIsIlJvb3QiLCJTZWFyY2giLCJ1cGRhdGVQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJjdXJyZW50VGFyZ2V0IiwicmVzZXJ2YXRpb25zUmVkdWNlciIsImFjdGlvbiIsImZyZWV6ZSIsIm5ld1N0YXRlIiwicmVzdGF1cmFudHNSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwiZW50aXRpZXNSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwicmVzZXJ2YXRpb25FcnJvcnNSZWR1Y2VyIiwic2Vzc2lvbkVycm9yc1JlZHVjZXIiLCJlcnJvcnNSZWR1Y2VyIiwicmVzZXJ2YXRpb25FcnJvcnMiLCJyb290UmVkdWNlciIsInVpUmVkdWNlciIsInNlc3Npb25SZWR1Y2VyIiwiX251bGxTdGF0ZSIsIm5leHRBdmFpbCIsInJvdW5kIiwiZmlsdGVyc1JlZHVjZXIiLCJpbml0aWFsX3N0YXRlIiwibG9hZGluZ1JlZHVjZXIiLCJtb2RhbFJlZHVjZXIiLCJwcm9maWxlVGFiUmVkdWNlciIsInRvZ2dsZXNSZWR1Y2VyIiwidmFsSWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInByb2ZpbGVUYWIiLCJtaWRkbGV3YXJlcyIsInRodW5rIiwicHJvY2VzcyIsInJlcXVpcmUiLCJsb2dnZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInByaW50VGltZSIsIm1pbnV0ZSIsImhvdXIiLCJhbXBtIiwicHJpbnREYXRlIiwiZGF5cyIsIm1vbnRocyIsImRheSIsImdldERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiZmV0Y2hVc2VycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxlQUF0QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxT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LENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLHVCQUFnQm5QLE1BQWhCO0FBREEsR0FBUCxDQUQyQjtBQUFBLENBQXhCO0FBTUEsSUFBTUgsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUosSUFBSTtBQUFBLFNBQzFCd1AsQ0FBQyxDQUFDQyxJQUFGLENBQU87QUFDSEMsT0FBRyx1QkFBZ0IxUCxJQUFJLENBQUNlLEVBQXJCLENBREE7QUFFSDRPLFVBQU0sRUFBRSxPQUZMO0FBR0hDLFFBQUksRUFBRTtBQUFFNVAsVUFBSSxFQUFKQTtBQUFGO0FBSEgsR0FBUCxDQUQwQjtBQUFBLENBQXZCLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Zyb250ZW5kL2F2YWlsYWJsZV9zdXJmYWNlLmpzeFwiKTtcbiIsImltcG9ydCB7IGZldGNoUmVzdGF1cmFudHMgfSBmcm9tIFwiLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GSUxURVIgPSAnVVBEQVRFX0ZJTFRFUic7XG5leHBvcnQgY29uc3QgVVBEQVRFX0ZJTFRFUlMgPSAnVVBEQVRFX0ZJTFRFUlMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9GSUxURVIgPSAnVE9HR0xFX0ZJTFRFUic7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGaWx0ZXIgPSAoZmlsdGVyLCB2YWx1ZSkgPT4gKHtcbiAgICB0eXBlOiBVUERBVEVfRklMVEVSLFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIHZhbHVlOiB2YWx1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlRmlsdGVycyA9IGZpbHRlcnMgPT4gKHtcbiAgICB0eXBlOiBVUERBVEVfRklMVEVSUyxcbiAgICBmaWx0ZXJzXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9IChmaWx0ZXIsIHZhbHVlKSA9PiAoe1xuICAgIHR5cGU6IFRPR0dMRV9GSUxURVIsXG4gICAgZmlsdGVyLFxuICAgIHZhbHVlXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbHRlcnMgPSBmaWx0ZXJzID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChjaGFuZ2VGaWx0ZXJzKGZpbHRlcnMpKTtcbiAgICByZXR1cm4gZmV0Y2hSZXN0YXVyYW50cyhnZXRTdGF0ZSgpLnVpLmZpbHRlcnMpKGRpc3BhdGNoKTtcbn07IiwiZXhwb3J0IGNvbnN0IE9QRU5fTU9EQUwgPSAnT1BFTl9NT0RBTCc7XG5leHBvcnQgY29uc3QgQ0xPU0VfTU9EQUwgPSAnQ0xPU0VfTU9EQUwnO1xuXG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsID0gbW9kYWwgPT4gKHtcbiAgICB0eXBlOiBPUEVOX01PREFMLFxuICAgIG1vZGFsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENMT1NFX01PREFMLFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZXNlcnZhdGlvbkFQSVV0aWwgZnJvbSAnLi4vdXRpbC9yZXNlcnZhdGlvbnNfYXBpX3V0aWwnO1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSAnLi9tb2RhbF9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUkVTRVJWQVRJT04gPSAnUkVDRUlWRV9SRVNFUlZBVElPTic7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1JFU0VSVkFUSU9OID0gJ1JFTU9WRV9SRVNFUlZBVElPTic7XG5leHBvcnQgY29uc3QgUkVDRUlWRV9SRVNFUlZBVElPTl9FUlJPUlMgPSBcIlJFQ0VJVkVfUkVTRVJWQVRJT05fRVJST1JTXCJcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVSZXNlcnZhdGlvbiA9IHJlc2VydmF0aW9uID0+ICh7XG4gICAgdHlwZTogUkVDRUlWRV9SRVNFUlZBVElPTixcbiAgICByZXNlcnZhdGlvblxufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVSZXNlcnZhdGlvbiA9IHJlc2VydmF0aW9uSWQgPT4gKHtcbiAgICB0eXBlOiBSRU1PVkVfUkVTRVJWQVRJT04sXG4gICAgcmVzZXJ2YXRpb25JZFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlUmVzZXJ2YXRpb25FcnJvcnMgPSBlcnJvcnMgPT4gKHtcbiAgICB0eXBlOiBSRUNFSVZFX1JFU0VSVkFUSU9OX0VSUk9SUyxcbiAgICBlcnJvcnNcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzZXJ2YXRpb24gPSByZXNlcnZhdGlvbiA9PiBkaXNwYXRjaCA9PiAoXG4gICAgUmVzZXJ2YXRpb25BUElVdGlsLmNyZWF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uKVxuICAgIC50aGVuKCBwYXlsb2FkID0+IGRpc3BhdGNoKHJlY2VpdmVSZXNlcnZhdGlvbihwYXlsb2FkLnJlc2VydmF0aW9uKSkpXG4gICAgLnRoZW4oICgpID0+IGRpc3BhdGNoKG9wZW5Nb2RhbCgncmVzLXN1Y2Nlc3MnKSkpXG4gICAgLmZhaWwoIGVycm9ycyA9PiBkaXNwYXRjaChyZWNlaXZlUmVzZXJ2YXRpb25FcnJvcnMoZXJyb3JzLnJlc3BvbnNlSlNPTikpIClcbik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXNlcnZhdGlvbiA9IHJlc2VydmF0aW9uID0+IGRpc3BhdGNoID0+IChcbiAgICBSZXNlcnZhdGlvbkFQSVV0aWwudXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb24pXG4gICAgLnRoZW4oIHBheWxvYWQgPT4gZGlzcGF0Y2gocmVjZWl2ZVJlc2VydmF0aW9uKHBheWxvYWQucmVzZXJ2YXRpb24pKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChvcGVuTW9kYWwoJ3Jlcy1zdWNjZXNzJykpKVxuICAgIC5mYWlsKGVycm9ycyA9PiBkaXNwYXRjaChyZWNlaXZlUmVzZXJ2YXRpb25FcnJvcnMoZXJyb3JzLnJlc3BvbnNlSlNPTikpKVxuKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlc2VydmF0aW9uID0gcmVzZXJ2YXRpb25JZCA9PiBkaXNwYXRjaCA9PiAoXG4gICAgUmVzZXJ2YXRpb25BUElVdGlsLmRlbGV0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uSWQpXG4gICAgLnRoZW4oICgpID0+IGRpc3BhdGNoKHJlbW92ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uSWQpKSlcbik7IiwiaW1wb3J0ICogYXMgUmVzdGF1cmFudEFQSVV0aWwgZnJvbSAnLi4vdXRpbC9yZXN0YXVyYW50c19hcGlfdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBSRUNJRVZFX1JFU1RBVVJBTlRTID0gJ1JFQ0lFVkVfUkVTVEFVUkFOVFMnO1xuZXhwb3J0IGNvbnN0IFJFQ0lFVkVfUkVTVEFVUkFOVCA9ICdSRUNJRVZFX1JFU1RBVVJBTlQnO1xuZXhwb3J0IGNvbnN0IExPQURJTkdfUkVTVEFVUkFOVFMgPSAnTE9BRElOR19SRVNUQVVSQU5UUydcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVSZXN0YXVyYW50cyA9IHJlc3RhdXJhbnRzID0+ICh7XG4gICAgdHlwZTogUkVDSUVWRV9SRVNUQVVSQU5UUyxcbiAgICByZXN0YXVyYW50c1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlUmVzdGF1cmFudCA9IHJlc3RhdXJhbnQgPT4gKHtcbiAgICB0eXBlOiBSRUNJRVZFX1JFU1RBVVJBTlQsXG4gICAgcmVzdGF1cmFudFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nUmVzdGF1cmFudHMgPSAoKSA9PiAoe1xuICAgIHR5cGU6IExPQURJTkdfUkVTVEFVUkFOVFNcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hSZXN0YXVyYW50cyA9IGZpbHRlcnMgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKGxvYWRpbmdSZXN0YXVyYW50cygpKVxuICAgIHJldHVybiBSZXN0YXVyYW50QVBJVXRpbC5mZXRjaFJlc3RhdXJhbnRzKGZpbHRlcnMpXG4gICAgLnRoZW4oIHJlc3RhdXJhbnRzID0+IGRpc3BhdGNoKHJlY2VpdmVSZXN0YXVyYW50cyhyZXN0YXVyYW50cykpIClcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlc3RhdXJhbnQgPSByZXN0YXVyYW50SWQgPT4gZGlzcGF0Y2ggPT4gKFxuICAgIFJlc3RhdXJhbnRBUElVdGlsLmZldGNoUmVzdGF1cmFudChyZXN0YXVyYW50SWQpXG4gICAgLnRoZW4oIHJlc3RhdXJhbnQgPT4gZGlzcGF0Y2gocmVjZWl2ZVJlc3RhdXJhbnQocmVzdGF1cmFudCkpIClcbik7XG5cbiIsImltcG9ydCAqIGFzIFNlc3Npb25BUElVdGlsIGZyb20gJy4uL3V0aWwvc2Vzc2lvbnNfYXBpX3V0aWwnO1xuXG5leHBvcnQgY29uc3QgUkVDRUlWRV9DVVJSRU5UX1VTRVIgPSAnUkVDRUlWRV9DVVJSRU5UX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR09VVF9DVVJSRU5UX1VTRVIgPSAnTE9HT1VUX0NVUlJFTlRfVVNFUic7XG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRVNTSU9OX0VSUk9SUyA9ICdSRUNFSVZFX1NFU1NJT05fRVJST1JTJztcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVDdXJyZW50VXNlciA9IHBheWxvYWQgPT4gKHtcbiAgICB0eXBlOiBSRUNFSVZFX0NVUlJFTlRfVVNFUixcbiAgICBwYXlsb2FkXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEN1cnJlbnRVc2VyID0gKCkgPT4gKHtcbiAgICB0eXBlOiBMT0dPVVRfQ1VSUkVOVF9VU0VSXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVTZXNzaW9uRXJyb3JzID0gZXJyb3JzID0+ICh7XG4gICAgdHlwZTogUkVDRUlWRV9TRVNTSU9OX0VSUk9SUyxcbiAgICBlcnJvcnNcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSB1c2VyID0+IGRpc3BhdGNoID0+IChcbiAgICBTZXNzaW9uQVBJVXRpbC5sb2dpbih1c2VyKVxuICAgIC50aGVuKCB1c2VyID0+IGRpc3BhdGNoKHJlY2VpdmVDdXJyZW50VXNlcih1c2VyKSkpXG4gICAgLmZhaWwoIGVycm9ycyA9PiBkaXNwYXRjaChyZWNlaXZlU2Vzc2lvbkVycm9ycyhlcnJvcnMucmVzcG9uc2VKU09OKSkgKVxuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IGRpc3BhdGNoID0+IChcbiAgICBTZXNzaW9uQVBJVXRpbC5sb2dvdXQoKVxuICAgIC50aGVuKCAoKSA9PiBkaXNwYXRjaChsb2dvdXRDdXJyZW50VXNlcigpKSlcbiAgICAuZmFpbChlcnJvcnMgPT4gZGlzcGF0Y2gocmVjZWl2ZVNlc3Npb25FcnJvcnMoZXJyb3JzLnJlc3BvbnNlSlNPTikpKVxuKTtcblxuZXhwb3J0IGNvbnN0IHNpZ251cCA9IHVzZXIgPT4gZGlzcGF0Y2ggPT4gKFxuICAgIFNlc3Npb25BUElVdGlsLnNpZ251cCh1c2VyKVxuICAgIC50aGVuKCBwYXlsb2FkID0+IGRpc3BhdGNoKHJlY2VpdmVDdXJyZW50VXNlcihwYXlsb2FkKSkpXG4gICAgLmZhaWwoZXJyb3JzID0+IGRpc3BhdGNoKHJlY2VpdmVTZXNzaW9uRXJyb3JzKGVycm9ycy5yZXNwb25zZUpTT04pKSlcbik7IiwiaW1wb3J0ICogYXMgVXNlckFQSVV0aWwgZnJvbSAnLi4vdXRpbC91c2Vyc19hcGlfdXRpbCc7XG5pbXBvcnQgeyByZWNlaXZlQ3VycmVudFVzZXIgfSBmcm9tICcuL3Nlc3Npb25fYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gdXNlciA9PiBkaXNwYXRjaCA9PiAoXG4gICAgVXNlckFQSVV0aWwudXBkYXRlVXNlcih1c2VyKVxuICAgIC50aGVuKCB1c2VyID0+IGRpc3BhdGNoKHJlY2VpdmVDdXJyZW50VXNlcih1c2VyKSkpXG4pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyID0gdXNlcklkID0+IGRpc3BhdGNoID0+IChcbiAgICBVc2VyQVBJVXRpbC5mZXRjaFVzZXIodXNlcklkKVxuICAgIC50aGVuKCB1c2VyID0+IGRpc3BhdGNoKHJlY2VpdmVDdXJyZW50VXNlcih1c2VyKSkgKVxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL2NvbXBvbmVudHMvcm9vdCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZSc7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGxldCBzdG9yZTtcbiAgICBpZiAod2luZG93LmN1cnJlbnRVc2VyKSB7XG4gICAgICAgIGNvbnN0IHByZWxvYWRlZFN0YXRlID0ge1xuICAgICAgICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogd2luZG93LmN1cnJlbnRVc2VyLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB3aW5kb3cuY3VycmVudFVzZXIudXNlci5maXJzdE5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuY3VycmVudFVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgIH1cblxuICAgIC8vdGVzdGluZ1xuICAgIHdpbmRvdy5nZXRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlO1xuICAgIC8vXG4gICAgXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgUmVhY3RET00ucmVuZGVyKDxSb290IHN0b3JlPXtzdG9yZX0gLz4sIHJvb3QpO1xufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBOYXZCYXJDb250YWluZXIgZnJvbSAnLi9uYXZfYmFyL25hdl9iYXJfY29udGFpbmVyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL25hdl9iYXIvc2Vzc2lvbl9mb3Jtcy9tb2RhbCc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vYWN0aW9ucy9tb2RhbF9hY3Rpb25zJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZXN0YXVyYW50SW5kZXhDb250YWluZXIgZnJvbSAnLi9pbmRleC9yZXN0YXVyYW50X2luZGV4X2NvbnRhaW5lcic7XG5pbXBvcnQgUmVzdGF1cmFudENvbnRhaW5lciBmcm9tICcuL3Jlc3RhdXJhbnRfcGFnZV9jb250YWluZXInO1xuaW1wb3J0IFJlc2VydmF0aW9uRm9ybUNvbnRhaW5lciBmcm9tICcuL3Jlc2VydmF0aW9uX2Zvcm1fY29udGFpbmVyJztcbmltcG9ydCBSZXNlcnZhdGlvbnNJbmRleENvbnRhaW5lciBmcm9tICcuL3Jlc2VydmF0aW9uc19pbmRleF9jb250YWluZXInO1xuaW1wb3J0IEVkaXRSZXNlcnZhdGlvbkZvcm1Db250YWluZXIgZnJvbSAnLi9lZGl0X3Jlc2VydmF0aW9uX2Zvcm1fY29udGFpbmVyJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfT5cbiAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgIDxOYXZCYXJDb250YWluZXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc2VydmF0aW9uc1wiIGNvbXBvbmVudD17UmVzZXJ2YXRpb25zSW5kZXhDb250YWluZXJ9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3RhdXJhbnRzLzppZC9yZXNlcnZlLzpyZXNlcnZhdGlvbklkXCIgY29tcG9uZW50PXtFZGl0UmVzZXJ2YXRpb25Gb3JtQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzdGF1cmFudHMvOmlkL3Jlc2VydmVcIiBjb21wb25lbnQ9e1Jlc2VydmF0aW9uRm9ybUNvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3RhdXJhbnRzLzppZFwiIGNvbXBvbmVudD17UmVzdGF1cmFudENvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3RhdXJhbnRzXCIgY29tcG9uZW50PXtSZXN0YXVyYW50SW5kZXhDb250YWluZXJ9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hSZXN0YXVyYW50IH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnMnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyX2FjdGlvbnMnXG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tICcuLi9hY3Rpb25zL21vZGFsX2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb24sIHVwZGF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXNlcnZhdGlvbl9hY3Rpb25zJztcbmltcG9ydCBSZXNlcnZhdGlvbkZvcm0gZnJvbSAnLi9yZXNlcnZhdGlvbl9mb3JtJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICByZXN0YXVyYW50OiBzdGF0ZS5lbnRpdGllcy5yZXN0YXVyYW50c1tvd25Qcm9wcy5tYXRjaC5wYXJhbXMuaWRdLFxuICAgIHVzZXJJZDogc3RhdGUuc2Vzc2lvbi51c2VySWQsXG4gICAgdXNlcjogc3RhdGUuZW50aXRpZXMudXNlcnNbc3RhdGUuc2Vzc2lvbi51c2VySWRdLFxuICAgIHJlc3RhdXJhbnRJZDogb3duUHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuICAgIHJlc2VydmF0aW9uSWQ6IG93blByb3BzLm1hdGNoLnBhcmFtcy5yZXNlcnZhdGlvbklkLFxuICAgIGZpbHRlcnM6IHN0YXRlLnVpLmZpbHRlcnMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBmZXRjaFJlc3RhdXJhbnQ6IHJlc3RhdXJhbnRJZCA9PiBkaXNwYXRjaChmZXRjaFJlc3RhdXJhbnQocmVzdGF1cmFudElkKSksXG4gICAgZmV0Y2hVc2VyOiB1c2VySWQgPT4gZGlzcGF0Y2goZmV0Y2hVc2VyKHVzZXJJZCkpLFxuICAgIG9wZW5Nb2RhbDogbW9kYWwgPT4gZGlzcGF0Y2gob3Blbk1vZGFsKG1vZGFsKSksXG4gICAgY3JlYXRlUmVzZXJ2YXRpb246IHJlc2VydmF0aW9uID0+IGRpc3BhdGNoKGNyZWF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uKSksXG4gICAgdXBkYXRlUmVzZXJ2YXRpb246IHJlc2VydmF0aW9uID0+IGRpc3BhdGNoKHVwZGF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uKSksXG4gICAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShSZXNlcnZhdGlvbkZvcm0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25pY2hvbGVwYXRyaXNzZS9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dpbmRvdy5saW5rZWRpbn0vPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmljaG9sZXBhdHJpc3NlL1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2luZG93LmdpdGh1Yn0vPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSW5kZXhTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAnJCQnOiBmYWxzZSxcbiAgICAgICAgICAgICckJCQnOiBmYWxzZSxcbiAgICAgICAgICAgICckJCQnOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnQgPSB0aGlzLnVwZGF0ZUN1cnJlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQcmljZSA9IHRoaXMudG9nZ2xlUHJpY2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50KGZpbHRlcikge1xuICAgICAgICByZXR1cm4gKGUpID0+IHRoaXMucHJvcHMudXBkYXRlVG9nZ2xlRmlsdGVyKGZpbHRlciwgZS50YXJnZXQudmFsdWUpXG4gICAgfTtcblxuICAgIGdlbmVyYXRlT3B0aW9ucyhhcnJheVR5cGUpIHtcbiAgICAgICAgbGV0IGN1aXNpbmVzSGFzaCA9IHt9O1xuICAgICAgICBsZXQgY2l0aWVzSGFzaCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzLnJlc3RhdXJhbnRzLmZvckVhY2gocmVzdGF1cmFudCA9PiB7XG4gICAgICAgICAgICBsZXQgZnVsbENpdHkgPSBgJHtyZXN0YXVyYW50LmNpdHl9LCAke3Jlc3RhdXJhbnQuc3RhdGV9YDtcbiAgICAgICAgICAgIGN1aXNpbmVzSGFzaFtyZXN0YXVyYW50LmN1aXNpbmVdID0gdHJ1ZTtcbiAgICAgICAgICAgIGNpdGllc0hhc2hbZnVsbENpdHldID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnNBcnJheTtcbiAgICAgICAgaWYgKGFycmF5VHlwZSA9PT0gJ2N1aXNpbmVQYXJhbXMnKSB7XG4gICAgICAgICAgICBvcHRpb25zQXJyYXkgPSBPYmplY3Qua2V5cyhjdWlzaW5lc0hhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uc0FycmF5ID0gT2JqZWN0LmtleXMoY2l0aWVzSGFzaCk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBvcHRpb25zID0gb3B0aW9uc0FycmF5Lm1hcCggb3B0aW9uID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgb3B0aW9uICR7YXJyYXlUeXBlfWB9IGtleT17b3B0aW9ufSBpZD17b3B0aW9ufT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e29wdGlvbn0gb25DbGljaz17dGhpcy51cGRhdGVDdXJyZW50KGFycmF5VHlwZSl9Lz4ge29wdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgdG9nZ2xlUHJpY2UoZSkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVRvZ2dsZUZpbHRlcigncHJpY2VQYXJhbXMnLCBlLnRhcmdldC5pZClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5pZF06ICF0aGlzLnN0YXRlW2UudGFyZ2V0LmlkXSB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+UHJpY2U8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2Utb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByaWNlLW9wdGlvbi1jb250YWluZXIgZmlyc3QgJHt0aGlzLnN0YXRlLiQkID8gJ3RvZ2dsZWQnIDogJ3VudG9nZ2xlZCd9YH0gb25DbGljaz17dGhpcy50b2dnbGVQcmljZX0gaWQ9XCIkJFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJCRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJpY2Utb3B0aW9uLWNvbnRhaW5lciAke3RoaXMuc3RhdGUuJCQkID8gJ3RvZ2dsZWQnIDogJ3VudG9nZ2xlZCd9YH0gb25DbGljaz17dGhpcy50b2dnbGVQcmljZX0gaWQ9XCIkJCRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICQkJFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwcmljZS1vcHRpb24tY29udGFpbmVyIGxhc3QgJHt0aGlzLnN0YXRlLiQkJCQgPyAndG9nZ2xlZCcgOiAndW50b2dnbGVkJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVByaWNlfSBpZD1cIiQkJCRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICQkJCRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNwYWNlclwiIC8+XG4gICAgICAgICAgICAgICAgPGgyPkN1aXNpbmVzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGl2aWRlclwiIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVPcHRpb25zKCdjdWlzaW5lUGFyYW1zJyl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNwYWNlclwiIC8+XG4gICAgICAgICAgICAgICAgPGgyPkNpdGllczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlT3B0aW9ucygnY2l0eVBhcmFtcycpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhTaWRlYmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdGF1cmFudEluZGV4SXRlbSBmcm9tICcuL3Jlc3RhdXJhbnRfaW5kZXhfaXRlbSc7XG5pbXBvcnQgU2VhcmNoQ29udGFpbmVyIGZyb20gJy4uL3NlYXJjaF9jb250YWluZXInO1xuaW1wb3J0IEluZGV4U2lkZWJhciBmcm9tICcuL2luZGV4X3NpZGViYXInO1xuXG5jbGFzcyBSZXN0YXVyYW50SW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoUmVzdGF1cmFudHModGhpcy5wcm9wcy5maWx0ZXJzKVxuICAgIH1cblxuICAgIGNhbGNUYWJsZXMocmVzdGF1cmFudHMpIHtcbiAgICAgICAgbGV0IG51bSA9IHJlc3RhdXJhbnRzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGAke251bX0gcmVzdGF1cmFudHMgYXZhaWxhYmxlIWA7XG4gICAgfTtcblxuICAgIGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtaW5kZXgtbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdGF1cmFudHMtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIHJlc3RhdXJhbnRzLCBwbGVhc2UgaG9sZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt3aW5kb3cubG9hZGluZ30gY2xhc3NOYW1lPVwibG9hZGluZy1jbG9ja1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIGxvYWRlZCgpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkUmVzdGF1cmFudHMgPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucmVzdGF1cmFudHMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGN1aXNpbmVzID0gdGhpcy5wcm9wcy50b2dnbGVzLmN1aXNpbmVQYXJhbXM7XG4gICAgICAgIGlmIChjdWlzaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3RhdXJhbnRzID0gZmlsdGVyZWRSZXN0YXVyYW50c1xuICAgICAgICAgICAgLmZpbHRlcihyZXN0YXVyYW50ID0+IGN1aXNpbmVzLmluY2x1ZGVzKHJlc3RhdXJhbnQuY3Vpc2luZSkpXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgY2l0aWVzID0gdGhpcy5wcm9wcy50b2dnbGVzLmNpdHlQYXJhbXMubWFwKGNpdHkgPT4gY2l0eS5zcGxpdCgnLCcpWzBdKTtcbiAgICAgICAgaWYgKGNpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3RhdXJhbnRzID0gZmlsdGVyZWRSZXN0YXVyYW50c1xuICAgICAgICAgICAgLmZpbHRlcihyZXN0YXVyYW50ID0+IGNpdGllcy5pbmNsdWRlcyhyZXN0YXVyYW50LmNpdHkpKVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbGV0IHByaWNlcyA9IHRoaXMucHJvcHMudG9nZ2xlcy5wcmljZVBhcmFtcy5tYXAocHJpY2UgPT4gcHJpY2UubGVuZ3RoKTtcbiAgICAgICAgaWYgKHByaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3RhdXJhbnRzID0gZmlsdGVyZWRSZXN0YXVyYW50c1xuICAgICAgICAgICAgLmZpbHRlcihyZXN0YXVyYW50ID0+IHByaWNlcy5pbmNsdWRlcyhyZXN0YXVyYW50LnByaWNlKSlcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzdGF1cmFudHMgPSBmaWx0ZXJlZFJlc3RhdXJhbnRzLm1hcChyZXN0YXVyYW50ID0+IChcbiAgICAgICAgICAgIDxSZXN0YXVyYW50SW5kZXhJdGVtIFxuICAgICAgICAgICAgICAgIGtleT17cmVzdGF1cmFudC5pZH0gXG4gICAgICAgICAgICAgICAgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gXG4gICAgICAgICAgICAgICAgZmlsdGVycz17dGhpcy5wcm9wcy5maWx0ZXJzfVxuICAgICAgICAgICAgICAgIGNoYW5nZUZpbHRlcj17dGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWluZGV4LW1haW5cIj5cbiAgICAgICAgICAgICAgICA8SW5kZXhTaWRlYmFyIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUb2dnbGVGaWx0ZXI9e3RoaXMucHJvcHMudXBkYXRlVG9nZ2xlRmlsdGVyfSBcbiAgICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudHM9e09iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXN0YXVyYW50cyl9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5jYWxjVGFibGVzKHJlc3RhdXJhbnRzKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYWN0LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyA/IFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZygpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudEluZGV4OyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVzdGF1cmFudEluZGV4IGZyb20gJy4vcmVzdGF1cmFudF9pbmRleCc7XG5pbXBvcnQgeyBjaGFuZ2VGaWx0ZXIsIHRvZ2dsZUZpbHRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZmlsdGVyX2FjdGlvbnMnO1xuaW1wb3J0IHsgZmV0Y2hSZXN0YXVyYW50cyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVzdGF1cmFudF9hY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBmaWx0ZXJzOiBzdGF0ZS51aS5maWx0ZXJzLFxuICAgIHJlc3RhdXJhbnRzOiBzdGF0ZS5lbnRpdGllcy5yZXN0YXVyYW50cyxcbiAgICBsb2FkaW5nOiBzdGF0ZS51aS5sb2FkaW5nLnJlc3RhdXJhbnRzTG9hZGluZyxcbiAgICB0b2dnbGVzOiBzdGF0ZS51aS50b2dnbGVzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBmZXRjaFJlc3RhdXJhbnRzOiBmaWx0ZXJzID0+IGRpc3BhdGNoKGZldGNoUmVzdGF1cmFudHMoZmlsdGVycykpLFxuICAgIHVwZGF0ZVRvZ2dsZUZpbHRlcjogKGZpbHRlciwgdmFsdWUpID0+IGRpc3BhdGNoKHRvZ2dsZUZpbHRlcihmaWx0ZXIsIHZhbHVlKSksXG4gICAgY2hhbmdlRmlsdGVyOiAoZmlsdGVyLCB2YWx1ZSkgPT4gZGlzcGF0Y2goY2hhbmdlRmlsdGVyKGZpbHRlciwgdmFsdWUpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShSZXN0YXVyYW50SW5kZXgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzZXJ2YXRpb25CdXR0b25zIGZyb20gJy4uL3Jlc2VydmF0aW9uX2J1dHRvbnMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNsYXNzIFJlc3RhdXJhbnRJbmRleEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGdlbmVyYXRlU3RhcnMoKSB7XG4gICAgICAgIGxldCByYW5kUmF0aW5nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSlcbiAgICAgICAgbGV0IHN0YXJzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RhckNvbG9yID0gJ2dvbGQnO1xuICAgICAgICAgICAgaWYgKGkgPiByYW5kUmF0aW5nKSBzdGFyQ29sb3IgPSAnZ3JheSc7XG5cbiAgICAgICAgICAgIHN0YXJzLnB1c2goXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLXN0YXIgJHtzdGFyQ29sb3J9LXN0YXJgfSBrZXk9e2l9PjwvaT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0YXJzO1xuICAgIH1cblxuICAgIHByaWNlKCkge1xuICAgICAgICBsZXQgZG9sbGFTaWducyA9IFtdO1xuICAgICAgICB3aGlsZSAoZG9sbGFTaWducy5sZW5ndGggPCBwYXJzZUludCh0aGlzLnByb3BzLnJlc3RhdXJhbnQucHJpY2UpKSB7XG4gICAgICAgICAgICBkb2xsYVNpZ25zLnB1c2goJyQnKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZG9sbGFTaWducztcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgdGh1bWJuYWlsVXJsID0gdGhpcy5wcm9wcy5yZXN0YXVyYW50LnBob3RvVXJsc1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGhpcy5wcm9wcy5yZXN0YXVyYW50LmlkfSBjbGFzc05hbWU9XCJyZXN0YXVyYW50XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RodW1ibmFpbFVybH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9yZXN0YXVyYW50cy8ke3RoaXMucHJvcHMucmVzdGF1cmFudC5pZH1gfT57dGhpcy5wcm9wcy5yZXN0YXVyYW50Lm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJzLXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVTdGFycygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByaWNlKCl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57dGhpcy5wcm9wcy5yZXN0YXVyYW50LmN1aXNpbmV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57YCR7dGhpcy5wcm9wcy5yZXN0YXVyYW50LmNpdHl9LCAke3RoaXMucHJvcHMucmVzdGF1cmFudC5zdGF0ZX1gfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNlcnZhdGlvbkJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhdXJhbnQ9e3RoaXMucHJvcHMucmVzdGF1cmFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMucHJvcHMuZmlsdGVycy5kYXRlUGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRmlsdGVyPXt0aGlzLnByb3BzLmNoYW5nZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudEluZGV4SXRlbTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tICcuL3NlYXJjaF9jb250YWluZXInO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cbiAgICAgICAgICAgIEZpbmQgeW91ciBwZXJmZWN0IHN1cmZhY2VcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hDb250YWluZXIgLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2Vzc2lvbl9hY3Rpb25zJztcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vZGFsX2FjdGlvbnMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBEcm9wRG93biA9ICh7IG1vZGFsLCBsb2dvdXQgfSkgPT4ge1xuICAgIGlmICghbW9kYWwgfHwgbW9kYWwgIT0gJ2Ryb3BEb3duJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3AtZG93bic+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgey8qIDxsaT48TGluayB0bz1cIi9wcm9maWxlXCI+TXkgUHJvZmlsZTwvTGluaz48L2xpPiAqL31cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcmVzZXJ2YXRpb25zXCI+TXkgRGluaW5nIEhpc3Rvcnk8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICB7LyogPGxpPjxMaW5rIHRvPVwiL3NhdmVkXCI+TXkgU2F2ZWQgUmVzdGF1cmFudHM8L0xpbms+PC9saT4gKi99XG4gICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2xvZ291dH0+U2lnbiBvdXQ8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIG1vZGFsOiBzdGF0ZS51aS5tb2RhbCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0KCkpLFxuICAgIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcm9wRG93bik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuL2Ryb3BfZG93bic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc2Vzc2lvbkxpbmtzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ251cC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Nb2RhbCgnc2lnbnVwJyl9PlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbk1vZGFsKCdsb2dpbicpfT5TaWduIEluPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kYWwgPT09ICdkcm9wRG93bicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb3BzLmNsb3NlTW9kYWwpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcGVyc29uYWxHcmVldGluZygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2LWdyZWV0aW5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTW9kYWwoJ2Ryb3BEb3duJyl9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJncmVldGluZ1wiPkhpLCB7dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0hIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+PC9oMj5cbiAgICAgICAgICAgICAgICA8RHJvcERvd24gLz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJhclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLmhhbmRsZUNsaWNrKCl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2luZG93LmxvZ299IGNsYXNzTmFtZT1cIm5hdi1sb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5BdmFpbGFibGVTdXJmYWNlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5BbiBPcGVuVGFibGUgQ2xvbmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50VXNlciA/IFxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxHcmVldGluZygpIDogXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uTGlua3MoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZfYmFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vZGFsX2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5zZXNzaW9uLmZpcnN0TmFtZSxcbiAgICBtb2RhbDogc3RhdGUudWkubW9kYWxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW5Nb2RhbDogbW9kYWwgPT4gZGlzcGF0Y2gob3Blbk1vZGFsKG1vZGFsKSksXG4gICAgY2xvc2VNb2RhbDogKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShOYXZCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXREZW1vID0gdGhpcy5zdWJtaXREZW1vLmJpbmQodGhpcyk7XG4gICAgfTtcblxuICAgIHVwZGF0ZShmaWVsZCkge1xuICAgICAgICByZXR1cm4gZSA9PiAodGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZmllbGRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB1c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMucHJvY2Vzc0Zvcm0odXNlcilcbiAgICAgICAgLnRoZW4odGhpcy5wcm9wcy5jbG9zZU1vZGFsKTtcbiAgICB9XG5cbiAgICBzdWJtaXREZW1vKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCB1c2VyID0geyBlbWFpbDogJ2RlbW9AZ21haWwuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcgfVxuICAgICAgICB0aGlzLnByb3BzLnByb2Nlc3NGb3JtKHVzZXIpXG4gICAgICAgIC50aGVuKHRoaXMucHJvcHMuY2xvc2VNb2RhbCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9ycy5tYXAoZXJyb3IgPT4gKFxuICAgICAgICAgICAgPGRpdj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICkpO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZSgncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXRcIj5TaWduIEluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb24ndCB3YW50IHRvIGNvbXBsZXRlIHRoZSBmb3JtPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZW1vLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0RGVtb30+RGVtbyBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5ldyB0byBBdmFpbGFibGVTdXJmYWNlPyA8c3BhbiBjbGFzc05hbWU9XCJvdGhlci1mb3JtLWxpbmtcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm90aGVyRm9ybX0+Q3JlYXRlIGFuIGFjY291bnQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Nlc3Npb25fYWN0aW9ucyc7XG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21vZGFsX2FjdGlvbnMnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luX2Zvcm0nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGVycm9yczogc3RhdGUuZXJyb3JzLnNlc3Npb25FcnJvcnMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBwcm9jZXNzRm9ybTogdXNlciA9PiBkaXNwYXRjaChsb2dpbih1c2VyKSksXG4gICAgb3RoZXJGb3JtOiAoKSA9PiBkaXNwYXRjaChvcGVuTW9kYWwoJ3NpZ251cCcpKSxcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbW9kYWxfYWN0aW9ucydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTG9naW5Gb3JtQ29udGFpbmVyIGZyb20gJy4vbG9naW5fZm9ybV9jb250YWluZXInO1xuaW1wb3J0IFNpZ251cEZvcm1Db250YWluZXIgZnJvbSAnLi9zaWdudXBfZm9ybV9jb250YWluZXInO1xuaW1wb3J0IFJlc2VydmF0aW9uU3VjY2Vzc0NvbnRhaW5lciBmcm9tICcuLi8uLi9yZXNlcnZhdGlvbl9zdWNjZXNzJztcblxuY29uc3QgTW9kYWwgPSAoeyBtb2RhbCwgY2xvc2VNb2RhbCB9KSA9PiB7XG4gICAgaWYgKCFtb2RhbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50O1xuICAgIHN3aXRjaCAobW9kYWwpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgY29tcG9uZW50ID0gPExvZ2luRm9ybUNvbnRhaW5lciAvPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NpZ251cCc6XG4gICAgICAgICAgICBjb21wb25lbnQgPSA8U2lnbnVwRm9ybUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVzLXN1Y2Nlc3MnOlxuICAgICAgICAgICAgY29tcG9uZW50ID0gPFJlc2VydmF0aW9uU3VjY2Vzc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAgYnJlYWs7ICAgICAgXG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNjcmVlblwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfT5cbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBtb2RhbDogc3RhdGUudWkubW9kYWwsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW9kYWwpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIFNpZ251cEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0RGVtbyA9IHRoaXMuc3VibWl0RGVtby5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGUgPT4gKHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMucHJvY2Vzc0Zvcm0odXNlcilcbiAgICAgICAgLnRoZW4odGhpcy5wcm9wcy5jbG9zZU1vZGFsKTtcbiAgICB9XG5cbiAgICBzdWJtaXREZW1vKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1c2VyID0geyBlbWFpbDogJ2RlbW9AZ21haWwuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcgfVxuICAgICAgICB0aGlzLnByb3BzLmxvZ2luKHVzZXIpXG4gICAgICAgIC50aGVuKHRoaXMucHJvcHMuY2xvc2VNb2RhbCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9ycy5tYXAoZXJyb3IgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSB0byBBdmFpbGFibGVTdXJmYWNlITwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGUoJ2ZpcnN0X25hbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmlyc3QgTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlKCdsYXN0X25hbWUnKX0gcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb24ndCB3YW50IHRvIGNvbXBsZXRlIHRoZSBmb3JtPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZW1vLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0RGVtb30+RGVtbyBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8c3BhbiBjbGFzc05hbWU9XCJvdGhlci1mb3JtLWxpbmtcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm90aGVyRm9ybX0+U2lnbiBJbjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2lnbnVwLCBsb2dpbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2Vzc2lvbl9hY3Rpb25zJztcbmltcG9ydCB7IGNsb3NlTW9kYWwsIG9wZW5Nb2RhbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbW9kYWxfYWN0aW9ucyc7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuL3NpZ251cF9mb3JtJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBlcnJvcnM6IHN0YXRlLmVycm9ycy5zZXNzaW9uRXJyb3JzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgcHJvY2Vzc0Zvcm06IHVzZXIgPT4gZGlzcGF0Y2goc2lnbnVwKHVzZXIpKSxcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpLFxuICAgIG90aGVyRm9ybTogKCkgPT4gZGlzcGF0Y2gob3Blbk1vZGFsKCdsb2dpbicpKSxcbiAgICBsb2dpbjogdXNlciA9PiBkaXNwYXRjaChsb2dpbih1c2VyKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnbnVwRm9ybSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUGFydHlQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnR5ID0gdGhpcy5zZWxlY3RQYXJ0eS5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICBzZWxlY3RQYXJ0eShlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdwYXJ0eVBhcmFtcycsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVQYXJ0aWVzKCkge1xuICAgICAgICBjb25zdCBtYXhQYXJ0eSA9IDEwO1xuICAgICAgICBjb25zdCBwYXJ0aWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heFBhcnR5OyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRpZXMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LW9wdGlvblwiIGtleT17aX0gaWQ9e2l9PntpfSBQZW9wbGU8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICAgICAgcGFydGllcy5wdXNoKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0eS1vcHRpb25cIiBrZXk9e21heFBhcnR5ICsgMX0gaWQ9J2xhcmdlcic+XG4gICAgICAgICAgICAgICAgTGFyZ2VyIFBhcnR5XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcnRpZXM7XG4gICAgfTtcblxuICAgIHBhcnR5U2VsZWN0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGFsICE9ICdwYXJ0eS1vcHRpb25zJykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LW9wdGlvbnNcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdFBhcnR5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVBhcnRpZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kYWwgPT09ICdwYXJ0eS1vcHRpb25zJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb3BzLmNsb3NlTW9kYWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvcHMuY2xvc2VNb2RhbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBwYXJ0eURlc2MgPSBgJHt0aGlzLnByb3BzLnBhcnR5UGFyYW1zfSBQZW9wbGVgO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXJ0eVBhcmFtcyA9PT0gJ2xhcmdlcicpIHBhcnR5RGVzYyA9ICdMYXJnZXIgUGFydHknO1xuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydHktcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0eS1zZWxlY3RvclwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbk1vZGFsKCdwYXJ0eS1vcHRpb25zJyl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAge3BhcnR5RGVzY31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0eS1zZWxlY3Rvci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wYXJ0eVNlbGVjdG9yKCkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnR5UGlja2VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBkYXRlVGltZSBmcm9tICcuLi91dGlsL2RhdGVfdGltZV9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBSZXNlcnZhdGlvbkJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGF2YWlsYWJsZSh0aW1lKSB7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmICh0aW1lLmdldEhvdXJzKCkgPj0gdGhpcy5wcm9wcy5yZXN0YXVyYW50Lm9wZW5BdCAmJiB0aW1lLmdldEhvdXJzKCkgPCB0aGlzLnByb3BzLnJlc3RhdXJhbnQuY2xvc2VBdCAmJiB0aW1lID4gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGxldCB0aW1lVmFsdWUgPSBuZXcgRGF0ZShlLnRhcmdldC5pZClcbiAgICAgICAgdGltZVZhbHVlID0gbmV3IERhdGUodGltZVZhbHVlLnNldE1pbnV0ZXModGltZVZhbHVlLmdldE1pbnV0ZXMoKSAtIDE1KSlcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ2RhdGVQYXJhbXMnLCB0aW1lVmFsdWUpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcmVzdGF1cmFudHMvJHt0aGlzLnByb3BzLnJlc3RhdXJhbnQuaWR9L3Jlc2VydmVgKVxuICAgIH1cblxuICAgIGdlbmVyYXRlUmVzZXJ2YXRpb25MaW5rcygpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRpbWUpO1xuICAgICAgICB0aW1lID0gbmV3IERhdGUodGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoYnV0dG9ucy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlKHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aX0gY2xhc3NOYW1lPXtgcmVzLWJ1dHRvbmB9IGlkPXt0aW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS5wcmludFRpbWUodGltZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aX0gY2xhc3NOYW1lPXtgcmVzLWJ1dHRvbiByZXMtaW5hY3RpdmVgfSBkaXNhYmxlZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICBVbmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25zLnB1c2goYnV0dG9uKVxuICAgICAgICAgICAgdGltZSA9IG5ldyBEYXRlKHRpbWUuc2V0TWludXRlcyh0aW1lLmdldE1pbnV0ZXMoKSArIDE1KSlcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG4gICAgfTtcblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVSZXNlcnZhdGlvbkxpbmtzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVzZXJ2YXRpb25CdXR0b25zKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICogYXMgZGF0ZVRpbWUgZnJvbSAnLi4vdXRpbC9kYXRlX3RpbWVfZnVuY3Rpb25zJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jbGFzcyBSZXNlcnZhdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSh0aGlzLnByb3BzLmZpbHRlcnMuZGF0ZVBhcmFtcyksXG4gICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnByb3BzLnVzZXJJZCxcbiAgICAgICAgICAgIHBhcnR5X3NpemU6IHRoaXMucHJvcHMuZmlsdGVycy5wYXJ0eVBhcmFtcyxcbiAgICAgICAgICAgIG9jY2FzaW9uOiB0aGlzLnByb3BzLmZpbHRlcnMub2NjYXNpb24sXG4gICAgICAgICAgICByZXF1ZXN0czogdGhpcy5wcm9wcy5maWx0ZXJzLnJlcXVlc3RzLFxuICAgICAgICAgICAgcmVzdGF1cmFudF9pZDogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVSZXogPSB0aGlzLnVwZGF0ZVJlei5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hSZXN0YXVyYW50KHRoaXMucHJvcHMucmVzdGF1cmFudElkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXIodGhpcy5wcm9wcy51c2VySWQpO1xuICAgIH07XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcikge1xuICAgICAgICAgICAgbGV0IGZ1bGxOYW1lID0gYCR7dGhpcy5wcm9wcy51c2VyLmZpcnN0TmFtZX0gJHt0aGlzLnByb3BzLnVzZXIubGFzdE5hbWV9IGA7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Nb2RhbCgnbG9naW4nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YE5vdCAke3RoaXMucHJvcHMudXNlci5maXJzdE5hbWV9P2B9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIH07XG5cbiAgICB1cGRhdGVSZXooZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVzZXJDaGFuZ2VkKCkge1xuICAgICAgICBsZXQgcGhvbmVVcGRhdGVkID0gdGhpcy5wcm9wcy51c2VyLnBob25lTnVtYmVyID09PSB0aGlzLnN0YXRlLnBob25lO1xuICAgICAgICBsZXQgZW1haWxVcGRhdGVkID0gdGhpcy5wcm9wcy51c2VyLmVtYWlsID09PSB0aGlzLnN0YXRlLmVtYWlsO1xuICAgICAgICByZXR1cm4gcGhvbmVVcGRhdGVkIHx8IGVtYWlsVXBkYXRlZDtcbiAgICB9XG5cbiAgICB1cGRhdGVVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHVzZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnVzZXIpO1xuICAgICAgICB1c2VyLnBob25lX251bWJlciA9IHRoaXMuc3RhdGUucGhvbmU7XG4gICAgICAgIHVzZXIuZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodXNlcik7XG4gICAgfTtcblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHJlc2VydmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIgJiYgdGhpcy51c2VyQ2hhbmdlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVzZXJ2YXRpb25JZCkge1xuICAgICAgICAgICAgcmVzZXJ2YXRpb25bJ2lkJ10gPSB0aGlzLnByb3BzLnJlc2VydmF0aW9uSWQ7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3RhdXJhbnRfaWQgPSB0aGlzLnByb3BzLnJlc3RhdXJhbnRJZDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyICYmIHRoaXMuc3RhdGUuZW1haWwgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBob25lID0gdGhpcy5wcm9wcy51c2VyLnBob25lTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbCA9IHRoaXMucHJvcHMudXNlci5lbWFpbDtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcGFydHlEZXNjID0gYCR7dGhpcy5zdGF0ZS5wYXJ0eV9zaXplfSBQZW9wbGVgXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhcnR5X3NpemUgPT09ICdsYXJnZXInKSBwYXJ0eURlc2MgPSAnTGFyZ2VyIFBhcnR5J1xuXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5zdGF0ZS50aW1lKTtcbiAgICAgICAgbGV0IHRodW1iVXJsID0gdGhpcy5wcm9wcy5yZXN0YXVyYW50LnBob3RvVXJsc1swXTtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmF0aW9uLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcy1wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Zb3UncmUgYWxtb3N0IGRvbmUhPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXMtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RodW1iVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXMtZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2ByZXN0YXVyYW50cy8ke3RoaXMucHJvcHMucmVzdGF1cmFudC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3RoaXMucHJvcHMucmVzdGF1cmFudC5uYW1lfSAtICR7dGhpcy5wcm9wcy5yZXN0YXVyYW50LmNpdHl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNhbGVuZGFyIHJlcy1jYWxcIj48L2k+IHtkYXRlVGltZS5wcmludERhdGUoZGF0ZSl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhciBmYS1jbG9jayByZXMtY2xvY2tcIj48L2k+IHtkYXRlVGltZS5wcmludFRpbWUoZGF0ZSl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhciBmYS11c2VyIHJlcy11c2VyXCI+PC9pPiB7cGFydHlEZXNjfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubG9nZ2VkSW4oKX1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVzLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVJlen1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVJlen1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9jY2FzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub2NjYXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVJlen1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJvY2Nhc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVxdWVzdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXF1ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlUmV6fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcXVlc3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db21wbGV0ZSBSZXNlcnZhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVzZXJ2YXRpb25Gb3JtKTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaFJlc3RhdXJhbnQgfSBmcm9tICcuLi9hY3Rpb25zL3Jlc3RhdXJhbnRfYWN0aW9ucyc7XG5pbXBvcnQgeyBmZXRjaFVzZXIsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXJfYWN0aW9ucydcbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gJy4uL2FjdGlvbnMvbW9kYWxfYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVSZXNlcnZhdGlvbiwgdXBkYXRlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL3Jlc2VydmF0aW9uX2FjdGlvbnMnO1xuaW1wb3J0IFJlc2VydmF0aW9uRm9ybSBmcm9tICcuL3Jlc2VydmF0aW9uX2Zvcm0nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIHJlc3RhdXJhbnQ6IHN0YXRlLmVudGl0aWVzLnJlc3RhdXJhbnRzW293blByb3BzLm1hdGNoLnBhcmFtcy5pZF0sXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcbiAgICB1c2VyOiBzdGF0ZS5lbnRpdGllcy51c2Vyc1tzdGF0ZS5zZXNzaW9uLnVzZXJJZF0sXG4gICAgcmVzdGF1cmFudElkOiBvd25Qcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG4gICAgZmlsdGVyczogc3RhdGUudWkuZmlsdGVycyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGZldGNoUmVzdGF1cmFudDogcmVzdGF1cmFudElkID0+IGRpc3BhdGNoKGZldGNoUmVzdGF1cmFudChyZXN0YXVyYW50SWQpKSxcbiAgICBmZXRjaFVzZXI6IHVzZXJJZCA9PiBkaXNwYXRjaChmZXRjaFVzZXIodXNlcklkKSksXG4gICAgb3Blbk1vZGFsOiBtb2RhbCA9PiBkaXNwYXRjaChvcGVuTW9kYWwobW9kYWwpKSxcbiAgICBjcmVhdGVSZXNlcnZhdGlvbjogcmVzZXJ2YXRpb24gPT4gZGlzcGF0Y2goY3JlYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb24pKSxcbiAgICB1cGRhdGVSZXNlcnZhdGlvbjogcmVzZXJ2YXRpb24gPT4gZGlzcGF0Y2godXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb24pKSxcbiAgICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlcikpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFJlc2VydmF0aW9uRm9ybSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZGF0ZVRpbWUgZnJvbSAnLi4vdXRpbC9kYXRlX3RpbWVfZnVuY3Rpb25zJztcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgUmVzZXJ2YXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW5jZWxSZXNlcnZhdGlvbiA9IHRoaXMuY2FuY2VsUmVzZXJ2YXRpb24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ2RhdGVQYXJhbXMnLCBuZXcgRGF0ZSh0aGlzLnByb3BzLnJlc2VydmF0aW9uLnRpbWUpKVxuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcigncGFydHlQYXJhbXMnLCB0aGlzLnByb3BzLnJlc2VydmF0aW9uLnBhcnR5U2l6ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ29jY2FzaW9uJywgdGhpcy5wcm9wcy5yZXNlcnZhdGlvbi5vY2Nhc2lvbilcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ3JlcXVlc3RzJywgdGhpcy5wcm9wcy5yZXNlcnZhdGlvbi5yZXF1ZXN0cylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYHJlc3RhdXJhbnRzLyR7dGhpcy5wcm9wcy5yZXN0YXVyYW50LmlkfS9yZXNlcnZlLyR7dGhpcy5wcm9wcy5yZXNlcnZhdGlvbi5pZH1gKTtcbiAgICB9O1xuXG4gICAgY2FuY2VsUmVzZXJ2YXRpb24oKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlUmVzZXJ2YXRpb24odGhpcy5wcm9wcy5yZXNlcnZhdGlvbi5pZClcbiAgICB9XG5cbiAgICBlZGl0TGluaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlcnZhdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCIgb25DbGljaz17dGhpcy5jYW5jZWxSZXNlcnZhdGlvbn0+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcmVzdGF1cmFudCA9IHRoaXMucHJvcHMucmVzdGF1cmFudFxuICAgICAgICBpZiAoIXJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMucmVzZXJ2YXRpb24udGltZSk7XG4gICAgICAgIGxldCBwYXJ0eURlc2MgPSB0aGlzLnByb3BzLnJlc2VydmF0aW9uLnBhcnR5U2l6ZSA9PT0gJ2xhcmdlcicgPyAnTGFyZ2VyIFBhcnR5JyA6IGAke3RoaXMucHJvcHMucmVzZXJ2YXRpb24ucGFydHlTaXplfSBQZW9wbGVgXG4gICAgICAgIGxldCB0aHVtYlVybCA9IHRoaXMucHJvcHMucmVzdGF1cmFudC5waG90b1VybHNbMF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXJ2YXRpb24tbWFpblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYlVybH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmF0aW9uLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvcmVzdGF1cmFudHMvJHtyZXN0YXVyYW50LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5lZGl0TGluaygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhciBmYS1jYWxlbmRhciByZXMtY2FsXCI+PC9pPiB7ZGF0ZVRpbWUucHJpbnREYXRlKHRpbWUpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrIHJlcy1jbG9ja1wiPjwvaT4ge2RhdGVUaW1lLnByaW50VGltZSh0aW1lKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhciBmYS11c2VyIHJlcy11c2VyXCI+PC9pPiB7cGFydHlEZXNjfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVzZXJ2YXRpb25JdGVtKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZXNlcnZhdGlvbkl0ZW0gZnJvbSAnLi9yZXNlcnZhdGlvbl9pdGVtJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgUmVzZXJ2YXRpb25TdWNjZXNzID0gcHJvcHMgPT4ge1xuICAgIGxldCByZXNlcnZhdGlvbnMgPSBPYmplY3QudmFsdWVzKHByb3BzLnJlc2VydmF0aW9ucyk7XG4gICAgbGV0IHJlc2VydmF0aW9uID0gcmVzZXJ2YXRpb25zW3Jlc2VydmF0aW9ucy5sZW5ndGggLSAxXTtcbiAgICBpZiAoIXJlc2VydmF0aW9uKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcy1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aDI+U3VjY2VzcyE8L2gyPlxuICAgICAgICAgICAgPFJlc2VydmF0aW9uSXRlbSBcbiAgICAgICAgICAgICAgICByZXNlcnZhdGlvbj17cmVzZXJ2YXRpb259XG4gICAgICAgICAgICAgICAgcmVzdGF1cmFudD17cHJvcHMucmVzdGF1cmFudHNbcmVzZXJ2YXRpb24ucmVzdGF1cmFudElkXX1cbiAgICAgICAgICAgICAgICBrZXk9e3Jlc2VydmF0aW9uLmlkfVxuICAgICAgICAgICAgICAgIGVkaXRGb3JtPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHJlc2VydmF0aW9uczogc3RhdGUuZW50aXRpZXMucmVzZXJ2YXRpb25zLFxuICAgIHJlc3RhdXJhbnRzOiBzdGF0ZS5lbnRpdGllcy5yZXN0YXVyYW50cyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG51bGxcbikoUmVzZXJ2YXRpb25TdWNjZXNzKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzZXJ2YXRpb25JdGVtIGZyb20gJy4vcmVzZXJ2YXRpb25faXRlbSc7XG5cbmNsYXNzIFJlc2VydmF0aW9uc0luZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXIodGhpcy5wcm9wcy51c2VySWQpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoUmVzdGF1cmFudHMoKTtcbiAgICB9O1xuXG4gICAgc29ydERhdGVzKHJlczEsIHJlczIpIHtcbiAgICAgICAgLy8gbmV3ZXN0IHRvIG9sZGVzdFxuICAgICAgICBpZiAobmV3IERhdGUocmVzMS50aW1lKSA+IG5ldyBEYXRlKHJlczIudGltZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKHJlczEudGltZSkgPCBuZXcgRGF0ZShyZXMyLnRpbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhc3RSZXNlcnZhdGlvbnMoKSB7XG4gICAgICAgIGxldCBwYXN0UmVzZXJ2YXRpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucmVzZXJ2YXRpb25zKVxuICAgICAgICAuZmlsdGVyKCBjdXJyZW50UmVzZXJ2YXRpb24gPT4gKFxuICAgICAgICAgICAgbmV3IERhdGUoY3VycmVudFJlc2VydmF0aW9uLnRpbWUpIDw9IG5ldyBEYXRlKClcbiAgICAgICAgKSkuc29ydCh0aGlzLnNvcnREYXRlcyk7XG4gICAgICAgIHJldHVybiBwYXN0UmVzZXJ2YXRpb25zQXJyYXk7XG4gICAgfTtcblxuICAgIGZ1dHVyZVJlc2VydmF0aW9ucygpIHtcbiAgICAgICAgbGV0IGZ1dHVyZVJlc2VydmF0aW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnJlc2VydmF0aW9ucylcbiAgICAgICAgLmZpbHRlcihjdXJyZW50UmVzZXJ2YXRpb24gPT4gKFxuICAgICAgICAgICAgbmV3IERhdGUoY3VycmVudFJlc2VydmF0aW9uLnRpbWUpID4gbmV3IERhdGUoKVxuICAgICAgICApKS5zb3J0KHRoaXMuc29ydERhdGVzKTtcbiAgICAgICAgcmV0dXJuIGZ1dHVyZVJlc2VydmF0aW9uc0FycmF5O1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucmVzdGF1cmFudHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHBhc3RSZXNlcnZhdGlvbnNBcnJheSA9IHRoaXMucGFzdFJlc2VydmF0aW9ucygpXG4gICAgICAgIC5tYXAoIHJlc2VydmF0aW9uID0+IChcbiAgICAgICAgICAgIDxSZXNlcnZhdGlvbkl0ZW0gXG4gICAgICAgICAgICAgICAgcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ufSBcbiAgICAgICAgICAgICAgICByZXN0YXVyYW50PXt0aGlzLnByb3BzLnJlc3RhdXJhbnRzW3Jlc2VydmF0aW9uLnJlc3RhdXJhbnRJZF19IFxuICAgICAgICAgICAgICAgIGtleT17cmVzZXJ2YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgZWRpdEZvcm09e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNoYW5nZUZpbHRlcj17dGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZGVsZXRlUmVzZXJ2YXRpb249e3RoaXMucHJvcHMuZGVsZXRlUmVzZXJ2YXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICApKTtcblxuICAgICAgICBsZXQgZnV0dXJlUmVzZXJ2YXRpb25zQXJyYXkgPSB0aGlzLmZ1dHVyZVJlc2VydmF0aW9ucygpXG4gICAgICAgIC5tYXAoIHJlc2VydmF0aW9uID0+IChcbiAgICAgICAgICAgIDxSZXNlcnZhdGlvbkl0ZW0gXG4gICAgICAgICAgICAgICAgcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ufSBcbiAgICAgICAgICAgICAgICByZXN0YXVyYW50PXt0aGlzLnByb3BzLnJlc3RhdXJhbnRzW3Jlc2VydmF0aW9uLnJlc3RhdXJhbnRJZF19IFxuICAgICAgICAgICAgICAgIGtleT17cmVzZXJ2YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgZWRpdEZvcm09e3RydWV9XG4gICAgICAgICAgICAgICAgY2hhbmdlRmlsdGVyPXt0aGlzLnByb3BzLmNoYW5nZUZpbHRlcn1cbiAgICAgICAgICAgICAgICBkZWxldGVSZXNlcnZhdGlvbj17dGhpcy5wcm9wcy5kZWxldGVSZXNlcnZhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmF0aW9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwY29taW5nLXJlc2VydmF0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VXBjb21pbmcgUmVzZXJ2YXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAge2Z1dHVyZVJlc2VydmF0aW9uc0FycmF5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzdC1yZXNlcnZhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBhc3QgUmVzZXJ2YXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAge3Bhc3RSZXNlcnZhdGlvbnNBcnJheX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uc0luZGV4OyIsImltcG9ydCBSZXNlcnZhdGlvbnNJbmRleCBmcm9tICcuL3Jlc2VydmF0aW9uc19pbmRleCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaFVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXJfYWN0aW9ucyc7XG5pbXBvcnQgeyBmZXRjaFJlc3RhdXJhbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnMnO1xuaW1wb3J0IHsgY2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9maWx0ZXJfYWN0aW9ucyc7XG5pbXBvcnQgeyBkZWxldGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25fYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcbiAgICByZXNlcnZhdGlvbnM6IHN0YXRlLmVudGl0aWVzLnJlc2VydmF0aW9ucyxcbiAgICByZXN0YXVyYW50czogc3RhdGUuZW50aXRpZXMucmVzdGF1cmFudHMsXG4gICAgaGlzdG9yeTogb3duUHJvcHMuaGlzdG9yeSxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgZmV0Y2hVc2VyOiB1c2VySWQgPT4gZGlzcGF0Y2goZmV0Y2hVc2VyKHVzZXJJZCkpLFxuICAgIGZldGNoUmVzdGF1cmFudHM6IGZpbHRlcnMgPT4gZGlzcGF0Y2goZmV0Y2hSZXN0YXVyYW50cyhmaWx0ZXJzKSksXG4gICAgY2hhbmdlRmlsdGVyOiAoZmlsdGVyLCB2YWx1ZSkgPT4gZGlzcGF0Y2goY2hhbmdlRmlsdGVyKGZpbHRlciwgdmFsdWUpKSxcbiAgICBkZWxldGVSZXNlcnZhdGlvbjogcmVzZXJ2YXRpb25JZCA9PiBkaXNwYXRjaChkZWxldGVSZXNlcnZhdGlvbihyZXNlcnZhdGlvbklkKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoUmVzZXJ2YXRpb25zSW5kZXgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzZXJ2YXRpb25CdXR0b25zIGZyb20gJy4vcmVzZXJ2YXRpb25fYnV0dG9ucyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxuY29uc3QgcHJpY2UgPSB7XG4gICAgMTogJyQnLFxuICAgIDI6ICckJCcsXG4gICAgMzogJyQkJCcsXG4gICAgNDogJyQkJCQnXG59O1xuXG5jbGFzcyBSZXN0YXVyYW50UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmZpbHRlcnMpO1xuICAgICAgICB0aGlzLnNlbGVjdERhdGUgPSB0aGlzLnNlbGVjdERhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0eSA9IHRoaXMuc2VsZWN0UGFydHkuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoUmVzdGF1cmFudCh0aGlzLnByb3BzLnJlc3RhdXJhbnRJZClcbiAgICB9O1xuXG4gICAgc2VsZWN0RGF0ZShkYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlUGFyYW1zOiBkYXRlIH0sICgpID0+IChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdkYXRlUGFyYW1zJywgZGF0ZSlcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIHNlbGVjdFBhcnR5KGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnR5UGFyYW1zOiBlLnRhcmdldC5pZCB9KSwgKCkgPT4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ3BhcnR5UGFyYW1zJywgZS50YXJnZXQuaWQpKTtcbiAgICB9O1xuXG4gICAgZ2VuZXJhdGVQYXJ0aWVzKCkge1xuICAgICAgICBjb25zdCBtYXhQYXJ0eSA9IDEwO1xuICAgICAgICBjb25zdCBwYXJ0aWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heFBhcnR5OyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRpZXMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LXNob3ctb3B0aW9uXCIga2V5PXtpfSBpZD17aX0+e2l9IFBlb3BsZTwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgICAgICBwYXJ0aWVzLnB1c2goXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LXNob3ctb3B0aW9uXCIga2V5PXttYXhQYXJ0eSArIDF9IGlkPSdsYXJnZXInPlxuICAgICAgICAgICAgICAgIExhcmdlciBQYXJ0eVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwYXJ0aWVzO1xuICAgIH07XG5cbiAgICBwYXJ0eVNlbGVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RhbCAhPSAncGFydHktb3B0aW9ucycpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBhcnR5LW9wdGlvbnNcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdFBhcnR5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVBhcnRpZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kYWwgPT09ICdwYXJ0eS1vcHRpb25zJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb3BzLmNsb3NlTW9kYWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvcHMuY2xvc2VNb2RhbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkZWQoKSB7XG4gICAgICAgIGxldCBwYXJ0eURlc2MgPSBgJHt0aGlzLnN0YXRlLnBhcnR5UGFyYW1zfSBQZW9wbGVgO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYXJ0eVBhcmFtcyA9PT0gJ2xhcmdlcicpIHBhcnR5RGVzYyA9ICdMYXJnZXIgUGFydHknO1xuICAgICAgICBsZXQgaGVhZGVyVXJsID0gdGhpcy5wcm9wcy5yZXN0YXVyYW50LnBob3RvVXJsc1swXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LXNob3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtc2hvdy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3ZlcnZpZXc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RoaXMucHJvcHMucmVzdGF1cmFudC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cHJpY2VbdGhpcy5wcm9wcy5yZXN0YXVyYW50LnByaWNlXX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLnJlc3RhdXJhbnQuY3Vpc2luZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntgJHt0aGlzLnByb3BzLnJlc3RhdXJhbnQuY2l0eX0sICR7dGhpcy5wcm9wcy5yZXN0YXVyYW50LnN0YXRlfWB9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdGF1cmFudC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtc2hvdy1zaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5NYWtlIGEgcmVzZXJ2YXRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFydHkgU2l6ZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItcGFydHktc2VsZWN0b3JcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Nb2RhbCgncGFydHktb3B0aW9ucycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFydHlEZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmhhbmRsZUNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wYXJ0eVNlbGVjdG9yKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGF0ZXRpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGF0ZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17bmV3IERhdGUodGhpcy5zdGF0ZS5kYXRlUGFyYW1zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU0gZCwgeXl5eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9udGhCdXR0b25MYWJlbD1cIj5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbkxhYmVsPVwiPFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXRpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e25ldyBEYXRlKHRoaXMuc3RhdGUuZGF0ZVBhcmFtcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWxlY3REYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlbGVjdCBhIHRpbWU6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPFJlc2VydmF0aW9uQnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudD17dGhpcy5wcm9wcy5yZXN0YXVyYW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5wcm9wcy5maWx0ZXJzLmRhdGVQYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VGaWx0ZXI9e3RoaXMucHJvcHMuY2hhbmdlRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN0YXVyYW50ID9cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCgpIDpcbiAgICAgICAgICAgICAgICBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50UGFnZTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hSZXN0YXVyYW50IH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnMnXG5pbXBvcnQgeyBjaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi9hY3Rpb25zL2ZpbHRlcl9hY3Rpb25zJztcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4uL2FjdGlvbnMvbW9kYWxfYWN0aW9ucyc7XG5pbXBvcnQgUmVzdGF1cmFudFBhZ2UgZnJvbSAnLi9yZXN0YXVyYW50X3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIHJlc3RhdXJhbnRJZDogb3duUHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuICAgIHJlc3RhdXJhbnQ6IHN0YXRlLmVudGl0aWVzLnJlc3RhdXJhbnRzW293blByb3BzLm1hdGNoLnBhcmFtcy5pZF0sXG4gICAgZmlsdGVyczogc3RhdGUudWkuZmlsdGVycyxcbiAgICBtb2RhbDogc3RhdGUudWkubW9kYWwsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBmZXRjaFJlc3RhdXJhbnQ6IHJlc3RhdXJhbnRJZCA9PiBkaXNwYXRjaChmZXRjaFJlc3RhdXJhbnQocmVzdGF1cmFudElkKSksXG4gICAgY2hhbmdlRmlsdGVyOiAoZmlsdGVyLCB2YWx1ZSkgPT4gZGlzcGF0Y2goY2hhbmdlRmlsdGVyKGZpbHRlciwgdmFsdWUpKSxcbiAgICBvcGVuTW9kYWw6IG1vZGFsID0+IGRpc3BhdGNoKG9wZW5Nb2RhbChtb2RhbCkpLFxuICAgIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFJlc3RhdXJhbnRQYWdlKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBIYXNoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5cbmNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFydHlQaWNrZXIgZnJvbSAnLi9wYXJ0eV9waWNrZXInO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5maWx0ZXJzKTtcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlID0gdGhpcy5zZWxlY3REYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFyYW1zID0gdGhpcy51cGRhdGVQYXJhbXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICBzZWxlY3REYXRlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVQYXJhbXM6IGRhdGUgfSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZVBhcmFtcyhlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hQYXJhbXM6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUZpbHRlcnModGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcmVzdGF1cmFudHMnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e25ldyBEYXRlKHRoaXMuc3RhdGUuZGF0ZVBhcmFtcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWxlY3REYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NIGQsIHl5eXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vbnRoQnV0dG9uTGFiZWw9XCI+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzTW9udGhCdXR0b25MYWJlbD1cIjxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17bmV3IERhdGUodGhpcy5zdGF0ZS5kYXRlUGFyYW1zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXJ0eVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBtb2RhbD17dGhpcy5wcm9wcy5tb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbD17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWw9e3RoaXMucHJvcHMub3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0eVBhcmFtcz17dGhpcy5wcm9wcy5maWx0ZXJzLnBhcnR5UGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VGaWx0ZXI9e3RoaXMucHJvcHMuY2hhbmdlRmlsdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hQYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVQYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PkxldCdzIGdvPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vYWN0aW9ucy9tb2RhbF9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZUZpbHRlcnMsIGNoYW5nZUZpbHRlciB9IGZyb20gJy4uL2FjdGlvbnMvZmlsdGVyX2FjdGlvbnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5pbXBvcnQgeyBmZXRjaFJlc3RhdXJhbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIG1vZGFsOiBzdGF0ZS51aS5tb2RhbCxcbiAgICBmaWx0ZXJzOiBzdGF0ZS51aS5maWx0ZXJzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb3Blbk1vZGFsOiB0eXBlID0+IGRpc3BhdGNoKG9wZW5Nb2RhbCh0eXBlKSksXG4gICAgY2xvc2VNb2RhbDogKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSxcbiAgICB1cGRhdGVGaWx0ZXJzOiBmaWx0ZXJzID0+IGRpc3BhdGNoKHVwZGF0ZUZpbHRlcnMoZmlsdGVycykpLFxuICAgIGZldGNoUmVzdGF1cmFudHM6IGZpbHRlcnMgPT4gZGlzcGF0Y2goZmV0Y2hSZXN0YXVyYW50cyhmaWx0ZXJzKSksXG4gICAgY2hhbmdlRmlsdGVyOiAoZmlsdGVyLCB2YWx1ZSkgPT4gZGlzcGF0Y2goY2hhbmdlRmlsdGVyKGZpbHRlciwgdmFsdWUpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoU2VhcmNoKTsiLCJcbmltcG9ydCB7IFJFQ0VJVkVfQ1VSUkVOVF9VU0VSLCBMT0dPVVRfQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9zZXNzaW9uX2FjdGlvbnMnO1xuaW1wb3J0IHsgUkVDRUlWRV9SRVNFUlZBVElPTiwgUkVNT1ZFX1JFU0VSVkFUSU9OIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbl9hY3Rpb25zJztcblxuY29uc3QgcmVzZXJ2YXRpb25zUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgUkVDRUlWRV9DVVJSRU5UX1VTRVI6XG4gICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5yZXNlcnZhdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucmVzZXJ2YXRpb25zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIExPR09VVF9DVVJSRU5UX1VTRVI6XG4gICAgICAgIHJldHVybiB7fTtcblxuICAgICAgY2FzZSBSRUNFSVZFX1JFU0VSVkFUSU9OOlxuICAgICAgICBuZXdTdGF0ZVthY3Rpb24ucmVzZXJ2YXRpb24uaWRdID0gYWN0aW9uLnJlc2VydmF0aW9uO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICAgIGNhc2UgUkVNT1ZFX1JFU0VSVkFUSU9OOlxuICAgICAgICBkZWxldGUgbmV3U3RhdGVbYWN0aW9uLnJlc2VydmF0aW9uSWRdO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2VydmF0aW9uc1JlZHVjZXI7IiwiaW1wb3J0IHsgUkVDSUVWRV9SRVNUQVVSQU5ULCBSRUNJRVZFX1JFU1RBVVJBTlRTIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXN0YXVyYW50X2FjdGlvbnMnO1xuXG5jb25zdCByZXN0YXVyYW50c1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgT2JqZWN0LmZyZWV6ZShzdGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVDSUVWRV9SRVNUQVVSQU5UUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucmVzdGF1cmFudHM7XG5cbiAgICAgICAgY2FzZSBSRUNJRVZFX1JFU1RBVVJBTlQ6XG4gICAgICAgICAgICBuZXdTdGF0ZVthY3Rpb24ucmVzdGF1cmFudC5pZF0gPSBhY3Rpb24ucmVzdGF1cmFudDtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXN0YXVyYW50c1JlZHVjZXI7IiwiaW1wb3J0IHsgUkVDRUlWRV9DVVJSRU5UX1VTRVIsIExPR09VVF9DVVJSRU5UX1VTRVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Nlc3Npb25fYWN0aW9ucyc7XG5cbmNvbnN0IHVzZXJzUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUNFSVZFX0NVUlJFTlRfVVNFUjpcbiAgICAgICAgICAgIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLnVzZXIuaWRdID0gYWN0aW9uLnBheWxvYWQudXNlcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcblxuICAgICAgICBjYXNlIExPR09VVF9DVVJSRU5UX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcnNSZWR1Y2VyOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi9lbnRpdGllcy91c2Vyc19yZWR1Y2VyJztcbmltcG9ydCByZXN0YXVyYW50c1JlZHVjZXIgZnJvbSAnLi9lbnRpdGllcy9yZXN0YXVyYW50c19yZWR1Y2VyJztcbmltcG9ydCByZXNlcnZhdGlvbnNSZWR1Y2VyIGZyb20gJy4vZW50aXRpZXMvcmVzZXJ2YXRpb25zX3JlZHVjZXInO1xuXG5jb25zdCBlbnRpdGllc1JlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHVzZXJzOiB1c2Vyc1JlZHVjZXIsXG4gICAgcmVzdGF1cmFudHM6IHJlc3RhdXJhbnRzUmVkdWNlcixcbiAgICByZXNlcnZhdGlvbnM6IHJlc2VydmF0aW9uc1JlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZW50aXRpZXNSZWR1Y2VyOyIsImltcG9ydCB7IFJFQ0VJVkVfUkVTRVJWQVRJT05fRVJST1JTLCBSRUNFSVZFX1JFU0VSVkFUSU9OIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbl9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmNvbnN0IHJlc2VydmF0aW9uRXJyb3JzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgT2JqZWN0LmZyZWV6ZShzdGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFJFQ0VJVkVfUkVTRVJWQVRJT05fRVJST1JTOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmVycm9ycztcblxuICAgICAgY2FzZSBSRUNFSVZFX1JFU0VSVkFUSU9OOlxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25FcnJvcnNSZWR1Y2VyOyIsImltcG9ydCB7IFJFQ0VJVkVfU0VTU0lPTl9FUlJPUlMsIFJFQ0VJVkVfQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9zZXNzaW9uX2FjdGlvbnMnO1xuaW1wb3J0IHsgT1BFTl9NT0RBTCwgQ0xPU0VfTU9EQUwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vZGFsX2FjdGlvbnMnO1xuXG5jb25zdCBzZXNzaW9uRXJyb3JzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUNFSVZFX1NFU1NJT05fRVJST1JTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5lcnJvcnM7XG5cbiAgICAgICAgY2FzZSBSRUNFSVZFX0NVUlJFTlRfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiBbXTtcblxuICAgICAgICBjYXNlIE9QRU5fTU9EQUw6XG4gICAgICAgICAgICByZXR1cm4gW107XG5cbiAgICAgICAgY2FzZSBDTE9TRV9NT0RBTDpcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uRXJyb3JzUmVkdWNlcjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc2Vzc2lvbkVycm9yc1JlZHVjZXIgZnJvbSAnLi9lcnJvcnMvc2Vzc2lvbl9lcnJvcnNfcmVkdWNlcic7XG5pbXBvcnQgcmVzZXJ2YXRpb25FcnJvcnNSZWR1Y2VyIGZyb20gJy4vZXJyb3JzL3Jlc2VydmF0aW9uX2Vycm9yc19yZWR1Y2VyJztcblxuY29uc3QgZXJyb3JzUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgc2Vzc2lvbkVycm9yczogc2Vzc2lvbkVycm9yc1JlZHVjZXIsXG4gICAgcmVzZXJ2YXRpb25FcnJvcnM6IHJlc2VydmF0aW9uRXJyb3JzUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvcnNSZWR1Y2VyOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBzZXNzaW9uUmVkdWNlciBmcm9tICcuL3Nlc3Npb25fcmVkdWNlcic7XG5pbXBvcnQgdWlSZWR1Y2VyIGZyb20gJy4vdWlfcmVkdWNlcic7XG5pbXBvcnQgZW50aXRpZXNSZWR1Y2VyIGZyb20gJy4vZW50aXRpZXNfcmVkdWNlcic7XG5pbXBvcnQgZXJyb3JzUmVkdWNlciBmcm9tICcuL2Vycm9yc19yZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGVudGl0aWVzOiBlbnRpdGllc1JlZHVjZXIsXG4gICAgdWk6IHVpUmVkdWNlcixcbiAgICBlcnJvcnM6IGVycm9yc1JlZHVjZXIsXG4gICAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHsgUkVDRUlWRV9DVVJSRU5UX1VTRVIsIExPR09VVF9DVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25fYWN0aW9ucyc7XG5cbmNvbnN0IF9udWxsU3RhdGUgPSB7XG4gICAgdXNlcklkOiBudWxsLFxuICAgIGZpcnN0TmFtZTogbnVsbCxcbn1cblxuY29uc3Qgc2Vzc2lvblJlZHVjZXIgPSAoc3RhdGUgPSBfbnVsbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUNFSVZFX0NVUlJFTlRfVVNFUjpcbiAgICAgICAgICAgIG5ld1N0YXRlWyd1c2VySWQnXSA9IGFjdGlvbi5wYXlsb2FkLnVzZXIuaWQ7XG4gICAgICAgICAgICBuZXdTdGF0ZVsnZmlyc3ROYW1lJ10gPSBhY3Rpb24ucGF5bG9hZC51c2VyLmZpcnN0TmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlIExPR09VVF9DVVJSRU5UX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4gX251bGxTdGF0ZTtcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25SZWR1Y2VyOyIsImltcG9ydCB7IFVQREFURV9GSUxURVIsIFVQREFURV9GSUxURVJTLCBUT0dHTEVfRklMVEVSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9maWx0ZXJfYWN0aW9ucydcblxuY29uc3QgbmV4dEF2YWlsID0gbmV3IERhdGUoKTtcbm5leHRBdmFpbC5zZXRNaW51dGVzKE1hdGgucm91bmQoKG5leHRBdmFpbC5nZXRNaW51dGVzKCkgKyAzMCkgLyAxNSkgKiAxNSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXRlUGFyYW1zOiBuZXh0QXZhaWwsXG4gICAgcGFydHlQYXJhbXM6IDIsXG4gICAgc2VhcmNoUGFyYW1zOiBcIlwiLFxuICAgIG9jY2FzaW9uOiAnJyxcbiAgICByZXF1ZXN0czogJycsXG59O1xuXG5jb25zdCBmaWx0ZXJzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgT2JqZWN0LmZyZWV6ZShzdGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVVBEQVRFX0ZJTFRFUjpcbiAgICAgICAgICAgIG5ld1N0YXRlW2FjdGlvbi5maWx0ZXJdID0gYWN0aW9uLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuXG4gICAgICAgIGNhc2UgVVBEQVRFX0ZJTFRFUlM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcnM7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyc1JlZHVjZXI7IiwiaW1wb3J0IHsgTE9BRElOR19SRVNUQVVSQU5UUywgUkVDSUVWRV9SRVNUQVVSQU5UUyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVzdGF1cmFudF9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbF9zdGF0ZSA9IHtcbiAgICByZXN0YXVyYW50c0xvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsX3N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcbiAgICBsZXQgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgTE9BRElOR19SRVNUQVVSQU5UUzpcbiAgICAgICAgICAgIG5ld1N0YXRlWydyZXN0YXVyYW50c0xvYWRpbmcnXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICAgICAgY2FzZSBSRUNJRVZFX1JFU1RBVVJBTlRTOlxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxfc3RhdGU7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nUmVkdWNlcjsiLCJpbXBvcnQgeyBPUEVOX01PREFMLCBDTE9TRV9NT0RBTCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbW9kYWxfYWN0aW9ucyc7XG5cbmNvbnN0IF9udWxsU3RhdGUgPSBudWxsO1xuXG5jb25zdCBtb2RhbFJlZHVjZXIgPSAoc3RhdGUgPSBfbnVsbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBPYmplY3QuZnJlZXplKHN0YXRlKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBPUEVOX01PREFMOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5tb2RhbDtcblxuICAgICAgICBjYXNlIENMT1NFX01PREFMOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxSZWR1Y2VyOyIsImltcG9ydCB7IE9QRU5fTU9EQUwgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9tb2RhbF9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICdwcm9maWxlJ1xuXG5jb25zdCBwcm9maWxlVGFiUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgT2JqZWN0LmZyZWV6ZShzdGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgT1BFTl9NT0RBTDpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ubW9kYWw7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVUYWJSZWR1Y2VyOyIsImltcG9ydCB7IFRPR0dMRV9GSUxURVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2ZpbHRlcl9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNpdHlQYXJhbXM6IFtdLFxuICAgIGN1aXNpbmVQYXJhbXM6IFtdLFxuICAgIHByaWNlUGFyYW1zOiBbXVxufTtcblxuY29uc3QgdG9nZ2xlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIE9iamVjdC5mcmVlemUoc3RhdGUpO1xuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRPR0dMRV9GSUxURVI6XG4gICAgICAgICAgICBsZXQgdmFsSWR4ID0gbmV3U3RhdGVbYWN0aW9uLmZpbHRlcl0uaW5kZXhPZihhY3Rpb24udmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbElkeCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGVbYWN0aW9uLmZpbHRlcl0uc3BsaWNlKHZhbElkeCwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlW2FjdGlvbi5maWx0ZXJdLnB1c2goYWN0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXNSZWR1Y2VyOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBtb2RhbFJlZHVjZXIgZnJvbSAnLi91aS9tb2RhbF9yZWR1Y2VyJztcbmltcG9ydCBmaWx0ZXJzUmVkdWNlciBmcm9tICcuL3VpL2ZpbHRlcnNfcmVkdWNlcic7XG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi91aS9sb2FkaW5nX3JlZHVjZXInO1xuaW1wb3J0IHByb2ZpbGVUYWJSZWR1Y2VyIGZyb20gJy4vdWkvcHJvZmlsZV90YWJfcmVkdWNlcic7XG5pbXBvcnQgdG9nZ2xlc1JlZHVjZXIgZnJvbSAnLi91aS90b2dnbGVzX3JlZHVjZXInO1xuXG5jb25zdCB1aVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIG1vZGFsOiBtb2RhbFJlZHVjZXIsXG4gICAgZmlsdGVyczogZmlsdGVyc1JlZHVjZXIsXG4gICAgdG9nZ2xlczogdG9nZ2xlc1JlZHVjZXIsXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXG4gICAgcHJvZmlsZVRhYjogcHJvZmlsZVRhYlJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdWlSZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvcm9vdF9yZWR1Y2VyXCI7XG5cbmNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rXTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBjb25zdCB7IGxvZ2dlciB9ID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTtcbiAgbWlkZGxld2FyZXMucHVzaChsb2dnZXIpO1xufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSA9IHt9KSA9PlxuICBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmludFRpbWUodGltZSkge1xuICAgIGxldCBtaW51dGUgPSB0aW1lLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgaG91ciA9IHRpbWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgYW1wbSA9ICdBTSdcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgYW1wbSA9ICdQTSc7XG4gICAgfSBlbHNlIGlmIChob3VyID09PSAwKSB7XG4gICAgICAgIGhvdXIgPSAxMjtcbiAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICBob3VyIC09IDEyO1xuICAgICAgICBhbXBtID0gXCJQTVwiO1xuICAgIH07XG4gICAgaWYgKG1pbnV0ZSA8IDEwKSBtaW51dGUgPSBgMCR7bWludXRlfWA7XG4gICAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfSAke2FtcG19YFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGF0ZSh0aW1lKSB7XG4gICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXTtcbiAgICBjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICBsZXQgZGF5ID0gZGF5c1t0aW1lLmdldERheSgpXTtcbiAgICBsZXQgbW9udGggPSBtb250aHNbdGltZS5nZXRNb250aCgpXVxuICAgIGxldCBkYXRlID0gdGltZS5nZXREYXRlKClcbiAgICByZXR1cm4gYCR7ZGF5fSwgJHttb250aH0gJHtkYXRlfWBcbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlUmVzZXJ2YXRpb24gPSByZXNlcnZhdGlvbiA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL2FwaS9yZXNlcnZhdGlvbnNgLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogeyByZXNlcnZhdGlvbiB9XG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXNlcnZhdGlvbiA9IHJlc2VydmF0aW9uID0+IChcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAvYXBpL3Jlc2VydmF0aW9ucy8ke3Jlc2VydmF0aW9uLmlkfWAsXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgZGF0YTogeyByZXNlcnZhdGlvbiB9XG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXNlcnZhdGlvbiA9IHJlc2VydmF0aW9uSWQgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYC9hcGkvcmVzZXJ2YXRpb25zLyR7cmVzZXJ2YXRpb25JZH1gLFxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSlcbik7IiwiZXhwb3J0IGNvbnN0IGZldGNoUmVzdGF1cmFudHMgPSBmaWx0ZXJzID0+IChcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYXBpL3Jlc3RhdXJhbnRzJyxcbiAgICAgICAgZGF0YTogeyBmaWx0ZXJzIH1cbiAgICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmVzdGF1cmFudCA9IHJlc3RhdXJhbnRJZCA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL2FwaS9yZXN0YXVyYW50cy8ke3Jlc3RhdXJhbnRJZH1gXG4gICAgfSlcbik7IiwiZXhwb3J0IGNvbnN0IHNpZ251cCA9IHVzZXIgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYC9hcGkvdXNlcnNgLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogeyB1c2VyIH1cbiAgICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gdXNlciA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL2FwaS9zZXNzaW9uYCxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHsgdXNlciB9XG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL2FwaS9zZXNzaW9uYCxcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pXG4pOyIsImV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hcGkvdXNlcnMnXG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXIgPSB1c2VySWQgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYC9hcGkvdXNlcnMvJHt1c2VySWR9YFxuICAgIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYC9hcGkvdXNlcnMvJHt1c2VyLmlkfWAsXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgZGF0YTogeyB1c2VyIH1cbiAgICB9KVxuKTsiXSwic291cmNlUm9vdCI6IiJ9