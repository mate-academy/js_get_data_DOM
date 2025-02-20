'use strict';

function thousandsSeparator(num) {
  return num.toLocaleString('en-Us');
}

const allPopulationsCollection
  = document.querySelectorAll('span[class="population"]');

const allPopulationsNumners = [...allPopulationsCollection]
  .map(item => +item.textContent.split(',').join(''));

const totalSum = allPopulationsNumners.reduce((a, b) => a + b);
const averageAmount = totalSum / allPopulationsNumners.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = thousandsSeparator(totalSum);
averageElement.textContent = thousandsSeparator(averageAmount);
