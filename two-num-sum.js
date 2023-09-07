
// const array = [3, 5, 4, 8, 11,6, 1, -1, -4];    
// [1, 4, 6]

function twoNumberSum() {
    // Write your code here.
    // const array = [3, 5, 4, 8, 11, 6, 1, -1, -4];
    const array = [1, 2, 5];
    const targetSum = 4;
    const sortedArray = array.sort()
    let n = sortedArray.length

    for (let i = 0; i < n;) {
        if (sortedArray[i] == sortedArray[n - 1]) {
            return []
        }
        else if (sortedArray[i] + sortedArray[n - 1] == targetSum) {
            console.log('first', i, sortedArray[i], sortedArray[n - 1])
            return [sortedArray[i], sortedArray[n - 1]]
        } else if (sortedArray[i] + sortedArray[n - 1] < targetSum) {
            i++
            console.log('second', i, sortedArray[i], sortedArray[n - 1])
        } else if (sortedArray[i] + sortedArray[n - 1] > targetSum) {
            n--
            console.log('third', i, sortedArray[i], sortedArray[n - 1])
        }

    }
    return []

}

const result = twoNumberSum()
console.log(result)