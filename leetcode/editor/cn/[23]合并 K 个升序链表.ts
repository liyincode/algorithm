//给你一个链表数组，每个链表都已经按升序排列。
//
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
//
//
//
// 示例 1：
//
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
//输出：[1,1,2,3,4,4,5,6]
//解释：链表数组如下：
//[
//  1->4->5,
//  1->3->4,
//  2->6
//]
//将它们合并到一个有序链表中得到。
//1->1->2->3->4->4->5->6
//
//
// 示例 2：
//
// 输入：lists = []
//输出：[]
//
//
// 示例 3：
//
// 输入：lists = [[]]
//输出：[]
//
//
//
//
// 提示：
//
//
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4
//
//
// Related Topics 链表 分治 堆（优先队列） 归并排序 👍 2983 👎 0


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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

}


//leetcode submit region end(Prohibit modification and deletion)

/*
构造一个最小堆
使用一个哨兵节点，一直 next 这个最小堆的堆顶，直到这个堆为空
 */
/*
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 清除空
    lists = lists.filter(item => item)
    if (lists.length === 0) {
        return null
    }

    // 哨兵节点
    const dummyNode = new ListNode()
    let curr = dummyNode

    // 最小堆
    const minHeap = []

    // 将每个头节点放入最小堆
    for (const node of lists) {
        minHeap.push(node)
    }

    // 堆化
    buildmInHeap(minHeap)

    while (minHeap.length > 0) {
        // 取出堆顶元素连接到哨兵节点
        const minNode = minHeap[0]
        curr.next = minNode
        curr = curr.next

        if (minNode.next) {
            // 将该节点的下一个节点加入堆
            minHeap[0] = minNode.next
            heapifyDown(minHeap, 0)
        } else {
            // 如果当前节点没有下一个节点了，就删除堆顶（已经被加入哨兵节点了,不在需要了）
            // 将堆的最后一个元素补到堆顶，然后堆化
            minHeap[0] = minHeap[minHeap.length - 1]
            minHeap.pop()
            if (minHeap.length > 0) {
                heapifyDown(minHeap, 0)
            }
        }
    }

    return dummyNode.next
}


// 构建最小堆
function buildmInHeap(heap) {
    // 寻找非叶子节点,从下往上堆化，直到根节点
    for (let i = Math.floor(heap.length / 2) -1; i >= 0; i--) {
        heapifyDown(heap, i)
    }
}

// 下沉操作
function heapifyDown(heap, index) {
    const size = heap.length
    let smallest = index
    const left = 2 * index + 1
    const right = 2 * index + 2

    if (left < size && heap[left].val < heap[smallest].val) {
        smallest = left
    }
    if (right < size && heap[right].val < heap[smallest].val) {
        smallest = right
    }

    if (smallest !== index) {
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]]
        heapifyDown(heap, smallest)
    }
}
*/
