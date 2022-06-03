import AbstractView from './abstract-view';

export const createlistEmptyMessageTemplate = () => (
  '<p class="trip-events__msg">Click New Event to create your first point</p>');

export default class ListEmptyMessage extends AbstractView{
  get template() {
    return createlistEmptyMessageTemplate();
  }
}
