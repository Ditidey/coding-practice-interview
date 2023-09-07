function tournamentWinner(competitions, results) {
    const map1 = new Map();
    
   for(let i=0; i<competitions.length; i++){
    let winIndex
    if(results[i] == 0){
          winIndex = 1
    }
    else{
        winIndex = 0
    }
      let winner = competitions[i][winIndex]
    //   console.log('winner',winner)
     if(map1.has(winner)){
        map1.set(winner, map1.get(winner) + 3)
     }else{
        map1.set(winner, 3)
     }
   }
    // const winTeam = [...map1.entries()].reduce((acc, ele) =>{
    //     return ele[1] > acc[1] ? ele : acc
    // })
    
    let maxValue =0 
    let ans = ''
    for(let [key, value] of map1){
        // let maxValue =0 
        if(maxValue < value){
            maxValue = value;
            ans = key
        } 
        // console.log(maxValue)

    }
    // console.log(ans )
   return ans;
 }

 const competitions = [
    ['html', 'c#'],
    ['java', 'python'],
    ['python', 'c#'],
 ]
 const results = [0, 0, 1]
 const result = tournamentWinner(competitions, results)