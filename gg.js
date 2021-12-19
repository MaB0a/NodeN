// let a = "10111"
// let m = []
// for (let i = 0; i < a.length; i++) {
//  for (let j = i; j < a.length; j++) {
//   let bag = ''
//   for (let k = i; k <=j; k++) {
//    bag+=a[k]

//   }
//   m.push(bag)
//  }
// }

// let max = 0
// for (let i = 0; i < m.length; i++) {
//  if(m[i].indexOf(0)==-1){
//   if(max<m[i].length){
//    max=m[i].length
//   }
//  }
// }
// console.log(max);

// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData
//     this.next = null
//   }
// }
// // Complete the function below
// var fillGaps = function (head) {
//   let a = head
//   a.next.data = 5
//   let b = null
//   while (a.next != null) {
//     let ad = a.data
//     let an = a.next.data
//     if (ad + 1 != an) {
//       let c = new LinkedListNode()
//       c.data = ad + 1
//       let br = a.next
//       a.next = c
//       c.next = br
//     }
//     a = a.next
//   }

//   return head
// }
// let ae = {
//   data: 2,
//   next: {
//     data: 3,
//     next: {
//       data: 5,
//       next: null
//     },
//   },
// }
// console.log(fillGaps(ae))


let a = "acjabdnkjc"
for (let i = 0; i < a.length; i++) {
 let bag = ''
 for (let j = 0; j < a-i; j++) {
 console.log(j);
  bag+=a[j]
 }
 console.log(bag);
}






















var sum = 0;
    
    for(i=0;i<N;i++)
    {
        for(j=0;j<N;j++)
        {
            if(isPrime(j-i) && i<j)
            {
                console.log(i,j)
            }
        }
    }
    

}
//console.log(isPrime(2))
function isPrime(num)
    {
        var flag = true;
        if(num<=1)
        {
            flag = false;
        }
        else
        {
            for(i=2;i<num;i++)
            {
                if(num%i===0)
                {
                    flag = false;
                }
            }
        }
        return flag;
