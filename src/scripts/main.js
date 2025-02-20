'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationArr = [...population].map(country => Number(
  country.innerText.split(',').join('')
));
const totalValue = populationArr.reduce((acumulator, value) => (
  acumulator + value
), 0);
const averageValue = totalValue / populationArr.length;

total.innerText = String(totalValue).split('').reverse().map(
  (num, index) => (
    index % 3 === 0 && index !== 0 ? num + ',' : num
  )
).reverse().join('');

average.innerText = String(averageValue).split('').reverse().map(
  (num, index) => (
    index % 3 === 0 && index !== 0 ? num + ',' : num
  )
).reverse().join('');
