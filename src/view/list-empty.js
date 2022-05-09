import { createElement } from '../../public/render.js';

export const createlistEmptyMessageTemplate = () => (
  '<p class="trip-events__msg">Click New Event to create your first point</p>');

export default class ListEmptyMessage {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createlistEmptyMessageTemplate();
  }

  removeElement() {
    this.element = null; }
}
