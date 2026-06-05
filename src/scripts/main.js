'use strict';

const populations = document.querySelectorAll('.population');
let total = 0;
populations.forEach((population) => {
const changed = population.textContent.replace(/,/g, '');
const digits = Number(changed);
total += digits;

});

const average = Math.round(total / populations.length);

const totalPopulation = document.querySelector('.total-population');
totalPopulation.textContent = total.toLocaleString();
const averagePopulation = document.querySelector('.average-population');
averagePopulation.textContent = average.toLocaleString();

