//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
//
//
//
// 示例 1:
//
//
//输入: nums = [1,1,1,2,2,3], k = 2
//输出: [1,2]
//
//
// 示例 2:
//
//
//输入: nums = [1], k = 1
//输出: [1]
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10⁵
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
//
//
//
//
// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
//
// Related Topics 数组 哈希表 分治 桶排序 计数 快速选择 排序 堆（优先队列） 👍 1986 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function topKFrequent(nums: number[], k: number): number[] {

}



//leetcode submit region end(Prohibit modification and deletion)

/*
function topKFrequent(nums: number[], k: number): number[] {
    // 统计每个元素出现的频率
    const frequencyMap: Map<number, number> = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 使用最小堆找出前K个高频元素
    // 创建一个数组来充当优先队列
    const priorityQueue: [number, number][] = []; // [元素, 频率]

    for (const [num, freq] of frequencyMap) {
        // 如果队列未满，直接添加
        if (priorityQueue.length < k) {
            priorityQueue.push([num, freq]);
            // 调整堆（保持最小堆性质）
            heapifyUp(priorityQueue, priorityQueue.length - 1);
        }
        // 如果当前元素的频率大于堆顶，替换堆顶
        else if (freq > priorityQueue[0][1]) {
            priorityQueue[0] = [num, freq];
            // 调整堆
            heapifyDown(priorityQueue, 0, k);
        }
    }

    // 提取前K个高频元素
    return priorityQueue.map(item => item[0]);
}

// 自下而上的堆化（上浮操作）
function heapifyUp(heap: [number, number][], index: number): void {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        // 如果当前节点的频率小于父节点，交换
        if (heap[index][1] < heap[parentIndex][1]) {
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        } else {
            break;
        }
    }
}

// 自上而下的堆化（下沉操作）
function heapifyDown(heap: [number, number][], index: number, size: number): void {
    while (true) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        // 找出三个节点中频率最小的
        if (leftChild < size && heap[leftChild][1] < heap[smallest][1]) {
            smallest = leftChild;
        }

        if (rightChild < size && heap[rightChild][1] < heap[smallest][1]) {
            smallest = rightChild;
        }

        // 如果当前节点已经是最小的，停止
        if (smallest === index) {
            break;
        }

        // 交换并继续下沉
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

 */
