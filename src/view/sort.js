import {SortType} from '../utils/consts';
import SmartView from './smart-view';

export const createSortTemplate= (sortType) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day"
             ${sortType === SortType.DAY ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-day" data-sort-type="${SortType.DAY}">Day</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event" data-sort-type="${SortType.EVENT}">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-time" ${sortType === SortType.TIME ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-time" data-sort-type="${SortType.TIME}">Time</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-price" ${sortType === SortType.PRICE ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-price" data-sort-type="${SortType.PRICE}">Price</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
             value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer" data-sort-type="${SortType.OFFERS}">Offers</label>
    </div>
  </form>`);

export default class Sort extends SmartView {

  constructor(sortType) {
    super();
    this._data = {sortType: sortType};
  }

  restoreHandlers = () => {
    this.setSortTypeChangedHandler(this._callback.sortTypeChange);
  }

  get template() {
    return createSortTemplate(this._data.sortType);
  }

  #sortTypeChangedHandler = (evt) => {
    if (evt.target.tagName === 'DIV') {
      return;
    }
    evt.preventDefault();
    this.updateData({sortType: evt.target.dataset.sortType});
    this._callback.sortTypeChange(this._data.sortType);
  }

  setSortTypeChangedHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('click', this.#sortTypeChangedHandler);
  }
}
