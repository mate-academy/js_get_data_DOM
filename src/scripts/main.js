'use strict';

// write your code here

const population = [...document.querySelectorAll('.population')];
let total = 0;

population.forEach((item) => {
  const country = item.textContent;

  const temtArray = country.split(',');
  const result = arrayToString(temtArray);

  total += parseInt(result);
});

function arrayToString(array) {
  let result = '';

  array.forEach((element) => {
    result += element;
  });

  return result;
}

const average = total / population.length;

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = totalFormatted;
document.querySelector('.average-population').innerHTML = averageFormatted;
