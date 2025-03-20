//给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：[[3],[9,20],[15,7]]
//
//
// 示例 2：
//
//
//输入：root = [1]
//输出：[[1]]
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
// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000
//
//
// Related Topics 树 广度优先搜索 二叉树 👍 2103 👎 0


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

function levelOrder(root: TreeNode | null): number[][] {

};
//leetcode submit region end(Prohibit modification and deletion)

/**
 * 广度优先遍历
 */
/*
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const queue = [root]
    const result:number[][] = []

    while (queue.length) {
        // 这一层有多少 node
        const nodes = queue.length
        // 这一层要放入的 node.val
        const nodesVal = []

        for (let i = 0; i < nodes; i++) {
            const node = queue.shift()
            nodesVal.push(node.val)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        result.push(nodesVal)

    }

    return result

};

 */

/*
function levelOrder(root: TreeNode | null): number[][] {
    const result = []

    function traverse(node, level) {
        if (!node) {
            return
        }

        // 如果还是这一层的
        if (result.length === level) {
            result.push([])
        }

        result[level].push(node.val)

        traverse(node.left, level+1)
        traverse(node.right, level + 1)
    }

    traverse(root, 0)
    return result
};

 */
