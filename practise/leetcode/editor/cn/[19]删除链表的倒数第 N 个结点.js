//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//
// 进阶：你能尝试使用一趟扫描实现吗？
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5], n = 2
//输出：[1,2,3,5]
//
//
// 示例 2：
//
//
//输入：head = [1], n = 1
//输出：[]
//
//
// 示例 3：
//
//
//输入：head = [1,2], n = 1
//输出：[1]
//
//
//
//
// 提示：
//
//
// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
//
// Related Topics 链表 双指针
// 👍 1319 👎 0


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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

};


//leetcode submit region end(Prohibit modification and deletion)
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function display(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val)
    curr = curr.next;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


const result = removeNthFromEnd(node1, 5);
display(result);

//var removeNthFromEnd = function(head, n) {
//     // 计算长度
//     let count = 0;
//     let curr = head;
//     while (curr) {
//         count++
//         curr = curr.next;
//     }
//
//     // 找到目标节点前一个节点的位置
//     let targetIndex = count - n;
//     // 如果 12345 删除倒数第 5 个，或者 1 删除倒数第 1 个这种，特殊处理
//     if (targetIndex === 0) {
//         let newHead = new ListNode();
//         newHead.next = head;
//         newHead.next = newHead.next.next;
//         return newHead.next;
//     }
//     count = 0;
//     curr = head;
//     while (curr) {
//         count++;
//         if (count === targetIndex) {
//             // 删除目标节点
//             curr.next = curr.next.next;
//             return head;
//         }
//         curr = curr.next;
//     }
//
//     return head;
// };

// 获取长度计算位置
// var removeNthFromEnd = function(head, n) {
//     // 计算长度
//     let length = 0;
//     let curr = head;
//     while (curr) {
//         length++;
//         curr = curr.next;
//     }
//
//     // 设置头节点，方便删除第一个节点的情况
//     let newHead = new ListNode();
//     newHead.next = head;
//     curr = newHead;
//     for (let i = 0; i < length - n; i++) {
//         // curr 指向哪里和 length - n 的关系需要捋清楚，比较重要
//         curr = curr.next;
//     }
//     // 删除目标节点
//     curr.next = curr.next.next;
//
//     return newHead.next;
// };

// 快慢双指针
//var removeNthFromEnd = function(head, n) {
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     // 快指针指向 head
//     let fast = head;
//     // 满指针指向哨兵节点
//     let slow = dummy;
//     // 快指针先走 n 步
//     for (let i = 0 ; i < n; i++) {
//         fast = fast.next;
//     }
//
//     // 快慢指针同步走
//     while (fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }
//     // 删除指定节点
//     slow.next = slow.next.next;
//
//     return dummy.next;
// };
