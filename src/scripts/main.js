'use strict';

const elements = document.body.querySelectorAll('.population');

let total = 0;

elements.forEach((element) => {
  const text = element.textContent;
  const cleanText = text.replaceAll(',', '');
  const num = +cleanText;

  total += num;
});

const average = total / elements.length;
const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString('en-US');
totalElement.textContent = total.toLocaleString('en-US');
