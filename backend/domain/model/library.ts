class Library {
    id?: number;
    name: string;
    address: Date;
    contact: string;
  
    constructor(name: string, address: Date, contact: string) {
  
      this.name = name;
      this.address = address;
      this.contact = contact;
    }
  }