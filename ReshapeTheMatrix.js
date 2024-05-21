// zog

mat1 = [
    [1, 2],
    [3, 4],
]
r1 = 1
c1 = 4

mat2 = [
    [1, 2],
    [3, 4],
]
r2 = 2
c2 = 4

function matrixReshape(mat, r, c) {
    // find the total number of elements in mat
    let rows = 0
    let cols = 0

    for (let i = 0; i < mat.length; i++) {
        rows++
    }
    for (let i = 0; i < mat[0].length; i++) {
        cols++
    }

    const totalMat = rows * cols

    // check if the operation is possible
    if (r * c !== totalMat) {
        // return mat
        return mat
    }

    // variable to hold the result
    let result = [[]]

    // reset rows to 0
    rows = 0

    // loop through mat and add values to result
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // check if row is at capacity
            if (result[rows].length >= c) {
                // add new row to result
                result.push([])
                rows++
            }

            // push value into row
            result[rows].push(mat[i][j])
        }
    }

    // return result
    return result
}

console.log(matrixReshape(mat1, r1, c1))
console.log(matrixReshape(mat2, r2, c2))

// function with no comments for leetcode
function matrixReshapeNoCom(mat, r, c) {
    let rows = 0
    let cols = 0

    for (let i = 0; i < mat.length; i++) {
        rows++
    }
    for (let i = 0; i < mat[0].length; i++) {
        cols++
    }

    const totalMat = rows * cols

    if (r * c !== totalMat) {
        return mat
    }

    let result = [[]]

    rows = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (result[rows].length >= c) {
                result.push([])
                rows++
            }

            result[rows].push(mat[i][j])
        }
    }

    return result
}
