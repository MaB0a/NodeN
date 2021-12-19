// let a = [1,3,2,3,1]
// a = [2,4,3,2]
//  let l = a.length - 1
//  for (let i = 0; i < a.length / 2; i++) {
//    if (a[i] != a[l]) {
//      // return false
//      console.log(false)
//    }
//    l--
//  }
//  // return true
//  console.log(true)
// // if (a.length % 2 == 0) {
// //  let l = a.length -1
// //  for (let i = 0; i < a.length/2; i++) {
// //   if (a[i]!=a[l]) {
// //    // return false
// //    console.log(false);
// //   }
// //   l--

// //  }
// //  // return true
// //  console.log(true);
// // } else {
// //   let l = a.length - 1
// //   for (let i = 0; i < a.length / 2; i++) {
// //    console.log(a[l],a[i]);
// //     if (a[i] != a[l]) {
// //       // return false
// //       console.log(false)
// //     }
// //     l--
// //   }
// //   // return true
// //   console.log(true)
// // }
let count = 0
function find(x, n, cur, C) {
if (cur==0) {
  count=0
};
  if (n.length > 0) {
    let con = 0
    for (let i = 0; i < n.length; i++) {
      // console.log(n[i]);
      if (n[i] % 2 == 0) {
        con++
      }
    }
    if (con==C) {
      console.log(n);
      count++
    }
  }
  if (cur == x.length) return
  for (let i = cur; i < x.length; i++) {
    n.push(x[i])
    find(x, n, i + 1, C)
    n.pop()
  }
}

function runProgram(input) {
  let a = input.split('\n')
  for (let i = 1; i < a.length; i += 2) {
    let B = a[i].split(' ').map(Number)
    let b = a[i + 1].split(' ').map(Number)
    let c = []
    find(b, c, 0, B[1],0)
    console.log(count)
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`2
4 3
4 3 2 1 6
2 1
2 3 2 4`)
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
