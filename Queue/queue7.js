function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Двійкова купа (дек) для зберігання індексів елементів у вікні

    // Функція для додавання індексу до деку, з урахуванням того, що вікно рухається праворуч
    function addToDeque(index) {
        while (deque.length > 0 && nums[index] > nums[deque[deque.length - 1]]) {
            deque.pop(); // Видаляємо менші елементи з кінця деку
        }
        deque.push(index);
    }

    // Ітеруємося по масиву
    for (let i = 0; i < nums.length; i++) {
        // Додаємо індекс поточного елемента до деку
        addToDeque(i);

        // Перевіряємо, чи перший елемент у вікні вийшов за межі поточного вікна
        if (deque[0] < i - k + 1) {
            deque.shift(); // Видаляємо перший елемент з початку деку
        }

        // Перший елемент у деку завжди максимальний у поточному вікні
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Приклад використання функції
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Вивід: [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // Вивід: [1]
