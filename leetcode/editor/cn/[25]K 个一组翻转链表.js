//给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。 
//
// k 是一个正整数，它的值小于或等于链表的长度。 
//
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。 
//
// 进阶： 
//
// 
// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？ 
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：head = [1,2,3,4,5], k = 2
//输出：[2,1,4,3,5]
// 
//
// 示例 2： 
//
// 
//输入：head = [1,2,3,4,5], k = 3
//输出：[3,2,1,4,5]
// 
//
// 示例 3： 
//
// 
//输入：head = [1,2,3,4,5], k = 1
//输出：[1,2,3,4,5]
// 
//
// 示例 4： 
//
// 
//输入：head = [1], k = 1
//输出：[1]
// 
//
// 
// 
//
// 提示： 
//
// 
// 列表中节点的数量在范围 sz 内 
// 1 <= sz <= 5000 
// 0 <= Node.val <= 1000 
// 1 <= k <= sz 
// 
// Related Topics 链表 
// 👍 1053 👎 0


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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
}
//leetcode submit region end(Prohibit modification and deletion)

function ListNode(val) {
    this.val = val;
    this.next = null;
}

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

const result = reverseKGroup(node1, 3);
display(result);

//var reverseKGroup = function (head, k) {
//     let dummy = new ListNode();
//     let tail = dummy;
//
//     let p = head;
//     while (p) {
//         let count = 0;
//         let q = p;
//         while (q) {
//             count++;
//             if (count === k) break;
//             q = q.next;
//         }
//
//         if (q === null) {
//             // 不足 K 个将剩下的连起来直接返回
//             tail.next = p;
//             return dummy.next;
//         } else {
//             const tmp = q.next;
//             const nodes = reverse(p, q);
//             tail.next = nodes[0];
//             // tail 永远指向结果链表的最后一个节点上
//             tail = nodes[1];
//             p = tmp;
//         }
//     }
//     return dummy.next;
// }
//
// const reverse = (head, tail) => {
//     let newHead = null;
//     let p = head;
//     while (p !== tail) {
//         let tmp = p.next;
//         p.next = newHead;
//         newHead = p;
//         p = tmp;
//     }
//
//     tail.next = newHead;
//
//     return [tail, head];
// }

