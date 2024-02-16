/* 
read
import { read, readSingleItem } from './lib/firebase/api/read'
console.log(await readSingleItem('-Nq0-HKmx3LobFcu4PPU/start'))

create
import { create } from './lib/firebase/api/create'
create()


update
import { edit } from './lib/firebase/api/update'
edit('-Nq0-HKmx3LobFcu4PPU', null)
*/
import { deleteItem } from './lib/firebase/api/delete'
const updateObj = {
	todo: 'test object todo',
	category: 'test object category',
	status: 'test object status',
	uid: 'test object uid',
}

async function appInit() {
	deleteItem('-NqjJtELpkUYEcYh_d83')
}

appInit()
