'use strict';

let total = 0;
const elemSpan = document.querySelectorAll('.population');

elemSpan.forEach((x) => {
  total += Number(x.textContent.replaceAll(',', ''));
});

const average = (total / elemSpan.length).toFixed();

function numberWithCommas(x) {
  let y = x.toString();
  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(y)) {
    y = y.replace(pattern, '$1,$2');
  }

  return y;
}

const refs = {
  elemTotalPopulation: document.querySelector('.total-population'),
  elemAveragePopulation: document.querySelector('.average-population'),
};

refs.elemTotalPopulation.textContent = numberWithCommas(total);
refs.elemAveragePopulation.textContent = numberWithCommas(average);
