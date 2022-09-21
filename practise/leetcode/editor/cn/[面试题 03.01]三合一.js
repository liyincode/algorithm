// 三合一。描述如何只用一个数组来实现三个栈。
//
// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。
// stackNum表示栈下标，value表示压入的值。
//
// 构造函数会传入一个stackSize参数，代表每个栈的大小。
//
// 示例1:
//
//
// 输入：
// ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
// [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
// 输出：
// [null, null, null, 1, -1, -1, true]
// 说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
//
//
// 示例2:
//
//
// 输入：
// ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
// [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
// 输出：
// [null, null, null, null, 2, 1, -1, -1]
//
//
//
//
// 提示：
//
//
// 0 <= stackNum <= 2
//
//
// Related Topics 栈 设计 数组 👍 52 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} stackSize
 */
const TripleInOne = function (stackSize) {
  this.stackSize = stackSize
  this.stack = []
  this.stackMessage = []
}

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  if (this.stackSize === 0) {
    return
  }

  const target = this.stackMessage[stackNum]

  if (target) {
    if (target.length < this.stackSize) {
      this.stack.push({
        num: stackNum,
        value,
      })
      target.length++
    }
  } else {
    this.stack.push({
      num: stackNum,
      value,
    })
    this.stackMessage[stackNum] = {
      length: 1,
    }
  }
}

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  const target = this.stackMessage[stackNum]
  if (!target || target.length === 0) {
    return -1
  }

  const tempStack = []
  let popValue = null
  while (this.stack.length) {
    const top = this.stack.pop()
    if (popValue === null && top.num === stackNum) {
      popValue = top.value
    } else {
      tempStack.push(top)
    }
  }

  while (tempStack.length) {
    this.stack.push(tempStack.pop())
  }

  if (popValue !== null) {
    target.length--
    return popValue
  } else {
    return -1
  }
}

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  if (this.stack.length === 0) {
    return -1
  }

  const tempStack = []
  let peekValue = null
  while (this.stack.length) {
    const top = this.stack.pop()
    if (peekValue === null && top.num === stackNum) {
      peekValue = top.value
    }
    tempStack.push(top)
  }

  while (tempStack.length) {
    this.stack.push(tempStack.pop())
  }

  if (peekValue === null) {
    return -1
  } else {
    return peekValue
  }
}

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  if (this.stack.length === 0) {
    return true
  }

  const tempStack = []
  let isEmpty = true
  while (this.stack.length) {
    const top = this.stack.pop()
    if (isEmpty && top.num === stackNum) {
      isEmpty = false
    }
    tempStack.push(top)
  }
  while (tempStack.length) {
    this.stack.push(tempStack.pop())
  }

  return isEmpty
}

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
// leetcode submit region end(Prohibit modification and deletion)

let stack = null
const handleList = ['TripleInOne', 'isEmpty', 'pop', 'peek', 'push', 'isEmpty', 'pop', 'pop', 'peek', 'isEmpty', 'pop', 'isEmpty', 'isEmpty', 'isEmpty', 'peek', 'peek', 'push', 'push', 'pop', 'push', 'push', 'pop', 'push', 'pop', 'peek', 'isEmpty', 'push', 'pop', 'peek', 'pop', 'isEmpty', 'isEmpty', 'pop', 'peek', 'isEmpty', 'isEmpty']
const paramList = [[0], [2], [1], [0], [0, 10], [1], [0], [0], [1], [0], [2], [1], [2], [0], [2], [1], [0, 25], [2, 17], [0], [0, 12], [0, 23], [1], [2, 9], [2], [0], [2], [2, 14], [1], [0], [2], [1], [0], [1], [2], [1], [2]]

for (let i = 0; i < handleList.length; i++) {
  const handle = handleList[i]
  console.log(stack && stack.stack)
  switch (handle) {
    case 'TripleInOne':
      console.log('TripleInOne', `${paramList[i][0]}`, stack = new TripleInOne(paramList[i][0]))
      break
    case 'push':
      console.log('push ', `(${paramList[i][0]}, ${paramList[i][1]})`, 'null')
      stack.push(paramList[i][0], paramList[i][1])
      break
    case 'peek':
      console.log('peek ', `(${paramList[i][0]})`, stack.peek(paramList[i][0]))
      break
    case 'pop':
      const result = stack.pop(paramList[i][0])
      console.log('pop ', `(${paramList[i][0]})`, result)
      break
    case 'isEmpty':
      console.log('isEmpty', `(${paramList[i][0]})`, stack.isEmpty(paramList[i][0]))
  }
}

// const TripleInOne = function (stackSize) {
//   this.stackSize = stackSize
//   this.stack = []
//   this.stackMessage = []
// }
//
// /**
//  * @param {number} stackNum
//  * @param {number} value
//  * @return {void}
//  */
// TripleInOne.prototype.push = function (stackNum, value) {
//   if (this.stackSize === 0) {
//     return
//   }
//
//   const target = this.stackMessage[stackNum]
//
//   if (target) {
//     if (target.length < this.stackSize) {
//       this.stack.push({
//         num: stackNum,
//         value,
//       })
//       target.length++
//     }
//   } else {
//     this.stack.push({
//       num: stackNum,
//       value,
//     })
//     this.stackMessage[stackNum] = {
//       length: 1,
//     }
//   }
// }
//
// /**
//  * @param {number} stackNum
//  * @return {number}
//  */
// TripleInOne.prototype.pop = function (stackNum) {
//   const target = this.stackMessage[stackNum]
//   if (!target || target.length === 0) {
//     return -1
//   }
//
//   const tempStack = []
//   let popValue = null
//   while (this.stack.length) {
//     const top = this.stack.pop()
//     if (popValue === null && top.num === stackNum) {
//       popValue = top.value
//     } else {
//       tempStack.push(top)
//     }
//   }
//
//   while (tempStack.length) {
//     this.stack.push(tempStack.pop())
//   }
//
//   if (popValue !== null) {
//     target.length--
//     return popValue
//   } else {
//     return -1
//   }
// }
//
// /**
//  * @param {number} stackNum
//  * @return {number}
//  */
// TripleInOne.prototype.peek = function (stackNum) {
//   if (this.stack.length === 0) {
//     return -1
//   }
//
//   const tempStack = []
//   let peekValue = null
//   while (this.stack.length) {
//     const top = this.stack.pop()
//     if (peekValue === null && top.num === stackNum) {
//       peekValue = top.value
//     }
//     tempStack.push(top)
//   }
//
//   while (tempStack.length) {
//     this.stack.push(tempStack.pop())
//   }
//
//   if (peekValue === null) {
//     return -1
//   } else {
//     return peekValue
//   }
// }
//
// /**
//  * @param {number} stackNum
//  * @return {boolean}
//  */
// TripleInOne.prototype.isEmpty = function (stackNum) {
//   if (this.stack.length === 0) {
//     return true
//   }
//
//   const tempStack = []
//   let isEmpty = true
//   while (this.stack.length) {
//     const top = this.stack.pop()
//     if (isEmpty && top.num === stackNum) {
//       isEmpty = false
//     }
//     tempStack.push(top)
//   }
//   while (tempStack.length) {
//     this.stack.push(tempStack.pop())
//   }
//
//   return isEmpty
// }
