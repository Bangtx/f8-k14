/*
reduce
*/

// const array1 = [1, 2, 3, 4, 5];
//
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0
//
//
// const sumWithInitial = array1.reduce((a, b) => {
//     console.log(a, b)
//     return a + b
// }, 0);
//
// console.log(sumWithInitial)

// const arr = [
//     ['id', 1],
//     ['name', 'test'],
//     ['age', 20],
// ]
/*
* {
*   id: 1,
*   name: 'test',
*   age: 20
* }
*
* for / reduce
* */

// const result = {}
//
// for (const e of arr) {
//     const key = e[0]
//     const value = e[1]
//     result[key] = value
// }
//
// console.log(result)

//
// const result = arr.reduce((acc, val) => {
//     const key = val[0]
//     const value = val[1]
//
//     acc[key] = value
//     return acc
// }, {})
//
// console.log(result)

//
// const a = {
//     id: 1, name: 'test'
// }
//
// // const name = a.name
// const age = 100
//
// const b = {...a, age}
//
// const {name, id} = b
//
// console.log(id, name)


// const a = [1, 1, 2, 2, 3]
//
// const c = Array.from(new Set(a))
// console.log(c)

/*
* log ra nhung phep cong tinh co ket qua bang 4
*
* 1 + 3 = 4
* 2 + 2 = 4
* */

/*
* log ra vi tri cac so cong lai = 4
*
* vi tri 0 + vi tri 2 = 4
* vi tri 3 + vi tri 6 = 4
* */
// const arr = [1, 7, 3, 6, 5, 8, 2]

// const map = {}
//
// arr.forEach((e, i) => {
//     map[e] = i
// })
//
// console.log(map)
//
// const sum = 8
// for(const e of arr) {
//     const a = e
//     const b = sum - a
//
//     if (map[b]) {
//         const indexA = map[a]
//         const indexB = map[b]
//         console.log(`$stt ${indexA} + stt ${indexB} = ${sum}`)
//     }
// }

/*
* tim so tu nhien lon hon 0 nho nhat ko nam trong array
*
* vd: [1, 7, 3, 2, 5, 8, 2] -> 4
* vd: [1, 2] -> 3
* vd: [1, 3, 4] -> 2
* */
const arr = [1, 7, 3, 6, 5, 8, 2]

let result = 1

while (arr.includes(result)) {
    result += 1
}


console.log(result)























