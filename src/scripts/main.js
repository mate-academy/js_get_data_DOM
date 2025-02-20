'use strict';

const numbers = document.querySelectorAll('.population');
let total = 0;
let avrg = 0;

for (const number of numbers) {
  const textCont = number.textContent;
  const numb = Number(textCont.replaceAll(',', ''));

  total += numb;
}

avrg = total / numbers.length;
avrg = avrg.toLocaleString('en-US');
total = total.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = total;
document.querySelector('.average-population').innerHTML = avrg;
