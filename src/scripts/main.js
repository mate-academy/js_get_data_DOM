'use strict';

const populationInfo = document.querySelectorAll('.population');
const populationNumber = [];

for (let i = 0; i < populationInfo.length; i++) {
  if (typeof (parseInt(populationInfo[i].innerHTML.split(',').join('')))
  === 'number') {
    populationNumber[i]
    = parseInt(populationInfo[i].innerHTML.split(',').join(''));
  }
  // else was omitted because of linter ban of using alert or console.log
}

const total = populationNumber.reduce((prev, next) => prev + next, 0);

const average = total / populationNumber.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = makeNumberWithThousandSeparator(total);

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = makeNumberWithThousandSeparator(average);

// Function was created to avoid code duplication
// as well as creating a lot of intermediary variables

function makeNumberWithThousandSeparator(number) {
  const numberAsString = number.toString();
  let result = '';
  let count = 1;
  let resultLength = 1;

  for (let i = numberAsString.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && i !== 0) {
      resultLength++;
      result = result.padStart(resultLength, `,${numberAsString[i]}`);
    } else {
      result = result.padStart(resultLength, `${numberAsString[i]}`);
    }
    count++;
    resultLength++;
  }

  return result;
}
