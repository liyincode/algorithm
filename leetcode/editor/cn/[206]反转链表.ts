//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//
//
//
//
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5]
//输出：[5,4,3,2,1]
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：[2,1]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//
//
//
//
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
//
// Related Topics 递归 链表 👍 3834 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
//   Definition for singly-linked list.
//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }

function reverseList(head: ListNode | null): ListNode | null {
};
//leetcode submit region end(Prohibit modification and deletion)

/**
 * 关键点，头插法
 * 使用 curr 指针每次去旧链表取节点，然后将节点头插到新链表头部
 * @param head
 */
/*
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }

    const dummy = new ListNode();
    let curr = head;

    while (curr) {
        const tmp = curr.next;
        curr.next = dummy.next;
        dummy.next = curr;
        curr = tmp;
    }

    return dummy.next;
};

 */
