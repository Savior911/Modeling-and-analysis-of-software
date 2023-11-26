function isMountainArray(arr) {
    // Перевіряємо, чи має масив достатню довжину.
    if (arr.length < 3) {
      // Масив має бути не менше 3 елементів.
      return false;
    }
  
    // Знаходимо пік гірського масиву.
    // Індекс піку зберігається в змінній peakIndex.
    let peakIndex = 0;
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        // Знайшли пік.
        peakIndex = i;
        break;
      }
    }
  
    // Перевіряємо, чи є строге зростання перед піком.
    // Якщо хоч один з елементів перед піком не більше наступного елемента,
    // то масив не є дійсним гірським масивом.
    for (let i = 0; i < peakIndex; i++) {
      if (arr[i] >= arr[i + 1]) {
        // Масив не є дійсним гірським масивом.
        return false;
      }
    }
  
    // Перевіряємо, чи є строге спадання після піку.
    // Якщо хоч один з елементів після піку не менше наступного елемента,
    // то масив не є дійсним гірським масивом.
    for (let i = peakIndex; i < arr.length - 1; i++) {
      if (arr[i] <= arr[i + 1]) {
        // Масив не є дійсним гірським масивом.
        return false;
      }
    }
  
    // Масив є дійсним гірським масивом.
    return true;
  }

  const arr1 = [2, 1];
  const arr2 = [3, 5, 5];
  const arr3 = [0, 3, 2, 1];

  console.log(isMountainArray(arr1)); // false;
  console.log(isMountainArray(arr2)); // false
  console.log(isMountainArray(arr3)); // true
