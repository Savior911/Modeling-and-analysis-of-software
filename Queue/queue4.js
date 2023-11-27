class MyCircularDeque {
    constructor(k) {
      // Максимальний розмір deque
      this.maxSize = k;
      // Масив для зберігання елементів deque
      this.deque = [];
    }
  
    // Метод для додавання елемента на початок deque
    insertFront(value) {
      if (this.isFull()) {
        return false; // Двочерга заповнена
      }
  
      // Додаємо елемент на початок deque
      this.deque.unshift(value);
      return true;
    }
  
    // Метод для додавання елемента у задню частину deque
    insertLast(value) {
      if (this.isFull()) {
        return false; // Двочерга заповнена
      }
  
      // Додаємо елемент у задню частину deque
      this.deque.push(value);
      return true;
    }
  
    // Метод для видалення елемента з початку deque
    deleteFront() {
      if (this.isEmpty()) {
        return false; // Двочерга порожня
      }
  
      // Видаляємо елемент з початку deque
      this.deque.shift();
      return true;
    }
  
    // Метод для видалення елемента з задньої частини deque
    deleteLast() {
      if (this.isEmpty()) {
        return false; // Двочерга порожня
      }
  
      // Видаляємо елемент з задньої частини deque
      this.deque.pop();
      return true;
    }
  
    // Метод для отримання переднього елемента deque
    getFront() {
      return this.isEmpty() ? -1 : this.deque[0];
    }
  
    // Метод для отримання заднього елемента deque
    getRear() {
      return this.isEmpty() ? -1 : this.deque[this.deque.length - 1];
    }
  
    // Метод для перевірки, чи deque порожня
    isEmpty() {
      return this.deque.length === 0;
    }
  
    // Метод для перевірки, чи deque заповнена
    isFull() {
      return this.deque.length === this.maxSize;
    }
  }
  

  const myCircularDeque = new MyCircularDeque(3);
  console.log(myCircularDeque.insertLast(1));     // Вивід: true
  console.log(myCircularDeque.insertLast(2));     // Вивід: true
  console.log(myCircularDeque.insertFront(3));    // Вивід: true
  console.log(myCircularDeque.insertFront(4));    // Вивід: false
  console.log(myCircularDeque.getRear());          // Вивід: 2
  console.log(myCircularDeque.isFull());          // Вивід: true
  console.log(myCircularDeque.deleteLast());      // Вивід: true
  console.log(myCircularDeque.insertFront(4));    // Вивід: true
  console.log(myCircularDeque.getFront());         // Вивід: 4
  