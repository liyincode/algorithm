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

};
//leetcode submit region end(Prohibit modification and deletion)

let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;


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

// var deleteDuplicates = function(head) {
//   if (!head) return head;
//
//   // 栈
//   let newHead = new ListNode(-111);
//   // 指向栈顶的指针
//   let tail = newHead;
//   let curr = head;
//   while (curr) {
//     if (tail.val !== curr.val) {
//       /**
//        * 将链表放入链表中
//        */
//       tail.next = curr;
//       tail = curr;
//     }
//
//     curr = curr.next;
//   }
//
//   tail.next = null;
//
//   return newHead.next;
// };

//var deleteDuplicates = function(head) {
//   if (!head) return head;
//
//   // 栈
//   let newHead = new ListNode(-111);
//   // 指向栈顶的指针
//   let tail = newHead;
//   let curr = head;
//   while (curr) {
//     const tmp = curr.next;
//     if (tail.val !== curr.val) {
        /*
          将单个节点放入结果链表中
         */
//       tail.next = curr;
//       tail = curr;
//       curr.next = null;
//     }
//
//     curr = tmp;
//   }
//
//
//   return newHead.next;
// };

 // 提取需要比对的值
 // var deleteDuplicates = function(head) {
 //   if (head === null) return null;
 //
 //   let curr = head;
 //   /**
 //    * 这里的思路是，每次记录下要比对的值，然后遍历的时候看下一个节点的值是不是和它相同，相同的话就删掉，
 //    * 不同的话，记录下下一个节点的值再比对
 //    * 反正 **每次相同的节点只留下第一个**
 //    */
 //   let target = head.val;
 //   while (curr.next !== null) {
 //     if (curr.next.val === target) {
 //       curr.next = curr.next.next
 //     } else {
 //       curr = curr.next;
 //       target = curr.val;
 //     }
 //   }
 //
 //   return head;
 // };
