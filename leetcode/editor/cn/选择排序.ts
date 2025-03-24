function selectionSort(nums: number[]): number[] {
    const len = nums.length

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // 在未排序的区域找最小值的索引
        for (let j = i + 1; j < len; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j
            }
        }

        // 如果找到的索引不是 i ，就将元素交换
        if (minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
        }
    }

    return nums;
}

// 使用示例
const array = [64, 25, 12, 22, 11];
console.log("排序前:", array);
selectionSort(array);
console.log("排序后:", array);
