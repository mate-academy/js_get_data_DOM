'use strict';

const people = document.querySelectorAll('.population');
let sum = 0;
let count = 0;

for (const man of people) {
  const text = man.textContent.trim();
  const sanitizedText = text.replace(/,/g, '');
  const number = parseInt(sanitizedText, 10);

  if (!isNaN(number)) {
    sum += number;
    count++;
  }
}

const average = sum / count;

const formattedSum = sum.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const totalPeople = document.querySelector('.total-population');

if (totalPeople) {
  totalPeople.textContent = `${formattedSum}`;
}

const averagePeople = document.querySelector('.average-population');

if (averagePeople) {
  averagePeople.textContent = `${formattedAverage}`;
}
