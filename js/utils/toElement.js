/* 
         Module converts an html template into to an element

*/

function toElement(template) {
	return document.createRange().createContextualFragment(template).children[0];
}

export { toElement };
