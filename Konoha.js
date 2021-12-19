function runProgram(input) {
  var A = input.split('\n'),
    a = Number(A[0]),
    b = []
  for (let i = 1; i <= a; i++) {
    b.push(A[i].split(' ').map(Number))
  }
  var c = []
  for (let i = 0; i < b[0].length; i++) {
    c.push(b[0][i])
    c.push(b[a - 1][i])
  }

  for (let i = 1; i < b.length - 1; i++) {
    c.push(b[i][0])
    c.push(b[i][a - 1])
  }
  for (let i = 1; i < b.length - 1; i++) {
    for (let j = 1; j < b[i].length - 1; j++) {
      if (j - i == 0) {
        c.push(b[i][j])
      }
      if (j + i == a - 1) {
        c.push(b[i][j])
      }
    }
  }
  var d = b[(a - 1) / 2][(a - 1) / 2]
  var C =c.reduce(function(acc,ele){
    return acc + ele
  },0)
  console.log(C-d)
}

if (process.env.USERNAME === 'maney') {
  runProgram(`5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7
`)
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
