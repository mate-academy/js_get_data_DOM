'use strict';

const elements = document.querySelectorAll('.population');

const arrElements = [...elements].map(element =>
  Number(element.innerHTML.replaceAll(',', '')));

const total = arrElements.reduce((sum, x) => sum + x, 0);

const everage = total / arrElements.length;

const totalPopulation = document.querySelector('.total-population');
const totalResult = total.toLocaleString('en-US');

totalPopulation.textContent = totalResult;

const everagePopulation = document.querySelector('span.average-population');
const everageResult = everage.toLocaleString('en-US');

everagePopulation.textContent = everageResult;
