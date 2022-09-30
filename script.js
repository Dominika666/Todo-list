let toDoinput 
let errorInfo 
let addBtn
let ulList
let newTodo

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn



const main = () => {
prepareDOMElements()
prepareDOMEvents()
}

const prepareDOMElements = () => {
 toDoinput = document.querySelector('.todo-input')
 errorInfo = document.querySelector('.error-info')   
 addBtn = document.querySelector('.btn-add')   
 ulList = document.querySelector('.todolist ul')
 popup = document.querySelector('.popup')
 popupInfo = document.querySelector('.popup-info')
 popupInput = document.querySelector('.popup-input')
 popupAddBtn = document.querySelector('.popup-btn')
 popupCloseBtn = document.querySelector('.cancel')
      
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', CheckClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click',changeTodoText)
    toDoinput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
    if(toDoinput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = toDoinput.value
        createToolsArea()

        ulList.append(newTodo)

        toDoinput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = "Wpisz treść zadania"
    }
}

const createToolsArea = () => {
 const toolsPanel = document.createElement('div')
 toolsPanel.classList.add('tools')
 newTodo.append(toolsPanel)

const completeBtn = document.createElement('button')
completeBtn.classList.add('complete')
completeBtn.innerHTML = '<i class="fas fa-check"></i>'

const editBtn = document.createElement('button')
editBtn.classList.add('edit')
editBtn.textContent = 'EDIT'

const deleteBtn = document.createElement('button')
deleteBtn.classList.add('delete')
deleteBtn.innerHTML = '<i class="fas fa-times">'

toolsPanel.append(completeBtn, editBtn, deleteBtn)

}



const CheckClick = e => {
if(e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toggle('completed')
} else if(e.target.matches('.edit')) {
    editTodo(e);
} else if(e.target.matches('.delete')) {
    deleteTodo(e);
}
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
 if(popupInput.value !== "") {
 todoToEdit.firstChild.textContent = popupInput.value
 popup.style.display = 'none'
 popupInfo.textContent = ''
} else {
    popupInfo.textContent = 'Musisz podać jakąś treść'
}
 }

 const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = document.querySelectorAll('li') 
        if(allTodos === 0) {
            errorInfo.textContent = 'Brak zadań na liście'
        }
 }

 const enterKeyCheck = e => {
    if(e.key === 'Enter') {
       addNewTodo()
    }
 }


 document.addEventListener('DOMContentLoaded', main)