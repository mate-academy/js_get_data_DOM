const getNumber = (span) => {
  let text = span.textContent
    .replace(/\u00A0/g, ' ') 
    .replace(/[^\d.,+-]/g, ''); 

  text = text.trim();

  if (!text || /^[+-.]$/.test(text)) {
    return null;
  }

  const number = Number(text.replace(',', '.'));

  return isNaN(number) ? null : number;
};

// Funkcja do formatowania liczby 
const formatNum = (n, sample) => {
  const sep = sample.match(/[\s,.](?=\d{3})/)?.[0] || ',';
  const nf = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    useGrouping: true,
  });

  return nf.format(n).replace(/,/g, sep);
};

// Pobierz wszystkie elementy z klasą "population"
const spans = document.querySelectorAll('.population');

// Konwertuj wartości tekstowe na liczby
const nums = Array.from(spans)
  .map(getNumber)
  .filter((n) => n !== null);

// Oblicz sumę i średnią
const total = nums.reduce((a, b) => a + b, 0);
const avg = nums.length ? total / nums.length : 0;

// Ustal przykład separatora z pierwszej wartości
const firstText = spans.length > 0 ? spans[0].textContent : '';

// Znajdź elementy, do których wpiszemy wyniki
const totalSpan = document.querySelector('.total-population');
const avgSpan = document.querySelector('.average-population');

// Wstaw obliczone wartości do HTML
if (totalSpan) {
  totalSpan.textContent = formatNum(total, firstText);
}

if (avgSpan) {
  avgSpan.textContent = formatNum(avg, firstText);
}


