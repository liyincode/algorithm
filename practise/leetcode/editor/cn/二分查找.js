// 循环二分查找
const bsearch = (a, n, value) => {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (a[mid] === value) {
            return mid;
        } else if (a[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

// 递归二分查找
const bsearch_r = (a, n, value) => {
    return recursionBinarySearch(a, 0, n - 1, value);
}

const recursionBinarySearch = (a, low, high, value) => {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (a[mid] === value) {
        return mid;
    } else if (a[mid] < value) {
        return  recursionBinarySearch(a, mid + 1, high, value);
    } else {
        return recursionBinarySearch(a, low, mid - 1, value );
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(bsearch(arr, arr.length, 5));
console.log(bsearch_r(arr, arr.length, 5));
