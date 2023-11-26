function removeDuplicates(nums) {
    // Початок індексу унікальних елементів
    let uniqueIndex = 0;
  
    // Проходимо по масиву
    for (let i = 1; i < nums.length; i++) {
      // Якщо поточний елемент не є дублікатом
      if (nums[i] !== nums[uniqueIndex]) {
        // Зсув унікальних елементів на один індекс вправо
        nums[++uniqueIndex] = nums[i];
      }
    }
  
    // Повертаємо кількість унікальних елементів
    return uniqueIndex + 1;
  }

  const arr1 = [ 1, 1, 2 ];
  const arr2 = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];  
  console.log(removeDuplicates(arr1)); // 2, nums1 = [ 1, 2, _ ]
  console.log(removeDuplicates(arr2)); // 5, nums2 = [ 0, 1, 2, 3, 4, _, _, _, _, _]
