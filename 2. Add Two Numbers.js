const addTwoNumbers = (l1, l2) => {
  let n1 = [l1.val], n2 = [l2.val];
  
  let node1 = l1.next, node2 = l2.next;
  
  while (node1) {
      n1.unshift(node1.val);
      node1 = node1.next;
  }
  
  while (node2) {
      n2.unshift(node2.val);
      node2 = node2.next;
  }
  
  const res = (BigInt(n1.join(``)) + BigInt(n2.join(``))).toString();
  
  return res.split(``).slice(1).reduce((head, val) => new ListNode(val, head), new ListNode(res[0]));
};