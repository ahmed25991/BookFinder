
 

function searchBook(){

    var userSearch = document.getElementById('userInput').value ;
    var bookResult = document.getElementById('result') ; 


    bookResult.innerHTML = "";

    $.ajax({
        type : "GET",
        url : "https://www.googleapis.com/books/v1/volumes?q="+userSearch,
        dataType : "JSON",
        success : function (book){
            console.log(book);
            for(var i=0; i<book.items.length; i++){
                
                // create div for media container
                var bookDiv = document.createElement('div');
                bookDiv.className = 'media' ;

                // create image for book
                var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail ;

                // create div for title and description container
                var bookInfoDiv = document.createElement('div');
                bookInfoDiv.className ='media-body';

                // create h5 for book title
                var bookTitle = document.createElement('h5');
                bookTitle.className = 'mt-0' ;
                bookTitle.innerHTML = book.items[i].volumeInfo.title ;


                var author = document.createElement('h4');
                author.innerHTML = book.items[i].volumeInfo.authors ;

                var country = document.createElement('p');
                country.innerHTML ="Country:- " + book.items[i].accessInfo.country ;


                var description = document.createElement('p');
                description.innerHTML = book.items[i].volumeInfo.description;


                // create horizontal line
                var hrLine = document.createElement('hr');


                // append title and description into book info div container
                bookInfoDiv.appendChild(bookTitle);
                bookInfoDiv.appendChild(author);
                bookInfoDiv.appendChild(country);
                bookInfoDiv.appendChild(description);

                // append image to book div
                bookDiv.appendChild(image);
                // append title to book div
                bookDiv.appendChild(bookInfoDiv);
                // append book div to main div
                bookResult.appendChild(bookDiv);
                //append horizontal line to main dev
                bookResult.appendChild(hrLine);

            }
        }
    })

}