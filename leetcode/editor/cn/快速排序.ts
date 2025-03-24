function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0]

    const left: number[] = []
    const equal: number[] = []
    const right: number[] = []


    for (const element of arr) {
        if (pivot > element) {
            left.push(element)
        } else if (pivot === element) {
            equal.push(element)
        } else {
            right.push(element)
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)]
}

// 示例：使用快速排序对数组进行排序
const unsortedArray = [8, 3, 5, 1, 9, 6, 0, 7, 4, 2];
console.log('原始数组:', unsortedArray);
console.log('排序后:', quickSort(unsortedArray));
