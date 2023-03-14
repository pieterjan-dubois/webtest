import {Loan} from "./loan";

export class User {
    id?: number;
    name: string;
    lastname: string;
    address: string;
    email: string;
    password: string;
    loans: Loan[];

    constructor(name: string, lastname: string, address: string, email: string, password: string) {
        this.email = email;
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.password = password;
        this.loans = [];
    }

    static create({id, name, lastname, address, email, password}: {id?: number, name: string, lastname: string, address: string, email: string, password: string}): Readonly<User> {
        return {
            id,
            name,
            lastname,
            address,
            email,
            password,
            loans: [] as Loan[]
        } as const;
    }
}