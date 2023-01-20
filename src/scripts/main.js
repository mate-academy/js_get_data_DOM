'use strict';

const items = document.querySelectorAll('.population');

const population = [...items].map(item =>
  +(item.innerText.split(',').join('')));
const total = population.reduce((sum, el) => sum + el, 0);

const numFormat = new Intl.NumberFormat('en-US');

const totalPeople = numFormat.format(total);
const averagePeople = numFormat.format(total / population.length);

const totalPeopleInHTML = document.querySelector('.total-population');
const averagePeopleInHTML = document.querySelector('.average-population');

totalPeopleInHTML.innerHTML = totalPeople;
averagePeopleInHTML.innerHTML = averagePeople;
