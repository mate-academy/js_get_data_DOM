'use strict';

const span = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const newArr = span.map((el) => +el.innerHTML.split(',').join(''));

const sum = newArr.reduce((text, text2) => text + text2, 0);
const average = sum / newArr.length;

function formatKey(key) {
  const editKey = String(key);
  const firstPart = editKey.length % 3;
  let result = '';

  if (firstPart > 0) {
    result += editKey.slice(0, firstPart) + ',';
  }

  for (let i = firstPart; i < editKey.length; i += 3) {
    result += editKey.slice(i, i + 3) + ',';
  }

  return result.slice(0, -1);
}

totalPopulation.innerHTML = formatKey(sum);
averagePopulation.innerHTML = formatKey(Math.round(average));
