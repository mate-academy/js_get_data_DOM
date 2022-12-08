'use strict';

const populationData = document.querySelectorAll('.population');

const newArr = [...populationData].map(
  el => Number(el.textContent.split(',').join('')));

const sumAll = newArr.reduce((prev, current) => prev + current);

const average = Math.trunc(sumAll / newArr.length);

const totalForReplace = document.querySelector('.total');

totalForReplace.textContent = `Total: ${sumAll.toLocaleString(`en-US`)}`;

const averageForReplace = document.querySelector('.average');

averageForReplace.textContent = `Average: ${average.toLocaleString(`en-Us`)}`;
