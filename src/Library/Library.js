import React, { useState } from "react";
import { Table } from "react-bootstrap";

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const Library = () => {
  const [booklist, setBooklist] = useState(books);
  const [filterBook, setFilterBook] = useState();
  const [search, setSearch] = useState("");

  function handleSelection(e) {
    const selectedGenre = e.target.value;

    console.log(selectedGenre);

    if (selectedGenre === "") {
      setFilterBook("");
      setBooklist(books);
    } else {
      setFilterBook(selectedGenre);
      const filteredBooks = books.filter(
        (book) => book.genre === selectedGenre
      );
      setBooklist(filteredBooks);
    }
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    if (searchValue === "") {
      setBooklist(books);
    } else {
      const searchBook = booklist.filter(
        (book) => book.title.toLowerCase().indexOf(searchValue) !== -1
      );
      setBooklist(searchBook);
    }
  };
  const allGenres = [...new Set(books.map((book) => book.genre))];

  return (
    <div>
      <h3>Library</h3>
      <input
        type="text"
        placeholder="Search Book..."
        name=""
        id=""
        value={search}
        onChange={handleSearch}
      />
      <select value={filterBook} onChange={handleSelection}>
        <option value="">All Genres</option>
        {allGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Publish Year</th>
            <th>Edition Year</th>
          </tr>
        </thead>
        <tbody>
          {booklist.length === 0 && <p>Books Not found ! </p>}
          {booklist.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.edition}</td>
              <td>{item.publish}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Library;
