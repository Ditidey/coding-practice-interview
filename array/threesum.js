function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1
        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];
            if (currentSum == targetSum) {
                triplets.push([array[i], array[left], array[right]])
                right--;
                left++;
            }
            else if (currentSum > targetSum) {
                right--;
            }
            else if (currentSum < targetSum) {
                left++;
            }
        }
    }

    return triplets;
}

const result = threeNumberSum([12, 1, -8, 4, 3, 6, 5, -6, 2], 0)
console.log(result)