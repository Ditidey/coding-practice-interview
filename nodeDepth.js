function nodeDepths(root) {
    // let sum = 0;
    console.log(root)
    let re =  findDepth(root, 0);
    return re;
  }
  function findDepth(node, depth){
    console.log(node)
    if(node == null){
      return 0;
    }
  //  console.log('hi', node.left, node.right)
  const leftDepth = findDepth(node.left, depth + 1);
  const rightDepth = findDepth(node.right, depth + 1);
   console.log(leftDepth, rightDepth, depth)
  return depth + leftDepth + rightDepth;
    // if(node.left){ 
    //     console.log('hi left', )
    //   sum += 1
    //   findDepth(node.left, sum)
    //   console.log('left', sum)
    // }
    // if(node.right){
    //   sum += 1
    //   findDepth(node.right, sum)
    //   console.log('right', sum)
    // }
  }
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  const nodes = "1,2,3,null,null,4,5"
  // {
  //   "tree": {
  //     "nodes": [
  //       {"id": "1", "left": "2", "right": "3", "value": 1},
  //       {"id": "2", "left": null, "right": null, "value": 2},
  //       {"id": "3", "left": null, "right": null, "value": 3}
  //     ],
  //     "root": "1"
  //   }
  // }
  // const tree = new BinaryTree(nodes)
  // console.log(tree)
  const result = nodeDepths(nodes)
  // console.log(result)