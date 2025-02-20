'use strict';

const populations = [...document.querySelectorAll('.population')].map(
  (population) => population.innerText,
);

const total = populations.reduce(
  (sum, population) => sum + +population.replaceAll(',', ''),
  0,
);

const average = Math.round(total / populations.length);

const totalElement = document.querySelector('.total-population');

totalElement.textContent = `${format(total, 3)}`;

const averageElement = document.querySelector('.average-population');

averageElement.textContent = `${format(average, 3)}`;

function format(number, countOfDigits) {
  const numString = number.toString();
  const parts = [];

  for (let i = numString.length; i > 0; i -= countOfDigits) {
    const start = Math.max(0, i - countOfDigits);

    parts.unshift(numString.slice(start, i));
  }

  return parts.join(',');
}
