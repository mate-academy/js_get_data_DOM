'use strict';

const populationElements = document.querySelectorAll('.population');

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

let total = 0;

populationElements.forEach((element) => {
  const rawText = element.textContent;
  const cleanText = rawText.replaceAll(',', '');
  const populationNumber = Number(cleanText);

  total += populationNumber;
});

const count = populationElements.length;
const average = total / count;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

totalElement.textContent = formattedTotal;
averageElement.textContent = formattedAverage;
