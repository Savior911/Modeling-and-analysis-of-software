function mergeSortedArrays(nums1, m, nums2, n) {
    // Перевіряємо, чи дійсно m і n є довжинами масивів nums1 і nums2 відповідно
    if (m !== nums1.length - n || n !== nums2.length) {
      throw new Error("Невідповідні довжини масивів");
    }
  
    // Починаємо з першого елементу в кожному масиві
    let i = 0;
    let j = 0;
  
    // Поки не досягнемо кінця одного з масивів
    while (i < m && j < n) {
      // Якщо поточний елемент з nums1 менший або дорівнює поточному елементу з nums2
      if (nums1[i] <= nums2[j]) {
        // Додаємо поточний елемент з nums1 до nums1
        nums1[i + j] = nums1[i++];
      } else {
        // Додаємо поточний елемент з nums2 до nums1
        nums1[i + j] = nums2[j++];
      }
    }
  
    // Додаємо залишки з nums1
    while (i < m) {
      nums1[i + j] = nums1[i++];
    }
  
    // Додаємо залишки з nums2
    while (j < n) {
      nums1[i + j] = nums2[j++];
    }
  }
  
  const arr1 = [ 1, 2, 3, 0, 0, 0];
  const m = 3;
  const arr2 = [ 2, 5, 6];
  const n = 3;

  mergeSortedArrays(arr1, m, arr2, n);

  console.log(arr1); // [ 1, 2, 2, 3, 5, 6]
