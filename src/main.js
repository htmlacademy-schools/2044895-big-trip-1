import { renderTemplate, renderPosition, renderElement } from './utils/render.js';
import Menu from './view/menu';
import MenuInfo from './view/menu-info';
import Filters from './view/filters.js';
import Sort from './view/sort';
import RoutePointLists from './view/route-point-lists';
import RoutePoint from './view/route-point.js';
import { generateRoutePoint } from './mock/generate-route-point';
import EditForm from './view/edit-form';
import ListEmptyMessage from './view/list-empty';


const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

renderElement(siteMenuInfo, new MenuInfo(), renderPosition.AFTERBEGIN);
renderElement(siteMenu, new Menu(), renderPosition.BEFOREEND);
renderElement(siteFilters, new Filters(), renderPosition.BEFOREEND);
renderElement(siteEvents, new Sort(), renderPosition.BEFOREEND);

const routePointList = new RoutePointLists();
renderElement(siteEvents, routePointList, renderPosition.BEFOREEND);

function renderRoutePoint(routePointListElement, routePoint) {
  const routePointComponent =  new RoutePoint(routePoint);
  const editFormComponent = new EditForm(routePoint);

  const replacePointToEditForm = () => (
    routePointListElement.element.replaceChild(editFormComponent.element, routePointComponent.element)
  );

  const replaceEditFormToPoint = () => (
    routePointListElement.element.replaceChild(routePointComponent.element, editFormComponent.element)
  );

  const onEscKeyDown = (evt) =>
  {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      replaceEditFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };


  routePointComponent.setEditClickHandeler(() => {
    replacePointToEditForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editFormComponent.setEditClickHandeler(() => {
    replaceEditFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  editFormComponent.setEditSubmitHandeler(() => {
    replaceEditFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });


  renderElement(routePointListElement, routePointComponent, renderPosition.BEFOREEND);
}


const routePoints = [];
for (let i = 0; i < 5; i++) {
  routePoints.push(generateRoutePoint());
  renderRoutePoint(routePointList, routePoints[i]);
}

if (routePoints.length === 0) {
  renderElement(routePointList, new ListEmptyMessage(), renderPosition.BEFOREEND)
}
