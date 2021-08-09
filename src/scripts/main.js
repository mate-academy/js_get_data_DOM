'use strict';

const items = document.querySelectorAll('.population');

const itemsValueStr = [...items].map(item => item.innerText);

const itemsValueNum = itemsValueStr.map(elem => {
  return Number(elem.split(',').join(''));
});

const totalPopulation = itemsValueNum.reduce(
  (prev, current) => prev + current, 0,
);
const averagePopulation = totalPopulation / itemsValueNum.length;

function makeReverseArray(str, arrForReturnRev) {
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    count++;
    arrForReturnRev.push(str[i]);

    if (count % 3 === 0 && i !== 0) {
      arrForReturnRev.push(',');
    }
  }
}

const totalPopulationStr = String(totalPopulation);
const totalPopulationArrReverse = [];

const averagePopulationStr = String(averagePopulation);
const averagePopulationArrReverse = [];

makeReverseArray(totalPopulationStr, totalPopulationArrReverse);
makeReverseArray(averagePopulationStr, averagePopulationArrReverse);

const totalPopulationStrForReturn
= totalPopulationArrReverse.reverse().join('');

const averagePopulationStrForReturn
= averagePopulationArrReverse.reverse().join('');

document.querySelector('.total-population').innerText
  = totalPopulationStrForReturn;

document.querySelector('.average-population').innerText
  = averagePopulationStrForReturn;
