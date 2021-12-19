
const B = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
let count = 0
function rec(i, j, n) {
  if (i < 0 || j < 0 || i > 9 || j > 9) {
    return
  }
  if (n == 0) {
    B[i][j] = 1
    return 
  }
  rec(i - 2, j + 1, n - 1)
  rec(i - 2, j - 1, n - 1)
  rec(i - 1, j + 2, n - 1)
  rec(i - 1, j - 2, n - 1)
  rec(i + 2, j - 1, n - 1)
  rec(i + 2, j + 1, n - 1)
  rec(i + 1, j - 2, n - 1)
  rec(i + 1, j + 2, n - 1)
}

function runProgram(input) {
  let a = input.split(' ').map(Number)
 let I = a[0]-1,J = a[1]-1,N = a[2]
  rec(I,J,N)
  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B[i].length; j++) {
        if (B[i][j]==1) {
          count++
        }
    }
      }
      console.log(count);
}
if (process.env.USERNAME === 'maney') {
  runProgram(`4 4 2`)
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
