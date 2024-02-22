let view
let dialog

function addNewItemController() {
	dialog = document.querySelector('dialog')
	view = document.querySelector('#add')
	view.addEventListener('click', (e) => {
		const add = new CustomEvent('openmodal', {
			detail: {
				action: 'add',
			},
		})
		document.querySelector('dialog').dispatchEvent(add)
	})
}

export {addNewItemController}
