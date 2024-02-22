import {ref, get} from 'firebase/database'
import {db} from './lib/firebase/config/firebaseInit'
import {getAllData} from './models/readItemModel'

let store
let instance
const createStore = async () => {
	if (instance) {
		throw new Error('New instance cannot be created!!')
	}

	instance = 1
	const payload = Object.entries(await getAllData()).slice(0, 10)
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

const updateStore = () => {
	return store
}

const removeFromStore = () => {
	return store
}

export {createStore, getStore, updateStore, removeFromStore}
