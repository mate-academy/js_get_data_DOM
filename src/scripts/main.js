'use strict';

const population = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const total = [...population].reduce((sum, el) => {
  const numbers = el.innerText.split(',').join('');

  return sum + Number(numbers);
}, 0);

totalEl.innerText = total.toLocaleString();
averageEl.innerText = (total / population.length).toLocaleString();
