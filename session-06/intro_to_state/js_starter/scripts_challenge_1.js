// Challenge - Stage 1
let addBook = function (book) {
    // If there's no book to do, do nothing
    // data
    if (!book || book.length < 1) return;

    // Get the list
    // let list = document.querySelector('#app > #list');
    let list = document.querySelector('#app');

    // Create a new list item
    // let listItem = document.createElement('li');
    let listItem = document.createElement('p');

    listItem.textContent = book;

    // Append the item to the list
    list.appendChild(listItem);
};

let book = "Harry Potter IV";

addBook(book);




