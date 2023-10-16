'use strict';

// write your code here
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const elements = [...document.querySelectorAll('.population')];

const numbers = [];

elements.forEach(element => {
  numbers.push(parseInt(element.innerHTML.replace(/,/g, '')));
});

const total = numbers.reduce((sum, number) => sum + number, 0);

const average = total / numbers.length;

document.querySelector('.total-population').innerHTML = formatNumber(total);
document.querySelector('.average-population').innerHTML = formatNumber(average);
