import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';
/* 
           1. Import Data 
		   2. Working with Object of Objects 
		      Object.values()
			  Object.keys()
			  Object.entries()

		    3. Creating A Template Preline... Tailwind UI Libraries 

			4. Creating A Render Function 

			5 Updating the DOM.

			Display Templating 
			toDoItems.forEach((todo) => {
		      document.querySelector('#root').insertAdjacentHTML('afterbegin', todo);
	         });

			  
*/

async function appInit() {
	const appData = await getToDoData();
	// Interactive Templating
	const toDoItems = Object.values(appData).map((obj) => {
		return toDoItemTemplate(obj.todo);
	});

	// render function jsx +++ data
	// template fn() passing the data   =====> template string htmlish string

	// interactive templating
	// container
	// batch update .... to dom updates all at once
	const div = document.createElement('div');
	toDoItems.forEach((markup) => {
		div.appendChild(markup);
	});
	document.querySelector('main').append(markup);
}

appInit();
