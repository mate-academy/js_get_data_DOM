'use strict';

// write your code here
const countriesPopulation = document.querySelectorAll('.population');
let total = [...countriesPopulation]
  .map(item => +item.textContent.replace(/,/g, ''))
  .reduce((a, b) => a + b);

let average = total / countriesPopulation.length;

total = total.toLocaleString();
average = average.toLocaleString();

document.querySelector('.total').textContent = `Total: ${total}`;
document.querySelector('.average').textContent = `Average: ${average}`;
