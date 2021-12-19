let C = 0
function isVAlid(arr, x, y, number) {
  //row
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[x][j] == number) {
      return false
    }
  }
  //col
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[i][y] == number) {
      return false
    }
  }
  //3*3
  let bi = Math.floor(x / 3) * 3
  let bj = Math.floor(y / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[bi + i][bj + j] == number) {
        return false
      }
    }
  }
  return true
}
// let arr = [[0,4,0],[0,0,2],[0,0,6]]
// console.log(isVAlid(arc,0,0,9));
// function SUDOKU(arr, i, j) {
//   if (i == arr.length) {
//     console.log(arr)
//     return
//   }
//   // console.log(i);
//   let ni = 0,
//     nj = 0

//   if (j == arr[0].length) {
//     nj = 0
//     ni = i + 1
//   } else {
//     ni = i
//     nj = nj + 1
//   }
//   if (arr[i][j] != 0) {
//     SUDOKU(arr, ni, nj)
//   } else {
//     for (let NU = 1; NU <= 9; NU++) {
//       if (isVAlid(arr, i, j, NU) == true) {
//         arr[i][j] = NU
//      //   console.log(arr,ni,nj);
//      console.log(ni,nj);
//         // SUDOKU(arr, ni, nj)
//         arr[i][j] = 0
//      //   console.log(arr)

//       }
//     }
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let NU = 1; NU <= 9; NU++) {
//  if (isVAlid(arr, i, j, NU) == true) {
//    arr[i][j] = NU
//    break
//    //   console.log(arr,ni,nj);
//    // SUDOKU(arr, ni, nj)
//   //  arr[i][j] = 0
//    //   console.log(arr)
//  }
//     }

//   }
// }
// console.log(arr);
function checkS(arr, row, col, ans) {
  for (let k = 0; k <= 8; k++) {
    if (arr[k][col] == ans) {
      return false
    }
  }
  return true
}
function checkH(arr, row, col, ans) {
  for (let k = 0; k <= 8; k++) {
    if (arr[row][k] == ans) {
      return false
    }
  }
  return true
}
function CheckT(arr, row, col, ans) {
  let SR = row - (row % 3)
  let SC = col - (col % 3)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[SR + i][SC + j] == ans) {
        return false
      }
    }
  }
  return true
}

let maj = false
function SUDOKU(arr, row, col, ans) {
  if (col > 8) {
    if (row == 8) {
      let ans = ''
      for (let i = 0; i < arr.length; i++) {
        if (i==arr.length-1) {
          ans += arr[i].join(' ')
        }else{
          ans += arr[i].join(' ')+"\n"
        }
      }
      console.log(ans)
      maj = true
      return true
    }
    row++
    col = 0
  }
  if (arr[row][col] !== 0) {
    SUDOKU(arr, row, col + 1, ans)
  } else {
    for (let k = 1; k <= 9; k++) {
      if (
        checkS(arr, row, col, k) == true &&
        checkH(arr, row, col, k) == true &&
        CheckT(arr, row, col, k) == true
      ) {
        arr[row][col] = k
        SUDOKU(arr, row, col + 1, ans)
        arr[row][col] = 0
      }
    }
  }
}

function runProgram(input) {
  let a = input.trim().split('\n')
  let b = []
  for (let i = 0; i < a.length; i++) {
    let c = a[i].trim().split(' ').map(Number)
    b.push(c)
  }
  let ans = ''
  SUDOKU(b, 0, 0, ans)
  if (!maj) {
    console.log(-1);
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`0 0 0 0 5 4 3 0 6
0 0 0 0 0 3 2 7 0
0 0 0 7 2 0 0 0 1
9 0 0 0 7 0 0 5 3
0 0 0 0 0 0 0 0 0
8 2 0 0 1 0 0 0 9
3 0 0 0 6 1 0 0 0
0 4 6 9 0 0 0 0 0
7 0 1 5 4 0 0 0 6 `)
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

// var arr=[5,6,7,2,4,9]
// var i = 0,minPos = 1
// if (i !== minPos) {
//   ;[arr[i], arr[minPos]] = [arr[minPos], arr[i]]
// }
// console.log(arr);

// // let i = 5,minPos = 6
// // console.log(i, minPos)
// // // if (i !== minPos) {
// //   ;[i, minPos] = [minPos, i]
// // // }
// // console.log(i,minPos);
