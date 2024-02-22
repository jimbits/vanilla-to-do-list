import {deleteDialog} from '../views/deleteDialogView'
import {deleteItem} from '../models/deleteItemModel'
let itemContainer
let view
let dialog
let exitButton
let deleteButton

function deleteItemController() {
	config()
	configListeners()
}
function config() {
	dialog = document.querySelector('#dialog')
	view = deleteDialog()
	exitButton = view.querySelector('#exit')
	deleteButton = view.querySelector('#delete')
	itemContainer = document.querySelector('#item-container')
}

function configListeners() {
	itemContainer.addEventListener('click', onDeleteItemRequest)
	exitButton.addEventListener('click', onCloseDialog)
	deleteButton.addEventListener('click', onDeleteItem)
}

function onCloseDialog(e) {
	dialog.close()
	dialog.removeChild(view)
}
function onDeleteItemRequest(e) {
	if (e.target.id === 'delete') {
		deleteButton.dataset.uid = e.target.dataset.uid
		dialog.appendChild(view)
		dialog.showModal()
	}
}

async function onDeleteItem(e) {
	// call delete model remove item update store rerender display
	await deleteItem(e.currentTarget.dataset.uid)
}

export {deleteItemController}
