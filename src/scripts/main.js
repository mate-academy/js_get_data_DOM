'use strict';

const population = document.querySelectorAll('.population');
const populat = [...population];

const numb = populat.map((span) => Number(span.textContent.replace(/\D/g, '')));
const totalNumb = numb.filter((num) => !isNaN(num) && num !== 0);

if (totalNumb.length > 0) {
  const average = totalNumb.reduce((sum, num) => sum + num, 0);

  const rezult = Math.round(average / totalNumb.length).toLocaleString();

  const averageSpan = document.querySelector('.average-population');

  if (averageSpan) {
    averageSpan.textContent = rezult;
  }

  const totalSpan = document.querySelector('.total-population');

  if (totalSpan) {
    totalSpan.textContent = average.toLocaleString();
  }
}
