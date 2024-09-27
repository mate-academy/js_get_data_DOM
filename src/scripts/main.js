'use strict';

const allDatas = document.querySelectorAll('.population');
const calculateTotal = document.querySelector('.total-population');
const calculateAverage = document.querySelector('.average-population');

const maped = [...allDatas].map(oneData => (
  +(oneData.textContent).split(',').join('')
));

calculateTotal.textContent = (
  maped.reduce((sum, first) => (
    sum + first
  ), 0)
).toLocaleString();

calculateAverage.textContent = (
  +(calculateTotal.textContent.replace(/,/g, '')) / maped.length
).toLocaleString();
