'use strict';

const numbers = [...document.querySelectorAll('.population')];

let avarage = 0;
let total = 0;

numbers.forEach((el) => {
  const newData = el.textContent.replaceAll(',', '');

  total += Number(newData);
});

avarage = Math.round(total / numbers.length);

const avarageData = document.querySelector('.average-population');

avarageData.innerHTML = formatNumber(avarage);

const totalData = document.querySelector('.total-population');

totalData.innerHTML = formatNumber(total);

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
