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
import TripPresenter from './presenter/trip-presenter';


const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

renderElement(siteMenuInfo, new MenuInfo(), renderPosition.AFTERBEGIN);
renderElement(siteMenu, new Menu(), renderPosition.BEFOREEND);
renderElement(siteFilters, new Filters(), renderPosition.BEFOREEND);
renderElement(siteEvents, new Sort(), renderPosition.BEFOREEND);

const tripPresentor = new TripPresenter(siteEvents);
tripPresentor.init()



