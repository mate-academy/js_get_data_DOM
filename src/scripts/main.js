'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [];

populationElements.forEach((span) => {
  const textValue = span.textContent;
  const numberValue = Number(textValue.replace(/,/g, ''));

  if (!isNaN(numberValue)) {
    populations.push(numberValue);
  }
});

const total = populations.reduce((sum, value) => sum + value, 0);

const average = total / populations.length;

const formattedTotal = total.toLocaleString();

const formattedAverage = Math.round(average.toLocaleString());

const totalSpan = document.querySelector('.total-population');

const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = formattedTotal;

averageSpan.textContent = formattedAverage;
