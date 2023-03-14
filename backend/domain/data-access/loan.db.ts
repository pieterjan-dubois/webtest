import { Employee } from '../model/employee';
import {PrismaClient} from "@prisma/client";
import {User} from "../model/user";
import {Loan} from "../model/loan";
const prisma = new PrismaClient();


let currentId = 1;



const getAllLoans = async (): Promise<Loan[]> => {
    try{
        const loanPrisma = await prisma.loans.findMany({
            include: { users: true, employees: true }
        })
        return mapToLoans(loanPrisma)
    }catch (error){
        console.error(error)
        throw new Error('DB error')
    }
}



