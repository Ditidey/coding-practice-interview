function invertBinaryTree(tree) {
    if(tree === null){
      return;
    }
    swapRightLeft(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    
  }
  function swapRightLeft(tree){
    let temp = tree.right;
     tree.right = tree.left;
    tree.left = temp;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }