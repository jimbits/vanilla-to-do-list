import {toElement} from '../lib/utils/toElement'

function itemView({todo, category, status, uid, description}) {
	const template = `
    <aside class="bg-gradient-to-r mb-3 from-white from-30% to-zinc-100/50 to-40%   py-2 pl-5 pr-3  border-l-4  border-b border-b-zinc-100 border-zinc-400/60">
    <nav class="flex items-center justify-between mb-2">
        <div class="text-center">
            <h2 class="w-fit text-xs text-zinc-400 font-semibold leading-[10px]">${category}</h2>
            <p class="text-[10px] text-gray-500 font-extralight">${status}</p>
        </div>
        <div>
            <button id="editItem">
                <svg class="w-4 h-4 fill-zinc-400 stroke-current stroke-0 hover:fill-zinc-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                    <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                </svg>
            </button>
            <button id="deleteItem">
                <svg class="w-4 h-4 fill-zinc-400 stroke-current stroke-0 hover:fill-zinc-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z"></path>
                </svg>
            </button>
        </div>
    </nav>

    <p class="text-xs text-zinc-700 font-bold ">${todo}</p>
    <p class="text-xs text-zinc-400 mb-2">${description}</p>
</aside>
    `
	// convert template literal to element why?
	// adding interactivity htmlish string
	return toElement(template)
}

export {itemView}
