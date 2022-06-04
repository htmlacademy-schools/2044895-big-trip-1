import {nanoid} from 'nanoid';

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


const times = [
  { startFull: new Date('2019-03-18T09:15'), endFull: new Date('2019-03-18T10:00'), duration: '45M'},
  { startFull: new Date('2019-03-18T12:30'), endFull: new Date('2019-03-18T14:15'), duration: '1H 45M'},
  { startFull: new Date('2019-03-18T15:30'), endFull: new Date('2019-03-18T15:50'), duration: '20M'},
  { startFull: new Date('2019-03-18T18:00'), endFull: new Date('2019-03-18T19:20'), duration: '1H 20'},
  { startFull: new Date('2019-03-18T22:05'), endFull: new Date('2019-03-18T22:40'), duration: '35M'},
  { startFull: new Date('2019-03-18T23:00'), endFull: new Date('2019-03-18T23:40'), duration: '40М'}];
const generateTime = () => {
  const time = times[getRandomInt(0, times.length - 1)];
  time.start = time.startFull.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  time.end = time.endFull.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  return time;
};

const offerTypes = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const generateType = () => (offerTypes[getRandomInt(0, offerTypes.length - 1)]);

const offers = ['Order Uber', 'Add luggage', 'Add breakfast', 'Rent a car'];
const generateOfferName = () => (offers[getRandomInt(0, offers.length - 1)]);

const cities = ['Tokyo', 'Paris', 'Vladivostok', 'Rome', 'London', 'San Francisco', 'Los Angeles', 'Sydney', 'Bruges'];
const generateCity = () => (cities[getRandomInt(0, cities.length - 1)]);

export const generateRoutePoint = function () {
  const newType = generateType();
  return {
    city: generateCity(),
    offers: {
      type: newType,
      name: generateOfferName(),
      cost: getRandomInt(0, 100),
    },
    id: nanoid(),
    type: newType,
    time: generateTime(),
    isFavorite: false,
    description: generateDescription(),
    pictureSrc: `https://picsum.photos/248/152?r=${Math.random()}`
  };
};
