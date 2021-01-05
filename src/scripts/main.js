'use strict';

// debugger;

// write your code here
const popAtrs = document.querySelectorAll('[class="population"]');
const popTexts = [...popAtrs].map(item => +item.innerText.replace(/,/g, ''));

const total = (popTexts.reduce((sum, num) => sum + num, 0));
const average = (total / popTexts.length);

const classTotalPop = document.querySelector('.total-population');

classTotalPop.innerText = total.toLocaleString();

const classAveragePop = document.querySelector('.average-population');

classAveragePop.innerText = average.toLocaleString();
