// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Функція для перевірки, чи є дерево симетричним
  function isSymmetric(root) {
    // Внутрішня функція для порівняння двох піддерев
    function isMirror(left, right) {
      // Якщо обидва піддерева пусті, то вони симетричні
      if (left === null && right === null) {
        return true;
      }
  
      // Якщо одне з піддерев пусте або значення вузлів не співпадають, то вони не симетричні
      if (left === null || right === null || left.val !== right.val) {
        return false;
      }
  
      // Рекурсивно порівнюємо зовнішні вузли і внутрішні вузли (ліве з правим та праве з лівим)
      return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
  
    // Початковий виклик для кореня дерева
    return root === null || isMirror(root.left, root.right);
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
  console.log(isSymmetric(tree1)); // Виведе: true
  
  const tree2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
  console.log(isSymmetric(tree2)); // Виведе: false
  
  const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(1, new TreeNode(2)));
  console.log(isSymmetric(tree3)); // Виведе: false
  