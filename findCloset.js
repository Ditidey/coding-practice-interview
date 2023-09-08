function findClosestValueInBst(tree, target) {
    let closet = 0;
    let currentNode = tree;
     while(closet != null ){
       if(Math.abs(target - closet) > Math.abs(target - currentNode.value)){
         closet = currentNode.value;
       }
       else if(target < currentNode.value){
         closet = currentNode.left;
       }else if(target > currentNode.value){
         closet = currentNode.right;
       }
       else {
          break;
       }
     }
    return closet;
    // Write your code here.
  }

  let result = findClosestValueInBst([5, 10, 1, 2, 15], 12)