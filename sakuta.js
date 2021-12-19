function runProgram(input) {
  var A = input.split('\n')

  for (let i = 1; i < A.length; i += 2) {
    let Q = [],
      Num = A[i].split(' ').map(Number),
      N = Num[0],
      M = Num[1],
      a = A[i + 1],
      m = true
    if (N == M) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] == '(') {
          Q.push('(')
        } else if (a[j] == ')') {
          if (Q.length > 0) {
            Q.pop()
          } else {
            m = false
          }
        }
      }
      if (Q.length == 0 && m != false) {
        console.log('yes')
      } else {
        console.log('no')
      }
    } else {
      console.log('no')
    }
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`2
4 4
()())`)
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
