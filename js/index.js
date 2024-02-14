import { getToDoData } from './lib/firebase/api'
import { toDoItemTemplate } from './templates/toDoItem'

async function appInit() {
	const appData = await getToDoData()
	console.log(appData)
}

appInit()
