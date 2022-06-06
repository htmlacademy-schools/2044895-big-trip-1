import RoutePoint from '../view/route-point';
import EditForm from '../view/edit-form';
import {remove, renderElement, RenderPosition, replace} from '../utils/render';
import {UpdateType, UserAction} from '../utils/consts';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class RoutePointPresenter {
  #routePointContainer = null;
  #routePoint = null;
  #routePointComponent =  null;
  #editFormComponent = null;
  #mode = Mode.DEFAULT;
  #changeData = null;
  #changeMode = null;

  constructor(routePointContainer, changeData, changeMode) {
    this.#routePointContainer = routePointContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (routePoint) => {
    this.#routePoint = routePoint;

    const prevPointComponent = this.#routePointComponent;

    this.#routePointComponent = new RoutePoint(routePoint);
    this.#editFormComponent = new EditForm(routePoint);
    this.#setHandlers();

    if (prevPointComponent === null) {
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#routePointComponent, prevPointComponent);
    }

    remove(prevPointComponent);
  }


  renderRoutePoint = () => {
    renderElement(this.#routePointContainer, this.#routePointComponent, RenderPosition.BEFOREEND);
  }

  updateRenederedPoint = () => {
    replace(this.#routePointComponent, this.#routePointComponent);
  }

  #setHandlers = () => {
    this.#routePointComponent.setEditClickHandeler(() => {
      this.replacePointToEditForm();
      document.addEventListener('keydown', this.#handleOnEscKeyDown);
    });

    this.#editFormComponent.setDeleteClickHandeler((routePoint) => {
      this.#changeData(
        UserAction.DELETE_ROUTEPOINT,
        UpdateType.MINOR,
        routePoint,
      );
    });

    this.#editFormComponent.setEditClickHandeler(() => {
      this.#editFormComponent.reset(this.#routePoint);
      this.replaceEditFormToPoint();
      document.removeEventListener('keydown', this.#handleOnEscKeyDown);
    });

    this.#editFormComponent.setFormSubmitHandeler(this.#handleFormSubmit);

    this.#routePointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
  }

  #handleOnEscKeyDown = (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      this.#editFormComponent.reset(this.#routePoint);
      this.replaceEditFormToPoint();
      document.removeEventListener('keydown', this.#handleOnEscKeyDown);
    }
  };

  #handleFavoriteClick = () => {
    this.#changeData(
      UserAction.UPDATE_ROUTEPOINT,
      UpdateType.PATCH,
      {...this.#routePoint, isFavorite: !this.#routePoint.isFavorite});
  }

  #handleFormSubmit = (routePoint) => {
    this.replaceEditFormToPoint();
    this.#changeData(
      UserAction.UPDATE_ROUTEPOINT,
      UpdateType.PATCH,
      {...routePoint});
    document.removeEventListener('keydown', this.#handleOnEscKeyDown);
  }

  replacePointToEditForm() {
    replace(this.#editFormComponent.element, this.#routePointComponent.element);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  }

  replaceEditFormToPoint() {
    replace(this.#routePointComponent.element, this.#editFormComponent.element);
    this.#mode = Mode.DEFAULT;
  }

  resetView = () => {
    if (this.#mode !== 'DEFAULT') {
      this.replaceEditFormToPoint();
    }
  }

  destroy = () => {
    this.#routePointComponent.element.remove();
    this.#editFormComponent.element.remove();
  }
}
