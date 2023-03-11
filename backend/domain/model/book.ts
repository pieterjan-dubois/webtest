export class Book {
    readonly id?: number;
    readonly title: string;
    readonly year: Date;
    readonly author: string;
    readonly publisher: string;
  
    constructor(title: string, year: Date, author: string, publisher: string) {
      if (!title) {
        throw new Error("Titel is required.");
      }
      if (!author) {
        throw new Error("Author is required.");
      }
      if (!publisher) {
        throw new Error("Publisher is required.");
      }
      if (!year) {
        throw new Error("Year is required.");
      }

      this.title = title;
      this.year = year;
      this.author = author;
      this.publisher = publisher;
    }

    static create({id, title, year, author, publisher}: {id?: number, title: string, year: Date, author: string, publisher: string}): Readonly<Book> {
        return {
            id,
            title,
            year,
            author,
            publisher
        } as const;
    }

  }
  