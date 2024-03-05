const s1 = 'ca'
const s2 = 'cabaabac'
const s3 = 'aabccabba'

var minimumLength = function(s) {
    // if length is 1, return 1
    if(s.length === 1) {
        return 1
    }

    // variable to hold the new string
    let newStr = s

    // variable for prefix pointer
    let prefix = 0
    // variable for suffix pointer
    let suffix = s.length - 1

    // loop through newStr
    while(newStr.length > 1) {
        // check if prefix and suffix chars are the same
        if(newStr[prefix] === newStr[suffix]) {
            // temp variable to hold the character
            let char = newStr[prefix]

            // loop through again
            while(prefix < suffix) {
                // check if the next prefix char is the same
                if(newStr[prefix + 1] === char && prefix + 1 <= suffix) {
                    // increment prefix
                    prefix++
                }

                // check if the next suffix char is the same
                if(newStr[suffix - 1] === char && suffix - 1 >= prefix) {
                    // decrement suffix
                    suffix--
                }

                // check if neither next char is the same
                if(newStr[prefix + 1] !== char && newStr[suffix - 1] !== char) {
                    // break out of loop
                    break
                }
            }

            // slice newStr to remove prefix and suffix
            newStr = newStr.slice(prefix + 1, suffix)

            // reset prefix and suffix
            prefix = 0
            suffix = newStr.length - 1

        } else {
            // otherwise, break out of loop
            break
        }
    }

    // return length of newStr
    return newStr.length
}

console.log(minimumLength(s1))
console.log(minimumLength(s2))
console.log(minimumLength(s3))