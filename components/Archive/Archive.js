class Archive {
	handlerClear() {
		ROOT_ARCHIVE.innerHTML = ''
	}

	render() {
		const postsStore = localStorageUtil.getPosts()
		let htmlArchive = ``
		console.log(postsStore)

		// CATALOG.forEach(({ id, name }) => {
		// 	if (postsStore.indexOf(id) !== -1) {
		// 		htmlCatalog += `
		//     <tr>
		//       <td class='archive-element__name'>${name}</td>
		//     </tr>
		//     `
		// 	}
		// })

		CATALOG.forEach(({ id, title, url }) => {
			console.log({ id })
			if (postsStore.indexOf(String(id)) !== -1) {
				htmlArchive += `
					<tr>
						<td class='archive-element__name'><a href='${url}'>read</a></td>
						<td>${title}</td>
					</tr>
				`
			}
		})

		const html = `
      <div class='archive-container'>
        <img class='archive__close' src='../../image/close.png' onclick='archivePage.handlerClear()' />
        <table>
          ${htmlArchive}
        </table>
      </div>
`
		ROOT_ARCHIVE.innerHTML = html
	}
}

const archivePage = new Archive()
