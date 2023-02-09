'use strict';

const count = document.querySelectorAll('.population');
const countMassive
  = [...count].map(item => +item.innerText.replaceAll(',', ''));

const totalCount = document.querySelector('.total-population');
const averageCount = document.querySelector('.average-population');

const total = countMassive.reduce((sum, num) => sum + num);

totalCount.innerHTML = total.toLocaleString('en');
averageCount.innerHTML
  = (total / countMassive.length).toLocaleString('en');
