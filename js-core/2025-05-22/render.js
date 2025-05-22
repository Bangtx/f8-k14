import {questions} from "./const.js";
import {questionRef} from "./referances.js";

// todo: need to get next question / first question
const curQuestion = questions[0]

const onShowQuestion = () => {
  // console.log(curQuestion)

  const titleRef = questionRef.querySelector('.question-title')
  titleRef.innerText = curQuestion.question

  for (const key of ['a', 'b', 'c', 'd']) {
    questionRef.querySelector(`.question-option[value="${key}"]`).innerText = `${key.toUpperCase()}: ${curQuestion[key]}`
  }
}

const resetBackground = () => {
  questionRef.querySelectorAll('.question-option').forEach(ref => {
    ref.style.backgroundColor = '#fff'
  })
}

const addEvent = () => {
  for (const key of ['a', 'b', 'c', 'd']) {
    const answerRef = questionRef.querySelector(`.question-option[value="${key}"]`)
    answerRef.addEventListener('click', () => {
      console.log('click',key)
      // set userAns
      curQuestion.userAns = key
      curQuestion.isCorrect = curQuestion.userAns === curQuestion.correctAns

      // set background
      resetBackground()
      answerRef.style.backgroundColor = 'red'
      console.log(curQuestion)
    })
  }
}

addEvent()

onShowQuestion()