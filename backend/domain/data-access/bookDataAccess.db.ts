import { Book } from 'model/book';

class BookDataAccess {
    private books: Book[] = [
        new Book('The Great Gatsby', new Date(1925, 3, 10), 'F. Scott Fitzgerald', 'Scribner'),
        new Book('To Kill a Mockingbird', new Date(1960, 6, 11), 'Harper Lee', 'J. B. Lippincott & Co.'),
        new Book('1984', new Date(1949, 5, 8), 'George Orwell', 'Secker & Warburg')
    ];

    // Get all books
    getAllBooks(): Book[] {
        return this.books;
    }

    // Get a book by id
    getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    // Add a new book
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Update an existing book
    updateBook(updatedBook: Book): void {
        const index = this.books.findIndex(book => book.id === updatedBook.id);

        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }

    // Delete a book
    deleteBook(id: number): void {
        const index = this.books.findIndex(book => book.id === id);

        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
}
