// Визначення вузла бінарного дерева пошуку
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Функція для знаходження k-го найменшого елемента в BST
  function kthSmallest(root, k) {
    // Масив для зберігання значень вузлів у порядку зростання
    const result = [];
  
    // Рекурсивна функція для обходу BST у порядку зростання
    function inorderTraversal(node) {
      if (node !== null) {
        inorderTraversal(node.left);
        result.push(node.val);
        inorderTraversal(node.right);
      }
    }
  
    // Початковий виклик рекурсивної функції
    inorderTraversal(root);
  
    // Повертаємо k-те найменше значення
    return result[k - 1];
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
  console.log(kthSmallest(tree1, 1)); // Виведе: 1
  
  const tree2 = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
  console.log(kthSmallest(tree2, 3)); // Виведе: 3
  