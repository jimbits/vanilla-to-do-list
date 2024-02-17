import { toElement } from '../lib/utils/toElement'
let dialogElem
function deleteItem({ uid, todo, status, category, dialog }) {
	dialogElem = dialog
	const template = `
    <section
    class="w-full  flex flex-col justify-center py-14 ">
    
    <header class="mb-12">
        <h1 class="text-center font-semibold text-zinc-700 text-3xl">
            Delete To Do Item
        </h1>
        <p class="text-[10px] text-center font-semibold text-zinc-700">id:${uid}</p>
    </header>

    <footer class="flex items-center gap-4 w-4/5 mx-auto">
        <button
            id="close"
            type="button"
            class="rounded-lg w-full border border-zinc-700 px-5 py-2 font-medium text-zinc-700 text-lg">
            Exit
        </button>
        <button
            id="delete"
            type="button"
            class="inline-block rounded-lg w-full bg-zinc-700 px-5 py-2 font-medium text-white text-lg">
            Delete Item
        </button>
    </footer>
</section>
    `
	const item = toElement(template)
	console.log(item.querySelector('#close'))
	item.querySelector('#close').addEventListener('click', onCloseDialog)
	item.querySelector('#delete').addEventListener('click', onDeleteItem)
	// return item
	return item
}
function onCloseDialog(e) {
	dialogElem.innerHTML = null
	dialogElem.close()
}

function onDeleteItem(e) {
	console.log('Item Deleted')
}
export { deleteItem }
