import {remove, renderElement, RenderPosition} from '../utils/render';
import ListEmptyMessage from '../view/list-empty';
import RoutePointLists from '../view/route-point-lists';
import RoutePointPresenter from './route-point-presenter';
import {SortType, UpdateType, UserAction} from '../utils/consts';
import Sort from '../view/sort';
import {sortDay, sortPrice, sortTime} from '../utils/sorts';
import {filter} from '../utils/filter';

export default class TripPresenter {
  #tripContainer = null;
  #routePointList = new RoutePointLists();
  #routePointsModel = null;
  #filterModel = null;
  #routePointPresentor = new Map();

  #currentSortType = SortType.DAY;
  #sortComponent = new Sort(this.#currentSortType);


  constructor(tripContainer, routePointsModel, filterModel) {
    this.#tripContainer = tripContainer;
    this.#routePointsModel = routePointsModel;
    this.#filterModel = filterModel;
  }

  get routePoints() {
    const filterType = this.#filterModel.filter;
    const routePoints = this.#routePointsModel.routePoints;
    const filtredRoutePoints = filter[filterType](routePoints);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filtredRoutePoints.sort(sortDay);
      case SortType.TIME:
        return filtredRoutePoints.sort(sortTime);
      case SortType.PRICE:
        return filtredRoutePoints.sort(sortPrice);
    }
    return filtredRoutePoints;
  }

  init = () => {
    this.#routePointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
    this.#renderTrip();
  }

  #setHandlers = () => {
    this.#sortComponent.setSortTypeChangedHandler(this.#handleSortTypeChange);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_ROUTEPOINT:
        this.#routePointsModel.updateRoutePoint(updateType, update);
        break;
      case UserAction.ADD_ROUTEPOINT:
        this.#routePointsModel.addRoutePoint(updateType, update);
        break;
      case UserAction.DELETE_ROUTEPOINT:
        this.#routePointsModel.deleteRoutePoint(updateType, update);
        break;
    }
  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#routePointPresentor.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
    }
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearRoutePointList();
    this.#renderRoutePoints();
  }

  #handleModeChange = () => {
    this.#routePointPresentor.forEach((presenter) => presenter.resetView());
  }

  #handleRoutePointChange = (updatedRoutePoint) => {
    this.#routePointPresentor.get(updatedRoutePoint.id).init(updatedRoutePoint);
  }

  #clearRoutePointList = () => {
    this.#routePointPresentor.forEach((presenter) => presenter.destroy());
    this.#routePointPresentor.clear();
  }

  #renderSort = () => {
    renderElement(this.#tripContainer, this.#sortComponent, RenderPosition.BEFOREEND);
  }

  #renderListEmptyMessage = () => {
    renderElement(this.#routePointList, new ListEmptyMessage(), RenderPosition.BEFOREEND);
  }

  #renderRoutePointList = () => {
    renderElement(this.#tripContainer, this.#routePointList, RenderPosition.BEFOREEND);
  }

  #renderRoutePoint = (routePoint) => {
    const routePointPresenter = new RoutePointPresenter(this.#routePointList, this.#handleViewAction, this.#handleModeChange);
    routePointPresenter.init(routePoint);
    this.#routePointPresentor.set(routePoint.id, routePointPresenter);
    routePointPresenter.renderRoutePoint();
  }

  #renderRoutePoints = () => {
    const routePointsCount = this.routePoints.length;
    if ( routePointsCount === 0) {
      //this.#renderListEmptyMessage();
      return;
    }
    for (let i = 0; i < routePointsCount; i++) {
      this.#renderRoutePoint(this.routePoints[i]);
    }
  }

  #renderTrip = () => {
    this.#renderSort();
    this.#renderRoutePointList();
    this.#renderRoutePoints();
    this.#setHandlers();
  }

  #clearTrip = (resetSortType) => {
    this.#routePointPresentor.forEach((presentor) => presentor.destroy());
    this.#routePointPresentor.clear();

    remove(this.#sortComponent);
    remove(this.#routePointList);

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  }

  destroy = () => {
    this.#clearTrip(true);

    this.#routePointsModel.removeObserver(this.#handleModelEvent);
    this.#filterModel.removeObserver(this.#handleModelEvent);
  }
}
