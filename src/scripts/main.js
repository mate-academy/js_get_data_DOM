'use strict';

const listPopulation = document.querySelectorAll('.population');
const arrayPopulation = [...listPopulation].map(
  item => item.innerText.replace(/,/g, '')
);
const numberPopulation = arrayPopulation.map(item => Number(item));

const totalAmount = numberPopulation.reduce((sum, current) => sum + current);
const total = String(totalAmount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
const totalElement = document.querySelector('.total-population');

totalElement.innerText = total;

const average = totalAmount / numberPopulation.length;
const averageResult = String(average)
  .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
const averageElement = document.querySelector('.average-population');

averageElement.innerText = averageResult;
