import { createElement } from '../../public/render.js';

export const createRoutePointListTemplate = () => (
  '<ul class="trip-events__list"></ul>');


export default class RoutePointLists {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createRoutePointListTemplate();
  }

  removeElement() {
    this.element = null; }
}
