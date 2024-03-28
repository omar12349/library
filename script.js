const showbtn = document.querySelector("#show")
const closebtn = document.querySelector("#close")
const dialog = document.querySelector("dialog")
const add = document.querySelector("#add")
const author1 = document.querySelector("#author1")
const title1 = document.querySelector("#title1")
const pages1 = document.querySelector("#pages1")
const read1 = document.querySelector("#read1")
showbtn.addEventListener('click',()=>{
  dialog.showModal()
})
closebtn.addEventListener('click',(e)=>{
  e.preventDefault();
  dialog.close();
})

let p = document.querySelector('p')


const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title
  this.author = author
  this.pages= pages
  this.read = read
  // the constructor...
}

add.addEventListener('click',()=>{
  let title = document.querySelector("#title")
  let author = document.querySelector("#author")
  let pages = document.querySelector("#pages")
  let read = document.querySelector("#read")
  let book1 = new Book(title.value,author.value,pages.value,read.value)
function addBookToLibrary() {
  myLibrary.push(book1)
  // do stuff here
}
  if(!title || !author || !pages || !read){
    alert('Enter Info Correctly')
  } else {
    addBookToLibrary()
  }
  for (let book of myLibrary){
    title1.textContent = 'book title is: ' + book.title
    author1.textContent = 'author is: ' + book.author
    pages1.textContent = 'No of pages: ' + book.pages
    read1.textContent = 'read or not read: ' + book.read
  }
})
