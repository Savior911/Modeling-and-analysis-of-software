class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  /**
   * Функція для відновлення бінарного дерева з попереднього обходу.
   * @param {string} traversal - Рядок, що представляє попередній обхід.
   * @returns {TreeNode} - Корінь відновленого дерева.
   */
  function buildTree(traversal) {
    // Розділити рядок обходу на масив символів
    const nodes = traversal.split('-');
  
    // Функція для рекурсивного відновлення дерева
    function buildTreeHelper() {
      // Вилучити перший елемент (глибину) з масиву
      const depth = nodes.shift();
  
      // Якщо глибина не існує (масив порожній), повернути null
      if (depth === undefined) {
        return null;
      }
  
      // Створити новий вузол зі значенням глибини
      const node = new TreeNode(parseInt(depth));
  
      // Рекурсивно відновити лівий та правий дочірні вузли
      node.left = buildTreeHelper();
      node.right = buildTreeHelper();
  
      // Повернути вузол
      return node;
    }
  
    // Почати відновлення дерева
    return buildTreeHelper();
  }
  
  /**
   * Функція для виведення дерева у вигляді масиву.
   * @param {TreeNode} root - Корінь дерева.
   * @returns {Array} - Масив, що представляє вузли дерева.
   */
  function treeToArray(root) {
    const result = [];
  
    // Функція для обходу дерева у порядку "in-order"
    function inOrderTraversal(node) {
      if (node) {
        inOrderTraversal(node.left);
        result.push(node.val);
        inOrderTraversal(node.right);
      }
    }
  
    // Викликати обхід з кореня
    inOrderTraversal(root);
  
    return result;
  }
  
  // Приклади використання:
  
  // Приклад 1
  const traversal1 = "1-2--3--4-5--6--7";
  const root1 = buildTree(traversal1);
  const result1 = treeToArray(root1);
  console.log(result1); // Вивід: [1, 2, 5, 3, 4, 6, 7]
  
  // Приклад 2
  const traversal2 = "1-2--3---4-5--6---7";
  const root2 = buildTree(traversal2);
  const result2 = treeToArray(root2);
  console.log(result2);
  // Вивід: [1, 2, 5, 3, null, 6, null, 4, null, 7]
  
  // Приклад 3
  const traversal3 = "1-401--349---90--88";
  const root3 = buildTree(traversal3);
  const result3 = treeToArray(root3);
  console.log(result3);
  // Вивід: [1, 401, null, 349, 88, 90]
  