import { ref, push } from 'firebase/database'

import { db } from './../config/firebaseInit'
import { testObject } from './testObject'

async function create(newToDoObject) {
	const newItem = testObject
	// ref(path) to the db where you want add the new item
	// db/todo
	// path to where you will write to

	try {
		const dbRef = ref(db, 'todos')
		const key = push(dbRef, newItem)
	} catch (error) {}

	console.log(key)
	return null
}

export { create }
