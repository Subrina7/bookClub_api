import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";

const BookContainer = () => {

    const[books, setBooks] = useState([]);
    const[error, setError] = useState("");

const fetchBook = async () => {
    const response = await fetch("https://openlibrary.org/books/OL33891821M.json");
    const jsonData = await response.json();

    setBooks(jsonData)
}

useEffect(() => {
    fetch(`https://openlibrary.org/books/OL33891821M.json`)
      .then((response) => response.json())
      .then((response) => setBooks(response.works))
      .catch((err) => setError(err.message));
}, []);

    return (
        <>
        <h1>Hey from the book container</h1>
        <BookForm/>
        <BookList books={books}/>
        {error && <p>Error: {error}</p>}
        </>
    );
}
 
export default BookContainer;
