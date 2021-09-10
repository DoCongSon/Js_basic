var bookApi = 'http://localhost:3000/book'

function start() {
    // getBook(function (books) {
    //     renderBookToHtml(books)
    // });
    getBook(renderBookToHtml);

    handleAddBook();
    handleFixBook();
}

start()

// function
function getBook(callback) {
    fetch(bookApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function addBook (data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(bookApi, options)
        .then (function (response) {
            return response.json()
        })
        .then (callback);
}

function fixBook (idBook, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    fetch(`${bookApi}/${idBook}`, options)
        .then (function (response) {
            return response.json()
        })
        .then (callback);
}

function handleDeleteBook(idBook) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(`${bookApi}/${idBook}`, options)
        .then (function (response) {
            return response.json()
        })
        .then (getBook(renderBookToHtml));
}

function renderBookToHtml(books) {
    var listBookElement = document.getElementById("list-book");
    var htmls = books.map(function (book) {
        return `
            <li>
                <div>
                    <h3 style="color: red;">ID: ${book.id}</h3>
                    <h4>Tên: <span>${book.name}</span></h4>
                    <h5>Giá: <span>${book.price}</span></h5>
                    <p>Mô tả: <span>${book.description}</span></p>
                    <button type="submit" onclick="handleDeleteBook(${book.id})">Xoá</button>
                </div>
            </li>
        `
    })
    listBookElement.innerHTML = htmls.join("")
}

function handleAddBook() {
    var addButton = document.getElementById("add");

    addButton.addEventListener("click", function() {
        var bookName = document.querySelector('input[name="name"]');
        var bookPrice = document.querySelector('input[name="price"]');
        var bookDescription = document.querySelector('input[name="description"]');
        
        var bookData = {
            name: bookName.value,
            price: bookPrice.value,
            description: bookDescription.value
        }
        addBook(bookData, getBook(renderBookToHtml))
    })
}

function handleFixBook() {
    var fixButton = document.getElementById("fix");
    var submitButton = document.getElementById("submit");
    fixButton.addEventListener("click", function() {

        var books = document.querySelectorAll("#list-book li")
        var idBook = prompt("nhập ID sách cần sửa:")
        var book = books[idBook - 1]

        var bookName = document.querySelector('input[name="name"]');
        var bookPrice = document.querySelector('input[name="price"]');
        var bookDescription = document.querySelector('input[name="description"]');
        bookName.value = book.querySelector("h4 span").innerText;
        bookPrice.value = book.querySelector("h5 span").innerText;
        bookDescription.value = book.querySelector("p span").innerText;  
        submitButton.addEventListener("click",function () {
            var bookData = {
                name: bookName.value,
                price: bookPrice.value,
                description: bookDescription.value
            }
            fixBook(idBook, bookData, getBook(renderBookToHtml));
        })
    })
}