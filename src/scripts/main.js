'use strict';

const population = document.querySelectorAll('.population');
const numberOfcountries = document.querySelectorAll('.list__item');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

let sumAll = 0;

for (const people of population) {
  const string = people.innerText;
  const number = +string.replace(/,/g, '');

  sumAll += number;
}

const average = sumAll / numberOfcountries.length;

totalElement.textContent = sumAll.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
