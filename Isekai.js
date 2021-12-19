function runProgram(input) {
  var A = input.split('\n')

var a = A[1].split(' ').map(Number),b = Number(A[0])
var c = [],C = []
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    var d = [],D = []
    for (let k = i; k <= j; k++) {
      d.push(a[k])
      D.push(k+1)
    }
    if (d.join('')!='') {
      C.push(D)
      c.push(d)
    }
  }
}

var ans = []
for (let j = 0; j < c.length; j++) {
  const sum = c[j].reduce((accumulator, element) => {
    return accumulator + element
  }, 0)
  if (sum%2==0) {
    ans.push(C[j])
  }
}

console.log(ans.length);
  
}

if (process.env.USERNAME === 'maney') {
  runProgram(`5
2 5 4 4 4`)
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
