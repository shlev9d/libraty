const makeRequest  = async (url) => {
  const responce = await fetch(`${BASE_API}${url}`);
  return await responce.json()
}


const getPosts = async (start, limit) => {
  return await makeRequest(`/articles?_limit=${limit}&_start=${start}`)
}

const getPostCount = async () => {
	return await makeRequest(`/articles/count`)
}

const getPostsById = async (id) => {
  return await makeRequest(`/articles/${id}`)
}

const Api = {
	getPosts,
	getPostCount,
  getPostsById
}
