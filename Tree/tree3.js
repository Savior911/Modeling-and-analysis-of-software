// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Функція для інвертування бінарного дерева
  function invertTree(root) {
    // Базовий випадок: якщо корінь пустий, повертаємо пустий масив
    if (root === null) {
      return [];
    }
  
    // Рекурсивно інвертуємо ліве і праве піддерева
    const left = invertTree(root.left);
    const right = invertTree(root.right);
  
    // Повертаємо масив, що об'єднує поточний вузол з інвертованими лівим і правим піддеревами
    return [root.val, ...right, ...left];
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
  console.log(invertTree(tree1)); // Виведе: [4,7,2,9,6,3,1]
  
  const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  console.log(invertTree(tree2)); // Виведе: [2,3,1]
  
  const tree3 = null;
  console.log(invertTree(tree3)); // Виведе: []
  