function runProgram(input) {
  var A = input

    var a = A.split(''),
      c = []
    for (let i = 0; i < a.length; i++) {
      if (a[i] == '(' || a[i] == '{' || a[i] == '[') {
        c.push(a[i])
       //  console.log(c);
      } else {
        // console.log('m');
        var m = c.length - 1
        if (
          (c.length == 0 && a[i] == ')') ||
          (c.length == 0 && a[i] == '}') ||
          (c.length == 0 && a[i] == ']')
        ) {
          c.push('a')
        }
        if (a[i] == ')' && c[m] == '(') {
          c.pop()
          a.splice(i,1)
          i--
        }
        if (a[i] == '}' && c[m] == '{') {
          c.pop()
          a.splice(i, 1)
          i--
        }
        if (a[i] == ']' && c[m] == '[') {
          c.pop()
          a.splice(i, 1)
          i--
        }
        // if ((a[i]==")"||a[i]=="}"||a[i]=="]")&&c.length==0) {
        //   c.push('a')
        // }
      }
    }
   for (let i = 0; i < a.length; i++) {
     if (a[i]==")"||a[i]=="}"||a[i]==']') {
       console.log("unbalanced");
       return
     }
     
   }
    if (c.length == 0) {
      console.log('balanced')
    } else {
      console.log('unbalanced')
    }
  }


if (process.env.USERNAME === 'maney') {
  runProgram(`{(([])[])[]]}`)
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
