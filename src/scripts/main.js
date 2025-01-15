'use strict';

const population = [...document.querySelectorAll('span.population')];

let total = 0;
let count = 0;

population.forEach((element) => {
  const elementNumber = +element.textContent.replaceAll(',', '');

  total += elementNumber;
  count += 1;
});

const average = Math.round(total / count);

const totalElement = document.getElementsByClassName('total-population')[0];

if (totalElement) {
  totalElement.textContent = total.toLocaleString('en-US');
}

const averageElement = document.getElementsByClassName('average-population')[0];

if (average) {
  averageElement.textContent = average.toLocaleString('en-US');
}
