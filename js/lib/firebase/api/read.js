import { ref, get } from 'firebase/database'
import { db } from '../config/firebaseInit'

async function read() {
	const dbRef = ref(db, '/todos')
	const dataSnapshot = await get(dbRef)
	return await dataSnapshot.val()
}

async function readSingleItem(key) {
	// get a test key from your data
	// example -Nq0-HLET3bKpFk73tMf
	//const testKey = 'your test key here'
	const itemPath = `todos/${key}`
	// path rtdb/todos/-Nq0-HKmx3LobFcu4PPU
	const itemRef = ref(db, itemPath)
	const dataSnapshot = await get(itemRef)
	return await dataSnapshot.val()
}

export { read, readSingleItem }
