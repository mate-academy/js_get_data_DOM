'use strict';

document.querySelector('.total-population')
  .innerHTML = String([...document.querySelectorAll('.population')]
    .map(pop => pop.textContent.split(',').join(''))
    .reduce((sum, pop) => sum + +pop, 0)).split('')
    .map((elem, i, arr) => ((arr.length - 1 - i) % 3 === 0 && i < arr
      .length - 1) ? `${elem},` : elem).join('');

document.querySelector('.average-population')
  .innerHTML = String([...document.querySelectorAll('.population')]
    .map(pop => pop.textContent.split(',').join(''))
    .reduce((sum, pop) => sum + +pop, 0) / document
    .querySelectorAll('.population').length).split('')
    .map((elem, i, arr) => ((arr.length - 1 - i) % 3 === 0 && i < arr
      .length - 1) ? `${elem},` : elem).join('');
