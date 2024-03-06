var hasCycle = function(head) {
    // array to hold nodes
    let nodes = []

    // pointer variable
    let pointer = head

    // loop through list and add each node to array
    while(pointer) {
        // check if node is in array
        if(nodes.includes(pointer)) {
            // return true
            return true
        } else {
            // add node to pointer
            nodes.push(pointer)
            // otherwise move pointer
            pointer = pointer.next
        }
    }

    // return false
    return false
}

var hasCycle2 = function(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            return true
        }
    }

    return false
}