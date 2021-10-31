'use strict';

const spanEl = document.querySelectorAll('span.population');
let totalPop = 0;

for (const value of spanEl) {
  totalPop += +value.innerHTML.split(',').join('');
}

const averegePop = totalPop / spanEl.length;

document.querySelector('span.total-population')
  .innerHTML = totalPop.toLocaleString('en-US');

document.querySelector('span.average-population')
  .innerHTML = averegePop.toLocaleString('en-US');
