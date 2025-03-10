const populations = Array.from(
  document.querySelectorAll('span.population'),
).map((span) => span.textContent.trim());

function getNumber(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(Number(array[i].replace(/,/g, '')));
  }

  return result;
}

const numbers = getNumber(populations);
const sum = numbers.reduce((total, number) => total + number, 0);
const avg = Math.round(sum / numbers.length);

const formattedS = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const formattedA = avg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const toatlP = document.querySelector('span.total-population');

toatlP.textContent = formattedS;

const avgP = document.querySelector('span.average-population');

avgP.textContent = formattedA;
