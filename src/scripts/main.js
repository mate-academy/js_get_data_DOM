'use strict';

const items = document.querySelectorAll('.population');
const texts = [...items].map(
  item => parseFloat(item.innerText.replace(/,/g, ''))
);

const totalValue = texts.reduce((sum, item) => sum + item, 0);
const averageValue = totalValue / texts.length;
const formattedTotal = totalValue.toLocaleString('en-US');
const formattedAverage = averageValue.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML = formattedAverage;
document.querySelector('.total-population').innerHTML = formattedTotal;
