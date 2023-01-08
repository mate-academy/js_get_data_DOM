'use strict';

const spansArray = [...document.querySelectorAll('.population')];
const getNumber = (span) => (
  Number(span.innerHTML.replaceAll(',', '')));
const totalPopulation = spansArray.reduce((acc, span) => (
  acc + getNumber(span)), 0);
const averagePopulation = totalPopulation / spansArray.length;
const totalPopulationSpan = document
  .getElementsByClassName('total-population')[0];
const averagePopulationSpan = document
  .getElementsByClassName('average-population')[0];

totalPopulationSpan.innerHTML = totalPopulation.toLocaleString('en-US');

averagePopulationSpan.innerHTML = averagePopulation
  .toLocaleString('en-US');
