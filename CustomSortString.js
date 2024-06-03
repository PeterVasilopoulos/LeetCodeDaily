const order1 = "cba"
const s1 = "abcd"

const order2 = "bcafg"
const s2 = "abcd"

const order3 = "kqep"
const s3 = "pekeq"

const order4 = "disqyr"
const s4 = "iwyrysqrdj"

function customSortString(order, s) {
    // convert s to an array
    const arr = s.split("")

    // loop through order
    for (let i = 0, j = 0; i < order.length; i++) {
        // find index of character
        let charIndex = arr.indexOf(order[i])

        // check if char exists
        while (charIndex >= 0) {
            // swap char at i and char at charIndex
            ;[arr[j], arr[charIndex]] = [arr[charIndex], arr[j]]

            // increment j
            j++

            // check for next instance of char
            charIndex = arr.indexOf(order[i], j)
        }
    }

    // return arr converted to string
    return arr.join("")
}

// Testing

// console.log(customSortString(order1, s1))
// console.log(customSortString(order2, s2))
// console.log(customSortString(order3, s3))
console.log(customSortString(order4, s4))
