import { useState, useEffect } from "react";

const BookContainer = () => {

    const[book, setBook] = useState([]);

const fetchBook = async () => {
    const response = await fetch("https://openlibrary.org/books/OL33891821M.json");

    const jsonData = await response.json();

    setBook(jsonData)
}

useEffect(() => {
    fetchBook();
}, [])
    return (
        <>
        <h1>Hey from the book container</h1>
        </>
    );
}
 
export default BookContainer;