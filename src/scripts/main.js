'use strict';

const populationList = document.querySelectorAll('.population');
const totalInner = document.querySelector('.total-population');
const averageInner = document.querySelector('.average-population');

function getTotal() {
  let sum = 0;

  for (let i = 0; i < populationList.length; i++) {
    const number = +populationList[i].textContent.replace(/,/g, '');

    sum += number;
  }
  totalInner.innerHTML = sum.toLocaleString('en-US');
  getAverage(sum);
}

function getAverage(sum) {
  const average = sum / populationList.length;

  averageInner.innerHTML = average.toLocaleString('en-US');
}

getTotal();
