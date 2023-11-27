class MyCircularQueue {
    constructor(k) {
      // Ініціалізуємо об’єкт із розміром черги k
      this.size = k;
      // Масив для зберігання елементів черги
      this.queue = new Array(k).fill(null);
      // Початкові значення фронтального та заднього вказівників
      this.front = this.rear = -1;
    }
  
    // Отримує передній елемент черги
    Front() {
      return this.isEmpty() ? -1 : this.queue[this.front];
    }
  
    // Отримує останній елемент черги
    Rear() {
      return this.isEmpty() ? -1 : this.queue[this.rear];
    }
  
    // Вставляє елемент у циклічну чергу
    enQueue(value) {
      if (this.isFull()) {
        return false; // Черга заповнена
      }
  
      if (this.isEmpty()) {
        // Якщо черга порожня, ініціалізуємо фронт та задній вказівники
        this.front = this.rear = 0;
      } else {
        // Інакше переміщаємо задній вказівник
        this.rear = (this.rear + 1) % this.size;
      }
  
      // Додаємо елемент у чергу
      this.queue[this.rear] = value;
      return true;
    }
  
    // Видаляє елемент із циклічної черги
    deQueue() {
      if (this.isEmpty()) {
        return false; // Черга порожня
      }
  
      if (this.front === this.rear) {
        // Якщо єдиний елемент у черзі, знуляємо фронт та задній вказівники
        this.front = this.rear = -1;
      } else {
        // Інакше переміщаємо фронтальний вказівник
        this.front = (this.front + 1) % this.size;
      }
  
      return true;
    }
  
    // Перевіряє, чи черга порожня
    isEmpty() {
      return this.front === -1 && this.rear === -1;
    }
  
    // Перевіряє, чи черга заповнена
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  }
  
  const myCircularQueue = new MyCircularQueue(3);
  console.log(myCircularQueue.enQueue(1)); // Вивід: true
  console.log(myCircularQueue.enQueue(2)); // Вивід: true
  console.log(myCircularQueue.enQueue(3)); // Вивід: true
  console.log(myCircularQueue.enQueue(4)); // Вивід: false
  console.log(myCircularQueue.Rear());      // Вивід: 3
  console.log(myCircularQueue.isFull());    // Вивід: true
  console.log(myCircularQueue.deQueue());   // Вивід: true
  console.log(myCircularQueue.enQueue(4)); // Вивід: true
  console.log(myCircularQueue.Rear());      // Вивід: 4
  