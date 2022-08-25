'use strict';

const arrSelectors = [...document.querySelectorAll('.population')];
const populations = arrSelectors.map(el => (
  +el.outerText
    .split(',')
    .join('')));

const totalPopulations = populations.reduce((prev, current) => prev + current);
const averagePopulations = totalPopulations / populations.length;

const resultTotal = document.getElementsByClassName('total-population');
const resultAverage = document.getElementsByClassName('average-population');

resultTotal[0].outerText = totalPopulations
  .toLocaleString('de-DE')
  .split('.')
  .join(',');

resultAverage[0].outerText = averagePopulations
  .toLocaleString('de-DE')
  .split('.')
  .join(',');
