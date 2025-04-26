/*
const students = [
    { name: "An", class: "12A1" },
    { name: "Bình", class: "12A2" },
    { name: "Cường", class: "12A1" },
    { name: "Dung", class: "12A3" },
    { name: "Em", class: "12A2" }
];

// Kết quả mong muốn:
// {
//   "12A1": ["An", "Cường"],
//   "12A2": ["Bình", "Em"],
//   "12A3": ["Dung"]
// }

const result = {}
for (const student of students) {
    const className = student.class
    const studentName = student.name
    if (!result[className]) result[className] = []
    result[className].push(studentName)
}

console.log(result)
*/

const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

// Kết quả mong muốn:
// [
//   { class: "12A1", topStudent: "Bình", score: 9.2 },
//   { class: "12A2", topStudent: "Dung", score: 9.0 },
//   { class: "12A3", topStudent: "Em", score: 8.0 }
// ]

const getMaxNumber = (arr) => {
    let max = arr[0]

    for (const num of arr) {
        if (num > max) max = num
    }
    return max
}

const getArg = (arr) => {
    let sum = 0;
    for (const e of arr) {
        sum += e
    }
    return sum/arr.length
}

const result = {}
for (const student of students) {
    const className = student.class
    const studentName = student.name
    const score = student.score

    if (!result[className]) result[className] = []
    result[className].push({
        name: studentName, score: score
    })
}

// loop result

Object.keys(result).forEach(key => {
    const val = result[key]
    console.log(key, val)
    // get scores
    const scores = val.map(e => e.score)
    // scores = [8.5, 9.2]
    const scorearg = getArg(scores)
    console.log(scorearg)
    // maxScore = 9.2
    // const student = val.find(e => e.score === maxScore)
    // console.log(student)
})

















