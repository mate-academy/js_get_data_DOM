'use strict';

// write your code here
const countryPopulation = document.querySelectorAll('.population');

let totalCountPopulation = 0;

for (const element of countryPopulation) {
  const pupulation = +element.textContent.replaceAll(',', '');

  totalCountPopulation += pupulation;
}

const everage = totalCountPopulation / countryPopulation.length;
const formatedTotalCountPopulation =
  totalCountPopulation.toLocaleString('en-US');
const formatedEverage = everage.toLocaleString('en-US');
const countSpan = document.createElement('span');

countSpan.innerHTML = `${formatedTotalCountPopulation} peoples.`;
countSpan.className = 'total-population';
document.querySelector('.total-population').replaceWith(countSpan);

const everageSpan = document.createElement('span');

everageSpan.innerHTML = `${formatedEverage} peoples.`;
everageSpan.className = 'average-population';
document.querySelector('.average-population').replaceWith(everageSpan);
