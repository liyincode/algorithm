function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }

    return result.concat(left, right)
}

const data = [3, 2, 1, 4, 6, 5]
const result = mergeSort(data)

console.log(result)

/*
[3, 2, 1, 4, 6, 5]
    /       \
[3]  [2, 1]  [4] [6, 5]
 \    /  \    \    /  \
  \  [2] [1]   \  [6] [5]
   \  \  /      \  \  /
    \ [1, 2]     \ [5, 6]
     \ /          \ /
     [1, 2, 3]    [4, 6, 5]
         \          /
      [1, 2, 3, 4, 5, 6]
 */


