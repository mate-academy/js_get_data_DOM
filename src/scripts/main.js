'use strict';

const divider = (number) => {
  const digits = number.toString().split('');

  for (let i = digits.length - 3; i >= 1; i -= 3) {
    digits[i] = ',' + digits[i];
  }

  return digits.join('');
};

const populations = document.querySelectorAll('.population');

const populationsFiltered = [...populations].filter(({ textContent }) => {
  const contentToCheck = textContent.split(',').join('');

  return !isNaN(contentToCheck) && isFinite(contentToCheck);
});

const total = populationsFiltered.reduce((sum, { textContent }) => (
  sum + +textContent.split(',').join('')
), 0);

const average = Math.round(total / populationsFiltered.length);

document.querySelector('.total-population').textContent = divider(total);

document.querySelector('.average-population').textContent = divider(average);
