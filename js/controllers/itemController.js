import {itemView} from '../views/toDoView'
import {read} from '../models/readModel'

let store
async function itemController() {
	store = [...Object.values(await read())]

	render(store)
	config()
}

function render(items) {
	const div = document.createElement('div')
	const container = document.querySelector('#item-container')
	items.forEach((item) => {
		const markup = itemView(item)
		div.append(markup)
	})
	container.append(div)
}
function config() {
	// toDo.querySelector('#delete').addEventListener('click', onDeleteToDo)
	// toDo.querySelector('#edit').addEventListener('click', onEditToDo)
	// return toDo
	// function onDeleteToDo(e) {
	// 	console.log(e.currentTarget)
	// }
	// function onEditToDo(e) {
	// 	console.log(e.currentTarget)
	// }
}

export {itemController}
