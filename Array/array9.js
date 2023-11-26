function replaceWithMaxRight(arr) {
    // Починаємо з останнього елемента
    for (let i = arr.length - 1; i >= 0; i--) {
      // Знаходимо найбільший елемент з правого боку
      let maxRight = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > maxRight) {
          maxRight = arr[j];
        }
      }
  
      // Замінюємо поточний елемент на найбільший елемент з правого боку
      arr[i] = maxRight;
    }
  
    // Замінюємо останній елемент на -1
    arr[arr.length - 1] = -1;
  
    // Повертаємо масив
    return arr;
  }

  const arr1 = [17, 18, 5, 4, 6, 1];
  const arr2 = [400];
  console.log(replaceWithMaxRight(arr1)); // [ 18, 6, 6, 6, 1, -1]
  console.log(replaceWithMaxRight(arr2)); // [ -1 ]
  
  
  