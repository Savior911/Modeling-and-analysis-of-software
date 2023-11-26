class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseKGroup(head, k) {
    let count = 0; // Лічильник вузлів у групі
    let node = head; // Поточний вузол
  
    while (node && count !== k) { // Знаходження вузла k+1
      node = node.next; // Перехід до наступного вузла
      count++; // Збільшення лічильника
    }
  
    if (count === k) { // Якщо знайдено вузол k+1
      node = reverseKGroup(node, k); // Рекурсивний виклик функції для обертання наступної групи
      // head - вказівник на частину списку, що не була оброблена
      // node - вказівник на обернену частину списку
  
      while (count-- > 0) { // Обертання поточної групи k-вузлів
        let tmp = head.next; // Збереження наступного вузла в прямому порядку
        head.next = node; // Приєднання вузла прямого порядку до обробленої частини
        node = head; // Переміщення вказівника обробленої частини на наступний вузол
        head = tmp; // Переміщення вказівника прямого порядку на наступний вузол у прямому порядку
      }
      head = node; // Оновлення вказівника на початок списку
    }
    return head; // Повернення початку списку
  }
  
  // Приклад 1:
  const head1 = new List(1, new List(2, new List(3, new List(4, new List(5)))));
  const k1 = 2;
  const result1 = reverseKGroup(head1, k1);
  
  console.log(result1); // [2, 1, 4, 3, 5]
  
  // Приклад 2:
  const head2 = new List(1, new List(2, new List(3, new List(4, new List(5)))));
  const k2 = 3;
  const result2 = reverseKGroup(head2, k2);
  
  console.log(result2); // [3, 2, 1, 4, 5]
  