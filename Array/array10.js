function sortByPar(nums) {
    // Створюємо два порожніх масиву
    const even = [];
    const odd = [];
  
    // Проходимо по масивові nums, додаючи парні числа до even, а непарні числа до odd
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        even.push(nums[i]);
      } else {
        odd.push(nums[i]);
      }
    }
  
    // З'єднуємо два масиву в один
    const sorted = even.concat(odd);
  
    // Повертаємо відсортовану версію масиву
    return sorted;

  }
  const nums1 = [3, 1, 2, 4];
  const nums2 = [0];
  console.log(sortByPar(nums1)); // [ 2, 4, 3, 1]
  console.log(sortByPar(nums2)); // [0]
