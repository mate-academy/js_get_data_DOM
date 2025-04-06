'use strict';

'use strict';

const span = document.querySelectorAll('.population');
const result = [];

for (const char of span) {
  const num = +char.innerText.split(',').join('');

  result.push(num);
}

let sum = 0;

for (let i = 0; i < result.length; i++) {
  sum += result[i];
}

const hass = sum.toLocaleString();
const average = Math.round(sum / result.length).toLocaleString();

document.querySelector('.total-population').textContent = hass;
document.querySelector('.average-population').textContent = average;
