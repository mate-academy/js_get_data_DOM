'use strict';

const allPeople = document.querySelectorAll('.population');

let total = 0;

for (const eachCountry of allPeople) {
  total += +eachCountry.innerText.split(',').join('');
}

const average = total / allPeople.length;

const totalResult = [];
const averageResult = [];
let subCounterTotal = 0;
let subCounterAverage = 0;

for (let i = String(total).length - 1; i >= 0; i--) {
  subCounterTotal++;

  if (subCounterTotal === 4) {
    totalResult.unshift(',');
    i++;
    subCounterTotal = 0;
  } else {
    totalResult.unshift(String(total)[i]);
  }
}

for (let i = String(average).length - 1; i >= 0; i--) {
  subCounterAverage++;

  if (subCounterAverage === 4) {
    averageResult.unshift(',');
    i++;
    subCounterAverage = 0;
  } else {
    averageResult.unshift(String(average)[i]);
  }
}

document.querySelector('.total-population')
  .innerText = totalResult.join('');

document.querySelector('.average-population')
  .innerText = averageResult.join('');
