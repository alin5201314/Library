function makeBookCards(cardContainer){
    for(let i = 0; i < myBooks.length;i++){
        let grid = document.createElement("div")
        grid.classList.add('bookCard')

        let cardTitle = document.createElement("h1");
        cardTitle.textContent = myBooks[i].title;
        grid.appendChild(cardTitle);

        let cardAuthor = document.createElement("p");
        cardAuthor.textContent = "Author: " + myBooks[i].author;
        grid.appendChild(cardAuthor);

        let cardPages = document.createElement("p");
        cardPages.textContent = "Pages: " + myBooks[i].pages;
        grid.appendChild(cardPages);

        let cardRead = document.createElement("p");
        cardRead.textContent = "Read: " + (myBooks[i].read ? "Yes, I Finished" : "No, Never Read This");
        grid.appendChild(cardRead);

        let cardButtonContainer = document.createElement("div")
        cardButtonContainer.classList.add("cardButtonsContainer")

        let removeBook = document.createElement("button")
        removeBook.textContent = "Remove Book";
        let readBook = document.createElement("button")
        readBook.textContent = "Complete"

        cardButtonContainer.appendChild(removeBook)
        cardButtonContainer.appendChild(readBook)

        grid.appendChild(cardButtonContainer)
        cardContainer.appendChild(grid)
        cardContainer.append()
    }

}

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

const titles = [
    "1984",
    "To Kill a Mockingbird",
    "Pride and Prejudice",
    "The Great Gatsby",
    "One Hundred Years of Solitude",
    "The Catcher in the Rye",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Diary of a Young Girl",
    "The Hobbit"
];

const pages = [
    328, // for "1984"
    281, // for "To Kill a Mockingbird"
    432, // for "Pride and Prejudice"
    180, // for "The Great Gatsby"
    417, // for "One Hundred Years of Solitude"
    234, // for "The Catcher in the Rye"
    309, // for "Harry Potter and the Sorcerer's Stone"
    423, // for "The Lord of the Rings: The Fellowship of the Ring"
    283, // for "The Diary of a Young Girl"
    310  // for "The Hobbit"
];

const authors = [
    "George Orwell", // for "1984"
    "Harper Lee", // for "To Kill a Mockingbird"
    "Jane Austen", // for "Pride and Prejudice"
    "F. Scott Fitzgerald", // for "The Great Gatsby"
    "Gabriel Garcia Marquez", // for "One Hundred Years of Solitude"
    "J.D. Salinger", // for "The Catcher in the Rye"
    "J.K. Rowling", // for "Harry Potter and the Sorcerer's Stone"
    "J.R.R. Tolkien", // for "The Lord of the Rings: The Fellowship of the Ring"
    "Anne Frank", // for "The Diary of a Young Girl"
    "J.R.R. Tolkien"  // for "The Hobbit"
];

const read = [false,true,false,true,false,false,false,false,false,false]


const myBooks = []

for (let i = 0; i < authors.length; i++) {
    myBooks.push(new Book(titles[i], authors[i], pages[i], read[i]));
}



console.log(myBooks);

const cardContainer = document.querySelector('div.container > div.content > div.contentCards');
makeBookCards(cardContainer)
console.log(cardContainer);



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector(".bookButtonClose");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click",()=>{
    dialog.close();
});


const form = document.getElementById('bookForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    console.log(bookInfo = document.getElementById("bookForm").elements); 
    let isFull = true
    for (let info of bookInfo) {
        if (info.type !== 'checkbox' && info.value === '') {
            isFull = false;
            break;
        }

    }
    if (isFull) {
        let readStatus = bookInfo['read'].checked; // true if checked, false otherwise
        myBooks.push(new Book(bookInfo['title'].value, bookInfo['author'].value, bookInfo['pages'].value, readStatus));
    }
    console.log(myBooks);
    if(isFull){
        form.reset();
        dialog.close();
    }
});





// function addBookToLibrary() {
// // do stuff here
// }


