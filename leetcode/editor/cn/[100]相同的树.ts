//给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
//
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
//
//
//
// 示例 1：
//
//
//输入：p = [1,2,3], q = [1,2,3]
//输出：true
//
//
// 示例 2：
//
//
//输入：p = [1,2], q = [1,null,2]
//输出：false
//
//
// 示例 3：
//
//
//输入：p = [1,2,1], q = [1,1,2]
//输出：false
//
//
//
//
// 提示：
//
//
// 两棵树上的节点数目都在范围 [0, 100] 内
// -10⁴ <= Node.val <= 10⁴
//
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1219 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

};
//leetcode submit region end(Prohibit modification and deletion)

/**
 * 递归解法
 */
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (p === null && q === null) {
//         return true
//     }
//
//     if (p === null || q === null) {
//         return false
//     }
//
//     if (p.val !== q.val) {
//         return false
//     }
//
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };

/**
 * 广度遍历 使用队列
 *
 *
 */
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     const queue = [[p, q]]
//
//     while (queue.length) {
//         const [node1, node2] = queue.shift()
//
//         if (node1 === null && node2 === null) {
//             continue
//         }
//
//         if (node1 === null || node2 === null) {
//             return false
//         }
//
//         if (node1.val !== node2.val) {
//             return false
//         }
//
//         queue.push([node1.left, node2.left])
//         queue.push([node1.right, node2.right])
//     }
//
//     return true
// };
