import express, { Request, Response, handler } from 'express';
import * as userModel from '../domain/model/user';


const userRoute = express.Router();


/**
 * @swagger
 * /user/login:
 *    post:
 *      summary: Login for a User
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  properties:
 *                      name:
 *                          type: string
 *      responses:
 *         200:
 *            description: User name exists
 *            content:
 *              application/json:
 *                schema:
 *                  type: number
 *                  description: Database ID
 *         403:
 *            description: User name doesn't exist
 *            content:
 *              application/json:
 *                schema:
 *                  type: number
 *                  description: Database ID
 */
