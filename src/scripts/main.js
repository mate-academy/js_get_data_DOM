'use strict';

const dates = document.getElementsByTagName('span');
const totalPopulationSpan = document.getElementsByClassName('total-population');
const avgPopSpan = document.getElementsByClassName('average-population');
let totalPopulation = 0;

for (const data of dates) {
  if (data.classList.contains('population')) {
    const dataParseNumber = Number(data.textContent.replaceAll(',', ''));

    totalPopulation += dataParseNumber;
  }
}

const averagePopulation = String(
  Math.ceil(totalPopulation / (dates.length - 2)),
);
const averagePopulationArr = averagePopulation.split('');
const totalPopulationArr = String(totalPopulation).split('');
let count = 0;

if (averagePopulationArr.length >= 10) {
  averagePopulationArr.splice(1, 0, ',');
}

for (let i = 0; i < averagePopulationArr.length - 1; i++) {
  if (count === 3) {
    averagePopulationArr.splice(i, 0, ',');
    i++;
    count = 0;
  }
  count++;
}

count = 0;

if (totalPopulationArr.length >= 10) {
  totalPopulationArr.splice(1, 0, ',');
}

for (let i = 2; i < totalPopulationArr.length - 1; i++) {
  if (count === 3) {
    totalPopulationArr.splice(i, 0, ',');
    i++;
    count = 0;
  }
  count++;
}

totalPopulationSpan[0].textContent = totalPopulationArr.join('');
avgPopSpan[0].textContent = averagePopulationArr.join('');
