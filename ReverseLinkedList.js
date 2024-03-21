function reverseList(head) {
    // variable to hold previous node
    let prev = null
    // variable to hold current node
    let current = head
    // variable to hold next node
    let next = null

    // loop through list until current is null
    while(current) {
        // set next to current.next
        next = current.next

        // to reverse the order, set current.next to the previous node
        current.next = prev

        // move previous to current
        prev = current

        // move current to next
        current = next
    }

    // return previous which is at the last node
    return prev
}