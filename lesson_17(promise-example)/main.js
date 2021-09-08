var listUser = [
    {name: 'son', id: 2001},
    {name: 'trang', id: 2008},
    {name: 'thien', id: 2010},
    {name: 'phương', id: 2000}
]

var listComments = [
    {id: 1, content: 'comment 1 của trang', user_id: 2008},
    {id: 2, content: 'comment 1 của thiện', user_id: 2010},
    {id: 3, content: 'comment 2 của thiện', user_id: 2010},
    {id: 4, content: 'comment 2 của trang', user_id: 2008},
    {id: 5, content: 'comment của sơn', user_id: 2001}
]

var getComments = function () {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(listComments)
        }, 1000)
    });
}

var getUsers = function (listUserID) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var list = listUser.filter(function (i) {
                return listUserID.includes(i.id);
            })
            resolve(list);
        }, 1000);
    });
}

getComments()
    .then(function (comments) {
        var listUserID = comments.map(function (comment) {
            return comment.user_id
        })
        return getUsers(listUserID)
            .then(function (listUsers) {
                return {
                    listUsers: listUsers,
                    comments: comments
                }
            })
    })
    .then(function (users) {
        var html = ""
        users.comments.forEach(function (comment) {
            var user = users.listUsers.find(function (i) {
                return i.id === comment.user_id;
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        document.getElementById('box-cmt').innerHTML = html
    })
