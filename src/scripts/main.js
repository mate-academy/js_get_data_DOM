'use strict';

const populations = document.getElementsByClassName('population');
const result = Array.from(populations).map( item => {
   return Number(item.textContent.replaceAll(',', ''));
});

const total = result.reduce((acc, currentItem) => acc + currentItem, 0);
const average = total / result.length;


document.querySelector('.total-population').textContent = total.toLocaleString('en-US');
document.querySelector('.average-population').textContent = average.toLocaleString('en-US', { maximumFractionDigits: 2 });
