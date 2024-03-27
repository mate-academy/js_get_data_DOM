'use strict';

const collection = document.getElementsByClassName('population');

const totalPopulation = [].map
  .call(collection, (item) => +item.textContent.replaceAll(',', ''))
  .reduce((a, b) => a + b, 0);

document.getElementsByClassName('average-population')[0].textContent = (
  totalPopulation / collection.length
).toLocaleString('en-US');

document.getElementsByClassName('total-population')[0].textContent =
  totalPopulation.toLocaleString('en-US');
