'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulation = [...populations].reduce((sum, element) =>
  sum + +(element.textContent.replace(/,/g, ''))
, 0);

const averagePopulation = populations.length
  && totalPopulation / populations.length;

const addSeparators = number => {
  let numberAsString = String(number);
  const parts = [];

  do {
    const part = numberAsString.slice(-3);

    parts.unshift(part);
    numberAsString = numberAsString.slice(0, -3);
  } while (numberAsString);

  return parts.join();
};

document
  .querySelector('.total-population')
  .textContent = addSeparators(totalPopulation);

document
  .querySelector('.average-population')
  .textContent = addSeparators(averagePopulation);
