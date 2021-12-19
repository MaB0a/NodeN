function runProgram(input) {
  var A = input.split('\n'),
    a = Number(A[0]),b = []
for (let i = 1; i <= a; i++) {
  b.push(A[i].split(' ').map(Number))
}
var c = 0
for (let i = 0; i < b[0].length; i++) {
  c+=b[0][i]
  c += b[a - 1][i]
}
for (let i = 1; i < b.length-1; i++) {
  c+=b[i][0]
  c+=b[i][a-1]
}
for (let i = 1; i < b.length-1; i++) {
  for (let j = 1; j < b[i].length-1; j++) {
    if (j-i==0) {
      c+=b[i][j]
    }
    if (j+i==a-1) {
      c+=(b[i][j])
    }
  }
}
if (a%2!=0) {
  c-=b[(a-1)/2][(a-1)/2]
}
console.log(c);
}

if (process.env.USERNAME === 'maney') {
  runProgram(`8
21 12 12 334 1112 32322 221 212
53 2342 12 232 121 1235 979 7
23 3422 445 22 233 2234 235 235
32 35 323 232 334 232 32 32
21 12 12 334 1112 32322 221 212
53 2342 12 232 121 1235 979 7
23 3422 445 22 233 2234 235 235
32 35 323 232 334 232 32 32
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
