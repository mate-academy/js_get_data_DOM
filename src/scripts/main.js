'use strict';

const [...population] = document.querySelectorAll('.population');
const textTotal = document.querySelector('.total-population');
const textAverage = document.querySelector('.average-population');

const result = function(arr) {
  let sum = 0;

  arr.forEach(country => {
    const populationPerCountry = country.innerHTML.replace(/,/g, '');

    sum += parseInt(populationPerCountry);
  });

  return sum;
};

const total = result(population);
const average = total / population.length;

textTotal.innerHTML = total.toLocaleString();

textAverage.innerHTML = average.toLocaleString();
