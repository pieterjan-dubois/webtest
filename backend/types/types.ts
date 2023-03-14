import {Loan} from "../domain/model/loan";
import {User} from "../domain/model/user";
import {Employee} from "../domain/model/employee";

export interface BookInput {
    id: number;
    title: string;
    year: Date;
    author: string;
    publisher: string;
}

export interface UserInput {
    id?: number;
    name: string;
    lastname: string;
    address: string;
    email: string;
    password: string;
    loans: Loan[];
}

export interface LoanInput {
    id?: number;
    title: string;
    author: string;
    begindate: Date;
    enddate: Date;
    user: User;
    employee: Employee;
}

export interface EmployeeInput {
    id: number;
    name: string;
    lastname: string;
    salaris: number;
    email: string;
    loans: Loan[];
}

