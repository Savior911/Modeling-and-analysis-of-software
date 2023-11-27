class RecentCounter {
    constructor() {
      // Лічильник останніх запитів
      this.requests = [];
    }
  
    // Метод для додавання нового запиту і повернення кількості запитів за останні 3000 мілісекунд
    ping(t) {
      // Додаємо новий запит до масиву
      this.requests.push(t);
  
      // Видаляємо всі запити, які відбулися більше 3000 мілісекунд тому
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      // Повертаємо кількість залишених запитів
      return this.requests.length;
    }
  }
  
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));    // Вивід: 1
  console.log(recentCounter.ping(100));  // Вивід: 2
  console.log(recentCounter.ping(3001)); // Вивід: 3
  console.log(recentCounter.ping(3002)); // Вивід: 3
  