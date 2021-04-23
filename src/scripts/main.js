'use strict';

const people = document.querySelectorAll('.population');

const numbers = [...people].map(item => +item.innerHTML.split(',').join(''));

const totalPeople = String(numbers.reduce((sum, current) => sum + current));

const averagePeople = String(Number.parseInt(totalPeople / numbers.length));

function returnString(number) {
  let stringResult = '';
  let count = 0;

  for (let i = number.length - 1; i >= 0; --i) {
    if (count % 3 === 0 && i !== number.length - 1) {
      stringResult = `${number[i]},${stringResult}`;
    } else {
      stringResult = `${number[i]}${stringResult}`;
    };

    count++;
  };

  return stringResult;
};

const totalPopulation = returnString(totalPeople);
const averagePopulation = returnString(averagePeople);

document.querySelector('.total-population').innerHTML = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
