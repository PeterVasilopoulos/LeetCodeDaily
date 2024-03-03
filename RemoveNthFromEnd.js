var removeNthFromEnd = function(head, n) {
    // create a temp node incase head needs to be removed
    const tempNode = new ListNode(0)
    tempNode.next = head

    // first pointer
    let first = tempNode
    // second pointer
    let second = tempNode

    // move first pointer n nodes ahead of second
    for(let i = 0; i < n + 1; i++) {
        first = first.next
    }

    // move both pointers until first is at the end
    while(first) {
        first = first.next
        second = second.next
    }

    // remove node from list
    second.next = second.next.next

    // return head
    return tempNode.next
};