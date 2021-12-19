//quicksort
// function Sort(arr) {
//   if (arr.length === 1) {
//     return arr
//   }

//   const pivot = arr[arr.length - 1]
//   let Larr = []
//   let Rarr = []
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       Larr.push(arr[i])
//     } else {
//       Rarr.push(arr[i])
//     }
//   }

//   if (Larr.length > 0 && Rarr.length > 0) {
//     return [...Sort(Larr), pivot, ...Sort(Rarr)]
//   }  else if (Larr.length > 0) {
//     return [...Sort(Larr), pivot]
//   } else {
//     return [pivot, ...Sort(Rarr)]
//   }
// }

// function runProgram(input) {
//   var A = input.split('\n')
//   let m = A[1].split(' ').map(Number)
//   console.log(Sort(m).join(' '))
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`5
// 3 15 0 9 8`)
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

//MergeSort
function jodu(L, R) {
  const OUT = []
  let LI = 0,
    RI = 0

  while (LI < L.length && RI < R.length) {
    const Lel = L[LI]
    const Rel = R[RI]
    if (Lel < Rel) {
      OUT.push(Lel)
      LI++
    } else {
      OUT.push(Rel)
      RI++
    }
  }
  return [...OUT, ...L.slice(LI), ...R.slice(RI)]
}
// console.log(jodu([3,10,50],[2,8,19]));
const todu=(arr)=> {
  if (arr.length <= 1) {
    return arr
  }
  let m = Math.floor((arr.length) / 2)
  let Larr = arr.slice(0, m)
  let Rarr = arr.slice(m, arr.length)

  return jodu(todu(Larr), todu(Rarr))
}

function runProgram(input) {
  var A = input.split('\n')
  let m = A[1].split(' ').map(Number)
  console.log(todu(m).join(' '))
}

if (process.env.USERNAME === 'maney') {
  runProgram(`5
3 15 0 19 8`)
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
