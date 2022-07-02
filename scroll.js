window.addEventListener('scroll', () => {
	const documentRect = document.documentElement.getBoundingClientRect()
	if (documentRect.bottom < document.documentElement.clientHeight+3) {
		Params.start = Params.limit * Params.page
		Params.page++
    console.log('scroll');

		getPostsAndRender()
	}
})
