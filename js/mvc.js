import {toDoListController} from './controllers/toDoListController'
import {dialogController} from './controllers/dialogController'
import {addNewItemController} from './controllers/addNewItemController'
import {createStore} from './store'

// const createController = createItemController()
// const deleteController = deleteItemController()

const appInit = async () => {
	const loaded = await createStore()
	if (loaded) {
		toDoListController()
		addNewItemController()
		dialogController()
	}
}

appInit()
