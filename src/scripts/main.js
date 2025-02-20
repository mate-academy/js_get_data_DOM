'use strict';

const elements = [...document.getElementsByClassName('population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
const newArray = [];
let totalPopulation = 0;
let average = 0;

elements.forEach((element) => {
  const number = element.textContent.trim();

  newArray.push(Number(number.replace(/,/g, '')));
});

totalPopulation = newArray.reduce((total, number) => total + number, 0);
average = Math.round(totalPopulation / newArray.length);

totalElement.textContent = totalPopulation.toLocaleString();
averageElement.textContent = average.toLocaleString();
