// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії.
// Спочатку фільтруємо товари, які продані більше 5 разів,
// потім сортуємо їх за кількістю продажів за спаданням,
// а потім залишаємо тільки унікальні категорії товарів.
//
// ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort.

function getPopularCategories(products) {
  // 1. Товари, продані більше 5 разів
  const popularProducts = products.filter((product) => product.sales > 5);

  // 2. Сортуємо за спаданням по sales
  const sortedBySalesDesc = popularProducts.sort(
    (a, b) => b.sales - a.sales
  );

  // 3. Беремо масив категорій
  const categories = sortedBySalesDesc.map((product) => product.category);

  // 4. Залишаємо тільки унікальні категорії
  const uniqueCategories = categories.filter((category, index, arr) => {
    return arr.indexOf(category) === index;
  });

  return uniqueCategories;
}

// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']

module.exports = getPopularCategories;
