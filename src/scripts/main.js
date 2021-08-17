'use strict';

const divider = (number) => {
  const digits = number.toString().split('');

  for (let i = digits.length - 3; i >= 1; i -= 3) {
    digits[i] = ',' + digits[i];
  }

  return digits.join('');
};

const populations = document.querySelectorAll('.population');

const total = [...populations].reduce((sum, { textContent }) => (
  sum + +textContent.split(',').join('')
), 0);

const average = total / populations.length;

document.querySelector('.total-population').textContent = divider(total);

document.querySelector('.average-population').textContent = divider(average);
