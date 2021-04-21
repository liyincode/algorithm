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
    const midNode = findMidNode(head);
    const reversedLinkedList = reverse(midNode.next);
    let p = head;
    let q = reversedLinkedList;
    while (q) {
        if (p.val !== q.val) return false
        q = q.next;
        p = p.next;
    }

    return true;
};

const findMidNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

const reverse = function (head) {
    let newHead = null;
    let curr = head;
    while (curr) {
        let tmp = curr.next;
        curr.next = newHead;
        newHead = curr;
        curr = tmp;
    }

    return newHead;
}

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