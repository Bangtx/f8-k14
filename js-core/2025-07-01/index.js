const arr = [
  ['id', 1],
  ['name', 'test'],
  ['age', 20]
]

/*
* {
*   id: 1, name: 'test', age: 20
* }
* */

const result = arr.reduce((acc, val) => {
  const [key, value] = val
  arr[key] = val
  return acc
}, {})

console.log(result)

// arr.reduce((a, b) => {
//   console.log(a, b)
//   return b
// }, 0)