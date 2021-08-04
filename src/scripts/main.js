'use strict';

const population = document.querySelectorAll('.population');
const arrPopulation = [...population].map(el => {
  return +el.textContent.replace(/,/gm, '');
});
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPopulation = arrPopulation.reduce(reducer);
const avaragePopulation = totalPopulation / arrPopulation.length;

document.querySelector('.total-population')
  .textContent = new Intl.NumberFormat('en-EN').format(totalPopulation);

document.querySelector('.average-population')
  .textContent = new Intl.NumberFormat('en-EN').format(avaragePopulation);
