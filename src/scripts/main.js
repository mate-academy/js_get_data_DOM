'use strict';

const allPopulationCollection = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const peopleSum = [ ...allPopulationCollection ]
  .reduce((prev, item) => {
    let number = '';

    for (const numberPart of item.textContent) {
      if (numberPart !== ',') {
        number += numberPart;
      }
    }

    return prev + +number;
  }, 0);

const totalSum = peopleSum.toLocaleString('en-US');

totalPopulation.textContent = totalSum;

const avarageCount = peopleSum / [ ...allPopulationCollection ].length;
const averageSum = avarageCount.toLocaleString('en-US');

averagePopulation.textContent = averageSum;
