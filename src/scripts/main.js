'use strict';

const countryList = [...document.querySelectorAll('population')];
const totalHuman = document.querySelector('total-population');
const averageHuman = document.querySelector('average-population');

const valueHuman = countryList.reduce((sum, country) => {
  const peoples = +country.textContent.split(',').join('');

  return sum + peoples;
}, 0);

const averageValue = valueHuman / countryList.length;

totalHuman.textContent = valueHuman.toLocaleString('en-US');
averageHuman.textContent = averageValue.toLocaleString('en-US');
