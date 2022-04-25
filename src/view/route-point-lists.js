export const createRoutePointListTemplate = () => (`
  <ul className="trip-events__list">
    <li className="trip-events__item">
      <div className="event">
        <time className="event__date" dateTime="2019-03-18">MAR 18</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 className="event__title">Taxi Amsterdam</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime="2019-03-18T10:30">10:30</time>
            &mdash;
            <time className="event__end-time" dateTime="2019-03-18T11:00">11:00</time>
          </p>
          <p className="event__duration">30M</p>
        </div>
        <p className="event__price">
          &euro;&nbsp;<span className="event__price-value">20</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          <li className="event__offer">
            <span className="event__offer-title">Order Uber</span>
            &plus;&euro;&nbsp;
            <span className="event__offer-price">20</span>
          </li>
        </ul>
        <button className="event__favorite-btn event__favorite-btn--active" type="button">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path
              d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>

    <li className="trip-events__item">
      <div className="event">
        <time className="event__date" dateTime="2019-03-18">MAR 18</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
        </div>
        <h3 className="event__title">Flight Chamonix</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime="2019-03-18T12:25">12:25</time>
            &mdash;
            <time className="event__end-time" dateTime="2019-03-18T13:35">13:35</time>
          </p>
          <p className="event__duration">01H 10M</p>
        </div>
        <p className="event__price">
          &euro;&nbsp;<span className="event__price-value">160</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          <li className="event__offer">
            <span className="event__offer-title">Add luggage</span>
            &plus;&euro;&nbsp;
            <span className="event__offer-price">50</span>
          </li>
          <li className="event__offer">
            <span className="event__offer-title">Switch to comfort</span>
            &plus;&euro;&nbsp;
            <span className="event__offer-price">80</span>
          </li>
        </ul>
        <button className="event__favorite-btn" type="button">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path
              d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>

    <li className="trip-events__item">
      <div className="event">
        <time className="event__date" dateTime="2019-03-18">MAR 18</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
        </div>
        <h3 className="event__title">Drive Chamonix</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime="2019-03-18T14:30">14:30</time>
            &mdash;
            <time className="event__end-time" dateTime="2019-03-18T16:05">16:05</time>
          </p>
          <p className="event__duration">01H 35M</p>
        </div>
        <p className="event__price">
          &euro;&nbsp;<span className="event__price-value">160</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          <li className="event__offer">
            <span className="event__offer-title">Rent a car</span>
            &plus;&euro;&nbsp;
            <span className="event__offer-price">200</span>
          </li>
        </ul>
        <button className="event__favorite-btn  event__favorite-btn--active" type="button">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path
              d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  </ul>`);
