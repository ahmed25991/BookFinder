
 

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


                var author = document.createElement('h6');
                author.innerHTML ="<b>Author</b>:- " +book.items[i].volumeInfo.authors ;

                var country = document.createElement('p');
                country.innerHTML ="<b>Country</b>:- " + book.items[i].accessInfo.country ;


                var pages = document.createElement('p');
                pages.innerHTML ="<b>Pages</b>:- " + book.items[i].volumeInfo.pageCount ;

                var publishYear = document.createElement('p');
                publishYear.innerHTML ="<b>Published</b>:- " + book.items[i].volumeInfo.publishedDate ;

                var publisher = document.createElement('p');
                publisher.innerHTML ="<b>Publisher</b>:- " + book.items[i].volumeInfo.publisher ;

                var description = document.createElement('p');
                description.innerHTML = book.items[i].volumeInfo.description;



                var link = document.createElement('a');
                link.innerHTML ="View more" ;
                link.href = book.items[i].volumeInfo.previewLink ;


                // create horizontal line
                var hrLine = document.createElement('hr');


                // append title and description into book info div container
                bookInfoDiv.appendChild(bookTitle);
                bookInfoDiv.appendChild(author);
                bookInfoDiv.appendChild(country);
                bookInfoDiv.appendChild(pages);
                bookInfoDiv.appendChild(publishYear);
                bookInfoDiv.appendChild(publisher);
                bookInfoDiv.appendChild(description);
                bookInfoDiv.appendChild(link);

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