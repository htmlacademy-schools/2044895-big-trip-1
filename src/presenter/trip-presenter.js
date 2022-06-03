import {renderElement, renderPosition} from '../utils/render';
import {generateRoutePoint} from '../mock/generate-route-point';
import ListEmptyMessage from '../view/list-empty';
import RoutePointLists from '../view/route-point-lists';
import RoutePointPresenter from './route-point-presenter';

export default class TripPresenter {
  #tripContainer = null
  #routePoints = [];
  #routePointList = new RoutePointLists();
  #routePointPresentor = new Map();

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = () => {
    this.#renderRoutePoints();
  }

  #handleModeChange = () => {
    this.#routePointPresentor.forEach((presenter) => presenter.resetView());
  }

  #handleRoutePointChange = (updatedRoutePoint) => {
    this.#routePoints = this.updateItem(this.#routePoints, updatedRoutePoint);
    this.#routePointPresentor.get(updatedRoutePoint.id).init(updatedRoutePoint);
  }

  #clearRoutePointList = () => {
    this.#routePointPresentor.forEach((presenter) => presenter.destroy());
    this.#routePointPresentor.clear();
  }

  updateItem = (list, updatedItem) => {
    const index = list.findIndex((item) => item.id === updatedItem.id);

    if (index === -1) {
      return list;
    }

    return [
      ...list.slice(0, index),
      updatedItem,
      ...list.slice(index + 1)
    ];
  }

  #renderListEmptyMessage = () => {
    renderElement(this.#routePointList, new ListEmptyMessage(), renderPosition.BEFOREEND);
  }

  #renderRoutePointList = () => {
    renderElement(this.#tripContainer, this.#routePointList, renderPosition.BEFOREEND);
  }

  #renderRoutePoint = (routePoint) => {
    const routePointPresenter = new RoutePointPresenter(this.#routePointList, this.#handleRoutePointChange, this.#handleModeChange);
    routePointPresenter.init(routePoint);
    this.#routePointPresentor.set(routePoint.id, routePointPresenter);
    routePointPresenter.render();
  }

  #renderRoutePoints = () => {
    if (this.#routePoints.length === 0) {
      //this.#renderListEmptyMessage();
      //return;
    }

    this.#renderRoutePointList();

    for (let i = 0; i < 5; i++) {
      this.#routePoints.push(generateRoutePoint());
      this.#renderRoutePoint(this.#routePoints[i]);
    }
  }
}
