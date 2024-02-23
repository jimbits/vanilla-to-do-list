import {toDoItemTemplate} from '../templates/toDoItemTemplate'
import {getStore} from '../store'
import {update} from 'firebase/database'

let store
let updateDialog
let deleteDialog
let container = document.querySelector('#item-container')

async function toDoController() {
	updateDialog = document.querySelector('#update-to-do')
	deleteDialog = document.querySelector('#delete-to-do')

	renderToDoList()
}

async function renderToDoList() {
	const div = document.createElement('div')
	const store = await getStore()
	store.forEach((item) => {
		const markup = toDoItemTemplate(item)
		div.append(markup)
	})
	container.replaceChildren(div)
	container.addEventListener('click', onDialogRequested)
}

function onDialogRequested(e) {
	if (e.target.id === 'edit') {
		const toDoEvent = new CustomEvent('todoaction', {
			detail: {
				uid: e.target.dataset.uid,
			},
		})
		document.querySelector('#update-to-do').dispatchEvent(toDoEvent)
	}

	if (e.target.id === 'delete') {
		const toDoEvent = new CustomEvent('todoaction', {
			detail: {
				uid: e.target.dataset.uid,
			},
		})
		document.querySelector('#delete-to-do').dispatchEvent(toDoEvent)
	}
}

export {toDoController, renderToDoList}
