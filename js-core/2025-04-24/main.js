

/*
*
   33      11     22     12      35     29
  ────────────
   11      33     22     12      35     29
         ────────────
   11      22     33     12      35     29
                 ────────────
   11      22     12     33      35     29
                        ────────────
   11      22     12     33      35     29
                                ──────────
   11      22     12     33      29     35 ◄────────────
  ────────────
   11      22     12     33      29     35
          ──────────
   11      12     22     33      29     35
                ────────────
   11      12     22     33      29     35
                         ───────────
   11      12     22     29      33     35
                                 ──────────
   11      12     22     29      33     35 ◄────────────
* */
/*
const arr = [33, 11, 22, 12, 35, 29]

let count = 0
console.log('first', arr)
for (let j = 0; j < arr.length - 1; j ++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        const curValue = arr[i]
        const nextValue = arr[i + 1]

        if (curValue > nextValue) {
            arr[i] = nextValue
            arr[i + 1] = curValue
        }
        count++
    }
    console.log(j, arr.length, arr)
}

console.log(arr, count)
* */

/*
const animal = {
    name: 'Viet',
    legs: 4,
    speaking() {
        console.log('hi')
    },
    eating() {
        const result = 'mam mam di ' + this.name + ' oi'
        console.log(result)
    },
    girlFriend: {
        name: 'Quynh',
        legs: 3,
        speaking() {
            console.log('Viet oii')
        },
        eating() {
            animal.speaking()
            const result = 'mam mam di ' + this.name + ' oi'
            console.log(result)
        },
    }
}

animal.girlFriend.eating()
*/
/*
* function
* y = x + 1 -> x = 1 -> y = 2
*
* f(x) = x + 1 --> x = 1 -> f(1) = 2 -> there are input /output
*
* f(x) = 2 -> no input
*
* there is function with no output
* */



// function test(x, y) {
//     const a = 1
//     return
//     console.log('tets thui x = ', x, 'y =', y)
// }
//
// console.log(test(100, 800))

/*

function test (x) {
    // if (x > 5) console.log(x)
    if (x < 5) return
    console.log(x)
}


// 2015
const log = (x) => x || 100 // lambda

const test2 = (x = 1) => {
    return x
}

console.log(test2(2))

*/

const members = [
    { id: 1, name: 'Viet', age: 21 },
    { id: 2, name: 'Duc', age: 22 },
]

// const results = []

// for (let i = 0; i < members.length; i ++) {
//     if (members[i].id >= 2) {
//         results.push(members[i])
//     }
// }

// for (const member of members) {
//     // member.name = 'Quynh'
//     if (member.id >= 2) {
//         results.push(member)
//     }
// }
//
// console.log(members)
const results = members.filter((e) => e.id >= 2)

console.log(results)



















