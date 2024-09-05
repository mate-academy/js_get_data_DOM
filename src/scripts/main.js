'use strict';

// write your code here
const allElementSpan = document.querySelectorAll('.population');

let totalValue = 0;
let count = 0;

for (let i = 0; i < allElementSpan.length; i++) {
  // eslint-disable-next-line no-unused-vars
  let value = allElementSpan[i].textContent;

  // eslint-disable-next-line no-undef
  if (!isNaN(value)) {
    // eslint-disable-next-line no-unused-expressions, no-undef
    value = +value;

    // eslint-disable-next-line no-undef
    totalValue += value;
    count++;
  }
}

const avarageValue = totalValue / count;

const formattedTotal = totalValue.toLocaleString('en-US');
const formattedAvarage = avarageValue.toLocaleString('en-Us');

// eslint-disable-next-line max-len
document.querySelector('span.avarage-population').textContent =
  formattedAvarage;
document.querySelector('span.total-population').textContent = formattedTotal;

// eslint-disable-next-line no-console
console.log('Total Value: ', formattedTotal);

// eslint-disable-next-line no-console
console.log('Avarage Value: ', formattedAvarage);
