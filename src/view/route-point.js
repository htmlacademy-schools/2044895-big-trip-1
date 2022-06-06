import AbstractView from './abstract-view';

export const createRoutePointTemplate = (routePoint) => {
  const { type, date, city, offers, isFavorite, pictureSrc } = routePoint;

  const isFavoriteClass = isFavorite ? ' event__favorite-btn--active' : '';
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" dateTime="2019-03-18">MAR ${date.startFull.getDate()}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${pictureSrc}" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${city}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" dateTime=${date.startFull}>${date.start}</time>
          &mdash;
          <time class="event__end-time" dateTime=${date.endFull}>${date.end}</time>
        </p>
        <p class="event__duration">${date.duration}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${offers.cost}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">${offers.name}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offers.cost}</span>
        </li>
      </ul>
      <button class="event__favorite-btn ${isFavoriteClass}" type="button">
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

export default class RoutePoint extends AbstractView {
  #routePoint = null;

  constructor(routePoint) {
    super();
    this.#routePoint = routePoint;
  }

  get template() {
    return createRoutePointTemplate(this.#routePoint);
  }

  setEditClickHandeler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }
}

