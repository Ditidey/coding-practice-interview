function getNthFib(n) {

    let sum = 3;
    let arr = []   
    if(n == 1) return 0;
    else if (n == 2) return 1;
     for(let i=2; i<n; i++){
      
       
        sum = i + sum;
        arr.push(sum)
        console.log('sum', sum, arr)
         
        
     }
     let len = arr.length - 1;
     console.log(len, arr.length)
     return arr[len - 1] || arr.length;
     
  }
  
  const result = getNthFib(6);
  console.log(result)