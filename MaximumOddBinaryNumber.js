const s1 = '01010'

var maximumOddBinaryNumber = function(s) {
    // check if s is only 1 character long
    if(s.length === 1) {
        // return s
        return s
    }

    // variable to hold the final result
    let result = ''

    // variable to hold the count of 1s
    let hitOne = false

    // loop through s
    for(let i = 0; i < s.length; i++) {
        // check if s[i] is a 1
        if(s[i] === '1') {
            // check if hitOne is false
            if(!hitOne) {
                // set hitOne to true
                hitOne = true
            } else {
                // add 1 to beginning of result
                result = '1' + result
            }
        } else {
            // add 0 to end of result
            result = result + '0'
        }
    }

    // return result + '1'
    return result + '1'
}

console.log(maximumOddBinaryNumber(s1)) 