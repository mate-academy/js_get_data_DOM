'use strict';

let total = 0;
let average = 0;
const items = document.querySelectorAll('.population');

function toThousands(number) {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

for (const node of [...items]) {
  total += Number(node.innerText.split(',').join(''));
}

average = total / [...items].length;

document.querySelector('.total-population').innerText = toThousands(total);
document.querySelector('.average-population').innerText = toThousands(average);
