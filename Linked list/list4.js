class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reorderList(head) {
    // Якщо список порожній або має один елемент, то його не потрібно реверсувати
    if (!head || !head.next) {
      return;
    }
  
    // Знаходимо середину списку
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Реверсуємо другу половину списку
    let secondHalf = slow.next;
    slow.next = null;
  
    let prev = null;
    let current = secondHalf;
    let next;
  
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    // Змішуємо першу і другу половину списку
    let firstHalf = head;
  
    while (firstHalf && prev) {
      let next1 = firstHalf.next;
      let next2 = prev.next;
  
      firstHalf.next = prev;
      prev.next = next1;
  
      firstHalf = next1;
      prev = next2;
    }
  }
  
  // Приклади використання
  const list1 = new List(1, new List(2, new List(3, new List(4))));
  const list2 = new List(1, new List(2, new List(3, new List(4, new List(5)))));
  
  reorderList(list1);
  reorderList(list2);
  
  // Виведення результату
  function convertListToArray(head) {
    let resultArray = [];
    let current = head;
    while (current !== null) {
      resultArray.push(current.val);
      current = current.next;
    }
    return resultArray;
  }
  
  console.log(convertListToArray(list1)); // [1, 4, 2, 3]
  console.log(convertListToArray(list2)); // [1, 5, 2, 4, 3]
  