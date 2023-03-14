import { Employee } from '../domain/model/employee';
import { EmployeeInput } from '../types/types';
import EmployeeDb from "../domain/data-access/employee.db";

const getAllEmployees = async (): Promise<Employee[]> => await EmployeeDb.getAllEmployees();

const getEmployeeById = ({ id }: EmployeeInput): Promise<Employee[]> => {
    if (Number.isNaN(Number(id))){
        throw new Error('Id must be numeric.');
    }

    const employee = EmployeeDb.getEmployeeById({ id: parseInt(String(id)) });

    if (!employee){
        throw Error(`Book with ID: ${id} does not exist.`);
    }
    return employee;
};

const addEmployee = ({ id, name, lastname, salaris, email,loans }: EmployeeInput): Promise<Employee> => {
    const employee = new Employee(id, name, lastname, salaris, email, loans);
    return EmployeeDb.addEmployee(employee);
};

export default { getAllEmployees, getEmployeeById, addEmployee };