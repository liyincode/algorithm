//给定一个二叉树 root ，返回其最大深度。
//
// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
//
//
//
// 示例 1：
//
//
//
//
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：3
//
//
// 示例 2：
//
//
//输入：root = [1,null,2]
//输出：2
//
//
//
//
// 提示：
//
//
// 树中节点的数量在 [0, 10⁴] 区间内。
// -100 <= Node.val <= 100
//
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1944 👎 0


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

function maxDepth(root: TreeNode | null): number {

};
//leetcode submit region end(Prohibit modification and deletion)
/**
 * 广度优先遍历
 */
/*
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const queue: TreeNode[] = [root]
    let depth= 0;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        depth++
    }

    return depth
};

 */
/*
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)

    return Math.max(leftDepth, rightDepth) + 1;
};

 */

/*
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    let maxLayer = 1;

    const find = (node, layer) => {
        if (node.left || node.right ) {
            layer++
        }

        if (node.left) {
            find(node.left, layer)
        }

        if (node.right) {
            find(node.right, layer)
        }

        if (layer > maxLayer) {
            maxLayer = layer
        }

    }

    find(root, 1)

    return maxLayer
};

 */
