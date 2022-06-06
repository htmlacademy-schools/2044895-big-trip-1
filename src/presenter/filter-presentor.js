import Filters from '../view/filters.js';
import {UpdateType, FilterType} from '../utils/consts.js';
import {remove, renderElement, RenderPosition, replace} from '../utils/render';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #routePointsModel = null;

  #filterComponent = null;

  constructor(filterContainer, filterModel, routePointsModel) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#routePointsModel = routePointsModel;
  }

  get filters() {
    return ['everything', 'future', 'past'];
  }

  init = () => {
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new Filters(this.filters, this.#filterModel.filter);
    this.#filterComponent.setFilterTypeChangeHandler(this.#handleFilterTypeChange);

    this.#routePointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    if (prevFilterComponent === null) {
      renderElement(this.#filterContainer, this.#filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  }

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  }

  destroy = () => {
    remove(this.#filterComponent);
    this.#filterComponent = null;

    this.#routePointsModel.removeObserver(this.#handleModelEvent);
    this.#filterModel.removeObserver(this.#handleModelEvent);

    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
  }
}
