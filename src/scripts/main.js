'use strict';
// write your code here

const elements = document.querySelectorAll('.population')
let averPopul = 0;
let totalPopul = 0;

for (const elem of [...elements]) {
  console.log(+(elem.innerText.replaceAll(',', '').replaceAll(' ', '')));
  totalPopul += +(elem.innerText.replaceAll(',', '').replaceAll(' ', ''));
}

document.querySelector('.total-population').innerText = totalPopul.toLocaleString('en-US');
document.querySelector('.average-population').innerText = (totalPopul / elements.length).toLocaleString('en-US');