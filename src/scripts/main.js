'use strict';

const populationList = document.querySelectorAll('.population');
const populationArrey = [];

for (let i = 0; i < populationList.length; i++) {
  let item = document.querySelectorAll('.population')[i].textContent;

  populationArrey.push(item = +item.replaceAll(',', ''));
}

let totalPopulation = 0;

totalPopulation = populationArrey.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const formattedTotal = totalPopulation.toLocaleString('en-US');

const avaragePopulation
  = (totalPopulation / populationList.length).toLocaleString('en-US');

const classTotal = document.querySelector('.total-population');
const classAverage = document.querySelector('.average-population');

classTotal.innerHTML = `
  <span class="total-population">
    ${formattedTotal}
  </span>
`;

classAverage.innerHTML = `
  <span class="average-population">
  ${avaragePopulation}
  </span>
`;
