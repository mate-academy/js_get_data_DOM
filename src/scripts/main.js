'use strict';

const populationElement = document.querySelectorAll('.population');

const populationValue = [];

// arr = populationsValue.map(el => el.textContent);

for (let i = 0; i < populationElement.length; i++) {
  populationValue.push(+populationElement[i].textContent.split(',').join(''));
}

const correctTotalValue = populationValue.reduce((sum, n) => sum + n, 0);

document.querySelector('.total-population').textContent
= correctTotalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.average-population').textContent
= (correctTotalValue / populationValue.length).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
