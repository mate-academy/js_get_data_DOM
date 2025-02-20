'use strict';

// write your code here
const elements = document.getElementsByClassName('population');

const populations = Array.from(elements).map((element) => {
  return parseInt(element.innerText.replace(/,/g, ''), 10);
});

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = averagePeople(populations);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = totalPople(populations);

function totalPople(arr) {
  const result = arr.reduce((sum, element) => sum + element, 0);

  return result.toLocaleString('en-US');
}

function averagePeople(arr) {
  const sum = arr.reduce((akam, element) => akam + element, 0);
  const average = sum / arr.length;

  return average.toLocaleString('en-US').replace('.', ',');
}
