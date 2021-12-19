function runProgram(input) {
  var A = input.split('\n'),
    K = A[0].split(' ')[1],K = Number(K),a = A[1].split(' ').map(Number)

  // for (let i = 0; i < a.length - 1; i++) {
  //   var swap = false
  //   for (let j = 0; j < a.length - i - 1; j++) {
  //     if (a[j] > a[j + 1]) {
  //       var k = a[j]
  //       a[j] = a[j + 1]
  //       a[j + 1] = k
  //       swap = true
  //     }
  //   }
  //   if (swap == false) {
  //     break
  //   }
  // }
 // var b =  a.map(function(i) {
 //   return i%K
 //  })
console.log(b);
    for (let i = 0; i < a.length - 1; i++) {
      var swap = false
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j]%K > a[j + 1]%K) {
          var k = a[j]
          a[j] = a[j + 1]
          a[j + 1] = k
          swap = true
        }
      }
      if (swap == false) {
        break
      }
    }
  console.log(a.join(' '));
}

if (process.env.USERNAME === 'maney') {
  runProgram(`10 20
384 387 278 416 294 336 387 493 150 422`)
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
