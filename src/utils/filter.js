import {FilterType} from './consts';

export const filter = {
  [FilterType.EVERYTHING]: (routePoints) => routePoints.filter((point) => point),
  [FilterType.FUTURE]: (routePoints) => routePoints.filter((point) => point.date.startDay > 20),
  [FilterType.PAST]: (routePoints) => routePoints.filter((point) => point.date.startDay < 20),
};
