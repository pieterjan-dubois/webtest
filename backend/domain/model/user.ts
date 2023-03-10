class User {
    id?: number;
    name: string;
    lastname: string;
    address: string;
    email: string;
  
    constructor(name: string, lastname: string, address: string, email: string) {
      if (!name) {
        throw new Error("Name is required.");
      }
      if (!lastname) {
        throw new Error("Name is required.");
      }
      if (!address) {
        throw new Error("Name is required.");
      }

      if (!this.isValidEmail(email)) {
        throw new Error('Invalid email');
      }
    
      this.email = email;
      this.name = name;
      this.lastname = lastname;
      this.address = address;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

  }
  
