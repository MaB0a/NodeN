function runProgram(input) {
  var A = input.split('\n'),
    a = A[1].split(' ').map(Number)
  var b = []
  b.push(-1)
  for (let j = 1; j < a.length; j++) {
    var c = b.length - 1
    for (let k = j - 1; k >= 0; k--) {
      if (a[j] > a[k]) {
        b.push(a[k])
        break
      }
      if (b[c] == -1) {
        b.push(-1)
        break
      }
      c--
    }
  }
  console.log(b.join(' '))
}

if (process.env.USERNAME === 'maney') {
  runProgram(`8
39 27 11 4 24 32 32 1`)
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
