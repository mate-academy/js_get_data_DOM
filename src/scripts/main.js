'use strict';

const allLi = document.getElementsByClassName('population');

const totalResult = [...allLi].reduce((sum, el) => {
  const textNumber = el.innerText.split(',').join('');

  return sum + (+textNumber);
}, 0);

const total = document.querySelector('.total-population');

total.textContent = totalResult.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.textContent = (totalResult / allLi.length).toLocaleString('en-US');
