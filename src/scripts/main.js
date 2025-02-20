'use strict';

// write your code here
const body = document.body;

const population = body.querySelectorAll('.population');
let total = 0;

for (let i = 0; i < population.length; i++) {
  const formattedNumber = parseInt(population[i].innerHTML.replace(/[,]/g, ''));

  total += formattedNumber;
}

const average = Math.ceil(total / population.length);

document.getElementById('totalPopulation').innerHTML = numberWithCommas(total);

document.getElementById('averagePopulation').innerHTML =
  numberWithCommas(average);

function numberWithCommas(x) {
  let num = x;

  num = num.toString();

  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }

  return num;
}
