class MyStack {
    constructor() {
      // Створюємо дві порожні черги
      this.queue1 = [];
      this.queue2 = [];
    }
  
    // Метод для розміщення елементу на вершину стека
    push(x) {
      // Додаємо елемент до однієї з черг (в даному випадку queue1)
      this.queue1.push(x);
    }
  
    // Метод для вилучення елементу у верхній частині стека та повернення його
    pop() {
      // Переносимо всі елементи, крім останнього, з queue1 в queue2
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Останній елемент в queue1 - це той, який потрібно вилучити
      const removedElement = this.queue1.shift();
  
      // Перевертаємо черги, щоб queue2 стала основною чергою для майбутніх операцій
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return removedElement;
    }
  
    // Метод для отримання елементу у верхній частині стека
    top() {
      // Аналогічно до pop, переносимо всі елементи, крім останнього, з queue1 в queue2
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Останній елемент в queue1 - це той, який потрібно повернути, але не вилучати
      const topElement = this.queue1[0];
  
      // Перевертаємо черги, щоб queue2 стала основною чергою для майбутніх операцій
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return topElement;
    }
  
    // Метод для перевірки, чи стек порожній
    empty() {
      // Стек порожній, якщо обидві черги порожні
      return this.queue1.length === 0 && this.queue2.length === 0;
    }
  }
  
  const myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  console.log(myStack.top());   // Вивід: 2
  console.log(myStack.pop());   // Вивід: 2
  console.log(myStack.empty()); // Вивід: false
  