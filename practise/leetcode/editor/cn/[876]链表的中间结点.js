//给定一个头结点为 head 的非空单链表，返回链表的中间结点。
//
// 如果有两个中间结点，则返回第二个中间结点。
//
//
//
// 示例 1：
//
//
//输入：[1,2,3,4,5]
//输出：此列表中的结点 3 (序列化形式：[3,4,5])
//返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
//注意，我们返回了一个 ListNode 类型的对象 ans，这样：
//ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next =
//NULL.
//
//
// 示例 2：
//
//
//输入：[1,2,3,4,5,6]
//输出：此列表中的结点 4 (序列化形式：[4,5,6])
//由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
//
//
//
//
// 提示：
//
//
// 给定链表的结点数介于 1 和 100 之间。
//
// Related Topics 链表
// 👍 323 👎 0


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
 * @return {ListNode}
 */
var middleNode = function (head) {
  // find length of the nodeList
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }

  let current2 = head;
  let k = 0;
  while (k < Math.trunc(length / 2)) {
    k++;
    current2 = current2.next;
  }

  return current2;

};
//leetcode submit region end(Prohibit modification and deletion)

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
const node3 = new ListNode(3);
node2.next = node3;
const node4 = new ListNode(4);
node3.next = node4;
const node5 = new ListNode(5);
node4.next = node5;

const result = middleNode(node1);
console.log(result);

// 通过总长度 / 2 来判断
//var middleNode = function (head) {
//     // 节点长度
//     let nodeLength = 0;
//     let test = head
//     while (test !== null) {
//         test = test.next;
//         nodeLength++;
//     }
//     let curr = head;
//     if (nodeLength % 2 === 0) {
//         // 长度为偶数
//         const targetIndex = nodeLength / 2;
//         let index = 1;
//         while (curr !== null) {
//             // 返回第二个节点
//             if (index === targetIndex + 1) return curr;
//             index++;
//             curr = curr.next;
//         }
//     } else {
//         // 长度为奇数
//         const targetIndex = Math.floor(nodeLength / 2) + 1;
//         let index = 1;
//         while (curr !== null) {
//             if (index === targetIndex) return curr;
//             index++;
//             curr = curr.next;
//         }
//     }
// };

// 数组
//var middleNode = function (head) {
//   let arr = [];
//   while (head !== null) {
//     arr.push(head);
//     head = head.next;
//   }
//
//   return arr[Math.trunc(arr.length / 2)];
// };

// 数组
//var middleNode = function (head) {
//   let arr = [head];
//   while (arr[arr.length - 1].next !== null) {
//     arr.push(arr[arr.length - 1].next);
//   }
//
//   return arr[Math.trunc(arr.length / 2)];
// };

// 单指针
//var middleNode = function (head) {
//   // find length of the nodeList
//   let length = 0;
//   let current = head;
//   while (current !== null) {
//     length++;
//     current = current.next;
//   }
//
//   let current2 = head;
//   let k = 0;
//   while (k < Math.trunc(length / 2)) {
//     k++;
//     current2 = current2.next;
//   }
//
//   return current2;
//
// };
