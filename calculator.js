
function runProgram(input) {
let a = input.split('\n')
for (let i = 2; i < a.length; i+=2) {
let b = a[i].split(' ').map(Number)  

for (let j = 0; j < b.length; j++) {
 let ar = [...b]
let m = b.splice(j,1)
// console.log(m);
if (b.indexOf(m[0])==-1) {
  console.log(m[0]);
}
b = [...ar]
// console.log(b);
}

}
}


if (process.env.USERNAME === 'maney') {
  runProgram(`2
1
5
5
1 2 1 3 2`)
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
