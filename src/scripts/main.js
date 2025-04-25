'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arr = Array.from(population).map((elem) => {
  return Number(elem.textContent.split(',').join(''));
});

const totalPeople = arr.reduce((acc, val) => acc + val, 0);
const averagePeople = Math.round(totalPeople / arr.length);

totalPopulation.innerHTML = totalPeople.toLocaleString('en-US');
averagePopulation.innerHTML = averagePeople.toLocaleString('en-US');
