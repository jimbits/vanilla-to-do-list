/* 
                Read Data from RTDB 


*/

import { ref, get } from 'firebase/database';
import { db } from './config/firebase/firebaseInit';

/* 
          1. connect to the to do list
               reference  ref
               const dbRef = ref(db, "/todos")

          Asking for the data from that ref   path to a node in the JSON file...
          get(ref)===> data snapshot

          extracting the data
          snapshot.val()

*/

async function getToDoData() {
	const dbRef = ref(db, '/todos');
	const dataSnapshot = await get(dbRef);
	return await dataSnapshot.val();
}

export { getToDoData };
