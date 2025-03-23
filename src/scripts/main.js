'use strict';

const populationList = document.querySelectorAll('.list .population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
let count = 0;
let total = 0;

populationList.forEach((element) => {
  const value = parseInt(element.textContent.replaceAll(',', ''));

  if (!isNaN(value)) {
    count++;
    total += value;
  }
});

totalPopulationElement.textContent = total
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

averagePopulationElement.textContent = Math.round(total / count)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
