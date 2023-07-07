const bsearch = (a, n, target) => {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (a[mid] === target) {
            // 如果 mid 的前一位还是 target，那这个 mid 所在的元素就不是第一个值
            if (mid === 0 || a[mid - 1] !== target) return mid;
            // 否则在前面的范围里再找
            else high = mid - 1;
        } else if (a[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return -1;
}

const data = [1, 2, 3, 3, 3, 6, 7];
console.log(bsearch(data, data.length, 3));
