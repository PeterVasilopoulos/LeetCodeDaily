const num1 = 121
const num2 = -121
const num3 = 10

function isPalindrome(x) {
    if (x < 0) {
        return false
    }

    const str = x.toString()

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false
        }
    }

    return true
}

console.log(isPalindrome(num1))
console.log(isPalindrome(num2))
console.log(isPalindrome(num3))
