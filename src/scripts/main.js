'use strict';

// write your code here

const collection = [...document.querySelectorAll('.population')];
const strings = collection.map(x => x.innerText);
const numbers = strings.map(x => +x.replace(/,/g, ''));
const total = numbers.reduce((a, b) => a + b, 0);
const totalWithCommas = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const average = (total / numbers.length).toString();
const averageWithCommas = average.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').innerText = totalWithCommas;
document.querySelector('.average-population').innerText = averageWithCommas;
