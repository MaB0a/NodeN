  const ListNode = class {
    constructor(nodeData) {
      this.val = nodeData
      this.next = null
    }
  }

  let A = new ListNode()
  A.val = 7
  A.next = new ListNode()
  A.next.val = 0
  A.next.next  = new ListNode()
  A.next.next.val=0

let A1 = new ListNode()
A1.val = 165
A1.next = new ListNode()
A1.next.val = 16
A1.next.next = new ListNode()
A1.next.next.val = 751



var mergeTwoLists = function (l1, l2) {
  let c1 = l1,
    c2 = l2,
    a1 = [],
    a2 = [],
    i1 = 0,
    i2 = 0
  a1.push(c1.val)
  let c = c1
  while (c1.next) {
    c1 = c1.next
    i1++
    a1.push(c1.val)
  }
  i1++
  let c3 = l2
  c1.next = c3
  while (c2) {
    a2.push(c2.val)
    i2++
    c2 = c2.next
  }
  let a = a1.concat(a2)
  a = a.map(Number)
  a.sort((a, b) => a - b)
  let j = i1 + i2
  let i =0
  let C = c
while(i<j){

 c.val = a[i]
 c = c.next
 i++
}
return C
}

console.log(mergeTwoLists(A,A1));