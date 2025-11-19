'use strict';

const spanElement = document.querySelectorAll('span.population');
const spanElementTotalPopulation = document.querySelector(
  'span.total-population',
);
const spanElementAveragePopulation = document.querySelector(
  'span.average-population',
);

const getSpanElements = [...spanElement];

const totalCountryPopulation = getSpanElements.reduce(
  (initialCountry, nextCountry) => {
    const valueNextCountry = nextCountry.innerHTML;
    const cleanSymbol = valueNextCountry.replace(/[^\d]/g, '');

    return initialCountry + Number(cleanSymbol);
  },
  0,
);

const averageValuePopulation = totalCountryPopulation / getSpanElements.length;

spanElementTotalPopulation.innerHTML =
  totalCountryPopulation.toLocaleString('en-US');

spanElementAveragePopulation.innerHTML = Math.floor(
  averageValuePopulation,
).toLocaleString('en-US');
