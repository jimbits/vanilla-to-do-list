import {toDoItem} from '../views/toDoItemView'
import {getStore} from '../store'
let store
let container = document.querySelector('#item-container')
async function toDoListController() {
	store = await getStore()
	render()
}

function render() {
	const div = document.createElement('div')

	store.forEach((item) => {
		const markup = toDoItem(item)
		div.append(markup)
	})
	container.replaceChildren(div)
	container.addEventListener('click', onDialogRequested)
}

function onDialogRequested(e) {
	if (e.target.id === 'edit') {
		const editModal = new CustomEvent('openmodal', {
			detail: {
				action: 'edit',
			},
		})
		document.querySelector('dialog').dispatchEvent(editModal)
	}

	if (e.target.id === 'delete') {
		const deleteModal = new CustomEvent('openmodal', {
			detail: {
				action: 'delete',
			},
		})
		document.querySelector('dialog').dispatchEvent(deleteModal)
	}
}

export {toDoListController}
