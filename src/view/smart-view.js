import AbstractView from './abstract-view';

export default class SmartView extends AbstractView {
  restoreHandlers = () => {
    throw new Error('Abstract method is not inplemented: restoreHandlers');
  }

  updateElement = () => {
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.element;
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  updateData = (update, justUpdatingData = false) => {
    if (!update) {
      return;
    }
    this._data = {...this._data, ...update };

    if (justUpdatingData) {
      return;
    }
    this.updateElement();
  }
}
