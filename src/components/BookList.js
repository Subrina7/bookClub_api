import Book from "./Book";

const BookList = ({ books }) => {
  const bookComponents = books 
    ? books.map((book, index) => {
        return (
          <Book key={index} book={book} />
        );
      })
    : null;

  return (
    <>
      <h2>Books</h2>
      {bookComponents}
    </>
  );
};

export default BookList;
