const reverseList = function(head) {
  if(!head || !head.next) return head
  const reverse = reverseList(head.next)
  head.next.next = head
  head.next = null
  return reverse
};

