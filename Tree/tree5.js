// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Функція для серіалізації бінарного дерева в рядок
  function serialize(root) {
    if (!root) {
      return "[]";
    }
  
    // Масив для зберігання значень вузлів
    const values = [];
  
    // Обхід у ширину (BFS) для збору значень вузлів
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        values.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        values.push(null);
      }
    }
  
    // Вивід масиву значень у вигляді рядка
    return JSON.stringify(values);
  }
  
  // Функція для десеріалізації рядка у бінарне дерево
  function deserialize(data) {
    const values = JSON.parse(data);
  
    // Якщо вхідний рядок порожній, повертаємо null
    if (values.length === 0) {
      return null;
    }
  
    // Створення кореня з першого значення масиву
    const root = new TreeNode(values.shift());
  
    // Масив для зберігання вузлів, які чекають на додавання лівого і правого нащадка
    const queue = [root];
  
    while (values.length > 0) {
      const currentNode = queue.shift();
  
      // Додаємо лівого нащадка
      const leftValue = values.shift();
      if (leftValue !== null && leftValue !== undefined) {
        currentNode.left = new TreeNode(leftValue);
        queue.push(currentNode.left);
      }
  
      // Додаємо правого нащадка
      const rightValue = values.shift();
      if (rightValue !== null && rightValue !== undefined) {
        currentNode.right = new TreeNode(rightValue);
        queue.push(currentNode.right);
      }
    }
  
    return root;
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
  const serializedTree = serialize(tree1);
  console.log(serializedTree); // Виведе: "[1,2,3,null,null,4,5]"
  
  const deserializedTree = deserialize(serializedTree);
  console.log(deserializedTree); // Об'єкт TreeNode, який представляє дерево
  