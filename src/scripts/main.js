'use strict';

function getValue(item) {
  return +item.split(',').join('');
}

const population = [
  ...document.documentElement.getElementsByClassName('population'),
];

const totalPopulation = population.reduce(
  (acc, item) => acc + getValue(item.innerText),
  0,
);

const total = [
  ...document.documentElement.getElementsByClassName('total-population'),
];

total[0].replaceWith(totalPopulation.toLocaleString('en-US'));

const average = [
  ...document.documentElement.getElementsByClassName('average-population'),
];

average[0].replaceWith(
  (totalPopulation / population.length).toLocaleString('en-US'),
);
