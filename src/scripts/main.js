'use strict';

// Steps to do this challenge:
// 1. Get all text data from `span` with class `population`
// 2. Make sure that the given string can be converted to a number
// and convert it to number.
// 3. Calculate average and total value-based to parsed numbers.
// 4. Replace `Calculate it!` with calculated average numbers in
// `span` with classes `average-population` and `total-population`.
// 5. Calculated `average` and `total` numbers must be separated
// by a [thousands separator]
// (https://chortle.ccsu.edu/java5/Notes/chap24B/ch24B_9.html)
// (same numeric style as populations presented).
// 6. Congrats, mate! You did it!

// write your code here

const spanCollection = document.querySelectorAll('.population');
const allData = [];
let finalNumbersData;

for (const number of spanCollection) {
  const textData = number.textContent;

  allData.push(textData);
  finalNumbersData = allData.map(num => Number(num.replace(/,/g, '')));
}

const total = finalNumbersData.reduce((sum, x) => sum + x, 0);
const average = total / finalNumbersData.length;

const totalValue = document.querySelector('.total-population');
const avrgValue = document.querySelector('.average-population');

totalValue.textContent = total.toLocaleString();
avrgValue.textContent = average.toLocaleString();
