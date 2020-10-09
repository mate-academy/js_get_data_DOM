'use strict';

const population = document.getElementsByClassName('population');

const allCountry = [...population].map(item => {
  return item.innerText.split(',').join('');
});
const totalPopulation = allCountry.reduce((acc, cur) => acc + +cur, 0);
const aweragePopulation = totalPopulation / allCountry.length;
const selectorTotal = document.querySelector('.total-population');
const selectoraverage = document.querySelector('.average-population');

selectorTotal.innerHTML = totalPopulation.toLocaleString();
selectoraverage.innerHTML = aweragePopulation.toLocaleString();
