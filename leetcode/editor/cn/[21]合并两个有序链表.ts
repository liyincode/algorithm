//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例 1：
//
//
//输入：l1 = [1,2,4], l2 = [1,3,4]
//输出：[1,1,2,3,4,4]
//
//
// 示例 2：
//
//
//输入：l1 = [], l2 = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：l1 = [], l2 = [0]
//输出：[0]
//
//
//
//
// 提示：
//
//
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列
//
//
// Related Topics 递归 链表 👍 3729 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

};
//leetcode submit region end(Prohibit modification and deletion)

/*
    if (list1 === null && list2 === null) {
        return null
    }

    if (list1 === null) {
        return list2
    }
    if (list2 === null) {
        return list1
    }

    const dummy = new ListNode()

    let curr = dummy
    let curr1 = list1
    let curr2 = list2

    while (curr1 && curr2) {
      if (curr1.val < curr2.val) {
          curr.next = curr1
          curr1 = curr1.next
      } else {
          curr.next = curr2
          curr2 = curr2.next
      }

      curr = curr.next
    }

    if (curr1 && !curr2) {
        curr.next = curr1
    }
    if (!curr1 && curr2) {
        curr.next = curr2
    }

    return dummy.next;
 */

/*
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode()
    let curr = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }

    curr.next = list1 || list2

    return dummy.next
}
 */
