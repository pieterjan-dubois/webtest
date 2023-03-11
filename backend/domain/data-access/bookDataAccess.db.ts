import { Book } from './book';

class BookDataAccess {
    private books: Book[] = [
        new Book('The Great Gatsby', new Date(1925, 3, 10), 'F. Scott Fitzgerald', 'Scribner'),
        new Book('To Kill a Mockingbird', new Date(1960, 6, 11), 'Harper Lee', 'J. B. Lippincott & Co.'),
        new Book('1984', new Date(1949, 5, 8), 'George Orwell', 'Secker & Warburg')
    ];

    getAllBooks = (): Book[] => {
        return this.books;
    };

    getBookById = ({ id }: { id: number }): Book | undefined => {
        return this.books.find(book => book.id === id);
    };

    addBook = (book: Book): void => {
        this.books.push(book);
    };

    updateBook = (updatedBook: Book): void => {
        const index = this.books.findIndex(book => book.id === updatedBook.id);

        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    };

    deleteBook = (id: number): void => {
        const index = this.books.findIndex(book => book.id === id);

        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
}