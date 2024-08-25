'use strict';

const populationList = document.querySelectorAll('.population');
const populationNumbers = [];

populationList.forEach((element) => {
  const populationNumber = Number(element.textContent.replace(/\D/g, ''));

  populationNumbers.push(populationNumber);
});

const sum = populationNumbers.reduce((a, b) => a + b);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = sum.toLocaleString('en-US');

average.textContent = (sum / populationNumbers.length).toLocaleString('en-US');
