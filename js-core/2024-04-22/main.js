/*
* 10 % 3 = 1
* 3 * 3 = 9
* 10 / 3 = 3 di 1
* 10 % 3 = 1
*
*
* 12 % 3 = 0
* 13 % 4 = 1
*
* 2 % 3 = 2
*
* -4 % 3 = -1
*
* |3| = 3
* |-3| = 3
* abs(-3) = 3
*
* uoc: la nhung so chia chia het cho no ( a % u = 0 )
* boi: ket qua khi nhan 1 sv 1 so
*
* u(8) =  {1, 2, 4, 8}
*
* so nguyen to: la so chi 2 co uoc duy nhat (1 va chinh no)
* 7 la so nguyen to vi no chia het cho 7 va 1
* 8 khong la so nguyen to vi no co uoc la  {1, 2, 4, 8}
*   trong lap trinh de tim so nguyen to thi minh quet (2 -> n - 1)
*   vd kiem tra so 7 so phai so nguyen to hay ko
*      for (2 -> 6)
*
*   N: so tu nhien la (0, 1, 2, 3, ... vo cung) N
*   N*: so tu nhien nhung khac 0 (1, 2, 3, ... vo cung)
*   so chinh phuong: la binh phuong cua 1 so tu nhien
*   vd: 3 khong phai so chinh phuong
*       4, 9 , 25
    kiem tra so chinh phuong: so a
           │
           ▼
    lay can bac 2:  a ** (1/2)
           │
           ▼              no
    a ** (1/2) % 1 === 0 ──────► not chinh phuong
           │
           │yes
           ▼
    so chinh phuong


*
* so hoan hao
* la so co tong cac uoc (tru ban than no) bang chinh no
* vd: 6 la so hoan hao
*   6 = 1 + 2 + 3
*   28 = 1 + 2 + 4 + 7 + 14
* */



/*
*
    s = ??? exp 18
    cost = 0
           yes
    s <= 1──────►cost = 15k
      │
      │ no
      ▼    yes
    s <= 5──────►cost = 15k + 13k5 * (s - 1)
      │
      │no
      ▼
    cost = 15k + 4 * 13k5 + 11k * (s - 5)
      │
      │
      ▼       yes
    s > 120 ───────► cost = 0.9 * cost
      │                   │
      │ no                │
      ▼                   │
    end  ◄────────────────┘



* */

/*
for(let u = 1; u <= 10; u = u + 1) {
    for(let v = 1; v <= 10; v = v + 1) {
        console.log(u, ' x ', v, ' = ', u * v)
    }
}
*/


/*
* array: mang / list
* */

/*
const numbers = [1, 2, 3, 4, 5]
const boxes = ['A', 'B', 'C']

let a = [1, 2]
a = [23, 4, 89, 9120]

const length = a.length  // 4
const toString = a.toString() // = String(a) = '3,4,89,9120'

console.log(a[0], a.at(0))

// add more at last
a.push(88)

// add more at first
a.unshift(99)

// chane value
a[0] = 98
console.log(a)

// delete at last
a.pop()
console.log(a)

// delete at first
a.shift()

// console.log(a)
a.sort()
console.log(a)
delete a[2]
console.log(a)

const b = [1, 2 , 3]
const c = ['mot', 'hai']
const d = [4, 5, 6]
console.log(c.concat(b, d, d))

console.log(typeof a)

*/

/*
* Object
*   group value into a variable
*
* array: a = [10, 3, 23] -> get value by index
*             0   1   2
*
* object get value by key
* */

const info = {
    name: 'doanh',
    age: 21,
    address: 'quat lam',
    favoriteNumber: [8, 88]
}

info.name = 'Viet'
info.info = 'info'

delete info.info
delete info.info

console.log(info)

// console.log(Object.keys(info))
// console.log(Object.values(info))
// const a = [12, 3, 4]
// // const a = [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]
// console.log(a[0])



// const arr = [3, 2, 3, 4, 6, 8, 7]
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

const keys = Object.keys(info)

for (let i = 0; i < keys.length; i++) {
    console.log(info[keys[i]])
}

















