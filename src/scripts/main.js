'use strict';

// write your code here
const populationCollection = document.querySelectorAll('.population');

function calcTotal() {
  const totalSpan = document.querySelector('.total-population');

  const total = [...populationCollection]
    .reduce((acc, elem) =>
      acc + parseInt(elem.textContent.replaceAll(',', '')),
    0);

  totalSpan.textContent = total;
};

function calcAverage() {
  const averageSpan = document.querySelector('.average-population');

  const average = [...populationCollection]
    .reduce((acc, elem) =>
      acc + parseInt(elem.textContent.replaceAll(',', '')),
    0) / populationCollection.length;

  averageSpan.textContent = average;
}

calcTotal();
calcAverage();
