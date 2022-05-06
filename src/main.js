import { renderTemplate, renderPosition } from '../public/render.js';
import Menu from './view/menu';
import MenuInfo from './view/menu-info';
import Filters from './view/filters.js';
import Sort from './view/sort';
import RoutePointLists from './view/route-point-lists';
import RoutePoint from './view/route-point.js';
import { generateRoutePoint } from './mock/generate-route-point';
import EditForm from './view/edit-form';


const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');
renderTemplate(siteMenuInfo, new MenuInfo().element, renderPosition.AFTERBEGIN);
renderTemplate(siteMenu, new Menu().element, renderPosition.BEFOREEND);
renderTemplate(siteFilters, new Filters().element, renderPosition.BEFOREEND);
renderTemplate(siteEvents, new Sort().element, renderPosition.BEFOREEND);
renderTemplate(siteEvents, new RoutePointLists().element, renderPosition.BEFOREEND);
debugger;
const siteEventList = document.querySelector('.trip-events__list');
renderTemplate(siteEventList, new EditForm(generateRoutePoint()).element,renderPosition.BEFOREEND);
const routPoints = [];
for (let i = 0; i < 5; i++) {
  routPoints.push(generateRoutePoint());
  renderTemplate(siteEventList, new RoutePoint(routPoints[i]).element,renderPosition.BEFOREEND);
}
