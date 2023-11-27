// Функція для знаходження максимальної суми підпослідовності
function maxSumSubsequence(nums, k) {
    const n = nums.length;
  
    // Створення черги для зберігання індексів елементів масиву
    const queue = [];
  
    // Змінна для зберігання максимальної суми підпослідовності
    let maxSum = 0;
  
    // Прохід по елементах масиву
    for (let i = 0; i < n; i++) {
      // Видаляємо з черги індекси, які вже не відповідають умові j - i <= k
      while (queue.length > 0 && i - queue[0] > k) {
        queue.shift();
      }
  
      // Оновлюємо максимальну суму
      maxSum = Math.max(maxSum, nums[i] + (queue.length > 0 ? nums[queue[0]] : 0));
  
      // Видаляємо з черги елементи, які менші за поточний елемент nums[i]
      while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
      }
  
      // Додаємо поточний індекс до черги
      queue.push(i);
    }
  
    // Повертаємо максимальну суму підпослідовності
    return maxSum;
  }
  
  const example1 = maxSumSubsequence([10, 2, -10, 5, 20], 2);
  console.log("Output:", example1); // Вивід: 25
  
  const example2 = maxSumSubsequence([-1, -2, -3], 1);
  console.log("Output:", example2); // Вивід: 0
  
  const example3 = maxSumSubsequence([10, -2, -10, -5, 20], 2);
  console.log("Output:", example3); // Вивід: 15
  