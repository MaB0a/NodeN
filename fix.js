function runProgram(input) {
  var A = input.split('\n')
  for (let i = 1; i < A.length; i+=4) {
    
    
  
var a = A[i+1]
var b = A[i+3]
var c = a +' '+ b
c = c.split(' ').map(Number)
c = c.sort((a, b) => b - a)

var ob = {},oB = {}
for (let i = 0; i < c.length; i++) {
  if (c[i]>=0) {
    ob[c[i]]=0
  }else{
    oB[c[i]]=0
  }
}

var d = [],D = []
for (const property in ob) {
  d.push(property)
}
for (const property in oB) {
  D.push(property)
}
D = D.reverse()
// d = d.reverse()
console.log(D.join(' ')+' ' +d.join(' '));
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`1
4
1 2 3 4 -6 -8 -1
5
1 2 3 4 5
4
1 2 3 4 -6 -8 -1
5
1 2 3 4 5`)
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
