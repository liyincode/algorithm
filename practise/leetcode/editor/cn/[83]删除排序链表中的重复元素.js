//存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
//
// 返回同样按升序排列的结果链表。
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
// 题目数据保证链表已经按升序排列
//
// Related Topics 链表
// 👍 560 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;

  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
//leetcode submit region end(Prohibit modification and deletion)

const node5 = new ListNode(5);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(2, node2);


let display = head => {
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}

const result = deleteDuplicates(node1);
display(result);

// 双指针
//var deleteDuplicates = function(head) {
//   if (!head) return head;
//
//   let prev = head;
//   let curr = head.next;
//
//   while (curr) {
//     if (prev.val === curr.val) {
//       prev.next = curr.next;
//     } else {
//       prev = prev.next;
//     }
//
//     curr = curr.next;
//   }
//
//   return head;
//
// };

// 单指针
//var deleteDuplicates = function(head) {
//   if (!head) return head;
//
//   let curr = head;
//   while (curr.next) {
//     if (curr.val === curr.next.val) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }
//
//   return head;
// };
