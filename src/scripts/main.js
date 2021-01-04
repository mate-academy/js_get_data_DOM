'use strict';

const numberFormatting = function(n) {
  const formatted = [];

  if (String(n).length % 3 > 0) {
    formatted.push(String(n).substr(0, String(n).length % 3));
  }

  for (let i = String(n).length % 3; i < String(n).length; i += 3) {
    formatted.push(String(n).substr([i], 3));
  }

  return formatted.join(',');
};

const classes = document.getElementsByClassName('population');

const populations = [...classes].map(
  country => +country.textContent.split(',').join('')
);

const total = populations.reduce((sum, popul) => sum + popul);

const average = total / populations.length;

const totalElement = document.getElementsByClassName('total-population')[0];

const averageElement = document.getElementsByClassName('average-population')[0];

totalElement.innerText = numberFormatting(total);
averageElement.innerText = numberFormatting(average);
