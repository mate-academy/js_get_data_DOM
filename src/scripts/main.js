'use strict';

let sum = 0;
let count = 0;

document.querySelectorAll('.population').forEach((item) => {
  sum += parseInt(item.innerHTML.split(',').join(''));
  count++;
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document
  .querySelector('.average-population')
  .innerHTML = numberWithCommas(sum / count);

document.querySelector('.total-population').innerHTML = numberWithCommas(sum);
