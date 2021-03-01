'use strict';

const searchedClass = document.querySelectorAll('.population');
const elements = [...searchedClass].map(element =>
  Number(element.innerText.replaceAll(',', '')));

const total = elements.reduce((sum, element) => sum + element);
const average = total / elements.length;

document.querySelector('.total-population').innerText = total.toLocaleString();

document.querySelector('.average-population')
  .innerText = average.toLocaleString();
