'use strict';

const populationList = document.querySelectorAll('span.population');
const populationArr = [...populationList].map(
  item => +item.innerText.replace(/,/g, '')
);

function calculateTotal() {
  return populationArr.reduce((acc, country) => acc + country, 0);
}

function calculateAverage() {
  return calculateTotal() / populationArr.length;
}

document.querySelector('p.total').innerText = `Total: ${
  Intl.NumberFormat('en-US').format(calculateTotal())
}`;

document.querySelector('p.average').innerText = `Average: ${
  Intl.NumberFormat('en-US').format(calculateAverage())
}`;
