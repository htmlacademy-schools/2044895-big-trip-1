import { createElement } from '../utils/render.js';

export default class AbstractView {
  #element = null;
  _callback = {};

  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t initialisate AbstractView');
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error('Abstract method is not inplemented: get template');
  }

  removeElement() {
    this.element = null;
  }
}
