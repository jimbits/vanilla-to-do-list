import { ref, update, child } from 'firebase/database'
import { db } from './../config/firebaseInit'

/* 
    key
    object edit form was the object
    to the edit method
    updateObj ====== newToDoObject
*/
function edit(key, newToDoObject) {
	const updateObject = {
		todo: 'updated',
		category: 'xxx',
		status: 'updates',
		uid: 'test object uid',
		start: 'jimboslice',
	}
	const itemPath = `todos/${key}`
	// ref (path) key
	const dbRef = ref(db, itemPath)
	update(dbRef, updateObject)
}

export { edit }
