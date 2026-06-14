'use strict';

const populationElements = document.querySelectorAll('.population');

let total = 0;

populationElements.forEach((element) => {
  const text = element.textContent;
  const number = Number(text.split(',').join(''));

  total += number;
});

const average = total / populationElements.length;

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

const totalElement = document.querySelector('.total-population');

totalElement.textContent = formattedTotal;

const averageElement = document.querySelector('.average-population');

averageElement.textContent = formattedAverage;
