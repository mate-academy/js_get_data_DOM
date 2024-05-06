'use strict';

const myDivider = 1000;
const mySeparator = ',';

const spanCollection = document.querySelectorAll('span.population');
const arrayPopulation = [...spanCollection];

const total = arrayPopulation.reduce((acum, elem) => {
  return acum + Number(elem.innerHTML.replace(/,/g, ''));
}, 0);

const average = total / 10;

const divide = (number, divider, separator) => {
  let string = '';
  let numberForChange = number;

  while (numberForChange / divider > 0) {
    string = (numberForChange % divider) + string;
    numberForChange = Math.trunc(numberForChange / divider);

    if (numberForChange > 0) {
      string = separator + string;
    }
  }

  return string;
};

const totalResult = divide(total, myDivider, mySeparator);
const averageResult = divide(average, myDivider, mySeparator);

document.querySelector('span.total-population').innerHTML = totalResult;

document.querySelector('span.average-population').innerHTML = averageResult;
