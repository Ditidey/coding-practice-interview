function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort(function(a, b){return a - b})
    blueShirtHeights.sort(function(a, b){return a - b})
      let count = 0;
    for(let i=0; i<redShirtHeights.length; i++){
      if(redShirtHeights[i] < blueShirtHeights[i]){
         count = count + 1;
      }
    }
    if(count == redShirtHeights.length){
      return true;
    }
    return false;
  }

