class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    push(x) {
      // Переміщуємо всі елементи зі стеку 2 до стеку 1
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
      }
  
      // Додаємо новий елемент до стеку 2
      this.stack2.push(x);
    }
  
    pop() {
      // Якщо стек 1 порожній, переміщуємо всі елементи зі стеку 2 до стеку 1
      if (this.stack1.length === 0) {
        while (this.stack2.length) {
          this.stack1.push(this.stack2.pop());
        }
      }
  
      // Видаляємо елемент з верхньої частини стеку 1
      return this.stack1.pop();
    }
  
    peek() {
      // Якщо стек 1 порожній, переміщуємо всі елементи зі стеку 2 до стеку 1
      if (this.stack1.length === 0) {
        while (this.stack2.length) {
          this.stack1.push(this.stack2.pop());
        }
      }
  
      // Повертаємо елемент з верхньої частини стеку 1
      return this.stack1[this.stack1.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  

const myQueue = new MyQueue();

myQueue.push(1); // черга: [1]
myQueue.push(2); // черга: [1, 2] 
console.log(myQueue.peek()); // 1
console.log(myQueue.pop()); // 1, черга [2]
console.log(myQueue.empty()); // false
