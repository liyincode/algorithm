function insertionSort(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        // 当前元素
        const curr = nums[i]

        let j;
        for (j = i - 1; j >= 0; j--) {
            if (curr < nums[j]) {
                nums[j + 1] = nums[j]
            } else {
                break;
            }
        }

        nums[j + 1] = curr
    }

    return nums
}

// 使用示例
const array = [12, 11, 13, 5, 6];
console.log("排序前:", array);
insertionSort(array);
console.log("排序后:", array);
