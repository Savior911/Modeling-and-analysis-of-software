class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function hasCycle(head) {
    // Якщо список порожній, то він не має циклу
    if (!head) {
      return false;
    }
  
    // Створюємо два вказівники, які будуть використовуватися для просування по списку
    let slow = head;
    let fast = head.next;
  
    // Переходимо по списку, поки швидкий вказівник не досягне кінця або не зустріне повільний вказівник
    while (fast && fast.next) {
      // Переміщаємо повільний вказівник на один крок
      slow = slow.next;
  
      // Переміщаємо швидкий вказівник на два кроки
      fast = fast.next.next;
  
      // Якщо швидкий вказівник наздоганяє повільний вказівник, то в списку є цикл
      if (slow === fast) {
        return true;
      }
    }
  
    // Якщо швидкий вказівник досяг кінця, то в списку немає циклу
    return false;
  }
  
  // Приклади використання
  const list1 = new List(3);
  list1.next = new List(2);
  list1.next.next = new List(0);
  list1.next.next.next = new List(-4);
  list1.next.next.next.next = list1.next; // Посилання на другий елемент, створюючи цикл
  
  const list2 = new List(1);
  list2.next = new List(2);
  list2.next.next = list2; // Посилання на перший елемент, створюючи цикл
  
  const list3 = new List(1);
  
  console.log(hasCycle(list1)); // true
  console.log(hasCycle(list2)); // true
  console.log(hasCycle(list3)); // false
  