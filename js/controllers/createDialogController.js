import {createItemModel} from '../models/createItemModel'

let closeDialogButton
let exitDialogButton
let dialog
let form

function createDialogController() {
	dialog = document.querySelector('#create-to-do')
	exitDialogButton = dialog.querySelector('#exit')
	closeDialogButton = dialog.querySelector('#close')
	form = dialog.querySelector('#create-form')
	configListeners()
}

function configListeners() {
	exitDialogButton.addEventListener('click', onCloseDialog)
	closeDialogButton.addEventListener('click', onCloseDialog)
	form.addEventListener('submit', onCreateNewItem)
}

const onCreateNewItem = (e) => {
	e.preventDefault()
	e.stopPropagation()

	const todo = e.currentTarget.elements.namedItem('todo').value
	const category = e.currentTarget.elements.namedItem('category').value
	const status = e.currentTarget.elements.namedItem('status').value
	const payload = {
		todo,
		category,
		status,
	}

	createItemModel(payload)

	e.currentTarget.reset()
}

const onCloseDialog = (e) => {
	dialog.close()
}

export {createDialogController}
