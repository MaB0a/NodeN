// function myArr(X) {
//   Object.defineProperty(this, 'length', {
//     value: 0,
//     writable: true,
//     enumerable: false,
//     configurable: true,
//   })
//   this.length = arguments.length
//   for (let i = 0; i < this.length; i++) {
//     this[i] = arguments[i]
//   }
//   myArr.prototype.pushh = function (element) {
//     let index = this.length
//     this.length++
//     this[index] = element
//   }
//   myArr.prototype.gop = function (element) {
//     let index = this.length - 1
//     delete this[index]
//     this.length--
//   }
//   myArr.prototype.revers = function (element) {
//     var ars = []
//     for (let i = this.length - 1; i >= 0; i--) {
//       ars.push(this[i])
//     }
//     return ars['0']
//   }
//   myArr.prototype.zero = function () {
//     var a = this[0]
//     return a
//   }
// }
// var arr = new myArr('alpha', 'beta', 'gamma')
// arr.pushh('zeta')
// // arr.gop()
// console.log('arr:', arr.zero())

// tryout
// let arr = [
//   [0, 4, 0],
//   [0, 0, 2],
//   [0, 0, 6],
// ]
// function isVAlid(arr, x, y, number) {
//   //row
//   for (let j = 0; j < arr[0].length; j++) {
//     if (arr[x][j] == number) {
//       return false
//     }
//   }
//   //col
//   for (let i = 0; i < arr[0].length; i++) {
//     if (arr[i][y] == number) {
//       return false
//     }
//   }
//   //3*3
//   let bi = Math.floor(x / 3) * 3
//   let bj = Math.floor(y / 3) * 3

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (arr[bi + i][bj + j] == number) {
//         return false
//       }
//     }
//   }
//   return true
// }

// function SOLVER(arr, col, row, ans) {
//   if (col > 3) {
//     if (row == 2) {
//       console.log(arr)
//       return
//     }
//   }
//   if (arr[row][col] !== 0) {
//     SOLVER(arr, row, col + 1, ans)
//   } else {
//     for (let k = 1; k <= 9; k++) {
//       if (isVAlid(arr, row, col, k)) {
//         arr[row][col] = k
//         SOLVER(arr, row, col, ans)
//         arr[row][col] = 0
//       }
//     }
//   }
// }

// SOLVER(arr,0,0,arr)

let count = 0
function find(x, n, cur) {
 if (n % 2 != 0) {
    count++
  }
  if (cur == x.length) return
  for (let i = cur; i < x.length; i++) {
    n += x[i]
    find(x, n, i + 1)
    n -= x[i]
  }
}

function runProgram(input) {
  let a = input.split('\n')
  let b = a[1].trim().split(' ').map(Number)

  let c = 0
  find(b, c, 0)
   console.log(count);
}

if (process.env.USERNAME === 'maney') {
  runProgram(`7
-3 -1 -10 8 -5 0 7 `)
} else {
  process.stdin.resume()
  process.stdin.setEncoding('ascii')
  let read = ''
  process.stdin.on('data', function (input) {
    read += input
  })
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '')
    read = read.replace(/\n$/, '')
    runProgram(read)
  })
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '')
    runProgram(read)
    process.exit(0)
  })
}
