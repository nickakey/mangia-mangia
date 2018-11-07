import uniqueRandomArray from 'unique-random-array';
import mangiaFoods from './mangia-mangia.json';

const getRandomItem = uniqueRandomArray(mangiaFoods);

module.exports = {
  all: mangiaFoods,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
