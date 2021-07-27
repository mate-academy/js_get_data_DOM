'use strict';

const searchFound = document.querySelectorAll('span');
const newArr = [...searchFound];
const texts = newArr.map(item => item.innerText);

let populationSum = 0;
let countriesCount = 0;

for (let i = 0; i < texts.length - 2; i++) {
  const newNum = Number(texts[i].replace(/,/g, ''));

  if (typeof newNum === 'number') {
    populationSum += newNum;
    countriesCount++;
  }
}

const averagePopulation = populationSum / countriesCount;

document.getElementsByClassName('total-population')[0].textContent
= populationSum.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].innerText
= averagePopulation.toLocaleString('en-US');
