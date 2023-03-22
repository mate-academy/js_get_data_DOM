'use strict';

const spanList = document.getElementsByClassName('population');
let summ = 0;
let avg = 0;

if (spanList.length > 0) {
  summ = [...spanList].reduce(
    (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.textContent.replaceAll(',', '')),
    0
  );

  avg = summ / spanList.length;
}

document
  .querySelector('.total-population')
  .textContent = summ.toLocaleString('en-US');

document
  .querySelector('.average-population')
  .textContent = avg.toLocaleString('en-US');

// write your code here
