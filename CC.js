let count = 0
function find(x, n, cur) {
  if (n%2==1) {
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
  let b = a[1].split(' ').map(Number)
  let c = 0
  find(b, c, 0)
  console.log(count);
}

if (process.env.USERNAME === 'maney') {
  runProgram(`2
2 4`)
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
