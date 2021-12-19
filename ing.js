function runProgram(input) {
  var A = input.split('\n'),
a = A[1].split(' ').map(Number)
var b = []
b.push(1)
for (let i = 1; i < a.length; i++) {
  var c = b.length-1
  for (let j = i-1; j >=0 ; j--) {
    // console.log(i,j);
    if (a[i]>a[j]) {
      b.push(j)
      // c++
      break
    }
    // console.log(c);
    if (b[c]==1) {
      b.push(1)
      // c++
      break
    }
    c--
    // if (j==0 && a[i]<[a[j]]) {
    //   b.push(-1)
    // }

  }
  
}
console.log(b.join(' '));
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
