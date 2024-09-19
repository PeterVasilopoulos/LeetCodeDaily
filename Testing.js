let arr = [2, 3, 4, 5, 7]

function findTotalCost(arr) {
    // Write your code here

    let cost = 0

    while (arr.length > 1) {
        let min = [arr[0], 0]
        let max = [arr[0], 0]

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min[0]) {
                min = [arr[i], i]
            }

            if (arr[i] > max[0]) {
                max = [arr[i], i]
            }
        }

        // remove min from array
        for (let i = min[1]; i < arr.length - 1; i++) {
            ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
        arr.pop()

        max[1] = max[1] - 1

        // remove max from array
        for (let i = max[1]; i < arr.length - 1; i++) {
            ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
        arr.pop()

        let costToAdd = Math.ceil((min[0] + max[0]) / (max[0] - min[0] + 1))
        cost += costToAdd

        arr.push(min[0] + max[0])
    }

    return cost
}

console.log(findTotalCost(arr))
