'use strict';

const population = document.querySelectorAll('.population');
const dataPopulation = [];

for (let i = 0; i < population.length; i++) {
  const getNumber = population[i].innerText.split(',').join('');

  dataPopulation.push(+getNumber);
}

const totalPeople = dataPopulation.reduce((sum, x) => sum + x, 0);
const average = Math.round(totalPeople / dataPopulation.length);

function separate(num) {
  const numToArrReverse = num.toString().split('').reverse();

  const updatedArray = numToArrReverse.map((el, i, arr) => {
    if (i % 3 === 0 && i !== 0) {
      return el + ',';
    } else {
      return el;
    }
  });

  return updatedArray.reverse().join('');
}

document.querySelector('.total-population').innerText = separate(totalPeople);
document.querySelector('.average-population').innerText = separate(average);
