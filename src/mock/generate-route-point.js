import {nanoid} from 'nanoid';

const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const dates = [
  { startFull: new Date('2019-03-18T09:15'), endFull: new Date('2019-03-18T10:00'), duration: '45M'},
  { startFull: new Date('2019-03-18T12:30'), endFull: new Date('2019-03-18T14:15'), duration: '1H 45M'},
  { startFull: new Date('2019-03-18T15:30'), endFull: new Date('2019-03-18T15:50'), duration: '20M'},
  { startFull: new Date('2019-03-18T18:00'), endFull: new Date('2019-03-18T19:20'), duration: '1H 20'},
  { startFull: new Date('2019-03-18T22:05'), endFull: new Date('2019-03-18T22:40'), duration: '35M'},
  { startFull: new Date('2019-03-18T23:00'), endFull: new Date('2019-03-18T23:40'), duration: '40М'}];
const generateDate = () => {
  const date = dates[getRandomInt(0, dates.length - 1)];
  date.start = date.startFull.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  date.end = date.endFull.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  return date;
};

const offerTypes = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const generateType = () => (offerTypes[getRandomInt(0, offerTypes.length - 1)]);

const offers = ['Order Uber', 'Add luggage', 'Add breakfast', 'Rent a car'];
const generateOfferName = () => (offers[getRandomInt(0, offers.length - 1)]);

const cities = ['Tokyo', 'Paris', 'Vladivostok', 'Rome', 'London', 'San Francisco', 'Los Angeles', 'Sydney', 'Bruges'];
const generateCity = () => (cities[getRandomInt(0, cities.length - 1)]);

const descriptions = new Map ([
  ['Tokyo', 'Tokyo is the capital and largest city of Japan. Anime, seafood, Easten culture and architecture here'],
  ['Paris', 'Paris is the capital and France. Cheese, Vine and Love here'],
  ['Vladivostok', 'Vladivostok is a port city, the administrative, cultural and economic centre of the Primorye Territory and the Far Eastern Federal District.'],
  ['Rome', 'Rome is the capital and Italy. Colosseum here'],
  ['London', 'London is the capital and largest city of England and the United Kingdom. Big Ben, tea and Queen here'],
  ['San Francisco', 'San Francisco is a city in the U.S. state of California. It is famous for the Golden Gate Bridge.'],
  ['Los Angeles', 'The city of Los Angeles is the most populous city in California. Located on a broad basin in Southern California, the city is surrounded by vast mountain ranges, valleys, forests, beautiful beaches along the Pacific Ocean, and nearby desert'],
  ['Sydney', 'Sydney, city, capital of the state of New South Wales, Australia. Located on Australia\'s southeastern coast, Sydney is the country\'s largest city and, with its magnificent harbour and strategic position, is one of the most important ports in the South Pacific.'],
  ['Bruges', 'Could we reserve judgement on Bruges until we’ve seen the fricking place']]);
export const generateDescription = (city) => {
  if (!descriptions.has(city)) {
    return `${city} is great city, probably...`;
  }
  return descriptions.get(city);
};


export const generateRoutePoint = function () {
  const newType = generateType();
  const newCity = generateCity();
  return {
    city: newCity,
    offers: {
      type: newType,
      name: generateOfferName(),
      cost: getRandomInt(0, 100),
    },
    id: nanoid(),
    type: newType,
    date: generateDate(),
    isFavorite: false,
    description: generateDescription(newCity),
    pictureSrc: `img/icons/${newType.toLowerCase()}.png`
  };
};
