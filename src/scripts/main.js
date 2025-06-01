'use strict';

const population = document.getElementsByClassName('population');
const averageElement = document.getElementsByClassName('average-population')[0];
const totalElement = document.getElementsByClassName('total-population')[0];
const array = [];

for (const country of population) {
  array.push(
    country.innerHTML
      .split('')
      .filter((e) => e !== ',')
      .join(''),
  );
}

let total = array.reduce((prev, elem) => prev + Number(elem), 0);
let average = Math.round(total / array.length);
const result = [total, average];

const processedValues = result.map((number) => {
  let str = number.toString();

  for (let i = str.length - 3; i > 0; i -= 3) {
    const arr = str.split('');

    arr.splice(i, 0, ',');
    str = arr.join('');
  }

  return str;
});

total = processedValues[0];
average = processedValues[1];

totalElement.innerHTML = total;
averageElement.innerHTML = average;
