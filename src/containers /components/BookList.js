import Book from "./Book";

const BookList = ({ books }) => {
  const bookComponents = books.map((book) => {

    return (
      <Book key={book.key}
            book={book}/>
    );
  });

  return (
    <>
      <h2>Books</h2>
      {bookComponents}
    </>
  );
};

export default BookList;