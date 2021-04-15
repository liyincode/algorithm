//输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
//
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
//
//
//
// 示例：
//
//
//给定一个链表: 1->2->3->4->5, 和 k = 2.
//
//返回链表 4->5.
// Related Topics 链表 双指针
// 👍 177 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  if (!head || k <= 0) return null;
  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }

  console.log(count);

  const target = count - k + 1;
  console.log('target', target);
  let curr2 = head;
  let count2 = 1;
  while (curr2) {
    console.log('当前', count2, curr2);
    if (count2 === target) return curr2;
    count2++;
    curr2 = curr2.next;
  }

  return null;
};
//leetcode submit region end(Prohibit modification and deletion)

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

function display(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr);
    curr = curr.next;
  }
}

display(node1);

const result = getKthFromEnd(node1, 1);
console.log('result = ', result);

