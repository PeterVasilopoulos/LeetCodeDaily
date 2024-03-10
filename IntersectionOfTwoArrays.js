const nums1A = [1,2,2,1]
const nums2A = [2,2]

const nums1B = [4,9,5]
const nums2B = [9,4,9,8,4]

function intersection(nums1, nums2) {
    // set to hold the results
    let resultSet = new Set()

    // create a set out of nums1
    const nums1Set = new Set(nums1)

    // loop through nums2
    for(let i = 0; i < nums2.length; i++) {
        // check if value is in nums1Set
        if(nums1Set.has(nums2[i])) {
            // add value to resultSet
            resultSet.add(nums2[i])
        }
    }

    // return resultSet converted to array
    return Array.from(resultSet)
}

console.log(intersection(nums1A, nums2A))
console.log(intersection(nums1B, nums2B))