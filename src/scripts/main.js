'use strict';

const populations = document.querySelectorAll('.population');

const numbers = [...populations].map(span =>
  +span.innerText.split(',').join(''));

const total = numbers.reduce((a, b) => a + b);

const average = total / numbers.length;

document.querySelector('.total-population').innerText 
  = new Intl.NumberFormat('en-GB').format(total);

document.querySelector('.average-population').innerText
    = new Intl.NumberFormat('en-GB').format(average);
