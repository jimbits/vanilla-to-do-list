function render(data, domContainer, createElement = 'div') {
	const div = document.createElement(createElement)

	data.forEach((item) => {
		console.log(item)
	})
}

export {render}
