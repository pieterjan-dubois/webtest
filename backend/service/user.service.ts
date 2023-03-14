import { User } from '../domain/model/user';
import userDB from "../domain/data-access/user.db";
import { UserInput } from '../types/types';
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => await userDB.getAllUsers();

const getUserById = ({ id }: UserInput): User => {
    if (Number.isNaN(Number(id))){
        throw new Error('Id must be numeric.');
    }

    const user = userDB.getUserById({ id: parseInt(String(id)) });

    if (!user){
        throw Error(`Book with ID: ${id} does not exist.`);
    }
    return user;
};

const addUser = ({ name, lastname, address, email, password }: UserInput): number => {
    const user = new User(name, lastname, address, email, password);
    return userDB.addUser(user);
};

export default { getAllUsers, getUserById, addUser };