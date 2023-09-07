function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b)=>(a - b));
    blueShirtSpeeds.sort((a, b)=>(b - a));
    console.log('blue',blueShirtSpeeds, 'red',redShirtSpeeds)
    let sum = 0;
    for(let i=0; i<redShirtSpeeds.length; i++){
      if(fastest === true){
        if(redShirtSpeeds[i] < blueShirtSpeeds[i]){
          sum = sum + blueShirtSpeeds[i]
        }else{
          sum = sum + redShirtSpeeds[i]
        }
      }
      else if(fastest === false){
          if(redShirtSpeeds[i] > blueShirtSpeeds[i]){
          sum = sum + blueShirtSpeeds[i]
        }else{
          sum = sum + redShirtSpeeds[i]
        }
      }
    }
    return sum;
  }
  const blueShirtSpeeds = [3, 6, 7, 2, 1];
  const fastest = false;
  const redShirtSpeeds =  [5, 5, 3, 9, 2] 
  const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
  console.log(result)