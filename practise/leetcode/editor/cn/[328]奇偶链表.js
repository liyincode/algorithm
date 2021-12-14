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
// let node7 = new ListNode(7);
// let node8 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;
// node6.next = node7;
// node7.next = node8;


const result = oddEvenList(node1);
display(result);

function display(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

// var oddEvenList = function (head) {
//     // 奇数链表
//     const oddList = new ListNode('odd');
//     // 奇数链表尾指针
//     let oddTail = oddList;
//     // 偶数链表
//     const evenList = new ListNode('even');
//     // 偶数链表尾指针
//     let evenTail = evenList;
//     let curr = head;
//     let tag = 1;
//
//     while (curr) {
//         // 缓存下个节点
//         const temp = curr.next;
//         // 1 是保证单一原则，只拿出一个
//         // 2 是防止奇数个数链表会形成环形链表
//         curr.next = null;
//         if (tag % 2 === 0) {
//             evenTail.next = curr;
//             evenTail = evenTail.next;
//         } else {
//             oddTail.next = curr;
//             oddTail = oddTail.next;
//         }
//
//         tag++;
//         curr = temp;
//     }
//
//     // 如果在刚才 curr.next 没有置为 null 的话，这一步会形成环形链表，如 12345，这里就会形成 13524524524... 524 循环
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

// 三指针法
// var oddEvenList = function (head) {
//     if (head === null) return null;
//     if (head.next && head.next.next === null) return head;
//
//     let curr = head;
//     let p = head.next;
//     let q = head.next;
//
//     /**
//      * 这里用的思路是找到奇数节点，把这个节点拿过来放到前面该放的地方是
//      * curr 指针永远指向奇数节点的最后一个节点
//      * p 指针永远指向偶数节点的第一个节点，也就是初始化链表的第二个节点
//      * q 去找要拿过来的奇数节点，因为要保证这个节点取过来还得保证链表完整，所以 q 指针指向目标奇数节点的前一个节点
//      */
//
//     while (q !== null) {
//         // 都是偶数位的节点，这个判断保证后面是有可操作的奇数位节点的
//         const temp = (q.next && q.next.next && q.next.next.next) ? q.next.next : null;
//         // 从后面找到的目标奇数个位节点
//         const target = q.next;
//         // 删除这个节点，保证链表完整
//         q.next = q.next.next;
//         // 把这个节点放到前面去
//         target.next = p;
//         curr.next = target;
//         // curr 指向奇数节点的下一个节点
//         curr = curr.next;
//         q = temp;
//     }
//
//     return head;
// };
