class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    const dummy = new Node();
    this.head = dummy;
    this.tail = dummy;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.size++;
  }

  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  get peekHead() {
    return this.head.next.val;
  }

  get peekTail() {
    return this.tail.val;
  }
}


const maxResult = function (nums, k) {
  const maxList = new DoublyLinkedList();
  maxList.push([nums[0], 0]);
  let start = 0;

  for (let i = 1; i < nums.length; i++) {
    const currSum = maxList.peekHead[0] + nums[i];
    while (maxList.size && currSum > maxList.peekTail[0]) maxList.pop();
    maxList.push([currSum, i]);

    if (i == start + k) {
      if (maxList.peekHead[1] == start) maxList.shift();
      start++;
    }
  }
  return maxList.peekTail[0];
};