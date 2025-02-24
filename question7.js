// 7.1  Spread med arrayer (2p)
  // Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
  // och använder spread operatorn för att kombinera dem till en enda array.
  // Returnera den nya arrayen
  const array1 = [1,2,3]
  const array2 = [4,5,6]

  function combineArrays(arr1, arr2) {
    // Din kod här.
    newArray = [...arr1, ...arr2]
    console.log(newArray)
  }

 
  



// 7.2 Spread med objekt (2p)
// Skapa en funktion 'updateBook' som tar emot ett objekt som argument
// och använder spread operatorn för att uppdatera objektet med en ny rating
const books = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  rating: 4.5
};

function updateBookRating(book, newRating) {
  // Din kod här.
const updatedBook = {...book, }

}


  //Test
  combineArrays(array1,array2)
  //console.log(updateBook(book, 5)); // Ska logga { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, rating: 5 } */