import {createItemModel} from '../models/createItemModel'
import {createDialog} from '../views/createDialogView'

// References to the create view and model

let addButton
let form
let closeButton
let exitButton
let view
let dialog
let spinner

function createItemController() {
	config()
	addEventHandlers()
}

function config() {
	view = createDialog()
	spinner = document.querySelector('#spinner')
	dialog = document.querySelector('#dialog')
	dialog.addEventListener('edit', (e) => console.log(e.detail.action))
	dialog.addEventListener('delete', (e) => console.log(e.detail.action))
	addButton = document.querySelector('#newItem')
	exitButton = view.querySelector('#exit')
	closeButton = view.querySelector('#close')
	form = view.querySelector('#create-form')
}
function addEventHandlers() {
	exitButton.addEventListener('click', onCloseDialog)
	closeButton.addEventListener('click', onCloseDialog)
	addButton.addEventListener('click', onShowDialog)
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

	spinner.classList.remove('hidden')
	createItemModel(payload)
		.then(() => {
			spinner.classList.add('hidden')
		})
		.catch((error) => {
			console.log(error.message)
		})
	return null
	// e.currentTarget.reset()
}

const onCloseDialog = (e) => {
	spinner.classList.add('hidden')
	dialog.removeChild(view)
	dialog.close()
}

const onShowDialog = (e) => {
	dialog.insertBefore(view, spinner)
	dialog.showModal()
}

export {createItemController}
