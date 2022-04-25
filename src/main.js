import { renderTemplate, renderPosition } from '../public/render.js';
import { createMenuTemplate } from './view/menu';
import { createMenuInfoTemplate} from './view/menu-info';
import { createFiltersTemplate } from './view/filters.js';
import { createSortTemplate} from './view/sort';
import { createRoutePointListTemplate} from './view/route-point-lists';
import { createRoutePointTemplate } from './view/route-point.js';


const siteMenu = document.querySelector('.trip-controls__navigation');
const siteMenuInfo = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');


renderTemplate(siteMenuInfo, createMenuInfoTemplate(), renderPosition.AFTERBEGIN);
renderTemplate(siteMenu, createMenuTemplate(), renderPosition.BEFOREEND);
renderTemplate(siteFilters, createFiltersTemplate(), renderPosition.BEFOREEND);
renderTemplate(siteEvents, createSortTemplate(), renderPosition.BEFOREEND);
renderTemplate(siteEvents, createRoutePointListTemplate(), renderPosition.BEFOREEND);

