//输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
//
// 示例1：
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
//
// 限制：
//
// 0 <= 链表长度 <= 1000
//
// 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/
// Related Topics 分治算法
// 👍 111 👎 0


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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

};
//leetcode submit region end(Prohibit modification and deletion)

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

let node4 = new ListNode(1);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

const result = mergeTwoLists(node1, node4);
display(result);

function display(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

// // 循环迭代
// var mergeTwoLists = function(l1, l2) {
//   // 新链表迭代
//   let head = new ListNode();
//   // 新链表指针
//   let curr = head;
//
//   // l1 l2 作为指针使用
//   while (l1 && l2) {
//     if (l1.val >= l2.val) {
//       // 数据小的放入新链表
//       curr.next = l2;
//       // 数据小的指针往前走一步
//       l2 = l2.next;
//     } else {
//       curr.next = l1;
//       l1 = l1.next;
//     }
//
//     // 新链表指针向前走
//     curr = curr.next;
//   }
//     // 如果最后 l1 指针不为 null，说明 l1 指针指向的节点还没有加入新链表
//     if (l1) curr.next = l1;
//     if (l2) curr.next = l2;
//
//     return head.next;
// };
