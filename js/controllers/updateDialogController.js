import {updateFormTemplate} from '../templates/updateFormTemplate'
import {getStore, updateStore} from '../store'

let form
let dialog
let exitDialogButton
let closeDialogButton
let todo
let uid

async function updateDialogController() {
	dialog = document.querySelector('#update-to-do')
	dialog.addEventListener('todoaction', onDisplayModal)
}

function configListeners() {
	exitDialogButton.addEventListener('click', onCloseDialog)
	closeDialogButton.addEventListener('click', onCloseDialog)
	form.addEventListener('submit', onEditToDo)
}

function onEditToDo(e) {
	e.preventDefault()

	const updatedToDo = {
		todo: form.elements.todo.value.trim(),
		category: form.elements.category.value.trim(),
		status: form.elements.status.value.trim(),
		uid,
	}
	updateStore(uid, updatedToDo)
	dialog.close()
}

function onCloseDialog(e) {
	dialog.close()
}
async function onDisplayModal(e) {
	uid = e.detail.uid

	const store = await getStore()
	const todo = store.find((item) => item.uid === e.detail.uid)

	const newDialogContents = updateFormTemplate(todo)
	exitDialogButton = newDialogContents.querySelector('#exit')
	closeDialogButton = newDialogContents.querySelector('#close')
	form = newDialogContents.querySelector('form')
	configListeners()
	dialog.replaceChildren(newDialogContents)
	dialog.showModal()
}

export {updateDialogController}
