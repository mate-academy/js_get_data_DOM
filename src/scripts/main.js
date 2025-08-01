'use strict';

const allData = document.querySelectorAll('.population');
const avarage = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

const allDataToNum = [];

allData.forEach((country) => {
  allDataToNum.push(Number(country.textContent.replace(/,/g, '')));
});

const totalValue = allDataToNum.reduce((sum, value) => sum + value, 0);
const averageValue = totalValue / allDataToNum.length;

total.textContent = totalValue.toLocaleString();
avarage.textContent = averageValue.toLocaleString();
