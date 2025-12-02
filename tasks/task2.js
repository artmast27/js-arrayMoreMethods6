// Функція отримує масив товарів і повертає всі товари, які мають
// ціну поза діапазоном [100, 500] (менше 100 або більше 500).
// ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, але БЕЗ reduce.

// Приклад масиву (для перевірки в console.log)
const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 },
];

function getProductsNotInPriceRange(products) {
  // беремо товари, чия ціна МЕНШЕ 100 або БІЛЬШЕ 500
  return products
    .filter((item) => item.price < 100 || item.price > 500)
    .map((item) => item.name);
}

console.log(getProductsNotInPriceRange(products));

module.exports = getProductsNotInPriceRange;
