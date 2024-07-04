'use strict';

function getValue(item) {
  return +item.split(',').join('');
}

const population = [
  ...document.documentElement.getElementsByClassName('population'),
];

const TotalPopulation = population.reduce(
  (acc, item) => acc + getValue(item.innerText),
  0,
);

const Total = [
  ...document.documentElement.getElementsByClassName('total-population'),
];

Total[0].replaceWith(TotalPopulation.toLocaleString('en-US'));

const average = [
  ...document.documentElement.getElementsByClassName('average-population'),
];

average[0].replaceWith(
  (TotalPopulation / population.length).toLocaleString('en-US'),
);
