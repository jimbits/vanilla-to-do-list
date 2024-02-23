import {toDoController} from './controllers/toDoController'
import {addNewItemController} from './controllers/addNewItemController'
import {createDialogController} from './controllers/createDialogController'
import {deleteDialogController} from './controllers/deleteDialogController'
import {updateDialogController} from './controllers/updateDialogController'
import {createStore} from './store'

// const createController = createItemController()
// const deleteController = deleteItemController()

const appInit = async () => {
	const loaded = await createStore()
	if (loaded) {
		deleteDialogController()
		toDoController()
		addNewItemController()
		createDialogController()
		updateDialogController()
	}
}

appInit()
