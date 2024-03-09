const nums1A = [1,2,3]
const nums2A = [2,4]

const nums1B = [3,4,5,10,12,15,16,16,25,48,51,69,74,74,78,78,78,82,82,88]
const nums2B = [3,8,9,10,13,16,24,25,27,29,34,39,55,62,70,80,83,87,92,94]

var getCommon = function(nums1, nums2) {
    // object to hold occurences of values from nums1
    let values1 = {}
    // object to hold occurences of values from nums2
    let values2 = {}


    // loop through both arrays
    for(let i = 0; i < nums1.length || i < nums2.length; i++) {
        // check if nums1[i] exists
        if(nums1[i]) {
            // add value to values1 or increment count
            if(values1.hasOwnProperty(nums1[i])) {
                values1[nums1[i]]++
            } else {
                values1[nums1[i]] = 1
            }
        }

        // check if nums2[i] exists
        if(nums2[i]) {
            // add value to values2 or increment count
            if(values2.hasOwnProperty(nums2[i])) {
                values2[nums2[i]]++
            } else {
                values2[nums2[i]] = 1
            }
        }
    }

    // variable to hold min common value
    let min = null

    // loop through values1 to check for common values
    for(let value in values1) {
        // check if value also exists in values2
        if(values2.hasOwnProperty(value)) {
            // check if min is null
            if(!min) {
                // set new min
                min = value
            } else {
                // check if value is smaller than min
                if(Number(value) < min) {
                    // set new min
                    min = value
                }
            }
        }
    }

    // check if min is null
    if(!min) {
        return -1
    } else {
        return min
    }
}

// console.log(getCommon(nums1A, nums2A))
// console.log(getCommon(nums1B, nums2B))







function getCommon2(nums1, nums2) {
    // create new set from nums1
    const nums1Set = new Set(nums1)

    // loop through nums2
    for(let i = 0; i < nums2.length; i++) {
        // check if number exists in set
        if(nums1Set.has(nums2[i])) {
            // return num
            return nums2[i]
        }
    }

    // return -1
    return -1
}

console.log(getCommon2(nums1B, nums2B))