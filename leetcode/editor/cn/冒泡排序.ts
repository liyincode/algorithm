function bubbleSort(nums: number[]): number[] {
    const len = nums.length

    for (let i = 0; i < len - 1; i++) {
        let swapped = false

        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j + 1] > nums[j]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                swapped = true;
            }
        }

        if (!swapped) {
            break
        }
    }

    return nums
}

// 使用示例
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", array);
bubbleSort(array);
console.log("排序后:", array);
