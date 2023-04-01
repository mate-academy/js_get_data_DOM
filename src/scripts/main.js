'use strict';

const allSelectors = document.querySelectorAll('.population');

let allData = [ ...allSelectors ].map(el => el.innerHTML);

allData = allData.map(el => +el.split(',').join(''));

const totalValue = allData.reduce((prev, current) => prev + current);

const averageValue = totalValue / allData.length;

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

total.innerHTML = totalValue;
average.innerHTML = averageValue;
