//编写一个程序，找到两个单链表相交的起始节点。 
//
// 如下面的两个链表： 
//
// 
//
// 在节点 c1 开始相交。 
//
// 
//
// 示例 1： 
//
// 
//
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, s
//kipB = 3
//输出：Reference of the node with value = 8
//输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1
//,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
// 
//
// 
//
// 示例 2： 
//
// 
//
// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB =
// 1
//输出：Reference of the node with value = 2
//输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4
//]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
// 
//
// 
//
// 示例 3： 
//
// 
//
// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
//输出：null
//输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而
// skipA 和 skipB 可以是任意值。
//解释：这两个链表不相交，因此返回 null。
// 
//
// 
//
// 注意： 
//
// 
// 如果两个链表没有交点，返回 null. 
// 在返回结果后，两个链表仍须保持原有的结构。 
// 可假定整个链表结构中没有循环。 
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。 
// 
// Related Topics 链表 
// 👍 1109 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

};

//leetcode submit region end(Prohibit modification and deletion)


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node1 = new ListNode(4);
let node2 = new ListNode(1);
let node3 = new ListNode(8);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let node6 = new ListNode(5);
let node7 = new ListNode(0);
let node8 = new ListNode(1);
node6.next = node7;
node7.next = node8;
node8.next = node3;


const result = getIntersectionNode(node1, node6);
console.log(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

// var getIntersectionNode = function (headA, headB) {
//     // 计算两个链表的长度
//     let pA = headA;
//     let countA = 0;
//     while (pA) {
//         countA++;
//         pA = pA.next;
//     }
//
//     let pB = headB;
//     let countB = 0;
//     while (pB) {
//         countB++;
//         pB = pB.next;
//     }
//
//     // 先让链表长度高的指针走 countA- countB 或 countB - countA 步
//     pA = headA;
//     pB = headB;
//     if (countA > countB) {
//         for (let i = 0; i < countA - countB; i++) {
//             pA = pA.next;
//         }
//     } else {
//         for (let i = 0; i < countB - countA; i++) {
//             pB = pB.next;
//         }
//     }
//
//     // pA 和 pB 同时走
//     while (pA && pB && pA !== pB) {
//         pA = pA.next;
//         pB = pB.next;
//     }
//
//     if (!pA || !pB) return null;
//     else return pA;
// };