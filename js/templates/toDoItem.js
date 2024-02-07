/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo) {
	const template = `
    <section class="bg-zinc-50 border-l-4 shadow-sm p-4">
       ${todo}
   </section>
    `;

	return toElement(template);
}

export { toDoItemTemplate };
