class Employee {
    id?: number;
    name: string;
    lastname: string;
    salaris: number;
    email: string;
  
    constructor(name: string, lastname: string, salaris: number, email: string) {
      if (!name) {
        throw new Error("Name is required.");
      }
      if (!lastname) {
        throw new Error("Lastname is required.");
      }
      if (!salaris) {
        throw new Error("Salaris date is required.");
      }

      if (!this.isValidEmail(email)) {
        throw new Error('Invalid email');
      }
    
      this.email = email;
      
  
      this.name = name;
      this.lastname = lastname;
      this.salaris = salaris;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

  }