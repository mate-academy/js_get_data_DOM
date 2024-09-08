'use strict';

// write your code here
const allElementSpan = document.querySelectorAll('.population');

let totalValue = 0;
let count = 0;

for (let i = 0; i < allElementSpan.length; i++) {

  let value = allElementSpan[i].textContent;


  if (!isNaN(value)) {

    value = +value;


    totalValue += value;
    count++;
  }
}

const avarageValue = totalValue / count;

const formattedTotal = totalValue.toLocaleString('en-US');
const formattedAvarage = avarageValue.toLocaleString('en-Us');


document.querySelector('span.avarage-population').textContent =
  formattedAvarage;
document.querySelector('span.total-population').textContent = formattedTotal;


console.log('Total Value: ', formattedTotal);


console.log('Avarage Value: ', formattedAvarage);
