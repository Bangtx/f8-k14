import {onclickBtn} from './handleCal.js'


const keyboardE = document.querySelector('.calculate-keyboard')

const btns = [
  {text: 1, value: 1},
  {text: 2, value: 3},
  {text: 3, value: 3},
  {text: '+', value: '+'},
  {text: 4, value: 4},
  {text: 5, value: 5},
  {text: 6, value: 6},
  {text: '-', value: '-'},
  {text: 7, value: 7},
  {text: 8, value: 8},
  {text: 9, value: 9},
  {text: '*', value: '*'},
  {text: '#', value: '#'},
  {text: 0, value: 0},
  {text: '=', value: '='},
  {text: '/', value: '/'},
]

const renderBtns = () => {
  btns.forEach(btn => {
    const btnE = document.createElement('div')
    btnE.className = 'calculate-button'
    btnE.innerText = btn.text
    btnE.setAttribute('value', btn.value)

    btnE.addEventListener('click', () => {
      onclickBtn(btn.value)
    })
    keyboardE.appendChild(btnE)
  })
}

renderBtns()