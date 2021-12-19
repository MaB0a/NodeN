
function runProgram(input) {
  var A = input.split('\n')
  for (let l = 2; l < A.length; l+=2) {
    var a = A[l].split(' ').map(Number),arr = []
    arr.push(1)
    for (let i = 1; i < a.length; i++) {
      for (let j = i-1; j >= 0; j--) {
        if (a[j]>a[i]) {
          arr.push(i-j)
          break
        }

        if (j==0) {
          arr.push(i-j+1);
          break
        }
      }
      
    }
    console.log(arr.join(' '));
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`2
5
3 5 0 9 8`)
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
