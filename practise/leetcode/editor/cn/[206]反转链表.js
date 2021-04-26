//反转一个单链表。 
//
// 示例: 
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL 
//
// 进阶: 
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ 
// Related Topics 链表 
// 👍 1303 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
};
//leetcode submit region end(Prohibit modification and deletion)

function ListNode(val) {
     this.val = val;
     this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;


const result = reverseList(node1);
display(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

// newHead 是虚拟节点，每次遍历把节点放在虚拟节点之后，最后返回 newHead.next
// var reverseList = function(head) {
//         if (!head) return null
//     let newHead = new ListNode();
//     let curr = head;
//     while (curr) {
//         let tmp = curr.next;
//         curr.next = newHead.next;
//         newHead.next = curr;
//         curr = tmp;
//     }
//     return newHead.next;
// };

// 头指针永远指向链表的头部
// var reverseList = function(head) {
//     if (!head) return null;
//     // 头指针
//     let newHead = null;
//     let curr = head;
//     while (curr) {
//         // 避免丢失 curr.next
//         let tmp = curr.next;
//         curr.next = newHead;
//         newHead = curr;
//         curr = tmp;
//     }
//
//     return newHead;
// };

// 递归
//var reverseList = function(head) {
//     if (head === null) return null;
//     if (head.next === null) return head;
//
//     let newNode = reverseList(head.next);
//     head.next.next = head;
//     head.next = null
//
//     return newNode;
// };