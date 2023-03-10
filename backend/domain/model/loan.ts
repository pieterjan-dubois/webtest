class Loan {
    id?: number;
    title: string;
    author: string;
    begindate: Date;
    expiredate: Date;
  
    constructor(title: string, author: string, begindate: Date, expiredate: Date) {
      if (!title) {
        throw new Error("Titel is required.");
      }
      if (!author) {
        throw new Error("Author is required.");
      }
      if (!begindate) {
        throw new Error("Begin date is required.");
      }
      if (!expiredate) {
        throw new Error("Expire date is required.");
      }
  
      this.title = title;
      this.author = author;
      this.begindate = begindate;
      this.expiredate = expiredate;
    }
  }