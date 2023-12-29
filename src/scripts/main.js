'use strict';

function thousandsSeparator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const populations = document.querySelectorAll('.population');
const total = [...populations].reduce(
  (a, b) => a + +b.innerText.replaceAll(',', ''), 0);

document.querySelector('.total-population').textContent
= thousandsSeparator(total);

document.querySelector('.average-population').textContent
= thousandsSeparator(total / populations.length);
