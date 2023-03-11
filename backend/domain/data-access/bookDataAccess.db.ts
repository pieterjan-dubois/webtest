import { Book } from '../model/book';


    let currentId = 1;

    const books: Book[] = [
        Book.create({id:currentId++, title:'To Kill a Mockingbird', year:new Date(1960, 6, 11), author:'Harper Lee', publisher:'J. B. Lippincott & Co.'}),
        Book.create({id:currentId++, title: '1984', year: new Date(1949, 5, 8), author: 'George Orwell', publisher: 'Secker & Warburg'}),
        Book.create({id:currentId++, title: 'Pride and Prejudice', year: new Date(1813, 0, 28), author: 'Jane Austen', publisher: 'T. Egerton, Whitehall'}),
        Book.create({id:currentId++, title: 'The Great Gatsby', year: new Date(1925, 3, 10), author: 'F. Scott Fitzgerald', publisher: 'Scribner'}),
        Book.create({id:currentId++, title: 'The Catcher in the Rye', year: new Date(1951, 6, 16), author: 'J.D. Salinger', publisher: 'Little, Brown and Company'})
    ];

const getAllBooks = (): Book[] => books;

const getBookById = ({ id }: { id: number }): Book => books.find(book => book.id === id);

const addBook = (book: Book): number => books.push(book);

const updateBook = (updatedBook: Book): void => {
    const index = books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) books[index] = updatedBook;
};

const deleteBook = (id: number): void => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) books.splice(index, 1);
};

export default {getAllBooks, getBookById, addBook, updateBook, deleteBook};
