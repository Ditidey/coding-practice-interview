function minimumWaitingTime(queries) {
    queries.sort(function(a, b){return a - b})
    let sum = 0;
    let ans = 0;
    for(i=1; i<queries.length; i++){
        sum = queries[i-1] + sum;
        // console.log('sum',sum, queries[i], i)
      ans = ans + sum;
    //   console.log('ans',ans)
    }
    return ans;
  }

  const arr = [6, 2, 3, 4, 5]
  const result = minimumWaitingTime(arr)
  console.log(result)
  