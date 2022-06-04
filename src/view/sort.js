import AbstractView from './abstract-view';
import {sortTypes} from '../utils/consts';

export const createSortTemplate= () => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day"
             checked>
        <label class="trip-sort__btn" htmlFor="sort-day" data-sort-type="${sortTypes.DAY}">Day</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-event" disabled>
        <label class="trip-sort__btn" htmlFor="sort-event" data-sort-type="${sortTypes.EVENT}">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-time">
        <label class="trip-sort__btn" htmlFor="sort-time" data-sort-type="${sortTypes.TIME}">Time</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-price">
        <label class="trip-sort__btn" htmlFor="sort-price" data-sort-type="${sortTypes.PRICE}">Price</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-offer" disabled>
        <label class="trip-sort__btn" htmlFor="sort-offer" data-sort-type="${sortTypes.OFFERS}">Offers</label>
    </div>
  </form>`);

export default class Sort extends AbstractView {
  get template() {
    return createSortTemplate();
  }

  #sortTypeChangedHandler = (evt) => {
    if (evt.target.tagName === 'DIV') {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangedHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('click', this.#sortTypeChangedHandler);
  }
}
