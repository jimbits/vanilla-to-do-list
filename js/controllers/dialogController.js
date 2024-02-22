let dialog

function dialogController() {
	dialog = document.querySelector('dialog')
	dialog.addEventListener('openmodal', (e) => console.log(e.detail.action))
}

function config() {
	dialog = document.querySelector('dialog')
	dialog.addEventListener('edit', (e) => console.log(e.detail.action))
	dialog.addEventListener('delete', (e) => console.log(e.detail.action))
	dialog.addEventListener('add', (e) => console.log(e.detail.action))
}

export {dialogController}
