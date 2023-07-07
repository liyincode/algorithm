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

  }
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

// 穿针引线法
// var mergeTwoLists = function(l1, l2) {
//     if (!l1) return l2;
//     if (!l2) return l1;
//
//     let newHead = new ListNode();
//     let tail = newHead;
//
//     let first = l1;
//     let second = l2;
//     while (first && second) {
//         if (first.val < second.val) {
//             tail.next = first;
//             tail = first;
//             first = first.next;
//         } else {
//             tail.next = second;
//             tail = second;
//             second = second.next;
//         }
//     }
//
//     if (first) tail.next = first;
//     if (second) tail.next = second;
//
//     return newHead.next;
// };

// var mergeTwoLists = function(l1, l2) {
//   /**
//    * 这个方法中的新链表的指针与 l1 l2 链表的指针完全分开，不混在一起
//    */
//   if (!l1) return l2;
//   if (!l2) return l1;
//   let newNode = new ListNode(0);
//   let curr = newNode;
//
//   let first = l1;
//   let second = l2;
//
//   while (first !== null && second !== null) {
//     if (first.val <= second.val) {
//       curr.next = first;
//       first = first.next;
//     } else {
//       curr.next = second;
//       second = second.next;
//     }
//
//     // 等于删掉了刚加入到结构链表的节点后面的节点
//     curr.next.next = null;
//     curr = curr.next;
//   }
//
//   if (first) curr.next = first;
//   if (second) curr.next = second;
//
//   return newNode.next;
// }
