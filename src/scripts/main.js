'use strict';

const populationsElements = [...document.querySelectorAll('.population')];

const populationsNumbers = populationsElements.map(el => {
  const populationString = el.innerHTML;
  return +populationString.replace(/,/g, '');
});

const totalValue = populationsNumbers.reduce((acc, curr) => acc + curr, 0);

const averageValue = totalValue / populationsNumbers.length;

const totalElement = document.querySelector('.total-population');
totalElement.innerText = totalValue.toLocaleString('en-US');

const averageElement = document.querySelector('.average-population');
averageElement.innerText = averageValue.toLocaleString('en-US');
