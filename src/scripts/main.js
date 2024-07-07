const spanEl = [...document.querySelectorAll('.population')];
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const total = spanEl.reduce((accum, el) => {
  const textContent = el.innerHTML;
  const numericContent = textContent.replace(/[^\d]/g, '');
  const number = Number(numericContent);
  let acc = accum;

  acc += number;

  return acc;
}, 0);

const average = total / spanEl.length;

totalEl.innerHTML = total.toLocaleString('en-US');
averageEl.innerHTML = average.toLocaleString('en-US');
