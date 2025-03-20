//给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
//
//
//
// 示例 1：
//
//
//输入：root = [1,null,2,3]
//输出：[1,3,2]
//
//
// 示例 2：
//
//
//输入：root = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：root = [1]
//输出：[1]
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//
//
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
//
// Related Topics 栈 树 深度优先搜索 二叉树 👍 2213 👎 0


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

function inorderTraversal(root: TreeNode | null): number[] {

};

//leetcode submit region end(Prohibit modification and deletion)
/*
关键在于 curr
 */
/*
function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }

    const result = []

    const stack = []
    let curr = root

    while(curr || stack.length) {
        // 寻找左叶子节点
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        // 出栈改变 curr，并不是按照树结构顺序
        curr = stack.pop()
        result.push(curr.val)

        // 转向右节点
        curr = curr.right
    }

    return result
};
 */
