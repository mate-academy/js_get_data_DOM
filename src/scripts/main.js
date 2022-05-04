'use strict';

const select = document.body.querySelectorAll('.population');

const listPopulation = [...select].reduce((acc, val) => {
  const num = +val.textContent.replaceAll(',', '');

  return acc + num;
}, 0);

const averagePopulation = listPopulation / select.length;

document.querySelector('.total-population').innerHTML = listPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
