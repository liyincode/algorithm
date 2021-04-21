//给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。 
//
// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。 
//
// 示例 1: 
//
// 输入: 1->2->3->4->5->NULL
//输出: 1->3->5->2->4->NULL
// 
//
// 示例 2: 
//
// 输入: 2->1->3->5->6->4->7->NULL 
//输出: 2->3->6->7->1->5->4->NULL 
//
// 说明: 
//
// 
// 应当保持奇数节点和偶数节点的相对顺序。 
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。 
// 
// Related Topics 链表 
// 👍 412 👎 0


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
var oddEvenList = function (head) {

};

//leetcode submit region end(Prohibit modification and deletion)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
// let node6 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;


const result = oddEvenList(node1);
display(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

//var oddEvenList = function (head) {
//     let oddList = new ListNode();
//     let oddTail = oddList;
//     let evenList = new ListNode();
//     let evenTail = evenList;
//     let curr = head;
//
//     let count = 1;
//     while (curr) {
//         const tmp = curr.next;
//         if (count % 2 === 0) {
//             curr.next = null;
//             evenTail.next = curr;
//             evenTail = curr;
//         } else {
//             curr.next = null;
//             oddTail.next = curr;
//             oddTail = curr;
//         }
//
//         count++;
//         curr = tmp;
//     }
//
//     oddTail.next = evenList.next;
//     return oddList.next;
// };

/**
 * 当数据的个数为奇数时，如 12345
 * 这里会出现输出的链表为环链表的问题，1》3》5》2》4》5》2》4》5
 */
// while (curr) {
//     count++;
//     if (count % 2 === 0) {
//         even.next = curr;
//         even = curr;
//     } else {
//         odd.next = curr;
//         odd = curr;
//     }
//
//     curr = curr.next;
// }