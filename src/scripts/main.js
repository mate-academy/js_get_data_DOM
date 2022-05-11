/* eslint-disable no-shadow */
'use strict';

const population = document.querySelectorAll('.population');

function calc(population) {
  let result = 0;

  for (const people of population) {
    const peopleNumber = +people.innerHTML.split(',').join('');

    result += peopleNumber;
  }

  return {
    total() {
      return result.toLocaleString();
    },
    average() {
      return (result / population.length).toLocaleString();
    },
  };
}

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = calc(population).total();
average.innerHTML = calc(population).average();
