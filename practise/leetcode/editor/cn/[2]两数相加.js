//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。 
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。 
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。 
//
// 
//
// 示例 1： 
//
// 
//输入：l1 = [2,4,3], l2 = [5,6,4]
//输出：[7,0,8]
//解释：342 + 465 = 807.
// 
//
// 示例 2： 
//
// 
//输入：l1 = [0], l2 = [0]
//输出：[0]
// 
//
// 示例 3： 
//
// 
//输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//输出：[8,9,9,9,0,0,0,1]
// 
//
// 
//
// 提示： 
//
// 
// 每个链表中的节点数在范围 [1, 100] 内 
// 0 <= Node.val <= 9 
// 题目数据保证列表表示的数字不含前导零 
// 
// Related Topics 递归 链表 数学 
// 👍 6077 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

};

//leetcode submit region end(Prohibit modification and deletion)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let node1 = new ListNode(9);
let node2 = new ListNode(9);
let node3 = new ListNode(9);
node1.next = node2;
node2.next = node3;

let node4 = new ListNode(9);
let node5 = new ListNode(9);
let node6 = new ListNode(9);
let node7 = new ListNode(9);
// let node8 = new ListNode(5);
node4.next = node5;
node5.next = node6;
node6.next = node7;
// node7.next = node8;

const result = addTwoNumbers(node1, node4);
display(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

/**
 *
 * @param l1
 * @param l2
 * @returns {null|*}
 */
// var addTwoNumbers = function (l1, l2) {
//     let p1 = l1;
//     let p2 = l2;
//
//     // 插入尾节点所在的链表
//     let newNode = new ListNode();
//     let tail = newNode;
//
//     // 相加进 1 常数，比如 9 + 7 = 16，向前进了一位 1
//     let carry = 0;
//
//     // 保证两链表都处理，比如一个处理后进了 1 ，剩下的几位 999 都得算
//     while (p1 || p2) {
//         let sum = 0;
//         if (p1) {
//             sum += p1.val;
//             p1 = p1.next;
//         }
//         if (p2) {
//             sum += p2.val;
//             p2 = p2.next
//         }
//         sum += carry;
//         carry = Math.floor(sum / 10);
//
//         // 插入尾节点
//         tail.next = new ListNode(sum % 10);
//         // 尾指针永远指向新插入的尾节点
//         tail = tail.next;
//     }
//
//     // 处理完还有进 1，最高位进 1
//     if (carry > 0) tail.next = new ListNode(carry);
//
//     return newNode.next;
// };