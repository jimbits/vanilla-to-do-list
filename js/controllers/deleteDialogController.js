import {deleteItem} from '../models/deleteItemModel'
import {removeFromStore} from '../store'

let dialog
let exitButton
let deleteButton
let uid
function deleteDialogController() {
	dialog = document.querySelector('#delete-to-do')
	exitButton = dialog.querySelector('#exit')
	deleteButton = dialog.querySelector('#delete')
	configListeners()
}

function configListeners() {
	dialog.addEventListener('todoaction', onShowDialog)
	exitButton.addEventListener('click', onCloseDialog)
	deleteButton.addEventListener('click', onDeleteToDo)
}

function onShowDialog(e) {
	uid = e.detail.uid
	dialog.querySelector('p').textContent = uid
	dialog.showModal()
}

function onCloseDialog(e) {
	dialog.close()
}

async function onDeleteToDo(e) {
	// call delete model remove item update store rerender display
	// await deleteItem(e.currentTarget.dataset.uid)
	removeFromStore(uid)
	dialog.close()
}

export {deleteDialogController}
