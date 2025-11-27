'use strict';

const populations = [...document.querySelectorAll('.population')];

const statistics = populations.map((item) => {
  const number = item.textContent.replaceAll(',', '');

  return +number;
});

const total = statistics.reduce((acc, number) => acc + number, 0);
const average = Math.trunc(total / statistics.length);

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = formattedTotal;
averagePopulation.innerHTML = formattedAverage;
