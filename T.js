// function name() {
//  let a = 'alpha'
// let b = 'beta'

// let D = B(a,b) 
// console.log(D);
// }


// function B(qa,qb) {
//  let c = qa + " " + qb
// // console.log(c);
// let f = an(c)
//  return f
// }

// function an(z) {
//  let e = z + ' ' + 5
//  console.log(e);
//  return e+6

// }
// name()
let ans = []
function find(x,ind,cur) {
  let n = x.length
  if (ind==n) {
   return
  }
  if (cur.join(' ')!=0) {
   
   console.log(cur.join(' '));
  }
  for (let i = ind+1; i < n; i++) {
cur.push(x[i])
find(x,i,cur)
cur.pop() 
  }
}

function runProgram(input) {
  let a = +input
  let ar = []
  for (let i = 1; i <= a; i++) {
   ar.push(i)
   
  }
  console.log();
 find(ar,-1,[])

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
