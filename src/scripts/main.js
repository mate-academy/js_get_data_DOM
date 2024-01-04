'use strict';

function createThousandSeparators(number) {
  const formatted = number.toLocaleString('en-US');

  return formatted;
}

let total = 0;
let average = 0;

const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');
const populations = document.querySelectorAll('.population');

populations.forEach(population => {
  const count = population.textContent.split(',').join('');

  total += +count;
});

average = total / populations.length;

totalText.textContent = createThousandSeparators(total);
averageText.textContent = createThousandSeparators(average);
