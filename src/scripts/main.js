'use strict';

const items = document.querySelectorAll('.population');
const populationTotal = document.querySelector('.total-population');
const populationAverage = document.querySelector('.average-population');

populationTotal.textContent
  = calculateSum(items).toLocaleString('en-US');

populationAverage.textContent
  = (calculateSum(items) / items.length).toLocaleString('en-US');

function calculateSum(list) {
  const formattedItems = [...list].map(node => {
    return +node.textContent.split(',').join('');
  });

  return formattedItems.reduce((sum, num) => sum + num);
}
