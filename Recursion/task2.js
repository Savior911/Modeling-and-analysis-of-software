// Cтруктура вузла
class ListNode {
    constructor(val = 0, next = null) {
        // if (val < 0 || val > 100) {
        //   throw new Error("Недопустиме значення вузла. Значення повинно бути в діапазоні від 0 до 100.");
        // }
    this.val = val;
    this.next = next;
    }
  }
  
  // Функція для конвертації списку у масив, щоб вивід був у вигляді: [2, 1, 4, 3],
  // а не у вигляді: ListNode { val: 2, next: ListNode { val: 1, next: ListNode { val: 4, next: [ListNode] } } 
  function toArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
  
  // Функція для обміну місцями кожних двох сусідніх вузлів
  function swapPairs(head) {

    const temp = new ListNode(0);
    temp.next = head;
    let current = temp;
  
    // Перегляд кожних двох сусідніх вузлів та їх обмін
    while (current.next !== null && current.next.next !== null) {
      const firstNode = current.next;
      const secondNode = current.next.next;
  
      // Обмін місцями
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      current.next = secondNode;
  
      // Переміщення поточного вузла на наступні два вузли
      current = firstNode;
    }
  
    return temp.next;
  }
  
// Приклад використання
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const head2 = null;
const head3 = new ListNode(1);
  
console.log(toArray(swapPairs(head1)));  // Вивід: [2, 1, 4, 3]
console.log(toArray(swapPairs(head2)));  // Вивід: []
console.log(toArray(swapPairs(head3)));  // Вивід: [1]
  