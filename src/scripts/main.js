'use strict';

const population = document.querySelectorAll('.population');
const totalPeople = document.querySelector('.total-population');
const averagePeople = document.querySelector('.average-population');

const { total, count } = [...population].reduce((acc, elem) => {
  const populationContry = +elem.innerText.replaceAll(',', '');

  acc.count++;
  acc.total += populationContry;

  return acc;
}, {
  total: 0, count: 0,
});

totalPeople.innerText = total.toLocaleString('en-US');
averagePeople.innerText = (total / count).toLocaleString('en-US');
