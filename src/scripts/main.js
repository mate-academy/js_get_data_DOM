'use strict';

const collection = document.getElementsByClassName("population");

let total = 0;

for (const country of collection) {
  total += Number(country.textContent.split(',').join(''));
}

const average = total / collection.length;

const totalElement = document.getElementsByClassName("total-population");

totalElement[0].textContent = total.toLocaleString('en-US');

const averageElement = document.getElementsByClassName("average-population");

averageElement[0].textContent = average.toLocaleString('en-US');
