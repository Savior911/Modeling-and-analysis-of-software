// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Функція для вертикального обходу бінарного дерева
  function verticalTraversal(root) {
    // Об'єкт для зберігання вузлів за їхніми позиціями
    const nodePositions = {};
  
    // Функція для BFS та збереження позицій вузлів
    function bfs() {
      const queue = [{ node: root, row: 0, col: 0 }];
  
      while (queue.length > 0) {
        const { node, row, col } = queue.shift();
  
        if (!node) continue;
  
        // Додавання вузла до відповідної позиції в об'єкті
        if (!nodePositions[col]) {
          nodePositions[col] = [];
        }
        nodePositions[col].push({ val: node.val, row });
  
        // Додавання лівого та правого нащадка у чергу
        queue.push({ node: node.left, row: row + 1, col: col - 1 });
        queue.push({ node: node.right, row: row + 1, col: col + 1 });
      }
    }
  
    // Виклик функції BFS
    bfs();
  
    // Отримання відсортованого результату з об'єкту nodePositions
    const sortedResult = Object.keys(nodePositions)
      .sort((a, b) => a - b)
      .map(col => nodePositions[col].sort((a, b) => a.row - b.row).map(node => node.val));
  
    return sortedResult;
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
  console.log(verticalTraversal(tree1));
  // Виведе: [[9],[3,15],[20],[7]]

  const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
  console.log(verticalTraversal(tree2));
  // Виведе: [[4],[2],[1,5,6],[3],[7]]

  