// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1))

// function rec(str,i,j,ans) {
// if (i>j) {return ans}
// let mid = Math.floor((i+j)/2)
// ans = ans + str[mid]+rec(str,i,mid-1,ans)+rec(str,mid+1,j,ans)
// return ans
// }

// function runProgram(input) {
//   let a = input.split('\n')
// for (let i = 1; i < a.length; i+=2) {
//   let j = a[i+1].length-1,k = '',l=0
// let x= (rec(a[i+1],l,j,k))
// console.log(x);
// }
// }
let flag = false
function rec(arr, k, sum, cur) {
  
if (sum==k) {
  flag = true;
}
if (cur==arr.length) {
  return
}
for (let i = cur; i < arr.length; i++) {
  rec(arr,k,sum,i+1)
  rec(arr,k,sum+arr[i],i+1)
}
}

function runProgram(input) {
  let a = input.split('\n')
 let b= a[1].split(' ').map(Number),c=a[2]
let x = rec(b,c,0,0)
console.log(x);
}


if (process.env.USERNAME === 'maney') {
  runProgram(`9
1 2 3 4 5 6 7 8 9
5`)
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
