function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        // 因为 j 与 j + 1 在比较，所以内部 for 循环应该结束到倒数第二个
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        // 没有数据交换，已经全部排序好了，提前推出 for 循环
        if (!flag) break;
    }
}

const arr = [3, 2, 5, 1, 4, 1, 3, 8, 9, 11, 2, 3, 4];
bubbleSort(arr);
console.log(arr);
