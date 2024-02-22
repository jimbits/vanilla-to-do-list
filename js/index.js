import {read} from './models/readItemModel'
async function appInit() {
	const rtdbData = await read(10)
	const todos = Object.entries(rtdbData).slice(0, 9)
}

appInit()
