import {read} from './models/readItemModel'
import {edit} from './models/updateItemModel'
import {updateItem} from './templates/updateFormTemplate'
import {createItem} from './templates/remove-createDialogView'
import {deleteItem} from './templates/deleteDialogView'
async function appInit() {
	const rtdbData = await read(10)
	const todos = Object.entries(rtdbData).slice(0, 9)
}

const testData = {
	todo: 'test to do item',
	status: 'pending',
	category: 'homework',
	uid: '123456',
}

appInit()

const dialog = document.querySelector('#modal')

const editItemButton = document.querySelector('#editItem')
const deleteItemButton = document.querySelector('#deleteItem')
const newItemButton = document.querySelector('#newItem')

editItemButton.addEventListener('click', onOpenModal)
deleteItemButton.addEventListener('click', onOpenModal)
newItemButton.addEventListener('click', onOpenModal)
// closeModalButton.addEventListener('click', onCloseModal)

function onOpenModal(e) {
	if (e.currentTarget.id === 'editItem') {
		addModalContent('edit')
	}

	if (e.currentTarget.id === 'deleteItem') {
		addModalContent('delete')
	}

	if (e.currentTarget.id === 'newItem') {
		addModalContent('new')
	}
}

function onCloseModal(e) {
	dialog.close()
}

function addModalContent(type) {
	if (type === 'edit') {
		const dataObject = {...testData, dialog}
		dialog.append(updateItem(dataObject, dialog))
		dialog.showModal()
	}

	if (type === 'delete') {
		dialog.append(deleteItem({...testData, dialog}))
		dialog.showModal()
	}

	if (type === 'new') {
		dialog.append(createItem(dialog))
		dialog.showModal()
	}
}
// dialog.addEventListener('click', onClickOutsideDialog)

// function onClickOutsideDialog(e) {
// 	const dialogDimensions = dialog.getBoundingClientRect()
// 	if (
// 		e.clientX < dialogDimensions.left ||
// 		e.clientX > dialogDimensions.right ||
// 		e.clientY < dialogDimensions.top ||
// 		e.clientY > dialogDimensions.bottom
// 	) {
// 		e.currentTarget.close()
// 	}
// }
