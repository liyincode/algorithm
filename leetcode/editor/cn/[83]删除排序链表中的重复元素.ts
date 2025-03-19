//给定一个已排序的链表的头
// head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
//
//
//
// 示例 1：
//
//
//输入：head = [1,1,2]
//输出：[1,2]
//
//
// 示例 2：
//
//
//输入：head = [1,1,2,3,3]
//输出：[1,2,3]
//
//
//
//
// 提示：
//
//
// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序 排列
//
//
// Related Topics 链表 👍 1191 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {

};
//leetcode submit region end(Prohibit modification and deletion)

/*
因为是已排序的，所以只需要比较旁边的节点就行
 */
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//     if (!head) return null;
//
//     let curr = head;
//
//     while (curr && curr.next) {
//         if (curr.val === curr.next.val) {
//             curr.next = curr.next.next
//         } else {
//             curr = curr.next
//         }
//     }
//
//     return head;
// };

/*
 hash 表，然后遍历查找
 */
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//     if (!head) {
//         return null;
//     }
//
//     const map = {}
//
//     map[head.val] = true
//
//     let curr = head
//
//     while (curr.next) {
//         const val = curr.next.val
//         if (!map[val]) {
//             map[val] = true
//            // 如果 map 里没有，才会到下一个
//             curr = curr.next
//         } else {
//             curr.next = curr.next.next
//         }
//
//     }
//
//     return head
// };
