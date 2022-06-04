import {renderElement, renderPosition} from '../utils/render';
import {generateRoutePoint} from '../mock/generate-route-point';
import ListEmptyMessage from '../view/list-empty';
import RoutePointLists from '../view/route-point-lists';
import RoutePointPresenter from './route-point-presenter';
import {sortTypes} from '../utils/consts';
import Sort from '../view/sort';
import {sortPrice, sortTime} from '../utils/sorts';

export default class TripPresenter {
  #tripContainer = null;
  #routePoints = [];
  #routePointList = new RoutePointLists();
  #routePointPresentor = new Map();

  #sortComponent = new Sort();
  #currentSortType = sortTypes.DEFAULT;
  #sourcedRoutePoints = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = () => {
    this.#renderSort();
    this.#renderRoutePointList();
    this.#generateRoutePoints();
    this.#sourcedRoutePoints = this.#routePoints;
    this.#renderRoutePoints();
    this.#setListeners();
  }

  #generateRoutePoints = () => {
    for (let i = 0; i < 5; i++) {
      this.#routePoints.push(generateRoutePoint());
    }
  }

  #sortRoutePoints = (sortType) => {
    this.#currentSortType = sortType;
    switch (sortType) {
      case 'DAY':
        this.#routePoints.sort();
        break;
      case 'EVENT':
        this.#routePoints.sort();
        break;
      case 'TIME':
        this.#routePoints.sort(sortTime);
        break;
      case 'PRICE':
        this.#routePoints.sort(sortPrice);
        break;
      case 'OFFERS':
        this.#routePoints.sort();
        break;
      default :
        this.#routePoints = [...this.#sourcedRoutePoints];
    }
  }

  #setListeners = () => {
    this.#sortComponent.setSortTypeChangedHandler(this.#handleSortTypeChanged);
  }

  #handleSortTypeChanged = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortRoutePoints(sortType);
    this.#clearRoutePointList();
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

  #renderSort = () => {
    renderElement(this.#tripContainer, this.#sortComponent, renderPosition.BEFOREEND);
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
      this.#renderListEmptyMessage();
      return;
    }
    for (let i = 0; i < this.#routePoints.length; i++) {
      this.#renderRoutePoint(this.#routePoints[i]);
    }
  }
}
