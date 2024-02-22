import {ref, set, update, child, push, onChildAdded} from 'firebase/database'

import {db} from '../lib/firebase/config/firebaseInit'

async function createItemModel(payload) {
	const newItem = payload
	// ref(path) to the db where you want add the new item
	// db/todo
	// path to where you will write to

	const dbRef = ref(db, 'todos')
	const key = push(dbRef).key

	return set(child(dbRef, key), payload)
}

export {createItemModel}
