//给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
//
//
// 示例 1：
//
//
//输入：head = [1,2,6,3,4,5,6], val = 6
//输出：[1,2,3,4,5]
//
//
// 示例 2：
//
//
//输入：head = [], val = 1
//输出：[]
//
//
// 示例 3：
//
//
//输入：head = [7,7,7,7], val = 7
//输出：[]
//
//
//
//
// 提示：
//
//
// 列表中的节点在范围 [0, 104] 内
// 1 <= Node.val <= 50
// 0 <= k <= 50
//
// Related Topics 链表
// 👍 573 👎 0


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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

};
//leetcode submit region end(Prohibit modification and deletion)

// 哨兵节点，双指针法
// var removeElements = function(head, val) {
//     // 头节点
//     let headSolider = new ListNode();
//     headSolider.next = head;
//
//     // 两个指针
//     let prev = headSolider, curr = head;
//     while (curr !== null) {
//         if (curr.val === val) {
//             // 删除目标节点
//             prev.next = curr.next;
//         } else {
//             // prev 向前走一步
//             prev = curr;
//         }
//         // curr 每次都向前走一步
//         curr = curr.next;
//     }
//
//
//     return headSolider.next;
// };

// var removeElements = function(head, val) {
//   if (head === null) return null;
//   // 创建哨兵节点
//   let solider = new ListNode();
//   solider.next = head;
//   let curr = solider;
//   while (curr.next !== null) {
//     // 找到目标值，删除这个节点
//     if (curr.next.val === val) {
//      // while 下一次循环 curr 指的是一样的
//       curr.next = curr.next.next;
//     } else {
//       // 注意这里是只有没有找到目标值的时候，curr 才向前走一步，这里想了很久
//       // 如果不管找没找到每次都走一部，会遗漏连着相等的节点，比如 [7, 7, 7, 7] 结果是 [7, 7] 导致删不干净
//       curr = curr.next;
//     }
//   }
//
//   return solider.next;
// };
