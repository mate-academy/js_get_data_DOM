'use strict';

const listItems = document.querySelectorAll('.population');

let numberOfPopulation = 0;

listItems.forEach(country => {
  const newNum = +country.innerText.split(',').join('');

  numberOfPopulation += newNum;
});

const totalPopulationHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');

totalPopulationHtml.innerHTML = numberOfPopulation.toLocaleString('en-US');
averageHtml.innerHTML = (numberOfPopulation / 10).toLocaleString('en-US');
