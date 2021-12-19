function runProgram(input) {
var A = input.split('\n'),
  s = [],S = []
 
  for (let i = 1; i < A.length; i+=2) {
    let a = A[i].trim().split(' ').map(Number)
    let n = 1
 for (let j = 0; j < a.length; j++) {
let l = s.length -1
if (a[j]!==n) {
  s.push(a[j])
  a.splice(j,1)
  j=0
}else{
  console.log('m');
  n++
}
 }
 console.log(a,s);
}
}

if (process.env.USERNAME === 'maney') {
  runProgram(`5
5 1 2 4 3 
0`)
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
