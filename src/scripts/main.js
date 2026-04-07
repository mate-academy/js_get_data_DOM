'use strict';

const spaned = document.body.querySelector('span');
const pop = spaned.getElementsByClassName('population');
const clazz = document.getElementsByClassName('population');

let total = 0;
let i = 0;
Array.from(clazz).forEach(element => {
    const text = element.innerText;
    const num = Number(text.replace(/,/g, ''));
    total += num;
    i++;

});
const average = Math.floor(total / i);

const totalElement = document.querySelector('.total-population');
totalElement.innerText = total.toLocaleString();
const averageElement = document.querySelector('.average-population');
averageElement.innerText = average.toLocaleString();
