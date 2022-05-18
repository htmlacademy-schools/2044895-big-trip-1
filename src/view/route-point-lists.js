import AbstractView from './abstract-view';

export const createRoutePointListTemplate = () => (
  '<ul class="trip-events__list"></ul>');


export default class RoutePointLists extends AbstractView {
  get template() {
    return createRoutePointListTemplate();
  }
}
