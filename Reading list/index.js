var books = [
    {title: 'The lord of the Rings',
    author:'JRR.Tolkein',
    alreadyRead: false
},
{
    title : 'The Hobbit',
    author : 'JRR.Tolkein',
    alreadyRead: true
}];
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}



  
  
  