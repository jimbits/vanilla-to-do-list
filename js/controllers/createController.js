import {createNew} from '../models/createModel'
import {createView} from '../views/createView'

// References to the create view and model

let addButton
let form
let closeButton
let exitButton
let view
let dialog
let spinner

function createController() {
	config()
	addEventHandlers()
}

function config() {
	view = createView()
	spinner = document.querySelector('#spinner')
	dialog = document.querySelector('#dialog')
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
	console.log('shit')
	e.preventDefault()
	e.stopPropagation()
	console.log(e.type)
	const todo = e.currentTarget.elements.namedItem('todo').value
	const category = e.currentTarget.elements.namedItem('category').value
	const status = e.currentTarget.elements.namedItem('status').value
	const payload = {
		todo,
		category,
		status,
	}

	spinner.classList.remove('hidden')
	createNew(payload)
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

export {createController}
