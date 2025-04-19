/*
* conditional statement
* if / else / else if
* syntax
* if (condition <compere> ) {
*   code 1
*   code 2
* }
*
*
  ┌─────────┐
  │ {       │
  │   code  │
  │   code  │───►block code
  │ }       │
  └─────────┘


  if (condition) {
     your code      ─────► if (condition) your code
  }

* */

/*
const name = 'nam'

if (name === 'nam') console.log('ok')

const a = 100

console.log(1, a % 8)

const r1 = Boolean(a % 8)
console.log(2, r1)

console.log(3, Boolean(a % 8) === true)

const r = Boolean(a % 8) === true
console.log(4, r)

// if (!(a % 2)) -> !Bool(a % 2) -> !false -> true
if (a % 2 === 0) {
    console.log('so chan')
}
*/
/*
let a = ''
// console.log(1, a === null)
// console.log(2, Boolean(a))

if (!a) a = 20

console.log(a)
*/




// if (a % 2 === 0) console.log('a chan')
// else console.log('a le')

// chia 3 chu 0 -> du 0
// chia 3 chu 1 -> du 1
// chia 3 chu 2 -> du 3

// if (a % 3 === 0) console.log('du 0')
// else if (a % 3 === 1) console.log('du 1')
// else console.log('du 2')
/*
const a = 5
switch (a % 3) {
    case 1:
        console.log('du 1')
        break
    case 2:
        console.log('du 2')
        break
    case 3:
        console.log('du 3')
        break
    default:
        console.log('hihi')
}
*/
// console.log('du ' + a % 3)



/*
*      2
  a x   +  b x  + c = 0
        │
        ▼
  denta = b**2 - 4ac
        │
        │ < 0
        ├───────► vn
        │
        │ = 0
        ├───────► x = -b / (2a)
        │
        │ > 0           -b - denta**(1/2)
        └───────► x1 = ──────────────────
                              2a

                        -b + denta**(1/2)
                  x2 = ──────────────────
                              2a

* */
/*
const a = 1, b = 5, c = 4
delta = b**2 - 4*a*c

if (delta < 0) console.log('vn')
else if (delta === 0) {
    const x = -b / (2*a)
    console.log(x)
}
else {
    x1 = (-b - delta**(1/2))/(2*a)
    x2 = (-b + delta**(1/2))/(2*a)
    console.log(x1, x2)
}
*/

/*
  x = ????   amount = 0

  x <=50
     │yes
     ├────► amount = 1.678 * x
   no│      x = 0
     ▼
   x = x - 50
   x <= 100
     │yes
     ├────► amount = 1.734 * x + amount
   no│      x = 0
     ▼
* */

// let total = 60
// let amount = 0

// switch (true) {
//     case (total <= 50): {
//         amount = 1.678 * total
//         break
//     }
//     case (50 < total < 100): {
//         amount = 1.678 * 50 + 1.768 * (total - 50)
//         break
//     }
// }
//

// console.log(amount)


/*
* Loop: re-use code
* for
*   for
*   for of
*   forEach
*   map
*   filter
*   reduce
*
* while
*
* do white (do not use)
* */


/*
* syntax
*
* for (init; condition; next step) {
*   block
* }
* */

/*
let sum = 0
for (let i = 0; i >= -10; i = i -1) {
    console.log('i = ', i)
    sum = sum + i
}

console.log(sum)
*/
/*
* i = 0
* */


const a = 13
// check a is prime number ???
// all of number ... 1 and 7

let count = 2
if (a < 2) {
    console.log('no prime')
}
else {
    for (let i = 2; i < a; i ++) {
        console.log(a, i)
        if (a % i === 0) count ++
    }
}

if (count === 2) {
    console.log('a ...')
}





















