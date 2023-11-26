class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function partition(head, x) {
    let before = new List(0, null);
    let after = new List(0, null);
    let beforeHead = before; // Вказівник на початок списку 
    let afterHead = after; // Вказівник на початок списку елементів 
  
    while (head !== null) { 
      if (head.val < x) {
        before.next = head; // Додаємо елемент до списку елементів менших за x
        before = before.next; // Переміщуємо вказівник на наступний елемент списку елементів менших за x
      } 
      else { 
        after.next = head; // Додаємо елемент до списку 
        after = after.next; // Переміщуємо вказівник на наступний елемент списку 
      }
      head = head.next; // Переміщуємо вказівник на наступний елемент вихідного списку
    }
  
    // Поєднуємо два списки
    after.next = null; // Закриваємо список 
    before.next = afterHead.next; // Додаємо список  до кінця списку елементів менших за x
  
    return beforeHead.next; // Повертаємо початок нового об'єднаного списку
  }
  
  // Створюємо зв'язаний список [1, 4, 3, 2, 5, 2]
  let head = new List(1);
  head.next = new List(4);
  head.next.next = new List(3);
  head.next.next.next = new List(2);
  head.next.next.next.next = new List(5);
  head.next.next.next.next.next = new List(2);
  
  let x = 3;
  
  let newHead = partition(head, x);
  
  // Виводимо новий зв'язаний список у одну строку
  let str = '';
  let node = newHead;
  while (node !== null) {
    str += node.val + ' ';
    node = node.next;
  }
  
  console.log(str);
  