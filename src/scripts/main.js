'use strict';

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const populationNodes = document.querySelectorAll('.population');

const total = [...populationNodes].reduce((acc, el) => {
  const populationText = el.innerText.split(',').join('');
  const populationNumber = parseInt(populationText, 10);
  return acc + (isNaN(populationNumber) ? 0 : populationNumber);
}, 0);
const average = total / populationNodes.length;

document.querySelector('.total-population').innerText =
  formatNumberWithCommas(total);
document.querySelector('.average-population').innerText =
  formatNumberWithCommas(average);
