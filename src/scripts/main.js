'use strict';

const populationEl = document.querySelectorAll('.population');

const populations =
  [...populationEl].map((element) => {
    const value = element.textContent;

    return Number(value.replaceAll(',', ''));
  }) ?? [];

const totalPopulation = populations.reduce((acc, value) => acc + value, 0);
const averagePopulation = totalPopulation / populations.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

if (total) {
  total.innerText = totalPopulation.toLocaleString('en-US');
}

if (average) {
  average.innerHTML = averagePopulation.toLocaleString('en-US');
}
