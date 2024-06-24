'use strict';
const populationItems = document.querySelectorAll('.population');
const averagePopulationItem = document.querySelector('.average-population');
const totalPopulationItem = document.querySelector('.total-population');
const populationData = [];

populationItems.forEach(item => populationData.push(item.textContent));

function parseNumber(str) {
    return parseInt(str.replace(/,/g, ''), 10);
}

const populationNumbers = populationData.map(parseNumber);
const totalNum = populationNumbers.reduce((num, sum) => num + sum, 0);
const averageNum = totalNum / populationNumbers.length;

totalPopulationItem.textContent = totalNum.toLocaleString('en-US');
averagePopulationItem.textContent = averageNum.toLocaleString('en-US');
