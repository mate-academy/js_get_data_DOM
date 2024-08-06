'use strict';

// write your code here

const numbers = document.querySelectorAll('.population');
const values = [...numbers].map((e) => e.textContent.trim().replace(/,/g, ''));
const totalRes = document.querySelector('.total-population');
const averageRes = document.querySelector('.average-population');

let result = 0;
const arrLength = values.length;

for (let i = 0; i < arrLength; i++) {
  const num = Number(values[i]);

  result += num;
}

const average = result / arrLength;

totalRes.innerText = result.toLocaleString();
averageRes.innerText = average.toLocaleString();
