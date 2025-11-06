'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = [];

populationElements.forEach((element) => {
  const text = element.textContent;
  const numberWithoutCommas = text.replace(/,/g, '');
  const number = Number(numberWithoutCommas);

  populations.push(number);
});

const total = populations.reduce((sum, current) => sum + current, 0);
const average = total / populations.length;

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = formattedTotal;
averageElement.textContent = formattedAverage;
