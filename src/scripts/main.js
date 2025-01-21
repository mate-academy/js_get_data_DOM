'use strict';
const COUNTRIES_BY_POPULATION = document.getElementsByClassName('population');
const TOTAL_POPULATION = document.querySelector(".total-population")
const AVERAGE_POPULATION = document.querySelector('.average-population');
let total = 0;
const formattedNumber = num => num.toLocaleString("en-US");

for (let index = 0; index < COUNTRIES_BY_POPULATION.length; index++) {
  const numberWithCommas = COUNTRIES_BY_POPULATION[index].innerHTML;
  const numberWithoutCommas = numberWithCommas.replace(/,/g, "");

  total += Number(numberWithoutCommas);
}

TOTAL_POPULATION.innerHTML = formattedNumber(total);
AVERAGE_POPULATION.innerHTML = formattedNumber(Math.ceil(total / COUNTRIES_BY_POPULATION.length));
