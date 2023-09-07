function transposeMatrix(matrix) {
    // Write your code here.
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        const temp = []
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i])
            // console.log('i', i, 'j', j, temp)
        }
        newMatrix.push(temp)
    }
    // console.log(newMatrix)
    return newMatrix;
}

const matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[2, 3, 4]]

const result = transposeMatrix(matrix)