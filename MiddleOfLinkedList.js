var middleNode = function(head) {
    // check if there is no node after head
    if(!head.next) {
        // return head
        return head
    }

    // fast pointer variable
    let fast = head
    // slow pointer variable
    let slow = head

    // loop through list
    while(fast && fast.next) {
        // move fast by 2 nodes
        fast = fast.next.next
        // move slow by 1 node
        slow = slow.next
    }

    // return slow
    return slow
}