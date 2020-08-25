/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
  
  // Helper method to concatenate list values
  function getNum(node) {
      let string = "";
      while (node) {
          string += node.val;
          node = node.next;
      }
      return string;
  }
  
  
  let l1Num = getNum(l1);
  let l2Num = getNum(l2);
  
  let sum = (BigInt(l1Num) + BigInt(l2Num)).toString();
  
  let dummyHead = new ListNode(0);
  let node = dummyHead;
  
  for (let num of sum) {
      node.next = new ListNode(num);
      node = node.next;
  }
  
  return dummyHead.next;
  
};