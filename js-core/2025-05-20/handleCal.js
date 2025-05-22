const sum = (a, b) => a + b
const minus = (a, b) => a - b
const times = (a, b) => a * b
const divide = (a, b) => a / b

const action = {
  '+': sum,
  '-': minus,
  '*': times,
  '/': divide
}

const getResult = (value) => {
  let result = null
  Object.keys(action).forEach(o => {
    if (value.includes(o)) {
      console.log(o)
      const [a, b] = value.split(o)
      result = action[o](a, b)
    }
  })
  return result
}


const onclickBtn = (value) => {

  const screenRef = document.querySelector('.calculate-screen')

  if (value === '=') {
    screenRef.innerText = getResult(screenRef.innerText)
    return
  }

  screenRef.innerText += value
}

export {onclickBtn}