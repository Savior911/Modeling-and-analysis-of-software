class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function doubleLinkedList(head) {
    // Ініціалізувати змінні
    let num = 0;
    let node = head;
  
    // Перетворити зв'язаний список на число
    while (node !== null) {
      num = num * 10 + node.val;
      node = node.next;
    }
  
    // Подвоїти число
    num *= 2;
  
    // Створити заглушку для нового зв'язаного списку
    const dummyHead = new List(0);
    let curr = dummyHead;
  
    // Перетворити число назад на зв'язаний список
    num.toString().split("").forEach(digit => {
      curr.next = new List(parseInt(digit));
      curr = curr.next;
    });
  
    // Повернути перший вузол нового зв'язаного списку
    return dummyHead.next;
  }
  
  // Приклад використання
  const example1 = new List(1, new List(8, new List(9)));
  const result1 = doubleLinkedList(example1);
  console.log(result1); // Вихід: List { val: 3, next: List { val: 7, next: List { val: 8, next: null } } }
  
  const example2 = new List(9, new List(9, new List(9)));
  const result2 = doubleLinkedList(example2);
  console.log(result2); // Вихід: List { val: 1, next: List { val: 9, next: List { val: 9, next: List { val: 8, next: null } } } }
  