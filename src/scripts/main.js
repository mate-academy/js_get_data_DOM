'use strict';

const listPopuls = document.querySelectorAll('.population');
let totalPopul = 0;

for (const popul of listPopuls) {
  const populText = popul.innerHTML;
  const populNum = +populText.split(',').join('');

  totalPopul += populNum;
}

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = totalPopul.toLocaleString('en-US');
average.innerHTML = (totalPopul / listPopuls.length).toLocaleString('en-US');
