import {ref, remove} from 'firebase/database'
import {db} from '../lib/firebase/config/firebaseInit'
function deleteItem(key) {
	//  key parameter  -NqjK3rt8coCDGMsn7zX

	// create a path for the dbRef
	const path = `todos/${key}`
	// ref path to the item to delete
	const dbRef = ref(db, path)

	// remove item
	remove(dbRef)
}

export {deleteItem}
