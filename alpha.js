// function find(x, n, cur) {
//   if (n.length > 0) {console.log(n)}
//   if (cur==x.length) return;
//   for (let i = cur; i < x.length; i++) {
//   n +=x[i]
//   find(x,n,i+1)
//   n=n.split('')
// let m = n.length-1
// n.splice(m,1)
// n=n.join('')
// }
// }

// function runProgram(input) {
//   let a = input.split('\n')
//   let b = a[1]
//   let c = ''
//   find(b,c,0)
// }
function find(arr, L, R) {
  if (L == R) {
    console.log(arr.join(' '))
  } else {
    for (let i = L; i <= R; i++) {
      let brr = [...arr]
      //swap
      let n = brr[i]
      brr[i] = brr[L]
      brr[L] = n

      //recur
      find(brr, L + 1, R)

      let m = arr[i]
      arr[i] = arr[L]
      arr[L] = m
    }
  }
}
function runProgram(input) {
  let a = input.split('\n')
  let b = a[1].trim().split(' ').map(Number)
  let r = b.length - 1
  find(b, 0, r)
}

if (process.env.USERNAME === 'maney') {
  runProgram(`3
1 2 3`)
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
  //andha
}
