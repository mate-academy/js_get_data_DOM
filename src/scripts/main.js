'use strict';

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const population = document.querySelectorAll('.population');
const arrPopulation = [...population];

const total = arrPopulation.reduce((sum, chap) => {
  const value = chap.textContent.replace(/,/g, ''); // прибрали коми
  return sum + Number(value);
}, 0);

const average = total / arrPopulation.length;

document.querySelector('.total-population').innerHTML = numberWithCommas(total);
document.querySelector('.average-population').innerHTML = numberWithCommas(average);
