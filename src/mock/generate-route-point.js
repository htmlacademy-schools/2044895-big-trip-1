export const generateRoutePoint = function () {
  const newType = generateType();
  return {
    city: generateCity(),
    offers: {
      type: newType,
      name: generateOfferName(),
      cost: getRandomInt(0, 100),
    },
    type: newType,
    description: generateDescription(),
    pictureSrc: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};

const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'];
const generateDescription = () => (descriptions[getRandomInt(0, descriptions.length - 1)]);


const pointTypes = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const generateType = () => (pointTypes[getRandomInt(0, pointTypes.length - 1)]);

const offers = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];
const generateOfferName = () => (offers[getRandomInt(0, offers.length - 1)]);

const cities = ['Tokyo', 'Paris', 'Vladivostok', 'Rome', 'London', 'San Francisco', 'Los Angeles', 'Sydney', 'Bruges'];
const generateCity = () => (cities[getRandomInt(0, cities.length - 1)]);
