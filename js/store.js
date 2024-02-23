import {ref, get} from 'firebase/database'
import {db} from './lib/firebase/config/firebaseInit'
import {getAllData} from './models/readItemModel'
import {renderToDoList} from './controllers/toDoController'
let store
let instance
const createStore = async () => {
	if (instance) {
		throw new Error('New instance cannot be created!!')
	}

	instance = 1
	const payload = Object.entries(await getAllData()).slice(0, 4)
	store = payload.map((item) => {
		return {...item[1], uid: item[0]}
	})

	if (store.length) {
		return true
	}
}

const getStore = async () => {
	return store
}

const updateStore = (uid, todo) => {
	const index = store.findIndex((item) => item.uid === uid)
	store = [...store.slice(0, index), todo, ...store.slice(index + 1)]

	renderToDoList()
}

const removeFromStore = (uid) => {
	const index = store.findIndex((item) => item.uid === uid)
	store = [...store.slice(0, index), ...store.slice(index + 1)]
	renderToDoList()
}

export {createStore, getStore, removeFromStore, updateStore}
