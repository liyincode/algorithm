//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。 
//
// 
//
// 示例 1： 
//
// 输入：head = [1,3,2]
//输出：[2,3,1] 
//
// 
//
// 限制： 
//
// 0 <= 链表长度 <= 10000 
// Related Topics 链表 
// 👍 136 👎 0


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
 * @return {number[]}
 */
var reversePrint = function(head) {

};
//leetcode submit region end(Prohibit modification and deletion)

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

reversePrint(node1);

// var reversePrint = function(head) {
//     if (!head) return [];
//     let curr = head;
//     let index = 0;
//     while (curr) {
//         index++;
//         curr = curr.next;
//     }
//
//     let arr = [];
//     let curr2 = head;
//     while (index > 0) {
//         arr[index - 1] = curr2.val;
//         index--;
//         curr2 = curr2.next;
//     }
//
//     return arr;
// };