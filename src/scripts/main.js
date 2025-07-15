'use strict';

const spans = document.querySelectorAll('.population');
let total = 0;

for (const key of spans) {
  const text = key.textContent;
  const number = Number(text);

  total += number;
}

const average = total / spans.length;

const totalForm = document.querySelector('.total-population');
const averageForm = document.querySelector('.average-population');

totalForm.textContent = total.toLocaleString();
averageForm.textContent = average.toLocaleString();
