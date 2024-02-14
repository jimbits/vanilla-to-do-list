/* 
      toElement.js
      parameter
      template convert it to an element htmlish string
      template literal ==== jsx
*/

function toElement(template) {
	// docFrag like the dom in memory add template literal
	// template goes into the docFrag becomes an element
	// valid html

	return document.createRange().createContextualFragment(template).children[0]
}

export { toElement }
