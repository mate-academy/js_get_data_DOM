'use strict';

// write your code here
const countriesPopulation = document.querySelectorAll('.population');
let total = [...countriesPopulation]
  .map(item => +item.textContent.replace(/,/g, ''))
  .reduce((a, b) => a + b);

let average = total / countriesPopulation.length;

function formatText(number) {
  const result = number.toString().split('');

  for (let a = result.length - 4; a >= 0; a -= 3) {
    result[a] = result[a] + ',';
  }

  return result.join('');
}
total = formatText(total);
average = formatText(average);

document.querySelector('.total').textContent = `Total: ${total}`;
document.querySelector('.average').textContent = `Average: ${average}`;
