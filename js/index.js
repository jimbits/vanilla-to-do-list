import { getToDoData } from './lib/firebase/api'
import { toDoItemTemplate } from './templates/toDoTemplate'
import { render } from './utils/render'

const testObj = {
	todo: 'test',
	category: 'Test',
	status: 'test',
	uid: 'Test',
}

async function appInit() {
	const appData = await getToDoData()
	const singleTemplate = toDoItemTemplate(testObj)
	render(singleTemplate, document.querySelector('#root'))
}

appInit()
