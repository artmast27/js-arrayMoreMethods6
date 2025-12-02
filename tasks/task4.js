// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з брендом,
// моделлю та витратою палива (fuelConsumption).
// Завдання – перевірити, чи всі машини в масиві мають витрату палива
// МЕНШЕ 6 л/100 км. Якщо ні — повертаємо порожній масив.
// Якщо так – фільтруємо машини по бренду і повертаємо ті, що
// мають найменшу витрату, відсортовані за fuelConsumption за зростанням.

function getMostFuelEfficientCars(cars, brand) {
  if (!Array.isArray(cars) || cars.length === 0) {
    return [];
  }

  // Перевіряємо, що ВСІ машини мають витрату МЕНШЕ 6 л/100 км
  const allBelowSix = cars.every(
    (car) => typeof car.fuelConsumption === 'number' && car.fuelConsumption < 6
  );

  if (!allBelowSix) {
    // Якщо хоча б одна машина має витрату >= 6, повертаємо порожній масив
    return [];
  }

  // Фільтруємо машини по бренду
  const filteredByBrand = cars.filter((car) => car.brand === brand);

  // Сортуємо за витратою палива по зростанню
  filteredByBrand.sort((a, b) => a.fuelConsumption - b.fuelConsumption);

  return filteredByBrand;
}

module.exports = getMostFuelEfficientCars;
