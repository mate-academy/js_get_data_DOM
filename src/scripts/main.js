'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationsArray = [...populationSpans].map(
  element => parseInt(element.textContent.replaceAll(',', ''))
);

const totalNumber = populationsArray.reduce((a, b) => a + b, 0);
const averageNumber = totalNumber / populationsArray.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalNumber.toLocaleString();
average.textContent = averageNumber.toLocaleString();
