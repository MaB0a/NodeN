// class Person{
//  constructor(name,year){
//   this.name=name;
//   this.year=year;
//  }
//  get age(){
//   return this.calcAge()
//  }
//  calcAge(){
//   var today = new Date()
//   var yea = today.getFullYear()
//   return yea - this.year
//  }
//  what(){
//   console.log(this.name + " is a person");
//  }
//  static arms(){
//   return 2
//  }
// }

// let me  = new Person("Manney",1996)

// // me.what()
// console.log(me.age);

// function SUDOKU(arr1, arr2, p1, p2, n) {
//   let res = []
//   while (p1 !== n && p2 !== n) {
//     if (arr1[p1] <= arr2[p2]) {
//       res.push(arr1[p1])
//       p1++
//     } else {
//       res.push(arr2[p2])
//       p2++
//     }
//   }
//   while (p1 !== n) {
//     res.push(arr1[p1])
//     p1++
//   }
//   while (p2 !== n) {
//     res.push(arr2[p2])
//     p2++
//   }
//   console.log(res.join(' '))
// }

// function runProgram(input) {
//   let a = input.trim().split('\n')
//   let ar1 = a[1].trim().split(' ').map(Number)
//   let ar2 = a[2].trim().split(' ').map(Number)
//   let p1 = 0,
//     p2 = 0,
//     n = +a[0]

//   SUDOKU(ar1, ar2, p1, p2, n)
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`4
// 1 5 7 9
// 2 4 6 8`)
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

// //bubble sort
// function SUDOKU(arr1, n) {
//   if (n == 0) {
//     return
//   }
//   for (let i = 0; i < n; i++) {
//     if (arr1[i] > arr1[i + 1]) {
//       let m = arr1[i]
//       arr1[i] = arr1[i + 1]
//       arr1[i + 1] = m
//     }
//   }
//   SUDOKU(arr1, n - 1)
// }

// function runProgram(input) {
//   let a = input.trim().split('\n')
//   let ar1 = a[1].trim().split(' ').map(Number),
//     n = ar1.length - 1

//   SUDOKU(ar1, n)
//   console.log(ar1)
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`5
// 3 5 0 9 8`)
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

// //conditional count
// let count = 0

// function find(x, n, cur, m) {
//   if (n == m) {
//     count++
//   }
//   if (cur == x.length) return
//   for (let i = cur; i < x.length; i++) {
//     n += x[i]
//     find(x, n, i + 1, m)
//     n -= x[i]
//   }
// }

// function runProgram(input) {
//   let a = input.trim().split('\n')
//   let ar1 = a[1].trim().split(' ').map(Number),
//     b = a[0].split(' ').map(Number)
//   let m = b[1]

//   find(ar1,0,0,m)
//   console.log(count);
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`4 10
// 1 2 3 4`)
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


function find(x, S, cur, m) {

  if (cur == x.length) return S == m
  
  for (let i = cur; i < x.length; i++) {
    n += x[i]
    find(x, n, i + 1, m,count)
    n -= x[i]
  }
}

function runProgram(input) {
  let a = input.trim().split('\n')
for (let i = 1; i < a.length; i+=2) {
 let ar = a[i+1].split(' ').map(Number)
ar = ar.sort((a,b)=>a-b)
let n = ar.length-1
let m = ar[n]
ar.pop()

find(ar,0,0,m)

// console.log(count);
}



}

if (process.env.USERNAME === 'maney') {
  runProgram(`3
3
1 2 3
4
0 1 2 3
4
2 3 6 10`)
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
