//给你一个二叉树的根节点 root ， 检查它是否轴对称。
//
//
//
// 示例 1：
//
//
//输入：root = [1,2,2,3,4,4,3]
//输出：true
//
//
// 示例 2：
//
//
//输入：root = [1,2,2,null,3,null,3]
//输出：false
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [1, 1000] 内
// -100 <= Node.val <= 100
//
//
//
//
// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 2919 👎 0


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

function isSymmetric(root: TreeNode | null): boolean {

};


//leetcode submit region end(Prohibit modification and deletion)

/**
 * 递归
 */
// function isSymmetric(root: TreeNode | null): boolean {
//     if (!root) {
//         return true
//     }
//
//     return isMirror(root.left, root.right)
// };

// function isMirror(left, right): boolean {
//     if (left === null && right === null) {
//         return true
//     }
//
//     if (left === null || right === null) {
//         return false
//     }
//
//     if (left.val !== right.val) {
//         return false
//     }
//
//     return isMirror(left.left, right.right) && isMirror(left.right, right.left)
// }
