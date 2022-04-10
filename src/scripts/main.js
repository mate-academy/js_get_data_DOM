'use strict';

const textDataList = document.querySelectorAll('.population');
const textList = [ ...textDataList ].map(item => item.innerText);
const numbersList = textList.map(item => +item.split(',').join(''));

let totalValue = numbersList.reduce((a, b) => a + b, 0);
let averageValue = totalValue / numbersList.length;

totalValue = totalValue.toLocaleString('en-US');
averageValue = averageValue.toLocaleString('en-US');

document.querySelector('.total-population').innerText = totalValue;
document.querySelector('.average-population').innerText = averageValue;
