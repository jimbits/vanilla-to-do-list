import { toElement } from '../lib/utils/toElement'
import { nanoid } from 'nanoid'
let dialogElem

function createItem(dialog) {
	dialogElem = dialog

	const template = `
	<section class=" w-full pb-14 ">
	<nav class="flex flex-end mb-8">
		<button
			id="close"
			class="ml-auto focus:outline-indigo-300 focus:bg-zinc-100 m-3 border-b-2 border-zinc-400">
			<svg class="w-4 h-4 fill-zinc-600 stroke-none" viewBox="0 0 24 24">
				<path fill="none" d="M0 0h24v24H0V0z"></path>
				<path
					d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
			</svg>
		</button>
	</nav>
	<header>
		<h1 class="text-center font-semibold text-zinc-700 text-3xl">
			Create Item
		</h1>
		<p class="text-[10px] text-center font-semibold text-zinc-700">
			item id:${nanoid()}
		</p>
	</header>
	<form id="edit-form" class="space-y-6 px-6 mb-12">
		<!-- Category -->
		<div>
			<label class="text-xs pl-1.5 font-semibold" for="category">
				Category
			</label>
			<input
				id="category"
				type="text"
				name="category"
				placeholder="Item category"
				required
				class="w-full border border-zinc-400 px-3 py-2 text-sm rounded-md placeholder:text-zinc-500 placeholder:text-xs" />
		</div>

		<!-- Status -->
		<div>
			<label class="text-xs pl-1.5 font-semibold" for="status">Status</label>
			<input
				id="status"
				name="status"
				type="text"
				placeholder="Item Status"
				required
				class="w-full border border-zinc-400 px-3 py-2 text-sm rounded-md placeholder:text-zinc-500 placeholder:text-xs" />
		</div>

		<!-- Status -->
		<div>
			<label class="text-xs pl-1.5 font-semibold" for="todo">Status</label>
			<textarea
				id="todo"
				name="todo"
				maxlength="75"
				class="w-full border border-zinc-400 px-3 py-2 text-sm rounded-md resize-none placeholder:text-zinc-500 placeholder:text-xs"
				placeholder="Item text description maximum 75 characters."></textarea>
		</div>

		<!-- Submit Button -->
		<div class="flex gap-5">
			<button
				id="exit"
				type="button"
				class="inline-block rounded-lg w-full border border-zinc-700 px-5 py-3 font-medium text-zinc-800">
				Exit
			</button>
			<button
				id="submit"
				type="submit"
				class="inline-block rounded-lg w-full bg-zinc-700 px-5 py-3 font-medium text-white">
				Create Item
			</button>
		</div>
	</form>
</section>
`
	const item = toElement(template)

	item.querySelector('#edit-form').addEventListener('submit', onEditItem, false)
	item.querySelector('#exit').addEventListener('click', onCloseDialog, false)
	item.querySelector('#close').addEventListener('click', onCloseDialog, false)

	return item
}

function onCloseDialog(e) {
	dialogElem.innerHTML = null
	dialogElem.close()
}

function onEditItem(e, data) {
	e.preventDefault()
	e.stopImmediatePropagation()
	console.log('update the item')
}

// add submit event
// add close event
// add close for exit button
// call update on our state
// call update on firebase data method

export { createItem }
