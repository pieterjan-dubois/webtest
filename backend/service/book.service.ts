import { Book } from '../domain/model/book';
import bookDataAccessDb from "../domain/data-access/bookDataAccess.db";
import { BookInput } from '../types/types';

const getAllBooks = (): Book[] => bookDataAccessDb.getAllBooks();

const getBookById = ({ id }: BookInput): Book => {
    if (Number.isNaN(Number(id))){
        throw new Error('Id must be numeric.');
    }

    const book = bookDataAccessDb.getBookById({ id: parseInt(String(id)) });

    if (!book){
        throw Error(`Book with ID: ${id} does not exist.`);
    }
    return book;
};

const addBook = ({ title, year, author, publisher }: BookInput): number => {
    const book = new Book(title, year, author, publisher);
    return bookDataAccessDb.addBook(book);
};

const updateBook = ({ id, title, year, author, publisher }: BookInput): void => {
    const book = new Book(title, year, author, publisher);
    book.id = id;
    bookDataAccessDb.updateBook(book);
};

const deleteBook = ({ id }: BookInput): void => {
    if (Number.isNaN(Number(id))){
        throw new Error('Id must be numeric.');
    }

    const book = bookDataAccessDb.getBookById({ id: parseInt(String(id)) });

    if (!book){
        throw Error(`Book with ID: ${id} does not exist.`);
    }

    bookDataAccessDb.deleteBook(id);
};

export default { getAllBooks, getBookById, addBook, updateBook, deleteBook };