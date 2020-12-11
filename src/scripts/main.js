'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationsElems = document.getElementsByClassName('population');

  const populations = Array.prototype.map.call(populationsElems, (elem) => {
    return parseInt(elem.innerText.replaceAll(',', ''));
  });

  const total = populations.reduce((added, curr) => added + curr);
  const average = total / populations.length;

  document.querySelector('.total-population').innerText = total;
  document.querySelector('.average-population').innerText = average;
});
