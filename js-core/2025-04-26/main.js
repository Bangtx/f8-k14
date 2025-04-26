/*
const arr = [10, 12, 14, 16]

// create new array
// formular new e = 2 * old e
// array.map

const getArg = (arr) => {
    let sum = 0;
    for (const e of arr) {
        sum += e
    }
    return sum/arr.length
}


const newArr = arr.map((e) => e * 2)

// get elements with valiue > 15 -> filter (loc)
const results = arr.find((e) => e  > 13)


// console.log(results)

const members = [
    { id: 1, name: 'Viet', age: 21 },
    { id: 2, name: 'Duc', age: 22 },
    { id: 3, name: 'Duc', age: 22 },
]

const memberNames = members.map(e => e.name)

members.forEach((e, i) => {
    console.log(e, i)
})
*/



const colors = Array.from({ length: 20000 }, (_, i) => ({
    id: i + 1,
    name: `color ${i + 1}`
}));

const flowers = Array.from({ length: 400000 }, (_, i) => ({
    id: i + 1,
    name: `flower ${i + 1}`,
    colorId: Math.floor(Math.random() * 20000) + 1 // random colorId between 1 and 2000
}));

// [
//     { id: 1, name: 'Rose', colorId: 1, color: 'Red' },
//     { id: 2, name: 'Tulip', colorId: 2, color: 'Blue' },
//     { id: 3, name: 'Carnation', colorId: 1, color: 'Red' }
// ]

let count = 0

console.time('doSomething')

const colorObj = {}

colors.forEach(c => {
    count ++
    colorObj[c.id] = c.name
})

flowers.forEach(flower => {
    count ++
    const colorName = colorObj[flower.colorId]
    flower.color = colorName
})

console.log(count)


console.timeEnd('doSomething')