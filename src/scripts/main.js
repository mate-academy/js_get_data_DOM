'use strict';

const populationArr = [...document.querySelectorAll('.population')];

const parsedData = populationArr.map((e) => +e.textContent.replaceAll(',', ''));
const totalPopulation = parsedData.reduce((acc, cur) => acc + cur, 0);

const averagePopulation = Math.floor(totalPopulation / parsedData.length);

document.querySelector('.total-population').textContent =
  separateThousandsByComma(totalPopulation);

document.querySelector('.average-population').textContent =
  separateThousandsByComma(averagePopulation);

function separateThousandsByComma(number) {
  let tempNumber = number;
  let result = '';
  let counter = 0;

  while (tempNumber > 0) {
    const digit = tempNumber % 10;

    tempNumber = Math.floor(tempNumber / 10);

    result = digit + result;
    counter++;

    if (counter % 3 === 0 && tempNumber > 0) {
      result = ',' + result;
    }
  }

  return result;
}
