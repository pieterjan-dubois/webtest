import { Employee } from '../model/employee';
import {PrismaClient} from "@prisma/client";
import {User} from "../model/user";
const prisma = new PrismaClient();

let currentId = 1;

const employees: Employee[] = [
    Employee.create({id:currentId++, name: 'John', lastname: 'Doe', salaris: 2300, email: 'john.doe@gmail.com'})
];

const getAllEmployees = async (): Promise<Employee[]> => {
    try{
        const userPrisma = await prisma.employee.findMany({
            include: { loans: true },
        })
        return mapToEmployees(userPrisma)
    }catch (error){
        console.error(error)
        throw new Error('DB error. See service log')
    }
}

const getEmployeeById = async (employeeId: { id: number }): Promise<Employee[]> => {
    try {
        const userPrisma = await prisma.employee.findUnique({
            where: {
                id: employeeId,
            },
            include: {loans: true},
        })
        return mapToEmployees(userPrisma)
    } catch (error) {
        console.error(error)
        throw new Error('DB error. See service log')
    }
}

const addEmployee = async (employee: Employee): Promise<Employee> => {
    try {
        const userPrisma = await prisma.employee.create({
            data: {
                name: employee.name,
                lastname: employee.lastname,
                salaris: employee.salaris,
                email: employee.email,
                loans: {
                    create: employee.loans,
                },
            },
            include: {
                loans: true,
            },
        });

        return mapToEmployees(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('DB error. See service log');
    }
};

export default {getAllEmployees, getEmployeeById, addEmployee};
