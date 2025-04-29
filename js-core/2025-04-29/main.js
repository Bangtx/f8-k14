const colors = Array.from({ length: 200000 }, (_, i) => ({
    id: i + 1,
    name: `color ${i + 1}`
}));

const flowers = Array.from({ length: 400000 }, (_, i) => ({
    id: i + 1,
    name: `flower ${i + 1}`,
    colorId: Math.floor(Math.random() * 200000) + 1 // random colorId between 1 and 2000
}));


// const colors = [
//     { id: 1, name: 'color 1' },
//     { id: 2, name: 'color 2' },
//     { id: 3, name: 'color 3' },
//     { id: 4, name: 'color 4' },
//     { id: 5, name: 'color 5' }
// ]
//
// const flowers = [
//     { id: 3, name: 'flower 3', colorId: 1 },
//     { id: 5, name: 'flower 5', colorId: 1 },
//     { id: 1, name: 'flower 1', colorId: 4 },
//     { id: 4, name: 'flower 4', colorId: 4 },
//     { id: 2, name: 'flower 2', colorId: 5 }
// ]

// sort flowers by colorId

flowers.sort((a, b) => a.colorId - b.colorId);

// handle join

console.time('doSomething')


let colorStartIdx = 0, flowerStartIdx = 0;
let count = 0;

// for (let flowerIdx = flowerStartIdx; flowerIdx < flowers.length; flowerIdx ++) {
//     for(let colorIdx = colorStartIdx; colorIdx < colors.length; colorIdx ++) {
//         const flower = flowers[flowerIdx]
//         const color = colors[colorIdx]
//
//         if (color.id === flower.colorId) {
//             flower.color = color.name;
//             break
//         }
//
//         count ++
//         if (flower.colorId > color.id) {
//             colorStartIdx = colorStartIdx + 1
//         }
//     }
// }

let flowerIdx = 0, colorIdx = 0;
while (colorIdx < colors.length && flowerIdx < flowers.length) {
    const flower = flowers[flowerIdx]
    const color = colors[colorIdx]

    if (flower.colorId === color.id) {
        flower.color = color.name
        flowerIdx ++
    }

    else if (flower.colorId > color.id) {
        colorIdx ++
    }

    else {
        flowerIdx ++
    }
}

console.log(count, flowers)

console.timeEnd('doSomething')



const colorObj = {}
console.time('doSomething2')
colors.forEach(c => {
    colorObj[c.id] = c.name
})

flowers.forEach(flower => {
    const colorName = colorObj[flower.colorId]
    flower.color = colorName
})
console.timeEnd('doSomething2')
