function duplicateZeros(arr) {
    // Створюємо новий масив для зберігання результату
    let result = new Array(arr.length);
  
    // Проходимо по масиву
    for (let i = 0; i < arr.length; i++) {
      // Якщо поточний елемент є нулем
      if (arr[i] === 0) {
        // Додаємо два нуля до нового масиву
        result.push(0, 0);
      } else {
        // Додаємо поточний елемент до нового масиву
        result.push(arr[i]);
      }
    }
  
    // Повертаємо новий масив
    return result;
  }
  

  const arr1 = [ 1, 0, 2, 3, 0, 4, 5, 0];
  const arr2 = [ 1, 2, 3];

  console.log(duplicateZeros(arr1)); // [ 1, 0, 0, 2, 3, 0, 0, 4]
  console.log(duplicateZeros(arr2)); // [ 1, 2, 3]

  