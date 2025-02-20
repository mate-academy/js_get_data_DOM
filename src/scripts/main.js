'use strict';

let total = 0;
const populations = document.querySelectorAll(`[class="population"]`);

for (const pop of populations) {
  const popString = pop.textContent;
  const popNumber = Number(popString.replaceAll(',', ''));

  total += popNumber;
}

const average = total / populations.length;

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

const totalSpan = document.querySelector(`[class="total-population"]`);
const newTotalSpan = totalSpan.cloneNode();
const newtotaltext = document.createTextNode(totalFormatted);

newTotalSpan.appendChild(newtotaltext);
totalSpan.replaceWith(newTotalSpan);

const averageSpan = document.querySelector(`[class="average-population"]`);
const newAverageSpan = averageSpan.cloneNode();
const newAverageText = document.createTextNode(averageFormatted);

newAverageSpan.appendChild(newAverageText);
averageSpan.replaceWith(newAverageSpan);
