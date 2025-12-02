// Додає до кожного виду спорту поле percentOfSuccess у вигляді рядка:
// "30.0%", "0.0%", "6.7%" і т.д.
// Окремий випадок: якщо athletes === 0 і medals === 0 → "0%".

function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map((item) => {
    let percentStr;

    // Особливий кейс: і спортсменів, і медалей 0
    if (item.athletes === 0 && item.medals === 0) {
      percentStr = '0%';
    } else {
      // Загальний випадок
      let percent = 0;

      if (item.athletes > 0) {
        percent = (item.medals / item.athletes) * 100;
      }

      // toFixed(1) → один знак після коми, додаємо знак '%'
      percentStr = percent.toFixed(1) + '%';
    }

    return {
      sport: item.sport,
      athletes: item.athletes,
      medals: item.medals,
      percentOfSuccess: percentStr,
    };
  });
}

module.exports = addSuccessPercent;
