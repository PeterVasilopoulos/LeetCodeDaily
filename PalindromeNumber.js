const num1 = 121
const num2 = -121
const num3 = 10

function isPalindrome(x) {
    // check if number is negative
    if (x < 0) {
        return false
    }

    // convert number to string
    const str = x.toString()

    // loop through string forwards and backwards
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        // check if nums are the same
        if (str[i] !== str[j]) {
            // return false is nums are different
            return false
        }
    }

    // return true
    return true
}

console.log(isPalindrome(num1))
console.log(isPalindrome(num2))
console.log(isPalindrome(num3))
