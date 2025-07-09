const allPopulationSpan = document.querySelectorAll('span.population');
const arr = [];

allPopulationSpan.forEach(function (e) {
  const spanPop = e.textContent;
  const text = Number(spanPop.replace(/,/g, ''));

  arr.push(text);
});

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

const avg = sum / arr.length;
const roundAvg = Math.round(avg);

document.querySelector('.total-population').innerHTML =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  roundAvg.toLocaleString('en-US');
