import AbstractObservable from './abstract-observer';

export default class PointsModel extends AbstractObservable {
  #routePoints = []

  set routePoints(routePoints) {
    this.#routePoints = [...routePoints];
  }

  get routePoints() {
    return this.#routePoints;
  }

  updateRoutePoint = (updateType, update) => {
    const index = this.#routePoints.findIndex((item) => item.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexcisting routePoint');
    }

    this.#routePoints = [
      ...this.#routePoints.slice(0, index),
      update,
      ...this.routePoints.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addRoutePoint = (updatedType, update) => {
    this.#routePoints = [
      ...update,
      ...this.#routePoints
    ];
  }

  deleteRoutePoint = (updateType, update) => {
    const index = this.#routePoints.findIndex((routePoint) => routePoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexcisting routePoint');
    }

    this.#routePoints = [
      ...this.#routePoints.slice(0, index),
      ...this.#routePoints.slice(index+1)
    ];
    this._notify(updateType, update);
  }
}
