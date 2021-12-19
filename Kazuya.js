function runProgram(input) {
  var B = input.split('\n'),A =[]
for (let x = 1; x < B.length; x++) {
  A.push(B[x])
}
  var a = A[0].split(' ').map(Number),
    n = a[0],
    m = a[1]
  var c = 1,
    i = 1,
    I = 0,
    S = []
  while (c < A.length) {
    var b = []
    for (let j = i; j <= n; j++) {
      b.push(A[j].split(' ').map(Number))
    }
var TR = [],RD=[],DL = [],LT = []

var Q = -(b.length-1)/2

var o = []
for (let r = 0; r < b.length; r++) {
  var O = []
  for (let C = b[r].length - 1; C >= 0; C--) {
    O.push(b[r][C])
  }
  o.push(O)
}

for (let r = 0; r < b.length; r++) {
  for (let C = 0; C < b[r].length; C++) {
   if (r-C==Q) {
     TR.push(b[r][C])
           LT.push(o[r][C])
   }
   if (C-r==Q) {
     DL.push(b[r][C])
           RD.push(o[r][C])
   }
  }
}



var arr = []
arr.push(TR)
arr.push(RD)
arr.push(DL.reverse())
arr.push(LT.reverse())
for (let r = 0; r < arr.length; r++) {
  arr[r].pop()
}
var ARR = ''
for (let r = 0; r < arr.length; r++) {
  ARR += arr[r].join(' ')
  ARR+=' '
}
console.log(ARR);

    c += n
    i = c + 1
    if (c < A.length) {
      var w = Number(A[c])
    }
    n += w
    n += 1
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`1
5
1 2 3 4 5
4 5 6 4 5
7 8 9 6 8
7 8 5 6 8
8 2 4 1 3`)
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
