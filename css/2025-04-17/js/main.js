/*
document.writeln('<h1>hello anh em</h1>')


console.log('<h1>hello anh em</h1>')
console.log('12345', `44444`, 54322)
console.log(1 + 2, 3 - 6, 3 * 6, -9 / 0)

console.log('Hello' + 'anh em')
console.log('2' - '2000')
*/

// this is comment
/*
* this is comment
* hello anh em
*
* https://asciiflow.com/#/
* */

/*
* Bien: variable
* use to store any temp value
* store on RAM
* reset -> remove
* declarr a variable -> 4 ways
* var (<2015)
* let / const (> 2015 - EC6) recommend
* */

// console.log(a)

// declared variable
/*
var a
a = 1

// initial variable
var b = 1
let c = 1
const d = 1

a = a + 1
c = a + b
// d = d + 1

console.log(a, b, c, d)

console.log(window.a, window.c)

*/


/*
* operator + - * /
* number + number = number
* number - number = number
* number * number = number
* number / number = number
*
* RAW STRING
* string + string = string
* string - string = NaN (Not A Number)
* string * string = NaN (Not A Number)
* string / string = NaN (Not A Number)
*
* STRING LIKE NUMBER
* string + string = string
* string - string = number
* string * string = number
* string / string = number
*
* (*) JS try to convert your operator to correct operator -> should not depend on it
* */

/*
* a ** 2 = a * a
* a ** 3 = a * a * a  -- Exponentiation
* 10 % 3 = 1 -- Modulus
*
* */


// a ++
// ++ a
// console.log(a++) // log a first -> increase a
// console.log(++a) // increase a first -> log

// const b = a + ++a + a++ + ++a + a-- - --a
/*
let a = 5
a = a + 5 //  a += 5

console.log(a)
*/

/*
* comparison operator
*  == / === (*)
* >
* <
* >=
* <=
* != / !==
* ? not sure
* */

// console.log(0 || 1)

/*
* data type
* string
* number
* bool
* null / undefined / unknown /
* object
* function
*
* to check data type: typeof <variable>
* */

/*
const a = undefined
console.log(typeof a)
*/

/*
* Concat: convert data type
*
* DataType(<variable>)
*
* string <-> number -> ok
* string -> bool
*   length of string > 0 -----> true, else ->>> false
*
* number -> bool
*   0 -> fase else true
*
* bool -> string
*   true -> 'true'
*   false -> 'false'
*
* bool -> number
*   true -> 1
*   false -> 0
* */

let a = 1234567
a = String(a)
console.log(a)




















