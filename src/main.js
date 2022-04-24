import { renderTemplate, RenderPosition } from '../public/render.js'
import { createFiltersTemplate } from './view/filters.js';
import { createRoutePointTemplate } from './view/route-point.js'
import { createHeaderTemplate } from './view/header.js'

var page = document.querySelector('.page-header'); // Пытаюсь проверить подключен ли main.js вообще
page.remove()


const siteMainElement = document.querySelector('.page-main');
const bodyContainer = siteEventsElement.querySelector('.page-body__container');
const siteEventsElement = document.querySelector('.trip-events');


const siteEventsListElement = siteEventsElement.querySelector('.trip-events__list');
const siteFilters = document.querySelector('.trip-controls__filters');
const siteMenu = document.querySelector('.trip-main');

for (let i = 0; i < 3; i++) {
    renderItem(bodyContainer, createRoutePointTemplate(), importPositions.BEFOREEND);
  }

renderTemplate(siteMainElement, createFiltersTemplate(), RenderPosition.BEFOREEND)
renderTemplate(siteEventsElement, createFiltersTemplate(), RenderPosition.BEFOREEND)
renderTemplate(siteEventsElement, createRoutePointTemplate(), RenderPosition.BEFOREEND);
