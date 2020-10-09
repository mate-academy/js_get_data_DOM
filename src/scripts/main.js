'use strict';

// write your code here

function calcTotal() {
  const populationCollection = document.querySelectorAll('.population');
  const totalSpan = document.querySelector('p.total > span');

  const total = [...populationCollection]
    .reduce((acc, elem) =>
      acc + parseInt(elem.textContent.replaceAll(',', '')),
    0);

  totalSpan.textContent = total;
};

// function calcAverage()

calcTotal();
