const populationSpans = document.querySelectorAll('span.population');

const populationNumbers = Array.from(populationSpans)
  .map((span) => {
    const text = span.textContent.trim();
    const number = Number(text.replace(/[^0-9.-]+/g, ''));

    return isNaN(number) ? null : number;
  })
  .filter((num) => num !== null);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populationNumbers.length;

const formatter = new Intl.NumberFormat();
const formattedTotal = formatter.format(total);
const formattedAverage = formatter.format(average);

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = formattedAverage;
}

if (totalSpan) {
  totalSpan.textContent = formattedTotal;
}
