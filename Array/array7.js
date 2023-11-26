function containsPairWithDouble(arr) {
    // Перевіряємо, чи є хоч один елемент, який є подвоєним іншим елементом
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // Якщо i != j && arr[i] == 2 * arr[j]
        if (i !== j && arr[i] === 2 * arr[j]) {
          // Повертаємо true
          return true;
        }
      }
    }
  
    // Повертаємо false
    return false;
  }
  
  const arr1 = [10, 2, 5, 3];
  const arr2 = [3, 1, 7, 11];
  console.log(containsPairWithDouble(arr1)); // true
  console.log(containsPairWithDouble(arr2)); // false
