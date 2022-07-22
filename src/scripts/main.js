'use strict';

const populationRef = document.querySelectorAll('.population');
const totalRef = document.querySelector('.total-population');
const averageRef = document.querySelector('.average-population');

const numPopulation = [...populationRef]
  .map(item => Number(item.textContent.split(',').join('')));

const sum = numPopulation.reduce((acc, item) => acc + item, 0);

const average = sum / numPopulation.length;

const sumFormat = new Intl.NumberFormat('ja-JP').format(sum);
const averageFormat = new Intl.NumberFormat('ja-JP').format(average);

totalRef.textContent = sumFormat;
averageRef.textContent = averageFormat;
