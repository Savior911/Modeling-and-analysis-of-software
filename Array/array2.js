function countEvenDigits(nums) {
    // Зводимо змінну для зберігання кількості чисел з парною кількістю цифр
    let count = 0;
  
    // Проходимо по масиву
    for (let num of nums) {
      // Визначаємо, чи є кількість цифр у поточному числі парною
      let isEven = Number(num).toString().length % 2 === 0;
  
      // Якщо так, збільшуємо кількість
      if (isEven) {
        count++;
      }
    }
  
    // Повертаємо кількість чисел з парною кількістю цифр
    return count;
  }

  const arr1 = [12, 345, 2, 6, 7896];
  const arr2 = [555, 901, 482, 1771];

  console.log(countEvenDigits(arr1)); // 2
  console.log(countEvenDigits(arr2)); // 1
