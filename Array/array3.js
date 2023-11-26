function squares(nums) {
    // Створюємо новий масив для зберігання квадратів
    let squares = new Array(nums.length);
  
    // Проходимо по масиву nums
    for (let i = 0; i < nums.length; i++) {
      // Обчислюємо квадрат поточного числа
      squares[i] = nums[i] * nums[i];
    }
  
    // Відсортовуємо новий масив за неспаданням
    squares.sort((a, b) => a - b);
  
    // Повертаємо новий масив
    return squares;
  }
  
  const arr1 = [ -4, -1, 0, 3, 10];
  const arr2 = [ -7, -3, 2, 3, 11];
  
  console.log(squares(arr1)); // [ 0, 1, 9, 16, 100]
  console.log(squares(arr2)); // [ 4, 9, 9, 49, 121]
  