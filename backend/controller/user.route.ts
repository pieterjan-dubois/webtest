import express, { Request, Response, handler } from 'express';
import * as userModel from '../domain/model/user';


const userRouter = express.Router();
