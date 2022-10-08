'use strict';

const numbers = [].map.call(document.querySelectorAll('.population'),
  function(el) {
    return el.innerHTML;
  });

const noComa = numbers.map(function minusOne(el) {
  return el.replaceAll(',', '');
});

const arrOfNum = noComa.map(str => {
  return Number(str);
});

const sum = arrOfNum.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

const average = sum / arrOfNum.length;

document.querySelector('.total-population').innerHTML
 = `${sum.toLocaleString('en-US')}`;

document.querySelector('.average-population').innerHTML
 = `${average.toLocaleString('en-US')}`;
