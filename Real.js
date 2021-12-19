function runProgram(input) {
  var A = input.split(' '),
    a = Number(A[0]),
    b = A[1],
    c = A[2],
    week = [
      'sun',
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
      'sun',
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
    ],
    finder = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ]
  var cal = {
    jan: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    feb: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    mar: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    apr: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    may: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    jun: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    jul: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    aug: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    sep: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    oct: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    nov: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
    dec: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] },
  }
  var one = [1, 8, 15, 22, 29],
    two = [2, 9, 16, 23, 30],
    three = [3, 10, 17, 24, 31],
    four = [4, 11, 18, 25],
    five = [5, 12, 19, 26],
    six = [6, 13, 20, 27],
    seven = [7, 14, 21, 28]
  var Three = [3, 10, 17, 24]
  var TWO = [2, 9, 16, 23],
    THREE = [3, 10, 17, 24],
    ONE = [1, 8, 15, 22]

  if (a % 4 == 0) {
    var C = finder.indexOf(c)
    var B = week.indexOf(b)
    var z = {
      jan: week[B + 0],
      feb: week[B + 3],
      mar: week[B + 4],
      apr: week[B + 0],
      may: week[B + 2],
      jun: week[B + 5],
      jul: week[B + 0],
      aug: week[B + 3],
      sep: week[B + 6],
      oct: week[B + 1],
      nov: week[B + 4],
      dec: week[B + 6],
    }
    var CC = z[c],
      cc = week.indexOf(CC)
    if (C == 0 || C == 2 || C == 4 || C == 6 || C == 7 || C == 11) {
      cal[c][CC] = one
      cal[c][week[cc + 1]] = two
      cal[c][week[cc + 2]] = three
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    } else if (C == 1) {
      cal[c][CC] = one
      cal[c][week[cc + 1]] = TWO
      cal[c][week[cc + 2]] = THREE
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    } else {
      cal[c][CC] = one
      cal[c][week[cc + 1]] = two
      cal[c][week[cc + 2]] = Three
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    }
  } else {
    var C = finder.indexOf(c)
    var B = week.indexOf(b)
    var z = {
      jan: week[B + 0],
      feb: week[B + 3],
      mar: week[B + 3],
      apr: week[B + 6],
      may: week[B + 1],
      jun: week[B + 4],
      jul: week[B + 6],
      aug: week[B + 2],
      sep: week[B + 5],
      oct: week[B + 0],
      nov: week[B + 3],
      dec: week[B + 5],
    }
    var CC = z[c],
      cc = week.indexOf(CC)
    if (C == 0 || C == 2 || C == 4 || C == 6 || C == 7 || C == 11) {
      cal[c][CC] = one
      cal[c][week[cc + 1]] = two
      cal[c][week[cc + 2]] = three
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    } else if (C == 1) {
      cal[c][CC] = ONE
      cal[c][week[cc + 1]] = TWO
      cal[c][week[cc + 2]] = THREE
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    } else {
      cal[c][CC] = one
      cal[c][week[cc + 1]] = two
      cal[c][week[cc + 2]] = Three
      cal[c][week[cc + 3]] = four
      cal[c][week[cc + 4]] = five
      cal[c][week[cc + 5]] = six
      cal[c][week[cc + 6]] = seven
    }
  }
  for (var key of Object.keys(cal[c])) {
    console.log(key + ' - ' + cal[c][key])
  }
}

if (process.env.USERNAME === 'maney') {
  runProgram(`1945 mon mar`)
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
