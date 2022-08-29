'use strict';

const populationArray = [];

document.querySelectorAll('.population')
  .forEach(
    (people) => populationArray
      .push(parseInt(people.innerHTML.split(',').join('')))
  );

const totalPopulation = populationArray
  .reduce((a, b) => a + b, 0);

document
  .querySelector('.average-population')
  .innerHTML = (totalPopulation / populationArray.length)
    .toLocaleString();

document
  .querySelector('.total-population')
  .innerHTML = (totalPopulation)
    .toLocaleString();
