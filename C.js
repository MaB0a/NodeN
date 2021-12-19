// let count = 0
// function rec(arr,n,cur) {
//   if (n%2!=0) {
//     count++
//   }
// if (cur==arr.length) {
//   return
// }

//   for (let i = cur; i < arr.length; i++) {
//     n+=arr[i]
//     rec(arr,n,i+1)
//     n-=arr[i]
//   }
// }

// function runProgram(input) {
//   let a = input.split('\n')
//     b = a[1].split(' ').map(Number)
//     rec(b,0,0)
// console.log(count);
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`3
// 1 2 3`)
// } else {
//   process.stdin.resume()
//   process.stdin.setEncoding('ascii')
//   let read = ''
//   process.stdin.on('data', function (input) {
//     read += input
//   })
//   process.stdin.on('end', function () {
//     read = read.replace(/\n$/, '')
//     read = read.replace(/\n$/, '')
//     runProgram(read)
//   })
//   process.on('SIGINT', function () {
//     read = read.replace(/\n$/, '')
//     runProgram(read)
//     process.exit(0)
//   })
// }

// function rec(arr, n, cur, fin, c) {
//   let jik = false
//   if (fin == 0) {
//     return arr[fin]
//   }
//   if (arr[n] == arr[cur]) {
//     c++
//   }

//   if (cur == fin && c == 1) {
//     return arr[n]
//   } else if (cur == fin) {
//     c = 0
//     n++
//     cur = -1
//   }
//   if (n > fin) {
//     return
//   }
//   rec(arr, n, cur + 1, fin, c)
// }

// function runProgram(input) {
//   let a = input.split('\n')
//   for (let i = 2; i < a.length; i += 2) {
//     let b = a[i].split(' ').map(Number)
//     let v = []
//     let f = b.length - 1,
//       count = 0
//     let x = rec(b, 0, 0, f, count)
//     console.log(x)
//   }
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`2
// 1
// 5
// 5
// 1 2 1 3 2
// 2
// 2 2 1`)
// } else {
//   process.stdin.resume()
//   process.stdin.setEncoding('ascii')
//   let read = ''
//   process.stdin.on('data', function (input) {
//     read += input
//   })
//   process.stdin.on('end', function () {
//     read = read.replace(/\n$/, '')
//     read = read.replace(/\n$/, '')
//     runProgram(read)
//   })
//   process.on('SIGINT', function () {
//     read = read.replace(/\n$/, '')
//     runProgram(read)
//     process.exit(0)
//   })
// }
function para(arr,x) {
  if (arr.indexOf(x[0])==-1) {
    return true
  }else{
    return false
  }
}
function rec(arr, cur, fin) {
  if (fin==0) {
    return arr[0]
  }
  if (cur==fin) {
    return
  }
  let J =  [...arr]
  let N = arr.splice(cur,1)

  let z = para(arr,N)

  console.log(z,N[0]);
if (z==true) {
  return N[0]
}else{
  arr = [...J]
  rec(arr,cur+1,fin)
}

}

function runProgram(input) {
  let a = input.split('\n')
  for (let i = 2; i < a.length; i += 2) {
    let b = a[i].split(' ').map(Number)
    let v = []
    let f = b.length - 1,
      count = 0
    let x = rec(b, 0, f)
    console.log(x)
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
