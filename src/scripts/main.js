'use strict';

const populationSpans = document.querySelectorAll('.population');

const populationList = Array.from(populationSpans).map((span) => {
  const populationString = span.textContent.replace(/,/g, '');

  return parseInt(populationString);
});

const totalPopulation = populationList.reduce(
  (total, population) => total + population,
  0,
);
const averagePopulation = totalPopulation / populationList.length;

function addThousandsSeparator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = addThousandsSeparator(totalPopulation);
averageSpan.textContent = addThousandsSeparator(averagePopulation);
