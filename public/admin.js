//QUESTION
//When I did the npm install and npm start
//to make the local server, git bash wouldn't let me
//do any git adds or git commits. Is there a way I'm 
//supposed to do that? I had to leave the git commit for the end.

//Fetch code I put into console log to change 
//book title to Legends of Arathrae

// fetch('http://localhost:3001/updateBook', {
//     method: 'PATCH', //patch to update
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         'id': 3,
//         'title': 'Legends of Arathrae',
//     }),
// })

// Your Code Here

//Just needed the beginning of the main function from index.js
async function main(){

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook);
    addBook();
}

function renderBook(book){
    //Grabbing the main div
    let root = document.getElementById('root')

    //Creating a list and placing all book titles into it
    let bookList = document.createElement('li');
    bookList.textContent = book.title;

    //Create input for quantity of each book
    let quantity = document.createElement('input');
    quantity.value = book.quantity;

    //Created save button to go next to each quantity
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    //Event listener on each save button for fetch request
    //PATCH method needed to update each quantity upon click
    saveButton.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook', {
            //PATCH for updating
            method: 'PATCH',
            //Required headers to tell fetch that the content is json
            headers: {
                'Content-Type': 'application/json'
            },
            //stringify body because fetch is picky
            body: JSON.stringify({
                //Then need book id and quantity
                id: book.id,
                quantity: quantity.value
            })

        })

    })

    //appending everything to the root
    root.append(bookList, quantity, saveButton);
}

//Haven't finished the bonus yet, 
//but I may come back if there's time. Just need to switch
//over to the other homework.

function addBook(){
    //grabbing root so button can be appended
    let root = document.getElementById('root')
    //creating a space so the newButton won't be right
    //next to the save button
    let space = document.createElement('br');

    //Add New Book
    let addBook = document.createElement('h3');
    addBook.textContent = 'Add New Book';
    root.append(addBook);

    //Creating Inputs
    let label;
    let input;
    let paraBreak; //break in between the input fields

    //Title
    label = document.createElement('label');
    label.innerHTML = 'Title: ';
    document.body.appendChild(label);
    input = document.createElement('input')
    input.setAttribute('type', 'text');
    paraBreak = document.createElement('br');
    document.body.appendChild(input);
    document.body.appendChild(paraBreak);

    //Description
    label = document.createElement('label');
    label.innerHTML = 'Description: ';
    document.body.appendChild(label);
    input = document.createElement('input')
    input.setAttribute('type', 'text');
    paraBreak = document.createElement('br');
    document.body.appendChild(input);
    document.body.appendChild(paraBreak);

    //Book's Image URL
    label = document.createElement('label');
    label.innerHTML = 'Image URL: ';
    document.body.appendChild(label);
    input = document.createElement('input')
    input.setAttribute('type', 'url');
    paraBreak = document.createElement('br');
    document.body.appendChild(input);
    document.body.appendChild(paraBreak);

    //creating new book button
    let newButton = document.createElement('button');
    newButton.textContent = 'Add New Book';
    document.body.appendChild(newButton);

    //Using fetch to add new book
    newButton.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook', {
            //POST for adding new info
            method: 'POST',
            //Required headers to tell fetch that the content is json
            headers: {
                'Content-Type': 'application/json'
            },
            //stringify body because fetch is picky
            body: JSON.stringify({
                //Then need book id and quantity
                id: book.id,
                quantity: quantity.value
            })

        })

    })


}

//invoke main program
main();