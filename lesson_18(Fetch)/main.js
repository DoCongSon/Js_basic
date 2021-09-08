var userAPI = 'https://jsonplaceholder.typicode.com/users'

// fetch dùng để get API
// cách dùng:
fetch(userAPI)
    .then (function (response) {
        console.log(response)
        return response.json();
    })
    .then (function (result) {
        htmls = result.map(function (html) {
            return `<div>
                        <h1>User: ${html.username}</h1>
                        <h2>Name: ${html.name}</h2>
                        <h2>Email: ${html.email}</h2>
                        <h2>Phone: ${html.phone}</h2>
                        <h2>Website: <a href="${html.website}">${html.website}</a></h2>
                    </div>`
        })
        document.getElementById('user-list').innerHTML = htmls.join('\n')
    })