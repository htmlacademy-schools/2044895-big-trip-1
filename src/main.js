import { RenderPosition, renderElement } from './utils/render.js';
import Menu from './view/menu';
import MenuInfo from './view/menu-info';
import Filters from './view/filters.js';
import TripPresenter from './presenter/trip-presenter';
import PointsModel from './model/points-model';
import FilterModel from './model/filters-model';
import {generateRoutePoint} from './mock/generate-route-point';
import FilterPresenter from './presenter/filter-presentor';


const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');
const MenuView = new Menu();

renderElement(siteMenuInfo, new MenuInfo(), RenderPosition.AFTERBEGIN);
renderElement(siteMenu, MenuView, RenderPosition.BEFOREEND);

const routePoints = Array.from({length: 5}, generateRoutePoint);

const routePointsModel = new PointsModel();
const filterModel = new FilterModel();
routePointsModel.routePoints = routePoints;

const filterPresentor = new FilterPresenter(siteFilters, filterModel, routePointsModel);
filterPresentor.init();
const tripPresentor = new TripPresenter(siteEvents, routePointsModel, filterModel);
tripPresentor.init();

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.ADD_NEW_ROUTEPOINT:
      break;
    case MenuItem.TABLE:
      break;
    case MenuItem.STATS:
      break;
  }
}
