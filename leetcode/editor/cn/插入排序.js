function insertSort(arr) {
  if (arr.length <= 1) return

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]
    let j = i - 1

    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }

    arr[j + 1] = value
  }
}

const arr = [4, 5, 6, 1, 3, 2]
insertSort(arr)
console.log(arr)


