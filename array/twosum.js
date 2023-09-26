const arr = [3, 5, -4, -8, 11, 1, -1, 6]
const targetSum = 10;

arr.sort((a, b) => a - b)
let n = arr.length - 1
console.log(n) 

for(let i=0; i<n;){
    if(arr[i] + arr[n] == targetSum){
        console.log('got it', arr[i], arr[n])
        return[arr[i], arr[n]]
    }
    else if(arr[i] + arr[n] < targetSum){
        i++
    }
    else if(arr[i] + arr[n] > targetSum){
        n--;
    }
}