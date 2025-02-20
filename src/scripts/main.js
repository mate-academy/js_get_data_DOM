'use strict';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// write your code here
function main() {
  const doc = document.documentElement;
  let popul = [...doc.getElementsByClassName('population')];

  popul = popul.map((elem) => elem.innerHTML.split(',').join(''));

  const total = popul.reduce((prev, elem) => +elem + prev, 0);
  const average = Math.floor(total / popul.length);

  const totalPopulEl = doc.getElementsByClassName('total-population')[0];
  const avgPopulEl = doc.getElementsByClassName('average-population')[0];

  totalPopulEl.innerText = numberWithCommas(total);
  avgPopulEl.innerText = numberWithCommas(average);
}

main();
