'use strict';

// write your code here
function getParsedPopulations() {
  const elements = document.querySelectorAll('.population');
  const numbers = [];

  elements.forEach((el) => {
    const cleaned = el.textContent.replace(/,/g, '');
    const number = Number(cleaned);

    if (!isNaN(number)) {
      numbers.push(number);
    }
  });

  return numbers;
}

document.querySelector('.total').addEventListener('click', function () {
  const populations = getParsedPopulations();
  const total = populations.reduce((sum, num) => sum + num, 0);
  const formattedTotal = total.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formattedTotal;
});

document.querySelector('.average').addEventListener('click', function () {
  const populations = getParsedPopulations();
  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = Math.round(total / populations.length);
  const formattedAverage = average.toLocaleString('en-US');

  document.querySelector('.average-population').textContent = formattedAverage;
});
