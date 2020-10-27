//给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。 
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。 
//
// 
//
// 示例 1： 
//
// 
//输入：head = [1,2,3,4]
//输出：[2,1,4,3]
// 
//
// 示例 2： 
//
// 
//输入：head = []
//输出：[]
// 
//
// 示例 3： 
//
// 
//输入：head = [1]
//输出：[1]
// 
//
// 
//
// 提示： 
//
// 
// 链表中节点的数目在范围 [0, 100] 内 
// 0 <= Node.val <= 100 
// 
// Related Topics 链表 
// 👍 720 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

};
//leetcode submit region end(Prohibit modification and deletion)

/**
 * 递归
 */
// var swapPairs = function(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//
//     const newHead = head.next;
//     head.next = swapPairs(newHead.next);
//     newHead.next = head;
//
//     return newHead;
// };

/**
 * 迭代
 */
// var swapPairs = function(head) {
//     const dummyHead = new ListNode(0);
//     dummyHead.next = head;
//     let temp = dummyHead;
//
//     while (temp.next !== null && temp.next.next !== null) {
//         const node1 = temp.next;
//         const node2 = temp.next.next;
//         temp.next = node2;
//         node1.next = node2.next;
//         node2.next = node1;
//         temp = node1;
//     }
//     return dummyHead.next;
// };
// 这种交换节点的方式也是可以的
// var swapPairs = function(head) {
//     const dummyHead = new ListNode(0);
//     dummyHead.next = head;
//     let temp = dummyHead;
//
//     while (temp.next !== null && temp.next.next !== null) {
//         let node1 = temp.next;
//         let node2 = temp.next.next;
//         node1.next = node2.next;
//         node2.next = node1;
//         temp.next = node2;
//         temp = node1;
//     }
//
//     return dummyHead.next;
// };