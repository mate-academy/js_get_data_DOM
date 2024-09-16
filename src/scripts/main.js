'use strict';

const population = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
const populationArray = [...population].map(countryPopulation =>
  Number.parseInt(countryPopulation.innerHTML.split(',').join('')));
const totalPopulation = populationArray.reduce((sum, currentValue) =>
  sum + currentValue);
const averagePopulationValue = totalPopulation / populationArray.length;

totalPopulationElement.innerText = addSeparator(averagePopulationValue);
averagePopulationElement.innerText = addSeparator(totalPopulation);

function addSeparator(separateString) {
  let separatorCount = 0;
  const separatedStringArray = [];

  const separateStringArray = separateString.toString().split('');

  for (let i = separateStringArray.length - 1; i >= 0; i--) {
    let separatorChar = (separatorCount % 3) ? '' : ',';

    if (separatorCount === 0) {
      separatorChar = '';
    }
    separatorCount++;

    separatedStringArray[i] = separateStringArray[i] + separatorChar;
  };

  return separatedStringArray.join('');
}
