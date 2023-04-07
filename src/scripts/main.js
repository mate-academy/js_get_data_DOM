'use strict';

const [...spanPop] = document.querySelectorAll('.population');

const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');

const arrNumbers = spanPop.map(people =>
  Number(people.innerText.split(',').join(''))
);

const totalPeople = arrNumbers.reduce((a, b) => a + b);

const average = totalPeople / spanPop.length;

totalText.innerText = totalPeople.toLocaleString();

averageText.innerText = average.toLocaleString();
