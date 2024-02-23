let view
let dialog

function addNewItemController() {
	dialog = document.querySelector('#create-to-do')
	view = document.querySelector('#add')
	view.addEventListener('click', (e) => {
		dialog.showModal()
	})
}

export {addNewItemController}
