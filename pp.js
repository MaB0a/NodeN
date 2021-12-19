// // let N = 14
// // let X = -6
// // let sm = 0
// // if (N < 0 || X < 0) {
// //   console.log(-1)
// // } else {
// //   while (N != 0) {
// //     let tem = 1
// //     for (let i = 0; i < N - 1; i++) {
// //       tem *= X
// //     }
// //     sm += tem
// //     N--
// //   }
// //   console.log(sm)
// // }

// let a = 'abcde'
// let count = 0
// for (let i = 0; i < a.length; i++) {
//   for (let j = i; j < a.length; j++) {
//     let bag = ''
//     for (let k = i; k <=j; k++) {
// bag+=a[k]
//     }
//       mmm(count,bag)

//   }

// }

// function mmm(C,B) {
// //If Bag is a palidrome
// //C++
// //return C
// // }
// // let v = " apple "
// // for (let i = 0; i < array.length; i++) {
// // if(v[i]==" "){

// // }else{
// //   break
// // }
// // }
// // for (let i = v.le; i < array.length; i--) {
// // if(v[i]==" "){

// // }else{
// //   break
// // }
// // }

// let a = "   hello World   "
// let c = 0
// for (let i = 0; i < a.length; i++) {
// if(a[i]!=" "){
//   c=i
//   break
// }
// }
// let bag = ''
// for (let i = c; i < a.length; i++) {
// bag+=a[i]
// }
// let m = []
// m.push(bag)
// console.log(m);

function pattern(N) {
  var r = 1
  
  for (let j = 1; j <= N; j++) {/*multi line dene wali loop*/
    var bag = ''
    for (let i = 1; i <= N; i++) {/*one horizontal loop dena*/
      bag = bag + r + ' '
      console.log(bag);
      r++
    }
    console.log(bag)
  }
}
pattern(4)
