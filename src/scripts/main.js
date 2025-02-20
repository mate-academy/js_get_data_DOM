'use strict';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const elements = [...document.querySelectorAll('.population')];
const values = [];

elements.forEach((element) => values.push(element.innerText));

const valWithNoComas = values.map((value) => value.replaceAll(',', ''));
const total = valWithNoComas.reduce((acc, value) => acc + parseInt(value), 0);
const avg = (total / valWithNoComas.length).toFixed(0);

document.querySelector('.total-population').innerText = numberWithCommas(total);
document.querySelector('.average-population').innerText = numberWithCommas(avg);
