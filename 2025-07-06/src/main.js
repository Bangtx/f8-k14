const onOpenDialog = (employee) => {
  dialogContainerE.style.display = 'block'
  // fill data
  document.querySelector('.dialog-content input[name=name]').value = employee.name
  document.querySelector('.dialog-content input[name=age]').value = employee.age
  document.querySelector('.dialog-content input[name=address]').value = employee.address
}

const headers = [
  { name: 'id', text: 'Id', align: 'center' },
  { name: 'name', text: 'Ten' },
  { name: 'address', text: 'Dia Chi' },
  { name: 'age', text: 'Tuoi', align: 'right' },
  { name: 'action', text: 'Action', align: 'center' },
]

const employees = [
  {id: 1, name: 'Tran Pham Tin', address: 'Hoai Duc - Ha Noi', age: 27, searchStr: 'Tran Pham Tin|Hoai Duc - Ha Noi|27'},
  {id: 2, name: 'Pham Nguyen Bac', address: 'Co Nhue - Ha Noi', age: 27, searchStr: 'Pham Nguyen Bac|Co Nhue - Ha Noi|27'},
  {id: 3, name: 'Nguyen Nam Tao', address: 'Soc Son - Ha Noi', age: 27, searchStr: 'Nguyen Nam Tao|Soc Son - Ha Noi|27'},
]

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

renderTable(employees)


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

const onSave = () => {
  const employee = {
    id: getMaxId() + 1,
    name: document.querySelector('.dialog-content input[name=name]').value,
    address: document.querySelector('.dialog-content input[name=address]').value,
    age: document.querySelector('.dialog-content input[name=age]').value,
  }

  employees.push(employee)

  onCloseDialog()
  renderTable(employees)
}