'use strict';

const populationSpans = document.querySelectorAll('span.population');

let populationSum = 0;

for (const span of populationSpans) {
  const spanComasRemoved = parseInt(span.textContent.replaceAll(',', ''));

  populationSum += spanComasRemoved;
}

const averageSpan = Math.round(populationSum / populationSpans.length);

document.querySelector('span.total-population').textContent = populationSum;
document.querySelector('span.average-population').textContent = averageSpan;

// write your code here
