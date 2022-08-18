'use strict';

const populationTags = document.querySelectorAll('.population');
const populationArray = [...populationTags].map(currCount =>
  Number(currCount.textContent.replaceAll(',', '')));

const totalCount = populationArray.reduce((prev, current) => prev + current);
const averageCount = totalCount / populationArray.length;

const totalTag = document.querySelector('.total-population');
const averageTag = document.querySelector('.average-population');

totalTag.textContent = totalCount.toLocaleString('en');
averageTag.textContent = averageCount.toLocaleString('en');
