'use strict';

const clazz = document.getElementsByClassName('population');

let total = 0;

Array.from(clazz).forEach((element) => {
  const text = element.innerText;
  const num = Number(text.replace(/,/g, ''));

  total += num;
});

const average = Math.floor(total / clazz.length);

const totalElement = document.querySelector('.total-population');

totalElement.innerText = total.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.innerText = average.toLocaleString();
