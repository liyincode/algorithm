//给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
//
//
//
// 示例 1：
//
//
//
//
//输入：root = [4,2,7,1,3,6,9]
//输出：[4,7,2,9,6,3,1]
//
//
// 示例 2：
//
//
//
//
//输入：root = [2,1,3]
//输出：[2,3,1]
//
//
// 示例 3：
//
//
//输入：root = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 树中节点数目范围在 [0, 100] 内
// -100 <= Node.val <= 100
//
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1939 👎 0


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

function invertTree(root: TreeNode | null): TreeNode | null {

};
//leetcode submit region end(Prohibit modification and deletion)

/**
 * 递归
 *
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) {
//         return null
//     }
//
//     if (root.left) {
//         invertTree(root.left)
//     }
//     if (root.right) {
//         invertTree(root.right)
//     }
//
//     const swap = (root: TreeNode) => {
//         const temp = root.left
//         root.left = root.right
//         root.right = temp
//     }
//
//     swap(root)
//
//     return root
// };

/**
 * 使用队列
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) {
//         return null
//     }
//
//     const queue = [root]
//
//     while (queue.length) {
//         const curr = queue.shift()
//
//         const temp = curr.left
//         curr.left = curr.right
//         curr.right = temp
//
//         if (curr.left) {
//             queue.push(curr.left)
//         }
//         if (curr.right) {
//             queue.push(curr.right)
//         }
//     }
//
//     return root
// };


/**
 * 深度优先遍历
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) {
//         return null
//     }
//
//     const stack = [root]
//
//     while (stack.length) {
//         const curr = stack.pop()
//
//         const temp = curr.left
//         curr.left = curr.right
//         curr.right = temp
//
//         if (curr.left) {
//             stack.push(curr.left)
//         }
//         if (curr.right) {
//             stack.push(curr.right)
//         }
//     }
//
//     return root
// };
