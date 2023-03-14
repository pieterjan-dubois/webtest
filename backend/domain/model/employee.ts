import {Loan} from "./loan";

export class Employee {
    id?: number;
    name: string;
    lastname: string;
    salaris: number;
    email: string;

    loans: Loan[];


    constructor(id: number, name: string, lastname: string, salaris: number, email: string, loans: Loan[]) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.salaris = salaris;
        this.email = email;
        this.loans = loans;
    }

    static create({id, name, lastname, salaris, email}: {id?: number, name: string, lastname: string, salaris: number, email: string}): Readonly<Employee> {
        return {
            id,
            name,
            lastname,
            salaris,
            email,
            loans: [] as Loan[]
        } as const;
    }

  }