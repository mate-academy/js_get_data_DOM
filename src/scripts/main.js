'use strict';

// write your code here
const elements = [...document.querySelectorAll('.population')];

const totalPop = elements.reduce((total, el) => {
  const text = el.textContent.trim();

  let s = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ',' && text[i] !== ' ') {
      s += text[i];
    }
  }

  const n = Number(s);

  if (!isNaN(n)) {
    return total + n;
  } else {
    return total;
  }
}, 0);

const averagePop = Math.round(totalPop / elements.length);

const newTotalPop = new Intl.NumberFormat('en-US').format(totalPop);
const newAveragePop = new Intl.NumberFormat('en-US').format(averagePop);

document.querySelector('.total-population').textContent = newTotalPop;
document.querySelector('.average-population').textContent = newAveragePop;
