'use strict';

// write your code here
const populationData = document.querySelectorAll('.population');

const populationText = [];

populationData.forEach((e) => {
  populationText.push(parseInt(e.innerHTML.replace(/,/g, ''), 10));
});

let total = 0;

for (let i = 0; i < populationText.length; i++) {
  total += populationText[i];
}

const average = total / populationText.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString('En-US');
averageSpan.textContent = average.toLocaleString('En-US');
