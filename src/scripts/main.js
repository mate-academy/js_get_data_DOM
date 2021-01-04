'use strict';

const population = document.querySelectorAll('.population');
const arrayPopulation = [...population]
  .map(element => +(element.innerText.split(',').join('')));

let sum = arrayPopulation.reduce((prev, current) => (prev + current), 0);
let average = sum / arrayPopulation.length;

function addCommas(value) {
  const arr = `${value}`.split('');

  for (let i = arr.length - 1, counter = 0; i >= 0; i--, counter++) {
    if (counter % 3 === 0 && i !== arr.length - 1) {
      arr[i] = `${arr[i]},`;
    }
  }

  return arr.join('');
}

sum = addCommas(sum);
average = addCommas(average);

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerHTML = sum;
averageElement.innerHTML = average;
