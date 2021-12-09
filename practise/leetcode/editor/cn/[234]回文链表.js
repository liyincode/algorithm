//请判断一个链表是否为回文链表。 
//
// 示例 1: 
//
// 输入: 1->2
//输出: false 
//
// 示例 2: 
//
// 输入: 1->2->2->1
//输出: true
// 
//
// 进阶： 
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ 
// Related Topics 链表 双指针 
// 👍 947 👎 0


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
 * @return {boolean}
 */
var isPalindrome = function (head) {
};


//leetcode submit region end(Prohibit modification and deletion)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(2);
let node4 = new ListNode(1);
// let node5 = new ListNode(2);
node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;


const result = isPalindrome(node1);
console.log(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

//var isPalindrome = function (head) {
//     // 找到中间节点
//     let middleNode = findMiddleNode(head);
//     // 翻转中间节点后端的链表
//     let rightHalfNode = reverse(middleNode.next);
//     // 互相比对
//     let p = head;
//     let q = rightHalfNode;
//     // 只需要后面的指针不等于 null 就行
//     while (q) {
//         if (p.val !== q.val) return false
//         p = p.next;
//         q = q.next;
//     }
//
//     return true;
// };
//
// const findMiddleNode = (head) => {
//     if (head.next === null) return head;
//     let slow = head;
//     let fast = head.next;
//     // 偶数判断条件 fast.next.next
//     // 奇数判断条件 fast.next
//     while (fast.next && fast.next.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//
//     return slow;
// }
//
// const reverse = (head) => {
//     let newHead = new ListNode();
//     let curr = head;
//     while (curr) {
//         let temp = curr.next;
//         curr.next = newHead.next;
//         newHead.next = curr;
//         curr = temp;
//     }
//
//     return newHead.next;
// }