import { Employee } from '../domain/model/employee';
import { EmployeeInput } from '../types/types';
import EmployeeDb from "../domain/data-access/employee.db";

const getAllEmployees = (): Employee[] => EmployeeDb.getAllEmployees();

const getEmployeeById = ({ id }: EmployeeInput): Employee => {
    if (Number.isNaN(Number(id))){
        throw new Error('Id must be numeric.');
    }

    const employee = EmployeeDb.getEmployeeById({ id: parseInt(String(id)) });

    if (!employee){
        throw Error(`Book with ID: ${id} does not exist.`);
    }
    return employee;
};

const addEmployee = ({ name, lastname, salaris, email }: EmployeeInput): number => {
    const employee = new Employee(name, lastname, salaris, email);
    return EmployeeDb.addEmployee(employee);
};

export default { getAllEmployees, getEmployeeById, addEmployee };