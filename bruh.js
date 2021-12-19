function runProgram(input) {
var A = input.split('\n')
for (let l = 1; l < A.length; l+=2) {
var a = A[l+1].split(' ').map(Number)
 var arr = []
 a=a.reverse()
 arr.push(-1)
 for (let i = 1; i < a.length; i++) {
   var k = true
   for (let j = i - 1; j >= 0; j--) {
     if (a[j] > a[i]) {
       arr.push(a[j])
       k = false
       break
     }

     if (j == 0 && k == true) {
       arr.push(-1)
     }
   }
 }
 console.log(arr.reverse().join(' '))
 
}
}

if (process.env.USERNAME === 'maney') {
  runProgram(`1
4
1 3 2 4`)
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