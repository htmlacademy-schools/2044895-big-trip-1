/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/render.js":
/*!**************************!*\
  !*** ./public/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPosition": () => (/* binding */ renderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const renderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

/***/ }),

/***/ "./src/mock/generate-route-point.js":
/*!******************************************!*\
  !*** ./src/mock/generate-route-point.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRoutePoint": () => (/* binding */ generateRoutePoint)
/* harmony export */ });
const generateRoutePoint = function () {
  const newType = generateType();
  return {
    city: generateCity(),
    offers: {
      type: newType,
      name: generateOfferName(),
      cost: getRandomInt(0, 100)
    },
    type: newType,
    description: generateDescription(),
    pictureSrc: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};

const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];

const generateDescription = () => descriptions[getRandomInt(0, descriptions.length - 1)];

const pointTypes = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const generateType = () => pointTypes[getRandomInt(0, pointTypes.length - 1)];

const offers = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];

const generateOfferName = () => offers[getRandomInt(0, offers.length - 1)];

const cities = ['Tokyo', 'Paris', 'Vladivostok', 'Rome', 'London', 'San Francisco', 'Los Angeles', 'Sydney', 'Bruges'];

const generateCity = () => cities[getRandomInt(0, cities.length - 1)];

/***/ }),

/***/ "./src/view/edit-form.js":
/*!*******************************!*\
  !*** ./src/view/edit-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditForm": () => (/* binding */ createEditForm)
/* harmony export */ });
const createEditForm = routePoint => {
  const {
    type,
    city
  } = routePoint;
  return `
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" htmlFor="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train"
                         htmlFor="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive"
                         htmlFor="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="flight" checked>
                  <label class="event__type-label  event__type-label--flight"
                         htmlFor="event-type-flight-1">${type}</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in"
                         htmlFor="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing"
                         htmlFor="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant"
                         htmlFor="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" htmlFor="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text"
               name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="${city}"></option>
          </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" htmlFor="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
               value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" htmlFor="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
                 value="18/03/19 13:35">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" htmlFor="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"
               value="160">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox"
                   name="event-offer-luggage" checked>
              <label class="event__offer-label" htmlFor="event-offer-luggage-1">
                <span class="event__offer-title">Add luggage</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">50</span>
              </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox"
                   name="event-offer-comfort" checked>
              <label class="event__offer-label" htmlFor="event-offer-comfort-1">
                <span class="event__offer-title">Switch to comfort</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">80</span>
              </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox"
                   name="event-offer-meal">
              <label class="event__offer-label" htmlFor="event-offer-meal-1">
                <span class="event__offer-title">Add meal</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">15</span>
              </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox"
                   name="event-offer-seats">
              <label class="event__offer-label" htmlFor="event-offer-seats-1">
                <span class="event__offer-title">Choose seats</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">5</span>
              </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox"
                   name="event-offer-train">
              <label class="event__offer-label" htmlFor="event-offer-train-1">
                <span class="event__offer-title">Travel by train</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">40</span>
              </label>
          </div>
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${city}-Mont-Blanc (usually shortened to ${city}) is a resort
          area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the
          Alps, it's renowned for its skiing.</p>
      </section>
    </section>
  </form>`;
};

/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFiltersTemplate": () => (/* binding */ createFiltersTemplate)
/* harmony export */ });
const createFiltersTemplate = () => `
<div class="trip-controls__filters">
<h2 class="visually-hidden">Filter events</h2>
<form class="trip-filters" action="#" method="get">
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" disabled>
    <label class="trip-filters__filter-label" for="filter-future">Future</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" disabled>
    <label class="trip-filters__filter-label" for="filter-past">Past</label>
  </div>

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>
</div>`;

/***/ }),

/***/ "./src/view/menu-info.js":
/*!*******************************!*\
  !*** ./src/view/menu-info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuInfoTemplate": () => (/* binding */ createMenuInfoTemplate)
/* harmony export */ });
const createMenuInfoTemplate = () => `
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;

/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuTemplate": () => (/* binding */ createMenuTemplate)
/* harmony export */ });
const createMenuTemplate = () => `
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;

/***/ }),

/***/ "./src/view/route-point-lists.js":
/*!***************************************!*\
  !*** ./src/view/route-point-lists.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRoutePointListTemplate": () => (/* binding */ createRoutePointListTemplate)
/* harmony export */ });
const createRoutePointListTemplate = () => `
  <ul class="trip-events__list"></ul>`;

/***/ }),

/***/ "./src/view/route-point.js":
/*!*********************************!*\
  !*** ./src/view/route-point.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRoutePointTemplate": () => (/* binding */ createRoutePointTemplate)
/* harmony export */ });
const createRoutePointTemplate = routePoint => {
  const {
    type,
    city,
    offers,
    pictureSrc
  } = routePoint;
  return `
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" dateTime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${pictureSrc}" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${city}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" dateTime="2019-03-18T10:30">10:30</time>
          &mdash;
          <time class="event__end-time" dateTime="2019-03-18T11:00">11:00</time>
        </p>
        <p class="event__duration">30M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${offers.cost}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">${offers.Name}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offers.cost}}</span>
        </li>
      </ul>
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSortTemplate": () => (/* binding */ createSortTemplate)
/* harmony export */ });
const createSortTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day"
             checked>
        <label class="trip-sort__btn" htmlFor="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-event" disabled>
        <label class="trip-sort__btn" htmlFor="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-time">
        <label class="trip-sort__btn" htmlFor="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-price">
        <label class="trip-sort__btn" htmlFor="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-offer" disabled>
        <label class="trip-sort__btn" htmlFor="sort-offer">Offers</label>
    </div>
  </form>`;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/render.js */ "./public/render.js");
/* harmony import */ var _view_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu */ "./src/view/menu.js");
/* harmony import */ var _view_menu_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/menu-info */ "./src/view/menu-info.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_route_point_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/route-point-lists */ "./src/view/route-point-lists.js");
/* harmony import */ var _view_route_point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/route-point.js */ "./src/view/route-point.js");
/* harmony import */ var _mock_generate_route_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/generate-route-point */ "./src/mock/generate-route-point.js");
/* harmony import */ var _view_edit_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/edit-form */ "./src/view/edit-form.js");









const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteMenuInfo, (0,_view_menu_info__WEBPACK_IMPORTED_MODULE_2__.createMenuInfoTemplate)(), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.AFTERBEGIN);
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteMenu, (0,_view_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuTemplate)(), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteFilters, (0,_view_filters_js__WEBPACK_IMPORTED_MODULE_3__.createFiltersTemplate)(), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteEvents, (0,_view_sort__WEBPACK_IMPORTED_MODULE_4__.createSortTemplate)(), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteEvents, (0,_view_route_point_lists__WEBPACK_IMPORTED_MODULE_5__.createRoutePointListTemplate)(), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
const siteEventList = document.querySelector('.trip-events__list');
(0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteEventList, (0,_view_edit_form__WEBPACK_IMPORTED_MODULE_8__.createEditForm)((0,_mock_generate_route_point__WEBPACK_IMPORTED_MODULE_7__.generateRoutePoint)()), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
const routPoints = [];

for (let i = 0; i < 5; i++) {
  routPoints.push((0,_mock_generate_route_point__WEBPACK_IMPORTED_MODULE_7__.generateRoutePoint)());
  (0,_public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(siteEventList, (0,_view_route_point_js__WEBPACK_IMPORTED_MODULE_6__.createRoutePointTemplate)(routPoints[i]), _public_render_js__WEBPACK_IMPORTED_MODULE_0__.renderPosition.BEFOREEND);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map