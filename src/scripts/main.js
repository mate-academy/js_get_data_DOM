'use strict';

const list = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const textTotal = [...list].map(item => item.innerText);
const resultTotal = textTotal
  .map(item => Number(item.replace(/[\s,]/g, '')))
  .reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });

total.textContent = resultTotal.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

average.textContent = (resultTotal / list.length).toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
