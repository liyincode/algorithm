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

};
//leetcode submit region end(Prohibit modification and deletion)

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
// let node6 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;

function display(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

// display(node1);

const result = getKthFromEnd(node1, 2);
console.log('result = ', result);

// 先算出链表长度，然后 n - k
//var getKthFromEnd = function(head, k) {
//   if (!head || k <= 0) return null;
//   let curr = head;
//   let count = 0;
//   while (curr) {
//     count++;
//     curr = curr.next;
//   }
//
//   console.log(count);
//
//   const target = count - k + 1;
//   console.log('target', target);
//   let curr2 = head;
//   let count2 = 1;
//   while (curr2) {
//     console.log('当前', count2, curr2);
//     if (count2 === target) return curr2;
//     count2++;
//     curr2 = curr2.next;
//   }
//
//   return null;
// };

// 快慢指针
//var getKthFromEnd = function(head, k) {
//   if (!head || k <= 0) return null;
//   if (head.next === null) return head;
//
//   /*
//   快慢指针之间的间隔就相当于最后结果离目标节点和最后一个节点指向的 null 的间隔
//    */
//   let fast = head;
//   let slow = head;
//
//   let count = 0;
//   while (count < k) {
//     count++;
//     fast = fast.next;
//   }
//
//   // 慢慢一起向前移动，直到 fast 指针指向 null
//   while (fast) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//
//   return slow;
// };

// var getKthFromEnd = function(head, k) {
//   // 计算链表总个数
//   let count = 0;
//   let curr = head;
//   while (curr) {
//     count++;
//     curr = curr.next;
//   }
//
//   // 找目标节点，举例 1 2 3 4 5 ，找倒数第 2 个，就是找顺数第 2 个节点 的.next节点
//   let targetIndex = count - k;
//   if (targetIndex === 0) return head;
//   let index = 1;
//   curr = head;
//   while (curr) {
//     if (index === targetIndex) return curr.next;
//     curr = curr.next;
//     index++;
//   }
//
//   return null;
// };
