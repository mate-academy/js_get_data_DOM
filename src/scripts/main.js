'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalNumber = [...population]
  .map(str => +((str.textContent).replace(/,/g, '')))
  .reduce((sum, a) => sum + a, 0);

let avarageNumber = (totalNumber / population.length);

totalNumber = totalNumber
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

avarageNumber = avarageNumber
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

total.innerHTML = `
  <p class="total-population">
    ${totalNumber}
  </p>`;

average.innerHTML = `
  <p class="average-population">
    ${avarageNumber}
  </p>`;
