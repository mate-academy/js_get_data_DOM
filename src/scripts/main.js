'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationArray = document.querySelectorAll('.population');

  if (!populationArray.length) {
    return;
  }

  let totalAmount = 0;
  let validCount = 0;

  // --- Detect grouping character from any entry ---
  const groupingCandidates = [',', '.', ' ', '\u00A0', '\u202F'];
  let detectedGroupChar = null;

  for (const el of populationArray) {
    const text = el.textContent;
    const found = groupingCandidates.find((char) => text.includes(char));

    if (found) {
      detectedGroupChar = found;
      break;
    }
  }

  // --- Parse numbers robustly ---
  populationArray.forEach((node) => {
    const raw = node.textContent;
    const clean = raw.replace(/[^0-9.-]/g, '');
    const value = Number(clean);

    if (Number.isFinite(value)) {
      totalAmount += value;
      validCount++;
    }
  });

  const averageAmount = validCount > 0 ? totalAmount / validCount : 0;

  const formatNumber = (num) => {
    if (!detectedGroupChar) {
      return num.toLocaleString('en-US', { useGrouping: false });
    }

    const formatted = num.toLocaleString('en-US');
    let grouped = formatted.replace(/,/g, detectedGroupChar);

    if (detectedGroupChar === '\u00A0') {
      grouped = grouped.replace(/,/g, '\u00A0');
    } else if (detectedGroupChar === '\u202F') {
      grouped = grouped.replace(/,/g, '\u202F');
    }

    return grouped;
  };

  const formattedTotal = formatNumber(totalAmount);
  const formattedAverage = formatNumber(averageAmount);

  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = formattedTotal;
  }

  if (avgEl) {
    avgEl.textContent = formattedAverage;
  }
});
