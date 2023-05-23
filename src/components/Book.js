const Book = ({book}) => {
    // TRYING TO GET THE BOOK TITLE, PUBLISHER, PUBLISH DATE AND DESCRIPTION ON THE PAGE??!?!!?!?!?!? 
    return ( 
        <div className="Book Properties">

          <h2>Title: {book.title}</h2>
          <p>Publishers: {book.publishers && books.publishers[0]}</p>
        </div>
      );
    }; 
 
export default Book;