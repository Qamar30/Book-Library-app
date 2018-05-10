//Book Constructor
function Book(title, author, isbn) {

    this.title = title;
    this.author = author;
    this.isbn = isbn;


}




// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}


// Show Alert

UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

 }
 var setTimeout= (function(setTimeout) {

 document.querySelector('.alert').remove();
 }, 3000); 



//Delete Book

UI.prototype.deleteBook = function(target) {

    if (target.classname === 'delete') {

        target.parentElement.parentElement.remove();
    }



}


// Clear Fields

UI.prototype.clearFields = function() {

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';




}


//Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {

 const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value



    // body...


    //Insanstiate book

    var book = new Book(title, author, isbn);

    // instantiate Ui

    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {

        ui.showAlert('Please fill in all fields', 'error');

    } else {

      	ui.addBookToList(Book);


        ui.showAlert('Book Added', 'success');

        ui.clearFields();
    }

    e.preventDefault();
});

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {


    //Instantiate UI

    var ui = new UI();

    // Delete Book

    ui.deleteBook(e.target);


    //Show message

    ui.showAlert(' Book Removed!', 'success');

    e.preventDefault();


});