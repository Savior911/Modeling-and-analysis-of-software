class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      // Додаємо елемент val до стеку
      this.stack.push(val);
  
      // Якщо стек пустий або поточний елемент менший за найнижчий елемент,
      // додаємо поточний елемент до стеку 
      if (this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      // Видаляємо елемент з верхньої частини стеку
      const val = this.stack.pop();
  
      // Якщо видалений елемент був також мінімальним елементом, видаляємо його зі стеку 
      if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      // Повертаємо елемент з верхньої частини стеку
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      // Повертаємо мінімальний елемент у стеку
      return this.minStack[this.minStack.length - 1];
    }
  }
  


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Виведе: -3
minStack.pop();
console.log(minStack.top());    // Виведе: 0
console.log(minStack.getMin()); // Виведе: -2
