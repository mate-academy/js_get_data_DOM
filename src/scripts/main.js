'use strict';

const countryPopulation = document.getElementsByClassName('population');
const countryPopulationArr = [];

for (const el of countryPopulation) {
  const tmp = parseInt(el.innerText.split(',').join(''));

  if (!isNaN(tmp)) {
    countryPopulationArr.push(tmp);
  }
}

const total = countryPopulationArr.reduce((el, sum) => el + sum, 0);
const average = total / countryPopulationArr.length;

document.getElementsByClassName('total-population')[0].innerHTML
= addComma(total);

document.getElementsByClassName('average-population')[0].innerHTML
= addComma(average);

function addComma(val) {
  const tmp = val.toString();
  const thousands = /\B(?=(\d{3})+(?!\d))/g;

  return tmp.replace(thousands, ',');
}
