class Error{
  render() {
const html = `
<div class='error-container'>
  	<div class='error-message'>
		<h3>Request error</h3>
		<p>Try to come back later</p>
	</div>
</div>
`

ROOT_ERROR.innerHTML = html
  }
}

const errorPage = new Error()