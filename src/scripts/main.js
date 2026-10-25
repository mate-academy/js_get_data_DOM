'use strict';

// write your code here
const allPopulatinTag = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...allPopulatinTag].reduce((sum, item) => {
  return sum + Number(item.textContent.replaceAll(',', ''));
}, 0);

const medium = total / allPopulatinTag.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = medium.toLocaleString('en-US');
