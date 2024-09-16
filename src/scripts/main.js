'use strict';

function triplify(str) {
  const triplifyed = [];
  let digitsProcessed = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    triplifyed.push(str[i]);
    digitsProcessed++;

    if (digitsProcessed % 3 === 0
      && i !== 0) {
      triplifyed.push(',');
    }
  }

  triplifyed.reverse();

  return triplifyed.join('');
}

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');
const populations = document.querySelectorAll('.population');

const total = [...populations].reduce((sum, population) => {
  const parsed = parseInt(population.innerText.split(',').join(''));

  return sum + parsed;
}, 0);

const average = total / populations.length;

totalEl.innerText = triplify(total.toString());
averageEl.innerText = triplify(average.toString());
