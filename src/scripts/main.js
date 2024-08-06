'use strict';

// write your code here
const population =
  [...document.querySelectorAll('.population')]
    .map((el) => el.textContent)
    .map((el) => el.split(',').join(''))
    .reduce((el, acc) => parseInt(el) + parseInt(acc), 0) + '';

const totalPopulation = population;

const averagePopulation = (
  Math.round(totalPopulation / population.length) + ''
).split('');

totalPopulation.split('');

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = addComaElements(totalPopulation, totalPopulation.length);

average.textContent = addComaElements(
  averagePopulation,
  averagePopulation.length,
);

// #region Function Роздліляю елементи масиву на коми
function addComaElements(array, length) {
  if (array !== undefined && length !== 0) {
    let newArray = [...array];

    if (length % 2 === 0) {
      newArray[0] += ',';

      for (let i = 1; i < newArray.length; i++) {
        if (i % 3 === 0) {
          newArray[i] += ',';
        }
      }

      if (newArray[newArray.length - 1].includes('')) {
        newArray[newArray.length - 1] =
          parseInt(newArray[newArray.length - 1]) + '';
      }
    } else {
      newArray = newArray.map((item, index) => {
        if ((index + 1) % 3 === 0) {
          return item + ',';
        }

        return item;
      });

      if (newArray[newArray.length - 1].includes('')) {
        newArray[newArray.length - 1] =
          parseInt(newArray[newArray.length - 1]) + '';
      }
    }

    return newArray.join('');
  }
}
// #endregion
