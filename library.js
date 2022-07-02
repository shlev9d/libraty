async function fetchAndRenderPosts() {
  await archivePage.fetchLibraryPosts()
  archivePage.render()
}

fetchAndRenderPosts()