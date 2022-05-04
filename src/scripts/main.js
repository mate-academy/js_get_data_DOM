'use strict';

const select = document.body.querySelectorAll('.population');

const listPopulation = [...select].reduce((acc, val) => {
  const num = +val.textContent.replaceAll(',', '');

  acc.push(num);

  return acc;
}, []);

const totalPopulation = listPopulation.reduce((acc, val) => acc + val);

const averagePopulation = totalPopulation / listPopulation.length;

document.querySelector('.total-population').innerHTML = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
