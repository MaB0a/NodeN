
// function dec2bin(dec) {
//   return (dec >>> 0).toString(2)
// }

// function modulus(a,b,c) {
//   var A = a,B = b,C = c,e=a
//   if (A>C) {
//     e = A%C
//   }

// var d = dec2bin(B).split('').map(Number)
// var arr = [],D = d.length-1
// for (let i = 0; i < d.length; i++) {
//   var s = D-i
//   var k = 2**s
//   if (k*d[i]!=0) {
//     arr.push(k*d[i])
//   }
// }
// arr.reverse()








// }

// console.log(modulus(7,135,5));





// let t = false
// function find(x, n, cur,totes) {
//   if (n == totes) {
    
//     t=true
//   }
//   if (cur == x.length) return
//   for (let i = cur; i < x.length; i++) {
//     n += x[i]
    
//     find(x, n, i + 1,totes)
//     n -= x[i]
//     // n = n.split('')
//     // let m = n.length - 1
//     // n.splice(m, 1)
//     // n = n.join('')
//   }
// }

// function runProgram(input) {
//   let a = input.split('\n')
//   let b = a[1].split(' ').map(Number),d = +a[2]
//   let c = 0
//   find(b, c, 0,d)
//   t==true?console.log('yes'):console.log('no');
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`9
// 1 5 6 7 8 9
// 5`)
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



// let t = false
// function find(x) {
// if (x==1 ) {
//   return 1;
// }else if (x==0) {
//   return 0;
// }
//   let R =""+(x % 2)
//   let Q = Math.floor(x/2)
//   x = Q
//   return find(x)+R

// }

// function runProgram(input) {
//   let a = input.split('\n')
//   for (let i = 1; i < a.length; i++) {
//     let b = +a[i]
//   console.log(find(b));
//   }
// }

// if (process.env.USERNAME === 'maney') {
//   runProgram(`2
// 15
// 128
// 6`)
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


let t = false
function find(x, n, cur) {
  if (n.length > 0) {
    let m = n.split('')
    console.log(m.join(' '));
  }
  if (cur == x.length) return
  for (let i = cur; i < x.length; i++) {
    n += x[i]

    find(x, n, i + 1)
    // n -= x[i]
    n = n.split('')
    let m = n.length - 1
    n.splice(m, 1)
    n = n.join('')
  }
}

function runProgram(input) {
  let a = +input,b = []
  for (let i = 1; i <= a; i++) {
    b.push(i)
  }
  console.log();
  find(b,"",0)
}

if (process.env.USERNAME === 'maney') {
  runProgram(`3`)
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
