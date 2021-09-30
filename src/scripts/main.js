'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let i = 0;
let total = 0;

for (const oneCountryPopulation of population) {
  const peopleStr = oneCountryPopulation.outerText;
  const peopleNum = +peopleStr.split(',').join('');

  total += peopleNum;
  i++;
};

const average = total / i;

totalPopulation.textContent = bitRate(total);
averagePopulation.textContent = bitRate(average);

function bitRate(sum) {
  const arr = [];

  for (let j = sum.toString().length; j > 0; j = j - 3) {
    let step = 3;

    if (j < 3) {
      step = j;
    };

    arr.unshift(sum.toString().substr(j - step, step));
  };

  return arr.join(',');
}
