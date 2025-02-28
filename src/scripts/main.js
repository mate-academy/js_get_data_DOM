'use strict';

const elements = document.querySelectorAll('.population');
const numbers = [];

for (const element of elements) {
  let text = element.textContent;

  text = text.replace(/,/g, '');

  const number = parseInt(text);

  if (!isNaN(number)) {
    numbers.push(number);
  }

  const total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  const average = total / elements.length;

  const formattedTotal = total.toLocaleString();
  const formattedAverage = average.toLocaleString();

  const totalElem = document.querySelector('.total-population');
  const averageElem = document.querySelector('.average-population');

  totalElem.textContent = formattedTotal;
  averageElem.textContent = formattedAverage;
}
