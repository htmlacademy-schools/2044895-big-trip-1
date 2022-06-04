import RoutePoint from '../view/route-point';
import EditForm from '../view/edit-form';
import {renderElement, renderPosition} from '../utils/render';

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
    this.#routePointComponent = new RoutePoint(routePoint);
    this.#editFormComponent = new EditForm(routePoint);
    this.#setHandlers();
  }

  render = () => {
    renderElement(this.#routePointContainer, this.#routePointComponent, renderPosition.BEFOREEND);
  }

  replacePointToEditForm() {
    this.#routePointContainer.element.replaceChild(this.#editFormComponent.element, this.#routePointComponent.element);
  }

  replaceEditFormToPoint() {
    this.#routePointContainer.element.replaceChild(this.#routePointComponent.element, this.#editFormComponent.element);
    this.#mode = Mode.DEFAULT;
  }

  #setHandlers = () => {
    const onEscKeyDown = (evt) =>
    {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        evt.preventDefault();
        this.replaceEditFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    this.#routePointComponent.setEditClickHandeler(() => {
      this.replacePointToEditForm();
      document.addEventListener('keydown', onEscKeyDown);
      this.#changeMode();
      this.#mode = Mode.EDITING;
    });

    this.#editFormComponent.setEditClickHandeler(() => {
      this.replaceEditFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    this.#editFormComponent.setFormSubmitHandeler(() => {
      this.replaceEditFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    this.#routePointComponent.setFavoriteClickHandler(() => {
      this.handleFavoriteClick();
    });
  }

  handleFavoriteClick = () => {
    this.#routePoint.isFavorite = this.#routePoint.isFavorite;
    this.#changeData(this.#routePoint);
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
