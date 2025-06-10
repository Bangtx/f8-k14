import {getMethod, postMethod} from "./utils";


const addBtnRef = document.querySelector('#add-new-btn')
const saveBtnRef = document.querySelector('.save-btn')

const onOpenDialog = (employee) => {
  dialogContainerE.style.display = 'block'
  // fill data
  document.querySelector('.dialog-content input[name=name]').value = employee.name
  document.querySelector('.dialog-content input[name=age]').value = employee.age
  document.querySelector('.dialog-content input[name=address]').value = employee.address
}

addBtnRef.addEventListener('click', () => {
  onOpenDialog()
})

const headers = [
  { name: 'id', text: 'Id', align: 'center' },
  { name: 'name', text: 'Ten' },
  { name: 'address', text: 'Dia Chi' },
  { name: 'age', text: 'Tuoi', align: 'right' },
  { name: 'action', text: 'Action', align: 'center' },
]

let employees = []

const getEmployees = async () => {
  return await getMethod('employees')
}

const renderTable = (employees) => {
  const tableHeaderE = document.querySelector('table thead tr')

  tableHeaderE.innerHTML = ''

  headers.forEach(header => {
    const cell = document.createElement('th')
    cell.innerText = header.text
    tableHeaderE.append(cell)
  })

  const tableBodyE = document.querySelector('table tbody')

  tableBodyE.innerHTML = ''

  employees.forEach(employee => {
    const row = document.createElement('tr')
    headers.forEach(header => {
      const cell = document.createElement('td')
      if (header.name === 'action') {
        const editBtn = document.createElement('span')
        const delBtn = document.createElement('span')

        editBtn.setAttribute('class', 'mdi mdi-pencil-outline edit-btn')
        delBtn.setAttribute('class', 'mdi mdi-trash-can-outline del-btn')

        editBtn.addEventListener('click', () => {
          onOpenDialog(employee)
        })
        cell.appendChild(editBtn)
        cell.appendChild(delBtn)
      }
      else {
        cell.innerText = employee[header.name]
      }

      if (header.align) cell.setAttribute('class', `text-align-${header.align}`)
      row.append(cell)
    })
    tableBodyE.append(row)
  })
}

// get input element
const inputE = document.querySelector('.container input[name="search"]')
inputE.addEventListener('input', (e) => {
  const filteredEmployees = employees.filter(
    employee => employee.name.toLowerCase().includes(e.target.value.toLowerCase())
  )

  renderTable(filteredEmployees)
})

const onMounted = async () => {
  employees = await getEmployees()
  renderTable(employees)
}

onMounted()

// dialog process
const dialogContainerE = document.querySelector('.dialog-container')
const cancelBtnE = document.querySelector('.dialog-action .cancel-btn')
const saveBtnE = document.querySelector('.dialog-action .save-btn')

const onCloseDialog = () => {
  dialogContainerE.style.display = 'none'
}

// get max id
const getMaxId = () => {
  const ids = employees.map(employee => employee.id)
  return Math.max(...ids)
}

const onSave = async () => {
  const employee = {
    id: getMaxId() + 1,
    name: document.querySelector('.dialog-content input[name=name]').value,
    address: document.querySelector('.dialog-content input[name=address]').value,
    age: document.querySelector('.dialog-content input[name=age]').value,
  }

  const newEmployee = await postMethod('employees', employee)

  employees.push(newEmployee)

  onCloseDialog()
  renderTable(employees)
}

saveBtnRef.addEventListener('click', () => {
  onSave()
})