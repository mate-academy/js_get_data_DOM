'use strict';

const populations = document.querySelectorAll('span.population');
const textData = [...populations].map(item => item.innerText);
const numsWithoutCommas = [];

for (const country of textData) {
  const currentCountry = country.split('');

  numsWithoutCommas.push(currentCountry
    .filter(item => item !== ',')
    .join('')
  );
}

const textDataToNumber = numsWithoutCommas.map(item => Number(item));

const totalPopulationNumber = textDataToNumber
  .reduce((acc, item) => acc + item, 0)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const averagePopulationNumber = (textDataToNumber
  .reduce((acc, item) => acc + item, 0)
  / textDataToNumber.length)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const total = document.querySelector('span.total-population');

total.innerText = totalPopulationNumber;

const avarage = document.querySelector('span.average-population');

avarage.innerText = averagePopulationNumber;
