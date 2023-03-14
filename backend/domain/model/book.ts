export class Book {
     id?: number;
    readonly title: string;
    readonly year: Date;
    readonly author: string;
    readonly publisher: string;
  
    constructor(title: string, year: Date, author: string, publisher: string) {

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
  