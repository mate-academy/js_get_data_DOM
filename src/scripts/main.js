const populationOf = document.querySelectorAll('.population');

const rawValues = Array.from(populationOf).map((el) => el.textContent.trim());

function detectSeparator(str) {
  if (str.includes(',')) return ',';
  if (str.includes(' ')) return ' ';
  if (str.includes('.')) return '.';
  return '';
}
const sample = rawValues.find((v) => /\d/.test(v)) || '';
const separator = detectSeparator(sample);

const arrayOfPopulation = rawValues
  .map((str) => Number(separator ? str.replaceAll(separator, '') : str))
  .filter(Number.isFinite);

let total = 0;
let avg = 0;
if (arrayOfPopulation.length > 0) {
  total = arrayOfPopulation.reduce((sum, curr) => sum + curr, 0);
  avg = total / arrayOfPopulation.length;
}

function formatNumber(num, sep) {
  if (!sep) return String(num);
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

const formattedTotal = formatNumber(total, separator);
const formattedAvg = formatNumber(avg.toFixed(2), separator);

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAvg;
