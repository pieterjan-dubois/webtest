import { User } from '../model/user';
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


let currentId = 1;

const users: User[] = [
    User.create({id:currentId++, name: 'John', lastname: 'Doe', address: 'Blablabla', email: 'john.doe@gmail.com', password: '12345'})
];


const getAllUsers = async (): Promise<User[]> => {
    try{
        const userPrisma = await prisma.user.findMany({
            include: { loans: true },
        })
        return mapToUsers(userPrisma)
    }catch (error){
        console.error(error)
        throw new Error('DB error. See service log')
    }
}
const getUserById = async (userId: number): Promise<User[]> => {
    try {
        const userPrisma = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {loans: true},
        })
        return mapToUsers(userPrisma)
    } catch (error) {
        console.error(error)
        throw new Error('DB error. See service log')
    }
}
const addUser = async (user: User): Promise<User> => {
    try {
        const userPrisma = await prisma.user.create({
            data: {
                name: user.name,
                lastname: user.lastname,
                address: user.address,
                email: user.email,
                password: user.password,
                loans: {
                    create: user.loans,
                },
            },
            include: {
                loans: true,
            },
        });

        return mapToUser(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('DB error. See service log');
    }
};

export default {getAllUsers, getUserById, addUser};
