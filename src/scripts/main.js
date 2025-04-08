'use strict';

function getCountriesPopulation() {
  const populationValues = Object.values(
    document.getElementsByClassName('population'),
  ).map((el) => el.textContent);

  let populationSum = 0;
  let countriesWithValidPopulation = 0;

  for (const country of populationValues) {
    if (typeof country === 'string') {
      const parsedValue = parseInt(country.replaceAll(',', ''));

      if (!isNaN(parsedValue)) {
        populationSum += parsedValue;
        countriesWithValidPopulation++;
      }
    }
  }

  const averageSum = Math.round(populationSum / countriesWithValidPopulation);

  return { populationSum, averageSum };
}

function fillTotalAndAverageTags({ populationSum, averageSum }) {
  const totalPopulationElement = document.querySelector('.total-population');
  const avgPopulationElement = document.querySelector('.average-population');

  totalPopulationElement.replaceWith(setStyleForNumber(populationSum));
  avgPopulationElement.replaceWith(setStyleForNumber(averageSum));
}

function setStyleForNumber(number) {
  const styledNumber = String(number).split('');

  for (let i = styledNumber.length - 3; i > 0; i -= 3) {
    styledNumber.splice(i, 0, ',');
  }

  return styledNumber.join('');
}

fillTotalAndAverageTags(getCountriesPopulation());
