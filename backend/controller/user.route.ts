import express, { Request, Response } from 'express';
import * as userModel from '../domain/model/user';
import * as userService from "../service/user.service";

const userRouter = express.Router();


userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users)
    }catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
});