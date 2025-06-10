import {getMethod, postMethod, putMethod} from "./utils/index.js";

const todoListRef = document.querySelector('.todo-list')
const addTodoBtn = document.querySelector('#add-todo-btn')
let curTodo = null

const onEdit = (todo) => {
  // fill the value to the input
  const todoInputRef = document.querySelector('.todo-input')
  todoInputRef.value = todo.title
  curTodo = todo
}

const onEditStatus = async (todo) => {
  await putMethod(`todos/${todo.id}`, toBody({
    ...todo, completed: !todo.completed
  }))

  await onMounted()
}

const renderRow = (todo) => {
  const todoItemRef = document.createElement('div')
  todoItemRef.classList.add('todo-item')

  const checkBoxRef = document.createElement('input')
  checkBoxRef.setAttribute('type', 'checkbox')
  if (todo.completed) checkBoxRef.setAttribute('checked', 'checked')
  checkBoxRef.addEventListener('change', () => {
    onEditStatus(todo)
  })

  const todoContent = document.createElement('div')
  todoContent.classList.add('todo-content')
  todoContent.textContent = todo.title

  const editBtn = document.createElement('button')
  editBtn.classList.add('fa-solid')
  editBtn.classList.add('edit-btn')
  editBtn.classList.add('fa-pen-to-square')
  editBtn.addEventListener('click', () => {
    onEdit(todo)
  })

  const deltBtn = document.createElement('button')
  deltBtn.classList.add('fa-solid')
  deltBtn.classList.add('del-btn')
  deltBtn.classList.add('fa-trash')

  todoItemRef.appendChild(checkBoxRef)
  todoItemRef.appendChild(todoContent)
  todoItemRef.appendChild(editBtn)
  todoItemRef.appendChild(deltBtn)

  todoListRef.appendChild(todoItemRef)
}

const onRender = (todos) => {
  todoListRef.innerHTML = ''
  for (const todo of todos) {
    renderRow(todo)
  }
}

const onMounted = async () => {
  // get todos from api
  const todos = await getMethod('todos')
  onRender(todos)
}

addTodoBtn.addEventListener('click', async () => {
  const todoInputRef = document.querySelector('.todo-input')

  // validate
  if (todoInputRef.value.length === 0) {
    alert('the title should not be empty')
    return
  }

  const payload = toBody({
    title: todoInputRef.value
  })
  // invoke api
  if (curTodo?.id) await putMethod(`todos/${curTodo.id}`, payload)
  else await postMethod('todos', payload)
  // clear input
  todoInputRef.value = ''
  await onMounted()

  // automaticaly focus at the input tag
  todoInputRef.focus()

  // reset curTodo
  curTodo = null
})

const toBody = ({title, completed = false}) => {
  return {
    title, completed
  }
}

onMounted()